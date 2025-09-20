# -*- coding: utf-8 -*-
"""
Created on Thu Sep 11 19:28:01 2025

@author: shika
"""

# cache_inspect_idx0.py
# Reconstructs idx0->dat, prints archive tables, and extracts flo.dat/flo2.dat
import os
import struct
import gzip
import bz2
import sys

SECTOR_SIZE   = 520
HEADER_SMALL  = 8       # 2(file) + 2(chunk) + 3(next) + 1(cache_id)
PAYLOAD_SMALL = 512     # sectors are 520; RS small header effectively 8, payload 512

# ---- helper: read idx file ----
def read_idx_file(path):
    entries = []
    with open(path, "rb") as f:
        data = f.read()
    off = 0
    file_id = 0
    while off + 6 <= len(data):
        length = (data[off]   << 16) | (data[off+1] << 8) | data[off+2]
        start  = (data[off+3] << 16) | (data[off+4] << 8) | data[off+5]
        entries.append((file_id, length, start))
        file_id += 1
        off += 6
    return entries

# ---- DAT reader (compatible with idx0..idx5 small headers) ----
class datReader:
    def __init__(self, dat_path, idx_entries, expected_cache_id: int):
        self.dat = open(dat_path, "rb")
        self.idx = {i: (length, start) for (i, length, start) in idx_entries}
        self.cache_id = expected_cache_id

    def read_file(self, file_id, verbose=False):
        if file_id not in self.idx:
            raise KeyError(f"file {file_id} not found in idx")
        length, sector = self.idx[file_id]

        if verbose:
            print(f"Reading file {file_id}: length={length}, first sector={sector}")

        remaining = length
        out = bytearray()
        chunk = 0

        visited = set()
        while sector != 0 and remaining > 0:
            if sector in visited:
                raise ValueError(f"Loop detected at sector {sector} for file {file_id}")
            visited.add(sector)

            pos = sector * SECTOR_SIZE
            self.dat.seek(pos)

            # small header
            header = self.dat.read(HEADER_SMALL)
            if len(header) != HEADER_SMALL:
                raise ValueError(f"OOB: sector {sector} header too short")

            file_hdr  = (header[0] << 8) | header[1]
            chunk_hdr = (header[2] << 8) | header[3]
            next_sec  = (header[4] << 16) | (header[5] << 8) | header[6]
            cache_hdr = header[7]

            if verbose:
                print(f"  Sector={sector}, Chunk={chunk}, Header: file={file_hdr}, chunk={chunk_hdr}, next={next_sec}, cache={cache_hdr}")

            if file_hdr != (file_id & 0xFFFF):
                raise ValueError(f"Header file mismatch at sector {sector}: expected {file_id}, got {file_hdr}")
            if chunk_hdr != (chunk & 0xFFFF):
                raise ValueError(f"Header chunk mismatch at sector {sector}: expected {chunk}, got {chunk_hdr}")
            if cache_hdr != self.cache_id:
                raise ValueError(f"Header cache id mismatch at sector {sector}: expected {self.cache_id}, got {cache_hdr}")

            payload = self.dat.read(PAYLOAD_SMALL)
            if len(payload) != PAYLOAD_SMALL:
                raise ValueError(f"OOB: sector {sector} payload too short")

            # append up to remaining bytes
            take = min(remaining, len(payload))
            out += payload[:take]
            remaining -= take

            sector = next_sec
            chunk += 1

        if remaining != 0:
            raise ValueError(f"Length mismatch: expected {length}, got {len(out)}")

        return bytes(out)

# ---- archive sniffing helpers ----
def _is_gzip(b: bytes) -> bool:
    return len(b) >= 2 and b[0] == 0x1F and b[1] == 0x8B

def _is_bzip2(b: bytes) -> bool:
    return len(b) >= 3 and b[:3] == b'BZh'

def _parse_jagex_header(b: bytes):
    # 6-byte header: 3-byte decompressed size + 3-byte compressed size
    if len(b) < 6:
        return None
    decomp = (b[0] << 16) | (b[1] << 8) | b[2]
    comp   = (b[3] << 16) | (b[4] << 8) | b[5]
    if decomp == 0 and comp == 0:
        return None
    return (decomp, comp)

def _looks_like_rs_archive_table(payload: bytes) -> bool:
    # 2 bytes: entry count, then n * 10 metadata bytes
    if len(payload) < 2:
        return False
    n = struct.unpack_from(">H", payload, 0)[0]
    need = 2 + n * 10
    return (n > 0) and (need <= len(payload))

# ---- Archive container (handles gzip, bzip2, jagex header, raw) ----
class Archive:
    def __init__(self, data: bytes):
        self.payload = b""
        self.is_compressed = False

        # Case A: bare gzip/bzip2
        if _is_gzip(data):
            try:
                self.payload = gzip.decompress(data)
                self.is_compressed = True
            except Exception:
                self.payload = data
        elif _is_bzip2(data):
            try:
                self.payload = bz2.decompress(data)
                self.is_compressed = True
            except Exception:
                self.payload = data
        else:
            # Case B: jagex 6-byte header
            hdr = _parse_jagex_header(data)
            if hdr:
                decomp, comp = hdr
                stream = data[6:6+comp]
                if _is_bzip2(stream):
                    try:
                        self.payload = bz2.decompress(stream)
                        self.is_compressed = True
                    except Exception:
                        self.payload = stream
                elif _is_gzip(stream):
                    try:
                        self.payload = gzip.decompress(stream)
                        self.is_compressed = True
                    except Exception:
                        self.payload = stream
                else:
                    # uncompressed inside header
                    self.payload = stream
                    self.is_compressed = (decomp != comp)
            else:
                # Case C: raw
                self.payload = data

        # Try to parse multi-entry table
        if _looks_like_rs_archive_table(self.payload):
            self.data_size = struct.unpack_from(">H", self.payload, 0)[0]
            self.hash_table = [0] * self.data_size
            self.size_table = [0] * self.data_size
            self.unpacked_size_table = [0] * self.data_size
            self.indice_table = [0] * self.data_size

            pos = 2 + self.data_size * 10
            for i in range(self.data_size):
                base = 2 + i * 10
                self.hash_table[i] = struct.unpack_from(">I", self.payload, base)[0]
                self.size_table[i] = (self.payload[base+4] << 16) | (self.payload[base+5] << 8) | self.payload[base+6]
                self.unpacked_size_table[i] = (self.payload[base+7] << 16) | (self.payload[base+8] << 8) | self.payload[base+9]
                self.indice_table[i] = pos
                pos += self.unpacked_size_table[i]
        else:
            self.data_size = 1
            self.hash_table = []
            self.size_table = [len(self.payload)]
            self.unpacked_size_table = [len(self.payload)]
            self.indice_table = [0]

def rs_name_hash(name: str) -> int:
    s = name.upper()
    h = 0
    for ch in s:
        h = (h * 61 + (ord(ch) - 32)) & 0xFFFFFFFF
    return h

# ---- Pretty printer that matches your old log ----
OVERLAY_HASH  = 0xB95A4B5A  # "flo2.dat"
UNDERLAY_HASH = 0xA276F8AC  # "flo.dat"
LOC_DAT_HASH     = rs_name_hash("loc.dat") # loc.dat
LOC_IDX_HASH     = rs_name_hash("loc.idx") # loc.idx
LOC667_DAT_HASH  = rs_name_hash("667loc.dat") # loc.dat
LOC667_IDX_HASH  = rs_name_hash("667loc.idx") # loc.idx

def print_archive_debug(file_id: int, archive: Archive):
    print(f"\n--- File {file_id} ---")

    print(f"Archive has {archive.data_size} entries")
    if archive.hash_table:
        for i, h in enumerate(archive.hash_table):
            line = f"Entry {i}: hash=0x{h:08X}"
            if h == UNDERLAY_HASH:
                line += "\n  -> UNDERLAYS FOUND!"
            if h == OVERLAY_HASH:
                line += "\n  -> OVERLAYS FOUND!"
            if h == LOC_DAT_HASH:
                line += "\n  -> loc.dat FOUND!"
            if h == LOC_IDX_HASH:
                line += "\n  -> loc.idx FOUND!"
            if h == LOC667_DAT_HASH:
                line += "\n  -> 667loc.dat FOUND!"
            if h == LOC667_IDX_HASH:
                line += "\n  -> 667loc.idx FOUND!"
            print(line)
        return archive
    else:
        print("(single-file blob; no hash table)")
        return None

# ---- Extract by hash (like Java's Archive.get(name)) ----
def extract_by_hash(archive: Archive, target_hash: int, save_path=None):
    if not archive.hash_table:
        print("This archive has no hash table (single-file archive).")
        return None
    try:
        idx = archive.hash_table.index(target_hash)
    except ValueError:
        print(f"Hash 0x{target_hash:08X} not found in archive.")
        return None

    start = archive.indice_table[idx]
    size  = archive.unpacked_size_table[idx]
    blob  = archive.payload[start:start+size]

    print(f"Extracted entry index {idx} (size={size} bytes)")
    if save_path:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        with open(save_path, "wb") as f:
            f.write(blob)
        print(f"Saved to {save_path}")
    return blob

def try_decompression(compressed_data: bytes) -> bytes:
    """Best-effort decompressor for cache payloads.
    - Accepts raw gzip, raw bzip2, and common headerless bzip2.
    - Also accepts RS one-byte type header: type(0=raw,1=bzip2,2=gzip) + 4-byte decomp size [+ 4-byte comp size] + data.
    - Never raises; on failure, returns the original bytes.
    """

    b = compressed_data

    # 0) RS type header: [type][decomp_len:4][comp_len:4?][stream]
    if len(b) >= 5 and b[0] in (0, 1, 2):
        t = b[0]
        decomp_len = int.from_bytes(b[1:5], 'big')
        if t == 0:
            # raw, no comp_len
            return b[5:5+decomp_len] if decomp_len and 5 + decomp_len <= len(b) else b[5:]
        # compressed: expect comp_len and then a stream
        if len(b) >= 9:
            comp_len = int.from_bytes(b[5:9], 'big')
            stream = b[9:9+comp_len] if comp_len and 9 + comp_len <= len(b) else b[9:]
            if t == 1:
                try:
                    return bz2.decompress(stream)
                except Exception:
                    pass
            elif t == 2:
                try:
                    return gzip.decompress(stream)
                except Exception:
                    pass
            # if decoding failed, fall through and try generic paths below on stream
            b = stream

    # 1) gzip
    if len(b) >= 2 and b[:2] == b'\x1f\x8b':
        try:
            return gzip.decompress(b)
        except Exception:
            # fall back to raw
            return b

    # 2) bzip2
    if len(b) >= 3 and b[:3] == b'BZh':
        try:
            return bz2.decompress(b)
        except Exception:
            return b

    # 3) headerless bzip2 (try with 'BZh1' prefix)
    try:
        return bz2.decompress(b'BZh1' + b)
    except Exception:
        pass

    # 4) raw
    return b

def get_file_data(archive: dict, name: str, save_path=None):
    hash = rs_name_hash(name)
    if archive.hash_table:
        if hash in archive.hash_table:
            compressed_data = extract_by_hash(archive, hash, save_path=None)
            data = try_decompression(compressed_data)
            return data

def _pkg_static_dir():
    return os.path.join(os.path.dirname(__file__), "static")

def _pkg_cache_dir():
    return os.path.join(_pkg_static_dir(), "caches")

def _cache_path(name: str) -> str:
    return os.path.join(_pkg_cache_dir(), name)

def build_archive_map(file, idx0_path: str | None = None,
                      dat_path: str | None = None,
                      cache_id: int = 1):
    """
    Returns a dict[int, Archive] for all files in idx0.
    Example: archives = build_archive_map(); arc2 = archives[2]
    """
    # Resolve default paths relative to the babylon package static/caches
    if not idx0_path:
        idx0_path = _cache_path("main_file_cache.idx0")
    if not dat_path:
        dat_path = _cache_path("main_file_cache.dat")

    entries = [read_idx_file(idx0_path)[file]]
    reader  = datReader(dat_path, entries, expected_cache_id=cache_id)
    out = None
    for file_id, length, start in entries:
        if length == 0:
            continue
        raw = reader.read_file(file_id)
        out = Archive(raw)
    return out


# ---- main: scan idx0, print tables, extract flo/flo2 ----
def main():
    idx_path = _cache_path("main_file_cache.idx0")
    dat_path = _cache_path("main_file_cache.dat")

    idx_entries = read_idx_file(idx_path)
    # cache_id for idx0 is 1 (idxN -> cache_id = N+1)
    reader = datReader(dat_path, idx_entries, expected_cache_id=1)

    # Loop all non-empty files in idx0
    archive = {}
    for file_id, length, start in idx_entries:
        if length == 0:
            continue
        # Build archive
        raw = reader.read_file(file_id)
        arc = Archive(raw)

        # Print the detailed table view
        archive[file_id] = print_archive_debug(file_id, arc)
    data = get_file_data(archive[2], "loc.dat")
    data = get_file_data(archive[2], "loc.idx")
    print(f"Underlays bytes: {len(data) if data else 0}")
    
if __name__ == "__main__":
    archives = build_archive_map(2)           # scans idx0 and opens archives
    #arc2 = archives[2]                       # file 2 (the one with loc/flo/etc)
    print(archives)
    loc_dat = get_file_data(archives, "loc.dat")
    loc_idx = get_file_data(archives, "loc.idx")
    
    print(len(loc_dat), len(loc_idx))

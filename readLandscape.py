import gzip, bz2, json
from io import BytesIO
from pathlib import Path

# ReadObjects works

# ---------- helpers -------------------------------------------------
def read_usmart(buf: BytesIO) -> int:
    peek = buf.read(1)[0]
    if peek < 128:
        return peek
    return ((peek << 8) | buf.read(1)[0]) - 32768

def load_and_inflate(path: Path) -> bytes:
    raw = path.read_bytes()
    if raw[:2] == b"\x1F\x8B":         # gzip
        return gzip.decompress(raw)
    if raw[:3] == b"BZh":              # bzip2
        return bz2.decompress(raw)
    return raw                         # already plain

def decode_loc_chunk(data: bytes, region_x: int, region_y: int):
    buf, obj_id = BytesIO(data), -1
    while True:
        delta_id = read_usmart(buf)
        if delta_id == 0:
            break
        obj_id += delta_id

        packed = 0
        while True:
            delta_pos = read_usmart(buf)
            if delta_pos == 0:
                break
            packed += delta_pos - 1

            local_y  =  packed        & 0x3F
            local_x  = (packed >> 6)  & 0x3F
            plane    =  packed >> 12

            info        = buf.read(1)[0]
            obj_type    = info >> 2
            orientation = info & 3

            yield {
                "id":  obj_id,
                "p":   plane,
                "x":   region_x*64 + local_x,
                "y":   region_y*64 + local_y,
                "t":   obj_type,
                "r":   orientation
            }

# ---------- main ----------------------------------------------------
if __name__ == "__main__":
    loc_path  = Path("651.gz")      # ← change to your file
    region_x  = 0                   # hard-code until you parse from name
    region_y  = 0

    data     = load_and_inflate(loc_path)
    records  = list(decode_loc_chunk(data, region_x, region_y))

    out_path = loc_path.with_suffix(".json")
    #with out_path.open("w", encoding="utf-8") as f:
    #    json.dump(records, f, indent=2)   # pretty print for easy inspection
    print(f"Wrote {len(records)} objects → {out_path}")

from __future__ import annotations

from pathlib import Path

from dataclasses import dataclass
import json

from .archive import datReader, read_idx_file, try_decompression, build_archive_map, get_file_data


class BufferReader:
    """Minimal big-endian reader mirroring the client ByteBuffer accessors."""

    __slots__ = ("_buf", "_off")

    def __init__(self, data: bytes):
        self._buf = memoryview(data)
        self._off = 0

    def _require(self, n: int) -> None:
        if self._off + n > len(self._buf):
            raise EOFError("read past end of buffer")

    def u8(self) -> int:
        self._require(1)
        val = self._buf[self._off]
        self._off += 1
        return val

    def u16(self) -> int:
        self._require(2)
        buf = self._buf
        off = self._off
        val = (buf[off] << 8) | buf[off + 1]
        self._off = off + 2
        return val

    def s16(self) -> int:
        val = self.u16()
        return val - 65536 if val > 32767 else val

    def u32_le(self) -> int:
        self._require(4)
        buf = self._buf
        off = self._off
        val = (
            buf[off]
            | (buf[off + 1] << 8)
            | (buf[off + 2] << 16)
            | (buf[off + 3] << 24)
        )
        self._off = off + 4
        return val & 0xFFFFFFFF

    def u32_be(self) -> int:
        self._require(4)
        buf = self._buf
        off = self._off
        val = (
            (buf[off] << 24)
            | (buf[off + 1] << 16)
            | (buf[off + 2] << 8)
            | buf[off + 3]
        )
        self._off = off + 4
        return val & 0xFFFFFFFF

    def remaining(self) -> int:
        return len(self._buf) - self._off

    def tell(self) -> int:
        return self._off

    def read_bytes(self, n: int) -> bytes:
        self._require(n)
        start = self._off
        self._off += n
        return self._buf[start:self._off].tobytes()

    def seek(self, pos: int) -> None:
        if not (0 <= pos <= len(self._buf)):
            raise ValueError("seek out of range")
        self._off = pos

    def remaining_bytes(self) -> bytes:
        return self._buf[self._off :].tobytes()


class SkinList:
    """Mirror of the RS client SkinList (Class18)."""

    def __init__(self, reader: BufferReader) -> None:
        group_count = reader.u16()
        self.opcodes: list[int] = [reader.u16() for _ in range(group_count)]

        # read all lengths first (like the Java code does)
        lengths = [reader.u16() for _ in range(group_count)]

        # then read all indices, group by group
        self.vertices: list[list[int]] = []
        for vertex_count in lengths:
            verts = [reader.u16() for _ in range(vertex_count)]
            self.vertices.append(verts)


@dataclass(slots=True)
class Frame:
    """Decoded animation frame (FrameReader equivalent)."""

    skin: SkinList
    opcode_indices: list[int]
    x_offsets: list[int]
    y_offsets: list[int]
    z_offsets: list[int]
    display_length: int = 0

    @property
    def step_count(self) -> int:
        return len(self.opcode_indices)


@dataclass(slots=True)
class Sequence:
    frame_count: int
    frame_ids: list[int]
    delays: list[int]
    loop_delay: int = -1
    animation_flow_control: list[int] | None = None
    one_square_animation: bool = False
    forced_priority: int = 5
    left_hand_item: int = -1
    right_hand_item: int = -1
    frame_step: int = 99
    reset_when_walk: int = -1
    priority: int = -1
    delay_type: int = 2


PKG_DIR = Path(__file__).resolve().parent
CACHE_DIR = PKG_DIR / "static" / "caches"

IDX_ANIM_PATH = CACHE_DIR / "main_file_cache.idx2"
DAT_PATH = CACHE_DIR / "main_file_cache.dat"


def load_animation_index(idx_path: Path = IDX_ANIM_PATH) -> list[tuple[int, int, int]]:
    """Return (file_id, length, first_sector) entries from idx1."""
    if not idx_path.exists():
        raise FileNotFoundError(f"idx file not found: {idx_path}")
    return read_idx_file(str(idx_path))


def open_animation_reader(
    dat_path: Path = DAT_PATH,
    idx_entries: list[tuple[int, int, int]] | None = None,
    cache_id: int = 3,
) -> datReader:
    if not dat_path.exists():
        raise FileNotFoundError(f"dat file not found: {dat_path}")
    entries = idx_entries if idx_entries is not None else load_animation_index()
    return datReader(str(dat_path), entries, expected_cache_id=cache_id)


def read_animation_archive(file_id: int, reader: datReader | None = None) -> bytes:
    reader = reader or open_animation_reader()
    blob = reader.read_file(file_id)
    return try_decompression(blob)


def _split_archive(reader: BufferReader) -> list[bytes]:
    start = reader.tell()
    try:
        file_count = reader.u16()
        if file_count == 0:
            print("returning []")
            return []

        chunk_count = reader.u16()
        chunk_sizes = [[0] * chunk_count for _ in range(file_count)]
        unpacked_sizes = [0] * file_count

        for chunk in range(chunk_count):
            cumulative = 0
            for file_index in range(file_count):
                cumulative += reader.u16()
                chunk_sizes[file_index][chunk] = cumulative

        for i in range(file_count):
            unpacked_sizes[i] = reader.u16()

        files = [bytearray(chunk_sizes[i][-1]) for i in range(file_count)]
        print("split archive files: ", files)

        for chunk in range(chunk_count):
            for file_index in range(file_count):
                end = chunk_sizes[file_index][chunk]
                start_offset = chunk_sizes[file_index][chunk - 1] if chunk > 0 else 0
                length = end - start_offset
                if length == 0:
                    continue
                files[file_index][start_offset:end] = reader.read_bytes(length)

        out: list[bytes] = []
        for i, buf in enumerate(files):
            raw = bytes(buf)
            if len(raw) != unpacked_sizes[i]:
                decompressed = try_decompression(raw)
                out.append(decompressed)
            else:
                out.append(raw)
        return out
    except Exception:
        print("exception detected")
        reader.seek(start)
        return [reader.remaining_bytes()]


def parse_sequences(seq_bytes: bytes) -> list[Sequence]:
    reader = BufferReader(seq_bytes)
    total = reader.u16()
    sequences: list[Sequence] = []

    for _ in range(total):
        frame_count = 0
        frame_ids: list[int] = []
        delays: list[int] = []
        loop_delay = -1
        animation_flow = None
        one_square = False
        forced_priority = 5
        left_hand = -1
        right_hand = -1
        frame_step = 99
        reset_when_walk = -1
        priority = -1
        delay_type = 2

        while True:
            opcode = reader.u8()
            if opcode == 0:
                break
            if opcode == 1:
                frame_count = reader.u16()
                frame_ids = [reader.u32_be() for _ in range(frame_count)]
                delays = [reader.u8() for _ in range(frame_count)]
            elif opcode == 2:
                loop_delay = reader.u16()
            elif opcode == 3:
                count = reader.u8()
                animation_flow = [reader.u8() for _ in range(count)]
                animation_flow.append(0x98967F)
            elif opcode == 4:
                one_square = True
            elif opcode == 5:
                forced_priority = reader.u8()
            elif opcode == 6:
                left_hand = reader.u16()
            elif opcode == 7:
                right_hand = reader.u16()
            elif opcode == 8:
                frame_step = reader.u8()
            elif opcode == 9:
                reset_when_walk = reader.u8()
            elif opcode == 10:
                priority = reader.u8()
            elif opcode == 11:
                delay_type = reader.u8()
            else:
                raise ValueError(f"Unrecognized seq.dat config code: {opcode}")

        if frame_count == 0:
            frame_count = 1
            frame_ids = [-1]
            delays = [-1]

        if reset_when_walk == -1:
            reset_when_walk = 2 if animation_flow is not None else 0

        if priority == -1:
            priority = 2 if animation_flow is not None else 0

        sequences.append(
            Sequence(
                frame_count=frame_count,
                frame_ids=frame_ids,
                delays=delays,
                loop_delay=loop_delay,
                animation_flow_control=animation_flow,
                one_square_animation=one_square,
                forced_priority=forced_priority,
                left_hand_item=left_hand,
                right_hand_item=right_hand,
                frame_step=frame_step,
                reset_when_walk=reset_when_walk,
                priority=priority,
                delay_type=delay_type,
            )
        )
    return sequences


def load_sequences(seq_path: Path | None = None) -> list[Sequence]:
    """Convenience loader for seq.dat."""
    archive = build_archive_map(2)
    seq_data = get_file_data(archive, "seq.dat")
    if seq_data is None:
        raise FileNotFoundError("seq.dat not found in cache archives")
    sequences = parse_sequences(seq_data)
    print(f"Loaded {len(sequences)} sequences from seq.dat")
    return sequences


def build_animation_json(
    animation_id: int,
    frames: dict[int, Frame],
    base_mesh_path: str = "",
    frame_order: list[int] | None = None,
    delays: list[int] | None = None,
    loop_delay: int = 0,
    forced_priority: int = 5,
) -> str:
    if not frames:
        raise ValueError("No frames provided for animation export")

    if frame_order is None:
        frame_order = sorted(frames.keys())
    if delays is None:
        delays = [1] * len(frame_order)

    first_frame = next(iter(frames.values()))
    skin = first_frame.skin

    groups = [
        {
            "group": idx,
            "opcode": int(skin.opcodes[idx]),
            "skinGroups": [int(v) for v in vertices],
        }
        for idx, vertices in enumerate(skin.vertices)
    ]

    frame_entries: list[dict[str, object]] = []
    for index, frame_id in enumerate(frame_order):
        frame = frames.get(frame_id)
        if frame is None:
            continue

        steps = [
            {
                "group": int(frame.opcode_indices[i]),
                "dx": int(frame.x_offsets[i]),
                "dy": int(frame.y_offsets[i]),
                "dz": int(frame.z_offsets[i]),
            }
            for i in range(frame.step_count)
        ]

        frame_entries.append(
            {
                "frameIndex": index,
                "frameId": int(frame_id),
                "steps": steps,
            }
        )

    payload = {
        "animationId": animation_id,
        "frameCount": len(frame_order),
        "baseMesh": base_mesh_path,
        "sequence": {
            "delays": [int(d) for d in delays],
            "loopDelay": int(loop_delay),
            "forcedPriority": int(forced_priority),
        },
        "frameOrder": [int(fid) for fid in frame_order],
        "groups": groups,
        "frames": frame_entries,
    }
    return json.dumps(payload, indent=2)


def save_animation_json(
    json_payload: str, animation_id: int, base_mesh_path: str = ""
) -> Path:
    output_dir = PKG_DIR / "static" / "animation"
    output_dir.mkdir(parents=True, exist_ok=True)

    mesh_name = (
        Path(base_mesh_path).stem if base_mesh_path else f"animation_{animation_id}"
    )
    filename = f"{mesh_name}_animationID{animation_id}.json"
    out_path = output_dir / filename

    with open(out_path, "w", encoding="utf-8") as handle:
        handle.write(json_payload)
    return out_path


def decode_animation_archive(data: bytes) -> dict[int, Frame]:
    """Decode a single index1 archive into frame objects keyed by frame id."""

    reader = BufferReader(data)
    skin = SkinList(reader)
    print("skinlist done")
    declared_frame_count = reader.u16()

    frames: dict[int, Frame] = {}
    frame_index = 0

    while True:
        try:
            frame_id = reader.u16()
            step_total = reader.u8()
        except EOFError:
            break

        group_indices: list[int] = []
        x_offsets: list[int] = []
        y_offsets: list[int] = []
        z_offsets: list[int] = []

        last_processed = -1
        try:
            for group_idx in range(step_total):
                flags = reader.u8()
                if flags == 0:
                    continue

                if skin.opcodes[group_idx] != 0:
                    for insert_idx in range(group_idx - 1, last_processed, -1):
                        if skin.opcodes[insert_idx] != 0:
                            continue
                        group_indices.append(insert_idx)
                        x_offsets.append(0)
                        y_offsets.append(0)
                        z_offsets.append(0)
                        break

                default_val = 128 if skin.opcodes[group_idx] == 3 else 0

                group_indices.append(group_idx)
                x_offsets.append(reader.s16() if (flags & 1) else default_val)
                y_offsets.append(reader.s16() if (flags & 2) else default_val)
                z_offsets.append(reader.s16() if (flags & 4) else default_val)
                last_processed = group_idx
        except EOFError:
            break

        frames[frame_id] = Frame(
            skin=skin,
            opcode_indices=group_indices,
            x_offsets=x_offsets,
            y_offsets=y_offsets,
            z_offsets=z_offsets,
        )

        frame_index += 1
        if declared_frame_count and frame_index >= declared_frame_count:
            break

    return frames


def export_animation(animation_id: int, base_mesh_path: str) -> Path:
    """Decode a single animation sequence and export it to JSON."""

    sequences = load_sequences()
    if animation_id >= len(sequences):
        raise IndexError(f"Animation id {animation_id} beyond sequence table")
    sequence = sequences[animation_id]

    idx_entries = load_animation_index()
    reader = open_animation_reader(idx_entries=idx_entries)

    archive_cache: dict[int, dict[int, Frame]] = {}
    frames_for_sequence: dict[int, Frame] = {}
    frame_order: list[int] = []

    delays_for_frames: list[int] = []

    for idx, frame_id in enumerate(sequence.frame_ids):
        if frame_id == -1:
            continue
        archive_id = frame_id >> 16
        frame_idx = frame_id & 0xFFFF

        if archive_id not in archive_cache:
            archive_blob = read_animation_archive(archive_id, reader)
            archive_frames = decode_animation_archive(archive_blob)
            archive_cache[archive_id] = archive_frames
            print(
                f"Decoded archive {archive_id}: {len(archive_frames)} frames available"
            )

        archive_frames = archive_cache[archive_id]
        frame = archive_frames.get(frame_idx)
        if frame is None:
            print(
                f"Warning: frame {frame_idx} not found in archive {archive_id}, skipping"
            )
            continue

        full_frame_id = (archive_id << 16) | frame_idx
        frames_for_sequence[full_frame_id] = frame
        frame_order.append(full_frame_id)
        if idx < len(sequence.delays):
            delays_for_frames.append(sequence.delays[idx])

    if not frames_for_sequence:
        raise RuntimeError(f"No frames decoded for animation {animation_id}")

    delays = delays_for_frames or [1] * len(frame_order)
    loop_delay = sequence.loop_delay if sequence.loop_delay != -1 else 0
    forced_priority = sequence.forced_priority

    json_payload = build_animation_json(
        animation_id=animation_id,
        frames=frames_for_sequence,
        base_mesh_path=base_mesh_path,
        frame_order=frame_order,
        delays=delays,
        loop_delay=loop_delay,
        forced_priority=forced_priority,
    )
    return save_animation_json(
        json_payload, animation_id=animation_id, base_mesh_path=base_mesh_path
    )


def Idx2Decoder(animation_id = 481, base_mesh = "static/objects/object_7376_type_4_model_2255.gltf"):
    output_path = export_animation(animation_id, base_mesh)
    print(f"Saved animation JSON to {output_path}")

def seqdatDecoder():
    # Locate seq.dat via idx0 and report its size as a quick verification step.
    archive = build_archive_map(2)
    seq_data = get_file_data(archive, "seq.dat")
    if seq_data is None:
        print("seq.dat not found in idx0")
    else:
        print(f"seq.dat length: {len(seq_data)} bytes")
        sequences = parse_sequences(seq_data)
        print(f"Parsed {len(sequences)} sequences")
        sample_id = 481
        if sample_id < len(sequences):
            seq = sequences[sample_id]
            print(
                f"Sequence {sample_id}: frames={seq.frame_count} loop={seq.loop_delay} priority={seq.forced_priority}"
            )
            preview = []
            limit = min(10, len(seq.frame_ids))
            for fid in seq.frame_ids[:limit]:
                archive = fid >> 16
                frame = fid & 0xFFFF
                preview.append(
                    f"{fid:#010x} (file=0x{archive:04X}, frame=0x{frame:04X})"
                )
            print(
                f"  frame IDs (first {limit}): {', '.join(preview)}"
            )

if __name__ == "__main__":
    Idx2Decoder()

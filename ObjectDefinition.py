from .archive import build_archive_map, get_file_data, datReader, read_idx_file, try_decompression
import traceback
import os
import copy
import pickle
from dataclasses import dataclass, field


CACHE_FILENAME = "object_cache.pkl"
CACHE_PATH = os.path.join(os.path.dirname(__file__), "static", "objects", CACHE_FILENAME)
try:
    with open(CACHE_PATH, "rb") as _fh:
        _OBJECT_CACHE: dict[str, dict] = pickle.load(_fh)
except Exception:
    _OBJECT_CACHE = {}

# Feature flag: toggle backend recolouring of face colours.
ENABLE_RECOLOURING = True

# Debug configuration: restrict logging to a specific object/model id.
# Set to None / empty set to disable filtering, or adjust values as needed.
DEBUG_OBJECT_ID: int | None = None
DEBUG_MODEL_IDS: set[int] = {0}

_CURRENT_DEBUG_OBJECT_ID: int | None = None
_CURRENT_DEBUG_MODEL_ID: int | None = None

def _debug_log_enabled(obj_id: int | None = None, model_id: int | None = None) -> bool:
    """Return True when diagnostic output should be emitted."""
    obj_candidate = obj_id if obj_id is not None else _CURRENT_DEBUG_OBJECT_ID
    model_candidate = model_id if model_id is not None else _CURRENT_DEBUG_MODEL_ID

    if DEBUG_OBJECT_ID is not None and obj_candidate != DEBUG_OBJECT_ID:
        return False
    if DEBUG_MODEL_IDS:
        if model_candidate is None:
            return DEBUG_OBJECT_ID is not None and obj_candidate == DEBUG_OBJECT_ID
        if model_candidate not in DEBUG_MODEL_IDS:
            return False
    return True

def debug_print(*args, obj_id: int | None = None, model_id: int | None = None, **kwargs):
    """Wrapper around print that honours the debug object/model filters."""
    if _debug_log_enabled(obj_id=obj_id, model_id=model_id):
        print(*args, **kwargs)
# ---------- ObjectDefinition parser (317–400-ish) ----------
ALLOWED_MODEL_TYPES = set(range(0, 23))   # 0..22

# Pretty-print & sanity-check parsed object definitions
TYPE_HINTS = {
    0: "straight wall", 1: "diagonal wall", 2: "L-corner wall", 3: "square corner",
    4: "wall decoration", 5: "wall decoration (alt)",
    6: "diagonal wall decoration", 7: "diagonal decoration (alt)",
    8: "ground decoration (large)", 9: "roof-ish/decoration",
    10: "normal object", 11: "normal object (alt)",
    12: "diagonal object", 13: "diagonal object (alt)",
    14: "interactive object", 15: "interactive (alt)",
    17: "maybe solid flag", 18: "impenetrable flag",
    20: "ground decoration", 21: "contoured", 22: "floor decoration"
}
ALLOWED_TYPES = set(range(0, 23))

@dataclass
class ObjectDef:
    id: int
    name: str = ""
    description: bytes = b""
    sizeX: int = 1
    sizeY: int = 1
    # models (typed via opcode 1; untyped via opcode 5 -> we bucket under type 10)
    model_ids_by_t: dict[int, list[int]] = field(default_factory=dict)

    # interaction text (Java allocates 10; 30..38 fill 0..8)
    actions: list[str | None] = field(default_factory=lambda: [None]*10)

    # flags / properties with 317 defaults (as set by setDefaults() in many clients)
    isUnwalkable: bool = True
    aBoolean757: bool = True
    hasActions: bool = False
    adjustToTerrain: bool = False
    nonFlatShading: bool = True
    aBoolean764: bool = False
    aBoolean751: bool = False
    aBoolean779: bool = True
    isSolidObject: bool = False

    # visuals / map
    animationID: int = -1
    modelSizeX: int = 128
    modelSizeH: int = 128
    modelSizeY: int = 128
    mapSceneID: int = -1
    mapFunctionID: int = -1
    plane: int = 1

    # transforms & colors
    offsetX: int = 0
    offsetH: int = 0
    offsetY: int = 0
    brightness: int = 0
    contrast: int = 0
    anInt775: int = 0      # opcode 28
    anInt760: int = -1     # opcode 75
    varbitIndex: int = -1  # morphing (opcode 77)
    configID: int = -1
    configObjectIDs: list[int] | None = None

    # Java-era parity fields (mirrors ObjectDefinition.java defaults)
    solid: bool = True
    impenetrable: bool = True
    interactive: bool = False
    contouredGround: bool = False
    delayShading: bool = False
    occludes: bool = False
    obstructsGround: bool = False
    hollow: bool = False
    inverted: bool = False
    castsShadow: bool = True
    decorDisplacement: int = 16
    ambientLighting: int = 0
    lightDiffusion: int = 0
    surroundings: int = 0
    translateX: int = 0
    translateY: int = 0
    translateZ: int = 0
    minimapFunction: int = -1
    mapscene: int = -1
    supportItems: int = -1
    scaleX: int = 128
    scaleY: int = 128
    scaleZ: int = 128


def remap_face_colours(
    face_cols: list[int],
    face_tex: list[bool] | None,
    original: list[int],
    modified: list[int],
) -> list[int]:
    """
    Apply RuneScape-style colour swaps to per-face colours, mirroring
    Model.method476() behaviour from the legacy client. RuneScape's naming is
    historical: `modifiedModelColors` holds the *source* colours that appear in
    the mesh, while `originalModelColors` stores the *replacement* colours.
    - face_cols: packed HSL colours per face (len == face count)
    - face_tex: optional textured-face flags; textured faces keep their colour
    - original/modified: parallel lists providing replacement/source pairs
    Returns the recoloured list (or the original list if no changes are needed).
    """
    if not original or not modified:
        return face_cols
    if len(original) != len(modified):
        return face_cols

    lookup = {src & 0xFFFF: repl & 0xFFFF for repl, src in zip(original, modified)}
    if not lookup:
        return face_cols

    out = None
    for idx, col in enumerate(face_cols):
        if col is None or col == 65535:
            continue
        replacement = lookup.get(col & 0xFFFF)
        if replacement is None or replacement == col:
            continue
        if out is None:
            out = list(face_cols)
        out[idx] = replacement
    return out if out is not None else face_cols
    animation: int = -1
    varbit: int = -1
    varp: int = -1
    originalModelColors: list[int] = field(default_factory=list)
    modifiedModelColors: list[int] = field(default_factory=list)
    retextureToFind: list[int] = field(default_factory=list)
    textureToReplace: list[int] = field(default_factory=list)
    morphisms: list[int] | None = None

class ObjectDefinitionCache:
    def __init__(self,
                 dat317: bytes, idx317: dict[int, tuple[int,int]],
                 dat667: bytes, idx667: dict[int, tuple[int,int]]):
        self._317 = (dat317, idx317)
        self._667 = (dat667, idx667)
        self.cache: dict[int, ObjectDef] = {}

    def get(self, obj_id: int) -> ObjectDef:
        # already decoded?
        if obj_id in self.cache:
            return self.cache[obj_id]

        # decide which table to use (original order: prefer 317, then 667)
        for dat, idx in (self._317, self._667):
            if obj_id in idx:
                start, length = idx[obj_id]
                raw = dat[start:start+length]
                obj = parse_object_def(raw, obj_id)
                self.cache[obj_id] = obj          # keep forever
                return obj

        # not found
        raise KeyError(f'object id {obj_id} not present in any table')

def parse_object_def(raw: bytes, obj_id: int) -> ObjectDef:
    buf = memoryview(raw)
    off = 0
    n   = len(buf)
    obj = ObjectDef(id=obj_id)

    def have(m: int) -> bool:
        return off + m <= n

    def u8():
        nonlocal off
        if not have(1): return 0
        v = buf[off]; off += 1; return v

    def u16():
        nonlocal off
        if not have(2): off = n; return 0
        v = (buf[off] << 8) | buf[off+1]; off += 2; return v

    def s8():
        v = u8(); return v - 256 if v > 127 else v

    def s16():
        v = u16(); return v - 65536 if v > 32767 else v

    def jstr():  # 667: LF-terminated; accept NUL too; clamp at slice end
        nonlocal off
        start = off
        while off < n and buf[off] not in (10, 0):
            off += 1
        s = bytes(buf[start:off]).decode("cp1252", "replace")
        if off < n:  # skip terminator if present
            off += 1
        return s

    def jbytes():  # for opcode 3
        nonlocal off
        start = off
        while off < n and buf[off] not in (10, 0):
            off += 1
        b = bytes(buf[start:off])
        if off < n:
            off += 1
        return b

    while off < n:
        opcode = u8()
        if opcode == 0:
            break

        # ---- annotated opcodes ----
        if opcode == 1:                     # models: [ (u16 id, u8 type) * k ]
            k = u8()
            for _ in range(k):
                mid = u16()
                typ = u8()
                obj.model_ids_by_t.setdefault(typ, []).append(mid)

        elif opcode == 2:                   # name (LF or NUL terminated)
            obj.name = jstr()

        elif opcode == 3:                   # description bytes (LF/NUL terminated)
            obj.description = jbytes()

        elif opcode == 5:                   # models (no types): [u16] * l -> bucket as type 10
            l = u8()
            for _ in range(l):
                obj.model_ids_by_t.setdefault(10, []).append(u16())

        elif opcode == 14:
            obj.sizeX = u8()                     # size X (tiles)
        elif opcode == 15:
            obj.sizeY = u8()                     # size Y (tiles)
        elif opcode == 17:
            obj.isUnwalkable = False             # blocks? flag cleared
            obj.solid = False
        elif opcode == 18:
            obj.aBoolean757 = False              # some flag
            obj.impenetrable = False
        elif opcode == 19:                                       # hasActions flag (legacy)
            if u8() == 1:
                obj.hasActions = True
                obj.interactive = True

        elif opcode == 21:
            obj.adjustToTerrain = True           # contoured ground
            obj.contouredGround = True
        elif opcode == 22:
            obj.nonFlatShading = False
            obj.delayShading = True
        elif opcode == 23:
            obj.aBoolean764 = True               # clickable?
            obj.occludes = True

        elif opcode == 24:
            anim = u16()
            if anim == 65535:
                anim = -1
            obj.animationID = anim
            obj.animation = anim

        elif opcode == 28:
            val = u8()                           # support head?
            obj.anInt775 = val
            obj.decorDisplacement = val
        elif opcode == 29:
            val = s8()                           # lighting: brightness
            obj.brightness = val
            obj.ambientLighting = val
        elif opcode == 39:
            val = s8()                           # lighting: contrast
            obj.contrast = val
            obj.lightDiffusion = val

        elif 30 <= opcode < 40:                                  # actions (10 slots in 667)
            txt = jstr()
            if txt and txt.lower() == "hidden":
                txt = None
            obj.actions[opcode - 30] = txt
            if txt:
                obj.hasActions = True
                obj.interactive = True

        elif opcode == 40:                                       # recolours: n * (old u16, new u16)
            cnt = u8()
            obj.originalModelColors = []
            obj.modifiedModelColors = []
            for _ in range(cnt):
                if not have(4):
                    off = n
                    break
                src = u16()
                dst = u16()
                obj.modifiedModelColors.append(src)
                obj.originalModelColors.append(dst)

        elif opcode == 41:                                       # retextures (667+)
            cnt = u8()
            obj.retextureToFind = []
            obj.textureToReplace = []
            for _ in range(cnt):
                if not have(4):
                    off = n
                    break
                obj.retextureToFind.append(u16())
                obj.textureToReplace.append(u16())

        elif opcode == 60:
            val = u16()                     # minimap symbol
            if val == 65535:
                val = -1
            obj.mapFunctionID = val
            obj.minimapFunction = val
        elif opcode == 62:
            obj.aBoolean751 = True               # invert?
            obj.inverted = True
        elif opcode == 64:
            obj.aBoolean779 = False              # occludes?
            obj.castsShadow = False
        elif opcode == 65:
            val = u16()                          # non-uniform scale X
            obj.modelSizeX = val
            obj.scaleX = val
        elif opcode == 66:
            val = u16()                          # non-uniform scale Z (height)
            obj.modelSizeH = val
            obj.scaleZ = val
        elif opcode == 67:
            val = u16()                          # non-uniform scale Y
            obj.modelSizeY = val
            obj.scaleY = val
        elif opcode == 68:
            val = u16()                          # mapscene sprite id
            if val == 65535:
                val = -1
            obj.mapSceneID = val
            obj.mapscene = val
        elif opcode == 69:
            val = u8()                           # surroundings / plane
            obj.plane = val
            obj.surroundings = val
        elif opcode == 70:
            obj.offsetX = s16() * 4
        elif opcode == 71:
            obj.offsetH = s16() * 4  # vertical offset (client uses <<2)
        elif opcode == 72:
            obj.offsetY = s16() * 4
            obj.offsetH = val
            obj.translateZ = val
        elif opcode == 72:
            val = s16()                          # model offset Y
            obj.offsetY = val
            obj.translateY = val
        elif opcode == 73:
            obj.aBoolean736 = True               # ignore clipping?
            obj.obstructsGround = True
        elif opcode == 74:
            obj.isSolidObject = True             # solid toggle flag
            obj.hollow = True
        elif opcode == 75:
            val = u8()                           # support type / ambient?
            obj.anInt760 = val
            obj.supportItems = val
        elif opcode == 77:                                       # morphs (old)
            obj.varbitIndex = u16();  obj.varbitIndex = -1 if obj.varbitIndex == 65535 else obj.varbitIndex
            obj.varbit = obj.varbitIndex
            obj.configID    = u16();  obj.configID    = -1 if obj.configID    == 65535 else obj.configID
            obj.varp = obj.configID
            j1 = u8()
            arr = []
            for _ in range(j1 + 1):
                v = u16();  v = -1 if v == 65535 else v
                arr.append(v)
            obj.configObjectIDs = arr
            obj.morphisms = arr

        # 667+ extras (you already saw some; keep them benign if encountered)
        elif opcode in (78, 79, 81, 82):                         # audio/ambient variants
            _ = u16()  # each of these is a u16 payload; safe-skip

        elif opcode == 92:                                       # morphs variant (667+)
            obj.varbitIndex = u16();  obj.varbitIndex = -1 if obj.varbitIndex == 65535 else obj.varbitIndex
            obj.varbit = obj.varbitIndex
            obj.configID    = u16();  obj.configID    = -1 if obj.configID    == 65535 else obj.configID
            obj.varp = obj.configID
            _unknown        = u16()                              # extra u16 in this variant
            j1 = u8()
            arr = []
            for _ in range(j1 + 1):
                v = u16();  v = -1 if v == 65535 else v
                arr.append(v)
            obj.configObjectIDs = arr
            obj.morphisms = arr
        else:
            # Unknown but don't explode if the slice is tight — bail politely.
            # print(f"obj {obj_id}: unknown opcode {opcode} at {off-1}")
            break

    # tail tweaks like Java
    if obj.isSolidObject or obj.hollow:
        obj.isUnwalkable = False
        obj.solid = False
        obj.aBoolean757 = False
        obj.impenetrable = False

    obj.solid = obj.isUnwalkable
    obj.impenetrable = obj.aBoolean757
    obj.contouredGround = obj.adjustToTerrain or obj.contouredGround
    obj.delayShading = obj.delayShading or (not obj.nonFlatShading)
    obj.occludes = obj.occludes or obj.aBoolean764
    obj.inverted = obj.inverted or obj.aBoolean751
    obj.castsShadow = obj.aBoolean779
    obj.decorDisplacement = obj.anInt775
    obj.ambientLighting = obj.brightness
    obj.lightDiffusion = obj.contrast
    obj.minimapFunction = obj.mapFunctionID
    obj.mapscene = obj.mapSceneID
    obj.scaleX = obj.modelSizeX
    obj.scaleY = obj.modelSizeY
    obj.scaleZ = obj.modelSizeH
    obj.translateX = obj.offsetX
    obj.translateZ = obj.offsetH
    obj.translateY = obj.offsetY
    obj.surroundings = obj.plane
    if not obj.interactive:
        obj.interactive = obj.hasActions
    obj.obstructsGround = obj.obstructsGround or getattr(obj, 'aBoolean736', False)
    obj.morphisms = obj.configObjectIDs
    obj.varbit = obj.varbitIndex
    obj.varp = obj.configID

    support = obj.supportItems
    if support == -1:
        support = obj.anInt760
        if support == -1:
            support = 1 if obj.isUnwalkable else 0
    obj.supportItems = support
    obj.anInt760 = support

    return obj

def parse_loc_idx(data: bytes):
    """
    Returns a list of (obj_id, offset, length) tuples for every definition
    in the corresponding loc.dat / 667loc.dat.
    """
    start = 2
    offset = 2
    NrofObjects = int.from_bytes(data[:2], "big")   
    Table = []
    for i in range(NrofObjects):
        length = int.from_bytes(data[start:start+2], "big")   
        Table.append((i, offset, length))
        offset += length 
        start += 2
    return Table

def read_model_blob(model_id: int, model_index, dat_path="main_file_cache.dat") -> bytes:
    # model_index is the parsed list from read_idx_file for idx1 (model table)
    if model_id >= len(model_index):
        raise KeyError(f"model {model_id} out of range (idx1 has {len(model_index)})")
    fid, length, first_sector = model_index[model_id]
    if length == 0:
        raise FileNotFoundError(f"model {model_id} missing in this cache")
    # Resolve DAT path under package static/caches if the provided path is relative
    if not os.path.isabs(dat_path):
        dat_path = os.path.join(_CACHE_DIR, dat_path)
    # Build a single-entry table for the reader
    reader = datReader(dat_path, [(fid, length, first_sector)], expected_cache_id=2)
    blob = reader.read_file(fid)
    debug_print("compressed length: ", len(blob), model_id=model_id)
    if len(blob) != length:
        raise ValueError(f"model {model_id}: length mismatch {len(blob)} != {length}")
    return try_decompression(blob)
import gzip
def _gunzip_maybe(b: bytes) -> bytes:
    """Safely gunzip when buffer starts with a gzip header; otherwise return as-is.
    If the buffer looks gzip-like but is actually already decompressed or truncated,
    fall back to returning the original bytes instead of raising.
    """
    if len(b) >= 2 and b[:2] == b"\x1f\x8b":
        try:
            return gzip.decompress(b)
        except Exception:
            return b
    return b

# Debug controls for geometry decoding
DEBUG_DECODE = False
MAX_DEBUG_VERTS = 0
MAX_DEBUG_FACES = 0

def _dprint(*args, **kwargs):
    if DEBUG_DECODE:
        try:
            print(*args, **kwargs)
        except Exception:
            pass

def _normalize_model_blob(b: bytes) -> bytes:
    # Some 525/622 files have a trailing 0xFFFF after the trailer.
    # Strip it so the last 23 bytes are exactly the trailer layout.
    if len(b) >= 2 and b[-2:] == b'\xff\xff':
        return b[:-2]
    return b

class BR:
    __slots__=("b","p")
    def __init__(self,b,pos=0): self.b=b; self.p=pos
    def u8(self):  v=self.b[self.p]; self.p+=1; return v
    def i8(self):  v=self.u8(); return v-256 if v>127 else v
    def u16(self): b=self.b; p=self.p; v=(b[p]<<8)|(b[p+1]); self.p=p+2; return v
    def tri(self): b=self.b; p=self.p; v=(b[p]<<16)|(b[p+1]<<8)|b[p+2]; self.p=p+3; return v

@dataclass
class ModelHeader:
    vcount:int; fcount:int; tcount:int
    layout:str               # "622","525","317"
    newformat:int|None       # 622 only
    offs:dict                # section offsets/lengths
    used_trailer_at:int      # absolute trailer start for debugging
    calc_end:int

def _ok_counts(v,f,t):
    return 0 <= v < 200_000 and 0 <= f < 400_000 and 0 <= t < 10_000

def parse_model_header_any(blob: bytes) -> ModelHeader:
    """
    Robust parser: gunzip if needed, then *search* the tail window for a valid
    622/525 or 317 trailer. Returns the first header whose computed offsets
    fit within the buffer and whose counts are sane.
    """
    b = _gunzip_maybe(blob)
    n = len(b)

    # Quick helper: try a single candidate position/layout; return ModelHeader or None.
    def try_pos_525_622(trailer_at: int, force_622: bool|None) -> ModelHeader|None:
        try:
            return parse_model_header_525_622_at(b, trailer_at, force_622)
        except Exception:
            return None

    def try_pos_317(trailer_at: int) -> ModelHeader|None:
        try:
            return parse_model_header_317_at(b, trailer_at)
        except Exception:
            return None

    # 1) Fast path(s) - mimic the Java client: prefer 622 (with marker) then 525, finally 317.
    def try_525_622_sequence(trailer_at: int) -> ModelHeader|None:
        if trailer_at < 0:
            return None
        mh_local = try_pos_525_622(trailer_at, True)
        if mh_local:
            return mh_local
        return try_pos_525_622(trailer_at, False)

    if n >= 25 and b[-2:] == b'\xff\xff':
        mh = try_525_622_sequence(n - 23 - 2)
        if mh: return mh

    if n >= 23:
        mh = try_525_622_sequence(n - 23)
        if mh: return mh

    if n >= 18:
        mh = try_pos_317(n - 18)
        if mh: return mh

    # 2) Slow path - the last ~64 bytes sometimes have junk/markers.
    #    Slide a window and test both layouts at each offset.
    window_start = max(0, n - 64)
    for pos in range(window_start, n):
        if n - pos >= 23:
            mh = try_525_622_sequence(pos)
            if mh: return mh
        if n - pos >= 18:
            mh = try_pos_317(pos)
            if mh: return mh
    # 3) Give up with good diagnostics
    tail = b[-32:].hex()
    raise ValueError(f"Unrecognized model trailer/layout (not 317/525/622 or corrupt). tail32={tail}")

def parse_model_header_525_622_at(buf: bytes, trailer_at: int, force_622: bool|None) -> ModelHeader:
    """
    Parse a 525/622 trailer assumed to begin at `trailer_at`.
    If force_622 is True, require bit 0x08 in the flags; if False, forbid it; if None, accept either.
    Raises on any inconsistency.
    """
    n = len(buf)
    if trailer_at < 0 or trailer_at + 23 > n:
        raise ValueError("bad trailer_at for 525/622")

    br  = BR(buf, trailer_at)
    v   = br.u16(); f = br.u16(); t = br.u8()
    l1  = br.u8()
    is_622 = (l1 & 0x08) != 0
    if force_622 is True and not is_622:  raise ValueError("wanted 622, flag says 525")
    if force_622 is False and is_622:     raise ValueError("wanted 525, flag says 622")

    face_types_present = (l1 & 0x01) == 1

    # newformat byte location matches the client: trailer_at + 16 (position -= 7; read; position += 6)
    newfmt = None
    if is_622:
        pos_nf = trailer_at + 16
        if not (0 <= pos_nf < n): raise ValueError("newfmt out of range")
        newfmt = buf[pos_nf]

    i2 = br.u8(); j2 = br.u8(); k2 = br.u8(); l2 = br.u8(); i3 = br.u8()
    j3 = br.u16(); k3 = br.u16(); l3 = br.u16(); i4 = br.u16(); j4 = br.u16()

    # Sanity on counts before walking offsets
    if not _ok_counts(v, f, t): raise ValueError("insane counts")

    # Count O[] buckets from start
    k4 = l4 = i5 = 0
    if t > 0:
        scan = BR(buf, 0)
        for _ in range(t):
            b = scan.i8()
            if b == 0: k4 += 1
            if 1 <= b <= 3: l4 += 1
            if b == 2: i5 += 1

    offs = {}
    k5 = t

    # l5: vertex flags (V bytes)
    l5 = k5; offs["v_flags"] = (l5, v);                    k5 += v

    # i6: per-face "types/flags" if present (F bytes when bit0 set)
    i6 = k5; offs["face_types"] = (i6, f if face_types_present else 0)
    if face_types_present:
        k5 += f

    # Some 622 headers include a second F-byte block when header flag l1 == 1; account for it
    offs.setdefault("face_types_alt", (None, 0))

    # j6: triangle mode bytes (ALWAYS F)  ← drives how we read face indices
    j6 = k5; offs["tri_types"] = (j6, f);                   k5 += f

    # k6: priorities if i2==255 (else constant)
    k6 = k5; offs["priorities"] = (k6, f if i2 == 255 else 0)
    if i2 == 255:                                           k5 += f

    # l6: face skins if k2==1
    l6 = k5; offs["face_skins"] = (l6, f if k2 == 1 else 0)
    if k2 == 1:                                             k5 += f

    # i7: vertex skins if i3==1
    i7 = k5; offs["vert_skins"] = (i7, v if i3 == 1 else 0)
    if i3 == 1:                                             k5 += v

    # j7: alpha if j2==1
    j7 = k5; offs["alpha"] = (j7, f if j2 == 1 else 0)
    if j2 == 1:                                             k5 += f

    # k7: **FACE INDEX DELTA STREAM** length = i4   ← IMPORTANT
    k7 = k5; offs["face_idx16"] = (k7, i4);                 k5 += i4

    # l7: material/texture indices if l2==1 (u16 per face)
    l7 = k5; offs["tex_idx"] = (l7, 2*f if l2 == 1 else 0)
    if l2 == 1:                                             k5 += 2*f

    # i8: "x" stream (extra per-textured-face bytes), length = j4
    i8 = k5; offs["x_stream"] = (i8, j4);                   k5 += j4

    # j8: **COLOURS** (u16 per face) = F*2                ← IMPORTANT
    j8 = k5; offs["colours"] = (j8, 2*f);                   k5 += 2*f

    # vertex deltas
    k8 = k5; offs["vert_x"] = (k8, j3);                     k5 += j3
    l8 = k5; offs["vert_y"] = (l8, k3);                     k5 += k3
    i9 = k5; offs["vert_z"] = (i9, l3);                     k5 += l3

    # texture triangle payloads
    j9 = k5; offs["tex_type0"]  = (j9, 6*k4);               k5 += 6*k4
    k9 = k5; offs["tex_type1A"] = (k9, 6*l4);               k5 += 6*l4

    if is_622:
        width = 7 if newfmt == 14 else (9 if (newfmt and newfmt >= 15) else 6)
        l9 = k5; offs["tex_type1B"] = (l9, width*l4);       k5 += width*l4
    else:
        l9 = k5; offs["tex_type1B"] = (l9, 6*l4);           k5 += 6*l4

    i10 = k5; offs["tex_type1C"] = (i10, l4);               k5 += l4
    j10 = k5; offs["tex_type1D"] = (j10, l4);               k5 += l4
    k10 = k5; offs["tex_type1E"] = (k10, l4 + 2*i5);        k5 += l4 + 2*i5

    if k5 != trailer_at:
        raise ValueError(f"header offsets end at {k5}, expected trailer {trailer_at}")
    if k5 > n:
        raise ValueError(f"model trailer/offset sum runs past end: need {k5}, have {n}")

    # Back-compat alias: many decoders expect a triangle delta stream under
    # the 317-era name "tri_cmds"; in 525/622 this lives in face_idx16.
    if "face_idx16" in offs and "tri_cmds" not in offs:
        offs["tri_cmds"] = offs["face_idx16"]

    layout = "622" if is_622 else "525"
    debug_print(f"PY header {layout} trailer_at={trailer_at} v={v} f={f} t={t}")
    return ModelHeader(v, f, t, layout, newfmt, offs, trailer_at, calc_end=k5)


def parse_model_header_317_at(buf: bytes, trailer_at: int) -> ModelHeader:
    n = len(buf)
    if trailer_at < 0 or trailer_at + 18 > n:
        raise ValueError("bad trailer_at for 317")

    br = BR(buf, trailer_at)
    v = br.u16(); f = br.u16(); t = br.u8()
    if not _ok_counts(v, f, t): raise ValueError("insane counts for 317")

    k  = br.u8(); l = br.u8(); i1 = br.u8(); j1 = br.u8(); k1 = br.u8()
    l1 = br.u16(); i2 = br.u16(); j2 = br.u16(); k2 = br.u16()

    l2 = 0
    offs={}
    anInt372 = l2;                        l2 += v
    offs["v_flags"] = (anInt372, v)

    anInt378 = l2;                        l2 += f
    offs["tri_types"] = (anInt378, f)

    anInt381 = l2
    if l == 255:                          l2 += f
    else:                                 anInt381 = -l-1
    offs["priorities"] = (anInt381 if anInt381>=0 else None, f if l==255 else 0)

    anInt383 = l2
    if j1 == 1:                           l2 += f
    else:                                 anInt383 = -1
    offs["alpha"] = (anInt383 if anInt383>=0 else None, f if j1==1 else 0)

    anInt380 = l2
    if k == 1:                            l2 += f
    else:                                 anInt380 = -1
    offs["face_skins"] = (anInt380 if anInt380>=0 else None, f if k==1 else 0)

    anInt376 = l2
    if k1 == 1:                           l2 += v
    else:                                 anInt376 = -1
    offs["vert_skins"] = (anInt376 if anInt376>=0 else None, v if k1==1 else 0)

    anInt382 = l2
    if i1 == 1:                           l2 += f
    else:                                 anInt382 = -1
    offs["face_types2"] = (anInt382 if anInt382>=0 else None, f if i1==1 else 0)

    anInt377 = l2;                        l2 += k2
    offs["tri_cmds"] = (anInt377, k2)

    anInt379 = l2;                        l2 += f*2
    offs["colours"] = (anInt379, f*2)

    anInt384 = l2;                        l2 += t*6
    offs["tex_type0"] = (anInt384, t*6)

    anInt373 = l2;                        l2 += l1
    offs["vert_x"] = (anInt373, l1)

    anInt374 = l2;                        l2 += i2
    offs["vert_y"] = (anInt374, i2)

    anInt375 = l2;                        l2 += j2
    offs["vert_z"] = (anInt375, j2)

    if l2 > n:
        raise ValueError(f"trailer points past end (endian=little): need {l2}, have {n}")

    debug_print(f"PY header 317 trailer_at={trailer_at} v={v} f={f} t={t}")
    return ModelHeader(v, f, t, "317", None, offs, trailer_at,calc_end=l2)

# ---------- main with diagnostics ----------
_PKG_DIR = os.path.dirname(__file__)
_CACHE_DIR = os.path.join(_PKG_DIR, 'static', 'caches')

archive = build_archive_map(2)

loc_idx = get_file_data(archive, "loc.idx")
loc_dat = get_file_data(archive, "loc.dat")
index317 = parse_loc_idx(loc_idx)

loc_idx_667 = get_file_data(archive, "667loc.idx")
loc_dat_667 = get_file_data(archive, "667loc.dat")
index667    = parse_loc_idx(loc_idx_667)

idx317_map = {obj_id: (start, length) for obj_id, start, length in index317}
idx667_map = {obj_id: (start, length) for obj_id, start, length in index667}

od_cache = ObjectDefinitionCache(loc_dat, idx317_map,
                                 loc_dat_667, idx667_map)

idx1_filepath = os.path.join(_CACHE_DIR, "main_file_cache.idx1")
model_index = read_idx_file(idx1_filepath)

# Iterate actual object IDs present in the loc tables (not model file ids)
obj_ids = sorted(set(idx317_map.keys()) | set(idx667_map.keys()))
def is_valid_object_id(x: int, idx317_map: dict, idx667_map: dict) -> bool:
    return (x in idx317_map) or (x in idx667_map)

def is_valid_model_id(x: int, model_index: list) -> bool:
    return 0 <= x < len(model_index)

def each_object_id(idx317_map: dict, idx667_map: dict):
    return sorted(set(idx317_map.keys()) | set(idx667_map.keys()))

def each_model_id_for_object(obj: ObjectDef):
    for ids in obj.model_ids_by_t.values():
        for mid in ids:
            yield mid

# -------------- low-level helpers --------------

class BR2:
    __slots__=("b","p","end")
    def __init__(self,b,pos=0,length=None):
        self.b=b
        self.p=pos
        self.end = (pos + length) if (length is not None) else len(b)
    def u8(self):
        if self.p >= self.end: raise EOFError("u8 past end")
        v=self.b[self.p]; self.p+=1; return v
    def u16(self):
        if self.p+1 >= self.end: raise EOFError("u16 past end")
        b=self.b; p=self.p; self.p=p+2; return (b[p]<<8)|(b[p+1])
    def i8(self):
        v=self.u8()
        return v-256 if v>127 else v
    '''def smart_delta(self):
        """Matches ByteBuffer.method421() used in the Java code for vertex/tri deltas."""
        first = self.u8()
        if first < 128:
            # 1-byte signed with +64 bias removed
            return first - 64
        else:
            # 2-byte signed with 49152 bias removed
            second = self.u8()
            return ((first << 8) | second) - 49152'''
    def usmart_delta(self):
        """Unsigned smart used for face index delta stream (no negative deltas).
        Java often calls this readUShortSmart: if first < 128 => first; else ((first<<8)|second) - 32768.
        """
        first = self.u8()
        if first < 128:
            return first
        second = self.u8()
        return ((first << 8) | second) - 32768
    def smart_delta(self):
            if self.p >= self.end:
                raise EOFError("smart past end")
    
            first = self.b[self.p]
            if first < 128:
                self.p += 1
                return first - 64
    
            if self.p + 1 >= self.end:
                raise EOFError("smart past end (need two bytes)")
    
            value = (self.b[self.p] << 8) | self.b[self.p + 1]
            self.p += 2
            return value - 49152

def _slice(buf: bytes, off_len: tuple[int,int]) -> memoryview:
    off, ln = off_len
    if off is None or ln == 0:
        return memoryview(b"")
    end = off + ln
    if end > len(buf): raise ValueError(f"section {off_len} runs past end")
    return memoryview(buf)[off:end]

# -------------- 525/622 geometry decode (positions + indices) --------------

def decode_geom_525_622(buf: bytes, meta) -> tuple[list[tuple[int,int,int]], list[tuple[int,int,int]], list[int], list[bool]]:
    """
    Returns:
      vertices   : list[(x,y,z)] as ints (same units as cache; you can scale later)
      faces      : list[(a,b,c)] vertex indices (0-based)
      faceColors : list[int] 16-bit RS HSL colours (one per face)
      faceTex    : list[bool] True if face is textured (based on tex_idx)
    Only uses sections: v_flags, vert_x, vert_y, vert_z, tri_types (mode), colours (u16),
    and a delta stream for triangle indices: "tri_cmds" (317) or "face_idx16" (525/622).
    """
    # required sections common to both layouts
    _dprint("DECODE start: layout=", getattr(meta, 'layout', None),
            " v=", getattr(meta, 'vcount', None),
            " f=", getattr(meta, 'fcount', None),
            " t=", getattr(meta, 'tcount', None))
    try:
        for k in ("v_flags","vert_x","vert_y","vert_z","tri_types","tri_cmds","face_idx16","colours","tex_idx"):
            if k in meta.offs:
                off, ln = meta.offs[k]
                _dprint(f"  offs[{k}] = off={off} len={ln}")
    except Exception:
        pass
    for k in ("v_flags","vert_x","vert_y","vert_z","tri_types"):
        if k not in meta.offs:
            raise ValueError(f"missing section {k} in offs")

    # delta command stream differs by layout
    primary_cmd_key = "tri_cmds" if ("tri_cmds" in meta.offs) else ("face_idx16" if ("face_idx16" in meta.offs) else None)
    if primary_cmd_key is None:
        raise ValueError("missing section tri_cmds/face_idx16 in offs")
    alt_cmd_key = ("face_idx16" if primary_cmd_key == "tri_cmds" and "face_idx16" in meta.offs else ("tri_cmds" if primary_cmd_key == "face_idx16" and "tri_cmds" in meta.offs else None))
    v = meta.vcount
    f = meta.fcount

    flags   = _slice(buf, meta.offs["v_flags"]) 
    x_off, x_len = meta.offs["vert_x"]; y_off, y_len = meta.offs["vert_y"]; z_off, z_len = meta.offs["vert_z"]
    _dprint(f"  streams: vert_x[{x_off}..{x_off+x_len}], vert_y[{y_off}..{y_off+y_len}], vert_z[{z_off}..{z_off+z_len}]")

    def decode_vertices(xo, xl, yo, yl, zo, zl):
        bx = BR2(buf, xo, xl); by = BR2(buf, yo, yl); bz = BR2(buf, zo, zl)
        cx=cy=cz = 0
        verts_local = []
        try:
            needX = sum(1 for i in range(v) if (flags[i] & 1))
            needY = sum(1 for i in range(v) if (flags[i] & 2))
            needZ = sum(1 for i in range(v) if (flags[i] & 4))
            _dprint(f"  needX/Y/Z={needX}/{needY}/{needZ} lenX/Y/Z={xl}/{yl}/{zl}")
        except Exception:
            pass
        for i in range(v):
            fl = flags[i] if i < len(flags) else 0
            rx, ry, rz = bx.p, by.p, bz.p
            ex, ey, ez = bx.end, by.end, bz.end
            try:
                dx = bx.smart_delta() if (fl & 1) else 0
            except EOFError as e:
                raise ValueError(f'X OOB at V{i}: flags={fl:02x} pos={rx}/{ex} rem={ex-rx}') from e
            try:
                dy = by.smart_delta() if (fl & 2) else 0
            except EOFError as e:
                raise ValueError(f'Y OOB at V{i}: flags={fl:02x} pos={ry}/{ey} rem={ey-ry}') from e
            try:
                dz = bz.smart_delta() if (fl & 4) else 0
            except EOFError as e:
                raise ValueError(f'Z OOB at V{i}: flags={fl:02x} pos={rz}/{ez} rem={ez-rz}') from e
            cx += dx; cy += dy; cz += dz
            if i < MAX_DEBUG_VERTS or (bx.end-bx.p)<4 or (by.end-by.p)<4 or (bz.end-bz.p)<4:
                _dprint(f'  V{i}: flags={fl:02x} dx,dy,dz=({dx},{dy},{dz}) -> ({cx},{cy},{cz}) | pos X/Y/Z={bx.p}/{by.p}/{bz.p} rem X/Y/Z={bx.end-bx.p}/{by.end-by.p}/{bz.end-bz.p}')
            if (i % 16) == 15 or i == v-1:
                _dprint(f'    rem X/Y/Z={bx.end-bx.p}/{by.end-by.p}/{bz.end-bz.p}')
            verts_local.append((cx, cy, cz))
        return verts_local

    # Try original axis lengths; if Z runs out but Y has extra, try swapping Y/Z
    try:
        verts = decode_vertices(x_off, x_len, y_off, y_len, z_off, z_len)
    except ValueError as e:
        msg = str(e)
        if 'Z OOB' in msg and y_len > z_len:
            _dprint('  vertex decode fallback: swapping Y/Z streams due to Z OOB')
            verts = decode_vertices(x_off, x_len, z_off, z_len, y_off, y_len)
        else:
            raise

    cols_br_seed = BR2(buf, meta.offs["colours"][0], meta.offs["colours"][1]) if "colours" in meta.offs else None
    tex_idx_br_seed = BR2(buf, meta.offs["tex_idx"][0], meta.offs["tex_idx"][1]) if "tex_idx" in meta.offs and meta.offs["tex_idx"][1] else None

    def build_faces(cmd_key_use: str):
        _dprint(f"  build_faces using {cmd_key_use}")
        off_modes, len_modes = meta.offs["tri_types"]
        off_cmd, len_cmd = meta.offs[cmd_key_use]
        debug_print("off_modes: ", off_modes, " len_modes: ", len_modes, " off_cmd: ", off_cmd, " len_cmd: ", len_cmd)
        modes = BR2(buf, off_modes, len_modes)
        cmd   = BR2(buf, off_cmd, len_cmd)
        try:
            modes_preview = bytes(buf[off_modes: off_modes + min(len_modes, 32)])
            cmd_preview   = bytes(buf[off_cmd:   off_cmd   + min(len_cmd,   32)])
            _dprint("    tri_types[0:32]=", modes_preview.hex())
            _dprint("    ", cmd_key_use, "[0:32]=", cmd_preview.hex())
        except Exception:
            pass
        # Debug: mode distribution and minimal command-byte feasibility under two hypotheses
        try:
            modes_bytes = list(bytes(buf[off_modes: off_modes + len_modes]))
            from collections import Counter
            cnt = Counter(modes_bytes)
            _dprint(f"    tri_types counts: {dict(cnt)}")
            _dprint(f"    cmd stream len={len_cmd}")
            # H0: treat mode 0 like mode 1 (3 deltas); modes 1..3 as 1 delta
            needed_H0 = 0
            for m in modes_bytes:
                if m == 0:
                    needed_H0 += 3
                elif m in (1,2,3):
                    needed_H0 += 1
                else:
                    # unexpected value: assume worst-case 3
                    needed_H0 += 3
            # H1: treat all modes (including 0) as one-delta (lower bound)
            needed_H1 = len_modes
            _dprint(f"    min cmd bytes needed H0(0->3)={needed_H0}, H1(0->1)={needed_H1}, available={len_cmd}")
        except Exception:
            modes_bytes = None
        cols_br = BR2(buf, meta.offs["colours"][0], meta.offs["colours"][1]) if "colours" in meta.offs else None
        tex_idx_br = BR2(buf, meta.offs["tex_idx"][0], meta.offs["tex_idx"][1]) if "tex_idx" in meta.offs and meta.offs["tex_idx"][1] else None
        faces = []
        face_colours: list[int] = []
        face_textured: list[bool] = []
        k12 = i13 = k13 = l13 = 0
        for i in range(f):
            try:
                mode = modes.u8()
            except EOFError as e:
                raise ValueError(f"tri_types stream OOB at face {i}: {e}")
            #if mode == 0:
            #    mode = 1
            try:
                d1 = d2 = d3 = None
                if mode == 0:
                    # strip continuation: reuse previous triangle without consuming the command stream
                    pass
                elif mode == 1:
                    d1 = cmd.smart_delta(); k12 = d1 + l13; l13 = k12
                    d2 = cmd.smart_delta(); i13 = d2 + l13; l13 = i13
                    d3 = cmd.smart_delta(); k13 = d3 + l13; l13 = k13
                elif mode == 2:
                    i13 = k13
                    d3 = cmd.smart_delta(); k13 = d3 + l13; l13 = k13
                elif mode == 3:
                    k12 = k13
                    d3 = cmd.smart_delta(); k13 = d3 + l13; l13 = k13
                elif mode == 4:
                    tmp = k12; k12 = i13; i13 = tmp
                    d3 = cmd.smart_delta(); k13 = d3 + l13; l13 = k13
                else:
                    raise ValueError(f"unknown tri mode {mode} at face {i}")
            except EOFError as e:
                consumed = (cmd.p - off_cmd)
                rem = len_cmd - consumed
                window = None
                try:
                    if modes_bytes is not None:
                        window = modes_bytes[max(0, i-3):i+3]
                except Exception:
                    window = None
                raise ValueError(
                    f"face idx stream OOB at face {i} (mode {mode}): {e}; "
                    f"consumed={consumed}/{len_cmd} rem={rem}; tri_types around={window}"
                )
            if i < MAX_DEBUG_FACES:
                if mode == 1:
                    _dprint(f"  F{i}: mode=1 d=(%s,%s,%s) -> (k12,i13,k13)=(%d,%d,%d) l13=%d pos(cmd)=%d consumed=%d/%d rem=%d" % (d1, d2, d3, k12, i13, k13, l13, cmd.p, (cmd.p - off_cmd), len_cmd, (len_cmd - (cmd.p - off_cmd))))
                elif mode == 0:
                    _dprint(f"  F{i}: mode=0 reuse -> (k12,i13,k13)=(%d,%d,%d) l13=%d pos(cmd)=%d consumed=%d/%d rem=%d" % (k12, i13, k13, l13, cmd.p, (cmd.p - off_cmd), len_cmd, (len_cmd - (cmd.p - off_cmd))))
                else:
                    _dprint(f"  F{i}: mode={mode} d3=%s -> (k12,i13,k13)=(%d,%d,%d) l13=%d pos(cmd)=%d consumed=%d/%d rem=%d" % (d3, k12, i13, k13, l13, cmd.p, (cmd.p - off_cmd), len_cmd, (len_cmd - (cmd.p - off_cmd))))
            # Early sanity: break fast on out-of-range to see where it happens
            if k12 < 0 or i13 < 0 or k13 < 0 or k12 >= v or i13 >= v or k13 >= v:
                raise ValueError(f"face {i} produces out-of-range index: (k12,i13,k13)=({k12},{i13},{k13}) v={v} mode={mode} l13={l13} pos(cmd)={cmd.p}")
            faces.append((k12, i13, k13))
            if cols_br is not None:
                face_colours.append(cols_br.u16())
            if tex_idx_br is not None:
                tval = tex_idx_br.u16()
                face_textured.append(tval != 0)
            else:
                face_textured.append(False)
        # sanity (redundant with early check, but keep summary too)
        if faces:
            flat = [m for tri in faces for m in tri]
            max_idx = max(flat); min_idx = min(flat)
            if max_idx >= v:
                raise ValueError(f"face references vertex {max_idx} >= vcount {v}")
            if min_idx < 0:
                raise ValueError(f"face references negative vertex index {min_idx}")
        return faces, face_colours, face_textured

    # Try with primary command stream; if sanity fails and alternate exists, retry
    try:
        _dprint(f"  primary cmd stream: {primary_cmd_key}")
        faces, face_colours, face_textured = build_faces(primary_cmd_key)
    except ValueError as e:
        _dprint("  primary failed:", e)
        if alt_cmd_key is not None and ('vcount' in str(e) or 'negative vertex index' in str(e) or 'unknown tri mode' in str(e) or 'out-of-range index' in str(e)):
            _dprint(f"  retrying with alternate cmd stream: {alt_cmd_key}")
            faces, face_colours, face_textured = build_faces(alt_cmd_key)
        else:
            raise
    return verts, faces, face_colours, face_textured

# -------------- Minimal 525/622 Type-0 UVs (tri -> tri mapping) --------------

import struct as _struct

def compute_type0_face_uvs_525_622(buf: bytes, meta, verts, faces) -> list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None]:
    """
    For each face, if it references a textured triangle `t` with O[t]==0, compute UVs by
    expressing each face vertex P in the basis (A, B, C) of that textured triangle:
      P = A + u*(B-A) + v*(C-A)
    Returns a list of length fcount with either a ((u,v),(u,v),(u,v)) triplet or None.
    """
    f = meta.fcount; tcount = meta.tcount
    # If there is no tex_idx section, bail
    if "tex_idx" not in meta.offs or meta.offs["tex_idx"][1] == 0 or tcount <= 0:
        return [None]*f

    # Read per-face texture reference D (0/65535 => -1, else 1-based -> 0-based; clamp > tcount to -1)
    off_tex = meta.offs["tex_idx"][0]
    raw_vals = [_struct.unpack_from(">H", buf, off_tex + 2*i)[0] for i in range(f)]
    D = []
    for v in raw_vals:
        if v == 0 or v == 65535:
            D.append(-1)
        else:
            d = v - 1
            D.append(d if 0 <= d < tcount else -1)

    # O[] types live at the start of the model buffer (tcount signed bytes),
    # matching how the header counted k4/l4/i5.
    O = [((buf[i]-256) if buf[i] > 127 else buf[i]) for i in range(min(tcount, len(buf)))]
    if len(O) < tcount:
        O.extend([1] * (tcount - len(O)))
    # Debug: report O-type distribution and tex_type0 length consistency
    try:
        from collections import Counter
        cnt = Counter(O)
        t0 = cnt.get(0, 0)
        expected_t0 = 6*t0
        off_t0, len_t0 = meta.offs.get("tex_type0", (None, 0))
        debug_print(f"O types: {dict(cnt)}; type0={t0}, tex_type0_len={len_t0}, expected={expected_t0}")
    except Exception:
        pass
    # Build rank mapping for type-0 textured triangles
    zero_positions = []
    for k in range(tcount):
        if O[k] == 0:
            zero_positions.append(k)
    rank_for_zero = {}
    for idx, k in enumerate(zero_positions):
        rank_for_zero[k] = idx

    # Access to the compact tex_type0 stream (3*U16 per type-0 entry)
    if "tex_type0" not in meta.offs:
        return [None]*f
    off_t0, len_t0 = meta.offs["tex_type0"]
    expected_t0 = 6*len(zero_positions)
    if expected_t0 != len_t0:
        # Inconsistent counts; be lenient
        pass

    def tri_for_zero_rank(r: int) -> tuple[int,int,int] | None:
        base = off_t0 + 6*r
        if base + 6 <= off_t0 + len_t0:
            a,b,c = _struct.unpack_from(">HHH", buf, base)
            return a,b,c
        return None

    def solve_uv(A,B,C,P):
        ax,ay,az = A; bx,by,bz = B; cx,cy,cz = C; px,py,pz = P
        v0 = (bx-ax, by-ay, bz-az)
        v1 = (cx-ax, cy-ay, cz-az)
        v2 = (px-ax, py-ay, pz-az)
        d00 = v0[0]*v0[0] + v0[1]*v0[1] + v0[2]*v0[2]
        d01 = v0[0]*v1[0] + v0[1]*v1[1] + v0[2]*v1[2]
        d11 = v1[0]*v1[0] + v1[1]*v1[1] + v1[2]*v1[2]
        d20 = v2[0]*v0[0] + v2[1]*v0[1] + v2[2]*v0[2]
        d21 = v2[0]*v1[0] + v2[1]*v1[1] + v2[2]*v1[2]
        denom = d00 * d11 - d01 * d01
        if abs(denom) < 1e-8:
            return (0.0, 0.0)
        u = (d20 * d11 - d21 * d01) / denom
        v = (d21 * d00 - d20 * d01) / denom
        return (float(u), float(v))

    out: list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None] = [None]*f
    for i in range(f):
        dval = D[i]
        if dval < 0:
            continue
        t = dval
        if not (0 <= t < tcount):
            continue
        if O[t] != 0:
            continue  # only handle Type-0 for now
        r = rank_for_zero.get(t)
        if r is None:
            continue
        tri = tri_for_zero_rank(r)
        if tri is None:
            continue
        a0,b0,c0 = tri
        if not (0 <= a0 < len(verts) and 0 <= b0 < len(verts) and 0 <= c0 < len(verts)):
            continue
        A = verts[a0]; B = verts[b0]; C = verts[c0]
        i0,i1,i2 = faces[i]
        P0 = verts[i0]; P1 = verts[i1]; P2 = verts[i2]
        uv0 = solve_uv(A,B,C,P0)
        uv1 = solve_uv(A,B,C,P1)
        uv2 = solve_uv(A,B,C,P2)
        out[i] = (uv0, uv1, uv2)
    return out

def compute_type1_face_uvs_525_622(buf: bytes, meta, verts, faces) -> list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None]:
    """
    Minimal Type-1 UVs: for O[t] in {1,2,3}, read tri indices from tex_type1A in the
    order of those t's and compute barycentric UVs as in Type-0. Ignores the extra
    orientation/scale bytes for now (good enough to validate mapping coverage).
    """
    f = meta.fcount; tcount = meta.tcount
    if "tex_idx" not in meta.offs or meta.offs["tex_idx"][1] == 0 or tcount <= 0:
        return [None]*f

    off_tex = meta.offs["tex_idx"][0]
    raw_vals = [_struct.unpack_from(">H", buf, off_tex + 2*i)[0] for i in range(f)]
    D = []
    for v in raw_vals:
        if v == 0 or v == 65535:
            D.append(-1)
        else:
            d = v - 1
            D.append(d if 0 <= d < tcount else -1)

    # Read O[] from the start of the model buffer (aligns with header layout)
    O = [((buf[i]-256) if buf[i] > 127 else buf[i]) for i in range(min(tcount, len(buf)))]
    if len(O) < tcount:
        O.extend([1] * (tcount - len(O)))

    if "tex_type1A" not in meta.offs:
        return [None]*f
    off_t1A, len_t1A = meta.offs["tex_type1A"]

    # Build rank mapping for O in {1,2,3}
    one_positions = []
    for k in range(tcount):
        if 1 <= O[k] <= 3:
            one_positions.append(k)
    rank_for_one = {k: idx for idx, k in enumerate(one_positions)}

    def tri_for_one_rank(r: int) -> tuple[int,int,int] | None:
        base = off_t1A + 6*r
        if off_t1A is None:
            return None
        if base + 6 <= off_t1A + len_t1A:
            a,b,c = _struct.unpack_from(">HHH", buf, base)
            return a,b,c
        return None

    def solve_uv(A,B,C,P):
        ax,ay,az = A; bx,by,bz = B; cx,cy,cz = C; px,py,pz = P
        v0 = (bx-ax, by-ay, bz-az)
        v1 = (cx-ax, cy-ay, cz-az)
        v2 = (px-ax, py-ay, pz-az)
        d00 = v0[0]*v0[0] + v0[1]*v0[1] + v0[2]*v0[2]
        d01 = v0[0]*v1[0] + v0[1]*v1[1] + v0[2]*v1[2]
        d11 = v1[0]*v1[0] + v1[1]*v1[1] + v1[2]*v1[2]
        d20 = v2[0]*v0[0] + v2[1]*v0[1] + v2[2]*v0[2]
        d21 = v2[0]*v1[0] + v2[1]*v1[1] + v2[2]*v1[2]
        denom = d00 * d11 - d01 * d01
        if abs(denom) < 1e-8:
            return (0.0, 0.0)
        u = (d20 * d11 - d21 * d01) / denom
        v = (d21 * d00 - d20 * d01) / denom
        return (float(u), float(v))

    out: list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None] = [None]*f
    for i in range(f):
        dval = D[i]
        if dval < 0:
            continue
        t = dval
        if not (0 <= t < tcount):
            continue
        if not (1 <= O[t] <= 3):
            continue
        r = rank_for_one.get(t)
        if r is None:
            continue
        tri = tri_for_one_rank(r)
        if tri is None:
            continue
        a0,b0,c0 = tri
        if not (0 <= a0 < len(verts) and 0 <= b0 < len(verts) and 0 <= c0 < len(verts)):
            continue
        A = verts[a0]; B = verts[b0]; C = verts[c0]
        i0,i1,i2 = faces[i]
        P0 = verts[i0]; P1 = verts[i1]; P2 = verts[i2]
        uv0 = solve_uv(A,B,C,P0)
        uv1 = solve_uv(A,B,C,P1)
        uv2 = solve_uv(A,B,C,P2)
        out[i] = (uv0, uv1, uv2)
    return out

# -------------- Minimal glTF writer (positions + indices only) --------------

import json, struct, base64

def _hsl_to_rgb(h: float, s: float, l: float) -> tuple[float,float,float]:
    """Basic HSL (0..1) to sRGB (0..1)."""
    def hue2rgb(p, q, t):
        if t < 0: t += 1
        if t > 1: t -= 1
        if t < 1/6: return p + (q - p) * 6 * t
        if t < 1/2: return q
        if t < 2/3: return p + (q - p) * (2/3 - t) * 6
        return p
    if s == 0:
        return l, l, l
    q = l * (1 + s) if l < 0.5 else (l + s - l * s)
    p = 2 * l - q
    r = hue2rgb(p, q, h + 1/3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1/3)
    return r, g, b

def rs_colour_to_rgb(c: int) -> tuple[float,float,float]:
    """
    Convert RuneScape 16-bit HSL-ish colour to approximate sRGB (0..1).
    Layout: H(6 bits) S(3 bits) L(7 bits). This ignores runtime brightness tweaks.
    """
    if c is None:
        return (0.7, 0.7, 0.7)
    h = ((c >> 10) & 0x3F) / 64.0
    s = ((c >> 7)  & 0x07) / 8.0
    l = (c & 0x7F) / 128.0
    return _hsl_to_rgb(h, s, l)

def rs_colour_to_hsl(c: int) -> tuple[float,float,float]:
    """Decode packed RS HSL -> floats 0..1 (h,s,l)."""
    if c is None:
        return (0.0, 0.0, 0.7)
    h = ((c >> 10) & 0x3F) / 64.0
    s = ((c >> 7)  & 0x07) / 8.0
    l = (c & 0x7F) / 128.0
    return h, s, l

def rs_method481(packed_colour: int, brightness: int, flags: int = 0) -> int:
    """
    Port of Model.method481: apply brightness to packed HSL colour.
    - packed_colour: 16-bit packed HSL (H6 S3 L7)
    - brightness: 0..127
    - flags: if bit 1 set, invert brightness (127-j)
    Returns new packed HSL with same H/S and updated L.
    """
    if packed_colour == 65535:
        return 0
    j = brightness
    if (flags & 2) == 2:
        if j < 0:
            j = 0
        elif j > 127:
            j = 127
        j = 127 - j
    j = (j * (packed_colour & 0x7F)) >> 7
    if j < 2:
        j = 2
    elif j > 126:
        j = 126
    return (packed_colour & 0xFF80) + j

def rs_colour_to_hsl(c: int) -> tuple[float,float,float]:
    """Decode RuneScape 16-bit packed HSL into floats 0..1 (h,s,l)."""
    if c is None:
        return (0.0, 0.0, 0.7)
    h = ((c >> 10) & 0x3F) / 64.0
    s = ((c >> 7)  & 0x07) / 8.0
    l = (c & 0x7F) / 128.0
    return h, s, l

def write_gltf_positions_indices(verts, faces, out_path: str, *, face_colors: list[int] | None = None,
                                 flip_y: bool = True, double_sided: bool = True,
                                 compute_normals: bool = False,
                                 node_translation: tuple[float,float,float] | None = None,
                                 node_scale: tuple[float,float,float] | None = None,
                                 bake_rs_shading: bool = False,
                                 shading_strength: float = 0.6,
                                 light_dir: tuple[float,float,float] = (-50.0, -10.0, -50.0),
                                 rs_ambient: int = 64, rs_j: int = 768,
                                 brightness_scale: float = 0.85,
                                 apply_rs_lighting: bool = False,
                                 face_flags: list[int] | None = None,
                                 face_uvs: list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None] | None = None,
                                 textured_faces: list[bool] | None = None,
                                 hide_untextured: bool = False,
                                 min_lightness_untextured: float | None = None):
    """
    Writes a minimal glTF 2.0 (JSON) with a single mesh/primitives:
      attributes: POSITION (float32), indices: uint32
    No normals/UVs/materials.
    """
    # Optionally flip Y axis and adjust winding to keep front faces
    if flip_y:
        verts = [(x, -y, z) for (x,y,z) in verts]
        faces = [(a, c, b) for (a,b,c) in faces]

    using_vertex_colors = face_colors is not None and len(face_colors) == len(faces)
    # treat colour 65535 as 'textured' sentinel; hide such faces if we can't texture
    hide_textured_faces = True
    has_alpha = False

    hidden_count = 0

    # Compute smooth vertex normals on the original topology (for RS lighting or export)
    base_normals = None
    if (apply_rs_lighting or bake_rs_shading or compute_normals):
        nx = [0.0]*len(verts)
        ny = [0.0]*len(verts)
        nz = [0.0]*len(verts)
        for (i0,i1,i2) in faces:
            x0,y0,z0 = verts[i0]; x1,y1,z1 = verts[i1]; x2,y2,z2 = verts[i2]
            ux, uy, uz = x1-x0, y1-y0, z1-z0
            vx, vy, vz = x2-x0, y2-y0, z2-z0
            fnx = uy*vz - uz*vy
            fny = uz*vx - ux*vz
            fnz = ux*vy - uy*vx
            nx[i0] += fnx; ny[i0] += fny; nz[i0] += fnz
            nx[i1] += fnx; ny[i1] += fny; nz[i1] += fnz
            nx[i2] += fnx; ny[i2] += fny; nz[i2] += fnz
        base_normals = []
        for i in range(len(verts)):
            x, y, z = nx[i], ny[i], nz[i]
            l = (x*x + y*y + z*z) ** 0.5
            if l > 1e-8:
                base_normals.append((x/l, y/l, z/l))
            else:
                base_normals.append((0.0, 1.0, 0.0))

    if using_vertex_colors:
        # Duplicate vertices per face to bind unique colours per triangle
        v2 = []
        c2 = []
        n2 = [] if base_normals is not None else None
        uv2 = [] if face_uvs is not None else None
        idx_list = []
        for i, (a,b,c) in enumerate(faces):
            fc = face_colors[i]
            h, s, base_l = rs_colour_to_hsl(fc)
            is_textured = (face_uvs is not None and i < len(face_uvs) and face_uvs[i] is not None)
            if hide_textured_faces and fc == 65535:
                per_vert_cols = [(0.0, 0.0, 0.0, 0.0)]*3
                has_alpha = True
            # RS method480 + method481 path (optional)
            elif apply_rs_lighting and base_normals is not None:
                import math
                k, l, i1 = light_dir
                Lmag = math.sqrt(k*k + l*l + i1*i1)
                k1 = (rs_j * Lmag) / 256.0
                denom = k1 + 0.5 * k1 if k1 > 1e-8 else 1.0
                out_cols = []
                flg = face_flags[i] if (face_flags is not None and i < len(face_flags)) else 0
                for vid in (a,b,c):
                    nx, ny, nz = base_normals[vid]
                    dot = (k*nx + l*ny + i1*nz)
                    jprime = rs_ambient + (dot / denom)
                    jprime = max(0.0, min(127.0, jprime))
                    jprime = int(max(0.0, min(127.0, jprime * brightness_scale)))
                    packed = rs_method481(fc, jprime, flg)
                    # Optionally raise minimum lightness for untextured faces only
                    if textured_faces is not None and i < len(textured_faces) and textured_faces[i]:
                        r,g,bcol = rs_colour_to_rgb(packed)
                    elif min_lightness_untextured is not None:
                        h2,s2,l2 = rs_colour_to_hsl(packed)
                        Lc = l2 if l2 >= min_lightness_untextured else min_lightness_untextured
                        r,g,bcol = _hsl_to_rgb(h2, s2, Lc)
                    else:
                        r,g,bcol = rs_colour_to_rgb(packed)
                    out_cols.append((float(r), float(g), float(bcol), 1.0))
                per_vert_cols = out_cols
            # Simple baked lightness modulation (unlit)
            elif base_normals is not None and bake_rs_shading:
                import math
                k, l, i1 = light_dir
                Lmag = math.sqrt(k*k + l*l + i1*i1)
                k1 = (rs_j * Lmag) / 256.0
                denom = k1 + 0.5 * k1 if k1 > 1e-8 else 1.0
                shades = []
                for vid in (a,b,c):
                    nx, ny, nz = base_normals[vid]
                    dot = (k*nx + l*ny + i1*nz) * shading_strength
                    jprime = rs_ambient + (dot / denom)
                    jprime = 2.0 if jprime < 2.0 else (126.0 if jprime > 126.0 else jprime)
                    Lnew = min(1.0, (float(jprime) / 128.0) * brightness_scale)
                    r,g,bcol = _hsl_to_rgb(h, s, Lnew)
                    shades.append((r,g,bcol,1.0))
                per_vert_cols = shades
            else:
                # fallback: flat face colour
                Lflat = min(1.0, max(0.0, base_l * brightness_scale))
                r,g,bcol = _hsl_to_rgb(h, s, Lflat)
                per_vert_cols = [(r,g,bcol,1.0)]*3
            if hide_untextured and not is_textured:
                per_vert_cols = [(0.0, 0.0, 0.0, 0.0)]*3
                has_alpha = True
                hidden_count += 1

            for v_idx, vid in enumerate((a,b,c)):
                vx,vy,vz = verts[vid]
                v2.append((float(vx), float(vy), float(vz)))
                c2.append(tuple(float(x) for x in per_vert_cols[v_idx]))
                if n2 is not None and base_normals is not None:
                    n2.append(base_normals[vid])
                if uv2 is not None:
                    if face_uvs is not None and face_uvs[i] is not None:
                        uv2.append(face_uvs[i][v_idx])
                    else:
                        uv2.append((0.0, 0.0))
            base = i * 3
            idx_list.extend((base, base+1, base+2))
        verts_out = v2
        colors_out = c2
        normals_out = n2
        uvs_out = uv2
    else:
        verts_out = [(float(x), float(y), float(z)) for (x,y,z) in verts]
        idx_list = [c for (a,b,c) in faces for c in (a,b,c)]
        colors_out = None
        normals_out = base_normals if base_normals is not None else None
        uvs_out = None

    # pack buffers
    pos_bytes = b"".join(struct.pack("<3f", x, y, z) for (x,y,z) in verts_out)
    idx_bytes = b"".join(struct.pack("<I", i) for i in idx_list)
    col_bytes = b"" if colors_out is None else b"".join(struct.pack("<4f", r,g,b,a) for (r,g,b,a) in colors_out)
    uv_bytes  = b"" if uvs_out   is None else b"".join(struct.pack("<2f", u, v) for (u,v) in uvs_out)

    # normals for export (if not baking RS shading)
    norm_bytes = b""
    export_normals = compute_normals and (not bake_rs_shading) and normals_out is not None
    have_normals = False
    if export_normals:
        norm_bytes = b"".join(struct.pack("<3f", x, y, z) for (x,y,z) in normals_out)
        have_normals = True
    have_uvs = (uvs_out is not None)

    # bufferViews
    bv_pos = 0
    bv_idx = 1
    bv_col = 2 if colors_out is not None else None
    next_bv = 2 + (1 if colors_out is not None else 0)
    bv_uv  = next_bv if have_uvs else None
    bv_nrm = (next_bv + (1 if have_uvs else 0)) if have_normals else None
    # accessors
    accessor_pos = 0
    accessor_idx = 1
    accessor_col = 2 if colors_out is not None else None
    accessor_uv  = (2 if colors_out is None else 3) if have_uvs else None
    accessor_nrm = ((3 if colors_out is not None else 2) + (1 if have_uvs else 0)) if have_normals else None

    # compute min/max for positions
    if verts_out:
        minx = min(x for x,_,_ in verts_out); maxx = max(x for x,_,_ in verts_out)
        miny = min(y for _,y,_ in verts_out); maxy = max(y for _,y,_ in verts_out)
        minz = min(z for _,_,z in verts_out); maxz = max(z for _,_,z in verts_out)
        pos_min = [float(minx), float(miny), float(minz)]
        pos_max = [float(maxx), float(maxy), float(maxz)]
    else:
        pos_min = pos_max = [0.0,0.0,0.0]

    # one combined buffer (embedded as base64)
    bin_parts = [pos_bytes, idx_bytes]
    if colors_out is not None:
        bin_parts.append(col_bytes)
    if have_uvs:
        bin_parts.append(uv_bytes)
    if have_normals:
        bin_parts.append(norm_bytes)
    bin_blob = b"".join(bin_parts)
    uri = "data:application/octet-stream;base64," + base64.b64encode(bin_blob).decode("ascii")

    use_unlit = (not have_normals)  # bake shading -> unlit; PBR only when exporting normals
    gltf = {
      "asset": {"version": "2.0"},
      "extensionsUsed": (["KHR_materials_unlit"] if (colors_out is not None and use_unlit) else []),
      "buffers": [
        {"uri": uri, "byteLength": len(bin_blob)}
      ],
      "bufferViews": [
        {"buffer":0, "byteOffset":0,                 "byteLength":len(pos_bytes), "target":34962},  # ARRAY_BUFFER
        {"buffer":0, "byteOffset":len(pos_bytes),    "byteLength":len(idx_bytes), "target":34963},  # ELEMENT_ARRAY_BUFFER
      ] + ([
        {"buffer":0, "byteOffset":len(pos_bytes)+len(idx_bytes), "byteLength":len(col_bytes), "target":34962}
      ] if colors_out is not None else []) + ([
        {"buffer":0, "byteOffset":len(pos_bytes)+len(idx_bytes)+ (len(col_bytes) if colors_out is not None else 0), "byteLength":len(uv_bytes), "target":34962}
      ] if have_uvs else []) + ([
        {"buffer":0, "byteOffset":len(pos_bytes)+len(idx_bytes)+ (len(col_bytes) if colors_out is not None else 0) + (len(uv_bytes) if have_uvs else 0),
         "byteLength":len(norm_bytes), "target":34962}
      ] if have_normals else []),
      "accessors": [
        {"bufferView":bv_pos, "byteOffset":0, "componentType":5126, "count":len(verts_out),
         "type":"VEC3", "min":pos_min, "max":pos_max},
        {"bufferView":bv_idx, "byteOffset":0, "componentType":5125, "count":len(idx_list),
         "type":"SCALAR"}
      ] + ([
        {"bufferView":bv_col, "byteOffset":0, "componentType":5126, "count":len(verts_out),
         "type":"VEC4"}
      ] if colors_out is not None else []) + ([
        {"bufferView":bv_uv, "byteOffset":0, "componentType":5126, "count":len(verts_out),
         "type":"VEC2"}
      ] if have_uvs else []) + ([
        {"bufferView":bv_nrm, "byteOffset":0, "componentType":5126, "count":len(verts_out),
         "type":"VEC3"}
      ] if have_normals else []),
      "materials": ([{
          "pbrMetallicRoughness": {"metallicFactor": 0.0, "roughnessFactor": 1.0},
          "doubleSided": double_sided,
          "alphaMode": "MASK" if has_alpha else "OPAQUE",
          "alphaCutoff": 0.5
      }] if not use_unlit else [
          {"extensions": {"KHR_materials_unlit": {}}, "doubleSided": double_sided,
           "alphaMode": "MASK" if has_alpha else "OPAQUE",
           "alphaCutoff": 0.5}
      ]),
      "meshes":[
        {"primitives":[{"attributes":(
                            {"POSITION": accessor_pos}
                            | ({"COLOR_0": accessor_col} if colors_out is not None else {})
                            | ({"TEXCOORD_0": accessor_uv} if have_uvs else {})
                            | ({"NORMAL": accessor_nrm} if have_normals else {})
                          ),
                         "indices": accessor_idx,
                         "material": 0}]}
      ],
      "nodes":[{
          "mesh":0
      }],
      "scenes":[{"nodes":[0]}],
      "scene":0
    }

    # apply node transform if provided
    if node_translation is not None:
        gltf["nodes"][0]["translation"] = [float(node_translation[0]), float(node_translation[1]), float(node_translation[2])]
    if node_scale is not None:
        gltf["nodes"][0]["scale"] = [float(node_scale[0]), float(node_scale[1]), float(node_scale[2])]
    if hide_untextured:
        debug_print(f"hidden faces (no UVs): {hidden_count}/{len(faces)}")

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(gltf, f, indent=2)
    return out_path

def get_objects_with_gltf(object_type_pairs: list[tuple[int,int]], out_dir: str = ".", hide_untextured: bool = False) -> dict[str, dict]:
    """
    For each (object id, model type) in `object_type_pairs`, returns a dict mapping "id-type" -> {
      "objectdef": full ObjectDef as a dict,
      "gltf": glTF filepath if successfully exported for any associated model,
               or the string "no model" otherwise
    }.
    Uses the provided model type to find the correct model list for the object
    and exports the first decodable model of that type into `out_dir`.
    """
    from dataclasses import asdict
    import os

    results: dict[str, dict] = {}
    cache_updated = False
    global _CURRENT_DEBUG_OBJECT_ID, _CURRENT_DEBUG_MODEL_ID
    for obj_id, model_type in object_type_pairs:
        _CURRENT_DEBUG_OBJECT_ID = obj_id
        _CURRENT_DEBUG_MODEL_ID = None
        key = f"{obj_id}-{model_type}"
        entry: dict = {}
        cached_entry = _OBJECT_CACHE.get(key)
        if cached_entry:
            results[key] = copy.deepcopy(cached_entry)
            continue
        try:
            obj = od_cache.get(obj_id)
            entry["objectdef"] = asdict(obj)
            entry["model_type"] = model_type
            entry["object_id"] = obj_id
        except Exception as e:
            results[key] = {"error": str(e), "gltf": "no model"}
            continue

        gltf_path: str | None = None
        # Try to export the first valid/decodable model for this object.
        # 1) Prefer the requested model_type if present.
        # 2) Fallback: try all available model types for the object until one works.
        try:
            tried_types = []
            types_to_try = []
            if obj.model_ids_by_t.get(model_type):
                types_to_try.append(model_type)
            # Append remaining available types as fallback
            types_to_try += [t for t in obj.model_ids_by_t.keys() if t != model_type]

            sx = (obj.modelSizeX or 128) / 128.0
            sy = (obj.modelSizeH or 128) / 128.0
            sz = (obj.modelSizeY or 128) / 128.0
            tx = float(obj.offsetX)
            ty = float(-(obj.offsetH or 0))
            tz = float(obj.offsetY)

            for t in types_to_try:
                tried_types.append(t)
                mids = obj.model_ids_by_t.get(t, [])
                component_meshes: list[dict] = []
                component_paths: list[str] = []
                used_model_ids_local: list[int] = []

                for model_id in mids:
                    _CURRENT_DEBUG_MODEL_ID = model_id
                    debug_print(f"    trying model {model_id} for object {obj_id}", obj_id=obj_id, model_id=model_id)
                    try:
                        if not is_valid_model_id(model_id, model_index):
                            debug_print(f"    model {model_id} out of range; skipping", obj_id=obj_id, model_id=model_id)
                            continue
                        blob = read_model_blob(model_id, model_index)
                        meta = parse_model_header_any(blob)
                        try:
                            debug_print(
                                f"    model {model_id} layout={getattr(meta,'layout',None)} "
                                f"v={getattr(meta,'vcount',None)} f={getattr(meta,'fcount',None)} "
                                f"t={getattr(meta,'tcount',None)}",
                                obj_id=obj_id,
                                model_id=model_id,
                            )
                            for section in ("v_flags","vert_x","vert_y","vert_z","tri_types","tri_cmds","face_idx16","colours","tex_idx"):
                                if section in meta.offs:
                                    off,len_ = meta.offs[section]
                                    debug_print(
                                        f"      section {section}: off={off} len={len_}",
                                        obj_id=obj_id,
                                        model_id=model_id,
                                    )
                        except Exception:
                            pass
                        verts, faces, face_cols, face_tex = decode_geom_525_622(_gunzip_maybe(blob), meta)
                        if obj_id == 1011:
                            print(
                                f"[face-tex] object {obj_id} model {model_id} face_tex={face_tex} face_cols={face_cols} "
                                f"unique={sorted(set(face_tex))}"
                            )

                        original_cols = getattr(obj, "originalModelColors", []) or []
                        modified_cols = getattr(obj, "modifiedModelColors", []) or []

                        if (
                            ENABLE_RECOLOURING
                            and original_cols
                            and modified_cols
                            and len(original_cols) == len(modified_cols)
                        ):
                            face_cols = remap_face_colours(
                                face_cols,
                                face_tex,
                                original_cols,
                                modified_cols,
                            )

                        merged_uvs = None
                        try:
                            face_uvs_type0 = compute_type0_face_uvs_525_622(_gunzip_maybe(blob), meta, verts, faces)
                        except Exception as e_uv0:
                            face_uvs_type0 = None
                            debug_print(f"    UV type0 compute error: {e_uv0}", obj_id=obj_id, model_id=model_id)
                        try:
                            face_uvs_type1 = compute_type1_face_uvs_525_622(_gunzip_maybe(blob), meta, verts, faces)
                        except Exception as e_uv1:
                            face_uvs_type1 = None
                            debug_print(f"    UV type1 compute error: {e_uv1}", obj_id=obj_id, model_id=model_id)
                        try:
                            if face_uvs_type0 is not None or face_uvs_type1 is not None:
                                merged_uvs = []
                                for i in range(len(faces)):
                                    uv0 = face_uvs_type0[i] if (face_uvs_type0 and i < len(face_uvs_type0)) else None
                                    uv1 = face_uvs_type1[i] if (face_uvs_type1 and i < len(face_uvs_type1)) else None
                                    merged_uvs.append(uv0 if uv0 is not None else uv1)
                        except Exception as e_merge:
                            merged_uvs = None
                            debug_print(f"    UV merge error: {e_merge}", obj_id=obj_id, model_id=model_id)

                        filename = f"object_{obj_id}_type_{t}_model_{model_id}.gltf"
                        out_path = os.path.join(out_dir, filename)
                        if not os.path.exists(out_path):
                            write_gltf_positions_indices(
                                verts, faces, out_path,
                                face_colors=face_cols,
                                flip_y=True,
                                compute_normals=True,
                                node_translation=(tx, ty, tz), node_scale=(sx, sy, sz),
                                bake_rs_shading=False,
                                brightness_scale=0.85,
                                apply_rs_lighting=True,
                                face_uvs=merged_uvs,
                                textured_faces=face_tex,
                                hide_untextured=hide_untextured,
                                min_lightness_untextured=0.08
                            )
                        component_meshes.append({
                            "verts": verts,
                            "faces": faces,
                            "face_cols": face_cols,
                            "face_tex": face_tex,
                            "uvs": merged_uvs,
                        })
                        component_paths.append(out_path)
                        used_model_ids_local.append(model_id)
                    except Exception as e:
                        try:
                            tb = traceback.format_exc()
                        except Exception:
                            tb = str(e)
                        debug_print(f"  model {model_id} (type {t}) decode/export error: {e}\n{tb}",
                                    obj_id=obj_id, model_id=model_id)
                        continue

                if not component_meshes:
                    continue

                debug_print(f"  collected {len(component_meshes)} component meshes for object {obj_id} type {t}",
                            obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)

                entry["component_gltfs"] = component_paths
                entry["used_model_type"] = t
                entry["used_model_ids"] = used_model_ids_local

                if len(component_meshes) > 1:
                    debug_print(f"    attempting merged export with {len(component_meshes)} components",
                                obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)
                    combined_verts: list[tuple[int, int, int]] = []
                    combined_faces: list[tuple[int, int, int]] = []
                    combined_cols: list[int] = []
                    combined_tex: list[bool] = []
                    combined_uvs: list | None = None

                    for comp in component_meshes:
                        base_index = len(combined_verts)
                        comp_faces = comp["faces"]
                        combined_verts.extend(comp["verts"])
                        combined_faces.extend([(a + base_index, b + base_index, c + base_index) for (a, b, c) in comp_faces])
                        combined_cols.extend(comp["face_cols"])
                        combined_tex.extend(comp["face_tex"])

                        comp_uvs = comp["uvs"]
                        if combined_uvs is not None:
                            if comp_uvs is None:
                                combined_uvs.extend([None] * len(comp_faces))
                            else:
                                combined_uvs.extend(comp_uvs)
                        elif comp_uvs is not None:
                            combined_uvs = []
                            combined_uvs.extend([None] * (len(combined_faces) - len(comp_faces)))
                            combined_uvs.extend(comp_uvs)

                    merged_filename = f"object_{obj_id}_type_{t}_merged.gltf"
                    merged_path = os.path.join(out_dir, merged_filename)
                    try:
                        debug_print(f"    writing merged GLTF to {merged_path}",
                                    obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)
                        write_gltf_positions_indices(
                            combined_verts, combined_faces, merged_path,
                            face_colors=combined_cols,
                            flip_y=True,
                            compute_normals=True,
                            node_translation=(tx, ty, tz), node_scale=(sx, sy, sz),
                            bake_rs_shading=False,
                            brightness_scale=0.85,
                            apply_rs_lighting=True,
                            face_uvs=combined_uvs,
                            textured_faces=combined_tex,
                            hide_untextured=hide_untextured,
                            min_lightness_untextured=0.08
                        )
                        entry["merged_gltf"] = merged_path
                        debug_print(f"    merged export succeeded: {merged_path}",
                                    obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)
                    except Exception as merge_export_err:
                        debug_print(f"    merged export failed: {merge_export_err}",
                                    obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)
                    gltf_path = merged_path
                    entry["gltf"] = merged_path
                else:
                    debug_print("    only one component mesh -> skipping merged export",
                                obj_id=obj_id, model_id=_CURRENT_DEBUG_MODEL_ID)
                    gltf_path = gltf_path or component_paths[0]
                    entry["gltf"] = gltf_path

                break
        except Exception:
            pass

        entry["gltf"] = gltf_path if gltf_path else "no model"
        if not gltf_path:
            entry["note"] = "no suitable model exported; object may lack models or all failed to decode"
        results[key] = entry
        _OBJECT_CACHE[key] = copy.deepcopy(entry)
        cache_updated = True
    if cache_updated:
        try:
            os.makedirs(os.path.dirname(CACHE_PATH), exist_ok=True)
            with open(CACHE_PATH, 'wb') as _fh:
                pickle.dump(_OBJECT_CACHE, _fh, protocol=pickle.HIGHEST_PROTOCOL)
        except Exception as cache_err:
            debug_print(f'Failed to update object cache: {cache_err}')
    return results



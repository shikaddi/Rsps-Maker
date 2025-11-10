from .archive import build_archive_map, get_file_data, datReader, read_idx_file, try_decompression
import traceback
import os
import copy
import pickle
import shutil
from dataclasses import dataclass, field
import math
from pathlib import Path

try:
    from PIL import Image, ImageFilter, ImageChops  # type: ignore
except ImportError:  # pragma: no cover - optional dependency
    Image = None
    ImageFilter = None
    ImageChops = None


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
DEBUG_OBJECT_ID: int | None = 7376
DEBUG_MODEL_IDS: set[int] = {None}

TEXTURE_UV_PADDING_TEXELS: float = 0.5
TEXTURED_FACE_EXPANSION: float = 0.5
TEXTURED_FACE_WHITELIST: set[int] = {1276, 1281, 2409}
FALLBACK_UV_WHITELIST: set[int] = {845, 5788, 928, 929, 930, 934, 935, 936, 940, 941, 942, 2213, 2215}
INTENSITY_TEXTURE_THRESHOLD: int = 50  # texture ids above this act as intensity overlays

_CURRENT_DEBUG_OBJECT_ID: int | None = 1280
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


def build_minimap_icon_placeholder_mesh(
    *,
    tile_size: float = 128.0,
    cube_scale: float = 0.9,
    cube_height: float | None = None,
) -> dict[str, list]:
    """Return a simple grey cube slightly smaller than one tile for minimap icons."""
    half_extent = (tile_size * cube_scale) / 2.0
    height = cube_height if cube_height is not None else (tile_size * cube_scale)
    base_y = 0.0
    top_y = height

    verts = [
        (-half_extent, base_y, -half_extent),
        (half_extent, base_y, -half_extent),
        (half_extent, base_y, half_extent),
        (-half_extent, base_y, half_extent),
        (-half_extent, top_y, -half_extent),
        (half_extent, top_y, -half_extent),
        (half_extent, top_y, half_extent),
        (-half_extent, top_y, half_extent),
    ]

    faces = [
        (0, 2, 1),
        (0, 3, 2),
        (4, 5, 6),
        (4, 6, 7),
        (0, 5, 4),
        (0, 1, 5),
        (1, 6, 5),
        (1, 2, 6),
        (2, 7, 6),
        (2, 3, 7),
        (3, 4, 7),
        (3, 0, 4),
    ]

    face_count = len(faces)
    grey_colour = (0 << 10) | (0 << 7) | 72  # neutral grey in RS packed HSL
    face_cols = [grey_colour] * face_count

    vertex_skins = [-1] * len(verts)
    face_skins = [-1] * face_count

    return {
        "verts": verts,
        "faces": faces,
        "face_cols": face_cols,
        "face_tex": [False] * face_count,
        "face_render_modes": [0] * face_count,
        "face_texture_indices": [-1] * face_count,
        "face_uvs": [None] * face_count,
        "face_alpha": [0] * face_count,
        "vertex_skins": vertex_skins,
        "face_skins": face_skins,
    }


def _fallback_uv_for_face(
    vertices: list[tuple[float, float, float]],
    face: tuple[int, int, int],
) -> tuple[tuple[float, float], tuple[float, float], tuple[float, float]]:
    """
    Project a triangle onto its own plane to synthesize (u, v) coordinates.
    Acts as a last-resort when cache UV data is unavailable.
    """
    a, b, c = face
    p0 = vertices[a]
    p1 = vertices[b]
    p2 = vertices[c]

    def _vec_sub(p, q):
        return (p[0] - q[0], p[1] - q[1], p[2] - q[2])

    def _vec_dot(p, q):
        return p[0] * q[0] + p[1] * q[1] + p[2] * q[2]

    def _vec_norm(v):
        mag = math.sqrt(_vec_dot(v, v))
        return (0.0, 0.0, 0.0) if mag < 1e-8 else (v[0] / mag, v[1] / mag, v[2] / mag)

    u_vec = _vec_sub(p1, p0)
    v_vec = _vec_sub(p2, p0)
    u_axis = _vec_norm(u_vec)

    # Remove any component parallel to u_axis to build a secondary axis.
    dot_uv = _vec_dot(v_vec, u_axis)
    v_axis = _vec_norm((
        v_vec[0] - dot_uv * u_axis[0],
        v_vec[1] - dot_uv * u_axis[1],
        v_vec[2] - dot_uv * u_axis[2],
    ))

    def _project(point):
        delta = _vec_sub(point, p0)
        u = _vec_dot(delta, u_axis)
        v = _vec_dot(delta, v_axis)
        return (u, v)

    uv0 = _project(p0)
    uv1 = _project(p1)
    uv2 = _project(p2)

    us = [uv0[0], uv1[0], uv2[0]]
    vs = [uv0[1], uv1[1], uv2[1]]
    min_u, max_u = min(us), max(us)
    min_v, max_v = min(vs), max(vs)
    span_u = max_u - min_u
    span_v = max_v - min_v

    # pick the shorter edge as our base; fall back to 1.0 for degenerate faces
    if span_u > 1e-8 and span_v > 1e-8:
        base_span = min(span_u, span_v)
    elif span_u > 1e-8:
        base_span = span_u
    elif span_v > 1e-8:
        base_span = span_v
    else:
        base_span = 1.0

    def _normalise(uv):
        return ((uv[0] - min_u) / base_span, (uv[1] - min_v) / base_span)

    uv0_n = _normalise(uv0)
    uv1_n = _normalise(uv1)
    uv2_n = _normalise(uv2)

    repeat_u = max(1.0, span_u / base_span)
    repeat_v = max(1.0, span_v / base_span)
    tiling_scale = 4  # finer detail without leaving the textured area

    return (
        (uv0_n[0] * repeat_u * tiling_scale, uv0_n[1] * repeat_v * tiling_scale),
        (uv1_n[0] * repeat_u * tiling_scale, uv1_n[1] * repeat_v * tiling_scale),
        (uv2_n[0] * repeat_u * tiling_scale, uv2_n[1] * repeat_v * tiling_scale),
    )
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


# ---------- Rasterizer palette reconstruction (317-era shading) ----------

_MODEL_PALETTE_CACHE: dict[float, list[int]] = {}
_MODEL_LIGHTING_FACTORS: list[int] | None = None

def _apply_brightness(color: int, gamma: float) -> int:
    """Match Rasterizer.method373: raise RGB components to given gamma/brightness."""
    if gamma <= 0:
        gamma = 0.0001
    r = ((color >> 16) & 0xFF) / 256.0
    g = ((color >> 8) & 0xFF) / 256.0
    b = (color & 0xFF) / 256.0
    r = math.pow(r, gamma)
    g = math.pow(g, gamma)
    b = math.pow(b, gamma)
    ri = int(r * 256.0)
    gi = int(g * 256.0)
    bi = int(b * 256.0)
    # Clamp to 0..255 to mirror unsigned byte storage
    ri = max(0, min(255, ri))
    gi = max(0, min(255, gi))
    bi = max(0, min(255, bi))
    return (ri << 16) | (gi << 8) | bi


def build_model_palette(brightness: float = 0.8) -> list[int]:
    """
    Reconstruct RuneScape's 0x10000-entry model palette as generated by
    Rasterizer.method372/373 in the legacy Java client.
    `brightness` corresponds to the gamma value passed to method372.
    Returns a fresh list of 65536 RGB integers.
    """
    key = round(brightness, 6)
    cached = _MODEL_PALETTE_CACHE.get(key)
    if cached is not None:
        return list(cached)

    palette: list[int] = [0] * (512 * 128)
    idx = 0
    for k in range(512):
        hue = k / 8 / 64.0 + 0.0078125
        saturation = (k & 7) / 8.0 + 0.0625
        for level in range(128):
            lightness = level / 128.0
            r = g = b = lightness
            if saturation != 0.0:
                if lightness < 0.5:
                    temp2 = lightness * (1.0 + saturation)
                else:
                    temp2 = lightness + saturation - lightness * saturation
                temp1 = 2.0 * lightness - temp2
                hue_r = hue + 1.0 / 3.0
                if hue_r > 1.0:
                    hue_r -= 1.0
                hue_g = hue
                hue_b = hue - 1.0 / 3.0
                if hue_b < 0.0:
                    hue_b += 1.0

                def _convert(temp):
                    if 6.0 * temp < 1.0:
                        return temp1 + (temp2 - temp1) * 6.0 * temp
                    if 2.0 * temp < 1.0:
                        return temp2
                    if 3.0 * temp < 2.0:
                        return temp1 + (temp2 - temp1) * (2.0 / 3.0 - temp) * 6.0
                    return temp1

                r = _convert(hue_r)
                g = _convert(hue_g)
                b = _convert(hue_b)

            red = int(r * 256.0)
            green = int(g * 256.0)
            blue = int(b * 256.0)
            red = max(0, min(255, red))
            green = max(0, min(255, green))
            blue = max(0, min(255, blue))
            color = (red << 16) | (green << 8) | blue
            color = _apply_brightness(color, brightness)
            if color == 0:
                color = 1
            palette[idx] = color
            idx += 1

    _MODEL_PALETTE_CACHE[key] = palette
    return list(palette)


def build_model_lighting_factors() -> list[int]:
    """
    Reproduce Rasterizer.anIntArray1469: per-angle lighting divisors used by the
    legacy client (0x10000 / j for indices 1..2047).
    """
    global _MODEL_LIGHTING_FACTORS
    if _MODEL_LIGHTING_FACTORS is not None:
        return list(_MODEL_LIGHTING_FACTORS)

    factors = [0] * 2048
    for j in range(1, 2048):
        factors[j] = 0x10000 // j
    _MODEL_LIGHTING_FACTORS = factors
    return list(factors)
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
    offs["face_skins"] = (anInt383 if anInt383>=0 else None, f if j1==1 else 0)

    anInt380 = l2
    if k == 1:                            l2 += f
    else:                                 anInt380 = -1
    offs["face_texture_codes"] = (anInt380 if anInt380>=0 else None, f if k==1 else 0)
    offs["face_types2"] = offs["face_texture_codes"]

    anInt376 = l2
    if k1 == 1:                           l2 += v
    else:                                 anInt376 = -1
    offs["vert_skins"] = (anInt376 if anInt376>=0 else None, v if k1==1 else 0)

    anInt382 = l2
    if i1 == 1:                           l2 += f
    else:                                 anInt382 = -1
    offs["alpha"] = (anInt382 if anInt382>=0 else None, f if i1==1 else 0)
    offs["face_alpha"] = offs["alpha"]

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

def _format_model_id_map(model_map: dict[int, list[int]]) -> str:
    if not model_map:
        return "{}"
    parts = []
    for t in sorted(model_map.keys()):
        parts.append(f"{t}:{model_map[t]}")
    return "{" + ", ".join(parts) + "}"

def _print_model_ids_from_sources(obj_id: int) -> None:
    """Emit a comparison of model id lists across cache sources for diagnostics."""
    reports: list[str] = []

    if obj_id in idx317_map:
        start, length = idx317_map[obj_id]
        raw = loc_dat[start:start+length]
        obj_317 = parse_object_def(raw, obj_id)
        reports.append(f"317={_format_model_id_map(obj_317.model_ids_by_t)}")
    else:
        reports.append("317=<missing>")

    if obj_id in idx667_map:
        start, length = idx667_map[obj_id]
        raw = loc_dat_667[start:start+length]
        obj_667 = parse_object_def(raw, obj_id)
        reports.append(f"667={_format_model_id_map(obj_667.model_ids_by_t)}")
    else:
        reports.append("667=<missing>")


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

def decode_geom_317(
    buf: bytes, meta
) -> tuple[
    list[tuple[int, int, int]],
    list[tuple[int, int, int]],
    list[int],
    list[bool],
    list[int],
    list[int],
    list[int],
]:
    """
    Decode classic 317-format model geometry.
    Returns vertices, faces, face colours (u16), and additional per-face metadata
    mirroring the Java client: textured flags, render modes, texture indices, and
    alpha/intensity values (0..255).
    """
    _dprint(
        "DECODE317 start:",
        "v=",
        getattr(meta, "vcount", None),
        "f=",
        getattr(meta, "fcount", None),
        "t=",
        getattr(meta, "tcount", None),
    )

    for key in ("v_flags", "vert_x", "vert_y", "vert_z", "tri_types", "tri_cmds", "colours"):
        if key not in meta.offs:
            raise ValueError(f"317 decode missing section {key}")

    v = meta.vcount
    f = meta.fcount

    flags = _slice(buf, meta.offs["v_flags"])
    x_off, x_len = meta.offs["vert_x"]
    y_off, y_len = meta.offs["vert_y"]
    z_off, z_len = meta.offs["vert_z"]

    def decode_vertices(xo, xl, yo, yl, zo, zl):
        bx = BR2(buf, xo, xl)
        by = BR2(buf, yo, yl)
        bz = BR2(buf, zo, zl)
        cx = cy = cz = 0
        out: list[tuple[int, int, int]] = []
        try:
            needX = sum(1 for i in range(v) if (flags[i] & 1))
            needY = sum(1 for i in range(v) if (flags[i] & 2))
            needZ = sum(1 for i in range(v) if (flags[i] & 4))
            _dprint(f"  317 needX/Y/Z={needX}/{needY}/{needZ} lenX/Y/Z={xl}/{yl}/{zl}")
        except Exception:
            pass
        for idx in range(v):
            fl = flags[idx] if idx < len(flags) else 0
            dx = bx.smart_delta() if (fl & 1) else 0
            dy = by.smart_delta() if (fl & 2) else 0
            dz = bz.smart_delta() if (fl & 4) else 0
            cx += dx
            cy += dy
            cz += dz
            out.append((cx, cy, cz))
        return out

    verts = decode_vertices(x_off, x_len, y_off, y_len, z_off, z_len)

    def _read_skin_section(entry: tuple[int | None, int] | None, count: int) -> list[int]:
        if not entry or entry[0] is None or entry[1] <= 0 or count <= 0:
            return []
        off, length = entry
        if off is None or length <= 0:
            return []
        if length >= count * 2:
            reader = BR2(buf, off, length)
            out: list[int] = []
            for _ in range(count):
                try:
                    val = reader.u16()
                except EOFError:
                    break
                out.append(val if val != 0xFFFF else -1)
            return out
        raw = _slice(buf, entry)
        return [(b if b != 0xFF else -1) for b in raw[:count]]

    vertex_skins = _read_skin_section(meta.offs.get("vert_skins"), v)
    face_skins = _read_skin_section(meta.offs.get("face_skins"), f)
    setattr(meta, "vertex_skins", vertex_skins)
    setattr(meta, "face_skins", face_skins)
    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 7376:
        print(
            f"[skin-debug-317] object 7376 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
            f"vertex_skins={len(vertex_skins)} face_skins={len(face_skins)}"
        )

    off_modes, len_modes = meta.offs["tri_types"]
    modes = BR2(buf, off_modes, len_modes)
    off_cmd, len_cmd = meta.offs["tri_cmds"]
    cmd = BR2(buf, off_cmd, len_cmd)

    cols_br = BR2(buf, meta.offs["colours"][0], meta.offs["colours"][1])

    face_codes: list[int] | None = None
    ft_entry = meta.offs.get("face_texture_codes")
    if ft_entry and ft_entry[0] is not None and ft_entry[1]:
        raw = _slice(buf, ft_entry)
        face_codes = [b for b in raw[:f]]
        _dprint("  317 face_texture_codes sample=", face_codes[:8])

    faces: list[tuple[int, int, int]] = []
    face_colours: list[int] = []
    face_textured: list[bool] = []
    face_render_modes: list[int] = []
    face_texture_indices: list[int] = []
    face_alpha: list[int] = []

    alpha_section = meta.offs.get("alpha") or meta.offs.get("face_alpha")
    alpha_reader: BR2 | None = None
    if alpha_section and alpha_section[0] is not None and alpha_section[1]:
        alpha_reader = BR2(buf, alpha_section[0], alpha_section[1])

    k12 = i13 = k13 = l13 = 0
    for idx in range(f):
        mode = modes.u8()
        if mode == 0:
            pass
        elif mode == 1:
            k12 = cmd.smart_delta() + l13
            l13 = k12
            i13 = cmd.smart_delta() + l13
            l13 = i13
            k13 = cmd.smart_delta() + l13
            l13 = k13
        elif mode == 2:
            i13 = k13
            k13 = cmd.smart_delta() + l13
            l13 = k13
        elif mode == 3:
            k12 = k13
            k13 = cmd.smart_delta() + l13
            l13 = k13
        elif mode == 4:
            tmp = k12
            k12 = i13
            i13 = tmp
            k13 = cmd.smart_delta() + l13
            l13 = k13
        else:
            raise ValueError(f"unknown tri mode {mode} at face {idx} (317)")

        if k12 < 0 or i13 < 0 or k13 < 0 or k12 >= v or i13 >= v or k13 >= v:
            raise ValueError(
                f"317 face {idx} out of range: ({k12},{i13},{k13}) with vcount {v}"
            )
        faces.append((k12, i13, k13))
        face_colours.append(cols_br.u16())

        render_mode = 0
        tex_idx = -1
        if face_codes is not None and idx < len(face_codes):
            code = face_codes[idx]
            render_mode = code & 3
            tex_idx = code >> 2
        face_render_modes.append(render_mode)
        face_texture_indices.append(tex_idx if render_mode in (2, 3) else -1)
        face_textured.append(render_mode in (2, 3))
        if alpha_reader is not None:
            try:
                aval = alpha_reader.i8()
            except EOFError:
                aval = 0
            if aval < 0:
                aval += 256
            face_alpha.append(aval)
        else:
            face_alpha.append(0)

    setattr(meta, "face_render_modes", face_render_modes)
    setattr(meta, "face_texture_indices", face_texture_indices)
    setattr(meta, "face_alpha", face_alpha)
    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
        print(
            f"[tex-indices-317] object {globals().get('_CURRENT_DEBUG_OBJECT_ID')} model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
            f"sample={face_texture_indices[:32]} unique={sorted(set(face_texture_indices))[:16]}"
        )

    texture_payload = extract_texture_triangle_data(buf, meta)
    if texture_payload is not None:
        setattr(meta, "texture_data", texture_payload)

    try:
        face_uvs_type0 = compute_face_uvs_317(meta, verts, faces)
        setattr(meta, "face_uvs_type0", face_uvs_type0)
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            sample_uvs = [u for u in face_uvs_type0 if u is not None][:3]
            print(
                f"[uv-preview-317] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"uv_faces={sum(1 for u in face_uvs_type0 if u is not None)} sample={sample_uvs}"
            )
    except Exception as e_uv:
        setattr(meta, "face_uvs_type0", None)
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            print(f"[uv-preview-317-error] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} error={e_uv}")

    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
        try:
            tex_triangles = []
            if texture_payload:
                tex_triangles = texture_payload.get("type0_triangles", []) or []

            def _solve_uv(A, B, C, P):
                ax, ay, az = A; bx, by, bz = B; cx, cy, cz = C; px, py, pz = P
                v0 = (bx - ax, by - ay, bz - az)
                v1 = (cx - ax, cy - ay, cz - az)
                v2 = (px - ax, py - ay, pz - az)
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

            preview: list[tuple[int, int, int, tuple[float, float] | None]] = []
            for idx in range(min(8, len(faces))):
                tex_idx = face_texture_indices[idx] if idx < len(face_texture_indices) else -1
                render_mode = face_render_modes[idx] if idx < len(face_render_modes) else 0
                uv = None
                if (
                    tex_idx is not None
                    and tex_idx >= 0
                    and render_mode in (2, 3)
                    and tex_idx < len(tex_triangles)
                ):
                    tri = tex_triangles[tex_idx]
                    if (
                        0 <= tri[0] < len(verts)
                        and 0 <= tri[1] < len(verts)
                        and 0 <= tri[2] < len(verts)
                    ):
                        A = verts[tri[0]]
                        B = verts[tri[1]]
                        C = verts[tri[2]]
                        face = faces[idx]
                        uv = _solve_uv(A, B, C, verts[face[0]])
                preview.append((idx, render_mode, tex_idx, uv))

            print(
                f"[decode317] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"faces={len(faces)} textured={sum(1 for flag in face_textured if flag)} "
                f"sample={preview}"
            )
        except Exception as e:
            print(
                f"[decode317-error] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"error reconstructing UV preview: {e}"
            )

    if globals().get("_CURRENT_DEBUG_OBJECT_ID") is not None:
        debug_print(
            f"[317 summary] faces={len(faces)} cols={len(face_colours)} modes={len(face_render_modes)}",
            obj_id=globals().get("_CURRENT_DEBUG_OBJECT_ID"),
            model_id=globals().get("_CURRENT_DEBUG_MODEL_ID"),
        )
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            unique_cols = sorted(set(face_colours))
            print(f"[317 face_cols] count={len(face_colours)} unique={len(unique_cols)} sample={unique_cols[:16]}")
            unique_alpha = sorted(set(face_alpha))
            print(f"[317 face_alpha] count={len(face_alpha)} unique={len(unique_alpha)} sample={unique_alpha[:16]} alpha_sample={face_alpha[:16]}")

    return (
        verts,
        faces,
        face_colours,
        face_textured,
        face_render_modes,
        face_texture_indices,
        face_alpha,
    )


def decode_geom_525_622(
    buf: bytes, meta
) -> tuple[
    list[tuple[int, int, int]],
    list[tuple[int, int, int]],
    list[int],
    list[bool],
    list[int],
    list[int],
    list[int],
]:
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

    def _read_skin_section(entry: tuple[int | None, int] | None, count: int) -> list[int]:
        if not entry or entry[0] is None or entry[1] <= 0 or count <= 0:
            return []
        off, length = entry
        if off is None or length <= 0:
            return []
        if length >= count * 2:
            reader = BR2(buf, off, length)
            out: list[int] = []
            for _ in range(count):
                try:
                    val = reader.u16()
                except EOFError:
                    break
                out.append(val if val != 0xFFFF else -1)
            return out
        raw = _slice(buf, entry)
        return [(b if b != 0xFF else -1) for b in raw[:count]]

    vertex_skins = _read_skin_section(meta.offs.get("vert_skins"), v)
    face_skins = _read_skin_section(meta.offs.get("face_skins"), f)
    setattr(meta, "vertex_skins", vertex_skins)
    setattr(meta, "face_skins", face_skins)
    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 7376:
        print(
            f"[skin-debug-{getattr(meta, 'layout', '525')}] object 7376 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
            f"vertex_skins={len(vertex_skins)} face_skins={len(face_skins)}"
        )

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
        face_modes_local: list[int] = []
        face_tex_ids_local: list[int] = []
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
                if tval == 0 or tval == 65535:
                    face_textured.append(False)
                    face_modes_local.append(0)
                    face_tex_ids_local.append(-1)
                else:
                    face_textured.append(True)
                    face_modes_local.append(2)
                    face_tex_ids_local.append(tval - 1)
            else:
                face_textured.append(False)
                face_modes_local.append(0)
                face_tex_ids_local.append(-1)
        # sanity (redundant with early check, but keep summary too)
        if faces:
            flat = [m for tri in faces for m in tri]
            max_idx = max(flat); min_idx = min(flat)
            if max_idx >= v:
                raise ValueError(f"face references vertex {max_idx} >= vcount {v}")
            if min_idx < 0:
                raise ValueError(f"face references negative vertex index {min_idx}")
        return faces, face_colours, face_textured, face_modes_local, face_tex_ids_local

    # Try with primary command stream; if sanity fails and alternate exists, retry
    try:
        _dprint(f"  primary cmd stream: {primary_cmd_key}")
        faces, face_colours, face_textured, face_render_modes, face_texture_indices = build_faces(primary_cmd_key)
    except ValueError as e:
        _dprint("  primary failed:", e)
        if alt_cmd_key is not None and ('vcount' in str(e) or 'negative vertex index' in str(e) or 'unknown tri mode' in str(e) or 'out-of-range index' in str(e)):
            _dprint(f"  retrying with alternate cmd stream: {alt_cmd_key}")
            faces, face_colours, face_textured, face_render_modes, face_texture_indices = build_faces(alt_cmd_key)
        else:
            raise

    texture_payload = extract_texture_triangle_data(buf, meta)
    if texture_payload is not None:
        setattr(meta, "texture_data", texture_payload)
        face_render_modes_payload = texture_payload.get("face_render_modes")
        if face_render_modes_payload:
            face_render_modes = face_render_modes_payload
        face_texture_indices_payload = texture_payload.get("face_texture_indices")
        if face_texture_indices_payload:
            face_texture_indices = face_texture_indices_payload

    setattr(meta, "face_render_modes", face_render_modes)
    setattr(meta, "face_texture_indices", face_texture_indices)
    alpha_section = meta.offs.get("alpha") or meta.offs.get("face_alpha")
    face_alpha: list[int] = []
    if alpha_section and alpha_section[0] is not None and alpha_section[1]:
        alpha_reader = BR2(buf, alpha_section[0], alpha_section[1])
        for _ in range(len(faces)):
            try:
                aval = alpha_reader.i8()
            except EOFError:
                aval = 0
            if aval < 0:
                aval += 256
            face_alpha.append(aval)
    else:
        face_alpha = [0] * len(faces)
    setattr(meta, "face_alpha", face_alpha)

    face_uvs_type0 = None
    try:
        face_uvs_type0 = compute_type0_face_uvs_525_622(buf, meta, verts, faces)
        setattr(meta, "face_uvs_type0", face_uvs_type0)
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            sample_uvs = [u for u in face_uvs_type0 if u is not None][:3]
            print(
                f"[uv-preview-525] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"uv_faces={sum(1 for u in face_uvs_type0 if u is not None)} sample={sample_uvs}"
            )
    except Exception as e_uv:
        setattr(meta, "face_uvs_type0", None)
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            print(f"[uv-preview-525-error] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} error={e_uv}")

    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
        try:
            uv0 = compute_type0_face_uvs_525_622(buf, meta, verts, faces)
            uv1 = None
            try:
                uv1 = compute_type1_face_uvs_525_622(buf, meta, verts, faces)
            except Exception:
                uv1 = None
            non0 = sum(1 for item in uv0 if item)
            non1 = sum(1 for item in (uv1 or []) if item)
            sample0 = next((item for item in uv0 if item), None)
            sample1 = next((item for item in (uv1 or []) if item), None)
            print(
                f"[decode525] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"layout={getattr(meta, 'layout', None)} uv0={non0} uv1={non1} "
                f"sample0={sample0} sample1={sample1}"
            )
        except Exception as e_dbg:
            print(
                f"[decode525-error] object 1280 model {globals().get('_CURRENT_DEBUG_MODEL_ID')} "
                f"UV preview failed: {e_dbg}"
            )
        unique_alpha = sorted(set(face_alpha))
        print(f"[525 face_alpha] count={len(face_alpha)} unique={len(unique_alpha)} sample={unique_alpha[:16]} alpha_sample={face_alpha[:16]}")

    return (
        verts,
        faces,
        face_colours,
        face_textured,
        face_render_modes,
        face_texture_indices,
        face_alpha,
    )

# -------------- Minimal 525/622 Type-0 UVs (tri -> tri mapping) --------------

import struct as _struct

def _solve_uv_triangle(A: tuple[int, int, int], B: tuple[int, int, int], C: tuple[int, int, int], P: tuple[int, int, int]) -> tuple[float, float]:
    ax, ay, az = A
    bx, by, bz = B
    cx, cy, cz = C
    px, py, pz = P
    v0 = (bx - ax, by - ay, bz - az)
    v1 = (cx - ax, cy - ay, cz - az)
    v2 = (px - ax, py - ay, pz - az)
    d00 = v0[0] * v0[0] + v0[1] * v0[1] + v0[2] * v0[2]
    d01 = v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2]
    d11 = v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]
    d20 = v2[0] * v0[0] + v2[1] * v0[1] + v2[2] * v0[2]
    d21 = v2[0] * v1[0] + v2[1] * v1[1] + v2[2] * v1[2]
    denom = d00 * d11 - d01 * d01
    if abs(denom) < 1e-8:
        return (0.0, 0.0)
    u = (d20 * d11 - d21 * d01) / denom
    v = (d21 * d00 - d20 * d01) / denom
    return (float(u), float(v))


def compute_type0_face_uvs_525_622(buf: bytes, meta, verts, faces) -> list[tuple[tuple[float,float], tuple[float,float], tuple[float,float]] | None]:
    """
    For each face, if it references a textured triangle `t` with O[t]==0, compute UVs by
    expressing each face vertex P in the basis (A, B, C) of that textured triangle:
      P = A + u*(B-A) + v*(C-A)
    Returns a list of length fcount with either a ((u,v),(u,v),(u,v)) triplet or None.
    """
    f = meta.fcount; tcount = meta.tcount
    # If there is no tex_idx section, bail
    D: list[int] | None = None
    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
        print("obj1280 meta: ", meta)
    if "tex_idx" in meta.offs and meta.offs["tex_idx"][1] != 0 and tcount > 0:
        off_tex = meta.offs["tex_idx"][0]
        raw_vals = [_struct.unpack_from(">H", buf, off_tex + 2*i)[0] for i in range(f)]
        D = []
        for v in raw_vals:
            if v == 0 or v == 65535:
                D.append(-1)
            else:
                d = v - 1
                D.append(d if 0 <= d < tcount else -1)
        
    elif hasattr(meta, "face_texture_indices"):
        potential = list(getattr(meta, "face_texture_indices"))
        if potential and tcount > 0:
            D = [idx if (idx is not None and 0 <= idx < tcount) else -1 for idx in potential]
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            print(f"[uv-debug] potential len={len(potential)} sample={potential[:16]}")
    else:
        if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
            print("[uv-debug] no tex_idx and no face_texture_indices")

    if globals().get("_CURRENT_DEBUG_OBJECT_ID") == 1280:
        if D is None:
            print(f"[uv-debug] D=None tcount={tcount}")
        else:
            print(f"[uv-debug] D sample={D} tcount={tcount}")
    if D is None:
        return [None]*f
    if len(D) < f:
        D = D + [-1] * (f - len(D))

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
        uv0 = _solve_uv_triangle(A,B,C,P0)
        uv1 = _solve_uv_triangle(A,B,C,P1)
        uv2 = _solve_uv_triangle(A,B,C,P2)
        out[i] = (uv0, uv1, uv2)
    return out


def compute_face_uvs_317(meta, verts, faces) -> list[tuple[tuple[float, float], tuple[float, float], tuple[float, float]] | None]:
    """
    Compute UVs for textured faces in 317-layout models using the texture triangle
    payload captured in meta.texture_data. Currently uses simple barycentric mapping
    (same as type-0) for all texture types.
    """
    fcount = len(faces)
    tex_info = getattr(meta, "texture_data", None)
    if not tex_info:
        return [None] * fcount

    triangles = tex_info.get("triangles")
    if not triangles:
        return [None] * fcount

    tex_types = tex_info.get("types") or []
    face_tex_indices = getattr(meta, "face_texture_indices", None)
    face_render_modes = getattr(meta, "face_render_modes", None)
    if face_tex_indices is None or face_render_modes is None:
        return [None] * fcount

    result: list[tuple[tuple[float, float], tuple[float, float], tuple[float, float]] | None] = [None] * fcount
    for idx in range(fcount):
        if idx >= len(face_render_modes):
            break
        mode = face_render_modes[idx]
        if mode not in (2, 3):
            continue
        tex_idx = face_tex_indices[idx] if idx < len(face_tex_indices) else -1
        if tex_idx is None or tex_idx < 0 or tex_idx >= len(triangles):
            continue
        tri = triangles[tex_idx]
        if tri is None:
            continue
        a0, b0, c0 = tri
        if not (0 <= a0 < len(verts) and 0 <= b0 < len(verts) and 0 <= c0 < len(verts)):
            continue
        tex_type = tex_types[tex_idx] if tex_idx < len(tex_types) else 0

        if tex_type == 0:
            A = verts[a0]
            B = verts[b0]
            C = verts[c0]
            fa, fb, fc = faces[idx]
            uv0 = _solve_uv_triangle(A, B, C, verts[fa])
            uv1 = _solve_uv_triangle(A, B, C, verts[fb])
            uv2 = _solve_uv_triangle(A, B, C, verts[fc])
            result[idx] = (uv0, uv1, uv2)
        else:
            # Temporary fallback: stretch the entire texture across the face so we can
            # visually confirm the texture assignment even before the full transform is ported.
            result[idx] = ((0.0, 0.0), (1.0, 0.0), (0.0, 1.0))
    return result

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


def extract_texture_triangle_data(buf: bytes, meta) -> dict | None:
    """
    Decode texture triangle payloads (type-0 and type-1) plus auxiliary data required
    for textured faces. Mirrors the logic in the legacy Java client so later stages
    can reconstruct UVs and texture material identifiers.
    """
    tcount = getattr(meta, "tcount", 0) or 0
    if tcount <= 0:
        return None

    offs = getattr(meta, "offs", {}) or {}
    layout = getattr(meta, "layout", None)

    def _signed_byte(b: int) -> int:
        return b - 256 if b > 127 else b

    # Texture render types O[] live at the start of 525/622 buffers. Classic 317
    # models omit this table (all texture tris are type-0).
    if layout in ("525", "622"):
        O = [_signed_byte(buf[i]) for i in range(min(tcount, len(buf)))]
        if len(O) < tcount:
            O.extend([0] * (tcount - len(O)))
    else:
        O = [0] * tcount

    def _make_stream(section: str) -> 'BR2 | None':
        off, ln = offs.get(section, (None, 0))
        if off is None or ln <= 0:
            return None
        return BR2(buf, off, ln)

    def _safe_u16(br: 'BR2 | None') -> int | None:
        if br is None or br.p + 1 >= br.end:
            return None
        try:
            return br.u16()
        except EOFError:
            return None

    def _safe_i8(br: 'BR2 | None') -> int | None:
        if br is None or br.p >= br.end:
            return None
        try:
            return br.i8()
        except EOFError:
            return None

    def _read_tri(br: 'BR2 | None') -> tuple[int, int, int] | None:
        if br is None:
            return None
        if br.p + 5 >= br.end:
            return None
        try:
            return (br.u16(), br.u16(), br.u16())
        except EOFError:
            return None

    stream_t0 = _make_stream("tex_type0")
    stream_t1a = _make_stream("tex_type1A")
    stream_t1b = _make_stream("tex_type1B")
    stream_t1c = _make_stream("tex_type1C")
    stream_t1d = _make_stream("tex_type1D")
    stream_t1e = _make_stream("tex_type1E")

    triangles: list[tuple[int, int, int] | None] = [None] * tcount
    type0_tris: list[tuple[int, int, int]] = []
    type1a_tris: list[tuple[int, int, int]] = []
    type1_params: list[dict[str, int | None] | None] = [None] * tcount

    for idx in range(tcount):
        typ = O[idx] if idx < len(O) else 0
        if layout not in ("525", "622"):
            typ = 0

        if typ == 0:
            tri = _read_tri(stream_t0)
            triangles[idx] = tri
            if tri is not None:
                type0_tris.append(tri)
            continue

        tri = _read_tri(stream_t1a)
        triangles[idx] = tri
        if tri is not None:
            type1a_tris.append(tri)

        params: dict[str, int | None] = {
            "kb": _safe_u16(stream_t1b),
            "n": _safe_u16(stream_t1b),
            "y": _safe_u16(stream_t1b),
            "gb": _safe_i8(stream_t1c),
            "lb": _safe_i8(stream_t1d),
            "f": _safe_i8(stream_t1e),
        }
        if typ == 2:
            params["cb"] = _safe_i8(stream_t1e)
            params["j"] = _safe_i8(stream_t1e)
        type1_params[idx] = params

    # Preserve raw payloads for diagnostics
    raw_sections: dict[str, bytes] = {}
    for key in ("tex_type1B", "tex_type1C", "tex_type1D", "tex_type1E"):
        off, ln = offs.get(key, (None, 0))
        if off is None or ln <= 0:
            raw_sections[key] = b""
        else:
            raw_sections[key] = bytes(memoryview(buf)[off:off + ln])

    data: dict[str, object] = {
        "types": O[:tcount],
        "triangles": triangles,
        "type0_triangles": type0_tris,
        "type1A_triangles": type1a_tris,
        "type1_params": type1_params,
        "type1B_raw": raw_sections.get("tex_type1B", b""),
        "type1C_raw": raw_sections.get("tex_type1C", b""),
        "type1D_raw": raw_sections.get("tex_type1D", b""),
        "type1E_raw": raw_sections.get("tex_type1E", b""),
    }

    # Per-face texture references (raw 16-bit values prior to adjustments)
    face_tex_vals: list[int] = []
    face_modes: list[int] = []
    face_tex_indices: list[int] = []
    off_tex, len_tex = offs.get("tex_idx", (None, 0))
    if off_tex is not None and len_tex >= 2:
        face_count = getattr(meta, "fcount", 0) or 0
        limit = min(face_count, len_tex // 2)
        for i in range(limit):
            raw = _struct.unpack_from(">H", buf, off_tex + 2 * i)[0]
            face_tex_vals.append(raw)
            if raw == 0 or raw == 65535:
                face_modes.append(0)
                face_tex_indices.append(-1)
            else:
                face_modes.append(2)
                face_tex_indices.append(raw - 1)

    data["face_texture_values"] = face_tex_vals
    data["face_render_modes"] = face_modes
    data["face_texture_indices"] = face_tex_indices

    # Optional X-stream per textured face (622/525 layouts)
    x_values: list[int] = []
    off_x, len_x = offs.get("x_stream", (None, 0))
    if face_tex_vals and off_x is not None and len_x > 0:
        br_x = BR2(buf, off_x, len_x)
        for raw in face_tex_vals:
            if raw == 0 or raw == 65535:
                x_values.append(-1)
                continue
            try:
                val = br_x.u8() - 1
            except EOFError:
                val = -1
            x_values.append(val)
    data["x_values"] = x_values

    return data

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

def write_gltf_with_textures(
    verts,
    faces,
    out_path: str,
    *,
    face_colors: list[int],
    face_texture_slots: list[int] | None = None,
    face_uvs: list[tuple[tuple[float, float], tuple[float, float], tuple[float, float]] | None],
    face_render_modes: list[int],
    face_texture_indices: list[int],
    flip_y: bool = True,
    double_sided: bool = False,
    compute_normals: bool = True,
    node_translation: tuple[float, float, float] | None = None,
    node_scale: tuple[float, float, float] | None = None,
    apply_rs_lighting: bool = True,
    rs_ambient: int = 64,
    rs_j: int = 768,
    brightness_scale: float = 0.85,
    light_dir: tuple[float, float, float] = (-50.0, -10.0, -50.0),
    face_flags: list[int] | None = None,
    min_lightness_untextured: float | None = 0.08,
    hide_untextured: bool = False,
    textured_faces: list[bool] | None = None,
    object_id: int | None = None,
    original_vertex_count: int | None = None,
    vertex_mapping_info: dict | None = None,
    vertex_skins: list[int] | None = None,
    face_skins: list[int] | None = None,
) -> str:
    """
    Experimental GLTF writer that emits separate primitives for vertex-coloured and textured faces.
    Textured primitives reference external textures residing under static/textures.
    """
    import base64
    import struct

    if face_colors is None:
        raise ValueError("face_colors required for textured export")

    face_count = len(faces)
    face_render_modes = face_render_modes or [0] * face_count
    face_texture_indices = face_texture_indices or [-1] * face_count
    textured_faces = textured_faces or [mode in (2, 3) for mode in face_render_modes]
    texture_slots = face_texture_slots or face_colors

    # Local copies so we can mutate safely
    verts_local = list(verts)
    faces_local = list(faces)
    face_uvs_local = list(face_uvs) if face_uvs is not None else [None] * face_count

    if flip_y:
        verts_local = [(x, -y, z) for (x, y, z) in verts_local]
        faces_local = [(a, c, b) for (a, b, c) in faces_local]
        if face_uvs_local:
            face_uvs_local = [None if uv is None else (uv[0], uv[2], uv[1]) for uv in face_uvs_local]

    vertex_index_mapping = list(range(len(verts_local)))

    # Compute base normals if needed (mirrors original writer)
    base_normals = None
    if compute_normals or apply_rs_lighting:
        nx = [0.0] * len(verts_local)
        ny = [0.0] * len(verts_local)
        nz = [0.0] * len(verts_local)
        for (i0, i1, i2) in faces_local:
            x0, y0, z0 = verts_local[i0]
            x1, y1, z1 = verts_local[i1]
            x2, y2, z2 = verts_local[i2]
            ux, uy, uz = x1 - x0, y1 - y0, z1 - z0
            vx, vy, vz = x2 - x0, y2 - y0, z2 - z0
            fnx = uy * vz - uz * vy
            fny = uz * vx - ux * vz
            fnz = ux * vy - uy * vx
            nx[i0] += fnx; ny[i0] += fny; nz[i0] += fnz
            nx[i1] += fnx; ny[i1] += fny; nz[i1] += fnz
            nx[i2] += fnx; ny[i2] += fny; nz[i2] += fnz
        base_normals = []
        for idx in range(len(verts_local)):
            x, y, z = nx[idx], ny[idx], nz[idx]
            length = (x * x + y * y + z * z) ** 0.5
            if length > 1e-8:
                base_normals.append((x / length, y / length, z / length))
            else:
                base_normals.append((0.0, 1.0, 0.0))

    # Classify faces
    from collections import defaultdict
    textured_groups: dict[tuple[int, int | None], list[int]] = defaultdict(list)
    colour_faces: list[int] = []

    texture_dir = Path(__file__).resolve().parent / "static" / "textures"
    face_flags = face_flags or [0] * face_count

    def _prepare_texture_with_transparency(tex_id: int, src_path: Path, dst_path: Path) -> tuple[str, int | None, int | None] | None:
        tex_width: int | None = None
        tex_height: int | None = None
        if not src_path.exists():
            debug_print(
                f"    texture {tex_id} missing at {src_path}",
                obj_id=_CURRENT_DEBUG_OBJECT_ID,
                model_id=_CURRENT_DEBUG_MODEL_ID,
            )
            return None
        try:
            dst_path.parent.mkdir(parents=True, exist_ok=True)
            if Image is None or ImageFilter is None:
                shutil.copyfile(src_path, dst_path)
                return (f"textures/texture_{tex_id}.png", tex_width, tex_height)

            with Image.open(src_path) as img:
                rgba = img.convert("RGBA")
                pixels = rgba.load()
                width, height = rgba.size
                tex_width, tex_height = width, height

                solid_mask = Image.new("L", (width, height), 0)
                transparent_pixels: list[tuple[int, int]] = []

                for y in range(height):
                    for x in range(width):
                        r, g, b, a = pixels[x, y]
                        if a == 0 or (r == 0 and g == 0 and b == 0):
                            transparent_pixels.append((x, y))
                        else:
                            solid_mask.putpixel((x, y), 255)

                for x, y in transparent_pixels:
                    accum = [0, 0, 0]
                    count = 0
                    for radius in (1, 2):
                        accum = [0, 0, 0]
                        count = 0
                        for dx in range(-radius, radius + 1):
                            for dy in range(-radius, radius + 1):
                                nx = x + dx
                                ny = y + dy
                                if 0 <= nx < width and 0 <= ny < height:
                                    nr, ng, nb, na = pixels[nx, ny]
                                    if na != 0:
                                        accum[0] += nr
                                        accum[1] += ng
                                        accum[2] += nb
                                        count += 1
                        if count:
                            break
                    if count:
                        pixels[x, y] = (accum[0] // count, accum[1] // count, accum[2] // count, 0)
                    else:
                        pixels[x, y] = (0, 0, 0, 0)

                expanded = solid_mask.filter(ImageFilter.MaxFilter(3))
                feather = expanded.filter(ImageFilter.GaussianBlur(radius=1.0))
                if ImageChops is not None:
                    alpha = ImageChops.lighter(feather, solid_mask)
                else:
                    alpha = feather

                r, g, b, _ = rgba.split()
                rgba = Image.merge("RGBA", (r, g, b, alpha))
                rgba.save(dst_path, "PNG")
        except Exception as prep_err:
            debug_print(
                f"    warning: failed to prepare texture {tex_id}: {prep_err}",
                obj_id=_CURRENT_DEBUG_OBJECT_ID,
                model_id=_CURRENT_DEBUG_MODEL_ID,
            )
            try:
                shutil.copyfile(src_path, dst_path)
            except Exception:
                return None
        return (f"textures/texture_{tex_id}.png", tex_width, tex_height)

    def _prepare_intensity_texture(tex_id: int, tint_colour: int, src_path: Path, dst_path: Path) -> tuple[str, int | None, int | None] | None:
        rel_uri = f"textures/{dst_path.name}"
        if not src_path.exists():
            debug_print(
                f"    intensity texture {tex_id} missing at {src_path}",
                obj_id=_CURRENT_DEBUG_OBJECT_ID,
                model_id=_CURRENT_DEBUG_MODEL_ID,
            )
            return None
        try:
            dst_path.parent.mkdir(parents=True, exist_ok=True)
            if dst_path.exists() and Image is not None:
                try:
                    with Image.open(dst_path) as existing:
                        width, height = existing.size
                    return (rel_uri, width, height)
                except Exception:
                    pass
            if Image is None:
                shutil.copyfile(src_path, dst_path)
                return (rel_uri, None, None)

            with Image.open(src_path) as img:
                rgba = img.convert("RGBA")
                pixels = rgba.load()
                width, height = rgba.size

                base_r, base_g, base_b = rs_colour_to_rgb(tint_colour)
                base_r_255 = max(0, min(255, int(round(base_r * 255.0))))
                base_g_255 = max(0, min(255, int(round(base_g * 255.0))))
                base_b_255 = max(0, min(255, int(round(base_b * 255.0))))

                for y in range(height):
                    for x in range(width):
                        pr, pg, pb, pa = pixels[x, y]
                        tinted_r = (pr * base_r_255) // 255
                        tinted_g = (pg * base_g_255) // 255
                        tinted_b = (pb * base_b_255) // 255
                        pixels[x, y] = (tinted_r, tinted_g, tinted_b, pa)

                rgba.save(dst_path, "PNG")
                return (rel_uri, width, height)
        except Exception as prep_err:
            debug_print(
                f"    warning: failed to tint intensity texture {tex_id}: {prep_err}",
                obj_id=_CURRENT_DEBUG_OBJECT_ID,
                model_id=_CURRENT_DEBUG_MODEL_ID,
            )
            try:
                shutil.copyfile(src_path, dst_path)
            except Exception:
                return None
        return (rel_uri, None, None)
    for idx in range(face_count):
        face_vertices = faces_local[idx]
        a, b, c = face_vertices
        mode = face_render_modes[idx] if idx < len(face_render_modes) else 0
        uv_triplet = face_uvs_local[idx] if idx < len(face_uvs_local) else None
        tex_slot = texture_slots[idx] if idx < len(texture_slots) else None
        if tex_slot is not None:
            tex_slot = int(tex_slot) & 0xFFFF
        if tex_slot is not None and tex_slot >= 65535:
            tex_slot = None
        tex_id = int(tex_slot) if (tex_slot is not None and tex_slot >= 0) else None
        base_colour = face_colors[idx] if idx < len(face_colors) else None
        if (
            mode in (2, 3)
            and tex_id is not None
            and uv_triplet is None
            and object_id in FALLBACK_UV_WHITELIST
        ):
            uv_triplet = _fallback_uv_for_face(verts_local, face_vertices)
            face_uvs_local[idx] = uv_triplet
            debug_print(
                f"    fallback UV for tex {tex_id} face {idx}: {uv_triplet}",
                obj_id=_CURRENT_DEBUG_OBJECT_ID,
                model_id=_CURRENT_DEBUG_MODEL_ID,
            )
        is_textured = (
            mode in (2, 3)
            and uv_triplet is not None
            and tex_id is not None
        )
        if is_textured:
            texture_path = texture_dir / f"texture_{tex_id}.png"
            if not texture_path.exists():
                debug_print(f"    texture {tex_id} missing; falling back to colour face {idx}")
                colour_faces.append(idx)
                continue
            overlay_colour: int | None = None
            if tex_id > INTENSITY_TEXTURE_THRESHOLD:
                if base_colour is None:
                    colour_faces.append(idx)
                    continue
                overlay_colour = base_colour & 0xFFFF
            textured_groups[(tex_id, overlay_colour)].append(idx)
        else:
            colour_faces.append(idx)

    # Build vertex data for colour faces (reuse shading logic from original writer)
    palette_local = build_model_palette() if colour_faces else None
    colour_positions: list[tuple[float, float, float]] = []
    colour_colours: list[tuple[float, float, float, float]] = []
    colour_normals: list[tuple[float, float, float]] | None = [] if (compute_normals or apply_rs_lighting) else None
    colour_indices: list[int] = []
    colour_source_indices: list[int] = []
    has_alpha = False

    if colour_faces:
        for face_idx in colour_faces:
            a, b, c = faces_local[face_idx]
            fc = face_colors[face_idx]
            render_mode = face_render_modes[face_idx] if face_idx < len(face_render_modes) else 0
            h, s, base_l = rs_colour_to_hsl(fc)
            flg = face_flags[face_idx] if face_idx < len(face_flags) else 0
            is_textured = False
            # replicate shading logic from original writer
            if fc == 0 or fc == 65535:
                has_alpha = True
                per_vert_cols = [(0.0, 0.0, 0.0, 0.0)] * 3
            elif render_mode == 1:
                palette_val = 0
                if palette_local is None:
                    palette_local = build_model_palette()
                idx_palette = fc & 0xFFFF
                if 0 <= idx_palette < len(palette_local):
                    palette_val = palette_local[idx_palette]
                r = ((palette_val >> 16) & 0xFF) / 255.0
                g = ((palette_val >> 8) & 0xFF) / 255.0
                bcol = (palette_val & 0xFF) / 255.0
                per_vert_cols = [(r, g, bcol, 1.0)] * 3
            elif apply_rs_lighting and base_normals is not None:
                k, l, i1 = light_dir
                Lmag = math.sqrt(k * k + l * l + i1 * i1)
                k1 = (rs_j * Lmag) / 256.0
                denom = k1 + 0.5 * k1 if k1 > 1e-8 else 1.0
                out_cols = []
                for vid in (a, b, c):
                    nx_v, ny_v, nz_v = base_normals[vid]
                    dot = (k * nx_v + l * ny_v + i1 * nz_v)
                    jprime = rs_ambient + (dot / denom)
                    jprime = max(0.0, min(127.0, jprime))
                    jprime = int(max(0.0, min(127.0, jprime * brightness_scale)))
                    packed = rs_method481(fc, jprime, flg)
                    if min_lightness_untextured is not None:
                        h2, s2, l2 = rs_colour_to_hsl(packed)
                        lightness = l2 if l2 >= min_lightness_untextured else min_lightness_untextured
                        r, g, bcol = _hsl_to_rgb(h2, s2, lightness)
                    else:
                        r, g, bcol = rs_colour_to_rgb(packed)
                    out_cols.append((float(r), float(g), float(bcol), 1.0))
                per_vert_cols = out_cols
            else:
                Lflat = min(1.0, max(0.0, base_l * brightness_scale))
                r, g, bcol = _hsl_to_rgb(h, s, Lflat)
                per_vert_cols = [(r, g, bcol, 1.0)] * 3

            if hide_untextured:
                has_alpha = True
                per_vert_cols = [(0.0, 0.0, 0.0, 0.0)] * 3

            base_index = len(colour_positions)
            for v_idx, vid in enumerate((a, b, c)):
                vx, vy, vz = verts_local[vid]
                colour_positions.append((float(vx), float(vy), float(vz)))
                colour_colours.append(tuple(float(x) for x in per_vert_cols[v_idx]))
                colour_source_indices.append(int(vid))
                if colour_normals is not None and base_normals is not None:
                    colour_normals.append(base_normals[vid])
            colour_indices.extend((base_index, base_index + 1, base_index + 2))

    # Build data for textured faces grouped by texture id
    textured_batches: dict[tuple[int, int | None], dict[str, list]] = {}
    print("line 2875 for object id ", object_id)
    for (tex_id, overlay_colour), face_indices in textured_groups.items():
        tex_positions: list[tuple[float, float, float]] = []
        tex_uvs: list[tuple[float, float]] = []
        tex_normals: list[tuple[float, float, float]] | None = [] if base_normals is not None else None
        tex_indices: list[int] = []
        tex_sources: list[int] = []

        for face_idx in face_indices:
            a, b, c = faces_local[face_idx]
            uv_triplet = face_uvs_local[face_idx]
            if uv_triplet is None:
                uv_triplet = _fallback_uv_for_face(verts_local, (a, b, c))
                face_uvs_local[face_idx] = uv_triplet

            scale = None
            if object_id in TEXTURED_FACE_WHITELIST:
                print("line 2890: expanding a face on object id ", object_id)
                scale = 1.0 + TEXTURED_FACE_EXPANSION if TEXTURED_FACE_EXPANSION else None
            if scale:
                v0 = verts_local[a]
                v1 = verts_local[b]
                v2 = verts_local[c]
                cx = (v0[0] + v1[0] + v2[0]) / 3.0
                cy = (v0[1] + v1[1] + v2[1]) / 3.0
                cz = (v0[2] + v1[2] + v2[2]) / 3.0
            else:
                cx = cy = cz = 0.0

            base_index = len(tex_positions)
            for v_idx, vid in enumerate((a, b, c)):
                vx, vy, vz = verts_local[vid]
                if scale:
                    vx = cx + (vx - cx) * scale
                    vy = cy + (vy - cy) * scale
                    vz = cz + (vz - cz) * scale
                tex_positions.append((float(vx), float(vy), float(vz)))
                u, v = uv_triplet[v_idx]
                tex_uvs.append((float(u), float(v)))
                if tex_normals is not None:
                    tex_normals.append(base_normals[vid])
                tex_sources.append(int(vid))
            tex_indices.extend((base_index, base_index + 1, base_index + 2))

        if tex_positions and tex_uvs and tex_indices:
            textured_batches[(tex_id, overlay_colour)] = {
                "positions": tex_positions,
                "uvs": tex_uvs,
                "normals": tex_normals,
                "indices": tex_indices,
                "overlay_colour": overlay_colour,
                "source_indices": tex_sources,
            }
    sample = {
        f"{tex_id}" if overlay_colour is None else f"{tex_id}/0x{overlay_colour:04x}": len(face_indices)
        for (tex_id, overlay_colour), face_indices in textured_groups.items()
        if (tex_id, overlay_colour) in textured_batches
    }

    if not colour_positions and not textured_batches:
        debug_print("No primitives generated; aborting GLTF export")
        return out_path

    buffer_data = bytearray()
    buffer_views = []
    accessors = []
    materials = []
    images = []
    textures = []
    primitives = []
    extensions_used = set()

    def append_buffer_view(data_bytes: bytes, target: int) -> int:
        pad = (-len(buffer_data)) % 4
        if pad:
            buffer_data.extend(b"\x00" * pad)
        offset = len(buffer_data)
        buffer_data.extend(data_bytes)
        view_index = len(buffer_views)
        buffer_views.append({"buffer": 0, "byteOffset": offset, "byteLength": len(data_bytes), "target": target})
        return view_index

    def append_accessor(view_idx: int, component_type: int, count: int, type_str: str,
                        min_vals: list[float] | None = None, max_vals: list[float] | None = None) -> int:
        accessor = {
            "bufferView": view_idx,
            "byteOffset": 0,
            "componentType": component_type,
            "count": count,
            "type": type_str,
        }
        if min_vals is not None:
            accessor["min"] = min_vals
        if max_vals is not None:
            accessor["max"] = max_vals
        accessor_idx = len(accessors)
        accessors.append(accessor)
        return accessor_idx

    # Colour primitive
    colour_material_index = None
    if colour_positions:
        pos_bytes = b"".join(struct.pack("<3f", *pos) for pos in colour_positions)
        idx_bytes = b"".join(struct.pack("<I", idx) for idx in colour_indices)
        col_bytes = b"".join(struct.pack("<4f", *col) for col in colour_colours)
        norm_bytes = b"".join(struct.pack("<3f", *n) for n in colour_normals) if colour_normals else b""

        bv_pos = append_buffer_view(pos_bytes, 34962)
        bv_idx = append_buffer_view(idx_bytes, 34963)
        bv_col = append_buffer_view(col_bytes, 34962)
        accessor_pos = append_accessor(
            bv_pos, 5126, len(colour_positions), "VEC3",
            min_vals=[float(min(p[i] for p in colour_positions)) for i in range(3)],
            max_vals=[float(max(p[i] for p in colour_positions)) for i in range(3)],
        )
        accessor_idx = append_accessor(bv_idx, 5125, len(colour_indices), "SCALAR")
        accessor_col = append_accessor(bv_col, 5126, len(colour_colours), "VEC4")
        accessor_nrm = None
        if colour_normals:
            bv_nrm = append_buffer_view(norm_bytes, 34962)
            accessor_nrm = append_accessor(bv_nrm, 5126, len(colour_normals), "VEC3")

        colour_material_index = len(materials)
        materials.append({
            "pbrMetallicRoughness": {
                "metallicFactor": 0.0,
                "roughnessFactor": 1.0,
                "baseColorFactor": [1.0, 1.0, 1.0, 1.0],
            },
            "doubleSided": double_sided,
            "alphaMode": "MASK" if has_alpha else "OPAQUE",
            "alphaCutoff": 0.5,
        })

        prim_attrs = {"POSITION": accessor_pos, "COLOR_0": accessor_col}
        if accessor_nrm is not None:
            prim_attrs["NORMAL"] = accessor_nrm
        if colour_source_indices:
            max_rs_index = max(colour_source_indices)
            rs_to_gltf = [[] for _ in range(max_rs_index + 1)]
            for local_idx, rs_idx in enumerate(colour_source_indices):
                rs_to_gltf[int(rs_idx)].append(local_idx)
        else:
            rs_to_gltf = []

        primitives.append({
            "attributes": prim_attrs,
            "indices": accessor_idx,
            "material": colour_material_index,
            "extras": {
                "rs_to_gltf": rs_to_gltf,
            },
        })

    # Textured primitives
    image_index_map: dict[tuple[int, int | None], int] = {}
    texture_index_map: dict[tuple[int, int | None], int] = {}
    material_index_map: dict[tuple[int, int | None], int] = {}
    texture_dimensions: dict[tuple[int, int | None], tuple[int, int]] = {}

    if textured_batches:
        for key, batch in textured_batches.items():
            tex_id, overlay_colour = key
            positions = batch["positions"]
            uvs = batch["uvs"]
            normals = batch["normals"]
            indices = batch["indices"]
            source_indices = batch.get("source_indices") or []

            pos_bytes = b"".join(struct.pack("<3f", *pos) for pos in positions)
            idx_bytes = b"".join(struct.pack("<I", idx) for idx in indices)
            dims = texture_dimensions.get(key)
            if (
                TEXTURE_UV_PADDING_TEXELS
                and dims is not None
                and dims[0] is not None
                and dims[1] is not None
                and dims[0] > 0
                and dims[1] > 0
            ):
                eps_u = TEXTURE_UV_PADDING_TEXELS / dims[0]
                eps_v = TEXTURE_UV_PADDING_TEXELS / dims[1]

                def adjust_component(val: float, eps: float) -> float:
                    if val >= 0.5:
                        return min(1.0, val + eps)
                    return max(0.0, val - eps)

                uvs_adjusted = [
                    (
                        adjust_component(float(u), eps_u),
                        adjust_component(float(v), eps_v),
                    )
                    for (u, v) in uvs
                ]
            else:
                uvs_adjusted = [(float(u), float(v)) for (u, v) in uvs]
            uv_bytes = b"".join(struct.pack("<2f", *uv) for uv in uvs_adjusted)
            bv_pos = append_buffer_view(pos_bytes, 34962)
            bv_idx = append_buffer_view(idx_bytes, 34963)
            bv_uv = append_buffer_view(uv_bytes, 34962)
            accessor_pos = append_accessor(
                bv_pos, 5126, len(positions), "VEC3",
                min_vals=[float(min(p[i] for p in positions)) for i in range(3)],
                max_vals=[float(max(p[i] for p in positions)) for i in range(3)],
            )
            accessor_idx = append_accessor(bv_idx, 5125, len(indices), "SCALAR")
            accessor_uv = append_accessor(bv_uv, 5126, len(uvs), "VEC2")
            accessor_nrm = None
            if normals:
                norm_bytes = b"".join(struct.pack("<3f", *n) for n in normals)
                bv_nrm = append_buffer_view(norm_bytes, 34962)
                accessor_nrm = append_accessor(bv_nrm, 5126, len(normals), "VEC3")

            # Register image/texture/material for this texture id
            # Ensure a local textures directory alongside the GLTF so the URI stays relative.
            gltf_dir = Path(out_path).parent
            local_tex_dir = gltf_dir / "textures"
            local_tex_dir.mkdir(parents=True, exist_ok=True)
            src_path = texture_dir / f"texture_{tex_id}.png"
            if overlay_colour is None:
                dst_path = local_tex_dir / f"texture_{tex_id}.png"
                result = _prepare_texture_with_transparency(tex_id, src_path, dst_path)
                if result is None:
                    debug_print(
                        f"    prepared base texture {tex_id} -> {dst_path} (missing source, using fallback path)",
                        obj_id=_CURRENT_DEBUG_OBJECT_ID,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
                    rel_uri = f"textures/{dst_path.name}"
                    tex_width = tex_height = None
                else:
                    rel_uri, tex_width, tex_height = result
                    debug_print(
                        f"    prepared base texture {tex_id} -> {dst_path} size=({tex_width},{tex_height})",
                        obj_id=_CURRENT_DEBUG_OBJECT_ID,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
            else:
                tint_name = f"texture_{tex_id}_tint_{overlay_colour:04x}.png"
                dst_path = local_tex_dir / tint_name
                result = _prepare_intensity_texture(tex_id, overlay_colour, src_path, dst_path)
                if result is None:
                    debug_print(
                        f"    failed to prepare intensity texture {tex_id} tint 0x{overlay_colour:04x}; skipping textured batch",
                        obj_id=_CURRENT_DEBUG_OBJECT_ID,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
                    continue
                rel_uri, tex_width, tex_height = result
                debug_print(
                    f"    prepared intensity texture {tex_id} tint 0x{overlay_colour:04x} -> {dst_path} size=({tex_width},{tex_height})",
                    obj_id=_CURRENT_DEBUG_OBJECT_ID,
                    model_id=_CURRENT_DEBUG_MODEL_ID,
                )
            if tex_width is not None and tex_height is not None:
                texture_dimensions[key] = (tex_width, tex_height)
            if key not in image_index_map:
                image_index_map[key] = len(images)
                images.append({"uri": rel_uri})
            if key not in texture_index_map:
                texture_index_map[key] = len(textures)
                textures.append({"source": image_index_map[key]})
            if key not in material_index_map:
                material_index_map[key] = len(materials)
                materials.append({
                    "pbrMetallicRoughness": {
                        "baseColorTexture": {"index": texture_index_map[key]},
                        "metallicFactor": 0.0,
                        "roughnessFactor": 1.0,
                    },
                    "doubleSided": double_sided,
                    "alphaMode": "BLEND",
                })

            prim_attrs = {"POSITION": accessor_pos, "TEXCOORD_0": accessor_uv}
            if accessor_nrm is not None:
                prim_attrs["NORMAL"] = accessor_nrm
            if source_indices:
                max_rs_idx = max(source_indices)
                rs_to_gltf = [[] for _ in range(max_rs_idx + 1)]
                for local_idx, rs_idx in enumerate(source_indices):
                    rs_to_gltf[int(rs_idx)].append(local_idx)
            else:
                rs_to_gltf = []

            primitives.append({
                "attributes": prim_attrs,
                "indices": accessor_idx,
                "material": material_index_map[key],
                "extras": {
                    "rs_to_gltf": rs_to_gltf,
                    "texture_id": tex_id,
                    "overlay_colour": overlay_colour,
                },
            })

    buffer_bytes = bytes(buffer_data)
    buffer_uri = "data:application/octet-stream;base64," + base64.b64encode(buffer_bytes).decode("ascii")

    gltf = {
        "asset": {"version": "2.0"},
        "buffers": [{"uri": buffer_uri, "byteLength": len(buffer_bytes)}],
        "bufferViews": buffer_views,
        "accessors": accessors,
        "materials": materials,
        "meshes": [{"primitives": primitives}],
        "nodes": [{"mesh": 0}],
        "scenes": [{"nodes": [0]}],
        "scene": 0,
    }
    if extensions_used:
        gltf["extensionsUsed"] = sorted(extensions_used)
    if images:
        gltf["images"] = images
    if textures:
        gltf["textures"] = textures

    if (vertex_skins and any(v >= 0 for v in vertex_skins)) or (face_skins and any(v >= 0 for v in face_skins)):
        mesh_extras: dict[str, list[list[int]]] = {}

        def invert_skin(ids: list[int], count: int | None = None) -> list[list[int]]:
            if ids is None:
                return []
            max_group = max((val for val in ids if val is not None and val >= 0), default=-1)
            if max_group < 0:
                return []
            bags = [[] for _ in range(max_group + 1)]
            for vid, group in enumerate(ids):
                if group is None or group < 0:
                    continue
                if group >= len(bags):
                    bags.extend([] for _ in range(group + 1 - len(bags)))
                bags[group].append(int(vid))
            return bags

        inverted_vertex = invert_skin(vertex_skins or [])
        inverted_face = invert_skin(face_skins or [])
        if inverted_vertex:
            mesh_extras["vertex_skin_groups"] = inverted_vertex
        if inverted_face:
            mesh_extras["face_skin_groups"] = inverted_face
        if mesh_extras and gltf.get("meshes"):
            gltf["meshes"][0]["extras"] = mesh_extras

    if node_translation is not None:
        gltf["nodes"][0]["translation"] = [float(node_translation[0]), float(node_translation[1]), float(node_translation[2])]
    if node_scale is not None:
        gltf["nodes"][0]["scale"] = [float(node_scale[0]), float(node_scale[1]), float(node_scale[2])]

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
    for idx, (obj_id, model_type) in enumerate(object_type_pairs):
        _CURRENT_DEBUG_OBJECT_ID = obj_id
        _CURRENT_DEBUG_MODEL_ID = None
        key = f"{obj_id}-{model_type}"
        entry: dict = {}
        cached_entry = _OBJECT_CACHE.get(key)
        if cached_entry:
            _print_model_ids_from_sources(obj_id)
            results[key] = copy.deepcopy(cached_entry)
            continue
        try:
            obj = od_cache.get(obj_id)
            entry["objectdef"] = asdict(obj)
            entry["model_type"] = model_type
            entry["object_id"] = obj_id
            _print_model_ids_from_sources(obj_id)
        except Exception as e:
            results[key] = {"error": str(e), "gltf": "no model"}
            continue

        gltf_path: str | None = None
        # Try to export the first valid/decodable model for this object.
        # 1) Prefer the requested model_type if present.
        # 2) Fallback: try all available model types for the object until one works.
        completed = False
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

                placeholder_generated = False
                if (
                    t == 22
                    and 2733 <= obj_id <= 2780
                ):
                    placeholder = build_minimap_icon_placeholder_mesh()
                    filename = f"object_{obj_id}_type_{t}_placeholder.gltf"
                    out_path = os.path.join(out_dir, filename)
                    write_gltf_with_textures(
                        placeholder["verts"],
                        placeholder["faces"],
                        out_path,
                        face_colors=placeholder["face_cols"],
                        face_texture_slots=placeholder["face_cols"],
                        face_uvs=placeholder["face_uvs"],
                        face_render_modes=placeholder["face_render_modes"],
                        face_texture_indices=placeholder["face_texture_indices"],
                        flip_y=True,
                        compute_normals=True,
                        node_translation=(tx, ty, tz),
                        node_scale=(sx, sy, sz),
                        apply_rs_lighting=True,
                        rs_ambient=64,
                        rs_j=768,
                        brightness_scale=0.85,
                        face_flags=None,
                        min_lightness_untextured=0.08,
                        hide_untextured=hide_untextured,
                        textured_faces=placeholder["face_tex"],
                        object_id=obj_id,
                        vertex_skins=placeholder.get("vertex_skins"),
                        face_skins=placeholder.get("face_skins"),
                    )
                    component_meshes.append({
                        "verts": placeholder["verts"],
                        "faces": placeholder["faces"],
                        "face_cols": placeholder["face_cols"],
                        "face_tex": placeholder["face_tex"],
                        "uvs": placeholder["face_uvs"],
                        "face_render_modes": placeholder["face_render_modes"],
                        "face_texture_indices": placeholder["face_texture_indices"],
                        "face_texture_slots": placeholder["face_cols"],
                        "face_alpha": placeholder["face_alpha"],
                        "vertex_skins": placeholder.get("vertex_skins"),
                        "face_skins": placeholder.get("face_skins"),
                    })
                    component_paths.append(out_path)
                    used_model_ids_local.append(-1)
                    gltf_path = out_path
                    placeholder_generated = True
                    completed = True

                if not placeholder_generated:
                    for model_id in mids:
                        if(obj_id == 9160):
                            print("start making model for 9160")
                        _CURRENT_DEBUG_MODEL_ID = model_id
                        debug_print(f"    trying model {model_id} for object {obj_id}", obj_id=obj_id, model_id=model_id)
                        if not is_valid_model_id(model_id, model_index):
                            debug_print(f"    model {model_id} out of range; skipping", obj_id=obj_id, model_id=model_id)
                            continue
                        try:
                            blob = read_model_blob(model_id, model_index)
                            meta = parse_model_header_any(blob)
                        except Exception as e_blob:
                            debug_print(f"    failed to read/parse model {model_id}: {e_blob}", obj_id=obj_id, model_id=model_id)
                            continue
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
                                    off, len_ = meta.offs[section]
                                    debug_print(
                                        f"      section {section}: off={off} len={len_}",
                                        obj_id=obj_id,
                                        model_id=model_id,
                                    )
                        except Exception:
                            pass
                        blob_unpacked = _gunzip_maybe(blob)
                        layout = getattr(meta, "layout", None)
                        if layout == "317":
                            (
                                verts,
                                faces,
                                face_cols,
                                face_tex,
                                face_render_modes,
                                face_texture_indices,
                                face_alpha,
                            ) = decode_geom_317(blob_unpacked, meta)
                        else:
                            (
                                verts,
                                faces,
                                face_cols,
                                face_tex,
                                face_render_modes,
                                face_texture_indices,
                                face_alpha,
                            ) = decode_geom_525_622(blob_unpacked, meta)
                        face_cols_raw = list(face_cols)

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

                        if obj_id == 1280:
                            tex_info = getattr(meta, "texture_data", None)
                            if tex_info:
                                type0_count = len(tex_info.get("type0_triangles", []))
                                type1a_count = len(tex_info.get("type1A_triangles", []))
                                face_samples = tex_info.get("face_texture_values", [])[:12]
                                type_samples = tex_info.get("types", [])[:12]
                                print(
                                    f"[texture-data] object {obj_id} model {model_id} "
                                    f"type0={type0_count} type1A={type1a_count} "
                                    f"face_tex_sample={face_samples} types_sample={type_samples}"
                                )

                        merged_uvs = None
                        face_uvs_type0 = face_uvs_type1 = None
                        if layout != "317":
                            try:
                                face_uvs_type0 = compute_type0_face_uvs_525_622(blob_unpacked, meta, verts, faces)
                            except Exception as e_uv0:
                                face_uvs_type0 = None
                                debug_print(f"    UV type0 compute error: {e_uv0}", obj_id=obj_id, model_id=model_id)
                            try:
                                face_uvs_type1 = compute_type1_face_uvs_525_622(blob_unpacked, meta, verts, faces)
                            except Exception as e_uv1:
                                face_uvs_type1 = None
                                debug_print(f"    UV type1 compute error: {e_uv1}", obj_id=obj_id, model_id=model_id)
                        else:
                            face_uvs_type0 = getattr(meta, "face_uvs_type0", None)
                            face_uvs_type1 = getattr(meta, "face_uvs_type1", None)
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

                        if obj_id == 7376:
                            debug_indices = [0, 5, 10, 20, 40, 80, 160, 320, 480, 640, 800]
                            print(f"[anim-debug] object {obj_id} model {model_id} vertex samples (pre-GLTF):")
                            for idx in debug_indices:
                                if 0 <= idx < len(verts):
                                    vx, vy, vz = verts[idx]
                                    print(f"    idx {idx:4d}: ({vx}, {vy}, {vz})")
                                else:
                                    print(f"    idx {idx:4d}: <out of range (verts={len(verts)})>")

                        vertex_skins = (getattr(meta, "vertex_skins", None) or [])
                        face_skins = (getattr(meta, "face_skins", None) or [])

                        filename = f"object_{obj_id}_type_{t}_model_{model_id}.gltf"
                        out_path = os.path.join(out_dir, filename)
                        write_gltf_with_textures(
                            verts, faces, out_path,
                            face_colors=face_cols,
                            face_texture_slots=face_cols_raw,
                            face_uvs=merged_uvs,
                            face_render_modes=face_render_modes,
                            face_texture_indices=face_texture_indices,
                            flip_y=True,
                            compute_normals=True,
                            node_translation=(tx, ty, tz), node_scale=(sx, sy, sz),
                            apply_rs_lighting=True,
                            rs_ambient=64,
                            rs_j=768,
                            brightness_scale=0.85,
                            face_flags=None,
                            min_lightness_untextured=0.08,
                            hide_untextured=hide_untextured,
                            textured_faces=face_tex,
                            object_id=obj_id,
                            vertex_skins=vertex_skins,
                            face_skins=face_skins,
                        )
                        component_meshes.append({
                            "verts": verts,
                            "faces": faces,
                            "face_cols": face_cols,
                            "face_tex": face_tex,
                            "uvs": merged_uvs,
                            "face_render_modes": face_render_modes,
                            "face_texture_indices": face_texture_indices,
                            "face_texture_slots": face_cols_raw,
                            "face_alpha": face_alpha,
                            "vertex_skins": vertex_skins,
                            "face_skins": face_skins,
                        })
                        component_paths.append(out_path)
                        used_model_ids_local.append(model_id)

                        gltf_path = gltf_path or out_path

                        if obj_id == 1280:
                            entry.setdefault("intermediate_gltfs", []).append(out_path)
                # end for model_id

                if completed:
                    print("break on line 3054")
                    break

                if not component_meshes:
                    print(f"[export]   no component meshes produced for {key}")
                    continue

                debug_print(
                    f"  collected {len(component_meshes)} component meshes for object {obj_id} type {t}",
                    obj_id=obj_id,
                    model_id=_CURRENT_DEBUG_MODEL_ID,
                )

            entry["component_gltfs"] = component_paths
            entry["used_model_type"] = t
            entry["used_model_ids"] = used_model_ids_local
            if len(component_meshes) > 1:
                print(f"attempting merged export with {len(component_meshes)} components for object id", obj_id)
                combined_verts: list[tuple[int, int, int]] = []
                combined_faces: list[tuple[int, int, int]] = []
                combined_cols: list[int] = []
                combined_tex: list[bool] = []
                combined_uvs: list = []
                combined_render_modes: list[int] = []
                combined_texture_indices: list[int] = []
                combined_texture_slots: list[int] = []
                combined_alpha: list[int] = []
                combined_vertex_skins: list[int] = []
                combined_face_skins: list[int] = []

                for comp in component_meshes:
                    base_index = len(combined_verts)
                    comp_faces = comp["faces"]
                    combined_verts.extend(comp["verts"])
                    combined_faces.extend(
                        [(a + base_index, b + base_index, c + base_index) for (a, b, c) in comp_faces]
                    )
                    combined_cols.extend(comp["face_cols"])
                    combined_tex.extend(comp["face_tex"])
                    face_len = len(comp_faces)

                    comp_uvs = comp["uvs"]
                    if comp_uvs is None:
                        combined_uvs.extend([None] * face_len)
                    else:
                        combined_uvs.extend(comp_uvs)

                    comp_modes = comp.get("face_render_modes") or []
                    if comp_modes:
                        combined_render_modes.extend(comp_modes)
                    else:
                        combined_render_modes.extend([0] * face_len)

                    comp_tex_indices = comp.get("face_texture_indices") or []
                    if comp_tex_indices:
                        combined_texture_indices.extend(comp_tex_indices)
                    else:
                        combined_texture_indices.extend([-1] * face_len)

                    comp_tex_slots = comp.get("face_texture_slots") or []
                    if comp_tex_slots:
                        combined_texture_slots.extend(comp_tex_slots)
                    else:
                        combined_texture_slots.extend([-1] * face_len)

                    comp_alpha = comp.get("face_alpha") or []
                    if comp_alpha:
                        combined_alpha.extend(comp_alpha)
                    else:
                        combined_alpha.extend([0] * face_len)
                    comp_vs = comp.get("vertex_skins")
                    if comp_vs:
                        combined_vertex_skins.extend(comp_vs)
                    else:
                        combined_vertex_skins.extend([-1] * len(comp["verts"]))
                    comp_fs = comp.get("face_skins")
                    if comp_fs:
                        combined_face_skins.extend(comp_fs)
                    else:
                        combined_face_skins.extend([-1] * face_len)

                merged_filename = f"object_{obj_id}_type_{t}_merged.gltf"
                merged_path = os.path.join(out_dir, merged_filename)
                try:
                    debug_print(
                        f"    writing merged GLTF to {merged_path}",
                        obj_id=obj_id,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
                    write_gltf_with_textures(
                        combined_verts,
                        combined_faces,
                        merged_path,
                        face_colors=combined_cols,
                        face_texture_slots=combined_texture_slots,
                        face_uvs=combined_uvs,
                        face_render_modes=combined_render_modes,
                        face_texture_indices=combined_texture_indices,
                        flip_y=True,
                        compute_normals=True,
                        node_translation=(tx, ty, tz),
                        node_scale=(sx, sy, sz),
                        apply_rs_lighting=True,
                        rs_ambient=64,
                        rs_j=768,
                        brightness_scale=0.85,
                        face_flags=None,
                        min_lightness_untextured=0.08,
                        hide_untextured=hide_untextured,
                        textured_faces=combined_tex,
                        object_id=obj_id,
                        original_vertex_count=len(verts),
                        vertex_mapping_info=None,
                        vertex_skins=combined_vertex_skins,
                        face_skins=combined_face_skins,
                    )
                    entry["merged_gltf"] = merged_path
                    debug_print(
                        f"    merged export succeeded: {merged_path}",
                        obj_id=obj_id,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
                    gltf_path = merged_path
                except Exception as merge_export_err:
                    debug_print(
                        f"    merged export failed: {merge_export_err}",
                        obj_id=obj_id,
                        model_id=_CURRENT_DEBUG_MODEL_ID,
                    )
            else:
                debug_print(
                    "    only one component mesh -> skipping merged export",
                    obj_id=obj_id,
                    model_id=_CURRENT_DEBUG_MODEL_ID,
                )
                gltf_path = gltf_path or component_paths[0]

            entry["gltf"] = gltf_path
            results[key] = entry
            _OBJECT_CACHE[key] = copy.deepcopy(entry)
            cache_updated = True
            completed = True
        except Exception as export_err:
            pass

        if completed:
            continue
        entry["gltf"] = gltf_path if gltf_path else "no model"
        if not gltf_path:
            print(f"[export]   {key} -> no model")
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
    sample_keys = list(results.keys())[:5]
    print(f"[export] returning {len(results)} results; sample_keys={sample_keys}")
    for sk in sample_keys:
        entry = results.get(sk, {})
        print(f"[export]   {sk}: gltf={entry.get('gltf')} error={entry.get('error')}")
    return results



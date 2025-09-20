# -*- coding: utf-8 -*-
"""
Created on Thu Aug 28 19:21:04 2025

@author: shika
"""

# Works, but starts from .dat file

import struct
import json
from archive import build_archive_map, get_file_data

class ByteBuffer:
    """Helper class to read binary data in the same way as the Java ByteBuffer in the RSPS client."""
    def __init__(self, data: bytes):
        self.data = data
        self.pos = 0

    def get_unsigned_byte(self) -> int:
        val = self.data[self.pos]
        self.pos += 1
        return val

    def get_unsigned_short(self) -> int:
        val = struct.unpack_from('>H', self.data, self.pos)[0]
        self.pos += 2
        return val

    def get_tribyte(self) -> int:
        """Read a 3-byte big-endian integer (RGB values are stored this way)."""
        b1, b2, b3 = self.data[self.pos:self.pos+3]
        self.pos += 3
        return (b1 << 16) | (b2 << 8) | b3

    def get_string(self) -> str:
        """Read a null-terminated (byte=10) string."""
        start = self.pos
        while self.data[self.pos] != 10:  # newline character '\n'
            self.pos += 1
        value = self.data[start:self.pos].decode('cp1252')
        self.pos += 1  # skip terminator
        return value


class Underlay:
    """Represents a single underlay definition (one entry in flo.dat)."""
    def __init__(self):
        self.rgb_color = None  # Original color in RGB (integer 0xRRGGBB)
        self.texture_id = -1
        self.is_walkable = True

        # Derived HSL and map rendering values
        self.hue = 0
        self.saturation = 0
        self.lightness = 0
        self.hue_multiplier = 0
        self.weighted_hue = 0
        self.minimap_color = 0

    def read_from_buffer(self, buf: ByteBuffer):
        """Parses a single underlay entry from the buffer until a 0-byte is reached."""
        while True:
            code = buf.get_unsigned_byte()
            if code == 0:  # end of this entry
                break
            elif code == 1:
                self.rgb_color = buf.get_tribyte()
                self._calculate_hsl(self.rgb_color)
            elif code == 2:
                self.texture_id = buf.get_unsigned_byte()
            elif code == 3:
                pass  # unused flag in some revisions
            elif code == 4:
                pass  # unused flag in some revisions
            elif code == 5:
                self.is_walkable = False
            elif code == 6:
                _ = buf.get_string()  # skip name
            elif code == 7:
                # Alternate color for minimap shading, preserve main HSL
                saved_hue = self.hue
                saved_sat = self.saturation
                saved_light = self.lightness
                saved_weight = self.hue_multiplier

                minimap_rgb = buf.get_tribyte()
                self._calculate_hsl(minimap_rgb)

                # restore base values, keep minimap hue multiplier
                self.hue = saved_hue
                self.saturation = saved_sat
                self.lightness = saved_light
                self.hue_multiplier = saved_weight
                self.minimap_color = saved_weight
            else:
                print(f"Warning: Unknown config code {code} in flo.dat")

    def _calculate_hsl(self, rgb: int):
        """Convert RGB color (0xRRGGBB) into HSL and other values used for rendering."""
        r = ((rgb >> 16) & 0xFF) / 256.0
        g = ((rgb >> 8) & 0xFF) / 256.0
        b = (rgb & 0xFF) / 256.0

        min_c = min(r, g, b)
        max_c = max(r, g, b)
        lightness = (min_c + max_c) / 2.0

        hue = saturation = 0.0
        if min_c != max_c:
            if lightness < 0.5:
                saturation = (max_c - min_c) / (max_c + min_c)
            else:
                saturation = (max_c - min_c) / (2.0 - max_c - min_c)

            if r == max_c:
                hue = (g - b) / (max_c - min_c)
            elif g == max_c:
                hue = 2.0 + (b - r) / (max_c - min_c)
            else:
                hue = 4.0 + (r - g) / (max_c - min_c)

        hue /= 6.0

        # Scale to integer values as in the client
        self.hue = int(hue * 256)
        self.saturation = int(saturation * 256)
        self.lightness = int(lightness * 256)

        # Weighting for map color intensity
        self.hue_multiplier = max(1, int(((1.0 - lightness) if lightness > 0.5 else lightness) * saturation * 512))
        self.weighted_hue = int(hue * self.hue_multiplier)

        # Final packed minimap color (HSL -> packed int)
        self.minimap_color = self._pack_hsl_to_map_color(self.hue, self.saturation, self.lightness)

    @staticmethod
    def _pack_hsl_to_map_color(hue: int, saturation: int, lightness: int) -> int:
        """Compress HSL values into the packed map color used by the client minimap."""
        if lightness > 179:
            saturation //= 2
        if lightness > 192:
            saturation //= 2
        if lightness > 217:
            saturation //= 2
        if lightness > 243:
            saturation //= 2
        return ((hue // 4) << 10) + ((saturation // 32) << 7) + (lightness // 2)


def parse_underlaysOriginal(data: bytes) -> list[Underlay]:
    """Parse the entire flo.dat file and return a list of Underlay objects."""
    buf = ByteBuffer(data)
    entry_count = buf.get_unsigned_short()
    underlays = []
    for _ in range(entry_count):
        entry = Underlay()
        entry.read_from_buffer(buf)
        underlays.append(entry)
    return underlays

def parse_underlays(data: bytes) -> list[Underlay]:
    """Parse the entire flo.dat file and return a list of Underlay objects."""
    print(f"Python data size: {len(data)} bytes")
    print("Python first 32 bytes:", data[:32].hex())
    
    buf = ByteBuffer(data)
    entry_count = buf.get_unsigned_short()
    print(f"Python read entry_count: {entry_count}")
    print(f"Python buffer position after reading size: {buf.pos}")
    
    underlays = []
    for i in range(entry_count):
        entry = Underlay()
        entry.read_from_buffer(buf)
        underlays.append(entry)
        
        # Debug after each entry
        if i < 5:  # First 5 entries
            print(f"After entry {i}: position={buf.pos}")
    
    return underlays

def to_hex(rgb_int: int) -> str:
    return f"#{(rgb_int & 0xFFFFFF):06x}"

def serialize_underlays(underlays: list[Underlay]) -> list[dict]:
    out = []
    for i, u in enumerate(underlays):
        # defensive clamp for H/S/L into 0..255 (you had a negative hue in sample)
        hue = max(0, min(255, int(u.hue)))
        sat = max(0, min(255, int(u.saturation)))
        lig = max(0, min(255, int(u.lightness)))
        out.append({
            "id": i,
            "rgb": u.rgb_color if u.rgb_color is not None else 0,
            "hex": to_hex(u.rgb_color or 0),         # e.g. "#c08048"
            "textureId": u.texture_id,
            "walkable": bool(u.is_walkable),
            "hsl": {
                "h": hue,
                "s": sat,
                "l": lig
            },
            # optional extras used by the client/minimap
            "hueMultiplier": int(u.hue_multiplier),
            "weightedHue": int(u.weighted_hue),
            "minimapColor": int(u.minimap_color),
        })
    return out

# Load flo.dat from your extracted cache
archives = build_archive_map(2)           # scans idx0 and opens archives
data = get_file_data(archives, "flo.dat")

print(f"flo.dat size: {len(data)} bytes")

underlays = parse_underlays(data)

# Display some entries
for i, u in enumerate(underlays):
    print(f"Underlay {i}: RGB={hex(u.rgb_color)}, H={u.hue}, S={u.saturation}, L={u.lightness}, Walkable={u.is_walkable}")
    
#with open("underlays.json", "w", encoding="utf-8") as f:
#    json.dump(serialize_underlays(underlays), f, ensure_ascii=False, indent=2)
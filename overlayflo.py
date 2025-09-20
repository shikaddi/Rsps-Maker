# -*- coding: utf-8 -*-
"""
Created on Fri Aug 29 22:06:52 2025

@author: shika
"""

# Works, but starts from .dat file

import struct
from io import BytesIO
from archive import build_archive_map, get_file_data

import json, pathlib


class OverLayFlo317:
    overlays = []

    def __init__(self):
        # Fields from the original class
        self.is_solid = False
        self.texture_id = -1
        self.rgb = 0
        self.is_walkable = True
        self.secondary_rgb = 0
        self.overlay_id = 0
        self.is_visible = True
        self.blend_type = 0
        self.is_hidden = False
        self.detail_rgb = 0
        self.opacity = 0
        self.map_icon_id = 0
        self.shading_type = 0

        # Derived HSL values
        self.hue = 0
        self.saturation = 0
        self.lightness = 0
        self.hue_multiplier = 0
        self.hue_weight = 0
        self.hsl_packed = 0

    @classmethod
    def load_from_bytes(cls, data: bytes):
        """Load overlays from raw bytes (like the contents of overlay.dat)."""
        buffer = BytesIO(data)
        count = struct.unpack(">H", buffer.read(2))[0]
        cls.overlays = [None] * count
        for i in range(count):
            overlay = cls()
            overlay._parse_overlay(buffer)
            cls.overlays[i] = overlay

    def _parse_overlay(self, buffer: BytesIO):
        """Parse a single overlay entry."""
        while True:
            attribute_id = struct.unpack("B", buffer.read(1))[0]
            if attribute_id == 0:
                break
            elif attribute_id == 1:
                r, g, b = struct.unpack("BBB", buffer.read(3))
                self.rgb = (r << 16) + (g << 8) + b
                self._convert_rgb_to_hsl(self.rgb)
            elif attribute_id == 2:
                self.texture_id = struct.unpack("B", buffer.read(1))[0]
            elif attribute_id == 3:
                self.texture_id = struct.unpack(">H", buffer.read(2))[0]
                if self.texture_id == 65535:
                    self.texture_id = -1
            elif attribute_id == 5:
                self.is_walkable = False
            elif attribute_id == 7:
                r, g, b = struct.unpack("BBB", buffer.read(3))
                self.secondary_rgb = (r << 16) + (g << 8) + b
            elif attribute_id == 9:
                self.overlay_id = struct.unpack(">H", buffer.read(2))[0]
            elif attribute_id == 10:
                self.is_visible = False
            elif attribute_id == 11:
                self.blend_type = struct.unpack("B", buffer.read(1))[0]
            elif attribute_id == 12:
                self.is_hidden = True
            elif attribute_id == 13:
                r, g, b = struct.unpack("BBB", buffer.read(3))
                self.detail_rgb = (r << 16) + (g << 8) + b
            elif attribute_id == 14:
                self.opacity = struct.unpack("B", buffer.read(1))[0]
            elif attribute_id == 15:
                self.map_icon_id = struct.unpack(">H", buffer.read(2))[0]
                if self.map_icon_id == 65535:
                    self.map_icon_id = -1
            elif attribute_id == 16:
                self.shading_type = struct.unpack("B", buffer.read(1))[0]
            else:
                print(f"[OverlayFloor] Unknown attribute ID: {attribute_id}")

    def _convert_rgb_to_hsl(self, rgb_value: int):
        """Convert an RGB color to HSL and compute packed HSL for the overlay."""
        r = ((rgb_value >> 16) & 0xFF) / 256.0
        g = ((rgb_value >> 8) & 0xFF) / 256.0
        b = (rgb_value & 0xFF) / 256.0

        min_val = min(r, g, b)
        max_val = max(r, g, b)
        lightness = (min_val + max_val) / 2.0

        hue = 0.0
        saturation = 0.0

        if min_val != max_val:
            if lightness < 0.5:
                saturation = (max_val - min_val) / (max_val + min_val)
            else:
                saturation = (max_val - min_val) / (2.0 - max_val - min_val)

            if r == max_val:
                hue = (g - b) / (max_val - min_val)
            elif g == max_val:
                hue = 2.0 + (b - r) / (max_val - min_val)
            else:
                hue = 4.0 + (r - g) / (max_val - min_val)

        hue /= 6.0

        self.hue = int(hue * 256.0)
        self.saturation = max(0, min(255, int(saturation * 256.0)))
        self.lightness = max(0, min(255, int(lightness * 256.0)))

        if lightness > 0.5:
            self.hue_weight = int((1.0 - lightness) * saturation * 512.0)
        else:
            self.hue_weight = int(lightness * saturation * 512.0)

        if self.hue_weight < 1:
            self.hue_weight = 1

        self.hue_multiplier = int(hue * self.hue_weight)
        self.hsl_packed = self._pack_hsl(self.hue, self.saturation, self.lightness)

    def _pack_hsl(self, hue: int, saturation: int, lightness: int) -> int:
        """Pack HSL into the game's 16-bit HSL format."""
        if lightness > 179:
            saturation //= 2
        if lightness > 192:
            saturation //= 2
        if lightness > 217:
            saturation //= 2
        if lightness > 243:
            saturation //= 2
        return ((hue // 4) << 10) + ((saturation // 32) << 7) + (lightness // 2)

def overlay_to_dict(idx: int, ov: OverLayFlo317) -> dict:
    """Return the JS-friendly dict (numbers stay ints – stringify later)."""
    return {
        "id"         : idx,                         # overlay index
        "rgb"        : ov.rgb,                      # 0xRRGGBB as int
        "hex"        : f"#{ov.rgb:06X}",            # "#RRGGBB"
        "textureId"  : ov.texture_id,               # -1 if none
        "walkable"   : ov.is_walkable,
        #
        # same naming scheme you used for underlays:
        "hsl"        : {
            "h": ov.hue,              # 0-255   (NOT h6)
            "s": ov.saturation,       # 0-255
            "l": ov.lightness         # 0-255
        },
        "hueMultiplier" : ov.hue_multiplier,
        "weightedHue"   : ov.hue_weight,
        # anything else you find useful
        "minimapColor"  : ov.hsl_packed             # packed 15-bit HSL
    }

# Load raw bytes from file
archives = build_archive_map(2)           # scans idx0 and opens archives
data = get_file_data(archives, "flo2.dat")

# Parse overlays
OverLayFlo317.load_from_bytes(data)

# Print all overlays with their key info
for idx, overlay in enumerate(OverLayFlo317.overlays):
    print(f"Overlay {idx}: RGB={hex(overlay.rgb)}, "
          f"Texture={overlay.texture_id}, "
          f"HSL=({overlay.hue}, {overlay.saturation}, {overlay.lightness})")
    
# build list
overlay_json = [overlay_to_dict(i, ov)
                for i, ov in enumerate(OverLayFlo317.overlays)]

#out_path = pathlib.Path("overlays.json")
#out_path.write_text(json.dumps(overlay_json, indent=2))
#print(f"Wrote {len(overlay_json)} overlays → {out_path.resolve()}")
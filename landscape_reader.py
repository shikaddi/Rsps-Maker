# -*- coding: utf-8 -*-
"""
Created on Wed Aug  6 22:55:19 2025

@author: shika
"""

# works

import gzip
from io import BytesIO
from lxml import etree

def decode_tile_chunk(gz_data: bytes):
    stream = BytesIO(gzip.decompress(gz_data))
    def get_byte():
        return stream.read(1)[0]

    size = 64
    layers = 4

    heightmap        = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]
    overlay_id       = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]
    overlay_path     = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]  # 0 = no overlay
    overlay_rotation = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]
    render_flags     = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]
    underlay_id      = [[[0 for _ in range(size)] for _ in range(size)] for _ in range(layers)]

    for layer in range(layers):
        for y in range(size):
            for x in range(size):
                render_flags[layer][x][y] = -1
                while True:
                    opcode = get_byte()
                    if opcode == 0:
                        if layer == 0:
                            heightmap[layer][x][y] = 0  # placeholder (client noise normally)
                        else:
                            heightmap[layer][x][y] = heightmap[layer-1][x][y] - 240
                        break

                    elif opcode == 1:
                        height = get_byte()
                        if height == 1:
                            height = 0
                        if layer == 0:
                            heightmap[layer][x][y] = height * 8
                        else:
                            heightmap[layer][x][y] = heightmap[layer-1][x][y] - height * 8
                        break

                    elif 2 <= opcode <= 49:
                        # RS path is 0..11 with 0 = full tile.
                        # Remap to shader mask IDs: 0=transparent (none), 1=full, 2..12=other shapes.
                        overlay_id[layer][x][y] = get_byte() - 1
                        raw_path = (opcode - 2) // 4      # 0..11
                        overlay_path[layer][x][y] = raw_path + 1  # 1..12 (0 means no overlay)
                        overlay_rotation[layer][x][y] = (opcode - 2) & 3  # 0..3

                    elif 50 <= opcode <= 81:
                        # Keep your 0-based convention since your client expects it.
                        render_flags[layer][x][y] = opcode - 50

                    elif opcode >= 82:
                        # Keep your 0-based convention since your client expects it.
                        underlay_id[layer][x][y] = opcode - 82

    return {
        'heightmap': heightmap,
        'overlay_id': overlay_id,
        'overlay_path': overlay_path,           # now 0=transparent, 1=full, 2..12=other masks
        'overlay_rotation': overlay_rotation,   # 0..3
        'render_flags': render_flags,
        'underlay_id': underlay_id
    }



def generate_tmx_from_tile_data(tile_data: dict, width=64, height=64, tilewidth=1, tileheight=1) -> str:
    """
    Generate a TMX string using the tile data (heightmap, overlay_id, underlay_id, etc.).
    All layers are CSV-encoded.
    """
    def create_layer(name, data_2d):
        layer = etree.Element("layer", name=name, width=str(width), height=str(height))
        data = etree.SubElement(layer, "data", encoding="csv")
        flat_data = [str(data_2d[x][y]) for y in range(height) for x in range(width)]
        data.text = ",".join(flat_data)
        return layer

    map_elem = etree.Element("map", version="1.10", tiledversion="1.10.2",
                             orientation="orthogonal", renderorder="right-down",
                             width=str(width), height=str(height),
                             tilewidth=str(tilewidth), tileheight=str(tileheight))

    layers_to_add = {
        "heightmap": tile_data['heightmap'],
        "overlay_id": tile_data['overlay_id'],
        "overlay_path": tile_data['overlay_path'],
        "overlay_rotation": tile_data['overlay_rotation'],
        "render_flags": tile_data['render_flags'],
        "underlay_id": tile_data['underlay_id'],
    }

    for layer_name, layer_data in layers_to_add.items():
        for z in range(len(layer_data)):
            map_elem.append(create_layer(f"{layer_name}_z{z}", layer_data[z]))

    return etree.tostring(map_elem, pretty_print=True, encoding="unicode")

def save_tmx_to_file(tmx_string, filename):
    with open(filename, "w", encoding="utf-8") as f:
        f.write(tmx_string)





with open("650.gz", "rb") as f:
    gz_data = f.read()

chunk = decode_tile_chunk(gz_data)

# Generate the TMX content string
tmx_output = generate_tmx_from_tile_data(chunk)
save_tmx_to_file(tmx_output, "test.tmx")


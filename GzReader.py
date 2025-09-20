# -*- coding: utf-8 -*-
"""
Created on Tue Aug  5 22:50:21 2025

@author: shika
"""

import struct

def readIndex(file = 'map_index.dat'):
    # List of IDs to ignore
    dnt_use = {5181, 5182, 5183, 5184, 5180, 5179, 5175, 5176, 4014, 3997, 5314, 5315, 5172}
    
    # Load and decompress the map_index.gz file
    with open(file, 'rb') as f:
        data = f.read()
    
    # Read the number of entries (first 2 bytes as unsigned short)
    map_count = struct.unpack_from('>H', data, 0)[0]
    map_hashes = []
    landscape_ids = []
    object_ids = []
    print(len(data))
    offset = 2  # Start after the map_count
    
    for i in range(map_count):
        map_hash, landscape_id, object_id = struct.unpack_from('>HHH', data, offset)
        offset += 6
    
        # Apply filtering logic
        if landscape_id in dnt_use:
            landscape_id = -1
        if object_id in dnt_use:
            object_id = -1
    
        map_hashes.append(map_hash)
        landscape_ids.append(landscape_id)
        object_ids.append(object_id)
    
    # ✅ Now you have three lists: map_hashes, landscape_ids, object_ids
    for i in range(map_count):
        if map_hashes[i] + landscape_ids[i] + object_ids[i] != 0:
            print(f"Region Hash: {map_hashes[i]}, Landscape ID: {landscape_ids[i]}, Object ID: {object_ids[i]}")

def read_idx_file(path, data=None):
    if data == None:
        with open(path, "rb") as f:
            data = f.read()
    
    entries = []
    offset = 0
    file_id = 0
    
    while offset + 6 <= len(data):
        length = (data[offset]   << 16) | (data[offset+1] << 8) | data[offset+2]
        start  = (data[offset+3] << 16) | (data[offset+4] << 8) | data[offset+5]
        entries.append((file_id, length, start))
        
        offset += 6
        file_id += 1
    
    return entries

            
#readIndex("main_file_cache.idx2")

# Example usage:
#entries = read_idx_file("main_file_cache.idx2")
#for i, length, start in entries[:10]:
#    print(f"File {i}: length={length}, start={start}")

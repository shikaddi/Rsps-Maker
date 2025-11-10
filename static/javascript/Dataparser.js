// Helpers to parse map XML and start the scene
function parseTileDataFromXml(doc, underlaysData) {
  console.log("inside parsTileDataFromXml", underlaysData.length);
  const mapEl = doc.querySelector('map');
  const width = parseInt(mapEl.getAttribute('width'), 10);
  const height = parseInt(mapEl.getAttribute('height'), 10);

  const layerEl = doc.querySelector('layer[name="heightmap_z0"]') || doc.querySelector('layer');
  if (!layerEl) throw new Error('No <layer> found in XML.');
  const dataEl = layerEl.querySelector('data');
  const encoding = dataEl.getAttribute('encoding');
  if (encoding !== 'csv') throw new Error(`Unsupported layer encoding: ${encoding}. Expected 'csv'.`);

  const rawValues = dataEl.textContent
    .trim()
    .split(/[\s,]+/)
    .map(v => parseFloat(v))
    .filter(v => !Number.isNaN(v));

  AssertDimensions(rawValues, width, height);

  // Normalize to [0,1] then scale to heightScale
  const vMin = Math.min(...rawValues);
  const vMax = Math.max(...rawValues);
  const range = (vMax - vMin) || 1;

  // Build a 2D grid of the raw heights (no normalization) for lighting
  const rawGrid = Array.from({ length: height }, (_, z) =>
    Array.from({ length: width }, (_, x) => {
      const idx = z * width + x;
      return rawValues[idx] ?? vMin;
    })
  );

  // Try to fetch an underlay layer (optional). If not found, fallback to a default id.
  function findUnderlayLayer(doc) {
    const layers = Array.from(doc.querySelectorAll('layer'));
    const matchers = [
      /underlay/i, /underlays/i, /ground/i, /underlay_z0/i
    ];
    return layers.find(l => matchers.some(rx => rx.test(l.getAttribute('name') || '')));
  }

  let underlayCSV = null;
  const uLayer = findUnderlayLayer(doc);
  if (uLayer) {
    const uData = uLayer.querySelector('data');
    const uEnc = uData && uData.getAttribute('encoding');
    if (uData && uEnc === 'csv') {
      underlayCSV = uData.textContent
        .trim()
        .split(/[\s,]+/)
        .map(v => parseInt(v, 10))
        .filter(v => !Number.isNaN(v));
      if (underlayCSV.length !== width * height) {
        console.warn(`Underlay layer count (${underlayCSV.length}) != width*height (${width*height}).`);
      }
    } else {
      console.warn('Underlay layer present but not CSV-encoded; ignoring.');
    }
  }

  // Try to fetch an overlay layer (optional). If not found, fallback to a default id.
  function findOverlayLayer(doc) {
    const layers = Array.from(doc.querySelectorAll('layer'));
    const matchers = [
      /overlay/i, /overlays/i, /overlay_id/i, /overlay_id_z0/i
    ];
    return layers.find(l => matchers.some(rx => rx.test(l.getAttribute('name') || '')));
  }

  let overlayCSV = null;
  const oLayer = findOverlayLayer(doc);
  if (oLayer) {
    const oData = oLayer.querySelector('data');
    const oEnc = oData && oData.getAttribute('encoding');
    if (oData && oEnc === 'csv') {
      overlayCSV = oData.textContent
        .trim()
        .split(/[\s,]+/)
        .map(v => parseInt(v, 10))
        .filter(v => !Number.isNaN(v));
      if (overlayCSV.length !== width * height) {
        console.warn(`Overlay layer count (${overlayCSV.length}) != width*height (${width*height}).`);
      }
    } else {
      console.warn('Overlay layer present but not CSV-encoded; ignoring.');
    }
  }
  // Optional overlay shape (mask) and rotation layers
  function findOverlayPathLayer(doc) {
    const layers = Array.from(doc.querySelectorAll('layer'));
    const matchers = [/overlay_path/i, /overlay_mask/i, /pathID/i];
    return layers.find(l => matchers.some(rx => rx.test(l.getAttribute('name') || '')));
  }
  function findOverlayRotationLayer(doc) {
    const layers = Array.from(doc.querySelectorAll('layer'));
    const matchers = [/overlay_rotation/i, /rotation/i];
    return layers.find(l => matchers.some(rx => rx.test(l.getAttribute('name') || '')));
  }

  let overlayPathCSV = null;
  const pLayer = findOverlayPathLayer(doc);
  if (pLayer) {
    const pData = pLayer.querySelector('data');
    const pEnc = pData && pData.getAttribute('encoding');
    if (pData && pEnc === 'csv') {
      overlayPathCSV = pData.textContent
        .trim()
        .split(/[\s,]+/)
        .map(v => parseInt(v, 10))
        .filter(v => !Number.isNaN(v));
      if (overlayPathCSV.length !== width * height) {
        console.warn(`Overlay path count (${overlayPathCSV.length}) != width*height (${width*height}).`);
      }
    } else {
      console.warn('Overlay path layer present but not CSV-encoded; ignoring.');
    }
  }

  let overlayRotCSV = null;
  const rLayer = findOverlayRotationLayer(doc);
  if (rLayer) {
    const rData = rLayer.querySelector('data');
    const rEnc = rData && rData.getAttribute('encoding');
    if (rData && rEnc === 'csv') {
      overlayRotCSV = rData.textContent
        .trim()
        .split(/[\s,]+/)
        .map(v => parseInt(v, 10))
        .filter(v => !Number.isNaN(v));
      if (overlayRotCSV.length !== width * height) {
        console.warn(`Overlay rotation count (${overlayRotCSV.length}) != width*height (${width*height}).`);
      }
    } else {
      console.warn('Overlay rotation layer present but not CSV-encoded; ignoring.');
    }
  }

  // Build per-tile data (normalized heights for geometry)
  const tileData = Array.from({ length: height }, (_, z) =>
    Array.from({ length: width }, (_, x) => {
      const idx = z * width + x;
      const raw = rawValues[idx] ?? vMin;
      const hNorm = (raw - vMin) / range;
      // Choose underlay id per tile, from map if available; fallback to default/global.
      const defaultU = (typeof window !== 'undefined' && typeof window.defaultUnderlayId === 'number')
        ? window.defaultUnderlayId : 61;
      let uId = defaultU;
      if (underlayCSV) {
        const v = underlayCSV[idx] | 0;
        // If using Tiled GIDs, users can pre-map them to RS underlay ids in CSV.
        // Here we assume CSV already contains RS underlay ids.
      const underlaysArr = Array.isArray(underlaysData) ? underlaysData : (typeof underlays !== 'undefined' ? underlays : []);
      if (underlaysArr[v]) uId = v; else uId = defaultU;
      }
      // Choose overlay id per tile, from map if available; fallback to default/global.
      const defaultO = (typeof window !== 'undefined' && typeof window.defaultOverlayId === 'number')
        ? window.defaultOverlayId : 0;
      let oId = defaultO;
      if (overlayCSV) {
        const ov = overlayCSV[idx] | 0;
        // No validation against a table yet; store as-is for later processing.
        oId = ov;
      }
      const oShape = overlayPathCSV ? (overlayPathCSV[idx] | 0) : 0;
      const oRot = overlayRotCSV ? ((overlayRotCSV[idx] | 0) % 4) : 0;
      return {
        height: hNorm * heightScale,
        underlayId: uId,
        overlayId: oId,
        overlayShape: oShape,
        overlayRot: oRot
      };
    })
  );

  // Geometry heights (normalized) for mesh positions
  const nodeHeights = buildNodeHeights(tileData);
  // Lighting heights (raw) for proper slope-based brightness
  // Allow optional global lighting-only height scaling (default 1)
  const kLight = (typeof window !== 'undefined' && typeof window.lightingHeightScale === 'number')
    ? window.lightingHeightScale
    : (typeof lightingHeightScale === 'number' ? lightingHeightScale : 1);
  const scaledRawGrid = (kLight === 1)
    ? rawGrid
    : rawGrid.map(row => row.map(v => v * kLight));
  const nodeHeightsRaw = buildNodeHeightsFromGrid(scaledRawGrid);
  const vertexBrightness = buildVertexBrightness(nodeHeightsRaw);

  // Pre-lit per-tile colors are no longer used (palette-based path). Removed.

  return { width, height, tileData, nodeHeights, vertexBrightness };
}
/**
 * Build a (grid+1 x grid+1) node-height array from your per-tile heights.
 * RS tiles store heights at *grid nodes*. If your tileData has only one
 * height per tile (center), we just copy that value to all four corners.
 * If you already have node heights from the map decoder, plug them in here.
 */
function buildNodeHeights(tileData) {
  const rows = tileData.length;
  const cols = tileData[0].length;
  const H = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

  // For each grid node (z,x), average the centers of up to 4 tiles that touch it
  for (let z = 0; z <= rows; z++) {
    for (let x = 0; x <= cols; x++) {
      let sum = 0, n = 0;
      // tiles touching node (z,x): (z-1,x-1), (z-1,x), (z,x-1), (z,x)
      const tiles = [[z-1,x-1],[z-1,x],[z,x-1],[z,x]];
      for (const [tz, tx] of tiles) {
        if (tz >= 0 && tz < rows && tx >= 0 && tx < cols) {
          sum += tileData[tz][tx].height || 0;
          n++;
        }
      }
      H[z][x] = n ? (sum / n) : 0;
    }
  }
  return H;
}

// Same as buildNodeHeights, but accepts a plain scalar grid [[number]]
function buildNodeHeightsFromGrid(scalarGrid) {
  const rows = scalarGrid.length;
  const cols = scalarGrid[0].length;
  const H = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

  for (let z = 0; z <= rows; z++) {
    for (let x = 0; x <= cols; x++) {
      let sum = 0, n = 0;
      const tiles = [[z-1,x-1],[z-1,x],[z,x-1],[z,x]];
      for (const [tz, tx] of tiles) {
        if (tz >= 0 && tz < rows && tx >= 0 && tx < cols) {
          sum += scalarGrid[tz][tx] || 0;
          n++;
        }
      }
      H[z][x] = n ? (sum / n) : 0;
    }
  }
  return H;
}
/**
 * Calculate per-vertex brightness rawValues (0–255) for each grid node.
 *
 * This simulates RuneScape’s terrain shading: each node brightness is based
 * on the slope (height gradient) and a fixed directional light vector.
 *
 * Formula:
 *   dx = height[x-1,z] - height[x+1,z]
 *   dz = height[x,z-1] - height[x,z+1]
 *   normal = (dx, 256, dz) normalized
 *   brightness = 96 + dot(normal, lightVector) / 768
 *
 * @param {number[][]} heights  2D array of node heights (grid+1 × grid+1)
 * @returns {number[][]} brightness rawValues per node (0–255)
 */
function buildVertexBrightness(H) {
  const zCount = H.length, xCount = H[0].length;
  const out = Array.from({ length: zCount }, () => new Array(xCount).fill(128));

  ditherDebug(); // if optional dither constant is used.

  for (let z = 0; z < zCount; z++) {
    for (let x = 0; x < xCount; x++) {
      const xm1 = Math.max(0, x - 1);
      const xp1 = Math.min(xCount - 1, x + 1);
      const zm1 = Math.max(0, z - 1);
      const zp1 = Math.min(zCount - 1, z + 1);

      const dx = H[z][xm1] - H[z][xp1];
      const dz = H[zm1][x] - H[zp1][x];

      const l2 = Math.sqrt(dx*dx + 65536 + dz*dz) || 1; // 256^2 = 65536
      const j3 = (dx   << 8) / l2;
      const k3 = (256  << 8) / l2;
      const l3 = (dz   << 8) / l2;

      let light = 96 + (j3 * -50 + k3 * -10 + l3 * -50) / 768;
      // Subtract local ambient/dither term (neighbor-weighted noise), mirroring Java's
      //   j17 = (n[z-1][x]>>2) + (n[z+1][x]>>3) + (n[z][x-1]>>2) + (n[z][x+1]>>3) + (n[z][x]>>1)
      if (light < 0)   light = 0;
      if (light > 255) light = 255;

      out[z][x] = light | 0;
    }
  }
  return out;
}

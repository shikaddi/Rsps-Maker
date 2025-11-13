// Resolve a Flask static URL for an asset path under the static folder.
// Expects template to optionally set window.STATIC_BASE = "{{ url_for('static', filename='') }}"
// Falls back to "/static/" if not provided.
function staticUrl(path) {
  const base = (typeof window !== 'undefined' && window.STATIC_BASE) ? String(window.STATIC_BASE) : '/static/';
  const baseNorm = base.endsWith('/') ? base : (base + '/');
  const pathNorm = String(path || '').replace(/^\/+/, '');
  let url = baseNorm + pathNorm;
  // Guard against accidental relative URLs if STATIC_BASE was misconfigured
  if (!/^([a-z]+:)?\/\//i.test(url) && !url.startsWith('/')) {
    url = '/static/' + url.replace(/^\/+/, '');
  }
  return url;
}

// Pack RS HSL to 15-bit
function packRsHsl(h, s, l) {
  const h6 = (h >> 2) & 0x3F;   // 6 bits
  const s3 = (s >> 5) & 0x07;   // 3 bits
  const l7 = (l >> 1) & 0x7F;   // 7 bits
  return (h6 << 10) | (s3 << 7) | l7;
}

// Match reference method187: j' = clamp(2..126, j * (i&0x7F) / 128); return (i&0xFF80) | j'
function applyRsBrightness(packedHsl, j /*0..255 brightness from slope*/ ) {
  if (packedHsl === -1) return 0xBC614E; // client fallback color
  let l = packedHsl & 0x7F;
  let j2 = ((j * l) / 128) | 0;
  if (j2 < 2) j2 = 2;
  else if (j2 > 126) j2 = 126;
  return (packedHsl & 0xFF80) | j2;
}

  // CPU-side corner coverage approximation for overlay masks.
// Rotations: 0..3 clockwise; corners: 0=NW,1=NE,2=SW,3=SE in tile-local frame.
  function coversCorner(shape, rot, corner) {
  const rotCorner = ((corner & 3) - (rot & 3) + 4) & 3;
  switch (shape | 0) {
    case 0: return false; // transparent
    case 1: return true;  // full tile
    case 2: // big diagonal triangle (~50%): NW triangle
      return rotCorner === 0; // only NW
    case 3: // tall triangle (~25%) along left
      return rotCorner === 0 || rotCorner === 2; // NW, SW
    case 4: // mirror of 3 (right)
      return rotCorner === 0 || rotCorner === 1; // NW, NE
    case 5: // inverse of 3
      return !(rotCorner === 0 || rotCorner === 2);
    case 6: // inverse of 4
      return !(rotCorner === 0 || rotCorner === 1);
    case 7: // half-width rectangle (left)
      return rotCorner === 0 || rotCorner === 2; // NW, SW
    case 8: // small triangle (~12.5%)
      return rotCorner === 0; // NW
    case 9: // inverse of 8
      return rotCorner !== 0;
    case 10: // quarter circle inverse (approx): far corner only
      return rotCorner === 3; // SE in canonical
    case 11: // quarter circle (approx): the three near corners
      return rotCorner === 0 || rotCorner === 1 || rotCorner === 2;
    case 12: // thin trapezoid near right edge (per description)
      return rotCorner === 1 || rotCorner === 3; // NE, SE
    default:
      return false;
  }

  // Expose current render context for debug helpers
  try {
    window._rsCtx = {
      tileData,
      overlayPresentGrid,
      baseH_U, baseS_U, baseL_U,
      baseH_O, baseS_O, baseL_O,
      vertexBrightness,
      tileSize
    };
  } catch {}

  // Debug: dump shader-equivalent evaluation for a specific tile at its center
  // Usage from console: window.dumpTileShaderEval(58, 34)
  window.dumpTileShaderEval = function dumpTileShaderEval(tz, tx) {
    try {
      tz = tz|0; tx = tx|0;
      if (tz < 0 || tz >= tileData.length || tx < 0 || tx >= tileData[0].length) {
        console.warn('Tile out of range'); return;
      }
      const t = tileData[tz][tx];
      const present = overlayPresentGrid[tz][tx];
      const uH = baseH_U[tz][tx]|0, uS = baseS_U[tz][tx]|0, uL = baseL_U[tz][tx]|0;
      const oH = baseH_O[tz][tx]|0, oS = baseS_O[tz][tx]|0, oL = baseL_O[tz][tx]|0;
      const shape = (t.overlayShape|0), rot = (t.overlayRot|0)&3;
      // shader UV at tile center (0.5,0.5), rotated
      function rotateUV(uvx, uvy, r){
        if (r===0) return [uvx, uvy];
        if (r===1) return [1-uvy, uvx];
        if (r===2) return [1-uvx, 1-uvy];
        return [uvy, 1-uvx];
      }
      function maskCovers(maskId, uvx, uvy){
        if (maskId===0) return false;
        if (maskId===1) return true;
        if (maskId===2) return (uvx+uvy) <= 1;
        if (maskId===3) return (2*uvx+uvy) <= 1;
        if (maskId===4) return (2*(1-uvx)+uvy) <= 1;
        if (maskId===5) return !((2*uvx+uvy) <= 1);
        if (maskId===6) return !((2*(1-uvx)+uvy) <= 1);
        if (maskId===7) return uvx <= 0.5;
        if (maskId===8) return (2*uvx+2*uvy) <= 1;
        if (maskId===9) return !((2*uvx+2*uvy) <= 1);
        if (maskId===10) { const dx=uvx-1, dy=uvy-1; return Math.hypot(dx,dy) > 1; }
        if (maskId===11) { const dx=uvx, dy=uvy;     return Math.hypot(dx,dy) <= 1; }
        if (maskId===12) return (uvx >= 0.8) && (uvy >= (1-uvx)) && (uvy <= uvx);
        return false;
      }
      const uv = rotateUV(0.5, 0.5, rot);
      const cover = present && maskCovers(shape, uv[0], uv[1]);
      const H = cover ? oH : uH;
      const S = cover ? oS : uS;
      const L = cover ? oL : uL;
      const H6 = (H>>2)&63, S3=(S>>5)&7, L7=(L>>1)&127;
      // approximate center-of-tile brightness by averaging 4 node ks
      const kNW = vertexBrightness[tz][tx]|0;
      const kNE = vertexBrightness[tz][tx+1]|0;
      const kSW = vertexBrightness[tz+1][tx]|0;
      const kSE = vertexBrightness[tz+1][tx+1]|0;
      let k = Math.round((kNW + kNE + kSW + kSE) / 4);
      const kScale = (typeof window !== 'undefined' && typeof window.brightnessScale === 'number') ? window.brightnessScale : 1;
      const kBias  = (typeof window !== 'undefined' && typeof window.brightnessBias  === 'number') ? window.brightnessBias  : 0;
      k = Math.max(0, Math.min(255, Math.round(k * kScale + kBias)));
      let j2 = Math.floor((k * L7) / 128);
      if (j2 < 2) j2 = 2; else if (j2 > 126) j2 = 126;
      const idx = H6*1024 + S3*128 + j2;
      const entry = window.HslToRgb && window.HslToRgb[idx];
      let hex;
      if (typeof entry === 'number') {
        const r=(entry>>>16)&255, g=(entry>>>8)&255, b=entry&255;
        hex = '#'+r.toString(16).padStart(2,'0')+g.toString(16).padStart(2,'0')+b.toString(16).padStart(2,'0');
      } else hex = entry;
      console.groupCollapsed(`SHADER EVAL tile tz=${tz} tx=${tx} centerUV rot=${rot} cover=${cover}`);
      console.groupEnd();
    } catch(e) {
      console.error('dumpTileShaderEval failed:', e);
    }
  };
}

// debugTileColor_WithClientPalette moved to debug.js (window.debugTileColor_WithClientPalette)

function attenuateSatForLightness(s, l) {
  let s2 = s|0;
  if (l > 179) s2 >>= 1;
  if (l > 192) s2 >>= 1;
  if (l > 217) s2 >>= 1;
  if (l > 243) s2 >>= 1;
  return s2;
}

function buildBlendedBaseHsl(tileIdGrid /* grid[z][x] */, dataset /* underlays|overlays */) {
  const h = tileIdGrid.length, w = tileIdGrid[0].length;
  const baseH = Array.from({length: h}, () => new Array(w).fill(0));
  const baseS = Array.from({length: h}, () => new Array(w).fill(0));
  const baseL = Array.from({length: h}, () => new Array(w).fill(0));

  const R = 2; // 5x5 window
  for (let z = 0; z < h; z++) {
    for (let x = 0; x < w; x++) {
      let sumWH = 0, sumHM = 0, sumH = 0, sumS = 0, sumL = 0, cnt = 0;
      for (let dz = -R; dz <= R; dz++) {
        const zz = z + dz; if (zz < 0 || zz >= h) continue;
        for (let dx = -R; dx <= R; dx++) {
          const xx = x + dx; if (xx < 0 || xx >= w) continue;
          const uId = tileIdGrid[zz][xx];
          const U = dataset[uId];
          if (!U) continue;
          const hm = (U.hueMultiplier|0);
          const hh = (U.hsl?.h|0);
          // RS blends use (hue * hueMultiplier) / hueMultiplier
          sumWH += (hh * hm);
          sumHM += hm;
          sumH  += hh;
          sumS  += (U.hsl?.s|0);
          sumL  += (U.hsl?.l|0);
          cnt++;
        }
      }
      let H = 0, S = 0, L = 0;
      if (sumHM > 0) H = ((sumWH / sumHM) | 0) & 255;
      else if (cnt > 0) H = ((sumH / cnt) | 0) & 255; // fallback when all hueMultipliers are 0
      if (cnt > 0) {
        S = (sumS / cnt) | 0;
        L = (sumL / cnt) | 0;
      }
      S = attenuateSatForLightness(S, L);
      baseH[z][x] = H; baseS[z][x] = S; baseL[z][x] = L;
    }
  }
  return { baseH, baseS, baseL };
}

// Overlays path: build base HSL per tile with no 5x5 blending
function buildPerTileBaseHsl(tileIdGrid /* grid[z][x] */, dataset /* overlays */) {
  const h = tileIdGrid.length, w = tileIdGrid[0].length;
  const baseH = Array.from({length: h}, () => new Array(w).fill(0));
  const baseS = Array.from({length: h}, () => new Array(w).fill(0));
  const baseL = Array.from({length: h}, () => new Array(w).fill(0));
  for (let z = 0; z < h; z++) {
    for (let x = 0; x < w; x++) {
      const id = tileIdGrid[z][x] | 0;
      const O = dataset[id];
      if (id === -1 || !O) { baseH[z][x]=0; baseS[z][x]=0; baseL[z][x]=0; continue; }
      let H = (O.hsl?.h|0) & 255;
      let S = (O.hsl?.s|0) & 255;
      let L = (O.hsl?.l|0) & 255;
      S = attenuateSatForLightness(S, L);
      baseH[z][x] = H; baseS[z][x] = S; baseL[z][x] = L;
    }
  }
  return { baseH, baseS, baseL };
}

function nodeBaseHslOverlayAware(vz, vx, baseH_U, baseS_U, baseL_U, baseH_O, baseS_O, baseL_O, overlayPresentGrid, tileData) {
  // Choose a single owning tile for this node (top-left of tile tz=vz, tx=vx) to match client behavior.
  const h = baseH_U.length, w = baseH_U[0].length;
  const tz = Math.min(Math.max(vz, 0), h - 1);
  const tx = Math.min(Math.max(vx, 0), w - 1);

  const ignoreOverlays = (typeof window !== 'undefined' && !!window.IGNORE_OVERLAYS);
  if (!ignoreOverlays && tz >= 0 && tx >= 0 && tz < overlayPresentGrid.length && tx < overlayPresentGrid[0].length) {
    if (overlayPresentGrid[tz][tx]) {
      // Determine corner index of this node relative to owning tile
      let corner = 0; // 0=NW,1=NE,2=SW,3=SE
      if (vz === tz && vx === tx) corner = 0;
      else if (vz === tz && vx === tx + 1) corner = 1;
      else if (vz === tz + 1 && vx === tx) corner = 2;
      else corner = 3;
      const shape = (tileData[tz][tx].overlayShape | 0) || 0;
      const rot = (tileData[tz][tx].overlayRot | 0) & 3;
      if (coversCorner(shape, rot, corner)) {
        return { h: baseH_O[tz][tx]|0, s: baseS_O[tz][tx]|0, l: baseL_O[tz][tx]|0 };
      }
    }
  }

  // Underlay per-tile HSL (already attenuated once when building baseS_U/baseL_U)
  return { h: baseH_U[tz][tx]|0, s: baseS_U[tz][tx]|0, l: baseL_U[tz][tx]|0 };
}

window.buildPaletteTexture = function buildPaletteTexture(scene, HslToRgb) {
  const size = 256;
  const data = new Uint8Array(size * size * 4);

  for (let i = 0; i < 65536; i++) {
    const entry = HslToRgb[i];
    let r, g, b;
    if (typeof entry === 'number') {
      r = (entry >>> 16) & 0xFF;
      g = (entry >>>  8) & 0xFF;
      b = (entry       ) & 0xFF;
    } else {
      const c = BABYLON.Color3.FromHexString(entry);
      r = Math.round(c.r * 255);
      g = Math.round(c.g * 255);
      b = Math.round(c.b * 255);
    }
    const o = i * 4;
    data[o+0] = r;
    data[o+1] = g;
    data[o+2] = b;
    data[o+3] = 255;
  }
  const tex = BABYLON.RawTexture.CreateRGBATexture(
      data, size, size, scene,
      /*generateMipMaps*/ false,
      /*invertY*/ false,
      BABYLON.Texture.NEAREST_SAMPLINGMODE
    );
    tex.wrapU = tex.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    return tex;
};
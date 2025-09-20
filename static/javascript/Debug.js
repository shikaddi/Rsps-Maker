// RuneScape directional light (northwest, angled down)
const tileSize = 1;
let gridSize = 10; // will be overridden by the map
const heightScale = 5; // scales the final height range
// Lighting-only height multiplier (does not affect mesh height).
// Use window.* so Dataparser can read it reliably.
window.lightingHeightScale = 4;
// Slight brightness boost towards target desert shades
window.brightnessScale = 1;
window.brightnessBias = 0; // try 8..16 as needed
// Default underlay id if map lacks underlay layer
window.defaultUnderlayId = 61;
// Default overlay id if map lacks overlay layer -1 means no overlay
window.defaultOverlayId = -1;
// Toggle extra debug logs (palette indices, hex, etc.)
window.DEBUG_TILES = true;
window.USE_UNDERLAY_RAW_HSL = true;
window.DITHER_SCALE = 0;
// Toggle underlay-id overlay (draws ids on top of tiles)
window.SHOW_UNDERLAY_OVERLAY = false;
// Toggle overlay-id overlay (draws overlay ids on top of tiles; -1 shows nothing)
window.SHOW_OVERLAY_OVERLAY = false;
// Toggle mask-id overlay (draws overlay mask IDs per tile)
window.SHOW_MASK_OVERLAY = false;
// Toggle tile coordinate overlay (draws z,x at tile centers)
window.SHOW_COORD_OVERLAY = false;
// Toggle grid overlay (projects tile edges to screen)
window.SHOW_TILE_GRID = false;
// Optional grid style knobs
window.GRID_LINE_WIDTH = 1;
window.GRID_COLOR = '#ffff00'; // stroke color
window.GRID_ALPHA = 0.35;      // 0..1
window.GRID_STRIDE = 1;        // draw every Nth line (1 = all)

// Debug helpers: catch bad color inputs and surface async errors
(() => {
  // Log and break if FromHexString is called with a non-string
  const C3 = BABYLON?.Color3;
  const C4 = BABYLON?.Color4;
  if (C3 && typeof C3.FromHexString === 'function') {
    const orig = C3.FromHexString;
    C3.FromHexString = function (arg) {
      if (typeof arg !== 'string') {
        console.error('Color3.FromHexString called with non-string:', arg, typeof arg);
        debugger; // Pause in devtools to inspect the stack and caller
      }
      return orig.call(this, arg);
    };
  }
  if (C4 && typeof C4.FromHexString === 'function') {
    const orig4 = C4.FromHexString;
    C4.FromHexString = function (arg) {
      if (typeof arg !== 'string') {
        console.error('Color4.FromHexString called with non-string:', arg, typeof arg);
        debugger;
      }
      return orig4.call(this, arg);
    };
  }
  // Surface unhandled rejections
  window.addEventListener('unhandledrejection', (ev) => {
    console.error('Unhandled promise rejection:', ev.reason);
    // Optional: pause on promise errors
    // debugger;
  });
})();

// Assert: index must match id for O(1) lookup via underlays[id]
// Validate `underlays` structure after it loads; warn instead of throwing.
(function validateUnderlaysOrder() {
  if (typeof window === 'undefined') return;
  const run = () => {
    const arr = window.underlays;
    if (!Array.isArray(arr)) return; // not loaded yet
    const badIndex = arr.findIndex((u, i) => !u || u.id !== i);
    if (badIndex !== -1) {
      const got = arr[badIndex] && arr[badIndex].id;
      console.warn(`underlays not index-aligned: at index ${badIndex} got id ${got}`);
    }
    console.log("tested underlays in underlays.js", typeof arr);
  };
  if (Array.isArray(window.underlays)) run();
  else window.addEventListener('load', run);
})();

// Dataparser debugs

function AssertDimensions(rawValues, width, height){
  if (rawValues.length !== width * height) {
    console.warn(`Layer value count (${rawValues.length}) does not match width*height (${width * height}).`);
  }
}

function ditherDebug(){
  // Dither configuration (optional constant only; RS dump removed)
  const ditherScale = (typeof window !== 'undefined' && typeof window.DITHER_SCALE === 'number') ? window.DITHER_SCALE : 0.5;
  const j17Const = (typeof window !== 'undefined' && typeof window.J17_CONST === 'number') ? (window.J17_CONST | 0) : null;
  // Expose inputs for debug tracing (previous __j17Grid removed)
  try { if (typeof window !== 'undefined') { window.__brightnessInputHeights = H; } } catch {}
  if (typeof window !== 'undefined' && window.LOG_DITHER_STATS) {
    if (j17Const !== null) console.log('[DITHER] source=constant', j17Const);
    else console.log('[DITHER] disabled (no RS dump provided)');
  }
}

// GenerateScene debug

function singleTileDebug(x, z, h6, s3, l7, k){
  // Optional debug logging
  if (typeof window !== 'undefined' && window.DEBUG_TILES) {
    if ((z % 16 === 0) && (x % 16 === 0)) {
      const idxCPU = (h6<<10) | (s3<<7) | l7;
      const hexCPU = (typeof HslToRgb[idxCPU] === 'number')
        ? '#' + ((HslToRgb[idxCPU]>>>16)&0xFF).toString(16).padStart(2,'0')
              + ((HslToRgb[idxCPU]>>> 8)&0xFF).toString(16).padStart(2,'0')
              + ((HslToRgb[idxCPU]     )&0xFF).toString(16).padStart(2,'0')
        : HslToRgb[idxCPU];
      console.log(`DBG vtx(${z},${x}) H6=${h6} S3=${s3} L7=${l7} k=${k} hex=${hexCPU}`);
    }
  }
}

// The detailed tile/node trace needs data from GenerateScene.
// Expose a helper that GenerateScene can call with explicit context.
window.singleTileTrace = function singleTileTrace(ctx) {
  try {
    if (typeof window === 'undefined') return;
    if (!window.DEBUG_ONE_TILE) return;
    const {
      tileData,
      vertsPerSide,
      overlaysEffective,
      overlayPresentGrid,
      baseH_U, baseS_U, baseL_U,
      baseH_O, baseS_O, baseL_O,
      vertexBrightness,
      tileSize,
    } = ctx || {};
    if (!tileData || !Array.isArray(tileData)) return;

    const cfg = window.DEBUG_ONE_TILE;
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    let tz = (Number.isInteger(cfg.tileZ) ? cfg.tileZ : 0) | 0;
    let tx = (Number.isInteger(cfg.tileX) ? cfg.tileX : 0) | 0;
    tz = clamp(tz, 0, tileData.length - 1);
    tx = clamp(tx, 0, tileData[0].length - 1);

    const nodes = [
      { name: 'NW', nz: tz,     nx: tx     },
      { name: 'NE', nz: tz,     nx: tx + 1 },
      { name: 'SW', nz: tz + 1, nx: tx     },
      { name: 'SE', nz: tz + 1, nx: tx + 1 },
    ].filter(n => n.nz >= 0 && n.nz < vertsPerSide && n.nx >= 0 && n.nx < vertsPerSide);

    const results = [];
    console.groupCollapsed(`TRACE ONE TILE tz=${tz} tx=${tx}`);
    const uId = tileData[tz][tx].underlayId|0;
    const oId = tileData[tz][tx].overlayId|0;
    const U = (typeof underlays !== 'undefined') ? underlays[uId] : null;
    const O = overlaysEffective ? overlaysEffective[oId] : null;
    console.log('Tile ids:', { uId, oId, overlayPresent: overlayPresentGrid && overlayPresentGrid[tz] ? overlayPresentGrid[tz][tx] : null });
    console.log('Underlay raw HSL:', U?.hsl);
    if (baseH_U && baseS_U && baseL_U) console.log('Underlay per-tile HSL:', { h: baseH_U[tz][tx]|0, s: baseS_U[tz][tx]|0, l: baseL_U[tz][tx]|0 });
    if (oId !== -1 && O && baseH_O && baseS_O && baseL_O) console.log('Overlay per-tile HSL:', { h: baseH_O[tz][tx]|0, s: baseS_O[tz][tx]|0, l: baseL_O[tz][tx]|0 });

    for (const n of nodes) {
      const owning = nodeBaseHslOverlayAware(n.nz, n.nx, baseH_U, baseS_U, baseL_U, baseH_O, baseS_O, baseL_O, overlayPresentGrid, tileData);
      const packed = packRsHsl(owning.h|0, owning.s|0, owning.l|0) & 0xFFFF;
      const k = (vertexBrightness && vertexBrightness[n.nz] && vertexBrightness[n.nz][n.nx]) | 0;
      const idx = applyRsBrightness(packed, k) & 0xFFFF;
      const hex = window.HslToRgb ? window.HslToRgb[idx] : undefined;
      const H6 = (owning.h>>2)&63, S3 = (owning.s>>5)&7, L7 = idx & 0x7F;
      console.groupCollapsed(`${n.name} node(${n.nz},${n.nx})`);
      console.log('Chosen node HSL:', owning);
      console.log('Packed (pre-bright):', packed, 'H6/S3:', {H6, S3});
      console.log('Brightness k:', k);
      console.log('After method187 -> L7:', L7, 'palette idx:', idx, 'hex:', hex);
      console.groupEnd();

      results.push({ corner:n.name, nz:n.nz, nx:n.nx, owning, packed, H6, S3, k, L7, idx, hex });
    }
    console.groupEnd();
  window.__oneTileTrace = { tz, tx, results };
  } catch {}
};

// Global helper: shader-equivalent dump at tile center using current scene context
window.dumpTileShaderEval = window.dumpTileShaderEval || function(tz, tx) {
  try {
    const C = window._rsCtx;
    if (!C) { console.warn('No render context yet; load a map first.'); return; }
    const { tileData, overlayPresentGrid, baseH_U, baseS_U, baseL_U, baseH_O, baseS_O, baseL_O, vertexBrightness, tileSize } = C;
    tz = tz|0; tx = tx|0;
    if (tz < 0 || tz >= tileData.length || tx < 0 || tx >= tileData[0].length) { console.warn('Tile out of range'); return; }
    const t = tileData[tz][tx];
    const present = overlayPresentGrid[tz][tx];
    const uH = baseH_U[tz][tx]|0, uS = baseS_U[tz][tx]|0, uL = baseL_U[tz][tx]|0;
    const oH = baseH_O[tz][tx]|0, oS = baseS_O[tz][tx]|0, oL = baseL_O[tz][tx]|0;
    const shape = (t.overlayShape|0), rot = (t.overlayRot|0)&3;
    function rotUV(x,y,r){ if(r===0) return [x,y]; if(r===1) return [1-y,x]; if(r===2) return [1-x,1-y]; return [y,1-x]; }
    function maskCovers(id, x,y){
      if(id===0) return false; if(id===1) return true; if(id===2) return x+y<=1; if(id===3) return 2*x+y<=1; if(id===4) return 2*(1-x)+y<=1;
      if(id===5) return !(2*x+y<=1); if(id===6) return !(2*(1-x)+y<=1); if(id===7) return x<=0.5; if(id===8) return 2*x+2*y<=1; if(id===9) return !(2*x+2*y<=1);
      if(id===10){ const dx=x-1,dy=y-1; return Math.hypot(dx,dy)>1;} if(id===11){ const dx=x,dy=y; return Math.hypot(dx,dy)<=1;} if(id===12) return (x>=0.8)&&(y>=1-x)&&(y<=x);
      return false;
    }
    const uv = rotUV(0.5,0.5,rot);
    const cover = present && maskCovers(shape, uv[0], uv[1]);
    const H = cover ? oH : uH, S = cover ? oS : uS, L = cover ? oL : uL;
    const H6=(H>>2)&63,S3=(S>>5)&7,L7=(L>>1)&127;
    const kNW=vertexBrightness[tz][tx]|0, kNE=vertexBrightness[tz][tx+1]|0, kSW=vertexBrightness[tz+1][tx]|0, kSE=vertexBrightness[tz+1][tx+1]|0;
    let k=Math.round((kNW+kNE+kSW+kSE)/4);
    const kScale=(typeof window.brightnessScale==='number')?window.brightnessScale:1;
    const kBias =(typeof window.brightnessBias==='number')?window.brightnessBias:0;
    k=Math.max(0,Math.min(255,Math.round(k*kScale+kBias)));
    let j2=Math.floor((k*L7)/128); if(j2<2) j2=2; else if(j2>126) j2=126;
    const idx=H6*1024+S3*128+j2; const entry=window.HslToRgb && window.HslToRgb[idx];
    let hex; if(typeof entry==='number'){ const r=(entry>>>16)&255,g=(entry>>>8)&255,b=entry&255; hex='#'+r.toString(16).padStart(2,'0')+g.toString(16).padStart(2,'0')+b.toString(16).padStart(2,'0'); } else hex=entry;
    console.groupCollapsed(`SHADER EVAL tile tz=${tz} tx=${tx} centerUV rot=${rot} cover=${cover}`);
    console.log('Underlay HSL:', {H:uH,S:uS,L:uL});
    console.log('Overlay  HSL:', {H:oH,S:oS,L:oL});
    console.log('Chosen   HSL:', {H,S,L}, 'H6/S3/L7:', {H6,S3,L7});
    console.log('k:', k, 'j2:', j2, 'palette idx:', idx, 'hex:', hex);
    console.log('shape/rot/present:', {shape, rot, present}, 'uv(rotated):', {x:uv[0], y:uv[1]});
    console.groupEnd();
  } catch(e){ console.error('dumpTileShaderEval failed:', e); }
};

// Make palette color helper available globally
(function(){
  function packRsHsl(h, s, l) {
    const h6 = (h >> 2) & 0x3F;   // 6 bits
    const s3 = (s >> 5) & 0x07;   // 3 bits
    const l7 = (l >> 1) & 0x7F;   // 7 bits
    return (h6 << 10) | (s3 << 7) | l7;
  }
  function applyRsBrightness(packedHsl, j /*0..255*/) {
    if (packedHsl === -1) return 0xBC614E; // client fallback color
    let l = packedHsl & 0x7F;
    let j2 = ((j * l) / 128) | 0;
    if (j2 < 2) j2 = 2; else if (j2 > 126) j2 = 126;
    return (packedHsl & 0xFF80) | j2;
  }
  function attenuateSatForLightness(s, l) {
    let s2 = s|0;
    if (l > 179) s2 >>= 1;
    if (l > 192) s2 >>= 1;
    if (l > 217) s2 >>= 1;
    if (l > 243) s2 >>= 1;
    return s2;
  }
  window.debugTileColor_WithClientPalette = function(underlayId, k /*0..255*/) {
    const arr = (typeof underlays !== 'undefined' && Array.isArray(underlays)) ? underlays : window.underlays;
    const U = arr && arr[underlayId];
    if (!U) { console.warn('Missing underlay', underlayId); return '#ff00ff'; }
    const h = (U.hsl?.h|0);
    const s0 = (U.hsl?.s|0);
    const l = (U.hsl?.l|0);
    const s = attenuateSatForLightness(s0, l);
    const packed = packRsHsl(h, s, l);
    const idx = applyRsBrightness(packed, k|0) & 0xFFFF;
    const table = window.HslToRgb;
    const entry = table ? table[idx] : undefined;
    if (typeof entry === 'number') {
      const r = (entry >>> 16) & 0xFF;
      const g = (entry >>> 8)  & 0xFF;
      const b = (entry)        & 0xFF;
      return '#' + r.toString(16).padStart(2,'0')
                 + g.toString(16).padStart(2,'0')
                 + b.toString(16).padStart(2,'0');
    }
    if (typeof entry === 'string') return entry;
    console.warn('Unexpected palette entry at', idx, entry);
    return '#ff00ff';
  };
})();

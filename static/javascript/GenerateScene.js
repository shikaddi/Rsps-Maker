let paletteTex  = null;

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

async function generateScene(tileData, nodeHeights, vertexBrightness) {
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.5, 0.7, 1.0);

  if(!paletteTex ) {
     paletteTex  = window.buildPaletteTexture(scene, window.HslToRgb);
  }

  // Build 2D grids of underlay/overlay ids per tile
  const underlayIdGrid = tileData.map(row => row.map(t => t.underlayId));
  const overlayIdGrid  = tileData.map(row => row.map(t => t.overlayId));

  // Build overlays dataset with RS fallbacks for early texture ids that have rgb=0
  const overlayFallbackPackedByTexId = [
    /* 0..49 */
    41, 39248, 41, 4643, 41, 41, 41, 41, 41, 41,
    41, 41, 41, 41, 41, 43086, 41, 41, 41, 41,
    41, 41, 41, 8602, 41, 28992, 41, 41, 41, 41,
    41, 5056, 41, 41, 41, 7079, 41, 41, 41, 41,
    41, 41, 41, 41, 41, 41, 3131, 41, 41, 41
  ];

  function unpackPackedHslToHslTriplet(packed) {
    const H6 = (packed >>> 10) & 0x3F;
    const S3 = (packed >>> 7)  & 0x07;
    const L7 = (packed)        & 0x7F;
    // Expand back to 0..255-ish domain expected by packRsHsl
    return { h: (H6 << 2), s: (S3 << 5), l: (L7 << 1) };
  }

  const overlayScrollPxPerTick = new Map([
    [1,  { x: 1, y: 0 }],
    [17, { x: 1, y: 0 }],
    [24, { x: 1, y: 0 }],
    [31, { x: 1, y: 0 }],
    [40, { x: 1, y: 0 }],
  ]);
  const OVERLAY_SCROLL_TICK_MS = 20;
  const MAX_OVERLAY_SCROLL_SLOTS = 128;
  const overlayScrollOffsets = new Float32Array(MAX_OVERLAY_SCROLL_SLOTS * 2);
  const overlayScrollSpeeds = new Float32Array(MAX_OVERLAY_SCROLL_SLOTS * 2);
  let overlayScrollState = null;
  const slotScratchCanvas = new Map();
  let atlasCanvas = null;
  let atlasCtx = null;
  let atlasTexCtx = null;
  let atlasSlotMeta = [];

  function redrawAtlasWithOffsets(slotList) {
    if (!atlasTex || !atlasCtx || !atlasTexCtx) return;
    let updated = false;
    for (let i = 0; i < slotList.length; i++) {
      const slot = slotList[i];
      if (slot < 0 || slot >= atlasSlotMeta.length) continue;
      const meta = atlasSlotMeta[slot];
      if (!meta || !meta.image) continue;
      const base = slot * 2;
      const fracX = ((overlayScrollOffsets[base] % 1) + 1) % 1;
      const fracY = ((overlayScrollOffsets[base + 1] % 1) + 1) % 1;
      const offsetPxX = fracX * cellSize;
      const offsetPxY = fracY * cellSize;
      let scratch = slotScratchCanvas.get(slot);
      if (!scratch) {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = cellSize;
        slotScratchCanvas.set(slot, { canvas, ctx: canvas.getContext('2d') });
        scratch = slotScratchCanvas.get(slot);
      }
      const { canvas, ctx } = scratch;
      ctx.clearRect(0, 0, cellSize, cellSize);
      for (let dx = -cellSize; dx <= cellSize; dx += cellSize) {
        for (let dy = -cellSize; dy <= cellSize; dy += cellSize) {
          ctx.drawImage(meta.image, dx - offsetPxX, dy - offsetPxY, cellSize, cellSize);
        }
      }
      const destX = meta.col * cellSize;
      const destY = meta.row * cellSize;
      atlasCtx.clearRect(destX, destY, cellSize, cellSize);
      atlasCtx.drawImage(canvas, destX, destY);
      atlasTexCtx.clearRect(destX, destY, cellSize, cellSize);
      atlasTexCtx.drawImage(canvas, destX, destY);
      updated = true;
    }
    if (updated) {
      atlasTex.update(true);
    }
  }

  const overlaysEffective = overlays.map((O) => {
    if (!O || typeof O !== 'object') return O;
    const texId = O.textureId | 0;
    const isZeroRgb = ((O.rgb | 0) === 0);
    if (isZeroRgb && texId >= 0 && texId < overlayFallbackPackedByTexId.length) {
      // Only apply fallback rule for texture ids < 50
      const packed = overlayFallbackPackedByTexId[texId] | 0;
      const { h, s, l } = unpackPackedHslToHslTriplet(packed);
      const copy = { ...O, hsl: { h, s, l } };
      // Ensure a minimal hueMultiplier when saturation > 0 so hue can contribute
      const hm = (copy.hueMultiplier | 0);
      if (hm === 0 && (s | 0) > 0) copy.hueMultiplier = 1;
      return copy;
    }
    // Additional guard: if HSL is present but effectively unusable (very dark), try texture fallback too
    if (O.hsl && ((O.hsl.l | 0) <= 1) && texId >= 0 && texId < overlayFallbackPackedByTexId.length) {
      const packed = overlayFallbackPackedByTexId[texId] | 0;
      const { h, s, l } = unpackPackedHslToHslTriplet(packed);
      const copy = { ...O, hsl: { h, s, l } };
      const hm = (copy.hueMultiplier | 0);
      if (hm === 0 && (s | 0) > 0) copy.hueMultiplier = 1;
      return copy;
    }
    return O;
  });

  // Precompute blended base H,S,L per tile (client-like)
  const { baseH: baseH_U, baseS: baseS_U, baseL: baseL_U } = buildBlendedBaseHsl(underlayIdGrid, underlays);
  // Overlays: per-tile HSL only
  const { baseH: baseH_O, baseS: baseS_O, baseL: baseL_O } = buildPerTileBaseHsl(overlayIdGrid, overlaysEffective);
  // In the reference client, overlay id 0 means "no overlay" (only >0 are valid).
  const overlayPresentGrid = tileData.map(row => row.map(t => {
    const id = (t.overlayId | 0);
    return (id > 0) && !!overlaysEffective[id];
  }));

  // (coversCorner moved to file scope)

  // Camera
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    Math.PI / 4,
    Math.PI / 3,
    20,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  const grid = tileData.length;           // tiles per side
  const vertsPerSide = grid + 1;          // grid nodes
  const positions = [];
  const colors = [];
  const uvs = [];
  const indices = [];
  const normals = [];

  // RGB base-color averaging is obsolete; HSL + palette is used instead.

// ---- Build shared vertices (vertsPerSide ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â vertsPerSide) ----
  for (let z = 0; z < vertsPerSide; z++) {
    for (let x = 0; x < vertsPerSide; x++) {
      const y = nodeHeights[z][x];
      positions.push(x * tileSize, y, z * tileSize);
      uvs.push(x, z);
      // CPU corner masking path disabled in shader mode; keeping here for fallback/testing
      // const { h, s, l } = nodeBaseHslOverlayAware(z, x, baseH_U, baseS_U, baseL_U, baseH_O, baseS_O, baseL_O, overlayPresentGrid, tileData);
      // const packed = packRsHsl(h, s, l);
      // let kDbg = vertexBrightness[z][x] | 0;
      // const adjustedPacked = applyRsBrightness(packed, kDbg) & 0xFFFF;
      // const h6 = (h >> 2) & 63; const s3 = (s >> 5) & 7; const l7 = adjustedPacked & 0x7F;
      // colors.push(h6/63, s3/7, l7/127, 1.0);
      normals.push(0, 1, 0);
      // singleTileDebug(x, z, h6, s3, l7, kDbg);
    }
  }

  // ---- Build indices: two triangles per tile, referencing shared vertices ----
  const idxFor = (vx, vz) => vz * vertsPerSide + vx;
  for (let z = 0; z < grid; z++) {
  for (let x = 0; x < grid; x++) {
      const i00 = idxFor(x,     z);
      const i10 = idxFor(x + 1, z);
      const i01 = idxFor(x,     z + 1);
      const i11 = idxFor(x + 1, z + 1);

      // Match RS winding (front faces up)
      indices.push(i00, i10, i01);
      indices.push(i01, i10, i11);
  }
}

  if (window.singleTileTrace) {
    window.singleTileTrace({
      tileData,
      vertsPerSide,
      overlaysEffective,
      overlayPresentGrid,
      baseH_U, baseS_U, baseL_U,
      baseH_O, baseS_O, baseL_O,
      vertexBrightness,
      tileSize,
    });
  }

  // ---- Create mesh ----
  const mesh = new BABYLON.Mesh("tileGrid", scene);
  const vd = new BABYLON.VertexData();
  vd.positions = positions;
  vd.indices   = indices;
  vd.uvs       = uvs;
  // vd.colors    = colors; // not used by shader path
  const wrapper = new BABYLON.TransformNode('mirrorWrapper', scene);
  mesh.parent = wrapper;
  wrapper.scaling.z = -1;
  const width  = tileData[0].length * tileSize;  // X extent
  const depth  = tileData.length * tileSize;     // Z extent
  //wrapper.position.x = -width * 0.5;  // center X (optional but usually handy)
  wrapper.position.z = depth * 1;  // re-center Z after mirroring
  scene.metadata = scene.metadata || {};
  scene.metadata.mirrorWrapper = wrapper;

  // Compute smooth normals over the shared grid (this follows RSÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ look for slopes)
  BABYLON.VertexData.ComputeNormals(positions, indices, normals);
  vd.normals = normals;

  

  vd.applyToMesh(mesh);

  // Create material (shader path)
  const mat = new BABYLON.ShaderMaterial(
    "rsMat",
    scene,
    { vertex: "rs", fragment: "rs" },
    {
      attributes: ["position", "aK"],
      uniforms: ["worldViewProjection", "world", "uGridSize", "uTileSize", "uAtlasDims", "uHD"],
      samplers: ["uPalette", "uUnderlayTex", "uOverlayTex", "uMaskTex", "uOverlayAtlas", "uOverlayIndex"],
    }
  );
  mat.setTexture("uPalette", paletteTex );
  scene.imageProcessingConfiguration.isEnabled = false;
  const engineRef = scene.getEngine();
  // HD toggle default
  if (typeof window.HD === 'undefined') window.HD = true;
  // Keep shader uniform in sync with window.HD
  scene.onBeforeRenderObservable.add(() => {
    try {
      mat.setFloat('uHD', window.HD ? 1.0 : 0.0);
      mat.setMatrix('world', mesh.getWorldMatrix());
      if (overlayScrollState && overlayScrollState.hasAnimatedSlots) {
        const deltaMs = engineRef.getDeltaTime();
        if (deltaMs > 0) {
          const { slots } = overlayScrollState;
          let dirty = false;
          for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            const base = slot * 2;
            const sx = overlayScrollSpeeds[base];
            const sy = overlayScrollSpeeds[base + 1];
            if (sx === 0 && sy === 0) continue;
            let ox = overlayScrollOffsets[base] + sx * deltaMs;
            let oy = overlayScrollOffsets[base + 1] + sy * deltaMs;
            ox = ox - Math.floor(ox);
            oy = oy - Math.floor(oy);
            if (ox !== overlayScrollOffsets[base] || oy !== overlayScrollOffsets[base + 1]) {
              overlayScrollOffsets[base] = ox;
              overlayScrollOffsets[base + 1] = oy;
              dirty = true;
            }
          }
          if (dirty) {
            redrawAtlasWithOffsets(slots);
          }
        }
      }
    } catch(e) {}
  });

  // Provide per-vertex brightness attribute aK to shader
  const kBuffer = new Float32Array(vertsPerSide * vertsPerSide);
  {
    let i = 0;
    for (let z = 0; z < vertsPerSide; z++) {
      for (let x = 0; x < vertsPerSide; x++) {
        let k = vertexBrightness[z][x] | 0;
        const kScale = (typeof window !== 'undefined' && typeof window.brightnessScale === 'number') ? window.brightnessScale : 1;
        const kBias  = (typeof window !== 'undefined' && typeof window.brightnessBias  === 'number') ? window.brightnessBias  : 0;
        k = Math.max(0, Math.min(255, Math.round(k * kScale + kBias)));
        kBuffer[i++] = k;
      }
    }
  }
  // Bind brightness as an explicit VertexBuffer to avoid driver quirks
  try {
    const aKBuffer = new BABYLON.VertexBuffer(engine, kBuffer, "aK", true, false, 1, false, 0, 1, BABYLON.VertexBuffer.FLOAT, false);
    mesh.setVerticesBuffer(aKBuffer);
  } catch (e) {
    // Fallback to generic setter
    mesh.setVerticesData("aK", kBuffer, true, 1);
  }

  // Build per-tile attribute textures for underlay/overlay HSL and mask
  const gridW = tileData[0].length | 0;
  const gridH = tileData.length | 0;
  const underData = new Uint8Array(gridW * gridH * 4);
  const overData  = new Uint8Array(gridW * gridH * 4);
  const maskData  = new Uint8Array(gridW * gridH * 4);
  for (let z = 0; z < gridH; z++) {
    for (let x = 0; x < gridW; x++) {
      const idx = (z * gridW + x) * 4;
      underData[idx+0] = baseH_U[z][x] & 255;
      underData[idx+1] = baseS_U[z][x] & 255;
      underData[idx+2] = baseL_U[z][x] & 255;
      underData[idx+3] = 255;

      overData[idx+0] = baseH_O[z][x] & 255;
      overData[idx+1] = baseS_O[z][x] & 255;
      overData[idx+2] = baseL_O[z][x] & 255;
      overData[idx+3] = 255;

      const t = tileData[z][x];
      const present = overlayPresentGrid[z][x] ? 1 : 0;
      maskData[idx+0] = (t.overlayShape | 0) & 255;
      maskData[idx+1] = (t.overlayRot   | 0) & 3;
      maskData[idx+2] = present;
      maskData[idx+3] = 255;
    }
  }
  const underTex = BABYLON.RawTexture.CreateRGBATexture(underData, gridW, gridH, scene, false, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  const overTex  = BABYLON.RawTexture.CreateRGBATexture(overData,  gridW, gridH, scene, false, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  const maskTex  = BABYLON.RawTexture.CreateRGBATexture(maskData,  gridW, gridH, scene, false, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  underTex.wrapU = underTex.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
  overTex.wrapU  = overTex.wrapV  = BABYLON.Texture.CLAMP_ADDRESSMODE;
  maskTex.wrapU  = maskTex.wrapV  = BABYLON.Texture.CLAMP_ADDRESSMODE;

  mat.setTexture("uUnderlayTex", underTex);
  mat.setTexture("uOverlayTex",  overTex);
  mat.setTexture("uMaskTex",     maskTex);
  mat.setVector2("uGridSize", new BABYLON.Vector2(gridW, gridH));
  mat.setFloat("uTileSize", tileSize);

  // ---- Build overlay texture atlas and per-tile index texture ----
  // Collect distinct textureIds actually used by present overlays
  const usedTexIdsSet = new Set();
  for (let z = 0; z < gridH; z++) {
    for (let x = 0; x < gridW; x++) {
      if (!overlayPresentGrid[z][x]) continue;
      const t = tileData[z][x];
      const O = overlaysEffective[t.overlayId | 0];
      if (!O) continue;
      const tid = (O.textureId | 0);
      if (tid >= 0) usedTexIdsSet.add(tid);
    }
  }

  const texIds = Array.from(usedTexIdsSet.values()).sort((a, b) => a - b);
  // Simple heuristic for atlas grid
  const cellSize = 64; // px per tile in atlas
  const texCount = texIds.length;
  atlasSlotMeta = new Array(texCount);
  const cols = Math.max(1, Math.ceil(Math.sqrt(Math.max(1, texCount))));
  const rows = Math.max(1, Math.ceil(texCount / cols));
  const atlasW = cols * cellSize;
  const atlasH = rows * cellSize;
  // Load images for each texture id (best effort)
  async function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(new Error('Failed to load ' + src));
      img.src = src;
    });
  }

  // (Removed alpha-bleed pre-process; seams are handled in shader for full-tile overlays)

  const texIndexById = new Map();
  const isIntensityByIndex = new Map();
  const texMetaById = new Map();
  for (const id of texIds) {
    let isIntensity = (id > 51); // baseline rule
    let img = null;
    let sample = null;
    try {
      img = await loadImage(staticUrl(`textures/texture_${id}.png`));
      if (typeof window !== "undefined" && window.DEBUG_ATLAS && img) {
        const tmp = document.createElement("canvas");
        tmp.width = tmp.height = 1;
        const tctx = tmp.getContext("2d");
        tctx.drawImage(img, 0, 0, 1, 1);
        sample = Array.from(tctx.getImageData(0, 0, 1, 1).data);
        console.log(`texture ${id} sample rgba`, sample);
      }
      // Heuristic: treat opaque-near-black textures as intensity masks too
      try {
        const sc = document.createElement('canvas');
        sc.width = img.width; sc.height = img.height;
        const sctx = sc.getContext('2d');
        sctx.clearRect(0,0,sc.width, sc.height);
        sctx.drawImage(img, 0, 0);
        const data = sctx.getImageData(0,0,sc.width, sc.height).data;
        let sum = 0, count = 0;
        for (let p = 0; p < data.length; p += 4) {
          const a = data[p+3];
          if (a < 16) continue; // ignore nearly transparent
          const r = data[p], g = data[p+1], b = data[p+2];
          sum += (r + g + b) / (3 * 255);
          count++;
        }
        if (count > 0) {
          const avg = sum / count;
          if (avg < 0.05) {
            isIntensity = true;
          }
        }
      } catch (e) {
        // ignore analysis errors; keep baseline rule
      }
    } catch (e) {
      console.warn('Overlay texture load failed for id', id, e);
    }
    texMetaById.set(id, { image: img, isIntensity, sample });
  }

  const images = new Array(texCount);
  texIds.forEach((id, index) => {
    const meta = texMetaById.get(id) || { image: null, isIntensity: (id > 51), sample: null };
    texIndexById.set(id, index);
    images[index] = meta.image;
    isIntensityByIndex.set(index, !!meta.isIntensity);
  });
  // Build atlas canvas
  let atlasTex = null;
  if (texCount > 0) {
    const cvs = document.createElement('canvas');
    cvs.width = atlasW; cvs.height = atlasH;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0,0,atlasW,atlasH);
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const cx = (i % cols) * cellSize;
      const cy = Math.floor(i / cols) * cellSize;
      if (img) {
        // Draw image to full cell without gutters
        ctx.drawImage(img, cx, cy, cellSize, cellSize);
      } else {
        // fallback: checkerboard for missing
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(cx, cy, cellSize, cellSize);
      }
      atlasSlotMeta[i] = {
        image: img,
        col: i % cols,
        row: Math.floor(i / cols),
      };
    }
    if (true) {
      const summary = texIds.map((tid, index) => {
        const meta = texMetaById.get(tid) || { sample: null };
        return {
          textureId: tid,
          atlasIndex: index,
          row: Math.floor(index / cols),
          col: index % cols,
          intensity: !!isIntensityByIndex.get(index),
          sample: meta.sample || null,
        };
      });
      console.table(summary);

      let imgEl = document.getElementById('overlay-atlas-preview');
      if (!imgEl) {
        imgEl = document.createElement('img');
        imgEl.id = 'overlay-atlas-preview';
        imgEl.style.position = 'fixed';
        imgEl.style.bottom = '8px';
        imgEl.style.right = '8px';
        imgEl.style.border = '1px solid #ccc';
        imgEl.style.maxWidth = '320px';
        imgEl.style.maxHeight = '320px';
        imgEl.style.background = '#111';
        imgEl.style.zIndex = 9999;
        document.body.appendChild(imgEl);
      }
      imgEl.src = cvs.toDataURL('image/png');
      imgEl.title = `Atlas order: ${texIds.join(', ')}`;// This confirms that the atlas order shows the correct textures, misalligned textures are further downstream
    }
    atlasTex = new BABYLON.DynamicTexture('overlayAtlas', { width: atlasW, height: atlasH }, scene, false);
    const dctx = atlasTex.getContext();
    dctx.drawImage(cvs, 0, 0);
    atlasTex.update();
    atlasTex.hasAlpha = true;
    if (typeof atlasTex.updateSamplingMode === 'function') {
      atlasTex.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE);
    } else {
      atlasTex.samplingMode = BABYLON.Texture.NEAREST_SAMPLINGMODE;
    }
    atlasTex.wrapU = atlasTex.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
    mat.setTexture('uOverlayAtlas', atlasTex);
    atlasCanvas = cvs;
    atlasCtx = ctx;
    atlasTexCtx = dctx;
    mat.setVector2('uAtlasDims', new BABYLON.Vector2(cols, rows));

    overlayScrollOffsets.fill(0);
    overlayScrollSpeeds.fill(0);
    const animatedSlots = [];
    texIds.forEach((tid, index) => {
      if (index >= MAX_OVERLAY_SCROLL_SLOTS) return;
      const def = overlayScrollPxPerTick.get(tid);
      if (!def) return;
      const speedPerMsX = (def.x || 0) / OVERLAY_SCROLL_TICK_MS;
      const speedPerMsY = (def.y || 0) / OVERLAY_SCROLL_TICK_MS;
      const normX = speedPerMsX / cellSize;
      const normY = speedPerMsY / cellSize;
      const base = index * 2;
      overlayScrollSpeeds[base] = normX;
      overlayScrollSpeeds[base + 1] = normY;
      if (normX !== 0 || normY !== 0) {
        animatedSlots.push(index);
      }
    });
    overlayScrollState = {
      slots: animatedSlots,
      hasAnimatedSlots: animatedSlots.length > 0,
    };
    if (overlayScrollState.hasAnimatedSlots) {
      redrawAtlasWithOffsets(animatedSlots);
    }
  } else {
    // No overlays with textures
    mat.setVector2('uAtlasDims', new BABYLON.Vector2(1, 1));
  }

  // Per-tile overlay index texture (R=low byte of index+1, B=high byte, G=flags bit0=intensity, bit1=hiTex)
  const idxData = new Uint8Array(gridW * gridH * 4);
  for (let z = 0; z < gridH; z++) {
    for (let x = 0; x < gridW; x++) {
      const O = overlaysEffective[tileData[z][x].overlayId | 0];
      if (!O) continue;
      const tid   = O.textureId | 0;
      const texIdx = texIndexById.get(tid);
      if (texIdx === undefined) continue;
      // atlas coords:
      const cols = Math.max(1, Math.ceil(Math.sqrt(Math.max(1, texCount))));
      const row = Math.floor(texIdx / cols);
      const col = texIdx % cols;
      if (typeof window !== "undefined" && window.DEBUG_ATLAS) { console.log(`tile ${z},${x} overlayId=${tileData[z][x].overlayId} textureId=${tid} texIdx=${texIdx} (row ${row}, col ${col})`); }
    }
  }

  for (let z = 0; z < gridH; z++) {
    for (let x = 0; x < gridW; x++) {
      const idx = (z * gridW + x) * 4;
      let r = 0, g = 0, b = 0, a = 0;
      if (overlayPresentGrid[z][x]) {
        const t = tileData[z][x];
        const O = overlaysEffective[t.overlayId | 0];
        if (O) {
          const tid = (O.textureId | 0);
          const texIdx = texIndexById.has(tid) ? (texIndexById.get(tid) | 0) : -1;
          if (texIdx >= 0) {
            const texIdxPlus = texIdx + 1;
            r = texIdxPlus & 255;
            b = (texIdxPlus >> 8) & 255;
            let flags = 0;
            if (isIntensityByIndex.get(texIdx)) flags |= 1;
            if (tid > 50) flags |= 2;
            g = flags & 255;
            a = 255;
            if (z === 24 && x === 24) {
              console.log('tile', z, x, 'overlayId', t.overlayId, 
                          'textureId', tid, 'atlasIndex', texIdx);
            }
          }
        }
      }
      idxData[idx+0] = r;
      idxData[idx+1] = g;
      idxData[idx+2] = b;
      idxData[idx+3] = a;
    }
  }
  for(let i=0; i < 4; i++){
  }
  console.log(texIndexById);
  const overlayIndexTex = BABYLON.RawTexture.CreateRGBATexture(idxData, gridW, gridH, scene, false, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);
  overlayIndexTex.wrapU = overlayIndexTex.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
  mat.setTexture('uOverlayIndex', overlayIndexTex);

  mesh.material = mat;

  // Material: unlit so baked vertex colors = final look (no extra engine lighting)
  /*const mat = new BABYLON.PBRMaterial("tileMat", scene);
  mat.unlit = true;
  mesh.material = mat;
  mat.disableLighting = true;
  mat.useVertexColor = true;*/

  // Frame the mesh
  const bi = mesh.getBoundingInfo();
  camera.setTarget(bi.boundingBox.centerWorld.clone());
  camera.radius = Math.max(camera.radius, bi.boundingSphere.radiusWorld * 1.5);

  // Overlay: draw underlay/overlay IDs per tile in screen space when enabled
  (function setupUnderlayOverlay() {
    const overlayId = 'underlay-id-overlay';
    let overlayCanvas = document.getElementById(overlayId);
    if (!overlayCanvas) {
      overlayCanvas = document.createElement('canvas');
      overlayCanvas.id = overlayId;
      overlayCanvas.style.position = 'absolute';
      overlayCanvas.style.left = '0';
      overlayCanvas.style.top = '0';
      overlayCanvas.style.pointerEvents = 'none';
      overlayCanvas.style.zIndex = '5';
      document.body.appendChild(overlayCanvas);
    }
    const ctx = overlayCanvas.getContext('2d');

    function resizeOverlay() {
      const w = engine.getRenderWidth();
      const h = engine.getRenderHeight();
      if (overlayCanvas.width !== w || overlayCanvas.height !== h) {
        overlayCanvas.width = w; overlayCanvas.height = h;
      }
    }

    function drawOverlay() {
      resizeOverlay();
      ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      const cam = scene.activeCamera;
      if (!cam) return;
      const viewport = cam.viewport.toGlobal(engine.getRenderWidth(), engine.getRenderHeight());
      const wvp = scene.getTransformMatrix();
      const worldMatrix = mesh.getWorldMatrix();
      const toWorld = (vec) => BABYLON.Vector3.TransformCoordinates(vec, worldMatrix);
      const proj = (x, y, z) => {
        const world = toWorld(new BABYLON.Vector3(x, y, z));
        return BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
      };

      // Optional GRID overlay
      if (window.SHOW_TILE_GRID) {
        const stride = Math.max(1, (window.GRID_STRIDE|0) || 1);
        ctx.save();
        ctx.lineWidth = window.GRID_LINE_WIDTH || 1;
        const color = window.GRID_COLOR || '#ffff00';
        const alpha = (typeof window.GRID_ALPHA === 'number') ? window.GRID_ALPHA : 0.35;
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;

        // helper: project a node
        const rows = nodeHeights.length, cols = nodeHeights[0].length;

        // horizontal lines (constant z)
        for (let z = 0; z < rows; z += stride) {
          for (let x = 0; x < cols - 1; x += 1) {
            const x0 = x * tileSize, x1 = (x + 1) * tileSize, zz = z * tileSize;
            const p0 = proj(x0, nodeHeights[z][x], zz);
            const p1 = proj(x1, nodeHeights[z][x + 1], zz);
            if (p0.z < 0 || p0.z > 1 || p1.z < 0 || p1.z > 1) continue;
            ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
          }
        }

        // vertical lines (constant x)
        for (let x = 0; x < cols; x += stride) {
          for (let z = 0; z < rows - 1; z += 1) {
            const xx = x * tileSize, z0 = z * tileSize, z1 = (z + 1) * tileSize;
            const p0 = proj(xx, nodeHeights[z][x], z0);
            const p1 = proj(xx, nodeHeights[z + 1][x], z1);
            if (p0.z < 0 || p0.z > 1 || p1.z < 0 || p1.z > 1) continue;
            ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
          }
        }
        ctx.restore();
      }

      // Optional underlay ID labels
      if (window.SHOW_UNDERLAY_OVERLAY) {
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z = 0; z < tileData.length; z++) {
          for (let x = 0; x < tileData[0].length; x++) {
            const uId = tileData[z][x].underlayId | 0;
            const world = toWorld(new BABYLON.Vector3((x + 0.5) * tileSize, tileData[z][x].height, (z + 0.5) * tileSize));
            const p = BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
            if (p.z < 0 || p.z > 1) continue; // behind camera
            // outline for readability
            ctx.fillStyle = 'black';
            ctx.fillText(String(uId), p.x + 1, p.y + 1);
            ctx.fillStyle = 'white';
            ctx.fillText(String(uId), p.x, p.y);
          }
        }
      }

      // Optional overlay ID labels (skip -1)
      if (window.SHOW_OVERLAY_OVERLAY) {
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z = 0; z < tileData.length; z++) {
          for (let x = 0; x < tileData[0].length; x++) {
            const oId = tileData[z][x].overlayId | 0;
            if (oId === -1) continue;
            const world = toWorld(new BABYLON.Vector3((x + 0.5) * tileSize, tileData[z][x].height, (z + 0.5) * tileSize));
            const p = BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
            if (p.z < 0 || p.z > 1) continue; // behind camera
            // outline for readability
            ctx.fillStyle = 'black';
            ctx.fillText(String(oId), p.x + 1, p.y + 1);
            ctx.fillStyle = 'aqua';
            ctx.fillText(String(oId), p.x, p.y);
          }
        }
      }

      // Optional overlay texture ID labels (textureId)
      if (window.SHOW_TEXTUREID_OVERLAY) {
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z = 0; z < tileData.length; z++) {
          for (let x = 0; x < tileData[0].length; x++) {
            const oId = tileData[z][x].overlayId | 0;
            if (oId <= 0) continue;
            const overlayDef = overlaysEffective[oId];
            const texId = overlayDef ? (overlayDef.textureId | 0) : -1;
            if (texId < 0) continue;
            const world = toWorld(new BABYLON.Vector3((x + 0.5) * tileSize, tileData[z][x].height, (z + 0.5) * tileSize));
            const p = BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
            if (p.z < 0 || p.z > 1) continue;
            ctx.fillStyle = 'black';
            ctx.fillText(String(texId), p.x + 1, p.y + 1);
            ctx.fillStyle = 'magenta';
            ctx.fillText(String(texId), p.x, p.y);
          }
        }
      }
      // Optional mask ID labels (overlay shape/path)
      if (window.SHOW_MASK_OVERLAY) {
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z = 0; z < tileData.length; z++) {
          for (let x = 0; x < tileData[0].length; x++) {
            const mId = tileData[z][x].overlayShape | 0;
            const world = toWorld(new BABYLON.Vector3((x + 0.5) * tileSize, tileData[z][x].height, (z + 0.5) * tileSize));
            const p = BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
            if (p.z < 0 || p.z > 1) continue; // behind camera
            ctx.fillStyle = 'black';
            ctx.fillText(String(mId), p.x + 1, p.y + 1);
            ctx.fillStyle = 'orange';
            ctx.fillText(String(mId), p.x, p.y);
          }
        }
      }

      // Optional coordinate overlay (z,x)
      if (window.SHOW_COORD_OVERLAY) {
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let z = 0; z < tileData.length; z++) {
          for (let x = 0; x < tileData[0].length; x++) {
            const label = z + "," + x;
            const world = toWorld(new BABYLON.Vector3((x + 0.5) * tileSize, tileData[z][x].height, (z + 0.5) * tileSize));
            const p = BABYLON.Vector3.Project(world, BABYLON.Matrix.Identity(), wvp, viewport);
            if (p.z < 0 || p.z > 1) continue; // behind camera
            ctx.fillStyle = 'black';
            ctx.fillText(label, p.x + 1, p.y + 1);
            ctx.fillStyle = 'lime';
            ctx.fillText(label, p.x, p.y);
          }
        }
      }

      if (window.SHOW_OBJECT_ID_OVERLAY) {
        ctx.font = '11px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        const cache = scene.metadata && scene.metadata._objectCache;
        const instanceCollection = cache ? cache.instances : null;
        const visitRecords = [];
        if (instanceCollection instanceof Map) {
          instanceCollection.forEach((record) => visitRecords.push(record));
        } else if (instanceCollection) {
          Object.keys(instanceCollection).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(instanceCollection, key)) {
              visitRecords.push(instanceCollection[key]);
            }
          });
        }
        visitRecords.forEach((record) => {
          if (!record || !record.roots) return;
          if (!(record.roots instanceof Set) && Array.isArray(record.roots)) {
            record.roots = new Set(record.roots);
          }
          const roots = record.roots instanceof Set ? record.roots : new Set();
          roots.forEach((root) => {
            if (!root) return;
            if (typeof root.isDisposed === 'function' && root.isDisposed()) return;
            const meta = root.metadata || {};
            const info = meta.rsObjectInfo;
            if (!info || info.isSecondary) return;
            const bounds = meta.boundsPost;
            let worldPoint = null;
            if (bounds && Array.isArray(bounds.min) && Array.isArray(bounds.max)) {
              const min = bounds.min;
              const max = bounds.max;
              if (min.length === 3 && max.length === 3) {
                worldPoint = new BABYLON.Vector3(
                  (min[0] + max[0]) * 0.5,
                  max[1] + tileSize * 0.05,
                  (min[2] + max[2]) * 0.5,
                );
              }
            }
            if (!worldPoint) {
              const abs = typeof root.getAbsolutePosition === 'function'
                ? root.getAbsolutePosition()
                : root.position;
              if (!abs) return;
              worldPoint = new BABYLON.Vector3(abs.x, abs.y + tileSize * 0.05, abs.z);
            }
            const projected = BABYLON.Vector3.Project(
              worldPoint,
              BABYLON.Matrix.Identity(),
              wvp,
              viewport,
            );
            if (projected.z < 0 || projected.z > 1) return;
            const label = info.id != null ? String(info.id) : '?';
            ctx.fillStyle = 'black';
            ctx.fillText(label, projected.x + 1, projected.y + 1);
            ctx.fillStyle = 'yellow';
            ctx.fillText(label, projected.x, projected.y);
          });
        });
      }
    }

    scene.onAfterRenderObservable.add(drawOverlay);

    if (!window._underlayOverlayKeybound) {
      window._underlayOverlayKeybound = true;
      window.addEventListener('keydown', (ev) => {
        if (ev.key === 'u' || ev.key === 'U') {
          window.SHOW_UNDERLAY_OVERLAY = !window.SHOW_UNDERLAY_OVERLAY;
        }
        if (ev.key === 'g' || ev.key === 'G') {
          window.SHOW_TILE_GRID = !window.SHOW_TILE_GRID;
        }
        if (ev.key === 'o' || ev.key === 'O') {
          window.SHOW_OVERLAY_OVERLAY = !window.SHOW_OVERLAY_OVERLAY;
        }
        if (ev.key === 't' || ev.key === 'T') {
          window.SHOW_TEXTUREID_OVERLAY = !window.SHOW_TEXTUREID_OVERLAY;
        }
        if (ev.key === 'm' || ev.key === 'M') {
          window.SHOW_MASK_OVERLAY = !window.SHOW_MASK_OVERLAY;
        }
        if (ev.key === 'c' || ev.key === 'C') {
          window.SHOW_COORD_OVERLAY = !window.SHOW_COORD_OVERLAY;
        }
        if (ev.key === 'b' || ev.key === 'B') {
          window.SHOW_OBJECT_ID_OVERLAY = !window.SHOW_OBJECT_ID_OVERLAY;
        }
      });
    }

    window.addEventListener('resize', resizeOverlay);
    resizeOverlay();
  })();

  // Expose current render context globally for debug helpers (after scene init)
  try {
    window._rsCtx = {
      tileData,
      overlayPresentGrid,
      baseH_U, baseS_U, baseL_U,
      baseH_O, baseS_O, baseL_O,
      vertexBrightness,
      tileSize
    };
  } catch (e) {
    console.warn('Failed to publish render context:', e);
  }

  return scene;
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

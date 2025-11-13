function promptPickObjectsJson() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.addEventListener('change', async () => {
      try {
        const file = input.files && input.files[0];
        if (!file) { reject(new Error('No file selected')); return; }
        const text = await file.text();
        const data = JSON.parse(text);
        resolve(normalizeObjectEntries(data));
      } catch (e) { reject(e); }
      finally { input.remove(); }
    });
    input.click();
  });
}

// Load and parse RS object JSON produced by your Python script.
// Accepts a path (relative or absolute). Tries a few URL candidates for convenience.
async function loadAndParseObjectsJson(path = '651.json') {
  const candidates = [];
  const norm = String(path).replace(/^\/+/, '');
  // As-is
  candidates.push(path);
  // Root-relative
  candidates.push('/' + norm);
  // Under Flask static base if available
  try {
    if (window.STATIC_BASE) {
      const base = String(window.STATIC_BASE);
      const baseNorm = base.endsWith('/') ? base : base + '/';
      candidates.push(baseNorm + norm);
    }
  } catch {}

  let lastErr = null;
  for (const url of candidates) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return normalizeObjectEntries(data);
    } catch (e) {
      lastErr = e;
      // Try next candidatef
    }
  }
  throw lastErr || new Error('Failed to load objects JSON');
}

// Normalize entries to a consistent structure for later rendering
function normalizeObjectEntries(arr) {
  if (!Array.isArray(arr)) throw new Error('Objects JSON must be an array');
  const out = [];
  for (const it of arr) {
    if (!it) continue;
    if (DEBUG_OBJECT_TYPE !== null) {
      const typeCandidate = toInt(it.t, it.type, it.model_type, it.modelType);
      if ((typeCandidate | 0) !== (DEBUG_OBJECT_TYPE | 0)) continue;
    }
    const objDef = it.objectdef || it.objectDef || null;
    // Support both exact keys and fallback to alternative naming if ever changes
    const id = toInt(it.id, it.object_id, it.objectId);
    const planeRaw = toInt(it.p, it.plane, objDef?.plane, 0);
    // switched x and y around, as the x,y coordinates in the object map file were reversed compared to babylon
    const xRaw = toInt(it.y, it.worldY, it.tileY);
    const yRaw = toInt(it.x, it.worldX, it.tileX);
    const type = toInt(it.t, it.type, it.model_type, it.modelType);
    const rot = toInt(it.r, it.rotation, 0) & 3;
    if (!isFinite(id) || !isFinite(xRaw) || !isFinite(yRaw) || !isFinite(type)) {
      // Skip malformed entries but continue parsing the rest
      continue;
    }

    const plane = Number.isFinite(planeRaw) ? planeRaw : 0;
    const x = xRaw;
    const y = yRaw;

    const sizeX = toInt(it.sizeX, objDef?.sizeX);
    const sizeY = toInt(it.sizeY, objDef?.sizeY);

    const offsets = {
      x: toInt(it.offsetX, objDef?.offsetX, 0),
      y: toInt(it.offsetY, objDef?.offsetY, 0),
      h: toInt(it.offsetH, objDef?.offsetH, 0),
    };

    const translate = {
      x: toInt(it.translateX, objDef?.translateX, 0),
      y: toInt(it.translateY, objDef?.translateY, 0),
      z: toInt(it.translateZ, objDef?.translateZ, 0),
    };

    const scale = {
      x: toInt(it.scaleX, objDef?.scaleX, 128),
      y: toInt(it.scaleY, objDef?.scaleY, 128),
      z: toInt(it.scaleZ, objDef?.scaleZ, 128),
    };

    const modelSize = {
      x: toInt(it.modelSizeX, objDef?.modelSizeX, scale.x),
      y: toInt(it.modelSizeY, objDef?.modelSizeY, scale.y),
      h: toInt(it.modelSizeH, objDef?.modelSizeH, scale.z),
    };

    const brightness = toInt(it.brightness, objDef?.brightness, 0);
    const contrast = toInt(it.contrast, objDef?.contrast, 0);
    const ambientLighting = toInt(it.ambientLighting, objDef?.ambientLighting, 0);
    const lightDiffusion = toInt(it.lightDiffusion, objDef?.lightDiffusion, 0);

    const flags = {
      adjustToTerrain: toBool(it.adjustToTerrain, objDef?.adjustToTerrain),
      contouredGround: toBool(it.contouredGround, objDef?.contouredGround),
      nonFlatShading: toBool(it.nonFlatShading, objDef?.nonFlatShading),
      delayShading: toBool(it.delayShading, objDef?.delayShading),
      castsShadow: toBool(it.castsShadow, objDef?.castsShadow),
      occludes: toBool(it.occludes, objDef?.occludes),
      obstructsGround: toBool(it.obstructsGround, objDef?.obstructsGround),
      impenetrable: toBool(it.impenetrable, objDef?.impenetrable),
      solid: toBool(it.solid, objDef?.solid),
      hollow: toBool(it.hollow, objDef?.hollow),
      inverted: toBool(it.inverted, objDef?.inverted),
      isUnwalkable: toBool(it.isUnwalkable, objDef?.isUnwalkable),
      isSolidObject: toBool(it.isSolidObject, objDef?.isSolidObject),
      aBoolean757: toBool(it.aBoolean757, objDef?.aBoolean757),
      aBoolean764: toBool(it.aBoolean764, objDef?.aBoolean764),
    };

    out.push({
      id,
      plane,
      x,
      y,
      type,
      rot,
      size: {
        x: Number.isFinite(sizeX) ? sizeX : 1,
        y: Number.isFinite(sizeY) ? sizeY : 1,
      },
      offsets,
      translate,
      scale,
      modelSize,
      lighting: { brightness, contrast, ambientLighting, lightDiffusion },
      flags,
      definition: objDef || null,
      raw: it,
    });
  }
  return out;
}

function toInt(...vals) {
  for (const v of vals) {
    if (v === undefined || v === null) continue;
    const n = Number(v);
    if (Number.isFinite(n)) return n | 0;
    const p = parseInt(String(v), 10);
    if (Number.isFinite(p)) return p | 0;
  }
  return NaN;
}

function toBool(...vals) {
  for (const v of vals) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'boolean') return v;
    if (typeof v === 'number') {
      if (Number.isNaN(v)) continue;
      return v !== 0;
    }
    const str = String(v).trim().toLowerCase();
    if (!str) continue;
    if (str === 'true' || str === '1' || str === 'yes') return true;
    if (str === 'false' || str === '0' || str === 'no') return false;
  }
  return undefined;
}

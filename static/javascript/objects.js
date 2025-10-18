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

// Set to a type number to render only matching objects (e.g., 3 for square corners).
const DEBUG_OBJECT_TYPE = null;

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

// Helpers to reuse loaded GLTF containers and track rendered instances.
function ensureObjectCache(scene) {
  scene.metadata = scene.metadata || {};
  if (!scene.metadata._objectCache) {
    scene.metadata._objectCache = {
      containers: new Map(),
      instances: new Map(),
    };
  }
  return scene.metadata._objectCache;
}

// POST map objects to GLTFs via backend, duplicating instances per location.
async function renderFirstObjectFromBackend(scene, obj, ctx) {
  const roots = await renderObjectsFromBackend(scene, [obj], ctx);
  return roots[0] || null;
}

async function renderObjectsFromBackend(scene, objects, ctx) {
  if (!Array.isArray(objects) || objects.length === 0) return [];

  const cache = ensureObjectCache(scene);

  const occurrenceMap = new Map();
  for (const raw of objects) {
    if (!raw) continue;
    const id = Number(raw.id ?? raw.object_id ?? raw.objectId);
    const type = Number(raw.type ?? raw.model_type ?? raw.modelType);
    if (!Number.isFinite(id) || !Number.isFinite(type)) continue;
    const key = (id | 0) + '-' + (type | 0);
    if (!occurrenceMap.has(key)) occurrenceMap.set(key, []);
    occurrenceMap.get(key).push(raw);
  }
  if (occurrenceMap.size === 0) return [];

  const payload = {
    objects: Array.from(occurrenceMap.keys()).map((key) => {
      const parts = key.split('-');
      return { id: Number(parts[0]) | 0, type: Number(parts[1]) | 0 };
    }),
  };

  const res = await fetch('/api/gltf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const rawBody = await res.text();
  if (!res.ok) {
    throw new Error('GLTF export failed: ' + res.status + ' ' + res.statusText + ' ' + rawBody);
  }

  let resultJson;
  try {
    resultJson = rawBody ? JSON.parse(rawBody) : {};
  } catch (err) {
    const msg = (err && err.message) ? err.message : String(err);
    throw new Error('GLTF response parse failed: ' + msg + ' ' + rawBody);
  }

  const uniqueEntries = Array.isArray(resultJson?.objects) ? resultJson.objects : [];
  const renderPromises = uniqueEntries.map(async (entry) => {
    if (!entry || entry.gltf === 'no model' || !entry.gltf) return [];
    const id = Number(entry.object_id ?? entry.objectId);
    const type = Number(entry.model_type ?? entry.modelType);
    if (!Number.isFinite(id) || !Number.isFinite(type)) return [];
    const key = (id | 0) + '-' + (type | 0);
    const occurrences = occurrenceMap.get(key);
    if (!occurrences || occurrences.length === 0) return [];

    let container = cache.containers.get(key);
    if (!container) {
      const gltfFilename = String(entry.gltf).split(/[\\/]/).pop();
      if (!gltfFilename) return [];
      const gltfUrl = (typeof staticUrl === 'function')
        ? staticUrl('objects/' + gltfFilename)
        : '/static/objects/' + gltfFilename;
      try {
        container = await BABYLON.SceneLoader.LoadAssetContainerAsync('', gltfUrl, scene);
        cache.containers.set(key, container);
      } catch (loadErr) {
        console.warn('Failed to load GLTF asset', gltfUrl, loadErr);
        return [];
      }
    }

    return instantiateObjectInstances(scene, entry, occurrences, ctx, container, cache, key);
  });

  const renderedRootsNested = await Promise.all(renderPromises);
  return renderedRootsNested.flat();
}


function toggleDebugBoundingBox(root, obj) {
  if (!root || !obj) return;
  if (DEBUG_OBJECT_TYPE === null) return;
  const objType = Number(obj.type);
  if (!Number.isFinite(objType) || objType !== (DEBUG_OBJECT_TYPE | 0)) return;
  if (typeof root.showBoundingBox === 'boolean') {
    root.showBoundingBox = true;
  }
  const meshes = root.getChildMeshes ? root.getChildMeshes(false) : [];
  meshes.forEach((mesh) => {
    if (mesh) mesh.showBoundingBox = true;
  });
}

function instantiateSingleRoot(container, scene, entry, index, suffix = '') {
  try {
    const inst = container.instantiateModelsToScene(
      (name) => name + '_obj' + entry.object_id + '_' + index + suffix + '_' + Date.now(),
      true,
    );
    const roots = inst?.rootNodes && inst.rootNodes.length
      ? inst.rootNodes
      : (inst?.meshes || []).filter((mesh) => !mesh.parent);
    let root = null;
    if (roots.length === 1) {
      root = roots[0];
    } else if (roots.length > 1) {
      root = new BABYLON.TransformNode('object_' + entry.object_id + '_' + index + suffix + '_root', scene);
      roots.forEach((node) => {
        if (node) node.parent = root;
      });
    }
    if (!root) {
      console.warn('instantiateSingleRoot: no root nodes for', entry);
      return null;
    }
    (inst?.animationGroups || []).forEach((group) => {
      try { group.stop(); } catch (_) {}
    });
    return root;
  } catch (err) {
    console.warn('instantiateSingleRoot failed', err);
    return null;
  }
}

async function instantiateObjectInstances(scene, entry, occurrences, ctx, container, cache, cacheKey) {
  const roots = [];
  if (!occurrences || occurrences.length === 0) return roots;

  let record = cache.instances.get(cacheKey);
  if (!record) {
    record = { roots: new Set(), layer: null };
    cache.instances.set(cacheKey, record);
  }
  if (!(record.roots instanceof Set)) {
    record.roots = new Set(record.roots);
  }
  if (record.layer === null || record.layer === undefined) {
    const first = occurrences[0] || {};
    const planeRaw = first.plane ?? first.p ?? first.layer ?? 0;
    const plane = Number(planeRaw);
    record.layer = Number.isFinite(plane) ? (plane | 0) : 0;
  }

  const entryDefinition = entry.objectdef || entry.objectDef || null;
  const defSizeX = Number(entryDefinition?.sizeX);
  const defSizeY = Number(entryDefinition?.sizeY);
  const defaultFootprint = {
    x: Number.isFinite(defSizeX) ? defSizeX : 1,
    y: Number.isFinite(defSizeY) ? defSizeY : 1,
  };

  const enrichOccurrence = (occurrence) => {
    const next = { ...occurrence };
    const sizeObj = (occurrence && typeof occurrence.size === 'object')
      ? { ...occurrence.size }
      : {};
    if (!Number.isFinite(Number(sizeObj.x)) && Number.isFinite(defSizeX)) {
      sizeObj.x = defSizeX;
    }
    if (!Number.isFinite(Number(sizeObj.y)) && Number.isFinite(defSizeY)) {
      sizeObj.y = defSizeY;
    }
    if (!Number.isFinite(Number(sizeObj.x))) {
      sizeObj.x = defaultFootprint.x;
    }
    if (!Number.isFinite(Number(sizeObj.y))) {
      sizeObj.y = defaultFootprint.y;
    }
    next.size = sizeObj;
    if (entryDefinition && next.definition == null) {
      next.definition = entryDefinition;
    }
    return next;
  };

  occurrences.forEach((occurrence, index) => {
    const enrichedOccurrence = enrichOccurrence(occurrence);
    let instantiated;
    try {
      instantiated = container.instantiateModelsToScene(
        (name) => name + '_obj' + entry.object_id + '_' + index + '_' + Date.now(),
        true,
      );
    } catch (err) {
      console.warn('instantiateModelsToScene failed', err);
      return;
    }

    const instRoots = instantiated?.rootNodes && instantiated.rootNodes.length
      ? instantiated.rootNodes
      : (instantiated?.meshes || []).filter((mesh) => !mesh.parent);

    let root = null;
    if (instRoots.length === 1) {
      root = instRoots[0];
    } else if (instRoots.length > 1) {
      root = new BABYLON.TransformNode('object_' + entry.object_id + '_' + index + '_root', scene);
      instRoots.forEach((node) => {
        if (node) node.parent = root;
      });
    }
    if (!root) {
      console.warn('No root nodes found for object instance', entry);
      return;
    }

    const isType2 = (Number(occurrence.type) | 0) === 2;
    let type2Clone = null;

    const primaryObj = isType2
      ? { ...enrichedOccurrence, __type2Primary: true }
      : enrichedOccurrence;
    placeObjectInstance(
      root,
      primaryObj,
      primaryObj?.size || defaultFootprint,
      ctx,
    );
    toggleDebugBoundingBox(root, primaryObj);

    roots.push(root);
    record.roots.add(root);

    if (isType2) {
      type2Clone = instantiateSingleRoot(container, scene, entry, index, '_legB');
      if (type2Clone) {
        const secondaryObjBase = enrichOccurrence(occurrence);
        const secondaryObj = {
          ...secondaryObjBase,
          rot: ((secondaryObjBase.rot | 0) + 1) & 3,
          __type2Secondary: true,
        };
        placeObjectInstance(
          type2Clone,
          secondaryObj,
          secondaryObj?.size || defaultFootprint,
          ctx,
        );
        toggleDebugBoundingBox(type2Clone, secondaryObj);
        const pairId = 'type2_' + entry.object_id + '_' + index + '_' + Date.now();
        const rootMeta = Object.assign({}, root.metadata || {});
        rootMeta.type2PairId = pairId;
        rootMeta.type2Primary = true;
        rootMeta.type2PartnerUniqueId = type2Clone.uniqueId;
        root.metadata = rootMeta;
        const cloneMeta = Object.assign({}, type2Clone.metadata || {});
        cloneMeta.type2PairId = pairId;
        cloneMeta.type2Primary = false;
        cloneMeta.type2PartnerUniqueId = root.uniqueId;
        type2Clone.metadata = cloneMeta;
        roots.push(type2Clone);
        record.roots.add(type2Clone);
      } else {
        console.warn('Type 2 secondary instantiation failed', entry);
      }
    }

    (instantiated?.animationGroups || []).forEach((group) => {
      try {
        group.stop();
      } catch (_) {}
    });
  });

  return roots;
}

function placeObjectInstance(root, obj, footprint, ctx) {
  const scene = root.getScene();
  const wrapper = scene.metadata && scene.metadata.mirrorWrapper ? scene.metadata.mirrorWrapper : null;
  const toMirroredWorld = (x, y, z) => {
    if (!wrapper) return new BABYLON.Vector3(x, y, z);
    return new BABYLON.Vector3(
      wrapper.position.x + x * wrapper.scaling.x,
      wrapper.position.y + y * wrapper.scaling.y,
      wrapper.position.z + z * wrapper.scaling.z
    );
  };

  const nodeHeights = (ctx && Array.isArray(ctx.nodeHeights) && ctx.nodeHeights.length) ? ctx.nodeHeights : [[0]];
  const tileSize = ctx && ctx.tileSize ? ctx.tileSize : 1;
  const def = obj && obj.definition ? obj.definition : null;
  if (def) {
    obj.size.x = def.sizeX;
    obj.size.y = def.sizeY;
  }
  if(obj.id === 9160) {
    console.log(obj.id, obj);
  }
  const typePlacement = applyTypeSpecificPlacement(obj, tileSize) || null;
  const rotSteps = (obj.rot | 0) & 3;
  const objType = obj && Number.isFinite(obj.type) ? (obj.type | 0) : -1;
  const originalScale = root.metadata && root.metadata.__initialScaling
    ? root.metadata.__initialScaling.clone()
    : (() => {
        const base = root.scaling ? root.scaling.clone() : BABYLON.Vector3.One();
        if (!root.metadata) root.metadata = {};
        root.metadata.__initialScaling = base.clone();
        return base;
      })();
  root.scaling = originalScale.clone();
  if ((DEBUG_OBJECT_TYPE !== null && objType === (DEBUG_OBJECT_TYPE | 0))) {
    console.debug('Object placement fields', {
      id: obj.id,
      type: objType,
      x : obj.x,
      y : obj.y,
      offsets: obj?.offsets || null,
      translate: obj?.translate || null,
      scale: obj?.scale || null,
      modelSize: obj?.modelSize || null,
      definitionScale: obj?.definition?.scale || null,
      definitionOffsets: obj?.definition ? {
        offsetX: obj.definition.offsetX,
        offsetY: obj.definition.offsetY,
        offsetH: obj.definition.offsetH,
        translateX: obj.definition.translateX,
        translateY: obj.definition.translateY,
        translateZ: obj.definition.translateZ,
        scaleX: obj.definition.scaleX,
        scaleY: obj.definition.scaleY,
        scaleZ: obj.definition.scaleZ,
      } : null,
    });
  }
  const toTileCount = (val, fallback = 1) => {
    const n = Number(val);
    return Number.isFinite(n) ? n : fallback;
  };
  const rawWidthTiles = Math.max(1, Math.round(toTileCount(footprint?.sizeX ?? footprint?.x, 1)));
  const rawDepthTiles = Math.max(1, Math.round(toTileCount(footprint?.sizeY ?? footprint?.y, 1)));
  const widthTilesWorld = (rotSteps % 2 === 1) ? rawDepthTiles : rawWidthTiles;
  const depthTilesWorld = (rotSteps % 2 === 1) ? rawWidthTiles : rawDepthTiles;
  const tileX = Number.isFinite(obj.x) ? Math.floor(obj.x) : 0;
  const tileZ = Number.isFinite(obj.y) ? Math.floor(obj.y) : 0;

  const clampHeight = (ix, iz) => {
    const maxZ = Math.max(0, nodeHeights.length - 1);
    const zi = Math.min(Math.max(iz, 0), maxZ);
    const row = nodeHeights[zi] || [];
    const maxX = Math.max(0, row.length - 1);
    const xi = Math.min(Math.max(ix, 0), maxX);
    const h = row[xi];
    return Number.isFinite(h) ? h : 0;
  };

  const offsets = obj && obj.offsets ? obj.offsets : {};
  const offsetXWorld = rsHorizontalOffset(offsets.x, tileSize);
  const offsetZWorld = rsHorizontalOffset(offsets.y, tileSize);
  const offsetHeight = rsVerticalOffset(offsets.h);
  const typeOffsetXWorld = typePlacement?.worldOffset?.x || 0;
  const typeOffsetZWorld = typePlacement?.worldOffset?.z || 0;
  const typeOffsetHeight = typePlacement?.worldOffset?.y || 0;

  const baseX = tileX * tileSize;
  const baseZ = tileZ * tileSize;
  const extentX = widthTilesWorld * tileSize;
  const extentZ = depthTilesWorld * tileSize;
  const h00 = clampHeight(tileX, tileZ);
  const h10 = clampHeight(tileX + widthTilesWorld, tileZ);
  const h01 = clampHeight(tileX, tileZ + depthTilesWorld);
  const h11 = clampHeight(tileX + widthTilesWorld, tileZ + depthTilesWorld);
  const centerX = baseX + extentX * 0.5 + offsetXWorld + typeOffsetXWorld;
  const centerZ = baseZ + extentZ * 0.5 + offsetZWorld + typeOffsetZWorld;
  const avgHeight = (h00 + h10 + h01 + h11) * 0.25 + offsetHeight + typeOffsetHeight;
  root.position = toMirroredWorld(centerX, avgHeight, centerZ);

  const p00 = toMirroredWorld(baseX + offsetXWorld + typeOffsetXWorld, h00 + offsetHeight + typeOffsetHeight, baseZ + offsetZWorld + typeOffsetZWorld);
  const p10 = toMirroredWorld(baseX + extentX + offsetXWorld + typeOffsetXWorld, h10 + offsetHeight + typeOffsetHeight, baseZ + offsetZWorld + typeOffsetZWorld);
  const p01 = toMirroredWorld(baseX + offsetXWorld + typeOffsetXWorld, h01 + offsetHeight + typeOffsetHeight, baseZ + extentZ + offsetZWorld + typeOffsetZWorld);
  const rightVec = p10.subtract(p00);
  const forwardVec = p01.subtract(p00);
  const normalVec = BABYLON.Vector3.Cross(rightVec, forwardVec);

  let slopeQuat = BABYLON.Quaternion.Identity();
  let surfaceNormal = BABYLON.Vector3.Up();
  if (normalVec.lengthSquared() > 1e-6) {
    surfaceNormal = normalVec.normalize();
    const up = BABYLON.Vector3.Up();
    let dot = BABYLON.Vector3.Dot(up, surfaceNormal);
    dot = Math.min(1, Math.max(-1, dot));
    if (dot < 0.9995) {
      const axis = BABYLON.Vector3.Cross(up, surfaceNormal);
      const axisLen = axis.length();
      if (axisLen > 1e-6) {
        const angle = Math.acos(dot);
        slopeQuat = BABYLON.Quaternion.RotationAxis(axis.normalize(), angle);
      }
    }
  }

  applyLegacyModelScale(root, obj);

  const desiredWidthLocalDefault = Math.max(1e-3, rawWidthTiles) * tileSize;
  const desiredDepthLocalDefault = Math.max(1e-3, rawDepthTiles) * tileSize;
  let desiredWidthLocal = desiredWidthLocalDefault;
  let desiredDepthLocal = desiredDepthLocalDefault;
  if (typePlacement?.desiredWidthLocal && typePlacement.desiredWidthLocal > 0) {
    desiredWidthLocal = typePlacement.desiredWidthLocal;
  }
  if (typePlacement?.desiredDepthLocal && typePlacement.desiredDepthLocal > 0) {
    desiredDepthLocal = typePlacement.desiredDepthLocal;
  }
  root.computeWorldMatrix(true);
  let scaleAdjustX = 1;
  let scaleAdjustY = 1;
  let scaleAdjustZ = 1;
  let customScaleHandled = false;
  let customHeightHandled = false;
  try {
    const bounds = root.getHierarchyBoundingVectors(true);
    const boundsWidth = Math.max(1e-3, bounds.max.x - bounds.min.x);
    const boundsDepth = Math.max(1e-3, bounds.max.z - bounds.min.z);

    if (!customScaleHandled && (typePlacement?.scale?.wallSpanZ || typePlacement?.scale?.maxDepthX)) {
      const targetZ = Number(typePlacement.scale.wallSpanZ);
      const maxX = Number(typePlacement.scale.maxDepthX);
      const ratioZ = Number.isFinite(targetZ) && targetZ > 0 ? targetZ / Math.max(1e-6, boundsDepth) : null;
      const ratioX = Number.isFinite(maxX) && maxX > 0 ? maxX / Math.max(1e-6, boundsWidth) : null;
      if (ratioZ !== null) {
        scaleAdjustZ = ratioZ;
      }
      if (ratioX !== null) {
        scaleAdjustX = ratioZ !== null ? Math.min(ratioZ, ratioX) : ratioX;
      } else if (ratioZ !== null) {
        scaleAdjustX = ratioZ;
      }
      customScaleHandled = true;
      if (!typePlacement.scale?.desiredHeight) {
        scaleAdjustY = ratioZ !== null ? ratioZ : scaleAdjustX;
        customHeightHandled = true;
      }
      if (window.DEBUG_OBJECT_PLACEMENT) {
        console.log('wallSpan ratios', { ratioZ, ratioX });
      }
    }

    if (!customScaleHandled && typePlacement?.scale?.targetWidthAxis === 'x') {
      const target = Number.isFinite(typePlacement.scale.targetWidth) ? typePlacement.scale.targetWidth : desiredWidthLocalDefault;
      const ratio = target / Math.max(1e-6, boundsWidth);
      scaleAdjustX = ratio;
      if (typePlacement.scale.maintainAspect) {
        scaleAdjustZ = ratio;
      }
      customScaleHandled = true;
      if (!typePlacement.scale.desiredHeight) {
        scaleAdjustY = ratio;
        customHeightHandled = true;
      }
      if (window.DEBUG_OBJECT_PLACEMENT) {
        console.log('targetWidth ratio', ratio);
      }
    }

    if (!customScaleHandled) {
      const targetWidth = desiredWidthLocal > 0 ? desiredWidthLocal : desiredWidthLocalDefault;
      const targetDepth = desiredDepthLocal > 0 ? desiredDepthLocal : desiredDepthLocalDefault;
      scaleAdjustX = targetDepth / Math.max(1e-6, boundsWidth);
      scaleAdjustZ = targetWidth / Math.max(1e-6, boundsDepth);
    }

    if (!customScaleHandled && typePlacement?.scale?.fitLongestAxis) {
      const desiredSpan = typePlacement.scale.fitLongestAxis;
      const boundsSpan = Math.max(boundsWidth, boundsDepth);
      const ratio = desiredSpan / Math.max(1e-6, boundsSpan);
      if (window.DEBUG_OBJECT_PLACEMENT) {
        console.log('fitLongestAxis ratio', ratio);
      }
      if (boundsWidth >= boundsDepth) {
        scaleAdjustX = ratio;
        scaleAdjustZ = ratio * (boundsDepth / Math.max(1e-6, boundsWidth));
      } else {
        scaleAdjustX = ratio * (boundsWidth / Math.max(1e-6, boundsDepth));
        scaleAdjustZ = ratio;
      }
      if (!typePlacement.scale?.desiredHeight) {
        scaleAdjustY = ratio;
        customHeightHandled = true;
      }
    }

    if (typePlacement?.scale?.desiredHeight) {
      const desiredHeight = typePlacement.scale.desiredHeight;
      if (Number.isFinite(desiredHeight) && desiredHeight > 0) {
        const boundsHeight = Math.max(1e-6, bounds.max.y - bounds.min.y);
        scaleAdjustY = desiredHeight / boundsHeight;
        customHeightHandled = true;
      }
    }

    if (!customHeightHandled) {
      scaleAdjustY = Math.sqrt(scaleAdjustX * scaleAdjustZ);
    }
    if (typePlacement?.scale?.wallSpanZ || typePlacement?.scale?.maxDepthX) {
      const boundsHeight = Math.max(1e-3, bounds.max.y - bounds.min.y);
      const maxHeight = tileSize * 1.5;
      const projectedHeight = boundsHeight * scaleAdjustY;
      if (projectedHeight > maxHeight) {
        const clampRatio = maxHeight / projectedHeight;
        scaleAdjustX *= clampRatio;
        scaleAdjustY *= clampRatio;
        scaleAdjustZ *= clampRatio;
      }
    }
  } catch (err) {
    console.warn('Footprint scaling: failed to compute bounds', err);
  }
  if (((obj?.type | 0) === 4 && !(THIN_DECORATIONS.has(obj.id))) || (obj?.type | 0) === 10 || (obj?.type | 0) === 11 || (obj?.type | 0) === 22){
    const forcedScale = 1 / 128;
    scaleAdjustX = forcedScale;
    scaleAdjustY = forcedScale;
    scaleAdjustZ = forcedScale;
  }
  const baseScaling = root.scaling ? root.scaling.clone() : BABYLON.Vector3.One();
  baseScaling.x *= scaleAdjustX;
  baseScaling.y *= scaleAdjustY;
  baseScaling.z *= scaleAdjustZ;
  if (obj && obj.__type2Secondary) {
    baseScaling.z *= -1;
  }
  root.scaling = baseScaling;

  const typeYawOffset = typePlacement?.yawOffset ?? 0;
  const yawQuat = BABYLON.Quaternion.RotationAxis(BABYLON.Vector3.Up(), (rotSteps * (Math.PI * 0.5)) + typeYawOffset);
  root.rotationQuaternion = slopeQuat.multiply(yawQuat);

  applyLegacyTranslation(root, obj, tileSize);
  root.computeWorldMatrix(true);

  const minTileHeight = Math.min(h00, h10, h01, h11) + offsetHeight + typeOffsetHeight;
  let bottomOffset = 0;
  let postBounds = null;
  try {
    postBounds = root.getHierarchyBoundingVectors(true);
    bottomOffset = minTileHeight - (postBounds ? postBounds.min.y : 0);
    if (postBounds && Math.abs(bottomOffset) > 1e-3) {
      root.position.y += bottomOffset;
      root.computeWorldMatrix(true);
      postBounds = root.getHierarchyBoundingVectors(true);
    }
    const objTypePlacement = obj && Number.isFinite(obj.type) ? (obj.type | 0) : -1;
    if ((objTypePlacement === 4 || objTypePlacement === 5) && postBounds) {
      const actualHeight = postBounds.max.y - postBounds.min.y;
      const clampedHeight = Math.min(actualHeight, tileSize * 1.5);
      const lift = Math.max(0, (tileSize * 1.5) - clampedHeight);
      if (lift > 1e-3) {
        root.position.y += lift;
        root.computeWorldMatrix(true);
        postBounds = root.getHierarchyBoundingVectors(true);
      }
    }
  } catch (err) {
    console.warn('Footprint placement: post-rotation bounds failed', err);
  }

  if (window.DEBUG_OBJECT_PLACEMENT) {
    console.log('Footprint placement', {
      tileX,
      tileZ,
      widthTilesWorld,
      depthTilesWorld,
      desiredWidthLocal,
      desiredDepthLocal,
      scaleAdjustX,
      scaleAdjustY,
      scaleAdjustZ,
      slopeQuat,
      yawQuat,
      offsets: { x: offsetXWorld, z: offsetZWorld, h: offsetHeight },
      typeOffset: typePlacement?.worldOffset || null,
      translate: obj?.translate || null,
      bottomOffset,
      postBounds: postBounds ? { min: postBounds.min.asArray(), max: postBounds.max.asArray() } : null,
      surfaceNormal: surfaceNormal.asArray(),
    });
  }

  const previousMeta = root.metadata || {};
  const rsObjectInfo = Object.assign({}, previousMeta.rsObjectInfo, {
    id: Number.isFinite(Number(obj?.id)) ? (Number(obj.id) | 0) : obj?.id,
    type: Number.isFinite(Number(obj?.type)) ? (Number(obj.type) | 0) : obj?.type,
    tileX,
    tileZ,
    plane: Number.isFinite(Number(obj?.plane)) ? (Number(obj.plane) | 0) : 0,
    isSecondary: !!obj?.__type2Secondary,
  });

  root.metadata = {
    ...previousMeta,
    worldPosition: { x: root.position.x, y: root.position.y, z: root.position.z },
    surfaceNormal: surfaceNormal.asArray(),
    boundsPost: postBounds ? { min: postBounds.min.asArray(), max: postBounds.max.asArray() } : null,
    rsObjectInfo,
  };
}

function rsScaleFactor(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n / 128 : 1;
}

function rsHorizontalOffset(value, tileSize) {
  const n = Number(value);
  if (!Number.isFinite(n) || n === 0) return 0;
  const size = Number.isFinite(tileSize) && tileSize !== 0 ? tileSize : 1;
  return (n / 128) * size;
}

function rsVerticalOffset(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n / 128 : 0;
}

function applyLegacyModelScale(root, obj) {
  if (!root || !obj) return;
  const baseScale = obj.scale || {};
  const modelSize = obj.modelSize || {};
  const scaleVec = new BABYLON.Vector3(
    rsScaleFactor(baseScale.x) * rsScaleFactor(modelSize.x),
    rsScaleFactor(baseScale.y) * rsScaleFactor(modelSize.h),
    rsScaleFactor(baseScale.z) * rsScaleFactor(modelSize.y)
  );
  if (
    Math.abs(scaleVec.x - 1) < 1e-6 &&
    Math.abs(scaleVec.y - 1) < 1e-6 &&
    Math.abs(scaleVec.z - 1) < 1e-6
  ) {
    return;
  }
  const current = root.scaling ? root.scaling.clone() : BABYLON.Vector3.One();
  current.x *= scaleVec.x;
  current.y *= scaleVec.y;
  current.z *= scaleVec.z;
  root.scaling = current;
}

function applyLegacyTranslation(root, obj, tileSize) {
  if (!root || !obj) return;
  const translate = obj.translate || {};
  const tx = rsHorizontalOffset(translate.x, tileSize);
  const ty = rsVerticalOffset(translate.y);
  const tz = rsHorizontalOffset(translate.z, tileSize);
  if (Math.abs(tx) < 1e-4 && Math.abs(ty) < 1e-4 && Math.abs(tz) < 1e-4) return;
  const localVec = new BABYLON.Vector3(tx, ty, tz);
  let rotated = localVec;
  if (root.rotationQuaternion) {
    const mat = BABYLON.Matrix.FromQuaternion(root.rotationQuaternion);
    rotated = BABYLON.Vector3.TransformCoordinates(localVec, mat);
  }
  root.position.addInPlace(rotated);
}


// Type-specific placement tweaks. Each case returns offsets/scale overrides tailored to legacy RS behavior.
function applyTypeSpecificPlacement(obj, tileSize) {
  if (!obj || typeof obj.type !== 'number') return null;
  const type = obj.type | 0;
  switch (type) {
    case 0:
    case 2:
      return computeStraightWallPlacement(obj, tileSize);
    case 1:
      return computeDiagonalWallPlacement(obj, tileSize);
    case 3:
      return computeSquareCornerWallPlacement(obj, tileSize);
    case 4:
    case 5: {
      const objId = Number(obj.id);
      const forceThin = Number.isFinite(objId) && THIN_DECORATIONS.has(objId | 0);
      return computeWallDecorationPlacement(obj, tileSize, forceThin);
    }
    case 10:
      return computeRegularObjectPlacement(obj, tileSize);
    case 11: {
      const placement = computeRegularObjectPlacement(obj, tileSize);
      if (placement) {
        placement.yawOffset = (placement.yawOffset || 0) + Math.PI * 0.25;
      }
      return placement;
    }
    case 22:
      return computeFloorObjectPlacement(obj, tileSize);
    default:
      return null;
  }
}






// Straight wall (type 0).
// RS cache stores four segments end-to-end at smaller scale; map axes are flipped (RS X -> Babylon Z).
// Stretch along tile length, keep native thin depth, add 90 degrees yaw, hug tile edge.
function computeStraightWallPlacement(obj, tileSize) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const rotSteps = (obj.rot | 0) & 3;
  const thickness = size * 0.5;
  const halfWall = 0.5 * thickness;
  const isType2Leg = (obj?.type | 0) === 2 || obj?.__type2Secondary || obj?.__type2Primary;
  const edgeFactor = 0.45;
  const offsetMagnitude = (size * edgeFactor) - halfWall;
  const spanWidth = isType2Leg ? (size + 0.4 * thickness) : size;
  let offsetX = 0;
  let offsetZ = 0;
  switch (rotSteps) {
    case 0:
      offsetZ -= offsetMagnitude;
      break;
    case 1:
      offsetX += offsetMagnitude;
      break;
    case 2:
      offsetZ += offsetMagnitude;
      break;
    case 3:
      offsetX -= offsetMagnitude;
      break;
    default:
      break;
  }
  const yawOffset = Math.PI * 0.5;
  return {
    desiredWidthLocal: spanWidth,
    desiredDepthLocal: size * 0.1,
    worldOffset: { x: offsetX, y: 0, z: offsetZ },
    yawOffset,
    scale: {
      // Straight walls look closer to the RS client when height is doubled.
      desiredHeight: size * 2.05,
    },
  };
}

// Wall corner (type 1).
// Keep diagonal geometry but clamp thickness so it matches straight walls.
function computeDiagonalWallPlacement(obj, tileSize) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const thickness = size * 0.1;
  const yawOffset = Math.PI * 1;
  const rotSteps = (obj.rot | 0) & 3;
  const edgeOffset = 1.05*thickness;
  let offsetX = 0;
  let offsetZ = 0;

  switch (rotSteps) {
    case 0: // north-west corner
      offsetX -= edgeOffset;
      offsetZ += edgeOffset;
      break;
    case 1: // north-east corner
      offsetX -= edgeOffset;
      offsetZ -= edgeOffset;
      break;
    case 2: // south-east corner
      offsetX += edgeOffset;
      offsetZ -= edgeOffset;
      break;
    case 3: // south-west corner
      offsetX += edgeOffset;
      offsetZ += edgeOffset;
      break;
    default:
      break;
  }

  const cosYaw = Math.cos(-yawOffset);
  const sinYaw = Math.sin(-yawOffset);
  const adjustedOffsetX = offsetX * cosYaw - offsetZ * sinYaw;
  const adjustedOffsetZ = offsetX * sinYaw + offsetZ * cosYaw;
  return {
    desiredWidthLocal: thickness,
    desiredDepthLocal: thickness,
    yawOffset,
    worldOffset: { x: adjustedOffsetX, y: 0, z: adjustedOffsetZ },
    scale: {
      desiredHeight: size * 2.05,
    },
  };
}

// Square corner wall (type 3).
// Uses same thin thickness on both axes so the post hugs a tile corner.
// Offsets push the mesh into the correct corner based on rotation.
function computeSquareCornerWallPlacement(obj, tileSize) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const rotSteps = (obj.rot | 0) & 3;
  const thickness = size * 0.1;
  const halfSpan = thickness ;
  const edgeOffset = 0.5 * (size - halfSpan);

  let offsetX = 0;
  let offsetZ = 0;
  switch (rotSteps) {
    case 0: // north-west corner
      offsetX -= 1.10*edgeOffset;
      offsetZ -= 0.8*edgeOffset;
      break;
    case 1: // north-east corner
      offsetX += 0.8*edgeOffset;
      offsetZ -= 1.1*edgeOffset;
      break;
    case 2: // south-east corner
      offsetX += 1.2*edgeOffset;
      offsetZ += 0.85*edgeOffset;
      break;
    case 3: // south-west corner
      offsetX -= 0.75*edgeOffset;
      offsetZ += 1.15*edgeOffset;
      break;
    default:
      break;
  }

  const yawOffset = -Math.PI * 0.5;
  const cosYaw = Math.cos(-yawOffset);
  const sinYaw = Math.sin(-yawOffset);
  const adjustedOffsetX = offsetX * cosYaw - offsetZ * sinYaw;
  const adjustedOffsetZ = offsetX * sinYaw + offsetZ * cosYaw;
  return {
    desiredWidthLocal: thickness,
    desiredDepthLocal: thickness,
    worldOffset: { x: adjustedOffsetX, y: 0, z: adjustedOffsetZ },
    yawOffset: yawOffset,
    scale: {
      desiredHeight: size * 2.05,
    },
  };
}

// Wall decoration (type 4 or 5).
// Keep mesh proportions but stretch the longest axis to one tile.
function computeWallDecorationPlacement(obj, tileSize, forceThin = false) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  const thickness = size * 0.1;
  const yawOffset = Math.PI * 0.5;
  let offsetX = 0;
  let offsetY = size * 0.5;
  let offsetZ = 0;
  const edgeOffset = forceThin ? 0.3 * (size - thickness) : -0.1 * (size - thickness);
  const rotSteps = (obj.rot | 0) & 3;

  switch (rotSteps) {
    case 0:
      offsetX -= edgeOffset;
      offsetZ += 0;
      break;
    case 1:
      offsetX += 0;
      offsetZ += edgeOffset;
      break;
    case 2:
      offsetX -= edgeOffset;
      offsetZ += 0;
      break;
    case 3:
      offsetX -= 0;
      offsetZ -= edgeOffset;
      break;
    default:
      break;
  }

  const forcedKey = `${obj?.type | 0}-${obj?.id | 0}`;
  if (FORCED_TYPE_TRANSLATIONS.has(forcedKey)) {
    const translations = FORCED_TYPE_TRANSLATIONS.get(forcedKey);
    offsetX += translations[0];
    offsetZ += translations[1];
    console.log(obj.id,offsetX, offsetZ)
    if(translations.length === 3){
      offsetY += translations[2];
    }
  }

  const cosYaw = Math.cos(-yawOffset);
  const sinYaw = Math.sin(-yawOffset);
  const adjustedOffsetX = offsetX * cosYaw - offsetZ * sinYaw;
  const adjustedOffsetZ = offsetX * sinYaw + offsetZ * cosYaw;
  
  

  return {
    desiredWidthLocal: size,
    desiredDepthLocal: forceThin ? size * 0.05 : size,
    worldOffset: { x: adjustedOffsetX, y: offsetY, z: adjustedOffsetZ },
    yawOffset,
    scale: {
      wallSpanZ: size,
      maxDepthX: forceThin ? size * 0.05 : size * 0.5,
    },
  };
}
// diagonal Wall (type 9).
// No Changes

// Regular ground objects (type 10) - rotate to match RS client and scale longest axis to a tile.
function computeRegularObjectPlacement(obj, tileSize) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  let offsetX = 0;
  let offsetY = 0;
  let offsetZ = 0;
  let edgeOffset = 0;//-(0.75 - 0.5*size);
  const rotSteps = (obj.rot | 0) & 3;
  const widthTiles = Number.isFinite(obj?.size?.x) ? obj.size.x : 1;
  const depthTiles = Number.isFinite(obj?.size?.y) ? obj.size.y : 1;
  if(widthTiles > 1 || depthTiles > 1) {
    edgeOffset = 0.5
  }
  let yawOffset = Math.PI * 0.5;
  const forcedKey = `${obj?.type | 0}-${obj?.id | 0}`;
  if (FORCED_TYPE_ROTATIONS.has(forcedKey)) {
    yawOffset += FORCED_TYPE_ROTATIONS.get(forcedKey);
  }

  switch (rotSteps) {
    case 0:
      offsetX += edgeOffset;
      offsetZ += edgeOffset;
    case 1:
      offsetX -= edgeOffset;
      offsetZ -= edgeOffset;
      break;
    case 2:
      offsetX += edgeOffset; // to be rechecked later
      offsetZ += edgeOffset; // to be rechecked later
      break;
    case 3:
      offsetX -= edgeOffset;
      offsetZ -= edgeOffset;
      break;
    default:
      break;
  }

  if (FORCED_TYPE_TRANSLATIONS.has(forcedKey)) {
    const translations = FORCED_TYPE_TRANSLATIONS.get(forcedKey);
    offsetX += translations[0];
    offsetZ += translations[1];
    if(translations.length === 3){
      offsetY = translations[2];
    }
  }

  const cosYaw = Math.cos(-yawOffset);
  const sinYaw = Math.sin(-yawOffset);
  const adjustedOffsetX = offsetX * cosYaw - offsetZ * sinYaw;
  const adjustedOffsetZ = offsetX * sinYaw + offsetZ * cosYaw;
  
  
  return {
    yawOffset,
    worldOffset: { x: adjustedOffsetX, y: offsetY, z: adjustedOffsetZ },
    scale: {
      fitLongestAxis: size,
    },
  };
}

// type 22

function computeFloorObjectPlacement(obj, tileSize) {
  const size = Number.isFinite(tileSize) && tileSize > 0 ? tileSize : 1;
  let yawOffset = Math.PI * 1.5;
  let offsetX = 0;
  let offsetZ = 0;
  const edgeOffset = 0*size;
  const rotSteps = (obj.rot | 0) & 3;
  const forcedKey = `${obj?.type | 0}-${obj?.id | 0}`;
  if (FORCED_TYPE_ROTATIONS.has(forcedKey)) {
    yawOffset += FORCED_TYPE_ROTATIONS.get(forcedKey);
  }

  switch (rotSteps) {
    case 0:
      offsetX += edgeOffset;
      offsetZ += 0;
      break;
    case 1:
      offsetX += 0;
      offsetZ -= edgeOffset;
      break;
    case 2:
      offsetX += edgeOffset;
      offsetZ += 0;
      break;
    case 3:
      offsetX -= 0;
      offsetZ += edgeOffset;
      break;
    default:
      break;
  }

  const cosYaw = Math.cos(-yawOffset);
  const sinYaw = Math.sin(-yawOffset);
  const adjustedOffsetX = offsetX * cosYaw - offsetZ * sinYaw;
  const adjustedOffsetZ = offsetX * sinYaw + offsetZ * cosYaw;
  return {
    yawOffset,
    worldOffset: { x: adjustedOffsetX, y: size * 0.01, z: adjustedOffsetZ},
  };
}




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

const THIN_DECORATIONS = new Set([6959, 6960, 6963, 6964]);

const FORCED_TYPE_TRANSLATIONS = new Map([
  // key: `${type}-${id}` -> x and z translations
  //["4-6963",[0,0.1]],
  //["4-6964",[0,0.1]],
  ["10-2725",[-0.5,-0.5]],
  ["10-836",[0.5,0.5,1]],
  ["10-610",[0.5,0.5]],
  ["10-595",[-0.5,-0.5]],
]);

const FORCED_TYPE_ROTATIONS = new Map([
  // key: `${type}-${id}` -> radians to add
  ["10-409", Math.PI],
  ["10-610", Math.PI],
  ["10-820", Math.PI],
  ['10-3500', Math.PI],
  ["10-5788", Math.PI],
  ["10-9160", Math.PI],
  ["10-9514", Math.PI],
  ["22-917", -0.5*Math.PI],
  ["22-928", -0.5*Math.PI],
  ["22-934", -0.5*Math.PI],
  ["22-940", -0.5*Math.PI],
]);




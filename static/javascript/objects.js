// Set to a type number to render only matching objects (e.g., 3 for square corners).
const DEBUG_OBJECT_TYPE = null;
const HARDWARE_INSTANCE_ALLOWLIST = new Set([890, 6959]);
const HARDWARE_INSTANCE_BLOCKLIST = new Set();

// POST map objects to GLTFs via backend, duplicating instances per location.
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

  for (const entry of uniqueEntries) {
    const entryDefinition = entry?.objectdef || entry?.objectDef;
    const animId = Number(entryDefinition?.animationID);
    if (
      Number.isFinite(animId) &&
      animId >= 0 &&
      typeof AnimationStore?.prepareAnimation === 'function'
    ) {
      try {
        const animOptions = buildAnimationOptions(entry);
        const animData = await AnimationStore.prepareAnimation(animId, animOptions);
        console.log(
          `Animation ${animId} JSON ready (backend response phase). frameCount=`,
          animData?.frameCount
        );
        scene.metadata = scene.metadata || {};
        scene.metadata.animations = scene.metadata.animations || new Map();
        const key = JSON.stringify({ animId, ...animOptions });
        scene.metadata.animations.set(key, animData);
      } catch (animErr) {
        console.warn(`Failed to prepare animation ${animId}:`, animErr);
      }
    }
  }

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
      const meshExtras = await ensureGltfExtras(gltfFilename);
      try {
        container = await BABYLON.SceneLoader.LoadAssetContainerAsync('', gltfUrl, scene);
        if (meshExtras && Array.isArray(meshExtras)) {
          container.meshes.forEach((mesh, idx) => {
            const extrasEntry = meshExtras[idx];
            if (!extrasEntry) return;
            const primitiveExtras = extrasEntry.primitiveExtras || [];
            const meshLevelExtras = extrasEntry.meshExtras || null;
            const firstPrimExtras = primitiveExtras.find((prim) => prim && prim.rs_to_gltf);
            mesh.metadata = mesh.metadata || {};
            mesh.metadata.gltf = mesh.metadata.gltf || {};
            const targetExtras = mesh.metadata.gltf.extras = mesh.metadata.gltf.extras || {};
            if (firstPrimExtras && firstPrimExtras.rs_to_gltf) {
              targetExtras.rs_to_gltf = firstPrimExtras.rs_to_gltf;
              if (mesh.geometry) {
                mesh.geometry.metadata = mesh.geometry.metadata || {};
                mesh.geometry.metadata.rs_to_gltf = firstPrimExtras.rs_to_gltf;
              }
            }
            if (meshLevelExtras && typeof meshLevelExtras === 'object') {
              Object.keys(meshLevelExtras).forEach((key) => {
                targetExtras[key] = meshLevelExtras[key];
              });
            }
          });
        }
        cache.containers.set(key, container);
      } catch (loadErr) {
        console.warn('Failed to load GLTF asset', gltfUrl, loadErr);
        return [];
      }
    }

    const entryDefinition = entry.objectdef || null;
    const instanceReport = evaluateHardwareInstanceEligibility(entry, entryDefinition, container);
    logHardwareInstanceReport(instanceReport);


    return instantiateObjectInstances(scene, entry, occurrences, ctx, container, cache, key);
  });

  const renderedRootsNested = await Promise.all(renderPromises);
  return renderedRootsNested.flat();
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
    const meshes = [];
    if (root instanceof BABYLON.Mesh) {
      meshes.push(root);
    }
    if (typeof root.getChildMeshes === 'function') {
      root.getChildMeshes(true).forEach((mesh) => meshes.push(mesh));
    }
    meshes.forEach((mesh) => copyGltfMetadataFromSource(mesh));

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

    const meshesForUpdate = [];
    if (root instanceof BABYLON.Mesh) {
      meshesForUpdate.push(root);
    }
    if (typeof root.getChildMeshes === 'function') {
      const childMeshes = root.getChildMeshes(true);
      childMeshes.forEach((mesh) => meshesForUpdate.push(mesh));
    }
    for (const mesh of meshesForUpdate) {
      copyGltfMetadataFromSource(mesh);
      makeMeshGeometryUpdatable(mesh);
      scene.onAfterRenderObservable.addOnce(() => {
        registerAnimatedObjectTextures(scene, mesh).catch((err) => {
          console.warn('registerAnimatedObjectTextures failed', err);
        });
      });
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

    const animId =
      Number(
        enrichedOccurrence?.definition?.animationID ??
          entryDefinition?.animationID ??
          -1
      ) | 0;
    if (
      Number.isFinite(animId) &&
      animId >= 0 &&
      typeof AnimationStore?.bindAnimationToNode === 'function'
    ) {
      const animOptions = {
        scaleDivisor: 1,
        ...buildAnimationOptions(entry),
      };
      AnimationStore.bindAnimationToNode(root, animId, animOptions).catch((err) => {
        console.warn(`Failed to bind animation ${animId} to object ${entry.object_id}:`, err);
      });
    }

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
  const meshesToBake = root.getChildMeshes ? root.getChildMeshes(true) : [];
  meshesToBake.forEach((child) => {
    if (typeof child.bakeCurrentTransforms === 'function') {
      child.bakeCurrentTransforms(true);
      child.position.set(0, 0, 0);
      child.rotation.set(0, 0, 0);
      child.scaling.set(1, 1, 1);
    }
  });
  root.metadata = {
    ...previousMeta,
    worldPosition: { x: root.position.x, y: root.position.y, z: root.position.z },
    surfaceNormal: surfaceNormal.asArray(),
    boundsPost: postBounds ? { min: postBounds.min.asArray(), max: postBounds.max.asArray() } : null,
    rsObjectInfo,
  };
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

function evaluateHardwareInstanceEligibility(entry, definition, container) {
  const objectId = Number(entry?.object_id ?? entry?.id ?? -1);
  const typeId = Number(entry?.model_type ?? entry?.type ?? -1);
  const passesAllowlist =
    HARDWARE_INSTANCE_ALLOWLIST.size === 0 || HARDWARE_INSTANCE_ALLOWLIST.has(objectId);
  const blockedByBlocklist = HARDWARE_INSTANCE_BLOCKLIST.has(objectId);
  const hasInteractive = hasInteractiveActions(definition);
  const animIdRaw = Number(definition?.animationID ?? definition?.animationId ?? -1);
  const hasAnimationId = Number.isFinite(animIdRaw) && animIdRaw >= 0;
  const hasAnimatedFaces = containerHasAnimatedFaces(container);
  const eligible =
    passesAllowlist &&
    !blockedByBlocklist &&
    !hasInteractive &&
    !hasAnimationId &&
    !hasAnimatedFaces;
  return {
    objectId,
    typeId,
    passesAllowlist,
    blockedByBlocklist,
    hasInteractiveActions: hasInteractive,
    hasAnimationId,
    hasAnimatedFaces,
    eligible,
  };
}

function hasInteractiveActions(definition) {
  if (!definition) return false;
  const actions = definition.actions;
  if (!Array.isArray(actions) || actions.length === 0) return false;
  return actions.some((action) => {
    if (action == null) return false;
    const str = String(action).trim().toLowerCase();
    return str.length > 0 && str !== 'none';
  });
}

function containerHasAnimatedFaces(container) {
  if (!container || !Array.isArray(container.meshes)) return false;
  return container.meshes.some((mesh) => {
    const extras = mesh?.metadata?.gltf?.extras;
    return extras && Array.isArray(extras.rs_animated_faces) && extras.rs_animated_faces.length > 0;
  });
}

function logHardwareInstanceReport(report) {
  if (!report) return;
  console.log(
    `[InstanceEligibility id=${report.objectId} type=${report.typeId}] eligible=${report.eligible}`,
    report,
  );
}

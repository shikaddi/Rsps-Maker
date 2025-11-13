// Simple animation JSON fetcher with memoisation. Extensible for future CPU playback.
// for console debug purposes: const mesh = AnimationStore.__debugLastMesh;

(function attachAnimationFetcher(global) {
  const rawCache = new Map();
  const preparedCache = new Map();
  const animatorMap = new WeakMap();
  const BABYLON_NS = global.BABYLON;
  const meshAnimationCache = new WeakMap();

  // to be kept unchanged
  function getRsToGltfMapping(mesh) {
    if (!mesh) return null;
    const metadata = mesh.metadata || mesh._metadata;
    if (!metadata) return null;
    const gltfMeta = metadata.gltf || {};
    const extras = gltfMeta.extras || metadata.extras;
    const mapping = extras && extras.rs_to_gltf;
    if (Array.isArray(mapping)) return mapping;
    const geoMeta = mesh.geometry && mesh.geometry.metadata && mesh.geometry.metadata.rs_to_gltf;
    return Array.isArray(geoMeta) ? geoMeta : null;
  }

  // cleaned up
  function getMeshExtras(mesh) {
    if (!mesh) return null;
    const meta = mesh.metadata || mesh._metadata || {};
    const gltfExtras = meta.gltf && meta.gltf.extras ? meta.gltf.extras : null;
    if (gltfExtras) return gltfExtras;
    return meta.extras || null;
  }

  // cleaned up
  function remapAnimationForMesh(animData, mesh) {
    if (!animData || !mesh) return animData;
    const mapping = getRsToGltfMapping(mesh);
    if (!mapping) return animData;

    const extras = getMeshExtras(mesh) || {};
    const skinGroups = Array.isArray(extras.vertex_skin_groups)
      ? extras.vertex_skin_groups
      : buildSkinGroupsFromVertexSkin(extras.vertex_skins);

    let cache = meshAnimationCache.get(mesh);
    if (!cache) {
      cache = new Map();
      meshAnimationCache.set(mesh, cache);
    }
    if (cache.has(animData)) return cache.get(animData);

    const remappedGroups = (animData.groups || []).map((group) =>
      remapGroupVertices(group, mapping, skinGroups),
    );

    const remappedAnim = Object.freeze({
      ...animData,
      groups: Object.freeze(remappedGroups),
    });
    cache.set(animData, remappedAnim);
    return remappedAnim;
  }

  // new helper
  function buildSkinGroupsFromVertexSkin(vertexSkins) {
    if (!Array.isArray(vertexSkins)) return null;
    const buckets = [];
    for (let i = 0; i < vertexSkins.length; i += 1) {
      const gid = Number(vertexSkins[i]);
      if (!Number.isFinite(gid) || gid < 0) continue;
      if (!buckets[gid]) buckets[gid] = [];
      buckets[gid].push(i);
    }
    return buckets.length ? buckets : null;
  }

  // new helper
  function remapGroupVertices(group, mapping, skinGroups) {
    const rsVertexSet = new Set();
    const rsCount = mapping.length;

    if (skinGroups && group.skinGroups && group.skinGroups.length) {
      group.skinGroups.forEach((skinIdRaw) => {
        const skinId = Number(skinIdRaw);
        const bucket = skinGroups[skinId];
        if (!Array.isArray(bucket)) return;
        bucket.forEach((vid) => {
          if (Number.isFinite(vid) && vid >= 0) rsVertexSet.add(vid);
        });
      });
    } else if (group.vertices && group.vertices.length) {
      group.vertices.forEach((vidRaw) => {
        const vid = Number(vidRaw) | 0;
        if (vid >= 0) rsVertexSet.add(vid);
      });
    }

    const remapped = new Set();
    rsVertexSet.forEach((rsIdxRaw) => {
      const rsIndex = Number(rsIdxRaw) | 0;
      if (rsIndex < 0 || rsIndex >= rsCount) return;
      (mapping[rsIndex] || []).forEach((glIdx) => {
        const gi = Number(glIdx) | 0;
        if (Number.isFinite(gi) && gi >= 0) remapped.add(gi);
      });
    });

    const outArr = Array.from(remapped).sort((a, b) => a - b);
    return Object.freeze({
      groupIndex: group.groupIndex,
      opcode: group.opcode,
      vertices: new Uint32Array(outArr),
    });
  }

  // unchanged
  function buildAnimationCacheKey(animationId, options = {}) {
    const parts = [animationId | 0];
    if (options.objectId != null) parts.push(`obj=${options.objectId | 0}`);
    if (options.modelType != null) parts.push(`type=${options.modelType | 0}`);
    if (options.modelId != null) parts.push(`model=${options.modelId | 0}`);
    return parts.join('|');
  }

  // simplified
  function resolveAnimationUrl(animationId, options = {}) {
    const params = new URLSearchParams();
    const cacheKey = buildAnimationCacheKey(animationId, options);
    if (options.objectId != null) params.append('object_id', options.objectId);
    if (options.modelType != null) params.append('model_type', options.modelType);
    if (options.modelId != null) params.append('model_id', options.modelId);
    const qs = params.toString();
    const url = qs ? `/api/animation/${animationId}?${qs}` : `/api/animation/${animationId}`;
    return { url, cacheKey };
  }

  // simplified
  async function fetchAnimationJson(animationId, options = {}) {
    const { url, cacheKey } = resolveAnimationUrl(animationId, options);
    if (rawCache.has(cacheKey)) {
      return rawCache.get(cacheKey);
    }
    const fetchPromise = (async () => {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) {
        throw new Error(`Animation ${animationId} fetch failed with HTTP ${res.status}`);
      }
      return res.json();
    })();

    rawCache.set(cacheKey, fetchPromise);
    try {
      const data = await fetchPromise;
      rawCache.set(cacheKey, data);
      return data;
    } catch (err) {
      rawCache.delete(cacheKey);
      throw err;
    }
  }

  // When switching to morph targets, bake per-frame vertex data here.
  function buildPreparedAnimation(animationId, payload, options = {}) {
    if (!payload || typeof payload !== 'object') {
      throw new Error(`Invalid animation payload for id ${animationId}`);
    }
    const tickLengthMs = Number.isFinite(options.tickLengthMs)
      ? options.tickLengthMs
      : 20; // RuneScape cycles are 20ms

    const groups = Array.isArray(payload.groups)
      ? payload.groups.map((group, index) => {
          const opcode = Number(group?.opcode) | 0;
          const skinGroups = Array.isArray(group?.skinGroups)
            ? new Uint16Array(group.skinGroups.map((v) => Number(v) | 0))
            : new Uint16Array();
          const legacyVertices = Array.isArray(group?.vertices)
            ? new Uint16Array(group.vertices.map((v) => Number(v) | 0))
            : new Uint16Array();
          return Object.freeze({
            groupIndex: index,
            opcode,
            skinGroups,
            vertices: legacyVertices,
          });
        })
      : [];

    const frameOrder = Array.isArray(payload.frameOrder)
      ? payload.frameOrder.map((fid) => Number(fid) | 0)
      : [];

    const frameLookup = new Map();
    if (Array.isArray(payload.frames)) {
      payload.frames.forEach((frame) => {
        if (!frame) return;
        const key =
          Number.isFinite(frame.frameId) && frame.frameId >= 0
            ? Number(frame.frameId) | 0
            : Number(frame.frameIndex) | 0;
        if (Number.isFinite(key)) {
          frameLookup.set(key, frame);
        }
      });
    }

    const delays = Array.isArray(payload.sequence?.delays)
      ? payload.sequence.delays.map((d) => Number(d) | 0)
      : [];
    const frames = [];
    frameOrder.forEach((frameId, orderIndex) => {
      const src = frameLookup.get(frameId);
      if (!src || !Array.isArray(src.steps)) return;
      const stepsCount = src.steps.length;
      const packed = new Int16Array(stepsCount * 4);
      src.steps.forEach((step, idx) => {
        const base = idx * 4;
        packed[base + 0] = Number(step?.group) | 0;
        packed[base + 1] = Number(step?.dx) | 0;
        packed[base + 2] = Number(step?.dy) | 0;
        packed[base + 3] = Number(step?.dz) | 0;
      });
      const delayTicks =
        orderIndex < delays.length ? delays[orderIndex] | 0 : 1;
      const delayMs =
        delayTicks > 0 ? delayTicks * tickLengthMs : tickLengthMs;
      frames.push(
        Object.freeze({
          frameId,
          orderIndex,
          steps: packed,
          stepCount: stepsCount,
          delayTicks,
          delayMs,
        }),
      );
    });

    const loopDelayTicks = Number(payload.sequence?.loopDelay ?? 0) | 0;
    const prepared = Object.freeze({
      animationId: Number(payload.animationId ?? animationId) | 0,
      baseMesh: payload.baseMesh || '',
      frameCount: frames.length,
      tickLengthMs,
      loopDelayTicks,
      loopDelayMs: loopDelayTicks > 0 ? loopDelayTicks * tickLengthMs : 0,
      forcedPriority: Number(payload.sequence?.forcedPriority ?? 5) | 0,
      groups: Object.freeze(groups),
      frames: Object.freeze(frames),
      raw: payload,
    });
    return prepared;
  }

  // GPU-ready version: mirror the current structure so morph-target baking can hook in later.
  function buildPreparedAnimationGpu(animationId, payload, options = {}) {
    const prepared = buildPreparedAnimation(animationId, payload, options);
    return {
      ...prepared,
      gpu: {
        framePositions: [],
        frameColors: [],
        vertexCount: 0,
        vertexStride: 3,
      },
    };
  }

  // to be deleted later
  async function prepareAnimation(animationId, options = {}) {
    const cacheKey = buildAnimationCacheKey(animationId, options);
    if (preparedCache.has(cacheKey)) {
      return preparedCache.get(cacheKey);
    }
    const payload = await fetchAnimationJson(animationId, options);
    const prepared = buildPreparedAnimationGpu(animationId, payload, options);
    preparedCache.set(cacheKey, prepared);
    return prepared;
  }

  // to be deleted later
  function detachAnimator(mesh) {
    const state = animatorMap.get(mesh);
    if (!state) return;
    const scene = state.scene;
    if (scene && state.observer) {
      scene.onBeforeRenderObservable.remove(state.observer);
    }
    if (state.kind && mesh && typeof mesh.updateVerticesData === 'function' && state.basePositions) {
      try {
        mesh.updateVerticesData(state.kind, state.basePositions, true, true);
        if (typeof mesh.refreshBoundingInfo === 'function') {
          mesh.refreshBoundingInfo(true);
        }
        if (typeof mesh.markSubMeshesAsDirty === 'function') {
          mesh.markSubMeshesAsDirty(state.kind);
        }
        if (typeof mesh.markAsDirty === 'function') {
          mesh.markAsDirty(state.kind);
        }
      } catch (_) {
        // ignore restore errors
      }
    }
    animatorMap.delete(mesh);
  }

  // Core of GPU pathway
  function computeGpuAnimation(animData, options = {}) {
    const { mesh, scaleDivisor = 128 } = options;
    if (!mesh || !animData) return null;
    global.AnimationStore.__debugLastMesh = mesh;
    const scene = mesh.getScene ? mesh.getScene() : null;
    if (!scene) return null;
    const kind =
      (BABYLON_NS && BABYLON_NS.VertexBuffer && BABYLON_NS.VertexBuffer.PositionKind) ||
      (BABYLON_NS && BABYLON_NS.Mesh && BABYLON_NS.Mesh.POSITION_KIND) ||
      'position';
    if (typeof mesh.isVerticesDataPresent === 'function' && !mesh.isVerticesDataPresent(kind)) {
      return false;
    }
    if (typeof mesh.makeGeometryUnique === 'function') {
      mesh.makeGeometryUnique();
    }
    if (mesh.rotationQuaternion) {
      mesh.rotationQuaternion = null;
    }

    const pos = mesh.getVerticesData ? mesh.getVerticesData(kind) : null;
    const kind2 = (BABYLON && BABYLON.VertexBuffer && BABYLON.VertexBuffer.PositionKind) || 'position';
    if (pos && typeof mesh.setVerticesData === 'function') { 
      // recreate the GPU buffer with updatable = true 
      mesh.setVerticesData(kind2, pos, true); 
    }

    const positions = mesh.getVerticesData ? mesh.getVerticesData(kind, true, true) : null;
    if (!positions || positions.length === 0) return false;

    /*console.log(
      `[AnimationStore] mesh ${mesh.name || mesh.id} position sample (first 30 floats):`,
      Array.from(positions.slice(0, 30)),
    );*/

    const basePositions =
    positions instanceof Float32Array ? new Float32Array(positions) : new Float32Array(positions);
    const workingPositions = new Float32Array(basePositions);
    const vertexStride = 3;
    const groupVertices = animData.groups.map((group) => group.vertices);
    const groupOpcodes = animData.groups.map((group) => Number(group.opcode) | 0);
    const groupPivots = groupVertices.map((verts) => {
      if (!verts || verts.length === 0) return [0, 0, 0];
      let sxAcc = 0;
      let syAcc = 0;
      let szAcc = 0;
      for (let i = 0; i < verts.length; i += 1) {
        const idx = verts[i] * vertexStride;
        sxAcc += basePositions[idx];
        syAcc += basePositions[idx + 1];
        szAcc += basePositions[idx + 2];
      }
      const count = verts.length || 1;
      return [sxAcc / count, syAcc / count, szAcc / count];
    });
    const meshExtras = getMeshExtras(mesh) || {};
    const faceSkinGroups = Array.isArray(meshExtras.face_skin_groups)
      ? meshExtras.face_skin_groups
      : null;
    const indices = (typeof mesh.getIndices === 'function' && mesh.getIndices()) || null;
    const faceVertexGroups = faceSkinGroups && indices && indices.length
      ? faceSkinGroups.map((faces) => {
          if (!Array.isArray(faces) || faces.length === 0) return null;
          const unique = new Set();
          faces.forEach((faceIdx) => {
            const base = Number(faceIdx) * 3;
            if (base + 2 >= indices.length || base < 0) return;
            unique.add(indices[base]);
            unique.add(indices[base + 1]);
            unique.add(indices[base + 2]);
          });
          return unique.size ? Array.from(unique) : null;
        })
      : [];

    const colorKind =
      (BABYLON_NS && BABYLON_NS.VertexBuffer && BABYLON_NS.VertexBuffer.ColorKind) ||
      (BABYLON_NS && BABYLON_NS.Mesh && BABYLON_NS.Mesh.COLOR_KIND) ||
      'color';
    let baseColors = null;
    let workingColors = null;
    if (faceVertexGroups.some((grp) => grp && grp.length)) {
      let colorData = mesh.getVerticesData ? mesh.getVerticesData(colorKind, true, true) : null;
      const vertexCount = basePositions.length / 3;
      if (!colorData || colorData.length === 0) {
        colorData = new Float32Array(vertexCount * 4);
        for (let i = 0; i < vertexCount; i += 1) {
          const base = i * 4;
          colorData[base + 0] = 1;
          colorData[base + 1] = 1;
          colorData[base + 2] = 1;
          colorData[base + 3] = 1;
        }
        if (typeof mesh.setVerticesData === 'function') {
          mesh.setVerticesData(colorKind, colorData, true);
        }
      }
      baseColors = colorData instanceof Float32Array ? new Float32Array(colorData) : new Float32Array(colorData);
      workingColors = new Float32Array(baseColors);
    }

    const frames = animData.frames;
    if (!frames.length) return false;

    const divisor = Number.isFinite(scaleDivisor) && scaleDivisor !== 0 ? scaleDivisor : 128;
    const state = {
      mesh,
      scene,
      kind,
      basePositions,
      workingPositions,
      groupVertices,
      groupOpcodes,
      groupPivots,
      frames,
      faceVertexGroups,
      colorKind,
      baseColors,
      workingColors,
      frameIndex: 0,
      currentDelay: Math.max(1, frames[0]?.delayMs || animData.tickLengthMs || 20),
      elapsed: 0,
      loopDelay: 20,
      animData,
      divisor,
      observer: null,
      lastSnapshot: 0,
    };

    function applyRotationStep({ state, verts, groupIndex, rx, ry, rz }) {
      const angleUnit = Math.PI / 128;
      const rotZ = (Number(rz) & 0xff) * angleUnit;
      const rotX = (Number(rx) & 0xff) * angleUnit;
      const rotY = (Number(ry) & 0xff) * angleUnit;
      if (!rotX && !rotY && !rotZ) return;
      const pivot = state.groupPivots[groupIndex] || [0, 0, 0];
      const sinZ = Math.sin(rotZ);
      const cosZ = Math.cos(rotZ);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);
      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);

      for (let j = 0; j < verts.length; j += 1) {
        const vertexIndex = verts[j] * vertexStride;
        let x = state.workingPositions[vertexIndex] - pivot[0];
        let y = state.workingPositions[vertexIndex + 1] - pivot[1];
        let z = state.workingPositions[vertexIndex + 2] - pivot[2];

        if (rotZ) {
          const nx = x * cosZ - y * sinZ;
          const ny = x * sinZ + y * cosZ;
          x = nx;
          y = ny;
        }
        if (rotX) {
          const ny = y * cosX - z * sinX;
          const nz = y * sinX + z * cosX;
          y = ny;
          z = nz;
        }
        if (rotY) {
          const nx = x * cosY + z * sinY;
          const nz = z * cosY - x * sinY;
          x = nx;
          z = nz;
        }

        state.workingPositions[vertexIndex] = x + pivot[0];
        state.workingPositions[vertexIndex + 1] = y + pivot[1];
        state.workingPositions[vertexIndex + 2] = z + pivot[2];
      }
    }

    function applyScaleStep({ state, verts, groupIndex, sx, sy, sz }) {
      if (sx === 128 && sy === 128 && sz === 128) return;
      const pivot = state.groupPivots[groupIndex] || [0, 0, 0];
      const scaleX = sx / 128;
      const scaleY = sy / 128;
      const scaleZ = sz / 128;

      for (let j = 0; j < verts.length; j += 1) {
        const vertexIndex = verts[j] * vertexStride;
        const x = (state.workingPositions[vertexIndex] - pivot[0]) * scaleX;
        const y = (state.workingPositions[vertexIndex + 1] - pivot[1]) * scaleY;
        const z = (state.workingPositions[vertexIndex + 2] - pivot[2]) * scaleZ;
        state.workingPositions[vertexIndex] = x + pivot[0];
        state.workingPositions[vertexIndex + 1] = y + pivot[1];
        state.workingPositions[vertexIndex + 2] = z + pivot[2];
      }
    }

    function applyFrame(frame, debugLog = false, suppressMeshUpdate = false) {
      if (!frame) return;
      state.workingPositions.set(state.basePositions);
      if (state.baseColors && state.workingColors) {
        state.workingColors.set(state.baseColors);
      }
      const steps = frame.steps;
      const stepCount = frame.stepCount;
      const debugEntries = debugLog ? [] : null;
      for (let i = 0; i < stepCount; i += 1) {
        const base = i * 4;
        const groupIndex = steps[base];
        if (groupIndex < 0 || groupIndex >= state.groupVertices.length) continue;
        const verts = state.groupVertices[groupIndex];
        if (!verts || verts.length === 0) continue;
        const opcode = state.groupOpcodes[groupIndex] || 0;
        if (opcode === 2) {
          applyRotationStep({
            state,
            verts,
            groupIndex,
            rx: steps[base + 1],
            ry: steps[base + 2],
            rz: steps[base + 3],
          });
        } else if (opcode === 3) {
          applyScaleStep({
            state,
            verts,
            groupIndex,
            sx: steps[base + 1] || 128,
            sy: steps[base + 2] || 128,
            sz: steps[base + 3] || 128,
          });
        } else if (opcode === 0) {
          continue;
        } else if (opcode === 5) {
          const faceVerts = state.faceVertexGroups[groupIndex];
          if (!faceVerts || !state.workingColors) continue;
          const delta = (steps[base + 1] * 8) / 255;
          for (let j = 0; j < faceVerts.length; j += 1) {
            const vid = faceVerts[j];
            const colorIndex = vid * 4 + 3;
            if (colorIndex >= state.workingColors.length || colorIndex < 0) continue;
            const nextAlpha = Math.max(0, Math.min(1, state.workingColors[colorIndex] + delta));
            state.workingColors[colorIndex] = nextAlpha;
          }
        } else {
          const dx = steps[base + 1] / state.divisor;
          const dy = -(steps[base + 2] / state.divisor);
          const dz = steps[base + 3] / state.divisor;
          for (let j = 0; j < verts.length; j += 1) {
            const vertexIndex = verts[j] * vertexStride;
            state.workingPositions[vertexIndex] += dx;
            state.workingPositions[vertexIndex + 1] += dy;
            state.workingPositions[vertexIndex + 2] += dz;
          }
        }
        if (debugEntries && opcode !== 0) {
          debugEntries.push({
            group: groupIndex,
            opcode,
            dx: steps[base + 1],
            dy: steps[base + 2],
            dz: steps[base + 3],
            vertexCount: verts.length,
          });
        }
      }  
    }

      state.observer = scene.onBeforeRenderObservable.add(() => {
      const engine = scene.getEngine ? scene.getEngine() : null;
      const dt = engine ? engine.getDeltaTime() : 0;
    });

    if (mesh.onDisposeObservable) {
      const disposer = () => detachAnimator(mesh);
      if (typeof mesh.onDisposeObservable.addOnce === 'function') {
        mesh.onDisposeObservable.addOnce(disposer);
      } else if (typeof mesh.onDisposeObservable.add === 'function') {
        mesh.onDisposeObservable.add(disposer);
      }
    }

    const bakedPositions = [];
    const bakedColors = [];
    const originalBasePositions = state.basePositions;
    const originalWorkingPositions = state.workingPositions;
    const originalBaseColors = state.baseColors;
    const originalWorkingColors = state.workingColors;

    for (let i = 0; i < frames.length; i += 1) {
      const tempPositions = new Float32Array(originalBasePositions);
      state.basePositions = tempPositions;
      state.workingPositions = tempPositions;

      let tempColors = null;
      if (originalBaseColors) {
        tempColors = new Float32Array(originalBaseColors);
        state.baseColors = tempColors;
        state.workingColors = tempColors;
      } else {
        state.baseColors = null;
        state.workingColors = null;
      }

      applyFrame(frames[i], false, true);
      bakedPositions.push(tempPositions);
      if (tempColors) {
        bakedColors.push(tempColors);
      }
    }

    state.basePositions = originalBasePositions;
    state.workingPositions = originalWorkingPositions;
    state.baseColors = originalBaseColors;
    state.workingColors = originalWorkingColors;

    return {
      framePositions: bakedPositions,
      frameColors: bakedColors,
      vertexCount: basePositions.length / 3,
      vertexStride: 3,
    };
  }
  // end of function

  function bindMorphAnimation(mesh, animData, gpuData, animId, options = {}) {
    if (!mesh || !gpuData || !gpuData.framePositions.length) return false;
    const scene = mesh.getScene ? mesh.getScene() : null;
    if (!scene) return false;
    if (!BABYLON_NS || !BABYLON_NS.MorphTarget || !BABYLON_NS.MorphTargetManager) return false;

    const kind =
      (BABYLON_NS && BABYLON_NS.VertexBuffer && BABYLON_NS.VertexBuffer.PositionKind) ||
      (BABYLON_NS && BABYLON_NS.Mesh && BABYLON_NS.Mesh.POSITION_KIND) ||
      'position';
    if (mesh.getVerticesData && mesh.setVerticesData) {
      const basePos = mesh.getVerticesData(kind);
      if (basePos) {
        mesh.setVerticesData(kind, basePos, true);
      }
    }

    let manager = mesh.morphTargetManager;
    if (!manager) {
      manager = new BABYLON_NS.MorphTargetManager(scene);
      mesh.morphTargetManager = manager;
    } else {
      while (manager.numTargets > 0) {
        const target = manager.getTarget(0);
        manager.removeTarget(target);
      }
    }

    const targets = [];
    gpuData.framePositions.forEach((positions, idx) => {
      const targetName = `anim_${animId}_${mesh.id}_${idx}`;
      const morph = new BABYLON_NS.MorphTarget(targetName, 0);
      morph.setPositions(positions);
      if (gpuData.frameColors && gpuData.frameColors[idx]) {
        morph.setColors(gpuData.frameColors[idx]);
      }
      manager.addTarget(morph);
      targets.push(morph);
    });

    if (!targets.length) return false;

    const state = {
      mesh,
      scene,
      manager,
      targets,
      frames: animData.frames || [],
      frameIndex: 0,
      currentDelay: Math.max(1, animData.frames?.[0]?.delayMs || animData.tickLengthMs || 20),
      elapsed: 0,
      loopDelay: 20,
      animData,
      observer: null,
      lastSnapshot: 0,
    };

    const applyFrame = () => {
      state.targets.forEach((target, idx) => {
        target.influence = idx === state.frameIndex ? 1 : 0;
      });
    };

    const stepFrame = () => {
      state.frameIndex = (state.frameIndex + 1) % state.targets.length;
      const next = state.frames[state.frameIndex];
      let nextDelay = next?.delayMs || animData.tickLengthMs || 20;
      if (state.frameIndex === 0 && state.loopDelay > 0) {
        nextDelay += state.loopDelay;
      }
      state.currentDelay = Math.max(1, nextDelay);
      applyFrame();
    };

    const advance = (deltaMs) => {
      state.elapsed += deltaMs;
      while (state.elapsed >= state.currentDelay && state.currentDelay > 0) {
        state.elapsed -= state.currentDelay;
        stepFrame();
      }
    };

    state.observer = scene.onBeforeRenderObservable.add(() => {
      const engine = scene.getEngine ? scene.getEngine() : null;
      const dt = engine ? engine.getDeltaTime() : 0;
      advance(dt);
    });
    applyFrame();
    animatorMap.set(mesh, state);
    return true;
  }

  async function bindAnimationToNode(rootNode, animationId, options = {}) {
    if (!rootNode || animationId == null) return null;
    const scene = rootNode.getScene ? rootNode.getScene() : options.scene;
    if (!scene) return null;
    const animData = await prepareAnimation(animationId, options);
    if (!animData) return null;
    const some = animData.groups && animData.groups[0] && animData.groups[0].vertices && animData.groups[0].vertices[0];
    //console.log('sample group vertex value', some);
    const meshes = [];
    if (BABYLON_NS && rootNode instanceof BABYLON_NS.Mesh) {
      meshes.push(rootNode);
    }
    if (typeof rootNode.getChildMeshes === 'function') {
      const children = rootNode.getChildMeshes(true);
      for (let i = 0; i < children.length; i += 1) {
        if (BABYLON_NS && children[i] instanceof BABYLON_NS.Mesh) {
          meshes.push(children[i]);
        }
      }
    }
    const results = [];
    meshes.forEach((mesh) => {
      const remappedAnim = remapAnimationForMesh(animData, mesh);
      const gpuData = computeGpuAnimation(remappedAnim, { mesh, scaleDivisor: options.scaleDivisor });
      const ok = gpuData && gpuData.framePositions && gpuData.framePositions.length
        ? bindMorphAnimation(mesh, remappedAnim, gpuData, animationId, options)
        : false;
      results.push(ok);
    });
    return results;
  }

  // delete "bindAnimationToNode" later, keep the rest
  global.AnimationStore = {
    fetchAnimationJson,
    prepareAnimation,
    bindAnimationToNode,
  };

  // to be deleted
  if (!global.__AnimationDebugListenerAttached) {
    try {
      window.addEventListener('keydown', (ev) => {
        if (ev.key !== 'n') return;
        const debugState = global.__AnimationDebugState;
        if (!debugState || typeof debugState.__applyFrame !== 'function') return;
        debugState.frameIndex = (debugState.frameIndex + 1) % debugState.frames.length;
        const frame = debugState.frames[debugState.frameIndex];
        //console.log(`[AnimationStore] manual advance -> frame ${frame.frameId} index ${debugState.frameIndex}`);
        debugState.__applyFrame(frame, true);
      });
      global.__AnimationDebugListenerAttached = true;
    } catch (_) {
      // no window
    }
  }
})(window);

// function to be kept unchanged
function computeMappingFromCoords(rsPositionsFlat, gltfPositionsFlat, options = {}) {
  const tolFactor = options.tolFactor ?? 1e-3; // relative tolerance
  // helpers
  function bboxAndScale(positions) {
    const n = positions.length/3;
    const mins = [Infinity, Infinity, Infinity], maxs = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < positions.length; i += 3) {
      mins[0] = Math.min(mins[0], positions[i]);
      mins[1] = Math.min(mins[1], positions[i+1]);
      mins[2] = Math.min(mins[2], positions[i+2]);
      maxs[0] = Math.max(maxs[0], positions[i]);
      maxs[1] = Math.max(maxs[1], positions[i+1]);
      maxs[2] = Math.max(maxs[2], positions[i+2]);
    }
    const size = [maxs[0]-mins[0], maxs[1]-mins[1], maxs[2]-mins[2]];
    const maxDim = Math.max(size[0], size[1], size[2], 1e-9);
    return { mins, maxs, size, maxDim, count: positions.length/3 };
  }

  const rsInfo = bboxAndScale(rsPositionsFlat);
  const gltfInfo = bboxAndScale(gltfPositionsFlat);

  // Normalize to [0,1] using bbox so scale/offset differences are tolerated.
  function normalizedAt(positions, i, mins, maxDim) {
    return [
      (positions[3*i + 0] - mins[0]) / maxDim,
      (positions[3*i + 1] - mins[1]) / maxDim,
      (positions[3*i + 2] - mins[2]) / maxDim
    ];
  }

  const rsCount = rsPositionsFlat.length / 3;
  const gltfCount = gltfPositionsFlat.length / 3;

  // Precompute normalized gltf coords for quick checking.
  const gltfNorm = new Array(gltfCount);
  for (let j = 0; j < gltfCount; j++) {
    gltfNorm[j] = normalizedAt(gltfPositionsFlat, j, gltfInfo.mins, gltfInfo.maxDim);
  }

  // tolerance: scaled to the larger of model dims (so absolute tolerance = tolFactor * maxDim)
  const tol = tolFactor; // because normalized coords use maxDim scaling
  const tol2 = tol * tol;

  const mapping = new Map(); // rsIndex -> array of gltf indices
  for (let i = 0; i < rsCount; i++) {
    const rnorm = normalizedAt(rsPositionsFlat, i, rsInfo.mins, rsInfo.maxDim);
    const matched = [];
    for (let j = 0; j < gltfCount; j++) {
      const dx = rnorm[0] - gltfNorm[j][0];
      const dy = rnorm[1] - gltfNorm[j][1];
      const dz = rnorm[2] - gltfNorm[j][2];
      const d2 = dx*dx + dy*dy + dz*dz;
      if (d2 <= tol2) {
        matched.push(j);
      }
    }
    mapping.set(i, matched);
  }
  return { mapping, rsInfo, gltfInfo, tol };
}

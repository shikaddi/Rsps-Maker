const gltfExtrasCache = new Map();

async function ensureGltfExtras(filename) {
  if (!filename) return null;
  if (gltfExtrasCache.has(filename)) {
    return gltfExtrasCache.get(filename);
  }
  try {
    const resp = await fetch(`/static/objects/${filename}`, { cache: 'force-cache' });
    if (!resp.ok) {
      gltfExtrasCache.set(filename, null);
      return null;
    }
    const json = await resp.json();
    const meshExtras = (json.meshes || []).map((mesh) => {
      const prims = mesh.primitives || [];
      return {
        meshExtras: mesh.extras || null,
        primitiveExtras: prims.map((prim) => prim?.extras || null),
      };
    });
    gltfExtrasCache.set(filename, meshExtras);
    return meshExtras;
  } catch (err) {
    console.warn('Failed to fetch glTF extras for', filename, err);
    gltfExtrasCache.set(filename, null);
    return null;
  }
}

function parseModelInfoFromPath(gltfPath) {
  if (!gltfPath || typeof gltfPath !== 'string') return null;
  const name = gltfPath.split(/[\\/]/).pop() || '';
  const match = name.match(/object_(\d+)_type_(\d+)_model_(\d+)\.gltf$/i);
  if (!match) return null;
  return {
    objectId: Number(match[1]) | 0,
    modelType: Number(match[2]) | 0,
    modelId: Number(match[3]) | 0,
  };
}

function buildAnimationOptions(entry) {
  const opts = {};
  const parsed = parseModelInfoFromPath(entry?.gltf);
  if (parsed) {
    opts.objectId = parsed.objectId;
    opts.modelType = parsed.modelType;
    opts.modelId = parsed.modelId;
    return opts;
  }
  const objectId = Number(entry?.object_id ?? entry?.objectId);
  if (Number.isFinite(objectId)) opts.objectId = objectId | 0;
  const modelType = Number(entry?.model_type ?? entry?.modelType);
  if (Number.isFinite(modelType)) opts.modelType = modelType | 0;
  const usedModels = entry?.used_model_ids;
  if (Array.isArray(usedModels) && usedModels.length) {
    const modelId = Number(usedModels[0]);
    if (Number.isFinite(modelId)) opts.modelId = modelId | 0;
  }
  return opts;
}

function makeMeshGeometryUpdatable(mesh) {
  if (!mesh || typeof mesh.getVertexBuffer !== 'function') return;
  if (typeof mesh.makeGeometryUnique === 'function') {
    try {
      mesh.makeGeometryUnique();
    } catch (_) {}
  }
  const kinds = [
    BABYLON.VertexBuffer.PositionKind,
    BABYLON.VertexBuffer.NormalKind,
    BABYLON.VertexBuffer.ColorKind,
    BABYLON.VertexBuffer.UVKind,
  ];
  kinds.forEach((kind) => {
    if (!mesh.isVerticesDataPresent || !mesh.isVerticesDataPresent(kind)) return;
    const vb = mesh.getVertexBuffer(kind);
    if (vb && !vb.isUpdatable()) {
      const data = mesh.getVerticesData(kind, true, true);
      if (data) {
        mesh.updateVerticesData(kind, data, true, true);
      }
    }
  });
}

async function registerAnimatedObjectTextures(scene, mesh) {
  if (!mesh || !scene || !scene.metadata) return;
  const animator = scene.metadata.objectTextureAnimator;
  if (!animator || !animator.animatedIds || animator.animatedIds.size === 0) return;

  const forcedAnimatedMap = collectAnimatedTextureDataFromExtras(mesh);
  const restrictToExtras = forcedAnimatedMap.size > 0;
  if (!restrictToExtras) return;
  const materials = new Set();
  if (mesh.material) materials.add(mesh.material);
  if (typeof mesh.getChildMeshes === 'function') {
    mesh.getChildMeshes(false).forEach((child) => {
      if (child.material) materials.add(child.material);
    });
  }
  if (materials.size === 0) return;

  const textureSlots = [
    'albedoTexture',
    'diffuseTexture',
    'opacityTexture',
    'emissiveTexture',
    'reflectionTexture',
    'metallicTexture',
  ];

  for (const material of materials) {
    console.log("material: ", material);
    for (const slot of textureSlots) {
      console.log("slot: ", slot)
      const tex = material[slot];
      console.log("tex: ", tex);
      if (!tex) continue;
      const texId = extractTextureIdFromUrl(tex.url || tex.name || '');
      if (texId < 0) continue;
      const faceList = forcedAnimatedMap.get(texId);
      if (!faceList || faceList.length === 0) continue;
      console.log("facelist: ", faceList);
      if (tex.onLoadObservable && !tex.isReady()) {
        tex.onLoadObservable.addOnce(() => {
          maybeAttachAnimatedTexture(scene, animator, material, slot, tex, texId, faceList).catch((err) => {
            console.warn('maybeAttachAnimatedTexture deferred failed', err);
          });
        });
        continue;
      }
      console.log("about the caall maybeAttachAnimatedTexture");
      await maybeAttachAnimatedTexture(scene, animator, material, slot, tex, texId, faceList);
    }
  }
}

function collectAnimatedTextureDataFromExtras(mesh) {
  const map = new Map();
  if (!mesh) return map;
  const gltfMeta = mesh?.metadata?.gltf || {};
  const extras = gltfMeta.extras;
  if (extras && Array.isArray(extras.rs_animated_faces)) {
    extras.rs_animated_faces.forEach((entry) => {
      if (!Array.isArray(entry) || entry.length < 2) return;
      const faceIdx = entry[0];
      const texId = entry[1];
      if (!Number.isFinite(texId)) return;
      const key = texId | 0;
      if (!map.has(key)) {
        map.set(key, []);
      }
      if (Number.isFinite(faceIdx)) {
        map.get(key).push(faceIdx | 0);
      }
    });
  }
  return map;
}

async function maybeAttachAnimatedTexture(scene, animator, material, slot, sourceTexture, texIdOverride, faceList) {
  if (!sourceTexture) return;
  const extracted = Number.isFinite(texIdOverride)
    ? texIdOverride
    : extractTextureIdFromUrl(sourceTexture.url || sourceTexture.name || '');
  const texId = extracted | 0;
  if (!animator.animatedIds.has(texId)) return;

  const entry = await ensureAnimatedObjectTexture(scene, animator, texId, sourceTexture);
  if (!entry || !entry.dynamicTexture) return;
  if (faceList && faceList.length) {
    entry.faces = entry.faces || [];
    entry.faces.push(...faceList);
  }
  if (material[slot] === entry.dynamicTexture) return;

  //material[slot] = entry.dynamicTexture;
  if (material[slot] !== entry.dynamicTexture) {
    material[slot] = entry.dynamicTexture;
    if (typeof material.markAsDirty === 'function') {
      material.markAsDirty(BABYLON.Material.TextureDirtyFlag);
    }
  }
  entry.targets = entry.targets || [];
  entry.targets.push({ material, slot });
}

function extractTextureIdFromUrl(url) {
  if (!url || typeof url !== 'string') return -1;
  const match = url.match(/texture_(\d+)\.png/i);
  if (!match) return -1;
  return Number(match[1]) | 0;
}

function resolveTextureUrl(sourceTexture) {
  if (!sourceTexture) return null;
  const raw = sourceTexture.url || sourceTexture.name || '';
  if (!raw) return null;
  if (raw.startsWith('data:')) {
    const trimmed = raw.slice(5); // drop "data:"
    if (!trimmed) return null;
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }
  return raw;
}

async function ensureAnimatedObjectTexture(scene, animator, texId, sourceTexture) {
  if (animator.entries.has(texId)) {
    const existing = animator.entries.get(texId);
    if (existing.dynamicTexture) return existing;
  }

  const imageUrl = resolveTextureUrl(sourceTexture);
  if (!imageUrl) return null;
  const img = await loadImageElement(imageUrl);
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0);

  const dyn = new BABYLON.DynamicTexture(`objAnim_${texId}`, { width: canvas.width, height: canvas.height }, scene, false);
  const texCtx = dyn.getContext();
  texCtx.imageSmoothingEnabled = false;
  texCtx.drawImage(canvas, 0, 0);
  dyn.update();
  dyn.hasAlpha = !!sourceTexture.hasAlpha;
  dyn.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE;
  dyn.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE;

  const speedDef = animator.speedMap?.get(texId) || { x: 0, y: 0 };
  const TICK_MS = 20;
  const entry = {
    id: texId,
    canvas,
    ctx,
    dynamicTexture: dyn,
    offsets: new Float32Array([0, 0]),
    speed: {
      x: (speedDef.x || 0) / TICK_MS,
      y: (speedDef.y || 0) / TICK_MS,
    },
    targets: [],
    baseImage: img,
  };
  animator.entries.set(texId, entry);
  return entry;
}

function loadImageElement(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });
}

function cloneMetadata(meta) {
  if (!meta) return null;
  try {
    return JSON.parse(JSON.stringify(meta));
  } catch {
    return meta;
  }
}

const loggedMissingMetadata = new WeakSet();

function copyGltfMetadataFromSource(mesh) {
  if (!mesh) return;
  const already = mesh.metadata && mesh.metadata.gltf && mesh.metadata.gltf.extras;
  const geoAlready = mesh.geometry && mesh.geometry.metadata && mesh.geometry.metadata.rs_to_gltf;
  if (already && already.rs_to_gltf && geoAlready) return;

  const source =
    mesh._source ||
    mesh._sourceMesh ||
    mesh.source ||
    mesh.sourceMesh ||
    (mesh._original && mesh._original.source);

  let sourceExtras =
    source &&
    source.metadata &&
    source.metadata.gltf &&
    source.metadata.gltf.extras;

  if ((!sourceExtras || !sourceExtras.rs_to_gltf) && mesh.parent) {
    const parentExtras =
      mesh.parent.metadata &&
      mesh.parent.metadata.gltf &&
      mesh.parent.metadata.gltf.extras;
    if (parentExtras && parentExtras.rs_to_gltf) {
      sourceExtras = parentExtras;
    }
  }

  if (!sourceExtras || !sourceExtras.rs_to_gltf) {
    if (source && source.metadata && !loggedMissingMetadata.has(source)) {
      console.warn(
        '[AnimationStore] Missing rs_to_gltf extras on source mesh',
        source.name || source.id,
        source.metadata,
      );
      loggedMissingMetadata.add(source);
    }
    return;
  }

  const clonedExtras = cloneMetadata(sourceExtras);
  mesh.metadata = mesh.metadata || {};
  mesh.metadata.gltf = mesh.metadata.gltf || {};
  mesh.metadata.gltf.extras = clonedExtras;
  if (Array.isArray(source?.metadata?.gltf?.primitives)) {
    mesh.metadata.gltf.primitives = cloneMetadata(source.metadata.gltf.primitives);
  }

  if (mesh.geometry) {
    mesh.geometry.metadata = mesh.geometry.metadata || {};
    mesh.geometry.metadata.rs_to_gltf = cloneMetadata(sourceExtras.rs_to_gltf);
  }
}
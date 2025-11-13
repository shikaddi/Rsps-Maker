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

const THIN_DECORATIONS = new Set([6959, 6960, 6963, 6964]);

const FORCED_TYPE_TRANSLATIONS = new Map([
  // key: `${type}-${id}` -> x and z translations
  //["4-6963",[0,0.1]],
  //["4-6964",[0,0.1]],
  ["10-2725",[-0.5,-0.475]],
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
function enableArrowControls(camera, scene, canvas, mapW, mapH, tileSize = 1, {
  shiftBoost = 2.0,
  panStepBase = 0.005,   // fraction of map span per frame
  rotStepBase = 0.03,    // radians per frame
  lockFBWhileRotating = false // set true if you want to stop forward/back pan during rotation, too
} = {}) {
  camera.panningAxis = new BABYLON.Vector3(1, 0, 1);

  const mapSpan = Math.max(mapW, mapH) * tileSize;
  const margin = tileSize * 1.5;
  const minX = margin, maxX = mapW * tileSize - margin;
  const minZ = margin, maxZ = mapH * tileSize - margin;
  const clampTarget = () => {
    const t = camera.target;
    t.x = Math.min(Math.max(t.x, minX), maxX);
    t.z = Math.min(Math.max(t.z, minZ), maxZ);
  };

  // kill default arrow behavior
  const kb = camera.inputs?.attached?.keyboard;
  if (kb) camera.inputs.remove(kb);
  camera.keysUp = camera.keysDown = camera.keysLeft = camera.keysRight = [];

  const keys = { up:false, down:false, left:false, right:false, shift:false, ctrl:false };
  const onKey = (e, isDown) => {
    const overCanvas = document.activeElement === canvas || canvas.matches?.(':hover');
    if (!overCanvas) return;
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift","Control"].includes(e.key)) e.preventDefault();

    if (e.key === "ArrowUp")    keys.up = isDown;
    if (e.key === "ArrowDown")  keys.down = isDown;
    if (e.key === "ArrowLeft")  keys.left = isDown;
    if (e.key === "ArrowRight") keys.right = isDown;
    if (e.key === "Shift")      keys.shift = isDown;
    if (e.key === "Control")    keys.ctrl = isDown;
  };
  addEventListener("keydown", e => onKey(e, true));
  addEventListener("keyup",   e => onKey(e, false));

  scene.onBeforeRenderObservable.add(() => {
    const boost   = keys.shift ? shiftBoost : 1.0;
    const panStep = panStepBase * boost * camera.radius;  // ★ arrow speed
    const rotStep = rotStepBase * boost;

    // compute forward/right on XZ
    const forward = camera.target.subtract(camera.position);
    forward.y = 0;
    if (forward.lengthSquared() > 1e-6) forward.normalize();
    const right = new BABYLON.Vector3(forward.z, 0, -forward.x);

    const rotating = keys.ctrl && (keys.left || keys.right);
    let moved = false;

    // --- PAN ---
    // Up/Down pan forward/back (optionally lock while rotating)
    if (!rotating || !lockFBWhileRotating) {
      if (keys.up)   { camera.target.addInPlace(forward.scale(panStep)); moved = true; }
      if (keys.down) { camera.target.addInPlace(forward.scale(-panStep)); moved = true; }
    }
    // Left/Right pan only if NOT rotating (so Ctrl+Left/Right won't pan)
    if (!rotating) {
      if (keys.right) { camera.target.addInPlace(right.scale(panStep)); moved = true; }
      if (keys.left)  { camera.target.addInPlace(right.scale(-panStep)); moved = true; }
    }

    // --- ROTATE (Ctrl + Left/Right) ---
    if (keys.ctrl && keys.left)  { camera.alpha -= rotStep; moved = true; }
    if (keys.ctrl && keys.right) { camera.alpha += rotStep; moved = true; }

    if (moved) clampTarget();
  });
}

function enableEdgePanning(camera, scene, canvas, mapW, mapH, tileSize = 1, {
  edgePx = 24,              // activation band thickness on each edge
  topUiReservePx = 56,      // do NOT edge-pan in the top N px (toolbar)
  basePanFrac = 0.005,      // base speed: fraction of map span per frame
  shiftBoost = 2.0,         // hold Shift to go faster
  requireModifier = null,   // e.g. "Space", "Alt", "Control" or null for none
  requireMouseButton = null,// 0=Left,1=Middle,2=Right or null for none
  allowTopEdge = true,      // if false, never pan on top edge
  allowBottomEdge = true,
  allowLeftEdge = true,
  allowRightEdge = true,
  isOverUI = null           // optional fn: (x,y) => true if over UI; skips panning
} = {}) {

  const mapSpan = Math.max(mapW, mapH) * tileSize;

  // Clamp target inside world with a small margin (same as before)
  const margin = tileSize * 1.5;
  const minX = margin, maxX = mapW * tileSize - margin;
  const minZ = margin, maxZ = mapH * tileSize - margin;
  const clampTarget = () => {
    const t = camera.target;
    t.x = Math.min(Math.max(t.x, minX), maxX);
    t.z = Math.min(Math.max(t.z, minZ), maxZ);
  };

  // Track pointer position + buttons/modifiers over the canvas
  let pointer = { x: -1, y: -1, over:false, buttons:0, shift:false, alt:false, ctrl:false, space:false };
  const onPointerMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.over = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
    pointer.buttons = e.buttons || 0;
    pointer.shift = !!e.shiftKey;
    pointer.alt = !!e.altKey;
    pointer.ctrl = !!e.ctrlKey;
  };
  const onLeave = () => pointer.over = false;
  const onKey = (e, down) => {
    if (e.code === "Space") { pointer.space = down; }
  };
  canvas.addEventListener("pointermove", onPointerMove);
  canvas.addEventListener("pointerdown", onPointerMove);
  canvas.addEventListener("pointerup", onPointerMove);
  canvas.addEventListener("pointerleave", onLeave);
  window.addEventListener("keydown", e => onKey(e,true));
  window.addEventListener("keyup",   e => onKey(e,false));
  window.addEventListener("blur", () => { pointer.over = false; });

  const modifierOk = () => {
    if (!requireModifier) return true;
    if (requireModifier === "Space")   return pointer.space;
    if (requireModifier === "Alt")     return pointer.alt;
    if (requireModifier === "Control") return pointer.ctrl;
    if (requireModifier === "Shift")   return pointer.shift;
    return true;
  };
  const mouseButtonOk = () => {
    if (requireMouseButton == null) return true;
    // pointer.buttons is a bitmask; 1=Left,2=Right,4=Middle (DOM order differs)
    // We’ll accept if that button is currently held:
    if (requireMouseButton === 0) return (pointer.buttons & 1) !== 0;
    if (requireMouseButton === 2) return (pointer.buttons & 2) !== 0;
    if (requireMouseButton === 1) return (pointer.buttons & 4) !== 0;
    return true;
  };

  scene.onBeforeRenderObservable.add(() => {
    if (!pointer.over) return;

    // Skip if user mouses into UI regions (toolbar, overlays)
    if (isOverUI && isOverUI(pointer.x, pointer.y)) return;

    // Don’t pan on the very top toolbar region if reserved
    const rect = canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;

    // Check activation only if guard conditions pass
    if (!modifierOk() || !mouseButtonOk()) return;

    // How close to each edge (0..edgePx), 0 when outside band
    let dx = 0, dz = 0;
    const leftDist   = pointer.x;
    const rightDist  = w - pointer.x;
    const topDist    = pointer.y;
    const bottomDist = h - pointer.y;

    if (allowLeftEdge && leftDist <= edgePx) {
      dx -= (1.0 - leftDist / edgePx);
    }
    if (allowRightEdge && rightDist <= edgePx) {
      dx += (1.0 - rightDist / edgePx);
    }
    if (allowTopEdge && topDist <= edgePx) {
      // Respect toolbar reservation at the top
      if (topDist > topUiReservePx) {
        dz += (1.0 - (topDist - topUiReservePx) / Math.max(1.0, edgePx - topUiReservePx));
      }
    }
    if (allowBottomEdge && bottomDist <= edgePx) {
      dz -= (1.0 - bottomDist / edgePx);
    }

    // Nothing to do?
    if (dx === 0 && dz === 0) return;

    const boost = pointer.shift ? shiftBoost : 1.0;
    const zoomFactor = camera.radius / mapSpan;          // ≈ 1.0 when framed, >1 zoom-out, <1 zoom-in
    // Use the configured basePanFrac; fallback if stale code references existed
    const panFrac = (typeof basePanFrac === 'number') ? basePanFrac
                   : ((typeof panStepBase === 'number') ? panStepBase : 0.005);
    const panStep = mapSpan * panFrac * boost * zoomFactor;

    // Build forward/right on XZ from current camera orientation
    const forward = camera.target.subtract(camera.position);
    forward.y = 0; if (forward.lengthSquared() > 1e-6) forward.normalize();
    const right = new BABYLON.Vector3(forward.z, 0, -forward.x);

    // Equalize perceived speed: scale forward vs right so 1 world unit ~ same pixels on screen
    let panStepRight = panStep;
    let panStepFwd = panStep;
    try {
      const eng = scene.getEngine();
      const vp = camera.viewport.toGlobal(eng.getRenderWidth(), eng.getRenderHeight());
      const wvp = scene.getTransformMatrix();
      const proj = (v) => BABYLON.Vector3.Project(v, BABYLON.Matrix.Identity(), wvp, vp);
      const t = camera.target;
      const p0 = proj(t);
      const pR = proj(t.add(right));
      const pF = proj(t.add(forward));
      const pxRight = Math.hypot(pR.x - p0.x, pR.y - p0.y) || 1;
      const pxFwd  = Math.hypot(pF.x - p0.x, pF.y - p0.y) || 1;
      let k = pxRight / pxFwd; // >1 => forward needs boosting
      if (!isFinite(k) || k <= 0) k = 1;
      // Clamp to avoid wild swings at extreme angles
      k = Math.max(0.5, Math.min(2.5, k));
      panStepFwd = panStep * k;
      panStepRight = panStep;
    } catch {}

    // Convert edge intent to world delta with equalization applied
    const delta = right.scale(dx * panStepRight).addInPlace(forward.scale(dz * panStepFwd));
    camera.target.addInPlace(delta);
    clampTarget();
  });

  return {
    dispose() {
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("keydown", e => onKey(e,true));
      window.removeEventListener("keyup",   e => onKey(e,false));
    }
  };
}

// Pointer (middle mouse) panning with screen-space uniformity
function enablePointerPan(camera, scene, canvas, mapW, mapH, tileSize = 1, {
  basePxSpeed = 900,      // unused for drag; kept for API compat
  shiftBoost = 2.0,       // Shift speeds up panning
  isOverUI = null         // optional guard: (x,y)=>boolean
} = {}) {
  // Clamp target inside world with a small margin (same as others)
  const margin = tileSize * 1.5;
  const minX = margin, maxX = mapW * tileSize - margin;
  const minZ = margin, maxZ = mapH * tileSize - margin;
  const clampTarget = () => {
    const t = camera.target;
    t.x = Math.min(Math.max(t.x, minX), maxX);
    t.z = Math.min(Math.max(t.z, minZ), maxZ);
  };

  let dragging = false;
  let activePointerId = null;
  let lastX = 0, lastY = 0;
  let lastTime = 0;

  function canvasXY(e) {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top, w: rect.width, h: rect.height };
  }

  function pickPointAt(x, y, fallbackY) {
    // Try mesh pick first
    const pick = scene.pick(x, y);
    if (pick && pick.hit && pick.pickedPoint) return pick.pickedPoint.clone();
    // Fallback: ray-plane intersection at y=fallbackY
    const ray = scene.createPickingRay(x, y, BABYLON.Matrix.Identity(), camera);
    const dir = ray.direction; const org = ray.origin;
    const denom = dir.y;
    let t = 0;
    if (Math.abs(denom) < 1e-6) t = 0; else t = (fallbackY - org.y) / denom;
    if (!isFinite(t)) t = 0;
    const p = org.add(dir.scale(t));
    return p;
  }

  function onPointerDown(e) {
    if (e.button !== 2) return; // right mouse only
    const { x, y } = canvasXY(e);
    if (isOverUI && isOverUI(x, y)) return;
    dragging = true;
    activePointerId = e.pointerId ?? 'mouse';
    lastX = x; lastY = y; lastTime = performance.now();
    e.preventDefault();
  }
  function onPointerUp(e) {
    if (!dragging) return;
    if ((e.pointerId ?? 'mouse') !== activePointerId) return;
    dragging = false; activePointerId = null;
  }
  function onPointerMove(e) {
    if (!dragging) return;
    if ((e.pointerId ?? 'mouse') !== activePointerId) return;
    const { x, y, w, h } = canvasXY(e);
    if (isOverUI && isOverUI(x, y)) return;
    const dxPx = x - lastX;
    const dyPx = y - lastY;
    if (dxPx === 0 && dyPx === 0) return;

    // Compute world-per-pixel vectors at current pointer using pick or plane
    const fallbackY = camera.target.y;
    const p0  = pickPointAt(x, y, fallbackY);
    const pR  = pickPointAt(Math.min(x + 1, w), y, fallbackY);
    const pU  = pickPointAt(x, Math.min(y + 1, h), fallbackY);
    const vR = pR.subtract(p0); vR.y = 0; // horizontal 1px in world XZ
    const vU = pU.subtract(p0); vU.y = 0; // vertical 1px in world XZ

    // Convert pixel delta directly using local world-per-pixel scale at pointer.
    // Dragging the world means target moves opposite to pointer motion.
    const boost = (e.shiftKey ? shiftBoost : 1.0);
    const worldDelta = vR.scale(-dxPx * boost).addInPlace(vU.scale(-dyPx * boost));
    camera.target.addInPlace(worldDelta);
    clampTarget();

    lastX = x; lastY = y; lastTime = performance.now();
    e.preventDefault();
  }
  function onBlur() { dragging = false; activePointerId = null; }

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('blur', onBlur);
  // Prevent context menu on right-drag panning
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  return {
    dispose() {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('blur', onBlur);
    }
  };
}

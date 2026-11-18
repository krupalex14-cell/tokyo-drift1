(function () {
"use strict";
const $ = id => document.getElementById(id);
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const wrapA = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const rnd = (a, b) => a + Math.random() * (b - a);
const sm = (cur, tgt, dt, tau) => cur + (tgt - cur) * (1 - Math.exp(-dt / tau));

/* ====================== REAL BRAIN DATA (precomputed from the FlyWire connectome) ====================== */
const DATA = window.__DATA;
const LV = DATA.levels_hz;                         // [0,50,100,150,200]
const KEYS = DATA.keys;                            // mn9_L, mn9_R, aBN1, dn1_1, dn2_l
const SK = DATA.single_keys, PAIRS = DATA.pairs;
const NN = DATA.nodes.role.length;
const NR = {};
for (const s in DATA.node_rates) {
  NR[s] = [null];
  for (const l of ['50', '100', '150', '200']) NR[s].push(Float32Array.from(DATA.node_rates[s][l]));
}
function lerpIdx(x) { x = clamp(x, 0, 200); const i = Math.min(3, Math.floor(x / 50)); return [i, (x - LV[i]) / 50]; }
function interp1(arr, x) { const [i, f] = lerpIdx(x); return arr[i] * (1 - f) + arr[i + 1] * f; }
function interp2(g, x, y) {
  const [i, fx] = lerpIdx(x), [j, fy] = lerpIdx(y);
  const a = g[i][j] * (1 - fy) + g[i][j + 1] * fy, b = g[i + 1][j] * (1 - fy) + g[i + 1][j + 1] * fy;
  return a * (1 - fx) + b * fx;
}
const ORD = ['sugar', 'bitter', 'water'];
// What the real brain does for given input rates (Hz). Taste: single run, or the pair grid of the two strongest tastes.
function brainTarget(inp) {
  const out = { mn9_L: 0, mn9_R: 0, aBN1: 0, dn1_1: 0, dn2_l: 0, nact: 0 };
  const t = ORD.map(k => [k, inp[k]]).filter(a => a[1] > 1).sort((a, b) => b[1] - a[1]);
  if (t.length === 1) {
    const s = SK[t[0][0]];
    for (const k of KEYS) out[k] += interp1(s[k], t[0][1]);
    out.nact += interp1(s.nact, t[0][1]);
  } else if (t.length >= 2) {
    let x = t[0], y = t[1];
    if (ORD.indexOf(x[0]) > ORD.indexOf(y[0])) { const q = x; x = y; y = q; }
    const g = PAIRS[x[0] + '_' + y[0]];
    for (const k of KEYS) out[k] += interp2(g[k], x[1], y[1]);
    out.nact += interp2(g.nact, x[1], y[1]);
  }
  if (inp.jon > 1) {
    const s = SK.jon_all;
    for (const k of KEYS) out[k] += interp1(s[k], inp.jon);
    out.nact += interp1(s.nact, inp.jon);
  }
  return out;
}
const tmpNode = new Float32Array(NN);
function nodeTarget(inp, dst) {
  dst.fill(0);
  for (const s of ['sugar', 'bitter', 'water', 'jon_all']) {
    const x = s === 'jon_all' ? inp.jon : inp[s];
    if (x <= 1) continue;
    const [i, f] = lerpIdx(x), A = NR[s][i], B = NR[s][i + 1];
    for (let n = 0; n < NN; n++) dst[n] += (A ? A[n] * (1 - f) : 0) + B[n] * f;
  }
}

/* ====================== THE FLY AND THE TABLE: state ====================== */
const S = 0.55;                 // fly body scale
const TR = 3.4;                 // table radius
const FR = 3.0;                 // fly walking radius
const MOUTH = 0.78 * S;         // head front from body centre
const ODORS = { A: { x: -1.9, z: -1.8, col: 0xff5fa2, name: 'А' }, B: { x: 1.9, z: -1.8, col: 0x3fe0c5, name: 'Б' } };

const F = { om: 0, ph1: Math.random() * 6.28, ph2: Math.random() * 6.28, ph3: Math.random() * 6.28, pauseT: 0, headYaw: 0, lastDa: 0, micro: null, x: 0, z: 0.6, h: 0.3, v: 0, y: 0, state: 'idle', t: 0, timer: 1, target: null, walk: 0, omega: 0,
  flight: null, flinch: null, retreat: null, contact: 0, cool: 0, groomT: 0, eatT: 0, threat: { x: 0, z: -3 }, sniffOd: null, goOd: null, lastOd: null };
const O = { mn9_L: 0, mn9_R: 0, aBN1: 0, dn1_1: 0, dn2_l: 0, nact: 0 };     // smoothed outputs (Hz)
const inp = { sugar: 0, bitter: 0, water: 0, jon: 0 };
const A = { p: 0, g: 0, flap: 0, fl: 0 };                                     // animation amounts
const puddles = [];
const pulses = [];            // timed taste pulses from the teaching buttons {kind, hz, t}
const events = { wind: null, swat: null, poke: 0, stroke: 0 };
const T = { tool: 'sugar', cam: 'follow', time: 0 };
const visits = { A: 0, B: 0 };

/* --- simplified mushroom-body style learning layer (NOT from the connectome) --- */
const MB = { NK: 2048, KA: 4, w: new Float32Array(2048), code: { A: [], B: [] }, pam: 0, ppl: 0 };
(function () { const used = new Set(); for (const od of ['A', 'B']) while (MB.code[od].length < MB.KA) { const k = Math.floor(Math.random() * MB.NK); if (!used.has(k)) { used.add(k); MB.code[od].push(k); } } })();
const mbz = od => MB.code[od].reduce((s, k) => s + MB.w[k], 0);
const sig = z => 1 / (1 + Math.exp(-z));
function mbLearn(od, D) { for (const k of MB.code[od]) MB.w[k] += 0.25 * D; if (D > 0) MB.pam = 1.6; else MB.ppl = 1.6; }

/* ====================== three.js scene ====================== */
const canvas = $('c3d');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
catch (e) { $('nogl').style.display = 'flex'; }
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
if (renderer) { renderer.setClearColor(0x0b0f17); renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); }
scene.fog = new THREE.Fog(0x0b0f17, 16, 34);
scene.add(new THREE.HemisphereLight(0xdfeaff, 0x3a2f26, 0.7));
const sun = new THREE.DirectionalLight(0xfff1de, 0.6); sun.position.set(3, 8, 4); scene.add(sun);

// table with gingham cloth
function clothTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  x.fillStyle = '#7a8f80'; x.fillRect(0, 0, 256, 256);
  x.fillStyle = 'rgba(28,52,44,.5)'; for (let i = 0; i < 4; i++) { x.fillRect(i * 64 + 16, 0, 32, 256); x.fillRect(0, i * 64 + 16, 256, 32); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2.5, 2.5); t.anisotropy = 4; return t;
}
const table = new THREE.Mesh(new THREE.CylinderGeometry(TR, TR, 0.3, 72), [
  new THREE.MeshPhongMaterial({ color: 0x5b3f2a }), new THREE.MeshPhongMaterial({ map: clothTexture(), shininess: 4 }), new THREE.MeshPhongMaterial({ color: 0x5b3f2a })]);
table.position.y = -0.15; scene.add(table);
const floor = new THREE.Mesh(new THREE.CircleGeometry(40, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x0d121b }));
floor.position.y = -3; scene.add(floor);

// soft puff texture
function puffTexture(inner) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, inner || 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
}
const PUFF = puffTexture();

/* ---- fly mesh ---- */
const mat = (col, o) => new THREE.MeshPhongMaterial(Object.assign({ color: col, shininess: 40 }, o || {}));
const SPH = new THREE.SphereGeometry(1, 20, 14);
function ell(col, sx, sy, sz, x, y, z, o) { const m = new THREE.Mesh(SPH, mat(col, o)); m.scale.set(sx, sy, sz); m.position.set(x, y, z); return m; }
const root = new THREE.Group(); root.scale.setScalar(S); scene.add(root);
const body = new THREE.Group(); root.add(body);
// thorax with dark stripes and a small scutellum
const THX = { y: 0.64, z: 0.05, sx: 0.36, sy: 0.34, sz: 0.44 };
body.add(ell(0x6a5238, THX.sx, THX.sy, THX.sz, 0, THX.y, THX.z));
for (const x of [-0.11, 0, 0.11]) body.add(ell(0x1f1812, 0.03, 0.03, 0.3, x, THX.y + THX.sy * Math.sqrt(1 - (x / THX.sx) ** 2) - 0.012, THX.z + 0.02));
body.add(ell(0x3b2d20, 0.15, 0.11, 0.13, 0, 0.7, -0.33));
// abdomen: tan segments with dark rear bands, breathes
const abd = new THREE.Group(); abd.position.set(0, 0.6, -0.38); body.add(abd);
for (let i = 0; i < 6; i++) {
  const k = i / 5, sx = 0.3 - 0.08 * k, sy = 0.27 - 0.08 * k, z = -0.12 - 0.15 * i, y = -0.025 * i;
  abd.add(ell(i === 0 ? 0x8b7350 : 0xd2b57a, sx, sy, 0.17, 0, y, z));
  abd.add(ell(0x2a2119, sx * 1.015, sy * 1.015, 0.075, 0, y, z - 0.1));
}
// head on a neck pivot, so it can turn independently of the body
const head = new THREE.Group(); head.position.set(0, 0.58, 0.4); body.add(head);
head.add(ell(0x6b5440, 0.26, 0.25, 0.24, 0, 0.02, 0.18));
for (const sd of [-1, 1]) {
  head.add(ell(0xb3121f, 0.15, 0.2, 0.17, sd * 0.17, 0.06, 0.22, { shininess: 120, specular: 0xffc8c8, emissive: 0x24040a }));
  head.add(ell(0xe8922a, 0.025, 0.025, 0.025, sd * 0.05, 0.25, 0.14));
}
head.add(ell(0xe8922a, 0.025, 0.025, 0.025, 0, 0.26, 0.2));
const ants = [];
for (const sd of [-1, 1]) {
  const g = new THREE.Group(); g.position.set(sd * 0.075, 0.13, 0.4); head.add(g);
  g.add(ell(0x3a2c20, 0.04, 0.04, 0.05, 0, 0, 0));
  g.add(ell(0x4a3a2c, 0.05, 0.075, 0.04, 0, -0.07, 0.03));
  const ar = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.009, 0.2, 4).rotateZ(Math.PI / 2).translate(sd * 0.1, -0.06, 0.04), mat(0x2a2119)); g.add(ar);
  ants.push(g);
}
// proboscis (rostrum + labellum), hangs from the head
const prob = new THREE.Group(); prob.position.set(0, -0.08, 0.34); head.add(prob);
const rostGeo = new THREE.CylinderGeometry(0.035, 0.05, 1, 8); rostGeo.rotateX(Math.PI / 2); rostGeo.translate(0, 0, 0.5);
const rost = new THREE.Mesh(rostGeo, mat(0xe0b98a)); prob.add(rost);
const label = ell(0xf0a8a0, 0.11, 0.07, 0.11, 0, 0, 0.1); prob.add(label);
// bristles
function fuzz(parent, n, cx, cy, cz, sx, sy, sz, minY) {
  const geo = new THREE.ConeGeometry(0.01, 0.07, 4); geo.translate(0, 0.035, 0);
  const im = new THREE.InstancedMesh(geo, mat(0x1a1410, { shininess: 5 }), n); const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), nv = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i < n; i++) {
    do { v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1); } while (v.lengthSq() > 1 || v.lengthSq() < 0.1 || v.y / v.length() < minY);
    v.normalize(); nv.set(v.x / sx, v.y / sy, v.z / sz).normalize();
    q.setFromUnitVectors(UP0, nv); m4.compose(new THREE.Vector3(cx + v.x * sx, cy + v.y * sy, cz + v.z * sz), q, sc); im.setMatrixAt(i, m4);
  }
  parent.add(im);
}
const UP0 = new THREE.Vector3(0, 1, 0);
fuzz(body, 70, 0, THX.y, THX.z, THX.sx, THX.sy, THX.sz, -0.2);
fuzz(abd, 90, 0, -0.06, -0.52, 0.27, 0.23, 0.62, -0.1);
// wings: tapered, with veins
function wingTexture() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 256; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 150, 10, 64, 150, 140); g.addColorStop(0, 'rgba(225,238,255,0.30)'); g.addColorStop(1, 'rgba(205,225,255,0.5)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 256);
  x.strokeStyle = 'rgba(45,40,36,.8)'; x.lineCap = 'round';
  const pts = [[8, 120], [22, 40], [50, 6], [84, 6], [112, 50], [122, 130]];
  pts.forEach((p, i) => { x.lineWidth = i === 0 ? 3.4 : 1.8; x.beginPath(); x.moveTo(64, 252); x.quadraticCurveTo((64 + p[0]) / 2 + (i % 2 ? 6 : -6), (252 + p[1]) / 2, p[0], p[1]); x.stroke(); });
  x.lineWidth = 1.4; x.beginPath(); x.moveTo(30, 150); x.lineTo(100, 150); x.moveTo(36, 90); x.lineTo(92, 96); x.stroke();
  const t = new THREE.CanvasTexture(x.canvas); return t;
}
const WTEX = wingTexture();
const wings = [];
for (const sd of [-1, 1]) {
  const pv = new THREE.Group(); pv.position.set(sd * 0.17, 0.8, 0.1); pv.rotation.order = 'ZYX';
  const wg = new THREE.CircleGeometry(0.5, 28); const pa = wg.attributes.position;
  for (let i = 0; i < pa.count; i++) { const t = pa.getY(i) + 0.5; pa.setX(i, pa.getX(i) * (0.3 + 0.7 * Math.pow(t, 0.7))); }
  wg.rotateX(-Math.PI / 2); wg.scale(0.85, 1, 2.1); wg.translate(0, 0, -1.0);
  const w = new THREE.Mesh(wg, new THREE.MeshPhongMaterial({ map: WTEX, transparent: true, side: THREE.DoubleSide, depthWrite: false, shininess: 100, specular: 0xaabbee }));
  pv.add(w); body.add(pv); wings.push({ pv, sd });
}
// legs: coxa -> femur -> tibia -> tarsus
const legMat = mat(0x2b2119), legMat2 = mat(0x3d2f23);
const femGeo = new THREE.CylinderGeometry(0.042, 0.065, 1, 7), tibGeo = new THREE.CylinderGeometry(0.03, 0.042, 1, 6), tarGeo = new THREE.CylinderGeometry(0.016, 0.026, 1, 5);
const legs = [];
for (const row of [0, 1, 2]) for (const sd of [-1, 1]) {
  const hipZ = [0.3, 0.06, -0.2][row], footZ = [0.62, 0.08, -0.6][row], footX = [0.52, 0.7, 0.56][row];
  const fem = new THREE.Mesh(femGeo, legMat2), tib = new THREE.Mesh(tibGeo, legMat), tar = new THREE.Mesh(tarGeo, legMat), knee = ell(0x2b2119, 0.062, 0.062, 0.062, 0, 0, 0), ankle = ell(0x2b2119, 0.04, 0.04, 0.04, 0, 0, 0);
  root.add(fem); root.add(tib); root.add(tar); root.add(knee); root.add(ankle);
  body.add(ell(0x3d2f23, 0.06, 0.06, 0.06, sd * 0.15, 0.5, hipZ));
  legs.push({ row, sd, hip: new THREE.Vector3(sd * 0.15, 0.5, hipZ), rest: new THREE.Vector3(sd * footX, 0, footZ), fem, tib, tar, knee, ankle, group: (row + (sd > 0 ? 0 : 1)) % 2, foot: new THREE.Vector3(sd * footX, 0, footZ) });
}
const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.8, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false }));
shadow.scale.set(S * 1.0, 1, S * 1.5); shadow.position.y = 0.006; scene.add(shadow);

const UP = new THREE.Vector3(0, 1, 0), _d = new THREE.Vector3(), _H = new THREE.Vector3(), _F = new THREE.Vector3(), _K = new THREE.Vector3(), _p = new THREE.Vector3();
function seg(m, a, b) { _d.subVectors(b, a); const L = _d.length(); m.position.copy(a).addScaledVector(_d, 0.5); if (L > 1e-5) m.quaternion.setFromUnitVectors(UP, _d.multiplyScalar(1 / L)); m.scale.set(1, L, 1); }
function ik(L1, L2, H, Fo, K) {
  _d.subVectors(Fo, H); let d = _d.length(); const dm = L1 + L2 - 0.02;
  if (d > dm) { _d.multiplyScalar(dm / d); d = dm; Fo.copy(H).add(_d); }
  if (d < 0.08) { d = 0.08; }
  _d.normalize();
  const a = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
  _p.set(0, 1, 0).addScaledVector(_d, -_d.y);
  if (_p.lengthSq() < 1e-4) _p.set(0, 0, 1);
  _p.normalize();
  K.copy(H).addScaledVector(_d, a).addScaledVector(_p, h);
}

/* ---- puddles ---- */
const COL = { s: [1, 0.72, 0.2], w: [0.45, 0.78, 1], b: [0.42, 0.6, 0.16] };
const puddleGeo = new THREE.CircleGeometry(1, 32).rotateX(-Math.PI / 2); let puddleSeq = 0;
function puddleColor(p) {
  const t = p.c.s + p.c.w + p.c.b || 1; const r = (COL.s[0] * p.c.s + COL.w[0] * p.c.w + COL.b[0] * p.c.b) / t, g = (COL.s[1] * p.c.s + COL.w[1] * p.c.w + COL.b[1] * p.c.b) / t, b = (COL.s[2] * p.c.s + COL.w[2] * p.c.w + COL.b[2] * p.c.b) / t;
  return new THREE.Color(r, g, b);
}
function refreshPuddle(p) { p.mesh.material.color.copy(puddleColor(p)); p.ver = (p.ver || 0) + 1; p.avoid = false; }
function addPuddle(kind, x, z) {
  const c = { s: 0, w: 0, b: 0 }; c[kind] = kind === 's' ? 0.75 : kind === 'w' ? 1 : 0.75;
  const mesh = new THREE.Mesh(puddleGeo, new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.88, shininess: 120, specular: 0xffffff }));
  mesh.position.set(x, 0.012 + 0.003 * (puddleSeq++ % 20), z); scene.add(mesh);
  const p = { x, z, vol: 0.8, c, mesh, avoid: false, ver: 0 };
  refreshPuddle(p); puddles.push(p);
  if (puddles.length > 6) removePuddle(puddles[0]);
  return p;
}
function mixPuddle(p, kind) { p.c[kind] = Math.min(1, p.c[kind] + 0.5); p.vol = Math.min(1, p.vol + 0.3); refreshPuddle(p); }
function removePuddle(p) { const i = puddles.indexOf(p); if (i >= 0) puddles.splice(i, 1); scene.remove(p.mesh); p.mesh.material.dispose(); }
const pRad = p => 0.28 + 0.42 * Math.sqrt(Math.max(0, p.vol));
function puddleAt(x, z, pad) { let best = null, bd = 1e9; for (const p of puddles) { const d = Math.hypot(p.x - x, p.z - z); if (d < pRad(p) + pad && d < bd) { bd = d; best = p; } } return best; }

/* ---- odor clouds, labels, effects ---- */
function labelSprite(txt, col) {
  const c = document.createElement('canvas'); c.width = c.height = 96; const x = c.getContext('2d');
  x.fillStyle = 'rgba(11,15,23,.8)'; x.beginPath(); x.arc(48, 48, 40, 0, 7); x.fill(); x.lineWidth = 6; x.strokeStyle = col; x.stroke();
  x.fillStyle = '#fff'; x.font = 'bold 48px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 48, 52);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })); s.scale.set(0.55, 0.55, 1); return s;
}
const odorFx = {};
for (const k in ODORS) {
  const od = ODORS[k], col = new THREE.Color(od.col);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: od.col, transparent: true, opacity: 0.55 }));
  ring.position.set(od.x, 0.015, od.z); scene.add(ring);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.85, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: od.col, transparent: true, opacity: 0.12, depthWrite: false }));
  disc.position.set(od.x, 0.012, od.z); scene.add(disc);
  const lab = labelSprite(od.name, '#' + col.getHexString()); lab.position.set(od.x, 1.75, od.z); scene.add(lab);
  const puffs = [];
  for (let i = 0; i < 14; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: PUFF, color: od.col, transparent: true, opacity: 0, depthWrite: false })); scene.add(sp); puffs.push({ sp, ph: i / 14, ang: rnd(0, 6.28), rad: rnd(0.1, 0.6) }); }
  odorFx[k] = { puffs };
}
const sparks = [];
for (let i = 0; i < 14; i++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: PUFF, color: 0xffffff, transparent: true, opacity: 0, depthWrite: false })); sp.visible = false; scene.add(sp); sparks.push({ sp, t: 9, vx: 0, vy: 0, vz: 0 }); }
function emit(n, col, x, y, z) {
  let c = 0; for (const s of sparks) { if (c >= n) break; if (s.t < 1.1) continue; s.t = 0; s.sp.material.color.setHex(col); s.sp.position.set(x, y, z); s.vx = rnd(-0.7, 0.7); s.vy = rnd(0.7, 1.6); s.vz = rnd(-0.7, 0.7); s.sp.visible = true; c++; }
}
const rings = [];  // wind / impact rings
for (let i = 0; i < 6; i++) { const r = new THREE.Mesh(new THREE.RingGeometry(0.9, 1, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0, depthWrite: false })); r.visible = false; scene.add(r); rings.push({ m: r, t: 9, max: 1 }); }
function ringAt(x, z, max, col) { const r = rings.find(q => q.t >= 1) || rings[0]; r.t = 0; r.max = max; r.m.position.set(x, 0.02, z); r.m.material.color.setHex(col || 0xbfe6ff); r.m.visible = true; }
// swatter
const swGrp = new THREE.Group(); swGrp.visible = false; scene.add(swGrp);
const swHead = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.05, 0.85), mat(0x6fbf4a)); swGrp.add(swHead);
const swHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), mat(0x9a6a3a)); swHandle.position.set(0, 1.3, 0.9); swHandle.rotation.x = 0.8; swGrp.add(swHandle);

/* ====================== helpers: ground point / camera ====================== */
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
function ground(ev) {
  const r = canvas.getBoundingClientRect(); ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  if (!ray.ray.intersectPlane(plane, hit)) return null;
  const d = Math.hypot(hit.x, hit.z); if (d > TR - 0.1) { hit.x *= (TR - 0.1) / d; hit.z *= (TR - 0.1) / d; }
  return { x: hit.x, z: hit.z };
}
const camPos = new THREE.Vector3(0, 4.6, 5.6), camLook = new THREE.Vector3(0, 0, 0);
function updateCamera(dt, snap) {
  const k = snap ? 1 : 1 - Math.exp(-dt * 3);
  let tp, tl;
  if (T.cam === 'follow') { tl = new THREE.Vector3(F.x * 0.95, 0.3 + F.y * 0.5, F.z * 0.95); tp = new THREE.Vector3(F.x * 0.95, 3.1 + F.y * 0.3, F.z * 0.95 + 3.9); }
  else { tl = new THREE.Vector3(0, 0, 0.2); tp = new THREE.Vector3(0, 8.6, 6.6); }
  camPos.lerp(tp, k); camLook.lerp(tl, k); camera.position.copy(camPos); camera.lookAt(camLook);
}
function resize() {
  const r = canvas.parentElement.getBoundingClientRect(); const w = Math.max(50, r.width), h = Math.max(50, r.height);
  if (renderer) renderer.setSize(w, h, false); camera.aspect = w / h;
  // keep the whole table visible on narrow screens in wide mode
  camera.fov = w / h < 0.8 ? 52 : 45; camera.updateProjectionMatrix();
}

/* ====================== simulation of one step ====================== */
const chipText = { idle: 'гуляет', wander: 'гуляет', goto: 'идёт к капле', eat: 'ест', groom: 'чистит голову', flinch: 'вздрогнула', flight: 'улетает!', retreat: 'отшатнулась', sniff: 'нюхает', odor: 'идёт на запах' };
let toastT = 0; function toast(msg, sec) { const e = $('toast'); e.textContent = msg; e.classList.add('on'); toastT = sec || 2.4; }

function mouthPos() { return { x: F.x + Math.sin(F.h) * MOUTH, z: F.z + Math.cos(F.h) * MOUTH }; }
function contactPuddle() { const m = mouthPos(); let best = null, bd = 1e9; for (const p of puddles) { const d = Math.hypot(p.x - m.x, p.z - m.z); if (d < pRad(p) + 0.3 && d < bd) { bd = d; best = p; } } return best; }
function nearestOdor() { let best = null, bd = 1.25; for (const k in ODORS) { const d = Math.hypot(F.x - ODORS[k].x, F.z - ODORS[k].z); if (d < bd) { bd = d; best = k; } } return best; }

function steer(tx, tz, dt, vmax) {
  const dx = tx - F.x, dz = tz - F.z, dist = Math.hypot(dx, dz);
  let want = Math.atan2(dx, dz);
  // a real fly never walks a ruler-straight line: gentle wobble far from the goal
  if (dist > 0.9) want += (0.28 * Math.sin(1.7 * T.time + F.ph1) + 0.14 * Math.sin(3.3 * T.time + F.ph2)) * Math.min(1, (dist - 0.9) / 1.2);
  const da = wrapA(want - F.h); F.lastDa = da;
  const wantOm = clamp(da * 6, -5.5, 5.5);
  F.om += (wantOm - F.om) * Math.min(1, dt * 9); F.h += F.om * dt; F.omega = F.om;
  // stop-and-go: short pauses and speed bursts
  if (F.pauseT > 0) F.pauseT -= dt; else if (dist > 0.9 && Math.random() < dt * 0.22) F.pauseT = rnd(0.2, 0.6);
  const burst = 0.72 + 0.28 * Math.sin(2.6 * T.time + F.ph3);
  const align = Math.max(0, Math.cos(da)) ** 2;
  const vt = (F.pauseT > 0 ? 0 : vmax * burst) * align * Math.min(1, dist / 0.5);
  F.v += (vt - F.v) * Math.min(1, dt * 7);
  F.x += Math.sin(F.h) * F.v * dt; F.z += Math.cos(F.h) * F.v * dt;
  return dist;
}
function halt(dt) { F.v += (0 - F.v) * Math.min(1, dt * 10); F.om *= 0.8; F.omega = F.om; F.x += Math.sin(F.h) * F.v * dt; F.z += Math.cos(F.h) * F.v * dt; }
function clampPos() { const d = Math.hypot(F.x, F.z); if (d > FR) { F.x *= FR / d; F.z *= FR / d; } }

function setState(s) { if (F.state !== s) { F.state = s; F.timer = 0; } }
function startFlight(dt) {
  const th = F.threat, away = Math.atan2(F.x - th.x, F.z - th.z) + rnd(-0.7, 0.7);
  const dist = rnd(1.8, 2.8);
  let lx = F.x + Math.sin(away) * dist, lz = F.z + Math.cos(away) * dist;
  const d = Math.hypot(lx, lz); if (d > FR - 0.2) { const k = (FR - 0.2) / d; lx *= k; lz *= k; }
  F.flight = { x0: F.x, z0: F.z, x1: lx, z1: lz, t: 0, T: 1.9, h0: F.h };
  setState('flight'); F.fcool = 2.5; F.cool = 1.0; F.flinch = null;
}
function startFlinch() {
  const th = F.threat, away = Math.atan2(F.x - th.x, F.z - th.z);
  F.flinch = { t: 0, dx: Math.sin(away) * 0.5, dz: Math.cos(away) * 0.5 }; setState('flinch'); F.cool = 1.2;
}
function decide() {
  // not a brain output: simple "what to do next" rules
  const cand = puddles.filter(p => !p.avoid);
  if (cand.length && Math.random() < 0.9) {
    cand.sort((a, b) => Math.hypot(a.x - F.x, a.z - F.z) - Math.hypot(b.x - F.x, b.z - F.z));
    F.target = cand[0]; setState('goto'); return;
  }
  const vA = sig(mbz('A')), vB = sig(mbz('B'));
  if (Math.random() < clamp(0.6 * (vA + vB), 0, 0.9)) { F.goOd = Math.random() < vA / (vA + vB) ? 'A' : 'B'; setState('odor'); return; }
  const r = rnd(0, 1);
  if (r < 0.55) { const a = rnd(0, 6.28), d = rnd(0.8, FR - 0.3); F.target = { x: Math.cos(a) * d, z: Math.sin(a) * d, wander: true }; setState('wander'); }
  else { setState('idle'); F.timer = -rnd(1.5, 4.5); }
}

function update(dt) {
  T.time += dt; F.t += dt; F.timer += dt; F.cool = Math.max(0, F.cool - dt);
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }

  /* --- 1. sensory input to the brain --- */
  let sg = 0, bt = 0, wt = 0, jon = 0;
  const cp = (F.state === 'flight') ? null : contactPuddle();
  if (cp) { sg = 200 * cp.c.s; bt = 200 * cp.c.b; wt = 200 * cp.c.w; }
  for (let i = pulses.length - 1; i >= 0; i--) { const q = pulses[i]; q.t -= dt; if (q.t <= 0) { pulses.splice(i, 1); continue; } if (q.kind === 'sugar') sg = Math.max(sg, q.hz); else bt = Math.max(bt, q.hz); }
  if (events.wind) { const d = Math.hypot(F.x - events.wind.x, F.z - events.wind.z); const l = 190 * Math.pow(Math.max(0, 1 - d / 3.2), 0.8); if (l > jon) { jon = l; F.threat = { x: events.wind.x, z: events.wind.z }; } }
  if (events.swat) { const s = events.swat; s.t += dt; const d = Math.hypot(F.x - s.x, F.z - s.z); const env = s.t < 0.15 ? s.t / 0.15 : Math.exp(-(s.t - 0.15) / 0.3); const l = 200 * Math.pow(Math.max(0, 1 - d / 3.2), 0.8) * env; if (l > jon) { jon = l; F.threat = { x: s.x, z: s.z }; } if (s.t > 1.5) events.swat = null; }
  if (events.poke > 0) { events.poke -= dt; jon = Math.max(jon, 100); }
  if (events.stroke > 0) { events.stroke -= dt; jon = Math.max(jon, 60); }
  inp.sugar = sg; inp.bitter = bt; inp.water = wt; inp.jon = jon;

  /* --- 2. the real brain (precomputed responses), smoothed --- */
  const tg = brainTarget(inp);
  for (const k of ['mn9_L', 'mn9_R', 'aBN1', 'dn1_1', 'dn2_l', 'nact']) O[k] = sm(O[k], tg[k], dt, k === 'nact' ? 0.25 : 0.12);

  const m = (O.mn9_L + O.mn9_R) / 2, ab = O.aBN1, dn = Math.max(O.dn1_1, O.dn2_l);
  A.p = sm(A.p, clamp(m / 45, 0, 1), dt, 0.1);
  A.g = sm(A.g, clamp(ab / 35, 0, 1), dt, ab > A.g * 35 ? 0.3 : 0.7);

  /* --- 3. my behaviour rules reading those outputs --- */
  F.fcool = Math.max(0, (F.fcool || 0) - dt);
  if (dn >= 3 && dn < 9) F.dnT = (F.dnT || 0) + dt; else F.dnT = 0;
  if (F.state !== 'flight' && F.fcool <= 0 && dn >= 9) { startFlight(); }
  else if (F.state !== 'flight' && F.state !== 'flinch' && F.cool <= 0 && F.dnT > 0.2) { startFlinch(); F.dnT = 0; }
  if (MB.pam > 0) MB.pam -= dt; if (MB.ppl > 0) MB.ppl -= dt;

  switch (F.state) {
    case 'flight': {
      const f = F.flight; f.t += dt; const u = clamp(f.t / f.T, 0, 1), e = u * u * (3 - 2 * u);
      const px = F.x, pz = F.z;
      F.x = f.x0 + (f.x1 - f.x0) * e; F.z = f.z0 + (f.z1 - f.z0) * e;
      F.y = 1.25 * Math.sin(Math.PI * Math.pow(u, 0.9)) + 0.12 * Math.sin(u * 14);
      const sp = Math.hypot(F.x - px, F.z - pz) / Math.max(dt, 1e-4);
      if (sp > 0.2) F.h += wrapA(Math.atan2(F.x - px, F.z - pz) - F.h) * Math.min(1, dt * 6);
      F.v = sp;
      if (u >= 1) { F.y = 0; F.v = 0; F.flight = null; setState('idle'); F.timer = -0.4; }
      break;
    }
    case 'flinch': {
      const f = F.flinch; f.t += dt; F.y = 0.18 * Math.sin(Math.PI * clamp(f.t / 0.28, 0, 1));
      F.x += f.dx * dt * 3.2; F.z += f.dz * dt * 3.2; F.v = 0;
      if (f.t >= 0.3) { F.y = 0; F.flinch = null; setState('idle'); F.timer = -0.2; }
      break;
    }
    case 'retreat': {
      const r = F.retreat; r.t += dt; const da = wrapA(r.dir - F.h); F.h += clamp(da, -7 * dt, 7 * dt);
      F.v += (1.8 * Math.max(0, Math.cos(da)) - F.v) * Math.min(1, dt * 8); F.x += Math.sin(F.h) * F.v * dt; F.z += Math.cos(F.h) * F.v * dt;
      if (r.t > 0.9) { setState('idle'); F.timer = -0.3; }
      break;
    }
    default: {
      // reflex layer: grooming and eating are driven by outputs
      if (A.g > 0.12) { if (F.state !== 'groom') { setState('groom'); } }
      else if (F.state === 'groom' && A.g < 0.07) { setState('idle'); F.timer = -0.3; }
      if (F.state === 'groom') { halt(dt); break; }
      const feeding = A.p > 0.15 && (cp || pulses.length);
      if (F.state === 'eat' && !feeding) { setState('idle'); F.timer = -0.2; }
      if (feeding && F.state !== 'eat') setState('eat');
      if (F.state === 'eat') {
        halt(dt);
        if (cp) { cp.vol -= dt * 0.045 * A.p; if (cp.vol <= 0.03) { removePuddle(cp); } }
        break;
      }
      // bitter / uninteresting contact
      if (cp) {
        F.contact += dt;
        if (inp.bitter >= 50 && m < 25 && F.contact > 0.25) {
          cp.avoid = true; F.retreat = { t: 0, dir: F.h + Math.PI + rnd(-0.5, 0.5) }; setState('retreat'); F.contact = 0; toast('Горько! Муха отказывается'); break;
        }
        if (F.contact > 1.6 && A.p < 0.15 && inp.bitter < 50) { cp.avoid = true; F.contact = 0; setState('idle'); F.timer = -0.1; toast('Муху это не заинтересовало'); }
      } else F.contact = 0;
      if (pulses.length && inp.bitter >= 50 && m < 25 && F.state !== 'retreat') { F.retreat = { t: 0, dir: F.h + Math.PI + rnd(-0.5, 0.5) }; setState('retreat'); break; }

      if ((F.state === 'idle' || F.state === 'wander' || F.state === 'odor' || F.state === 'sniff') && !(F.callHold > 0) && F.timer > 0.15) {
        const cand = puddles.filter(p => !p.avoid);
        if (cand.length) { cand.sort((a, b) => Math.hypot(a.x - F.x, a.z - F.z) - Math.hypot(b.x - F.x, b.z - F.z)); F.target = cand[0]; setState('goto'); }
      }
      if (F.state === 'goto') {
        const tgt = F.target;
        if (!tgt || puddles.indexOf(tgt) < 0 || tgt.avoid) { setState('idle'); F.timer = -0.2; halt(dt); break; }
        const d = steer(tgt.x, tgt.z, dt, 1.5);
        if (d < MOUTH + 0.1) { halt(dt); if (!contactPuddle()) { setState('idle'); F.timer = -0.2; } }
      } else if (F.state === 'wander') {
        const d = steer(F.target.x, F.target.z, dt, 1.2);
        if (d < 0.2 || F.timer > 6) { setState('idle'); F.timer = -rnd(0.3, 1.8); }
      } else if (F.state === 'odor') {
        const od = ODORS[F.goOd]; const d = steer(od.x, od.z, dt, 1.4);
        if (d < 0.35) { F.sniffOd = F.goOd; visits[F.goOd]++; setState('sniff'); }
      } else if (F.state === 'sniff') {
        halt(dt);
        const z = mbz(F.sniffOd), stay = z > 1 ? 3.5 : 1.6;
        if (F.timer > Math.max(z < -0.8 ? 0.6 : stay, F.callHold || 0)) { F.callHold = 0; setState('idle'); F.timer = -0.2; if (z < -0.8) { const od = ODORS[F.sniffOd]; F.target = { x: od.x * 0.2, z: od.z * 0.2 + 0.5, wander: true }; setState('wander'); } }
      } else { // idle
        halt(dt);
        if (!F.micro && F.timer < 0 && Math.random() < dt * 0.5) F.micro = { type: ['rubHind', 'wingFlick', 'look'][Math.floor(Math.random() * 3)], t: 0, dur: rnd(1.1, 2.0) };
        if (F.timer > 0) decide();
      }
    }
  }
  if (F.state === 'groom' && F.state !== 'flight') { /* stays put */ }
  clampPos();
  if (F.micro) { F.micro.t += dt; if (F.micro.t > F.micro.dur || F.state !== 'idle') F.micro = null; }
  {
    const walking = F.state === 'goto' || F.state === 'wander' || F.state === 'odor';
    let ht = 0;
    if (walking) ht = clamp(F.lastDa * 0.9, -0.7, 0.7);
    else if (F.state === 'idle' || F.state === 'sniff') ht = 0.4 * Math.sin(T.time * 0.9 + 1) * Math.sin(T.time * 0.37) + (F.micro && F.micro.type === 'look' ? 0.5 * Math.sin(T.time * 2.2) : 0);
    F.headYaw = sm(F.headYaw, ht, dt, 0.12);
  }
  A.flap = sm(A.flap, F.state === 'flight' ? 1 : 0, dt, 0.08);
  A.fl = sm(A.fl, F.state === 'flight' ? 1 : 0, dt, 0.12);
}

/* ====================== animation of the fly mesh ====================== */
let wingT = 0;
const _A = new THREE.Vector3(), _Kn = new THREE.Vector3();
function poseFly(dt) {
  const sp = F.v / S;                               // speed in fly-local units
  const swMove = clamp(F.v / 0.35, 0, 1), swTurn = clamp(Math.abs(F.omega) / 3, 0, 1) * 0.5;
  const sw = F.state === 'flight' ? 0 : Math.max(swMove, swTurn);
  const stride = 0.55;
  const rate = F.state === 'flight' ? 0 : Math.max(0.6 * sp / Math.max(stride * sw, 0.06), 1.4 * swTurn);
  F.walk = (F.walk + rate * dt) % 1;
  const ph = F.walk * Math.PI * 2, tt = T.time;
  const fl = A.fl, me = F.micro ? Math.sin(Math.PI * F.micro.t / F.micro.dur) : 0;

  root.position.set(F.x, F.y, F.z); root.rotation.y = F.h;
  // body: bob, sway and lean into turns
  const bob = (fl > 0.5 ? 0 : 0.022 * Math.sin(ph * 2) * sw) + (F.state === 'eat' ? -0.03 * A.p : 0);
  body.position.set(0, bob, 0);
  const pitch = -0.35 * fl + 0.12 * A.p + (F.state === 'flinch' ? -0.25 : 0);
  const roll = fl > 0.5 ? Math.sin(tt * 5) * 0.08 - F.omega * 0.04 : 0.05 * Math.sin(ph) * sw - F.omega * 0.03 * swMove;
  body.rotation.set(pitch, 0.04 * Math.sin(ph + 1) * sw, roll);
  body.updateMatrix();
  // head leads the turn and glances around when idle; dips when feeding
  head.rotation.set(0.32 * A.p + (F.state === 'groom' ? 0.08 * Math.sin(tt * 14) * A.g : 0) - 0.1 * fl, F.headYaw || 0, 0.12 * (F.headYaw || 0) + (F.micro && F.micro.type === 'look' ? 0.18 * me : 0));
  // antennae twitch
  ants.forEach((g, i) => { g.rotation.set(0.12 * Math.sin(tt * 6.3 + i * 2) + 0.35 * A.g * Math.sin(tt * 20 + i) - 0.5 * fl, 0, 0.1 * Math.sin(tt * 4.1 + i)); });
  // abdomen breathes and bends
  abd.scale.set(1 + 0.02 * Math.sin(tt * 4.5), 1 + 0.035 * Math.sin(tt * 4.5), 1);
  abd.rotation.set(-0.22 * fl + 0.03 * Math.sin(tt * 2.2), -F.omega * 0.06 + 0.06 * Math.sin(ph) * sw, 0);

  // proboscis: extends and pumps while drinking
  const e = A.p, pump = e > 0.3 ? Math.sin(tt * 19) : 0, L = 0.06 + 0.56 * e * (1 + 0.07 * pump);
  prob.rotation.x = 0.9 * e - 0.06 * pump * e; rost.scale.z = L; label.position.z = L + 0.04; label.visible = e > 0.05; rost.visible = e > 0.03;
  label.scale.set(0.11 * (1 + 0.25 * pump), 0.07 * (1 - 0.2 * pump), 0.11);

  // wings: 8 Hz visual flap in flight (slow enough for a screen), flick when fidgeting
  wingT += dt * (A.flap > 0.2 ? 8 : 0) * Math.PI * 2;
  for (const w of wings) {
    const flick = F.micro && F.micro.type === 'wingFlick' ? 0.45 * me * me : 0;
    const spread = 0.12 + 1.0 * A.flap + flick, flap = -0.12 + A.flap * (0.27 + 0.65 * Math.sin(wingT)) + flick * 0.15 * Math.sin(tt * 30);
    w.pv.rotation.set(0.1 * A.flap * Math.sin(wingT + 1.2), -w.sd * spread, w.sd * flap);
  }

  // legs
  const gAmt = F.state === 'groom' ? clamp(A.g * 1.6, 0, 1) : 0, eAmt = F.state === 'eat' ? A.p : 0, rub = F.micro && F.micro.type === 'rubHind' ? me : 0;
  for (const lg of legs) {
    const t = (F.walk + 0.5 * lg.group) % 1;
    const s = t < 0.6 ? 0.5 - t / 0.6 : -0.5 + (t - 0.6) / 0.4, lift = t < 0.6 ? 0 : Math.sin(Math.PI * (t - 0.6) / 0.4);
    _F.copy(lg.rest); _F.z += s * stride * sw; _F.y += lift * 0.22 * sw;
    if (lg.row === 0) {
      if (eAmt > 0) { _F.z += 0.32 * eAmt + 0.03 * Math.sin(tt * 9 + lg.sd) * eAmt; _F.x *= 1 - 0.3 * eAmt; }
      if (gAmt > 0) {
        const gx = lg.sd * (0.17 + 0.05 * Math.sin(tt * 14 + (lg.sd > 0 ? 0 : 1.6))), gy = 0.78, gz = 0.82 + 0.1 * Math.sin(tt * 14 + (lg.sd > 0 ? 0 : 1.6));
        _F.x += (gx - _F.x) * gAmt; _F.y += (gy - _F.y) * gAmt; _F.z += (gz - _F.z) * gAmt;
      }
    }
    if (lg.row === 2 && rub > 0) {   // hind legs rubbed together behind the body
      const gx = lg.sd * 0.1, gy = 0.62, gz = -0.78 + 0.1 * Math.sin(tt * 13 + (lg.sd > 0 ? 0 : 1.2));
      _F.x += (gx - _F.x) * rub; _F.y += (gy - _F.y) * rub; _F.z += (gz - _F.z) * rub;
    }
    if (fl > 0.01) { _F.x += (lg.sd * 0.32 - _F.x) * fl; _F.y += (0.12 - _F.y) * fl; _F.z += (lg.hip.z * 0.8 - 0.1 * (lg.row === 2 ? 1 : 0) - _F.z) * fl; }
    lg.foot.copy(_F);
    _H.copy(lg.hip).applyMatrix4(body.matrix);
    _A.copy(lg.foot); _A.y += 0.13 * (1 - 0.4 * fl); _A.x -= lg.sd * 0.03;       // ankle sits a little above and inside the foot
    ik(0.46, 0.56, _H, _A, _K);
    seg(lg.fem, _H, _K); seg(lg.tib, _K, _A); seg(lg.tar, _A, lg.foot);
    lg.knee.position.copy(_K); lg.ankle.position.copy(_A);
  }
  shadow.position.set(F.x, 0.006, F.z); shadow.rotation.y = F.h;
  const hgt = clamp(F.y / 1.5, 0, 1); shadow.material.opacity = 0.3 * (1 - 0.7 * hgt); shadow.scale.set(S * (1 + 0.5 * hgt), 1, S * 1.5 * (1 + 0.5 * hgt));
}

/* ====================== effects and misc visuals ====================== */
function fxUpdate(dt) {
  for (const k in odorFx) {
    const od = ODORS[k];
    for (const p of odorFx[k].puffs) {
      p.ph = (p.ph + dt * 0.16) % 1;
      const y = 0.15 + p.ph * 1.4, spread = p.rad * (1 + p.ph * 0.8);
      p.sp.position.set(od.x + Math.cos(p.ang + T.time * 0.3) * spread, y, od.z + Math.sin(p.ang + T.time * 0.3) * spread);
      const a = Math.sin(Math.PI * p.ph); p.sp.material.opacity = 0.3 * a; p.sp.scale.setScalar(0.45 + 0.5 * p.ph);
    }
  }
  for (const s of sparks) { if (s.t >= 1.1) { s.sp.visible = false; continue; } s.t += dt; s.sp.position.x += s.vx * dt; s.sp.position.y += s.vy * dt; s.sp.position.z += s.vz * dt; s.vy -= dt * 1.2; s.sp.material.opacity = Math.max(0, 1 - s.t / 1.1); s.sp.scale.setScalar(0.3); }
  for (const r of rings) { if (r.t >= 1) { r.m.visible = false; continue; } r.t += dt * 1.3; r.m.scale.setScalar(0.2 + r.t * r.max); r.m.material.opacity = Math.max(0, 0.55 * (1 - r.t)); }
  if (events.wind) { events.wind.ring = (events.wind.ring || 0) + dt; if (events.wind.ring > 0.35) { events.wind.ring = 0; ringAt(events.wind.x, events.wind.z, 2.2); } }
  // swatter animation
  const s = events.swat;
  if (s && s.t < 1.1) {
    swGrp.visible = true; const t = s.t; let y;
    if (t < 0.4) { const u = t / 0.4; y = 2.6 - 2.5 * u * u; } else if (t < 0.6) y = 0.1; else y = 0.1 + (t - 0.6) / 0.5 * 2.5;
    swGrp.position.set(s.lx, Math.max(0.1, y), s.lz);
    if (!s.hit && t >= 0.4) { s.hit = true; ringAt(s.lx, s.lz, 1.6, 0xffffff); }
    if (!s.hit) { const d = Math.hypot(F.x - s.x, F.z - s.z); if (d < 0.9) { const a = Math.atan2(s.x - F.x, s.z - F.z); s.lx = F.x + Math.sin(a) * 0.9; s.lz = F.z + Math.cos(a) * 0.9; } }
    else if (Math.hypot(F.x - s.lx, F.z - s.lz) < 0.8) { const a = Math.atan2(s.lx - F.x, s.lz - F.z); s.lx = F.x + Math.sin(a) * 0.8; s.lz = F.z + Math.sin(a) * 0 + Math.cos(a) * 0.8; }
  } else swGrp.visible = false;
}

/* ====================== UI wiring ====================== */
const HINTS = {
  sugar: 'Тап по столу — капля сахара. Тап по капле — добавить. Тащи каплю пальцем — муха пойдёт следом.',
  water: 'Капля воды. Тап по сладкой капле — разбавить. Настоящий мозг в модели откликается на воду слабее, чем на сахар.',
  bitter: 'Горькое (хинин). Тап по сладкой капле — подмешать горького и посмотреть, что скажет мозг.',
  wind: 'Зажми палец на столе — дуть. Чем ближе к мухе, тем сильнее сигнал на усики.',
  swat: 'Тап — хлопушка бьёт рядом (по мухе не попадёт). Чем ближе удар, тем сильнее сигнал.',
  touch: 'Тап по мухе — тычок. Води пальцем по мухе — погладить.',
  teach: 'Тап по запаху А или Б — позвать муху. Когда она там — награда или наказание.'
};
function setTool(t) {
  T.tool = t; document.querySelectorAll('.tool').forEach(b => b.classList.toggle('on', b.dataset.t === t));
  $('hint').textContent = HINTS[t]; $('teach').classList.toggle('on', t === 'teach');
}
document.querySelectorAll('.tool').forEach(b => b.addEventListener('click', () => setTool(b.dataset.t)));
$('bCam').addEventListener('click', () => { T.cam = T.cam === 'follow' ? 'wide' : 'follow'; $('bCam').textContent = T.cam === 'follow' ? '🔭' : '🎯'; });
$('bFold').addEventListener('click', () => { const b = $('brain'); b.classList.toggle('collapsed'); $('bFold').textContent = b.classList.contains('collapsed') ? '▴' : '▾'; setTimeout(onResize, 30); });
$('bInfo').addEventListener('click', () => $('info').classList.add('on'));
$('bInfoX').addEventListener('click', () => $('info').classList.remove('on'));

const api = {
  drop(kind, x, z) { return addPuddle(kind === 'sugar' ? 's' : kind === 'water' ? 'w' : 'b', x, z); },
  mix(p, kind) { mixPuddle(p, kind === 'sugar' ? 's' : kind === 'water' ? 'w' : 'b'); },
  swat(x, z) { if (events.swat && events.swat.t < 1.0) return; events.swat = { x, z, lx: x, lz: z, t: 0, hit: false }; },
  puff(x, z, on) { events.wind = on ? { x, z, ring: 0 } : null; },
  poke() { if (F.y < 0.4) events.poke = 0.8; },
  stroke() { events.stroke = 0.3; },
  call(od) { if (F.state === 'flight') return; F.goOd = od; F.callHold = 8; setState('odor'); },
  teach(kind) {
    const od = nearestOdor();
    if (od && F.state === 'sniff') F.callHold = F.timer + 3;
    if (!od) { toast('Муха не у запаха — тапни на запах, она подойдёт'); return false; }
    if (kind === 'reward') { pulses.push({ kind: 'sugar', hz: 150, t: 1.6 }); mbLearn(od, +1); emit(8, 0xffd84a, F.x, 0.9, F.z); toast('Награда: запах ' + ODORS[od].name + ' теперь приятнее'); }
    else { pulses.push({ kind: 'bitter', hz: 150, t: 1.2 }); mbLearn(od, -1); $('tint').classList.add('on'); setTimeout(() => $('tint').classList.remove('on'), 500); toast('Наказание: запах ' + ODORS[od].name + ' теперь неприятен'); }
    return true;
  },
  forget() { MB.w.fill(0); visits.A = visits.B = 0; toast('Муха всё забыла'); },
  reset() { while (puddles.length) removePuddle(puddles[0]); pulses.length = 0; events.wind = events.swat = null; events.poke = events.stroke = 0; Object.assign(F, { x: 0, z: 0.6, h: 0.3, v: 0, y: 0, flight: null, flinch: null, retreat: null, cool: 0, fcool: 0, dnT: 0, callHold: 0, om: 0, pauseT: 0, micro: null }); setState('idle'); F.timer = 0; },
};
$('bRew').addEventListener('click', () => api.teach('reward'));
$('bPun').addEventListener('click', () => api.teach('punish'));
$('bForget').addEventListener('click', () => api.forget());
$('bReset').addEventListener('click', () => api.reset());

let drag = null, downPt = null;
canvas.addEventListener('pointerdown', ev => {
  ev.preventDefault(); try { canvas.setPointerCapture(ev.pointerId); } catch (e) { }
  const g = ground(ev); if (!g) return; downPt = { x: ev.clientX, y: ev.clientY };
  const t = T.tool;
  if (t === 'sugar' || t === 'water' || t === 'bitter') {
    const p = puddleAt(g.x, g.z, 0.15);
    if (p) drag = { type: 'pud', p, moved: false }; else { api.drop(t, g.x, g.z); drag = { type: 'new' }; }
  } else if (t === 'wind') { api.puff(g.x, g.z, true); drag = { type: 'wind' }; }
  else if (t === 'swat') { api.swat(g.x, g.z); }
  else if (t === 'touch') { if (Math.hypot(g.x - F.x, g.z - F.z) < 0.85) { api.poke(); drag = { type: 'touch', moved: false, ox: ev.clientX, oy: ev.clientY }; } }
  else if (t === 'teach') { for (const k in ODORS) if (Math.hypot(g.x - ODORS[k].x, g.z - ODORS[k].z) < 1.1) api.call(k); }
}, { passive: false });
canvas.addEventListener('pointermove', ev => {
  if (!drag) return; const g = ground(ev); if (!g) return;
  const mv = Math.hypot(ev.clientX - downPt.x, ev.clientY - downPt.y);
  if (drag.type === 'pud') { if (mv > 8) drag.moved = true; if (drag.moved) { drag.p.x = g.x; drag.p.z = g.z; drag.p.mesh.position.set(g.x, drag.p.mesh.position.y, g.z); } }
  else if (drag.type === 'wind') api.puff(g.x, g.z, true);
  else if (drag.type === 'touch') { if (Math.hypot(g.x - F.x, g.z - F.z) < 0.95 && Math.hypot(ev.clientX - drag.ox, ev.clientY - drag.oy) > 5) { api.stroke(); } drag.ox = ev.clientX; drag.oy = ev.clientY; }
}, { passive: true });
function endDrag(ev) {
  if (drag) {
    if (drag.type === 'pud' && !drag.moved) api.mix(drag.p, T.tool);
    if (drag.type === 'wind') api.puff(0, 0, false);
  }
  drag = null;
}
canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);

/* ====================== brain panel (2D canvas, real neurons) ====================== */
const cb = $('cb'), bx = cb.getContext('2d');
let bw = 300, bh = 150, bdpr = 1;
function sizeBrain() { const r = cb.getBoundingClientRect(); bdpr = Math.min(window.devicePixelRatio || 1, 2); bw = Math.max(60, r.width); bh = Math.max(60, r.height); cb.width = Math.round(bw * bdpr); cb.height = Math.round(bh * bdpr); bx.setTransform(bdpr, 0, 0, bdpr, 0, 0); }
// layout from the precomputed spectral embedding; each axis is rank-normalised so the cloud fills the panel evenly
const px = new Float32Array(NN), py = new Float32Array(NN), pz = new Float32Array(NN);
{
  const ax = [px, py, pz];
  for (let a = 0; a < 3; a++) {
    const idx = Array.from({ length: NN }, (_, i) => i).sort((i, j) => DATA.nodes.xyz[i][a] - DATA.nodes.xyz[j][a]);
    idx.forEach((i, r) => { ax[a][i] = ((r + 0.5) / NN * 2 - 1) * 0.85 + 0.15 * clamp(DATA.nodes.xyz[i][a], -1.5, 1.5) / 1.5; });
  }
}
const RC = { sugar: '255,178,62', bitter: '139,212,74', water: '76,195,255', jon: '196,123,255', mn9_L: '255,122,69', mn9_R: '255,122,69', aBN1: '255,95,162', dn1_1: '255,77,77', dn2_l: '255,77,77', '': '127,180,255' };
const NLAB = {}, NOFF = {}; DATA.nodes.role.forEach((r, i) => { if (r === 'mn9_L') { NLAB[i] = 'MN9'; NOFF[i] = [6, -5]; } if (r === 'aBN1') { NLAB[i] = 'aBN1'; NOFF[i] = [6, -5]; } if (r === 'dn1_1') { NLAB[i] = 'DN1'; NOFF[i] = [-26, -9]; } if (r === 'dn2_l') { NLAB[i] = 'DN2'; NOFF[i] = [7, 8]; } });
const isIO = DATA.nodes.role.map(r => r !== '');
const EI = Int16Array.from(DATA.edges.map(e => e[0])), EJ = Int16Array.from(DATA.edges.map(e => e[1])), ES = Int8Array.from(DATA.edges.map(e => e[2]));
const nodeCur = new Float32Array(NN), nodeTgt = new Float32Array(NN), X = new Float32Array(NN), Y = new Float32Array(NN), Zd = new Float32Array(NN);
function drawBrain(dt) {
  nodeTarget(inp, nodeTgt);
  const k = 1 - Math.exp(-dt / 0.12); for (let i = 0; i < NN; i++) nodeCur[i] += (nodeTgt[i] - nodeCur[i]) * k;
  // the output neurons are shown with the (more exact) pair/single values
  const outs = { mn9_L: O.mn9_L, mn9_R: O.mn9_R, aBN1: O.aBN1, dn1_1: O.dn1_1, dn2_l: O.dn2_l };
  DATA.nodes.role.forEach((r, i) => { if (outs[r] !== undefined) nodeCur[i] = outs[r]; });
  bx.clearRect(0, 0, bw, bh);
  const th = T.time * 0.18, ct = Math.cos(th), st = Math.sin(th), tl = 0.4, cT = Math.cos(tl), sT = Math.sin(tl);
  const sc = Math.min(bw * 0.5, bh * 0.52), cx = bw / 2, cy = bh / 2;
  for (let i = 0; i < NN; i++) { const x = px[i] * ct + pz[i] * st, z = -px[i] * st + pz[i] * ct, y = py[i] * cT - z * sT, z2 = py[i] * sT + z * cT, pr = 1 / (1 - z2 * 0.3); X[i] = cx + x * sc * pr; Y[i] = cy + y * sc * pr; Zd[i] = z2; }
  bx.lineWidth = 0.6;
  bx.strokeStyle = 'rgba(110,190,255,.09)'; bx.beginPath(); for (let e = 0; e < EI.length; e++) if (ES[e] > 0) { bx.moveTo(X[EI[e]], Y[EI[e]]); bx.lineTo(X[EJ[e]], Y[EJ[e]]); } bx.stroke();
  bx.strokeStyle = 'rgba(255,110,110,.09)'; bx.beginPath(); for (let e = 0; e < EI.length; e++) if (ES[e] < 0) { bx.moveTo(X[EI[e]], Y[EI[e]]); bx.lineTo(X[EJ[e]], Y[EJ[e]]); } bx.stroke();
  // active edges in three brightness bins
  for (let bin = 0; bin < 3; bin++) {
    const lo = [8, 30, 70][bin], hi = [30, 70, 1e9][bin], a = [0.25, 0.5, 0.85][bin];
    bx.lineWidth = [0.7, 1, 1.4][bin];
    for (const sg of [1, -1]) {
      bx.strokeStyle = sg > 0 ? `rgba(120,215,255,${a})` : `rgba(255,120,120,${a})`; bx.beginPath(); let any = false;
      for (let e = 0; e < EI.length; e++) { if (ES[e] !== sg) continue; const r = nodeCur[EI[e]]; if (r >= lo && r < hi) { bx.moveTo(X[EI[e]], Y[EI[e]]); bx.lineTo(X[EJ[e]], Y[EJ[e]]); any = true; } }
      if (any) bx.stroke();
    }
  }
  // nodes
  bx.fillStyle = 'rgba(140,165,205,.55)'; bx.beginPath();
  for (let i = 0; i < NN; i++) { if (nodeCur[i] < 1.5 && !isIO[i]) { const r = 1.3 + 0.4 * Zd[i]; bx.moveTo(X[i] + r, Y[i]); bx.arc(X[i], Y[i], r, 0, 6.3); } }
  bx.fill();
  for (let i = 0; i < NN; i++) {
    const rt = nodeCur[i], role = DATA.nodes.role[i]; if (rt < 1.5 && !isIO[i]) continue;
    const lvl = clamp(Math.sqrt(rt / 110), 0, 1), col = RC[role] || RC[''];
    const rad = (isIO[i] ? 2.6 : 1.7) + 3.2 * lvl + 0.5 * Zd[i];
    if (lvl > 0.15) { bx.fillStyle = `rgba(${col},${0.22 * lvl})`; bx.beginPath(); bx.arc(X[i], Y[i], rad * 2.4, 0, 6.3); bx.fill(); }
    bx.fillStyle = `rgba(${col},${isIO[i] ? 0.45 + 0.55 * lvl : 0.3 + 0.7 * lvl})`; bx.beginPath(); bx.arc(X[i], Y[i], rad, 0, 6.3); bx.fill();
  }
  bx.font = '10px sans-serif'; bx.textBaseline = 'middle';
  for (const i in NLAB) { const lvl = clamp(Math.sqrt(nodeCur[i] / 110), 0, 1); bx.fillStyle = `rgba(255,255,255,${0.5 + 0.5 * lvl})`; bx.fillText(NLAB[i], X[i] + NOFF[i][0], Y[i] + NOFF[i][1]); }
}

function setMeter(id, val, max, txt) { $('i_' + id).style.width = (100 * clamp(val / max, 0, 1)).toFixed(1) + '%'; $('v_' + id).textContent = txt !== undefined ? txt : Math.round(val); }
function updateUI() {
  setMeter('sugar', inp.sugar, 200); setMeter('bitter', inp.bitter, 200); setMeter('water', inp.water, 200); setMeter('jon', inp.jon, 200);
  setMeter('mn9', (O.mn9_L + O.mn9_R) / 2, 100); setMeter('abn', O.aBN1, 60); setMeter('dn', Math.max(O.dn1_1, O.dn2_l), 30);
  $('nact').textContent = 'активно ' + Math.round(O.nact / 5) * 5 + ' из 127 400';
  let txt = chipText[F.state] || '';
  if (F.state === 'eat') { txt = inp.sugar >= inp.water && inp.sugar >= inp.bitter ? 'ест сахар' : inp.water > inp.bitter ? 'пьёт воду' : 'пробует'; }
  if (F.state === 'odor') txt = 'идёт на запах ' + (F.goOd ? ODORS[F.goOd].name : '');
  if (F.state === 'sniff') txt = 'нюхает запах ' + (F.sniffOd ? ODORS[F.sniffOd].name : '');
  $('chip').textContent = txt;
  $('dPam').classList.toggle('on', MB.pam > 0); $('dPpl').classList.toggle('on', MB.ppl > 0);
  if (T.tool === 'teach') {
    $('pref').textContent = 'нравится: А ' + Math.round(100 * sig(mbz('A'))) + '% · Б ' + Math.round(100 * sig(mbz('B'))) + '% | заходы: А ' + visits.A + ' · Б ' + visits.B;
  }
}

/* ====================== main loop ====================== */
let last = performance.now(), frameN = 0;
function onResize() { if (renderer) resize(); sizeBrain(); }
window.addEventListener('resize', onResize);
if (window.ResizeObserver) new ResizeObserver(onResize).observe($('stage'));
function frame(now) {
  const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000)); last = now; frameN++;
  update(dt); poseFly(dt); fxUpdate(dt); updateCamera(dt, false);
  if (renderer) renderer.render(scene, camera);
  if (frameN % 2 === 0) drawBrain(dt * 2);
  if (frameN % 4 === 0) updateUI();
  requestAnimationFrame(frame);
}
setTool('sugar');
onResize(); updateCamera(1, true);
requestAnimationFrame(frame);
setTimeout(() => toast('Выбери инструмент внизу и тапни по столу', 3.5), 600);

/* test / debug hook */
window.__fly = {
  F, O, inp, A, MB, puddles, visits, api, T,
  advance(sec) { const n = Math.round(sec * 60); for (let i = 0; i < n; i++) { update(1 / 60); } poseFly(1 / 60); },
  snap() { return { state: F.state, x: +F.x.toFixed(2), z: +F.z.toFixed(2), y: +F.y.toFixed(2), mn9: +((O.mn9_L + O.mn9_R) / 2).toFixed(1), abn: +O.aBN1.toFixed(1), dn: +Math.max(O.dn1_1, O.dn2_l).toFixed(1), nact: Math.round(O.nact), inp: Object.assign({}, inp), p: +A.p.toFixed(2), g: +A.g.toFixed(2), puddles: puddles.map(p => [+p.x.toFixed(2), +p.z.toFixed(2), +p.vol.toFixed(2), p.avoid]) }; },
  brainTarget, mbz,
};
})();

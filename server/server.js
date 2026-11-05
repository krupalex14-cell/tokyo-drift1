#!/usr/bin/env node
// Tokyo Drift — local multiplayer server (no dependencies).
// Serves the game over HTTP and relays player messages over WebSocket.
// The native app plugin (Android / iOS) implements exactly the same protocol:
//   GET /          -> the game (index.html)
//   GET /info      -> {"ips":[...],"port":8080,"players":N}
//   WS  /ws        -> relay. Server -> client: welcome{id,host,peers}, join{id}, leave{id}, host{}, full{}, pong{ts}
//                     client -> server: any JSON object; the server adds "f" (sender id) and forwards it
//                     to everyone else (or only to "to" when present). {"t":"png","ts":..} is answered with pong.
// Usage: node server.js [path/to/game.html] [port]
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os'), crypto = require('crypto');
const FILE = path.resolve(process.argv[2] || path.join(__dirname, 'index.html'));
const PORT = +(process.argv[3] || process.env.PORT || 8080);
const MAXP = 4;

function lanIps() {
  const out = [];
  for (const [name, list] of Object.entries(os.networkInterfaces()))
    for (const a of list || []) if (a.family === 'IPv4' && !a.internal) out.push(a.address);
  // private ranges first (hotspot / Wi-Fi), the rest after
  const pri = ip => /^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) ? 0 : 1;
  return out.sort((a, b) => pri(a) - pri(b));
}

let nextId = 1;
const clients = new Map(); // id -> {sock, buf, host}

function frame(str) {
  const p = Buffer.from(str, 'utf8'), n = p.length;
  let h;
  if (n < 126) { h = Buffer.alloc(2); h[1] = n; }
  else if (n < 65536) { h = Buffer.alloc(4); h[1] = 126; h.writeUInt16BE(n, 2); }
  else { h = Buffer.alloc(10); h[1] = 127; h.writeBigUInt64BE(BigInt(n), 2); }
  h[0] = 0x81;
  return Buffer.concat([h, p]);
}
function sendTo(c, obj) { try { c.sock.write(frame(JSON.stringify(obj))); } catch (e) {} }
function broadcast(obj, exceptId) { const s = frame(JSON.stringify(obj)); for (const [id, c] of clients) if (id !== exceptId) try { c.sock.write(s); } catch (e) {} }

function drop(id) {
  const c = clients.get(id); if (!c) return;
  clients.delete(id);
  try { c.sock.destroy(); } catch (e) {}
  broadcast({ t: 'leave', id });
  if (c.host && clients.size) { const [nid, nc] = clients.entries().next().value; nc.host = true; sendTo(nc, { t: 'host' }); }
  log(`player ${id} left (${clients.size} online)`);
}

function onMessage(id, text) {
  let m; try { m = JSON.parse(text); } catch (e) { return; }
  if (!m || typeof m !== 'object') return;
  const c = clients.get(id); if (!c) return;
  if (m.t === 'png') { sendTo(c, { t: 'pong', ts: m.ts }); return; }
  m.f = id;
  if (m.to) { const d = clients.get(m.to); if (d) sendTo(d, m); return; }
  broadcast(m, id);
}

function parseFrames(id) {
  const c = clients.get(id); if (!c) return;
  for (;;) {
    const b = c.buf; if (b.length < 2) return;
    const op = b[0] & 15, masked = (b[1] & 128) !== 0; let len = b[1] & 127, off = 2;
    if (len === 126) { if (b.length < 4) return; len = b.readUInt16BE(2); off = 4; }
    else if (len === 127) { if (b.length < 10) return; len = Number(b.readBigUInt64BE(2)); off = 10; }
    if (len > 1 << 20) { drop(id); return; }
    const mo = off; if (masked) off += 4;
    if (b.length < off + len) return;
    const p = Buffer.from(b.subarray(off, off + len));
    if (masked) for (let i = 0; i < len; i++) p[i] ^= b[mo + (i & 3)];
    c.buf = b.subarray(off + len);
    if (op === 1) onMessage(id, p.toString('utf8'));
    else if (op === 8) { drop(id); return; }
    else if (op === 9) { const h = Buffer.from([0x8A, p.length]); try { c.sock.write(Buffer.concat([h, p])); } catch (e) {} }
  }
}

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ ips: lanIps(), port: PORT, players: clients.size })); return;
  }
  if (url === '/' || url === '/index.html') {
    fs.readFile(FILE, (err, data) => {
      if (err) { res.writeHead(500); res.end('game file not found: ' + FILE); return; }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(data);
    }); return;
  }
  res.writeHead(404); res.end('not found');
});

server.on('upgrade', (req, sock) => {
  const key = req.headers['sec-websocket-key'];
  if (req.url.split('?')[0] !== '/ws' || !key) { sock.destroy(); return; }
  const acc = crypto.createHash('sha1').update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
  sock.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + acc + '\r\n\r\n');
  sock.setNoDelay(true);
  if (clients.size >= MAXP) { sock.write(frame(JSON.stringify({ t: 'full' }))); sock.end(); return; }
  const id = nextId++, host = clients.size === 0;
  const peers = [...clients.keys()];
  clients.set(id, { sock, buf: Buffer.alloc(0), host });
  sendTo(clients.get(id), { t: 'welcome', id, host, peers });
  broadcast({ t: 'join', id }, id);
  log(`player ${id} joined${host ? ' (host)' : ''} (${clients.size} online)`);
  sock.on('data', d => { const c = clients.get(id); if (!c) return; c.buf = Buffer.concat([c.buf, d]); parseFrames(id); });
  sock.on('close', () => drop(id));
  sock.on('error', () => drop(id));
});

function log(s) { if (!process.env.QUIET) console.log(new Date().toTimeString().slice(0, 8), s); }

// terminal QR so phones can just scan the screen
function printQr(text) {
  try {
    const src = fs.readFileSync(path.join(__dirname, 'qr.js'), 'utf8');
    const f = new Function(src + ';return qrMake;')(); const M = f(text); if (!M) return;
    const n = M.length, Q = 2, W = '█', rows = [];
    const at = (x, y) => x >= 0 && y >= 0 && x < n && y < n && M[y][x];
    for (let y = -Q; y < n + Q; y += 2) {
      let s = '';
      for (let x = -Q; x < n + Q; x++) { const a = !at(x, y), b = !at(x, y + 1); s += a && b ? W : a ? '▀' : b ? '▄' : ' '; }
      rows.push('  ' + s);
    }
    console.log(rows.join('\n'));
  } catch (e) {}
}

server.listen(PORT, '0.0.0.0', () => {
  const ips = lanIps();
  console.log(`\nТокио Дрифт / Tokyo Drift — сервер запущен, порт ${PORT}`);
  if (!ips.length) console.log('Не найдено сетевых адресов. Подключите компьютер к Wi-Fi или точке доступа.');
  ips.forEach(ip => console.log(`  http://${ip}:${PORT}/?join=1`));
  if (ips.length) { console.log('\nОтсканируйте камерой телефона / scan with your phone camera:\n'); printQr(`http://${ips[0]}:${PORT}/?join=1`); }
  console.log('');
});

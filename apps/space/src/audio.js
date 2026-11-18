'use strict';
// ============ Звук (WebAudio) и вибрация. В вакууме звук глохнет: слышна только дрожь корпуса. ============
const Sfx = {
  ctx: null, master: null, on: true, vib: true, noiseBuf: null, eng: null, wind: null, ready: false,
  init() {
    this.on = Store.get('snd', true); this.vib = Store.get('vib', true);
    const arm = () => { this.unlock(); removeEventListener('pointerdown', arm); removeEventListener('keydown', arm); };
    addEventListener('pointerdown', arm); addEventListener('keydown', arm);
  },
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      this.ctx = new AC(); this.master = this.ctx.createGain(); this.master.gain.value = this.on ? 0.8 : 0; this.master.connect(this.ctx.destination);
      const n = this.ctx.sampleRate * 2, b = this.ctx.createBuffer(1, n, this.ctx.sampleRate), d = b.getChannelData(0);
      let last = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; last = (last + 0.04 * w) / 1.04; d[i] = w * 0.5 + last * 3.0; }
      this.noiseBuf = b;
      // двигатель
      const src = this.ctx.createBufferSource(); src.buffer = b; src.loop = true;
      const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300; lp.Q.value = 0.7;
      const g = this.ctx.createGain(); g.gain.value = 0; src.connect(lp); lp.connect(g); g.connect(this.master); src.start();
      const sub = this.ctx.createOscillator(); sub.type = 'sawtooth'; sub.frequency.value = 52; const sg = this.ctx.createGain(); sg.gain.value = 0; sub.connect(sg); sg.connect(lp); sub.start();
      this.eng = { lp, g, sub, sg };
      // ветер/обтекание
      const s2 = this.ctx.createBufferSource(); s2.buffer = b; s2.loop = true; const hp = this.ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 900; hp.Q.value = 0.5;
      const g2 = this.ctx.createGain(); g2.gain.value = 0; s2.connect(hp); hp.connect(g2); g2.connect(this.master); s2.start(); this.wind = { hp, g: g2 };
      this.ready = true;
    } catch (e) { this.ready = false; }
  },
  setOn(v) { this.on = v; Store.set('snd', v); if (this.master) this.master.gain.setTargetAtTime(v ? 0.8 : 0, this.ctx.currentTime, 0.05); },
  setVib(v) { this.vib = v; Store.set('vib', v); },
  vibrate(ms) { if (this.vib && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) { } },
  // непрерывные звуки: вызывается каждый кадр
  update(thr, rho, q, active) {
    if (!this.ready) return; const t = this.ctx.currentTime;
    const atm = clamp(rho / 1.2, 0, 1), air = 0.12 + 0.88 * Math.pow(atm, 0.35);   // в вакууме — только глухая дрожь
    const gain = active ? thr * (0.5 * air + 0.04) : 0;
    this.eng.g.gain.setTargetAtTime(gain, t, 0.08); this.eng.sg.gain.setTargetAtTime(gain * 0.9, t, 0.08);
    this.eng.lp.frequency.setTargetAtTime(120 + 700 * air * (0.4 + 0.6 * thr), t, 0.1);
    this.eng.sub.frequency.setTargetAtTime(38 + 26 * thr, t, 0.1);
    this.wind.g.gain.setTargetAtTime(active ? clamp(Math.sqrt(q) / 350, 0, 0.35) * atm : 0, t, 0.15);
    this.wind.hp.frequency.setTargetAtTime(500 + q * 0.05, t, 0.2);
    if (thr > 0.05 && this.vib && (this._vt = (this._vt || 0) + 1) % 22 === 0) this.vibrate(Math.round(8 + 18 * thr));
  },
  blip(f, d, type, vol, slide) {
    if (!this.ready || !this.on) return; const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(), g = c.createGain(); o.type = type || 'square'; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f * slide), t + d);
    g.gain.setValueAtTime(vol || 0.1, t); g.gain.exponentialRampToValueAtTime(0.0008, t + d); o.connect(g); g.connect(this.master); o.start(t); o.stop(t + d + 0.02);
  },
  noise(d, f0, f1, vol, type) {
    if (!this.ready || !this.on) return; const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf; const lp = c.createBiquadFilter(); lp.type = type || 'lowpass'; lp.frequency.setValueAtTime(f0, t); lp.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + d);
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0008, t + d); s.connect(lp); lp.connect(g); g.connect(this.master); s.start(t, Math.random()); s.stop(t + d + 0.05);
  },
  click() { this.blip(880, 0.05, 'square', 0.05); },
  tick() { this.blip(520, 0.04, 'square', 0.035); },
  ok() { this.blip(660, 0.09, 'square', 0.07); setTimeout(() => this.blip(990, 0.14, 'square', 0.07), 90); },
  bad() { this.blip(220, 0.25, 'sawtooth', 0.09, 0.5); },
  alarm() { this.blip(740, 0.12, 'square', 0.07); setTimeout(() => this.blip(520, 0.14, 'square', 0.07), 130); },
  clunk() { this.blip(140, 0.12, 'square', 0.12, 0.4); this.noise(0.12, 2500, 300, 0.12, 'bandpass'); this.vibrate(25); },
  ignite(rho) { const a = clamp(rho / 1, 0.15, 1); this.noise(0.5, 1800 * a + 300, 200, 0.3 * a + 0.05); this.blip(60, 0.4, 'sawtooth', 0.12 * a + 0.03, 0.6); this.vibrate(40); },
  boom(k, rho, dist) {
    const a = clamp(rho / 0.6, 0.12, 1) * (1 / (1 + dist / 3000)), vol = (0.25 + 0.75 * k) * a;
    this.noise(1.2 + 2.2 * k, 900 * a + 200, 40, 0.7 * vol); this.blip(110, 0.9 + k, 'sine', 0.5 * vol, 0.2); this.vibrate(120 + 300 * k);
  },
  thud(k, water, rho) { const a = clamp(rho / 0.5, 0.2, 1); if (water) this.noise(0.5 + k, 2200, 300, 0.25 * (0.3 + k), 'bandpass'); else { this.noise(0.25 + 0.5 * k, 600, 80, 0.4 * (0.2 + k) * a + 0.03); this.blip(70, 0.25, 'sine', 0.25 * (0.2 + k), 0.5); } this.vibrate(20 + 70 * k); },
  chime() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.blip(f, 0.2, 'triangle', 0.09), i * 90)); }
};

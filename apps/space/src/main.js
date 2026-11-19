'use strict';
// ============ Запуск ============
const App = { W: null, mode: 'menu', t: 0, last: 0, raf: 0, cv: null };
window.__App = App;
window.__T = () => ({ Builder, Gfx, PARTS, TEMPLATES, prect, validateDesign, UI });   // для автотестов
window.__B = () => Builder;
function boot() {
  Art.init(); FV.init();
  const cv = $('#cv'); App.cv = cv; Gfx.init(cv);
  const fit = () => { Gfx.resize(innerWidth, innerHeight, Store.get('pix', 170)); };
  fit(); addEventListener('resize', fit); addEventListener('orientationchange', () => setTimeout(fit, 200));
  if (typeof UI !== 'undefined') UI.init();
  App.last = performance.now();
  const loop = (now) => { App.raf = requestAnimationFrame(loop); const dt = Math.min(0.1, (now - App.last) / 1000); App.last = now; App.t += dt; if (typeof UI !== 'undefined') UI.tick(dt); };
  App.raf = requestAnimationFrame(loop);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

// ===== performance helpers: a cached canvas rectangle (no layout every frame) and an FPS counter (Settings → FPS counter) =====
var CVR=null,CVRF=-1;
function cvRect(){if(!CVR||FRAME-CVRF>30||FRAME<CVRF){CVR=cv.getBoundingClientRect();CVRF=FRAME}return CVR}
addEventListener('resize',function(){CVR=null});
// shows the frames actually drawn per second and how long the game itself needs per frame:
// "запас" = how many frames per second the game could make if the screen allowed it
var FPSC={t:0,n:0,w:0,mx:0,el:null};
function fpsEl(){if(FPSC.el)return FPSC.el;var g=$('game');if(!g)return null;var e=document.createElement('div');e.id='fpsc';g.appendChild(e);FPSC.el=e;return e}
var _lpPF=loop;loop=function(t){var t0=performance.now();_lpPF(t);if(!S.fps){if(FPSC.el&&FPSC.el.style.display!=='none')FPSC.el.style.display='none';return}
 var d=performance.now()-t0;FPSC.n++;FPSC.w+=d;if(d>FPSC.mx)FPSC.mx=d;var el=t0-FPSC.t;
 if(el>=500){var e=fpsEl();if(e){var fps=FPSC.n*1000/el,w=FPSC.w/Math.max(1,FPSC.n);e.style.display=mode==='game'?'block':'none';
  e.innerHTML='<b>'+Math.round(fps)+'</b> FPS · '+L('кадр')+' '+w.toFixed(1)+' '+L('мс')+' · '+L('запас')+' '+Math.min(999,Math.round(1000/Math.max(.5,w)))+(FPSC.mx>20?' · <i>'+L('рывок')+' '+Math.round(FPSC.mx)+' '+L('мс')+'</i>':'')}
  FPSC.t=t0;FPSC.n=0;FPSC.w=0;FPSC.mx=0}};
function perfSet(){return'<div class="sl2">'+L('Счётчик FPS')+'</div><div style="font-size:11px;color:var(--muted);margin:-2px 0 8px">'+L('браузер рисует не больше кадров, чем частота экрана (60/144/240 Гц); «запас» — сколько кадров игра успела бы посчитать')+'</div>'+seg('fps',['выкл','вкл'],S.fps?1:0)}
var _saPF=setAction;setAction=function(a,i){if(a==='fps'){S.fps=i?1:0;save();renderSet();return}return _saPF(a,i)};
(function(){var st=document.createElement('style');st.textContent='#fpsc{display:none;position:absolute;left:50%;transform:translateX(-50%);top:calc(4px + env(safe-area-inset-top));z-index:4;font-size:10px;color:#cfe9ff;background:rgba(14,10,26,.72);padding:2px 7px;pointer-events:none;white-space:nowrap}#fpsc b{color:#7dff8c}#fpsc i{color:#ff8a8a;font-style:normal}';document.head.appendChild(st)})();
(function(){function I(d,o){for(var k in o)if(!(k in d))d[k]=o[k]}
 I(EN,{'Счётчик FPS':'FPS counter','кадр':'frame','мс':'ms','запас':'headroom','рывок':'hitch','браузер рисует не больше кадров, чем частота экрана (60/144/240 Гц); «запас» — сколько кадров игра успела бы посчитать':'a browser never draws more frames than the screen refresh rate (60/144/240 Hz); “headroom” is how many frames the game could compute'});
 I(ZH,{'Счётчик FPS':'FPS 计数器','кадр':'每帧','мс':'毫秒','запас':'余量','рывок':'卡顿','браузер рисует не больше кадров, чем частота экрана (60/144/240 Гц); «запас» — сколько кадров игра успела бы посчитать':'浏览器绘制的帧数不会超过屏幕刷新率（60/144/240 Hz）；“余量”是游戏能算出的帧数'})})();

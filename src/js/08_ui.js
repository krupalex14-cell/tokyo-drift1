// ===== UI, SAVE, EDITOR, AUDIO, BOOT =====
var BODYC=['#f4f4f4','#ff4d6d','#35c4ff','#ffd23f','#7bd957','#a66bff','#23252f','#ff8a3d'],STRC=['#ff8fb8','#1b1b2f','#ffffff','#ff7a00','#00e5ff','#ffd23f'],GLOWC=[null,'#ff2e93','#00e5ff','#b6ff3b','#ffb400','#a855ff'];
var UP=[300,800,1600],PN=['Двигатель','Шины','Подвеска'],PD=['мощность и скорость','держат лучше','руль острее'];
var S={coins:0,car:0,own:[1,0,0],parts:[[0,0,0],[0,0,0],[0,0,0]],col:0,str:0,glow:0,zoom:1,ag:0,snd:1,ctl:0,sll:0,best:{},tut:0,sens:100,stp:100,lh:0,bsz:1,vib:1,cam:0,clag:30,tod:0};
var SL={on:false,v:0,vy:0,id:null,x0:0,y0:0,R:120};
var GEAR='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10.3 2h3.4l.5 2.6c.7.2 1.3.5 1.9.9l2.2-1.5 2.4 2.4-1.5 2.2c.4.6.7 1.2.9 1.9l2.6.5v3.4l-2.6.5c-.2.7-.5 1.3-.9 1.9l1.5 2.2-2.4 2.4-2.2-1.5c-.6.4-1.2.7-1.9.9l-.5 2.6h-3.4l-.5-2.6c-.7-.2-1.3-.5-1.9-.9l-2.2 1.5-2.4-2.4 1.5-2.2c-.4-.6-.7-1.2-.9-1.9L2 13.7v-3.4l2.6-.5c.2-.7.5-1.3.9-1.9L4 5.7l2.4-2.4 2.2 1.5c.6-.4 1.2-.7 1.9-.9zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/></svg>',CTLI=['<svg viewBox="0 0 58 32" aria-hidden="true"><rect x="4" y="11" width="50" height="10" rx="5" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".6"/><circle cx="38" cy="16" r="8" fill="currentColor"/></svg>','<svg viewBox="0 0 58 32" aria-hidden="true"><rect x="5" y="5" width="22" height="22" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="31" y="5" width="22" height="22" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M19 10l-7 6 7 6zM39 10l7 6-7 6z" fill="currentColor"/></svg>','<svg viewBox="0 0 58 32" aria-hidden="true"><circle cx="29" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="2.5" opacity=".6"/><circle cx="34" cy="11" r="7" fill="currentColor"/><path d="M29 0l3 3h-6zM29 32l3-3h-6z" fill="currentColor" opacity=".7"/></svg>','<svg viewBox="0 0 58 32" aria-hidden="true"><g transform="rotate(-18 29 16)"><rect x="20" y="2" width="18" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="26" y="25" width="6" height="2" fill="currentColor"/></g><path d="M8 20q-4-8 3-14M50 12q4 8-3 14" fill="none" stroke="currentColor" stroke-width="2.2" opacity=".7"/><path d="M8 3l4 4-5 1zM50 29l-4-4 5-1z" fill="currentColor" opacity=".7"/></svg>'];
var CTLN=[['Слайдер','веди пальцем по экрану'],['Кнопки','◀ ▶ и педали'],['Стик','руль, газ и тормоз одним пальцем'],['Наклон','поворачивай телефон']];
var TUTS=['Веди пальцем влево-вправо по экрану — это руль. Зажми ручник: без руля машина едет ровно, повернёшь — сразу занос. Розовые флажки — заезды на очки.','◀ ▶ — руль. Зажми ручник: без руля машина едет ровно, повернёшь — сразу занос. Розовые флажки — заезды на очки.','Стик под пальцем: влево-вправо — руль, вверх — газ, вниз — тормоз. Ручник справа. Розовые флажки — заезды на очки.','Наклоняй телефон — это руль. Коснись экрана, чтобы обнулить наклон. Зажми ручник для заноса.'];
try{var _sv=JSON.parse(localStorage.getItem('tokyo_drift'));if(_sv)for(var _k in _sv)S[_k]=_sv[_k]}catch(e){}
if(!(S.sens>=50))S.sens=100;if(!(S.stp>=80))S.stp=100;if(S.bsz==null)S.bsz=1;if(S.vib==null)S.vib=1;S.ctl=S.ctl|0;if(S.lang!=='en'&&S.lang!=='ru'&&S.lang!=='zh')S.lang=/^ru|^uk|^be|^kk/i.test(navigator.language||'')?'ru':/^zh/i.test(navigator.language||'')?'zh':'en';
if((S.eco|0)<2){if(S.best)['r0','r1','r2'].forEach(function(k){delete S.best[k]});S.eco=2}
(function(){while(S.own.length<CARS.length)S.own.push(0);while(S.parts.length<CARS.length)S.parts.push([0,0,0]);if(S.car>=CARS.length)S.car=0})();
function save(){try{localStorage.setItem('tokyo_drift',JSON.stringify(S))}catch(e){}}
var ED={o:[],b:[],rm:[],sp:null};
try{var _e=JSON.parse(localStorage.getItem('tokyo_ed'));if(_e&&_e.o)ED=_e;if(!ED.rm)ED.rm=[]}catch(e){}
function saveEd(){try{localStorage.setItem('tokyo_ed',JSON.stringify(ED))}catch(e){}}
// ---- garage
function renderGar(){
 var q='<div class="top"><div class="tg"><button class="gear" data-a="menu" aria-label="'+L('В меню')+'"><svg viewBox="0 0 9 9" shape-rendering="crispEdges" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M3 4h1V3h1V2h1V1h1v7H6V7H5V6H4V5H3z"/></svg></button><h2 class="gt">'+L('Гараж')+'</h2></div><div class="tg"><div class="coins">'+Math.floor(S.coins)+' ¥</div><button class="gear" data-a="set" aria-label="'+L('Настройки')+'">'+GEAR+'</button></div></div><canvas id="pv" width="200" height="84"></canvas>';
 q+='<div class="sec">'+L('Машина')+'</div><div class="grid3">';
 if(GV==null||GV>=CARS.length)GV=S.car;var lk=garLocked();
 CARS.forEach(function(c,i){q+='<button class="card'+(GV===i?' on':'')+(S.car===i?' cur':'')+'" data-a="car" data-i="'+i+'">'+L(c.n)+'<small>'+(S.own[i]?L(S.car===i?'выбрана':'в гараже'):fmtN(c.price)+' ¥')+'</small></button>'});
 var V=CARS[GV];function bar(n,v){return'<div class="cst"><span>'+L(n)+'</span><i><u style="width:'+Math.round(clamp(v,.06,1)*100)+'%"></u></i></div>'}
 q+='</div><div class="cinfo"><b>'+L(V.n)+'</b><div class="desc">'+L(V.desc)+'</div>'+bar('Скорость',(V.vmax-280)/240)+bar('Мощность',(V.pw-180)/270)+bar('Сцепление',(V.grip-.85)/.42)+bar('Руль',((V.turn+V.dturn)/2-2.35)/.95)+'<div class="cbt">'+
  (S.own[GV]?(S.car===GV?'<span class="cok">'+L('на ходу')+'</span>':'<button class="buy'+(lk?' lk':'')+'" data-a="sel" data-i="'+GV+'">'+L('Сесть за руль')+'</button>'):
   '<button class="buy'+(lk?' lk':'')+(BUYC===GV?' sure':'')+'" data-a="buy" data-i="'+GV+'">'+(BUYC===GV?L('Точно купить?')+' '+fmtN(V.price)+' ¥':L('Купить')+' · '+fmtN(V.price)+' ¥')+'</button><button class="buy td" data-a="td" data-i="'+GV+'">'+L('Тест-драйв')+'</button>')+'</div></div>';
 q+=(lk?'<div class="lkn">'+L('Машины, тюнинг и покраска — в мастерской Миши. Заезжай в её ворота в городе.')+'<button class="buy" data-a="togar">'+L('Маршрут в мастерскую')+'</button></div>':'')+'<div class="sec">'+L('Запчасти')+'</div>';
 var u=S.parts[S.car];PN.forEach(function(n,k){var l=u[k],p='';for(var j=0;j<3;j++)p+='<i'+(j<l?' class="f"':'')+'></i>';q+='<div class="part"><div>'+L(n)+'<small> — '+L(PD[k])+'</small><div class="pips">'+p+'</div></div>'+(l<3?'<button class="buy'+(garLocked()?' lk':'')+'" data-a="up" data-i="'+k+'">'+UP[l]+' ¥</button>':'<span class="mx">'+L('макс.')+'</span>')+'</div>'});
 q+='<div class="sec">'+L('Кузов')+'</div><div class="sw">'+BODYC.map(function(c,i){return'<button style="background:'+c+'" class="'+(S.col===i?'on':'')+'" data-a="col" data-i="'+i+'" aria-label="'+L('Цвет')+' '+(i+1)+'"></button>'}).join('')+'</div>';
 q+='<div class="sec">'+L('Полосы')+'</div><div class="sw">'+STRC.map(function(c,i){return'<button style="background:'+c+'" class="'+(S.str===i?'on':'')+'" data-a="str" data-i="'+i+'" aria-label="'+L('Полосы')+' '+(i+1)+'"></button>'}).join('')+'</div>';
 q+='<div class="sec">'+L('Неоновая подсветка')+'</div><div class="sw">'+GLOWC.map(function(c,i){return'<button style="background:'+(c||'#2a2040')+'" class="'+(S.glow===i?'on':'')+'" data-a="glow" data-i="'+i+'" aria-label="'+L('Подсветка')+' '+i+'">'+(c?'':'✕')+'</button>'}).join('')+'</div>';
 q+='<button class="go" data-a="go">'+L('В город')+'</button>';
 q+='<div class="sec">'+L('Дрифт-зоны')+'</div><div class="zl">'+ZONES.map(function(z){var b=S.best[z.id]||0,st=0;z.tg.forEach(function(t){if(b>=t)st++});return'<div><span>'+L(z.name)+'</span><b>'+'★'.repeat(st)+'<em>'+'★'.repeat(3-st)+'</em> '+b+'</b></div>'}).join('')+'</div><p class="hint">'+L('Заезды отмечены розовыми флажками на карте. Подъедь к флажку — справа сверху появится окно «Принять». Трассы проезжаешь от старта до финиша, в зонах дрифтишь 45 секунд.')+'</p>';
 $('gar').innerHTML=q;
}
var pvT=0;
function pvLoop(t){if(mode===''){var c=$('pv');if(c){var x=c.getContext('2d');x.imageSmoothingEnabled=false;x.fillStyle='#2f5a96';x.fillRect(0,0,200,84);x.fillStyle='#3a68aa';for(var i=0;i<12;i++)x.fillRect(((i*41+Math.floor(t/30))%240)-20,8+i*6,18,1);x.fillStyle='#d6e2fa';x.fillRect(0,40,200,1);var sp=pvSpr();x.save();x.translate(100,42);x.rotate(Math.sin(t/1400)*.5-.15);x.scale(2,2);x.fillStyle='rgba(12,8,40,.4)';x.fillRect(-sp.width/2+2,-sp.height/2+2,sp.width,sp.height);if(S.glow){var gc=hex3(GLOWC[S.glow]),pu=.8+.2*Math.sin(t/240);x.globalCompositeOperation='lighter';x.imageSmoothingEnabled=true;x.globalAlpha=.6*pu;x.drawImage(glw(gc),-sp.width/2-16,-sp.height/2-13,sp.width+32,sp.height+26);x.globalAlpha=pu;x.drawImage(glw(gc),-sp.width/2-6,-sp.height/2-5,sp.width+12,sp.height+10);x.globalAlpha=1;x.globalCompositeOperation='source-over';x.imageSmoothingEnabled=false}x.drawImage(sp,-sp.width/2,-sp.height/2);x.restore()}}requestAnimationFrame(pvLoop)}
var _pvk='',_pvs=null;function pvSpr(){var ci=mode===''&&GV!=null&&GV<CARS.length?GV:S.car,k=ci+'_'+S.col+'_'+S.str;if(k!==_pvk){_pvk=k;_pvs=playerSprite(ci,BODYC[S.col],STRC[S.str])}return _pvs}
var GV=null,BUYC=-1;
function garLocked(){return false}
function garAction(a,i){
 if(garLocked()&&(a==='buy'||a==='sel'||a==='up'||a==='col'||a==='str'||a==='glow')){toast(L('Это делается в мастерской Миши'));return}
 if(a==='car'){GV=i;BUYC=-1;if(S.own[i]&&!garLocked())S.car=i}
 else if(a==='sel'){if(S.own[i])S.car=i}
 else if(a==='buy'){if(S.own[i])return;if(BUYC!==i){BUYC=i;renderGar();return}BUYC=-1;if(S.coins>=CARS[i].price){S.coins-=CARS[i].price;S.own[i]=1;S.car=i;toast(L('Машина твоя!'))}else{toast(L('Нужно')+' '+fmtN(CARS[i].price)+' ¥')}}
 else if(a==='td'){tdStart(i);return}
 else if(a==='togar'){togarage();return}
 else if(a==='up'){var l=S.parts[S.car][i];if(l<3&&S.coins>=UP[l]){S.coins-=UP[l];S.parts[S.car][i]++}else if(l<3)toast(L('Нужно')+' '+UP[l]+' ¥')}
 else if(a==='col')S.col=i;else if(a==='str')S.str=i;else if(a==='glow')S.glow=i;
 else if(a==='set'){openSet();return}
 else if(a==='menu'){save();menuOpen();return}
 else if(a==='go'){save();if((S.ctl|0)===3){tiltEnable(function(ok){if(!ok){S.ctl=0;save();toast('Нет доступа к датчику наклона — включил слайдер')}startGame(true)});return}startGame(true);return}else if(a==='edit'){openEd();return}
 save();renderGar();
}
function toast(m){var t=$('toast');t.textContent=L(m);t.style.display='block';clearTimeout(t._t);t._t=setTimeout(function(){t.style.display='none'},1600)}
function home(){if(mode==='game'){bank()}zoneCancel();TILT.on=false;mode='';auStop();save();$('game').style.display='none';$('gar').style.display='block';renderGar();window.scrollTo(0,0)}
// ---- editor
var ETOOLS=[['pan','двигать'],['cone','конус'],['tire','шины'],['barr','барьер'],['block','блок'],['tree','дерево'],['car','машина'],['asph','асфальт'],['grass','газон'],['water','вода'],['erase','ластик'],['start','старт']],etool='pan',eang=0,eDrag={d:0,x:0,y:0,lx:-999,ly:-999};
var ETYPE={cone:P_CONE,tire:P_TIRE,barr:P_BARR,block:P_BLOCK,tree:P_TREE,car:P_CAR},EBR={asph:0,grass:2,water:4};
function edApply(){
 ED.rm.forEach(function(i){var p=PR[i];if(p){p.hid=1;PH.rm(p)}});
 ED.o.forEach(function(o){edAddObj(o)});
 ED.b.forEach(function(b){EDITB.push(b);edHideUnder(b)});
}
function edAddObj(o){var p={t:o.t,x:o.x,y:o.y,a:o.a||0,ed:1};if(o.t===P_CAR){p.vt=1;p.c=o.c||0;p.hx=VTY[1].hx;p.hy=VTY[1].hy}if(o.t===P_CONE){p.cx=o.x;p.cy=o.y;p.ca=0}o._p=addP(p);brkIdx(o._p);return o._p}
function edHideUnder(b){BH.q(b.x-b.r,b.y-b.r,b.x+b.r,b.y+b.r,function(B){var dx=Math.max(0,Math.abs(wd(B.x+B.w/2,b.x))-B.w/2),dy=Math.max(0,Math.abs(wd(B.y+B.h/2,b.y))-B.h/2);if(dx*dx+dy*dy<b.r*b.r)B.hid=1});PH.q(b.x-b.r,b.y-b.r,b.x+b.r,b.y+b.r,function(p){if(p.ed)return;if(Math.hypot(wd(p.x,b.x),wd(p.y,b.y))<b.r)p.hid=1})}
function openEd(){mode='edit';var sp=ED.sp||defSpawn();cam.x=sp.x;cam.y=sp.y;$('gar').style.display='none';$('game').style.display='block';$('hud').style.display='none';$('ctl').style.display='none';$('ed').style.display='block';resize();edBar();preload();requestAnimationFrame(edLoop)}
function edBar(){$('tools').innerHTML=ETOOLS.map(function(t){return'<button data-e="t:'+t[0]+'" class="'+(etool===t[0]?'on':'')+'">'+L(t[1])+'</button>'}).join('')+'<button data-e="rot">↻ '+(eang?'90°':'0°')+'</button>'}
function edLoop(){if(mode!=='edit')return;FRAME++;TIME+=1/60;var mx=Math.floor((cam.x-VW/2)/CH),Mx=Math.floor((cam.x+VW/2)/CH),my=Math.floor((cam.y-VH/2)/CH),My=Math.floor((cam.y+VH/2)/CH);for(var j=my;j<=My;j++)for(var i=mx;i<=Mx;i++)chunkNeed(i,j,false);chunkPump(3);
 cx.fillStyle='#10121e';cx.fillRect(0,0,VW,VH);drawChunks(false);
 cx.fillStyle='#ff7a00';PR.forEach(function(p){if(p.t!==P_CONE||p.hid)return;var x=SX(p.x),y=SY(p.y);if(x<-6||y<-6||x>VW+6||y>VH+6)return;cx.fillStyle='#ff7a00';cx.fillRect(x-2,y-2,5,5);cx.fillStyle='#fff';cx.fillRect(x-2,y,5,1)});
 brkDraw(false);drawChunks(true,1);brkDraw(true);drawZones(0);
 var sp=ED.sp||defSpawn(),x=SX(sp.x),y=SY(sp.y);cx.save();cx.translate(x,y);cx.rotate(sp.a||0);cx.globalAlpha=.85;var s2=pvSpr();cx.drawImage(s2,-s2.width/2,-s2.height/2);cx.restore();cx.globalAlpha=1;cx.fillStyle='#ff5aa0';cx.fillRect(x-1,y-14,3,3);
 cx.fillStyle='rgba(255,255,255,.07)';var gx=(-Math.round(cam.x-VW/2))%16,gy=(-Math.round(cam.y-VH/2))%16;for(var q=gx;q<VW;q+=16)cx.fillRect(q,0,1,VH);for(q=gy;q<VH;q+=16)cx.fillRect(0,q,VW,1);
 requestAnimationFrame(edLoop)}
function edAt(e){var r=cv.getBoundingClientRect();return[wrap(cam.x-VW/2+(e.clientX-r.left)/r.width*VW),wrap(cam.y-VH/2+(e.clientY-r.top)/r.height*VH)]}
function edDo(e,first){
 var p=edAt(e),x=Math.round(p[0]),y=Math.round(p[1]);
 if(etool in ETYPE){if(!first&&Math.hypot(wd(x,eDrag.lx),wd(y,eDrag.ly))<(etool==='cone'?10:18))return;eDrag.lx=x;eDrag.ly=y;var o={t:ETYPE[etool],x:x,y:y,a:eang?Math.PI/2:0,c:Math.floor(Math.random()*5)};ED.o.push(o);edAddObj(o);if(o.t!==P_CONE)chunkDirty(x-30,y-30,x+30,y+30)}
 else if(etool in EBR){if(!first&&Math.hypot(wd(x,eDrag.lx),wd(y,eDrag.ly))<8)return;eDrag.lx=x;eDrag.ly=y;var b={t:EBR[etool],x:x,y:y,r:14};ED.b.push(b);EDITB.push(b);edHideUnder(b);chunkDirty(x-40,y-40,x+40,y+40);preload()}
 else if(etool==='erase'){var R=16,ch=false;ED.o=ED.o.filter(function(o){if(Math.hypot(wd(o.x,x),wd(o.y,y))<R){if(o._p){PH.rm(o._p);if(BKH)BKH.rm(o._p);o._p.hid=1;var k=PR.indexOf(o._p);if(k>=0)PR.splice(k,1)}ch=true;return false}return true});
  var nb=ED.b.length;ED.b=ED.b.filter(function(b){return Math.hypot(wd(b.x,x),wd(b.y,y))>=R});if(ED.b.length!==nb){ch=true;EDITB.length=0;BLD.forEach(function(B){if(!B.ed)B.hid=0});ED.b.forEach(function(b){EDITB.push(b);edHideUnder(b)})}
  PH.q(x-R,y-R,x+R,y+R,function(pp){if(pp.ed||pp.t===P_TLT)return;if(Math.hypot(wd(pp.x,x),wd(pp.y,y))<R){var k=PR.indexOf(pp);if(k>=0&&ED.rm.indexOf(k)<0){ED.rm.push(k);pp.hid=1;ch=true}}});ED.rm.forEach(function(i){if(PR[i])PH.rm(PR[i])});
  if(ch){chunkDirty(x-60,y-60,x+60,y+60);preload()}}
 else if(etool==='start'){ED.sp={x:x,y:y,a:eang?-Math.PI/2:0};}
}
// ---- audio
var AU=null;
function auStart(){if(!S.snd)return;try{if(!AU){var C=new(window.AudioContext||window.webkitAudioContext)(),m=C.createGain();m.gain.value=0;m.connect(C.destination);AU={c:C,m:m};
 var o1=C.createOscillator(),o2=C.createOscillator(),lp=C.createBiquadFilter(),eg=C.createGain();o1.type='sawtooth';o2.type='square';lp.type='lowpass';lp.frequency.value=600;eg.gain.value=.04;o1.connect(lp);o2.connect(lp);lp.connect(eg);eg.connect(m);o1.start();o2.start();AU.o1=o1;AU.o2=o2;AU.lp=lp;AU.eg=eg;
 var buf=C.createBuffer(1,C.sampleRate,C.sampleRate),d=buf.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;AU.buf=buf;var ns=C.createBufferSource();ns.buffer=buf;ns.loop=true;var bp=C.createBiquadFilter();bp.type='bandpass';bp.frequency.value=1800;bp.Q.value=5;var sg=C.createGain();sg.gain.value=0;ns.connect(bp);bp.connect(sg);sg.connect(m);ns.start();AU.sg=sg;AU.bp=bp}
 AU.c.resume();AU.m.gain.setTargetAtTime(.8,AU.c.currentTime,.1)}catch(e){AU=null}}
function auStop(){if(AU)try{AU.m.gain.setTargetAtTime(0,AU.c.currentTime,.05)}catch(e){}}
function auUpdate(I){if(!AU||!S.snd)return;try{var sp=car.sp,g=Math.min(5,Math.floor(sp/92)),rpm=(sp-g*92)/92,f=46+rpm*72+g*9+(I.t?10:0),t=AU.c.currentTime;AU.o1.frequency.setTargetAtTime(f,t,.04);AU.o2.frequency.setTargetAtTime(f*.5,t,.04);AU.eg.gain.setTargetAtTime(.03+(I.t?.025:0),t,.06);AU.lp.frequency.setTargetAtTime(420+rpm*800,t,.05);var sq=(Math.abs(car.slip)>.2&&sp>60)?Math.min(.1,Math.abs(car.slip)*.085*(car.surf<1?.35:1)):0;AU.sg.gain.setTargetAtTime(sq,t,.04);AU.bp.frequency.setTargetAtTime(1500+Math.random()*600,t,.05)}catch(e){}}
function auHit(v){if(!AU)return;try{var C=AU.c,s=C.createBufferSource(),f=C.createBiquadFilter(),g=C.createGain();s.buffer=AU.buf;f.type='lowpass';f.frequency.value=380;g.gain.value=.5*v;g.gain.setTargetAtTime(0,C.currentTime,.07);s.connect(f);f.connect(g);g.connect(AU.m);s.start();s.stop(C.currentTime+.3)}catch(e){}}
function auPop(){if(!AU)return;try{var C=AU.c,s=C.createBufferSource(),f=C.createBiquadFilter(),g=C.createGain();s.buffer=AU.buf;f.type='bandpass';f.frequency.value=180+Math.random()*120;f.Q.value=2;g.gain.value=.5;g.gain.setTargetAtTime(0,C.currentTime+.02,.04);s.connect(f);f.connect(g);g.connect(AU.m);s.start(0,Math.random()*.5);s.stop(C.currentTime+.18)}catch(e){}}
function auChirp(){if(!AU)return;try{var C=AU.c,o=C.createOscillator(),g=C.createGain();o.type='triangle';o.frequency.value=2400+Math.random()*900;o.frequency.setTargetAtTime(1600,C.currentTime,.05);g.gain.value=.02;g.gain.setTargetAtTime(0,C.currentTime+.05,.03);o.connect(g);g.connect(AU.m);o.start();o.stop(C.currentTime+.2)}catch(e){}}
function auBeep(fr){if(!AU)return;try{var C=AU.c,o=C.createOscillator(),g=C.createGain();o.type='square';o.frequency.value=fr;g.gain.value=.06;g.gain.setTargetAtTime(0,C.currentTime+.08,.05);o.connect(g);g.connect(AU.m);o.start();o.stop(C.currentTime+.3)}catch(e){}}
// ---- input
function bindBtn(id,k){var e=$(id);e.addEventListener('pointerdown',function(ev){ev.preventDefault();K[k]=1;e.classList.add('dn');try{e.setPointerCapture(ev.pointerId)}catch(x){}});['pointerup','pointercancel','lostpointercapture'].forEach(function(n){e.addEventListener(n,function(){K[k]=0;e.classList.remove('dn')})});e.addEventListener('contextmenu',function(ev){ev.preventDefault()})}
function bootUI(){
 cv=$('c');cx=cv.getContext('2d');
 bindBtn('bl','l');bindBtn('br','r');bindBtn('bt','t');bindBtn('bb','b');bindBtn('bh','h');
 var KM={ArrowLeft:'l',a:'l',ArrowRight:'r',d:'r',ArrowUp:'t',w:'t',ArrowDown:'b',s:'b',' ':'h',Shift:'h'};
 addEventListener('keydown',function(e){var k=KM[e.key.length===1?e.key.toLowerCase():e.key];if(k&&mode==='game'){K[k]=1;e.preventDefault()}if(e.key==='m'&&mode==='game')toggleMap()});
 addEventListener('keyup',function(e){var k=KM[e.key.length===1?e.key.toLowerCase():e.key];if(k)K[k]=0});
 addEventListener('resize',function(){if(mode==='game'||mode==='edit'||mode==='demo'){resize();MMCX=null}});
 $('bgar').addEventListener('click',home);$('bset').addEventListener('click',openSet);$('bmap').addEventListener('click',toggleMap);$('mm').addEventListener('click',toggleMap);$('mapc').addEventListener('click',function(e){if(mode!=='map')return;var r=this.getBoundingClientRect();gpsSet((e.clientX-r.left)/r.width*WS,(e.clientY-r.top)/r.height*WS);openMap()});$('mapw').addEventListener('click',function(){gpsClear();openMap()});$('mapx').addEventListener('click',toggleMap);
 document.addEventListener('click',function(e){var b=e.target.closest('#gar [data-a]');if(b){garAction(b.dataset.a,+b.dataset.i);return}var sb=e.target.closest('#set [data-s]');if(sb){setAction(sb.dataset.s,+sb.dataset.i);return}var zb=e.target.closest('[data-z]');if(zb){zoneClick(zb.dataset.z);return}var q=e.target.closest('#ed [data-e]');if(q){var a=q.dataset.e;if(a.indexOf('t:')===0){etool=a.slice(2);edBar()}else if(a==='rot'){eang=eang?0:1;edBar()}else if(a==='play'){saveEd();startGame()}else if(a==='back'){saveEd();menuOpen()}else if(a==='clear'){if(confirmClear()){ED={o:[],b:[],rm:[],sp:null};saveEd();location.reload()}}}});
 var slz=$('slz'),slb=$('slb'),slk=$('slk'),stb=$('stb'),stk=$('stk');
 function slSet(px,py){if((S.ctl|0)===2){var dx=px-SL.x0,dy=py-SL.y0,dl=Math.hypot(dx,dy),R=SL.R;if(dl>R){dx*=R/dl;dy*=R/dl}var ad=Math.abs(dx);SL.v=ad<5?0:(dx>0?1:-1)*Math.pow(Math.min(1,(ad-5)/(R*.84-5)),.85);SL.vy=dy/R;stk.style.left=(SL.x0+dx)+'px';stk.style.top=(SL.y0+dy)+'px';return}
  var dx2=clamp(px-SL.x0,-SL.R,SL.R),ad2=Math.abs(dx2);SL.v=ad2<4?0:(dx2>0?1:-1)*Math.pow(Math.min(1,(ad2-4)/(SL.R*.84-4)),.85);SL.vy=0;slk.style.left=(SL.x0+dx2)+'px'}
 slz.addEventListener('pointerdown',function(e){var c=S.ctl|0;if(c===3){e.preventDefault();if(TILT.raw!==null){TILT.g0=TILT.raw;toast('Наклон обнулён')}return}if(SL.id!==null)return;e.preventDefault();SL.id=e.pointerId;SL.R=(c===2?[46,60,78]:[42,58,80])[S.sll==null?0:S.sll];var r=$('game').getBoundingClientRect();SL.ox=r.left;SL.oy=r.top;SL.x0=e.clientX-r.left;SL.y0=e.clientY-r.top;try{slz.setPointerCapture(e.pointerId)}catch(x){}
  if(c===2){stb.style.width=stb.style.height=(SL.R*2+44)+'px';stb.style.left=SL.x0+'px';stb.style.top=SL.y0+'px';stb.style.display='block';stk.style.display='block'}else{slb.style.width=(SL.R*2+52)+'px';slb.style.left=SL.x0+'px';slb.style.top=SL.y0+'px';slk.style.top=SL.y0+'px';slb.style.display='block';slk.style.display='block'}
  slSet(SL.x0,SL.y0);SL.on=true});
 slz.addEventListener('pointermove',function(e){if(e.pointerId!==SL.id)return;slSet(e.clientX-SL.ox,e.clientY-SL.oy)});
 ['pointerup','pointercancel','lostpointercapture'].forEach(function(n){slz.addEventListener(n,function(e){if(e.pointerId!==SL.id)return;SL.id=null;SL.on=false;SL.v=0;SL.vy=0;slHide()})});
 document.addEventListener('input',function(e){var k=e.target.dataset&&e.target.dataset.r;if(!k)return;S[k]=+e.target.value;var l=$('v'+k);if(l)l.textContent=S[k]+'%';save();applyCtl()});
 cv.addEventListener('pointerdown',function(e){if(mode!=='edit')return;eDrag.d=1;eDrag.x=e.clientX;eDrag.y=e.clientY;if(etool!=='pan')edDo(e,true)});
 cv.addEventListener('pointermove',function(e){if(mode!=='edit'||!eDrag.d)return;if(etool==='pan'){var r=cv.getBoundingClientRect();cam.x=wrap(cam.x-(e.clientX-eDrag.x)/r.width*VW);cam.y=wrap(cam.y-(e.clientY-eDrag.y)/r.height*VH);eDrag.x=e.clientX;eDrag.y=e.clientY}else edDo(e,false)});
 addEventListener('pointerup',function(){if(eDrag.d){eDrag.d=0;eDrag.lx=-999;saveEd()}});
}
function slHide(){['slb','slk','stb','stk'].forEach(function(i){$(i).style.display='none'})}
function applyCtl(){var c=S.ctl|0;$('ctl').className=['ctl-sl','ctl-bt','ctl-st','ctl-tl'][c]+(S.lh?' lh':'')+' bs'+(S.bsz==null?1:S.bsz);TILT.on=c===3&&(mode==='game'||mode==='set');if(car&&car.P)car.P=carParams(S.car,S.parts[S.car])}
// ---- settings
var setFrom='';
function seg(key,opts,val){return'<div class="seg">'+opts.map(function(o,i){return'<button class="'+(val===i?'on':'')+'" data-s="'+key+'" data-i="'+i+'">'+L(o)+'</button>'}).join('')+'</div>'}
function renderSet(){var c=S.ctl|0,q='<div class="in"><div class="sh"><h2>'+GEAR+L('Настройки')+'</h2><button class="sx" data-s="close" aria-label="'+L('Закрыть')+'">✕</button></div>';
 q+='<div class="sl2">'+L('Язык')+(S.lang==='ru'?' · Language · 语言':S.lang==='zh'?' · Language':' · 语言')+'</div>'+seg('lang',['Русский','English','中文'],S.lang==='en'?1:S.lang==='zh'?2:0);
 q+='<div class="sl2">'+L('Управление')+'</div><div class="cg">'+CTLN.map(function(t,i){return'<button class="cc'+(c===i?' on':'')+'" data-s="ctl" data-i="'+i+'">'+CTLI[i]+'<span>'+L(t[0])+'</span><small>'+L(t[1])+'</small></button>'}).join('')+'</div>';
 if(typeof kbSet==='function')q+=kbSet();
 q+='<div class="sl2">'+L('Чувствительность руля')+'</div><div class="rg"><div class="rl"><span>'+L(c===3?'насколько сильно наклонять телефон':c===1?'как быстро руль доходит до упора':'как далеко вести палец до упора')+'</span><b id="vsens">'+S.sens+'%</b></div><input type="range" min="50" max="200" step="10" value="'+S.sens+'" data-r="sens" aria-label="'+L('Чувствительность руля')+'"></div>';
 q+='<div class="sl2">'+L('Острота поворота')+'</div><div class="rg"><div class="rl"><span>'+L('насколько круто поворачивает машина')+'</span><b id="vstp">'+S.stp+'%</b></div><input type="range" min="80" max="125" step="5" value="'+S.stp+'" data-r="stp" aria-label="'+L('Острота поворота')+'"></div>';
 if(c===0||c===2)q+='<div class="sl2">'+L(c===2?'Размер стика':'Длина слайдера')+'</div>'+seg('sll',['короткий','средний','длинный'],S.sll||0);
 if(c===3)q+='<button class="go alt" data-s="tilt0">'+L('Обнулить наклон')+'</button>';
 q+='<div class="sl2">'+L('Расположение кнопок')+'</div>'+seg('lh',['педали справа','педали слева'],S.lh?1:0);
 q+='<div class="sl2">'+L('Размер кнопок')+'</div>'+seg('bsz',['маленькие','средние','большие'],S.bsz==null?1:S.bsz);
 q+='<div class="sl2">'+L('Автогаз')+'</div>'+seg('ag',['выкл','вкл'],S.ag?1:0);
 q+='<div class="sl2">'+L('Масштаб камеры')+'</div>'+seg('zoom',['близко','средне','далеко'],S.zoom);
 q+='<div class="sl2">'+L('Поворот камеры')+'</div><div style="font-size:11px;color:var(--muted);margin:-2px 0 8px">'+L(S.cam?'машина всегда смотрит вверх, город крутится вокруг':'север всегда сверху, крутится машина')+'</div>'+seg('cam',['север вверх','за машиной'],S.cam?1:0);
 q+='<div class="sl2">'+L('Задержка камеры')+'</div><div class="rg"><div class="rl"><span>'+L('0 — камера жёстко прикручена к машине, больше — плавнее догоняет')+'</span><b id="vclag">'+(S.clag==null?30:S.clag)+'%</b></div><input type="range" min="0" max="100" step="5" value="'+(S.clag==null?30:S.clag)+'" data-r="clag" aria-label="'+L('Задержка камеры')+'"></div>';
 q+='<div class="sl2">'+L('Время суток')+'</div>'+seg('tod',TODN,S.tod|0);
 if(typeof WXN!=='undefined')q+='<div class="sl2">'+L('Погода')+'</div>'+seg('wx',WXN,S.wx|0);
 q+='<div class="sl2">'+L('Звук')+'</div>'+seg('snd',['выкл','вкл'],S.snd?1:0);
 var rv=S.rvol==null?85:S.rvol;q+='<div class="sl2">'+L('Громкость радио')+'</div><div class="rg"><div class="rl"><span>'+L('кнопка радио — под мини-картой')+'</span><b id="vrvol">'+rv+'%</b></div><input type="range" min="0" max="100" step="5" value="'+rv+'" data-r="rvol" aria-label="'+L('Громкость радио')+'"></div>';
 if(navigator.vibrate)q+='<div class="sl2">'+L('Вибрация при ударах')+'</div>'+seg('vib',['выкл','вкл'],S.vib?1:0);
 if(typeof perfSet==='function')q+=perfSet();
 q+='<div class="sl2">'+L('Код')+'</div><div class="code"><input id="devc" type="text" inputmode="numeric" maxlength="10" autocomplete="off" placeholder="······" aria-label="'+L('Код')+'"><button data-s="code">OK</button></div>';
 if(S.dev&&typeof devPanel==='function')q+=devPanel();
 q+='<button class="go" data-s="close">'+L('Готово')+'</button><div class="ver">'+L('сборка')+' '+(typeof GAME_BUILD==='string'?GAME_BUILD:'')+'</div></div>';var el=$('set'),st=el.scrollTop;el.innerHTML=q;el.scrollTop=st}
function openSet(){setFrom=mode;if(mode==='game'){mode='set';K.l=K.r=K.t=K.b=K.h=0;SL.on=false;SL.id=null;SL.v=0;slHide();auStop();var d=document.querySelectorAll('.pb.dn');for(var i=0;i<d.length;i++)d[i].classList.remove('dn')}renderSet();$('set').style.display='block';$('set').scrollTop=0}
function closeSet(){$('set').style.display='none';if(mode==='set'){mode='game';applyCtl();resize();MMCX=null;if(S.snd)auStart();last=performance.now();if((S.ctl|0)===3)tiltCheck();if(S.tut!==(S.ctl|0)+1){$('tut').innerHTML=L(TUTS[S.ctl|0]);tutT=8;S.tut=(S.ctl|0)+1;save()}requestAnimationFrame(loop)}else if(mode===''){renderGar()}}
function setAction(a,i){if(a==='close'){closeSet();return}
 if(a==='code'){var v=($('devc').value||'').trim();if(v==='543186'){S.dev=1;save();toast(L('Режим разработчика включён'));renderSet()}else toast(L('Неверный код'));return}
 if(a.indexOf('dev')===0&&typeof devAction==='function'){devAction(a,i);return}
 if(a==='lang'){S.lang=['ru','en','zh'][i]||'ru';save();applyLang();MAPB=null;var lg=$('mapl');if(lg)lg.innerHTML='';if(ZP)zPrompt(ZP);if($('ed').style.display==='block')edBar();renderSet();return}
 if(a==='ctl'){if(i===3){tiltEnable(function(ok){if(!ok){toast('Нет доступа к датчику наклона');return}S.ctl=3;TILT.g0=null;save();renderSet();applyCtl()});return}S.ctl=i}
 else if(a==='sll')S.sll=i;else if(a==='lh')S.lh=i;else if(a==='bsz')S.bsz=i;else if(a==='ag')S.ag=i;else if(a==='vib')S.vib=i;
 else if(a==='zoom'){S.zoom=i;if(setFrom==='game')resize()}
 else if(a==='tod'){S.tod=i}
 else if(a==='cam'){S.cam=i;if(setFrom==='game'){resize();MMCX=null}}
 else if(a==='snd'){S.snd=i;if(!i)auStop()}
 else if(a==='tilt0'){if(TILT.raw!==null){TILT.g0=TILT.raw;toast('Наклон обнулён')}else toast('Датчик ещё не ответил');return}
 save();renderSet();applyCtl()}
// ---- tilt steering
var TILT={v:0,g0:null,raw:null,on:false,last:0,lis:false};
function tiltHandler(e){var o=(screen.orientation&&typeof screen.orientation.angle==='number')?screen.orientation.angle:(window.orientation||0),raw;if(o===90)raw=e.beta;else if(o===-90||o===270)raw=-e.beta;else if(o===180)raw=-e.gamma;else raw=e.gamma;if(raw==null||isNaN(raw))return;TILT.raw=raw;TILT.last=performance.now();if(TILT.g0===null)TILT.g0=raw;var d=raw-TILT.g0,mx=24/((S.sens||100)/100),a=Math.max(0,Math.abs(d)-1.5)/mx;TILT.v=(d<0?-1:1)*Math.min(1,Math.pow(a,.9))}
function tiltListen(){if(!TILT.lis){TILT.lis=true;addEventListener('deviceorientation',tiltHandler)}}
function tiltEnable(cb){try{if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){DeviceOrientationEvent.requestPermission().then(function(st){if(st==='granted'){tiltListen();cb(true)}else cb(false)}).catch(function(){cb(false)})}else if(typeof DeviceOrientationEvent!=='undefined'){tiltListen();cb(true)}else cb(false)}catch(e){cb(false)}}
function tiltCheck(){TILT.on=true;TILT.g0=null;tiltListen();var t0=performance.now();setTimeout(function(){if(mode!=='game'||(S.ctl|0)!==3)return;if(TILT.last<t0){S.ctl=0;save();applyCtl();toast('Датчик наклона тут недоступен — включил слайдер')}},1600)}
function tiltInd(){var i=$('tli').firstChild;if(i)i.style.left=(50+TILT.v*44)+'%'}
var _clr=0;function confirmClear(){if(Date.now()-_clr<2500)return true;_clr=Date.now();toast('Нажми «сброс» ещё раз, чтобы стереть всё');return false}
function toggleMap(){var m=$('map');if(m.style.display==='flex'){m.style.display='none';if(mode==='map'){mode='game';last=performance.now();requestAnimationFrame(loop)}}else{if(mode==='game')mode='map';openMap()}}
function boot(){
 applyLang();try{document.fonts&&document.fonts.load('11px TokyoPx')}catch(e){}
 bootUI();var lb=$('lb'),lt=$('lt');
 setTimeout(function(){genAll(20261105,function(p,nx){lb.style.width=Math.round(p*90)+'%';if(nx)setTimeout(nx,0);else{buildVehSprites();buildTrees();buildPeds();buildBrk();baseIdx();edApply();try{ttSprite3();skySprite3();cylSprite3();pagodaSprite()}catch(e){}lb.style.width='100%';worldReady=true;$('load').style.display='none';menuOpen();requestAnimationFrame(pvLoop)}})},30);
}

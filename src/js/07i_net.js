// ===== two players: transport, remote cars, lobby =====
// Transport: guests (and a host page served by server.js) use a WebSocket to /ws; the app host talks to its
// own native LocalServer plugin through Capacitor events. Both speak the same protocol (see server/server.js).
var NET={on:false,id:0,host:false,ws:null,nat:null,want:false,url:'',retry:0,away:true,pingT:0,todT:0,rtt:0,ips:[],ipi:0,port:0,st:'',cap:'',first:true};
var REM={},NETD=110,PCOL=['#ff6fae','#6ee7ff','#ffd23a','#7bd957'];
function netLS(){try{return(window.Capacitor&&Capacitor.Plugins&&Capacitor.Plugins.LocalServer)||null}catch(e){return null}}
function netJoinUrl(){return/[?&]join=/.test(location.search)}
// ---- connection
function netConnect(url){netClose(true);NET.want=true;NET.url=url;NET.retry=0;NET.st='conn';netOpen();lobbyRender()}
function netOpen(){var ws;try{ws=new WebSocket(NET.url)}catch(e){netDown();return}NET.ws=ws;
 ws.onopen=function(){NET.retry=0};
 ws.onmessage=function(e){var m;try{m=JSON.parse(e.data)}catch(x){return}netMsg(m)};
 ws.onclose=function(){if(NET.ws!==ws)return;NET.ws=null;netDown()}}
function netDown(){var was=NET.on;NET.on=false;REM={};remTags();
 if(!NET.want){NET.st='';lobbyRender();return}
 if(was)toast('Связь потеряна — переподключаюсь…');
 NET.st='conn';lobbyRender();if(++NET.retry>40){NET.want=false;NET.st='';toast('Не удалось подключиться');lobbyRender();return}
 setTimeout(function(){if(NET.want&&!NET.ws&&!NET.nat)netOpen()},NET.retry<3?800:2000)}
function netClose(quiet){NET.want=false;if(NET.ws){var w=NET.ws;NET.ws=null;try{w.close()}catch(e){}}
 if(NET.nat){try{NET.nat.stop()}catch(e){}NET.nat=null}NET.on=false;NET.host=false;REM={};remTags();NET.st='';if(!quiet)lobbyRender()}
function netSend(o){if(!NET.on&&o.t!=='hi')return;var s=JSON.stringify(o);
 if(NET.nat){try{NET.nat.send({data:s})}catch(e){}}else if(NET.ws&&NET.ws.readyState===1){try{NET.ws.send(s)}catch(e){}}}
function netHostNative(){var P=netLS();if(!P)return;NET.st='start';lobbyRender();
 try{if(!NET.natL){NET.natL=1;P.addListener('msg',function(e){var m;try{m=JSON.parse(e.data)}catch(x){return}netMsg(m)})}
  P.start({port:8080}).then(function(r){NET.nat=P;NET.want=true;NET.ips=(r&&r.ips)||[];NET.port=(r&&r.port)||8080;NET.ipi=0;if(NET.on)netHello();lobbyRender()}).catch(function(){NET.st='';toast('Не удалось запустить сервер');lobbyRender()})}catch(e){NET.st='';toast('Не удалось запустить сервер');lobbyRender()}}
// host page served by server.js: ask it for the LAN addresses, then join as the first player
function netHostHttp(){NET.st='start';lobbyRender();fetch('/info',{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){NET.ips=j.ips||[];NET.port=j.port||+location.port||80;NET.ipi=0;netConnect((location.protocol==='https:'?'wss://':'ws://')+location.host+'/ws')}).catch(function(){NET.st='';toast('Не удалось запустить сервер');lobbyRender()})}
// ---- messages
function remAdd(id){if(id===NET.id)return null;return REM[id]||(REM[id]={id:id,rem:true,buf:[],off:null,car:0,col:0,str:0,glow:0,spr:null,vis:false,away:true,sc:0,wp:[null,null],x:0,y:0,a:0,l:0,vx:0,vy:0,d:0,b:0,sl:0,sp:0})}
function netHello(){netSend({t:'hi',car:S.car,col:S.col,str:S.str,glow:S.glow})}
function netMsg(m){var r;
 switch(m.t){
 case'welcome':NET.on=true;NET.id=m.id;NET.host=!!m.host;NET.st='on';NET.retry=0;(m.peers||[]).forEach(remAdd);netHello();NET.away=true;lobbyRender();break;
 case'join':remAdd(m.id);netHello();toast('Игрок подключился');if(S.vib&&navigator.vibrate)try{navigator.vibrate(40)}catch(e){}lobbyRender();break;
 case'leave':delete REM[m.id];remTags();toast('Игрок вышел');lobbyRender();break;
 case'host':NET.host=true;lobbyRender();break;
 case'full':toast('Игра заполнена');netClose();break;
 case'pong':NET.rtt=Math.round(performance.now()-m.ts);break;
 case'hi':r=remAdd(m.f);if(!r)break;r.car=clamp(m.car|0,0,CARS.length-1);r.col=clamp(m.col|0,0,BODYC.length-1);r.str=clamp(m.str|0,0,STRC.length-1);r.glow=clamp(m.glow|0,0,GLOWC.length-1);var hx=/^#[0-9a-f]{6}$/i;r.gc=hx.test(m.gc)?m.gc:'';r.spr=playerSprite(r.car,hx.test(m.bc)?m.bc:BODYC[r.col],hx.test(m.sc)?m.sc:STRC[r.str]);lobbyRender();break;
 case's':r=remAdd(m.f);if(!r)break;if(!r.spr)r.spr=playerSprite(0,BODYC[1],STRC[0]);r.away=false;var now=performance.now(),d=now-m.ts;r.off=r.off==null?d:(d<r.off?d+(r.off-d)*.5:r.off+(d-r.off)*.02);
  r.buf.push({t:m.ts+r.off,x:+m.x,y:+m.y,a:+m.a,vx:+m.vx,vy:+m.vy,l:m.l|0,d:m.d|0,b:m.b|0,sl:+m.sl,sp:+m.sp});if(r.buf.length>40)r.buf.shift();r.sc=m.sc|0;break;
 case'g':r=remAdd(m.f);if(r){r.away=true;r.vis=false;r.buf=[]}break;
 case'tod':if(!NET.host&&!(S.tod|0))TODH=+m.h;break}}
// players are numbered by id order: P1 is normally the host
function netRank(id){var a=[NET.id].concat(Object.keys(REM).map(Number)).sort(function(p,q){return p-q});return a.indexOf(id)}
function netName(id){return'P'+(netRank(id)+1)}
function netCol(id){return PCOL[netRank(id)%PCOL.length]}
// ---- sending: a timer, so the position keeps flowing while the map / settings are open
setInterval(function(){if(!NET.on)return;var now=performance.now(),ing=(mode==='game'||mode==='map'||mode==='set')&&car&&car.P;
 if(ing){NET.away=false;netSend({t:'s',ts:Math.round(now),x:+car.x.toFixed(1),y:+car.y.toFixed(1),a:+car.a.toFixed(3),vx:Math.round(car.vx),vy:Math.round(car.vy),l:car.l|0,d:car.dr?1:0,b:(K.b&&car.fw>0)?1:0,sl:+car.slip.toFixed(2),sp:Math.round(car.sp),sc:Math.floor(run?run.score:0)})}
 else if(!NET.away){NET.away=true;netSend({t:'g'})}
 if(now-NET.pingT>2000){NET.pingT=now;netSend({t:'png',ts:now})}
 if(NET.host&&now-NET.todT>3000&&!(S.tod|0)){NET.todT=now;netSend({t:'tod',h:+TODH.toFixed(3)})}},50);
// ---- remote cars: interpolate ~110 ms behind, extrapolate briefly when packets are late
function remUpdate(dt){var now=performance.now(),rt=now-NETD;
 for(var id in REM){var r=REM[id],b=r.buf;if(r.away||!b.length||now-b[b.length-1].t>2500||!r.spr){r.vis=false;continue}r.vis=true;
  var n=b.length,A,B,u,i;
  if(rt>=b[n-1].t){A=b[n-1];var ex=Math.min(.25,(rt-A.t)/1000);r.x=wrap(A.x+A.vx*ex);r.y=wrap(A.y+A.vy*ex);r.a=A.a;r.vx=A.vx;r.vy=A.vy;B=A}
  else if(rt<=b[0].t){A=B=b[0];r.x=A.x;r.y=A.y;r.a=A.a;r.vx=A.vx;r.vy=A.vy}
  else{for(i=1;i<n&&b[i].t<rt;i++);A=b[i-1];B=b[i];u=(rt-A.t)/((B.t-A.t)||1);r.x=wrap(A.x+wd(B.x,A.x)*u);r.y=wrap(A.y+wd(B.y,A.y)*u);r.a=A.a+angd(B.a,A.a)*u;r.vx=A.vx+(B.vx-A.vx)*u;r.vy=A.vy+(B.vy-A.vy)*u}
  var N=u>.5?B:A;r.l=N.l;r.d=N.d;r.b=N.b;r.sl=N.sl;r.sp=N.sp;
  while(b.length>3&&b[1].t<rt-400)b.shift();
  remFx(r,dt)}}
function remFx(r,dt){var C=CARS[r.car]||CARS[0],ca=Math.cos(r.a),sa=Math.sin(r.a),sl=Math.abs(r.sl),on=r.d&&sl>.22&&r.sp>60,dirt=!r.l&&(GRIPT[typeAt(r.x,r.y)]||1)<1;
 for(var w=0;w<2;w++){var sg=w?1:-1,ox=-(C.hx-4),wx=r.x+ca*ox-sa*sg*(C.hy-2),wy=r.y+sa*ox+ca*sg*(C.hy-2);
  if(on){var cur=[wx,wy];if(r.wp[w])skidLine(r.wp[w],cur,r.l,dirt);r.wp[w]=cur;
   var inten=Math.min(1,(sl-.15)*1.6)*Math.min(1,r.sp/220);if(Math.random()<inten*1.1)smokePuff(wx+(Math.random()-.5)*3,wy+(Math.random()-.5)*3,-r.vx*.14+(Math.random()-.5)*24,-r.vy*.14+(Math.random()-.5)*24,2+Math.random()*1.5,8+Math.random()*5,dirt,r.l,.55+Math.random()*.25)}
  else r.wp[w]=null}}
function remDraw(z){for(var id in REM){var r=REM[id];if(!r.vis||(r.l|0)!==z)continue;var sp=r.spr,x=SX(r.x),y=SY(r.y),w=sp.width,h=sp.height;if(x<-70||y<-70||x>VW+70||y>VH+70)continue;
 var ra=Math.round(r.a/(Math.PI/32))*(Math.PI/32);cx.save();cx.translate(x+2,y+3);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(-w/2,-h/2,w,h);cx.restore();
 cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(sp,-w/2,-h/2);vehLights({bk:r.b,x:r.x,phy:0,tn:0,vt:-1},sp,false);cx.restore()}}
// remote lights + underglow (called from lightPass)
function remLight(r,lv){carLights(r.x,r.y,r.a,r.spr.width,r.spr.height,lv,!!r.b,true);if(!r.glow)return;var c0=car,s0=sprC,g0=S.glow,cu=typeof GCUS!=='undefined'&&r.gc&&(r.glow<PG0||r.glow>=GCUS),k0=cu?GLOWC[GCUS]:0;car=r;sprC=r.spr;S.glow=r.glow;if(cu){GLOWC[GCUS]=r.gc;S.glow=GCUS}try{underglow(lv)}finally{car=c0;sprC=s0;S.glow=g0;if(cu)GLOWC[GCUS]=k0}}
// soft contact: only our car is pushed; the friend's game pushes theirs
function remCollide(c){var near=99;for(var id in REM){var r=REM[id];if(!r.vis||(r.l|0)!==(c.l|0))continue;var dx=wd(r.x,c.x),dy=wd(r.y,c.y);if(Math.abs(dx)>60||Math.abs(dy)>60)continue;
 var C=CARS[r.car]||CARS[0],dd=Math.hypot(dx,dy)-C.hx-c.hx*.6;if(dd<near)near=dd;satPair(c,{x:r.x,y:r.y,a:r.a,hx:C.hx,hy:C.hy,vx:r.vx,vy:r.vy,w:0,m:C.m||1},.25,.38)}return near}
// ---- HUD: name tags / edge arrows, friend score
function remTags(){var box=$('ntags');if(!box)return;var seen={};
 if(NET.on&&mode==='game'){var cr=cvRect();
  for(var id in REM){var r=REM[id];if(!r.vis)continue;seen[id]=1;var e=$('nt'+id);if(!e){e=document.createElement('div');e.id='nt'+id;e.className='ntag';e.innerHTML='<b></b><i></i>';box.appendChild(e)}
   var q=scrXY(r.x,r.y),X=cr.left+q[0]/RVW*cr.width,Y=cr.top+q[1]/RVH*cr.height,W=innerWidth,H=innerHeight,x0=24,x1=W-24,y0=150,y1=H-230,off=X<x0||Y<y0-60||X>x1||Y>H-60,col=netCol(+id);
   e.style.color=col;e.firstChild.textContent=netName(+id);
   if(off){var cx0=(x0+x1)/2,cy0=(y0+y1)/2,dx=X-cx0,dy=Y-cy0,s=Math.min((x1-x0)/2/Math.max(1,Math.abs(dx)),(y1-y0)/2/Math.max(1,Math.abs(dy)));X=cx0+dx*s;Y=cy0+dy*s;
    e.className='ntag off';e.lastChild.style.transform='rotate('+(Math.atan2(dy,dx)+Math.PI/2)+'rad)';e.lastChild.textContent='▲';e.firstChild.textContent=netName(+id)+' '+Math.round(Math.hypot(wd(r.x,car.x),wd(r.y,car.y))/4)+L('м')}
   else{e.className='ntag';e.lastChild.textContent='▼';e.lastChild.style.transform='';Y-=22}
   e.style.left=Math.round(X)+'px';e.style.top=Math.round(Y)+'px'}}
 var ch=box.children;for(var i=ch.length-1;i>=0;i--)if(!seen[ch[i].id.slice(2)])box.removeChild(ch[i]);
 var ns=$('nsc');if(ns){if(NET.on&&mode==='game'){var t='';for(var k in REM){var rr=REM[k];if(rr.away)continue;t+='<div style="color:'+netCol(+k)+'">'+netName(+k)+' '+fmtN(rr.sc)+'</div>'}ns.innerHTML=t+(NET.rtt?'<small>'+L('пинг')+' '+NET.rtt+' '+L('мс')+'</small>':'')}else ns.innerHTML=''}}
// ---- hooks into the game
var _guNet=gpsUpdate;gpsUpdate=function(dt){_guNet(dt);if(NET.on)remUpdate(dt)};
var _dsNet=drawSmoke;drawSmoke=function(z){if(NET.on&&mode==='game')remDraw(z);_dsNet(z)};
var _coNet=collide;collide=function(c){var n=_coNet(c);if(NET.on&&mode==='game'&&c===car)n=Math.min(n,remCollide(c));return n};
var _huNet=hud;hud=function(dt){_huNet(dt);remTags()};
var _dmNet=drawMini;drawMini=function(){_dmNet();if(!NET.on||!MMCX)return;var g=MMCX,k=MMS/(2*MMR),th=camRot()?-Math.PI/2-(cam.a||0):0,ct=Math.cos(th),st=Math.sin(th),D=DPR;
 for(var id in REM){var r=REM[id];if(!r.vis)continue;var dx=wd(r.x,car.x),dy=wd(r.y,car.y),X=clamp(MMS/2+(dx*ct-dy*st)*k,5*D,MMS-5*D),Y=clamp(MMS/2+(dx*st+dy*ct)*k,5*D,MMS-5*D);g.fillStyle='#12141d';g.fillRect(X-4*D,Y-4*D,8*D,8*D);g.fillStyle=netCol(+id);g.fillRect(X-3*D,Y-3*D,6*D,6*D)}};
var _omNet=openMap;openMap=function(){_omNet();if(!NET.on)return;var c=$('mapc'),g=c.getContext('2d'),k=c.width/WS,D=DPR;
 for(var id in REM){var r=REM[id];if(!r.vis)continue;var X=wrap(r.x)*k,Y=wrap(r.y)*k;g.fillStyle='#12141d';g.fillRect(X-6*D,Y-6*D,12*D,12*D);g.fillStyle=netCol(+id);g.fillRect(X-5*D,Y-5*D,10*D,10*D);g.font=Math.round(11*D)+'px TokyoPx,monospace';g.fillStyle='#fff';g.fillText(netName(+id),X+8*D,Y+4*D)}};
var _sgNet=startGame;startGame=function(k){var r=_sgNet(k);if(NET.on)netHello();
 if(netJoinUrl()&&document.documentElement.requestFullscreen&&!document.fullscreenElement){try{document.documentElement.requestFullscreen().catch(function(){})}catch(e){}}return r};
// ---- lobby (the «2 players» panel)
function lobbyCan(){if(netLS())return'nat';return NET.httpOk?'http':''}
function lobbyOpen(){$('duo').style.display='flex';
 if(!netLS()&&NET.httpOk==null&&/^https?:$/.test(location.protocol)){NET.httpOk=false;NET.probe=1;lobbyRender();
  var done=false,t=setTimeout(function(){if(!done){done=true;NET.probe=0;lobbyRender()}},1500);
  fetch('/info',{cache:'no-store'}).then(function(r){return r.ok?r.json():null}).then(function(j){if(done)return;done=true;clearTimeout(t);NET.probe=0;NET.httpOk=!!(j&&j.ips);lobbyRender()}).catch(function(){if(!done){done=true;clearTimeout(t);NET.probe=0;lobbyRender()}})}
 else lobbyRender()}
function lobbyUrl(){var ip=NET.ips[NET.ipi%Math.max(1,NET.ips.length)];return ip?'http://'+ip+':'+NET.port+'/?join=1':''}
function lobbyRender(){var e=$('duo');if(!e)return;var mb=document.querySelector('[data-m=duo] em');if(mb){var n=Object.keys(REM).length+1;mb.textContent=NET.on?n+' '+L('онлайн'):'';mb.style.display=NET.on?'':'none'}
 if(e.style.display!=='flex')return;var q='<div class="din"><h2>'+L('ВДВОЁМ')+'</h2>';
 if(NET.probe)q+='<p>'+L('Проверяю…')+'</p>';
 else if(NET.on||NET.nat||NET.st==='conn'||NET.st==='start'){
  if(NET.st==='conn'&&!NET.on)q+='<p>'+L('Подключаюсь…')+'</p>';
  else if(NET.st==='start'&&!NET.nat&&!NET.on)q+='<p>'+L('Подключаюсь…')+'</p>';
  else{var url=(NET.host||NET.nat)?lobbyUrl():'';
   if(NET.host||NET.nat){if(url)q+='<div class="qrw">'+qrSvg(url,'#12141d','#ffffff')+'</div><p class="qrl">'+L('Отсканируй камерой второго телефона')+'</p><button class="qra" data-n="ip">'+url.replace('http://','').replace('/?join=1','')+'</button>';
    else q+='<p class="soon">'+L('Адрес не найден — проверь, что телефон раздаёт точку доступа или подключён к Wi-Fi')+'</p>'}
   else q+='<p>'+L('Ты в игре у друга!')+'</p>';
   q+='<div class="pls"><div class="plh">'+L('Игроки')+'</div>';var ids=[NET.id].concat(Object.keys(REM).map(Number)).sort(function(p,q2){return p-q2}),any=ids.length>1;
   ids.forEach(function(id){var me=id===NET.id,r=REM[id];q+='<div class="pl"><i style="background:'+netCol(id)+'"></i>'+netName(id)+' — '+(me?L('ты')+(NET.host?' ('+L('хост')+')':''):L(CARS[r.car].n))+'</div>'});
   if(!any)q+='<div class="pl wait">'+L('ждём второго игрока…')+'</div>';
   q+='</div><button class="go" data-n="go">'+L('Поехали')+'</button><button class="go alt dk" data-n="leave">'+L('Выйти из игры')+'</button>'}}
 else{var can=lobbyCan();
  if(can){q+='<p>'+L('Друг сканирует QR камерой телефона — игра откроется у него в браузере. Вы должны быть в одной сети: раздай ему точку доступа или подключитесь к одному Wi-Fi.')+'</p><button class="go" data-n="host">'+L('Создать игру')+'</button>'}
  else q+='<p>'+L('Создать игру можно в приложении «Занос Токио». Друг без приложения просто отсканирует QR — игра откроется у него в браузере.')+'</p><p class="soon">'+L('Или запусти на компьютере server.js и отсканируйте QR из окна терминала.')+'</p>';
  q+='<div class="jn"><input id="jadr" inputmode="url" autocomplete="off" spellcheck="false" placeholder="192.168.43.1:8080" aria-label="'+L('Адрес игры')+'"><button data-n="join">'+L('Подключиться')+'</button></div>'}
 q+='<button class="go alt" data-n="close">'+L('Закрыть')+'</button></div>';e.innerHTML=q}
function lobbyAct(a){
 if(a==='close'){$('duo').style.display='none';return}
 if(a==='host'){if(netLS())netHostNative();else netHostHttp();return}
 if(a==='leave'){netClose();return}
 if(a==='ip'){NET.ipi++;lobbyRender();return}
 if(a==='go'){$('duo').style.display='none';if(mode==='demo')menuAction('play');return}
 if(a==='join'){var v=($('jadr').value||'').trim().replace(/^https?:\/\//,'').replace(/\/.*$/,'');if(!v)return;if(!/:\d+$/.test(v))v+=':8080';location.href='http://'+v+'/?join=1'}}
document.addEventListener('click',function(e){var b=e.target.closest('#duo [data-n]');if(b)lobbyAct(b.dataset.n)});
// a guest who scanned the QR joins automatically once the city is built
var _moNet=menuOpen;menuOpen=function(){_moNet();if(NET.first){NET.first=false;if(netJoinUrl()&&/^https?:$/.test(location.protocol)){netConnect((location.protocol==='https:'?'wss://':'ws://')+location.host+'/ws');lobbyOpen()}}if(NET.on)NET.away=true};

// ===== MAIN MENU: live gameplay attract-mode behind the buttons =====
var DEMO={t:0,ph:'in',fade:1,pts:null,cum:null,L:0,pi:0,P:0,hb:0,cool:0,stuck:0,glow:0,saved:null,wp:null,sc:0,cap:'',capT:0,ci:0};
var DEMO_TOD=[23.3,19.2,0.8,7.1,21.6,13.2,18.5];
function demoSpots(){var L=[];SPEC.forEach(function(s){var m=MAPK[s.k];if(m&&m[1])L.push({x:s.x+s.w/2,y:s.y+s.h/2,n:m[1]})});ZONES.forEach(function(z){L.push({x:z.x,y:z.y,n:z.name})});return L}
function demoPlace(x,y){var best=null,bd=1e9;demoSpots().forEach(function(s){var d=Math.hypot(wd(s.x,x),wd(s.y,y));if(d<bd){bd=d;best=s}});return best&&bd<1400?best.n:'Токио'}
function demoRouteFrom(c){var old=car,res=null;car=c;
 for(var k=0;k<8&&!res;k++){var an=Math.random()*TAU,D=1300+Math.random()*1300,q=gpsNear(c.x+Math.cos(an)*D,c.y+Math.sin(an)*D,320);if(!q)continue;
  WP={x:q.x,y:q.y,q:q};gpsRoute();var w=WP;WP=null;if(w.pts&&w.pts.length>6&&w.L>500)res={pts:w.pts,cum:w.cum,L:w.L}}
 car=old;WP=null;return res}
function demoRoute(){var r=demoRouteFrom(car);if(!r)return false;DEMO.pts=r.pts;DEMO.cum=r.cum;DEMO.L=r.L;DEMO.pi=0;DEMO.P=0;return true}
function demoAt(d,out,R){R=R||DEMO;var P=R.pts,C=R.cum,n=P.length,i=R===DEMO?DEMO.pi:0;d=clamp(d,0,R.L);while(i<n-2&&C[i+1]<d)i++;var sl=(C[i+1]-C[i])||1,t=clamp((d-C[i])/sl,0,1),a=P[i],b=P[i+1];out[0]=a[0]+(b[0]-a[0])*t;out[1]=a[1]+(b[1]-a[1])*t;out[2]=Math.atan2(b[1]-a[1],b[0]-a[0]);return out}
function demoPick(){var sp=demoSpots();
 for(var tr=0;tr<12;tr++){var s=(Math.random()<.7&&sp.length)?sp[Math.floor(Math.random()*sp.length)]:{x:Math.random()*WS,y:Math.random()*WS},
   q=gpsNear(s.x+(Math.random()-.5)*500,s.y+(Math.random()-.5)*500,420,true);if(!q)continue;
  var ci=Math.floor(Math.random()*CARS.length),C=CARS[ci],
   c={x:q.x,y:q.y,a:0,vx:0,vy:0,w:0,st:0,dr:false,drT:0,spin:0,l:0,hx:C.hx,hy:C.hy,P:carParams(ci,[2,2,2]),sp:0,slip:0,fw:0,surf:1,under:false,m:C.m||1,tail:0},
   r=demoRouteFrom(c);if(!r)continue;var T=[0,0,0];demoAt(36,T,r);c.x=wrap(T[0]);c.y=wrap(T[1]);c.a=T[2];
  var v=170+Math.random()*50;c.vx=Math.cos(c.a)*v;c.vy=Math.sin(c.a)*v;c.sp=v;return{c:c,r:r,ci:ci}}
 return null}
// bake the next scene's city chunks in the background so the cut doesn't stall
function demoQueue(n){var x=n.c.x+n.c.vx*.25,y=n.c.y+n.c.vy*.25+VH*.07,x0=Math.floor((x-VW/2-CH*.5)/CH),x1=Math.floor((x+VW/2+CH*.5)/CH),y0=Math.floor((y-VH/2-CH*.5)/CH),y1=Math.floor((y+VH/2+CH*.5)/CH);for(var j=y0;j<=y1;j++)for(var i=x0;i<=x1;i++){var k=(((j%NC)+NC)%NC)*NC+(((i%NC)+NC)%NC);if(CHK.has(k)){chunkGet(i,j);continue}if(BQ.length||FRAME%4)continue;chunkNeed(i,j,false)}}
function demoScene(){var n=DEMO.next||demoPick();DEMO.next=null;if(!n)return;DEMO.sc++;
 car=n.c;DEMO.pts=n.r.pts;DEMO.cum=n.r.cum;DEMO.L=n.r.L;DEMO.pi=0;DEMO.P=0;DEMO.ci=n.ci;
 sprC=playerSprite(DEMO.ci,BODYC[Math.floor(Math.random()*BODYC.length)],STRC[Math.floor(Math.random()*STRC.length)]);
 DEMO.glow=Math.random()<.85?1+Math.floor(Math.random()*(GLOWC.length-1)):0;
 DEMO.h=DEMO_TOD[DEMO.sc%DEMO_TOD.length];demoTod(0);
 cam.x=wrap(car.x+car.vx*.25);cam.y=wrap(car.y+car.vy*.25+VH*.07);cam.a=car.a;cam.sh=0;
 AI=[];SMOKE=[];PART=[];BIRDS=[];brkReset();
 PR.forEach(function(p){if(p.t===P_CONE){p.kn=0;p.gone=0;p.cx=p.x;p.cy=p.y;p.ca=0}});
 run={score:0,pend:0,mult:1,dt:0,idle:0,msg:'',mt:0,cd:0,best:0};
 DEMO.t=0;DEMO.hb=0;DEMO.cool=.6;DEMO.stuck=0;DEMO.rev=0;DEMO.revN=0;DEMO.cap=demoPlace(car.x,car.y);DEMO.capT=0;
 preload();pedFill();for(var i=0;i<4;i++)aiManage(car,cam,VW,VH);demoCap()}
function demoTod(dt){var st=S.tod;S.tod=0;TODFIX[0]=DEMO.h;todUpdate(dt);TODFIX[0]=null;S.tod=st}
function demoCap(){var e=$('mcap');if(e)e.lastChild.textContent=L(DEMO.cap)+' · '+todStr()}
// autopilot: pure pursuit on the GPS polyline, speed control before corners, handbrake into sharp ones
function demoAI(dt){var c=car,I={s:0,t:1,b:0,h:0},P=DEMO.pts;if(!P)return I;
 var n=P.length,best=1e18,bi=DEMO.pi,bt=0;
 for(var i=Math.max(0,DEMO.pi-3);i<Math.min(n-1,DEMO.pi+40);i++){var p0=P[i],p1=P[i+1],ex=p1[0]-p0[0],ey=p1[1]-p0[1],l2=ex*ex+ey*ey||1,dx=wd(c.x,p0[0]),dy=wd(c.y,p0[1]),t=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*t,qy=dy-ey*t,d=qx*qx+qy*qy;if(d<best){best=d;bi=i;bt=t}}
 DEMO.pi=bi;DEMO.P=DEMO.cum[bi]+(DEMO.cum[bi+1]-DEMO.cum[bi])*bt;
 if(DEMO.L-DEMO.P<160||Math.sqrt(best)>150){demoRoute();return I}
 var sp=c.sp,T=[0,0,0],A=[0,0,0],B=[0,0,0];
 // reverse out when wedged
 if(DEMO.rev>0){DEMO.rev-=dt;demoAt(DEMO.P+40,T);var e0=angd(Math.atan2(wd(T[1],c.y),wd(T[0],c.x)),c.a);I.t=0;I.b=1;I.s=e0>0?-1:1;return I}
 if(DEMO.stuck>.45){DEMO.rev=.85;DEMO.stuck=0;DEMO.revN=(DEMO.revN||0)+1}
 demoAt(DEMO.P+24+sp*.2,T);
 var head=c.dr?Math.atan2(c.vy,c.vx):c.a,err=angd(Math.atan2(wd(T[1],c.y),wd(T[0],c.x)),head);
 I.s=clamp(err*(c.dr?2.2:2.8),-1,1);
 // sharpest heading change in the next stretch of road
 demoAt(DEMO.P+10,A);var mt=0,md=0;for(var d=40;d<=60+sp*.9;d+=20){demoAt(DEMO.P+d,B);var tt=angd(B[2],A[2]);if(Math.abs(tt)>Math.abs(mt)){mt=tt;md=d}}
 var vt=Math.abs(mt)>1.2?175:Math.abs(mt)>.7?215:Math.abs(mt)>.35?270:330;
 DEMO.cool-=dt;
 if(!c.dr){
  if(sp>vt+25){I.t=0;I.b=clamp((sp-vt)/120,.3,1)}else if(sp>vt)I.t=.3;
  if(DEMO.cool<=0&&sp>130&&Math.abs(mt)>.42&&md<90+sp*.25){DEMO.hb=.16+Math.min(.22,Math.abs(mt)*.1);DEMO.cool=.9}
 }else{I.t=Math.abs(err)>.9?.3:.85;if(Math.abs(mt)>.3&&Math.abs(err)<.8&&sp>110)I.h=1}
 if(DEMO.hb>0){DEMO.hb-=dt;I.h=1;I.b=0;I.t=1;I.s=mt>0?1:-1}
 return I}
function demoLoop(t){
 if(mode!=='demo')return;
 var dt=Math.min(.033,Math.max(0,(t-last)/1000));last=t;FRAME++;TIME+=dt;DEMO.h=(DEMO.h+dt*.02)%24;demoTod(dt);
 var c0=S.coins,I=demoAI(dt);
 for(var n=0;n<3;n++){physStep(car,I,dt/3);layerUpdate(car);collide(car)}
 if(COLL.max>30&&COLL.px!=null)fxImpact(COLL.px,COLL.py,COLL.max,car.vx,car.vy,car.l);else scrapeFx(dt);
 if(COLL.max>60)cam.sh=Math.min(5,COLL.max/40);if(cam.sh>0)cam.sh=Math.max(0,cam.sh-dt*12);AIHIT=null;
 if(lastThr&&!I.t&&car.sp>170&&flameT<=0){fxFlame(car.x-Math.cos(car.a)*car.hx,car.y-Math.sin(car.a)*car.hx,car.a,car.l);flameT=.35}flameT-=dt;lastThr=I.t;
 driftFx(dt,I);petals(dt);smokeUpdate(dt);fx3Update(dt);flashUpdate(dt);piecesUpdate(dt);
 CONEL.forEach(function(p){if(!p.kn||p.gone)return;p.kt-=dt;p.cx=wrap(p.cx+p.vx*dt);p.cy=wrap(p.cy+p.vy*dt);p.ca+=p.va*dt;p.vx*=Math.max(0,1-dt*2.5);p.vy*=Math.max(0,1-dt*2.5);p.va*=Math.max(0,1-dt*2);if(p.kt<=0)p.gone=1});
 fxUpdate(dt);birdsUpdate(dt);boatsUpdate(dt);
 aiUpdate(dt,car);for(var q2=AI.length-1;q2>=0;q2--){var A2=AI[q2];if(A2.fd){A2.fd-=dt*(A2.phy?1.2:2.2);if(A2.fd<=0)AI.splice(q2,1)}}if(FRAME%3===0)aiManage(car,cam,VW,VH);pedUpdate(dt);
 var tx=car.x+clamp(car.vx*.3,-100,100),ty=car.y+clamp(car.vy*.3,-70,70)+VH*.07,k=Math.min(1,dt*2.2);cam.x=wrap(cam.x+wd(tx,cam.x)*k);cam.y=wrap(cam.y+wd(ty,cam.y)*k);cam.a=car.a;
 var mx=Math.floor((cam.x-VW/2-CH*.6)/CH),Mx=Math.floor((cam.x+VW/2+CH*.6)/CH),my=Math.floor((cam.y-VH/2-CH*.6)/CH),My=Math.floor((cam.y+VH/2+CH*.6)/CH);for(var jj=my;jj<=My;jj++)for(var ii=mx;ii<=Mx;ii++)chunkNeed(ii,jj,false);
 if(!DEMO.next&&DEMO.t>2.5&&DEMO.ph==='play')DEMO.next=demoPick();if(DEMO.next)demoQueue(DEMO.next);
 chunkPump(1);
 var g0=S.glow;S.glow=DEMO.glow;render();S.glow=g0;S.coins=c0;
 // scene cuts
 DEMO.t+=dt;DEMO.stuck=car.sp<30?DEMO.stuck+dt:0;
 if(DEMO.ph==='in'){DEMO.fade=Math.max(0,DEMO.fade-dt/.45);if(!DEMO.fade)DEMO.ph='play'}
 else if(DEMO.ph==='play'){if((DEMO.t>7.5&&!car.dr)||DEMO.t>10||DEMO.revN>2)DEMO.ph='out'}
 else{DEMO.fade=Math.min(1,DEMO.fade+dt/.3);if(DEMO.fade>=1){demoScene();DEMO.ph='in';last=performance.now()}}
 if(DEMO.fade>0){cx.fillStyle='rgba(8,6,16,'+DEMO.fade.toFixed(3)+')';cx.fillRect(0,0,cv.width,cv.height)}
 if((DEMO.capT-=dt)<=0){DEMO.capT=1;demoCap()}
 requestAnimationFrame(demoLoop)}
// ---- menu screens
function menuOpen(){
 if(mode==='game')bank();if(mode!=='demo'){DEMO.saved=car;DEMO.wp=WP}
 zoneCancel();TILT.on=false;auStop();save();WP=null;
 mode='demo';['gar','ed','hud','ctl','map','duo'].forEach(function(i){var e=$(i);if(e)e.style.display='none'});
 $('game').style.display='block';$('menu').style.display='flex';$('mcoins').textContent=Math.floor(S.coins)+' ¥';
 resize();MMCX=null;DEMO.next=null;DEMO.fade=1;DEMO.ph='in';demoScene();last=performance.now();requestAnimationFrame(demoLoop)}
function menuLeave(){mode='';$('menu').style.display='none';$('duo').style.display='none';
 car=DEMO.saved;WP=DEMO.wp;AI=[];SMOKE=[];PART=[];BIRDS=[];brkReset();
 PR.forEach(function(p){if(p.t===P_CONE){p.kn=0;p.gone=0;p.cx=p.x;p.cy=p.y;p.ca=0}})}
function menuAction(a){
 if(a==='story'){storyBegin();return}
 if(a==='play'){if(typeof ST!=='undefined')ST.mode=false;menuLeave();$('game').style.display='none';$('gar').style.display='block';renderGar();window.scrollTo(0,0)}
 else if(a==='edit'){menuLeave();openEd()}
 else if(a==='set'){openSet()}
 else if(a==='duo'){lobbyOpen()}
 else if(a==='duox'){$('duo').style.display='none'}}
var PXI_PLAY=['C........','CCC......','CCCCC....','CCCCCCC..','CCCCCCCCC','CCCCCCC..','CCCCC....','CCC......','C........'],
 PXI_DUO=['..CC....DD..','.CCCC..DDDD.','.CCCC..DDDD.','..CC....DD..','............','.CCCC..DDDD.','CCCCCC.DDDDD','CCCCCC.DDDDD','CCCCCC.DDDDD'],
 PXI_BOOK=['CCCC.CCCC','CDDC.CDDC','CDDC.CDDC','CDDC.CDDC','CDDC.CDDC','CDDC.CDDC','CCCCCCCCC','.CCCCCCC.','.........'],
 PXI_EDIT=['......KK.','.....KCCK','....KCCK.','...KCCK..','..KCCK...','.KCCK....','KYYK.....','KYK......','KK.......'];
function menuUI(){var m=$('menu');if(!m)return;
 var ic=function(sel,svg){var e=m.querySelector(sel);if(e)e.insertAdjacentHTML('afterbegin',svg)};
 ic('[data-m=story]',pxSvg(PXI_BOOK,{C:'#2a0d1c',D:'#ffd0e4'},'mi'));ic('[data-m=play]',pxSvg(PXI_PLAY,{C:'#06202a'},'mi'));ic('[data-m=duo]',pxSvg(PXI_DUO,{C:'#6ee7ff',D:'#2a9cc0'},'mi'));
 ic('[data-m=edit]',pxSvg(PXI_EDIT,{K:'#12141d',C:'#ffd23a',Y:'#ff6fae'},'mi'));ic('[data-m=set]',pxSvg(pxGear(),{C:'#6ee7ff'},'mi'));
 m.addEventListener('click',function(e){var b=e.target.closest('[data-m]');if(b)menuAction(b.dataset.m)});
 $('duo').addEventListener('click',function(e){var b=e.target.closest('[data-m]');if(b)menuAction(b.dataset.m);else if(e.target.id==='duo')menuAction('duox')})}
var _mnBoot=bootUI;bootUI=function(){_mnBoot();menuUI();lobbyRender()};
var _sgM=startGame;startGame=function(k){if(mode==='demo')menuLeave();return _sgM(k)};
var _edM=openEd;openEd=function(){if(mode==='demo')menuLeave();return _edM()};

// ===== GAME =====
var $=function(i){return document.getElementById(i)};
var cv,cx,VW=300,VH=600,KPX=3,DPR=1,mode='',car=null,cam={x:0,y:0,sx:0,sy:0,sh:0},K={l:0,r:0,t:0,b:0,h:0},run=null,ZS=null,ZCD={},SMOKE=[],last=0,sprC=null,worldReady=false,MMC=null,MMI=null,MAPC=null,underA=1,tutT=0;
var RVW=300,RVH=600,SSC=1,CAMD=600,CAMPY=.6,ROTD=false;
function camRot(){return S.cam===1&&mode!=='edit'&&mode!=='demo'}
function scrXY(x,y){var dx=wd(x,cam.x),dy=wd(y,cam.y);if(camRot()){var t=-Math.PI/2-(cam.a||0),c=Math.cos(t),s=Math.sin(t);return[RVW/2+dx*c-dy*s,RVH*CAMPY+dx*s+dy*c]}return[dx+RVW/2,dy+RVH/2]}
function resize(){
 DPR=window.devicePixelRatio||1;var Z=[260,340,440][S.zoom==null?1:S.zoom];if(mode==='edit')Z=480;else if(mode==='demo')Z=290;
 KPX=Math.max(1,Math.round(Math.min(innerWidth,innerHeight)*DPR/Z));
 var rot=camRot(),kp=rot?Math.max(1,Math.round(KPX/2)):KPX;SSC=KPX/kp;
 cv.width=Math.ceil(innerWidth*DPR/kp);cv.height=Math.ceil(innerHeight*DPR/kp);cv.style.width=(cv.width*kp/DPR)+'px';cv.style.height=(cv.height*kp/DPR)+'px';RVW=cv.width/SSC;RVH=cv.height/SSC;
 if(rot){var px=RVW/2,py=RVH*CAMPY;CAMD=2*Math.ceil(Math.hypot(px,Math.max(py,RVH-py)))+4;VW=VH=CAMD}else{VW=RVW;VH=RVH}cx.imageSmoothingEnabled=false;
}
function defSpawn(){var n=NODES.filter(function(n){return n.t==='scr'})[0]||NODES[0],e=n.ed[0],r=e.r,dir=e.e===0?1:-1,s=e.e===0?r.za+90:r.len-r.zb-90;r.pt(s,TMP);var u=laneU(r,dir,0);return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3]*dir,TMP[2]*dir)}}
function newCar(){var sp=ED.sp||defSpawn(),C=CARS[S.car];return{x:sp.x,y:sp.y,a:sp.a||0,vx:0,vy:0,w:0,st:0,dr:false,drT:0,spin:0,l:0,hx:C.hx,hy:C.hy,P:carParams(S.car,S.parts[S.car]),sp:0,slip:0,fw:0,surf:1,under:false,m:C.m||1,tail:0}}
function startGame(keep){
 var old=car;mode='game';sprC=playerSprite(S.car,BODYC[S.col],STRC[S.str]);car=newCar();if(keep&&old&&old.P){car.x=old.x;car.y=old.y;car.a=old.a;car.l=old.l}cam.x=car.x;cam.y=car.y;cam.a=car.a;AI=[];SMOKE=[];PART=[];BIRDS=[];zoneCancel();brkReset();car.wp=null;lastDr=false;if(!BOATS.length)boatsInit();if(!CLOUDS.length)cloudsInit();
 PR.forEach(function(p){if(p.t===P_CONE){p.kn=0;p.gone=0;p.cx=p.x;p.cy=p.y;p.ca=0}});
 run={score:0,pend:0,mult:1,dt:0,idle:0,msg:'',mt:0,cd:0,best:0};
 $('gar').style.display='none';$('ed').style.display='none';$('game').style.display='block';$('hud').style.display='block';$('ctl').style.display='block';applyCtl();SL.on=false;SL.v=0;SL.vy=0;SL.id=null;slHide();BS=0;TILT.g0=null;
 resize();preload();pedFill();auStart();last=performance.now();if(S.tut!==(S.ctl|0)+1){$('tut').innerHTML=L(TUTS[S.ctl|0]);tutT=8;S.tut=(S.ctl|0)+1;save()}if((S.ctl|0)===3)tiltCheck();requestAnimationFrame(loop);
}
function preload(){var x0=Math.floor((cam.x-VW/2-CH)/CH),x1=Math.floor((cam.x+VW/2+CH)/CH),y0=Math.floor((cam.y-VH/2-CH)/CH),y1=Math.floor((cam.y+VH/2+CH)/CH);for(var j=y0;j<=y1;j++)for(var i=x0;i<=x1;i++)chunkNeed(i,j,Math.abs(i*CH+CH/2-cam.x)<VW/2+CH&&Math.abs(j*CH+CH/2-cam.y)<VH/2+CH)}
function flash(m,t){run.msg=L(m);run.mt=t||1.4}
function bank(){if(run.pend>0){var p=Math.floor(run.pend);run.score+=p;S.coins+=p/60;if(ZS)ZS.score+=p;flash('+'+p);if(p>=50)popup('+'+p,p>2000?'big':'');run.pend=0;run.dt=0;run.mult=1;save()}}
function lose(m){if(run.pend>0){flash(m);run.pend=0;run.dt=0;run.mult=1}}
// ---- collisions for player
function collide(c){
 COLL.hit=0;COLL.max=0;var near=99,hx=c.hx,R=Math.hypot(c.hx,c.hy)+2;
 if(c.l===0){
  BH.q(c.x-R-2,c.y-R-2,c.x+R+2,c.y+R+2,function(b){if(b.hid)return;var bx=b.x+b.w/2,by=b.y+b.h/2,dx=wd(bx,c.x),dy=wd(by,c.y);var ex=Math.max(0,Math.abs(dx)-b.w/2),ey=Math.max(0,Math.abs(dy)-b.h/2),dd=Math.hypot(ex,ey)-c.hy;if(dd<near)near=dd;if(Math.abs(dx)>b.w/2+R||Math.abs(dy)>b.h/2+R)return;satBox(c,dx,dy,b.w/2,b.h/2,0,.22,.35)});
  PH.q(c.x-R-12,c.y-R-12,c.x+R+12,c.y+R+12,function(p){var dx=wd(p.x,c.x),dy=wd(p.y,c.y);if(Math.abs(dx)>R+20||Math.abs(dy)>R+20)return;
   var BK=BRKT[p.t];if(BK){if(p.brk||p.hid)return;if(circProbe(c,dx,dy,BK.r)&&Math.hypot(c.vx,c.vy)>BK.th){breakProp(p,c,false);return}if(p.t===P_BARR){satBox(c,dx,dy,7,2,p.a,.3,.3);return}if(p.t===P_VEND){satBox(c,dx,dy,2.5,3.5,0,.2,.3);return}if(p.t===P_TRASH){satBox(c,dx,dy,5,2.5,0,.2,.3);return}circHit(c,dx,dy,BK.r,.25,.3);return}
   if(p.t===P_CONE){if(p.gone||p.kn)return;var cdx=wd(p.cx,c.x),cdy=wd(p.cy,c.y);if(Math.hypot(cdx,cdy)<R+2&&circProbe(c,cdx,cdy,3)){p.kn=1;p.kt=2.5;p.vx=c.vx*1.1+(Math.random()-.5)*60;p.vy=c.vy*1.1+(Math.random()-.5)*60;p.va=(Math.random()-.5)*20;run.pend+=run.pend>0?20:0;if(!run.pend){run.score+=15;S.coins+=.5}flash('конус!',.6);auHit(.25)}return}
   if(p.t===P_CAR){if(p.hid)return;var tmp={x:p.x,y:p.y,a:p.a,hx:p.hx,hy:p.hy,vx:0,vy:0,w:0,m:VMASS[p.vt]||1};var im=satPair(c,tmp,.2,.4);if(im>12){var a=aiMake(ARTS[0],0,1,0,0);a.vt=p.vt;a.c=p.c;a.hx=p.hx;a.hy=p.hy;a.m=tmp.m;a.x=tmp.x;a.y=tmp.y;a.a=tmp.a;a.vx=tmp.vx;a.vy=tmp.vy;a.w=tmp.w;a.phy=true;a.rest=0;a.l=0;AI.push(a);p.hid=1;PH.rm(p);chunkDirty(p.x-30,p.y-30,p.x+30,p.y+30)}return}
   if(p.t===P_BARR){satBox(c,dx,dy,7,2,p.a,.3,.3);return}
   if(p.t===P_BLOCK){satBox(c,dx,dy,8,3,p.a||0,.2,.4);return}
   if(p.t===P_VEND){satBox(c,dx,dy,2.5,3.5,0,.2,.3);return}
   if(p.t===P_TORII){circHit(c,dx-p.w/2+1.5,dy,2.5,.2,.3);circHit(c,dx+p.w/2-1.5,dy,2.5,.2,.3);return}
   if(p.w&&p.r===0){satBox(c,dx,dy,5,5,0,.2,.35);return}
   if(p.r>0&&p.t!==P_BENCH&&p.t!==P_BUSH){var e=p.t===P_TIRE?.65:.25;var dd=Math.hypot(dx,dy)-p.r-c.hy;if(dd<near)near=dd;circHit(c,dx,dy,p.r,e,.3)}});
  rasterHit(c);
 }else deckHit(c);
 for(var i=0;i<AI.length;i++){var a=AI[i];if((a.l|0)!==c.l||a.fd)continue;var dx=wd(a.x,c.x),dy=wd(a.y,c.y);if(Math.abs(dx)>60||Math.abs(dy)>60)continue;var dd=Math.hypot(dx,dy)-a.hx-c.hx*.6;if(dd<near)near=dd;var im=satPair(c,a,.25,.38);if(im>0){a.hold=2;if(im>14&&!a.phy){a.phy=true;a.rest=0}a.dmg+=im;if(im>60)AIHIT=a}}
 return near;
}
function circProbe(c,dx,dy,r){var ca=Math.cos(c.a),sa=Math.sin(c.a),lx=dx*ca+dy*sa,ly=-dx*sa+dy*ca;return Math.abs(lx)<c.hx+r&&Math.abs(ly)<c.hy+r}
// ---- main loop
var AIHIT=null;
var BS=0;
function input(dt){var c=S.ctl|0,sens=(S.sens||100)/100,s=0,b=K.b?1:0,kb=(K.r?1:0)-(K.l?1:0);
 if(c===1||kb){var rate=9*sens;BS+=clamp(kb-BS,-rate*dt,rate*dt);if(!kb&&Math.abs(BS)<.03)BS=0;s=BS}
 else{BS=0;if(c===3)s=TILT.v;else if(SL.on){var v=SL.v;s=(v<0?-1:1)*Math.min(1,Math.abs(v)*sens)}}
 var t=K.t||(S.ag&&!K.b)?1:0;
 if(c===2&&SL.on){var vy=SL.vy;if(vy<-.18)t=Math.max(t,Math.min(1,(-vy-.18)/.5));if(vy>.32){b=Math.max(b,Math.min(1,(vy-.32)/.45));t=K.t?1:0}}
 return{s:s,t:t,b:b,h:K.h?1:0}}
function loop(t){
 if(mode!=='game')return;
 var dt=Math.min(.033,Math.max(0,(t-last)/1000));last=t;FRAME++;TIME+=dt;todUpdate(dt);
 var I=input(dt),near=99;
 if(ZS&&ZS.ph==='cd'){car.vx=car.vy=car.w=0;car.sp=0;car.slip=0;car.fw=0;car.dr=false}
 else{var cm=0,cpx=null,cpy=null,chs=0;for(var n=0;n<3;n++){physStep(car,I,dt/3);layerUpdate(car);near=Math.min(near,collide(car));if(COLL.max>cm){cm=COLL.max;cpx=COLL.px;cpy=COLL.py}else if(COLL.hit&&cpx===null){cpx=COLL.px;cpy=COLL.py}chs+=COLL.hit}COLL.max=cm;COLL.hit=chs;if(cpx!==null){COLL.px=cpx;COLL.py=cpy}}
 if(COLL.max>30&&COLL.px!=null)fxImpact(COLL.px,COLL.py,COLL.max,car.vx,car.vy,car.l);else scrapeFx(dt);
 if(COLL.max>110){fxDebris(COLL.px,COLL.py,BODYC[S.col],10,car.l);if(AIHIT){fxDebris(COLL.px,COLL.py,VTY[AIHIT.vt].cols[AIHIT.c%VTY[AIHIT.vt].cols.length],8,car.l)}}AIHIT=null;
 if(COLL.max>60){lose('Бам!');cam.sh=Math.min(7,COLL.max/35);auHit(Math.min(1,COLL.max/250));if(S.vib&&navigator.vibrate)try{navigator.vibrate(Math.min(70,Math.round(COLL.max/4)))}catch(e){}}
 if(lastThr&&!I.t&&car.sp>170&&flameT<=0){fxFlame(car.x-Math.cos(car.a)*car.hx,car.y-Math.sin(car.a)*car.hx,car.a,car.l);flameT=.35;auPop()}else if(car.dr&&I.t&&car.sp>200&&Math.random()<dt*.9&&flameT<=0){fxFlame(car.x-Math.cos(car.a)*car.hx,car.y-Math.sin(car.a)*car.hx,car.a,car.l);flameT=.3;auPop()}
 flameT-=dt;lastThr=I.t;
 // scoring
 var dr=car.dr&&car.sp>70&&Math.abs(car.slip)>.18&&!(ZS&&ZS.z.line);
 if(dr){run.dt+=dt;run.idle=0;var m0=run.mult;run.mult=Math.min(8,1+Math.floor(run.dt/1.5));if(run.mult>m0)popup('×'+run.mult,'mul');var nb=near<9?1.6:1;run.near=nb>1?.3:Math.max(0,(run.near||0)-dt);run.pend+=dt*car.sp*Math.abs(car.slip)*.9*run.mult*nb;run.ang=Math.abs(car.slip)}
 else{run.idle+=dt;run.ang=Math.max(0,(run.ang||0)-dt*2);if(run.idle>1.8)bank()}
 if(run.mt>0)run.mt-=dt;
 // effects
 driftFx(dt,I);petals(dt);smokeUpdate(dt);fx3Update(dt);flashUpdate(dt);piecesUpdate(dt);brkRespawn();
 CONEL.forEach(function(p){if(!p.kn||p.gone)return;p.kt-=dt;p.cx=wrap(p.cx+p.vx*dt);p.cy=wrap(p.cy+p.vy*dt);p.ca+=p.va*dt;p.vx*=Math.max(0,1-dt*2.5);p.vy*=Math.max(0,1-dt*2.5);p.va*=Math.max(0,1-dt*2);if(p.kt<=0){p.gone=1;p.rt=TIME+45}});
 if(FRAME%60===0)CONEL.forEach(function(p){if(p.gone&&TIME>p.rt&&(Math.abs(wd(p.x,cam.x))>VW||Math.abs(wd(p.y,cam.y))>VH)){p.gone=0;p.kn=0;p.cx=p.x;p.cy=p.y;p.ca=0}});
 zonesUpdate(dt);gpsUpdate(dt);fxUpdate(dt);birdsUpdate(dt);boatsUpdate(dt);
 aiUpdate(dt,car);AI.forEach(function(a){if(a.phy&&a.dmg>120&&Math.random()<dt*4)fxPuff(a.x,a.y,a.l|0)});for(var q2=AI.length-1;q2>=0;q2--){var A2=AI[q2];if(A2.fd){A2.fd-=dt*(A2.phy?1.2:2.2);if(A2.fd<=0)AI.splice(q2,1)}}if(FRAME%3===0)aiManage(car,cam,VW,VH);pedUpdate(dt);
 // camera
 var cl=(S.clag==null?30:S.clag)/100,la=.3*Math.min(1,.35+cl*1.3),tx=car.x+clamp(car.vx*la,-120,120),ty=car.y+clamp(car.vy*la,-120,120),k=Math.min(1,dt*2.5*Math.pow(8,1-cl));cam.x=wrap(cam.x+wd(tx,cam.x)*k);cam.y=wrap(cam.y+wd(ty,cam.y)*k);
 if(cam.sh>0){cam.sh=Math.max(0,cam.sh-dt*12)}
 if(camRot()){var ta=car.a,spd=Math.hypot(car.vx,car.vy);if(spd>60&&cl>0){var va=Math.atan2(car.vy,car.vx);if(Math.cos(va-car.a)>0)ta=car.a+angd(va,car.a)*.5*Math.min(1,cl*2)}if(cam.a==null)cam.a=ta;cam.a+=angd(ta,cam.a)*(cl<=0?1:Math.min(1,dt*1.5*Math.pow(40,1-cl)))}else cam.a=car.a;
 var lax=clamp(car.vx*.5,-400,400),lay=clamp(car.vy*.5,-400,400),mx=Math.floor((cam.x+Math.min(0,lax)-VW/2-CH*.6)/CH),Mx=Math.floor((cam.x+Math.max(0,lax)+VW/2+CH*.6)/CH),my=Math.floor((cam.y+Math.min(0,lay)-VH/2-CH*.6)/CH),My=Math.floor((cam.y+Math.max(0,lay)+VH/2+CH*.6)/CH);for(var jj=my;jj<=My;jj++)for(var ii=mx;ii<=Mx;ii++)chunkNeed(ii,jj,false);
 chunkPump(1);
 render();hud(dt);auUpdate(I);
 if(tutT>0)tutT-=dt;
 requestAnimationFrame(loop);
}
function skid(x,y,l,dirt){x=wrap(x);y=wrap(y);var ch=chunkGet(Math.floor(x/CH),Math.floor(y/CH));if(!ch)return;var cv2=l?ch.u:ch.g;if(!cv2)return;var g=cv2._c||(cv2._c=cv2.getContext('2d'));g.fillStyle=dirt?'rgba(58,40,22,.16)':l?'rgba(20,20,30,.13)':'rgba(10,12,26,.12)';g.fillRect(Math.floor(wrap(x)-ch.X0),Math.floor(wrap(y)-ch.Y0),2,2)}
// ---- render
function SX(x){return Math.round(wd(x,cam.x)+VW/2)}function SY(y){return Math.round(wd(y,cam.y)+VH/2)}
function drawChunks(top,alpha){var ox=Math.round(cam.x-VW/2+(cam.sh?(Math.random()-.5)*cam.sh:0)),oy=Math.round(cam.y-VH/2+(cam.sh?(Math.random()-.5)*cam.sh:0));cam.ox=ox;cam.oy=oy;
 if(top&&alpha<1)cx.globalAlpha=alpha;
 for(var j=Math.floor(oy/CH);j<=Math.floor((oy+VH)/CH);j++)for(var i=Math.floor(ox/CH);i<=Math.floor((ox+VW)/CH);i++){var ch=chunkGet(i,j);if(!ch){if(!top){ch=chunkNeed(i,j,true)}else continue}var c2=top?ch.u:ch.g;if(c2){if(ROTD&&!top)cx.drawImage(c2,i*CH-ox-.35,j*CH-oy-.35,CH+.7,CH+.7);else cx.drawImage(c2,i*CH-ox,j*CH-oy)}}
 cx.globalAlpha=1}
function drawVeh(sp,x,y,a,sh,ai){x=SX(x);y=SY(y);if(x<-70||y<-70||x>VW+70||y>VH+70)return;var ra=Math.round(a/(Math.PI/32))*(Math.PI/32);sh=sh||2;cx.save();cx.translate(x+sh,y+sh+1);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.38)';cx.fillRect(-sp.width/2,-sp.height/2,sp.width,sp.height);cx.restore();cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(sp,-sp.width/2,-sp.height/2);if(ai)vehLights(ai,sp,false);cx.restore()}
function render(){
 var rot=camRot();ROTD=rot;cx.setTransform(SSC,0,0,SSC,0,0);
 if(rot){cx.fillStyle='#10121e';cx.fillRect(0,0,RVW,RVH);cx.save();cx.translate(RVW/2,RVH*CAMPY);cx.rotate(-Math.PI/2-(cam.a||0));cx.translate(-VW/2,-VH/2)}
 cx.fillStyle='#10121e';cx.fillRect(0,0,VW,VH);
 drawChunks(false);
 var ox=cam.ox,oy=cam.oy,tt=TIME;
 // water sparkle
 for(var j=Math.floor(oy/CH);j<=Math.floor((oy+VH)/CH);j++)for(var i=Math.floor(ox/CH);i<=Math.floor((ox+VW)/CH);i++){var ch=chunkGet(i,j);if(!ch||!ch.sp.length)continue;var bx=i*CH-ox,by=j*CH-oy,s=ch.sp;for(var k=0;k<s.length;k+=2){var ph=(tt*.7+k*.37)%3;if(ph>1.4)continue;var al=Math.sin(ph/1.4*Math.PI);cx.fillStyle='rgba(170,210,255,'+(al*.8).toFixed(2)+')';var dx=((tt*5+k*3)%8)-4;cx.fillRect(bx+s[k]+Math.round(dx),by+s[k+1],3,1)}
  for(k=0;k<s.length;k+=6){var ph2=(tt*1.3+k)%2;cx.fillStyle='rgba(30,60,130,.5)';cx.fillRect(bx+s[k]+Math.round(ph2*3)-4,by+s[k+1]+2,4,1)}}
 animsDraw();boatsDraw();drawZones(0);gpsDraw();brkDraw(false);piecesDraw(false);birdsDraw(false);
 // pedestrians
 pedDraw();
 // cones
 cx.fillStyle='#ff7a00';CONEL.forEach(function(p){if(p.gone)return;var x=SX(p.cx),y=SY(p.cy);if(x<-6||y<-6||x>VW+6||y>VH+6)return;cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x-1,y,4,3);cx.fillStyle='#ff7a00';cx.fillRect(x-2,y-2,5,5);cx.fillStyle='#fff';cx.fillRect(x-2,y,5,1);cx.fillStyle='#c84a00';cx.fillRect(x,y-1,1,1)});
 for(var a=0;a<AI.length;a++){var v=AI[a];if(v.l)continue;if(v.fd)cx.globalAlpha=Math.max(0,v.fd);drawVeh(VSPR[v.vt][v.c],v.x,v.y,v.a,2,v);cx.globalAlpha=1}
 drawSmoke(0);trailDraw(0);fxDraw(0);fx3Draw(0);
 if(car.l===0)drawPlayer();piecesDraw(true);
 underA+=((car.under?.45:1)-underA)*.15;
 drawChunks(true,underA);
 brkDraw(true);
 // traffic light heads
 var X0=cam.x-VW/2-40,Y0=cam.y-VH/2-40;
 tlDraw();landTopDraw();
 for(a=0;a<AI.length;a++){v=AI[a];if(!v.l)continue;if(v.fd)cx.globalAlpha=Math.max(0,v.fd);drawVeh(VSPR[v.vt][v.c],v.x,v.y,v.a,3,v);cx.globalAlpha=1}
 drawSmoke(1);trailDraw(1);fxDraw(1);fx3Draw(1);
 if(car.l===1)drawPlayer();
 else if(car.under){cx.globalAlpha=.55;drawPlayer(true);cx.globalAlpha=1}
 drawZones(1);gpsPin();birdsDraw(true);cloudsDraw(1/60);
 lightPass();
 if(rot)cx.restore();cx.setTransform(1,0,0,1,0,0);ROTD=false;
}
function drawPlayer(gh){var x=SX(car.x),y=SY(car.y),ra=Math.round(car.a/(Math.PI/32))*(Math.PI/32),w=sprC.width,h=sprC.height;
 if(!gh){cx.save();cx.translate(x+2,y+3);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(-w/2,-h/2,w,h);cx.restore()}
 cx.save();cx.translate(x,y);cx.rotate(ra);
 cx.drawImage(sprC,-w/2,-h/2);if(!gh)vehLights(null,sprC,true);cx.restore()}
// ---- HUD
var hudT=0;
function hud(dt){
 $('sc').textContent=Math.floor(run.score);$('sp').textContent=Math.round(car.sp*.45);
 var cm=$('cm');if(run.pend>0){cm.innerHTML='<b>×'+run.mult+'</b> +'+Math.floor(run.pend)+(run.near>0?' <i>'+L('близко!')+'</i>':'');cm.style.opacity=1}else if(run.mt>0){cm.textContent=run.msg;cm.style.opacity=Math.min(1,run.mt*2)}else cm.style.opacity=0;
 var ab=$('ang');ab.style.width=Math.min(100,(run.ang||0)/1.2*100)+'%';
 if(hudT%2===0)zHud();if(TILT.on)tiltInd();
 $('tut').style.display=tutT>0?'block':'none';
 if(++hudT%3===0)drawMini();
}
var MMS=0,MMIMG=null,MMCX=null,MMR=700;
function drawMini(){
 var c=$('mm'),rot=camRot(),R2=rot?Math.ceil(MMR*1.45):MMR,NN=Math.ceil(2*R2/OC);if(!MMCX){var s=Math.round(112*DPR);c.width=s;c.height=s;MMCX=c.getContext('2d');MMS=s}
 if(!MMC||MMC.width!==NN){MMC=mkCanvas(NN,NN);MMI=MMC.getContext('2d').createImageData(NN,NN)}
 var g=MMCX,N=MMC.width,d=MMI.data,cx0=Math.floor((car.x-R2)/OC),cy0=Math.floor((car.y-R2)/OC),fx=(car.x-R2)/OC-cx0,fy=(car.y-R2)/OC-cy0;
 for(var y=0;y<N;y++)for(var x=0;x<N;x++){var v=OCC[oIdx(cx0+x,cy0+y)],o=(y*N+x)*4,col=MMCOL[v]||MMCOL[0];d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255}
 MMC.getContext('2d').putImageData(MMI,0,0);
 var k=MMS/(2*MMR),th=rot?-Math.PI/2-(cam.a||0):0,ct=Math.cos(th),st=Math.sin(th);
 function mp(dx,dy){return[MMS/2+(dx*ct-dy*st)*k,MMS/2+(dx*st+dy*ct)*k]}
 g.fillStyle='#151a2c';g.fillRect(0,0,MMS,MMS);g.save();if(rot){g.translate(MMS/2,MMS/2);g.rotate(th);g.translate(-MMS/2,-MMS/2)}
 g.imageSmoothingEnabled=false;g.drawImage(MMC,(-fx*OC-(R2-MMR))*k,(-fy*OC-(R2-MMR))*k,N*OC*k,N*OC*k);
 g.lineCap='round';g.lineJoin='round';
 DH.q(car.x-R2,car.y-R2,car.x+R2,car.y+R2,function(sp){var r=sp.r;g.strokeStyle='#e89a3a';g.lineWidth=Math.max(2,r.hw*2*k);g.beginPath();for(var i=sp.i;i<=sp.j;i+=2){var X=(wd(r.xs[sp.i],car.x)+r.xs[i]-r.xs[sp.i])*k+MMS/2,Y=(wd(r.ys[sp.i],car.y)+r.ys[i]-r.ys[sp.i])*k+MMS/2;if(i===sp.i)g.moveTo(X,Y);else g.lineTo(X,Y)}g.stroke()});
 g.restore();gpsMini(g,k,MMS,th,rot);
 ZONES.forEach(function(z){var q=mp(wd(z.x,car.x),wd(z.y,car.y)),X=clamp(q[0],6*DPR,MMS-6*DPR),Y=clamp(q[1],6*DPR,MMS-6*DPR);g.fillStyle='#ff5aa0';g.beginPath();g.arc(X,Y,4*DPR,0,TAU);g.fill();g.fillStyle='#fff';g.fillRect(X-1*DPR,Y-1*DPR,2*DPR,2*DPR)});
 g.save();g.translate(MMS/2,MMS/2);g.rotate(car.a+th);g.fillStyle='#fff';g.beginPath();g.moveTo(7*DPR,0);g.lineTo(-5*DPR,-5*DPR);g.lineTo(-2*DPR,0);g.lineTo(-5*DPR,5*DPR);g.closePath();g.fill();g.strokeStyle='#ff4d8d';g.lineWidth=1.5*DPR;g.stroke();g.restore();
 g.fillStyle='#fff';g.font=(11*DPR)+'px TokyoPx,monospace';g.textAlign='center';g.textBaseline='middle';var nr=MMS/2-9*DPR,nx=MMS/2+(0*ct+st)*nr,ny=MMS/2+(0*st-ct)*nr;
 if(rot){g.fillStyle='rgba(20,16,40,.8)';g.beginPath();g.arc(nx,ny,7*DPR,0,TAU);g.fill();g.fillStyle='#fff'}g.fillText('N',nx,ny);g.textAlign='start';g.textBaseline='alphabetic';todMini(g);
}
var MMCOL={0:[78,76,104],1:[150,160,196],2:[44,96,184],3:[52,112,72],4:[110,112,136],5:[28,62,42],6:[54,52,74],7:[96,96,120],8:[96,96,120]};
function openMap(){
 if(!MAPC){MAPC=mkCanvas(ON,ON);var g=MAPC.getContext('2d'),id=g.createImageData(ON,ON),d=id.data;for(var i=0;i<ON*ON;i++){var c=MMCOL[OCC[i]]||MMCOL[0];d[i*4]=c[0];d[i*4+1]=c[1];d[i*4+2]=c[2];d[i*4+3]=255}g.putImageData(id,0,0);g.lineCap='round';EXPS.concat(RAMPS).forEach(function(r){g.strokeStyle='#e89a3a';g.lineWidth=r.hw*2/OC;g.beginPath();var px=null;for(var i=0;i<r.n;i+=3){var X=wrap(r.xs[i])/OC,Y=wrap(r.ys[i])/OC;if(px===null||Math.abs(X-px[0])>50||Math.abs(Y-px[1])>50)g.moveTo(X,Y);else g.lineTo(X,Y);px=[X,Y]}g.stroke()})}
 var m=$('map'),c=$('mapc'),s=Math.floor(Math.min(innerWidth-12,innerHeight-150)*DPR);c.width=s;c.height=s;c.style.width=(s/DPR)+'px';c.style.height=(s/DPR)+'px';var g2=c.getContext('2d');g2.imageSmoothingEnabled=false;g2.drawImage(MAPC,0,0,s,s);var k=s/WS;
 var LN={castle:'Замок',sensoji:'Сэнсо-дзи',ferris:'Колесо',skytree:'Скайтри',tstation:'Вокзал',sumo:'Сумо',daibutsu:'Будда',tower:'Башня',pagoda:'Пагода',jgarden:'Сад',senbon:'Тории',onsen:'Онсэн',stad:'Стадион'};g2.font=(9*DPR)+'px monospace';SPEC.forEach(function(s){var n=LN[s.k];if(!n)return;var X=(s.x+s.w/2)*k,Y=(s.y+s.h/2)*k;g2.fillStyle='#ffd23a';g2.fillRect(X-2*DPR,Y-2*DPR,4*DPR,4*DPR);g2.fillStyle='rgba(255,240,200,.85)';g2.fillText(n,X+4*DPR,Y+3*DPR)});
 g2.font='bold '+(11*DPR)+'px monospace';ZONES.forEach(function(z){g2.fillStyle='#ff5aa0';g2.beginPath();g2.arc(z.x*k,z.y*k,6*DPR,0,TAU);g2.fill();g2.fillStyle='#fff';g2.fillText(z.name+(S.best[z.id]?' '+S.best[z.id]:''),z.x*k+8*DPR,z.y*k+4*DPR)});
 gpsMap(g2,k,DPR);
 if(car){g2.save();g2.translate(car.x*k,car.y*k);g2.rotate(car.a);g2.fillStyle='#fff';g2.beginPath();g2.moveTo(10*DPR,0);g2.lineTo(-7*DPR,-7*DPR);g2.lineTo(-3*DPR,0);g2.lineTo(-7*DPR,7*DPR);g2.closePath();g2.fill();g2.strokeStyle='#ff4d8d';g2.lineWidth=2*DPR;g2.stroke();g2.restore()}
 m.style.display='flex';gpsUI();
}

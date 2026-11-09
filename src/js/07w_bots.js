// ===== smarter rivals: they look ahead, go round slower cars instead of shoving them, back out when stuck,
// and an off-screen rival that is wedged is put back on its line =====
function rivOnRoad(x,y,l){if(l){var di=deckInfo(x,y);return di.inside&&di.h>.3}if(ptInBld(x,y))return false;var t=typeAt(x,y);return t===0||t===1}
// the whole width of the car must fit: centre and both sides
function rivFits(x,y,l,nx,ny,hw){return rivOnRoad(x,y,l)&&rivOnRoad(x+nx*hw,y+ny*hw,l)&&rivOnRoad(x-nx*hw,y-ny*hw,l)}
// everything is measured along the rival's own path: s = distance along it, lat = sideways from it (so bends are handled)
var RVT=[0,0,0];
function rivLatAt(r,x,y,s){rivAt(r,s,RVT);return wd(x,RVT[0])*-Math.sin(RVT[2])+wd(y,RVT[1])*Math.cos(RVT[2])}
// the cars around a rival: the nearest one in front in our lane, and one right beside us
function rivAhead(r,look,skip,meLat){var c=r.c,best=null,side=null,cl=c.l|0,h=c.sp>40?Math.atan2(c.vy,c.vx):c.a,fx=Math.cos(h),fy=Math.sin(h);
 function cand(x,y,vx,vy,hx,hy,o){var dx=wd(x,c.x),dy=wd(y,c.y);if(Math.abs(dx)>look+40||Math.abs(dy)>look+40)return;var f=dx*fx+dy*fy;if(f<-c.hx-hx-4||f>look)return;
  var lat=rivLatAt(r,x,y,r.P+Math.max(0,f)),w=c.hy+hy+7,ov=vx*fx+vy*fy;
  if(f>2&&Math.abs(lat-meLat)<=w+2){if(!best||f<best.f)best={f:f,lat:lat,ov:ov,w:w,hx:hx,o:o}}
  else if(Math.abs(f)<c.hx+hx+4&&Math.abs(lat-meLat)<w+10){if(!side||Math.abs(lat-meLat)<Math.abs(side.lat-meLat))side={f:f,lat:lat,ov:ov,w:w,hx:hx,o:o}}}
 if(skip!=='p'&&(car.l|0)===cl&&mode==='game')cand(car.x,car.y,car.vx,car.vy,car.hx,car.hy,'p');
 for(var i=0;i<RIV.length;i++){var R=RIV[i];if(R===r||R.wait||!R.c||(R.c.l|0)!==cl||R.atk2&&R.tgt===r)continue;cand(R.c.x,R.c.y,R.c.vx,R.c.vy,R.c.hx,R.c.hy,R)}
 for(i=0;i<AI.length;i++){var a=AI[i];if((a.l|0)!==cl||a.fd)continue;var vx=a.phy?a.vx:Math.cos(a.a)*a.v,vy=a.phy?a.vy:Math.sin(a.a)*a.v;cand(a.x,a.y,vx,vy,a.hx,a.hy,a)}
 if(best)best.side=side;else if(side)best={side:side,f:1e9};return best}
// is the line at sideways offset L free of cars and on the road from s0 to s1 (path distances)?
function rivLineFree(r,s0,s1,L,ign){var c=r.c,l=c.l|0;for(var s=s0;s<=s1;s+=14){rivAt(r,s,RVT);var nx=-Math.sin(RVT[2]),ny=Math.cos(RVT[2]),x=RVT[0]+nx*L,y=RVT[1]+ny*L;if(!rivFits(x,y,l,nx,ny,c.hy+(l?7:4)+Math.min(8,c.sp*.025)))return false;
  if(ign!=='p'&&(car.l|0)===l&&Math.hypot(wd(car.x,x),wd(car.y,y))<c.hy+car.hy+6)return false;
  for(var i=0;i<RIV.length;i++){var R=RIV[i];if(R===r||!R.c||(R.c.l|0)!==l)continue;if(Math.hypot(wd(R.c.x,x),wd(R.c.y,y))<c.hy+R.c.hy+6)return false}
  for(i=0;i<AI.length;i++){var a=AI[i];if((a.l|0)!==l||Math.abs(wd(a.x,x))>26||Math.abs(wd(a.y,y))>26)continue;if(Math.hypot(wd(a.x,x),wd(a.y,y))<c.hy+a.hy+6)return false}}
 return true}
function rivSense(r,dt){var c=r.c;r.vcap=-1;r.brk=0;if(r.lo==null)r.lo=0;if(!r.pts||c===car)return;
 // rammers and hunters want the contact with you; they still drive round traffic
 var hunter=r.ram||r.hunt||r.atk2||r.block&&r.bon,ign=hunter?'p':'';
 r.ovT=(r.ovT||0)-dt;
 var sp=c.sp,look=34+sp*.62,me=rivLatAt(r,c.x,c.y,r.P);
 var B=sp>25?rivAhead(r,look,ign,me):null;
 var S=B&&B.side;if(S&&(S.o==='p'&&(r.ign>TIME||hunter)))S=null;
 if(B&&B.f>1e8)B=null;
 if(B&&(B.o==='p'&&r.ign>TIME||B.o===r.ignO&&r.ignT>TIME))B=null;
 var tgt=r.ovT>0?r.loT:0;
 // somebody right beside us: keep a car's width of air between us instead of steering into them
 if(S){var away=S.lat>me?S.lat-(S.w+9):S.lat+(S.w+9);if(Math.abs(away)<=48&&rivLineFree(r,r.P,r.P+30,away,ign)){tgt=away;r.loT=away;r.ovT=Math.max(r.ovT,.5);r.ovO=S.o}else if(S.f>0)r.vcap=Math.max(0,S.ov-25)}
 if(B){var closing=sp-B.ov;
  if(closing>-8||B.f<c.hx+B.hx+10){
   // go round: the side away from the car in front first, then the other side
   var side=B.lat>me?-1:1,opts=[B.lat+side*(B.w+6),B.lat-side*(B.w+6)],ok=null;
   if(r.ovT>0&&r.ovO===B.o)ok=r.loT;
   else if(!c.dr)for(var k=0;k<2&&ok==null;k++){var L=opts[k];if(Math.abs(L)>48)continue;if(rivLineFree(r,r.P-6,r.P+B.f+34,L,ign)&&rivLineFree(r,r.P+8,r.P+Math.max(20,B.f-10),(L+me)/2,ign))ok=L}
   if(ok!=null){if(!(r.ovT>0&&r.ovO===B.o)){r.loT=ok;r.ovO=B.o;r.ovT=1.1}tgt=r.loT}
   else{
    // nowhere to go: follow it, closer and slower the nearer it is; a car standing still in the way gets a nudge after a while
    var gap=B.f-(c.hx+B.hx),cap=Math.max(0,B.ov+Math.max(0,gap-14)*1.6);r.vcap=r.vcap>=0?Math.min(r.vcap,cap):cap;if(gap<20&&closing>30)r.brk=clamp(closing/160,.3,1);
    if(B.ov<20){r.blk=(r.blk||0)+dt;if(r.blk>2.2){if(B.o==='p')r.ign=TIME+2.5;else{r.ignO=B.o;r.ignT=TIME+3}r.blk=0;r.vcap=-1;r.brk=0}}else r.blk=0}}}
 else r.blk=0;
 // back to the racing line only when it is clear
 if(r.ovT<=0&&Math.abs(r.lo)>1&&!rivLineFree(r,r.P+10,r.P+46,0,ign))tgt=r.lo;
 r.lo+=(tgt-r.lo)*Math.min(1,dt*(sp>220?1.8:2.6))}
// ---- stuck: back out (any rival, whoever drives it), and an off-screen rival that stays stuck jumps back onto its path
function rivUnstickIn(r,dt,I){var c=r.c;
 // (an autopilot driving your own car — only test tools do that — keeps the old simple back-out)
 if(c===car){if(r.stuck>.6){r.rev=.8;r.stuck=0}if(r.rev>0){r.rev-=dt;return{s:(r.err||0)>0?-1:1,t:0,b:1,h:0}}return I}
 if(r.wait||r.out||r.stun>0){r.stk=0;r.unst=0;return I}
 r.lastT=I.t;
 if(r.unst>0){r.unst-=dt;var tx,ty;if(r.pts){var T=[0,0,0];rivAt(r,r.P+50,T);tx=T[0];ty=T[1]}else{tx=car.x;ty=car.y}
  var err=angd(Math.atan2(wd(ty,c.y),wd(tx,c.x)),c.a);return{s:(err>0?-1:1)*(r.unN&1?-1:1)*(Math.abs(err)>.25?1:.4),t:0,b:1,h:0}}
 return I}
var _rivAIw=rivAI;rivAI=function(r,dt){var I=_rivAIw(r,dt);return rivUnstickIn(r,dt,I)};
function rivUnstick(r,dt){var c=r.c;if(!c||r.wait||r.out||r.stun>0||!ST.act){r.stk=0;return}
 var want=(r.lastT||0)>.3&&!(r.unst>0);
 r.stk=c.sp<22&&want?(r.stk||0)+dt:0;
 r.stT=c.sp<22?(r.stT||0)+dt:Math.max(0,(r.stT||0)-dt*2);
 if(r.stk>.75){r.stk=0;r.unst=.85;r.unN=(r.unN||0)+1}
 var off=Math.abs(wd(c.x,cam.x))>VW/2+50||Math.abs(wd(c.y,cam.y))>VH/2+50;
 if(r.pts&&r.stT>(off?2.6:7)&&(r.unN||0)>=2){var T=[0,0,0],d=r.P+40;for(var k=0;k<6;k++){rivAt(r,d,T);if(Math.hypot(wd(T[0],car.x),wd(T[1],car.y))>40&&rivOnRoad(T[0],T[1],c.l|0))break;d+=30}
  c.x=T[0];c.y=T[1];c.a=T[2];c.vx=c.vy=c.w=0;c.dr=false;r.x=c.x;r.y=c.y;r.a=c.a;r.P=d;r.stT=0;r.unN=0;r.unst=0;r.tpN=(r.tpN||0)+1}
 if(c.sp>60)r.unN=0}
var _ruW=rivUpdate;rivUpdate=function(dt){_ruW(dt);for(var i=0;i<RIV.length;i++)rivUnstick(RIV[i],dt)};

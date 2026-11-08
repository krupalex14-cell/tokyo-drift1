// ===== rival cars: real physics + autopilot along a path (bosses, races) =====
var RIV=[];
function rivMake(o){var ci=o.car|0,C=CARS[ci],c={x:wrap(o.x),y:wrap(o.y),a:o.a||0,vx:0,vy:0,w:0,st:0,dr:false,drT:0,spin:0,l:0,hx:C.hx,hy:C.hy,P:carParams(ci,o.parts||[1,1,1]),sp:0,slip:0,fw:0,surf:1,under:false,m:C.m||1,tail:0};
 var r={rem:true,riv:true,id:o.id||('riv'+RIV.length),name:o.name||'',col:o.tag||'#ffd23a',c:c,car:ci,spr:playerSprite(ci,BODYC[o.col|0],STRC[o.str|0]),glow:o.glow|0,
  pts:o.pts,loop:!!o.loop,pi:0,P:0,hb:0,cool:.5,vmax:o.vmax||300,drift:o.drift==null?1:o.drift,wait:!!o.wait,wp:[null,null],x:c.x,y:c.y,a:c.a,l:0,vx:0,vy:0,d:0,b:0,sl:0,sp:0,vis:true};
 rivPath(r,o.pts,o.loop);RIV.push(r);return r}
function rivPath(r,pts,loop){if(!pts||pts.length<2)return;var P=pts.slice();if(loop)P.push(P[0]);var cum=[0];for(var i=1;i<P.length;i++){var dx=wd(P[i][0],P[i-1][0]),dy=wd(P[i][1],P[i-1][1]);cum.push(cum[i-1]+Math.hypot(dx,dy))}
 r.pts=P;r.cum=cum;r.L=cum[cum.length-1];r.loop=loop;r.pi=0;r.P=0}
function rivClear(){RIV=[]}
function rivAt(r,d,out){var P=r.pts,C=r.cum,n=P.length;if(r.loop){d=((d%r.L)+r.L)%r.L}else d=clamp(d,0,r.L);var i=0;while(i<n-2&&C[i+1]<d)i++;var sl=(C[i+1]-C[i])||1,t=clamp((d-C[i])/sl,0,1),a=P[i],b=P[i+1],dx=wd(b[0],a[0]),dy=wd(b[1],a[1]);out[0]=a[0]+dx*t;out[1]=a[1]+dy*t;out[2]=Math.atan2(dy,dx);return out}
function rivAI(r,dt){var c=r.c,I={s:0,t:1,b:0,h:0},P=r.pts;if(!P)return I;var n=P.length,best=1e18,bi=r.pi,bt=0;
 for(var k=-3;k<40;k++){var i=r.pi+k;if(r.loop)i=((i%(n-1))+(n-1))%(n-1);else if(i<0||i>=n-1)continue;var p0=P[i],p1=P[i+1],ex=wd(p1[0],p0[0]),ey=wd(p1[1],p0[1]),l2=ex*ex+ey*ey||1,dx=wd(c.x,p0[0]),dy=wd(c.y,p0[1]),t=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*t,qy=dy-ey*t,d=qx*qx+qy*qy;if(d<best){best=d;bi=i;bt=t}}
 r.pi=bi;r.P=r.cum[bi]+(r.cum[bi+1]-r.cum[bi])*bt;
 if(!r.loop&&r.L-r.P<20){I.t=0;I.b=1;return I}
 var sp=c.sp,T=[0,0,0],A=[0,0,0],B=[0,0,0];
 rivAt(r,r.P+24+sp*.2,T);var head=c.dr?Math.atan2(c.vy,c.vx):c.a,err=angd(Math.atan2(wd(T[1],c.y),wd(T[0],c.x)),head);
 I.s=clamp(err*(c.dr?2.2:2.8),-1,1);
 rivAt(r,r.P+10,A);var mt=0,md=0;for(var d2=40;d2<=60+sp*.9;d2+=20){rivAt(r,r.P+d2,B);var tt=angd(B[2],A[2]);if(Math.abs(tt)>Math.abs(mt)){mt=tt;md=d2}}
 var vt=Math.min(r.vmax,(Math.abs(mt)>1.2?175:Math.abs(mt)>.7?215:Math.abs(mt)>.35?270:330)*(r.sk||1));r.cool-=dt;
 if(!c.dr){if(sp>vt+25){I.t=0;I.b=clamp((sp-vt)/120,.3,1)}else if(sp>vt)I.t=.3;
  if(r.drift&&r.cool<=0&&sp>120&&Math.abs(mt)>.42&&md<90+sp*.25){r.hb=.16+Math.min(.22,Math.abs(mt)*.1);r.cool=.9}}
 else{I.t=Math.abs(err)>.9?.3:.85;if(r.drift&&Math.abs(mt)>.3&&Math.abs(err)<.8&&sp>110)I.h=1}
 if(r.hb>0){r.hb-=dt;I.h=1;I.b=0;I.t=1;I.s=mt>0?1:-1}
 if(r.stuck>.6){r.rev=.8;r.stuck=0}if(r.rev>0){r.rev-=dt;I.t=0;I.b=1;I.h=0;I.s=err>0?-1:1}
 return I}
// rivals use the normal collision code; keep its scoring side effects away from the player
function rivUpdate(dt){if(!RIV.length)return;
 for(var i=0;i<RIV.length;i++){var r=RIV[i],c=r.c;if(r.wait){r.x=c.x;r.y=c.y;r.a=c.a;continue}
  var I=rivAI(r,dt),sv={pend:run.pend,score:run.score,msg:run.msg,mt:run.mt,coins:S.coins,cm:COLL.max,ch:COLL.hit,cx:COLL.px,cy:COLL.py,ah:AIHIT};
  var hm=0;for(var n=0;n<3;n++){physStep(c,I,dt/3);layerUpdate(c);collide(c);if(COLL.max>hm)hm=COLL.max}r.hm=hm;
  run.pend=sv.pend;run.score=sv.score;run.msg=sv.msg;run.mt=sv.mt;S.coins=sv.coins;COLL.max=sv.cm;COLL.hit=sv.ch;COLL.px=sv.cx;COLL.py=sv.cy;AIHIT=sv.ah;
  r.stuck=c.sp<25?(r.stuck||0)+dt:0;
  r.x=c.x;r.y=c.y;r.a=c.a;r.vx=c.vx;r.vy=c.vy;r.l=c.l|0;r.d=c.dr?1:0;r.b=I.b>.2?1:0;r.sl=c.slip;r.sp=c.sp;remFx(r,dt)}
 for(var a=0;a<RIV.length;a++)for(var b=a+1;b<RIV.length;b++){var A=RIV[a].c,B=RIV[b].c;if((A.l|0)!==(B.l|0)||RIV[a].wait||RIV[b].wait)continue;var ddx=wd(B.x,A.x),ddy=wd(B.y,A.y);if(ddx*ddx+ddy*ddy<1600)satPair(A,B,.25,.38)}}
function rivDraw(z){for(var i=0;i<RIV.length;i++){var r=RIV[i];if((r.l|0)!==z)continue;var sp=r.spr,x=SX(r.x),y=SY(r.y),w=sp.width,h=sp.height;if(x<-70||y<-70||x>VW+70||y>VH+70)continue;
 var ra=Math.round(r.a/(Math.PI/32))*(Math.PI/32);cx.save();cx.translate(x+2,y+3);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(-w/2,-h/2,w,h);cx.restore();
 cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(sp,-w/2,-h/2);vehLights({bk:r.b,x:r.x,phy:0,tn:0,vt:-1},sp,false);cx.restore()}}
// rival <-> player contact pushes both cars for real
function rivCollide(c){var near=99;for(var i=0;i<RIV.length;i++){var r=RIV[i],o=r.c;if((o.l|0)!==(c.l|0))continue;var dx=wd(o.x,c.x),dy=wd(o.y,c.y);if(Math.abs(dx)>60||Math.abs(dy)>60)continue;var dd=Math.hypot(dx,dy)-o.hx-c.hx*.6;if(dd<near)near=dd;satPair(c,o,.25,.38)}return near}
function rivTags(){var box=$('ntags');if(!box)return;var cr=cv.getBoundingClientRect(),W=innerWidth,H=innerHeight;
 for(var i=0;i<RIV.length;i++){var r=RIV[i],e=$('rt'+r.id);if(mode!=='game'||!r.name){if(e)e.remove();continue}
  if(!e){e=document.createElement('div');e.id='rt'+r.id;e.className='ntag';e.innerHTML='<b></b><i></i>';box.appendChild(e)}
  var q=scrXY(r.x,r.y),X=cr.left+q[0]/RVW*cr.width,Y=cr.top+q[1]/RVH*cr.height,x0=24,x1=W-24,y0=150,y1=H-230,off=X<x0||Y<y0-60||X>x1||Y>H-60;e.style.color=r.col;
  if(off){var cx0=(x0+x1)/2,cy0=(y0+y1)/2,dx=X-cx0,dy=Y-cy0,s=Math.min((x1-x0)/2/Math.max(1,Math.abs(dx)),(y1-y0)/2/Math.max(1,Math.abs(dy)));X=cx0+dx*s;Y=cy0+dy*s;e.className='ntag off';e.lastChild.style.transform='rotate('+(Math.atan2(dy,dx)+Math.PI/2)+'rad)';e.lastChild.textContent='▲';e.firstChild.textContent=L(r.name)+' '+Math.round(Math.hypot(wd(r.x,car.x),wd(r.y,car.y))/4)+L('м')}
  else{e.className='ntag';e.lastChild.textContent='▼';e.lastChild.style.transform='';e.firstChild.textContent=L(r.name);Y-=22}
  e.style.left=Math.round(X)+'px';e.style.top=Math.round(Y)+'px'}
 var ch=box.querySelectorAll('[id^=rt]');for(var k=0;k<ch.length;k++){var id=ch[k].id.slice(2),f=false;for(var j=0;j<RIV.length;j++)if(RIV[j].id===id)f=true;if(!f)ch[k].remove()}}
var _dsRiv=drawSmoke;drawSmoke=function(z){if(RIV.length&&mode==='game')rivDraw(z);_dsRiv(z)};
var _coRiv=collide;collide=function(c){var n=_coRiv(c);if(RIV.length&&mode==='game'&&c===car)n=Math.min(n,rivCollide(c));return n};
var _huRiv=hud;hud=function(dt){_huRiv(dt);rivTags()};
var _dmRiv=drawMini;drawMini=function(){_dmRiv();if(!RIV.length||!MMCX)return;var g=MMCX,k=MMS/(2*MMR),th=camRot()?-Math.PI/2-(cam.a||0):0,ct=Math.cos(th),st=Math.sin(th),D=DPR;
 RIV.forEach(function(r){var dx=wd(r.x,car.x),dy=wd(r.y,car.y),X=clamp(MMS/2+(dx*ct-dy*st)*k,5*D,MMS-5*D),Y=clamp(MMS/2+(dx*st+dy*ct)*k,5*D,MMS-5*D);g.fillStyle='#12141d';g.fillRect(X-4*D,Y-4*D,8*D,8*D);g.fillStyle=r.col;g.fillRect(X-3*D,Y-3*D,6*D,6*D)})};

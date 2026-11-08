// ===== roundabout zones: racing line, points for staying close to it =====
var RING_LOBES=3,RING_PTS=2.0,RING_TOL=26;
function ringOf(z){if(z.line!==undefined)return z.line;var n=z.node;if(!n||n.t!=='round'){z.line=null;return null}
 var mid=(n.R+n.Ri)/2,A=Math.max(6,(n.R-n.Ri)/2-13),ph=hsh(n.x|0,n.y|0,7)*TAU,N=240,pts=[];
 for(var i=0;i<N;i++){var th=i/N*TAU,r=mid+A*Math.sin(RING_LOBES*th+ph);pts.push([n.x+Math.cos(th)*r,n.y+Math.sin(th)*r])}
 z.line={cx:n.x,cy:n.y,mid:mid,A:A,ph:ph,pts:pts,N:N};return z.line}
function ringR(L,th){return L.mid+L.A*Math.sin(RING_LOBES*th+L.ph)}
// signed distance from the line (+ outside) and the car's angle
function ringDist(L,x,y){var dx=wd(x,L.cx),dy=wd(y,L.cy),th=Math.atan2(dy,dx);return{d:Math.hypot(dx,dy)-ringR(L,th),th:th}}
function ringScore(dt){var z=ZS.z,RL=ringOf(z);if(!RL)return;
 var q=ringDist(RL,car.x,car.y),ad=Math.abs(q.d);
 if(ZS.th==null){ZS.th=q.th;ZS.acc=0;ZS.max=0;ZS.f=0;ZS.fs=0;ZS.lap=0}
 var dth=angd(q.th,ZS.th);ZS.th=q.th;
 var f=car.l===z.l?Math.pow(clamp(1-(ad-4)/RING_TOL,0,1),1.3):0;ZS.f=f;ZS.fs+=(f-ZS.fs)*Math.min(1,dt*6);
 // only forward (clockwise) progress beyond the furthest point reached earns points
 ZS.acc+=dth;if(ZS.acc>ZS.max){var g=ZS.acc-ZS.max;ZS.max=ZS.acc;ZS.score+=g*ringR(RL,q.th)*f*RING_PTS;var lp=Math.floor(ZS.max/TAU);if(lp>ZS.lap){ZS.lap=lp;flash(L('круг')+' '+lp+'!',1)}}
 ZS.back=ZS.acc<ZS.max-.35}
var _bkRing=bank;bank=function(){if(ZS&&ZS.z.line&&run.pend>0){var sv=ZS.score;_bkRing();ZS.score=sv}else _bkRing()};
var _zrRing=zoneRun;zoneRun=function(dt){if(ZS&&ZS.z.line&&ZS.ph==='go')ringScore(dt);_zrRing(dt)};
// draw the line on the asphalt: dots, with a bright pulse flowing clockwise; near the car the dots light cyan
function ringDraw(z,act){var L=ringOf(z);if(!L)return;var x0=SX(L.cx),y0=SY(L.cy),R=L.mid+L.A+6;if(x0<-R||y0<-R||x0>VW+R||y0>VH+R)return;
 var N=L.N,ph=(TIME*(act?.5:.25))%1,cth=act?ringDist(L,car.x,car.y).th:null;
 cx.fillStyle='rgba(16,8,28,'+(act?.45:.25)+')';for(var i0=0;i0<N;i0+=2){var p0=L.pts[i0];cx.fillRect(Math.round(x0+p0[0]-L.cx)-2,Math.round(y0+p0[1]-L.cy)-2,4,4)}
 for(var i=0;i<N;i++){var p=L.pts[i],x=Math.round(x0+p[0]-L.cx),y=Math.round(y0+p[1]-L.cy),u=((i/N-ph)%1+1)%1,w=(u*RING_LOBES*2)%1,
  near=cth!=null&&Math.abs(angd(i/N*TAU,cth))<.5;
  cx.fillStyle=near?'rgba(110,231,255,'+(act?.95:.5)+')':w<.18?'rgba(255,240,250,'+(act?.95:.55)+')':'rgba(255,90,160,'+(act?.95:.5)+')';cx.fillRect(x-1,y-1,2,2)}
 // chevrons every third of the ring point the way
 for(var k=0;k<6;k++){var j=Math.floor((k/6+ph/6)*N)%N,a=L.pts[j],b=L.pts[(j+3)%N],an=Math.atan2(b[1]-a[1],b[0]-a[0]),X=x0+a[0]-L.cx,Y=y0+a[1]-L.cy;
  cx.save();cx.translate(Math.round(X),Math.round(Y));cx.rotate(an);cx.fillStyle=act?'#fff':'rgba(255,255,255,.6)';cx.fillRect(-2,-3,2,2);cx.fillRect(0,-1,2,2);cx.fillRect(-2,1,2,2);cx.restore()}}
function ringGlow(a){if(a<=.05)return;ZONES.forEach(function(z){if(!z.line||(ZS&&ZS.z!==z))return;var L=z.line,x0=SX(L.cx),y0=SY(L.cy),R=L.mid+L.A+6;if(x0<-R||y0<-R||x0>VW+R||y0>VH+R)return;
 for(var i=0;i<L.N;i+=6){var p=L.pts[i];gl(x0+p[0]-L.cx,y0+p[1]-L.cy,5,5,[255,90,160],a*(ZS?.55:.3))}})}
var _edRing=emisDraw;emisDraw=function(a){_edRing(a);ringGlow(a)};
var _dzRing=drawZones;drawZones=function(l){if(l===0)ZONES.forEach(function(z){if(z.l!==0)return;ringOf(z);if(!z.line)return;var act=ZS&&ZS.z===z;if(ZS&&!act)return;ringDraw(z,act)});_dzRing(l)};
// HUD: accuracy meter for the line zones
var _zhRing=zHud;zHud=function(){_zhRing();if(!ZS||ZS.ph!=='go'||!ZS.z.line)return;var zb=$('zb'),p=Math.round((ZS.fs||0)*100),c=p>80?'#6ee7ff':p>40?'#ffd23a':'#ff6b6b';
 zb.insertAdjacentHTML('beforeend','<div class="zacc"><span>'+L('линия')+'</span><i><b style="width:'+p+'%;background:'+c+'"></b></i><em style="color:'+c+'">'+p+'%</em></div>'+(ZS.back?'<div class="zw">'+L('Не в ту сторону!')+'</div>':''))};
var _gzRing=genZones;genZones=function(){_gzRing();ZONES.forEach(function(z){if(z.node&&z.node.t==='round')z.tg=[3000,6000,9000]})};

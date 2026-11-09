// ===== the show: the drift arena by the bamboo grove (stands, a crowd, floodlights, donut cars), spectators at races, rivals' tyre smoke, a respawn button, the story clock =====
// ---- the arena is cut out of the forest right after the world is built (map-editor brushes: asphalt, trees hidden), before any chunk is baked
var ARENA=null;
function arenaBuild(){var z=null,i;for(i=0;i<ZONES.length;i++)if(ZONES[i].id==='tg1')z=ZONES[i];if(!z)return;
 // the same grove chapter 4 talks about: the one closest to the old onsen under the top of Kumo
 var r0=z.road;r0.pt(Math.min(r0.len-(r0.zb||0)-40,z.s1+70),TMP);var top={x:TMP[0],y:TMP[1]};
 function near(k,to){var best=null,bd=1e18;SPEC.forEach(function(s){if(s.k!==k)return;var d=Math.hypot(wd(s.x+s.w/2,to.x),wd(s.y+s.h/2,to.y));if(d<bd){bd=d;best=s}});return best}
 var on=near('onsen',top),bb=near('bamboo',on?{x:on.x+on.w/2,y:on.y+on.h/2}:top);if(!bb)return;
 var BC={x:bb.x+bb.w/2,y:bb.y+bb.h/2},G=20,RR=1000,N=Math.ceil(2*RR/G),gx0=BC.x-RR,gy0=BC.y-RR,blk=new Uint8Array(N*N),samp=[];
 function cell(v,o){return Math.floor(wd(v,o)/G)}
 function mark(x0,y0,x1,y1){var a=Math.max(0,cell(x0,gx0)),b=Math.min(N-1,cell(x1,gx0)),c=Math.max(0,cell(y0,gy0)),d=Math.min(N-1,cell(y1,gy0));for(var yy=c;yy<=d;yy++)for(var xx=a;xx<=b;xx++)blk[yy*N+xx]=1}
 var seen=new Set();
 RH.q(gx0,gy0,gx0+2*RR,gy0+2*RR,function(sp){var r=sp.r,a0=Math.max(0,(sp.i-1)*r.ds),a1=Math.min(r.len,(sp.j+1)*r.ds),m=r.hw+(r.sw||0)+8;
  for(var sv=a0;sv<=a1;sv+=8){r.pt(sv,TMP);var x=TMP[0],y=TMP[1];if(Math.abs(wd(x,BC.x))>RR+60||Math.abs(wd(y,BC.y))>RR+60)continue;mark(x-m,y-m,x+m,y+m);
   var key=r.id+':'+Math.round(sv);if((r.k==='art'||r.k==='touge'||(r.k==='loc'&&r.hw>=20))&&sv>(r.za||0)+40&&sv<r.len-(r.zb||0)-40&&!seen.has(key)){seen.add(key);samp.push({x:x,y:y,r:r,s:sv})}}});
 BH.q(gx0,gy0,gx0+2*RR,gy0+2*RR,function(b){if(!b.hid)mark(b.x-6,b.y-6,b.x+b.w+6,b.y+b.h+6)});
 SPEC.forEach(function(s){if(Math.abs(wd(s.x+s.w/2,BC.x))<RR+s.w&&Math.abs(wd(s.y+s.h/2,BC.y))<RR+s.h)mark(s.x-8,s.y-8,s.x+s.w+8,s.y+s.h+8)});
 if(typeof LMH!=='undefined'&&LMH)LMH.q(gx0,gy0,gx0+2*RR,gy0+2*RR,function(it){mark(it.bx0-8,it.by0-8,it.bx1+8,it.by1+8)});
 PONDS.forEach(function(p){if(Math.abs(wd(p.x,BC.x))<RR+p.rx&&Math.abs(wd(p.y,BC.y))<RR+p.ry)mark(p.x-p.rx-10,p.y-p.ry-10,p.x+p.rx+10,p.y+p.ry+10)});
 DH.q(gx0,gy0,gx0+2*RR,gy0+2*RR,function(sp){var r=sp.r;for(var k=Math.max(0,sp.i-1);k<=Math.min(r.n-1,sp.j+1);k++)mark(r.xs[k]-40,r.ys[k]-40,r.xs[k]+40,r.ys[k]+40)});
 for(var cy=0;cy<N;cy++)for(var cx2=0;cx2<N;cx2++)if(inRiver(gx0+cx2*G+G/2,gy0+cy*G+G/2,14))blk[cy*N+cx2]=1;
 var SA=new Int32Array((N+1)*(N+1));for(cy=0;cy<N;cy++)for(cx2=0;cx2<N;cx2++)SA[(cy+1)*(N+1)+cx2+1]=blk[cy*N+cx2]+SA[cy*(N+1)+cx2+1]+SA[(cy+1)*(N+1)+cx2]-SA[cy*(N+1)+cx2];
 function busy(x0,y0,x1,y1){var a=cell(x0,gx0),b=cell(x1,gx0),c=cell(y0,gy0),d=cell(y1,gy0);if(a<0||c<0||b>=N||d>=N)return true;return SA[(d+1)*(N+1)+b+1]-SA[c*(N+1)+b+1]-SA[(d+1)*(N+1)+a]+SA[c*(N+1)+a]>0}
 var best=null,M=50;
 for(var dy=-RR+300;dy<=RR-300;dy+=40)for(var dx=-RR+300;dx<=RR-300;dx+=40){var X=BC.x+dx,Y=BC.y+dy;[[440,300],[300,440]].forEach(function(dm){var w=dm[0],h=dm[1],x0=X-w/2,y0=Y-h/2,x1=X+w/2,y1=Y+h/2;if(busy(x0-M,y0-M,x1+M,y1+M))return;
   var acc=null;for(var q=0;q<samp.length;q++){var o=samp[q],px=X+wd(o.x,X),py=Y+wd(o.y,Y),ex=Math.max(x0-px,0,px-x1),ey=Math.max(y0-py,0,py-y1),d=Math.hypot(ex,ey)-o.r.hw;if(d>150)continue;if(!acc||d<acc.d)acc={d:d,o:o,px:px,py:py}}
   if(!acc)return;var sc=Math.hypot(dx,dy)+acc.d*2.5;if(!best||sc<best.sc)best={sc:sc,x0:x0,y0:y0,x1:x1,y1:y1,cx:X,cy:Y,acc:acc}})}
 if(!best)return;
 var A={x0:best.x0,y0:best.y0,x1:best.x1,y1:best.y1,cx:best.cx,cy:best.cy,w:best.x1-best.x0,h:best.y1-best.y0,trib:[],poles:[],crowd:[],br:[],E:0},ac=best.acc;
 function brush(x,y,r){var b={t:0,x:wrap(x),y:wrap(y),r:r};EDITB.push(b);edHideUnder(b);A.br.push(b)}
 // trees and lamps on the ground of the arena go away for good (a hidden prop would still be baked and still be solid)
 function clr(x0,y0,x1,y1){PH.q(x0-20,y0-20,x1+20,y1+20,function(p){if(p.ed)return;var px=x0+wd(p.x,x0),py=y0+wd(p.y,y0),m=(p.r||0)+4;if(px>x0-m&&px<x1+m&&py>y0-m&&py<y1+m){p.hid=1;p._ar=1}})}
 for(var yy=A.y0+11;yy<=A.y1-11;yy+=13)for(var xx=A.x0+11;xx<=A.x1-11;xx+=13)brush(xx,yy,11);
 // the way in: from the nearest road straight to the edge of the pad
 var ex2=clamp(ac.px,A.x0+12,A.x1-12),ey2=clamp(ac.py,A.y0+12,A.y1-12),L0=Math.hypot(ac.px-ex2,ac.py-ey2),n0=Math.ceil(L0/10);
 for(i=0;i<=n0;i++)brush(ex2+(ac.px-ex2)*i/n0,ey2+(ac.py-ey2)*i/n0,15);
 var side=ac.px<A.x0?'W':ac.px>A.x1?'E':ac.py<A.y0?'N':'S',opp={N:'S',S:'N',W:'E',E:'W'}[side],adj=(side==='N'||side==='S')?(Math.abs(wd(BC.x,A.x0))<Math.abs(wd(BC.x,A.x1))?'E':'W'):(Math.abs(wd(BC.y,A.y0))<Math.abs(wd(BC.y,A.y1))?'S':'N');
 A.open=side;A.ent={x:wrap(ex2),y:wrap(ey2)};
 // a red-and-white barrier closes the pad all round, with a gap for the way in
 A.bar=[];var T6=6,GAP=26;function bar(x,y,w,h,hz){if(w<2||h<2)return;var b={x:wrap(x),y:wrap(y),w:w,h:h,hid:0,ns:1,c4:1,ht:1};BH.add(b,b.x,b.y,b.x+w,b.y+h);A.bar.push({x:x,y:y,w:w,h:h,hz:hz,b:b});clr(x-4,y-4,x+w+4,y+h+4)}
 [['N',A.x0-T6,A.y0-T6,A.w+2*T6,T6],['S',A.x0-T6,A.y1,A.w+2*T6,T6],['W',A.x0-T6,A.y0,T6,A.h],['E',A.x1,A.y0,T6,A.h]].forEach(function(e){var hz=e[0]==='N'||e[0]==='S';
  if(e[0]!==side){bar(e[1],e[2],e[3],e[4],hz);return}
  if(hz){bar(e[1],e[2],ex2-GAP-e[1],e[4],hz);bar(ex2+GAP,e[2],e[1]+e[3]-ex2-GAP,e[4],hz)}else{bar(e[1],e[2],e[3],ey2-GAP-e[2],hz);bar(e[1],ey2+GAP,e[3],e[2]+e[4]-ey2-GAP,hz)}});
 // the road stop at the gate
 var o=ac.o,rr=o.r;rr.pt(o.s,TMP);var nx=-TMP[3],ny=TMP[2],sd=((ac.px-ex2)*nx+(ac.py-ey2)*ny)>0?-1:1,u=(rr.k==='art'?rr.hw-18:rr.hw*.42)*sd;
 A.stop={x:wrap(TMP[0]+nx*u),y:wrap(TMP[1]+ny*u),a:Math.atan2(TMP[3],TMP[2])};
 [opp,adj].forEach(function(sd2,ti){var D=38,g=8,t;if(sd2==='N')t={x:A.x0+22,y:A.y0-g-D,w:A.w-44,h:D};else if(sd2==='S')t={x:A.x0+22,y:A.y1+g,w:A.w-44,h:D};else if(sd2==='W')t={x:A.x0-g-D,y:A.y0+22,w:D,h:A.h-44};else t={x:A.x1+g,y:A.y0+22,w:D,h:A.h-44};
  t.side=sd2;var b={x:wrap(t.x),y:wrap(t.y),w:t.w,h:t.h,hid:0,ns:1,c4:1,ht:3};BH.add(b,b.x,b.y,b.x+b.w,b.y+b.h);t.b=b;
  clr(t.x-6,t.y-6,t.x+t.w+6,t.y+t.h+6);A.trib.push(t);
  // the crowd: four rows, seats every 8 px, a quarter of them empty; fans of Lyokha (pink) and of Gen (gold)
  var along=(sd2==='N'||sd2==='S'),len=along?t.w:t.h,face=sd2==='N'?Math.PI/2:sd2==='S'?-Math.PI/2:sd2==='W'?0:Math.PI;
  for(var row=0;row<4;row++)for(var k=6;k<len-4;k+=8){var hq=hsh(k,row*7+ti*31,77);if(hq<.22)continue;var dep=8+row*8,px2,py2;
   if(sd2==='N'){px2=t.x+k;py2=t.y+t.h-dep}else if(sd2==='S'){px2=t.x+k;py2=t.y+dep}else if(sd2==='W'){px2=t.x+t.w-dep;py2=t.y+k}else{px2=t.x+dep;py2=t.y+k}
   var tm=hq<.55?'p':hq<.75?'g':'n';A.crowd.push({x:wrap(px2+(hsh(k,row,5)-.5)*2),y:wrap(py2),st:fanSt(hsh(k,row+ti*9,11)),f:face,tm:tm,fl:tm!=='n'&&hsh(k,row,13)<.35,ph:hsh(k,row,17)*TAU,row:row})}});
 A.crowd.sort(function(a,b){return wd(a.y,b.y)});
 [[A.x0-12,A.y0-12],[A.x1+12,A.y0-12],[A.x0-12,A.y1+12],[A.x1+12,A.y1+12]].forEach(function(q){var x=wrap(q[0]),y=wrap(q[1]);clr(x-8,y-8,x+8,y+8);A.poles.push({x:x,y:y})});
 clr(A.x0,A.y0,A.x1,A.y1);for(i=0;i<=n0;i++){var qx=ex2+(ac.px-ex2)*i/n0,qy=ey2+(ac.py-ey2)*i/n0;clr(qx-16,qy-16,qx+16,qy+16)}
 for(i=0;i<PH.c.length;i++){var l=PH.c[i];if(l&&l.some(function(p){return p._ar}))PH.c[i]=l.filter(function(p){return !p._ar})}
 A.x0=wrap(A.x0);A.y0=wrap(A.y0);A.x1=A.x0+A.w;A.y1=A.y0+A.h;A.cx=wrap(A.cx);A.cy=wrap(A.cy);
 ARENA=A}
var _edAV=edApply;edApply=function(){_edAV();if(ARENA)return;try{arenaBuild()}catch(e){ARENA=null}};
// the map editor's eraser rebuilds the brush list from the player's own strokes: put the arena back each time
var _edDV=edDo;edDo=function(e,f){_edDV(e,f);if(ARENA&&EDITB.indexOf(ARENA.br[0])<0)ARENA.br.forEach(function(b){EDITB.push(b);edHideUnder(b)})};
// the stands are not houses: the chunk baker must not draw them (they are drawn live, with the crowd)
var _dBV=drawB;drawB=function(g,b,x,y,an){if(b.c4)return;return _dBV(g,b,x,y,an)};
var _spV=stPlaces;stPlaces=function(){var P=_spV();
 if(ARENA&&(!P.arena||P._arF)){P._arF=0;P.arena={x:ARENA.stop.x,y:ARENA.stop.y,a:ARENA.stop.a,name:{ru:'Арена у бамбука',en:'The bamboo arena'}};P.arenac={x:ARENA.cx,y:ARENA.cy,name:{ru:'Арена у бамбука',en:'The bamboo arena'}}}
 else if(!ARENA&&!P.arena&&P.bamboo){P.arena=P.bamboo;P.arenac=P.bamboo;P._arF=1}return P};
// ---- drawing the arena
function arenaOn(){if(!ARENA)return false;var A=ARENA;return Math.abs(wd(A.cx,cam.x))<VW/2+A.w/2+80&&Math.abs(wd(A.cy,cam.y))<VH/2+A.h/2+80}
function arenaPad(){var A=ARENA,x0=SX(A.x0),y0=SY(A.y0),w=A.w,h=A.h,i;
 cx.fillStyle='rgba(240,240,250,.55)';for(i=0;i<w;i+=10){cx.fillRect(x0+i,y0+3,6,2);cx.fillRect(x0+i,y0+h-5,6,2)}for(i=0;i<h;i+=10){cx.fillRect(x0+3,y0+i,2,6);cx.fillRect(x0+w-5,y0+i,2,6)}
 // painted donut rings and the start box
 cx.fillStyle='rgba(255,111,174,.35)';arenaSpots().map(function(q){return[q[0],q[1],32]}).concat([[.5,.5,60]]).forEach(function(q){var ccx=x0+w*q[0],ccy=y0+h*q[1],R=q[2];for(var a=0;a<TAU;a+=1.6/R)cx.fillRect(Math.round(ccx+Math.cos(a)*R),Math.round(ccy+Math.sin(a)*R),2,2)});
 cx.fillStyle='rgba(255,210,58,.5)';var gx=SX(ARENA.ent.x),gy=SY(ARENA.ent.y);cx.fillRect(gx-10,gy-1,20,2)}
function arenaTrib(t){var x=SX(t.x),y=SY(t.y),w=t.w,h=t.h;if(x>VW+20||y>VH+20||x+w<-20||y+h<-20)return;
 cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(x+4,y+5,w,h);cx.fillStyle='#1a1426';cx.fillRect(x-1,y-1,w+2,h+2);
 var along=t.side==='N'||t.side==='S',k;
 // stepped rows: the far rows are higher (lighter), with a back wall
 for(k=0;k<5;k++){var c=['#5a5468','#6a6478','#7a7488','#8a8498','#4a4458'][k];cx.fillStyle=c;
  if(t.side==='N')cx.fillRect(x,y+h-8-k*8,w,8);else if(t.side==='S')cx.fillRect(x,y+k*8,w,8);else if(t.side==='W')cx.fillRect(x+w-8-k*8,y,8,h);else cx.fillRect(x+k*8,y,8,h)}
 cx.fillStyle='#2a2438';if(t.side==='N')cx.fillRect(x,y,w,3);else if(t.side==='S')cx.fillRect(x,y+h-3,w,3);else if(t.side==='W')cx.fillRect(x,y,3,h);else cx.fillRect(x+w-3,y,3,h);
 // banners along the front rail: pink for Lyokha, gold for Gen
 for(k=8;k<(along?w:h)-10;k+=26){var col=(k/26|0)%3===2?'#ffd23a':'#ff6fae';cx.fillStyle='#14101e';
  if(t.side==='N'){cx.fillRect(x+k-1,y+h-3,14,5);cx.fillStyle=col;cx.fillRect(x+k,y+h-2,12,3)}else if(t.side==='S'){cx.fillRect(x+k-1,y-2,14,5);cx.fillStyle=col;cx.fillRect(x+k,y-1,12,3)}
  else if(t.side==='W'){cx.fillRect(x+w-3,y+k-1,5,14);cx.fillStyle=col;cx.fillRect(x+w-2,y+k,3,12)}else{cx.fillRect(x-2,y+k-1,5,14);cx.fillStyle=col;cx.fillRect(x-1,y+k,3,12)}}}
var FANST=null;function fanSt(h){if(!FANST||!FANST.length){FANST=[];for(var i=0;i<PST_N;i++)if(PSTY[i]&&PSTY[i].k!==3)FANST.push(i);if(!FANST.length)FANST=[0]}return FANST[Math.min(FANST.length-1,Math.floor(h*FANST.length))]}
var FANC={p:'#ff6fae',g:'#ffd23a',r:'#ff4d5a',s:'#9a8cff',c:'#6ee7ff',w:'#f4f4f8'};
function fanDraw(p,E,base){var x=SX(p.x),y=SY(p.y);if(x<-12||y<-20||x>VW+12||y>VH+12)return;var dI=((Math.round(p.f/(TAU/PDIR))%PDIR)+PDIR)%PDIR,j=E>0?Math.round(Math.max(0,Math.sin(TIME*9+p.ph))*2.4*E):0;
 if(base)cx.drawImage(PATL,(dI*4)*PCELL,p.st*PCELL,PCELL,PCELL,x-9,y-9-j,PCELL,PCELL);
 if(p.fl){var wv=Math.round(Math.sin(TIME*6+p.ph)*1.2);cx.fillStyle='#2a2030';cx.fillRect(x+3,y-15-j,1,9);cx.fillStyle=FANC[p.tm]||'#ff6fae';cx.fillRect(x+4,y-15-j+wv,5,3);cx.fillStyle='#14101e';cx.fillRect(x+4,y-12-j+wv,5,1)}
 else if(E>.5&&Math.sin(TIME*9+p.ph)>.3){cx.fillStyle=FANC[p.tm]||'#ffd23a';cx.fillRect(x-3,y-12-j,1,2);cx.fillRect(x+3,y-12-j,1,2)}}
function arenaBar(q){var x=SX(q.x),y=SY(q.y),w=q.w,h=q.h;if(x>VW+10||y>VH+10||x+w<-10||y+h<-10)return;cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x+2,y+3,w,h);cx.fillStyle='#14101e';cx.fillRect(x-1,y-1,w+2,h+2);
 var L=q.hz?w:h;for(var d=0;d<L;d+=10){cx.fillStyle=((d/10)|0)%2?'#e04a4a':'#ecebf2';if(q.hz)cx.fillRect(x+d,y,Math.min(10,L-d),h);else cx.fillRect(x,y+d,w,Math.min(10,L-d))}
 cx.fillStyle='rgba(255,255,255,.35)';if(q.hz)cx.fillRect(x,y,w,1);else cx.fillRect(x,y,1,h)}
function arenaDraw(){if(!arenaOn())return;var A=ARENA;arenaPad();A.bar.forEach(arenaBar);A.trib.forEach(arenaTrib);if(PATL)for(var i=0;i<A.crowd.length;i++)fanDraw(A.crowd[i],A.E,true);
 A.poles.forEach(function(q){var x=SX(q.x),y=SY(q.y);cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x+1,y+1,4,3);cx.fillStyle='#14101e';cx.fillRect(x-1,y-26,4,28);cx.fillStyle='#6a6e7e';cx.fillRect(x,y-25,2,26);cx.fillStyle='#14101e';cx.fillRect(x-5,y-31,12,6);cx.fillStyle='#e8ecf4';cx.fillRect(x-4,y-30,10,4)});
 c4BotsDraw()}
// ---- donut cars for the show (kinematic: they spin around their own spots; you can bump into them)
var C4BOTS=[];
// three donut spots in the corners away from the gate: the middle of the pad is the player's
function arenaSpots(){var A=ARENA;if(A.spots)return A.spots;var c=[[.12,.22],[.88,.22],[.12,.78],[.88,.78]].map(function(q){return{q:q,d:Math.hypot(wd(A.x0+A.w*q[0],A.ent.x),wd(A.y0+A.h*q[1],A.ent.y))}});c.sort(function(a,b){return b.d-a.d});A.spots=c.slice(0,3).map(function(o){return o.q});return A.spots}
function c4BotsSetup(){if(C4BOTS.length||!ARENA)return;var A=ARENA,sp=arenaSpots();[[sp[0][0],sp[0][1],2,6,1,26,0],[sp[1][0],sp[1][1],7,4,-1,26,2],[sp[2][0],sp[2][1],9,2,1,26,1]].forEach(function(q,i){var ci=q[2],spr=playerSprite(ci,BODYC[q[3]],STRC[q[6]%STRC.length]),C=CARS[ci];
  C4BOTS.push({x:A.x0+A.w*q[0],y:A.y0+A.h*q[1],ox:A.x0+A.w*q[0],oy:A.y0+A.h*q[1],R:q[5],th:i*2,dir:q[4],a:0,vx:0,vy:0,w:0,hx:C.hx,hy:C.hy,m:6,l:0,spr:spr,ps:0,wp:[null,null],P:{}})})}
function c4BotsOn(){var c=ST.act||stCur();return !!(ARENA&&ST.mode&&c&&c.id==='e6')}
function c4BotsUpdate(dt){if(!c4BotsOn()){C4BOTS.length=0;return}c4BotsSetup();if(Math.abs(wd(ARENA.cx,car.x))>1200||Math.abs(wd(ARENA.cy,car.y))>1200)return;
 for(var i=0;i<C4BOTS.length;i++){var b=C4BOTS[i];b.ps=Math.max(0,b.ps-dt);var om=b.ps>0?0:2.7;b.th+=om*b.dir*dt;var x=b.ox+Math.cos(b.th)*b.R,y=b.oy+Math.sin(b.th)*b.R,tg=b.th+b.dir*Math.PI/2;
  b.vx=-Math.sin(b.th)*b.R*om*b.dir;b.vy=Math.cos(b.th)*b.R*om*b.dir;b.x=wrap(x);b.y=wrap(y);b.a=tg+b.dir*.95;b.w=0;
  if(om>0){var ca=Math.cos(b.a),sa=Math.sin(b.a);for(var w=0;w<2;w++){var sg=w?1:-1,wx=b.x-ca*(b.hx-4)-sa*sg*(b.hy-2),wy=b.y-sa*(b.hx-4)+ca*sg*(b.hy-2),cur=[wx,wy];if(b.wp[w])skidLine(b.wp[w],cur,0,false);b.wp[w]=cur;
    if(Math.random()<.7)smokePuff(wx,wy,-b.vx*.12+(Math.random()-.5)*24,-b.vy*.12+(Math.random()-.5)*24,2.5,9+Math.random()*5,false,0,.5+Math.random()*.2)}}else b.wp=[null,null]}}
function c4BotsDraw(){for(var i=0;i<C4BOTS.length;i++){var b=C4BOTS[i],sp=b.spr,x=SX(b.x),y=SY(b.y),w=sp.width,h=sp.height;if(x<-40||y<-40||x>VW+40||y>VH+40)continue;var ra=Math.round(b.a/(Math.PI/32))*(Math.PI/32);
 cx.save();cx.translate(x+2,y+3);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(-w/2,-h/2,w,h);cx.restore();cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(sp,-w/2,-h/2);cx.restore()}}
var _coV=collide;collide=function(c){var n=_coV(c);if(c===car&&C4BOTS.length){for(var i=0;i<C4BOTS.length;i++){var b=C4BOTS[i];if(Math.abs(wd(b.x,c.x))>50||Math.abs(wd(b.y,c.y))>50)continue;var x=b.x,y=b.y,im=satPair(c,b,.25,.38);b.x=x;b.y=y;if(im>30)b.ps=1.4}}return n};
// ---- crowd noise: excitement rises while you drift in front of them; they jump, wave and shout
var C4SH=[];
var SHOUT={p:['Ёппарай!','Лёха!','Давай, Сакура!','Ещё дыма!','Боком!','Банзай!'],g:['Гэн — король!','Банзай!','Ещё!'],n:['Уооо!','Красиво!','Ещё!','Дым!'],r:['Рин!','Мори!'],s:['«Тени»!','Сэйдзи!'],t:['Тэцу!','Бульдозер!'],h:['Призрак!'],k:['Кир!']};
function c4ShBox(){var b=$('c4shb');if(b)return b;var g=$('game');if(!g)return null;b=document.createElement('div');b.id='c4shb';b.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;overflow:hidden';g.appendChild(b);return b}
function c4Shout(x,y,txt,col){var box=c4ShBox();if(!box||C4SH.length>7)return;var e=document.createElement('div');e.className='c4sh';e.textContent=L(txt);e.style.color=col||'#fff';box.appendChild(e);C4SH.push({e:e,x:x,y:y,t:0,l:1.5})}
function c4ShoutUpd(dt){var cr=null;for(var i=C4SH.length-1;i>=0;i--){var s=C4SH[i];s.t+=dt;if(s.t>s.l||mode!=='game'){s.e.remove();C4SH.splice(i,1);continue}if(!cr)cr=cvRect();
 var q=scrXY(s.x,s.y),X=cr.left+q[0]/RVW*cr.width,Y=cr.top+q[1]/RVH*cr.height-18-s.t*26;s.e.style.left=Math.round(X)+'px';s.e.style.top=Math.round(Y)+'px';s.e.style.opacity=String(Math.min(1,(s.l-s.t)*2.5))}}
(function(){var st=document.createElement('style');st.textContent='.c4sh{position:fixed;transform:translate(-50%,-50%);font-size:11px;white-space:nowrap;text-shadow:1px 1px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000;pointer-events:none;z-index:2}'+
 '#rsp{display:none;position:absolute;left:50%;transform:translateX(-50%);bottom:calc(150px + env(safe-area-inset-bottom));z-index:3;pointer-events:auto;border:0;width:64px;height:64px;border-radius:50%;background:rgba(23,18,38,.92);box-shadow:0 0 0 3px #7dff8c,0 0 0 6px rgba(125,255,140,.25);color:#7dff8c;padding:0;animation:rspP 1.2s ease-in-out infinite}'+
 '#rsp svg{width:44px;height:44px;display:block;margin:auto}#rspl{display:none;position:absolute;left:50%;transform:translateX(-50%);bottom:calc(126px + env(safe-area-inset-bottom));z-index:3;font-size:11px;color:#7dff8c;text-shadow:1px 1px 0 #000;pointer-events:none;white-space:nowrap}'+
 '@keyframes rspP{50%{box-shadow:0 0 0 3px #7dff8c,0 0 0 10px rgba(125,255,140,.12)}}';document.head.appendChild(st)})();
// ---- spectators at races: little groups along the course; your fans in pink, the rivals' in their colours
var C4FAN={key:null,g:[]};
function fanTeams(){var t=['p','p','p'],m=ST.act;RIV.forEach(function(R){var id=R.id;t.push(id==='rin'||id==='shizuka'?'r':id==='seiji'||/^sh|^b[0-9]/.test(id)?'s':id==='tetsu'?'t':id==='gen'?'g':id==='ghost'?'n':id==='kir'?'c':'n')});if(t.length<5)t.push('n','g','s');return t}
function fanOnRoad(x,y){var on=false;RH.q(x-80,y-80,x+80,y+80,function(sp){if(on)return;var r=sp.r;if(r.k==='exp'||r.k==='ramp')return;var m=r.hw+3;
  if(r.k==='loc'){var x0=r.xs[0],y0=r.ys[0],ux=(r.xs[1]-x0)/r.len,uy=(r.ys[1]-y0)/r.len,dx=wd(x,x0),dy=wd(y,y0),t=clamp(dx*ux+dy*uy,0,r.len);if(Math.hypot(dx-ux*t,dy-uy*t)<m)on=true;return}
  for(var k=Math.max(0,sp.i-1);k<=Math.min(r.n-1,sp.j+1);k++)if(Math.hypot(wd(r.xs[k],x),wd(r.ys[k],y))<m){on=true;return}});return on}
function fanTree(x,y){var t=false;PH.q(x-14,y-14,x+14,y+14,function(p){if(t||p.hid)return;if((p.t===P_TREE||p.t===P_SAKURA||p.t===P_LAMP||p.t===P_POLE)&&Math.hypot(wd(p.x,x),wd(p.y,y))<(p.t===P_TREE||p.t===P_SAKURA?12:5))t=true});return t}
function fanOk(x,y,l){if(l)return true;return !ptInBld(x,y)&&!inRiver(x,y,4)&&!fanOnRoad(x,y)&&!fanTree(x,y)}
function fanGroup(x,y,face,teams,n,l){var g={x:x,y:y,p:[],E:0,cd:0,l:l|0};for(var i=0;i<n;i++){var a=face+Math.PI/2,o=(i-(n-1)/2)*7,tm=teams[(i*7+Math.floor(Math.abs(x+y)))%teams.length],px,py,ok=false;
  for(var bk=(l?0:(i%2)*6);bk<=(l?0:20)&&!ok;bk+=7){px=wrap(x+Math.cos(a)*o-Math.cos(face)*bk);py=wrap(y+Math.sin(a)*o-Math.sin(face)*bk);ok=fanOk(px,py,l)}
  if(!ok)continue;g.p.push({x:px,y:py,st:fanSt(hsh(px|0,py|0,3)),f:face,tm:tm,fl:tm!=='n'&&hsh(px|0,py|0,5)<.5,ph:hsh(px|0,py|0,7)*TAU})}return g.p.length?g:null}
function fanBuild(key){var G=[],teams=fanTeams(),z=ZS&&ZS.z;
 if(z&&z.k==='course'&&z.road){var r=z.road,el=r.k==='exp'||r.k==='ramp',step=z.s1-z.s0>2500?340:260,k=0;
  for(var s=z.s0-60;s<=z.s1+80;s+=(s<z.s0+300||s>z.s1-300)?120:step){if(el&&s>z.s0+260&&s<z.s1-260)continue;var sv=((s%r.len)+r.len)%r.len;r.pt(sv,TMP);var sd=(k++%2)?1:-1,u=(el?r.hw-5:r.hw+(r.sw||0)+5)*sd,x=wrap(TMP[0]-TMP[3]*u),y=wrap(TMP[1]+TMP[2]*u),face=Math.atan2(-TMP[2]*sd,TMP[3]*sd);
   var g=fanGroup(x,y,face,teams,s<z.s0+200||s>z.s1-200?7:5,el?1:0);if(g)G.push(g)}}
 else if(z){for(var a=0;a<TAU;a+=TAU/14){var R=z.r+14,x2=wrap(z.x+Math.cos(a)*R),y2=wrap(z.y+Math.sin(a)*R),g2=fanGroup(x2,y2,a+Math.PI,teams,5,0);if(g2)G.push(g2)}}
 else if(ST.rte){var T=ST.rte,j=0;for(var c=200;c<T.L-100;c+=380){while(j<T.cum.length-2&&T.cum[j+1]<c)j++;var p0=T.pts[j],p1=T.pts[j+1],f=clamp((c-T.cum[j])/((T.cum[j+1]-T.cum[j])||1),0,1),px=p0[0]+wd(p1[0],p0[0])*f,py=p0[1]+wd(p1[1],p0[1])*f,an=Math.atan2(wd(p1[1],p0[1]),wd(p1[0],p0[0])),q=gpsNear(px,py,60),hw=q&&q.r?q.r.hw+(q.r.sw||0):30;
   for(var sd2=-1;sd2<=1;sd2+=2){var u2=(hw+5)*sd2,x3=wrap(px-Math.sin(an)*u2),y3=wrap(py+Math.cos(an)*u2),g3=fanGroup(x3,y3,Math.atan2(-Math.cos(an)*sd2,Math.sin(an)*sd2),teams,5,0);if(g3)G.push(g3)}}}
 return G}
function fanKey(){if(mode!=='game')return null;if(typeof c4Dark==='function'&&c4Dark())return null;if(ZS&&ZS.z)return 'z:'+ZS.z.id;var m=ST.act;if(ST.mode&&m&&(m.type==='srace'||m.type==='crace')&&ST.rte&&!ST.ride)return 'm:'+m.id;return null}
function fanUpdate(dt){var k=fanKey();if(k!==C4FAN.key){C4FAN.key=k;C4FAN.g=k?fanBuild(k):[];C4FAN.rb=RIV.length}else if(k&&RIV.length!==C4FAN.rb&&TIME-(C4FAN.bt||0)>1){C4FAN.bt=TIME;C4FAN.rb=RIV.length;C4FAN.g=fanBuild(k)}
 for(var i=0;i<C4FAN.g.length;i++){var g=C4FAN.g[i],dP=Math.hypot(wd(g.x,car.x),wd(g.y,car.y)),hot=null;g.cd-=dt;
  if(dP<170)hot='p';else for(var j=0;j<RIV.length;j++){var R=RIV[j];if(Math.hypot(wd(g.x,R.x),wd(g.y,R.y))<150){hot=R.id;break}}
  g.E=hot?Math.min(1,g.E+dt*4):Math.max(0,g.E-dt*.8);
  if(hot&&g.cd<=0&&Math.random()<dt*3){g.cd=2.5;var tm=hot==='p'?'p':(hot==='rin'||hot==='shizuka'?'r':hot==='seiji'||/^sh|^b[0-9]/.test(hot)?'s':hot==='tetsu'?'t':hot==='ghost'?'h':hot==='kir'?'k':hot==='gen'?'g':'n'),pool=SHOUT[tm]||SHOUT.n;
   c4Shout(g.x,g.y,pool[Math.floor(Math.random()*pool.length)],FANC[tm==='h'||tm==='k'?'w':tm==='t'?'g':tm]||'#fff');if(S.snd&&dP<300)auNoise(1000,.8,.05,.4)}}}
function fanDrawAll(l){if(!PATL)return;for(var i=0;i<C4FAN.g.length;i++){var g=C4FAN.g[i];if(g.l!==l)continue;var x=SX(g.x),y=SY(g.y);if(x<-40||y<-40||x>VW+40||y>VH+40)continue;for(var j=0;j<g.p.length;j++)fanDraw(g.p[j],g.E,true)}}
// ---- rivals that drift: their physics corners on grip, so the slide is shown — the body swings into the turn, the rear tyres smoke and leave marks
function rivSlide(r,dt){var c=r.c;if(!c||r.wait||!r.drift){r.vo=0;return}var sp=c.sp,k=sp>85?Math.min(1,(sp-85)/90):0,tv=clamp((c.w||0)*.19,-.62,.62)*k;if(c.dr)tv=0;
 r.vo=(r.vo||0)+(tv-(r.vo||0))*Math.min(1,dt*5);var vo=Math.abs(r.vo);
 if(Math.abs(wd(c.x,cam.x))>VW/2+160||Math.abs(wd(c.y,cam.y))>VH/2+160){r.wp2=null;r.ldr=false;return}
 var on=vo>.15&&sp>80,a=c.a+r.vo,ca=Math.cos(a),sa=Math.sin(a),dirt=!c.l&&typeAt(c.x,c.y)>=10;if(!r.wp2)r.wp2=[null,null];
 for(var w=0;w<2;w++){var sg=w?1:-1,ox=-(c.hx-4),wx=c.x+ca*ox-sa*sg*(c.hy-2),wy=c.y+sa*ox+ca*sg*(c.hy-2);
  if(on){var cur=[wx,wy];if(r.wp2[w])skidLine(r.wp2[w],cur,c.l|0,dirt);r.wp2[w]=cur;var inten=Math.min(1,(vo-.1)*2.6)*Math.min(1,sp/200);
   if(Math.random()<inten*1.15){var pv=(Math.random()-.5)*30;smokePuff(wx+(Math.random()-.5)*3,wy+(Math.random()-.5)*3,-c.vx*.14-sa*sg*pv+(Math.random()-.5)*20,-c.vy*.14+ca*sg*pv+(Math.random()-.5)*20,2+Math.random()*1.5,dirt?10+Math.random()*4:8+Math.random()*5,dirt,c.l|0,dirt?.7:.55+Math.random()*.25)}}
  else r.wp2[w]=null}
 // the moment a slide starts: a burst of smoke off both rear tyres
 if(on&&!r.ldr)for(var q=0;q<5;q++){var s2=q%2?1:-1;smokePuff(c.x-ca*c.hx-sa*s2*c.hy,c.y-sa*c.hx+ca*s2*c.hy,(Math.random()-.5)*50-c.vx*.1,(Math.random()-.5)*50-c.vy*.1,3,11+Math.random()*3,dirt,c.l|0,.55)}
 r.ldr=on}
var _ruV=rivUpdate;rivUpdate=function(dt){_ruV(dt);for(var i=0;i<RIV.length;i++)rivSlide(RIV[i],dt)};
var _rdV=rivDraw;rivDraw=function(z){var sv=[],i;for(i=0;i<RIV.length;i++){sv.push(RIV[i].a);if(RIV[i].vo)RIV[i].a+=RIV[i].vo}try{_rdV(z)}finally{for(i=0;i<RIV.length;i++)RIV[i].a=sv[i]}};
// ---- respawn: standing still for half a minute shows a round button that puts you back on a main road
var RSP={t:0};
function rspEls(){var e=$('rsp');if(e)return e;var g=$('game');if(!g)return null;e=document.createElement('button');e.id='rsp';e.setAttribute('aria-label','respawn');
 e.innerHTML='<svg viewBox="0 0 20 20" shape-rendering="crispEdges" fill="currentColor"><path d="M13 1h1v1h-1zM8 2h4v1h-4zM13 2h2v1h-2zM6 3h10v1h-10zM5 4h11v1h-11zM4 5h3v1h-3zM12 5h5v1h-5zM3 6h3v1h-3zM11 6h3v1h-3zM3 7h2v1h-2zM2 8h3v1h-3zM2 9h3v1h-3zM15 9h3v1h-3zM2 10h3v1h-3zM15 10h3v1h-3zM15 11h3v1h-3zM15 12h2v1h-2zM6 13h3v1h-3zM14 13h3v1h-3zM3 14h5v1h-5zM13 14h3v1h-3zM4 15h11v1h-11zM4 16h10v1h-10zM5 17h2v1h-2zM8 17h4v1h-4zM6 18h1v1h-1z"/></svg>';
 e.onclick=function(ev){ev.stopPropagation();c4Respawn()};g.appendChild(e);var l=document.createElement('div');l.id='rspl';g.appendChild(l);return e}
function c4Respawn(){if(mode!=='game'||!car)return;var p=stSnapWide({x:car.x,y:car.y},1200);if(!p||(p.x===car.x&&p.y===car.y)){var q=gpsNear(car.x,car.y,1500,true);if(q)p={x:q.x,y:q.y}}if(!p)return;
 car.x=p.x;car.y=p.y;if(p.a!=null)car.a=p.a;car.vx=car.vy=car.w=0;car.l=0;car.dr=false;cam.x=car.x;cam.y=car.y;cam.a=car.a;preload();RSP.t=0;flash(L('Снова на дороге'),1.2);if(S.snd)try{auBell()}catch(e){}}
function rspUpdate(dt){var e=rspEls();if(!e)return;var on=mode==='game'&&car&&!DLG&&!(ZS&&ZS.ph==='cd');RSP.t=on&&car.sp<6?RSP.t+dt:0;var show=RSP.t>30;
 if(show!==(e.style.display==='block')){e.style.display=show?'block':'none';var l=$('rspl');if(l){l.style.display=show?'block':'none';l.textContent=L('застрял? на дорогу')}}}
// ---- the story clock: every chapter and scene has its hour, whatever the time setting says
var STOD_CH={1:8.6,2:19.2,3:22.7,4:1.6,5:19},STOD_M={k9:18.4,k9b:19.3,c5:22.5,c9:22.3,d9:.2},STC=null,STC0=null;
STORY.forEach(function(m){if(m.tod==null&&STOD_M[m.id]!=null)m.tod=STOD_M[m.id]});
var STCM=null;
function storyTod(){if(!ST.mode||mode!=='game')return null;var c=ST.act||stCur();
 // the closing talk of a mission stays in the light it was played in
 if((!c||((DLG||ST.talk)&&!ST.act))&&STC0)return STC0;if(!c)return null;var o=c.tod!=null?{t:c.tod,r:c.todRate||2.5}:STOD_CH[c.ch||1]!=null?{t:STOD_CH[c.ch||1],r:2.5}:null;
 if(ST.act&&STCM!==ST.act){STCM=ST.act;if(c.todFrom!=null&&STC!=null)STC=c.todFrom}if(!ST.act)STCM=null;if(o&&ST.act)STC0=o;return o}
var _todV=todUpdate;todUpdate=function(dt){var o=storyTod();if(!o){STC=null;STC0=null;return _todV(dt)}if(STC==null)STC=o.t;var d=((o.t-STC+36)%24)-12;STC=(STC+clamp(d,-dt*o.r,dt*o.r)+24)%24;
 var sv=S.tod;S.tod=0;TODH=STC;try{_todV(dt)}finally{S.tod=sv}TODH=STC};
// ---- hooks
var _dzV=drawZones;drawZones=function(l){_dzV(l);if(mode!=='game')return;if(l===0)arenaDraw();fanDrawAll(l)};
var _edV=emisDraw;emisDraw=function(a){_edV(a);if(a>.05&&ARENA&&arenaOn()){var A=ARENA,cxs=SX(A.cx),cys=SY(A.cy);
 // four floodlights: a hot head on each pole and a wide pool of light over its quarter of the pad
 A.poles.forEach(function(q){var x=SX(q.x),y=SY(q.y);gl(x+1,y-28,12,9,[255,250,230],a);gl(x+1,y-28,30,22,[255,244,220],a*.35);gl(cxs+(x-cxs)*.5,cys+(y-cys)*.5,A.w*.42,A.h*.48,[255,240,215],a*.3)});
 gl(cxs,cys,A.w*.5,A.h*.5,[255,236,214],a*.18)}
 // phones held up in the crowd at night
 if(a>.15){var ph=function(p,E){if(p.fl||hsh(p.x|0,p.y|0,21)>.28)return;var x=SX(p.x),y=SY(p.y);if(x<-10||y<-20||x>VW+10||y>VH+10)return;var j=E>0?Math.round(Math.max(0,Math.sin(TIME*9+p.ph))*2.4*E):0,f=.55+.45*Math.sin(TIME*2.3+p.ph*3);gl(x+3,y-12-j,4,4,[225,238,255],a*f)};
  if(ARENA&&arenaOn())for(var i=0;i<ARENA.crowd.length;i++)ph(ARENA.crowd[i],ARENA.E);for(i=0;i<C4FAN.g.length;i++){var g=C4FAN.g[i];if(g.l)continue;for(var j=0;j<g.p.length;j++)ph(g.p[j],g.E)}}};
// the show's paper lanterns hang along the open edges of the pad (the stands carry banners)
c4ShowLan=function(){if(C4BL)return C4BL;C4BL=[];var A=ARENA;if(!A){var p=STP&&(STP.arenac||STP.bamboo);if(!p)return C4BL;for(var i=0;i<14;i++){var an=i/14*TAU,R=150+(i%2)*40,x=wrap(p.x+Math.cos(an)*R),y=wrap(p.y+Math.sin(an)*R);if(ptInBld(x,y))continue;C4BL.push({x:x,y:y,c:i%3?'#ff4d5a':'#fff1d6'})}return C4BL}
 var tr=A.trib.map(function(t){return t.side}),k=0;[['N',A.x0,A.y0-11,1,0,A.w],['S',A.x0,A.y1+11,1,0,A.w],['W',A.x0-11,A.y0,0,1,A.h],['E',A.x1+11,A.y0,0,1,A.h]].forEach(function(e){if(tr.indexOf(e[0])>=0)return;
  for(var d=24;d<e[5]-12;d+=44){var x=wrap(e[1]+e[3]*d),y=wrap(e[2]+e[4]*d);if(Math.hypot(wd(x,A.ent.x),wd(y,A.ent.y))<34)continue;C4BL.push({x:x,y:y,c:(k++)%3?'#ff4d5a':'#fff1d6'})}});return C4BL};
var _hudV=hud;hud=function(dt){_hudV(dt);if(mode!=='game')return;rspUpdate(dt);c4ShoutUpd(dt);fanUpdate(dt);c4BotsUpdate(dt);
 // the arena crowd
 if(ARENA&&arenaOn()){var A=ARENA,inA=Math.abs(wd(car.x,A.cx))<A.w/2+60&&Math.abs(wd(car.y,A.cy))<A.h/2+60,hype=(inA&&car.dr&&car.sp>70)||C4BOTS.length>0;A.E=hype?Math.min(1,A.E+dt*2):Math.max(0,A.E-dt*.5);
  if(A.E>.3&&Math.random()<dt*(inA&&car.dr?2.4:.9)){var p=A.crowd[Math.floor(Math.random()*A.crowd.length)];if(p){var pool=SHOUT[p.tm]||SHOUT.n;c4Shout(p.x,p.y,pool[Math.floor(Math.random()*pool.length)],FANC[p.tm]||'#fff')}}
  if(S.snd&&inA&&car.dr&&A.E>.6&&Math.random()<dt*1.2)auNoise(900,.7,.07,.5)}};
Object.assign(EN,{'Арена у бамбука':'The bamboo arena','Снова на дороге':'Back on the road','застрял? на дорогу':'stuck? back to the road','Ёппарай!':'Yopparai!','Лёха!':'Lyokha!','Давай, Сакура!':'Go, Sakura!','Ещё дыма!':'More smoke!','Боком!':'Sideways!','Банзай!':'Banzai!','Гэн — король!':'Gen is king!','Ещё!':'More!','Уооо!':'Whoaaa!','Красиво!':'Beautiful!','Дым!':'Smoke!','Рин!':'Rin!','Мори!':'Mori!','«Тени»!':'Shadows!','Сэйдзи!':'Seiji!','Тэцу!':'Tetsu!','Бульдозер!':'Bulldozer!','Призрак!':'Ghost!','Кир!':'Kir!'});
Object.assign(ZH,{'Арена у бамбука':'竹林竞技场','Снова на дороге':'回到路上了','застрял? на дорогу':'卡住了？回到路上','Ёппарай!':'醉鬼！','Лёха!':'廖哈！','Давай, Сакура!':'冲啊，樱花！','Ещё дыма!':'再多点烟！','Боком!':'横着走！','Банзай!':'万岁！','Гэн — король!':'玄是国王！','Ещё!':'再来！','Уооо!':'哇哦！','Красиво!':'漂亮！','Дым!':'烟！','Рин!':'凛！','Мори!':'森！','«Тени»!':'“影子”！','Сэйдзи!':'诚二！','Тэцу!':'铁！','Бульдозер!':'推土机！','Призрак!':'幽灵！','Кир!':'基尔！','Рассвет':'黎明','Доедь до раменной Рэйко — рассвет встретите там':'开到玲子的拉面店——在那里迎接黎明','Карта той ночи у тебя. Рэйко позвала всех к себе.':'那一夜的存储卡在你手上。玲子叫大家去她那里。','(Карта в кармане. Скоро рассвет.)':'（卡在口袋里。天快亮了。）','Брат! Рэйко написала. Еду к ней — встретим рассвет вместе.':'兄弟！玲子发消息了。我去她那儿——一起迎接日出。','Поехали ко мне. Рассвет встретим в раменной — Хана уже там, я ей позвонила. Я поеду вперёд.':'来我那儿吧。我们在拉面店迎接黎明——花已经在那儿了，我给她打了电话。我先走。','Ночное шоу Гэна на арене у бамбуковой рощи: набери 1 500 очков заносом перед трибунами':'玄在竹林旁竞技场的夜间表演：在看台前靠漂移拿到1 500分'});

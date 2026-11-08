// ===== Reiko's ramen shop: a roadside restaurant with its own car park at the foot of the Akagi pass =====
// Built once after the world is generated (no RNG): picks the straightest free stretch of the pass road near
// the start line, clears the forest there, opens the guard rail for a driveway, and adds a car park, the restaurant
// (drawn into the map chunks, solid for cars) and a lit pole sign. Replaces the old street cart.
var RAMEN=null,RAILGAP=[],RAMSPR=null;
var RW=140,RD=94;                                   // car park sprite: width along the road, depth away from it
function rmLocal(R,x,y){var dx=wd(x,R.ox),dy=wd(y,R.oy);return[dx*R.xv[0]+dy*R.xv[1],dx*R.yv[0]+dy*R.yv[1]]} // world → sprite px
function rmWorld(R,px,py){return[wrap(R.ox+R.xv[0]*px+R.yv[0]*py),wrap(R.oy+R.xv[1]*px+R.yv[1]*py)]}
function ramenGeom(r,s,sd){
 r.pt(zcs(r,s),TMP);var P0=[TMP[0],TMP[1]],A=[TMP[2],TMP[3]],N=[-A[1]*sd,A[0]*sd];
 // how far the road edge comes towards the shop side along the frontage (the stretch is only nearly straight)
 var V0=-1e9,edge={};
 for(var q=-150;q<=150;q+=2){r.pt(zcs(r,s+q),TMP2);var dx=wd(TMP2[0],P0[0]),dy=wd(TMP2[1],P0[1]),a=dx*A[0]+dy*A[1],v=dx*N[0]+dy*N[1];
  if(Math.abs(a)<=RW/2+8){V0=Math.max(V0,v+r.hw+9);var k=Math.round(a);edge[k]=Math.max(edge[k]==null?-1e9:edge[k],v+r.hw)}}
 if(V0<r.hw)return null;V0=Math.ceil(V0);for(var k2=-RW/2-8;k2<=RW/2+8;k2++)if(edge[k2]==null)edge[k2]=edge[k2-1]!=null?edge[k2-1]:r.hw;
 // sprite axes: y points from the building towards the road, x keeps the picture unmirrored
 var yv=[-N[0],-N[1]],xv=[yv[1],-yv[0]];
 var V1=V0+RD,ox=P0[0]+N[0]*V1-xv[0]*RW/2,oy=P0[1]+N[1]*V1-xv[1]*RW/2;
 return{r:r,s:s,sd:sd,P0:P0,A:A,N:N,V0:V0,V1:V1,ox:wrap(ox),oy:wrap(oy),xv:xv,yv:yv,edge:edge}}
function ramenBox(R,m){var c=[rmWorld(R,-m,-m),rmWorld(R,RW+m,-m),rmWorld(R,-m,RD+m),rmWorld(R,RW+m,RD+m)],x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
 c.forEach(function(p){var x=R.ox+wd(p[0],R.ox),y=R.oy+wd(p[1],R.oy);x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)});return{x0:x0,y0:y0,x1:x1,y1:y1}}
function ramenFree(R){var b=ramenBox(R,10),ok=true;
 BH.q(b.x0,b.y0,b.x1,b.y1,function(B){if(!ok)return;if(wd(b.x1,B.x)>0&&wd(B.x+B.w,b.x0)>0&&wd(b.y1,B.y)>0&&wd(B.y+B.h,b.y0)>0)ok=false});if(!ok)return false;
 SPEC.forEach(function(S2){if(wd(b.x1,S2.x)>0&&wd(S2.x+S2.w,b.x0)>0&&wd(b.y1,S2.y)>0&&wd(S2.y+S2.h,b.y0)>0)ok=false});if(!ok)return false;
 RH.q(b.x0-40,b.y0-40,b.x1+40,b.y1+40,function(sp){if(!ok)return;var r2=sp.r;for(var i=sp.i;i<=sp.j;i++){if(r2===R.r&&Math.abs(i*r2.ds-zcs(r2,R.s))<200)continue;var l=rmLocal(R,r2.xs[i],r2.ys[i]),m=(r2.hw||12)+(r2.sw||0)+8;if(l[0]>-m&&l[0]<RW+m&&l[1]>-m&&l[1]<RD+m){ok=false;return}}});if(!ok)return false;
 for(var px=0;px<=RW;px+=20)for(var py=0;py<=RD;py+=20){var w=rmWorld(R,px,py);if(inRiver(w[0],w[1],10)||nearDeck(w[0],w[1],12))return false}
 return true}
function ramenPick(){var z=null;for(var i=0;i<ZONES.length;i++)if(ZONES[i].id==='tg0')z=ZONES[i];if(!z||!z.road)return null;var r=z.road,sdl=laneU(r,1,0)<0?-1:1,best=null;
 for(var s=(r.za||0)+110;s<=z.s0+900;s+=6){
  for(var k=0;k<2;k++){var sd=k?-sdl:sdl,R=ramenGeom(r,s,sd);if(!R||R.V0>r.hw+30||!ramenFree(R))continue;var sc=(R.V0-r.hw-9)*1.5+Math.abs(s-(z.s0-60))*.02+(k?4:0);if(!best||sc<best.sc){R.sc=sc;best=R}}}
 return best}
function ramenBuild(){RAMEN=null;RAILGAP=[];try{railMouthGaps()}catch(e){console.error(e)}var R=ramenPick();if(!R)return;RAMEN=R;var r=R.r;
 // clear the forest and roadside props from the car park and driveway
 var b=ramenBox(R,6),rm=[];PH.q(b.x0,b.y0,b.x1,b.y1,function(p){var l=rmLocal(R,p.x,p.y);if(l[0]>-5&&l[0]<RW+5&&l[1]>-5&&l[1]<RD+5)rm.push(p);else if(Math.abs(l[0]-RW/2)<30&&l[1]>=RD-2&&l[1]<RD+R.V0-r.hw+4)rm.push(p)});
 rm.forEach(function(p){var m=p.t===P_CAR?20:Math.max(p.r||2,12);hashRmNear(PH,p,p.x,p.y,m+2);p.hid=1;p.gone=1});
 // the restaurant is solid (drawn by the car-park sprite, not by the building renderer)
 var bc=rmWorld(R,RW/2,25);R.bld={x:bc[0],y:bc[1],hx:RW/2-12,hy:21,a:Math.atan2(R.xv[1],R.xv[0])};
 // two customers' cars in the bays, nose to the building
 var ang=Math.atan2(-R.yv[1],-R.yv[0]);[[1,0,2],[5,5,4]].forEach(function(q){var cxp=14+19*q[0]+9.5,w=rmWorld(R,cxp,61),vt=q[1];addP({t:P_CAR,x:w[0],y:w[1],a:ang,vt:vt,c:q[2],hx:VTY[vt].hx,hy:VTY[vt].hy})});
 // a gap in the guard rail in front of the driveway
 var key=R.sd>0?'gl':'gr',G=r[key];if(G){var g0=-1,g1=-1,i0=Math.max(0,Math.floor(zcs(r,R.s)/r.ds)-40),i1=Math.min(r.n-1,i0+80);
  for(var i=i0;i<=i1;i++){var l=rmLocal(R,G.xs[i],G.ys[i]);if(Math.abs(l[0]-RW/2)<=27&&l[1]>RD-6){if(g0<0)g0=i;g1=i}}
  if(g0>=0)RAILGAP.push({r:r,key:key,g0:g0,g1:g1})}
 var bb=ramenBox(R,24);LMI.push({k:'ramen',r:r,bx0:bb.x0,by0:bb.y0-30,bx1:bb.x1,by1:bb.y1})}
// side streets that meet a mountain pass: the guard rail is open where they join (it used to run straight across the mouth,
// so the street was a dead end that the navigator still sent you down)
function railMouthGaps(){var TG=ARTS.filter(function(r){return r.k==='touge'&&r.gl});if(!TG.length)return;
 LOCS.forEach(function(L){[0,1].forEach(function(e){if(!(e?L.mb:L.ma))return;var ex=L.xs[e],ey=L.ys[e],ox=L.xs[1-e],oy=L.ys[1-e],ll=Math.hypot(wd(ex,ox),wd(ey,oy))||1,ux=wd(ex,ox)/ll,uy=wd(ey,oy)/ll;
  TG.forEach(function(T){var bk=-1,bd=1e9;for(var k=0;k<T.n;k+=2){var d=Math.hypot(wd(T.xs[k],ex),wd(T.ys[k],ey));if(d<bd){bd=d;bk=k}}if(bd>T.hw+40||bk<10||bk>T.n-11)return;
   // the side of the pass the street comes from
   var bx=ex-ux*50,by=ey-uy*50;T.pt(bk*T.ds,TMP);var side=wd(bx,TMP[0])*-TMP[3]+wd(by,TMP[1])*TMP[2],key=side>0?'gl':'gr',G=T[key];if(!G)return;
   // where the street's centre line crosses the rail; open the rail for the street's width around that point
   var ci=-1,cb=1e9;for(var i=Math.max(0,bk-60);i<=Math.min(T.n-1,bk+60);i++){var dx=wd(G.xs[i],ex),dy=wd(G.ys[i],ey),along=dx*ux+dy*uy,across=Math.abs(-dx*uy+dy*ux);if(along>-90&&along<30&&across<cb){cb=across;ci=i}}
   if(ci<0||cb>T.ds*2+2)return;var g0=ci,g1=ci,wdt=L.hw+L.sw*.5+5;while(g0>0&&Math.hypot(wd(G.xs[g0-1],G.xs[ci]),wd(G.ys[g0-1],G.ys[ci]))<wdt)g0--;while(g1<T.n-1&&Math.hypot(wd(G.xs[g1+1],G.xs[ci]),wd(G.ys[g1+1],G.ys[ci]))<wdt)g1++;RAILGAP.push({r:T,key:key,g0:g0,g1:g1});
   // clear the mouth of signs and trees that stood behind the rail
   var mx=ex-ux*25,my=ey-uy*25,rm=[];PH.q(mx-70,my-70,mx+70,my+70,function(p){if(p.t===P_CAR||p.hid)return;var dx=wd(p.x,ex),dy=wd(p.y,ey),along=dx*ux+dy*uy,across=Math.abs(-dx*uy+dy*ux);if(across<L.hw+L.sw+(p.r||2)&&along>-80&&along<20)rm.push(p)});
   rm.forEach(function(p){var m=Math.max(p.r||2,12);hashRmNear(PH,p,p.x,p.y,m+2);p.hid=1;p.gone=1})})})})}
// guard rail strokes with the driveway gap left out (used by the chunk baker)
function railStroke(s,key,X0,Y0,lo,hi){var r=s.r,sp={r:r[key],i:s.i,j:s.j},gs=[];
 for(var k=0;k<RAILGAP.length;k++){var q=RAILGAP[k];if(q.r===r&&q.key===key&&q.g1>=lo&&q.g0<=hi)gs.push(q)}gs.sort(function(a,b){return a.g0-b.g0});
 var c=lo;gs.forEach(function(q){if(q.g0-1>c)strokeSpan(sp,X0,Y0,2,'#f00',c,q.g0-1);c=Math.max(c,q.g1+1)});if(hi>c)strokeSpan(sp,X0,Y0,2,'#f00',c,hi)}
// ---- pixel art (sprite space: x along the road, y from the building (0) to the road (RD))
var RKANA={'ラ':['.###.','.....','#####','....#','.###.'],'ー':['.....','.....','#####','.....','.....'],'メ':['...#.','#..#.','.##..','.##..','#..##'],'ン':['#....','.#..#','....#','...#.','###..']};
function ramenSprite(){if(RAMSPR)return RAMSPR;var c=mkCanvas(RW,RD),g=c.getContext('2d');function R(x,y,w,h,col){g.fillStyle=col;g.fillRect(x,y,w,h)}
 // asphalt with grit, curbs
 R(0,0,RW,RD,'#3c4150');for(var i=0;i<RW;i+=2)for(var j=0;j<RD;j+=2){var h=hsh(i+7,j+3,41);if(h<.12)R(i,j,1,1,'#343846');else if(h>.94)R(i,j,1,1,'#474c5c')}
 R(0,0,RW,1,'#9aa0b4');R(0,0,1,RD,'#9aa0b4');R(RW-1,0,1,RD,'#9aa0b4');R(0,RD-1,RW/2-24,1,'#9aa0b4');R(RW/2+24,RD-1,RW/2-24,1,'#9aa0b4');
 // planters at the back corners
 [[2,2],[RW-10,2]].forEach(function(p){R(p[0],p[1],8,46,'#20402a');for(var k=0;k<6;k++)R(p[0]+1+(k%2)*3,p[1]+2+k*7,4,4,k%2?'#3a7a40':'#2e6236')});
 // building: soft shadow, walls, roof
 R(11,3,RW-22,46,'rgba(10,8,24,.55)');R(12,4,RW-24,42,'#2a2430');R(13,5,RW-26,40,'#8a2a2e');
 for(i=15;i<RW-14;i+=4)R(i,6,1,38,'#7a2428');R(13,5,RW-26,1,'#b23a3a');R(13,5,1,40,'#a33236');
 // rooftop units and the round bowl logo
 R(RW-34,9,10,7,'#5a5e70');R(RW-33,10,8,5,'#8a90a4');R(RW-31,11,4,3,'#4a4e5e');R(RW-48,9,8,6,'#5a5e70');R(RW-47,10,6,4,'#8a90a4');
 var bx=24,by=14;R(bx-1,by-1,15,15,'#2a2430');R(bx,by,13,13,'#f4ead8');R(bx+1,by+1,11,11,'#d8262e');R(bx+3,by+6,7,4,'#f4f0f6');R(bx+2,by+5,9,1,'#f4f0f6');R(bx+4,by+10,5,1,'#f4f0f6');
 R(bx+4,by+2,1,3,'#f4f0f6');R(bx+6,by+1,1,3,'#f4f0f6');R(bx+8,by+2,1,3,'#f4f0f6');R(bx+3,by+7,7,1,'#c8a060');
 // the rooftop billboard itself is drawn upright in the top layer (readable from any road direction); here only its footing
 R(RW/2-26,30,52,3,'#5a1a1e');R(RW/2-22,33,2,4,'#3a3a48');R(RW/2+20,33,2,4,'#3a3a48');
 // facade: red awning with white scallops, navy noren at the door, two red lanterns
 R(12,44,RW-24,4,'#d8262e');for(i=13;i<RW-13;i+=4)R(i,47,2,1,'#f4f0f6');R(12,48,RW-24,1,'#6a0c16');
 var dx=RW/2-9;R(dx,44,18,6,'#1e2a5a');R(dx+5,45,1,5,'#141c40');R(dx+11,45,1,5,'#141c40');R(dx+2,46,2,2,'#e8ecf4');R(dx+8,46,2,2,'#e8ecf4');R(dx+14,46,2,2,'#e8ecf4');
 [dx-6,dx+21].forEach(function(lx){R(lx,48,4,5,'#2a1018');R(lx,49,4,3,'#ff5a3a');R(lx+1,48,2,1,'#14101e');R(lx+1,53,2,1,'#14101e')});
 // walkway to the door, bays with wheel stops, the aisle
 R(dx,50,18,22,'#8a8478');for(j=52;j<72;j+=4)R(dx,j,18,1,'#7a7468');
 for(var k2=0;k2<7;k2++){var lx2=14+19*k2;if(lx2+19>dx-1&&lx2<dx+19)continue;R(lx2,52,1,22,'#d8dce6');R(lx2+19,52,1,22,'#d8dce6');R(lx2+5,53,10,2,'#7a7f92')}
 R(14,74,RW-28,1,'#d8dce6');for(i=dx-4;i<dx+22;i+=6)R(i,84,3,1,'#e8d050');
 RAMSPR=c;return c}
function ramenGround(g,it,X0,Y0){var R=RAMEN;if(!R)return;var sp=ramenSprite();
 g.save();g.imageSmoothingEnabled=false;g.translate(wd(R.ox,X0),wd(R.oy,Y0));g.transform(R.xv[0],R.xv[1],R.yv[0],R.yv[1],0,0);g.drawImage(sp,0,0);g.restore();
 // driveway: from the road edge to the car park
 var r=R.r,b=ramenBox(R,R.V0);for(var y=Math.floor(b.y0);y<=b.y1;y++){var ly=wd(y,Y0);if(ly<-1||ly>CH)continue;for(var x=Math.floor(b.x0);x<=b.x1;x++){var lx=wd(x,X0);if(lx<-1||lx>CH)continue;
  var l=rmLocal(R,x+.5,y+.5),a=l[0]-RW/2;if(Math.abs(a)>24||l[1]<RD-1)continue;var v=R.V1-l[1],e=R.edge[Math.round(-R.sd*a)];if(e==null)e=R.V0;if(v<e-1)continue;
  g.fillStyle=Math.abs(a)>23?'#9aa0b4':(hsh(x,y,43)<.1?'#343846':'#3c4150');g.fillRect(lx,ly,1,1)}}}
function ramenTop(u,it,X0,Y0,AN){var R=RAMEN;if(!R)return;
 // upright rooftop billboard: ラーメン
 var c=rmWorld(R,RW/2,24),bx=Math.round(wd(c[0],X0))-29,by=Math.round(wd(c[1],Y0))-9;
 u.fillStyle='rgba(10,8,24,.45)';u.fillRect(bx+3,by+4,58,17);u.fillStyle='#2a2430';u.fillRect(bx-1,by-1,60,19);u.fillStyle='#d8262e';u.fillRect(bx,by,58,17);u.fillStyle='#f4ead8';u.fillRect(bx+2,by+2,54,13);
 u.fillStyle='#c81e28';var gx=bx+5;['ラ','ー','メ','ン'].forEach(function(ch){var G=RKANA[ch];for(var yy=0;yy<5;yy++)for(var xx=0;xx<5;xx++)if(G[yy][xx]==='#')u.fillRect(gx+xx*2,by+4+yy*2,2,2);gx+=13});
 // pole sign by the road (front right corner of the car park)
 var p=rmWorld(R,RW-14,RD-10),x=Math.round(wd(p[0],X0)),y=Math.round(wd(p[1],Y0));
 u.fillStyle='rgba(10,8,24,.4)';u.fillRect(x-7,y-4,16,10);u.fillStyle='#2a2430';u.fillRect(x-9,y-13,18,13);u.fillStyle='#d8262e';u.fillRect(x-8,y-12,16,11);u.fillStyle='#ffd23a';u.fillRect(x-8,y-12,16,1);u.fillRect(x-8,y-2,16,1);
 u.fillStyle='#f4f0f6';u.fillRect(x-4,y-8,8,3);u.fillRect(x-5,y-9,10,1);u.fillRect(x-3,y-5,6,1);u.fillStyle='#c8a060';u.fillRect(x-4,y-8,8,1);u.fillStyle='#f4f0f6';u.fillRect(x-2,y-11,1,2);u.fillRect(x+1,y-11,1,2)}
var _lmGR=lmGround;lmGround=function(g,it,X0,Y0,AN){if(it.k==='ramen'){ramenGround(g,it,X0,Y0);return}_lmGR(g,it,X0,Y0,AN)};
var _lmTR=lmTop;lmTop=function(u,it,X0,Y0,AN){if(it.k==='ramen'){ramenTop(u,it,X0,Y0,AN);return}_lmTR(u,it,X0,Y0,AN)};
var _coR=collide;collide=function(c){var n=_coR(c),R=RAMEN;if(R&&R.bld&&!c.l){var B=R.bld,dx=wd(B.x,c.x),dy=wd(B.y,c.y);if(Math.abs(dx)<110&&Math.abs(dy)<110)satBox(c,dx,dy,B.hx,B.hy,B.a,.22,.35)}return n};
// the car park and driveway drive like asphalt
var _bcR=bakeChunk;bakeChunk=function(cx0,cy0){var c=_bcR(cx0,cy0),R=RAMEN;if(!R||!c||!c.t)return c;var X0=cx0*CH,Y0=cy0*CH,b=ramenBox(R,R.V0);
 if(wd(b.x1,X0)<0||wd(X0+CH,b.x0)<0||wd(b.y1,Y0)<0||wd(Y0+CH,b.y0)<0)return c;
 for(var y=0;y<CH;y++)for(var x=0;x<CH;x++){var l=rmLocal(R,X0+x+.5,Y0+y+.5),t=c.t[y*CH+x];if(t===5||t===6)continue;
  var inLot=l[0]>=0&&l[0]<RW&&l[1]>=0&&l[1]<RD,inDrive=Math.abs(l[0]-RW/2)<=24&&l[1]>=RD-1&&R.V1-l[1]>=(R.edge[Math.round(-R.sd*(l[0]-RW/2))]||R.V0)-2;
  if(inLot||inDrive)c.t[y*CH+x]=0}
 return c};
// the old cart is gone; the stop is on the road in front of the driveway
stRamen=function(z){var R=RAMEN;if(!R){var r=z.road,s=Math.max((r.za||0)+70,z.s0-170),u=laneU(r,1,0);r.pt(zcs(r,s),TMP);return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3],TMP[2]),r:r,s:s,sd:u<0?-1:1}}
 var r=R.r,u=laneU(r,1,0);r.pt(zcs(r,R.s),TMP);var lu=Math.abs(u)*R.sd;return{x:wrap(TMP[0]-TMP[3]*lu),y:wrap(TMP[1]+TMP[2]*lu),a:Math.atan2(TMP[3],TMP[2]),r:r,s:R.s,sd:R.sd,shop:1}};
stStallDraw=function(){var p=stStallXY('toyo');if(p)stYatai(p,0)};
// night: lanterns, the roof sign and the pole sign glow
var _edR=emisDraw;emisDraw=function(a){_edR(a);var R=RAMEN;if(!R||a<=.02)return;[[RW/2-15,50,8,8,[255,90,58],.8],[RW/2+12,50,8,8,[255,90,58],.8],[RW/2,24,34,11,[255,200,170],.35],[RW-14,RD-16,14,10,[255,70,60],.7]].forEach(function(q){var w=rmWorld(R,q[0],q[1]),x=SX(w[0]),y=SY(w[1]);if(x>-60&&y>-60&&x<VW+60&&y<VH+60)gl(x,y,q[2],q[3],q[4],a*q[5])})};

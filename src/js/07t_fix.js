// ===== tidy-ups: trees that stood on the very edge of the carriageway, parked cars inside a row of trees;
// Kir's "eighty-six" parked by the garage once he has it =====
function roadEdgeNear(x,y,R){var best=null;RH.q(x-R,y-R,x+R,y+R,function(sp){var r=sp.r;if(r.k!=='art'&&r.k!=='loc'&&r.k!=='touge')return;
 for(var i=Math.max(0,sp.i-1);i<Math.min(r.n-1,sp.j+1);i++){var x0=r.xs[i],y0=r.ys[i],ex=wd(r.xs[i+1],x0),ey=wd(r.ys[i+1],y0),l2=ex*ex+ey*ey||1,dx=wd(x,x0),dy=wd(y,y0),t=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*t,qy=dy-ey*t,d=Math.hypot(qx,qy),gap=d-r.hw;
  if(!best||gap<best.gap)best={gap:gap,nx:d>0?qx/d:0,ny:d>0?qy/d:0,r:r}}});return best}
function propTidy(){var seen=[],trees=[],cars=[];PH.q(0,0,WS,WS,function(p){if(p._tv)return;p._tv=1;seen.push(p);if(p.hid)return;if(p.t===P_TREE||p.t===P_SAKURA)trees.push(p);else if(p.t===P_CAR)cars.push(p)});seen.forEach(function(p){p._tv=0});
 var moved=0,gone=0;
 // a tree whose trunk is on the kerb line hangs over the lane: step it back onto the pavement, or take it away
 trees.forEach(function(p){var e=roadEdgeNear(p.x,p.y,80);if(!e||e.gap>=6)return;var push=12-e.gap,nx=wrap(p.x+e.nx*push),ny=wrap(p.y+e.ny*push),e2=roadEdgeNear(nx,ny,80),ok=e2&&e2.gap>=10&&!ptInBld(nx,ny)&&occAt(nx,ny)!==2;
  if(ok)PH.q(nx-10,ny-10,nx+10,ny+10,function(q){if(q!==p&&!q.hid&&Math.hypot(wd(q.x,nx),wd(q.y,ny))<(q.r||2)+6)ok=false});
  var m=Math.max(p.r,12);hashRmNear(PH,p,p.x,p.y,m+2);if(ok){p.x=nx;p.y=ny;PH.add(p,nx-m,ny-m,nx+m,ny+m);moved++}else{p.hid=1;p.gone=1;gone++}});
 // a parked car squeezed in between trees
 cars.forEach(function(p){var hit=false;PH.q(p.x-24,p.y-24,p.x+24,p.y+24,function(q){if(q!==p&&!q.hid&&(q.t===P_TREE||q.t===P_SAKURA||q.t===P_LAMP)&&Math.hypot(wd(q.x,p.x),wd(q.y,p.y))<17)hit=true});if(hit){hashRmNear(PH,p,p.x,p.y,22);p.hid=1;p.gone=1;gone++}});
 return {moved:moved,gone:gone}}
var _bbTidy=buildBrk;buildBrk=function(){_bbTidy();try{window.TIDY=propTidy()}catch(e){console.error(e)}};
// ---- Kir's car by the garage (from the moment he gets it from Tetsu, except while he is out driving it)
var K86=null;
function k86Spot(){var m=STORY.findIndex(function(q){return q.id==='d4'});if(m<0||(S.story.hi|0)<=m||!ST.mode)return null;var a=ST.act;if(a&&(a.id==='d4'||a.id==='d5'||a.id==='d6'))return null;
 if(K86)return K86;var g=stPlaces().garage;if(!g)return null;var h=g.a!=null?g.a:0,ca=Math.cos(h),sa=Math.sin(h),x,y;
 // on the pavement by the shutter, alongside the kerb (or, without a known building, just ahead of the stop)
 if(typeof GARB!=='undefined'&&GARB){x=GARB.x+GARB.w*.8;y=GARB.y+GARB.h+7;h=0}else{x=g.x+ca*40-sa*6;y=g.y+sa*40+ca*6}
 K86={x:wrap(x),y:wrap(y),a:h,spr:playerSprite(4,BODYC[0],STRC[1])};return K86}
var _dzK86=drawZones;drawZones=function(l){_dzK86(l);if(l!==0||mode!=='game')return;var k=k86Spot();if(!k)return;var x=SX(k.x),y=SY(k.y),sp=k.spr,w=sp.width,h=sp.height;if(x<-60||y<-60||x>VW+60||y>VH+60)return;
 var ra=Math.round(k.a/(Math.PI/32))*(Math.PI/32);cx.save();cx.translate(x+2,y+3);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,.4)';cx.fillRect(-w/2,-h/2,w,h);cx.restore();cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(sp,-w/2,-h/2);cx.restore()};
var _coK86=collide;collide=function(c){var n=_coK86(c),k=K86&&k86Spot();if(k&&!c.l){var dx=wd(k.x,c.x),dy=wd(k.y,c.y);if(Math.abs(dx)<60&&Math.abs(dy)<60)satBox(c,dx,dy,CARS[4].hx,CARS[4].hy,k.a,.22,.35)}return n};
// ---- a street that runs along the edge of a square or a park, with part of its carriageway under the square's paving:
// the street wins. Only a street that runs along the edge counts (a dead end that stops at the square is its entrance and
// stays under the paving). Kiosks, benches, lamps and little buildings on its asphalt go; the baker puts the asphalt back.
function specRoadsAlong(s){var W=[],seen=new Set();RH.q(s.x-40,s.y-40,s.x+s.w+40,s.y+s.h+40,function(sp){var r=sp.r;if(r.k!=='art'&&r.k!=='loc'&&r.k!=='touge'||seen.has(r))return;seen.add(r);
  var pts=[],lo,hi;if(r.k==='loc'){lo=r.hw+8;hi=r.len-r.hw-8;for(var t=0;t<=r.len;t+=4)pts.push([r.xs[0]+(r.xs[1]-r.xs[0])*t/r.len,r.ys[0]+(r.ys[1]-r.ys[0])*t/r.len,t])}
  else{lo=(r.za||0)+r.hw;hi=r.len-(r.zb||0)-r.hw;for(var k=0;k<r.n;k++)pts.push([r.xs[k],r.ys[k],k*r.ds])}
  var run=0,bx0=1e9,by0=1e9,bx1=-1e9,by1=-1e9,m=r.hw+3,k0=1e9,k1=-1;
  pts.forEach(function(q,qi){if(q[2]<lo||q[2]>hi)return;var dx=wd(q[0],s.x),dy=wd(q[1],s.y),d=Math.min(dx,dy,s.w-dx,s.h-dy);if(d<=-r.hw+1)return;run+=r.k==='loc'?4:r.ds;
   bx0=Math.min(bx0,s.x+dx-m);by0=Math.min(by0,s.y+dy-m);bx1=Math.max(bx1,s.x+dx+m);by1=Math.max(by1,s.y+dy+m);k0=Math.min(k0,qi);k1=Math.max(k1,qi)});
  if(run>=24)W.push({r:r,x0:bx0,y0:by0,x1:bx1,y1:by1,k0:Math.max(0,k0-3),k1:Math.min(pts.length-1,k1+3)})});return W}
// how far (x,y) is outside the carriageway of one of those streets (negative: on the asphalt)
function specRoadGap(w,x,y){var r=w.r;if(r.k==='loc'){var x0=r.xs[0],y0=r.ys[0],ux=(r.xs[1]-x0)/r.len,uy=(r.ys[1]-y0)/r.len,dx=wd(x,x0),dy=wd(y,y0),t=dx*ux+dy*uy;if(t<-2||t>r.len+2)return 1e9;return Math.abs(-dx*uy+dy*ux)-r.hw}
 var best=1e9;for(var i=w.k0;i<w.k1;i++){var ax=r.xs[i],ay=r.ys[i],ex=wd(r.xs[i+1],ax),ey=wd(r.ys[i+1],ay),l2=ex*ex+ey*ey||1,dx2=wd(x,ax),dy2=wd(y,ay),t2=clamp((dx2*ex+dy2*ey)/l2,0,1),d=Math.hypot(dx2-ex*t2,dy2-ey*t2);if(d<best)best=d}return best-r.hw}
function specRoadTidy(){var n=0,nb=0,by={};SPEC.forEach(function(s){var W=specRoadsAlong(s);s._rw=W.length?W:null;if(!W.length)return;
  function onW(x,y,gap){for(var i=0;i<W.length;i++)if(specRoadGap(W[i],x,y)<gap)return true;return false}
  var rm=[];PH.q(s.x-2,s.y-2,s.x+s.w+2,s.y+s.h+2,function(p){if(p.hid||p.t===P_CAR)return;var dx=wd(p.x,s.x),dy=wd(p.y,s.y);if(dx<-2||dy<-2||dx>s.w+2||dy>s.h+2)return;
   if(onW(p.x,p.y,Math.max(1,(p.r||0)*.8)))rm.push(p)});
  rm.forEach(function(p){hashRmNear(PH,p,p.x,p.y,Math.max(p.r||2,12)+2);p.hid=1;p.gone=1;n++;by['p:'+s.k]=(by['p:'+s.k]||0)+1});
  BH.q(s.x,s.y,s.x+s.w,s.y+s.h,function(b){if(b.hid||b.ns||b.c4)return;var dx=wd(b.x,s.x),dy=wd(b.y,s.y);if(dx<-4||dy<-4||dx+b.w>s.w+4||dy+b.h>s.h+4)return;
   for(var y=1;y<b.h;y+=4)for(var x=1;x<b.w;x+=4)if(onW(b.x+x,b.y+y,-1)){b.hid=1;nb++;by[s.k]=(by[s.k]||0)+1;return}})});
 return {props:n,blds:nb,by:by}}
// a street that ends at a yard, a dock or a car park is its way in: a tyre wall, cones or concrete blocks across its mouth go
// (the Harumi docks had a row of tyres right across the street, so the navigator sent you into a wall)
function specMouthTidy(){var n=0,BLK={};BLK[P_TIRE]=1;BLK[P_BLOCK]=1;BLK[P_BARR]=1;BLK[P_CONE]=1;BLK[P_BENCH]=1;
 SPEC.forEach(function(s){var seen=new Set();RH.q(s.x-20,s.y-20,s.x+s.w+20,s.y+s.h+20,function(sp){var r=sp.r;if(r.k!=='loc'||seen.has(r))return;seen.add(r);
  [0,1].forEach(function(e){var ex=r.xs[e],ey=r.ys[e],dx=wd(ex,s.x),dy=wd(ey,s.y);if(dx<-6||dy<-6||dx>s.w+6||dy>s.h+6)return;
   var ux=wd(ex,r.xs[1-e])/r.len,uy=wd(ey,r.ys[1-e])/r.len,m=r.hw+6,rm=[];
   PH.q(ex-m-50,ey-m-50,ex+m+50,ey+m+50,function(p){if(p.hid||!BLK[p.t])return;var px=wd(p.x,ex),py=wd(p.y,ey),al=px*ux+py*uy,ac=Math.abs(-px*uy+py*ux);if(al>-12&&al<44&&ac<m+(p.r||2))rm.push(p)});
   rm.forEach(function(p){hashRmNear(PH,p,p.x,p.y,Math.max(p.r||2,12)+2);p.hid=1;p.gone=1;n++})})})});return n}
var _bbSRT=buildBrk;buildBrk=function(){_bbSRT();try{window.SRTIDY=specRoadTidy();window.SRTIDY.mouth=specMouthTidy()}catch(e){console.error(e)}};

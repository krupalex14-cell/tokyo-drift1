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

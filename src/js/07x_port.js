// ===== the old cranes of the docks (Misha's stash is "under the old crane", and there was no crane anywhere)
// and the three garages behind the onsen (Hana: "«3» is a garage, there are three of them") =====
function pxDirty(x0,y0,x1,y1){chunkDirty(x0,y0,x1,y1);var a=Math.floor(x0/CH),b=Math.floor(x1/CH),c=Math.floor(y0/CH),d=Math.floor(y1/CH);
 for(var y=c;y<=d;y++)for(var x=a;x<=b;x++){var k=(((y%NC)+NC)%NC)*NC+(((x%NC)+NC)%NC);if(typeof BJ!=='undefined')BJ.delete(k)}}
function pxGlyph(g,G,x,y,col){g.fillStyle=col;for(var r=0;r<5;r++)for(var q=0;q<3;q++)if(G[r][q]==='#')g.fillRect(x+q,y+r,1,1)}
var GNUM={1:['.#.','##.','.#.','.#.','###'],2:['###','..#','###','#..','###'],3:['###','..#','.##','..#','###']};

// ---------------- garages
var GARS=[];
// a row of three garages built into the onsen's wall on the side that faces a street, doors to the street
function garPlace(s){var L=54,D=24,best=null;
 [['e',1,0],['w',-1,0],['s',0,1],['n',0,-1]].forEach(function(sd){var f=sd[0],nx=sd[1],ny=sd[2],along=nx?s.h:s.w;
  for(var t=10;t+L<=along-10;t+=4){if(f==='s'&&Math.abs(t+L/2-s.w/2)<L/2+22)continue;
   var r=f==='e'?{x:s.x+s.w-D,y:s.y+t,w:D,h:L}:f==='w'?{x:s.x,y:s.y+t,w:D,h:L}:f==='s'?{x:s.x+t,y:s.y+s.h-D,w:L,h:D}:{x:s.x+t,y:s.y,w:L,h:D};
   var bad=false;BH.q(r.x-3,r.y-3,r.x+r.w+3,r.y+r.h+3,function(b){if(bad||b.hid||b.w<=4||b.h<=4)return;var ox=Math.min(r.x+r.w+3,b.x+b.w)-Math.max(r.x-3,b.x),oy=Math.min(r.y+r.h+3,b.y+b.h)-Math.max(r.y-3,b.y);if(ox>0&&oy>0)bad=true});if(bad)continue;
   PH.q(r.x,r.y,r.x+r.w,r.y+r.h,function(p){if(bad||p.hid||p.gone)return;if((p.t===P_TREE||p.t===P_SAKURA)&&wd(p.x,r.x)>-2&&wd(p.y,r.y)>-2&&wd(p.x,r.x)<r.w+2&&wd(p.y,r.y)<r.h+2)bad=true});if(bad)continue;
   // from each door straight out to the asphalt, with nothing in the way
   var cx0=r.x+r.w/2,cy0=r.y+r.h/2,tx=-ny,ty=nx,reach=0;
   for(var k=-1;k<=1&&!bad;k++){var fx=cx0+nx*(D/2+1)+tx*k*17,fy=cy0+ny*(D/2+1)+ty*k*17,got=false;
    for(var o=2;o<=74;o+=3){var x=fx+nx*o,y=fy+ny*o;if(ptInBld(x,y)||ptInBld(x+tx*6,y+ty*6)||ptInBld(x-tx*6,y-ty*6)){bad=true;break}var e=roadEdgeNear(x,y,80);if(e&&e.gap<-4){got=true;reach=Math.max(reach,o);break}}
    if(!got)bad=true}
   if(bad)continue;var sc=reach+Math.abs(t+L/2-along/2)*.05;if(!best||sc<best.sc)best={sc:sc,r:r,f:f,nx:nx,ny:ny,s:s}}});
 return best}
function garBuild(){GARS=[];SPEC.forEach(function(s){if(s.k!=='onsen')return;var g=garPlace(s);if(!g)return;var r=g.r;
  // open the wall where the garages stand (the garages are the wall there)
  var cut=[];BH.q(r.x-1,r.y-1,r.x+r.w+1,r.y+r.h+1,function(b){if(b.hid||!(b.w<=4||b.h<=4))return;var ox=Math.min(r.x+r.w,b.x+b.w)-Math.max(r.x,b.x),oy=Math.min(r.y+r.h,b.y+b.h)-Math.max(r.y,b.y);if(ox>0&&oy>0&&cut.indexOf(b)<0)cut.push(b)});
  cut.forEach(function(b){b.hid=1;var o={st:b.st,ht:b.ht,d:b.d,sd:b.sd};function piece(x,y,w,h){if(w<1||h<1)return;var q={x:x,y:y,w:w,h:h};for(var k in o)q[k]=o[k];addB(q)}
   if(b.w<=4){piece(b.x,b.y,b.w,r.y-b.y);piece(b.x,r.y+r.h,b.w,b.y+b.h-(r.y+r.h))}else{piece(b.x,b.y,r.x-b.x,b.h);piece(r.x+r.w,b.y,b.x+b.w-(r.x+r.w),b.h)}});
  PH.q(r.x-2,r.y-2,r.x+r.w+2,r.y+r.h+2,function(p){if(p.hid||p.gone)return;if(wd(p.x,r.x)>-3&&wd(p.y,r.y)>-3&&wd(p.x,r.x)<r.w+3&&wd(p.y,r.y)<r.h+3){p.hid=1;p.gone=1}});
  var B={x:r.x,y:r.y,w:r.w,h:r.h,st:5,ht:1,ns:1,d:s.d,sd:s.sd,gar:1};addB(B);
  var G={b:B,s:s,f:g.f,nx:g.nx,ny:g.ny,cx:r.x+r.w/2,cy:r.y+r.h/2,L:54,D:24};
  // door №3 (the right one, seen from the street) and the kerb in front of it
  G.d3={x:G.cx+g.nx*(G.D/2+2)+g.ny*17,y:G.cy+g.ny*(G.D/2+2)-g.nx*17};GARS.push(G)})}
var GARS_OK=0,_bbGar=buildBrk;buildBrk=function(){_bbGar();try{garBuild()}catch(e){console.error(e)}GARS_OK=1};
var _dBGar=drawB;drawB=function(g,b,x,y,an){if(b.gar)return;return _dBGar(g,b,x,y,an)};
// the stop on the street in front of door №3
function garStop(G){var x=G.d3.x,y=G.d3.y,e=null,o;for(o=4;o<=80;o+=4){e=roadEdgeNear(x+G.nx*o,y+G.ny*o,80);if(e&&e.gap<-6)break}if(!e)return null;var r=e.r,s;
 if(r.k==='loc'){var ux=(r.xs[1]-r.xs[0])/r.len,uy=(r.ys[1]-r.ys[0])/r.len;s=clamp(wd(x,r.xs[0])*ux+wd(y,r.ys[0])*uy,8,r.len-8)}
 else{var bk=0,bd=1e9;for(var k=0;k<r.n;k++){var d=Math.hypot(wd(r.xs[k],x),wd(r.ys[k],y));if(d<bd){bd=d;bk=k}}s=bk*r.ds}
 r.pt(s,TMP);var sd=((-TMP[3])*wd(x,TMP[0])+TMP[2]*wd(y,TMP[1]))>0?1:-1,u=(r.k==='loc'?r.hw*.42:r.hw-18)*sd;
 return {x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3]*sd,TMP[2]*sd),r:r,s:s,sd:sd,d:0}}
function garDraw(G){var x=SX(G.cx),y=SY(G.cy);if(x<-60||y<-60||x>VW+60||y>VH+60)return;var L=G.L,D=G.D,open=typeof c4After==='function'&&c4After('e5'),k,i;
 var bx=SX(G.b.x),by=SY(G.b.y);cx.fillStyle='rgba(18,10,52,.32)';cx.fillRect(Math.round(bx+3),Math.round(by+4),G.b.w,G.b.h);
 cx.save();cx.translate(Math.round(x),Math.round(y));cx.rotate(Math.atan2(G.nx,-G.ny));
 // corrugated roof, the front wall with the three doors along local y=-D/2
 cx.fillStyle='#14101e';cx.fillRect(-L/2-1,-D/2-1,L+2,D+2);cx.fillStyle='#5c5a6c';cx.fillRect(-L/2,-D/2+9,L,D-9);cx.fillStyle='#4a4858';for(k=-L/2+1;k<L/2;k+=3)cx.fillRect(k,-D/2+10,1,D-11);
 cx.fillStyle='#6e6c80';cx.fillRect(-L/2,-D/2+9,L,1);cx.fillStyle='#3a3646';cx.fillRect(-L/2,-D/2,L,9);
 for(i=0;i<3;i++){var gx=(1-i)*17-7;cx.fillStyle='#14101e';cx.fillRect(gx-1,-D/2,16,9);
  if(i===2&&open){cx.fillStyle='#0c0a14';cx.fillRect(gx,-D/2,14,8);cx.fillStyle='#b9bccb';cx.fillRect(gx+2,-D/2,10,5);cx.fillStyle='#d6d8e2';cx.fillRect(gx+3,-D/2+1,8,1)}
  else{cx.fillStyle=i===2?'#b2b8ca':'#8e93a4';cx.fillRect(gx,-D/2,14,8);cx.fillStyle='#5e6374';for(k=-D/2+1;k<-D/2+8;k+=2)cx.fillRect(gx,k,14,1)}}
 // a little lamp over №3
 cx.fillStyle='#ffe2a0';cx.fillRect(-17-1,-D/2+9,3,2);cx.restore();
 // the plates 1 2 3 over the doors, kept upright; №3 is the brass one
 var a=Math.atan2(G.nx,-G.ny),ca=Math.cos(a),sa=Math.sin(a);for(i=0;i<3;i++){var lx=(1-i)*17,ly=-D/2+14,px=Math.round(x+lx*ca-ly*sa)-5,py=Math.round(y+lx*sa+ly*ca)-4;
  cx.fillStyle='#14101e';cx.fillRect(px,py,11,9);cx.fillStyle=i===2?'#e0b060':'#9a98a8';cx.fillRect(px+1,py+1,9,7);pxGlyph(cx,GNUM[i+1],px+4,py+2,'#2a1a0a')}}
function garGlow(G,lv){var x=SX(G.cx),y=SY(G.cy);if(x<-80||y<-80||x>VW+80||y>VH+80)return;var a=Math.atan2(G.nx,-G.ny),ca=Math.cos(a),sa=Math.sin(a),lx=-17,ly=-G.D/2+8,px=x+lx*ca-ly*sa,py=y+lx*sa+ly*ca;
 gl(px,py,6,6,[255,230,170],lv*.9);gl(px+G.nx*10,py+G.ny*10,30,24,[255,200,130],lv*.42)}

// ---------------- cranes
var CRANES=[];
// a rusty portal crane on the yard side of a stop, its jib swung out over the street (so the stop really is "under the crane")
function craneAt(q,an0){if(!q)return null;var bestY=null,bd=1e9;SPEC.forEach(function(s){if(s.k!=='yard'&&s.k!=='drift')return;var dx=Math.max(wd(s.x,q.x),0,wd(q.x,s.x+s.w));var dy=Math.max(wd(s.y,q.y),0,wd(q.y,s.y+s.h)),d=Math.hypot(dx,dy);if(d<bd){bd=d;bestY=s}});
 var tries=[];if(bestY&&bd<140){var s=bestY,px=clamp(q.x+wd(clamp(q.x,s.x,s.x+s.w),q.x),s.x+24,s.x+s.w-24),py=clamp(q.y+wd(clamp(q.y,s.y,s.y+s.h),q.y),s.y+24,s.y+s.h-24),nx=wd(px,q.x),ny=wd(py,q.y),nl=Math.hypot(nx,ny)||1;nx/=nl;ny/=nl;
  for(var sh=0;sh<=60;sh+=20)for(var sg=-1;sg<=1;sg+=2){var tx=-ny*sh*sg,ty=nx*sh*sg;tries.push({x:px+tx,y:py+ty,nx:nx,ny:ny})}}
 for(var k=0;k<16;k++){var a=k/16*TAU;tries.push({x:q.x+Math.cos(a)*62,y:q.y+Math.sin(a)*62,nx:Math.cos(a),ny:Math.sin(a)})}
 for(var i=0;i<tries.length;i++){var c=tries[i],ok=true,tx2=-c.ny,ty2=c.nx,legs=[];
  for(var a1=-1;a1<=1&&ok;a1+=2)for(var b1=-1;b1<=1;b1+=2){var lx=c.x+c.nx*16*a1+tx2*16*b1,ly=c.y+c.ny*16*a1+ty2*16*b1;legs.push([wrap(lx),wrap(ly)]);if(roadSurfGap(lx,ly)<4||inRiver(lx,ly,4)){ok=false;break}
   var other=false;BH.q(lx-6,ly-6,lx+6,ly+6,function(b){if(!b.hid&&b.st!==16&&wd(lx,b.x)>-6&&wd(ly,b.y)>-6&&wd(lx,b.x)<b.w+6&&wd(ly,b.y)<b.h+6)other=true});if(other){ok=false;break}}
  if(!ok)continue;
  // the jib reaches over the stop
  var jx=wd(q.x,c.x),jy=wd(q.y,c.y),jl=Math.hypot(jx,jy);return {x:wrap(c.x),y:wrap(c.y),nx:c.nx,ny:c.ny,legs:legs,ja:Math.atan2(jy,jx)+(an0||.28),jl:Math.max(60,jl+28)}}
 return null}
function craneBuild(C){
 // the containers it stands among make room; the legs stand on concrete feet
 BH.q(C.x-30,C.y-30,C.x+30,C.y+30,function(b){if(b.hid||b.st!==16)return;C.legs.forEach(function(l){if(wd(l[0],b.x)>-8&&wd(l[1],b.y)>-8&&wd(l[0],b.x)<b.w+8&&wd(l[1],b.y)<b.h+8)b.hid=1})});
 C.legs.forEach(function(l){PH.q(l[0]-12,l[1]-12,l[0]+12,l[1]+12,function(p){if(!p.hid&&!p.crane&&Math.hypot(wd(p.x,l[0]),wd(p.y,l[1]))<(p.r||4)+8){hashRmNear(PH,p,p.x,p.y,Math.max(p.r||2,12)+2);p.hid=1;p.gone=1}});
  var f={x:l[0],y:l[1],w:6,h:6,r:0,crane:1};PH.add(f,f.x-10,f.y-10,f.x+10,f.y+10)});
 pxDirty(C.x-60,C.y-60,C.x+60,C.y+60);CRANES.push(C)}
function craneDraw(C,top){var x=SX(C.x),y=SY(C.y),R=C.jl+50;if(x<-R||y<-R||x>VW+R||y>VH+R)return;var ja=C.ja,jc=Math.cos(ja),js=Math.sin(ja),pa=Math.atan2(C.nx,-C.ny),k,Lj=C.jl;
 function jib(g,sh){// the lattice jib, tapering to the tip, and the counter-jib with its weight behind the machinery house
  g.fillStyle=sh?sh:'#14101e';g.beginPath();g.moveTo(8,-6);g.lineTo(Lj,-3);g.lineTo(Lj,3);g.lineTo(8,6);g.closePath();g.fill();g.fillRect(-30,-5,22,10);g.fillRect(-36,-8,10,16);if(sh)return;
  g.fillStyle='#c4642c';for(k=10;k<Lj;k++){var w=Math.round(5-(k-10)/(Lj-10)*2.6);g.fillRect(k,-w,1,1);g.fillRect(k,w-1,1,1)}
  g.fillStyle='#e8954e';for(k=10;k<Lj-2;k+=6){var w2=Math.round(5-(k-10)/(Lj-10)*2.6);g.fillRect(k,-w2,1,w2*2)}
  g.fillStyle='#8e4422';for(k=12;k<Lj-4;k+=6){var w3=Math.round(5-(k-10)/(Lj-10)*2.6)-1;for(var q=0;q<w3*2;q++)g.fillRect(k+Math.round(q*3/(w3*2)),-w3+q,1,1)}
  g.fillStyle='#f4f0e8';g.fillRect(Lj-7,-3,3,6);g.fillStyle='#d83a3a';g.fillRect(Lj-4,-3,3,6);
  g.fillStyle='#b25a28';g.fillRect(-29,-4,20,8);g.fillStyle='#8e4422';for(k=-28;k<-10;k+=4)g.fillRect(k,-3,2,6);
  g.fillStyle='#4e4e5c';g.fillRect(-35,-7,8,14);g.fillStyle='#6a6a78';g.fillRect(-34,-6,6,4);g.fillStyle='#3a3a46';g.fillRect(-34,3,6,3)}
 if(!top){
  // shadows on the ground (it is tall: thrown well down and to the right)
  cx.save();cx.translate(Math.round(x+16),Math.round(y+20));cx.save();cx.rotate(pa);cx.fillStyle='rgba(18,10,52,.24)';cx.fillRect(-19,-19,38,4);cx.fillRect(-19,15,38,4);cx.fillRect(-19,-15,4,30);cx.fillRect(15,-15,4,30);cx.restore();
  cx.rotate(ja);jib(cx,'rgba(18,10,52,.24)');cx.fillRect(-12,-10,24,20);cx.restore();return}
 cx.save();cx.translate(Math.round(x),Math.round(y));
 // the portal: a square frame on four legs, cross-braced
 cx.save();cx.rotate(pa); cx.fillStyle='#14101e';cx.fillRect(-19,-19,38,5);cx.fillRect(-19,14,38,5);cx.fillRect(-19,-19,5,38);cx.fillRect(14,-19,5,38);
 cx.fillStyle='#b85e2a';cx.fillRect(-18,-18,36,3);cx.fillRect(-18,15,36,3);cx.fillRect(-18,-18,3,36);cx.fillRect(15,-18,3,36);
 cx.fillStyle='#d98a44';cx.fillRect(-18,-18,36,1);cx.fillRect(-18,15,36,1);
 cx.fillStyle='#7a3a1a';for(k=-14;k<=14;k+=2){cx.fillRect(k,k,2,2);cx.fillRect(k,-k,2,2)}
 for(var a1=-1;a1<=1;a1+=2)for(var b1=-1;b1<=1;b1+=2){cx.fillStyle='#14101e';cx.fillRect(b1*16-4,a1*16-4,8,8);cx.fillStyle='#5e2a14';cx.fillRect(b1*16-3,a1*16-3,6,6);cx.fillStyle='#8e4422';cx.fillRect(b1*16-3,a1*16-3,6,1)}
 cx.restore();
 cx.rotate(ja);jib(cx,null);
 // the machinery house and the driver's cab on the turntable
 cx.fillStyle='#14101e';cx.fillRect(-13,-11,26,22);cx.fillStyle='#c26a2e';cx.fillRect(-12,-10,24,20);cx.fillStyle='#e29a52';cx.fillRect(-12,-10,24,3);cx.fillStyle='#9a4e24';for(k=-10;k<10;k+=4)cx.fillRect(k,-6,2,14);
 cx.fillStyle='#1e2a3a';cx.fillRect(6,4,6,6);cx.fillStyle='#4a6a8a';cx.fillRect(7,5,4,2);cx.fillStyle='#6e3418';cx.fillRect(-8,7,4,2);cx.fillRect(2,-8,3,2);
 cx.restore();
 // the hook hangs off the tip on its cable
 var hx=Math.round(x+jc*(Lj-6)),hy=Math.round(y+js*(Lj-6)),sw=Math.round(Math.sin(TIME*.9+C.x)*1);cx.fillStyle='#2a2a34';cx.fillRect(hx,hy,1,12);cx.fillStyle='#14101e';cx.fillRect(hx-3+sw,hy+12,7,5);cx.fillStyle='#ffd23a';cx.fillRect(hx-2+sw,hy+13,5,3);cx.fillStyle='#14101e';cx.fillRect(hx+sw,hy+17,1,2)}
function craneGlow(C,lv){var x=SX(C.x),y=SY(C.y),R=C.jl+40;if(x<-R||y<-R||x>VW+R||y>VH+R)return;var on=Math.sin(TIME*2.4+C.x)>.2;
 if(on){var tx=x+Math.cos(C.ja)*(C.jl-2),ty=y+Math.sin(C.ja)*(C.jl-2);gl(tx,ty,5,5,[255,60,60],.4+lv*.5);gl(tx,ty,16,16,[255,40,40],.28+lv*.2)}gl(x,y-2,5,5,[255,70,70],(on?.7:.25)*(.4+lv*.6))}
var _spPX=stPlaces;stPlaces=function(){var P=_spPX();if(P._px||!GARS_OK||!NH)return P;P._px=1;
 try{
  // the onsen: Misha's garage №3
  if(GARS.length){var on=P.onsen,G=null,bd=1e9;GARS.forEach(function(g){var d=Math.hypot(wd(g.cx,on.x),wd(g.cy,on.y));if(d<bd){bd=d;G=g}});
   if(G&&bd<700){var st=garStop(G);if(st){st.name=P.onsen.name;P.onsen=st;G.main=1;C4G=null}}}
  // the old cranes: at the crane itself, at the stash and at the yards of the docks race
  var seen=[];['crane','yd2','yd1','yardfar'].forEach(function(k,i){var q=P[k];if(!q)return;for(var j=0;j<seen.length;j++)if(Math.hypot(wd(seen[j].x,q.x),wd(seen[j].y,q.y))<160)return;var C=craneAt(q,i%2?-.3:.28);if(C){C.k=k;craneBuild(C);seen.push(q)}})
 }catch(e){console.error(e)}
 return P};
var _dzPX=drawZones;drawZones=function(l){_dzPX(l);if(!window.worldReady)return;var i;
 if(l===0){for(i=0;i<GARS.length;i++)garDraw(GARS[i]);for(i=0;i<CRANES.length;i++)craneDraw(CRANES[i],false)}
 else for(i=0;i<CRANES.length;i++)craneDraw(CRANES[i],true)};
var _edPX=emisDraw;emisDraw=function(a){_edPX(a);var i;for(i=0;i<CRANES.length;i++)craneGlow(CRANES[i],a);if(a>.05)for(i=0;i<GARS.length;i++)garGlow(GARS[i],a)};
// the old shed / borrowed-building garage are not needed where the real ones stand
var _c4SD=c4ShedDraw;c4ShedDraw=function(){if(GARS.some(function(g){return g.main}))return;_c4SD()};

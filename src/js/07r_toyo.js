// ===== Grandma Toyo's onigiri shop: a small old wooden shop by the pagoda (replaces the street cart) =====
// Built once after the world is generated (no RNG): on the pavement side of Toyo's road near the old stop, facing the road;
// the townhouses it overlaps are taken out. Tiled roof, wooden front with a noren, lanterns, a shop window full of onigiri,
// a bench and a sandwich board on the forecourt, and an upright 'おにぎり' signboard.
var TOYO=null,TOYSPR=null,TYW=92,TYD=64,TYF=34;
function tyLocal(R,x,y){var dx=wd(x,R.ox),dy=wd(y,R.oy);return[dx*R.xv[0]+dy*R.xv[1],dx*R.yv[0]+dy*R.yv[1]]}
function tyWorld(R,px,py){return[wrap(R.ox+R.xv[0]*px+R.yv[0]*py),wrap(R.oy+R.xv[1]*px+R.yv[1]*py)]}
function tyGeom(r,s,sd){r.pt(zcs(r,s),TMP);var P0=[TMP[0],TMP[1]],A=[TMP[2],TMP[3]],N=[-A[1]*sd,A[0]*sd],V0=-1e9;
 // the pavement edge along the frontage (the road may bend a little)
 for(var q=-TYW/2-10;q<=TYW/2+10;q+=4){r.pt(zcs(r,s+q),TMP2);var dx=wd(TMP2[0],P0[0]),dy=wd(TMP2[1],P0[1]),v=dx*N[0]+dy*N[1];V0=Math.max(V0,v+r.hw+r.sw+2)}
 V0=Math.ceil(V0);var yv=[-N[0],-N[1]],xv=[yv[1],-yv[0]],V1=V0+TYD,ox=P0[0]+N[0]*V1-xv[0]*TYW/2,oy=P0[1]+N[1]*V1-xv[1]*TYW/2;
 return{r:r,s:s,sd:sd,P0:P0,A:A,N:N,V0:V0,V1:V1,ox:wrap(ox),oy:wrap(oy),xv:xv,yv:yv}}
function tyBox(R,m){var c=[tyWorld(R,-m,-m),tyWorld(R,TYW+m,-m),tyWorld(R,-m,TYD+m),tyWorld(R,TYW+m,TYD+m)],x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
 c.forEach(function(p){var x=R.ox+wd(p[0],R.ox),y=R.oy+wd(p[1],R.oy);x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)});return{x0:x0,y0:y0,x1:x1,y1:y1}}
function tyIn(R,x,y,m){var l=tyLocal(R,x,y);return l[0]>-m&&l[0]<TYW+m&&l[1]>-m&&l[1]<TYD+m}
// a spot is fine if no landmark, other road, river or deck is in the way (ordinary buildings are cleared)
function tyFree(R){var b=tyBox(R,6),ok=true;
 SPEC.forEach(function(S2){if(!ok)return;for(var px=0;px<=TYW;px+=6)for(var py=0;py<=TYD;py+=6){var w=tyWorld(R,px,py);if(wd(w[0],S2.x)>-3&&wd(S2.x+S2.w,w[0])>-3&&wd(w[1],S2.y)>-3&&wd(S2.y+S2.h,w[1])>-3){ok=false;return}}});if(!ok)return false;
 RH.q(b.x0-40,b.y0-40,b.x1+40,b.y1+40,function(sp){if(!ok)return;var r2=sp.r;for(var i=sp.i;i<=sp.j;i++){if(r2===R.r)continue;var m=(r2.hw||12)+(r2.sw||0)+4;if(tyIn(R,r2.xs[i],r2.ys[i],m)){ok=false;return}}});if(!ok)return false;
 (LJ||[]).forEach(function(j){if(ok&&tyIn(R,j.x,j.y,j.r+j.sw+4))ok=false});if(!ok)return false;
 for(var px=0;px<=TYW;px+=12)for(var py=0;py<=TYD;py+=12){var w=tyWorld(R,px,py);if(inRiver(w[0],w[1],8)||nearDeck(w[0],w[1],10))return false}
 return true}
function toyoBuild(){TOYO=null;var P=stPlaces(),t=P.toyo;if(!t||!t.r||t.r.k==='loc')return;var r=t.r,best=null;
 for(var q=0;q<=640&&!best;q+=6)[q,-q].forEach(function(dq){if(best)return;var s=t.s+dq;if(s<(r.za||0)+60||s>r.len-(r.zb||0)-60)return;[t.sd||1,-(t.sd||1)].forEach(function(sd,k){if(best||(k&&q<200))return;var R=tyGeom(r,s,sd);if(tyFree(R))best=R})});
 if(!best)return;var R=best;TOYO=R;
 // clear the plot: townhouses, trees and posts on it
 var b=tyBox(R,4);BH.q(b.x0,b.y0,b.x1,b.y1,function(B){if(B.hid)return;for(var px=B.x+2;px<B.x+B.w-1;px+=4)for(var py=B.y+2;py<B.y+B.h-1;py+=4)if(tyIn(R,px,py,2)){B.hid=1;return}});
 var rm=[];PH.q(b.x0,b.y0,b.x1,b.y1,function(p){if(tyIn(R,p.x,p.y,3))rm.push(p)});rm.forEach(function(p){var m=p.t===P_CAR?20:Math.max(p.r||2,12);hashRmNear(PH,p,p.x,p.y,m+2);p.hid=1;p.gone=1});
 var bc=tyWorld(R,TYW/2,(TYF+14)/2);R.bld={x:bc[0],y:bc[1],hx:TYW/2-5,hy:(TYF+14)/2-2,a:Math.atan2(R.xv[1],R.xv[0])};
 var bb=tyBox(R,20);LMI.push({k:'toyo',bx0:bb.x0,by0:bb.y0-40,bx1:bb.x1,by1:bb.y1});
 // the story stop: the kerb lane right in front of the shop
 r.pt(zcs(r,R.s),TMP);var u=(r.hw-18)*(R.sd);var nm=t.name;P.toyo={x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3]*R.sd,TMP[2]*R.sd),r:r,s:R.s,sd:R.sd,name:nm,shop:1}}
var _bbTy=buildBrk;buildBrk=function(){_bbTy();try{toyoBuild()}catch(e){TOYO=null;console.error(e)}};
// ---- pixel art (sprite space: x along the road, y from the back of the shop (0) to the pavement (TYD))
var TKANA={'お':['.#..#','####.','.#.#.','.##.#','##.#.'],'に':['#.##.','#....','#....','#.#..','#..##'],'ぎ':['.#.#.','####.','.###.','..#..','.###.'],'り':['#..#.','#..#.','#..#.','...#.','..#..']};
function toyoSprite(){if(TOYSPR)return TOYSPR;var c=mkCanvas(TYW,TYD),g=c.getContext('2d');function R(x,y,w,h,col){g.fillStyle=col;g.fillRect(x,y,w,h)}var i,j,F=TYF;
 // forecourt: worn stone slabs
 R(0,0,TYW,TYD,'#9c968a');for(i=0;i<TYW;i+=6)for(j=F+14;j<TYD;j+=5){R(i,j,6,5,hsh(i,j,61)<.5?'#a8a294':'#948e82');R(i,j,6,1,'#7e786e');R(i,j,1,5,'#7e786e')}
 // soft shadow, the roof: dark blue-grey kawara tiles in rows, a ridge on top, eaves overhanging
 R(3,3,TYW-4,F+12,'rgba(10,8,24,.5)');R(1,0,TYW-2,F+2,'#232838');
 for(j=2;j<F;j+=3){R(2,j,TYW-4,2,'#3c465c');for(i=2+(j%6?0:2);i<TYW-2;i+=4)R(i,j+2,1,1,'#2a3042')}
 for(j=2;j<F;j+=3)for(i=3;i<TYW-3;i+=4)R(i,j,1,1,'#55617c');
 R(2,1,TYW-4,2,'#6a7690');R(4,1,2,2,'#8a96b0');R(TYW-6,1,2,2,'#8a96b0');R(1,F-1,TYW-2,2,'#1a1e2a');
 // a little roof over the door, a chimney (the rice cooker inside)
 R(TYW/2-15,F-4,30,5,'#2e3648');R(TYW/2-15,F-4,30,1,'#6a7690');R(16,7,7,8,'#5a4a3e');R(17,7,5,1,'#8a7a6a');
 // front wall: dark timber with slats
 R(1,F+1,TYW-2,14,'#4a2e1c');for(i=2;i<TYW-2;i+=3)R(i,F+2,1,12,'#3a2214');R(1,F+1,TYW-2,1,'#2a180e');
 // shop window (left): warm light and the onigiri on a counter
 R(5,F+3,30,9,'#2a180e');R(6,F+4,28,7,'#ffe2a0');R(6,F+9,28,2,'#8a5a34');
 for(i=0;i<6;i++){var ox=7+i*4.5|0;R(ox+1,F+6,2,1,'#f8f6f0');R(ox,F+7,4,2,'#f8f6f0');R(ox+1,F+8,2,1,'#1c2a1e')}
 // noren over the door: indigo with a white rice-ball crest, split in three
 var dx=TYW/2-9;R(dx,F+2,18,11,'#141c40');R(dx+1,F+2,16,8,'#1e2a5a');R(dx+6,F+2,1,8,'#141c40');R(dx+11,F+2,1,8,'#141c40');R(dx+7,F+4,4,1,'#e8ecf4');R(dx+6,F+5,6,2,'#e8ecf4');R(dx+7,F+6,4,1,'#2a3a2e');
 R(dx+1,F+10,16,3,'#1a1008');
 // right: a sliding lattice door and the menu board
 R(TYW-31,F+3,15,10,'#6a4428');for(i=TYW-30;i<TYW-17;i+=3)R(i,F+3,1,10,'#3a2214');for(j=F+5;j<F+13;j+=3)R(TYW-31,j,15,1,'#3a2214');
 R(TYW-13,F+4,9,8,'#1e2216');R(TYW-12,F+5,7,1,'#e8e0c8');R(TYW-12,F+7,5,1,'#e8e0c8');R(TYW-12,F+9,6,1,'#e8e0c8');
 // red paper lanterns either side of the door
 [dx-6,dx+20].forEach(function(lx){R(lx,F+3,4,6,'#ff5a3a');R(lx,F+3,4,1,'#1a1008');R(lx,F+8,4,1,'#1a1008');R(lx+1,F+4,2,4,'#ff8a5a')});
 // forecourt: two benches, the chalk board, a pot of bamboo; the nobori pole
 [[8,F+18],[30,F+22]].forEach(function(q){R(q[0],q[1],18,3,'#8a5a34');R(q[0],q[1],18,1,'#b07a48');R(q[0]+1,q[1]+3,2,2,'#4a2e1c');R(q[0]+15,q[1]+3,2,2,'#4a2e1c')});
 R(TYW/2+16,F+17,7,8,'#2a2a26');R(TYW/2+17,F+18,5,5,'#1e2a1e');R(TYW/2+18,F+19,3,1,'#e8e0c8');R(TYW/2+18,F+21,2,1,'#ffd23a');
 R(TYW-15,F+16,7,7,'#6a4a3a');R(TYW-14,F+17,5,5,'#3a7a40');R(TYW-13,F+15,1,3,'#5aa04a');R(TYW-11,F+14,1,4,'#5aa04a');
 R(TYW-4,F+8,1,18,'#2a2a30');
 TOYSPR=c;return c}
function toyoGround(g,it,X0,Y0){var R=TOYO;if(!R)return;g.save();g.imageSmoothingEnabled=false;g.translate(wd(R.ox,X0),wd(R.oy,Y0));g.transform(R.xv[0],R.xv[1],R.yv[0],R.yv[1],0,0);g.drawImage(toyoSprite(),0,0);g.restore()}
function toyoTop(u,it,X0,Y0){var R=TOYO;if(!R)return;
 // upright wooden signboard over the eaves: おにぎり
 var c=tyWorld(R,TYW/2,TYF-4),bx=Math.round(wd(c[0],X0))-27,by=Math.round(wd(c[1],Y0))-16;
 u.fillStyle='rgba(10,8,24,.45)';u.fillRect(bx+3,by+4,54,15);u.fillStyle='#2a180e';u.fillRect(bx-1,by-1,56,17);u.fillStyle='#8a5a34';u.fillRect(bx,by,54,15);u.fillStyle='#f0e4c4';u.fillRect(bx+2,by+2,50,11);
 u.fillStyle='#1a1008';var gx=bx+4;['お','に','ぎ','り'].forEach(function(ch){var G=TKANA[ch];for(var yy=0;yy<5;yy++)for(var xx=0;xx<5;xx++)if(G[yy][xx]==='#')u.fillRect(gx+xx*2,by+3+yy*2-1,2,2);gx+=12});
 u.fillStyle='#d8262e';u.fillRect(bx+2,by+13,50,1)}
// the nobori banner flutters in the wind (drawn live, it moves)
function toyoFlag(){var R=TOYO;if(!R||mode!=='game')return;var p=tyWorld(R,TYW-4,TYF+9),x=SX(p[0]),y=SY(p[1]);if(x<-30||y<-40||x>VW+30||y>VH+30)return;
 var wv=(typeof W!=='undefined'?W.wind:.15)||.15,ph=TIME*(3+wv*6);for(var k=0;k<14;k++){var sw=Math.round(Math.sin(ph-k*.45)*(1+wv*2.5)*k/14);cx.fillStyle=k%5===2?'#f4f0f6':'#d8262e';cx.fillRect(x-6+sw,y-16+k,5,1)}
 cx.fillStyle='#f4f0f6';cx.fillRect(x-5,y-12,1,1);cx.fillRect(x-4,y-8,1,1)}
var _lmGT=lmGround;lmGround=function(g,it,X0,Y0,AN){if(it.k==='toyo'){toyoGround(g,it,X0,Y0);return}_lmGT(g,it,X0,Y0,AN)};
var _lmTT=lmTop;lmTop=function(u,it,X0,Y0,AN){if(it.k==='toyo'){toyoTop(u,it,X0,Y0);return}_lmTT(u,it,X0,Y0,AN)};
var _coTy=collide;collide=function(c){var n=_coTy(c),R=TOYO;if(R&&R.bld&&!c.l){var B=R.bld,dx=wd(B.x,c.x),dy=wd(B.y,c.y);if(Math.abs(dx)<90&&Math.abs(dy)<90)satBox(c,dx,dy,B.hx,B.hy,B.a,.22,.35)}return n};
// the old cart is gone (and so is its glow)
var _ssxTy=stStallXY;stStallXY=function(k){if(k==='toyo'&&TOYO)return null;return _ssxTy(k)};
var _dzTy=drawZones;drawZones=function(l){_dzTy(l);if(l===0)toyoFlag()};
// night: the lanterns, the shop window and the signboard glow
var _edTy=emisDraw;emisDraw=function(a){_edTy(a);var R=TOYO;if(!R||a<=.02)return;[[TYW/2-13,TYF+6,7,8,[255,90,58],.85],[TYW/2+13,TYF+6,7,8,[255,90,58],.85],[20,TYF+7,20,8,[255,214,140],.6],[TYW/2,TYF-10,30,10,[255,220,170],.35]].forEach(function(q){var w=tyWorld(R,q[0],q[1]),x=SX(w[0]),y=SY(w[1]);if(x>-60&&y>-60&&x<VW+60&&y<VH+60)gl(x,y,q[2],q[3],q[4],a*q[5])})};

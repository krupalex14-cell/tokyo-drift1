// ===== PHYSICS =====
var GRIPT=[1,1,.72,.64,.78,1,1];
function carParams(ci,pt){var C=CARS[ci];return{pw:C.pw*(1+.13*pt[0]),vmax:C.vmax*(1+.06*pt[0]),grip:C.grip*(1+.08*pt[1]),turn:C.turn*(1+.05*pt[2])*(S.stp||100)/100,dturn:C.dturn*(1+.05*pt[2])*(S.stp||100)/100}}
function physStep(c,I,dt){
 var P=c.P,ca=Math.cos(c.a),sa=Math.sin(c.a),f=c.vx*ca+c.vy*sa,l=-c.vx*sa+c.vy*ca,sp=Math.hypot(f,l);
 var surf=c.l?1:GRIPT[typeAt(c.x,c.y)]||1;c.surf=surf;
 c.st+=(I.s-c.st)*Math.min(1,dt*(Math.abs(I.s)>Math.abs(c.st)?11:14));
 var thr=I.t,brk=I.b,hb=I.h,slip=Math.atan2(l,Math.max(Math.abs(f),1)),th,cs,sn,f2;
 if(c.spin>0)c.spin-=dt;
 if(hb&&sp>32&&f>0&&c.spin<=0){c.dr=true;c.tail=.35}
 else if(c.dr){c.tail-=dt;if(c.tail<=0||sp<30)c.dr=false}
 if(c.dr){
  var ph=Math.atan2(c.vy,c.vx),se=c.st,k=hb?1:Math.max(0,c.tail/.35);
  var tr=se*P.dturn*.8*Math.min(1,sp/100)*(.85+.15*P.grip);
  ph+=tr*dt;
  var tgt=se*(.78*k)*(surf<1?1.12:1),er=angd(ph+tgt,c.a);
  c.w+=(clamp(tr+er*9,-6.5,6.5)-c.w)*Math.min(1,dt*14);c.a+=c.w*dt;
  var vt=P.vmax*.68*(.5+.5*thr)*(surf<1?.75:1);
  if(brk)sp-=360*dt;else sp+=(vt-sp)*Math.min(1,dt*(sp<vt?.9+thr*.6:1.1));
  if(sp<0)sp=0;
  c.vx=Math.cos(ph)*sp;c.vy=Math.sin(ph)*sp;slip=angd(ph,c.a);
  c.x=wrap(c.x+c.vx*dt);c.y=wrap(c.y+c.vy*dt);c.slip=slip;c.sp=sp;c.fw=sp*Math.cos(slip);return;
 }
 var spf=Math.min(1,sp/70)/(1+sp/850),wT2=c.st*P.turn*spf*(f<-1?-1:1);if(c.spin>0)wT2*=.2;
 c.w+=(wT2-c.w)*Math.min(1,dt*(c.spin>0?1.5:11));
 th=c.w*dt;c.a+=th;cs=Math.cos(th);sn=Math.sin(th);f2=f*cs+l*sn;l=-f*sn+l*cs;f=f2;
 l*=Math.exp(-(c.spin>0?2.5:11)*surf*P.grip*dt);
 if(brk>0){if(f>4)f-=brk*430*dt;else if(f>-130)f-=brk*190*dt}
 else if(thr>0)f+=thr*P.pw*Math.max(0,1-f/(P.vmax*(surf<1?.7:1)))*dt;
 f-=f*(.16+(1-surf)*1.1)*dt;if(!thr&&!brk){var dc=Math.min(Math.abs(f),36*dt);f-=f>0?dc:-dc}
 sp=Math.hypot(f,l);slip=Math.atan2(l,Math.max(Math.abs(f),1));
 ca=Math.cos(c.a);sa=Math.sin(c.a);c.vx=f*ca-l*sa;c.vy=f*sa+l*ca;
 c.x=wrap(c.x+c.vx*dt);c.y=wrap(c.y+c.vy*dt);
 c.slip=slip;c.sp=sp;c.fw=f;
}
// --- collision helpers
var COLL={hit:0,max:0,near:99};
function impulse(c,px,py,nx,ny,e,mu,ovx,ovy){
 var rx=px,ry=py,vx=c.vx-(ovx||0)-c.w*ry,vy=c.vy-(ovy||0)+c.w*rx,vn=vx*nx+vy*ny;if(vn>=0)return 0;
 var I=((2*c.hx)*(2*c.hx)+(2*c.hy)*(2*c.hy))/12*2.6,rn=rx*ny-ry*nx,j=-(1+e)*vn/(1+rn*rn/I);
 c.vx+=j*nx;c.vy+=j*ny;c.w+=rn*j/I;
 var tx=-ny,ty=nx,vt=vx*tx+vy*ty,rt=rx*ty-ry*tx,jt=-vt/(1+rt*rt/I);jt=clamp(jt,-mu*j,mu*j);c.vx+=jt*tx;c.vy+=jt*ty;c.w+=rt*jt/I;
 c.w=clamp(c.w,-7,7);
 if(-vn>COLL.max){COLL.max=-vn;COLL.px=c.x+px;COLL.py=c.y+py}COLL.hit++;return -vn;
}
function carCorners(c){var ca=Math.cos(c.a),sa=Math.sin(c.a),hx=c.hx,hy=c.hy;return[[ca*hx-sa*hy,sa*hx+ca*hy],[ca*hx+sa*hy,sa*hx-ca*hy],[-ca*hx+sa*hy,-sa*hx-ca*hy],[-ca*hx-sa*hy,-sa*hx+ca*hy]]}
// OBB(car) vs box (center rel to car: dx,dy ; half bw,bh ; angle ba)
function satBox(c,dx,dy,bw,bh,ba,e,mu,ovx,ovy){
 var ca=Math.cos(c.a),sa=Math.sin(c.a),cb=Math.cos(ba||0),sb=Math.sin(ba||0);
 var ax=[[ca,sa],[-sa,ca],[cb,sb],[-sb,cb]],best=1e9,bn=null;
 for(var i=0;i<4;i++){var nx=ax[i][0],ny=ax[i][1];var rc=c.hx*Math.abs(ca*nx+sa*ny)+c.hy*Math.abs(-sa*nx+ca*ny),rb=bw*Math.abs(cb*nx+sb*ny)+bh*Math.abs(-sb*nx+cb*ny),d=-(dx*nx+dy*ny),ov=rc+rb-Math.abs(d);if(ov<=0)return 0;if(ov<best){best=ov;bn=d<0?[-nx,-ny]:[nx,ny]}}
 if(best>18)best=18;
 c.x=wrap(c.x+bn[0]*best);c.y=wrap(c.y+bn[1]*best);
 var cr=carCorners(c),mi=0,mv=1e9;for(i=0;i<4;i++){var v=cr[i][0]*bn[0]+cr[i][1]*bn[1];if(v<mv){mv=v;mi=i}}
 var px=cr[mi][0],py=cr[mi][1];
 if(i>=0){var cx2=cr[mi][0],cy2=cr[mi][1];var e2=cr[(mi+1)%4],e3=cr[(mi+3)%4];var a1=e2[0]*bn[0]+e2[1]*bn[1],a3=e3[0]*bn[0]+e3[1]*bn[1];if(Math.abs(a1-mv)<2){px=(cx2+e2[0])/2;py=(cy2+e2[1])/2}else if(Math.abs(a3-mv)<2){px=(cx2+e3[0])/2;py=(cy2+e3[1])/2}}
 return impulse(c,px,py,bn[0],bn[1],e,mu,ovx,ovy)||.01;
}
function circHit(c,dx,dy,r,e,mu){
 var ca=Math.cos(c.a),sa=Math.sin(c.a),lx=dx*ca+dy*sa,ly=-dx*sa+dy*ca,qx=clamp(lx,-c.hx,c.hx),qy=clamp(ly,-c.hy,c.hy),ex=lx-qx,ey=ly-qy,d=Math.hypot(ex,ey);
 if(d>=r)return 0;
 var nx,ny,pen;if(d>.01){var wx=ex*ca-ey*sa,wy=ex*sa+ey*ca;nx=-wx/d;ny=-wy/d;pen=r-d}else{var dl=Math.hypot(dx,dy)||1;nx=-dx/dl;ny=-dy/dl;pen=r}
 c.x=wrap(c.x+nx*pen);c.y=wrap(c.y+ny*pen);
 var px=qx*ca-qy*sa,py=qx*sa+qy*ca;
 return impulse(c,px,py,nx,ny,e,mu)||.01;
}
function solidAt(x,y){var t=typeAt(x,y);return t===5||t===6}
// normal of a wall at p from the shape of the solid pixels around it (principal axis of the solid samples):
// a thin rail gives its own direction, a thick wall its edge; it then faces away from the solid mass, or towards the car for a thin rail.
// (one ring of 16 samples often caught only one side of a 2 px rail, and the 'normal' came out along the rail: dead stops when scraping)
function wallNormal(px,py,cxr,cyr){var n=1,mx=0,my=0,sxx=0,syy=0,sxy=0,k,t,r,ox,oy;
 for(r=2;r<=5.5;r+=1.5)for(k=0;k<16;k++){t=(k+(r===3.5?.5:0))/16*TAU;ox=Math.cos(t)*r;oy=Math.sin(t)*r;if(solidAt(px+ox,py+oy)){n++;mx+=ox;my+=oy;sxx+=ox*ox;syy+=oy*oy;sxy+=ox*oy}}
 mx/=n;my/=n;sxx=sxx/n-mx*mx;syy=syy/n-my*my;sxy=sxy/n-mx*my;
 var nx,ny;if(n>=3){var th=.5*Math.atan2(2*sxy,sxx-syy);nx=-Math.sin(th);ny=Math.cos(th)}else{var cl=Math.hypot(cxr,cyr)||1;nx=cxr/cl;ny=cyr/cl}
 var ml=Math.hypot(mx,my);if(ml>.9){if(nx*mx+ny*my>0){nx=-nx;ny=-ny}}else if(nx*cxr+ny*cyr<0){nx=-nx;ny=-ny}
 return[nx,ny]}
function rasterHit(c){
 var ca=Math.cos(c.a),sa=Math.sin(c.a),pts=[],k;
 var UV=[[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[1,0],[-1,0],[.5,1],[.5,-1],[-.5,1],[-.5,-1]];for(k=0;k<12;k++){var u=UV[k][0]*c.hx,v=UV[k][1]*c.hy;pts.push([ca*u-sa*v,sa*u+ca*v])}
 var bp=null,bd=0,bn=null;
 for(k=0;k<pts.length;k++){var px=c.x+pts[k][0],py=c.y+pts[k][1];if(!solidAt(px,py))continue;
  var wn=wallNormal(px,py,-pts[k][0],-pts[k][1]),gx=wn[0],gy=wn[1];
  var dpt=0;while(dpt<8&&solidAt(px+gx*dpt,py+gy*dpt))dpt++;
  if(dpt>bd){bd=dpt;bp=pts[k];bn=[gx,gy]}}
 if(!bp)return 0;
 c.x=wrap(c.x+bn[0]*bd);c.y=wrap(c.y+bn[1]*bd);
 // walls and guard rails: the car slides along them (no bounce, little scrub, hit near the middle so it isn't spun round)
 var r=impulse(c,bp[0]*.3,bp[1]*.3,bn[0],bn[1],.02,.05)||.01,tx=-bn[1],ty=bn[0];if(c.vx*tx+c.vy*ty<0){tx=-tx;ty=-ty}
 var da=angd(Math.atan2(ty,tx),c.a);if(Math.abs(da)<1.1&&!c.dr)c.a+=da*.2;c.w*=.7;return r;
}
// deck geometry
function deckInfo(x,y){
 var best=null,bv=1e9,inside=false,hIn=0;
 DH.q(x-60,y-60,x+60,y+60,function(sp){var r=sp.r;for(var i=sp.i;i<sp.j;i++){var ax=wd(r.xs[i],x),ay=wd(r.ys[i],y),bx=ax+r.xs[i+1]-r.xs[i],by=ay+r.ys[i+1]-r.ys[i],ex=bx-ax,ey=by-ay,L2=ex*ex+ey*ey||1,t=clamp(-(ax*ex+ay*ey)/L2,0,1),qx=ax+ex*t,qy=ay+ey*t,d=Math.hypot(qx,qy),h=r.h?r.h[i]+(r.h[i+1]-r.h[i])*t:1;
  if(d<r.hw-.5&&h>.02){inside=true;if(h>hIn)hIn=h}
  var v=d-r.hw;if(v<bv){bv=v;best={r:r,d:d,h:h,nx:qx/(d||1),ny:qy/(d||1),pen:d-r.hw+.6,s:(i+t)*r.ds}}}});
 return{inside:inside,h:hIn,best:best};
}
function deckHit(c){
 var cr=carCorners(c),mh=0;
 for(var k=0;k<4;k++){var px=c.x+cr[k][0],py=c.y+cr[k][1],di=deckInfo(px,py);if(di.inside||!di.best)continue;if(di.best.h<.3)continue;
  c.x=wrap(c.x+di.best.nx*di.best.pen);c.y=wrap(c.y+di.best.ny*di.best.pen);var v=impulse(c,cr[k][0],cr[k][1],di.best.nx,di.best.ny,.2,.3);if(v>mh)mh=v}
 return mh;
}
function layerUpdate(c){
 var di=deckInfo(c.x,c.y);
 if(c.l===1){if(!di.inside||di.h<.03){c.l=0}}
 else{if(di.inside&&di.h<=.3)c.l=1}
 c.under=c.l===0&&di.inside&&di.h>.5;
}

// two dynamic bodies: c (player-like) and o (vehicle with x,y,a,hx,hy,vx,vy,w,m)
function satPair(c,o,e,mu){
 var dx=wd(o.x,c.x),dy=wd(o.y,c.y);if(Math.abs(dx)>70||Math.abs(dy)>70)return 0;
 var ca=Math.cos(c.a),sa=Math.sin(c.a),cb=Math.cos(o.a),sb=Math.sin(o.a);
 var ax=[[ca,sa],[-sa,ca],[cb,sb],[-sb,cb]],best=1e9,bn=null,i;
 for(i=0;i<4;i++){var nx=ax[i][0],ny=ax[i][1];var rc=c.hx*Math.abs(ca*nx+sa*ny)+c.hy*Math.abs(-sa*nx+ca*ny),rb=o.hx*Math.abs(cb*nx+sb*ny)+o.hy*Math.abs(-sb*nx+cb*ny),d=-(dx*nx+dy*ny),ov=rc+rb-Math.abs(d);if(ov<=0)return 0;if(ov<best){best=ov;bn=d<0?[-nx,-ny]:[nx,ny]}}
 if(best>18)best=18;var mc=c.m||1,mo=o.m||1,tm=mc+mo;
 c.x=wrap(c.x+bn[0]*best*mo/tm);c.y=wrap(c.y+bn[1]*best*mo/tm);o.x=wrap(o.x-bn[0]*best*mc/tm);o.y=wrap(o.y-bn[1]*best*mc/tm);
 var cr=carCorners(c),mi=0,mv=1e9;for(i=0;i<4;i++){var v=cr[i][0]*bn[0]+cr[i][1]*bn[1];if(v<mv){mv=v;mi=i}}
 var px=cr[mi][0],py=cr[mi][1],ox=px-wd(o.x,c.x),oy=py-wd(o.y,c.y);
 var Ic=((2*c.hx)*(2*c.hx)+(2*c.hy)*(2*c.hy))/12*2.6*mc,Io=((2*o.hx)*(2*o.hx)+(2*o.hy)*(2*o.hy))/12*2.6*mo;
 var vcx=c.vx-c.w*py,vcy=c.vy+c.w*px,vox=(o.vx||0)-(o.w||0)*oy,voy=(o.vy||0)+(o.w||0)*ox,rvx=vcx-vox,rvy=vcy-voy,vn=rvx*bn[0]+rvy*bn[1];
 if(vn>=0)return .01;
 var rcn=px*bn[1]-py*bn[0],ron=ox*bn[1]-oy*bn[0],j=-(1+e)*vn/(1/mc+1/mo+rcn*rcn/Ic+ron*ron/Io);
 c.vx+=j*bn[0]/mc;c.vy+=j*bn[1]/mc;c.w+=rcn*j/Ic;o.vx=(o.vx||0)-j*bn[0]/mo;o.vy=(o.vy||0)-j*bn[1]/mo;o.w=(o.w||0)-ron*j/Io;
 var tx=-bn[1],ty=bn[0],vt=rvx*tx+rvy*ty,rct=px*ty-py*tx,rot=ox*ty-oy*tx,jt=-vt/(1/mc+1/mo+rct*rct/Ic+rot*rot/Io);jt=clamp(jt,-mu*j,mu*j);
 c.vx+=jt*tx/mc;c.vy+=jt*ty/mc;c.w+=rct*jt/Ic;o.vx-=jt*tx/mo;o.vy-=jt*ty/mo;o.w-=rot*jt/Io;
 c.w=clamp(c.w,-8,8);o.w=clamp(o.w,-8,8);
 if(-vn>COLL.max){COLL.max=-vn;COLL.px=c.x+px;COLL.py=c.y+py}COLL.hit++;
 return -vn;
}

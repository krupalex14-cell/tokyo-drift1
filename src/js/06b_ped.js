// ===== PEDESTRIANS =====
var PEDS=[],PEDX=[],PATL=null,PSTY=[],PST_N=0,PST_BIKE=0,PST_DOG=0,PCELL=19,PDIR=16,PSC=1.4,PEDMAX=95;
var PDN=[1,1,.5,.55,.6,.22,0];
function _lt(c,f){return[c[0]+(255-c[0])*f|0,c[1]+(255-c[1])*f|0,c[2]+(255-c[2])*f|0]}
function _dk(c,f){return[c[0]*f|0,c[1]*f|0,c[2]*f|0]}
var _WHT=[250,250,255],_TIRE=[28,30,38],_BAR=[64,68,84],_BSK=[178,184,198];
// k: 0 walker, 1 suit, 2 schoolkid, 3 umbrella, 4 backpack, 5 bag, 6 jogger, 7 bike, 8 dog
function buildPeds(){
 var SK=['#f2cfa8','#e3b58e','#f6dcc0','#c8956c','#9c6b46'].map(hexRgb),HR=['#1c1a22','#2e2228','#4a3226','#141418','#6a4a2e','#cdb38e','#2a2a30'].map(hexRgb),
 TP=['#e04a6a','#3a6ab8','#eeeef4','#2a2e3a','#e0a030','#6ac04a','#9a5ad0','#40c0c0','#ff8fb8','#c8c8d0','#d86a3a','#24407a','#f4e04a','#8a8e9e'].map(hexRgb),
 BT=['#2a2e3a','#3a4a6a','#1c1c24','#5a4a3a','#4a4e5e','#6a6e7e'].map(hexRgb),
 AC=['#d03a4a','#2a2a36','#3a6ab8','#e8c040','#7a4ab0','#eeeef4','#8a5a3a'].map(hexRgb),
 UM=['#ff6fae','#6ee7ff','#ffd23a','#f4f4f8','#7bd957','#a66bff','#ff7a3a'].map(hexRgb);
 PSTY=[];
 var KD=[0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,6,6,6];
 KD.forEach(function(k,i){var tp=k===1?hexRgb('#262a36'):TP[(i*5+3)%TP.length],um=UM[i%UM.length];PSTY.push({k:k,SK:SK[(i*3)%5],HR:k===2?hexRgb('#f4cc2a'):HR[(i*5)%7],TP:tp,TPd:_dk(tp,.72),BT:k===1?hexRgb('#1e2028'):BT[(i*7)%6],AC:k===2?(i%2?hexRgb('#c8303c'):hexRgb('#1c1c24')):AC[(i*3)%7],UM:um,UMl:_lt(um,.38),UMd:_dk(um,.7)})});
 PST_N=PSTY.length;PST_BIKE=PSTY.length;
 for(var i=0;i<6;i++){var tp2=TP[(i*4+1)%TP.length];PSTY.push({k:7,SK:SK[i%5],HR:HR[i%7],TP:tp2,TPd:_dk(tp2,.72),BT:BT[i%6],AC:['#c8ccd8','#e04a6a','#3a6ab8','#30303a','#7bd957','#f0d040'].map(hexRgb)[i]})}
 PST_DOG=PSTY.length;['#d88a3a','#f2f2f2','#26262c','#b89a70'].forEach(function(h){var c=hexRgb(h);PSTY.push({k:8,D:c,D2:h==='#f2f2f2'?hexRgb('#c4c4cc'):_dk(c,.6)})});
 var W=PCELL*PDIR*5,H=PCELL*PSTY.length;PATL=mkCanvas(W,H);var g=PATL.getContext('2d'),id=g.createImageData(W,H),d=id.data;
 for(var si=0;si<PSTY.length;si++){var st=PSTY[si];for(var dI=0;dI<PDIR;dI++){var a=dI/PDIR*TAU,ca=Math.cos(a),sa=Math.sin(a);for(var f=0;f<4;f++){var ox=(dI*4+f)*PCELL,oy=si*PCELL;
  for(var j=0;j<PCELL;j++)for(var i2=0;i2<PCELL;i2++){var px=(i2+.5-PCELL/2)/PSC,py=(j+.5-PCELL/2)/PSC,c=pedPix(st,px*ca+py*sa,-px*sa+py*ca,f);if(!c)continue;var o=((oy+j)*W+ox+i2)*4;d[o]=c[0];d[o+1]=c[1];d[o+2]=c[2];d[o+3]=255}}
  var lx0=(PDIR*4+dI)*PCELL,ly0=si*PCELL;for(var j3=0;j3<PCELL;j3++)for(var i3=0;i3<PCELL;i3++){var px3=(i3+.5-PCELL/2)/PSC,py3=(j3+.5-PCELL/2)/PSC,c3=pedLie(st,px3*ca+py3*sa,-px3*sa+py3*ca);if(!c3)continue;var o3=((ly0+j3)*W+lx0+i3)*4;d[o3]=c3[0];d[o3+1]=c3[1];d[o3+2]=c3[2];d[o3+3]=255}}}
 var al=new Uint8Array(W*H);for(var q=0;q<W*H;q++)al[q]=d[q*4+3];for(var yy=1;yy<H-1;yy++)for(var xx=1;xx<W-1;xx++){var k=yy*W+xx;if(al[k])continue;if(al[k-1]||al[k+1]||al[k-W]||al[k+W]){d[k*4]=16;d[k*4+1]=12;d[k*4+2]=30;d[k*4+3]=150}}
 g.putImageData(id,0,0);pedInit();
}
function pedLie(st,lx,ly){var k=st.k;if(k===8)return pedPix(st,lx,ly,0);if(k===2){lx/=.8;ly/=.8}
 var hx=lx-4.3;if(hx*hx+ly*ly<1.5*1.5)return lx>4.85?st.HR:st.SK;
 if(((lx-1.2)/2.3)*((lx-1.2)/2.3)+(ly/1.6)*(ly/1.6)<1)return st.TP;
 if(Math.abs(ly)>1.5&&Math.abs(ly)<3.2&&lx>.2&&lx<2.9)return lx<.8?st.SK:st.TPd;
 if(Math.abs(ly)>.2&&Math.abs(ly)<1.4&&lx>-4.4&&lx<-.8)return lx<-3.7?[26,26,32]:st.BT;
 return null}
function pedPix(st,lx,ly,f){
 var sw=f===1?1:f===3?-1:0,k=st.k,q;
 if(k===8){var lg=sw*.6;q=(lx-2)*(lx-2)+ly*ly;if(q<1.15)return lx>2.75?st.D2:st.D;
  if((lx/1.9)*(lx/1.9)+ly*ly<1)return st.D;
  if(lx<-1.6&&lx>-3&&Math.abs(ly+.35*sw)<.45)return st.D2;
  if(Math.abs(Math.abs(ly)-.85)<.4){var s2=ly>0?1:-1;if(Math.abs(lx-1.2-lg*s2)<.45||Math.abs(lx+1.25+lg*s2)<.45)return st.D2}
  return null}
 if(k===7){
  if(Math.abs(ly)<1.3&&lx>2.8&&lx<4.4)return _BSK;
  if(Math.abs(ly)<.55&&((lx>2.4&&lx<5.6)||(lx<-2.4&&lx>-5.6)))return _TIRE;
  q=(lx+.5)*(lx+.5)+ly*ly;if(q<1.45*1.45)return lx>.25?st.SK:st.HR;
  if(((lx+.6)/1.2)*((lx+.6)/1.2)+(ly/2.3)*(ly/2.3)<1)return st.TP;
  if(lx>1.8&&lx<2.5&&Math.abs(ly)<2.3)return _BAR;
  if(Math.abs(ly)>1.2&&Math.abs(ly)<2.2&&lx>.3&&lx<1.9)return st.TPd;
  if(Math.abs(ly)<.5&&lx>-2.5&&lx<2.5)return st.AC;
  if(Math.abs(Math.abs(ly)-1.15)<.45&&Math.abs(lx-(ly>0?sw:-sw)*1.1-.3)<.6)return st.BT;
  return null}
 if(k===2){lx/=.8;ly/=.8}
 if(k===3){var ux=lx-.2;q=ux*ux+ly*ly;if(q<4.5*4.5){if(q<.45)return _WHT;if(q>3.7*3.7)return st.UMd;var an=Math.atan2(ly,ux)+Math.PI;return(Math.floor(an/(Math.PI/4))&1)?st.UM:st.UMl}}
 var hx=lx-.2,hr=k===2?1.75:1.45;q=hx*hx+ly*ly;if(q<hr*hr){if(k===2)return lx>1.1&&Math.abs(ly)<.9?st.SK:st.HR;return lx>.7?st.SK:st.HR}
 if((k===4||k===2)&&lx>-2.35&&lx<-1.05&&Math.abs(ly)<1.6)return st.AC;
 if((lx/1.25)*(lx/1.25)+(ly/2.5)*(ly/2.5)<1)return st.TP;
 if(Math.abs(ly)>2&&Math.abs(ly)<3.1){var ax=(ly>0?sw:-sw)*(k===6?1.6:1.1);if(Math.abs(lx-ax)<.8)return k===6?st.SK:st.TPd}
 if(k===5&&ly>2.9&&ly<4.4&&Math.abs(lx-sw*1.1)<1)return st.AC;
 if(Math.abs(ly)>.2&&Math.abs(ly)<1.5){var fx=(ly>0?-sw:sw)*(k===6?2.4:2);if(Math.abs(lx-fx)<.8)return st.BT}
 return null}
// ---- network prep: local-street crossings and side-street mouths on arterials
function pedInit(){
 var XM=new Map();
 LOCS.forEach(function(r){r.u=[(r.xs[1]-r.xs[0])/r.len,(r.ys[1]-r.ys[0])/r.len];r.pj=[];var seen=[];
  r.jx.forEach(function(X){if(seen.indexOf(X)>=0)return;seen.push(X);var l=XM.get(X);if(!l){l=[];XM.set(X,l)}l.push(r);r.pj.push({X:X,s:(X.x-r.xs[0])*r.u[0]+(X.y-r.ys[0])*r.u[1]})});
  r.pj.sort(function(a,b){return a.s-b.s})});
 LOCS.forEach(function(r){r.pj.forEach(function(J){J.perp=[];(XM.get(J.X)||[]).forEach(function(r3){if(r3===r||r3.o===r.o)return;J.perp.push({r:r3,s:(J.X.x-r3.xs[0])*r3.u[0]+(J.X.y-r3.ys[0])*r3.u[1]})})})});
 ARTS.forEach(function(a){a.mouths=[]});
 LOCS.forEach(function(r){[0,1].forEach(function(end){if(end===0?!r.ma:!r.mb)return;
  var Ex=r.xs[end],Ey=r.ys[end],ui=end===0?r.u:[-r.u[0],-r.u[1]],best=null,bd=1e9;
  RH.q(Ex-90,Ey-90,Ex+90,Ey+90,function(sp){var a=sp.r;if(a.k!=='art'||a.sw<8)return;for(var i=sp.i;i<=sp.j;i++){var dd=Math.hypot(wd(a.xs[i],Ex),wd(a.ys[i],Ey));if(dd<bd){bd=dd;best={a:a,s:i*a.ds}}}});
  if(!best)return;var a=best.a;a.pt(best.s,TMP);var tx=TMP[2],ty=TMP[3],nx=-ty,ny=tx,ex=wd(Ex,TMP[0]),ey=wd(Ey,TMP[1]),lat=ex*nx+ey*ny,side=lat>=0?1:-1,al=Math.abs(lat);if(al>a.hw+a.sw+30)return;
  var den=(ui[0]*nx+ui[1]*ny)*side;if(den<.5)return;var sj=(a.hw+a.sw*.5-al)/den,uL=pedLat(r,.6),nr=[-r.u[1],r.u[0]],m={loc:r,end:end,art:a,side:side,sjL:end===0?sj:r.len-sj,sc:{},dr:{}};
  [-1,1].forEach(function(sl){var cx=ex+ui[0]*sj+nr[0]*sl*uL,cy=ey+ui[1]*sj+nr[1]*sl*uL;m.sc[sl]=best.s+cx*tx+cy*ty;m.dr[sl]=(nr[0]*sl*tx+nr[1]*sl*ty)>=0?1:-1});
  a.mouths.push(m);r['m'+end]=m})});
}
// ---- node geometry for pedestrians (corners, crosswalk ends), lazily
function armP(A,so){return[A.cx-A.dy*so*A.U,A.cy+A.dx*so*A.U]}
function mkPath(xs,ys){var c=[0];for(var i=1;i<xs.length;i++)c.push(c[i-1]+Math.hypot(xs[i]-xs[i-1],ys[i]-ys[i-1]));return{x:xs,y:ys,c:c,len:c[c.length-1]}}
function pathAt(P,k,out){var c=P.c,lo=0,hi=c.length-1;if(hi<1){out[0]=P.x[0];out[1]=P.y[0];out[2]=0;out[3]=0;return out}while(hi-lo>1){var md=(lo+hi)>>1;if(c[md]<=k)lo=md;else hi=md}var f=clamp((k-c[lo])/((c[hi]-c[lo])||1),0,1),dx=P.x[hi]-P.x[lo],dy=P.y[hi]-P.y[lo];out[0]=P.x[lo]+dx*f;out[1]=P.y[lo]+dy*f;out[2]=dx;out[3]=dy;return out}
function pedNode(N){if(N.pa)return N.pa;var swm=0;N.ed.forEach(function(e){swm=Math.max(swm,e.r.sw)});var cwo=N.t==='round'?19.5:10.5,arms=[];
 N.ed.forEach(function(e){var r=e.r;if(r.k!=='art'&&r.k!=='touge')return;var os=e.e===0?1:-1,sE=e.e===0?r.za+cwo:r.len-r.zb-cwo;r.pt(sE,TMP);var cx=wd(TMP[0],N.x),cy=wd(TMP[1],N.y);arms.push({e:e,r:r,os:os,sE:sE,dx:TMP[2]*os,dy:TMP[3]*os,cx:cx,cy:cy,U:r.hw+r.sw*.5,an:Math.atan2(cy,cx),ok:r.k==='art'&&r.sw>=8})});
 arms.sort(function(a,b){return a.an-b.an});N.pR=(N.R||N.rJ)+swm*.5;N.pa=arms;N.pc=[];N.pK=[];
 for(var i=0;i<arms.length;i++){var P=arms.length>1?pedCornerPath(N,arms[i],arms[(i+1)%arms.length]):null;N.pc.push(P);var m=[0,0];if(P)pathAt(P,P.len/2,m);N.pK.push([m[0],m[1]])}
 return arms}
function pedCornerPath(N,A,B){var P=armP(A,1),Q=armP(B,-1),pts=[P],Rm=N.pR,i;
 if(N.t==='round'){
  var inn=function(X,D){var sa=X[0]*D.dx+X[1]*D.dy,disc=Rm*Rm-(X[0]*X[0]+X[1]*X[1]-sa*sa);if(disc<=0)return null;var t=Math.max(0,sa-Math.sqrt(disc));return[X[0]-D.dx*t,X[1]-D.dy*t]};
  var qa=inn(P,A)||P,qb=inn(Q,B)||Q;pts.push(qa);var a0=Math.atan2(qa[1],qa[0]),a1=Math.atan2(qb[1],qb[0]);while(a1<=a0)a1+=TAU;var r0=Math.hypot(qa[0],qa[1]),r1=Math.hypot(qb[0],qb[1]),n=Math.max(2,Math.ceil((a1-a0)*Rm/4));
  for(i=1;i<n;i++){var t=i/n,an=a0+(a1-a0)*t,rr=r0+(r1-r0)*t;pts.push([Math.cos(an)*rr,Math.sin(an)*rr])}pts.push(qb)}
 else{var cr=A.dx*B.dy-A.dy*B.dx;if(Math.abs(cr)>.25){var wx=Q[0]-P[0],wy=Q[1]-P[1],t2=(wx*B.dy-wy*B.dx)/cr;if(t2>-140&&t2<60)pts.push([P[0]+A.dx*t2,P[1]+A.dy*t2])}}
 pts.push(Q);
 var xs=[],ys=[];for(i=0;i<pts.length-1;i++){var a=pts[i],b=pts[i+1],L=Math.hypot(b[0]-a[0],b[1]-a[1]),m=Math.max(1,Math.ceil(L/4));for(var k=0;k<m;k++){var x=a[0]+(b[0]-a[0])*k/m,y=a[1]+(b[1]-a[1])*k/m,dd=Math.hypot(x,y);if(dd<Rm&&dd>0){x*=Rm/dd;y*=Rm/dd}xs.push(x);ys.push(y)}}xs.push(Q[0]);ys.push(Q[1]);
 return mkPath(xs,ys)}
// ---- lanes
function pedLane(p){var r=p.r,f=p.dir*p.sd>0;if(r.k==='path')return f?.68:.32;if(r.k==='art')return f?.27:.8;if(r.sw>0)return f?.42:.8;return f?.2:.85}
function pedLat(r,lo){return r.k==='path'?(lo-.5)*6:r.sw>0?r.hw+r.sw*lo:r.hw-8+5*lo}
function pedSetWalk(p,r,s,sd,dir){p.m='w';p.r=r;p.s=s;p.sd=sd;p.dir=dir;p.lt=pedLane(p);r.pt(s,TMP);var bx=TMP[0],by=TMP[1],lat=(wd(p.bx,bx)*-TMP[3]+wd(p.by,by)*TMP[2])*sd;p.lo=r.k==='path'?.5:clamp(r.sw>0?(lat-r.hw)/r.sw:(lat-r.hw+8)/5,-.4,1.4);p.cr=false;p.swf=1;p.idleOk=(r.d===D_SHOP||r.d===D_DOWN)&&p.k<6}
function pedPath(p,path,ox,oy,rev,cont,vm,cr){if(!path||path.len<.5){pedCont(p,cont);return}p.m='p';p.pt=path;p.pox=ox;p.poy=oy;p.prv=rev;p.ps=0;p.cont=cont;p.vm=vm||1;p.cr=!!cr;p.swf=1}
function pedCont(p,c){p.cr=false;p.vm=1;if(c.w)pedOut(p,c.w[0],c.w[1]);else if(c.n)pedAtNode(p,c.n[0],c.n[1],c.n[2],true);else if(c.l)pedSetWalk(p,c.l[0],c.l[1],c.l[2],c.l[3])}
function pedOut(p,A,so){pedSetWalk(p,A.r,A.sE,so*A.os,A.os)}
// ---- arterial: side-street mouths and junctions
function pedArt(p,s0){var r=p.r,s=p.s,d=p.dir,i;
 if(r.mouths)for(i=0;i<r.mouths.length;i++){var m=r.mouths[i];if(m.side!==p.sd)continue;var a=m.sc[-1],b=m.sc[1],c=d>0?Math.min(a,b):Math.max(a,b);if(d>0?(s0<c&&s>=c):(s0>c&&s<=c)){if(Math.random()<.35){pedSetWalk(p,m.loc,m.sjL,c===a?-1:1,m.end===0?1:-1);return}}}
 var N=d>0?r.b:r.a;if(!N)return;var cwo=N.t==='round'?19.5:10.5,sE=d>0?r.len-r.zb-cwo:r.za+cwo;
 if((s-sE)*d<0)return;p.s=sE;var arms=pedNode(N),ai=-1,os=d>0?-1:1;for(i=0;i<arms.length;i++)if(arms[i].r===r&&arms[i].os===os){ai=i;break}
 if(ai<0||N.t==='end'||arms.length<2){p.dir=-d;p.lt=pedLane(p);return}
 pedAtNode(p,N,ai,p.sd*os,false)}
function pedAtNode(p,N,ai,so,crossed){var arms=pedNode(N),n=arms.length,A=arms[ai],rn=Math.random(),j=so>0?(ai+1)%n:(ai-1+n)%n,B=arms[j];
 var canC=n>1&&B.ok&&B!==A,canX=A.ok&&(N.t==='x'||N.t==='scr'||N.t==='round');
 if(crossed){if(canC&&rn<.55)pedCorner(p,N,ai,so);else pedOut(p,A,so);return}
 if(canC&&rn<.45){pedCorner(p,N,ai,so);return}
 if(canX&&rn<.9){pedWait(p,N,ai,so,N.t==='scr'&&n===4&&Math.random()<.55);return}
 pedOut(p,A,so)}
function pedCorner(p,N,ai,so){var n=N.pa.length,j=so>0?(ai+1)%n:(ai-1+n)%n;pedPath(p,so>0?N.pc[ai]:N.pc[j],N.x,N.y,so<0,{w:[N.pa[j],-so]})}
function pedWait(p,N,ai,so,diag){var A=N.pa[ai],U=A.r.hw+2.5+Math.random()*3,jt=(Math.random()-.5)*8;p.m='q';p.qN=N;p.qa=ai;p.qs=so;p.qd=diag;p.wt=0;p.cr=false;p.swf=1;
 p.qx=wrap(N.x+A.cx+A.dx*jt-A.dy*so*U);p.qy=wrap(N.y+A.cy+A.dy*jt+A.dx*so*U);p.qf=Math.atan2(-A.dx*so,A.dy*so)}
function pedCanGo(N,A,L,v0){var v=Math.max(v0*1.45,24);
 if(N.t==='scr'){var t=(TIME+N.ph)%26;if(t<17.8||t>21.6)return 0;return clamp(L/(25.2-t),v,70)}
 if(N.t==='x'){var t2=(TIME+N.ph)%18,g=A.e.g,rem=0;if(g===0){if(t2>=8.8)rem=18-t2}else{if(t2<8.8)rem=9-t2;else if(t2>=17.8)rem=27-t2}return rem>L/v+.6?v:0}
 var cxw=wrap(N.x+A.cx),cyw=wrap(N.y+A.cy);for(var i=0;i<AI.length;i++){var a=AI[i];if(a.l)continue;var dx=wd(a.x,cxw),dy=wd(a.y,cyw),q=dx*dx+dy*dy;if(q<95*95&&(a.v>6||q<40*40))return 0}
 if(car&&!car.l){var dx2=wd(car.x,cxw),dy2=wd(car.y,cyw);if(dx2*dx2+dy2*dy2<110*110&&car.sp>20)return 0}
 return v}
function pedWaitUpd(p,dt){var N=p.qN,A=N.pa[p.qa];p.wt+=dt;if(p.mvg)return;
 var L=2*A.U+(p.qd?90:0),v=pedCanGo(N,A,L,p.v0);
 if(v>0){var rx=wd(p.x,N.x),ry=wd(p.y,N.y);
  if(p.qd){var n=N.pa.length,ci=p.qs>0?p.qa:(p.qa-1+n)%n,K1=N.pK[ci],K2=N.pK[(ci+2)%n],ti=Math.random()<.5,B=N.pa[ti?(ci+2)%n:(ci+3)%n],sB=ti?1:-1,PB=armP(B,sB);pedPath(p,mkPath([rx,K1[0],K2[0],PB[0]],[ry,K1[1],K2[1],PB[1]]),N.x,N.y,false,{w:[B,sB]},v/p.v0,true);return}
  var ax=rx-A.cx,ay=ry-A.cy,al=ax*A.dx+ay*A.dy,lt=-ax*A.dy+ay*A.dx;pedPath(p,mkPath([rx,A.cx+A.dx*al+A.dy*lt],[ry,A.cy+A.dy*al-A.dx*lt]),N.x,N.y,false,{n:[N,p.qa,-p.qs]},v/p.v0,true);return}
 if(p.wt>30)pedOut(p,A,p.qs)}
// ---- local streets
function pedLoc(p,s0){var r=p.r,s=p.s,d=p.dir,J=r.pj,i,n=J.length;
 for(i=0;i<n;i++){var j=J[i];if(!j.perp.length||j.s<4||j.s>r.len-4)continue;var sT=j.s-d*pedLat(j.perp[0].r,.6);if(d>0?(s0<sT&&s>=sT):(s0>sT&&s<=sT)){if(pedLocTurn(p,j,.28))return}}
 var j0=n&&J[0].s<4&&J[0].perp.length?J[0]:null,j1=n&&J[n-1].s>r.len-4&&J[n-1].perp.length?J[n-1]:null;
 var lim0=r.m0?r.m0.sjL:j0?j0.s+pedLat(j0.perp[0].r,.6):8,lim1=r.m1?r.m1.sjL:j1?j1.s-pedLat(j1.perp[0].r,.6):r.len-8;
 if(d<0&&s<=lim0)pedLocEnd(p,lim0,r.m0,j0);else if(d>0&&s>=lim1)pedLocEnd(p,lim1,r.m1,j1)}
function pedLocTurn(p,j,prob){if(Math.random()>prob)return false;var r=p.r,nx=-r.u[1]*p.sd,ny=r.u[0]*p.sd,uL=pedLat(r,p.lo);
 for(var k=0;k<j.perp.length;k++){var q=j.perp[k],r3=q.r,u3=r3.u,dir3=(nx*u3[0]+ny*u3[1])>=0?1:-1,s3=q.s+(nx*u3[0]+ny*u3[1])*uL;if(dir3>0?s3>r3.len-20:s3<20)continue;var sd3=(-p.dir*r.u[0]*-u3[1]+-p.dir*r.u[1]*u3[0])>=0?1:-1;pedSetWalk(p,r3,s3,sd3,dir3);return true}
 return false}
function pedLocEnd(p,sL,m,J){var r=p.r;p.s=sL;
 if(m&&Math.random()<.65){pedSetWalk(p,m.art,m.sc[p.sd],m.side,m.dr[p.sd]);return}
 if(J&&pedLocTurn(p,J,.8))return;
 if(Math.random()<.6){r.pt(sL,TMP);var u=pedLat(r,p.lo)*p.sd,x0=TMP[0]-TMP[3]*u,y0=TMP[1]+TMP[2]*u;pedPath(p,mkPath([0,2*TMP[3]*u],[0,-2*TMP[2]*u]),x0,y0,false,{l:[r,sL,-p.sd,-p.dir]},1.3,false);return}
 p.dir=-p.dir;p.lt=pedLane(p)}
// ---- spawn / update / draw
function pedPick(path){var st,k,tries=0;do{st=Math.random()*PST_N|0;k=PSTY[st].k;tries++}while(((k===6)!==(path&&Math.random()<.4))&&tries<12);return st}
function pedSpawnOne(any){
 var an=Math.random()*TAU,d=any?30+Math.random()*760:300+Math.random()*560,px=wrap(car.x+Math.cos(an)*d),py=wrap(car.y+Math.sin(an)*d);
 if(!any&&Math.abs(wd(px,cam.x))<VW/2+24&&Math.abs(wd(py,cam.y))<VH/2+24)return;
 var cand=[];RH.q(px-60,py-60,px+60,py+60,function(sp){var r=sp.r;if((r.k==='art'&&r.sw>=8)||r.k==='loc'||r.k==='path')cand.push(sp)});if(!cand.length)return;
 var sp=cand[Math.random()*cand.length|0],r=sp.r,dn=r.k==='path'?.6:(PDN[r.d]||0);if(Math.random()>dn)return;
 var s=(sp.i+Math.random()*Math.max(1,sp.j-sp.i))*r.ds;if(r.k==='art'){if(s<r.za+40||s>r.len-r.zb-40)return}else s=clamp(s,10,r.len-10);
 var rn=Math.random(),st,dog=false;if(r.k!=='path'&&rn<.11)st=PST_BIKE+(Math.random()*6|0);else{st=pedPick(r.k==='path');dog=PSTY[st].k===0&&Math.random()<(r.k==='path'?.45:.12)}
 var k=PSTY[st].k,v=k===7?34+Math.random()*12:k===6?30+Math.random()*8:k===3?10+Math.random()*4:k===1?15+Math.random()*4:12+Math.random()*6;if(dog)v*=.85;
 var p={k:k,st:st,m:'w',r:r,s:s,sd:r.k==='path'?1:(Math.random()<.5?1:-1),dir:Math.random()<.5?1:-1,v:v,v0:v,lo:.5,lt:.5,ph:Math.random()*10,a:0,ox:0,oy:0,jx:0,jy:0,jv:0,dvx:0,dvy:0,ex:0,cr:false,swf:0,mvg:true,x:0,y:0,bx:0,by:0,vm:1};
 p.lt=pedLane(p);p.lo=p.lt;p.idleOk=(r.d===D_SHOP||r.d===D_DOWN)&&k<6;
 r.pt(s,TMP);var u=p.sd*pedLat(r,p.lo);p.bx=TMP[0]-TMP[3]*u;p.by=TMP[1]+TMP[2]*u;p.x=wrap(p.bx);p.y=wrap(p.by);p.a=Math.atan2(TMP[3]*p.dir,TMP[2]*p.dir);
 for(var i=0;i<PEDS.length;i++){var q=PEDS[i];if(Math.abs(wd(q.x,p.x))<8&&Math.abs(wd(q.y,p.y))<8)return}
 if(dog){p.dog={x:p.x,y:p.y,a:p.a,ph:0,st:PST_DOG+(Math.random()*4|0)};p.dgs=Math.random()<.5?1:-1}
 PEDS.push(p)}
function pedFill(){PEDS=[];for(var i=0;i<220&&PEDS.length<72;i++)pedSpawnOne(true);tourManage(true)}
function tourFree(x,y){if(inBldR(x-3,y-3,x+3,y+3))return false;var ok=true;PH.q(x-12,y-12,x+12,y+12,function(q){if(!ok||q.hid)return;var dx=Math.abs(wd(q.x,x)),dy=Math.abs(wd(q.y,y));if(q.t===P_CAR){if(dx<(q.hx||10)+3&&dy<(q.hy||6)+3)ok=false;return}if(q.r>1.4&&Math.hypot(dx,dy)<q.r+3)ok=false});return ok}
function tourPoint(a){for(var t=0;t<10;t++){var x=wrap(a.x0+Math.random()*(a.x1-a.x0)),y=wrap(a.y0+Math.random()*(a.y1-a.y0));if(tourFree(x,y))return[x,y]}return null}
function tourTarget(p){for(var t=0;t<6;t++){var q=tourPoint(p.za);if(!q)continue;var ok=true;for(var k=1;k<4&&ok;k++){var mx=p.bx+wd(q[0],p.bx)*k/4,my=p.by+wd(q[1],p.by)*k/4;if(!tourFree(mx,my))ok=false}if(ok){p.tx=q[0];p.ty=q[1];return}}p.zt=1+Math.random()*2}
function tourSpawn(a,any){var q=tourPoint(a);if(!q)return;if(!any&&Math.abs(wd(q[0],cam.x))<VW/2+16&&Math.abs(wd(q[1],cam.y))<VH/2+16)return;var st;do{st=Math.random()*PST_N|0}while(PSTY[st].k===6);var v=10+Math.random()*6;
 var p={k:PSTY[st].k,st:st,m:'z',za:a,tx:q[0],ty:q[1],zt:Math.random()*4,v:v,v0:v,sd:1,dir:1,lo:.5,lt:.5,ph:Math.random()*10,a:Math.random()*TAU,ox:0,oy:0,jx:0,jy:0,jv:0,dvx:0,dvy:0,ex:0,cr:false,swf:0,mvg:false,x:q[0],y:q[1],bx:q[0],by:q[1],vm:1,cam:Math.random()<.35};
 if(PSTY[st].k===0&&Math.random()<.06){p.dog={x:p.x,y:p.y,a:p.a,ph:0,st:PST_DOG+(Math.random()*4|0)};p.dgs=1}PEDS.push(p)}
var TOURN=0;
function tourManage(any){if(!any&&FRAME%15)return;for(var i=0;i<TOUR.length;i++){var a=TOUR[i],ax=(a.x0+a.x1)/2,ay=(a.y0+a.y1)/2;if(Math.abs(wd(ax,car.x))>820||Math.abs(wd(ay,car.y))>820)continue;var n=0;for(var j=0;j<PEDS.length;j++)if(PEDS[j].za===a)n++;for(var t=0;t<(any?a.n*3:2)&&n<a.n;t++){var b=PEDS.length;tourSpawn(a,any);if(PEDS.length>b)n++}}}
function pedUpdate(dt){
 if(!PATL)return;var i;
 for(i=PEDS.length-1;i>=0;i--){var p=PEDS[i];if(Math.abs(wd(p.x,car.x))>980||Math.abs(wd(p.y,car.y))>980)PEDS.splice(i,1)}
 TOURN=0;for(i=0;i<PEDS.length;i++)if(PEDS[i].m==='z'||PEDS[i].za)TOURN++;for(var t=0;t<4&&PEDS.length-TOURN<PEDMAX;t++)pedSpawnOne(false);tourManage(false);
 PEDX.length=0;var ca=Math.cos(car.a),sa=Math.sin(car.a);
 for(i=0;i<PEDS.length;i++){pedStep(PEDS[i],dt,ca,sa);if(PEDS[i].cr)PEDX.push(PEDS[i])}
 if((FRAME&3)===0)pedSpacing()}
function pedStep(p,dt,ca,sa){var v=p.v,bx=p.bx,by=p.by,ang=p.a,mv=true;
 if(p.m==='k'){pedKnockStep(p,dt);return}
 if(p.m==='w'){var s0=p.s,r=p.r;p.s+=p.dir*v*dt;if(r.k==='art')pedArt(p,s0);else if(r.k==='loc')pedLoc(p,s0);else if(p.s<6||p.s>r.len-6){p.s=clamp(p.s,6,r.len-6);p.dir=-p.dir;p.lt=pedLane(p)}
  if(p.m==='w'&&p.idleOk&&Math.random()<dt*.018){p.m='i';p.it=2+Math.random()*4}}
 if(p.m==='w'||p.m==='i'){var r2=p.r;p.lo+=(p.lt-p.lo)*Math.min(1,dt*1.6);r2.pt(p.s,TMP);var u=p.sd*pedLat(r2,p.lo);bx=TMP[0]-TMP[3]*u;by=TMP[1]+TMP[2]*u;
  if(p.m==='i'){mv=false;p.it-=dt;ang=Math.atan2(TMP[2]*p.sd,-TMP[3]*p.sd);if(p.it<=0)p.m='w'}else ang=Math.atan2(TMP[3]*p.dir,TMP[2]*p.dir)}
 else if(p.m==='p'){var P=p.pt;p.ps+=p.v0*p.vm*dt;if(p.ps>=P.len){pathAt(P,p.prv?0:P.len,TMP2);bx=p.pox+TMP2[0];by=p.poy+TMP2[1];pedCont(p,p.cont)}
  else{pathAt(P,p.prv?P.len-p.ps:p.ps,TMP2);bx=p.pox+TMP2[0];by=p.poy+TMP2[1];if(TMP2[2]||TMP2[3])ang=p.prv?Math.atan2(-TMP2[3],-TMP2[2]):Math.atan2(TMP2[3],TMP2[2])}}
 else if(p.m==='z'){if(p.zt>0){p.zt-=dt;mv=false;ang=Math.atan2(wd(p.za.fy,p.by),wd(p.za.fx,p.bx))+Math.sin(TIME*.5+p.ph)*.25;if(p.zt<=0){tourTarget(p);p.cam=Math.random()<.35}}else{var zx=wd(p.tx,p.bx),zy=wd(p.ty,p.by),zl=Math.hypot(zx,zy);if(zl<1.5){p.zt=2+Math.random()*6;mv=false}else{var zs=Math.min(zl,p.v0*dt);bx=p.bx+zx/zl*zs;by=p.by+zy/zl*zs;ang=Math.atan2(zy,zx)}}}
 else if(p.m==='q'){var dx=wd(p.qx,p.bx),dy=wd(p.qy,p.by),dl=Math.hypot(dx,dy);if(dl>.6){var stp=Math.min(dl,p.v0*dt);bx=p.bx+dx/dl*stp;by=p.by+dy/dl*stp;ang=Math.atan2(dy,dx);p.mvg=true}else{bx=p.qx;by=p.qy;mv=false;p.mvg=false;ang=p.qf+Math.sin(TIME*.6+p.ph)*.18}
  pedWaitUpd(p,dt)}
 if(p.swf){p.jx=wd(p.x,bx)-p.ox;p.jy=wd(p.y,by)-p.oy;if(Math.abs(p.jx)>30||Math.abs(p.jy)>30){p.jx=p.jy=0}p.swf=0}
 // dodge the player's car
 if(car&&!car.l){var rx=wd(bx+p.ox,car.x),ry=wd(by+p.oy,car.y);if(!(rx>-70&&rx<70&&ry>-70&&ry<70))p.dc=null;else{var lx=rx*ca+ry*sa,ly=-rx*sa+ry*ca,ah=car.hx+8+Math.max(0,car.fw||0)*.4;
  if(car.sp>48&&Math.abs(lx)<car.hx+1.5&&Math.abs(ly)<car.hy+1.5){p.bx=bx;p.by=by;pedKnock(p);return}
  if(car.sp>22&&lx>-car.hx-3&&lx<ah&&Math.abs(ly)<car.hy+8){if(p.dc==null)p.dc=Math.random()<(car.sp>170?.3:car.sp>110?.55:.85)?1:0;if(p.dc===1&&p.jv<=0){var sg=ly>=0?1:-1;p.jv=.24;p.dvx=-sa*sg*80;p.dvy=ca*sg*80}if(p.ex<=0)p.ex=1.1}
  if(Math.abs(lx)<car.hx+2&&Math.abs(ly)<car.hy+2.5){var sg2=ly>=0?1:-1,push=sg2*(car.hy+2.5)-ly;p.ox+=-sa*push;p.oy+=ca*push}}}
 if(p.jv>0){p.jv-=dt;p.ox+=p.dvx*dt;p.oy+=p.dvy*dt;ang=Math.atan2(p.dvy,p.dvx);mv=true;if(Math.hypot(p.ox,p.oy)>14)p.jv=0}else{var k2=Math.exp(-dt*2);p.ox*=k2;p.oy*=k2}
 var om=Math.hypot(p.ox,p.oy);if(om>26&&!p.kb){p.ox*=26/om;p.oy*=26/om}if(p.kb&&om<4)p.kb=0;
 var k3=Math.exp(-dt*6);p.jx*=k3;p.jy*=k3;if(p.ex>0)p.ex-=dt;
 p.bx=bx;p.by=by;p.x=wrap(bx+p.ox+p.jx);p.y=wrap(by+p.oy+p.jy);p.a+=angd(ang,p.a)*Math.min(1,dt*12);p.mvg=mv;if(mv)p.ph+=Math.max(p.m==='p'?p.v0*p.vm:p.m==='q'?p.v0:v,p.jv>0?60:12)*dt;
 if(p.dog){var dg=p.dog,pa=p.a,tx=p.x-Math.cos(pa)*9-Math.sin(pa)*4*p.dgs,ty=p.y-Math.sin(pa)*9+Math.cos(pa)*4*p.dgs,ddx=wd(tx,dg.x),ddy=wd(ty,dg.y),dd=Math.hypot(ddx,ddy);
  if(dd>40){dg.x=tx;dg.y=ty}else if(dd>1.2){var sp2=Math.min(dd*3.2,v*1.9+12);dg.x=wrap(dg.x+ddx/dd*sp2*dt);dg.y=wrap(dg.y+ddy/dd*sp2*dt);dg.a+=angd(Math.atan2(ddy,ddx),dg.a)*Math.min(1,dt*10);dg.ph+=sp2*dt}
  if(Math.random()<dt*.15)p.dgs=-p.dgs}}
function pedSpacing(){for(var i=0;i<PEDS.length;i++){var p=PEDS[i];if(p.m!=='w')continue;var lim=p.v0;for(var j=0;j<PEDS.length;j++){if(i===j)continue;var q=PEDS[j];if(q.m==='p'||q.m==='k'||q.r!==p.r||q.sd!==p.sd||q.dir!==p.dir)continue;var ds=(q.s-p.s)*p.dir;if(ds>0&&ds<10&&Math.abs(q.lt-p.lt)<.2)lim=Math.min(lim,(q.m==='w'?q.v:0)*.95)}p.v=lim<p.v?lim:p.v+(p.v0-p.v)*.25}}
function pedDraw(){if(!PATL)return;
 for(var i=0;i<PEDS.length;i++){var p=PEDS[i],x=SX(p.x),y=SY(p.y);if(x<-14||y<-14||x>VW+14||y>VH+14)continue;
  if(p.dog)pedDrawDog(p,x,y);
  if(p.m==='k'&&p.kt<4.3){var dK=((Math.round(p.a/(TAU/PDIR))%PDIR)+PDIR)%PDIR,hk=Math.round(p.kh);cx.fillStyle='rgba(12,8,40,.3)';cx.fillRect(x-4,y-2,9,5);cx.drawImage(PATL,(PDIR*4+dK)*PCELL,p.st*PCELL,PCELL,PCELL,x-9,y-9-hk,PCELL,PCELL);if(hk===0&&p.kt>.5){var hx=x+Math.round(Math.cos(p.a)*6),hy=y+Math.round(Math.sin(p.a)*6);for(var q=0;q<3;q++){var sa2=TIME*5+q*2.1;var qx=hx+Math.round(Math.cos(sa2)*5),qy=hy-5+Math.round(Math.sin(sa2)*2);cx.fillStyle=q===1?'#ffffff':'#ffd23a';cx.fillRect(qx-1,qy,3,1);cx.fillRect(qx,qy-1,1,3)}}continue}
  var k=PSTY[p.st].k,dI=((Math.round(p.a/(TAU/PDIR))%PDIR)+PDIR)%PDIR,f=p.m==='k'?0:p.mvg?(Math.floor(p.ph/(k===7?3.2:2.3))&3):0;
  cx.fillStyle='rgba(12,8,40,.28)';if(k===3)cx.fillRect(x-4,y-3,11,10);else cx.fillRect(x-2,y-2,6,6);
  cx.drawImage(PATL,(dI*4+f)*PCELL,p.st*PCELL,PCELL,PCELL,x-9,y-9,PCELL,PCELL);
  if(p.m==='z'&&p.zt>0&&p.cam){var fx=x+Math.round(Math.cos(p.a)*5),fy=y+Math.round(Math.sin(p.a)*5)-2;cx.fillStyle='#1a1a24';cx.fillRect(fx-1,fy-1,3,3);cx.fillStyle='#e8ecf4';cx.fillRect(fx,fy,1,1);if(((TIME*7+p.ph*13)|0)%61===0){cx.globalAlpha=.6;cx.fillStyle='#ffffff';cx.fillRect(fx-3,fy-3,7,7);cx.globalAlpha=1}}
  if(p.ex>0&&(p.ex>.35||((p.ex*12)|0)%2)){cx.fillStyle='#1a1426';cx.fillRect(x-1,y-18,4,9);cx.fillStyle='#ffd23a';cx.fillRect(x,y-17,2,4);cx.fillRect(x,y-12,2,2)}}}
function pedKnock(p){p.km=p.m;p.m='k';p.kt=0;p.kh=1;var sp=car.sp;p.kvx=car.vx*.42+(Math.random()-.5)*30;p.kvy=car.vy*.42+(Math.random()-.5)*30;p.kvh=45+sp*.12;p.kva=(Math.random()-.5)*16;p.jv=0;p.ex=0;p.cr=false;p.kb=1;
 var st=PSTY[p.st],k=st.k,x=p.x,y=p.y;
 if(k===3){var key='umb'+p.st;if(!BSPR[key])BSPR[key]=mkSpr(11,11,function(R){for(var yy=-5;yy<=5;yy++)for(var xx=-5;xx<=5;xx++){var q=xx*xx+yy*yy;if(q>27)continue;var an=Math.atan2(yy,xx)+Math.PI;R(xx+5,yy+5,1,1,q>16?'rgb('+st.UMd+')':((Math.floor(an/(Math.PI/4))&1)?'rgb('+st.UM+')':'rgb('+st.UMl+')'))}R(5,5,1,1,'#fff')});PIECES.push({spr:BSPR[key],x:x,y:y,h:6,vx:car.vx*.9+(Math.random()-.5)*60,vy:car.vy*.9+(Math.random()-.5)*60,vh:120+sp*.3,a:0,va:(Math.random()-.5)*20,t:0,life:25,m:.1})}
 if(k===7)PIECES.push({spr:BSPR['bikeD'+((p.st-PST_BIKE)%6)],x:x,y:y,h:3,vx:car.vx*.85+(Math.random()-.5)*40,vy:car.vy*.85+(Math.random()-.5)*40,vh:60+sp*.25,a:p.a,va:(Math.random()-.5)*14,t:0,life:25,m:.4});
 auHit(.45);auSmash(1,.4);fxBits(x,y,5,['#ffffff','#ffd23a'],60,60,0,{dl:.6});smokePuff(x,y,0,0,2,7,false,0,1.4);
 flash('Сбил пешехода!',1.2);car.vx*=.93;car.vy*=.93;
 PEDS.forEach(function(q){if(q!==p&&Math.abs(wd(q.x,x))<60&&Math.abs(wd(q.y,y))<60&&q.ex<=0)q.ex=1.5})}
function pedKnockStep(p,dt){p.kt+=dt;
 if(p.kh>0||p.kvh>0){p.kvh-=300*dt;p.kh+=p.kvh*dt;if(p.kh<=0){p.kh=0;if(p.kvh<-40){p.kvh=-p.kvh*.3;p.kvx*=.55;p.kvy*=.55}else p.kvh=0}p.a+=p.kva*dt}
 if(p.kh<=0){var f=Math.exp(-8*dt);p.kvx*=f;p.kvy*=f;p.kva*=f}
 p.ox+=p.kvx*dt;p.oy+=p.kvy*dt;
 if(p.kt>4.9){p.m=p.km==='k'?'w':p.km;p.ex=1.6;p.swf=0}
 p.mvg=false;p.x=wrap(p.bx+p.ox);p.y=wrap(p.by+p.oy)}
function pedDrawDog(p,x,y){var dg=p.dog,X=SX(dg.x),Y=SY(dg.y),dI=((Math.round(dg.a/(TAU/PDIR))%PDIR)+PDIR)%PDIR,f=Math.floor(dg.ph/1.6)&3;
 cx.fillStyle='rgba(12,8,40,.26)';cx.fillRect(X-2,Y,5,3);cx.drawImage(PATL,(dI*4+f)*PCELL,dg.st*PCELL,PCELL,PCELL,X-9,Y-9,PCELL,PCELL);
 var hx=x-Math.sin(p.a)*4*p.dgs,hy=y+Math.cos(p.a)*4*p.dgs,hx2=X+Math.cos(dg.a)*3,hy2=Y+Math.sin(dg.a)*3;cx.fillStyle='rgba(36,28,48,.85)';for(var t=1;t<5;t++)cx.fillRect(Math.round(hx+(hx2-hx)*t/5),Math.round(hy+(hy2-hy)*t/5),1,1)}

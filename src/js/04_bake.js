// ===== CHUNK BAKER =====
var CHK=new Map(),BQ=[],FRAME=0,NH=null,LJH=null,SPH=null,PDH=null;
var MKS=CH+2,MK,mk,KANA={'止':['..#..','..###','#.#..','#.#..','#####'],'ま':['..#..','#####','..#..','#####','.##.#'],'れ':['.#...','####.','.#.#.','.##.#','.#..#']};
var ART_C=[[46,80,134],[46,80,134],[46,80,134],[46,80,134],[46,80,134],[46,80,134],[52,62,84]];
var LOC_C=[[52,90,148],[60,86,140],[66,84,118],[86,84,98],[60,88,140],[90,96,108],[56,66,88]];
var SW_C=[[108,100,148],[124,108,154],[116,120,136],[152,134,108],[160,148,116],[108,112,122],[86,98,74]];
var PAV_C=[[96,92,132],[112,98,140],[104,108,124],[140,124,100],[150,140,110],[98,102,112],[64,84,60]];
function baseIdx(){
 NH=new Hash();NODES.forEach(function(n){if(!n.ed.length)return;var r=(n.R||n.rJ)+80;NH.add(n,n.x-r,n.y-r,n.x+r,n.y+r)});
 LJH=new Hash();LJ.forEach(function(j){var r=j.r+j.sw+16;LJH.add(j,j.x-r,j.y-r,j.x+r,j.y+r)});
 SPH=new Hash();SPEC.forEach(function(s){SPH.add(s,s.x-4,s.y-4,s.x+s.w+4,s.y+s.h+4)});
 LMH=new Hash();LMI.forEach(function(it){LMH.add(it,it.bx0,it.by0,it.bx1,it.by1)});
 PDH=new Hash();PONDS.forEach(function(p){PDH.add(p,p.x-p.rx-4,p.y-p.ry-4,p.x+p.rx+4,p.y+p.ry+4)});
 PILLARS.forEach(function(p){p.r=0;PH.add(p,p.x-10,p.y-10,p.x+10,p.y+10)});
 MK=mkCanvas(MKS,MKS);mk=MK.getContext('2d',{willReadFrequently:true});
}
function mkPrep(){mk.setTransform(1,0,0,1,0,0);mk.globalCompositeOperation='source-over';mk.globalAlpha=1;mk.fillStyle='#000';mk.fillRect(0,0,MKS,MKS);mk.globalCompositeOperation='lighter';mk.lineCap='round';mk.lineJoin='round'}
function strokeSpan(sp,X0,Y0,w,col,from,to,ox,oy){var r=sp.r,i0=from==null?sp.i:from,i1=to==null?sp.j:to;if(i1<=i0)return;var bx=wd(r.xs[i0],X0)+1+(ox||0),by=wd(r.ys[i0],Y0)+1+(oy||0),ax=r.xs[i0],ay=r.ys[i0];mk.strokeStyle=col;mk.lineWidth=w;mk.beginPath();mk.moveTo(bx,by);for(var k=i0+1;k<=i1;k++)mk.lineTo(bx+r.xs[k]-ax,by+r.ys[k]-ay);mk.stroke()}
function strokeRun(r,X0,Y0,w,col,i0,i1,offy,offx){var x0=wd(r.xs[i0],X0)+1,y0=wd(r.ys[i0],Y0)+1,ax=r.xs[i0],ay=r.ys[i0];mk.strokeStyle=col;mk.lineWidth=w;mk.lineJoin='round';mk.beginPath();for(var k=i0;k<=i1;k++){var X=x0+r.xs[k]-ax+(offx?offx(k):0),Y=y0+r.ys[k]-ay+(offy?offy(k):0);if(k===i0)mk.moveTo(X,Y);else mk.lineTo(X,Y)}mk.stroke()}
function discM(x,y,X0,Y0,r,col){mk.fillStyle=col;mk.beginPath();mk.arc(wd(x,X0)+1,wd(y,Y0)+1,r,0,TAU);mk.fill()}
function chunkGet(cx,cy){cx=((cx%NC)+NC)%NC;cy=((cy%NC)+NC)%NC;var k=cy*NC+cx,c=CHK.get(k);if(c){c.age=FRAME;return c}return null}
function chunkNeed(cx,cy,sync){cx=((cx%NC)+NC)%NC;cy=((cy%NC)+NC)%NC;var k=cy*NC+cx,c=CHK.get(k);if(c){c.age=FRAME;return c}if(sync){c=bakeChunk(cx,cy);CHK.set(k,c);return c}if(BQ.indexOf(k)<0)BQ.push(k);return null}
var BJ=new Map(),BAKEBUD=2.5;
function bakeChunk(cx,cy){var k=cy*NC+cx,J=BJ.get(k),r;if(J){BJ.delete(k);if(J.res)return J.res;do{r=J.g.next()}while(!r.done);return r.value}var g=bakeChunkG(cx,cy);do{r=g.next()}while(!r.done);return r.value}
// nearest chunks to where the camera is heading go first; each frame bakes only for a couple of milliseconds
function chunkPump(n){var t0=performance.now(),bud=n>1?Math.max(BAKEBUD,n*4):BAKEBUD;
 if(BQ.length>1&&typeof cam!=='undefined'&&car){var fx=cam.x+(car.vx||0)*.5,fy=cam.y+(car.vy||0)*.5;BQ.sort(function(a,b){return chD(a,fx,fy)-chD(b,fx,fy)})}
 while(BQ.length){var k=BQ[0];if(CHK.has(k)){BQ.shift();continue}var J=BJ.get(k);if(!J){J={g:bakeChunkG(k%NC,(k/NC)|0),res:null,t:FRAME};BJ.set(k,J)}
  while(!J.res){var r=J.g.next();if(r.done){J.res=r.value;break}if(performance.now()-t0>bud)break}
  if(J.res){BQ.shift();var nc=bakeChunk(k%NC,(k/NC)|0);CHK.set(k,nc);if(typeof emisBake==='function'&&typeof TODS!=='undefined'&&TODS.L>.02&&nc.e===undefined)emisBake(nc)}
  if(performance.now()-t0>bud)break}
 // chunks that changed (wires down after a crash) are re-baked in the background and swapped in when ready
 while(RQ.length&&performance.now()-t0<bud){var rk=RQ[0];if(!CHK.has(rk)){RQ.shift();BJ.delete(-1-rk);continue}var RJ=BJ.get(-1-rk);if(!RJ){RJ={g:bakeChunkG(rk%NC,(rk/NC)|0),res:null,t:FRAME};BJ.set(-1-rk,RJ)}
  while(!RJ.res){var rr=RJ.g.next();if(rr.done){RJ.res=rr.value;break}if(performance.now()-t0>bud)break}
  if(RJ.res){RQ.shift();BJ.delete(-1-rk);if(!BJ.has(rk)){BJ.set(rk,RJ);var old=CHK.get(rk),nc2=bakeChunk(rk%NC,(rk/NC)|0);if(old)nc2.age=old.age;CHK.set(rk,nc2)}}}
 if(BJ.size>6)BJ.forEach(function(J,k){if(k>=0&&BQ.indexOf(k)<0&&FRAME-J.t>300)BJ.delete(k)});
 if(CHK.size>120){var a=[];CHK.forEach(function(v,k){a.push([v.age,k])});a.sort(function(p,q){return p[0]-q[0]});for(var i=0;i<CHK.size-100;i++)CHK.delete(a[i][1])}}
function chD(k,fx,fy){var x=(k%NC)*CH+CH/2,y=((k/NC)|0)*CH+CH/2;return Math.abs(wd(x,fx))+Math.abs(wd(y,fy))}
var RQ=[];function chunkSoft(x0,y0,x1,y1){var a=Math.floor(x0/CH),b=Math.floor(x1/CH),c=Math.floor(y0/CH),d=Math.floor(y1/CH);for(var y=c;y<=d;y++)for(var x=a;x<=b;x++){var k=(((y%NC)+NC)%NC)*NC+(((x%NC)+NC)%NC);if(CHK.has(k)){if(RQ.indexOf(k)<0)RQ.push(k)}}}
function chunkDirty(x0,y0,x1,y1){var a=Math.floor(x0/CH),b=Math.floor(x1/CH),c=Math.floor(y0/CH),d=Math.floor(y1/CH);for(var y=c;y<=d;y++)for(var x=a;x<=b;x++){var k=(((y%NC)+NC)%NC)*NC+(((x%NC)+NC)%NC);CHK.delete(k)}}
function typeAt(x,y){x=wrap(x);y=wrap(y);var cx=(x/CH)|0,cy=(y/CH)|0,c=CHK.get(cy*NC+cx);if(!c)return 1;return c.t[((y|0)-cy*CH)*CH+((x|0)-cx*CH)]}
// district at a world point (same rule as the classifier) and smooth value noise for organic district edges
function distAt(wx,wy){wx=wrap(wx);wy=wrap(wy);var ci=(Math.floor(wy/OC)%ON)*ON+Math.floor(wx/OC);return CD[ci]!==255?CD[ci]:DGRID[(Math.floor(wy/DGS)%DG)*DG+Math.floor(wx/DGS)%DG]}
function vnoise(x,y,s){var X=Math.floor(x/16),Y=Math.floor(y/16),fx=x/16-X,fy=y/16-Y;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);var a=hsh(X,Y,s),b=hsh(X+1,Y,s),c=hsh(X,Y+1,s),d=hsh(X+1,Y+1,s);return a+(b-a)*fx+(c-a)*fy+(a-b-c+d)*fx*fy}
// district colours blurred over ~±32 px, so asphalt, pavement and sidewalks fade from one district into the next
function distBlend(X0,Y0){var BG=8,BM=4,BN=CH/BG+1,BW=BN+2*BM,dg=new Uint8Array(BW*BW),i,x,y,c,k,uni=true;
 for(y=0;y<BW;y++)for(x=0;x<BW;x++){dg[y*BW+x]=distAt(X0+(x-BM)*BG,Y0+(y-BM)*BG);if(dg[y*BW+x]!==dg[0])uni=false}
 if(uni)return null;
 function blur(pal){var a=new Float32Array(BW*BW*3),h=new Float32Array(BW*BN*3),o=new Float32Array(BN*BN*3),W2=(BM+1)*(BM+1);
  for(i=0;i<BW*BW;i++){var pc=pal[dg[i]];a[i*3]=pc[0];a[i*3+1]=pc[1];a[i*3+2]=pc[2]}
  for(y=0;y<BW;y++)for(x=0;x<BN;x++)for(c=0;c<3;c++){var sm=0;for(k=-BM;k<=BM;k++)sm+=(BM+1-Math.abs(k))*a[(y*BW+x+BM+k)*3+c];h[(y*BN+x)*3+c]=sm/W2}
  for(y=0;y<BN;y++)for(x=0;x<BN;x++)for(c=0;c<3;c++){var sm2=0;for(k=-BM;k<=BM;k++)sm2+=(BM+1-Math.abs(k))*h[((y+BM+k)*BN+x)*3+c];o[(y*BN+x)*3+c]=sm2/W2}
  return o}
 return{n:BN,art:blur(ART_C),loc:blur(LOC_C),sw:blur(SW_C),pav:blur(PAV_C)}}
var BLO=[0,0,0];// reused: the caller copies the colour out at once
function blendAt(G,x,y){var n=G.n,ix=x>>3,iy=y>>3,fx=(x&7)/8,fy=(y&7)/8,i00=(iy*n+ix)*3,i10=i00+3,i01=i00+n*3,i11=i01+3,o=BLO;
 for(var c=0;c<3;c++){var a=G.cur[i00+c]+(G.cur[i10+c]-G.cur[i00+c])*fx,b=G.cur[i01+c]+(G.cur[i11+c]-G.cur[i01+c])*fx;o[c]=a+(b-a)*fy}return o}
// how much of a road's end to leave to the crossing stubs (so the round stroke cap does not poke out past a narrower road)
function nodeTrimD(r){return Math.ceil((r.hw+r.sw+2)/r.ds)*r.ds}
function nodeTrim(r){if(r._tr)return r._tr;var k=Math.ceil((r.hw+r.sw+2)/r.ds),x=function(N){return N&&(N.t==='x'||N.t==='scr')&&N.ed&&N.ed.length};r._tr=[x(r.a)?k:0,x(r.b)?r.n-1-k:r.n-1];return r._tr}
// a chunk is baked in small steps (a generator) so a new part of the city never freezes a frame: chunkPump runs the steps
// within a time budget; bakeChunk() still bakes a chunk at once when it is needed right now
function* bakeChunkG(cx,cy){
 var X0=cx*CH,Y0=cy*CH,M2=MKS*MKS,i,x,y;
 var spans=[],dspans=[],nodes=[],ljs=[],specs=[],ponds=[],brushes=[];
 RH.q(X0-90,Y0-90,X0+CH+90,Y0+CH+90,function(s){spans.push(s)});
 DH.q(X0-90,Y0-90,X0+CH+90,Y0+CH+90,function(s){dspans.push(s)});
 NH.q(X0,Y0,X0+CH,Y0+CH,function(n){nodes.push(n)});
 LJH.q(X0,Y0,X0+CH,Y0+CH,function(j){ljs.push(j)});
 SPH.q(X0,Y0,X0+CH,Y0+CH,function(s){specs.push(s)});
 PDH.q(X0,Y0,X0+CH,Y0+CH,function(p){ponds.push(p)});
 EDITB.forEach(function(b){if(Math.abs(wd(b.x,X0+CH/2))<CH/2+b.r+2&&Math.abs(wd(b.y,Y0+CH/2))<CH/2+b.r+2)brushes.push(b)});
 // --- pass 1: R outer, G arterial asphalt, B local asphalt
 mkPrep();
 spans.forEach(function(s){var r=s.r;if(r.k==='ramp'){var a=-1;for(var k=s.i;k<=s.j;k++){if(r.h[k]<=.32){if(a<0)a=Math.max(s.i,k-1)}else if(a>=0){strokeSpan(s,X0,Y0,r.hw*2,'#0f0',a,k);a=-1}}if(a>=0)strokeSpan(s,X0,Y0,r.hw*2,'#0f0',a,s.j);return}
  if(r.sw>0){var tr=nodeTrim(r);strokeSpan(s,X0,Y0,(r.hw+r.sw)*2,'#f00',Math.max(s.i,tr[0]),Math.min(s.j,tr[1]))}});
 spans.forEach(function(s){var r=s.r;if(r.k==='art'||r.k==='touge'){var tr=nodeTrim(r);strokeSpan(s,X0,Y0,r.hw*2,'#0f0',Math.max(s.i,tr[0]),Math.min(s.j,tr[1]))}else if(r.k==='loc')strokeSpan(s,X0,Y0,r.hw*2,'#00f')});
 // crossings: each arm is a straight full-width stub from the centre (no round disc, so no bulge on the far side of a T)
 nodes.forEach(function(n){var sw=0;n.ed.forEach(function(e){sw=Math.max(sw,e.r.sw)});
  if(n.t==='round'){var R=n.R||n.rJ;discM(n.x,n.y,X0,Y0,R+sw,'#f00');discM(n.x,n.y,X0,Y0,R,'#0f0');return}
  var cx0=wd(n.x,X0)+1,cy0=wd(n.y,Y0)+1;[1,0].forEach(function(pass){n.ed.forEach(function(e){var r=e.r;if(r.k==='ramp'||r.k==='exp')return;var w=pass?r.hw+(r.sw||0):r.hw;if(pass&&!r.sw)return;
   if(e.e===0)r.pt(0,TMP);else r.pt(r.len,TMP);var ux=e.e===0?TMP[2]:-TMP[2],uy=e.e===0?TMP[3]:-TMP[3],nx=-uy,ny=ux,L=nodeTrimD(r)+8;
   mk.fillStyle=pass?'#f00':'#0f0';mk.beginPath();mk.moveTo(cx0+nx*w,cy0+ny*w);mk.lineTo(cx0+nx*w+ux*L,cy0+ny*w+uy*L);mk.lineTo(cx0-nx*w+ux*L,cy0-ny*w+uy*L);mk.lineTo(cx0-nx*w,cy0-ny*w);mk.closePath();mk.fill()})})});
 // side-street junctions: straight, full-width joins (the old round discs made bulges on every road)
 ljs.forEach(function(j){var X=wd(j.x,X0)+1,Y=wd(j.y,Y0)+1,hw=j.hw,sw=j.sw||0;
  if(j.mouth&&j.dir){var e=-13*j.dir,f=e+j.dir*34,a=Math.min(e,f),b=Math.max(e,f);
   if(j.o){if(sw){mk.fillStyle='#f00';mk.fillRect(X+a,Y-hw-sw,b-a,(hw+sw)*2)}mk.fillStyle='#00f';mk.fillRect(X+a,Y-hw,b-a,hw*2)}
   else{if(sw){mk.fillStyle='#f00';mk.fillRect(X-hw-sw,Y+a,(hw+sw)*2,b-a)}mk.fillStyle='#00f';mk.fillRect(X-hw,Y+a,hw*2,b-a)}}
  else{if(sw){mk.fillStyle='#f00';mk.fillRect(X-hw-sw,Y-hw-sw,(hw+sw)*2,(hw+sw)*2)}mk.fillStyle='#00f';mk.fillRect(X-hw,Y-hw,hw*2,hw*2)}});
 var m1=mk.getImageData(0,0,MKS,MKS).data;yield 0;
 // --- pass 2: R walls, G deck shadow, B islands
 mkPrep();
 spans.forEach(function(s){var r=s.r;if(r.k==='touge'&&r.gl){var lo=Math.max(s.i,17),hi=Math.min(s.j,r.n-18);if(hi>lo){if(typeof railStroke==='function'){railStroke(s,'gl',X0,Y0,lo,hi);railStroke(s,'gr',X0,Y0,lo,hi)}else{strokeSpan({r:r.gl,i:s.i,j:s.j},X0,Y0,2,'#f00',lo,hi);strokeSpan({r:r.gr,i:s.i,j:s.j},X0,Y0,2,'#f00',lo,hi)}}}
  if(r.k==='ramp'){var a=-1;for(var k=s.i;k<=s.j;k++){var h=r.h[k];if(h>.36&&h<.64){if(a<0)a=k}else if(a>=0){strokeSpan(s,X0,Y0,r.hw*2,'#f00',a,k);a=-1}}if(a>=0)strokeSpan(s,X0,Y0,r.hw*2,'#f00',a,s.j)}});
 mk.lineCap='butt';dspans.forEach(function(s){var r=s.r,a=Math.max(0,s.i-1),b=Math.min(r.n-2,s.j),k=a;function on(q){return(r.h?(r.h[q]+r.h[q+1])/2:1)>=.1}while(k<=b){if(!on(k)){k++;continue}var e=k;while(e+1<=b&&on(e+1))e++;strokeRun(r,X0,Y0,r.hw*2,'#0f0',k,e+1,function(q){return 16*(r.h?r.h[q]:1)},function(q){return 12*(r.h?r.h[q]:1)});k=e+1}});mk.lineCap='round';
 nodes.forEach(function(n){if(n.t==='round')discM(n.x,n.y,X0,Y0,n.Ri,'#00f')});
 var m2=mk.getImageData(0,0,MKS,MKS).data,m3=null;
 if(brushes.length){mkPrep();brushes.forEach(function(b){discM(b.x,b.y,X0,Y0,b.r,b.t===0?'#f00':b.t===4?'#0f0':'#00f')});m3=mk.getImageData(0,0,MKS,MKS).data}yield 0;
 // --- classify (padded)
 var vt=new Uint8Array(M2),dd=new Uint8Array(M2),DB=distBlend(X0,Y0),JW=(MKS>>2)+1,JX=DB?new Float32Array(JW*JW).fill(-99):null,JY=DB?new Float32Array(JW*JW):null;
 var rvy=new Float32Array(MKS),rvh=new Float32Array(MKS);for(x=0;x<MKS;x++){var wx=wrap(X0+x-1);rvy[x]=rivY(wx);rvh[x]=rivHW(wx)}
 for(y=0;y<MKS;y++){var wy=wrap(Y0+y-1),oy=Math.floor(wy/OC);for(x=0;x<MKS;x++){var wx2=wrap(X0+x-1),k=y*MKS+x,q=k*4,ci=(oy%ON)*ON+Math.floor(wx2/OC),d=CD[ci]!==255?CD[ci]:DGRID[(Math.floor(wy/DGS)%DG)*DG+Math.floor(wx2/DGS)%DG];dd[k]=d;
   var t,ov=OCC[ci];
   if(m2[q+2]>127)t=5;else if(m1[q+1]>127)t=0;else if(m1[q+2]>127)t=1;else if(m1[q]>127)t=2;
   else if(Math.abs(wd(wy,rvy[x]))<rvh[x])t=4;
   else{var dj=d;if(DB&&ov!==3&&ov!==5&&ov!==4){var jk=(y>>2)*JW+(x>>2);if(JX[jk]===-99){JX[jk]=(vnoise(wx2,wy,41)-.5)*44;JY[jk]=(vnoise(wx2,wy,43)-.5)*44}dj=distAt(wx2+JX[jk],wy+JY[jk])}t=ov===3?10:ov===5?11:ov===4?12:(dj===D_FOREST?11:13)}
   if(t>=10)for(var p=0;p<ponds.length;p++){var pp=ponds[p],ex=wd(wx2,pp.x)/pp.rx,ey=wd(wy,pp.y)/pp.ry;if(ex*ex+ey*ey<1){t=4;break}}
   if(m3){if(m3[q]>127)t=0;else if(m3[q+1]>127)t=4;else if(m3[q+2]>127)t=10}
   if(m2[q]>127&&t!==4)t=6;
   vt[k]=t;}if((y&15)===15)yield 0}
 var G=mkCanvas(CH,CH),g=G.getContext('2d',{willReadFrequently:true}),img=g.createImageData(CH,CH),buf=img.data,T=new Uint8Array(CH*CH),spark=[];
 var TMAP={0:0,1:0,2:1,4:5,5:2,6:6,10:2,11:3,12:1,13:1};
 // (no arrays per pixel: a chunk used to allocate ~200k of them and the garbage collector froze frames while driving)
 for(y=0;y<CH;y++){var wy3=Y0+y;for(x=0;x<CH;x++){var k3=(y+1)*MKS+x+1,t3=vt[k3],d3=dd[k3],wx3=X0+x,n=hsh(wx3,wy3,1),c,cr,cg,cb,o=(y*CH+x)*4,up=vt[k3-MKS],dn=vt[k3+MKS],lf=vt[k3-1],rt=vt[k3+1];
   if(t3===0||t3===1){if(DB){DB.cur=t3===0?DB.art:DB.loc;c=blendAt(DB,x,y)}else c=t3===0?ART_C[d3]:LOC_C[d3];var v=n*6-3;if(hsh(wx3>>3,wy3>>3,7)<.06)v-=5;cr=c[0]+v;cg=c[1]+v;cb=c[2]+v;if(up===2||dn===2||lf===2||rt===2){cr-=10;cg-=10;cb-=8}if(d3===3&&t3===1&&((wx3&7)===0||(wy3&15)===0)){cr-=10;cg-=10;cb-=8}}
   else if(t3===2){if(DB){DB.cur=DB.sw;c=blendAt(DB,x,y)}else c=SW_C[d3];var v2=n*5-2;if((wx3&7)===0||(wy3&7)===0)v2-=12;cr=c[0]+v2;cg=c[1]+v2;cb=c[2]+v2;if(up<2||dn<2||lf<2||rt<2){cr+=34;cg+=34;cb+=34}if(up===4||dn===4||lf===4||rt===4){cr=214;cg=220;cb=232}}
   else if(t3===4){var v3=n*6-3;cr=40+v3;cg=94+v3;cb=178+v3;if(up!==4||(k3>=2*MKS&&vt[k3-2*MKS]!==4)){cr=28;cg=64;cb=128}else if(hsh(wx3>>2,wy3,5)<.04){cr=70;cg=130;cb=210}if(hsh(wx3,wy3,77)<.004&&up===4&&dn===4)spark.push(x,y)}
   else if(t3===5){cr=64;cg=128;cb=84;if(hsh(wx3,wy3,3)<.15){cr=52;cg=108;cb=70}if(up===0||dn===0||lf===0||rt===0){cr=220;cg=224;cb=232}}
   else if(t3===6){cr=176;cg=182;cb=196;if(dn!==6){cr=110;cg=114;cb=128}if((wx3&7)===0){cr=150;cg=156;cb=170}}
   else if(t3===10){var v4=n*8-4;cr=60+v4;cg=118+v4;cb=78+v4;if(hsh(wx3,wy3,4)<.08){cr=48;cg=98;cb=64}}
   else if(t3===11){cr=30;cg=66;cb=46;if(hsh(wx3,wy3,4)<.2){cr=24;cg=54;cb=38}else if(hsh(wx3,wy3,6)<.06){cr=44;cg=86;cb=58}}
   else{if(DB){DB.cur=DB.pav;c=blendAt(DB,x,y)}else c=PAV_C[d3];var v5=n*5-2;if(t3===13&&((wx3%6)===0||(wy3%6)===0))v5-=8;cr=c[0]+v5;cg=c[1]+v5;cb=c[2]+v5}
   if(t3!==4&&(up===4||dn===4||lf===4||rt===4)&&t3!==2){cr=196;cg=200;cb=212}
   if(m2[(k3)*4+1]>127){cr*=.56;cg*=.56;cb*=.66}
   buf[o]=cr;buf[o+1]=cg;buf[o+2]=cb;buf[o+3]=255;T[y*CH+x]=TMAP[t3]}if((y&15)===15)yield 0}yield 0;
 // --- markings
 function px(xx,yy,r,gg,b){xx=Math.round(xx);yy=Math.round(yy);if(xx<0||yy<0||xx>=CH||yy>=CH)return;var t=vt[(yy+1)*MKS+xx+1];if(t>1)return;var o=(yy*CH+xx)*4;buf[o]=r;buf[o+1]=gg;buf[o+2]=b}
 var WH=[214,226,250],YE=[232,206,96];
 spans.forEach(function(s){var r=s.r;if(r.k==='path')return;
  if(r.k==='loc'){var L=r.len,ux=(r.xs[1]-r.xs[0])/L,uy=(r.ys[1]-r.ys[0])/L,bx=wd(r.xs[0],X0),by=wd(r.ys[0],Y0);if(bx+Math.max(0,ux*L)<-40||bx+Math.min(0,ux*L)>CH+40||by+Math.max(0,uy*L)<-40||by+Math.min(0,uy*L)>CH+40)return;
   for(var sv=0;sv<=L;sv+=1){var X=bx+ux*sv,Y=by+uy*sv;if(X<-40||X>CH+40||Y<-40||Y>CH+40)continue;var skip=sv<(r.ma?40:4)||sv>L-(r.mb?40:4);if(!skip)for(var q=0;q<r.jx.length;q++){var jj=r.jx[q];if(Math.abs(wd(jj.x,r.xs[0]+ux*sv))+Math.abs(wd(jj.y,r.ys[0]+uy*sv))<r.hw+10){skip=true;break}}if(skip)continue;
    if(r.d===D_DOWN||r.d===D_SHOP||r.d===D_PORT){if((sv%20)<10){px(X,Y,WH[0],WH[1],WH[2])}px(X-uy*(r.hw-3),Y+ux*(r.hw-3),200,210,236);px(X+uy*(r.hw-3),Y-ux*(r.hw-3),200,210,236)}
    else if(r.d===D_RES){px(X-uy*(r.hw-2),Y+ux*(r.hw-2),210,214,226);px(X+uy*(r.hw-2),Y-ux*(r.hw-2),210,214,226)}}
   [0,1].forEach(function(end){if(end?!r.mb:!r.ma)return;if(L<110)return;var uc=(end?-1:1)*r.hw/2,sgn=end?1:-1,s0=end?L-36:36;for(var q=-r.hw*.0;q<=0;q++){}for(var w2=0;w2<=r.hw-2;w2+=.5)for(var t2=0;t2<2;t2+=.5){var sv2=s0+sgn*t2,uu2=(end?-1:1)*w2;px(bx+ux*sv2-uy*uu2,by+uy*sv2+ux*uu2,WH[0],WH[1],WH[2])}
    var sc=r.hw>=24?2:1.6;['止','ま','れ'].forEach(function(gch,gi){var bm=KANA[gch];for(var row=0;row<5;row++)for(var col=0;col<5;col++){if(bm[row][col]!=='#')continue;for(var sx=0;sx<sc;sx+=.5)for(var sy=0;sy<2;sy+=.5){var dist=6+gi*12+row*2+sy,sv3=s0-sgn*dist,cc=(col-2)*sc+sx-sc/2,uu3=uc+(end?1:-1)*cc;px(bx+ux*sv3-uy*uu3,by+uy*sv3+ux*uu3,WH[0],WH[1],WH[2])}}})});
   return}
  if(r.k!=='art'&&r.k!=='touge'&&r.k!=='ramp')return;
  var s0=s.i*r.ds,s1=s.j*r.ds;
  for(var sv2=s0;sv2<=s1;sv2+=.5){r.pt(sv2,TMP);var X2=wd(TMP[0],X0),Y2=wd(TMP[1],Y0);if(X2<-r.hw-4||X2>CH+r.hw+4||Y2<-r.hw-4||Y2>CH+r.hw+4)continue;var nx=-TMP[3],ny=TMP[2];
   if(r.k==='ramp'){if(r.hAt(sv2)>.3||sv2>r.len-r.art.hw-r.art.sw-30)continue;if((sv2%18)<9)px(X2,Y2,WH[0],WH[1],WH[2]);continue}
   if(sv2<r.za+(r.a.t==='round'?24:22)||sv2>r.len-r.zb-(r.b.t==='round'?24:22))continue;
   if(r.k==='touge'){if((sv2%20)<10)px(X2,Y2,YE[0],YE[1],YE[2]);px(X2+nx*(r.hw-3),Y2+ny*(r.hw-3),WH[0],WH[1],WH[2]);px(X2-nx*(r.hw-3),Y2-ny*(r.hw-3),WH[0],WH[1],WH[2]);continue}
   px(X2+nx*1.5,Y2+ny*1.5,YE[0],YE[1],YE[2]);px(X2-nx*1.5,Y2-ny*1.5,YE[0],YE[1],YE[2]);
   px(X2+nx*(r.hw-3),Y2+ny*(r.hw-3),WH[0],WH[1],WH[2]);px(X2-nx*(r.hw-3),Y2-ny*(r.hw-3),WH[0],WH[1],WH[2]);
   if((sv2%24)<12)for(var ln=1;ln<r.nl;ln++){var u=r.m+ln*(r.lw||20);px(X2+nx*u,Y2+ny*u,WH[0],WH[1],WH[2]);px(X2-nx*u,Y2-ny*u,WH[0],WH[1],WH[2])}
  }
 });
 yield 0;
 // node crosswalks, stop lines, arrows
 nodes.forEach(function(n){n.ed.forEach(function(e){var r=e.r,za=e.e===0?r.za:r.zb,sg=e.e===0?1:-1,rnd=n.t==='round';
  function S(dist){return e.e===0?dist:r.len-dist}
  var c0=rnd?za+12:za+3,c1=c0+15;
  for(var sv=c0;sv<=c1;sv+=.5){r.pt(S(sv),TMP);var X=wd(TMP[0],X0),Y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2];if(X<-80||X>CH+80||Y<-80||Y>CH+80)continue;for(var u=-r.hw+2;u<=r.hw-2;u+=.5)if((Math.floor((u+r.hw)/4)&1)===0)px(X+nx*u,Y+ny*u,WH[0],WH[1],WH[2])}
  var sl=rnd?za+1:c1+4;for(var sv2=sl;sv2<=sl+1.5;sv2+=.5){r.pt(S(sv2),TMP);var X2=wd(TMP[0],X0),Y2=wd(TMP[1],Y0),nx2=-TMP[3],ny2=TMP[2];for(var u2=1;u2<=r.hw-3;u2+=.5){if(rnd&&(Math.floor(u2/3)&1))continue;px(X2+nx2*u2*sg,Y2+ny2*u2*sg,WH[0],WH[1],WH[2])}}
  if(r.k==='art'&&!rnd){var lim=r.nl>=3?'60':'50',os2=e.e===0?1:-1;for(var ln2=0;ln2<r.nl;ln2++){var ua=(r.m+(ln2+.5)*(r.lw||20))*sg;[sl+44,sl+70].forEach(function(dd){for(var a=-6;a<=6;a+=.5)for(var c2=-3.5;c2<=3.5;c2+=.5){if(Math.abs(Math.abs(a)/6+Math.abs(c2)/3.5-1)>.16)continue;r.pt(S(dd+a),TMP);var Xd=wd(TMP[0],X0),Yd=wd(TMP[1],Y0);if(Xd<-20||Xd>CH+20||Yd<-20||Yd>CH+20)return;px(Xd-TMP[3]*(ua+c2),Yd+TMP[2]*(ua+c2),WH[0],WH[1],WH[2])}});
    var ud=-ua;for(var ch=0;ch<2;ch++){var bm=DIG[+lim[ch]];for(var k=0;k<15;k++){if(bm[k]!=='1')continue;var col=k%3,row=(k/3)|0;for(var sx=0;sx<2;sx+=.5)for(var sy=0;sy<3;sy+=.5){var cc=(ch*4+col)*2+sx-7,dist=sl+38+(4-row)*3+sy;r.pt(S(dist),TMP);var Xn=wd(TMP[0],X0),Yn=wd(TMP[1],Y0);if(Xn<-20||Xn>CH+20||Yn<-20||Yn>CH+20)continue;var uu=ud+os2*cc;px(Xn-TMP[3]*uu,Yn+TMP[2]*uu,WH[0],WH[1],WH[2])}}}}}
  if(r.k==='art')for(var ln=0;ln<r.nl;ln++){var uc=(r.m+(ln+.5)*(r.lw||20))*sg;for(var sv3=sl+10;sv3<=sl+26;sv3+=.5){r.pt(S(sv3),TMP);var X3=wd(TMP[0],X0),Y3=wd(TMP[1],Y0),nx3=-TMP[3],ny3=TMP[2],dd3=sv3-(sl+10),wdt=dd3<6?dd3*.55+.3:.8;for(var u3=-wdt;u3<=wdt;u3+=.5)px(X3+nx3*(uc+u3),Y3+ny3*(uc+u3),WH[0],WH[1],WH[2])}}
 });
  if(n.t==='scr'){var a0=n.ed[0].an;[a0+Math.PI/4,a0-Math.PI/4].forEach(function(a){var dx=Math.cos(a),dy=Math.sin(a),cx2=wd(n.x,X0),cy2=wd(n.y,Y0);for(var al=-n.rJ+8;al<=n.rJ-8;al+=.5)for(var ac=-7;ac<=7;ac+=.5){if((Math.floor((al+200)/4)&1))continue;px(cx2+dx*al-dy*ac,cy2+dy*al+dx*ac,WH[0],WH[1],WH[2])}})}
 });
 ljs.forEach(function(j){if(!j.cw||j.mouth)return;var cx2=wd(j.x,X0),cy2=wd(j.y,Y0);[[1,0],[-1,0],[0,1],[0,-1]].forEach(function(dv){var ax=cx2+dv[0]*(j.r+5),ay=cy2+dv[1]*(j.r+5),t=vt[(Math.round(ay)+1)*MKS+Math.round(ax)+1];if(ax<-1||ay<-1||ax>CH||ay>CH||t>1){if(ax>=-1&&ay>=-1&&ax<=CH&&ay<=CH)return}for(var al=j.r+1;al<=j.r+9;al+=.5)for(var ac=-j.hw+2;ac<=j.hw-2;ac+=.5){if(Math.floor((ac+j.hw)/4)&1)continue;px(cx2+dv[0]*al+dv[1]*ac,cy2+dv[1]*al+dv[0]*ac,WH[0],WH[1],WH[2])}})});
 yield 0;g.putImageData(img,0,0);
 // --- specials ground
 var AN=[],lms=[];LMH.q(X0,Y0,X0+CH,Y0+CH,function(it){lms.push(it)});
 var tS=performance.now();for(var si=0;si<specs.length;si++){var s9=specs[si];drawSpecGround(g,s9,wd(s9.x,X0),wd(s9.y,Y0),AN);if(performance.now()-tS>1.2){yield 0;tS=performance.now()}}
 lms.forEach(function(it){if(it.k==='shadow')towerShadow(g,wd(it.x,X0),wd(it.y,Y0),it.L,it.W);else lmGround(g,it,X0,Y0,AN)});
 // --- pillars, building shadows, buildings, ground props
 yield 0;var blds=[];BH.q(X0-60,Y0-60,X0+CH+60,Y0+CH+60,function(b){if(!b.hid)blds.push(b)});
 g.fillStyle='rgba(18,10,52,.32)';blds.forEach(function(b){if(b.ns)return;var s=b.ht*2.2+2,s2=b.ht*1.5+2,lx=wd(b.x,X0),ly=wd(b.y,Y0);g.fillRect(lx+b.w,ly+s2,Math.min(s,52),b.h);g.fillRect(lx+s,ly+b.h,b.w-s>0?b.w:b.w,Math.min(s2,36))});
 var props=[];PH.q(X0-24,Y0-24,X0+CH+24,Y0+CH+24,function(p){props.push(p)});
 props.forEach(function(p){if(p.r===0&&p.w){var lx=wd(p.x,X0),ly=wd(p.y,Y0);g.fillStyle='rgba(18,10,52,.3)';g.fillRect(Math.round(lx-2),Math.round(ly-2),14,16);g.fillStyle='#8a90a4';g.fillRect(Math.round(lx-5),Math.round(ly-5),10,10);g.fillStyle='#b4bacb';g.fillRect(Math.round(lx-5),Math.round(ly-5),10,2);g.fillStyle='#5e6478';g.fillRect(Math.round(lx-5),Math.round(ly+3),10,2)}});
 var tB=performance.now();for(var bi=0;bi<blds.length;bi++){var bb=blds[bi];drawB(g,bb,Math.round(wd(bb.x,X0)),Math.round(wd(bb.y,Y0)),AN);if(performance.now()-tB>1.2){yield 0;tB=performance.now()}}AN=AN.filter(function(o){return o.x>=0&&o.y>=0&&o.x<CH&&o.y<CH});
 yield 0;props.forEach(function(p){drawPropGround(g,p,wd(p.x,X0),wd(p.y,Y0))});
 lms.forEach(function(it){if(it.k!=='spr')return;var sp=cylSprite3(),lx=Math.round(wd(it.wx,X0)-it.ax),ly=Math.round(wd(it.wy,Y0)-it.ay);g.drawImage(sp,lx,ly);if(it.bb)AN.push({t:'led',x:lx+34,y:ly+164,w:28,h:54,s:Math.floor(hsh(it.wx|0,1,1)*6)})});
 yield 0;
 // --- top layer
 var U=null,u=null,tops=props.filter(function(p){return p.t===P_TREE||p.t===P_SAKURA||p.t===P_POLE||p.t===P_TORII||p.t===P_DECO});
 var gas=specs.filter(function(s){return s.k==='gas'||s.k==='station'});
 if(tops.length||dspans.length||gas.length||lms.length){U=mkCanvas(CH,CH);u=U.getContext('2d',{willReadFrequently:true});
  gas.forEach(function(s){var lx=wd(s.x,X0),ly=wd(s.y,Y0);if(s.k==='gas'){u.fillStyle='#d8dce6';u.fillRect(lx+6,ly+8,s.w-44,s.h-26);u.fillStyle='#e03a3a';u.fillRect(lx+6,ly+s.h-20,s.w-44,3);u.fillStyle='#9aa2b4';u.fillRect(lx+6,ly+8,s.w-44,1)}});
  WIRES.forEach(function(w){var ax=wd(w[0],X0),ay=wd(w[1],Y0);if(ax<-60||ax>CH+60||ay<-60||ay>CH+60)return;var bx=ax+wd(w[2],w[0]),by=ay+wd(w[3],w[1]);u.fillStyle='rgba(20,18,30,.75)';var L=Math.max(Math.abs(bx-ax),Math.abs(by-ay));for(var q=0;q<=L;q++){var t=q/L;u.fillRect(Math.round(ax+(bx-ax)*t),Math.round(ay+(by-ay)*t-3+Math.sin(t*Math.PI)*2),1,1)}});
  tops.forEach(function(p){if(p.t===P_DECO)decoTop(u,p,wd(p.x,X0),wd(p.y,Y0),AN);else drawPropTop(u,p,wd(p.x,X0),wd(p.y,Y0))});
  tS=performance.now();for(var li=0;li<lms.length;li++){lmTop(u,lms[li],X0,Y0,AN);if(performance.now()-tS>1.2){yield 0;tS=performance.now()}}
  yield 0;if(dspans.length)bakeDeck(u,dspans,X0,Y0);
 }
 for(i=0;i<spark.length;i+=2)spark[i+1]+=0;
 return{g:G,t:T,u:U,sp:spark,an:AN.filter(function(o){return o.x>=0&&o.y>=0&&o.x<CH&&o.y<CH}),age:FRAME,X0:X0,Y0:Y0};
}
function bakeDeck(u,dspans,X0,Y0){
 mkPrep();
 mk.lineCap='butt';
 dspans.forEach(function(s){var r=s.r,a=Math.max(0,s.i-1),b=Math.min(r.n-2,s.j);function cat(k){var h=r.h?(r.h[k]+r.h[k+1])/2:1;return h<.06?0:h>.22?2:1}
  var k=a;while(k<=b){var c=cat(k),e=k;while(e+1<=b&&cat(e+1)===c)e++;
   if(c===2){strokeRun(r,X0,Y0,r.hw*2,'#f00',k,e+1);strokeRun(r,X0,Y0,(r.hw-3)*2,'#0f0',k,e+1);strokeRun(r,X0,Y0,r.hw*2,'#00f',k,e+1,function(q){var h=r.h?r.h[q]:1;return 7*clamp((h-.22)/.6,0,1)})}
   else if(c===1)strokeRun(r,X0,Y0,r.hw*2,'#fff',k,e+1);
   k=e+1}});
 mk.lineCap='round';
 var m=mk.getImageData(0,0,MKS,MKS).data,id=u.getImageData(0,0,CH,CH),b=id.data,x,y;
 for(y=0;y<CH;y++)for(x=0;x<CH;x++){var q=((y+1)*MKS+x+1)*4,o=(y*CH+x)*4,R=m[q]>127,G=m[q+1]>127,B=m[q+2]>127,c=null,wx=X0+x,wy=Y0+y;
  if(R&&G&&B){var n0=hsh(wx,wy,2)*6-3;c=[46+n0,80+n0,134+n0]}else if(G){var n=hsh(wx,wy,2)*6-3;c=[64+n,82+n,122+n];if(hsh(wx>>3,wy>>3,7)<.05)c=[58,76,114]}else if(R){c=[186,192,208];var up=m[q-MKS*4]>127;if(!up)c=[226,232,244];if((wx+wy)%6===0)c=[146,152,170]}else if(B){c=[54,58,80];if(m[q+MKS*4+2]<128)c=[34,36,54]}
  if(c){b[o]=c[0];b[o+1]=c[1];b[o+2]=c[2];b[o+3]=255}}
 dspans.forEach(function(s){var r=s.r,s0=s.i*r.ds,s1=s.j*r.ds;for(var sv=s0;sv<=s1;sv+=.5){var h=r.hAt(sv);if(h<.08)continue;r.pt(sv,TMP);var X=wd(TMP[0],X0),Y=wd(TMP[1],Y0);if(X<-40||X>CH+40||Y<-40||Y>CH+40)continue;var nx=-TMP[3],ny=TMP[2];
  function P(xx,yy,c){xx=Math.round(xx);yy=Math.round(yy);if(xx<0||yy<0||xx>=CH||yy>=CH)return;var q=((yy+1)*MKS+xx+1)*4;if(m[q+1]<128)return;var o=(yy*CH+xx)*4;b[o]=c[0];b[o+1]=c[1];b[o+2]=c[2]}
  if(r.k==='exp'){P(X+nx,Y+ny,[232,206,96]);P(X-nx,Y-ny,[232,206,96]);P(X+nx*(r.hw-6),Y+ny*(r.hw-6),[214,226,250]);P(X-nx*(r.hw-6),Y-ny*(r.hw-6),[214,226,250]);if((sv%24)<12){var lu=r.m+r.lw;P(X+nx*lu,Y+ny*lu,[214,226,250]);P(X-nx*lu,Y-ny*lu,[214,226,250])}}
  else{if((sv%18)<9)P(X,Y,[214,226,250])}}});
 u.putImageData(id,0,0);
}
function drawSpecGround(g,s,x,y,AN){if(LANDK[s.k]){landGround(g,s,x,y,AN);return}
 var w=s.w,h=s.h,i,j;function R(a,b,c,d,col){g.fillStyle=col;g.fillRect(a,b,c,d)}
 if(s.k==='lot'||s.k==='gas'||s.k==='drift'||s.k==='yard'){R(x,y,w,h,s.k==='lot'?'#48506a':s.k==='gas'?'#7a7f92':'#6a7080');for(i=0;i<w;i+=3)for(j=0;j<h;j+=3)if(hsh(x+i+s.sd,y+j,3)<.15){R(x+i,y+j,1,1,'rgba(0,0,0,.15)')}R(x,y,w,1,'#9aa0b4');R(x,y+h-1,w,1,'#9aa0b4');R(x,y,1,h,'#9aa0b4');R(x+w-1,y,1,h,'#9aa0b4');
  if(s.k==='lot'){g.fillStyle='#c8d0e4';for(var yy=y+14;yy<y+h-30;yy+=42)for(var xx=x+12;xx<x+w-16;xx+=22){g.fillRect(xx,yy,1,30)}}
  if(s.k==='drift'){g.fillStyle='rgba(255,255,255,.5)';for(i=0;i<w;i+=8){g.fillRect(x+i,y+4,4,2);g.fillRect(x+i,y+h-6,4,2)}g.fillStyle='rgba(0,0,0,.35)';for(i=0;i<40;i++){var a=hsh(i,s.sd,1)*TAU,rr=40+hsh(i,s.sd,2)*90,cx=x+w*(i%2?.3:.72),cy=y+h/2;for(var t=0;t<20;t++){var aa=a+t*.08;g.fillRect(Math.round(cx+Math.cos(aa)*rr),Math.round(cy+Math.sin(aa)*rr),2,1)}}}
  if(s.k==='gas'){R(x+8,y+12,4,6,'#e03a3a');R(x+28,y+12,4,6,'#e03a3a');R(x+48,y+12,4,6,'#3a7ae0')}
 }
 else if(s.k==='school'){R(x,y,w,h,'#9a8a70');R(x+14,y+94,w-28,h-104,'#a8865e');g.strokeStyle='rgba(240,240,240,.7)';g.lineWidth=1;g.beginPath();g.ellipse(x+w/2,y+94+(h-104)/2,(w-44)/2,(h-120)/2,0,0,TAU);g.stroke()}
 else if(s.k==='stad'){R(x,y,w,h,'#585d72');for(i=0;i<w;i+=3)for(j=0;j<h;j+=3)if(hsh(x+i+s.sd,y+j,3)<.12)R(x+i,y+j,1,1,'rgba(0,0,0,.15)');R(x+24,y+24,w-48,h-48,'#8a8fa4');g.fillStyle='#c8d0e4';for(i=40;i<w-40;i+=16){g.fillRect(x+i,y+2,1,12);g.fillRect(x+i,y+h-14,1,12)}for(j=40;j<h-40;j+=16){g.fillRect(x+2,y+j,12,1);g.fillRect(x+w-14,y+j,12,1)}R(x,y,w,1,'#9aa0b4');R(x,y+h-1,w,1,'#9aa0b4');R(x,y,1,h,'#9aa0b4');R(x+w-1,y,1,h,'#9aa0b4')}
 else if(s.k==='temple'||s.k==='shrine'){R(x,y,w,h,'#b8a888');for(i=0;i<w;i+=8)for(j=0;j<h;j+=8)R(x+i,y+j,1,1,'#a89878');R(x+w/2-6,y+h/2,12,h/2,'#d0c4a8');R(x,y,w,2,'#6a5040');R(x,y+h-2,w,2,'#6a5040');R(x,y,2,h,'#6a5040');R(x+w-2,y,2,h,'#6a5040');R(x+w/2-8,y+h-2,16,2,'#d0c4a8')}
 else if(s.k==='tower'){R(x,y,w,h,'#8a8ea4');for(i=0;i<w;i+=8)for(j=0;j<h;j+=8)R(x+i,y+j,1,1,'#7a7e94')}
 else{R(x,y,w,h,'#868aa0')}
}
// big football stadium: two-tier stands under a roof ring, blue track, striped pitch, four floodlight masts
var STADSPR=null;
function stadSprite(w,h){if(STADSPR&&STADSPR.width===w&&STADSPR.height===h)return STADSPR;var c=mkCanvas(w,h),g=c.getContext('2d'),id=g.createImageData(w,h),D=id.data,cx=w/2,cy=h/2,rr=46;
 function hx(s){return[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)]}
 var C={out:hx('#5a5e72'),fac:hx('#8c90a4'),rib:hx('#767a8e'),roof:hx('#e4e7ee'),roof2:hx('#c6cad6'),roofE:hx('#9aa0b4'),seat:hx('#c8283a'),seat2:hx('#a01e2e'),wh:hx('#eeeef4'),wh2:hx('#c8c8d4'),aisle:hx('#3a2030'),conc:hx('#2a2c44'),trk:hx('#34558f'),trk2:hx('#e8ecf4'),g1:hx('#3f8a4c'),g2:hx('#47954f'),line:hx('#f0f4f0')};
 var B=[8,34,58,61,82,93];// facade | roof | upper stand | concourse | lower stand | track | pitch
 var GL={T:['#####','..#..','..#..','..#..','..#..','..#..','..#..'],O:['.###.','#...#','#...#','#...#','#...#','#...#','.###.'],K:['#...#','#..#.','#.#..','##...','#.#..','#..#.','#...#'],Y:['#...#','#...#','.#.#.','..#..','..#..','..#..','..#..']};
 var word='TOKYO',lw=word.length*12-2,lx0=Math.round(cx-lw/2),ly0=B[1]+5,letters={};
 for(var k=0;k<word.length;k++){var gl=GL[word[k]];for(var r=0;r<7;r++)for(var q=0;q<5;q++)if(gl[r][q]==='#')for(var a=0;a<2;a++)for(var b2=0;b2<2;b2++)letters[(ly0+r*2+a)*w+(lx0+k*12+q*2+b2)]=1}
 var pw=w-2*B[5],ph=h-2*B[5],px0=B[5],py0=B[5];
 for(var y=0;y<h;y++)for(var x=0;x<w;x++){var qx=Math.abs(x+.5-cx)-(w/2-rr),qy=Math.abs(y+.5-cy)-(h/2-rr),o=Math.hypot(Math.max(qx,0),Math.max(qy,0))+Math.min(Math.max(qx,qy),0)-rr,d=-o,col=null;
  if(d<0)continue;var an=Math.atan2(y-cy,(x-cx)*h/w),sec=((an/(2*Math.PI))*44+44)%1;
  if(d<1.2)col=C.out;else if(d<B[0])col=(x%6===0||y%6===0)?C.rib:C.fac;
  else if(d<B[1]){col=C.roof;if(sec<.06)col=C.roof2;if(d>B[1]-2)col=C.roofE}
  else if(d<B[2]||(d>=B[3]&&d<B[4])){var row=Math.floor(d)%2,cor=Math.abs(qx)<rr*0&&0;var white=letters[y*w+x]||(d>=B[3]&&Math.abs(y-cy)>h/2-B[4]-1&&Math.floor((x+4)/16)%4===0);
   col=white?(row?C.wh2:C.wh):(row?C.seat2:C.seat);if(sec<.05)col=C.aisle}
  else if(d<B[3])col=C.conc;
  else if(d<B[5]){col=C.trk;var t=d-B[4];if(t>3.5&&t<4.5||t>7.5&&t<8.5)col=C.trk2}
  else{col=(Math.floor((x-px0)/12)%2)?C.g1:C.g2}
  var i4=(y*w+x)*4;D[i4]=col[0];D[i4+1]=col[1];D[i4+2]=col[2];D[i4+3]=255}
 g.putImageData(id,0,0);
 // pitch markings
 var m=6,fx=px0+m,fy=py0+m,fw=pw-2*m,fh=ph-2*m;g.strokeStyle='rgba(240,244,240,.9)';g.lineWidth=1;g.strokeRect(fx+.5,fy+.5,fw-1,fh-1);
 g.beginPath();g.moveTo(Math.round(cx)+.5,fy);g.lineTo(Math.round(cx)+.5,fy+fh);g.stroke();g.beginPath();g.arc(Math.round(cx)+.5,Math.round(cy)+.5,Math.min(16,fh/4),0,TAU);g.stroke();
 var bw=Math.round(fw*.14),bh=Math.round(fh*.56);g.strokeRect(fx+.5,Math.round(cy-bh/2)+.5,bw,bh);g.strokeRect(fx+fw-bw-.5,Math.round(cy-bh/2)+.5,bw,bh);
 g.fillStyle='#f0f4f0';g.fillRect(fx-2,Math.round(cy-5),2,10);g.fillRect(fx+fw,Math.round(cy-5),2,10);g.fillRect(Math.round(cx)-1,Math.round(cy)-1,2,2);
 // scoreboards on the short stands
 g.fillStyle='#14101e';g.fillRect(6,Math.round(cy-14),12,28);g.fillRect(w-18,Math.round(cy-14),12,28);g.fillStyle='#38e8ff';g.fillRect(8,Math.round(cy-12),8,24);g.fillRect(w-16,Math.round(cy-12),8,24);
 STADSPR=c;return c}
function stadMasts(b){var o=12;return[[b.x-o,b.y-o],[b.x+b.w+o,b.y-o],[b.x-o,b.y+b.h+o],[b.x+b.w+o,b.y+b.h+o]]}
function drawStadium(g,b,x,y){var sp=stadSprite(Math.round(b.w),Math.round(b.h));
 g.fillStyle='rgba(12,8,40,.35)';g.fillRect(x+6,y+8,b.w,b.h);g.drawImage(sp,x,y);
 stadMasts(b).forEach(function(m){var mx=Math.round(m[0]-b.x+x),my=Math.round(m[1]-b.y+y);g.fillStyle='rgba(12,8,40,.35)';g.fillRect(mx-3,my+2,14,6);g.fillStyle='#3a3e50';g.fillRect(mx-4,my-4,9,9);g.fillStyle='#6a6e82';g.fillRect(mx-3,my-3,7,7);g.fillStyle='#1a1426';g.fillRect(mx-6,my-8,13,5);g.fillStyle='#fff6c8';g.fillRect(mx-5,my-7,11,3)})}
function drawPropGround(g,p,x,y){
 x=Math.round(x);y=Math.round(y);function R(a,b,c,d,col){g.fillStyle=col;g.fillRect(a,b,c,d)}
 switch(p.t){
  case P_TREE:case P_SAKURA:R(x-3,y+1,13,7,'rgba(18,10,52,.3)');R(x-1,y-1,3,4,'#3a2a20');break;
  case P_POLE:R(x-1,y-1,3,3,'#5a4a3a');R(x+1,y,3,2,'rgba(18,10,52,.3)');break;
  case P_CAR:var sp=VSPR[p.vt]&&VSPR[p.vt][p.c];if(!sp)break;g.save();g.translate(x,y);g.rotate(p.a);g.fillStyle='rgba(18,10,52,.35)';g.fillRect(-sp.width/2+2,-sp.height/2+2,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore();break;
  case P_TLT:R(x-1,y-1,3,3,'#2a2e3a');break;
  case P_TIRE:R(x-4,y-4,8,8,'#16161e');R(x-2,y-2,4,4,'#3a3a46');R(x-1,y-1,2,2,'#16161e');break;
  case P_BLOCK:g.save();g.translate(x,y);g.rotate(p.a||0);R(-8,-3,16,6,'#b4bacb');R(-8,1,16,2,'#7a8094');g.restore();break;
  case P_TORII:R(x-p.w/2,y-1,3,3,p.o?'#2a1a14':'#8a2020');R(x+p.w/2-3,y-1,3,3,p.o?'#2a1a14':'#8a2020');break;
  case P_DECO:decoGround(g,p,x,y);break;
  case P_TORO:R(x-2,y+1,6,4,'rgba(18,10,52,.3)');R(x-2,y-2,5,5,'#5e5e62');R(x-1,y-1,3,3,'#9a9a9e');R(x,y,1,1,'#ffe9a0');break;
 }
}
function drawPropTop(u,p,x,y){
 x=Math.round(x);y=Math.round(y);function R(a,b,c,d,col){u.fillStyle=col;u.fillRect(a,b,c,d)}
 if(p.t===P_TREE){var t=TREES[p.f?5+(hsh(p.x|0,p.y|0,1)<.5?0:1):Math.floor(hsh(p.x|0,p.y|0,1)*3)];u.drawImage(t,x-(t.width>>1),y-(t.height>>1)-3)}
 else if(p.t===P_SAKURA){var t2=TREES[3+(hsh(p.x|0,p.y|0,1)<.5?0:1)];u.drawImage(t2,x-(t2.width>>1),y-(t2.height>>1)-3)}
 else if(p.t===P_LAMP){var dx=Math.round(Math.cos(p.a)*5),dy=Math.round(Math.sin(p.a)*5);R(x,y-3,1,3,'#4a4e60');R(x+dx-1,y+dy-4,3,2,'#2a2e3a');R(x+dx,y+dy-3,1,1,'#fff4c0')}
 else if(p.t===P_POLE){R(x-3,y-4,7,1,'#4a3a2a');R(x,y-5,1,5,'#6a5a48')}
 else if(p.t===P_TORII){var w=p.w,tc=p.o?'#f0602a':'#c83030',td=p.o?'#c8481e':'#b02828';R(x-w/2-3,y-9,w+6,3,tc);R(x-w/2-3,y-9,w+6,1,'#2a1a1a');R(x-w/2,y-4,w,2,tc);R(x-w/2,y-6,3,8,td);R(x+w/2-3,y-6,3,8,td)}
}

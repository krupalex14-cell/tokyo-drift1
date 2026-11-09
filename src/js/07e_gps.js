// ===== GPS: map markers + road route with arrows =====
var WP=null,GPSG=null,GPSST=0,GARR=null,GPSNOEXP=false;
function gpsKey(x,y){return Math.round(wrap(x))+','+Math.round(wrap(y))}
function gpsNear(x,y,R,artOnly){var best=null;
 RH.q(x-R,y-R,x+R,y+R,function(sp){var r=sp.r;if(r.k!=='art'&&r.k!=='touge'&&(artOnly||r.k!=='loc'))return;
  if(r.k==='loc'){var x0=r.xs[0],y0=r.ys[0],ux=(r.xs[1]-x0)/r.len,uy=(r.ys[1]-y0)/r.len,dx=wd(x,x0),dy=wd(y,y0),t=clamp(dx*ux+dy*uy,0,r.len),px=x0+ux*t,py=y0+uy*t,d=Math.hypot(wd(x,px),wd(y,py));if(d<R&&(!best||d<best.d))best={r:r,s:t,d:d,x:wrap(px),y:wrap(py)};return}
  for(var k=sp.i;k<=sp.j;k++){var d2=Math.hypot(wd(r.xs[k],x),wd(r.ys[k],y));if(d2<R&&(!best||d2<best.d))best={r:r,s:k*r.ds,d:d2,x:wrap(r.xs[k]),y:wrap(r.ys[k])}}});
 return best}
// is there room for a car at (x,y)? houses, walls and rails, water, pillars and concrete blocks are in the way
function gpsFree(x,y){if(ptInBld(x,y)||ptInBld(x-6,y)||ptInBld(x+6,y)||ptInBld(x,y-6)||ptInBld(x,y+6))return false;var t=typeAt(x,y);if(t===6||t===4)return false;
 var hit=false;PH.q(x-14,y-14,x+14,y+14,function(p){if(hit||p.hid||p.gone||p.brk||p.t===P_CAR||p.t===P_CONE||p.t===P_TORII||typeof BRKT!=='undefined'&&BRKT[p.t])return;
  var rr=p.w&&p.r===0?5:p.t===P_BLOCK?8:p.t===P_BARR?7:(p.r||2);if(Math.hypot(wd(p.x,x),wd(p.y,y))<rr+6)hit=true});return !hit}
// can a car drive straight from (x0,y0) to (x1,y1)?
function gpsLos(x0,y0,x1,y1){var dx=wd(x1,x0),dy=wd(y1,y0),L=Math.hypot(dx,dy);if(L<2)return true;var n=Math.ceil(L/5);
 for(var k=1;k<n;k++)if(!gpsFree(x0+dx*k/n,y0+dy*k/n))return false;return true}
// from a fenced yard: walk a coarse grid (8 px) out to the nearest carriageway, then straighten the walk into a few legs
var GPSY=null;
function gpsYard(x,y){if(GPSY&&TIME-GPSY.t<3&&Math.hypot(wd(x,GPSY.x),wd(y,GPSY.y))<20)return GPSY.q;
 var G=8,R=44,N=R*2+1,par=new Int32Array(N*N).fill(-1),Q=new Int32Array(N*N),qh=0,qt=0,c0=R*N+R,found=-1,DX=[1,-1,0,0,1,1,-1,-1],DY=[0,0,1,-1,1,-1,1,-1];par[c0]=c0;Q[qt++]=c0;
 while(qh<qt&&qh<7000){var c=Q[qh++],cx=c%N,cy=(c/N)|0,wx=x+(cx-R)*G,wy=y+(cy-R)*G;
  if(c!==c0&&typeAt(wx,wy)===0){var rq=gpsNear(wx,wy,60);if(rq&&rq.d<Math.min(rq.r.hw-3,12)&&gpsLos(wx,wy,rq.x,rq.y)){found=c;break}}
  for(var k=0;k<8;k++){var nx=cx+DX[k],ny=cy+DY[k];if(nx<0||ny<0||nx>=N||ny>=N)continue;var nc=ny*N+nx;if(par[nc]!==-1)continue;
   if(k>3&&(par[cy*N+nx]===-2||par[ny*N+cx]===-2))continue;if(!gpsFree(x+(nx-R)*G,y+(ny-R)*G)){par[nc]=-2;continue}par[nc]=c;Q[qt++]=nc}}
 var q=null;if(found>=0){var cells=[];for(var c2=found;c2!==c0;c2=par[c2])cells.push([x+(c2%N-R)*G,y+(((c2/N)|0)-R)*G]);cells.reverse();
  var fx=cells[cells.length-1][0],fy=cells[cells.length-1][1];q=gpsNear(fx,fy,60);
  if(q){var via=[],px=x,py=y,i=0;while(i<cells.length-1){var j=i;while(j+1<cells.length&&gpsLos(px,py,cells[j+1][0],cells[j+1][1]))j++;if(j===i)j=i+1;px=cells[j][0];py=cells[j][1];via.push([wrap(px),wrap(py)]);i=j}
   q.via=via}}
 GPSY={t:TIME,x:x,y:y,q:q};return q}
// where the route starts: the nearest road you can actually drive to in a straight line (from a fenced yard, the nearest road
// behind a row of pillars is no use), else the way out of the yard found on the grid, else the nearest road as before
function gpsStart(x,y){var q0=gpsNear(x,y,260)||gpsNear(x,y,800);if(!q0||q0.d<q0.r.hw+6||typeof ptInBld!=='function'||!car||(car.l|0))return q0;if(gpsLos(x,y,q0.x,q0.y))return q0;
 var C=[],R=420;RH.q(x-R,y-R,x+R,y+R,function(sp){var r=sp.r;if(r.k!=='art'&&r.k!=='touge'&&r.k!=='loc')return;
  if(r.k==='loc'){var x0=r.xs[0],y0=r.ys[0],ux=(r.xs[1]-x0)/r.len,uy=(r.ys[1]-y0)/r.len;for(var t=0;t<=r.len;t+=24){var px=x0+ux*t,py=y0+uy*t,d=Math.hypot(wd(px,x),wd(py,y));if(d<R)C.push({r:r,s:t,d:d,x:wrap(px),y:wrap(py)})}return}
  for(var k=sp.i;k<=sp.j;k+=2){var d2=Math.hypot(wd(r.xs[k],x),wd(r.ys[k],y));if(d2<R)C.push({r:r,s:k*r.ds,d:d2,x:wrap(r.xs[k]),y:wrap(r.ys[k])})}});
 C.sort(function(a,b){return a.d-b.d});var seen={};
 for(var i=0,n=0;i<C.length&&n<24;i++){var c=C[i],key=Math.round(c.x/16)+','+Math.round(c.y/16);if(seen[key])continue;seen[key]=1;n++;if(c.d>q0.d*2.2+80)break;if(gpsLos(x,y,c.x,c.y))return c}
 return gpsYard(x,y)||q0}
function gpsNearUp(x,y,R){var best=null;DH.q(x-R,y-R,x+R,y+R,function(sp){var r=sp.r;if((r.k!=='exp'&&r.k!=='ramp')||!r._ch)return;
  for(var k=sp.i;k<=sp.j;k++){if(r.k==='ramp'&&r.hAt(k*r.ds)<.5)continue;var d2=Math.hypot(wd(r.xs[k],x),wd(r.ys[k],y));if(d2<R&&(!best||d2<best.d))best={r:r,s:k*r.ds,d:d2,x:wrap(r.xs[k]),y:wrap(r.ys[k]),up:1}}});return best}
function gpsEdge(a,b,c,inf){if(a===b)return null;var e1={to:b,c:c,inf:inf,f:1},e2={to:a,c:c,inf:inf,f:0};a.e.push(e1);b.e.push(e2);return[a,e1,b,e2]}
function gpsBuild(){
 var V={};function vx(k,x,y){var v=V[k];if(!v)v=V[k]={k:k,x:wrap(x),y:wrap(y),e:[]};return v}
 ARTS.forEach(function(r,i){r._gi=i;r._ch=[{s:0,v:vx('n'+r.a.id,r.a.x,r.a.y)},{s:r.len,v:vx('n'+r.b.id,r.b.x,r.b.y)}]});
 var links=[];
 LOCS.forEach(function(r){var x0=r.xs[0],y0=r.ys[0],x1=r.xs[1],y1=r.ys[1],L=r.len,ch=[{s:0,v:vx(gpsKey(x0,y0),x0,y0)},{s:L,v:vx(gpsKey(x1,y1),x1,y1)}];
  (r.jx||[]).forEach(function(j){var t=Math.abs(wd(j.x,x0))+Math.abs(wd(j.y,y0));if(t>1&&t<L-1)ch.push({s:t,v:vx(gpsKey(j.x,j.y),j.x,j.y)})});
  r._ch=ch;
  [0,1].forEach(function(e){if(!(e?r.mb:r.ma))return;var ex=e?x1:x0,ey=e?y1:y0,q=gpsNear(ex,ey,110,true);if(!q)return;var av=vx('a'+q.r._gi+':'+Math.round(q.s),q.x,q.y);q.r._ch.push({s:q.s,v:av});links.push([e?ch[1].v:ch[0].v,av,q.d+2])})});
 links.forEach(function(l){gpsEdge(l[0],l[1],l[2],{t:'l'})});
 // expressways and their ramps: the ramp foot joins the main road, the ramp top joins the expressway
 (EXPS||[]).forEach(function(E){E._ch=[]});
 (RAMPS||[]).forEach(function(R,ri){var E=R.exp,A=R.art;if(!E||!A||A._gi==null)return;var bk=0,bd=1e9;for(var k=0;k<E.n;k++){var d=Math.hypot(wd(E.xs[k],R.xs[0]),wd(E.ys[k],R.ys[0]));if(d<bd){bd=d;bk=k}}
  var se=bk*E.ds;E.pt(se,TMP);var ev=vx('x'+ri,TMP[0],TMP[1]);A.pt(R.as,TMP);var av=vx('a'+A._gi+':'+Math.round(R.as),TMP[0],TMP[1]);
  E._ch.push({s:se,v:ev});A._ch.push({s:R.as,v:av});R._ch=[{s:0,v:ev},{s:R.len,v:av}]});
 (EXPS||[]).forEach(function(E){var ch=E._ch;if(!ch.length)return;ch.sort(function(a,b){return a.s-b.s});
  for(var i=0;i<ch.length;i++){var a=ch[i],b=i<ch.length-1?ch[i+1]:{s:ch[0].s+E.len,v:ch[0].v};if(a.v===b.v&&ch.length>1)continue;gpsEdge(a.v,b.v,Math.max(1,(b.s-a.s)*.8),{t:'r',r:E,s0:a.s,s1:b.s})}
  // for joining mid-way: the chain seen across the seam
  E._ch=[{s:ch[ch.length-1].s-E.len,v:ch[ch.length-1].v}].concat(ch,[{s:ch[0].s+E.len,v:ch[0].v}])});
 (RAMPS||[]).forEach(function(R){if(R._ch)gpsEdge(R._ch[0].v,R._ch[1].v,R.len,{t:'r',r:R,s0:0,s1:R.len})});
 ARTS.concat(LOCS).forEach(function(r){var ch=r._ch;ch.sort(function(a,b){return a.s-b.s});var f=r.k==='loc'?1.18:r.k==='touge'?1.1:1;
  for(var i=0;i<ch.length-1;i++){var a=ch[i],b=ch[i+1];if(a.v===b.v)continue;gpsEdge(a.v,b.v,Math.max(1,(b.s-a.s)*f),{t:'r',r:r,s0:a.s,s1:b.s})}});
 GPSG=V}
// --- binary heap
function GHeap(){this.a=[]}
GHeap.prototype.push=function(v,p){var a=this.a;a.push([p,v]);var i=a.length-1;while(i>0){var j=(i-1)>>1;if(a[j][0]<=a[i][0])break;var t=a[i];a[i]=a[j];a[j]=t;i=j}};
GHeap.prototype.pop=function(){var a=this.a,top=a[0],last=a.pop();if(a.length){a[0]=last;var i=0,n=a.length;for(;;){var l=i*2+1,r=l+1,m=i;if(l<n&&a[l][0]<a[m][0])m=l;if(r<n&&a[r][0]<a[m][0])m=r;if(m===i)break;var t=a[i];a[i]=a[m];a[m]=t;i=m}}return top[1]};
function gpsAttach(T,q,O,oq,tmp){var r=q.r,ch=r._ch,lo=null,hi=null,f=r.k==='loc'?1.18:1;
 for(var i=0;i<ch.length;i++){if(ch[i].s<=q.s)lo=ch[i];else{hi=ch[i];break}}
 if(oq&&oq.r===r){if(lo&&oq.s>lo.s&&oq.s<=q.s)lo={s:oq.s,v:O,t:1};if(hi&&oq.s>q.s&&oq.s<hi.s)hi={s:oq.s,v:O,t:1}}
 [lo,hi].forEach(function(n){if(!n)return;if(n.t&&T.k==='G')return;var e=n===lo?gpsEdge(n.v,T,Math.max(1,(q.s-n.s)*f),{t:'r',r:r,s0:n.s,s1:q.s}):gpsEdge(T,n.v,Math.max(1,(n.s-q.s)*f),{t:'r',r:r,s0:q.s,s1:n.s});if(e)tmp.push(e)})}
function gpsRoute(){if(!WP||!car)return;if(!GPSG)gpsBuild();if(WP.up&&WP.q&&!WP.q.up){var qu=gpsNearUp(WP.x,WP.y,200);if(qu)WP.q=qu}
 var a=((car.l|0)===1?gpsNearUp(car.x,car.y,160):null)||gpsStart(car.x,car.y),b=WP.q;WP.rt=TIME;WP.ofT=0;
 var path=null;
 if(a&&b){var Sv={k:'S',x:a.x,y:a.y,e:[]},Gv={k:'G',x:b.x,y:b.y,e:[]},tmp=[];gpsAttach(Sv,a,Gv,b,tmp);gpsAttach(Gv,b,Sv,a,tmp);
  var st=++GPSST,H=new GHeap();Sv._st=st;Sv._g=0;Sv._p=null;H.push(Sv,0);var it=0;
  while(H.a.length&&it<200000){it++;var v=H.pop();if(v._done===st)continue;v._done=st;if(v===Gv)break;
   for(var i=0;i<v.e.length;i++){var e=v.e[i],w=e.to,ng=v._g+e.c;if(GPSNOEXP&&e.inf.r&&(e.inf.r.k==='exp'||e.inf.r.k==='ramp'))continue;if(w._st!==st||ng<w._g){w._st=st;w._g=ng;w._p=v;w._pe=e;H.push(w,ng+Math.hypot(wd(w.x,Gv.x),wd(w.y,Gv.y)))}}}
  if(Gv._st===st){path=[];var c=Gv;while(c&&c!==Sv){path.push(c._pe);c=c._p}path.reverse()}
  tmp.forEach(function(t){var i1=t[0].e.indexOf(t[1]);if(i1>=0)t[0].e.splice(i1,1);var i2=t[2].e.indexOf(t[3]);if(i2>=0)t[2].e.splice(i2,1)})}
 if(!path){WP.pts=null;WP.arr=null;WP.cum=null;WP.L=0;return}
 var pts=[],pl=[];function add(x,y,l){if(!pts.length){pts.push([x,y]);pl.push(l|0);return}var p=pts[pts.length-1],nx=p[0]+wd(x,p[0]),ny=p[1]+wd(y,p[1]);if(Math.abs(nx-p[0])+Math.abs(ny-p[1])<1.5)return;pts.push([nx,ny]);pl.push(l|0)}
 add(car.x,car.y,car.l);if(a&&a.via)a.via.forEach(function(v){add(v[0],v[1],0)});
 if(path)path.forEach(function(e){var inf=e.inf;if(inf.t==='l')return;
  var r=inf.r,s0=e.f?inf.s0:inf.s1,s1=e.f?inf.s1:inf.s0,dir=s1>=s0?1:-1;
  if(r.k==='loc'){var off=r.hw*.42,x0=r.xs[0],y0=r.ys[0],ux=(r.xs[1]-x0)/r.len,uy=(r.ys[1]-y0)/r.len,tx=ux*dir,ty=uy*dir;add(x0+ux*s0+ty*off,y0+uy*s0-tx*off);add(x0+ux*s1+ty*off,y0+uy*s1-tx*off);return}
  var off2=r.m+.5*(r.lw||20),lo=r.za,hi=r.len-r.zb,n=Math.max(1,Math.ceil(Math.abs(s1-s0)/10));
  for(var i=0;i<=n;i++){var s=s0+(s1-s0)*i/n;if(s<lo||s>hi)continue;var sz=zcs(r,s);r.pt(sz,TMP);var tx2=TMP[2]*dir,ty2=TMP[3]*dir;add(TMP[0]+ty2*off2,TMP[1]-tx2*off2,r.k==='exp'?1:r.k==='ramp'?(r.hAt(sz)>.5?1:0):0)}});
 add(WP.x,WP.y,WP.up?1:0);
 var cum=[0];for(var k=1;k<pts.length;k++)cum.push(cum[k-1]+Math.hypot(pts[k][0]-pts[k-1][0],pts[k][1]-pts[k-1][1]));
 var arr=[],L=cum[cum.length-1];function at(d){d=clamp(d,0,L);var j=0,lo=0,hi=pts.length-2;while(lo<hi){var m=(lo+hi+1)>>1;if(cum[m]<=d)lo=m;else hi=m-1}j=Math.max(0,lo);var sl=cum[j+1]-cum[j]||1,t=(d-cum[j])/sl,p0=pts[j],p1=pts[j+1]||p0;return[p0[0]+(p1[0]-p0[0])*t,p0[1]+(p1[1]-p0[1])*t,t<.5?pl[j]:(pl[j+1]==null?pl[j]:pl[j+1])]}
 for(var d=26;d<L-22;d+=34){var P=at(d),Pa=at(d-13),Pb=at(d+13),ok=true;
  for(var k2=arr.length-1;k2>=0&&k2>=arr.length-4;k2--){var q=arr[k2];if(Math.hypot(P[0]-q.ux,P[1]-q.uy)<24){ok=false;break}}if(!ok)continue;
  arr.push({x:wrap(P[0]),y:wrap(P[1]),ux:P[0],uy:P[1],a:Math.atan2(Pb[1]-Pa[1],Pb[0]-Pa[0]),d:d,l:P[2]|0})}
 WP.pts=pts;WP.pl=pl;WP.cum=cum;WP.arr=arr;WP.pi=0;WP.P=0;WP.L=L}
function gpsSet(x,y){x=wrap(x);y=wrap(y);
 if(WP&&Math.hypot(wd(x,WP.x),wd(y,WP.y))<260){gpsClear();toast('Метка убрана');return}
 var q=gpsNear(x,y,260)||gpsNear(x,y,520);if(!q){toast('Тут нет дороги');return}
 WP={x:q.x,y:q.y,q:q};gpsRoute();if(S.snd)try{auBell()}catch(e){}}
function gpsClear(){WP=null}
function gpsUpdate(dt){if(!WP)return;if(!WP.pts){if(TIME-(WP.rt||0)>2)gpsRoute();if(WP&&!WP.pts&&Math.hypot(wd(car.x,WP.x),wd(car.y,WP.y))<46){if(!WP.st){popup('Приехали!','mul');if(S.snd)try{auBell()}catch(e){}}WP=null}return}var pts=WP.pts,n=pts.length,best=1e9,bi=WP.pi,bt=0;
 for(var i=Math.max(0,WP.pi-4);i<Math.min(n-1,WP.pi+60);i++){var p0=pts[i],p1=pts[i+1],ex=p1[0]-p0[0],ey=p1[1]-p0[1],l2=ex*ex+ey*ey||1,dx=wd(car.x,p0[0]),dy=wd(car.y,p0[1]),t=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*t,qy=dy-ey*t,d=qx*qx+qy*qy;if(d<best){best=d;bi=i;bt=t}}
 best=Math.sqrt(best);WP.pi=bi;var segL=WP.cum[bi+1]-WP.cum[bi];WP.P=WP.cum[bi]+segL*bt;
 if(best>95){WP.ofT=(WP.ofT||0)+dt;if(WP.ofT>1.1&&TIME-WP.rt>1.6)gpsRoute()}else WP.ofT=0;
 if(Math.hypot(wd(car.x,WP.x),wd(car.y,WP.y))<46){if(!WP.st){popup('Приехали!','mul');if(S.snd)try{auBell()}catch(e){}}WP=null}}
// --- sprites
function gpsSpr(){if(GARR)return GARR;var cols=[[255,61,139],[232,84,170],[196,112,206],[156,150,232],[118,190,248],[90,224,255],[255,236,246]],N=32,Z=19,C=9,out=[];
 for(var ci=0;ci<cols.length;ci++)out.push([]);
 for(var ai=0;ai<N;ai++){var a=ai/N*TAU,ca=Math.cos(a),sa=Math.sin(a),m=[];
  for(var y=0;y<Z;y++)for(var x=0;x<Z;x++){var dx=x+.5-C-.5,dy=y+.5-C-.5,u=dx*ca+dy*sa,v=-dx*sa+dy*ca,av=Math.abs(v),k=0;
   if(av<=6.3&&Math.abs(u-(4.2-av))<=1.55)k=1;else if(av<=7.4&&Math.abs(u-(4.2-av))<=2.75)k=2;
   if(k===1&&v<0)k=3;m.push(k)}
  for(ci=0;ci<cols.length;ci++){var c=cols[ci],cv=mkCanvas(Z,Z),g=cv.getContext('2d'),id=g.createImageData(Z,Z),d=id.data;
   for(var q=0;q<Z*Z;q++){var kk=m[q];if(!kk)continue;var o=q*4;if(kk===2){d[o]=30;d[o+1]=8;d[o+2]=40;d[o+3]=190}else{var hl=kk===3?28:0;d[o]=Math.min(255,c[0]+hl);d[o+1]=Math.min(255,c[1]+hl);d[o+2]=Math.min(255,c[2]+hl);d[o+3]=255}}
   g.putImageData(id,0,0);out[ci].push(cv)}}
 GARR=out;return out}
var GPIN=null;function gpsPinSpr(){if(GPIN)return GPIN;var R=['...KKKKK...','..KPPPPPK..','.KPPLLPPPK.','KPPLWWLPPPK','KPPLWWLPPPK','KPPPLLPPPPK','KPPPPPPPPDK','.KPPPPPPDK.','.KPPPPPPDK.','..KPPPPDK..','...KPPDK...','....KPK....','.....K.....'],pal={K:'#2a0d1c',P:'#ff4d9a',L:'#ffb3d6',W:'#ffffff',D:'#c22d6e'},c=mkCanvas(11,13),g=c.getContext('2d');R.forEach(function(r,y){for(var x=0;x<r.length;x++){var p=pal[r[x]];if(p){g.fillStyle=p;g.fillRect(x,y,1,1)}}});GPIN=c;return c}
// --- world draw (ground, under cars)
function gpsDraw(lay){if(!WP||!WP.arr)return;var A=WP.arr,S6=gpsSpr(),P=WP.P;lay=lay|0;
 for(var i=0;i<A.length;i++){var o=A[i],rel=o.d-P;if(rel<-3)continue;if(rel>2400)break;if((o.l|0)!==lay)continue;var x=SX(o.x),y=SY(o.y);if(x<-12||y<-12||x>VW+12||y>VH+12)continue;
  var t=rel<170?1-rel/170:0,idx=Math.round(t*5),ph=(((o.d-TIME*170)%300)+300)%300,sp=(ph<26&&t<.5)?S6[6]:S6[idx];
  var al=rel<10?Math.max(0,(rel+3)/13):rel>1800?Math.max(0,1-(rel-1800)/600):1;if(al<=0)continue;
  var ai=((Math.round(o.a/TAU*32)%32)+32)%32;cx.globalAlpha=al;cx.drawImage(sp[ai],x-9,y-9)}
 cx.globalAlpha=1}
// --- destination pin (top pass)
function gpsPin(){if(!WP)return;var x=SX(WP.x),y=SY(WP.y);if(x<-30||y<-40||x>VW+30||y>VH+30)return;var ph=(TIME*1.1)%1,r=5+ph*16;
 cx.fillStyle='rgba(255,77,154,'+(1-ph).toFixed(2)+')';for(var k=0;k<20;k++){var a=k/20*TAU;cx.fillRect(Math.round(x+Math.cos(a)*r),Math.round(y+Math.sin(a)*r*.6),1,1)}
 cx.fillStyle='rgba(30,8,36,.35)';cx.fillRect(x-3,y-1,7,3);
 var b=Math.round(Math.abs(Math.sin(TIME*3))*4),p=gpsPinSpr();
 if(camRot()){cx.save();cx.translate(x,y);cx.rotate(Math.PI/2+(cam.a||0));cx.drawImage(p,-5,-13-b);cx.restore()}else cx.drawImage(p,x-5,y-13-b)}
// --- minimap / big map
function gpsMini(g,k,MMS,th,rot){if(!WP||!WP.pts)return;var pts=WP.pts,ct=Math.cos(th),st=Math.sin(th);
 function mp(x,y){var dx=wd(x,car.x),dy=wd(y,car.y);return[MMS/2+(dx*ct-dy*st)*k,MMS/2+(dx*st+dy*ct)*k]}
 g.lineCap='round';g.lineJoin='round';var q0=mp(car.x,car.y);
 [['rgba(30,8,36,.8)',5],['#ff4d9a',2.5]].forEach(function(stl){g.strokeStyle=stl[0];g.lineWidth=stl[1]*DPR;g.beginPath();g.moveTo(q0[0],q0[1]);var last=q0;for(var i=WP.pi+1;i<pts.length;i++){if(WP.cum[i]-WP.P>2200)break;var q=mp(pts[i][0],pts[i][1]);if(Math.abs(q[0]-last[0])+Math.abs(q[1]-last[1])>MMS)g.moveTo(q[0],q[1]);else g.lineTo(q[0],q[1]);last=q}g.stroke()});
 var w=mp(WP.x,WP.y),X=clamp(w[0],7*DPR,MMS-7*DPR),Y=clamp(w[1],7*DPR,MMS-7*DPR),p=gpsPinSpr(),sc=Math.max(1,Math.round(DPR*1.2));g.imageSmoothingEnabled=false;g.drawImage(p,Math.round(X-5.5*sc),Math.round(Y-12*sc),11*sc,13*sc)}
function gpsMap(g2,k,DPR){if(!WP)return;
 if(WP.pts){var pts=WP.pts;[['rgba(30,8,36,.85)',5],['#ff4d9a',2.5]].forEach(function(st){g2.strokeStyle=st[0];g2.lineWidth=st[1]*DPR;g2.lineCap='round';g2.lineJoin='round';g2.beginPath();var lx=null,ly=null;for(var i=WP.pi;i<pts.length;i++){var X=wrap(pts[i][0])*k,Y=wrap(pts[i][1])*k;if(lx===null||Math.abs(X-lx)>WS*k/2||Math.abs(Y-ly)>WS*k/2)g2.moveTo(X,Y);else g2.lineTo(X,Y);lx=X;ly=Y}g2.stroke()})}
 var p=gpsPinSpr(),sc=Math.max(2,Math.round(DPR*1.6));g2.imageSmoothingEnabled=false;g2.drawImage(p,Math.round(WP.x*k-5.5*sc),Math.round(WP.y*k-12.5*sc),11*sc,13*sc)}
function gpsUI(){var w=$('mapw');if(w)w.style.display=WP?'inline-block':'none';}
var _gpsSG=startGame;startGame=function(k){_gpsSG(k);if(WP)gpsRoute()};

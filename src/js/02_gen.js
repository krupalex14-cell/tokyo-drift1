// ===== WORLD GENERATION =====
var D_DOWN=0,D_SHOP=1,D_RES=2,D_TRAD=3,D_PARK=4,D_PORT=5,D_FOREST=6;
var DNAME=['Центр','Шопинг','Жилой квартал','Старый город','Парк','Порт','Перевал'];
var DSEED,DGRID,DG=128,DGS=WS/DG;
var NODES,ROADS,ARTS,LOCS,EXPS,RAMPS,PILLARS,OCC,BLD,BH,PR,PH,RH,DH,SPEC,PONDS,LJ,ZONES,PATHS,WIRES,EDITB;
var RY0=6160;
function rivY(x){var t=x/WS*TAU;return RY0+210*Math.sin(2*t+.7)+75*Math.sin(5*t+2.1)}
function rivHW(x){var t=x/WS*TAU,b=wd(x,1940)/810;return 64+20*Math.sin(3*t+1)+100*Math.exp(-b*b)}
function inRiver(x,y,m){x=wrap(x);return Math.abs(wd(y,rivY(x)))<rivHW(x)+(m||0)}
function genDistricts(){
 var L=[[2,2,1,1,2],[6,4,1,0,2],[6,2,0,0,1],[5,5,2,3,4],[2,3,2,1,2]],c=WS/5,i,j;
 DSEED=[];for(j=0;j<5;j++)for(i=0;i<5;i++)DSEED.push({x:wrap((i+.5+RR(-.18,.18))*c),y:wrap((j+.5+RR(-.18,.18))*c),t:L[j][i]});
 DGRID=new Uint8Array(DG*DG);
 for(var gy=0;gy<DG;gy++)for(var gx=0;gx<DG;gx++){var x0=(gx+.5)*DGS,y0=(gy+.5)*DGS,x=x0+170*Math.sin(y0/430),y=y0+170*Math.sin(x0/390),b=1e18,t=2;
  for(var k=0;k<25;k++){var s=DSEED[k],dx=wd(x,s.x),dy=wd(y,s.y),d=dx*dx+dy*dy;if(d<b){b=d;t=s.t}}DGRID[gy*DG+gx]=t}
}
function distr(x,y){return DGRID[(Math.floor(wrap(y)/DGS)%DG)*DG+Math.floor(wrap(x)/DGS)%DG]}
function oIdx(cx,cy){return(((cy%ON)+ON)%ON)*ON+(((cx%ON)+ON)%ON)}
function occAt(x,y){return OCC[oIdx(Math.floor(x/OC),Math.floor(y/OC))]}
function occDisc(x,y,r,v,cond){var a=Math.floor((x-r)/OC),b=Math.floor((x+r)/OC),c=Math.floor((y-r)/OC),d=Math.floor((y+r)/OC),rr=(r+4)*(r+4);for(var cy=c;cy<=d;cy++)for(var cx=a;cx<=b;cx++){var dx=cx*OC+4-x,dy=cy*OC+4-y;if(dx*dx+dy*dy<=rr){var k=oIdx(cx,cy);if(!cond||cond(OCC[k]))OCC[k]=v}}}
function occRect(x0,y0,x1,y1,v,cond){var a=Math.floor(x0/OC),b=Math.floor((x1-.01)/OC),c=Math.floor(y0/OC),d=Math.floor((y1-.01)/OC);for(var cy=c;cy<=d;cy++)for(var cx=a;cx<=b;cx++){var k=oIdx(cx,cy);if(!cond||cond(OCC[k]))OCC[k]=v}}
function indexRoad(r){var st=16;for(var i=0;i<r.n-1;i+=st){var j=Math.min(r.n-1,i+st),x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(var k=i;k<=j;k++){var x=r.xs[k],y=r.ys[k];if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}var m=r.hw+r.sw+12;var sp={r:r,i:i,j:j};(r.k==='exp'||r.k==='ramp'?DH:RH).add(sp,x0-m,y0-m,x1+m,y1+m);if(r.k==='ramp')RH.add({r:r,i:i,j:j},x0-m,y0-m,x1+m,y1+m)}}
// ---------- arterials ----------
function NAt(i,j){return NODES[(((j%10)+10)%10)*10+(((i%10)+10)%10)]}
function genArt(){
 var NA=10,SA=WS/NA,i,j;NODES=[];
 for(j=0;j<NA;j++)for(i=0;i<NA;i++){var x=wrap((i+.5)*SA+RR(-140,140)),y=(j+.5)*SA+RR(-140,140);var dy=wd(y,rivY(x)),m=rivHW(x)+250;if(Math.abs(dy)<m)y=rivY(x)+(dy<0?-m:m);y=wrap(y);
  NODES.push({id:NODES.length,i:i,j:j,x:x,y:y,ed:[],t:'x',fo:distr(x,y)===D_FOREST,ph:R01()*16})}
 var C=[];
 for(j=0;j<NA;j++)for(i=0;i<NA;i++){var a=NAt(i,j);[[1,0],[0,1]].forEach(function(v,q){var b=NAt(i+v[0],j+v[1]);if(a.fo||b.fo)return;C.push({a:a,b:b,maj:q===0?(j%3===0):(i%3===1),keep:R01()<.88})})}
 NODES.forEach(function(n){n.dg=0});C.forEach(function(c){if(c.keep){c.a.dg++;c.b.dg++}});
 C.forEach(function(c){if(!c.keep&&(c.a.dg<3||c.b.dg<3)){c.keep=true;c.a.dg++;c.b.dg++}});
 C=C.filter(function(c){return c.keep});
 C.forEach(function(c){var dx=wd(c.b.x,c.a.x),dy=wd(c.b.y,c.a.y);c.ph=Math.atan2(dy,dx);c.ta=c.ph+RR(-.3,.3);c.tb=c.ph+RR(-.3,.3)});
 for(var it=0;it<3;it++)NODES.forEach(function(n){var L=[];C.forEach(function(c){if(c.a===n)L.push({c:c,e:0,an:c.ta});if(c.b===n)L.push({c:c,e:1,an:c.tb+Math.PI})});for(var p=0;p<L.length;p++)for(var q=p+1;q<L.length;q++)if(Math.abs(angd(L[p].an,L[q].an))<1.05){[L[p],L[q]].forEach(function(o){if(o.e===0)o.c.ta=o.c.ph;else o.c.tb=o.c.ph})}});
 ROADS=[];ARTS=[];
 C.forEach(function(c){var A=c.a,B=c.b,dx=wd(B.x,A.x),dy=wd(B.y,A.y),L=Math.hypot(dx,dy),k=L*.36;
  var p=bez(A.x,A.y,A.x+Math.cos(c.ta)*k,A.y+Math.sin(c.ta)*k,A.x+dx-Math.cos(c.tb)*k,A.y+dy-Math.sin(c.tb)*k,A.x+dx,A.y+dy,4);
  var n=c.maj?3:2,d=distr(A.x+dx/2,A.y+dy/2),sw=(d===D_DOWN||d===D_SHOP)?16:d===D_PORT?8:14;
  var r=new Road(p,{k:'art',hw:4+n*24,sw:sw,nl:n,m:4,lw:24,d:d,a:A,b:B});A.ed.push({r:r,e:0,an:c.ta});B.ed.push({r:r,e:1,an:c.tb+Math.PI});ROADS.push(r);ARTS.push(r)});
}
function genTouge(){
 for(var i=0;i<10;i++){var j0=-1;for(var j=0;j<10;j++)if(NAt(i,j).fo&&!NAt(i,j-1).fo){j0=j;break}if(j0<0)continue;var j1=j0;while(NAt(i,j1+1).fo&&j1-j0<9)j1++;
  var A=NAt(i,j0-1),B=NAt(i,j1+1);if(A.fo||B.fo)continue;
  var dx=wd(B.x,A.x),dy=wd(B.y,A.y);if(dy<0)dy+=WS;var L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux,nk=Math.max(4,Math.round(L/290)),amp=RR(150,185),kx=[A.x],ky=[A.y];
  kx.push(A.x+ux*90);ky.push(A.y+uy*90);
  for(var k=1;k<nk;k++){var t=k/nk,l=((k%2)?1:-1)*amp*RR(.8,1.12);kx.push(A.x+ux*L*t+nx*l);ky.push(A.y+uy*L*t+ny*l)}
  kx.push(A.x+dx-ux*90);ky.push(A.y+dy-uy*90);kx.push(A.x+dx);ky.push(A.y+dy);
  var cm=catmull(kx,ky,24),p=resample(cm.px,cm.py,4);
  var r=new Road(p,{k:'touge',hw:26,sw:6,nl:1,m:1,lw:24,d:D_FOREST,a:A,b:B});
  var nn0=p.x.length,glx=new Float32Array(nn0),gly=new Float32Array(nn0),grx=new Float32Array(nn0),gry=new Float32Array(nn0);for(var q=0;q<nn0;q++){var q0=Math.max(0,q-1),q1=Math.min(nn0-1,q+1),tx=p.x[q1]-p.x[q0],ty=p.y[q1]-p.y[q0],tl=Math.hypot(tx,ty)||1,ox=-ty/tl*31,oy=tx/tl*31;glx[q]=p.x[q]+ox;gly[q]=p.y[q]+oy;grx[q]=p.x[q]-ox;gry[q]=p.y[q]-oy}r.gl={xs:glx,ys:gly};r.gr={xs:grx,ys:gry};
  A.ed.push({r:r,e:0,an:Math.atan2(p.y[2]-p.y[0],p.x[2]-p.x[0])});var nn=p.x.length;B.ed.push({r:r,e:1,an:Math.atan2(p.y[nn-3]-p.y[nn-1],p.x[nn-3]-p.x[nn-1])});
  ROADS.push(r);ARTS.push(r);
 }
}
function genNodes(){
 NODES.forEach(function(n){if(!n.ed.length)return;var mh=0;n.ed.forEach(function(e){mh=Math.max(mh,e.r.hw)});n.rJ=mh+10;
  if(n.ed.length===1){n.t='end';n.R=mh+32}
  else if(n.ed.length>=3&&R01()<.33){n.t='round';n.R=Math.round(mh+RR(62,92));n.Ri=Math.round(n.R-RR(62,70))}
  var a0=n.ed[0].an;n.ed.forEach(function(e){e.g=Math.abs(Math.cos(e.an-a0))>.7?0:1});
 });
 var s=DSEED[7],best=null,bd=1e18;NODES.forEach(function(n){if(n.t!=='x'||n.ed.length!==4)return;var d=Math.hypot(wd(n.x,s.x),wd(n.y,s.y));if(d<bd){bd=d;best=n}});if(best){best.t='scr';best.rJ+=4}
 ARTS.forEach(function(r){r.za=zoneLen(r.a);r.zb=zoneLen(r.b)});
}
function zoneLen(n){return n.t==='round'?n.R+6:n.t==='end'?n.R:n.rJ+2}
// ---------- expressways ----------
function genExp(){
 EXPS=[];RAMPS=[];PILLARS=[];
 var sx=0,sy=0,cx=0,cy=0,k=0;DSEED.forEach(function(s){if(s.t===D_DOWN){sx+=Math.cos(s.x/WS*TAU);sy+=Math.sin(s.x/WS*TAU);cx+=Math.cos(s.y/WS*TAU);cy+=Math.sin(s.y/WS*TAU);k++}});
 var ox=wrap(Math.atan2(sy,sx)/TAU*WS),oy=wrap(Math.atan2(cy,cx)/TAU*WS),px=[],py=[];
 for(var i=0;i<=720;i++){var t=i/720*TAU,c=Math.cos(t),s=Math.sin(t),r=1/Math.pow(Math.pow(Math.abs(c),3)+Math.pow(Math.abs(s),3),1/3);px.push(ox+1350*r*c+56*Math.sin(3*t));py.push(oy+1030*r*s+48*Math.cos(4*t))}
 px[720]=px[0];py[720]=py[0];
 var lp=new Road(resample(px,py,4),{k:'exp',hw:40,sw:0,nl:2,m:3,lw:18,closed:true,cx:ox,cy:oy,name:'Кольцо С1'});
 px=[];py=[];for(var x=0;x<=WS;x+=16){px.push(x);py.push(7600+190*Math.sin(x/WS*TAU+1.3)+60*Math.sin(x/WS*TAU*3+.4))}
 var wg=new Road(resample(px,py,4),{k:'exp',hw:40,sw:0,nl:2,m:3,lw:18,per:true,name:'Ванган'});
 EXPS.push(lp,wg);EXPS.forEach(function(e){ROADS.push(e)});
}
function genRamps(){
 function tryRamp(E,sE,N){
  E.pt(sE,TMP);var P=[TMP[0],TMP[1]],T=[TMP[2],TMP[3]],best=null,bs=1e9;
  ARTS.forEach(function(r){if(r.k!=='art')return;for(var s=r.za+70;s<r.len-r.zb-70;s+=12){r.pt(s,TMP2);var dx=wd(TMP2[0],P[0]),dy=wd(TMP2[1],P[1]),d=Math.hypot(dx,dy);if(d<380||d>680)continue;var out=(dx*N[0]+dy*N[1])/d;if(out<.4)continue;var al=Math.abs((TMP2[2]*dx+TMP2[3]*dy)/d);var sc=Math.abs(d-520)+260*al;if(sc<bs){bs=sc;best={r:r,s:s,x:P[0]+dx,y:P[1]+dy,tx:TMP2[2],ty:TMP2[3],d:d}}}});
  if(!best)return null;
  var qx=best.x,qy=best.y,nx=-best.ty,ny=best.tx,dx=qx-P[0],dy=qy-P[1];if(nx*dx+ny*dy<0){nx=-nx;ny=-ny}
  var t0x=T[0],t0y=T[1];if(t0x*dx+t0y*dy<0){t0x=-t0x;t0y=-t0y}
  var hwR=22,off=E.hw-hwR-1,p0x=P[0]+N[0]*off,p0y=P[1]+N[1]*off,k=best.d*.42;
  var p=bez(p0x,p0y,p0x+t0x*k,p0y+t0y*k,qx-nx*k*.8,qy-ny*k*.8,qx,qy,3);
  var r=new Road(p,{k:'ramp',hw:hwR,sw:0,nl:1,m:0,lw:22,exp:E,art:best.r,as:best.s,d:distr(qx,qy)}),n=r.n,h=new Float32Array(n),s0=56,sg=r.len-(best.r.hw+best.r.sw+34);
  if(sg-s0<250)return null;
  for(var i=0;i<n;i++){var s=i*r.ds;h[i]=s<s0?1:1-sstep((s-s0)/(sg-s0))}r.h=h;
  for(i=0;i<n;i+=3){var s2=i*r.ds;if(h[i]<.05||h[i]>.7)continue;var bad=false;RH.q(r.xs[i]-80,r.ys[i]-80,r.xs[i]+80,r.ys[i]+80,function(sp){if(bad||sp.r===best.r||sp.r.k==='ramp')return;for(var j=sp.i;j<=sp.j;j++){if(Math.hypot(wd(sp.r.xs[j],r.xs[i]),wd(sp.r.ys[j],r.ys[i]))<sp.r.hw+sp.r.sw+hwR+6){bad=true;return}}});if(bad)return null;
   if(inRiver(r.xs[i],r.ys[i],hwR))return null;
   var nd=false;NODES.forEach(function(nn){if(Math.hypot(wd(nn.x,r.xs[i]),wd(nn.y,r.ys[i]))<(nn.R||nn.rJ||60)+40)nd=true});if(nd)return null}
  return r;
 }
 EXPS.forEach(function(E){var fr=E.closed?[.06,.31,.56,.81]:[.08,.33,.58,.83];fr.forEach(function(f,q){for(var tt=0;tt<6;tt++){var sE=E.len*(f+tt*.012);E.pt(sE,TMP);var N;if(E.closed){var dx=wd(TMP[0],E.cx),dy=wd(TMP[1],E.cy),l=Math.hypot(dx,dy);N=[dx/l,dy/l]}else{var sg=q%2?1:-1;N=[-TMP[3]*sg,TMP[2]*sg]}var r=tryRamp(E,sE,N);if(r){RAMPS.push(r);ROADS.push(r);break}}})});
}
function genPillars(){
 EXPS.concat(RAMPS).forEach(function(r){for(var s=30;s<r.len-30;s+=72){for(var o2=0;o2<5;o2++){var ss=s+[0,12,-12,24,-24][o2];if(r.hAt(ss)<.62)continue;r.pt(ss,TMP);var x=wrap(TMP[0]),y=wrap(TMP[1]);if(inRiver(x,y,8))continue;var ok=true;for(var dy=-8;dy<=8&&ok;dy+=8)for(var dx=-8;dx<=8;dx+=8){var o=occAt(x+dx,y+dy);if(o===1||o===2){ok=false;break}}if(!ok)continue;PILLARS.push({x:x,y:y,w:12,h:12});break}}});
}
// ---------- occupancy ----------
function rasterBase(){
 OCC=new Uint8Array(ON*ON);var i,s;
 ARTS.forEach(function(r){var m=r.hw+r.sw+2;for(s=0;s<=r.len;s+=6){r.pt(s,TMP);occDisc(TMP[0],TMP[1],m,1)}});
 NODES.forEach(function(n){if(!n.ed.length)return;var sw=0;n.ed.forEach(function(e){sw=Math.max(sw,e.r.sw)});occDisc(n.x,n.y,(n.R||n.rJ)+sw+2,1)});
 for(var x=0;x<WS;x+=OC){var yc=rivY(x+4),h=rivHW(x+4)+16;for(var y=yc-h;y<=yc+h;y+=OC){var k=oIdx(Math.floor(x/OC),Math.floor(y/OC));if(OCC[k]!==1)OCC[k]=2}}
 EXPS.forEach(function(r){for(s=0;s<=r.len;s+=6){r.pt(s,TMP);occDisc(TMP[0],TMP[1],r.hw+8,7,function(v){return v===0})}});
 RAMPS.forEach(function(r){for(s=0;s<=r.len;s+=4){r.pt(s,TMP);var h=r.hAt(s);if(h>.65)occDisc(TMP[0],TMP[1],r.hw+8,7,function(v){return v===0});else if(h>.28)occDisc(TMP[0],TMP[1],r.hw+6,8,function(v){return v===0||v===7});else occDisc(TMP[0],TMP[1],r.hw+4,1,function(v){return v!==2})}});
 for(var cy=0;cy<ON;cy++)for(var cx=0;cx<ON;cx++){var k=cy*ON+cx;if(OCC[k]===0&&distr(cx*OC+4,cy*OC+4)===D_FOREST)OCC[k]=5}
}
// ---------- specials ----------
function rectFree(cx,cy,w,h,m){for(var y=cy-m;y<cy+h+m;y++)for(var x=cx-m;x<cx+w+m;x++)if(OCC[oIdx(x,y)]!==0)return false;return true}
function placeSpec(kind,w,h,ds,n,opt){
 opt=opt||{};var placed=0;
 for(var t=0;t<4000&&placed<n;t++){var cx=RI(2,ON-w-3),cy=RI(2,ON-h-3);var d=distr(cx*OC+w*4,cy*OC+h*4);if(ds.indexOf(d)<0)continue;if(!(opt.ok?rectFreeOk(cx,cy,w,h,1,opt.ok):rectFree(cx,cy,w,h,1)))continue;
  if(opt.road){var ok=0;for(var x=cx;x<cx+w;x++){if(OCC[oIdx(x,cy+h+1)]===1)ok++;if(OCC[oIdx(x,cy-2)]===1)ok++}for(var y2=cy;y2<cy+h;y2++){if(OCC[oIdx(cx-2,y2)]===1)ok++;if(OCC[oIdx(cx+w+1,y2)]===1)ok++}if(ok<w*.6)continue}
  if(opt.sep){var far=true;SPEC.forEach(function(o){if(o.k===kind&&Math.hypot(wd(o.x,cx*OC),wd(o.y,cy*OC))<opt.sep)far=false});if(!far)continue}
  for(var y=cy;y<cy+h;y++)for(var x2=cx;x2<cx+w;x2++)OCC[oIdx(x2,y)]=4;
  SPEC.push({k:kind,x:cx*OC,y:cy*OC,w:w*OC,h:h*OC,d:d,sd:RI(0,1e6)});placed++}
}
function genSpecials(){
 SPEC=[];
 placeSpec('stad',60,46,[D_SHOP,D_RES,D_DOWN],1);
 genLandSpecs();
 placeSpec('temple',40,32,[D_TRAD],2,{sep:2500});
 placeSpec('tower',36,36,[D_DOWN,D_SHOP],1);
 placeSpec('drift',74,54,[D_PORT],1);
 placeSpec('yard',50,32,[D_PORT],4,{sep:300});
 placeSpec('school',40,30,[D_RES],2,{sep:2000});
 placeSpec('station',46,16,[D_SHOP,D_DOWN],1);
 placeSpec('hosp',26,22,[D_DOWN,D_SHOP,D_RES],2,{sep:2500});
 placeSpec('church',14,17,[D_RES,D_SHOP],1);
 placeSpec('gas',16,12,[D_DOWN,D_SHOP,D_RES,D_TRAD,D_PORT],10,{road:1,sep:900});
 placeSpec('lot',20,15,[D_DOWN,D_SHOP,D_RES,D_TRAD,D_PORT],16,{sep:500});
}
// ---------- components, parks, local streets ----------
var COMP,UXa,UYa,CD;
function genComps(){
 COMP=new Int32Array(ON*ON).fill(-1);UXa=new Int32Array(ON*ON);UYa=new Int32Array(ON*ON);var Q=new Int32Array(ON*ON),comps=[];
 for(var st=0;st<ON*ON;st++){var v=OCC[st];if((v!==0&&v!==7)||COMP[st]>=0)continue;var id=comps.length,c={id:id,n:0,x0:1e9,y0:1e9,x1:-1e9,y1:-1e9,vote:[0,0,0,0,0,0,0]};comps.push(c);
  var h=0,t=0;Q[t++]=st;COMP[st]=id;UXa[st]=st%ON;UYa[st]=(st/ON)|0;
  while(h<t){var k=Q[h++],ux=UXa[k],uy=UYa[k];c.n++;if(ux<c.x0)c.x0=ux;if(ux>c.x1)c.x1=ux;if(uy<c.y0)c.y0=uy;if(uy>c.y1)c.y1=uy;if((c.n&7)===0)c.vote[distr(ux*OC,uy*OC)]++;
   for(var q=0;q<4;q++){var nx=ux+(q===0?1:q===1?-1:0),ny=uy+(q===2?1:q===3?-1:0),kk=oIdx(nx,ny),vv=OCC[kk];if((vv===0||vv===7)&&COMP[kk]<0){COMP[kk]=id;UXa[kk]=nx;UYa[kk]=ny;Q[t++]=kk}}}
  var bd=0;for(q=1;q<7;q++)if(c.vote[q]>c.vote[bd])bd=q;c.d=bd}
 CD=new Uint8Array(ON*ON).fill(255);for(var z=0;z<ON*ON;z++)if(COMP[z]>=0)CD[z]=comps[COMP[z]].d;
 return comps;
}
function inC(id,ux,uy){var k=oIdx(ux,uy);return COMP[k]===id&&UXa[k]===ux&&UYa[k]===uy}
var LPAR={0:{sp:250,hw:30,sw:12,drop:.12},1:{sp:185,hw:26,sw:10,drop:.15},2:{sp:160,hw:20,sw:0,drop:.2},3:{sp:132,hw:18,sw:0,drop:.24},5:{sp:330,hw:32,sw:6,drop:.28}};
function genLocal(comps){
 LOCS=[];LJ=[];PONDS=[];PATHS=[];
 comps.forEach(function(c){
  if(c.n<40)return;
  if(c.d===D_PARK||c.d===D_FOREST){genPark(c);return}
  var P=LPAR[c.d];if(!P)return;
  var lines=[];
  [0,1].forEach(function(ori){
   var a0=ori?c.y0:c.x0,a1=ori?c.y1:c.x1,b0=ori?c.x0:c.y0,b1=ori?c.x1:c.y1;
   for(var X=a0*OC+P.sp*RR(.5,.75);X<(a1+1)*OC-P.sp*.42;X+=P.sp*RR(.84,1.16)){
    var cc=Math.floor(X/OC),run=-1,half=Math.ceil((P.hw+P.sw)/OC)+2;
    for(var u=b0;u<=b1+1;u++){var inn=u<=b1&&(ori?inC(c.id,u,cc):inC(c.id,cc,u));
     if(inn&&run<0)run=u;
     if(!inn&&run>=0){var ra=run,rb=u-1;run=-1;if(rb-ra+1<5)continue;
      var ok=0,tot=0;for(var w=ra;w<=rb;w+=2){tot++;var l1=ori?inC(c.id,w,cc-half):inC(c.id,cc-half,w),l2=ori?inC(c.id,w,cc+half):inC(c.id,cc+half,w);if(l1&&l2)ok++}
      if(ok<tot*.55)continue;
      var e0=ori?OCC[oIdx(ra-1,cc)]:OCC[oIdx(cc,ra-1)],e1=ori?OCC[oIdx(rb+1,cc)]:OCC[oIdx(cc,rb+1)],ext=20;
      lines.push({o:ori,c:X,a:ra*OC-(e0===1?ext:0),b:(rb+1)*OC+(e1===1?ext:0),ma:e0===1,mb:e1===1,ra:ra*OC,rb:(rb+1)*OC,cr:[]})}
    }
   }
  });
  // crossings
  var V=lines.filter(function(l){return!l.o}),H=lines.filter(function(l){return l.o}),X=[];
  V.forEach(function(v){H.forEach(function(hh){if(hh.a+P.hw+6<v.c&&v.c<hh.b-P.hw-6&&v.a+P.hw+6<hh.c&&hh.c<v.b-P.hw-6){var x={x:v.c,y:hh.c,arm:[null,null,null,null]};X.push(x);v.cr.push({p:hh.c,x:x});hh.cr.push({p:v.c,x:x})}})});
  var subs=[];
  lines.forEach(function(l){l.cr.sort(function(a,b){return a.p-b.p});var pts=[{p:l.a,x:null,m:l.ma}].concat(l.cr).concat([{p:l.b,x:null,m:l.mb}]);l.subs=[];
   for(var i=0;i<pts.length-1;i++){var sb={l:l,a:pts[i].p,b:pts[i+1].p,xa:pts[i].x,xb:pts[i+1].x,ma:!!pts[i].m,mb:!!pts[i+1].m,on:R01()>=P.drop,id:subs.length};subs.push(sb);l.subs.push(sb)}});
  // connectivity: keep components touching a mouth
  for(var it=0;it<2;it++){
   subs.forEach(function(s){s.g=-1});var g=0;
   subs.forEach(function(s){if(!s.on||s.g>=0)return;var st=[s];s.g=g;var mouth=false,mem=[];while(st.length){var q=st.pop();mem.push(q);if(q.ma||q.mb)mouth=true;
     var nb=[];q.l.subs.forEach(function(o,k){if(o===q){if(k>0)nb.push(q.l.subs[k-1]);if(k<q.l.subs.length-1)nb.push(q.l.subs[k+1])}});
     [q.xa,q.xb].forEach(function(xx){if(!xx)return;subs.forEach(function(o){if(o.xa===xx||o.xb===xx)nb.push(o)})});
     nb.forEach(function(o){if(o.on&&o.g<0){o.g=g;st.push(o)}})}
    if(!mouth)mem.forEach(function(q){q.on=false});g++});
  }
  // merge into pieces
  lines.forEach(function(l){var cur=null;l.subs.forEach(function(s){if(s.on){if(!cur){cur={l:l,a:s.a,b:s.b,ma:s.ma,mb:s.mb,xs:[]};}else{cur.b=s.b;cur.mb=s.mb}if(s.xa)cur.xs.push(s.xa);if(s.xb)cur.xs.push(s.xb)}else if(cur){mkLoc(cur,P,c.d);cur=null}});if(cur)mkLoc(cur,P,c.d)});
  // junction arms
  X.forEach(function(x){var n=0,hz=0,vt=0;subs.forEach(function(s){if(s.on&&(s.xa===x||s.xb===x)){n++;if(s.l.o)hz++;else vt++}});if(n>=3||(n===2&&hz===1&&vt===1)){LJ.push({x:x.x,y:x.y,r:P.hw+3,hw:P.hw,sw:P.sw,d:c.d,n:n,cw:(c.d===D_DOWN||c.d===D_SHOP)})}});
 });
 LOCS.forEach(function(r){var m=r.hw+r.sw+2;var x0=Math.min(r.xs[0],r.xs[1])-m,x1=Math.max(r.xs[0],r.xs[1])+m,y0=Math.min(r.ys[0],r.ys[1])-m,y1=Math.max(r.ys[0],r.ys[1])+m;occRect(x0,y0,x1,y1,1,function(v){return v!==2})});
 LJ.forEach(function(j){occDisc(j.x,j.y,j.r+j.sw+2,1,function(v){return v!==2})});
}
function mkLoc(pc,P,d){
 var l=pc.l,ax,ay,bx,by;if(l.o){ax=pc.a;bx=pc.b;ay=by=l.c}else{ay=pc.a;by=pc.b;ax=bx=l.c}
 var r=new Road({x:new Float32Array([ax,bx]),y:new Float32Array([ay,by]),ds:Math.hypot(bx-ax,by-ay)},{k:'loc',hw:P.hw,sw:P.sw,nl:1,m:0,d:d,o:l.o,ma:pc.ma,mb:pc.mb,ra:l.ra,rb:l.rb,jx:pc.xs});
 if(r.len<20)return;LOCS.push(r);ROADS.push(r);
 if(pc.ma)LJ.push({x:l.o?l.ra-13:l.c,y:l.o?l.c:l.ra-13,r:P.hw+5,hw:P.hw,sw:P.sw,d:d,mouth:1,o:l.o,dir:-1});
 if(pc.mb)LJ.push({x:l.o?l.rb+13:l.c,y:l.o?l.c:l.rb+13,r:P.hw+5,hw:P.hw,sw:P.sw,d:d,mouth:1,o:l.o,dir:1});
}
function genPark(c){
 var cells=[],fv=c.d===D_FOREST?5:3;for(var uy=c.y0;uy<=c.y1;uy++)for(var ux=c.x0;ux<=c.x1;ux++)if(inC(c.id,ux,uy)){var k=oIdx(ux,uy);if(OCC[k]===0)OCC[k]=fv;cells.push(ux,uy)}
 if(c.d===D_FOREST)return;
 if(c.n>500){
  for(var t=0;t<60;t++){var i=RI(0,cells.length/2-1)*2,px=cells[i]*OC,py=cells[i+1]*OC,rx=RR(60,125),ry=RR(42,82),ok=true;for(var a=0;a<16&&ok;a++){var x=px+Math.cos(a/16*TAU)*(rx+26),y=py+Math.sin(a/16*TAU)*(ry+26),k=oIdx(Math.floor(x/OC),Math.floor(y/OC));if(OCC[k]!==3||COMP[k]!==c.id)ok=false}if(ok){PONDS.push({x:wrap(px),y:wrap(py),rx:rx,ry:ry});occDisc(px,py,Math.max(rx,ry),2,function(v){return v===3});break}}
  for(var q=0;q<2;q++){var a1=RI(0,cells.length/2-1)*2,b1=RI(0,cells.length/2-1)*2;var x0=cells[a1]*OC,y0=cells[a1+1]*OC,x1=cells[b1]*OC,y1=cells[b1+1]*OC;if(Math.hypot(x1-x0,y1-y0)<200)continue;var mx=(x0+x1)/2+RR(-120,120),my=(y0+y1)/2+RR(-120,120);var cm=catmull([x0,mx,x1],[y0,my,y1],30),p=resample(cm.px,cm.py,4);var r=new Road(p,{k:'path',hw:0,sw:9,nl:0,m:0,d:D_PARK});var bad=false;for(var s=0;s<r.len;s+=8){r.pt(s,TMP);var o=occAt(TMP[0],TMP[1]);if(o!==3&&o!==2){bad=true;break}}if(!bad){PATHS.push(r);ROADS.push(r)}}
  if(R01()<.8){for(var tt=0;tt<200;tt++){var j=RI(0,cells.length/2-1)*2;if(rectFree2(cells[j],cells[j+1],16,13,3)){for(var yy=0;yy<13;yy++)for(var xx=0;xx<16;xx++)OCC[oIdx(cells[j]+xx,cells[j+1]+yy)]=4;SPEC.push({k:'shrine',x:cells[j]*OC,y:cells[j+1]*OC,w:128,h:104,d:D_PARK,sd:RI(0,1e6)});break}}}
 }
}
function rectFree2(cx,cy,w,h,v){for(var y=cy-1;y<cy+h+1;y++)for(var x=cx-1;x<cx+w+1;x++)if(OCC[oIdx(x,y)]!==v)return false;return true}
// ---------- buildings ----------
function addB(b){BLD.push(b);BH.add(b,b.x,b.y,b.x+b.w,b.y+b.h)}
function genBuildings(){
 BLD=[];BH=new Hash();
 var used=new Uint8Array(ON*ON);
 SPEC.forEach(function(s){specBuild(s)});
 for(var cy=0;cy<ON;cy++)for(var cx=0;cx<ON;cx++){var k=cy*ON+cx;if(OCC[k]!==0||used[k])continue;
  var d=CD[k]!==255?CD[k]:distr(cx*OC,cy*OC),tw,th,st,ht;
  if(d===D_DOWN){tw=RI(11,22);th=RI(10,20)}else if(d===D_SHOP){tw=RI(6,12);th=RI(5,10)}else if(d===D_RES){if(R01()<.28){tw=RI(8,12);th=RI(6,9)}else{tw=RI(5,8);th=RI(5,7)}}else if(d===D_TRAD){tw=RI(4,7);th=RI(4,6)}else if(d===D_PORT){tw=RI(16,32);th=RI(12,22)}else{tw=RI(3,5);th=RI(3,5)}
  var w=0;while(w<tw&&cx+w<ON&&OCC[k+w]===0&&!used[k+w])w++;
  var h=1;while(h<th&&cy+h<ON){var ok=true;for(var q=0;q<w;q++){var kk=(cy+h)*ON+cx+q;if(OCC[kk]!==0||used[kk]){ok=false;break}}if(!ok)break;h++}
  for(var yy=0;yy<h;yy++)for(var xx=0;xx<w;xx++)used[(cy+yy)*ON+cx+xx]=1;
  var X=cx*OC,Y=cy*OC,W=w*OC,Hh=h*OC,r=R01();
  if(w<3||h<3)continue;
  if(d===D_DOWN){st=r<.45?0:r<.85?1:2;ht=st===0?RI(12,20):RI(8,13)}
  else if(d===D_SHOP){st=(w*h<=48&&r<.13)?7:r<.68?2:r<.86?1:3;ht=st===7?2:RI(4,8)}
  else if(d===D_RES){if(w>=8&&h>=6){st=3;ht=RI(4,7)}else{st=4;ht=2}}
  else if(d===D_TRAD){st=r<.85?5:4;ht=2}
  else if(d===D_PORT){st=6;ht=RI(3,5)}
  else{st=18;ht=1}
  var ins=(st===4||st===5)?4:1;
  addB({x:X+ins,y:Y+ins,w:W-ins*2,h:Hh-ins*2,st:st,ht:ht,d:d,sd:RI(0,1e6),gd:st===4?1:0});
 }
}
function specBuild(s){
 var x=s.x,y=s.y,w=s.w,h=s.h;
 if(s.k==='stad'){addB({x:x+30,y:y+30,w:w-60,h:h-60,st:14,ht:9,d:s.d,sd:s.sd})}
 else if(s.k==='temple'){addB({x:x+w/2-78,y:y+40,w:156,h:116,st:8,ht:6,d:s.d,sd:s.sd});addB({x:x+18,y:y+24,w:52,h:42,st:5,ht:2,d:s.d,sd:s.sd+1});addB({x:x+w-70,y:y+24,w:52,h:42,st:5,ht:2,d:s.d,sd:s.sd+2})}
 else if(s.k==='tower'){landBuild(s)}
 else if(s.k==='school'){addB({x:x+10,y:y+10,w:w-20,h:76,st:10,ht:5,d:s.d,sd:s.sd})}
 else if(s.k==='station'){addB({x:x+8,y:y+12,w:w-16,h:h-30,st:13,ht:5,d:s.d,sd:s.sd})}
 else if(s.k==='hosp'){addB({x:x+10,y:y+10,w:w-20,h:h-34,st:9,ht:9,d:s.d,sd:s.sd})}
 else if(s.k==='church'){addB({x:x+12,y:y+12,w:w-24,h:h-24,st:11,ht:6,d:s.d,sd:s.sd})}
 else if(s.k==='gas'){addB({x:x+w-42,y:y+8,w:34,h:30,st:7,ht:2,d:s.d,sd:s.sd})}
 else if(s.k==='shrine'){addB({x:x+w/2-30,y:y+14,w:60,h:48,st:12,ht:3,d:s.d,sd:s.sd})}
 else if(s.k!=='yard')landBuild(s);
 if(s.k==='yard'){for(var yy=y+18;yy<y+h-34;yy+=38)for(var xx=x+16;xx<x+w-56;xx+=48){if(R01()<.82)addB({x:xx,y:yy,w:42,h:15,st:16,ht:R01()<.5?2:3,d:s.d,sd:RI(0,1e6)});if(R01()<.82)addB({x:xx,y:yy+16,w:42,h:15,st:16,ht:R01()<.5?2:3,d:s.d,sd:RI(0,1e6)})}}
}
// ---------- props ----------
var P_TREE=1,P_LAMP=2,P_POLE=3,P_VEND=4,P_CONE=5,P_BARR=6,P_CAR=7,P_TLT=8,P_TORII=9,P_BENCH=10,P_BLOCK=11,P_TIRE=12,P_BUSH=13,P_SAKURA=14,P_MAIL=15,P_TRASH=16,P_BIKE=17,P_SIGN=18,P_PLANT=19,P_HYD=20;
function addP(p){p.r=p.r||PRR[p.t]||2;PR.push(p);var m=p.t===P_CAR?20:Math.max(p.r,12);PH.add(p,p.x-m,p.y-m,p.x+m,p.y+m);return p}
var PRR={1:2.5,2:1.5,3:2,4:3,5:3,6:6,7:0,8:2,9:2.5,10:0,11:7,12:5,13:0,14:2.5,15:2.5,16:4,17:3,18:2.5,19:3,20:2,21:1.5,22:2.5};
function onLocalAsph(x,y,mar){var hit=false;RH.q(x-30,y-30,x+30,y+30,function(sp){var r=sp.r;if(hit||r.k==='path')return;if(r.k==='loc'){var lx=wd(x,r.xs[0]),ly=wd(y,r.ys[0]),L=r.len,ux=(r.xs[1]-r.xs[0])/L,uy=(r.ys[1]-r.ys[0])/L,s=lx*ux+ly*uy,u=-lx*uy+ly*ux;if(s>-mar&&s<L+mar&&Math.abs(u)<r.hw+mar)hit=true}});return hit}
function genProps(){
 PR=[];PH=new Hash();WIRES=[];
 ARTS.forEach(function(r){if(r.k!=='art')return;var tr=r.d===D_DOWN||r.d===D_SHOP||r.d===D_PARK||r.d===D_RES;for(var s=r.za+34;s<r.len-r.zb-34;s+=56){r.pt(s,TMP);for(var sg=-1;sg<=1;sg+=2){var u=r.hw+r.sw*.55,x=TMP[0]-TMP[3]*u*sg,y=TMP[1]+TMP[2]*u*sg;x=wrap(x);y=wrap(y);if(onLocalAsph(x,y,10)||inRiver(x,y,4))continue;var q=Math.round(s/56);if(tr&&q%2===0)addP({t:r.d===D_SHOP&&hsh(q,sg,3)<.35?P_SAKURA:P_TREE,x:x,y:y});else if(q%2===1&&((q>>1)+(sg>0?1:0))%2===0)addP({t:P_LAMP,x:x,y:y,a:Math.atan2(TMP[3],TMP[2])+(sg>0?Math.PI/2:-Math.PI/2)})}}});
 NODES.forEach(function(n){if(n.t!=='x'&&n.t!=='scr')return;n.tl=[];n.ed.forEach(function(e){var r=e.r,s=e.e===0?r.za+16:r.len-r.zb-16;r.pt(s,TMP);var sg=e.e===0?1:-1,u=r.hw+3,x=wrap(TMP[0]-TMP[3]*u*sg),y=wrap(TMP[1]+TMP[2]*u*sg);n.tl.push(addP({t:P_TLT,x:x,y:y,g:e.g,n:n,a:e.an}))})});
 LOCS.forEach(function(r){var res=r.d===D_RES||r.d===D_TRAD;var ux=(r.xs[1]-r.xs[0])/r.len,uy=(r.ys[1]-r.ys[0])/r.len,prev=null;
  for(var s=30;s<r.len-30;s+=res?54:48){var nearJ=false;r.jx.forEach(function(j){if(Math.hypot(wd(j.x,r.xs[0]+ux*s),wd(j.y,r.ys[0]+uy*s))<r.hw+36)nearJ=true});if(nearJ){prev=null;continue}
   var bx=r.xs[0]+ux*s,by=r.ys[0]+uy*s;
   if(res){var u=r.hw-2,x=wrap(bx-uy*u),y=wrap(by+ux*u);if(inRiver(x,y,4)){prev=null;continue}var p=addP({t:P_POLE,x:x,y:y});if(prev)WIRES.push([prev.x,prev.y,p.x,p.y]);prev=p}
   else if(r.d!==D_PORT||R01()<.5){if(R01()<.24){var sg=R01()<.5?1:-1,u2=(r.hw-9)*sg,x2=wrap(bx-uy*u2),y2=wrap(by+ux*u2);var vt0=[0,1,2,5,6,9][RI(0,5)];addP({t:P_CAR,x:x2,y:y2,a:Math.atan2(uy,ux)+(sg>0?0:Math.PI),vt:vt0,c:RI(0,5),hx:VTY[vt0].hx,hy:VTY[vt0].hy})}}
  }});
 for(var cy=0;cy<ON;cy++)for(var cx=0;cx<ON;cx++){var v=OCC[cy*ON+cx];
  if(v===5){if(hsh(cx,cy,9)<.3){var x=cx*OC+hsh(cx,cy,10)*OC,y=cy*OC+hsh(cx,cy,11)*OC;if(!nearRoadCell(cx,cy,2))addP({t:P_TREE,x:x,y:y,f:1})}}
  else if(v===3){if(hsh(cx,cy,12)<.12){var x3=cx*OC+hsh(cx,cy,13)*OC,y3=cy*OC+hsh(cx,cy,14)*OC;if(!nearPath(x3,y3))addP({t:hsh(cx,cy,15)<.18?P_SAKURA:P_TREE,x:x3,y:y3})}}
  else if(v===0&&hsh(cx,cy,16)<.025){var d=distr(cx*OC,cy*OC);var vc=RI(0,3);if((d===D_SHOP||d===D_DOWN||d===D_RES)&&!inBldR(cx*OC-4,cy*OC-6,cx*OC+12,cy*OC+14)){addP({t:P_VEND,x:cx*OC+4,y:cy*OC+4,c:vc});if(OCC[oIdx(cx+1,cy)]===0&&OCC[oIdx(cx+2,cy)]===0&&!inBldR(cx*OC+8,cy*OC-2,cx*OC+22,cy*OC+12)&&hsh(cx,cy,17)<.45)addP({t:P_TRASH,x:cx*OC+15,y:cy*OC+5,c:Math.floor(hsh(cx,cy,18)*4)})}}
 }
 SPEC.forEach(function(s){
  if(s.k==='drift'){for(var i=0;i<16;i++){var a=i/16*TAU;addP({t:P_CONE,x:s.x+s.w*.3+Math.cos(a)*78,y:s.y+s.h/2+Math.sin(a)*78});addP({t:P_CONE,x:s.x+s.w*.72+Math.cos(a)*78,y:s.y+s.h/2+Math.sin(a)*78})}for(i=0;i<10;i++){addP({t:P_TIRE,x:s.x+10+i*10,y:s.y+10});addP({t:P_TIRE,x:s.x+s.w-10-i*10,y:s.y+s.h-10})}}
  if(s.k==='lot'){for(var yy=s.y+14;yy<s.y+s.h-30;yy+=42)for(var xx=s.x+12;xx<s.x+s.w-18;xx+=22)if(R01()<.5){var vt1=[0,1,2,5,9][RI(0,4)];addP({t:P_CAR,x:xx+9,y:yy+15,a:R01()<.5?Math.PI/2:-Math.PI/2,vt:vt1,c:RI(0,5),hx:VTY[vt1].hx,hy:VTY[vt1].hy})}}
  if(s.k==='shrine'){addP({t:P_TORII,x:s.x+s.w/2,y:s.y+s.h-12,w:26})}
  if(s.k==='temple'){addP({t:P_TORII,x:s.x+s.w/2,y:s.y+s.h-14,w:34});for(i=0;i<6;i++){addP({t:P_SAKURA,x:s.x+14+i*12,y:s.y+s.h-30});addP({t:P_SAKURA,x:s.x+s.w-14-i*12,y:s.y+s.h-30})}}
  
  landProps(s);
 });
 // breakable street furniture (deterministic, keeps the RNG stream intact)
 ARTS.forEach(function(r,ri){if(r.k!=='art'||r.sw<8)return;var dd=r.d;for(var s=r.za+62;s<r.len-r.zb-40;s+=56){for(var sg=-1;sg<=1;sg+=2){var h=hsh(ri,Math.round(s),sg+5),t=0;if(h<.07)t=P_MAIL;else if(h<.12)t=P_HYD;else if(h<.18&&(dd===D_DOWN||dd===D_SHOP))t=P_PLANT;else if(h<.22&&dd!==D_PORT)t=P_TRASH;if(!t)continue;r.pt(s,TMP);var u=r.hw+r.sw*.55,x=wrap(TMP[0]-TMP[3]*u*sg),y=wrap(TMP[1]+TMP[2]*u*sg);if(onLocalAsph(x,y,10)||inRiver(x,y,4))continue;addP({t:t,x:x,y:y,c:Math.floor(hsh(ri,Math.round(s),9)*4),a:Math.atan2(TMP[3],TMP[2])})}}});
 LOCS.forEach(function(r,ri){if(!(r.sw>0))return;var ux=(r.xs[1]-r.xs[0])/r.len,uy=(r.ys[1]-r.ys[0])/r.len,an=Math.atan2(uy,ux),s0=r.ma?50:24,s1=r.len-(r.mb?50:24);
  for(var s=s0;s<s1;s+=20){var nearJ=false;r.jx.forEach(function(j){if(Math.hypot(wd(j.x,r.xs[0]+ux*s),wd(j.y,r.ys[0]+uy*s))<r.hw+r.sw+14)nearJ=true});if(nearJ)continue;
   for(var sg=-1;sg<=1;sg+=2){var h=hsh(ri+7000,s,sg+11),bx=r.xs[0]+ux*s,by=r.ys[0]+uy*s;
    if(h<.06&&r.d!==D_PORT){var nb=3+Math.floor(hsh(ri,s,3)*3);for(var b=0;b<nb;b++){var ss=s+b*6;if(ss>s1)break;var u=r.hw+1.8;addP({t:P_BIKE,x:wrap(r.xs[0]+ux*ss-uy*u*sg),y:wrap(r.ys[0]+uy*ss+ux*u*sg),a:an,c:Math.floor(hsh(ri,ss,4)*6)})}continue}
    var t=h<.1?P_SIGN:h<.13?P_PLANT:h<.145?P_MAIL:0;if(!t||(r.d===D_PORT&&t!==P_MAIL))continue;var u2=r.hw+r.sw*.9;addP({t:t,x:wrap(bx-uy*u2*sg),y:wrap(by+ux*u2*sg),a:an,c:Math.floor(hsh(ri,s,5)*4)})}}});
 for(var i=0;i<LOCS.length;i+=37){var r=LOCS[i];if(r.d===D_RES||r.d===D_TRAD||r.len<160)continue;var s0=r.len*.4,ux=(r.xs[1]-r.xs[0])/r.len,uy=(r.ys[1]-r.ys[0])/r.len;for(var k=0;k<6;k++){var s=s0+k*14,x=wrap(r.xs[0]+ux*s-uy*(r.hw-9)),y=wrap(r.ys[0]+uy*s+ux*(r.hw-9));addP({t:P_CONE,x:x,y:y})}addP({t:P_BARR,x:wrap(r.xs[0]+ux*(s0+90)-uy*(r.hw-10)),y:wrap(r.ys[0]+uy*(s0+90)+ux*(r.hw-10)),a:Math.atan2(uy,ux)})}
}
function inBldR(x0,y0,x1,y1){var h=false;BH.q(x0,y0,x1,y1,function(B){if(h)return;if(wd(x1,B.x)>0&&wd(B.x+B.w,x0)>0&&wd(y1,B.y)>0&&wd(B.y+B.h,y0)>0)h=true});return h}
function nearRoadCell(cx,cy,m){for(var y=-m;y<=m;y++)for(var x=-m;x<=m;x++){var v=OCC[oIdx(cx+x,cy+y)];if(v===1||v===2||v===7||v===8)return true}return false}
function nearPath(x,y){var h=false;PATHS.forEach(function(r){if(h)return;for(var s=0;s<r.len;s+=8){r.pt(s,TMP);if(Math.abs(wd(TMP[0],x))<12&&Math.abs(wd(TMP[1],y))<12){h=true;return}}});if(!h)PONDS.forEach(function(p){var dx=wd(x,p.x)/(p.rx+10),dy=wd(y,p.y)/(p.ry+10);if(dx*dx+dy*dy<1)h=true});return h}
// ---------- zones ----------
function genZones(){
 ZONES=[];
 var rs=NODES.filter(function(n){return n.t==='round'}).sort(function(a,b){return b.R-a.R});
 var nm=['Кольцо Синдзю','Кольцо Минато','Кольцо Нака'];
 rs.slice(0,3).forEach(function(n,i){ZONES.push({id:'r'+i,k:'area',name:nm[i],x:n.x,y:n.y,r:n.R+70,l:0,tg:[2500,7000,14000],node:n,T:45})});
 SPEC.forEach(function(s){if(s.k==='drift')ZONES.push({id:'dock',k:'area',name:'Доки Харуми',x:s.x+s.w/2,y:s.y+s.h/2,r:Math.max(s.w,s.h)/2+30,l:0,tg:[4000,11000,22000],spec:s,T:45});if(s.k==='stad')ZONES.push({id:'stad',k:'area',name:'Стадион',x:s.x+s.w/2,y:s.y+s.h/2,r:Math.max(s.w,s.h)/2+50,l:0,tg:[3000,9000,18000],spec:s,T:45})});
 var sc=NODES.filter(function(n){return n.t==='scr'})[0];if(sc)ZONES.push({id:'scr',k:'area',name:'Скрамбл',x:sc.x,y:sc.y,r:sc.rJ+90,l:0,tg:[2000,6000,12000],node:sc,T:45});
 function course(id,name,r,s0,s1,l){r.pt(((s0%r.len)+r.len)%r.len,TMP);var L=s1-s0;ZONES.push({id:id,k:'course',name:name,road:r,s0:s0,s1:s1,x:wrap(TMP[0]),y:wrap(TMP[1]),r:170,l:l,tg:[Math.round(L*.8/100)*100,Math.round(L*2.2/100)*100,Math.round(L*4.2/100)*100],T:Math.round(L/75)})}
 ARTS.filter(function(r){return r.k==='touge'}).slice(0,2).forEach(function(r,i){var L=Math.min(3600,r.len-r.za-r.zb-260),s0=Math.max(r.za+130,Math.min(r.len-r.zb-130-L,r.len*(.3+i*.15)-L/2));course('tg'+i,i?'Перевал Кумо':'Перевал Акаги',r,s0,s0+L,0)});
 if(EXPS[0])course('c1','Эстакада С1',EXPS[0],EXPS[0].len*.18,EXPS[0].len*.18+3600,1);
 if(EXPS[1])course('wg','Ванган',EXPS[1],EXPS[1].len*.4,EXPS[1].len*.4+4200,1);
}
// ---------- index ----------
function genIndex(){
 RH=new Hash();DH=new Hash();
 ROADS.forEach(indexRoad);
}
function genAll(seed,cb){
 srand(seed||20261105);
 var steps=[genDistricts,genArt,genTouge,genNodes,genExp,function(){RH=new Hash();DH=new Hash();ARTS.forEach(indexRoad)},genRamps,rasterBase,genSpecials,
  function(){var c=genComps();genLocal(c)},
  function(){ROADS.forEach(function(r,i){r.id=i})},genIndex,genPillars,genBuildings,genProps,genLand2,genZones,function(){EDITB=[]}];
 var i=0;function nx(){if(i>=steps.length){cb&&cb(1);return}steps[i++]();if(cb)cb(i/steps.length,nx);else nx()}
 nx();
}

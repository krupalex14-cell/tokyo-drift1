// ===== TRAFFIC & PEDESTRIANS =====
var AI=[],TIME=0,VMASS=[.7,1,.9,1,1.1,1.4,.9,2.6,3.6,1.3];
function lightState(n,g){var t=(TIME+n.ph)%(n.t==='scr'?26:18);if(g===0)return t<7?0:t<8.5?1:2;return(t>=9&&t<16)?0:(t>=16&&t<17.5)?1:2}
function laneU(r,dir,k){return -dir*(r.m+(k+.5)*(r.lw||20))}
function aiEdgeEnd(a){var r=a.r;if(r.k==='exp')return null;return a.dir>0?r.len-(r.zb||0)-1:(r.za||0)+1}
function aiPick(){var s=0,i;for(i=0;i<VTY.length;i++)s+=VTY[i].w;var q=Math.random()*s;for(i=0;i<VTY.length;i++){q-=VTY[i].w;if(q<=0)return i}return 1}
function aiMake(r,s,dir,k,l){var vt=aiPick();if(l&&(vt===6||vt===8))vt=1;var V=VTY[vt];var a={vt:vt,c:Math.floor(Math.random()*V.cols.length),hx:V.hx,hy:V.hy,L:V.L,r:r,s:s,dir:dir,k:k,kc:k,ov:0,l:l,md:0,v:0,vm:V.v*(.88+Math.random()*.24)*(l?1.45:1),hold:0,stk:0,gh:0,x:0,y:0,a:0,m:VMASS[vt],vx:0,vy:0,w:0,phy:false,rest:0,dmg:0,bk:0};aiPlace(a);a.v=a.vm*.6;return a}
function aiPlace(a){
 if(a.md===0){var r=a.r,s=a.s;if(r.closed||r.per){s=((s%r.len)+r.len)%r.len;a.s=s}r.pt(s,TMP);var u=laneU(r,a.dir,a.kc!=null?a.kc:a.k);a.x=wrap(TMP[0]-TMP[3]*u);a.y=wrap(TMP[1]+TMP[2]*u);var lat=a.lv||0;a.a=Math.atan2(TMP[3]*a.dir*Math.max(a.v,30)+TMP[2]*lat,TMP[2]*a.dir*Math.max(a.v,30)-TMP[3]*lat)}
 else{var p=a.p,c=p.c,i=a.pi;while(i<c.length-2&&c[i+1]<a.ps)i++;a.pi=i;var t=(a.ps-c[i])/((c[i+1]-c[i])||1);t=clamp(t,0,1);var dx=p.x[i+1]-p.x[i],dy=p.y[i+1]-p.y[i];a.x=wrap(p.ox+p.x[i]+dx*t);a.y=wrap(p.oy+p.y[i]+dy*t);if(dx||dy)a.a=Math.atan2(dy,dx)}
}
function aiPickExit(a,N){var arrE=a.dir>0?1:0,r=a.r;var opts=N.ed.filter(function(e){return!(e.r===r&&e.e===arrE)});if(!opts.length)opts=N.ed.slice();var tw=0,ws=opts.map(function(e){var w=.6+1.6*Math.max(0,Math.cos(angd(e.an,a.a)));tw+=w;return w}),q=Math.random()*tw;for(var i=0;i<opts.length;i++){q-=ws[i];if(q<=0)return opts[i]}return opts[0]}
function canEnter(a,N){var key=a.r.id+'_'+a.dir;if(!a.pre)a.pre=aiPickExit(a,N);for(var i=0;i<AI.length;i++){var b=AI[i];if(b===a||b.md!==1||b.jn!==N)continue;if(b.jk===key){if(N.t!=='round'&&b.je!==a.pre&&b.ps<b.p.len*.75)return false;continue}if(N.t!=='round')return false;if(Math.abs(wd(b.x,a.x))<60&&Math.abs(wd(b.y,a.y))<60)return false}return true}
function aiJunction(a){
 var r=a.r,arrE=a.dir>0?1:0,N=arrE?r.b:r.a;a.jn=N;a.jk=r.id+'_'+a.dir;
 var e=a.pre||aiPickExit(a,N);a.pre=null;
 var r2=e.r,dir2=e.e===0?1:-1,s2=e.e===0?r2.za+1:r2.len-r2.zb-1,k2=Math.min(a.k,r2.nl-1);
 r2.pt(s2,TMP);var u2=laneU(r2,dir2,k2),Xx=TMP[0]-TMP[3]*u2,Xy=TMP[1]+TMP[2]*u2,tox=TMP[2]*dir2,toy=TMP[3]*dir2;
 var ox=a.x,oy=a.y,xr=wd(Xx,ox),yr=wd(Xy,oy),tix=Math.cos(a.a),tiy=Math.sin(a.a),px=[0],py=[0],dA=angd(Math.atan2(toy,tox),a.a);a.tn=Math.abs(dA)<.45?0:(dA>0?1:-1);
 function quad(ax,ay,cx,cy,bx,by,n){for(var j=1;j<=n;j++){var t=j/n,u=1-t;px.push(u*u*ax+2*u*t*cx+t*t*bx);py.push(u*u*ay+2*u*t*cy+t*t*by)}}
 if(N.t==='round'){var nx=wd(N.x,ox),ny=wd(N.y,oy),rr=(N.R+N.Ri)/2+3,te=Math.atan2(-ny,-nx),tx=Math.atan2(yr-ny,xr-nx),D=(((tx-te)%TAU)+TAU)%TAU;if(D<.8)D+=TAU;
  function RP(t){return[nx+Math.cos(t)*rr,ny+Math.sin(t)*rr]}
  var a1=RP(te+.38),c1=RP(te+.05);quad(0,0,c1[0],c1[1],a1[0],a1[1],6);
  for(var t=te+.38+.09;t<te+D-.38;t+=.09){var p=RP(t);px.push(p[0]);py.push(p[1])}
  var a2=RP(te+D-.38),c2=RP(te+D-.05);px.push(a2[0]);py.push(a2[1]);quad(a2[0],a2[1],c2[0],c2[1],xr,yr,6);a.rnd=1}
 else{var den=tix*toy-tiy*tox,cx,cy;if(Math.abs(den)<.15){cx=xr/2;cy=yr/2}else{var t1=(xr*toy-yr*tox)/den;t1=clamp(t1,0,Math.hypot(xr,yr));cx=tix*t1;cy=tiy*t1}quad(0,0,cx,cy,xr,yr,14);a.rnd=0}
 var cum=[0];for(var k=1;k<px.length;k++)cum.push(cum[k-1]+Math.hypot(px[k]-px[k-1],py[k]-py[k-1]));
 a.p={x:px,y:py,c:cum,ox:ox,oy:oy,len:cum[cum.length-1]};a.ps=0;a.pi=0;a.md=1;a.je=e;a.nx={r:r2,dir:dir2,k:k2,s:s2};
}
function aiUpdate(dt,car){
 var i,j,n=AI.length,EXT=[car];if(typeof RIV!=='undefined'&&mode==='game')for(i=0;i<RIV.length;i++){var rv=RIV[i];if(rv&&rv.c&&rv.vis!==false&&rv.c.hx)EXT.push(rv.c)}var ne=n+EXT.length;
 for(i=0;i<n;i++){var a=AI[i],vT=a.vm;if(a.phy){aiPhys(a,dt,i);continue}var v0=a.v;a._s=a.s;a._ps=a.ps;a._md=a.md;a._r=a.r;a._kc=a.kc;
  if(a.md===1)vT*=a.rnd?.55:.62;else if(a.r.k==='touge')vT*=.72;
  a.red=0;
  if(a.md===0&&a.r.k!=='exp'){var se=aiEdgeEnd(a),dEnd=a.dir>0?se-a.s:a.s-se,N=a.dir>0?a.r.b:a.r.a;
   if(dEnd<170){var stopAt=null;
    if(N.t==='x'||N.t==='scr'){var ed=null;for(j=0;j<N.ed.length;j++){var e=N.ed[j];if(e.r===a.r&&e.e===(a.dir>0?1:0)){ed=e;break}}var st=ed?lightState(N,ed.g):0,dS=dEnd-24-a.hx;if((st===2||(st===1&&dS>16))&&dS>-1)stopAt=dS}
    if(stopAt===null&&dEnd<80&&!canEnter(a,N))stopAt=N.t==='round'?dEnd-3:(dEnd-24-a.hx>-1?dEnd-24-a.hx:dEnd-3);
    if(stopAt!==null&&stopAt>-2){vT=Math.min(vT,Math.sqrt(Math.max(0,stopAt)*380)*.95);if(stopAt<3)vT=0;a.red=1}
    if(N.t==='round'&&dEnd<70)vT=Math.min(vT,a.vm*.6)}}
  var blk=null;a.gp=1e9;{
   var ca=Math.cos(a.a),sa=Math.sin(a.a);
   for(j=0;j<ne;j++){var o=j<n?AI[j]:EXT[j-n];if(o===a||!o||(o.l|0)!==(a.l|0)||o.yl===a)continue;var rx=wd(o.x,a.x),ry=wd(o.y,a.y);if(rx>110||rx<-110||ry>110||ry<-110)continue;var f=rx*ca+ry*sa,lt=-rx*sa+ry*ca;if(f<=0||f>90+a.hx)continue;if(Math.abs(lt)>a.hy+o.hy+(a.md?4:1))continue;var gap=f-a.hx-o.hx,vb=Math.max(0,(gap-6)*2.6);if(gap<a.gp)a.gp=gap;if(vb<vT){vT=vb;blk=o}}
  }
  {var myK=a.md===1?a.jk:a.r.id+'_'+a.dir,dE=a.md===0&&a.r.k!=='exp'?(a.dir>0?aiEdgeEnd(a)-a.s:a.s-aiEdgeEnd(a)):1e9;
   for(j=0;j<n;j++){var b=AI[j];if(b===a||b.md!==1||b.jk!==myK||b.k!==a.k)continue;var g2;if(a.md===1){if(b.jn!==a.jn||b.ps<=a.ps)continue;g2=b.ps-a.ps}else{if(dE>80)continue;var NN=a.dir>0?a.r.b:a.r.a;if(b.jn!==NN)continue;g2=dE+b.ps}vT=Math.min(vT,Math.max(0,(g2-a.hx-b.hx-6)*2.6))}}
  if(PEDX.length){var cq=Math.cos(a.a),sq=Math.sin(a.a);for(j=0;j<PEDX.length;j++){var q=PEDX[j],qx=wd(q.x,a.x),qy=wd(q.y,a.y);if(qx>100||qx<-100||qy>100||qy<-100)continue;var qf=qx*cq+qy*sq,ql=-qx*sq+qy*cq;if(qf<=0||qf>62+a.hx||Math.abs(ql)>a.hy+8)continue;vT=Math.min(vT,Math.max(0,(qf-a.hx-9)*2.6))}}
  a.wq=!!(blk&&!blk.P&&!blk.phy&&(blk.red||blk.wq));a.blk=blk;
  // sliding to another lane: creep forward while the gap allows it
  var kt=a.ov?a.ko:a.k;if(a.md===0&&a.kc!==kt&&a.gp>7)vT=Math.max(vT,Math.min(45,(a.gp-7)*3));
  if(a.hold>0){a.hold-=dt;vT=0}
  a.v+=clamp(vT-a.v,-260*dt,90*dt);if(a.v<0)a.v=0;
  if(a.v<2&&!a.red&&!a.wq){a.stk+=dt;if(a.stk>5&&a.md===0&&!a.ov&&a.stk-(a.bp||0)>1.5){a.bp=a.stk;aiBypass(a,blk)}if(a.stk>10&&!a.fd&&(!aiSeen(a,60)||(a.stk>40&&!(blk&&blk.P))))a.fd=1}else{a.stk=0;a.bp=0}
  if(a.md===0){var kt2=a.ov?a.ko:a.k,dk=kt2-a.kc;if(dk){var st2=Math.sign(dk)*Math.min(Math.abs(dk),1.3*dt);a.kc+=st2;a.lv=-a.dir*st2/dt*(a.r.lw||20)}else a.lv=0;
   if(a.ov){a.ovT=(a.ovT||0)+dt;if(a.ovT>1.2&&(aiLaneFree(a,a.k,a.dir,a.hx+26,a.hx+40)||a.ovT>8))a.ov=0;else if(a.ovT>.3&&aiOncoming(a,100)&&aiLaneFree(a,a.k,a.dir,a.hx+6,a.hx+14))a.ov=0}}
  if(a.md===0){a.s+=a.dir*a.v*dt;if(a.r.k!=='exp'){var se2=aiEdgeEnd(a);if((a.dir>0&&a.s>=se2)||(a.dir<0&&a.s<=se2)){if(a.red){a.s=se2-a.dir*.5;a.v=0}else{aiPlace(a);aiJunction(a)}}}}
  else{a.ps+=a.v*dt;if(a.ps>=a.p.len){var nx=a.nx;a.r=nx.r;a.dir=nx.dir;a.k=nx.k;a.kc=nx.k;a.ov=0;a.lv=0;a.s=nx.s;a.md=0;a.jn=null;a.tn=0}}
  aiPlace(a);a.vx=Math.cos(a.a)*a.v;a.vy=Math.sin(a.a)*a.v;a.w=0;a.bk=a.v<v0-.5||a.v<3?Math.min(1,a.bk+dt*6):Math.max(0,a.bk-dt*3);
 }
 aiSeparate();
}
// Two traffic cars must never end up inside each other (lanes that converge in a turn, a car cutting in, a sudden stop).
// The one behind gives way: its move for this frame is undone and it stops; the other is told not to wait for it.
function aiPen(A,B){var ca=Math.cos(A.a),sa=Math.sin(A.a),cb=Math.cos(B.a),sb=Math.sin(B.a),dx=wd(B.x,A.x),dy=wd(B.y,A.y),best=1e9;
 var ax=[[ca,sa],[-sa,ca],[cb,sb],[-sb,cb]];for(var k=0;k<4;k++){var nx=ax[k][0],ny=ax[k][1];
  var ra=A.hx*Math.abs(ca*nx+sa*ny)+A.hy*Math.abs(-sa*nx+ca*ny),rb=B.hx*Math.abs(cb*nx+sb*ny)+B.hy*Math.abs(-sb*nx+cb*ny),p=ra+rb-Math.abs(dx*nx+dy*ny);if(p<best)best=p;if(best<=0)return best}return best}
function aiSeparate(){var n=AI.length,i,j;for(i=0;i<n;i++)AI[i].yl=null;
 for(i=0;i<n;i++){var a=AI[i];if(a.phy||a.fd)continue;
  for(j=i+1;j<n;j++){var b=AI[j];if(b.phy||b.fd||(b.l|0)!==(a.l|0))continue;var dx=wd(b.x,a.x),dy=wd(b.y,a.y),R=a.hx+b.hx+1;if(dx>R||dx<-R||dy>R||dy<-R)continue;
   if(aiPen(a,b)<=.5)continue;
   var fa=dx*Math.cos(a.a)+dy*Math.sin(a.a),fb=-dx*Math.cos(b.a)-dy*Math.sin(b.a),F=fa>fb?a:b,Lc=F===a?b:a;
   if(F.yl)continue;F.yl=Lc;
   if(F._md===F.md&&F._r===F.r&&F._s!=null){F.s=F._s;F.ps=F._ps;F.kc=F._kc;if(F.md===1)F.pi=0;aiPlace(F)}
   F.v=0;F.vx=F.vy=0;F.bk=1}}}
function aiSeen(a,m){return typeof cam!=='undefined'&&Math.abs(wd(a.x,cam.x))<VW/2+m&&Math.abs(wd(a.y,cam.y))<VH/2+m}
// stuck behind something that isn't a red light: change lane, or borrow the oncoming lane on a narrow street
function aiLaneFree(a,k,dir,back,ahead){for(var i=0;i<AI.length;i++){var b=AI[i];if(b===a||b.md!==0||b.r!==a.r||(b.l|0)!==(a.l|0))continue;if(b.dir!==dir)continue;var bk=b.kc!=null?b.kc:b.k;if(Math.abs(bk-k)>.7)continue;var ds=(b.s-a.s)*a.dir;if(ds>-back&&ds<ahead)return false}
 if(car&&!car.l){a.r.pt(a.s,TMP);var u=laneU(a.r,dir,k);for(var q=0;q<=ahead;q+=30){var ss=a.s+a.dir*q;a.r.pt(ss,TMP);var px=TMP[0]-TMP[3]*u,py=TMP[1]+TMP[2]*u;if(Math.hypot(wd(car.x,px),wd(car.y,py))<a.hy+car.hy+8)return false}}return true}
function aiOncoming(a,dist){for(var i=0;i<AI.length;i++){var b=AI[i];if(b===a||b.md!==0||b.r!==a.r||b.dir===a.dir||(b.l|0)!==(a.l|0))continue;var ds=(b.s-a.s)*a.dir;if(ds>-30&&ds<dist)return true}
 if(car&&!car.l){var u=laneU(a.r,-a.dir,0);for(var q=0;q<=dist;q+=30){a.r.pt(a.s+a.dir*q,TMP);if(Math.hypot(wd(car.x,TMP[0]-TMP[3]*u),wd(car.y,TMP[1]+TMP[2]*u))<a.hy+car.hy+10)return true}}return false}
function aiBypass(a,blk){var r=a.r;if(r.k==='exp')return;var e=aiEdgeEnd(a),left=a.dir>0?e-a.s:a.s-e;if(left<70)return;
 var ks=[a.k-1,a.k+1];for(var i=0;i<2;i++){var k=ks[i];if(k<0||k>=r.nl)continue;if(aiLaneFree(a,k,a.dir,a.hx*2+24,a.hx*2+80)){a.k=k;a.stk=0;a.bp=0;return}}
 if((r.nl===1||(blk&&(blk.P||blk.phy)))&&(r.m||0)<6&&left>140&&!aiOncoming(a,240)){a.ov=1;a.ko=-1-2*(r.m||0)/(r.lw||20);a.ovT=0;a.stk=0;a.bp=0}}
function aiPhys(a,dt,idx){
 // a crashed car (hazards on) is cleared away 10 s later so wrecks don't block the road
 a.pt=(a.pt||0)+dt;if(a.pt>10&&!a.fd)a.fd=1;
 var sv={max:COLL.max,hit:COLL.hit,px:COLL.px,py:COLL.py};a.v=0;
 var ca=Math.cos(a.a),sa=Math.sin(a.a),f=a.vx*ca+a.vy*sa,l=-a.vx*sa+a.vy*ca;f*=Math.exp(-1.3*dt);l*=Math.exp(-4.5*dt);a.w*=Math.exp(-2.4*dt);a.vx=f*ca-l*sa;a.vy=f*sa+l*ca;
 a.x=wrap(a.x+a.vx*dt);a.y=wrap(a.y+a.vy*dt);a.a+=a.w*dt;
 var R=Math.hypot(a.hx,a.hy)+2,sp=Math.hypot(a.vx,a.vy);
 if(sp>2||Math.abs(a.w)>.05){
  if(!a.l){BH.q(a.x-R,a.y-R,a.x+R,a.y+R,function(b){if(b.hid)return;var dx=wd(b.x+b.w/2,a.x),dy=wd(b.y+b.h/2,a.y);if(Math.abs(dx)>b.w/2+R||Math.abs(dy)>b.h/2+R)return;satBox(a,dx,dy,b.w/2,b.h/2,0,.2,.4)});
   PH.q(a.x-R,a.y-R,a.x+R,a.y+R,function(p){if(p.hid||p.gone)return;var dx=wd(p.x,a.x),dy=wd(p.y,a.y);var BK=BRKT[p.t];if(BK){if(p.brk)return;if(circProbe(a,dx,dy,BK.r)&&sp>BK.th){breakProp(p,a,true);return}circHit(a,dx,dy,BK.r,.2,.3);return}if(p.t===P_CAR){satBox(a,dx,dy,p.hx,p.hy,p.a,.2,.4);return}if(p.t===P_CONE){if(!p.kn){p.kn=1;p.kt=2.5;p.vx=a.vx;p.vy=a.vy;p.va=6}return}if(p.r>0)circHit(a,dx,dy,p.r,.2,.3)});rasterHit(a)}else deckHit(a);
  for(var j=0;j<AI.length;j++){var b=AI[j];if(b===a||(b.l|0)!==(a.l|0))continue;if(Math.abs(wd(b.x,a.x))>60||Math.abs(wd(b.y,a.y))>60)continue;var im=satPair(a,b,.25,.4);if(im>18&&!b.phy){b.phy=true;b.rest=0;b.dmg+=im}}
 }
 if(sp<5&&Math.abs(a.w)<.2)a.rest+=dt;else a.rest=0;
 COLL.max=sv.max;COLL.hit=sv.hit;COLL.px=sv.px;COLL.py=sv.py;
}
var AICAP={g:62,e:12};
function aiManage(car,cam,VW,VH){
 for(var i=AI.length-1;i>=0;i--){var a=AI[i],ax=Math.abs(wd(a.x,car.x)),ay=Math.abs(wd(a.y,car.y));if(ax>1500||ay>1500||(a.phy&&(ax>700||ay>700))||(a.phy&&a.rest>3&&(Math.abs(wd(a.x,cam.x))>VW/2+60||Math.abs(wd(a.y,cam.y))>VH/2+60)))AI.splice(i,1)}
 var ng=0,ne=0;AI.forEach(function(a){if(a.l)ne++;else ng++});
 for(var t=0;t<3;t++){
  var want=ng<AICAP.g?0:ne<AICAP.e?1:-1;if(want<0)break;
  var an=Math.random()*TAU,d=want?200+Math.random()*900:420+Math.random()*700,px=wrap(car.x+Math.cos(an)*d),py=wrap(car.y+Math.sin(an)*d);
  if(Math.abs(wd(px,cam.x))<VW/2+50&&Math.abs(wd(py,cam.y))<VH/2+50)continue;
  var cand=[];(want?DH:RH).q(px-70,py-70,px+70,py+70,function(sp){var k=sp.r.k;if(want?k==='exp':(k==='art'||k==='touge'))cand.push(sp)});
  if(!cand.length)continue;var sp=cand[Math.floor(Math.random()*cand.length)],r=sp.r,s=(sp.i+Math.random()*(sp.j-sp.i))*r.ds;
  if(!want&&(s<r.za+30||s>r.len-r.zb-30))continue;
  var dir=Math.random()<.5?1:-1,k=Math.floor(Math.random()*r.nl),a=aiMake(r,s,dir,k,want);
  if(Math.abs(wd(a.x,cam.x))<VW/2+50&&Math.abs(wd(a.y,cam.y))<VH/2+50)continue;
  if(ZS&&zoneBlocks(ZS.z,a))continue;
  var ok=true;for(var j=0;j<AI.length;j++){if(Math.abs(wd(AI[j].x,a.x))<60&&Math.abs(wd(AI[j].y,a.y))<60){ok=false;break}}
  if(ok){AI.push(a);if(want)ne++;else ng++}
 }
}

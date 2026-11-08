// ===== IMPACT FX, DRIFT FX, BREAKABLE PROPS =====
var BKH=null,BKL=[],BRKD=[],CONEL=[],FX3=[],PIECES=[],GEYS=[],FLASH=[],BSPR={},PUFF=[],PUFFD=[],TRAIL=[],lastDr=false,scrT=0;
// ---- sprite helpers
function mkSpr(w,h,fn){var c=mkCanvas(w,h),g=c.getContext('2d');fn(function(x,y,a,b,col){g.fillStyle=col;g.fillRect(x,y,a,b)},g);return c}
function ringPx(R,cx0,cy0,r,col,fill){for(var y=-r-1;y<=r+1;y++)for(var x=-r-1;x<=r+1;x++){var d=Math.hypot(x,y);if(fill?d<=r+.3:Math.abs(d-r)<.6)R(cx0+x,cy0+y,1,1,col)}}
// signs on the mountain passes stood right on the guard-rail line, so scraping the rail meant hitting a post every few metres.
// After generation (no RNG involved) they are moved behind the rail, where the car can't reach them.
function hashRmNear(H,o,x,y,m){var a=Math.floor((x-m)/HC),b=Math.floor((x+m)/HC),c=Math.floor((y-m)/HC),d=Math.floor((y+m)/HC);for(var yy=c;yy<=d;yy++)for(var xx=a;xx<=b;xx++){var l=H.c[(((yy%HN)+HN)%HN)*HN+(((xx%HN)+HN)%HN)];if(!l)continue;var j=l.indexOf(o);if(j>=0)l.splice(j,1)}}
function tgSignsOut(){var U=37;ARTS.forEach(function(r){if(r.k!=='touge')return;var u0=r.hw+3;
 function mv(s,sg){r.pt(s,TMP);var x=wrap(TMP[0]-TMP[3]*u0*sg),y=wrap(TMP[1]+TMP[2]*u0*sg),x2=wrap(TMP[0]-TMP[3]*U*sg),y2=wrap(TMP[1]+TMP[2]*U*sg),f=null;
  PH.q(x-1,y-1,x+1,y+1,function(q){if(q.t===P_RSIGN&&Math.abs(wd(q.x,x))<.6&&Math.abs(wd(q.y,y))<.6)f=q});if(!f)return;
  var m=Math.max(f.r,12);hashRmNear(PH,f,x,y,m);f.x=x2;f.y=y2;PH.add(f,x2-m,y2-m,x2+m,y2+m)}
 for(var s=r.za+150;s<r.len-r.zb-100;s+=420)for(var sg=-1;sg<=1;sg+=2)mv(s,sg);
 var last=-999;for(var s2=r.za+80;s2<r.len-r.zb-80;s2+=30){r.pt(s2-40,TMP);var a0=Math.atan2(TMP[3],TMP[2]);r.pt(s2+40,TMP2);var a1=Math.atan2(TMP2[3],TMP2[2]),da=angd(a1,a0);if(Math.abs(da)>.75&&s2-last>170){last=s2;mv(s2-90,da>0?-1:1)}}})}
function buildBrk(){tgSignsOut();if(typeof ramenBuild==='function')try{ramenBuild()}catch(e){RAMEN=null;console.error(e)}
 BSPR.mail=mkSpr(7,7,function(R){R(1,0,5,7,'#4a0e14');R(0,1,7,5,'#4a0e14');R(1,1,5,5,'#e0303c');R(1,1,3,1,'#ff858a');R(1,2,1,2,'#ff858a');R(2,3,3,1,'#5a1018');R(5,4,1,2,'#a01e28');R(3,5,1,1,'#fff')});
 BSPR.mailD=mkSpr(11,7,function(R){R(0,1,11,5,'#4a0e14');R(1,0,9,7,'#4a0e14');R(1,1,9,5,'#e0303c');R(1,1,9,1,'#ff858a');R(3,2,3,1,'#2a0a0e');R(3,4,3,1,'#2a0a0e');R(7,2,2,3,'#f4f4f8');R(9,1,1,5,'#8a8e9e')});
 ['#3a6ad0','#3aa060','#8a8e9e','#e0a030'].forEach(function(c,i){BSPR['bin'+i]=mkSpr(5,5,function(R){R(0,0,5,5,'#16161e');R(1,1,3,3,c);R(1,1,3,1,shadeHex(c,1.35));R(2,2,1,1,'#0c0c14')});BSPR['binD'+i]=mkSpr(5,7,function(R){R(0,0,5,7,'#16161e');R(1,1,3,5,c);R(1,1,1,5,shadeHex(c,1.3));R(1,5,3,1,'#0c0c14')})});
 ['#c8ccd8','#e04a6a','#3a6ab8','#30303a','#7bd957','#f0d040'].forEach(function(c,i){
  BSPR['bike'+i]=mkSpr(11,5,function(R){R(0,2,4,1,'#1a1a24');R(7,2,4,1,'#1a1a24');R(3,2,5,1,c);R(3,1,2,3,'#2a2a34');R(8,0,1,5,'#4a4e60');R(9,1,2,3,'#aeb4c4')});
  BSPR['bikeD'+i]=mkSpr(13,9,function(R,g){ringPx(R,3,5,2,'#1a1a24');ringPx(R,9,5,2,'#1a1a24');R(3,5,1,1,'#8a8e9e');R(9,5,1,1,'#8a8e9e');R(4,3,5,1,c);R(5,4,2,1,c);R(3,4,1,1,c);R(4,1,3,1,'#2a2a34');R(9,1,1,3,c);R(9,1,3,1,'#4a4e60');R(10,2,2,2,'#aeb4c4')})});
 ['#ff4d8d','#3a8ad0','#e0a030','#3aa060'].forEach(function(c,i){BSPR['sign'+i]=mkSpr(7,3,function(R){R(0,0,7,3,'#2a2a36');R(1,1,5,1,c)});BSPR['signD'+i]=mkSpr(7,10,function(R){R(0,0,7,10,'#2a2a36');R(1,1,5,8,'#f4f0e4');R(1,2,4,1,c);R(2,4,3,1,'#2a2a36');R(1,6,5,1,c);R(2,8,2,1,'#2a2a36')})});
 BSPR.plant=mkSpr(8,8,function(R){R(1,1,6,6,'#5a2414');R(2,2,4,4,'#b85a32');var L=[[2,1],[4,0],[5,2],[1,3],[3,3],[6,4],[2,5],[4,5],[5,6],[3,2]];L.forEach(function(q,i){R(q[0],q[1],2,2,i%3?'#3e9a46':'#7ad06a')})});
 BSPR.leaf=mkSpr(5,4,function(R){R(1,0,3,4,'#3e9a46');R(0,1,5,2,'#3e9a46');R(1,1,2,1,'#7ad06a')});
 BSPR.hyd=mkSpr(5,5,function(R){R(0,0,5,5,'#5a1010');R(1,1,3,3,'#e8303a');R(1,1,2,1,'#ff8088');R(2,2,1,1,'#ffd23a')});
 BSPR.hydD=mkSpr(5,8,function(R){R(0,0,5,8,'#5a1010');R(1,1,3,6,'#e8303a');R(1,1,3,1,'#ffd23a');R(0,3,5,1,'#b02028');R(2,7,1,1,'#2a2a36')});
 ['#e03a3a','#3a6ae0','#e8e8f0','#3aa06a'].forEach(function(c,i){BSPR['vend'+i]=mkSpr(6,8,function(R){R(0,0,6,8,'#1a1a28');R(1,1,4,6,c);R(1,1,4,1,'#fff');R(1,6,4,1,shadeHex(c,.7))});
  BSPR['vendD'+i]=mkSpr(9,13,function(R){R(0,0,9,13,'#1a1a28');R(1,1,7,11,c);R(2,2,5,4,'#cfe8ff');var dc=['#ff4a4a','#ffd23a','#4a8aff','#7bd957','#fff'];for(var k=0;k<10;k++)R(2+(k%5),2+((k/5)|0)*2,1,1,dc[(k+i)%5]);R(2,8,3,1,'#2a2a36');R(6,8,1,2,'#c8ccd8');R(2,10,5,1,'#0c0c14')})});
 BSPR.barr=mkSpr(14,4,function(R){R(0,0,14,4,'#1a1a28');for(var i=0;i<4;i++)R(1+i*3.5|0,1,2,2,i%2?'#f0f0f0':'#e8442a')});
 BSPR.cone=mkSpr(5,5,function(R){R(0,0,5,5,'#ff7a00');R(0,2,5,1,'#fff');R(2,1,1,1,'#c84a00')});
 BKH=new Hash();PR.forEach(brkIdx);
 buildSigns();
 for(var r=1;r<=15;r++){PUFF[r]=puffSpr(r,[230,233,242],[188,192,208]);PUFFD[r]=puffSpr(r,[176,146,104],[140,112,78])}
}
function brkIdx(p){if(BRKT[p.t]&&BKH&&p.t!==P_TREE&&p.t!==P_SAKURA)BKH.add(p,p.x-8,p.y-8,p.x+8,p.y+8)}
function puffSpr(r,c1,c2){var s=r*2+1,c=mkCanvas(s,s),g=c.getContext('2d'),id=g.createImageData(s,s),d=id.data;for(var y=0;y<s;y++)for(var x=0;x<s;x++){var dx=x-r,dy=y-r,q=Math.hypot(dx,dy);if(q>r+.2)continue;if(q>r-1.2&&((x+y)&1))continue;var sh=(dx+dy)/(2*r)>.25,o=(y*s+x)*4,col=sh?c2:c1;d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255}g.putImageData(id,0,0);return c}
// ---- breakable definitions
var BRKT={};BRKT[P_MAIL]={th:55,m:.13,r:2.5,nm:'почтовый ящик!',snd:0};BRKT[P_TRASH]={th:18,m:.05,r:4,nm:'урны!',snd:1};BRKT[P_BIKE]={th:18,m:.06,r:3,nm:'велик!',snd:0};BRKT[P_SIGN]={th:12,m:.03,r:2.5,nm:'вывеска!',snd:1};BRKT[P_PLANT]={th:18,m:.05,r:3,nm:'горшок!',snd:2};BRKT[P_HYD]={th:65,m:.16,r:2,nm:'гидрант!',snd:0};BRKT[P_VEND]={th:90,m:.32,r:3.5,nm:'автомат!',snd:0};BRKT[P_LAMP]={th:80,m:.22,r:1.8,nm:'фонарь!',snd:0};BRKT[P_BARR]={th:35,m:.08,r:6,nm:'барьер!',snd:1};BRKT[P_RSIGN]={th:38,m:.05,r:1.6,nm:'знак!',snd:0};BRKT[P_TLT]={th:85,m:.26,r:2,nm:'светофор!',snd:0};BRKT[P_TREE]={th:222,m:.42,r:2.5,nm:'дерево!',snd:1};BRKT[P_SAKURA]={th:222,m:.38,r:2.5,nm:'сакура!',snd:1};
// ---- 3D particles (height, bounce, shadow)
function fx3(o){if(FX3.length>=640)return;o.h=o.h||0;o.vh=o.vh||0;o.g=o.g==null?260:o.g;o.dr=o.dr==null?1.2:o.dr;o.l=1;o.dl=o.dl||1;o.w=o.w||1;o.hh=o.hh||1;o.z=o.z|0;o.ph=Math.random()*6;FX3.push(o)}
function fxBits(x,y,n,cols,sp,vh,z,o){for(var i=0;i<n;i++){var a=Math.random()*TAU,s=sp*(.3+Math.random()*.9),b={x:x,y:y,vx:Math.cos(a)*s+(o&&o.vx||0)*(.3+Math.random()*.5),vy:Math.sin(a)*s+(o&&o.vy||0)*(.3+Math.random()*.5),h:2,vh:vh*(.4+Math.random()*.8),c:cols[i%cols.length],z:z,dl:o&&o.dl||(.35+Math.random()*.3),w:o&&o.w||1,hh:o&&o.hh||1,k:o&&o.k||'bit'};if(b.k==='paper'){b.g=34;b.dr=2.4}fx3(b)}}
function fxSparks(x,y,n,vx,vy,z,pw){pw=pw||1;for(var i=0;i<n;i++){var a=Math.random()*TAU,s=(45+Math.random()*165)*pw;fx3({x:x,y:y,vx:Math.cos(a)*s+(vx||0)*.35,vy:Math.sin(a)*s+(vy||0)*.35,h:3+Math.random()*4,vh:30+Math.random()*110*pw,k:'spark',g:320,dr:2.2,dl:1.3+Math.random()*1.3,z:z})}}
function fxImpact(x,y,mag,vx,vy,z){var n=Math.min(46,8+Math.floor(mag/5));fxSparks(x,y,n,vx,vy,z,Math.min(1.6,.6+mag/180));FLASH.push({x:x,y:y,t:0,r:Math.min(16,5+mag/16),z:z});
 if(mag>110){fxBits(x,y,6,['#cfe8ff','#9ad0ff','#ffffff'],120,90,z,{dl:.5});for(var k=0;k<3;k++)smokePuff(x+(Math.random()-.5)*8,y+(Math.random()-.5)*8,(Math.random()-.5)*30,(Math.random()-.5)*30,3,8,false,z,.9)}}
function fx3Update(dt){for(var i=FX3.length-1;i>=0;i--){var p=FX3[i];p.l-=dt*p.dl;if(p.l<=0){FX3.splice(i,1);continue}
 if(p.k==='paper'&&p.h>0){p.vx+=Math.sin(TIME*5+p.ph)*40*dt;p.vy+=Math.cos(TIME*4+p.ph)*25*dt}
 var k=Math.exp(-p.dr*dt);p.vx*=k;p.vy*=k;p.px=p.x;p.py=p.y;p.ph2=p.h;p.vh-=p.g*dt;p.h+=p.vh*dt;
 if(p.h<=0){if(p.k==='drop'){if(Math.random()<.4)fx3({x:p.x,y:p.y,vx:(Math.random()-.5)*30,vy:(Math.random()-.5)*30,h:1,vh:25,k:'bit',c:'#cfe8ff',dl:3,z:p.z});FX3.splice(i,1);continue}
  p.h=0;if(p.vh<-18){p.vh=-p.vh*(p.k==='spark'?.3:.35);p.vx*=.6;p.vy*=.6}else{p.vh=0;var f=Math.exp(-(p.k==='can'?1.5:7)*dt);p.vx*=f;p.vy*=f;if(p.k==='spark')p.l-=dt*3}}
 p.x=wrap(p.x+p.vx*dt);p.y=wrap(p.y+p.vy*dt)}}
function fx3Draw(z){for(var i=0;i<FX3.length;i++){var p=FX3[i];if(p.z!==z)continue;var x=SX(p.x),y=SY(p.y);if(x<-20||y<-40||x>VW+20||y>VH+20)continue;var hy=Math.round(p.h);
 if(p.k==='spark'){var t=p.l,c=t>.75?'#ffffff':t>.5?'#fff2a0':t>.25?'#ffb030':'#ff5a20',Y=y-hy;var vl=Math.hypot(p.vx,p.vy-p.vh)||1,tl=Math.min(5,1+vl*.025),ux=p.vx/vl,uy=(p.vy-p.vh)/vl;if(t>.45){cx.fillStyle='rgba(255,170,60,'+((t-.45)*.6).toFixed(2)+')';cx.fillRect(x-1,Y-1,3,3)}if(p.h>1){cx.fillStyle='rgba(255,170,60,.22)';cx.fillRect(x,y,1,1)}cx.fillStyle=c;var cs=t>.78?2:1;cx.fillRect(x,Y,cs,cs);for(var q=1;q<=tl;q++){cx.globalAlpha=.85-q/(tl+1)*.7;cx.fillRect(Math.round(x-ux*q),Math.round(Y-uy*q),1,1)}cx.globalAlpha=1;continue}
 cx.globalAlpha=Math.min(1,p.l*3);if(hy>1){cx.fillStyle='rgba(12,8,40,.3)';cx.fillRect(x,y,p.w,p.hh)}cx.fillStyle=p.c;cx.fillRect(x,y-hy,(p.k==='can'&&((TIME*12+p.ph)|0)%2)?p.hh:p.w,(p.k==='can'&&((TIME*12+p.ph)|0)%2)?p.w:p.hh)}cx.globalAlpha=1;
 for(i=FLASH.length-1;i>=0;i--){var f=FLASH[i];if(f.z!==z)continue;var X=SX(f.x),Y=SY(f.y),pr=f.t/.22,r=Math.round(f.r*(.45+pr*1.1)),al=Math.max(0,1-pr);cx.globalAlpha=al*.35;cx.fillStyle='#ffd060';cx.fillRect(X-r,Y-r,r*2+1,r*2+1);cx.globalAlpha=al;cx.fillStyle='#ffffff';cx.fillRect(X-2,Y-2,5,5);for(var k=0;k<8;k++){var a=k/8*TAU+f.r,L=k%2?r*.6:r;for(var q=3;q<=L;q++){cx.fillStyle=q<L*.5?'#ffffff':'#ffd060';cx.fillRect(Math.round(X+Math.cos(a)*q),Math.round(Y+Math.sin(a)*q),1,1)}}cx.globalAlpha=1}}
function flashUpdate(dt){for(var i=FLASH.length-1;i>=0;i--){FLASH[i].t+=dt;if(FLASH[i].t>.22)FLASH.splice(i,1)}}
// ---- smoke puffs
function smokePuff(x,y,vx,vy,r0,r1,dust,z,life){if(SMOKE.length>=240)SMOKE.shift();SMOKE.push({x:x,y:y,vx:vx,vy:vy,l:1,r0:r0,r1:r1,d:dust,z:z|0,dl:life||(.6+Math.random()*.35)})}
function smokeUpdate(dt){for(var i=SMOKE.length-1;i>=0;i--){var p=SMOKE[i];p.l-=dt*p.dl;var k=Math.exp(-1.8*dt);p.vx=p.vx*k+4*dt;p.vy=p.vy*k-2*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.l<=0)SMOKE.splice(i,1)}}
function drawSmoke(z){for(var i=0;i<SMOKE.length;i++){var p=SMOKE[i];if(p.z!==z)continue;var r=Math.max(1,Math.min(15,Math.round(p.r0+(p.r1-p.r0)*Math.pow(1-p.l,.55)))),x=SX(p.x)-r,y=SY(p.y)-r;if(x<-32||y<-32||x>VW+4||y>VH+4)continue;cx.globalAlpha=Math.min(.55,p.l*.62);cx.drawImage((p.d?PUFFD:PUFF)[r],x,y)}cx.globalAlpha=1}
// ---- skid lines & light trails
function skidLine(a,b,l,dirt){var dx=wd(b[0],a[0]),dy=wd(b[1],a[1]),n=Math.min(24,Math.ceil(Math.hypot(dx,dy)));for(var i=1;i<=n;i++)skid(a[0]+dx*i/n,a[1]+dy*i/n,l,dirt)}
function driftFx(dt,I){var c=car,ca=Math.cos(c.a),sa=Math.sin(c.a),sl=Math.abs(c.slip),dirt=c.surf<1,on=sl>.22&&c.sp>60;
 if(!c.wp)c.wp=[null,null,null,null];
 for(var w=0;w<4;w++){var rear=w<2,sg=w%2?1:-1,ox=rear?-(c.hx-4):(c.hx-5),wx=c.x+ca*ox-sa*sg*(c.hy-2),wy=c.y+sa*ox+ca*sg*(c.hy-2),mark=rear?on:(on&&sl>.55);
  if(mark){var cur=[wx,wy];if(c.wp[w])skidLine(c.wp[w],cur,c.l,dirt);else skid(wx,wy,c.l,dirt);c.wp[w]=cur}else c.wp[w]=null;
  if(rear&&on){var inten=Math.min(1,(sl-.15)*1.6)*Math.min(1,c.sp/220),nn=Math.random()<inten*1.2?(Math.random()<inten*.6?2:1):0;
   for(var k=0;k<nn;k++){var pv=(Math.random()-.5)*30;smokePuff(wx+(Math.random()-.5)*3,wy+(Math.random()-.5)*3,-c.vx*.14-sa*sg*pv+(Math.random()-.5)*20,-c.vy*.14+ca*sg*pv+(Math.random()-.5)*20,2+Math.random()*1.5,dirt?10+Math.random()*4:8+Math.random()*5,dirt,c.l,dirt?.7:.55+Math.random()*.25)}
   if(dirt&&Math.random()<inten*.8)fxBits(wx,wy,2,['#6a4a2a','#4a8a3a','#8a6a3a','#3a6a2a'],50,70,c.l,{vx:-c.vx*.4,vy:-c.vy*.4,dl:.8,w:1});
   else if(Math.random()<inten*.08)fxBits(wx,wy,1,['#1a1a20'],30,40,c.l,{vx:-c.vx*.3,vy:-c.vy*.3,dl:.7})}}
 if(c.dr&&!lastDr&&c.sp>80){for(var q=0;q<7;q++){var s2=q%2?1:-1;smokePuff(c.x-ca*c.hx-sa*s2*c.hy,c.y-sa*c.hx+ca*s2*c.hy,(Math.random()-.5)*50-c.vx*.1,(Math.random()-.5)*50-c.vy*.1,3,11+Math.random()*3,dirt,c.l,.55)}}
 lastDr=c.dr;
 // tail-light trails
 var tx=c.x-ca*(c.hx-1),ty=c.y-sa*(c.hx-1),lx=-sa*(c.hy-3),ly=ca*(c.hy-3);
 if(c.dr&&c.sp>90){TRAIL.push([tx+lx,ty+ly,tx-lx,ty-ly,c.l]);if(TRAIL.length>22)TRAIL.shift()}else if(TRAIL.length)TRAIL.splice(0,Math.min(TRAIL.length,2))}
function trailDraw(z){var n=TRAIL.length;if(n<2)return;for(var i=1;i<n;i++){var a=TRAIL[i-1],b=TRAIL[i];if(a[4]!==z)continue;var al=(i/n)*.55;for(var s=0;s<2;s++){var x0=SX(a[s*2]),y0=SY(a[s*2+1]),x1=SX(b[s*2]),y1=SY(b[s*2+1]),m=Math.max(Math.abs(x1-x0),Math.abs(y1-y0));if(m>40)continue;cx.globalAlpha=al;cx.fillStyle=i>n-4?'#ff8090':'#ff2a4a';for(var k=0;k<=m;k++)cx.fillRect(Math.round(x0+(x1-x0)*k/(m||1)),Math.round(y0+(y1-y0)*k/(m||1)),1,1);cx.globalAlpha=al*.35;cx.fillRect(x1-1,y1-1,3,3)}}cx.globalAlpha=1}
// ---- scraping along walls
function scrapeFx(dt){scrT-=dt;if(COLL.hit>0&&COLL.px!=null&&car.sp>55&&COLL.max<40){var n=1+(car.sp>150?2:1);fxSparks(COLL.px,COLL.py,n,-car.vx*.5,-car.vy*.5,car.l,.7);if(scrT<=0){auScrape();scrT=.12}}}
// ---- ground decals (painted into baked chunk)
function gpx(x,y,col,l){var ch=chunkGet(Math.floor(wrap(x)/CH),Math.floor(wrap(y)/CH));if(!ch)return;var c2=l?ch.u:ch.g;if(!c2)return;var g=c2._c||(c2._c=c2.getContext('2d'));g.fillStyle=col;g.fillRect(Math.floor(wrap(x)-ch.X0),Math.floor(wrap(y)-ch.Y0),1,1)}
function decal(x,y,r,cols,dens){for(var dy=-r;dy<=r;dy++)for(var dx=-r;dx<=r;dx++){var q=Math.hypot(dx,dy)/r;if(q>1||Math.random()>dens*(1.2-q))continue;gpx(x+dx,y+dy,cols[Math.random()*cols.length|0],0)}}
// ---- breaking
function breakProp(p,c,ai){var B=BRKT[p.t];if(!B||p.brk)return;p.brk=1;BRKD.push(p);p.rt=TIME+75;p.bt=TIME;
 var vx=c.vx,vy=c.vy,sp=Math.hypot(vx,vy)||1,z=0,x=p.x,y=p.y,dir=Math.atan2(vy,vx);
 var k=1-B.m*Math.min(1,sp/260+.35);c.vx*=k;c.vy*=k;if(!ai)c.w+=(Math.random()-.5)*B.m*5;
 function piece(spr,o){o=o||{};PIECES.push({spr:spr,x:o.x!=null?o.x:x,y:o.y!=null?o.y:y,h:o.h!=null?o.h:3,vx:vx*(o.f||1)*(.75+Math.random()*.4)+(Math.random()-.5)*40,vy:vy*(o.f||1)*(.75+Math.random()*.4)+(Math.random()-.5)*40,vh:o.vh!=null?o.vh:50+Math.min(200,sp*.45),a:o.a!=null?o.a:(p.a||0),va:o.va!=null?o.va:(Math.random()-.5)*(o.spin||14),t:0,life:o.life||32,m:o.m||.5})}
 var pv={vx:vx*.6,vy:vy*.6};
 switch(p.t){
  case P_MAIL:piece(BSPR.mailD,{m:.6});fxBits(x,y,14,['#f4f4f8','#fff8e0','#e8ecf4'],70,120,z,{k:'paper',dl:.22,w:2,hh:1,vx:pv.vx,vy:pv.vy});fxBits(x,y,6,['#e0303c','#8a1018'],90,90,z,pv);fxSparks(x,y,8,vx,vy,z,.7);break;
  case P_TRASH:var bc=p.c||0;piece(BSPR['binD'+bc],{x:x-2,spin:18,m:.3});piece(BSPR['binD'+((bc+1)%4)],{x:x+2,spin:18,m:.3});fxBits(x,y,16,['#e8e0c8','#7a5a3a','#3aa060','#d04a4a','#f4f4f8','#e0a030'],90,110,z,pv);for(var q=0;q<5;q++)fx3({x:x,y:y,vx:vx*.5+(Math.random()-.5)*90,vy:vy*.5+(Math.random()-.5)*90,h:3,vh:60+Math.random()*80,k:'can',c:['#c8ccd8','#e04a4a','#3a6ad0'][q%3],w:2,hh:1,dl:.12,z:z});fxBits(x,y,5,['#fff8e0'],60,90,z,{k:'paper',dl:.25,w:2});break;
  case P_BIKE:piece(BSPR['bikeD'+((p.c||0)%6)],{spin:10,m:.45});fxBits(x,y,6,['#aeb4c4','#1a1a24','#4a4e60'],80,90,z,pv);fxSparks(x,y,5,vx,vy,z,.6);auBell();break;
  case P_SIGN:piece(BSPR['signD'+((p.c||0)%4)],{spin:22,f:1.2,vh:90+sp*.4,m:.25});fxBits(x,y,6,['#2a2a36','#f4f0e4'],70,80,z,pv);break;
  case P_PLANT:piece(BSPR.leaf,{spin:16,m:.2});fxBits(x,y,12,['#b85a32','#8a3e20','#d07a4a'],100,110,z,pv);fxBits(x,y,10,['#3e9a46','#7ad06a'],60,100,z,{k:'paper',dl:.3,vx:pv.vx,vy:pv.vy});decal(x,y,5,['#4a2e1a','#5a3a22','#3a2414','#b85a32'],.75);break;
  case P_HYD:piece(BSPR.hydD,{m:.7});GEYS.push({x:x,y:y,t:9});decal(x,y,3,['#3a2e2a','#2a2420'],.9);fxSparks(x,y,10,vx,vy,z,.8);break;
  case P_VEND:var vc=p.c||0;piece(BSPR['vendD'+vc],{h:1,vh:25,f:.35,spin:3,a:dir+Math.PI/2,m:1,life:40});for(var q2=0;q2<10;q2++)fx3({x:x,y:y,vx:vx*.4+(Math.random()-.5)*130,vy:vy*.4+(Math.random()-.5)*130,h:4,vh:40+Math.random()*110,k:'can',c:['#e04a4a','#ffd23a','#3a6ad0','#7bd957','#f4f4f8'][q2%5],w:2,hh:1,dl:.1,z:z});fxBits(x,y,12,['#cfe8ff','#9ad0ff','#ffffff'],110,100,z,pv);fxSparks(x,y,16,vx,vy,z,1);decal(x,y,4,['#a8d0ff','#e0f0ff'],.25);break;
  case P_LAMP:PIECES.push({lamp:1,x:x,y:y,h:0,vx:0,vy:0,vh:0,a:dir+(Math.random()-.5)*.6,va:0,t:0,life:45,fall:0,m:.8});fxSparks(x,y,18,vx*.3,vy*.3,z,1.1);fxBits(x,y,6,['#fff4c0','#cfe8ff'],80,100,z,pv);break;
  case P_TLT:PIECES.push({tlt:1,x:x,y:y,bx:x,by:y,h:0,vx:0,vy:0,vh:0,a:dir+(Math.random()-.5)*.7,va:0,t:0,life:45,fall:0,m:.9,st:lightState(p.n,p.g),zap:0});
   fxImpact(x,y,170,vx*.5,vy*.5,z);fxSparks(x,y,26,vx*.4,vy*.4,z,1.3);fxSparks(x,y,14,0,0,z,.7);fxBits(x,y,10,['#8a8e9e','#c8ccd8','#4a4e60'],110,110,z,pv);fxBits(x,y,8,['#ff3a3a','#ffd23a','#3df0b0','#cfe8ff'],90,120,z,pv);smokePuff(x,y,vx*.1,vy*.1,2,8,true,0,1.4);cam.sh=Math.max(cam.sh||0,3);auSmash(0,1);break;
  case P_TREE:case P_SAKURA:var hv=hsh(p.x|0,p.y|0,1),tr=p.t===P_TREE?TREES[p.f?5+(hv<.5?0:1):Math.floor(hv*3)]:TREES[3+(hv<.5?0:1)];if(tr)piece(tr,{spin:5,f:.5,vh:70+sp*.18,m:1.4,life:35});
   var lc=p.t===P_SAKURA?['#ffb3d1','#ff8ab8','#ffd6e6','#5aa860']:['#5aa860','#2f7a46','#3d8f52','#8fcf6a'];fxBits(x,y,26,lc,110,120,z,{vx:vx*.5,vy:vy*.5,k:'paper',dl:.18,w:2});fxBits(x,y,10,lc,140,90,z,pv);
   fxBits(x,y,10,['#8a5a34','#c8a070','#5a3a24'],120,110,z,pv);smokePuff(x,y,vx*.1,vy*.1,3,10,true,0,1.2);cam.sh=Math.max(cam.sh||0,3.5);chunkDirty(x-40,y-40,x+40,y+40);break;
  case P_RSIGN:var si=signIcon(p);if(si)piece(si,{spin:18,f:1.1,vh:80+sp*.4,m:.2});fxBits(x,y,4,['#8a8e9e','#c8ccd8'],70,70,z,pv);fxSparks(x,y,5,vx,vy,z,.6);break;
  case P_BARR:piece(BSPR.barr,{spin:16,f:1.1,m:.35});fxBits(x,y,8,['#e8442a','#f0f0f0'],90,90,z,pv);break;}
 auSmash(B.snd,Math.min(1,sp/200+.3));
 PEDS.forEach(function(q){if(Math.abs(wd(q.x,x))<45&&Math.abs(wd(q.y,y))<45&&q.ex<=0)q.ex=1.2});
 if(!ai){if(run.pend>0)run.pend+=60;else{run.score+=20;S.coins+=.5}flash(B.nm,.7)}}
function piecesUpdate(dt){for(var i=PIECES.length-1;i>=0;i--){var q=PIECES[i];q.t+=dt;if(q.t>q.life||Math.abs(wd(q.x,car.x))>950||Math.abs(wd(q.y,car.y))>950){PIECES.splice(i,1);continue}
 if(q.tlt){if(q.fall<1){q.fall=Math.min(1,q.fall+dt*(.7+q.fall*4.5));if(q.fall>=1){var hx=q.x+Math.cos(q.a)*17,hy=q.y+Math.sin(q.a)*17;fxBits(hx,hy,22,['#ff3a3a','#ffd23a','#3df0b0','#cfe8ff','#ffffff'],95,90,0,{dl:.5});fxImpact(hx,hy,110,0,0,0);fxSparks(hx,hy,22,0,0,0,1.1);fxBits(hx,hy,8,['#0e0e14','#2a2e3a'],80,80,0,{});smokePuff(hx,hy,0,0,2,9,true,0,1.5);cam.sh=Math.max(cam.sh||0,2.5);auSmash(2,.9);auSmash(1,.7)}}
  q.zap-=dt;if(q.t<4&&q.zap<=0){q.zap=.08+Math.random()*.25;fxSparks(q.bx,q.by,2+(Math.random()*4|0),0,0,0,.55)}if(q.fall>=1&&q.t<2.5&&Math.random()<dt*6)fxSparks(q.x+Math.cos(q.a)*17,q.y+Math.sin(q.a)*17,2,0,0,0,.4);continue}
 if(q.lamp){if(q.fall<1){q.fall=Math.min(1,q.fall+dt*(1+q.fall*5));if(q.fall>=1){var ex=q.x+Math.cos(q.a)*11,ey=q.y+Math.sin(q.a)*11;fxBits(ex,ey,8,['#fff4c0','#cfe8ff','#ffffff'],70,70,0,{dl:.6});fxSparks(ex,ey,10,0,0,0,.8);auSmash(2,.5)}}continue}
 q.vh-=260*dt;q.h+=q.vh*dt;if(q.h<=0){q.h=0;if(q.vh<-30){q.vh=-q.vh*.32;q.vx*=.62;q.vy*=.62;q.va*=.6;smokePuff(q.x,q.y,0,0,1,4,true,0,1.6)}else q.vh=0}
 var gr=q.h<=0;var f=Math.exp(-(gr?3.2:.4)*dt);q.vx*=f;q.vy*=f;q.va*=Math.exp(-(gr?4:.2)*dt);q.a+=q.va*dt;
 var nx=wrap(q.x+q.vx*dt),ny=wrap(q.y+q.vy*dt),hitB=false;BH.q(nx-1,ny-1,nx+1,ny+1,function(b){if(b.hid)return;var dx=wd(nx,b.x),dy=wd(ny,b.y);if(dx>0&&dy>0&&dx<b.w&&dy<b.h)hitB=true});
 if(hitB){q.vx*=-.3;q.vy*=-.3}else{q.x=nx;q.y=ny}
 if(!car.l){var dx2=wd(q.x,car.x),dy2=wd(q.y,car.y);if(dx2*dx2+dy2*dy2<(car.hy+4)*(car.hy+4)&&car.sp>25&&q.h<4){q.vx=car.vx*(1.05+Math.random()*.3)+(Math.random()-.5)*30;q.vy=car.vy*(1.05+Math.random()*.3)+(Math.random()-.5)*30;q.vh=40+car.sp*.2;q.va=(Math.random()-.5)*16;q.t=Math.min(q.t,q.life-8);car.vx*=1-q.m*.04;car.vy*=1-q.m*.04;auSmash(1,.25)}}}
 for(var g=GEYS.length-1;g>=0;g--){var G=GEYS[g];G.t-=dt;if(G.t<=0){GEYS.splice(g,1);continue}var pw=Math.min(1,G.t/2);if(FX3.length<340)for(var k=0;k<Math.ceil(4*pw);k++)fx3({x:G.x+(Math.random()-.5)*2,y:G.y+(Math.random()-.5)*2,vx:(Math.random()-.5)*40*pw+6,vy:(Math.random()-.5)*40*pw,h:2,vh:(150+Math.random()*90)*pw,k:'drop',c:Math.random()<.3?'#ffffff':Math.random()<.5?'#bfe4ff':'#7ec4ff',g:300,dr:.4,dl:.6,z:0});if(Math.random()<dt*3)decal(G.x+(Math.random()-.5)*16,G.y+(Math.random()-.5)*16,4,['rgba(60,110,190,.35)'],.5)}}
function piecesDraw(air){for(var i=0;i<PIECES.length;i++){var q=PIECES[i];if((q.h>3)!==air)continue;var x=SX(q.x),y=SY(q.y);if(x<-30||y<-40||x>VW+30||y>VH+30)continue;var fade=Math.min(1,(q.life-q.t)/2);cx.globalAlpha=fade;
 if(q.tlt){var L=Math.round(17*q.fall*q.fall),ca=Math.cos(q.a),sa=Math.sin(q.a),k,hx2=Math.round(x+ca*L),hy2=Math.round(y+sa*L);cx.fillStyle='rgba(18,10,52,.3)';for(k=0;k<=L;k++)cx.fillRect(Math.round(x+ca*k)+1,Math.round(y+sa*k)+1,1,1);cx.fillStyle='#4a4e60';for(k=0;k<=L;k++){cx.fillRect(Math.round(x+ca*k),Math.round(y+sa*k),1,1);cx.fillRect(Math.round(x+ca*k-sa),Math.round(y+sa*k+ca),1,1)}
  cx.fillStyle='#0e0e14';cx.fillRect(hx2-3,hy2-3,7,7);var lit=q.t<.5||(q.t<2.5&&((q.t*11)|0)%3!==0),cl=['#3df0b0','#ffd23a','#ff3a3a'];for(var li=0;li<3;li++){cx.fillStyle=lit&&li===(2-(q.st|0))?cl[2-li]:'#3a3a48';cx.fillRect(hx2-2+Math.round(ca*(li-1)*2),hy2-1+Math.round(sa*(li-1)*2),2,2)}cx.globalAlpha=1;continue}
 if(q.lamp){var L=Math.round(11*q.fall*q.fall),ca=Math.cos(q.a),sa=Math.sin(q.a);cx.fillStyle='rgba(18,10,52,.3)';for(var k=0;k<=L;k++)cx.fillRect(Math.round(x+ca*k)+1,Math.round(y+sa*k)+1,1,1);cx.fillStyle='#4a4e60';for(k=0;k<=L;k++)cx.fillRect(Math.round(x+ca*k),Math.round(y+sa*k),1,1);cx.fillStyle='#2a2e3a';cx.fillRect(Math.round(x+ca*L)-1,Math.round(y+sa*L)-1,3,3);cx.fillStyle=q.t<.6||((q.t*9)|0)%4===0&&q.t<3?'#fff4c0':'#5a5e70';cx.fillRect(Math.round(x+ca*L),Math.round(y+sa*L),1,1);cx.globalAlpha=1;continue}
 var ra=Math.round(q.a/(Math.PI/16))*(Math.PI/16),s=q.spr,hy=Math.round(q.h);cx.save();cx.translate(x+1+Math.round(hy*.4),y+2);cx.rotate(ra);cx.fillStyle='rgba(12,8,40,'+(hy>0?.22:.32)+')';cx.fillRect(-s.width/2,-s.height/2,s.width,s.height);cx.restore();
 cx.save();cx.translate(x,y-hy);cx.rotate(ra);cx.drawImage(s,-s.width/2|0,-s.height/2|0);cx.restore();cx.globalAlpha=1}}
// ---- standing breakables (drawn live, not baked)
function brkDraw(top){if(!BKH)return;if(!top){BKL.length=0;var X0=cam.x-VW/2-24,Y0=cam.y-VH/2-24;BKH.q(X0,Y0,X0+VW+48,Y0+VH+48,function(p){BKL.push(p)})}BKL.forEach(function(p){var B=BRKT[p.t];if(!B||p.hid)return;var x=SX(p.x),y=SY(p.y);if(x<-16||y<-16||x>VW+16||y>VH+16)return;
 if(p.t===P_RSIGN){if(p.brk)return;if(!top){cx.fillStyle='rgba(18,10,52,.3)';cx.fillRect(x+1,y,4,1);cx.fillRect(x+3,y+1,4,1);cx.fillStyle='#3a3e4e';cx.fillRect(x,y-1,2,2)}else{var ic=signIcon(p);cx.fillStyle='#9aa0b0';cx.fillRect(x,y-9,1,9);if(ic)cx.drawImage(ic,x-(ic.width>>1),y-9-ic.height+2)}return}
 if(top){if(p.t===P_LAMP&&!p.brk){var dx=Math.round(Math.cos(p.a)*5),dy=Math.round(Math.sin(p.a)*5);cx.fillStyle='#4a4e60';cx.fillRect(x,y-3,1,3);cx.fillStyle='#2a2e3a';cx.fillRect(x+dx-1,y+dy-4,3,2);cx.fillStyle='#fff4c0';cx.fillRect(x+dx,y+dy-3,1,1)}return}
 if(p.brk){if(p.t===P_LAMP||p.t===P_HYD){cx.fillStyle='#2a2e3a';cx.fillRect(x-1,y-1,3,3);var bt=TIME-(p.bt||0);if(p.t===P_LAMP&&bt<4&&Math.random()<.3){cx.fillStyle='#fff2a0';cx.fillRect(x+(Math.random()*3|0)-1,y-(Math.random()*3|0),1,1)}}return}
 var s=null,a=0;switch(p.t){case P_MAIL:s=BSPR.mail;break;case P_HYD:s=BSPR.hyd;break;case P_PLANT:s=BSPR.plant;break;case P_VEND:s=BSPR['vend'+(p.c||0)];break;
  case P_TRASH:var c0=BSPR['bin'+((p.c||0)%4)],c1=BSPR['bin'+(((p.c||0)+1)%4)];cx.fillStyle='rgba(18,10,52,.3)';cx.fillRect(x-4,y,11,5);cx.drawImage(c0,x-5,y-2);cx.drawImage(c1,x,y-2);return;
  case P_BIKE:s=BSPR['bike'+((p.c||0)%6)];a=p.a||0;break;case P_SIGN:s=BSPR['sign'+((p.c||0)%4)];a=p.a||0;break;case P_BARR:s=BSPR.barr;a=p.a||0;break;
  case P_LAMP:cx.fillStyle='#3a3e4e';cx.fillRect(x-1,y-1,3,3);return}
 if(!s)return;if(a){var ra=Math.round(a/(Math.PI/16))*(Math.PI/16);cx.save();cx.translate(x+1,y+2);cx.rotate(ra);cx.fillStyle='rgba(18,10,52,.3)';cx.fillRect(-s.width/2,-s.height/2,s.width,s.height);cx.restore();cx.save();cx.translate(x,y);cx.rotate(ra);cx.drawImage(s,-s.width/2|0,-s.height/2|0);cx.restore()}
 else{cx.fillStyle='rgba(18,10,52,.3)';cx.fillRect(x-(s.width>>1)+2,y-(s.height>>1)+2,s.width,s.height);cx.drawImage(s,x-(s.width>>1),y-(s.height>>1))}})}
function brkReset(){BRKD.forEach(function(p){p.brk=0});BRKD=[];CONEL=PR.filter(function(p){return p.t===P_CONE});PIECES=[];GEYS=[];FX3=[];FLASH=[];TRAIL=[]}
function brkRespawn(){if(FRAME%60)return;for(var i=BRKD.length-1;i>=0;i--){var p=BRKD[i];if(TIME>p.rt&&(Math.abs(wd(p.x,cam.x))>VW||Math.abs(wd(p.y,cam.y))>VH)){p.brk=0;BRKD.splice(i,1)}}}
// ---- sounds
function auNoise(f,q,g,d,type){if(!AU)return;try{var C=AU.c,s=C.createBufferSource(),bp=C.createBiquadFilter(),gn=C.createGain();s.buffer=AU.buf;bp.type=type||'bandpass';bp.frequency.value=f;bp.Q.value=q;gn.gain.value=g;gn.gain.setTargetAtTime(0,C.currentTime+.01,d);s.connect(bp);bp.connect(gn);gn.connect(AU.m);s.start(0,Math.random()*.5);s.stop(C.currentTime+d*6)}catch(e){}}
function auTone(f,g,d,type){if(!AU)return;try{var C=AU.c,o=C.createOscillator(),gn=C.createGain();o.type=type||'square';o.frequency.value=f;gn.gain.value=g;gn.gain.setTargetAtTime(0,C.currentTime+.01,d);o.connect(gn);gn.connect(AU.m);o.start();o.stop(C.currentTime+d*6)}catch(e){}}
function auSmash(kind,v){v=v||1;if(kind===0){auNoise(2200,6,.35*v,.06);auTone(880+Math.random()*300,.05*v,.12,'triangle');auNoise(400,1,.3*v,.05,'lowpass')}else if(kind===1){auNoise(900,2,.35*v,.04);auNoise(300,1,.25*v,.04,'lowpass')}else{auNoise(4200,3,.25*v,.05);setTimeout(function(){auNoise(5200,5,.15*v,.04)},50);auNoise(600,1,.2*v,.04,'lowpass')}}
function auScrape(){auNoise(3000+Math.random()*1500,8,.12,.05)}
function auBell(){auTone(2600,.04,.18,'sine');setTimeout(function(){auTone(2600,.03,.14,'sine')},120)}

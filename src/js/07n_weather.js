// ===== weather: clear / overcast / rain with puddles / wind =====
// Auto mode changes the weather every few minutes with slow transitions; Settings can fix one.
// Overcast greys the light and darkens the drifting cloud shadows; rain adds light streaks, splashes and puddles
// that fill up over time (everything stays readable); wind bends the rain, sways the trees, flutters the event
// flags, drives the clouds faster, carries smoke and blows leaves, petals and paper across the road.
var WXN=['авто','ясно','пасмурно','дождь','ветер'];
var WXT=[null,{c:.08,r:0,w:.15},{c:1,r:0,w:.35},{c:1,r:1,w:.45},{c:.45,r:0,w:1}];
var W={k:1,cloud:.08,rain:0,wind:.15,wd0:Math.random()*TAU,wdir:0,wet:0,t:0,next:60+Math.random()*90,fast:0,drops:[],spl:[],deb:[],sprT:0};
function wxUpdate(dt){var m=S.wx|0;
 if(m){if(W.k!==m){W.k=m;W.fast=1}}
 else{W.t+=dt;if(W.t>W.next){W.t=0;W.next=150+Math.random()*150;var r=Math.random(),k=r<.4?1:r<.64?2:r<.84?3:4;if(k===W.k)k=k===1?2:1;W.k=k}}
 var T=WXT[W.k]||WXT[1],sp=(W.fast?1.4:.04)*dt,done=true;
 function app(cur,tg){var d=tg-cur;if(Math.abs(d)>.002)done=false;return cur+clamp(d,-sp,sp)}
 W.cloud=app(W.cloud,T.c);W.rain=app(W.rain,T.r);W.wind=app(W.wind,T.w);if(done)W.fast=0;
 W.wdir=W.wd0+Math.sin(TIME*.021)*.6;
 if(W.rain>.25)W.wet=Math.min(1,W.wet+dt*W.rain/(W.fast||S.wx?2.5:22));else W.wet=Math.max(0,W.wet-dt/(S.wx?3:80));
 wxSound();if(mode==='game')wxSplash(dt)}
// light: overcast is greyer and a bit darker, the warm sun lift fades, street lights come on earlier
var _todW=todUpdate;todUpdate=function(dt){_todW(dt);wxUpdate(dt);var c=W.cloud,r=W.rain,k=1-.17*c-.08*r,m=TODS.m;
 TODS.m=[Math.round(m[0]*k*(1-.05*c)),Math.round(m[1]*k*(1-.02*c)),Math.min(255,Math.round(m[2]*(k+.03*c)))];TODS.lift*=1-.75*c;TODS.L=Math.max(TODS.L,.2*c+.16*r)};
// cloud shadows: darker when overcast, carried by the wind
var WXFS=null;function wxFogSpr(){if(WXFS)return WXFS;var c=mkCanvas(64,64),g=c.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(200,208,224,.5)');gr.addColorStop(.6,'rgba(200,208,224,.25)');gr.addColorStop(1,'rgba(200,208,224,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);WXFS=c;return c}
var WXCS=null;function wxCloudSpr(){if(WXCS)return WXCS;var c=mkCanvas(64,64),g=c.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(8,6,36,.62)');gr.addColorStop(.55,'rgba(8,6,36,.45)');gr.addColorStop(1,'rgba(8,6,36,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);WXCS=c;return c}
var _clW=cloudsDraw;cloudsDraw=function(dt){var wx=Math.cos(W.wdir),wy=Math.sin(W.wdir),v=10+W.wind*55,a=(.07+.13*W.cloud).toFixed(3);
 // soft-edged shadows (a blurred blob instead of a hard ellipse)
 var sp=wxCloudSpr(),al=Math.min(1,(.07+.13*W.cloud)*2.2),sm=cx.imageSmoothingEnabled;cx.imageSmoothingEnabled=true;cx.globalAlpha=al;
 CLOUDS.forEach(function(c){c.x=wrap(c.x+wx*v*dt);c.y=wrap(c.y+wy*v*dt);var x=wd(c.x,cam.x)+VW/2,y=wd(c.y,cam.y)+VH/2;if(x<-c.rx*1.6||y<-c.ry*1.6||x>VW+c.rx*1.6||y>VH+c.ry*1.6)return;
  cx.drawImage(sp,x-c.rx*1.25,y-c.ry*1.25,c.rx*2.5,c.ry*2.5);cx.drawImage(sp,x+c.rx*.5-c.rx*.8,y-c.ry*.3-c.ry*.8,c.rx*1.6,c.ry*1.6)});
 // overcast: a dense layer of drifting cloud shadows around you (tiles of soft blobs moving with the wind)
 if(W.cloud>.05){var T=520;W.ox=((W.ox||0)+wx*v*dt)%T;W.oy=((W.oy||0)+wy*v*dt)%T;cx.globalAlpha=Math.min(1,.5*W.cloud);var x0=cam.ox-W.ox,y0=cam.oy-W.oy;
  for(var ty=Math.floor(y0/T)-1;ty<=Math.floor((y0+VH)/T)+1;ty++)for(var tx=Math.floor(x0/T)-1;tx<=Math.floor((x0+VW)/T)+1;tx++)for(var b=0;b<3;b++){
   var rx=110+hsh(tx,ty,90+b)*130,ry=70+hsh(tx,ty,93+b)*80,bx=tx*T+W.ox+hsh(tx,ty,96+b)*T-cam.ox,by=ty*T+W.oy+hsh(tx,ty,99+b)*T-cam.oy;
   if(bx<-rx*1.3||by<-ry*1.3||bx>VW+rx*1.3||by>VH+ry*1.3)continue;cx.drawImage(sp,bx-rx*1.25,by-ry*1.25,rx*2.5,ry*2.5)}}
 cx.globalAlpha=1;
 var fg=W.cloud*.75+W.rain*.35;if(fg>.04){var hz=Math.min(.22,.13*fg);cx.fillStyle='rgba(176,186,206,'+hz.toFixed(3)+')';cx.fillRect(-4,-4,VW+8,VH+8);
  var fs=wxFogSpr(),T2=420;W.fx=((W.fx||0)+wx*v*.7*dt)%T2;W.fy=((W.fy||0)+wy*v*.7*dt)%T2;cx.globalAlpha=Math.min(1,.55*fg);var x1=cam.ox-W.fx,y1=cam.oy-W.fy;
  for(var ty2=Math.floor(y1/T2)-1;ty2<=Math.floor((y1+VH)/T2)+1;ty2++)for(var tx2=Math.floor(x1/T2)-1;tx2<=Math.floor((x1+VW)/T2)+1;tx2++)for(var b2=0;b2<2;b2++){
   var rx2=90+hsh(tx2,ty2,120+b2)*120,ry2=60+hsh(tx2,ty2,123+b2)*60,bx2=tx2*T2+W.fx+hsh(tx2,ty2,126+b2)*T2-cam.ox,by2=ty2*T2+W.fy+hsh(tx2,ty2,129+b2)*T2-cam.oy;
   if(bx2<-rx2*1.3||by2<-ry2*1.3||bx2>VW+rx2*1.3||by2>VH+ry2*1.3)continue;cx.drawImage(fs,bx2-rx2*1.25,by2-ry2*1.25,rx2*2.5,ry2*2.5)}
  cx.globalAlpha=1}
 cx.imageSmoothingEnabled=sm;
 wxDebris(dt)};
// ---- puddles on the asphalt (they grow as the road gets wet, rings when it rains)
var PUDC=new Map(),PUDG=40;
function pudAt(i,j){var key=i*100003+j,v=PUDC.get(key);if(v!==undefined)return v;var h=hsh(i,j,77);if(h>.22){PUDC.set(key,null);return null}
 var x=i*PUDG+8+hsh(i,j,78)*24,y=j*PUDG+8+hsh(i,j,79)*24;if(!chunkGet(Math.floor(wrap(x)/CH),Math.floor(wrap(y)/CH)))return null;
 var rx=5+Math.floor(hsh(i,j,80)*8),ry=3+Math.floor(hsh(i,j,81)*3);
 function asph(a,b){var t=typeAt(a,b);return t===0||t===1}
 if(!asph(x,y)||!asph(x-rx,y)||!asph(x+rx,y)||!asph(x,y-ry)||!asph(x,y+ry)){PUDC.set(key,null);return null}
 var p={x:x,y:y,rx:rx,ry:ry,h:h/.22,ph:hsh(i,j,82)*7};PUDC.set(key,p);if(PUDC.size>8000)PUDC.clear();return p}
function wxPuddles(){if(W.wet<.03)return;var ox=cam.ox,oy=cam.oy,i0=Math.floor((ox-16)/PUDG),i1=Math.floor((ox+VW+16)/PUDG),j0=Math.floor((oy-16)/PUDG),j1=Math.floor((oy+VH+16)/PUDG),a=Math.min(1,W.wet*1.6);
 for(var j=j0;j<=j1;j++)for(var i=i0;i<=i1;i++){var p=pudAt(i,j);if(!p||p.h>W.wet)continue;var s=Math.min(1,.45+(W.wet-p.h)*2.5),rx=Math.max(2,Math.round(p.rx*s)),ry=Math.max(1,Math.round(p.ry*s)),x=Math.round(SX(p.x)),y=Math.round(SY(p.y));
  if(x<-rx-2||y<-ry-2||x>VW+rx+2||y>VH+ry+2)continue;
  cx.fillStyle='rgba(22,32,60,'+(.42*a).toFixed(3)+')';for(var dy=-ry;dy<=ry;dy++){var hw=Math.round(rx*Math.sqrt(1-(dy*dy)/((ry+.5)*(ry+.5))));cx.fillRect(x-hw,y+dy,hw*2+1,1)}
  cx.fillStyle='rgba(160,190,235,'+(.28*a).toFixed(3)+')';cx.fillRect(x-Math.round(rx*.5),y-ry+1,Math.max(1,Math.round(rx*.6)),1);
  if(W.rain>.15){var ph=(TIME*1.25+p.ph)%1.6;if(ph<1){var rr=Math.max(1,ph*rx*.75),al=((1-ph)*.55*W.rain).toFixed(3);cx.fillStyle='rgba(210,225,255,'+al+')';for(var q=0;q<8;q++){var an=q/8*TAU;cx.fillRect(Math.round(x+Math.cos(an)*rr),Math.round(y+Math.sin(an)*rr*.6),1,1)}}}}}
var _anW=animsDraw;animsDraw=function(){wxPuddles();_anW()};
// driving through a puddle throws spray
function wxSplash(dt){if(W.wet<.2||!car||car.l||car.sp<70)return;W.sprT-=dt;if(W.sprT>0)return;
 var i=Math.floor(car.x/PUDG),j=Math.floor(car.y/PUDG),hit=null;for(var a=-1;a<=1&&!hit;a++)for(var b=-1;b<=1&&!hit;b++){var p=pudAt(i+a,j+b);if(!p||p.h>W.wet)continue;var ex=wd(car.x,p.x)/(p.rx+5),ey=wd(car.y,p.y)/(p.ry+5);if(ex*ex+ey*ey<1)hit=p}
 if(!hit)return;W.sprT=.04;var ca=Math.cos(car.a),sa=Math.sin(car.a),n=2+Math.round(car.sp/120);
 for(var k=0;k<n;k++){var sd=k%2?1:-1,sx=car.x-ca*10+(-sa)*sd*6,sy=car.y-sa*10+ca*sd*6,v=car.sp*.35;if(PART.length<260)PART.push({x:sx,y:sy,vx:-ca*v*.4+(-sa)*sd*v*(.5+Math.random()*.5),vy:-sa*v*.4+ca*sd*v*(.5+Math.random()*.5),l:1,dl:2.4,c:'rgba(196,214,246,.75)',s:2,z:0,fr:3,gr:0})}}
// ---- rain streaks and splashes, drawn on screen over everything (light, so the road stays readable)
function wxScreen(){if(W.rain<.02||!cx)return;var cw=cx.canvas.width,chh=cx.canvas.height,sc=SSC||1,dt=1/60;
 var sa=W.wdir+(camRot()?-Math.PI/2-(cam.a||0):0),wx=Math.cos(sa)*(.15+W.wind*.9),wy=Math.sin(sa)*(.15+W.wind*.9),dx=wx+.18,dy=wy+1,dl=Math.hypot(dx,dy);dx/=dl;dy/=dl;
 var n=Math.round(170*W.rain),D=W.drops,spd=chh*1.1;function nd(d){d.x=Math.random()*(cw+40)-20;d.y=Math.random()*(chh+40)-20;d.l=.6+Math.random()*.6;d.t=0;d.life=.12+Math.random()*.22;return d}
 while(D.length<n){var q=nd({});q.t=Math.random()*q.life;D.push(q)}if(D.length>n)D.length=n;
 cx.save();cx.setTransform(1,0,0,1,0,0);cx.globalCompositeOperation='source-over';cx.strokeStyle='rgba(196,210,240,'+(.16+.16*W.rain).toFixed(3)+')';cx.lineWidth=Math.max(1,sc*.8);cx.beginPath();
 for(var i=0;i<D.length;i++){var d=D[i];d.t+=dt;if(d.t>d.life)nd(d);d.x+=dx*spd*dt*d.l;d.y+=dy*spd*dt*d.l;var L=sc*(7+d.l*7);cx.moveTo(d.x,d.y);cx.lineTo(d.x-dx*L,d.y-dy*L)}
 cx.stroke();
 var P=W.spl;if(P.length<Math.round(26*W.rain)&&Math.random()<.9)P.push({x:Math.random()*cw,y:Math.random()*chh,t:0});cx.fillStyle='rgba(205,220,250,.45)';
 for(i=P.length-1;i>=0;i--){var s=P[i];s.t+=dt;if(s.t>.28){P.splice(i,1);continue}var r=sc*(1+s.t*9),q=Math.max(1,Math.round(sc*.8));cx.globalAlpha=1-s.t/.28;cx.fillRect(s.x-r,s.y,q,q);cx.fillRect(s.x+r,s.y,q,q);cx.fillRect(s.x,s.y-r*.6,q,q);cx.fillRect(s.x,s.y+r*.6,q,q)}
 cx.globalAlpha=1;cx.restore()}
var _rnW=render;render=function(){_rnW();wxScreen()};
// ---- wind: blowing leaves, petals and paper; smoke carried downwind; trees swaying; flags fluttering
var DEBC=['#5aa860','#2f7a46','#d8a040','#c86a30','#8a5a34','#ffb3d1','#f4f0f6'];
function wxDebris(dt){var n=W.wind>.32?Math.round((W.wind-.32)/.68*46):0,D=W.deb,wx=Math.cos(W.wdir),wy=Math.sin(W.wdir),v=50+W.wind*150;
 while(D.length<n)D.push({x:cam.x+(Math.random()-.5)*VW,y:cam.y+(Math.random()-.5)*VH,c:DEBC[Math.floor(Math.random()*DEBC.length)],ph:Math.random()*6,k:.6+Math.random()*.8});if(D.length>n)D.length=n;
 for(var i=0;i<D.length;i++){var d=D[i];d.ph+=dt*(5+W.wind*5);var fl=Math.sin(d.ph)*.5;d.x=wrap(d.x+(wx*v*d.k-wy*fl*40)*dt);d.y=wrap(d.y+(wy*v*d.k+wx*fl*40)*dt);
  var x=wd(d.x,cam.x)+VW/2,y=wd(d.y,cam.y)+VH/2;if(x<-30||y<-30||x>VW+30||y>VH+30){d.x=wrap(cam.x-wx*(VW/2+20)+(-wy)*(Math.random()-.5)*VH);d.y=wrap(cam.y-wy*(VH/2+20)+wx*(Math.random()-.5)*VW);continue}
  cx.fillStyle=d.c;var f=Math.floor(d.ph)%3;if(f===0)cx.fillRect(Math.round(x),Math.round(y),2,1);else if(f===1)cx.fillRect(Math.round(x),Math.round(y),1,2);else cx.fillRect(Math.round(x),Math.round(y),2,2)}}
var _smW=smokeUpdate;smokeUpdate=function(dt){_smW(dt);var k=W.wind*60*dt,wx=Math.cos(W.wdir)*k,wy=Math.sin(W.wdir)*k;for(var i=0;i<SMOKE.length;i++){SMOKE[i].vx+=wx;SMOKE[i].vy+=wy}};
var _fxW=fxUpdate;fxUpdate=function(dt){_fxW(dt);if(W.wind<.3)return;var k=W.wind*40*dt,wx=Math.cos(W.wdir)*k,wy=Math.sin(W.wdir)*k;for(var i=0;i<PART.length;i++){PART[i].vx+=wx;PART[i].vy+=wy}};
function wxTrees(){if(W.wind<.28||!TREES||!TREES.length)return;var ox=cam.ox,oy=cam.oy,am=(W.wind-.2)*2,wx=Math.cos(W.wdir),wy=Math.sin(W.wdir),f=2.2+W.wind*3.2,t=TIME;
 PH.q(ox-14,oy-14,ox+VW+14,oy+VH+14,function(p){if(p.hid||p.gone||p.brk||(p.t!==P_TREE&&p.t!==P_SAKURA))return;var o=am*(Math.sin(t*f+p.x*.045+p.y*.031)*.6+.45),dx=Math.round(wx*o),dy=Math.round(wy*o);if(!dx&&!dy)return;
  var x=Math.round(SX(p.x)),y=Math.round(SY(p.y));if(x<-14||y<-14||x>VW+14||y>VH+14)return;var hv=hsh(p.x|0,p.y|0,1),tr=p.t===P_TREE?TREES[p.f?5+(hv<.5?0:1):Math.floor(hv*3)]:TREES[3+(hv<.5?0:1)];if(!tr)return;
  cx.drawImage(tr,x-(tr.width>>1)+dx,y-(tr.height>>1)-3+dy)})}
var _ltW=landTopDraw;landTopDraw=function(){wxTrees();_ltW()};
// event flag flutters with the wind (and points downwind)
zBeacon=function(x,y){if(x<-30||y<-30||x>VW+30||y>VH+30)return;var ph=(TIME*1.2)%1,r=5+ph*14;cx.fillStyle='rgba(255,90,160,'+(1-ph).toFixed(2)+')';for(var k=0;k<16;k++){var a=k/16*TAU;cx.fillRect(Math.round(x+Math.cos(a)*r)-1,Math.round(y+Math.sin(a)*r)-1,2,2)}
 var by=y-10+Math.round(Math.sin(TIME*3)*2),dir=Math.cos(W.wdir+(ROTD?-Math.PI/2-(cam.a||0):0))<-.2?-1:1,fr=4+W.wind*10,amp=.6+W.wind*1.6;
 cx.fillStyle='#e8e8f0';cx.fillRect(x,by-9,1,11);cx.fillStyle='#1a1426';cx.fillRect(x-1,by-9,1,12);
 for(var c=0;c<8;c++){var o=Math.round(Math.sin(TIME*fr-c*.9)*amp*(c/7)),fx=dir>0?x+1+c:x-c,top=by-9+o;cx.fillStyle='#1a1426';cx.fillRect(fx,top-1,1,7);cx.fillStyle=c===7?'#d84a88':'#ff5aa0';cx.fillRect(fx,top,1,5);if(c===1||c===4){cx.fillStyle='#fff';cx.fillRect(fx,top+1+(c===4?1:0),1,1)}}};
// ---- sound: soft rain hiss and a low wind rumble (through the game's own audio, off with the sound setting)
function wxSound(){if(!S.snd||typeof AU==='undefined'||!AU||!AU.buf)return;try{var C=AU.c;
 if(!AU.wx){var mk=function(lo,hi){var s=C.createBufferSource();s.buffer=AU.buf;s.loop=true;var a=C.createBiquadFilter();a.type='highpass';a.frequency.value=lo;var b=C.createBiquadFilter();b.type='lowpass';b.frequency.value=hi;var g=C.createGain();g.gain.value=0;s.connect(a);a.connect(b);b.connect(g);g.connect(AU.m);s.start();return g};AU.wx={r:mk(500,3200),w:mk(40,380)}}
 AU.wx.r.gain.setTargetAtTime(W.rain*.16,C.currentTime,.3);AU.wx.w.gain.setTargetAtTime(Math.max(0,W.wind-.3)*.22*(.75+.25*Math.sin(TIME*.9)),C.currentTime,.4)}catch(e){}}
// ---- minimap: weather icon next to the clock
var _tmW=todMini;todMini=function(g){_tmW(g);var k=W.rain>.4?3:W.wind>.6?4:W.cloud>.5?2:0;if(!k)return;var D=DPR,ts=todStr();g.font=(11*D)+'px TokyoPx,monospace';var tw=g.measureText(ts).width,Wd=tw+15*D,H=12*D,x0=MMS-Wd-2*D,y0=MMS-H-2*D,bx=Math.round(x0-H-2*D),u=Math.max(1,Math.round(D));
 g.fillStyle='rgba(12,10,26,.85)';g.fillRect(bx,y0,H,H);var ix=bx+2*u,iy=Math.round(y0+2*u);
 if(k===4){g.fillStyle='#d8e4ff';g.fillRect(ix,iy+u,6*u,u);g.fillRect(ix+2*u,iy+3*u,6*u,u);g.fillRect(ix,iy+5*u,5*u,u);g.fillRect(ix+6*u,iy,u,u);g.fillRect(ix+8*u,iy+2*u,u,u)}
 else{g.fillStyle=k===3?'#9aa8c8':'#d8e4ff';g.fillRect(ix+u,iy+u,6*u,3*u);g.fillRect(ix+2*u,iy,3*u,u);g.fillRect(ix,iy+2*u,8*u,2*u);if(k===3){g.fillStyle='#6ab0ff';g.fillRect(ix+u,iy+5*u,u,2*u);g.fillRect(ix+4*u,iy+5*u,u,2*u);g.fillRect(ix+6*u,iy+6*u,u,2*u)}}};
// ---- settings
var _saW=setAction;setAction=function(a,i){if(a==='wx'){S.wx=i;W.fast=1;if(i)W.k=i;save();renderSet();return}_saW(a,i)};

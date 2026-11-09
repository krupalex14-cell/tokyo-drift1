// ===== EFFECTS & AMBIENT LIFE =====
var PART=[],BIRDS=[],BOATS=[],CLOUDS=[],lastThr=0,flameT=0;
function fxSpark(x,y,n,vx,vy,z){for(var i=0;i<n&&PART.length<260;i++){var a=Math.random()*TAU,s=40+Math.random()*160;PART.push({x:x,y:y,vx:(vx||0)*.25+Math.cos(a)*s,vy:(vy||0)*.25+Math.sin(a)*s,l:1,dl:2.5+Math.random()*3,c:Math.random()<.5?'#fff6c0':'#ffb030',s:1,z:z|0,fr:5})}}
function fxDebris(x,y,col,n,z){for(var i=0;i<n&&PART.length<260;i++){var a=Math.random()*TAU,s=30+Math.random()*90;PART.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,dl:.45+Math.random()*.4,c:Math.random()<.6?col:'#2a2e3a',s:Math.random()<.5?2:1,z:z|0,fr:4})}}
function fxFlame(x,y,a,z){var ca=Math.cos(a),sa=Math.sin(a);for(var i=0;i<6&&PART.length<260;i++){var s=40+Math.random()*80,sp=(Math.random()-.5)*.5;PART.push({x:x,y:y,vx:-Math.cos(a+sp)*s+car.vx*.8,vy:-Math.sin(a+sp)*s+car.vy*.8,l:1,dl:7+Math.random()*4,c:['#fff4b0','#ffb030','#ff6020'][i%3],s:i<2?3:2,z:z|0,fr:3})}}
function fxPuff(x,y,z){if(PART.length<260)PART.push({x:x,y:y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,l:1,dl:1.2,c:'rgba(150,150,170,.5)',s:3,z:z|0,fr:1,gr:1})}
function fxUpdate(dt){for(var i=PART.length-1;i>=0;i--){var p=PART[i];p.l-=dt*p.dl;var k=Math.exp(-p.fr*dt);p.vx*=k;p.vy*=k;p.x=wrap(p.x+p.vx*dt);p.y=wrap(p.y+p.vy*dt);if(p.l<=0)PART.splice(i,1)}}
function fxDraw(z){for(var i=0;i<PART.length;i++){var p=PART[i];if(p.z!==z)continue;var s=p.gr?Math.round(p.s+(1-p.l)*5):p.s,x=SX(p.x)-(s>>1),y=SY(p.y)-(s>>1);if(x<-8||y<-8||x>VW+8||y>VH+8)continue;cx.globalAlpha=Math.min(1,p.l*1.6);cx.fillStyle=p.c;cx.fillRect(x,y,s,s)}cx.globalAlpha=1}
function popup(t,cls){var d=document.createElement('div');d.className='pop'+(cls?' '+cls:'');d.textContent=L(t);var r=cvRect();var q=scrXY(car.x,car.y);d.style.left=(r.left+q[0]/RVW*r.width)+'px';d.style.top=(r.top+q[1]/RVH*r.height-26)+'px';$('hud').appendChild(d);setTimeout(function(){d.remove()},1300)}
// birds
function birdsUpdate(dt){
 for(var i=BIRDS.length-1;i>=0;i--){var b=BIRDS[i];if(Math.abs(wd(b.x,car.x))>700||Math.abs(wd(b.y,car.y))>700||(b.st&&b.t>5)){BIRDS.splice(i,1);continue}
  b.t+=dt;if(!b.st){var dx=wd(b.x,car.x),dy=wd(b.y,car.y),d=Math.hypot(dx,dy);if(d<75&&car.sp>20||d<30){b.st=1;b.t=0;var l=d||1,s=70+Math.random()*50,a=Math.atan2(dy,dx)+(Math.random()-.5)*1.2;b.vx=Math.cos(a)*s;b.vy=Math.sin(a)*s;auChirp()}else if(Math.random()<dt*.6){b.x=wrap(b.x+(Math.random()-.5)*3);b.y=wrap(b.y+(Math.random()-.5)*3)}}
  else{b.x=wrap(b.x+b.vx*dt);b.y=wrap(b.y+b.vy*dt);b.vy-=dt*8}}
 if(BIRDS.length<40&&Math.random()<dt*1.5){var an=Math.random()*TAU,d2=180+Math.random()*320,px=wrap(car.x+Math.cos(an)*d2),py=wrap(car.y+Math.sin(an)*d2);if(typeAt(px,py)===1&&Math.abs(wd(px,cam.x))>VW/2-10){var n=3+Math.floor(Math.random()*5);for(var k=0;k<n;k++)BIRDS.push({x:wrap(px+(Math.random()-.5)*14),y:wrap(py+(Math.random()-.5)*14),st:0,t:0,vx:0,vy:0,ph:Math.random()*6,c:Math.random()<.2?'#d8d8e0':'#7a7e90'})}}
}
function birdsDraw(fly){for(var i=0;i<BIRDS.length;i++){var b=BIRDS[i];if(!!b.st!==fly)continue;var x=SX(b.x),y=SY(b.y);if(x<-6||y<-6||x>VW+6||y>VH+6)continue;cx.fillStyle=b.c;if(!b.st){cx.fillRect(x,y,2,2);cx.fillStyle='#3a3e4e';cx.fillRect(x+((b.ph|0)%2?2:-1),y,1,1)}else{var f=Math.floor(TIME*14+b.ph)%2;cx.fillStyle='rgba(10,8,30,.25)';cx.fillRect(x+4,y+8,3,1);cx.fillStyle=b.c;cx.fillRect(x,y,1,1);if(f){cx.fillRect(x-2,y-1,2,1);cx.fillRect(x+1,y-1,2,1)}else{cx.fillRect(x-2,y+1,2,1);cx.fillRect(x+1,y+1,2,1)}}}}
// boats
function boatsInit(){BOATS=[];for(var i=0;i<16;i++){var x=i*WS/16+Math.random()*300,dir=Math.random()<.5?1:-1;BOATS.push({x:x,off:(Math.random()-.5)*.9,v:(18+Math.random()*16)*dir,k:i%3})}}
function boatsUpdate(dt){BOATS.forEach(function(b){b.x=wrap(b.x+b.v*dt);b.y=rivY(b.x)+b.off*rivHW(b.x)})}
function boatsDraw(){BOATS.forEach(function(b){var x=SX(b.x),y=SY(b.y);if(x<-30||y<-20||x>VW+30||y>VH+20)return;if(typeAt(b.x,b.y)!==5)return;var d=b.v>0?1:-1;
 cx.fillStyle='rgba(200,225,255,.5)';for(var k=1;k<5;k++){var o=(TIME*30+k*5)%22;cx.fillRect(x-d*(10+o),y-2-(k&1),2,1);cx.fillRect(x-d*(10+o),y+2+(k&1),2,1)}
 cx.fillStyle='rgba(10,20,60,.4)';cx.fillRect(x-8,y-1,17,5);
 var hull=['#f0f0f0','#e03a3a','#3a6ab8'][b.k];cx.fillStyle='#16161e';cx.fillRect(x-9,y-3,18,6);cx.fillStyle=hull;cx.fillRect(x-8,y-2,16,4);cx.fillRect(x+d*8,y-1,d,2);cx.fillStyle='#c8ccd8';cx.fillRect(x-4-d,y-2,7,4);cx.fillStyle='#2a3048';cx.fillRect(x-2-d+d*2,y-1,3,2)})}
// clouds
function cloudsInit(){CLOUDS=[];for(var i=0;i<14;i++)CLOUDS.push({x:Math.random()*WS,y:Math.random()*WS,rx:180+Math.random()*220,ry:110+Math.random()*120})}
function cloudsDraw(dt){cx.fillStyle='rgba(8,6,36,.11)';CLOUDS.forEach(function(c){c.x=wrap(c.x+11*dt);c.y=wrap(c.y+4*dt);var x=wd(c.x,cam.x)+VW/2,y=wd(c.y,cam.y)+VH/2;if(x<-c.rx||y<-c.ry||x>VW+c.rx||y>VH+c.ry)return;cx.beginPath();cx.ellipse(x,y,c.rx,c.ry,0,0,TAU);cx.ellipse(x+c.rx*.5,y-c.ry*.3,c.rx*.6,c.ry*.6,0,0,TAU);cx.fill()})}
// building animations
var BBC=[['#ff4db8','#ffd23a'],['#38e8ff','#ffffff'],['#7dff6a','#1a1a28'],['#ff7a3a','#fff4c0'],['#b06aff','#38e8ff'],['#ffd23a','#e03a3a']];
function ledDraw(x,y,W,Hh,s0,t){var o={s:s0};var sc=Math.floor(t*10);cx.fillStyle='#0c0a18';cx.fillRect(x,y,W,Hh);var md2=(Math.floor(t/5)+o.s)%3;
    if(md2===0){for(var ry=0;ry<Hh;ry+=2){var hue=(ry*4+t*80)%360;cx.fillStyle='hsl('+hue+',90%,'+(45+15*Math.sin(ry*.3+t*3))+'%)';cx.fillRect(x+1,y+ry,W-2,1)}cx.fillStyle='#ffffff';var tx=Math.round(x+W/2-6+Math.sin(t*2)*4);cx.fillRect(tx,y+Hh/2-4,12,2);cx.fillRect(tx,y+Hh/2+2,12,2)}
    else if(md2===1){for(var k=0;k<14;k++){var px=x+1+((k*7+sc)%(W-3)),py=y+((k*13+sc*2)%(Hh-3));cx.fillStyle=['#ff4db8','#38e8ff','#ffd23a','#7dff6a'][k%4];cx.fillRect(px,py,2,2)}cx.fillStyle='rgba(255,77,184,.35)';cx.fillRect(x,y+((sc*2)%Hh),W,3)}
    else{var cyc=(t*.6)%1;for(var rr=0;rr<5;rr++){var rad=((cyc+rr/5)%1)*W*.7;cx.fillStyle=rr%2?'#38e8ff':'#ff4db8';for(var q4=0;q4<16;q4++){var a6=q4/16*TAU;cx.fillRect(Math.round(x+W/2+Math.cos(a6)*rad*.6),Math.round(y+Hh/2+Math.sin(a6)*rad),1,1)}}}
    cx.fillStyle='rgba(255,255,255,.08)';for(var gl=0;gl<Hh;gl+=3)cx.fillRect(x,y+gl,W,1)}
function animsDraw(){
 var ox=cam.ox,oy=cam.oy,t=TIME;
 for(var j=Math.floor(oy/CH);j<=Math.floor((oy+VH)/CH);j++)for(var i=Math.floor(ox/CH);i<=Math.floor((ox+VW)/CH);i++){var ch=chunkGet(i,j);if(!ch||!ch.an||!ch.an.length)continue;var bx=i*CH-ox,by=j*CH-oy,L=ch.an;
  for(var k=0;k<L.length;k++){var o=L[k],x=bx+o.x,y=by+o.y;if(x<-50||y<-20||x>VW+10||y>VH+10)continue;
   if(o.t==='fan'){var f=Math.floor(t*14+o.x*.3)%2;cx.fillStyle=o.b?'#b4bacb':'#9aa2b4';if(f){cx.fillRect(x-1,y,3,1);cx.fillRect(x,y-1,1,3)}else{cx.fillRect(x-1,y-1,1,1);cx.fillRect(x+1,y-1,1,1);cx.fillRect(x-1,y+1,1,1);cx.fillRect(x+1,y+1,1,1);cx.fillRect(x,y,1,1)}}
   else if(o.t==='blink'){var on=((t*(o.c?1.6:.9)+o.x*.013+o.y*.007)%1)<(o.c?.15:.5);if(on){cx.fillStyle=o.c?'#ffffff':'#ff3040';cx.fillRect(x-1,y-1,2,2);cx.fillStyle=o.c?'rgba(255,255,255,.3)':'rgba(255,48,64,.3)';cx.fillRect(x-2,y-2,4,4)}}
   else if(o.t==='neon'){var fl=hsh(Math.floor(t*9),o.x+o.y*7,3);if(fl<.04)continue;cx.globalAlpha=.25+.12*Math.sin(t*5+o.x);cx.fillStyle=o.c;cx.fillRect(x-2,y-2,o.w+4,o.h+4);cx.globalAlpha=1;if(!o.soft){cx.fillStyle=o.c;cx.fillRect(x,y,o.w,o.h);cx.fillStyle='#16161e';for(var q=1+(Math.floor(t*3)%3);q<o.h-1;q+=3)cx.fillRect(x+1,y+q,1,1)}}
   else if(o.t==='koi'){var ka=t*o.sp+o.ph,kx=Math.round(x+Math.cos(ka)*o.rx),ky=Math.round(y+Math.sin(ka)*o.ry),dx=-Math.sin(ka)*o.rx,dy=Math.cos(ka)*o.ry,dl=Math.hypot(dx,dy)||1;dx/=dl;dy/=dl;var kc=o.c===0?'#ff7a30':o.c===1?'#f4f4f4':'#ffc040';cx.fillStyle='rgba(10,20,50,.35)';cx.fillRect(kx+1,ky+1,2,2);cx.fillStyle=kc;cx.fillRect(kx,ky,1,1);cx.fillRect(Math.round(kx-dx),Math.round(ky-dy),1,1);cx.fillRect(Math.round(kx-dx*2),Math.round(ky-dy*2),1,1);if(o.c===1){cx.fillStyle='#ff6a30';cx.fillRect(Math.round(kx-dx),Math.round(ky-dy),1,1)}cx.fillStyle=kc;cx.globalAlpha=.6;cx.fillRect(Math.round(kx-dx*3+dy*(Math.sin(t*9+o.ph)>0?1:-1)),Math.round(ky-dy*3-dx*(Math.sin(t*9+o.ph)>0?1:-1)),1,1);cx.globalAlpha=1}
   else if(o.t==='smoke'||o.t==='steam'){var big=o.t==='steam';for(var q2=0;q2<4;q2++){var ph=((t*(big?.5:.7)+q2*.25+(o.ph||0))%1),sz=Math.round((big?3:1)+ph*(big?7:4));cx.globalAlpha=(1-ph)*(big?.45:.4);cx.fillStyle=big?'#f4f8ff':'#d8d8e4';cx.fillRect(Math.round(x+Math.sin(ph*5+q2+o.x)*3*ph-sz/2),Math.round(y-ph*(big?22:16)-sz/2),sz,sz)}cx.globalAlpha=1}
   else if(o.t==='ring'){var n2=24;for(var q3=0;q3<n2;q3++){var a5=q3/n2*TAU,on2=((q3+Math.floor(t*8))%4)===0;cx.globalAlpha=on2?.95:.35;cx.fillStyle=o.c;cx.fillRect(Math.round(x+Math.cos(a5)*o.r),Math.round(y+Math.sin(a5)*o.r),1,1)}cx.globalAlpha=1}
   else if(o.t==='cl'){var tw=(Math.sin(t*3+o.x*.3+o.y*.2)+1)/2;cx.globalAlpha=.4+tw*.6;cx.fillStyle='#e8f4ff';cx.fillRect(x,y,1,1);cx.globalAlpha=.25*tw;cx.fillRect(x-1,y-1,3,3);cx.globalAlpha=1}
   else if(o.t==='led'){ledDraw(x,y,o.w,o.h,o.s,t)}
   else if(o.t==='jet'){for(var qj=0;qj<7;qj++){var pj=((t*1.1+qj/7+o.x*.013)%1),hj=Math.sin(pj*Math.PI)*12;cx.fillStyle=qj%2?'#e8f4ff':'#9ad0ff';cx.fillRect(Math.round(x+(pj-.5)*8),Math.round(y-hj),1,2)}cx.globalAlpha=.5;cx.fillStyle='#cfe8ff';cx.fillRect(x-4,y,9,1);cx.globalAlpha=1}
   else if(o.t==='ripple'){var rp=((t*.6+o.x*.13)%2);if(rp<1){var rr=Math.round(1+rp*4);cx.globalAlpha=(1-rp)*.5;cx.fillStyle='#8ab8e8';cx.fillRect(x-rr,y,1,1);cx.fillRect(x+rr,y,1,1);cx.fillRect(x,y-rr,1,1);cx.fillRect(x,y+rr,1,1);cx.globalAlpha=1}}
   else if(o.t==='lant'){cx.globalAlpha=.35+.2*Math.sin(t*3+o.x);cx.fillStyle='#ff9a50';cx.fillRect(x-2,y-2,5,5);cx.globalAlpha=1}
   else if(o.t==='bb'){var c=BBC[o.s],md=(Math.floor(t/3.5)+o.s)%3,w=o.w,h=o.h;cx.fillStyle='#14122a';cx.fillRect(x,y,w,h);
    if(md===0){cx.fillStyle=c[0];var sh=Math.floor(t*14)%(w+30);for(var q=0;q<6;q++){var lx=x+w-sh+q*6;if(lx<x||lx>x+w-4)continue;cx.fillRect(lx,y+3,4,h-6);cx.fillStyle=q%2?c[1]:c[0]}}
    else if(md===1){var p=(Math.sin(t*2+o.s)+1)/2;cx.fillStyle=c[0];cx.fillRect(x+1,y+1,Math.round((w-2)*p),h-2);cx.fillStyle=c[1];cx.fillRect(x+2,y+(h>>1)-1,w-4,2)}
    else{cx.fillStyle=c[Math.floor(t*2)%2];cx.fillRect(x+3,y+2,h-4,h-4);for(var q2=0;q2<3;q2++)cx.fillRect(x+h+2+q2*((w-h-4)/3|0),y+(h>>1)-1,((w-h-4)/3|0)-2,3)}}
  }}
}
// vehicle lights (drawn in rotated vehicle space)
function vehLights(a,sp,isP){
 var L=sp.width,H=sp.height,hx=-L/2,hy=-H/2,t=TIME;
 var bk=isP?(K.b&&car.fw>0?1:0):a.bk;
 if(bk>.3){cx.fillStyle='#ff2a3a';cx.fillRect(hx,hy+2,1,3);cx.fillRect(hx,-hy-5,1,3);cx.fillStyle='rgba(255,40,60,.35)';cx.fillRect(hx-3,hy+1,3,5);cx.fillRect(hx-3,-hy-6,3,5)}
 if(!isP){var bl=(t*2.2+(a.x|0)*.01)%1<.5;
  if(a.phy&&bl){cx.fillStyle='#ffb020';cx.fillRect(hx,hy+1,2,2);cx.fillRect(hx,-hy-3,2,2);cx.fillRect(-hx-2,hy+1,2,2);cx.fillRect(-hx-2,-hy-3,2,2)}
  else if(a.tn&&bl){var yy=a.tn>0?-hy-3:hy+1;cx.fillStyle='#ffb020';cx.fillRect(hx,yy,2,2);cx.fillRect(-hx-2,yy,2,2)}
  if(a.vt===4){var ph=Math.floor(t*6)%2;cx.fillStyle=ph?'#ff2a3a':'#3a6aff';cx.fillRect(0,hy+3,2,3);cx.fillStyle=ph?'#3a6aff':'#ff2a3a';cx.fillRect(0,-hy-6,2,3);cx.fillStyle=ph?'rgba(255,42,58,.25)':'rgba(58,106,255,.25)';cx.fillRect(-4,hy-3,10,H+6)}}
}

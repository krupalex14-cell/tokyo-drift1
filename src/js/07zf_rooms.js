// ===== rooms you walk into: Misha's workshop and Reiko's ramen shop =====
// the same walking as in the casino (tap the floor / arrows), plus a little director for story scenes:
// people walk to their marks, sit, lean, fall asleep on a shoulder; the old dialogue boxes play over it.

// ---------- more people: spiky hair (with or without goggles), beards; sitting poses
CHT.head.spiky={d:['...K.KK.K...','..KHKHHKHK..','..KHHHHHhK..','..KHHHHHhK..','..KHSSSSHK..','..KHKSSKHK..','..KHSSSSHK..','..KHHSSHHK..'],
 u:['...K.KK.K...','..KHKHHKHK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..'],
 s:['....K.KK....','...KHKHHK...','..KHHHHHHK..','..KHHHHHSK..','..KHHHSSSK..','..KHHHSKSK..','..KHHSSSSK..','..KHHKSSK...']};
CHT.head.spikyS={d:['...K.KK.K...','..KHKHHKHK..','..KHHHHHhK..','..KHHHHHhK..','..KSSSSSSK..','..KSKSSKSK..','..KSSSSSSK..','...KKSSKK...'],
 u:['...K.KK.K...','..KHKHHKHK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..','...KKSSKK...'],
 s:['....K.KK....','...KHKHHK...','..KHHHHHHK..','..KHHHHHSK..','..KHHHSSSK..','..KHHHSKSK..','..KhHSSSSK..','...KKKSSK...']};
// Hana's own jacket: orange all over, a beige turtleneck at the collar, a zip down the front
CHT.top.zip={d:['..KTWWWWTK..','.KTTTWWTTTK.','.KTtTttTtTK.','.KTtTttTtTK.','.KGKTttTKGK.'],u:['..KTTTTTTK..','.KTTTTTTTTK.','.KTtTTTTtTK.','.KTtTTTTtTK.','.KGKTTTTKGK.'],s:['...KTTTWK...','...KTTTTK...','...KTtTTK...','...KTtTTK...','...KTGTTK...']};
CHT.head.hana={d:['..KK....KK..','..KHKKKKHK..','..KHHHHHhK..','..KHHHHHhK..','..KHSSSSHK..','..KHKSSKHK..','..KHSSSSHK..','..KHHSSHHK..'],
 u:['..KK....KK..','..KHKKKKHK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..'],
 s:['..KK..KK....','..KHKKHHK...','..KHHHHHHK..','..KHHHHHSK..','..KHHHSSSK..','..KHHHSKSK..','..KHHSSSSK..','..KHHKSSK...']};
// 6 rows of 12x18: down/up/left/right walking (3 frames), then sitting seen from behind and from the front (straight, leaning left, leaning right)
function ixSheet(o){var c=mkCanvas(48,108),g=c.getContext('2d');// cells are 16 wide (2px spare each side, so a leaning head is not cut off)
 var pal={K:'#14101e',H:o.H,h:o.h||shadeHex(o.H,.72),S:o.S||'#f2cfa8',V:o.V||'#1a1a2e',v:o.v||'#6a7ab0',T:o.T,t:o.t||shadeHex(o.T,.74),W:o.W||'#f0eef4',A:o.A||'#c8202a',P:o.P||'#22232c',p:o.p||shadeHex(o.P||'#22232c',.75),B:o.B||'#14141c',G:o.G||o.S||'#f2cfa8',Y:'#e8b840',O:'#bfe0f0',e:o.e||'#1a2a6a',r:o.r||'#f4a4b0'};
 function put(rows,ox,oy,mir,hdx,hdy){for(var y=0;y<rows.length;y++)for(var x=0;x<12;x++){var ch=rows[y][x];if(ch==='.')continue;g.fillStyle=pal[ch]||'#ff00ff';var px=mir?11-x:x,yy=y+(y<8?hdy||0:0),xx=px+(y<8?hdx||0:0);if(yy<0||yy>17)continue;g.fillRect(ox+xx,oy+yy,1,1)}}
 function head(k){var h=CHT.head[o.hair||'short'][k].slice();if(o.gog){if(k==='d')h[3]='..KYOYYOYK..';else if(k==='u')h[3]='..KYYYYYYK..';else h[3]='..KHHYYOYK..'}
  if(o.shades&&k==='d')h[5]='..KSKKKKSK..';if(o.shades&&k==='s')h[5]='..KHHHKKKK..';if(o.beard&&k==='d'){h[6]='..KSHHHHSK..';h[7]='...KKHHKK...'}if(o.beard&&k==='s')h[6]='..KhHSHHHK..';return h}
 [['d',0],['u',1],['s',3]].forEach(function(q){var k=q[0],row=q[1],hd=head(k),tp=CHT.top[o.top||'plain'][k],lg=CHT.legs[o.legs||'pants'][k==='s'?'s':'d'];
  for(var f=0;f<3;f++){var rows=hd.concat(tp,lg[f]);put(rows,f*16+2,row*18,false);if(k==='s')put(rows,f*16+2,2*18,true)}});
 // sitting: three rows lower, the legs folded under the seat; leaning moves the head two pixels to a side and one down
 [['u',4],['d',5]].forEach(function(q){var k=q[0],row=q[1],hd=head(k),tp=CHT.top[o.top||'plain'][k],front=k==='d',legs=o.legs==='dress'?['.KTTTTTTTTK.','..KKKKKKKK..']:['..KPPPPPPK..','..KPPKKPPK..'];
  if(front)legs=o.legs==='dress'?['.KTTTTTTTTK.','..KSK..KSK..','..KSK..KSK..','.KBBK..KBBK.']:['.KPPPPPPPPK.','..KpK..KpK..','..KPK..KPK..','.KBBK..KBBK.'];
  for(var f=0;f<3;f++){var dx=f===1?-2:f===2?2:0,dy=f?(front?1:2):0,top0=front?1:3,rows=(front?['............']:['............','............','............']).concat(hd,tp,legs);
   for(var y=0;y<18;y++)for(var x=0;x<12;x++){var ch=rows[y][x];if(ch==='.')continue;var inHead=y>=top0&&y<top0+8;g.fillStyle=pal[ch]||'#ff00ff';var X=x+(inHead?dx:0),Y=y+(inHead?dy:0);if(X<-2||X>13||Y>17)continue;g.fillRect(f*16+2+X,row*18+Y,1,1)}}});
 return c}
var IXP={
 hero:CIP.hero,
 hana:{H:'#4a6ae8',h:'#2e44a8',S:'#f6e2d0',T:'#f08a30',t:'#c86a1c',W:'#efe2c8',A:'#efe2c8',P:'#2e3a5a',B:'#3a2a24',hair:'hana',top:'zip'},
 reiko:{H:'#dcdfea',h:'#a8acc0',S:'#f6e2d0',T:'#2a3a5a',t:'#1e2a44',W:'#f0eef4',A:'#4a7ac8',P:'#2a2e3a',hair:'long',top:'vest'},
 kir:{H:'#1c1a22',S:'#f2cfa8',T:'#e8dcc0',t:'#c8bca0',P:'#3a4a6a',hair:'spikyS'},
 ryu:{H:'#141418',S:'#e3b58e',T:'#1c1c24',W:'#f0eef4',A:'#c8ccd8',P:'#1c1c24',top:'suit',beard:1}};
var IXSH={};function ixSh(k){return IXSH[k]||(IXSH[k]=ixSheet(IXP[k]))}
// pose: 'stand' (d = 0 down 1 up 2 left 3 right, f = step) or 'sit' (d 1 = seen from behind, 0 = from the front; lean -1/0/1)
function ixDraw(g,k,x,y,d,f,pose,lean,cut){var sh=ixSh(k),row,col;if(pose==='sit'){row=d===0?5:4;col=lean<0?1:lean>0?2:0}else{row=d;col=f||0}
 var n=cut||18;g.fillStyle='rgba(10,6,20,.35)';if(n===18&&pose!=='sit')g.fillRect(x-4,y-1,8,2);g.drawImage(sh,col*16,row*18,16,n,x-8,y-17,16,n)}
// little signs over heads
function ixEmote(g,e,x,y,t){function R(a,b,w,h,c){g.fillStyle=c;g.fillRect(a,b,w,h)}
 if(e==='zzz'){for(var i=0;i<3;i++){var ph=((t*.7+i/3)%1),zx=x+3+Math.round(ph*6),zy=y-4-Math.round(ph*10);g.globalAlpha=1-ph;pf(g,'Z',zx,zy,'#dfe6ff');g.globalAlpha=1}}
 else if(e==='heart'){var b=Math.round(Math.sin(t*5)*1);[[1,0,2],[4,0,2],[0,1,7],[0,2,7],[1,3,5],[2,4,3],[3,5,1]].forEach(function(q){R(x-3+q[0],y-9+q[1]+b,q[2],1,'#ff5a8a')});R(x-2,y-8+b,1,1,'#ffc0d8')}
 else if(e==='!'){R(x-1,y-12,3,6,'#14101e');R(x,y-11,1,4,'#ffd23a');R(x-1,y-5,3,3,'#14101e');R(x,y-4,1,1,'#ffd23a')}
 else if(e==='anger'){var s=Math.floor(t*4)%2;R(x+3,y-9+s,2,1,'#ff3a3a');R(x+6,y-9+s,2,1,'#ff3a3a');R(x+3,y-6+s,2,1,'#ff3a3a');R(x+6,y-6+s,2,1,'#ff3a3a');R(x+5,y-8+s,1,2,'#ff3a3a');R(x+4,y-7+s,3,1,'#ff3a3a')}
 else if(e==='...'){for(var j=0;j<3;j++)if(Math.floor(t*3)%4>j)R(x-4+j*3,y-6,2,2,'#f4f0e8')}
 else if(e==='phone'){R(x+3,y-12,5,8,'#14101e');R(x+4,y-11,3,6,Math.floor(t*6)%2?'#9fe0ff':'#6ab0e0');g.globalAlpha=.35;R(x+1,y-14,9,12,'#9fe0ff');g.globalAlpha=1}
 else if(e==='spark'){for(var k=0;k<5;k++){var a=t*9+k*1.3,r=2+((t*7+k)%3);R(Math.round(x+Math.cos(a)*r),Math.round(y+Math.sin(a)*r*.6),1,1,k%2?'#ffd23a':'#ffffff')}}}

// ---------- the walking room
var IX={on:false,r:null,x:0,y:0,d:1,ph:0,mv:false,pose:'stand',lean:0,path:null,hs:null,bub:null,fade:0,cx:0,cy:0,scn:null,st:null,car:null,hint:0,em:null};
var IXR={};
function ixGrid(R){if(R.G)return R.G;var W=Math.ceil(R.w/4),H=Math.ceil(R.h/4),G=new Uint8Array(W*H),r=3;R.GW=W;R.GH=H;
 for(var j=0;j<H;j++)for(var i=0;i<W;i++){var x=i*4+2,y=j*4+2,b=0;for(var k=0;k<R.ob.length&&!b;k++){var o=R.ob[k];if(x>o[0]-r&&x<o[0]+o[2]+r&&y>o[1]-r&&y<o[1]+o[3]+r)b=1}G[j*W+i]=b}
 (R.open||[]).forEach(function(o){for(var j=0;j<H;j++)for(var i=0;i<W;i++){var x=i*4+2,y=j*4+2;if(x>=o[0]&&x<o[0]+o[2]&&y>=o[1]&&y<o[1]+o[3])G[j*W+i]=0}});return R.G=G}
function ixFree(x,y){var R=IX.r,G=ixGrid(R),i=Math.floor(x/4),j=Math.floor(y/4);if(i<0||j<0||i>=R.GW||j>=R.GH)return false;return !G[j*R.GW+i]}
function ixPath(x0,y0,x1,y1,force){var R=IX.r,G=ixGrid(R),W=R.GW,H=R.GH,s=Math.floor(y0/4)*W+Math.floor(x0/4),t=Math.floor(y1/4)*W+Math.floor(x1/4);if(t<0||t>=W*H)return null;
 var blocked=function(n){return G[n]&&n!==s&&!(force&&n===t)};
 if(blocked(t)){var best=-1,bd=1e9;for(var k=0;k<W*H;k++){if(G[k])continue;var dx=(k%W)*4+2-x1,dy=Math.floor(k/W)*4+2-y1,d=dx*dx+dy*dy;if(d<bd){bd=d;best=k}}if(best<0||bd>28*28)return null;t=best}
 var prev=new Int32Array(W*H).fill(-1),q=[s],h=0;prev[s]=s;
 while(h<q.length){var c=q[h++];if(c===t)break;var cx0=c%W,cy0=Math.floor(c/W);for(var d2=0;d2<8;d2++){var ddx=[1,-1,0,0,1,1,-1,-1][d2],ddy=[0,0,1,-1,1,-1,1,-1][d2],nx=cx0+ddx,ny=cy0+ddy;if(nx<0||ny<0||nx>=W||ny>=H)continue;var n=ny*W+nx;if(prev[n]>=0||blocked(n))continue;if(ddx&&ddy&&(blocked(cy0*W+nx)||blocked(ny*W+cx0)))continue;prev[n]=c;q.push(n)}}
 if(prev[t]<0)return null;var P=[];for(var c2=t;c2!==s;c2=prev[c2])P.push([(c2%W)*4+2,Math.floor(c2/W)*4+2]);P.reverse();if(force&&P.length)P[P.length-1]=[x1,y1];return P}
function ixActor(id){if(id==='hero')return IX;for(var i=0;i<IX.r.npc.length;i++)if(IX.r.npc[i].id===id)return IX.r.npc[i];return null}
// move one person along their path; returns true while still walking
function ixStep(a,dt,sp){if(!a.path||!a.path.length){a.mv=false;a.path=null;return false}var p=a.path[0],dx=p[0]-a.x,dy=p[1]-a.y,d=Math.hypot(dx,dy);if(d<1){a.path.shift();a.x=p[0];a.y=p[1];if(!a.path.length){a.mv=false;a.path=null;return false}return true}
 var st=Math.min(d,sp*dt);a.x+=dx/d*st;a.y+=dy/d*st;a.ph=(a.ph||0)+st;a.mv=true;a.d=Math.abs(dx)>Math.abs(dy)?(dx<0?2:3):(dy<0?1:0);return true}
function ixMove(mx,my){var nx=IX.x+mx,ny=IX.y+my,ok=false;if(ixFree(nx,ny)){IX.x=nx;IX.y=ny;ok=true}else if(mx&&ixFree(nx,IX.y)){IX.x=nx;ok=true}else if(my&&ixFree(IX.x,ny)){IX.y=ny;ok=true}
 if(ok){IX.ph+=Math.hypot(mx,my);IX.mv=true;IX.d=Math.abs(mx)>Math.abs(my)?(mx<0?2:3):(my<0?1:0)}return ok}
function ixResize(){DPR=window.devicePixelRatio||1;var kc=Math.max(1,Math.round(Math.min(innerWidth,innerHeight)*DPR/165));IX.kc=kc;cv.width=Math.ceil(innerWidth*DPR/kc);cv.height=Math.ceil(innerHeight*DPR/kc);cv.style.width=(cv.width*kc/DPR)+'px';cv.style.height=(cv.height*kc/DPR)+'px';cx.imageSmoothingEnabled=false}
function ixCam(W,H){var R=IX.r;W=W||cv.width;H=H||cv.height;var tx=IX.camT?IX.camT[0]:IX.cx,ty=IX.camT?IX.camT[1]:IX.cy,mb=IX.scn?H*.35:20,x=W>=R.w?R.w/2:clamp(tx,W/2,R.w-W/2),y=H>=R.h+40?R.h/2:clamp(ty,H/2-20,R.h-H/2+mb);return [Math.round(x-W/2),Math.round(y-H/2)]}
function ixRender(){var R=IX.r,g=cx,z=IX.zoom||1,W=Math.ceil(cv.width/z),H=Math.ceil(cv.height/z),o=ixCam(W,H),ox=o[0],oy=o[1],t=TIME;IX.ox=ox;IX.oy=oy;
 g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over';g.fillStyle='#0c0a14';g.fillRect(0,0,cv.width,cv.height);g.setTransform(z,0,0,z,0,0);
 if(!R.bg)R.bg=R.art();g.drawImage(R.bg,-ox,-oy);if(R.live)R.live(g,ox,oy,t);
 // people, back to front
 var L2=R.npc.filter(function(n){return !n.hide}).map(function(n){return {k:n.p,x:Math.round(n.x),y:Math.round(n.y),d:n.d,f:n.mv?(n.d>=2?[1,2][Math.floor(n.ph/4)%2]:[1,0,2,0][Math.floor(n.ph/4)%4]):0,pose:n.pose,lean:n.lean,cut:n.cut,em:n.em,n:n}});
 var fr=0;if(IX.mv){var q=Math.floor(IX.ph/4);fr=IX.d>=2?[1,2][q%2]:[1,0,2,0][q%4]}
 L2.push({k:'hero',x:Math.round(IX.x),y:Math.round(IX.y),d:IX.d,f:fr,pose:IX.pose,lean:IX.lean,em:IX.em,cut:IX.cut,hero:1});L2.sort(function(a,b){return (a.y+(a.pose==='sit'?-2:0))-(b.y+(b.pose==='sit'?-2:0))});
 L2.forEach(function(p){ixDraw(g,p.k,p.x-ox,p.y-oy,p.d,p.f,p.pose,p.lean,p.cut)});
 if(R.front)R.front(g,ox,oy,t);
 L2.forEach(function(p){if(p.em)ixEmote(g,p.em,p.x-ox,p.y-oy-17,t)});
 if(R.tint){var tc=R.tint();if(tc){g.globalCompositeOperation='multiply';g.fillStyle=tc;g.fillRect(0,0,W,H);g.globalCompositeOperation='source-over'}}
 if(R.glow)R.glow(g,ox,oy,t);
 if(IX.path&&IX.path.length&&IX.tgt&&!IX.scn){var r2=2+Math.round((Math.sin(t*8)+1)*1.2);g.fillStyle='rgba(255,210,58,.9)';var tx=IX.tgt[0]-ox,ty=IX.tgt[1]-oy;g.fillRect(tx-r2,ty,1,1);g.fillRect(tx+r2,ty,1,1);g.fillRect(tx,ty-r2,1,1);g.fillRect(tx,ty+r2,1,1)}
 if(IX.fade>0){g.fillStyle='rgba(8,6,14,'+Math.min(1,IX.fade).toFixed(3)+')';g.fillRect(0,0,W,H)}
 var e=$('cab'),b=IX.bub;if(e){if(!b||b.t<=0){if(e.style.display!=='none')e.style.display='none'}else{if(e._tx!==b.tx){e.textContent=b.tx;e._tx=b.tx}e.style.display='block';var s=IX.kc*z/DPR;e.style.left=Math.round((b.x-ox)*s)+'px';e.style.top=Math.round((b.y-oy)*s)+'px'}}}
function ixSay(tx,x,y){IX.bub={x:x,y:y,tx:tx,t:3.2+tx.length*.03}}
function ixUpdate(dt){var R=IX.r,sp=50;
 // the director (scenes) or the player
 if(IX.scn)ixScnRun(dt);
 else{var kx=(IXK.r?1:0)-(IXK.l?1:0),ky=(IXK.d?1:0)-(IXK.u?1:0);IX.mv=false;
  if(kx||ky){if(IX.pose==='sit'){ixStandUp()}IX.path=null;IX.auto=null;var L=Math.hypot(kx,ky);ixMove(kx/L*sp*dt,ky/L*sp*dt)}
  else if(IX.path&&IX.path.length){var p=IX.path[0],dx=p[0]-IX.x,dy=p[1]-IX.y,d=Math.hypot(dx,dy);if(d<1)IX.path.shift();else{var st=Math.min(d,sp*dt);if(!ixMove(dx/d*st,dy/d*st))IX.path=null}}
  if(IX.path&&!IX.path.length){IX.path=null;if(IX.auto&&IX.hs===IX.auto)ixAct();IX.auto=null}
  if(R.exitY&&IX.y>R.exitY){ixLeave();return}
  var best=null,bd=1e9;if(IX.pose!=='sit')R.hs.forEach(function(h){if(h.when&&!h.when())return;var d2=Math.hypot(h.x-IX.x,h.y-IX.y);if(d2<h.r&&d2<bd){bd=d2;best=h}});
  if(best!==IX.hs){IX.hs=best;var b=$('cap');if(b){if(best){b.textContent=TR(best.lb[0],best.lb[1]);b.style.display='block'}else b.style.display='none'}}
  if(IX.auto&&!IX.path){if(IX.hs===IX.auto)ixAct();IX.auto=null}}
 R.npc.forEach(function(n){if(n.path)ixStep(n,dt,n.sp||40)});if(R.tick)R.tick(dt);
 if(IX.bub){IX.bub.t-=dt;if(!IX.scn&&Math.hypot(IX.bub.x-IX.x,IX.bub.y+18-IX.y)>90)IX.bub.t=0}
 var fx=IX.x,fy=IX.y;IX.cx+=(fx-IX.cx)*Math.min(1,dt*6);IX.cy+=(fy-IX.cy)*Math.min(1,dt*6);
 if(IX.fadeT!=null){IX.fade+=(IX.fadeT-IX.fade)*Math.min(1,dt*3);if(Math.abs(IX.fade-IX.fadeT)<.01)IX.fade=IX.fadeT}
 if(IX.hint>0){IX.hint-=dt;if(IX.hint<=0){var hn=$('cahn');if(hn)hn.style.display='none'}}}
function ixLoop(t){if(mode!=='room'||!IX.on)return;var dt=Math.min(.05,Math.max(0,(t-IX.last)/1000));IX.last=t;TIME+=dt;ixUpdate(dt);if(IX.on&&mode==='room')ixRender();requestAnimationFrame(ixLoop)}
function ixStandUp(){if(IX.pose!=='sit')return;IX.pose='stand';IX.lean=0;IX.cut=null;if(IX.seat){if(IX.seat[3]!=null){IX.x=IX.seat[3];IX.y=IX.seat[4]}else IX.y=IX.seat[1]+IX.seat[2];IX.seat=null}IX.d=0}
function ixSit(x,y,d,back,ox,oy,cut){IX.pose='sit';IX.lean=0;IX.cut=cut||null;IX.seat=[x,y,back||8,ox,oy];IX.x=x;IX.y=y;IX.d=d;IX.path=null;IX.mv=false;var b=$('cap');if(b)b.style.display='none';IX.hs=null}
function ixAct(){var h=IX.hs;if(!h||IX.scn)return;if(h.act)h.act(h)}
function ixTap(e){if(mode!=='room'||IX.scn||IX.st)return;var R=IX.r,s=DPR/IX.kc,rx=e.clientX*s+IX.ox,ry=e.clientY*s+IX.oy,h=null;
 R.npc.forEach(function(n){if(h||!n.id||n.hide)return;var top=n.y-17,bot=n.y-17+(n.cut||18);if(rx>n.x-7&&rx<n.x+7&&ry>top-2&&ry<bot+2)R.hs.forEach(function(q){if(!h&&q.who===n.id&&(!q.when||q.when()))h=q})});
 if(!h)R.hs.forEach(function(q){if(!h&&(!q.when||q.when())&&q.tap&&rx>q.tap[0]&&rx<q.tap[0]+q.tap[2]&&ry>q.tap[1]&&ry<q.tap[1]+q.tap[3])h=q});
 if(IX.pose==='sit')ixStandUp();
 var tx=h?h.x:rx,ty=h?h.y:ry,P=ixPath(IX.x,IX.y,tx,ty);if(h&&h.door&&P)P.push([h.x,R.exitY+4]);
 IX.path=P;IX.tgt=P&&P.length?P[P.length-1]:null;IX.auto=h&&!h.door?h:null;if(P&&!P.length&&h){IX.path=null;if(IX.hs===h)ixAct()}}
var IXK={l:0,r:0,u:0,d:0};
function ixUi(R,on){if(!$('casui'))casUi(false);var u=$('casui');u.style.display=on?'block':'none';if(!on){$('cab').style.display='none';$('cap').style.display='none';$('cahn').style.display='none';u.classList.remove('ixs');return}
 u.querySelector('.cti b').textContent=TR(R.name[0],R.name[1]);$('cacn').textContent=Math.floor(S.coins)+' ¥';
 if(!u._ix){u._ix=1;$('cax').onclick=function(){if(mode==='room'){if(!IX.scn)ixLeave()}else casExit()};$('cap').onclick=function(){if(mode==='room')ixAct();else ciAct()};
  cv.addEventListener('pointerdown',function(e){if(mode!=='room')return;e.preventDefault();IX.drag=true;ixTap(e)});
  cv.addEventListener('pointermove',function(e){if(mode!=='room'||!IX.drag)return;var n=performance.now();if(n-(IX.dt0||0)<140)return;IX.dt0=n;ixTap(e)});addEventListener('pointerup',function(){IX.drag=false});
  var st=document.createElement('style');st.textContent='#casui.ixs .ctop,#casui.ixs #cap{visibility:hidden}body.gin #gar{display:block!important;position:fixed;inset:0;z-index:70;overflow:auto;background:var(--bg)}body.gin #gar .ixhide{display:none!important}#gar .ixback{display:block;width:100%;margin:14px 0 6px}';document.head.appendChild(st)}}
function ixEnter(id,opt){var R=IXR[id];if(!R||IX.on)return;opt=opt||{};try{if(run)bank()}catch(e){}
 if(!window._tdbIx&&window.tdBack){var ob=window.tdBack;window.tdBack=function(){if(IX.st){ixStationClose();return true}if(mode==='room'){if(DLG)return ob();if(!IX.scn)ixLeave();return true}return ob()};window._tdbIx=1}
 IX.car=car?{x:car.x,y:car.y,a:car.a,l:car.l|0}:null;IX.on=true;IX.r=R;mode='room';K.l=K.r=K.t=K.b=K.h=0;IXK.l=IXK.r=IXK.u=IXK.d=0;auStop();
 ['csq','sq'].forEach(function(k){var e=$(k);if(e)e.classList.remove('on')});try{stPromptHide()}catch(e){}
 $('hud').style.display='none';$('ctl').style.display='none';ixUi(R,true);
 var en=opt.at||R.entry;IX.x=en[0];IX.y=en[1];IX.cx=IX.x;IX.cy=IX.y;IX.d=1;IX.pose='stand';IX.lean=0;IX.em=null;IX.path=null;IX.auto=null;IX.bub=null;IX.hs=null;IX.fade=1;IX.fadeT=0;IX.camT=null;IX.zoom=1;IX.scn=null;IX.st=null;$('cap').style.display='none';
 if(R.enter)R.enter(opt);ixResize();
 var hn=$('cahn');if(!IX.seen&&!opt.scene){hn.textContent=document.body.classList.contains('kb')?TR('Стрелки — идти · Enter — действие · Esc — выйти','Arrows — walk · Enter — act · Esc — leave'):TR('Нажимай на пол, чтобы идти','Tap the floor to walk');hn.style.display='block';IX.hint=5;IX.seen=true}
 IX.last=performance.now();requestAnimationFrame(ixLoop)}
function ixLeave(){if(!IX.on)return;var R=IX.r;if(IX.st)ixStationClose(true);IX.on=false;IX.scn=null;ixUi(R,false);mode='game';IXK.l=IXK.r=IXK.u=IXK.d=0;
 if(R.leave)R.leave();if(IX.car&&car){car.x=IX.car.x;car.y=IX.car.y;car.a=IX.car.a;car.l=IX.car.l;car.vx=car.vy=car.w=0;car.sp=0;cam.x=car.x;cam.y=car.y}IX.away=true;
 $('hud').style.display='block';$('ctl').style.display='block';applyCtl();resize();MMCX=null;if(S.snd)auStart();last=performance.now();requestAnimationFrame(loop)}
// keys (taken before the game's own key handler); dialogue boxes keep their own keys
addEventListener('keydown',function(e){
 if(IX.st){if(e.code==='Escape'||e.code==='Backspace'){e.preventDefault();e.stopImmediatePropagation();ixStationClose()}return}
 if(mode==='room'){if(DLG)return;var c=e.code,m={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d'}[c];
  if(!IX.scn){if(m)IXK[m]=1;else if(!e.repeat&&(c==='Enter'||c==='NumpadEnter'||c==='Space'||c==='KeyE'))ixAct();else if(!e.repeat&&(c==='Escape'||c==='Backspace'))ixLeave()}
  e.preventDefault();e.stopImmediatePropagation();return}
 if(mode==='game'&&(e.code==='Enter'||e.code==='NumpadEnter')&&!e.repeat){var q=$('ixq');if(q&&q.classList.contains('on')&&!document.querySelector('#zp.on,#sq.on,#csq.on')&&!DLG){e.preventDefault();e.stopImmediatePropagation();ixEnter(q._room)}}},true);
addEventListener('keyup',function(e){if(mode!=='room')return;var m={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d'}[e.code];if(m)IXK[m]=0},true);
addEventListener('resize',function(){if(mode==='room')ixResize()});

// ---------- the director: a scene is a list of steps run one after another
// {w:s} wait · {go:[who,x,y]} walk there · {face:[who,d]} · {sit:[who,x,y,d,lean]} · {stand:who} · {lean:[who,l]} · {em:[who,e]} (null clears)
// {say:[lines]} dialogue boxes · {show:id} {hide:id} · {cam:[x,y]|null} · {fn:f} · {fade:to}
function ixScene(steps,done){IX.scn={s:steps,i:0,t:0,done:done};IX.path=null;IX.auto=null;IX.hs=null;$('cap').style.display='none';$('casui').classList.add('ixs');ixScnBegin()}
function ixScnBegin(){var S2=IX.scn;if(!S2)return;var st=S2.s[S2.i];S2.t=0;if(!st){var d=S2.done;IX.scn=null;$('casui').classList.remove('ixs');if(d)d();return}
 var a;if(st.go){a=ixActor(st.go[0]);if(a===IX&&IX.pose==='sit')ixStandUp();if(a&&a.pose==='sit'){a.pose='stand'}var P=ixPath(a.x,a.y,st.go[1],st.go[2],true);if(!P||!P.length)P=[[st.go[1],st.go[2]]];a.path=P;a.mv=true}
 else if(st.face){a=ixActor(st.face[0]);if(a)a.d=st.face[1]}
 else if(st.sit){a=ixActor(st.sit[0]);if(a===IX)ixSit(st.sit[1],st.sit[2],st.sit[3],0,st.sit[6],st.sit[7],st.sit[5]);else if(a){a.pose='sit';a.x=st.sit[1];a.y=st.sit[2];a.d=st.sit[3];a.cut=st.sit[5]||null}if(a)a.lean=st.sit[4]||0}
 else if(st.via){a=ixActor(st.via[0]);if(a===IX&&IX.pose==='sit')ixStandUp();a.pose='stand';a.path=st.via[1].map(function(q){return q.slice()});a.mv=true}
 else if(st.cut){a=ixActor(st.cut[0]);if(a===IX)IX.cut=st.cut[1]||null;else if(a)a.cut=st.cut[1]||null}
 else if(st.place){a=ixActor(st.place[0]);if(a){a.x=st.place[1];a.y=st.place[2]}if(a===IX){IX.cx=IX.x;IX.cy=IX.y}}
 else if(st.stand){a=ixActor(st.stand);if(a===IX)ixStandUp();else if(a){a.pose='stand';a.lean=0;a.y+=6}}
 else if(st.lean){a=ixActor(st.lean[0]);if(a)a.lean=st.lean[1]}
 else if(st.em){a=ixActor(st.em[0]);if(a)a.em=st.em[1]}
 else if(st.show){a=ixActor(st.show);if(a)a.hide=false}else if(st.hide){a=ixActor(st.hide);if(a)a.hide=true}
 else if(st.zoom){IX.zoom=st.zoom}else if(st.cam!==undefined){IX.camT=st.cam}else if(st.fn){st.fn()}else if(st.fade!=null){IX.fadeT=st.fade}
 else if(st.say){S2.wait=true;dlgOpen(st.say,function(){S2.wait=false;S2.i++;ixScnBegin()});return}
 if(!st.w&&!st.go&&!st.via&&st.fade==null){S2.i++;ixScnBegin()}}
function ixScnRun(dt){var S2=IX.scn;if(!S2||S2.wait)return;var st=S2.s[S2.i];if(!st)return;S2.t+=dt;
 if(st.go||st.via){var a=ixActor((st.go||st.via)[0]);var walking=a===IX?ixStep(IX,dt,44):!!a.path;if(!walking){S2.i++;ixScnBegin()}return}
 if(st.fade!=null){if(Math.abs(IX.fade-st.fade)<.02||S2.t>2){S2.i++;ixScnBegin()}return}
 if(st.w&&S2.t>=st.w){S2.i++;ixScnBegin()}}
// story hook: a mission with scene:'…' plays its ending inside a room instead of over the road
function ixStory(name,lines,cb){var sc=IXSCN[name];if(!sc){dlgOpen(lines,cb);return}sc(lines,cb)}

// ---------- in the city: a card at the door; the story prompt at Misha's garage now leads inside
function ixCard(){var q=$('ixq');if(q)return q;var zp=$('zp');if(!zp)return null;q=document.createElement('div');q.id='ixq';q.className='';
 q.innerHTML='<div class="zk"></div><div class="zn"></div><div class="zi"></div><button></button>';zp.parentNode.insertBefore(q,zp.nextSibling);q.querySelector('button').onclick=function(){ixEnter(q._room)};
 var st=document.createElement('style');st.textContent='#ixq{display:none;pointer-events:auto;margin-top:8px;width:186px;background:rgba(23,18,38,.94);border:3px solid #6ee7ff;padding:8px 10px 10px;text-align:left;text-shadow:none;box-shadow:4px 4px 0 rgba(255,61,139,.45)}#ixq.on{display:block;animation:zpin .25s ease-out}#ixq .zk{font-size:11px;letter-spacing:.16em;color:#6ee7ff}#ixq .zn{font-size:16.5px;margin:2px 0 5px;line-height:1.1}#ixq .zi{font-size:11px;color:var(--muted);font-weight:400;line-height:1.4}#ixq button{width:100%;margin-top:8px;border:0;padding:9px 0;font-size:16.5px;font-weight:900;background:#6ee7ff;color:#0e2a33;box-shadow:3px 3px 0 #2a8aa0}';document.head.appendChild(st);return q}
function ixCanEnter(){return mode==='game'&&!!car&&!ZS&&!DLG&&!(typeof ST!=='undefined'&&ST.act)&&!(typeof NET!=='undefined'&&NET.on)&&!(typeof TD!=='undefined'&&TD.on)}
var _hudIx=hud;hud=function(dt){_hudIx(dt);if(!car||mode!=='game')return;var q=ixCard();if(!q)return;var P=stPlaces(),want=null;
 if(ixCanEnter()&&car.sp<90&&!document.querySelector('#sq.on,#zp.on,#csq.on')){for(var id in IXR){var R=IXR[id];if(!R.door)continue;var d=R.door(P);if(!d)continue;if(Math.hypot(wd(car.x,d.x),wd(car.y,d.y))<(R.doorR||44)){want=id;break}}}
 if(IX.away){if(!want)IX.away=false;want=null}
 if(want!==q._room||!!want!==q.classList.contains('on')){q._room=want;q.classList.toggle('on',!!want);if(want){var R2=IXR[want];q.querySelector('.zk').textContent=TR(R2.card[0][0],R2.card[0][1]);q.querySelector('.zn').textContent=TR(R2.name[0],R2.name[1]);q.querySelector('.zi').textContent=TR(R2.card[1][0],R2.card[1][1]);q.querySelector('button').textContent=TR(R2.card[2][0],R2.card[2][1])}}};
document.addEventListener('click',function(e){var b=e.target.closest('[data-st=shop]');if(!b||!IXR.garage)return;e.stopImmediatePropagation();try{stPromptHide()}catch(x){}ixEnter('garage')},true);

// ---------- the workshop's stations open the garage screen, cut down to what that corner is for
var IXSEC={cars:[0],parts:[1],paint:[2,3,4],records:[5]};
function ixStation(st){IX.st=st;GSHOP=true;GV=S.car;BUYC=-1;mode='';document.body.classList.add('gin');renderGar();window.scrollTo(0,0);$('gar').scrollTop=0;
 if(!window._gaIx){var oa=garAction;garAction=function(a,i){if(IX.st){if(a==='menu'||a==='go'){ixStationClose();return}if(a==='td'){ixStationClose(true);ixLeave();tdStart(i);return}if(a==='togar')return}return oa(a,i)};window._gaIx=1}}
function ixStationClose(quiet){if(!IX.st)return;IX.st=null;document.body.classList.remove('gin');$('gar').style.display='none';GSHOP=true;$('cacn').textContent=Math.floor(S.coins)+' ¥';save();if(quiet)return;mode='room';ixResize();IX.last=performance.now();requestAnimationFrame(ixLoop)}
var _rgIx=renderGar;renderGar=function(){_rgIx();if(!IX.st)return;var root=$('gar'),sec=-1,want=IXSEC[IX.st]||[];[].forEach.call(root.children,function(el){if(el.classList.contains('top')){return}
  if(el.classList.contains('sec'))sec++;if(el.id==='pv'){if(IX.st==='records')el.classList.add('ixhide');return}if(el.classList.contains('go')||el.classList.contains('lkn')||sec<0||want.indexOf(sec)<0||(el.classList.contains('hint')&&IX.st!=='records'))el.classList.add('ixhide')});
 var gs=root.querySelector('.top [data-a=set]');if(gs)gs.classList.add('ixhide');var h=root.querySelector('.top .gt');if(h)h.textContent=TR({cars:['Машины','Cars'],parts:['Тюнинг','Tuning'],paint:['Покраска','Paint shop'],records:['Доска рекордов','Record board']}[IX.st][0],{cars:['Машины','Cars'],parts:['Тюнинг','Tuning'],paint:['Покраска','Paint shop'],records:['Доска рекордов','Record board']}[IX.st][1]);
 var b=document.createElement('button');b.className='go ixback';b.textContent=TR('Назад в мастерскую','Back to the workshop');b.onclick=function(){ixStationClose()};root.appendChild(b)};

// ================= Misha's workshop =================
function ixHanaHere(){if(typeof ST==='undefined'||!ST.mode)return true;var hi=S.story.hi|0;for(var i=0;i<STORY.length&&i<hi;i++){var m=STORY[i],L2=[].concat(m.pre||[],Array.isArray(m.post)?m.post:[]);for(var j=0;j<L2.length;j++)if(L2[j]&&L2[j][0]==='hana')return true}return false}
var IXCAR={k:'',c:null};function ixCarSpr(){var k=S.car+'_'+S.col+'_'+S.str;if(IXCAR.k!==k){IXCAR.k=k;IXCAR.c=playerSprite(S.car,BODYC[S.col],STRC[S.str])}return IXCAR.c}
IXR.garage={name:['Мастерская Миши','Misha’s workshop'],w:320,h:224,entry:[170,206],exitY:218,
 card:[['МАСТЕРСКАЯ','WORKSHOP'],['Машины, тюнинг, покраска — внутри.','Cars, tuning, paint — inside.'],['Войти','Go in']],
 door:function(P){return ST&&ST.mode?null:P.garage},
 ob:[[0,0,320,44],[0,0,10,224],[310,0,10,224],[0,220,150,4],[190,220,130,4],[10,52,26,92],[104,92,112,46],[236,58,72,72],[14,166,60,22],[80,164,44,22],[212,178,30,22],[10,196,20,20],[290,196,20,20]],
 npc:[{id:'hana',p:'hana',x:44,y:100,d:2}],
 enter:function(){var h=ixActor('hana');h.hide=!ixHanaHere();h.x=44;h.y=100;h.d=2;h.pose='stand';h.em=null;h.path=null;IX.pose='stand';IX.d=1},
 leave:function(){GSHOP=false},
 hs:[{id:'gate',x:170,y:212,r:12,door:1,lb:['Выехать в город','Drive out'],act:function(){ixLeave()},tap:[146,204,48,20]},
  {id:'lift',x:160,y:150,r:22,lb:['Тюнинг: запчасти','Tuning: parts'],act:function(){ixStation('parts')},tap:[104,92,112,46]},
  {id:'paint',x:270,y:142,r:20,lb:['Покраска и неон','Paint and neon'],act:function(){ixStation('paint')},tap:[236,58,72,72]},
  {id:'board',x:227,y:208,r:14,lb:['Машины: купить, сменить, тест-драйв','Cars: buy, switch, test drive'],act:function(){ixStation('cars')},tap:[212,170,30,30]},
  {id:'desk',x:102,y:198,r:16,lb:['Стол Миши','Misha’s desk'],act:function(){var n=IX.cnt=(IX.cnt||0)+1;if(n%2)ixSay(TR('(Фото: дядя Миша и «Молния». На обороте: «Не продавай».)','(A photo: uncle Misha and the Lightning. On the back: “Don’t sell”.)'),102,158);else ixStation('records')},tap:[80,160,44,26]},
  {id:'sofa',x:44,y:196,r:16,lb:['Посидеть на диване','Sit on the sofa'],act:function(){ixSit(40,184,0);var h=ixActor('hana');if(!h.hide)setTimeout(function(){if(IX.pose==='sit'&&IX.on)ixSay(TR('Не сиди без дела, ёппарай. Шучу. Сиди.','Don’t just sit there, yopparai. Kidding. Sit.'),h.x,h.y-20)},700)},tap:[14,160,60,28]},
  {id:'hana',who:'hana',x:58,y:106,r:16,lb:['Поговорить с Ханой','Talk to Hana'],when:function(){return !ixActor('hana').hide},act:function(){var h=ixActor('hana'),L2=[TR('Не трогай мой ключ на двенадцать.','Don’t touch my 12 wrench.'),TR('Подвеска скрипит. Я слышу, даже когда ты молчишь.','The suspension squeaks. I can hear it even when you’re quiet.'),TR('Миша всегда говорил: машина любит руки, а не деньги.','Misha always said: a car loves hands, not money.'),TR('Хочешь что-то поменять — к подъёмнику. Покрасить — в угол.','Want to change parts — the lift. Paint — the corner.')],n=IX.hn=(IX.hn||0)+1;h.d=IX.x<h.x?2:3;ixSay(L2[n%L2.length],h.x,h.y-19);setTimeout(function(){if(IX.on)h.d=2},3500)}}],
 tick:function(dt){var h=ixActor('hana');if(!h.hide&&!h.path&&h.d===2&&!IX.scn)h.em=(TIME%4)<1.4?'spark':null;else if(h.em==='spark')h.em=null},
 art:function(){var W=this.w,H=this.h,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  // concrete floor with joints and oil
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var n=hsh(x,y,51),col=n<.06?'#545866':n>.95?'#6a6e7c':'#5e6270';if((x-8)%40===0||(y-40)%40===0)col='#50545f';g.fillStyle=col;g.fillRect(x,y,1,1)}
  [[80,150,9,4],[226,160,6,3],[180,190,7,3],[130,80,5,2]].forEach(function(o){for(var dy=-o[3];dy<=o[3];dy++){var w=o[2]*Math.sqrt(1-dy*dy/(o[3]*o[3]+.01));R(Math.round(o[0]-w),o[1]+dy,Math.round(w*2),1,'rgba(20,16,30,.35)')}});
  // walls
  R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,W,4,K);R(8,6,W-16,34,'#3e4656');for(x=8;x<W-8;x+=16)R(x,6,1,34,'#363e4c');R(8,6,W-16,2,'#6a7488');R(8,36,W-16,4,'#2a303c');R(8,36,W-16,1,'#8a93a8');
  // pegboard with tools
  R(14,9,92,25,'#8a6a44');for(y=11;y<33;y+=3)for(x=16;x<104;x+=3)R(x,y,1,1,'#6a4e30');
  [[20,12,'#c8ccd8',2,16],[26,12,'#c8ccd8',2,13],[32,13,'#e0302a',3,10],[40,12,'#c8ccd8',1,18],[46,14,'#3a6ab8',3,9],[56,12,'#c8ccd8',2,15],[64,13,'#ffd23a',4,6],[74,12,'#c8ccd8',2,17],[82,13,'#1c1c24',3,12],[92,12,'#c8ccd8',2,14]].forEach(function(t){R(t[0],t[1],t[3],t[4],t[2]);R(t[0]-1,t[1],t[3]+2,2,t[2])});
  // Misha's poster and a clock
  R(116,10,30,24,K);R(117,11,28,22,'#e8dcc0');R(119,13,24,12,'#2a4a7a');R(123,19,16,4,'#d8202a');R(122,22,3,2,K);R(136,22,3,2,K);pf(g,'1998',121,27,'#5a3a1a');
  R(158,12,12,12,K);cgDisc(g,164,18,5,'#f4f0e8');R(164,14,1,4,K);R(164,18,3,1,K);
  // sign
  R(178,11,64,13,K);R(179,12,62,11,'#1a1424');pfc(g,'MISHA GARAGE',210,15,'#ff6fae');
  // shelves: tyres and cans
  R(250,9,56,26,'#4a3a2a');R(250,20,56,2,'#2a2018');R(250,32,56,2,'#2a2018');for(i=0;i<4;i++){cgDisc(g,258+i*13,15,5,K);cgDisc(g,258+i*13,15,2,'#5a5e6a')}for(i=0;i<8;i++)R(253+i*7,25,5,7,['#e0302a','#3a6ab8','#ffd23a','#3aa06a'][i%4]);
  // the workbench along the west wall, a vice, a parts box; a tyre rack
  R(10,52,26,92,K);R(11,53,24,90,'#7a5a3a');R(11,53,24,2,'#9a7a52');R(14,60,10,8,'#5a5e6a');R(16,58,6,3,'#8a8e9e');R(13,80,18,12,'#3a6ab8');R(13,80,18,2,'#5a8ad8');for(i=0;i<5;i++)R(15+i*3,96,2,10,'#c8ccd8');R(13,112,16,10,'#e0302a');R(14,128,8,8,'#1c1c24');
  // the lift: hazard frame, two posts, arms
  for(x=100;x<220;x++){var s=((x+Math.floor(0))>>2)&1;R(x,88,1,3,s?'#ffd23a':'#1c1c24');R(x,139,1,3,s?'#ffd23a':'#1c1c24')}for(y=88;y<142;y++){var s2=(y>>2)&1;R(100,y,3,1,s2?'#ffd23a':'#1c1c24');R(217,y,3,1,s2?'#ffd23a':'#1c1c24')}
  R(106,94,8,40,K);R(107,95,6,38,'#d8202a');R(107,95,2,38,'#ff5a4a');R(206,94,8,40,K);R(207,95,6,38,'#d8202a');R(207,95,2,38,'#ff5a4a');R(113,104,94,3,'#8a8e9e');R(113,124,94,3,'#8a8e9e');
  // the paint booth: frame, plastic curtains, spray gun, cans
  R(236,58,72,72,K);R(237,59,70,70,'#4a5466');for(x=238;x<306;x+=4)R(x,59,2,70,'rgba(160,210,240,.25)');R(237,59,70,3,'#8a93a8');R(250,96,8,14,'#c8ccd8');R(252,92,4,5,'#3a3a46');R(258,100,8,2,'#3a3a46');
  [[278,104,'#d8202a'],[286,106,'#3a6ab8'],[294,103,'#ffd23a'],[282,116,'#ff6fae'],[292,116,'#3aa06a']].forEach(function(p){R(p[0],p[1],6,7,K);R(p[0]+1,p[1]+1,4,5,p[2]);R(p[0]+1,p[1]+1,4,1,'#f4f0e8')});
  for(i=0;i<40;i++){var px=240+Math.floor(hsh(i,1,7)*64),py=64+Math.floor(hsh(i,2,7)*60);R(px,py,1,1,['#d8202a','#3a6ab8','#ffd23a','#ff6fae'][i%4])}
  // sofa, coffee table, lamp
  R(14,166,60,22,K);R(15,167,58,20,'#6a3a24');R(15,167,58,6,'#8a4a2e');R(15,167,4,20,'#5a2e1c');R(69,167,4,20,'#5a2e1c');for(x=24;x<66;x+=14)R(x,174,1,10,'#5a2e1c');R(30,176,10,2,'#9a5a36');
  R(14,196,14,12,K);R(15,197,12,10,'#5a3a24');R(17,199,4,3,'#e8dcc0');cgDisc(g,292,204,6,K);cgDisc(g,292,204,5,'#ffe2a0');
  // Misha's desk: old monitor, papers, the photo
  R(80,164,44,22,K);R(81,165,42,20,'#5a3a24');R(81,165,42,2,'#7a5434');R(84,167,14,10,'#2a2e3a');R(85,168,12,7,'#3a6a5a');R(102,168,10,7,'#e8e0d0');R(104,170,6,1,'#9a9aa6');R(114,168,7,9,K);R(115,169,5,7,'#c8a070');R(116,170,3,3,'#6a4a32');
  // the car board by the gate
  R(212,178,30,22,K);R(213,179,28,16,'#e8ecf4');for(i=0;i<3;i++){R(215+i*9,182,7,5,['#d8202a','#3a6ab8','#f2c230'][i]);R(215+i*9,189,7,1,'#9a9aa6')}R(214,195,2,6,'#5a5e6a');R(238,195,2,6,'#5a5e6a');
  // the gate in the south wall
  R(148,H-6,44,6,'#2a303c');for(x=150;x<190;x+=2)R(x,H-5,1,4,'#8a93a8');R(146,H-8,4,8,'#ffd23a');R(190,H-8,4,8,'#ffd23a');
  // a light over everything: fluorescent tubes
  g.globalCompositeOperation='multiply';g.fillStyle='rgb(200,205,220)';g.fillRect(0,0,W,H);g.globalCompositeOperation='lighter';
  function pool(x,y,r,col,a){var gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
  pool(160,116,80,'220,235,255',.22);pool(60,110,50,'220,235,255',.15);pool(270,96,50,'200,230,255',.18);pool(292,204,30,'255,210,140',.3);pool(48,180,40,'255,200,140',.12);
  g.globalCompositeOperation='source-over';return c},
 // the car on the lift, drawn live (it is your car, in your colours)
 live:function(g,ox,oy,t){var sp=ixCarSpr();if(!sp)return;g.save();g.translate(160-ox,116-oy);g.scale(2,2);g.fillStyle='rgba(12,8,40,.35)';g.fillRect(-sp.width/2+2,-sp.height/2+3,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore()}};

// ================= Reiko's ramen shop =================
var IXDAWN=-1;
function ixSky(){var f=IXDAWN>=0?IXDAWN:(function(){var h=typeof TODH==='number'?TODH:13;return h<4.5||h>20?0:h<7?(h-4.5)/2.5*.8:h<17?1:h<20?1-(h-17)/3*.7:.3})();return f}
function ixMix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function ixSkyCol(f){var n=[26,36,72],d=[232,138,90],day=[150,205,240];return f<.5?ixMix(n,d,f*2):ixMix(d,day,(f-.5)*2)}
IXR.ramen={name:['Раменная Рэйко','Reiko’s ramen'],w:300,h:200,entry:[242,192],exitY:196,
 card:[['РАМЕННАЯ','RAMEN'],['Рэйко на месте. Пахнет бульоном.','Reiko is in. It smells of broth.'],['Зайти','Go in']],
 door:function(P){return P.ramen},doorR:40,
 ob:[[0,0,300,64],[0,0,10,200],[290,0,10,200],[0,196,226,4],[258,196,42,4],[28,64,226,16],[24,96,68,62],[188,126,38,20],[10,170,16,16],[274,40,16,30]],
 open:[[226,186,32,14]],
 npc:[{id:'reiko',p:'reiko',x:150,y:68,d:0,cut:13},{id:'hana',p:'hana',x:135,y:92,d:1,pose:'sit',hide:true},{id:'kir',p:'kir',x:197,y:154,d:1,pose:'sit',hide:true},{id:'ryu',p:'ryu',x:242,y:198,d:1,hide:true}],
 bowls:[],
 enter:function(o){var R=this;R.bowls=[];var rk=ixActor('reiko');rk.x=150;rk.y=68;rk.d=0;rk.em=null;['hana','kir','ryu'].forEach(function(k){var a=ixActor(k);a.hide=true;a.em=null;a.path=null;a.lean=0});IXDAWN=-1},
 leave:function(){IXDAWN=-1},
 hs:[{id:'door',x:242,y:190,r:12,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[224,184,36,16]},
  {id:'seat',x:160,y:100,r:0,lb:['Сесть за стойку','Sit at the counter'],act:function(h){var R=IXR.ramen,sx=h.sx;ixSit(sx,92,1);var rk=ixActor('reiko');rk.path=[[sx,68]];
    setTimeout(function(){if(!IX.on||IX.pose!=='sit')return;R.bowls=[{x:sx,t:TIME}];var k=Math.floor(Math.random()*3);ixSay(TR(['Ешь, пока горячо.','Сегодня тонкоцу. Без вопросов.','Миша всегда брал двойную порцию лука.'][k],['Eat while it’s hot.','Tonkotsu today. No questions.','Misha always took double onions.'][k]),sx,54)},1200)}},
  {id:'reiko',who:'reiko',x:150,y:100,r:0,lb:['Поговорить с Рэйко','Talk to Reiko'],act:function(){}}],
 tick:function(dt){var rk=ixActor('reiko');if(!rk.path&&!IX.scn&&IX.pose!=='sit'&&Math.abs(rk.x-150)>2)rk.path=[[150,68]]},
 art:function(){var W=this.w,H=this.h,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  // wooden floor
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var pl=Math.floor((y-40)/8),j=(x+pl*23)%46===0,n=hsh(x,y,61),col=(y-40)%8===0||j?'#4a3020':n<.08?'#5a3a26':'#6a4630';g.fillStyle=col;g.fillRect(x,y,1,1)}
  R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,W,4,K);
  // the north wall: plaster, the window (sky drawn live), menu tags, bowls on a shelf, a TV, a little shrine
  R(8,6,W-16,34,'#d8c8a8');for(x=8;x<W-8;x+=24)R(x,6,1,34,'#c8b898');R(8,6,W-16,2,'#5a3a24');R(8,36,W-16,4,'#5a3a24');
  R(14,9,60,27,K);R(16,11,56,23,'#1a2448');R(43,11,2,23,K);R(16,22,56,1,K);
  for(i=0;i<8;i++){R(82+i*11,10,9,22,K);R(83+i*11,11,7,20,'#e8dcc0');for(var q=0;q<3;q++)R(85+i*11,14+q*5,3,2,'#3a2a1a');R(83+i*11,11,7,1,'#a87a50')}
  R(176,14,48,3,'#5a3a24');for(i=0;i<5;i++){R(178+i*9,9,7,5,'#f4f0e8');R(178+i*9,12,7,2,'#2a4a8a')}R(176,28,48,3,'#5a3a24');for(i=0;i<4;i++)R(180+i*11,21,6,7,['#d8202a','#e8dcc0','#3aa06a','#ffd23a'][i]);
  R(234,10,40,24,K);R(236,12,36,18,'#20283a');R(250,30,8,4,K);
  R(280,10,14,10,'#8a5a30');R(281,8,12,2,'#5a3a24');R(285,12,4,6,'#f4f0e8');
  // the kitchen behind the counter: stove, the big pot, a cutting board
  R(10,40,280,24,'#b8a888');for(x=10;x<290;x+=10)R(x,40,1,24,'#a89878');R(96,42,40,16,K);R(97,43,38,14,'#5a5e6a');cgDisc(g,108,49,6,K);cgDisc(g,108,49,5,'#8a8e9e');cgDisc(g,108,49,3,'#e8dcc0');cgDisc(g,124,49,5,K);cgDisc(g,124,49,4,'#3a3a46');
  R(176,46,24,10,K);R(177,47,22,8,'#c8a070');R(182,49,10,3,'#e8e0d0');R(40,44,40,14,'#8a8e9e');R(42,46,16,10,'#5a5e6a');R(62,46,16,10,'#5a5e6a');
  // the counter and its stools
  R(28,64,226,16,K);R(29,65,224,9,'#b88a5a');R(29,65,224,2,'#d8aa7a');R(29,74,224,6,'#5a3420');R(29,74,224,1,'#7a4a2a');
  for(i=0;i<7;i++){var sx=60+i*25;cgDisc(g,sx+1,96,5,'rgba(10,6,20,.35)');cgDisc(g,sx,94,5,K);cgDisc(g,sx,94,4,'#a8222a');R(sx-2,92,2,1,'#d84a4a')}
  // two little tables with chairs
  // the booth: a tall tufted back, a deep seat (two cushions) between the armrests, the table in front
  R(26,98,64,34,K);R(27,99,62,20,'#7a1624');R(27,99,62,3,'#a8283a');for(x=33;x<86;x+=8){R(x,105,2,2,'#4a0a14');R(x+4,111,2,2,'#4a0a14')}
  R(27,118,62,12,'#a8222e');R(27,118,62,1,'#5a0e18');R(27,119,62,1,'#c8404a');R(57,119,2,10,'#7a1624');R(27,129,62,2,'#6a1420');
  R(26,98,5,34,K);R(27,100,3,31,'#5a1020');R(27,100,3,1,'#8a2030');R(85,98,5,34,K);R(86,100,3,31,'#5a1020');R(86,100,3,1,'#8a2030');
  R(30,139,56,17,K);R(31,140,54,10,'#8a5a30');R(31,140,54,2,'#a87a50');R(31,150,54,5,'#5a3420');R(36,156,3,3,K);R(77,156,3,3,K);
  [[188,126]].forEach(function(p){R(p[0],p[1],38,20,K);R(p[0]+1,p[1]+1,36,14,'#8a5a30');R(p[0]+1,p[1]+1,36,2,'#a87a50');R(p[0]+1,p[1]+15,36,4,'#5a3420');[[9,-6],[29,-6],[9,26],[29,26]].forEach(function(q){R(p[0]+q[0]-4,p[1]+q[1]-2,9,7,K);R(p[0]+q[0]-3,p[1]+q[1]-1,7,5,'#6a4630')})});
  // the umbrella stand, a plant, the noren over the door
  R(10,170,16,16,K);R(11,171,14,14,'#3a5a3a');cgDisc(g,18,174,6,'#2a6a3a');R(274,40,16,30,K);R(275,41,14,28,'#6a4630');
  R(226,H-6,32,6,'#3a2a20');R(222,H-8,4,8,'#5a3a24');R(258,H-8,4,8,'#5a3a24');
  return c},
 live:function(g,ox,oy,t){var R=this,f=ixSky(),sc=ixSkyCol(f),col='rgb('+(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0)+')';function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  // the sky in the window, the pass behind it, the sun coming up
  Rr(16,11,27,11,col);Rr(45,11,27,11,col);Rr(16,23,27,11,col);Rr(45,23,27,11,col);
  var sk2=ixMix(sc,[20,24,40],.5),mc='rgb('+(sk2[0]|0)+','+(sk2[1]|0)+','+(sk2[2]|0)+')';for(var x=16;x<72;x++){if(x===43||x===44)continue;var hh=Math.round(6+Math.sin(x*.18)*3+Math.sin(x*.07)*2);Rr(x,34-hh,1,hh,mc)}
  if(f>.15&&f<.9){var sy=34-Math.round((f-.15)*20);Rr(58,sy,4,2,'#ffe2a0');Rr(57,sy+1,6,1,'#ffd27a')}
  if(f<.3)for(var s=0;s<6;s++)if((Math.floor(t*2)+s)%5)Rr(18+s*9,13+(s%3)*4,1,1,'#f4f0e8');
  // the TV flickers
  var tv=Math.floor(t*3)%4;Rr(236,12,36,18,['#3a4a6a','#4a5a7a','#2a3a5a','#5a4a6a'][tv]);Rr(240,16,12,6,'#e8e0d0');Rr(256,20,12,6,'#d8202a');
  // steam over the pot
  for(var k=0;k<6;k++){var ph=(t*.6+k/6)%1,px=108+Math.sin(t*2+k)*3+(k%2?3:-3);g.globalAlpha=(1-ph)*.6;Rr(Math.round(px),Math.round(48-ph*26),2,2,'#f4f0e8');g.globalAlpha=1}
  // bowls on the counter
  R.bowls.forEach(function(b){var by=b.y||66;Rr(b.x-5,by,10,5,'#14101e');Rr(b.x-4,by,8,4,'#f4f0e8');Rr(b.x-3,by,6,2,'#e8b860');Rr(b.x-3,by,2,1,'#3a8a3a');Rr(b.x+1,by+1,2,1,'#e05a5a');for(var k2=0;k2<3;k2++){var ph2=(t*.8+k2/3)%1;g.globalAlpha=(1-ph2)*.5;Rr(b.x-2+k2*2,Math.round(by-2-ph2*10),1,2,'#f4f0e8');g.globalAlpha=1}});
  // lamps over the counter
  for(var i=0;i<4;i++){var lx=70+i*50;Rr(lx,0,1,6,'#14101e')}},
 tint:function(){var f=ixSky(),a=f<.5?ixMix([140,135,190],[235,190,165],f*2):ixMix([235,190,165],[255,250,245],(f-.5)*2);return 'rgb('+(a[0]|0)+','+(a[1]|0)+','+(a[2]|0)+')'},
 glow:function(g,ox,oy,t){var f=ixSky();g.globalCompositeOperation='lighter';function pool(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}
  for(var i=0;i<4;i++)pool(70+i*50,74,34,'255,190,110',.22*(1-f*.6));
  if(f>.1){var sc=ixSkyCol(f);pool(44,40,90*f+20,(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0),.35*Math.min(1,f*1.5));g.save();g.globalAlpha=.12*Math.min(1,f*2);g.fillStyle='rgb('+(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0)+')';g.beginPath();g.moveTo(16-ox,36-oy);g.lineTo(72-ox,36-oy);g.lineTo(150-ox,150-oy);g.lineTo(60-ox,150-oy);g.closePath();g.fill();g.restore()}
  pool(254,24,26,'140,170,255',.18);g.globalCompositeOperation='source-over'}};
// seven stools: walk up to one (or tap it, or the counter above it) and sit
(function(){var R=IXR.ramen,base=R.hs[1];R.hs.splice(1,1);for(var k=0;k<7;k++){var sx=60+k*25,h={};for(var q in base)h[q]=base[q];h.x=sx;h.y=100;h.r=12;h.sx=sx;h.tap=[sx-12,64,25,36];R.hs.push(h)}})();
// talking to Reiko: walk to the counter in front of her
IXR.ramen.hs.push({id:'booth',x:98,y:132,r:14,lb:['Сесть на диванчик у окна','Sit in the booth by the window'],tap:[24,96,68,62],act:function(){ixSit(57,132,0,0,98,132);setTimeout(function(){if(IX.on&&IX.pose==='sit')ixSay(TR('Тут Миша любил смотреть, как светает над перевалом.','Misha liked to watch the dawn over the pass from here.'),57,100)},800)}});
IXR.ramen.hs.push({id:'reiko',who:'reiko',x:150,y:84,r:14,lb:['Поговорить с Рэйко','Talk to Reiko'],act:function(){var rk=ixActor('reiko'),L2=[TR('Перевал по утрам мокрый. Не геройствуй.','The pass is wet in the mornings. No heroics.'),TR('Миша сидел вот тут. Всегда на третьем табурете.','Misha sat right here. Always the third stool.'),TR('Бульон варится двенадцать часов. Как и хорошие решения.','The broth cooks for twelve hours. So do good decisions.'),TR('Хана? Хорошая девочка. Руки золотые, язык острый.','Hana? A good girl. Golden hands, a sharp tongue.')],n=IX.rn=(IX.rn||0)+1;ixSay(L2[n%L2.length],rk.x,rk.y-14)}});

// ================= the scene: dawn at the ramen shop (end of chapter 4) =================
var IXSCN={};
IXSCN.dawn=function(lines,cb){var rin=S.story.pick==='rin';
 ixEnter('ramen',{scene:1,at:[242,196]});var R=IXR.ramen;IXDAWN=.08;var h=ixActor('hana'),k=ixActor('kir'),rk=ixActor('reiko'),ry=ixActor('ryu');
 // Hana already in the booth by the window, Kir asleep at the other table, Reiko at the stove
 h.hide=false;h.pose='sit';h.x=47;h.y=132;h.d=0;h.lean=0;h.cut=null;h.em=null;k.hide=false;k.pose='sit';k.x=197;k.y=154;k.d=1;k.lean=0;k.em='zzz';rk.x=150;rk.y=68;rk.cut=13;ry.hide=true;ry.x=242;ry.y=198;ry.pose='stand';ry.d=1;
 var dawnTo=function(to,s){var f0,t0;return {fn:function(){f0=IXDAWN;t0=TIME;var tick=function(){if(!IX.on)return;var u=Math.min(1,(TIME-t0)/s);IXDAWN=f0+(to-f0)*u;if(u<1)requestAnimationFrame(tick)};tick()}}};
 // Reiko comes out of the kitchen round the end of the counter, and goes back the same way
 var out=[{cut:['reiko',0]},{via:['reiko',[[20,68],[18,86],[96,90],[98,128]]]},{face:['reiko',2]}],back=[{via:['reiko',[[96,90],[18,86],[20,68],[150,68]]]},{cut:['reiko',13]},{face:['reiko',0]}];
 var steps=[{fade:0},{go:['hero',242,184]},{go:['hero',98,132]},{sit:['hero',57,132,0,0,0,98,132]},{cam:[72,118]},{w:.6}].concat(out,[{w:.3},{fn:function(){R.bowls=[{x:46,y:143},{x:60,y:143}]}},{w:.5}],back,[dawnTo(.45,6),{w:1.4}]);
 steps.push({zoom:2},{cam:[56,142]},{w:.6});
 if(!rin)steps=steps.concat([{em:['hana','...']},{w:1.2},{lean:['hana',1]},{em:['hana','zzz']},{w:.8},
   {say:[D('hana','Только не шевелись…','Just don’t move…')]},{em:['hero','heart']},{w:.8},{em:['hero',null]}],out,[{w:.3},
   {say:[D('reiko','(шёпотом) Береги её.','(in a whisper) Take care of her.')]},{w:.5}],back,[{zoom:1},{cam:[72,118]}],[dawnTo(.75,5),{w:1.6}]);
 else steps=steps.concat([{em:['hero','phone']},{w:1},{say:[D('lyokha','(Сообщение от Рин: «Живой? Тандем в субботу».)','(A message from Rin: “Alive? Tandem on Saturday.”)',LYO_T)]},
   {lean:['hana',1]},{em:['hana','!']},{w:.8},{say:[D('hana','…Ответь ей. Мне всё равно.','…Answer her. I don’t care.')]},{em:['hero',null]},{lean:['hana',-1]},{em:['hana','anger']},{w:1.2},{em:['hana',null]},{zoom:1},{cam:[72,118]},dawnTo(.75,5),{w:1.4}]);
 steps=steps.concat([{em:['kir',null]},{show:'ryu'},{cam:[100,170]},{go:['ryu',236,176]},{go:['ryu',128,150]},{face:['ryu',2]},{em:['hero','!']},{lean:['hana',0]},{em:['hana',null]},{w:.4},
  {say:[D('ryu','Карта у тебя, ёппарай?','Got the card, yopparai?'),D('ryu','Отец хочет её. А я хочу тебя — на кольце. Без отцовских денег. Ты и я.','My father wants it. And I want you — on the ring. No father’s money. Just you and me.')]},
  {em:['hero',null]},{stand:'hero'},{face:['hero',3]},{w:.4},{say:[D('lyokha','Назови время.','Name the time.')]},{w:.5},{go:['ryu',236,176]},{go:['ryu',242,198]},{hide:'ryu'},{cam:null},dawnTo(1,3),{w:1.2},{fade:1},{w:.3}]);
 ixScene(steps,function(){ixLeave();if(cb)cb()})};

Object.assign(ZH,{'Мастерская Миши':'米沙的修车铺','МАСТЕРСКАЯ':'修车铺','Машины, тюнинг, покраска — внутри.':'车辆、改装、喷漆——都在里面。','Войти':'进去','Выехать в город':'开车进城','Тюнинг: запчасти':'改装：零件','Покраска и неон':'喷漆和霓虹灯','Машины: купить, сменить, тест-драйв':'车辆：购买、更换、试驾','Стол Миши':'米沙的桌子',
 '(Фото: дядя Миша и «Молния». На обороте: «Не продавай».)':'（照片：米沙叔叔和“闪电”。背面写着：“别卖掉”。）','Посидеть на диване':'在沙发上坐坐','Не сиди без дела, ёппарай. Шучу. Сиди.':'别闲坐着，醉鬼。开玩笑的。坐吧。','Поговорить с Ханой':'和花聊聊',
 'Не трогай мой ключ на двенадцать.':'别碰我的12号扳手。','Подвеска скрипит. Я слышу, даже когда ты молчишь.':'悬挂在响。你不说话我也听得见。','Миша всегда говорил: машина любит руки, а не деньги.':'米沙总说：车喜欢的是手，不是钱。','Хочешь что-то поменять — к подъёмнику. Покрасить — в угол.':'想换零件——去升降机。想喷漆——去角落。',
 'Машины':'车辆','Тюнинг':'改装','Покраска':'喷漆','Доска рекордов':'记录板','Назад в мастерскую':'回到修车铺',
 'Раменная Рэйко':'玲子的拉面店','РАМЕННАЯ':'拉面店','Рэйко на месте. Пахнет бульоном.':'玲子在店里。一股高汤香。','Зайти':'进去','Выйти':'离开','Сесть за стойку':'坐到吧台前','Ешь, пока горячо.':'趁热吃。','Сегодня тонкоцу. Без вопросов.':'今天是豚骨。别问。','Миша всегда брал двойную порцию лука.':'米沙总要双份葱。',
 'Поговорить с Рэйко':'和玲子聊聊','Перевал по утрам мокрый. Не геройствуй.':'早上山路湿滑。别逞英雄。','Миша сидел вот тут. Всегда на третьем табурете.':'米沙就坐在这儿。总是第三个凳子。','Бульон варится двенадцать часов. Как и хорошие решения.':'高汤要熬十二个小时。好的决定也一样。','Хана? Хорошая девочка. Руки золотые, язык острый.':'花？好姑娘。手巧，嘴利。',
 'Только не шевелись…':'别动……','(шёпотом) Береги её.':'（低声）好好待她。','(Сообщение от Рин: «Живой? Тандем в субботу».)':'（凛发来消息：“还活着？周六双车。”）','…Ответь ей. Мне всё равно.':'……回她吧。我无所谓。',
 'Карта у тебя, ёппарай?':'卡在你那儿吧，醉鬼？','Отец хочет её. А я хочу тебя — на кольце. Без отцовских денег. Ты и я.':'我父亲想要它。而我想要你——在环道上。不靠我父亲的钱。就你和我。','Назови время.':'说个时间。','Сесть на диванчик у окна':'坐到窗边的卡座','Тут Миша любил смотреть, как светает над перевалом.':'米沙喜欢在这儿看山口上的日出。'});

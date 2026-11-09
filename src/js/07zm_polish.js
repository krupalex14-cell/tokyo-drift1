// ===== polish: straight buttons, businesses where they belong (with signs), and the small things inside every room =====

// ---------- buttons: centred, the same width, shadows straight down (no sideways "crooked" offset)
(function(){var st=document.createElement('style');st.textContent=
 '#cap{left:50%!important;right:auto!important;transform:translateX(-50%)!important;box-shadow:0 4px 0 #b8862a!important;min-width:200px;max-width:calc(100vw - 40px);box-sizing:border-box;text-align:center;white-space:normal!important;line-height:1.2;padding:11px 20px!important;border-radius:0}'+
 '#cax{box-shadow:0 4px 0 var(--pk2)!important}'+
 '#ixq,#bzq,#csq{width:200px!important;box-sizing:border-box;box-shadow:0 4px 0 rgba(255,61,139,.45)!important}'+
 '#ixq button,#bzq button,#csq button{display:block;width:100%!important;box-sizing:border-box;margin-left:0!important;margin-right:0!important;text-align:center;box-shadow:0 3px 0 rgba(0,0,0,.4)!important}'+
 '#cgk .cgb{box-shadow:0 3px 0 #1c1430!important}#cgk .cgb.go{box-shadow:0 3px 0 #b8862a!important}#cgk .cgb.on{box-shadow:0 3px 0 var(--pk2)!important}';
 document.head.appendChild(st)})();

// ---------- where each business really is: Hana under her own canopy, the parking on a real car park, the rest in a building facing the road
var BZSG={};
bzPts=function(){if(BZPTS)return BZPTS;var P=stPlaces();if(!P||!P.hana)return null;BZPTS={};BZSG={};
 function nearestSpec(k,to,maxD){var best=null,bd=maxD||1e9;SPEC.forEach(function(s){if(s.k!==k)return;var d=Math.hypot(wd(s.x+s.w/2,to.x),wd(s.y+s.h/2,to.y));if(d<bd){bd=d;best=s}});return best}
 function facing(to,R){var best=null,bd=1e9;BH.q(to.x-R,to.y-R,to.x+R,to.y+R,function(B){if(B.hid||B.cas||B.sky||B.w<34||B.h<26)return;var fx=B.x+B.w/2,fy=B.y+B.h,q=gpsNear(fx,fy+14,30);if(!q)return;var d=Math.hypot(wd(fx,to.x),wd(fy,to.y));if(d<bd){bd=d;best={B:B,q:q}}});return best}
 var g=nearestSpec('gas',P.hana,600);if(g){BZPTS.hana={x:g.x+6+(g.w-44)/2,y:g.y+8+(g.h-26)/2};BZSG.hana={x:g.x+g.w-25,y:g.y+34,k:'hana'}}
 var lot=nearestSpec('lot',P.stad,1600);if(lot){var q0=gpsNear(lot.x+lot.w/2,lot.y+lot.h/2,260)||{x:lot.x+lot.w/2,y:lot.y+lot.h};BZPTS.park={x:q0.x,y:q0.y};BZSG.park={x:lot.x+10,y:lot.y+10,k:'park'}}
 BZPTS.ramen={x:P.ramen.x,y:P.ramen.y};
 BZ.forEach(function(b){if(BZPTS[b.id])return;var c=P[b.at];if(!c)return;var f=facing(c,220)||facing(c,500);if(!f){var q1=gpsNear(c.x,c.y,600);if(q1)f=facing(q1,260)}if(f){BZPTS[b.id]={x:f.q.x,y:f.q.y};BZSG[b.id]={x:f.B.x+f.B.w/2,y:f.B.y+f.B.h-5,k:b.id}}else{var q=gpsNear(c.x,c.y,300);BZPTS[b.id]=q?{x:q.x,y:q.y}:{x:c.x,y:c.y};BZSG[b.id]={x:BZPTS[b.id].x,y:BZPTS[b.id].y-24,k:b.id}}});
 return BZPTS};
BZPTS=null;
// the signs: little lit boards on the building fronts (gold edge when the place is yours)
var BZSC={};
function bzSign(k,own){var key=k+(own?'1':'0');if(BZSC[key])return BZSC[key];var T={hana:['HANA','#f4f4f8','#e03a3a'],park:['P','#2a5aa8','#f4f4f8'],wash:['WASH','#3a6ab8','#f4f4f8'],port:['DOCK 7','#2a2a34','#ffd23a'],club:['CLUB','#1c1028','#ff4da6'],tv:['TV','#c8202a','#f4f4f8']}[k];if(!T)return null;
 var big=k==='park',w=big?13:pfw(T[0])+6,h=big?13:9,c=mkCanvas(w+2,h+2),g=c.getContext('2d');g.fillStyle='#14101e';g.fillRect(0,0,w+2,h+2);g.fillStyle=own?'#ffd23a':'#8a8e98';g.fillRect(0,0,w+2,1);g.fillRect(0,h+1,w+2,1);g.fillRect(0,0,1,h+2);g.fillRect(w+1,0,1,h+2);g.fillStyle=T[1];g.fillRect(1,1,w,h);
 if(big)pf(g,'P',4,2,T[2],2);else pf(g,T[0],4,3,T[2]);if(k==='wash'){g.fillStyle='#bfe8ff';g.fillRect(w-1,2,1,1);g.fillRect(w-2,6,1,1)}return BZSC[key]=c}
var _dzBz=drawZones;drawZones=function(l){_dzBz(l);if(l!==0||!window.worldReady)return;if(!bzPts())return;for(var k in BZSG){var s=BZSG[k],x=SX(s.x),y=SY(s.y);if(x<-30||y<-30||x>VW+30||y>VH+30)continue;var c=bzSign(s.k,bzLv(k)>0);if(c)cx.drawImage(c,Math.round(x-c.width/2),Math.round(y-c.height/2))}};
var _edBz=emisDraw;emisDraw=function(a){_edBz(a);if(a<=.05||!BZPTS)return;var C={hana:[255,90,90],park:[90,150,255],wash:[120,190,255],port:[255,210,80],club:[255,80,180],tv:[255,80,80]};for(var k in BZSG){var s=BZSG[k],x=SX(s.x),y=SY(s.y);if(x<-60||y<-60||x>VW+60||y>VH+60)continue;gl(x,y,22,14,C[s.k]||[255,220,150],a*.45)}};

// ---------- room helpers: draw more on top of a room's picture, more live bits, more glow
function pzArt(R,fn){var a0=R.art;R.art=function(){var c=a0.call(this),g=c.getContext('2d');fn(g,function(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)},'#14101e');return c}}
function pzLive(R,fn){var a0=R.live;R.live=function(g,ox,oy,t){if(a0)a0.call(this,g,ox,oy,t);fn(g,function(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)},ox,oy,t)}}
function pzGlow(R,fn){var a0=R.glow;R.glow=function(g,ox,oy,t){if(a0)a0.call(this,g,ox,oy,t);var P=bzGlow(g,ox,oy);fn(P,t);g.globalCompositeOperation='source-over'}}
function pzTick(R,fn){var a0=R.tick;R.tick=function(dt){if(a0)a0.call(this,dt);fn.call(this,dt)}}
function pzWander(a,box,sp){if(a.path||a.pose==='sit'||IX.scn)return;if(Math.random()<.006){var tx=box[0]+Math.random()*box[2],ty=box[1]+Math.random()*box[3];if(ixFree(tx,ty)){var P=ixPath(a.x,a.y,tx,ty);if(P&&P.length)a.path=P}}}
IXP.cust1=CIP.g3;IXP.cust2=CIP.g5;IXP.cust3={H:'#c8a070',S:'#f6dcc0',T:'#e86a8a',P:'#3a3a46',hair:'long'};IXP.dn5=CIP.g7||CIP.g1;IXP.dn6={H:'#ffd23a',S:'#c8956c',T:'#2a8a4a',P:'#1c1c24',hair:'spiky'};
IXP.bounc2=CIP.guard;IXP.docker2={H:'#e8e8f0',h:'#b8b8c4',S:'#9c6b46',T:'#ff8a3d',t:'#c86a1c',W:'#e8e8f0',P:'#2a3a5a',top:'racer'};IXP.dir={H:'#1c1c24',S:'#f2cfa8',T:'#e8e4dc',P:'#3a3a46',shades:1};IXP.boom={H:'#5a3a24',S:'#e3b58e',T:'#3a3a46',P:'#2a2a34',hair:'spiky'};
IXP.sales2={H:'#2a1a14',S:'#f6dcc0',T:'#1c1c24',W:'#f0eef4',A:'#c49a36',P:'#1c1c24',top:'suit',hair:'long'};

// ================= Hana's shop: price tags, a lucky cat, an oden pot, an ATM, magazines, a shopper =================
pzArt(IXR.bz_hana,function(g,R,K){
 [56,82,108].forEach(function(sy){for(var x=31;x<118;x+=9){R(x,sy+13,3,1,'#ffd23a');R(x+1,sy+13,1,1,'#c8202a')}R(118,sy,8,14,K);R(119,sy+1,6,12,'#ff4da6');R(120,sy+3,4,3,'#ffd23a');R(120,sy+8,4,3,'#5ae0ff')});
 R(16,40,60,6,K);for(var i=0;i<14;i++)R(17+i*4,41,3,4,['#c8202a','#3a6ab8','#ffd23a','#7bd957','#ff7ab8','#f4f4f4','#a855ff'][i%7]);
 R(124,42,13,16,K);R(125,43,11,14,'#8a8e98');R(126,44,9,5,'#3a6ab8');R(127,45,5,1,'#bfe8ff');for(var k=0;k<6;k++)R(126+(k%3)*3,51+(k>>1)/1.5|0,2,1,'#2a2a34');
 R(70,127,16,7,K);R(71,128,14,5,'#c8ccd8');R(72,129,12,3,'#8a6a3a');cgDisc(g,75,130,1.2,'#f4e0a0');cgDisc(g,80,130,1.2,'#e8a050');
 R(21,125,8,8,K);R(22,126,6,6,'#f4f4f4');R(22,124,2,2,K);R(26,124,2,2,K);R(23,128,1,1,K);R(25,128,1,1,K);R(23,130,3,1,'#c8202a');R(27,121,2,5,'#f4f4f4');R(27,121,2,1,K);
 R(44,128,6,5,'#2a2a34');R(45,129,4,2,'#7dff8c');
 R(194,148,8,14,K);R(195,149,6,12,'#5a5e6a');R(195,146,2,4,'#c8202a');R(198,145,2,5,'#3a6ab8');R(200,147,2,3,'#ffd23a');
 R(118,152,10,10,K);R(119,153,8,8,'#3a6ab8');R(130,152,10,10,K);R(131,153,8,8,'#3aa06a');R(121,155,4,2,'#f4f4f4');R(133,155,4,2,'#f4f4f4');
 R(138,96,8,7,K);R(139,97,6,5,'#ffd23a');R(141,98,2,2,'#14101e');
 for(var y=60;y<128;y+=34)R(130,y,70,1,'rgba(255,255,255,.18)')});
IXR.bz_hana.npc.push({id:'cust1',p:'cust1',x:74,y:104,d:1},{id:'cust3',p:'cust3',x:170,y:110,d:0});
pzTick(IXR.bz_hana,function(dt){['cust1','cust3'].forEach(function(id){var a=ixActor(id);if(a)pzWander(a,[24,72,170,60])})});
pzLive(IXR.bz_hana,function(g,Rr,ox,oy,t){for(var k=0;k<3;k++){var ph=(t*.5+k/3)%1;g.globalAlpha=(1-ph)*.6;Rr(74+k*4,Math.round(126-ph*10),1,2,'#f4f4f4');g.globalAlpha=1}if(Math.floor(t*2)%2)Rr(27,121,2,1,'#f4f4f4');else Rr(27,123,2,1,'#f4f4f4')});
pzGlow(IXR.bz_hana,function(P,t){P(78,130,14,'255,190,120',.2);P(130,50,14,'90,140,255',.2)});

// ================= the car wash: hose reels, warning stripes, puddles, a price board, a clock, a tyre stack, a customer =================
pzArt(IXR.bz_wash,function(g,R,K){
 [[18,14],[236,14]].forEach(function(p){cgDisc(g,p[0]+5,p[1]+8,7,K);cgDisc(g,p[0]+5,p[1]+8,6,'#e8c040');cgDisc(g,p[0]+5,p[1]+8,3,'#2a2a34');cgDisc(g,p[0]+5,p[1]+8,1.5,'#e8c040')});
 R(176,8,52,26,K);R(177,9,50,24,'#1c2230');pf(g,'WASH 500',180,11,'#f4f4f8');pf(g,'WAX  800',180,18,'#ffd23a');pf(g,'VIP 2000',180,25,'#5ae0ff');
 cgDisc(g,78,18,6,K);cgDisc(g,78,18,5,'#f4f4f8');
 for(var y=46;y<114;y+=4){R(28,y,4,2,'#e8c040');R(28,y+2,4,2,'#14101e');R(228,y,4,2,'#e8c040');R(228,y+2,4,2,'#14101e')}
 R(40,79,14,2,'#f4f4f8');R(50,77,2,6,'#f4f4f8');R(52,78,2,4,'#f4f4f8');
 [[150,120,18,5],[200,126,24,6],[96,118,12,4]].forEach(function(p){g.fillStyle='rgba(120,160,210,.45)';g.beginPath();g.ellipse(p[0],p[1],p[2]/2,p[3]/2,0,0,TAU);g.fill();g.fillStyle='rgba(220,240,255,.5)';g.fillRect(p[0]-p[2]/4,p[1]-1,p[2]/3,1)});
 [[178,128],[178,121],[186,128]].forEach(function(p){cgDisc(g,p[0],p[1],5,K);cgDisc(g,p[0],p[1],4,'#2a2a34');cgDisc(g,p[0],p[1],2,'#5a5e6a')});
 R(236,118,18,44,K);R(237,119,16,42,'#8a8e98');for(var i=0;i<8;i++)R(239+(i%2)*7,121+(i>>1)*10,5,7,['#ff4da6','#5ae0ff','#ffd23a','#7bd957'][i%4]);
 R(166,150,8,8,K);R(167,151,6,6,'#3a6ab8');R(168,152,4,1,'#bfe8ff')});
IXR.bz_wash.npc.push({id:'cust2',p:'cust2',x:122,y:146,d:0,pose:'sit',em:'phone'});
pzLive(IXR.bz_wash,function(g,Rr,ox,oy,t){var a=t*.5,b=t*6;Rr(78,18,1,1,'#14101e');Rr(Math.round(78+Math.cos(a)*3),Math.round(18+Math.sin(a)*3),1,1,'#14101e');Rr(Math.round(78+Math.cos(b)*4),Math.round(18+Math.sin(b)*4),1,1,'#c8202a');
 for(var k=0;k<5;k++){var ph=(t*.9+k/5)%1;Rr(70+k*30,Math.round(48+ph*60),1,2,'rgba(160,210,255,.7)')}});

// ================= the parking booth: blinds, a logbook, a radio, a fan, a coat rack, an extinguisher, a mini fridge =================
pzArt(IXR.bz_park,function(g,R,K){
 for(var y=9;y<22;y+=2)R(12,y,48,1,'#d8d4c8');R(12,22,48,1,'#8a8678');
 R(80,58,12,5,'#f4f0e8');R(86,58,1,5,'#a8a090');for(var i=0;i<3;i++)R(81,59+i,4,1,'#5a5a64');
 R(92,46,8,6,K);R(93,47,6,4,'#c8202a');R(94,47,1,1,'#f4f4f4');R(18,48,4,8,'#2a2a34');R(19,44,1,4,'#8a8e98');R(18,49,4,1,'#7dff8c');
 cgDisc(g,30,56,2.5,'#f4f4f4');R(29,55,2,2,'#5a3a24');
 R(136,116,2,18,'#5a4a3a');R(132,116,10,2,'#5a4a3a');R(131,118,6,8,'#3a4a7a');R(139,117,4,3,'#3a4a7a');
 R(12,110,6,14,K);R(13,111,4,12,'#c8202a');R(14,109,2,2,'#2a2a34');
 R(168,96,24,18,K);R(169,97,22,16,'#e8e8f0');R(169,104,22,1,'#a8acb8');R(188,99,1,4,'#8a8e98');
 R(140,68,12,12,K);R(141,69,10,10,'#5a4a3a');R(141,69,10,3,'#7a6a5a');
 R(100,128,30,1,'#2a2a34');R(130,120,1,9,'#2a2a34')});
pzLive(IXR.bz_park,function(g,Rr,ox,oy,t){var f=Math.floor(t*12)%4;Rr(108,52,7,7,'#14101e');Rr(109,53,5,5,'#c8ccd8');[[111,53,1,2],[113,55,2,1],[111,56,1,2],[109,55,2,1]].forEach(function(q,i){if((i+f)%2)Rr(q[0],q[1],q[2],q[3],'#5a5e6a')})});

// ================= the warehouse: pallets, drums, a portacabin, a gantry with a hook, a car under a tarp, a second docker =================
pzArt(IXR.bz_port,function(g,R,K){
 [[110,150],[174,150]].forEach(function(p){R(p[0],p[1],16,20,K);R(p[0]+1,p[1]+1,14,18,'#c89a6a');for(var y=p[1]+3;y<p[1]+19;y+=4)R(p[0]+1,y,14,1,'#8a6a44');R(p[0]+2,p[1]+2,12,8,'#e8e8f0');R(p[0]+2,p[1]+2,12,1,'#ffffff');R(p[0]+2,p[1]+11,12,6,'#d8d8e0')});
 [[16,174,'#2a5aa8'],[26,170,'#c8202a'],[18,186,'#2a5aa8'],[30,182,'#3a8a4a']].forEach(function(p){cgDisc(g,p[0],p[1],5,K);cgDisc(g,p[0],p[1],4,p[2]);cgDisc(g,p[0],p[1],2,shadeHex(p[2],.7));R(p[0]-1,p[1]-3,2,1,'#e8e8f0')});
 R(256,166,36,28,K);R(257,167,34,26,'#d8d4c8');R(257,167,34,3,'#a8a49c');R(262,172,12,8,'#5a7a9a');R(263,173,10,6,'#ffd27a');R(280,174,8,18,'#8a8678');R(286,183,1,2,'#2a2a34');
 R(108,108,40,20,K);R(109,109,38,18,'#4a5a3a');for(var x=110;x<146;x+=5)R(x,110,1,16,'#3a4a2a');R(109,117,38,1,'#5a6a4a');R(106,111,3,4,'#2a2a34');R(147,111,3,4,'#2a2a34');R(106,121,3,4,'#2a2a34');R(147,121,3,4,'#2a2a34');
 R(8,98,284,4,'#3a3e46');for(var x2=8;x2<292;x2+=8){R(x2,98,4,1,'#e8c040')}
 [[60,70],[250,70],[150,130]].forEach(function(p){g.fillStyle='rgba(30,26,20,.35)';g.beginPath();g.ellipse(p[0],p[1],10,4,0,0,TAU);g.fill()})});
IXR.bz_port.npc.push({id:'docker2',p:'docker2',x:250,y:178,d:2});
pzTick(IXR.bz_port,function(){var a=ixActor('docker2');if(a)pzWander(a,[200,120,80,60])});
pzLive(IXR.bz_port,function(g,Rr,ox,oy,t){var hx=40+((Math.sin(t*.2)+1)/2)*220|0;Rr(hx-4,96,10,8,'#e8c040');Rr(hx-3,97,8,6,'#14101e');Rr(hx,104,2,6,'#8a8e98');Rr(hx-1,110,4,2,'#c8202a')});
pzGlow(IXR.bz_port,function(P,t){P(268,176,20,'255,210,140',.25);P(220,60,40,'255,220,170',.08)});

// ================= the club: more dancers, bar stools, a velvet rope and a bouncer, a coat check, a disco ball, lasers =================
pzArt(IXR.bz_club,function(g,R,K){
 for(var x=222;x<290;x+=14){cgDisc(g,x,72,4,K);cgDisc(g,x,72,3,'#c49a36');cgDisc(g,x,72,2,'#3a1048')}
 [[112,178],[128,178]].forEach(function(p){cgDisc(g,p[0],p[1],2.5,'#e8c050');R(p[0],p[1]+1,1,5,'#c49a36')});R(113,179,15,1,'#c8202a');R(113,180,15,1,'#8a1428');
 R(236,168,56,24,K);R(237,169,54,10,'#3a2a3a');for(var i=0;i<8;i++)R(240+i*6,170,3,7,['#2a2a34','#5a3a6a','#3a5a6a','#6a2a3a'][i%4]);R(237,179,54,12,'#5a1a3a');R(237,179,54,1,'#ff4da6');
 R(40,98,6,8,'#c8ccd8');R(41,95,2,4,'#1e5a32');R(52,99,2,3,'#f4f0e8');R(30,104,2,3,'#f4f0e8');
 pf(g,'SHINJU',16,12,'#5a1a3a',2)});
IXR.bz_club.npc.push({id:'dn5',p:'dn5',x:100,y:122,d:0},{id:'dn6',p:'dn6',x:204,y:102,d:2},{id:'bounc2',p:'bounc2',x:120,y:188,d:1},{id:'vipg',p:'cust3',x:30,y:92,d:0,pose:'sit'});
pzTick(IXR.bz_club,function(){['dn5','dn6'].forEach(function(id,i){var a=ixActor(id);if(!a)return;var k=Math.floor(TIME*2.5+i*2.3+3);a.d=[0,3,0,2,1,2][k%6]})});
pzLive(IXR.bz_club,function(g,Rr,ox,oy,t){var on=Math.floor(t*3)%2;g.save();g.translate(-ox,-oy);pf(g,'SHINJU',16,12,on?'#ff4da6':'#ff7ab8',2);g.restore();
 cgDisc(g,150-ox,70-oy,4,'#8a8e98');for(var k=0;k<6;k++){var a=t*2+k;Rr(Math.round(150+Math.cos(a)*2.5),Math.round(70+Math.sin(a)*2.5),1,1,'#ffffff')}
 g.globalAlpha=.35;var cols=['#ff4da6','#5ae0ff','#7dff8c'];for(var l=0;l<3;l++){var a2=Math.sin(t*1.3+l*2)*.9;g.strokeStyle=cols[l];g.lineWidth=1;g.beginPath();g.moveTo(150-ox,58-oy);g.lineTo(150+Math.sin(a2)*120-ox,58+Math.cos(a2)*90-oy);g.stroke()}g.globalAlpha=1});

// ================= the TV studio: a lighting truss, softboxes, a teleprompter, the director, a boom mic, a make-up mirror, ON AIR =================
pzArt(IXR.bz_tv,function(g,R,K){
 R(60,46,180,4,'#3a3a46');for(var x=64;x<240;x+=20){R(x,45,6,6,K);R(x+1,46,4,4,'#ffd27a')}
 [[64,64],[236,124]].forEach(function(p){R(p[0]-7,p[1]-5,14,10,K);R(p[0]-6,p[1]-4,12,8,'#f4f4f8');R(p[0]-6,p[1]-4,12,1,'#ffffff');R(p[0]-1,p[1]+5,2,6,'#5a5e6a');R(p[0]-4,p[1]+10,8,1,'#5a5e6a')});
 R(144,116,12,6,K);R(145,117,10,4,'#1a2a3a');
 R(198,148,30,14,K);R(199,149,28,12,'#5a4a3a');R(201,151,8,6,'#f4f0e8');R(212,152,3,3,'#f4f4f4');R(218,151,4,4,'#c8202a');
 R(14,140,36,4,K);R(15,141,34,2,'#e8e4dc');for(var i=0;i<6;i++)R(16+i*6,138,2,2,'#ffd27a');R(14,144,36,24,K);R(15,145,34,22,'#5a4a5a');R(26,150,12,10,'#3a3a46');
 [[100,72],[200,72]].forEach(function(p){R(p[0]-3,p[1],6,5,'#5a4a3a');cgDisc(g,p[0],p[1]-2,5,'#1e5a32');cgDisc(g,p[0]-2,p[1]-4,2,'#2a7a40')});
 R(170,158,8,5,K);R(171,159,6,3,'#f4f4f4');for(var k=0;k<3;k++)R(171+k*2,158,1,1,'#14101e');
 R(272,150,18,10,K);R(273,151,16,8,'#5a1418');pf(g,'ON',276,152,'#8a3a3a')});
IXR.bz_tv.npc.push({id:'dir',p:'dir',x:212,y:146,d:0,pose:'sit'},{id:'boom',p:'boom',x:204,y:106,d:2});
pzLive(IXR.bz_tv,function(g,Rr,ox,oy,t){for(var i=0;i<3;i++)Rr(146,118+((i*2+Math.floor(t*3))%4),8,1,'#7dff8c');
 g.strokeStyle='#8a8e98';g.lineWidth=1;g.beginPath();g.moveTo(204-ox,90-oy);g.lineTo(170-ox,74-oy);g.stroke();cgDisc(g,168-ox,73-oy,3,'#5a5e6a');Rr(166,71,4,2,'#8a8e98');
 var live=Math.floor(t*1.2)%2;g.save();g.translate(-ox,-oy);pf(g,'ON',276,152,live?'#ff3a3a':'#8a3a3a');g.restore()});
pzGlow(IXR.bz_tv,function(P,t){P(64,64,30,'255,250,240',.2);P(236,124,30,'255,250,240',.2);P(32,140,20,'255,220,150',.2);P(281,155,14,'255,60,60',.3*(Math.floor(t*1.2)%2))});

// ================= the showroom: a lounge, a coffee machine, brochures, a rope round the legend, another salesperson =================
pzArt(IXR.dealer,function(g,R,K){
 R(16,154,44,14,K);R(17,155,42,12,'#f4f4f8');R(17,163,42,4,'#c8c8d4');R(16,168,14,26,K);R(17,169,12,24,'#f4f4f8');R(26,178,22,12,K);R(27,179,20,10,'#8ab8c8');R(30,182,6,4,'#c8202a');R(39,182,6,4,'#3a6ab8');
 R(320,168,24,20,K);R(321,169,22,18,'#2a2a34');R(324,172,6,6,'#c8202a');R(334,172,6,6,'#f4f4f4');R(326,182,12,3,'#5a5e6a');
 R(300,150,12,20,K);R(301,151,10,18,'#c8c8d4');for(var i=0;i<4;i++)R(302,153+i*4,8,3,['#c8202a','#3a6ab8','#ffd23a','#141418'][i]);
 [[226,140],[286,140],[226,192],[286,192]].forEach(function(p){cgDisc(g,p[0],p[1],2.5,'#e8c050');R(p[0],p[1]+1,1,4,'#c49a36')});
 for(var x=228;x<285;x++){R(x,141+Math.round(Math.sin((x-228)/58*Math.PI)*2),1,1,'#c8202a');R(x,193+Math.round(Math.sin((x-228)/58*Math.PI)*2),1,1,'#c8202a')}
 for(var y=143;y<191;y++){R(226+Math.round(Math.sin((y-143)/48*Math.PI)*2),y,1,1,'#c8202a');R(286-Math.round(Math.sin((y-143)/48*Math.PI)*2),y,1,1,'#c8202a')}});
IXR.dealer.ob.push([16,152,46,44],[318,166,28,24],[298,148,16,24]);
IXR.dealer.npc.push({id:'sales2',p:'sales2',x:130,y:126,d:0},{id:'cust1',p:'cust1',x:300,y:136,d:1});
pzTick(IXR.dealer,function(){var a=ixActor('sales2');if(a)pzWander(a,[100,120,160,30]);var c=ixActor('cust1');if(c)pzWander(c,[40,130,280,20])});
pzGlow(IXR.dealer,function(P,t){P(332,176,14,'255,200,150',.18)});

Object.assign(ZH,{});

// ---------- the «Стадион» drift zone is gone: the plaza round the stadium was too small and hard to get into.
// it is kept aside only so the story's «Парковка у Стадиона» point still has its spot.
var STADZ=null;
function stadOff(){for(var i=ZONES.length-1;i>=0;i--)if(ZONES[i].id==='stad'){STADZ=ZONES[i];ZONES.splice(i,1)}if(typeof ZP!=='undefined'&&ZP&&ZP.id==='stad'){ZP=null;try{zPrompt(null)}catch(e){}}MAPB=null}
var _gzStad=genZones;genZones=function(){_gzStad();stadOff()};
var _spStad=stPlaces;stPlaces=function(){if(STP||!STADZ)return _spStad();ZONES.push(STADZ);try{return _spStad()}finally{var i=ZONES.indexOf(STADZ);if(i>=0)ZONES.splice(i,1)}};
(function chk(){if(!window.worldReady){setTimeout(chk,500);return}if(!STADZ)stadOff()})();

// ===== the penthouse: «Скай Резиденс» by Tokyo Tower — buy it, walk in, furnish it from a catalogue =====
// outside: a glass tower with a rooftop pool and a helipad replaces the block next to the tower;
// inside: a 384x232 loft with a panoramic window; fifteen things to buy (50 000 ¥ … 20 000 000 ¥), each one appears in the room.
var HM=null,HMC=null,HMX=6385,HMY=5505,HMW=150,HMB=150,HMHH=168,HMPRICE=5000000;
function hmOwn(){return !!(S.home&&S.home.own)}
function hmHas(id){return !!(S.home&&S.home.items&&S.home.items[id])}

// ---------- outside: the tower from above
function hmArt(){if(HMC)return HMC;var W=HMW,H=HMHH,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
 // the roof: a parapet, a stone deck
 R(0,0,W,118,K);R(1,1,W-2,116,'#2a2e3c');R(3,3,W-6,112,'#3a4052');for(y=5;y<113;y++)for(x=5;x<W-5;x++){var col=(x%8===0||y%8===0)?'#a8a094':'#b8b0a4';if(hsh(x,y,17)<.04)col='#c4bcb0';R(x,y,1,1,col)}
 // the infinity pool and the loungers
 R(7,7,61,51,'#e8e4dc');R(9,9,57,47,'#2a8ac0');for(y=9;y<56;y+=4)for(x=9+(y%8?2:0);x<66;x+=8)R(x,y,3,1,'#4aa8d8');R(7,7,2,51,'#1a6a9a');
 for(i=0;i<4;i++){var lx=10+i*14;R(lx,62,9,12,K);R(lx+1,63,7,10,'#f0ece4');R(lx+1,63,7,3,'#d8d4cc')}cgDisc(g,64,68,5,K);cgDisc(g,64,68,4,'#c84a6a');cgDisc(g,64,68,1,'#f0ece4');
 // a strip of garden between the pool and the helipad
 R(71,6,15,66,'#3a5a3a');for(i=0;i<5;i++){cgDisc(g,78,12+i*13,6,'#1e4a2a');cgDisc(g,77,11+i*13,4,'#2a6a3a');R(75,9+i*13,2,1,'#4a8a4a')}
 // the helipad
 R(89,7,55,57,'#30343e');cgDisc(g,116,35,25,K);cgDisc(g,116,35,24,'#3a3e4a');cgDisc(g,116,35,21,'#c8a830');cgDisc(g,116,35,19,'#3a3e4a');R(109,26,3,18,'#e8e8f0');R(120,26,3,18,'#e8e8f0');R(112,33,8,3,'#e8e8f0');
 [[92,10],[140,10],[92,60],[140,60]].forEach(function(p){R(p[0]-1,p[1]-1,3,3,K);R(p[0],p[1],1,1,'#ff5a5a')});
 // the glass pavilion of the penthouse itself
 R(6,76,W-12,39,K);R(7,77,W-14,37,'#34425e');for(x=7;x<W-7;x+=12)R(x,77,1,37,'#2a3450');for(y=77;y<114;y+=9)R(7,y,W-14,1,'#2a3450');R(7,77,W-14,1,'#5a6a8a');
 [[31,86],[103,95]].forEach(function(p){R(p[0],p[1],23,8,'#ffd27a');R(p[0],p[1],23,1,'#fff0c0')});R(70,82,12,26,'#2a3a4a');
 // the south face: a glass curtain wall, lit windows, cyan edges
 R(0,118,W,32,K);R(1,119,W-2,30,'#1a2236');for(y=121;y<148;y+=7)for(x=4;x<W-4;x+=7){var lit=hsh(x,y,29)<.32;R(x,y,6,5,lit?'#ffd27a':'#2a3a5a');if(!lit)R(x,y,6,1,'#3a4a6a')}
 R(1,119,2,30,'#5ae0ff');R(W-3,119,2,30,'#5ae0ff');R(36,120,78,7,'#1a2236');pfc(g,'SKY RESIDENCE',75,121,'#f4f4f8');
 // the lobby: a canopy, glass doors, steps, two little trees
 R(0,150,W,18,K);R(1,150,W-2,10,'#2a2a34');R(52,147,46,6,'#1c1e28');R(54,152,42,1,'#ffd27a');R(60,153,30,7,'#c49a36');R(61,154,28,6,'#5a7a9a');R(74,154,2,6,'#c49a36');R(62,155,4,1,'#8ab0d0');
 R(1,160,W-2,7,'#8a8a96');R(1,163,W-2,1,'#7a7a86');[[36,158],[114,158]].forEach(function(p){R(p[0]-4,p[1]-2,8,6,'#5a5e6a');cgDisc(g,p[0],p[1]-5,5,'#1e5a2a');cgDisc(g,p[0]-1,p[1]-6,3,'#2a7a3a')});
 return HMC=c}
function hmBuild(){HM=null;var r={x:HMX,y:HMY,w:HMW,h:HMHH};
 BH.q(r.x,r.y,r.x+r.w,r.y+HMB,function(b){if(b.hid||b.cas)return;var ox=Math.min(r.x+r.w,b.x+b.w)-Math.max(r.x,b.x),oy=Math.min(r.y+HMB,b.y+b.h)-Math.max(r.y,b.y);if(ox>0&&oy>0)b.hid=1});
 var rm=[];PH.q(r.x-4,r.y-4,r.x+r.w+4,r.y+r.h+4,function(p){if(p.hid||p.gone)return;var px=wd(p.x,r.x),py=wd(p.y,r.y);if(px>-3&&py>-3&&px<r.w+3&&py<r.h+2)rm.push(p)});
 rm.forEach(function(p){hashRmNear(PH,p,p.x,p.y,(p.t===P_CAR?20:Math.max(p.r||2,12))+2);p.hid=1;p.gone=1});
 var B={x:HMX,y:HMY,w:HMW,h:HMB,st:6,ht:7,ns:1,d:0,sd:91,sky:1};addB(B);
 var q=gpsNear(HMX+75,HMY+HMHH+18,80);HM={b:B,x:HMX,y:HMY,w:HMW,h:HMHH,door:{x:q?q.x:HMX+75,y:q?q.y:HMY+HMHH+18}}}
var _bbHm=buildBrk;buildBrk=function(){try{hmBuild()}catch(e){console.error(e)}_bbHm()};
var _dBHm=drawB;drawB=function(g,b,x,y,an){if(b.sky){g.drawImage(hmArt(),x,y);return}return _dBHm(g,b,x,y,an)};
// live: the pool shimmers, the helipad lights blink
function hmDraw(){if(!HM)return;var X=SX(HM.x),Y=SY(HM.y);if(X>VW+20||Y>VH+20||X+HM.w<-20||Y+HM.h<-20)return;var t=TIME;cx.globalAlpha=.55;cx.fillStyle='#9ae0ff';
 for(var i=0;i<6;i++){var yy=Math.round(Y+12+((t*6+i*8)%42)),xx=Math.round(X+12+((i*17+t*9)%46));cx.fillRect(xx,yy,5,1)}cx.globalAlpha=1;
 if(Math.floor(t*2)%2){cx.fillStyle='#ff3a3a';[[92,10],[140,10],[92,60],[140,60]].forEach(function(p){cx.fillRect(Math.round(X+p[0]),Math.round(Y+p[1]),1,1)})}}
var _dzHm=drawZones;drawZones=function(l){_dzHm(l);if(l===0&&window.worldReady)hmDraw()};
// on the map
MAPG.sky=['.CCCCC.','.CWCWC.','.CCCCC.','.CWCWC.','.CCCCC.','.CWCWC.','CCCCCCC'];MAPK.sky=['sky','Пентхаус'];
var _mbHm=mapBase;mapBase=function(s){if(MAPB&&MAPBS===s)return MAPB;if(!HM)return _mbHm(s);var fake={k:'sky',x:HM.x,y:HM.y,w:HM.w,h:HMB};SPEC.push(fake);try{return _mbHm(s)}finally{var i=SPEC.indexOf(fake);if(i>=0)SPEC.splice(i,1)}};

// ---------- the things you can buy for the flat (cheapest first); each draws itself into the room
var HMI=[
 {id:'plant',p:50000,n:['Растения','Plants'],d:['Четыре больших фикуса в бетонных кадках. Квартира оживает.','Four big ficus trees in concrete pots. The flat comes alive.'],r:[8,44,376,184],ob:[[92,46,12,12],[270,46,12,12],[10,210,12,14],[362,210,12,14]],
  art:function(g,R){[[98,52],[276,52],[16,218],[368,218]].forEach(function(p){R(p[0]-6,p[1]-1,12,8,'#14101e');R(p[0]-5,p[1],10,6,'#8a8e98');R(p[0]-5,p[1],10,1,'#a8acb6');cgDisc(g,p[0],p[1]-5,7,'#14101e');cgDisc(g,p[0],p[1]-5,6,'#1e5a32');cgDisc(g,p[0]-3,p[1]-7,3,'#2a7a40');cgDisc(g,p[0]+3,p[1]-4,3,'#2a6a3a');R(p[0]-1,p[1]-9,2,1,'#4a9a5a')})}},
 {id:'cat',p:100000,n:['Кот','A cat'],d:['Рыжий, наглый, спит где хочет. Корзинка в комплекте.','Ginger, cheeky, sleeps wherever he likes. Basket included.'],r:[78,96,22,16],ob:[],
  art:function(g,R){cgDisc(g,89,104,8,'#14101e');cgDisc(g,89,104,7,'#a87a4a');cgDisc(g,89,104,5,'#e8dcc8');R(84,103,10,1,'#d8ccb8')}},
 {id:'neon',p:250000,n:['Неоновая вывеска','A neon sign'],d:['«LYOHA» розовым неоном на стене. Видно с улицы.','“LYOHA” in pink neon on the wall. You can see it from the street.'],r:[8,6,52,34],ob:[],
  art:function(g,R){R(12,12,44,22,'#5a5a64');pf(g,'LYO',15,15,'#6a2a52',2);pf(g,'HA',23,26,'#6a2a52',1)}},
 {id:'bed',p:300000,n:['Кровать king-size','A king-size bed'],d:['Огромная кровать и ночник. Можно выспаться до утра.','A huge bed and a night lamp. You can sleep till morning.'],r:[14,48,68,58],ob:[[14,48,68,58]],
  art:function(g,R){R(15,49,52,56,'#14101e');R(16,50,50,54,'#3a2a24');R(17,54,48,48,'#ece8e0');R(17,70,48,32,'#3a4a7a');R(17,70,48,2,'#5a6a9a');for(var x=20;x<64;x+=8)R(x,74,1,26,'#34426e');R(19,56,20,10,'#f8f8f8');R(43,56,20,10,'#f8f8f8');R(19,65,20,1,'#d8d8d8');R(43,65,20,1,'#d8d8d8');R(16,50,50,4,'#2a1e18');
   R(68,50,13,13,'#14101e');R(69,51,11,11,'#4a3424');cgDisc(g,74,56,3,'#ffd27a');R(73,55,2,1,'#fff0c0')}},
 {id:'sofa',p:500000,n:['Диван и ковёр','A sofa and a rug'],d:['Г-образный диван, журнальный столик, мягкий ковёр.','An L-shaped sofa, a coffee table, a soft rug.'],r:[116,62,130,74],ob:[[124,118,118,18],[228,84,16,52],[158,90,48,18]],
  art:function(g,R){R(118,64,128,72,'#4a3a5a');R(120,66,124,68,'#5a4a6a');for(var x=124;x<242;x+=8)for(var y=70;y<132;y+=8)if(((x+y)>>3)%2)R(x,y,2,2,'#6a5a7a');R(120,66,124,1,'#7a6a8a');R(120,133,124,1,'#3a2a4a');
   R(124,118,118,16,'#14101e');R(125,119,116,10,'#3a7a8a');R(125,128,116,5,'#1e4a5a');for(var x2=125;x2<230;x2+=26)R(x2,119,1,10,'#2a6a7a');R(228,84,14,50,'#14101e');R(229,85,12,48,'#3a7a8a');R(237,85,4,48,'#1e4a5a');R(229,108,8,1,'#2a6a7a');
   R(158,90,48,18,'#14101e');R(159,91,46,16,'#5a3a24');R(161,93,42,12,'#8ab8c8');R(161,93,42,1,'#c8e0e8');R(170,96,6,4,'#e8dcc0');R(186,97,3,3,'#c8202a')}},
 {id:'tv',p:800000,n:['Телевизор на 100 дюймов','A 100-inch TV'],d:['Перед окном, на низкой тумбе. Включается, когда садишься на диван.','In front of the window on a low stand. It turns on when you sit on the sofa.'],r:[148,44,68,16],ob:[[148,46,68,12]],
  art:function(g,R){R(148,50,68,9,'#14101e');R(149,51,66,7,'#2a2a34');R(149,51,66,1,'#3a3a46');R(152,45,60,5,'#14101e');R(153,46,58,3,'#0c0c12');R(155,46,2,1,'#3a3a46')}},
 {id:'aqua',p:1200000,n:['Аквариум с кои','A koi aquarium'],d:['Длинный аквариум-перегородка. Кои приносят удачу. Дорогую.','A long aquarium wall. Koi bring luck. Expensive luck.'],r:[250,60,16,84],ob:[[250,60,16,84]],
  art:function(g,R){R(250,60,16,84,'#14101e');R(251,61,14,82,'#1e6a9a');R(252,62,12,80,'#2a7aaa');R(252,62,12,1,'#7ac8e8');R(252,136,12,6,'#d8c890');for(var i=0;i<5;i++){R(253+(i%2)*9,128-i*14,1,9,'#2a8a4a');R(254+(i%2)*7,131-i*14,1,6,'#3aa060')}}},
 {id:'arcade',p:1500000,n:['Игровые автоматы','Arcade cabinets'],d:['Два автомата у стены. «Дрифт-7» — как в казино, только дома.','Two cabinets by the wall. “Drift-7” — like the casino, but at home.'],r:[326,44,44,18],ob:[[326,44,44,18]],
  art:function(g,R){[330,350].forEach(function(x){R(x,44,16,16,'#14101e');R(x+1,44,14,15,'#3a2a6a');R(x+1,44,14,2,'#5a4a8a');R(x+3,52,10,4,'#14101e');R(x+4,53,8,2,'#1a1a2a');cgDisc(g,x+5,49,1.5,'#c8202a');R(x+9,48,3,2,'#e8c050')})}},
 {id:'bar',p:2000000,n:['Домашний бар','A home bar'],d:['Стойка тёмного дерева, бутылки, три табурета. Сам себе бармен.','A dark wood counter, bottles, three stools. Your own bartender.'],r:[332,114,44,66],ob:[[350,114,26,66]],
  art:function(g,R){R(350,114,26,66,'#14101e');R(351,115,24,64,'#3a1e14');R(351,115,2,64,'#e8c050');R(353,115,1,64,'#7a3e24');for(var i=0;i<9;i++){var by=118+i*7,bc=['#2a6a3a','#8a2a1a','#c8a040','#3a3a8a','#e8e0d0'][i%5];R(366,by,6,3,bc);R(372,by+1,2,1,bc);R(366,by,6,1,'rgba(255,255,255,.3)')}
   R(356,130,4,4,'rgba(200,230,255,.7)');R(357,129,2,1,'#e8c050');[126,146,166].forEach(function(y){cgDisc(g,341,y+1,5,'rgba(10,6,20,.35)');cgDisc(g,340,y,5,'#14101e');cgDisc(g,340,y,4,'#c49a36');cgDisc(g,340,y,3,'#5a1424')})}},
 {id:'pool',p:2500000,n:['Бильярдный стол','A pool table'],d:['Зелёное сукно, лампа над столом, кий у стены.','Green felt, a lamp over the table, a cue by the wall.'],r:[26,136,68,40],ob:[[26,136,68,40]],
  art:function(g,R){R(26,136,68,40,'#14101e');R(27,137,66,38,'#5a3a24');R(27,137,66,1,'#7a5a3a');R(31,141,58,30,'#1e7a4a');for(var i=0;i<30;i++)R(31+((i*37)%58),141+((i*53)%30),1,1,'#248a54');
   [[30,140],[59,139],[88,140],[30,170],[59,171],[88,170]].forEach(function(p){cgDisc(g,p[0]+.5,p[1]+.5,2,'#14101e')});[[44,156,'#f4f4f4'],[70,150,'#e8c040'],[73,153,'#c8202a'],[70,156,'#3a6ab8'],[73,159,'#14101e'],[76,156,'#ff8a3d'],[67,153,'#9a5ad0']].forEach(function(b){cgDisc(g,b[0],b[1],1.6,b[2])});R(36,166,30,1,'#c8a070')}},
 {id:'trophy',p:3000000,n:['Витрина трофеев','A trophy cabinet'],d:['Стеклянная полка вдоль стены: модели твоих машин, кубки, карта VIP.','A glass shelf along the wall: models of your cars, cups, the VIP card.'],r:[8,112,16,92],ob:[[8,112,14,92]],
  art:function(g,R){R(8,112,14,92,'#14101e');R(9,113,12,90,'#2a1e18');R(9,113,12,90,'rgba(140,180,220,.2)');for(var i=0;i<9;i++){var y=116+i*10;if(i%3===0){R(11,y,7,3,'#e8c050');R(13,y+3,3,2,'#c49a36');R(12,y+5,5,1,'#c49a36')}else{R(11,y+1,8,4,['#c8202a','#35c4ff','#f4f4f4','#ffd23f','#7bd957','#a66bff'][i%6]);R(12,y+4,2,1,'#14101e');R(16,y+4,2,1,'#14101e')}}}},
 {id:'piano',p:4000000,n:['Концертный рояль','A grand piano'],d:['Чёрный, блестящий, настоящий. Сыграешь — услышишь.','Black, glossy, real. Play it — you’ll hear it.'],r:[104,144,50,54],ob:[[106,144,46,44],[120,188,18,8]],
  art:function(g,R){R(106,146,38,40,'#14101e');cgDisc(g,140,170,14,'#14101e');R(107,147,36,38,'#1c1c24');cgDisc(g,139,170,13,'#1c1c24');R(108,148,30,2,'#3a3a46');R(110,152,24,24,'#2a2a34');for(var x=110;x<134;x+=3)R(x,153,1,22,'#4a3424');
   R(107,182,36,5,'#f4f4f0');for(var k=108;k<143;k+=2)R(k,182,1,5,'#c8c8c0');for(var k2=109;k2<142;k2+=5)R(k2,182,2,3,'#14101e');R(121,189,16,6,'#14101e');R(122,190,14,4,'#2a2a34')}},
 {id:'jacuzzi',p:6000000,n:['Джакузи у окна','A jacuzzi by the window'],d:['Круглая ванна с пузырями и видом на Токийскую башню.','A round tub with bubbles and a view of Tokyo Tower.'],r:[280,58,54,56],ob:[[280,60,52,50]],
  art:function(g,R){cgDisc(g,306,86,26,'#14101e');cgDisc(g,306,86,25,'#d8d4cc');cgDisc(g,306,86,21,'#14101e');cgDisc(g,306,86,20,'#3ab0d0');cgDisc(g,306,86,14,'#4ac0e0');R(300,108,12,3,'#b8b4ac');R(296,111,20,2,'#a8a49c')}},
 {id:'lift',p:10000000,n:['Подиум с машиной','A car turntable'],d:['Поворотный подиум с подсветкой: твоя машина прямо в гостиной. Отсюда же можно сменить машину.','A lit turntable: your car right in the living room. You can switch cars from here too.'],r:[272,150,68,68],ob:[[274,152,64,64]],
  art:function(g,R){cgDisc(g,306,184,33,'#14101e');cgDisc(g,306,184,32,'#3a3e4a');cgDisc(g,306,184,29,'#5a5e6a');cgDisc(g,306,184,28,'#4a4e5a');for(var i=0;i<16;i++){var a=i/16*TAU;R(Math.round(306+Math.cos(a)*30),Math.round(184+Math.sin(a)*30),1,1,'#5ae0ff')}}},
 {id:'dragon',p:20000000,n:['Золотой дракон','The golden dragon'],d:['Статуя из чистого золота на мраморе. Двадцать миллионов. Смотрит, будто знает сколько.','A statue of solid gold on marble. Twenty million. It looks like it knows how much.'],r:[168,146,32,30],ob:[[170,148,28,26]],
  art:function(g,R){R(170,160,28,14,'#14101e');R(171,161,26,12,'#e8e4dc');R(171,161,26,1,'#ffffff');R(171,172,26,1,'#b8b4ac');for(var i=0;i<30;i++){var a=i*.42,rr=11-i*.3,x=184+Math.cos(a)*rr,y=158+Math.sin(a)*rr*.6-i*.15;cgDisc(g,x,y,2.2,'#a87a20');cgDisc(g,x-.5,y-.5,1.6,'#e8c050')}R(182,146,5,4,'#e8c050');R(183,145,1,1,'#fff0a0');R(186,147,1,1,'#c8202a');R(181,145,1,2,'#e8c050');R(187,145,1,2,'#e8c050')}}];
function hmShow(id){return hmHas(id)||(IXR.home&&IXR.home.trial===id)}
function hmItem(id){for(var i=0;i<HMI.length;i++)if(HMI[i].id===id)return HMI[i];return null}
function hmRest(){var t=0;HMI.forEach(function(it){if(!hmHas(it.id))t+=it.p});return t}

// ---------- the room
function hmRoomArt(extra){var W=384,H=232,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
 // light oak planks
 for(y=44;y<H-4;y++)for(x=8;x<W-8;x++){var row=Math.floor((y-44)/6),col=row%2?'#b8905e':'#b08856';if((y-44)%6===0||(x+row*37)%64===0)col='#8a6a44';else if(hsh(x,y,13)<.05)col='#c49a68';g.fillStyle=col;g.fillRect(x,y,1,1)}
 R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,172,4,K);R(212,H-4,172,4,K);R(176,H-8,32,8,'#5a4a3a');
 // the north wall: concrete at both ends, one long window between (the city is drawn live)
 R(8,6,52,34,'#8a8a92');R(324,6,52,34,'#8a8a92');for(x=8;x<60;x+=13)R(x,6,1,34,'#7a7a82');for(x=324;x<376;x+=13)R(x,6,1,34,'#7a7a82');
 R(60,6,264,34,K);R(61,7,262,32,'#1a2042');R(8,38,368,2,'#d8d4cc');R(8,40,368,4,'#5a4a3a');
 // the catalogue tablet by the door
 R(229,206,2,12,'#5a5e6a');R(224,202,12,7,K);R(225,203,10,5,'#5ae0ff');R(226,204,4,1,'#e8fcff');
 if(!hmHas('bed')){R(20,62,36,30,'#b8b4ac');R(21,63,34,28,'#e8e4dc');R(23,65,14,7,'#f8f8f8');R(21,78,34,13,'#8a8ea0');cgDisc(g,62,64,3,'#ffd27a')}
 HMI.forEach(function(it){if(hmHas(it.id)||it.id===extra)it.art(g,R)});
 return c}
function hmObs(){var o=[[0,0,384,46],[0,0,8,232],[376,0,8,232],[0,228,172,4],[212,228,172,4],[222,200,16,18]];HMI.forEach(function(it){if(hmShow(it.id))o=o.concat(it.ob)});if(!hmHas('bed'))o.push([18,60,40,34]);return o}
function hmHs(){var L2=[{id:'door',x:192,y:224,r:12,door:1,lb:['Выйти на улицу','Go outside'],act:function(){ixLeave()},tap:[172,214,40,18]},
  {id:'tab',x:230,y:196,r:14,lb:['Каталог для дома','Home catalogue'],tap:[222,198,16,20],act:function(){cgOpen(HSHOP)}}];
 function add(id,h){if(hmHas(id))L2.push(h)}
 add('bed',{id:'bed',x:40,y:112,r:12,lb:['Поспать','Sleep'],tap:[14,48,52,58],act:hmSleep});
 add('sofa',{id:'sofa',x:182,y:112,r:14,lb:['Сесть на диван','Sit on the sofa'],tap:[124,116,104,20],act:function(){ixSit(182,128,1,0,182,112);if(hmHas('tv'))setTimeout(function(){if(IX.on&&IX.pose==='sit')ixSay(hmTv(),182,34)},900)}});
 add('aqua',{id:'aqua',x:274,y:100,r:12,lb:['Аквариум','The aquarium'],tap:[250,60,16,84],act:function(){ixSay(TR('Кои. Самый толстый — Тацуми-младший. Не говори старику.','Koi. The fattest one is Tatsumi Jr. Don’t tell the old man.'),258,56)}});
 add('arcade',{id:'arcade',x:348,y:70,r:12,lb:['Сыграть на автомате','Play the machine'],tap:[326,44,44,18],act:function(){cgOpen(SLOT)}});
 add('bar',{id:'bar',x:330,y:146,r:14,lb:['Налить себе','Pour yourself a drink'],tap:[334,114,42,66],act:function(){IX.d=3;var L3=[TR('Сам себе бармен. И сам себе клиент.','Your own bartender. And your own customer.'),TR('Сок. Ты же за рулём. Всегда.','Juice. You’re always driving.'),TR('За дядю Мишу.','To uncle Misha.')],n=IX.hb=(IX.hb||0)+1;ixSay(L3[n%3],IX.x,IX.y-20)}});
 add('pool',{id:'pool',x:60,y:186,r:14,lb:['Сыграть в бильярд','Play pool'],tap:[26,136,68,40],act:function(){var w=cgRnd(3),L3=[TR('Восьмёрка в угол. Партия твоя.','The eight in the corner. Your game.'),TR('Кий соскользнул. Бывает.','The cue slipped. It happens.'),TR('Три шара с одного удара. Никто не видел. Жаль.','Three balls with one shot. Nobody saw. Shame.')];if(S.snd)try{auTone(1200,.05,.04,'square')}catch(e){}ixSay(L3[w],60,128)}});
 add('trophy',{id:'trophy',x:32,y:190,r:12,lb:['Витрина трофеев','The trophy cabinet'],tap:[8,112,14,92],act:function(){var c=S.casStat||{},t=TR('Лучший выигрыш','Best win')+': '+fmtN(c.big|0)+' ¥';if(vipSt()>=2)t+=' · VIP ✓';t+=' · '+TR('Сора','Sora')+' '+(S.vipW|0)+':'+(S.vipL|0);ixSay(t,20,104)}});
 add('piano',{id:'piano',x:129,y:206,r:12,lb:['Сыграть на рояле','Play the piano'],tap:[106,144,46,44],act:hmPiano});
 add('jacuzzi',{id:'jacuzzi',x:306,y:120,r:14,lb:['Залезть в джакузи','Get in the jacuzzi'],tap:[280,60,52,50],act:function(){ixSit(306,94,0,0,306,120,11);setTimeout(function(){if(IX.on&&IX.pose==='sit')ixSay(TR('Вот это жизнь.','Now this is living.'),306,60)},900)}});
 add('lift',{id:'lift',x:258,y:184,r:14,lb:['Машины: сменить, купить','Cars: switch, buy'],tap:[274,152,64,64],act:function(){ixStation('cars')}});
 add('dragon',{id:'dragon',x:184,y:186,r:12,lb:['Золотой дракон','The golden dragon'],tap:[170,144,28,30],act:function(){ixSay(TR('Двадцать миллионов. Смотрит, будто знает сколько.','Twenty million. It looks like it knows how much.'),184,136)}});
 if(hmHas('cat')){var ch={id:'cat',who:'cat',x:-99,y:-99,r:12,lb:['Погладить кота','Pet the cat'],act:hmPet};L2.push(ch);IXR.home.catHs=ch}
 return L2}
function hmRefresh(){var R=IXR.home;R.bg=null;R.G=null;R.ob=hmObs();R.hs=hmHs();HMPV={};var c=ixActor&&IX.r===R?ixActor('cat'):null;if(c)c.hide=!hmHas('cat')}
var HMPV={};function hmPreview(id){var k=id||'_';return HMPV[k]||(HMPV[k]=hmRoomArt(id))}
IXR.home={name:['Пентхаус «Скай Резиденс»','Sky Residence penthouse'],w:384,h:232,entry:[192,222],exitY:228,doorR:46,
 card:[['ПЕНТХАУС','PENTHOUSE'],['«Скай Резиденс» у Токийской башни. Продаётся: 5 000 000 ¥','Sky Residence by Tokyo Tower. For sale: 5 000 000 ¥'],['Купить за 5 млн','Buy for 5M']],
 door:function(){return HM?HM.door:null},
 ob:[],hs:[],npc:[{id:'cat',p:'cat',x:200,y:170,d:0,sp:26,hide:true}],
 enter:function(o){this.view=!!o.view&&!hmOwn();this.trial=null;if(!IXSH.cat)IXSH.cat=hmCatSheet();hmRefresh();var c=ixActor('cat');c.hide=!hmHas('cat');c.x=200;c.y=160;c.pose='stand';c.path=null;c.em=null;c.nap=0;
  if(o.first)setTimeout(function(){if(!IX.on||IX.r!==IXR.home)return;ixScene([{fade:0},{go:['hero',192,150]},{face:['hero',1]},{w:.4},{em:['hero','...']},{w:1},{em:['hero',null]},{fn:function(){ixSay(TR('Пусто. Даже эхо тут дорогое.','Empty. Even the echo is expensive here.'),192,110)}},{w:2.2}],function(){var hn=$('cahn');hn.textContent=TR('Каталог мебели — планшет у входа.','The furniture catalogue is the tablet by the door.');hn.style.display='block';IX.hint=6})},300)},
 art:function(){return hmRoomArt(this.trial||null)},
 leave:function(){GSHOP=false;this.trial=null;this.view=false;this.bg=null},
 tick:function(dt){var c=ixActor('cat'),ch=this.catHs;if(ch){ch.x=c.hide?-99:c.x;ch.y=c.hide?-99:c.y+4}if(c.hide||IX.scn)return;
  if(c.nap>0){c.nap-=dt;if(c.nap<=0){c.pose='stand';c.em=null}return}
  if(!c.path&&Math.random()<dt*.35){if(Math.random()<.25){c.pose='sit';c.d=0;c.em='zzz';c.nap=6+Math.random()*8;return}
   for(var k=0;k<8;k++){var tx=20+Math.random()*344,ty=60+Math.random()*160;if(ixFree(tx,ty)){var P=ixPath(c.x,c.y,tx,ty);if(P&&P.length){c.path=P;break}}}}},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  // the city behind the window: the sky by the hour, the skyline, Tokyo Tower in the middle
  var f=ixSky(),sc=ixSkyCol(f),sk='rgb('+(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0)+')',d2=ixMix(sc,[16,18,34],.62),dk='rgb('+(d2[0]|0)+','+(d2[1]|0)+','+(d2[2]|0)+')';
  Rr(61,7,262,32,sk);for(var x=61;x<323;x++){var h=6+((x*37)%9)+(((x>>3)*13)%8);Rr(x,39-h,1,h,dk);if(f<.5&&((x*7)%4)===0)for(var y=40-h;y<38;y+=3)if(((x*31+y*17+Math.floor(t*.6)*5)%11)<3)Rr(x,y,1,1,(x+y)%3?'#ffd27a':'#bfe8ff')}
  var tx0=192;Rr(tx0,9,1,4,'#e8e8f0');for(var k=0;k<26;k++){var w=1+Math.floor(k/3.2);Rr(tx0-Math.floor(w/2),12+k,w,1,(Math.floor(k/4)%2)?'#f4f4f8':'#e8402a')}Rr(tx0-3,21,7,1,'#14101e');Rr(tx0-5,29,11,1,'#14101e');if(f<.5&&Math.floor(t*1.4)%2)Rr(tx0,8,1,1,'#ff3a3a');
  for(x=104;x<323;x+=44)Rr(x,7,2,32,'#2a2e3a');
  if(hmShow('neon')&&!(Math.floor(t*7)%31===0)){g.save();g.translate(-ox,-oy);pf(g,'LYO',15,15,'#ff4da6',2);pf(g,'HA',23,26,'#ff4da6',1);g.restore()}
  if(hmShow('aqua'))for(var i=0;i<4;i++){var ky=Math.round(66+((t*8+i*19)%70)),kx=254+(i%2)*5;Rr(kx,ky,3,2,i%2?'#ff8a3d':'#f4f4f4');Rr(kx+1,ky,1,1,'#e86a20')}
  if(hmShow('arcade')){var fl=Math.floor(t*4)%3;Rr(335,53,8,2,['#ff4da6','#5ae0ff','#ffd23a'][fl]);Rr(355,53,8,2,['#5ae0ff','#ffd23a','#ff4da6'][fl])}
  if(hmShow('tv')&&IX.pose==='sit'&&Math.abs(IX.x-182)<2&&IX.y===128){var tc=['#5a8aff','#ff6a8a','#ffd27a','#6aff9a'][Math.floor(t*.8)%4];Rr(153,46,58,3,tc);g.globalAlpha=.12;g.fillStyle=tc;g.beginPath();g.moveTo(153-ox,49-oy);g.lineTo(211-ox,49-oy);g.lineTo(236-ox,118-oy);g.lineTo(128-ox,118-oy);g.closePath();g.fill();g.globalAlpha=1}
  if(hmShow('jacuzzi'))for(var b=0;b<8;b++){var a=b*.8+t*.6,r=(b*5+t*9)%17;Rr(Math.round(306+Math.cos(a)*r),Math.round(86+Math.sin(a)*r*.8),1,1,'#e8fcff')}
  if(hmShow('lift')){var sp=ixCarSpr();if(sp){g.save();g.translate(306-ox,184-oy);g.rotate(t*.35);g.scale(1.5,1.5);g.fillStyle='rgba(10,6,20,.35)';g.fillRect(-sp.width/2+1,-sp.height/2+2,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore()}}},
 front:function(g,ox,oy){if(IX.pose!=='sit')return;if(hmShow('sofa')&&IX.y===128&&IX.x>=124&&IX.x<=240){g.fillStyle='#14101e';g.fillRect(124-ox,126-oy,118,8);g.fillStyle='#3a7a8a';g.fillRect(125-ox,126-oy,116,2);g.fillStyle='#1e4a5a';g.fillRect(125-ox,128-oy,116,5)}},
 glow:function(g,ox,oy,t){var f=ixSky();g.globalCompositeOperation='lighter';function pool(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}
  var sc=ixSkyCol(f);pool(192,40,140,(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0),.1+.15*f);
  if(hmShow('neon'))pool(34,24,40,'255,77,166',.28);if(hmShow('bed'))pool(74,56,24,'255,210,140',.25);if(hmShow('aqua'))pool(258,100,30,'90,180,255',.18);if(hmShow('arcade'))pool(348,56,28,'180,90,255',.2);
  if(hmShow('pool'))pool(60,156,36,'255,230,170',.18);if(hmShow('jacuzzi'))pool(306,86,30,'90,220,255',.2);if(hmShow('lift'))pool(306,184,40,'90,224,255',.14);if(hmShow('dragon'))pool(184,158,26,'255,200,80',.25);pool(230,205,12,'90,224,255',.3);
  g.globalCompositeOperation='source-over'}};
// buying the flat at the street card; the first visit plays a little scene
var _ixEnterHm=ixEnter;ixEnter=function(id,opt){if(id!=='home')return _ixEnterHm(id,opt);opt=opt||{};
 if(!hmOwn()&&!opt.view){if(S.coins<HMPRICE){toast(TR('Нужно','Need')+' '+fmtN(HMPRICE)+' ¥ · '+TR('есть','you have')+' '+fmtN(Math.floor(S.coins))+' ¥');return}
  S.coins-=HMPRICE;S.home={own:1,items:{}};save();hmCard();popup(TR('Пентхаус твой!','The penthouse is yours!'),'big');if(S.snd)try{auBell()}catch(e){}opt.first=1}
 return _ixEnterHm(id,opt)};
function hmCard(){IXR.home.card=hmOwn()?[['ПЕНТХАУС','PENTHOUSE'],['Твой дом. Вид на Токийскую башню.','Your home. A view of Tokyo Tower.'],['Домой','Go home']]:[['ПЕНТХАУС','PENTHOUSE'],['«Скай Резиденс» у Токийской башни. Продаётся: 5 000 000 ¥','Sky Residence by Tokyo Tower. For sale: 5 000 000 ¥'],['Купить за 5 млн','Buy for 5M']];var q=$('ixq');if(q&&q._room==='home')q._room=null}
setTimeout(hmCard,0);

// ---------- things to do at home
function hmTv(){var L2=[TR('По новостям: «Неизвестный гонщик снова ушёл от полиции на С1».','On the news: “An unknown racer escaped the police on the C1 again”.'),TR('Реклама: «Сакура-Траст. Мы верим в ваше будущее». Ну-ну.','An ad: “Sakura Trust. We believe in your future.” Sure.'),TR('Ночное шоу: дрифт-корреспондент Аяка в прямом эфире.','The night show: drift reporter Ayaka live.'),TR('Старое кино про Ванган. Кажется, в кадре молодой Тацуми.','An old Wangan film. That might be a young Tatsumi on screen.')];var n=IX.htv=(IX.htv||0)+1;return L2[n%L2.length]}
function hmSleep(){ixSit(40,96,0,0,40,112);IX.em='zzz';setTimeout(function(){if(!IX.on||IX.r!==IXR.home)return;IX.fadeT=1;setTimeout(function(){if(!IX.on)return;if(!(S.tod|0))TODH=7.6;IX.em=null;ixStandUp();IX.fadeT=0;ixSay(TR('Доброе утро. Город уже проснулся.','Good morning. The city is already awake.'),IX.x,IX.y-20)},1600)},1400)}
function hmPiano(){ixSit(129,198,1,0,129,206);IX.em='spark';var N=[523,659,784,1047,988,784,659,698,880,1047,784,523],i=0;(function nx(){if(!IX.on||IX.pose!=='sit'||i>=N.length){IX.em=null;return}if(S.snd)try{auTone(N[i],.05,.25,'triangle')}catch(e){}i++;setTimeout(nx,210)})()}
function hmPet(){var c=ixActor('cat');c.em='heart';c.path=null;c.d=IX.x<c.x?2:3;if(S.snd)try{auTone(900,.04,.08,'triangle');setTimeout(function(){auTone(700,.04,.12,'triangle')},90)}catch(e){}setTimeout(function(){if(c.em==='heart')c.em=null},1800)}
// the cat: walks the flat, naps anywhere (a sheet of 16x18 cells like the people)
function hmCatSheet(){var c=mkCanvas(48,108),g=c.getContext('2d'),pal={K:'#14101e',O:'#e8963a',o:'#b8661c',W:'#f4ecdc',E:'#3a8a3a',N:'#ff8aa0'};
 function put(rows,cx0,cy0,mir){for(var y=0;y<rows.length;y++)for(var x=0;x<rows[y].length;x++){var ch=rows[y][x];if(ch==='.')continue;g.fillStyle=pal[ch];g.fillRect(cx0+(mir?rows[y].length-1-x:x),cy0+y,1,1)}}
 var dn=['.K....K.','KOK..KOK','KOOOOOOK','KOEOOEOK','KOONNOOK','.KOWWOK.','KOOOOOOK'],dnF=[['KWK..KWK'],['KWK...K.'],['.K...KWK']],
  up=['..K.K..K','.KOKOKKK','.KOOOOK.','KOoOOoOK','KOOoOoOK','KOOOOOOK','.KOOOOK.'],upF=[['.KK..KK.'],['.KK...K.'],['.K...KK.']],
  sd=['K.K.........','KOKK......K.','KEOOK....KOK','KNOOOOOOOOK.','.KOoOoOoOOK.','.KOOOOOOOK..'],sdF=[['.KW.K..WK...'],['.KWK..KW....'],['..KW.KW.K...']];
 for(var f=0;f<3;f++){put(dn.concat(dnF[f]),f*16+4,10,false);put(up.concat(upF[f]),f*16+4,18+10,false);put(sd.concat(sdF[f]),f*16+2,2*18+11,false);put(sd.concat(sdF[f]),f*16+2,3*18+11,true)}
 var sitB=['..K.K...','.KOKOK..','.KOOOOK.','KOoOOoOK','KOOOOOOKK','.KKKKKKOK'],nap=['..........','.KK.......','KOOK.KKKK.','KOEoKOOOOK','KOOOOoOoOK','.KKKKKKKK.'];
 for(f=0;f<3;f++){put(sitB,f*16+4,4*18+11,false);put(nap,f*16+3,5*18+12,false)}return c}

// ---------- the catalogue (on the tablet): a picture of the room with the thing in it, ◀ ▶, buy
var HSHOP={cw:384,ch:232,i:0,
 title:function(){return TR('Каталог для дома','Home catalogue')},busy:function(){return false},
 open:function(){this.ctl()},
 ctl:function(){var me=this,k=$('cgk');if(!k)return;k.innerHTML='';var it=HMI[this.i],own=hmHas(it.id),r=cgRow();
  r.appendChild(cgBtn('◀','',function(){me.i=(me.i+HMI.length-1)%HMI.length;me.ctl()}));var nb=cgBtn((this.i+1)+'/'+HMI.length+' · '+TR(it.n[0],it.n[1]),'',function(){});nb.style.flex='1';r.appendChild(nb);r.appendChild(cgBtn('▶','',function(){me.i=(me.i+1)%HMI.length;me.ctl()}));
  var r2=cgRow(),vw=!hmOwn(),b=cgBtn(own?TR('Уже стоит ✓','Already here ✓'):TR('Купить','Buy')+' · '+fmtN(it.p)+' ¥','go',function(){me.buy([it])});b.disabled=own||vw;r2.appendChild(b);
  if(!own){var tr=IXR.home.trial===it.id;r2.appendChild(cgBtn(tr?TR('Убрать примерку','Remove the try-on'):TR('Примерить','Try it on'),'',function(){IXR.home.trial=tr?null:it.id;hmRefresh();cgClose();var hn=$('cahn');if(!tr){hn.textContent=TR('Примерка','Try-on')+': '+TR(it.n[0],it.n[1])+'. '+TR('Нравится — купи в каталоге.','Like it? Buy it in the catalogue.');hn.style.display='block';IX.hint=6}}))}
  var rest=hmRest();if(!vw&&rest>0&&rest!==(own?-1:it.p))r2.appendChild(cgBtn(TR('Всё сразу','Everything')+' · '+fmtN(rest)+' ¥','',function(){me.buy(HMI.filter(function(q){return !hmHas(q.id)}))}));
  cgMsg(vw?TR('Это осмотр: сначала купи квартиру (5 000 000 ¥). Примерять можно уже сейчас.','This is a viewing: buy the flat first (5 000 000 ¥). You can try things on right now.'):TR(it.d[0],it.d[1]),vw?'l':own?'w':'');cgFit()},
 buy:function(list){if(!hmOwn())return;var t=0;list.forEach(function(q){t+=q.p});if(!t)return;if(S.coins<t){cgMsg(TR('Не хватает','Not enough')+': '+fmtN(t-Math.floor(S.coins))+' ¥','l');return}
  S.coins-=t;S.home.items=S.home.items||{};list.forEach(function(q){S.home.items[q.id]=1;if(IXR.home.trial===q.id)IXR.home.trial=null});save();cgBal();hmRefresh();cgS('win');popup('−'+fmtN(t)+' ¥','mul');this.ctl();cgMsg(list.length>1?TR('Квартира обставлена полностью!','The flat is fully furnished!'):TR(list[0].n[0],list[0].n[1])+' — '+TR('уже в квартире.','in the flat now.'),'b')},
 draw:function(g,t){var it=HMI[this.i];g.drawImage(hmPreview(hmHas(it.id)?null:it.id),0,0);if(IXR.home.live)IXR.home.live(g,0,0,t);
  if(Math.floor(t*3)%2){var r=it.r;g.strokeStyle='#ffd23a';g.lineWidth=2;g.strokeRect(r[0]-2,r[1]-2,r[2]+4,r[3]+4)}
  if(!hmHas(it.id)){g.fillStyle='rgba(20,16,30,.8)';g.fillRect(4,214,150,14);pfc(g,'PREVIEW',79,218,'#ffd23a')}}};
// a casino game window over the flat (the arcade, the catalogue) keeps Esc and the back button
var _ixLeaveHm=ixLeave;ixLeave=function(){if(IX.on&&IX.r===IXR.home&&typeof CGM!=='undefined'&&CGM.on){cgClose();return}return _ixLeaveHm()};

Object.assign(EN,{'Пентхаус':'Penthouse'});
Object.assign(ZH,{'Пентхаус':'顶层公寓','ПЕНТХАУС':'顶层公寓','Пентхаус «Скай Резиденс»':'“天空公馆”顶层公寓','«Скай Резиденс» у Токийской башни. Продаётся: 5 000 000 ¥':'东京塔旁的“天空公馆”。出售：5 000 000 ¥','Купить за 5 млн':'500万买下','Твой дом. Вид на Токийскую башню.':'你的家。看得见东京塔。','Домой':'回家',
 'Пентхаус твой!':'顶层公寓归你了！','Нужно':'需要','есть':'现有','Пусто. Даже эхо тут дорогое.':'空荡荡的。连回声都很贵。','Каталог мебели — планшет у входа.':'家具目录——门口的平板。','Выйти на улицу':'到外面去','Каталог для дома':'家居目录',
 'Растения':'植物','Четыре больших фикуса в бетонных кадках. Квартира оживает.':'四棵种在水泥盆里的大榕树。房子活了起来。','Кот':'猫','Рыжий, наглый, спит где хочет. Корзинка в комплекте.':'橘色，嚣张，想睡哪儿睡哪儿。附赠猫窝。','Неоновая вывеска':'霓虹招牌','«LYOHA» розовым неоном на стене. Видно с улицы.':'墙上粉色霓虹的“LYOHA”。街上都看得见。',
 'Кровать king-size':'特大号床','Огромная кровать и ночник. Можно выспаться до утра.':'超大的床和夜灯。可以一觉睡到天亮。','Диван и ковёр':'沙发和地毯','Г-образный диван, журнальный столик, мягкий ковёр.':'L形沙发、茶几、柔软的地毯。','Телевизор на 100 дюймов':'100英寸电视',
 'Перед окном, на низкой тумбе. Включается, когда садишься на диван.':'放在窗前的矮柜上。坐上沙发就会打开。','Аквариум с кои':'锦鲤水族箱','Длинный аквариум-перегородка. Кои приносят удачу. Дорогую.':'一道长长的水族箱隔断。锦鲤带来好运。昂贵的好运。','Игровые автоматы':'街机',
 'Два автомата у стены. «Дрифт-7» — как в казино, только дома.':'墙边两台街机。“漂移-7”——和赌场一样，只是在家里。','Домашний бар':'家庭酒吧','Стойка тёмного дерева, бутылки, три табурета. Сам себе бармен.':'深色木吧台、酒瓶、三张高脚凳。自己当酒保。','Бильярдный стол':'台球桌',
 'Зелёное сукно, лампа над столом, кий у стены.':'绿色台呢，桌上的灯，墙边的球杆。','Витрина трофеев':'奖杯柜','Стеклянная полка вдоль стены: модели твоих машин, кубки, карта VIP.':'沿墙的玻璃架：你的车模、奖杯、VIP卡。','Концертный рояль':'演奏级三角钢琴','Чёрный, блестящий, настоящий. Сыграешь — услышишь.':'黑色，锃亮，真家伙。弹一下就听得见。',
 'Джакузи у окна':'窗边的按摩浴缸','Круглая ванна с пузырями и видом на Токийскую башню.':'冒泡的圆形浴缸，看得见东京塔。','Подиум с машиной':'汽车展示转台','Поворотный подиум с подсветкой: твоя машина прямо в гостиной. Отсюда же можно сменить машину.':'带灯光的旋转台：你的车就在客厅里。在这里也能换车。',
 'Золотой дракон':'金龙','Статуя из чистого золота на мраморе. Двадцать миллионов. Смотрит, будто знает сколько.':'大理石底座上的纯金雕像。两千万。它看起来好像知道自己值多少。','Поспать':'睡觉','Сесть на диван':'坐到沙发上','Аквариум':'水族箱',
 'Кои. Самый толстый — Тацуми-младший. Не говори старику.':'锦鲤。最胖的那条叫小辰巳。别告诉老头。','Сыграть на автомате':'玩街机','Налить себе':'给自己倒一杯','Сам себе бармен. И сам себе клиент.':'自己当酒保。也自己当客人。','Сок. Ты же за рулём. Всегда.':'果汁。你总是要开车的。','За дядю Мишу.':'敬米沙叔叔。',
 'Сыграть в бильярд':'打台球','Восьмёрка в угол. Партия твоя.':'八号球进角袋。这局你赢了。','Кий соскользнул. Бывает.':'球杆滑了。常有的事。','Три шара с одного удара. Никто не видел. Жаль.':'一杆进三个球。没人看见。可惜。','Лучший выигрыш':'最大赢额',
 'Сыграть на рояле':'弹钢琴','Залезть в джакузи':'进按摩浴缸','Вот это жизнь.':'这才叫生活。','Машины: сменить, купить':'车辆：更换、购买','Двадцать миллионов. Смотрит, будто знает сколько.':'两千万。它看起来好像知道自己值多少。','Погладить кота':'摸摸猫',
 'По новостям: «Неизвестный гонщик снова ушёл от полиции на С1».':'新闻：“不明车手又一次在C1甩掉了警察。”','Реклама: «Сакура-Траст. Мы верим в ваше будущее». Ну-ну.':'广告：“樱花信托。我们相信您的未来。”呵呵。','Ночное шоу: дрифт-корреспондент Аяка в прямом эфире.':'深夜节目：漂移记者绫香现场直播。',
 'Старое кино про Ванган. Кажется, в кадре молодой Тацуми.':'一部关于湾岸的老电影。镜头里好像是年轻的辰巳。','Доброе утро. Город уже проснулся.':'早上好。城市已经醒了。','Уже стоит ✓':'已经摆好了 ✓','Купить':'购买','Всё сразу':'全部买下','Не хватает':'还差',
 'Квартира обставлена полностью!':'房子全部布置好了！','уже в квартире.':'已经放进房子里了。'});

var _hudHmView=hud;hud=function(dt){_hudHmView(dt);var q=$('ixq');if(!q)return;var b=q.querySelector('.hmv');var want=q.classList.contains('on')&&q._room==='home'&&!hmOwn();
 if(want&&!b){b=document.createElement('button');b.className='hmv';b.style.cssText='margin-top:6px;background:#3a2c58;color:#6ee7ff;box-shadow:3px 3px 0 #1c1430;font-size:13px';b.onclick=function(){ixEnter('home',{view:1})};q.appendChild(b)}
 if(b){b.style.display=want?'block':'none';if(want)b.textContent=TR('Осмотреть бесплатно','Look round for free')}};
Object.assign(ZH,{'Убрать примерку':'取消试摆','Примерить':'试摆','Примерка':'试摆','Нравится — купи в каталоге.':'喜欢就在目录里买。','Это осмотр: сначала купи квартиру (5 000 000 ¥). Примерять можно уже сейчас.':'这是参观：先买下公寓（5 000 000 ¥）。现在就能试摆家具。','Осмотреть бесплатно':'免费参观'});

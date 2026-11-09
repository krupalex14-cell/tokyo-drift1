// ===== inside the businesses: Hana's shop, the car wash, the parking booth, the port warehouse, the club, the TV studio =====
// the gold card's first button walks you in — to buy snacks, wash the car, dance, give an interview —
// or just to look round before you spend millions (the owner gets things free and the staff call him boss).
var BZEN=0,BZSHINE=0,BZW={t:-1};
IXP.clerk={H:'#2a1a14',S:'#f2cfa8',T:'#3a9a5a',W:'#f0eef4',A:'#f0eef4',P:'#2a2a34',top:'vest'};
IXP.washer={H:'#2a5aa8',S:'#e3b58e',T:'#3a6ab8',t:'#2a4a8a',P:'#3a6ab8',B:'#1c1c24'};
IXP.pguard={H:'#3a4a7a',S:'#e3b58e',T:'#3a4a7a',W:'#f0eef4',A:'#ffd23a',P:'#2a2a34',top:'suit'};
IXP.docker={H:'#ffd23a',h:'#c8a020',S:'#c8956c',T:'#ff8a3d',t:'#c86a1c',W:'#e8e8f0',P:'#3a4a6a',top:'racer'};
IXP.dj={H:'#ff4da6',h:'#c8307a',S:'#f2cfa8',T:'#1c1c24',W:'#5ae0ff',P:'#1c1c24',top:'racer',hair:'spiky'};
IXP.ayaka={H:'#8a4a2a',h:'#6a3a20',S:'#f6d8c4',T:'#b8203a',t:'#8a1428',W:'#f0eae2',P:'#2a2a34',hair:'long',top:'zip'};
IXP.camop={H:'#2a2a34',S:'#c8956c',T:'#3a3a46',P:'#2a2a34',hair:'short'};
IXP.dn1=CIP.g1;IXP.dn2=CIP.g4;IXP.dn3={H:'#5ae0ff',S:'#f2cfa8',T:'#a855ff',P:'#1c1c24',hair:'spiky'};IXP.dn4=CIP.g2;IXP.bart2=CIP.bart;

function bzOwn(id){return bzLv(id)>0}
function bzEnter(id){if(mode!=='game'||!car||(typeof ST!=='undefined'&&ST.act))return;var own=bzOwn(id);
 if(id==='ramen'){ixEnter('ramen');return}
 if(id==='club'&&!own){if(S.coins<1000){toast(TR('Вход — 1 000 ¥','Entry is 1 000 ¥'));return}S.coins-=1000;save()}
 ixEnter('bz_'+id,{visit:!own})}
function bzPrice(id,p){return bzOwn(id)?0:p}
function bzPay(id,p){var c=bzPrice(id,p);if(S.coins<c){ixSay(TR('Не хватает денег.','Not enough money.'),IX.x,IX.y-20);return false}S.coins-=c;save();$('cacn').textContent=Math.floor(S.coins)+' ¥';return true}
function bzLbl(id,ru,en,p){return function(){var c=bzPrice(id,p);return [ru+' · '+(c?fmtN(c)+' ¥':'бесплатно'),en+' · '+(c?fmtN(c)+' ¥':'free')]}}
function bzGlow(g,ox,oy){g.globalCompositeOperation='lighter';return function(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}}
function bzShell(g,W,H,dx,dw,wall){var K='#14101e';g.fillStyle=K;g.fillRect(0,0,W,6);g.fillRect(0,0,8,H);g.fillRect(W-8,0,8,H);g.fillRect(0,H-4,dx,4);g.fillRect(dx+dw,H-4,W-dx-dw,4);g.fillStyle=wall;g.fillRect(8,6,W-16,34);g.fillStyle='rgba(0,0,0,.25)';g.fillRect(8,38,W-16,2)}
// a label whose text depends on who you are; the room engine reads h.lb
function bzHs(o){if(o.lbf)Object.defineProperty(o,'lb',{get:o.lbf});return o}

// the energy drink: drift points ×1.25 for three minutes; the wash: the car sparkles for five
var _bkEn=bank;bank=function(){if(Date.now()<BZEN&&run&&run.pend>0)run.pend*=1.25;_bkEn()};
var _hudShine=hud;hud=function(dt){_hudShine(dt);if(!car||mode!=='game'||Date.now()>BZSHINE||FRAME%5)return;var a=car.a,ca=Math.cos(a),sa=Math.sin(a),u=(Math.random()-.5)*2*car.hx,v=(Math.random()-.5)*2*car.hy;
 fxBits(car.x+ca*u-sa*v,car.y+sa*u+ca*v,1,['#ffffff','#bfe8ff','#fff6c0'],10,10,car.l|0,{dl:1.4})};

// ================= Hana's shop: snacks, an energy drink, coffee =================
var BZSN={bar:['Батончик «Дрифт»','A “Drift” bar',150,'Хрустит. Счастье за сто пятьдесят иен.','Crunchy. Happiness for 150 yen.'],onigiri:['Онигири с лососем','A salmon onigiri',250,'Как у мамы. Только из холодильника.','Like mum’s. Only from the fridge.'],
 chips:['Чипсы с васаби','Wasabi crisps',200,'Васаби бьёт в нос. Зато бодрит.','The wasabi hits your nose. Wakes you up though.'],coffee:['Кофе из автомата','Vending-machine coffee',200,'Горячий. Теперь можно ехать до утра.','Hot. Now you can drive till morning.'],
 energy:['Энергетик «Турбо»','A “Turbo” energy drink',300,'Турбо! Очки заноса +25% на три минуты.','Turbo! Drift points +25% for three minutes.']};
function bzSnack(k){var s=BZSN[k];if(!bzPay('hana',s[2]))return;if(k==='energy'){BZEN=Date.now()+180000;popup(TR('Турбо: +25% очков заноса','Turbo: +25% drift points'),'mul')}if(S.snd)try{auTone(880,.04,.08,'triangle')}catch(e){}ixSay(TR(s[3],s[4]),IX.x,IX.y-20)}
IXR.bz_hana={name:['Лавка Ханы','Hana’s shop'],w:240,h:170,entry:[170,160],exitY:166,
 ob:[[0,0,240,44],[0,0,8,170],[232,0,8,170],[0,166,150,4],[190,166,50,4],[28,56,92,14],[28,82,92,14],[28,108,92,14],[204,44,28,82],[138,42,60,18],[18,124,76,26],[222,150,14,14]],
 npc:[{id:'clerk',p:'clerk',x:56,y:137,d:0,cut:13}],
 enter:function(o){var c=ixActor('clerk');c.p=typeof ixHanaHere==='function'&&ixHanaHere()?'hana':'clerk';c.d=0;if(bzOwn('hana'))setTimeout(function(){if(IX.on&&IX.r===IXR.bz_hana)ixSay(c.p==='hana'?TR('О, совладелец! Бери что хочешь.','Oh, the co-owner! Take whatever you like.'):TR('Добро пожаловать, хозяин!','Welcome, boss!'),c.x,c.y-16)},600)},
 hs:[bzHs({id:'door',x:170,y:164,r:10,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[150,156,40,14]}),
  bzHs({id:'bar',x:74,y:76,r:12,tap:[28,56,92,14],lbf:bzLbl('hana','Батончик «Дрифт»','A “Drift” bar',150),act:function(){bzSnack('bar')}}),
  bzHs({id:'onigiri',x:74,y:102,r:12,tap:[28,82,92,14],lbf:bzLbl('hana','Онигири с лососем','A salmon onigiri',250),act:function(){bzSnack('onigiri')}}),
  bzHs({id:'chips',x:128,y:114,r:12,tap:[28,108,92,14],lbf:bzLbl('hana','Чипсы с васаби','Wasabi crisps',200),act:function(){bzSnack('chips')}}),
  bzHs({id:'energy',x:194,y:86,r:14,tap:[204,44,28,82],lbf:bzLbl('hana','Энергетик «Турбо»','A “Turbo” energy drink',300),act:function(){bzSnack('energy')}}),
  bzHs({id:'coffee',x:166,y:68,r:12,tap:[138,42,60,18],lbf:bzLbl('hana','Кофе из автомата','Vending-machine coffee',200),act:function(){bzSnack('coffee')}}),
  bzHs({id:'clerk',who:'clerk',x:56,y:156,r:12,lbf:function(){return ixActor('clerk').p==='hana'?['Поговорить с Ханой','Talk to Hana']:['Поговорить с продавцом','Talk to the clerk']},act:function(){var c=ixActor('clerk'),h=c.p==='hana',o=bzOwn('hana'),L2=h?(o?[TR('Новые колонки — огонь. Спасибо. Только не зазнавайся.','The new pumps are great. Thanks. Don’t get a big head.'),TR('Батончики «Дрифт» — твои любимые? Я заметила.','The Drift bars are your favourite? I noticed.'),TR('Ключ на двенадцать всё равно мой. Даже если лавка наполовину твоя.','The 12 wrench is still mine. Even if half the shop is yours.')]:[TR('Заправка, мелочи, кофе. Чего встал?','Fuel, snacks, coffee. Why are you just standing there?'),TR('Батончики по сто пятьдесят. Скидок для ёппараев нет.','Bars are 150. No discounts for yopparai.')]):[TR('Ирассяймасэ! Добро пожаловать!','Irasshaimase! Welcome!'),TR('Кофе свежий. Ну, почти.','The coffee’s fresh. Well, almost.')],n=IX.bhn=(IX.bhn||0)+1;ixSay(L2[n%L2.length],c.x,c.y-16)}})],
 art:function(){var W=240,H=170,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var col=((x/10|0)+(y/10|0))&1?'#dfe3e6':'#d6dadf';if(x%10===0||y%10===0)col='#c8ccd2';g.fillStyle=col;g.fillRect(x,y,1,1)}
  bzShell(g,W,H,150,40,'#efe8d8');R(13,8,119,30,K);R(14,9,117,28,'#8ab8d8');R(140,10,86,16,K);R(141,11,84,14,'#c8202a');pfc(g,'HANA 24H',183,15,'#f4f4f8');R(150,28,22,9,'#3a6ab8');R(176,28,22,9,'#ffd23a');R(202,28,22,9,'#3aa06a');
  // three shelves of snacks
  [56,82,108].forEach(function(sy,k){R(28,sy,92,14,K);R(29,sy+1,90,12,'#8a8e98');for(var i=0;i<22;i++){R(31+i*4,sy+2,3,4,['#ff4da6','#ffd23a','#5ae0ff','#ff8a3d','#7bd957','#c8202a','#f4f4f4'][(i*3+k*2)%7]);R(31+i*4,sy+8,3,4,['#e8c050','#3a6ab8','#ff7ab8','#a855ff','#3aa06a','#f4f0e8'][(i*5+k)%6])}});
  // the drinks fridge
  R(204,44,28,82,K);for(var d=0;d<3;d++){R(206,46+d*26,24,24,'#bfe8ff');for(var b=0;b<5;b++)R(208+b*4,50+d*26,3,8,['#c8202a','#3a6ab8','#7bd957','#ffd23a','#f4f4f4'][(b+d)%5]);for(b=0;b<5;b++)R(208+b*4,60+d*26,3,8,['#ff8a3d','#5ae0ff','#a855ff','#3aa06a','#c8202a'][(b+d*2)%5]);R(206,46+d*26,1,24,'#ffffff')}
  // coffee counter and machine
  R(138,42,60,18,K);R(139,43,58,15,'#8a5a34');R(139,43,58,2,'#a87a50');R(152,43,14,12,K);R(153,44,12,10,'#2a2a34');R(156,46,6,3,'#c8202a');R(170,46,8,6,'#f4f4f4');R(182,47,10,5,'#e8c050');
  // the till counter
  R(18,124,76,26,K);R(19,134,74,8,'#c8a070');R(19,134,74,1,'#e8c890');R(19,142,74,7,'#8a5a34');R(28,129,12,7,K);R(29,130,10,4,'#3a3a46');R(30,131,8,2,'#7dff8c');R(64,135,18,5,'#ff4da6');R(64,135,18,1,'#ffb0d8');
  R(222,152,14,12,K);R(223,153,12,10,'#6a3a24');cgDisc(g,229,148,6,'#2a6a3a');R(160,162,22,4,'#5a4a3a');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}var f=ixSky(),sc=ixSkyCol(f);Rr(14,9,117,14,'rgb('+(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0)+')');Rr(14,23,117,14,'#6a6e78');
  [40,96].forEach(function(px){Rr(px,16,10,18,'#14101e');Rr(px+1,17,8,16,'#e8e4dc');Rr(px+1,17,8,5,'#c8202a');Rr(px+3,24,4,3,f<.5?'#7dff8c':'#2a6a3a')});Rr(60,25,20,9,'#3a6ab8');Rr(62,26,6,3,'#bfe8ff');if(f<.5){Rr(58,24,1,1,'#ffd27a');Rr(80,24,1,1,'#ffd27a')}
  if(Math.floor(t*.5)%6===0){g.globalAlpha=.5;Rr(159,40-((t*8)%6),1,2,'#f4f4f4');g.globalAlpha=1}},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy);P(218,85,34,'120,200,255',.25);P(183,18,30,'255,60,80',.18);P(80,60,90,'255,250,230',.08);g.globalCompositeOperation='source-over'}};

// ================= the car wash: drive the car in, press the green button =================
IXR.bz_wash={name:['Автомойка «Пена»','The Foam car wash'],w:260,h:170,entry:[210,160],exitY:166,
 ob:[[0,0,260,44],[0,0,8,170],[252,0,8,170],[0,166,190,4],[230,166,30,4],[28,46,204,68],[22,126,24,22],[58,122,24,30],[108,140,54,10]],
 npc:[{id:'washer',p:'washer',x:96,y:128,d:0}],
 enter:function(o){BZW.t=-1;if(bzOwn('wash'))setTimeout(function(){if(IX.on&&IX.r===IXR.bz_wash){var w=ixActor('washer');ixSay(TR('Шеф! Мойка за счёт заведения.','Boss! The wash is on the house.'),w.x,w.y-18)}},600)},
 leave:function(){BZW.t=-1},
 hs:[bzHs({id:'door',x:210,y:164,r:10,door:1,lb:['Выехать','Drive out'],act:function(){ixLeave()},tap:[190,156,40,14]}),
  bzHs({id:'wash',x:34,y:156,r:12,tap:[22,126,24,22],lbf:bzLbl('wash','Помыть машину','Wash the car',500),act:function(){if(BZW.t>=0)return;if(!bzPay('wash',500))return;BZW.t=0;IX.d=1;if(S.snd)try{auTone(440,.05,.15,'square')}catch(e){}}}),
  bzHs({id:'fresh',x:70,y:160,r:10,tap:[58,122,24,30],lbf:bzLbl('wash','Освежитель «Сакура»','A “Sakura” air freshener',100),act:function(){if(!bzPay('wash',100))return;ixSay(TR('Пахнет сакурой. И немного бензином.','Smells of sakura. And a bit of petrol.'),IX.x,IX.y-20)}}),
  bzHs({id:'bench',x:135,y:158,r:10,lb:['Подождать на скамейке','Wait on the bench'],tap:[108,140,54,10],act:function(){ixSit(135,146,0,0,135,158)}}),
  bzHs({id:'washer',who:'washer',x:96,y:146,r:10,lb:['Поговорить с мойщиком','Talk to the washer'],act:function(){var w=ixActor('washer'),L2=bzOwn('wash')?[TR('Шеф, новая химия — машины блестят, как в рекламе.','Boss, the new soap makes cars shine like in the ads.'),TR('Таксисты опять в очереди с утра. Выручка растёт.','The cabbies were queueing again this morning. Takings are up.')]:[TR('Пена, щётки, воск. Пятьсот иен — и как новая.','Foam, brushes, wax. Five hundred yen and it’s like new.'),TR('Нажми зелёную кнопку на пульте.','Press the green button on the panel.')],n=IX.wn=(IX.wn||0)+1;ixSay(L2[n%L2.length],w.x,w.y-18)}})],
 tick:function(dt){if(BZW.t<0)return;BZW.t+=dt;if(BZW.t>7){BZW.t=-1;BZSHINE=Date.now()+300000;popup(TR('Машина сияет!','The car is sparkling!'),'big');ixSay(TR('Блестит! Пять минут весь город будет смотреть.','It shines! For five minutes the whole city will look.'),IX.x,IX.y-20);if(S.snd)try{auBell()}catch(e){}}},
 art:function(){var W=260,H=170,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var col=((x>>3)+(y>>3))&1?'#b8c4d0':'#c4ced8';if(x%8===0||y%8===0)col='#a8b4c0';g.fillStyle=col;g.fillRect(x,y,1,1)}
  bzShell(g,W,H,190,40,'#3a6ab8');for(x=8;x<W-8;x+=8)R(x,6,1,34,'#2a5aa8');for(y=6;y<40;y+=8)R(8,y,W-16,1,'#2a5aa8');R(96,10,68,18,K);R(97,11,66,16,'#f4f4f8');pfc(g,'FOAM WASH',130,16,'#3a6ab8');
  // the tunnel: wet concrete, drains, guide rails, three arches
  R(28,46,204,68,K);R(29,47,202,66,'#4a5260');for(x=40;x<230;x+=24)R(x,78,10,3,'#2a3240');R(29,60,202,2,'#8a96a8');R(29,98,202,2,'#8a96a8');for(x=29;x<231;x+=3)if(hsh(x,7,5)<.4)R(x,52+(x*7)%40,2,1,'#5a6474');
  [70,130,190].forEach(function(ax){R(ax-2,47,4,66,'#c8ccd8');R(ax-2,47,4,2,'#f4f4f8');R(ax-3,47,6,4,'#8a96a8');R(ax-3,109,6,4,'#8a96a8')});
  // the panel, the vending machine, the bench
  R(22,126,24,22,K);R(23,127,22,20,'#5a6474');R(25,129,18,7,'#1a2a3a');R(26,130,10,2,'#7dff8c');cgDisc(g,34,142,3,'#14101e');cgDisc(g,34,142,2,'#3ad06a');
  R(58,122,24,30,K);R(59,123,22,28,'#ff7ab8');R(61,125,18,12,'#ffe8f4');for(var i=0;i<6;i++)R(62+(i%3)*6,127+(i>>1)/2*5|0,4,3,['#ff4da6','#7bd957','#ffd23a'][i%3]);R(66,142,8,4,'#14101e');
  R(108,140,54,10,K);R(109,141,52,6,'#c8a070');R(109,147,52,2,'#8a5a34');R(196,162,28,4,'#5a6474');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}var w=BZW.t,on=w>=0;
  // the car in the bay
  var sp=ixCarSpr();if(sp){g.save();g.translate(130-ox,80-oy);g.scale(2,2);g.fillStyle='rgba(10,6,20,.35)';g.fillRect(-sp.width/2+1,-sp.height/2+2,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore()}
  // brushes (blue rollers above and below), foam, the rinse, the dryer
  var bx=on?70+Math.min(1,w/2.6)*120:56,sp2=on?t*30:t*2;[58,102].forEach(function(by){for(var k=0;k<3;k++){Rr(Math.round(bx)-6+k*4,by-5,4,10,((Math.floor(sp2)+k)%2)?'#3a6ab8':'#5ae0ff')}});
  if(on&&w<4.2){var n=Math.min(40,Math.floor(w*18));for(var i=0;i<n;i++){var fx=100+((i*37)%62),fy=66+((i*53)%28);g.globalAlpha=w>2.8?Math.max(0,(4.2-w)/1.4):1;Rr(fx,fy,3,2,'#f4f8ff');Rr(fx+1,fy-1,1,1,'#ffffff')}g.globalAlpha=1}
  if(on&&w>2.6&&w<4.8)for(var j=0;j<14;j++){var jx=[70,130,190][j%3],jy=50+((j*13+Math.floor(t*30))%60);Rr(jx-1+(j%2)*2,jy,1,4,'#9ad8ff')}
  if(on&&w>4.8&&w<6.6)for(var q=0;q<10;q++){var qx=60+((q*31+Math.floor(t*90))%150);g.globalAlpha=.5;Rr(qx,56+(q*7)%48,6,1,'#ffffff');g.globalAlpha=1}
  if(on&&w>5.8)for(var s=0;s<6;s++){var a=t*4+s;Rr(Math.round(130+Math.cos(a*1.3)*28),Math.round(80+Math.sin(a*1.7)*10),1,1,'#fff6c0')}
  if(on&&Math.floor(t*4)%2)[70,130,190].forEach(function(ax){Rr(ax-1,48,2,2,'#ffd23a')})},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy);P(130,80,70,'150,200,255',BZW.t>=0?.2:.08);P(34,132,16,'120,255,140',.2);P(70,130,22,'255,120,190',.18);g.globalCompositeOperation='source-over'}};

// ================= the parking booth: monitors, the guard, the key cabinet (your cars) =================
IXR.bz_park={name:['Будка охраны · парковка','The parking booth'],w:200,h:140,entry:[100,132],exitY:136,
 ob:[[0,0,200,44],[0,0,8,140],[192,0,8,140],[0,136,80,4],[120,136,80,4],[18,44,84,20],[52,66,16,14],[168,50,24,42],[118,98,34,16]],
 npc:[{id:'pguard',p:'pguard',x:60,y:76,d:1,pose:'sit'}],
 enter:function(){var gd=ixActor('pguard');gd.pose='sit';gd.d=1},
 hs:[bzHs({id:'door',x:100,y:132,r:10,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[80,126,40,12]}),
  bzHs({id:'keys',x:158,y:72,r:14,tap:[168,50,24,42],lbf:function(){return bzOwn('park')?['Ключи: твои машины','Keys: your cars']:['Шкаф с ключами','The key cabinet']},act:function(){if(!bzOwn('park')){var gd=ixActor('pguard');ixSay(TR('Ключи — только хозяину.','The keys are for the owner only.'),gd.x,gd.y-16);return}ixStation('cars')}}),
  bzHs({id:'pguard',who:'pguard',x:60,y:94,r:12,lb:['Поговорить с охранником','Talk to the guard'],act:function(){var gd=ixActor('pguard'),L2=bzOwn('park')?[TR('Босс! Всё спокойно. Сто двадцать машин, ни одной царапины.','Boss! All quiet. A hundred and twenty cars, not a scratch.'),TR('Вчера один пытался уехать без оплаты. Не уехал.','Yesterday someone tried to leave without paying. He didn’t.'),TR('Твои машины тоже тут, в шкафу ключи. Бери любую.','Your cars are here too, the keys are in the cabinet. Take any.')]:[TR('Посторонним нельзя… А, покупатель? Ну смотри.','No outsiders… Oh, a buyer? Have a look then.'),TR('Сто двадцать мест. Ночью тут ставят машины таксисты.','A hundred and twenty spaces. The cabbies park here at night.')],n=IX.pgn=(IX.pgn||0)+1;ixSay(L2[n%L2.length],gd.x,gd.y-18)}}),
  bzHs({id:'tea',x:135,y:124,r:12,lb:['Чайник','The kettle'],tap:[118,98,34,16],act:function(){ixSay(TR('Зелёный чай из пакетика. Охранная классика.','Green tea from a bag. A security classic.'),135,90)}})],
 art:function(){var W=200,H=140,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var col=((x>>2)+(y>>3))%3?'#8a8270':'#827a68';if(hsh(x,y,9)<.05)col='#9a927e';g.fillStyle=col;g.fillRect(x,y,1,1)}
  bzShell(g,W,H,80,40,'#b8b0a0');R(11,8,178,30,K);R(12,9,176,28,'#5a6a7a');
  R(18,44,84,20,K);R(19,45,82,17,'#5a4a3a');[22,48,74].forEach(function(mx){R(mx,46,22,13,K);R(mx+1,47,20,10,'#1a2a2a')});
  cgDisc(g,60,74,6,'#14101e');cgDisc(g,60,74,5,'#3a3a46');
  R(168,50,24,42,K);R(169,51,22,40,'#8a8e98');for(var i=0;i<12;i++){R(172+(i%4)*5,55+(i>>2)*11,1,4,'#5a5e6a');R(171+(i%4)*5,59+(i>>2)*11,3,3,['#c8202a','#3a6ab8','#ffd23a','#7bd957'][i%4])}
  R(118,98,34,16,K);R(119,99,32,13,'#6a4a32');R(124,101,8,8,'#c8ccd8');R(126,99,4,2,'#14101e');R(138,103,4,4,'#f4f4f4');R(144,104,4,4,'#f4f4f4');
  R(120,8,26,0,K);R(150,10,26,22,'#f4f0e8');pf(g,'NOV',154,13,'#c8202a');R(154,21,18,8,'#d8d0c0');R(86,134,28,2,'#5a4a3a');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}var f=ixSky();Rr(12,9,176,28,f<.4?'#2a3240':'#6a7a8a');
  for(var i=0;i<9;i++){var cx0=18+i*19;Rr(cx0,22,14,8,['#c8202a','#f4f4f4','#3a6ab8','#2a2a34','#ffd23a','#7bd957','#a855ff','#ff8a3d','#c8ccd8'][i]);Rr(cx0+4,23,5,6,'#1c2338');for(var k=0;k<2;k++)Rr(cx0-2+k*17,30,1,6,'#e8e8f0')}
  var bar=Math.sin(t*.6)>.3?1:0;Rr(140,14,bar?2:30,bar?20:2,'#e8402a');Rr(140,14,2,2,'#14101e');
  [22,48,74].forEach(function(mx,i){Rr(mx+1,47,20,10,['#1a3a2a','#1a2a3a','#2a2a1a'][(Math.floor(t*.7)+i)%3]);Rr(mx+3+((t*6+i*5)%14|0),50,3,2,'#7dff8c');Rr(mx+2,54,16,1,'rgba(125,255,140,.4)')})},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy);P(60,52,40,'120,255,160',.14);P(150,96,30,'255,220,160',.12);g.globalCompositeOperation='source-over'}};

// ================= the port warehouse: containers, crates (something new every five minutes), a forklift =================
var BZLOOT=[['Старые покрышки. Сотня. Хана заберёт.','Old tyres. A hundred. Hana will take them.'],['Ящик с надписью «Не открывать». Ты не открыл.','A crate marked “Do not open”. You didn’t.'],['Сувениры: Токийская башня в снегу. Двести штук.','Souvenirs: Tokyo Tower in snow. Two hundred of them.'],['Запчасти для «Молнии». Дядя Миша бы обрадовался.','Parts for the Lightning. Uncle Misha would have been glad.']];
IXR.bz_port={name:['Склад №7 в порту','Warehouse 7 at the port'],w:300,h:200,entry:[150,192],exitY:196,
 ob:[[0,0,300,44],[0,0,8,200],[292,0,8,200],[0,196,130,4],[170,196,130,4],[12,46,80,72],[208,46,80,72],[38,128,54,34],[228,134,24,30]],
 npc:[{id:'docker',p:'docker',x:112,y:100,d:3}],
 enter:function(){},
 hs:[bzHs({id:'door',x:150,y:192,r:10,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[130,184,40,14]}),
  bzHs({id:'crates',x:66,y:172,r:14,tap:[38,128,54,34],lbf:function(){return bzOwn('port')?['Проверить новую партию','Check the new shipment']:['Ящики','The crates']},act:function(){var d=ixActor('docker');if(!bzOwn('port')){ixSay(TR('Ящики — только для хозяина склада.','The crates are for the warehouse owner only.'),d.x,d.y-18);return}
   var now=Date.now();if(now<(S.bzLootT|0)){ixSay(TR('Новую партию ещё не разгрузили. Загляни позже.','The new shipment isn’t unloaded yet. Look in later.'),d.x,d.y-18);return}S.bzLootT=now+300000;
   if(Math.random()<.55){var m=10000+cgRnd(15)*5000;S.coins+=m;save();popup('+'+fmtN(m)+' ¥','big');ixSay(TR('Ничейный груз! Оформили как твой: ','Unclaimed cargo! Signed over to you: ')+'+'+fmtN(m)+' ¥',66,122)}else{var q=BZLOOT[cgRnd(BZLOOT.length)];ixSay(TR(q[0],q[1]),66,122)}}}),
  bzHs({id:'fork',x:240,y:176,r:12,lb:['Погрузчик','The forklift'],tap:[228,134,24,30],act:function(){ixSay(TR('Погрузчик. Права? Какие права.','A forklift. A licence? What licence.'),240,126)}}),
  bzHs({id:'docker',who:'docker',x:112,y:120,r:12,lb:['Поговорить с грузчиком','Talk to the docker'],act:function(){var d=ixActor('docker'),L2=bzOwn('port')?[TR('Хозяин! Новая партия каждые пять минут, проверяй ящики.','Boss! A new shipment every five minutes, check the crates.'),TR('Таможня? Таможня у нас своя.','Customs? We have our own customs.')]:[TR('Склад продаётся. Говорят, тут бывает интересное.','The warehouse is for sale. They say interesting stuff turns up here.'),TR('Ничего не трогай, я за это отвечаю.','Don’t touch anything, I’m responsible for it.')],n=IX.dkn=(IX.dkn||0)+1;ixSay(L2[n%L2.length],d.x,d.y-18)}})],
 art:function(){var W=300,H=200,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var col=hsh(x>>2,y>>2,3)<.5?'#6a6e74':'#666a70';if(hsh(x,y,11)<.04)col='#5a5e64';g.fillStyle=col;g.fillRect(x,y,1,1)}
  for(y=44;y<196;y+=6)R(146,y,8,3,'#e8c040');R(100,44,2,152,'#e8c040');R(198,44,2,152,'#e8c040');cgDisc(g,170,160,9,'#4a4e54');cgDisc(g,128,70,6,'#4e5258');
  bzShell(g,W,H,130,40,'#5a6270');for(x=8;x<W-8;x+=4)R(x,6,1,34,'#4a5260');R(108,6,84,34,K);R(109,7,82,32,'#1a2a4a');R(20,12,70,12,'#2a2e36');pfc(g,'WAREHOUSE 7',55,16,'#e8c040');
  // containers (corrugated tops)
  [[12,46,80,34,'#d86a2a'],[12,84,80,34,'#2a5aa8'],[208,46,80,34,'#2a8a4a'],[208,84,80,34,'#b8202a']].forEach(function(q){R(q[0],q[1],q[2],q[3],K);R(q[0]+1,q[1]+1,q[2]-2,q[3]-2,q[4]);for(var xx=q[0]+3;xx<q[0]+q[2]-2;xx+=3)R(xx,q[1]+2,1,q[3]-4,shadeHex(q[4],.8));R(q[0]+1,q[1]+1,q[2]-2,1,shadeHex(q[4],1.2))});
  // crates
  [[38,128],[52,128],[66,128],[80,128],[38,142],[52,142],[66,142],[45,150],[59,150],[73,150]].forEach(function(p){R(p[0],p[1],12,12,K);R(p[0]+1,p[1]+1,10,10,'#a87a4a');R(p[0]+1,p[1]+5,10,1,'#8a5a34');R(p[0]+5,p[1]+1,1,10,'#8a5a34');R(p[0]+1,p[1]+1,10,1,'#c89a6a')});
  // the forklift
  R(228,134,24,30,K);R(229,135,22,20,'#e8b830');R(231,137,18,10,'#2a2a34');R(229,155,22,8,'#5a5e6a');R(232,163,3,8,'#8a8e98');R(245,163,3,8,'#8a8e98');R(226,138,2,6,'#14101e');R(252,138,2,6,'#14101e');R(226,152,2,6,'#14101e');R(252,152,2,6,'#14101e');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}var f=ixSky(),sc=ixSkyCol(f);Rr(109,7,82,14,'rgb('+(sc[0]|0)+','+(sc[1]|0)+','+(sc[2]|0)+')');Rr(109,21,82,18,'#1a3a6a');
  for(var i=0;i<10;i++)Rr(110+((i*19+Math.floor(t*6))%80),24+(i*5)%14,4,1,'rgba(160,200,255,.5)');var cx0=140+Math.sin(t*.25)*30;Rr(Math.round(cx0),8,2,14,'#e8c040');Rr(Math.round(cx0)-8,8,18,2,'#e8c040');Rr(Math.round(cx0),22,6,5,'#c8202a')},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy);P(150,22,50,'140,180,255',.12);P(60,150,40,'255,220,150',.08);g.globalCompositeOperation='source-over'}};

// ================= the night club: dance floor, DJ, bar, the VIP booth =================
IXR.bz_club={name:['Клуб «Синдзю»','The Shinju club'],w:300,h:200,entry:[150,192],exitY:196,
 ob:[[0,0,300,44],[0,0,8,200],[292,0,8,200],[0,196,130,4],[170,196,130,4],[92,40,116,26],[212,40,82,24],[12,58,60,94]],
 npc:[{id:'dj',p:'dj',x:150,y:60,d:0,cut:13},{id:'bart2',p:'bart2',x:253,y:48,d:0,cut:13},{id:'dn1',p:'dn1',x:112,y:100,d:0},{id:'dn2',p:'dn2',x:186,y:92,d:2},{id:'dn3',p:'dn3',x:196,y:128,d:1},{id:'dn4',p:'dn4',x:120,y:132,d:3}],
 enter:function(){IX.dance=0;IX.beat=0;if(bzOwn('club'))setTimeout(function(){if(IX.on&&IX.r===IXR.bz_club)ixSay(TR('Хозяин в клубе! Громче!','The owner is in! Louder!'),150,40)},700)},
 leave:function(){IX.dance=0},
 hs:[bzHs({id:'door',x:150,y:192,r:10,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[130,184,40,14]}),
  bzHs({id:'dance',x:150,y:110,r:20,lb:['Танцевать','Dance'],tap:[90,74,120,68],act:function(){IX.dance=TIME;IX.em='spark';ixSay(TR('Лёха танцует. Танцпол в шоке.','Lyokha dances. The dance floor is in shock.'),IX.x,IX.y-22)}}),
  bzHs({id:'dj',who:'dj',x:150,y:76,r:10,lb:['Заказать трек','Request a track'],act:function(){var L2=[TR('Ставлю евробит. Для дрифта — самое то.','Eurobeat coming up. Perfect for drifting.'),TR('Следующий трек — для водителя красной машины!','The next track is for the driver of the red car!'),TR('Только не «Макарену». Никогда.','Just not the Macarena. Never.')],n=IX.djn=(IX.djn||0)+1;ixSay(L2[n%3],150,36)}}),
  bzHs({id:'bar',who:'bart2',x:253,y:76,r:14,tap:[212,40,82,24],lbf:bzLbl('club','Коктейль «Неон» (без алкоголя)','A “Neon” mocktail',500),act:function(){if(!bzPay('club',500))return;ixSay(TR('Светится в темноте. Вкус — как у неона, наверное.','It glows in the dark. Tastes like neon, probably.'),IX.x,IX.y-22)}}),
  bzHs({id:'sofa',x:80,y:104,r:12,lb:['Сесть в VIP-ложу','Sit in the VIP booth'],tap:[12,58,60,94],act:function(){ixSit(42,110,0,0,80,104);setTimeout(function(){if(IX.on&&IX.pose==='sit')ixSay(bzOwn('club')?TR('Твоя ложа. Твой клуб. Твой вечер.','Your booth. Your club. Your night.'):TR('Ложа за отдельную плату. Охрана смотрит косо.','The booth costs extra. Security is glaring.'),42,80)},800)}})],
 tick:function(dt){var R=this;['dn1','dn2','dn3','dn4'].forEach(function(id,i){var a=ixActor(id);if(!a)return;var k=Math.floor(TIME*2.5+i*1.7);a.d=[0,2,0,3,1,3][k%6];a.y=Math.round(a.y)});
  if(IX.dance){if(IX.path||IXK.l||IXK.r||IXK.u||IXK.d||IX.pose==='sit'){IX.dance=0;IX.em=null}else{var k2=Math.floor((TIME-IX.dance)*4);IX.d=[0,2,0,3][k2%4];IX.em=(k2%8)<4?'spark':null}}
  IX.beat=(IX.beat||0)+dt;if(IX.beat>.5){IX.beat=0;if(S.snd)try{auTone(60,.16,.18,'sine');setTimeout(function(){if(IX.on&&IX.r===IXR.bz_club)auTone(1800,.015,.03,'square')},250)}catch(e){}}},
 art:function(){var W=300,H=200,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var col=hsh(x,y,21)<.05?'#1e1828':'#16121e';g.fillStyle=col;g.fillRect(x,y,1,1)}
  bzShell(g,W,H,130,40,'#0e0a16');for(x=12;x<W-12;x+=24){R(x,8,2,30,'#2a1a3a')}
  R(90,74,120,68,K);
  // the DJ booth and the speakers
  R(92,40,116,26,K);R(93,56,114,9,'#2a2a34');cgDisc(g,128,60,4,'#14101e');cgDisc(g,128,60,3,'#5a5e6a');cgDisc(g,172,60,4,'#14101e');cgDisc(g,172,60,3,'#5a5e6a');R(144,58,12,5,'#1c1c24');
  [[94,42],[190,42]].forEach(function(p){R(p[0],p[1],16,22,K);R(p[0]+1,p[1]+1,14,20,'#2a2a34');cgDisc(g,p[0]+8,p[1]+7,4,'#14101e');cgDisc(g,p[0]+8,p[1]+15,5,'#14101e')});
  // the bar
  R(212,40,82,24,K);R(213,52,80,10,'#3a1e2a');R(213,52,80,1,'#ff4da6');for(var i=0;i<14;i++)R(216+i*5,42,3,7,['#5ae0ff','#ff4da6','#ffd23a','#a855ff'][i%4]);
  // the VIP booth
  R(12,58,60,94,K);R(13,59,58,92,'#4a1a5a');R(13,59,10,92,'#3a1048');R(13,59,58,10,'#3a1048');R(13,141,58,10,'#3a1048');cgDisc(g,46,105,10,K);cgDisc(g,46,105,9,'#1c1c24');R(44,101,3,4,'#5ae0ff');R(48,103,3,3,'#ff4da6');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  var cols=['#ff4da6','#5ae0ff','#ffd23a','#a855ff','#7dff8c','#ff8a3d'];for(var j=0;j<4;j++)for(var i=0;i<6;i++){var k=(i+j+Math.floor(t*2))%6,on=((i*3+j*5+Math.floor(t*4))%5)<3;Rr(91+i*20,75+j*17,19,16,on?shadeHex(cols[k],.75):'#1c1828')}
  for(var d=0;d<14;d++){var a=t*.8+d*.45,r=30+(d%4)*10;Rr(Math.round(150+Math.cos(a)*r*1.6),Math.round(108+Math.sin(a)*r*.8),1,1,'#ffffff')}
  Rr(96,44,12,1,Math.floor(t*4)%2?'#ff4da6':'#5ae0ff');Rr(192,44,12,1,Math.floor(t*4)%2?'#5ae0ff':'#ff4da6');Rr(145,59,10,3,cols[Math.floor(t*6)%6]);
  for(var s=0;s<5;s++)Rr(14+s*56,10,40,2,cols[(s+Math.floor(t*3))%6])},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy),cols=['255,77,166','90,224,255','255,210,58','168,85,255'];for(var i=0;i<4;i++){var a=t*1.2+i*1.6;P(150+Math.cos(a)*50,108+Math.sin(a*1.3)*25,46,cols[i],.22)}P(150,52,30,'255,255,255',.1);P(253,50,30,'255,77,166',.16);P(42,105,24,'90,224,255',.14);g.globalCompositeOperation='source-over'}};

// ================= the TV studio: Ayaka at the news desk, cameras, a green screen =================
function bzInterview(){var o=bzOwn('tv'),V=[[D('ayaka','Мы в эфире! Алексей, правда, что вы ни разу не тормозили в повороте?','We’re on air! Alexei, is it true you’ve never braked in a corner?'),D('lyokha','Тормоза придумали для тех, кто не умеет поворачивать.','Brakes were invented for people who can’t turn.'),D('ayaka','(смеётся) Это пойдёт в нарезку.','(laughs) That’s going in the highlights.')],
  [D('ayaka','Зрители спрашивают: что вы делаете со всеми этими деньгами?','The viewers ask: what do you do with all that money?'),D('lyokha','Покупаю студии, в которых мне задают вопросы.','I buy studios where people ask me questions.'),D('ayaka',o?'…Справедливо, шеф.':'…Справедливо.',o?'…Fair enough, boss.':'…Fair enough.')],
  [D('ayaka','Последний вопрос: Рин или Хана?','Last question: Rin or Hana?'),D('lyokha','Следующий вопрос.','Next question.'),D('ayaka','Это и был последний! Конец эфира!','That was the last one! We’re off air!')]];var n=S.bzIv=((S.bzIv|0)+1)%V.length;
 dlgOpen(V[n],function(){if(o&&Date.now()>(S.bzTvT|0)){S.bzTvT=Date.now()+600000;var m=50000;S.coins+=m;save();popup(TR('Рейтинг вырос!','Ratings are up!')+' +'+fmtN(m)+' ¥','big')}})}
IXR.bz_tv={name:['Телестудия «Дрифт-ночь»','The Drift Night studio'],w:300,h:190,entry:[250,182],exitY:186,
 ob:[[0,0,300,44],[0,0,8,190],[292,0,8,190],[0,186,230,4],[270,186,30,4],[108,60,84,32],[84,122,12,14],[144,132,12,14],[204,122,12,14],[248,42,44,60]],
 npc:[{id:'ayaka',p:'ayaka',x:150,y:80,d:0,cut:13},{id:'camop',p:'camop',x:150,y:156,d:1}],
 enter:function(){},
 hs:[bzHs({id:'door',x:250,y:182,r:10,door:1,lb:['Выйти','Leave'],act:function(){ixLeave()},tap:[230,176,40,12]}),
  bzHs({id:'ayaka',who:'ayaka',x:150,y:104,r:14,lb:['Дать интервью Аяке','Give Ayaka an interview'],tap:[108,60,84,32],act:bzInterview}),
  bzHs({id:'green',x:40,y:128,r:14,lb:['Встать у хромакея','Stand at the green screen'],act:function(){IX.x=32;IX.y=100;IX.d=0;IX.green=TIME;ixSay(TR('Ты на экране. За спиной — Токийская башня. Ненастоящая.','You’re on screen. Tokyo Tower behind you. A fake one.'),32,70)}}),
  bzHs({id:'cam',x:174,y:142,r:10,lb:['Посмотреть в камеру','Look into the camera'],act:function(){IX.d=2;ixSay(TR('Красная лампочка горит. Улыбайся.','The red light is on. Smile.'),150,118)}}),
  bzHs({id:'mon',x:240,y:114,r:12,lb:['Стена мониторов','The monitor wall'],tap:[248,42,44,60],act:function(){ixSay(bzOwn('tv')?TR('Рейтинг шоу: первое место в ночном эфире. Твоя студия.','The show’s ratings: first place at night. Your studio.'):TR('На мониторах — повтор: красная машина уходит в занос на С1.','A replay on the monitors: a red car drifting on the C1.'),270,38)}})],
 art:function(){var W=300,H=190,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){g.fillStyle=hsh(x,y,31)<.04?'#2c2c36':'#24242c';g.fillRect(x,y,1,1)}for(x=40;x<260;x+=3)R(x,150+Math.round(Math.sin(x*.05)*6),2,1,'#14141a');
  bzShell(g,W,H,230,40,'#1c1c24');R(58,7,184,32,K);R(14,44,38,78,'#2a9a4a');R(14,44,38,2,'#3ab05a');
  // the news desk
  R(108,76,84,16,K);R(109,77,82,9,'#f4f4f8');R(109,86,82,5,'#c8202a');R(109,77,82,1,'#ffffff');pfc(g,'DRIFT NIGHT',150,86,'#f4f4f8');
  // cameras on tripods
  [[90,128],[150,138],[210,128]].forEach(function(p){R(p[0]-6,p[1]-6,12,12,'rgba(20,16,30,.0)');R(p[0]-5,p[1]+4,2,4,'#3a3a46');R(p[0]+3,p[1]+4,2,4,'#3a3a46');R(p[0]-4,p[1]-6,8,10,K);R(p[0]-3,p[1]-5,6,8,'#3a3a46');R(p[0]-2,p[1]-8,4,3,'#1c1c24')});
  // the monitor wall
  R(248,42,44,60,K);for(var i=0;i<6;i++)R(250+(i%2)*21,44+(i>>1)*19,19,17,'#1a2a3a');return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  Rr(59,8,182,30,'#1a1a3a');for(var x=59;x<241;x+=2){var h=6+((x*7)%9);Rr(x,38-h,2,h,'#2a2a5a')}Rr(146,10,3,26,'#e8402a');Rr(140,22,15,2,'#e8402a');
  for(var i=0;i<6;i++){var k=(Math.floor(t*1.5)+i)%4;Rr(59+((t*20+i*31)%182),12+i*4,8,1,['#ff4da6','#5ae0ff','#ffd23a','#7dff8c'][k])}
  if(IX.green&&TIME-IX.green<6&&Math.abs(IX.x-32)<3){Rr(140,14,20,22,'#d8202a');Rr(146,16,8,8,'#f2cfa8')}
  [[90,128],[150,138],[210,128]].forEach(function(p,i){if(Math.floor(t*.6)%3===i)Rr(p[0]-1,p[1]-5,2,2,'#ff3a3a')});
  for(var m=0;m<6;m++)Rr(251+(m%2)*21,45+(m>>1)*19,17,15,['#2a4a7a','#7a2a4a','#2a7a4a','#5a4a2a'][(Math.floor(t)+m)%4])},
 glow:function(g,ox,oy,t){var P=bzGlow(g,ox,oy);P(150,70,60,'255,240,220',.18);P(30,80,30,'90,255,140',.12);P(270,72,30,'120,160,255',.16);P(150,24,60,'90,90,255',.12);g.globalCompositeOperation='source-over'}};

// ---------- the ramen shop: Reiko has a word for her partner
(function(){var hs=IXR.ramen&&IXR.ramen.hs,r=null;if(!hs)return;for(var i=hs.length-1;i>=0;i--)if(hs[i].id==='reiko'&&hs[i].r>0){r=hs[i];break}if(!r)return;var a0=r.act;r.act=function(h){if(bzOwn('ramen')&&Math.random()<.5){var rk=ixActor('reiko');ixSay(TR('Партнёр пришёл. Тебе с двойным луком, как Мише.','My partner’s here. Double onions for you, like Misha.'),rk.x,rk.y-14);return}a0(h)}})();

Object.assign(EN,{});
Object.assign(ZH,{'Вход — 1 000 ¥':'入场费 1 000 ¥','Не хватает денег.':'钱不够。','бесплатно':'免费','Турбо: +25% очков заноса':'涡轮：漂移分数 +25%','Батончик «Дрифт»':'“漂移”能量棒','Онигири с лососем':'三文鱼饭团','Чипсы с васаби':'芥末薯片','Кофе из автомата':'自动售货机咖啡','Энергетик «Турбо»':'“涡轮”能量饮料',
 'Хрустит. Счастье за сто пятьдесят иен.':'嘎嘣脆。一百五十日元的幸福。','Как у мамы. Только из холодильника.':'像妈妈做的。只是从冰箱里拿的。','Васаби бьёт в нос. Зато бодрит.':'芥末冲鼻子。不过提神。','Горячий. Теперь можно ехать до утра.':'热乎的。现在可以一直开到天亮了。','Турбо! Очки заноса +25% на три минуты.':'涡轮！漂移分数 +25%，持续三分钟。',
 'Лавка Ханы':'花的店','О, совладелец! Бери что хочешь.':'哦，合伙人来了！想拿什么拿什么。','Добро пожаловать, хозяин!':'欢迎，老板！','Поговорить с Ханой':'和花聊聊','Поговорить с продавцом':'和店员聊聊','Новые колонки — огонь. Спасибо. Только не зазнавайся.':'新加油机太棒了。谢谢。只是别骄傲。',
 'Батончики «Дрифт» — твои любимые? Я заметила.':'“漂移”能量棒是你的最爱？我注意到了。','Ключ на двенадцать всё равно мой. Даже если лавка наполовину твоя.':'12号扳手还是我的。就算店有一半是你的。','Заправка, мелочи, кофе. Чего встал?':'加油、零食、咖啡。站着干嘛？','Батончики по сто пятьдесят. Скидок для ёппараев нет.':'能量棒一百五十。醉鬼不打折。',
 'Ирассяймасэ! Добро пожаловать!':'欢迎光临！','Кофе свежий. Ну, почти.':'咖啡是新鲜的。嗯，差不多。','Автомойка «Пена»':'“泡沫”洗车行','Шеф! Мойка за счёт заведения.':'老板！洗车免费。','Выехать':'开出去','Помыть машину':'洗车','Освежитель «Сакура»':'“樱花”车载香氛','Пахнет сакурой. И немного бензином.':'有樱花味。还有点汽油味。',
 'Подождать на скамейке':'在长椅上等','Поговорить с мойщиком':'和洗车工聊聊','Шеф, новая химия — машины блестят, как в рекламе.':'老板，新洗车液——车亮得像广告里一样。','Таксисты опять в очереди с утра. Выручка растёт.':'出租车司机一早又排队了。营业额在涨。','Пена, щётки, воск. Пятьсот иен — и как новая.':'泡沫、刷子、车蜡。五百日元，焕然一新。',
 'Нажми зелёную кнопку на пульте.':'按控制台上的绿色按钮。','Машина сияет!':'车闪闪发亮！','Блестит! Пять минут весь город будет смотреть.':'亮了！整整五分钟全城都会看你。','Будка охраны · парковка':'停车场岗亭','Ключи: твои машины':'钥匙：你的车','Шкаф с ключами':'钥匙柜','Ключи — только хозяину.':'钥匙只给老板。',
 'Поговорить с охранником':'和保安聊聊','Босс! Всё спокойно. Сто двадцать машин, ни одной царапины.':'老板！一切平安。一百二十辆车，一道划痕都没有。','Вчера один пытался уехать без оплаты. Не уехал.':'昨天有人想不付钱就走。没走成。','Твои машины тоже тут, в шкафу ключи. Бери любую.':'你的车也在这儿，钥匙在柜子里。随便挑。',
 'Посторонним нельзя… А, покупатель? Ну смотри.':'外人不能进……哦，买家？那你看吧。','Сто двадцать мест. Ночью тут ставят машины таксисты.':'一百二十个车位。晚上出租车司机在这儿停车。','Чайник':'水壶','Зелёный чай из пакетика. Охранная классика.':'袋泡绿茶。保安经典。',
 'Склад №7 в порту':'港口7号仓库','Проверить новую партию':'检查新到的货','Ящики':'箱子','Ящики — только для хозяина склада.':'箱子只有仓库老板能动。','Новую партию ещё не разгрузили. Загляни позже.':'新货还没卸完。待会儿再来。','Ничейный груз! Оформили как твой: ':'无主货物！登记到你名下：',
 'Старые покрышки. Сотня. Хана заберёт.':'旧轮胎。一百个。花会拿走的。','Ящик с надписью «Не открывать». Ты не открыл.':'一个写着“请勿打开”的箱子。你没打开。','Сувениры: Токийская башня в снегу. Двести штук.':'纪念品：雪中的东京塔。两百个。','Запчасти для «Молнии». Дядя Миша бы обрадовался.':'“闪电”的零件。米沙叔叔会高兴的。',
 'Погрузчик':'叉车','Погрузчик. Права? Какие права.':'叉车。驾照？什么驾照。','Поговорить с грузчиком':'和搬运工聊聊','Хозяин! Новая партия каждые пять минут, проверяй ящики.':'老板！每五分钟到一批新货，记得查箱子。','Таможня? Таможня у нас своя.':'海关？我们有自己的海关。',
 'Склад продаётся. Говорят, тут бывает интересное.':'仓库出售中。听说这里常有有趣的东西。','Ничего не трогай, я за это отвечаю.':'什么都别碰，我要负责的。','Клуб «Синдзю»':'“新宿”俱乐部','Хозяин в клубе! Громче!':'老板来了！大声点！','Танцевать':'跳舞','Лёха танцует. Танцпол в шоке.':'廖哈在跳舞。舞池惊呆了。',
 'Заказать трек':'点歌','Ставлю евробит. Для дрифта — самое то.':'放欧陆节拍。漂移最配。','Следующий трек — для водителя красной машины!':'下一首献给红色车的车手！','Только не «Макарену». Никогда.':'就是别放《玛卡瑞纳》。永远别。','Коктейль «Неон» (без алкоголя)':'“霓虹”无酒精鸡尾酒',
 'Светится в темноте. Вкус — как у неона, наверное.':'在黑暗中发光。味道大概像霓虹灯。','Сесть в VIP-ложу':'坐进VIP包厢','Твоя ложа. Твой клуб. Твой вечер.':'你的包厢。你的俱乐部。你的夜晚。','Ложа за отдельную плату. Охрана смотрит косо.':'包厢另外收费。保安在瞪你。',
 'Мы в эфире! Алексей, правда, что вы ни разу не тормозили в повороте?':'我们正在直播！阿列克谢，听说你过弯从不刹车，是真的吗？','Тормоза придумали для тех, кто не умеет поворачивать.':'刹车是给不会转弯的人发明的。','(смеётся) Это пойдёт в нарезку.':'（笑）这段要剪进集锦。',
 'Зрители спрашивают: что вы делаете со всеми этими деньгами?':'观众问：你拿这么多钱做什么？','Покупаю студии, в которых мне задают вопросы.':'买下问我问题的演播室。','…Справедливо, шеф.':'……说得对，老板。','…Справедливо.':'……说得对。','Последний вопрос: Рин или Хана?':'最后一个问题：凛还是花？','Следующий вопрос.':'下一个问题。',
 'Это и был последний! Конец эфира!':'这就是最后一个！直播结束！','Рейтинг вырос!':'收视率上涨了！','Телестудия «Дрифт-ночь»':'“漂移之夜”演播室','Дать интервью Аяке':'接受绫香采访','Встать у хромакея':'站到绿幕前','Ты на экране. За спиной — Токийская башня. Ненастоящая.':'你上屏幕了。身后是东京塔。假的。',
 'Посмотреть в камеру':'看镜头','Красная лампочка горит. Улыбайся.':'红灯亮了。笑一个。','Стена мониторов':'监视器墙','Рейтинг шоу: первое место в ночном эфире. Твоя студия.':'节目收视率：深夜档第一。你的演播室。','На мониторах — повтор: красная машина уходит в занос на С1.':'监视器上在回放：一辆红车在C1上漂移。',
 'Партнёр пришёл. Тебе с двойным луком, как Мише.':'合伙人来了。给你双份葱，跟米沙一样。'});

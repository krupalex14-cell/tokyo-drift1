// ===== «Элит Моторс»: the supercar showroom by the Ferris wheel =====
// five cars turn on lit platforms; walk up to one — a window with the car, its numbers, buy / drive / test drive.
// Дракон-87 is sold to VIP members of the Golden Dragon only.
var DLRP=[[64,96],[180,84],[296,96],[104,166],[256,166]],DLRSP={};
function dlrCars(){var L2=[];CARS.forEach(function(c,i){if(c.elite)L2.push(i)});return L2}
function dlrSpr(ci){var c=CARS[ci],k=ci;if(!DLRSP[k])DLRSP[k]=gridToCanvas(c.grid,playerPal(c.show[0],c.show[1]));return DLRSP[k]}
function dlrDoor(){var P=stPlaces();if(!P||!P.wheel)return null;if(!dlrDoor.q){var q=gpsNear(P.wheel.x+150,P.wheel.y+40,300)||gpsNear(P.wheel.x,P.wheel.y,500);dlrDoor.q=q?{x:q.x,y:q.y}:{x:P.wheel.x,y:P.wheel.y}}return dlrDoor.q}
IXR.dealer={name:['Автосалон «Элит Моторс»','Elite Motors showroom'],w:360,h:220,entry:[180,212],exitY:216,doorR:44,
 card:[['АВТОСАЛОН','SHOWROOM'],['«Элит Моторс»: суперкары от 1 до 50 млн.','Elite Motors: supercars from 1 to 50 million.'],['Зайти','Go in']],
 door:function(){return dlrDoor()},
 ob:[[0,0,360,46],[0,0,8,220],[352,0,8,220],[0,216,160,4],[200,216,160,4],[34,66,60,60],[150,54,60,60],[266,66,60,60],[74,136,60,60],[226,136,60,60],[158,140,44,14]],
 npc:[{id:'mgr',p:'mgr',x:180,y:142,d:0,cut:14}],
 enter:function(){},
 hs:[{id:'door',x:180,y:212,r:12,door:1,lb:['Выйти на улицу','Go outside'],act:function(){ixLeave()},tap:[160,204,40,16]},
  {id:'mgr',who:'mgr',x:180,y:162,r:12,lb:['Поговорить с менеджером','Talk to the manager'],act:function(){var m=ixActor('mgr'),L2=[TR('Добрый вечер. Каждая машина здесь — с гарантией и без вопросов.','Good evening. Every car here comes with a warranty and no questions.'),TR('«Дракон-87»? Только для гостей «Золотого дракона». Таков уговор с Тацуми-сан.','The Dragon-87? Only for guests of the Golden Dragon. That’s our deal with Tatsumi-san.'),TR('Тест-драйв бесплатный. Разбить машину на тест-драйве — тоже, но лучше не надо.','Test drives are free. Crashing one is free too, but better not.')],n=IX.mn=(IX.mn||0)+1;ixSay(L2[n%3],m.x,m.y-16)}}],
 tick:function(){},
 art:function(){var W=this.w,H=this.h,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  // white glossy tiles
  for(y=44;y<H-4;y++)for(x=8;x<W-8;x++){var col=((x>>4)+(y>>4))&1?'#e4e4ec':'#dcdce6';if(x%16===0||y%16===0)col='#c4c4d0';else if((x+y*2)%37===0)col='#f4f4fa';g.fillStyle=col;g.fillRect(x,y,1,1)}
  R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,160,4,K);R(200,H-4,160,4,K);R(164,H-8,32,8,'#3a3a46');
  // the glass front onto the bay (the view is drawn live), the sign above it
  R(8,6,W-16,10,'#1c1c24');pfc(g,'ELITE MOTORS',W/2,8,'#e8c050');R(8,16,W-16,24,K);R(8,38,W-16,2,'#c8c8d4');R(8,40,W-16,4,'#9a9aa8');
  // the platforms: dark discs, a ring of lights, a gold one for the legend
  DLRP.forEach(function(p,i){var gold=i===4;cgDisc(g,p[0]+1,p[1]+2,31,'rgba(10,6,20,.18)');cgDisc(g,p[0],p[1],31,K);cgDisc(g,p[0],p[1],30,gold?'#5a4a2a':'#3a3e4a');cgDisc(g,p[0],p[1],27,gold?'#6a5a34':'#4a4e5a');for(var k=0;k<20;k++){var a=k/20*TAU;R(Math.round(p[0]+Math.cos(a)*29),Math.round(p[1]+Math.sin(a)*29),1,1,gold?'#ffd23a':'#bfe8ff')}});
  // the manager's desk
  R(158,140,44,14,K);R(159,141,42,8,'#f4f4f8');R(159,149,42,4,'#c8c8d4');R(166,142,10,5,'#2a2a34');R(167,143,8,3,'#5ae0ff');R(186,143,6,4,'#e8c050');
  // plants in the corners
  [[18,54],[342,54],[18,206],[342,206]].forEach(function(p){R(p[0]-5,p[1]-1,10,7,K);R(p[0]-4,p[1],8,5,'#e8e8f0');cgDisc(g,p[0],p[1]-4,5,'#1e5a32');cgDisc(g,p[0]-2,p[1]-6,2,'#2a7a40')});
  return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  // the night bay and the big wheel turning
  Rr(9,17,342,21,'#121a3a');for(var x=9;x<351;x+=1){if(((x*13)%7)===0)Rr(x,30+((x*7)%4),2,1,'rgba(120,160,255,.35)')}Rr(9,33,342,5,'#0c1430');
  var wx=96,wy=27,wr=9;for(var k=0;k<12;k++){var a=k/12*TAU+t*.15;Rr(Math.round(wx+Math.cos(a)*wr),Math.round(wy+Math.sin(a)*wr),1,1,['#ff4da6','#5ae0ff','#ffd23a'][k%3])}Rr(wx,wy,1,1,'#f4f4f8');Rr(wx-1,wy+1,1,10,'#3a3a46');Rr(wx+1,wy+1,1,10,'#3a3a46');
  for(var b=0;b<8;b++)if(((b*31+Math.floor(t*.7))%5)<3)Rr(200+b*17,24+(b%3)*3,1,1,'#ffd27a');
  // the cars turning on their platforms
  var L2=dlrCars();DLRP.forEach(function(p,i){var ci=L2[i];if(ci==null)return;var sp=dlrSpr(ci);g.save();g.translate(p[0]-ox,p[1]-oy);g.rotate(t*.3+i*1.3);g.scale(1.5,1.5);g.fillStyle='rgba(10,6,20,.35)';g.fillRect(-sp.width/2+1,-sp.height/2+2,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore();
   if(S.own[ci]){g.save();g.translate(-ox,-oy);pfc(g,'SOLD',p[0],p[1]+33,'#3aa06a');g.restore()}})},
 glow:function(g,ox,oy,t){g.globalCompositeOperation='lighter';function pool(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}
  DLRP.forEach(function(p,i){pool(p[0],p[1],40,i===4?'255,210,80':'190,230,255',.18+.04*Math.sin(t*2+i))});pool(96,27,16,'255,77,166',.2);g.globalCompositeOperation='source-over'}};
// a hotspot in front of each platform
DLRP.forEach(function(p,i){IXR.dealer.hs.push({id:'car'+i,x:p[0],y:p[1]+38,r:13,tap:[p[0]-30,p[1]-30,60,60],get lb(){var ci=dlrCars()[i],c=CARS[ci];return [c.n+' · '+fmtN(c.price)+' ¥',L(c.n)+' · '+fmtN(c.price)+' ¥']},act:function(){DLR.i=i;cgOpen(DLR)}})});
IXP.mgr={H:'#2a2a34',S:'#f2cfa8',T:'#1c1c24',W:'#f0eef4',A:'#c49a36',P:'#1c1c24',top:'suit',hair:'short'};

// ---------- the window for one car
var DLR={cw:200,ch:120,i:0,
 title:function(){return TR('«Элит Моторс»','Elite Motors')},busy:function(){return false},
 ci:function(){return dlrCars()[this.i]},
 open:function(){this.ctl()},
 ctl:function(){var me=this,k=$('cgk');if(!k)return;k.innerHTML='';var ci=this.ci(),c=CARS[ci],own=!!S.own[ci],n=dlrCars().length,r=cgRow();
  r.appendChild(cgBtn('◀','',function(){me.i=(me.i+n-1)%n;me.ctl()}));var nb=cgBtn(L(c.n),'',function(){});nb.style.flex='1';r.appendChild(nb);r.appendChild(cgBtn('▶','',function(){me.i=(me.i+1)%n;me.ctl()}));
  var r2=cgRow();if(!own)r2.appendChild(cgBtn(TR('Купить','Buy')+' · '+fmtN(c.price)+' ¥','go',function(){me.buy(ci)}));else if(S.car!==ci)r2.appendChild(cgBtn(TR('Сесть за руль','Drive it'),'go',function(){S.car=ci;save();cgMsg(L(c.n)+' — '+TR('ждёт у входа.','waiting outside.'),'w');me.ctl()}));else{var b=cgBtn(TR('На ходу ✓','Driving it ✓'),'go',function(){});b.disabled=true;r2.appendChild(b)}
  if(!own)r2.appendChild(cgBtn(TR('Тест-драйв','Test drive'),'',function(){cgClose();ixLeave();setTimeout(function(){tdStart(ci)},60)}));
  cgMsg(L(c.desc)+(c.vip&&vipSt()<2?' · '+TR('Нужна карта VIP «Золотого дракона».','You need the Golden Dragon VIP card.'):''),c.vip&&vipSt()<2?'l':'');cgFit()},
 buy:function(ci){var c=CARS[ci];if(c.vip&&vipSt()<2){cgMsg(TR('Только для VIP «Золотого дракона». Тацуми-сан просил.','Golden Dragon VIPs only. Tatsumi-san’s request.'),'l');return}
  if(S.coins<c.price){cgMsg(TR('Не хватает','Not enough')+': '+fmtN(c.price-Math.floor(S.coins))+' ¥','l');return}
  S.coins-=c.price;S.own[ci]=1;S.car=ci;save();cgBal();cgS('big');popup(TR('Машина твоя!','The car is yours!'),'big');this.ctl();cgMsg(L(c.n)+' — '+TR('твоя. Ждёт у входа.','yours. Waiting outside.'),'b')},
 draw:function(g,t){var ci=this.ci(),c=CARS[ci],K='#14101e',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,200,120,'#0e0c16');for(i=0;i<8;i++){g.globalAlpha=.05;cgDisc(g,62,64,40-i*4,'#bfe8ff');g.globalAlpha=1}cgDisc(g,62,66,34,c.vip?'#5a4a2a':'#2a2e3a');cgDisc(g,62,66,31,c.vip?'#6a5a34':'#3a3e4a');
  var sp=dlrSpr(ci);g.save();g.translate(62,64);g.rotate(t*.4);g.scale(2,2);g.fillStyle='rgba(0,0,0,.4)';g.fillRect(-sp.width/2+1,-sp.height/2+2,sp.width,sp.height);g.drawImage(sp,-sp.width/2,-sp.height/2);g.restore();
  pf(g,c.vip?'LEGEND':'SUPERCAR',124,10,c.vip?'#ffd23a':'#8ab8ff');
  function bar(lb,v,y){pf(g,lb,124,y,'#b8b0c8');R(124,y+7,68,4,'#2a2440');R(124,y+7,Math.round(68*clamp(v,.04,1)),4,v>=.98?'#ffd23a':'#5ae0ff')}
  bar('SPEED',(c.vmax-280)/290,24);bar('POWER',(c.pw-180)/430,40);bar('GRIP',(c.grip-.85)/.48,56);bar('STEER',((c.turn+c.dturn)/2-2.35)/1.0,72);
  pf(g,cgK(c.price)+' YEN',124,92,'#ffd23a');if(S.own[ci])pf(g,'IN GARAGE',124,104,'#3aa06a')}};

// ---------- the legend stays VIP-only in the garage too; a car bought or switched inside a room is ready when you walk out
var _gaDlr=garAction;garAction=function(a,i){if(a==='buy'&&CARS[i]&&CARS[i].vip&&!S.own[i]&&vipSt()<2){toast(TR('«Дракон-87» — только для VIP «Золотого дракона»','The Dragon-87 is for Golden Dragon VIPs only'));return}return _gaDlr(a,i)};
var _ixEnterDlr=ixEnter;ixEnter=function(id,opt){var r=_ixEnterDlr(id,opt);if(IX.on)IX.look={car:S.car,col:S.col,str:S.str};return r};
var _ixLeaveDlr=ixLeave;ixLeave=function(){var lk=IX.look;if(IX.on&&lk&&car&&(lk.car!==S.car||lk.col!==S.col||lk.str!==S.str)&&!(typeof TD!=='undefined'&&TD.on)){var o=car;sprC=playerSprite(S.car,BODYC[S.col],STRC[S.str]);car=newCar();car.x=o.x;car.y=o.y;car.a=o.a;car.l=o.l;IX.look=null}return _ixLeaveDlr()};

// ---------- on the map
MAPG.carx=['.......','..YYY..','.YWYWY.','YYYYYYY','YSYYYSY','.S...S.','.......'];MAPK.dealer=['carx','Автосалон'];
var _mbDlr=mapBase;mapBase=function(s){if(MAPB&&MAPBS===s)return MAPB;var d=dlrDoor();if(!d)return _mbDlr(s);var fake={k:'dealer',x:d.x-12,y:d.y-30,w:24,h:24};SPEC.push(fake);try{return _mbDlr(s)}finally{var i=SPEC.indexOf(fake);if(i>=0)SPEC.splice(i,1)}};

Object.assign(EN,{'Автосалон':'Showroom','Сёгун GT-S':'Shogun GT-S','Кицунэ RS':'Kitsune RS','Райдзин E':'Raijin E','Оками V12':'Okami V12','Дракон-87':'Dragon-87',
 'Гран-турер: быстрый и спокойный на любой скорости':'A grand tourer: fast and calm at any speed','Трековый лис: лёгкий, цепкий и злой':'A track fox: light, grippy and mean','Электрический гиперкар: мгновенная тяга и ни звука':'An electric hypercar: instant torque, not a sound',
 'Двенадцать цилиндров и волчий вой. Быстрее — только легенда':'Twelve cylinders and a wolf’s howl. Only the legend is faster','Машина Тацуми с Вангана-87. Создана для заносов. Только для VIP':'Tatsumi’s car from the Wangan ’87. Built to drift. VIP only'});
Object.assign(ZH,{'Автосалон':'车行','Сёгун GT-S':'将军 GT-S','Кицунэ RS':'狐 RS','Райдзин E':'雷神 E','Оками V12':'狼 V12','Дракон-87':'龙-87',
 'Гран-турер: быстрый и спокойный на любой скорости':'豪华GT：任何速度下都又快又稳','Трековый лис: лёгкий, цепкий и злой':'赛道之狐：轻、抓地强、够凶','Электрический гиперкар: мгновенная тяга и ни звука':'电动超跑：瞬间扭矩，悄无声息',
 'Двенадцать цилиндров и волчий вой. Быстрее — только легенда':'十二缸和狼嚎。比它快的只有传奇','Машина Тацуми с Вангана-87. Создана для заносов. Только для VIP':'辰巳在湾岸-87的座驾。为漂移而生。仅限VIP',
 'Автосалон «Элит Моторс»':'“精英汽车”车行','АВТОСАЛОН':'车行','«Элит Моторс»: суперкары от 1 до 50 млн.':'“精英汽车”：100万到5000万的超跑。','Поговорить с менеджером':'和经理聊聊',
 'Добрый вечер. Каждая машина здесь — с гарантией и без вопросов.':'晚上好。这里每辆车都有保修，而且不问来历。','«Дракон-87»? Только для гостей «Золотого дракона». Таков уговор с Тацуми-сан.':'“龙-87”？只卖给“金龙”的客人。这是和辰巳先生的约定。',
 'Тест-драйв бесплатный. Разбить машину на тест-драйве — тоже, но лучше не надо.':'试驾免费。试驾时撞坏也免费，不过最好别撞。','«Элит Моторс»':'“精英汽车”','Сесть за руль':'坐上驾驶座','ждёт у входа.':'在门口等你。','На ходу ✓':'正在开 ✓','Тест-драйв':'试驾',
 'Нужна карта VIP «Золотого дракона».':'需要“金龙”VIP卡。','Только для VIP «Золотого дракона». Тацуми-сан просил.':'仅限“金龙”VIP。辰巳先生的要求。','Машина твоя!':'车归你了！','твоя. Ждёт у входа.':'归你了。在门口等你。','«Дракон-87» — только для VIP «Золотого дракона»':'“龙-87”仅限“金龙”VIP'});

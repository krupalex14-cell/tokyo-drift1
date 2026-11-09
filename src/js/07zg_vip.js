// ===== VIP of «Золотой дракон»: the owner's office, the race with his driver, the balcony upstairs =====
// win big (one payout from 50 000 ¥, or 70 000 ¥ won in all) → the bouncer says the boss wants you →
// Tatsumi in his office → beat Sora from the casino to Tokyo Tower → the VIP card: baccarat and money races upstairs.
// Developer mode: the office and the stairs are open at once, and Tatsumi can hand over the card without the race.

PORT.tatsumi='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAYAAAC7UXvqAAAD6UlEQVR4Xu2ZT0hUQRzHJ4kOESEi0UH2JEsYiIh4CIkQDxIhHiIiIiKiQ8iePHQID548dAhZOnTo4EEkOoiEeFhCQkRE5CEkIRFLLNJBRCQ8iGh8Z/f3nDc7M+/NH8vDfkDcfW/2zff7+zPz3i5jDRo0aGCi5Uru5CwjdOEsLi6KLr4vspEXI8ppdv/88p7f+wKELBr09vYkhK+uriXew5iviSAGIB6RThOswteEtwES74OPCS8DJvFLS8tGT319t4KU00WfyKkg4a8GWo2XnigtJ0zUmv3EtieaXA2oog/xacIJjEvLUhacDJjET5R2/qkJJwPniSAGxNLJWkKhSsnbgE3di2xubARJpLOBSmWb//kgmsC1sBLZ3js5GwDlctm6ZELjZSAEvqX03wx0dHaG8O++E6N8RBZ22vjbwdZKqjAam2OnjYzrydfMgvWtBJpsevQOY2w7EUUSbjIin9usrQFD104Xg5ksqgWsDaRhyoDpnCvOPRCqhgnX6zndTlMZYdJLlz+7Bi8mWsnx14/eLFo/oQUpob5ne+zB8EsWRYtsq7zJxSx9aGaHB/dikTCqG+dDEAPg4+y7TDqyjsuKtwFEuTjytm6+w4PHiWO6cdGK337g1AMAfRBNFfhOmtaA8hjaffE5Otf1ZNK6/oHzKoRHP0yaJt4EGXEVD7xLSMV+fjhxuC0/zPZrRyqfxhPnqgFYNBo14VxCBJUSAfFXt2a1c+K8aMJl6RQJngFR/MxkKZ7rYWGgWjLCg4xv9IF3BtIamjIi3jZT3/jUPhEkA7WG5t9CT4+yusaWxUM4sP0OSEUQAyTG9DhIUSczIcQD52VUh7ysomFl8SEJbkDGZ5/IQpASsv0mgRo/RB84r0Ki6K0fX7iohfk5drv5WBs4qv+dXBcbvDvEx+Xb+xPjbXvDKgMq0SQcdHf3MPZzNTXzGAezgMyDo+g567jPrDKTaiBNdCzcEpho+T3GjqKqEYIM5dv74x8HTVkxGoB4MUJ10fZk9/o4N0Hg/fr8HC8vcV6Y0ZnQGlCJJ3ipBEI2Ab5/i+qyojNRt4xCuEk8orO+nvy1UeTrXhMbGJ3if3h9sF+MjxWmIt7AMjABcF1qbhEYQkZIm3guYYCEy2VjA7Iz9vqp8iM4rssemQA3btabJBNkhCaIDZiiLpOWBRd00ZczAUQT3ICN+Kwg2j1N1Zs2/NdlRYcqC4D6g0w430qYsqArE93xLNFXZQKk7gO2mBqczoVcxbwMIAu0oxK0isjHge6cauXJipcBWXRWRMEqozbwhxCfZdMExKGB144L1lGWNzMVaHTnJj4vBCkhHdUeOa39s+Avb4sLh3PNiigAAAAASUVORK5CYII=';
PORT.sora='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAYAAAC7UXvqAAADg0lEQVR4Xu2ZMWiTQRTHzyJSJEPoJCV0KBkcRERCJ3EQyezgIB2DcxHnDg5ODg7OJaM4BHEu4lCcSpCQQURCESlFOpQMIYgIlf8X3pfL5e679953MUt+EJL0cnf//7337vu+qzErVqxYsUyupJ58o7J1WTTmxehn0jmvpjQA8ZXqemTIrcuUJpIZ4IgfDi9MtbphjJlEKYWR0gYoZWjlITIExFM7GSlrolQ+uqs+XWFjjg82cx87T8/mPNFvR8PfWZvWiNqAT/z3zq1C0S52NGBEY0JlwBY/mxJy7EhoDKzJp5xCk0/ymY+dXlQXqKHYFuxDbICz28RATdgmyiA2sAjs3UnK0gz4oqBJo6UZSIXIgCb/iy5svuuDNAoiAz5cgfZ3fP7V/TD3t5SoDZBQW6BPsM0iDLENaNInBgx9ab+Yi6IkjdgGbD693gtqu/mwFWwDRe1F44ZQGXChNML7t49tcXsZShmAYFC/N1l1vONlG3JBe2V9elsNkEZaVAYePH8zM9/gczsT9X5/bJ41z3NDPvFox+98wt1xOagM+ICJo+NR1oTPvjSjv9PvUsC+nfbdQlMKaTjr92a63W1N0ojubLnPB+oIYKIbjUca7XNAvPSWnFAbkOCutvu9DP/FwCJh1wBAHfw14/z+HWFHrp5237I1uqu/03qVXXnp6U76iCmOAD18aHM2hPahRmzAPjrB6n/tbJtaY9er6/DJfv4CvtVHfzpa0SyK+GDLnaTX/5GdJtQau9lpm51OzXcvc2O2eKQNQL9ef23mLFVqQlwD9tmnb69Gnbg14Yp3j098d7rc64AoApOJp6fPoXMcErx5+w6ruN1xKTqcziID3IFt4TCD77G9X3OoBcRFLIUbBS0LN7BokhlAIXKPBu3fcvuEUBuo1erZ9od3iLhevWbwil2V0U6/pX40jiZaKgOYeDz8k68eBGmgfjSeBtEuROHWCg4xHU/+ryfWXgvscBdB50WnJ7MPLCeDgbnffJx1jV1tEV3utspKoRTit+v13FTRcSNARLjFHTUQEt89qLFSFisP8THc8bgmCg1wVx74UscnnlIrFgVuJIIGJOJ9cFc+RiwSXgNS8e7qF4lHmyQKsUhEa0BKTDynHiSUNmCvvkS8NAohShnQiidSmJgzIM1/IFl5G/TjEirmUhEAR4edYF5zjLlXbCmlDYSKkiM+Bf8AiBQx98bop3YAAAAASUVORK5CYII=';
WHO.tatsumi=['Тацуми','Tatsumi'];WHO.sora=['Сора','Sora'];
var VPHONE=['Тацуми · по телефону','Tatsumi · on the phone'];
IXP.tatsumi={H:'#a6a6b2',h:'#7a7a88',S:'#e2ae8c',T:'#ece8dc',t:'#c4bdac',W:'#26222e',A:'#d8a020',P:'#e4dfd2',B:'#3a2a1a',top:'suit',shades:1};
IXP.sora={H:'#1e1c26',h:'#e8b840',S:'#f6d8c4',T:'#1c1c24',t:'#0c0c12',W:'#e8b840',P:'#1c1c24',B:'#e8b840',hair:'long',top:'racer'};
IXP.vbg=CIP.guard;
IXP.vcr={H:'#141418',S:'#f6dcc0',T:'#f0eef4',W:'#1c1c24',A:'#e8b840',P:'#1c1c24',top:'vest',hair:'long'};
IXP.vbar={H:'#2a1a14',S:'#e3b58e',T:'#f0eef4',W:'#1c1c24',A:'#c8202a',P:'#1c1c24',top:'vest'};
IXP.vg1=CIP.g1;IXP.vg2={H:'#d8d8e0',S:'#e3b58e',T:'#3a2a5a',W:'#f0eef4',A:'#e8b840',P:'#3a2a5a',top:'suit'};

// ---------- where you stand with the house
function vipSt(){return S.vipSt|0}
function vipInv(){var c=S.casStat||{};return vipSt()>0||(c.big|0)>=50000||(c.won|0)>=70000}
function vipUp(){return vipSt()>=2||!!S.dev}
function vipDz(who,ru,en,zh,nm){if(zh)ZH[ru]=zh;return D(who,ru,en,nm)}

// ---------- the hall: what the bouncer and the office door do now
var _ciLinesV=ciLines;ciLines=function(){var L2=_ciLinesV();
 if(vipSt()>=2)L2.bounc=[TR('Добро пожаловать наверх, Алексей-сан.','Welcome upstairs, Alexei-san.'),TR('Сора уже спрашивала про тебя.','Sora was asking about you.')];
 else if(S.dev)L2.bounc=[TR('Режим разработчика? Проходи, свои.','Developer mode? Go on up, you’re one of us.')];
 else if(vipSt()===1)L2.bounc=[TR('Сначала заезд с Сорой. Потом — наверх.','First the race with Sora. Then upstairs.')];
 else if(vipInv())L2.bounc=[TR('Хозяин хочет тебя видеть. Его кабинет — вон та дверь.','The boss wants to see you. His office is that door.')];
 return L2};
var _ciActV=ciAct;ciAct=function(){var h=CI.hs;
 if(h&&h.id==='office'&&(vipInv()||S.dev)){vipIn('vipof');return}
 if(h&&h.id==='bounc'&&vipUp()){ciSay('bounc');setTimeout(function(){if(CI.on&&mode==='cas'&&!(typeof CGM!=='undefined'&&CGM.on))vipIn('vip')},650);return}
 _ciActV()};
var _casEnterV=casEnter;casEnter=function(){var was=CI.on;_casEnterV();if(was||!CI.on)return;
 if(vipInv()&&vipSt()===0)setTimeout(function(){if(!CI.on||mode!=='cas')return;var hn=$('cahn');hn.textContent=TR('Вышибала у лестницы машет тебе: хозяин хочет тебя видеть.','The bouncer by the stairs waves at you: the boss wants to see you.');hn.style.display='block';CI.hint=6},1500)};
// hall → a room upstairs or behind a door (the street car stays where it is)
function vipIn(id,opt){if(!CI.on)return;CI.on=false;CIK.l=CIK.r=CIK.u=CIK.d=0;CI.path=null;CI.auto=null;CI.bub=null;['cab','cap','cahn'].forEach(function(k){var e=$(k);if(e)e.style.display='none'});ixEnter(id,opt||{})}
// rooms of the casino lead back into the hall, not onto the street
var _ixLeaveV=ixLeave;ixLeave=function(){var R=IX.r;if(!IX.on||!R||!R.cas)return _ixLeaveV();
 if(typeof CGM!=='undefined'&&CGM.on){if(CGM.g.busy&&CGM.g.busy())return;cgClose()}
 IX.on=false;IX.scn=null;IXK.l=IXK.r=IXK.u=IXK.d=0;if(R.leave)R.leave();$('casui').classList.remove('ixs');$('cab').style.display='none';
 CI.on=true;mode='cas';casUi(true);CI.x=R.cas[0];CI.y=R.cas[1];CI.cx=CI.x;CI.cy=CI.y;CI.d=0;CI.path=null;CI.auto=null;CI.bub=null;CI.hs=null;CI.fade=1;CI.mv=false;
 $('cacn').textContent=Math.floor(S.coins)+' ¥';ciResize();CI.last=performance.now();requestAnimationFrame(ciLoop)};
// out of a casino room straight onto the street (for a race)
function vipOut(cb){if(mode==='room'&&IX.on)ixLeave();if(mode==='cas'&&CI.on)casExit();setTimeout(cb,80)}
// the casino game window inside a room: Esc and the back button close it first
var _cgOpenV=cgOpen;cgOpen=function(g){if(mode==='room'&&!window._tdbVip&&window.tdBack){var ob=window.tdBack;window.tdBack=function(){if(mode==='room'&&typeof CGM!=='undefined'&&CGM.on){cgClose();return true}return ob()};window._tdbVip=1}_cgOpenV(g)};
var _cgCloseV=cgClose;cgClose=function(){var on=CGM.on;_cgCloseV();if(on&&!CGM.on&&mode==='room')IX.hs=null};

// ---------- the races with Sora: the story's city race, run on the side (the story does not move)
C4R.sora={id:'sora',name:'Сора',tag:'#ffd23a',car:10,col:6,str:5,glow:4};
C4FIN.sora='Сора первая на финише';
var _stPlacesV=stPlaces;stPlaces=function(){var P=_stPlacesV();if(P&&!P.casino&&typeof CAS!=='undefined'&&CAS){var d=casDoor(),q=gpsNear(d.x,d.y+16,160)||gpsNear(d.x,d.y,400);P.casino={x:q?q.x:d.x,y:q?q.y:d.y+16,name:{ru:'Казино',en:'Casino'}}}return P};
function vipGo(m){if(ST.act||!car)return;ST.mode0=!!ST.mode;ST.mode=true;m.side=1;C4P.crace.sora=m.pace||.93;stStart(m,true)}
var _stDoneV=stDone;stDone=function(ok,why){var m=ST.act;if(!m||!m.side)return _stDoneV(ok,why);
 ST.act=null;ST.ride=false;ST.arr=false;AICAP.g=62;AICAP.e=12;rivClear();ST.routed='';WP=null;ST.rte=null;if(ST.mode0!=null){ST.mode=ST.mode0;ST.mode0=null}if(typeof c4SubClear==='function')c4SubClear();
 setTimeout(function(){if(m.end)m.end(ok,why)},ok?1100:500)};
var _stAbortV=stAbort;stAbort=function(){var m=ST.act;_stAbortV();if(m&&m.side){ST.rte=null;if(ST.mode0!=null){ST.mode=ST.mode0;ST.mode0=null}}};
var _stHudV=stHud;stHud=function(){_stHudV();var m=ST.act;if(m&&m.side&&ST.mode){var e=$('sobj'),sp=e&&e.querySelector('span');if(sp&&sp.textContent.indexOf('/5')>=0)sp.textContent=sp.textContent.replace('/5','/2')}};
function vipRaceM(route,pace,end,title){return {id:'vip_'+route.join('_'),title:title||{ru:'Заезд с Сорой',en:'The race with Sora'},type:'crace',route:route,grid:[['sora',62,12,0]],pace:pace,reward:0,pre:[],post:[],end:end}}
// the owner's test: casino → Tokyo Tower
function vipTest(){var m=vipRaceM(['casino','tower'],.93,function(ok,why){
  if(ok){vipGrant(true,[D('sora','…Ладно. Ты быстрый.','…Fine. You’re fast.'),D('tatsumi','Сора сказала «быстрый». От неё это почти признание в любви.','Sora said “fast”. From her that’s almost a love letter.',VPHONE),
   D('tatsumi','Карта VIP твоя. Балкон наверху — вышибала тебя пропустит. И десять тысяч за красивый заезд.','The VIP card is yours. The balcony is upstairs — the bouncer will let you through. And ten thousand for a beautiful race.',VPHONE)]);return}
  S.vipL=(S.vipL|0)+1;save();dlgOpen([D('sora','Мои стоп-сигналы тебе к лицу. Ещё раз? Я в «Драконе».','My tail lights suit you. Again? I’ll be at the Dragon.')],function(){toast(L('Не вышло')+(why?': '+L(why):''))})});
 vipGo(m)}
function vipGrant(prize,lines){S.vipSt=2;if(prize){S.coins+=10000;S.vipW=(S.vipW|0)+1}save();dlgOpen(lines||[],function(){popup(TR('VIP-карта «Золотого дракона»','The Golden Dragon VIP card'),'big');if(prize)setTimeout(function(){popup('+10 000 ¥','mul')},700);if(S.snd)try{auBell()}catch(e){}})}

// ================= the owner's office =================
IXR.vipof={name:['Кабинет хозяина','The owner’s office'],w:240,h:180,entry:[120,170],exitY:176,cas:[259,62],
 ob:[[0,0,240,44],[0,0,10,180],[230,0,10,180],[0,176,104,4],[136,176,104,4],[78,44,84,52],[96,104,16,15],[128,104,16,15],[12,48,20,58],[206,98,22,56],[14,144,18,24],[212,158,16,16],[176,50,12,8],[86,156,12,8]],
 npc:[{id:'tatsumi',p:'tatsumi',x:120,y:62,d:0,cut:13},{id:'vbg',p:'vbg',x:92,y:162,d:3},{id:'sora',p:'sora',x:182,y:56,d:2}],
 enter:function(o){var so=ixActor('sora'),t=ixActor('tatsumi'),b=ixActor('vbg');so.hide=vipSt()>=2;so.x=182;so.y=56;so.d=2;so.pose='stand';so.path=null;so.em=null;t.d=0;t.em=null;b.d=3;
  if(vipSt()===0&&!o.quiet)setTimeout(function(){if(IX.on&&IX.r===IXR.vipof&&!IX.scn)vipMeet()},350)},
 hs:[{id:'door',x:120,y:172,r:10,door:1,lb:['Вернуться в зал','Back to the hall'],act:function(){ixLeave()},tap:[104,164,32,16]},
  {id:'tatsumi',who:'tatsumi',x:120,y:102,r:16,lb:['Поговорить с Тацуми','Talk to Tatsumi'],tap:[78,40,84,56],when:function(){return !(S.dev&&vipSt()<2)},act:function(){vipOwner()}},
  {id:'skip',who:'tatsumi',x:120,y:102,r:16,tap:[78,40,84,56],lb:['Тацуми: VIP без заезда (разработчик)','Tatsumi: VIP without the race (developer)'],when:function(){return S.dev&&vipSt()<2},act:function(){vipOwner(true)}},
  {id:'sora',who:'sora',x:182,y:72,r:14,lb:['Заезд с Сорой: до Токийской башни','Race Sora: to Tokyo Tower'],when:function(){return vipSt()===1||(S.dev&&vipSt()===0)},act:function(){
   dlgOpen([D('sora','Машины у входа. Я на чёрной. Старт по сигналу — и не моргай.','The cars are by the entrance. I’m in the black one. Go on the signal — and don’t blink.')],function(){vipOut(vipTest)})}},
  {id:'chair1',x:104,y:126,r:10,lb:['Сесть в кресло','Sit in the armchair'],tap:[96,104,16,15],act:function(){ixSit(104,112,1,0,104,126)}},
  {id:'chair2',x:136,y:126,r:10,lb:['Сесть в кресло','Sit in the armchair'],tap:[128,104,16,15],act:function(){ixSit(136,112,1,0,136,126)}},
  {id:'fish',x:40,y:78,r:14,lb:['Аквариум','The aquarium'],tap:[12,48,20,58],act:function(){ixSay(TR('Золотые рыбки. Тацуми зовёт их по именам гонщиков восьмидесятых.','Goldfish. Tatsumi names them after racers from the eighties.'),22,46)}},
  {id:'cup',x:199,y:50,r:14,lb:['Шкаф с трофеями','The trophy cabinet'],tap:[172,8,54,30],act:function(){ixSay(TR('Кубок «Ванган-87». Гравировка: «Дракону — от тех, кто не догнал».','The “Wangan ’87” cup. The engraving: “To the Dragon — from those who couldn’t catch him”.'),199,6)}},
  {id:'art',x:52,y:50,r:14,lb:['Картина','The painting'],tap:[24,8,58,26],act:function(){ixSay(TR('Золотой дракон над заливом. Подпись в углу: «Т.»','A golden dragon over the bay. Signed in the corner: “T.”'),52,6)}},
  {id:'safe',x:38,y:156,r:12,lb:['Сейф','The safe'],tap:[14,144,18,24],act:function(){var b=ixActor('vbg');b.d=2;ixSay(TR('Даже не смотри туда.','Don’t even look at it.'),b.x,b.y-20);setTimeout(function(){if(IX.on)b.d=3},2500)}}],
 tick:function(dt){var so=ixActor('sora');if(!so.hide&&!so.path&&!IX.scn){var dx=IX.x-so.x,dy=IX.y-so.y;so.d=Math.hypot(dx,dy)<60?(Math.abs(dx)>Math.abs(dy)?(dx<0?2:3):(dy<0?1:0)):2}},
 art:function(){var W=this.w,H=this.h,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  // basket-weave parquet
  for(y=40;y<H-4;y++)for(x=8;x<W-8;x++){var lx=(x-8)%12,ly=(y-40)%12,o=(Math.floor((x-8)/12)+Math.floor((y-40)/12))&1,col=o?'#43291a':'#3c2416';if((o?ly:lx)%4===0)col='#2e1a10';if(lx===0||ly===0)col='#24140c';if(hsh(x,y,71)<.05)col=shadeHex(col,1.14);g.fillStyle=col;g.fillRect(x,y,1,1)}
  R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,104,4,K);R(136,H-4,104,4,K);R(104,H-4,32,4,'#1a0e0a');
  // the north wall: dark wood panels, a gold rail
  R(8,6,W-16,34,'#4a2a1c');for(x=8;x<W-8;x+=20){R(x,6,1,30,'#3a2014');R(x+1,8,1,26,'#5a3424')}R(8,6,W-16,2,'#2a160e');R(8,35,W-16,2,'#a8862e');R(8,37,W-16,3,'#2a160e');
  // the painting: a golden dragon over the bay
  R(23,8,59,27,K);R(24,9,57,25,'#c49a36');R(26,11,53,21,'#6a1220');R(26,26,53,6,'#2a1a3a');for(x=26;x<79;x+=3)R(x,27+((x>>2)&1),2,1,'#4a3a6a');
  for(i=0;i<46;i++){var u=i/46,dx=29+u*44,dy=20+Math.sin(u*9)*4;R(Math.round(dx),Math.round(dy),2,2,'#e8c050');R(Math.round(dx),Math.round(dy)+2,2,1,'#a87a20')}
  R(72,14,5,4,'#e8c050');R(76,13,2,2,'#e8c050');R(73,12,1,2,'#e8c050');R(75,15,1,1,K);for(i=0;i<5;i++)R(31+i*9,15+(i%2)*9,1,1,'#f4e0a0');
  // the window behind the desk (the city is drawn live)
  R(91,7,58,30,K);R(93,9,54,26,'#141a34');R(119,9,2,26,K);R(93,21,54,1,'#0c0e1e');
  // the trophy cabinet
  R(171,7,56,31,K);R(172,8,54,29,'#2a160e');R(173,9,52,27,'#1e1418');R(173,17,52,1,'#8a9ab8');R(173,27,52,1,'#8a9ab8');
  R(178,10,7,2,'#e8c050');R(179,12,5,3,'#e8c050');R(181,15,1,1,'#c49a36');R(179,16,5,1,'#c49a36');R(190,12,9,4,'#c8202a');R(191,15,2,1,K);R(196,15,2,1,K);R(203,12,9,4,'#f4f4f4');R(204,15,2,1,K);R(209,15,2,1,K);R(216,11,6,5,'#3a6ab8');
  R(177,21,10,5,'#d8d0c0');pf(g,'87',178,21,'#6a1220');R(191,22,9,4,'#ffd23a');R(192,25,2,1,K);R(197,25,2,1,K);R(204,22,9,4,'#2a2a34');R(205,25,2,1,K);R(210,25,2,1,K);R(216,20,4,6,'#c49a36');
  // the rug with the dragon ring
  R(68,98,104,56,K);R(69,99,102,54,'#5a1020');R(71,101,98,50,'#c49a36');R(72,102,96,48,'#5a1020');for(x=74;x<168;x+=6){R(x,104,2,1,'#7a2030');R(x,147,2,1,'#7a2030')}
  cgDisc(g,120,134,13,'#c49a36');cgDisc(g,120,134,11,'#6a1424');cgDisc(g,120,134,4,'#c49a36');cgDisc(g,120,134,2,'#6a1424');
  // the desk: green leather, the lamp, the phone, chips, papers, a little gold dragon
  R(78,58,84,38,K);R(79,59,82,24,'#5a2a18');R(79,59,82,2,'#7a3e24');R(86,63,68,15,'#1e4a32');R(86,63,68,1,'#2e6a4a');R(79,83,82,12,'#3e1c10');R(84,85,30,8,'#4a2414');R(126,85,30,8,'#4a2414');R(97,88,4,1,'#c49a36');R(139,88,4,1,'#c49a36');
  R(88,70,6,3,'#c49a36');R(90,66,2,4,'#a87a20');R(85,63,12,4,K);R(86,63,10,3,'#1e7a3e');R(86,63,10,1,'#3aa060');
  R(141,65,11,8,K);R(142,66,9,6,'#2a2a34');R(141,63,11,3,K);R(142,64,9,1,'#3a3a46');R(144,68,5,2,'#8a8e9a');
  R(101,67,14,10,'#d8d0c0');R(102,68,12,8,'#efe8d8');for(i=0;i<3;i++)R(104,70+i*2,8,1,'#a8a090');
  [[126,72,'#c8202a'],[131,73,'#1c1c24'],[127,77,'#3a6ab8']].forEach(function(q){for(var s=0;s<3;s++){cgDisc(g,q[0],q[1]-s,3,K);cgDisc(g,q[0],q[1]-s,2,q[2])}R(q[0]-1,q[1]-3,2,1,'#f4f0e8')});
  cgDisc(g,138,77,3,K);cgDisc(g,138,77,2,'#6a6e7a');R(136,76,5,1,'#5a3a24');R(141,76,1,1,'#ff8a3d');
  R(116,64,4,7,K);R(117,65,2,5,'#e8c050');R(116,63,3,2,'#e8c050');R(119,63,1,1,'#ffe8a0');
  // two armchairs facing the desk
  [104,136].forEach(function(cx0){R(cx0-8,104,16,15,K);R(cx0-7,105,14,13,'#6a1a1a');R(cx0-7,105,14,2,'#8a2a2a');R(cx0-7,105,3,13,'#4a1010');R(cx0+4,105,3,13,'#4a1010');R(cx0-7,113,14,5,'#7a2020');R(cx0-7,113,14,1,'#9a3030')});
  // the aquarium
  R(12,48,20,58,K);R(13,49,18,56,'#1a5a8a');R(14,50,16,54,'#2a7aaa');R(14,50,16,1,'#6ab8e0');for(i=0;i<5;i++){R(15+(i%2)*12,90-i*3,1,12,'#2a8a4a');R(16+(i%2)*12,93-i*3,1,8,'#3aa060')}R(14,100,16,4,'#d8c890');
  // the sofa, the safe, a plant
  R(206,98,22,56,K);R(207,99,20,54,'#4a1418');R(222,99,5,54,'#3a0e12');R(207,117,15,1,'#3a0e12');R(207,135,15,1,'#3a0e12');R(207,99,15,4,'#5a1a1e');R(207,149,15,4,'#5a1a1e');R(209,104,11,2,'#6a2228');
  R(14,144,18,24,K);R(15,145,16,22,'#4a4e5a');R(15,145,16,2,'#6a6e7a');cgDisc(g,23,156,4,K);cgDisc(g,23,156,3,'#8a8e9a');R(22,152,2,8,'#3a3e4a');R(29,150,1,3,'#c49a36');
  R(212,164,16,10,K);R(213,165,14,8,'#6a3a24');cgDisc(g,220,160,7,K);cgDisc(g,220,160,6,'#2a6a3a');cgDisc(g,217,158,3,'#3a8a4a');cgDisc(g,223,161,3,'#2a7a40');
  return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  // the city at night behind the glass
  Rr(93,9,26,12,'#1a2042');Rr(121,9,26,12,'#1a2042');Rr(93,22,26,13,'#22264e');Rr(121,22,26,13,'#22264e');
  for(var x=93;x<147;x++){if(x===119||x===120)continue;var h=8+((x*37)%11)+(((x>>2)*13)%7),top=35-h;Rr(x,top,1,h,'#0c0e1e');if(((x*7)%5)===0)for(var y=top+2;y<34;y+=3)if(((x*31+y*17+Math.floor(t*.7)*3)%9)<3)Rr(x,y,1,1,(x+y)%3?'#ffd27a':'#9fe0ff')}
  Rr(95,21,0,0,'#000');if(Math.floor(t*1.5)%2)Rr(133,12,1,1,'#ff3a3a');Rr(93,30,54,1,'rgba(255,61,139,.35)');
  // fish in the tank
  for(var i=0;i<4;i++){var ph=t*(.35+i*.08)+i*1.7,fx=22+Math.sin(ph)*6,fy=60+i*10+Math.sin(ph*1.7)*3,dir=Math.cos(ph)>0;Rr(Math.round(fx),Math.round(fy),2,1,i%2?'#ff8a3d':'#ffd23a');Rr(Math.round(fx)+(dir?-1:2),Math.round(fy),1,1,'#e86a20')}
  for(var b=0;b<3;b++){var bp=(t*.5+b/3)%1;Rr(27,Math.round(100-bp*48),1,1,'#bfe8ff')}
  // the cigar's smoke
  for(var k=0;k<5;k++){var sp=(t*.4+k/5)%1;g.globalAlpha=(1-sp)*.5;Rr(Math.round(141+Math.sin(t*1.3+k)*2+sp*3),Math.round(75-sp*20),1,1,'#d8d8e0');g.globalAlpha=1}},
 front:function(g,ox,oy){if(IX.pose!=='sit'||IX.y!==112)return;var cx0=Math.abs(IX.x-104)<2?104:Math.abs(IX.x-136)<2?136:0;if(!cx0)return;g.fillStyle='#14101e';g.fillRect(cx0-8-ox,110-oy,16,9);g.fillStyle='#6a1a1a';g.fillRect(cx0-7-ox,111-oy,14,7);g.fillStyle='#8a2a2a';g.fillRect(cx0-7-ox,111-oy,14,1)},
 glow:function(g,ox,oy,t){g.globalCompositeOperation='lighter';function pool(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}
  pool(91,72,34,'255,220,140',.3);pool(22,78,30,'90,180,255',.22+.04*Math.sin(t*2));pool(120,22,40,'120,140,255',.1);pool(199,22,26,'255,210,120',.12);g.globalCompositeOperation='source-over'}};

// talking to the owner
function vipOwner(skip){var t=ixActor('tatsumi');
 if(skip){dlgOpen([D('tatsumi','У тебя особый пропуск, да? Ладно. Будем считать, что ты её обогнал.','You’ve got a special pass, eh? Fine. Let’s say you beat her.')],function(){vipGrant(false,[])});return}
 if(vipSt()===0){vipMeet();return}
 var L2=vipSt()===1?[TR('Сора ждёт. Машины у входа.','Sora is waiting. The cars are by the entrance.'),TR('Удача приходит и уходит. Руки остаются.','Luck comes and goes. Hands stay.')]
  :[TR('Удача — это женщина. Скорость — это характер.','Luck is a woman. Speed is character.'),TR('Наверху тебя знают. Не подведи меня.','They know you upstairs. Don’t let me down.'),TR('В восемьдесят седьмом я ушёл с Вангана непобеждённым. Сора — моя вторая попытка.','In ’87 I left the Wangan unbeaten. Sora is my second try.'),TR('Баккара — игра императоров. И таксистов, которые им возили выручку.','Baccarat is the game of emperors. And of the cabbies who drove their takings.')];
 var n=IX.vtn=(IX.vtn||0)+1;ixSay(L2[n%L2.length],t.x,t.y-16)}
// the first meeting: the owner, his story, his driver
function vipMeet(){var c=S.casStat||{},big=c.big|0,won=c.won|0,l1;
 if(big>=50000)l1=vipDz('tatsumi','Значит, ты — Лёха. Тот, что унёс у меня '+fmtN(big)+' иен за один раз.','So you’re Lyokha. The one who took '+fmtN(big)+' yen off me in one go.','原来你就是廖哈。一把就从我这儿赢走 '+fmtN(big)+' 日元的那个。');
 else if(won>=70000)l1=vipDz('tatsumi','Значит, ты — Лёха. Тот, что выиграл у меня '+fmtN(won)+' иен.','So you’re Lyokha. The one who won '+fmtN(won)+' yen off me.','原来你就是廖哈。从我这儿赢走 '+fmtN(won)+' 日元的那个。');
 else l1=D('tatsumi','Значит, ты — Лёха. О тебе много говорят.','So you’re Lyokha. People talk about you a lot.');
 IX.camT=null;var steps=[{fade:0},{go:['hero',120,150]},{face:['hero',1]},{say:[l1,D('lyokha','Хотите их обратно?','Want it back?')]},
  {go:['hero',104,126]},{sit:['hero',104,112,1,0,0,104,126]},{cam:[120,96]},{w:.4},
  {say:[D('tatsumi','(смеётся) Деньги — пыль. Я сорок лет держу этот зал. Удача приходит и уходит.','(laughs) Money is dust. I’ve run this hall for forty years. Luck comes and goes.'),
   D('tatsumi','А в восемьдесят седьмом на Вангане меня звали Драконом. Отсюда и вывеска.','And in ’87 on the Wangan they called me the Dragon. Hence the sign.'),
   D('tatsumi','Наверху — VIP. Там играют свои. А свой для меня — тот, кто умеет не только ставить, но и ехать.','Upstairs is the VIP. Our own people play there. And to me, one of us is someone who can not just bet, but drive.')]},
  {go:['sora',150,100]},{face:['sora',2]},{w:.2},
  {say:[D('sora','Опять кого-то нашёл, старик?','Found someone again, old man?'),D('tatsumi','Это Сора. Мой водитель. Лучшая на побережье.','This is Sora. My driver. The best on the coast.'),
   D('tatsumi','Обгонишь её от казино до Токийской башни — получишь карту VIP. И десять тысяч сверху.','Beat her from the casino to Tokyo Tower and the VIP card is yours. Plus ten thousand.')]},
  {em:['sora','spark']},{w:.6},{em:['sora',null]},
  {say:[D('sora','Не обижайся, если всю дорогу будешь видеть только мои стоп-сигналы.','No hard feelings if all you see the whole way is my tail lights.')]},{em:['hero','!']},{w:.5},
  {say:[D('lyokha','Посмотрим.','We’ll see.'),D('sora','Скажешь, когда будешь готов. Я здесь.','Tell me when you’re ready. I’ll be here.')]},{em:['hero',null]},
  {go:['sora',182,56]},{face:['sora',2]},{stand:'hero'},{cam:null}];
 ixScene(steps,function(){if(vipSt()===0){S.vipSt=1;save()}var hn=$('cahn');hn.textContent=TR('Поговори с Сорой у окна, когда будешь готов к заезду.','Talk to Sora by the window when you’re ready to race.');hn.style.display='block';IX.hint=6})}

// ================= the VIP balcony: baccarat, the bar, Sora's money races, the hall below =================
IXR.vip={name:['VIP-балкон','The VIP balcony'],w:320,h:200,entry:[296,184],exitY:192,cas:[296,72],
 ob:[[0,0,320,44],[0,0,10,200],[312,0,8,200],[0,196,320,4],[22,44,116,60],[44,106,12,12],[74,106,12,12],[104,106,12,12],[186,40,100,38],[198,80,12,12],[222,80,12,12],[246,80,12,12],[120,132,16,12],[10,40,14,12],[170,40,14,12],[0,148,280,52],[170,136,12,8],[190,118,20,16]],
 npc:[{id:'vcr',p:'vcr',x:80,y:62,d:0,cut:13},{id:'vbar',p:'vbar',x:236,y:60,d:0,cut:13},{id:'vg1',p:'vg1',x:50,y:112,d:1,pose:'sit'},{id:'vg2',p:'vg2',x:252,y:86,d:1,pose:'sit',lean:1,em:'zzz'},{id:'sora',p:'sora',x:176,y:142,d:1}],
 enter:function(){var so=ixActor('sora');so.x=176;so.y=142;so.d=1;so.path=null;so.em=null;var g2=ixActor('vg2');g2.pose='sit';g2.lean=1;g2.em='zzz';var g1=ixActor('vg1');g1.pose='sit';g1.d=1},
 hs:[{id:'stairs',x:296,y:190,r:10,door:1,lb:['Спуститься в зал','Go down to the hall'],act:function(){ixLeave()},tap:[280,150,32,46]},
  {id:'bacc',who:'vcr',x:110,y:124,r:12,lb:['Баккара','Baccarat'],tap:[24,56,112,48],act:function(){ixSit(110,112,1,0,110,124);setTimeout(function(){if(IX.on&&IX.r===IXR.vip&&!CGM.on)cgOpen(BACC)},300)}},
  {id:'sora',who:'sora',x:176,y:124,r:14,lb:['Заезд на деньги с Сорой','Race Sora for money'],tap:[190,118,20,16],act:function(){var so=ixActor('sora');so.d=1;cgOpen(VRACE)}},
  {id:'st1',who:'vbar',x:204,y:98,r:10,lb:['Сесть за бар','Sit at the bar'],tap:[198,78,12,14],act:function(){vipBar(204)}},
  {id:'st2',x:228,y:98,r:10,lb:['Сесть за бар','Sit at the bar'],tap:[222,78,12,14],act:function(){vipBar(228)}},
  {id:'vg2',who:'vg2',x:262,y:100,r:9,lb:['Спящий гость','The sleeping guest'],act:function(){var g2=ixActor('vg2'),L2=[TR('…ставлю… всё на красное…','…all of it… on red…'),TR('…мама, я в плюсе…','…mum, I’m up…'),TR('(храпит)','(snores)')],n=IX.vgn=(IX.vgn||0)+1;ixSay(L2[n%L2.length],g2.x,g2.y-18)}},
  {id:'rail',x:100,y:142,r:14,lb:['Посмотреть вниз, в зал','Look down at the hall'],act:function(){var L2=[TR('Сверху видно, кто выигрывает. И кто врёт, что выигрывает.','From up here you can see who wins. And who lies about winning.'),TR('Рулетка крутится, как будто ей тоже платят.','The roulette spins like it’s getting paid too.')],n=IX.vrn=(IX.vrn||0)+1;ixSay(L2[n%L2.length],IX.x,IX.y-20)}}],
 tick:function(dt){var so=ixActor('sora');if(!so.path&&!IX.scn&&!(typeof CGM!=='undefined'&&CGM.on)){var dx=IX.x-so.x,dy=IX.y-so.y;so.d=Math.hypot(dx,dy)<56?(Math.abs(dx)>Math.abs(dy)?(dx<0?2:3):(dy<0?1:0)):1}},
 art:function(){var W=this.w,H=this.h,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  // black marble with gold seams
  for(y=40;y<150;y++)for(x=8;x<312;x++){var o=((x>>4)+(y>>4))&1,col=o?'#1c1622':'#231b2b';if(x%16===0||y%16===0)col='#4a3a1e';else if(hsh(x,y,83)<.04||(hsh(x>>2,y>>2,7)<.08&&(x+y)%3===0))col='#2e2638';g.fillStyle=col;g.fillRect(x,y,1,1)}
  R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-4,W,4,K);
  // the north wall: plum with gold pilasters and arches
  R(8,6,W-16,34,'#2a1230');for(x=8;x<W-8;x+=40){R(x,6,3,34,'#a8862e');R(x+1,6,1,34,'#e8c050');cgDisc(g,x+21,30,12,'#a8862e');cgDisc(g,x+21,30,11,'#2a1230');cgDisc(g,x+21,30,6,'#3a1a40');cgDisc(g,x+21,30,5,'#2a1230');R(x+4,30,34,6,'#2a1230')}
  R(8,6,W-16,2,'#14101e');R(8,35,W-16,2,'#c49a36');R(8,37,W-16,3,'#1a0c1e');
  // the VIP sign (the tubes; they light up live)
  R(96,10,52,24,'#1a0c1e');R(97,11,50,22,'#24102a');pf(g,'VIP',104,14,'#5a2040',3);
  // the back bar: a mirror, two shelves of bottles
  R(190,8,96,30,K);R(191,9,94,28,'#3a2a40');R(191,9,94,1,'#5a4a60');R(191,19,94,2,'#c49a36');R(191,30,94,2,'#c49a36');
  for(i=0;i<22;i++){var bx=193+i*4+((i*7)%3===0?1:0),bc=['#2a6a3a','#8a2a1a','#c8a040','#3a3a8a','#e8e0d0','#6a1a3a'][(i*5)%6],bh=6+((i*3)%4);R(bx,19-bh,3,bh,bc);R(bx+1,19-bh-2,1,2,bc);R(bx,19-bh,1,bh,'rgba(255,255,255,.25)');
   var bx2=193+i*4,bc2=['#c8a040','#2a6a3a','#e8e0d0','#8a2a1a'][(i*3)%4];R(bx2,30-6,3,6,bc2);R(bx2+1,30-8,1,2,bc2)}
  // plants in gold pots
  [[17,46],[177,46]].forEach(function(p){R(p[0]-6,p[1]-2,12,8,K);R(p[0]-5,p[1]-1,10,6,'#c49a36');R(p[0]-5,p[1]-1,10,1,'#e8c050');cgDisc(g,p[0],p[1]-6,6,'#1e5a32');cgDisc(g,p[0]-3,p[1]-8,3,'#2a7a40');cgDisc(g,p[0]+3,p[1]-5,3,'#2a6a3a')});
  // the baccarat table: a long oval, burgundy felt, gold lines
  var tx0=24,ty0=58,tw=112,th=44;R(tx0+4,ty0,tw-8,th,K);R(tx0,ty0+4,tw,th-12,K);cgDisc(g,tx0+8,ty0+th-10,9,K);cgDisc(g,tx0+tw-8,ty0+th-10,9,K);R(tx0+8,ty0+th-12,tw-16,12,K);
  R(tx0+5,ty0+1,tw-10,th-3,'#5a2a18');R(tx0+1,ty0+5,tw-2,th-14,'#5a2a18');cgDisc(g,tx0+8,ty0+th-10,8,'#5a2a18');cgDisc(g,tx0+tw-8,ty0+th-10,8,'#5a2a18');R(tx0+8,ty0+th-12,tw-16,11,'#5a2a18');
  R(tx0+6,ty0+3,tw-12,th-9,'#6a1426');R(tx0+3,ty0+6,tw-6,th-16,'#6a1426');cgDisc(g,tx0+9,ty0+th-11,5,'#6a1426');cgDisc(g,tx0+tw-9,ty0+th-11,5,'#6a1426');
  for(i=0;i<60;i++)R(tx0+6+((i*37)%(tw-12)),ty0+4+((i*53)%(th-12)),1,1,'#7a1c30');
  R(tx0+6,ty0+3,tw-12,1,'#c49a36');R(66,61,28,4,K);R(67,62,26,2,'#3a2a20');for(i=0;i<6;i++)R(68+i*4,62,3,2,['#c8202a','#1c1c24','#3a6ab8','#e8c050','#3aa06a','#9a5ad0'][i]);
  [[36,80,'#6a9aff'],[66,80,'#3aa06a'],[96,80,'#ff6a6a']].forEach(function(q){R(q[0],q[1],24,12,q[2]);R(q[0]+1,q[1]+1,22,10,'#6a1426')});pf(g,'P',46,83,'#9ab8ff');pf(g,'T',76,83,'#7ad89a');pf(g,'B',106,83,'#ff9a9a');
  R(122,62,10,14,K);R(123,63,8,12,'#2a1810');R(123,61,8,3,'#c8302e');
  // seats along the player's side
  [50,80,110].forEach(function(sx){cgDisc(g,sx+1,114,6,'rgba(10,6,20,.4)');cgDisc(g,sx,112,6,K);cgDisc(g,sx,112,5,'#5a1424');R(sx-3,109,6,1,'#8a2a3a')});
  // the bar: wood and gold, three stools
  R(186,54,100,24,K);R(187,55,98,11,'#4a2214');R(187,55,98,1,'#e8c050');R(187,56,98,1,'#7a3e24');R(187,66,98,10,'#24101c');for(x=192;x<284;x+=12)R(x,67,1,9,'#c49a36');R(187,76,98,1,'#c49a36');
  R(214,58,3,6,'#e8e0d0');R(214,57,3,1,'#c8a040');R(244,59,4,4,'rgba(200,230,255,.7)');R(245,58,2,1,'#e8c050');
  [204,228,252].forEach(function(sx){cgDisc(g,sx+1,88,5,'rgba(10,6,20,.4)');cgDisc(g,sx,86,5,K);cgDisc(g,sx,86,4,'#c49a36');cgDisc(g,sx,86,3,'#6a1424')});
  // the champagne table
  cgDisc(g,128,140,7,K);cgDisc(g,128,140,6,'#3a1a10');cgDisc(g,128,140,5,'#5a2a18');R(125,134,7,7,K);R(126,135,5,5,'#c8ccd8');R(126,135,5,1,'#f4f4f8');R(128,131,2,4,'#1e5a32');R(128,130,2,1,'#e8c050');
  // the hall below, beyond the railing: dark carpet, a roulette, card tables, people's heads
  R(8,158,272,38,'#260a10');for(y=160;y<196;y++)for(x=8;x<280;x+=1){if(((x+y)%12===0)||((x-y+300)%12===0))g.fillStyle='#32101a',g.fillRect(x,y,1,1)}
  [[40,176,'#0e2a4a'],[226,180,'#0e3a22']].forEach(function(q){R(q[0]-20,q[1]-6,40,12,'#1a0a08');R(q[0]-19,q[1]-5,38,10,q[2])});
  R(126,170,48,20,'#1a0a08');R(127,171,46,18,'#0e3a22');cgDisc(g,150,180,7,'#3a2414');cgDisc(g,150,180,5,'#1a1210');
  for(i=0;i<14;i++){var hx=16+((i*53)%256),hy=166+((i*29)%26);R(hx,hy,3,3,'#120c10');R(hx,hy,3,1,['#2a1a14','#141418','#4a3226','#cdb38e'][i%4])}
  // the railing
  R(8,150,272,2,'#e8c050');R(8,152,272,1,'#a87a20');for(x=10;x<280;x+=10){R(x,153,2,5,'#c49a36');R(x,153,1,5,'#e8c050')}R(8,158,272,2,'#a87a20');
  // the stairs down to the hall
  R(280,44,32,104,'#231b2b');for(y=148;y<196;y+=6){var k=(y-148)/48;R(280,y,32,6,shadeHex('#3a2c3e',1-k*.55));R(280,y,32,1,'#c49a36')}R(278,140,2,56,'#e8c050');R(311,44,1,152,'#14101e');
  // the race board by the railing
  R(190,118,20,16,K);R(191,119,18,12,'#120c1e');R(193,121,3,1,'#e8c050');R(196,122,4,1,'#e8c050');R(200,123,3,2,'#e8c050');R(203,125,4,1,'#e8c050');R(192,124,4,1,'#6a5a8a');R(196,126,6,1,'#6a5a8a');R(194,131,2,3,K);R(204,131,2,3,K);
  return c},
 live:function(g,ox,oy,t){function Rr(a,b,w,h,c){g.fillStyle=c;g.fillRect(a-ox,b-oy,w,h)}
  var on=!(Math.floor(t*7)%23===0||Math.floor(t*11)%37===0);if(on){g.save();g.translate(-ox,-oy);pf(g,'VIP',104,14,'#ff4da6',3);pf(g,'VIP',105,14,'#ffb0d8',1);g.restore()}
  // the roulette below: lights running round
  for(var i=0;i<8;i++){var a=t*2+i*Math.PI/4;Rr(Math.round(150+Math.cos(a)*6),Math.round(180+Math.sin(a)*4),1,1,i%2?'#ff3a3a':'#ffd23a')}
  if(Math.floor(t*.5)%7===0&&(t*4)%1<.5)Rr(126,170,48,1,'#ffd23a');
  // bubbles in the champagne, a glint on the bottles
  for(var k=0;k<3;k++){var bp=(t*.9+k/3)%1;Rr(127+k,Math.round(139-bp*4),1,1,'#fff8d0')}
  var gl=Math.floor(t*1.3)%22;Rr(193+gl*4,13,1,2,'rgba(255,255,255,.8)')},
 glow:function(g,ox,oy,t){g.globalCompositeOperation='lighter';function pool(x,y,r,col,a){var gr=g.createRadialGradient(x-ox,y-oy,0,x-ox,y-oy,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-ox-r,y-oy-r,r*2,r*2)}
  pool(122,22,48,'255,77,166',.22+.04*Math.sin(t*9));pool(238,30,52,'255,200,120',.2);pool(80,80,56,'255,210,150',.16);pool(150,180,40,'80,255,140',.08);g.globalCompositeOperation='source-over'}};
function vipBar(sx){ixSit(sx,86,1,0,sx,98);var b=ixActor('vbar');b.x=sx;
 var L2=[TR('Шампанское за счёт заведения. Тацуми велел.','Champagne’s on the house. Tatsumi’s orders.'),TR('Наверху не принято спрашивать, откуда деньги.','Upstairs nobody asks where the money came from.'),TR('Сора выигрывает у всех. Почти у всех.','Sora beats everyone. Almost everyone.'),TR('Этот господин спит здесь с прошлой пятницы. Платит исправно.','That gentleman has been asleep here since last Friday. Pays on time.')],n=IX.vbn=(IX.vbn||0)+1;
 setTimeout(function(){if(IX.on&&IX.r===IXR.vip&&IX.pose==='sit')ixSay(L2[n%L2.length],sx,40)},700)}

// ================= baccarat (punto banco): Player 1:1, Banker 0.95:1, tie 8:1 =================
function bcVal(cs){var t=0;cs.forEach(function(c){t+=c.r==='A'?1:'TJQK'.indexOf(c.r)>=0?0:+c.r});return t%10}
var BACC={cw:176,ch:150,bet:1000,side:'B',shoe:[],P:[],B:[],q:[],st:'bet',res:'',hist:[],tq:0,staked:0,on:'B',
 title:function(){return TR('Баккара · VIP','Baccarat · VIP')},
 fill:function(){var s=[],R2='A23456789TJQK';for(var d=0;d<8;d++)'shdc'.split('').forEach(function(su){for(var i=0;i<13;i++)s.push({r:R2[i],s:su})});for(var i=s.length-1;i>0;i--){var j=cgRnd(i+1),t=s[i];s[i]=s[j];s[j]=t}this.shoe=s},
 draw1:function(){if(this.shoe.length<12)this.fill();var c=this.shoe.pop();return {r:c.r,s:c.s}},
 open:function(){if(!this.shoe.length)this.fill();if(this.st==='deal')this.st='done';this.ctl();cgMsg(TR('Ставь на Игрока, Банкира или ничью. Ближе к девяти — побеждает.','Bet on the Player, the Banker or a tie. Closer to nine wins.'))},
 busy:function(){return this.st==='deal'},
 ctl:function(){var me=this,k=$('cgk');if(!k)return;k.innerHTML='';var r=cgRow();
  [['P',TR('Игрок','Player')+' 1:1'],['B',TR('Банкир','Banker')+' 0.95:1'],['T',TR('Ничья','Tie')+' 8:1']].forEach(function(q){var b=cgBtn(q[1],'',function(){if(me.st==='deal')return;me.side=q[0];[].forEach.call(r.children,function(x){x.classList.toggle('on',x._s===me.side)})});b._s=q[0];if(me.side===q[0])b.classList.add('on');r.appendChild(b)});
  cgStake([500,1000,5000,10000],function(){return me.bet},function(v){me.bet=v});
  var r2=cgRow();this.go=cgBtn(this.st==='done'?TR('Ещё раздачу','Deal again'):TR('Раздать','Deal'),'go',function(){me.deal()});r2.appendChild(this.go);this.go.disabled=this.st==='deal';cgFit()},
 deal:function(){if(this.st==='deal')return;if(!cgTake(this.bet)){cgMsg(TR('Не хватает денег на ставку.','Not enough money for this bet.'),'l');return}
  this.st='deal';this.P=[];this.B=[];this.res='';this.staked=this.bet;this.on=this.side;if(this.go)this.go.disabled=true;cgMsg('');
  var P=[this.draw1(),this.draw1()],B=[this.draw1(),this.draw1()],q=[['P',P[0]],['B',B[0]],['P',P[1]],['B',B[1]]],p=bcVal(P),b=bcVal(B),p3=null;
  if(p<8&&b<8){if(p<=5){p3=this.draw1();P.push(p3);q.push(['P',p3])}
   var v=p3?bcVal([p3]):-1,bd=!p3?b<=5:(b<=2||(b===3&&v!==8)||(b===4&&v>=2&&v<=7)||(b===5&&v>=4&&v<=7)||(b===6&&(v===6||v===7)));
   if(bd){var b3=this.draw1();B.push(b3);q.push(['B',b3])}}
  this.q=q;this.tq=CGM.t},
 tick:function(t){if(!this.q.length||t-this.tq<.45)return;this.tq=t;var a=this.q.shift();a[1].t=t;(a[0]==='P'?this.P:this.B).push(a[1]);cgS('card');if(!this.q.length)this.finish()},
 finish:function(){var p=bcVal(this.P),b=bcVal(this.B),w=p>b?'P':b>p?'B':'T',st=this.staked,pay=0;this.res=w;this.hist.push(w);if(this.hist.length>18)this.hist.shift();
  if(w==='T')pay=this.on==='T'?st*9:st;else if(w===this.on)pay=w==='B'?st*1.95:st*2;
  this.st='done';pay=Math.round(pay);if(pay>0)cgPay(pay);var net=pay-st,nm={P:TR('Игрок','Player'),B:TR('Банкир','Banker'),T:TR('Ничья','Tie')}[w],head=(w==='T'?nm:TR('Побеждает','Winner')+': '+nm)+' ('+p+':'+b+'). ';
  if(net>0){cgMsg(head+'+'+fmtN(net)+' ¥',net>=st*3?'b':'w');cgS(net>=st*3?'big':'win')}else if(net===0)cgMsg(head+TR('Ставка вернулась.','Your bet is back.'));else{cgMsg(head+TR('Казино забирает','The house takes')+' '+fmtN(-net)+' ¥','l');cgS('lose')}
  this.ctl()},
 key:function(c){if(this.st==='deal')return false;var m={KeyP:'P',KeyB:'B',KeyT:'T'}[c];if(!m)return false;this.side=m;this.ctl();return true},
 draw:function(g,t){this.tick(t);var me=this,K='#14101e',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,176,150,'#2a140c');R(2,2,172,146,'#6a1426');for(i=0;i<80;i++)R(2+((i*37)%172),2+((i*53)%146),1,1,'#7a1c30');
  pfc(g,'BACCARAT',88,5,'#e8c050');pfc(g,'BANKER 0.95   TIE 8 TO 1',88,13,'rgba(255,255,255,.5)');R(87,22,2,50,'rgba(232,192,80,.3)');
  var done=this.st==='done';pfc(g,'PLAYER',44,22,done&&this.res==='P'?'#7dff6a':'#b8c8ff');pfc(g,'BANKER',132,22,done&&this.res==='B'?'#7dff6a':'#ffb8b8');
  function hand(cs,cx){var n=cs.length,x0=Math.round(cx-((n-1)*12+18)/2);cs.forEach(function(c,i){var age=t-(c.t||0),u=Math.min(1,age/.25),tx=x0+i*12,ty=32,sx=150,sy=4,px=Math.round(sx+(tx-sx)*u),py=Math.round(sy+(ty-sy)*u);g.fillStyle='rgba(0,0,0,.35)';g.fillRect(px+2,py+2,18,26);g.drawImage(cardImg(c),px,py)})}
  hand(this.P,44);hand(this.B,132);
  if(this.P.length)pfc(g,''+bcVal(this.P),44,62,'#fff');if(this.B.length)pfc(g,''+bcVal(this.B),132,62,'#fff');if(done&&this.res==='T')pfc(g,'TIE',88,44,'#7dff6a');
  // the betting boxes and the stake on the chosen one
  [['P',8,'#6a9aff','PLAYER 1 1'],['T',62,'#3aa06a','TIE 8 1'],['B',116,'#ff6a6a','BANKER .95']].forEach(function(q){var sel=(me.st==='bet'||me.st==='done'?me.side:me.on)===q[0];R(q[1],74,52,22,sel?'#e8c050':q[2]);R(q[1]+1,75,50,20,'#5a1020');pfc(g,q[3],q[1]+26,77,sel?'#ffd23a':q[2]);
   if(sel){var bx=q[1]+26,by=89;cgDisc(g,bx,by,5,'#f4f0e8');cgDisc(g,bx,by,4,'#e8b840');cgDisc(g,bx,by,2,'#f4f0e8')}});
  pfc(g,cgK(this.st==='deal'?this.staked:this.bet),88,100,'#ffd23a');
  // the bead road: past results
  R(8,110,160,34,'#4a0e1a');for(i=0;i<18;i++){var col=i%9,row=Math.floor(i/9),x=16+col*17,y=119+row*15,r=this.hist[i];cgDisc(g,x,y,5,'#3a0a14');if(r)cgDisc(g,x,y,4,r==='P'?'#3a6ab8':r==='B'?'#c8202a':'#3aa06a');if(r)pfc(g,r,x,y-2,'#fff')}}};

// ================= Sora's money races: three routes from the casino =================
var VRT=[{k:'port',x:2,pace:.9},{k:'castle',x:2.5,pace:.93},{k:'tower',x:3,pace:.96}];
function vipBet(q,st){var W2=[D('sora','Чёрт. Ладно, забирай.','Damn. Fine, take it.'),D('sora','Ты сегодня в ударе. Завтра — моя очередь.','You’re on fire today. Tomorrow it’s my turn.'),D('sora','Старик будет ворчать. Деньги твои.','The old man will grumble. The money’s yours.')],
  L3=[D('sora','Спасибо за спонсорскую помощь.','Thanks for the sponsorship.'),D('sora','Ещё круг? Я никуда не тороплюсь. В отличие от тебя.','Another round? I’m in no hurry. Unlike you.'),D('sora','Почти. Но «почти» в кассе не принимают.','Almost. But the cash desk doesn’t take “almost”.')];
 var m=vipRaceM(['casino',q.k],q.pace,function(ok,why){
  if(ok){var w=Math.floor(st*q.x);S.vipW=(S.vipW|0)+1;cgPay(w);popup('+'+fmtN(w)+' ¥','big');if(S.snd)try{auBell()}catch(e){}dlgOpen([W2[cgRnd(3)]],null);return}
  S.vipL=(S.vipL|0)+1;save();dlgOpen([L3[cgRnd(3)]],function(){toast(L('Не вышло')+(why?': '+L(why):''))})},{ru:'Заезд на деньги с Сорой',en:'A money race with Sora'});
 vipGo(m)}
var VRACE={cw:176,ch:132,bet:1000,pick:1,paths:null,tf:null,
 title:function(){return TR('Заезд на деньги с Сорой','A money race with Sora')},
 busy:function(){return false},
 open:function(){var me=this,r=cgRow();VRT.forEach(function(q,i){var b=cgBtn(LT(stPlace(q.k).name)+' ×'+q.x,'',function(){me.pick=i;[].forEach.call(r.children,function(x,j){x.classList.toggle('on',j===i)});me.info()});if(i===me.pick)b.classList.add('on');r.appendChild(b)});
  cgStake([1000,5000,10000,50000],function(){return me.bet},function(v){me.bet=v;me.info()});var r2=cgRow();r2.appendChild(cgBtn(TR('Ехать','Race'),'go',function(){me.go()}));this.info();cgFit()},
 info:function(){var q=VRT[this.pick];cgMsg(TR('Обгонишь — получишь','Beat her and you get')+' '+fmtN(Math.floor(this.bet*q.x))+' ¥. '+TR('Проиграешь — ставка Соре.','Lose and the stake is Sora’s.'))},
 go:function(){var q=VRT[this.pick],st=this.bet;if(!cgTake(st)){cgMsg(TR('Не хватает денег на ставку.','Not enough money for this bet.'),'l');return}cgClose();vipOut(function(){vipBet(q,st)})},
 prep:function(){if(this.paths)return;var P=stPlaces(),c=P.casino;if(!c)return;this.paths=VRT.map(function(q){var d=P[q.k],p=null;try{p=gpsPathFrom(c.x,c.y,d.x,d.y)}catch(e){}if(!p)p=[[c.x,c.y],[d.x,d.y]];return p.map(function(a){var ax=a[0]!=null?a[0]:a.x,ay=a[1]!=null?a[1]:a.y;return [wd(ax,c.x),wd(ay,c.y)]})});
  var x0=0,x1=0,y0=0,y1=0;this.paths.forEach(function(p){p.forEach(function(a){x0=Math.min(x0,a[0]);x1=Math.max(x1,a[0]);y0=Math.min(y0,a[1]);y1=Math.max(y1,a[1])})});var s=Math.min(150/((x1-x0)||1),78/((y1-y0)||1));this.tf=[s,88-(x0+x1)/2*s,64-(y0+y1)/2*s]},
 draw:function(g,t){this.prep();var me=this,K='#14101e',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,176,132,'#3a2a14');R(2,2,172,128,'#120c1e');for(i=12;i<172;i+=12)R(i,20,1,92,'#1a1430');for(i=20;i<112;i+=12)R(2,i,172,1,'#1a1430');
  pfc(g,'SORA  VS  YOU',88,6,'#e8c050');pfc(g,'YOU '+(S.vipW|0)+' : '+(S.vipL|0)+' SORA',88,118,'#b8a8d8');
  if(!this.paths)return;var f=this.tf;function P2(a){return [Math.round(f[1]+a[0]*f[0]),Math.round(f[2]+a[1]*f[0])]}
  function line(p,col,w){for(var k=1;k<p.length;k++){var a=P2(p[k-1]),b=P2(p[k]),n=Math.max(Math.abs(b[0]-a[0]),Math.abs(b[1]-a[1]),1);for(var j=0;j<=n;j++)R(Math.round(a[0]+(b[0]-a[0])*j/n),Math.round(a[1]+(b[1]-a[1])*j/n),w,w,col)}}
  this.paths.forEach(function(p,i){if(i!==me.pick)line(p,'#3a2c58',1)});var pk=this.paths[this.pick];line(pk,'#a8862e',2);
  // a dot running the chosen route
  var L0=0,seg=[];for(var k=1;k<pk.length;k++){var d=Math.hypot(pk[k][0]-pk[k-1][0],pk[k][1]-pk[k-1][1]);seg.push(d);L0+=d}var u=((t*.25)%1)*L0;for(k=1;k<pk.length;k++){if(u<=seg[k-1]){var a2=pk[k-1],b2=pk[k],v=u/(seg[k-1]||1),q2=P2([a2[0]+(b2[0]-a2[0])*v,a2[1]+(b2[1]-a2[1])*v]);R(q2[0]-1,q2[1]-1,3,3,'#ffd23a');break}u-=seg[k-1]}
  this.paths.forEach(function(p,i){var e=P2(p[p.length-1]),sel=i===me.pick;cgDisc(g,e[0],e[1],4,K);cgDisc(g,e[0],e[1],3,sel?'#ffd23a':'#6a5a8a');pfc(g,'X'+VRT[i].x,e[0],e[1]+(e[1]>100?-11:6),sel?'#ffd23a':'#8a7aaa')});
  var c0=P2([0,0]);cgDisc(g,c0[0],c0[1],5,K);cgDisc(g,c0[0],c0[1],4,'#c8202a');cgDisc(g,c0[0],c0[1],2,'#ffd23a')}};

// ---------- developer panel: start the VIP story again
var _devPanelV=devPanel;devPanel=function(){return _devPanelV().replace('<button class="off" data-s="devoff">','<button data-s="devvip">'+L('VIP с нуля')+'</button><button class="off" data-s="devoff">')};
var _devActionV=devAction;devAction=function(a,i){if(a==='devvip'){S.vipSt=0;save();toast(L('VIP с нуля'));renderSet();return}
 if(a==='devadd'){var e=$('devsum'),raw=String(e&&e.value||'').trim(),neg=/^[-−–]/.test(raw),v=cgNum(raw.replace(/^[-−–+]\s*/,''));if(!v){toast(TR('Введи сумму, например 1000000 или 5m','Type an amount, e.g. 1000000 or 5m'));return}
  v=Math.min(v,9e15);var before=Math.floor(S.coins);S.coins=neg?Math.max(0,S.coins-v):Math.min(9e15,S.coins+v);save();toast((neg?'−':'+')+fmtN(Math.abs(Math.floor(S.coins)-before))+' ¥ · '+TR('на счету','balance')+' '+fmtN(S.coins)+' ¥');if(typeof cgBal==='function')cgBal();renderSet();return}
 return _devActionV(a,i)};
// any amount onto the balance: a field and a button above the developer's buttons
var _devPanelV2=devPanel;devPanel=function(){return _devPanelV2().replace('<div class="dbt2">','<div class="dsum"><input id="devsum" type="text" inputmode="numeric" maxlength="20" autocomplete="off" placeholder="1000000 · 5k · 2m"><button data-s="devadd">'+L('На баланс')+'</button></div><div class="dsh">'+L('Любая сумма: 5000, 50k, 2m, 1b. С минусом — снять.')+'</div><div class="dbt2">')};
(function(){var st=document.createElement('style');st.textContent='.dev .dsum{display:flex;gap:6px;margin-top:10px}.dev .dsum input{flex:1;min-width:0;border:0;background:#0e1a12;color:#7dff8c;font:inherit;font-size:16px;font-weight:900;padding:8px 10px;box-shadow:inset 0 0 0 2px #7dff8c;outline:0}.dev .dsum button{border:0;background:#7dff8c;color:#0e2a14;font-size:12px;padding:8px 12px;font-weight:900}.dev .dsh{font-size:11px;color:#b8f0c0;margin-top:4px}';document.head.appendChild(st)})();

Object.assign(EN,{'На баланс':'Add to balance','Любая сумма: 5000, 50k, 2m, 1b. С минусом — снять.':'Any amount: 5000, 50k, 2m, 1b. With a minus — take away.','Сора':'Sora','Сора первая на финише':'Sora finished first','VIP с нуля':'VIP from scratch','Казино':'Casino'});
Object.assign(ZH,{'На баланс':'加到余额','Любая сумма: 5000, 50k, 2m, 1b. С минусом — снять.':'任意金额：5000、50k、2m、1b。前面加负号——扣除。','Введи сумму, например 1000000 или 5m':'请输入金额，例如 1000000 或 5m','на счету':'余额','Сора':'空','Сора первая на финише':'空先到终点','VIP с нуля':'VIP 重新开始','Тацуми':'辰巳','Тацуми · по телефону':'辰巳 · 电话里',
 'Добро пожаловать наверх, Алексей-сан.':'欢迎上楼，阿列克谢先生。','Сора уже спрашивала про тебя.':'空已经在问你了。','Режим разработчика? Проходи, свои.':'开发者模式？上去吧，自己人。','Сначала заезд с Сорой. Потом — наверх.':'先和空比一场。然后再上楼。','Хозяин хочет тебя видеть. Его кабинет — вон та дверь.':'老板想见你。他的办公室就是那扇门。',
 'Вышибала у лестницы машет тебе: хозяин хочет тебя видеть.':'楼梯边的保镖向你招手：老板想见你。','Заезд с Сорой':'与空比赛','…Ладно. Ты быстрый.':'……好吧。你很快。','Сора сказала «быстрый». От неё это почти признание в любви.':'空说你“快”。从她嘴里说出来，几乎算是表白了。',
 'Карта VIP твоя. Балкон наверху — вышибала тебя пропустит. И десять тысяч за красивый заезд.':'VIP 卡归你了。阳台在楼上——保镖会放你过去。再加一万，奖励这场漂亮的比赛。','Мои стоп-сигналы тебе к лицу. Ещё раз? Я в «Драконе».':'我的尾灯挺配你的。再来一次？我在“龙”里等你。',
 'VIP-карта «Золотого дракона»':'“金龙”VIP 卡','Кабинет хозяина':'老板办公室','Вернуться в зал':'回到大厅','Поговорить с Тацуми':'和辰巳聊聊','Тацуми: VIP без заезда (разработчик)':'辰巳：免比赛拿 VIP（开发者）','Заезд с Сорой: до Токийской башни':'与空比赛：到东京塔',
 'Машины у входа. Я на чёрной. Старт по сигналу — и не моргай.':'车在门口。我开黑的那辆。听信号出发——别眨眼。','Сесть в кресло':'坐到扶手椅上','Аквариум':'鱼缸','Золотые рыбки. Тацуми зовёт их по именам гонщиков восьмидесятых.':'金鱼。辰巳用八十年代车手的名字称呼它们。',
 'Шкаф с трофеями':'奖杯柜','Кубок «Ванган-87». Гравировка: «Дракону — от тех, кто не догнал».':'“湾岸-87”奖杯。刻字：“献给龙——来自追不上他的人”。','Картина':'画','Золотой дракон над заливом. Подпись в углу: «Т.»':'海湾上空的金龙。角落署名：“辰”。','Сейф':'保险柜','Даже не смотри туда.':'看都别看。',
 'У тебя особый пропуск, да? Ладно. Будем считать, что ты её обогнал.':'你有特别通行证，是吧？好吧。就当你赢了她。','Сора ждёт. Машины у входа.':'空在等你。车在门口。','Удача приходит и уходит. Руки остаются.':'运气来来去去。手艺留下。','Удача — это женщина. Скорость — это характер.':'运气是个女人。速度是性格。',
 'Наверху тебя знают. Не подведи меня.':'楼上的人认识你了。别让我失望。','В восемьдесят седьмом я ушёл с Вангана непобеждённым. Сора — моя вторая попытка.':'八七年我不败地离开了湾岸。空是我的第二次机会。','Баккара — игра императоров. И таксистов, которые им возили выручку.':'百家乐是皇帝的游戏。也是给他们送钱的出租车司机的游戏。',
 'Значит, ты — Лёха. О тебе много говорят.':'原来你就是廖哈。大家都在谈论你。','Хотите их обратно?':'您想要回去吗？','(смеётся) Деньги — пыль. Я сорок лет держу этот зал. Удача приходит и уходит.':'（笑）钱是尘土。我经营这个大厅四十年了。运气来来去去。',
 'А в восемьдесят седьмом на Вангане меня звали Драконом. Отсюда и вывеска.':'八七年在湾岸，他们叫我“龙”。招牌就是这么来的。','Наверху — VIP. Там играют свои. А свой для меня — тот, кто умеет не только ставить, но и ехать.':'楼上是 VIP。那里是自己人玩的地方。对我来说，自己人不仅要会下注，还要会开车。',
 'Опять кого-то нашёл, старик?':'又找到什么人了，老头？','Это Сора. Мой водитель. Лучшая на побережье.':'这是空。我的车手。海岸线上最好的。','Обгонишь её от казино до Токийской башни — получишь карту VIP. И десять тысяч сверху.':'从赌场到东京塔，赢过她——VIP 卡就是你的。再加一万。',
 'Не обижайся, если всю дорогу будешь видеть только мои стоп-сигналы.':'一路上只能看到我的尾灯，可别生气。','Посмотрим.':'走着瞧。','Скажешь, когда будешь готов. Я здесь.':'准备好了就告诉我。我在这儿。','Поговори с Сорой у окна, когда будешь готов к заезду.':'准备好比赛时，去窗边找空。',
 'VIP-балкон':'VIP 阳台','Спуститься в зал':'下楼回大厅','Баккара':'百家乐','Заезд на деньги с Сорой':'和空赌钱赛车','Сесть за бар':'坐到吧台','Спящий гость':'睡着的客人','…ставлю… всё на красное…':'……全押……红色……','…мама, я в плюсе…':'……妈，我赢了……','(храпит)':'（打呼噜）',
 'Посмотреть вниз, в зал':'往下看大厅','Сверху видно, кто выигрывает. И кто врёт, что выигрывает.':'从上面看得出谁在赢。也看得出谁在吹牛说自己赢。','Рулетка крутится, как будто ей тоже платят.':'轮盘转得好像也有人给它发工资。',
 'Шампанское за счёт заведения. Тацуми велел.':'香槟由本店请客。辰巳吩咐的。','Наверху не принято спрашивать, откуда деньги.':'楼上不兴问钱是哪儿来的。','Сора выигрывает у всех. Почти у всех.':'空赢过所有人。几乎所有人。','Этот господин спит здесь с прошлой пятницы. Платит исправно.':'这位先生从上周五就睡在这儿了。账倒是付得很准时。',
 'Баккара · VIP':'百家乐 · VIP','Ставь на Игрока, Банкира или ничью. Ближе к девяти — побеждает.':'押闲家、庄家或和局。点数越接近九越赢。','Игрок':'闲家','Банкир':'庄家','Ничья':'和局','Побеждает':'胜者','Ставка вернулась.':'下注已退回。','Казино забирает':'赌场收走',
 'Чёрт. Ладно, забирай.':'该死。好吧，拿走吧。','Ты сегодня в ударе. Завтра — моя очередь.':'你今天手感火热。明天轮到我。','Старик будет ворчать. Деньги твои.':'老头会发牢骚的。钱归你了。','Спасибо за спонсорскую помощь.':'感谢赞助。','Ещё круг? Я никуда не тороплюсь. В отличие от тебя.':'再来一圈？我不着急。不像你。',
 'Почти. Но «почти» в кассе не принимают.':'差一点。可收银台不收“差一点”。','Обгонишь — получишь':'赢了她就能拿到','Проиграешь — ставка Соре.':'输了——赌注归空。','Ехать':'出发','Не хватает денег на ставку.':'钱不够下这个注。'});

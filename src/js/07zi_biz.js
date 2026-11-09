// ===== businesses: buy into places around the city, they pay every minute; three levels each; the casino last =====
// a gold card at the place (buy / upgrade), ¥ marks on the map, income every minute you play (half of it while you're away, up to 3 hours),
// a list with routes on the penthouse tablet, and the Golden Dragon itself from Tatsumi for 100 000 000 ¥ (VIP only).
var BZ=[
 {id:'park',at:'stad',dx:120,dy:0,p:500000,inc:2000,n:['Парковка у Стадиона','Stadium parking'],d:['Сотня мест, шлагбаум и будка охранника. Деньги капают с каждой машины.','A hundred spaces, a barrier and a guard booth. Money drips from every car.']},
 {id:'wash',at:'station',dx:-120,dy:0,p:1500000,inc:6000,n:['Автомойка у вокзала','The car wash by the station'],d:['Пена, щётки, воск. Таксисты моются тут каждую смену.','Foam, brushes, wax. The cabbies wash here every shift.']},
 {id:'hana',at:'hana',dx:0,dy:120,p:3000000,inc:12000,n:['Доля в лавке Ханы','A share of Hana’s shop'],d:['Хана получит новые колонки и подъёмник. Ты — процент с каждой заправки.','Hana gets new pumps and a lift. You get a cut of every fill-up.']},
 {id:'ramen',at:'ramen',dx:170,dy:0,p:5000000,inc:20000,n:['Доля в раменной Рэйко','A share of Reiko’s ramen shop'],d:['Новая кухня и второй котёл. Рэйко ворчит, но берёт.','A new kitchen and a second pot. Reiko grumbles, but takes it.']},
 {id:'port',at:'port',dx:0,dy:-120,p:8000000,inc:30000,n:['Склад в порту','A warehouse at the port'],d:['Контейнеры, краны, и никто не задаёт вопросов.','Containers, cranes, and nobody asks questions.']},
 {id:'club',at:'shinju',dx:120,dy:120,p:12000000,inc:50000,n:['Ночной клуб «Синдзю»','The Shinju night club'],d:['Неон, бас и очередь до угла. Дрифтеры едут сюда после заездов.','Neon, bass and a queue round the corner. Drifters come here after their races.']},
 {id:'tv',at:'tvst',dx:-120,dy:120,p:20000000,inc:80000,n:['Телестудия','The TV studio'],d:['Ночное дрифт-шоу Аяки теперь твоё. Рейтинги тоже.','Ayaka’s night drift show is yours now. So are the ratings.']}];
var BZCAS={id:'casino',p:100000000,inc:400000,n:['Казино «Золотой дракон»','The Golden Dragon casino'],d:['Весь зал, балкон и вывеска с драконом.','The whole hall, the balcony and the dragon sign.']};
var BZUP=[0,2,5],BZMUL=[0,1,2.5,6],BZPTS=null;
function bzLv(id){return (S.biz&&S.biz[id])|0}
function bzInc(b){var l=bzLv(b.id);return l?Math.round(b.inc*BZMUL[l]):0}
function bzTotal(){var t=0;BZ.forEach(function(b){t+=bzInc(b)});if(bzLv('casino'))t+=BZCAS.inc;return t}
function bzPts(){if(BZPTS)return BZPTS;var P=stPlaces();if(!P)return null;BZPTS={};BZ.forEach(function(b){var c=P[b.at];if(!c)return;var q=gpsNear(c.x+b.dx,c.y+b.dy,260)||gpsNear(c.x+b.dx,c.y+b.dy,600);BZPTS[b.id]=q?{x:q.x,y:q.y}:{x:c.x,y:c.y}});return BZPTS}
function bzGet(id){for(var i=0;i<BZ.length;i++)if(BZ[i].id===id)return BZ[i];return id==='casino'?BZCAS:null}
// buy, or the next level
function bzBuy(b){var l=bzLv(b.id),cost=l?b.p*BZUP[l]:b.p;if(l>=3||(b.id==='casino'&&l))return false;
 if(S.coins<cost){toast(TR('Нужно','Need')+' '+fmtN(cost)+' ¥ · '+TR('есть','you have')+' '+fmtN(Math.floor(S.coins))+' ¥');return false}
 S.coins-=cost;S.biz=S.biz||{};S.biz[b.id]=l+1;if(!S.bizT)S.bizT=Date.now();save();MAPB=null;popup(l?TR('Уровень','Level')+' '+(l+1)+'!':TR('Твой бизнес!','Your business!'),'big');setTimeout(function(){popup('+'+fmtN(bzInc(b))+' ¥/'+TR('мин','min'),'mul')},600);if(S.snd)try{auBell()}catch(e){}if(typeof cgBal==='function')cgBal();return true}

// ---------- the money: every minute of play; half while you were away (up to 3 hours)
var BZACC={t:0,last:0};
setInterval(function(){if(!window.worldReady||!car||document.hidden)return;var m=$('menu');if(m&&m.style.display==='block')return;var inc=bzTotal();if(!inc){BZACC.t=0;return}
 BZACC.t+=1;S.bizT=Date.now();if(BZACC.t>=60){BZACC.t=0;S.coins+=inc;save();if(typeof cgBal==='function')cgBal();var c=$('cacn');if(c)c.textContent=Math.floor(S.coins)+' ¥';popup('+'+fmtN(inc)+' ¥ · '+TR('бизнесы','businesses'),'mul')}},1000);
setTimeout(function chk(){if(!window.worldReady){setTimeout(chk,1000);return}if(S.bizT&&bzTotal()){var mins=Math.min(180,(Date.now()-S.bizT)/60000);if(mins>=1){var add=Math.floor(bzTotal()*mins*.5);S.coins+=add;S.bizT=Date.now();save();setTimeout(function(){toast(TR('Пока тебя не было, бизнесы принесли','While you were away, your businesses made')+' +'+fmtN(add)+' ¥')},2500)}}},1500);

// ---------- the card at the place
function bzCard(){var q=$('bzq');if(q)return q;var zp=$('zp');if(!zp)return null;q=document.createElement('div');q.id='bzq';
 q.innerHTML='<div class="zk"></div><div class="zn"></div><div class="zi"></div><button></button>';zp.parentNode.insertBefore(q,zp.nextSibling);q.querySelector('button').onclick=function(){var b=bzGet(q._b);if(b&&bzBuy(b)){q._k=''}};
 var st=document.createElement('style');st.textContent='#bzq{display:none;pointer-events:auto;margin-top:8px;width:196px;background:rgba(23,18,38,.94);border:3px solid #ffd23a;padding:8px 10px 10px;text-align:left;text-shadow:none;box-shadow:4px 4px 0 rgba(255,61,139,.45)}#bzq.on{display:block;animation:zpin .25s ease-out}#bzq .zk{font-size:11px;letter-spacing:.16em;color:#ffd23a}#bzq .zn{font-size:16.5px;margin:2px 0 5px;line-height:1.1}#bzq .zi{font-size:11px;color:var(--muted);font-weight:400;line-height:1.4}#bzq button{width:100%;margin-top:8px;border:0;padding:9px 0;font-size:15px;font-weight:900;background:#ffd23a;color:#2a1a0a;box-shadow:3px 3px 0 #b8862a}#bzq button:disabled{opacity:.5}';document.head.appendChild(st);return q}
var _hudBz=hud;hud=function(dt){_hudBz(dt);if(!car||mode!=='game')return;var q=bzCard(),P=bzPts();if(!q||!P)return;var want=null;
 if(car.sp<90&&!ZS&&!DLG&&!(typeof ST!=='undefined'&&ST.act)&&!document.querySelector('#sq.on,#csq.on,#ixq.on'))BZ.forEach(function(b){var p=P[b.id];if(p&&!want&&Math.hypot(wd(car.x,p.x),wd(car.y,p.y))<48)want=b.id});
 if(!want){if(q.classList.contains('on'))q.classList.remove('on');q._b=null;return}
 var b=bzGet(want),l=bzLv(want),key=want+':'+l+':'+(S.lang||'ru');q._b=want;if(!q.classList.contains('on'))q.classList.add('on');if(q._k===key)return;q._k=key;
 var bt=q.querySelector('button');q.querySelector('.zn').textContent=TR(b.n[0],b.n[1]);bt.disabled=false;
 if(!l){q.querySelector('.zk').textContent=TR('БИЗНЕС · ПРОДАЁТСЯ','BUSINESS · FOR SALE');q.querySelector('.zi').textContent=TR(b.d[0],b.d[1])+' '+TR('Доход','Income')+': +'+fmtN(b.inc)+' ¥/'+TR('мин','min')+'.';bt.textContent=TR('Купить','Buy')+' · '+fmtN(b.p)+' ¥'}
 else if(l<3){q.querySelector('.zk').textContent=TR('ТВОЙ БИЗНЕС · УР.','YOUR BUSINESS · LV.')+' '+l;q.querySelector('.zi').textContent=TR('Сейчас','Now')+': +'+fmtN(bzInc(b))+' ¥/'+TR('мин','min')+'. '+TR('Уровень','Level')+' '+(l+1)+': +'+fmtN(Math.round(b.inc*BZMUL[l+1]))+' ¥/'+TR('мин','min')+'.';bt.textContent=TR('Улучшить','Upgrade')+' · '+fmtN(b.p*BZUP[l])+' ¥'}
 else{q.querySelector('.zk').textContent=TR('ТВОЙ БИЗНЕС · МАКС.','YOUR BUSINESS · MAX');q.querySelector('.zi').textContent=TR('Максимальный уровень','Top level')+': +'+fmtN(bzInc(b))+' ¥/'+TR('мин','min')+'.';bt.textContent=TR('Максимум','Maxed out');bt.disabled=true}};

// ---------- on the map: ¥ marks (gold — yours)
MAPG.yen=['Y.....Y','.Y...Y.','..Y.Y..','YYYYYYY','...Y...','YYYYYYY','...Y...'];MAPG.yeng=['S.....S','.S...S.','..S.S..','SSSSSSS','...S...','SSSSSSS','...S...'];MAPK.bizo=['yen'];MAPK.biz=['yeng'];
var _mbBz=mapBase;mapBase=function(s){if(MAPB&&MAPBS===s)return MAPB;var P=bzPts();if(!P)return _mbBz(s);var fakes=[];BZ.forEach(function(b){var p=P[b.id];if(p)fakes.push({k:bzLv(b.id)?'bizo':'biz',x:p.x-10,y:p.y-10,w:20,h:20})});fakes.forEach(function(f){SPEC.push(f)});
 try{return _mbBz(s)}finally{fakes.forEach(function(f){var i=SPEC.indexOf(f);if(i>=0)SPEC.splice(i,1)})}};

// ---------- the list on the penthouse tablet: what you own, what it pays, a route to each
var BZLIST={cw:192,ch:56,
 title:function(){return TR('Мои бизнесы','My businesses')},busy:function(){return false},
 open:function(){var me=this,k=$('cgk');if(!k)return;k.innerHTML='';var r=cgRow();r.style.display='grid';r.style.gridTemplateColumns='1fr 1fr';
  BZ.concat([BZCAS]).forEach(function(b){var l=bzLv(b.id),lb=TR(b.n[0],b.n[1])+(l?' · '+TR('ур.','lv.')+l:'');var bt=cgBtn(lb,l?'on':'',function(){me.route(b)});bt.style.fontSize='12px';bt.style.maxWidth='none';r.appendChild(bt)});
  var r2=cgRow();r2.appendChild(cgBtn(TR('← Мебель','← Furniture'),'',function(){cgClose();setTimeout(function(){cgOpen(HSHOP)},30)}));
  cgMsg(TR('Нажми на бизнес — проложу маршрут.','Tap a business and I’ll set a route.'));cgFit()},
 route:function(b){var p=b.id==='casino'?(CAS?casDoor():null):(bzPts()||{})[b.id];if(!p)return;gpsSet(p.x,p.y);if(!WP)gpsSet(p.x,p.y);cgMsg(TR('Маршрут','Route')+': '+TR(b.n[0],b.n[1]),'w');if(S.snd)try{auBell()}catch(e){}},
 draw:function(g,t){function R(a,b,w,h,c){g.fillStyle=c;g.fillRect(a,b,w,h)}R(0,0,192,56,'#120c1e');R(1,1,190,54,'#1e1630');pfc(g,'INCOME PER MINUTE',96,6,'#b8a8d8');pfc(g,'+'+cgK(bzTotal()),96,18,'#ffd23a',3);
  var own=BZ.filter(function(b){return bzLv(b.id)}).length+(bzLv('casino')?1:0);pfc(g,own+' OF '+(BZ.length+1)+' OWNED',96,42,'#7a6a9a')}};
var _hsCtlBz=HSHOP.ctl;HSHOP.ctl=function(){_hsCtlBz.call(this);var k=$('cgk');if(!k)return;var r=cgRow();r.appendChild(cgBtn(TR('Мои бизнесы →','My businesses →'),'',function(){cgClose();setTimeout(function(){cgOpen(BZLIST)},30)}));cgFit()};

// ---------- the Golden Dragon: Tatsumi sells (VIP only)
(function(){var R=IXR.vipof,t=null;R.hs.forEach(function(h){if(h.id==='tatsumi')t=h});if(!t)return;var w0=t.when;t.when=function(){return (!w0||w0())&&!(vipSt()>=2&&!bzLv('casino'))};
 R.hs.unshift({id:'buycas',who:'tatsumi',x:120,y:102,r:16,tap:[78,40,84,56],lb:['Тацуми: выкупить казино (100 млн)','Tatsumi: buy the casino (100M)'],when:function(){return vipSt()>=2&&!bzLv('casino')},act:bzCasino})})();
function bzCasino(){var t=ixActor('tatsumi');
 if(S.coins<BZCAS.p){dlgOpen([D('tatsumi','Выкупить «Дракона»? (смеётся) Приходи, когда будет сто миллионов. Наличными, разумеется.','Buy the Dragon? (laughs) Come back when you have a hundred million. Cash, of course.')],null);return}
 dlgOpen([D('lyokha','Сто миллионов. За всё: зал, балкон, вывеску.','A hundred million. For all of it: the hall, the balcony, the sign.'),D('tatsumi','…','…'),D('tatsumi','Сорок лет. Знаешь, я давно хотел на пенсию. Рыбки, Ванган по воскресеньям.','Forty years. You know, I’ve wanted to retire for a long time. The fish, the Wangan on Sundays.'),
  D('tatsumi','Ключи. Сора остаётся — если ты не против. Она всё равно никого, кроме тебя, не боится.','The keys. Sora stays — if you don’t mind. She isn’t afraid of anyone but you anyway.'),D('tatsumi','А кабинет… оставь старику кресло. Иногда буду заходить.','And the office… leave an old man his armchair. I’ll drop by now and then.')],function(){if(bzBuy(BZCAS)){t.em='spark';setTimeout(function(){t.em=null},2500);var hn=$('cahn');hn.textContent=TR('«Золотой дракон» — твой. Доход: +400 000 ¥ в минуту.','The Golden Dragon is yours. Income: +400 000 ¥ a minute.');hn.style.display='block';IX.hint=7}})}
var _ownerV=vipOwner;vipOwner=function(skip){if(!skip&&bzLv('casino')){var t=ixActor('tatsumi'),L2=[TR('Хозяин теперь ты. Я — просто старик с рыбками.','You’re the boss now. I’m just an old man with fish.'),TR('Выручка за неделю выросла. Сора говорит, это из-за тебя.','Takings are up this week. Sora says it’s because of you.'),TR('Не продавай вывеску. Дракон должен висеть.','Don’t sell the sign. The dragon has to stay up.')],n=IX.vtn=(IX.vtn||0)+1;ixSay(L2[n%L2.length],t.x,t.y-16);return}return _ownerV(skip)};
var _ciLinesBz=ciLines;ciLines=function(){var L2=_ciLinesBz();if(bzLv('casino')){L2.bounc=[TR('Босс.','Boss.'),TR('Наверху всё спокойно, босс.','All quiet upstairs, boss.')];L2.guard=[TR('Добро пожаловать домой, босс.','Welcome home, boss.')];L2.cash=[TR('Выручка в порядке, босс. Твой процент уже на счету.','The takings are fine, boss. Your cut is already in.')]}return L2};
var _casUiBz=casUi;casUi=function(on){_casUiBz(on);if(on&&bzLv('casino')){var b=document.querySelector('#casui .cti b');if(b)b.textContent=TR('«Золотой дракон» · твой','The Golden Dragon · yours')}};

Object.assign(EN,{});
Object.assign(ZH,{'Парковка у Стадиона':'体育场停车场','Сотня мест, шлагбаум и будка охранника. Деньги капают с каждой машины.':'一百个车位，一道栏杆和一个岗亭。每辆车都在滴钱。','Автомойка у вокзала':'车站旁的洗车行','Пена, щётки, воск. Таксисты моются тут каждую смену.':'泡沫、刷子、车蜡。出租车司机每班都来这儿洗车。',
 'Доля в лавке Ханы':'花的店铺股份','Хана получит новые колонки и подъёмник. Ты — процент с каждой заправки.':'花会得到新的加油机和升降机。你则从每次加油中抽成。','Доля в раменной Рэйко':'玲子拉面店的股份','Новая кухня и второй котёл. Рэйко ворчит, но берёт.':'新厨房和第二口汤锅。玲子嘟囔着，还是收下了。',
 'Склад в порту':'港口仓库','Контейнеры, краны, и никто не задаёт вопросов.':'集装箱、起重机，而且没人多问。','Ночной клуб «Синдзю»':'“新宿”夜总会','Неон, бас и очередь до угла. Дрифтеры едут сюда после заездов.':'霓虹、低音和排到街角的队伍。漂移车手比赛后都来这儿。','Телестудия':'电视演播室',
 'Ночное дрифт-шоу Аяки теперь твоё. Рейтинги тоже.':'绫香的深夜漂移节目现在归你了。收视率也是。','Казино «Золотой дракон»':'“金龙”赌场','Весь зал, балкон и вывеска с драконом.':'整个大厅、阳台和龙招牌。','Уровень':'等级','Твой бизнес!':'你的生意！','мин':'分钟','бизнесы':'生意',
 'Пока тебя не было, бизнесы принесли':'你不在的时候，生意赚了','БИЗНЕС · ПРОДАЁТСЯ':'生意 · 出售中','Доход':'收入','ТВОЙ БИЗНЕС · УР.':'你的生意 · 等级','Сейчас':'现在','Улучшить':'升级','ТВОЙ БИЗНЕС · МАКС.':'你的生意 · 满级','Максимальный уровень':'最高等级','Максимум':'已满级',
 'Мои бизнесы':'我的生意','ур.':'级','← Мебель':'← 家具','Нажми на бизнес — проложу маршрут.':'点一个生意——我来规划路线。','Маршрут':'路线','Мои бизнесы →':'我的生意 →','Тацуми: выкупить казино (100 млн)':'辰巳：买下赌场（1亿）',
 'Выкупить «Дракона»? (смеётся) Приходи, когда будет сто миллионов. Наличными, разумеется.':'买下“龙”？（笑）等你有一亿再来。当然要现金。','Сто миллионов. За всё: зал, балкон, вывеску.':'一亿。买下全部：大厅、阳台、招牌。','…':'……',
 'Сорок лет. Знаешь, я давно хотел на пенсию. Рыбки, Ванган по воскресеньям.':'四十年了。你知道吗，我早就想退休了。养养鱼，周日去湾岸兜兜风。','Ключи. Сора остаётся — если ты не против. Она всё равно никого, кроме тебя, не боится.':'钥匙给你。空留下——如果你不介意的话。反正除了你，她谁也不怕。',
 'А кабинет… оставь старику кресло. Иногда буду заходить.':'至于办公室……给老头子留把椅子。我偶尔会来坐坐。','«Золотой дракон» — твой. Доход: +400 000 ¥ в минуту.':'“金龙”归你了。收入：每分钟 +400 000 ¥。','Хозяин теперь ты. Я — просто старик с рыбками.':'现在你是老板了。我只是个养鱼的老头。',
 'Выручка за неделю выросла. Сора говорит, это из-за тебя.':'这周的营业额涨了。空说是因为你。','Не продавай вывеску. Дракон должен висеть.':'别卖招牌。龙必须挂着。','Босс.':'老板。','Наверху всё спокойно, босс.':'楼上一切安好，老板。','Добро пожаловать домой, босс.':'欢迎回家，老板。',
 'Выручка в порядке, босс. Твой процент уже на счету.':'营业额没问题，老板。你的分成已经到账了。','«Золотой дракон» · твой':'“金龙” · 你的'});

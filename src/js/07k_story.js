// ===== STORY CAMPAIGN «Пьяный стиль» =====
var WHO={lyokha:['Лёха','Lyokha'],hana:['Хана','Hana'],reiko:['Рэйко','Reiko'],misha:['Дядя Миша','Uncle Misha'],kir:['Кир','Kir'],gen:['Гэн','Gen'],rin:['Рин','Rin'],shizuka:['Сидзука','Shizuka'],
 tetsu:['Тэцу','Tetsu'],ghost:['Призрак','Ghost'],seiji:['Сэйдзи','Seiji'],ryu:['Рю','Ryu'],kageyama:['Кагэяма','Kageyama'],okada:['Окада','Okada'],toyo:['Бабушка Тоё','Grandma Toyo'],watanabe:['Ватанабэ','Watanabe'],
 docker:['Докер','Dock worker'],guard:['Охранник замка','Castle guard'],keeper:['Смотритель колеса','Wheel keeper'],monk:['Монах Сэнсо-дзи','Senso-ji monk']};
function LT(o){return o==null?'':typeof o==='string'?o:TR(o.ru,o.en)}
// ---- places (fixed city seed, so these are stable)
var STP=null;
// a stop on a wide arterial (2-3 lanes each way), at the kerb lane, well away from junctions
function stSnapWide(p,R){var best=null;R=R||600;
 RH.q(p.x-R,p.y-R,p.x+R,p.y+R,function(sp){var r=sp.r;if(r.k!=='art')return;
  for(var k=sp.i;k<=sp.j;k+=2){var s=k*r.ds;if(s<r.za+90||s>r.len-r.zb-90)continue;var x=r.xs[k],y=r.ys[k],d=Math.hypot(wd(x,p.x),wd(y,p.y));if(d>R)continue;
   var nearJ=false,jx=r.jx||[];for(var q=0;q<jx.length;q++)if(Math.hypot(wd(jx[q].x,x),wd(jx[q].y,y))<r.hw+60){nearJ=true;break}if(nearJ)continue;
   var sc=d-(r.nl>=3?150:0);if(!best||sc<best.sc)best={sc:sc,r:r,s:s}}});
 if(!best){var q2=gpsNear(p.x,p.y,R,true)||gpsNear(p.x,p.y,R*2);return q2?{x:q2.x,y:q2.y,cx:q2.x,cy:q2.y}:{x:p.x,y:p.y,cx:p.x,cy:p.y}}
 best.r.pt(best.s,TMP);var u=best.r.hw-18;return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),cx:TMP[0],cy:TMP[1],a:Math.atan2(TMP[3],TMP[2]),r:best.r,s:best.s}}
// a stop at the kerb right next to a landmark's footprint, so the place itself is on screen when you arrive
function stClear(x,y,R){var hit=false;PH.q(x-R-8,y-R-8,x+R+8,y+R+8,function(q){if(hit||q.hid||q.gone)return;if(Math.hypot(wd(q.x,x),wd(q.y,y))<R+(q.r||2))hit=true});return!hit}
function stSnapNear(R0,o){o=o||{};var cx0=R0.x+R0.w/2,cy0=R0.y+R0.h/2,SR=o.R||(Math.max(R0.w,R0.h)/2+260),best=null;
 function rd(x,y){var dx=Math.max(R0.x-x,0,x-(R0.x+R0.w)),dy=Math.max(R0.y-y,0,y-(R0.y+R0.h));return Math.hypot(dx,dy)}
 RH.q(cx0-SR,cy0-SR,cx0+SR,cy0+SR,function(sp){var r=sp.r;if(r.k!=='art'&&(r.k!=='loc'||r.hw<22))return;var L=r.len,s0,s1,step;
  if(r.k==='art'){s0=Math.max(sp.i*r.ds,(r.za||0)+70);s1=Math.min(sp.j*r.ds,L-(r.zb||0)-70);step=r.ds*2}else{s0=40;s1=L-40;step=8}
  for(var s=s0;s<=s1;s+=step){r.pt(s,TMP);var x=TMP[0],y=TMP[1],jx=r.jx||[],nj=false;
   for(var q=0;q<jx.length;q++)if(Math.hypot(wd(jx[q].x,x),wd(jx[q].y,y))<r.hw+50){nj=true;break}if(nj)continue;
   var u=r.k==='art'?r.hw-18:r.hw*.3;
   for(var sd=-1;sd<=1;sd+=2){var kx=x-TMP[3]*u*sd,ky=y+TMP[2]*u*sd,ux=cx0+wd(kx,cx0),uy=cy0+wd(ky,cy0),d=rd(ux,uy);if(d<6||!stClear(kx,ky,14))continue;
    var vis=o.f?Math.abs(ux-o.f.x)<=110&&Math.abs(uy-o.f.y)<=260:true,
     sc=o.f?(vis?d:1000+2*Math.abs(ux-o.f.x)+Math.abs(uy-o.f.y))+(r.k==='loc'?60:0):d+(r.k==='loc'?25:0)+(o.south&&uy<R0.y+R0.h?60:0);
    if(!best||sc<best.sc)best={sc:sc,d:d,vis:vis,sd:sd,r:r,s:s,x:wrap(kx),y:wrap(ky),ux:ux,uy:uy,a:sd>0?Math.atan2(TMP[3],TMP[2]):Math.atan2(-TMP[3],-TMP[2])}}}});
 return best}
// Misha's garage: a real building near Senso-ji whose front faces a street; drawn with a shutter and a sign
var GARB=null;
function stGarage(sj){var c={x:sj.x+sj.w/2,y:sj.y+sj.h/2},list=[];
 BH.q(c.x-900,c.y-900,c.x+900,c.y+900,function(b){if(b.st>=14||b.w<48||b.h<36||b.w>170||b.h>140)return;var d=Math.hypot(wd(b.x+b.w/2,c.x),wd(b.y+b.h/2,c.y));if(d<300||d>900)return;if(list.indexOf(b)<0)list.push(b)});
 list.sort(function(a,b){return Math.hypot(wd(a.x+a.w/2,c.x),wd(a.y+a.h/2,c.y))-Math.hypot(wd(b.x+b.w/2,c.x),wd(b.y+b.h/2,c.y))});
 for(var i=0;i<list.length;i++){var b=list[i],fr={x:b.x+b.w/2-3,y:b.y+b.h-2,w:6,h:2},s=stSnapNear(fr,{R:120});if(s&&s.d<46&&s.uy>b.y+b.h+4&&Math.abs(s.ux-(b.x+b.w/2))<b.w/2-10){GARB=b;return s}}
 return null}
// Reiko's ramen shop: on the Akagi pass road just before the start line
function stRamen(z){var r=z.road,s=Math.max((r.za||0)+70,z.s0-170),u=laneU(r,1,0);r.pt(zcs(r,s),TMP);return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3],TMP[2]),r:r,s:s,sd:u<0?-1:1}}
function stPadGate(){var d=SPEC.filter(function(q){return q.k==='drift'})[0];if(!d)return null;var best=null;
 // a gate: road right outside the edge and a clear path inside (the tyre walls block part of the edges); prefer the south side
 [['S',0,1],['N',0,-1],['W',-1,0],['E',1,0]].forEach(function(sd,si){var nx=sd[1],ny=sd[2],len=ny?d.w:d.h,run=0,t0=0;
  function edge(t){return ny?{x:d.x+t,y:ny>0?d.y+d.h:d.y}:{x:nx>0?d.x+d.w:d.x,y:d.y+t}}
  for(var t=16;t<=len-16;t+=6){var e=edge(t),ok=occAt(e.x+nx*14,e.y+ny*14)===1;for(var k=-30;k<=46&&ok;k+=8)ok=stClear(e.x-nx*k,e.y-ny*k,13);
   if(ok){if(!run)t0=t;run++;var sc=run+(si===0?3:0);if(run>=4&&(!best||sc>best.sc))best={sc:sc,t:(t0+t)/2,nx:nx,ny:ny,edge:edge}}else run=0}});
 if(!best)return{x:d.x+d.w*.22,y:d.y+d.h*.5,a:0};
 var e=best.edge(best.t);return{x:e.x-best.nx*60,y:e.y-best.ny*60,a:Math.atan2(-best.ny,-best.nx),g:{x:e.x+best.nx*30,y:e.y+best.ny*30}}}
function stPlaces(){if(STP)return STP;
 function spec(k,i){var a=SPEC.filter(function(s){return s.k===k});return a[Math.min(i||0,a.length-1)]||null}
 function near(k,to,minD){var a=SPEC.filter(function(s){return s.k===k}),best=null,bd=1e9;a.forEach(function(s){var x=s.x+s.w/2,y=s.y+s.h/2,d=Math.hypot(wd(x,to.x),wd(y,to.y));if(d>=(minD||0)&&d<bd){bd=d;best=s}});return best||spec(k)}
 function ctr(s){return s?{x:s.x+s.w/2,y:s.y+s.h/2}:{x:WS/2,y:WS/2}}
 function N(s,fx,fy){var q=s&&stSnapNear(s,{f:{x:s.x+s.w*(fx==null?.5:fx),y:s.y+s.h*(fy==null?.5:fy)}});return q||stSnapWide(ctr(s))}
 // the big station sits inside the rail yard; if no street sees it, meet at the nearest station that does
 // of several landmarks of a kind, take the one a street sees best (within a distance band from a reference point)
 function pick(k,ref,d0,d1){var best=null;SPEC.forEach(function(s){if(s.k!==k)return;var c=ctr(s),d=Math.hypot(wd(c.x,ref.x),wd(c.y,ref.y));if(d<d0||d>d1)return;var q=N(s);if(q&&(!best||q.sc<best.sc))best=q});return best}
 function station(g){var best=null;SPEC.forEach(function(s){if(s.k!=='station'&&s.k!=='tstation')return;var q=N(s);if(!q)return;var d=Math.hypot(wd(q.x,g.x),wd(q.y,g.y)),sc=(q.vis?0:1500)+Math.abs(d-2500);if(!best||sc<best.sc)best={sc:sc,q:q}});
  return best?best.q:stSnapWide(ctr(spec('tstation')))}
 function zone(id){for(var i=0;i<ZONES.length;i++)if(ZONES[i].id===id)return ZONES[i];return null}
 var SJ=spec('sensoji'),sj=ctr(SJ);
 var GAR=stGarage(SJ)||stSnapWide(sj);
 STP={station:station(GAR),garage:GAR,hana:N(near('gas',sj,1800)),toyo:N(near('pagoda',sj,700)),bank:N(spec('skytree')),
  port:N(near('yard',sj,900)),castle:pick('castle',sj,0,3200)||N(spec('castle')),wheel:N(near('ferris',sj)),sensoji:N(SJ,.25,.3),tower:N(spec('tower')),
  scramble:stSnapWide(zone('scr')||sj,420),naka:(function(){var z=zone('r2');var s=zoneStart(z);return{x:s.x,y:s.y}})(),c1:(function(){var z=zone('c1');return{x:z.x,y:z.y}})()};
 var NM={garage:['Мастерская','Garage'],station:['Вокзал','Station'],hana:['Лавка Ханы','Hana’s shop'],toyo:['Ларёк бабушки Тоё','Grandma Toyo’s stall'],bank:['Банк «Сакура-Траст»','Sakura Trust bank'],
  port:['Порт','Port'],castle:['Замок','Castle'],wheel:['Колесо обозрения','Ferris wheel'],sensoji:['Сэнсо-дзи','Senso-ji'],tower:['Токийская башня','Tokyo Tower'],scramble:['Скрамбл','Scramble'],naka:['Кольцо Нака','Naka Ring'],c1:['Эстакада С1','C1 Expressway']};
 STP.shinju=(function(){var z=zone('r0'),q=zoneStart(z);return{x:q.x,y:q.y}})();STP.stad=(function(){var z=zone('stad');return{x:z.x,y:z.y}})();STP.ramen=stRamen(zone('tg0'));STP.pad=stPadGate()||{x:STP.stad.x,y:STP.stad.y};
 NM.shinju=['Кольцо Синдзю','Shinju Ring'];NM.pad=['Площадка в доках','Dock pad'];NM.stad=['Парковка у Стадиона','Stadium parking'];NM.ramen=['Раменная Рэйко','Reiko’s ramen shop'];
 for(var k in NM)STP[k].name={ru:NM[k][0],en:NM[k][1]};
 return STP}
function stZone(id){for(var i=0;i<ZONES.length;i++)if(ZONES[i].id===id)return ZONES[i];return null}
// ---- chapter 1 «Наследство»: one chain — every mission sends you to the next person and says why
function D(who,ru,en,nm){return nm?[who,ru,en,nm]:[who,ru,en]}
var PH_T=['Тоё · по телефону','Toyo · on the phone'],PH_H=['Хана · по телефону','Hana · on the phone'],GEN_C=['Гэн · комментарий','Gen · comment'],LYO_T=['Лёха · про себя','Lyokha · to himself'];
var CH1_GOAL={ru:'Оживить Сакуру дяди Миши и не отдать мастерскую банку',en:'Bring uncle Misha’s Sakura back to life and keep the garage from the bank'};
var STORY=[
 {id:'k1',title:{ru:'Ключи',en:'The keys'},at:'station',type:'deliv',stops:['garage'],reward:50,auto:true,
  goal:{ru:'Доедь до мастерской дяди Миши',en:'Drive to uncle Misha’s garage'},
  why:{ru:'Дядя оставил тебе мастерскую и какую-то «её». Пора посмотреть.',en:'Your uncle left you a garage and some “her”. Time to take a look.'},
  pre:[D('lyokha','Токио. Письмо от нотариуса, ключи у какой-то бабушки Тоё… Дядь Миш, ну ты и забрался.','Tokyo. A letter from a notary, keys with some grandma Toyo… Uncle Misha, you really went far.'),
       D('lyokha','И последняя строчка: «Мастерская твоя. Не продавай. Она ещё не доехала». Кто — «она»?','And the last line: “The garage is yours. Don’t sell it. She hasn’t finished the ride yet.” Who is “she”?'),
       D('toyo','Ты Миша-младший? Похож. Так же криво паркуешься.','You’re little Misha? You look like him. You park just as crooked.'),
       D('lyokha','Я ещё даже не парковался.','I haven’t even parked yet.'),
       D('toyo','Вот и я о том же. Миша просил тебя встретить. Держи ключи — мастерская у Сэнсо-дзи, розовые стрелки доведут.','That’s my point. Misha asked me to meet you. Here are the keys — the garage is by Senso-ji, follow the pink arrows.'),
       D('toyo','Как обустроишься — загляни ко мне в ларёк у пагоды. У меня кое-что от него осталось.','Once you settle in, drop by my stall by the pagoda. I have something of his.')],
  post:[D('lyokha','Так вот ты какая… Сакура. «Она ещё не доехала» — это про тебя?','So that’s you… Sakura. “She hasn’t finished the ride yet” — that’s about you?'),
        D('hana','Эй! Ты кто такой и что делаешь у мастерской Миши?','Hey! Who are you and what are you doing at Misha’s garage?'),
        D('lyokha','Я Лёха. Племянник. Мастерская теперь моя.','I’m Lyokha. His nephew. The garage is mine now.'),
        D('hana','…Хана. У меня лавка запчастей на заправке в Шопинге. Миша был моим лучшим клиентом.','…Hana. I run a parts shop at the gas station in Shopping. Misha was my best customer.'),
        D('hana','Слышишь, как стучит мотор? Сакура еле живая. Миша заказал у меня детали, но так и не забрал.','Hear the engine knocking? Sakura is barely alive. Misha ordered parts from me but never picked them up.'),
        D('lyokha','Так давай их сюда.','So hand them over.'),
        D('hana','В долг даю только тем, кто умеет ездить. Приезжай в лавку — посмотрим, что ты можешь.','I only give credit to people who can drive. Come to my shop — let’s see what you’ve got.')]},
 {id:'k2',title:{ru:'Первый занос',en:'First drift'},at:'hana',type:'drift',goalPts:400,radius:560,reward:100,
  goal:{ru:'Набери 400 очков заносом у лавки Ханы',en:'Score 400 drift points near Hana’s shop'},
  why:{ru:'Хана даст детали для Сакуры в долг, только если ты умеешь ездить.',en:'Hana will give you parts for Sakura on credit only if you can drive.'},
  pre:[D('hana','Ну, показывай. Зажми ручник и поверни. Без руля машина едет ровно, с рулём — сразу занос.','Go on, show me. Hold the handbrake and steer. Without steering the car goes straight, steer and it slides.'),
       D('hana','Набери 400 очков, и я поверю, что ты не просто болтаешь.','Score 400 points and I’ll believe you’re not just talking.')],
  post:[D('hana','Ладно, не врал. Виляешь ужасно, но машину держишь.','Fine, you didn’t lie. You wobble terribly, but you hold the car.'),
        D('lyokha','Это стиль.','It’s style.'),
        D('hana','Стиль… Детали я дам. Только они застряли на складе в порту, а мой фургон сломан.','Style… I’ll give you the parts. Only they’re stuck at the port warehouse, and my van is broken.'),
        D('hana','Съезди за коробкой. Она хрупкая — там стёкла фар и датчики.','Go get the box. It’s fragile — headlight glass and sensors.')]},
 {id:'k3',title:{ru:'Хрупкий груз',en:'Fragile cargo'},at:'hana',type:'deliv',stops:['port','garage'],fragile:true,reward:200,
  goal:{ru:'Забери детали в порту и довези до мастерской без ударов',en:'Pick up the parts at the port and bring them to the garage without hits'},
  why:{ru:'Новые детали для Сакуры. Хана поставит их прямо в мастерской.',en:'New parts for Sakura. Hana will fit them right in the garage.'},
  pre:[D('hana','Коробка ждёт на складе в порту, на моё имя. Мой фургон сломан — поеду с тобой.','The box is waiting at the port warehouse, under my name. My van is broken — I’m coming with you.'),
       D('hana','Заберём — и сразу в мастерскую, там и поставлю. Каждый удар — минус из твоей платы.','We pick it up and go straight to the garage, I’ll fit them there. Every hit comes out of your pay.'),
       D('lyokha','А если совсем без ударов?','And if there are no hits at all?'),D('hana','Тогда я, так и быть, удивлюсь.','Then I might actually be impressed.')],
  stopLines:{port:[D('docker','Коробка для Ханы? Раньше за ней Миша сам приезжал. Каждый месяц, как часы.','A box for Hana? Misha used to come for it himself. Every month, like clockwork.'),
                   D('docker','Говорил, однажды соберёт Сакуру и снова поедет на Кумо. Держи. И не гони, там стекло.','He said one day he’d rebuild Sakura and drive Kumo again. Here. And don’t rush, there’s glass inside.'),
                   D('hana','Кумо?.. Он мне про него никогда не рассказывал. Поехали в мастерскую.','Kumo?.. He never told me about it. Let’s go to the garage.')]},
  work:{ru:'Хана ставит детали…',en:'Hana is fitting the parts…'},
  post:function(r){return(r.hits?[D('hana','Ну… половина стёкол жива. Остальное докуплю.','Well… half the glass survived. I’ll buy the rest.')]:[D('hana','Ни царапины. Беру тебя в курьеры.','Not a scratch. You’re hired as my courier.')]).concat([
   D('hana','Готово. Заводи.','Done. Start her up.'),
   D('lyokha','…Не стучит. Сакура задышала!','…No knocking. Sakura is breathing!'),
   D('hana','Ещё бы. Кстати, бабушка Тоё звонила мне три раза: «Где мальчик?» Она тридцать лет кормила Мишу. Заедь к ней, ларёк у пагоды.','Of course. By the way, grandma Toyo called me three times: “Where’s the boy?” She fed Misha for thirty years. Go see her, the stall by the pagoda.')])}},
 {id:'k4',title:{ru:'Маршрут Миши',en:'Misha’s route'},at:'toyo',type:'deliv',stops:['castle','wheel','sensoji','toyo'],limit:170,limitN:3,reward:150,
  goal:{ru:'Развези онигири: замок, колесо обозрения, Сэнсо-дзи — и назад к Тоё',en:'Deliver onigiri: castle, Ferris wheel, Senso-ji — then back to Toyo'},
  why:{ru:'Каждое утро Миша развозил онигири Тоё. Эти люди ещё не знают, что его нет.',en:'Every morning Misha delivered Toyo’s onigiri. These people don’t know he’s gone yet.'},
  pre:[D('toyo','Пришёл всё-таки. Садись, слушай.','You came after all. Sit down and listen.'),
       D('toyo','Тридцать лет Миша каждое утро развозил мои онигири: охраннику у замка, смотрителю колеса и монаху в Сэнсо-дзи.','For thirty years Misha delivered my onigiri every morning: to the castle guard, the Ferris wheel keeper and the monk at Senso-ji.'),
       D('toyo','Они до сих пор ждут. Никто им не сказал. Я не смогла.','They’re still waiting. Nobody told them. I couldn’t.'),
       D('lyokha','Хочешь, чтобы сказал я?','You want me to tell them?'),
       D('toyo','Хочу, чтобы ты довёз их горячими. Уложись в три минуты! А потом возвращайся — расскажешь, что они сказали.','I want them delivered hot. Make it in under three minutes! Then come back and tell me what they said.'),
       D('toyo','На карте можно ставить метки — она сама покажет дорогу.','You can put markers on the map — it shows the way.')],
  stopLines:{castle:[D('guard','Онигири? А где Миша?.. Вот как.','Onigiri? Where’s Misha?.. I see.'),
                     D('guard','Он всегда влетал во двор боком. Говорил, лучше этого поворота в городе нет. Разве что на Кумо.','He always slid into the yard sideways. Said there was no better corner in the city. Except on Kumo.')],
             wheel:[D('keeper','Ты на него похож. Он здесь катался последний раз лет двенадцать назад.','You look like him. The last time he rode here was about twelve years ago.'),
                    D('keeper','С девушкой. Волосы серебряные, а сама молодая. Больше я её не видел. Да и его — таким счастливым.','With a girl. Silver hair, yet so young. I never saw her again. Nor him that happy.'),
                    D('lyokha','Серебряные…','Silver…',LYO_T)],
             sensoji:[D('monk','Значит, Миша ушёл. Каждый месяц он ставил здесь свечу.','So Misha is gone. Every month he lit a candle here.'),
                      D('monk','Всегда с одними словами: «За ту ночь на Кумо». Что это значит, он не говорил.','Always with the same words: “For that night on Kumo.” He never said what it meant.'),
                      D('lyokha','Онигири развёз. Теперь назад к Тоё.','Onigiri delivered. Now back to Toyo.',LYO_T)]},
  post:[D('toyo','Вернулся. Горячими довёз? Миша возил так же. Только он ещё и пел.','You’re back. Were they hot? Misha drove just like that. Only he sang too.'),
        D('lyokha','Тоё-сан, смотритель колеса видел Мишу с девушкой. Волосы серебряные. А монах говорит про какую-то «ночь на Кумо».','Toyo-san, the wheel keeper saw Misha with a girl. Silver hair. And the monk talks about some “night on Kumo”.'),
        D('toyo','…Значит, пора. Миша оставил для тебя вот это.','…Then it’s time. Misha left this for you.'),
        D('lyokha','Фото. Дядя молодой… и она. Горы, перевал Акаги. На обороте: «Спроси у перевала».','A photo. Young uncle… and her. Mountains, the Akagi pass. On the back: “Ask the pass.”',LYO_T),
        D('toyo','А теперь о плохом. Приходил Окада из банка, искал тебя. Мастерская заложена. Езжай в банк у Скайтри, пока он не пришёл сам.','Now the bad news. Okada from the bank came looking for you. The garage is mortgaged. Go to the bank by the Skytree before he comes himself.')]},
 {id:'k6',title:{ru:'Господин Окада',en:'Mr. Okada'},at:'bank',type:'scene',reward:0,
  goal:{ru:'Приезжай в банк у Скайтри',en:'Come to the bank by the Skytree'},
  why:{ru:'Окада из банка искал тебя. Мастерская заложена.',en:'Okada from the bank was looking for you. The garage is mortgaged.'},
  pre:[D('okada','Алексей-сан? Проходите. Окада, банк «Сакура-Траст». Примите мои соболезнования.','Alexei-san? Please come in. Okada, Sakura Trust bank. My condolences.'),
       D('okada','Ваш дядя заложил мастерскую. Долг — тридцать тысяч иен. Первый взнос, две тысячи, — до конца месяца.','Your uncle mortgaged the garage. The debt is thirty thousand yen. The first payment, two thousand, is due by the end of the month.'),
       D('lyokha','А если не внесу?','And if I don’t pay?'),
       D('okada','Мастерскую продадут. Покупатель уже есть — господин Кагэяма. Очень щедрый человек. И очень терпеливый.','The garage will be sold. There’s already a buyer — Mr. Kageyama. A very generous man. And very patient.'),
       D('okada','Но я очень, очень на вас надеюсь.','But I am very, very hopeful about you.'),
       D('lyokha','(выйдя из банка) Хана, где за месяц взять две тысячи?','(outside the bank) Hana, where do I find two thousand in a month?'),
       D('hana','На Скрамбле. Там толпа и камеры. Покажешь заносы — я сниму, просмотры приведут клиентов в мастерскую.','At the Scramble. Crowds and cameras. Show them your drifts — I’ll film, and the views will bring customers to the garage.',PH_H),
       D('hana','Заезжай за мной в лавку, камеру возьму.','Pick me up at the shop, I’ll bring the camera.',PH_H)],
  post:[]},
 {id:'k5',title:{ru:'Ёппарай',en:'Yopparai'},at:'hana',ride:'scramble',rideZone:'scr',type:'drift',goalPts:600,radius:420,dc:'scramble',reward:200,
  goal:{ru:'Отвези Хану на Скрамбл и набери там 600 очков заносом',en:'Drive Hana to the Scramble and score 600 drift points there'},
  why:{ru:'Хана снимает: просмотры — это клиенты, а клиенты — деньги на взнос.',en:'Hana is filming: views mean customers, and customers mean money for the payment.'},
  pre:[D('hana','Камеру взяла. Поехали на Скрамбл — главный перекрёсток города, там тебя увидят все.','Got the camera. Let’s go to the Scramble — the city’s main crossing, everyone will see you there.')],
  arrive:[D('hana','Приехали. Толпа, камеры, неон. Набери 600 очков заносом — я снимаю.','We’re here. Crowds, cameras, neon. Score 600 drift points — I’m filming.')],
  post:[D('hana','Ты это специально так виляешь?','Do you wobble like that on purpose?'),D('lyokha','Конечно. Это стиль.','Of course. It’s style.'),
        D('hana','Тогда у стиля уже есть имя. Весь Скрамбл зовёт тебя «ёппарай». Пьяный.','Then the style already has a name. The whole Scramble calls you “yopparai”. Drunk.'),
        D('lyokha','Да я трезвый, как стекло!','I’m sober as glass!'),
        D('hana','Им это не объяснишь. Сорок тысяч просмотров за час. И смотри, кто написал под видео.','Try telling them that. Forty thousand views in an hour. And look who commented.'),
        D('gen','«Виляет как пьяный. Пройдёт Кольцо Нака по линии и Эстакаду С1 — тогда поговорим. Гэн»','“Wobbles like a drunk. If he rides the Naka Ring on the line and the C1 Expressway — then we’ll talk. Gen”',GEN_C),
        D('lyokha','Кто такой Гэн?','Who’s Gen?'),
        D('hana','Король Скрамбла. Кого он признаёт, к тому очередь клиентов. Нам это нужно, Лёха.','King of the Scramble. Whoever he respects gets a queue of customers. We need that, Lyokha.'),
        D('hana','Я на метро — монтировать. Соберёшься на Нака — заезжай за мной, сниму для Гэна.','I’ll take the metro and edit. When you’re ready for Naka, pick me up — I’ll film it for Gen.')]},
 {id:'k7',title:{ru:'Розовая линия',en:'The pink line'},at:'hana',ride:'naka',type:'zone',zone:'r2',goalPts:3000,reward:250,
  goal:{ru:'Отвези Хану на Кольцо Нака: держись линии, набери 3 000',en:'Drive Hana to the Naka Ring: follow the line, score 3,000'},
  why:{ru:'Первое испытание Гэна. Хана снимет, Гэн посмотрит запись.',en:'Gen’s first test. Hana films, Gen watches the recording.'},
  pre:[D('hana','Едем на Кольцо Нака. Гэн будет смотреть запись, так что без позора.','We’re going to the Naka Ring. Gen will watch the recording, so don’t embarrass us.')],
  arrive:[D('hana','На кольцах считают не занос, а линию. Видишь розовую траекторию? Чем ближе к ней, тем больше очков.','On the rings they don’t score the drift, they score the line. See the pink path? The closer you stay, the more points.'),
          D('hana','По часовой. Против хода — ноль. Камера пишет.','Clockwise. The wrong way gives zero. Camera’s rolling.')],
  post:[D('hana','Чисто. Почти. Отправила Гэну — уже лайкнул.','Clean. Almost. Sent it to Gen — he already liked it.'),
        D('hana','Осталась Эстакада С1. Туда он тебя позовёт сам. Там узко и быстро — не вздумай вилять.','The C1 Expressway is left. He’ll call you there himself. It’s narrow and fast — don’t you dare wobble.'),
        D('lyokha','Я не виляю, это…','I don’t wobble, it’s…'),D('hana','Стиль. Знаю.','Style. I know.')]},
 {id:'k8',title:{ru:'Король вызывает',en:'The King calls'},at:'c1',type:'zone',zone:'c1',course:true,reward:300,
  goal:{ru:'Проедь Эстакаду С1 до финиша',en:'Drive the C1 Expressway to the finish'},
  why:{ru:'Второе испытание Гэна. После него он с тобой заговорит.',en:'Gen’s second test. After it he’ll talk to you.'},
  pre:[D('gen','Это ты тот ёппарай с видео? Я Гэн.','You’re that yopparai from the video? I’m Gen.'),
       D('gen','Кольцо ты прошёл. Теперь С1 до финиша. Доедешь — завтра дуэль на Скрамбле.','You passed the ring. Now the C1 to the finish. Make it — and tomorrow we duel at the Scramble.')],
  post:[D('gen','Неплохо для пьяного. Ставлю полторы тысячи. Как раз на твой взнос, да?','Not bad for a drunk. I’m betting fifteen hundred. Just right for your payment, huh?'),
        D('lyokha','Откуда ты знаешь про взнос?','How do you know about the payment?'),
        D('gen','Весь город знает. Окада болтлив. Завтра на Скрамбле. Привози свою подружку с камерой.','The whole city knows. Okada talks. Tomorrow at the Scramble. Bring your girlfriend with the camera.'),
        D('hana','Я ему не подружка!','I’m not his girlfriend!')]},
 {id:'k9',title:{ru:'Король Скрамбла',en:'King of the Scramble'},at:'hana',ride:'scramble',type:'duel',zone:'scr',boss:'gen',reward:1500,
  goal:{ru:'Привези Хану на Скрамбл и обыграй Гэна за 45 секунд',en:'Bring Hana to the Scramble and outscore Gen in 45 seconds'},
  why:{ru:'Выигрыш закроет взнос, а победа над Гэном приведёт клиентов.',en:'The prize covers the payment, and beating Gen brings customers.'},
  pre:[D('hana','Камеру взяла. Поехали — Гэн не любит ждать.','Got the camera. Let’s go — Gen doesn’t like waiting.'),D('lyokha','Я тоже.','Neither do I.')],
  arrive:[D('gen','Явился. Правила простые: 45 секунд, у кого больше очков — тот король.','You showed up. Simple rules: 45 seconds, whoever scores more is king.'),
          D('gen','Каждые 10 секунд Хана делает кадр. Будь рядом со мной — и кадр твой.','Every 10 seconds Hana takes a shot. Be close to me and the shot is yours.'),
          D('lyokha','Без проблем.','No problem.')],
  post:[D('gen','…Ладно. Сегодня король ты. Деньги твои. Но корону я ещё заберу.','…Fine. Today you’re king. The money is yours. But I’ll take the crown back.'),
        D('hana','Миллион просмотров, Лёха! И три заказа в мастерскую. Сакура начинает себя окупать.','A million views, Lyokha! And three orders for the garage. Sakura is starting to pay for herself.'),
        D('hana','Слушай… раз уж мы в городе — отвезёшь меня к Токийской башне? Мне нужен ночной кадр.','Listen… since we’re in town — will you drive me to Tokyo Tower? I need a night shot.')],
  fail:[D('gen','Корона остаётся у меня. Приходи, когда протрезвеешь.','The crown stays with me. Come back when you sober up.')]},
 {id:'k9b',title:{ru:'Вечер у башни',en:'Evening at the Tower'},at:'scramble',auto:true,type:'deliv',stops:['tower','hana'],fragile:true,fragileFrom:0,reward:100,
  goal:{ru:'Отвези Хану к Токийской башне, потом домой. Камера у неё на коленях — без ударов',en:'Drive Hana to Tokyo Tower, then home. The camera is on her lap — no hits'},
  why:{ru:'Хана просила ночной кадр башни. Ну и… просто побыть вдвоём.',en:'Hana asked for a night shot of the Tower. And… just some time together.'},
  pre:[D('lyokha','Это свидание?','Is this a date?'),
       D('hana','Это работа. Камера у меня на коленях, так что без ударов, ёппарай.','It’s work. The camera is on my lap, so no hits, yopparai.')],
  stopLines:{tower:function(r){var a=r.hits?[D('hana','Кадр смазан. Ну… сойдёт.','The shot is blurry. Well… it’ll do.')]:[D('hana','Идеальный кадр. Смотри, как светится.','A perfect shot. Look how it glows.')];
   return a.concat([D('hana','Миша показывал мне твои видео с сопок. Говорил: «Вот увидишь, он приедет».','Misha used to show me your videos from the hills. He said: “You’ll see, he’ll come.”'),
    D('lyokha','И как, оправдал?','So, did I live up to it?'),D('hana','Ты… неплохой. Для пьяного.','You’re… not bad. For a drunk.'),
    D('lyokha','Это было почти признание.','That was almost a confession.'),D('hana','Это было «почти». Не обольщайся. Вези меня домой.','That was an “almost”. Don’t get ideas. Drive me home.')])}},
  post:[D('hana','Спасибо, что довёз. И… за вечер.','Thanks for the ride. And… for the evening.'),
        D('hana','Завтра не опоздай к Окаде со взносом.','Don’t be late to Okada with the payment tomorrow.')]},
 {id:'k10',title:{ru:'Первый взнос',en:'First payment'},at:'bank',type:'pay',amount:2000,reward:0,
  goal:{ru:'Внеси первый взнос — 2 000 ¥',en:'Make the first payment — 2,000 ¥'},
  why:{ru:'Не внесёшь — мастерская Миши уйдёт Кагэяме.',en:'Miss it and Misha’s garage goes to Kageyama.'},
  short:[D('okada','Не хватает, Алексей-сан? Ничего. Я подожду. Господин Кагэяма — тоже.','Not enough, Alexei-san? That’s fine. I’ll wait. So will Mr. Kageyama.'),
         D('lyokha','Подкалымлю на заездах по городу и вернусь.','I’ll earn a bit on the city runs and come back.',LYO_T)],
  pre:[D('okada','Две тысячи иен. Ровно. Восхитительно, Алексей-сан.','Two thousand yen. Exactly. Delightful, Alexei-san.'),
       D('okada','Осталось двадцать восемь. И ещё… ваш дядя арендовал у нас ячейку.','Twenty-eight left. And one more thing… your uncle rented a safe-deposit box with us.'),
       D('okada','Ключ он оставил не нам. Некой Рэйко Сато. Она держит раменную у перевала Акаги и, говорят, не любит гостей.','He didn’t leave the key with us. He left it with a certain Reiko Sato. She runs a ramen shop at the Akagi pass and, they say, dislikes visitors.'),
       D('lyokha','(достаёт фото) Акаги… Это та, с серебряными волосами?','(takes out the photo) Akagi… Is that the silver-haired one?'),
       D('okada','Понятия не имею. Но господин Кагэяма тоже очень интересуется этой ячейкой.','I have no idea. But Mr. Kageyama is also very interested in that box.'),
       D('lyokha','Вот этого я и боялся.','That’s exactly what I was afraid of.')],
  post:[], chapterEnd:1, next:{ru:'Найди Рэйко у перевала Акаги',en:'Find Reiko at the Akagi pass'}}
];
var STORY_OLD=['k1','k2','k3','k4','k5','k6','k7','k8','k9','k9b','k10'];
// ---- chapter 2 «Пьяный стиль»: Reiko's lessons, the Mori sisters, the key to Misha's box
var CHAP={1:{t:{ru:'Наследство',en:'Inheritance'},tod:{ru:'утро · Токио',en:'morning · Tokyo'},goal:CH1_GOAL,pay:2000},
 2:{t:{ru:'Пьяный стиль',en:'Drunken Style'},tod:{ru:'вечер · перевал Акаги',en:'evening · Akagi pass'},goal:{ru:'Получить у Рэйко ключ от ячейки Миши и внести второй взнос',en:'Get the key to Misha’s box from Reiko and make the second payment'},pay:3000},
 3:{t:{ru:'Доки',en:'The Docks'},tod:{ru:'ночь · порт',en:'night · the port'}}};
var PH_K=['Кир · по телефону','Kir · on the phone'],NOTE=['Записка Миши','Misha’s note'];
STORY.forEach(function(m){m.ch=m.ch||1});
STORY.push(
 {id:'c1',ch:2,title:{ru:'Раменная у перевала',en:'Ramen at the pass'},at:'bank',auto:true,type:'deliv',stops:['ramen'],reward:300,
  goal:{ru:'Доедь до раменной у подножия перевала Акаги',en:'Drive to the ramen shop at the foot of the Akagi pass'},
  why:{ru:'Ключ от ячейки Миши у Рэйко Сато. Та самая девушка с фото?',en:'The key to Misha’s box is with Reiko Sato. The girl from the photo?'},
  pre:[D('lyokha','Рэйко Сато, раменная у Акаги. Ну, поехали, дядь Миш.','Reiko Sato, a ramen shop at Akagi. Here we go, uncle Misha.',LYO_T),
       D('hana','Ты к той, с фото? С серебряными волосами?','Going to the one from the photo? The silver-haired one?',PH_H),
       D('lyokha','За ключом, Хана.','For the key, Hana.'),D('hana','Ну-ну. Позвони, как вернёшься. Если вернёшься.','Sure. Call me when you’re back. If you come back.',PH_H)],
  post:[D('reiko','Закрыто.','We’re closed.'),
        D('lyokha','Я Алексей. Племянник Миши. Он оставил вам ключ от своей ячейки.','I’m Alexei. Misha’s nephew. He left you the key to his box.'),
        D('reiko','…Так это ты. Миша просил отдать ключ, когда ты будешь готов. Ты не готов.','…So it’s you. Misha asked me to give you the key when you’re ready. You’re not ready.'),
        D('reiko','Я видела твои видео. Ты едешь как пьяный.','I’ve seen your videos. You drive like a drunk.'),
        D('lyokha','Ну вот, и вы туда же.','Oh great, you too.'),
        D('reiko','Это хорошо. Идеальную линию противник читает за два поворота. Пьяную не прочитает никто. Осталось научить тебя не падать.','That’s good. A rival reads a perfect line in two corners. Nobody can read a drunk one. I just need to teach you not to crash.'),
        D('reiko','Три урока — и ключ твой. Первый — линия. Жду на Кольце Синдзю.','Three lessons and the key is yours. The first is the line. I’ll wait at the Shinju Ring.')]},
 {id:'c2',ch:2,title:{ru:'Урок 1. Линия',en:'Lesson 1. The line'},at:'shinju',type:'zone',zone:'r0',goalPts:4000,reward:300,
  goal:{ru:'Кольцо Синдзю: держись линии и набери 4 000',en:'Shinju Ring: hold the line and score 4,000'},
  why:{ru:'Первый урок Рэйко. Без него ключа не будет.',en:'Reiko’s first lesson. No key without it.'},
  pre:[D('reiko','На Нака ты линию держал. Почти. Здесь кольцо шире, а я строже.','You almost held the line at Naka. This ring is wider, and I’m stricter.'),
       D('reiko','Четыре тысячи. Смотри не на машину, а туда, где будешь через секунду.','Four thousand. Don’t look at the car, look where you’ll be in a second.')],
  post:[D('reiko','Линию ты держишь. Теперь научимся её терять.','You can hold a line. Now let’s learn to lose it.'),
        D('reiko','Второй урок — на пустой площадке в доках Харуми. Там нечего ломать, кроме тебя.','The second lesson is on the empty pad at the Harumi docks. Nothing to break there except you.')]},
 {id:'c3',ch:2,title:{ru:'Урок 2. Поймай',en:'Lesson 2. Catch it'},at:'pad',type:'save',zone:'dock',need:5,limit:80,reward:300,
  goal:{ru:'Пять раз: глубокий занос (ручник и руль до упора), а когда появится «Лови!» — выровняй машину',en:'Five times: a deep slide (handbrake and full lock), and when “Catch it!” shows up, straighten the car'},
  why:{ru:'Второй урок Рэйко: пьяный падает, а ты ловишь.',en:'Reiko’s second lesson: a drunk falls, you catch.'},
  pre:[D('reiko','Заведи машину в глубокий занос: ручник и руль до упора, чтобы её почти развернуло.','Throw the car into a deep slide: handbrake and full lock, so it almost spins.'),
       D('reiko','Как увидишь «Лови!» — лови: отпусти ручник, руль прямо, газ — и выровняй. Пять раз.','When you see “Catch it!”, catch it: let go of the handbrake, wheel straight, throttle, and level out. Five times.'),
       D('reiko','Круги нарезать не надо — считаю только пойманные. Остановишься или развернёт — не засчитаю.','Don’t just spin donuts — I only count the catches. Stop or spin out and it doesn’t count.')],
  post:[D('reiko','Вот он, твой стиль. Пьяный падает. Ты — ловишь.','There it is, your style. A drunk falls. You catch.'),
        D('lyokha','То есть я не пьяный?','So I’m not drunk?'),D('reiko','Ты хуже. Ты непредсказуемый.','You’re worse. You’re unpredictable.'),
        D('reiko','Последний урок — хвост. На перевале, за мной. Жду у раменной.','The last lesson is the tail. On the pass, behind me. I’ll wait at the ramen shop.')]},
 {id:'c4',ch:2,title:{ru:'Урок 3. Хвост',en:'Lesson 3. The tail'},at:'ramen',type:'tandem',zone:'tg0',reward:400,
  goal:{ru:'Пройди перевал Акаги за Рэйко: держись близко, но не касайся',en:'Drive the Akagi pass behind Reiko: stay close, don’t touch'},
  why:{ru:'Третий урок. После него Рэйко отдаст ключ.',en:'The third lesson. After it Reiko gives you the key.'},
  pre:[D('reiko','Держись за мной. Чем ближе — тем лучше. Но тронешь мою машину три раза — урок окончен.','Stay behind me. The closer the better. Touch my car three times and the lesson is over.'),
       D('lyokha','А если обгоню?','And if I overtake?'),D('reiko','Не обгонишь.','You won’t.')],
  post:[D('reiko','…Неплохо. Ты ни разу не повторил мою линию — и не отстал.','…Not bad. You never copied my line once — and never fell behind.'),
        D('lyokha','Значит, ключ?','So, the key?'),
        D('reiko','Значит, почти. Кстати, тебе звонит какая-то девушка. Третий раз.','So, almost. By the way, some girl keeps calling you. Third time.'),
        D('hana','Лёха! Мне нужен ночной кадр у башни, клиенты ждут. Заезжай за мной. Если наставница отпустит.','Lyokha! I need a night shot at the Tower, the clients are waiting. Pick me up. If your teacher lets you go.',PH_H)]},
 {id:'c5',ch:2,title:{ru:'Ночной кадр',en:'Night shot'},at:'hana',ride:'tower',type:'drift',goalPts:800,radius:320,dc:'tower',reward:300,
  goal:{ru:'Отвези Хану к Токийской башне и набери 800 очков заносом в неоне',en:'Drive Hana to Tokyo Tower and score 800 drift points in the neon'},
  why:{ru:'Заказ для канала Ханы: деньги на второй взнос. Ну и Хана.',en:'An order for Hana’s channel: money for the second payment. And, well, Hana.'},
  pre:[D('hana','Наставница, значит. С серебряными волосами.','A teacher, huh. With silver hair.'),
       D('lyokha','Она учит меня ездить.','She’s teaching me to drive.'),D('hana','Ну-ну. Поехали, ученик.','Sure. Let’s go, student.')],
  arrive:[D('hana','Неон, башня, ты. Дай мне 800 очков заносом — и ни одного стоп-кадра со скучным лицом.','Neon, the Tower, you. Give me 800 drift points — and not one frame of a bored face.')],
  post:[D('hana','Красиво… Получилось красиво.','Beautiful… It came out beautiful.'),
        D('lyokha','Это свидание?','Is this a date?'),D('hana','Это… стоп. Кто это так светит фарами?','It’s… wait. Who’s flashing their lights like that?')]},
 {id:'c6',ch:2,title:{ru:'Подрезали',en:'Cut off'},at:'tower',auto:true,type:'chase',limit:60,reward:350,
  goal:{ru:'Оторвись от Рин Мори за минуту',en:'Shake off Rin Mori within a minute'},
  why:{ru:'Рин хочет, чтобы Рэйко закрыла раменную. И начала с тебя.',en:'Rin wants Reiko to close the ramen shop. And she’s starting with you.'},
  pre:[D('rin','Это ты тот ёппарай, что крутится у раменной? Передай старухе: перевал теперь наш.','You’re that yopparai hanging around the ramen shop? Tell the old woman: the pass is ours now.'),
       D('lyokha','Она не старуха.','She’s not old.'),D('rin','Догоню — поговорим по-другому.','When I catch you, we’ll talk differently.'),
       D('hana','Лёха… газу!','Lyokha… step on it!')],
  post:[D('hana','Оторвались… Это Рин Мори. Сёстры Мори гоняют на Акаги.','We lost her… That’s Rin Mori. The Mori sisters race on Akagi.'),
        D('hana','Говорят, им платят, чтобы Рэйко закрыла раменную.','They say someone pays them to make Reiko close the ramen shop.'),
        D('lyokha','Кто платит?','Who pays?'),D('hana','Угадай. Фамилия на «Ка». Расскажи Рэйко.','Guess. The surname starts with “Ka”. Tell Reiko.')]},
 {id:'c7',ch:2,title:{ru:'Кофе и рекорд',en:'Coffee and a record'},at:'ramen',type:'tt',zone:'tg0',course:true,reward:400,
  goal:{ru:'Побей рекорд Сидзуки на перевале Акаги',en:'Beat Shizuka’s record on the Akagi pass'},
  why:{ru:'Сидзука обещала оставить раменную в покое, если её рекорд падёт.',en:'Shizuka promised to leave the ramen shop alone if her record falls.'},
  pre:[D('shizuka','Сидзука Мори. Рин погорячилась. Давай по-честному.','Shizuka Mori. Rin got carried away. Let’s do this fairly.'),
       D('shizuka','Побьёшь мой рекорд на Акаги — мы оставим раменную в покое. Не побьёшь — Рэйко закрывается.','Beat my record on Akagi and we leave the ramen shop alone. If you don’t, Reiko closes.'),
       D('reiko','Не ведись.','Don’t take the bait.'),D('lyokha','Уже повёлся.','Already did.')],
  post:[D('shizuka','…Ты проехал не так, как я считала. Ни одной одинаковой траектории.','…You didn’t drive the way I calculated. Not one trajectory the same.'),
        D('shizuka','Хорошо. Последний разговор — гонка. Мы с Рин против тебя. Ночью, здесь.','Fine. One last talk — a race. Rin and me against you. Tonight, here.'),
        D('reiko','Перед гонкой съезди к Сэнсо-дзи. Монах кое-что хранит для тебя. Миша оставлял записки.','Before the race, go to Senso-ji. The monk is keeping something for you. Misha left notes.')]},
 {id:'c8',ch:2,title:{ru:'Записка №1',en:'Note #1'},at:'ramen',type:'deliv',stops:['sensoji'],reward:0,
  goal:{ru:'Забери у монаха Сэнсо-дзи первую записку Миши',en:'Collect Misha’s first note from the Senso-ji monk'},
  why:{ru:'Монах, у которого Миша ставил свечу «за ту ночь на Кумо», что-то для тебя хранит.',en:'The monk where Misha lit candles “for that night on Kumo” is keeping something for you.'},
  pre:[D('lyokha','Записки… Дядь Миш, ты и тут всё продумал.','Notes… Uncle Misha, you planned everything.',LYO_T)],
  post:[D('monk','Ты спрашивал про Кумо. Миша просил отдать это тому, кто спросит.','You asked about Kumo. Misha asked me to give this to whoever asked.'),
        D('misha','«Лёха. Если читаешь, ты уже ездишь как я — то есть криво. Это хорошо.»','“Lyokha. If you’re reading this, you already drive like me — crooked. That’s good.”',NOTE),
        D('misha','«Записок несколько. Первое правило простое: никогда не езди по чужой линии.»','“There are several notes. The first rule is simple: never drive someone else’s line.”',NOTE),
        D('misha','«P.S. Сёстры Мори быстрые. Но Рин всегда толкается на последней шпильке. Не подставляй ей бок.»','“P.S. The Mori sisters are fast. But Rin always shoves on the last hairpin. Don’t give her your side.”',NOTE),
        D('lyokha','Он знал про сестёр… Он знал, что я сюда доеду.','He knew about the sisters… He knew I’d get here.',LYO_T)]},
 {id:'c9',ch:2,title:{ru:'Сёстры Мори',en:'The Mori sisters'},at:'ramen',type:'race',zone:'tg0',boss:'rin',reward:2500,
  goal:{ru:'Обгони Рин и Сидзуку на перевале Акаги и финишируй первым',en:'Beat Rin and Shizuka on the Akagi pass and finish first'},
  why:{ru:'Победа — и перевал, и раменная остаются за Рэйко. И ключ.',en:'Win, and the pass and the ramen shop stay Reiko’s. And the key.'},
  pre:[D('rin','Ну что, ёппарай. Вдвоём на одного — честно?','Well, yopparai. Two against one — fair?'),
       D('shizuka','Финиш — у верхней площадки. Первый доехавший забирает перевал.','The finish is at the upper lookout. Whoever gets there first takes the pass.'),
       D('reiko','Пьяную линию не прочитает никто. Езжай своей.','Nobody can read a drunk line. Drive your own.')],
  post:[D('shizuka','Я не смогла посчитать твою траекторию. Ни разу.','I couldn’t calculate your trajectory. Not once.'),
        D('rin','…Ладно. Перевал ваш. Пока.','…Fine. The pass is yours. For now.'),
        D('shizuka','И ещё. У «Теней» телеметрия. Они не ездят — они повторяют. Тебя им не повторить.','One more thing. The Shadows use telemetry. They don’t drive, they repeat. They can’t repeat you.'),
        D('reiko','Держи ключ. Миша сказал бы, что ты готов. Я скажу — почти.','Here’s the key. Misha would say you’re ready. I’ll say — almost.'),
        D('reiko','Ячейка в «Сакура-Траст». И не забудь про второй взнос.','The box is at Sakura Trust. And don’t forget the second payment.')],
  fail:[D('rin','Перевал наш, ёппарай. Приходи ещё — посмеёмся.','The pass is ours, yopparai. Come again — we’ll have a laugh.')]},
 {id:'c10',ch:2,title:{ru:'Второй взнос',en:'Second payment'},at:'bank',type:'pay',amount:3000,reward:0,
  goal:{ru:'Внеси второй взнос — 3 000 ¥ — и открой ячейку Миши',en:'Make the second payment — 3,000 ¥ — and open Misha’s box'},
  why:{ru:'Ключ у тебя. И мастерская всё ещё в залоге.',en:'You have the key. And the garage is still mortgaged.'},
  short:[D('okada','Три тысячи, Алексей-сан. Не хватает? Ячейка подождёт. А господин Кагэяма — нет.','Three thousand, Alexei-san. Not enough? The box can wait. Mr. Kageyama can’t.'),
         D('lyokha','Подкалымлю на заездах и вернусь.','I’ll earn a bit on the runs and come back.',LYO_T)],
  pre:[D('okada','Три тысячи… Вы меня удивляете, Алексей-сан. Осталось двадцать пять.','Three thousand… You surprise me, Alexei-san. Twenty-five left.'),
       D('okada','Ключ? Прошу. Ячейка номер двенадцать.','The key? Please. Box number twelve.'),
       D('lyokha','Шлем с наклейкой «Кумо»… кассета «12 лет назад»… и фото. Человек со шрамом через всё лицо.','A helmet with a “Kumo” sticker… a tape “12 years ago”… and a photo. A man with a scar across his face.',LYO_T),
       D('okada','Я… ничего не видел, Алексей-сан. Совсем ничего.','I… saw nothing, Alexei-san. Nothing at all.'),
       D('kir','Лёха! Это Кир! Я в Токио — паром из Владика пришёл в порт. Встречай!','Lyokha! It’s Kir! I’m in Tokyo — the ferry from Vladik just docked at the port. Come get me!',PH_K),
       D('lyokha','Кир?! Вот теперь начнётся.','Kir?! Now it begins.')],
  post:[], chapterEnd:2, next:{ru:'Встреть Кира в порту',en:'Meet Kir at the port'}}
);

// ---- state
if(!S.story||typeof S.story!=='object')S.story={m:0,started:0,debt:30000,v:2,hi:0};
(function(){var o=S.story;if((o.v|0)>=2)return;var m=o.m|0,mi=STORY.length;for(var i=m;i<STORY_OLD.length;i++){var j=-1;for(var k=0;k<STORY.length;k++)if(STORY[k].id===STORY_OLD[i])j=k;if(j>=0&&j<mi)mi=j}
 if(m>=STORY_OLD.length)mi=STORY_OLD.length;o.m=mi;o.hi=Math.max(o.hi|0,mi);o.v=2})();
var ST={mode:false,act:null,ride:false,arr:false,t:0,prog:0,hits:0,stop:0,routed:'',lastOk:false,gen:0,photo:0,prompt:false,end:null};
function stCur(){return STORY[S.story.m|0]||null}
// story branches: missions marked only:'x' are played only when that choice was made
function stNextIdx(i){while(STORY[i]&&(STORY[i].only&&STORY[i].only!==S.story.pick||STORY[i].req&&(S.story.f||{})[STORY[i].req[0]]!==STORY[i].req[1]))i++;return i}
function stRivName(m){return m&&m.rival==='ryu'?'Рю':'Гэн'}
function chLbl(n){return S.lang==='en'?'Chapter '+n:S.lang==='zh'?'第'+n+'章':'Глава '+n}
function chDone(n){return S.lang==='en'?'Chapter '+n+' complete':S.lang==='zh'?'第'+n+'章完成':'Глава '+n+' пройдена'}
function stCh(){var c=stCur();return c?c.ch:STORY[STORY.length-1].ch}
function isZR(m){return m&&(m.type==='zone'||m.type==='duel'||m.type==='tandem'||m.type==='race'||m.type==='tt')}
function stPlace(k){var P=stPlaces();return P[k]}
// ---- dialogue box (pauses the game)
var DLG=null;
function dlgOpen(lines,cb){if(!lines||!lines.length){if(cb)cb();return}
 var was=mode;if(mode==='game'){mode='dlg';K.l=K.r=K.t=K.b=K.h=0;SL.on=false;SL.id=null;SL.v=0;slHide();auStop()}
 DLG={l:lines,i:0,cb:cb,was:was,ch:0,tm:0,safe:false};var me0=DLG;requestAnimationFrame(function(){me0.safe=true});$('dlg').style.display='flex';$('ctl').style.visibility='hidden';document.body.classList.add('dlgon');dlgShow()}
function dlgShow(){var d=DLG,ln=d.l[d.i],who=ln[0],me=who==='lyokha',e=$('dlg');e.className=me?'me':'';
 var im=e.querySelector('img'),nm=ln[3]||WHO[who];im.src=PORT[who]||'';im.style.visibility=PORT[who]?'':'hidden';e.querySelector('.dnm').textContent=nm?TR(nm[0],nm[1]):who;
 d.txt=TR(ln[1],ln[2]);d.ch=0;clearInterval(d.tm);var p=e.querySelector('.dln');p.textContent='';
 d.tm=setInterval(function(){d.ch+=2;p.textContent=d.txt.slice(0,d.ch);if(d.ch>=d.txt.length){clearInterval(d.tm);d.tm=0}},28)}
function dlgNext(skip){var d=DLG;if(!d)return;
 if(d.tm&&!skip){clearInterval(d.tm);d.tm=0;d.ch=d.txt.length;$('dlg').querySelector('.dln').textContent=d.txt;return}
 d.i++;if(!skip&&d.i<d.l.length){dlgShow();return}
 clearInterval(d.tm);DLG=null;$('dlg').style.display='none';$('ctl').style.visibility='';document.body.classList.remove('dlgon');
 if(mode==='dlg'){mode='game';applyCtl();if(S.snd)auStart();last=performance.now();if(d.safe)requestAnimationFrame(loop)}
 if(d.cb)d.cb()}
// ---- chapter title card
function chapterCard(top,title,sub,cb){var e=$('chap');e.innerHTML='<div class="cc1">'+top+'</div><div class="cc2">'+title+'</div><div class="cc3">'+sub+'</div>';e.style.display='flex';e.className='';void e.offsetWidth;e.className='on';
 var done=false;function fin(){if(done)return;done=true;e.style.display='none';e.onclick=null;if(cb)cb()}e.onclick=fin;setTimeout(fin,3200)}
// ---- start / finish
// "again": back to where the mission starts (if you are not there already), so it runs from its first point
function stRetryPlace(c){try{var p=stPlace(c.at);if(!p||Math.hypot(wd(p.x,car.x),wd(p.y,car.y))<150)return;stPlaceCar(c.at);car.vx=car.vy=car.w=0;car.dr=false;car.l=0;cam.x=car.x;cam.y=car.y;preload();WP=null}catch(e){}}
function stPlaceCar(k){var p=stPlace(k),q=p.a!=null?null:gpsNear(p.x,p.y,300,true);if(p.a!=null){car.x=p.x;car.y=p.y;car.a=p.a}else if(q){q.r.pt(q.s,TMP);var u=q.r.k==='loc'?q.r.hw*.42:(q.r.m||0)+.5*(q.r.lw||20);car.x=wrap(TMP[0]+TMP[3]*u);car.y=wrap(TMP[1]-TMP[2]*u);car.a=Math.atan2(TMP[3],TMP[2])}else{car.x=p.x;car.y=p.y}
 car.vx=car.vy=car.w=0;car.sp=0;car.l=0;car.dr=false;cam.x=car.x;cam.y=car.y;cam.a=car.a;preload()}
function stRoute(x,y){var q=gpsNear(x,y,90)||gpsNear(x,y,200,true)||gpsNear(x,y,600);if(!q)return;WP={x:x,y:y,q:q,st:1};ST.rt=TIME;gpsRoute()}
function storyBegin(){ST.mode=true;
 if(!S.story.started){S.story.started=1;S.story.m=0;save();menuLeave();
  chapterCard(chLbl(1),LT(CHAP[1].t),LT(CHAP[1].tod),function(){startGame(false);stPlaceCar('station');setTimeout(function(){stStart(stCur())},350)})}
 else{menuLeave();$('game').style.display='none';$('gar').style.display='block';renderGar();window.scrollTo(0,0)}}
function stStart(m,quick){if(!m||ST.act)return;if(m.type==='pay'&&S.coins<m.amount){stPromptHide();dlgOpen(m.short||[],function(){toast(L('Нужно')+' '+fmtN(m.amount)+' ¥ · '+L('есть')+' '+fmtN(Math.floor(S.coins))+' ¥')});return}ST.act=m;ST.ride=false;ST.arr=false;ST.close=0;ST.tot=0;ST.touch=0;ST.fail='';ST.t=0;ST.prog=0;ST.gt=0;ST.hits=0;ST.stop=0;ST.gen=0;ST.photo=0;ST.end=null;stPromptHide();
 dlgOpen(quick?[]:m.pre,function(){
  if(m.type==='scene'){stDone(true);return}
  if(m.type==='pay'){if(S.coins>=m.amount){S.coins-=m.amount;S.story.debt-=m.amount;save();stDone(true)}else{ST.act=null;toast(L('Нужно')+' '+m.amount+' ¥');return}return}
  // a retry starts from the beginning too: first the drive to the start point (it used to skip it and send you straight to the next point)
  ST.quick=!!quick;if(m.ride){ST.ride=true;var rp=stPlace(m.ride);stRoute(rp.x,rp.y);return}
  stMain(m)})}
function stMain(m){ST.t=0;ST.ride=false;ST.close=0;ST.tot=0;ST.touch=0;ST.tcd=0;ST.far=0;ST.fail='';ST.sv=null;ST.esc=0;ST.hid=0;ST.pin=0;ST.rams=0;
 if(m.type==='deliv'){var s=stPlace(m.stops[0]);stRoute(s.x,s.y)}
 if(m.type==='chase'){WP=null;stSpawnRin()}
 if(m.type==='save'){WP=null;var pz=stZone(m.zone),pp=stPlace(m.at);if(pz&&!stOnPad(m)&&pp){var gq=pp.g||pp;stRoute(gq.x,gq.y)}}
 if(isZR(m)){var z=stZone(m.zone);if(!z){ST.act=null;return}zonePlace(z);if(m.type==='duel')stSpawnGen(z);if(m.type==='tandem')stSpawnReiko(z);if(m.type==='race')stSpawnSisters(z);if(m.type==='tt')m.rec=stRec(z)}}
// ---- rivals on a course: a path along the pass in a given lane
function stCoursePath(z,u,a,b){var r=z.road,pts=[];for(var s=a;s<=b;s+=18){r.pt(zcs(r,s),TMP);pts.push([TMP[0]-TMP[3]*u,TMP[1]+TMP[2]*u])}return pts}
function stRivCourse(z,o){var r=z.road;r.pt(zcs(r,o.s),TMP);var R=rivMake({id:o.id,name:o.name,tag:o.tag,car:o.car,col:o.col,str:o.str,glow:o.glow||0,x:TMP[0]-TMP[3]*o.u,y:TMP[1]+TMP[2]*o.u,a:Math.atan2(TMP[3],TMP[2]),pts:stCoursePath(z,o.u,o.s,z.s1+300),loop:false,vmax:o.vmax,wait:true,drift:o.drift==null?1:o.drift});R.s0=o.s;R.base=o.vmax;R.sk=R.sk0=o.sk||.75;return R}
function stRoadS(R){return R.s0+R.P}
function stSpawnReiko(z){var u=laneU(z.road,1,0);stRivCourse(z,{id:'reiko',name:'Рэйко',tag:'#e8ecf4',car:2,col:0,str:1,s:z.s0+95,u:u,vmax:300,sk:.7})}
function stSpawnSisters(z){var u=laneU(z.road,1,0);stRivCourse(z,{id:'shizuka',name:'Сидзука',tag:'#b06aff',car:2,col:5,str:2,glow:5,s:z.s0+55,u:u,vmax:400,sk:STRACE.sh});stRivCourse(z,{id:'rin',name:'Рин',tag:'#ff4d6d',car:1,col:1,str:1,glow:1,s:z.s0+8,u:-u,vmax:400,sk:STRACE.rin})}
var STRACE={sh:.6,rin:.58,rec:138};
function stRec(z){return Math.round((z.s1-z.s0)/STRACE.rec*10)/10}
// ---- chase: Rin follows exactly the road you drove (your trail), so she never cuts through buildings
function stSpawnRin(){var q=gpsNear(car.x,car.y,80),pts=[],k,s;
 if(q&&q.r){var r=q.r;r.pt(q.s,TMP);var dir=(Math.cos(car.a)*TMP[2]+Math.sin(car.a)*TMP[3])>=0?1:-1,u=r.k==='loc'?0:laneU(r,dir,0);
  for(k=9;k>=1;k--){s=q.s-dir*k*22;if(r.closed||r.per)s=((s%r.len)+r.len)%r.len;else if(s<0||s>r.len)continue;r.pt(s,TMP);pts.push([TMP[0]-TMP[3]*u,TMP[1]+TMP[2]*u])}}
 if(pts.length<3){pts=[];for(k=9;k>=1;k--)pts.push([car.x-Math.cos(car.a)*k*22,car.y-Math.sin(car.a)*k*22])}
 pts.push([car.x,car.y]);var p0=pts[0],p1=pts[1];rivMake({id:'rin',name:'Рин',tag:'#ff4d6d',car:1,col:1,str:1,glow:1,x:p0[0],y:p0[1],a:Math.atan2(wd(p1[1],p0[1]),wd(p1[0],p0[0])),pts:pts,loop:false,vmax:300,wait:false,drift:1});ST.trail={x:car.x,y:car.y}}
function stTrail(R){var dx=wd(car.x,ST.trail.x),dy=wd(car.y,ST.trail.y),d=Math.hypot(dx,dy);if(d<18)return;var lp=R.pts[R.pts.length-1];R.pts.push([lp[0]+wd(car.x,lp[0]),lp[1]+wd(car.y,lp[1])]);R.cum.push(R.cum[R.cum.length-1]+Math.hypot(wd(car.x,lp[0]),wd(car.y,lp[1])));R.L=R.cum[R.cum.length-1];ST.trail={x:car.x,y:car.y};
 if(R.pi>160){var n=120,off=R.cum[n];R.pts.splice(0,n);R.cum.splice(0,n);for(var i=0;i<R.cum.length;i++)R.cum[i]-=off;R.L-=off;R.P-=off;R.pi-=n}}
function stStopLines(m,k){var sl=m.stopLines&&m.stopLines[k];return typeof sl==='function'?sl({hits:ST.hits}):sl}
var SAVE_DEEP=.47;
function stGoalCur(m){if(m.type==='drift'){if(ST.ride||ST.arr)return -1;var dp=stPlaces()[m.dc||m.at];return ST.prog+(Math.hypot(wd(dp.x,car.x),wd(dp.y,car.y))<m.radius?run.pend:0)}
 if(ZS&&ZS.z.id===m.zone&&(!ZS.ph||ZS.ph==='go'))return ZS.score+(ZS.z.line?0:run.pend);return -1}
function stTarget(){var P=stPlaces(),m=ST.act,c=stCur();if(!ST.mode)return null;if(!m)return c?P[c.at]:null;if(ST.ride)return P[m.ride];if(m.type==='deliv')return P[m.stops[ST.stop]];if(m.type==='drift')return P[m.dc||m.at];if(m.type==='save'&&ST.out)return P[m.at];return null}
function stDone(ok,why){var m=ST.act;if(!m)return;ST.act=null;ST.ride=false;ST.arr=false;AICAP.g=62;AICAP.e=12;ST.lastOk=ok;rivClear();
 if(!ok){ST.routed='';WP=null;var ft=L('Не вышло')+(why?': '+L(why):'');if(m.fail&&m.fail.length)dlgOpen(m.fail,function(){toast(ft)});else toast(ft);return}
 var rw=m.reward||0,idx=S.story.m|0;if(m.fragile)rw=Math.max(0,Math.round(rw*(1-.25*ST.hits)));if(idx<(S.story.hi|0))rw=0;
 if(rw){S.coins+=rw;popup('+'+rw+' ¥','big')}
 var nxi=stNextIdx(idx+1);S.story.m=nxi;S.story.hi=Math.max(S.story.hi|0,nxi);save();ST.routed='';WP=null;
 var post=typeof m.post==='function'?m.post({hits:ST.hits}):m.post,sl=m.stops&&stStopLines(m,m.stops[m.stops.length-1]);if(sl)post=sl.concat(post||[]);if(m.work){car.vx=car.vy=car.w=0;car.dr=false}
 ST.talk=1;setTimeout(function(){ST.talk=0;if(m.zone)$('res').style.display='none';var talk=function(){(m.scene&&typeof ixStory==='function'?function(l,c){ixStory(m.scene,l,c)}:dlgOpen)(post,function(){
  if(m.chapterEnd){var ce=m.chapterEnd,n2=CHAP[ce+1];chapterCard(chDone(ce),LT(CHAP[ce].t),L('Дальше')+': '+LT(m.next),function(){var nx=stCur();chapterCard(chLbl(ce+1),LT(n2.t),nx?LT(n2.tod):L('скоро'),function(){if(nx&&nx.auto&&!ST.act)stStart(nx)})});return}
  var n=stCur();if(n&&n.auto)stStart(n)})};if(m.work)chapterCard(L('Мастерская'),LT(m.work),'',talk);else talk()},m.type==='zone'||m.type==='duel'?1400:300)}
// ---- boss: Gen drifts around the Scramble
function stSpawnGen(z){var R=clamp(z.r*.5,55,100),pts=[];for(var i=0;i<36;i++){var a=-i/36*TAU;pts.push([z.x+Math.cos(a)*R,z.y+Math.sin(a)*R])}
 var st=zoneStart(z),g=rivMake({id:'gen',name:'Гэн',tag:'#ffd23a',car:2,col:6,str:0,glow:1,x:z.x+R,y:z.y,a:-Math.PI/2,pts:pts,loop:true,vmax:230,wait:true});ST.gen=0;ST.photo=0}
// ---- quiet streets during a mission: few cars, none parked on the target
function stTraffic(t,cap){AICAP.g=cap||14;AICAP.e=3;if(FRAME%20)return;var ng=0;
 for(var i=0;i<AI.length;i++){var a=AI[i];if(a.fd||a.l)continue;if(t&&Math.hypot(wd(a.x,t.x),wd(a.y,t.y))<170){a.fd=1;continue}if(++ng>AICAP.g+2)a.fd=1}}
// ---- per-frame
function stUpdate(dt){if(!ST.mode)return;var m=ST.act,P=stPlaces();
 if(!m){var c=stCur(),gq=P.garage,gd=Math.hypot(wd(gq.x,car.x),wd(gq.y,car.y)),cp=c&&P[c.at],nearC=cp&&Math.hypot(wd(cp.x,car.x),wd(cp.y,car.y))<70;
  if(gd<55&&car.sp<90&&!ZS&&!ZFADE&&!nearC&&typeof stGarPrompt==='function'){stGarPrompt();return}if(ST.prompt==='garage')stPromptHide();
  if(!c)return;var p=P[c.at];if(!p)return;var d=Math.hypot(wd(p.x,car.x),wd(p.y,car.y));
  if(c.auto&&!ZS&&!ZFADE&&!ST.talk&&!DLG&&ST.autoT!==c.id){ST.autoT=c.id;setTimeout(function(){if(!ST.act&&stCur()===c&&mode==='game'&&!DLG&&!ST.talk)stStart(c);else ST.autoT=null},1200)}
  if(ST.routed!==c.id&&!WP&&d>120){ST.routed=c.id;var gp=p.g||p;stRoute(gp.x,gp.y)}
  if(d<320)stTraffic(p,6);else if(AICAP.g!==62){AICAP.g=62;AICAP.e=12}
  if((d<70||(!c.ride&&stInZone(c)))&&!ZS&&!ZFADE)stPromptShow(c);else stPromptHide();return}
 if(ST.ride){var rp=P[m.ride],rd=Math.hypot(wd(rp.x,car.x),wd(rp.y,car.y));stTraffic(rp,0);
  if(rd<62||stInZoneId(m.rideZone||m.zone)){ST.ride=false;ST.arr=true;WP=null;car.vx*=.15;car.vy*=.15;car.w=0;car.dr=false;popup(LT(rp.name)+' ✓','mul');
   dlgOpen(ST.quick?[]:m.arrive||[],function(){ST.arr=false;if(ST.act===m)stMain(m)});return}
  if((!WP||!WP.pts)&&rd>80&&TIME-(ST.rt||0)>1.5)stRoute(rp.x,rp.y);return}
 if(ST.arr)return;
 if(isZR(m)&&!ZS&&!ZFADE){stAbort();return}
 ST.t+=dt;stTraffic(ZS?{x:ZS.z.x,y:ZS.z.y}:(stTarget()||P[m.at]),0);
 if(m.type==='deliv'){var s=P[m.stops[ST.stop]],sd=Math.hypot(wd(s.x,car.x),wd(s.y,car.y));if(sd<62){ST.stop++;if(ST.stop>=m.stops.length){stDone(true);return}popup(LT(s.name)+' ✓','mul');var s2=P[m.stops[ST.stop]];stRoute(s2.x,s2.y);var sl=stStopLines(m,m.stops[ST.stop-1]);if(sl){car.vx*=.15;car.vy*=.15;car.w=0;car.dr=false;dlgOpen(sl,null);return}}
  else if((!WP||!WP.pts)&&sd>80&&TIME-(ST.rt||0)>1.5)stRoute(s.x,s.y);
  if(m.limit&&ST.stop<(m.limitN||m.stops.length)&&ST.t>m.limit){WP=null;stDone(false,'время вышло')}}
 // point goals: finish one second after the target is reached (the running combo counts), not when the car stops sliding
 if(m.goalPts&&(m.type==='drift'||(m.type==='zone'&&!m.course))){var gc=stGoalCur(m);
  if(gc>=m.goalPts){if(!ST.gt){ST.gt=1e-6;flash(L('цель!'),1);if(S.snd)try{auBell()}catch(e){}}ST.gt+=dt;if(ST.gt>=1){ST.gt=0;if(m.type==='drift'){bank();if(ST.act===m)stDone(true)}else if(ZS)zoneEnd('time');return}}
  else ST.gt=0}
 if(m.type==='drift'&&ST.prog>=m.goalPts)stDone(true);
 if(stKinds(m,dt))return;
 if(m.type==='duel'&&ZS&&ZS.z.id===m.zone){var g=RIV[0];if(g){g.wait=ZS.ph!=='go'}
  if(ZS.ph==='go'){var el=ZS.z.T-ZS.t;ST.gen+=dt*(g&&g.d?66:50)*(1+.15*Math.sin(el*.7))*(m.rate||1);
   var ph=Math.floor(el/10);if(ph>ST.photo&&el<44){ST.photo=ph;stFlash();var near=g&&Math.hypot(wd(g.x,car.x),wd(g.y,car.y))<80&&car.l===g.l;if(near){ZS.score+=400;popup(L(m.rival==='ryu'?'кадр с Рю':'кадр с Гэном')+' +400','big')}else flash(L(m.rival==='ryu'?'кадр! ты далеко от Рю':'кадр! ты далеко от Гэна'),1.2)}}}
 rivUpdate(dt)}
// lesson 2, tandem, race, chase
function stKinds(m,dt){
 if(m.type==='save'){var z=stZone(m.zone),inn=stOnPad(m);ST.out=!inn;if(!inn){ST.t-=dt;var pp=stPlace(m.at),gq=pp.g||pp;if(!WP&&TIME-(ST.rt||0)>3&&Math.hypot(wd(gq.x,car.x),wd(gq.y,car.y))>120)stRoute(gq.x,gq.y)}else if(WP&&WP.st)WP=null;var ang=Math.abs(angd(Math.atan2(car.vy,car.vx),car.a)),sp=car.sp;
  // 'almost spun': a deep slide of 32°+ (the drift model tops out near 45° on full lock); then straighten up within 2.6 s
  if(inn&&sp>60&&ang>SAVE_DEEP&&ang<2.3){if(!ST.sv){ST.sv={t:0};flash(L('Лови!'),.9)}ST.sv.t=0}
  else if(ST.sv){ST.sv.t+=dt;if(ang>=2.3||sp<20){ST.sv=null;flash(L('развернуло'),1)}else if(ang<.3&&sp>45){ST.sv=null;ST.prog++;popup(L('Поймал!')+' '+ST.prog+'/'+m.need,'big');if(S.snd)try{auBell()}catch(e){}if(ST.prog>=m.need){stDone(true);return true}}else if(ST.sv.t>2.6)ST.sv=null}
  if(ST.t>m.limit){stDone(false,'время вышло');return true}return false}
 if(m.type==='tandem'&&ZS&&ZS.z.id===m.zone){var g=RIV[0];if(!g)return false;g.wait=ZS.ph!=='go';if(ZS.ph!=='go')return false;
  var d=Math.hypot(wd(g.x,car.x),wd(g.y,car.y)),ps=ZS.s,gs=stRoadS(g);ST.tot+=dt;if(d<140&&ps<gs+15)ST.close+=dt;
  g.sk=g.sk0*clamp(1-(d-85)/240,.3,1.2);g.vmax=d>420?30:d>300?110:400;
  ST.tcd-=dt;if(d<(car.hx+g.c.hx)*.85&&car.l===g.l&&ST.tcd<=0){ST.touch++;ST.tcd=.9;flash(L('касание!')+' '+ST.touch+'/3',1);if(ST.touch>=3){ST.fail=m.leader==='rin'?'коснулся машины Рин':'коснулся машины Рэйко';zoneEnd('time');return true}}
  ST.far=d>900?ST.far+dt:0;if(ST.far>6){ST.fail=m.leader==='rin'?'потерял Рин':'потерял Рэйко';zoneEnd('time');return true}return false}
 if(m.type==='race'&&ZS&&ZS.z.id===m.zone){var ps2=ZS.s;for(var i=0;i<RIV.length;i++){var R=RIV[i];R.wait=ZS.ph!=='go';if(ZS.ph!=='go')continue;var lead=stRoadS(R)-ps2;
   R.sk=R.sk0*clamp(1-(lead-100)/1000,.6,1.2);if(stRoadS(R)>=ZS.z.s1){ST.fail=(R.id==='rin'?'Рин':'Сидзука')+' первая на финише';zoneEnd('time');return true}}return false}
 if(m.type==='chase'){var R2=RIV[0];if(!R2)return false;var dd=stRinUpdate(R2,dt);
  // escape: 520+ px ahead for 3 s, or out of her sight for 5 s
  ST.esc=dd>520?ST.esc+dt:0;ST.hid=(R2.nolos>0&&dd>260)?(ST.hid||0)+dt:0;
  if(ST.esc>3||ST.hid>5){popup(L('Оторвался!'),'big');stDone(true);return true}
  // pinned: she has you boxed in and you are not moving
  ST.pin=(dd<58&&car.sp<30)?(ST.pin||0)+dt:Math.max(0,(ST.pin||0)-dt*2);if(ST.pin>3){stDone(false,'Рин тебя прижала');return true}
  if(ST.t>m.limit){stDone(false,'Рин не отстала');return true}return false}
 return false}
function stOnPad(m){var z=stZone(m.zone);if(!z||car.l)return false;var sp=z.spec;if(sp){var dx=wd(car.x,sp.x+sp.w/2),dy=wd(car.y,sp.y+sp.h/2);return Math.abs(dx)<sp.w/2-4&&Math.abs(dy)<sp.h/2-4}return Math.hypot(wd(z.x,car.x),wd(z.y,car.y))<z.r+40}
function stInZone(c){return stInZoneId(c.zone)}
function stInZoneId(id){if(!id)return false;var z=stZone(id);if(!z||z.l!==car.l)return false;var d=Math.hypot(wd(z.x,car.x),wd(z.y,car.y));return d<(z.k==='course'?z.r:z.r+30)}
function stAbort(){if(!ST.act)return;ST.act=null;ST.ride=false;ST.arr=false;rivClear();AICAP.g=62;AICAP.e=12;ST.routed='';stPromptHide();toast(L('Миссия прервана'))}
function stFlash(){var f=$('fade');f.style.transition='none';f.style.background='#fff';f.classList.add('on');setTimeout(function(){f.style.transition='';f.classList.remove('on');setTimeout(function(){f.style.background=''},300)},60)}
// ---- prompt near a mission start
function stPromptShow(c){if(ST.prompt===c.id)return;ST.prompt=c.id;var e=$('sq');
 e.innerHTML='<div class="zk">'+L('СЮЖЕТ')+' · '+chLbl(c.ch)+'</div><div class="zn">'+stEsc(LT(c.title))+'</div>'+(c.why?'<div class="zw">'+stEsc(LT(c.why))+'</div>':'')+'<div class="zi">'+stEsc(LT(c.goal))+'</div>'+(c.reward&&(S.story.m|0)>=(S.story.hi|0)?'<div class="zi">'+L('награда')+' <b>+'+c.reward+' ¥</b></div>':'')+'<div class="zbt"><button data-st="go">'+L('Начать')+'</button></div>';e.classList.add('on')}
function stPromptHide(){if(!ST.prompt)return;ST.prompt=false;$('sq').classList.remove('on')}
function stEsc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
document.addEventListener('click',function(e){var b=e.target.closest('[data-st]');if(!b)return;if(b.dataset.st==='go'){var c=stCur();if(c)stStart(c)}
 if(b.dataset.st==='retry'){$('res').style.display='none';var c2=stCur();if(c2&&!ST.act&&mode==='game'){stRetryPlace(c2);stStart(c2,true)}}
 if(b.dataset.st==='reset'){if(!b.dataset.sure){b.dataset.sure=1;b.textContent=L('точно?');setTimeout(function(){if(b.isConnected){delete b.dataset.sure;b.textContent=L('заново')}},2500);return}
  if(S.story.debt<30000){S.coins+=30000-S.story.debt;S.story.debt=30000}S.story.m=0;S.story.started=1;S.story.f={};ST.act=null;ST.routed='';save();
  chapterCard(chLbl(1),LT(CHAP[1].t),LT(CHAP[1].tod),function(){startGame(false);stPlaceCar('station');setTimeout(function(){stStart(stCur())},350)})}});
document.addEventListener('pointerdown',function(e){if(!DLG)return;if(e.target.closest('.dskip')){e.preventDefault();dlgNext(true);return}if(e.target.closest('#dlg')){e.preventDefault();dlgNext(false)}});
// ---- objective HUD
function stHud(){var e=$('sobj');if(!e)return;var m=ST.act;if(!ST.mode||mode!=='game'){e.style.display='none';return}var P=stPlaces(),t='',bar=-1;
 if(!m){var c=stCur(),p=c&&P[c.at];if(!c||!p||ST.prompt||ZS){e.style.display='none';return}e.style.display='block';
  if(FRAME%15&&e.dataset.k===c.id)return;e.dataset.k=c.id;var dn=Math.round(Math.hypot(wd(p.x,car.x),wd(p.y,car.y))/4);
  e.className='idle';e.innerHTML='<b>'+L('Дальше')+' · '+stEsc(LT(c.title))+'</b><span>'+stEsc(LT(p.name))+' · '+dn+' '+L('м')+'</span>'+(c.why?'<em>'+stEsc(LT(c.why))+'</em>':'');return}
 e.style.display='block';e.className='';e.dataset.k='';
 if(ST.ride){var rp=P[m.ride];t=L('Хана в машине')+' · '+LT(rp.name)+' · '+Math.round(Math.hypot(wd(rp.x,car.x),wd(rp.y,car.y))/4)+' '+L('м')}
 else if(m.type==='deliv'){var s=P[m.stops[ST.stop]],d=Math.round(Math.hypot(wd(s.x,car.x),wd(s.y,car.y))/4);t=LT(s.name)+' · '+d+' '+L('м')+(m.stops.length>1?' · '+(ST.stop+1)+'/'+m.stops.length:'');
  if(m.limit&&ST.stop<(m.limitN||m.stops.length)){var left=Math.max(0,Math.ceil(m.limit-ST.t));t+=' · '+Math.floor(left/60)+':'+(left%60<10?'0':'')+left%60}if(m.fragile&&ST.stop>=(m.fragileFrom==null?1:m.fragileFrom))t+=' · '+L('удары')+': '+ST.hits}
 else if(m.type==='drift'){var dp=P[m.dc||m.at],dd=Math.hypot(wd(dp.x,car.x),wd(dp.y,car.y));t=Math.min(m.goalPts,Math.floor(ST.prog+(dd<m.radius?run.pend:0)))+' / '+m.goalPts+(dd>m.radius?' · '+L('вернись к метке'):'');bar=Math.min(1,(ST.prog+(dd<m.radius?run.pend:0))/m.goalPts)}
 else if(m.type==='save'){var lf=Math.max(0,Math.ceil(m.limit-ST.t));t=ST.out?L('заедь на площадку')+' · '+Math.round(Math.hypot(wd(P[m.at].x,car.x),wd(P[m.at].y,car.y))/4)+' '+L('м'):L('поймал')+' '+ST.prog+'/'+m.need+' · '+(ST.sv?L('лови — выровняй!'):L('занос')+' '+(car.sp>30&&car.fw>0?Math.round(Math.abs(angd(Math.atan2(car.vy,car.vx),car.a))*57.3):0)+'°/'+Math.round(SAVE_DEEP*57.3)+'°')+' · '+lf+' '+L('с');bar=ST.prog/m.need}
 else if(m.type==='tandem'&&RIV[0]){var g2=RIV[0];t=L(m.leader==='rin'?'Рин':'Рэйко')+' '+Math.round(Math.hypot(wd(g2.x,car.x),wd(g2.y,car.y))/4)+' '+L('м')+' · '+L('хвост')+' '+Math.round(ST.tot?ST.close/ST.tot*100:0)+'% · '+ST.touch+'/3';bar=ST.tot?ST.close/ST.tot:0}
 else if(m.type==='race'&&ZS){var pos=1;RIV.forEach(function(R){if(stRoadS(R)>ZS.s)pos++});t=L('место')+' '+pos+'/3 · '+L('до финиша')+' '+Math.max(0,Math.round((ZS.z.s1-ZS.s)/4))+' '+L('м');bar=clamp((ZS.s-ZS.z.s0)/(ZS.z.s1-ZS.z.s0),0,1)}
 else if(m.type==='chase'&&RIV[0]){var R3=RIV[0];t=L('Рин')+' '+Math.round(Math.hypot(wd(R3.x,car.x),wd(R3.y,car.y))/4)+' '+L('м')+(ST.hid>0?' · '+L('потеряла тебя'):R3.atk?' · '+L('идёт на таран!'):'')+' · '+Math.max(0,Math.ceil(m.limit-ST.t))+' '+L('с');bar=clamp(Math.max(ST.esc/3,(ST.hid||0)/5),0,1)}
 else if(m.type==='tt'&&ZS){t=L('ты')+' '+(ZS.z.T-ZS.t).toFixed(1)+' · '+L('Сидзука')+' '+(m.rec||0).toFixed(1)+' '+L('с')}
 else if(m.type==='duel'){t=L(stRivName(m))+': '+fmtN(ST.gen)+'  ·  '+L('ты')+': '+fmtN(ZS?ZS.score+run.pend:0)}
 else if(m.type==='zone'&&ZS){t=m.course?L('доедь до финиша'):L('цель')+': '+fmtN(m.goalPts)}
 e.innerHTML='<b>'+stEsc(LT(m.title))+'</b><span>'+stEsc(t)+'</span>'+(bar>=0?'<i><u style="width:'+Math.round(bar*100)+'%"></u></i>':'')}
// ---- hooks
var _zuSt=zonesUpdate;zonesUpdate=function(dt){stUpdate(dt);if(ST.mode&&ST.act&&!ZS){if(ZP){ZP=null;zPrompt(null)}return}_zuSt(dt);
 if(ST.mode&&!ST.act&&!ZS){var hide=false,c=stCur();if(ZP&&c){var p=stPlaces()[c.at];hide=(!c.ride&&c.zone===ZP.id)||(p&&Math.hypot(wd(p.x,car.x),wd(p.y,car.y))<380)}ST.zh=hide?ZP.id:null;if(ZP){var e=$('zp');if(e.classList.contains('on')===hide)e.classList.toggle('on',!hide)}}else ST.zh=null};
var _zeSt=zoneEnd;zoneEnd=function(why){var z=ZS&&ZS.z;if(ZS)bank();var sc=ZS?Math.floor(ZS.score):0,el=ZS?z.T-ZS.t:0;_zeSt(why);var m=ST.act;if(!m||!z||m.zone!==z.id)return;var ok,rs,ln;
 if(m.type==='duel'){var g=Math.floor(ST.gen);ok=why!=='out'&&sc>g;rs=why==='out'?'выехал из зоны':(m.rival==='ryu'?'Рю набрал больше':'Гэн набрал больше');ln=L(stRivName(m))+' '+fmtN(g)+'  ·  '+L('ты')+' '+fmtN(sc)}
 else if(m.type==='tandem'){var pc=ST.tot>0?ST.close/ST.tot:0;ok=why==='fin'&&!ST.fail&&pc>=.5;rs=ST.fail||(why==='off'?'сошёл с трассы':why!=='fin'?'не успел к финишу':(m.leader==='rin'?'далеко от Рин':'далеко от Рэйко'));ln=L('хвост')+' '+Math.round(pc*100)+'% · '+L('касания')+' '+ST.touch+'/3'}
 else if(m.type==='race'){ok=why==='fin'&&!ST.fail;rs=ST.fail||(why==='off'?'сошёл с трассы':'не успел к финишу');ln=ok?L('первый на финише!'):L(rs)}
 else if(m.type==='tt'){ok=why==='fin'&&el<=m.rec;rs=why!=='fin'?(why==='off'?'сошёл с трассы':'не успел к финишу'):'рекорд Сидзуки устоял';ln=L('ты')+' '+el.toFixed(1)+' '+L('с')+'  ·  '+L('Сидзука')+' '+m.rec.toFixed(1)+' '+L('с')}
 else if(m.course){ok=why==='fin';rs=why==='off'?'сошёл с трассы':'не успел к финишу';ln=ok?L('финиш!'):L(rs)}
 else{ok=why!=='out'&&sc>=m.goalPts;rs=why==='out'?'выехал из зоны':'мало очков';ln=fmtN(sc)+' / '+fmtN(m.goalPts)}
 $('zb').style.display='none';stResult(m,ok,ln);stDone(ok,ok?'':rs)};
function stResult(m,ok,ln){var r=$('res');clearTimeout(r._t);var t=r.querySelector('.rt');if(t)t.innerHTML=stEsc(LT(m.title))+' · <b class="'+(ok?'ok':'no')+'">'+L(ok?'победа!':'не вышло')+'</b>';
 var s=r.querySelector('.rs');if(s)s.insertAdjacentHTML('afterend','<div class="rg">'+stEsc(ln)+'</div>');
 var b=r.querySelector('.rb');if(b)b.innerHTML=ok?'<button data-z="ok">OK</button>':'<button data-st="retry">'+L('Ещё раз')+'</button><button data-z="ok">OK</button>';r.dataset.z=''}
var _bkSt=bank;bank=function(){var p=run&&run.pend>0?Math.floor(run.pend):0;_bkSt();var m=ST.act;if(p&&m&&m.type==='drift'&&!ST.ride&&!ST.arr){var P=stPlaces()[m.dc||m.at];if(Math.hypot(wd(P.x,car.x),wd(P.y,car.y))<m.radius)ST.prog+=p}};
var _loSt=lose;lose=function(m){if(m==='Бам!'&&ST.act&&ST.act.fragile&&!ST.arr&&ST.stop>=(ST.act.fragileFrom==null?1:ST.act.fragileFrom))ST.hits++;_loSt(m)};
var _huSt=hud;hud=function(dt){_huSt(dt);stHud()};
var _dzSt=drawZones;drawZones=function(l){_dzSt(l);if(l===0){stGarDraw();stStallDraw()}if(!ST.mode||l!==0||mode!=='game')return;var t=stTarget();if(!t)return;stBeacon(SX(t.x),SY(t.y))};
var GLY={'Г':['###','#..','#..','#..','#..'],'А':['.#.','#.#','###','#.#','#.#'],'Р':['##.','#.#','##.','#..','#..'],'Ж':['#.#.#','.###.','..#..','.###.','#.#.#'],
 'G':['###','#..','#.#','#.#','###'],'A':['.#.','#.#','###','#.#','#.#'],'R':['##.','#.#','##.','#.#','#.#'],'E':['###','#..','##.','#..','###']};
function stGarDraw(){if(!STP){if(window.worldReady&&typeof RH!=='undefined'&&RH)stPlaces();else return}var b=GARB;if(!b)return;var x=Math.round(SX(b.x)),y=Math.round(SY(b.y));if(x>VW+20||y>VH+20||x+b.w<-20||y+b.h<-20)return;
 var fh=Math.round(clamp(4+b.ht*3,6,b.h*.45)),fy=y+b.h-fh,w=Math.min(44,b.w-12),gx=Math.round(x+b.w/2-w/2),k;
 cx.fillStyle='#14101e';cx.fillRect(gx-1,fy+1,w+2,fh);cx.fillStyle='#9aa0b4';cx.fillRect(gx,fy+2,w,fh-2);cx.fillStyle='#646a80';for(k=fy+3;k<y+b.h-2;k+=2)cx.fillRect(gx,k,w,1);
 cx.fillStyle='#ffb85a';cx.fillRect(gx+1,y+b.h-2,w-2,2);
 var txt=S.lang==='ru'||!S.lang?'ГАРАЖ':'GARAGE',tw=0;for(var i=0;i<txt.length;i++)tw+=GLY[txt[i]][0].length+1;tw-=1;
 var sw=tw+6,sx=Math.round(x+b.w/2-sw/2),sy=fy-11;cx.fillStyle='#14101e';cx.fillRect(sx-1,sy-1,sw+2,11);cx.fillStyle='#ff3d8b';cx.fillRect(sx,sy,sw,9);cx.fillStyle='#2a0d1c';cx.fillRect(sx+1,sy+1,sw-2,7);
 cx.fillStyle=(Math.floor(TIME*1.3)%7)?'#ffd0e4':'#ff7ab0';var px=sx+3;for(i=0;i<txt.length;i++){var g=GLY[txt[i]];for(var r=0;r<5;r++)for(var q=0;q<g[r].length;q++)if(g[r][q]==='#')cx.fillRect(px+q,sy+2+r,1,1);px+=g[0].length+1}}
function stStallXY(k){var q=STP&&STP[k];if(!q||!q.r)return null;q.r.pt(zcs(q.r,q.s),TMP);var u=(q.r.hw+11)*(q.sd||1);return{x:TMP[0]-TMP[3]*u,y:TMP[1]+TMP[2]*u}}
function stStallDraw(){var p=stStallXY('toyo');if(p)stYatai(p,0);p=stStallXY('ramen');if(p)stYatai(p,1)}
function stYatai(p,k){var x=Math.round(SX(p.x)),y=Math.round(SY(p.y)),i;if(x<-30||y<-40||x>VW+30||y>VH+30)return;
 cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x-9,y-4,20,11);
 cx.fillStyle='#14101e';cx.fillRect(x-10,y-8,20,14);cx.fillStyle='#8a5a34';cx.fillRect(x-9,y-2,18,7);cx.fillStyle='#6a4024';cx.fillRect(x-9,y+3,18,2);
 if(k===0){for(i=0;i<6;i++){cx.fillStyle=i%2?'#f4f0f6':'#d8303a';cx.fillRect(x-9+i*3,y-7,3,5)}}
 else{cx.fillStyle='#1e2a5a';cx.fillRect(x-9,y-7,18,5);cx.fillStyle='#e8ecf4';for(i=0;i<3;i++)cx.fillRect(x-7+i*6,y-6,3,3);cx.fillStyle='#14101e';cx.fillRect(x-4,y-7,1,5);cx.fillRect(x+2,y-7,1,5);
  var ph=TIME*.9;for(i=0;i<3;i++){var t=(ph+i/3)%1;cx.fillStyle='rgba(240,240,250,'+(.5*(1-t)).toFixed(2)+')';cx.fillRect(x+3+Math.round(Math.sin(t*6+i)*2),y-9-Math.round(t*12),2,2)}
  cx.fillStyle='#14101e';cx.fillRect(x+9,y-5,3,6);cx.fillStyle=(Math.floor(TIME*1.5+1)%5)?'#ff5a3a':'#ff8a5a';cx.fillRect(x+10,y-4,1,4)}
 cx.fillStyle='#14101e';cx.fillRect(x-12,y-5,3,6);cx.fillStyle=(Math.floor(TIME*1.5)%5)?'#ff5a3a':'#ff8a5a';cx.fillRect(x-11,y-4,2,4);
 cx.fillStyle='#14101e';cx.fillRect(x-8,y+5,3,3);cx.fillRect(x+5,y+5,3,3)}
var _edSt=emisDraw;emisDraw=function(a){_edSt(a);['toyo'].forEach(function(k){var p=stStallXY(k);if(p){var sx=SX(p.x)-10,sy=SY(p.y)-2;if(sx>-40&&sy>-40&&sx<VW+40&&sy<VH+40)gl(sx,sy,14,14,[255,90,58],a*.8)}});var b=GARB;if(!b||!STP)return;var x=SX(b.x)+b.w/2,y=SY(b.y)+b.h-Math.round(clamp(4+b.ht*3,6,b.h*.45))-7;if(x<-40||y<-40||x>VW+40||y>VH+40)return;gl(x,y,26,10,[255,61,139],a*.7);gl(x,y+16,22,8,[255,184,90],a*.5)};
function stBeacon(x,y){if(x<-30||y<-30||x>VW+30||y>VH+30)return;var ph=(TIME*1.1)%1,r=6+ph*16;cx.fillStyle='rgba(255,210,58,'+(1-ph).toFixed(2)+')';for(var k=0;k<18;k++){var a=k/18*TAU;cx.fillRect(Math.round(x+Math.cos(a)*r)-1,Math.round(y+Math.sin(a)*r)-1,2,2)}
 var by=y-14+Math.round(Math.sin(TIME*3)*2);cx.fillStyle='#1a1426';cx.fillRect(x-5,by-7,11,13);cx.fillStyle='#ffd23a';cx.fillRect(x-4,by-6,9,11);cx.fillStyle='#1a1426';cx.fillRect(x-1,by-4,3,5);cx.fillRect(x-1,by+2,3,2)}
var _dmSt=drawMini;drawMini=function(){_dmSt();if(!ST.mode||!MMCX)return;var t=stTarget();if(!t)return;
 var g=MMCX,k=MMS/(2*MMR),th=camRot()?-Math.PI/2-(cam.a||0):0,ct=Math.cos(th),st=Math.sin(th),Dp=DPR,dx=wd(t.x,car.x),dy=wd(t.y,car.y),X=clamp(MMS/2+(dx*ct-dy*st)*k,6*Dp,MMS-6*Dp),Y=clamp(MMS/2+(dx*st+dy*ct)*k,6*Dp,MMS-6*Dp);
 g.fillStyle='#1a1426';g.fillRect(X-5*Dp,Y-5*Dp,10*Dp,10*Dp);g.fillStyle='#ffd23a';g.fillRect(X-4*Dp,Y-4*Dp,8*Dp,8*Dp);g.fillStyle='#1a1426';g.fillRect(X-1*Dp,Y-3*Dp,2*Dp,4*Dp);g.fillRect(X-1*Dp,Y+2*Dp,2*Dp,1.5*Dp)};
var _omSt=openMap;openMap=function(){_omSt();if(!ST.mode)return;var m=ST.act,c=stCur(),t=stTarget();if(!t)return;
 var cvs=$('mapc'),g=cvs.getContext('2d'),k=cvs.width/WS,Dp=DPR,X=wrap(t.x)*k,Y=wrap(t.y)*k;g.fillStyle='#1a1426';g.fillRect(X-8*Dp,Y-8*Dp,16*Dp,16*Dp);g.fillStyle='#ffd23a';g.fillRect(X-7*Dp,Y-7*Dp,14*Dp,14*Dp);g.fillStyle='#1a1426';g.fillRect(X-1.5*Dp,Y-5*Dp,3*Dp,6*Dp);g.fillRect(X-1.5*Dp,Y+3*Dp,3*Dp,2*Dp);
 g.font=Math.round(11*Dp)+'px TokyoPx,monospace';g.fillStyle='#ffd23a';g.fillText(LT((m||c).title),X+10*Dp,Y+4*Dp)};
var _rgSt=renderGar;renderGar=function(){_rgSt();if(!ST.mode)return;var c=stCur(),ch=stCh(),C=CHAP[ch],e=document.createElement('div');e.className='stbar';
 var inCh=STORY.filter(function(q){return q.ch===ch&&(!q.only||q.only===(S.story.pick||'hana'))}),i0=STORY.indexOf(inCh[0]),n=c?(S.story.m|0)-i0+1:inCh.length,pm=inCh.filter(function(q){return q.type==='pay'})[0],paid=pm&&STORY.indexOf(pm)<(S.story.m|0),amt=C.pay||0,have=Math.floor(S.coins);
 e.innerHTML='<div class="sr"><div><span>'+L('СЮЖЕТ')+' · '+chLbl(ch)+' · '+stEsc(LT(C.t))+'</span><b>'+(c?stEsc(LT(c.title))+' · '+n+'/'+inCh.length:L('глава пройдена'))+'</b></div><div class="dbt"><span>'+L('долг')+'</span><b>'+fmtN(S.story.debt)+' ¥</b></div></div>'+
  '<p class="sg"><span>'+L('Цель главы')+'</span>'+stEsc(LT(C.goal))+'</p>'+
  (c&&c.why?'<p class="sg"><span>'+L('Сейчас')+'</span>'+stEsc(LT(c.why))+'</p>':(!c?'<p class="sg"><span>'+L('Дальше')+'</span>'+stEsc(LT(STORY[STORY.length-1].next))+' · '+chLbl(ch+1)+' — '+L('скоро')+'</p>':''))+
  '<div class="sr"><div class="sm"><span>'+L('взнос главы')+'</span><b>'+(paid?L('внесён')+' ✓':fmtN(Math.min(have,amt))+' / '+fmtN(amt)+' ¥')+'</b>'+(paid?'':'<i><u style="width:'+Math.round(Math.min(1,have/Math.max(1,amt))*100)+'%"></u></i>')+'</div>'+
  ((S.story.m|0)>0?'<button class="srs" data-st="reset">'+L('заново')+'</button>':'')+'</div>';
 var top=$('gar').querySelector('.top');if(top)top.insertAdjacentElement('afterend',e)};
var _hoSt=home;home=function(){var m=ST.act,r=ST.ride;_hoSt();if(m&&!r&&(isZR(m)||m.type==='chase'||m.type==='save'||m.type==='pursuit'||m.type==='police'||m.type==='srace'||m.clean))stAbort()};
var _moSt=menuOpen;menuOpen=function(){ST.mode=false;ST.ride=false;ST.arr=false;AICAP.g=62;AICAP.e=12;if(ST.act){if(ZS)zoneCancel();ST.act=null}rivClear();stPromptHide();_moSt()};
// ---- developer mode (code in settings): jump to any mission / chapter
function stDevJump(i){i=clamp(i|0,0,STORY.length);if(ZS)zoneCancel();rivClear();ST.act=null;ST.ride=false;ST.arr=false;stPromptHide();WP=null;ST.routed='';ST.autoT=null;AICAP.g=62;AICAP.e=12;
 var debt=30000;for(var k=0;k<i;k++)if(STORY[k].type==='pay')debt-=STORY[k].amount;S.story.started=1;S.story.m=i;S.story.hi=Math.max(S.story.hi|0,i);S.story.debt=debt;save()}
function devPanel(){var cur=S.story.m|0,q='<div class="dev"><h3>'+L('Режим разработчика')+'</h3><div style="font-size:11px;color:#b8f0c0;line-height:1.4">'+L('Нажми на миссию — сюжет перейдёт к ней. За пропущенные миссии деньги не дают.')+'</div>',ch=0,i0=0;
 STORY.forEach(function(m,i){if(m.ch!==ch){if(ch)q+='</div>';ch=m.ch;i0=i;q+='<div class="dch">'+stEsc(chLbl(ch).toUpperCase()+' · '+LT(CHAP[ch].t))+'</div><div class="dms">'}
  q+='<button data-s="devjump" data-i="'+i+'" class="'+(i===cur?'on':'')+'">'+(i-i0+1)+'. '+stEsc(LT(m.title))+'</button>'});
 q+='</div><div class="dms" style="margin-top:5px"><button data-s="devjump" data-i="'+STORY.length+'" class="'+(cur>=STORY.length?'on':'')+'">'+L('Всё пройдено')+'</button></div>';
 q+='<div class="dbt2"><button data-s="devdone">'+L('Засчитать текущую')+'</button><button data-s="devtp">'+L('К старту миссии')+'</button><button data-s="devcoin">+5 000 ¥</button><button class="off" data-s="devoff">'+L('Выключить')+'</button></div></div>';return q}
function devAction(a,i){
 if(a==='devjump'){stDevJump(i);var c=stCur();toast(c?L('Миссия')+': '+LT(c.title):L('Всё пройдено'));renderSet();return}
 if(a==='devcoin'){S.coins+=5000;save();toast('+5 000 ¥');renderSet();return}
 if(a==='devoff'){S.dev=0;save();renderSet();return}
 if(a==='devdone'){closeSet();setTimeout(function(){if(ST.act){if(ZS)zoneCancel();stDone(true)}else{stDevJump((S.story.m|0)+1);if(mode==='')renderGar();var c=stCur();toast(c?L('Миссия')+': '+LT(c.title):L('Всё пройдено'))}},250);return}
 if(a==='devtp'){closeSet();setTimeout(function(){if(mode!=='game'||!car)return;var c=stCur(),t=stTarget()||(c&&stPlace(c.at));if(!t)return;car.x=t.x;car.y=t.y;car.vx=car.vy=0;if(t.a!=null)car.a=t.a;car.l=0;cam.x=car.x;cam.y=car.y;preload();WP=null;ST.routed=''},250)}}

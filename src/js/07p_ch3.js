// ===== chapter 3 «Огни Харуми»: Kir arrives, Hana's parts are stolen, Ryu courts Hana, someone leaks every move to the Shadows =====
CHAP[3]={t:{ru:'Огни Харуми',en:'Harumi Lights'},tod:{ru:'ночь · порт',en:'night · the port'},goal:{ru:'Вернуть детали Ханы, узнать, кто сливает тебя «Теням», и внести третий взнос',en:'Get Hana’s parts back, find out who leaks your moves to the Shadows, and make the third payment'},pay:5000};
CHAP[4]={t:{ru:'Призрак',en:'The Ghost'},tod:{ru:'глубокая ночь · перевал Кумо',en:'deep night · Kumo pass'}};
var PH_W=['Ватанабэ · по рации','Watanabe · on the radio'],KIR_86=['Кир · за рулём «восемьдесят шестой»','Kir · driving the “eighty-six”'],KIR_TOP=['Кир · на крыше контейнера','Kir · on a container roof'],PH_R=['Рин · по телефону','Rin · on the phone'],PH_T3=['Тэцу · по телефону','Tetsu · on the phone'],PH_S=['Сидзука · по телефону','Shizuka · on the phone'];
STORY.push(
 {id:'d1',ch:3,title:{ru:'Паром из Владика',en:'The ferry from Vladik'},at:'port',type:'kirride',stops:['garage'],asks:['drift','speed','near'],pass:'kir',reward:300,
  goal:{ru:'Кир не верит в «пьяный стиль»: выполни три его просьбы по дороге и довези его до мастерской',en:'Kir doesn’t believe in the “drunken style”: do his three requests on the way and get him to the garage'},
  why:{ru:'Кир приплыл из Владивостока. Лучший друг — и худший штурман.',en:'Kir came over from Vladivostok. Best friend, worst navigator.'},
  pre:[D('kir','Лёха! Восемь часов на пароме, кормили одной рыбой. Обнимашки потом, сначала — где тут нормальная еда?','Lyokha! Eight hours on a ferry and nothing but fish. Hugs later — where’s some real food around here?'),
       D('lyokha','Сначала кинем твои сумки в мастерскую. Потом — к бабушке Тоё, лучшие онигири в Токио.','First we drop your bags at the garage. Then Grandma Toyo’s — the best onigiri in Tokyo.'),
       D('kir','(обходит машину) Погоди… это та самая Сакура из твоих видео? Вживую она ещё круче. А девушка из видео где?','(walks round the car) Wait… this is the Sakura from your videos? She’s even cooler for real. And where’s the girl from the videos?'),
       D('lyokha','Хана. Она… просто снимает.','Hana. She… just films.'),
       D('kir','Ага. «Просто». Стоп, а ты точно тот самый Лёха из видео? Докажи. Три фокуса по дороге — и я поверю.','Sure. “Just”. Wait, are you really the Lyokha from the videos? Prove it. Three tricks on the way and I’ll believe you.'),
       D('lyokha','Заказывай. Садись.','Name them. Get in.')],
  post:[D('kir','Ладно, верю: ты тот самый Лёха. Так это и есть мастерская дяди Миши? Пахнет как у деда в гараже.','Fine, I believe you: you’re the real Lyokha. So this is Uncle Misha’s garage? Smells like grandpa’s.'),
        D('lyokha','Диван твой. Сумки — в угол.','The couch is yours. Bags in the corner.'),
        D('hana','Лёха! Мою лавку обокрали! Новый турбо для Сакуры, все детали — всё увезли!','Lyokha! My shop was robbed! The new turbo for Sakura, all the parts — gone!',PH_H),
        D('hana','Соседи видели белый фургон с бульдозером на борту — он только что свернул на вашу улицу! Перехвати!','The neighbours saw a white van with a bulldozer on the side — it just turned onto your street! Cut it off!',PH_H),
        D('kir','Добро пожаловать в Токио, да?','Welcome to Tokyo, huh?')]},
 {id:'d2',ch:3,title:{ru:'Фургон',en:'The van'},at:'garage',auto:true,pass:'kir',type:'pursuit',via:['hana'],dest:'pad',loop:['port','yd2','yd1','pad'],need:10,limit:80,reward:400,
  goal:{ru:'Догони фургон и держись рядом 10 секунд — Кир снимет номер',en:'Catch the van and stay close for 10 seconds — Kir will film the plate'},
  why:{ru:'Фургон с деталями Ханы уходит к докам.',en:'The van with Hana’s parts is heading for the docks.'},
  pre:[D('kir','Вон он! Белый, с бульдозером! Подъедь поближе, я сниму номер.','There it is! White, with a bulldozer! Get closer, I’ll film the plate.'),
       D('lyokha','Держись за что-нибудь.','Hold on to something.')],
  post:[D('kir','Есть номер! Фургон доков Харуми. Хозяин — какой-то Тэцу «Бульдозер».','Got the plate! A Harumi docks van. The owner is some Tetsu “Bulldozer”.'),
        D('hana','Тэцу?! Его банда держит все доки. Туда просто так не заезжают.','Tetsu?! His gang runs all the docks. Nobody just drives in there.',PH_H),
        D('lyokha','Значит, заедем не просто так.','Then we won’t “just” drive in.')],
  fail:[D('kir','Ушёл… Давай ещё раз. Я в этот раз не буду жевать.','It got away… Let’s go again. I won’t be chewing this time.')],timeout:'фургон ушёл в доки'},
 {id:'d3',ch:3,title:{ru:'Без царапин',en:'Not a scratch'},at:'pad',pass:'kir',type:'deliv',stops:['crane'],clean:1,limit:70,reward:450,
  goal:{ru:'Проедь доки до старого крана и ничего не задень',en:'Drive through the docks to the old crane without touching anything'},
  why:{ru:'Тэцу отдаст половину деталей, если ты проедешь его доки без единой царапины.',en:'Tetsu will give back half the parts if you get through his docks without a scratch.'},
  pre:[D('tetsu','Ты пьяный, что ли? Так въезжать в мои доки.','Are you drunk? Driving into my docks like that.'),
       D('lyokha','Это стиль такой. Где детали Ханы?','It’s a style. Where are Hana’s parts?'),
       D('tetsu','Детали теперь мои. Хочешь половину — проедь до старого крана в порту и ничего не задень.','The parts are mine now. Want half? Drive to the old crane at the port and don’t touch a thing.'),
       D('tetsu','Ни машину, ни столб, ни ящик. Тронешь — уйдёшь пешком.','Not a car, not a pole, not a crate. Touch anything and you walk home.')],
  post:[D('tetsu','Хм. Ни царапины. Держи половину.','Hm. Not a scratch. Here’s half.'),
        D('lyokha','Кто тебе их заказал?','Who ordered them?'),
        D('tetsu','Конверт принёс курьер. Денег много, имени нет. Только пах дорогим одеколоном. Как в Неон-тауэре.','A courier brought an envelope. Lots of money, no name. It just smelled of expensive cologne. Like in Neon Tower.'),
        D('kir','Одеколон. Отличная улика, Шерлок.','Cologne. Great clue, Sherlock.'),
        D('kir','Слушай, Тэцу продаёт свою старую «восемьдесят шестую». Я тут выйду — заберу её. Вечером позвоню.','Listen, Tetsu is selling his old “eighty-six”. I’ll get out here and pick it up. I’ll call you tonight.')],
  fail:[D('tetsu','Задел. Вали. Приходи, когда научишься ездить.','You touched it. Get lost. Come back when you can drive.')]},
 {id:'d4',ch:3,title:{ru:'Двое на Вангане',en:'Two on the Wangan'},at:'wgs',type:'coop',zone:'wg',reward:450,
  goal:{ru:'Проедь Ванган вместе с Киром: финишируйте с разницей не больше 10 секунд',en:'Drive the Wangan with Kir: finish no more than 10 seconds apart'},
  why:{ru:'Тэцу продал Киру старую «восемьдесят шестую». Пора показать ему ночной Токио.',en:'Tetsu sold Kir an old “eighty-six”. Time to show him Tokyo at night.'},
  pre:[D('kir','Видал? Моя «восемьдесят шестая». Почти без ржавчины!','See this? My “eighty-six”. Hardly any rust!',KIR_86),
       D('lyokha','Ванган. Едем рядом, не отставай.','The Wangan. We ride together, keep up.'),
       D('kir','Это ты не отставай.','You keep up.')],
  post:[D('kir','Видел чёрную машину сзади? Всю дорогу висела. С эмблемой — тень какая-то.','Did you see the black car behind us? It hung there the whole way. With a logo — some kind of shadow.'),
        D('lyokha','«Тени». Сидзука про них говорила.','The Shadows. Shizuka told me about them.'),
        D('kir','Кто-то знает, где ты бываешь, брат. Слишком хорошо знает.','Someone knows where you go, bro. Knows it too well.'),
        D('kir','И ещё: Хана зовёт на Скрамбл, с ней какой-то спонсор. Едем — я за тобой.','And another thing: Hana’s calling us to the Scramble, some sponsor is with her. Let’s go — I’ll follow you.',KIR_86)],
  fail:[D('kir','Ты меня бросил! Я чуть в отбойник не уехал.','You ditched me! I nearly went into the barrier.')]},
 {id:'d5',ch:3,title:{ru:'Незнакомец',en:'The stranger'},at:'scramble',type:'duel',zone:'scr',rival:'ryu',rate:1.15,reward:500,
  goal:{ru:'Набери на Скрамбле больше очков, чем Рю, за 45 секунд',en:'Outscore Ryu at the Scramble in 45 seconds'},
  why:{ru:'Возле Ханы появился Рю. Красивый, богатый — и всё время рядом с ней.',en:'Ryu has turned up next to Hana. Handsome, rich — and always close to her.'},
  pre:[D('hana','Лёха, знакомься, это Рю. Он хочет спонсировать мой канал. И предлагает магазин в Неон-тауэре…','Lyokha, meet Ryu. He wants to sponsor my channel. And he’s offering me a shop in Neon Tower…'),
       D('ryu','Наслышан о «пьяном стиле». Хана говорит, ты лучший в городе. Проверим?','I’ve heard about the “drunken style”. Hana says you’re the best in town. Shall we check?'),
       D('lyokha','(Почему он стоит так близко к ней?)','(Why is he standing so close to her?)',LYO_T),
       D('kir','Брат, это называется ревность.','Bro, that’s called jealousy.'),
       D('ryu','Скрамбл, 45 секунд. Хана снимает нас обоих. Держись рядом — в кадр попадают только близкие.','The Scramble, 45 seconds. Hana films us both. Stay close — only those near me get in the shot.')],
  post:[D('ryu','Неплохо. Для любителя.','Not bad. For an amateur.'),
        D('hana','Ты сегодня какой-то злой.','You’re kind of angry today.'),
        D('lyokha','Я? Нормальный я.','Me? I’m fine.'),
        D('ryu','Хана, моё предложение в силе. Подумай.','Hana, my offer stands. Think about it.')],
  fail:[D('ryu','Красивый стиль. Только мимо. Хана, поедем, покажу магазин.','A pretty style. Just off target. Hana, come on, I’ll show you the shop.')]},
 {id:'d6',ch:3,title:{ru:'Анонимный звонок',en:'An anonymous call'},at:'scramble',auto:true,type:'police',limit:60,reward:400,
  goal:{ru:'Уйди от полиции: оторвись или скройся у неё из виду',en:'Lose the police: get away or get out of their sight'},
  why:{ru:'Кто-то вызвал полицию прямо на заезд.',en:'Someone called the police right onto the run.'},
  pre:[D('watanabe','Белая Сакура, говорит полиция Токио. Немедленно остановитесь.','White Sakura, this is the Tokyo police. Stop immediately.',PH_W),
       D('kir','Кто их вызвал?! Мы же только закончили! Я сворачиваю в переулок, ты уводи их!','Who called them?! We just finished! I’m turning into an alley, you lead them away!',PH_K),
       D('lyokha','Держись крепче.','Hold on tight.')],
  post:[D('watanabe','Белая Сакура… Потерял. Совсем потерял. Какая жалость.','White Sakura… Lost him. Completely lost him. What a pity.',PH_W),
        D('watanabe','(тише) Звонок был анонимный. Из автомата у Скрамбла. Береги себя, парень.','(quieter) The call was anonymous. From a payphone at the Scramble. Take care, kid.',PH_W),
        D('kir','Он что, нам сейчас подмигнул?','Did he just wink at us?',PH_K),
        D('kir','Я в мастерскую. На сегодня с меня хватит полиции.','I’m going back to the garage. Enough police for one night.',PH_K)],
  fail:[D('watanabe','Попался. На первый раз — штраф и лекция о вреде заносов. Езжай домой, гонщик.','Gotcha. First time: a fine and a lecture on the dangers of drifting. Go home, racer.')]},
 {id:'d7',ch:3,title:{ru:'Ночь фейерверков',en:'Fireworks night'},at:'garage',type:'choice',reward:0,
  goal:{ru:'Выбери, с кем провести ночь фейерверков',en:'Choose who to spend fireworks night with'},
  why:{ru:'У колеса обозрения фестиваль. Хана молчит с того вечера. А Рин звонит уже третий раз.',en:'There’s a festival at the Ferris wheel. Hana has been quiet since that evening. And Rin has called three times.'},
  pre:[D('kir','Сегодня фейерверки у колеса обозрения. Весь город там будет.','Fireworks at the Ferris wheel tonight. The whole city will be there.'),
       D('rin','Ёппарай. Ночной тандем по Вангану под салютом. Дважды не зову.','Yopparai. A night tandem on the Wangan under the fireworks. I don’t ask twice.',PH_R),
       D('lyokha','(А Хана… после Рю почти не звонит.)','(And Hana… she’s barely called since Ryu.)',LYO_T),
       D('kir','Ну? Кого зовёшь?','So? Who are you asking?')],
  choices:[{v:'hana',ru:'Позвать Хану на колесо обозрения',en:'Take Hana to the Ferris wheel'},{v:'rin',ru:'Тандем с Рин под салютом',en:'Tandem with Rin under the fireworks'}],post:[]},
 {id:'d7h',ch:3,only:'hana',pass:'hana',title:{ru:'Колесо обозрения',en:'The Ferris wheel'},at:'hana',type:'deliv',stops:['wheel'],clean:3,limit:60,fw:1,reward:300,
  goal:{ru:'Довези Хану до колеса обозрения до главного залпа. Три удара — и она выйдет',en:'Get Hana to the Ferris wheel before the big finale. Three hits and she gets out'},
  why:{ru:'Ты позвал Хану. Не опоздай — и не тряси, она в платье.',en:'You asked Hana. Don’t be late — and no shaking, she’s in a dress.'},
  pre:[D('hana','Ты правда меня зовёшь? Не Рю, не камера — просто ты?','You’re really asking me? Not Ryu, not the camera — just you?'),
       D('lyokha','Просто я.','Just me.'),
       D('hana','…Ладно. Колесо обозрения, до главного залпа. И не тряси, я в платье.','…Fine. The Ferris wheel, before the big finale. And no shaking, I’m in a dress.')],
  post:[D('hana','Смотри, начинается!','Look, it’s starting!'),
        D('hana','Лёха… Я отказала Рю. Магазин, спонсорство — всё.','Lyokha… I turned Ryu down. The shop, the sponsorship — all of it.'),
        D('lyokha','Почему?','Why?'),
        D('hana','Он ни разу не спросил, чего хочу я. А ты спросил.','He never once asked what I want. You did.'),
        D('lyokha','Хана, я…','Hana, I…'),
        D('hana','Тихо. Салют пропустишь.','Shh. You’ll miss the fireworks.'),
        D('shizuka','Алексей, это Сидзука. Рю — сын Кагэямы. Подумала, тебе стоит знать.','Alexei, it’s Shizuka. Ryu is Kageyama’s son. I thought you should know.',PH_S),
        D('hana','Сын Кагэямы?.. Так вот зачем ему мой магазин рядом с твоей мастерской.','Kageyama’s son?.. So that’s why he wanted my shop next to your garage.')],
  fail:[D('hana','Ай! Всё, я выхожу. Салют посмотрю с берега. Одна.','Ow! That’s it, I’m getting out. I’ll watch the fireworks from the shore. Alone.')]},
 {id:'d7r',ch:3,only:'rin',title:{ru:'Тандем под салютом',en:'Tandem under the fireworks'},at:'wgs',type:'tandem',zone:'wg',leader:'rin',fw:1,reward:300,
  goal:{ru:'Держись за Рин на Вангане под фейерверками',en:'Stay on Rin’s tail on the Wangan under the fireworks'},
  why:{ru:'Рин позвала на ночной тандем. Отказывать ей опасно.',en:'Rin asked you to a night tandem. Saying no to her is dangerous.'},
  pre:[D('rin','Пришёл всё-таки. Держись за мной. Ближе.','You came after all. Stay behind me. Closer.'),
       D('lyokha','Ты всегда так зовёшь на свидание?','Is this how you always ask someone out?'),
       D('rin','Это не свидание. Это тандем.','It’s not a date. It’s a tandem.')],
  post:[D('rin','…Ты хорошо держишься. Слушай. Нас с сестрой нанимал Кагэяма. Чтобы выжить Рэйко с перевала.','…You hold on well. Listen. Kageyama hired my sister and me. To push Reiko off the pass.'),
        D('rin','А Рю, который крутится возле твоей Ханы, — его сын.','And Ryu, the one hanging around your Hana, is his son.'),
        D('lyokha','Сын Кагэямы…','Kageyama’s son…'),
        D('hana','Красивый салют, Лёха? Я видела вас на Вангане. Вдвоём.','Pretty fireworks, Lyokha? I saw you two on the Wangan. Together.',PH_H),
        D('lyokha','Хана, это не то, что…','Hana, it’s not what…'),
        D('hana','Мне всё равно. Правда.','I don’t care. Really.',PH_H)],
  fail:[D('rin','Отстал. Скучно с тобой, ёппарай.','You fell behind. You’re boring, yopparai.')]},
 {id:'d7c',ch:3,title:{ru:'Курьер',en:'The courier'},at:'port',type:'tail',dest:'scramble',reward:450,
  goal:{ru:'Проследи за курьером: держись позади, не ближе 20 м и не дальше 110 м',en:'Tail the courier: stay behind him, no closer than 20 m and no further than 110 m'},
  why:{ru:'К Тэцу снова приходил курьер с конвертом. Пора узнать, кому он его везёт.',en:'The courier came to Tetsu with an envelope again. Time to find out who he takes it to.'},
  pre:[D('tetsu','Пьяный. Тот курьер с одеколоном опять был у меня. Оставил конверт, забрал ответ — и уехал. Чёрный седан.','Drunk. That cologne courier was at mine again. Left an envelope, took the reply and went. A black sedan.',PH_T3),
       D('tetsu','Он ещё у порта. Я тебе этого не говорил.','He’s still near the port. You didn’t hear it from me.',PH_T3),
       D('lyokha','(Держаться сзади. Не слишком близко — и не упустить.)','(Stay behind. Not too close — and don’t lose him.)',LYO_T)],
  post:[D('lyokha','(Курьер встал у Скрамбла. К нему подкатила жёлтая машина…)','(The courier stopped at the Scramble. A yellow car pulled up to him…)',LYO_T),
        D('lyokha','(Конверт ушёл в окно. Лица не видно. Но эту жёлтую машину я где-то видел.)','(The envelope went in through the window. Can’t see the face. But I’ve seen that yellow car somewhere.)',LYO_T),
        D('kir','Жёлтая? В этом городе полно жёлтых машин, брат. Но номер запомни.','Yellow? This city is full of yellow cars, bro. But remember the plate.',PH_K)],
  fail:[D('tetsu','Засветился? Ладно. Курьеры ездят кругами — он ещё вернётся к порту.','Got spotted? Fine. Couriers drive in circles — he’ll be back at the port.',PH_T3)]},
 {id:'d8',ch:3,title:{ru:'Записка №2',en:'Note #2'},at:'port',type:'search',stash:'yd2',limit:150,reward:200,
  goal:{ru:'Найди тайник Миши в доках по сигналу маячка — навигатор не поможет',en:'Find Misha’s stash in the docks by its beacon signal — no navigator this time'},
  why:{ru:'Тэцу вспомнил: двенадцать лет назад Миша что-то прятал у старых кранов.',en:'Tetsu remembered: twelve years ago Misha hid something by the old cranes.'},
  pre:[D('tetsu','Эй, пьяный. Твой дядя тут гонял лет двенадцать назад. У старых кранов у него был тайник.','Hey, drunk. Your uncle raced here about twelve years ago. He had a stash by the old cranes.',PH_T3),
       D('lyokha','Откуда ты знаешь?','How do you know?'),D('tetsu','Я тогда был пацаном и подметал доки. Он дал мне сто иен, чтобы я молчал.','I was a kid sweeping the docks back then. He gave me a hundred yen to keep quiet.',PH_T3),
       D('tetsu','У какого крана — не помню. Но Миша поставил там маячок. Если батарейка жива, твоя рация его поймает.','Which crane — I don’t remember. But Misha put a beacon there. If the battery’s alive, your radio will pick it up.',PH_T3)],
  post:[D('misha','«По Харуми я гонял с Куродой. Он знает, что было на Кумо. Найдёшь его — скажи, что я не злюсь».','“I raced Harumi with Kuroda. He knows what happened on Kumo. If you find him, tell him I’m not angry.”',NOTE),
        D('lyokha','Курода… Ещё одно имя.','Kuroda… Another name.'),
        D('kir','И ещё одно: Гэн звонил. В полночь гонка на Вангане. Пять машин, призовые — две с половиной тысячи.','And another one: Gen called. A race on the Wangan at midnight. Five cars, the prize is two and a half thousand.',PH_K),
        D('lyokha','Половина взноса. Совпадение?','Half the payment. A coincidence?'),
        D('kir','В этом городе — нет.','Not in this city.',PH_K)]},
 {id:'d9',ch:3,title:{ru:'Полночь на Вангане',en:'Midnight on the Wangan'},at:'wgs',type:'race5',zone:'wg',reward:2500,
  goal:{ru:'Гонка пятерых: приди первым на Вангане',en:'A five-car race: finish first on the Wangan'},
  why:{ru:'Подпольную гонку собрал Гэн. Призовые — половина взноса.',en:'Gen put together an underground race. The prize is half the payment.'},
  pre:[D('gen','Дамы и господа! Полночь, Ванган, пять машин! Король Скрамбла, Рин Мори, Тэцу «Бульдозер»…','Ladies and gentlemen! Midnight, the Wangan, five cars! The Scramble King, Rin Mori, Tetsu “Bulldozer”…'),
       D('gen','…и гость из «Теней» — Сэйдзи «Линия»!','…and a guest from the Shadows — Seiji “The Line”!'),
       D('seiji','Твоя траектория — шум. Я еду по сигналу.','Your line is noise. I drive by the signal.'),
       D('tetsu','А я еду по тем, кто мешает.','And I drive over whoever gets in the way.'),
       D('rin','Не тормози, ёппарай.','Don’t brake, yopparai.'),
       D('kir','Лёха, смотри за Гэном. Он сегодня какой-то слишком довольный.','Lyokha, watch Gen. He’s way too pleased with himself tonight.',PH_K)],
  post:[D('gen','Ну… поздравляю. Ты опять король.','Well… congratulations. You’re king again.'),
        D('tetsu','Гэн, ты всю гонку прикрывал этого из «Теней». Я видел.','Gen, you covered for that Shadows guy the whole race. I saw it.'),
        D('gen','Что? Я… просто ехал своей линией!','What? I… was just driving my line!'),
        D('seiji','Погрешность в расчётах. Пересчитаю.','An error in the calculations. I’ll recalculate.'),
        D('rin','Неплохо, ёппарай.','Not bad, yopparai.')],
  fail:[D('seiji','Предсказуемо.','Predictable.'),D('gen','Корона снова моя! Ха!','The crown is mine again! Ha!')]},
 {id:'d10',ch:3,title:{ru:'Бульдозер',en:'The Bulldozer'},at:'pad',type:'srace',route:['pad','yd1','yd2','crane'],limit:90,reward:3000,boss:'tetsu',
  goal:{ru:'Гонка по докам против Тэцу и трёх «Бульдозеров»: приди первым',en:'A race through the docks against Tetsu and three Bulldozers: finish first'},
  why:{ru:'Обгонишь Тэцу в его доках — он отдаст все детали и назовёт имя заказчика.',en:'Beat Tetsu in his own docks and he gives back all the parts and names whoever paid him.'},
  pre:[D('tetsu','Ты обогнал меня на Вангане. В моих доках так не выйдет.','You beat me on the Wangan. It won’t work in my docks.'),
       D('tetsu','Я и трое моих «Бульдозеров». Финиш — у старого крана. Обгонишь — отдам всё. И назову имя.','Me and three of my Bulldozers. The finish is at the old crane. Beat me and I give everything back. And name the name.'),
       D('kir','Я залез на контейнер, мне всё видно! Заманивай их в стены и контейнеры. Тэцу тяжёлый — после удара секунды три в себя приходит.','I’m up on a container, I can see everything! Lure them into walls and containers. Tetsu is heavy — after a crash he needs about three seconds to come round.',KIR_TOP),
       D('lyokha','Понял.','Got it.')],
  post:function(){var h=S.story.pick!=='rin';return [D('tetsu','…Ладно. Ты не боишься. Это я уважаю.','…Fine. You’re not afraid. I respect that.'),
        D('tetsu','Детали Ханы — все. И имя. Конверт мне передал Гэн.','All of Hana’s parts. And the name. Gen gave me the envelope.'),
        D('lyokha','Гэн?!','Gen?!'),
        D('tetsu','Рю пообещал вернуть ему корону Скрамбла. И деньги. Твой король продал тебя, пьяный.','Ryu promised to give him back the Scramble crown. And money. Your king sold you out, drunk.'),
        D('tetsu','И ещё. Громилу мою видел? Отдам за полцены. Заходи.','One more thing. Seen my Brute? I’ll sell it at half price. Drop by.'),
        D('hana','Лёха! Ты цел? Я всё видела.','Lyokha! Are you okay? I saw everything.')].concat(h?
        [D('hana','(целует в щёку) Это за детали. Не придумывай.','(kisses him on the cheek) That’s for the parts. Don’t get ideas.'),D('kir','Я ничего не видел. Совсем ничего.','I saw nothing. Nothing at all.')]:
        [D('hana','Это за детали. Спасибо.','That’s for the parts. Thank you.'),D('hana','А про Рин мы ещё поговорим.','And we’ll still talk about Rin.'),D('kir','Брат, ты попал.','Bro, you’re in trouble.')])},
  fail:[D('tetsu','В доках правит Бульдозер. Приходи, когда отрастишь броню.','The Bulldozer rules the docks. Come back when you’ve grown some armour.')]},
 {id:'d11',ch:3,title:{ru:'Третий взнос',en:'Third payment'},at:'bank',type:'pay',amount:5000,reward:0,
  goal:{ru:'Внеси третий взнос — 5 000 ¥',en:'Make the third payment — 5,000 ¥'},
  why:{ru:'Детали у Ханы, имя предателя известно. Осталось заплатить.',en:'Hana has her parts, you know the traitor’s name. Now pay.'},
  short:[D('okada','Пять тысяч, Алексей-сан. Не хватает? Я подожду. Но теперь ждёт не только банк.','Five thousand, Alexei-san. Not enough? I’ll wait. But it’s not only the bank waiting now.'),
         D('lyokha','Подкалымлю на заездах и вернусь.','I’ll earn a bit on the runs and come back.',LYO_T)],
  pre:[D('gen','Лёха, подожди! Да, это был я. Рю обещал вернуть мне Скрамбл. Я… завидовал.','Lyokha, wait! Yes, it was me. Ryu promised to give me back the Scramble. I… was jealous.'),
       D('gen','Я всё исправлю. Клянусь короной.','I’ll make it right. I swear on the crown.'),
       D('lyokha','Корону, Гэн, не продают. Ни за деньги, ни за обещания.','A crown isn’t for sale, Gen. Not for money, not for promises.'),
       D('okada','Пять тысяч. Восхитительно, Алексей-сан. Осталось двадцать.','Five thousand. Delightful, Alexei-san. Twenty left.'),
       D('okada','Но есть новость. Ваш долг выкуплен. Целиком.','But there’s news. Your debt has been bought. All of it.'),
       D('lyokha','Кем?','By whom?'),
       D('okada','Господином Кагэямой. Теперь вы должны ему.','By Mr. Kageyama. Now you owe him.'),
       D('okada','(тише) Лично я ставлю на вас, Алексей-сан. Не подведите.','(quieter) Personally, I’m betting on you, Alexei-san. Don’t let me down.'),
       D('kir','Лёха, я починил видик! Кассета «12 лет назад» — смотри.','Lyokha, I fixed the VCR! The “12 years ago” tape — look.',PH_K),
       D('lyokha','Перевал… ночь… и машина без фар. Совсем без света.','A pass… night… and a car with no lights. No light at all.',LYO_T),
       D('kir','Это Кумо. Местные говорят, там до сих пор кто-то ездит в темноте.','That’s Kumo. Locals say someone still drives there in the dark.',PH_K),
       D('lyokha','Значит, едем на Кумо.','Then we’re going to Kumo.')],
  post:[],chapterEnd:3,next:{ru:'Найди машину без фар на перевале Кумо',en:'Find the car with no lights on the Kumo pass'}}
);
// ---- places for chapter 3
var _spC3=stPlaces;stPlaces=function(){var P=_spC3();if(P.crane)return P;
 var Y=SPEC.filter(function(s){return s.k==='yard'}),pt=P.port,pd=P.pad.g||P.pad;function c(s){return{x:s.x+s.w/2,y:s.y+s.h/2}}
 Y.sort(function(a,b){var A=c(a),B=c(b);return Math.hypot(wd(A.x,pt.x),wd(A.y,pt.y))-Math.hypot(wd(B.x,pt.x),wd(B.y,pt.y))});
 var y0=Y[0],cr=null;if(y0){[[.85,.2],[.15,.2],[.85,.8],[.15,.8]].some(function(f){var q=stSnapNear(y0,{f:{x:y0.x+y0.w*f[0],y:y0.y+y0.h*f[1]}});if(q&&Math.hypot(wd(q.x,pt.x),wd(q.y,pt.y))>220){cr=q;return true}return false})}
 P.crane=cr||stSnapWide({x:pt.x+260,y:pt.y});
 // the far yard (a detour for the docks race), the Wangan start
 var far=null,fd=0;Y.forEach(function(s){var q=c(s),d=Math.hypot(wd(q.x,pd.x),wd(q.y,pd.y));if(d>fd&&d<4200){fd=d;far=s}});P.yardfar=far?(stSnapNear(far,{f:c(far)})||stSnapWide(c(far))):P.port;
 // the two yards nearest the pad: the docks race loops through them
 var byPad=Y.slice().sort(function(a,b){var A=c(a),B=c(b);return Math.hypot(wd(A.x,pd.x),wd(A.y,pd.y))-Math.hypot(wd(B.x,pd.x),wd(B.y,pd.y))});
 function yd(s){return s?(stSnapNear(s,{f:c(s)})||stSnapWide(c(s))):{x:P.port.x,y:P.port.y}}P.yd1=yd(byPad[0]);P.yd2=yd(byPad[1]);
 var wz=stZone('wg');P.wgs={x:wz.x,y:wz.y};
 P.crane.name={ru:'Старый кран',en:'The old crane'};P.yardfar.name={ru:'Дальний склад',en:'The far yard'};P.yd1.name={ru:'Склад у площадки',en:'The pad-side yard'};P.yd2.name={ru:'Южный склад',en:'The south yard'};P.wgs.name={ru:'Ванган',en:'The Wangan'};return P};
// ---- the choice (fireworks night)
function stChoice(m){ST.prompt='choice';var e=$('sq'),q='<div class="zk">'+L('СЮЖЕТ')+' · '+chLbl(m.ch)+'</div><div class="zn">'+stEsc(LT(m.title))+'</div><div class="zi">'+stEsc(LT(m.goal))+'</div><div class="zch">';
 m.choices.forEach(function(o){q+='<button data-st="pick" data-v="'+o.v+'">'+stEsc(LT(o))+'</button>'});e.innerHTML=q+'</div>';e.classList.add('on')}
(function(){var st=document.createElement('style');st.textContent='#sq .zch{display:flex;flex-direction:column;gap:6px;margin-top:8px}#sq .zch button{border:0;padding:8px 7px;font-size:13px;line-height:1.2;font-weight:900;text-align:left;background:var(--pk);color:#2a0d1c;box-shadow:3px 3px 0 var(--pk2)}#sq .zch button+button{background:#ff4d6d;box-shadow:3px 3px 0 #8a1c34}';document.head.appendChild(st)})();
document.addEventListener('click',function(e){var b=e.target.closest('[data-st=pick]');if(!b)return;var m=ST.act;if(!m||m.type!=='choice')return;if(m.key&&m.key!=='pick'){S.story.f=S.story.f||{};S.story.f[m.key]=b.dataset.v}else S.story.pick=b.dataset.v;save();ST.prompt=false;$('sq').classList.remove('on');stDone(true)});
// ---- multi-stop routes: legs resampled and joined so a stop on the way is passed through, not driven into and back out of
function c3Res(P,st){var o=[P[0].slice()];for(var i=1;i<P.length;i++){var a=o[o.length-1],b=P[i],dx=wd(b[0],a[0]),dy=wd(b[1],a[1]),d=Math.hypot(dx,dy),n=Math.floor(d/st);for(var k=1;k<=n;k++)o.push([a[0]+dx*k/n,a[1]+dy*k/n]);if(d-n*st>1)o.push([a[0]+dx,a[1]+dy])}return o}
function c3Join(legs){var pts=[],ends=[];legs.forEach(function(L0){var L=c3Res(L0,8);if(!pts.length){pts=L;ends.push(pts.length-1);return}
  var i=pts.length-1,j=0;while(i>1&&j<L.length-2&&Math.hypot(wd(pts[i-1][0],L[j+1][0]),wd(pts[i-1][1],L[j+1][1]))<26){i--;j++}
  pts=pts.slice(0,i+1).concat(L.slice(j+1));if(ends.length)ends[ends.length-1]=i;ends.push(pts.length-1)});return{pts:pts,ends:ends}}
// ---- spawners
function c3Riv(o){var R=rivMake(o);R.sk=R.sk0=o.sk||.8;if(o.l){R.c.l=o.l;R.l=o.l}return R}
function c3Lane(z,k,dir){return laneU(z.road,dir==null?1:dir,k)}
function c3CourseRiv(z,o){var R=stRivCourse(z,o);R.c.l=z.l|0;R.l=z.l|0;return R}
var C3R={gen:{id:'gen',name:'Гэн',tag:'#ffd23a',car:2,col:6,str:0,glow:1},rin:{id:'rin',name:'Рин',tag:'#ff4d6d',car:1,col:1,str:1,glow:1},tetsu:{id:'tetsu',name:'Тэцу',tag:'#ff8a3d',car:1,col:7,str:1,glow:0},
 seiji:{id:'seiji',name:'Сэйдзи',tag:'#35e0ff',car:9,col:6,str:4,glow:4},kir:{id:'kir',name:'Кир',tag:'#b8f0c0',car:4,col:0,str:1,glow:0},shadow:{id:'shadow',name:'???',tag:'#8a90a4',car:9,col:6,str:4,glow:4},
 ryu:{id:'ryu',name:'Рю',tag:'#e8ecf4',car:12,col:6,str:2,glow:2},cop:{id:'cop',name:'Ватанабэ',tag:'#6ab0ff',car:0,col:0,str:1,glow:0},van:{id:'van',name:'Фургон',tag:'#f4f4f4',car:6,col:0,str:1,glow:0}};
// rival pace = a share q of YOUR car (top speed and power, any car, any upgrades); the rubber band then scales the rival's engine
function c3Pace(R,q,sk){var Q=car.P,P=R.c.P;R.V0=Q.vmax*q;P.vmax=R.V0;P.pw=Q.pw*q;P.grip=Math.max(P.grip,Q.grip);P.turn=Math.max(P.turn,Q.turn);P.dturn=Math.max(P.dturn,Q.dturn);R.V=R.V0;R.sk=R.sk0=sk||1.3;R.vmax=Q.vmax*1.25;return R}
function c3Band(R,f){R.c.P.vmax=R.V0*f}
// where a rival is along its path (the ram attack skips the autopilot, which normally keeps this up to date)
function c3Proj(r){var c=r.c,P=r.pts,n=P.length,best=1e18,bi=r.pi,bt=0;for(var k=-3;k<60;k++){var i=r.pi+k;if(i<0||i>=n-1)continue;var p0=P[i],p1=P[i+1],ex=wd(p1[0],p0[0]),ey=wd(p1[1],p0[1]),l2=ex*ex+ey*ey||1,dx=wd(c.x,p0[0]),dy=wd(c.y,p0[1]),t=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*t,qy=dy-ey*t,d=qx*qx+qy*qy;if(d<best){best=d;bi=i;bt=t}}r.pi=bi;r.P=r.cum[bi]+(r.cum[bi+1]-r.cum[bi])*bt}
var C3P={race5:{seiji:.96,gen:.92,rin:.95,tetsu:.945},coop:{kir:.98,shadow:.98},srace:{tetsu:.95,b1:.92,b2:.91,b3:.9}};
var C3FIN={seiji:'Сэйдзи первый на финише',gen:'Гэн первый на финише',rin:'Рин первая на финише',tetsu:'Тэцу первый на финише'};
function c3o(k,x){var o={},b=C3R[k];for(var q in b)o[q]=b[q];for(q in x)o[q]=x[q];return o}
function c3Spawn(m){var z=m.zone&&stZone(m.zone);
 var pc=C3P[m.type]||{};
 if(m.type==='coop'){var u0=c3Lane(z,0),u1=c3Lane(z,1);c3Pace(c3CourseRiv(z,c3o('kir',{s:z.s0,u:u1,vmax:430})),pc.kir);var S0=c3Pace(c3CourseRiv(z,c3o('shadow',{s:Math.max(z.s0-300,(z.road.za||0)+20),u:u0,vmax:430,drift:0})),pc.shadow);S0.follow=1;ST.kirFin=0;return}
 if(m.type==='tandem'&&m.leader==='rin'){var R=c3CourseRiv(z,c3o('rin',{s:z.s0+95,u:c3Lane(z,0),vmax:400,sk:.9}));R.sk0=.9;return}
 if(m.type==='race5'){var a=c3Lane(z,0),b=c3Lane(z,1),s0=z.s0;
  // staggered grid (Seiji on pole, Gen ahead in the other lane, Rin beside you, Tetsu right behind): there is always a lane to go for
  c3Pace(c3CourseRiv(z,c3o('seiji',{s:s0+130,u:a,vmax:470,drift:0})),pc.seiji);var G=c3Pace(c3CourseRiv(z,c3o('gen',{s:s0+70,u:b,vmax:450})),pc.gen);G.block=1;
  c3Pace(c3CourseRiv(z,c3o('rin',{s:Math.max(s0-45,(z.road.za||0)+10),u:b,vmax:450})),pc.rin);var T=c3Pace(c3CourseRiv(z,c3o('tetsu',{s:Math.max(s0-70,(z.road.za||0)+10),u:a,vmax:440})),pc.tetsu);T.ram=1;return}
 if(m.type==='duel'&&m.rival==='ryu'){var Rr=clamp(z.r*.5,55,100),pts=[];for(var i=0;i<36;i++){var an=-i/36*TAU;pts.push([z.x+Math.cos(an)*Rr,z.y+Math.sin(an)*Rr])}
  rivMake(c3o('ryu',{x:z.x+Rr,y:z.y,a:-Math.PI/2,pts:pts,loop:true,vmax:250,wait:true}));ST.gen=0;ST.photo=0;return}}
// ---- start of each new mission type
var _smC3=stMain;stMain=function(m){ST.t=0;ST.ride=false;ST.close=0;ST.tot=0;ST.touch=0;ST.tcd=0;ST.far=0;ST.fail='';ST.sv=null;ST.esc=0;ST.hid=0;ST.pin=0;ST.rams=0;ST.pg=0;ST.ctouch=0;ST.cmax=0;ST.cbrk=0;ST.ccd=0;ST.kirFin=0;ST.rte=null;ST.cd=0;
 if(m.type==='choice'){ST.t=0;stChoice(m);return}
 if(m.type==='pursuit'){ST.t=0;ST.prog=0;ST.far=0;var legs=[],fx=car.x,fy=car.y,way=(m.via||[]).concat([m.dest]);for(var w=0;w<way.length;w++){var d=stPlace(way[w]),dq=d.g||d,pp=gpsPathFrom(fx,fy,dq.x,dq.y);if(!pp){ST.act=null;return}legs.push(pp);fx=dq.x;fy=dq.y}var pts=c3Join(legs).pts;
  var cum=0,k=1;for(;k<pts.length;k++){cum+=Math.hypot(wd(pts[k][0],pts[k-1][0]),wd(pts[k][1],pts[k-1][1]));if(cum>150)break}
  var P0=pts[Math.min(k,pts.length-2)],P1=pts[Math.min(k+1,pts.length-1)];var V=rivMake(c3o('van',{x:P0[0],y:P0[1],a:Math.atan2(wd(P1[1],P0[1]),wd(P1[0],P0[0])),pts:pts.slice(k),loop:false,vmax:300,wait:true,drift:0}));V.sk=.88;V.go=0;WP=null;return}
 if(m.type==='police'){ST.t=0;ST.esc=0;ST.hid=0;ST.pin=0;WP=null;stSpawnRin();var C=RIV[RIV.length-1];var o=C3R.cop;C.id=o.id;C.name=o.name;C.col=o.tag;C.car=o.car;C.spr=playerSprite(o.car,BODYC[o.col],STRC[o.str]);C.siren=1;C.ramMsg='Ватанабэ толкнул!';return}
 if(m.type==='srace'){ST.t=0;ST.cd=3.2;ST.cdn=4;ST.fin=0;var legs=[];for(var i=0;i<m.route.length-1;i++){var A=stPlace(m.route[i]),B=stPlace(m.route[i+1]),Aq=A.g||A,Bq=B.g||B,p=gpsPathFrom(Aq.x,Aq.y,Bq.x,Bq.y);if(!p){ST.act=null;return}legs.push(p)}
  var J=c3Join(legs),pts2=J.pts,ends=J.ends;
  var cm=[0];for(i=1;i<pts2.length;i++)cm.push(cm[i-1]+Math.hypot(wd(pts2[i][0],pts2[i-1][0]),wd(pts2[i][1],pts2[i-1][1])));
  ST.rte={pts:pts2,cum:cm,L:cm[cm.length-1],i:0,s:0,ci:0,cp:ends.map(function(e,j){return{k:m.route[j+1],i:e,s:cm[e],x:pts2[e][0],y:pts2[e][1]}})};
  function at(s){var j=0;while(j<cm.length-2&&cm[j+1]<s)j++;var t=(s-cm[j])/((cm[j+1]-cm[j])||1),a=pts2[j],b=pts2[j+1];return[a[0]+wd(b[0],a[0])*t,a[1]+wd(b[1],a[1])*t,Math.atan2(wd(b[1],a[1]),wd(b[0],a[0]))]}
  // the grid goes on the first straight stretch (not in the gate lane or a turn)
  var g0=120;for(var sg=120;sg<Math.min(1500,cm[cm.length-1]-400);sg+=10){var h0=at(sg)[2],ok=true;for(var q=20;q<=280&&ok;q+=20)if(Math.abs(angd(at(sg+q)[2],h0))>.3)ok=false;if(ok){g0=sg;break}}
  var st=at(g0+40);car.x=st[0];car.y=st[1];car.a=st[2];car.vx=car.vy=car.w=0;car.l=0;car.dr=false;cam.x=car.x;cam.y=car.y;cam.a=car.a;ST.sx=car.x;ST.sy=car.y;ST.sa=car.a;preload();
  // grid: the player starts at the back row with Tetsu; the gang is spread ahead
  [['tetsu',0,0,1],['b1',90,0,0],['b2',140,0,0],['b3',190,0,0]].forEach(function(q){var g=at(g0+q[1]),nx=-Math.sin(g[2]),ny=Math.cos(g[2]),off=q[2];
   var o=q[0]==='tetsu'?c3o('tetsu',{}):{id:q[0],name:'Бульдозер',tag:'#ffd23a',car:q[0]==='b1'?10:q[0]==='b2'?6:1,col:3,str:1,glow:0};
   o.x=g[0]+nx*off;o.y=g[1]+ny*off;o.a=g[2];o.pts=pts2;o.loop=false;o.vmax=430;o.wait=true;o.drift=q[3];var R=c3Pace(c3Riv(o),C3P.srace[q[0]],1.12);R.ram=1;R.s0=0});
  var c0=ST.rte.cp[0];stRoute(c0.x,c0.y);return}
 _smC3(m);
 if(isZR(m)&&ST.act===m)c3Spawn(m)};
// stMain spawns Reiko for every tandem and Gen for every duel: take them out again for the chapter 3 versions
var _isZRc3=isZR;isZR=function(m){return _isZRc3(m)||(m&&(m.type==='coop'||m.type==='race5'))};
var _sRk=stSpawnReiko;stSpawnReiko=function(z){var m=ST.act;if(m&&m.leader&&m.leader!=='reiko')return;_sRk(z)};
var _sGn=stSpawnGen;stSpawnGen=function(z){var m=ST.act;if(m&&m.rival&&m.rival!=='gen')return;_sGn(z)};
// ---- rival behaviours: Gen blocks, the rammers go for you and get stunned by walls, the shadow car tails you
function c3Lat(z,x,y,s){var r=z.road;r.pt(zcs(r,s),TMP);return wd(x,TMP[0])*-TMP[3]+wd(y,TMP[1])*TMP[2]}
var _rivAIc3=rivAI;rivAI=function(r,dt){
 if(r.stun>0){r.stun-=dt;return{s:0,t:0,b:.35,h:0}}
 var I=_rivAIc3(r,dt),m=ST.act;
 if(r.block&&ZS&&m&&m.zone===ZS.z.id&&ZS.ph==='go'){var z=ZS.z,gs=stRoadS(r),ps=ZS.s,gap=gs-ps;
  r.bt=(r.bt||0)+(r.bon?dt:0);if(r.bon&&r.bt>2.5){r.bon=0;r.boff=TIME+4}
  z.road.pt(zcs(z.road,gs),TMP);var rd=Math.atan2(TMP[3],TMP[2]),al=Math.abs(angd(r.c.a,rd))<.3&&!r.c.dr&&r.c.sp>150;
  if(gap>8&&gap<120&&al&&(car.l|0)===(r.l|0)&&TIME>(r.boff||0)){if(!r.bon){r.bon=1;r.bt=0}var lu=c3Lat(z,car.x,car.y,ps);z.road.pt(zcs(z.road,gs+40+r.c.sp*.2),TMP);var tx=TMP[0]-TMP[3]*lu,ty=TMP[1]+TMP[2]*lu,err=angd(Math.atan2(wd(ty,r.c.y),wd(tx,r.c.x)),r.c.a);I.s=clamp(I.s*.3+err*1.4,-.45,.45);
   if(!r.bmsg||TIME-r.bmsg>7){r.bmsg=TIME;flash(L('Гэн тебя блокирует!'),1)}}}
 return I};
function c3Rammers(dt){for(var i=0;i<RIV.length;i++){var R=RIV[i];if(R.wait)continue;
 // wedged somewhere for a while (and not in front of you): put back on its line
 R.jam=R.c.sp<25&&!(R.stun>0)?(R.jam||0)+dt:0;
 if(R.jam>2.2&&(Math.hypot(wd(R.x,car.x),wd(R.y,car.y))>220||R.jam>5)){R.jam=0;var T=[0,0,0];rivAt(R,R.P+40,T);R.c.x=T[0];R.c.y=T[1];R.c.a=T[2];R.c.vx=R.c.vy=R.c.w=0;R.c.dr=false;R.x=T[0];R.y=T[1];R.stuck=0;R.rev=0;R.P+=40}
 if(R.hm>85&&!(R.stun>0)&&R.ram){R.stun=3;R.hm=0;if(Math.hypot(wd(R.x,car.x),wd(R.y,car.y))<400)flash(L(R.id==='tetsu'?'Тэцу оглушён!':'«Бульдозер» оглушён!'),1)}
 if(!R.ram)continue;var dd=Math.hypot(wd(car.x,R.c.x),wd(car.y,R.c.y));R.back=(R.back||0)-dt;R.cd=(R.cd||0)-dt;R.hunt=1;R.atk=dd<120&&R.back<=0&&!(R.stun>0)&&(R.c.l|0)===(car.l|0);if(R.atk)c3Proj(R);
  if(dd<R.c.hx+car.hx+5&&R.cd<=0){var rel=Math.hypot(R.c.vx-car.vx,R.c.vy-car.vy);if(rel>35){R.cd=2.2;R.back=1.8;flash(L(R.id==='tetsu'?'Тэцу таранит!':'Таран!'),.8);if(S.vib&&navigator.vibrate)try{navigator.vibrate(40)}catch(e){}}}}}
// ---- per-frame logic of the new types
var _skC3=stKinds;stKinds=function(m,dt){
 // knocks count once you are on your way (not while pulling out of the start spot)
 if(m.clean&&!ST.ride&&!ST.arr){var sp0=stPlace(m.at),grace=ST.t<2||(sp0&&Math.hypot(wd(sp0.x,car.x),wd(sp0.y,car.y))<130);var hit=!grace&&(ST.cmax>(m.cleanMin||28)||ST.cbrk);ST.cmax=0;ST.cbrk=0;ST.ccd=(ST.ccd||0)-dt;if(hit&&ST.ccd<=0){ST.ccd=.9;ST.ctouch=(ST.ctouch||0)+1;
   if(ST.ctouch>=m.clean){stDone(false,m.cleanFail||(m.clean>1?'Хана вышла из машины':'задел'));return true}flash(L('удар!')+' '+ST.ctouch+'/'+m.clean,1)}}
 if(m.type==='choice')return true;
 if(m.type==='pursuit'){var V=RIV[0];if(!V)return false;var dd=Math.hypot(wd(V.x,car.x),wd(V.y,car.y));
  // it pulls away once you are close (or after a few seconds), then stays catchable: stuck in traffic when you fall far behind
  if(!V.go&&(dd<230||ST.t>6)){V.go=1;V.wait=false;flash(L('Вон он! Не упусти!'),1.1)}
  V.vmax=dd<120?280:dd>700?90:dd>480?150:dd>300?200:250;V.sk=dd<120?.88:dd>480?.6:.8;if((V.c.l|0)===(car.l|0)&&dd<135){ST.prog+=dt;if(!ST.pg||ST.prog-ST.pg>=5){ST.pg=Math.floor(ST.prog/5)*5;if(ST.pg>0)popup(L('номер')+' '+Math.round(ST.prog/m.need*100)+'%','mul')}}
  if(ST.prog>=m.need){V.wait=true;popup(L('Номер снят!'),'big');stDone(true);return true}
  ST.far=dd>1400?ST.far+dt:0;if(ST.far>6){stDone(false,'потерял фургон');return true}
  V.jam=V.c.sp<25&&V.go?(V.jam||0)+dt:0;if(V.jam>2.5&&dd>220){V.jam=0;var TJ=[0,0,0];rivAt(V,V.P+40,TJ);V.c.x=TJ[0];V.c.y=TJ[1];V.c.a=TJ[2];V.c.vx=V.c.vy=V.c.w=0;V.x=TJ[0];V.y=TJ[1]}
  // it never just parks: at the end of its route it doubles back through the docks
  if(V.L-V.P<70){var lp=m.loop||['port'];ST.vl=(ST.vl||0)+1;var nq=stPlace(lp[ST.vl%lp.length]),ng=nq.g||nq,np=gpsPathFrom(V.x,V.y,ng.x,ng.y);if(np)rivPath(V,np,false)}
  if(ST.t>m.limit){stDone(false,m.timeout||'время вышло');return true}return false}
 if(m.type==='police'){var C=RIV[0];if(!C)return false;var d2=stRinUpdate(C,dt);
  ST.esc=d2>520?ST.esc+dt:0;ST.hid=(C.nolos>0&&d2>260)?(ST.hid||0)+dt:0;if(ST.esc>3||ST.hid>5){popup(L('Оторвался!'),'big');stDone(true);return true}
  ST.pin=(d2<58&&car.sp<30)?(ST.pin||0)+dt:Math.max(0,(ST.pin||0)-dt*2);if(ST.pin>3){stDone(false,'Ватанабэ тебя прижал');return true}
  if(ST.t>m.limit){stDone(false,'полиция не отстала');return true}return false}
 if(m.type==='coop'&&ZS&&ZS.z.id===m.zone){var K=RIV[0],Sh=RIV[1];if(!K)return false;var go=ZS.ph==='go';K.wait=!go;if(Sh)Sh.wait=!go;if(!go)return false;
  var lead=stRoadS(K)-ZS.s;c3Band(K,clamp(1-lead/350,.5,1.15));K.vmax=lead>260?170:K.V0*1.3;
  if(Sh){var gap=ZS.s-stRoadS(Sh);c3Band(Sh,clamp(1+(gap-220)/300,.5,1.15));Sh.vmax=gap<120?150:Sh.V0*1.3}
  if(!ST.kirFin&&stRoadS(K)>=ZS.z.s1)ST.kirFin=TIME;if(ST.kirFin)K.vmax=140;
  if(ST.kirFin&&TIME-ST.kirFin>10){ST.fail='Кир финишировал без тебя';zoneEnd('time');return true}return false}
 if(m.type==='race5'&&ZS&&ZS.z.id===m.zone){var ps=ZS.s;c3Rammers(dt);for(var i=0;i<RIV.length;i++){var R=RIV[i];R.wait=ZS.ph!=='go';if(R.wait)continue;var ld=stRoadS(R)-ps;
   // ahead of you: a touch slower, so a clean driver can pass; behind you: a touch quicker, so they keep the pressure on
   c3Band(R,ld>0?clamp(.97-ld/3000,.88,.97):clamp(1-ld/1500,1,1.06));if(stRoadS(R)>=ZS.z.s1){ST.fail=C3FIN[R.id]||'соперник первым на финише';zoneEnd('time');return true}}return false}
 if(m.type==='srace'){var T=ST.rte;if(!T)return false;
  if(ST.cd>0){ST.cd-=dt;car.vx=car.vy=0;car.w=0;car.x=ST.sx;car.y=ST.sy;car.a=ST.sa;car.dr=false;var n=Math.ceil(ST.cd);if(n<ST.cdn&&n>0){ST.cdn=n;popup(String(n),'big');if(S.snd)try{auTone(660,.06,.15,'square')}catch(e){}}
   if(ST.cd<=0){popup(L('Вперёд!'),'big');if(S.snd)try{auTone(990,.07,.3,'square')}catch(e){}RIV.forEach(function(R){R.wait=false})}return false}
  // your progress along the route
  // (a near window first; if you left the line, look along the next stretch of the route — no skipping ahead)
  function prj(k0,k1,lim){var bi=-1,bd=1e18,bs=0;for(var k=Math.max(0,k0);k<Math.min(T.pts.length-1,k1);k++){var p0=T.pts[k],p1=T.pts[k+1],ex=wd(p1[0],p0[0]),ey=wd(p1[1],p0[1]),l2=ex*ex+ey*ey||1,dx=wd(car.x,p0[0]),dy=wd(car.y,p0[1]),tt=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*tt,qy=dy-ey*tt,q2=qx*qx+qy*qy,sk=T.cum[k]+Math.sqrt(l2)*tt;if(sk>lim)break;if(q2<bd){bd=q2;bi=k;bs=sk}}return{i:bi,d:Math.sqrt(bd),s:bs}}
  var pj=prj(T.i-4,T.i+40,1e9);if(pj.d>70){var p2=prj(T.i,T.pts.length,T.s+700);if(p2.d<pj.d)pj=p2}if(pj.d<90){T.i=pj.i;T.s=Math.max(T.s,pj.s)}
  var cp=T.cp[T.ci];if(T.ci<T.cp.length-1&&(T.s>=cp.s-60||Math.hypot(wd(cp.x,car.x),wd(cp.y,car.y))<75)){T.ci++;T.s=Math.max(T.s,cp.s);T.i=Math.max(T.i,cp.i);popup(LT(stPlace(cp.k).name)+' ✓','mul');var nc=T.cp[T.ci];stRoute(nc.x,nc.y)}
  else if((!WP||!WP.pts)&&TIME-(ST.rt||0)>1.5)stRoute(cp.x,cp.y);
  c3Rammers(dt);
  for(var j=0;j<RIV.length;j++){var Q=RIV[j],ld2=Q.P-T.s;c3Band(Q,clamp(1-ld2/1200,.85,1.1));if(Q.L-Q.P<40){stDone(false,(Q.id==='tetsu'?'Тэцу':'«Бульдозер»')+' первый на финише');return true}}
  var f=T.pts[T.pts.length-1];if(T.ci===T.cp.length-1&&(T.L-T.s<60||Math.hypot(wd(f[0],car.x),wd(f[1],car.y))<60)){popup(L('первый на финише!'),'big');stDone(true);return true}
  if(ST.t>m.limit){stDone(false,'не успел к финишу');return true}return false}
 return _skC3(m,dt)};
// a clean run counts every knock: walls, cars, poles, anything you break
// (being hit by traffic while you are nearly standing still is not your knock)
var _coC3=collide;collide=function(c){var sp0=c===car?c.sp:0,n=_coC3(c);if(c===car&&ST.act&&ST.act.clean&&sp0>45&&COLL.max>(ST.cmax||0))ST.cmax=COLL.max;return n};
var _bpC3=breakProp;breakProp=function(p,c,ai){if(!ai&&c===car&&ST.act&&ST.act.clean)ST.cbrk=1;_bpC3(p,c,ai)};
// ---- zone finish for the zone types of this chapter
var _zeC3=zoneEnd;zoneEnd=function(why){var m=ST.act,z=ZS&&ZS.z;
 if(!m||!z||m.zone!==z.id||(m.type!=='coop'&&m.type!=='race5'))return _zeC3(why);
 if(ZS)bank();_zeSt(why);var ok,rs,ln;
 if(m.type==='coop'){var K=RIV[0],left=K?Math.max(0,z.s1-stRoadS(K)):9e9,kt=ST.kirFin?TIME-ST.kirFin:-left/Math.max(120,K?K.sp:0);
  ok=why==='fin'&&!ST.fail&&Math.abs(kt)<=10;rs=ST.fail||(why==='off'?'сошёл с трассы':why!=='fin'?'не успел к финишу':'Кир далеко отстал');ln=ok?L('Кир рядом')+' · '+Math.abs(kt).toFixed(1)+' '+L('с'):L(rs)}
 else{ok=why==='fin'&&!ST.fail;rs=ST.fail||(why==='off'?'сошёл с трассы':'не успел к финишу');ln=ok?L('первый на финише!'):L(rs)}
 $('zb').style.display='none';stResult(m,ok,ln);stDone(ok,ok?'':rs)};
// ---- objective HUD
var _shC3=stHud;stHud=function(){_shC3();var m=ST.act,e=$('sobj');if(!m||!e||!ST.mode||mode!=='game'||ST.ride)return;var t=null,bar=-1;
 if(m.type==='pursuit'&&RIV[0]){var V=RIV[0];t=L('фургон')+' '+Math.round(Math.hypot(wd(V.x,car.x),wd(V.y,car.y))/4)+' '+L('м')+' · '+L('номер')+' '+Math.min(100,Math.round(ST.prog/m.need*100))+'% · '+Math.max(0,Math.ceil(m.limit-ST.t))+' '+L('с');bar=ST.prog/m.need}
 else if(m.type==='police'&&RIV[0]){var C=RIV[0];t=L('полиция')+' '+Math.round(Math.hypot(wd(C.x,car.x),wd(C.y,car.y))/4)+' '+L('м')+(ST.hid>0?' · '+L('потеряли тебя'):C.atk?' · '+L('идёт на таран!'):'')+' · '+Math.max(0,Math.ceil(m.limit-ST.t))+' '+L('с');bar=clamp(Math.max(ST.esc/3,(ST.hid||0)/5),0,1)}
 else if(m.type==='coop'&&ZS&&RIV[0]){var K=RIV[0];t=L('Кир')+' '+Math.round((stRoadS(K)-ZS.s)/4)+' '+L('м')+' · '+L('до финиша')+' '+Math.max(0,Math.round((ZS.z.s1-ZS.s)/4))+' '+L('м');bar=clamp((ZS.s-ZS.z.s0)/(ZS.z.s1-ZS.z.s0),0,1)}
 else if(m.type==='race5'&&ZS){var pos=1;RIV.forEach(function(R){if(stRoadS(R)>ZS.s)pos++});t=L('место')+' '+pos+'/5 · '+L('до финиша')+' '+Math.max(0,Math.round((ZS.z.s1-ZS.s)/4))+' '+L('м');bar=clamp((ZS.s-ZS.z.s0)/(ZS.z.s1-ZS.z.s0),0,1)}
 else if(m.type==='srace'&&ST.rte){var T=ST.rte,pos2=1;RIV.forEach(function(R){if(R.P>T.s)pos2++});var cq=T.cp[T.ci];t=ST.cd>0?L('старт через')+' '+Math.ceil(ST.cd):L('место')+' '+pos2+'/5 · '+(T.ci<T.cp.length-1?L('через')+' '+LT(stPlace(cq.k).name)+' · ':'')+L('до финиша')+' '+Math.max(0,Math.round((T.L-T.s)/4))+' '+L('м');bar=clamp(T.s/T.L,0,1)}
 else if(m.type==='choice')t=L('выбери в карточке');
 if(m.clean&&!ST.arr){var base=e.querySelector('span');var extra=' · '+L('удары')+' '+(ST.ctouch||0)+'/'+m.clean;if(base&&t===null){base.textContent+=extra;return}if(t!==null)t+=extra}
 if(t===null)return;e.innerHTML='<b>'+stEsc(LT(m.title))+'</b><span>'+stEsc(t)+'</span>'+(bar>=0?'<i><u style="width:'+Math.round(clamp(bar,0,1)*100)+'%"></u></i>':'')};
var _stC3=stTarget;stTarget=function(){var m=ST.act;if(ST.mode&&m&&!ST.ride){if(m.type==='pursuit'&&RIV[0])return{x:RIV[0].x,y:RIV[0].y};if(m.type==='srace'&&ST.rte){var cq=ST.rte.cp[ST.rte.ci];return{x:cq.x,y:cq.y}}}return _stC3()};
// ---- police lights and siren
var _rdC3=rivDraw;rivDraw=function(z){_rdC3(z);for(var i=0;i<RIV.length;i++){var r=RIV[i];if(!r.siren||(r.l|0)!==z)continue;var x=SX(r.x),y=SY(r.y);if(x<-40||y<-40||x>VW+40||y>VH+40)continue;var ph=Math.floor(TIME*8)%2,ra=Math.round(r.a/(Math.PI/32))*(Math.PI/32),ca=Math.cos(ra),sa=Math.sin(ra);
 cx.fillStyle=ph?'#ff3a3a':'#3a7aff';cx.fillRect(Math.round(x-sa*3-1),Math.round(y+ca*3-1),2,2);cx.fillStyle=ph?'#3a7aff':'#ff3a3a';cx.fillRect(Math.round(x+sa*3-1),Math.round(y-ca*3-1),2,2)}};
var _edC3=emisDraw;emisDraw=function(a){_edC3(a);for(var i=0;i<RIV.length;i++){var r=RIV[i];if(!r.siren)continue;var x=SX(r.x),y=SY(r.y);if(x<-60||y<-60||x>VW+60||y>VH+60)continue;var ph=Math.floor(TIME*8)%2;gl(x,y,26,26,ph?[255,58,58]:[58,122,255],.55+.35*a)}fwDraw(a)};
var SIRT=0;function c3Siren(dt){var m=ST.act;if(!m||m.type!=='police'||!S.snd||mode!=='game')return;SIRT-=dt;if(SIRT<=0){SIRT=.42;var hi=Math.floor(TIME/.42)%2;try{auTone(hi?960:720,.025,.36,'sawtooth')}catch(e){}}}
// ---- night for chapter 3 (when the time of day is on auto)
// (the night of chapter 3 is now set by the story clock in 07v_show)
// ---- fireworks over the festival (fireworks-night missions, and a while after)
var FW={p:[],t:0,until:0,cx:null,cy:null};
// shells burst high above the city: kept in view space, sliding slowly against the camera (parallax), so they stay on screen at speed
function fwOn(){var m=ST.act;return !!(m&&m.fw)||TIME<FW.until}
function fwUpdate(dt){if(FW.cx==null||!cam){if(cam){FW.cx=cam.x;FW.cy=cam.y}return}var dcx=wd(cam.x,FW.cx),dcy=wd(cam.y,FW.cy);FW.cx=cam.x;FW.cy=cam.y;if(Math.abs(dcx)>200||Math.abs(dcy)>200)dcx=dcy=0;
 if(!fwOn()&&!FW.p.length)return;FW.t-=dt;
 if(fwOn()&&FW.t<=0&&mode==='game'){FW.t=.45+Math.random()*1.0;var x=VW*(.12+Math.random()*.76),y=VH*(.1+Math.random()*.45);FW.p.push({k:'r',x:x,y:VH+8,x0:x+(Math.random()-.5)*30,y0:VH+8,tx:x,ty:y,t:0,d:.85+Math.random()*.4,c:[[255,90,160],[255,210,58],[61,240,176],[106,176,255],[255,120,60],[230,230,255]][Math.random()*6|0]})}
 for(var i=FW.p.length-1;i>=0;i--){var q=FW.p[i];q.t+=dt;q.x-=dcx*.25;q.y-=dcy*.25;if(q.k==='r'){q.tx-=dcx*.25;q.ty-=dcy*.25;q.x0-=dcx*.25;q.y0-=dcy*.25}
  if(q.k==='r'){var u=Math.min(1,q.t/q.d),e=1-(1-u)*(1-u);q.x=q.x0+(q.tx-q.x0)*e;q.y=q.y0+(q.ty-q.y0)*e;
   if(q.t>=q.d){FW.p.splice(i,1);var n=56+(Math.random()*30|0),sp=(110+Math.random()*80)*VW/390,two=Math.random()<.35,ring=Math.random()<.3;for(var k=0;k<n;k++){var an=k/n*TAU+Math.random()*.08,v=sp*(ring?.95+Math.random()*.1:.55+Math.random()*.5);FW.p.push({k:'s',x:q.tx,y:q.ty,vx:Math.cos(an)*v,vy:Math.sin(an)*v,t:0,l:1.5+Math.random()*.9,c:two&&k%2?[255,244,220]:q.c})}
    FW.p.push({k:'f',x:q.tx,y:q.ty,t:0,l:.5,c:q.c});if(S.snd&&mode==='game')try{auNoise(120,.8,.3,.32,'lowpass');auNoise(900,1,.06,.12);setTimeout(function(){if(mode==='game'){auNoise(5200,4,.045,.06);auNoise(3800,3,.035,.05)}},380)}catch(e){}}continue}
  if(q.t>q.l){FW.p.splice(i,1);continue}if(q.k==='s'){var f=Math.exp(-1.5*dt);q.vx*=f;q.vy=q.vy*f+20*dt;q.x+=q.vx*dt;q.y+=q.vy*dt}}
 if(FW.p.length>700)FW.p.splice(0,FW.p.length-700)}
// drawn in the additive light pass: bright in the night, still visible by day
function fwDraw(a){if(!FW.p.length)return;var bright=.55+.45*Math.min(1,a);
 for(var i=0;i<FW.p.length;i++){var q=FW.p[i],x=q.x,y=q.y;
  if(q.k==='r'){cx.globalAlpha=bright;cx.fillStyle='#fff4d0';cx.fillRect(Math.round(x)-1,Math.round(y),2,3);gl(x,y+3,7,9,[255,200,140],.55*bright);continue}
  if(q.k==='f'){var ff=1-q.t/q.l;gl(x,y,90*ff+20,90*ff+20,q.c,ff*.8*bright);continue}
  var al=(1-q.t/q.l);al=Math.min(1,al*1.6)*bright;if(al<.02)continue;cx.globalAlpha=al;cx.fillStyle='rgb('+q.c[0]+','+q.c[1]+','+q.c[2]+')';var sz=q.t<.5?3:q.t<1.2?2:1;cx.fillRect(Math.round(x-sz/2),Math.round(y-sz/2),sz,sz);
  // a short trail behind each spark
  if(q.t<1){cx.globalAlpha=al*.5;cx.fillRect(Math.round(x-q.vx*.06),Math.round(y-q.vy*.06),2,2);cx.globalAlpha=al*.3;cx.fillRect(Math.round(x-q.vx*.12),Math.round(y-q.vy*.12),1,1)}if(i%2===0)gl(x,y,10,10,q.c,al*.45)}
 cx.globalAlpha=1}
var _udC3=stUpdate;stUpdate=function(dt){_udC3(dt);fwUpdate(dt);c3Siren(dt)};
var _dnC3=stDone;stDone=function(ok,why){var m=ST.act;ST.lastWhy=why||'';if(m&&m.fw&&ok)FW.until=TIME+40;_dnC3(ok,why)};
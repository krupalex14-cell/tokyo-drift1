// ===== chapter 4 «Призрак»: the car with no lights on Kumo, Reiko's scar, Misha's onsen garage, Kageyama's offer, the race in the dark =====
CHAP[4]={t:{ru:'Призрак',en:'The Ghost'},tod:{ru:'глубокая ночь · перевал Кумо',en:'deep night · Kumo pass'},goal:{ru:'Найти Призрака Кумо, заслужить его доверие и получить карту той ночи',en:'Find the Ghost of Kumo, earn his trust and get the card from that night'},pay:5000};
CHAP[5]={t:{ru:'Тени',en:'The Shadows'},tod:{ru:'вечер · эстакада С1',en:'evening · the C1 expressway'}};
var PH_G4=['Гэн · по телефону','Gen · on the phone'],PH_KG=['Кагэяма · по телефону','Kageyama · on the phone'],PH_OK=['Окада · по телефону','Okada · on the phone'],
 KUR=['Курода','Kuroda'],PH_KU=['Курода · по телефону','Kuroda · on the phone'];
STORY.push(
 {id:'e1',ch:4,title:{ru:'Машина без фар',en:'The car with no lights'},at:'kumo',ride:'kumos',ridePass:'',type:'ghost',zone:'tg1',lead:'ghost',dark:1,near:240,need:.6,reward:400,
  lostMsg:'потерял Призрака',farMsg:'Призрак ушёл в темноту',
  goal:{ru:'Найди на Кумо машину без фар и держись рядом с ней больше половины перевала',en:'Find the car with no lights on Kumo and stay close to it for more than half the pass'},
  why:{ru:'На кассете «12 лет назад» — машина без фар на перевале Кумо. Местные говорят, она ездит там до сих пор.',en:'The “12 years ago” tape shows a car with no lights on the Kumo pass. Locals say it still drives there.'},
  pre:[D('kir','Я остаюсь в мастерской — перегоню кассету в цифру. Если там что-то есть, найду.','I’m staying at the garage to digitize the tape. If there’s anything on it, I’ll find it.',PH_K),
       D('lyokha','А я съезжу посмотрю на ваше привидение.','And I’ll go and take a look at your ghost.'),
       D('kir','Лёха. Если машина без фар — она тебя видит, а ты её нет. Не геройствуй.','Lyokha. If it has no lights, it sees you and you don’t see it. Don’t play the hero.',PH_K)],
  arrive:[D('lyokha','(Пусто. Ни огонька. Только каменные фонари вдоль дороги…)','(Empty. Not a single light. Only stone lanterns along the road…)',LYO_T),
       D('lyokha','(…и чёрная машина у обочины. Без единой фары.)','(…and a black car by the roadside. Without a single light.)',LYO_T),
       D('lyokha','Фары выключу. Посмотрим, кто кого.','I’ll switch my lights off. Let’s see who wins.')],
  post:[D('ghost','Ты ездишь как Миша. Это не комплимент.','You drive like Misha. That isn’t a compliment.'),
        D('lyokha','Вы его знали? Он просил передать: он не злится.','You knew him? He asked me to tell you: he’s not angry.'),
        D('ghost','(долго молчит)','(a long silence)'),
        D('ghost','Уезжай с Кумо, парень. Здесь ночью темно. Спроси Рэйко, откуда у неё шрам.','Leave Kumo, kid. It’s dark here at night. Ask Reiko where her scar came from.'),
        D('lyokha','(Уехал. Без света, вслепую — и ни разу не задел отбойник.)','(Gone. No lights, blind — and he never once touched the barrier.)',LYO_T)],
  fail:[D('lyokha','(Пропал. Будто его и не было. Ещё раз.)','(Vanished. As if he was never there. Again.)',LYO_T)]},
 {id:'e2',ch:4,title:{ru:'Шрам',en:'The scar'},at:'ramen',pass:'reiko',type:'deliv',stops:['kumotop'],clean:3,cleanMin:50,cleanFail:'Рэйко попросила остановить',reward:300,
  goal:{ru:'Довези Рэйко до вершины Кумо. Три удара — и она выйдет',en:'Drive Reiko to the top of Kumo. Three hits and she gets out'},
  why:{ru:'Призрак сказал спросить Рэйко про шрам. Она расскажет — но только там, где всё случилось.',en:'The Ghost told you to ask Reiko about her scar. She’ll tell you — but only where it happened.'},
  pre:[D('reiko','Курода. Двенадцать лет не слышала этого имени.','Kuroda. I haven’t heard that name in twelve years.'),
       D('lyokha','Он сказал спросить вас про шрам.','He told me to ask you about your scar.'),
       D('reiko','(долго молчит) Здесь не расскажу. Отвези меня на вершину Кумо.','(a long silence) Not here. Drive me to the top of Kumo.'),
       D('lyokha','Сами за руль не хотите?','You don’t want to drive yourself?'),
       D('reiko','Я двенадцать лет не садилась за руль на Кумо. И не тряси. Я этого не люблю.','I haven’t driven on Kumo in twelve years. And don’t shake me around. I don’t like it.')],
  talk:[[3,D('reiko','Миша учил меня ездить. Курода — чинить. А я была девчонкой из раменной.','Misha taught me to drive. Kuroda taught me to fix cars. I was just a girl from the ramen shop.')],
        [12,D('reiko','В ту ночь фонари на Кумо тоже не горели.','That night the lanterns on Kumo weren’t lit either.')],
        [-450,D('reiko','Почти приехали. Видишь тории? Там.','Almost there. See the torii? Over there.')]],
  stopLines:{kumotop:[D('reiko','Двенадцать лет назад здесь была гонка за землю под мастерской. Миша, я и Курода — против Кагэямы.','Twelve years ago there was a race here for the land under the garage. Misha, Kuroda and I — against Kageyama.'),
       D('reiko','Выиграли бы мы — Кагэяма оставил бы мастерскую в покое. Навсегда.','If we had won, Kageyama would have left the garage alone. Forever.'),
       D('reiko','На последнем повороте Кагэяма столкнул мою машину с дороги. Она загорелась.','On the last turn Kageyama shoved my car off the road. It caught fire.'),
       D('reiko','Миша бросил гонку и вытащил меня. До финиша он так и не доехал.','Misha abandoned the race and pulled me out. He never made it to the finish.'),
       D('lyokha','«Она ещё не доехала»…','“She hasn’t arrived yet”…'),
       D('reiko','Полиция записала виноватым Мишу. Он не спорил — чтобы меня не таскали по судам.','The police blamed Misha. He didn’t argue — so they wouldn’t drag me through the courts.'),
       D('reiko','А Курода всё видел. И с тех пор ездит здесь без света.','Kuroda saw everything. And ever since, he drives here without lights.')]},
  post:[D('reiko','Курода не поверит человеку, который должен Кагэяме. А ты теперь должен Кагэяме.','Kuroda won’t trust a man who owes Kageyama. And now you owe Kageyama.'),
        D('lyokha','И что делать?','So what do I do?'),
        D('reiko','Ездить как Миша. В темноте. Отвези меня обратно — урок будет сегодня же.','Drive like Misha. In the dark. Take me back — the lesson is tonight.')],
  fail:[D('reiko','Останови. Дальше я пешком.','Stop the car. I’ll walk from here.')]},
 {id:'e3',ch:4,title:{ru:'Урок 4. Слепая ночь',en:'Lesson 4. A blind night'},at:'kumotop',auto:true,ride:'ramen',ridePass:'reiko',type:'ghost',zone:'tg0',lead:'reiko',dark:1,near:140,need:.5,touch:3,tailOff:.5,reward:500,
  lostMsg:'потерял Рэйко',farMsg:'далеко от Рэйко',touchMsg:'коснулся машины Рэйко',
  goal:{ru:'Тандем за Рэйко по Акаги без фар: держись близко больше половины трассы и не коснись её трижды',en:'Tandem behind Reiko on Akagi with no lights: stay close for over half the course and don’t touch her three times'},
  why:{ru:'Рэйко научит ездить в темноте — иначе Курода с тобой даже говорить не станет.',en:'Reiko will teach you to drive in the dark — otherwise Kuroda won’t even talk to you.'},
  pre:[D('reiko','Поехали. Сначала — ко мне.','Let’s go. My place first.')],
  arrive:[D('reiko','Пересаживаюсь в свою. Урок четвёртый: ночь без света.','I’m switching to my own car. Lesson four: a night without lights.'),
       D('reiko','Фары гасишь ты и гашу я. Смотри на мои стоп-сигналы.','You switch your lights off and so do I. Watch my tail lights.'),
       D('reiko','На середине я выключу и их. Дальше — по памяти.','Halfway I’ll switch those off too. After that — from memory.'),
       D('lyokha','А если я въеду в отбойник?','And if I hit the barrier?'),
       D('reiko','Значит, плохо запомнил первую половину.','Then you didn’t memorize the first half well enough.')],
  post:[D('reiko','Неплохо. Теперь Курода тебя хотя бы заметит. Вернее — не заметит.','Not bad. Now Kuroda will at least notice you. Or rather — he won’t.'),
        D('gen','Лёха, это Гэн. Не вешай трубку!','Lyokha, it’s Gen. Don’t hang up!',PH_G4),
        D('gen','Рю сегодня сказал Сэйдзи: «Поймайте Призрака на Кумо. Любой ценой». Они уже едут.','Today Ryu told Seiji: “Catch the Ghost on Kumo. At any cost.” They’re already on their way.',PH_G4),
        D('lyokha','Почему я должен тебе верить?','Why should I believe you?'),
        D('gen','Не должен. Но если я прав — Призраку конец.','You shouldn’t. But if I’m right, the Ghost is done for.',PH_G4),
        D('kir','Я всё слышал. А если это опять ловушка? Ладно. Беру свою 86-ю — встречу тебя у подножия Кумо.','I heard everything. What if it’s a trap again? Fine. I’m taking my 86 — I’ll meet you at the foot of Kumo.',PH_K)],
  fail:[D('reiko','В темноте нельзя смотреть только на огни. Ещё раз.','In the dark you can’t just watch the lights. Again.')]},
 {id:'e4',ch:4,title:{ru:'Охота на Призрака',en:'Hunting the Ghost'},at:'kumo',ride:'kumos',ridePass:'',type:'guard',zone:'tg1',reward:600,
  goal:{ru:'«Тени» зажимают Призрака на Кумо: сбивай их, не дай прижать его — он должен доехать до вершины',en:'The Shadows are boxing in the Ghost on Kumo: knock them off, don’t let them pin him — he has to reach the top'},
  why:{ru:'Гэн предупредил: Рю велел «Теням» поймать Призрака любой ценой.',en:'Gen warned you: Ryu told the Shadows to catch the Ghost at any cost.'},
  pre:[D('kir','Я у подножия. Едем наверх — посмотрим, соврал Гэн или нет.','I’m at the foot of the pass. Let’s drive up — we’ll see if Gen lied or not.',KIR_86)],
  arrive:[D('kir','Видишь? Гэн не соврал. Три машины «Теней» — и Призрак впереди.','See? Gen didn’t lie. Three Shadows cars — and the Ghost up ahead.',KIR_86),
       D('seiji','Объект на трассе. Прижимаем к отбойнику. Расчётное время — сорок секунд.','Target on the course. Pin him to the barrier. Estimated time: forty seconds.'),
       D('lyokha','Кир, держись рядом. Бьём «Теней» в бок — пусть отлетают.','Kir, stay close. Hit the Shadows in the side — let them bounce off.'),
       D('kir','Моя бедная восемьдесят шестая…','My poor eighty-six…',KIR_86)],
  post:[D('seiji','Погрешность. Отходим.','An error. Pull back.'),
        D('lyokha','(Призрак встал у вершины. Окно опустилось на ладонь.)','(The Ghost stopped at the top. The window came down a hand’s width.)',LYO_T),
        D('ghost','Зачем?','Why?'),
        D('lyokha','Миша бы вас тоже не бросил.','Misha wouldn’t have left you either.'),
        D('ghost','(кладёт что-то на капот Сакуры и уезжает)','(puts something on the Sakura’s hood and drives off)'),
        D('kir','Ключ. На бирке иероглиф «湯» и цифра три. Это что?','A key. The tag has the character “湯” and the number three. What is it?',KIR_86),
        D('lyokha','Не знаю. Но знаю, кто знает. Хана.','No idea. But I know who will. Hana.')],
  fail:[D('seiji','Объект зафиксирован. Свободен, ёппарай.','Target secured. You’re free to go, yopparai.')]},
 {id:'e5',ch:4,title:{ru:'Хвост до онсэна',en:'A tail to the onsen'},at:'hana',pass:'hana',type:'shake',dest:'onsen',dark:1,limit:120,reward:400,
  goal:{ru:'Оторвись от чёрной машины с выключенными фарами — и только потом вези Хану к онсэну',en:'Lose the black car with your lights off — and only then take Hana to the onsen'},
  why:{ru:'Бирка «湯 · 3» — старый онсэн под Кумо, куда ездил Миша. Привести туда хвост нельзя.',en:'The “湯 · 3” tag is the old onsen below Kumo where Misha used to go. You can’t lead a tail there.'},
  pre:[D('hana','«湯» — горячий источник. Старый онсэн под Кумо, на краю города. Миша ездил туда после каждой ночи на перевале.','“湯” means hot spring. The old onsen below Kumo, at the edge of the city. Misha went there after every night on the pass.'),
       D('hana','А «3» — гараж. Их там три, за баней. Я еду с тобой.','And “3” is a garage. There are three behind the bathhouse. I’m coming with you.'),
       D('hana','Стой. Видишь чёрную машину у заправки? Она стоит тут с вечера.','Wait. See the black car by the gas station? It’s been there since evening.'),
       D('lyokha','Гашу фары. Держись.','Lights off. Hold on.')],
  post:function(){var h=S.story.pick!=='rin';return [D('hana','Гараж номер три. Ключ подошёл…','Garage number three. The key fits…'),
        D('lyokha','(Под чехлом — Молния GT. Та самая, с фотографий Миши. Пыльная, без колеса — но целая.)','(Under the cover — the Molniya GT. The one from Misha’s photos. Dusty, one wheel missing — but in one piece.)',LYO_T),
        D('hana','И журнал. Почерк Миши. Тут записка, Лёха.','And a logbook. Misha’s handwriting. There’s a note here, Lyokha.'),
        D('misha','«Курода дал слово: карту той ночи он отдаст тому, кто пройдёт Кумо без света быстрее него. Я не смог — я тогда остановился»','“Kuroda gave his word: he’ll hand the card from that night to whoever drives Kumo without lights faster than him. I couldn’t — that night I stopped.”',NOTE)].concat(h?
       [D('hana','(у источников, пар над водой) Звёзды тут как на ладони. Миша, наверное, сидел на этом же камне.','(by the springs, steam over the water) You can see every star from here. Misha probably sat on this very rock.'),
        D('lyokha','Хана… Про колесо обозрения. Я тогда не договорил.','Hana… About the Ferris wheel. I didn’t finish what I was saying.'),
        D('hana','Так договори.','So finish it.'),
        D('lyokha','(Она так близко. Ещё чуть-чуть…)','(She’s so close. Just a little more…)',LYO_T)]:
       [D('hana','(у источников, пар над водой) Красиво. Рин бы понравилось?','(by the springs, steam over the water) Pretty. Would Rin like it?'),
        D('lyokha','Хана…','Hana…'),
        D('hana','Просто скажи. Ты с ней?','Just say it. Are you with her?'),
        D('lyokha','Я…','I…')]).concat(
       [D('kageyama','Алексей-сан. Не простудитесь у источников. Ночью в горах холодно.','Alexei-san. Don’t catch a cold by the springs. The mountains are cold at night.',PH_KG),
        D('lyokha','Откуда вы знаете, где я?!','How do you know where I am?!'),
        D('kageyama','Я многое знаю. Завтра поговорим. Лично.','I know many things. We’ll talk tomorrow. In person.',PH_KG),
        D('hana','(шарит под бампером Сакуры) Лёха… Маячок. Новенький.','(feeling under the Sakura’s bumper) Lyokha… A tracker. Brand new.'),
        D('lyokha','Вот почему они всегда знают, где я. Пусть пока висит — пусть думают, что мы не нашли.','So that’s why they always know where I am. Leave it for now — let them think we haven’t found it.'),
        D('gen','Лёха! Я собрал ночное шоу в бамбуке, тут рядом. Все сборы — тебе на взнос. Я тебе должен, король.','Lyokha! I’ve set up a night show in the bamboo grove, right near you. All the takings go to your payment. I owe you, king.',PH_G4)])},
  fail:[D('hana','Он всё ещё за нами. К онсэну так нельзя.','He’s still on our tail. We can’t go to the onsen like this.')]},
 {id:'e6',ch:4,title:{ru:'Бамбук',en:'Bamboo'},at:'arena',dc:'arenac',type:'drift',goalPts:1500,radius:330,reward:1000,
  goal:{ru:'Ночное шоу Гэна на арене у бамбуковой рощи: набери 1 500 очков заносом перед трибунами',en:'Gen’s night show at the arena by the bamboo grove: score 1,500 drift points in front of the stands'},
  why:{ru:'Гэн заглаживает вину: все сборы с шоу — тебе на взнос. Хана снимает.',en:'Gen is making amends: all the show’s takings go to your payment. Hana is filming.'},
  pre:[D('gen','Дамы и господа! Только сегодня, среди бамбука и фонарей — король Скрамбла представляет… ёппарая!','Ladies and gentlemen! Tonight only, among the bamboo and the lanterns — the King of the Scramble presents… the yopparai!'),
       D('hana','Я снимаю. Не урони мне фонарь на голову.','I’m filming. Don’t knock a lantern onto my head.'),
       D('lyokha','Гэн, а корону ты так и не вернул?','Gen, so you never got your crown back?'),
       D('gen','Корону не продают, ты сам сказал. Её зарабатывают. Начинаю с тебя.','A crown isn’t for sale, you said so yourself. You earn it. I’m starting with you.')],
  post:[D('gen','Тысяча в шапке и ещё стримы Ханы! Держи, король.','A thousand in the hat, plus Hana’s streams! Here you go, king.'),
        D('hana','Сто тысяч просмотров за ночь. Кажется, ты знаменит.','A hundred thousand views overnight. Looks like you’re famous.'),
        D('hana','Слушай. У Призрака на машине есть номер — я видела на перевале. Если снять его поближе, мой знакомый пробьёт, на кого она записана.','Listen. The Ghost’s car has a plate — I saw it on the pass. If I get a close shot, a friend of mine can look up who it’s registered to.'),
        D('lyokha','Зачем?','What for?'),
        D('hana','Затем, что человек, который двенадцать лет молчит, может молчать не просто так.','Because a man who’s kept quiet for twelve years might have a reason.')]},
 {id:'e7',ch:4,title:{ru:'Номер',en:'The plate'},at:'kumotop',ride:'kumos',pass:'hana',type:'photo',zone:'tg1',dark:1,need:3,reward:500,
  goal:{ru:'Хана снимает номер Призрака: три раза поравняйся с ним бортом, пока он не доехал до вершины',en:'Hana is shooting the Ghost’s plate: pull alongside him three times before he reaches the top'},
  why:{ru:'Хана хочет узнать, на кого записана машина без фар.',en:'Hana wants to know who the car with no lights is registered to.'},
  pre:[D('hana','Он начинает круг у старта, каждую ночь в одно и то же время. Поехали наверх.','He starts his run at the start line, every night at the same time. Let’s drive up.')],
  arrive:[D('hana','Вот он. Фары не включай — спугнёшь.','There he is. Don’t turn on your lights — you’ll scare him off.'),
       D('hana','Встань с ним борт в борт, я сделаю кадр со вспышкой. Нужно три.','Get side by side with him and I’ll take a shot with the flash. I need three.')],
  post:[D('hana','(смотрит в телефон) Номер пробили. Машина записана на «Кагэяма Кэнсэцу».','(looking at her phone) They ran the plate. The car is registered to Kageyama Kensetsu.'),
        D('lyokha','Призрак работает на Кагэяму?!','The Ghost works for Kageyama?!'),
        D('kir','Или Кагэяма думает, что он на него работает. Не спеши, брат.','Or Kageyama thinks he does. Don’t rush, bro.',PH_K),
        D('okada','Алексей-сан, доброй ночи. Господин Кагэяма спонсирует сегодня гонку «Теней». Призовые — две с половиной тысячи.','Good evening, Alexei-san. Mr. Kageyama is sponsoring a Shadows race tonight. The prize is two and a half thousand.',PH_OK),
        D('okada','Он лично просил передать вам приглашение. Старт у Токийской башни.','He personally asked me to pass on the invitation. The start is at Tokyo Tower.',PH_OK),
        D('hana','Это ловушка.','It’s a trap.'),
        D('lyokha','Это половина взноса.','It’s half the payment.'),
        D('hana','…Высади меня у лавки. Мы с Киром приедем на финиш.','…Drop me off at the shop. Kir and I will come to the finish.')],
  fail:[D('hana','Он ушёл. Номер я не успела.','He’s gone. I didn’t get the plate.')]},
 {id:'e8',ch:4,title:{ru:'Кубок «Теней»',en:'The Shadows Cup'},at:'tower',type:'crace',route:['tower','scramble','skyw'],reward:2500,
  grid:[['sh2',0,-12,1],['tetsu',85,12,0],['rin',125,-12,0],['seiji',170,12,0]],
  goal:{ru:'Гонка пятерых по ночному городу: Токийская башня → Скрамбл → Скайтри. Приди первым',en:'A five-car race through the night city: Tokyo Tower → the Scramble → Skytree. Finish first'},
  why:{ru:'Кагэяма спонсирует гонку «Теней». Приз — половина взноса. Гэн предупредил: у них на трассе таранная машина.',en:'Kageyama is sponsoring a Shadows race. The prize is half the payment. Gen warned you: they have a rammer on the course.'},
  pre:[D('seiji','Кубок «Теней». Пять машин, три точки, финиш у Скайтри. Призовые — от господина Кагэямы.','The Shadows Cup. Five cars, three points, finish at Skytree. The prize money is courtesy of Mr. Kageyama.'),
       D('rin','Сэйдзи, твоя телеметрия меня не остановит.','Seiji, your telemetry won’t stop me.'),
       D('tetsu','Пьяный! Я за призом. Но если «Тени» полезут — я на твоей стороне.','Drunk! I’m here for the prize. But if the Shadows start something — I’m on your side.'),
       D('gen','Лёха, у Сэйдзи вторая машина — таранная. Будет бить тебя в бок на поворотах.','Lyokha, Seiji has a second car — a rammer. It’ll hit your side in the turns.',PH_G4),
       D('lyokha','Пусть попробует.','Let it try.')],
  post:function(){var h=S.story.pick!=='rin';return [D('seiji','Погрешность в расчётах. Опять.','An error in the calculations. Again.'),
        D('tetsu','Ха! «Тени» в пролёте!','Ha! The Shadows lose!')].concat(h?
       [D('hana','(подбегает первой) Ты псих! Ты… ты молодец.','(the first to run up) You’re crazy! You… you did great.')]:
       [D('rin','Я закрыла Сэйдзи на последнем отрезке. Не благодари. Я не за тебя — я против «Теней».','I blocked Seiji on the last stretch. Don’t thank me. I’m not for you — I’m against the Shadows.')]).concat(
       [D('okada','Поздравляю, Алексей-сан. Две с половиной тысячи — ваши. Господин Кагэяма ждёт вас в банке. Он хочет поговорить о взносе.','Congratulations, Alexei-san. The two and a half thousand are yours. Mr. Kageyama is waiting for you at the bank. He’d like to talk about the payment.')])},
  fail:[D('seiji','Предсказуемо. Пьяный стиль — это шум.','Predictable. Drunken style is just noise.')]},
 {id:'e9',ch:4,title:{ru:'Предложение',en:'The offer'},at:'bank',type:'pay',amount:5000,reward:0,
  goal:{ru:'Внеси четвёртый взнос — 5 000 ¥ — и выслушай Кагэяму',en:'Make the fourth payment — 5,000 ¥ — and hear Kageyama out'},
  why:{ru:'Долг теперь у Кагэямы. Он сам приехал в банк за взносом.',en:'Kageyama owns the debt now. He came to the bank for the payment himself.'},
  short:[D('okada','Пять тысяч, Алексей-сан. Господин Кагэяма не любит ждать. Я бы на вашем месте поторопился.','Five thousand, Alexei-san. Mr. Kageyama doesn’t like to wait. If I were you, I’d hurry.')],
  pre:[D('kageyama','Алексей-сан. Наконец-то. Присаживайтесь.','Alexei-san. At last. Have a seat.'),
       D('kageyama','Назовите цену. Мастерская, Сакура — всё. Долг прощу и добавлю пятьдесят тысяч сверху.','Name your price. The garage, the Sakura — everything. I’ll forgive the debt and add fifty thousand on top.'),
       D('lyokha','Мастерская не продаётся.','The garage isn’t for sale.'),
       D('kageyama','У каждой мастерской есть цена.','Every garage has a price.'),
       D('lyokha','Вот взнос. Пять тысяч.','Here’s the payment. Five thousand.'),
       D('kageyama','(считает) Половину вы заплатили моими же деньгами. Изящно.','(counting) You paid half of it with my own money. Elegant.'),
       D('kageyama','И держитесь подальше от Кумо, Алексей-сан. Там темно. Люди падают.','And stay away from Kumo, Alexei-san. It’s dark there. People fall.')],
  post:[D('okada','(провожает до дверей, тише) Алексей-сан… У банка камеры. Я посмотрел запись.','(walking you to the door, quietly) Alexei-san… There are cameras outside the bank. I watched the footage.'),
        D('okada','Во время прошлого взноса водитель господина Кагэямы лез под вашу Сакуру. Я вам этого не говорил.','During your last payment Mr. Kageyama’s driver crawled under your Sakura. You didn’t hear it from me.'),
        D('lyokha','Маячок… Спасибо, Окада-сан.','The tracker… Thank you, Okada-san.'),
        D('okada','Я ставлю на вас. Не подведите.','I’m betting on you. Don’t let me down.'),
        D('ghost','Это Курода. «Тени» поймали меня у подножия Кумо. Машина разбита, фар нет.','This is Kuroda. The Shadows caught me at the foot of Kumo. My car is wrecked, no lights.',PH_KU),
        D('ghost','Мне нужно до онсэна. До гаража Миши.','I need to get to the onsen. To Misha’s garage.',PH_KU),
        D('lyokha','Еду.','On my way.')]},
 {id:'e10',ch:4,title:{ru:'Засада',en:'The ambush'},at:'kumo',type:'escort',dest:'onsen',hp:3,limit:220,reward:600,
  goal:{ru:'Доведи разбитую машину Куроды до онсэна: он едет за твоими стоп-сигналами. Не отрывайся и не дай «Теням» его добить',en:'Lead Kuroda’s wrecked car to the onsen: he follows your tail lights. Don’t pull away and don’t let the Shadows finish him off'},
  why:{ru:'«Тени» разбили Куроде передок у подножия Кумо. Своих фар у него нет.',en:'The Shadows smashed Kuroda’s front end at the foot of Kumo. He has no lights of his own.'},
  pre:[D('ghost','Приехал. Я пойду за твоими огнями. Не гони — у меня полрадиатора.','You came. I’ll follow your lights. Don’t speed — I’ve got half a radiator left.',KUR),
       D('lyokha','А «Тени»?','And the Shadows?'),
       D('ghost','Вернутся. Не дай им ударить меня трижды.','They’ll be back. Don’t let them hit me three times.',KUR)],
  post:[D('hana','Курода-сан? Заезжайте. Миша оставил тут инструментов на целую жизнь.','Kuroda-san? Drive in. Misha left enough tools here for a lifetime.'),
        D('ghost','(смотрит на Молнию под чехлом) Значит, он её так и не продал.','(looking at the Molniya under the cover) So he never sold her.',KUR),
        D('hana','К утру сделаю вашу машину. Вашу — не Молнию.','I’ll have your car fixed by morning. Yours — not the Molniya.'),
        D('ghost','Парень. Мне надо в город, в Сэнсо-дзи. Отвезёшь?','Kid. I need to get to the city, to Senso-ji. Will you drive me?',KUR)],
  fail:[D('ghost','Хватит. Дальше я сам… как-нибудь.','That’s enough. I’ll manage on my own from here… somehow.',KUR)]},
 {id:'e11',ch:4,title:{ru:'Свеча',en:'The candle'},at:'onsen',auto:true,pass:'kuroda',type:'calm',stops:['sensoji'],vlim:80,strikes:3,reward:300,
  goal:{ru:'Отвези Куроду в Сэнсо-дзи. Не быстрее 80 км/ч — он рассказывает',en:'Drive Kuroda to Senso-ji. No faster than 80 km/h — he’s talking'},
  why:{ru:'Курода хочет поставить свечу «за ту ночь на Кумо». И наконец рассказать свою часть.',en:'Kuroda wants to light a candle “for that night on Kumo”. And finally tell his side of it.'},
  pre:[D('ghost','Не гони. Я двенадцать лет никому этого не рассказывал. Хочу успеть.','Don’t speed. I haven’t told anyone this in twelve years. I want to get it all out.',KUR)],
  talk:[[2,D('ghost','В ту ночь у меня на торпеде стоял регистратор. Я снял всё: как Кагэяма бьёт машину Рэйко.','That night I had a dashcam on the dash. I filmed everything: Kageyama ramming Reiko’s car.',KUR)],
        [9,D('ghost','Утром полиция уже всё решила. Виноват Миша. Кто-то им хорошо заплатил.','By morning the police had already decided. Misha was to blame. Someone paid them well.',KUR)],
        [16,D('ghost','Карту я спрятал. Миша сказал: «Не сейчас. Отдашь тому, кто пройдёт Кумо без света быстрее тебя».','I hid the card. Misha said: “Not now. Give it to whoever drives Kumo without lights faster than you.”',KUR)],
        [23,D('ghost','А потом Кагэяма купил землю на Кумо. И нанял меня сторожем. Машина его, бензин его.','Then Kageyama bought the land on Kumo. And hired me as a watchman. His car, his petrol.',KUR)],
        [30,D('ghost','Он платит мне, чтобы я молчал. Я беру — чтобы он думал, что я молчу.','He pays me to keep quiet. I take it — so he thinks I’m keeping quiet.',KUR)]],
  stopLines:{sensoji:[D('monk','Курода-сан. Миша ставил здесь свечу каждый год. «За ту ночь на Кумо».','Kuroda-san. Misha lit a candle here every year. “For that night on Kumo.”'),
       D('ghost','Теперь моя очередь.','Now it’s my turn.',KUR),
       D('monk','(Лёхе) А вы его племянник. У вас его руки.','(to Lyokha) And you’re his nephew. You have his hands.')]},
  post:[D('ghost','Завтра ночью. Кумо, без света. Обгонишь — карта твоя. Как договаривались с Мишей.','Tomorrow night. Kumo, no lights. Beat me and the card is yours. As agreed with Misha.',KUR),
        D('lyokha','А если не обгоню?','And if I don’t?'),
        D('ghost','Тогда будешь приезжать, пока не обгонишь. Я подожду. Я умею ждать.','Then you’ll keep coming until you do. I’ll wait. I’m good at waiting.',KUR)],
  fail:[D('ghost','Останови. Я не за этим садился в машину.','Stop the car. That’s not why I got in.',KUR)]},
 {id:'e12',ch:4,title:{ru:'Призрак Кумо',en:'The Ghost of Kumo'},at:'kumo',ride:'kumos',ridePass:'',type:'gboss',zone:'tg1',dark:1,boss:'ghost',reward:3000,
  goal:{ru:'Обгони Призрака на Кумо. Оба без фар. Финиш у тории на вершине',en:'Beat the Ghost on Kumo. Both without lights. The finish is at the torii at the top'},
  why:{ru:'Уговор Миши и Куроды: карта той ночи — тому, кто пройдёт Кумо без света быстрее Призрака.',en:'Misha and Kuroda’s deal: the card from that night goes to whoever drives Kumo without lights faster than the Ghost.'},
  pre:[D('ghost','Машина как новая. Хана — хороший механик. Береги её.','The car’s as good as new. Hana is a good mechanic. Take care of her.',KUR),
       D('reiko','Я приехала посмотреть. Двенадцать лет не была здесь ночью. Хидэо, не поддавайся ему.','I came to watch. I haven’t been here at night in twelve years. Hideo, don’t go easy on him.'),
       D('ghost','Я никому не поддаюсь, Рэйко.','I don’t go easy on anyone, Reiko.',KUR)],
  arrive:[D('ghost','До тории на вершине. Без света. На последнем повороте я гашу всё.','To the torii at the top. No lights. On the last turn I switch off everything.',KUR),
       D('lyokha','(Как тогда. Только теперь — доедем.)','(Like back then. Only this time we finish.)',LYO_T)],
  post:[D('ghost','…Обогнал. Двенадцать лет. Я думал, уже не дождусь.','…You beat me. Twelve years. I thought I’d never see it.',KUR),
        D('ghost','(протягивает карту памяти) Здесь та ночь. Целиком.','(holds out a memory card) That night is on here. All of it.',KUR),
        D('reiko','Спасибо, Хидэо.','Thank you, Hideo.'),
        D('reiko','Поехали ко мне. Рассвет встретим в раменной — Хана уже там, я ей позвонила. Я поеду вперёд.','Come to my place. We’ll see the dawn in at the ramen shop — Hana is already there, I called her. I’ll drive ahead.')],
  fail:[D('ghost','Не сегодня. Приезжай завтра. Я подожду.','Not tonight. Come back tomorrow. I’ll wait.',KUR)]},
 {id:'e13',ch:4,title:{ru:'Рассвет',en:'Dawn'},at:'kumotop',auto:true,type:'deliv',stops:['ramen'],tod:6.4,todFrom:4.7,todRate:.04,reward:0,
  goal:{ru:'Доедь до раменной Рэйко — рассвет встретите там',en:'Drive to Reiko’s ramen shop — you’ll see the dawn in there'},
  why:{ru:'Карта той ночи у тебя. Рэйко позвала всех к себе.',en:'The card from that night is yours. Reiko has called everyone to her place.'},
  pre:[D('lyokha','(Карта в кармане. Скоро рассвет.)','(The card is in my pocket. Dawn is coming.)',LYO_T)],
  talk:[[4,D('kir','Брат! Рэйко написала. Еду к ней — встретим рассвет вместе.','Bro! Reiko texted. I’m heading to her place — we’ll see the sunrise together.',PH_K)]],
  post:function(){var h=S.story.pick!=='rin';return (h?
       [D('hana','(рассвет в раменной Рэйко; засыпает у Лёхи на плече) Только не шевелись…','(dawn at Reiko’s ramen shop; she falls asleep on Lyokha’s shoulder) Just don’t move…'),
        D('reiko','(Лёхе, шёпотом) Береги её.','(to Lyokha, in a whisper) Take care of her.')]:
       [D('lyokha','(Рассвет в раменной. Телефон. Сообщение от Рин: «Живой? Тандем в субботу».)','(Dawn at the ramen shop. My phone. A message from Rin: “Alive? Tandem on Saturday.”)',LYO_T),
        D('hana','(видит экран) …Ответь ей. Мне всё равно.','(sees the screen) …Answer her. I don’t care.')]).concat(
       [D('ryu','(в дверях раменной) Карта у тебя, ёппарай?','(in the ramen shop doorway) Got the card, yopparai?'),
        D('ryu','Отец хочет её. А я хочу тебя — на кольце. Без отцовских денег. Ты и я.','My father wants it. And I want you — on the ring. No father’s money. Just you and me.'),
        D('lyokha','Назови время.','Name the time.')])},
  scene:'dawn',chapterEnd:4,next:{ru:'«Тени» бросают вызов',en:'The Shadows throw down the gauntlet'}}
);
// ---- places: the foot and the top of Kumo, the old onsen with Misha's garage №3, the bamboo grove next to it
var C4G=null,C4Z={ghost:1,guard:1,photo:1,gboss:1};
function c4Garage(sp){var c={x:sp.x+sp.w/2,y:sp.y+sp.h/2},list=[];
 BH.q(c.x-700,c.y-700,c.x+700,c.y+700,function(b){if(b===GARB||b.st>=14||b.w<40||b.h<30||b.w>160||b.h>140)return;var d=Math.hypot(wd(b.x+b.w/2,c.x),wd(b.y+b.h/2,c.y));if(d<90||d>480)return;if(list.indexOf(b)<0)list.push(b)});
 list.sort(function(a,b){return Math.hypot(wd(a.x+a.w/2,c.x),wd(a.y+a.h/2,c.y))-Math.hypot(wd(b.x+b.w/2,c.x),wd(b.y+b.h/2,c.y))});
 for(var i=0;i<list.length;i++){var b=list[i],fr={x:b.x+b.w/2-3,y:b.y+b.h-2,w:6,h:2},s=stSnapNear(fr,{R:120});if(s&&s.d<46&&s.uy>b.y+b.h+4&&Math.abs(s.ux-(b.x+b.w/2))<b.w/2-10){C4G=b;return s}}
 return null}
// the kerb of whatever drivable road passes closest to a landmark's footprint (the onsen sits among narrow streets)
function c4Snap(R0){var best=null;RH.q(R0.x-320,R0.y-320,R0.x+R0.w+320,R0.y+R0.h+320,function(sp){var r=sp.r;if(r.k==='exp'||r.k==='ramp')return;
 var a0=Math.max((r.za||0)+30,(sp.i-1)*r.ds),a1=Math.min(r.len-(r.zb||0)-30,(sp.j+1)*r.ds);for(var sv=a0;sv<=a1;sv+=8){r.pt(sv,TMP);for(var sd=-1;sd<=1;sd+=2){var u=(r.k==='loc'?r.hw*.42:r.hw-18)*sd,x=TMP[0]-TMP[3]*u,y=TMP[1]+TMP[2]*u,ux=R0.x+R0.w/2+wd(x,R0.x+R0.w/2),uy=R0.y+R0.h/2+wd(y,R0.y+R0.h/2);
  var dx=Math.max(R0.x-ux,0,ux-(R0.x+R0.w)),dy=Math.max(R0.y-uy,0,uy-(R0.y+R0.h)),d=Math.hypot(dx,dy);if(d<4)continue;if(!best||d<best.d)best={d:d,r:r,s:sv,sd:sd,x:wrap(x),y:wrap(y),a:Math.atan2(TMP[3]*sd,TMP[2]*sd)}}}});return best}
var _spC4=stPlaces;stPlaces=function(){var P=_spC4();if(P.kumo)return P;
 function c(s){return{x:s.x+s.w/2,y:s.y+s.h/2}}
 function near(k,to){var best=null,bd=1e18;SPEC.forEach(function(s){if(s.k!==k)return;var q=c(s),d=Math.hypot(wd(q.x,to.x),wd(q.y,to.y));if(d<bd){bd=d;best=s}});return best}
 var z=stZone('tg1'),r=z.road;r.pt(0,TMP);var A={x:TMP[0],y:TMP[1]};
 P.kumo=stSnapWide(A,700);P.kumo.name={ru:'Подножие Кумо',en:'The foot of Kumo'};
 P.kumos={x:z.x,y:z.y,name:{ru:'Старт на Кумо',en:'The Kumo start line'}};
 var s=Math.min(r.len-(r.zb||0)-40,z.s1+70),u=laneU(r,1,0);r.pt(zcs(r,s),TMP);
 var ut=-(r.hw+16)*(u<0?1:-1);
 P.kumotop={x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3],TMP[2]),tx:wrap(TMP[0]-TMP[3]*ut),ty:wrap(TMP[1]+TMP[2]*ut),name:{ru:'Вершина Кумо',en:'The top of Kumo'}};
 var on=near('onsen',P.kumotop),oq=on?(c4Garage(on)||c4Snap(on)||stSnapWide(c(on),520)):stSnapWide(P.kumotop);
 P.onsen=oq;P.onsen.name={ru:'Старый онсэн',en:'The old onsen'};
 var bb=near('bamboo',on?c(on):P.kumotop),bq=bb?(stSnapNear(bb,{f:c(bb)})||stSnapWide(c(bb))):stSnapWide(P.kumotop,900);
 P.bamboo=bq;P.bamboo.name={ru:'Бамбуковая роща',en:'The bamboo grove'};
 // the Shadows Cup finishes on the wide avenue at the foot of Skytree (the bank's own door is on a side street)
 var sk=SPEC.filter(function(q){return q.k==='skytree'})[0];P.skyw=stSnapWide(sk?c(sk):P.bank,700);P.skyw.name={ru:'Скайтри',en:'Skytree'};
 return P};
function c4Idx(id){for(var i=0;i<STORY.length;i++)if(STORY[i].id===id)return i;return -1}
function c4After(id){var i=c4Idx(id);return i>=0&&(S.story.m|0)>i}
function c4R(id){for(var i=0;i<RIV.length;i++)if(RIV[i].id===id)return RIV[i];return null}
var C4R={ghost:{id:'ghost',name:'Призрак',tag:'#aab4cc',car:11,col:6,str:1,glow:0},reiko:{id:'reiko',name:'Рэйко',tag:'#e8ecf4',car:2,col:0,str:1,glow:0},
 sh1:{id:'sh1',name:'«Тень»',tag:'#8a90a4',car:9,col:6,str:4,glow:4},sh2:{id:'sh2',name:'«Тень»',tag:'#8a90a4',car:7,col:6,str:4,glow:4},sh3:{id:'sh3',name:'«Тень»',tag:'#8a90a4',car:8,col:6,str:4,glow:4}};
function c4o(k,x){var b=C4R[k]||C3R[k],o={},q;for(q in b)o[q]=b[q];for(q in x)o[q]=x[q];return o}
var C4P={crace:{seiji:.93,rin:.92,tetsu:.91,sh2:.9}};
var C4FIN={seiji:'Сэйдзи первый на финише',rin:'Рин первая на финише',tetsu:'Тэцу первый на финише',sh2:'«Тень» первая на финише'};
var C4PASS={kir:'Кир в машине',hana:'Хана в машине',reiko:'Рэйко в машине',kuroda:'Курода в машине'};
// ---- night without lights: your headlights are off; the Ghost never has any; on the last turn he kills his tail lights too
function c4Dark(){var m=ST.act;if(!ST.mode||!m||!m.dark||ST.ride||ST.arr||mode!=='game')return false;if(m.type==='shake')return ST.ph!==1;if(C4Z[m.type])return !!ZS;return true}
var C4LF=null,C4PL=false;
function c4Lights(x,y,a,Ln,Hh,lv,brk,isP,f){var ca=Math.cos(a),sa=Math.sin(a),hx=Ln/2,hy=Hh/2,sx=SX(x),sy=SY(y);if(sx<-90||sy<-90||sx>VW+90||sy>VH+90)return;
 if(f.f){var ca2=.05+.42*lv;if(ca2>.03){var cn=hlCone();cx.globalAlpha=Math.min(1,ca2);cx.save();cx.translate(sx,sy);cx.rotate(a);cx.drawImage(cn,hx-2,-hy-15,60*(isP?1.12:1),hy*2+30);cx.restore()}}
 [-1,1].forEach(function(s){if(f.f){var fx=sx+ca*(hx-1)-sa*s*(hy-2.5),fy=sy+sa*(hx-1)+ca*s*(hy-2.5);gl(fx,fy,5,5,[255,246,214],.25+.6*lv)}
  if(f.r){var rx=sx-ca*(hx-.5)-sa*s*(hy-2.5),ry=sy-sa*(hx-.5)+ca*s*(hy-2.5);gl(rx,ry,brk?8:5,brk?8:5,[255,40,60],(brk?.85:.18+.5*lv))}})}
var _clC4=carLights;carLights=function(x,y,a,Ln,Hh,lv,brk,isP){var f=C4LF;if(!f&&C4PL&&isP&&car&&x===car.x&&y===car.y)f={f:0,r:1};if(!f)return _clC4(x,y,a,Ln,Hh,lv,brk,isP);c4Lights(x,y,a,Ln,Hh,lv,brk,isP,f)};
var _rlC4=remLight;remLight=function(r,lv){if(r.nohl||r.nobrk){var g=r.glow;if(r.nohl)r.glow=0;C4LF={f:!r.nohl,r:!r.nobrk};try{_rlC4(r,lv)}finally{C4LF=null;r.glow=g}}else _rlC4(r,lv)};
var _lpC4=lightPass;lightPass=function(){var dk=c4Dark(),m0=TODS.m,g0=S.glow;C4PL=dk;if(dk){S.glow=0;if(TODS.L>.3)TODS.m=[Math.round(m0[0]*.8),Math.round(m0[1]*.8),Math.round(m0[2]*.86)]}try{_lpC4()}finally{TODS.m=m0;S.glow=g0;C4PL=false}};
// tail lights painted on the sprite: off for a car that has killed them
var _ruC4=rivUpdate;rivUpdate=function(dt){_ruC4(dt);for(var i=0;i<RIV.length;i++)if(RIV[i].nobrk)RIV[i].b=0};
// the player's hits on a rival (rivals only feel walls and props in their own collision pass)
rivCollide=function(c){var near=99;for(var i=0;i<RIV.length;i++){var r=RIV[i],o=r.c;if((o.l|0)!==(c.l|0))continue;var dx=wd(o.x,c.x),dy=wd(o.y,c.y);if(Math.abs(dx)>60||Math.abs(dy)>60)continue;var dd=Math.hypot(dx,dy)-o.hx-c.hx*.6;if(dd<near)near=dd;var im=satPair(c,o,.25,.38);if(im>(r.ph||0))r.ph=im}return near};
// ---- the Ghost's sparks: now and then his car scrapes the road, the only light he gives off
var C4SP=[];
function c4Sparks(R,dt){R.spT=(R.spT||0)-dt;if(R.spT>0||R.c.sp<110||C4SP.length>90)return;R.spT=.16+Math.random()*.45;var ca=Math.cos(R.a),sa=Math.sin(R.a);
 for(var i=0;i<3;i++)C4SP.push({x:R.x-ca*(R.c.hx-2)+(Math.random()-.5)*6,y:R.y-sa*(R.c.hx-2)+(Math.random()-.5)*6,vx:-ca*70+(Math.random()-.5)*60+R.vx*.6,vy:-sa*70+(Math.random()-.5)*60+R.vy*.6,t:0,l:.3+Math.random()*.3,z:R.l|0})}
function c4SpUpd(dt){for(var i=C4SP.length-1;i>=0;i--){var p=C4SP[i];p.t+=dt;if(p.t>p.l){C4SP.splice(i,1);continue}p.x+=p.vx*dt;p.y+=p.vy*dt;var f=Math.exp(-3*dt);p.vx*=f;p.vy*=f}}
// ---- stone lanterns along the Kumo pass, the torii at the top, Misha's garage №3, the show lanterns in the bamboo
var C4LAN=null;
function c4Lanterns(){if(C4LAN)return C4LAN;C4LAN=[];var z=stZone('tg1');if(!z)return C4LAN;var r=z.road,k=0;
 for(var s=Math.max((r.za||0)+60,z.s0-280);s<=Math.min(r.len-(r.zb||0)-60,z.s1+320);s+=210){r.pt(zcs(r,s),TMP);var sd=(k++%2)?1:-1,u=(r.hw+8)*sd,x=wrap(TMP[0]-TMP[3]*u),y=wrap(TMP[1]+TMP[2]*u);if(ptInBld(x,y))continue;C4LAN.push({x:x,y:y})}
 return C4LAN}
function c4Toro(p){var x=SX(p.x),y=SY(p.y);if(x<-10||y<-14||x>VW+10||y>VH+10)return;
 cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x-2,y+1,7,3);cx.fillStyle='#14101e';cx.fillRect(x-3,y-9,7,12);cx.fillStyle='#8c8a94';cx.fillRect(x-2,y-1,5,3);cx.fillStyle='#a8a6b0';cx.fillRect(x-2,y-5,5,4);
 cx.fillStyle='#ffd08a';cx.fillRect(x-1,y-4,3,2);cx.fillStyle='#6c6a74';cx.fillRect(x-3,y-8,7,2);cx.fillStyle='#8c8a94';cx.fillRect(x-1,y-9,3,1)}
function c4Torii(xw,yw){var x=SX(xw),y=SY(yw);if(x<-20||y<-20||x>VW+20||y>VH+20)return;
 cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(x-9,y+2,21,3);cx.fillStyle='#14101e';cx.fillRect(x-7,y-7,4,11);cx.fillRect(x+4,y-7,4,11);cx.fillStyle='#c8202c';cx.fillRect(x-6,y-6,2,9);cx.fillRect(x+5,y-6,2,9);
 cx.fillStyle='#14101e';cx.fillRect(x-9,y-5,19,3);cx.fillStyle='#c8202c';cx.fillRect(x-8,y-4,17,1);cx.fillStyle='#14101e';cx.fillRect(x-12,y-10,25,4);cx.fillStyle='#c8202c';cx.fillRect(x-11,y-9,23,2);cx.fillStyle='#2a1018';cx.fillRect(x-12,y-11,25,1)}
var C4N3=['###','..#','.##','..#','###'];
// no building to borrow near the onsen: three little garages drawn just off the kerb, facing the road (№3 is Misha's)
var C4SH=null;
function c4ShedPos(){if(C4SH!==null)return C4SH;C4SH=false;var q=STP&&STP.onsen;if(!q||!q.r)return C4SH;var r=q.r;r.pt(q.s,TMP);var sd=q.sd||1,u=(r.hw+30)*sd,x=wrap(TMP[0]-TMP[3]*u),y=wrap(TMP[1]+TMP[2]*u);
 if(ptInBld(x,y))return C4SH;var an=Math.round(Math.atan2(TMP[3],TMP[2])/(Math.PI/2))*(Math.PI/2);C4SH={x:x,y:y,a:an,sd:sd};return C4SH}
function c4ShedDraw(){var p=c4ShedPos();if(!p)return;var x=SX(p.x),y=SY(p.y);if(x<-40||y<-40||x>VW+40||y>VH+40)return;var open=c4After('e5'),k;
 cx.save();cx.translate(x,y);cx.rotate(p.a);if(p.sd<0)cx.scale(1,-1);
 // local frame: x along the road, +y away from it; the doors face the road (y<0)
 cx.fillStyle='rgba(12,8,40,.35)';cx.fillRect(-22,-8,48,24);cx.fillStyle='#14101e';cx.fillRect(-25,-12,50,24);cx.fillStyle='#4a4656';cx.fillRect(-24,-4,48,15);cx.fillStyle='#5c5868';for(k=-2;k<10;k+=3)cx.fillRect(-24,k,48,1);
 for(var i=0;i<3;i++){var gx=-23+i*16;cx.fillStyle='#14101e';cx.fillRect(gx,-11,14,8);if(i===2&&open){cx.fillStyle='#0c0a14';cx.fillRect(gx+1,-10,12,7);cx.fillStyle='#b9bccb';cx.fillRect(gx+2,-8,10,5);cx.fillStyle='#d6d8e2';cx.fillRect(gx+3,-7,8,1)}
  else{cx.fillStyle='#8a8f9e';cx.fillRect(gx+1,-10,12,7);cx.fillStyle='#5e6374';for(k=-9;k<-3;k+=2)cx.fillRect(gx+1,k,12,1)}}
 cx.restore();
 // the plate over №3 (kept upright)
 var c=Math.cos(p.a),s=Math.sin(p.a),lx=17,ly=-15*(p.sd<0?-1:1),px=Math.round(x+lx*c-ly*s)-5,py=Math.round(y+lx*s+ly*c)-5;
 cx.fillStyle='#14101e';cx.fillRect(px,py,11,9);cx.fillStyle='#c89a5a';cx.fillRect(px+1,py+1,9,7);cx.fillStyle='#2a1a0a';for(var r2=0;r2<5;r2++)for(var q2=0;q2<3;q2++)if(C4N3[r2][q2]==='#')cx.fillRect(px+4+q2,py+2+r2,1,1)}
function c4GarDraw(){var b=C4G;if(!b)return;var x=Math.round(SX(b.x)),y=Math.round(SY(b.y));if(x>VW+20||y>VH+20||x+b.w<-20||y+b.h<-20)return;
 var open=c4After('e5'),fh=Math.round(clamp(4+(b.ht||2)*3,6,b.h*.45)),fy=y+b.h-fh,w=Math.min(36,b.w-12),gx=Math.round(x+b.w/2-w/2),k;
 cx.fillStyle='#14101e';cx.fillRect(gx-1,fy+1,w+2,fh);
 if(!open){cx.fillStyle='#8a8f9e';cx.fillRect(gx,fy+2,w,fh-2);cx.fillStyle='#5e6374';for(k=fy+3;k<y+b.h-2;k+=2)cx.fillRect(gx,k,w,1)}
 else{cx.fillStyle='#0c0a14';cx.fillRect(gx,fy+2,w,fh-2);cx.fillStyle='#8a8f9e';cx.fillRect(gx,fy+2,w,2);
  // the Molniya GT under its dust cover, nose out
  cx.fillStyle='#b9bccb';cx.fillRect(gx+4,y+b.h-7,w-8,6);cx.fillStyle='#9ea2b2';cx.fillRect(gx+6,y+b.h-6,w-12,1);cx.fillRect(gx+5,y+b.h-3,w-10,1);cx.fillStyle='#d6d8e2';cx.fillRect(gx+9,y+b.h-5,w-18,1)}
 var sx=Math.round(gx+w/2-5),sy=fy-10;cx.fillStyle='#14101e';cx.fillRect(sx,sy,11,9);cx.fillStyle='#c89a5a';cx.fillRect(sx+1,sy+1,9,7);cx.fillStyle='#2a1a0a';
 for(var r=0;r<5;r++)for(var q=0;q<3;q++)if(C4N3[r][q]==='#')cx.fillRect(sx+4+q,sy+2+r,1,1)}
// the bamboo show: strings of paper lanterns hung over the road around the drift spot
var C4BL=null;
function c4ShowOn(){var c=ST.act||stCur();return !!(ST.mode&&c&&c.id==='e6')}
function c4ShowLan(){if(C4BL)return C4BL;C4BL=[];var p=STP&&(STP.arenac||STP.bamboo);if(!p)return C4BL;for(var i=0;i<14;i++){var a=i/14*TAU,R=150+(i%2)*40,x=wrap(p.x+Math.cos(a)*R),y=wrap(p.y+Math.sin(a)*R);if(ptInBld(x,y))continue;C4BL.push({x:x,y:y,c:i%3?'#ff4d5a':'#fff1d6'})}return C4BL}
function c4Chochin(p){var x=SX(p.x),y=SY(p.y);if(x<-8||y<-14||x>VW+8||y>VH+8)return;var sw=Math.round(Math.sin(TIME*1.7+p.x)*1);cx.fillStyle='#14101e';cx.fillRect(x-2+sw,y-7,5,7);cx.fillStyle=p.c;cx.fillRect(x-1+sw,y-6,3,5);cx.fillStyle='#14101e';cx.fillRect(x+sw,y-9,1,2)}
var _dzC4=drawZones;drawZones=function(l){_dzC4(l);if(l!==0||!window.worldReady)return;if(!STP){if(typeof RH!=='undefined'&&RH)stPlaces();else return}
 var L4=c4Lanterns();for(var i=0;i<L4.length;i++)c4Toro(L4[i]);var P=STP;if(P.kumotop)c4Torii(P.kumotop.tx,P.kumotop.ty);if(C4G)c4GarDraw();else c4ShedDraw();
 if(c4ShowOn()){var B=c4ShowLan();for(i=0;i<B.length;i++)c4Chochin(B[i])}};
var _edC4=emisDraw;emisDraw=function(a){_edC4(a);
 if(a>.05){var L4=C4LAN||[];for(var i=0;i<L4.length;i++){var x=SX(L4[i].x),y=SY(L4[i].y);if(x<-40||y<-40||x>VW+40||y>VH+40)continue;gl(x,y-3,9,9,[255,210,140],a*.95);gl(x,y+3,46,34,[255,165,90],a*.42)}
  if(c4ShowOn()){var B=c4ShowLan();for(i=0;i<B.length;i++){var bx=SX(B[i].x),by=SY(B[i].y);if(bx<-40||by<-40||bx>VW+40||by>VH+40)continue;gl(bx,by-4,10,10,B[i].c==='#ff4d5a'?[255,90,90]:[255,230,190],a*.9);gl(bx,by+4,22,16,[255,140,90],a*.25)}}}
 for(var k=0;k<C4SP.length;k++){var p=C4SP[k],sx=SX(p.x),sy=SY(p.y);if(sx<-10||sy<-10||sx>VW+10||sy>VH+10)continue;var al=1-p.t/p.l;cx.globalAlpha=al;cx.fillStyle='#fff2b0';cx.fillRect(Math.round(sx),Math.round(sy),1,1);gl(sx,sy,6,6,[255,180,80],al*.75)}
 cx.globalAlpha=1};
// ---- lines said while you drive (subtitles above the controls; the game keeps going)
var C4SUB={q:[],t:0,el:null};
function c4SubEl(){if(C4SUB.el)return C4SUB.el;var st=document.createElement('style');st.textContent='#c4sub{display:none;position:absolute;left:50%;transform:translateX(-50%);bottom:calc(232px + env(safe-area-inset-bottom));width:min(88vw,400px);background:rgba(23,18,38,.9);border:3px solid #ff6fae;padding:7px 10px;font-size:16.5px;line-height:1.3;text-shadow:none;z-index:3;pointer-events:none;box-shadow:4px 4px 0 rgba(255,61,139,.35)}#c4sub b{display:block;color:#ffd23a;font-weight:inherit;font-size:11px;letter-spacing:.06em;margin-bottom:2px}';document.head.appendChild(st);
 var e=document.createElement('div');e.id='c4sub';($('hud')||document.body).appendChild(e);C4SUB.el=e;return e}
function c4Say(ln){C4SUB.q.push(ln)}
function c4SubUpd(dt){var e=c4SubEl();if(mode!=='game'||!ST.mode){e.style.display='none';return}
 C4SUB.t-=dt;if(C4SUB.t>0)return;if(!C4SUB.q.length){e.style.display='none';return}
 var ln=C4SUB.q.shift(),nm=ln[3]||WHO[ln[0]],txt=TR(ln[1],ln[2]);e.innerHTML='<b>'+stEsc(nm?TR(nm[0],nm[1]):ln[0])+'</b>'+stEsc(txt);e.style.display='block';C4SUB.t=3.2+txt.length/22}
function c4SubClear(){C4SUB.q=[];C4SUB.t=0;if(C4SUB.el)C4SUB.el.style.display='none'}
// talk[] = [[seconds into the drive, line], …]; a negative number = say it once the stop is that close (px)
function c4Talk(m){if(!m.talk||ST.ride||ST.arr)return;var t=stTarget(),d=t?Math.hypot(wd(t.x,car.x),wd(t.y,car.y)):1e9;
 while((ST.tk|0)<m.talk.length){var w=m.talk[ST.tk|0][0];if(w>=0?ST.t>=w:d<=-w){c4Say(m.talk[ST.tk|0][1]);ST.tk=(ST.tk|0)+1}else break}}
// arriving before everything was said: what is left is said at the stop
var _sdC4=stDone;stDone=function(ok,why){var m=ST.act;if(ok&&m&&m.talk){var left=C4SUB.q.slice();for(var i=ST.tk|0;i<m.talk.length;i++)left.push(m.talk[i][1]);ST.tleft=left.length?left:null;c4SubClear()}else ST.tleft=null;return _sdC4(ok,why)};
var _sslC4=stStopLines;stStopLines=function(m,k){var r=_sslC4(m,k);if(ST.tleft&&ST.tleft.length){r=ST.tleft.concat(r||[]);ST.tleft=null}return r};
// ---- the Shadows go for a target car (the Ghost), not for you: aim at its rear quarter and lean on it
function c4Attack(r,dt){var c=r.c,T=r.tgt,ca=Math.cos(T.a),sa=Math.sin(T.a),dd=Math.hypot(wd(T.x,c.x),wd(T.y,c.y));
 var side=(wd(c.x,T.x)*-sa+wd(c.y,T.y)*ca)>=0?1:-1,tx=T.x+T.vx*.2-ca*7-sa*side*7,ty=T.y+T.vy*.2-sa*7+ca*side*7;
 var head=c.dr?Math.atan2(c.vy,c.vx):c.a,err=angd(Math.atan2(wd(ty,c.y),wd(tx,c.x)),head),I={s:clamp(err*3,-1,1),t:1,b:0,h:0};
 if(r.stuck>.6){r.rev=.7;r.stuck=0}if(r.rev>0){r.rev-=dt;return{s:err>0?-1:1,t:0,b:1,h:0}}
 if(Math.abs(err)>1.6&&dd<110)return c.sp>60?{s:I.s,t:0,b:1,h:0}:{s:err>0?-1:1,t:0,b:1,h:0};
 var tsp=Math.hypot(T.vx,T.vy),vd=Math.max(60,dd*2.2+tsp);if(c.sp>vd+25){I.t=0;I.b=.45}else if(c.sp>vd)I.t=.3;return I}
var _rivAIc4=rivAI;rivAI=function(r,dt){if(r.tgt&&r.atk2&&!(r.stun>0)&&!r.out)return c4Attack(r,dt);if(r.out){return{s:0,t:0,b:1,h:0}}return _rivAIc4(r,dt)};
// a Shadow is knocked out of it for a moment by a solid hit from you or a wall (its own rams on the Ghost don't count)
function c4Stun(R,G){var dG=G?Math.hypot(wd(R.x,G.x),wd(R.y,G.y)):1e9,dP=Math.hypot(wd(R.x,car.x),wd(R.y,car.y)),hit=false;
 if(!(R.stun>0)){if((R.ph||0)>20)hit=true;else if(R.hm>170&&dG>R.c.hx+(G?G.c.hx:0)+10)hit=true}
 R.ph=0;if(!hit)return false;R.stun=2.6;R.hm=0;R.atk2=0;R.hits=(R.hits||0)+1;if(dP<420)fxSparks(R.x,R.y,10,0,0,R.l|0,1);return true}
// ---- zone missions of this chapter: spawns
var _isZRc4=isZR;isZR=function(m){return _isZRc4(m)||!!(m&&C4Z[m.type])};
function c4Spawn(m){var z=stZone(m.zone),u=c3Lane(z,0),s0=z.s0;ST.close=0;ST.tot=0;ST.touch=0;ST.tcd=0;ST.far=0;ST.fail='';ST.prog=0;ST.al=0;ST.pcd=0;ST.pr=0;ST.gfin=0;
 if(m.type==='ghost'){if(m.lead==='reiko'){var R=c3CourseRiv(z,c4o('reiko',{s:s0+95,u:u,vmax:300,sk:.7}));R.sk0=.7;R.nohl=1}
  else{var G=c3Pace(c3CourseRiv(z,c4o('ghost',{s:s0+110,u:u,vmax:420})),.95,1.15);G.nohl=1}return}
 if(m.type==='photo'){var G2=c3Pace(c3CourseRiv(z,c4o('ghost',{s:s0+90,u:u,vmax:420,drift:0})),.93,1.1);G2.nohl=1;return}
 if(m.type==='gboss'){var G3=c3Pace(c3CourseRiv(z,c4o('ghost',{s:s0+12,u:-u,vmax:460})),.97,1.06);G3.nohl=1;return}
 if(m.type==='guard'){var G4=c3Pace(c3CourseRiv(z,c4o('ghost',{s:s0+240,u:u,vmax:430})),.9,1.15);G4.nohl=1;
  // the Shadows come up from behind you: you are between them and the Ghost from the start
  [['seiji',-70,-u],['sh1',-120,u],['sh2',-170,-u]].forEach(function(q){var R2=c3Pace(c3CourseRiv(z,c4o(q[0],{s:s0+q[1],u:q[2],vmax:470,drift:0})),.96,1.25);R2.tgt=G4.c;R2.sh=1});
  c3Pace(c3CourseRiv(z,c4o('kir',{s:s0+40,u:-u,vmax:430})),.94,1.1);return}}
// ---- per-frame: following in the dark (the Ghost on Kumo, Reiko on Akagi)
function c4GhostTail(m,dt){var g=RIV[0];if(!g)return false;g.wait=ZS.ph!=='go';if(g.wait)return false;
 var z=ZS.z,d=Math.hypot(wd(g.x,car.x),wd(g.y,car.y)),gs=stRoadS(g),cl=z.s1-z.s0;ST.tot+=dt;if(d<m.near&&(car.l|0)===(g.l|0))ST.close+=dt;
 if(m.lead==='reiko'){g.sk=g.sk0*clamp(1-(d-85)/240,.3,1.2);g.vmax=d>420?30:d>300?110:400}
 else{c3Band(g,d<120?1.04:d>420?.7:d>300?.84:.96);g.vmax=d>560?60:d>420?170:g.V0*1.4;c4Sparks(g,dt)}
 if(m.tailOff&&!g.nobrk&&gs>z.s0+cl*m.tailOff){g.nobrk=1;flash(L(m.lead==='reiko'?'Рэйко погасила стоп-сигналы!':'Призрак погасил стоп-сигналы!'),1.4)}
 if(m.touch){ST.tcd-=dt;if(d<(car.hx+g.c.hx)*.85&&(car.l|0)===(g.l|0)&&ST.tcd<=0){ST.touch++;ST.tcd=.9;flash(L('касание!')+' '+ST.touch+'/'+m.touch,1);if(ST.touch>=m.touch){ST.fail=m.touchMsg;zoneEnd('time');return true}}}
 ST.far=d>900?ST.far+dt:0;if(ST.far>6){ST.fail=m.lostMsg;zoneEnd('time');return true}
 return false}
// the Shadows box in the Ghost; you knock them off
function c4Guard(m,dt){var G=c4R('ghost');if(!G)return false;var go=ZS.ph==='go';for(var i=0;i<RIV.length;i++)RIV[i].wait=!go;if(!go)return false;
 var z=ZS.z,gs=stRoadS(G),ld=gs-ZS.s;c3Band(G,ld>280?.84:.93);G.vmax=ld>520?90:ld>380?150:ld>260?210:G.V0*1.4;c4Sparks(G,dt);c3Rammers(dt);
 var K=c4R('kir');if(K)c3Band(K,clamp(1-(stRoadS(K)-gs+60)/400,.6,1.12));
 var press=0;
 for(i=0;i<RIV.length;i++){var R=RIV[i];if(!R.sh)continue;R.tgt=G.c;
  if(c4Stun(R,G)&&Math.hypot(wd(R.x,car.x),wd(R.y,car.y))<420)flash(L('«Тень» сбита!'),.9);
  if(R.stun>0)continue;var dG=Math.hypot(wd(R.x,G.x),wd(R.y,G.y));R.atk2=dG<170&&(R.c.l|0)===(G.c.l|0);if(R.atk2)c3Proj(R);
  var rl=stRoadS(R)-gs;c3Band(R,rl<-500?1.22:rl<-300?1.15:rl<-120?1.06:1);
  if(dG<R.c.hx+G.c.hx+7)press++}
 ST.pr=clamp(ST.pr+(press?press*.16:-.05)*dt,0,1);
 if(press&&(!ST.pw||TIME-ST.pw>4)){ST.pw=TIME;flash(L('Призрака зажимают!'),.9)}
 if(ST.pr>=1){ST.fail='«Тени» прижали Призрака';zoneEnd('time');return true}
 if(gs>=z.s1){ST.gfin=1;zoneEnd('fin');return true}
 return false}
// pull alongside the Ghost: Hana shoots his plate
function c4Photo(m,dt){var g=c4R('ghost');if(!g)return false;g.wait=ZS.ph!=='go';if(g.wait)return false;
 var d=Math.hypot(wd(g.x,car.x),wd(g.y,car.y)),ca=Math.cos(g.a),sa=Math.sin(g.a),rx=wd(car.x,g.x),ry=wd(car.y,g.y),lg=rx*ca+ry*sa,lt=-rx*sa+ry*ca;
 ST.pcd-=dt;var side=Math.abs(lg)<28&&Math.abs(lt)>9&&Math.abs(lt)<56&&(car.l|0)===(g.l|0)&&car.sp>45;ST.side=side;
 if(side&&ST.pcd<=0)ST.al+=dt;else ST.al=Math.max(0,ST.al-dt*1.5);
 if(ST.al>=.45){ST.al=0;ST.pcd=1.2;ST.prog++;stFlash();if(S.snd)try{auTone(1500,.035,.07,'square')}catch(e){}popup(L('Кадр!')+' '+ST.prog+'/'+m.need,'big');if(ST.prog>=m.need){zoneEnd('fin');return true}}
 c3Band(g,d>440?.7:d>260?.84:side?.97:(lg<-20&&d<160)?.9:.93+.05*Math.sin(ST.t*.9));g.vmax=d>620?60:d>440?150:g.V0*1.4;c4Sparks(g,dt);
 if(stRoadS(g)>=ZS.z.s1-10){ST.fail='Призрак ушёл, кадров мало';zoneEnd('time');return true}
 return false}
// the boss: one on one, both dark; on the last quarter he kills his tail lights
function c4Boss(m,dt){var g=c4R('ghost');if(!g)return false;g.wait=ZS.ph!=='go';if(g.wait)return false;
 var z=ZS.z,ld=stRoadS(g)-ZS.s,cl=z.s1-z.s0;c3Band(g,ld>0?clamp(.955-ld/2500,.85,.955):clamp(1-ld/1500,1,1.05));c4Sparks(g,dt);
 if(!g.nobrk&&Math.max(stRoadS(g),ZS.s)>z.s0+cl*.75){g.nobrk=1;flash(L('Призрак погасил стоп-сигналы!'),1.4)}
 if(stRoadS(g)>=z.s1){ST.fail='Призрак первым у тории';zoneEnd('time');return true}return false}
// ---- shake the tail (Ryu, lights off), then to the onsen
// (m.tail = who follows you, m.sayGo / m.sayOk / m.failTx = what is said; the defaults are chapter 4's Ryu)
function c4ShakeStart(m){ST.ph=0;ST.hid=0;ST.esc=0;WP=null;stSpawnRin();var R=RIV[RIV.length-1],o=(m.tail&&(C4R[m.tail]||C3R[m.tail]))||C3R.ryu;R.id=o.id;R.name=o.name;R.col=o.tag;R.car=o.car;R.spr=playerSprite(o.car,BODYC[o.col],STRC[o.str]);R.noatk=1e9;R.back=3;
 c4Say(m.sayGo||D('hana','Гаси фары и уходи переулками. Он не должен нас видеть.','Lights off and lose him in the side streets. He mustn’t see us.'))}
function c4Shake(m,dt){var P=stPlace(m.dest);
 if(ST.ph===1){var d=Math.hypot(wd(P.x,car.x),wd(P.y,car.y));if(d<62){stDone(true);return true}if((!WP||!WP.pts)&&d>80&&TIME-(ST.rt||0)>1.5)stRoute(P.x,P.y);return false}
 var R=RIV[0];if(!R)return false;R.noatk=1e9;var dd=stRinUpdate(R,dt);if(c4Dark()&&dd>300)R.los=0;
 ST.hid=(!R.los&&dd>240)?ST.hid+dt:Math.max(0,ST.hid-dt*2);ST.esc=dd>650?ST.esc+dt:0;
 if(ST.hid>4||ST.esc>2.5){rivClear();ST.ph=1;popup(L('Оторвался!'),'big');if(S.snd)try{auBell()}catch(e){}c4Say(m.sayOk||D('hana','Оторвались! Теперь — к онсэну. Фары можно включить.','We lost him! Now — to the onsen. You can turn your lights back on.'));stRoute(P.x,P.y);return true}
 if(ST.t>m.limit){stDone(false,m.failTx||'Рю не отстал');return true}return false}
// ---- lead Kuroda (no lights, wrecked) to the onsen; Shadows come in waves to finish him off
function c4ShadowSpawn(G){var T=[0,0,0],back=420;for(;back<=960;back+=90){rivAt(G,G.P-back,T);if(Math.abs(wd(T[0],cam.x))>VW/2+40||Math.abs(wd(T[1],cam.y))>VH/2+40)break}
 var id=['sh1','sh2','sh3'][ST.wave%3],R=c3Pace(c3Riv(c4o(id,{x:T[0],y:T[1],a:T[2],pts:[[T[0],T[1]],[wrap(T[0]+Math.cos(T[2])*30),wrap(T[1]+Math.sin(T[2])*30)]],loop:false,vmax:470,wait:false,drift:0})),.95,1.2);
 R.sh=1;R.tgt=G.c;R.rt=0;R.cd2=0;flash(L('«Тени» сзади!'),1.2)}
// (m.esc = whose car you lead, m.escName, m.tx = its messages; the defaults are chapter 4's Kuroda; inside it is always 'ghost')
var C4ETX={lost:'Курода потерял тебя в темноте',lag:'Курода отстаёт!',hit:'Удар по Куроде!',kill:'«Тени» добили машину Куроды',wait:'Подожди Куроду',late:'не успели к онсэну'};
function c4Tx(m,k){return(m.tx&&m.tx[k])||C4ETX[k]}
function c4EscortStart(m){ST.ph=0;ST.hp=m.hp||3;ST.lost=0;ST.wave=0;ST.wT=6;WP=null;stSpawnRin();var G=RIV[RIV.length-1],o=(m.esc&&(C4R[m.esc]||C3R[m.esc]))||C4R.ghost;
 G.id='ghost';G.name=m.escName||'Курода';G.col=o.tag;G.car=o.car;G.spr=playerSprite(o.car,BODYC[o.col],STRC[o.str]);G.nohl=m.esc?0:1;G.drift=0;G.esc=1;var C=CARS[o.car];G.c.P=carParams(o.car,[1,1,1]);G.c.hx=C.hx;G.c.hy=C.hy;G.c.m=C.m||1;var P=stPlace(m.dest);stRoute(P.x,P.y)}
function c4Escort(m,dt){var G=c4R('ghost'),P=stPlace(m.dest);if(!G)return false;stTrail(G);
 var dd=Math.hypot(wd(G.x,car.x),wd(G.y,car.y)),pv=car.P.vmax;G.vmax=dd<75?0:dd<140?110:Math.min(pv*.7,90+dd*1.2);G.sk=.9;
 G.pf=(G.pf||0)-dt;if(G.pf<=0&&!m.esc){G.pf=.3;fxPuff(G.x-Math.cos(G.a)*-8,G.y-Math.sin(G.a)*-8,G.l|0)}
 // wedged behind you somewhere (not your fault): put him back on your trail, out of sight
 G.jam=G.c.sp<20&&dd>160?(G.jam||0)+dt:0;if(G.jam>2.5){G.jam=0;var TJ=[0,0,0];rivAt(G,Math.max(0,G.P+60),TJ);if(Math.abs(wd(TJ[0],cam.x))>VW/2+30||Math.abs(wd(TJ[1],cam.y))>VH/2+30||Math.abs(wd(G.x,cam.x))>VW/2+30||Math.abs(wd(G.y,cam.y))>VH/2+30){G.c.x=TJ[0];G.c.y=TJ[1];G.c.a=TJ[2];G.c.vx=G.c.vy=G.c.w=0;G.x=TJ[0];G.y=TJ[1];G.stuck=0;G.rev=0}}
 ST.lost=dd>520?ST.lost+dt:Math.max(0,ST.lost-dt);if(ST.lost>6){stDone(false,c4Tx(m,'lost'));return true}
 if(dd>340&&(!ST.lw||TIME-ST.lw>3)){ST.lw=TIME;flash(L(c4Tx(m,'lag')),1)}
 var live=0;for(var i=RIV.length-1;i>=0;i--){var R=RIV[i];if(!R.sh)continue;
  if(R.out){if(Math.hypot(wd(R.x,car.x),wd(R.y,car.y))>700)RIV.splice(i,1);continue}live++;R.tgt=G.c;
  if(c4Stun(R,G)){R.out=1;flash(L('«Тень» отстала!'),1.1)}
  if(R.stun>0||R.out)continue;var dG=Math.hypot(wd(R.x,G.x),wd(R.y,G.y));R.back=(R.back||0)-dt;R.cd2=(R.cd2||0)-dt;
  R.atk2=dG<160&&R.back<=0&&(R.c.l|0)===(G.c.l|0);if(R.atk2)c3Proj(R);
  R.rt=(R.rt||0)-dt;if(!R.atk2&&(R.rt<=0||R.L-R.P<40)){R.rt=dG>500?1.4:.8;var p=gpsPathFrom(R.c.x,R.c.y,G.x,G.y);if(p)rivPath(R,p,false)}
  R.vmax=pv*(dG>500?1.08:.92);R.sk=1.1;
  if(dG<R.c.hx+G.c.hx+5&&R.cd2<=0){var rel=Math.hypot(R.c.vx-G.c.vx,R.c.vy-G.c.vy);if(rel>60&&R.c.sp>80){R.cd2=3;R.back=4;R.gh=(R.gh||0)+1;if(R.gh>=2){R.out=1;R.atk2=0}ST.hp--;fxSparks(G.x,G.y,12,0,0,G.l|0,1.2);if(S.snd)try{auHit(.5)}catch(e){}
    flash(L(c4Tx(m,'hit'))+' '+'♥'.repeat(Math.max(0,ST.hp))+'♡'.repeat(Math.max(0,(m.hp||3)-ST.hp)),1.2);if(ST.hp<=0){stDone(false,c4Tx(m,'kill'));return true}}}}
 // two Shadows in turn; each gives up after two rams on Kuroda, or at once when you hit it
 ST.wT-=dt;if(ST.wave<2&&!live&&ST.wT<=0&&ST.t>4){c4ShadowSpawn(G);ST.wave++;ST.wT=7}
 var dP=Math.hypot(wd(P.x,car.x),wd(P.y,car.y));if(dP<62){if(dd<230){stDone(true);return true}if(!ST.ww||TIME-ST.ww>3){ST.ww=TIME;flash(L(c4Tx(m,'wait')),1.2)}}
 else if((!WP||!WP.pts)&&dP>80&&TIME-(ST.rt||0)>1.5)stRoute(P.x,P.y);
 if(ST.t>m.limit){stDone(false,c4Tx(m,'late'));return true}
 return false}
// ---- a quiet drive: Kuroda talks, you keep under the limit
function c4Calm(m,dt){var P=stPlace(m.stops[0]),d=Math.hypot(wd(P.x,car.x),wd(P.y,car.y)),kmh=car.sp*.45;
 ST.ov=kmh>m.vlim+4?(ST.ov||0)+dt:Math.max(0,(ST.ov||0)-dt*.6);ST.scd=(ST.scd||0)-dt;
 if(ST.ov>1.1&&ST.scd<=0){ST.strk=(ST.strk||0)+1;ST.scd=2.6;ST.ov=0;var sl=[D('ghost','Тише.','Easy.',KUR),D('ghost','Не гони, я сказал.','Don’t speed, I said.',KUR),D('ghost','Всё. Останови.','That’s it. Stop the car.',KUR)][Math.min(2,ST.strk-1)];C4SUB.t=0;C4SUB.q.unshift(sl);
  flash(L('замечание')+' '+ST.strk+'/'+m.strikes,1.2);if(ST.strk>=m.strikes){stDone(false,'Курода вышел из машины');return true}}
 if(d<62){stDone(true);return true}if((!WP||!WP.pts)&&d>80&&TIME-(ST.rt||0)>1.5)stRoute(P.x,P.y);return false}
// ---- the Shadows Cup: a five-car race through the city along landmark checkpoints (built like the docks race)
// a race checkpoint goes through the middle of a junction (the Scramble), not to a kerb stop that would need a U-turn
function c4Way(k){if(k==='scramble'){var z=stZone('scr');if(z)return{x:z.x,y:z.y}}var A=stPlace(k);return A.g||A}
function c4RaceStart(m){ST.t=0;ST.cd=3.2;ST.cdn=4;ST.rinB=0;var legs=[];for(var i=0;i<m.route.length-1;i++){var Aq=c4Way(m.route[i]),Bq=c4Way(m.route[i+1]),p=gpsPathFrom(Aq.x,Aq.y,Bq.x,Bq.y);if(!p){ST.act=null;return}legs.push(p)}
 var J=c3Join(legs),pts=J.pts,ends=J.ends,cm=[0];for(i=1;i<pts.length;i++)cm.push(cm[i-1]+Math.hypot(wd(pts[i][0],pts[i-1][0]),wd(pts[i][1],pts[i-1][1])));
 ST.rte={pts:pts,cum:cm,L:cm[cm.length-1],i:0,s:0,ci:0,cp:ends.map(function(e,j){return{k:m.route[j+1],i:e,s:cm[e],x:pts[e][0],y:pts[e][1]}})};ST.lim=Math.round(ST.rte.L/150)+20;
 function at(s){var j=0;while(j<cm.length-2&&cm[j+1]<s)j++;var t=(s-cm[j])/((cm[j+1]-cm[j])||1),a=pts[j],b=pts[j+1];return[a[0]+wd(b[0],a[0])*t,a[1]+wd(b[1],a[1])*t,Math.atan2(wd(b[1],a[1]),wd(b[0],a[0]))]}
 var g0=120;for(var sg=120;sg<Math.min(1500,cm[cm.length-1]-500);sg+=10){var h0=at(sg)[2],ok=true;for(var q=20;q<=300&&ok;q+=20)if(Math.abs(angd(at(sg+q)[2],h0))>.3)ok=false;if(ok){g0=sg;break}}
 var st=at(g0+42);car.x=st[0];car.y=st[1];car.a=st[2];car.vx=car.vy=car.w=0;car.l=0;car.dr=false;cam.x=car.x;cam.y=car.y;cam.a=car.a;ST.sx=car.x;ST.sy=car.y;ST.sa=car.a;preload();
 m.grid.forEach(function(q){var g=at(g0+q[1]),nx=-Math.sin(g[2]),ny=Math.cos(g[2]),o=c4o(q[0],{});o.x=wrap(g[0]+nx*q[2]);o.y=wrap(g[1]+ny*q[2]);o.a=g[2];o.pts=pts;o.loop=false;o.vmax=470;o.wait=true;o.drift=q[0]==='rin'||q[0]==='tetsu'?1:0;
  var R=c3Pace(c3Riv(o),C4P.crace[q[0]]||.92,1.05);R.s0=0;if(q[3]){R.ram=1;R.stunMsg='«Тень» оглушена!'}});
 var c0=ST.rte.cp[0];stRoute(c0.x,c0.y)}
function c4Race(m,dt){var T=ST.rte;if(!T)return false;
 if(ST.cd>0){ST.cd-=dt;car.vx=car.vy=0;car.w=0;car.x=ST.sx;car.y=ST.sy;car.a=ST.sa;car.dr=false;var n=Math.ceil(ST.cd);if(n<ST.cdn&&n>0){ST.cdn=n;popup(String(n),'big');if(S.snd)try{auTone(660,.06,.15,'square')}catch(e){}}
  if(ST.cd<=0){popup(L('Вперёд!'),'big');if(S.snd)try{auTone(990,.07,.3,'square')}catch(e){}RIV.forEach(function(R){R.wait=false})}return false}
 function prj(k0,k1,lim){var bi=-1,bd=1e18,bs=0;for(var k=Math.max(0,k0);k<Math.min(T.pts.length-1,k1);k++){var p0=T.pts[k],p1=T.pts[k+1],ex=wd(p1[0],p0[0]),ey=wd(p1[1],p0[1]),l2=ex*ex+ey*ey||1,dx=wd(car.x,p0[0]),dy=wd(car.y,p0[1]),tt=clamp((dx*ex+dy*ey)/l2,0,1),qx=dx-ex*tt,qy=dy-ey*tt,q2=qx*qx+qy*qy,sk=T.cum[k]+Math.sqrt(l2)*tt;if(sk>lim)break;if(q2<bd){bd=q2;bi=k;bs=sk}}return{i:bi,d:Math.sqrt(bd),s:bs}}
 var pj=prj(T.i-4,T.i+40,1e9);if(pj.d>70){var p2=prj(T.i,T.pts.length,T.s+700);if(p2.d<pj.d)pj=p2}if(pj.d<90){T.i=pj.i;T.s=Math.max(T.s,pj.s)}
 var cp=T.cp[T.ci];if(T.ci<T.cp.length-1&&(T.s>=cp.s-60||Math.hypot(wd(cp.x,car.x),wd(cp.y,car.y))<75)){T.ci++;T.s=Math.max(T.s,cp.s);T.i=Math.max(T.i,cp.i);popup(LT(stPlace(cp.k).name)+' ✓','mul');var nc=T.cp[T.ci];stRoute(nc.x,nc.y)}
 else if((!WP||!WP.pts)&&TIME-(ST.rt||0)>1.5)stRoute(cp.x,cp.y);
 c3Rammers(dt);
 // the Rin branch: on the last stretch she shuts the door on Seiji once
 var sj=c4R('seiji');if(S.story.pick==='rin'&&!ST.rinB&&T.ci===T.cp.length-1&&sj&&sj.P>T.s-250){ST.rinB=TIME;flash(L('Рин закрыла Сэйдзи!'),1.4)}
 for(var j=0;j<RIV.length;j++){var Q=RIV[j],ld=Q.P-T.s,f=clamp(1-ld/1200,.85,1.05);if(Q===sj&&ST.rinB&&TIME-ST.rinB<6)f=.78;c3Band(Q,f);if(Q.L-Q.P<40){stDone(false,C4FIN[Q.id]||'соперник первым на финише');return true}}
 var fp=T.pts[T.pts.length-1];if(T.ci===T.cp.length-1&&(T.L-T.s<60||Math.hypot(wd(fp[0],car.x),wd(fp[1],car.y))<60)){popup(L('первый на финише!'),'big');stDone(true);return true}
 if(ST.t>ST.lim){stDone(false,'не успел к финишу');return true}return false}
// a rammer's own stun message (the docks race only knew Tetsu and the Bulldozers)
var _c3RmC4=c3Rammers;c3Rammers=function(dt){var sv=[];for(var i=0;i<RIV.length;i++){var R=RIV[i];if(R.stunMsg&&R.hm>85&&!(R.stun>0)&&R.ram){R.stun=3;R.hm=0;if(Math.hypot(wd(R.x,car.x),wd(R.y,car.y))<400)flash(L(R.stunMsg),1)}}_c3RmC4(dt)};
// ---- hooks: start, per frame, zone finish, HUD, target, leaving for the garage, night
var _smC4=stMain;stMain=function(m){ST.tk=0;ST.tk0=0;ST.ph=0;c4SubClear();C4SP.length=0;
 if(m.type==='shake'){_smC4({type:'x'});c4ShakeStart(m);return}
 if(m.type==='escort'){_smC4({type:'x'});c4EscortStart(m);return}
 if(m.type==='calm'){_smC4({type:'x'});ST.strk=0;ST.ov=0;var s=stPlace(m.stops[0]);stRoute(s.x,s.y);return}
 if(m.type==='crace'){_smC4({type:'x'});c4RaceStart(m);return}
 _smC4(m);
 if(isZR(m)&&ST.act===m&&C4Z[m.type])c4Spawn(m)};
var _skC4=stKinds;stKinds=function(m,dt){c4Talk(m);
 if(C4Z[m.type]){if(!ZS||ZS.z.id!==m.zone)return false;if(m.type==='ghost')return c4GhostTail(m,dt);if(m.type==='guard')return c4Guard(m,dt);if(m.type==='photo')return c4Photo(m,dt);return c4Boss(m,dt)}
 if(m.type==='shake')return c4Shake(m,dt);if(m.type==='escort')return c4Escort(m,dt);if(m.type==='calm')return c4Calm(m,dt);if(m.type==='crace')return c4Race(m,dt);
 return _skC4(m,dt)};
var _udC4=stUpdate;stUpdate=function(dt){_udC4(dt);c4SubUpd(dt);c4SpUpd(dt)};
var _zeC4=zoneEnd;zoneEnd=function(why){var m=ST.act,z=ZS&&ZS.z;if(!m||!z||m.zone!==z.id||!C4Z[m.type])return _zeC4(why);
 if(ZS)bank();_zeSt(why);var ok,rs,ln;
 if(m.type==='ghost'){var pc=ST.tot>0?ST.close/ST.tot:0;ok=why==='fin'&&!ST.fail&&pc>=m.need;rs=ST.fail||(why==='off'?'сошёл с трассы':why!=='fin'?'не успел к финишу':m.farMsg);ln=L('рядом')+' '+Math.round(pc*100)+'% / '+Math.round(m.need*100)+'%'+(m.touch?' · '+L('касания')+' '+ST.touch+'/'+m.touch:'')}
 else if(m.type==='guard'){ok=(why==='fin'||ST.gfin)&&!ST.fail;rs=ST.fail||(why==='off'?'сошёл с трассы':'не успел к финишу');ln=ok?L('Призрак ушёл от «Теней»'):L(rs)}
 else if(m.type==='photo'){ok=ST.prog>=m.need&&!ST.fail;rs=ST.fail||(why==='off'?'сошёл с трассы':'Призрак ушёл, кадров мало');ln=L('кадры')+' '+ST.prog+'/'+m.need}
 else{ok=why==='fin'&&!ST.fail;rs=ST.fail||(why==='off'?'сошёл с трассы':'не успел к финишу');ln=ok?L('первый у тории!'):L(rs)}
 $('zb').style.display='none';stResult(m,ok,ln);stDone(ok,ok?'':rs)};
function c4Bar(t,bar,m,e){e.innerHTML='<b>'+stEsc(LT(m.title))+'</b><span>'+stEsc(t)+'</span>'+(bar>=0?'<i><u style="width:'+Math.round(clamp(bar,0,1)*100)+'%"></u></i>':'')}
var _shC4=stHud;stHud=function(){_shC4();var m=ST.act,e=$('sobj');if(!m||!e||!ST.mode||mode!=='game')return;var P=stPlaces(),t=null,bar=-1;function dm(o){return Math.round(Math.hypot(wd(o.x,car.x),wd(o.y,car.y))/4)}
 if(ST.ride){var rp=P[m.ride],pl=m.ridePass!==undefined?m.ridePass:(m.pass||'hana');t=(pl?L(C4PASS[pl])+' · ':'')+LT(rp.name)+' · '+dm(rp)+' '+L('м')}
 else if(m.type==='ghost'&&ZS&&RIV[0]){var g=RIV[0],pc=ST.tot?ST.close/ST.tot:0;t=L(m.lead==='reiko'?'Рэйко':'Призрак')+' '+dm(g)+' '+L('м')+' · '+L('рядом')+' '+Math.round(pc*100)+'%/'+Math.round(m.need*100)+'%'+(m.touch?' · '+ST.touch+'/'+m.touch:'');bar=pc/m.need}
 else if(m.type==='guard'&&ZS){t=L('Призрака зажимают')+' '+Math.round(ST.pr*100)+'% · '+L('до вершины')+' '+Math.max(0,Math.round((ZS.z.s1-(c4R('ghost')?stRoadS(c4R('ghost')):ZS.s))/4))+' '+L('м');bar=ST.pr}
 else if(m.type==='photo'&&ZS){var g2=c4R('ghost');t=L('кадры')+' '+ST.prog+'/'+m.need+(g2?' · '+L('Призрак')+' '+dm(g2)+' '+L('м'):'')+' · '+L(ST.side?'держись так!':'встань с ним борт в борт');bar=(ST.prog+Math.min(1,ST.al/.45))/m.need}
 else if(m.type==='gboss'&&ZS){var g3=c4R('ghost'),ld=g3?Math.round((stRoadS(g3)-ZS.s)/4):0;t=L('Призрак')+' '+(ld>0?L('впереди')+' '+ld:L('позади')+' '+(-ld))+' '+L('м')+' · '+L('до тории')+' '+Math.max(0,Math.round((ZS.z.s1-ZS.s)/4))+' '+L('м');bar=clamp((ZS.s-ZS.z.s0)/(ZS.z.s1-ZS.z.s0),0,1)}
 else if(m.type==='shake'){if(ST.ph===1){var dP=stPlace(m.dest);t=LT(dP.name)+' · '+dm(dP)+' '+L('м')}else if(RIV[0]){t=L(m.tailName||'Рю')+' '+dm(RIV[0])+' '+L('м')+(ST.hid>0?' · '+L('потерял тебя'):'')+' · '+Math.max(0,Math.ceil(m.limit-ST.t))+' '+L('с');bar=clamp(Math.max(ST.esc/2.5,ST.hid/4),0,1)}}
 else if(m.type==='escort'){var G=c4R('ghost'),D2=stPlace(m.dest);t=(G?L(m.escName||'Курода')+' '+dm(G)+' '+L('м')+' · ':'')+'♥'.repeat(Math.max(0,ST.hp))+'♡'.repeat(Math.max(0,(m.hp||3)-ST.hp))+' · '+LT(D2.name)+' '+dm(D2)+' '+L('м')}
 else if(m.type==='calm'){var C=stPlace(m.stops[0]);t=LT(C.name)+' · '+dm(C)+' '+L('м')+' · '+Math.round(car.sp*.45)+'/'+m.vlim+' '+L('км/ч')+' · '+L('замечания')+' '+(ST.strk||0)+'/'+m.strikes;bar=Math.min(1,car.sp*.45/m.vlim)}
 else if(m.type==='crace'&&ST.rte){var T=ST.rte,pos=1;RIV.forEach(function(R){if(R.P>T.s)pos++});var cq=T.cp[T.ci];t=ST.cd>0?L('старт через')+' '+Math.ceil(ST.cd):L('место')+' '+pos+'/5 · '+(T.ci<T.cp.length-1?L('через')+' '+LT(stPlace(cq.k).name)+' · ':'')+L('до финиша')+' '+Math.max(0,Math.round((T.L-T.s)/4))+' '+L('м');bar=clamp(T.s/T.L,0,1)}
 if(t!==null){if(c4Dark())t+=' · '+L('без фар');c4Bar(t,bar,m,e)}
 else if(c4Dark()){var sp=e.querySelector('span');if(sp&&sp.textContent.indexOf(L('без фар'))<0)sp.textContent+=' · '+L('без фар')}
 // who is in the car with you (the older HUD only knew Kir and Hana)
 var pl2=ST.ride?null:m.pass,ps=e.querySelector('.ps');if(pl2&&C4PASS[pl2]){if(!ps){e.insertAdjacentHTML('beforeend','<em class="ps"></em>');ps=e.querySelector('.ps')}ps.textContent=L(C4PASS[pl2])}else if(ps&&ST.ride)ps.remove()};
var _stC4=stTarget;stTarget=function(){var m=ST.act;if(ST.mode&&m&&!ST.ride){
 if(m.type==='shake')return ST.ph===1?stPlace(m.dest):null;if(m.type==='escort')return stPlace(m.dest);if(m.type==='calm')return stPlace(m.stops[0]);
 if(m.type==='crace'&&ST.rte){var cq=ST.rte.cp[ST.rte.ci];return{x:cq.x,y:cq.y}}if(C4Z[m.type])return null}return _stC4()};
var _hoC4=home;home=function(){var m=ST.act;_hoC4();if(m&&ST.act===m&&(m.type==='shake'||m.type==='escort'||m.type==='calm'||m.type==='crace'))stAbort();c4SubClear()};

// ---- English for the UI strings of this chapter (dialogue lines carry their own), Chinese for everything
Object.assign(EN,{"«Тени» добили машину Куроды":"The Shadows finished off Kuroda’s car","«Тени» прижали Призрака":"The Shadows pinned the Ghost","«Тени» сзади!":"Shadows behind!","«Тень»":"Shadow","«Тень» оглушена!":"The Shadow is stunned!","«Тень» отстала!":"The Shadow dropped back!","«Тень» первая на финише":"A Shadow got to the finish first","«Тень» сбита!":"Shadow knocked off!","Кадр!":"Shot!","Курода":"Kuroda","Курода в машине":"Kuroda is in the car","Курода вышел из машины":"Kuroda got out of the car","Курода отстаёт!":"Kuroda is falling behind!","Курода потерял тебя в темноте":"Kuroda lost you in the dark","Подожди Куроду":"Wait for Kuroda","Призрак":"Ghost","Призрак первым у тории":"The Ghost reached the torii first","Призрак погасил стоп-сигналы!":"The Ghost killed his tail lights!","Призрак ушёл от «Теней»":"The Ghost got away from the Shadows","Призрак ушёл, кадров мало":"The Ghost got away — not enough shots","Призрака зажимают":"Ghost boxed in","Призрака зажимают!":"They’re boxing in the Ghost!","Рин закрыла Сэйдзи!":"Rin shut the door on Seiji!","Рэйко в машине":"Reiko is in the car","Рэйко погасила стоп-сигналы!":"Reiko killed her tail lights!","Рю не отстал":"Ryu stayed on your tail","Удар по Куроде!":"Kuroda took a hit!","без фар":"no lights","впереди":"ahead","встань с ним борт в борт":"pull up side by side with him","держись так!":"hold it there!","до вершины":"to the top","до тории":"to the torii","замечание":"warning","замечания":"warnings","кадры":"shots","не успели к онсэну":"didn’t make it to the onsen","первый у тории!":"first at the torii!","позади":"behind","потерял тебя":"lost you","рядом":"close","потерял Призрака":"lost the Ghost","Призрак ушёл в темноту":"the Ghost vanished into the dark","потерял Рэйко":"lost Reiko","далеко от Рэйко":"too far from Reiko","коснулся машины Рэйко":"touched Reiko’s car","Рэйко попросила остановить":"Reiko asked you to stop"});
Object.assign(ZH,{"Машина без фар":"没有车灯的车","Найди на Кумо машину без фар и держись рядом с ней больше половины перевала":"在云山找到那辆不开灯的车，并在超过一半的山道上紧跟着它","На кассете «12 лет назад» — машина без фар на перевале Кумо. Местные говорят, она ездит там до сих пор.":"“12年前”的录像带里有一辆在云山道上不开灯的车。当地人说它至今还在那里跑。","Я остаюсь в мастерской — перегоню кассету в цифру. Если там что-то есть, найду.":"我留在车库，把录像带转成数字的。要是里面有东西，我会找出来。","А я съезжу посмотрю на ваше привидение.":"那我去看看你们说的幽灵。","Лёха. Если машина без фар — она тебя видит, а ты её нет. Не геройствуй.":"廖哈。没开灯的车能看见你，你却看不见它。别逞英雄。","(Пусто. Ни огонька. Только каменные фонари вдоль дороги…)":"（空无一人。一点光都没有。只有路边的石灯笼……）","(…и чёрная машина у обочины. Без единой фары.)":"（……还有路边一辆黑车。一盏灯都没开。）","Фары выключу. Посмотрим, кто кого.":"我把车灯关了。看看谁更厉害。","(Пропал. Будто его и не было. Ещё раз.)":"（不见了。好像从没出现过。再来一次。）","Ты ездишь как Миша. Это не комплимент.":"你开车像米沙。这可不是夸你。","Вы его знали? Он просил передать: он не злится.":"您认识他？他让我转告：他不生气了。","(долго молчит)":"（沉默了很久）","Уезжай с Кумо, парень. Здесь ночью темно. Спроси Рэйко, откуда у неё шрам.":"离开云山吧，小子。这里晚上很黑。去问玲子，她的伤疤是怎么来的。","(Уехал. Без света, вслепую — и ни разу не задел отбойник.)":"（走了。不开灯，摸黑开——却一次也没碰到护栏。）","Шрам":"伤疤","Довези Рэйко до вершины Кумо. Три удара — и она выйдет":"把玲子送到云山山顶。撞三次——她就下车","Призрак сказал спросить Рэйко про шрам. Она расскажет — но только там, где всё случилось.":"幽灵让你去问玲子的伤疤。她会说——但只在事情发生的地方说。","Курода. Двенадцать лет не слышала этого имени.":"黑田。十二年没听过这个名字了。","Он сказал спросить вас про шрам.":"他让我问您伤疤的事。","(долго молчит) Здесь не расскажу. Отвези меня на вершину Кумо.":"（沉默了很久）在这儿不说。送我去云山山顶。","Сами за руль не хотите?":"您自己不想开吗？","Я двенадцать лет не садилась за руль на Кумо. И не тряси. Я этого не люблю.":"我十二年没在云山上开过车了。别颠。我不喜欢。","Останови. Дальше я пешком.":"停车。剩下的路我走过去。","Двенадцать лет назад здесь была гонка за землю под мастерской. Миша, я и Курода — против Кагэямы.":"十二年前，这里有一场比赛，赌的是车库下面那块地。米沙、我和黑田——对影山。","Выиграли бы мы — Кагэяма оставил бы мастерскую в покое. Навсегда.":"要是我们赢了，影山就不会再碰车库。永远。","На последнем повороте Кагэяма столкнул мою машину с дороги. Она загорелась.":"最后一个弯道，影山把我的车撞下了路。车着火了。","Миша бросил гонку и вытащил меня. До финиша он так и не доехал.":"米沙放弃了比赛，把我拉了出来。他再也没开到终点。","«Она ещё не доехала»…":"“她还没到”……","Полиция записала виноватым Мишу. Он не спорил — чтобы меня не таскали по судам.":"警察把罪名记在米沙头上。他没有争辩——为了不让我被拖上法庭。","А Курода всё видел. И с тех пор ездит здесь без света.":"黑田全都看见了。从那以后，他就在这里摸黑开车。","Миша учил меня ездить. Курода — чинить. А я была девчонкой из раменной.":"米沙教我开车。黑田教我修车。那时我只是拉面店的一个小丫头。","В ту ночь фонари на Кумо тоже не горели.":"那天晚上，云山的灯笼也没亮。","Почти приехали. Видишь тории? Там.":"快到了。看见鸟居了吗？就在那儿。","Курода не поверит человеку, который должен Кагэяме. А ты теперь должен Кагэяме.":"黑田不会相信欠影山钱的人。而你现在就欠影山的钱。","И что делать?":"那我该怎么办？","Ездить как Миша. В темноте. Отвези меня обратно — урок будет сегодня же.":"像米沙那样开。在黑暗里开。送我回去——今晚就上课。","Урок 4. Слепая ночь":"第4课：盲夜","Тандем за Рэйко по Акаги без фар: держись близко больше половины трассы и не коснись её трижды":"不开灯跟着玲子跑赤城：超过一半的路程紧跟着她，不能碰到她三次","Рэйко научит ездить в темноте — иначе Курода с тобой даже говорить не станет.":"玲子会教你在黑暗中驾驶——不然黑田连话都不会跟你说。","Поехали. Сначала — ко мне.":"走吧。先去我那儿。","Пересаживаюсь в свою. Урок четвёртый: ночь без света.":"我换我自己的车。第四课：没有灯光的夜晚。","Фары гасишь ты и гашу я. Смотри на мои стоп-сигналы.":"你关灯，我也关灯。看着我的尾灯。","На середине я выключу и их. Дальше — по памяти.":"到一半我也会把尾灯关掉。之后——靠记忆。","А если я въеду в отбойник?":"要是我撞上护栏呢？","Значит, плохо запомнил первую половину.":"那就说明你前半段没记好。","В темноте нельзя смотреть только на огни. Ещё раз.":"在黑暗里不能只盯着灯。再来一次。","Неплохо. Теперь Курода тебя хотя бы заметит. Вернее — не заметит.":"不错。现在黑田至少会注意到你了。或者说——注意不到你了。","Лёха, это Гэн. Не вешай трубку!":"廖哈，我是玄。别挂电话！","Гэн · по телефону":"玄 · 电话中","Рю сегодня сказал Сэйдзи: «Поймайте Призрака на Кумо. Любой ценой». Они уже едут.":"龙今天对诚二说：“在云山抓住幽灵。不惜一切代价。”他们已经出发了。","Почему я должен тебе верить?":"我为什么要相信你？","Не должен. Но если я прав — Призраку конец.":"你不必相信。但要是我说对了——幽灵就完了。","Я всё слышал. А если это опять ловушка? Ладно. Беру свою 86-ю — встречу тебя у подножия Кумо.":"我都听见了。要是又是陷阱呢？算了。我开我的八六——在云山脚下等你。","Охота на Призрака":"猎捕幽灵","«Тени» зажимают Призрака на Кумо: сбивай их, не дай прижать его — он должен доехать до вершины":"“影子”在云山夹击幽灵：把他们撞开，别让他们逼停他——幽灵必须开到山顶","Гэн предупредил: Рю велел «Теням» поймать Призрака любой ценой.":"玄警告过你：龙命令“影子”不惜一切代价抓住幽灵。","Я у подножия. Едем наверх — посмотрим, соврал Гэн или нет.":"我在山脚下。开上去——看看玄有没有撒谎。","Видишь? Гэн не соврал. Три машины «Теней» — и Призрак впереди.":"看见了吗？玄没撒谎。三辆“影子”的车——幽灵在前面。","Объект на трассе. Прижимаем к отбойнику. Расчётное время — сорок секунд.":"目标在赛道上。把他逼向护栏。预计时间——四十秒。","Кир, держись рядом. Бьём «Теней» в бок — пусть отлетают.":"基尔，跟紧我。撞“影子”的侧面——让他们弹开。","Моя бедная восемьдесят шестая…":"我可怜的八六……","Объект зафиксирован. Свободен, ёппарай.":"目标已锁定。你可以走了，醉鬼。","Погрешность. Отходим.":"误差。撤退。","(Призрак встал у вершины. Окно опустилось на ладонь.)":"（幽灵停在山顶。车窗降下了一掌宽。）","Зачем?":"为什么？","Миша бы вас тоже не бросил.":"米沙也不会丢下您不管。","(кладёт что-то на капот Сакуры и уезжает)":"（把什么东西放在樱花的引擎盖上，开走了）","Ключ. На бирке иероглиф «湯» и цифра три. Это что?":"一把钥匙。牌子上有个“湯”字，还有数字三。这是什么？","Не знаю. Но знаю, кто знает. Хана.":"不知道。但我知道谁会知道。花。","Хвост до онсэна":"甩掉尾巴去温泉","Оторвись от чёрной машины с выключенными фарами — и только потом вези Хану к онсэну":"关掉车灯甩掉那辆黑车——然后再送花去温泉","Бирка «湯 · 3» — старый онсэн под Кумо, куда ездил Миша. Привести туда хвост нельзя.":"“湯 · 3”的牌子——云山下的老温泉，米沙常去的地方。不能把尾巴带过去。","«湯» — горячий источник. Старый онсэн под Кумо, на краю города. Миша ездил туда после каждой ночи на перевале.":"“湯”就是温泉。云山下、城市边上的老温泉。米沙每次在山道上跑完一夜都去那儿。","А «3» — гараж. Их там три, за баней. Я еду с тобой.":"“3”是车库。浴场后面有三个。我跟你一起去。","Стой. Видишь чёрную машину у заправки? Она стоит тут с вечера.":"等等。看见加油站旁边那辆黑车了吗？它从傍晚就停在这儿了。","Гашу фары. Держись.":"关灯。抓稳了。","Он всё ещё за нами. К онсэну так нельзя.":"他还跟着我们。这样不能去温泉。","Гараж номер три. Ключ подошёл…":"三号车库。钥匙对上了……","(Под чехлом — Молния GT. Та самая, с фотографий Миши. Пыльная, без колеса — но целая.)":"（罩布下面——闪电 GT。就是米沙照片里那辆。满是灰尘，少了一个轮子——但完好无损。）","И журнал. Почерк Миши. Тут записка, Лёха.":"还有一本日志。米沙的笔迹。这里有张字条，廖哈。","«Курода дал слово: карту той ночи он отдаст тому, кто пройдёт Кумо без света быстрее него. Я не смог — я тогда остановился»":"“黑田发过誓：那一夜的存储卡，他会交给不开灯跑云山比他更快的人。我没做到——那天晚上我停下了。”","(у источников, пар над водой) Звёзды тут как на ладони. Миша, наверное, сидел на этом же камне.":"（温泉边，水面上冒着热气）这里的星星看得一清二楚。米沙大概也坐过这块石头。","Хана… Про колесо обозрения. Я тогда не договорил.":"花……关于摩天轮。那时我没说完。","Так договори.":"那就说完。","(Она так близко. Ещё чуть-чуть…)":"（她离得好近。再近一点……）","Алексей-сан. Не простудитесь у источников. Ночью в горах холодно.":"阿列克谢先生。别在温泉边着凉了。山里的夜晚很冷。","Кагэяма · по телефону":"影山 · 电话中","Откуда вы знаете, где я?!":"你怎么知道我在哪儿？！","Я многое знаю. Завтра поговорим. Лично.":"我知道很多事。明天谈。当面谈。","(шарит под бампером Сакуры) Лёха… Маячок. Новенький.":"（在樱花的保险杠下摸索）廖哈……追踪器。崭新的。","Вот почему они всегда знают, где я. Пусть пока висит — пусть думают, что мы не нашли.":"难怪他们总知道我在哪儿。先留着——让他们以为我们没发现。","Лёха! Я собрал ночное шоу в бамбуке, тут рядом. Все сборы — тебе на взнос. Я тебе должен, король.":"廖哈！我在竹林办了一场夜间表演，就在附近。所有收入都给你还款。我欠你的，国王。","(у источников, пар над водой) Красиво. Рин бы понравилось?":"（温泉边，水面上冒着热气）真美。凛会喜欢吗？","Хана…":"花……","Просто скажи. Ты с ней?":"直说吧。你和她在一起吗？","Я…":"我……","Бамбук":"竹林","Ночное шоу Гэна в бамбуковой роще: набери 1 500 очков заносом у фонарей":"玄在竹林的夜间表演：在灯笼旁靠漂移拿到1 500分","Гэн заглаживает вину: все сборы с шоу — тебе на взнос. Хана снимает.":"玄在赎罪：表演的全部收入都给你还款。花在拍摄。","Дамы и господа! Только сегодня, среди бамбука и фонарей — король Скрамбла представляет… ёппарая!":"女士们先生们！仅限今晚，在竹林与灯笼之间——十字路口之王为您呈现……醉鬼！","Я снимаю. Не урони мне фонарь на голову.":"我在拍。别把灯笼砸到我头上。","Гэн, а корону ты так и не вернул?":"玄，你的王冠还没拿回来？","Корону не продают, ты сам сказал. Её зарабатывают. Начинаю с тебя.":"王冠是买不来的，这是你说的。要靠自己挣。我从你开始。","Тысяча в шапке и ещё стримы Ханы! Держи, король.":"帽子里一千，还有花的直播！拿着，国王。","Сто тысяч просмотров за ночь. Кажется, ты знаменит.":"一晚上十万播放。看来你出名了。","Слушай. У Призрака на машине есть номер — я видела на перевале. Если снять его поближе, мой знакомый пробьёт, на кого она записана.":"听着。幽灵的车有车牌——我在山道上看到了。要是能拍近一点，我朋友能查出车登记在谁名下。","Затем, что человек, который двенадцать лет молчит, может молчать не просто так.":"因为一个沉默了十二年的人，沉默可能不是没有理由的。","Номер":"车牌","Хана снимает номер Призрака: три раза поравняйся с ним бортом, пока он не доехал до вершины":"花要拍幽灵的车牌：在他开到山顶之前，三次和他并排","Хана хочет узнать, на кого записана машина без фар.":"花想知道那辆不开灯的车登记在谁名下。","Он начинает круг у старта, каждую ночь в одно и то же время. Поехали наверх.":"他每晚同一时间从起点开始跑。我们开上去。","Вот он. Фары не включай — спугнёшь.":"就是他。别开灯——会吓跑他的。","Встань с ним борт в борт, я сделаю кадр со вспышкой. Нужно три.":"和他并排，我用闪光灯拍。要三张。","Он ушёл. Номер я не успела.":"他跑了。车牌我没拍到。","(смотрит в телефон) Номер пробили. Машина записана на «Кагэяма Кэнсэцу».":"（看着手机）车牌查到了。车登记在“影山建设”名下。","Призрак работает на Кагэяму?!":"幽灵在给影山干活？！","Или Кагэяма думает, что он на него работает. Не спеши, брат.":"或者影山以为他在给自己干活。别着急，兄弟。","Алексей-сан, доброй ночи. Господин Кагэяма спонсирует сегодня гонку «Теней». Призовые — две с половиной тысячи.":"阿列克谢先生，晚上好。影山先生今晚赞助一场“影子”的比赛。奖金——两千五。","Окада · по телефону":"冈田 · 电话中","Он лично просил передать вам приглашение. Старт у Токийской башни.":"他亲自让我转达邀请。起点在东京塔。","Это ловушка.":"这是陷阱。","Это половина взноса.":"这是一半的还款。","…Высади меня у лавки. Мы с Киром приедем на финиш.":"……在店门口放我下车。我和基尔去终点等你。","Кубок «Теней»":"“影子”杯","Гонка пятерых по ночному городу: Токийская башня → Скрамбл → Скайтри. Приди первым":"五车夜赛穿越城市：东京塔 → 十字路口 → 晴空塔。拿第一","Кагэяма спонсирует гонку «Теней». Приз — половина взноса. Гэн предупредил: у них на трассе таранная машина.":"影山赞助“影子”的比赛。奖金是一半的还款。玄警告过：他们在赛道上有一辆撞人的车。","Кубок «Теней». Пять машин, три точки, финиш у Скайтри. Призовые — от господина Кагэямы.":"“影子”杯。五辆车，三个点，终点在晴空塔。奖金由影山先生提供。","Сэйдзи, твоя телеметрия меня не остановит.":"诚二，你的遥测数据拦不住我。","Пьяный! Я за призом. Но если «Тени» полезут — я на твоей стороне.":"醉鬼！我是来拿奖金的。但要是“影子”敢乱来——我站你这边。","Лёха, у Сэйдзи вторая машина — таранная. Будет бить тебя в бок на поворотах.":"廖哈，诚二有第二辆车——专门撞人的。会在弯道撞你的侧面。","Пусть попробует.":"让它试试。","Предсказуемо. Пьяный стиль — это шум.":"意料之中。醉拳风格不过是噪音。","Погрешность в расчётах. Опять.":"计算误差。又一次。","Ха! «Тени» в пролёте!":"哈！“影子”输了！","(подбегает первой) Ты псих! Ты… ты молодец.":"（第一个跑过来）你疯了！你……你真棒。","Поздравляю, Алексей-сан. Две с половиной тысячи — ваши. Господин Кагэяма ждёт вас в банке. Он хочет поговорить о взносе.":"恭喜，阿列克谢先生。两千五归您了。影山先生在银行等您，他想谈谈还款的事。","Я закрыла Сэйдзи на последнем отрезке. Не благодари. Я не за тебя — я против «Теней».":"最后一段我挡住了诚二。不用谢。我不是帮你——我是跟“影子”作对。","Предложение":"提议","Внеси четвёртый взнос — 5 000 ¥ — и выслушай Кагэяму":"支付第四笔还款——5 000 ¥——听听影山怎么说","Долг теперь у Кагэямы. Он сам приехал в банк за взносом.":"债务现在在影山手里。他亲自来银行收款。","Алексей-сан. Наконец-то. Присаживайтесь.":"阿列克谢先生。终于来了。请坐。","Назовите цену. Мастерская, Сакура — всё. Долг прощу и добавлю пятьдесят тысяч сверху.":"开个价吧。车库、樱花——全部。债务一笔勾销，再加五万。","Мастерская не продаётся.":"车库不卖。","У каждой мастерской есть цена.":"每个车库都有价钱。","Вот взнос. Пять тысяч.":"这是还款。五千。","(считает) Половину вы заплатили моими же деньгами. Изящно.":"（数着钱）有一半是用我自己的钱付的。真漂亮。","И держитесь подальше от Кумо, Алексей-сан. Там темно. Люди падают.":"还有，离云山远一点，阿列克谢先生。那里很黑。人会摔下去。","Пять тысяч, Алексей-сан. Господин Кагэяма не любит ждать. Я бы на вашем месте поторопился.":"五千，阿列克谢先生。影山先生不喜欢等。我要是您，就快一点。","(провожает до дверей, тише) Алексей-сан… У банка камеры. Я посмотрел запись.":"（送到门口，压低声音）阿列克谢先生……银行门口有摄像头。我看了录像。","Во время прошлого взноса водитель господина Кагэямы лез под вашу Сакуру. Я вам этого не говорил.":"上次您来还款的时候，影山先生的司机钻到了您的樱花底下。这话不是我说的。","Маячок… Спасибо, Окада-сан.":"追踪器……谢谢您，冈田先生。","Я ставлю на вас. Не подведите.":"我押您赢。别让我失望。","Это Курода. «Тени» поймали меня у подножия Кумо. Машина разбита, фар нет.":"我是黑田。“影子”在云山脚下截住了我。车撞坏了，灯也没了。","Курода · по телефону":"黑田 · 电话中","Мне нужно до онсэна. До гаража Миши.":"我得去温泉。去米沙的车库。","Еду.":"马上到。","Засада":"埋伏","Доведи разбитую машину Куроды до онсэна: он едет за твоими стоп-сигналами. Не отрывайся и не дай «Теням» его добить":"把黑田撞坏的车带到温泉：他跟着你的尾灯开。别甩下他，也别让“影子”把他撞毁","«Тени» разбили Куроде передок у подножия Кумо. Своих фар у него нет.":"“影子”在云山脚下撞坏了黑田的车头。他自己的车灯没了。","Приехал. Я пойду за твоими огнями. Не гони — у меня полрадиатора.":"你来了。我跟着你的灯走。别开太快——我的水箱只剩一半了。","Курода":"黑田","А «Тени»?":"那“影子”呢？","Вернутся. Не дай им ударить меня трижды.":"会回来的。别让他们撞我三次。","Хватит. Дальше я сам… как-нибудь.":"够了。剩下的路我自己……想办法。","Курода-сан? Заезжайте. Миша оставил тут инструментов на целую жизнь.":"黑田先生？开进来吧。米沙在这儿留下的工具够用一辈子。","(смотрит на Молнию под чехлом) Значит, он её так и не продал.":"（看着罩布下的闪电）原来他一直没卖掉她。","К утру сделаю вашу машину. Вашу — не Молнию.":"天亮前我把您的车修好。是您的——不是闪电。","Парень. Мне надо в город, в Сэнсо-дзи. Отвезёшь?":"小子。我得进城，去浅草寺。能送我吗？","Свеча":"蜡烛","Отвези Куроду в Сэнсо-дзи. Не быстрее 80 км/ч — он рассказывает":"送黑田去浅草寺。时速不超过80公里——他在讲故事","Курода хочет поставить свечу «за ту ночь на Кумо». И наконец рассказать свою часть.":"黑田想点一支蜡烛，“为了云山的那一夜”。也终于要说出他知道的那部分。","Не гони. Я двенадцать лет никому этого не рассказывал. Хочу успеть.":"别开快。十二年来我没跟任何人说过这些。我想说完。","Останови. Я не за этим садился в машину.":"停车。我上车不是为了这个。","Курода-сан. Миша ставил здесь свечу каждый год. «За ту ночь на Кумо».":"黑田先生。米沙每年都在这里点一支蜡烛。“为了云山的那一夜。”","Теперь моя очередь.":"现在轮到我了。","(Лёхе) А вы его племянник. У вас его руки.":"（对廖哈）您是他的侄子。您有一双和他一样的手。","В ту ночь у меня на торпеде стоял регистратор. Я снял всё: как Кагэяма бьёт машину Рэйко.":"那天晚上我的仪表台上装着行车记录仪。我全拍下来了：影山怎么撞玲子的车。","Утром полиция уже всё решила. Виноват Миша. Кто-то им хорошо заплатил.":"第二天早上警察就定了案。罪在米沙。有人给了他们很多钱。","Карту я спрятал. Миша сказал: «Не сейчас. Отдашь тому, кто пройдёт Кумо без света быстрее тебя».":"存储卡我藏起来了。米沙说：“不是现在。交给不开灯跑云山比你更快的人。”","А потом Кагэяма купил землю на Кумо. И нанял меня сторожем. Машина его, бензин его.":"后来影山买下了云山的地，还雇我当看守。车是他的，油也是他的。","Он платит мне, чтобы я молчал. Я беру — чтобы он думал, что я молчу.":"他付钱让我闭嘴。我收下——好让他以为我闭嘴了。","Завтра ночью. Кумо, без света. Обгонишь — карта твоя. Как договаривались с Мишей.":"明天晚上。云山，不开灯。赢了我——卡就归你。就像和米沙约定的那样。","А если не обгоню?":"要是赢不了呢？","Тогда будешь приезжать, пока не обгонишь. Я подожду. Я умею ждать.":"那就一直来，直到赢为止。我会等。我很会等。","Призрак Кумо":"云山幽灵","Обгони Призрака на Кумо. Оба без фар. Финиш у тории на вершине":"在云山超过幽灵。双方都不开灯。终点在山顶的鸟居","Уговор Миши и Куроды: карта той ночи — тому, кто пройдёт Кумо без света быстрее Призрака.":"米沙和黑田的约定：那一夜的存储卡，交给不开灯跑云山比幽灵更快的人。","«Тени» бросают вызов":"“影子”下战书","Машина как новая. Хана — хороший механик. Береги её.":"车跟新的一样。花是个好技师。好好待她。","Я приехала посмотреть. Двенадцать лет не была здесь ночью. Хидэо, не поддавайся ему.":"我来看看。十二年没在夜里来过这里了。秀夫，别让着他。","Я никому не поддаюсь, Рэйко.":"我从不让着任何人，玲子。","До тории на вершине. Без света. На последнем повороте я гашу всё.":"到山顶的鸟居。不开灯。最后一个弯我会把灯全关掉。","(Как тогда. Только теперь — доедем.)":"（就像那时一样。只是这一次——我们要开到终点。）","Не сегодня. Приезжай завтра. Я подожду.":"今晚不行。明天再来。我等你。","…Обогнал. Двенадцать лет. Я думал, уже не дождусь.":"……你赢了。十二年。我以为等不到了。","(протягивает карту памяти) Здесь та ночь. Целиком.":"（递过一张存储卡）那一夜就在这里面。完整的。","Спасибо, Хидэо.":"谢谢你，秀夫。","(рассвет в раменной Рэйко; засыпает у Лёхи на плече) Только не шевелись…":"（玲子拉面店里的黎明；她靠在廖哈肩上睡着了）别动……","(Лёхе, шёпотом) Береги её.":"（对廖哈，低声）好好待她。","(в дверях раменной) Карта у тебя, ёппарай?":"（站在拉面店门口）卡在你手上吗，醉鬼？","Отец хочет её. А я хочу тебя — на кольце. Без отцовских денег. Ты и я.":"我父亲想要它。而我想要你——在环线上。不用父亲的钱。只有你和我。","Назови время.":"说个时间。","(Рассвет в раменной. Телефон. Сообщение от Рин: «Живой? Тандем в субботу».)":"（拉面店里的黎明。手机响了。凛发来消息：“还活着吗？周六双车跑。”）","(видит экран) …Ответь ей. Мне всё равно.":"（看到了屏幕）……回她吧。我无所谓。","Найти Призрака Кумо, заслужить его доверие и получить карту той ночи":"找到云山幽灵，赢得他的信任，拿到那一夜的存储卡","Тени":"影子","вечер · эстакада С1":"傍晚 · C1高架","Подножие Кумо":"云山脚下","Старт на Кумо":"云山起点","Вершина Кумо":"云山山顶","Старый онсэн":"老温泉","Бамбуковая роща":"竹林","Всё. Останови.":"够了。停车。","Гаси фары и уходи переулками. Он не должен нас видеть.":"关灯，从小巷甩掉他。不能让他看见我们。","Не гони, я сказал.":"我说了，别开快。","Оторвались! Теперь — к онсэну. Фары можно включить.":"甩掉了！现在去温泉。可以开灯了。","Тише.":"慢点。","«Тени» добили машину Куроды":"“影子”撞毁了黑田的车","«Тени» прижали Призрака":"“影子”把幽灵逼停了","«Тени» сзади!":"“影子”在后面！","«Тень»":"“影子”","«Тень» оглушена!":"“影子”被撞晕了！","«Тень» отстала!":"“影子”被甩掉了！","«Тень» первая на финише":"“影子”率先冲线","«Тень» сбита!":"“影子”被撞开了！","Кадр!":"拍到了！","Курода в машине":"黑田在车上","Курода вышел из машины":"黑田下车了","Курода отстаёт!":"黑田跟不上了！","Курода потерял тебя в темноте":"黑田在黑暗中跟丢了你","Подожди Куроду":"等等黑田","Призрак":"幽灵","Призрак первым у тории":"幽灵先到了鸟居","Призрак погасил стоп-сигналы!":"幽灵关掉了尾灯！","Призрак ушёл от «Теней»":"幽灵甩掉了“影子”","Призрак ушёл, кадров мало":"幽灵跑了，照片不够","Призрака зажимают":"幽灵被夹住","Призрака зажимают!":"他们在夹击幽灵！","Рин закрыла Сэйдзи!":"凛挡住了诚二！","Рэйко в машине":"玲子在车上","Рэйко погасила стоп-сигналы!":"玲子关掉了尾灯！","Рю не отстал":"龙一直跟着你","Удар по Куроде!":"黑田被撞了！","без фар":"不开车灯","впереди":"领先","встань с ним борт в борт":"和他并排","держись так!":"保持住！","до вершины":"距山顶","до тории":"距鸟居","замечание":"警告","замечания":"警告","кадры":"照片","не успели к онсэну":"没能赶到温泉","первый у тории!":"第一个到达鸟居！","позади":"落后","потерял тебя":"跟丢你了","рядом":"贴近","потерял Призрака":"跟丢了幽灵","Призрак ушёл в темноту":"幽灵消失在黑暗中","потерял Рэйко":"跟丢了玲子","далеко от Рэйко":"离玲子太远","коснулся машины Рэйко":"碰到了玲子的车","Рэйко попросила остановить":"玲子让你停车"});

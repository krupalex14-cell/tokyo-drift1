// ===== story garage (GTA-style: shop only at Misha's garage), free test drives on the dock pad =====
var GSHOP=false,TD={on:false};
garLocked=function(){return !!(typeof ST!=='undefined'&&ST.mode&&!GSHOP&&!TD.on)};
var _gaShop=garAction;garAction=function(a,i){if(a==='go'||a==='menu')GSHOP=false;_gaShop(a,i)};
function togarage(){var q=stPlaces().garage;GSHOP=false;startGame(true);WP=null;stRoute(q.x,q.y);toast(L('Метка на мастерскую поставлена'))}
// ---- test drive
function tdPad(){return SPEC.filter(function(q){return q.k==='drift'})[0]||null}
function tdBanner(on){var e=$('tdb');if(!e){e=document.createElement('div');e.id='tdb';document.body.appendChild(e);e.addEventListener('click',function(ev){if(ev.target.closest('button'))tdEnd()})}
 if(!on){e.style.display='none';return}e.innerHTML='<span>'+L('ТЕСТ-ДРАЙВ')+' · '+stEsc(L(CARS[TD.ci].n))+'</span><em>'+L('выезд с площадки — конец')+'</em><button>'+L('Закончить')+'</button>';e.style.display='flex'}
function tdStart(i){var s=tdPad();if(!s){toast(L('Нет площадки'));return}if(typeof ST!=='undefined'&&ST.act){toast(L('Сначала закончи миссию'));return}
 TD={on:true,prev:S.car,coins:S.coins,ci:i,pos:car&&car.P?{x:car.x,y:car.y,a:car.a,l:car.l|0}:null};
 S.car=i;startGame(false);car.x=s.x+s.w*.22;car.y=s.y+s.h*.5;car.a=0;car.vx=car.vy=0;cam.x=car.x;cam.y=car.y;cam.a=0;preload();WP=null;tdBanner(true);
 popup(L('Тест-драйв')+': '+L(CARS[i].n),'big')}
function tdStop(){if(!TD.on)return false;TD.on=false;S.car=TD.prev;S.coins=TD.coins;tdBanner(false);if(TD.pos&&car){car.x=TD.pos.x;car.y=TD.pos.y;car.a=TD.pos.a;car.l=TD.pos.l;car.vx=car.vy=0}return true}
function tdEnd(){var ci=TD.ci;if(!tdStop())return;_hoTd();S.coins=TD.coins;GV=ci;save();renderGar()}
function tdUpdate(){S.coins=TD.coins;var s=tdPad();if(!s)return;var m=40,dx=wd(car.x,s.x+s.w/2),dy=wd(car.y,s.y+s.h/2);if(Math.abs(dx)>s.w/2+m||Math.abs(dy)>s.h/2+m)tdEnd()}
var _zuTd=zonesUpdate;zonesUpdate=function(dt){if(TD.on){if(ZP){ZP=null;zPrompt(null)}tdUpdate();return}_zuTd(dt)};
var _hoTd=home;home=function(){if(TD.on){tdEnd();return}_hoTd()};
var _moTd=menuOpen;menuOpen=function(){tdStop();GSHOP=false;_moTd()};
var _huTd=hud;hud=function(dt){_huTd(dt);if(TD.on){var e=$('sobj');if(e)e.style.display='none'}};
var _tbTd=window.tdBack;window.tdBack=function(){if(TD.on&&!DLG){tdEnd();return true}return _tbTd()};
// ---- the "drive in" prompt at Misha's garage (story mode)
function stGarPrompt(){if(ST.prompt==='garage')return;ST.prompt='garage';var e=$('sq');
 e.innerHTML='<div class="zk">'+L('МАСТЕРСКАЯ МИШИ')+'</div><div class="zn">'+L('Машины и тюнинг')+'</div><div class="zi">'+L('Купить машину, поставить детали, перекрасить')+'</div><div class="zbt"><button data-st="shop">'+L('Заехать')+'</button></div>';e.classList.add('on')}
document.addEventListener('click',function(e){var b=e.target.closest('[data-st=shop]');if(!b)return;stPromptHide();GSHOP=true;home()});

// ===== keyboard: driving, dialogues, missions and menus without a mouse; every key can be changed in Settings → Keyboard =====
// keys are physical (e.code), so W/A/S/D work in any keyboard layout, Russian included
var KACT=[
 ['t','Газ',['KeyW','ArrowUp']],
 ['b','Тормоз и задний ход',['KeyS','ArrowDown']],
 ['l','Влево',['KeyA','ArrowLeft']],
 ['r','Вправо',['KeyD','ArrowRight']],
 ['h','Ручник',['Space','ShiftLeft']],
 ['next','Следующая реплика',['Space','Enter']],
 ['skip','Пропустить диалог',['Backspace','']],
 ['ok','Начать миссию / OK',['Enter','NumpadEnter']],
 ['retry','Ещё раз / на дорогу',['KeyR','']],
 ['back','Пауза / назад',['Escape','KeyP']],
 ['map','Карта',['KeyM','']],
 ['gar','Гараж',['KeyG','']],
 ['radio','Радио',['KeyN','']]];
var KBCAP=null,KBUSED=false,KBTUT=0;
function kbCodes(id){var o=S.keys&&S.keys[id];if(o)return o;for(var i=0;i<KACT.length;i++)if(KACT[i][0]===id)return KACT[i][2];return[]}
function kbActs(code){var r=[];for(var i=0;i<KACT.length;i++){var c=kbCodes(KACT[i][0]);if(code&&(c[0]===code||c[1]===code))r.push(KACT[i][0])}return r}
var KBN={Space:'Пробел',Enter:'Enter',NumpadEnter:'Num Enter',Escape:'Esc',Backspace:'Backspace',Tab:'Tab',ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→',ShiftLeft:'Shift',ShiftRight:'Shift',ControlLeft:'Ctrl',ControlRight:'Ctrl',AltLeft:'Alt',AltRight:'Alt',CapsLock:'Caps',Delete:'Del',Insert:'Ins',Home:'Home',End:'End',PageUp:'PgUp',PageDown:'PgDn',Comma:',',Period:'.',Slash:'/',Semicolon:';',Quote:"'",BracketLeft:'[',BracketRight:']',Backslash:'\\',Minus:'-',Equal:'=',Backquote:'`'};
function kbName(c){if(!c)return'—';if(KBN[c])return L(KBN[c]);if(/^Key./.test(c))return c.slice(3);if(/^Digit./.test(c))return c.slice(5);if(/^Numpad/.test(c))return'Num '+c.slice(6);return c}
function kbHintVars(){var b=document.body;if(!b)return;[['ok','ok'],['retry','retry'],['skip','skip'],['next','next']].forEach(function(p){var c=kbCodes(p[0]);b.style.setProperty('--k-'+p[1],'"'+kbName(c[0]||c[1]).replace(/"/g,'')+'"')})}
// ---- where the keys go right now
function kbVisible(e){if(!e)return false;var r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden'}
function kbScope(){if(_vis('set'))return $('set');if($('map').style.display==='flex')return $('map');if(_vis('duo'))return $('duo');if(_vis('gar'))return $('gar');if($('menu').style.display==='flex')return $('menu');if(mode==='edit')return $('ed');return null}
function kbFocusables(sc){var l=sc.querySelectorAll('button,input,select,[tabindex]:not([tabindex="-1"])'),r=[];for(var i=0;i<l.length;i++){var e=l[i];if(e.disabled||!kbVisible(e))continue;r.push(e)}return r}
function kbFocus(e){if(!e)return;try{e.focus({preventScroll:true})}catch(x){e.focus()}try{e.scrollIntoView({block:'nearest',inline:'nearest'})}catch(x){}}
// arrows move between the buttons on screen by where they are, not by their order in the page
function kbMove(sc,dx,dy){var all=kbFocusables(sc);if(!all.length)return;var cur=document.activeElement;
 if(!cur||all.indexOf(cur)<0){kbFocus(sc.querySelector('.go')&&kbVisible(sc.querySelector('.go'))&&!dy?sc.querySelector('.go'):(all.filter(function(e){return e.classList.contains('on')})[0]||all[0]));return}
 var a=cur.getBoundingClientRect(),ax=a.left+a.width/2,ay=a.top+a.height/2,best=null,bs=1e9;
 all.forEach(function(e){if(e===cur)return;var b=e.getBoundingClientRect(),bx=b.left+b.width/2,by=b.top+b.height/2,ddx=bx-ax,ddy=by-ay,along=ddx*dx+ddy*dy,side=Math.abs(ddx*dy)+Math.abs(ddy*dx);
  // the edges must be past each other in that direction (a row of small buttons still counts as "below")
  var past=dx>0?b.left>=a.right-4:dx<0?b.right<=a.left+4:dy>0?b.top>=a.bottom-4:b.bottom<=a.top+4;if(!past||along<=0)return;var s=along+side*2.2;if(s<bs){bs=s;best=e}});
 if(best)kbFocus(best)}
function kbClick(e){if(!e)return false;if(e.tagName==='INPUT'&&e.type!=='button')return false;e.click();return true}
function kbPrimary(sc){var p=sc.querySelector('.go:not(.alt)')||sc.querySelector('[data-a="go"]')||sc.querySelector('.mb1');return p&&kbVisible(p)?p:null}
function kbBack(){
 if(DLG){dlgNext(false);return}
 if(_vis('chap')){$('chap').click();return}
 if($('map').style.display==='flex'){toggleMap();return}
 if(_vis('set')){closeSet();return}
 if(_vis('duo')){$('duo').style.display='none';return}
 if(mode==='edit'){var b=document.querySelector('#ed [data-e=back]');if(b)b.click();return}
 if(mode==='game'){if(_vis('res')){$('res').style.display='none';return}openSet();return}
 if(_vis('gar')){save();menuOpen();return}}
function kbGameAct(a){var zp=$('zp'),res=_vis('res')?$('res'):null;
 if(a==='ok'){var g=res&&res.querySelector('[data-z="ok"]');if(g){g.click();return true}g=document.querySelector('#sq.on [data-st="go"],#zp.on [data-st="go"],#zp.on [data-z="go"]');if(g&&kbVisible(g)){g.click();return true}return false}
 if(a==='retry'){var r=res&&res.querySelector('[data-st="retry"],[data-z="retry"]');if(r){r.click();return true}if(_vis('rsp')){c4Respawn();return true}return false}
 if(a==='back'){kbBack();return true}
 if(a==='map'){toggleMap();return true}
 if(a==='gar'){home();return true}
 if(a==='radio'){var rb=$('radt');if(rb&&kbVisible(rb)){rb.click();return true}return false}
 return false}
function kbDown(e){
 // waiting for a new key in settings
 if(KBCAP){e.preventDefault();e.stopPropagation();var c=e.code;if(c==='Escape'){KBCAP=null;renderSet();return}var cap=KBCAP;KBCAP=null;
  var k=S.keys||{},cur=kbCodes(cap.id).slice();cur[cap.s]=c==='Delete'?'':c;if(!cur[0]&&cur[1]){cur[0]=cur[1];cur[1]=''}k[cap.id]=cur;S.keys=k;save();kbHintVars();renderSet();
  setTimeout(function(){var b=document.querySelector('#set [data-s="kb"][data-i="'+(cap.i)+'"]');if(b)kbFocus(b)},0);return}
 var t=e.target,tag=t&&t.tagName;
 if(tag==='INPUT'&&t.type==='text'||tag==='TEXTAREA'){if(e.code==='Enter'||e.code==='NumpadEnter'){var nb=t.parentNode&&t.parentNode.querySelector('button');if(nb){e.preventDefault();nb.click()}}else if(e.code==='Escape'){t.blur()}else if(e.code==='ArrowUp'||e.code==='ArrowDown'){var sc0=kbScope();if(sc0){e.preventDefault();t.blur();kbMove(sc0,0,e.code==='ArrowUp'?-1:1)}}e.stopPropagation();return}
 if(e.ctrlKey||e.metaKey||e.altKey)return;
 if(!KBUSED){KBUSED=true;kbHintVars()}document.body.classList.add('kb');
 var acts=kbActs(e.code),has=function(a){return acts.indexOf(a)>=0};
 e.stopPropagation();
 // a dialogue is on screen
 if(DLG){if(e.repeat){e.preventDefault();return}if(has('skip')){e.preventDefault();dlgNext(true)}else if(has('next')||has('ok')){e.preventDefault();dlgNext(false)}else if(has('back')){e.preventDefault();dlgNext(true)}return}
 if(_vis('chap')){if(has('ok')||has('next')||has('back')){e.preventDefault();$('chap').click()}return}
 // menus, garage, settings, the map: arrows move between buttons, Enter/Space presses the one in focus
 var sc=kbScope();
 if(sc){var ae=document.activeElement,inSc=ae&&sc.contains(ae)&&ae!==sc,rng=inSc&&ae.tagName==='INPUT'&&ae.type==='range';
  var dir={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.code];
  if(dir){if(rng&&dir[0])return;e.preventDefault();kbMove(sc,dir[0],dir[1]);return}
  if(e.code==='Tab')return;
  if(e.repeat){e.preventDefault();return}
  if(has('back')&&e.code!=='Space'){e.preventDefault();kbBack();return}
  if(has('map')&&sc===$('map')){e.preventDefault();toggleMap();return}
  if(e.code==='Enter'||e.code==='NumpadEnter'||e.code==='Space'||has('ok')){e.preventDefault();if(inSc){kbClick(ae);return}var p=kbPrimary(sc);if(p&&e.code!=='Space')p.click();else if(p)kbFocus(p);else kbMove(sc,0,1);return}
  return}
 // driving
 if(mode==='game'&&!KBTUT&&acts.some(function(a){return a.length===1})){KBTUT=1;var tu=$('tut');if(tu){var n=function(a){var c=kbCodes(a);return kbName(c[0])+(c[1]?'/'+kbName(c[1]):'')};
   tu.innerHTML=n('t')+' · '+n('b')+' — '+L('газ и тормоз')+'<br>'+n('l')+' · '+n('r')+' — '+L('руль')+'<br>'+n('h')+' — '+L('ручник')+' · '+kbName(kbCodes('back')[0])+' — '+L('пауза');tutT=6}}
 // a choice on screen (which way to go, whom to take): number keys pick
 if(mode==='game'&&/^(Digit|Numpad)[1-9]$/.test(e.code)){var pk=[].filter.call(document.querySelectorAll('#sq.on [data-st="pick"],#zp.on [data-st="pick"]'),kbVisible),ix=+e.code.slice(-1)-1;if(pk[ix]){e.preventDefault();pk[ix].click();return}}
 if(mode==='game'){var used=false;['t','b','l','r','h'].forEach(function(a){if(has(a)){K[a]=1;used=true}});
  if(!e.repeat)for(var i=0;i<acts.length;i++){var a=acts[i];if('tblrh'.indexOf(a)>=0)continue;if(kbGameAct(a)){used=true;break}}
  if(used||acts.length)e.preventDefault();return}
 if(acts.length)e.preventDefault()}
function kbUp(e){if(KBCAP)return;var acts=kbActs(e.code);acts.forEach(function(a){if('tblrh'.indexOf(a)>=0&&a.length===1)K[a]=0});if(acts.length)e.stopPropagation()}
addEventListener('keydown',kbDown,true);addEventListener('keyup',kbUp,true);
addEventListener('blur',function(){K.l=K.r=K.t=K.b=K.h=0});
document.addEventListener('pointerdown',function(){document.body.classList.remove('kb')},true);
// ---- settings: Keyboard section
function kbSet(){if(!KBUSED&&!(window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches))return'';
 var q='<div class="sl2">'+L('Клавиатура')+'</div><div class="kbt">'+L('нажми на клавишу в списке, потом новую · Delete — убрать · Esc — отмена')+'</div><div class="kbl">';
 KACT.forEach(function(A,i){var c=kbCodes(A[0]);q+='<div class="kbr"><span>'+L(A[1])+'</span>';for(var s=0;s<2;s++){var cap=KBCAP&&KBCAP.id===A[0]&&KBCAP.s===s;q+='<button class="kbk'+(cap?' cap':'')+(c[s]?'':' none')+'" data-s="kb" data-i="'+(i*2+s)+'">'+(cap?L('нажми клавишу…'):kbName(c[s]))+'</button>'}q+='</div>'});
 return q+'</div><button class="go alt" data-s="kbreset">'+L('Сбросить клавиши')+'</button>'}
var _saKB=setAction;setAction=function(a,i){if(a==='kb'){var A=KACT[i>>1];if(!A)return;KBCAP={id:A[0],s:i&1,i:i};renderSet();var b=document.querySelector('#set [data-s="kb"][data-i="'+i+'"]');if(b)kbFocus(b);return}
 if(a==='kbreset'){delete S.keys;save();kbHintVars();renderSet();return}return _saKB(a,i)};
var _csKB=closeSet;closeSet=function(){KBCAP=null;return _csKB()};
(function(){var st=document.createElement('style');st.textContent=
 'body.kb #ctl{visibility:hidden}'+
 'body.kb button:focus,body.kb input:focus,body.kb [tabindex]:focus{outline:2px solid #ffd23a!important;outline-offset:2px;box-shadow:0 0 0 5px rgba(255,210,58,.25)!important}'+
 '.kbt{font-size:11px;color:var(--muted);margin:-2px 0 8px}.kbl{display:grid;gap:4px;margin-bottom:10px}'+
 '.kbr{display:grid;grid-template-columns:1fr 84px 84px;gap:6px;align-items:center;font-size:12px}.kbr span{overflow:hidden;text-overflow:ellipsis}'+
 '.kbk{background:#2a2240;border:2px solid #3d3360;color:#fff;font:inherit;font-size:12px;padding:6px 4px;min-height:32px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'+
 '.kbk.none{color:var(--muted)}.kbk.cap{border-color:#ffd23a;color:#ffd23a;animation:kbblink .8s steps(2) infinite}@keyframes kbblink{50%{opacity:.55}}'+
 // key hints on buttons once the keyboard is in use
 'body.kb [data-st="go"]::after,body.kb [data-z="go"]::after,body.kb [data-z="ok"]::after{content:" [" var(--k-ok) "]";font-size:.8em;opacity:.75}'+
 'body.kb [data-st="retry"]::after,body.kb [data-z="retry"]::after,body.kb #rspl::after{content:" [" var(--k-retry) "]";opacity:.75}'+
 '.zch{counter-reset:kbpk}body.kb [data-st="pick"]::before{counter-increment:kbpk;content:counter(kbpk) ". ";opacity:.75}'+
 'body.kb .dskip::after{content:" [" var(--k-skip) "]";opacity:.75}'+
 'body.kb #dlg .dln::after{content:"  " var(--k-next) " ▸";font-size:10px;color:var(--muted)}';
 document.head.appendChild(st);kbHintVars()})();
function kbI(d,o){for(var k in o)if(!(k in d))d[k]=o[k]}
kbI(EN,{'газ и тормоз':'throttle and brake','руль':'steering','ручник':'handbrake','пауза':'pause','Клавиатура':'Keyboard','Следующая реплика':'Next line','Пропустить диалог':'Skip dialogue','Начать миссию / OK':'Start mission / OK','Ещё раз / на дорогу':'Retry / back to the road','Пауза / назад':'Pause / back','Карта':'Map','Гараж':'Garage','Радио':'Radio','Сбросить клавиши':'Reset keys','нажми клавишу…':'press a key…','нажми на клавишу в списке, потом новую · Delete — убрать · Esc — отмена':'click a key in the list, then press the new one · Delete clears · Esc cancels','Пробел':'Space','Газ':'Throttle','Тормоз и задний ход':'Brake and reverse','Влево':'Left','Вправо':'Right','Ручник':'Handbrake'});
kbI(ZH,{'газ и тормоз':'油门和刹车','руль':'方向','ручник':'手刹','пауза':'暂停','Клавиатура':'键盘','Следующая реплика':'下一句','Пропустить диалог':'跳过对话','Начать миссию / OK':'开始任务 / 确定','Ещё раз / на дорогу':'重试 / 回到路上','Пауза / назад':'暂停 / 返回','Карта':'地图','Гараж':'车库','Радио':'电台','Сбросить клавиши':'恢复默认按键','нажми клавишу…':'请按键…','нажми на клавишу в списке, потом новую · Delete — убрать · Esc — отмена':'点列表里的按键，再按新键 · Delete 清除 · Esc 取消','Пробел':'空格','Газ':'油门','Тормоз и задний ход':'刹车和倒车','Влево':'向左','Вправо':'向右','Ручник':'手刹'});

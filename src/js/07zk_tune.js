// ===== premium tuning: paints (gold, chrome, a living hologram), neon (gold, rainbow) and coloured tyre smoke =====
// bought once, then free to switch; they sit in the garage (and the workshop's paint corner) under «Премиум».
var PTCOL=[['Матовый чёрный','Matte black','#2c2c32',1000000],['Карамельный красный','Candy red','#c4102e',1500000],['Перламутр','Pearl','#f6eefc',2000000],['Золото','Gold','#e8b838',5000000],['Хром','Chrome','#dfe6f2',10000000],['Голограмма','Hologram','#ff4da6',25000000,'holo']];
var PGLW=[['Золотой неон','Gold neon','#ffc83a',1000000],['Радужный неон','Rainbow neon','#ff4da6',8000000,'rb']];
var PSMK=[['Розовый дым','Pink smoke','#ff7ab8',1000000],['Голубой дым','Cyan smoke','#6ee7ff',1000000],['Золотой дым','Gold smoke','#ffd23a',3000000],['Радужный дым','Rainbow smoke','#ff4da6',10000000,'rb']];
var PC0=BODYC.length,PG0=GLOWC.length,PCONF='';PTCOL.forEach(function(c){BODYC.push(c[2])});PGLW.forEach(function(c){GLOWC.push(c[2])});
function ptOwn(k,i){return !!(S.prem&&S.prem[k]&&S.prem[k][i])}
function ptHue(h){var s=.85,l=.6,a=s*Math.min(l,1-l);function f(n){var k=(n+h/30)%12,c=l-a*Math.max(-1,Math.min(k-3,9-k,1));return ('0'+Math.round(c*255).toString(16)).slice(-2)}return '#'+f(0)+f(8)+f(4)}

// ---------- the garage: hide the premium swatches from the free rows, add the «Премиум» block (not in the parts / cars / records corners)
var _rgTune=renderGar;renderGar=function(){_rgTune();var root=$('gar');if(!root)return;
 [].forEach.call(root.querySelectorAll('[data-a=col],[data-a=glow]'),function(b){var i=+b.dataset.i;if((b.dataset.a==='col'&&i>=PC0)||(b.dataset.a==='glow'&&i>=PG0))b.remove()});
 if(typeof IX!=='undefined'&&IX.st&&IX.st!=='paint')return;var gl=root.querySelector('[data-a=glow]');if(!gl)return;var after=gl.parentNode;
 function item(a,i,c,on,own,price,anim){var sw=anim?'background:linear-gradient(90deg,#ff4da6,#ffd23a,#6ee7ff,#a855ff)':'background:'+c;return '<button class="pti'+(on?' on':'')+(PCONF===a+i?' sure':'')+'" data-a="'+a+'" data-i="'+i+'"><i style="'+sw+'"></i><span>'+stEsc(TR(arguments[7][0],arguments[7][1]))+'<small>'+(on&&own?TR('выбрано','on'):on&&PCONF===a+i?TR('примерка · купить за','trying · buy for')+' '+fmtN(price)+' ¥?':own?TR('куплено','owned'):TR('примерить','try')+' · '+fmtN(price)+' ¥')+'</small></span></button>'}
 var q='<div class="sec">'+L('Премиум')+'</div><div class="ptg">'+TR('Краска','Paint')+'</div><div class="ptl">';
 PTCOL.forEach(function(c,k){q+=item('pc',k,c[2],S.col===PC0+k,ptOwn('c',k),c[3],c[4],c)});
 q+='</div><div class="ptg">'+TR('Неон','Neon')+'</div><div class="ptl">';PGLW.forEach(function(c,k){q+=item('pg',k,c[2],S.glow===PG0+k,ptOwn('g',k),c[3],c[4],c)});
 q+='</div><div class="ptg">'+TR('Дым из-под колёс','Tyre smoke')+'</div><div class="ptl">'+item('ps',-1,'#d8dce8',!(S.smk|0),1,0,0,['Обычный','Plain']);PSMK.forEach(function(c,k){q+=item('ps',k,c[2],(S.smk|0)===k+1,ptOwn('s',k),c[3],c[4],c)});q+='</div>';
 after.insertAdjacentHTML('afterend',q)};
(function(){var st=document.createElement('style');st.textContent='#gar .ptg{font-size:11px;letter-spacing:.12em;color:#ffd23a;margin:10px 0 6px}#gar .ptl{display:grid;grid-template-columns:1fr 1fr;gap:7px}#gar .pti{display:flex;align-items:center;gap:8px;text-align:left;border:0;background:#251d3d;color:var(--ink);padding:7px 8px;font-size:13px;box-shadow:3px 3px 0 #120c1e}#gar .pti i{flex:none;width:24px;height:24px;border:2px solid #000}#gar .pti small{display:block;font-size:11px;color:var(--muted)}#gar .pti.on{background:#3a2a5a;box-shadow:0 0 0 2px #ffd23a}#gar .pti.sure{background:#5a1a3a}';document.head.appendChild(st)})();
// buy, or try it on first: a tried paint/neon/smoke is on the car until you leave the garage without buying it
function ptRevert(){var t=S.ptry;if(!t)return;S.col=t.col;S.glow=t.glow;S.smk=t.smk;S.ptry=null;PCONF='';PTH.k='';if(typeof _pvk!=='undefined')_pvk=''}
if(S.ptry){ptRevert();try{save()}catch(e){}}
var _gaTune=garAction;garAction=function(a,i){if(a!=='pc'&&a!=='pg'&&a!=='ps'){if(a==='go'||a==='menu'||a==='togar'||a==='td'||a==='car'||a==='sel'||a==='buy'){ptRevert();save()}PCONF='';return _gaTune(a,i)}
 var key=a==='pc'?'c':a==='pg'?'g':'s',fld=a==='pc'?'col':a==='pg'?'glow':'smk',L2=a==='pc'?PTCOL:a==='pg'?PGLW:PSMK;
 function val(){return a==='pc'?PC0+i:a==='pg'?PG0+i:i+1}
 function use(){S[fld]=val();PTH.k=''}
 if(a==='ps'&&i<0){S.smk=0;if(S.ptry)S.ptry.smk=0;PCONF='';save();renderGar();return}
 if(ptOwn(key,i)){use();if(S.ptry)S.ptry[fld]=S[fld];PCONF='';save();renderGar();return}
 var c=L2[i];if(PCONF!==a+i){if(!S.ptry)S.ptry={col:S.col,glow:S.glow,smk:S.smk|0};use();PCONF=a+i;save();renderGar();return}PCONF='';
 if(S.coins<c[3]){toast(TR('Нужно','Need')+' '+fmtN(c[3])+' ¥');renderGar();return}
 S.coins-=c[3];S.prem=S.prem||{};S.prem[key]=S.prem[key]||{};S.prem[key][i]=1;use();if(S.ptry)S.ptry[fld]=S[fld];save();toast(TR(c[0],c[1])+' — '+TR('твоё!','yours!'));renderGar()};
if(typeof ixStationClose==='function'){var _iscTune=ixStationClose;ixStationClose=function(q){if(IX.st==='paint'){ptRevert();save()}return _iscTune(q)}}
// the garage preview: the hologram shimmers, the chosen smoke puffs behind the car
var _pvTune=pvLoop;pvLoop=function(t){if(mode===''&&S.col===PC0+5&&PTCOL[5]){var hi=Math.floor(t/250)%24,nc=ptHue(hi*15);if(BODYC[PC0+5]!==nc){BODYC[PC0+5]=nc;_pvk=''}}_pvTune(t);
 if(mode!==''||!(S.smk|0))return;var c=$('pv');if(!c)return;var x=c.getContext('2d'),s=PSMK[(S.smk|0)-1];if(!s)return;for(var k=0;k<6;k++){var ph=((t/700)+k/6)%1,r=Math.max(2,Math.min(15,Math.round(3+ph*10))),col=s[4]?ptHue(((k*4+Math.floor(t/200))%24)*15):s[2];x.globalAlpha=(1-ph)*.6;x.drawImage(ptPuff(col,r),Math.round(60-ph*50-r),Math.round(46-ph*8-r+Math.sin(k*2+t/300)*3));x.globalAlpha=1}};
// ---------- living colours: the hologram paint and the rainbow neon cycle through the hues (24 steps, sprites cached)
var PTH={k:'',h:-1,spr:{}};
var _hudTune=hud;hud=function(dt){_hudTune(dt);if(!car||mode!=='game')return;var hi=Math.floor(TIME*4)%24;
 if(S.col===PC0+5&&PTCOL[5]){var k=S.car+'_'+S.str+'_'+hi;if(PTH.k!==k){PTH.k=k;BODYC[PC0+5]=ptHue(hi*15);sprC=PTH.spr[k]||(PTH.spr[k]=playerSprite(S.car,BODYC[PC0+5],STRC[S.str]))}}
 if(S.glow===PG0+1)GLOWC[PG0+1]=ptHue(((hi+12)%24)*15)};

// ---------- coloured tyre smoke: puffs from the player's drifting wheels take the chosen colour
var PTSM=false,PTPUFF={};
var _dfTune=driftFx;driftFx=function(dt,I){PTSM=!!(S.smk|0);try{return _dfTune(dt,I)}finally{PTSM=false}};
var _spTune=smokePuff;smokePuff=function(x,y,vx,vy,r0,r1,dust,z,life){_spTune(x,y,vx,vy,r0,r1,dust,z,life);if(PTSM&&!dust){var s=PSMK[(S.smk|0)-1];if(s){var p=SMOKE[SMOKE.length-1];p.tc=s[4]?ptHue((Math.floor(TIME*6)%24)*15):s[2];p.tz=p.z;p.z=-9}}};
function ptPuff(col,r){var k=col+r;if(PTPUFF[k])return PTPUFF[k];var n=parseInt(col.slice(1),16),R=n>>16,G=(n>>8)&255,B=n&255;return PTPUFF[k]=puffSpr(r,[Math.min(255,R+40),Math.min(255,G+40),Math.min(255,B+40)],[R*.75|0,G*.75|0,B*.75|0])}
var _dsTune=drawSmoke;drawSmoke=function(z){_dsTune(z);for(var i=0;i<SMOKE.length;i++){var p=SMOKE[i];if(!p.tc||p.tz!==z)continue;var r=Math.max(1,Math.min(15,Math.round(p.r0+(p.r1-p.r0)*Math.pow(1-p.l,.55)))),x=SX(p.x)-r,y=SY(p.y)-r;if(x<-32||y<-32||x>VW+4||y>VH+4)continue;cx.globalAlpha=Math.min(.55,p.l*.62);cx.drawImage(ptPuff(p.tc,r),x,y)}cx.globalAlpha=1};

Object.assign(EN,{'Премиум':'Premium'});
Object.assign(ZH,{'примерка · купить за':'试用中 · 购买需','примерить':'试用','Премиум':'高级','Краска':'车漆','Неон':'霓虹','Дым из-под колёс':'轮胎烟','Обычный':'普通','выбрано':'已选','куплено':'已购','точно?':'确定？','твоё!':'归你了！',
 'Матовый чёрный':'哑光黑','Карамельный красный':'糖果红','Перламутр':'珠光','Золото':'黄金','Хром':'镀铬','Голограмма':'全息','Золотой неон':'金色霓虹','Радужный неон':'彩虹霓虹','Розовый дым':'粉色烟','Голубой дым':'青色烟','Золотой дым':'金色烟','Радужный дым':'彩虹烟'});

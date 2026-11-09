// ===== the games of «Золотой дракон»: slots «Дрифт-7», roulette, blackjack (two tables), the race tote =====
// one window for all of them: a pixel picture on top, the buttons under it. Stakes come out of the same yen as everything else.
var CGM={on:false,g:null,t:0,last:0},CGA=null;
// a 3x5 font for the tables (casino tables speak English the world over)
var PF={A:'.#.#.#####.##.#',B:'##.#.###.#.###.',C:'.###..#..#...##',D:'##.#.##.##.###.',E:'####..##.#..###',F:'####..##.#..#..',G:'.###..#.##.#.##',H:'#.##.#####.##.#',I:'###.#..#..#.###',J:'..#..#..##.#.#.',K:'#.##.###.#.##.#',L:'#..#..#..#..###',M:'#.#####.##.##.#',N:'##.#.##.##.##.#',O:'.#.#.##.##.#.#.',P:'##.#.###.#..#..',Q:'.#.#.##.###..##',R:'##.#.###.#.##.#',S:'.###...#...###.',T:'###.#..#..#..#.',U:'#.##.##.##.####',V:'#.##.##.##.#.#.',W:'#.##.##.#####.#',X:'#.##.#.#.#.##.#',Y:'#.##.#.#..#..#.',Z:'###..#.#.#..###','0':'####.##.##.####','1':'.#.##..#..#.###','2':'##...#.#.#..###','3':'##...#.#...###.','4':'#.##.####..#..#','5':'####..##...###.','6':'.###..####.####','7':'###..#.#..#..#.','8':'####.#####.####','9':'####.####..###.','-':'......###......',':':'....#.....#....','+':'....#.###.#....',x:'...#.#.#.#.#...','.':'.............#.','/':'..#..#.#.#..#..','!':'.#..#..#.....#.','¥':'#.#.#.###.#..#.',' ':'...............'};
function pfw(s,k){return s.length*4*(k||1)-(k||1)}
function pf(g,s,x,y,col,k){k=k||1;g.fillStyle=col;for(var i=0;i<s.length;i++){var G=PF[s[i]]||PF[s[i].toUpperCase()]||PF[' '];for(var r=0;r<5;r++)for(var q=0;q<3;q++)if(G[r*3+q]==='#')g.fillRect(x+(i*4+q)*k,y+r*k,k,k)}}
function pfc(g,s,cxp,y,col,k){pf(g,s,Math.round(cxp-pfw(s,k)/2),y,col,k)}
function cgDisc(g,x,y,r,col){g.fillStyle=col;for(var dy=-Math.ceil(r);dy<=Math.ceil(r);dy++){var w=Math.sqrt(Math.max(0,r*r-dy*dy));if(w<.5)continue;g.fillRect(Math.round(x-w),Math.round(y+dy),Math.round(w*2),1)}}
function cgRnd(n){if(window.crypto&&crypto.getRandomValues){var a=new Uint32Array(1);crypto.getRandomValues(a);return a[0]%n}return Math.floor(Math.random()*n)}
// little sounds of their own (the engine's master is silent in the hall)
function cgS(k){if(!S.snd||!AU)return;try{var C=AU.c,t=C.currentTime;if(!CGA){CGA=C.createGain();CGA.gain.value=.1;CGA.connect(C.destination)}
 function tone(f,d,ty,v,at){var o=C.createOscillator(),e=C.createGain();o.type=ty||'square';o.frequency.value=f;e.gain.setValueAtTime(0,t+(at||0));e.gain.linearRampToValueAtTime(v||.5,t+(at||0)+.005);e.gain.exponentialRampToValueAtTime(.001,t+(at||0)+d);o.connect(e);e.connect(CGA);o.start(t+(at||0));o.stop(t+(at||0)+d+.02)}
 if(k==='tick')tone(900,.03,'square',.25);else if(k==='stop')tone(220,.08,'square',.5);else if(k==='chip')tone(1400,.04,'triangle',.5);else if(k==='card')tone(600,.05,'triangle',.4);
 else if(k==='win'){[523,659,784,1047].forEach(function(f,i){tone(f,.14,'square',.35,i*.09)})}else if(k==='big'){[523,659,784,1047,784,1047,1319].forEach(function(f,i){tone(f,.16,'square',.4,i*.08)})}
 else if(k==='lose')tone(160,.25,'sawtooth',.25);else if(k==='ball')tone(1800+Math.random()*400,.02,'square',.15)}catch(e){}}
// the money
function cgTake(n){if(S.coins<n-1e-6)return false;S.coins-=n;save();cgBal();return true}
function cgPay(n){if(n>0){S.coins+=n;var c=S.casStat||(S.casStat={won:0,big:0});c.won+=n;if(n>c.big)c.big=n}save();cgBal()}
function cgBal(){var e=$('cgbal');if(e)e.textContent=Math.floor(S.coins)+' ¥';var c=$('cacn');if(c)c.textContent=Math.floor(S.coins)+' ¥'}
function cgMsg(t,cls){var e=$('cgmsg');if(!e)return;e.textContent=t||'';e.className=cls||''}
function cgBtn(lb,cls,fn){var b=document.createElement('button');b.className='cgb'+(cls?' '+cls:'');b.textContent=lb;b.onclick=function(){cgS('chip');fn(b)};return b}
function cgRow(){var d=document.createElement('div');d.className='cgr';$('cgk').appendChild(d);return d}
// stake chips (the chosen one is lit); returns the row
function cgStake(list,get,set){var r=cgRow();r.classList.add('cgst');list.forEach(function(v){var b=cgBtn(v+' ¥','',function(){set(v);[].forEach.call(r.children,function(x){x.classList.toggle('on',x._v===v)})});b._v=v;if(get()===v)b.classList.add('on');r.appendChild(b)});return r}
function cgUi(){if($('cgm'))return;var d=document.createElement('div');d.id='cgm';
 d.innerHTML='<div class="cgw"><div class="cgh"><b id="cgt"></b><span id="cgbal"></span><button id="cgx" class="cgb">×</button></div><div class="cgbd"><div class="cgcv"><canvas id="cgc"></canvas></div><div class="cgsd"><div id="cgmsg"></div><div id="cgk"></div></div></div><div id="cgov"></div></div>';
 $('casui').appendChild(d);$('cgx').onclick=function(){cgClose()};$('cgc').addEventListener('pointerdown',function(e){if(!CGM.on||!CGM.g.tap)return;var c=$('cgc'),r=c.getBoundingClientRect();CGM.g.tap((e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height)});
 var st=document.createElement('style');st.textContent='#cgm{position:absolute;inset:0;display:none;background:rgba(8,6,14,.88);pointer-events:auto;align-items:center;justify-content:center;padding:calc(6px + env(safe-area-inset-top)) 8px calc(6px + env(safe-area-inset-bottom));box-sizing:border-box}#cgm.on{display:flex}'+
  '.cgw{position:relative;width:min(100%,560px);display:flex;flex-direction:column;align-items:center;gap:7px}.cgh{width:100%;display:flex;align-items:center;gap:10px}#cgt{flex:1;color:#ffd23a;font-size:16px}#cgbal{font-size:14px;color:var(--ink)}'+
  '.cgcv{position:relative;line-height:0}#cgc{image-rendering:pixelated;image-rendering:crisp-edges;border:3px solid #14101e;box-shadow:4px 4px 0 rgba(255,61,139,.35);touch-action:none}#cgov{position:absolute;left:0;right:0;top:34px;bottom:0;display:none;overflow:auto;background:rgba(14,10,22,.97);border:3px solid #ffd23a;line-height:1.3;padding:10px;box-sizing:border-box;font-size:13px;z-index:2}'+
  '.cgbd{display:flex;flex-direction:column;align-items:center;gap:7px;width:100%}.cgsd{width:100%;display:flex;flex-direction:column;gap:7px}#cgm.wide .cgw{width:min(100%,940px)}#cgm.wide .cgbd{flex-direction:row;justify-content:center;gap:14px}#cgm.wide .cgsd{width:min(44vw,400px)}'+
  '#cgmsg{min-height:19px;font-size:14px;text-align:center;color:var(--ink)}#cgmsg.w{color:#7dff6a}#cgmsg.l{color:#ff8a9a}#cgmsg.b{color:#ffd23a;font-size:17px}'+
  '#cgk{width:100%;display:flex;flex-direction:column;gap:6px}.cgr{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}.cgb{border:0;padding:9px 11px;font-size:14px;font-weight:900;background:#3a2c58;color:#fff;box-shadow:3px 3px 0 #1c1430;min-width:44px}'+
  '.cgb.on{background:var(--pk);color:#2a0d1c;box-shadow:3px 3px 0 var(--pk2)}.cgb.go{background:#ffd23a;color:#2a1a0a;box-shadow:3px 3px 0 #b8862a;flex:1;max-width:280px;font-size:16px}.cgb:disabled{opacity:.35;cursor:default}#cgx{min-width:40px;background:var(--pk);color:#2a0d1c}'+
  '.cgst .cgb{flex:1;max-width:80px;padding:8px 4px}#cgov table{border-collapse:collapse;width:100%}#cgov td{padding:2px 4px;vertical-align:middle}#cgov img{width:30px;height:30px;image-rendering:pixelated;vertical-align:middle}#cgov .r{text-align:right;color:#ffd23a}';
 document.head.appendChild(st)}
function cgFit(){if(!CGM.on)return;var g=CGM.g,c=$('cgc'),k=$('cgk'),D=window.devicePixelRatio||1,wide=innerWidth>innerHeight*1.15;$('cgm').classList.toggle('wide',wide);
 var aw=wide?innerWidth-Math.min(innerWidth*.44,400)-46:Math.min(innerWidth-22,560),ah=wide?innerHeight-64:innerHeight-k.offsetHeight-110;
 var m=Math.min(aw/g.cw,ah/g.ch),s=Math.max(1,Math.floor(m*D))/D;if(s<m*.8)s=m;c.style.width=Math.round(g.cw*s)+'px';c.style.height=Math.round(g.ch*s)+'px'}
function cgOpen(g){cgUi();CGM.g=g;CGM.on=true;var c=$('cgc');c.width=g.cw;c.height=g.ch;$('cgt').textContent=g.title();$('cgk').innerHTML='';$('cgov').style.display='none';cgMsg('');cgBal();
 CIK.l=CIK.r=CIK.u=CIK.d=0;CI.path=null;CI.bub=null;$('cap').style.display='none';$('cgm').classList.add('on');g.open();cgFit();CGM.last=performance.now();requestAnimationFrame(cgLoop)}
function cgClose(){if(!CGM.on)return;if(CGM.g.busy&&CGM.g.busy()){return}CGM.on=false;$('cgm').classList.remove('on');if(CGM.g.close)CGM.g.close();CI.hs=null}
function cgLoop(t){if(!CGM.on)return;var dt=Math.min(.05,Math.max(0,(t-CGM.last)/1000));CGM.last=t;CGM.t+=dt;var g=$('cgc').getContext('2d');g.imageSmoothingEnabled=false;CGM.g.draw(g,CGM.t,dt);requestAnimationFrame(cgLoop)}
addEventListener('resize',function(){if(CGM.on)setTimeout(cgFit,50)});
// keys inside a game window: Enter = the main button, Esc = close, the game may take more
function cgKey(e){if(e.type!=='keydown'||e.repeat)return;var c=e.code;if(c==='Escape'||c==='Backspace'){cgClose();return}if(CGM.g.key&&CGM.g.key(c))return;if(c==='Enter'||c==='NumpadEnter'||c==='Space'){var b=document.querySelector('#cgk .cgb.go:not(:disabled)');if(b)b.click()}}

// ================= slots «Дрифт-7» =================
// one line, three reels of 32: sakura 6, tyre 7, wrench 6, turbo 5, helmet 4, dragon coin 3, seven 1. Pays ~93% back over time.
var SLS=['sak','tire','wr','tu','he','dr','s7'],SLN={sak:6,tire:7,wr:6,tu:5,he:4,dr:3,s7:1},SLP={s7:250,dr:50,he:30,tu:18,wr:12,tire:8,sak:6},SLI=null;
function slIcons(){if(SLI)return SLI;SLI={};var K='#14101e';SLS.forEach(function(s){var c=mkCanvas(24,24),g=c.getContext('2d');function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  if(s==='sak'){for(var i=0;i<5;i++){var a=-Math.PI/2+i*TAU/5;cgDisc(g,12+Math.cos(a)*6,12+Math.sin(a)*6,5,K)}for(i=0;i<5;i++){a=-Math.PI/2+i*TAU/5;cgDisc(g,12+Math.cos(a)*6,12+Math.sin(a)*6,4,'#ff9ac8');R(Math.round(12+Math.cos(a)*8),Math.round(12+Math.sin(a)*8),1,1,'#ffd8ea')}cgDisc(g,12,12,3.4,'#e05a8a');cgDisc(g,12,12,2,'#ffd23a')}
  else if(s==='tire'){cgDisc(g,12,12,11,K);cgDisc(g,12,12,10,'#2a2a34');for(var k=0;k<16;k++){var a2=k/16*TAU;R(Math.round(12+Math.cos(a2)*9),Math.round(12+Math.sin(a2)*9),1,1,'#4a4a58')}cgDisc(g,12,12,6,K);cgDisc(g,12,12,5,'#b8bccb');cgDisc(g,12,12,2,'#6a6e7e');R(9,9,2,1,'#e8ecf4')}
  else if(s==='wr'){for(var q=0;q<15;q++){var x=5+q*.85,y=19-q*.85;R(Math.round(x)-2,Math.round(y)-2,4,4,K)}for(q=0;q<15;q++){x=5+q*.85;y=19-q*.85;R(Math.round(x)-1,Math.round(y)-1,2,2,'#b8bccb')}cgDisc(g,18,6,6,K);cgDisc(g,18,6,5,'#c8ccd8');g.clearRect(19,1,4,5);R(16,4,2,2,'#8a8e9e');cgDisc(g,5,19,4,K);cgDisc(g,5,19,3,'#c8ccd8');R(4,18,2,2,'#14101e')}
  else if(s==='tu'){R(14,8,9,6,K);R(15,9,8,4,'#9aa0b2');cgDisc(g,10,13,9,K);cgDisc(g,10,13,8,'#b8bccb');cgDisc(g,10,13,5,'#6a6e7e');for(var b=0;b<6;b++){var a3=b/6*TAU+.4;R(Math.round(10+Math.cos(a3)*3),Math.round(13+Math.sin(a3)*3),2,2,'#e8ecf4')}cgDisc(g,10,13,1.5,K);R(4,7,3,2,'#e8ecf4')}
  else if(s==='he'){cgDisc(g,12,12,10.5,K);cgDisc(g,12,12,9.5,'#d8202a');R(3,10,18,6,K);R(4,11,16,4,'#1a1a2e');R(6,11,4,1,'#6a7ab0');R(11,2,2,8,'#f4f4f8');R(5,17,14,3,'#9a1418');cgDisc(g,8,6,2,'#ff6a5a')}
  else if(s==='dr'){cgDisc(g,12,12,11,K);cgDisc(g,12,12,10,'#e8b840');cgDisc(g,12,12,8,'#c8962a');cgDisc(g,11,11,8,'#f2c94a');casGlyphIn(g,CGLY.ryu,8,7,'#8a5a10');R(5,5,2,2,'#fff6c8')}
  else if(s==='s7'){pf(g,'7',4,2,K,5);pf(g,'7',5,3,K,5);pf(g,'7',3,1,'#ffd23a',5);pf(g,'7',4,2,'#e0202a',5)}
  SLI[s]=c});return SLI}
var SLOT={cw:152,ch:126,bet:10,reels:null,st:'idle',win:0,wt:0,line:null,
 title:function(){return TR('Слоты «Дрифт-7»','Slots “Drift-7”')},
 strip:function(seed){var a=[];SLS.forEach(function(s){for(var i=0;i<SLN[s];i++)a.push(s)});var h=seed*977;for(var i=a.length-1;i>0;i--){h=(h*1103515245+12345)&0x7fffffff;var j=h%(i+1),t=a[i];a[i]=a[j];a[j]=t}return a},
 open:function(){var me=this;slIcons();if(!this.reels)this.reels=[0,1,2].map(function(i){return {s:me.strip(i+3),pos:cgRnd(32),v:0,stopAt:0,from:0,to:0,t0:0,st:'idle'}});this.st='idle';this.win=0;
  cgStake([10,25,50,100],function(){return me.bet},function(v){me.bet=v});var r=cgRow();this.go=cgBtn(TR('Крутить','Spin'),'go',function(){me.spin()});r.appendChild(this.go);r.appendChild(cgBtn(TR('Выплаты','Payouts'),'',function(){me.table()}));
  cgMsg(TR('Три одинаковых на линии — выигрыш.','Three of a kind on the line wins.'))},
 busy:function(){return this.st==='spin'},
 table:function(){var o=$('cgov');if(o.style.display==='block'){o.style.display='none';return}var I=slIcons(),h='<table>';
  function im(s){return '<img src="'+I[s].toDataURL()+'">'}
  ['s7','dr','he','tu','wr','tire','sak'].forEach(function(s){h+='<tr><td>'+im(s)+im(s)+im(s)+'</td><td class="r">×'+SLP[s]+'</td></tr>'});
  h+='<tr><td>'+im('sak')+im('sak')+' <span style="color:var(--muted)">…</span></td><td class="r">×3</td></tr><tr><td>'+im('sak')+' <span style="color:var(--muted)">…</span></td><td class="r">×1</td></tr>';
  h+='<tr><td>'+im('tire')+im('wr')+im('tu')+' <span style="color:var(--muted)">'+TR('любые из гаража','any garage mix')+'</span></td><td class="r">×2</td></tr></table><p style="color:var(--muted);margin:6px 0 0">'+TR('Сакура считается слева направо. Нажми ещё раз, чтобы закрыть.','Sakura counts from the left. Tap again to close.')+'</p>';
  o.innerHTML=h;o.style.display='block';o.onclick=function(){o.style.display='none'}},
 spin:function(){if(this.st==='spin')return;if(!cgTake(this.bet)){cgMsg(TR('Не хватает денег на ставку.','Not enough money for this bet.'),'l');return}
  $('cgov').style.display='none';this.st='spin';this.win=0;this.line=null;this.go.disabled=true;cgMsg('');var t=CGM.t,me=this;
  this.reels.forEach(function(R,i){R.st='spin';R.v=16+i*1.5;R.stopAt=t+.8+i*.45;R.target=cgRnd(32)})},
 eval:function(){var s=this.reels.map(function(R){return R.s[R.target]}),a=s[0],b=s[1],c=s[2],w=0;
  if(a===b&&b===c)w=SLP[a];else if(a==='sak'&&b==='sak')w=3;else if(a==='sak')w=1;else if(['tire','wr','tu'].indexOf(a)>=0&&['tire','wr','tu'].indexOf(b)>=0&&['tire','wr','tu'].indexOf(c)>=0)w=2;
  this.line=s;this.st='idle';this.go.disabled=false;var won=w*this.bet;this.win=won;this.wt=CGM.t;
  if(won>0){cgPay(won);var big=w>=18;cgMsg((big?TR('Джекпот! ','Jackpot! '):'')+'+'+won+' ¥',big?'b':'w');cgS(big?'big':'win')}else{cgMsg(TR('Мимо. Ещё разок?','No luck. Again?'),'l')}},
 draw:function(g,t,dt){var me=this,K='#14101e',I=slIcons(),i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,152,126,'#5a1420');R(2,2,148,122,'#7a1a28');R(2,2,148,1,'#a83a3a');
  // the marquee
  R(8,4,136,17,K);R(9,5,134,15,'#1c0e14');pfc(g,'DRIFT-7',76,8,'#5a3a10',2);pfc(g,'DRIFT-7',76,7,'#ffd23a',2);
  for(i=0;i<34;i++){var on=((i+Math.floor(t*(this.st==='spin'?14:5)))%4)===0||(this.win>0&&t-this.wt<3&&Math.floor(t*8)%2===0);R(10+i*4,3,2,1,on?'#fff6c8':'#8e6418');R(10+i*4,21,2,1,on?'#fff6c8':'#8e6418')}
  // reels
  R(12,25,128,86,K);
  this.reels.forEach(function(Rl,ri){var x0=14+ri*42;
   if(Rl.st==='spin'){if(t<Rl.stopAt){var p0=Rl.pos;Rl.pos+=Rl.v*dt;if(Math.floor(Rl.pos)!==Math.floor(p0))cgS('tick')}else{Rl.st='stop';Rl.from=Rl.pos;var to=Rl.target;while(to<Rl.pos+3)to+=32;Rl.to=to;Rl.t0=t}}
   if(Rl.st==='stop'){var u=Math.min(1,(t-Rl.t0)/.45),e=1-Math.pow(1-u,3);Rl.pos=Rl.from+(Rl.to-Rl.from)*e+Math.sin(u*Math.PI)*.12*(1-u);if(u>=1){Rl.pos=Rl.target;Rl.st='idle';cgS('stop');if(ri===2)me.eval()}}
   g.save();g.beginPath();g.rect(x0,26,40,84);g.clip();R(x0,26,40,84,'#f4f0e4');for(var yy=26;yy<110;yy+=2)R(x0,yy,40,1,'#ece6d6');
   var base=Math.floor(Rl.pos),fr=Rl.pos-base;for(var r=-2;r<=2;r++){var idx=((base-r)%32+32)%32,sy=Math.round(68+r*28+fr*28-12);g.drawImage(I[Rl.s[idx]],x0+8,sy)}
   if(Rl.st!=='idle'){g.globalAlpha=.25;for(r=0;r<3;r++)R(x0,26+((Math.floor(t*60)+r*29)%84),40,6,'#ffffff');g.globalAlpha=1}
   // the glass: darker top and bottom rows
   g.fillStyle='rgba(20,10,30,.28)';g.fillRect(x0,26,40,26);g.fillRect(x0,84,40,26);g.restore();if(ri<2)R(x0+40,26,2,84,'#c49a36')});
  // the line
  var lit=this.win>0&&t-this.wt<4&&Math.floor(t*6)%2===0;R(12,67,128,1,lit?'#7dff6a':'rgba(224,32,42,.8)');R(8,64,4,7,lit?'#7dff6a':'#e0202a');R(140,64,4,7,lit?'#7dff6a':'#e0202a');
  // bottom: bet and last win
  R(8,113,136,11,K);pf(g,'BET '+this.bet,12,116,'#ffd23a');var ws=this.win>0?'WIN '+this.win:'';pf(g,ws,140-pfw(ws),116,'#7dff6a')},
 key:function(c){return false}};

// ================= the opening of a game from the hall =================
function cgFor(id){return id==='slots'?SLOT:id==='croup'?(typeof ROUL!=='undefined'?ROUL:null):id==='deal1'?(typeof BJ1!=='undefined'?BJ1:null):id==='deal2'?(typeof BJ2!=='undefined'?BJ2:null):id==='race'?(typeof TOTE!=='undefined'?TOTE:null):null}
var _ciActG=ciAct;ciAct=function(){var h=CI.hs;if(!h)return;var key=h.id==='slots'||h.id==='race'?h.id:h.who,G=cgFor(key);if(G){cgOpen(G);return}_ciActG()};

// ================= roulette (European, one zero) =================
var RWHL=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],RRED=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
function rCol(n){return n===0?'g':RRED.indexOf(n)>=0?'r':'b'}
var ROUL={cw:176,ch:226,chip:10,bets:{},hist:[],last:null,st:'idle',W:0,B:0,ballR:31,res:null,stack:[],
 title:function(){return TR('Рулетка','Roulette')},
 spots:function(){if(this._sp)return this._sp;var S2=[],x0=63,y0=90,cw=30,ch=10,i;
  S2.push({k:'n0',x:x0,y:80,w:90,h:10,pays:36,win:function(n){return n===0}});
  for(var r=0;r<12;r++)for(var c=0;c<3;c++){(function(n){S2.push({k:'n'+n,n:n,x:x0+c*cw,y:y0+r*ch,w:cw,h:ch,pays:36,win:function(m){return m===n}})})(r*3+c+1)}
  for(c=0;c<3;c++)(function(c){S2.push({k:'c'+(c+1),lb:'2:1',x:x0+c*cw,y:210,w:cw,h:10,pays:3,win:function(m){return m>0&&(m-1)%3===c}})})(c);
  for(i=0;i<3;i++)(function(i){S2.push({k:'d'+(i+1),lb:['1-12','13-24','25-36'][i],x:43,y:y0+i*40,w:20,h:40,pays:3,win:function(m){return m>0&&Math.floor((m-1)/12)===i}})})(i);
  [['low','1-18',function(m){return m>0&&m<=18}],['even','EVEN',function(m){return m>0&&m%2===0}],['red','',function(m){return rCol(m)==='r'}],['black','',function(m){return rCol(m)==='b'}],['odd','ODD',function(m){return m%2===1}],['high','19-36',function(m){return m>=19}]].forEach(function(q,i){S2.push({k:q[0],lb:q[1],x:23,y:y0+i*20,w:20,h:20,pays:2,win:q[2]})});
  return this._sp=S2},
 total:function(){var t=0;for(var k in this.bets)t+=this.bets[k];return t},
 open:function(){var me=this;this.st=this.st==='spin'?'spin':'idle';
  cgStake([10,50,100,500],function(){return me.chip},function(v){me.chip=v});
  var r=cgRow();r.appendChild(cgBtn(TR('Отменить','Undo'),'',function(){me.undo(me.stack.pop())}));r.appendChild(cgBtn(TR('Очистить','Clear'),'',function(){if(me.st==='spin')return;me.bets={};me.stack=[];me.info()}));
  this.go=cgBtn(TR('Крутить','Spin'),'go',function(){me.spin()});r.appendChild(this.go);this.info()},
 undo:function(e){if(!e)return;if(this.st==='spin'){this.stack.push(e);return}var k=e[0],v=e[1];this.bets[k]=(this.bets[k]||0)-v;if(this.bets[k]<=0)delete this.bets[k];this.info()},
 info:function(){var t=this.total();cgMsg(t?TR('Ставка','Bet')+': '+t+' ¥':TR('Выбери фишку и нажми на поле.','Pick a chip and tap the board.'))},
 busy:function(){return this.st==='spin'},
 tap:function(x,y){if(this.st==='spin')return;var sp=this.spots(),me=this;for(var i=0;i<sp.length;i++){var s=sp[i];if(x>=s.x&&x<s.x+s.w&&y>=s.y&&y<s.y+s.h){
   if(this.total()+this.chip>5000){cgMsg(TR('На столе максимум 5000 ¥.','5000 ¥ max on the table.'),'l');return}
   if(this.total()+this.chip>S.coins){cgMsg(TR('Не хватает денег.','Not enough money.'),'l');return}
   this.bets[s.k]=(this.bets[s.k]||0)+this.chip;this.stack.push([s.k,this.chip]);cgS('chip');this.info();return}}},
 spin:function(){if(this.st==='spin')return;var t=this.total();if(!t){cgMsg(TR('Сначала сделай ставку.','Place a bet first.'),'l');return}
  if(!cgTake(t)){cgMsg(TR('Не хватает денег на эти ставки.','Not enough money for these bets.'),'l');return}
  this.st='spin';this.go.disabled=true;this.res=cgRnd(37);this.t0=CGM.t;this.dur=5.2;this.W0=this.W;this.B0=this.B;cgMsg(TR('Ставки сделаны, ставок больше нет.','No more bets.'))},
 settle:function(){var n=this.res,sp=this.spots(),won=0,me=this;sp.forEach(function(s){var b=me.bets[s.k];if(b&&s.win(n))won+=b*s.pays});
  this.hist.unshift(n);if(this.hist.length>12)this.hist.pop();this.last=n;this.st='idle';this.go.disabled=false;this.wt=CGM.t;
  var cn=TR({r:'красное',b:'чёрное',g:'зеро'}[rCol(n)],{r:'red',b:'black',g:'zero'}[rCol(n)]);
  if(won>0){cgPay(won);cgMsg(n+' '+cn+'. +'+won+' ¥',won>=this.total()*10?'b':'w');cgS(won>=this.total()*10?'big':'win')}else{cgMsg(n+' '+cn+'. '+TR('Ставки не сыграли.','No win.'),'l');cgS('lose')}
  if(this.total()>S.coins){this.bets={};this.stack=[]}},
 draw:function(g,t,dt){var me=this,K='#14101e',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,176,226,'#3a2014');R(2,2,172,222,'#1e6a3e');for(i=0;i<60;i++)R(2+((i*37)%172),2+((i*71)%222),1,1,'#247a48');
  // the wheel
  var cx0=40,cy0=38,sp=this.st==='spin';
  if(sp){var u=Math.min(1,(t-this.t0)/this.dur),e=1-Math.pow(1-u,3);this.W=this.W0+e*TAU*2.2;
   var tgt=RWHL.indexOf(this.res)/37*TAU,rel=tgt+(1-e)*(-TAU*7)+0;this.B=this.W+rel;this.ballR=u<.72?31:u<.82?31-(u-.72)/.1*5+Math.sin(u*80)*1.2:26;
   var pk=Math.floor((this.B-this.W)/TAU*37);if(pk!==this._pk&&u>.6){this._pk=pk;cgS('ball')}
   if(u>=1){this.B=this.W+tgt;this.ballR=26;this.settle()}}
  else{this.W+=dt*.25;if(this.last!=null)this.B=this.W+RWHL.indexOf(this.last)/37*TAU}
  cgDisc(g,cx0+2,cy0+3,35,'rgba(10,6,20,.4)');cgDisc(g,cx0,cy0,35,K);cgDisc(g,cx0,cy0,34,'#5a3420');cgDisc(g,cx0,cy0,31,'#3a2014');
  for(var y=-30;y<=30;y++)for(var x=-30;x<=30;x++){var d=Math.hypot(x,y);if(d>29.5||d<20.5)continue;var a=Math.atan2(y,x)-this.W,idx=Math.floor((((a+TAU/74)%TAU+TAU)%TAU)/TAU*37)%37,n=RWHL[idx],c=rCol(n),fr=(((a+TAU/74)%TAU+TAU)%TAU)/TAU*37%1;
   R(cx0+x,cy0+y,1,1,fr<.08?'#c49a36':d>27.5?(c==='g'?'#2a9a4a':c==='r'?'#c8202a':'#1c1418'):(c==='g'?'#1e7a3a':c==='r'?'#a01820':'#14101e'))}
  cgDisc(g,cx0,cy0,20,K);cgDisc(g,cx0,cy0,19,'#7a4a24');cgDisc(g,cx0,cy0,13,'#5a3420');for(i=0;i<4;i++){var a2=this.W*1+i*TAU/4;for(var q=3;q<15;q++)R(Math.round(cx0+Math.cos(a2)*q),Math.round(cy0+Math.sin(a2)*q),1,1,'#c49a36')}cgDisc(g,cx0,cy0,4,'#c49a36');cgDisc(g,cx0,cy0,2,'#ffd23a');
  if(sp||this.last!=null){var bx=cx0+Math.cos(this.B)*this.ballR,by=cy0+Math.sin(this.B)*this.ballR;cgDisc(g,bx,by,1.6,'#ffffff');R(Math.round(bx)-1,Math.round(by)-1,1,1,'#ffffff')}
  // result and history
  R(84,8,84,40,K);R(85,9,82,38,'#0e1a12');pf(g,'RESULT',88,12,'#7aa08a');
  if(this.last!=null&&!sp){var n2=this.last,c2=rCol(n2),col=c2==='r'?'#e0303a':c2==='b'?'#e8e4f0':'#3ad06a';pfc(g,''+n2,126,22,col,3)}else if(sp)pfc(g,'...',126,26,'#7aa08a',2);
  R(84,52,84,22,K);R(85,53,82,20,'#0e1a12');for(i=0;i<Math.min(8,this.hist.length);i++){var h=this.hist[i],ch=rCol(h);R(87+i*10,56,9,14,ch==='r'?'#a01820':ch==='b'?'#1c1418':'#1e7a3a');pfc(g,''+h,91+i*10,61,'#fff',1)}
  // the board
  var spp=this.spots();spp.forEach(function(s){var bg='#1e6a3e';if(s.n!=null)bg=rCol(s.n)==='r'?'#a01820':'#1c1418';if(s.k==='n0')bg='#1e7a3a';
   var hit=me.last!=null&&!sp&&t-me.wt<4&&s.win(me.last)&&Math.floor(t*5)%2===0;R(s.x,s.y,s.w,s.h,'#e8e0d0');R(s.x+1,s.y+1,s.w-1,s.h-1,hit?'#ffd23a':bg);
   if(s.n!=null)pfc(g,''+s.n,s.x+s.w/2,s.y+3,hit?K:'#f4f0e8');else if(s.k==='n0')pfc(g,'0',s.x+s.w/2,s.y+3,'#f4f0e8');
   else if(s.k==='red'||s.k==='black'){var dc=s.k==='red'?'#e0303a':'#14101e';for(var q2=0;q2<6;q2++){R(s.x+10-q2,s.y+5+q2,q2*2+1,1,dc);R(s.x+10-q2,s.y+15-q2,q2*2+1,1,dc)}}
   else if(s.lb){if(s.h>=40){var parts=s.lb.split('-');pfc(g,parts[0],s.x+s.w/2,s.y+12,'#f4f0e8');pfc(g,'-',s.x+s.w/2,s.y+18,'#f4f0e8');pfc(g,parts[1],s.x+s.w/2,s.y+24,'#f4f0e8')}else pfc(g,s.lb,s.x+s.w/2+.5,s.y+Math.floor((s.h-5)/2)+1,'#f4f0e8')}});
  R(63,90,1,120,'#e8e0d0');R(153,80,1,140,'#e8e0d0');R(23,210,40,1,'#e8e0d0');R(63,220,91,1,'#e8e0d0');
  // chips on the board
  spp.forEach(function(s){var b=me.bets[s.k];if(!b)return;var c=b>=500?'#9a5ad0':b>=100?'#1c1c24':b>=50?'#c8202a':'#3a6ab8',x=s.x+s.w/2,y=s.y+s.h/2;cgDisc(g,x+1,y+1,4,'rgba(0,0,0,.45)');cgDisc(g,x,y,4,'#f4f0e8');cgDisc(g,x,y,3.2,c);R(Math.round(x)-1,Math.round(y)-4,2,1,'#f4f0e8');R(Math.round(x)-1,Math.round(y)+3,2,1,'#f4f0e8');R(Math.round(x)-4,Math.round(y)-1,1,2,'#f4f0e8');R(Math.round(x)+3,Math.round(y)-1,1,2,'#f4f0e8')});
  var tb=this.total();R(4,214,58,9,K);pf(g,'BET '+tb,6,216,'#ffd23a')},
 key:function(c){return false}};

// ================= blackjack: six decks, dealer stands on all 17s, blackjack pays 3:2, double on two cards, one split =================
var CARDI={};
function cardImg(c){var key=c?c.r+c.s:'back';if(CARDI[key])return CARDI[key];var cv2=mkCanvas(18,26),g=cv2.getContext('2d'),K='#14101e';function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
 R(1,0,16,26,K);R(0,1,18,24,K);
 if(!c){R(1,1,16,24,'#a01820');R(2,2,14,22,'#c8302e');for(var y=3;y<23;y+=2)for(var x=3+(y%4?1:0);x<15;x+=2)R(x,y,1,1,'#e05048');R(6,9,6,8,'#a01820');R(7,10,4,6,'#ffd23a');return CARDI[key]=cv2}
 R(1,1,16,24,'#f4f0e4');R(1,1,16,1,'#ffffff');var red=c.s==='h'||c.s==='d',col=red?'#d0202a':'#1c1418',SU={h:['.#.#.','#####','#####','.###.','..#..'],d:['..#..','.###.','#####','.###.','..#..'],s:['..#..','.###.','#####','..#..','.###.'],c:['.###.','.###.','#####','#####','..#..']}[c.s];
 function su(x,y,k){g.fillStyle=col;for(var r=0;r<5;r++)for(var q=0;q<5;q++)if(SU[r][q]==='#')g.fillRect(x+q*k,y+r*k,k,k)}
 var rk=c.r==='T'?'10':c.r;pf(g,rk,3,3,col);su(3,9,1);
 if('JQK'.indexOf(c.r)>=0){R(8,8,8,14,red?'#f8d8d0':'#dcd8e8');pf(g,c.r,9,10,col,2);R(8,8,8,1,'#c49a36');R(8,21,8,1,'#c49a36')}else su(7,13,2);
 return CARDI[key]=cv2}
function bjVal(h){var t=0,a=0;h.forEach(function(c){var v=c.r==='A'?11:'TJQK'.indexOf(c.r)>=0?10:+c.r;t+=v;if(c.r==='A')a++});while(t>21&&a){t-=10;a--}return {t:t,soft:a>0}}
function bjTen(c){return 'TJQK'.indexOf(c.r)>=0}
function BJT(hi){return {cw:176,ch:150,hi:hi,stakes:hi?[200,500,1000,2000]:[10,25,50,100,200],bet:hi?200:10,shoe:[],D:[],H:[],cur:0,st:'bet',q:[],hide:true,res:'',
 title:function(){return hi?TR('Блэкджек · крупные ставки','Blackjack · high stakes'):TR('Блэкджек · малые ставки','Blackjack · small stakes')},
 fill:function(){var s=[],R2='A23456789TJQK';for(var d=0;d<6;d++)'shdc'.split('').forEach(function(su){for(var i=0;i<13;i++)s.push({r:R2[i],s:su})});for(var i=s.length-1;i>0;i--){var j=cgRnd(i+1),t=s[i];s[i]=s[j];s[j]=t}this.shoe=s},
 draw1:function(){if(this.shoe.length<20)this.fill();return this.shoe.pop()},
 open:function(){var me=this;if(!this.shoe.length)this.fill();this.ctl()},
 busy:function(){return this.st==='play'||this.st==='deal'||this.st==='dealer'},
 ctl:function(){var me=this,k=$('cgk');k.innerHTML='';
  if(this.st==='bet'||this.st==='done'){cgStake(this.stakes,function(){return me.bet},function(v){me.bet=v});var r=cgRow();r.appendChild(cgBtn(this.st==='done'?TR('Ещё раздачу','Deal again'):TR('Раздать','Deal'),'go',function(){me.deal()}));
   if(this.st==='bet')cgMsg(TR('Ставка от','Bets from')+' '+this.stakes[0]+' '+TR('до','to')+' '+this.stakes[this.stakes.length-1]+' ¥')}
  else{var r2=cgRow(),h=this.H[this.cur],can=this.st==='play'&&h&&!h.done;
   this.bH=cgBtn(TR('Ещё','Hit'),'go',function(){me.hit()});this.bS=cgBtn(TR('Хватит','Stand'),'go',function(){me.stand()});var r3=cgRow();
   this.bD=cgBtn(TR('Удвоить','Double'),'',function(){me.dbl()});this.bP=cgBtn(TR('Разделить','Split'),'',function(){me.split()});
   r2.appendChild(this.bH);r2.appendChild(this.bS);r3.appendChild(this.bD);r3.appendChild(this.bP);this.btns()}
  cgFit()},
 btns:function(){if(!this.bH)return;var h=this.H[this.cur],can=this.st==='play'&&this.q.length===0&&h&&!h.done;this.bH.disabled=!can;this.bS.disabled=!can;
  this.bD.disabled=!(can&&h.c.length===2&&!h.ace&&S.coins>=h.bet);this.bP.disabled=!(can&&this.H.length===1&&h.c.length===2&&(h.c[0].r===h.c[1].r||bjTen(h.c[0])&&bjTen(h.c[1]))&&S.coins>=h.bet)},
 give:function(to,face){var c=this.draw1();this.q.push({to:to,c:c,face:face});return c},
 deal:function(){if(this.busy())return;if(!cgTake(this.bet)){cgMsg(TR('Не хватает денег на ставку.','Not enough money for this bet.'),'l');return}
  this.D=[];this.H=[{c:[],bet:this.bet,done:false}];this.cur=0;this.hide=true;this.res='';this.st='deal';this.tq=CGM.t;this.ctl();cgMsg('');
  this.give(0,true);this.give(-1,true);this.give(0,true);this.give(-1,false)},
 // cards fly out of the shoe one by one; when the queue is empty, the state moves on
 tick:function(t){if(!this.q.length){return}if(t-this.tq<.32)return;this.tq=t;var a=this.q.shift();a.c.t=t;a.c.fd=!a.face;if(a.to<0)this.D.push(a.c);else this.H[a.to].c.push(a.c);cgS('card');if(!this.q.length)this.after()},
 after:function(){var h=this.H[this.cur];
  if(this.st==='deal'){var up=this.D[0],pb=bjVal(this.H[0].c).t===21,db=bjVal(this.D).t===21;
   if((up.r==='A'||bjTen(up))&&db){this.reveal();this.finish();return}
   if(pb){this.reveal();this.finish();return}this.st='play';this.btns();return}
  if(this.st==='play'){var v=bjVal(h.c).t;if(h.dbl||v>=21||h.ace&&h.c.length===2){h.done=true;this.next();return}this.btns();return}
  if(this.st==='dealer'){this.dealerStep()}},
 hit:function(){var h=this.H[this.cur];if(this.st!=='play'||h.done||this.q.length)return;this.give(this.cur,true);this.btns()},
 stand:function(){var h=this.H[this.cur];if(this.st!=='play'||h.done||this.q.length)return;h.done=true;this.next()},
 dbl:function(){var h=this.H[this.cur];if(this.st!=='play'||h.c.length!==2||this.q.length)return;if(!cgTake(h.bet))return;h.bet*=2;h.dbl=true;this.give(this.cur,true);this.btns()},
 split:function(){var h=this.H[0];if(this.H.length!==1||h.c.length!==2||this.q.length)return;if(!cgTake(h.bet))return;var c2=h.c.pop(),ace=h.c[0].r==='A';
  this.H=[{c:[h.c[0]],bet:h.bet,done:false,ace:ace},{c:[c2],bet:h.bet,done:false,ace:ace}];this.cur=0;this.give(0,true);this.give(1,true);if(ace){this.H[0].done=this.H[1].done=true}this.btns()},
 next:function(){var i=this.cur+1;while(i<this.H.length&&this.H[i].done)i++;if(i<this.H.length){this.cur=i;var h=this.H[i];if(h.c.length<2)this.give(i,true);this.btns();return}
  this.reveal();var alive=this.H.some(function(h){return bjVal(h.c).t<=21});if(!alive){this.finish();return}this.st='dealer';this.dealerStep()},
 reveal:function(){if(this.hide){this.hide=false;this.D.forEach(function(c){c.fd=false});cgS('card')}},
 dealerStep:function(){var v=bjVal(this.D).t;if(v<17){this.give(-1,true)}else this.finish()},
 finish:function(){var dv=bjVal(this.D).t,dbj=dv===21&&this.D.length===2,me=this,pay=0,staked=0,lines=[];
  this.H.forEach(function(h,i){var v=bjVal(h.c).t,bj=v===21&&h.c.length===2&&me.H.length===1,w=0,r;staked+=h.bet;
   if(v>21){r='BUST'}else if(bj&&!dbj){w=h.bet*2.5;r='BLACKJACK'}else if(dbj&&!bj){r='LOSE'}else if(bj&&dbj){w=h.bet;r='PUSH'}else if(dv>21||v>dv){w=h.bet*2;r='WIN'}else if(v===dv){w=h.bet;r='PUSH'}else r='LOSE';
   h.r=r;pay+=w});
  this.st='done';if(pay>0)cgPay(Math.round(pay));var net=Math.round(pay)-staked;
  if(net>0){cgMsg('+'+net+' ¥',net>=staked*1.5?'b':'w');cgS(net>=staked*1.5?'big':'win')}else if(net===0){cgMsg(TR('Ничья — ставка вернулась.','Push — your bet is back.'))}else{cgMsg(TR('Казино забирает','The house takes')+' '+(-net)+' ¥','l');cgS('lose')}
  this.ctl()},
 key:function(c){if(this.st!=='play')return false;if(c==='KeyH'){this.hit();return true}if(c==='KeyS'){this.stand();return true}if(c==='KeyD'){this.dbl();return true}if(c==='KeyP'){this.split();return true}if(c==='Enter'||c==='NumpadEnter'||c==='Space'){this.hit();return true}return false},
 draw:function(g,t,dt){this.tick(t);var me=this,K='#14101e',felt=hi?'#1e3e7a':'#1e6a3e',fl=hi?'#2a4a8a':'#247a48',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,176,150,'#3a2014');R(2,2,172,146,felt);for(i=0;i<70;i++)R(2+((i*37)%172),2+((i*53)%146),1,1,fl);
  pfc(g,'BLACKJACK PAYS 3 TO 2',88,56,hi?'#c8d8ff':'#ffd23a');pfc(g,'DEALER STANDS ON 17',88,64,'rgba(255,255,255,.55)');if(hi)pfc(g,'HIGH STAKES',88,72,'#ffd23a');
  // the shoe
  R(150,6,20,24,K);R(151,7,18,22,'#2a1810');g.drawImage(cardImg(null),151,4,18,26);R(151,20,18,9,'#2a1810');
  function hand(cs,x,y,hidev){cs.forEach(function(c,i){var age=t-(c.t||0),u=Math.min(1,age/.25),tx=x+i*11,ty=y,sx=152,sy=6,px=Math.round(sx+(tx-sx)*u),py=Math.round(sy+(ty-sy)*u);g.fillStyle='rgba(0,0,0,.35)';g.fillRect(px+2,py+2,18,26);g.drawImage(cardImg(c.fd?null:c),px,py)})}
  hand(this.D,72-Math.max(0,this.D.length-2)*5,10);
  var dcx=72-Math.max(0,this.D.length-2)*5+9+(this.D.length-1)*5.5;if(this.D.length&&!this.hide){var dv=bjVal(this.D).t;pfc(g,dv>21?'BUST':''+dv,dcx,40,dv>21?'#ff8a9a':'#fff')}else if(this.D.length){var uv=bjVal([this.D[0]]).t;pfc(g,''+uv,dcx,40,'rgba(255,255,255,.7)')}
  var n=this.H.length;this.H.forEach(function(h,i){var x=n===1?72-Math.max(0,h.c.length-2)*5:(i===0?24:104),y=84;hand(h.c,x,y);
   if(h.c.length){var v=bjVal(h.c),s2=''+v.t,col=v.t>21?'#ff8a9a':'#fff';if(v.t>21)s2='BUST';if(h.r&&h.r!=='BUST'){s2+=' '+(h.r==='BLACKJACK'?'BJ':h.r);col=h.r==='WIN'||h.r==='BLACKJACK'?'#7dff6a':h.r==='PUSH'?'#ffd23a':'#ff8a9a'}pfc(g,s2,x+9+(h.c.length-1)*5.5,114,col)}
   if(n>1&&i===me.cur&&me.st==='play'){R(x-2,82,2,30,'#ffd23a')}
   // the stake in its circle
   var bx=x+9,by=134;cgDisc(g,bx,by,9,'rgba(255,255,255,.35)');cgDisc(g,bx,by,8,felt);if(h.bet){var cc=h.bet>=1000?'#e8b840':h.bet>=500?'#9a5ad0':h.bet>=100?'#1c1c24':h.bet>=50?'#c8202a':h.bet>=25?'#3aa06a':'#3a6ab8';for(var q=0;q<Math.min(4,1+Math.floor(Math.log(h.bet/10+1)));q++){cgDisc(g,bx,by-q*2,5,'#f4f0e8');cgDisc(g,bx,by-q*2,4,cc)}}
   pfc(g,''+h.bet,bx,144-0,'#ffd23a')});
  if(!this.H.length){cgDisc(g,88,134,9,'rgba(255,255,255,.35)');cgDisc(g,88,134,8,felt);pfc(g,''+this.bet,88,131,'#ffd23a')}}}}
var BJ1=BJT(false),BJ2=BJT(true);

// ================= the tote: five street cars, two laps of the little oval, bet on the winner =================
var TCARS=[['Синяя «Сильвия»','Blue “Silvia”','#3a6ab8'],['Красный RX-7','Red RX-7','#d8202a'],['Белая AE86','White AE86','#f2f2f2'],['Чёрный GT-R','Black GT-R','#2a2a34'],['Жёлтая NSX','Yellow NSX','#f2c230'],['Оранжевая «Супра»','Orange “Supra”','#e86a20'],['Зелёный «Лансер»','Green “Lancer”','#3aa06a'],['Фиолетовый «Скайлайн»','Purple “Skyline”','#8a5ad0']];
var TOTE={cw:176,ch:132,bet:50,pick:-1,R:null,st:'idle',ord:null,
 title:function(){return TR('Ставки на заезды','Race betting')},
 roll:function(){var pool=TCARS.map(function(c,i){return i});for(var i=pool.length-1;i>0;i--){var j=cgRnd(i+1),t=pool[i];pool[i]=pool[j];pool[j]=t}
  var R=pool.slice(0,5).map(function(k){return {k:k,s:.6+cgRnd(1000)/1000}}),sum=0;R.forEach(function(r){r.w=r.s*r.s;sum+=r.w});R.forEach(function(r){r.p=r.w/sum;r.o=Math.max(1.2,Math.floor(.9/r.p*10)/10)});this.R=R;this.pick=-1;this.st='idle';this.ord=null;this.res=null},
 open:function(){if(!this.R)this.roll();this.ctl()},
 busy:function(){return this.st==='race'},
 ctl:function(){var me=this,k=$('cgk');k.innerHTML='';
  if(this.st==='done'){var r0=cgRow();r0.appendChild(cgBtn(TR('Новый заезд','Next race'),'go',function(){me.roll();me.ctl()}));cgFit();return}
  var list=cgRow();list.style.flexDirection='column';list.style.alignItems='stretch';
  this.R.forEach(function(r,i){var b=cgBtn('','',function(){if(me.st!=='idle')return;me.pick=i;me.ctl()});b.style.display='flex';b.style.justifyContent='space-between';b.style.padding='7px 10px';
   b.innerHTML='<span><i style="display:inline-block;width:10px;height:10px;background:'+TCARS[r.k][2]+';border:2px solid #14101e;margin-right:7px;vertical-align:-1px"></i>'+TR(TCARS[r.k][0],TCARS[r.k][1])+'</span><span style="color:#ffd23a">×'+r.o.toFixed(1)+'</span>';if(me.pick===i)b.classList.add('on');list.appendChild(b)});
  cgStake([50,100,250,500],function(){return me.bet},function(v){me.bet=v});
  var r=cgRow();this.go=cgBtn(TR('Ставлю и старт','Bet and go'),'go',function(){me.start()});this.go.disabled=this.pick<0||this.st!=='idle';r.appendChild(this.go);
  if(this.st==='idle')cgMsg(this.pick<0?TR('Выбери машину.','Pick a car.'):TR('Если твоя машина придёт первой, выигрыш — ставка, умноженная на коэффициент.','If your car wins, you get the stake times the odds.'));cgFit()},
 start:function(){if(this.st!=='idle'||this.pick<0)return;if(!cgTake(this.bet)){cgMsg(TR('Не хватает денег на ставку.','Not enough money for this bet.'),'l');return}
  // the finishing order is drawn by the odds; the race then plays it out with overtakes on the way
  var left=this.R.map(function(r,i){return i}),ord=[];while(left.length){var s=0;left.forEach(function(i){s+=this.R[i].p}.bind(this));var x=cgRnd(100000)/100000*s,acc=0,pickI=left[left.length-1];for(var q=0;q<left.length;q++){acc+=this.R[left[q]].p;if(x<=acc){pickI=left[q];break}}ord.push(pickI);left.splice(left.indexOf(pickI),1)}
  this.ord=ord;var me=this;this.R.forEach(function(r,i){var rank=ord.indexOf(i);r.T=8.4+rank*.38+cgRnd(100)/400;r.A=.05+cgRnd(100)/1500;r.m=1+cgRnd(3);r.ph=cgRnd(628)/100});this.t0=CGM.t;this.st='race';this.ctl();this.go.disabled=true;cgMsg(TR('Поехали!','They’re off!'))},
 finish:function(){this.st='done';var w=this.ord[0],r=this.R[w],nm=TR(TCARS[r.k][0],TCARS[r.k][1]);
  if(w===this.pick){var won=Math.round(this.bet*r.o);cgPay(won);cgMsg(TR('Первой пришла','The winner:')+' '+nm+'! +'+won+' ¥',r.o>=4?'b':'w');cgS(r.o>=4?'big':'win')}else{cgMsg(TR('Первой пришла','The winner:')+' '+nm+'. '+TR('Ставка не сыграла.','Your bet lost.'),'l');cgS('lose')}this.ctl()},
 path:function(u){// the oval's centre line: two straights of 96 and two half-circles of radius 32
  var L1=96,rr=32,P=2*L1+2*Math.PI*rr;u=((u%P)+P)%P;var cx1=40,cx2=136,cy=64;
  if(u<L1)return [cx1+u,cy-rr,0];u-=L1;if(u<Math.PI*rr){var a=-Math.PI/2+u/rr;return [cx2+Math.cos(a)*rr,cy+Math.sin(a)*rr,a+Math.PI/2]}u-=Math.PI*rr;if(u<L1)return [cx2-u,cy+rr,Math.PI];u-=L1;var a2=Math.PI/2+u/rr;return [cx1+Math.cos(a2)*rr,cy+Math.sin(a2)*rr,a2+Math.PI/2]},
 draw:function(g,t,dt){var me=this,K='#14101e',i;function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
  R(0,0,176,132,'#14101e');R(1,1,174,130,'#2a5a34');for(i=0;i<80;i++)R(1+((i*37)%174),1+((i*59)%130),1,1,'#346a3e');
  // asphalt ring
  for(var y=18;y<112;y++)for(var x=2;x<174;x++){var dx=x<40?x-40:x>136?x-136:0,dy=y-64,d=dx?Math.hypot(dx,dy):Math.abs(dy);if(d>21&&d<43)R(x,y,1,1,(d<22.5||d>41.5)?'#e8e0d0':((x*7+y*13)%11?'#4a4a56':'#55555f'))}
  R(40,30,96,68,'#2a5a34');pfc(g,'GOLDEN DRAGON',88,52,'#ffd23a');pfc(g,'STREET CUP',88,60,'#ffd23a');casGlyphIn(g,CGLY.ryu,84,68,'#c49a36');
  // start line
  for(i=0;i<10;i++)R(88,22+i*2,2,2,(i%2)?'#f4f0e8':K),R(90,22+i*2,2,2,(i%2)?K:'#f4f0e8');
  var P=2*96+2*Math.PI*32,laps=2,race=this.st==='race',tt=race?t-this.t0:0;
  var pos=this.R.map(function(r,i){var u=0;if(me.st==='race'||me.st==='done'){var rk=me.ord.indexOf(i),over=me.st==='done'?9:tt-r.T;if(over>0)u=P*laps+Math.min(over*30,36-rk*8);else{var x2=tt/r.T;u=(x2+r.A*Math.sin(TAU*r.m*x2+r.ph)*x2*(1-x2)*4)*P*laps}}return {i:i,u:u,lane:(i-2)*3.6}});
  if(race&&this.R.every(function(r){return tt>=r.T}))this.finish();
  pos.forEach(function(p){var q=me.path(48+p.u),r=me.R[p.i],nx=-Math.sin(q[2]),ny=Math.cos(q[2]),x=q[0]+nx*p.lane,y=q[1]+ny*p.lane;g.save();g.translate(Math.round(x),Math.round(y));g.rotate(Math.round(q[2]/(Math.PI/8))*(Math.PI/8));
   g.fillStyle='rgba(0,0,0,.4)';g.fillRect(-3,-1,8,4);g.fillStyle=K;g.fillRect(-4,-2,9,5);g.fillStyle=TCARS[r.k][2];g.fillRect(-3,-1,7,3);g.fillStyle='#9fd0e4';g.fillRect(1,-1,1,3);if(p.i===me.pick){g.fillStyle='#ffd23a';g.fillRect(-4,-3,9,1)}g.restore()});
  // the order now
  var srt=pos.slice().sort(function(a,b){return b.u-a.u});if(this.st==='done')srt=this.ord.map(function(i){return pos[i]});
  R(2,114,172,16,K);srt.forEach(function(p,k){var x=6+k*34,r=me.R[p.i];pf(g,''+(k+1),x+4,119,'#ffd23a');R(x+10,116,16,11,K);R(x+11,117,14,9,TCARS[r.k][2]);if(p.i===me.pick){R(x+9,115,18,1,'#ffd23a');R(x+9,127,18,1,'#ffd23a');R(x+9,115,1,13,'#ffd23a');R(x+26,115,1,13,'#ffd23a')}})},
 key:function(c){var n={Digit1:0,Digit2:1,Digit3:2,Digit4:3,Digit5:4}[c];if(n!=null&&this.st==='idle'){this.pick=n;this.ctl();return true}return false}};

Object.assign(ZH,{'Слоты «Дрифт-7»':'老虎机“漂移-7”','Крутить':'转动','Выплаты':'赔率表','Три одинаковых на линии — выигрыш.':'中线三个相同即中奖。','любые из гаража':'任意车库组合','Сакура считается слева направо. Нажми ещё раз, чтобы закрыть.':'樱花从左往右算。再点一次关闭。',
 'Не хватает денег на ставку.':'钱不够下这个注。','Джекпот! ':'大奖！','Мимо. Ещё разок?':'没中。再来一次？','Отменить':'撤销','Очистить':'清空','Ставка':'下注','Выбери фишку и нажми на поле.':'选好筹码，点击桌面下注。','На столе максимум 5000 ¥.':'每局最多下注 5000 ¥。','Не хватает денег.':'钱不够。',
 'Сначала сделай ставку.':'先下注。','Не хватает денег на эти ставки.':'钱不够下这些注。','Ставки сделаны, ставок больше нет.':'买定离手。','Ставки не сыграли.':'没有中奖。','красное':'红','чёрное':'黑','зеро':'零',
 'Ещё раздачу':'再来一局','Раздать':'发牌','Ставка от':'下注范围','до':'到','Ещё':'要牌','Хватит':'停牌','Удвоить':'加倍','Разделить':'分牌','Ничья — ставка вернулась.':'平局——退回本金。','Казино забирает':'庄家赢走',
 'Новый заезд':'下一场比赛','Ставлю и старт':'下注并开赛','Выбери машину.':'选一辆车。','Если твоя машина придёт первой, выигрыш — ставка, умноженная на коэффициент.':'如果你选的车跑第一，奖金＝下注额×赔率。','Поехали!':'出发！','Первой пришла':'冠军：','Ставка не сыграла.':'你的注没中。',
 'Синяя «Сильвия»':'蓝色 Silvia','Красный RX-7':'红色 RX-7','Белая AE86':'白色 AE86','Чёрный GT-R':'黑色 GT-R','Жёлтая NSX':'黄色 NSX','Оранжевая «Супра»':'橙色 Supra','Зелёный «Лансер»':'绿色 Lancer','Фиолетовый «Скайлайн»':'紫色 Skyline'});

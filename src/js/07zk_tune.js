// ===== tuning: free colours on sliders; premium paints, neon and smoke each with their own trick =====
// free: body, stripes and neon are any colour you dial in (hue / saturation / brightness).
// premium paints are not just colours: matte is a perfect black that swallows light, candy has a deep gloss with a moving
// highlight, pearl shifts pastel with the angle, gold is metallic and sparkles, chrome mirrors the sky in bands,
// the hologram turns through the rainbow as the car turns. Premium neon: gold with sparks, a rainbow ring round the car.
// Premium smoke: sakura petals, glowing smoke, gold dust, a rainbow trail.
var PTCOL=[['Матовый чёрный','Matte black','#0a0a0c',1000000,'matte','идеально чёрный, не бликует','perfectly black, no reflections'],['Карамельный красный','Candy red','#9a0820',1500000,'candy','глубокий блеск, блик бежит по кузову','deep gloss, a highlight runs along the body'],
 ['Перламутр','Pearl','#f6eefc',2000000,'pearl','переливается пастелью при повороте','shifts pastel as you turn'],['Золото','Gold','#e8b838',5000000,'gold','металлический блеск и искры','a metallic sheen and sparkles'],
 ['Хром','Chrome','#dfe6f2',10000000,'chrome','зеркальный: отражает небо полосами','a mirror: reflects the sky in bands'],['Голограмма','Hologram','#ff4da6',25000000,'holo','радуга, которая течёт при повороте машины','a rainbow that flows as the car turns']];
var PGLW=[['Золотой неон','Gold neon','#ffc83a',1000000,'gold','золотое свечение и искры','a golden glow and sparks'],['Радужный неон','Rainbow neon','#ff4da6',8000000,'rb','радужное кольцо вокруг машины','a rainbow ring round the car']];
var PSMK=[['Дым «Сакура»','Sakura smoke','#ff9ac8',1000000,'sakura','розовый дым и лепестки','pink smoke and petals'],['Светящийся дым','Glowing smoke','#6ee7ff',1000000,'glow','светится в темноте','glows in the dark'],
 ['Золотая пыль','Gold dust','#ffd23a',3000000,'gold','золотой дым с искрами','gold smoke with sparks'],['Радужный шлейф','Rainbow trail','#ff4da6',10000000,'rb','радужный след за машиной','a rainbow trail behind you']];
var PC0=BODYC.length,PG0=GLOWC.length,PCONF='';PTCOL.forEach(function(c){BODYC.push(c[2])});PGLW.forEach(function(c){GLOWC.push(c[2])});
// the free colours: one custom slot each for body, stripes and neon
function ptHsl(h,s,l){s/=100;l/=100;var a=s*Math.min(l,1-l);function f(n){var k=(n+h/30)%12,c=l-a*Math.max(-1,Math.min(k-3,9-k,1));return ('0'+Math.round(c*255).toString(16)).slice(-2)}return '#'+f(0)+f(8)+f(4)}
function ptHue(h){return ptHsl(h,85,60)}
function ptToHsl(hex){var n=parseInt(String(hex||'#808080').slice(1),16),r=(n>>16)/255,g=((n>>8)&255)/255,b=(n&255)/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2,h=0,s=0,d=mx-mn;
 if(d){s=d/(1-Math.abs(2*l-1));h=mx===r?((g-b)/d)%6:mx===g?(b-r)/d+2:(r-g)/d+4;h=(h*60+360)%360}return [Math.round(h),Math.round(s*100),Math.round(l*100)]}
var CUS=BODYC.length,SCUS=STRC.length,GCUS=GLOWC.length;
if(!S.colHSL)S.colHSL=ptToHsl(BODYC[S.col>=0&&S.col<PC0?S.col:0]);if(!S.strHSL)S.strHSL=ptToHsl(STRC[S.str>=0&&S.str<STRC.length?S.str:0]);if(S.glowH==null)S.glowH=S.glow>0&&S.glow<PG0&&GLOWC[S.glow]?ptToHsl(GLOWC[S.glow])[0]:330;
BODYC.push(ptHsl.apply(null,S.colHSL));STRC.push(ptHsl.apply(null,S.strHSL));GLOWC.push(ptHsl(S.glowH,100,58));
function ptOwn(k,i){return !!(S.prem&&S.prem[k]&&S.prem[k][i])}
function ptFx(){var k=S.col-PC0;return k>=0&&k<PTCOL.length?PTCOL[k][4]:null}

// ---------- the special paints: a sprite per car, paint, stripe and angle (32 steps), drawn pixel by pixel
var PTSP={};
function ptMix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
function ptRgb(c){return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')'}
function ptHslA(h,s,l){var x=ptHsl(((h%360)+360)%360,s,l);return [parseInt(x.substr(1,2),16),parseInt(x.substr(3,2),16),parseInt(x.substr(5,2),16)]}
function ptPaint(fx,ch,u,v,ang){var sh=ch==='M'?.72:ch==='L'?1.22:1,deg=ang*57.2958,c;
 if(fx==='matte')return ch==='M'?[6,6,7]:ch==='L'?[16,16,19]:[10,10,12];
 if(fx==='candy'){var hl=Math.sin(u*Math.PI*2.2-ang*1.6+v*1.3);c=ptMix([84,4,18],[200,16,40],.5+.5*Math.sin(u*Math.PI));if(hl>.82)c=ptMix(c,[255,170,180],(hl-.82)/.18*.9);if(ch==='M')c=ptMix(c,[30,0,6],.55);if(ch==='L')c=ptMix(c,[255,210,215],.45);return c}
 if(fx==='pearl'){var h=deg*1.6+u*140+v*70;c=ptHslA(h,55,ch==='M'?70:ch==='L'?96:86);return c}
 if(fx==='gold'){var t=((u*1.4+v*.7+ang/Math.PI)%1+1)%1,tri=1-Math.abs(t*2-1);c=tri<.5?ptMix([110,74,14],[226,170,46],tri*2):ptMix([226,170,46],[255,244,180],(tri-.5)*2);if(ch==='M')c=ptMix(c,[70,46,8],.5);if(ch==='L')c=ptMix(c,[255,250,220],.5);return c}
 if(fx==='chrome'){var b=((v*2.2+Math.sin(u*2.6+ang*1.3)*.45+ang*.8)%1+1)%1;c=b<.22?[244,248,255]:b<.42?[168,180,200]:b<.5?[58,66,82]:b<.72?[120,134,156]:[214,222,236];if(ch==='M')c=ptMix(c,[40,46,58],.45);if(ch==='L')c=[255,255,255];return c}
 if(fx==='holo'){var hh=deg*2+u*260+v*90;return ptHslA(hh,88,ch==='M'?40:ch==='L'?78:58)}
 return [200,200,200]}
function ptSprite(ci,fx,stripe,ang){var b=((Math.round(ang/(Math.PI/16))%32)+32)%32,key=ci+'|'+fx+'|'+stripe+'|'+(fx==='matte'?0:b);if(PTSP[key])return PTSP[key];var a=b*Math.PI/16;
 var rows=CARS[ci].grid,H=rows.length,W=rows[0].length,cv=mkCanvas(W,H),g=cv.getContext('2d'),pal=playerPal('#808080',stripe);
 for(var y=0;y<H;y++)for(var x=0;x<W;x++){var ch=rows[y][x];if(ch==='.')continue;if(ch==='B'||ch==='P'||ch==='M'||ch==='L'){g.fillStyle=ptRgb(ptPaint(fx,ch,x/W,y/H,a))}else{if(!pal[ch])continue;g.fillStyle=ch==='K'&&fx==='matte'?'#050506':pal[ch]}g.fillRect(x,y,1,1)}
 var n=0;for(var k in PTSP)n++;if(n>400)PTSP={};return PTSP[key]=cv}
// in the city: the paint follows the car's angle; gold twinkles
var PTH={k:''};
var _hudTune=hud;hud=function(dt){_hudTune(dt);if(!car||mode!=='game')return;var fx=ptFx();
 if(fx){var sp=ptSprite(S.car,fx,STRC[S.str],car.a);if(sprC!==sp)sprC=sp;if(fx==='gold'&&FRAME%7===0){var ca=Math.cos(car.a),sa=Math.sin(car.a),u=(Math.random()-.5)*2*car.hx,v=(Math.random()-.5)*2*car.hy;fxBits(car.x+ca*u-sa*v,car.y+sa*u+ca*v,1,['#ffffff','#fff2b0'],6,6,car.l|0,{dl:2.2})}}
 else if(PTH.k){PTH.k='';sprC=playerSprite(S.car,BODYC[S.col],STRC[S.str])}
 if(fx)PTH.k='fx';
 var gk=S.glow-PG0;if(gk===0&&FRAME%9===0){var ang=Math.random()*TAU,r=car.hx+4;fxBits(car.x+Math.cos(ang)*r,car.y+Math.sin(ang)*r*.6,1,['#ffd23a','#fff2b0','#ffffff'],14,10,car.l|0,{dl:1.6})}};

// ---------- premium neon: gold (with sparks, above) and a rainbow ring whose colours turn with the car
var _ugTune=underglow;underglow=function(lv){var k=S.glow-PG0;if(k!==1||!sprC)return _ugTune(lv);
 var w=sprC.width,h=sprC.height,N=112;if(!UGC)UGC=mkCanvas(N,N);var g=UGC.getContext('2d');g.globalCompositeOperation='source-over';g.clearRect(0,0,N,N);
 var ra=Math.round(car.a/(Math.PI/32))*(Math.PI/32),pul=.8+.2*Math.sin(TIME*4.2),base=Math.round(car.a*57.3/15)*15;
 g.save();g.translate(N/2,N/2);g.rotate(ra);g.imageSmoothingEnabled=true;
 var spots=[[w/2+6,0],[w/2-2,-h/2-4],[0,-h/2-6],[-w/2+2,-h/2-4],[-w/2-6,0],[-w/2+2,h/2+4],[0,h/2+6],[w/2-2,h/2+4]];
 spots.forEach(function(p,i){var c=hex3(ptHue((base+i*45)%360));g.globalAlpha=.75*pul;g.drawImage(glw(c),p[0]-22,p[1]-18,44,36)});
 g.globalAlpha=.8;g.drawImage(glw([255,255,255]),-w/2-3,-h/2-3,w+6,h+6);
 g.globalCompositeOperation='destination-out';g.globalAlpha=1;g.imageSmoothingEnabled=false;g.drawImage(sprC,-w/2,-h/2);g.restore();
 cx.globalAlpha=Math.min(1,.62+.5*lv);cx.drawImage(UGC,SX(car.x)-N/2+1,SY(car.y)-N/2+2)};

// ---------- the garage: sliders instead of swatches for the free colours, the «Премиум» block with what each thing does
function ptSl(kind,lab,i,min,max,val){return '<label class="ptsr"><span>'+stEsc(lab)+'</span><input type="range" min="'+min+'" max="'+max+'" value="'+val+'" data-pk="'+kind+'" data-pi="'+i+'"></label>'}
var _rgTune=renderGar;renderGar=function(){_rgTune();var root=$('gar');if(!root)return;
 var bc=root.querySelector('[data-a=col]'),sc=root.querySelector('[data-a=str]'),gc=root.querySelector('[data-a=glow]'),row,row2,row3;
 if(bc){row=bc.parentNode;var cH=S.colHSL;row.className='ptbox';row.innerHTML='<i class="ptchip" id="ptcb" style="background:'+(S.col<PC0||S.col===CUS?BODYC[S.col]:BODYC[CUS])+'"></i>'+ptSl('col',TR('Оттенок','Hue'),0,0,359,cH[0])+ptSl('col',TR('Насыщенность','Saturation'),1,0,100,cH[1])+ptSl('col',TR('Яркость','Brightness'),2,6,94,cH[2])}
 if(sc){row2=sc.parentNode;var sH=S.strHSL;row2.className='ptbox';row2.innerHTML='<i class="ptchip" id="ptcs" style="background:'+STRC[S.str]+'"></i>'+ptSl('str',TR('Оттенок','Hue'),0,0,359,sH[0])+ptSl('str',TR('Насыщенность','Saturation'),1,0,100,sH[1])+ptSl('str',TR('Яркость','Brightness'),2,6,98,sH[2])}
 if(gc){row3=gc.parentNode;row3.className='ptbox';row3.innerHTML='<i class="ptchip" id="ptcg" style="background:'+(S.glow?GLOWC[S.glow]:'#2a2040')+'"></i>'+ptSl('glow',TR('Цвет подсветки','Neon colour'),0,0,359,S.glowH)+'<button class="ptoff'+(S.glow?'':' on')+'" data-a="glow" data-i="0">'+TR('Выключить','Off')+'</button>'}
 [].forEach.call(root.querySelectorAll('input[data-pk]'),function(inp){inp.addEventListener('input',ptSlide);inp.addEventListener('change',function(){save()})});ptTracks('col');ptTracks('str');ptTracks('glow');
 if(typeof garLocked==='function'&&garLocked())[].forEach.call(root.querySelectorAll('input[data-pk],.ptoff'),function(e){e.disabled=true});
 if(typeof IX!=='undefined'&&IX.st&&IX.st!=='paint')return;var anchor=gc?row3:sc?row2:bc?row:null;if(!anchor)return;
 function item(a,i,c,on,own,price,anim,e){var sw=anim?'background:linear-gradient(90deg,#ff4da6,#ffd23a,#6ee7ff,#a855ff)':'background:'+c;return '<button class="pti'+(on?' on':'')+(PCONF===a+i?' sure':'')+'" data-a="'+a+'" data-i="'+i+'"><i style="'+sw+'"></i><span>'+stEsc(TR(e[0],e[1]))+(e[5]?'<em>'+stEsc(TR(e[5],e[6]))+'</em>':'')+'<small>'+(on&&own?TR('выбрано','on'):on&&PCONF===a+i?TR('примерка · купить за','trying · buy for')+' '+fmtN(price)+' ¥?':own?TR('куплено','owned'):TR('примерить','try')+' · '+fmtN(price)+' ¥')+'</small></span></button>'}
 var q='<div class="sec">'+L('Премиум')+'</div><div class="ptg">'+TR('Краска','Paint')+'</div><div class="ptl">';
 PTCOL.forEach(function(c,k){var sw=c[4]==='holo'?1:0,swc=c[4]==='gold'?'linear-gradient(135deg,#6e4a0e,#f2c94a,#fff4b4,#c49a36)':c[4]==='chrome'?'linear-gradient(180deg,#f4f8ff,#a8b4c8 45%,#3a4252 50%,#c8d0de)':c[4]==='pearl'?'linear-gradient(135deg,#fdf0f6,#eef4ff,#f2fff4)':c[4]==='candy'?'linear-gradient(135deg,#4a0410,#c81028,#ffaab4)':c[2];
  q+=item('pc',k,swc,S.col===PC0+k,ptOwn('c',k),c[3],sw,c)});
 q+='</div><div class="ptg">'+TR('Неон','Neon')+'</div><div class="ptl">';PGLW.forEach(function(c,k){q+=item('pg',k,c[2],S.glow===PG0+k,ptOwn('g',k),c[3],c[4]==='rb',c)});
 q+='</div><div class="ptg">'+TR('Дым из-под колёс','Tyre smoke')+'</div><div class="ptl">'+item('ps',-1,'#d8dce8',!(S.smk|0),1,0,0,['Обычный','Plain']);PSMK.forEach(function(c,k){q+=item('ps',k,c[2],(S.smk|0)===k+1,ptOwn('s',k),c[3],c[4]==='rb',c)});q+='</div>';
 anchor.insertAdjacentHTML('afterend',q)};
// slider tracks show what you'll get: a rainbow for hue, grey→colour for saturation, black→colour→white for brightness
function ptTracks(k){var A=k==='col'?S.colHSL:k==='str'?S.strHSL:[S.glowH,100,58];[].forEach.call(document.querySelectorAll('#gar input[data-pk='+k+']'),function(inp){var i=+inp.dataset.pi,g;
 if(i===0){var hs=[];for(var h=0;h<=360;h+=30)hs.push('hsl('+h+','+(k==='glow'?100:Math.max(A[1],60))+'%,'+(k==='glow'?58:Math.min(70,Math.max(35,A[2])))+'%)');g='linear-gradient(90deg,'+hs.join(',')+')'}
 else if(i===1)g='linear-gradient(90deg,hsl('+A[0]+',0%,'+A[2]+'%),hsl('+A[0]+',100%,'+A[2]+'%))';else g='linear-gradient(90deg,hsl('+A[0]+','+A[1]+'%,6%),hsl('+A[0]+','+A[1]+'%,50%),hsl('+A[0]+','+A[1]+'%,95%))';inp.style.setProperty('--tr',g)})}
function ptSlide(e){var t=e.target,k=t.dataset.pk,i=+t.dataset.pi,v=+t.value;if(typeof garLocked==='function'&&garLocked())return;if(typeof IXCAR!=='undefined')IXCAR.k='';
 // turning the hue on a white/grey/black colour would do nothing: give it some colour first
 if(i===0&&k!=='glow'){var A=k==='col'?S.colHSL:S.strHSL;if(A[1]<12||A[2]>90||A[2]<10){A[1]=Math.max(A[1],72);A[2]=Math.min(70,Math.max(40,A[2]));[].forEach.call(document.querySelectorAll('#gar input[data-pk='+k+']'),function(q){q.value=A[+q.dataset.pi]})}}
 if(k==='col'){S.colHSL[i]=v;BODYC[CUS]=ptHsl.apply(null,S.colHSL);S.col=CUS;if(S.ptry)S.ptry.col=CUS;var c=$('ptcb');if(c)c.style.background=BODYC[CUS]}
 else if(k==='str'){S.strHSL[i]=v;STRC[SCUS]=ptHsl.apply(null,S.strHSL);S.str=SCUS;var c2=$('ptcs');if(c2)c2.style.background=STRC[SCUS]}
 else if(k==='glow'){S.glowH=v;GLOWC[GCUS]=ptHsl(v,100,58);S.glow=GCUS;if(S.ptry)S.ptry.glow=GCUS;var c3=$('ptcg');if(c3)c3.style.background=GLOWC[GCUS];var off=document.querySelector('#gar .ptoff');if(off)off.classList.remove('on')}
 ptTracks(k);PTH.k='';if(typeof _pvk!=='undefined')_pvk='';PCONF='';[].forEach.call(document.querySelectorAll('#gar .pti.on'),function(b){if((k==='col'&&b.dataset.a==='pc')||(k==='glow'&&b.dataset.a==='pg'))b.classList.remove('on')})}
(function(){var st=document.createElement('style');st.textContent='#gar .ptg{font-size:11px;letter-spacing:.12em;color:#ffd23a;margin:10px 0 6px}#gar .ptl{display:grid;grid-template-columns:1fr 1fr;gap:7px}#gar .pti{display:flex;align-items:center;gap:8px;text-align:left;border:0;background:#251d3d;color:var(--ink);padding:7px 8px;font-size:13px;box-shadow:0 3px 0 #120c1e}#gar .pti i{flex:none;width:24px;height:24px;border:2px solid #000}#gar .pti em{display:block;font-style:normal;font-size:10.5px;color:#b8f0c0;line-height:1.25;margin-top:1px}#gar .pti small{display:block;font-size:11px;color:var(--muted)}#gar .pti.on{background:#3a2a5a;box-shadow:0 0 0 2px #ffd23a}#gar .pti.sure{background:#5a1a3a}'+
 '#gar .ptbox{display:flex;flex-direction:column;gap:6px;background:#1c1630;padding:10px 12px;position:relative}#gar .ptchip{position:absolute;right:12px;top:10px;width:34px;height:34px;border:3px solid #000;box-shadow:0 3px 0 #120c1e}#gar .ptsr{display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted);padding-right:50px}#gar .ptsr input{width:100%;height:30px}#gar .ptsr input::-webkit-slider-runnable-track{height:14px;background:var(--tr,#0e0a1a);border:2px solid #000}#gar .ptsr input::-webkit-slider-thumb{margin-top:-7px;background:#fff;border:3px solid #000;box-shadow:0 2px 0 #000}#gar .ptsr input::-moz-range-track{height:14px;background:var(--tr,#0e0a1a);border:2px solid #000}#gar .ptsr input::-moz-range-thumb{background:#fff;border:3px solid #000}#gar .ptsr input:disabled{opacity:.4}#gar .ptoff{align-self:flex-start;border:0;background:#2a2040;color:var(--ink);padding:7px 14px;font-size:13px;box-shadow:0 3px 0 #120c1e}#gar .ptoff.on{background:#ffd23a;color:#2a1a0a}';document.head.appendChild(st)})();
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
// the garage preview: special paints follow the preview's sway, the chosen smoke puffs behind the car
var _pvTune=pvLoop;pvLoop=function(t){var fx=null;if(mode===''){var ci=GV!=null&&GV<CARS.length?GV:S.car,a=Math.sin(t/1400)*.5-.15;fx=ptFx();if(fx){_pvk=ci+'_'+S.col+'_'+S.str;_pvs=ptSprite(ci,fx,STRC[S.str],a*3)}if(S.glow===PG0+1)GLOWC[PG0+1]=ptHue(((Math.round(a*3*57.3/15)*15)%360+360)%360)}_pvTune(t);
 if(mode===''&&(fx==='gold'||S.glow===PG0)){var cg=$('pv');if(cg){var xg=cg.getContext('2d'),fr=Math.floor(t/110);for(var j=0;j<4;j++){var sd=(fr*7+j*131)%997,px=100+((sd*37)%80)-40,py=42+((sd*53)%34)-17;xg.fillStyle=j%2?'#fff6c0':'#ffffff';xg.fillRect(px,py,1,1);if((fr+j)%3===0){xg.fillRect(px-1,py,3,1);xg.fillRect(px,py-1,1,3)}}}}
 if(mode!==''||!(S.smk|0))return;var c=$('pv');if(!c)return;var x=c.getContext('2d'),s=PSMK[(S.smk|0)-1];if(!s)return;for(var k=0;k<6;k++){var ph=((t/700)+k/6)%1,r=Math.max(2,Math.min(15,Math.round(3+ph*10))),col=s[4]==='rb'?ptHue(((k*4+Math.floor(t/200))%24)*15):s[2];x.globalAlpha=(1-ph)*.6;x.drawImage(ptPuff(col,r),Math.round(60-ph*50-r),Math.round(46-ph*8-r+Math.sin(k*2+t/300)*3));x.globalAlpha=1;
  if(s[4]==='sakura'&&k%2===0){x.fillStyle='#ffc0dc';x.fillRect(Math.round(60-ph*56),Math.round(40-ph*6+Math.sin(t/180+k)*4),2,1)}if(s[4]==='gold'&&(k+Math.floor(t/120))%3===0){x.fillStyle='#fff6c0';x.fillRect(Math.round(58-ph*50),Math.round(44-ph*8),1,1)}}};

// rooms (workshop, home garage, dealer) show the special paint too
if(typeof ixCarSpr==='function'){var _ixcsTune=ixCarSpr;ixCarSpr=function(){var fx=ptFx();return fx?ptSprite(S.car,fx,STRC[S.str],0):_ixcsTune()}}
// multiplayer: the dialled-in colours travel as hex, so the other player sees your colour, not their own slider
var _nsTune=netSend;netSend=function(o){if(o&&o.t==='hi'){o.bc=BODYC[S.col];o.sc=STRC[S.str];o.gc=GLOWC[S.glow]||''}return _nsTune(o)};

// ---------- premium tyre smoke: sakura petals, glowing smoke, gold dust, a rainbow trail
var PTSM=false,PTPUFF={};
var _dfTune=driftFx;driftFx=function(dt,I){PTSM=!!(S.smk|0);try{return _dfTune(dt,I)}finally{PTSM=false}};
var _spTune=smokePuff;smokePuff=function(x,y,vx,vy,r0,r1,dust,z,life){_spTune(x,y,vx,vy,r0,r1,dust,z,life);if(!PTSM||dust)return;var s=PSMK[(S.smk|0)-1];if(!s)return;var p=SMOKE[SMOKE.length-1];
 p.tc=s[4]==='rb'?ptHue((Math.floor(TIME*6)%24)*15):s[2];p.tz=p.z;p.z=-9;p.tk=s[4];
 if(s[4]==='sakura'&&Math.random()<.5)fxBits(x,y,1,['#ffc0dc','#ff9ac8','#fff0f6'],30,20,z|0,{dl:.5});
 if(s[4]==='gold'&&Math.random()<.6)fxBits(x,y,1,['#fff6c0','#ffd23a','#ffffff'],40,30,z|0,{dl:.7})};
function ptPuff(col,r){var k=col+r;if(PTPUFF[k])return PTPUFF[k];var n=parseInt(col.slice(1),16),R=n>>16,G=(n>>8)&255,B=n&255;return PTPUFF[k]=puffSpr(r,[Math.min(255,R+40),Math.min(255,G+40),Math.min(255,B+40)],[R*.75|0,G*.75|0,B*.75|0])}
var _dsTune=drawSmoke;drawSmoke=function(z){_dsTune(z);for(var i=0;i<SMOKE.length;i++){var p=SMOKE[i];if(!p.tc||p.tz!==z)continue;var r=Math.max(1,Math.min(15,Math.round(p.r0+(p.r1-p.r0)*Math.pow(1-p.l,.55)))),x=SX(p.x)-r,y=SY(p.y)-r;if(x<-32||y<-32||x>VW+4||y>VH+4)continue;cx.globalAlpha=Math.min(.55,p.l*.62);cx.drawImage(ptPuff(p.tc,r),x,y)}cx.globalAlpha=1};
var _edTune=emisDraw;emisDraw=function(a){_edTune(a);if(a<=.05)return;for(var i=0;i<SMOKE.length;i++){var p=SMOKE[i];if(p.tk!=='glow')continue;var x=SX(p.x),y=SY(p.y);if(x<-30||y<-30||x>VW+30||y>VH+30)continue;gl(x,y,10+(1-p.l)*8,10+(1-p.l)*8,[110,231,255],a*p.l*.7)}};

Object.assign(EN,{'Премиум':'Premium'});
Object.assign(ZH,{'примерка · купить за':'试用中 · 购买需','примерить':'试用','Премиум':'高级','Краска':'车漆','Неон':'霓虹','Дым из-под колёс':'轮胎烟','Обычный':'普通','выбрано':'已选','куплено':'已购','точно?':'确定？','твоё!':'归你了！',
 'Матовый чёрный':'哑光黑','Карамельный красный':'糖果红','Перламутр':'珠光','Золото':'黄金','Хром':'镀铬','Голограмма':'全息','Золотой неон':'金色霓虹','Радужный неон':'彩虹霓虹','Дым «Сакура»':'“樱花”烟','Светящийся дым':'发光烟','Золотая пыль':'金粉','Радужный шлейф':'彩虹尾迹',
 'идеально чёрный, не бликует':'完美的黑，不反光','глубокий блеск, блик бежит по кузову':'深邃光泽，高光在车身上流动','переливается пастелью при повороте':'转弯时泛出粉彩','металлический блеск и искры':'金属光泽和火花','зеркальный: отражает небо полосами':'镜面：一条条映出天空','радуга, которая течёт при повороте машины':'车一转，彩虹就流动',
 'золотое свечение и искры':'金色光芒和火花','радужное кольцо вокруг машины':'车身周围的彩虹光环','розовый дым и лепестки':'粉色烟和花瓣','светится в темноте':'在黑暗中发光','золотой дым с искрами':'带火花的金色烟','радужный след за машиной':'车后的彩虹尾迹',
 'Оттенок':'色相','Насыщенность':'饱和度','Яркость':'亮度','Цвет подсветки':'灯光颜色','Выключить':'关闭'});

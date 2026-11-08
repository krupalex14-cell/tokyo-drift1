// ===== more kinds of missions: Kir's requests on the ride, tailing the courier, a hot/cold search =====
// saves made before the courier mission existed: a story position past it moves one along
(function(){var st=S.story;if(!st||(st.v|0)>=3)return;var ins=-1;for(var i=0;i<STORY.length;i++)if(STORY[i].id==='d7c')ins=i;if(ins>=0){if((st.m|0)>=ins)st.m=(st.m|0)+1;if((st.hi|0)>=ins)st.hi=(st.hi|0)+1}st.v=3;try{save()}catch(e){}})();
var KASK={drift:{ru:'Кир: «Покажи свой пьяный занос!»',en:'Kir: “Show me your drunken drift!”'},speed:{ru:'Кир: «Разгонись до 150!»',en:'Kir: “Get her up to 150!”'},near:{ru:'Кир: «Проскочи впритирку к машине!»',en:'Kir: “Squeeze past a car, really close!”'}};
function c3AskDone(k,dt){if(k==='drift')return run.pend>=500;if(k==='speed')return car.sp*.45>=150;
 if(k==='near'){if(car.sp<170)return false;for(var i=0;i<AI.length;i++){var a=AI[i];if((a.l|0)!==(car.l|0)||a.fd)continue;var dx=wd(a.x,car.x),dy=wd(a.y,car.y);if(Math.abs(dx)>50||Math.abs(dy)>50)continue;var g=Math.hypot(dx,dy)-a.hx-car.hx*.6;if(g>0&&g<9)return true}return false}return false}
function c3AskInfo(k){if(k==='drift')return L('занос')+' '+Math.min(500,Math.floor(run.pend||0))+'/500';if(k==='speed')return Math.round(car.sp*.45)+'/150 '+L('км/ч');return L('пролети рядом с машиной на скорости')}
var _smC3b=stMain;stMain=function(m){
 if(m.type==='kirride'){_smC3b({type:'x'});ST.ask=0;ST.askW=0;WP=null;flash(LT(KASK[m.asks[0]]),2.2);return}
 if(m.type==='search'){_smC3b({type:'x'});ST.fnd=0;ST.bp=0;WP=null;return}
 if(m.type==='tail'){_smC3b({type:'x'});ST.sus=0;ST.lost=0;ST.look=0;ST.lookT=5+Math.random()*3;ST.pz=0;ST.pzT=9+Math.random()*4;var d=stPlace(m.dest),dq=d.g||d,pp=gpsPathFrom(car.x,car.y,dq.x,dq.y);if(!pp){ST.act=null;return}
  var pts=c3Res(pp,8),k=Math.min(pts.length-3,32),P0=pts[k],P1=pts[k+1];
  var C=rivMake({id:'courier',name:'Курьер',tag:'#c8c8d8',car:10,col:6,str:4,glow:0,x:P0[0],y:P0[1],a:Math.atan2(wd(P1[1],P0[1]),wd(P1[0],P0[0])),pts:pts.slice(k),loop:false,vmax:230,wait:false,drift:0});C.sk=.82;
  // a yellow car waits for him at the end
  var E=pts[pts.length-1],E2=pts[Math.max(0,pts.length-6)],ea=Math.atan2(wd(E[1],E2[1]),wd(E[0],E2[0]));rivMake({id:'yellow',name:'',car:2,col:3,str:0,glow:0,x:E[0]+Math.cos(ea)*34-Math.sin(ea)*10,y:E[1]+Math.sin(ea)*34+Math.cos(ea)*10,a:ea+Math.PI,pts:[[E[0],E[1]],[E[0]+1,E[1]]],loop:false,vmax:0,wait:true});
  WP=null;return}
 _smC3b(m)};
var _skC3b=stKinds;stKinds=function(m,dt){
 if(m.type==='kirride'){var P=stPlaces(),G=P.garage;
  if(ST.ask<m.asks.length){if(c3AskDone(m.asks[ST.ask],dt)){ST.ask++;popup(L('Кир: «Ого!»')+' '+ST.ask+'/'+m.asks.length,'big');if(S.snd)try{auBell()}catch(e){}
     if(ST.ask<m.asks.length)setTimeout(function(){if(ST.act===m)flash(LT(KASK[m.asks[ST.ask]]),2.2)},900);else{flash(L('Кир: «Ладно, верю. Теперь в мастерскую!»'),2.4);stRoute(G.x,G.y)}}
   else if(Math.hypot(wd(G.x,car.x),wd(G.y,car.y))<70&&TIME-ST.askW>5){ST.askW=TIME;flash(L('Кир: «Э, сначала покажи, что умеешь!»'),1.8)}return false}
  if((!WP||!WP.pts)&&TIME-(ST.rt||0)>1.5)stRoute(G.x,G.y);
  if(Math.hypot(wd(G.x,car.x),wd(G.y,car.y))<62){stDone(true);return true}return false}
 if(m.type==='search'){var S2=stPlace(m.stash),d=Math.hypot(wd(S2.x,car.x),wd(S2.y,car.y)),sg=clamp(1-d/1500,0,1);ST.sg=sg;
  ST.bp-=dt;if(ST.bp<=0){ST.bp=.18+(1-sg)*1.1;if(S.snd)try{auTone(500+sg*1000,.035+sg*.03,.05,'square')}catch(e){}}
  if(d<80&&car.sp<50){ST.fnd+=dt;if(ST.fnd>1.2){popup(L('Тайник!'),'big');if(S.snd)try{auBell()}catch(e){}stDone(true);return true}}else ST.fnd=Math.max(0,ST.fnd-dt);
  if(ST.t>m.limit){stDone(false,'время вышло');return true}return false}
 if(m.type==='tail'){var C=RIV[0];if(!C)return false;var dd=Math.hypot(wd(C.x,car.x),wd(C.y,car.y));
  // he stops now and then, and checks his mirrors
  ST.pzT-=dt;if(ST.pz>0){ST.pz-=dt;C.vmax=0}else{C.vmax=dd>360?150:230;if(ST.pzT<=0){ST.pz=1.8+Math.random();ST.pzT=10+Math.random()*5;flash(L('Курьер остановился'),1)}}
  ST.lookT-=dt;if(ST.look>0)ST.look-=dt;else if(ST.lookT<=0){ST.look=1.6;ST.lookT=6+Math.random()*4;flash(L('Курьер смотрит в зеркало!'),1.2)}
  var same=(C.c.l|0)===(car.l|0);
  if(same&&dd<80)ST.sus+=dt*.9;else if(same&&dd<150&&(ST.look>0||ST.pz>0))ST.sus+=dt*.45;else ST.sus=Math.max(0,ST.sus-dt*.1);
  if(ST.sus>=1){stDone(false,'курьер тебя заметил');return true}
  ST.lost=dd>440?ST.lost+dt:0;if(ST.lost>6){stDone(false,'потерял курьера');return true}
  if(C.L-C.P<130){C.vmax=0;popup(L('Курьер приехал'),'big');stDone(true);return true}return false}
 return _skC3b(m,dt)};
var _stC3b=stTarget;stTarget=function(){var m=ST.act;if(ST.mode&&m&&!ST.ride){if(m.type==='tail'&&RIV[0])return{x:RIV[0].x,y:RIV[0].y};if(m.type==='search')return null;if(m.type==='kirride')return ST.ask>=m.asks.length?stPlace('garage'):null}return _stC3b()};
var _shC3b=stHud;stHud=function(){_shC3b();var m=ST.act,e=$('sobj');if(!m||!e||!ST.mode||mode!=='game'||ST.ride)return;var t=null,bar=-1;
 if(m.type==='kirride'){if(ST.ask<m.asks.length){var k=m.asks[ST.ask];t=LT(KASK[k])+' · '+c3AskInfo(k)+' · '+(ST.ask+1)+'/'+m.asks.length;bar=ST.ask/m.asks.length}else{var G=stPlace('garage');t=LT(G.name)+' · '+Math.round(Math.hypot(wd(G.x,car.x),wd(G.y,car.y))/4)+' '+L('м');bar=1}}
 else if(m.type==='search'){var sg=ST.sg||0;t=L('маячок')+': '+L(sg>.93?'здесь!':sg>.75?'горячо!':sg>.5?'теплее':sg>.25?'прохладно':'холодно')+(sg>.9?' · '+L('остановись'):'')+' · '+Math.max(0,Math.ceil(m.limit-ST.t))+' '+L('с');bar=sg}
 else if(m.type==='tail'&&RIV[0]){var C=RIV[0];t=L('курьер')+' '+Math.round(Math.hypot(wd(C.x,car.x),wd(C.y,car.y))/4)+' '+L('м')+' · '+L('подозрение')+' '+Math.round(Math.min(1,ST.sus)*100)+'%'+(ST.lost>0?' · '+L('догоняй!'):'');bar=Math.min(1,ST.sus)}
 if(t!==null)e.innerHTML='<b>'+stEsc(LT(m.title))+'</b><span>'+stEsc(t)+'</span>'+(bar>=0?'<i><u style="width:'+Math.round(clamp(bar,0,1)*100)+'%"></u></i>':'');
 // who is in the car with you
 if(m.pass&&!e.querySelector('.ps'))e.insertAdjacentHTML('beforeend','<em class="ps">'+stEsc(L(m.pass==='kir'?'Кир в машине':'Хана в машине'))+'</em>')};
var _hoC3b=home;home=function(){var m=ST.act;_hoC3b();if(m&&ST.act===m&&(m.type==='tail'||m.type==='search'||m.type==='kirride'))stAbort()};

// ===== EVENTS: drift zones & courses =====
var ZP=null,ZFADE=0,ZSTB=[60,140,300];
function fmtN(n){return String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
function zcs(r,s){return(r.closed||r.per)?((s%r.len)+r.len)%r.len:s}
function zStars(z,sc){var st=0;z.tg.forEach(function(t){if(sc>=t)st++});return st}
function zoneBlocks(z,a){if(z.k==='area')return Math.hypot(wd(a.x,z.x),wd(a.y,z.y))<z.r+170;return a.r===z.road||(a.md===1&&a.nx&&a.nx.r===z.road)}
function zoneStart(z){var r,s,dir,u;
 if(z.k==='course'){r=z.road;r.pt(zcs(r,z.s0),TMP);u=laneU(r,1,0);return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3],TMP[2]),l:z.l}}
 if(z.node){var e=z.node.ed.filter(function(e){return e.r.k==='art'})[0]||z.node.ed[0];r=e.r;dir=e.e===0?-1:1;s=e.e===0?r.za+130:r.len-r.zb-130;r.pt(s,TMP);u=laneU(r,dir,0);return{x:wrap(TMP[0]-TMP[3]*u),y:wrap(TMP[1]+TMP[2]*u),a:Math.atan2(TMP[3]*dir,TMP[2]*dir),l:0}}
 var sp=z.spec;if(sp.k==='drift')return{x:sp.x+sp.w*.51,y:sp.y+sp.h*.5,a:-Math.PI/2,l:0};if(sp.k==='stad')return{x:sp.x+15,y:sp.y+sp.h*.62,a:-Math.PI/2,l:0};return{x:sp.x+28,y:sp.y+sp.h*.62,a:-Math.PI/2,l:0}}
function zonesUpdate(dt){
 if(ZS){zoneRun(dt);return}
 if(ZFADE)return;var cand=null;
 for(var i=0;i<ZONES.length;i++){var z=ZONES[i],d=Math.hypot(wd(z.x,car.x),wd(z.y,car.y));if(z.dec){if(d>z.r+260)z.dec=0;continue}if(!cand&&z.l===car.l&&d<(z.k==='course'?z.r:z.r+30))cand=z}
 if(cand!==ZP){ZP=cand;zPrompt(ZP)}}
function zPrompt(z){var e=$('zp');if(!z){e.classList.remove('on');return}var b=S.best[z.id]||0,st=zStars(z,b);
 e.innerHTML='<div class="zk">'+L(z.k==='course'?'ТРАССА':'ДРИФТ-ЗОНА')+'</div><div class="zn">'+L(z.name)+'</div><div class="zi">'+(z.k==='course'?L('Проедь до финиша'):z.line?L('Держись розовой линии по часовой')+' — '+z.T+' '+L('с'):z.T+' '+L('секунд в зоне'))+'</div><div class="zi"><b>'+'★'.repeat(st)+'<span>'+'★'.repeat(3-st)+'</span></b> '+(b?L('рекорд')+' '+fmtN(b):L('нет рекорда'))+'</div>'+(st<3?'<div class="zi">'+L('за')+' '+(st+1)+'★ <b>+'+ZSTB[st]+' ¥</b></div>':'')+'<div class="zbt"><button data-z="go">'+L('Принять')+'</button><button data-z="no" aria-label="'+L('Отказаться')+'">✕</button></div>';e.classList.add('on')}
function zoneAccept(z){if(!z||ZFADE)return;ZP=null;zPrompt(null);$('res').style.display='none';var f=$('fade');f.classList.add('on');ZFADE=1;
 setTimeout(function(){ZFADE=0;f.classList.remove('on');if(!car||!run)return;zonePlace(z)},280)}
function zonePlace(z){bank();ZP=null;zPrompt(null);var st=zoneStart(z);car.x=st.x;car.y=st.y;car.a=st.a;car.l=st.l;car.vx=car.vy=car.w=0;car.st=0;car.dr=false;car.spin=0;car.sp=0;car.slip=0;car.tail=0;car.under=false;car.fw=0;cam.x=car.x;cam.y=car.y;
 run.pend=0;run.dt=0;run.mult=1;run.idle=0;SMOKE=[];
 ZS={z:z,ph:'cd',cd:3,t:z.T,score:0,out:0,s:z.s0};
 AI.forEach(function(a){if(zoneBlocks(z,a)||Math.hypot(wd(a.x,car.x),wd(a.y,car.y))<140)a.fd=a.fd||1});
 preload();cdShow('3');auBeep(660)}
function cdShow(t,cls){var e=$('cdn');e.textContent=L(t);e.className='';void e.offsetWidth;e.className='on'+(cls?' '+cls:'')}
function zoneRun(dt){var z=ZS.z;
 AI.forEach(function(a){if(!a.fd&&zoneBlocks(z,a))a.fd=1});
 if(ZS.ph==='cd'){var c0=Math.ceil(ZS.cd);ZS.cd-=dt;var c1=Math.ceil(ZS.cd);if(c1!==c0){if(c1>0){cdShow(String(c1));auBeep(660)}else{cdShow('СТАРТ!','go');auBeep(1320);ZS.ph='go'}}return}
 ZS.t-=dt;
 if(z.k==='area'){var inn=Math.hypot(wd(z.x,car.x),wd(z.y,car.y))<z.r+20&&car.l===z.l;if(!inn){ZS.out+=dt;if(ZS.out>3){zoneEnd('out');return}}else ZS.out=0;if(ZS.t<=0)zoneEnd('time');return}
 var d=zTrack(z);if(d>z.road.hw+45||car.l!==z.l){ZS.out+=dt;if(ZS.out>3){zoneEnd('off');return}}else ZS.out=0;
 if(ZS.s>=z.s1){zoneEnd('fin');return}if(ZS.t<=0)zoneEnd('time')}
function zTrack(z){var r=z.road,best=1e9,bs=ZS.s;for(var s=ZS.s-24;s<=ZS.s+96;s+=3){r.pt(zcs(r,s),TMP);var d=Math.hypot(wd(TMP[0],car.x),wd(TMP[1],car.y));if(d<best){best=d;bs=s}}if(bs>ZS.s)ZS.s=bs;return best}
function zoneEnd(why){bank();var z=ZS.z,sc=Math.floor(ZS.score),fin=z.k==='area'?why!=='out':why==='fin',st=fin?zStars(z,sc):0,b=S.best[z.id]||0,st0=zStars(z,b),sb=0;for(var q=st0;q<st;q++)sb+=ZSTB[q];var rw=Math.floor(sc/100*(fin?1:.4))+sb;S.coins+=rw;var rec=fin&&sc>b;if(rec)S.best[z.id]=sc;save();z.dec=1;ZS=null;
 var msg={fin:'финиш!',time:z.k==='area'?'время вышло':'не успел к финишу',out:'выехал из зоны',off:'сошёл с трассы'}[why];msg=L(msg);
 var r=$('res');r.innerHTML='<div class="rt">'+L(z.name)+' · '+msg+'</div><div class="rs">'+fmtN(sc)+'</div><div class="st">'+'★'.repeat(st)+'<span>'+'★'.repeat(3-st)+'</span></div><div class="rr">'+(rec?'<b>'+L('Новый рекорд!')+'</b> ':'')+'+'+fmtN(rw)+' ¥'+(sb?'<small>'+L('новые звёзды')+' +'+sb+' ¥</small>':'')+'</div><div class="rb"><button data-z="retry">'+L('Ещё раз')+'</button><button data-z="ok">OK</button></div>';
 r.dataset.z=z.id;r.style.display='block';clearTimeout(r._t);r._t=setTimeout(function(){r.style.display='none'},9000);auBeep(st?1320:440)}
function zoneCancel(){ZS=null;ZP=null;ZFADE=0;zPrompt(null);$('fade').classList.remove('on');$('cdn').className='';$('res').style.display='none'}
function zoneClick(a){if(a==='go')zoneAccept(ZP);else if(a==='no'){if(ZP)ZP.dec=1;ZP=null;zPrompt(null)}else if(a==='retry'){var id=$('res').dataset.z;$('res').style.display='none';ZONES.forEach(function(z){if(z.id===id)zoneAccept(z)})}else if(a==='ok')$('res').style.display='none'}
// ---- world drawing
function drawZones(l){for(var i=0;i<ZONES.length;i++){var z=ZONES[i];if(z.l!==l)continue;var act=ZS&&ZS.z===z;
 if(z.k==='area'){var x=SX(z.x),y=SY(z.y);if(x<-z.r-20||y<-z.r-20||x>VW+z.r+20||y>VH+z.r+20)continue;if(ZS&&!act)continue;cx.fillStyle=act?'rgba(255,90,160,.9)':'rgba(255,90,160,.55)';var n=Math.floor(z.r/5);for(var k=0;k<n;k+=2){var a=k/n*TAU+TIME*.15;cx.fillRect(Math.round(x+Math.cos(a)*z.r)-1,Math.round(y+Math.sin(a)*z.r)-1,3,3)}if(!ZS){if(z.spec&&z.spec.k==='stad'){var zs=zoneStart(z);zBeacon(SX(zs.x),SY(zs.y))}else zBeacon(x,y)}}
 else{if(ZS&&!act)continue;zLine(z,z.s0,0);zLine(z,z.s1,1);if(!ZS){z.road.pt(zcs(z.road,z.s0),TMP);zBeacon(SX(TMP[0]),SY(TMP[1]))}}}}
function zLine(z,s,fin){var r=z.road;r.pt(zcs(r,s),TMP);var x=SX(TMP[0]),y=SY(TMP[1]);if(x<-r.hw-10||y<-r.hw-10||x>VW+r.hw+10||y>VH+r.hw+10)return;var tx=TMP[2],ty=TMP[3],nx=-ty,ny=tx,hw=r.hw-3;
 for(var u=-hw,c=0;u<=hw;u+=3,c++)for(var w=0;w<2;w++){cx.fillStyle=((c+w)&1)?(fin?'#1a1426':'#ff5aa0'):'#f4f4fa';cx.fillRect(Math.round(x+nx*u+tx*w*3)-1,Math.round(y+ny*u+ty*w*3)-1,3,3)}}
function zBeacon(x,y){if(x<-30||y<-30||x>VW+30||y>VH+30)return;var ph=(TIME*1.2)%1,r=5+ph*14;cx.fillStyle='rgba(255,90,160,'+(1-ph).toFixed(2)+')';for(var k=0;k<16;k++){var a=k/16*TAU;cx.fillRect(Math.round(x+Math.cos(a)*r)-1,Math.round(y+Math.sin(a)*r)-1,2,2)}
 var by=y-10+Math.round(Math.sin(TIME*3)*2);cx.fillStyle='#1a1426';cx.fillRect(x-1,by-9,2,12);cx.fillRect(x+1,by-10,8,7);cx.fillStyle='#ff5aa0';cx.fillRect(x+1,by-9,7,5);cx.fillStyle='#fff';cx.fillRect(x+2,by-8,2,1);cx.fillRect(x+5,by-7,2,1);cx.fillStyle='#e8e8f0';cx.fillRect(x,by-9,1,11)}
function zHud(){var zb=$('zb');if(!ZS||ZS.ph!=='go'){zb.style.display='none';return}var z=ZS.z,sc=Math.floor(ZS.score+(z.line?0:run.pend)),st=zStars(z,sc);zb.style.display='block';
 zb.innerHTML='<div class="zt"><span>'+L(z.name)+'</span><b>'+Math.max(0,Math.ceil(ZS.t))+L('с')+'</b></div><div class="zs">'+fmtN(sc)+' <i>'+'★'.repeat(st)+'<u>'+'★'.repeat(3-st)+'</u></i></div><div class="zbar"><i style="width:'+Math.min(100,sc/z.tg[2]*100)+'%"></i><em style="left:'+(z.tg[0]/z.tg[2]*100)+'%"></em><em style="left:'+(z.tg[1]/z.tg[2]*100)+'%"></em></div>'+(z.k==='course'?'<div class="zpr"><i style="width:'+clamp((ZS.s-z.s0)/(z.s1-z.s0)*100,0,100)+'%"></i></div>':'')+(ZS.out>0?'<div class="zw">'+L(z.k==='course'?'Вернись на трассу!':'Вернись в зону!')+'</div>':'')}

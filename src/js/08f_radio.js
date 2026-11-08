// ===== Japanese internet radio: list from the Radio Browser directory, played with a plain <audio> =====
var RAD={a:null,list:null,on:false,i:0,busy:false,fails:0,lbl:0,was:false,tok:0};
var RAD_FALLBACK=[{name:'LISTEN.moe · J-Pop',url:'https://listen.moe/fallback'},{name:'Gensokyo Radio',url:'https://stream.gensokyoradio.net/1/'}];
var RAD_API=['https://de1.api.radio-browser.info','https://de2.api.radio-browser.info','https://fi1.api.radio-browser.info','https://nl1.api.radio-browser.info','https://at1.api.radio-browser.info','https://all.api.radio-browser.info'];
function radApp(){return !!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())}
function radFetch(url,ms){return new Promise(function(res,rej){var done=false,t=setTimeout(function(){if(!done){done=true;rej('timeout')}},ms||6000);
 fetch(url,{headers:{'Accept':'application/json'}}).then(function(r){return r.json()}).then(function(j){if(!done){done=true;clearTimeout(t);res(j)}}).catch(function(e){if(!done){done=true;clearTimeout(t);rej(e)}})})}
function radLoad(cb){if(RAD.list&&!RAD.fb){cb();return}RAD.fb=false;
 try{var c=JSON.parse(localStorage.getItem('tokyo_radio')||'null');if(c&&c.list&&c.list.length&&Date.now()-c.t<3*864e5){RAD.list=c.list;cb();return}}catch(e){}
 var qs=['/json/stations/search?countrycode=JP&hidebroken=true&order=clickcount&reverse=true&limit=60','/json/stations/search?tag=jpop&hidebroken=true&order=clickcount&reverse=true&limit=30',
  '/json/stations/search?tag=anime&hidebroken=true&order=clickcount&reverse=true&limit=15','/json/stations/search?tag=city%20pop&hidebroken=true&order=clickcount&reverse=true&limit=10'];
 var k=0;function tryHost(){if(k>=RAD_API.length){RAD.list=RAD_FALLBACK.slice();RAD.fb=true;cb();return}var h=RAD_API[k++];
  Promise.all(qs.map(function(q){return radFetch(h+q).catch(function(){return[]})})).then(function(rs){var seen={},out=[],https=location.protocol==='https:'&&!radApp();
   rs.forEach(function(arr){(arr||[]).forEach(function(s){var u=s.url_resolved||s.url;if(!u||seen[u]||s.hls==1||s.lastcheckok===0)return;var cd=(s.codec||'').toUpperCase();if(cd&&!/MP3|AAC|OGG|OPUS/.test(cd))return;if(/\.m3u8|\.pls|\.m3u$|\.asx/i.test(u))return;if(https&&u.indexOf('https:')!==0)return;
    seen[u]=1;out.push({name:(s.name||'').trim().slice(0,40)||'Radio',url:u,id:s.stationuuid,cc:s.countrycode})})});
   if(!out.length){tryHost();return}RAD.host=h;RAD.list=out.slice(0,40).concat(RAD_FALLBACK.filter(function(f){return!seen[f.url]}));
   try{localStorage.setItem('tokyo_radio',JSON.stringify({t:Date.now(),list:RAD.list}))}catch(e){}cb()}).catch(tryHost)}
 tryHost()}
function radAudio(){if(RAD.a)return RAD.a;var a=new Audio();a.preload='none';a.volume=radVol();RAD.a=a;
 a.addEventListener('playing',function(){RAD.fails=0;RAD.busy=false;radUI()});
 a.addEventListener('error',function(){radFail(RAD.tok)});
 a.addEventListener('stalled',function(){if(RAD.on&&a.paused===false)radUI()});return a}
function radFail(tok){if(tok!==RAD.tok||!RAD.on)return;RAD.tok++;RAD.busy=false;if(++RAD.fails>6){radStop();toast(L('Радио не ловит — проверь интернет'));return}var t=RAD.tok;setTimeout(function(){if(t===RAD.tok&&RAD.on)radGo(1,true)},250)}
function radPlay(){var a=radAudio(),s=RAD.list[RAD.i];if(!s){RAD.on=false;radUI();return}RAD.busy=true;var tok=++RAD.tok;radUI();
 clearTimeout(RAD.to);RAD.to=setTimeout(function(){if(tok===RAD.tok&&RAD.busy)radFail(tok)},12000);
 try{a.src=s.url;var p=a.play();if(p&&p.catch)p.catch(function(e){if(tok!==RAD.tok)return;if(e&&e.name==='NotAllowedError'){radStop();return}if(e&&e.name==='AbortError')return;radFail(tok)})}catch(e){radFail(tok)}
 if(s.id&&RAD.host)fetch(RAD.host+'/json/url/'+s.id).catch(function(){});S.radio=RAD.i;save()}
function radStop(){RAD.on=false;RAD.busy=false;RAD.tok++;clearTimeout(RAD.to);if(RAD.a){try{RAD.a.pause();RAD.a.removeAttribute('src');RAD.a.load()}catch(e){}}radUI()}
function radToggle(){if(RAD.on){radStop();return}RAD.on=true;RAD.busy=true;radUI();radLoad(function(){if(!RAD.on)return;RAD.i=Math.min(RAD.list.length-1,S.radio|0);radPlay()})}
function radGo(d,auto){var start=function(){if(!RAD.list.length)return;RAD.i=(RAD.i+d+RAD.list.length)%RAD.list.length;RAD.on=true;if(!auto)RAD.fails=0;radPlay();RAD.lbl=TIME+3.5};
 if(!RAD.list){RAD.on=true;RAD.busy=true;radUI();radLoad(function(){RAD.i=S.radio|0;start()})}else start()}
function radUI(){var b=$('radt'),n=$('radn');if(!b)return;b.classList.toggle('on',RAD.on);var s=RAD.list&&RAD.list[RAD.i];
 n.textContent=RAD.on?(RAD.busy?L('ловлю…')+(s?' '+s.name:''):'♪ '+(s?s.name:'')):'';n.style.display=RAD.on?'block':'none'}
document.addEventListener('click',function(e){var b=e.target.closest('[data-rad]');if(!b)return;e.preventDefault();var r=b.dataset.rad;if(r==='t')radToggle();else radGo(r==='n'?1:-1)});
document.addEventListener('visibilitychange',function(){if(!RAD.a)return;if(document.hidden){RAD.was=RAD.on;if(RAD.on)try{RAD.a.pause()}catch(e){}}else if(RAD.was&&RAD.on){try{RAD.a.play()}catch(e){}}});
function radVol(){return clamp((S.rvol==null?85:S.rvol)/100,0,1)}
document.addEventListener('input',function(e){if(e.target.dataset&&e.target.dataset.r==='rvol'&&RAD.a)RAD.a.volume=radVol()});

boot();
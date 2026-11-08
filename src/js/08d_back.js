// ===== Android "back" + the app going to the background =====
function _vis(id){var e=$(id);return!!e&&!!e.style.display&&e.style.display!=='none'}
// called by the Android app on the system back gesture; true = handled, false = let the app go to the background
window.tdBack=function(){try{
 if(DLG){dlgNext(false);return true}
 if(_vis('chap')){$('chap').click();return true}
 if($('map').style.display==='flex'){toggleMap();return true}
 if(_vis('set')){closeSet();return true}
 if(_vis('res')){$('res').style.display='none';return true}
 if(_vis('duo')){$('duo').style.display='none';return true}
 if(mode==='edit'){var b=document.querySelector('#ed [data-e=back]');if(b){b.click();return true}}
 if(mode==='game'){home();return true}
 if(_vis('gar')){save();menuOpen();return true}
 return false}catch(e){return false}};
// minimised mid-race: save, silence the engine, pause behind the settings screen (not in a 2-player game)
document.addEventListener('visibilitychange',function(){
 if(document.hidden){save();if(AU)try{AU.c.suspend()}catch(e){}if(mode==='game'&&!(NET&&NET.on))openSet()}
 else{if(AU)try{AU.c.resume()}catch(e){}last=performance.now()}});

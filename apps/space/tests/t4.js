const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const D=new Design('F9');
D.add("merlin1d",{n:4,y:1.45});
D.top=2.9;
D.add('tank_kerolox',{w:3.7,h:18});
D.add('dec',{w:3.7});
D.add('merlin_vac');
D.add('tank_kerolox',{w:3.7,h:6});
D.add('cmg'); D.add('core_avionics',{w:1.25});
D.add('adapter_payload',{w:1.7});
D.add('cubesat');
D.finish();
console.log(JSON.stringify(totalDV(D,9.80665,0).stages.map(x=>[x.stage,Math.round(x.dv),+x.twr.toFixed(2)])));
const U=makeSolarSystem();
const W=new World(U);
const v=W.launch(D);
v.ap={phase:'launch',alt:200e3,dir:1};
const log=[];
let t=0, last=0;
const B=U.byId[v.body];
for(let i=0;i<60*3000 && v.alive;i++){
  W.step(1/30); t=W.ut-W.t0; if(v.ap.phase==='coast') W.setWarp(W.maxWarpIdx());
  if(t-last>=100){ last=t; const el=orbitInfo(W,v); log.push([Math.round(t),Math.round(v.alt||0),Math.round(Math.hypot(v.vx,v.vy)),Math.round(v.throttle*100),v.ap.phase,Math.round(el.rp-B.R),Math.round((el.e<1?el.ra:0)-B.R),v.stageIdx,Math.round(v.mp.m)].join(' ')); }
  if(v.ap.done) break;
}
const el=orbitInfo(W,v);
return {dvUsed:Math.round(v.dvUsed),vC:Math.round(Math.sqrt(B.gm/(B.R+200e3))),alive:v.alive,mode:v.mode,t:Math.round(t),ap:v.ap.phase,fail:v.ap.fail,pe:Math.round(el.rp-B.R),ra:Math.round(el.ra-B.R),e:el.e,logs:W.logs.map(l=>l.text),log};
})();`);
console.log(JSON.stringify(o.out,null,1));

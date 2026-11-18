const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const D=new Design('F9');
for(const x of [-1.38,-0.46,0.46,1.38]) D.add("merlin1d",{x:x,noStack:1,y:1.45});
D.top=2.9;
D.add('tank_kerolox',{w:3.7,h:18}); D.add('dec',{w:3.7}); D.add('merlin_vac'); D.add('tank_kerolox',{w:3.7,h:6});
D.add('core_avionics',{w:1.25}); D.add('adapter_payload',{w:1.7}); D.add('cubesat'); D.finish();
const W=new World(makeSolarSystem()); const v=W.launch(D);
v.ap={phase:'launch',alt:200e3,dir:1};
const out=[];
const B=W.U.byId[v.body];
for(let i=0;i<30*10 && v.alive;i++){ W.step(1/30);
  if(i%15==0){ const rr=Math.hypot(v.x,v.y), rx=v.x/rr, ry=v.y/rr; const avx=v.vx+B.rotW*v.y, avy=v.vy-B.rotW*v.x; const vr=avx*rx+avy*ry, vt=-avx*ry+avy*rx;
   const up=Math.atan2(-rx,ry); const pitchDeg=(Math.PI/2-wrapPI(v.a-up))*180/Math.PI;
   out.push({t:+(i/30).toFixed(0),alt:Math.round(v.alt),vr:Math.round(vr),vt:Math.round(vt),gamDeg:Math.round(Math.atan2(vr,vt)*180/Math.PI),pitchDeg:Math.round(pitchDeg),thr:+v.throttle.toFixed(2),acc:+v.accel.toFixed(1),q:Math.round(v.q),aero:v.aoa}); }
}
out.push(W.evq.map(e=>e.t+':'+(e.p?e.p.d.id:'')+(e.cause||'')).join(' '));
out.push(W.logs.map(l=>l.text).join(' | '));
return out;
})();`);
console.log(o.out.map(x=>typeof x=='string'?x:JSON.stringify(x)).join('\n'));

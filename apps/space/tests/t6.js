const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const D=new Design('F9');
for(const x of [-1.38,-0.46,0.46,1.38]) D.add('merlin1d',{x:x,noStack:1,y:1.45});
D.top=2.9;
D.add('tank_kerolox',{w:3.7,h:18}); D.add('dec',{w:3.7}); D.add('merlin_vac'); D.add('tank_kerolox',{w:3.7,h:6});
D.add('core_avionics',{w:1.25}); D.add('adapter_payload',{w:1.7}); D.add('cubesat'); D.finish();
const W=new World(makeSolarSystem()); const v=W.launch(D);
v.ap={phase:'launch',alt:200e3,dir:1};
const B=W.U.byId[v.body]; const out=[]; let t=0;
for(let i=0;i<30*1400 && v.alive;i++){ W.step(1/30); t+=1/30;
  if(v.ap.phase==='coast'||v.ap.phase==='circ'||v.ap.phase==='done'){ if(i%450==0){ const el=orbitInfo(W,v); const up=0;
    out.push({t:Math.round(t),ph:v.ap.phase,alt:Math.round(v.alt),pe:Math.round(el.rp-B.R),ra:Math.round(el.ra-B.R),thr:+v.throttle.toFixed(2),sas:v.sas,aErr:+wrapPI(v.sasTarget-v.a).toFixed(3),w:+v.w.toFixed(4),eng:v.engines.map(p=>p.d.id+':'+(p.on?1:0)+':'+Math.round(p.fl*100)).join(','),stg:v.stageIdx+'/'+v.stages.length,ec:Math.round(v.ec),fuel:v.tanks.map(q=>Math.round(Object.values(q.res)[0]||0)).join(',')}); } }
  if(v.ap.done) break;
}
out.push(JSON.stringify(v.ap)); return out;
})();`);
console.log(o.out.map(x=>typeof x=='string'?x:JSON.stringify(x)).join('\n'));

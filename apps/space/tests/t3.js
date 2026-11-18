const load=require('./load');
const o=load(`
G_OUT.out=(function(){
// Falcon-9-подобная: 9 Merlin, бак 3.7×40, разделитель, 1 MVac, бак 3.7×12, адаптер ПН, куб-сат, фэйринг
const D=new Design('F9');
const e1=D.add('merlin1d',{x:-1.0,noStack:1,y:.5+1.45}); e1.x=-1.2;
const e2=D.add('merlin1d',{x:0,noStack:1,y:1.45}); const e3=D.add('merlin1d',{x:1.2,noStack:1,y:1.45});
D.top=2.9;
D.add('tank_kerolox',{w:3.7,h:40});
D.add('dec',{w:3.7});
D.add('merlin_vac');
D.add('tank_kerolox',{w:3.7,h:12});
D.add('core_avionics',{w:1.25});
D.add('adapter_payload',{w:1.7});
const c=D.add('cubesat'); 
D.finish();
const r=totalDV(D,9.80665,0);
const mp=massProps(D.parts);
return {n:D.parts.length, edges:D.edges.length, mass:mp.m, dv:r.dv, stages:r.stages.map(s=>({st:s.stage,dv:Math.round(s.dv),t:Math.round(s.t),twr:+s.twr.toFixed(2),m0:Math.round(s.mStart)})), staged:D.parts.map(p=>p.d.id+':'+p.stage).join(' '), err:r.err};
})();`);
console.log(JSON.stringify(o.out,null,1));

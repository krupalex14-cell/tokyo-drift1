const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const D=new Design('F9');
D.add("merlin1d",{n:4,y:1.45}); D.top=2.9;
D.add('tank_kerolox',{w:3.7,h:18}); D.add('dec',{w:3.7}); D.add('merlin_vac'); D.add('tank_kerolox',{w:3.7,h:6});
D.add('cmg'); D.add('core_avionics',{w:1.25}); D.add('adapter_payload',{w:1.7}); D.add('cubesat'); D.finish();
const W=new World(makeSolarSystem()); const v=W.launch(D);
v.ap={phase:'launch',alt:200e3,dir:1}; ${process.env.NOGIM?'for(const p of v.parts) if(p.d.eng) p.d.eng.gim=0;':''}
const out=[]; const up0=Math.atan2(-v.x/Math.hypot(v.x,v.y), v.y/Math.hypot(v.x,v.y));
out.push('cm '+v.mp.cx.toFixed(3)+' '+v.mp.cy.toFixed(2)+' I '+v.mp.I.toExponential(2)+' cpts '+(v.cpts?v.cpts.length:'?'));
let dd=[]; let dc=[]; W.dbgc=(d)=>{ if(dc.length<12) dc.push(Object.keys(d).map(k=>k+'='+(+d[k]).toPrecision(4)).join(' ')); }; W.dbg=(v,d)=>{ if(dd.length<24) dd.push(Object.keys(d).map(k=>k+'='+d[k].toExponential(2)).join(' ')); };
for(let i=0;i<60;i++){ W.step(1/30);
  if(i%3==0) out.push([ (i/30).toFixed(2), v.mode, v.clamped?1:0, 'a-up',(wrapPI(v.a-up0)*57.3).toFixed(2),'w',v.w.toFixed(4),'gim',(v.gimS||0).toFixed(2),'cont',v.contact,'alt',v.alt.toFixed(2),'thr',Math.round(v.thrust/1000),'tq',(v.dbgTq||0)].join(' '));
}
return out.slice(0,1).concat(dc);
})();`);
console.log(o.out.join('\n'));

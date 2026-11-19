const load=require('./load');
const o=load(`
G_OUT.out=(function(){ const out=[];
const D=TEMPLATES.find(x=>x.id==='sound').make(); const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); v.sas='off'; W.active=v;
W.stage(v); v.throttle=1; let t=0;
const B=W.U.byId[v.body]; const alt=()=>Math.hypot(v.x,v.y)-B.R;
while(alt()<60000 && t<400){ W.step(1/30); t+=1/30; }
out.push('t='+t.toFixed(1)+' alt='+Math.round(alt())+' eng='+JSON.stringify(v.engines.map(p=>[p.on,p.fl])));
v.ctl.rot=1;
for(let i=0;i<20;i++){ for(let k=0;k<30;k++) W.step(1/30); out.push(i+' a='+(v.a*57.3).toFixed(1)+' w='+v.w.toFixed(3)+' ctlA='+(v.ctlA&&v.ctlA.toFixed(2))+' rotCmd='+Math.round(v.rotCmd)+' rcsfuel='+JSON.stringify(v.parts.filter(p=>p.d.rcs).map(p=>p.res))); }
return out;})();`);
console.log(o.out.join('\n'));

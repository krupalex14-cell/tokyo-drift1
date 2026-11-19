const load=require('./load');
const o=load(`
G_OUT.out=(function(){ const out=[];
for (const id of ['sound','electron','falcon9']) { const D=TEMPLATES.find(x=>x.id===id).make(); const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); const A=attAuthority(v.parts, v.mp); out.push(id+' '+JSON.stringify(A)+' mass='+Math.round(v.mp.m)+' I='+Math.round(v.mp.I)); }
return out;})();`);
console.log(o.out.join('\n'));

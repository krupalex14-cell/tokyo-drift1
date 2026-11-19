const load=require('./load');
const o=load(`
G_OUT.out=(function(){ const out=[];
const D=TEMPLATES.find(x=>x.id==='sound').make();
out.push('parts: '+D.parts.map(p=>p.defId+'['+(p.stage)+']@'+p.x.toFixed(2)+','+p.y.toFixed(2)+' w'+p.w.toFixed(2)+' h'+p.h.toFixed(2)).join(' | '));
const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D);
out.push('stages='+v.stages.length+' stageIdx='+v.stageIdx+' core='+hasCore(v)+' shielded='+v.parts.filter(p=>p.shielded).map(p=>p.defId).join(',')+' ecCap='+v.ecCap+' auth='+JSON.stringify(attAuthority(v.parts)));
return out;})();`);
console.log(o.out.join('\n'));

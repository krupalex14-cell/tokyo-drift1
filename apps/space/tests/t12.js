const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const res=[]; const goal=AutoBuild.planGoal(W,null,200e3);
const r=AutoBuild.run(W,pd,goal,{}); const V=r.variants[0];
const W2=new World(U,{tier:9}); W2.sandbox=true; W2.coarse=true; const v=W2.launch(clonePartsDesign(V.design)); AutoBuild.startMission(W2,v,goal,V.design);
for(let i=0;i<30*4000 && v.alive;i++){ W2.step(1/30); if(v.ap.phase==='hold') break; }
res.push('orbit '+v.ap.phase+' stageIdx='+v.stageIdx+'/'+v.stages.length+' parts='+v.parts.map(p=>p.d.id).join(','));
res.push('stages '+JSON.stringify(v.stages.map(s=>s.map(id=>v.pm.get(id)?v.pm.get(id).d.id:'?'))));
W2.evq.length=0;
W2.stage(v); // fairing? 
res.push('after stage: stageIdx='+v.stageIdx+' vessels='+W2.vessels.map(x=>x.name+'['+x.parts.length+':'+(hasCore(x)?'core':'nocore')+']').join(' ')+' active='+W2.active.name);
for(const x of W2.vessels) res.push(' V '+x.name+' parts='+x.parts.map(p=>p.d.id).join(',')+' debris='+x.debris+' mode='+x.mode+' alive='+x.alive+' core='+hasCore(x));
res.push(W2.logs.slice(-4).map(l=>l.text).join(' | '));
return res;
})();`);
console.log(o.out.join('\n'));

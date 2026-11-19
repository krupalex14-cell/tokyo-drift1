// бот-шоу: посадка на Луну на автопилоте с высоты (время до касания)
const load=require('./load');
const ids=(process.argv[2]||'lander,lander2').split(',');
const o=load(`
G_OUT.out=(function(){ const out=[];
for (const id of ${JSON.stringify(ids)}) {
  const D=TEMPLATES.find(x=>x.id===id).make(); const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D);
  W.placeDescent(v,'moon',1800,20,55); if(!v.engines.some(p=>p.on)) W.stage(v);
  v.throttle=0; v.sas='sretro'; v.rcs=v.rcsList.length>0; for(const p of v.parts) if(p.d.leg) p.st.deployed=true;
  v.ap={phase:'land',stageLimit:v.stages.length}; W.autoWarp=false; W.setWarp(0);
  const B=W.U.byId.moon; let t=0, lastSt='';
  for(let i=0;i<30*400 && v.alive;i++){ W.step(1/30); t+=1/30; const st=v.ap.st+'/'+v.mode; if(st!==lastSt){ lastSt=st; out.push(id+' t='+t.toFixed(0)+' '+st+' alt='+Math.round(Math.hypot(v.x,v.y)-B.R)); } if(v.mode==='landed'&&t>5) break; }
  out.push(id+' END t='+t.toFixed(0)+' alive='+v.alive+' mode='+v.mode+' ap='+JSON.stringify(v.ap).slice(0,80));
}
return out;})();`);
console.log(o.out.join('\n'));

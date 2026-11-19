// бот-шоу в меню: как летят готовые ракеты на автопилоте (высота/скорость по времени)
const load=require('./load');
const ids=(process.argv[2]||'electron,falcon9,atlas5,saturn5,starship,sound').split(',');
const o=load(`
G_OUT.out=(function(){
const out=[];
for (const id of ${JSON.stringify(ids)}) {
  const t=TEMPLATES.find(x=>x.id===id); const D=t.make();
  const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D);
  if (id!=='sound') AutoBuild.startMission(W,v,AutoBuild.planGoal(W,null,200e3),D); else v.ap={phase:'launch',alt:150e3,dir:1,stageLimit:0};
  const B=W.homeBody; const row=[id+': '];
  let t0=W.ut, nextMark=15;
  for (let i=0;i<30*400 && v.alive;i++){ W.step(1/30); const T=W.ut-t0; if (T>=nextMark){ nextMark+=15; const r=Math.hypot(v.x,v.y); const sx=v.vx+B.rotW*v.y, sy=v.vy-B.rotW*v.x; row.push(Math.round(T)+'s:'+((r-B.R)/1000).toFixed(1)+'km/'+Math.round(Math.hypot(sx,sy))+'m/s'); } }
  row.push(' alive='+v.alive+' ap='+(v.ap&&v.ap.phase)+' vessels='+W.vessels.length);
  out.push(row.join(' '));
}
return out;
})();`);
console.log(o.out.join('\n'));

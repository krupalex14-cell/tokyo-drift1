const load=require('./load');
const target=process.env.TG||'mars';
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const res=[]; const goal=AutoBuild.planGoal(W,'${target}',200e3); res.push('goal inj='+Math.round(goal.inj)+' tof='+(goal.plan.tof/86400).toFixed(0)+'d wait='+((goal.plan.tBurn-W.ut)/86400).toFixed(1)+'d');
const t0=Date.now(); const r=AutoBuild.run(W,pd,goal,{}); res.push('build '+(Date.now()-t0)+'ms'); if(r.err) return res.concat([r.err]);
const V=r.variants[0]; const rp=V.report; res.push(V.name+' '+rp.stages.map(s=>s.n+'x'+s.eng).join('|')+' m0='+Math.round(rp.m0)+' dvLeft='+Math.round(rp.dvLeft)+' inj='+Math.round(rp.inj));
const W2=new World(U,{tier:9}); W2.sandbox=true; W2.coarse=true; const v=W2.launch(clonePartsDesign(V.design)); AutoBuild.startMission(W2,v,goal,V.design);
let t=0, lastLog=0; const evs=[];
for(let i=0;i<30*200000 && v.alive;i++){
  W2.step(1/30);
  if(W2.active!==v && W2.active) { evs.push('switch@'+Math.round(W2.ut-W2.t0)); break; }
  if(v.ap.phase==='node'&&!v._n){v._n=1; evs.push('node@'+Math.round(W2.ut-W2.t0)+' dv '+Math.round(v.ap.node.mag));}
  if(!v.alive) break;
}
const A=W2.active||v; const B=U.byId[A.body]; const el=elements(B.gm,A.x,A.y,A.vx,A.vy);
res.push('after sep: '+evs.join(' ')+' body='+A.body+' e='+el.e.toFixed(3)+' ap='+JSON.stringify({ph:v.ap.phase,fail:v.ap.fail})+' logs: '+W2.logs.slice(-6).map(l=>l.text).join(' | '));
// перемотать: тоже ищем вход в СВ цели
let ev2=[]; let T=A; let n=0; let lastB=T.body, lastPh='';
while(T.alive && n<60000){ W2.step(0.1); n++;
  if(T.body!==lastB){ ev2.push('SOI '+lastB+'→'+T.body+' at +'+((W2.ut-W2.t0)/86400).toFixed(1)+'d'); lastB=T.body; const B3=U.byId[T.body]; const e3=elements(B3.gm,T.x,T.y,T.vx,T.vy); ev2.push('   rp='+((e3.rp-B3.R)/1000).toFixed(0)+'km e='+e3.e.toFixed(2)); }
  if(T.ap&&T.ap.phase!==lastPh){ lastPh=T.ap.phase; ev2.push(' ph '+lastPh+'@'+((W2.ut-W2.t0)/86400).toFixed(2)+'d'); }
  { const d=(W2.ut-W2.t0)/86400; if(d>1034.7&&d<1035.2&&n%1==0){ const B4=U.byId[T.body]; ev2.push('['+d.toFixed(3)+' '+T.body+' r='+(Math.hypot(T.x,T.y)/1e6).toFixed(1)+'Mm v='+Math.hypot(T.vx,T.vy).toFixed(0)+' mode='+T.mode+' w='+W2.warpIdx+' ph='+(T.ap&&T.ap.phase)+(T.ap&&T.ap.node?' nodet='+((T.ap.node.t-W2.t0)/86400).toFixed(3):'')+']'); } }
  if(T.ap&&T.ap.phase==='hold'&&T.body==='${target}') break; if(!T.ap||T.ap.fail) break; }
const B2=U.byId[T.body]; const e2=elements(B2.gm,T.x,T.y,T.vx,T.vy);
res.push(ev2.join(' ; '));
res.push('final body='+T.body+' alive='+T.alive+' e='+e2.e.toFixed(3)+' pe/ap='+((e2.rp-B2.R)/1000).toFixed(0)+'/'+((e2.ra-B2.R)/1000).toFixed(0)+'km fail='+(T.ap&&T.ap.fail)+' logs: '+W2.logs.slice(-5).map(l=>l.text).join(' | '));
return res;
})();`);
console.log(o.out.join('\n'));

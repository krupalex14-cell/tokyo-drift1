const load=require('./load');
const target=process.env.TG||'mars';
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const res=[]; const goal=AutoBuild.planGoal(W,'${target}',200e3);
const r=AutoBuild.run(W,pd,goal,{}); const V=r.variants[0];
const W2=new World(U,{tier:9}); W2.sandbox=true; W2.coarse=true; const v=W2.launch(clonePartsDesign(V.design)); AutoBuild.startMission(W2,v,goal,V.design);
const pl=goal.plan; res.push('plan '+JSON.stringify({dv:pl.dv,dvDep:pl.dvDep,vinfDep:pl.vinfDep,theta:pl.theta,tBurn:pl.tBurn-W2.t0}));
let last='';
const E=()=>{const B=U.byId[v.body]; const el=elements(B.gm,v.x,v.y,v.vx,v.vy); return 'ut='+Math.round(W2.ut-W2.t0)+' ph='+v.ap.phase+' mode='+v.mode+' warp='+W2.warpIdx+' e='+el.e.toFixed(3)+' ra/rp='+((el.ra-B.R)/1e3).toFixed(0)+'/'+((el.rp-B.R)/1e3).toFixed(0)+' |v|='+Math.hypot(v.vx,v.vy).toFixed(0)+' thr='+v.throttle.toFixed(2)+' acc='+(v.ap.acc?v.ap.acc.map(x=>Math.round(x)):'-')+' m='+Math.round(v.mp.m);};
let nsamp=0, wasBurning=false;
for(let i=0;i<30*200000 && v.alive;i++){
  W2.step(1/30);
  if(v.ap.phase==='node'){ const burning=v.throttle>0.01; if(burning&&!wasBurning){const nd=v.ap.node; const inf=nodeInfo(W2,v); res.push('node t='+Math.round(nd.t-W2.t0)+' dv='+nd.dv.map(Math.round)+' burn='+Math.round(inf.burn)+' vessel ang='+Math.atan2(v.y,v.x).toFixed(3)+' vdir='+Math.atan2(v.vy,v.vx).toFixed(3)+' thrust ang a='+v.a.toFixed(3)+' dvang='+Math.atan2(nd.dv[1],nd.dv[0]).toFixed(3)+' lastPlan theta='+v.lastPlan.theta.toFixed(3)+' dir='+(Math.sign(v.x*v.vy-v.y*v.vx))); res.push('burn start '+E()); wasBurning=true;} if(!burning&&wasBurning){res.push('burn end '+E()); wasBurning=false;} if(burning && i%900===0) res.push('  '+E()); }
  if(v.ap.phase==='sep'){res.push('sep '+E()); break;}
}
return res;
})();`);
console.log(o.out.join('\n'));

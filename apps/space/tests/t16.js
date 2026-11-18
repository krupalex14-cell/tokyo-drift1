const load=require('./load');
const target=process.env.TG||'mars';
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const _kp=kepProp; let kpBad=null; kepProp=function(mu,x,y,vx,vy,dt,out){ const o=_kp(mu,x,y,vx,vy,dt,out); const r0=Math.hypot(x,y), r1=Math.hypot(o[0],o[1]); if(!kpBad && (!isFinite(r1) || r1>1e3*r0+1e6) ) kpBad={mu,x,y,vx,vy,dt,o:o.slice()}; return o; };
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
let T=A; let n=0; let burning=false; const ev3=[];
const EE=()=>{const B3=U.byId[T.body]; const e3=elements(B3.gm,T.x,T.y,T.vx,T.vy); return 'd='+((W2.ut-W2.t0)/86400).toFixed(4)+' body='+T.body+' mode='+T.mode+' e='+e3.e.toFixed(3)+' rp='+((e3.rp-B3.R)/1e3).toFixed(0)+' r='+((e3.r-B3.R)/1e3).toFixed(0)+' |v|='+Math.hypot(T.vx,T.vy).toFixed(0)+' thr='+T.throttle.toFixed(2)+' F='+Math.round(T.thrust||0)+' m='+Math.round(T.mp.m)+' a='+T.a.toFixed(3)+' ph='+(T.ap&&T.ap.phase)+' acc='+(T.ap&&T.ap.acc?T.ap.acc.map(Math.round):'-')+' w='+W2.warpIdx;};
let cnt=0;
const hist=[]; while(T.alive && n<60000){ W2.step(0.1); n++; hist.push(EE()); if(hist.length>8) hist.shift(); if(Math.hypot(T.vx,T.vy)>2e5||Math.hypot(T.x,T.y)>1e13){ ev3.push('BLOWUP n='+n+' hist: '+hist.join(' || ')); break; }
  if(T.ap&&T.ap.phase==='node'&&T.body==='${target}'){ const th=T.throttle>0.01; if(th&&!burning){burning=true; ev3.push('START '+EE()+' nodeT='+((T.ap.node.t-W2.t0)/86400).toFixed(4)+' dv='+T.ap.node.dv.map(Math.round));} if(!th&&burning){burning=false; ev3.push('END '+EE());} if(th && (cnt++%6==0)) ev3.push('  '+EE()); }
  if(T.ap&&T.ap.phase==='hold'&&T.body==='${target}') {ev3.push('HOLD '+EE()); break;} }
res.push('KPBAD '+JSON.stringify(kpBad)); res.push('n='+n+' alive='+T.alive+' '+EE()); res.push(ev3.join(' ;; '));
return res;
})();`);
console.log(o.out.join(' ;; '));

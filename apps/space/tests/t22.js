const load=require('./load');
const target=process.env.TG||'mars';
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const UT0=(Date.now()-Date.UTC(2000,0,1,12))/1000+${process.env.OFF||0}*86400; const W=new World(U,{tier:9,ut:UT0});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const res=[]; const goal=AutoBuild.planGoal(W,'${target}',200e3); res.push('OFF=${process.env.OFF||0} goal inj='+Math.round(goal.inj)+' tof='+(goal.plan.tof/86400).toFixed(0)+'d wait='+((goal.plan.tBurn-W.ut)/86400).toFixed(1)+'d');
const t0=Date.now(); const r=AutoBuild.run(W,pd,goal,{}); res.push('build '+(Date.now()-t0)+'ms'); if(r.err) return res.concat([r.err]);
const V=r.variants[0]; const rp=V.report; res.push(V.name+' '+rp.stages.map(s=>s.n+'x'+s.eng).join('|')+' m0='+Math.round(rp.m0)+' dvLeft='+Math.round(rp.dvLeft)+' inj='+Math.round(rp.inj));
const W2=new World(U,{tier:9,ut:UT0}); W2.sandbox=true; W2.coarse=true; const v=W2.launch(clonePartsDesign(V.design)); AutoBuild.startMission(W2,v,goal,V.design);
let t=0, lastLog=0; const evs=[]; const booms=[]; { const _e=W2.event.bind(W2); W2.event=function(e){ if(e.t==='boom'||e.t==='impact') booms.push(e.t+' '+(e.cause||'')+' d='+((W2.ut-W2.t0)/86400).toFixed(3)+' def='+(e.defId||'')+' v='+(e.v&&e.v.name)+' alt='+(e.v&&Math.round(e.v.alt))+' mode='+(e.v&&e.v.mode)+' vn='+(e.vn||'')); return _e(e); }; }
for(let i=0;i<30*200000 && v.alive;i++){
  W2.step(1/30);
  if(W2.active!==v && W2.active) { evs.push('switch@'+Math.round(W2.ut-W2.t0)); break; }
  if(v.ap.phase==='node'&&!v._n){v._n=1; evs.push('node@'+Math.round(W2.ut-W2.t0)+' dv '+Math.round(v.ap.node.mag));}
  if(!v.alive) break;
}
const A=W2.active||v; const B=U.byId[A.body]; const el=elements(B.gm,A.x,A.y,A.vx,A.vy);
res.push('after sep: '+evs.join(' ')+' body='+A.body+' e='+el.e.toFixed(3)+' ap='+JSON.stringify({ph:v.ap.phase,fail:v.ap.fail})+' logs: '+W2.logs.slice(-6).map(l=>l.text).join(' | '));
// перемотать: тоже ищем вход в СВ цели
let T=A; let n=0; const ev4=[]; let lastPh='';
const EL=()=>{const B3=U.byId[T.body]; const el=elements(B3.gm,T.x,T.y,T.vx,T.vy); const mo=U.byId.moon; let md=''; if(T.body==='earth'){ const o=W2.eph.rel(mo,W2.ut); md=' moonD='+(Math.hypot(T.x-o.x,T.y-o.y)/1e6).toFixed(1)+'Mm'; } return 'd='+((W2.ut-W2.t0)/86400).toFixed(3)+' '+T.body+' e='+el.e.toFixed(3)+' rp='+((el.rp-B3.R)/1e3).toFixed(0)+' ra='+((el.ra-B3.R)/1e3).toFixed(0)+' r='+((el.r)/1e6).toFixed(2)+'Mm'+md; };
const _c=Planner.correct.bind(Planner); Planner.correct=function(W,v,tid,tArr,rp,side){ const r=_c(W,v,tid,tArr,rp,side); try{ const B3=U.byId.earth; const el0=elements(B3.gm,v.x,v.y,v.vx,v.vy); const st=kepProp(B3.gm,v.x,v.y,v.vx,v.vy,60,[0,0,0,0]); const el1=elements(B3.gm,st[0],st[1],st[2]+r.dv[0],st[3]+r.dv[1]); const mo=W.eph.rel(U.byId.moon,tArr); ev4.push('CORR dv='+r.dv.map(Math.round)+' before ra='+((el0.ra-B3.R)/1e6).toFixed(1)+'Mm after ra='+((el1.ra-B3.R)/1e6).toFixed(1)+'Mm e='+el1.e.toFixed(3)+' rp='+((el1.rp-B3.R)/1e3).toFixed(0)+' tof='+((tArr-W.ut)/86400).toFixed(2)+'d moonAt='+(Math.hypot(mo.x,mo.y)/1e6).toFixed(1)+'Mm ang='+Math.atan2(mo.y,mo.x).toFixed(2)+' ves ang='+Math.atan2(v.y,v.x).toFixed(2)+' r='+(Math.hypot(v.x,v.y)/1e6).toFixed(2)+' rp='+rp+' side='+side+' vel ang='+Math.atan2(v.vy,v.vx).toFixed(2)); }catch(e){ ev4.push('CORRERR '+e); } return r; };
let dbgDone=true; while(T.alive && n<60000){ W2.step(0.1); n++; if(!dbgDone && T.ap&&T.ap.phase==='corr'){ dbgDone=true; const lp=T.lastPlan; const r=Planner.correct(W2,T,lp.target,lp.tArr,lp.rp,lp.side); const B3=U.byId.earth; const el0=elements(B3.gm,T.x,T.y,T.vx,T.vy); const st=kepProp(B3.gm,T.x,T.y,T.vx,T.vy,60,[0,0,0,0]); const el1=elements(B3.gm,st[0],st[1],st[2]+r.dv[0],st[3]+r.dv[1]); const mo=W2.eph.rel(U.byId.moon,lp.tArr); ev4.push('CORR dv='+r.dv.map(Math.round)+' before ra='+((el0.ra-B3.R)/1e6).toFixed(1)+'Mm after ra='+((el1.ra-B3.R)/1e6).toFixed(1)+'Mm e='+el1.e.toFixed(3)+' rp='+((el1.rp-B3.R)/1e3).toFixed(0)+' tof='+((lp.tArr-W2.ut)/86400).toFixed(2)+'d moonAt='+(Math.hypot(mo.x,mo.y)/1e6).toFixed(1)+'Mm ang='+Math.atan2(mo.y,mo.x).toFixed(2)+' ves ang='+Math.atan2(T.y,T.x).toFixed(2)+' lp.rp='+lp.rp+' side='+lp.side); } if(T.ap&&T.ap.phase==='node'&&T.body==='earth'&&T.ap.node&&T.ap.node.mag<100){ const aa=T.ap; if(n%1==0 && (T.throttle>0.01 || aa._d<40)){ aa._d=(aa._d||0)+1; ev4.push('  N d='+((W2.ut-W2.t0)/86400).toFixed(5)+' mode='+T.mode+' w='+W2.warpIdx+' a='+T.a.toFixed(3)+' tgt='+(T.sasTarget||0).toFixed(3)+' sas='+T.sas+' thr='+T.throttle.toFixed(2)+' F='+Math.round(T.thrust||0)+' burning='+aa.burning+' acc='+(aa.acc?aa.acc.map(x=>x.toFixed(1)):'-')+' dt-to-node='+Math.round(aa.node.t-W2.ut)+' w='+(T.w||0).toFixed(3)); } } if(T.ap&&T.ap.phase!==lastPh){ lastPh=T.ap.phase; ev4.push('PH '+lastPh+' '+EL()); } if(T.ap&&T.ap.phase==='hold'&&T.body==='${target}') break; if(!T.ap) break; }
res.push(ev4.join(' ;; '));
res.push('BOOMS '+booms.slice(0,12).join(' | '));
return res;
})();`);
console.log(o.out.join(' ;; '));

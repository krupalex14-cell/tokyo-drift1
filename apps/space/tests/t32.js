// автопосадка со спуска: шаблон, тело, высота м, скорость падения, горизонтальная
const load=require('./load');
const tid=process.argv[2]||'lander_mars', body=process.argv[3]||'mars', alt=+(process.argv[4]||15000), vd=+(process.argv[5]||250), vh=+(process.argv[6]||150);
const o=load(`
G_OUT.out=(function(){
const D=TEMPLATES.find(x=>x.id==='${tid}').make();
const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); const out=[];
W.placeDescent(v,'${body}',${alt},${vd},${vh}); v.throttle=0; v.mode='phys'; if(!v.engines.some(p=>p.on)) W.stage(v);
v.ap={phase:'land'}; W.autoWarp=true;
const B=W.U.byId['${body}']; let lastSt='', maxW=0, minChute=0;
for(let i=0;i<30*3600 && v.alive;i++){ W.step(1/30);
  const st=v.ap.st+'/'+v.mode; if(st!==lastSt){ lastSt=st; const r=Math.hypot(v.x,v.y); out.push('t='+Math.round(W.ut-W.t0)+' '+st+' alt='+Math.round(r-B.R)+' chute='+v.parts.filter(p=>p.d.chute).map(p=>p.st.chute).join(',')); }
  maxW=Math.max(maxW,Math.abs(v.w)); if(process.env.TR && i%+process.env.TR===0){ const c=landCalc(W,v); out.push('  t='+(W.ut-W.t0).toFixed(1)+' hg='+c.hg.toFixed(0)+' vv='+c.vv.toFixed(0)+' vh='+c.vh.toFixed(0)+' thr='+v.throttle.toFixed(2)+' a='+v.a.toFixed(2)+' tgt='+v.sasTarget.toFixed(2)+' w='+v.w.toFixed(2)+' aT='+c.aT.toFixed(1)+' pa='+c.pa.toFixed(0)); } if(v.ap.done) break; }
const r=Math.hypot(v.x,v.y); const sx=v.vx+B.rotW*v.y, sy=v.vy-B.rotW*v.x;
out.push('END alive='+v.alive+' mode='+v.mode+' fail='+(v.ap.fail||'')+' parts='+v.parts.length+'/'+D.parts.length+' alt='+(r-B.R).toFixed(1)+' vs='+Math.hypot(sx,sy).toFixed(2)+' lastImpact='+(v.lastImpact||0).toFixed(1)+' maxW='+maxW.toFixed(2)+' ut='+Math.round(W.ut-W.t0));
return out;
})();`);
console.log(o.out.join('\n'));

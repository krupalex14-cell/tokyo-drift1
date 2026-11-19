// автопосадка при разных ускорениях времени (индекс варпа в фазе спуска): касание, остаток топлива
const load=require('./load');
const tid=process.argv[2]||'lander', body=process.argv[3]||'moon', alt=+(process.argv[4]||100), widx=+(process.argv[5]||0);
const o=load(`
G_OUT.out=(function(){
const D=TEMPLATES.find(x=>x.id==='${tid}').make();
const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); const out=[];
W.placeInOrbit(v,'${body}',${alt}*1000); v.throttle=0; v.mode='phys'; if(!v.engines.some(p=>p.on)) W.stage(v);
for(const p of v.parts) if(p.d.leg) p.st.deployed=true;
v.ap={phase:'land'}; W.autoWarp=true; const B=W.U.byId['${body}']; const G={last:''}; let t=0, steps=0, vmax=0, gmax=0;
for(let i=0;i<30*3600*3 && v.alive;i++){ 
  if (${widx}>0 && v.ap.st==='final' && v.mode==='phys') W.setWarp(Math.min(${widx}, W.maxWarpIdx()));
  W.step(1/30); steps++; { const st=v.ap.st+'/'+v.mode+'/w'+W.warpIdx; if(st!==G.last){ G.last=st; out.push('  f='+steps+' ('+(steps/30).toFixed(0)+'c real) sim t='+(W.ut-W.t0).toFixed(0)+' '+st+' alt='+Math.round(Math.hypot(v.x,v.y)-B.R)+' vs='+Math.hypot(v.vx+B.rotW*v.y,v.vy-B.rotW*v.x).toFixed(0)); } } gmax=Math.max(gmax,v.gload||0);
  if(v.ap.done||v.mode==='landed'&&i>30) break; }
const fuel=Math.round(v.parts.filter(p=>p.res).reduce((a,p)=>a+Object.values(p.res).reduce((x,y)=>x+y,0),0));
out.push('widx=${widx} alive='+v.alive+' mode='+v.mode+' impact='+(v.lastImpact||0).toFixed(2)+' parts='+v.parts.length+' gmax='+gmax.toFixed(1)+' realFramesAt30fps='+steps+' (≈'+(steps/30).toFixed(0)+' c)'+' fuel='+fuel);
return out;})();`);
console.log(o.out.join('\n'));

// автопосадка с круговой орбиты: тело, высота км
const load=require('./load');
const tid=process.argv[2]||'lander', body=process.argv[3]||'moon', alt=+(process.argv[4]||100);
const o=load(`
G_OUT.out=(function(){
const D=TEMPLATES.find(x=>x.id==='${tid}').make();
const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); const out=[];
W.placeInOrbit(v,'${body}',${alt}*1000); v.throttle=0; v.mode='phys'; 
if(!v.engines.some(p=>p.on)) { W.stage(v); }
for(const p of v.parts) if(p.d.leg) p.st.deployed=true;
v.ap={phase:'land'}; W.autoWarp=true;
const B=W.U.byId['${body}']; let t=0, lastSt='', maxW=0;
for(let i=0;i<30*3600*3 && v.alive;i++){ W.step(1/30); t+=1/30*W.warpVal();
  const st=v.ap.st+'/'+v.ap.phase+'/'+v.mode; if(st!==lastSt){ lastSt=st; const r=Math.hypot(v.x,v.y); out.push('t='+Math.round(W.ut-W.t0)+' '+st+' alt='+Math.round(r-B.R)+' fuel='+Math.round(v.parts.reduce((s,p)=>s+Object.keys(p.res).filter(k=>k!='ec').reduce((a,k)=>a+p.res[k],0),0))+' w='+W.warpVal()); }
  maxW=Math.max(maxW,Math.abs(v.w));
  if(v.ap.done) break; }
const r=Math.hypot(v.x,v.y); const sx=v.vx+B.rotW*v.y, sy=v.vy-B.rotW*v.x;
out.push('END alive='+v.alive+' mode='+v.mode+' ap='+JSON.stringify(v.ap)+' parts='+v.parts.length+'/'+D.parts.length+' alt='+(r-B.R).toFixed(1)+' vs='+Math.hypot(sx,sy).toFixed(2)+' lastImpact='+(v.lastImpact||0).toFixed(1)+' maxW='+maxW.toFixed(2)+' ut='+Math.round(W.ut-W.t0));
return out;
})();`);
console.log(o.out.join('\n'));

const load=require('./load');
const g=load(`
G_OUT.out = (function(){
const U=makeSolarSystem(); const eph=new Ephemeris(U);
const t0=(Date.UTC(2026,10,18)-Date.UTC(2000,0,1,12))/1000;
setStartRotation(U,eph,t0,8.5);
const res={};
for(const b of U.bodies){ if(!b.parent) continue; const s=eph.rel(b,t0); res[b.id]={r:Math.hypot(s.x,s.y)/1e9, v:Math.hypot(s.vx,s.vy), soi:b.soi/1e6, g:b.g.toFixed(2), vesc:b.vesc.toFixed(0), atmTop:b.atm?(b.atm.top/1e3).toFixed(0):0};}
// Kepler test: LEO
const mu=U.byId.earth.gm; const r=6.571e6; const v=Math.sqrt(mu/r); const o=kepProp(mu,r,0,0,v,5400);
const el=elements(mu,r,0,0,v);
// Earth distance from Sun
const se=eph.rel(U.byId.earth,t0);
// terrain sampling
const T=U.byId.earth.T; const prof=[]; for(let km=-300;km<=300;km+=50){ const th=km*1e3/U.byId.earth.R; const hh=T.h(th); prof.push(km+':'+hh.toFixed(0)+'/'+T.biome(th,hh)); }
const tm=U.byId.moon.T; const prof2=[]; for(let km=-10;km<=10;km+=2){ const th=km*1e3/U.byId.moon.R; const hh=tm.h(th); prof2.push(km+':'+hh.toFixed(0)+'/'+tm.biome(th,hh)); }
let tt=Date.now(); let s=0; for(let i=0;i<20000;i++){ s+=T.h(i*1e-6, 1);} const dt=Date.now()-tt;
const U2=makeTrappist(), U3=makeRandomSystem(5);
return {res,leo:[o[0]/r,o[1]/r,el.T,el.e], earthAU:Math.hypot(se.x,se.y)/AU, prof:prof.join(' '), prof2:prof2.join(' '), perHms:dt/20000*1000, U2:U2.bodies.map(b=>b.id).join(','), U3:U3.bodies.map(b=>b.id+(b.gas?'G':'')).join(','), home3:U3.home};
})();`);
console.log(JSON.stringify(g.out,null,1).slice(0,4000));

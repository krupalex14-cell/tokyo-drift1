const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9}); 
const pd=new Design('Зонд');
pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); 
const res=[]; const t0=Date.now();
const goal={alt:200e3, inj:0};
const _v=AutoBuild.verify.bind(AutoBuild); let nv=0, tv=0; AutoBuild.verify=function(){ const t=Date.now(); nv++; const r=_v.apply(null,arguments); tv+=Date.now()-t; return r; }; const _s=AutoBuild.simulate.bind(AutoBuild); let ns=0, ts=0; AutoBuild.simulate=function(){ const t=Date.now(); ns++; const r=_s.apply(null,arguments); ts+=Date.now()-t; return r; };
const r=AutoBuild.run(W,pd,goal,{}); res.push('verify calls '+nv+' '+tv+'ms; sims '+ns+' '+ts+'ms');
res.push('time '+(Date.now()-t0)+'ms');
if(r.err) res.push(r.err); else for(const v of r.variants){ const rp=v.report; res.push(v.name+': '+rp.stages.map(s=>s.n+'x'+s.eng+' D'+s.D+' L'+s.L.toFixed(1)+' P'+Math.round(s.P)).join(' | ')+' m0='+Math.round(rp.m0)+' cost='+(rp.cost/1e6).toFixed(1)+'M twr='+rp.twr0.toFixed(2)+' dvLeft='+Math.round(rp.dvLeft)+' maxQ='+Math.round(rp.maxQ)+' maxG='+rp.maxG.toFixed(1)+' t='+Math.round(rp.tAscent)+' pe='+Math.round(rp.pe/1000)+' ra='+Math.round(rp.ra/1000)); }
return res;
})();`);
console.log(o.out.join('\n'));

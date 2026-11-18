const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U); const B=U.byId.earth; const res=[];
for(const tg of ['moon','venus','mars','mercury','jupiter','saturn','neptune']){
  const t0=Date.now();
  const r=Planner.find(W,{body:'earth',r0:B.R+200e3,dir:1,theta0:0,t0:W.ut,target:tg});
  res.push(tg+': '+(r.err||('dvDep '+Math.round(r.dvDep)+' dvCap '+Math.round(r.dvCap)+' tof '+(r.tof/86400).toFixed(1)+'d wait '+((r.tBurn-W.ut)/86400).toFixed(1)+'d vinfArr '+Math.round(r.vinfArr)))+' ('+(Date.now()-t0)+'ms)');
}
return res;
})();`);
console.log(o.out.join('\n'));

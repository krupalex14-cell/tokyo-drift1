const load=require('./load');
const g=load(`
G_OUT.out=(function(){
const U=makeSolarSystem();
function bench(b,th0,lod){const T=U.byId[b].T;let t=Date.now(),s=0;for(let i=0;i<50000;i++)s+=T.h(th0+i*1e-7,lod);return (Date.now()-t)/50000*1000;}
const r={};
r.earthNear=bench('earth',0,1); r.earthFar=bench('earth',3,1); r.earthLod50=bench('earth',3,50);r.moon=bench('moon',3,1);r.mars=bench('mars',3,1);
let t=Date.now(),s=0; for(let i=0;i<500000;i++) s+=hash2(i,5); r.hash=(Date.now()-t)/500000*1000;
return r;})();`);
console.log(g.out);

const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const res=[]; const mu=398602544600000;
const L=lambert(mu,14590371.019,7882261.65,-92632553.49,352637151.79,391980.99,true); res.push('L='+JSON.stringify(L));
const r1=Math.hypot(14590371.019,7882261.65), r2=Math.hypot(-92632553.49,352637151.79);
const dnu=1.332, A=Math.sin(dnu)*Math.sqrt(r1*r2/(1-Math.cos(dnu))), sm=Math.sqrt(mu);
const yf=z=>r1+r2+A*(z*stumpS(z)-1)/Math.sqrt(stumpC(z));
const Ft=z=>{const y=yf(z); return Math.pow(y/stumpC(z),1.5)*stumpS(z)+A*Math.sqrt(y)-sm*391980.99;};
for(const z of [-158,-100,-50,-20,-10,-5,-2,0,2,5,10,20,30,39]) res.push('z='+z+' y='+yf(z).toExponential(2)+' Ft='+Ft(z).toExponential(2));
return res;})();`);
console.log(o.out.join('\n'));

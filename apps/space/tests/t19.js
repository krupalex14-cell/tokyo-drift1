const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const res=[]; const mu=42829650530000;
const tests=[[538812650.21,70503983.59,-2929.708,-356.825,1000],[538812650.21,70503983.59,-2929.708,-356.825,1e6],[5e8,1e7,-3000,100,-2e5],[7e6,0,0,8200,1e5],[7e6,0,0,12000,5e4],[1.5e11,0,0,3e4,6e7]];
for(const t of tests){ const m=t[4]; const o=kepProp(mu,t[0],t[1],t[2],t[3],t[4],[0,0,0,0]); const b=kepProp(mu,o[0],o[1],o[2],o[3],-t[4],[0,0,0,0]); const E=(x,y,vx,vy)=>0.5*(vx*vx+vy*vy)-mu/Math.hypot(x,y); res.push('dt='+t[4]+' r1='+Math.hypot(o[0],o[1]).toExponential(3)+' dE='+(E(...o)-E(t[0],t[1],t[2],t[3])).toExponential(2)+' back err='+Math.hypot(b[0]-t[0],b[1]-t[1]).toExponential(2)); }
return res;})();`);
console.log(o.out.join('\n'));

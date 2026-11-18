const load=require('./load');
const target=process.env.TG||'mars';
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U,{tier:9});
const pd=new Design('Зонд'); pd.add('core_bus',{}); pd.add('tank_mono',{w:.6,h:1}); pd.add('mr80b',{});
const res=[]; const goal=AutoBuild.planGoal(W,'${target}',200e3);
const r=AutoBuild.run(W,pd,goal,{});
for(const V of r.variants){ res.push(V.name+' '+JSON.stringify(V.report,(k,x)=>typeof x==='number'?Math.round(x*100)/100:x).slice(0,900)); }
return res;
})();`);
console.log(o.out.join('\n'));

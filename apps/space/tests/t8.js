const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const U=makeSolarSystem(); const W=new World(U); const B=U.byId[U.home]; const th=U.siteTheta; const res=[];
ensureTile(W,B,th,400);
for(const dx of [-60,-30,-10,-3,-1.1,0,1.1,3,10,30,60]){ res.push(dx+': '+terrH(W,B,th+dx/B.R).toFixed(4)); }
return {res, site:th, tile: W.tile?Object.keys(W.tile).join(','):null};
})();`);
console.log(JSON.stringify(o.out,null,1));

// вездеходы: шаблоны проходят проверку, ставятся на Луну/Марс, едут (по поверхности!) и не подскакивают
const load=require('./load');
const o=load(`
G_OUT.out=(function(){
const res=[];
for (const t of TEMPLATES.filter(x=>x.kind==='rover')) for (const body of ['moon','mars']) {
  const D=t.make(); const W0=new World(makeSolarSystem(),{tier:9}); W0.sandbox=true;
  const chk=validateDesign(D.parts,W0,{});
  const W=new World(makeSolarSystem(),{tier:9}); W.sandbox=true; const v=W.launch(D); W.placeOnSurface(v,body,0.3);
  const B=W.U.byId[body]; const ang=()=>Math.atan2(v.y,v.x)-bodyRot(B,W.ut); const a0=ang(); const h0=Math.hypot(v.x,v.y);
  v.sas='off'; let vmax=0, hmax=0, hmin=1e9, imp=0, dpark=0;
  for(let i=0;i<30*30 && v.alive;i++){ if(i===30*5){ let q=ang()-a0; while(q>Math.PI)q-=2*Math.PI; while(q<-Math.PI)q+=2*Math.PI; dpark=Math.abs(q)*B.R; v.drive=1; } W.step(1/30); const h=Math.hypot(v.x,v.y)-h0; hmax=Math.max(hmax,h); hmin=Math.min(hmin,h); }
  let da=ang()-a0; while(da>Math.PI)da-=2*Math.PI; while(da<-Math.PI)da+=2*Math.PI;
  const rep={tpl:t.id,body,parts:D.parts.length,warn:chk.issues.map(i=>i.lvl+':'+i.text),alive:v.alive,mode:v.mode,park5s:+dpark.toFixed(2),dist:+(Math.abs(da)*B.R).toFixed(1),hmin:+hmin.toFixed(2),hmax:+hmax.toFixed(2),imp:+(v.lastImpact||0).toFixed(2),ec:+(v.ec||0).toFixed(0)};
  res.push(JSON.stringify(rep));
}
return res.join('\\n');
})();`);
console.log(o.out);

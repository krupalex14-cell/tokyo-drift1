// посадка шаблона на тело с заданной высотой/скоростью/наклоном: проверка устойчивости контакта
const load=require('./load');
const tid=process.argv[2]||'lander', body=process.argv[3]||'moon', H=+(process.argv[4]||14), VD=+(process.argv[5]||-2), TILT=+(process.argv[6]||0);
const o=load(`
G_OUT.out=(function(){
const D=TEMPLATES.find(x=>x.id==='${tid}').make();
const W=new World(makeSolarSystem()); const v=W.launch(D); const out=[];
W.placeOnSurface(v,'${body}',0.3); v.clamped=false; v.mode='phys'; v.sas='off';
const B=W.U.byId['${body}']; const r=Math.hypot(v.x,v.y), rx=v.x/r, ry=v.y/r; v.x+=rx*${H}; v.y+=ry*${H}; v.a=Math.atan2(-rx,ry)+${TILT}; const gx=-B.rotW*v.y, gy=B.rotW*v.x; v.vx=gx+rx*${VD}; v.vy=gy+ry*${VD}; v.w=0;
let maxW=0, minParts=v.parts.length, t0=0, mv=0;
for(let i=0;i<30*40 && v.alive;i++){ W.step(1/30); maxW=Math.max(maxW,Math.abs(v.w)); const rr=Math.hypot(v.x,v.y); const vr=(v.vx*v.x+v.vy*v.y)/rr; mv=Math.max(mv,vr);
  if(i%15==0) out.push([+(i/30).toFixed(1),+(rr-B.R).toFixed(2),+vr.toFixed(2),'c'+v.contact,'a'+v.a.toFixed(2),'w'+v.w.toFixed(2),'p'+v.parts.length,v.mode].join(' ')); if(v.mode==='landed')break; }
out.push('RESULT parts '+v.parts.length+'/'+D.parts.length+' maxW '+maxW.toFixed(2)+' maxUp '+mv.toFixed(2)+' mode '+v.mode+' alive '+v.alive+' lastImpact '+(v.lastImpact||0).toFixed(1));
return out;
})();`);
console.log(o.out.join('\n'));

// загрузка игровых модулей в Node (без DOM) для тестов
const fs=require('fs'),path=require('path');
const ORDER=(process.env.MODS||'util,bodies,parts,orbits,planner,vessel,physics,world,science,autobuild').split(',');
function load(extra){
  let src='';
  for(const n of ORDER){const p=path.join(__dirname,'..','src',n+'.js');if(fs.existsSync(p))src+='\n'+fs.readFileSync(p,'utf8');}
  src+='\n'+(extra||'');
  const fn=new Function('G_OUT','localStorage','document',src);
  const out={};
  fn(out,{getItem(){return null},setItem(){},removeItem(){}},undefined);
  return out;
}
module.exports=load;

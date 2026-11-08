// ===== LANDMARKS, BRIDGES, ROAD FURNITURE (generation) =====
var P_RSIGN=21,P_TORO=22,LMI=[],LMA=[];
function rectFreeOk(cx,cy,w,h,m,ok){for(var y=cy-m;y<cy+h+m;y++)for(var x=cx-m;x<cx+w+m;x++)if(ok.indexOf(OCC[oIdx(x,y)])<0)return false;return true}
function genLandSpecs(){
 LMI=[];LMA=[];
 placeSpec('castle',60,56,[D_TRAD,D_RES,D_PARK],2,{sep:4000});
 placeSpec('sensoji',40,64,[D_SHOP,D_TRAD,D_DOWN],1);
 placeSpec('ferris',34,28,[D_PORT,D_SHOP],2,{sep:3000});
 placeSpec('skytree',36,36,[D_DOWN,D_SHOP],1);
 placeSpec('tstation',60,22,[D_DOWN,D_SHOP],1);
 placeSpec('sumo',34,30,[D_DOWN,D_SHOP,D_TRAD],1);

 placeSpec('pagoda',34,30,[D_TRAD,D_RES,D_SHOP,D_PARK],7,{sep:1300});
 placeSpec('jgarden',36,28,[D_RES,D_TRAD,D_SHOP,D_DOWN,D_PARK],8,{sep:1200});
 placeSpec('onsen',30,24,[D_TRAD,D_RES,D_FOREST],4,{sep:1800,ok:[0,5]});
 placeSpec('yokocho',14,44,[D_SHOP,D_DOWN],6,{sep:1300});
 placeSpec('cyl',26,26,[D_SHOP,D_DOWN],3,{sep:2000});
 placeSpec('senbon',18,52,[D_FOREST,D_PARK],5,{sep:2200,ok:[0,5]});
 placeSpec('bamboo',30,30,[D_FOREST,D_PARK],5,{sep:2200,ok:[0,5]});
 placeSpec('temple',40,32,[D_TRAD,D_RES],3,{sep:2000});
}
function walls(s,t,st,gap,ht){var x=s.x,y=s.y,w=s.w,h=s.h,o={d:s.d,sd:s.sd,ht:ht||1};function B(a,b,c,d){addB({x:a,y:b,w:c,h:d,st:st,ht:o.ht,d:o.d,sd:o.sd})}
 B(x,y,w,t);B(x,y+t,t,h-t);B(x+w-t,y+t,t,h-t);B(x+t,y+h-t,w/2-gap/2-t,t);B(x+w/2+gap/2,y+h-t,w/2-gap/2-t,t);LMI.push({k:'cg',x:x+w/2,y:y+h-t/2,w:gap+6,c:st===28?'#7a4a2a':st===32?'#6a5a3a':'#c83030',bx0:x+w/2-gap,by0:y+h-30,bx1:x+w/2+gap,by1:y+h+10})}
function landBuild(s){var x=s.x,y=s.y,w=s.w,h=s.h,cx=x+w/2;function B(a,b,c,d,st,ht,o){var bb={x:a,y:b,w:c,h:d,st:st,ht:ht,d:s.d,sd:s.sd+((a*7+b)|0)};if(o)for(var k in o)bb[k]=o[k];addB(bb);return bb}
 switch(s.k){
  case 'pagoda':walls(s,6,20,30);B(cx-60,y+22,120,70,8,5);B(x+w-92,y+104,66,66,21,14);B(x+24,y+112,42,36,5,2);break;
  case 'castle':var m=36,mw=30;B(x+m,y+m,w-2*m,mw,22,0,{ns:1});B(x+m,y+h-m-mw,(w-2*m)/2-22,mw,22,0,{ns:1});B(cx+22,y+h-m-mw,(w-2*m)/2-22,mw,22,0,{ns:1});B(x+m,y+m+mw,mw,h-2*m-2*mw,22,0,{ns:1});B(x+w-m-mw,y+m+mw,mw,h-2*m-2*mw,22,0,{ns:1});
   var i0=m+mw,t=12;B(x+i0,y+i0,w-2*i0,t,24,2);B(x+i0,y+i0+t,t,h-2*i0-2*t,24,2);B(x+w-i0-t,y+i0+t,t,h-2*i0-2*t,24,2);B(x+i0,y+h-i0-t,(w-2*i0)/2-20,t,24,2);B(cx+20,y+h-i0-t,(w-2*i0)/2-20,t,24,2);
   B(cx-72,y+h/2-84,144,130,23,16);B(x+i0+24,y+i0+26,52,42,23,6,{sm:1});B(x+w-i0-76,y+i0+26,52,42,23,6,{sm:1});break;
  case 'ferris':B(cx-30,y+h-58,60,22,25,2);B(x+16,y+h-50,30,24,7,2);LMA.push({k:'ferris',x:cx,y:y+h-58,R:76,sd:s.sd});break;
  case 'sensoji':walls(s,6,20,26);B(cx-52,y+h-36,40,30,26,4,{gl:1});B(cx+12,y+h-36,40,30,26,4,{gr:1});
   for(var yy=y+h-66;yy>y+170;yy-=21){B(cx-46,yy,24,19,27,2,{fc:1});B(cx+22,yy,24,19,27,2,{fc:-1})}
   B(cx-82,y+28,164,100,8,7);B(x+28,y+150,62,62,21,14);LMI.push({k:'gate',x:cx,y:y+h-36,w:104,h:30,bx0:cx-60,by0:y+h-60,bx1:cx+60,by1:y+h+10});break;
  case 'jgarden':walls(s,6,28,26,1);B(x+w-84,y+18,58,40,5,2);var pcx=x+w*.42,pcy=y+h*.46;B(pcx-58,pcy-34,116,66,29,0,{ns:1});break;
  case 'daibutsu':walls(s,6,20,28);B(cx-44,y+40,88,92,30,10);break;
  case 'skytree':B(cx-40,y+h/2-40,80,80,31,30);LMA.push({k:'sky',x:cx,y:y+h/2+40});break;
  case 'onsen':walls(s,4,32,26,1);B(x+14,y+12,w-28,58,5,3);B(x+46,y+112,52,32,29,0,{ns:1});B(x+148,y+110,44,30,29,0,{ns:1});break;
  case 'yokocho':for(var y2=y+6;y2<y+h-26;y2+=25){B(x+2,y2,44,23,33,2);B(x+w-46,y2,44,23,33,2)}LMI.push({k:'yk',x:x,y:y,w:w,h:h,bx0:x,by0:y-10,bx1:x+w,by1:y+h});break;
  case 'sumo':B(x+28,y+18,w-56,h-96,34,9);break;
  case 'tstation':B(x+10,y+22,w-20,108,35,6);break;
  case 'cyl':B(x+24,y+24,80,80,36,16);break;
  case 'senbon':B(cx-30,y+8,60,44,12,3);break;
  case 'bamboo':B(x+4,y+4,w/2-22,h-8,37,6,{ns:1});B(cx+18,y+4,w/2-22,h-8,37,6,{ns:1});break;
 }}
function landProps(s){var x=s.x,y=s.y,w=s.w,h=s.h,cx=x+w/2,i;function T(px,py,t){addP({t:t||P_TREE,x:px,y:py})}function L(px,py){addP({t:P_TORO,x:px,y:py})}
 switch(s.k){
  case 'pagoda':for(i=y+h-44;i>y+100;i-=28){L(cx-20,i);L(cx+20,i)}T(x+18,y+20,P_SAKURA);T(x+w-18,y+20,P_SAKURA);T(x+20,y+h-24);T(x+w-20,y+h-24);T(x+34,y+186,P_SAKURA);break;
  case 'castle':for(i=x+14;i<x+w-14;i+=30){T(i,y+16,P_SAKURA);if(Math.abs(i-cx)>40)T(i,y+h-16,P_SAKURA)}for(i=y+44;i<y+h-30;i+=30){T(x+16,i,P_SAKURA);T(x+w-16,i,P_SAKURA)}T(x+110,y+h-120);T(x+w-110,y+h-120);T(x+120,y+200);T(x+w-120,y+200);L(cx-26,y+h-104);L(cx+26,y+h-104);break;
  case 'ferris':for(i=x+14;i<x+w-10;i+=26){T(i,y+12,i%52<26?P_SAKURA:P_TREE)}for(i=y+40;i<y+h-40;i+=30){T(x+12,i);T(x+w-12,i)}T(x+w-14,y+h-16);for(i=x+60;i<x+w-60;i+=50)addP({t:P_LAMP,x:i,y:y+h-14,a:-Math.PI/2});break;
  case 'tower':for(i=x+16;i<x+w-10;i+=28){T(i,y+12,P_SAKURA);T(i,y+h-12,P_TREE)}for(i=y+40;i<y+h-30;i+=28){T(x+12,i);T(x+w-12,i)}break;
  case 'sensoji':for(i=y+150;i<y+h-80;i+=40){}L(cx-24,y+150);L(cx+24,y+150);L(cx-24,y+190);L(cx+24,y+190);T(x+w-30,y+170,P_SAKURA);T(x+w-30,y+220,P_SAKURA);T(x+24,y+250,P_SAKURA);T(x+24,y+30);T(x+w-24,y+30);break;
  case 'jgarden':var pcx=x+w*.42,pcy=y+h*.46;L(pcx-70,pcy-10);L(pcx+64,pcy+30);L(pcx+20,pcy-48);T(x+22,y+22);T(x+w-22,y+h-24,P_SAKURA);T(x+24,y+h-80);T(x+w*.75,y+h*.72,P_SAKURA);T(x+w-30,y+80);break;
  case 'daibutsu':L(cx-30,y+170);L(cx+30,y+170);L(cx-30,y+200);L(cx+30,y+200);T(x+20,y+22,P_SAKURA);T(x+w-20,y+22,P_SAKURA);T(x+22,y+120);T(x+w-22,y+120);T(x+24,y+h-26,P_SAKURA);T(x+w-24,y+h-26,P_SAKURA);break;
  case 'skytree':T(x+14,y+14,P_SAKURA);T(x+w-14,y+14,P_SAKURA);T(x+14,y+h-14);T(x+w-14,y+h-14);break;
  case 'onsen':T(x+14,y+h-20);T(x+w-16,y+h-22,P_SAKURA);L(x+120,y+150);break;
  case 'senbon':for(i=y+64;i<y+h-14;i+=10)addP({t:P_TORII,x:cx,y:i,w:30,o:1});for(i=y+12;i<y+h-8;i+=14){T(x+10+hsh(i,1,s.sd)*30,i,P_TREE);T(x+w-10-hsh(i,2,s.sd)*30,i,P_TREE)}L(cx-22,y+58);L(cx+22,y+58);break;
  case 'bamboo':for(i=y+40;i<y+h-20;i+=52){L(cx-12,i);L(cx+12,i+26)}break;
 }}
// ---- after props: road furniture, bridges, signs, sakura
function nearDeck(x,y,m){var hit=false;DH.q(x-m-60,y-m-60,x+m+60,y+m+60,function(sp){if(hit)return;var r=sp.r;for(var i=sp.i;i<=sp.j;i+=2){if(r.h&&r.h[i]<.15)continue;if(Math.hypot(wd(r.xs[i],x),wd(r.ys[i],y))<r.hw+m){hit=true;return}}});return hit}
function genLand2(){
 LMI=LMI||[];
 // traffic light geometry
 NODES.forEach(function(n){if(!n.tl)return;n.tl.forEach(function(p,k){var e=n.ed[k];if(!e)return;var r=e.r,s=e.e===0?r.za+16:r.len-r.zb-16;r.pt(s,TMP);var sg=e.e===0?1:-1;p.ax=TMP[3]*sg;p.ay=-TMP[2]*sg;p.L=Math.min(r.hw*.62,34);p.tx=TMP[2];p.ty=TMP[3]})});
 // bridges over the river
 var bi=0;ARTS.forEach(function(r){var run=-1;for(var s=0;s<=r.len;s+=4){r.pt(s,TMP);var w=inRiver(TMP[0],TMP[1],2);if(w&&run<0)run=s;if((!w||s+4>r.len)&&run>=0){var s0=Math.max(0,run-10),s1=Math.min(r.len,s+6);if(s1-s0>40){LMI.push(lmBounds({k:'br',r:r,s0:s0,s1:s1,st:(bi++)%5}))}run=-1}}});
 // footbridges and overhead guide signs on arterials
 ARTS.forEach(function(r,ri){if(r.k!=='art')return;var L=r.len-r.za-r.zb;var dd=r.d;
  if(L>460&&(dd===D_DOWN||dd===D_SHOP||dd===D_RES)&&hsh(ri,3,77)<.55){var s=r.za+L*(.4+hsh(ri,4,77)*.2);r.pt(s,TMP);if(!inRiver(TMP[0],TMP[1],30)&&!nearDeck(TMP[0],TMP[1],r.hw+r.sw+16)&&!onLocalAsph(TMP[0]+TMP[3]*(r.hw+8),TMP[1]-TMP[2]*(r.hw+8),20)&&!onLocalAsph(TMP[0]-TMP[3]*(r.hw+8),TMP[1]+TMP[2]*(r.hw+8),20))LMI.push(lmBounds({k:'fb',r:r,s0:s-6,s1:s+6,s:s,c:Math.floor(hsh(ri,5,77)*3)}))}
  [0,1].forEach(function(end){var N=end?r.b:r.a;if(!N||(N.t!=='x'&&N.t!=='scr'&&N.t!=='round')||L<300||hsh(ri,end,78)>.5)return;var s=end?r.len-r.zb-95:r.za+95,dir=end?1:-1;r.pt(s,TMP);if(inRiver(TMP[0],TMP[1],30)||nearDeck(TMP[0],TMP[1],r.hw+20))return;LMI.push(lmBounds({k:'gs',r:r,s0:s-5,s1:s+5,s:s,dir:dir,v:Math.floor(hsh(ri,end,79)*4)}))})});
 // road signs
 function SG(x,y,k,v,a){x=wrap(x);y=wrap(y);if(inRiver(x,y,6))return;var hit=false;PH.q(x-5,y-5,x+5,y+5,function(q){if(q.t!==P_TLT&&Math.abs(wd(q.x,x))<5&&Math.abs(wd(q.y,y))<5)hit=true});if(hit)return;addP({t:P_RSIGN,x:x,y:y,k:k,v:v||0,a:a||0})}
 ARTS.forEach(function(r,ri){var tg=r.k==='touge',lim=tg?40:r.nl>=3?60:50;for(var s=r.za+150;s<r.len-r.zb-100;s+=420){r.pt(s,TMP);for(var sg=-1;sg<=1;sg+=2){var u=r.hw+(tg?3:r.sw*.2),x=TMP[0]-TMP[3]*u*sg,y=TMP[1]+TMP[2]*u*sg;if(!tg&&onLocalAsph(x,y,8))continue;SG(x,y,'lim',lim)}}
  if(tg){var last=-999;for(var s2=r.za+80;s2<r.len-r.zb-80;s2+=30){r.pt(s2-40,TMP);var a0=Math.atan2(TMP[3],TMP[2]);r.pt(s2+40,TMP2);var a1=Math.atan2(TMP2[3],TMP2[2]),da=angd(a1,a0);if(Math.abs(da)>.75&&s2-last>170){last=s2;r.pt(s2-90,TMP);var sg2=da>0?-1:1,u2=r.hw+3;SG(TMP[0]-TMP[3]*u2*sg2,TMP[1]+TMP[2]*u2*sg2,'curve',da>0?1:-1)}}}});
 NODES.forEach(function(n,ni){if(n.t!=='x'&&n.t!=='scr'&&n.t!=='round')return;n.ed.forEach(function(e,k){var r=e.r;if(r.k!=='art')return;var s=e.e===0?r.za+(n.t==='round'?10:2):r.len-r.zb-(n.t==='round'?10:2);r.pt(s,TMP);var sg=hsh(ni,k,80)<.5?1:-1,u=r.hw+2.5;SG(TMP[0]-TMP[3]*u*sg,TMP[1]+TMP[2]*u*sg,'cross')})});
 var schools=SPEC.filter(function(s){return s.k==='school'});
 LOCS.forEach(function(r,ri){var ux=(r.xs[1]-r.xs[0])/r.len,uy=(r.ys[1]-r.ys[0])/r.len,an=Math.atan2(uy,ux);function at(s,sg,k,v){var u=r.sw>0?r.hw+r.sw*.25:r.hw+1;SG(r.xs[0]+ux*s-uy*u*sg,r.ys[0]+uy*s+ux*u*sg,k,v,an)}
  if(r.ma&&r.len>80)at(34,1,'stop');if(r.mb&&r.len>80)at(r.len-34,-1,'stop');
  if((r.d===D_DOWN||r.d===D_SHOP)&&r.len>200)for(var s=110;s<r.len-90;s+=170)at(s,hsh(ri,s,81)<.5?1:-1,'nopark');
  if(r.len>220&&hsh(ri,1,82)<.18){at(44,1,'oneway');at(r.len-44,-1,'oneway')}
  if((r.d===D_RES||r.d===D_TRAD)&&r.len>160&&hsh(ri,2,83)<.22)at(r.len*.5,1,'lim',30);
  if(r.d===D_RES&&schools.some(function(sc){return Math.hypot(wd(sc.x+sc.w/2,r.xs[0]),wd(sc.y+sc.h/2,r.ys[0]))<520})&&r.len>120)at(r.len*.35,-1,'school')});
 // cherry trees along the river banks
 for(var x=0;x<WS;x+=20){for(var sd=-1;sd<=1;sd+=2){var y=rivY(x)+sd*(rivHW(x)+13+hsh(x,sd,84)*5),cxi=Math.floor(x/OC),cyi=Math.floor(y/OC),ok=true;for(var dy=-1;dy<=1&&ok;dy++)for(var dx=-1;dx<=1;dx++){var o=OCC[oIdx(cxi+dx,cyi+dy)];if(o===1||o===4||o===7||o===8){ok=false;break}}if(!ok||inBldR(x-4,y-4,x+4,y+4))continue;var near=false;PH.q(x-6,y-6,x+6,y+6,function(q){if(Math.abs(wd(q.x,x))<7&&Math.abs(wd(q.y,y))<7)near=true});if(!near)addP({t:hsh(x,sd,85)<.82?P_SAKURA:P_TREE,x:wrap(x),y:wrap(y)})}}
}
function lmBounds(it){var r=it.r,m=r.hw+r.sw+46,x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(var s=it.s0;s<=it.s1;s+=8){r.pt(Math.min(s,r.len),TMP);x0=Math.min(x0,TMP[0]);y0=Math.min(y0,TMP[1]);x1=Math.max(x1,TMP[0]);y1=Math.max(y1,TMP[1])}r.pt(it.s1,TMP);x0=Math.min(x0,TMP[0]);y0=Math.min(y0,TMP[1]);x1=Math.max(x1,TMP[0]);y1=Math.max(y1,TMP[1]);it.bx0=x0-m;it.by0=y0-m-30;it.bx1=x1+m;it.by1=y1+m;return it}

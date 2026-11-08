// ===== LANDMARKS, BRIDGES, SIGNS, TRAFFIC LIGHTS (drawing) =====
var LTILE={},LMH=null,SIGNI={},LANDK={pagoda:1,castle:1,ferris:1,sensoji:1,jgarden:1,daibutsu:1,skytree:1,onsen:1,yokocho:1,sumo:1,tstation:1,cyl:1,senbon:1,bamboo:1,tower:1};
function tile(name,sz,fn){if(LTILE[name])return LTILE[name];var c=mkCanvas(sz,sz),g=c.getContext('2d'),id=g.createImageData(sz,sz),d=id.data;for(var y=0;y<sz;y++)for(var x=0;x<sz;x++){var col=fn(x,y),o=(y*sz+x)*4;d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255}g.putImageData(id,0,0);LTILE[name]=c;return c}
function pat(g,name){var t=LTILE[name]||landTiles()[name];return g.createPattern(t,'repeat')}
function landTiles(){
 function nz(x,y,s){return hsh(x,y,s)}
 tile('gravel',32,function(x,y){var n=nz(x,y,1);return n<.12?[116,114,132]:n<.24?[156,154,168]:[136,134,150]});
 tile('lawn',32,function(x,y){var n=nz(x,y,2);return n<.15?[64,104,70]:n<.25?[96,146,92]:[78,124,80]});
 tile('moss',32,function(x,y){var n=nz(x,y,3);return n<.2?[46,80,52]:n<.3?[78,118,72]:[58,96,62]});
 tile('stone',32,function(x,y){var b=(x%16===0)||(y%8===0)||((y>>3)%2===0&&(x+8)%16===0);var n=nz(x,y,4)*8-4,sl=nz((x+((y>>3)%2?0:8))>>4,y>>3,14)*12-6;return b?[98+n,96+n,110+n]:[138+n+sl,134+n+sl,146+n+sl]});
 tile('plaza',32,function(x,y){var row=y>>3,ox=(row%2)?8:0,b=((x+ox)%16===0)||(y%8===0);var n=nz(x,y,5)*6-3,sl=nz(((x+ox)>>4)+row*7,row,15),v=sl<.15?-8:sl>.88?9:(sl*8-4);if(b)return[90+n,88+n,108+n];var e=(y%8===1)?5:0;return[114+n+v+e,112+n+v+e,134+n+v+e]});
 tile('dirt',32,function(x,y){var n=nz(x,y,6);return n<.15?[110,90,62]:n<.3?[150,126,90]:[132,110,78]});
 tile('forest',32,function(x,y){var n=nz(x,y,7);return n<.2?[26,52,34]:n<.3?[44,76,46]:[34,62,40]});
 tile('alley',32,function(x,y){var n=nz(x,y,8);return n<.1?[44,40,54]:n<.2?[70,66,84]:[56,52,68]});
 tile('wood',32,function(x,y){var n=nz(x>>3,y,9)*12-6;return y%4===0?[96,64,42]:[138+n,96+n,62+n]});
 tile('bamboo',32,function(x,y){var n=nz(x,y,10);return n<.12?[138,200,106]:n<.2?[106,168,74]:n<.5?[42,84,46]:[30,62,36]});
 tile('roofg',32,function(x,y){return y%3===0?[46,50,60]:[66,72,84]});
 return LTILE}
function F(g,x,y,w,h,c){g.fillStyle=c;g.fillRect(x,y,w,h)}
function FP(g,name,x,y,w,h){g.fillStyle=pat(g,name);g.fillRect(x,y,w,h)}
function ellRows(g,cx,cy,rx,ry,c,edge){for(var dy=-ry;dy<=ry;dy++){var hw=Math.round(rx*Math.sqrt(Math.max(0,1-(dy*dy)/(ry*ry))));if(hw<=0)continue;F(g,Math.round(cx-hw),Math.round(cy+dy),hw*2,1,c);if(edge){F(g,Math.round(cx-hw)-1,Math.round(cy+dy),2,1,edge);F(g,Math.round(cx+hw)-1,Math.round(cy+dy),2,1,edge)}}}
function incense(g,x,y,AN){F(g,x-6,y-6,12,12,'#3a2e24');F(g,x-5,y-5,10,10,'#6a5442');F(g,x-3,y-3,6,6,'#2a201a');F(g,x-1,y-1,2,2,'#ff9a40');if(AN)AN.push({t:'smoke',x:x,y:y-2})}
// ---------- spec grounds ----------
function landGround(g,s,x,y,AN){var w=s.w,h=s.h,cx=x+w/2,i,j;
 switch(s.k){
  case 'pagoda':FP(g,'gravel',x,y,w,h);FP(g,'stone',cx-11,y+90,22,h-90);incense(g,cx,y+112,AN);for(i=0;i<5;i++)ellRows(g,x+30+hsh(i,s.sd,1)*60,y+h-50+hsh(i,s.sd,2)*30,6,4,'#5a8a5a');break;
  case 'castle':FP(g,'lawn',x,y,w,h);FP(g,'gravel',cx-18,y+h-38,36,38);var i0=66+12;FP(g,'gravel',x+i0,y+i0,w-2*i0,h-2*i0);FP(g,'stone',cx-14,y+h/2+46,28,h/2-46-i0);
   var by=y+h-66;F(g,cx-22,by,44,30,'#6a4028');for(j=by+1;j<by+30;j+=3)F(g,cx-21,j,42,2,'#9a6a44');F(g,cx-22,by,3,30,'#b83030');F(g,cx+19,by,3,30,'#b83030');for(j=by+2;j<by+30;j+=7){F(g,cx-23,j,5,2,'#e8c040');F(g,cx+18,j,5,2,'#e8c040')}break;
  case 'ferris':FP(g,'plaza',x,y,w,h);for(i=0;i<4;i++){var fx=x+40+i*64,fy=y+h-24;ellRows(g,fx,fy,18,6,'#3f7a4a');for(j=0;j<14;j++)F(g,fx-14+hsh(i,j,s.sd)*28|0,fy-4+hsh(j,i,s.sd)*8|0,1,1,['#ff8fb8','#ffd23a','#fff','#ff5a5a'][j%4])}F(g,cx-30,y+h-36,60,3,'rgba(18,10,52,.3)');break;
  case 'sensoji':FP(g,'stone',x,y,w,h);FP(g,'plaza',cx-22,y+130,44,h-160);for(j=y+140;j<y+h-40;j+=24){F(g,cx-21,j,42,1,'#8a867c')}incense(g,cx,y+150,AN);F(g,cx-6,y+128,12,4,'#c8b898');break;
  case 'jgarden':FP(g,'moss',x,y,w,h);var pcx=x+w*.42,pcy=y+h*.46;ellRows(g,pcx,pcy,72,42,'#3a6a5a');ellRows(g,pcx,pcy,68,38,'#2e5a8a','#6a6a66');ellRows(g,pcx+52,pcy-14,30,22,'#2e5a8a');ellRows(g,pcx-30,pcy+8,30,18,'#3468a0');
   for(i=0;i<10;i++){var lx=pcx-50+hsh(i,s.sd,3)*90,ly=pcy-24+hsh(i,s.sd,4)*40;ellRows(g,lx,ly,3,2,'#4a9a4a');if(i%3===0)F(g,lx|0,ly|0,1,1,'#ff9ac0')}
   var bx=pcx+18;F(g,bx-6,pcy-44,12,88,'#7a3a24');for(j=pcy-43;j<pcy+43;j+=3)F(g,bx-5,j,10,2,j>pcy-14&&j<pcy+14?'#c87a4a':'#a85a3a');F(g,bx-7,pcy-44,2,88,'#d03028');F(g,bx+5,pcy-44,2,88,'#d03028');
   var zx=x+18,zy=y+h-88;F(g,zx,zy,108,60,'#dcd6c8');for(j=zy+2;j<zy+60;j+=3)F(g,zx+1,j,106,1,'#c4beb0');[[zx+30,zy+24,7],[zx+74,zy+34,5],[zx+52,zy+14,4]].forEach(function(r){for(var q=r[2]+3;q<r[2]+9;q+=3)ellRows(g,r[0],r[1],q,q*.7,'#dcd6c8','#c4beb0');ellRows(g,r[0],r[1],r[2],r[2]*.7,'#5a5c60');F(g,r[0]-2,r[1]-2,3,2,'#6a9a5a')});
   for(i=0;i<7;i++)ellRows(g,cx+20+i*12,y+h-16-i*9,4,3,'#a8a6a0');
   for(i=0;i<6;i++)AN&&AN.push({t:'koi',x:pcx-8+hsh(i,s.sd,5)*20,y:pcy-4+hsh(i,s.sd,6)*8,rx:24+hsh(i,s.sd,7)*30,ry:12+hsh(i,s.sd,8)*14,ph:i*1.3,sp:.35+hsh(i,s.sd,9)*.4,c:i%3});break;
  case 'daibutsu':FP(g,'gravel',x,y,w,h);FP(g,'stone',cx-10,y+140,20,h-140);incense(g,cx,y+156,AN);break;
  case 'skytree':FP(g,'plaza',x,y,w,h);for(i=0;i<16;i++){var a=i/16*TAU;F(g,Math.round(cx+Math.cos(a)*86),Math.round(y+h/2+Math.sin(a)*86),3,3,'#3f7a4a')}break;
  case 'onsen':FP(g,'stone',x,y,w,h);FP(g,'wood',x+14,y+72,w-28,22);[[x+72,y+128,28,16],[x+170,y+125,24,14]].forEach(function(p2){ellRows(g,p2[0],p2[1],p2[2]+4,p2[3]+3,'#5a5a58');ellRows(g,p2[0],p2[1],p2[2],p2[3],'#6ab8c4');ellRows(g,p2[0]-3,p2[1]-2,p2[2]*.6,p2[3]*.5,'#8ad8e0');if(AN)for(var k=0;k<3;k++)AN.push({t:'steam',x:p2[0]-p2[2]/2+k*p2[2]/2,y:p2[1],ph:k*1.7})});break;
  case 'yokocho':FP(g,'alley',x+46,y,w-92,h);for(i=0;i<6;i++)ellRows(g,cx-4+hsh(i,s.sd,1)*8,y+30+i*52,4,2,'#4a5a8a');for(i=0;i<5;i++){F(g,cx+(i%2?5:-9),y+50+i*60,4,4,'#c8a040');F(g,cx+(i%2?5:-9),y+50+i*60,4,1,'#e8d070')}break;
  case 'sumo':FP(g,'stone',x,y,w,h);for(i=x+20;i<x+w-20;i+=11){var fc=['#d83a3a','#3a6ad0','#f0d040','#f4f4f8','#3aa060','#8a4ad0'][((i-x)/11|0)%6];[y+h-70,y+h-30].forEach(function(fy){F(g,i+2,fy+2,2,3,'rgba(18,10,52,.35)');F(g,i,fy-12,1,14,'#2a2a36');F(g,i+1,fy-12,4,11,fc);F(g,i+2,fy-10,2,1,'#1a1a28');F(g,i+2,fy-7,2,1,'#1a1a28')})}break;
  case 'tstation':FP(g,'plaza',x,y,w,h);for(i=0;i<6;i++){F(g,x+40+i*80,y+h-30,10,6,'#3a7a4a')}break;
  case 'cyl':FP(g,'plaza',x,y,w,h);break;
  case 'senbon':FP(g,'forest',x,y,w,h);FP(g,'stone',cx-14,y+52,28,h-52);[[cx-24,y+50],[cx+20,y+50]].forEach(function(q){F(g,q[0],q[1],5,6,'#f0ece4');F(g,q[0]+1,q[1]+3,3,2,'#d02a2a');F(g,q[0]+1,q[1],1,1,'#1a1a1a')});break;
  case 'bamboo':FP(g,'forest',x,y,w,h);FP(g,'dirt',cx-17,y,34,h);break;
 }}
// ---------- landmark buildings ----------
function drawLand(g,b,x,y,AN){var w=b.w,h=b.h,st=b.st,i,j,cx=x+w/2,cy=y+h/2;
 function R(a,c,d,e,col){g.fillStyle=col;g.fillRect(a,c,d,e)}
 switch(st){
 case 20:R(x,y,w,h,'#3e434e');if(w>h){R(x,y+(h>>1),w,1,'#7a808c');for(i=x;i<x+w;i+=2)R(i,y,1,h,'#4e5462');R(x,y+h-1,w,1,'#e8e2d4')}else{R(x+(w>>1),y,1,h,'#7a808c');for(j=y;j<y+h;j+=2)R(x,j,w,1,'#4e5462')}break;
 case 21:for(var t=0;t<5;t++){var ins=Math.round(t*6.5),S=w-2*ins,tx=x+ins,ty=y+ins,col=shadeHex('#3a3f4c',1+t*.06);R(tx,ty,S,S,'#1e2028');R(tx+1,ty+1,S-2,S-2,col);for(var q=2;q<S/2-6;q+=2){R(tx+q,ty+q,1,1,'#6a7080');R(tx+S-1-q,ty+q,1,1,'#6a7080');R(tx+q,ty+S-1-q,1,1,'#6a7080');R(tx+S-1-q,ty+S-1-q,1,1,'#6a7080')}
   [[tx-1,ty-1],[tx+S-1,ty-1],[tx-1,ty+S-1],[tx+S-1,ty+S-1]].forEach(function(c){R(c[0],c[1],2,2,'#9aa0b0');R(c[0]+(c[0]<cx?-1:2),c[1]+(c[1]<cy?-1:2),1,1,'#d8b040')});if(t<4){var ni=Math.round((t+1)*6.5)-1,ns=w-2*ni;R(x+ni,y+ni,ns,1,'#a83030');R(x+ni,y+ni+ns-1,ns,1,'#a83030');R(x+ni,y+ni,1,ns,'#a83030');R(x+ni+ns-1,y+ni,1,ns,'#a83030')}}
  for(i=0;i<4;i++){R(cx-1-i,cy-1-i,2+i*2,1,'#b89030');R(cx-1-i,cy+i,2+i*2,1,'#b89030')}R(cx-2,cy-2,4,4,'#d8b040');R(cx-1,cy-1,2,2,'#fff3b0');break;
 case 22:R(x,y,w,h,'#7a7a80');R(x+2,y+2,w-4,h-4,'#2e5a8a');R(x+2,y+2,w-4,3,'#1e3a5a');for(i=0;i<w*h/40;i++){var px=x+3+Math.floor(hsh(b.sd,i,1)*(w-6)),py=y+5+Math.floor(hsh(b.sd,i,2)*(h-8));R(px,py,3,1,'#4a7ab0')}for(i=x;i<x+w;i+=5){R(i,y,3,2,'#9a9aa0');R(i+2,y+h-2,3,2,'#9a9aa0')}if(AN)for(i=0;i<w*h/1800;i++)AN.push({t:'ripple',x:x+6+hsh(b.sd,i,3)*(w-12),y:y+6+hsh(b.sd,i,4)*(h-12)});break;
 case 24:R(x,y,w,h,'#8e8e94');for(j=y;j<y+h;j+=4)for(i=x+((j>>2)%2)*4;i<x+w;i+=8){R(i,j,7,3,'#a4a4aa');R(i,j+3,8,1,'#6e6e74')}if(w>h){R(x,y,w,2,'#e8e4dc');R(x,y,w,1,'#3e434e')}else{R(x,y,2,h,'#e8e4dc');R(x,y,1,h,'#3e434e')}break;
 case 23:var fh=b.sm?14:40,rh=h-fh,tiers=b.sm?2:4;for(t=0;t<tiers;t++){var ins2=t*(b.sm?9:13),tw=w-2*ins2,th=rh-2*ins2;if(th<6)break;R(x+ins2-1,y+ins2-1,tw+2,th+2,'#24403c');R(x+ins2,y+ins2,tw,th,shadeHex('#4a7a72',1+t*.05));for(j=y+ins2+2;j<y+ins2+th-1;j+=3)R(x+ins2+1,j,tw-2,1,shadeHex('#4a7a72',.86));R(x+ins2,y+ins2,tw,1,'#8ac0b6');R(x+ins2+2,y+ins2+th-3,tw-4,2,'#f0ece4');
   [[cx,y+ins2],[cx,y+ins2+th-1],[x+ins2,y+ins2+th/2],[x+ins2+tw-1,y+ins2+th/2]].forEach(function(p2){R(p2[0]-3,p2[1]-1,7,3,'#6a9a90');R(p2[0],p2[1],1,1,'#e8c040')})}
  var ti=(tiers-1)*(b.sm?9:13);R(x+ti+4,y+ti+(rh-2*ti)/2-1,w-2*ti-8,2,'#2a4a44');R(x+ti+3,y+ti+(rh-2*ti)/2-2,3,4,'#e8c040');R(x+w-ti-6,y+ti+(rh-2*ti)/2-2,3,4,'#e8c040');
  var fy=y+rh;R(x,fy,w,fh,'#f0ece4');var bands=b.sm?1:3;for(t=0;t<bands;t++){var by2=fy+Math.round(t*fh/bands);R(x+t*4,by2,w-t*8,3,'#3a6a64');R(x+t*4,by2+3,w-t*8,1,'#24403c');for(i=x+6+t*4;i<x+w-6-t*4;i+=8)R(i,by2+6,2,3,'#1a1a1a');R(x+t*4,by2,2,2,'#e8c040');R(x+w-t*4-2,by2,2,2,'#e8c040')}R(x,y+h-6,w,6,'#8e8e94');for(i=x;i<x+w;i+=6)R(i,y+h-6,1,6,'#6e6e74');R(x,y+h-1,w,1,'#4a4a50');break;
 case 25:R(x,y,w,h,'#5a6070');R(x+2,y+2,w-4,h-4,'#8a92a4');for(i=x+4;i<x+w-4;i+=6)R(i,y+3,3,h-6,'#6a7286');R(x,y+h-3,w,3,'#e8c040');break;
 case 26:R(x,y,w,h-8,'#3a3e4a');for(j=y+1;j<y+h-8;j+=2)R(x,j,w,1,'#4a4e5c');R(x,y+(h-8)/2|0,w,1,'#7a808c');R(x,y+h-8,w,8,'#c03028');R(x+2,y+h-7,3,7,'#8a1e18');R(x+w-5,y+h-7,3,7,'#8a1e18');R(x,y+h-8,w,1,'#e8c040');var gx=b.gl?x+w-10:x+2;R(gx,y+h-14,8,8,'#2a2a34');R(gx+1,y+h-13,6,6,b.gl?'#3a6ad0':'#d03a3a');break;
 case 27:var rc=['#a84a3a','#c0703a','#7a4a3a','#8a3a4a'][Math.floor(hsh(b.sd,1,1)*4)];R(x,y,w,h-6,rc);for(j=y+1;j<y+h-6;j+=2)R(x,j,w,1,shadeHex(rc,.82));var fe=b.x<cx?1:0;var awc=[['#e04a6a','#fff'],['#3aa0c0','#fff'],['#e0a030','#5a2a1a'],['#6ac04a','#fff']][Math.floor(hsh(b.sd,2,1)*4)];R(x,y+h-6,w,6,'#5a3a2a');for(i=x;i<x+w;i+=4){R(i,y+h-6,2,2,awc[0]);R(i+2,y+h-6,2,2,awc[1])}for(i=x+2;i<x+w-2;i+=3)R(i,y+h-3,2,2,['#ff6a6a','#ffd23a','#fff','#6ad0ff','#7bd957'][((i+b.sd)>>1)%5]);if(AN)AN.push({t:'lant',x:fe?x+w-2:x+1,y:y+h-5});break;
 case 28:R(x,y,w,h,'#2a5232');for(i=0;i<w*h/6;i++)R(x+Math.floor(hsh(b.sd,i,1)*w),y+Math.floor(hsh(b.sd,i,2)*h),2,2,i%3?'#3e7046':'#5a9a5a');break;
 case 29:break;
 case 30:ellRows(g,cx,cy+16,w/2,h/2-12,'#3e3e3c');for(i=0;i<16;i++){var a=i/16*TAU;ellRows(g,cx+Math.cos(a)*(w/2-5),cy+16+Math.sin(a)*(h/2-17),5,4,'#5a5a56')}ellRows(g,cx,cy+18,w/2-10,h/2-22,'#4e7e6c');ellRows(g,cx,cy+22,w/2-16,h/2-34,'#5a8a78');for(i=0;i<6;i++)ellRows(g,cx,cy+22,w/2-18-i*3,1,'#3e6a5a');ellRows(g,cx,cy+28,10,6,'#7aa898');ellRows(g,cx,cy+28,5,3,'#5a8a78');
  ellRows(g,cx,y+30,20,10,'#4e7e6c');ellRows(g,cx,y+22,13,13,'#5a8a78');for(j=-10;j<=10;j+=3)for(i=-10;i<=10;i+=3)if(i*i+j*j<100)R(cx+i,y+22+j,1,1,'#3e6a5a');ellRows(g,cx,y+12,5,4,'#5a8a78');R(cx-1,y+28,2,1,'#3e6a5a');R(cx-4,y+24,2,1,'#2e5a4a');R(cx+2,y+24,2,1,'#2e5a4a');break;
 case 31:var pts=[0,1,2].map(function(k){var a=-Math.PI/2+k*TAU/3;return[cx+Math.cos(a)*38,cy+Math.sin(a)*38]});g.fillStyle='#8a98b0';g.beginPath();g.moveTo(pts[0][0],pts[0][1]);g.lineTo(pts[1][0],pts[1][1]);g.lineTo(pts[2][0],pts[2][1]);g.closePath();g.fill();for(i=0;i<3;i++){var p0=pts[i],p1=pts[(i+1)%3];for(var t2=0;t2<=1;t2+=.04){R(Math.round(p0[0]+(p1[0]-p0[0])*t2),Math.round(p0[1]+(p1[1]-p0[1])*t2),2,2,'#dfe6f2')}for(t2=0;t2<=1;t2+=.08){R(Math.round(p0[0]+(cx-p0[0])*t2),Math.round(p0[1]+(cy-p0[1])*t2),1,1,'#cfd8e8')}}
  ellRows(g,cx,cy,22,22,'#cfd8e8');ellRows(g,cx,cy,20,20,'#9aa6be');for(i=0;i<24;i++){var a2=i/24*TAU;R(Math.round(cx+Math.cos(a2)*18),Math.round(cy+Math.sin(a2)*18),1,1,'#fff')}ellRows(g,cx,cy,14,14,'#3a4060');for(i=0;i<20;i++){var a3=i/20*TAU;R(Math.round(cx+Math.cos(a3)*13),Math.round(cy+Math.sin(a3)*13),1,1,'#6ee7ff')}ellRows(g,cx,cy,8,8,'#4a5070');ellRows(g,cx,cy,5,5,'#cfd8e8');R(cx-1,cy-1,3,3,'#fff');if(AN){AN.push({t:'ring',x:cx,y:cy,r:16,c:'#6ee7ff'});AN.push({t:'ring',x:cx,y:cy,r:9,c:'#c06aff'});AN.push({t:'blink',x:cx,y:cy})}break;
 case 32:R(x,y,w,h,'#7a8a4a');if(w>h){for(i=x;i<x+w;i+=2)R(i,y,1,h,'#a8b86a')}else{for(j=y;j<y+h;j+=2)R(x,j,w,1,'#a8b86a')}break;
 case 33:var rc2=['#6a5a4a','#5a4a40','#7a4a3a','#4a4a52'][Math.floor(hsh(b.sd,1,1)*4)];R(x,y,w,h-7,rc2);for(i=x;i<x+w;i+=3)R(i,y,1,h-7,shadeHex(rc2,1.18));var west=b.x-(Math.floor(b.x/1)*0)<0;var fx2=hsh(b.sd,5,1)<.5;R(x,y+h-7,w,7,'#2a201c');var nc=['#e04a4a','#3a5aa0','#f0f0f0','#2a2a36'][Math.floor(hsh(b.sd,2,1)*4)];for(i=x+3;i<x+w-3;i+=4)R(i,y+h-6,3,4,nc);if(AN){AN.push({t:'lant',x:x+3,y:y+h-6});AN.push({t:'lant',x:x+w-4,y:y+h-6});if(fx2)AN.push({t:'smoke',x:x+w/2,y:y+4})}break;
 case 34:R(x,y,w,h-24,'#2a4a44');R(x+2,y+2,w-4,h-28,'#4a8a7a');for(j=y+4;j<y+h-26;j+=3)R(x+3,j,w-6,1,'#3e7a6a');for(t=1;t<5;t++)R(x+t*8,y+t*7,w-t*16,1,'#6aaa9a');R(x+24,cy-14,w-48,3,'#e8c040');R(x+20,cy-15,4,5,'#e8c040');R(x+w-24,cy-15,4,5,'#e8c040');R(x,y+h-24,w,24,'#e8e2d4');for(i=x+6;i<x+w-6;i+=10){R(i,y+h-20,6,14,'#2a2a36');R(i+1,y+h-19,4,4,'#d83a3a')}R(x,y+h-24,w,3,'#3a6a5a');R(cx-14,y+h-12,28,12,'#4a2a1a');break;
 case 35:R(x,y,w,h-26,'#4a4e5a');for(j=y+3;j<y+h-28;j+=3)R(x+3,j,w-6,1,'#5a5e6a');R(x,y,w,3,'#a8503a');R(x,y,3,h-26,'#a8503a');R(x+w-3,y,3,h-26,'#a8503a');[[x+40,y+40],[x+w-40,y+40],[cx,y+44]].forEach(function(d,k){var r=k===2?14:22;ellRows(g,d[0],d[1],r+2,r+2,'#3a4446');ellRows(g,d[0],d[1],r,r,'#6a7a7a');for(var q=0;q<8;q++){var a=q/8*TAU;for(var z=2;z<r;z+=2)R(Math.round(d[0]+Math.cos(a)*z),Math.round(d[1]+Math.sin(a)*z),1,1,'#8a9a9a')}R(d[0]-2,d[1]-2,4,4,'#e8c040')});
  var fy3=y+h-26;R(x,fy3,w,26,'#a8503a');for(j=fy3+3;j<fy3+24;j+=6){R(x,j,w,1,'#f0e8dc');for(i=x+4;i<x+w-4;i+=7)R(i,j+2,3,3,'#3a4a60')}R(cx-12,y+h-10,24,10,'#2a2a36');R(x,y+h-1,w,1,'#5a2a1a');break;
 case 36:ellRows(g,cx,cy,w/2,h/2,'#6a7080');ellRows(g,cx,cy,w/2-2,h/2-2,'#b8bcc8');for(i=0;i<24;i++){var a4=i/24*TAU;for(var z2=10;z2<w/2-3;z2+=2)R(Math.round(cx+Math.cos(a4)*z2),Math.round(cy+Math.sin(a4)*z2),1,1,'#9aa0b0')}ellRows(g,cx,cy,12,12,'#4a5060');R(cx-4,cy-4,8,8,'#a8b0c0');if(AN){AN.push({t:'ring',x:cx,y:cy,r:w/2-4,c:'#ff4db8'});AN.push({t:'blink',x:cx,y:cy})}break;
 case 37:g.fillStyle=pat(g,'bamboo');g.fillRect(x,y,w,h);for(i=0;i<w*h/90;i++){var bx2=x+Math.floor(hsh(b.sd,i,1)*w),by3=y+Math.floor(hsh(b.sd,i,2)*h);R(bx2,by3,2,2,'#9ad870');R(bx2+2,by3+1,3,1,'#4a8a3a')}break;
 }}
// ---------- road furniture items ----------
function lmEach(it,X0,Y0,step,fn){var r=it.r;for(var s=it.s0;s<=it.s1;s+=step){r.pt(Math.min(s,r.len),TMP);fn(s,wd(TMP[0],X0),wd(TMP[1],Y0),-TMP[3],TMP[2],TMP[2],TMP[3])}}
var BRC=[['#f2f4f8','#c8ccd8'],['#d8402e','#a02a20'],['#3a9a8a','#2a6a62'],['#b8b4aa','#8a867e'],['#f2f4f8','#c8ccd8']];
function lmGround(g,it,X0,Y0,AN){var r=it.r;if(!r)return;var E=r.hw+r.sw;
 if(it.k==='br'){var c=BRC[it.st],L=it.s1-it.s0;
  lmEach(it,X0,Y0,.5,function(s,x,y,nx,ny){for(var sg=-1;sg<=1;sg+=2){for(var q=1;q<6;q++){g.fillStyle='rgba(10,16,40,'+(.4-q*.06)+')';g.fillRect(Math.round(x+nx*(E+q)*sg+2),Math.round(y+ny*(E+q)*sg+3),1,1)}
   g.fillStyle=c[1];g.fillRect(Math.round(x+nx*(E+1)*sg),Math.round(y+ny*(E+1)*sg),1,1);g.fillStyle=c[0];g.fillRect(Math.round(x+nx*(E+2)*sg),Math.round(y+ny*(E+2)*sg),1,1);if(Math.round(s)%6===0){g.fillStyle=c[1];g.fillRect(Math.round(x+nx*(E+2)*sg)-1,Math.round(y+ny*(E+2)*sg)-1,2,2)}}
   var t=(s-it.s0)/L;
   if(Math.round(s)%56===28){for(var u=-E-6;u<=E+6;u++){g.fillStyle=Math.abs(u)>E+2?'#2a3448':'rgba(0,0,0,0)';if(Math.abs(u)>E+2){g.fillRect(Math.round(x+nx*u)-2,Math.round(y+ny*u)-2,5,5)}}for(var f=0;f<5;f++){g.fillStyle='rgba(230,240,255,.6)';g.fillRect(Math.round(x+nx*(E+8)+f*2+hsh(s,f,1)*3),Math.round(y+ny*(E+8)+hsh(f,s,2)*4-2),2,1);g.fillRect(Math.round(x-nx*(E+8)+f*2+hsh(s,f,3)*3),Math.round(y-ny*(E+8)+hsh(f,s,4)*4-2),2,1)}}
   var hh=brH(it.st,t);if(hh>2){g.fillStyle='rgba(8,14,40,.28)';for(var sg2=-1;sg2<=1;sg2+=2)g.fillRect(Math.round(x+nx*(E+2)*sg2+hh*.55),Math.round(y+ny*(E+2)*sg2+hh*.75),2,1)}
   if(it.st===4&&Math.abs(t-.5)<.4&&Math.round(s)%10===0){var d=Math.abs(t-.5)*L;for(var sg3=-1;sg3<=1;sg3+=2){g.fillStyle='rgba(8,14,40,.22)';var hx=x+nx*(E+2)*sg3,hy=y+ny*(E+2)*sg3;for(var k=0;k<20;k++){var ff=k/20;g.fillRect(Math.round(hx+ff*30*.55*(1-d/L)+ff*0),Math.round(hy+ff*30*.75),1,1)}}}
  });
  if(it.st===3)[it.s0+4,it.s1-4].forEach(function(s){r.pt(s,TMP);for(var sg=-1;sg<=1;sg+=2){var x=wd(TMP[0],X0)-TMP[3]*(E+3)*sg,y=wd(TMP[1],Y0)+TMP[2]*(E+3)*sg;F(g,Math.round(x)-2,Math.round(y)-2,5,5,'#5a4a2a');F(g,Math.round(x)-1,Math.round(y)-2,3,2,'#8a7a4a')}});
 }
 else if(it.k==='fb'||it.k==='gs'){var s=it.s;r.pt(s,TMP);var x=wd(TMP[0],X0),y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2],tx=TMP[2],ty=TMP[3],ext=it.k==='fb'?E+3:r.hw;
  g.fillStyle='rgba(18,10,52,.26)';for(var u=-ext;u<=ext;u+=.5)for(var a=-4;a<=4;a++){if(it.k==='gs'&&(u*it.dir<-2))continue;g.fillRect(Math.round(x+nx*u+tx*a+5),Math.round(y+ny*u+ty*a+7),1,1)}
  if(it.k==='fb')for(var sg=-1;sg<=1;sg+=2){var bx=x+nx*(r.hw+r.sw*.62)*sg,by=y+ny*(r.hw+r.sw*.62)*sg;for(var k=-14;k<=14;k++)for(var v=-3;v<=3;v++){g.fillStyle=(Math.abs(k)%3===0)?'#3e5a7a':'#6a8aaa';g.fillRect(Math.round(bx+tx*k+nx*v),Math.round(by+ty*k+ny*v),1,1)}}}
}
function brH(st,t){if(st===0){var a=Math.abs(t-.22),b=Math.abs(t-.78);if(t<.22)return 26*t/.22;if(t>.78)return 26*(1-t)/.22;var m=Math.abs(t-.5)/.28;return 10+16*m*m}if(st===1)return 22*Math.sin(Math.PI*clamp((t-.05)/.9,0,1));if(st===2)return 8;if(st===4)return 0;return 0}
function lmTop(u,it,X0,Y0,AN){var r=it.r,E=r?r.hw+r.sw:0;function P(x,y,c){u.fillStyle=c;u.fillRect(Math.round(x),Math.round(y),1,1)}
 if(it.k==='br'){var c=BRC[it.st],L=it.s1-it.s0;
  if(it.st===0){[.22,.78].forEach(function(tt){var s=it.s0+L*tt;r.pt(s,TMP);var x=wd(TMP[0],X0),y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2],tx=TMP[2],ty=TMP[3];for(var uu=-E-5;uu<=E+5;uu+=.5)for(var a=-1.5;a<=1.5;a+=.5)P(x+nx*uu+tx*a,y+ny*uu+ty*a-4,a<-1?'#ffffff':'#d8dce6');for(var sg=-1;sg<=1;sg+=2){var cx2=x+nx*(E+5)*sg,cy2=y+ny*(E+5)*sg-4;u.fillStyle='#9aa0b0';u.fillRect(Math.round(cx2)-3,Math.round(cy2)-3,7,7);u.fillStyle='#f4f6fa';u.fillRect(Math.round(cx2)-2,Math.round(cy2)-3,5,5);if(AN)AN.push({t:'blink',x:Math.round(cx2),y:Math.round(cy2)-2})}});
   lmEach(it,X0,Y0,.5,function(s,x,y,nx,ny){var t=(s-it.s0)/L,hh=brH(0,t)*.25;for(var sg=-1;sg<=1;sg+=2)P(x+nx*(E+3)*sg,y+ny*(E+3)*sg-hh,'#eef0f6');if(AN&&Math.round(s*2)%28===0)for(var sg2=-1;sg2<=1;sg2+=2)AN.push({t:'cl',x:Math.round(x+nx*(E+3)*sg2),y:Math.round(y+ny*(E+3)*sg2-hh)})})}
  else if(it.st===1){lmEach(it,X0,Y0,.5,function(s,x,y,nx,ny,tx,ty){var t=(s-it.s0)/L,hh=brH(1,t)*.22;for(var sg=-1;sg<=1;sg+=2){P(x+nx*(E+2)*sg,y+ny*(E+2)*sg-hh,hh>3?'#ff6a4a':c[0]);P(x+nx*(E+3)*sg,y+ny*(E+3)*sg-hh,c[1])}if(t>.15&&t<.85&&Math.round(s*2)%40===0)for(var uu=-E-2;uu<=E+2;uu+=.5)P(x+nx*uu,y+ny*uu-hh,c[0])})}
  else if(it.st===2){var pts=[];lmEach(it,X0,Y0,.5,function(s,x,y,nx,ny){for(var sg=-1;sg<=1;sg+=2){P(x+nx*(E+2)*sg,y+ny*(E+2)*sg-3,c[0]);P(x+nx*(E+3)*sg,y+ny*(E+3)*sg-3,c[1])}if(Math.round(s*2)%28===0){pts.push([x,y,nx,ny]);for(var uu=-E-2;uu<=E+2;uu+=.5)P(x+nx*uu,y+ny*uu-3,c[1])}});for(var i=1;i<pts.length;i++){var a=pts[i-1],b=pts[i];for(var k=0;k<=24;k++){var f=k/24,ux=-E-2+f*(2*E+4);P(a[0]+(b[0]-a[0])*f+a[2]*ux,a[1]+(b[1]-a[1])*f+a[3]*ux-3,c[0]);P(a[0]+(b[0]-a[0])*f-a[2]*ux,a[1]+(b[1]-a[1])*f-a[3]*ux-3,c[0])}}}
  else if(it.st===3){lmEach(it,X0,Y0,1,function(s,x,y,nx,ny){if(Math.round(s)%28===14)for(var sg=-1;sg<=1;sg+=2){var lx=x+nx*(E+2)*sg,ly=y+ny*(E+2)*sg;u.fillStyle='#1a1a22';u.fillRect(Math.round(lx),Math.round(ly)-7,1,7);u.fillRect(Math.round(lx)-2,Math.round(ly)-8,5,1);u.fillStyle='#fff4c0';u.fillRect(Math.round(lx)-2,Math.round(ly)-10,1,2);u.fillRect(Math.round(lx)+2,Math.round(ly)-10,1,2);u.fillRect(Math.round(lx),Math.round(ly)-11,1,2);if(AN)AN.push({t:'lant',x:Math.round(lx),y:Math.round(ly)-10})}})}
  else if(it.st===4){var sm=it.s0+L/2;r.pt(sm,TMP);var x=wd(TMP[0],X0),y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2],tx=TMP[2],ty=TMP[3],py=y-16;for(var k=1;k<=9;k++){var off=k*L*.045;for(var sg=-1;sg<=1;sg+=2)for(var dd=-1;dd<=1;dd+=2){var ex=x+tx*off*dd+nx*(E+2)*sg,ey=y+ty*off*dd+ny*(E+2)*sg,n=Math.ceil(Math.hypot(ex-x,ey-py));for(var q=0;q<=n;q+=1)P(x+(ex-x)*q/n,py+(ey-py)*q/n,'#e8ecf4')}}for(var uu=-E-4;uu<=E+4;uu+=.5)P(x+nx*uu,y+ny*uu-Math.max(0,16-Math.abs(uu)*16/(E+4)),'#f4f6fa');u.fillStyle='#f4f6fa';u.fillRect(Math.round(x)-2,Math.round(py)-2,5,5);if(AN)AN.push({t:'blink',x:Math.round(x),y:Math.round(py)-1})}
 }
 else if(it.k==='fb'){r.pt(it.s,TMP);var x=wd(TMP[0],X0),y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2],tx=TMP[2],ty=TMP[3],cc=[['#4a7ab0','#8ab0d8'],['#3a8a6a','#7ac0a0'],['#8a8e9e','#c8ccd8']][it.c];
  for(var uu=-E-3;uu<=E+3;uu+=.5)for(var a=-5;a<=5;a+=.5){var col=Math.abs(a)>4?cc[1]:(Math.round(uu)%4===0?shadeHex(cc[0],.85):cc[0]);P(x+nx*uu+tx*a,y+ny*uu+ty*a-6,col)}
  for(var k=0;k<10;k++){P(x+nx*(k*4-18)+tx*0,y+ny*(k*4-18)-6,'#f4f4f8')}for(var sg=-1;sg<=1;sg+=2){var bx=x+nx*(r.hw+r.sw*.62)*sg,by=y+ny*(r.hw+r.sw*.62)*sg;for(var kk=-12;kk<=12;kk++){P(bx+tx*kk+nx*4*sg,by+ty*kk+ny*4*sg-3,cc[1]);P(bx+tx*kk-nx*4*sg,by+ty*kk-ny*4*sg-3,cc[1])}}
  u.fillStyle='#f4f4f8';u.fillRect(Math.round(x+nx*(E-6))-3,Math.round(y+ny*(E-6))-9,7,3);u.fillStyle='#2a5ab8';u.fillRect(Math.round(x+nx*(E-6))-2,Math.round(y+ny*(E-6))-8,5,1)}
 else if(it.k==='gs'){r.pt(it.s,TMP);var x=wd(TMP[0],X0),y=wd(TMP[1],Y0),nx=-TMP[3],ny=TMP[2],tx=TMP[2],ty=TMP[3],d=it.dir,u0=0,u1=r.hw+r.sw*.5,pole=(r.hw+r.sw*.5)*d,sgn=d;
  var pxp=x+nx*pole,pyp=y+ny*pole;u.fillStyle='#4a4e5a';u.fillRect(Math.round(pxp),Math.round(pyp)-10,1,10);
  for(var uu=2;uu<=r.hw-2;uu+=.5)for(var a=-3;a<=3;a+=.5){var e=Math.abs(a)>2.5||uu<2.6||uu>r.hw-2.6;P(x+nx*uu*sgn+tx*a,y+ny*uu*sgn+ty*a-10,e?'#f4f6fa':'#2458b8')}
  var arr=it.v;for(var q=0;q<3;q++){var uq=r.hw*(.25+q*.25);for(var z=-1.5;z<=1.5;z+=.5)P(x+nx*uq*sgn+tx*z,y+ny*uq*sgn+ty*z-10,'#ffffff');P(x+nx*(uq+1)*sgn,y+ny*(uq+1)*sgn-10,'#ffffff');P(x+nx*(uq-1)*sgn,y+ny*(uq-1)*sgn-10,'#ffffff')}}
 else if(it.k==='gate'){var x=it.x-X0,y=it.y-Y0;x=wd(it.x,X0);y=wd(it.y,Y0);var w=it.w;u.fillStyle='#24262e';u.fillRect(Math.round(x-w/2)-2,Math.round(y)-4,w+4,22);u.fillStyle='#3a3e4a';u.fillRect(Math.round(x-w/2),Math.round(y)-3,w,19);for(var j=0;j<19;j+=2){u.fillStyle='#4a4e5c';u.fillRect(Math.round(x-w/2),Math.round(y)-3+j,w,1)}u.fillStyle='#7a808c';u.fillRect(Math.round(x-w/2),Math.round(y)+6,w,1);u.fillStyle='#c03028';u.fillRect(Math.round(x-w/2),Math.round(y)+16,w,4);u.fillStyle='#e8c040';u.fillRect(Math.round(x-w/2),Math.round(y)+16,w,1);
  var lx=Math.round(x)-7,ly=Math.round(y)+18;u.fillStyle='#1a1a1a';u.fillRect(lx+1,ly,12,3);u.fillRect(lx+1,ly+19,12,3);u.fillStyle='#d02a2a';u.fillRect(lx,ly+3,14,16);u.fillStyle='#e84a3a';u.fillRect(lx+2,ly+3,3,16);u.fillStyle='#a01a1a';u.fillRect(lx+11,ly+3,3,16);u.fillStyle='#1a1a1a';for(var q2=0;q2<3;q2++){u.fillRect(lx+5,ly+5+q2*5,4,1);u.fillRect(lx+6+(q2%2),ly+6+q2*5,2,2)}if(AN)AN.push({t:'lant',x:lx+7,y:ly+11})}
 else if(it.k==='cg'){var x=wd(it.x,X0),y=wd(it.y,Y0),w=it.w,cl=it.c||'#c83030';u.fillStyle='#1e2028';u.fillRect(Math.round(x-w/2)-3,Math.round(y)-9,w+6,6);u.fillStyle='#4a505c';u.fillRect(Math.round(x-w/2)-2,Math.round(y)-8,w+4,4);u.fillStyle=cl;u.fillRect(Math.round(x-w/2),Math.round(y)-4,w,2);u.fillRect(Math.round(x-w/2),Math.round(y)-4,3,6);u.fillRect(Math.round(x+w/2)-3,Math.round(y)-4,3,6)}
 else if(it.k==='yk'){var x0=wd(it.x,X0),y0=wd(it.y,Y0);for(var yy=y0+14;yy<y0+it.h-10;yy+=18){var sag=0;for(var xx=x0+44;xx<=x0+it.w-44;xx++){var f=(xx-x0-44)/(it.w-88);sag=Math.round(Math.sin(f*Math.PI)*3);u.fillStyle='rgba(20,16,24,.8)';u.fillRect(xx,yy-8+sag,1,1);if((xx-x0)%5===0){u.fillStyle='#e03a2a';u.fillRect(xx-1,yy-7+sag,2,3);u.fillStyle='#ffb070';u.fillRect(xx-1,yy-7+sag,1,1);if(AN&&(xx-x0)%10===0)AN.push({t:'lant',x:xx,y:yy-6+sag})}}}}
}
// ---------- road signs (icons) ----------
var DIG=['111101101101111','010110010010111','111001111100111','111001111001111','101101111001001','111100111001111','111100111101111','111001001001001','111101111101111','111101111001111'];
function buildSigns(){
 function mk(w,h,fn){var c=mkCanvas(w,h),g=c.getContext('2d');fn(function(x,y,a,b,col){g.fillStyle=col;g.fillRect(x,y,a,b)});return c}
 function circ(R,cx,cy,r,col){for(var y=-r;y<=r;y++)for(var x=-r;x<=r;x++)if(x*x+y*y<=r*r+r*.8)R(cx+x,cy+y,1,1,col)}
 function num(R,v,x,y,col){String(v).split('').forEach(function(ch,i){var d=DIG[+ch];for(var k=0;k<15;k++)if(d[k]==='1')R(x+i*4+(k%3),y+((k/3)|0),1,1,col)})}
 [30,40,50,60].forEach(function(v){SIGNI['lim'+v]=mk(11,11,function(R){circ(R,5,5,5,'#c8202a');circ(R,5,5,3,'#fafafa');R(1,5,1,1,'#c8202a');num(R,v,2,3,'#1a3aa8')})});
 SIGNI.stop=mk(11,10,function(R){for(var y=0;y<10;y++){var hw=Math.round((10-y)*.55);R(5-hw,y,hw*2+1,1,'#d8202a')}for(var y2=1;y2<8;y2++){var hw2=Math.round((8-y2)*.5)-1;if(hw2>0){R(5-hw2,y2,1,1,'#ffffff');R(5+hw2,y2,1,1,'#ffffff')}}R(3,2,5,1,'#fff');R(5,3,1,3,'#fff');R(4,4,3,1,'#fff')});
 SIGNI.cross=mk(9,9,function(R){R(0,0,9,9,'#f4f4f8');R(1,1,7,7,'#2a5ad0');for(var y=2;y<8;y++){var hw=Math.round((y-2)*.55);R(4-hw,y,hw*2+1,1,'#fafafa')}R(4,4,1,3,'#1a1a1a');R(3,5,1,1,'#1a1a1a');R(5,6,1,1,'#1a1a1a');R(4,3,1,1,'#1a1a1a')});
 SIGNI.nopark=mk(9,9,function(R){circ(R,4,4,4,'#c8202a');circ(R,4,4,3,'#2a5ad0');for(var k=-3;k<=3;k++)R(4+k,4+k,1,1,'#c8202a')});
 SIGNI.school=mk(11,11,function(R){for(var y=0;y<11;y++){var hw=5-Math.abs(5-y);R(5-hw,y,hw*2+1,1,'#f0c020')}R(3,4,2,2,'#1a1a1a');R(6,3,2,2,'#1a1a1a');R(3,6,2,3,'#1a1a1a');R(6,5,2,4,'#1a1a1a')});
 [-1,1].forEach(function(v){SIGNI['curve'+v]=mk(11,11,function(R){for(var y=0;y<11;y++){var hw=5-Math.abs(5-y);R(5-hw,y,hw*2+1,1,'#f0c020')}R(5,5,1,4,'#1a1a1a');R(5+v,4,1,1,'#1a1a1a');R(5+v*2,3,1,1,'#1a1a1a');R(5+v*2-v,2,1,1,'#1a1a1a');R(5+v*2+v,2,1,2,'#1a1a1a')})});
 [0,1,2,3].forEach(function(d){var hz=d%2===0;SIGNI['oneway'+d]=mk(hz?11:6,hz?6:11,function(R){R(0,0,hz?11:6,hz?6:11,'#f4f4f8');R(1,1,hz?9:4,hz?4:9,'#2a5ad0');if(hz){R(2,2,6,2,'#fff');var tip=d===0?8:2;R(tip,1,1,4,'#fff');R(d===0?9:1,2,1,2,'#fff')}else{R(2,2,2,6,'#fff');var tp=d===1?8:2;R(1,tp,4,1,'#fff');R(2,d===1?9:1,2,1,'#fff')}})});
}
function signIcon(p){if(p.k==='lim')return SIGNI['lim'+p.v];if(p.k==='curve')return SIGNI['curve'+p.v];if(p.k==='oneway'){var q=((Math.round(p.a/(Math.PI/2))%4)+4)%4;return SIGNI['oneway'+q]}return SIGNI[p.k]}
// ---------- traffic lights (per frame) ----------
function tlDraw(){TLGL.length=0;var X0=cam.x-VW/2-60,Y0=cam.y-VH/2-60;PH.q(X0,Y0,X0+VW+120,Y0+VH+120,function(p){if(p.t!==P_TLT||p.ax==null||p.brk)return;var x=SX(p.x),y=SY(p.y);if(x<-60||y<-60||x>VW+60||y>VH+60)return;var st=lightState(p.n,p.g),H=10,L=p.L,ex=x+p.ax*L,ey=y+p.ay*L,col=st===0?'#3df0b0':st===1?'#ffd23a':'#ff3a3a';
 cx.globalAlpha=.16;cx.fillStyle=col;cx.fillRect(Math.round(ex)-12,Math.round(ey)-8,25,17);cx.globalAlpha=.1;cx.fillRect(Math.round(ex)-18,Math.round(ey)-12,37,25);cx.globalAlpha=1;
 cx.fillStyle='rgba(12,8,40,.3)';for(var k=0;k<=L;k+=1)cx.fillRect(Math.round(x+p.ax*k)+3,Math.round(y+p.ay*k)+4,1,1);
 cx.fillStyle='#2a2e3a';cx.fillRect(x,y-H,1,H+1);cx.fillStyle='#3e4252';for(k=0;k<=L;k+=1)cx.fillRect(Math.round(x+p.ax*k),Math.round(y+p.ay*k)-H,1,1);
 var lamps=[];for(var i=0;i<3;i++)lamps.push([Math.round(ex-p.ax*(2-i)*5),Math.round(ey-p.ay*(2-i)*5)-H]);
 cx.fillStyle='#0e0e14';lamps.forEach(function(l){cx.fillRect(l[0]-3,l[1]-3,7,7)});cx.fillStyle='#2a2e3a';lamps.forEach(function(l){cx.fillRect(l[0]-3,l[1]-3,7,1)});
 var on=st===0?0:st===1?1:2,dim=['#1e4a3e','#4a4220','#4a1e1e'],lit=['#3df0b0','#ffd23a','#ff3a3a'];
 lamps.forEach(function(l,k2){cx.fillStyle=k2===on?lit[k2]:dim[k2];cx.fillRect(l[0]-2,l[1]-2,4,4);if(k2===on){TLGL.push(l[0],l[1],k2);cx.fillStyle='#ffffff';cx.fillRect(l[0]-2,l[1]-2,2,1);cx.globalAlpha=.32;cx.fillStyle=lit[k2];cx.fillRect(l[0]-5,l[1]-5,10,10);cx.globalAlpha=.16;cx.fillRect(l[0]-8,l[1]-8,16,16);cx.globalAlpha=1}});
 var pg;if(p.n.t==='scr'){var tt=(TIME+p.n.ph)%26;pg=tt>=17.6&&tt<25}else pg=st===2;var pt=(TIME+p.n.ph)%(p.n.t==='scr'?26:18),blinkEnd=pg&&((p.n.t==='scr'?25-pt:(p.g===0?18-pt:(pt<9?9-pt:27-pt)))<2.5)&&((TIME*4|0)%2);
 cx.fillStyle='#0e0e14';cx.fillRect(x-5,y-H+1,4,9);cx.fillStyle=pg?'#3a1a1a':'#ff4040';cx.fillRect(x-4,y-H+2,2,3);cx.fillStyle=pg&&!blinkEnd?'#3df0b0':'#1a3a2a';cx.fillRect(x-4,y-H+6,2,3)})}
// ---------- ferris wheel (per frame) ----------
var FWC=null;
function ferrisDraw(){for(var i=0;i<LMA.length;i++){var f=LMA[i];if(f.k!=='ferris')continue;var bx=SX(f.x),by=SY(f.y);if(bx<-110||bx>VW+110||by<-30||by>VH+200)continue;var R=f.R,hx=bx,hy=by-R-8;
 if(!FWC){FWC=mkCanvas(R*2+12,R*2+12);var g=FWC.getContext('2d');for(var a=0;a<TAU;a+=.004){var c=Math.cos(a),s=Math.sin(a);g.fillStyle='#f2f4f8';g.fillRect(Math.round(R+6+c*R),Math.round(R+6+s*R),1,1);g.fillStyle='#9ab0d0';g.fillRect(Math.round(R+6+c*(R-2)),Math.round(R+6+s*(R-2)),1,1)}}
 cx.strokeStyle='#e8ecf4';cx.lineWidth=2;cx.beginPath();cx.moveTo(bx-26,by);cx.lineTo(hx,hy);cx.lineTo(bx+26,by);cx.stroke();
 cx.fillStyle='rgba(12,8,40,.25)';cx.fillRect(bx-30,by+2,60,4);
 var rot=TIME*.1;cx.strokeStyle='rgba(200,210,230,.85)';cx.lineWidth=1;cx.beginPath();for(var k=0;k<16;k++){var a2=rot+k/16*TAU;cx.moveTo(hx,hy);cx.lineTo(hx+Math.cos(a2)*(R-2),hy+Math.sin(a2)*(R-2))}cx.stroke();
 cx.drawImage(FWC,hx-R-6,hy-R-6);
 var GC=['#ff4d6d','#ffd23a','#38e8ff','#7bd957','#b06aff','#ff8a3d'];for(k=0;k<24;k++){var a3=rot+k/24*TAU,gx=Math.round(hx+Math.cos(a3)*R),gy=Math.round(hy+Math.sin(a3)*R);cx.fillStyle='#2a2e3a';cx.fillRect(gx,gy,1,3);cx.fillStyle=GC[k%6];cx.fillRect(gx-2,gy+2,5,4);cx.fillStyle='#cfe8ff';cx.fillRect(gx-1,gy+3,3,1)}
 for(k=0;k<48;k++){var a4=k/48*TAU,on=((k+(TIME*10|0))%6)===0;if(!on)continue;cx.fillStyle=GC[(k>>1)%6];cx.fillRect(Math.round(hx+Math.cos(a4)*(R+1))-1,Math.round(hy+Math.sin(a4)*(R+1))-1,2,2)}
 cx.fillStyle='#2a2e3a';cx.fillRect(hx-4,hy-4,9,9);cx.fillStyle='#f4f6fa';cx.fillRect(hx-2,hy-2,5,5);cx.fillStyle='#ff4db8';cx.fillRect(hx,hy,1,1)}}
// ---------- petals near cherry trees ----------
var SAKV=[];
function petals(dt){if(FRAME%30===0){SAKV.length=0;var X0=cam.x-VW/2-30,Y0=cam.y-VH/2-30;PH.q(X0,Y0,X0+VW+60,Y0+VH+60,function(p){if(p.t===P_SAKURA)SAKV.push(p)})}if(!SAKV.length)return;var n=Math.min(3,SAKV.length*dt*.8);for(var k=0;k<n||Math.random()<n-k;k++){if(k>=3)break;var t=SAKV[Math.random()*SAKV.length|0];fx3({x:t.x+(Math.random()-.5)*14,y:t.y-3+(Math.random()-.5)*10,vx:10+Math.random()*10,vy:(Math.random()-.5)*8,h:10+Math.random()*6,vh:0,k:'paper',g:12,dr:1.5,dl:.18,c:Math.random()<.5?'#ffc0d8':'#ff9ac0',z:0});if(k>5)break}}

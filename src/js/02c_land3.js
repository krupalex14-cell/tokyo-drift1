// ===== LANDMARK LAYOUTS v3 (surroundings, tourists) =====
var P_DECO=23,TOUR=[];
PRR[23]=0;
function DECO(x,y,d,r){return addP({t:P_DECO,x:wrap(x),y:wrap(y),d:d,r:r||0})}
function tour(x0,y0,x1,y1,fx,fy,n){TOUR.push({x0:x0,y0:y0,x1:x1,y1:y1,fx:fx,fy:fy,n:n})}
var _genLandSpecs2=genLandSpecs;
genLandSpecs=function(){TOUR=[];_genLandSpecs2()};
var _landBuild2=landBuild;
landBuild=function(s){var x=s.x,y=s.y,w=s.w,h=s.h,cx=x+w/2,cy=y+h/2;function B(a,b,c,d,st,ht,o){var bb={x:a,y:b,w:c,h:d,st:st,ht:ht,d:s.d,sd:s.sd+((a*7+b)|0)};if(o)for(var k in o)bb[k]=o[k];addB(bb);return bb}
 switch(s.k){
 case 'daibutsu':walls(s,6,20,30);var by=y+186;B(cx-74,by-36,148,36,29,0,{ns:1});B(cx-64,by-80,128,44,29,0,{ns:1});B(cx-36,by-140,72,60,29,0,{ns:1});
  LMI.push({k:'spr',n:'buddha3',ax:78,ay:176,wx:cx,wy:by,bx0:cx-80,by0:by-180,bx1:cx+80,by1:by+6});LMI.push({k:'shadow',x:cx+6,y:by-30,L:150,W:120,bx0:cx-70,by0:by-90,bx1:cx+150,by1:by+70});return;
 case 'tower':var tb=cy-8;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(q){B(cx+q[0]*40-6,tb+q[1]*40-6,12,12,29,0,{ns:1})});B(cx-30,tb-22,60,40,1,4);LMA.push({k:'tt3',x:cx,y:tb});LMI.push({k:'shadow',x:cx,y:tb+20,L:210,W:80,bx0:cx-50,by0:tb-30,bx1:cx+200,by1:tb+140});return;
 case 'skytree':var sb=cy+6;B(cx-30,sb-30,60,56,29,0,{ns:1});LMA.push({k:'sky3',x:cx,y:sb});B(x+12,y+h-72,84,46,2,3);B(x+w-96,y+h-72,84,46,2,3);LMI.push({k:'shadow',x:cx,y:sb+10,L:250,W:70,bx0:cx-40,by0:sb-40,bx1:cx+240,by1:sb+150});return;
 case 'cyl':var cb=y+86;B(cx-34,cb-34,68,62,29,0,{ns:1});B(x+14,y+132,w-28,46,2,3);LMA.push({k:'cyl3',x:cx,y:cb,s:Math.floor(hsh(cx|0,1,1)*6)});LMI.push({k:'shadow',x:cx+20,y:cb+10,L:150,W:60,bx0:cx-40,by0:cb-40,bx1:cx+160,by1:cb+120});return;
 }
 return _landBuild2(s)};
var _landProps2=landProps;
landProps=function(s){var x=s.x,y=s.y,w=s.w,h=s.h,cx=x+w/2,cy=y+h/2,i;function T(px,py,t){addP({t:t||P_TREE,x:px,y:py})}function L(px,py){DECO(px,py,'lantern',3)}function PN(px,py){DECO(px,py,'pine',2.5)}
 function temple(o){PN(x+22,y+26);PN(x+w-22,y+26);PN(x+20,y+h-34);PN(x+w-20,y+h-34);DECO(x+48,y+h-30,'chozuya',8);DECO(x+w-48,y+h-26,'ema',4);for(i=0;i<6;i++)DECO(x+14+i*9,y+h-14,'azalea');for(i=0;i<6;i++)DECO(x+w-14-i*9,y+h-14,'azalea');DECO(x+18,y+h*.5,'rock',3);DECO(x+w-18,y+h*.55,'rock',3);DECO(cx+26,y+h-20,'info')}
 switch(s.k){
 case 'daibutsu':var by=y+186;DECO(cx,by+24,'koro',6);L(cx-26,by+44);L(cx+26,by+44);L(cx-26,by+76);L(cx+26,by+76);temple();PN(x+24,y+120);PN(x+w-24,y+120);T(x+44,y+h-74,P_SAKURA);T(x+w-44,y+h-74,P_SAKURA);DECO(x+70,y+h-52,'bench');DECO(x+w-70,y+h-52,'bench');for(i=0;i<5;i++){DECO(x+26+i*10,y+40,'azalea');DECO(x+w-26-i*10,y+40,'azalea')}
  tour(x+16,by+10,x+w-16,y+h-16,cx,by-90,16);tour(x+16,y+60,cx-74,by-10,cx,by-90,4);tour(cx+74,y+60,x+w-16,by-10,cx,by-90,4);return;
 case 'tower':var tb=cy-8;for(i=x+16;i<x+w-10;i+=26){T(i,y+12,(i/26|0)%2?P_SAKURA:P_TREE)}for(i=y+40;i<y+h-50;i+=26){T(x+12,i);T(x+w-12,i)}DECO(x+44,y+54,'kiosk',7);DECO(x+w-44,y+54,'kiosk',7);DECO(x+70,y+60,'parasol',4);DECO(x+w-70,y+60,'parasol',4);DECO(x+52,y+76,'parasol',4);DECO(x+w-52,y+76,'parasol',4);
  for(i=0;i<8;i++){var a=i/8*TAU+.2;if(Math.sin(a)>.5)continue;DECO(cx+Math.cos(a)*84,tb+Math.sin(a)*84,'bench')}for(i=0;i<6;i++){var a2=i/6*TAU;DECO(cx+Math.cos(a2)*96,tb+Math.sin(a2)*96,'lamp2',1.5)}DECO(cx+56,y+h-50,'info');
  [[x+60,0],[x+128,0]].forEach(function(q){addP({t:P_CAR,x:q[0],y:y+h-24,a:0,vt:8,c:Math.floor(hsh(q[0],1,2)*3),hx:VTY[8].hx,hy:VTY[8].hy})});for(i=0;i<3;i++)addP({t:P_CAR,x:x+186+i*30,y:y+h-24,a:0,vt:3,c:i%3,hx:VTY[3].hx,hy:VTY[3].hy});
  tour(x+16,y+20,x+w-16,y+h-46,cx,tb-110,20);return;
 case 'skytree':var sb=cy+6;for(i=x+16;i<x+w-10;i+=26){T(i,y+12,(i/26|0)%2?P_TREE:P_SAKURA)}for(i=y+40;i<y+h-80;i+=26){T(x+12,i);T(x+w-12,i)}DECO(x+56,y+56,'kiosk',7);DECO(x+w-56,y+56,'kiosk',7);for(i=0;i<4;i++){DECO(cx-40+i*26,sb+46,'bench')}for(i=0;i<4;i++){DECO(x+40+i*16,sb-4,'lamp2',1.5);DECO(x+w-40-i*16,sb-4,'lamp2',1.5)}DECO(x+80,y+60,'parasol',4);DECO(x+w-80,y+60,'parasol',4);
  tour(x+16,y+20,x+w-16,sb+60,cx,sb-140,18);tour(cx-60,sb+60,cx+60,y+h-16,cx,sb-140,6);return;
 case 'cyl':var cb=y+86;for(i=x+14;i<x+w-8;i+=24){T(i,y+12,(i/24|0)%2?P_TREE:P_SAKURA)}T(x+14,y+60);T(x+w-14,y+60);T(x+14,y+100);T(x+w-14,y+100);for(i=0;i<4;i++)DECO(x+30+i*44,y+h-12,'parasol',4);DECO(x+24,y+h-28,'bench');DECO(x+w-24,y+h-28,'bench');DECO(cx,y+h-22,'info');for(i=0;i<3;i++)DECO(x+40+i*64,y+124,'lamp2',1.5);
  tour(x+10,y+180,x+w-10,y+h-6,cx,cb-120,10);tour(x+10,y+22,cx-40,y+126,cx,cb-120,3);tour(cx+40,y+22,x+w-10,y+126,cx,cb-120,3);return;
 case 'ferris':for(i=x+14;i<x+w-10;i+=26){T(i,y+12,(i/26|0)%2?P_SAKURA:P_TREE)}for(i=y+40;i<y+h-40;i+=30){T(x+12,i);T(x+w-12,i)}DECO(x+44,y+46,'kiosk',7);DECO(x+w-44,y+46,'kiosk',7);DECO(x+70,y+52,'parasol',4);DECO(x+w-70,y+52,'parasol',4);DECO(x+60,y+72,'parasol',4);DECO(x+w-60,y+72,'parasol',4);for(i=0;i<5;i++)DECO(x+60+i*38,y+h-30,'bench');for(i=0;i<4;i++)DECO(x+36+i*66,y+h-14,'lamp2',1.5);DECO(cx-60,y+h-46,'info');
  tour(x+16,y+20,x+w-16,y+h-16,cx,y+h-110,20);return;
 case 'pagoda':for(i=y+h-44;i>y+104;i-=28){L(cx-22,i);L(cx+22,i)}DECO(cx,y+114,'koro',6);temple();T(x+34,y+186,P_SAKURA);T(x+w-30,y+60,P_SAKURA);tour(x+16,y+96,x+w-16,y+h-16,x+w-60,y+110,12);return;
 case 'sensoji':L(cx-26,y+150);L(cx+26,y+150);L(cx-26,y+184);L(cx+26,y+184);DECO(cx,y+150,'koro',6);temple();PN(x+w-36,y+120);PN(x+36,y+250);T(x+w-30,y+170,P_SAKURA);T(x+w-30,y+220,P_SAKURA);T(x+24,y+300,P_SAKURA);
  tour(cx-20,y+176,cx+20,y+h-44,cx,y+60,22);tour(x+20,y+134,x+w-20,y+176,cx,y+70,10);return;
 case 'castle':var i0=78;PN(x+i0+30,y+i0+90);PN(x+w-i0-30,y+i0+90);PN(x+i0+30,y+h-i0-40);PN(x+w-i0-30,y+h-i0-40);L(cx-28,y+h-104);L(cx+28,y+h-104);L(cx-28,y+h-136);L(cx+28,y+h-136);for(i=0;i<6;i++){DECO(x+i0+20+i*12,y+h-i0-14,'azalea');DECO(x+w-i0-20-i*12,y+h-i0-14,'azalea')}DECO(cx+40,y+h-i0-30,'info');
  for(i=x+14;i<x+w-14;i+=30){if(Math.abs(i-cx)>40){T(i,y+h-16,P_SAKURA)}T(i,y+16,P_SAKURA)}for(i=y+44;i<y+h-30;i+=30){T(x+16,i,P_SAKURA);T(x+w-16,i,P_SAKURA)}
  tour(x+i0+10,y+h/2+50,x+w-i0-10,y+h-i0-8,cx,y+h/2-30,14);tour(x+i0+10,y+i0+10,x+w-i0-10,y+i0+60,cx,y+h/2,5);return;
 case 'jgarden':var pcx=x+w*.42,pcy=y+h*.46;L(pcx-72,pcy-10);L(pcx+66,pcy+30);L(pcx+22,pcy-50);PN(x+22,y+22);PN(x+w-30,y+80);T(x+w-22,y+h-24,P_SAKURA);T(x+w*.75,y+h*.72,P_SAKURA);for(i=0;i<8;i++)DECO(x+16+i*11,y+16,'azalea');DECO(x+150,y+h-40,'rock',3);DECO(x+170,y+h-60,'azalea');DECO(x+w-60,y+h-24,'bench');
  tour(x+14,y+h-36,x+w-14,y+h-10,pcx,pcy,5);tour(x+130,y+80,x+w-14,y+h-40,pcx,pcy,4);return;
 case 'sumo':for(i=0;i<4;i++)DECO(x+30+i*70,y+h-50,'bench');DECO(x+20,y+h-20,'kiosk',7);DECO(x+w-20,y+h-20,'kiosk',7);tour(x+14,y+h-76,x+w-14,y+h-8,cx,y+60,14);return;
 case 'tstation':for(i=0;i<6;i++)addP({t:P_CAR,x:x+60+i*30,y:y+h-14,a:0,vt:3,c:i%3,hx:VTY[3].hx,hy:VTY[3].hy});for(i=0;i<5;i++)DECO(x+250+i*40,y+h-34,'lamp2',1.5);DECO(x+w-40,y+h-30,'info');tour(x+14,y+132,x+w-14,y+h-28,cx,y+60,18);return;
 case 'onsen':L(x+120,y+150);L(x+30,y+150);DECO(x+200,y+165,'rock',3);DECO(x+40,y+120,'rock',3);PN(x+20,y+h-24);tour(x+20,y+96,x+w-20,y+h-20,x+120,y+128,6);return;
 case 'temple':DECO(cx,y+170,'koro',6);L(cx-30,y+190);L(cx+30,y+190);L(cx-30,y+220);L(cx+30,y+220);temple();tour(x+20,y+160,x+w-20,y+h-16,cx,y+90,12);return;
 case 'shrine':tour(x+10,y+60,x+w-10,y+h-10,cx,y+40,4);break;
 }
 return _landProps2(s)};
// ---- grounds with real surroundings
var _landGround3=landGround;
landGround=function(g,s,x,y,AN){var w=s.w,h=s.h,cx=x+w/2,cy=y+h/2,i;
 switch(s.k){
 case 'daibutsu':raked(g,x,y,w,h);var by=y+186;stonePath(g,cx-14,by,28,h-(by-y));FP(g,'stone',cx-50,by,100,30);for(i=0;i<6;i++){ellRows(g,x+30+hsh(i,s.sd,1)*40,y+h-60-hsh(i,s.sd,2)*40,7,4,'#4a7a4a')}for(i=0;i<4;i++){ellRows(g,x+w-40-hsh(i,s.sd,3)*40,y+60+hsh(i,s.sd,4)*60,6,4,'#4a7a4a')}return;
 case 'tower':FP(g,'plaza',x,y,w,h);var tb=cy-8;radialPlaza(g,cx,tb,104);flowerBed(g,x+44,y+h-70,18,9,1);flowerBed(g,x+w-44,y+h-70,18,9,2);flowerBed(g,x+44,cy,12,8,3);flowerBed(g,x+w-44,cy,12,8,4);busBay(g,x+16,y+h-34,w-32);return;
 case 'skytree':FP(g,'plaza',x,y,w,h);var sb=cy+6;radialPlaza(g,cx,sb,70);F(g,cx-40,y+h-80,80,56,'#5c5a72');F(g,cx-38,y+h-78,76,52,'#2e5a8a');for(i=0;i<12;i++)F(g,cx-34+hsh(i,s.sd,1)*68|0,y+h-74+hsh(i,s.sd,2)*44|0,3,1,'#4a7ab0');if(AN)for(i=0;i<5;i++)AN.push({t:'jet',x:cx-30+i*15,y:y+h-52});flowerBed(g,x+40,cy+40,14,8,5);flowerBed(g,x+w-40,cy+40,14,8,6);return;
 case 'cyl':FP(g,'plaza',x,y,w,h);F(g,x+7,y+177,w-14,h-182,'#4e4a60');FP(g,'wood',x+8,y+178,w-16,h-184);flowerBed(g,x+30,y+110,12,6,7);flowerBed(g,x+w-30,y+110,12,6,8);return;
 case 'ferris':FP(g,'plaza',x,y,w,h);radialPlaza(g,cx,y+h-58,60);flowerBed(g,x+40,y+h-24,18,7,9);flowerBed(g,x+w-40,y+h-24,18,7,10);flowerBed(g,x+40,cy,10,8,11);flowerBed(g,x+w-40,cy,10,8,12);ferrisShadow(g,cx,y+h-58);F(g,cx-30,y+h-36,60,3,'rgba(18,10,52,.3)');return;
 case 'pagoda':raked(g,x,y,w,h);stonePath(g,cx-11,y+92,22,h-92);FP(g,'stone',cx-30,y+92,60,26);for(i=0;i<5;i++)ellRows(g,x+30+hsh(i,s.sd,1)*60,y+h-60+hsh(i,s.sd,2)*30,7,4,'#4a7a4a');return;
 case 'sumo':_landGround3(g,s,x,y,AN);flowerBed(g,x+40,y+h-12,16,5,13);flowerBed(g,x+w-40,y+h-12,16,5,14);return;
 case 'tstation':FP(g,'plaza',x,y,w,h);F(g,x+20,y+h-26,w-40,22,'#4a4e5e');for(i=x+24;i<x+w-24;i+=30)F(g,i,y+h-25,1,20,'#d8dce8');for(i=0;i<6;i++)flowerBed(g,x+300+i*28,y+h-40,9,4,20+i);return;
 }
 _landGround3(g,s,x,y,AN)};
// temple ground richer (old spec)
var _drawSpecGround3=drawSpecGround;
drawSpecGround=function(g,s,x,y,AN){if(s.k==='temple'){raked(g,x,y,s.w,s.h);stonePath(g,x+s.w/2-12,y+120,24,s.h-120);F(g,x,y,s.w,2,'#6a5040');F(g,x,y+s.h-2,s.w,2,'#6a5040');F(g,x,y,2,s.h,'#6a5040');F(g,x+s.w-2,y,2,s.h,'#6a5040');return}_drawSpecGround3(g,s,x,y,AN)};

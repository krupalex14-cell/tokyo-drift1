// ===== BUILDINGS (detailed) =====
var NEONC=['#ff4db8','#38e8ff','#ffd23a','#7dff6a','#ff7a3a','#b06aff'];
function drawB(g,b,x,y,an){
 var w=b.w,h=b.h,st=b.st,sd=b.sd,i,j;if(w<4||h<4)return;
 function R(a,bb,c,d,col){g.fillStyle=col;g.fillRect(a,bb,c,d)}
 function H(k){return hsh(sd,k,9)}
 function A(o){if(an)an.push(o)}
 if(st>=20){drawLand(g,b,x,y,an);return}
 if(st===14){drawStadium(g,b,x,y);return}
 if(st===15){drawTower(g,b,x,y,an);return}
 if(st===4||st===5){var gc=H(20)<.6?(st===5?'#5e6a4a':'#4f7a52'):(st===5?'#a8987e':'#8a8c80');R(x-4,y-4,w+8,h+8,shadeHex(gc,.62));R(x-3,y-3,w+6,h+6,gc);for(i=0;i<(w+h)/3;i++)R(x-3+Math.floor(H(21+i)*(w+5)),y-3+Math.floor(H(61+i)*(h+5)),1,1,shadeHex(gc,i%3?1.25:.8));if(H(40)<.5){var bx=x+w-2,by=y-4;R(bx,by,5,5,'#2f6a3a');R(bx+1,by+1,3,2,'#4f9a58');R(bx+2,by+1,1,1,'#7ac87a')}if(H(41)<.4){R(x-3,y+h-1,4,4,'#2f6a3a');R(x-2,y+h,2,2,'#4f9a58')}}
 var fh=Math.round(clamp(4+b.ht*3,6,h*.45)),rh=h-fh;
 var pal={0:['#3e6a8c','#6a9cc0','#22405a','#203650'],1:['#7d8290','#a4a9b8','#4a4e5a','#585d6c'],2:[['#8a6a88','#5a7f84','#a89a8a','#5a6aa0','#8a5a5a','#6a8a6a'][Math.floor(H(1)*6)],null,null,'#4e4a62'],3:['#b4ab9a','#d0c8b6','#7a7262','#9a8f7c'],4:[['#5a6378','#7a4a3a','#4a5a4a','#6a5a80','#8a6a5a','#3e4a64'][Math.floor(H(1)*6)],null,null,'#d4c8ae'],5:['#4a3a34','#6a5a50','#2a201c','#5a4030'],6:[['#7a8a9a','#8a6a50','#6a7a6a','#5a6a8a','#9a8a6a'][Math.floor(H(1)*5)],null,null,'#5a6070'],7:['#dfe2ea','#ffffff','#9aa2b4','#e8eaf0'],8:['#3c4250','#5a6070','#22262e','#a83030'],9:['#dfe4ee','#ffffff','#9aa2b8','#c8d0de'],10:['#c8b898','#e0d4b8','#8a7a60','#b0a080'],11:['#7a3a34','#9a5a50','#4a201c','#c8bca4'],12:['#4a8a7a','#6aaa9a','#2a5a4a','#a83030'],13:['#8a90a4','#b4bacb','#5a6074','#6a7088'],16:[['#c84a30','#3a6ab8','#3a8a50','#e08a20','#7a7f8a','#a03a6a'][Math.floor(H(1)*6)],null,null,null],18:['#7a7e90','#9a9eb0','#4e5262','#5e6274']};
 var P=pal[st]||pal[1],RF=P[0],RL=P[1]||shadeHex(RF,1.22),RD=P[2]||shadeHex(RF,.6),FC=P[3]||shadeHex(RF,.5),RK=shadeHex(RF,.86),RLL=shadeHex(RF,1.1);
 R(x,y,w,rh,RF);
 for(i=0;i<w*rh/30;i++)R(x+1+Math.floor(H(100+i)*(w-2)),y+1+Math.floor(H(400+i)*(rh-2)),1,1,(i&1)?RLL:RK);
 function ac(px,py){R(px,py,8,7,'#a8b0c0');R(px,py+6,8,1,'#5a6070');R(px+1,py+1,6,4,'#6a7286');R(px+2,py+1,4,4,'#2e3242');A({t:'fan',x:px+4,y:py+3})}
 function tank(px,py){R(px+2,py,8,11,'#7a6a5c');R(px,py+2,12,7,'#7a6a5c');R(px+2,py+1,8,2,'#b4a494');R(px+1,py+4,10,1,'#5a4a3c');R(px+1,py+7,10,1,'#5a4a3c');R(px+3,py+11,1,2,'#3a2e24');R(px+8,py+11,1,2,'#3a2e24')}
 function stair(px,py){R(px,py,13,9,RLL);R(px,py,13,1,RL);R(px,py+9,13,3,shadeHex(RF,.55));R(px+4,py+9,5,3,'#2a2e3c');R(px+5,py+10,1,1,'#ffe9a0')}
 function solar(px,py,cw,ch){for(var a=0;a<cw;a++)for(var c=0;c<ch;c++){R(px+a*6,py+c*5,5,4,'#24407a');R(px+a*6,py+c*5,5,1,'#5a7ac8');R(px+a*6+2,py+c*5+1,1,3,'#1a3060')}}
 function garden(px,py,gw,gh){R(px,py,gw,gh,'#3f7a4a');R(px,py,gw,1,'#2a5a36');for(var a=0;a<gw*gh/14;a++){var qx=px+1+Math.floor(H(700+a)*(gw-3)),qy=py+1+Math.floor(H(800+a)*(gh-3));R(qx,qy,3,3,'#2a6a3a');R(qx,qy,2,1,'#5aa860')}for(a=0;a<gw*gh/40;a++)R(px+1+Math.floor(H(900+a)*(gw-2)),py+1+Math.floor(H(950+a)*(gh-2)),1,1,['#ff8fb8','#ffd23a','#fff'][a%3])}
 function ant(px,py){R(px,py,1,9,'#3a3e4e');R(px-2,py+3,5,1,'#3a3e4e');R(px-1,py+8,3,2,'#5a5e6e');A({t:'blink',x:px,y:py})}
 function bboard(px,py,bw,bh){R(px,py+bh,bw,3,'rgba(10,8,30,.4)');R(px-1,py-1,bw+2,bh+2,'#16161e');R(px,py,bw,bh,'#20203a');R(px+2,py+bh+1,2,2,'#3a3e4e');R(px+bw-4,py+bh+1,2,2,'#3a3e4e');A({t:'bb',x:px,y:py,w:bw,h:bh,s:Math.floor(H(5)*6)})}
 var ix=x+4,iy=y+4,iw=w-8,ih=rh-8,par=!(st===4||st===5||st===6||st===8||st===12||st===16);
 if(par){R(x,y,w,2,RL);R(x,y,2,rh,RL);R(x+w-2,y,2,rh,RD);R(x,y+rh-2,w,2,RD);R(x+2,y+2,w-4,1,RK);R(x+2,y+2,1,rh-4,RK)}
 if(st===0){
  for(i=6;i<w-2;i+=6)R(x+i,y+2,1,rh-4,shadeHex(RF,.82));for(j=6;j<rh-2;j+=6)R(x+2,y+j,w-4,1,shadeHex(RF,.82));
  for(i=0;i<w*rh/220;i++)R(x+3+Math.floor(H(150+i)*(w-8)),y+3+Math.floor(H(170+i)*(rh-8)),3,2,'#8ac0e0');
  var cx=x+(w>>1),cy=y+(rh>>1);
  if(w>60&&rh>50&&H(2)<.55){R(cx-16,cy-16,32,32,'#30344a');R(cx-14,cy-14,28,28,'#454a60');for(var a=0;a<40;a++){var aa=a/40*TAU;R(Math.round(cx+Math.cos(aa)*11),Math.round(cy+Math.sin(aa)*11),1,1,'#f0c040')}R(cx-4,cy-6,2,12,'#fff');R(cx+3,cy-6,2,12,'#fff');R(cx-4,cy-1,8,2,'#fff');[[-15,-15],[13,-15],[-15,13],[13,13]].forEach(function(o){A({t:'blink',x:cx+o[0]+1,y:cy+o[1]+1,c:1})})}
  else{R(cx-12,cy-9,24,18,shadeHex(RF,.7));R(cx-12,cy-9,24,1,RL);for(i=0;i<3;i++)ac(cx-11+i*8,cy-6);ant(x+6,y+5);ant(x+w-8,y+5)}
 }
 else if(st===1){var n=Math.max(1,Math.floor(iw*ih/420));for(i=0;i<n;i++){ac(ix+Math.floor(H(10+i)*(iw-9)),iy+Math.floor(H(30+i)*(ih-8)))}if(iw>30&&ih>20){if(H(4)<.6)tank(x+w-18,y+5);stair(x+6,y+rh-18)}R(ix,iy+Math.floor(ih/2),Math.floor(iw*.6),1,'#5a6070');if(H(6)<.3&&iw>40)solar(ix+2,iy+2,Math.min(6,Math.floor(iw/12)),2)}
 else if(st===2){if(w>26&&rh>20&&H(5)<.75){var bw=Math.min(w-10,40),bh=Math.min(12,rh-12);bboard(x+5,y+5,bw,bh)}else garden(ix,iy,Math.min(iw,30),Math.min(ih,14));for(i=0;i<Math.floor(iw*ih/500);i++)ac(ix+Math.floor(H(10+i)*(iw-9)),iy+ih-8-Math.floor(H(30+i)*Math.max(1,ih-26)))}
 else if(st===3){for(j=iy+2;j<iy+ih-6;j+=10)for(i=ix+2;i<ix+iw-8;i+=10){if(H(i*3+j)<.75){R(i,j,6,5,'#a4acbc');R(i+1,j+1,4,3,'#6a7286')}}if(iw>30)stair(ix+iw-14,iy+2);if(H(6)<.5&&iw>36)solar(ix+2,iy+2,Math.min(5,Math.floor(iw/14)),2)}
 else if(st===4){var half=rh>>1;R(x,y,w,half,RL);for(j=y+1;j<y+rh;j+=2)R(x+1,j,w-2,1,shadeHex(RF,j<y+half?1.08:.84));for(i=x+3;i<x+w-2;i+=6){R(i,y+1,1,half-1,shadeHex(RF,1.18));R(i+3,y+half+1,1,rh-half-2,shadeHex(RF,.75))}R(x,y+half,w,1,RD);R(x,y+half-1,w,1,shadeHex(RF,1.3));R(x,y,1,rh,RL);R(x+w-1,y,1,rh,RD);if(H(7)<.3&&w>24)solar(x+4,y+half+3,Math.min(3,Math.floor(w/14)),1)}
 else if(st===5){for(j=y+1;j<y+rh;j+=2)R(x,j,w,1,shadeHex(RF,1.28));for(i=x+2;i<x+w;i+=4)R(i,y,1,rh,shadeHex(RF,.8));R(x,y+(rh>>1)-1,w,2,'#8a7a60');R(x,y+(rh>>1)-1,2,2,'#c8a040');R(x+w-2,y+(rh>>1)-1,2,2,'#c8a040');R(x,y,w,1,RL);R(x,y+rh-1,w,1,RD)}
 else if(st===6){for(i=1;i<w-1;i+=2)R(x+i,y+1,1,rh-2,shadeHex(RF,.8));for(j=y+10;j<y+rh-8;j+=26)R(x+6,j,w-12,4,'#9fd0e4');R(x+2,y+(rh>>1),w-4,1,RD);for(i=x+14;i<x+w-14;i+=34){R(i,y+(rh>>1)-4,9,9,'#8a92a4');R(i+1,y+(rh>>1)-3,7,7,'#4a5060');A({t:'fan',x:i+4,y:y+(rh>>1),b:1})}R(x,y,w,1,RL);R(x,y+rh-1,w,1,RD)}
 else if(st===16){for(i=2;i<w-1;i+=3)R(x+i,y+1,1,rh-2,shadeHex(RF,.78));R(x,y,w,1,shadeHex(RF,1.25));R(x,y,1,rh,shadeHex(RF,1.15))}
 else if(st===7){R(ix,iy,iw,ih,'#c8ccd8');for(i=0;i<Math.max(1,Math.floor(iw/12));i++)ac(ix+2+i*10,iy+2)}
 else if(st===8){for(var q=0;q<6;q++)R(x+q*6,y+q*5,w-q*12,rh-q*10,shadeHex(RF,1+q*.07));for(i=x+2;i<x+w-2;i+=3)R(i,y,1,3,RD);R(x+(w>>1)-30,y+(rh>>1)-1,60,3,'#d8b040');[[2,2],[w-6,2],[2,rh-6],[w-6,rh-6]].forEach(function(o){R(x+o[0],y+o[1],4,4,'#d8b040')})}
 else if(st===9){R(x+(w>>1)-3,y+(rh>>1)-10,6,20,'#e03a3a');R(x+(w>>1)-10,y+(rh>>1)-3,20,6,'#e03a3a');if(w>70){var hx=x+w-26,hy=y+6;R(hx,hy,20,20,'#9aa2b8');R(hx+5,hy+4,2,12,'#fff');R(hx+13,hy+4,2,12,'#fff');R(hx+5,hy+9,10,2,'#fff')}ac(x+8,y+8);ac(x+18,y+8)}
 else if(st===10){for(i=10;i<w-10;i+=18)ac(x+i,y+6);R(x+(w>>1)-6,y+rh-16,12,12,'#e0d4b8');R(x+(w>>1)-4,y+rh-14,8,8,'#fff');R(x+(w>>1),y+rh-13,1,4,'#222');R(x+(w>>1),y+rh-10,3,1,'#222')}
 else if(st===11){R(x+(w>>1)-1,y+4,3,rh-8,'#e8e0d0');R(x+4,y+(rh>>1)-6,w-8,3,'#e8e0d0');for(j=y+3;j<y+rh-2;j+=3)R(x+2,j,w-4,1,shadeHex(RF,.88))}
 else if(st===12){for(j=y+1;j<y+rh;j+=2)R(x,j,w,1,shadeHex(RF,1.2));R(x+2,y+(rh>>1)-1,w-4,2,'#d8b040')}
 else if(st===13){R(x+5,y+(rh>>1)-5,w-10,10,'#9fd6e0');for(i=x+7;i<x+w-7;i+=7)R(i,y+(rh>>1)-5,1,10,'#6aa0b0');R(x,y+rh-4,w,3,'#3a9a5a');for(i=0;i<Math.floor(w/40);i++)ac(x+10+i*38,y+5)}
 else if(st===18){R(x+2,y+2,w-4,rh-4,RLL)}
 // ---------- facade
 R(x,y+rh,w,fh,FC);R(x,y+h-1,w,1,shadeHex(FC,.55));R(x,y+rh,w,1,shadeHex(FC,1.25));
 var fy=y+rh+1,fb=y+h-1;
 function win(a,c,ww,wh,lit){R(a,c,ww,wh,lit?'#ffe3a0':'#5f84bc');if(!lit)R(a,c,ww,1,'#8fb0e0')}
 if(st===0){for(j=fy+1;j<fb-4;j+=3)R(x+1,j,w-2,2,'#2f5a86');for(j=fy+1;j<fb-4;j+=3)for(i=x+1;i<x+w-1;i+=4)if(hsh(i,j,sd)<.28)R(i,j,3,2,'#ffe3a0');for(i=x+4;i<x+w;i+=8)R(i,fy,1,fb-fy-4,'#1a3048');R(x+2,fb-4,w-4,4,'#7ab0d0');R(x+(w>>1)-4,fb-4,8,4,'#1a2236')}
 else if(st===1||st===13||st===10){for(j=fy+1;j<fb-5;j+=4)for(i=x+2;i<x+w-3;i+=5)win(i,j,3,2,hsh(i,j,sd)<.22);R(x+2,fb-5,w-4,5,'#8ab0c8');R(x+(w>>1)-4,fb-5,8,5,'#2a3448');if(st===13){R(x,fb-7,w,2,'#3a9a5a');R(x+(w>>1)-10,fb-5,20,5,'#3a3e4e')}}
 else if(st===9){for(j=fy+1;j<fb-5;j+=4)for(i=x+2;i<x+w-3;i+=5)win(i,j,3,2,hsh(i,j,sd)<.4);R(x+(w>>1)-8,fb-6,16,6,'#c8d0de');R(x+(w>>1)-2,fy+1,4,4,'#e03a3a')}
 else if(st===2){for(j=fy+1;j<fb-7;j+=4)for(i=x+2;i<x+w-3;i+=5)win(i,j,3,2,hsh(i,j,sd)<.35);var awc=[['#e04a6a','#fff'],['#3aa0c0','#fff'],['#e0a030','#3a2a1a'],['#6ac04a','#fff'],['#8a5ad0','#ffd23a']][Math.floor(H(7)*5)];for(i=x;i<x+w;i+=4){R(i,fb-7,2,2,awc[0]);R(i+2,fb-7,2,2,awc[1])}R(x+1,fb-5,w-2,5,'#a8e0f0');for(i=x+4;i<x+w-3;i+=10)R(i,fb-5,1,5,'#3a4a5a');R(x+(w>>1)-3,fb-5,6,5,'#2a3448');if(fh>8){var ns=x+(H(8)<.5?1:w-4),nc=NEONC[Math.floor(H(9)*6)];R(ns-1,fy,5,fb-fy-7,'#16161e');R(ns,fy+1,3,fb-fy-9,nc);for(j=fy+2;j<fb-8;j+=3)R(ns+1,j,1,1,'#16161e');A({t:'neon',x:ns,y:fy+1,w:3,h:fb-fy-9,c:nc})}}
 else if(st===3){for(j=fy+1;j<fb-5;j+=4){R(x+1,j+2,w-2,1,'#d8d0c0');for(i=x+2;i<x+w-4;i+=6){win(i,j,4,2,hsh(i,j,sd)<.3);R(i,j+2,4,1,'#c8c0b0');if(hsh(i,j,sd+3)<.25)R(i+1,j+1,2,1,['#ff6a8a','#6ac0ff','#fff','#ffd23a'][(i+j)&3])}}R(x+(w>>1)-3,fb-5,6,5,'#4a3a2a');R(x+(w>>1)-4,fb-6,8,1,'#8a8070')}
 else if(st===4){R(x+3,fb-6,4,6,'#6a4a3a');R(x+4,fb-5,1,1,'#d8b040');if(w>14){R(x+w-11,fy+2,7,4,'#7a9ac8');R(x+w-11,fy+2,7,1,'#fff');R(x+w-8,fy+2,1,4,'#3a3a4a')}R(x,fy-1,w,1,shadeHex(RF,.5))}
 else if(st===5){for(i=x+1;i<x+w-1;i+=5)R(i,y+rh,1,fh,'#2a1e18');for(i=x+2;i<x+w-4;i+=5)R(i,fy+1,4,Math.max(1,fh-4),'#e0d8c8');for(i=x+3;i<x+w-3;i+=2)R(i,fy+2,1,Math.max(1,fh-6),'#8a7a6a');if(H(9)<.45){R(x+w-5,fy,3,4,'#e03a3a');R(x+w-5,fy+1,3,1,'#ff8a6a');A({t:'lant',x:x+w-4,y:fy+2})}}
 else if(st===6){var cc=['#e03a3a','#3a6ae0','#e8a020','#3aa06a'][Math.floor(H(3)*4)];R(x,fy,w,2,cc);for(i=x+1;i<x+w;i+=2)R(i,fy+2,1,fb-fy-2,shadeHex(FC,.85));for(i=x+6;i<x+w-16;i+=22){R(i,fy+3,14,fb-fy-3,'#a4acbc');for(j=fy+4;j<fb;j+=2)R(i,j,14,1,'#7a8294')}}
 else if(st===7){var kc=[['#3aa06a','#e88a30','#fff'],['#3a6ae0','#e8e8f0','#e03a3a'],['#e03a3a','#f0c030','#fff']][Math.floor(H(3)*3)];R(x,fy-1,w,2,kc[0]);R(x,fy+1,w,1,kc[1]);R(x,fy+2,w,1,kc[2]);R(x+2,fy+3,w-4,Math.max(1,fb-fy-3),'#c8f0f8');for(i=x+5;i<x+w-3;i+=7)R(i,fy+3,1,fb-fy-3,'#6a8aa0');R(x+(w>>1)-3,fb-5,6,5,'#5a7088');A({t:'neon',x:x+2,y:fy-1,w:w-4,h:2,c:kc[0],soft:1})}
 else if(st===8||st===12){for(i=x+3;i<x+w-3;i+=8)R(i,y+rh,3,fh,'#b03030');R(x,y+rh,w,2,'#d8b040');R(x+(w>>1)-6,fb-6,12,6,'#2a1a14');A({t:'lant',x:x+5,y:fy+3});A({t:'lant',x:x+w-6,y:fy+3})}
 else if(st===11){for(i=x+4;i<x+w-4;i+=8){R(i,fy+2,4,Math.max(2,fh-6),['#e04a4a','#4a7ae0','#e0c04a'][(i>>3)%3]);R(i,fy+2,4,1,shadeHex(FC,.7))}R(x+(w>>1)-3,fb-6,6,6,'#4a2a1a')}
 else if(st===16){for(i=x+1;i<x+w;i+=3)R(i,y+rh,1,fh,shadeHex(RF,.42))}
 else{for(j=fy+1;j<fb-3;j+=4)for(i=x+2;i<x+w-3;i+=5)win(i,j,3,2,false)}
}
function drawTower(g,b,x,y,an){
 var w=b.w,cx=x+w/2,cy=y+b.h/2,i;
 for(i=0;i<9;i++){var s=w/2-i*4;g.fillStyle=i%2?'#f2f2f2':'#e8442a';g.fillRect(Math.round(cx-s),Math.round(cy-s),Math.round(s*2),Math.round(s*2))}
 g.fillStyle='#3a3e4e';g.fillRect(cx-6,cy-6,12,12);g.fillStyle='#9fd6e0';g.fillRect(cx-4,cy-4,8,8);g.fillStyle='#ffd23a';g.fillRect(cx-1,cy-1,2,2);
 g.fillStyle='#2a1e1a';[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(d){g.fillRect(Math.round(cx+d[0]*(w/2-4))-4,Math.round(cy+d[1]*(w/2-4))-4,8,8)});
 if(an){an.push({t:'blink',x:Math.round(cx),y:Math.round(cy),c:1});an.push({t:'blink',x:Math.round(cx-w/2+3),y:Math.round(cy-w/2+3)});an.push({t:'blink',x:Math.round(cx+w/2-4),y:Math.round(cy+w/2-4)})}
}

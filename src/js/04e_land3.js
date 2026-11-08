// ===== LANDMARKS v3: hand-built pixel sprites, 3D lattice towers, decor kit =====
var LDIR=(function(){var x=-.55,y=-.62,z=.56,l=Math.hypot(x,y,z);return[x/l,y/l,z/l]})();
function lit(nx,ny,nz,amb,dif){return amb+dif*Math.max(0,-(LDIR[0]*nx+LDIR[1]*ny)+LDIR[2]*nz)}
function mixc(a,b,t){return[a[0]+(b[0]-a[0])*t|0,a[1]+(b[1]-a[1])*t|0,a[2]+(b[2]-a[2])*t|0]}
function lineP(P,x0,y0,x1,y1,col,th){var n=Math.ceil(Math.max(Math.abs(x1-x0),Math.abs(y1-y0)))||1;for(var i=0;i<=n;i++){var x=x0+(x1-x0)*i/n,y=y0+(y1-y0)*i/n;if(th>1){for(var a=0;a<th;a++)P(x+a-(th>>1),y,typeof col==='function'?col(x,y,a):col)}else P(x,y,typeof col==='function'?col(x,y,0):col)}}
// ---------------- Great Buddha ----------------
function buddhaSprite3(){return sprite('buddha3',156,176,function(P,RR,w,h){
 var cx=78,BZ=[80,132,114],BR=[112,104,72];
 function bronze(x,y,b){var c=shc(BZ,b);var col=Math.floor(x/2);if(hsh(col,0,13)<.16&&((y+hsh(col,1,14)*40)%46)<26)c=mixc(c,shc(BR,b),.35);var n=hsh(x,y,11);if(n<.08)c=shc(c,.86);else if(n>.95)c=shc(c,1.1);return c}
 function ell(ex,ey,rx,ry,o){o=o||{};for(var y=Math.floor(ey-ry);y<=Math.ceil(ey+ry);y++)for(var x=Math.floor(ex-rx);x<=Math.ceil(ex+rx);x++){var nx=(x-ex)/rx,ny=(y-ey)/ry,q=nx*nx+ny*ny;if(q>1)continue;var nz=Math.sqrt(1-q),b=lit(nx,ny*.8,nz,o.amb||.42,o.dif||.78);if(q>.86)b*=.9;P(x,y,o.col?shc(o.col,b):bronze(x,y,b))}}
 // granite podium (two tiers) with steps
 var G=[196,192,182];for(var y=h-36;y<h;y++)for(var x=4;x<w-4;x++){var top=y<h-26,c=top?(((x>>3)+(y>>2))%2?shc(G,1.04):G):shc(G,.8);if(!top&&((y-(h-26))%6===0||(x+((y-(h-26))/6|0)*7)%14===0))c=shc(G,.62);if(top&&(y===h-36))c=shc(G,1.15);P(x,y,c)}
 for(var s=0;s<4;s++)RR(cx-20+s*2,h-26+s*6-6,40-s*4,2,shc(G,1.12-s*.04));
 for(var y2=h-44;y2<h-36;y2++)for(var x2=16;x2<w-16;x2++)P(x2,y2,y2===h-44?shc(G,1.1):shc(G,.86));
 // lotus throne
 ell(cx,h-46,66,11,{col:[66,100,90],amb:.5});for(var r=0;r<2;r++)for(var k=-8;k<=8;k++){var px=cx+k*7.6+(r?3.8:0),py=h-44-r*5;if(Math.abs(k)>7-r)continue;ell(px,py,5,7,{amb:.45})}
 // legs / lap, knees, soles
 ell(cx,h-64,60,20);ell(cx-47,h-60,17,13);ell(cx+47,h-60,17,13);
 for(var i=0;i<5;i++){var yy=h-74+i*4;lineP(P,cx-50+i*3,yy,cx+50-i*3,yy+2,function(x,y){return shc(bronze(x,y,1),.62)},1)}
 ell(cx-22,h-72,9,4,{amb:.5,dif:.8});ell(cx+22,h-72,9,4,{amb:.5,dif:.8});
 // sleeves + upper arms
 ell(cx-40,h-84,15,20);ell(cx+40,h-84,15,20);ell(cx-36,h-104,12,22);ell(cx+36,h-104,12,22);
 // torso
 ell(cx,h-100,34,32);
 // robe folds across chest (diagonal arcs) with highlight under each
 for(var f=0;f<6;f++){for(var t=0;t<=1;t+=.01){var fx=cx-30+t*56,fy=h-126+f*8+t*18+Math.sin(t*Math.PI)*5;if(((fx-cx)*(fx-cx))/(33*33)+((fy-(h-100))*(fy-(h-100)))/(31*31)>1)continue;P(fx,fy,shc(bronze(fx,fy,1),.6));P(fx,fy+1,shc(bronze(fx,fy,1),1.18))}}
 // hands in meditation (dhyana mudra)
 ell(cx,h-80,22,8,{amb:.55,dif:.75});ell(cx,h-83,6,2.5,{col:[30,52,46],amb:.9,dif:.1});for(var fi=-3;fi<=3;fi++)P(cx+fi*5,h-76,shc(BZ,.62));
 // neck with folds
 ell(cx,h-132,14,9);for(var nf=0;nf<3;nf++)lineP(P,cx-11+nf,h-136+nf*3,cx+11-nf,h-136+nf*3,function(x,y){return shc(bronze(x,y,1),.6)},1);
 // ears
 ell(cx-23,h-150,4.5,14,{amb:.38});ell(cx+23,h-150,4.5,14,{amb:.38});lineP(P,cx-23,h-160,cx-23,h-142,shc(BZ,.5),1);lineP(P,cx+23,h-160,cx+23,h-142,shc(BZ,.5),1);
 // head
 var hy=h-152;ell(cx,hy,21,25);
 // hair curls (snail-shell bumps) over upper head + ushnisha
 for(var cy=hy-24;cy<hy-4;cy+=3)for(var cxx=cx-20;cxx<=cx+20;cxx+=3){var off=((cy-hy)/3|0)%2?1.5:0,px2=cxx+off,dx=(px2-cx)/21,dy=(cy-hy)/25;if(dx*dx+dy*dy>.92)continue;if(cy>hy-8-Math.abs(px2-cx)*.22)continue;var b=lit(dx,dy,Math.sqrt(Math.max(0,1-dx*dx-dy*dy)),.4,.8);P(px2,cy,shc(BZ,b*1.18));P(px2+1,cy+1,shc(BZ,b*.62));P(px2+1,cy,shc(BZ,b))}
 ell(cx,hy-26,11,8);for(var uy=hy-32;uy<hy-20;uy+=3)for(var ux=cx-9;ux<=cx+9;ux+=3){if(((ux-cx)*(ux-cx))/81+((uy-(hy-26))*(uy-(hy-26)))/64>1)continue;P(ux,uy,shc(BZ,1.15));P(ux+1,uy+1,shc(BZ,.6))}
 // face: brows, half-closed eyes, nose, mouth, urna
 var FC=function(x,y,f){return shc(bronze(x,y,1),f)};
 for(var e=-1;e<=1;e+=2){for(var t2=0;t2<=1;t2+=.05){var ex=cx+e*(4+t2*9),ey=hy-1+Math.pow(t2-.45,2)*7;P(ex,ey,FC(ex,ey,.42));P(ex,ey-1,FC(ex,ey,1.2));var bx=cx+e*(3+t2*11),by=hy-6-Math.sin(t2*Math.PI)*2.5;P(bx,by,FC(bx,by,.62));P(bx,by-1,FC(bx,by,1.18))}}
 for(var ny2=hy-4;ny2<hy+7;ny2++){P(cx-1,ny2,FC(cx,ny2,1.25));P(cx+1,ny2,FC(cx,ny2,.7))}ell(cx,hy+7,3.5,2.2,{amb:.5});P(cx-2,hy+9,FC(cx,hy,.45));P(cx+2,hy+9,FC(cx,hy,.45));
 for(var mx=-4;mx<=4;mx++){P(cx+mx,hy+13+(Math.abs(mx)>2?-1:0),FC(cx,hy,.48));P(cx+mx,hy+14,FC(cx,hy,1.15))}P(cx,hy-9,FC(cx,hy,1.35));P(cx,hy-8,FC(cx,hy,.7));
 for(var jx=-14;jx<=14;jx++)P(cx+jx,hy+21+Math.round(jx*jx*.012),FC(cx,hy,.66));
 // rim light along the right silhouette
 for(var yy2=0;yy2<h-40;yy2++){for(var xx2=w-1;xx2>cx;xx2--){}}
})}
// ---------------- Tokyo Tower: 3D lattice ----------------
function ttSprite3(){return sprite('tt3',124,300,function(P,RR,w,h){var cx=62,by=h-48,H=206;
 function s(z){return 2.6+37.4*Math.pow(1-Math.min(z,H)/H,2.25)}
 function band(z){return Math.floor(z/26)%2===0?[232,84,44]:[244,240,236]}
 function C(z,f){return shc(band(z),f)}
 function pt(z,ix,iy){var q=s(z);return[cx+ix*q,by-z+iy*q]}
 var levels=[];for(var z=0;z<=H;z+=9)levels.push(z);
 function face(ax,ay,bx,by2,f,th){for(var i=0;i<levels.length-1;i++){var z0=levels[i],z1=levels[i+1],a0=pt(z0,ax,ay),b0=pt(z0,bx,by2),a1=pt(z1,ax,ay),b1=pt(z1,bx,by2);if(z0>=30||f<.7){lineP(P,a0[0],a0[1],b0[0],b0[1],C(z0,f*.95),1)}if(z0<24&&f>.9)continue;lineP(P,a0[0],a0[1],b1[0],b1[1],C(z0,f*.86),1);lineP(P,b0[0],b0[1],a1[0],a1[1],C(z0,f*.86),1)}}
 function leg(ix,iy,f,th){for(var z=0;z<H;z+=.5){var p=pt(z,ix,iy);for(var t=0;t<th;t++)P(p[0]+t-(th>>1),p[1],C(z,f*(t===0?1.12:t===th-1?.8:1)))}}
 leg(-1,-1,.55,2);leg(1,-1,.5,2);face(-1,-1,1,-1,.55);
 face(-1,-1,-1,1,1.0);face(1,-1,1,1,.74);leg(-1,1,1,3);leg(1,1,.86,3);face(-1,1,1,1,1);
 // arch girder over the base opening
 for(var t=0;t<=1;t+=.01){var x=cx-s(28)+t*2*s(28),z=28+Math.sin(t*Math.PI)*10,y=by-z+s(z);P(x,y,C(z,1));P(x,y+1,C(z,.8))}
 function deck(z0,z1,ex){var q=s(z1)+ex,top=by-z1;for(var y=top-q*.55;y<=top+q;y++)for(var x=cx-q;x<=cx+q;x++){var e=y<top-q*.55+1||x<cx-q+1||x>cx+q-1;var c=e?[214,218,228]:(((x>>2)+(y>>2))%2?[120,128,146]:[132,140,158]);if(Math.abs(x-cx)<3&&Math.abs(y-top)<3)c=[90,96,112];P(x,y,shc(c,x>cx?.85:1))}
  for(var y2=top+q+1;y2<=by-z0+q;y2++)for(var x2=cx-q;x2<=cx+q;x2++){var r=y2-(top+q);var c=r===1?[230,232,240]:(((x2+r)%3===0&&r>2)?[255,224,150]:[54,66,94]);P(x2,y2,shc(c,x2>cx?.86:1))}}
 deck(92,106,8);deck(152,158,5);
 for(var y3=by-H-34;y3<=by-H+2;y3++){var a=(by-H+2-y3)/36;RR(cx-(a<.5?1:0),y3,a<.5?2:1,1,Math.floor((by-H-y3)/5)%2?[232,84,44]:[244,240,236])}})}
// ---------------- Skytree: tapered lattice solid ----------------
function skySprite3(){return sprite('sky3',112,340,function(P,RR,w,h){var cx=56,by=h-44;
 function R(z){if(z<40)return 34-z*.42;if(z<150)return 17.2-(z-40)*.055;if(z<164)return 19.5;if(z<204)return 11-(z-164)*.04;if(z<211)return 13;if(z<238)return 8.4-(z-211)*.1;return Math.max(.6,2.2-(z-238)*.04)}
 for(var z=0;z<280;z+=.5){var r=R(z),rn=z+.5<280?R(z+.5):-1,rn2=rn*rn,glass=(z>=150&&z<164)||(z>=204&&z<211),yc=by-z;for(var y=Math.floor(yc-r);y<=Math.ceil(yc+r);y++)for(var x=Math.floor(cx-r);x<=Math.ceil(cx+r);x++){var dx=x-cx,dy=y-yc,q=dx*dx+dy*dy;if(q>r*r)continue;if(rn>0&&dx*dx+(dy+.5)*(dy+.5)<=rn2)continue;var d=Math.sqrt(q)||1,nx=dx/r,ny=dy/r,nz=Math.sqrt(Math.max(0,1-nx*nx-ny*ny))*.6+.4,b=lit(nx,ny,nz,.48,.62),col;
   if(glass){var top=z>=163.5&&z<164||z>=210.5;col=top?[236,240,248]:((Math.floor(Math.atan2(dy,dx)*r/2.5)+Math.floor(z))%3===0&&ny>0?[120,236,255]:[44,58,96]);col=shc(col,top?1:b*1.15)}
   else{var u=Math.atan2(dy,dx)*Math.max(r,6),v=z*1.25,m=((u+v)%7+7)%7<1.1||((u-v)%7+7)%7<1.1;col=shc(m?[150,166,194]:[228,234,244],b)}
   P(x,y,col)}}})}
// ---------------- cylinder tower ----------------
function cylSprite3(){return sprite('cyl3',96,284,function(P,RR,w,h){var cx=48,by=h-38,Rr=36,TOP=158;
 var thL=Math.atan2(LDIR[1],LDIR[0]);
 function CR(z){return z>TOP?(z<TOP+10?Rr+1.5:Rr-3):Rr}
 for(var z=0;z<=TOP+18;z+=.5){var r=CR(z),rn=z+.5<=TOP+18?CR(z+.5):-1,rn2=rn*rn,yc=by-z;for(var y=Math.floor(yc-r);y<=Math.ceil(yc+r);y++)for(var x=Math.floor(cx-r);x<=Math.ceil(cx+r);x++){var dx=x-cx,dy=y-yc;if(dx*dx+dy*dy>r*r)continue;if(rn>0&&dx*dx+(dy+.5)*(dy+.5)<=rn2)continue;var th=Math.atan2(dy,dx),sh=.58+.5*Math.max(0,Math.cos(th-thL)),col;
   if(z>TOP+9.5){col=(dx*dx+dy*dy>(r-2)*(r-2))?[150,154,168]:[176,180,194];if(Math.abs(dx)<10&&Math.abs(dy)<6)col=[120,126,142]}
   else if(z>TOP){col=shc([255,77,184],.75+.4*Math.max(0,Math.sin(th)))}
   else{var fl=Math.floor(z/6),zr=z-fl*6,arc=th*r;if(zr<1.2)col=shc([206,210,222],sh);else{var mull=((arc%5)+5)%5<.8;col=mull?shc([62,70,92],sh):shc(mixc([60,88,140],[130,160,206],(Math.sin(th*2)+1)/2*.6),sh);if(!mull&&hsh(fl,Math.floor(arc/5)+40,3)<.28)col=[255,226,150]}
    if(th>1.12&&th<2.03&&z>58&&z<122){col=[18,18,30]}}
   P(x,y,col)}}
 for(var a=0;a<6;a++)RR(cx-22+a*8,by-TOP-18-4+((a*5)%3),6,4,[112,118,134]);RR(cx-1,by-TOP-48,2,30,[220,224,232]);P(cx,by-TOP-49,[255,80,80])})}
// ---------------- decor sprites ----------------
function decoSpr(d){switch(d){
 case 'lantern':return sprite('d_lant',11,21,function(P,RR){var L=[198,194,184],M=[160,156,148],D=[116,112,106];RR(2,17,7,4,M);RR(2,17,7,1,L);RR(2,20,7,1,D);RR(4,11,3,6,M);RR(4,11,1,6,L);RR(6,11,1,6,D);RR(2,9,7,2,M);RR(2,9,7,1,L);RR(3,5,5,4,D);RR(4,6,3,2,[255,214,130]);RR(0,4,11,1,D);RR(1,3,9,1,M);RR(3,2,5,1,L);P(0,3,L);P(10,3,L);RR(5,0,1,2,M);P(5,0,L)});
 case 'pine':return sprite('d_pine',30,28,function(P,RR){lineP(P,15,27,13,14,[96,70,50],2);lineP(P,13,14,17,6,[96,70,50],2);var pads=[[8,13,8,4],[20,10,9,4],[14,18,7,3],[22,17,6,3],[12,6,7,3],[18,3,5,2.5]];pads.forEach(function(p,i){for(var y=-p[3];y<=p[3];y++)for(var x=-p[2];x<=p[2];x++){var q=x*x/(p[2]*p[2])+y*y/(p[3]*p[3]);if(q>1)continue;var c=y<-p[3]+1.2?[86,140,86]:y>p[3]-1.2?[22,48,32]:(hsh(x+i*9,y,5)<.3?[52,98,60]:[36,74,48]);P(p[0]+x,p[1]+y,c)}})});
 case 'bench':return sprite('d_bench',15,7,function(P,RR){RR(0,0,15,2,[132,86,48]);RR(0,2,15,2,[176,118,70]);RR(0,3,15,1,[150,98,56]);RR(1,4,1,3,[50,52,60]);RR(13,4,1,3,[50,52,60]);RR(0,4,15,1,[96,62,36])});
 case 'kiosk':return sprite('d_kiosk',24,24,function(P,RR){for(var y=2;y<9;y++)for(var x=1;x<23;x++)P(x,y,(Math.floor(x/3)%2)?[236,236,240]:[214,58,58]);RR(1,2,22,1,[255,255,255]);for(var x2=0;x2<24;x2++){P(x2,9+(x2%3===1?1:0),(Math.floor(x2/3)%2)?[230,230,236]:[190,44,44])}RR(2,11,20,12,[236,232,224]);RR(4,12,16,5,[40,44,60]);for(var i=0;i<8;i++)RR(5+i*2,15,1,2,[[255,200,80],[255,120,120],[120,220,140],[255,255,255]][i%4]);RR(2,18,20,1,[180,170,150]);RR(2,22,20,1,[120,112,100]);RR(8,0,8,2,[255,210,60])});
 case 'parasol':return sprite('d_para',17,17,function(P,RR){RR(3,13,11,2,[90,90,98]);RR(8,8,1,7,[60,60,70]);for(var y=-7;y<=7;y++)for(var x=-7;x<=7;x++){var q=x*x+y*y;if(q>49)continue;var an=Math.atan2(y,x)+Math.PI;var c=(Math.floor(an/(Math.PI/4))&1)?[244,244,240]:[60,170,120];if(q>36)c=shc(c,.75);P(8+x,7+y,c)}P(8,7,[250,250,250])});
 case 'koro':return sprite('d_koro',22,24,function(P,RR){var B=[96,82,62];RR(3,20,2,4,[48,40,32]);RR(17,20,2,4,[48,40,32]);RR(10,21,2,3,[48,40,32]);for(var y=13;y<=20;y++){var hw=Math.round(9-Math.pow((y-13)/7,2)*3);for(var x=-hw;x<=hw;x++)P(11+x,y,shc(B,lit(x/hw,(y-16)/5,.6,.5,.7)))}RR(1,12,20,2,shc(B,1.2));RR(1,14,20,1,shc(B,.6));RR(4,7,1,5,shc(B,.8));RR(17,7,1,5,shc(B,.7));for(var r=0;r<5;r++)RR(2+r*2,6-r,18-r*4,1,r===0?shc(B,.55):shc(B,1+r*.06));RR(10,0,2,2,[216,176,64])});
 case 'chozuya':return sprite('d_choz',30,26,function(P,RR){RR(4,10,2,10,[120,60,40]);RR(24,10,2,10,[120,60,40]);for(var y=15;y<22;y++)RR(6,y,18,1,y<17?[96,150,196]:[150,146,138]);RR(6,15,18,1,[180,176,168]);RR(6,21,18,1,[110,106,100]);RR(9,13,6,1,[200,170,110]);RR(16,13,6,1,[200,170,110]);for(var r=0;r<9;r++){var hw=15-Math.round(r*.9);RR(15-hw,9-r,hw*2,1,r===0?[40,44,54]:(r%2?[70,76,90]:[84,90,104]))}P(0,9,[110,116,130]);P(29,9,[110,116,130])});
 case 'ema':return sprite('d_ema',20,13,function(P,RR){RR(0,3,2,10,[110,72,44]);RR(18,3,2,10,[110,72,44]);RR(0,1,20,2,[70,50,36]);for(var r=0;r<2;r++)for(var i=0;i<5;i++){RR(2+i*3+r,4+r*4,3,3,[226,200,150]);P(3+i*3+r,5+r*4,[[200,40,40],[40,80,180],[40,140,60]][(i+r)%3])}});
 case 'lamp2':return sprite('d_lamp2',7,22,function(P,RR){RR(3,6,1,15,[44,48,60]);RR(2,20,3,2,[44,48,60]);RR(1,1,5,5,[30,32,40]);RR(2,2,3,3,[255,226,150]);RR(0,0,7,1,[30,32,40]);P(3,5,[30,32,40])});
 case 'azalea':return sprite('d_azal',13,10,function(P){for(var y=-4;y<=4;y++)for(var x=-6;x<=6;x++){var q=x*x/36+y*y/16;if(q>1)continue;var c=y<-2?[70,128,72]:[42,92,52];if(hsh(x,y,7)<.32)c=hsh(x,y,8)<.5?[240,110,170]:[255,170,210];if(y>2)c=shc(c,.75);P(6+x,5+y,c)}});
 case 'rock':return sprite('d_rock',11,8,function(P){for(var y=-3;y<=3;y++)for(var x=-5;x<=5;x++){var q=x*x/25+y*y/9;if(q>1)continue;var b=lit(x/5,y/3,Math.sqrt(1-q),.45,.7);var c=shc([140,140,146],b);if(y<-1&&hsh(x,y,3)<.5)c=[86,120,70];P(5+x,4+y,c)}});
 case 'info':return sprite('d_info',11,15,function(P,RR){RR(5,8,1,7,[60,64,76]);RR(0,0,11,8,[30,70,150]);RR(1,1,9,6,[50,100,190]);for(var r=0;r<3;r++)RR(2,2+r*2,7-r*2,1,[240,244,250])});
 case 'tree2':return null;
}}
function decoTall(d){return d==='lantern'||d==='pine'||d==='kiosk'||d==='parasol'||d==='koro'||d==='chozuya'||d==='lamp2'||d==='info'||d==='ema'}
function decoGround(g,p,x,y){var s=decoSpr(p.d);if(!s)return;x=Math.round(x);y=Math.round(y);var w=s.width,h=s.height;
 g.fillStyle='rgba(18,10,52,.28)';if(p.d==='pine')g.fillRect(x-9,y-2,22,8);else if(p.d==='kiosk'||p.d==='chozuya')g.fillRect(x-w/2+3,y-3,w,6);else if(p.d==='parasol')g.fillRect(x-5,y-1,13,6);else g.fillRect(x-(w>>1)+2,y-2,w,3);
 if(!decoTall(p.d))g.drawImage(s,x-(w>>1),y-h+1)}
function decoTop(u,p,x,y,AN){if(!decoTall(p.d))return;var s=decoSpr(p.d);if(!s)return;x=Math.round(x);y=Math.round(y);u.drawImage(s,x-(s.width>>1),y-s.height+1);
 if(AN){if(p.d==='lantern')AN.push({t:'lant',x:x,y:y-14});else if(p.d==='lamp2')AN.push({t:'lant',x:x,y:y-19});else if(p.d==='koro')AN.push({t:'smoke',x:x,y:y-14});else if(p.d==='kiosk'&&hsh(p.x|0,p.y|0,4)<.5)AN.push({t:'smoke',x:x+5,y:y-22})}}
// ---------------- ground kits ----------------
function flowerBed(g,cx0,cy0,rx,ry,sd){ellRows(g,cx0,cy0,rx+1,ry+1,'#5a586c');ellRows(g,cx0,cy0,rx,ry,'#3e6a3e');var cols=['#ff6f9e','#ffd23a','#ffffff','#ff5a5a','#c06aff','#ffa040'];for(var i=0;i<rx*ry*.9;i++){var a=hsh(sd,i,1)*TAU,rr=Math.sqrt(hsh(sd,i,2)),fx=cx0+Math.cos(a)*rr*(rx-1),fy=cy0+Math.sin(a)*rr*(ry-1);F(g,Math.round(fx),Math.round(fy),1,1,cols[Math.floor(hsh(sd,i,3)*6)]);if(i%3===0)F(g,Math.round(fx)+1,Math.round(fy),1,1,'#5a9a4a')}}
function raked(g,x,y,w,h){FP(g,'gravel',x,y,w,h);g.fillStyle='rgba(225,225,245,.13)';for(var j=y+1;j<y+h;j+=3)g.fillRect(x,j,w,1);g.fillStyle='rgba(30,26,54,.16)';for(j=y+2;j<y+h;j+=3)g.fillRect(x,j,w,1)}
function stonePath(g,x,y,w,h){F(g,x-1,y,w+2,h,'#56546a');for(var j=y;j<y+h;j+=6)for(var i=x;i<x+w;i+=10){var o=((j-y)/6|0)%2?5:0;F(g,i+o,j,Math.min(9,x+w-i-o),5,((i+j)>>3)%2?'#9a96a8':'#8e8a9e')}}
function radialPlaza(g,cx0,cy0,R){for(var r=R;r>0;r-=6){ellRows(g,cx0,cy0,r,r,(R-r)/6%2?'#7c7a98':'#6e6c8a')}for(var k=0;k<16;k++){var a=k/16*TAU;for(var q=8;q<R;q++)F(g,Math.round(cx0+Math.cos(a)*q),Math.round(cy0+Math.sin(a)*q),1,1,'#5c5a76')}}
function busBay(g,x,y,w){F(g,x,y,w,20,'#4a4e5e');for(var i=x+4;i<x+w;i+=40)F(g,i,y+2,1,16,'#d8dce8');F(g,x,y,w,1,'#8a8ea0');F(g,x,y+19,w,1,'#8a8ea0')}

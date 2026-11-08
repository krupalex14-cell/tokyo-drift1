// ===== LANDMARKS v2: 3/4 view sprites that match the city's building style =====
var LSPR={};
function C3(h){return hexRgb(h)}
function shc(c,f){return[clamp(c[0]*f,0,255)|0,clamp(c[1]*f,0,255)|0,clamp(c[2]*f,0,255)|0]}
function sprite(key,w,h,fn){if(LSPR[key])return LSPR[key];var c=mkCanvas(w,h),g=c.getContext('2d'),id=g.createImageData(w,h),d=id.data;
 function P(x,y,col,a){x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=w||y>=h)return;var o=(y*w+x)*4;if(a!=null&&a<1){var b=1-a;d[o]=d[o]*b+col[0]*a;d[o+1]=d[o+1]*b+col[1]*a;d[o+2]=d[o+2]*b+col[2]*a;d[o+3]=Math.max(d[o+3],a*255)}else{d[o]=col[0];d[o+1]=col[1];d[o+2]=col[2];d[o+3]=255}}
 function RR(x,y,ww,hh,col,a){for(var j=0;j<hh;j++)for(var i=0;i<ww;i++)P(x+i,y+j,col,a)}
 fn(P,RR,w,h);g.putImageData(id,0,0);LSPR[key]=c;return c}
// hipped roof seen from the front-top: south slope (big), side hips, short north strip; tiles + eave
function hipRoof(P,cx,yb,W,D,base,o){o=o||{};var light=shc(base,1.3),dark=shc(base,.72),tile=shc(base,.84),eave=shc(base,.48),ridgeL=W*(o.ridge||.36);
 for(var rr=0;rr<D;rr++){var y=yb-rr,t=rr/(D-1||1),ins=t*(W-ridgeL)/2,x0=cx-W/2+ins*.15,x1=cx+W/2-ins*.15,hl=cx-W/2+ins,hr=cx+W/2-ins,ridgeRow=rr>=D-3;
  for(var x=Math.floor(x0);x<=Math.ceil(x1);x++){var col;if(ridgeRow)col=rr===D-3?shc(base,1.45):light;else if(x<hl)col=light;else if(x>hr)col=dark;else col=(rr%3===1)?tile:base;
   if(!ridgeRow&&Math.abs(x-hl)<.7)col=shc(base,1.5);if(!ridgeRow&&Math.abs(x-hr)<.7)col=shc(base,.6);P(x,y,col)}}
 for(var x2=Math.floor(cx-W/2);x2<=Math.ceil(cx+W/2);x2++){P(x2,yb+1,eave);P(x2,yb+2,shc(base,.35))}
 [cx-W/2,cx+W/2].forEach(function(ex,k){P(ex,yb,shc(base,1.5));P(ex+(k?1:-1),yb-1,shc(base,1.5));P(ex+(k?1:-1),yb-2,shc(base,1.3));if(o.bell)P(ex,yb+3,[216,176,64])})}
function plasterBand(P,RR,cx,yb,W,H,o){o=o||{};var x0=Math.round(cx-W/2);RR(x0,yb-H+1,Math.round(W),H,o.wall||[232,226,214]);
 for(var x=x0;x<x0+W;x+=o.step||4){RR(x,yb-H+1,1,H,o.post||[168,48,40])}if(o.win)for(var x3=x0+3;x3<x0+W-3;x3+=o.wstep||7){RR(x3,yb-H+2,o.ww||2,Math.max(1,H-3),o.win)}RR(x0,yb,Math.round(W),1,shc(o.wall||[232,226,214],.6))}
// ---------- pagoda ----------
function pagodaSprite(){return sprite('pagoda',72,108,function(P,RR,w,h){var cx=36,stone=[198,192,178],base=[62,68,84];
 RR(3,h-12,66,4,stone);RR(3,h-8,66,8,shc(stone,.76));for(var x=3;x<69;x+=8)RR(x,h-8,1,8,shc(stone,.6));RR(3,h-12,66,1,shc(stone,1.12));
 var yb=h-13;for(var t=0;t<5;t++){var W=66-t*11,D=Math.round(W*.44);plasterBand(P,RR,cx,yb,W-14,6,{post:[176,44,40],win:t===0?[70,40,30]:null,wstep:6,ww:3});if(t>0)RR(Math.round(cx-(W-14)/2),yb-6,W-14,1,[200,60,50]);hipRoof(P,cx,yb-7,W,D,base,{bell:1,ridge:.34});yb=yb-14}
 var top=yb+14-7-Math.round((66-44)*.44)+1;for(var q=0;q<9;q++){RR(cx-1,top-2-q*2,3,1,q%2?[120,96,40]:[216,176,64]);RR(cx-1,top-3-q*2,3,1,[216,176,64])}RR(cx-1,top-23,3,3,[255,236,160])})}
// ---------- castle keep ----------
function keepSprite(W0,H0,sm){return sprite('keep'+W0+'_'+H0+(sm?'s':''),W0,H0+(sm?12:20),function(P,RR,w,h){var cx=w/2,green=[74,122,114],stone=[150,150,156],white=[240,236,228];
 var bh=sm?10:22;for(var j=0;j<bh;j++){var ww=(w-(sm?8:16))+j*((sm?8:16)/bh),x0=Math.round(cx-ww/2);for(var x=x0;x<x0+ww;x++){var blk=((x+(j>>2)*4)%8===0)||(j%4===0);P(x,h-bh+j,blk?shc(stone,.78):(j<2?shc(stone,1.15):stone))}}
 var Ws=sm?[w-6,w-20]:[w-16,w-40,w-64,w-88],yb=h-bh-1;
 Ws.forEach(function(W,t){var band=t===0?(sm?8:14):(sm?7:12),D=Math.round(W*(sm?.32:.3));
  plasterBand(P,RR,cx,yb,W-6,band,{wall:white,post:white,win:[30,30,34],wstep:sm?6:7,ww:2,step:99});RR(Math.round(cx-(W-6)/2),yb-band+1,W-6,1,[60,60,64]);
  hipRoof(P,cx,yb-band,W,D,green,{ridge:.5});
  var gw=sm?10:Math.round(W*.22),gy=yb-band-1;function gable(gx){for(var r=0;r<gw/2;r++){for(var x=-gw/2+r;x<=gw/2-r;x++){var edge=Math.abs(x)>=gw/2-r-1;P(gx+x,gy-r,edge?shc(green,.7):white)}}P(gx,gy-Math.floor(gw/2)+2,[232,192,64])}
  if(t%2===0)gable(cx);else{gable(cx-W/4);gable(cx+W/4)}
  if(t===Ws.length-1){var ry=yb-band-D+2;RR(Math.round(cx-W*.25),ry,Math.round(W*.5),1,[36,64,60]);[cx-W*.25-1,cx+W*.25-2].forEach(function(sx){RR(Math.round(sx),ry-3,3,4,[232,192,64]);P(Math.round(sx)+1,ry-4,[255,230,140])})}
  yb=yb-band-Math.round(D*.56)})})}
// ---------- daibutsu ----------
function shadeBlob(P,cx,cy,rx,ry,base,amb){for(var y=-ry;y<=ry;y++)for(var x=-rx;x<=rx;x++){var nx=x/rx,ny=y/ry,q=nx*nx+ny*ny;if(q>1)continue;var nz=Math.sqrt(1-q),l=clamp(.32+.75*(-.45*nx-.35*ny+.8*nz),0,1.35);P(cx+x,cy+y,shc(base,(amb||.55)+l*.55))}}
function buddhaSprite(){return sprite('buddha',96,112,function(P,RR,w,h){var cx=48,bz=[86,138,120],st=[110,108,104];
 shadeBlob(P,cx,h-16,46,13,st,.5);for(var i=0;i<18;i++){var a=Math.PI*(i/17),px=cx-Math.cos(a)*42,py=h-9+Math.sin(a)*3;shadeBlob(P,px,py,4,4,[120,116,110],.6)}RR(6,h-6,84,6,shc(st,.6));
 shadeBlob(P,cx,h-30,40,15,bz);shadeBlob(P,cx,h-52,27,24,bz);for(var k=0;k<5;k++){for(var x=-20+k*2;x<=20-k*2;x+=1)P(cx+x,h-44+k*5+Math.round(Math.abs(x)*.12),shc(bz,.62))}
 shadeBlob(P,cx,h-32,13,7,shc(bz,1.12),.6);shadeBlob(P,cx,h-33,6,3,shc(bz,1.25),.6);
 shadeBlob(P,cx-27,h-58,8,12,bz);shadeBlob(P,cx+27,h-58,8,12,bz);
 shadeBlob(P,cx,h-84,15,16,bz);for(var y=-15;y<=-2;y+=3)for(var x2=-13;x2<=13;x2+=3){if(x2*x2/169+y*y/225<.95)P(cx+x2+((y/3)&1),h-84+y,shc(bz,.6))}shadeBlob(P,cx,h-101,6,4,bz);
 RR(cx-7,h-80,5,1,shc(bz,.45));RR(cx+3,h-80,5,1,shc(bz,.45));P(cx,h-77,shc(bz,.5));P(cx,h-76,shc(bz,.5));RR(cx-3,h-73,7,1,shc(bz,.55));RR(cx-1,h-84,3,1,[200,180,120]);
 RR(cx-17,h-86,2,10,shc(bz,.7));RR(cx+16,h-86,2,10,shc(bz,.6))})}
// ---------- round tower (cylinder) ----------
function cylSprite(){return sprite('cyl',84,108,function(P,RR,w,h){var cx=42,rx=40,ry=14,top=16,bot=h-8,glass=[96,130,178];
 for(var y=top;y<=bot;y++)for(var x=-rx;x<=rx;x++){var u=x/rx,yy=y+Math.round(ry*Math.sqrt(1-u*u))*(y>bot-ry?0:0);var s=.62+.5*Math.max(0,-u*.7+Math.sqrt(1-u*u)*.6);var band=((y-top)%7)<4,col=band?shc(glass,s):shc([200,204,214],s);if(band&&hsh(x+cx,y,7)<.22)col=[255,227,160];if(Math.abs(u)>.985)col=shc(col,.7);P(cx+x,y+Math.round(ry*Math.sqrt(Math.max(0,1-u*u))),col)}
 for(var y2=-ry;y2<=ry;y2++)for(var x2=-rx;x2<=rx;x2++){if(x2*x2/(rx*rx)+y2*y2/(ry*ry)>1)continue;var e=x2*x2/(rx*rx)+y2*y2/(ry*ry)>.85;P(cx+x2,top+y2,e?[120,124,138]:[168,172,186])}
 for(var k=0;k<6;k++)RR(cx-24+k*8,top-4+((k*7)%5),6,4,[110,116,132]);
 for(var x3=-rx;x3<=rx;x3++){var u3=x3/rx;for(var t=0;t<3;t++)P(cx+x3,top+5+t+Math.round(ry*Math.sqrt(1-u3*u3)),[255,77,184])}})}
// ---------- tall towers (per-frame sprites) ----------
function skytreeSprite(){return sprite('sky',64,200,function(P,RR,w,h){var cx=32,steel=[214,224,240];
 function lat(x,y,hw){var u=(x-cx)/hw,sh=.78+.32*(-u);var col=((x+y)%6===0||(x-y+600)%6===0)?shc([150,166,192],sh):shc(steel,sh);return col}
 for(var y=124;y<h-2;y++){var t=(y-124)/(h-126),hw=6+t*t*24+t*2;for(var x=Math.round(cx-hw);x<=Math.round(cx+hw);x++){var ins=Math.abs(x-cx)<t*14-6&&y>h-26;if(ins)continue;P(x,y,lat(x,y,hw))}}
 for(var y2=34;y2<124;y2++){var hw2=4+(y2-34)/90*2;for(var x2=Math.round(cx-hw2);x2<=Math.round(cx+hw2);x2++)P(x2,y2,lat(x2,y2,hw2))}
 function deck(yc,hw,hh){for(var y=yc-hh;y<=yc+hh;y++)for(var x=-hw;x<=hw;x++){var u=x/hw,s=.7+.4*(-u);var col=(y===yc-hh)?[236,240,248]:(y===yc+hh?[90,100,130]:shc([40,52,86],s));if(y>yc-hh&&y<yc+hh&&(x+y)%3===0)col=[110,230,255];P(cx+x,y,col)}}
 deck(84,13,5);deck(58,9,3);for(var y3=4;y3<34;y3++)RR(cx-1,y3,y3<16?1:2,1,[236,240,248]);RR(cx-1,2,2,2,[255,80,80])})}
function ttowerSprite(){return sprite('tt',76,176,function(P,RR,w,h){var cx=38,OR=[232,82,42],WH=[244,244,244];
 function col(x,y,hw){var band=Math.floor((h-y)/12)%2===0?OR:WH,u=(x-cx)/(hw||1),s=.8+.3*(-u);var c=((x+y)%5===0||(x-y+500)%5===0)?shc(band,s*.72):shc(band,s);return c}
 for(var y=96;y<h-1;y++){var t=(y-96)/(h-97),hw=8+Math.pow(t,1.7)*29;for(var x=Math.round(cx-hw);x<=Math.round(cx+hw);x++){if(y>h-30&&Math.abs(x-cx)<(y-(h-30))*1.05)continue;P(x,y,col(x,y,hw))}}
 for(var y2=20;y2<96;y2++){var hw2=2+(y2-20)/76*6;for(var x2=Math.round(cx-hw2);x2<=Math.round(cx+hw2);x2++)P(x2,y2,col(x2,y2,hw2))}
 function box(yc,hw,hh){for(var y=yc-hh;y<=yc+hh;y++)for(var x=-hw;x<=hw;x++){var c=y===yc-hh?[250,250,250]:((y+x)%3===0&&y<yc+hh?[255,227,160]:[70,80,100]);P(cx+x,y,shc(c,x>0?.85:1))}}
 box(100,15,5);box(56,7,3);for(var y3=3;y3<20;y3++)P(cx,y3,[236,236,236]);RR(cx-1,1,2,2,[255,80,80])})}
// ---------- school sports ground ----------
function schoolYard(w,h){return sprite('yard'+w+'_'+h,w,h,function(P,RR){var cx=w/2,cy=h/2,a=w/2-h/2,r=h/2-2;
 for(var y=0;y<h;y++)for(var x=0;x<w;x++){var dx=Math.abs(x+.5-cx),dy=y+.5-cy,d=dx<=a?Math.abs(dy):Math.hypot(dx-a,dy);var col;
  if(d<=r-10){var stripe=Math.floor((x)/10)%2;col=stripe?[66,140,78]:[74,152,86];if(Math.abs(x+.5-cx)<.6||((Math.abs(d-(r-10))<.6)))col=[236,240,236];if(Math.abs(Math.hypot(x+.5-cx,dy)-12)<.6)col=[236,240,236]}
  else if(d<=r){col=[176,92,62];var ln=(r-d);if(Math.abs(ln-3.5)<.5||Math.abs(ln-6.5)<.5)col=[232,226,214];if(hsh(x,y,3)<.08)col=[160,80,54]}
  else col=[168,148,118];if(d>r&&d<r+1)col=[220,214,200];P(x,y,col)}
 [[cx-a-r+12,cy],[cx+a+r-12,cy]].forEach(function(gp,k){for(var j=-6;j<=6;j++){P(gp[0]+(k?2:-2),gp[1]+j,[244,244,244])}P(gp[0],gp[1]-6,[244,244,244]);P(gp[0],gp[1]+6,[244,244,244]);for(var j2=-5;j2<=5;j2++)P(gp[0]+(k?1:-1),gp[1]+j2,[180,186,196])})})}
// ---------- override building drawing for landmark parts ----------
var _drawLand1=drawLand;
drawLand=function(g,b,x,y,AN){var w=b.w,h=b.h,st=b.st,i,j,cx=x+w/2,cy=y+h/2;function R(a,c,d,e,col){g.fillStyle=col;g.fillRect(a,c,d,e)}
 switch(st){
 case 20:if(w>h){R(x,y,w,2,'#3e434e');R(x,y,w,1,'#6a707c');for(i=x;i<x+w;i+=3)R(i,y+1,1,1,'#2e323c');R(x,y+2,w,3,'#e8e2d4');R(x,y+5,w,1,'#8a7a68');for(i=x+5;i<x+w;i+=12)R(i,y+2,1,3,'#b8b0a0')}else{R(x,y,w,h,'#3e434e');R(x+(w>>1),y,1,h,'#6a707c');for(j=y;j<y+h;j+=3)R(x,j,w,1,'#2e323c');R(x,y+h-4,w,3,'#e8e2d4');R(x,y+h-1,w,1,'#8a7a68')}return;
 case 21:var ps=pagodaSprite();g.drawImage(ps,Math.round(cx-ps.width/2),y+h-ps.height+2);return;
 case 23:var ks=keepSprite(w,h,b.sm);g.drawImage(ks,x,y+h-ks.height);if(AN&&!b.sm){AN.push({t:'blink',x:Math.round(cx),y:y+12})}return;
 case 24:if(w>h){R(x,y,w,1,'#3e434e');R(x,y+1,w,2,'#e8e4dc');for(j=y+3;j<y+h;j++)for(i=x+((j>>2)%2)*4;i<x+w;i+=8){R(i,j,7,1,j%4===3?'#6e6e74':'#9a9aa0')}R(x,y+h-1,w,1,'#5a5a60')}else{R(x,y,w,h,'#8e8e94');for(j=y;j<y+h;j+=4)for(i=x;i<x+w;i+=4)R(i,j,3,3,'#a2a2a8');R(x+(w>>1)-1,y,2,h,'#e8e4dc');R(x+(w>>1)-1,y,1,h,'#3e434e')}return;
 case 22:R(x,y,w,h,'#2e5a8a');R(x,y,w,5,'#7e7e86');for(i=x;i<x+w;i+=6)R(i,y,5,4,'#9a9aa2');R(x,y+5,w,4,'#1e3e66');R(x,y+h-2,w,2,'#9a9aa2');R(x,y,2,h,'#8a8a92');R(x+w-2,y,2,h,'#8a8a92');for(i=0;i<w*h/50;i++){R(x+3+Math.floor(hsh(b.sd,i,1)*(w-6)),y+10+Math.floor(hsh(b.sd,i,2)*Math.max(1,h-14)),3,1,'#4a7ab0')}if(AN)for(i=0;i<w*h/1800;i++)AN.push({t:'ripple',x:x+6+hsh(b.sd,i,3)*(w-12),y:y+8+hsh(b.sd,i,4)*(h-12)});return;
 case 25:R(x,y,w,h-9,'#3a5a8a');for(j=y+1;j<y+h-9;j+=2)R(x+1,j,w-2,1,'#4a6a9a');R(x,y,w,1,'#7a9ac8');R(x,y+h-9,w,9,'#e8e4dc');for(i=x+3;i<x+w-6;i+=8){R(i,y+h-7,5,4,'#6ab0d8');R(i,y+h-7,5,1,'#fff')}R(cx-4,y+h-6,8,6,'#2a3448');R(x,y+h-9,w,1,'#ffd23a');return;
 case 30:var bs=buddhaSprite();g.drawImage(bs,Math.round(cx-bs.width/2),y+h-bs.height+6);return;
 case 36:var cs=cylSprite();g.drawImage(cs,Math.round(cx-cs.width/2),y+h-cs.height);if(AN)AN.push({t:'neon',x:x+2,y:y+h-cs.height+24,w:w-4,h:3,c:'#ff4db8',soft:1});return;
 case 31:R(x+8,y+8,w-16,h-16,'#9aa6be');R(x+12,y+12,w-24,h-24,'#c8d2e4');return;
 case 34:var rh=h-28;R(x,y,w,rh,'#24403c');var ridge=y+Math.round(rh*.34);for(j=y+1;j<y+rh-1;j++){var t=j<ridge?(j-y)/(ridge-y):(j-ridge)/(y+rh-ridge),ins=Math.round((j<ridge?(1-t):t)*0+ (j<ridge?(ridge-j)*.8:(j-ridge)*.35));var base=j<ridge?'#5a9a8a':(j%3===0?'#3e7a6a':'#468a78');R(x+1,j,w-2,1,base);R(x+1,j,Math.max(0,Math.round((j<ridge?ridge-j:0)*1.1)),1,'#6aaa9a');R(x+w-1-Math.max(0,Math.round((j<ridge?ridge-j:0)*1.1)),j,Math.max(0,Math.round((j<ridge?ridge-j:0)*1.1)),1,'#346a5c')}
  R(x+30,ridge,w-60,2,'#e8c040');R(x+26,ridge-2,4,5,'#e8c040');R(x+w-30,ridge-2,4,5,'#e8c040');for(i=0;i<2;i++){var gx=i?x+w-46:x+20;for(var r=0;r<9;r++)R(gx+r,ridge-9+r,18-r*2,1,r===0?'#e8c040':'#e8e2d4')}
  R(x,y+rh-1,w,2,'#1a2e2a');R(x,y+rh+1,w,27,'#e8e2d4');for(i=x+4;i<x+w-4;i+=9){R(i,y+rh+1,2,27,'#8a3a2a')}for(i=x+8;i<x+w-8;i+=18){R(i,y+rh+6,6,14,'#2a2a36');R(i+1,y+rh+7,4,5,['#d83a3a','#3a6ad0','#f0d040','#3aa060'][((i-x)/18|0)%4])}R(cx-16,y+h-14,32,14,'#3a2418');R(cx-18,y+h-16,36,2,'#e8c040');return;
 case 35:var rh2=h-30;R(x,y,w,rh2,'#4a4e5a');for(j=y+2;j<y+rh2;j+=3)R(x+2,j,w-4,1,'#565a68');R(x,y,w,2,'#b85a42');R(x,y,2,rh2,'#b85a42');R(x+w-2,y,2,rh2,'#8a3e2c');
  [[x+44,22],[x+w-44,22],[cx,16]].forEach(function(dd){var dx=dd[0],r=dd[1],by=y+rh2-4;R(dx-r,by-r,r*2,r+4,'#8a3e2c');for(var q=-r;q<r;q+=4)R(dx+q+1,by-r+3,2,r-2,'#f0e8dc');var ds=sprite('dome'+r,r*2+2,r+4,function(P){shadeBlob(P,r+1,r+3,r,r,[96,118,116],.5)});g.drawImage(ds,dx-r-1,by-r*2-3);R(dx-1,by-r*2-6,3,4,'#e8c040')});
  var fy=y+rh2;R(x,fy,w,30,'#a8503a');for(j=fy+3;j<fy+28;j+=7){R(x,j,w,1,'#f0e8dc');for(i=x+4;i<x+w-4;i+=8){R(i,j+2,3,4,'#3a4a60');R(i,j+2,3,1,'#f0e8dc')}}R(cx-14,y+h-12,28,12,'#2a2a36');R(cx-16,y+h-14,32,2,'#f0e8dc');R(x,y+h-1,w,1,'#5a2a1a');return;
 case 26:R(x,y,w,h-12,'#3a3e4a');R(x,y+h-12,w,12,'#c03028');R(x+2,y+h-12,4,12,'#8a1e18');R(x+w-6,y+h-12,4,12,'#8a1e18');var nx2=b.gl?x+8:x+w-24;R(nx2,y+h-11,16,10,'#2a1a14');for(i=0;i<4;i++)R(nx2+1+i*4,y+h-11,1,10,'#6a4a2a');R(nx2+5,y+h-9,6,7,b.gl?'#3a6ad0':'#d03a3a');R(nx2+6,y+h-11,4,2,'#f0d0a0');return;
 case 28:R(x,y,w,h,'#2a5232');for(i=0;i<w*h/6;i++)R(x+Math.floor(hsh(b.sd,i,1)*w),y+Math.floor(hsh(b.sd,i,2)*h),2,2,i%3?'#3e7046':'#5a9a5a');if(w>h){R(x,y+h-2,w,2,'#1e3e24')}return;
 case 32:if(w>h){R(x,y,w,h,'#6a7a3a');for(i=x;i<x+w;i+=2)R(i,y,1,h,'#a8b86a');R(x,y,w,1,'#c8d88a');R(x,y+h-1,w,1,'#4a5a2a')}else{R(x,y,w,h,'#7a8a4a');for(j=y;j<y+h;j+=2)R(x,j,w,1,'#a8b86a')}return;
 case 37:g.fillStyle=pat(g,'bamboo');g.fillRect(x,y,w,h);for(i=0;i<w*h/90;i++){var bx2=x+Math.floor(hsh(b.sd,i,1)*w),by3=y+Math.floor(hsh(b.sd,i,2)*h);R(bx2,by3,2,2,'#9ad870');R(bx2+2,by3+1,3,1,'#4a8a3a')}for(i=x+1;i<x+w-1;i+=3){var sh=8+Math.floor(hsh(b.sd,i,9)*6);R(i,y+h-sh,1,sh,'#7ab85a');R(i,y+h-sh,1,1,'#b8e890');for(j=y+h-sh+3;j<y+h;j+=4)R(i,j,1,1,'#3a6a2a')}return;
 }
 return _drawLand1(g,b,x,y,AN)};
// ---------- grounds that need the new look ----------
var _landGround1=landGround;
landGround=function(g,s,x,y,AN){_landGround1(g,s,x,y,AN);var w=s.w,h=s.h,cx=x+w/2;
};
function towerShadow(g,bx,by,L,W0){var pts=[],n=40,i;for(i=0;i<=n;i++){var t=i/n,hw=W0*.5*(1-t)+1;pts.push([bx+t*L*.75+hw*.5,by+t*L*.42-hw*.6])}for(i=n;i>=0;i--){var t2=i/n,hw2=W0*.5*(1-t2)+1;pts.push([bx+t2*L*.75-hw2*.5,by+t2*L*.42+hw2*.6])}g.fillStyle='rgba(18,10,52,.24)';g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);g.closePath();g.fill()}
var FWK=.56,FWD=12;
function ferrisShadow(g,bx,by){var R=76,H=R+12;g.fillStyle='rgba(18,10,52,.22)';for(var a=0;a<TAU;a+=.02){var z=H+Math.sin(a)*R,px=bx+Math.cos(a)*R+z*.32,py=by+z*.2;g.fillRect(Math.round(px),Math.round(py),2,2)}for(var t=0;t<1;t+=.02){var z2=H*t;g.fillRect(Math.round(bx-30*(1-t)+z2*.32),Math.round(by+z2*.2),2,1);g.fillRect(Math.round(bx+30*(1-t)+z2*.32),Math.round(by+z2*.2),2,1)}}
// school ground: crisp track instead of a thin ellipse
var _drawSpecGround1=drawSpecGround;
drawSpecGround=function(g,s,x,y,AN){if(s.k==='school'){var w=s.w,h=s.h;g.fillStyle='#a8987a';g.fillRect(x,y,w,h);g.fillStyle=pat(g,'dirt');g.fillRect(x+4,y+90,w-8,h-94);var yw=w-36,yh=h-112;g.drawImage(schoolYard(yw,yh),x+18,y+98);for(var i=0;i<5;i++){g.fillStyle='#5a6a8a';g.fillRect(x+30+i*((w-60)/4|0),y+h-12,18,6);g.fillStyle='#8aa0c8';g.fillRect(x+30+i*((w-60)/4|0),y+h-12,18,1)}return}
if(false){for(var q=0;q<4;q++){var fx=x+(q%2?s.w-34:34),fy=y+(q<2?30:s.h-30);ellRows(g,fx,fy,16,10,'#3a6a44');for(var z=0;z<12;z++)F(g,fx-12+hsh(q,z,1)*24|0,fy-6+hsh(z,q,2)*12|0,1,1,['#ff8fb8','#ffd23a','#fff','#ff5a5a'][z%4])}towerShadow(g,x+s.w/2,y+s.h/2+30,110,30);return}
 _drawSpecGround1(g,s,x,y,AN)};
// tower (st 15) base only — the tower itself is a tall per-frame sprite
var _drawTower1=drawTower;
drawTower=function(g,b,x,y,an){var w=b.w,cx=x+w/2,cy=y+b.h/2;g.fillStyle='#7a7e94';g.fillRect(x+4,y+4,w-8,b.h-8);g.fillStyle='#5a5e70';for(var i=0;i<4;i++){var dx=i%2?1:-1,dy=i<2?-1:1;g.fillRect(Math.round(cx+dx*(w/2-12))-6,Math.round(cy+dy*(b.h/2-12))-6,12,12)}g.fillStyle='#e8442a';g.fillRect(cx-6,cy-6,12,12)};
// ---------- per-frame tall landmarks (wheel, towers) ----------
function lmXray(f,bx,by,hw,H){var hid=0;if(car){var qx=SX(car.x),qy=SY(car.y);hid=Math.abs(qx-bx)<hw&&qy<by-6&&qy>by-H}if(f.fa==null)f.fa=1;f.fa+=((hid?.42:1)-f.fa)*.12;return f.fa}
function landTopDraw(){for(var i=0;i<LMA.length;i++){var f=LMA[i],bx=SX(f.x),by=SY(f.y);if(bx<-120||bx>VW+120||by<-40||by>VH+260)continue;
 var xa=f.k==='cyl3'?lmXray(f,bx,by,44,240):f.k==='tt3'?lmXray(f,bx,by,46,250):f.k==='sky3'?lmXray(f,bx,by,30,290):1;if(xa<.99)cx.globalAlpha=xa;
 if(f.k==='cyl3'){var c3=cylSprite3(),lx=Math.round(bx-48),ly=Math.round(by-246);cx.drawImage(c3,lx,ly);ledDraw(lx+34,ly+164,28,54,f.s||0,TIME);if(xa<.99)cx.globalAlpha=xa;if(((TIME*1.3)|0)%2){cx.fillStyle='#ff5050';cx.fillRect(lx+47,ly+38,2,2)}}
 else if(f.k==='ferris')ferris3D(f,bx,by);
 else if(f.k==='tt3'){var t3=ttSprite3();cx.drawImage(t3,bx-62,by-(t3.height-48));if(((TIME*1.2)|0)%2){cx.fillStyle='#ff5050';cx.fillRect(bx-1,by-206-36,2,2)}}
 else if(f.k==='sky3'){var s3=skySprite3();cx.drawImage(s3,bx-56,by-(s3.height-44));if(((TIME*1.4)|0)%2){cx.fillStyle='#ff5050';cx.fillRect(bx-1,by-281,2,2)}cx.globalAlpha=.22+.12*Math.sin(TIME*2);cx.fillStyle='#6ee7ff';cx.fillRect(bx-20,by-164,40,15);cx.globalAlpha=1}
 else if(f.k==='sky'){var s=skytreeSprite();cx.drawImage(s,bx-(s.width>>1),by-s.height+2);var bl=((TIME*1.4)|0)%2;if(bl){cx.fillStyle='#ff5050';cx.fillRect(bx-1,by-s.height+3,2,2)}cx.globalAlpha=.25+.15*Math.sin(TIME*2);cx.fillStyle='#6ee7ff';cx.fillRect(bx-15,by-s.height+80,30,10);cx.globalAlpha=1}
 else if(f.k==='tt'){var t2=ttowerSprite();cx.drawImage(t2,bx-(t2.width>>1),by-t2.height+2);if(((TIME*1.2)|0)%2){cx.fillStyle='#ff5050';cx.fillRect(bx-1,by-t2.height+2,2,2)}}
 cx.globalAlpha=1}}
function ferris3D(f,bx,by){var R=f.R,H=R+12,k=FWK,D=FWD,rot=TIME*.1;
 function prj(ang,side,dz){var z=H+Math.sin(ang)*R+(dz||0);return[bx+Math.cos(ang)*R,by+side*D/2-z*k]}
 var hubB=[bx,by-D/2-H*k],hubF=[bx,by+D/2-H*k];
 cx.strokeStyle='#b8c0d0';cx.lineWidth=2;cx.beginPath();cx.moveTo(bx-32,by-D/2-4);cx.lineTo(hubB[0],hubB[1]);cx.lineTo(bx+32,by-D/2-4);cx.stroke();
 cx.fillStyle='#7a8aa8';for(var a=0;a<TAU;a+=.02){var p=prj(a,-1);cx.fillRect(Math.round(p[0]),Math.round(p[1]),1,1)}
 cx.strokeStyle='rgba(150,165,190,.7)';cx.lineWidth=1;cx.beginPath();for(var s=0;s<16;s++){var a2=rot+s/16*TAU,p2=prj(a2,-1);cx.moveTo(hubB[0],hubB[1]);cx.lineTo(p2[0],p2[1])}cx.stroke();
 var GC=['#ff4d6d','#ffd23a','#38e8ff','#7bd957','#b06aff','#ff8a3d'],gs=[];for(var g=0;g<24;g++){var a3=rot+g/24*TAU;gs.push([a3,Math.sin(a3)])}
 gs.sort(function(p,q){return q[1]-p[1]});gs.forEach(function(q,gi){var a4=q[0],z=H+Math.sin(a4)*R,gx=Math.round(bx+Math.cos(a4)*R),gy=Math.round(by-z*k);cx.fillStyle='#3a3e4e';cx.fillRect(gx,gy-1,1,3);var c=GC[Math.round(a4/TAU*24+240)%6];cx.fillStyle='#1a1e2a';cx.fillRect(gx-3,gy+1,7,6);cx.fillStyle=c;cx.fillRect(gx-2,gy+1,5,5);cx.fillStyle=shadeHex(c,1.4);cx.fillRect(gx-2,gy+1,5,1);cx.fillStyle='#cfe8ff';cx.fillRect(gx-1,gy+3,3,1)});
 cx.strokeStyle='rgba(225,232,245,.9)';cx.beginPath();for(s=0;s<16;s++){var a5=rot+s/16*TAU,p5=prj(a5,1);cx.moveTo(hubF[0],hubF[1]);cx.lineTo(p5[0],p5[1])}cx.stroke();
 for(a=0;a<TAU;a+=.012){var pf=prj(a,1);cx.fillStyle='#f4f6fa';cx.fillRect(Math.round(pf[0]),Math.round(pf[1]),1,1);var pi=prj(a,1,-2);cx.fillStyle='#a8b8d4';cx.fillRect(Math.round(pi[0]),Math.round(pi[1]),1,1)}
 for(var L=0;L<48;L++){if(((L+(TIME*10|0))%6))continue;var al=L/48*TAU,pl=prj(al,1,1.5);cx.fillStyle=GC[(L>>1)%6];cx.fillRect(Math.round(pl[0])-1,Math.round(pl[1])-1,2,2)}
 cx.fillStyle='#4a5266';cx.fillRect(hubB[0]-1,hubB[1],2,hubF[1]-hubB[1]+1);cx.fillStyle='#f4f6fa';cx.fillRect(hubF[0]-3,hubF[1]-3,7,7);cx.fillStyle='#ff4db8';cx.fillRect(hubF[0]-1,hubF[1]-1,3,3);
 cx.strokeStyle='#eef2f8';cx.lineWidth=2;cx.beginPath();cx.moveTo(bx-32,by+D/2+2);cx.lineTo(hubF[0],hubF[1]);cx.lineTo(bx+32,by+D/2+2);cx.stroke()}

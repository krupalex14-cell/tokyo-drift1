// ===== «Золотой дракон» — the casino on the river embankment, across the water from the docks =====
// a two-tier red-and-gold hall with its back to the river and its doors to the embankment road;
// a neon dragon chases its pearl along the ridge, lanterns under the eaves, a red carpet down to the kerb.
// The body and the forecourt are baked into the chunks (one cached picture); the dragon and the marquee lights are drawn live.
var CAS=null,CASC=null;
var CASX=2884,CASY=5998,CASW=328,CASH=142,CASB=100,CASE={x:112,w:104};
var CGLY={
 kin:['....#....','...#.#...','..#...#..','.#.....#.','#.#####.#','....#....','.#######.','.#..#..#.','..#.#.#..','....#....','#########'],
 ryu:['....#....','.#######.','..#...#..','#########','.#######.','.#..#..#.','.#######.','.#..#..#.','.#######.','....#...#','....#####'],
 C:['###','#..','#..','#..','###'],A:['.#.','#.#','###','#.#','#.#'],S:['###','#..','###','..#','###'],I:['###','.#.','.#.','.#.','###'],N:['#..#','##.#','#.##','#..#','#..#'],O:['###','#.#','#.#','#.#','###']};
function casGlyph(g,G,x,y,col,sc){sc=sc||1;g.fillStyle=col;for(var r=0;r<G.length;r++)for(var q=0;q<G[r].length;q++)if(G[r][q]==='#')g.fillRect(x+q*sc,y+r*sc,sc,sc)}
function casWord(g,w,x,y,col,sc){for(var i=0;i<w.length;i++){var G=CGLY[w[i]];casGlyph(g,G,x,y,col,sc);x+=(G[0].length+1)*sc}}
function casArt(){if(CASC)return CASC;var W=CASW,H=CASH,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i;
 function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
 function h3(a,b,s){return hsh(a,b,s)}
 // ---------- the lower roof: crimson tiles, gold eaves, hips running into the upper tier's corners
 var L0={x:0,y:0,w:W,h:70},U={x:40,y:10,w:248,h:40};
 var lowC={n:['#922633','#a8303c'],s:['#6e1822','#7e1e2a'],w:['#862230','#982a36'],e:['#641620','#701a24']},rowD='#4a0e18';
 for(y=1;y<69;y++)for(x=1;x<W-1;x++){if(x>=U.x&&x<U.x+U.w&&y>=U.y&&y<U.y+U.h+8)continue;
  var dT=y/U.y,dB=(69-y)/(69-U.y-U.h-8),dL=x/U.x,dR=(W-1-x)/(W-1-U.x-U.w),m=Math.min(dT,dB,dL,dR),pl=m===dT?'n':m===dB?'s':m===dL?'w':'e',col=lowC[pl],v;
  var hip=false,ds=[dT,dB,dL,dR].sort(function(a,b){return a-b});if(ds[1]-ds[0]<.035&&m<.98)hip=true;
  if(hip){R(x,y,1,1,(x+y)&1?'#b8902e':'#9a7426');continue}
  if(pl==='n'||pl==='s'){v=(y%3===0)?rowD:(((x+(Math.floor(y/3)&1)*2)%4===0)?shadeHex(col[0],.82):col[(h3(x,y,3)<.08)?1:0])}
  else{v=(x%3===0)?rowD:(((y+(Math.floor(x/3)&1)*2)%4===0)?shadeHex(col[0],.82):col[(h3(x,y,3)<.08)?1:0])}
  R(x,y,1,1,v)}
 // the gold eave trim all round, the dark lip under it, and the upturned corners
 g.fillStyle='#14101e';g.fillRect(0,0,W,1);g.fillRect(0,69,W,1);g.fillRect(0,0,1,70);g.fillRect(W-1,0,1,70);
 R(1,1,W-2,1,'#f2c94a');R(1,68,W-2,1,'#f2c94a');R(1,1,1,68,'#f2c94a');R(W-2,1,1,68,'#f2c94a');R(2,2,W-4,1,'#a87c26');R(2,67,W-4,1,'#7a5618');
 [[0,0,-1,-1],[W-1,0,1,-1],[0,69,-1,1],[W-1,69,1,1]].forEach(function(k){var ax=k[0],ay=k[1],sx=k[2],sy=k[3];
  R(ax-(sx>0?0:2),ay-(sy>0?0:2),3,3,'#14101e');R(ax+sx*2-(sx>0?0:1),ay+sy*2-(sy>0?0:1),2,2,'#14101e');R(ax-(sx>0?-1:1),ay-(sy>0?-1:1),1,1,'#ffd23a');R(ax+sx*2,ay+sy*2,1,1,'#f2c94a')});
 // ---------- the upper tier: its red wall with a band of lit windows, then the golden roof with its ridge
 R(U.x+6,U.y+U.h,U.w-12,9,'#14101e');R(U.x+7,U.y+U.h,U.w-14,8,'#8e1b24');R(U.x+7,U.y+U.h,U.w-14,1,'#d8a530');R(U.x+7,U.y+U.h+7,U.w-14,1,'#4a0e14');
 for(x=U.x+11;x<U.x+U.w-14;x+=9){R(x,U.y+U.h+2,6,4,'#ffcf7a');R(x+3,U.y+U.h+2,1,4,'#a8781e');R(x,U.y+U.h+4,6,1,'#c89a4a')}
 var upC={n:['#3e3648','#4c4258'],s:['#2a2432','#342c3e'],w:['#363040','#443a50'],e:['#262030','#2e2838']},rU='#18141e',hw=U.h/2;
 for(y=U.y;y<U.y+U.h;y++)for(x=U.x;x<U.x+U.w;x++){var lx=x-U.x,ly=y-U.y,t2=ly/hw,b2=(U.h-1-ly)/hw,l2=lx/hw,r2=(U.w-1-lx)/hw,m2=Math.min(t2,b2,l2,r2),p2=m2===t2?'n':m2===b2?'s':m2===l2?'w':'e',c2=upC[p2],v2;
  var s2=[t2,b2,l2,r2].sort(function(a,b){return a-b});if(s2[1]-s2[0]<.06&&m2<.97){R(x,y,1,1,'#a87c26');continue}
  if(p2==='n'||p2==='s')v2=(ly%3===0)?rU:(((lx+(Math.floor(ly/3)&1)*2)%4===0)?shadeHex(c2[0],.86):c2[h3(x,y,5)<.07?1:0]);
  else v2=(lx%3===0)?rU:(((ly+(Math.floor(lx/3)&1)*2)%4===0)?shadeHex(c2[0],.86):c2[h3(x,y,5)<.07?1:0]);
  R(x,y,1,1,v2)}
 g.fillStyle='#14101e';g.fillRect(U.x-1,U.y-1,U.w+2,1);g.fillRect(U.x-1,U.y+U.h,U.w+2,1);g.fillRect(U.x-1,U.y-1,1,U.h+2);g.fillRect(U.x+U.w,U.y-1,1,U.h+2);
 R(U.x,U.y,U.w,1,'#d8a530');R(U.x,U.y,1,U.h,'#d8a530');R(U.x+U.w-1,U.y,1,U.h,'#d8a530');R(U.x,U.y+U.h-1,U.w,1,'#d8a530');
 // the ridge (the dragon lies on it) and the fish-dragons at its ends
 var ry=U.y+hw-1;R(U.x+hw-2,ry-1,U.w-U.h+4,4,'#14101e');R(U.x+hw-1,ry,U.w-U.h+2,2,'#a87c26');R(U.x+hw-1,ry,U.w-U.h+2,1,'#c49a36');
 [U.x+hw-4,U.x+U.w-hw+1].forEach(function(sx,k){var d=k?1:-1;R(sx-1,ry-4,5,9,'#14101e');R(sx,ry-3,3,7,'#e8b840');R(sx+d,ry-5,2,3,'#14101e');R(sx+(d>0?2:0),ry-4,1,2,'#ffd23a');R(sx+1,ry-1,1,1,'#e0302a')});
 // ---------- the facade (the side you see), under the eaves
 var F=70;R(0,F,W,3,'#2a0e14');R(0,F+3,W,CASB-F-3,'#8e1b24');R(0,CASB-1,W,1,'#3a0a10');
 R(0,F+3,W,2,'#b8902e');for(x=1;x<W;x+=3)R(x,F+5,1,1,'#6e4c12');R(0,F+3,W,1,'#f2c94a');
 var E0=CASE.x,E1=CASE.x+CASE.w;
 for(x=4;x<W-4;x+=22){if(x+22>E0&&x<E1)continue;
  R(x,F+5,4,CASB-F-5,'#b8262e');R(x,F+5,1,CASB-F-5,'#c43a34');R(x-1,F+5,6,2,'#b8902e');R(x-1,CASB-3,6,3,'#b8902e');R(x-1,CASB-1,6,1,'#8e6418');
  if(x+22<W-4&&!(x+22>E0&&x+22<E1+22&&x+7>=E0-8)){var wx=x+7;if(wx+12<=E0||wx>=E1){R(wx-1,F+8,13,15,'#4a0e14');R(wx,F+9,11,13,'#ffcf7a');for(i=wx+2;i<wx+11;i+=3)R(i,F+9,1,13,'#a8781e');for(i=F+11;i<F+22;i+=3)R(wx,i,11,1,'#a8781e');R(wx,F+9,11,1,'#fff0c0')}}}
 // the entrance: the great plaque 金竜 CASINO, two lacquered pillars, the golden doors
 R(E0,F+5,CASE.w,CASB-F-5,'#7a1620');for(x=E0+2;x<E1-2;x+=6)for(y=F+8;y<CASB-2;y+=6){R(x+2,y,1,1,'#a87c26');R(x+1,y+1,3,1,'#8a6420');R(x+2,y+2,1,1,'#a87c26')}
 var PX=122,PY=F+2,PW=84,PH=18;R(PX-1,PY-1,PW+2,PH+2,'#14101e');R(PX,PY,PW,PH,'#d8a530');R(PX,PY,PW,1,'#fff0b0');R(PX,PY+PH-1,PW,1,'#8e6418');R(PX+2,PY+2,PW-4,PH-4,'#1c1418');
 casGlyph(g,CGLY.kin,PX+6,PY+4,'#6e4c12');casGlyph(g,CGLY.ryu,PX+18,PY+4,'#6e4c12');casGlyph(g,CGLY.kin,PX+5,PY+3,'#ffd23a');casGlyph(g,CGLY.ryu,PX+17,PY+3,'#ffd23a');
 casWord(g,'CASINO',PX+33,PY+5,'#5a0a10',2);casWord(g,'CASINO',PX+32,PY+4,'#ff4a5a',2);
 R(132,F+20,6,CASB-F-20,'#14101e');R(133,F+21,4,CASB-F-21,'#a8222a');R(133,F+21,1,CASB-F-21,'#c43a34');R(132,F+20,6,2,'#b8902e');
 R(190,F+20,6,CASB-F-20,'#14101e');R(191,F+21,4,CASB-F-21,'#a8222a');R(191,F+21,1,CASB-F-21,'#c43a34');R(190,F+20,6,2,'#b8902e');
 R(139,F+20,50,CASB-F-20,'#14101e');R(140,F+21,48,CASB-F-21,'#2a1018');
 [[142,21],[165,21]].forEach(function(d){var dx=d[0];R(dx,F+21,d[1],CASB-F-21,'#b88a2c');R(dx,F+21,d[1],1,'#c49a36');R(dx+2,F+23,d[1]-4,4,'#9a7426');R(dx+2,F+23,d[1]-4,1,'#c49a36');R(dx+2,F+28,d[1]-4,1,'#9a7426');R(dx+(dx<160?d[1]-3:2),F+25,1,2,'#6e4c12')});R(164,F+21,1,CASB-F-21,'#6e4c12');
 // the neon banners either side of the entrance
 [[114,F+6],[208,F+6]].forEach(function(b){R(b[0]-1,b[1]-1,7,24,'#14101e');R(b[0],b[1],5,22,'#3a0a10');R(b[0]+1,b[1]+1,3,20,'#ff3a4a');for(y=b[1]+3;y<b[1]+20;y+=4)R(b[0]+2,y,1,2,'#ffd23a')});
 // lanterns along the eave
 for(x=8;x<W-4;x+=16){if(x>E0-8&&x<E1+6)continue;R(x,F,1,2,'#14101e');R(x-1,F+2,3,5,'#14101e');R(x-1,F+2,3,1,'#d8a530');R(x-1,F+3,3,3,'#e0302a');R(x-1,F+3,1,3,'#ff7a50');R(x-1,F+6,3,1,'#d8a530')}
 // ---------- the forecourt: dark paving with a gold inlay, the shade of the hall, steps, carpet, lions, the canopy, the bays
 for(y=CASB;y<H;y++)for(x=0;x<W;x++){var row=Math.floor((y-CASB)/6),ox=(row&1)*5,jt=((x+ox)%10===0)||((y-CASB)%6===0),n=h3(x,y,11)*10-5,sl=h3(Math.floor((x+ox)/10),row,12)*12-6,k3=jt?50:62+n+sl;
  R(x,y,1,1,'rgb('+((k3+4)|0)+','+((k3-6)|0)+','+((k3+2)|0)+')')}
 g.fillStyle='#8a6a24';g.fillRect(3,CASB+4,W-6,1);g.fillRect(3,H-4,W-6,1);g.fillRect(3,CASB+4,1,H-CASB-7);g.fillRect(W-4,CASB+4,1,H-CASB-7);
 R(0,H-2,W,1,'#8a8496');R(0,H-1,W,1,'#5a546a');
 // bays, two each side, gold lines
 [58,84,110,218,244,270].forEach(function(bx){R(bx,CASB+12,1,H-CASB-18,'#9a7a30')});
 // the shade the hall throws on the paving (light from the north-west)
 g.fillStyle='rgba(18,10,52,.32)';g.fillRect(0,CASB,W,9);g.fillStyle='rgba(18,10,52,.16)';g.fillRect(0,CASB+9,W,3);
 // steps
 for(i=0;i<3;i++){R(134-i*2,CASB+i*2,60+i*4,2,i&1?'#9a94a6':'#bab4c8');R(134-i*2,CASB+i*2,60+i*4,1,'#d8a530')}
 // the carpet down to the kerb
 R(151,CASB+6,26,H-CASB-8,'#14101e');R(152,CASB+6,24,H-CASB-8,'#a81c28');R(152,CASB+6,1,H-CASB-8,'#b8902e');R(175,CASB+6,1,H-CASB-8,'#b8902e');
 for(y=CASB+9;y<H-4;y+=6){R(163,y,2,1,'#b8902e');R(162,y+1,4,1,'#7a1220');R(163,y+2,2,1,'#b8902e')}
 // guardian lions on their plinths
 [[124,CASB+8,1],[196,CASB+8,-1]].forEach(function(L){var lx=L[0],ly=L[1],f=L[2];var LP={K:'#14101e',L:'#d8d4e0',M:'#a8a4b4',D:'#6a6676',G:'#b8902e',E:'#c8302e'};
  ['.KKKKKKK.','KMLMLMLMK','KLMELEMLK','KMLLLLLMK','KMLDDDLMK','.KMLLLMK.','KMMLMLMMK','KMLMKMLMK','KKKKKKKKK','KGGGGGGGK','KDDDDDDDK','KKKKKKKKK'].forEach(function(rw,j){for(var q=0;q<9;q++){var ch=rw[q];if(ch!=='.')R(lx+q,ly-1+j,1,1,LP[ch])}})});
 // the canopy (porte-cochère) over the carpet: a small golden hip roof on four red posts
 var CX=140,CY=CASB+14,CWd=48,CHd=18;g.fillStyle='rgba(18,10,52,.36)';g.fillRect(CX+3,CY+4,CWd,CHd);
 R(CX-1,CY-1,CWd+2,CHd+2,'#14101e');for(y=0;y<CHd;y++)for(x=0;x<CWd;x++){var t3=y/9,b3=(CHd-1-y)/9,l3=x/9,r3=(CWd-1-x)/9,m3=Math.min(t3,b3,l3,r3),p3=m3===t3?'n':m3===b3?'s':m3===l3?'w':'e',c3=upC[p3];R(CX+x,CY+y,1,1,(p3==='n'||p3==='s')?(y%3===0?rU:c3[0]):(x%3===0?rU:c3[0]))}
 R(CX+8,CY+8,CWd-16,2,'#c49a36');R(CX,CY,CWd,1,'#d8a530');R(CX,CY+CHd-1,CWd,1,'#d8a530');R(CX,CY,1,CHd,'#d8a530');R(CX+CWd-1,CY,1,CHd,'#d8a530');
 [[CX-1,CY-1],[CX+CWd-1,CY-1],[CX-1,CY+CHd-1],[CX+CWd-1,CY+CHd-1]].forEach(function(p){R(p[0],p[1],2,2,'#c8302e')});
 return CASC=c}
// where the neon lives on the baked picture (for the chunk's glow/flicker list)
function casAnims(x,y,an){var F=70,i;an.push({t:'neon',x:x+115,y:y+F+7,w:3,h:20,c:'#ff3a4a'});an.push({t:'neon',x:x+209,y:y+F+7,w:3,h:20,c:'#ff3a4a'});
 for(i=8;i<CASW-4;i+=16){if(i>CASE.x-8&&i<CASE.x+CASE.w+6)continue;an.push({t:'lant',x:x+i,y:y+F+4})}}
function casBuild(){CAS=null;var r={x:CASX,y:CASY,w:CASW,h:CASH};
 // the warehouses that stood here go (whole, so nothing sticks out of the new hall), and so do the props on the plot
 BH.q(r.x,r.y,r.x+r.w,r.y+r.h-14,function(b){if(b.hid)return;var ox=Math.min(r.x+r.w,b.x+b.w)-Math.max(r.x,b.x),oy=Math.min(r.y+r.h-14,b.y+b.h)-Math.max(r.y,b.y);if(ox>0&&oy>0)b.hid=1});
 var rm=[];PH.q(r.x-4,r.y-4,r.x+r.w+4,r.y+r.h+40,function(p){if(p.hid||p.gone)return;var px=wd(p.x,r.x),py=wd(p.y,r.y);if(px>-3&&py>4&&px<r.w+3&&(py<r.h+1||(p.t===P_CAR&&py<r.h+36)))rm.push(p)});
 rm.forEach(function(p){hashRmNear(PH,p,p.x,p.y,(p.t===P_CAR?20:Math.max(p.r||2,12))+2);p.hid=1;p.gone=1});
 var B={x:CASX,y:CASY,w:CASW,h:CASB,st:6,ht:7,ns:1,d:0,sd:77,cas:1};addB(B);
 // two cars at the door: a gold coupe and a black one, nose to the hall
 [[97,3],[231,4]].forEach(function(q){addP({t:P_CAR,x:CASX+q[0],y:CASY+CASB+24,a:-Math.PI/2,vt:2,c:q[1],hx:VTY[2].hx,hy:VTY[2].hy,cas:1})});
 // lamps at the forecourt's corners, potted pines by the doors
 [[22,CASH-8],[CASW-22,CASH-8]].forEach(function(q){addP({t:P_LAMP,x:CASX+q[0],y:CASY+q[1]})});
 [[16,CASB+14],[CASW-16,CASB+14],[118,CASB+22],[210,CASB+22]].forEach(function(q){addP({t:P_PLANT,x:CASX+q[0],y:CASY+q[1]})});
 CAS={b:B,x:CASX,y:CASY,w:CASW,h:CASH,door:{x:CASX+164,y:CASY+CASH-6}}}
var _bbCas=buildBrk;buildBrk=function(){try{casBuild()}catch(e){console.error(e)}_bbCas()};
var _dBCas=drawB;drawB=function(g,b,x,y,an){if(b.cas){g.drawImage(casArt(),x,y);if(an)casAnims(x,y,an);return}return _dBCas(g,b,x,y,an)};

// ---------- live: the neon dragon on the ridge chasing its pearl, and the marquee bulbs round the plaque
function casDragonPts(t){var P=[],N=52,i;for(i=0;i<N;i++){var a=i<4?2.5+i*.8:i>N-8?6-(i-(N-8))*.4:5.6;P.push([80+i*3.5,29+Math.sin(i*.3-t*1.6)*a,i<6?4:Math.max(1.4,4-(i-6)/(N-6)*2.8)])}return P}
function casDraw(){if(!CAS)return;var X=SX(CAS.x),Y=SY(CAS.y);if(X>VW+20||Y>VH+20||X+CAS.w<-20||Y+CAS.h<-20)return;casPaint(X,Y,false)}
// lit: the same neon again in the light pass (additive), so at night it burns instead of sinking into the dark
function casPaint(X,Y,lit){var t=TIME,P=casDragonPts(t),i,k,s;
 function R(a,b,w,h,col){cx.fillStyle=col;cx.fillRect(Math.round(X+a),Math.round(Y+b),w,h)}
 function disc(px,py,r,col){var rr=Math.round(r);for(var dy=-rr;dy<=rr;dy++){var w=Math.round(Math.sqrt(Math.max(0,r*r-dy*dy+.3)));R(px-w,py+dy,w*2+1,1,col)}}
 // its shadow on the gold tiles
 if(!lit)for(i=P.length-1;i>=0;i--)disc(P[i][0]+2,P[i][1]+2,P[i][2],'rgba(70,30,10,.35)');
 // the body, tail first: dark outline, gold scales, a red spine, the running light
 if(!lit)for(i=P.length-1;i>=0;i--)disc(P[i][0],P[i][1],P[i][2]+1,'#3a1408');
 for(i=P.length-1;i>=0;i--){s=P[i];var run=(((i-t*16)%18)+18)%18<2.4;disc(s[0],s[1],s[2],run?'#fff2b0':(i&1?'#e8a820':'#d8961c'));if(!run&&s[2]>=2)R(s[0]-1,s[1]-1,1,1,'#ffe27a');if(i%3===0&&i>3)R(s[0],s[1]-Math.round(s[2]),1,1,'#e0302a');if(i%2===0&&i>4&&s[2]>=2)R(s[0],s[1]+1,1,1,'#c8401e')}
 // claws
 [9,17,31,39].forEach(function(j){var q=P[j],d=j%2?1:-1;R(q[0]-1,q[1]+d*3,1,1,'#3a1408');R(q[0]-1,q[1]+d*4,1,1,'#c8962a');R(q[0]-2,q[1]+d*5,2,1,'#e0302a')});
 // the tail flame
 var tl=P[P.length-1],fl=Math.floor(t*10)%3;R(tl[0]+2,tl[1]-1,2,1,'#ff7a30');R(tl[0]+3+fl%2,tl[1],2,1,'#e0302a');R(tl[0]+2,tl[1]+1,2,1,'#ffd23a');
 // the head (to the west): a long snout with an open mouth, red eyes, antler horns and a red mane
 var hx=P[0][0],hy=Math.round(P[0][1]);
 R(hx-15,hy-5,15,11,'#3a1408');R(hx-19,hy-3,5,7,'#3a1408');R(hx-14,hy-4,13,9,'#e8a820');R(hx-14,hy-4,13,1,'#ffe27a');R(hx-14,hy+4,13,1,'#b87a14');R(hx-18,hy-2,4,5,'#e8a820');R(hx-18,hy-2,4,1,'#ffe27a');
 R(hx-19,hy-1,3,3,'#3a1408');R(hx-18,hy,2,1,'#7a1010');R(hx-18,hy-1,1,1,'#fff');R(hx-18,hy+1,1,1,'#fff');R(hx-16,hy-2,1,1,'#7a3a08');R(hx-16,hy+2,1,1,'#7a3a08');
 R(hx-10,hy-4,3,2,'#14101e');R(hx-10,hy-4,2,1,'#ff2020');R(hx-10,hy+3,3,2,'#14101e');R(hx-10,hy+4,2,1,'#ff2020');R(hx-12,hy-1,7,3,'#c8401e');R(hx-11,hy,5,1,'#e8a820');
 for(k=0;k<5;k++){R(hx-4+k,hy-6-k,1,1,k<2?'#3a1408':'#f4d27a');R(hx-4+k,hy+6+k,1,1,k<2?'#3a1408':'#f4d27a')}R(hx-1,hy-8,1,1,'#f4d27a');R(hx-1,hy+8,1,1,'#f4d27a');
 for(k=0;k<4;k++){var mh=2+(k&1);R(hx-2+k*2,hy-5-mh+1,1,mh,'#e0302a');R(hx-2+k*2,hy+5,1,mh,'#e0302a')}
 // whiskers streaming back
 for(k=0;k<16;k++){var wx=hx-17+k*1.5,w1=hy-3-k*.5+Math.sin(t*3+k*.5)*1.6,w2=hy+3+k*.5+Math.sin(t*3+k*.5+1.5)*1.6;R(wx,w1,1,1,'#ff4a3a');R(wx,w2,1,1,'#ff4a3a')}
 // the pearl it chases, wrapped in little flames
 var px=hx-27+Math.sin(t*1.3)*2,py=hy+Math.cos(t*1.7)*2;for(k=0;k<8;k++){var a=t*3+k*TAU/8;R(px+Math.cos(a)*6,py+Math.sin(a)*5,1,1,k&1?'#ff7a30':'#ffd23a')}
 disc(px,py,4,'#3a1408');disc(px,py,3.2,'#ffd8f0');R(px-2,py-2,2,1,'#ffffff');R(px-2,py-1,1,1,'#ffffff');R(px+1,py+1,2,1,'#ff9ad0');
 // marquee bulbs round the plaque, chasing
 var PX=122,PY=72,PW=84,PH=18,per=2*(PW+PH),n=0;for(k=0;k<per;k+=3){var bx,by;if(k<PW){bx=PX+k;by=PY-2}else if(k<PW+PH){bx=PX+PW+1;by=PY+(k-PW)}else if(k<2*PW+PH){bx=PX+PW-(k-PW-PH);by=PY+PH+1}else{bx=PX-2;by=PY+PH-(k-2*PW-PH)}
  var on=((n-Math.floor(t*8))%3+3)%3===0;n++;R(bx,by,1,1,on?'#fff6c8':'#8e6418')}}
function casGlow(a){if(!CAS)return;var X=SX(CAS.x),Y=SY(CAS.y);if(X>VW+120||Y>VH+120||X+CAS.w<-120||Y+CAS.h<-120)return;var t=TIME,P=casDragonPts(t),i;
 cx.imageSmoothingEnabled=false;cx.globalAlpha=Math.min(1,a*.75);casPaint(X,Y,true);cx.imageSmoothingEnabled=true;
 for(i=0;i<P.length;i+=5)gl(X+P[i][0],Y+P[i][1],12,10,[255,190,70],a*.42);gl(X+P[0][0]-9,Y+P[0][1],18,14,[255,170,60],a*.5);
 gl(X+P[0][0]-27,Y+P[0][1],12,12,[255,220,250],a*.8);gl(X+P[0][0]-27,Y+P[0][1],34,30,[255,160,220],a*.3);
 gl(X+164,Y+81,58,20,[255,200,90],a*.55);gl(X+164,Y+81,110,44,[255,120,60],a*.22);
 gl(X+164,Y+96,30,14,[255,210,140],a*.7);gl(X+164,Y+118,100,30,[255,170,90],a*.28);
 for(var x=11;x<CASW-14;x+=22){if(x+22>CASE.x&&x<CASE.x+CASE.w)continue;gl(X+x+5,Y+86,10,10,[255,200,120],a*.45)}
 for(x=51;x<CASW-54;x+=18)gl(X+x,Y+54,9,6,[255,200,120],a*.35)}
var _dzCas=drawZones;drawZones=function(l){_dzCas(l);if(l===0&&window.worldReady)casDraw()};
var _edCas=emisDraw;emisDraw=function(a){_edCas(a);if(a>.05)casGlow(a)};

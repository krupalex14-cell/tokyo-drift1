// ===== inside «Золотой дракон»: the hall, Lyokha on foot, the staff and the guests =====
// the hall is a picture (360x240), top-down like the city: floors from above, the north wall shows its face,
// tables and machines show their south faces. People are 12x18 sprites in four directions.
var CIW=360,CIH=240;
function casInArt(){var W=CIW,H=CIH,c=mkCanvas(W,H),g=c.getContext('2d'),x,y,i,j;
 function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a,b,w,h)}
 function P(a,b,col){g.fillStyle=col;g.fillRect(a,b,1,1)}
 function disc(px,py,r,col){for(var dy=-Math.ceil(r);dy<=Math.ceil(r);dy++){var w=Math.sqrt(Math.max(0,r*r-dy*dy));if(w<=0)continue;R(Math.round(px-w),py+dy,Math.round(w*2),1,col)}}
 function ell(px,py,rx,ry,col){for(var dy=-ry;dy<=ry;dy++){var w=rx*Math.sqrt(Math.max(0,1-(dy*dy)/(ry*ry)));R(Math.round(px-w),py+dy,Math.round(w*2),1,col)}}
 var K='#14101e';
 // ---------- floor: casino carpet — crimson with a gold lattice and teal flowers
 for(y=40;y<H-6;y++)for(x=8;x<W-8;x++){var u=(x-8)%16,v=(y-40)%16,col='#5a1420';
  if(u===0||v===0)col='#521220';
  if(Math.abs(u-8)+Math.abs(v-8)===6&&((u+v)&1))col='#6e2a22';
  if(Math.abs(u-8)+Math.abs(v-8)===0)col='#8a6a2a';
  if(u===0&&v===0)col='#7a5a24';
  if(hsh(x,y,31)<.04)col=shadeHex(col,1.1);
  P(x,y,col)}
 // ---------- walls: dark caps all round, the north wall's face with wallpaper
 R(0,0,W,6,K);R(0,0,8,H,K);R(W-8,0,8,H,K);R(0,H-6,W,6,K);R(2,2,W-4,2,'#2a1a24');R(2,2,4,H-4,'#2a1a24');R(W-6,2,4,H-4,'#2a1a24');R(2,H-4,W-4,2,'#2a1a24');
 R(8,6,W-16,34,'#4a0e18');for(x=12;x<W-8;x+=8)R(x,9,1,28,'#5a1622');R(8,6,W-16,2,'#a87c26');R(8,8,W-16,1,'#6e4c12');R(8,36,W-16,4,'#2a1410');R(8,36,W-16,1,'#a87c26');
 R(8,40,W-16,2,'rgba(10,6,20,.35)');
 // the entrance gap in the south wall, doors swung open
 R(162,H-6,36,6,'#2a1a24');R(164,H-6,32,6,'#3a2a30');R(160,H-7,4,7,'#a87c26');R(196,H-7,4,7,'#a87c26');R(164,H-8,6,2,'#c49a36');R(190,H-8,6,2,'#c49a36');
 // ---------- the bar (north-west): mirrored shelves of bottles, a long counter, red stools
 R(14,10,112,24,K);R(15,11,110,22,'#1e2a3a');for(i=0;i<3;i++){var sy=13+i*7;R(15,sy+5,110,1,'#a87c26');for(x=17;x<123;x+=3){var bc=['#3a8a4a','#a83a2a','#d8b860','#4a6aa8','#e8e0d0','#7a3a8a','#c86a2a'][Math.floor(hsh(x,i,7)*7)],bh=3+Math.floor(hsh(x,i,8)*2);R(x,sy+5-bh,2,bh,bc);P(x,sy+5-bh,shadeHex(bc,1.4))}}
 casWordIn(g,'BAR',62,1,'#ff6ab8',1);
 R(14,52,112,8,K);R(15,52,110,5,'#3a2418');R(15,52,110,1,'#c49a36');R(15,57,110,4,'#2a1810');R(15,57,110,1,'#a87c26');for(x=18;x<124;x+=10)R(x,58,1,3,'#4a2a18');
 R(15,44,110,8,'#2e1c14');
 for(i=0;i<5;i++){var sx=26+i*20;disc(sx,70,3.5,K);disc(sx,70,2.6,'#a8222a');P(sx-1,69,'#d84a4a');R(sx-1,73,2,3,'#6e4c12')}
 // ---------- the race board (north wall, centre) and the bet terminal under it
 R(136,9,96,28,K);R(137,10,94,26,'#0e1018');casWordIn(g,'RACE',168,1,'#ffd23a',1);
 for(i=0;i<3;i++){var bx=140+i*31,by=13;R(bx,by,28,18,'#1a2a1e');R(bx+3,by+3,22,12,'#5a5a66');R(bx+6,by+6,16,6,'#1a2a1e');R(bx+3,by+9,22,1,'#e8e0d0');}
 R(137,32,94,3,'#2a2410');for(x=139;x<229;x+=4)R(x,33,2,1,hsh(x,1,9)<.5?'#ffd23a':'#7a6a20');
 R(176,46,16,14,K);R(177,47,14,8,'#2a3a5a');R(178,48,12,5,'#4ae0ff');R(177,55,14,5,'#3a3a46');R(177,55,14,1,'#a87c26');
 // two velvet sofas facing the board
 [[146,68],[200,68]].forEach(function(s){R(s[0]-1,s[1]-1,24,12,K);R(s[0],s[1],22,10,'#5a2a7a');R(s[0],s[1],22,3,'#7a4aa0');R(s[0],s[1]+3,2,7,'#4a1a6a');R(s[0]+20,s[1]+3,2,7,'#4a1a6a');R(s[0],s[1]+8,22,2,'#3a145a');for(x=s[0]+5;x<s[0]+20;x+=7)R(x,s[1]+4,1,3,'#4a1a6a')});
 // ---------- the owner's office: a dark double door with a gold dragon plate and a red lamp
 R(246,12,26,28,K);R(247,13,24,27,'#2a1810');R(247,13,11,27,'#3a2418');R(259,13,12,27,'#3a2418');R(258,13,1,27,K);R(250,20,18,6,'#a87c26');R(251,21,16,4,'#1c1418');casGlyphIn(g,['.#.#.','#####','.###.'],257,22,'#ffd23a');R(256,30,2,2,'#c49a36');R(260,30,2,2,'#c49a36');R(257,9,4,3,'#ff2a2a');
 // ---------- the stair to the VIP balcony: steps rising into the wall, red runner, gold rails
 for(i=0;i<9;i++){var st=40-i*3.6,sw=58-i*2.2,sx2=314-sw/2;R(Math.round(sx2),Math.round(st)-3,Math.round(sw),4,K);R(Math.round(sx2)+1,Math.round(st)-3,Math.round(sw)-2,3,i&1?'#6a6070':'#7a7080');R(Math.round(sx2)+1,Math.round(st)-3,Math.round(sw)-2,1,'#9a92a6');R(Math.round(314-7+i*.3),Math.round(st)-3,Math.round(14-i*.6),3,'#a81c28')}
 R(282,8,4,34,'#a87c26');R(342,8,4,34,'#a87c26');R(282,8,4,1,'#ffd23a');R(342,8,4,1,'#ffd23a');
 casWordIn(g,'VIP',306,1,'#ffd23a',1);
 // velvet rope and brass posts across the foot of the stair
 R(290,48,3,10,K);R(291,48,1,9,'#c49a36');R(335,48,3,10,K);R(336,48,1,9,'#c49a36');for(x=293;x<335;x++)P(x,51+Math.round(Math.sin((x-293)/42*Math.PI)*3),'#c8203a');
 // ---------- slots: two rows of five, screens lit, a light on each cabinet, stools in front
 function slot(sx,sy,k){R(sx-1,sy-1,16,22,K);R(sx,sy,14,6,'#3a3a4a');R(sx,sy,14,1,'#6a6a7a');R(sx+5,sy+1,4,3,['#ff4a5a','#3ad0ff','#7dff6a','#ffd23a','#b06aff'][k%5]);
  R(sx,sy+6,14,14,'#8a1a2a');R(sx,sy+6,14,1,'#c49a36');R(sx+2,sy+8,10,7,K);R(sx+3,sy+9,8,5,'#f4f0e0');
  [['#e0302a','#ffd23a','#e0302a'],['#ffd23a','#ffd23a','#3a8a4a'],['#3a6ab8','#e0302a','#ffd23a']][k%3].forEach(function(cc,q){R(sx+3+q*3,sy+10,2,3,cc)});
  R(sx+2,sy+16,10,3,'#5a1220');R(sx+5,sy+17,4,1,'#ffd23a');R(sx+14,sy+8,1,6,'#9a9aa6');R(sx+14,sy+7,2,2,'#e0302a')}
 for(j=0;j<2;j++)for(i=0;i<5;i++){slot(16+i*18,86+j*60,i+j*2);disc(23+i*18,116+j*60,3,K);disc(23+i*18,116+j*60,2.2,'#a8222a')}
 // ---------- pillars: red lacquer with gold rings
 [[124,90],[236,90],[124,180],[236,180]].forEach(function(p){disc(p[0]+2,p[1]+3,7,'rgba(10,6,20,.35)');disc(p[0],p[1],7,K);disc(p[0],p[1],6,'#a8222a');disc(p[0]-1,p[1]-1,3,'#c83a3a');for(var a=0;a<12;a++){var an=a/12*TAU;P(Math.round(p[0]+Math.cos(an)*5),Math.round(p[1]+Math.sin(an)*5),'#c49a36')}});
 // ---------- roulette (centre): wooden rim, green felt, the wheel at the west end, the number grid
 var RX=184,RY=126;ell(RX+3,RY+4,36,21,'rgba(10,6,20,.35)');ell(RX,RY,36,21,K);ell(RX,RY,35,20,'#5a3420');ell(RX,RY,32,17,'#c49a36');ell(RX,RY,31,16,'#1e6a3e');R(RX-35,RY+19,70,3,'#3a2014');
 var WX=RX-18,WY=RY;disc(WX,WY,12,K);disc(WX,WY,11,'#5a3420');for(var a2=0;a2<37;a2++){var an2=a2/37*TAU;for(var rr=7;rr<=10;rr++)P(Math.round(WX+Math.cos(an2)*rr),Math.round(WY+Math.sin(an2)*rr),a2===0?'#2a9a4a':a2&1?'#c8202a':'#14101e')}disc(WX,WY,6,'#a87c26');disc(WX,WY,3,'#ffd23a');P(WX,WY,K);P(WX+9,WY-3,'#ffffff');
 for(i=0;i<12;i++)for(j=0;j<3;j++)R(RX-3+i*3,RY-6+j*4,2,3,(i+j)&1?'#c8202a':'#14101e');R(RX-4,RY-7,38,1,'#e8e0d0');R(RX-4,RY+6,38,1,'#e8e0d0');R(RX-6,RY-7,2,13,'#2a9a4a');
 [[RX+4,RY+10,'#e0302a'],[RX+12,RY+11,'#3a6ab8'],[RX+20,RY+9,'#ffd23a']].forEach(function(ch){R(ch[0],ch[1],3,2,K);R(ch[0],ch[1]-1,3,2,ch[2])});
 // ---------- blackjack: two half-moon tables, green (small stakes) and blue (high stakes)
 function bj(tx,ty,felt){var r=24;for(var dy=0;dy<=r;dy++){var w=Math.sqrt(r*r-dy*dy);R(Math.round(tx-w)-1,ty+dy,Math.round(w*2)+2,1,K)}R(tx-r-1,ty-2,r*2+2,3,K);
  for(dy=0;dy<r;dy++){var w2=Math.sqrt((r-1)*(r-1)-dy*dy);R(Math.round(tx-w2),ty+dy,Math.round(w2*2),1,dy>r-4?'#5a3420':felt)}R(tx-r,ty-1,r*2,2,'#5a3420');R(tx-r,ty-1,r*2,1,'#c49a36');
  for(var q=0;q<5;q++){var an=Math.PI*(.15+q*.175),bx=Math.round(tx+Math.cos(an)*15),by=Math.round(ty+Math.sin(an)*14);R(bx-2,by-1,4,3,shadeHex(felt,1.35));P(bx-1,by,felt)}
  R(tx-8,ty+1,16,4,'#2a1810');for(q=0;q<6;q++)R(tx-7+q*2.6,ty+2,2,2,['#e0302a','#3a6ab8','#14101e','#3a8a4a','#ffd23a','#e8e0d0'][q]);R(tx+12,ty+1,5,4,'#c8c0b0');R(tx+12,ty+1,5,1,'#fff');
  for(q=0;q<5;q++){var an3=Math.PI*(.12+q*.19),sx3=Math.round(tx+Math.cos(an3)*30),sy3=Math.round(ty+Math.sin(an3)*28);disc(sx3,sy3,3,K);disc(sx3,sy3,2.2,'#a8222a')}}
 bj(300,96,'#1e6a3e');bj(300,150,'#1e3e7a');
 // little stake signs on the tables
 R(276,94,8,5,K);R(277,95,6,3,'#e8e0d0');R(277,96,6,1,'#3a8a4a');R(276,148,8,5,K);R(277,149,6,3,'#ffd23a');R(277,150,6,1,'#c8202a');
 // ---------- the cash desk (south-east): a booth with a gold grille window on its front
 R(290,186,60,22,K);R(291,187,58,8,'#3a2418');R(291,187,58,1,'#c49a36');R(291,195,58,12,'#7a1620');R(291,195,58,1,'#c49a36');
 for(i=0;i<2;i++){var wx=297+i*28;R(wx,197,18,8,'#1c2a3a');for(x=wx+1;x<wx+18;x+=3)R(x,197,1,8,'#c49a36');R(wx,201,18,1,'#c49a36')}
 R(296,188,48,6,'#1c1418');casWordIn(g,'CASH',306,189,'#7dff6a',1);
 // ---------- the dragon medallion inside the door, the runner from the door to the roulette
 R(172,152,16,H-6-152,'#8a1420');R(172,152,1,H-6-152,'#c49a36');R(187,152,1,H-6-152,'#c49a36');
 disc(180,206,13,K);disc(180,206,12,'#a87c26');disc(180,206,10,'#1c1418');casGlyphIn(g,CGLY.ryu,176,201,'#ffd23a');
 // ---------- plants in the corners
 [[16,226],[124,226],[236,226],[16,134]].forEach(function(p){R(p[0]-4,p[1]-1,9,6,K);R(p[0]-3,p[1],7,4,'#a87c26');disc(p[0],p[1]-4,5,'#1e4a2a');disc(p[0]-1,p[1]-5,3,'#3a7a3a');P(p[0]+1,p[1]-7,'#6aba5a')});
 return c}
function casGlyphIn(g,G,x,y,col){g.fillStyle=col;for(var r=0;r<G.length;r++)for(var q=0;q<G[r].length;q++)if(G[r][q]==='#')g.fillRect(x+q,y+r,1,1)}
var CGLYX={B:['##.','#.#','##.','#.#','##.'],R:['##.','#.#','##.','#.#','#.#'],E:['###','#..','##.','#..','###'],V:['#.#','#.#','#.#','#.#','.#.'],P:['##.','#.#','##.','#..','#..'],H:['#.#','#.#','###','#.#','#.#']};
function casWordIn(g,w,x,y,col,sc){for(var i=0;i<w.length;i++){var G=CGLYX[w[i]]||CGLY[w[i]];casGlyphIn(g,G,x,y,col);x+=G[0].length+1}}

// ---------- the hall's light, baked once: a warm dim base, pools under the chandeliers, the screens and the bar
var CIBG=null;
function casInBg(){if(CIBG)return CIBG;var W=CIW,H=CIH,c=mkCanvas(W,H),g=c.getContext('2d');g.drawImage(casInArt(),0,0);
 g.globalCompositeOperation='multiply';g.fillStyle='rgb(205,180,195)';g.fillRect(0,0,W,H);g.globalCompositeOperation='lighter';
 function pool(x,y,r,col,a){var gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,'rgba('+col+','+a+')');gr.addColorStop(1,'rgba('+col+',0)');g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
 pool(184,126,70,'255,190,110',.28);pool(60,110,60,'255,180,120',.2);pool(300,124,60,'255,190,120',.22);pool(70,40,50,'120,170,255',.18);pool(184,24,46,'255,220,120',.22);pool(180,206,40,'255,200,120',.2);pool(314,24,40,'255,210,140',.22);
 for(var j=0;j<2;j++)for(var i=0;i<5;i++)pool(23+i*18,98+j*60,12,'255,240,200',.35);pool(184,52,12,'80,220,255',.4);pool(318,198,30,'120,255,140',.15);
 g.globalCompositeOperation='source-over';return CIBG=c}

// ---------- people: 12x18, rows = down/up/left/right, columns = stand/step/step
// K outline · H hair or helmet · h its shade · S skin · V visor · v its glint · T top · t its shade · W shirt/stripe · A tie/bow
// P trousers · p their shade · B shoes · G hands
var CHT={
 head:{
  short:{d:['....KKKK....','...KHHHHK...','..KHHHHHhK..','..KHHHHHhK..','..KSSSSSSK..','..KSKSSKSK..','..KSSSSSSK..','...KKSSKK...'],
   u:['....KKKK....','...KHHHHK...','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..','...KKSSKK...'],
   s:['....KKKK....','...KHHHHK...','..KHHHHHHK..','..KHHHHHSK..','..KHHHSSSK..','..KHHHSKSK..','..KhHSSSSK..','...KKKSSK...']},
  long:{d:['....KKKK....','...KHHHHK...','..KHHHHHhK..','..KHHHHHhK..','..KHSSSSHK..','..KHKSSKHK..','..KHSSSSHK..','..KHHSSHHK..'],
   u:['....KKKK....','...KHHHHK...','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..'],
   s:['....KKKK....','...KHHHHK...','..KHHHHHHK..','..KHHHHHSK..','..KHHHSSSK..','..KHHHSKSK..','..KHHSSSSK..','..KHHKSSK...']},
  helmet:{d:['....KKKK....','...KHHHHK...','..KHHWHHhK..','..KHHHHHhK..','..KVVVVVVK..','..KVvVVVVK..','..KHHHHHhK..','...KKHHKK...'],
   u:['....KKKK....','...KHHHHK...','..KHHWHHhK..','..KHHWHHhK..','..KHHHHHhK..','..KHHHHHhK..','..KhHHHHhK..','...KKHHKK...'],
   s:['....KKKK....','...KHHHHK...','..KHWHHHHK..','..KHHHHHVK..','..KHHHHVVK..','..KHHHHVvK..','..KhHHHHHK..','...KKKHHK...']}},
 top:{
  plain:{d:['..KTTTTTTK..','.KTTTTTTTTK.','.KTtTTTTtTK.','.KTtTTTTtTK.','.KGKTTTTKGK.'],u:['..KTTTTTTK..','.KTTTTTTTTK.','.KTtTTTTtTK.','.KTtTTTTtTK.','.KGKTTTTKGK.'],s:['...KTTTTK...','...KTTTTK...','...KTtTTK...','...KTtTTK...','...KTGTTK...']},
  suit:{d:['..KTWWWWTK..','.KTTWAAWTTK.','.KTtTAATtTK.','.KTtTAATtTK.','.KGKTTTTKGK.'],u:['..KTTTTTTK..','.KTTTTTTTTK.','.KTtTTTTtTK.','.KTtTTTTtTK.','.KGKTTTTKGK.'],s:['...KTTWTK...','...KTTTTK...','...KTtTTK...','...KTtTTK...','...KTGTTK...']},
  vest:{d:['..KWWAAWWK..','.KWTWWWWTWK.','.KWTTWWTTWK.','.KWTTWWTTWK.','.KGKTTTTKGK.'],u:['..KWWWWWWK..','.KWTTTTTTWK.','.KWTTTTTTWK.','.KWTTTTTTWK.','.KGKTTTTKGK.'],s:['...KTTWWK...','...KTWTTK...','...KTWTTK...','...KTWTTK...','...KTGTTK...']},
  racer:{d:['..KTWTTWTK..','.KTTTWWTTTK.','.KTtTWWTtTK.','.KTtTTTTtTK.','.KGKTWWTKGK.'],u:['..KTTTTTTK..','.KTWWWWWWTK.','.KTtTTTTtTK.','.KTtTTTTtTK.','.KGKTTTTKGK.'],s:['...KTTTTK...','...KWWTTK...','...KTtWTK...','...KTtTTK...','...KTGTTK...']}},
 legs:{
  pants:{d:[['..KPPPPPPK..','..KPPppPPK..','..KPPKKPPK..','..KPPKKPPK..','..KBBKKBBK..'],['..KPPPPPPK..','..KPPppPPK..','..KPPKKPPK..','..KBBKKPPK..','...KK.KBBK..'],['..KPPPPPPK..','..KPPppPPK..','..KPPKKPPK..','..KPPKKBBK..','..KBBK.KK...']],
   s:[['...KPPPPK...','...KPPPPK...','...KPPPPK...','...KPKKPK...','...KBBKBBK..'],['...KPPPPK...','...KPPPPK...','..KPPKKPPK..','..KPK..KPK..','.KBBK..KBBK.'],['...KPPPPK...','...KPPPPK...','...KPPPPK...','...KPPKPK...','...KBBKBK...']]},
  dress:{d:[['..KTTTTTTK..','.KTTTTTTTTK.','.KKKKKKKKKK.','...KSKKSK...','...KBKKBK...'],['..KTTTTTTK..','.KTTTTTTTTK.','.KKKKKKKKKK.','...KBKKSK...','......KBK...'],['..KTTTTTTK..','.KTTTTTTTTK.','.KKKKKKKKKK.','...KSKKBK...','...KBK......']],
   s:[['...KTTTTK...','..KTTTTTTK..','..KKKKKKKK..','....KSSK....','....KBBK....'],['...KTTTTK...','..KTTTTTTK..','..KKKKKKKK..','...KSKKSK...','..KBK..KBK..'],['...KTTTTK...','..KTTTTTTK..','..KKKKKKKK..','....KSSK....','....KBBK....']]}}};
function chrSheet(o){var c=mkCanvas(36,72),g=c.getContext('2d');
 var pal={K:'#14101e',H:o.H,h:o.h||shadeHex(o.H,.72),S:o.S||'#f2cfa8',V:o.V||'#1a1a2e',v:o.v||'#6a7ab0',T:o.T,t:o.t||shadeHex(o.T,.74),W:o.W||'#f0eef4',A:o.A||'#c8202a',P:o.P||'#22232c',p:o.p||shadeHex(o.P||'#22232c',.75),B:o.B||'#14141c',G:o.G||o.S||'#f2cfa8'};
 [['d',0],['u',1],['s',3]].forEach(function(q){var k=q[0],row=q[1],hd=CHT.head[o.hair||'short'][k],tp=CHT.top[o.top||'plain'][k==='s'?'s':k],lg=CHT.legs[o.legs||'pants'][k==='s'?'s':'d'];
  for(var f=0;f<3;f++){var rows=hd.concat(tp,lg[f]);if(o.shades&&k==='d')rows[5]='..KSKKKKSK..';if(o.shades&&k==='s')rows[5]='..KHHHKKKK..';
   for(var y=0;y<18;y++)for(var x=0;x<12;x++){var ch=rows[y][x];if(ch==='.')continue;g.fillStyle=pal[ch]||'#ff00ff';
    g.fillRect(f*12+x,row*18+y,1,1);if(k==='s')g.fillRect(f*12+11-x,2*18+y,1,1)}}});
 return c}
// who stands where. x,y = feet; d: 0 down 1 up 2 left 3 right; cut = rows drawn (the rest is behind a counter or a table)
var CIP={
 hero:{H:'#d8202a',h:'#9a1418',T:'#d8202a',t:'#9a1418',W:'#f4f4f8',P:'#c81c24',p:'#8a1018',B:'#1c1c24',G:'#1c1c24',hair:'helmet',top:'racer'},
 croup:{H:'#1c1a22',T:'#1c1c24',top:'vest',A:'#c8202a',P:'#1c1c24'},
 dealer:{H:'#2a1a14',S:'#f6dcc0',T:'#1c1c24',top:'vest',A:'#c8202a',P:'#1c1c24',hair:'long'},
 dealer2:{H:'#141418',S:'#e3b58e',T:'#1e2a4a',top:'vest',A:'#ffd23a',P:'#1c1c24'},
 bart:{H:'#6a4a2e',S:'#e3b58e',T:'#8a1a2a',top:'vest',A:'#14101e',P:'#2a1a14'},
 guard:{H:'#141418',S:'#c8956c',T:'#22232c',top:'suit',A:'#14101e',P:'#22232c',shades:1},
 cash:{H:'#cdb38e',S:'#f6dcc0',T:'#2a5a3a',top:'suit',A:'#ffd23a',hair:'long'},
 g1:{H:'#141418',S:'#f2cfa8',T:'#c8202a',legs:'dress',hair:'long'},
 g2:{H:'#4a3226',S:'#c8956c',T:'#e8e0d0',top:'suit',A:'#ffd23a',P:'#3a3a46'},
 g3:{H:'#1c1a22',S:'#f2cfa8',T:'#3a6ab8',P:'#2a2e3a'},
 g4:{H:'#f4cc2a',S:'#f6dcc0',T:'#9a5ad0',legs:'dress',hair:'long'},
 g5:{H:'#2e2228',S:'#9c6b46',T:'#3aa06a',P:'#4a4e5e'},
 g6:{H:'#cdb38e',S:'#e3b58e',T:'#1c1c24',legs:'dress',hair:'long'},
 g7:{H:'#6a6a72',S:'#f2cfa8',T:'#5a3a2a',top:'suit',A:'#c8202a',P:'#3a2a20'}};
var CIN=[
 {id:'guard',p:'guard',x:148,y:226,d:3},
 {id:'bart',p:'bart',x:70,y:58,d:0,cut:13},
 {p:'g2',x:46,y:72,d:1,cut:15},{p:'g6',x:86,y:72,d:1,cut:15},
 {p:'g3',x:41,y:118,d:1,cut:15},{p:'g4',x:77,y:118,d:1,cut:15},{p:'g5',x:59,y:178,d:1,cut:15},
 {id:'croup',p:'croup',x:141,y:131,d:3},
 {p:'g1',x:176,y:153,d:1},{p:'g7',x:198,y:153,d:1},{p:'g3b',x:206,y:104,d:0,cut:15},
 {id:'deal1',p:'dealer',x:300,y:97,d:0,cut:15},{p:'g5b',x:285,y:121,d:1,cut:15},{p:'g2b',x:315,y:121,d:1,cut:15},
 {id:'deal2',p:'dealer2',x:300,y:151,d:0,cut:15},{p:'g7b',x:300,y:178,d:1,cut:15},
 {p:'g6b',x:157,y:77,d:1,cut:14},{p:'g1b',x:211,y:77,d:1,cut:14},
 {id:'bounc',p:'guard',x:314,y:66,d:0},
 {id:'cash',p:'cash',x:320,y:198,d:0,cut:11}];
var CISH={};function ciSheet(k){k=k.replace(/b$/,'');return CISH[k]||(CISH[k]=chrSheet(CIP[k]))}
function ciDrawChr(g,k,x,y,d,f,cut){var sh=ciSheet(k),n=cut||18;g.fillStyle='rgba(10,6,20,.35)';if(n===18)g.fillRect(x-4,y-1,8,2);g.drawImage(sh,f*12,d*18,12,n,x-6,y-17,12,n)}

// ---------- where you can walk: a 4px grid, blocked by the furniture (and the people), for the tap-to-walk route
var CIOB=[[0,0,360,42],[0,0,10,240],[350,0,10,240],[0,233,164,7],[196,233,164,7],
 [14,44,112,18],[176,46,16,14],[145,66,24,13],[199,66,24,13],[286,42,56,16],
 [15,85,90,22],[15,145,90,22],[146,104,76,46],[274,80,52,42],[274,134,52,42],[289,185,62,24],
 [117,83,14,14],[229,83,14,14],[117,173,14,14],[229,173,14,14],[10,128,12,10],[10,220,12,10],[118,220,12,10],[230,220,12,10]];
var CIG=null,CGS=4,CGW=90,CGH=60;
function ciGrid(){if(CIG)return CIG;CIG=new Uint8Array(CGW*CGH);var r=3,boxes=CIOB.slice();
 CIN.forEach(function(n){boxes.push([n.x-4,n.y-5,8,6])});
 for(var j=0;j<CGH;j++)for(var i=0;i<CGW;i++){var x=i*CGS+2,y=j*CGS+2,b=0;for(var k=0;k<boxes.length&&!b;k++){var o=boxes[k];if(x>o[0]-r&&x<o[0]+o[2]+r&&y>o[1]-r&&y<o[1]+o[3]+r)b=1}CIG[j*CGW+i]=b}
 // the doorway stays open down to the street
 for(j=57;j<CGH;j++)for(i=42;i<48;i++)CIG[j*CGW+i]=0;
 return CIG}
function ciFree(x,y){var G=ciGrid(),i=Math.floor(x/CGS),j=Math.floor(y/CGS);if(i<0||j<0||i>=CGW||j>=CGH)return false;return !G[j*CGW+i]}
function ciPath(x0,y0,x1,y1){var G=ciGrid(),s=Math.floor(y0/CGS)*CGW+Math.floor(x0/CGS),t=Math.floor(y1/CGS)*CGW+Math.floor(x1/CGS);
 if(t<0||t>=CGW*CGH)return null;
 if(G[t]){var best=-1,bd=1e9;for(var k=0;k<CGW*CGH;k++){if(G[k])continue;var dx=(k%CGW)*CGS+2-x1,dy=Math.floor(k/CGW)*CGS+2-y1,d=dx*dx+dy*dy;if(d<bd){bd=d;best=k}}if(best<0||bd>28*28)return null;t=best}
 var prev=new Int32Array(CGW*CGH).fill(-1),q=[s],h=0;prev[s]=s;
 while(h<q.length){var c=q[h++];if(c===t)break;var cx0=c%CGW,cy0=Math.floor(c/CGW);
  for(var d=0;d<8;d++){var dx2=[1,-1,0,0,1,1,-1,-1][d],dy2=[0,0,1,-1,1,-1,1,-1][d],nx=cx0+dx2,ny=cy0+dy2;if(nx<0||ny<0||nx>=CGW||ny>=CGH)continue;var n=ny*CGW+nx;if(prev[n]>=0||G[n])continue;
   if(dx2&&dy2&&(G[cy0*CGW+nx]||G[ny*CGW+cx0]))continue;prev[n]=c;q.push(n)}}
 if(prev[t]<0)return null;var P=[];for(var c2=t;c2!==s;c2=prev[c2])P.push([(c2%CGW)*CGS+2,Math.floor(c2/CGW)*CGS+2]);P.reverse();
 // drop the points a straight line can skip
 var out=[],cur=[x0,y0];for(var i=0;i<P.length;i++){var nxt=P[i+1];if(nxt&&ciLine(cur[0],cur[1],nxt[0],nxt[1]))continue;out.push(P[i]);cur=P[i]}return out}
function ciLine(x0,y0,x1,y1){var L=Math.hypot(x1-x0,y1-y0),n=Math.ceil(L/2);for(var i=1;i<=n;i++){var t=i/n;if(!ciFree(x0+(x1-x0)*t,y0+(y1-y0)*t))return false}return true}

// ---------- the spots where something happens
function ciLines(){return {
 guard:[TR('Добро пожаловать в «Золотой дракон».','Welcome to the Golden Dragon.'),TR('Без драк и без фото. Удачи за столами.','No fights, no photos. Good luck at the tables.')],
 bart:[TR('Что будешь? За рулём — значит, сок.','What’ll it be? You’re driving, so juice.'),TR('Слышал, по ночам на С1 опять гоняют.','I hear they race on the C1 again at night.'),TR('Хозяин сегодня не в духе. Лучше не стучи к нему.','The boss is in a mood today. Better not knock.')],
 slots:[TR('Автоматы ещё настраивают. Скоро заработают.','The machines are still being set up. Soon.')],
 croup:[TR('Стол откроется совсем скоро. Приходите с фишками.','The table opens very soon. Come back with chips.')],
 deal1:[TR('Малые ставки. Стол откроется скоро.','Small stakes. The table opens soon.')],
 deal2:[TR('Здесь играют по-крупному. Стол откроется скоро.','High stakes here. The table opens soon.')],
 race:[TR('Тотализатор готовят. Скоро можно будет ставить на заезды.','The tote isn’t ready yet. Soon you can bet on the races.')],
 cash:[TR('На счету','Balance')+' '+Math.floor(S.coins)+' ¥. '+TR('Ставки у нас прямо в иенах. Удачи!','We take bets straight in yen. Good luck!')],
 office:[TR('Заперто. За дверью кто-то говорит по телефону.','Locked. Someone behind the door is on the phone.')],
 bounc:[TR('VIP — только по приглашению.','VIP is by invitation only.'),TR('Выиграй по-крупному — тогда поговорим.','Win big, then we’ll talk.')]}}
var CIH_=[
 {id:'door',x:180,y:226,r:13,lb:['Выйти на улицу','Go outside']},
 {id:'bart',x:66,y:82,r:30,lb:['Поговорить с барменом','Talk to the bartender'],who:'bart'},
 {id:'slots',x:59,y:124,r:28,lb:['Слоты','Slots'],at:[59,84]},
 {id:'slots',x:59,y:184,r:26,lb:['Слоты','Slots'],at:[59,144]},
 {id:'race',x:184,y:90,r:26,lb:['Ставки на заезды','Race betting'],at:[184,34]},
 {id:'croup',x:184,y:158,r:32,lb:['Рулетка','Roulette'],who:'croup'},
 {id:'croup',x:184,y:96,r:20,lb:['Рулетка','Roulette'],who:'croup'},
 {id:'deal1',x:300,y:130,r:22,lb:['Блэкджек · малые ставки','Blackjack · small stakes'],who:'deal1'},
 {id:'deal2',x:300,y:182,r:16,lb:['Блэкджек · крупные ставки','Blackjack · high stakes'],who:'deal2'},
 {id:'cash',x:320,y:218,r:20,lb:['Касса','Cash desk'],who:'cash'},
 {id:'office',x:259,y:50,r:14,lb:['Кабинет хозяина','The owner’s office'],at:[259,14]},
 {id:'bounc',x:300,y:73,r:18,lb:['Лестница в VIP','Stairs to the VIP'],who:'bounc'}];

// ---------- state
var CI={on:false,x:180,y:222,d:1,ph:0,mv:false,path:null,hs:null,bub:null,fade:0,t:0,cnt:{},seen:false};
function ciNpc(id){for(var i=0;i<CIN.length;i++)if(CIN[i].id===id)return CIN[i];return null}
function ciSay(id,at){var L2=ciLines()[id];if(!L2)return;var n=CI.cnt[id]|0;CI.cnt[id]=n+1;var tx=L2[n%L2.length],np=ciNpc(id),ax=at?at[0]:np?np.x:CI.x,ay=at?at[1]:np?np.y-18:CI.y-18;
 if(np){var dx=CI.x-np.x,dy=CI.y-np.y;if(!np.cut&&np.id!=='guard')np.d=Math.abs(dx)>Math.abs(dy)?(dx<0?2:3):(dy<0?1:0)}
 CI.bub={x:ax,y:ay,tx:tx,t:3.2+tx.length*.03}}
function ciAct(){var h=CI.hs;if(!h)return;if(h.id==='door'){casExit();return}ciSay(h.id==='slots'||h.id==='race'||h.id==='office'?h.id:h.who,h.at)}

// ---------- the screen: its own pixel size (about 170 hall pixels across the short side), camera on Lyokha
function ciResize(){DPR=window.devicePixelRatio||1;var kc=Math.max(1,Math.round(Math.min(innerWidth,innerHeight)*DPR/170));CI.kc=kc;cv.width=Math.ceil(innerWidth*DPR/kc);cv.height=Math.ceil(innerHeight*DPR/kc);cv.style.width=(cv.width*kc/DPR)+'px';cv.style.height=(cv.height*kc/DPR)+'px';cx.imageSmoothingEnabled=false}
function ciCam(){var W=cv.width,H=cv.height,x=W>=CIW?CIW/2:clamp(CI.cx,W/2,CIW-W/2),y=H>=CIH+40?CIH/2:clamp(CI.cy,H/2-20,CIH-H/2+20);return [Math.round(x-W/2),Math.round(y-H/2)]}
function ciRender(){var g=cx,W=cv.width,H=cv.height,o=ciCam(),ox=o[0],oy=o[1],t=TIME,i,j;CI.ox=ox;CI.oy=oy;
 g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over';g.fillStyle='#0c0a14';g.fillRect(0,0,W,H);g.drawImage(casInBg(),-ox,-oy);
 function R(a,b,w,h,col){g.fillStyle=col;g.fillRect(a-ox,b-oy,w,h)}
 // the slot toppers blink, little cars lap the race screens, the ball runs round the wheel, the office lamp
 for(j=0;j<2;j++)for(i=0;i<5;i++){var on=(Math.floor(t*3+i*.7+j*1.3)%3)===0,cc=['#ff4a5a','#3ad0ff','#7dff6a','#ffd23a','#b06aff'][(i+j*2)%5];R(16+i*18+5,86+j*60+1,4,3,on?'#fff6d8':cc)}
 for(i=0;i<3;i++){var bx=140+i*31,by=13;for(var k=0;k<3;k++){var u=((t*(14+k*3+i*2)+k*19+i*7)%56+56)%56,px,py;if(u<19){px=bx+4+u;py=by+4}else if(u<28){px=bx+23;py=by+4+(u-19)}else if(u<47){px=bx+23-(u-28);py=by+13}else{px=bx+4;py=by+13-(u-47)}R(Math.round(px)-1,Math.round(py)-1,2,2,['#ff4a5a','#3ad0ff','#ffd23a'][k])}}
 var ba=-t*2.4;R(Math.round(166+Math.cos(ba)*9.5),Math.round(126+Math.sin(ba)*9.5),1,1,'#ffffff');
 R(257,9,4,3,Math.sin(t*3)>0?'#ff2a2a':'#5a1010');
 // people, back to front
 var L2=CIN.map(function(n){return {k:n.p,x:n.x,y:n.y,d:n.d,f:0,cut:n.cut}});
 var fr=0;if(CI.mv){var q=Math.floor(CI.ph/4);fr=CI.d>=2?[1,2][q%2]:[1,0,2,0][q%4]}
 L2.push({k:'hero',x:Math.round(CI.x),y:Math.round(CI.y),d:CI.d,f:fr,hero:1});L2.sort(function(a,b){return a.y-b.y});
 L2.forEach(function(p){ciDrawChr(g,p.k,p.x-ox,p.y-oy,p.d,p.f,p.cut)});
 // where a tap sent him
 if(CI.path&&CI.path.length&&CI.tgt){var r2=2+Math.round((Math.sin(t*8)+1)*1.2);g.fillStyle='rgba(255,210,58,.9)';var tx=CI.tgt[0]-ox,ty=CI.tgt[1]-oy;g.fillRect(tx-r2,ty,1,1);g.fillRect(tx+r2,ty,1,1);g.fillRect(tx,ty-r2,1,1);g.fillRect(tx,ty+r2,1,1)}
 if(CI.fade>0){g.fillStyle='rgba(8,6,14,'+CI.fade.toFixed(3)+')';g.fillRect(0,0,W,H)}
 ciBubble()}
function ciBubble(){var e=$('cab');if(!e)return;var b=CI.bub;if(!b||b.t<=0){if(e.style.display!=='none')e.style.display='none';return}
 if(e._tx!==b.tx){e.textContent=b.tx;e._tx=b.tx}e.style.display='block';var s=CI.kc/DPR;e.style.left=Math.round((b.x-CI.ox)*s)+'px';e.style.top=Math.round((b.y-CI.oy)*s)+'px'}

// ---------- moving
var CIK={l:0,r:0,u:0,d:0};
function ciMove(mx,my){var nx=CI.x+mx,ny=CI.y+my,ok=false;if(ciFree(nx,ny)){CI.x=nx;CI.y=ny;ok=true}else if(mx&&ciFree(nx,CI.y)){CI.x=nx;ok=true}else if(my&&ciFree(CI.x,ny)){CI.y=ny;ok=true}
 if(ok){CI.ph+=Math.hypot(mx,my);CI.mv=true;if(Math.abs(mx)>.01||Math.abs(my)>.01)CI.d=Math.abs(mx)>Math.abs(my)?(mx<0?2:3):(my<0?1:0)}return ok}
function ciUpdate(dt){var sp=54;CI.mv=false;
 var kx=(CIK.r?1:0)-(CIK.l?1:0),ky=(CIK.d?1:0)-(CIK.u?1:0);
 if(kx||ky){CI.path=null;CI.auto=null;var L=Math.hypot(kx,ky);ciMove(kx/L*sp*dt,ky/L*sp*dt)}
 else if(CI.path&&CI.path.length){var p=CI.path[0],dx=p[0]-CI.x,dy=p[1]-CI.y,d=Math.hypot(dx,dy);if(d<1){CI.path.shift()}else{var st=Math.min(d,sp*dt);if(!ciMove(dx/d*st,dy/d*st)){CI.path=null}}}
 if(CI.path&&!CI.path.length){CI.path=null;if(CI.auto&&CI.hs===CI.auto)ciAct();CI.auto=null}
 if(CI.y>232){casExit();return}
 // the nearest spot within reach
 var best=null,bd=1e9;CIH_.forEach(function(h){var d2=Math.hypot(h.x-CI.x,h.y-CI.y);if(d2<h.r&&d2<bd){bd=d2;best=h}});
 if(best!==CI.hs){CI.hs=best;var b=$('cap');if(b){if(best){b.textContent=TR(best.lb[0],best.lb[1]);b.style.display='block'}else b.style.display='none'}}
 if(CI.auto&&!CI.path){if(CI.hs===CI.auto)ciAct();CI.auto=null}
 if(CI.bub){CI.bub.t-=dt;if(Math.hypot(CI.bub.x-CI.x,CI.bub.y+18-CI.y)>90)CI.bub.t=0}
 CI.cx+=(CI.x-CI.cx)*Math.min(1,dt*6);CI.cy+=(CI.y-CI.cy)*Math.min(1,dt*6);
 if(CI.fade>0)CI.fade=Math.max(0,CI.fade-dt*2.5);
 if(CI.hint>0){CI.hint-=dt;if(CI.hint<=0){var hn=$('cahn');if(hn)hn.style.display='none'}}}
function ciLoop(t){if(mode!=='cas'||!CI.on)return;var dt=Math.min(.05,Math.max(0,(t-CI.last)/1000));CI.last=t;TIME+=dt;ciUpdate(dt);if(CI.on)ciRender();requestAnimationFrame(ciLoop)}
// a tap: walk there; a tap on someone or something you can use: walk up and use it
function ciTap(e){if(mode!=='cas')return;var s=DPR/CI.kc,rx=e.clientX*s+CI.ox,ry=e.clientY*s+CI.oy,h=null;
 CIN.forEach(function(n){if(h||!n.id)return;var top=n.y-17,bot=n.y-17+(n.cut||18);if(rx>n.x-7&&rx<n.x+7&&ry>top-2&&ry<bot+2)CIH_.forEach(function(q){if(!h&&q.who===n.id)h=q})});
 if(!h)CIH_.forEach(function(q){if(!h&&q.id!=='door'&&Math.hypot(q.x-rx,q.y-ry)<Math.min(q.r,16))h=q});
 if(!h&&q2(ry))h=CIH_[0];
 function q2(y){return y>226&&rx>160&&rx<200}
 var tx=h?h.x:rx,ty=h?h.y:ry;if(h&&h.id==='door')ty=236;
 var P=ciPath(CI.x,CI.y,tx,Math.min(ty,233.5));if(h&&h.id==='door'&&P)P.push([180,236]);
 CI.path=P;CI.tgt=P&&P.length?P[P.length-1]:null;CI.auto=h&&h.id!=='door'?h:null;if(P&&!P.length&&h){CI.path=null;if(CI.hs===h)ciAct()}}

// ---------- in and out
function casUi(on){var G=$('game');var u=$('casui');
 if(!u){u=document.createElement('div');u.id='casui';
  u.innerHTML='<div class="ctop"><div class="cti"><b>'+TR('«Золотой дракон»','The Golden Dragon')+'</b><span id="cacn"></span></div><button id="cax">'+TR('Выйти','Leave')+'</button></div><div id="cab"></div><div id="cahn"></div><button id="cap"></button>';
  G.appendChild(u);$('cax').onclick=function(){casExit()};$('cap').onclick=function(){ciAct()};
  cv.addEventListener('pointerdown',function(e){if(mode!=='cas')return;e.preventDefault();CI.drag=true;ciTap(e)});
  cv.addEventListener('pointermove',function(e){if(mode!=='cas'||!CI.drag)return;var n=performance.now();if(n-(CI.dt0||0)<140)return;CI.dt0=n;ciTap(e)});
  addEventListener('pointerup',function(){CI.drag=false});
  var st=document.createElement('style');st.textContent='#casui{position:absolute;inset:0;pointer-events:none;display:none}#casui .ctop{position:absolute;left:0;right:0;top:calc(8px + env(safe-area-inset-top));display:flex;justify-content:space-between;align-items:flex-start;padding:0 10px}'+
   '#casui .cti{background:rgba(23,18,38,.9);border:3px solid #ffd23a;padding:5px 9px;box-shadow:3px 3px 0 rgba(255,61,139,.45);font-size:13px;line-height:1.25}#casui .cti b{display:block;color:#ffd23a}#casui .cti span{font-size:11px;color:var(--muted)}'+
   '#cax,#cap{pointer-events:auto;border:0;background:var(--pk);color:#2a0d1c;font-weight:900;font-size:15px;padding:9px 14px;box-shadow:3px 3px 0 var(--pk2)}'+
   '#cap{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(22px + env(safe-area-inset-bottom));display:none;background:#ffd23a;color:#2a1a0a;box-shadow:3px 3px 0 #b8862a;white-space:nowrap}'+
   '#cab{position:absolute;display:none;transform:translate(-50%,-100%);max-width:min(64vw,260px);background:#fbeff6;color:#1c1428;border:3px solid #14101e;padding:5px 8px;font-size:13px;line-height:1.3;text-align:center;font-weight:700;box-shadow:3px 3px 0 rgba(10,6,20,.5)}'+
   '#cab:after{content:"";position:absolute;left:50%;bottom:-9px;margin-left:-5px;border:5px solid transparent;border-top-color:#14101e}'+
   '#cahn{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(74px + env(safe-area-inset-bottom));display:none;background:rgba(23,18,38,.9);color:var(--ink);padding:6px 10px;font-size:12px;border:2px solid var(--line);white-space:nowrap}'+
   '#csq{display:none;pointer-events:auto;margin-top:8px;width:186px;background:rgba(23,18,38,.94);border:3px solid #ffd23a;padding:8px 10px 10px;text-align:left;text-shadow:none;box-shadow:4px 4px 0 rgba(255,61,139,.45)}#csq.on{display:block;animation:zpin .25s ease-out}'+
   '#csq .zk{font-size:11px;letter-spacing:.16em;color:#ffd23a}#csq .zn{font-size:16.5px;margin:2px 0 5px;line-height:1.1}#csq .zi{font-size:11px;color:var(--muted);font-weight:400;line-height:1.4}'+
   '#csq button{width:100%;margin-top:8px;border:0;padding:9px 0;font-size:16.5px;font-weight:900;background:#ffd23a;color:#2a1a0a;box-shadow:3px 3px 0 #b8862a}';
  document.head.appendChild(st)}
 u.style.display=on?'block':'none';if(on){u.classList.remove('ixs');u.querySelector('.cti b').textContent=TR('«Золотой дракон»','The Golden Dragon')}if(!on){$('cab').style.display='none';$('cap').style.display='none';$('cahn').style.display='none'}}
function casCanEnter(){return mode==='game'&&!!CAS&&!!car&&!ZS&&!DLG&&!(typeof ST!=='undefined'&&ST.act)&&!(typeof NET!=='undefined'&&NET.on)&&!(typeof TD!=='undefined'&&TD.on)}
function casDoor(){return {x:CAS.x+164,y:CAS.y+CAS.h+8}}
function casEnter(){if(CI.on||!casCanEnter())return;try{if(run)bank()}catch(e){}
 if(!window._tdbCas&&window.tdBack){var ob=window.tdBack;window.tdBack=function(){if(mode==='cas'){if(typeof CGM!=='undefined'&&CGM.on){cgClose();return true}casExit();return true}return ob()};window._tdbCas=1}
 CI.on=true;mode='cas';K.l=K.r=K.t=K.b=K.h=0;CIK.l=CIK.r=CIK.u=CIK.d=0;auStop();var cq=$('csq');if(cq)cq.classList.remove('on');
 $('hud').style.display='none';$('ctl').style.display='none';casUi(true);
 CI.x=180;CI.y=224;CI.cx=CI.x;CI.cy=CI.y;CI.d=1;CI.path=null;CI.auto=null;CI.bub=null;CI.hs=null;CI.fade=1;CI.mv=false;$('cap').style.display='none';
 $('cacn').textContent=Math.floor(S.coins)+' ¥';ciResize();CIN.forEach(function(n){if(n.id==='croup')n.d=3;else if(n.id==='bounc'||n.id==='deal1'||n.id==='deal2'||n.id==='cash')n.d=0});
 var hn=$('cahn');hn.textContent=document.body.classList.contains('kb')?TR('Стрелки — идти · Enter — действие · Esc — выйти','Arrows — walk · Enter — act · Esc — leave'):TR('Нажимай на пол, чтобы идти','Tap the floor to walk');
 if(!CI.seen){hn.style.display='block';CI.hint=5;CI.seen=true}
 setTimeout(function(){if(CI.on)ciSay('guard')},450);
 CI.last=performance.now();requestAnimationFrame(ciLoop)}
function casExit(){if(!CI.on)return;if(typeof CGM!=='undefined'&&CGM.on){if(CGM.g.busy&&CGM.g.busy())return;cgClose()}CI.on=false;casUi(false);mode='game';CIK.l=CIK.r=CIK.u=CIK.d=0;
 var d=casDoor();car.x=d.x;car.y=d.y+4;car.a=0;car.vx=car.vy=car.w=0;car.sp=0;car.l=0;cam.x=car.x;cam.y=car.y;CI.away=false;
 $('hud').style.display='block';$('ctl').style.display='block';applyCtl();resize();MMCX=null;if(S.snd)auStart();last=performance.now();requestAnimationFrame(loop)}
addEventListener('resize',function(){if(mode==='cas')ciResize()});
// keys: walk, act, leave (taken before the game's own key handler, which would swallow them)
addEventListener('keydown',function(e){
 if(mode==='cas'){if(typeof CGM!=='undefined'&&CGM.on){var tg=e.target;if(tg&&tg.tagName==='INPUT'){if(e.code==='Enter'||e.code==='NumpadEnter'){e.preventDefault();var ob=tg.parentNode.querySelector('button');if(ob)ob.click()}else if(e.code==='Escape'){e.preventDefault();tg.blur()}e.stopImmediatePropagation();return}if(typeof cgKey==='function')cgKey(e);e.preventDefault();e.stopImmediatePropagation();return}var c=e.code,m={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d'}[c];
  if(m){CIK[m]=1}else if(!e.repeat&&(c==='Enter'||c==='NumpadEnter'||c==='Space'||c==='KeyE'))ciAct();else if(!e.repeat&&(c==='Escape'||c==='Backspace'))casExit();
  e.preventDefault();e.stopImmediatePropagation();return}
 if(mode==='game'&&(e.code==='Enter'||e.code==='NumpadEnter')&&!e.repeat){var q=$('csq');if(q&&q.classList.contains('on')&&!document.querySelector('#zp.on,#sq.on')&&!DLG){e.preventDefault();e.stopImmediatePropagation();casEnter()}}},true);
addEventListener('keyup',function(e){if(mode!=='cas')return;var m={ArrowLeft:'l',KeyA:'l',ArrowRight:'r',KeyD:'r',ArrowUp:'u',KeyW:'u',ArrowDown:'d',KeyS:'d'}[e.code];if(m)CIK[m]=0;e.stopImmediatePropagation()},true);

// ---------- in the city: the card by the carpet, a gold ring on the kerb, the mark on the map
function casCard(){var q=$('csq');if(q)return q;var zp=$('zp');if(!zp)return null;q=document.createElement('div');q.id='csq';
 q.innerHTML='<div class="zk">'+TR('КАЗИНО','CASINO')+'</div><div class="zn">'+TR('«Золотой дракон»','The Golden Dragon')+'</div><div class="zi">'+TR('Слоты, рулетка, блэкджек и ставки на заезды.','Slots, roulette, blackjack and race betting.')+'</div><button>'+TR('Войти','Go in')+'</button>';
 zp.parentNode.insertBefore(q,zp.nextSibling);q.querySelector('button').onclick=function(){casEnter()};if(!$('casui'))casUi(false);return q}
var _hudCas=hud;hud=function(dt){_hudCas(dt);if(!CAS||!car||mode!=='game')return;var q=casCard();if(!q)return;var d=casDoor(),dist=Math.hypot(wd(car.x,d.x),wd(car.y,d.y)),show=dist<38&&car.sp<90&&casCanEnter();
 if(show!==q.classList.contains('on')){q.classList.toggle('on',show);if(show){q.querySelector('.zk').textContent=TR('КАЗИНО','CASINO');q.querySelector('.zn').textContent=TR('«Золотой дракон»','The Golden Dragon');q.querySelector('.zi').textContent=TR('Слоты, рулетка, блэкджек и ставки на заезды.','Slots, roulette, blackjack and race betting.');q.querySelector('button').textContent=TR('Войти','Go in')}}};
var _dzCi=drawZones;drawZones=function(l){_dzCi(l);if(l!==0||!CAS||!car||mode!=='game'||!casCanEnter())return;var d=casDoor();if(Math.hypot(wd(car.x,d.x),wd(car.y,d.y))>280)return;
 var x=SX(d.x),y=SY(d.y),r=8+Math.round((Math.sin(TIME*3)+1)*1.5);cx.fillStyle='rgba(255,210,58,.85)';for(var a=0;a<24;a++){var an=a/24*TAU;cx.fillRect(Math.round(x+Math.cos(an)*r),Math.round(y+Math.sin(an)*r*.6),1,1)}cx.fillStyle='rgba(255,210,58,.5)';cx.fillRect(x-1,y-1,2,2)};
// on the big map: a casino chip with its name, placed like the other landmarks (it dodges the other labels)
MAPG.chip=['..YYY..','.YRRRY.','YRWRWRY','YRRYRRY','YRWRWRY','.YRRRY.','..YYY..'];MAPK.casino=['chip','Казино'];
var _mbCas=mapBase;mapBase=function(s){if(MAPB&&MAPBS===s)return MAPB;if(!CAS)return _mbCas(s);var fake={k:'casino',x:CAS.x,y:CAS.y,w:CAS.w,h:CASB};SPEC.push(fake);try{return _mbCas(s)}finally{var i=SPEC.indexOf(fake);if(i>=0)SPEC.splice(i,1)}};
// on the little map in the corner: the chip shows up once the casino is in range
var _dmCas=drawMini;drawMini=function(){_dmCas();try{if(!CAS||!car||!MMCX)return;var g=MMCX,rot=camRot(),k=MMS/(2*MMR),th=rot?-Math.PI/2-(cam.a||0):0,ct=Math.cos(th),st=Math.sin(th),dx=wd(CAS.x+CAS.w/2,car.x),dy=wd(CAS.y+CASB/2,car.y),X=MMS/2+(dx*ct-dy*st)*k,Y=MMS/2+(dx*st+dy*ct)*k,u=Math.max(1,Math.round(DPR*.8));if(X<4*u||Y<4*u||X>MMS-4*u||Y>MMS-4*u)return;mapGlyph(g,'chip',X,Y,u)}catch(e){}};

Object.assign(ZH,{'КАЗИНО':'赌场','«Золотой дракон»':'“金龙”','Слоты, рулетка, блэкджек и ставки на заезды.':'老虎机、轮盘、二十一点和赛车投注。','Войти':'进去','Выйти':'离开','Казино':'赌场',
 'Нажимай на пол, чтобы идти':'点击地面行走','Стрелки — идти · Enter — действие · Esc — выйти':'方向键行走 · Enter 互动 · Esc 离开',
 'Выйти на улицу':'到外面去','Поговорить с барменом':'和酒保聊聊','Слоты':'老虎机','Ставки на заезды':'赛车投注','Рулетка':'轮盘','Блэкджек · малые ставки':'二十一点 · 小注','Блэкджек · крупные ставки':'二十一点 · 大注','Касса':'收银台','Кабинет хозяина':'老板办公室','Лестница в VIP':'通往VIP的楼梯',
 'Добро пожаловать в «Золотой дракон».':'欢迎光临“金龙”。','Без драк и без фото. Удачи за столами.':'不准打架，不准拍照。祝你好运。','Что будешь? За рулём — значит, сок.':'喝点什么？开车的话，就喝果汁吧。','Слышал, по ночам на С1 опять гоняют.':'听说晚上又有人在C1上飙车了。','Хозяин сегодня не в духе. Лучше не стучи к нему.':'老板今天心情不好。最好别去敲他的门。',
 'Автоматы ещё настраивают. Скоро заработают.':'机器还在调试，很快就能玩了。','Стол откроется совсем скоро. Приходите с фишками.':'这张桌子马上就开。请带着筹码来。','Малые ставки. Стол откроется скоро.':'小注桌，很快开放。','Здесь играют по-крупному. Стол откроется скоро.':'这里玩的是大注。很快开放。',
 'Тотализатор готовят. Скоро можно будет ставить на заезды.':'投注站还在准备，很快就能押比赛了。','На счету':'账户余额','Ставки у нас прямо в иенах. Удачи!':'这里直接用日元下注。祝你好运！','Заперто. За дверью кто-то говорит по телефону.':'锁着。门后有人在打电话。','VIP — только по приглашению.':'VIP仅限受邀。','Выиграй по-крупному — тогда поговорим.':'赢一大笔，我们再谈。'});
Object.assign(EN,{'Казино':'Casino'});

// ===== SPRITES =====
var USR=[".KKK.........................",".KDKKKKKK.........KKKKKK.....",".KDKKKKKKKKKKKKKKKKKKKKKKKK..","RKDKPPPPPKMMMMMMMMMMMKPPKOKK.","RKPKKKKKKKKKKKKKKKKKKKPPKYYYK","RKPPKPPPPKKPPPPPPPKKKKPPPKKKK",".KPPKPPPPKKPPPPPPPKKKKPPPPPPK",".KPPKDDDDKKDDDDDDDKKKKDDDDDDK",".KPPKDDDDKKDDDDDDDKKKKDDDDDDK",".KPPKDDDDKKDDDDDDDKKKKDDDDDDK",".KPPKPPPPKKPPPPPPPKKKKPPPPPPK","RKPPKPPPPKKPPPPPPPKKKKPPPKKKK","RKPKKKKKKKKKKKKKKKKKKKPPKYYYK","RKDKPPPPPKMMMMMMMMMMMKPPKOKK.",".KDKKKKKKKKKKKKKKKKKKKKKKKK..",".KDKKKKKK.........KKKKKK.....",".KKK........................."];
function mkCanvas(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c}
function gridToCanvas(rows,pal){var h=rows.length,w=rows[0].length,c=mkCanvas(w,h),x=c.getContext('2d');for(var j=0;j<h;j++)for(var i=0;i<w;i++){var ch=rows[j][i];if(ch==='.'||!pal[ch])continue;x.fillStyle=pal[ch];x.fillRect(i,j,1,1)}return c}
var CK='#0d0e16';
function vehGrid(o){
 var L=o.L,H=o.H,T=H+2,g=[],i,j;for(j=0;j<T;j++){var r=[];for(i=0;i<L;i++)r.push('.');g.push(r)}
 function S(x,y,c){if(y>=0&&y<T&&x>=0&&x<L)g[y][x]=c}
 for(j=1;j<=H;j++)for(i=0;i<L;i++)S(i,j,'B');
 for(i=0;i<L;i++){S(i,1,'K');S(i,H,'K')}for(j=1;j<=H;j++){S(0,j,'K');S(L-1,j,'K')}
 S(0,1,'.');S(L-1,1,'.');S(0,H,'.');S(L-1,H,'.');
 for(i=1;i<L-1;i++){S(i,2,'M');S(i,H-1,'M')}
 var ax=[Math.round(L*(o.ra||.2)),Math.round(L*(o.fa||.77))];ax.forEach(function(a){for(var k=-2;k<2;k++){S(a+k,0,'K');S(a+k,T-1,'K')}});
 var c=1;o.segs.forEach(function(sg){var t=sg[0],n=sg[1];for(var k=0;k<n;k++,c++){
  for(j=3;j<=H-2;j++){
   if(t==='rw'||t==='ws'){S(c,j,'W');if(t==='ws'&&k===n-1&&j>3&&j<H-2)S(c,j,'w')}
   else if(t==='rf')S(c,j,(j===3||j===H-2)?'B':'L');
   else if(t==='bx')S(c,j,(c%3===0)?'x':'X');
   else if(t==='bd')S(c,j,(j===3||j===H-2||k===0||k===n-1)?'K':'G');
   else if(t==='sep')S(c,j,'K');
  }
  if(t==='bx'||t==='bd'){S(c,2,t==='bx'?'X':'K');S(c,H-1,t==='bx'?'X':'K')}
 }});
 S(1,2,'R');S(1,3,'R');S(1,H-1,'R');S(1,H-2,'R');S(L-2,2,'Y');S(L-2,3,'Y');S(L-2,H-1,'Y');S(L-2,H-2,'Y');
 if(o.mir){S(o.mir,1,'K');S(o.mir,H,'K');S(o.mir,0,'K');S(o.mir,T-1,'K')}
 if(o.post)o.post(S,L,H);
 return g.map(function(r){return r.join('')});
}
function segMirror(o){var c=1,m=0;o.segs.forEach(function(s){if(s[0]==='ws')m=c;c+=s[1]});return m}
var VTY=[
 {nm:'kei',L:21,H:12,segs:[['tr',1],['rw',2],['rf',8],['ws',3],['hd',5]],cols:['#ece7da','#a9d9c9','#f4c9c9','#efe08f','#c9cdd9','#ffffff','#87b8e8'],w:3,v:150},
 {nm:'sedan',L:27,H:13,segs:[['tr',4],['rw',3],['rf',7],['ws',4],['hd',7]],cols:['#f2f2f2','#c3c8d2','#23283a','#2b3c6c','#8b1d26','#5b6573','#e8e8e8'],w:5,v:170},
 {nm:'coupe',L:27,H:13,segs:[['tr',3],['rw',3],['rf',5],['ws',4],['hd',10]],cols:['#e03a3a','#f2c230','#3a7de0','#f2f2f2','#1d1f28','#e86a20'],w:1.5,v:200,post:function(S,L,H){for(var i=3;i<L-3;i++){S(i,Math.floor(H/2),'Z');S(i,Math.floor(H/2)+1,'Z')}}},
 {nm:'taxi',L:27,H:13,segs:[['tr',4],['rw',3],['rf',7],['ws',4],['hd',7]],cols:['#1f2742','#f0c23a','#3f9a6a'],w:2,v:165,post:function(S,L,H){for(var j=5;j<=H-4;j++){S(13,j,'O');S(14,j,'O')}S(13,Math.floor(H/2)+1,'w');S(14,Math.floor(H/2)+1,'w')}},
 {nm:'police',L:27,H:13,segs:[['tr',4],['rw',3],['rf',7],['ws',4],['hd',7]],cols:['#f4f4f4'],sh:'#14161e',w:.6,v:175,post:function(S,L,H){for(var j=4;j<=H-3;j++){S(14,j,j<H/2+.5?'R':'r');S(15,j,j<H/2+.5?'R':'r')}}},
 {nm:'van',L:29,H:14,segs:[['rw',2],['rf',17],['ws',4],['hd',4]],cols:['#f2f2f2','#c3c8d2','#3c4a5c','#d8c8a8','#5a7aa0'],w:2.5,v:155,post:function(S,L,H){for(var i=4;i<19;i+=4)for(var j=4;j<=H-3;j++)S(i,j,'B')}},
 {nm:'ktruck',L:23,H:12,segs:[['bd',11],['sep',1],['rf',4],['ws',3],['hd',2]],cols:['#f2f2f2','#c3c8d2'],w:1.2,v:140},
 {nm:'truck',L:40,H:15,ra:.18,fa:.84,segs:[['bx',26],['sep',1],['rf',5],['ws',3],['hd',3]],cols:['#3a6aa8','#f2f2f2','#2f8a50','#c84a30'],box:['#e8eaf0','#d0d4dc','#f2f2f2','#b8c4d4'],w:1.1,v:135},
 {nm:'bus',L:52,H:16,ra:.17,fa:.84,segs:[['rf',44],['ws',4],['hd',2]],cols:['#3a9a5a','#3a6ab8','#e0a030'],w:.9,v:130,post:function(S,L,H){for(var i=6;i<14;i++)for(var j=5;j<=H-4;j++)S(i,j,'G');for(i=26;i<32;i++)for(var j2=5;j2<=H-4;j2++)S(i,j2,'G');for(i=3;i<L-6;i+=3){S(i,2,'W');S(i,H-1,'W')}}},
 {nm:'suv',L:28,H:14,segs:[['tr',2],['rw',2],['rf',12],['ws',4],['hd',6]],cols:['#2a2e38','#f2f2f2','#5a6a4a','#8b1d26','#c3c8d2'],w:2,v:165,post:function(S,L,H){for(var i=6;i<18;i++){S(i,3,'G');S(i,H-2,'G')}}}
];
VTY.forEach(function(v){v.grid=vehGrid({L:v.L,H:v.H,segs:v.segs,ra:v.ra,fa:v.fa,mir:segMirror(v),post:v.post});v.hx=v.L/2-.5;v.hy=(v.H+1)/2});
function vehPal(v,ci){var b=v.cols[ci%v.cols.length];return{K:CK,B:b,M:v.sh||shadeHex(b,.72),L:shadeHex(b,1.16),W:'#1c2338',w:'#8395c4',R:'#e0303c',r:'#f06a70',Y:'#fff0a0',O:'#f0a030',G:'#9aa2b4',X:v.box?v.box[ci%v.box.length]:b,x:v.box?shadeHex(v.box[ci%v.box.length],.82):b,Z:'#f4f4f4'}}
var VSPR=[];
function buildVehSprites(){VSPR=VTY.map(function(v){var a=[];for(var c=0;c<Math.max(6,v.cols.length);c++)a.push(gridToCanvas(v.grid,vehPal(v,c)));return a})}
// player cars
var CARS=[
 {n:'Сакура S',grid:USR,pw:300,vmax:400,grip:1,turn:2.85,dturn:2.85,hx:13.5,hy:7.5,m:1,fw:[6,7],price:0,desc:'Лёгкая и послушная'},
 {n:'Громила V8',grid:null,pw:370,vmax:430,grip:.92,turn:2.6,dturn:3.05,hx:15,hy:8,m:1.25,fw:[8,8],price:3000,desc:'Много мощности, тяжёлый зад'},
 {n:'Молния GT',grid:null,pw:340,vmax:470,grip:1.12,turn:3.0,dturn:2.8,hx:14,hy:7.5,m:1,fw:[8,7],price:8000,desc:'Быстрая, цепкая, точная'}
];
(function(){
 function wing(S,H){for(var j=0;j<=H+1;j++){S(1,j,'K');S(3,j,'K');S(2,j,(j===0||j===H+1)?'K':'D')}}
 var g1=vehGrid({L:31,H:15,ra:.22,fa:.78,segs:[['tr',4],['rw',3],['rf',6],['ws',4],['hd',12]],mir:15,post:function(S,L,H){for(var i=4;i<L-2;i++){if((i>=5&&i<=7)||(i>=14&&i<=17))continue;S(i,6,'D');S(i,10,'D')}for(var j=7;j<=9;j++){S(22,j,'K');S(23,j,'K')}wing(S,H)}});
 var g2=vehGrid({L:29,H:13,ra:.24,fa:.78,segs:[['tr',3],['rw',3],['rf',6],['ws',4],['hd',10]],mir:14,post:function(S,L,H){for(var i=4;i<L-2;i++){if((i>=4&&i<=6)||(i>=13&&i<=16))continue;S(i,6,'D');S(i,7,'D');S(i,8,'D')}wing(S,H)}});
 CARS[1].grid=g1;CARS[2].grid=g2;
 // ---- hand-styled player cars (v2) ----
 function PG(L,W){var g=[],i,j;for(j=0;j<W;j++){var r=[];for(i=0;i<L;i++)r.push('.');g.push(r)}
  var o={L:L,W:W,g:g,S:function(x,y,c){x=Math.round(x);y=Math.round(y);if(y>=0&&y<W&&x>=0&&x<L)g[y][x]=c},G:function(x,y){return(y>=0&&y<W&&x>=0&&x<L)?g[y][x]:'.'},
   body:function(hw){var cy=(W-1)/2;for(var x=0;x<L;x++){var h=hw(x);if(h<0)continue;for(var y=0;y<W;y++)if(Math.abs(y-cy)<=h+.01)g[y][x]='B'}},
   outline:function(){var e=[];for(var y=0;y<W;y++)for(var x=0;x<L;x++){if(g[y][x]==='.')continue;if(o.G(x-1,y)==='.'||o.G(x+1,y)==='.'||o.G(x,y-1)==='.'||o.G(x,y+1)==='.')e.push([x,y])}e.forEach(function(q){g[q[1]][q[0]]='K'})},
   sides:function(c){for(var x=0;x<L;x++)for(var y=1;y<W-1;y++){if(g[y][x]!=='B')continue;if(g[y-1][x]==='K'||g[y+1][x]==='K')g[y][x]=c}},
   ell:function(cx0,cy0,rx,ry,fn){for(var y=0;y<W;y++)for(var x=0;x<L;x++){var dx=(x-cx0)/rx,dy=(y-cy0)/ry;if(dx*dx+dy*dy<=1)fn(x,y,dx,dy)}},
   line:function(x0,y0,x1,y1,c){var n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))*2;for(var k=0;k<=n;k++)o.S(x0+(x1-x0)*k/n,y0+(y1-y0)*k/n,c)},
   tire:function(x0,x1,y){for(var x=x0;x<=x1;x++)o.S(x,y,(x-x0)%2?'t':'T')},
   rows:function(){return g.map(function(r){return r.join('')})}};return o}
 // Громила V8 — muscle car: long hood, supercharger, twin stripes, chrome
 var m=PG(34,17),cy=8;
 m.body(function(x){return x===0?5:x===1?6:x<=31?7:x===32?6.5:5.5});
 m.outline();m.sides('M');
 for(var x=3;x<=32;x++){[5,6,10,11].forEach(function(y){if(m.G(x,y)==='B')m.S(x,y,'D')})}
 for(x=21;x<=30;x++){m.S(x,3,'L');m.S(x,13,'L')}
 for(x=4;x<=9;x++){m.S(x,3,'L');m.S(x,13,'L')}
 // rear: chrome bumper, wide tail lights, ducktail
 for(var y=2;y<=14;y++)m.S(1,y,'C');m.S(1,2,'c');m.S(1,14,'c');
 for(y=3;y<=13;y++)m.S(2,y,(y<=6||y>=10)?'R':'V');m.S(2,3,'r');m.S(2,13,'r');
 for(y=2;y<=14;y++)m.S(3,y,'S');
 // cabin
 for(x=11;x<=20;x++){m.S(x,3,'W');m.S(x,13,'W')}
 for(x=11;x<=12;x++)for(y=4;y<=12;y++)m.S(x,y,'W');m.S(12,5,'w');m.S(12,11,'w');
 for(x=13;x<=17;x++)for(y=4;y<=12;y++)m.S(x,y,(y===5||y===6||y===10||y===11)?'D':'B');
 for(x=13;x<=17;x++){m.S(x,4,'L')}
 for(x=18;x<=20;x++)for(y=3;y<=13;y++)m.S(x,y,'W');m.S(18,3,'K');m.S(18,13,'K');m.S(19,5,'w');m.S(20,6,'w');m.S(19,10,'w');
 // supercharger + scoop
 for(x=23;x<=29;x++)for(y=6;y<=10;y++)m.S(x,y,'K');
 for(x=24;x<=27;x++){m.S(x,7,'C');m.S(x,8,x%2?'c':'C');m.S(x,9,'c')}
 for(y=7;y<=9;y++)m.S(28,y,'V');m.S(22,8,'c');
 // front: grille, quad headlights
 for(y=4;y<=12;y++)m.S(32,y,'V');m.S(32,3,'K');m.S(32,13,'K');
 m.S(31,2,'Y');m.S(31,3,'Y');m.S(31,13,'Y');m.S(31,14,'Y');m.S(32,2,'C');m.S(32,14,'C');
 for(y=5;y<=11;y++)m.S(33,y,'K');
 // exhaust tips, mirrors, fat tires
 m.S(0,4,'C');m.S(0,5,'c');m.S(0,11,'c');m.S(0,12,'C');
 m.S(18,0,'K');m.S(19,0,'M');m.S(18,16,'K');m.S(19,16,'M');
 m.tire(5,10,0);m.tire(5,10,16);m.tire(24,28,0);m.tire(24,28,16);
 // Молния GT — wedge supercar: canopy, louvers, big wing, bolt decal
 var q=PG(33,15);cy=7;
 function qhw(x){if(x<2)return -1;if(x===2)return 5;if(x<=21)return 6;return Math.max(2.6,6-(x-21)*.29)}
 q.body(qhw);q.outline();q.sides('M');
 // rear: LED bar + diffuser
 for(y=3;y<=11;y++)q.S(3,y,(y<=5||y>=9)?'R':'V');q.S(3,3,'r');q.S(3,11,'r');
 // engine cover with louvers
 for(x=4;x<=11;x++){q.S(x,3,'L')}
 [5,7,9].forEach(function(x){for(var y=5;y<=9;y++)q.S(x,y,'S')});
 for(x=10;x<=12;x++){q.S(x,2,'V');q.S(x,12,'V')}
 // canopy
 q.ell(16.6,7,4.8,4.1,function(x,y){q.S(x,y,'W')});
 q.ell(15.4,7,3.1,3.05,function(x,y,dx,dy){q.S(x,y,dy<-.45?'L':'B')});
 q.S(19,4,'w');q.S(20,5,'w');q.S(19,10,'w');q.S(12,6,'w');
 // front fenders + hood lines
 for(x=19;x<=24;x++){q.S(x,2,'L')}
 for(x=24;x<=29;x++){q.S(x,3,'L');q.S(x,11,'M')}
 // lightning bolt
 [[27,4],[28,4],[26,5],[27,5],[25,6],[26,6],[24,7],[25,7],[26,7],[27,7],[28,7],[26,8],[27,8],[25,9],[26,9],[24,10]].forEach(function(p){q.S(p[0],p[1],'D')});
 // headlight slits, front intakes
 for(x=27;x<=30;x++){var hw=qhw(x),t0=Math.ceil(cy-hw)+1,b0=Math.floor(cy+hw)-1;q.S(x,t0,'Y');q.S(x,b0,'Y')}
 for(y=6;y<=8;y++)q.S(31,y,'V');
 // rear wing
 for(y=0;y<=14;y++){q.S(0,y,'K');q.S(1,y,(y===0||y===14)?'K':'D')}
 q.S(2,4,'K');q.S(2,10,'K');q.S(2,0,'K');q.S(2,14,'K');
 // mirrors, tires
 q.S(18,1,'K');q.S(19,1,'B');q.S(18,13,'K');q.S(19,13,'B');
 q.tire(4,8,0);q.tire(4,8,14);q.tire(21,25,0);q.tire(21,25,14);
 CARS[1].grid=m.rows();CARS[2].grid=q.rows();
})();
function playerPal(body,stripe){return{K:CK,P:body,B:body,M:shadeHex(body,.72),L:shadeHex(body,1.18),D:stripe,W:'#1c2338',w:'#8395c4',R:'#d92f27',r:'#ff7a6a',Y:'#faee80',O:'#ee6a2d',G:'#9aa2b4',C:'#dfe4ee',c:'#8e94a6',T:'#121219',t:'#2c2e38',V:'#181a24',S:'#2a2c38'}}
function playerSprite(ci,body,stripe){return gridToCanvas(CARS[ci].grid,playerPal(body,stripe))}
// trees (top-layer canopies)
var TREES=[];
function buildTrees(){
 function blob(r,c1,c2,c3,c4,seed){var s=r*2+3,c=mkCanvas(s,s),x=c.getContext('2d'),m=s/2;for(var y=0;y<s;y++)for(var xx=0;xx<s;xx++){var dx=xx+.5-m,dy=y+.5-m,d=Math.hypot(dx,dy)+hsh(xx,y,seed)*1.2;if(d>r+.6)continue;var col=d>r-.7?c1:(dx+dy<-r*.5?c4:(dx+dy<.3*r?c3:c2));if(hsh(xx,y,seed+1)<.12&&d<r-1)col=c1;x.fillStyle=col;x.fillRect(xx,y,1,1)}return c}
 TREES=[blob(9,'#0f2a1e','#1d5a36','#2f7a46','#5aa860',1),blob(10,'#0f2a1e','#1f5f38','#33804a','#62b066',2),blob(8,'#0f2a1e','#1d5a36','#2f7a46','#5aa860',3),
  blob(10,'#4a1e3a','#c4507e','#e87aa4','#ffc4dc',4),blob(9,'#4a1e3a','#c4507e','#e87aa4','#ffc4dc',5),
  blob(12,'#0a1f16','#163f2c','#22583a','#3a7a4c',6),blob(11,'#0a1f16','#163f2c','#22583a','#3a7a4c',7)];
}

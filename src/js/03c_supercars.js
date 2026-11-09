// ===== five supercars for the elite dealership (top-down, front to the right), 1 000 000 … 50 000 000 ¥ =====
(function(){
 function PG(L,W){var g=[],i,j;for(j=0;j<W;j++){var r=[];for(i=0;i<L;i++)r.push('.');g.push(r)}
  var cy=(W-1)/2,o={L:L,W:W,cy:cy,S:function(x,y,c){x=Math.round(x);y=Math.round(y);if(y>=0&&y<W&&x>=0&&x<L)g[y][x]=c},G:function(x,y){return(y>=0&&y<W&&x>=0&&x<L)?g[y][x]:'.'},
   body:function(hw){for(var x=0;x<L;x++){var h=hw(x);if(h<0)continue;for(var y=0;y<W;y++)if(Math.abs(y-cy)<=h+.01)g[y][x]='B'}},
   outline:function(){var e=[];for(var y=0;y<W;y++)for(var x=0;x<L;x++){if(g[y][x]==='.')continue;if(o.G(x-1,y)==='.'||o.G(x+1,y)==='.'||o.G(x,y-1)==='.'||o.G(x,y+1)==='.')e.push([x,y])}e.forEach(function(q){g[q[1]][q[0]]='K'})},
   sides:function(c){for(var x=0;x<L;x++)for(var y=1;y<W-1;y++){if(g[y][x]!=='B')continue;if(g[y-1][x]==='K'||g[y+1][x]==='K')g[y][x]=c}},
   top:function(x){var y=0;while(y<W&&g[y][x]==='.')y++;return y},bot:function(x){var y=W-1;while(y>=0&&g[y][x]==='.')y--;return y},
   glass:function(x0,x1,d,c){for(var x=x0;x<=x1;x++){var t=o.top(x)+d,b=o.bot(x)-d;for(var y=t;y<=b;y++)o.S(x,y,c||'W')}},
   fill:function(x0,x1,y0,y1,c){for(var x=x0;x<=x1;x++)for(var y=y0;y<=y1;y++)o.S(x,y,c)},
   hl:function(x0,x1,y,c){for(var x=x0;x<=x1;x++)o.S(x,y,c)},
   tire:function(x0,x1){for(var x=x0;x<=x1;x++){o.S(x,0,(x-x0)%2?'t':'T');o.S(x,W-1,(x-x0)%2?'t':'T')}},
   mirror:function(x){o.S(x,0,'K');o.S(x+1,0,'M');o.S(x,W-1,'K');o.S(x+1,W-1,'M')},
   rows:function(){return g.map(function(r){return r.join('')})}};return o}
 var M=Math,A=[];
 // 1 Сёгун GT-S — a long grand tourer: twin stripes, hood vents, quad pipes
 (function(){var g=PG(34,16);function hw(x){if(x<2)return -1;if(x<=3)return 6.5;if(x<=28)return 7.5;return M.max(5.5,7.5-(x-28)*.4)}
  g.body(hw);g.outline();g.sides('M');for(var y=0;y<16;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===15)?'K':'D')}g.S(1,6,'C');g.S(1,9,'C');
  g.S(3,3,'R');g.S(3,4,'R');g.S(3,11,'R');g.S(3,12,'R');g.S(4,4,'r');g.S(4,11,'r');
  g.glass(8,10,2);g.fill(11,16,3,12,'B');g.hl(11,16,3,'L');g.glass(17,20,2);g.S(19,4,'w');g.S(20,5,'w');for(var x=11;x<=16;x++){g.S(x,2,'W');g.S(x,13,'W')}
  for(x=5;x<=32;x++){if(x>=8&&x<=20)continue;g.S(x,6,'D');g.S(x,9,'D')}g.fill(24,26,4,4,'V');g.fill(24,26,11,11,'V');
  g.S(31,3,'Y');g.S(32,4,'Y');g.S(31,12,'Y');g.S(32,11,'Y');g.fill(33,33,6,9,'V');g.mirror(19);g.tire(5,8);g.tire(25,28);
  A.push({n:'Сёгун GT-S',grid:g.rows(),pw:460,vmax:505,grip:1.12,turn:2.85,dturn:3.0,hx:17,hy:8,m:1.2,price:1000000,desc:'Гран-турер: быстрый и спокойный на любой скорости',elite:1,show:['#eceef4','#1b1b2f']})})();
 // 2 Кицунэ RS — a light track fox: a huge wing, a roof scoop, a splitter
 (function(){var g=PG(31,15);g.body(function(x){return x<=2?-1:x===3?6:x<=29?7:6});g.outline();g.sides('M');
  for(var y=0;y<15;y++){g.S(0,y,y===0||y===14?'K':'D');g.S(1,y,'K');g.S(2,y,(y<=1||y>=13)?'K':(y===7?'K':'.'))}
  g.S(4,3,'R');g.S(4,4,'R');g.S(4,10,'R');g.S(4,11,'R');
  g.glass(7,9,2);g.fill(10,14,3,11,'B');g.hl(10,14,3,'L');g.fill(12,13,6,8,'V');g.glass(15,18,2);g.S(17,4,'w');g.S(18,5,'w');for(var x=10;x<=14;x++){g.S(x,2,'W');g.S(x,12,'W')}
  for(x=19;x<=28;x++){var d=M.round((x-19)*.35);g.S(x,3+d,'D');g.S(x,11-d,'D')}g.S(28,3,'Y');g.S(28,11,'Y');g.fill(30,30,3,11,'C');g.mirror(16);g.tire(4,7);g.tire(21,24);
  A.push({n:'Кицунэ RS',grid:g.rows(),pw:470,vmax:515,grip:1.3,turn:3.3,dturn:3.25,hx:15.5,hy:7.5,m:.9,price:3000000,desc:'Трековый лис: лёгкий, цепкий и злой',elite:1,show:['#ff8a3d','#1b1b2f']})})();
 // 3 Райдзин E — an electric teardrop: one big glass canopy, light bars front and back
 (function(){var g=PG(33,15);function hw(x){if(x<1)return -1;if(x<=2)return 5;if(x<=8)return 5+(x-2)*.42;if(x<=24)return 7.5;return M.max(4,7.5-(x-24)*.45)}
  g.body(hw);g.outline();g.sides('M');for(var y=3;y<=11;y++)g.S(2,y,'R');g.S(2,7,'r');
  var cy=g.cy;for(var x=9;x<=23;x++){var h=hw(x)-2.2-M.max(0,(x-19)*.5)-M.max(0,(11-x)*.6);for(y=M.ceil(cy-h);y<=M.floor(cy+h);y++)g.S(x,y,'W')}
  for(x=11;x<=19;x++)g.S(x,M.ceil(cy-(hw(x)-2.6)),'w');for(x=25;x<=30;x++){g.S(x,7,'L')}
  for(y=4;y<=10;y++)g.S(31,y,'Y');g.fill(5,8,0,0,'c');g.fill(5,8,14,14,'c');g.fill(23,26,0,0,'c');g.fill(23,26,14,14,'c');g.tire(5,8);g.tire(23,26);g.fill(6,7,0,0,'C');g.fill(6,7,14,14,'C');g.fill(24,25,0,0,'C');g.fill(24,25,14,14,'C');
  A.push({n:'Райдзин E',grid:g.rows(),pw:560,vmax:535,grip:1.22,turn:3.0,dturn:2.8,hx:16.5,hy:7.5,m:1.1,price:8000000,desc:'Электрический гиперкар: мгновенная тяга и ни звука',elite:1,show:['#35c4ff','#ffffff']})})();
 // 4 Оками V12 — a wide mid-engine wolf: louvered engine cover, side intakes, a wing
 (function(){var g=PG(36,18);function hw(x){if(x<1)return -1;if(x<=2)return 7;if(x<=21)return 8.5;return M.max(5,8.5-(x-21)*.32)}
  g.body(hw);g.outline();g.sides('M');for(var y=0;y<18;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===17)?'K':'D')}
  for(y=3;y<=14;y++)g.S(3,y,(y<=5||y>=12)?'R':'V');g.S(3,8,'C');g.S(3,9,'C');
  for(var x=5;x<=11;x+=2)for(y=5;y<=12;y++)g.S(x,y,'S');g.fill(12,13,2,3,'V');g.fill(12,13,14,15,'V');
  var cy=g.cy;for(x=13;x<=23;x++){var h=hw(x)-2.8-M.max(0,(x-20)*.7);for(y=M.ceil(cy-h);y<=M.floor(cy+h);y++)g.S(x,y,(x<=14||x>=21)?'W':'B')}
  g.hl(15,20,6,'L');g.S(22,7,'w');g.S(23,8,'w');for(x=24;x<=33;x++){g.S(x,8,'D');g.S(x,9,'D')}g.S(32,4,'Y');g.S(33,5,'Y');g.S(32,13,'Y');g.S(33,12,'Y');
  g.mirror(20);g.tire(5,9);g.tire(25,29);
  A.push({n:'Оками V12',grid:g.rows(),pw:600,vmax:560,grip:1.3,turn:3.05,dturn:3.0,hx:18,hy:9,m:1.15,price:20000000,desc:'Двенадцать цилиндров и волчий вой. Быстрее — только легенда',elite:1,show:['#c8202a','#1b1b2f']})})();
 // 5 Дракон-87 — Tatsumi's wedge from the Wangan: louvered rear window, pop-up lamps, a gold stripe
 (function(){var g=PG(34,16);function hw(x){if(x<1)return -1;if(x<=2)return 6.5;if(x<=22)return 7.5;return M.max(5,7.5-(x-22)*.22)}
  g.body(hw);g.outline();g.sides('M');for(var y=0;y<16;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===15)?'K':'D')}
  for(y=3;y<=12;y++)g.S(3,y,'R');g.S(3,7,'r');g.S(3,8,'r');
  for(var x=6;x<=10;x++)for(y=g.top(x)+2;y<=g.bot(x)-2;y++)g.S(x,y,x%2?'V':'W');
  g.fill(11,15,3,12,'B');g.hl(11,15,3,'L');g.glass(16,19,2);g.S(18,4,'w');g.S(19,5,'w');for(x=11;x<=15;x++){g.S(x,2,'W');g.S(x,13,'W')}
  for(x=4;x<=32;x++){g.S(x,g.top(x)+1,'D');g.S(x,g.bot(x)-1,'D')}g.fill(28,30,4,5,'L');g.fill(28,30,10,11,'L');g.hl(28,30,4,'K');g.hl(28,30,11,'K');
  for(x=21;x<=26;x++)g.S(x,7,'V');g.mirror(17);g.tire(5,8);g.tire(25,28);
  A.push({n:'Дракон-87',grid:g.rows(),pw:580,vmax:550,grip:1.15,turn:3.2,dturn:3.45,hx:17,hy:8,m:1.0,price:50000000,desc:'Машина Тацуми с Вангана-87. Создана для заносов. Только для VIP',elite:1,vip:1,show:['#141418','#ffd23f']})})();
 A.forEach(function(c){CARS.push(c)});
})();

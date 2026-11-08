// ===== ten more player cars (top-down, front to the right) =====
(function(){
 function PG(L,W){var g=[],i,j;for(j=0;j<W;j++){var r=[];for(i=0;i<L;i++)r.push('.');g.push(r)}
  var cy=(W-1)/2,o={L:L,W:W,cy:cy,S:function(x,y,c){x=Math.round(x);y=Math.round(y);if(y>=0&&y<W&&x>=0&&x<L)g[y][x]=c},G:function(x,y){return(y>=0&&y<W&&x>=0&&x<L)?g[y][x]:'.'},
   body:function(hw){o.hw=hw;for(var x=0;x<L;x++){var h=hw(x);if(h<0)continue;for(var y=0;y<W;y++)if(Math.abs(y-cy)<=h+.01)g[y][x]='B'}},
   outline:function(){var e=[];for(var y=0;y<W;y++)for(var x=0;x<L;x++){if(g[y][x]==='.')continue;if(o.G(x-1,y)==='.'||o.G(x+1,y)==='.'||o.G(x,y-1)==='.'||o.G(x,y+1)==='.')e.push([x,y])}e.forEach(function(q){g[q[1]][q[0]]='K'})},
   sides:function(c){for(var x=0;x<L;x++)for(var y=1;y<W-1;y++){if(g[y][x]!=='B')continue;if(g[y-1][x]==='K'||g[y+1][x]==='K')g[y][x]=c}},
   top:function(x){var y=0;while(y<W&&g[y][x]==='.')y++;return y},bot:function(x){var y=W-1;while(y>=0&&g[y][x]==='.')y--;return y},
   // glass between x0..x1, inset d from the body edge
   glass:function(x0,x1,d,c){for(var x=x0;x<=x1;x++){var t=o.top(x)+d,b=o.bot(x)-d;for(var y=t;y<=b;y++)o.S(x,y,c||'W')}},
   fill:function(x0,x1,y0,y1,c){for(var x=x0;x<=x1;x++)for(var y=y0;y<=y1;y++)o.S(x,y,c)},
   hl:function(x0,x1,y,c){for(var x=x0;x<=x1;x++)o.S(x,y,c)},
   tire:function(x0,x1){for(var x=x0;x<=x1;x++){o.S(x,0,(x-x0)%2?'t':'T');o.S(x,W-1,(x-x0)%2?'t':'T')}},
   mirror:function(x){o.S(x,0,'K');o.S(x+1,0,'M');o.S(x,W-1,'K');o.S(x+1,W-1,'M')},
   lights:function(rx,fx,rows,frows){(rows||[o.top(rx)+1,o.bot(rx)-1]).forEach(function(y){o.S(rx,y,'R')});(frows||[o.top(fx)+1,o.bot(fx)-1]).forEach(function(y){o.S(fx,y,'Y')})},
   rows:function(){return g.map(function(r){return r.join('')})}};return o}
 var M=Math,A=[];
 // 1 Кэй-Мини — tall little box
 (function(){var g=PG(22,13);g.body(function(x){return x===0?4.5:x<=20?5.5:4.5});g.outline();g.sides('M');
  g.glass(6,8,2);g.fill(9,14,3,9,'B');g.hl(9,14,3,'L');g.glass(15,17,2);g.S(16,4,'w');g.S(17,5,'w');for(var x=9;x<=14;x++){g.S(x,2,'W');g.S(x,10,'W')}
  g.fill(1,1,3,9,'C');g.lights(2,20,[2,3,9,10],[3,9]);g.S(21,5,'V');g.S(21,6,'V');g.S(21,7,'V');
  g.mirror(15);g.tire(3,5);g.tire(16,18);A.push({n:'Кэй-Мини',grid:g.rows(),pw:220,vmax:330,grip:1.05,turn:3.25,dturn:3.0,hx:11,hy:6.5,m:.8,price:1500,desc:'Крошечная и вёрткая'})})();
 // 2 Тофу-86 — hatchback, pop-ups, side stripe
 (function(){var g=PG(28,14);g.body(function(x){return x===0?5:x<=26?6:5});g.outline();g.sides('M');
  for(var x=2;x<=26;x++){g.S(x,g.top(x)+1,'D');g.S(x,g.bot(x)-1,'D')}
  g.glass(4,7,2);g.fill(8,14,3,10,'B');g.hl(8,14,3,'L');g.glass(15,18,2);g.S(17,4,'w');g.S(18,5,'w');for(x=8;x<=14;x++){g.S(x,2,'W');g.S(x,11,'W')}
  g.hl(20,25,6,'M');g.hl(20,25,7,'M');g.fill(23,24,3,4,'K');g.fill(23,24,9,10,'K');
  g.lights(1,26,[3,4,9,10],[3,10]);g.mirror(16);g.tire(4,7);g.tire(20,23);
  A.push({n:'Тофу-86',grid:g.rows(),pw:260,vmax:385,grip:1.0,turn:3.0,dturn:3.15,hx:14,hy:7,m:.9,price:2500,desc:'Лёгкая, идеальный баланс для заносов'})})();
 // 3 Кэйтора — little truck: cab at the front, open bed at the back
 (function(){var g=PG(24,13);g.body(function(x){return x<=14?5.5:x<=22?5.5:4.5});g.outline();g.sides('M');
  g.fill(1,13,2,10,'K');g.fill(2,12,3,9,'G');for(var x=3;x<=12;x+=3)g.hl(x,x,3,'c');g.fill(4,8,4,8,'O');g.fill(5,7,5,7,'r');
  g.fill(14,16,2,10,'B');g.hl(14,16,2,'L');g.glass(17,19,2);g.S(18,4,'w');g.S(19,5,'w');
  g.lights(1,22,[2,10],[3,9]);g.S(23,6,'V');g.mirror(17);g.tire(3,5);g.tire(17,19);
  A.push({n:'Кэйтора',grid:g.rows(),pw:200,vmax:300,grip:.95,turn:3.1,dturn:3.25,hx:12,hy:6.5,m:.85,price:1200,desc:'Грузовичок фермера. Смешно и боком'})})();
 // 4 Фургон Хаясэ — long van, roof rack
 (function(){var g=PG(32,15);g.body(function(x){return x===0?6:x<=29?7:x===30?6.5:5.5});g.outline();g.sides('M');
  g.fill(2,24,3,11,'B');for(var x=3;x<=23;x+=4){g.fill(x,x,3,11,'c')}for(x=3;x<=23;x++){g.S(x,3,'C');g.S(x,11,'C')}
  for(x=4;x<=24;x++){g.S(x,2,'W');g.S(x,12,'W')}g.S(9,2,'K');g.S(15,2,'K');g.S(9,12,'K');g.S(15,12,'K');
  g.glass(25,28,2);g.S(27,4,'w');g.S(28,5,'w');g.lights(1,30,[2,3,11,12],[3,11]);g.fill(31,31,5,9,'V');
  g.mirror(26);g.tire(4,7);g.tire(24,27);
  A.push({n:'Фургон Хаясэ',grid:g.rows(),pw:280,vmax:340,grip:.9,turn:2.4,dturn:2.75,hx:16,hy:7.5,m:1.4,price:2000,desc:'Тяжёлый, но заносится как шкаф'})})();
 // 5 Ротор-7 — curvy coupe, bubble cabin, wing
 (function(){var g=PG(30,15);function hw(x){if(x<2)return -1;if(x<=4)return 5+(x-2)*.6;if(x<=20)return 6+.5*M.sin((x-4)/16*M.PI);return M.max(4.4,6-(x-20)*.22)}
  g.body(hw);g.outline();g.sides('M');
  g.S(2,5,'R');g.S(2,9,'R');g.S(3,4,'R');g.S(3,10,'R');g.S(2,7,'V');
  for(var y=0;y<15;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===14)?'K':'D')}g.S(2,3,'K');g.S(2,11,'K');
  g.ell?0:0;for(var x=9;x<=17;x++){var h=hw(x)-2.2,cy=g.cy;for(y=M.ceil(cy-h);y<=M.floor(cy+h);y++)g.S(x,y,(x<=10||x>=15)?'W':'B')}
  g.hl(11,14,4,'L');g.S(16,5,'w');g.S(17,6,'w');
  for(x=19;x<=26;x++){g.S(x,g.top(x)+1,'L')}g.hl(22,26,7,'D');g.fill(24,25,4,4,'K');g.fill(24,25,10,10,'K');
  g.lights(3,28,[4,10],[6,8]);g.mirror(15);g.tire(4,7);g.tire(20,23);
  A.push({n:'Ротор-7',grid:g.rows(),pw:330,vmax:440,grip:1.05,turn:3.0,dturn:3.0,hx:15,hy:7.5,m:.95,price:5500,desc:'Роторный мотор, крутится до звона'})})();
 // 6 Тайфун Эво — rally sedan: scoop, big wing, decals
 (function(){var g=PG(31,15);g.body(function(x){return x<=1?-1:x===2?6:x<=29?7:6});g.outline();g.sides('M');
  for(var y=0;y<15;y++){g.S(2,y,(y===0||y===14)?'K':'K');g.S(3,y,(y<=1||y>=13)?'K':'D')}
  g.glass(6,8,2);g.fill(9,15,3,11,'B');g.hl(9,15,3,'L');g.glass(16,19,2);g.S(18,4,'w');g.S(19,5,'w');for(var x=9;x<=15;x++){g.S(x,2,'W');g.S(x,12,'W')}
  g.fill(23,26,6,8,'V');g.hl(23,26,5,'K');g.hl(23,26,9,'K');for(x=21;x<=28;x+=2){g.S(x,3,'D');g.S(x,11,'D')}
  g.lights(4,29,[3,4,10,11],[3,4,10,11]);g.fill(30,30,5,9,'V');g.mirror(17);g.tire(5,8);g.tire(22,25);
  A.push({n:'Тайфун Эво',grid:g.rows(),pw:350,vmax:430,grip:1.25,turn:2.9,dturn:2.5,hx:15.5,hy:7.5,m:1.1,price:6500,desc:'Полный привод: цепкий, но в занос неохотно'})})();
 // 7 Самурай Турбо — long-hood GT, round tail lights, wing
 (function(){var g=PG(32,15);function hw(x){if(x<2)return -1;if(x<=3)return 6;if(x<=24)return 7;return M.max(5,7-(x-24)*.3)}
  g.body(hw);g.outline();g.sides('M');for(var y=0;y<15;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===14)?'K':'D')}
  g.S(3,3,'R');g.S(3,4,'r');g.S(3,10,'r');g.S(3,11,'R');g.S(2,6,'V');g.S(2,8,'V');
  g.glass(7,9,2);g.fill(10,14,3,11,'B');g.hl(10,14,3,'L');g.glass(15,18,2);g.S(17,4,'w');g.S(18,5,'w');for(var x=10;x<=14;x++){g.S(x,2,'W');g.S(x,12,'W')}
  for(x=20;x<=28;x++){g.S(x,6,'D');g.S(x,8,'D')}g.fill(24,26,7,7,'K');
  g.lights(3,29,[5,9],[4,10]);g.S(30,7,'V');g.mirror(16);g.tire(5,8);g.tire(22,25);
  A.push({n:'Самурай Турбо',grid:g.rows(),pw:400,vmax:470,grip:1.0,turn:2.75,dturn:2.95,hx:16,hy:7.5,m:1.15,price:9000,desc:'Два турбо, огромная мощность'})})();
 // 8 VIP Сэдан — long, low, chrome
 (function(){var g=PG(35,16);g.body(function(x){return x===0?6:x<=33?7.5:6.5});g.outline();g.sides('M');
  for(var x=1;x<=33;x++){g.S(x,g.top(x)+1,'C');g.S(x,g.bot(x)-1,'C')}
  g.glass(8,11,2);g.fill(12,19,3,12,'B');g.hl(12,19,3,'L');g.glass(20,23,2);g.S(22,4,'w');g.S(23,5,'w');for(x=12;x<=19;x++){g.S(x,2,'W');g.S(x,13,'W')}
  for(x=26;x<=32;x+=2)g.S(x,7,'L');g.fill(34,34,5,10,'C');g.fill(33,33,6,9,'V');g.fill(1,1,4,11,'C');
  g.lights(2,32,[3,4,11,12],[3,12]);g.mirror(21);g.tire(5,8);g.tire(26,29);
  A.push({n:'VIP Сэдан',grid:g.rows(),pw:360,vmax:420,grip:.95,turn:2.5,dturn:2.9,hx:17.5,hy:8,m:1.35,price:7000,desc:'Длинный и плавный, заносы как в кино'})})();
 // 9 Ретро 2000GT — long curvy hood, round lamps, chrome bumpers
 (function(){var g=PG(31,14);function hw(x){if(x<1)return -1;if(x<=2)return 5;if(x<=12)return 5.5+.5*M.sin((x-2)/10*M.PI);if(x<=25)return 6;return M.max(3.5,6-(x-25)*.45)}
  g.body(hw);g.outline();g.sides('M');g.fill(1,1,3,10,'C');
  for(var x=4;x<=8;x++)g.S(x,g.top(x)+1,'L');g.glass(9,10,2);g.fill(11,13,3,10,'B');g.hl(11,13,3,'L');g.glass(14,16,2);g.S(16,4,'w');
  for(x=17;x<=28;x++){g.S(x,6,'D');g.S(x,7,'D')}g.S(26,3,'Y');g.S(27,4,'Y');g.S(26,10,'Y');g.S(27,9,'Y');g.fill(30,30,5,8,'C');
  g.lights(2,29,[3,10],[5,8]);g.mirror(14);g.tire(3,6);g.tire(21,24);
  A.push({n:'Ретро 2000GT',grid:g.rows(),pw:300,vmax:425,grip:1.02,turn:2.9,dturn:2.9,hx:15.5,hy:7,m:.95,price:6000,desc:'Классика шестидесятых'})})();
 // 10 Ниндзя RR — wide mid-engine wedge, canopy in the middle, intakes
 (function(){var g=PG(32,16);function hw(x){if(x<1)return -1;if(x<=2)return 6;if(x<=19)return 7.5;return M.max(4.5,7.5-(x-19)*.3)}
  g.body(hw);g.outline();g.sides('M');for(var y=0;y<16;y++){g.S(0,y,'K');g.S(1,y,(y===0||y===15)?'K':'D')}
  for(y=3;y<=12;y++)g.S(3,y,(y<=5||y>=10)?'R':'V');
  [5,7,9].forEach(function(x){for(var y=5;y<=10;y++)g.S(x,y,'S')});g.fill(11,12,2,3,'V');g.fill(11,12,12,13,'V');
  var cy=g.cy;for(var x=12;x<=21;x++){var h=hw(x)-2.5-M.max(0,(x-18)*.6);for(y=M.ceil(cy-h);y<=M.floor(cy+h);y++)g.S(x,y,(x<=13||x>=19)?'W':'B')}
  g.hl(14,18,5,'L');g.S(20,6,'w');g.S(21,7,'w');
  for(x=22;x<=28;x++){g.S(x,g.top(x)+1,'L')}for(x=24;x<=29;x++){g.S(x,7,'D');g.S(x,8,'D')}
  g.lights(2,29,[4,11],[5,10]);g.mirror(18);g.tire(4,8);g.tire(21,25);
  A.push({n:'Ниндзя RR',grid:g.rows(),pw:440,vmax:510,grip:1.18,turn:3.1,dturn:2.9,hx:16,hy:8,m:1.05,price:15000,desc:'Самая быстрая. Для королей перевала'})})();
 A.forEach(function(c){CARS.push(c)});
})();

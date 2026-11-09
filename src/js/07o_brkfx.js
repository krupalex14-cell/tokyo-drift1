// ===== knocked-down trees (bake without them, a stump stays, they grow back later) and the falling traffic light's glow =====
var _dptT=drawPropTop;drawPropTop=function(u,p,x,y){if(p.brk&&(p.t===P_TREE||p.t===P_SAKURA))return;_dptT(u,p,x,y)};
var _dpgT=drawPropGround;drawPropGround=function(g,p,x,y){if(p.brk&&(p.t===P_TREE||p.t===P_SAKURA)){x=Math.round(x);y=Math.round(y);g.fillStyle='rgba(18,10,52,.3)';g.fillRect(x-1,y+1,5,3);g.fillStyle='#5a3a24';g.fillRect(x-1,y-1,3,3);g.fillStyle='#c8a070';g.fillRect(x,y-1,1,1);return}_dpgT(g,p,x,y)};
var _brT=brkRespawn;brkRespawn=function(){var tr=FRAME%60?null:BRKD.filter(function(p){return p.t===P_TREE||p.t===P_SAKURA});_brT();if(tr)tr.forEach(function(p){if(!p.brk)chunkDirty(p.x-40,p.y-40,p.x+40,p.y+40)})};
var _edT=emisDraw;emisDraw=function(a){_edT(a);for(var i=0;i<PIECES.length;i++){var q=PIECES[i];if(!q.tlt||q.t>2.6)continue;var on=q.t<.5||((q.t*11)|0)%3!==0;if(!on)continue;var L=17*q.fall*q.fall,x=SX(q.x+Math.cos(q.a)*L),y=SY(q.y+Math.sin(q.a)*L);if(x<-40||y<-40||x>VW+40||y>VH+40)continue;var c=[[61,240,176],[255,210,58],[255,58,58]][q.st|0];gl(x,y,10,10,c,.6+a*.4)}
 for(i=0;i<PIECES.length;i++){var r=PIECES[i];if(!r.tlt||r.t>3.2||Math.random()>.45)continue;var bx=SX(r.bx),by=SY(r.by);if(bx<-30||by<-30||bx>VW+30||by>VH+30)continue;
  gl(bx,by-3,9,9,[150,220,255],.7);cx.globalAlpha=1;cx.fillStyle='#d8f4ff';var px=bx,py=by-1;for(var s=0;s<5;s++){var nx=px+Math.round((Math.random()-.5)*5),ny=py-1-Math.round(Math.random()*2);var dx=nx-px,dy=ny-py,L2=Math.max(Math.abs(dx),Math.abs(dy))||1;for(var k=0;k<=L2;k++)cx.fillRect(Math.round(px+dx*k/L2),Math.round(py+dy*k/L2),1,1);px=nx;py=ny}}};
// ===== wooden utility poles break too: they fall over across the street, the wires snap with a spark, a stump stays; they are put back later =====
BRKT[P_POLE]={th:42,m:.12,r:1.8,nm:'столб!',snd:1};
var POLEF=[];
var _dptP=drawPropTop;drawPropTop=function(u,p,x,y){if(p.brk&&p.t===P_POLE)return;_dptP(u,p,x,y)};
var _dpgP=drawPropGround;drawPropGround=function(g,p,x,y){if(p.brk&&p.t===P_POLE){x=Math.round(x);y=Math.round(y);g.fillStyle='rgba(18,10,52,.3)';g.fillRect(x,y+1,3,2);g.fillStyle='#3e3024';g.fillRect(x-1,y-1,3,3);g.fillStyle='#b89870';g.fillRect(x,y-1,1,1);return}_dpgP(g,p,x,y)};
// the wires to a broken pole come down with it (and go back up when the pole is replaced)
function poleWires(p,off){var k=p.x+','+p.y;if(off){p.wr=[];for(var i=WIRES.length-1;i>=0;i--){var w=WIRES[i];if((w[0]===p.x&&w[1]===p.y)||(w[2]===p.x&&w[3]===p.y)){p.wr.push(w);WIRES.splice(i,1);chunkSoft(Math.min(w[0],w[2])-30,Math.min(w[1],w[3])-30,Math.max(w[0],w[2])+30,Math.max(w[1],w[3])+30)}}}
 else if(p.wr){p.wr.forEach(function(w){WIRES.push(w);chunkSoft(Math.min(w[0],w[2])-30,Math.min(w[1],w[3])-30,Math.max(w[0],w[2])+30,Math.max(w[1],w[3])+30)});p.wr=null}}
var _bpP=breakProp;breakProp=function(p,c,ai){var was=p.brk;_bpP(p,c,ai);if(was||!p.brk||p.t!==P_POLE)return;
 var x=p.x,y=p.y,dir=Math.atan2(c.vy,c.vx),sp=Math.hypot(c.vx,c.vy);
 POLEF.push({x:x,y:y,a:dir+(Math.random()-.5)*.7,fall:0,t:0,life:30});
 fxBits(x,y,12,['#8a6a48','#c8a070','#5a4430','#3e3024'],90,100,0,{vx:c.vx*.5,vy:c.vy*.5});fxSparks(x,y,14,c.vx*.2,c.vy*.2,0,1);smokePuff(x,y,c.vx*.08,c.vy*.08,2,7,true,0,1.1);cam.sh=Math.max(cam.sh||0,2);
 poleWires(p,true);chunkDirty(x-30,y-30,x+30,y+30)};
var _brP=brkRespawn;brkRespawn=function(){var pl=FRAME%60?null:BRKD.filter(function(p){return p.t===P_POLE});_brP();if(pl)pl.forEach(function(p){if(!p.brk){poleWires(p,false);chunkDirty(p.x-30,p.y-30,p.x+30,p.y+30)}})};
var _brsP=brkReset;brkReset=function(){BRKD.forEach(function(p){if(p.t===P_POLE){poleWires(p,false);chunkDirty(p.x-30,p.y-30,p.x+30,p.y+30)}});POLEF=[];_brsP()};
// the falling pole: it tips over, hits the ground with a thud and a puff, the snapped wire fizzes for a moment
var _puP=piecesUpdate;piecesUpdate=function(dt){_puP(dt);for(var i=POLEF.length-1;i>=0;i--){var q=POLEF[i];q.t+=dt;if(q.t>q.life||Math.abs(wd(q.x,car.x))>950||Math.abs(wd(q.y,car.y))>950){POLEF.splice(i,1);continue}
 if(q.fall<1){q.fall=Math.min(1,q.fall+dt*(.9+q.fall*5));if(q.fall>=1){var ex=q.x+Math.cos(q.a)*15,ey=q.y+Math.sin(q.a)*15;fxBits(ex,ey,10,['#8a6a48','#5a4430'],70,70,0,{});smokePuff(ex,ey,0,0,2,8,true,0,1.3);fxSparks(ex,ey,8,0,0,0,.7);auSmash(1,.6)}}
 else if(q.t<3&&Math.random()<dt*5)fxSparks(q.x+Math.cos(q.a)*15,q.y+Math.sin(q.a)*15,2,0,0,0,.45)}};
var _pdP=piecesDraw;piecesDraw=function(air){_pdP(air);if(air)return;for(var i=0;i<POLEF.length;i++){var q=POLEF[i],x=SX(q.x),y=SY(q.y);if(x<-30||y<-30||x>VW+30||y>VH+30)continue;
 var f=q.fall*q.fall,L=Math.round(15*f),ca=Math.cos(q.a),sa=Math.sin(q.a),k,fade=Math.min(1,(q.life-q.t)/2);cx.globalAlpha=fade;
 cx.fillStyle='rgba(18,10,52,.3)';for(k=0;k<=L;k++)cx.fillRect(Math.round(x+ca*k)+1,Math.round(y+sa*k)+1,2,1);
 cx.fillStyle='#6a5a48';for(k=0;k<=L;k++)cx.fillRect(Math.round(x+ca*k),Math.round(y+sa*k)-Math.round((1-f)*5*(k/Math.max(1,L))),2,1);
 // the crossarm at the top end
 var hx=Math.round(x+ca*L),hy=Math.round(y+sa*L-(1-f)*5);cx.fillStyle='#4a3a2a';for(k=-3;k<=3;k++)cx.fillRect(Math.round(hx-sa*k),Math.round(hy+ca*k),1,1);
 cx.globalAlpha=1}};
(function(){function I(d,o){for(var k in o)if(!(k in d))d[k]=o[k]}I(EN,{'столб!':'pole!'});I(ZH,{'столб!':'电线杆！'})})();

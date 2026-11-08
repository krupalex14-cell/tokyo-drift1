// ===== big map: neon GPS style, decluttered labels =====
var MAPB=null,MAPBS=0;
var MAPG={
 pagoda:['...R...','.RRRRR.','..WWW..','.RRRRR.','..WWW..','RRRRRRR','..W.W..'],
 torii:['RRRRRRR','.RRRRR.','.R...R.','RRRRRRR','.R...R.','.R...R.','.R...R.'],
 garden:['..GGG..','.GGLGG.','GGLGGGG','GGGGGGG','.GGGGG.','...B...','..BBB..'],
 onsen:['.C.C.C.','C.C.C..','.C.C.C.','.......','WWWWWWW','.WWWWW.','..WWW..'],
 temple:['...Y...','.YYYYY.','YYYYYYY','.W.W.W.','.W.W.W.','.WWWWW.','BBBBBBB'],
 lantern:['..BBB..','.RRRRR.','RRRYRRR','RRRYRRR','RRRYRRR','.RRRRR.','..BBB..'],
 bamboo:['.G..G..','.G.GG.G','.GG.G.G','.G..G.G','GG..GG.','.G..G..','.G..G..'],
 castle:['...B...','..WWW..','.BBBBB.','..WWW..','.BBBBB.','.WWWWW.','SSSSSSS'],
 wheel:['..WWW..','.W.W.W.','W..W..W','WWWWWWW','W..W..W','.W.W.W.','..WWW..'],
 needle:['...W...','...W...','..CWC..','...W...','..WWW..','.WWWWW.','WW...WW'],
 tower:['...R...','...W...','..RRR..','..W.W..','.RRRRR.','.W...W.','RR...RR'],
 cyl:['..PPP..','.CCCCC.','.CYCYC.','.CCCCC.','.CYCYC.','.CCCCC.','.CCCCC.'],
 train:['RRRRRRR','RWWRWWR','RRRRRRR','RRRRRRR','.B...B.','BBBBBBB','.......'],
 ring:['..YYY..','.Y...Y.','Y.WWW.Y','Y.WWW.Y','Y.WWW.Y','.Y...Y.','..YYY..'],
 stad:['.WWWWW.','WGGGGGW','WGGWGGW','WGWWWGW','WGGWGGW','WGGGGGW','.WWWWW.']};
var MAPGP={R:'#ff4d5e',W:'#f4f2ea',G:'#5fd17a',L:'#b8f5a0',B:'#6a4a32',C:'#7fe6ff',Y:'#ffd23a',S:'#8a8fa8',P:'#ff4db8'};
var MAPK={pagoda:['pagoda'],senbon:['torii'],shrine:['torii'],jgarden:['garden'],onsen:['onsen'],temple:['temple'],yokocho:['lantern'],bamboo:['bamboo'],
 castle:['castle','Замок'],sensoji:['temple','Сэнсо-дзи'],ferris:['wheel','Колесо'],skytree:['needle','Скайтри'],tower:['tower','Токийская башня'],cyl:['cyl','Неон-тауэр'],tstation:['train','Вокзал'],sumo:['ring','Сумо'],stad:['stad','Стадион']};
var MAPLEG=[['torii','тории'],['pagoda','пагода'],['temple','храм'],['garden','сад'],['onsen','онсэн'],['lantern','ёкотё'],['bamboo','бамбук']];
function mapGlyph(g,name,x,y,u){var G=MAPG[name];if(!G)return;var w=7*u+4*u,X=Math.round(x-w/2),Y=Math.round(y-w/2);g.fillStyle='rgba(8,8,20,.88)';g.fillRect(X,Y+u,w,w-2*u);g.fillRect(X+u,Y,w-2*u,w);g.fillStyle='rgba(255,255,255,.16)';g.fillRect(X+u,Y,w-2*u,u);
 for(var r=0;r<7;r++)for(var c=0;c<7;c++){var p=MAPGP[G[r][c]];if(!p)continue;g.fillStyle=p;g.fillRect(X+2*u+c*u,Y+2*u+r*u,u,u)}return w}
function mapBase(s){if(MAPB&&MAPBS===s)return MAPB;var D=DPR,c=mkCanvas(s,s),g=c.getContext('2d'),k=s/WS,u=Math.max(1,Math.round(D*.95));
 var R=mkCanvas(ON,ON),rg=R.getContext('2d'),id=rg.createImageData(ON,ON),d=id.data,PAL={0:[22,26,44],1:[27,31,52],2:[22,62,128],3:[26,70,52],4:[40,32,66],5:[18,48,36],7:[22,26,44],8:[22,26,44]};
 for(var i=0;i<ON*ON;i++){var p=PAL[OCC[i]]||PAL[0],o=i*4;d[o]=p[0];d[o+1]=p[1];d[o+2]=p[2];d[o+3]=255}rg.putImageData(id,0,0);
 g.imageSmoothingEnabled=true;g.drawImage(R,0,0,s,s);
 g.fillStyle='#262c4a';BLD.forEach(function(b){if(b.hid||b.st>=20)return;g.fillRect(b.x*k,b.y*k,Math.max(.6,b.w*k-.4),Math.max(.6,b.h*k-.4))});
 g.strokeStyle='rgba(120,140,220,.06)';g.lineWidth=1;for(var q=1;q<10;q++){g.beginPath();g.moveTo(q*s/10,0);g.lineTo(q*s/10,s);g.moveTo(0,q*s/10);g.lineTo(s,q*s/10);g.stroke()}
 g.lineCap='round';g.lineJoin='round';
 function path(r,step){g.beginPath();var lx=null,ly=null;for(var i=0;i<r.n;i+=step){var X=wrap(r.xs[i])*k,Y=wrap(r.ys[i])*k;if(lx===null||Math.abs(X-lx)>s/2||Math.abs(Y-ly)>s/2)g.moveTo(X,Y);else g.lineTo(X,Y);lx=X;ly=Y}var j=r.n-1,X2=wrap(r.xs[j])*k,Y2=wrap(r.ys[j])*k;if(lx!==null&&Math.abs(X2-lx)<s/2&&Math.abs(Y2-ly)<s/2)g.lineTo(X2,Y2)}
 function seg(r,w,col){var x0=wrap(r.xs[0])*k,y0=wrap(r.ys[0])*k,x1=x0+(r.xs[1]-r.xs[0])*k,y1=y0+(r.ys[1]-r.ys[0])*k;g.strokeStyle=col;g.lineWidth=w;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke()}
 LOCS.forEach(function(r){seg(r,Math.max(1.1,r.hw*2*k*.8),'#3a4370')});
 ARTS.forEach(function(r){path(r,3);g.strokeStyle='#0d1020';g.lineWidth=r.hw*2*k+2*D;g.stroke()});
 NODES.forEach(function(n){if(!n.ed.length)return;g.fillStyle='#0d1020';g.beginPath();g.arc(wrap(n.x)*k,wrap(n.y)*k,((n.R||n.rJ)*k)+D,0,TAU);g.fill()});
 ARTS.forEach(function(r){path(r,3);g.strokeStyle=r.k==='touge'?'#7c8a70':'#59659a';g.lineWidth=r.hw*2*k;g.stroke()});
 NODES.forEach(function(n){if(!n.ed.length)return;g.fillStyle='#59659a';g.beginPath();g.arc(wrap(n.x)*k,wrap(n.y)*k,(n.R||n.rJ)*k,0,TAU);g.fill();if(n.t==='round'){g.fillStyle='#26402e';g.beginPath();g.arc(wrap(n.x)*k,wrap(n.y)*k,n.Ri*k,0,TAU);g.fill()}});
 ARTS.forEach(function(r){if(r.k!=='art')return;path(r,3);g.strokeStyle='rgba(170,185,240,.35)';g.lineWidth=Math.max(.8,D*.5);g.stroke()});
 EXPS.concat(RAMPS).forEach(function(r){path(r,3);g.strokeStyle='rgba(255,140,50,.22)';g.lineWidth=r.hw*2*k+5*D;g.stroke();g.strokeStyle='#0d1020';g.lineWidth=r.hw*2*k*.8+1.5*D;g.stroke();g.strokeStyle=r.k==='ramp'?'#e08a36':'#ffa040';g.lineWidth=r.hw*2*k*.8;g.stroke()});
 // icons + labels with collision
 var boxes=[],items=[];function free(b){if(b.x<3||b.y<3||b.x+b.w>s-3||b.y+b.h>s-3)return false;for(var i=0;i<boxes.length;i++){var o=boxes[i];if(b.x<o.x+o.w&&b.x+b.w>o.x&&b.y<o.y+o.h&&b.y+b.h>o.y)return false}return true}
 var ZN={};ZONES.forEach(function(z){ZN[z.name]=1;var X=wrap(z.x)*k,Y=wrap(z.y)*k,r=6*D;boxes.push({x:X-r,y:Y-r,w:2*r,h:2*r});items.push({x:X,y:Y,r:r,t:L(z.name)+(S.best[z.id]?' · '+S.best[z.id]:''),p:3,z:1})});
 SPEC.forEach(function(sp){var m=MAPK[sp.k];if(!m||!m[1])return;var X=(sp.x+sp.w/2)*k,Y=(sp.y+sp.h/2)*k,w=11*u;boxes.push({x:X-w/2,y:Y-w/2,w:w,h:w});items.push({x:X,y:Y,r:w/2,gl:m[0],t:ZN[m[1]]?null:L(m[1]),p:2})});
 items.filter(function(it){return it.t}).sort(function(a,b){return b.p-a.p}).forEach(function(it){it.lb=mapLabel(it)});
 SPEC.forEach(function(sp){var m=MAPK[sp.k];if(!m||m[1])return;var X=(sp.x+sp.w/2)*k,Y=(sp.y+sp.h/2)*k,w=11*u;var b={x:X-w/2,y:Y-w/2,w:w,h:w};if(!free(b))return;boxes.push(b);items.push({x:X,y:Y,r:w/2,gl:m[0]})});
 items.forEach(function(it){if(it.gl)mapGlyph(g,it.gl,it.x,it.y,u);else{g.fillStyle='rgba(255,77,154,.35)';g.beginPath();g.arc(it.x,it.y,it.r+3*D,0,TAU);g.fill();g.fillStyle='#ff4d9a';g.beginPath();g.arc(it.x,it.y,it.r,0,TAU);g.fill();g.fillStyle='#fff';g.fillRect(it.x-1.5*D,it.y-1.5*D,3*D,3*D)}});
 items.forEach(function(it){var L=it.lb;if(!L)return;g.font=L.f;g.fillStyle='rgba(8,8,20,.72)';g.fillRect(L.b.x,L.b.y,L.b.w,L.b.h);g.fillStyle=it.z?'#ffd6e8':'#ffe9a8';g.textBaseline='top';g.fillText(it.t,L.x,L.y)});
 function mapLabel(it){var f=Math.round(11*D)+'px TokyoPx,monospace';g.font=f=(it.z?'bold ':'')+Math.round((it.z?10:9)*D)+'px monospace';var tw=g.measureText(it.t).width,th=(it.z?11:10)*D,pad=3*D;
  var C=[[it.x+it.r+pad,it.y-th/2],[it.x-it.r-pad-tw,it.y-th/2],[it.x-tw/2,it.y-it.r-pad-th],[it.x-tw/2,it.y+it.r+pad]];
  for(var q=0;q<C.length;q++){var b={x:C[q][0]-2*D,y:C[q][1]-1*D,w:tw+4*D,h:th+2*D};if(!free(b))continue;boxes.push(b);return{f:f,b:b,x:C[q][0],y:C[q][1]+1*D}}return null}
 g.textBaseline='alphabetic';
 MAPB=c;MAPBS=s;return c}
openMap=function(){var m=$('map'),c=$('mapc'),s=Math.floor(Math.min(innerWidth-20,innerHeight-170)*DPR);c.width=s;c.height=s;c.style.width=(s/DPR)+'px';c.style.height=(s/DPR)+'px';
 var g2=c.getContext('2d');g2.imageSmoothingEnabled=false;g2.drawImage(mapBase(s),0,0);var k=s/WS;
 gpsMap(g2,k,DPR);
 if(car){var X=car.x*k,Y=car.y*k;g2.save();g2.globalCompositeOperation='lighter';var gr=g2.createRadialGradient(X,Y,0,X,Y,22*DPR);gr.addColorStop(0,'rgba(110,231,255,.55)');gr.addColorStop(1,'rgba(110,231,255,0)');g2.fillStyle=gr;g2.fillRect(X-22*DPR,Y-22*DPR,44*DPR,44*DPR);g2.restore();
  g2.save();g2.translate(X,Y);g2.rotate(car.a);g2.fillStyle='#fff';g2.beginPath();g2.moveTo(10*DPR,0);g2.lineTo(-7*DPR,-7*DPR);g2.lineTo(-3*DPR,0);g2.lineTo(-7*DPR,7*DPR);g2.closePath();g2.fill();g2.strokeStyle='#6ee7ff';g2.lineWidth=2*DPR;g2.stroke();g2.restore()}
 var lg=$('mapl');if(lg&&!lg.innerHTML)lg.innerHTML=MAPLEG.map(function(e){return'<span>'+pxSvg(MAPG[e[0]],MAPGP)+L(e[1])+'</span>'}).join('');
 m.style.display='flex';gpsUI()};

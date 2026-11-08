// ===== pixel-art UI controls =====
function PXG(w,h){var g=[],y,x;for(y=0;y<h;y++){g.push([]);for(x=0;x<w;x++)g[y].push('.')}
 var o={w:w,h:h,g:g,
  S:function(x,y,c){x=Math.round(x);y=Math.round(y);if(x>=0&&y>=0&&x<w&&y<h)g[y][x]=c},
  G:function(x,y){return(x>=0&&y>=0&&x<w&&y<h)?g[y][x]:'.'},
  outline:function(c,diag){var e=[];for(var y=0;y<h;y++)for(var x=0;x<w;x++){if(g[y][x]!=='.')continue;var hit=false;for(var a=-1;a<=1&&!hit;a++)for(var b=-1;b<=1;b++){if(!diag&&a&&b)continue;var q=o.G(x+b,y+a);if(q!=='.'&&q!==c){hit=true;break}}if(hit)e.push([x,y])}e.forEach(function(p){g[p[1]][p[0]]=c})},
  rows:function(){return g.map(function(r){return r.join('')})}};return o}
function pxRects(rows,pal){var s='',h=rows.length,w=rows[0].length;for(var y=0;y<h;y++){var x=0;while(x<w){var c=rows[y][x];if(c==='.'||!pal[c]){x++;continue}var x0=x;while(x<w&&rows[y][x]===c)x++;s+='<rect x="'+x0+'" y="'+y+'" width="'+(x-x0)+'" height="1" fill="'+pal[c]+'"/>'}}return s}
function pxSvg(rows,pal,cls){return '<svg'+(cls?' class="'+cls+'"':'')+' viewBox="0 0 '+rows[0].length+' '+rows.length+'" shape-rendering="crispEdges" aria-hidden="true">'+pxRects(rows,pal)+'</svg>'}
function pxUri(rows,pal){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+rows[0].length+' '+rows.length+'" shape-rendering="crispEdges">'+pxRects(rows,pal)+'</svg>')+'")'}
var PXMET={K:'#12141d',L:'#e6ecf7',M:'#a7b0c8',D:'#5b6480',S:'#6c7590',H:'#ffffff'};
var PX_GAS=['..KKKKKKKK..','.KLLLLLLLLK.','KLHMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','KLMDDDDDDMSK','KLMMMMMMMMSK','.KSSSSSSSSK.','..KKKKKKKK..','....KMMK....','....KDDK....','...KKKKKK...'];
var PX_BRK=['..KKKKKKKKKKKKKK..','.KLLLLLLLLLLLLLLK.','KLHMMMMMMMMMMMMMSK','KLMDDDDDDDDDDDDMSK','KLMMMMMMMMMMMMMMSK','KLMDDDDDDDDDDDDMSK','KLMMMMMMMMMMMMMMSK','KLMDDDDDDDDDDDDMSK','KLMMMMMMMMMMMMMMSK','.KSSSSSSSSSSSSSSK.','..KKKKKKKKKKKKKK..','.......KMMK.......','......KKDDKK......'];
function pxHand(ang){var o=PXG(18,18),px=4.5,py=13.2,L=11.5,ca=Math.cos(ang),sa=Math.sin(ang),t,x,y;
 for(x=1;x<=16;x++){o.S(x,15,'B');o.S(x,16,'B')}for(x=2;x<=15;x++)o.S(x,15,'b');
 for(t=0;t<=L;t+=.2){var lx=px+ca*t,ly=py+sa*t,c=t>L-4.6?'G':'M';for(var a=0;a<2;a++)for(var b=0;b<2;b++)o.S(Math.floor(lx)+b,Math.floor(ly)+a,c)}
 var ex=px+ca*(L+.6),ey=py+sa*(L+.6);for(var a2=-1;a2<=1;a2++)for(var b2=-1;b2<=1;b2++)if(a2*a2+b2*b2<2)o.S(Math.floor(ex)+b2,Math.floor(ey)+a2,'T');o.S(Math.floor(ex)-1,Math.floor(ey)-1,'t');
 for(y=1;y<18;y++)for(x=0;x<18;x++){if(o.g[y][x]==='M'&&o.g[y-1][x]==='.')o.g[y][x]='L';if(o.g[y][x]==='G'&&((x+y)%2===0))o.g[y][x]='g'}
 for(y=-2;y<=2;y++)for(x=-2;x<=2;x++){if(x*x+y*y>5)continue;o.S(px-.5+x,py-.5+y,(x*x+y*y<2)?'k':'P')}
 o.outline('K',true);return o.rows()}
var PX_HPAL={K:'#12141d',B:'#262a3a',b:'#3c4258',M:'#a7b0c8',L:'#e6ecf7',G:'#262a3a',g:'#3e4560',T:'#ff6fae',t:'#ffd0e4',P:'#6a7290',k:'#12141d'};
function pxArrow(left){var o=PXG(16,16),x,y;for(x=1;x<=7;x++){var hh=x-.5;for(y=Math.ceil(7.5-hh);y<=Math.floor(7.5+hh);y++)o.S(x+1,y,'C')}for(x=8;x<=13;x++)for(y=5;y<=10;y++)o.S(x+1,y,'C');
 for(y=1;y<16;y++)for(x=0;x<16;x++){if(o.g[y][x]==='C'&&o.g[y-1][x]==='.')o.g[y][x]='L';else if(o.g[y][x]==='C'&&y<15&&o.G(x,y+1)==='.')o.g[y][x]='D'}
 o.outline('K',true);var r=o.rows();if(!left)r=r.map(function(s){return s.split('').reverse().join('')});return r}
var PX_APAL={K:'#12141d',C:'#6ee7ff',L:'#d8fbff',D:'#2a9cc0'};
function pxGear(){var o=PXG(16,16);for(var y=0;y<16;y++)for(var x=0;x<16;x++){var dx=x-7.5,dy=y-7.5,r=Math.hypot(dx,dy),th=Math.atan2(dy,dx);if(r<=2.3)continue;if(r<=5.3||(r<=7.4&&Math.cos(th*8)>.28))o.S(x,y,'C')}return o.rows()}
function pxRing(N,r0,r1,fill,ring,hl){var o=PXG(N,N),c=(N-1)/2;for(var y=0;y<N;y++)for(var x=0;x<N;x++){var d=Math.hypot(x-c,y-c);if(d>r1)continue;o.S(x,y,d>r0?((x-c)+(y-c)<-r1*.6?'H':'R'):'F')}return o.rows()}
function pxUI(){
 var q=function(id){return document.getElementById(id)};
 if(q('bt'))q('bt').innerHTML=pxSvg(PX_GAS,PXMET,'pdl');
 if(q('bb'))q('bb').innerHTML=pxSvg(PX_BRK,PXMET,'pdl');
 if(q('bh')){var f0=pxHand(-.42),f1=pxHand(-1.12);q('bh').innerHTML='<svg class="hbk" viewBox="0 0 18 18" shape-rendering="crispEdges" aria-hidden="true"><g class="hbf0">'+pxRects(f0,PX_HPAL)+'</g><g class="hbf1">'+pxRects(f1,PX_HPAL)+'</g></svg>'}
 if(q('bl'))q('bl').innerHTML=pxSvg(pxArrow(true),PX_APAL);
 if(q('br'))q('br').innerHTML=pxSvg(pxArrow(false),PX_APAL);
 if(q('bset'))q('bset').innerHTML=pxSvg(pxGear(),{C:'currentColor'});
 var knob=pxUri(pxRing(14,5.2,6.9),{F:'rgba(28,30,46,.62)',R:'rgba(214,222,242,.62)',H:'rgba(255,255,255,.9)'});
 ['slk','stk'].forEach(function(id){var e=q(id);if(e)e.style.backgroundImage=knob});
 var tk=q('tli');if(tk&&tk.firstChild)tk.firstChild.style.backgroundImage=knob;
 var base=PXG(32,32),c=15.5;for(var y=0;y<32;y++)for(var x=0;x<32;x++){var d=Math.hypot(x-c,y-c);if(d>15.6)continue;base.S(x,y,d>14.2?'R':'F')}
 for(var i=0;i<4;i++)for(var j=-i;j<=i;j++){base.S(15.5+j-.5+.5,3+i,'U');base.S(16+j-.5,3+i,'U');base.S(15.5+j,28-i,'V');base.S(16+j-.5,28-i,'V')}
 var sb=q('stb');if(sb)sb.style.backgroundImage=pxUri(base.rows(),{F:'rgba(214,222,242,.09)',R:'rgba(214,222,242,.3)',U:'rgba(125,255,140,.75)',V:'rgba(255,107,107,.75)'});
}
GEAR=pxSvg(pxGear(),{C:'currentColor'});
var _pxBoot=bootUI;bootUI=function(){pxUI();_pxBoot()};

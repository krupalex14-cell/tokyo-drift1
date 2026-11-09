// ===== time of day + lights & glow =====
var TODH=8,TODS={m:[255,255,255],lift:0,L:0,warm:0},TLGL=[],GLWC={},HLC=null,UGC=null;
// hour, multiply colour, screen-lift, light level
var TODK=[[0,[62,68,124],0,1,[255,246,226]],[4.7,[62,68,124],0,1,[255,246,226]],[6.0,[150,124,170],0,.7,[255,200,220]],[7.3,[255,220,204],.08,.16,[255,214,230]],[9.3,[255,255,255],.09,0,[255,246,226]],[16.3,[255,255,255],.09,0,[255,246,226]],[17.6,[255,206,150],.06,.1,[255,170,90]],[18.6,[255,182,124],.08,.28,[255,130,60]],[19.6,[200,116,146],.02,.6,[255,90,120]],[20.6,[96,90,156],0,.9,[255,246,226]],[21.6,[62,68,124],0,1,[255,246,226]],[24,[62,68,124],0,1,[255,246,226]]];
var TODFIX=[null,7.3,13,18.4,23.5],TODN=['авто','утро','день','вечер','ночь'];
function todUpdate(dt){var f=TODFIX[S.tod|0];if(f!=null)TODH=f;else TODH=(TODH+dt*24/720)%24;
 var k=TODK,i=0;while(i<k.length-2&&k[i+1][0]<=TODH)i++;var a=k[i],b=k[i+1],t=(TODH-a[0])/((b[0]-a[0])||1);t=t*t*(3-2*t);
 TODS.m=[0,1,2].map(function(j){return Math.round(a[1][j]+(b[1][j]-a[1][j])*t)});TODS.lc=[0,1,2].map(function(j){return Math.round(a[4][j]+(b[4][j]-a[4][j])*t)});TODS.lift=a[2]+(b[2]-a[2])*t;TODS.L=a[3]+(b[3]-a[3])*t}
function todStr(){var h=Math.floor(TODH),m=Math.floor((TODH-h)*60);return(h<10?'0':'')+h+':'+(m<10?'0':'')+m}
var GLWN=new Map();function glw(c){var nk=((c[0]&255)<<16)|((c[1]&255)<<8)|(c[2]&255),s=GLWN.get(nk);if(s)return s;var key=c.join(',');s=GLWC[key];if(s){GLWN.set(nk,s);return s}s=mkCanvas(32,32);var g=s.getContext('2d'),gr=g.createRadialGradient(16,16,0,16,16,16),rgb=c[0]+','+c[1]+','+c[2];gr.addColorStop(0,'rgba('+rgb+',1)');gr.addColorStop(.3,'rgba('+rgb+',.5)');gr.addColorStop(.65,'rgba('+rgb+',.14)');gr.addColorStop(1,'rgba('+rgb+',0)');g.fillStyle=gr;g.fillRect(0,0,32,32);GLWC[key]=s;GLWN.set(nk,s);return s}
function gl(x,y,rx,ry,c,a){if(a<=.01)return;cx.globalAlpha=Math.min(1,a);cx.drawImage(glw(c),x-rx,y-ry,rx*2,ry*2)}
function hex3(h){h=h.replace('#','');return[parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)]}
// the low beam: it leaves the car as wide as the car and spreads out a little (a trapezoid, not a point-light triangle);
// right at the front the two lamps still show as two brighter patches that merge a few metres ahead
function hlCone(){if(HLC)return HLC;var W=72,H=44,c=mkCanvas(W,H),g=c.getContext('2d'),id=g.createImageData(W,H),d=id.data,w0=6.6,w1=20.8,lp=4.2;
 for(var y=0;y<H;y++)for(var x=0;x<W;x++){var u=(x+.5)/W,dy=Math.abs(y+.5-H/2),hw=w0+(w1-w0)*u,soft=1.4+4.2*u,e=clamp((hw-dy)/soft+.5,0,1);e=e*e*(3-2*e);
  var cw=1-.3*Math.pow(Math.min(1,dy/hw),2),m=clamp(u/.3,0,1),lob=Math.exp(-Math.pow((dy-lp)/(1.6+7*u),2));lob=lob*(1-m)+m;
  var id2=Math.pow(Math.max(0,1-u),1.2),nr=Math.min(1,(x+1.5)/4),I=e*cw*(.45+.55*lob)*id2*nr,o=(y*W+x)*4;d[o]=255;d[o+1]=242;d[o+2]=208;d[o+3]=Math.round(255*Math.min(1,I))}
 g.putImageData(id,0,0);HLC=c;return c}
function carLights(x,y,a,L,Hh,lv,brk,isP){var ca=Math.cos(a),sa=Math.sin(a),hx=L/2,hy=Hh/2,sx=SX(x),sy=SY(y);if(sx<-90||sy<-90||sx>VW+90||sy>VH+90)return;
 var ca2=.05+.42*lv;if(ca2>.03){var cn=hlCone();cx.globalAlpha=Math.min(1,ca2);cx.save();cx.translate(sx,sy);cx.rotate(a);cx.drawImage(cn,hx-2,-hy-15,60*(isP?1.12:1),hy*2+30);cx.restore()}
 var hl=.25+.6*lv;[-1,1].forEach(function(s){var fx=sx+ca*(hx-1)-sa*s*(hy-2.5),fy=sy+sa*(hx-1)+ca*s*(hy-2.5);gl(fx,fy,5,5,[255,246,214],hl);
  var rx=sx-ca*(hx-.5)-sa*s*(hy-2.5),ry=sy-sa*(hx-.5)+ca*s*(hy-2.5);gl(rx,ry,brk?8:5,brk?8:5,[255,40,60],(brk?.85:.18+.5*lv))})}
function underglow(lv){if(!S.glow||!sprC)return;var col=hex3(GLOWC[S.glow]),w=sprC.width,h=sprC.height,N=112;if(!UGC)UGC=mkCanvas(N,N);var g=UGC.getContext('2d');
 g.globalCompositeOperation='source-over';g.clearRect(0,0,N,N);var ra=Math.round(car.a/(Math.PI/32))*(Math.PI/32),pul=.78+.22*Math.sin(TIME*4.2);
 g.save();g.translate(N/2,N/2);g.rotate(ra);g.imageSmoothingEnabled=true;g.globalAlpha=.6*pul;g.drawImage(glw(col),-w/2-38,-h/2-32,w+76,h+64);g.globalAlpha=1*pul;g.drawImage(glw(col),-w/2-12,-h/2-10,w+24,h+20);g.globalAlpha=.9;g.drawImage(glw([255,255,255]),-w/2-3,-h/2-3,w+6,h+6);
 g.globalCompositeOperation='destination-out';g.globalAlpha=1;g.imageSmoothingEnabled=false;g.drawImage(sprC,-w/2,-h/2);g.restore();
 cx.globalAlpha=Math.min(1,.62+.5*lv);cx.drawImage(UGC,SX(car.x)-N/2+1,SY(car.y)-N/2+2)}
function emisBake(ch){var g=ch.g.getContext('2d'),T=ch.t,dd=g.getImageData(0,0,CH,CH).data,EI=null,eb=null,E=null;ch.e=null;ch.eh=null;
 for(var q=0,o=0;q<65536;q++,o+=4){var r=dd[o],gg=dd[o+1],b=dd[o+2];if(r<197&&gg<197&&b<197)continue;if(T[q]===0)continue;var mx=r>gg?(r>b?r:b):(gg>b?gg:b),mn=r<gg?(r<b?r:b):(gg<b?gg:b);if((r>214&&gg>160&&b<180&&r-b>55)||(mx-mn>105)){if(!EI){E=mkCanvas(CH,CH);EI=E.getContext('2d').createImageData(CH,CH);eb=EI.data}eb[o]=r;eb[o+1]=gg;eb[o+2]=b;eb[o+3]=255}}
 if(E){E.getContext('2d').putImageData(EI,0,0);var EH=mkCanvas(CH/4+4,CH/4+4),hg=EH.getContext('2d');hg.imageSmoothingEnabled=true;hg.drawImage(E,2,2,CH/4,CH/4);ch.e=E;ch.eh=EH}}
function emisDraw(a){if(a<=.02)return;var ox=cam.ox,oy=cam.oy,bud=1;
 for(var j=Math.floor(oy/CH);j<=Math.floor((oy+VH)/CH);j++)for(var i=Math.floor(ox/CH);i<=Math.floor((ox+VW)/CH);i++){var ch=chunkGet(i,j);if(!ch)continue;if(ch.e===undefined){if(bud-->0)emisBake(ch);else continue}if(!ch.e)continue;var bx=i*CH-ox,by=j*CH-oy;
  cx.imageSmoothingEnabled=true;cx.globalAlpha=Math.min(1,a*.75);cx.drawImage(ch.eh,bx-8,by-8,CH+16,CH+16);cx.imageSmoothingEnabled=false;cx.globalAlpha=Math.min(1,a*.7);cx.drawImage(ch.e,bx,by)}}
function animGlows(a){if(a<=.02)return;var ox=cam.ox,oy=cam.oy;
 for(var j=Math.floor(oy/CH);j<=Math.floor((oy+VH)/CH);j++)for(var i=Math.floor(ox/CH);i<=Math.floor((ox+VW)/CH);i++){var ch=chunkGet(i,j);if(!ch||!ch.an||!ch.an.length)continue;var bx=i*CH-ox,by=j*CH-oy,Ls=ch.an;
  for(var k=0;k<Ls.length;k++){var o=Ls[k],x=bx+o.x,y=by+o.y;if(x<-60||y<-60||x>VW+60||y>VH+60)continue;
   if(o.t==='neon'){var c=hex3(o.c||'#ff4db8');cx.globalAlpha=Math.min(1,a*.5);cx.drawImage(glw(c),x-10,y-9,o.w+20,o.h+18)}
   else if(o.t==='lant')gl(x,y,11,11,[255,190,110],a*.75);
   else if(o.t==='led')gl(x+o.w/2,y+o.h/2,o.w*.9,o.h*.8,[200,120,255],a*.45)}}}
function lmGlows(a){if(a<=.02)return;for(var i=0;i<LMA.length;i++){var f=LMA[i],bx=SX(f.x),by=SY(f.y);if(bx<-140||bx>VW+140||by<-40||by>VH+300)continue;var fa=(f.fa==null?1:f.fa);
 if(f.k==='tt3'){var t3=ttSprite3();cx.globalAlpha=Math.min(1,a*.42*fa);cx.drawImage(t3,bx-62,by-(t3.height-48));gl(bx,by-120,60,130,[255,120,60],a*.3)}
 else if(f.k==='sky3'){var s3=skySprite3();cx.globalAlpha=Math.min(1,a*.3*fa);cx.drawImage(s3,bx-56,by-(s3.height-44));gl(bx,by-157,34,14,[110,231,255],a*.8);gl(bx,by-205,22,10,[160,120,255],a*.7)}
 else if(f.k==='cyl3'){var c3=cylSprite3();cx.globalAlpha=Math.min(1,a*.32*fa);cx.drawImage(c3,bx-48,by-246);gl(bx,by-170,46,12,[255,77,184],a*.6)}
 else if(f.k==='ferris'){gl(bx,by-(f.R||40)*.6-14,(f.R||40)*1.3,(f.R||40)*1.1,[255,120,200],a*.25)}}}
var LITC=null,LITB=null,TMB=0;
// coarse 16x16 map of where a chunk's upper layer has any pixels (built lazily, a couple per frame)
function topMask(ch){if(ch.um!==undefined)return ch.um;if(!ch.u){ch.um=null;return null}if(TMB<=0)return true;TMB--;
 var d=ch.u.getContext('2d').getImageData(0,0,CH,CH).data,m=new Uint8Array(256),any=0;
 for(var y=0;y<CH;y+=2)for(var x=0;x<CH;x+=2)if(d[(y*CH+x)*4+3]>8){m[(y>>4)*16+(x>>4)]=1;any=1}
 ch.um=any?m:null;return ch.um}
function underTop(x,y,R){var x0=Math.floor(x-R),x1=Math.floor(x+R),y0=Math.floor(y-R),y1=Math.floor(y+R);
 for(var cy=Math.floor(y0/CH);cy<=Math.floor(y1/CH);cy++)for(var cxx=Math.floor(x0/CH);cxx<=Math.floor(x1/CH);cxx++){var ch=chunkGet(cxx,cy);if(!ch)continue;var m=topMask(ch);if(!m)continue;if(m===true)return true;
  var X0=cxx*CH,Y0=cy*CH,a=clamp((x0-X0)>>4,0,15),b=clamp((x1-X0)>>4,0,15),c=clamp((y0-Y0)>>4,0,15),e=clamp((y1-Y0)>>4,0,15);if(x1<X0||y1<Y0||x0>=X0+CH||y0>=Y0+CH)continue;
  for(var q=c;q<=e;q++)for(var p=a;p<=b;p++)if(m[q*16+p])return true}
 return false}
function litLayer(bx,by,bw,bh){if(!LITC||LITC.width!==VW||LITC.height!==VH){LITC=mkCanvas(VW,VH)}var g=LITC.getContext('2d');g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';g.globalAlpha=1;g.clearRect(bx,by,bw,bh);return g}
// erase light wherever the upper layer (overpasses, bridges, canopies) is drawn on top — only inside the box
function litCut(g,bx,by,bw,bh){var ox=cam.ox,oy=cam.oy;g.globalCompositeOperation='destination-out';g.globalAlpha=Math.min(1,underA+.2);g.imageSmoothingEnabled=false;
 for(var j=Math.floor((oy+by)/CH);j<=Math.floor((oy+by+bh)/CH);j++)for(var i=Math.floor((ox+bx)/CH);i<=Math.floor((ox+bx+bw)/CH);i++){var ch=chunkGet(i,j);if(!ch||!ch.u)continue;
  var dx=i*CH-ox,dy=j*CH-oy,sx=Math.max(0,bx-dx),sy=Math.max(0,by-dy),ex=Math.min(CH,bx+bw-dx),ey=Math.min(CH,by+bh-dy);if(ex<=sx||ey<=sy)continue;g.drawImage(ch.u,sx,sy,ex-sx,ey-sy,dx+sx,dy+sy,ex-sx,ey-sy)}
 g.globalCompositeOperation='source-over';g.globalAlpha=1}
// how high the deck is over a car and the ground its headlights reach: where a ramp is still almost at street level the
// beam lights the ramp (it used to vanish "under the bridge" right where the ramp leaves the street)
function beamHigh(x,y,a){var c=Math.cos(a),s=Math.sin(a),hm=0;for(var d=0;d<=72;d+=18)for(var o=-12;o<=12;o+=12){var di=deckInfo(wrap(x+c*d-s*o),wrap(y+s*d+c*o));if(di.inside&&di.h>hm){hm=di.h;if(hm>.6)return hm}}return hm}
function lightPass(){var lv=TODS.L,m=TODS.m;
 if(m[0]<255||m[1]<255||m[2]<255){cx.globalCompositeOperation='multiply';cx.globalAlpha=1;cx.fillStyle='rgb('+m[0]+','+m[1]+','+m[2]+')';cx.fillRect(0,0,VW,VH)}
 if(TODS.lift>.005){cx.globalCompositeOperation='screen';cx.globalAlpha=1;var lc=TODS.lc||[255,246,226];cx.fillStyle='rgba('+lc[0]+','+lc[1]+','+lc[2]+','+TODS.lift.toFixed(3)+')';cx.fillRect(0,0,VW,VH)}
 cx.globalCompositeOperation='lighter';cx.imageSmoothingEnabled=true;
 emisDraw(lv);cx.imageSmoothingEnabled=true;animGlows(lv);lmGlows(lv);
 if(lv>.02){for(var i=0;i<BKL.length;i++){var p=BKL[i];if(p.hid||p.brk)continue;if(p.t===P_LAMP){var x=SX(p.x),y=SY(p.y);if(x<-50||y<-50||x>VW+50||y>VH+50)continue;var dx=Math.round(Math.cos(p.a)*5),dy=Math.round(Math.sin(p.a)*5),hx=x+dx,hy=y+dy-3;gl(hx,hy+7,52,40,[255,190,115],lv*.46);gl(hx,hy+5,24,18,[255,222,170],lv*.34);gl(hx,hy,7,7,[255,240,200],lv*.95)}
   else if(p.t===P_VEND){gl(SX(p.x),SY(p.y)+2,14,12,[170,225,255],lv*.5)}}
  for(i=0;i<TLGL.length;i+=3){var cc=TLGL[i+2]===0?[61,240,176]:TLGL[i+2]===1?[255,210,58]:[255,58,58];gl(TLGL[i],TLGL[i+1],12,12,cc,.25+lv*.7)}}
 // lights of ground-level cars near an overpass/bridge go through a masked layer; the rest draw straight on
 TMB=2;var LR=84,mk=[],bx0=1e9,by0=1e9,bx1=-1e9,by1=-1e9;
 function one(v,isP){if(v&&v.rem){remLight(v,lv);return}if(isP)carLights(car.x,car.y,car.a,sprC?sprC.width:28,sprC?sprC.height:15,lv,K.b&&car.fw>0&&mode==='game',true);else{var V=VTY[v.vt];carLights(v.x,v.y,v.a,V.L,V.H+1,lv,(v.bk||0)>.3,false)}if(isP)underglow(lv)}
 function route(v,isP){var x=isP?car.x:v.x,y=isP?car.y:v.y,l=isP?(car.l|0):(v.l|0),sx=SX(x),sy=SY(y);if(sx<-90||sy<-90||sx>VW+90||sy>VH+90)return;
  if(l===0&&underTop(x,y,LR)&&beamHigh(x,y,isP?car.a:(v.a||0))>.6){mk.push([v,isP]);bx0=Math.min(bx0,sx-LR);by0=Math.min(by0,sy-LR);bx1=Math.max(bx1,sx+LR);by1=Math.max(by1,sy+LR)}else one(v,isP)}
 for(i=0;i<AI.length;i++){if(!AI[i].fd)route(AI[i],false)}if(car)route(null,true);if(typeof NET!=='undefined'&&NET.on&&mode==='game')for(var rid in REM){if(REM[rid].vis)route(REM[rid],false)}if(typeof RIV!=='undefined'&&mode==='game')for(var ri2=0;ri2<RIV.length;ri2++)route(RIV[ri2],false)
 if(mk.length){var bx=Math.max(0,Math.floor(bx0)),by=Math.max(0,Math.floor(by0)),bw=Math.min(VW,Math.ceil(bx1))-bx,bh=Math.min(VH,Math.ceil(by1))-by;
  if(bw>0&&bh>0){var mc=cx,lc=litLayer(bx,by,bw,bh);cx=lc;cx.globalCompositeOperation='lighter';cx.imageSmoothingEnabled=true;mk.forEach(function(e){one(e[0],e[1])});litCut(lc,bx,by,bw,bh);cx=mc;cx.globalCompositeOperation='lighter';cx.globalAlpha=1;cx.drawImage(LITC,bx,by,bw,bh,bx,by,bw,bh)}}
 cx.globalCompositeOperation='source-over';cx.globalAlpha=1;cx.imageSmoothingEnabled=false}
function todMini(g){var D=DPR,ts=todStr();g.font=(11*D)+'px TokyoPx,monospace';g.textBaseline='middle';var tw=g.measureText(ts).width,W=tw+15*D,H=12*D,x0=MMS-W-2*D,y0=MMS-H-2*D;g.fillStyle='rgba(12,10,26,.85)';g.fillRect(x0,y0,W,H);
 var night=TODS.L>.5,ix=Math.round(x0+3*D),iy=Math.round(y0+3*D),u=Math.max(1,Math.round(D));
 if(night){g.fillStyle='#d8e4ff';g.fillRect(ix+u,iy,3*u,u);g.fillRect(ix,iy+u,2*u,4*u);g.fillRect(ix+u,iy+5*u,3*u,u);g.fillRect(ix+2*u,iy+u,u,u);g.fillRect(ix+2*u,iy+4*u,u,u)}
 else{g.fillStyle=TODS.m[2]<230?'#ffb050':'#ffd23a';g.fillRect(ix+u,iy+u,4*u,4*u);g.fillRect(ix+2*u,iy,2*u,6*u);g.fillRect(ix,iy+2*u,6*u,2*u)}
 g.fillStyle='#fff';g.fillText(ts,x0+11*D,y0+H/2+.5*D);g.textBaseline='alphabetic'}

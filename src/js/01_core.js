var GAME_BUILD='06.11 23:31';
'use strict';
var WS=10240,CH=256,NC=WS/CH,OC=8,ON=WS/OC,HC=128,HN=WS/HC,TAU=Math.PI*2;
function wrap(a){a%=WS;return a<0?a+WS:a}
function wd(a,b){var d=(a-b)%WS;if(d<-WS/2)d+=WS;else if(d>=WS/2)d-=WS;return d}
function clamp(v,a,b){return v<a?a:v>b?b:v}
function lerp(a,b,t){return a+(b-a)*t}
function sstep(t){t=clamp(t,0,1);return t*t*(3-2*t)}
function angd(a,b){var d=(a-b)%TAU;if(d<-Math.PI)d+=TAU;else if(d>Math.PI)d-=TAU;return d}
var _sd=1;function srand(s){_sd=s|0||1}
function R01(){_sd=(_sd+0x6D2B79F5)|0;var t=Math.imul(_sd^_sd>>>15,1|_sd);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}
function RR(a,b){return a+(b-a)*R01()}
function RI(a,b){return Math.floor(a+(b-a+1)*R01())}
function hsh(x,y,s){var n=Math.imul(x|0,374761393)+Math.imul(y|0,668265263)+Math.imul(s|0,1274126177);n=Math.imul(n^(n>>>13),1274126177);return((n^(n>>>16))>>>0)/4294967296}
function shadeHex(hex,f){var n=parseInt(hex.slice(1),16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;if(f>1){var k=f-1;r+=(255-r)*k;g+=(255-g)*k;b+=(255-b)*k}else{r*=f;g*=f;b*=f}return'rgb('+(r|0)+','+(g|0)+','+(b|0)+')'}
function hexRgb(hex){var n=parseInt(hex.slice(1),16);return[(n>>16)&255,(n>>8)&255,n&255]}
var QS=0;
function Hash(){this.c=new Array(HN*HN)}
Hash.prototype.add=function(o,x0,y0,x1,y1){var a=Math.floor(x0/HC),b=Math.floor(x1/HC),c=Math.floor(y0/HC),d=Math.floor(y1/HC);if(b-a>=HN)b=a+HN-1;if(d-c>=HN)d=c+HN-1;for(var y=c;y<=d;y++){var yy=((y%HN)+HN)%HN;for(var x=a;x<=b;x++){var k=yy*HN+(((x%HN)+HN)%HN);(this.c[k]||(this.c[k]=[])).push(o)}}};
Hash.prototype.q=function(x0,y0,x1,y1,fn){var st=++QS,a=Math.floor(x0/HC),b=Math.floor(x1/HC),c=Math.floor(y0/HC),d=Math.floor(y1/HC);if(b-a>=HN)b=a+HN-1;if(d-c>=HN)d=c+HN-1;for(var y=c;y<=d;y++){var yy=((y%HN)+HN)%HN;for(var x=a;x<=b;x++){var l=this.c[yy*HN+(((x%HN)+HN)%HN)];if(!l)continue;for(var i=0;i<l.length;i++){var o=l[i];if(o._q!==st){o._q=st;fn(o)}}}}};
Hash.prototype.rm=function(o){for(var i=0;i<this.c.length;i++){var l=this.c[i];if(!l)continue;var j=l.indexOf(o);if(j>=0)l.splice(j,1)}};
function Road(p,o){this.xs=p.x;this.ys=p.y;this.ds=p.ds;this.n=p.x.length;this.len=(this.n-1)*p.ds;for(var k in o)this[k]=o[k]}
Road.prototype.pt=function(s,out){var n=this.n,f=s/this.ds,i=Math.floor(f);if(i<0)i=0;if(i>n-2)i=n-2;f-=i;var x0=this.xs[i],y0=this.ys[i],dx=this.xs[i+1]-x0,dy=this.ys[i+1]-y0,l=Math.hypot(dx,dy)||1;out[0]=x0+dx*f;out[1]=y0+dy*f;out[2]=dx/l;out[3]=dy/l;return out};
Road.prototype.hAt=function(s){if(!this.h)return this.k==='exp'?1:0;var f=s/this.ds,i=Math.floor(f);if(i<0)return this.h[0];if(i>=this.n-1)return this.h[this.n-1];f-=i;return this.h[i]+(this.h[i+1]-this.h[i])*f};
function resample(px,py,ds){var n=px.length,cum=[0],i;for(i=1;i<n;i++)cum.push(cum[i-1]+Math.hypot(px[i]-px[i-1],py[i]-py[i-1]));var L=cum[n-1],m=Math.max(2,Math.round(L/ds)+1),d=L/(m-1),xs=new Float32Array(m),ys=new Float32Array(m),j=0;for(i=0;i<m;i++){var s=i*d;while(j<n-2&&cum[j+1]<s)j++;var f=(s-cum[j])/((cum[j+1]-cum[j])||1);xs[i]=px[j]+(px[j+1]-px[j])*f;ys[i]=py[j]+(py[j+1]-py[j])*f}return{x:xs,y:ys,ds:d}}
function bez(x0,y0,x1,y1,x2,y2,x3,y3,ds){var N=240,px=[],py=[];for(var i=0;i<=N;i++){var t=i/N,u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,d=t*t*t;px.push(a*x0+b*x1+c*x2+d*x3);py.push(a*y0+b*y1+c*y2+d*y3)}return resample(px,py,ds)}
function catmull(kx,ky,seg){var px=[],py=[],n=kx.length;for(var i=0;i<n-1;i++){var a=Math.max(0,i-1),c=i+1,d=Math.min(n-1,i+2);for(var k=0;k<seg;k++){var t=k/seg,t2=t*t,t3=t2*t;px.push(.5*(2*kx[i]+(-kx[a]+kx[c])*t+(2*kx[a]-5*kx[i]+4*kx[c]-kx[d])*t2+(-kx[a]+3*kx[i]-3*kx[c]+kx[d])*t3));py.push(.5*(2*ky[i]+(-ky[a]+ky[c])*t+(2*ky[a]-5*ky[i]+4*ky[c]-ky[d])*t2+(-ky[a]+3*ky[i]-3*ky[c]+ky[d])*t3))}}px.push(kx[n-1]);py.push(ky[n-1]);return{px:px,py:py}}
var TMP=[0,0,0,0],TMP2=[0,0,0,0];

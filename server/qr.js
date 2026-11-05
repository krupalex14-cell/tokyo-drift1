// ===== QR code encoder (byte mode, ECC level L, versions 1-5, single RS block) =====
var QRV=[null,{n:26,e:7,al:[]},{n:44,e:10,al:[6,18]},{n:70,e:15,al:[6,22]},{n:100,e:20,al:[6,26]},{n:134,e:26,al:[6,30]}];
function qrMul(x,y){var z=0;for(var i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z&255}
function qrRS(data,deg){var dv=[],i,j,root=1;for(i=0;i<deg-1;i++)dv.push(0);dv.push(1);
 for(i=0;i<deg;i++){for(j=0;j<dv.length;j++){dv[j]=qrMul(dv[j],root);if(j+1<dv.length)dv[j]^=dv[j+1]}root=qrMul(root,2)}
 var r=[];for(i=0;i<deg;i++)r.push(0);data.forEach(function(b){var f=b^r.shift();r.push(0);for(var k=0;k<deg;k++)r[k]^=qrMul(dv[k],f)});return r}
function qrBytes(s){var u=unescape(encodeURIComponent(s)),a=[];for(var i=0;i<u.length;i++)a.push(u.charCodeAt(i));return a}
// returns a size x size array of booleans (true = dark), or null if the text is too long
function qrMake(text){var bytes=qrBytes(text),ver=0;
 for(var v=1;v<=5;v++){if(4+8+bytes.length*8<=(QRV[v].n-QRV[v].e)*8){ver=v;break}}if(!ver)return null;
 var V=QRV[ver],nd=V.n-V.e,size=17+ver*4,bits=[];
 function put(val,len){for(var i=len-1;i>=0;i--)bits.push((val>>>i)&1)}
 put(4,4);put(bytes.length,8);bytes.forEach(function(b){put(b,8)});
 put(0,Math.min(4,nd*8-bits.length));while(bits.length%8)bits.push(0);
 var cw=[];for(var i=0;i<bits.length;i+=8){var b=0;for(var k=0;k<8;k++)b=(b<<1)|bits[i+k];cw.push(b)}
 for(var p=0;cw.length<nd;p++)cw.push(p%2?0x11:0xEC);
 var all=cw.concat(qrRS(cw,V.e));
 var M=[],F=[],y,x;for(y=0;y<size;y++){M.push([]);F.push([]);for(x=0;x<size;x++){M[y].push(false);F[y].push(false)}}
 function fn(x,y,d){M[y][x]=d;F[y][x]=true}
 for(i=0;i<size;i++){fn(6,i,i%2===0);fn(i,6,i%2===0)}
 [[3,3],[size-4,3],[3,size-4]].forEach(function(c){for(var dy=-4;dy<=4;dy++)for(var dx=-4;dx<=4;dx++){var xx=c[0]+dx,yy=c[1]+dy;if(xx<0||yy<0||xx>=size||yy>=size)continue;var d=Math.max(Math.abs(dx),Math.abs(dy));fn(xx,yy,d!==2&&d!==4)}});
 var al=V.al;for(i=0;i<al.length;i++)for(var j=0;j<al.length;j++){if((i===0&&j===0)||(i===0&&j===al.length-1)||(i===al.length-1&&j===0))continue;for(var dy2=-2;dy2<=2;dy2++)for(var dx2=-2;dx2<=2;dx2++)fn(al[i]+dx2,al[j]+dy2,Math.max(Math.abs(dx2),Math.abs(dy2))!==1)}
 function fmt(mask){var data=(1<<3)|mask,rem=data;for(var i=0;i<10;i++)rem=(rem<<1)^((rem>>>9)*0x537);var b=((data<<10)|rem)^0x5412;function g(i){return((b>>>i)&1)!==0}
  for(i=0;i<=5;i++)fn(8,i,g(i));fn(8,7,g(6));fn(8,8,g(7));fn(7,8,g(8));for(i=9;i<15;i++)fn(14-i,8,g(i));
  for(i=0;i<8;i++)fn(size-1-i,8,g(i));for(i=8;i<15;i++)fn(8,size-15+i,g(i));fn(8,size-8,true)}
 fmt(0);
 var bi=0,total=all.length*8;
 for(var right=size-1;right>=1;right-=2){if(right===6)right=5;for(var vert=0;vert<size;vert++)for(var jj=0;jj<2;jj++){x=right-jj;var up=((right+1)&2)===0;y=up?size-1-vert:vert;if(!F[y][x]&&bi<total){M[y][x]=((all[bi>>>3]>>>(7-(bi&7)))&1)!==0;bi++}}}
 function mk(m,x,y){switch(m){case 0:return(x+y)%2===0;case 1:return y%2===0;case 2:return x%3===0;case 3:return(x+y)%3===0;case 4:return(Math.floor(x/3)+Math.floor(y/2))%2===0;case 5:return x*y%2+x*y%3===0;case 6:return(x*y%2+x*y%3)%2===0;default:return((x+y)%2+x*y%3)%2===0}}
 function apply(m){for(var y=0;y<size;y++)for(var x=0;x<size;x++)if(!F[y][x]&&mk(m,x,y))M[y][x]=!M[y][x]}
 function pen(){var p=0,dark=0,y,x,run,c;
  for(y=0;y<size;y++){run=1;for(x=1;x<=size;x++){if(x<size&&M[y][x]===M[y][x-1])run++;else{if(run>=5)p+=run-2;run=1}}}
  for(x=0;x<size;x++){run=1;for(y=1;y<=size;y++){if(y<size&&M[y][x]===M[y-1][x])run++;else{if(run>=5)p+=run-2;run=1}}}
  for(y=0;y<size-1;y++)for(x=0;x<size-1;x++){c=M[y][x];if(c===M[y][x+1]&&c===M[y+1][x]&&c===M[y+1][x+1])p+=3}
  for(y=0;y<size;y++)for(x=0;x<size;x++){if(M[y][x])dark++;if(x<size-6&&M[y][x]&&!M[y][x+1]&&M[y][x+2]&&M[y][x+3]&&M[y][x+4]&&!M[y][x+5]&&M[y][x+6])p+=40;if(y<size-6&&M[y][x]&&!M[y+1][x]&&M[y+2][x]&&M[y+3][x]&&M[y+4][x]&&!M[y+5][x]&&M[y+6][x])p+=40}
  return p+Math.floor(Math.abs(dark*20-size*size*10)/(size*size))*10}
 var best=0,bp=1e9;for(var m=0;m<8;m++){apply(m);fmt(m);var q=pen();if(q<bp){bp=q;best=m}apply(m)}
 apply(best);fmt(best);return M}
// crisp SVG with a quiet zone
function qrSvg(text,dark,light){var M=qrMake(text);if(!M)return'';var n=M.length,Q=4,W=n+Q*2,s='<svg viewBox="0 0 '+W+' '+W+'" shape-rendering="crispEdges" aria-hidden="true"><rect width="'+W+'" height="'+W+'" fill="'+(light||'#fff')+'"/>';
 for(var y=0;y<n;y++){var x=0;while(x<n){if(!M[y][x]){x++;continue}var x0=x;while(x<n&&M[y][x])x++;s+='<rect x="'+(x0+Q)+'" y="'+(y+Q)+'" width="'+(x-x0)+'" height="1" fill="'+(dark||'#000')+'"/>'}}
 return s+'</svg>'}

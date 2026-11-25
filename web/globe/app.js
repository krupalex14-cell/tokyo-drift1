(()=>{var vu=0,rc=1,yu=2;var Sr=1,Mu=2,Ss=3,pi=0,Fe=1,an=2,Fi=0,Jn=1,je=2,ac=3,oc=4,Su=5;var Oi=100,bu=101,wu=102,Au=103,Tu=104,Eu=200,Cu=201,Ru=202,Pu=203,lc=204,cc=205,Iu=206,Lu=207,Nu=208,Du=209,Uu=210,Fu=211,Ou=212,Bu=213,ku=214,Sa=0,ba=1,wa=2,cs=3,Aa=4,Ta=5,Ea=6,Ca=7,hc=0,zu=1,Hu=2,Nn=0,uc=1,dc=2,fc=3,pc=4,mc=5,gc=6,_c=7;var xc=300,Bi=301,bs=302,ao=303,oo=304,hs=1e3,Rn=1001,Ra=1002,Re=1003,Gu=1004;var br=1005;var $e=1006,lo=1007;var Kn=1008;var Qe=1009,vc=1010,yc=1011,ws=1012,co=1013,Mn=1014,Sn=1015,bn=1016,ho=1017,uo=1018,ki=1020,Mc=35902,Sc=35899,bc=1021,wc=1022,wn=1023,qn=1026,jn=1027,Ac=1028,fo=1029,mi=1030,po=1031;var mo=1033,wr=33776,Ar=33777,Tr=33778,Er=33779,go=35840,_o=35841,xo=35842,vo=35843,yo=36196,Mo=37492,So=37496,bo=37488,wo=37489,Cr=37490,Ao=37491,To=37808,Eo=37809,Co=37810,Ro=37811,Po=37812,Io=37813,Lo=37814,No=37815,Do=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,ko=37821,zo=36492,Ho=36494,Go=36495,Vo=36283,Wo=36284,Rr=36285,Xo=36286;var Zs=2300,Pa=2301,va=2302,Kl=2303,jl=2400,Ql=2401,tc=2402;var Vu=3200;var Tc=0,Wu=1,An="",qe="srgb",Js="srgb-linear",Ks="linear",te="srgb";var ya=7680;var Xu=519,qu=512,Yu=513,$u=514,Ec=515,Zu=516,Ju=517,Cc=518,Rc=519,Pc=35044;var Ic="300 es",fn=2e3,us=2001;function jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=ds("canvas");return i.style.display="block",i}var zh={},fs=null;function js(...i){let t="THREE."+i.shift();fs?fs("log",t,...i):console.log(t,...i)}function ju(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=ju(i);let t="THREE."+i.shift();if(fs)fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ut(...i){i=ju(i);let t="THREE."+i.shift();if(fs)fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ws(...i){let t=i.join(" ");t in zh||(zh[t]=!0,Lt(...i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var td={[Sa]:Sa,[wa]:Ea,[Aa]:Aa,[cs]:Ta,[ba]:ba,[Ea]:wa,[Ca]:Ca,[Ta]:cs},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,Xs=Math.PI/180,ps=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function tp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ep(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function np(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function ip(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ap(i,t){return i+Math.floor(Math.random()*(t-i+1))}function op(i,t){return i+Math.random()*(t-i)}function lp(i){return i*(.5-Math.random())}function cp(i){i!==void 0&&(Hh=i);let t=Hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(i){return i*Xs}function up(i){return i*ps}function dp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dc(i,t){if(t.constructor===Float32Array)return i;let e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Uc(i,t){if(t.constructor===Float32Array)return i;let e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ge={DEG2RAD:Xs,RAD2DEG:ps,generateUUID:gi,clamp:Wt,euclideanModulo:Lc,mapLinear:tp,inverseLerp:ep,lerp:qs,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:ap,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:fp,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:pp,normalize:Uc,denormalize:Dc},Hc=class Hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hc.prototype.isVector2=!0;var Tt=Hc,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),C=Math.sin(M);m=Math.sin(m*M)/C,o=Math.sin(o*M)/C,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gc=class Gc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return El.copy(this).projectOnVector(t),this.sub(El)}reflect(t){return this.sub(El.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gc.prototype.isVector3=!0;var O=Gc,El=new O,Gh=new In,Vc=class Vc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],M=s[1],C=s[4],S=s[7],w=s[2],A=s[5],_=s[8];return r[0]=a*x+o*M+l*w,r[3]=a*p+o*C+l*A,r[6]=a*m+o*S+l*_,r[1]=c*x+h*M+u*w,r[4]=c*p+h*C+u*A,r[7]=c*m+h*S+u*_,r[2]=d*x+f*M+g*w,r[5]=d*p+f*C+g*A,r[8]=d*m+f*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vc.prototype.isMatrix3=!0;var Ft=Vc,Cl=new Ft,Vh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:t,whitePoint:n,transfer:Ks,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var Zt=mp();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=ds("canvas")),Wi.width=t.width,Wi.height=t.height;let s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gp=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rl(s[a].image)):r.push(Rl(s[a]))}else r=Rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var _p=0,Pl=new O,He=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=$e,a=Kn,o=wn,l=Qe,c=i.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=gi(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=xc;He.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,S=(f+1)/2,w=(m+1)/2,A=(h+d)/4,_=(u+x)/4,b=(g+p)/4;return C>S&&C>w?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=A/n,r=_/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var he=Wc,La=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new He({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ro=class ro{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xp,t,vp)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ii.crossVectors(n,en),ii.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ii.crossVectors(n,en)),ii.normalize(),$r.crossVectors(en,ii),s[0]=ii.x,s[4]=$r.x,s[8]=en.x,s[1]=ii.y,s[5]=$r.y,s[9]=en.y,s[2]=ii.z,s[6]=$r.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],C=n[7],S=n[11],w=n[15],A=s[0],_=s[4],b=s[8],U=s[12],P=s[1],F=s[5],k=s[9],N=s[13],R=s[2],V=s[6],q=s[10],W=s[14],nt=s[3],X=s[7],J=s[11],tt=s[15];return r[0]=a*A+o*P+l*R+c*nt,r[4]=a*_+o*F+l*V+c*X,r[8]=a*b+o*k+l*q+c*J,r[12]=a*U+o*N+l*W+c*tt,r[1]=h*A+u*P+d*R+f*nt,r[5]=h*_+u*F+d*V+f*X,r[9]=h*b+u*k+d*q+f*J,r[13]=h*U+u*N+d*W+f*tt,r[2]=g*A+x*P+p*R+m*nt,r[6]=g*_+x*F+p*V+m*X,r[10]=g*b+x*k+p*q+m*J,r[14]=g*U+x*N+p*W+m*tt,r[3]=M*A+C*P+S*R+w*nt,r[7]=M*_+C*F+S*V+w*X,r[11]=M*b+C*k+S*q+w*J,r[15]=M*U+C*N+S*W+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],M=l*f-c*d,C=o*f-c*u,S=o*d-l*u,w=a*f-c*h,A=a*d-l*h,_=a*u-o*h;return e*(x*M-p*C+m*S)-n*(g*M-p*w+m*A)+s*(g*C-x*w+m*_)-r*(g*S-x*A+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],M=e*o-n*a,C=e*l-s*a,S=e*c-r*a,w=n*l-s*o,A=n*c-r*o,_=s*c-r*l,b=h*x-u*g,U=h*p-d*g,P=h*m-f*g,F=u*p-d*x,k=u*m-f*x,N=d*m-f*p,R=M*N-C*k+S*F+w*P-A*U+_*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/R;return t[0]=(o*N-l*k+c*F)*V,t[1]=(s*k-n*N-r*F)*V,t[2]=(x*_-p*A+m*w)*V,t[3]=(d*A-u*_-f*w)*V,t[4]=(l*P-a*N-c*U)*V,t[5]=(e*N-s*P+r*U)*V,t[6]=(p*S-g*_-m*C)*V,t[7]=(h*_-d*S+f*C)*V,t[8]=(a*k-o*P+c*b)*V,t[9]=(n*P-e*k-r*b)*V,t[10]=(g*A-x*S+m*M)*V,t[11]=(u*S-h*A-f*M)*V,t[12]=(o*U-a*F-l*b)*V,t[13]=(e*F-n*U+s*b)*V,t[14]=(x*C-g*w-p*M)*V,t[15]=(h*w-u*C+d*M)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,M=l*c,C=l*h,S=l*u,w=n.x,A=n.y,_=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+S)*w,s[2]=(g-C)*w,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(d+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+C)*_,s[9]=(p-M)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,h=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===fn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===fn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ro.prototype.isMatrix4=!0;var re=ro,Xi=new O,_n=new re,xp=new O(0,0,0),vp=new O(1,1,1),ii=new O,$r=new O,en=new O,Xh=new re,qh=new In,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,Yh=new O,qi=new In,Bn=new re,Zr=new O,Os=new O,Mp=new O,Sp=new In,$h=new O(1,0,0),Zh=new O(0,1,0),Jh=new O(0,0,1),Kh={type:"added"},bp={type:"removed"},Yi={type:"childadded",child:null},Il={type:"childremoved",child:null},Ne=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new li,n=new In,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis($h,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return Yh.copy(t).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($h,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Os,Zr,this.up):Bn.lookAt(Zr,Os,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),Il.child=t,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new O(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ll(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Lc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ll(a,r,t+1/3),this.g=Ll(a,r,t),this.b=Ll(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Zt.workingToColorSpace(ze.copy(this),t),Math.round(Wt(ze.r*255,0,255))*65536+Math.round(Wt(ze.g*255,0,255))*256+Math.round(Wt(ze.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=qe){Zt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Jr);let n=qs(si.h,Jr.h,e),s=qs(si.s,Jr.s,e),r=qs(si.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new kt;kt.NAMES=ed;var er=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new O,kn=new O,Nl=new O,zn=new O,$i=new O,Zi=new O,jh=new O,Dl=new O,Ul=new O,Fl=new O,Ol=new he,Bl=new he,kl=new he,Vn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),kn.subVectors(n,e),Nl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(Nl),c=kn.dot(kn),h=kn.dot(Nl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ol.setScalar(0),Bl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(t,e),Bl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ol,r.x),a.addScaledVector(Bl,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;$i.subVectors(s,n),Zi.subVectors(r,n),Dl.subVectors(t,n);let l=$i.dot(Dl),c=Zi.dot(Dl);if(l<=0&&c<=0)return e.copy(n);Ul.subVectors(t,s);let h=$i.dot(Ul),u=Zi.dot(Ul);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector($i,a);Fl.subVectors(t,r);let f=$i.dot(Fl),g=Zi.dot(Fl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zi,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return jh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(jh,o);let m=1/(p+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector($i,a).addScaledVector(Zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),jr.subVectors(this.max,Bs),Ji.subVectors(t.a,Bs),Ki.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),ri.subVectors(Ki,Ji),ai.subVectors(ji,Ki),Ci.subVectors(Ji,ji);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!zl(e,Ji,Ki,ji,jr)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,Ji,Ki,ji,jr))?!1:(Qr.crossVectors(ri,ai),e=[Qr.x,Qr.y,Qr.z],zl(e,Ji,Ki,ji,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new O,new O,new O,new O,new O,new O,new O,new O],vn=new O,Kr=new ci,Ji=new O,Ki=new O,ji=new O,ri=new O,ai=new O,Ci=new O,Bs=new O,jr=new O,Qr=new O,Ri=new O;function zl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ve=new O,ta=new Tt,Ap=0,Ke=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=t!==void 0?qo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uc(t,this.array)}};var nr=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tp=new ci,ks=new O,Hl=new O,Li=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Hl)),this.expandByPoint(ks.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ep=0,dn=new re,Gl=new Ne,Qi=new O,nn=new ci,zs=new ci,Ce=new O,Ze=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(nn.min,zs.min),nn.expandByPoint(Ce),Ce.addVectors(nn.max,zs.max),nn.expandByPoint(Ce)):(nn.expandByPoint(zs.min),nn.expandByPoint(zs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Ce.add(Qi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;let h=new O,u=new O,d=new O,f=new Tt,g=new Tt,x=new Tt,p=new O,m=new O;function M(U,P,F){c[U]=c[P]=c[F]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,U),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,F),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let k=1/(g.x*x.y-x.x*g.y);isFinite(k)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(k),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(k),o[U].add(p),o[P].add(p),o[F].add(p),l[U].add(m),l[P].add(m),l[F].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let U=0,P=C.length;U<P;++U){let F=C[U],k=F.start,N=F.count;for(let R=k,V=k+N;R<V;R+=3)M(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let S=new O,w=new O,A=new O,_=new O;function b(U){A.fromBufferAttribute(s,U),_.copy(A);let P=o[U];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(_,P);let k=w.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,k)}for(let U=0,P=n.count;U<P;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ke(d,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Da=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Qh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Qh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Qh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Xe=new O,sr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?qo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dc(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Uc(t,this.data.array)}},Vl=new O,Cp=new O,Rp=new Ft,yn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vl.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(Vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pp=0,Yn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Jn,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ln=class extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ts,Hs=new O,es=new O,ns=new O,is=new Tt,Gs=new Tt,nd=new re,ea=new O,Vs=new O,na=new O,tu=new Tt,Wl=new Tt,eu=new Tt,$n=class extends Ne{constructor(t=new Ln){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Da(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new sr(n,3,0,!1)),ts.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ia(ea.set(-.5,-.5,0),ns,a,es,s,r),ia(Vs.set(.5,-.5,0),ns,a,es,s,r),ia(na.set(.5,.5,0),ns,a,es,s,r),tu.set(0,0),Wl.set(1,0),eu.set(1,1);let o=t.ray.intersectTriangle(ea,Vs,na,!1,Hs);if(o===null&&(ia(Vs.set(-.5,.5,0),ns,a,es,s,r),Wl.set(0,1),o=t.ray.intersectTriangle(ea,na,Vs,!1,Hs),o===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Vn.getInterpolation(Hs,ea,Vs,na,tu,Wl,eu,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ia(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*is.x-s*is.y,Gs.y=s*is.x+r*is.y):Gs.copy(is),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(nd)}var Gn=new O,Xl=new O,sa=new O,ra=new O,rr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),ra.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sa),o=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xl).addScaledVector(sa,d),f}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,C=n.z-a.z,S=Math.abs(l),w=Math.abs(c),A=Math.abs(h),_,b,U,P,F,k,N,R,V,q,W,nt;if(S>=w&&S>=A?(U=l,k=u,V=g,nt=m,l>=0?(_=c,b=h,P=d,F=f,N=x,R=p,q=M,W=C):(_=h,b=c,P=f,F=d,N=p,R=x,q=C,W=M)):w>=A?(U=c,k=d,V=x,nt=M,c>=0?(_=h,b=l,P=f,F=u,N=p,R=g,q=C,W=m):(_=l,b=h,P=u,F=f,N=g,R=p,q=m,W=C)):(U=h,k=f,V=p,nt=C,h>=0?(_=l,b=c,P=u,F=d,N=g,R=x,q=m,W=M):(_=c,b=l,P=d,F=u,N=x,R=g,q=M,W=m)),U===0)return null;let X=_/U,J=b/U,tt=1/U,yt=P-X*k,Dt=F-J*k,j=N-X*V,_t=R-J*V,St=q-X*nt,Pt=W-J*nt,xt=St*_t-Pt*j,zt=yt*Pt-Dt*St,_e=j*Dt-_t*yt;if(s){if(xt<0||zt<0||_e<0)return null}else if((xt<0||zt<0||_e<0)&&(xt>0||zt>0||_e>0))return null;let Nt=xt+zt+_e;if(Nt===0)return null;let ee=tt*(xt*k+zt*V+_e*nt);return(Nt>0?ee<0:ee>0)?null:this.at(ee/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ua=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nu=new re,Pi=new rr,aa=new Li,iu=new O,oa=new O,la=new O,ca=new O,ql=new O,ha=new O,su=new O,ua=new O,De=class extends Ne{constructor(t=new Ze,e=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ql.fromBufferAttribute(u,t),a?ha.addScaledVector(ql,h):ha.addScaledVector(ql.sub(e),h))}e.add(ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(aa.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(aa,iu)===null||Pi.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),C=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=C;S<w;S+=3){let A=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=da(this,m,t,n,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=o.getX(p),C=o.getX(p+1),S=o.getX(p+2);s=da(this,a,t,n,c,h,u,M,C,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),C=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=C;S<w;S+=3){let A=S,_=S+1,b=S+2;s=da(this,m,t,n,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=p,C=p+1,S=p+2;s=da(this,a,t,n,c,h,u,M,C,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ip(i,t,e,n,s,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;ua.copy(o),ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,oa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=Ip(i,t,e,n,oa,la,ca,su);if(h){let u=new O;Vn.getBarycoord(su,oa,la,ca,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,u,new Tt)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new Tt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Vn.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}var Fa=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new Li,Lp=new Tt(.5,.5),fa=new O,hi=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],C=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-g,w-M).normalize(),s[1].setComponents(c+a,f+h,m+g,w+M).normalize(),s[2].setComponents(c+o,f+u,m+x,w+C).normalize(),s[3].setComponents(c-o,f-u,m-x,w-C).normalize(),n)s[4].setComponents(l,d,p,S).normalize(),s[5].setComponents(c-l,f-d,m-p,w-S).normalize();else if(s[4].setComponents(c-l,f-d,m-p,w-S).normalize(),e===fn)s[5].setComponents(c+l,f+d,m+p,w+S).normalize();else if(e===us)s[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=Lp.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ru=new re,Oa=class i{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ru.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hi),n[s].setFromProjectionMatrix(ru,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var _s=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new re,ec=new rr,pa=new Li,ma=new O,ar=class extends Ne{constructor(t=new Ze,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,t.ray.intersectsSphere(pa)===!1)return;au.copy(s).invert(),ec.copy(t.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);ma.fromBufferAttribute(u,p),ou(ma,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)ma.fromBufferAttribute(u,g),ou(ma,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ou(i,t,e,n,s,r,a){let o=ec.distanceSqToPoint(i);if(o<e){let l=new O;ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var or=class extends He{constructor(t=[],e=Bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lr=class extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends He{constructor(t,e,n=Mn,s,r,a,o=Re,l=Re,c,h=qn,u=1){if(h!==qn&&h!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cr=class extends Zn{constructor(t,e=Mn,n=Bi,s,r,a=Re,o=Re,l,c=qn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hr=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xs=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(x,p,m,M,C,S,w,A,_,b,U){let P=S/_,F=w/b,k=S/2,N=w/2,R=A/2,V=_+1,q=b+1,W=0,nt=0,X=new O;for(let J=0;J<q;J++){let tt=J*F-N;for(let yt=0;yt<V;yt++){let Dt=yt*P-k;X[x]=Dt*M,X[p]=tt*C,X[m]=R,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(yt/_),u.push(1-J/b),W+=1}}for(let J=0;J<b;J++)for(let tt=0;tt<_;tt++){let yt=d+tt+V*J,Dt=d+tt+V*(J+1),j=d+(tt+1)+V*(J+1),_t=d+(tt+1)+V*J;l.push(yt,Dt,_t),l.push(Dt,j,_t),nt+=6}o.addGroup(f,nt,U),f+=nt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ur=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;M(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function M(){let S=new O,w=new O,A=0,_=(e-t)/n;for(let b=0;b<=r;b++){let U=[],P=b/r,F=P*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,R=N*l+o,V=Math.sin(R),q=Math.cos(R);w.x=F*V,w.y=-P*n+p,w.z=F*q,u.push(w.x,w.y,w.z),S.set(V,_,q).normalize(),d.push(S.x,S.y,S.z),f.push(N,1-P),U.push(g++)}x.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let P=x[U][b],F=x[U+1][b],k=x[U+1][b+1],N=x[U][b+1];(t>0||U!==0)&&(h.push(P,F,N),A+=3),(e>0||U!==r-1)&&(h.push(F,k,N),A+=3)}c.addGroup(m,A,0),m+=A}function C(S){let w=g,A=new Tt,_=new O,b=0,U=S===!0?t:e,P=S===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;let F=g;for(let k=0;k<=s;k++){let R=k/s*l+o,V=Math.cos(R),q=Math.sin(R);_.x=U*q,_.y=p*P,_.z=U*V,u.push(_.x,_.y,_.z),d.push(0,P,0),A.x=V*.5+.5,A.y=q*.5*P+.5,f.push(A.x,A.y),g++}for(let k=0;k<s;k++){let N=w+k,R=F+k;S===!0?h.push(R,R+1,N):h.push(R+1,R,N),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new re;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},dr=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ba=class extends dr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lu=new O,cu=new O,Yl=new Fc,$l=new Fc,Zl=new Fc,Ni=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(cu.subVectors(s[0],s[1]).add(s[0]),c=cu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Zl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Zl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yl.calc(l),$l.calc(l),Zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Np(i,t){let e=1-i;return e*e*t}function Dp(i,t){return 2*(1-i)*i*t}function Up(i,t){return i*i*t}function Ys(i,t,e,n){return Np(i,t)+Dp(i,e)+Up(i,n)}function Fp(i,t){let e=1-i;return e*e*e*t}function Op(i,t){let e=1-i;return 3*e*e*i*t}function Bp(i,t){return 3*(1-i)*i*i*t}function kp(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Fp(i,t)+Op(i,e)+Bp(i,n)+kp(i,s)}var ka=class extends pn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends pn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends pn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends pn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends pn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fr=class extends pn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y),Ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(hu(o,l.x,c.x,h.x,u.x),hu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:Ni,CubicBezierCurve:ka,CubicBezierCurve3:za,EllipseCurve:dr,LineCurve:Ha,LineCurve3:Ga,QuadraticBezierCurve:Va,QuadraticBezierCurve3:fr,SplineCurve:Wa});var Di=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let C=0;C<c;C++){let S=C*u-r;g.push(S,-M,0),x.push(0,0,1),p.push(C/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let C=M+c*m,S=M+c*(m+1),w=M+1+c*(m+1),A=M+1+c*m;f.push(C,S,A),f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ui=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,d=new O,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let M=[],C=m/n,S=a+C*o,w=t*Math.cos(S),A=Math.sqrt(t*t-w*w),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let U=b/e,P=s+U*r;u.x=-A*Math.cos(P),u.y=w,u.z=A*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(U+_,1-C),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let C=h[m][M+1],S=h[m][M],w=h[m+1][M],A=h[m+1][M+1];(m!==0||a>0)&&f.push(C,S,A),(m!==n-1||l<Math.PI)&&f.push(S,w,A)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(x,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var pr=class i extends Ze{constructor(t=new fr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,l=new O,c=new Tt,h=new O,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function x(){for(let C=0;C<e;C++)p(C);p(r===!1?e:0),M(),m()}function p(C){h=t.getPointAt(C/e,h);let S=a.normals[C],w=a.binormals[C];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,b=Math.sin(_),U=-Math.cos(_);l.x=U*S.x+b*w.x,l.y=U*S.y+b*w.y,l.z=U*S.z+b*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let C=1;C<=e;C++)for(let S=1;S<=s;S++){let w=(s+1)*(C-1)+(S-1),A=(s+1)*C+(S-1),_=(s+1)*C+S,b=(s+1)*(C-1)+S;g.push(w,A,b),g.push(A,_,b)}}function M(){for(let C=0;C<=e;C++)for(let S=0;S<=s;S++)c.x=C/e,c.y=S/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(uu(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var id={clone:zi,merge:Ve},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new he().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends Ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qa=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ql:r=t,o=2*e-n;break;case tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:a=t,l=2*n-e;break;case tc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,C=(-1-f)*p+(1.5+f)*x+.5*g,S=f*p-f*x;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+M*a[c+w]+C*a[l+w]+S*a[u+w];return r}},Za=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ja=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ka=class extends ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*d+g*2,M=u[m],C=u[m+1],S=t*d+g*2,w=h[S],A=h[S+1],_=Xp(n,e,M,w,s);r[g]=sd(_,x,C,A,p)}return r}};function sd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=sd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ss(e,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ss(t.times,Array),values:ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ga(t.settings)&&(n.settings={inTangents:ss(t.settings.inTangents,Array),outTangents:ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Kl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ga(this.settings)&&(du(this.settings.inTangents,t),du(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ga(this.settings)&&(fu(this.settings.inTangents,t),fu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function du(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Pa;var di=class extends rn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Zs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var Qa=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var to=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},mr=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends rn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Zs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="vector";var Ma={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(pu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!pu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var vs=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rd=new vs,ys=class{constructor(t){this.manager=t!==void 0?t:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ys.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=new WeakMap,no=class extends ys{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ma.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=rs.get(a);u===void 0&&(u=[],rs.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=ds("img");function l(){h(),e&&e(this);let u=rs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}rs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ma.remove(`image:${t}`);let d=rs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}rs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var gr=class extends ys{constructor(t){super(t)}load(t,e,n,s){let r=new He,a=new no(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},_r=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Jl=new re,mu=new O,gu=new O,io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new O,xa=new In,Cn=new O,xr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,xa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_a,xa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new O,_u=new Tt,xu=new Tt,Ye=class extends xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,xu),e.subVectors(xu,_u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vr=class extends xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nc=class extends io{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new nc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Mr=class extends _r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var as=-90,os=1,Ms=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Ye(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ye(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ye(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Ye(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Ye(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},so=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Bc="\\[\\]\\.:\\/",qp=new RegExp("["+Bc+"]","g"),kc="[^"+Bc+"]",Yp="[^"+Bc.replace("\\.","")+"]",$p=/((?:WC+[\/:])*)/.source.replace("WC",kc),Zp=/(WCOD+)?/.source.replace("WCOD",Yp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),jp=new RegExp("^"+$p+Zp+Jp+Kp+"$"),Qp=["material","materials","bones","map"],ic=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(t){let e=jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=ic;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wv=new Float32Array(1);var Xc=class Xc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Xc.prototype.isMatrix2=!0;var sc=Xc;function zc(i,t,e,n){let s=tm(n);switch(e){case bc:return i*t;case Ac:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case vo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Cr:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case Ho:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tm(i){switch(i){case Qe:case vc:return{byteLength:1,components:1};case ws:case yc:case bn:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case Mn:case co:case Sn:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ed(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Am,common:Tm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Cm,displacementmap_vertex:Rm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Nm,envmap_fragment:Dm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Km,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:xg,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Ig,premultiplied_alpha_fragment:Lg,project_vertex:Ng,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:kg,shadowmap_vertex:zg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:$g,tonemapping_pars_fragment:Zg,transmission_fragment:Jg,transmission_pars_fragment:Kg,uv_pars_fragment:jg,uv_pars_vertex:Qg,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distance_vert:h0,distance_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:_0,meshlambert_vert:x0,meshlambert_frag:v0,meshmatcap_vert:y0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:w0,meshphong_frag:A0,meshphysical_vert:T0,meshphysical_frag:E0,meshtoon_vert:C0,meshtoon_frag:R0,points_vert:P0,points_frag:I0,shadow_vert:L0,shadow_frag:N0,sprite_vert:D0,sprite_frag:U0},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Un={basic:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ve([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ve([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Un.physical={uniforms:Ve([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Yo={r:0,b:0,g:0},F0=new re,Cd=new Ft;Cd.set(-1,0,0,0,1,0,0,0,1);function O0(i,t,e,n,s,r){let a=new kt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){let S=M.backgroundBlurriness>0;C=t.get(C,S)}return C}function g(M){let C=!1,S=f(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),C=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,C){let S=f(C);S&&S.isCubeTexture?(c===void 0&&(c=new De(new xs(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:zi(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cd),c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==te,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new De(new Di(2,2),new Ue({name:"BackgroundMaterial",uniforms:zi(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,C){M.getRGB(Yo,Oc(i)),e.buffers.color.setClear(Yo.r,Yo.g,Yo.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:m}}function B0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,k,N,R,V){let q=!1,W=u(F,R,N,k);r!==W&&(r=W,c(r.object)),q=f(F,R,N,V),q&&g(F,R,N,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(F,k,N,R),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,k,N,R){let V=R.wireframe===!0,q=n[k.id];q===void 0&&(q={},n[k.id]=q);let W=F.isInstancedMesh===!0?F.id:0,nt=q[W];nt===void 0&&(nt={},q[W]=nt);let X=nt[N.id];X===void 0&&(X={},nt[N.id]=X);let J=X[V];return J===void 0&&(J=d(l()),X[V]=J),J}function d(F){let k=[],N=[],R=[];for(let V=0;V<e;V++)k[V]=0,N[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:R,object:F,attributes:{},index:null}}function f(F,k,N,R){let V=r.attributes,q=k.attributes,W=0,nt=N.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=V[X],yt=q[X];if(yt===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(yt=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(yt=F.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==R}function g(F,k,N,R){let V={},q=k.attributes,W=0,nt=N.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(tt=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(tt=F.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),V[X]=yt,W++}r.attributes=V,r.attributesNum=W,r.index=R}function x(){let F=r.newAttributes;for(let k=0,N=F.length;k<N;k++)F[k]=0}function p(F){m(F,0)}function m(F,k){let N=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;N[F]=1,R[F]===0&&(i.enableVertexAttribArray(F),R[F]=1),V[F]!==k&&(i.vertexAttribDivisor(F,k),V[F]=k)}function M(){let F=r.newAttributes,k=r.enabledAttributes;for(let N=0,R=k.length;N<R;N++)k[N]!==F[N]&&(i.disableVertexAttribArray(N),k[N]=0)}function C(F,k,N,R,V,q,W){W===!0?i.vertexAttribIPointer(F,k,N,V,q):i.vertexAttribPointer(F,k,N,R,V,q)}function S(F,k,N,R){x();let V=R.attributes,q=N.getAttributes(),W=k.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let J=V[nt];if(J===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),J!==void 0){let tt=J.normalized,yt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;let j=Dt.buffer,_t=Dt.type,St=Dt.bytesPerElement,Pt=_t===i.INT||_t===i.UNSIGNED_INT||J.gpuType===co;if(J.isInterleavedBufferAttribute){let xt=J.data,zt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,_e=J.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Nt=0;Nt<X.locationSize;Nt++)m(X.location+Nt,xt.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)p(X.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Nt=0;Nt<X.locationSize;Nt++)C(X.location+Nt,yt/X.locationSize,_t,tt,zt*St,(_e+yt/X.locationSize*Nt)*St,Pt)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt,J.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let xt=0;xt<X.locationSize;xt++)C(X.location+xt,yt/X.locationSize,_t,tt,yt*St,yt/X.locationSize*xt*St,Pt)}}else if(W!==void 0){let tt=W[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}M()}function w(){U();for(let F in n){let k=n[F];for(let N in k){let R=k[N];for(let V in R){let q=R[V];for(let W in q)h(q[W].object),delete q[W];delete R[V]}}delete n[F]}}function A(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let N in k){let R=k[N];for(let V in R){let q=R[V];for(let W in q)h(q[W].object),delete q[W];delete R[V]}}delete n[F.id]}function _(F){for(let k in n){let N=n[k];for(let R in N){let V=N[R];if(V[F.id]===void 0)continue;let q=V[F.id];for(let W in q)h(q[W].object),delete q[W];delete V[F.id]}}}function b(F){for(let k in n){let N=n[k],R=F.isInstancedMesh===!0?F.id:0,V=N[R];if(V!==void 0){for(let q in V){let W=V[q];for(let nt in W)h(W[nt].object),delete W[nt];delete V[q]}delete N[R],Object.keys(N).length===0&&delete n[k]}}}function U(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function k0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==wn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Qe&&_!==Sn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:S,maxSamples:w,samples:A}}function H0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,C=M*4,S=m.clippingState||null;l.value=S,S=h(g,d,C,f);for(let w=0;w!==C;++w)S[w]=e[w];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,S=f;C!==x;++C,S+=4)a.copy(u[C]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Lr=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xs(5,5,5),r=new Ue({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Fi});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=$e),new Ms(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ad=256,G0=3,V0=20,Rd=256,Pd=16,W0=3,X0=new O,q0=new kt,Zo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ms(1,10,null),this._boxMesh=new De(new xs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=X0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(q0));let p=new Ms(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ad,Nc(t))}_fromTexture(t,e){t.mapping===Bi||t.mapping===bs?this._setSize(t.image.length===0?ad:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=od(t,!1,!1),n=Math.log2(t)-G0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=od(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bi||t.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ld()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Y0(),this._integrationMaterial=$0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Pd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-W0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Rd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Z0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function od(i,t,e){return new Lr(i,{minFilter:Kn,generateMipmaps:t,type:bn,colorSpace:Js,depthBuffer:e})}function Nr(i,t,e){return new Ue({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:Fe,blending:Fi,depthTest:!1,depthWrite:!1})}function Y0(){return Nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return Nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Z0(){return Nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${V0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ld(){return Nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cd(){return Nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function J0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ao||f===oo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Lr(g.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===ao||f===oo,x=f===Bi||f===bs;if(g||x){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Zo(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Zo(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===ao?d.mapping=Bi:f===oo&&(d.mapping=bs),d}function l(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function K0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ws("WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],i.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,C=p.count>=65535?ir:nr,S=new C(Math.ceil(M/3)*6,1),w=S.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,U=0;b<M;b+=3){let P=_[b+0],F=_[b+1],k=_[b+2];w[U++]=P,w[U++]=F,w[U++]=F,w[U++]=k,w[U++]=k,w[U++]=P}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){let U=_+0,P=_+1,F=_+2;w[b++]=U,w[b++]=P,w[b++]=P,w[b++]=F,w[b++]=F,w[b++]=U}}S.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,S)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Q0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function t_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),x===!0&&(C=3);let S=o.attributes.position.count*C,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*w*4*u),_=new Qs(A,S,w,u);_.type=Sn,_.needsUpdate=!0;let b=C*4;for(let P=0;P<u;P++){let F=p[P],k=m[P],N=M[P],R=S*w*4*P;for(let V=0;V<F.count;V++){let q=V*b;f===!0&&(s.fromBufferAttribute(F,V),A[R+q+0]=s.x,A[R+q+1]=s.y,A[R+q+2]=s.z,A[R+q+3]=0),g===!0&&(s.fromBufferAttribute(k,V),A[R+q+4]=s.x,A[R+q+5]=s.y,A[R+q+6]=s.z,A[R+q+7]=0),x===!0&&(s.fromBufferAttribute(N,V),A[R+q+8]=s.x,A[R+q+9]=s.y,A[R+q+10]=s.z,A[R+q+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Tt(S,w)},n.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var i_={[uc]:"LINEAR_TONE_MAPPING",[dc]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[pc]:"ACES_FILMIC_TONE_MAPPING",[gc]:"AGX_TONE_MAPPING",[_c]:"NEUTRAL_TONE_MAPPING",[mc]:"CUSTOM_TONE_MAPPING"};function s_(i,t,e,n,s,r){let a=new sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ze;h.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new me([0,2,0,0,2,0],2));let u=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new De(h,u),f=new vr(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,M=null,C=[],S=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let _=0;_<C.length;_++){let b=C[_];b.setSize&&b.setSize(w,A)}},this.setEffects=function(w){C=w,S=C.length>0&&C[0].isRenderPass===!0;let A=a.width,_=a.height;C.length>0&&o===null&&(o=new sn(A,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new sn(A,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&C.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Zn(A,_),r===!0&&(c.format=jn,c.type=ki)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<C.length;U++){let P=C[U];P.setSize&&P.setSize(A,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,A){if(p||w.toneMapping===Nn&&C.length===0)return!1;if(M=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Nn,!0},this.hasRenderPass=function(){return S},this.end=function(w,A){w.toneMapping=m,p=!0;let _=a,b=o;for(let U=0;U<C.length;U++){let P=C[U];P.enabled!==!1&&(P.render(w,b,_,A),P.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,u.defines={},Zt.getTransfer(g)===te&&(u.defines.SRGB_TRANSFER="");let U=i_[x];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Id=new He,Ld=new Zn(1,1),Nd=new cr(1),Dd=new Qs,Ud=new Na,Fd=new or,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),be(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),be(e,n)}}function u_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),be(e,n)}}function d_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function g_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function jo(i){return i.version===0&&(i.compareFunction=Rc,i.needsUpdate=!0),i}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=jo(Ld):r=Id,e.setTexture2D(t||r,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=jo(Nd):r=Fd,e.setTextureCube(t||r,s)}function b_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dd,s)}function w_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function A_(i,t){i.uniform1fv(this.addr,t)}function T_(i,t){let e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function E_(i,t){let e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function C_(i,t){let e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function R_(i,t){let e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P_(i,t){let e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I_(i,t){let e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L_(i,t){i.uniform1iv(this.addr,t)}function N_(i,t){i.uniform2iv(this.addr,t)}function D_(i,t){i.uniform3iv(this.addr,t)}function U_(i,t){i.uniform4iv(this.addr,t)}function F_(i,t){i.uniform1uiv(this.addr,t)}function O_(i,t){i.uniform2uiv(this.addr,t)}function B_(i,t){i.uniform3uiv(this.addr,t)}function k_(i,t){i.uniform4uiv(this.addr,t)}function z_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=jo(Ld):a=Id;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function H_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ud,r[a])}function G_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=jo(Nd):a=Fd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function V_(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dd,r[a])}function W_(i){switch(i){case 5126:return A_;case 35664:return T_;case 35665:return E_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return N_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w_(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W_(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function md(i,t){i.seq.push(t),i.map[t.id]=t}function X_(i,t,e){let n=i.name,s=n.length;for(qc.lastIndex=0;;){let r=qc.exec(n),a=qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){md(e,c===void 0?new $c(o,i,t):new Zc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Jc(o),md(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);X_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q_=37297,Y_=0;function $_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _d=new Ft;function Z_(i){Zt._getMatrix(_d,Zt.workingColorSpace,i);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Ks:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$_(i.getShaderSource(t),o)}else return r}function J_(i,t){let e=Z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var K_={[uc]:"Linear",[dc]:"Reinhard",[fc]:"Cineon",[pc]:"ACESFilmic",[gc]:"AgX",[_c]:"Neutral",[mc]:"Custom"};function j_(i,t){let e=K_[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new O;function Q_(){Zt.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function ex(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ir(i){return i!==""}function vd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(ix,sx)}function sx(i,t){let e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Kc(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ox={[Sr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function lx(i){return ox[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cx={[bs]:"ENVMAP_MODE_REFRACTION"};function hx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ux={[hc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function dx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ux[i.combine]||"ENVMAP_BLENDING_NONE"}function fx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hx(e),u=dx(e),d=tx(e),f=ex(r),g=s.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ir).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(x=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?j_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,J_("linearToOutputTexel",e.outputColorSpace),Q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Kc(a),a=vd(a,e),a=yd(a,e),o=Kc(o),o=vd(o,e),o=yd(o,e),a=Md(a),o=Md(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+x+a,C=m+p+o,S=gd(s,s.VERTEX_SHADER,M),w=gd(s,s.FRAGMENT_SHADER,C);s.attachShader(g,S),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(w)||"",R=F.trim(),V=k.trim(),q=N.trim(),W=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,w);else{let X=xd(s,S,"vertex"),J=xd(s,w,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+R+`
`+X+`
`+J)}else R!==""?Lt("WebGLProgram: Program Info Log:",R):(V===""||q==="")&&(nt=!1);nt&&(P.diagnostics={runnable:W,programLog:R,vertexShader:{log:V,prefix:x},fragmentShader:{log:q,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new As(s,g),b=nx(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,q_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var px=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function mx(i){return i===mi||i===Cr||i===Rr}function gx(i,t,e,n,s,r){let a=new tr,o=new jc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,U,P,F,k){let N=P.fog,R=F.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||V,q),nt=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,tt=J!==void 0?J.length:0,yt=0;R.morphAttributes.position!==void 0&&(yt=1),R.morphAttributes.normal!==void 0&&(yt=2),R.morphAttributes.color!==void 0&&(yt=3);let Dt,j,_t,St;if(nt){let mt=Un[nt];Dt=mt.vertexShader,j=mt.fragmentShader}else{Dt=_.vertexShader,j=_.fragmentShader;let mt=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,mt,ne),_t=mt.id,St=ne.id}let Pt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),zt=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Nt=!!_.map,ee=!!_.matcap,ie=!!W,qt=ie&&W.isPMREMTexture===!0,Ie=!!_.aoMap,ye=!!_.lightMap,Je=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,En=!!_.displacementMap,Ae=!!_.emissiveMap,ln=!!_.metalnessMap,cn=!!_.roughnessMap,hn=_.anisotropy>0,B=_.clearcoat>0,un=_.diffuseRoughness>0,le=_.dispersion>0,ce=_.retroreflectivity>0,pt=_.iridescence>0,Me=_.sheen>0,It=_.transmission>0,Ot=hn&&!!_.anisotropyMap,E=B&&!!_.clearcoatMap,v=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,it=un&&!!_.diffuseRoughnessMap,et=pt&&!!_.iridescenceMap,at=pt&&!!_.iridescenceThicknessMap,dt=Me&&!!_.sheenColorMap,Z=Me&&!!_.sheenRoughnessMap,K=!!_.specularMap,lt=!!_.specularColorMap,I=!!_.specularIntensityMap,Q=It&&!!_.transmissionMap,$=It&&!!_.thicknessMap,ct=!!_.gradientMap,rt=!!_.alphaMap,ot=_.alphaTest>0,Et=!!_.alphaHash,Gt=!!_.extensions,st=Nn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(st=i.toneMapping);let Ct=qt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Ht={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:j,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:zt,instancingColor:zt&&F.instanceColor!==null,instancingMorph:zt&&F.morphTexture!==null,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Nt,matcap:ee,envMap:ie,envMapMode:ie&&W.mapping,envMapPMREM:qt,envMapMaxLod:qt?Ct.length-1:null,envMapSize:qt?Ct[0].width:null,aoMap:Ie,lightMap:ye,bumpMap:Je,normalMap:ue,displacementMap:En,emissiveMap:Ae,normalMapObjectSpace:ue&&_.normalMapType===Wu,normalMapTangentSpace:ue&&_.normalMapType===Tc,packedNormalMap:ue&&_.normalMapType===Tc&&mx(_.normalMap.format),metalnessMap:ln,roughnessMap:cn,anisotropy:hn,anisotropyMap:Ot,clearcoat:B,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:H,diffuseRoughness:un,diffuseRoughnessMap:it,dispersion:le,retroreflection:ce,iridescence:pt,iridescenceMap:et,iridescenceThicknessMap:at,sheen:Me,sheenColorMap:dt,sheenRoughnessMap:Z,specularMap:K,specularColorMap:lt,specularIntensityMap:I,transmission:It,transmissionMap:Q,thicknessMap:$,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Jn&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Et,combine:_.combine,mapUv:Nt&&f(_.map.channel),aoMapUv:Ie&&f(_.aoMap.channel),lightMapUv:ye&&f(_.lightMap.channel),bumpMapUv:Je&&f(_.bumpMap.channel),normalMapUv:ue&&f(_.normalMap.channel),displacementMapUv:En&&f(_.displacementMap.channel),emissiveMapUv:Ae&&f(_.emissiveMap.channel),metalnessMapUv:ln&&f(_.metalnessMap.channel),roughnessMapUv:cn&&f(_.roughnessMap.channel),anisotropyMapUv:Ot&&f(_.anisotropyMap.channel),clearcoatMapUv:E&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:lt&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ue||hn),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(Nt||rt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Nt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:Ae&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&_.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],U;if(b){let P=Un[b];U=id.clone(P.uniforms)}else U=_.uniforms;return U}function C(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new fx(i,b,_,s),c.push(U),h.set(b,U)),U}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:C,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function _x(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function l(d,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);let C=o(d,f,g,x,p,m);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(d,f,g,x,p,m){let M=o(d,f,g,x,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||xx),n.length>1&&n.sort(f||bd),s.length>1&&s.sort(f||bd)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function vx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wd,i.set(n,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Mx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sx=0;function bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wx(i){let t=new yx,e=Mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,C=0,S=0,w=0,A=0,_=0,b=0,U=0,P=0;c.sort(bx);for(let k=0,N=c.length;k<N;k++){let R=c[k],V=R.color,q=R.intensity,W=R.distance,nt=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===mi?nt=R.shadow.map.texture:nt=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=V.r*q,u+=V.g*q,d+=V.b*q;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],q);P++}else if(R.isSunLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,tt=e.get(R);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=nt;let yt=J.getViewportCount();for(let Dt=0;Dt<yt;Dt++)n.sunShadowMatrix[x+Dt]=J.getMatrix(Dt),n.sunShadowCascade[x+Dt]=J._cascadeData[Dt];x+=yt,g++}n.sun[f]=X,f++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,tt=e.get(R);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(q),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[M]=X;let J=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,J.updateMatrices(R),R.castShadow&&U++),n.spotLightMatrix[M]=J.matrix,R.castShadow){let tt=e.get(R);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=nt,_++}M++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(V).multiplyScalar(q),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[C]=X,C++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let J=R.shadow,tt=e.get(R);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=R.shadow.matrix,A++}n.point[m]=X,m++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(q),X.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[S]=X,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==M||F.rectAreaLength!==C||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==w||F.numPointShadows!==A||F.numSpotShadows!==_||F.numSpotMaps!==b||F.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=C,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=P,F.sunLength=f,F.directionalLength=p,F.pointLength=m,F.spotLength=M,F.rectAreaLength=C,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=w,F.numPointShadows=A,F.numSpotShadows=_,F.numSpotMaps=b,F.numLightProbes=P,n.version=Sx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let M=0,C=c.length;M<C;M++){let S=c[M];if(S.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Ad(i){let t=new wx(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ax(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ad(i),t.set(s,[o])):r>=a.length?(o=new Ad(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Rx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Td=new re,Pr=new O,Yc=new O;function Px(i,t,e){let n=new hi,s=new Tt,r=new Tt,a=new he,o=new qa,l=new Ya,c={},h=e.maxTextureSize,u={[pi]:Fe,[Fe]:pi,[an]:an},d=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Tx,fragmentShader:Ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ze;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let m=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Mu&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);let U=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=m!==this.type;N&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(V=>V.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,V=A.length;R<V;R++){let q=A[R],W=q.shadow;if(W===void 0){Lt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let nt=W.getFrameExtents();s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ss){if(q.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new sn(s.x,s.y,{format:mi,type:bn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Zn(s.x,s.y,Sn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=qn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re}else q.isPointLight?(W.map=new Lr(s.x),W.map.depthTexture=new cr(s.x,Mn)):(W.map=new sn(s.x,s.y),W.map.depthTexture=new Zn(s.x,s.y,Mn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=qn,this.type===Sr?(W.map.depthTexture.compareFunction=X?Cc:Ec,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Re,W.map.depthTexture.magFilter=Re);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,b);let tt=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let yt=0;yt<J;yt++){let Dt=W.getCamera(yt);if(q.isPointLight){let j=W.camera,_t=W.matrix,St=q.distance||j.far;St!==j.far&&(j.far=St,j.updateProjectionMatrix()),Pr.setFromMatrixPosition(q.matrixWorld),j.position.copy(Pr),Yc.copy(j.position),Yc.add(Cx[yt]),j.up.copy(Rx[yt]),j.lookAt(Yc),j.updateMatrixWorld(),_t.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Td.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Td,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(W.map),i.clear());let j=W.getViewport(yt);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),k.viewport(a)}n=W.getFrustum(yt),S(_,b,Dt,q,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Ss&&M(W,b),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,P,F)};function M(A,_){let b=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new sn(s.x,s.y,{format:mi,type:bn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function C(A,_,b,U){let P=null,F=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)P=F;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=P.uuid,N=_.uuid,R=c[k];R===void 0&&(R={},c[k]=R);let V=R[N];V===void 0&&(V=P.clone(),R[N]=V,_.addEventListener("dispose",w)),P=V}if(P.visible=_.visible,P.wireframe=_.wireframe,U===Ss?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=b}return P}function S(A,_,b,U,P,F){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Ss)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let R=t.update(A),V=A.material;if(Array.isArray(V)){let q=R.groups;for(let W=0,nt=q.length;W<nt;W++){let X=q[W],J=V[X.materialIndex];if(J&&J.visible){let tt=C(A,J,U,F);A.onBeforeShadow(i,A,_,b,R,tt,X),i.renderBufferDirect(b,null,R,tt,A,X),A.onAfterShadow(i,A,_,b,R,tt,X)}}}else if(V.visible){let q=C(A,V,U,F);A.onBeforeShadow(i,A,_,b,R,q,null),i.renderBufferDirect(b,null,R,q,A,null),A.onAfterShadow(i,A,_,b,R,q,null)}}let N=A.children;for(let R=0,V=N.length;R<V;R++)S(N[R],_,b,U,P,F)}function w(A){A.target.removeEventListener("dispose",w);for(let b in c){let U=c[b],P=A.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function Ix(i,t){function e(){let I=!1,Q=new he,$=null,ct=new he(0,0,0,0);return{setMask:function(rt){$!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),$=rt)},setLocked:function(rt){I=rt},setClear:function(rt,ot,Et,Gt,st){st===!0&&(rt*=Gt,ot*=Gt,Et*=Gt),Q.set(rt,ot,Et,Gt),ct.equals(Q)===!1&&(i.clearColor(rt,ot,Et,Gt),ct.copy(Q))},reset:function(){I=!1,$=null,ct.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,$=null,ct=null,rt=null;return{setReversed:function(ot){if(Q!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return Q},setTest:function(ot){ot?xt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ot){$!==ot&&!I&&(i.depthMask(ot),$=ot)},setFunc:function(ot){if(Q&&(ot=td[ot]),ct!==ot){switch(ot){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){I=ot},setClear:function(ot){rt!==ot&&(rt=ot,Q&&(ot=1-ot),i.clearDepth(ot))},reset:function(){I=!1,$=null,ct=null,rt=null,Q=!1}}}function s(){let I=!1,Q=null,$=null,ct=null,rt=null,ot=null,Et=null,Gt=null,st=null;return{setTest:function(Ct){I||(Ct?xt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Ct){Q!==Ct&&!I&&(i.stencilMask(Ct),Q=Ct)},setFunc:function(Ct,Ht,mt){($!==Ct||ct!==Ht||rt!==mt)&&(i.stencilFunc(Ct,Ht,mt),$=Ct,ct=Ht,rt=mt)},setOp:function(Ct,Ht,mt){(ot!==Ct||Et!==Ht||Gt!==mt)&&(i.stencilOp(Ct,Ht,mt),ot=Ct,Et=Ht,Gt=mt)},setLocked:function(Ct){I=Ct},setClear:function(Ct){st!==Ct&&(i.clearStencil(Ct),st=Ct)},reset:function(){I=!1,Q=null,$=null,ct=null,rt=null,ot=null,Et=null,Gt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,C=null,S=null,w=null,A=null,_=null,b=new kt(0,0,0),U=0,P=!1,F=null,k=null,N=null,R=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let J=null,tt={},yt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),j=new he().fromArray(yt),_t=new he().fromArray(Dt);function St(I,Q,$,ct){let rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<$;Et++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Q+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}let Pt={};Pt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(cs),Je(!1),ue(rc),xt(i.CULL_FACE),Ie(Fi);function xt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function zt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function _e(I,Q){return d[I]!==Q?(i.bindFramebuffer(I,Q),d[I]=Q,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Nt(I,Q){let $=g,ct=!1;if(I){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let rt=I.textures;if($.length!==rt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Et=rt.length;ot<Et;ot++)$[ot]=i.COLOR_ATTACHMENT0+ot;$.length=rt.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function ee(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let ie={[Oi]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};ie[Au]=i.MIN,ie[Tu]=i.MAX;let qt={[Eu]:i.ZERO,[Cu]:i.ONE,[Ru]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function Ie(I,Q,$,ct,rt,ot,Et,Gt,st,Ct){if(I===Fi){p===!0&&(zt(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),I!==Su){if(I!==m||Ct!==P){if((M!==Oi||w!==Oi)&&(i.blendEquation(i.FUNC_ADD),M=Oi,w=Oi),Ct)switch(I){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case je:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",I);break}else switch(I){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case je:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",I);break}C=null,S=null,A=null,_=null,b.set(0,0,0),U=0,m=I,P=Ct}return}rt=rt||Q,ot=ot||$,Et=Et||ct,(Q!==M||rt!==w)&&(i.blendEquationSeparate(ie[Q],ie[rt]),M=Q,w=rt),($!==C||ct!==S||ot!==A||Et!==_)&&(i.blendFuncSeparate(qt[$],qt[ct],qt[ot],qt[Et]),C=$,S=ct,A=ot,_=Et),(Gt.equals(b)===!1||st!==U)&&(i.blendColor(Gt.r,Gt.g,Gt.b,st),b.copy(Gt),U=st),m=I,P=!1}function ye(I,Q){I.side===an?zt(i.CULL_FACE):xt(i.CULL_FACE);let $=I.side===Fe;Q&&($=!$),Je($),I.blending===Jn&&I.transparent===!1?Ie(Fi):Ie(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ct=I.stencilWrite;o.setTest(ct),ct&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){F!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),F=I)}function ue(I){I!==vu?(xt(i.CULL_FACE),I!==k&&(I===rc?i.cullFace(i.BACK):I===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),k=I}function En(I){I!==N&&(W&&i.lineWidth(I),N=I)}function Ae(I,Q,$){I?(xt(i.POLYGON_OFFSET_FILL),(R!==Q||V!==$)&&(R=Q,V=$,a.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):zt(i.POLYGON_OFFSET_FILL)}function ln(I){I?xt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function cn(I){I===void 0&&(I=i.TEXTURE0+q-1),J!==I&&(i.activeTexture(I),J=I)}function hn(I,Q,$){$===void 0&&(J===null?$=i.TEXTURE0+q-1:$=J);let ct=tt[$];ct===void 0&&(ct={type:void 0,texture:void 0},tt[$]=ct),(ct.type!==I||ct.texture!==Q)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(I,Q||Pt[I]),ct.type=I,ct.texture=Q)}function B(){let I=tt[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function un(){try{i.compressedTexImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function le(){try{i.compressedTexImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function ce(){try{i.texSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function pt(){try{i.texSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function Ot(){try{i.texStorage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function E(){try{i.texStorage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){Ut("WebGLState:",I)}}function H(){try{i.texImage3D(...arguments)}catch(I){Ut("WebGLState:",I)}}function it(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function et(I,Q){u[I]!==Q&&(i.pixelStorei(I,Q),u[I]=Q)}function at(I){j.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function dt(I){_t.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Z(I,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ct=$.get(I);ct===void 0&&(ct=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,ct,ct),$.set(I,ct))}function K(I,Q,$){let rt=c.get(Q).get(I);l[rt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,$),l[rt]=$)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,tt={},d={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,C=null,S=null,w=null,A=null,_=null,b=new kt(0,0,0),U=0,P=!1,F=null,k=null,N=null,R=null,V=null,j.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:zt,bindFramebuffer:_e,drawBuffers:Nt,useProgram:ee,setBlending:Ie,setMaterial:ye,setFlipSided:Je,setCullFace:ue,setLineWidth:En,setPolygonOffset:Ae,setScissorTest:ln,activeTexture:cn,bindTexture:hn,unbindTexture:B,compressedTexImage2D:un,compressedTexImage3D:le,texImage2D:v,texImage3D:H,pixelStorei:et,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Ot,texStorage3D:E,texSubImage2D:ce,texSubImage3D:pt,compressedTexSubImage2D:Me,compressedTexSubImage3D:It,scissor:at,viewport:dt,reset:lt}}function Lx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(E=>g.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return p?new OffscreenCanvas(E,v):ds("canvas")}function M(E,v,H){let it=1,et=Ot(E);if((et.width>H||et.height>H)&&(it=H/Math.max(et.width,et.height)),it<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let at=Math.floor(it*et.width),dt=Math.floor(it*et.height);d===void 0&&(d=m(at,dt));let Z=v?m(at,dt):d;return Z.width=at,Z.height=dt,Z.getContext("2d").drawImage(E,0,0,at,dt),Lt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+at+"x"+dt+")."),Z}else return"data"in E&&Lt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function C(E){return E.generateMipmaps}function S(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,v,H,it,et,at=!1){if(E!==null){if(i[E]!==void 0)return i[E];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt;it&&(dt=t.get("EXT_texture_norm16"),dt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),H===i.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),v===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),H===i.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),H===i.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let K=at?Ks:Zt.getTransfer(et);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=K===te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),H===i.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(E,v){let H;return E?v===null||v===Mn||v===ki?H=i.DEPTH24_STENCIL8:v===Sn?H=i.DEPTH32F_STENCIL8:v===ws&&(H=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mn||v===ki?H=i.DEPTH_COMPONENT24:v===Sn?H=i.DEPTH_COMPONENT32F:v===ws&&(H=i.DEPTH_COMPONENT16),H}function b(E,v){return C(E)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==$e?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function U(E){let v=new WeakRef(E);n.get(E).__ref=v,g.add(v),x.register(E,v,v)}function P(E){let v=n.get(E).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function F(E){N(E.target)}function k(E){R(E.target)}function N(E){E.removeEventListener("dispose",F),P(E),q(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function R(E){E.removeEventListener("dispose",k),P(E),nt(E)}function V(){for(let E of g){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):N(v))}g.clear(),u.clear()}function q(E){let v=n.get(E);if(v.__webglInit===void 0)return;let H=E.source,it=f.get(H);if(it){let et=it[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&W(E),Object.keys(it).length===0&&f.delete(H)}n.remove(E)}function W(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let H=E.source,it=f.get(H);delete it[v.__cacheKey],a.memory.textures--}function nt(E){let v=n.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let H=E.depthTexture;if(H&&H.renderTarget===E&&N(H),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let at=0;at<v.__webglFramebuffer[et].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[et][at]);else i.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)i.deleteFramebuffer(v.__webglFramebuffer[et]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let it=E.textures;for(let et=0,at=it.length;et<at;et++){let dt=n.get(it[et]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(it[et])}n.remove(E)}let X=0;function J(){X=0}function tt(){return X}function yt(E){X=E}function Dt(){let E=X;return E>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,E}function j(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function _t(E,v){let H=n.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&H.__version!==E.version){let it=E.image;if(it===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,E,v);return}}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function St(E,v){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){ye(H,E,v);return}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function Pt(E,v){let H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){ye(H,E,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function xt(E,v){let H=n.get(E);if(E.version>0&&H.__version!==E.version){Je(H,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let zt={[hs]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},_e={[Re]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Nt={[qu]:i.NEVER,[Rc]:i.ALWAYS,[Yu]:i.LESS,[Ec]:i.LEQUAL,[$u]:i.EQUAL,[Cc]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function ee(E,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===$e||v.magFilter===lo||v.magFilter===br||v.magFilter===Kn||v.minFilter===$e||v.minFilter===lo||v.minFilter===br||v.minFilter===Kn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,zt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,zt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,zt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==br&&v.minFilter!==Kn||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(E,v){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F),U(v));let it=v.source,et=f.get(it);et===void 0&&(et={},f.set(it,et));let at=j(v);if(at!==E.__cacheKey){et[at]===void 0&&(et[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[at].usedTimes++;let dt=et[E.__cacheKey];dt!==void 0&&(et[E.__cacheKey].usedTimes--,dt.usedTimes===0&&W(v)),E.__cacheKey=at,E.__webglTexture=et[at].texture}return H}function qt(E,v,H){return Math.floor(Math.floor(E/H)/v)}function Ie(E,v,H,it){let at=E.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,it,v.data);else{at.sort((I,Q)=>I.start-Q.start);let dt=0;for(let I=1;I<at.length;I++){let Q=at[dt],$=at[I],ct=Q.start+Q.count,rt=qt($.start,v.width,4),ot=qt(Q.start,v.width,4);$.start<=ct+1&&rt===ot&&qt($.start+$.count-1,v.width,4)===rt?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++dt,at[dt]=$)}at.length=dt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let I=0,Q=at.length;I<Q;I++){let $=at[I],ct=Math.floor($.start/4),rt=Math.ceil($.count/4),ot=ct%v.width,Et=Math.floor(ct/v.width),Gt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,ot,Et,Gt,st,H,it,v.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function ye(E,v,H){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let et=ie(E,v),at=v.source;e.bindTexture(it,E.__webglTexture,i.TEXTURE0+H);let dt=n.get(at);if(at.version!==dt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let st=Zt.getPrimaries(Zt.workingColorSpace),Ct=v.colorSpace===An?null:Zt.getPrimaries(v.colorSpace),Ht=v.colorSpace===An||st===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=M(v.image,!1,s.maxTextureSize);K=It(v,K);let lt=r.convert(v.format,v.colorSpace),I=r.convert(v.type),Q=A(v.internalFormat,lt,I,v.normalized,v.colorSpace,v.isVideoTexture);ee(it,v);let $,ct=v.mipmaps,rt=v.isVideoTexture!==!0,ot=dt.__version===void 0||et===!0,Et=at.dataReady,Gt=b(v,K);if(v.isDepthTexture)Q=_(v.format===jn,v.type),ot&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,lt,I,null));else if(v.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,ct[0].width,ct[0].height);for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,I,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,lt,I,$.data);v.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,K.width,K.height),Et&&Ie(v,K,lt,I)):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,lt,I,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Q,ct[0].width,ct[0].height,K.depth);for(let st=0,Ct=ct.length;st<Ct;st++)if($=ct[st],v.format!==wn)if(lt!==null)if(rt){if(Et)if(v.layerUpdates.size>0){let Ht=zc($.width,$.height,v.format,v.type);for(let mt of v.layerUpdates){let ne=$.data.subarray(mt*Ht/$.data.BYTES_PER_ELEMENT,(mt+1)*Ht/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,mt,$.width,$.height,1,lt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,K.depth,lt,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,K.depth,0,$.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,K.depth,lt,I,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,K.depth,0,lt,I,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Gt,Q,ct[0].width,ct[0].height);for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],v.format!==wn?lt!==null?rt?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,$.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,$.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,I,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,lt,I,$.data)}else if(v.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Q,K.width,K.height,K.depth),Et)if(v.layerUpdates.size>0){let st=zc(K.width,K.height,v.format,v.type);for(let Ct of v.layerUpdates){let Ht=K.data.subarray(Ct*st/K.data.BYTES_PER_ELEMENT,(Ct+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,K.width,K.height,1,lt,I,Ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,I,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,lt,I,K.data);else if(v.isData3DTexture)rt?(ot&&e.texStorage3D(i.TEXTURE_3D,Gt,Q,K.width,K.height,K.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,I,K.data)):e.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,lt,I,K.data);else if(v.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(i.TEXTURE_2D,Gt,Q,K.width,K.height);else{let st=K.width,Ct=K.height;for(let Ht=0;Ht<Gt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Q,st,Ct,0,lt,I,null),st>>=1,Ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),u.add(v),st.onpaint=Ct=>{let Ht=Ct.changedElements;for(let mt of u)Ht.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Ht=i.RGBA,mt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,mt,ne,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){let st=Ot(ct[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Q,st.width,st.height)}for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,lt,I,$):e.texImage2D(i.TEXTURE_2D,st,Q,lt,I,$);v.generateMipmaps=!1}else if(rt){if(ot){let st=Ot(K);e.texStorage2D(i.TEXTURE_2D,Gt,Q,st.width,st.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,I,K)}else e.texImage2D(i.TEXTURE_2D,0,Q,lt,I,K);C(v)&&v.mipmapsAutoUpdate===!0&&S(it),dt.__version=at.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Je(E,v,H){if(v.image.length!==6)return;let it=ie(E,v),et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let at=n.get(et);if(et.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+H);let dt=Zt.getPrimaries(Zt.workingColorSpace),Z=v.colorSpace===An?null:Zt.getPrimaries(v.colorSpace),K=v.colorSpace===An||dt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let lt=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let mt=0;mt<6;mt++)!lt&&!I?Q[mt]=M(v.image[mt],!0,s.maxCubemapSize):Q[mt]=I?v.image[mt].image:v.image[mt],Q[mt]=It(v,Q[mt]);let $=Q[0],ct=r.convert(v.format,v.colorSpace),rt=r.convert(v.type),ot=A(v.internalFormat,ct,rt,v.normalized,v.colorSpace),Et=v.isVideoTexture!==!0,Gt=at.__version===void 0||it===!0,st=et.dataReady,Ct=b(v,$);ee(i.TEXTURE_CUBE_MAP,v);let Ht;if(v.isDepthTexture){if(ot=_(v.format===jn,v.type),Gt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,$.width,$.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,$.width,$.height,0,ct,rt,null)}else if(lt){Et&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ot,$.width,$.height);for(let mt=0;mt<6;mt++){Ht=Q[mt].mipmaps;for(let ne=0;ne<Ht.length;ne++){let Te=Ht[ne];v.format!==wn?ct!==null?Et?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Te.width,Te.height,ct,Te.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ot,Te.width,Te.height,0,Te.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Te.width,Te.height,ct,rt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ot,Te.width,Te.height,0,ct,rt,Te.data)}}}else{if(Ht=v.mipmaps,Et&&Gt){Ht.length>0&&Ct++;let mt=Ot(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ot,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(I){Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Q[mt].width,Q[mt].height,ct,rt,Q[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,Q[mt].width,Q[mt].height,0,ct,rt,Q[mt].data);for(let ne=0;ne<Ht.length;ne++){let ei=Ht[ne].image[mt].image;Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,ei.width,ei.height,ct,rt,ei.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ot,ei.width,ei.height,0,ct,rt,ei.data)}}else{Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct,rt,Q[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,ct,rt,Q[mt]);for(let ne=0;ne<Ht.length;ne++){let Te=Ht[ne];Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,ct,rt,Te.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ot,ct,rt,Te.image[mt])}}}C(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),at.__version=et.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ue(E,v,H,it,et,at){let dt=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),K=A(H.internalFormat,dt,Z,H.normalized,H.colorSpace),lt=n.get(v),I=n.get(H);if(I.__renderTarget=v,!lt.__hasExternalTextures){let Q=Math.max(1,v.width>>at),$=Math.max(1,v.height>>at);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,at,K,Q,$,v.depth,0,dt,Z,null):e.texImage2D(et,at,K,Q,$,0,dt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,I.__webglTexture,0,ce(v)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,et,I.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function En(E,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let it=v.depthTexture,et=it&&it.isDepthTexture?it.type:null,at=_(v.stencilBuffer,et),dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),at,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,E)}else{let it=v.textures;for(let et=0;et<it.length;et++){let at=it[et],dt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),K=A(at.internalFormat,dt,Z,at.normalized,at.colorSpace);pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),K,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(E,v,H){let it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(v.depthTexture);et.__renderTarget=v;let at=it?v.depthTexture.image[0]:v.depthTexture.image;(!et.__webglTexture||at.width!==v.width||at.height!==v.height)&&(at.width=v.width,at.height=v.height,v.depthTexture.needsUpdate=!0),it?xt(v.depthTexture,0):_t(v.depthTexture,0);let dt=et.__webglTexture,Z=ce(v),K=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,lt=v.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===qn)pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,dt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,dt,0);else if(v.depthTexture.format===jn)pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,dt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(E){let v=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let it=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",et)};it.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=it}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let it=0;it<6;it++)Ae(v.__webglFramebuffer[it],E,it);else E.texture.mipmaps.length>0?Ae(v.__webglFramebuffer[0],E,0):Ae(v.__webglFramebuffer,E,0);else if(H){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),En(v.__webglDepthbuffer[it],E,!1);else{let et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,at)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),En(v.__webglDepthbuffer,E,!1);else{let et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(E,v,H){let it=n.get(E);v!==void 0&&ue(it.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ln(E)}function hn(E){let v=E.texture,H=n.get(E),it=n.get(v);E.addEventListener("dispose",k),U(E);let et=E.textures,at=E.isWebGLCubeRenderTarget===!0,dt=et.length>1;if(dt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,a.memory.textures++),at){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let K=0;K<v.mipmaps.length;K++)H.__webglFramebuffer[Z][K]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Z=0,K=et.length;Z<K;Z++){let lt=n.get(et[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&pt(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<et.length;Z++){let K=et[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let lt=r.convert(K.format,K.colorSpace),I=r.convert(K.type),Q=A(K.internalFormat,lt,I,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),$=ce(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),En(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)ue(H.__webglFramebuffer[Z][K],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else ue(H.__webglFramebuffer[Z],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);C(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Z=0,K=et.length;Z<K;Z++){let lt=et[Z],I=n.get(lt),Q=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),ee(Q,lt),ue(H.__webglFramebuffer,E,lt,i.COLOR_ATTACHMENT0+Z,Q,0),C(lt)&&S(Q)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),ee(Z,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)ue(H.__webglFramebuffer[K],E,v,i.COLOR_ATTACHMENT0,Z,K);else ue(H.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Z,0);C(v)?S(Z):v.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ln(E)}function B(E){let v=E.textures;for(let H=0,it=v.length;H<it;H++){let et=v[H];if(C(et)&&et.mipmapsAutoUpdate===!0){let at=w(E),dt=n.get(et).__webglTexture;e.bindTexture(at,dt),S(at),e.unbindTexture()}}}let un=[];function le(E){if(E.samples>0){if(pt(E)===!1){let v=E.textures,H=E.width,it=E.height,et=i.COLOR_BUFFER_BIT,at=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(E),Z=v.length>1;if(Z)for(let lt=0;lt<v.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let lt=0;lt<v.length;lt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let I=n.get(v[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,H,it,0,0,H,it,et,i.NEAREST),l===!0&&(un.length=0,un.push(i.COLOR_ATTACHMENT0+lt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&un.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,un))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<v.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let I=n.get(v[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ce(E){return Math.min(s.maxSamples,E.samples)}function pt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function It(E,v){let H=E.colorSpace,it=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==Js&&H!==An&&(Zt.getTransfer(H)===te?(it!==wn||et!==Qe)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",H)),v}function Ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=J,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=_t,this.setTexture2DArray=St,this.setTexture3D=Pt,this.setTextureCube=xt,this.rebindTextures=cn,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=pt,this.dispose=V}function Nx(i,t){function e(n,s=An){let r,a=Zt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return i.BYTE;if(n===yc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===bc)return i.ALPHA;if(n===wc)return i.RGB;if(n===wn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===wr||n===Ar||n===Tr||n===Er)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===So||n===bo||n===wo||n===Cr||n===Ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===Eo||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Ho||n===Go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Wo||n===Rr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ue({vertexShader:Dx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new th,m={},M=e.getContextAttributes(),C=null,S=null,w=[],A=[],_=new Tt,b=null,U=null,P=new Ye;P.viewport=new he;let F=new Ye;F.viewport=new he;let k=[P,F],N=new so,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _t=w[j];return _t===void 0&&(_t=new gs,w[j]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(j){let _t=w[j];return _t===void 0&&(_t=new gs,w[j]=_t),_t.getGripSpace()},this.getHand=function(j){let _t=w[j];return _t===void 0&&(_t=new gs,w[j]=_t),_t.getHandSpace()};function q(j){let _t=A.indexOf(j.inputSource);if(_t===-1)return;let St=w[_t];St!==void 0&&(St.update(j.inputSource,j.frame,c||a),St.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let j=0;j<w.length;j++){let _t=A[j];_t!==null&&(A[j]=null,w[j].disconnect(_t))}R=null,V=null,p.reset();for(let j in m)delete m[j];if(t.setRenderTarget(C),f=null,d=null,u=null,s=null,S=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),U!==null){let j=U.camera;j.fov=U.fov,j.zoom=U.zoom,j.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Pt=null,xt=null;M.depth&&(xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?jn:qn,Pt=M.stencil?ki:Mn);let zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new sn(d.textureWidth,d.textureHeight,{format:wn,type:Qe,depthTexture:new Zn(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new sn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(j){for(let _t=0;_t<j.removed.length;_t++){let St=j.removed[_t],Pt=A.indexOf(St);Pt>=0&&(A[Pt]=null,w[Pt].disconnect(St))}for(let _t=0;_t<j.added.length;_t++){let St=j.added[_t],Pt=A.indexOf(St);if(Pt===-1){for(let zt=0;zt<w.length;zt++)if(zt>=A.length){A.push(St),Pt=zt;break}else if(A[zt]===null){A[zt]=St,Pt=zt;break}if(Pt===-1)break}let xt=w[Pt];xt&&xt.connect(St)}}function X(j,_t){_t===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_t.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _t=j.near,St=j.far;p.texture!==null&&(p.depthNear>0&&(_t=p.depthNear),p.depthFar>0&&(St=p.depthFar)),N.near=F.near=P.near=_t,N.far=F.far=P.far=St,(R!==N.near||V!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,V=N.far),N.layers.mask=j.layers.mask|6,P.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;let Pt=j.parent,xt=N.cameras;X(N,Pt);for(let zt=0;zt<xt.length;zt++)X(xt[zt],Pt);N.projectionMatrix.copy(P.projectionMatrix),N.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&j.isPerspectiveCamera&&(U={camera:j,fov:j.fov,zoom:j.zoom}),J(j,N,Pt)};function J(j,_t,St){St===null?j.matrix.copy(_t.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(_t.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_t.projectionMatrix),j.projectionMatrixInverse.copy(_t.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(j){return m[j]};let tt=null;function yt(j,_t){if(h=_t.getViewerPose(c||a),g=_t,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Pt=!1;St.length!==N.cameras.length&&(N.cameras.length=0,Pt=!0);for(let Nt=0;Nt<St.length;Nt++){let ee=St[Nt],ie=null;if(f!==null)ie=f.getViewport(ee);else{let Ie=u.getViewSubImage(d,ee);ie=Ie.viewport,Nt===0&&(t.setRenderTargetTextures(S,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(S))}let qt=k[Nt];qt===void 0&&(qt=new Ye,qt.layers.enable(Nt),qt.viewport=new he,k[Nt]=qt),qt.matrix.fromArray(ee.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ee.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ie.x,ie.y,ie.width,ie.height),Nt===0&&(N.matrix.copy(qt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pt===!0&&N.cameras.push(qt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Nt=u.getDepthInformation(St[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Nt=0;Nt<St.length;Nt++){let ee=St[Nt].camera;if(ee){let ie=m[ee];ie||(ie=new hr,m[ee]=ie);let qt=u.getCameraImage(ee);ie.sourceTexture=qt}}}}for(let St=0;St<w.length;St++){let Pt=A[St],xt=w[St];Pt!==null&&xt!==void 0&&xt.update(Pt,_t,c||a)}tt&&tt(j,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),g=null}let Dt=new Ed;Dt.setAnimationLoop(yt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}},Fx=new re,Od=new Ft;Od.set(-1,0,0,0,1,0,0,0,1);function Ox(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Oc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,C,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),C=M.envMap,S=M.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Od),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=C*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bx(i,t,e,n){let s={},r={};function a(M,C){let S=C.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,C){let S=s[M.id];S===void 0&&(g(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",p));let w=C.program;n.updateUBOMapping(M,w);let A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){let C=i.createBuffer(),S=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function c(M){let C=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let A=0,_=S.length;A<_;A++){let b=S[A];if(Array.isArray(b))for(let U=0,P=b.length;U<P;U++)h(b[U],A,U,w);else h(b,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,C,S,w){if(d(M,C,S,w)===!0){let A=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){let P=_[U],F=x(P,!0);u(P,M.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function u(M,C,S){typeof M=="number"||typeof M=="boolean"?C[S]=M:M.isMatrix3?(C[S]=M.elements[0],C[S+1]=M.elements[1],C[S+2]=M.elements[2],C[S+3]=0,C[S+4]=M.elements[3],C[S+5]=M.elements[4],C[S+6]=M.elements[5],C[S+7]=0,C[S+8]=M.elements[6],C[S+9]=M.elements[7],C[S+10]=M.elements[8],C[S+11]=0):ArrayBuffer.isView(M)?C.set(M.subarray(0,C.length-S),S):M.toArray(C,S)}function d(M,C,S,w){let A=M.value,_=C+"_"+S;if(Array.isArray(A)){w[_]===void 0&&(w[_]=[]);let b=w[_],U=!1;for(let P=0;P<A.length;P++)f(A[P],b,P)===!0&&(U=!0);return U}return f(A,w,_)}function f(M,C,S){if(C[S]===void 0)return typeof M=="number"||typeof M=="boolean"?C[S]=M:ArrayBuffer.isView(M)?C[S]=M.slice():C[S]=M.clone(),!0;{let w=C[S];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return C[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){let C=M.uniforms,S=0,w=16;for(let _=0,b=C.length;_<b;_++){let U=Array.isArray(C[_])?C[_]:[C[_]];for(let P=0,F=U.length;P<F;P++){let k=U[P],N=Array.isArray(k.value)?k.value:[k.value],R=Array.isArray(C[_])||Array.isArray(k.value),V=S;for(let W=0,nt=N.length;W<nt;W++){let X=N[W],J=x(X,R),tt=S%w,yt=tt%J.boundary,Dt=tt+yt;S+=yt,Dt!==0&&w-Dt<J.storage&&(S+=w-Dt),W===0&&(V=S),S+=J.storage}let q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new q((S-V)/Float32Array.BYTES_PER_ELEMENT),k.__offset=V}}let A=S%w;return A>0&&(S+=w-A),M.__size=S,M.__cache={},this}function x(M,C){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),C===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let C=M.target;C.removeEventListener("dispose",p),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function zx(){return Dn===null&&(Dn=new Fa(kx,16,16,mi,bn),Dn.name="DFG_LUT",Dn.minFilter=$e,Dn.magFilter=$e,Dn.wrapS=Rn,Dn.wrapT=Rn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Jo=class{constructor(t={}){let{canvas:e=Ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,p=new Set([mo,po,fo]),m=new Set([Qe,Mn,ws,ki,ho,uo]),M=new Uint32Array(4),C=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,A=null,_=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,k=null,N=null,R=null,V=null;this._outputColorSpace=qe;let q=0,W=0,nt=null,X=-1,J=null,tt=new he,yt=new he,Dt=null,j=new kt(0),_t=0,St=e.width,Pt=e.height,xt=1,zt=null,_e=null,Nt=new he(0,0,St,Pt),ee=new he(0,0,St,Pt),ie=!1,qt=new hi,Ie=new Oa,ye=!1,Je=!1,ue=new re,En=new O,Ae=new he,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},cn=!1;function hn(){return nt===null?xt:1}let B=n;function un(y,D){return e.getContext(y,D)}let le,ce,pt,Me,It,Ot,E,v,H,it,et,at,dt,Z,K,lt,I,Q,$,ct,rt,ot,Et;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){let D="webgl2";if(B=un(D,y),B===null)throw un(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(y){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ut("WebGLRenderer: "+y.message),y}function Gt(){le=new K0(B),le.init(),rt=new Nx(B,le),ce=new z0(B,le,t,rt),pt=new Ix(B,le),ce.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),N=B.createFramebuffer(),R=B.createFramebuffer(),V=B.createFramebuffer(),Me=new t_(B),It=new _x,Ot=new Lx(B,le,pt,It,ce,rt,Me),E=new J0(P),v=new nm(B),ot=new B0(B,v),H=new j0(B,v,Me,ot),it=new n_(B,H,v,ot,Me),Q=new e_(B,ce,Ot),K=new H0(It),et=new gx(P,E,le,ce,ot,K),at=new Ox(P,It),dt=new vx,Z=new Ax(le),I=new O0(P,E,pt,it,g,l),lt=new Px(P,it,ce),Et=new Bx(B,Me,ce,pt),$=new k0(B,le,Me),ct=new Q0(B,le,Me),Me.programs=et.programs,P.capabilities=ce,P.extensions=le,P.properties=It,P.renderLists=dt,P.shadowMap=lt,P.state=pt,P.info=Me}x!==Qe&&(U=new s_(x,e.width,e.height,o,s,r));let st=new eh(P,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(y){y!==void 0&&(xt=y,this.setSize(St,Pt,!1))},this.getSize=function(y){return y.set(St,Pt)},this.setSize=function(y,D,Y=!0){if(st.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=y,Pt=D,e.width=Math.floor(y*xt),e.height=Math.floor(D*xt),Y===!0&&(e.style.width=y+"px",e.style.height=D+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(St*xt,Pt*xt).floor()},this.setDrawingBufferSize=function(y,D,Y){St=y,Pt=D,xt=Y,e.width=Math.floor(y*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(x===Qe){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(Nt)},this.setViewport=function(y,D,Y,z){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,D,Y,z),pt.viewport(tt.copy(Nt).multiplyScalar(hn()).round())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,D,Y,z){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,D,Y,z),pt.scissor(yt.copy(ee).multiplyScalar(hn()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){pt.setScissorTest(ie=y)},this.setOpaqueSort=function(y){zt=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,Y=!0){let z=0;if(y){let G=!1;if(nt!==null){let ft=nt.texture.format;G=p.has(ft)}if(G){let ft=nt.texture.type,Mt=m.has(ft),ut=I.getClearColor(),vt=I.getClearAlpha(),At=ut.r,Bt=ut.g,Yt=ut.b;Mt?(M[0]=At,M[1]=Bt,M[2]=Yt,M[3]=vt,B.clearBufferuiv(B.COLOR,0,M)):(C[0]=At,C[1]=Bt,C[2]=Yt,C[3]=vt,B.clearBufferiv(B.COLOR,0,C))}else z|=B.COLOR_BUFFER_BIT}D&&(z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),I.dispose(),dt.dispose(),Z.dispose(),Ot.dispose(),It.dispose(),E.dispose(),it.dispose(),H.dispose(),ot.dispose(),Et.dispose(),et.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ph),st.removeEventListener("sessionend",Ih),Ai.stop()};function Ct(y){y.preventDefault(),js("WebGLRenderer: Context Lost."),F=!0}function Ht(){js("WebGLRenderer: Context Restored."),F=!1;let y=Me.autoReset,D=lt.enabled,Y=lt.autoUpdate,z=lt.needsUpdate,G=lt.type;Gt(),Me.autoReset=y,lt.enabled=D,lt.autoUpdate=Y,lt.needsUpdate=z,lt.type=G}function mt(y){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ne(y){let D=y.target;D.removeEventListener("dispose",ne),Te(D)}function Te(y){ei(y),It.remove(y)}function ei(y){let D=It.get(y).programs;D!==void 0&&(D.forEach(function(Y){et.releaseProgram(Y)}),y.isShaderMaterial&&et.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,Y,z,G,ft){D===null&&(D=ln);let Mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=Zf(y,D,Y,z,G);pt.setMaterial(z,Mt);let vt=Y.index,At=1;if(z.wireframe===!0){if(vt=H.getWireframeAttribute(Y),vt===void 0)return;At=2}let Bt=Y.drawRange,Yt=Y.attributes.position,bt=Bt.start*At,$t=(Bt.start+Bt.count)*At;ft!==null&&(bt=Math.max(bt,ft.start*At),$t=Math.min($t,(ft.start+ft.count)*At)),vt!==null?(bt=Math.max(bt,0),$t=Math.min($t,vt.count)):Yt!=null&&(bt=Math.max(bt,0),$t=Math.min($t,Yt.count));let xe=$t-bt;if(xe<0||xe===1/0)return;ot.setup(G,z,ut,Y,vt);let ae,se=$;if(vt!==null&&(ae=v.get(vt),se=ct,se.setIndex(ae)),G.isMesh)z.wireframe===!0?(pt.setLineWidth(z.wireframeLinewidth*hn()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(G.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),pt.setLineWidth(Oe*hn()),G.isLineSegments?se.setMode(B.LINES):G.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else G.isPoints?se.setMode(B.POINTS):G.isSprite&&se.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(le.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Oe=G._multiDrawStarts,wt=G._multiDrawCounts,We=G._multiDrawCount,jt=vt?v.get(vt).bytesPerElement:1,Ti=It.get(z).currentProgram.getUniforms();for(let Be=0;Be<We;Be++)Ti.setValue(B,"_gl_DrawID",Be),se.render(Oe[Be]/jt,wt[Be])}else if(G.isInstancedMesh)se.renderInstances(bt,xe,G.count);else if(Y.isInstancedBufferGeometry){let Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,Oe);se.renderInstances(bt,xe,wt)}else se.render(bt,xe)};function Rh(y,D,Y,z){k!==null&&y.isNodeMaterial&&k.setObject(z,y),ye===!0&&K.setState(y,Y,!1),y.transparent===!0&&y.side===an&&y.forceSinglePass===!1?(y.side=Fe,y.needsUpdate=!0,Fs(y,D,z),y.side=pi,y.needsUpdate=!0,Fs(y,D,z),y.side=an):Fs(y,D,z)}this.compile=function(y,D,Y=null){Y===null&&(Y=y),k!==null&&k.renderStart(y,D,Y),A=Z.get(Y),A.init(D),b.push(A),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),y!==Y&&y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),Je=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Je),ye===!0&&K.setGlobalState(this.clippingPlanes,D),k!==null&&lt.render(A.state.shadowsArray,Y,D);let z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let ut=ft[Mt];Rh(ut,Y,D,G),z.add(ut)}else Rh(ft,Y,D,G),z.add(ft)}),A=b.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(y,D,Y=null){let z=this.compile(y,D,Y);return new Promise(G=>{function ft(){if(z.forEach(function(Mt){let vt=It.get(Mt).currentProgram;(vt===void 0||vt.isReady())&&z.delete(Mt)}),z.size===0){G(y);return}setTimeout(ft,10)}le.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Al=null;function Yf(y){Al&&Al(y)}function Ph(){Ai.stop()}function Ih(){Ai.start()}let Ai=new Ed;Ai.setAnimationLoop(Yf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(y){Al=y,st.setAnimationLoop(y),y===null?Ai.stop():Ai.start()},st.addEventListener("sessionstart",Ph),st.addEventListener("sessionend",Ih),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(y,D);let Y=st.enabled===!0&&st.isPresenting===!0,z=U!==null&&(nt===null||Y)&&U.begin(P,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,D,nt),A=Z.get(y,b.length),A.init(D),A.state.textureUnits=Ot.getTextureUnits(),b.push(A),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ie.setFromArrayCamera(D):qt.setFromProjectionMatrix(ue,fn,D.reversedDepth),Je=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Je),w=dt.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&Tl(Mt,D,-1/0,P.sortObjects)}Tl(y,D,0,P.sortObjects),w.finish(),k!==null&&k.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(zt,_e),cn=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,cn&&I.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),ye===!0&&K.beginShadows();let G=A.state.shadowsArray;if(lt.render(G,y,D),ye===!0&&K.endShadows(),(z&&U.hasRenderPass())===!1){let Mt=w.opaque,ut=w.transmissive;if(A.setupLights(),D.isArrayCamera){let vt=D.cameras;if(ut.length>0)for(let At=0,Bt=vt.length;At<Bt;At++){let Yt=vt[At];Nh(Mt,ut,y,Yt)}cn&&I.render(y);for(let At=0,Bt=vt.length;At<Bt;At++){let Yt=vt[At];Lh(w,y,Yt,Yt.viewport)}}else ut.length>0&&Nh(Mt,ut,y,D),cn&&I.render(y),Lh(w,y,D)}nt!==null&&W===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),z&&U.end(P),y.isScene===!0&&y.onAfterRender(P,y,D),ot.resetDefaultState(),X=-1,J=null,b.pop(),b.length>0?(A=b[b.length-1],Ot.setTextureUnits(A.state.textureUnits),ye===!0&&K.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,k!==null&&k.renderEnd()};function Tl(y,D,Y,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let Mt=D.isArrayCamera?Ie:qt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){z&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);let ut=it.update(y),vt=y.material;vt.visible&&w.push(y,ut,vt,Y,Ae.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){let Mt=D.isArrayCamera?Ie:qt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){let ut=it.update(y),vt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ae.copy(ut.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(vt)){let At=ut.groups;for(let Bt=0,Yt=At.length;Bt<Yt;Bt++){let bt=At[Bt],$t=vt[bt.materialIndex];$t&&$t.visible&&w.push(y,ut,$t,Y,Ae.z,bt,D)}}else vt.visible&&w.push(y,ut,vt,Y,Ae.z,null,D)}}}let ft=y.children;for(let Mt=0,ut=ft.length;Mt<ut;Mt++)Tl(ft[Mt],D,Y,z)}function Lh(y,D,Y,z){let{opaque:G,transmissive:ft,transparent:Mt}=y;A.setupLightsView(Y),ye===!0&&K.setGlobalState(P.clippingPlanes,Y),z&&pt.viewport(tt.copy(z)),G.length>0&&qr(G,D,Y),ft.length>0&&qr(ft,D,Y),Mt.length>0&&qr(Mt,D,Y),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Nh(y,D,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let bt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new sn(1,1,{generateMipmaps:!0,type:bt?bn:Qe,minFilter:Kn,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let ft=A.state.transmissionRenderTarget[z.id],Mt=z.viewport||tt;ft.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),vt=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(ft),P.getClearColor(j),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),cn&&I.render(Y);let Bt=P.toneMapping;P.toneMapping=Nn;let Yt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),ye===!0&&K.setGlobalState(P.clippingPlanes,z),qr(y,Y,z),Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft),le.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let $t=0,xe=D.length;$t<xe;$t++){let ae=D[$t],{object:se,geometry:Oe,material:wt,group:We}=ae;if(wt.side===an&&se.layers.test(z.layers)){let jt=wt.side;wt.side=Fe,wt.needsUpdate=!0,Dh(se,Y,z,Oe,wt,We),wt.side=jt,wt.needsUpdate=!0,bt=!0}}bt===!0&&(Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft))}P.setRenderTarget(ut,vt,At),P.setClearColor(j,_t),Yt!==void 0&&(z.viewport=Yt),P.toneMapping=Bt}function qr(y,D,Y){let z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,ft=y.length;G<ft;G++){let Mt=y[G],{object:ut,geometry:vt,group:At}=Mt,Bt=Mt.material;Bt.allowOverride===!0&&z!==null&&(Bt=z),ut.layers.test(Y.layers)&&Dh(ut,D,Y,vt,Bt,At)}}function Dh(y,D,Y,z,G,ft){k!==null&&G.isNodeMaterial&&k.setObject(y,G),y.onBeforeRender(P,D,Y,z,G,ft),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(P,D,Y,z,y,ft),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,P.renderBufferDirect(Y,D,z,G,y,ft),G.side=pi,G.needsUpdate=!0,P.renderBufferDirect(Y,D,z,G,y,ft),G.side=an):P.renderBufferDirect(Y,D,z,G,y,ft),y.onAfterRender(P,D,Y,z,G,ft)}function Uh(y){let D=0;for(let Y of y)Y.texture!==null&&D++;return D}function Fs(y,D,Y){D.isScene!==!0&&(D=ln);let z=It.get(y),G=A.state.lights,ft=A.state.shadowsArray,Mt=G.state.version,ut=et.getParameters(y,G.state,ft,D,Y,A.state.lightProbeGridArray),vt=et.getProgramCacheKey(ut),At=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Bt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=E.get(y.envMap||z.environment,Bt),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",ne),At=new Map,z.programs=At,z.programVariants=new Map);let Yt=At.get(vt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===Mt)return Oh(y,ut),Yt}else ut.uniforms=et.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,Y,ut),y.onBeforeCompile(ut,P),Yt=et.acquireProgram(ut,vt),At.set(vt,Yt),z.uniforms=ut.uniforms;let bt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=K.uniform),Oh(y,ut),z.needsLights=Kf(y),z.lightsStateVersion=Mt,z.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Uh(A.state.lightProbeGridArray),z.currentProgram=Yt,z.uniformsList=null,Yt}function $f(y,D,Y,z,G){let ft=It.get(y),Mt=ft.currentProgram.id+","+z+","+G,ut=ft.programVariants.get(Mt);return ut===void 0?(ut=Fs(y,D,Y),ft.programVariants.set(Mt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=z,ft.toneMapping=G),ut}function Fh(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=As.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Oh(y,D){let Y=It.get(y);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Zf(y,D,Y,z,G){D.isScene!==!0&&(D=ln),Ot.resetTextureUnits();let ft=D.fog,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ut=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,At=E.get(z.envMap||Mt,vt),Bt=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Yt=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!Y.morphAttributes.position,$t=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color,ae=Nn;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ae=P.toneMapping);let se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Oe=se!==void 0?se.length:0,wt=It.get(z),We=A.state.lights;if(ye===!0&&(Je===!0||y!==J)){let de=y===J&&z.id===X;K.setState(z,y,de)}let jt=!1,Ti=!1;z.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==We.state.version||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==At||z.fog===!0&&wt.fog!==ft||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==K.numPlanes||wt.numIntersection!==K.numIntersection)||wt.vertexAlphas!==Bt||wt.vertexTangents!==Yt||wt.morphTargets!==bt||wt.morphNormals!==$t||wt.morphColors!==xe||wt.morphTargetsCount!==Oe||wt.numLightProbeGrids!==Uh(A.state.lightProbeGridArray)?jt=!0:(wt.outputColorSpace!==ut||wt.toneMapping!==ae)&&(Ti=!0):(jt=!0,wt.__version=z.version);let Be=wt.currentProgram;(jt===!0||Ti===!0)&&(Be=Ti===!0?$f(z,D,G,ut,ae):Fs(z,D,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,Be,wt));let Yr=!1,ni=!1,Ei=!1,Jt=Be.getUniforms(),Le=wt.uniforms;if(pt.useProgram(Be.program)&&(Yr=!0,ni=!0,Ei=!0),z.id!==X&&(X=z.id,ni=!0),Yr||J!==y){pt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Jt.setValue(B,"projectionMatrix",y.projectionMatrix),Jt.setValue(B,"viewMatrix",y.matrixWorldInverse);let Ee=Jt.map.cameraPosition;Ee!==void 0&&Ee.setValue(B,En.setFromMatrixPosition(y.matrixWorld)),ce.logarithmicDepthBuffer&&Jt.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Jt.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,ni=!0,Ei=!0)}if(wt.needsLights&&(We.state.sunShadowMap.length>0&&Jt.setValue(B,"sunShadowMap",We.state.sunShadowMap,Ot),We.state.directionalShadowMap.length>0&&Jt.setValue(B,"directionalShadowMap",We.state.directionalShadowMap,Ot),We.state.spotShadowMap.length>0&&Jt.setValue(B,"spotShadowMap",We.state.spotShadowMap,Ot),We.state.pointShadowMap.length>0&&Jt.setValue(B,"pointShadowMap",We.state.pointShadowMap,Ot)),G.isSkinnedMesh){Jt.setOptional(B,G,"bindMatrix"),Jt.setOptional(B,G,"bindMatrixInverse");let de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Jt.setValue(B,"boneTexture",de.boneTexture,Ot))}G.isBatchedMesh&&(Jt.setOptional(B,G,"batchingTexture"),Jt.setValue(B,"batchingTexture",G._matricesTexture,Ot),Jt.setOptional(B,G,"batchingIdTexture"),Jt.setValue(B,"batchingIdTexture",G._indirectTexture,Ot),Jt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Jt.setValue(B,"batchingColorTexture",G._colorsTexture,Ot));let gn=Y.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Q.update(G,Y,Be),(ni||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,Jt.setValue(B,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Le.envMapIntensity.value=D.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=zx()),ni){if(Jt.setValue(B,"toneMappingExposure",P.toneMappingExposure),wt.needsLights&&Jf(Le,Ei),ft&&z.fog===!0&&at.refreshFogUniforms(Le,ft),at.refreshMaterialUniforms(Le,z,xt,Pt,A.state.transmissionRenderTarget[y.id]),wt.needsLights&&wt.numLightProbeGrids>0){let de=S,Ee=0;for(let On of A.state.lightProbeGridArray)On.texture!==null&&(de.textures[Ee]=On.texture,de.min[Ee]=On.boundingBox.min,de.max[Ee]=On.boundingBox.max,de.resolution[Ee]=On.resolution,Ee++);for(let On in de)de[On].length=Ee;Le.probesSH.value=de.textures,Le.probesMin.value=de.min,Le.probesMax.value=de.max,Le.probesResolution.value=de.resolution}As.upload(B,Fh(wt),Le,Ot)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(As.upload(B,Fh(wt),Le,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Jt.setValue(B,"center",G.center),Jt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Jt.setValue(B,"normalMatrix",G.normalMatrix),Jt.setValue(B,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let de=z.uniformsGroups;for(let Ee=0,On=de.length;Ee<On;Ee++){let kh=de[Ee];Et.update(kh,Be),Et.bind(kh,Be)}}return Be}function Jf(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Kf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,D,Y){let z=It.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),It.get(y.texture).__webglTexture=D,It.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let Y=It.get(y);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,Y=0){nt=y,q=D,W=Y;let z=null,G=!1,ft=!1;if(y){let ut=It.get(y);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(B.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(y.viewport),yt.copy(y.scissor),Dt=y.scissorTest,pt.viewport(tt),pt.scissor(yt),pt.setScissorTest(Dt),X=-1;return}else if(ut.__webglFramebuffer===void 0)Ot.setupRenderTarget(y);else if(ut.__hasExternalTextures)Ot.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Bt=y.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&It.has(Bt)&&(y.width!==Bt.image.width||y.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(y)}}let vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let At=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[D])?z=At[D][Y]:z=At[D],G=!0):y.samples>0&&Ot.useMultisampledRTT(y)===!1?z=It.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[Y]:z=At,tt.copy(y.viewport),yt.copy(y.scissor),Dt=y.scissorTest}else tt.copy(Nt).multiplyScalar(xt).floor(),yt.copy(ee).multiplyScalar(xt).floor(),Dt=ie;if(Y!==0&&(z=N),pt.bindFramebuffer(B.FRAMEBUFFER,z)&&pt.drawBuffers(y,z),pt.viewport(tt),pt.scissor(yt),pt.setScissorTest(Dt),G){let ut=It.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,Y)}else if(ft){let ut=D;for(let vt=0;vt<y.textures.length;vt++){let At=It.get(y.textures[vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+vt,At.__webglTexture,Y,ut)}}else if(y!==null&&Y!==0){let ut=It.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,Y)}X=-1};function Bh(y){let D=It.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=ce.textureFormatReadable(y.format),D.__typeReadable=ce.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,Y,z,G,ft,Mt,ut=0){if(!(y&&y.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt){pt.bindFramebuffer(B.FRAMEBUFFER,vt);try{let At=y.textures[ut],Bt=At.format,Yt=At.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ut);let bt=Bh(At);if(bt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&Y>=0&&Y<=y.height-G&&B.readPixels(D,Y,z,G,rt.convert(Bt),rt.convert(Yt),ft)}finally{let At=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,D,Y,z,G,ft,Mt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt)if(D>=0&&D<=y.width-z&&Y>=0&&Y<=y.height-G){pt.bindFramebuffer(B.FRAMEBUFFER,vt);let At=y.textures[ut],Bt=At.format,Yt=At.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ut);let bt=Bh(At);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.bufferData(B.PIXEL_PACK_BUFFER,ft.byteLength,B.STREAM_READ),B.readPixels(D,Y,z,G,rt.convert(Bt),rt.convert(Yt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let xe=nt!==null?It.get(nt).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,xe);let ae=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qu(B,ae,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ft),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer($t),B.deleteSync(ae),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,Y=0){let z=Math.pow(2,-Y),G=Math.floor(y.image.width*z),ft=Math.floor(y.image.height*z),Mt=D!==null?D.x:0,ut=D!==null?D.y:0;Ot.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Mt,ut,G,ft),pt.unbindTexture()},this.copyTextureToTexture=function(y,D,Y=null,z=null,G=0,ft=0){let Mt,ut,vt,At,Bt,Yt,bt,$t,xe,ae=y.isCompressedTexture?y.mipmaps[ft]:y.image;if(Y!==null)Mt=Y.max.x-Y.min.x,ut=Y.max.y-Y.min.y,vt=Y.isBox3?Y.max.z-Y.min.z:1,At=Y.min.x,Bt=Y.min.y,Yt=Y.isBox3?Y.min.z:0;else{let Jt=Math.pow(2,-G);Mt=Math.floor(ae.width*Jt),ut=Math.floor(ae.height*Jt),y.isDataArrayTexture?vt=ae.depth:y.isData3DTexture?vt=Math.floor(ae.depth*Jt):vt=1,At=0,Bt=0,Yt=0}z!==null?(bt=z.x,$t=z.y,xe=z.z):(bt=0,$t=0,xe=0);let se=rt.convert(D.format),Oe=rt.convert(D.type),wt;D.isData3DTexture?(Ot.setTexture3D(D,0),wt=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ot.setTexture2DArray(D,0),wt=B.TEXTURE_2D_ARRAY):(Ot.setTexture2D(D,0),wt=B.TEXTURE_2D),pt.activeTexture(B.TEXTURE0),pt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),pt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pt.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let We=pt.getParameter(B.UNPACK_ROW_LENGTH),jt=pt.getParameter(B.UNPACK_IMAGE_HEIGHT),Ti=pt.getParameter(B.UNPACK_SKIP_PIXELS),Be=pt.getParameter(B.UNPACK_SKIP_ROWS),Yr=pt.getParameter(B.UNPACK_SKIP_IMAGES);pt.pixelStorei(B.UNPACK_ROW_LENGTH,ae.width),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae.height),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,At),pt.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,Yt);let ni=y.isDataArrayTexture||y.isData3DTexture,Ei=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Jt=It.get(y),Le=It.get(D),gn=It.get(Jt.__renderTarget),de=It.get(Le.__renderTarget);pt.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ee=0;Ee<vt;Ee++)ni&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(y).__webglTexture,G,Yt+Ee),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(D).__webglTexture,ft,xe+Ee)),B.blitFramebuffer(At,Bt,At+Mt,Bt+ut,bt,$t,bt+Mt,$t+ut,B.DEPTH_BUFFER_BIT,B.NEAREST);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||It.has(y)){let Jt=It.get(y),Le=It.get(D);pt.bindFramebuffer(B.READ_FRAMEBUFFER,R),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let gn=0;gn<vt;gn++)ni?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,G,Yt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,G),Ei?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,ft,xe+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Le.__webglTexture,ft),G!==0?B.blitFramebuffer(At,Bt,At+Mt,Bt+ut,bt,$t,bt+Mt,$t+ut,B.COLOR_BUFFER_BIT,B.NEAREST):Ei?B.copyTexSubImage3D(wt,ft,bt,$t,xe+gn,At,Bt,Mt,ut):B.copyTexSubImage2D(wt,ft,bt,$t,At,Bt,Mt,ut);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ei?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(wt,ft,bt,$t,xe,Mt,ut,vt,se,Oe,ae.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,ft,bt,$t,xe,Mt,ut,vt,se,ae.data):B.texSubImage3D(wt,ft,bt,$t,xe,Mt,ut,vt,se,Oe,ae):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ft,bt,$t,Mt,ut,se,Oe,ae.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ft,bt,$t,ae.width,ae.height,se,ae.data):B.texSubImage2D(B.TEXTURE_2D,ft,bt,$t,Mt,ut,se,Oe,ae);pt.pixelStorei(B.UNPACK_ROW_LENGTH,We),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,jt),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ti),pt.pixelStorei(B.UNPACK_SKIP_ROWS,Be),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,Yr),ft===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&B.generateMipmap(wt),pt.unbindTexture()},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&Ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ot.setTextureCube(y,0):y.isData3DTexture?Ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ot.setTexture2DArray(y,0):Ot.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){q=0,W=0,nt=null,pt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var mn=Math.PI/180;function Dr(i,t,e=1,n=new O){let s=i*mn,r=t*mn;return n.set(e*Math.cos(s)*Math.cos(r),e*Math.sin(s),-e*Math.cos(s)*Math.sin(r))}function Gx(i=new Date){let t=Date.UTC(i.getUTCFullYear(),0,0),e=Math.floor((i.getTime()-t)/864e5),n=i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600,s=2*Math.PI/365*(e-1+(n-12)/24),r=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),o=-15*(n-12+r/60);return o=(o+540)%360-180,{lat:a/mn,lon:o}}function Gd(i,t){let n=(t.lat-i.lat)*mn,s=(t.lon-i.lon)*mn,r=Math.sin(n/2)**2+Math.cos(i.lat*mn)*Math.cos(t.lat*mn)*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.sqrt(r))}function Bd(i,t,e,n){let s=[],r=Math.acos(Ge.clamp(i.dot(t),-1,1));if(r<.001){let l=new O(0,1,0).cross(i);l.lengthSq()<1e-4&&l.set(1,0,0).cross(i),l.normalize();for(let c=0;c<=e;c++){let h=c/e,u=Math.sin(Math.PI*h);s.push(i.clone().addScaledVector(l,.045*u).normalize().multiplyScalar(1.004+.1*u))}return s}let a=Math.sin(r),o=n*Ge.clamp(r/.6,.2,1);for(let l=0;l<=e;l++){let c=l/e,h=Math.sin((1-c)*r)/a,u=Math.sin(c*r)/a,d=i.clone().multiplyScalar(h).add(t.clone().multiplyScalar(u)).normalize();d.multiplyScalar(1.004+o*Math.pow(Math.sin(Math.PI*c),.85)),s.push(d)}return s}function Es(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new lr(e);return n.colorSpace=qe,n.anisotropy=4,n}function Qo(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.95),i.bezierCurveTo(t-n*1.45,e+n*.05,t-n*1.05,e-n*1,t,e-n*.38),i.bezierCurveTo(t+n*1.05,e-n*1,t+n*1.45,e+n*.05,t,e+n*.95),i.closePath()}function Vx(){let i=Es(128,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.22,"rgba(255,255,255,0.85)"),l.addColorStop(.5,"rgba(255,255,255,0.22)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,o,o)}),t=Es(128,(a,o)=>{a.strokeStyle="rgba(255,255,255,0.95)",a.lineWidth=5,a.beginPath(),a.arc(o/2,o/2,o*.4,0,Math.PI*2),a.stroke()}),e=Es(128,(a,o)=>{a.shadowColor="rgba(255,90,150,0.85)",a.shadowBlur=16;let l=a.createLinearGradient(o*.2,o*.2,o*.8,o*.85);l.addColorStop(0,"#ffc9de"),l.addColorStop(.45,"#ff6fa8"),l.addColorStop(1,"#e8266f"),a.fillStyle=l,Qo(a,o/2,o*.5,o*.3),a.fill(),a.shadowBlur=0,a.lineWidth=2,a.strokeStyle="rgba(255,255,255,0.4)",Qo(a,o/2,o*.5,o*.3),a.stroke(),a.save(),Qo(a,o/2,o*.5,o*.3),a.clip();let c=a.createLinearGradient(0,o*.2,0,o*.55);c.addColorStop(0,"rgba(255,255,255,0.7)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.beginPath(),a.ellipse(o*.5,o*.34,o*.27,o*.15,0,0,Math.PI*2),a.fill(),a.restore()}),n=Es(64,(a,o)=>{a.translate(o/2,o/2);let l=a.createRadialGradient(0,0,0,0,0,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.16,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.beginPath(),a.arc(0,0,o/2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.95)";for(let c of[0,Math.PI/2])a.save(),a.rotate(c),a.beginPath(),a.moveTo(-o*.49,0),a.quadraticCurveTo(0,-o*.04,o*.49,0),a.quadraticCurveTo(0,o*.04,-o*.49,0),a.fill(),a.restore()}),s=Es(256,(a,o)=>{a.translate(o/2,o/2),a.rotate(-.5),a.scale(o/256,o/256);let l=a.createRadialGradient(0,0,10,0,0,128);l.addColorStop(0,"rgba(140,215,255,0.5)"),l.addColorStop(.55,"rgba(140,215,255,0.12)"),l.addColorStop(1,"rgba(140,215,255,0)"),a.fillStyle=l,a.fillRect(-128,-128,256,256);let c=()=>{a.beginPath(),a.moveTo(-13,-70),a.lineTo(-13,-46),a.bezierCurveTo(-13,-26,-42,-22,-42,4),a.lineTo(-42,70),a.quadraticCurveTo(-42,90,-22,90),a.lineTo(22,90),a.quadraticCurveTo(42,90,42,70),a.lineTo(42,4),a.bezierCurveTo(42,-22,13,-26,13,-46),a.lineTo(13,-70),a.closePath()},h=a.createLinearGradient(-42,0,42,0);h.addColorStop(0,"rgba(190,235,255,0.34)"),h.addColorStop(.5,"rgba(190,235,255,0.10)"),h.addColorStop(1,"rgba(190,235,255,0.26)"),a.save(),a.rotate(.14);let u=(g,x,p,m,M)=>{a.beginPath(),a.moveTo(g+M,x),a.arcTo(g+p,x,g+p,x+m,M),a.arcTo(g+p,x+m,g,x+m,M),a.arcTo(g,x+m,g,x,M),a.arcTo(g,x,g+p,x,M),a.closePath()},d=a.createLinearGradient(0,-20,0,70);d.addColorStop(0,"#fffaf0"),d.addColorStop(1,"#f3e1c3"),a.fillStyle=d,u(-13,-22,26,88,8),a.fill(),a.strokeStyle="rgba(160,120,70,0.55)",a.lineWidth=1.6,u(-13,-22,26,88,8),a.stroke(),a.fillStyle="#ff6fa5",a.fillRect(-14,14,28,7),a.fillStyle="#ff8cc0",Qo(a,0,-2,7),a.fill(),a.restore(),a.fillStyle=h,c(),a.fill(),a.lineJoin="round",a.lineWidth=4,a.strokeStyle="rgba(255,255,255,0.95)",c(),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-16,-72),a.lineTo(16,-72),a.stroke();let f=a.createLinearGradient(0,-98,0,-72);f.addColorStop(0,"#e6b97c"),f.addColorStop(1,"#b98750"),a.fillStyle=f,u(-11,-98,22,28,6),a.fill(),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=2,u(-11,-98,22,28,6),a.stroke(),a.strokeStyle="rgba(255,255,255,0.65)",a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(-31,14),a.lineTo(-31,62),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-31,4),a.lineTo(-31,6),a.stroke()}),r=Es(64,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,o,o)});return{glow:i,ring:t,heart:e,bottle:s,spark:r,star:n}}var kd=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Wx=`
uniform sampler2D uDay; uniform sampler2D uNight; uniform sampler2D uPack;
uniform vec3 uSun; uniform float uBump;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 srgb(vec3 c){ return pow(max(c, vec3(0.0)), vec3(1.0/2.2)); }
void main(){
  vec3 N0 = normalize(vN);
  vec3 V = normalize(cameraPosition - vP);
  vec3 L = normalize(uSun);
  vec3 pk = texture2D(uPack, vUv).rgb;
  float land = pk.g;
  float cl = smoothstep(0.30, 0.95, pk.b);

  // relief from the height channel (finite differences in map space)
  vec2 du = vec2(1.6/4096.0, 0.0), dv = vec2(0.0, 1.6/2048.0);
  float hE = texture2D(uPack, vUv + du).r - texture2D(uPack, vUv - du).r;
  float hN = texture2D(uPack, vUv + dv).r - texture2D(uPack, vUv - dv).r;
  float cosLat = max(sqrt(max(1.0 - N0.y*N0.y, 0.0)), 0.06);
  float sE = hE / (6.2832 * cosLat * 3.2 / 4096.0);
  float sN = hN / (3.1416 * 3.2 / 2048.0);
  vec3 east = normalize(vec3(N0.z, 0.0, -N0.x) + vec3(1e-5, 0.0, 0.0));
  vec3 north = normalize(cross(N0, east));
  vec3 N = normalize(N0 - uBump * (sE * east + sN * north) * land);

  float ndl0 = dot(N0, L);
  float ndl = dot(N, L);
  float dayAmt = smoothstep(-0.14, 0.30, ndl0);
  vec3 albedo = lin(texture2D(uDay, vUv).rgb);
  float diff = clamp((ndl + 0.10) / 1.10, 0.0, 1.0);
  diff = pow(diff, 0.85);
  vec3 col = albedo * (diff * 1.30 * dayAmt + 0.0035);

  // ocean glint
  vec3 H = normalize(L + V);
  float nh = max(dot(N0, H), 0.0);
  float lit = smoothstep(0.0, 0.3, ndl0);
  float glint = (pow(nh, 420.0) * 1.1 + pow(nh, 36.0) * 0.07) * (1.0 - land) * lit;
  col += vec3(1.0, 0.93, 0.80) * glint * (1.0 - cl * 0.85);

  // city lights on the night side, hidden a bit by clouds
  vec3 city = lin(texture2D(uNight, vUv).rgb);
  float nightAmt = 1.0 - smoothstep(-0.20, 0.06, ndl0);
  col += city * vec3(1.0, 0.76, 0.46) * 2.6 * nightAmt * (1.0 - cl * 0.72);
  col += albedo * vec3(0.30, 0.45, 1.0) * 0.010 * nightAmt;

  // warm twilight band
  float tw = exp(-pow(ndl0 / 0.17, 2.0));
  col *= mix(vec3(1.0), vec3(1.38, 0.88, 0.66), tw * 0.65);

  // thin atmosphere on the limb
  float fres = pow(1.0 - max(dot(N0, V), 0.0), 3.0);
  float lt = smoothstep(-0.25, 0.45, ndl0);
  vec3 atm = mix(vec3(0.02, 0.05, 0.14), vec3(0.28, 0.56, 1.0), lt);
  col += atm * fres * (0.25 + 1.0 * lt);

  col = col / (1.0 + col * 0.18);
  gl_FragColor = vec4(srgb(col), 1.0);
}`,Xx=`
uniform sampler2D uPack; uniform vec3 uSun; uniform float uShift;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vP);
  vec3 L = normalize(uSun);
  float c = texture2D(uPack, vUv + vec2(uShift, 0.0)).b;
  float a = smoothstep(0.30, 0.88, c) * 0.92;
  float ndl = dot(N, L);
  float day = smoothstep(-0.16, 0.32, ndl);
  vec3 lit = vec3(1.0) * (0.10 + 1.12 * clamp(ndl + 0.06, 0.0, 1.0));
  float tw = exp(-pow(ndl / 0.18, 2.0));
  vec3 col = mix(vec3(0.012, 0.018, 0.04), lit, day);
  col *= mix(vec3(1.0), vec3(1.35, 0.82, 0.60), tw * 0.65);
  a *= mix(0.22, 1.0, day);
  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.0);
  a = clamp(a + fres * 0.08, 0.0, 1.0);
  gl_FragColor = vec4(pow(col, vec3(0.4545)), a);
}`,qx=`
varying vec3 vP;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Yx=`
uniform vec3 uSun; uniform float uInner; uniform float uOuter;
varying vec3 vP;
void main(){
  vec3 rd = normalize(vP - cameraPosition);
  float tc = -dot(cameraPosition, rd);
  vec3 closest = cameraPosition + rd * tc;
  float d = length(closest);
  float g = 1.0 - smoothstep(uInner, uOuter, d);
  g = pow(g, 2.4);
  vec3 n = normalize(closest);
  float s = dot(n, normalize(uSun));
  float lit = smoothstep(-0.38, 0.5, s);
  vec3 col = mix(vec3(0.03, 0.07, 0.20), vec3(0.26, 0.55, 1.0), lit);
  float tw = exp(-pow(s / 0.22, 2.0));
  col = mix(col, vec3(1.0, 0.52, 0.22), tw * 0.30);
  gl_FragColor = vec4(col * g * (0.30 + 1.0 * lit), 1.0);
}`,$x=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Zx=`
uniform float uTime; uniform float uReveal; uniform vec3 uA; uniform vec3 uB;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  float x = vUv.x;
  float rv = 1.0 - smoothstep(uReveal - 0.07, uReveal, x);
  vec3 V = normalize(cameraPosition - vP);
  float rim = pow(abs(dot(normalize(vN), V)), 0.55);
  float ends = smoothstep(0.0, 0.05, x) * smoothstep(1.0, 0.95, x);
  vec3 base = mix(uA, uB, smoothstep(0.1, 0.9, x));
  vec3 col = base * 0.32;
  for (int k = 0; k < 3; k++) {                                   // soft comets gliding along the path
    float head = fract(uTime * 0.07 + float(k) / 3.0);
    float d = head - x; d += d < 0.0 ? 1.0 : 0.0;
    col += mix(base, vec3(1.0), 0.55) * exp(-d * 15.0) * smoothstep(0.0, 0.012, d) * 1.2;
  }
  gl_FragColor = vec4(col * rim * ends * rv, 1.0);
}`,Jx=`
varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Kx=`
uniform float uTime; uniform float uSel; uniform float uAppear; uniform float uPulseT; uniform float uPhase; uniform float uBlink; uniform vec3 uColor;
varying vec2 vUv;
float ringAt(float r, float rad, float w){ float d = (r - rad) / w; return exp(-d * d); }
void main(){
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);
  float ang = atan(p.y, p.x);
  float rs = mix(0.5, 1.0, uAppear);
  float a = exp(-r * r * 9.0 / (rs * rs)) * 0.22;                       // soft ground glow
  for (int k = 0; k < 3; k++) {                                          // thin ripples that ease outwards
    float ph = fract(uTime * 0.25 + float(k) / 3.0 + uPhase);
    float e = 1.0 - pow(1.0 - ph, 2.4);
    float w = 0.012 + 0.030 * ph;
    a += ringAt(r, (0.11 + 0.80 * e) * rs, w) * pow(1.0 - ph, 1.5) * smoothstep(0.0, 0.10, ph) * 0.62;
  }
  a += ringAt(r, (0.165 + 0.012 * sin(uTime * 1.7 + uPhase * 6.28)) * rs, 0.010) * 0.62;  // fine breathing ring
  // selection reticle: four arcs that turn slowly and settle inwards
  float se = 1.0 - pow(1.0 - uSel, 3.0);
  float seg = smoothstep(-0.2, 0.35, sin(ang * 4.0 - uTime * 0.7));
  float sr = mix(0.80, 0.50, se) * rs;
  a += ringAt(r, sr, 0.011) * (0.25 + 0.75 * seg) * se * 1.1;
  a += ringAt(r, sr + 0.075, 0.006) * 0.35 * se;
  // arrival pulse: bright double shock-wave plus a soft flash
  vec3 hotAdd = vec3(0.0);
  if (uPulseT < 1.0) {
    float pt = uPulseT, e = 1.0 - pow(1.0 - pt, 3.0), env = pow(1.0 - pt, 1.3);
    float pt2 = clamp(pt * 1.25 - 0.12, 0.0, 1.0), e2 = 1.0 - pow(1.0 - pt2, 3.0);
    a += ringAt(r, 0.10 + 0.88 * e, 0.018 + 0.05 * pt) * env * 1.35;
    a += ringAt(r, 0.10 + 0.80 * e2, 0.014) * (1.0 - pt2) * 0.8;
    hotAdd += vec3(1.0, 0.92, 0.95) * exp(-r * r * 16.0) * env * 0.85;
  }
  // unread bottle: the whole marker flashes twice a second
  a += ringAt(r, 0.24 + 0.16 * uBlink, 0.05) * uBlink * 0.9;
  hotAdd += vec3(1.0, 0.9, 0.95) * exp(-r * r * 26.0) * uBlink * 0.8;
  float core = 1.0 - smoothstep(0.042, 0.068, r) + uBlink * 0.35 * (1.0 - smoothstep(0.07, 0.12, r));
  float coreGlow = exp(-r * r * 110.0) * (1.0 + uBlink * 1.2);
  vec3 hot = mix(uColor, vec3(1.0), 0.8);
  vec3 rgb = uColor * a + hot * (core * 0.95 + coreGlow * 0.7) * mix(0.0, 1.0, uAppear) + hotAdd;
  float edge = 1.0 - smoothstep(0.86, 1.0, r);
  gl_FragColor = vec4(rgb * edge, 1.0);
}`,jx=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Qx=`
uniform float uTime; uniform float uAppear; uniform float uBlink; uniform vec3 uColor;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vec3 V = normalize(cameraPosition - vP);
  float rim = pow(abs(dot(normalize(vN), V)), 1.7);
  float h = vUv.y;
  float a = pow(1.0 - h, 2.1) * rim * 0.42 * (0.86 + 0.14 * sin(uTime * 2.2 + h * 9.0)) * uAppear * (1.0 + uBlink * 1.8);
  vec3 col = mix(uColor, vec3(1.0), (1.0 - h) * 0.45);
  gl_FragColor = vec4(col * a, 1.0);
}`,zd=i=>.5-.5*Math.cos(Math.PI*i),nh=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Hd=i=>1-Math.pow(1-i,5),ih=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),tv=i=>{let t=(i%1+1)%1,e=n=>Math.exp(-Math.pow((t-n)/.05,2));return Math.min(1,e(.1)+e(.34))},tl=class{constructor(t,{onPick:e}={}){this.canvas=t,this.onPick=e||(()=>{}),this.renderer=new Jo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new er,this.scene.background=new kt(66058),this.camera=new Ye(50,1,.05,200),this.cam={lat:70,lon:-40,dist:3},this.vel={lon:0,lat:0,dist:0},this.tween=null,this.sunDir=new O(1,0,0),this.fx=[],this.cities={},this.alerts=new Set,this.blink=0,this.arcs=[],this.shiftY=0,this.shiftTarget=0,this.selected=null,this.t=0,this.onFrame=null,this.minDist=1.28,this.maxDist=8,this.W=1,this.H=1,this.tex=Vx(),this._bindInput(),this.resize()}async init(t="assets/",e){let n=new vs;n.onProgress=(h,u,d)=>e&&e(u/d);let s=new gr(n),r=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),a=h=>new Promise((u,d)=>s.load(t+h,f=>{f.wrapS=hs,f.anisotropy=r,f.colorSpace=An,u(f)},void 0,d)),[o,l,c]=await Promise.all([a("earth_day_4096.jpg"),a("earth_night_2048.jpg"),a("earth_pack_4096.jpg")]);this.texDay=o,this.texNight=l,this.texPack=c,this._buildScene(),this._updateSun()}_buildScene(){let t={value:this.sunDir},e=new Ui(1,160,96);this.earthMat=new Ue({vertexShader:kd,fragmentShader:Wx,uniforms:{uDay:{value:this.texDay},uNight:{value:this.texNight},uPack:{value:this.texPack},uSun:t,uBump:{value:.0065}}}),this.earth=new De(e,this.earthMat),this.scene.add(this.earth),this.cloudMat=new Ue({vertexShader:kd,fragmentShader:Xx,transparent:!0,depthWrite:!1,uniforms:{uPack:{value:this.texPack},uSun:t,uShift:{value:0}}}),this.clouds=new De(new Ui(1.011,128,80),this.cloudMat),this.scene.add(this.clouds),this.atmoMat=new Ue({vertexShader:qx,fragmentShader:Yx,side:Fe,blending:je,transparent:!0,depthWrite:!1,uniforms:{uSun:t,uInner:{value:.995},uOuter:{value:1.16}}}),this.scene.add(new De(new Ui(1.17,96,64),this.atmoMat));let n=2600,s=new Float32Array(n*3),r=new Float32Array(n*3),a=12345,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let h=o()*2-1,u=o()*Math.PI*2,d=Math.sqrt(1-h*h),f=60+o()*20;s.set([d*Math.cos(u)*f,h*f,d*Math.sin(u)*f],c*3);let g=.25+Math.pow(o(),3)*.75,x=o();r.set([g*(x>.8?1:.85+x*.15),g*(x>.8?.85:.9),g*(x<.3?1:.88)],c*3)}let l=new Ze;l.setAttribute("position",new Ke(s,3)),l.setAttribute("color",new Ke(r,3)),this.stars=new ar(l,new _s({size:3.4*Math.min(window.devicePixelRatio||1,2),map:this.tex.spark,alphaTest:.02,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.scene.add(this.stars),this.sunLight=new yr(16773341,2.4),this.scene.add(this.sunLight),this.scene.add(new Mr(8360918,1.1))}_makeCity(t,e,n){let s=new Wn,r=Dr(e.lat,e.lon,1).normalize();s.position.copy(r).multiplyScalar(1.0035),s.quaternion.setFromUnitVectors(new O(0,1,0),r);let a=new kt(e.color||"#ffffff"),o={uTime:{value:0},uSel:{value:0},uAppear:{value:0},uPulseT:{value:9},uPhase:{value:Math.random()},uBlink:{value:0},uColor:{value:a.clone().convertLinearToSRGB()}},l=new Ue({vertexShader:Jx,fragmentShader:Kx,uniforms:o,transparent:!0,depthWrite:!1,blending:je,side:an}),c=new De(new Di(2,2).rotateX(-Math.PI/2),l);c.renderOrder=4,s.add(c);let h={uTime:o.uTime,uAppear:o.uAppear,uBlink:o.uBlink,uColor:o.uColor},u=new Ue({vertexShader:jx,fragmentShader:Qx,uniforms:h,transparent:!0,depthWrite:!1,blending:je,side:an}),d=new De(new ur(.012,.05,1.05,28,1,!0).translate(0,.525,0),u);d.renderOrder=5,s.add(d),this.scene.add(s),this.cities[t]={key:t,def:e,group:s,pos:Dr(e.lat,e.lon,1.006),mat:l,u:o,color:a,selV:0,pulseT:9,born:n}}_dropCity(t){let e=this.cities[t];e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}),delete this.cities[t],this.selected===t&&(this.selected=null))}setCities(t){for(let n of Object.keys(this.cities))this._dropCity(n);let e=0;for(let[n,s]of Object.entries(t))this._makeCity(n,s,this.t+1.5+e++*.45)}syncCities(t){for(let e of Object.keys(this.cities))t[e]||this._dropCity(e);for(let[e,n]of Object.entries(t)){let s=this.cities[e];s&&Math.abs(s.def.lat-n.lat)<1e-4&&Math.abs(s.def.lon-n.lon)<1e-4||(s&&this._dropCity(e),this._makeCity(e,n,this.t+.2),this.cities[e].pulseT=0)}}setArc(t,e){this.arcs.forEach(h=>{this.scene.remove(h.mesh),h.mesh.geometry.dispose()}),this.arcs=[];let n=this.cities[t],s=this.cities[e];if(!n||!s)return;let r=Bd(n.pos.clone().normalize(),s.pos.clone().normalize(),140,.2),a=new Ni(r),o=h=>new kt(h).convertLinearToSRGB(),l=new Ue({vertexShader:$x,fragmentShader:Zx,transparent:!0,depthWrite:!1,blending:je,uniforms:{uTime:{value:0},uReveal:{value:0},uA:{value:o("#6ad7ff")},uB:{value:o("#ff8cc0")}}}),c=new De(new pr(a,240,.0026,6,!1),l);this.scene.add(c),this.arcs.push({mesh:c,curve:a,a:t,b:e,mat:l,t0:this.t+(this.t<5?1.2:.45)}),this.arcInfo={a:t,b:e,curve:a}}_arcCurve(t,e){if(this.arcInfo&&(this.arcInfo.a===t&&this.arcInfo.b===e||this.arcInfo.a===e&&this.arcInfo.b===t)){let a=this.arcInfo.curve,o=this.arcInfo.a!==t;return l=>a.getPointAt(o?1-l:l)}let n=this.cities[t],s=this.cities[e],r=new Ni(Bd(n.pos.clone().normalize(),s.pos.clone().normalize(),60,.12));return a=>r.getPointAt(a)}setSelected(t){this.selected=t}pulseCity(t){let e=this.cities[t];e&&(e.pulseT=0)}_vis(t){let e=this.camera.position,n=t.clone().sub(e),s=n.length()||1;n.divideScalar(s);let r=Ge.clamp(-e.dot(n),0,s);return Ge.smoothstep(e.clone().addScaledVector(n,r).length(),.985,1.004)}_px(){return .55+this.cam.dist*.25}_sparkle(t,e,n,s,r=16765670,a="star",o=2.2){let l=new $n(new Ln({map:this.tex[a],color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:je,opacity:0}));l.renderOrder=30,l.position.copy(t),this.scene.add(l);let c=t.clone(),h=e.clone(),u=Math.random()*6,d=0;this.fx.push({update:f=>{d+=f;let g=d/n;return g>=1?(this.scene.remove(l),l.material.dispose(),!1):(h.multiplyScalar(Math.exp(-o*f)),c.addScaledVector(h,f),l.position.copy(c),l.material.opacity=Math.pow(1-g,1.4)*Math.min(1,g*9)*(.72+.28*Math.sin(d*17+u))*this._vis(c),l.scale.setScalar(s*this._px()*(.55+.45*Math.sin(Math.min(1,g*1.7)*Math.PI))),l.material.rotation=d*1.4+u,!0)}})}launchHearts(t,e,n=1){if(!this.cities[t]||!this.cities[e])return;let s=this._arcCurve(t,e),r=Math.min(n,8),a=16;for(let o=0;o<r;o++){let l=o*.3,c=3.8+Math.random()*.5,h=(m,M,C)=>{let S=new $n(new Ln({map:m,color:M,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,blending:C}));return S.renderOrder=20,this.scene.add(S),S},u=h(this.tex.glow,16740261,je),d=Array.from({length:a},(m,M)=>h(this.tex.glow,new kt(16736158).lerp(new kt(16761498),M/a),je)),f=h(this.tex.heart,16777215,Jn);f.renderOrder=22;let g=-l,x=0,p=!1;this.fx.push({update:m=>{if(g+=m,g<0)return!0;p||(p=!0,this.pulseCity(t));let M=Math.min(g/c,1),C=zd(M),S=s(C),w=this._vis(S),A=nh(Math.min(1,g/.5)),_=1-.75*ih((M-.93)/.07),b=1+.11*Math.pow(Math.max(0,Math.sin(g*6.2)),3),U=.062*this._px()*.85*A*_*b;for(f.position.copy(S),f.scale.setScalar(U),f.material.opacity=Math.min(1,M*14)*(M>.97?(1-M)/.03:1)*w,f.material.rotation=Math.sin(g*2.3+o)*.2,u.position.copy(S),u.scale.setScalar(U*(2.9+.5*Math.sin(g*6.2))),u.material.opacity=f.material.opacity*.5,d.forEach((P,F)=>{P.position.copy(s(Math.max(0,C-(F+1)*.0075))),P.scale.setScalar(U*(1.05-F*.052)),P.material.opacity=f.material.opacity*Math.pow(1-F/a,2)*.5*this._vis(P.position)}),x+=m;x>.05&&M<.97;){x-=.05;let P=s(Math.min(1,C+.01)).sub(S).normalize(),F=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.05);this._sparkle(S,P.multiplyScalar(-.03).add(F),.9+Math.random()*.7,.02+Math.random()*.02,Math.random()<.5?16765670:16773321)}return M>=1?([f,u,...d].forEach(P=>{this.scene.remove(P),P.material.dispose()}),this._burst(e),!1):!0}})}}_burst(t){let e=this.cities[t];if(!e)return;this.pulseCity(t);let n=e.pos.clone().normalize(),s=new $n(new Ln({map:this.tex.glow,color:16751812,transparent:!0,depthWrite:!1,depthTest:!1,blending:je,opacity:0}));s.renderOrder=28,s.position.copy(e.pos).addScaledVector(n,.012),this.scene.add(s);let r=0;this.fx.push({update:a=>{r+=a;let o=r/.8;return o>=1?(this.scene.remove(s),s.material.dispose(),!1):(s.scale.setScalar(this._px()*(.1+.2*(1-Math.pow(1-o,3)))),s.material.opacity=Math.pow(1-o,2)*.9*this._vis(s.position),!0)}});for(let a=0;a<22;a++){let o=Math.random()*Math.PI*2,c=new O(Math.cos(o),Math.sin(o),.3).cross(n).normalize().multiplyScalar(.03+Math.random()*.1).addScaledVector(n,.03+Math.random()*.09);this._sparkle(e.pos.clone().addScaledVector(n,.01),c,1+Math.random()*.8,.018+Math.random()*.026,Math.random()<.6?16761564:16773839)}for(let a=0;a<5;a++){let o=new $n(new Ln({map:this.tex.heart,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));o.renderOrder=26,this.scene.add(o);let l=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).cross(n).normalize().multiplyScalar((Math.random()-.5)*.05),c=a*.12+Math.random()*.1,h=1.9+Math.random()*.5,u=Math.random()*6,d=-c;this.fx.push({update:f=>{if(d+=f,d<0)return!0;let g=d/h;if(g>=1)return this.scene.remove(o),o.material.dispose(),!1;let x=1-Math.pow(1-g,2.2);return o.position.copy(e.pos).addScaledVector(n,.02+x*.12).addScaledVector(l,x).addScaledVector(l.clone().cross(n),Math.sin(d*3+u)*.006),o.scale.setScalar(.03*this._px()*nh(Math.min(1,d/.35))*(1-.3*g)),o.material.opacity=Math.min(1,g*8)*Math.pow(1-g,1.2)*this._vis(o.position),o.material.rotation=Math.sin(d*2+u)*.25,!0}})}}launchBottle(t,e,n){if(!this.cities[t]||!this.cities[e]){n&&n();return}let s=this._arcCurve(t,e),r=14,a=7.5,o=(g,x,p,m)=>{let M=new $n(new Ln({map:g,color:x,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,blending:p}));return M.renderOrder=m,this.scene.add(M),M},l=o(this.tex.glow,9428223,je,20),c=Array.from({length:r},(g,x)=>o(this.tex.glow,new kt(8049407).lerp(new kt(16765158),x/r),je,20)),h=o(this.tex.bottle,16777215,Jn,23),u=0,d=0,f=!1;this.fx.push({update:g=>{u+=g;let x=Math.min(u/a,1),p=zd(x);f||(f=!0,this.pulseCity(t));let m=s(p);m.multiplyScalar(1-.1*Math.sin(x*Math.PI));let M=this._vis(m),C=nh(Math.min(1,u/.6)),S=1-.7*ih((x-.93)/.07),w=.078*this._px()*C*S;for(h.position.copy(m),h.scale.setScalar(w),h.material.opacity=Math.min(1,x*12)*(x>.97?(1-x)/.03:1)*M,h.material.rotation=Math.sin(u*1.9)*.16,l.position.copy(m),l.scale.setScalar(w*(2.6+.35*Math.sin(u*3.1))),l.material.opacity=h.material.opacity*.42,c.forEach((A,_)=>{A.position.copy(s(Math.max(0,p-(_+1)*.0065))),A.scale.setScalar(w*(.9-_*.05)),A.material.opacity=h.material.opacity*Math.pow(1-_/r,2)*.42*this._vis(A.position)}),d+=g;d>.06&&x<.97;)d-=.06,this._sparkle(m,new O,1.1,.026,10478591,"glow",0);return x>=1?([h,l,...c].forEach(A=>{this.scene.remove(A),A.material.dispose()}),this._burst(e),n&&n(),!1):!0}})}setAlert(t,e){e?this.alerts.add(t):this.alerts.delete(t)}_updateSun(){let t=Gx(this.simDate||new Date);this.sunSub=t,Dr(t.lat,t.lon,1,this.sunDir),this.sunLight&&this.sunLight.position.copy(this.sunDir).multiplyScalar(10)}setSimDate(t){this.simDate=t,this._updateSun()}fitDist(){let t=this.W/this.H,e=this.camera.fov*mn,n=t>=1?e/2:Math.atan(Math.tan(e/2)*t);return 1/Math.sin(n*.97)}_bothTarget(){let t=this.cities.lesha,e=this.cities.ari,n=new O;t&&e?n=t.pos.clone().normalize().add(e.pos.clone().normalize()).normalize():n=Dr(60,0);let s=Math.asin(n.y)/mn,r=Math.atan2(-n.z,n.x)/mn;return{lat:Math.min(s+6,80),lon:r,dist:this.fitDist()*.93}}viewBoth(t=1600){this.flyTo(this._bothTarget(),t)}intro(t=4200){let e=this._bothTarget();this.cam={lat:e.lat-22,lon:e.lon-100,dist:Math.min(this.maxDist,e.dist*2.6)},this.flyTo(e,t,"out")}focusCity(t,e=1400){let n=this.cities[t];if(!n)return;let s=n.pos.clone().normalize();this.flyTo({lat:Math.asin(s.y)/mn,lon:Math.atan2(-s.z,s.x)/mn,dist:Math.max(this.minDist+.25,this.fitDist()*.62)},e)}flyTo(t,e=1400,n){this.vel.lon=this.vel.lat=this.vel.dist=0;let s=t.lon-this.cam.lon;s=(s+540)%360-180,this.tween={t:0,dur:e/1e3,ease:n,from:{...this.cam},to:{lat:t.lat,lon:this.cam.lon+s,dist:t.dist}},e<=0&&(this.cam={...this.tween.to},this.tween=null)}setSheetOpen(t){this.shiftTarget=t?-.2:0}resize(){let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.maxDist=Math.max(6,this.fitDist()*1.9),this.camera.aspect=t/e,this._applyView()}_applyView(){let t=Math.round(this.shiftY*this.H);t!==0?this.camera.setViewOffset(this.W,this.H,0,-t,this.W,this.H):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}_bindInput(){let t=this.canvas;t.style.touchAction="none";let e=new Map,n=0,s=0,r=0,a=0,o=0,l=0;t.addEventListener("pointerdown",h=>{if(t.setPointerCapture(h.pointerId),e.set(h.pointerId,{x:h.clientX,y:h.clientY}),e.size===1&&(n=0,s=performance.now(),r=h.clientX,a=h.clientY),e.size===2){let[u,d]=[...e.values()];o=Math.hypot(u.x-d.x,u.y-d.y),l=this.cam.dist}this.tween=null,this.vel.lon=this.vel.lat=0}),t.addEventListener("pointermove",h=>{let u=e.get(h.pointerId);if(!u)return;let d=h.clientX-u.x,f=h.clientY-u.y;if(u.x=h.clientX,u.y=h.clientY,e.size===1){n+=Math.abs(d)+Math.abs(f);let g=(this.cam.dist-.88)*.068,x=performance.now(),p=Math.max((x-(this._lastMove||x-16))/1e3,.008);this._lastMove=x,this.cam.lon-=d*g,this.cam.lat=Ge.clamp(this.cam.lat+f*g,-84,84),this.vel.lon=Ge.lerp(this.vel.lon,-d*g/p,.5),this.vel.lat=Ge.lerp(this.vel.lat,f*g/p,.5)}else if(e.size===2){let[g,x]=[...e.values()],p=Math.hypot(g.x-x.x,g.y-x.y);o>0&&(this.cam.dist=Ge.clamp(l*o/p,this.minDist,this.maxDist)),n+=10}});let c=h=>{e.delete(h.pointerId)&&(e.size===0&&n<8&&performance.now()-s<450&&this._tap(h.clientX,h.clientY),e.size===0&&(this.vel.lon=Ge.clamp(this.vel.lon,-90,90),this.vel.lat=Ge.clamp(this.vel.lat,-60,60)))};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("wheel",h=>{h.preventDefault(),this.tween=null,this.cam.dist=Ge.clamp(this.cam.dist*Math.exp(h.deltaY*.0012),this.minDist,this.maxDist)},{passive:!1}),window.addEventListener("resize",()=>this.resize())}_tap(t,e){let n=this.canvas.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=null,o=1e9;for(let[l,c]of Object.entries(this.cities)){let h=this.screenOf(c.pos);if(!h.visible)continue;let u=Math.hypot(h.x-s,h.y-r);u<38&&u<o&&(o=u,a={type:"city",id:l})}this.onPick(a)}screenOf(t){let e=t.clone().project(this.camera),n=(e.x*.5+.5)*this.W,s=(-e.y*.5+.5)*this.H,r=this.camera.position.clone().sub(t).normalize(),a=t.clone().normalize().dot(r)>.04;return{x:n,y:s,visible:a&&e.z<1&&e.z>-1}}cityScreen(t){let e=this.cities[t];return e?this.screenOf(e.pos):{x:0,y:0,visible:!1}}frame(t){if(t=Math.max(0,Math.min(t,.05)),this.t+=t,this.blink=tv(this.t),this.tween){let n=this.tween;n.t+=t;let s=Math.min(n.t/n.dur,1),r=n.ease==="out"?Hd(s):s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;this.cam.lat=n.from.lat+(n.to.lat-n.from.lat)*r,this.cam.lon=n.from.lon+(n.to.lon-n.from.lon)*r,this.cam.dist=n.from.dist+(n.to.dist-n.from.dist)*r,s>=1&&(this.tween=null)}else{this.cam.lon+=this.vel.lon*t,this.cam.lat=Ge.clamp(this.cam.lat+this.vel.lat*t,-84,84);let n=Math.exp(-t*3.2);this.vel.lon*=n,this.vel.lat*=n}this.cam.dist=Ge.clamp(this.cam.dist,this.minDist,this.maxDist),Math.abs(this.shiftY-this.shiftTarget)>5e-4&&(this.shiftY+=(this.shiftTarget-this.shiftY)*Math.min(1,t*7),this._applyView()),Math.floor(this.t)!==Math.floor(this.t-t)&&Math.floor(this.t)%20===0&&this._updateSun();let e=Dr(this.cam.lat,this.cam.lon,this.cam.dist);if(this.camera.position.copy(e),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),this.earth){this.cloudMat.uniforms.uShift.value=this.t*45e-5;for(let s of this.arcs)s.mat.uniforms.uTime.value=this.t,s.mat.uniforms.uReveal.value=1.08*Hd(Ge.clamp((this.t-s.t0)/2.6,0,1));let n=this.cam.dist-1;for(let s of Object.values(this.cities)){s.group.scale.setScalar(Math.max(n,.1)*.068);let r=ih((this.t-s.born)/1.5);s.selV+=((this.selected===s.key?1:0)-s.selV)*Math.min(1,t*7),s.pulseT<1&&(s.pulseT=Math.min(1,s.pulseT+t/1.7)),s.u.uTime.value=this.t,s.u.uAppear.value=r,s.u.uSel.value=s.selV,s.u.uPulseT.value=s.pulseT,s.u.uBlink.value=this.alerts.has(s.key)?this.blink:0}}for(let n=this.fx.length-1;n>=0;n--)this.fx[n].update(t)||this.fx.splice(n,1);this.renderer.render(this.scene,this.camera),this.onFrame&&this.onFrame(t)}start(){let t=performance.now(),e=n=>{this.paused||this.frame((n-t)/1e3),t=n,this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}};function xi(i,t,e){if(t.length===0)return e===void 0?null:e;(i===null||typeof i!="object")&&(i={});let n=t[0];if(t.length===1)e==null?delete i[n]:i[n]=e;else{let s=xi(i[n],t.slice(1),e);s===null||typeof s=="object"&&Object.keys(s).length===0?delete i[n]:i[n]=s}return Object.keys(i).length?i:null}var _i=i=>String(i||"").split("/").filter(Boolean),Cs=i=>i==null?null:JSON.parse(JSON.stringify(i)),sh=(i,t)=>{let e=i;for(let n of t){if(e===null||typeof e!="object"||!(n in e))return null;e=e[n]}return e===void 0?null:e},el=class{constructor(t,e){this.db=(t||"").replace(/\/+$/,""),this.room=e,this.local=!this.db,this.listeners=new Set,this.status=this.local?"local":"connecting",this.statusCbs=[],this.queue=[],this.pumping=!1,this.denied=!1,this.local&&this._initLocal(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.reconnectAll()}),window.addEventListener("online",()=>this.reconnectAll())}onStatus(t){this.statusCbs.push(t),t(this.status)}_setStatus(t){t!==this.status&&(this.status=t,this.statusCbs.forEach(e=>e(t)))}url(t){return`${this.db}/rooms/${this.room}/${_i(t).join("/")}.json`}_initLocal(){this.key="globe-local-"+this.room;try{this.tree=JSON.parse(localStorage.getItem(this.key)||"null")}catch{this.tree=null}try{this.bc=new BroadcastChannel(this.key),this.bc.onmessage=t=>{this.tree=t.data,this._notifyAll("")}}catch{}}_saveLocal(){try{localStorage.setItem(this.key,JSON.stringify(this.tree))}catch{}try{this.bc&&this.bc.postMessage(this.tree)}catch{}}listen(t,e){let n={path:_i(t).join("/"),parts:_i(t),cb:e,data:null,es:null,closed:!1,retry:0,ready:!1};return this.listeners.add(n),this.local?(n.data=Cs(sh(this.tree,n.parts)),n.ready=!0,setTimeout(()=>!n.closed&&e(Cs(n.data),"",!0),0)):this._connect(n),()=>{n.closed=!0,this.listeners.delete(n),n.es&&n.es.close()}}_connect(t){if(t.closed)return;if(t.es)try{t.es.close()}catch{}let e;try{e=new EventSource(this.url(t.path))}catch{this._setStatus("offline");return}t.es=e,e.addEventListener("open",()=>{t.retry=0,this._setStatus("online")});let n=(s,r)=>{let a;try{a=JSON.parse(s.data)}catch{return}if(!a)return;let o=_i(a.path);if(r)for(let[l,c]of Object.entries(a.data||{}))t.data=xi(t.data,[...o,..._i(l)],c);else t.data=xi(t.data,o,a.data);t.ready=!0,t.cb(Cs(t.data),o.join("/"),!1)};e.addEventListener("put",s=>n(s,!1)),e.addEventListener("patch",s=>n(s,!0)),e.addEventListener("cancel",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.addEventListener("auth_revoked",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.onerror=()=>{t.closed||(e.readyState===2?(this._setStatus("offline"),t.retry++,setTimeout(()=>this._connect(t),Math.min(1e3*2**t.retry,15e3))):this._setStatus("offline"))}}reconnectAll(){if(!this.local){for(let t of this.listeners)this._connect(t);this._pump()}}_apply(t,e,n){let s=_i(t);if(this.local){if(n)for(let[r,a]of Object.entries(e))this.tree=xi(this.tree,[...s,..._i(r)],a);else this.tree=xi(this.tree,s,e);this._saveLocal(),this._notifyAll(s.join("/"));return}for(let r of this.listeners){let a=r.parts,o=s.length>=a.length&&a.every((h,u)=>s[u]===h),l=!o&&s.length<a.length&&s.every((h,u)=>a[u]===h);if(!o&&!l)continue;let c=o?s.slice(a.length):[];if(n)for(let[h,u]of Object.entries(e)){let d=[...s,..._i(h)];d.length>=a.length&&a.every((g,x)=>d[x]===g)&&(r.data=xi(r.data,d.slice(a.length),u))}else o?r.data=xi(r.data,c,e):r.data=xi(r.data,[],sh(e,a.slice(s.length)));r.ready&&r.cb(Cs(r.data),c.join("/"),!1)}}_notifyAll(t){for(let e of this.listeners)e.data=Cs(sh(this.tree,e.parts)),e.cb(Cs(e.data),t,!1)}set(t,e){return this._apply(t,e===void 0?null:e,!1),this._enqueue("PUT",t,e===void 0?null:e)}patch(t,e){return this._apply(t,e,!0),this._enqueue("PATCH",t,e)}remove(t){return this._apply(t,null,!1),this._enqueue("DELETE",t)}newId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}_enqueue(t,e,n){if(this.local)return Promise.resolve();let s=this.url(e);if(t==="PUT"){let a=this.queue.find(o=>o.url===s&&o.method==="PUT"&&!o.inflight);if(a)return a.body=n,a.promise}let r={method:t,url:s,body:n,tries:0,inflight:!1};return r.promise=new Promise(a=>{r.done=a}),this.queue.push(r),this._pump(),r.promise}async _pump(){if(!this.pumping){for(this.pumping=!0;this.queue.length;){let t=this.queue[0];t.inflight=!0;try{let e=await fetch(t.url+"?print=silent",{method:t.method,body:t.method==="DELETE"?void 0:JSON.stringify(t.body),keepalive:!1});if(e.status>=500||e.status===429)throw new Error("server "+e.status);(e.status===401||e.status===403)&&(this.denied=!0,this._setStatus("denied")),this.queue.shift(),t.done(e.ok)}catch{if(t.inflight=!1,t.tries++,t.tries>6){this.queue.shift(),t.done(!1);continue}this._setStatus("offline"),await new Promise(n=>setTimeout(n,Math.min(1500*t.tries,8e3)))}}this.pumping=!1}}async ping(){if(this.local)return!0;try{return(await fetch(this.url("meta/ping")+"?shallow=true")).ok}catch{return!1}}};async function Vd(i){let t=new TextEncoder().encode("globe-for-two:"+i.trim().toLowerCase()),e=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(n=>n.toString(16).padStart(2,"0")).join("").slice(0,32)}var Wd={0:["\u2600\uFE0F","\u{1F319}","Clear","\u042F\u0441\u043D\u043E"],1:["\u{1F324}\uFE0F","\u{1F319}","Mostly clear","\u041C\u0430\u043B\u043E\u043E\u0431\u043B\u0430\u0447\u043D\u043E"],2:["\u26C5","\u2601\uFE0F","Partly cloudy","\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C"],3:["\u2601\uFE0F","\u2601\uFE0F","Overcast","\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u043E"],45:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Fog","\u0422\u0443\u043C\u0430\u043D"],48:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Freezing fog","\u0418\u0437\u043C\u043E\u0440\u043E\u0437\u044C"],51:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light drizzle","\u041B\u0451\u0433\u043A\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],53:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Drizzle","\u041C\u043E\u0440\u043E\u0441\u044C"],55:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy drizzle","\u0421\u0438\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],56:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],57:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],61:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light rain","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],63:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain","\u0414\u043E\u0436\u0434\u044C"],65:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy rain","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C"],66:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],67:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],71:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Light snow","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043D\u0435\u0433"],73:["\u2744\uFE0F","\u2744\uFE0F","Snow","\u0421\u043D\u0435\u0433"],75:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433"],77:["\u2744\uFE0F","\u2744\uFE0F","Snow grains","\u0421\u043D\u0435\u0436\u043D\u0430\u044F \u043A\u0440\u0443\u043F\u0430"],80:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],81:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],82:["\u26C8\uFE0F","\u26C8\uFE0F","Violent showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u043B\u0438\u0432\u043D\u0438"],85:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Snow showers","\u0421\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],86:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],95:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm","\u0413\u0440\u043E\u0437\u0430"],96:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"],99:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"]};function nl(i,t,e){let n=Wd[i]||Wd[3];return{icon:t?n[0]:n[1],text:e==="ru"?n[3]:n[2]}}var il=i=>i*9/5+32,Xd=i=>i*2.23694,ev=720*1e3,Hi={};function qd(i){delete Hi[i];try{localStorage.removeItem("wx_"+i)}catch{}}async function Yd(i,t,{force:e=!1}={}){let n=Date.now();if(!Hi[i])try{Hi[i]=JSON.parse(localStorage.getItem("wx_"+i)||"null")}catch{Hi[i]=null}let s=Hi[i];if(s&&!e&&n-s.at<ev)return s.data;let r=`https://api.open-meteo.com/v1/forecast?latitude=${t.lat}&longitude=${t.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,wind_speed_10m,precipitation&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&wind_speed_unit=ms&timezone=auto&forecast_days=4`;try{let a=await fetch(r);if(!a.ok)throw new Error("wx "+a.status);let o=await a.json();Hi[i]={at:n,data:o};try{localStorage.setItem("wx_"+i,JSON.stringify(Hi[i]))}catch{}return o}catch{return s?s.data:null}}function $d(i,t=12){if(!i||!i.hourly)return[];let e=i.current&&i.current.time?i.current.time.slice(0,13):null,n=e?i.hourly.time.findIndex(r=>r.slice(0,13)===e):0;n<0&&(n=0);let s=[];for(let r=n;r<Math.min(n+t,i.hourly.time.length);r++)s.push({time:i.hourly.time[r],temp:i.hourly.temperature_2m[r],code:i.hourly.weather_code[r],day:i.hourly.is_day[r]});return s}var rh={en:{app:"Our Globe",loading:"Warming up the planet\u2026",noWebgl:"This device cannot draw the globe (WebGL is off).",setupTitle:"Our little planet",setupSub:"A globe for two, with real day and night.",whoAreYou:"Who are you?",secretWord:"Your secret word",secretHint:"Pick any word or phrase only you two know. It locks your shared space.",openGlobe:"Open the globe",needWord:"Type the secret word first",needWho:"Choose who you are",today:"Today",you:"You",meetSet:"Set the day we meet",meetDays:"{n} days until we meet",meetOne:"1 day until we meet",meetToday:"We meet today!",meetAgo:"We met {n} days ago",meetTitle:"The day we meet",meetSave:"Save",meetClear:"Remove",games:"Games",bottles:"Bottles",mood:"Mood",both:"Both",day:"Daytime",night:"Night",feels:"Feels like",wind:"Wind",humidity:"Humidity",next12:"Next hours",forecast:"Forecast",heartsToday:"{n} today",sendHeart:"Send a heart",setMood:"Set mood",noMood:"no mood yet",timeAhead:"{a} is {h} h ahead of {b}",timeSame:"Same time in {a} and {b}",distance:"{km} km ({mi} mi) apart",noWeather:"Weather is not available right now",sunrise:"Sunrise",sunset:"Sunset",ms:"m/s",mph:"mph",moodTitle:"How are you feeling?",moodClear:"Clear mood",heartsIn:"{name} sent you {n} \u2665",whileAway:"While you were away: +{n} \u2665 from {name}",myCity:"My city",cityTitle:"Where are you now?",citySearch:"Search for a city\u2026",cityReset:"Back to {city}",cityPopular:"Popular",cityNo:"Nothing found",cityOffline:"Search is offline, showing popular cities",cityMoved:"{name} is now in {city}",sameCity:"You two are in the same city!",settings:"Settings",language:"Language",tempUnits:"Temperature",shareLink:"Copy the link for {name}",linkCopied:"Link copied",switchPerson:"Switch person / reset",switchConfirm:"Forget this phone and start over?",serverStatus:"Connection",status_online:"Connected",status_offline:"Reconnecting\u2026",status_local:"Preview mode: no server yet, data stays on this phone",status_denied:"Server refused access: check the database rules",status_connecting:"Connecting\u2026",credits:"Earth textures: NASA Blue Marble via three.js examples. Weather: Open-Meteo. Emoji: Twemoji (CC-BY 4.0).",close:"Close",streakTitle:"Our streak",streakHint:"Open the globe every day to keep the flame alive.",streakDay:"day",streakDays:"days",streakNow:"{n} {d} in a row",streakBest:"best: {n}",streakLit:"here today",streakWait:"not here yet today",streakNew:"{n} days in a row",heartsTotal:"Hearts sent",gamesTitle:"Play together",g_canvas:"Our canvas",g_canvas_d:"Draw on one picture at the same time",g_theme:"Draw a theme",g_theme_d:"One prompt, one picture, both of you",themeLabel:"Theme",themeNew:"New theme",themeAll:"All",themeNewConfirm:"Start a new picture? The current one will be cleared for both of you.",g_bottles:"Bottle mail",g_bottles_d:"A drawing in a bottle floats to the other city",g_ttt:"Tic-tac-toe",g_ttt_d:"Stars against hearts",g_bs:"Battleship",g_bs_d:"Sea battle on an 8\xD78 grid",g_hang:"Petals",g_hang_d:"Guess the English word before the petals fall",online:"online",offline:"offline",back:"Back",yourTurnBadge:"your turn",newBadge:"new",undo:"Undo",clear:"Clear",save:"Save picture",saved:"Picture saved",eraser:"Eraser",clearConfirm:"Clear the whole canvas for both of you?",yes:"Yes",no:"No",canvasFull:"The canvas is full. Clear it to keep drawing.",bottleHelp:"Draw something and write a few words. The bottle floats across the ocean to the other city.",newBottle:"Write a bottle",writeBottle:"New bottle",noBottles:"No bottles yet. Send the first one!",toX:"To {name}",fromX:"From {name}",bottle:"Bottle",bottleText:"A few words (optional)",drawSomething:"Draw or write something first",sendBottle:"Throw it into the sea",bottleSent:"Bottle sent! It floats across the ocean",bottleArrived:"A bottle from {name} washed ashore!",reply:"Reply",replay:"Watch again",bottleMore:"Next bottle ({n})",inviteTitle:"{name} is waiting for you",inviteJoin:"Join",again:"Watch again",hereBadge:"{name} is here",tttClear:"Clear the board",newRound:"Next round",youWin:"You won!",theyWin:"{name} won",draw:"A draw!",yourTurn:"Your turn",theirTurn:"{name} is thinking\u2026",enemyWaters:"Enemy waters",yourFleet:"Your fleet",newGame:"New game",noFit:"The ship does not fit there",placeShips:"Place your ships",horiz:"Horizontal",vert:"Vertical",random:"Random",ready:"Ready!",waitingPlace:"Waiting for {name} to place ships\u2026",bsMiss:"miss",bsHit:"hit!",bsSunk:"sunk a ship!",bsHint:"Tap the enemy waters to fire.",wordShort:"Use at least 3 letters (A\u2013Z)",hintIs:"Hint: {h}",pickWord:"Pick an English word",hintOptional:"Hint (optional)",hideWord:"Hide the word",wordHelp:"Letters A\u2013Z only, 3 to 12 letters.",waitingWord:"{name} is picking a word\u2026",watching:"{name} is guessing\u2026",guessLetters:"Guess the letters",theyGuessed:"{name} guessed it!",youGuessed:"You guessed it!",theyFailed:"The petals fell. {name} lost this one",wordWas:"The petals fell. The word was {w}",nextRound2:"Next round"},ru:{app:"\u041D\u0430\u0448 \u0433\u043B\u043E\u0431\u0443\u0441",loading:"\u0420\u0430\u0437\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C \u043F\u043B\u0430\u043D\u0435\u0442\u0443\u2026",noWebgl:"\u042D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441 (\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D WebGL).",setupTitle:"\u041D\u0430\u0448\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u043A\u0430",setupSub:"\u0413\u043B\u043E\u0431\u0443\u0441 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0434\u043D\u0451\u043C \u0438 \u043D\u043E\u0447\u044C\u044E.",whoAreYou:"\u041A\u0442\u043E \u0442\u044B?",secretWord:"\u0412\u0430\u0448\u0435 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",secretHint:"\u041B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0437\u043D\u0430\u0435\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0434\u0432\u043E\u0435. \u041E\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u043E\u0431\u0449\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.",openGlobe:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441",needWord:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0432\u0435\u0434\u0438 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",needWho:"\u0412\u044B\u0431\u0435\u0440\u0438, \u043A\u0442\u043E \u0442\u044B",today:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",you:"\u0422\u044B",meetSet:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetDays:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438: {n} \u0434\u043D.",meetOne:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 1 \u0434\u0435\u043D\u044C",meetToday:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C\u0441\u044F!",meetAgo:"\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u043B\u0438\u0441\u044C {n} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434",meetTitle:"\u0414\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetSave:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",meetClear:"\u0423\u0431\u0440\u0430\u0442\u044C",games:"\u0418\u0433\u0440\u044B",bottles:"\u0411\u0443\u0442\u044B\u043B\u043A\u0438",mood:"\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",both:"\u041E\u0431\u0430",day:"\u0414\u0435\u043D\u044C",night:"\u041D\u043E\u0447\u044C",feels:"\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C",next12:"\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0447\u0430\u0441\u044B",forecast:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437",heartsToday:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F: {n}",sendHeart:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E",setMood:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",noMood:"\u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",timeAhead:"{a} \u043E\u043F\u0435\u0440\u0435\u0436\u0430\u0435\u0442 {b} \u043D\u0430 {h} \u0447",timeSame:"\u0412 {a} \u0438 {b} \u043E\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u044F",distance:"{km} \u043A\u043C ({mi} \u043C\u0438\u043B\u044C) \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430",noWeather:"\u041F\u043E\u0433\u043E\u0434\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",sunrise:"\u0412\u043E\u0441\u0445\u043E\u0434",sunset:"\u0417\u0430\u043A\u0430\u0442",ms:"\u043C/\u0441",mph:"\u043C\u0438\u043B\u044C/\u0447",moodTitle:"\u041A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435?",moodClear:"\u0423\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",heartsIn:"\u041E\u0442 {name}: {n} \u2665",whileAway:"\u041F\u043E\u043A\u0430 \u0442\u0435\u0431\u044F \u043D\u0435 \u0431\u044B\u043B\u043E: +{n} \u2665 \u043E\u0442 {name}",myCity:"\u041C\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",cityTitle:"\u0413\u0434\u0435 \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441?",citySearch:"\u041D\u0430\u0439\u0442\u0438 \u0433\u043E\u0440\u043E\u0434\u2026",cityReset:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C: {city}",cityPopular:"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityNo:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C",cityOffline:"\u041F\u043E\u0438\u0441\u043A \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityMoved:"{name} \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u0433\u043E\u0440\u043E\u0434\u0435: {city}",sameCity:"\u0412\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435!",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",language:"\u042F\u0437\u044B\u043A",tempUnits:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",shareLink:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F {name}",linkCopied:"\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",switchPerson:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 / \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C",switchConfirm:"\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E?",serverStatus:"\u0421\u0432\u044F\u0437\u044C",status_online:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",status_offline:"\u041F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",status_local:"\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C: \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435",status_denied:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0443\u0441\u043A\u0430\u0435\u0442: \u043F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445",status_connecting:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",credits:"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0417\u0435\u043C\u043B\u0438: NASA Blue Marble (\u043F\u0440\u0438\u043C\u0435\u0440\u044B three.js). \u041F\u043E\u0433\u043E\u0434\u0430: Open-Meteo. \u0421\u043C\u0430\u0439\u043B\u044B: Twemoji (CC-BY 4.0).",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",streakTitle:"\u041D\u0430\u0448\u0430 \u0441\u0435\u0440\u0438\u044F",streakHint:"\u0417\u0430\u0445\u043E\u0434\u0438 \u0432 \u0433\u043B\u043E\u0431\u0443\u0441 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0433\u043E\u043D\u0451\u043A \u043D\u0435 \u043F\u043E\u0433\u0430\u0441.",streakDay:"\u0434\u0435\u043D\u044C",streakDays:"\u0434\u043D.",streakNow:"{n} {d} \u043F\u043E\u0434\u0440\u044F\u0434",streakBest:"\u0440\u0435\u043A\u043E\u0440\u0434: {n}",streakLit:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0443\u0436\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakWait:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakNew:"{n} \u0434\u043D. \u043F\u043E\u0434\u0440\u044F\u0434",heartsTotal:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",gamesTitle:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435",g_canvas:"\u041D\u0430\u0448 \u0445\u043E\u043B\u0441\u0442",g_canvas_d:"\u0420\u0438\u0441\u0443\u0435\u043C \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E",g_theme:"\u0420\u0438\u0441\u0443\u0435\u043C \u043F\u043E \u0442\u0435\u043C\u0435",g_theme_d:"\u041E\u0434\u043D\u0430 \u0442\u0435\u043C\u0430, \u043E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445",themeLabel:"\u0422\u0435\u043C\u0430",themeNew:"\u0414\u0440\u0443\u0433\u0430\u044F \u0442\u0435\u043C\u0430",themeAll:"\u0412\u0441\u0451",themeNewConfirm:"\u041D\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0441\u044F \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445, \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0435\u0451, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430.",g_bottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",g_bottles_d:"\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u0432 \u0431\u0443\u0442\u044B\u043B\u043A\u0435 \u043F\u043B\u044B\u0432\u0451\u0442 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",g_ttt:"\u041A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438",g_ttt_d:"\u0417\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",g_bs:"\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439",g_bs_d:"\u0411\u0438\u0442\u0432\u0430 \u043D\u0430 \u043F\u043E\u043B\u0435 8\xD78",g_hang:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",g_hang_d:"\u0423\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",online:"\u0432 \u0441\u0435\u0442\u0438",offline:"\u043D\u0435 \u0432 \u0441\u0435\u0442\u0438",back:"\u041D\u0430\u0437\u0430\u0434",yourTurnBadge:"\u0442\u0432\u043E\u0439 \u0445\u043E\u0434",newBadge:"\u043D\u043E\u0432\u043E\u0435",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",clear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",saved:"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",eraser:"\u041B\u0430\u0441\u0442\u0438\u043A",clearConfirm:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0445\u043E\u043B\u0441\u0442 \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445?",yes:"\u0414\u0430",no:"\u041D\u0435\u0442",canvasFull:"\u0425\u043E\u043B\u0441\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D. \u041E\u0447\u0438\u0441\u0442\u0438 \u0435\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.",bottleHelp:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432. \u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u044B\u0432\u0451\u0442 \u043E\u043A\u0435\u0430\u043D \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434.",newBottle:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u0443\u0442\u044B\u043B\u043A\u0443",writeBottle:"\u041D\u043E\u0432\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430",noBottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0435\u0440\u0432\u0443\u044E!",toX:"\u0414\u043B\u044F {name}",fromX:"\u041E\u0442 {name}",bottle:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430",bottleText:"\u041F\u0430\u0440\u0430 \u0441\u043B\u043E\u0432 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",drawSomething:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0440\u0438\u0441\u0443\u0439 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",sendBottle:"\u0411\u0440\u043E\u0441\u0438\u0442\u044C \u0432 \u043C\u043E\u0440\u0435",bottleSent:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430! \u041E\u043D\u0430 \u043F\u043B\u044B\u0432\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u043E\u043A\u0435\u0430\u043D",bottleArrived:"\u041A \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0438\u0431\u0438\u043B\u043E \u0431\u0443\u0442\u044B\u043B\u043A\u0443 \u043E\u0442 {name}!",reply:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",replay:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",bottleMore:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430 ({n})",inviteTitle:"{name} \u0436\u0434\u0451\u0442 \u0442\u0435\u0431\u044F",inviteJoin:"\u0417\u0430\u0439\u0442\u0438",again:"\u0415\u0449\u0451 \u0440\u0430\u0437",hereBadge:"{name} \u0437\u0434\u0435\u0441\u044C",tttClear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",newRound:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434",youWin:"\u0422\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B{s}!",theyWin:"\u0412\u044B\u0438\u0433\u0440\u0430\u043B{g} {name}",draw:"\u041D\u0438\u0447\u044C\u044F!",yourTurn:"\u0422\u0432\u043E\u0439 \u0445\u043E\u0434",theirTurn:"{name} \u0434\u0443\u043C\u0430\u0435\u0442\u2026",enemyWaters:"\u0412\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",yourFleet:"\u0422\u0432\u043E\u0439 \u0444\u043B\u043E\u0442",newGame:"\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430",noFit:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0441\u044E\u0434\u0430 \u043D\u0435 \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F",placeShips:"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u0440\u0430\u0431\u043B\u0438",horiz:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",vert:"\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",ready:"\u0413\u043E\u0442\u043E\u0432\u043E!",waitingPlace:"\u0416\u0434\u0451\u043C, \u043F\u043E\u043A\u0430 {name} \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442 \u043A\u043E\u0440\u0430\u0431\u043B\u0438\u2026",bsMiss:"\u043C\u0438\u043C\u043E",bsHit:"\u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435!",bsSunk:"\u043A\u043E\u0440\u0430\u0431\u043B\u044C \u043F\u043E\u0442\u043E\u043F\u043B\u0435\u043D!",bsHint:"\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u0432\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0435\u043B\u044F\u0442\u044C.",wordShort:"\u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0431\u0443\u043A\u0432\u044B (A\u2013Z)",hintIs:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430: {h}",pickWord:"\u0417\u0430\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",hintOptional:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",hideWord:"\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0441\u043B\u043E\u0432\u043E",wordHelp:"\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B A\u2013Z, \u043E\u0442 3 \u0434\u043E 12.",waitingWord:"{name} \u0437\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0441\u043B\u043E\u0432\u043E\u2026",watching:"{name} \u043E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u2026",guessLetters:"\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u0439 \u0431\u0443\u043A\u0432\u044B",theyGuessed:"{name} \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}!",youGuessed:"\u0422\u044B \u043E\u0442\u0433\u0430\u0434\u0430\u043B{s}!",theyFailed:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. {name} \u043D\u0435 \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}",wordWas:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. \u0421\u043B\u043E\u0432\u043E \u0431\u044B\u043B\u043E {w}",nextRound2:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434"}},sl="en",rl=i=>{sl=rh[i]?i:"en",document.documentElement.lang=sl},Pe=()=>sl;function ht(i,t){let e=rh[sl][i]??rh.en[i]??i;if(t)for(let[n,s]of Object.entries(t))e=e.split("{"+n+"}").join(s);return e}function L(i,t,...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t||{}))r===!1||r==null||(s==="class"?n.className=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):n.setAttribute(s,r===!0?"":r));for(let s of e.flat(1/0))s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Zd=null;function tn(i,t=2800){let e=document.getElementById("toast");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(Zd),Zd=setTimeout(()=>e.classList.remove("show"),t))}function Fn(i,{onClose:t,cls:e=""}={}){let n=L("div",{class:"modal-wrap "+e}),s=L("div",{class:"modal glass"},i);n.append(s);let r=()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),200),t&&t()};return n.addEventListener("pointerdown",a=>{a.target===n&&r()}),document.getElementById("modals").append(n),requestAnimationFrame(()=>n.classList.add("in")),{close:r,el:s}}function Rs(i,t,e){return new Promise(n=>{let s=!1,r=o=>{s||(s=!0,n(o)),a.close()},a=Fn(L("div",{class:"confirm"},L("p",{},i),L("div",{class:"row"},L("button",{class:"btn ghost",onclick:()=>r(!1)},e),L("button",{class:"btn",onclick:()=>r(!0)},t))),{onClose:()=>{s||(s=!0,n(!1))}})})}var pe=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Qt=(i,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${t}>${i}</svg>`,Xt={heart:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.6s-7.3-4.5-9.4-9.1C1.2 8.3 2.9 4.7 6.4 4.7c1.9 0 3.5 1 4.6 2.6h2c1.1-1.6 2.7-2.6 4.6-2.6 3.5 0 5.2 3.6 3.8 6.8-2.1 4.6-9.4 9.1-9.4 9.1z"/></svg>',heartO:Qt('<path d="M12 20s-7-4.3-9-8.7C1.7 8.3 3.3 5 6.5 5c1.8 0 3.3 1 4.3 2.5h2.4C14.2 6 15.7 5 17.5 5 20.7 5 22.3 8.3 21 11.3 19 15.7 12 20 12 20z"/>'),flame:Qt('<path d="M12 21c3.9 0 6.5-2.6 6.5-6.2 0-2.7-1.6-4.4-3-6-.8-.9-1.4-2.2-1.5-3.8C11 6 7.5 9.4 7.5 14.2 7.5 18 9.8 21 12 21z"/><path d="M12 21c-1.7 0-2.9-1.2-2.9-2.9 0-1.5 1-2.3 1.9-3.3.4-.4.7-1 .8-1.7 1.4.8 3 2.2 3 4.2 0 2-1.3 3.7-2.8 3.7z" stroke-width="1.2"/>'),globe:Qt('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.4 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.4-3.4-8.5s1-6.1 3.4-8.5z"/>'),games:Qt('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><circle cx="17" cy="17" r="3.5"/>'),bottle:Qt('<path d="M10 3h4M10.5 3v3.5L8.5 9.5V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9.5l-2-3V3"/><path d="M8.5 13h7"/>'),smile:Qt('<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2"/><path d="M9 9.8v.01M15 9.8v.01" stroke-width="2"/>'),gear:Qt('<circle cx="12" cy="12" r="2.8"/><path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6"/>'),back:Qt('<path d="M14.5 5.5 8 12l6.5 6.5"/>','stroke-width="1.8"'),close:Qt('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>','stroke-width="1.8"'),undo:Qt('<path d="M9 14 4.5 9.5 9 5"/><path d="M4.5 9.5H14a5.5 5.5 0 0 1 0 11h-3"/>'),trash:Qt('<path d="M4.5 7h15M10 11v6M14 11v6M6.5 7l.8 12h9.4l.8-12M9.5 7V4.5h5V7"/>'),eraser:Qt('<path d="M19.5 19.5H9L4.2 14.7a1.8 1.8 0 0 1 0-2.5l7.5-7.5a1.8 1.8 0 0 1 2.5 0l5.1 5.1a1.8 1.8 0 0 1 0 2.5l-5.3 5.2"/><path d="m7.5 10.5 6 6"/>'),save:Qt('<path d="M12 4v11M7.5 11 12 15.5 16.5 11M5 19.5h14"/>'),send:Qt('<path d="M20.5 3.5 10 14M20.5 3.5l-6.6 17-3.9-6.5-6.5-3.9z"/>'),pen:Qt('<path d="M4 20l1-4.5L16.5 4a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.5 19z"/><path d="M14.5 6l3.5 3.5"/>'),hash:Qt('<path d="M9 4 7.5 20M16.5 4 15 20M4.5 9h15.5M4 15h15.5"/>'),anchor:Qt('<circle cx="12" cy="5.5" r="2"/><path d="M12 7.5V21M7.5 11h9M4.5 14c.4 3.4 3.4 6.5 7.5 6.5s7.1-3.1 7.5-6.5"/>'),petal:Qt('<circle cx="12" cy="12" r="2"/><path d="M12 10C9.5 7 9.5 4 12 3c2.5 1 2.5 4 0 7zM14 12c3-2.5 6-2.5 7 0-1 2.5-4 2.5-7 0zM12 14c2.500 3 2.500 6 0 7-2.500-1-2.500-4 0-7zM10 12c-3 2.500-6 2.500-7 0 1-2.500 4-2.500 7 0z" stroke-width="1.2"/>'),shuffle:Qt('<path d="M3.5 7.5h3c1.6 0 3 .8 3.9 2.200l2.700 4.600c.9 1.400 2.300 2.200 3.900 2.200h3.500M3.500 16.500h3c1.600 0 3-.800 3.900-2.200M13.400 9.700c.900-1.400 2.300-2.200 3.900-2.200h3.200"/><path d="M18 5l2.500 2.500L18 10M18 14l2.500 2.500L18 19"/>'),bulb:Qt('<path d="M9.500 18h5M10.500 21h3"/><path d="M12 3.500a5.700 5.700 0 0 0-3.400 10.300c.6.500.9 1.100.9 1.700v.5h5v-.5c0-.6.3-1.200.9-1.700A5.700 5.700 0 0 0 12 3.500z"/>'),chevron:Qt('<path d="M9.5 5.5 16 12l-6.5 6.5"/>'),sun:Qt('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>'),moon:Qt('<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z"/>'),cloud:Qt('<path d="M7 18h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 9.6 4.2 4.2 0 0 0 7 18z"/>'),partly:Qt('<circle cx="8.5" cy="8.5" r="2.7"/><path d="M8.5 3v1.2M3 8.5h1.2M4.7 4.7l.9.9M12.3 4.7l-.9.9"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.1z"/>'),partlyN:Qt('<path d="M10.5 4.2A4.3 4.3 0 1 0 14 10.5a3.4 3.4 0 0 1-3.5-6.300z"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.100z"/>'),rain:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18l-1 2.500M12.500 18l-1 2.500M16.500 18l-1 2.500"/>'),drizzle:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v1M12.500 18.500v1M16.500 18.500v1"/>'),snow:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v.01M12.500 20v.01M16.500 18.500v.01" stroke-width="2.300"/>'),storm:Qt('<path d="M7 14.500h10.200a4 4 0 0 0 .6-7.950A5.600 5.600 0 0 0 7 6.100 4.200 4.200 0 0 0 7 14.500z"/><path d="m12.800 14.500-2.600 3.700h3.200L11.800 21.500"/>'),fog:Qt('<path d="M4 9h16M6.500 13h11M4 17h16"/>')};function Ur(i,t){return i===0?t?"sun":"moon":i===1||i===2?t?"partly":"partlyN":i===45||i===48?"fog":[51,53,55,56,57].includes(i)?"drizzle":[61,63,65,66,67,80,81,82].includes(i)?"rain":[71,73,75,77,85,86].includes(i)?"snow":[95,96,99].includes(i)?"storm":"cloud"}var ah=["#2b2d42","#ff4d8d","#ff9f43","#ffd93d","#4cd964","#4cc9f0","#8a5cf6","#ffffff"],oh=[5,11,22],al=i=>`${i.c.replace("#","")},${i.w},${i.e?1:0}:${i.pts.map(t=>t[0]+","+t[1]).join(" ")}`;function Jd(i){let t=i.indexOf(":"),e=i.slice(0,t).split(","),n=i.slice(t+1).split(" ").filter(Boolean).map(s=>s.split(",").map(Number));return{c:"#"+e[0],w:+e[1],e:e[2]==="1",pts:n}}var Kd=i=>i.map(al).join("|"),Fr=i=>i?i.split("|").filter(Boolean).map(Jd):[];function nv(i,t,e){i.beginPath(),i.moveTo(t[0][0]*e,t[0][1]*e);for(let s=1;s<t.length-1;s++)i.quadraticCurveTo(t[s][0]*e,t[s][1]*e,(t[s][0]+t[s+1][0])/2*e,(t[s][1]+t[s+1][1])/2*e);let n=t[t.length-1];i.lineTo(n[0]*e,n[1]*e)}function jd(i,t,e,n=1){let s=e/1e3,r=n>=1?1/0:t.reduce((a,o)=>a+o.pts.length,0)*n;i.lineCap="round",i.lineJoin="round";for(let a of t){if(r<=0)break;let o=Math.min(a.pts.length,Math.ceil(r));r-=a.pts.length;let l=a.pts.slice(0,o);l.length&&(i.globalCompositeOperation=a.e?"destination-out":"source-over",i.strokeStyle=i.fillStyle=a.c,i.lineWidth=a.w*s,l.length===1?(i.beginPath(),i.arc(l[0][0]*s,l[0][1]*s,a.w*s/2,0,Math.PI*2),i.fill()):(nv(i,l,s),i.stroke()))}i.globalCompositeOperation="source-over"}var vi=class{constructor(t,e={}){this.cv=t,this.ctx=t.getContext("2d"),this.layer=document.createElement("canvas"),this.lctx=this.layer.getContext("2d"),this.bg=e.bg||"#fffaf3",this.readonly=!!e.readonly,this.me=e.me||"x",this.onUpdate=e.onUpdate,this.onEnd=e.onEnd,this.tool={c:ah[0],w:oh[1],e:!1},this.strokes=new Map,this.cur=null,this.dirty=!0,this.replay=null,this.alive=!0,this._cache=new Map,t.style.touchAction="none",this._bind();let n=()=>{this.alive&&(this._frame(),requestAnimationFrame(n))};requestAnimationFrame(n)}destroy(){this.alive=!1}list(){return[...this.strokes.values()].sort((t,e)=>t.t-e.t||(t.id<e.id?-1:1))}merge(t){let e=Date.now();for(let[n,s]of Object.entries(t||{})){if(this.cur&&this.cur.id===n)continue;let r=n+":"+s.d.length,a=this._cache.get(r);a||(a=Jd(s.d),this._cache.set(r,a)),this.strokes.set(n,{id:n,u:s.u,t:s.t,...a})}for(let[n,s]of[...this.strokes])t&&t[n]||this.cur&&this.cur.id===n||s.pendingUntil&&s.pendingUntil>e||this.strokes.delete(n);this.dirty=!0}setStrokes(t){this.strokes.clear(),t.forEach((e,n)=>this.strokes.set("s"+n,{id:"s"+n,t:n,u:"",...e})),this.dirty=!0}clearAll(){this.strokes.clear(),this.dirty=!0}myLast(){let t=this.list().filter(e=>e.u===this.me);return t[t.length-1]||null}removeLocal(t){this.strokes.delete(t),this.dirty=!0}playReplay(t=2600,e){this.replay={t0:performance.now(),ms:t,done:e},this.dirty=!0}_pt(t){let e=this.cv.getBoundingClientRect();return[Math.max(0,Math.min(1e3,Math.round((t.clientX-e.left)/e.width*1e3))),Math.max(0,Math.min(1e3,Math.round((t.clientY-e.top)/e.height*1e3)))]}_bind(){let t=this.cv;t.addEventListener("pointerdown",n=>{if(this.readonly||this.cur)return;t.setPointerCapture(n.pointerId);let s=this.tool;this.cur={id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),u:this.me,t:Date.now(),c:s.c,w:s.e?s.w*2.4:s.w,e:s.e,pts:[this._pt(n)]},this.strokes.set(this.cur.id,this.cur),this.dirty=!0,this._emit(!1),n.preventDefault()}),t.addEventListener("pointermove",n=>{let s=this.cur;if(!s)return;let r=n.getCoalescedEvents?n.getCoalescedEvents():[n];for(let a of r.length?r:[n]){let o=this._pt(a),l=s.pts[s.pts.length-1];Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])>=2&&s.pts.push(o)}this.dirty=!0,this._emit(!1)});let e=()=>{let n=this.cur;n&&(this._ended=n,this.cur=null,n.pendingUntil=Date.now()+5e3,this._emit(!0))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}_emit(t){if(t){this.onEnd&&this.onEnd(this._ended);return}let e=performance.now();this._last&&e-this._last<110||(this._last=e,this.onUpdate&&this.onUpdate(this.cur))}_frame(){let t=this.cv.getBoundingClientRect();if(!t.width)return;let e=Math.min(window.devicePixelRatio||1,2),n=Math.round(t.width*e);this.cv.width!==n&&(this.cv.width=this.cv.height=this.layer.width=this.layer.height=n,this.dirty=!0);let s=1;if(this.replay&&(s=Math.min(1,(performance.now()-this.replay.t0)/this.replay.ms),this.dirty=!0,s>=1)){let r=this.replay.done;this.replay=null,r&&r()}this.dirty&&(this.dirty=!1,this.lctx.clearRect(0,0,n,n),jd(this.lctx,this.list(),n,s),this.ctx.fillStyle=this.bg,this.ctx.fillRect(0,0,n,n),this.ctx.drawImage(this.layer,0,0))}toBlob(){return new Promise(t=>this.cv.toBlob(t,"image/png"))}};function Qd(i,t=96,e="#fffaf3"){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=document.createElement("canvas");return r.width=r.height=t,jd(r.getContext("2d"),Fr(i),t),s.fillStyle=e,s.fillRect(0,0,t,t),s.drawImage(r,0,0),n}function ol(i,t,e=[]){let n=ah.map(c=>L("button",{class:"sw","data-c":c,style:{background:c},"aria-label":c,onclick:()=>a(c)})),s=oh.map((c,h)=>L("button",{class:"sz","data-w":c,onclick:()=>o(c)},L("i",{style:{width:6+h*6+"px",height:6+h*6+"px"}}))),r=L("button",{class:"tb",id:"tb-eraser",title:t("eraser"),html:Xt.eraser,onclick:()=>{i.tool.e=!i.tool.e,l()}});function a(c){i.tool.c=c,i.tool.e=!1,l()}function o(c){i.tool.w=c,l()}function l(){n.forEach(c=>c.classList.toggle("on",!i.tool.e&&c.dataset.c===i.tool.c)),s.forEach(c=>c.classList.toggle("on",+c.dataset.w===i.tool.w)),r.classList.toggle("on",i.tool.e)}return l(),L("div",{class:"toolbar"},L("div",{class:"row sws"},n),L("div",{class:"row"},s,r,...e))}function ll(i,{path:t="canvas",head:e=null}={}){let{t:n,net:s,me:r}=i,a=L("canvas",{id:"shared-canvas",class:"board"}),o=L("div",{class:"g-note"}),l=new vi(a,{me:r,onUpdate:x=>s.set(t+"/strokes/"+x.id,{u:x.u,t:x.t,d:al(x)}),onEnd:x=>{x&&s.set(t+"/strokes/"+x.id,{u:x.u,t:x.t,d:al(x)})}}),c=0,h=s.listen(t+"/strokes",x=>{c=Object.keys(x||{}).length,l.merge(x||{}),o.textContent=c>=500?n("canvasFull"):""}),u=L("button",{class:"tb",id:"tb-undo",title:n("undo"),html:Xt.undo,onclick:()=>{let x=l.myLast();x&&(l.removeLocal(x.id),s.remove(t+"/strokes/"+x.id))}}),d=L("button",{class:"tb",id:"tb-clear",title:n("clear"),html:Xt.trash,onclick:async()=>{await Rs(n("clearConfirm"),n("yes"),n("no"))&&(l.clearAll(),s.remove(t+"/strokes"))}}),f=L("button",{class:"tb",id:"tb-save",title:n("save"),html:Xt.save,onclick:async()=>{let x=await l.toBlob(),p=new File([x],"our-drawing.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[p]})){await navigator.share({files:[p]});return}}catch{return}let m=document.createElement("a");m.href=URL.createObjectURL(x),m.download="our-drawing.png",document.body.append(m),m.click(),m.remove(),tn(n("saved"))}});return{el:L("div",{class:"game canvas-game"},e,L("div",{class:"board-wrap"},a),o,ol(l,n,[u,d,f])),update(){},count:()=>c,wipe(){l.clearAll(),s.remove(t+"/strokes")},destroy(){h(),l.destroy()}}}function tf(i){let{t,me:e,other:n}=i,s=L("div",{class:"b-list"}),r=L("div",{class:"game bottles"},L("button",{class:"btn big",id:"b-write",onclick:()=>i.push(t("writeBottle"),lh(i))},L("span",{class:"ico",html:Xt.bottle}),t("newBottle")),L("p",{class:"g-note"},t("bottleHelp")),s);function a(){let l=Object.entries(i.S.bottles||{}).map(([c,h])=>({id:c,...h})).sort((c,h)=>h.t-c.t);s.replaceChildren(...l.length?l.map(o):[L("div",{class:"empty"},t("noBottles"))])}function o(l){let c=l.f===e,h=!c&&!l.r,u=Qd(l.s||"",84);return u.className="b-thumb",L("button",{class:"b-row"+(h?" unread":""),"data-id":l.id,onclick:()=>i.push(t("bottle"),iv(i,l.id))},u,L("div",{class:"b-info"},L("b",{},c?t("toX",{name:i.name(n)}):t("fromX",{name:i.name(n)})),L("small",{},i.ago(l.t)+(l.x?" \xB7 "+l.x.slice(0,40):""))),h?L("i",{class:"dot"}):null)}return a(),{el:r,update:a,destroy(){}}}function lh(i){let{t,me:e}=i,n=L("canvas",{id:"bottle-canvas",class:"board"}),s=new vi(n,{me:e,bg:"#fff6e6"}),r=L("textarea",{id:"bottle-text",maxlength:120,rows:2,placeholder:t("bottleText")}),a=!1,o=L("button",{class:"btn big",id:"bottle-send",onclick:async()=>{if(a)return;let c=s.list(),h=r.value.trim();if(!c.length&&!h){tn(t("drawSomething"));return}a=!0;let u=i.net.newId();i.net.set("bottles/"+u,{f:e,t:Date.now(),x:h,s:Kd(c.map(d=>({c:d.c,w:d.w,e:d.e,pts:d.pts}))),r:0}),i.pruneBottles(),i.pop(),i.afterBottleSent(u)}},L("span",{class:"ico",html:Xt.send}),t("sendBottle"));return{el:L("div",{class:"game compose"},L("div",{class:"board-wrap sm"},n),ol(s,t),r,o),update(){},destroy(){s.destroy()}}}function iv(i,t){let{t:e,me:n}=i,s=(i.S.bottles||{})[t],r=L("canvas",{id:"viewer-canvas",class:"board"}),a=new vi(r,{readonly:!0,bg:"#fff6e6"}),o=L("div",{class:"b-msg"}),l=L("div",{class:"b-from"}),c=L("div",{class:"row"}),h=L("div",{class:"game viewer"},l,L("div",{class:"board-wrap sm"},r),o,c),u=!1;function d(){let f=(i.S.bottles||{})[t];if(!f){i.pop();return}let g=f.f===n;l.textContent=(g?e("toX",{name:i.name(i.other)}):e("fromX",{name:i.name(i.other)}))+" \xB7 "+i.ago(f.t),o.textContent=f.x||"",u||(u=!0,a.setStrokes(Fr(f.s||"")),a.playReplay(Math.min(3600,900+Fr(f.s||"").reduce((x,p)=>x+p.pts.length,0)*12)),!g&&!f.r&&i.net.set("bottles/"+t+"/r",Date.now()),c.replaceChildren(g?null:L("button",{class:"btn",id:"bottle-reply",onclick:()=>i.replace(e("writeBottle"),lh(i))},L("span",{class:"ico",html:Xt.bottle}),e("reply")),L("button",{class:"btn ghost",id:"bottle-replay",onclick:()=>a.playReplay(2400)},e("replay"))))}return d(),{el:h,update:d,destroy(){a.destroy()}}}function ch(i,t,{onClose:e,onLeave:n,others:s=0}={}){let{t:r,me:a}=i,o=(i.S.bottles||{})[t];if(!o)return n&&n(),e&&e(),null;let l=L("canvas",{id:"viewer-canvas",class:"board"}),c=new vi(l,{readonly:!0,bg:"#fff6e6"}),h=Fr(o.s||""),u=!1,d=(x,p)=>{u||(u=!0,c.destroy(),g.close(),x?(p||n&&n(),x()):(n&&n(),e&&e()))},f=L("div",{class:"bc-glyph",html:Xt.bottle}),g=Fn(L("div",{class:"bcard"},L("button",{class:"x bc-x",id:"bc-x","aria-label":r("close"),html:Xt.close,onclick:()=>d()}),f,L("div",{class:"bc-from"},r("fromX",{name:i.name(i.other)})+" \xB7 "+i.ago(o.t)),L("div",{class:"board-wrap sm bc-paper"},l),o.x?L("div",{class:"b-msg bc-msg"},o.x):null,L("div",{class:"row bc-actions"},L("button",{class:"btn",id:"bottle-reply",onclick:()=>d(()=>i.push(r("writeBottle"),lh(i)))},L("span",{class:"ico",html:Xt.bottle}),r("reply")),L("button",{class:"btn ghost",id:"bottle-replay",onclick:()=>c.playReplay(2400)},r("again"))),s>0?L("button",{class:"btn ghost bc-more",id:"bc-next",onclick:()=>d(()=>{let x=sv(i,t);x?ch(i,x,{onClose:e,onLeave:n,others:Math.max(0,s-1)}):(n&&n(),e&&e())},!0)},r("bottleMore",{n:s})):null),{cls:"bcard-modal",onClose:()=>{u||(u=!0,c.destroy(),n&&n(),e&&e())}});return setTimeout(()=>{u||(c.setStrokes(h),c.playReplay(Math.min(3600,900+h.reduce((x,p)=>x+p.pts.length,0)*12)))},520),!o.r&&o.f!==a&&i.net.set("bottles/"+t+"/r",Date.now()),g}function hh(i){return Object.entries(i.S.bottles||{}).filter(([,t])=>t.f!==i.me&&!t.r).map(([t,e])=>({id:t,t:e.t})).sort((t,e)=>t.t-e.t)}function sv(i,t){let e=hh(i).filter(n=>n.id!==t);return e.length?e[0].id:null}var rv=i=>[...i].map(t=>t.codePointAt(0).toString(16)).filter(t=>t!=="fe0f").join("-"),Or=i=>"assets/emoji/"+rv(i)+".svg",Br=(i,t="")=>`<img class="em${t?" "+t:""}" src="${Or(i)}" alt="${i}" data-e="${i}" draggable="false">`;function ef(i,t=""){let e=document.createElement("img");return e.className="em"+(t?" "+t:""),e.src=Or(i),e.alt=i,e.draggable=!1,e.dataset.e=i,e}var av=[];function nf(i){for(let t of new Set(i)){let e=new Image;e.src=Or(t),av.push(e),e.decode&&e.decode().catch(()=>{})}}typeof document<"u"&&document.addEventListener("error",i=>{let t=i.target;if(t&&t.tagName==="IMG"&&t.classList.contains("em")){let e=document.createElement("span");e.className="emf",e.textContent=t.alt,e.dataset.e=t.dataset.e||t.alt,t.replaceWith(e)}},!0);var uh={"\u{1F60A}":["\u2728","\u{1F338}","\u2600\uFE0F"],"\u{1F970}":["\u{1F497}","\u{1F495}","\u{1F496}","\u2728"],"\u{1F634}":["\u{1F4A4}","\u{1F4A4}","\u2728","\u{1F319}"],"\u{1F60E}":["\u2728","\u2B50","\u{1F4AB}"],"\u{1F914}":["\u2753","\u{1F4AD}","\u2728"],"\u{1F622}":["\u{1F4A7}","\u{1F4A7}","\u{1F499}"],"\u{1F624}":["\u{1F4A2}","\u{1F4A8}","\u{1F525}"],"\u{1F973}":["\u{1F389}","\u{1F38A}","\u2728","\u{1F388}"],"\u{1F912}":["\u2744\uFE0F","\u{1F4A7}","\u{1F48A}"],"\u{1F917}":["\u{1F49B}","\u{1F9E1}","\u2728"],"\u{1F60B}":["\u{1F370}","\u2728","\u{1F60B}"],"\u{1F3A7}":["\u{1F3B5}","\u{1F3B6}","\u2728"],"\u2615":["\u2601\uFE0F","\u2728","\u{1F90E}"],"\u{1F4AA}":["\u26A1","\u{1F525}","\u2728"],"\u{1F327}\uFE0F":["\u{1F4A7}","\u2614","\u2601\uFE0F"],"\u2728":["\u2728","\u2B50","\u{1F4AB}","\u{1F31F}"]},sf=()=>document.getElementById("fx"),yi=(i,t)=>i+Math.random()*(t-i),ov=i=>i[Math.random()*i.length|0],rf=()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},dh=()=>!!(sf()&&Element.prototype.animate)&&!rf(),hl=i=>({x:i.left+i.width/2,y:i.top+i.height/2});function kr(i,t,e,n,s){let r;i?(r=document.createElement("img"),r.src=Or(i),r.alt="",r.draggable=!1,r.decoding="async",r.style.width=r.style.height=s+"px"):r=document.createElement("i"),r.className=t,r.style.left=e+"px",r.style.top=n+"px";let a=sf();for(;a.childElementCount>90;)a.firstElementChild.remove();return a.append(r),r}var ul=(i,t)=>{i.onfinish=()=>t.remove(),i.oncancel=()=>t.remove()},we="translate(-50%,-50%)";function cl(i,t,{n:e=14,spread:n=150,lift:s=30}={}){if(!dh())return;let r=uh[i]||[i,"\u2728"];for(let a=0;a<e;a++){let o=a/e*Math.PI*2+yi(-.28,.28),l=n*yi(.55,1.15),c=Math.cos(o)*l,h=Math.sin(o)*l*.85-s,u=yi(26,70),d=yi(.7,1.25)/1.25,f=yi(-80,80),g=kr(ov(r),"mfx-p",t.x,t.y,Math.round(yi(19,32)));ul(g.animate([{transform:`${we} translate(0px,0px) scale(.15) rotate(0deg)`,opacity:0},{transform:`${we} translate(${c*.62}px,${h*.62}px) scale(${d}) rotate(${f*.5}deg)`,opacity:1,offset:.34},{transform:`${we} translate(${c}px,${h+u}px) scale(${d*.75}) rotate(${f}deg)`,opacity:0}],{duration:yi(900,1500),delay:yi(0,140),easing:"cubic-bezier(.12,.75,.3,1)",fill:"forwards"}),g)}}function af(i,t=34,e){let n=kr("","mfx-ring",i.x,i.y);n.style.width=n.style.height=t+"px",e&&(n.style.borderColor=e),ul(n.animate([{transform:`${we} scale(.5)`,opacity:.9},{transform:`${we} scale(2.6)`,opacity:0}],{duration:760,easing:"cubic-bezier(.1,.6,.3,1)",fill:"forwards"}),n)}function dl(i){!i||!i.animate||rf()||i.animate([{transform:"scale(.35)",offset:0},{transform:"scale(1.42)",offset:.42},{transform:"scale(.92)",offset:.7},{transform:"scale(1)",offset:1}],{duration:640,easing:"cubic-bezier(.3,.1,.2,1)"})}function of(i,t,e,n){if(!dh()){n&&n();return}let s=hl(t),r=hl(e),a=kr("","mfx-glow",s.x,s.y);ul(a.animate([{transform:`${we} scale(.2)`,opacity:0},{transform:`${we} scale(1.1)`,opacity:1,offset:.26},{transform:`${we} scale(1.55)`,opacity:0}],{duration:1150,easing:"cubic-bezier(.2,.7,.3,1)",fill:"forwards"}),a);let l=kr(i,"mfx-big",s.x,s.y,150),c=l.animate([{transform:`${we} scale(.2) rotate(0deg)`,opacity:0,offset:0,easing:"cubic-bezier(.25,.9,.3,1.1)"},{transform:`${we} scale(1) rotate(-12deg)`,opacity:1,offset:.2,easing:"ease-in-out"},{transform:`${we} scale(.79) rotate(8deg)`,opacity:1,offset:.36,easing:"ease-in-out"},{transform:`${we} scale(.89) rotate(-5deg)`,opacity:1,offset:.55,easing:"ease-in-out"},{transform:`${we} scale(.82) rotate(3deg)`,opacity:1,offset:.78,easing:"ease-in-out"},{transform:`${we} scale(.85) rotate(0deg)`,opacity:1,offset:1}],{duration:980,fill:"forwards"});setTimeout(()=>cl(i,s,{n:15,spread:150}),110),setTimeout(()=>cl(i,s,{n:8,spread:95,lift:10}),330),c.onfinish=()=>{let h=r.x-s.x,u=r.y-s.y,d=Math.hypot(h,u)||1,f=-u/d,g=h/d,x=Math.min(110,d*.28)*(g>0?-1:1),p=(s.x+r.x)/2+f*x,m=(s.y+r.y)/2+g*x,M=18,C=[];for(let w=0;w<=M;w++){let A=w/M,_=A<.5?4*A*A*A:1-Math.pow(-2*A+2,3)/2,b=1-_,U=b*b*s.x+2*b*_*p+_*_*r.x,P=b*b*s.y+2*b*_*m+_*_*r.y;C.push({transform:`translate(calc(-50% + ${(U-s.x).toFixed(1)}px),calc(-50% + ${(P-s.y).toFixed(1)}px)) scale(${(.85+(.18-.85)*_).toFixed(3)}) rotate(${(Math.sin(A*Math.PI)*10).toFixed(1)}deg)`,opacity:1})}let S=l.animate(C,{duration:700,easing:"linear",fill:"forwards"});S.onfinish=()=>{l.remove(),af(r,36),cl(i,r,{n:7,spread:46,lift:6}),n&&n()}}}function lf(i,t,e){if(!dh())return;let n={x:t,y:e},s=kr(i,"mfx-big",t,e,110);ul(s.animate([{transform:`${we} scale(.12) rotate(0deg)`,opacity:0,offset:0,easing:"cubic-bezier(.25,.9,.3,1.1)"},{transform:`${we} scale(.9) rotate(-10deg)`,opacity:1,offset:.2,easing:"ease-in-out"},{transform:`${we} translateY(-4px) scale(.77) rotate(6deg)`,opacity:1,offset:.45,easing:"ease-in-out"},{transform:`${we} translateY(-14px) scale(.81) rotate(-3deg)`,opacity:1,offset:.72},{transform:`${we} translateY(-38px) scale(.54) rotate(0deg)`,opacity:0,offset:1}],{duration:1500,fill:"forwards"}),s),af(n,30),setTimeout(()=>cl(i,n,{n:10,spread:100}),90)}var Kt=(i,t,e,n,s)=>({n:{en:i,ru:t},lat:e,lon:n,tz:s}),cf=[Kt("Tula","\u0422\u0443\u043B\u0430",54.1931,37.6173,"Europe/Moscow"),Kt("Seattle","\u0421\u0438\u044D\u0442\u043B",47.6062,-122.3321,"America/Los_Angeles"),Kt("Moscow","\u041C\u043E\u0441\u043A\u0432\u0430",55.7558,37.6173,"Europe/Moscow"),Kt("Saint Petersburg","\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",59.9343,30.3351,"Europe/Moscow"),Kt("Kazan","\u041A\u0430\u0437\u0430\u043D\u044C",55.7887,49.1221,"Europe/Moscow"),Kt("Sochi","\u0421\u043E\u0447\u0438",43.5855,39.7231,"Europe/Moscow"),Kt("Kaliningrad","\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434",54.7104,20.4522,"Europe/Kaliningrad"),Kt("Yekaterinburg","\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433",56.8389,60.6057,"Asia/Yekaterinburg"),Kt("Novosibirsk","\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",55.0084,82.9357,"Asia/Novosibirsk"),Kt("Vladivostok","\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",43.1155,131.8855,"Asia/Vladivostok"),Kt("London","\u041B\u043E\u043D\u0434\u043E\u043D",51.5072,-.1276,"Europe/London"),Kt("Paris","\u041F\u0430\u0440\u0438\u0436",48.8566,2.3522,"Europe/Paris"),Kt("Berlin","\u0411\u0435\u0440\u043B\u0438\u043D",52.52,13.405,"Europe/Berlin"),Kt("Rome","\u0420\u0438\u043C",41.9028,12.4964,"Europe/Rome"),Kt("Barcelona","\u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430",41.3874,2.1686,"Europe/Madrid"),Kt("Prague","\u041F\u0440\u0430\u0433\u0430",50.0755,14.4378,"Europe/Prague"),Kt("Istanbul","\u0421\u0442\u0430\u043C\u0431\u0443\u043B",41.0082,28.9784,"Europe/Istanbul"),Kt("Dubai","\u0414\u0443\u0431\u0430\u0439",25.2048,55.2708,"Asia/Dubai"),Kt("Tbilisi","\u0422\u0431\u0438\u043B\u0438\u0441\u0438",41.7151,44.8271,"Asia/Tbilisi"),Kt("Yerevan","\u0415\u0440\u0435\u0432\u0430\u043D",40.1792,44.4991,"Asia/Yerevan"),Kt("Tokyo","\u0422\u043E\u043A\u0438\u043E",35.6762,139.6503,"Asia/Tokyo"),Kt("Seoul","\u0421\u0435\u0443\u043B",37.5665,126.978,"Asia/Seoul"),Kt("Bangkok","\u0411\u0430\u043D\u0433\u043A\u043E\u043A",13.7563,100.5018,"Asia/Bangkok"),Kt("Singapore","\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",1.3521,103.8198,"Asia/Singapore"),Kt("Sydney","\u0421\u0438\u0434\u043D\u0435\u0439",-33.8688,151.2093,"Australia/Sydney"),Kt("Reykjavik","\u0420\u0435\u0439\u043A\u044C\u044F\u0432\u0438\u043A",64.1466,-21.9426,"Atlantic/Reykjavik"),Kt("New York","\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",40.7128,-74.006,"America/New_York"),Kt("Chicago","\u0427\u0438\u043A\u0430\u0433\u043E",41.8781,-87.6298,"America/Chicago"),Kt("Los Angeles","\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441",34.0522,-118.2437,"America/Los_Angeles"),Kt("San Francisco","\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E",37.7749,-122.4194,"America/Los_Angeles"),Kt("Portland","\u041F\u043E\u0440\u0442\u043B\u0435\u043D\u0434",45.5152,-122.6784,"America/Los_Angeles"),Kt("Vancouver","\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440",49.2827,-123.1207,"America/Vancouver")],hf="https://geocoding-api.open-meteo.com/v1/",uf=i=>{let t=new AbortController;return setTimeout(()=>t.abort(),i),t.signal};async function df(i,t){let e=await fetch(`${hf}search?name=${encodeURIComponent(i)}&count=8&language=${t}&format=json`,{signal:uf(6e3)});if(!e.ok)throw new Error("geo "+e.status);return((await e.json()).results||[]).filter(s=>s.timezone).map(s=>({id:s.id,n:{[t]:s.name},lat:s.latitude,lon:s.longitude,tz:s.timezone,sub:[s.admin1,s.country].filter(Boolean).join(", ")}))}async function ff(i,t){let e=t==="ru"?"en":"ru",n={n:{en:i.n.en,ru:i.n.ru},lat:+i.lat.toFixed(4),lon:+i.lon.toFixed(4),tz:i.tz};if(!i.n[e]&&i.id)try{let s=await fetch(`${hf}get?id=${i.id}&language=${e}`,{signal:uf(3500)});if(s.ok){let r=await s.json();r&&r.name&&(n.n[e]=r.name)}}catch{}return n.n.en=n.n.en||n.n[t],n.n.ru=n.n.ru||n.n[t],n}function pf(i,{fmtTime:t,canReset:e,resetName:n,onPick:s,onReset:r}){let{t:a}=i,o=i.lang(),l=L("input",{id:"city-q",type:"search",placeholder:a("citySearch"),autocomplete:"off",autocapitalize:"words",spellcheck:"false",enterkeyhint:"search"}),c=L("div",{class:"city-list",id:"city-list"}),h=L("p",{class:"small city-note"}),u,d=0,f=null,g=!1,x=w=>w.n[o]||w.n.en||w.n.ru||"",p=(w,A)=>L("button",{class:"city-row","data-i":A,onclick:()=>C(w)},L("span",{class:"cr-n"},L("b",{},x(w)),w.sub?L("small",{},w.sub):null),L("span",{class:"cr-t"},t(w.tz))),m=(w,A)=>{c.replaceChildren(...A?[L("div",{class:"city-h"},A)]:[],...w.map(p))},M=(w="")=>{let A=w.trim().toLowerCase();return cf.filter(_=>!A||_.n.en.toLowerCase().includes(A)||_.n.ru.toLowerCase().includes(A))};async function C(w){if(g)return;g=!0,c.classList.add("busy");let A=await ff(w,o);u.close(),s(A)}async function S(){let w=l.value.trim(),A=++d;if(h.textContent="",w.length<2){m(M(),a("cityPopular"));return}let _=M(w);m(_);try{let b=await df(w,o);if(A!==d)return;let U=F=>_.some(k=>Math.abs(k.lat-F.lat)<.15&&Math.abs(k.lon-F.lon)<.15),P=[..._,...b.filter(F=>!U(F))];P.length?m(P):(c.replaceChildren(),h.textContent=a("cityNo"))}catch{if(A!==d)return;_.length?h.textContent=a("cityOffline"):h.textContent=a("cityNo")}}l.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(S,260)}),u=Fn(L("div",{class:"cityp"},L("h3",{},a("cityTitle")),l,h,c,e?L("button",{class:"btn ghost",id:"city-reset",onclick:()=>{u.close(),r()}},a("cityReset",{city:n})):null)),m(M(),a("cityPopular")),setTimeout(()=>{try{l.focus({preventScroll:!0})}catch{}},350)}var on=i=>i.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>t.split("|")),Qn=[{id:"us",ru:"\u041C\u044B \u0432\u0434\u0432\u043E\u0451\u043C",en:"Us two",items:on(`
\u041D\u0430\u0448\u0430 \u043F\u0435\u0440\u0432\u0430\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430|Our first meeting
\u041C\u044B \u0447\u0435\u0440\u0435\u0437 50 \u043B\u0435\u0442|The two of us at 80
\u041D\u0430\u0448 \u0431\u0443\u0434\u0443\u0449\u0438\u0439 \u0434\u043E\u043C|Our future home
\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u0435|The perfect date
\u041C\u044B \u043D\u0430 \u043F\u043B\u044F\u0436\u0435|The two of us at the beach
\u041A\u0430\u043A \u044F \u0441\u043A\u0443\u0447\u0430\u044E|How I miss you
\u041D\u0430\u0448 \u043E\u0431\u0449\u0438\u0439 \u0441\u043E\u043D|The dream we share
\u041C\u044B \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0438|The two of us on a trip
\u041D\u0430\u0448\u0435 \u043A\u0430\u0444\u0435 \u043F\u043E \u0443\u0442\u0440\u0430\u043C|Our morning coffee place
\u041A\u0438\u043D\u043E \u043D\u0430 \u0434\u0432\u043E\u0438\u0445|Movie night for two
\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0434\u043B\u044F \u0442\u0435\u0431\u044F|A gift for you
\u041C\u044B \u0432 \u0421\u0438\u044D\u0442\u043B\u0435|The two of us in Seattle
\u041C\u044B \u0432 \u0422\u0443\u043B\u0435|The two of us in Tula
\u041D\u0430\u0448 \u043F\u0438\u0442\u043E\u043C\u0435\u0446|Our future pet
\u041C\u043E\u0441\u0442 \u043C\u0435\u0436\u0434\u0443 \u043D\u0430\u0448\u0438\u043C\u0438 \u0433\u043E\u0440\u043E\u0434\u0430\u043C\u0438|A bridge between our cities
\u041F\u0438\u0441\u044C\u043C\u043E \u0442\u0435\u0431\u0435|A letter to you
\u0422\u0432\u043E\u044F \u0443\u043B\u044B\u0431\u043A\u0430|Your smile
\u0422\u044B \u0433\u043B\u0430\u0437\u0430\u043C\u0438 \u043C\u0435\u043D\u044F|You, as I see you
\u042F \u0433\u043B\u0430\u0437\u0430\u043C\u0438 \u0442\u0435\u0431\u044F|Me, as you see me
\u041D\u0430\u0448 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u043E\u0441\u0442\u0440\u043E\u0432|Our secret island
\u041D\u0430\u0448\u0430 \u043F\u0435\u0441\u043D\u044F|Our song
\u0423\u0436\u0438\u043D \u043F\u0440\u0438 \u0441\u0432\u0435\u0447\u0430\u0445|Candlelit dinner
\u041F\u0440\u043E\u0433\u0443\u043B\u043A\u0430 \u043F\u043E\u0434 \u0434\u043E\u0436\u0434\u0451\u043C|A walk in the rain
\u041C\u044B \u043D\u0430 \u043A\u043E\u043B\u0435\u0441\u0435 \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F|The two of us on a Ferris wheel
\u041E\u0431\u044A\u044F\u0442\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043E\u043A\u0435\u0430\u043D|A hug across the ocean
\u0417\u0432\u0451\u0437\u0434\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0438\u0434\u0438\u043C \u043E\u0431\u0430|Stars we both can see
\u041D\u0430\u0448\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0430 \u043C\u0435\u0447\u0442\u044B|Our dream wedding
\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u043F\u0443\u0441\u043A|Our first vacation together
\u0423\u044E\u0442\u043D\u044B\u0439 \u0432\u0435\u0447\u0435\u0440 \u0434\u043E\u043C\u0430|A cozy evening at home
\u041D\u0430\u0448 \u0433\u0435\u0440\u0431|Our coat of arms
\u041A\u0430\u043A \u043C\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0438\u0441\u044C|How we met
\u041F\u043E\u0435\u0437\u0434 \u043A \u0442\u0435\u0431\u0435|The train to you
\u0421\u0430\u043C\u043E\u043B\u0451\u0442 \u043A\u043E \u043C\u043D\u0435|The plane to me
\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u043D\u043E\u0435 \u0443\u0442\u0440\u043E \u0432\u0434\u0432\u043E\u0451\u043C|A lazy Sunday morning together
\u041D\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0446\u0432\u0435\u0442|Our favorite color
\u042F \u0438 \u0442\u044B \u043D\u0430 \u043B\u0443\u043D\u0435|You and me on the moon
\u041A\u0430\u0440\u0442\u0430 \u043D\u0430\u0448\u0438\u0445 \u043C\u0435\u0441\u0442|A map of our places
\u0427\u0430\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0434\u0443\u0442 \u043A \u0432\u0441\u0442\u0440\u0435\u0447\u0435|A clock counting to our meeting
\u0427\u0442\u043E \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C \u0437\u0430\u0432\u0442\u0440\u0430|What we do tomorrow
`)},{id:"sweet",ru:"\u041C\u0438\u043B\u043E\u0435",en:"Sweet",items:on(`
\u0421\u0435\u0440\u0434\u0435\u0447\u043A\u043E|A heart
\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0439 \u043C\u0438\u0448\u043A\u0430|A teddy bear
\u0411\u0443\u043A\u0435\u0442 \u0446\u0432\u0435\u0442\u043E\u0432|A bouquet
\u041A\u0440\u0443\u0436\u043A\u0430 \u043A\u0430\u043A\u0430\u043E|A cup of cocoa
\u041E\u0434\u0435\u044F\u043B\u043E \u0438 \u043A\u043D\u0438\u0433\u0430|A blanket and a book
\u0414\u0432\u0430 \u043A\u043E\u0442\u0451\u043D\u043A\u0430|Two kittens
\u041A\u043E\u043D\u0444\u0435\u0442\u044B \u0432 \u043A\u043E\u0440\u043E\u0431\u043A\u0435|A box of chocolates
\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0435 \u0448\u0430\u0440\u0438\u043A\u0438|Balloons
\u041F\u043B\u0435\u0434\u044B \u0438 \u0441\u0432\u0435\u0447\u0438|Blankets and candles
\u0420\u0430\u0434\u0443\u0433\u0430|A rainbow
\u041E\u0431\u043B\u0430\u043A\u043E-\u0441\u0435\u0440\u0434\u0446\u0435|A heart-shaped cloud
\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u043D\u0435\u0431\u043E|A starry sky
\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0434\u043E\u043C\u0438\u043A|A tiny cottage
\u041B\u0435\u0434\u0435\u043D\u0435\u0446|A lollipop
\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430|A gift box
\u041B\u044E\u0431\u043E\u0432\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E|A love letter
\u041F\u0430\u0440\u0430 \u043F\u0438\u043D\u0433\u0432\u0438\u043D\u043E\u0432|A pair of penguins
\u0412\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0435 \u043B\u0435\u0431\u0435\u0434\u0438|Swans in love
\u0411\u0430\u0431\u043E\u0447\u043A\u0430|A butterfly
\u0421\u043B\u0430\u0434\u043A\u0430\u044F \u0432\u0430\u0442\u0430|Cotton candy
\u0422\u0451\u043F\u043B\u044B\u0435 \u043D\u043E\u0441\u043A\u0438|Warm socks
\u041B\u0430\u043C\u043F\u043E\u0447\u043A\u0430-\u0433\u0438\u0440\u043B\u044F\u043D\u0434\u0430|String lights
\u041C\u0438\u0448\u043A\u0430 \u0441 \u0448\u0430\u0440\u0438\u043A\u043E\u043C|A bear with a balloon
\u041F\u0443\u0448\u0438\u0441\u0442\u043E\u0435 \u043E\u0431\u043B\u0430\u0447\u043A\u043E|A fluffy cloud
\u041A\u0440\u043E\u043B\u0438\u043A \u0441 \u043C\u043E\u0440\u043A\u043E\u0432\u043A\u043E\u0439|A bunny with a carrot
\u0414\u043E\u043C\u0438\u043A \u043D\u0430 \u0434\u0435\u0440\u0435\u0432\u0435|A treehouse
\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435 \u0441 \u0432\u0438\u0448\u0435\u043D\u043A\u043E\u0439|Ice cream with a cherry
\u041A\u043B\u0443\u0431\u043D\u0438\u0447\u043A\u0430|A strawberry
\u0427\u0430\u0448\u043A\u0430 \u0447\u0430\u044F \u0438 \u043F\u0435\u0447\u0435\u043D\u044C\u0435|Tea and a cookie
\u0421\u043F\u044F\u0449\u0438\u0439 \u043A\u043E\u0442\u0438\u043A|A sleeping kitty
\u0410\u043D\u0433\u0435\u043B-\u0445\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u044C|A guardian angel
\u0423\u043B\u0438\u0442\u043A\u0430 \u0441 \u0441\u0435\u0440\u0434\u0446\u0435\u043C \u043D\u0430 \u043F\u0430\u043D\u0446\u0438\u0440\u0435|A snail with a heart on its shell
\u0414\u043E\u0436\u0434\u0438\u043A \u0438\u0437 \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A|A rain of hearts
\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0438\u0448\u043A\u0430|A teddy bear astronaut
\u041A\u043E\u0440\u0437\u0438\u043D\u043A\u0430 \u0434\u043B\u044F \u043F\u0438\u043A\u043D\u0438\u043A\u0430|A picnic basket
`)},{id:"animals",ru:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435",en:"Animals",items:on(`
\u041A\u043E\u0442|A cat
\u0421\u043E\u0431\u0430\u043A\u0430|A dog
\u041B\u0438\u0441\u0430|A fox
\u041F\u0438\u043D\u0433\u0432\u0438\u043D|A penguin
\u0421\u043B\u043E\u043D|An elephant
\u0416\u0438\u0440\u0430\u0444|A giraffe
\u041F\u0430\u043D\u0434\u0430|A panda
\u0421\u043E\u0432\u0430|An owl
\u0415\u0434\u0438\u043D\u043E\u0440\u043E\u0433|A unicorn
\u0414\u0435\u043B\u044C\u0444\u0438\u043D|A dolphin
\u041C\u0435\u0434\u0432\u0435\u0434\u044C|A bear
\u041A\u0440\u043E\u043B\u0438\u043A|A rabbit
\u0401\u0436\u0438\u043A|A hedgehog
\u041B\u044F\u0433\u0443\u0448\u043A\u0430|A frog
\u0427\u0435\u0440\u0435\u043F\u0430\u0445\u0430|A turtle
\u041E\u0441\u044C\u043C\u0438\u043D\u043E\u0433|An octopus
\u041C\u044B\u0448\u043A\u0430|A mouse
\u041B\u043E\u0448\u0430\u0434\u044C|A horse
\u041E\u0431\u0435\u0437\u044C\u044F\u043D\u0430|A monkey
\u0411\u0435\u043B\u043A\u0430|A squirrel
\u0412\u043E\u043B\u043A|A wolf
\u0422\u0438\u0433\u0440|A tiger
\u041B\u0435\u0432|A lion
\u041A\u043E\u0430\u043B\u0430|A koala
\u0424\u043B\u0430\u043C\u0438\u043D\u0433\u043E|A flamingo
\u041F\u043E\u043F\u0443\u0433\u0430\u0439|A parrot
\u0411\u0430\u0431\u043E\u0447\u043A\u0430|A butterfly
\u041F\u0447\u0435\u043B\u0430|A bee
\u041A\u0440\u0430\u0431|A crab
\u041A\u0438\u0442|A whale
\u0410\u043A\u0443\u043B\u0430|A shark
\u0423\u043B\u0438\u0442\u043A\u0430|A snail
\u041B\u0430\u043C\u0430|A llama
\u0412\u044B\u0434\u0440\u0430|An otter
\u0415\u043D\u043E\u0442|A raccoon
\u0425\u043E\u043C\u044F\u043A|A hamster
\u0414\u0438\u043D\u043E\u0437\u0430\u0432\u0440|A dinosaur
\u0414\u0440\u0430\u043A\u043E\u043D\u0447\u0438\u043A|A little dragon
\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0451\u043A|A seahorse
\u041C\u0435\u0434\u0443\u0437\u0430|A jellyfish
\u0423\u0442\u043A\u0430|A duck
\u041A\u043E\u0440\u043E\u0432\u0430|A cow
\u0421\u0432\u0438\u043D\u044C\u044F|A pig
\u041E\u043B\u0435\u043D\u044C|A deer
\u041B\u0435\u043D\u0438\u0432\u0435\u0446|A sloth
\u0425\u0430\u043C\u0435\u043B\u0435\u043E\u043D|A chameleon
\u041F\u0430\u0443\u043A|A spider
\u041B\u0435\u0431\u0435\u0434\u044C|A swan
`)},{id:"food",ru:"\u0415\u0434\u0430",en:"Food",items:on(`
\u041F\u0438\u0446\u0446\u0430|Pizza
\u0421\u0443\u0448\u0438|Sushi
\u0411\u0443\u0440\u0433\u0435\u0440|A burger
\u041F\u0435\u043B\u044C\u043C\u0435\u043D\u0438|Dumplings
\u0411\u043B\u0438\u043D\u044B|Pancakes
\u0411\u043E\u0440\u0449|Borscht
\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435|Ice cream
\u0422\u043E\u0440\u0442|A cake
\u041F\u043E\u043D\u0447\u0438\u043A|A donut
\u0410\u0440\u0431\u0443\u0437|A watermelon
\u042F\u0431\u043B\u043E\u043A\u043E|An apple
\u0411\u0430\u043D\u0430\u043D|A banana
\u0410\u0432\u043E\u043A\u0430\u0434\u043E|An avocado
\u041A\u043E\u0444\u0435|A coffee
\u0427\u0430\u0439 \u0441 \u043B\u0438\u043C\u043E\u043D\u043E\u043C|Tea with lemon
\u041A\u0440\u0443\u0430\u0441\u0441\u0430\u043D|A croissant
\u0425\u043E\u0442-\u0434\u043E\u0433|A hot dog
\u0422\u0430\u043A\u043E|A taco
\u041F\u0430\u0441\u0442\u0430|Spaghetti
\u0421\u044B\u0440|Cheese
\u042F\u0438\u0447\u043D\u0438\u0446\u0430|Fried eggs
\u041F\u043E\u043F\u043A\u043E\u0440\u043D|Popcorn
\u0428\u043E\u043A\u043E\u043B\u0430\u0434|Chocolate
\u041A\u0435\u043A\u0441|A cupcake
\u041A\u043B\u0443\u0431\u043D\u0438\u043A\u0430|Strawberries
\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434|Grapes
\u041B\u0438\u043C\u043E\u043D|A lemon
\u0410\u043D\u0430\u043D\u0430\u0441|A pineapple
\u041A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438|French fries
\u0421\u044D\u043D\u0434\u0432\u0438\u0447|A sandwich
\u0428\u0430\u0448\u043B\u044B\u043A|Kebabs
\u0420\u043E\u043B\u043B|A sushi roll
\u041C\u0430\u043A\u0430\u0440\u043E\u043D|A macaron
\u0412\u0430\u0444\u043B\u0438|Waffles
\u041F\u0438\u0440\u043E\u0433|A pie
\u0421\u0443\u043F|A bowl of soup
\u041C\u0451\u0434|Honey
\u0411\u0443\u0442\u0435\u0440\u0431\u0440\u043E\u0434 \u0441 \u043A\u043E\u043B\u0431\u0430\u0441\u043E\u0439|A sausage sandwich
\u041D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0438\u0439 \u0441\u0442\u043E\u043B|A holiday table
\u0417\u0430\u0432\u0442\u0440\u0430\u043A \u0432 \u043F\u043E\u0441\u0442\u0435\u043B\u044C|Breakfast in bed
\u041A\u0443\u0441\u043E\u0447\u0435\u043A \u043F\u0438\u0446\u0446\u044B \u0441 \u0441\u044B\u0440\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u044F\u043D\u0435\u0442\u0441\u044F|A cheesy pizza slice
\u0427\u0430\u0448\u043A\u0430 \u0441 \u0433\u043E\u0440\u044F\u0447\u0438\u043C \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043C|A mug of hot chocolate
`)},{id:"places",ru:"\u041C\u0435\u0441\u0442\u0430",en:"Places",items:on(`
\u042D\u0439\u0444\u0435\u043B\u0435\u0432\u0430 \u0431\u0430\u0448\u043D\u044F|The Eiffel Tower
\u0413\u043E\u0440\u044B|Mountains
\u041E\u0441\u0442\u0440\u043E\u0432|A desert island
\u041C\u0430\u044F\u043A|A lighthouse
\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F|A space station
\u041F\u043E\u0434\u0432\u043E\u0434\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434|An underwater city
\u0417\u0430\u043C\u043E\u043A|A castle
\u0414\u0435\u0440\u0435\u0432\u043D\u044F \u0432 \u0433\u043E\u0440\u0430\u0445|A mountain village
\u041D\u043E\u0447\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434|A city at night
\u041A\u0430\u0444\u0435 \u043D\u0430 \u0443\u0433\u043B\u0443|A corner caf\xE9
\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430|A library
\u0412\u043E\u043A\u0437\u0430\u043B|A train station
\u0410\u044D\u0440\u043E\u043F\u043E\u0440\u0442|An airport
\u041F\u0430\u0440\u043A \u0430\u0442\u0442\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043E\u0432|An amusement park
\u0417\u0438\u043C\u043D\u0438\u0439 \u043B\u0435\u0441|A winter forest
\u041F\u0443\u0441\u0442\u044B\u043D\u044F|A desert
\u0414\u0436\u0443\u043D\u0433\u043B\u0438|A jungle
\u0412\u043E\u0434\u043E\u043F\u0430\u0434|A waterfall
\u041A\u0440\u044B\u0448\u0430 \u0434\u043E\u043C\u0430 \u043D\u043E\u0447\u044C\u044E|A rooftop at night
\u041A\u043E\u0441\u043C\u043E\u0434\u0440\u043E\u043C|A launch pad
\u0421\u0442\u0430\u0440\u044B\u0439 \u0433\u043E\u0440\u043E\u0434|An old town
\u041C\u043E\u0441\u0442|A bridge
\u0414\u043E\u043C \u043D\u0430 \u043A\u043E\u043B\u0451\u0441\u0430\u0445|A camper van
\u041A\u0435\u043C\u043F\u0438\u043D\u0433 \u0443 \u043A\u043E\u0441\u0442\u0440\u0430|A campsite by a fire
\u041E\u0437\u0435\u0440\u043E \u043D\u0430 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0435|A lake at sunrise
\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0441 \u0444\u043E\u043D\u0442\u0430\u043D\u043E\u043C|A square with a fountain
\u0422\u0438\u0445\u0430\u044F \u0443\u043B\u043E\u0447\u043A\u0430|A quiet little street
\u0417\u043E\u043E\u043F\u0430\u0440\u043A|A zoo
\u041A\u0438\u043E\u0441\u043A \u0441 \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u043C|An ice cream stand
\u041F\u043B\u044F\u0436 \u043D\u0430 \u0437\u0430\u043A\u0430\u0442\u0435|A beach at sunset
\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430|A gas station on Mars
\u0421\u0438\u044D\u0442\u043B \u0441 \u0421\u043F\u0435\u0439\u0441-\u041D\u0438\u0434\u043B|Seattle and the Space Needle
\u0422\u0443\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u044F\u043D\u0438\u043A \u0438 \u0441\u0430\u043C\u043E\u0432\u0430\u0440|A Tula gingerbread and a samovar
\u041A\u0440\u0430\u0441\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C|Red Square
\u0417\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043A|An abandoned park
\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439 \u043B\u0435\u0441|An enchanted forest
\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434|A city in the sky
\u0421\u0430\u043C\u0430\u044F \u0443\u044E\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430|The coziest room ever
`)},{id:"nature",ru:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",en:"Nature",items:on(`
\u0417\u0430\u043A\u0430\u0442|A sunset
\u0413\u0440\u043E\u0437\u0430|A thunderstorm
\u0421\u043D\u0435\u0433\u043E\u043F\u0430\u0434|Snowfall
\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435|The northern lights
\u041F\u043E\u043B\u043D\u0430\u044F \u043B\u0443\u043D\u0430|A full moon
\u041E\u0441\u0435\u043D\u043D\u0438\u0439 \u043B\u0435\u0441|An autumn forest
\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0443\u0445|A sunflower
\u0414\u0435\u0440\u0435\u0432\u043E|A tree
\u0420\u0430\u0434\u0443\u0433\u0430 \u043F\u043E\u0441\u043B\u0435 \u0434\u043E\u0436\u0434\u044F|A rainbow after rain
\u0422\u0443\u043C\u0430\u043D \u043D\u0430\u0434 \u0440\u0435\u043A\u043E\u0439|Fog over a river
\u0412\u043E\u043B\u043D\u044B|Waves
\u0412\u0443\u043B\u043A\u0430\u043D|A volcano
\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C|A meteor shower
\u0426\u0432\u0435\u0442\u0443\u0449\u0430\u044F \u0441\u0430\u043A\u0443\u0440\u0430|Cherry blossoms
\u0413\u0440\u0438\u0431\u044B \u043F\u043E\u0441\u043B\u0435 \u0434\u043E\u0436\u0434\u044F|Mushrooms after rain
\u041B\u0443\u0436\u0438 \u0438 \u0441\u0430\u043F\u043E\u0433\u0438|Puddles and rain boots
\u041F\u0448\u0435\u043D\u0438\u0447\u043D\u043E\u0435 \u043F\u043E\u043B\u0435|A wheat field
\u041B\u0443\u0433 \u0441 \u0440\u043E\u043C\u0430\u0448\u043A\u0430\u043C\u0438|A meadow of daisies
\u0421\u043D\u0435\u0433\u043E\u0432\u0438\u043A|A snowman
\u0421\u043E\u0441\u0443\u043B\u044C\u043A\u0438|Icicles
\u0417\u0432\u0451\u0437\u0434\u043D\u043E\u0435 \u043D\u0435\u0431\u043E \u0432 \u0433\u043E\u0440\u0430\u0445|A starry sky in the mountains
\u041A\u043E\u043C\u0435\u0442\u0430|A comet
\u0417\u0430\u0442\u043C\u0435\u043D\u0438\u0435|An eclipse
\u0426\u0432\u0435\u0442\u043E\u043A \u0432 \u0442\u0440\u0435\u0449\u0438\u043D\u0435 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u0430|A flower in the pavement
\u0420\u0430\u0434\u0443\u0436\u043D\u044B\u0439 \u0432\u043E\u0434\u043E\u043F\u0430\u0434|A rainbow waterfall
\u0423\u0442\u0440\u043E \u0432 \u0442\u0443\u043C\u0430\u043D\u0435|A foggy morning
\u0423\u0440\u0430\u0433\u0430\u043D|A hurricane
\u0420\u0430\u0441\u0441\u0432\u0435\u0442|A sunrise
\u041F\u0435\u0449\u0435\u0440\u0430 \u0441 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u0430\u043C\u0438|A crystal cave
\u041E\u0441\u0435\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442|An autumn leaf
\u041A\u0430\u043A\u0442\u0443\u0441|A cactus
\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0432 \u0448\u0442\u043E\u0440\u043C|A ship in a storm
`)},{id:"fantasy",ru:"\u0424\u044D\u043D\u0442\u0435\u0437\u0438",en:"Fantasy",items:on(`
\u0414\u0440\u0430\u043A\u043E\u043D|A dragon
\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0430\u044F \u043F\u0430\u043B\u043E\u0447\u043A\u0430|A magic wand
\u0420\u0443\u0441\u0430\u043B\u043A\u0430|A mermaid
\u0417\u0430\u043C\u043E\u043A \u0432 \u043E\u0431\u043B\u0430\u043A\u0430\u0445|A castle in the clouds
\u0418\u043D\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u044F\u043D\u0438\u043D|An alien
\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u0440\u0430\u0431\u043B\u044C|A spaceship
\u0420\u043E\u0431\u043E\u0442|A robot
\u0424\u0435\u044F|A fairy
\u0415\u0434\u0438\u043D\u043E\u0440\u043E\u0433 \u043D\u0430 \u0440\u0430\u0434\u0443\u0433\u0435|A unicorn on a rainbow
\u0412\u0435\u0434\u044C\u043C\u0430 \u043D\u0430 \u043C\u0435\u0442\u043B\u0435|A witch on a broom
\u0413\u043E\u0432\u043E\u0440\u044F\u0449\u0435\u0435 \u0434\u0435\u0440\u0435\u0432\u043E|A talking tree
\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430|A magic book
\u041F\u043E\u0440\u0442\u0430\u043B \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u043C\u0438\u0440|A portal to another world
\u042D\u043B\u044C\u0444|An elf
\u041B\u0435\u0441\u043D\u043E\u0439 \u0434\u0443\u0445|A forest spirit
\u041F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0438 \u0434\u0440\u0430\u043A\u043E\u043D|A princess and a dragon
\u0420\u044B\u0446\u0430\u0440\u044C|A knight
\u041F\u0438\u0440\u0430\u0442|A pirate
\u041A\u043E\u0440\u0430\u0431\u043B\u044C-\u043F\u0440\u0438\u0437\u0440\u0430\u043A|A ghost ship
\u0424\u0435\u043D\u0438\u043A\u0441|A phoenix
\u0413\u043D\u043E\u043C|A gnome
\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u043E\u0435 \u0437\u0435\u043B\u044C\u0435|A magic potion
\u041F\u043B\u0430\u043D\u0435\u0442\u0430 \u0438\u0437 \u043A\u043E\u043D\u0444\u0435\u0442|A candy planet
\u041B\u0435\u0442\u0430\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0440\u043E\u0432|A floating island
\u0422\u0440\u043E\u043B\u043B\u044C \u043F\u043E\u0434 \u043C\u043E\u0441\u0442\u043E\u043C|A troll under a bridge
\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u0442|A space cat
\u041F\u043E\u0434\u0432\u043E\u0434\u043D\u0430\u044F \u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430|An underwater princess
\u0413\u043E\u0440\u043E\u0434 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043E|A city of the future
\u041C\u0430\u0448\u0438\u043D\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438|A time machine
\u041F\u0440\u0438\u0432\u0438\u0434\u0435\u043D\u0438\u0435|A friendly ghost
\u0425\u0440\u0443\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0440|A crystal ball
\u0417\u0432\u0435\u0440\u044C \u0438\u0437 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F|A creature from another dimension
\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0432\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A|A little wizard
\u041B\u0443\u043D\u043D\u044B\u0439 \u043A\u0440\u043E\u043B\u0438\u043A|A moon rabbit
`)},{id:"funny",ru:"\u0421\u043C\u0435\u0448\u043D\u043E\u0435",en:"Silly",items:on(`
\u041A\u043E\u0442-\u043A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442|An astronaut cat
\u041F\u0438\u043D\u0433\u0432\u0438\u043D \u043D\u0430 \u043F\u043B\u044F\u0436\u0435|A penguin on vacation
\u0421\u043E\u0431\u0430\u043A\u0430 \u0437\u0430 \u0440\u0443\u043B\u0451\u043C|A dog driving a car
\u0411\u0443\u0442\u0435\u0440\u0431\u0440\u043E\u0434 \u0441 \u043D\u043E\u0433\u0430\u043C\u0438|A sandwich with legs
\u0422\u0430\u043F\u043E\u0447\u043A\u0438-\u043C\u043E\u043D\u0441\u0442\u0440\u044B|Slipper monsters
\u0423\u0442\u043A\u0430 \u0432 \u043F\u0430\u043B\u044C\u0442\u043E|A duck in a coat
\u0420\u043E\u0431\u043E\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043B\u044E\u0431\u0438\u043B\u0441\u044F|A robot in love
\u0416\u0438\u0440\u0430\u0444 \u0432 \u0448\u0430\u0440\u0444\u0435|A giraffe in a scarf
\u0414\u0438\u043D\u043E\u0437\u0430\u0432\u0440 \u043D\u0430 \u0441\u0430\u043C\u043E\u043A\u0430\u0442\u0435|A dinosaur on a scooter
\u042F\u0438\u0447\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u0431\u0435\u0433\u0430\u0435\u0442|A fried egg running away
\u041A\u0430\u043A\u0442\u0443\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F|A cactus that wants a hug
\u041A\u043E\u0442-\u043F\u043E\u0432\u0430\u0440|A cat chef
\u0421\u043B\u043E\u043D \u043D\u0430 \u0446\u044B\u043F\u043E\u0447\u043A\u0430\u0445|An elephant on tiptoe
\u0421\u0430\u043C\u044B\u0439 \u043B\u0435\u043D\u0438\u0432\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A|The laziest person ever
\u041E\u0431\u043B\u0430\u043A\u043E \u0432 \u043E\u0447\u043A\u0430\u0445|A cloud with sunglasses
\u0421\u043E\u043B\u043D\u0446\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u0440\u043E\u0441\u043F\u0430\u043B\u043E|A sun that overslept
\u041A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0432 \u043E\u0442\u043F\u0443\u0441\u043A\u0435|A potato on vacation
\u041C\u043E\u043D\u0441\u0442\u0440 \u043F\u043E\u0434 \u043A\u0440\u043E\u0432\u0430\u0442\u044C\u044E|The monster under the bed
\u0415\u0434\u0438\u043D\u043E\u0440\u043E\u0433 \u043D\u0430 \u0434\u0438\u0435\u0442\u0435|A unicorn on a diet
\u0421\u043D\u0435\u0433\u043E\u0432\u0438\u043A \u043B\u0435\u0442\u043E\u043C|A snowman in summer
\u0411\u0430\u043D\u0430\u043D \u0432 \u043A\u043E\u0441\u0442\u044E\u043C\u0435|A banana in a suit
\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B \u043D\u0430 \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u0438|A crocodile on a date
\u0413\u043E\u0432\u043E\u0440\u044F\u0449\u0438\u0439 \u0447\u0430\u0439\u043D\u0438\u043A|A talking kettle
\u0421\u043E\u043D\u043D\u0430\u044F \u0441\u043E\u0432\u0430 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0435|A sleepy owl at work
\u0414\u0435\u0440\u0435\u0432\u043E \u0441 \u043B\u0438\u0446\u043E\u043C|A tree with a face
\u041C\u044B\u0448\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u0441\u043B\u043E\u043D\u0430|A mouse versus an elephant
\u0417\u0430\u044F\u0446-\u0441\u0443\u043F\u0435\u0440\u0433\u0435\u0440\u043E\u0439|A superhero bunny
\u041A\u043E\u0440\u043E\u043B\u044C \u043F\u0435\u043B\u044C\u043C\u0435\u043D\u0435\u0439|The king of dumplings
\u041D\u043E\u0441\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0442\u0435\u0440\u044F\u043B \u043F\u0430\u0440\u0443|A sock that lost its pair
\u041F\u043E\u043D\u0447\u0438\u043A-\u043D\u0438\u043D\u0434\u0437\u044F|A ninja donut
\u041B\u044F\u0433\u0443\u0448\u043A\u0430-\u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430 \u0432 \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0430\u0445|A frog princess in sneakers
\u041A\u043E\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u043E\u0438\u0442\u0441\u044F \u043E\u0433\u0443\u0440\u0446\u043E\u0432|A cat scared of a cucumber
\u041B\u044B\u0441\u044B\u0439 \u0451\u0436\u0438\u043A|A bald hedgehog
\u0423\u043B\u0438\u0442\u043A\u0430 \u043D\u0430 \u0433\u043E\u043D\u043A\u0430\u0445|A snail at a race track
`)},{id:"objects",ru:"\u0412\u0435\u0449\u0438",en:"Things",items:on(`
\u0417\u043E\u043D\u0442\u0438\u043A|An umbrella
\u0427\u0430\u0441\u044B|A clock
\u041A\u043B\u044E\u0447|A key
\u0412\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434|A bicycle
\u0413\u0438\u0442\u0430\u0440\u0430|A guitar
\u0421\u0430\u043C\u043E\u043B\u0451\u0442|An airplane
\u041B\u0430\u043C\u043F\u0430|A lamp
\u0427\u0435\u043C\u043E\u0434\u0430\u043D|A suitcase
\u0422\u0435\u043B\u0435\u0444\u043E\u043D|A phone
\u041E\u0447\u043A\u0438|Glasses
\u0417\u0435\u0440\u043A\u0430\u043B\u043E|A mirror
\u041D\u0430\u0443\u0448\u043D\u0438\u043A\u0438|Headphones
\u0421\u0432\u0435\u0447\u0430|A candle
\u041A\u043D\u0438\u0433\u0430|A book
\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0437\u043C\u0435\u0439|A kite
\u041F\u0430\u0440\u0443\u0441\u043D\u0438\u043A|A sailboat
\u041C\u0430\u0448\u0438\u043D\u0430|A car
\u041F\u043E\u0435\u0437\u0434|A train
\u041C\u043E\u0441\u0442|A bridge
\u041A\u043E\u043B\u0435\u0441\u043E \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F|A Ferris wheel
\u0428\u043B\u044F\u043F\u0430|A hat
\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u043A\u0438|Sneakers
\u0420\u044E\u043A\u0437\u0430\u043A|A backpack
\u041A\u043E\u043C\u043F\u0430\u0441|A compass
\u0424\u043E\u043D\u0430\u0440\u044C|A lantern
\u041F\u043E\u0434\u0443\u0448\u043A\u0430|A pillow
\u0422\u0435\u043B\u0435\u0441\u043A\u043E\u043F|A telescope
\u0424\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442|A camera
\u041F\u0438\u0430\u043D\u0438\u043D\u043E|A piano
\u0427\u0430\u0439\u043D\u0438\u043A|A kettle
\u0417\u043E\u043D\u0442 \u043F\u043E\u0434 \u0434\u043E\u0436\u0434\u0451\u043C|An umbrella in the rain
\u0428\u0430\u0440\u0444|A scarf
\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C|A calendar
\u0413\u043B\u043E\u0431\u0443\u0441|A globe
\u041A\u043E\u043D\u0432\u0435\u0440\u0442|An envelope
\u041A\u0430\u0440\u0442\u0430 \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449|A treasure map
\u0421\u043A\u0435\u0439\u0442\u0431\u043E\u0440\u0434|A skateboard
\u0412\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0448\u0430\u0440|A hot air balloon
\u0418\u0433\u0440\u043E\u0432\u0430\u044F \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430|A game console
\u0401\u043B\u043A\u0430|A Christmas tree
\u0413\u043E\u0440\u0448\u043E\u043A \u0441 \u0446\u0432\u0435\u0442\u043A\u043E\u043C|A potted plant
\u041A\u0440\u0435\u0441\u043B\u043E-\u043A\u0430\u0447\u0430\u043B\u043A\u0430|A rocking chair
`)},{id:"feelings",ru:"\u0427\u0443\u0432\u0441\u0442\u0432\u0430",en:"Feelings",items:on(`
\u0420\u0430\u0434\u043E\u0441\u0442\u044C|Joy
\u0422\u043E\u0441\u043A\u0430|Longing
\u0421\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435|Calm
\u041B\u044E\u0431\u043E\u0432\u044C|Love
\u0423\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C|Tiredness
\u0412\u0434\u043E\u0445\u043D\u043E\u0432\u0435\u043D\u0438\u0435|Inspiration
\u0423\u044E\u0442|Coziness
\u0421\u0442\u0440\u0430\u0445|Fear
\u0421\u0432\u043E\u0431\u043E\u0434\u0430|Freedom
\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435|Waiting
\u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C|Tenderness
\u0421\u043C\u0435\u0445|Laughter
\u0421\u043A\u0443\u043A\u0430|Boredom
\u041F\u0440\u0435\u0434\u0432\u043A\u0443\u0448\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0438|Anticipation of a meeting
\u0422\u0438\u0448\u0438\u043D\u0430|Silence
\u041E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u043E|Solitude
\u041C\u0435\u0447\u0442\u0430|A dream
\u041F\u0430\u043C\u044F\u0442\u044C|Memory
\u041D\u0430\u0434\u0435\u0436\u0434\u0430|Hope
\u041D\u043E\u0441\u0442\u0430\u043B\u044C\u0433\u0438\u044F|Nostalgia
\u042D\u0439\u0444\u043E\u0440\u0438\u044F|Euphoria
\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C|Gratitude
\u0421\u0447\u0430\u0441\u0442\u044C\u0435|Happiness
\u0423\u0442\u0440\u043E \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A\u0430|Monday morning
\u0411\u0435\u0441\u0441\u043E\u043D\u043D\u0438\u0446\u0430|Insomnia
\u0427\u0443\u0432\u0441\u0442\u0432\u043E \u0434\u043E\u043C\u0430|The feeling of home
\u041B\u0451\u0433\u043A\u043E\u0441\u0442\u044C|Lightness
\u0422\u0440\u0435\u0432\u043E\u0433\u0430|Worry
\u0412\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u043E\u0441\u0442\u044C|A crush
\u041C\u0443\u0437\u044B\u043A\u0430 \u0432 \u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0430\u0445|Music in your headphones
\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043D\u0435\u0433|The first snow
\u0417\u0432\u0443\u043A \u0434\u043E\u0436\u0434\u044F|The sound of rain
`)},{id:"hobbies",ru:"\u0417\u0430\u043D\u044F\u0442\u0438\u044F",en:"Activities",items:on(`
\u0427\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0430 \u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434\u0435|Someone riding a bike
\u0422\u0430\u043D\u0446\u0443\u044E\u0449\u0430\u044F \u043F\u0430\u0440\u0430|A couple dancing
\u0418\u0433\u0440\u0430 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435|Playing guitar
\u0413\u043E\u0442\u043E\u0432\u0438\u043C \u0432\u043C\u0435\u0441\u0442\u0435|Cooking together
\u0427\u0438\u0442\u0430\u0435\u043C \u043A\u043D\u0438\u0433\u0443|Reading a book
\u0411\u0435\u0433 \u0443\u0442\u0440\u043E\u043C|A morning run
\u041F\u0440\u044B\u0436\u043E\u043A \u0441 \u043F\u0430\u0440\u0430\u0448\u044E\u0442\u043E\u043C|Skydiving
\u0420\u044B\u0431\u0430\u043B\u043A\u0430|Fishing
\u041A\u0430\u0442\u0430\u043D\u0438\u0435 \u043D\u0430 \u043A\u043E\u043D\u044C\u043A\u0430\u0445|Ice skating
\u041F\u043B\u0430\u0432\u0430\u0435\u043C \u0432 \u043C\u043E\u0440\u0435|Swimming in the sea
\u0418\u0433\u0440\u0430 \u0432 \u0444\u0443\u0442\u0431\u043E\u043B|Playing soccer
\u041F\u043E\u0445\u043E\u0434 \u0432 \u0433\u043E\u0440\u044B|Hiking in the mountains
\u041F\u0438\u043A\u043D\u0438\u043A|A picnic
\u0420\u0438\u0441\u0443\u0435\u043C \u043D\u0430 \u0441\u0442\u0435\u043D\u0435|Painting a wall
\u0419\u043E\u0433\u0430 \u043D\u0430 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0435|Yoga at sunrise
\u0418\u0433\u0440\u0430 \u0432 \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0443|Playing video games
\u041F\u0435\u043D\u0438\u0435 \u0432 \u0434\u0443\u0448\u0435|Singing in the shower
\u0421\u043E\u043D \u0434\u043E \u043E\u0431\u0435\u0434\u0430|Sleeping in
\u041A\u0430\u0442\u0430\u043D\u0438\u0435 \u043D\u0430 \u043B\u044B\u0436\u0430\u0445|Skiing
\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0435\u043C \u0437\u0430\u043A\u0430\u0442|Photographing a sunset
\u041F\u043E\u043A\u0443\u043F\u0430\u0435\u043C \u0446\u0432\u0435\u0442\u044B|Buying flowers
\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043D\u0430 \u043F\u043E\u0435\u0437\u0434\u0435|A train journey
\u041D\u043E\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0430|A night walk
\u0418\u0433\u0440\u0430 \u0432 \u0441\u043D\u0435\u0436\u043A\u0438|A snowball fight
\u0421\u0442\u0440\u043E\u0438\u043C \u0437\u0430\u043C\u043E\u043A \u0438\u0437 \u043F\u0435\u0441\u043A\u0430|Building a sandcastle
\u0417\u0430\u043F\u0443\u0441\u043A \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0433\u043E \u0437\u043C\u0435\u044F|Flying a kite
\u0423\u0431\u043E\u0440\u043A\u0430 \u0432 \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A|Cleaning on a Monday
\u041A\u043E\u0444\u0435 \u043D\u0430 \u0431\u0430\u043B\u043A\u043E\u043D\u0435|Coffee on the balcony
\u041F\u0440\u044B\u0436\u043A\u0438 \u043F\u043E \u043B\u0443\u0436\u0430\u043C|Jumping in puddles
\u0413\u0443\u043B\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u0430\u043A\u043E\u0439|Walking the dog
`)}],fl={who:on(`
\u041A\u043E\u0442|A cat
\u041F\u0438\u043D\u0433\u0432\u0438\u043D|A penguin
\u0414\u0440\u0430\u043A\u043E\u043D|A dragon
\u0420\u043E\u0431\u043E\u0442|A robot
\u041B\u0438\u0441\u0430|A fox
\u0414\u0438\u043D\u043E\u0437\u0430\u0432\u0440|A dinosaur
\u041F\u0430\u043D\u0434\u0430|A panda
\u0415\u0434\u0438\u043D\u043E\u0440\u043E\u0433|A unicorn
\u0401\u0436\u0438\u043A|A hedgehog
\u041E\u0441\u044C\u043C\u0438\u043D\u043E\u0433|An octopus
\u041C\u0435\u0434\u0432\u0435\u0434\u044C|A bear
\u041B\u044F\u0433\u0443\u0448\u043A\u0430|A frog
\u0421\u043E\u0432\u0430|An owl
\u0421\u043B\u043E\u043D|An elephant
\u041F\u0440\u0438\u0432\u0438\u0434\u0435\u043D\u0438\u0435|A ghost
\u041F\u0440\u0438\u0448\u0435\u043B\u0435\u0446|An alien
\u041F\u0438\u0440\u0430\u0442|A pirate
\u0421\u043D\u0435\u0433\u043E\u0432\u0438\u043A|A snowman
\u041A\u0440\u043E\u043B\u0438\u043A|A bunny
\u0423\u0442\u043A\u0430|A duck
\u0416\u0438\u0440\u0430\u0444|A giraffe
\u041C\u044B\u0448\u043A\u0430|A mouse
\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A|A wizard
\u041A\u043E\u0441\u043C\u043E\u043D\u0430\u0432\u0442|An astronaut
\u0411\u0430\u0431\u0443\u0448\u043A\u0430|A grandma
\u0421\u0430\u043C\u0443\u0440\u0430\u0439|A samurai
\u041E\u0431\u043B\u0430\u043A\u043E|A cloud
\u0422\u044B\u043A\u0432\u0430|A pumpkin
\u0411\u0430\u043D\u0430\u043D|A banana
\u041F\u043E\u043D\u0447\u0438\u043A|A donut
\u0427\u0430\u0439\u043D\u0438\u043A|A kettle
\u041A\u0430\u043A\u0442\u0443\u0441|A cactus
\u0423\u043B\u0438\u0442\u043A\u0430|A snail
\u0425\u043E\u043C\u044F\u043A|A hamster
\u041A\u0440\u043E\u043A\u043E\u0434\u0438\u043B|A crocodile
\u0414\u0438\u043D\u043E\u0437\u0430\u0432\u0440\u0438\u043A|A baby dinosaur
\u041A\u043E\u0440\u043E\u043B\u044C|A king
\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435|An ice cream cone
\u0422\u0430\u043F\u043E\u0447\u0435\u043A|A slipper
\u041D\u043E\u0441\u043E\u043A|A sock
`),does:on(`
\u043F\u0435\u0447\u0451\u0442 \u043F\u0438\u0440\u043E\u0433|baking a pie
\u0435\u0434\u0435\u0442 \u043D\u0430 \u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434\u0435|riding a bike
\u043B\u0435\u0442\u0438\u0442 \u043D\u0430 \u043B\u0443\u043D\u0443|flying to the moon
\u0438\u0433\u0440\u0430\u0435\u0442 \u043D\u0430 \u0433\u0438\u0442\u0430\u0440\u0435|playing the guitar
\u0442\u0430\u043D\u0446\u0443\u0435\u0442 \u043F\u043E\u0434 \u0434\u043E\u0436\u0434\u0451\u043C|dancing in the rain
\u043A\u0430\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u0435\u0439\u0442\u0435|skateboarding
\u043F\u044C\u0451\u0442 \u043A\u043E\u0444\u0435 \u043D\u0430 \u043A\u0440\u044B\u0448\u0435|drinking coffee on a roof
\u043B\u043E\u0432\u0438\u0442 \u0440\u044B\u0431\u0443|fishing
\u0447\u0438\u0442\u0430\u0435\u0442 \u043A\u043D\u0438\u0433\u0443|reading a book
\u043F\u043E\u0451\u0442 \u0432 \u0434\u0443\u0448\u0435|singing in the shower
\u0440\u0438\u0441\u0443\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u0443|painting a picture
\u0441\u043F\u0438\u0442 \u043D\u0430 \u043E\u0431\u043B\u0430\u043A\u0435|sleeping on a cloud
\u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0433\u0440\u0438\u0431\u044B|picking mushrooms
\u0438\u0434\u0451\u0442 \u043D\u0430 \u0441\u0432\u0438\u0434\u0430\u043D\u0438\u0435|going on a date
\u0441\u0442\u0440\u043E\u0438\u0442 \u0437\u0430\u043C\u043E\u043A \u0438\u0437 \u043F\u0435\u0441\u043A\u0430|building a sandcastle
\u0433\u043E\u0442\u043E\u0432\u0438\u0442 \u0443\u0436\u0438\u043D|cooking dinner
\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043A\u0430\u0442|photographing a sunset
\u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u0433\u043E \u0437\u043C\u0435\u044F|flying a kite
\u0443\u0447\u0438\u0442\u0441\u044F \u043F\u043B\u0430\u0432\u0430\u0442\u044C|learning to swim
\u043A\u0430\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043B\u044B\u0436\u0430\u0445|skiing
\u0436\u0434\u0451\u0442 \u0430\u0432\u0442\u043E\u0431\u0443\u0441|waiting for a bus
\u0434\u0435\u043B\u0430\u0435\u0442 \u0441\u0435\u043B\u0444\u0438|taking a selfie
\u0433\u0443\u043B\u044F\u0435\u0442 \u043F\u043E\u0434 \u0437\u0432\u0451\u0437\u0434\u0430\u043C\u0438|walking under the stars
\u0438\u0433\u0440\u0430\u0435\u0442 \u0432 \u0448\u0430\u0445\u043C\u0430\u0442\u044B|playing chess
\u043F\u043E\u043B\u0438\u0432\u0430\u0435\u0442 \u0446\u0432\u0435\u0442\u044B|watering flowers
\u043F\u043B\u044B\u0432\u0451\u0442 \u043D\u0430 \u043B\u043E\u0434\u043A\u0435|sailing a boat
\u043D\u0435\u0441\u0451\u0442 \u0431\u0443\u043A\u0435\u0442 \u0446\u0432\u0435\u0442\u043E\u0432|carrying a bouquet
\u043A\u0430\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044F\u0445|riding a carousel
\u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u0432 \u0442\u0435\u043B\u0435\u0441\u043A\u043E\u043F|looking through a telescope
\u043F\u0438\u0448\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u043E|writing a letter
\u0442\u0430\u043D\u0446\u0443\u0435\u0442 \u0432\u0430\u043B\u044C\u0441|waltzing
\u0443\u0431\u0435\u0433\u0430\u0435\u0442 \u043E\u0442 \u043F\u0447\u0451\u043B|running from bees
\u043F\u0440\u0430\u0437\u0434\u043D\u0443\u0435\u0442 \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F|celebrating a birthday
\u0435\u0434\u0435\u0442 \u043D\u0430 \u043F\u043E\u0435\u0437\u0434\u0435|riding a train
\u043F\u0440\u044B\u0433\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u043B\u0443\u0436\u0438|jumping over puddles
\u0438\u0449\u0435\u0442 \u043A\u043B\u0430\u0434|hunting for treasure
\u043F\u044C\u0451\u0442 \u0447\u0430\u0439 \u0441 \u0432\u0430\u0440\u0435\u043D\u044C\u0435\u043C|having tea with jam
\u0438\u0433\u0440\u0430\u0435\u0442 \u0432 \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0443|playing video games
\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u0440\u0430\u0441\u0441\u0432\u0435\u0442|watching the sunrise
\u043B\u0435\u0442\u0438\u0442 \u043D\u0430 \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u043E\u043C \u0448\u0430\u0440\u0435|floating in a hot air balloon
`)},lv=Qn.map(i=>i.id),Pb=Qn.reduce((i,t)=>i+t.items.length,0),cv=i=>i[Math.random()*i.length|0];function mf(i,t){if(!i)return"";let e=t==="ru"?0:1;if(i.k==="mix"){let r=fl.who[i.a],a=fl.does[i.b];return!r||!a?"":t==="ru"?`${r[0]} ${a[0]}`:`${r[1]} ${a[1]}`}let n=Qn.find(r=>r.id===i.k),s=n&&n.items[i.i];return s?s[e]||s[0]:""}function fh(i,t){if(!i)return"";if(i.k==="mix")return t==="ru"?"\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u043C\u0438\u043A\u0441":"Wild mix";let e=Qn.find(n=>n.id===i.k);return e?t==="ru"?e.ru:e.en:""}function ph(i,t=[]){let e=new Set(t);for(let n=0;n<30;n++){let s=i;s==="all"&&(s=Math.random()<.18?"mix":cv(lv));let r;if(s==="mix")r={k:s,a:Math.random()*fl.who.length|0,b:Math.random()*fl.does.length|0};else{let o=Qn.find(l=>l.id===s)||Qn[0];r={k:o.id,i:Math.random()*o.items.length|0}}let a=r.k+":"+(r.k==="mix"?r.a+"-"+r.b:r.i);if(!e.has(a))return r}return{k:"sweet",i:0}}var gf=i=>i.k+":"+(i.k==="mix"?i.a+"-"+i.b:i.i);var vf="g_theme_recent",_f="g_theme_cat",mh=()=>{try{return JSON.parse(localStorage.getItem(vf)||"[]")}catch{return[]}},xf=i=>{try{localStorage.setItem(vf,JSON.stringify([...mh().slice(-80),gf(i)]))}catch{}};function yf(i){let{t,net:e,me:n}=i,s=()=>i.lang(),r=null,a=localStorage.getItem(_f)||"all",o=L("span",{class:"th-lab"}),l=L("div",{class:"th-t",id:"th-t"}),c=["all",...Qn.map(M=>M.id),"mix"].map(M=>L("button",{class:"th-chip","data-c":M,onclick:()=>{a=M,localStorage.setItem(_f,M),u()}})),h=()=>{c.forEach(M=>{let C=M.dataset.c;M.textContent=C==="all"?t("themeAll"):C==="mix"?fh({k:"mix"},s()):(()=>{let S=Qn.find(w=>w.id===C);return s()==="ru"?S.ru:S.en})(),M.classList.toggle("on",C===a)})};function u(){h();let M=mf(r,s());o.textContent=t("themeLabel")+(r?" \xB7 "+fh(r,s()):""),l.textContent!==M&&(l.textContent=M,l.classList.remove("swap"),l.offsetWidth,l.classList.add("swap"))}let d=async()=>{if(x.count()>0&&!await Rs(t("themeNewConfirm"),t("yes"),t("no")))return;let M=ph(a,mh());xf(M),x.wipe(),e.set("theme/topic",{...M,t:Date.now(),by:n})},f=L("div",{class:"th-cats"},c),g=L("div",{class:"theme"},L("div",{class:"th-top"},o,L("button",{class:"th-new",id:"th-new",onclick:d},L("i",{html:Xt.shuffle}),L("span",{},t("themeNew")))),l,f),x=ll(i,{path:"theme",head:g}),p=!0,m=e.listen("theme/topic",M=>{if(!M&&p){p=!1,r=ph("all",mh()),xf(r),e.set("theme/topic",{...r,t:Date.now(),by:n}),u();return}p=!1,M&&(r={k:M.k,i:M.i,a:M.a,b:M.b}),u()});return u(),setTimeout(()=>{let M=f.querySelector(".on");M&&(f.scrollLeft=Math.max(0,M.offsetLeft-60))},30),{el:x.el,update:u,destroy(){m(),x.destroy()}}}function hv(i,t){let e=JSON.parse(JSON.stringify(i));for(let[n,s]of Object.entries(t)){let r=n.split("/"),a=e;for(let o=0;o<r.length-1;o++)(!a[r[o]]||typeof a[r[o]]!="object")&&(a[r[o]]={}),a=a[r[o]];a[r[r.length-1]]=s}return e}function Ps(i,t,e,n,s){e?i.patch(t,s):i.set(t,hv(n,s))}var uv=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],dv={lesha:"L",ari:"A"},pl=i=>({b:".........",turn:i,starter:i,w:"",s:{lesha:0,ari:0},n:1}),Mf=i=>uv.find(([t,e,n])=>i[t]!=="."&&i[t]===i[e]&&i[e]===i[n]),fv='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',pv='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 2.7 4.5 6.3 4.5c2 0 3.7 1.1 4.7 2.7h2c1-1.6 2.7-2.7 4.7-2.7 3.6 0 5.4 3.7 3.9 7.2C19.5 16.4 12 21 12 21z"/></svg>';function Sf(i){let{t,net:e,me:n,other:s}=i,r=L("div",{class:"ttt-score"}),a=L("div",{class:"g-status",id:"ttt-status"}),o=[...Array(9)].map((p,m)=>L("button",{class:"ttt-cell","data-i":m,onclick:()=>d(m)})),l=L("button",{class:"btn",id:"ttt-new",onclick:f},t("newRound")),c=L("button",{class:"btn ghost",id:"ttt-clear",onclick:g},t("tttClear")),h=L("div",{class:"game ttt"},r,a,L("div",{class:"ttt-grid"},o),l,c),u=()=>i.S.games.ttt||null;function d(p){let m=u()||pl("lesha");if(m.w||m.turn!==n||m.b[p]!==".")return;let M=m.b.slice(0,p)+dv[n]+m.b.slice(p+1),C=Mf(M),S=!M.includes("."),w=C?n:S?"d":"",A={b:M,turn:s,w};w===n&&(A["s/"+n]=(m.s&&m.s[n]||0)+1),Ps(e,"games/ttt",u(),m,A)}function f(){let p=u()||pl("lesha"),m=p.starter==="lesha"?"ari":"lesha";e.set("games/ttt",{b:".........",turn:m,starter:m,w:"",s:p.s||{lesha:0,ari:0},n:(p.n||1)+1})}function g(){let p=u()||pl("lesha");if(p.b==="........."&&!p.w)return;let m=p.starter||"lesha";e.set("games/ttt",{b:".........",turn:m,starter:m,w:"",s:p.s||{lesha:0,ari:0},n:p.n||1})}function x(){let p=u()||pl("lesha"),m=Mf(p.b);o.forEach((M,C)=>{let S=p.b[C];M.innerHTML=S==="L"?fv:S==="A"?pv:"",M.className="ttt-cell"+(S==="L"?" lesha":S==="A"?" ari":"")+(m&&m.includes(C)?" win":"")+(!p.w&&p.turn===n&&S==="."?" can":"")}),r.innerHTML=`<span class="s-l">${i.name("lesha")} ${p.s&&p.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${p.s&&p.s.ari||0}</span>`,a.textContent=p.w==="d"?t("draw"):p.w?p.w===n?t("youWin"):t("theyWin",{name:i.name(p.w)}):p.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(p.turn)}),a.className="g-status"+(!p.w&&p.turn===n?" mine":""),l.style.display=p.w?"":"none",c.style.display=!p.w&&p.b!=="........."?"":"none"}return x(),{el:h,update:x,destroy(){}}}var ge=8,Mi=[4,3,3,2,2],ml=".".repeat(ge*ge),zr=(i,t=1)=>({n:t,st:"place",starter:i,turn:i,ready:{lesha:0,ari:0},b:{lesha:"",ari:""},sh:{lesha:ml,ari:ml},win:""}),bf=i=>"ABCDEFGH"[i%ge]+(Math.floor(i/ge)+1);function wf(i,t,e){let n=i%ge,s=Math.floor(i/ge);return(e?n+t>ge:s+t>ge)?null:Array.from({length:t},(r,a)=>i+a*(e?1:ge))}function Af(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.bs||null,a=Array(ge*ge).fill("."),o=Mi.map(()=>!1),l=0,c=!0,h=L("div",{class:"g-status",id:"bs-status"}),u=L("div",{class:"g-note",id:"bs-last"}),d=L("div",{class:"bs-palette"}),f=L("div",{class:"row bs-ctrl"}),g=(N,R)=>{let V=Array.from({length:ge*ge},(q,W)=>L("button",{class:"bs-cell","data-i":W,onclick:()=>R(W)}));return{cells:V,el:L("div",{class:"bs-grid",id:N},V)}},x=g("bs-mine",A),p=g("bs-enemy",U),m=L("div",{class:"bs-box"},L("div",{class:"bs-cap"},t("enemyWaters")),p.el),M=L("div",{class:"bs-box"},L("div",{class:"bs-cap",id:"bs-mine-cap"},t("yourFleet")),x.el),C=L("button",{class:"btn",id:"bs-new",onclick:P},t("newGame")),S=L("div",{class:"game bs"},h,d,f,m,M,u,C);function w(){let N=o.findIndex(R=>!R);return N<0?null:N}function A(N){let R=r()||zr("lesha");if(R.st!=="place"||R.ready&&R.ready[n])return;if(a[N]!=="."){let q=+a[N];return a=a.map(W=>W===String(q)?".":W),o[q]=!1,l=q,k()}if((l===null||o[l])&&(l=w()),l===null)return;let V=wf(N,Mi[l],c);if(!V||V.some(q=>a[q]!==".")){i.toast(t("noFit"));return}V.forEach(q=>a[q]=String(l)),o[l]=!0,l=w(),k()}function _(){for(let N=0;N<200;N++){let R=Array(ge*ge).fill("."),V=!0;for(let q=0;q<Mi.length&&V;q++){let W=!1;for(let nt=0;nt<60&&!W;nt++){let X=Math.random()<.5,J=Math.floor(Math.random()*ge*ge),tt=wf(J,Mi[q],X);tt&&tt.every(yt=>R[yt]===".")&&(tt.forEach(yt=>R[yt]=String(q)),W=!0)}V=W}if(V)return a=R,o=Mi.map(()=>!0),l=null,k()}}function b(){if(o.some(V=>!V))return;let N=r()||zr("lesha"),R={["b/"+n]:a.join(""),["ready/"+n]:1};N.ready&&N.ready[s]&&(R.st="play",R.turn=N.starter),Ps(e,"games/bs",r(),N,R)}function U(N){let R=r();if(!R||R.st!=="play"||R.turn!==n)return;let V=R.sh[n];if(V[N]!==".")return;let q=R.b[s];if(!q)return;let W=q[N]!==".",nt=V.slice(0,N)+(W?"h":"m")+V.slice(N+1),X=[...q].every((yt,Dt)=>yt==="."||nt[Dt]==="h"),J=W&&[...q].every((yt,Dt)=>yt!==q[N]||nt[Dt]==="h"),tt={["sh/"+n]:nt,turn:s,last:{by:n,i:N,r:W?J?"s":"h":"m",t:Date.now()}};X&&(tt.st="done",tt.win=n),e.patch("games/bs",tt)}function P(){let N=r()||zr("lesha");e.set("games/bs",zr(N.starter==="lesha"?"ari":"lesha",(N.n||1)+1)),a=Array(ge*ge).fill("."),o=Mi.map(()=>!1),l=0,c=!0}let F=N=>t(N==="m"?"bsMiss":N==="s"?"bsSunk":"bsHit");function k(){let N=r()||zr("lesha");N.st==="place"&&!(N.ready&&N.ready[n])&&N.n!==k.n&&(k.n=N.n,!o.every(X=>!X)&&N.n>1&&(a=Array(ge*ge).fill("."),o=Mi.map(()=>!1),l=0)),N.st==="place"&&N.ready&&N.ready.lesha&&N.ready.ari&&e.patch("games/bs",{st:"play",turn:N.starter});let R=N.st==="place"&&!(N.ready&&N.ready[n]),V=N.st==="place"&&N.ready&&N.ready[n]&&!N.ready[s];d.style.display=f.style.display=R?"":"none",m.style.display=N.st==="place"?"none":"",C.style.display=N.st==="done"?"":"none",R?(h.textContent=t("placeShips"),h.className="g-status mine",d.replaceChildren(...Mi.map((X,J)=>L("button",{class:"bs-ship"+(o[J]?" placed":"")+(l===J?" sel":""),onclick:()=>{o[J]&&(a=a.map(tt=>tt===String(J)?".":tt),o[J]=!1),l=J,k()}},Array.from({length:X},()=>L("i"))))),f.replaceChildren(L("button",{class:"btn ghost",id:"bs-rot",onclick:()=>{c=!c,k()}},t(c?"horiz":"vert")),L("button",{class:"btn ghost",id:"bs-rand",onclick:_},t("random")),L("button",{class:"btn",id:"bs-ready",disabled:o.some(X=>!X),onclick:b},t("ready")))):V?(h.textContent=t("waitingPlace",{name:i.name(s)}),h.className="g-status"):N.st==="play"?(h.textContent=N.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(s)}),h.className="g-status"+(N.turn===n?" mine":"")):N.st==="done"?(h.textContent=N.win===n?t("youWin"):t("theyWin",{name:i.name(N.win)}),h.className="g-status"+(N.win===n?" mine":"")):(h.textContent=t("placeShips"),h.className="g-status");let q=R?a.join(""):N.b&&N.b[n]||a.join(""),W=N.sh&&N.sh[s]||ml;x.cells.forEach((X,J)=>{let tt=q[J]!==".",yt=W[J];X.className="bs-cell"+(tt?" ship":"")+(yt==="h"?" hit":yt==="m"?" miss":""),X.disabled=!R});let nt=N.sh&&N.sh[n]||ml;if(p.cells.forEach((X,J)=>{let tt=nt[J];X.className="bs-cell"+(tt==="h"?" hit":tt==="m"?" miss":"")+(N.st==="play"&&N.turn===n&&tt==="."?" can":""),X.disabled=!(N.st==="play"&&N.turn===n&&tt===".")}),N.last&&N.st!=="place"){let X=N.last.by===n?t("you"):i.name(N.last.by);u.textContent=`${X} \u2192 ${bf(N.last.i)}: ${F(N.last.r)}`,N.last.by!==n&&N.last.t!==k.seenLast&&(k.seenLast&&i.toast(`${i.name(N.last.by)} \u2192 ${bf(N.last.i)}: ${F(N.last.r)}`),k.seenLast=N.last.t)}else u.textContent=t("bsHint")}return k(),{el:S,update:k,destroy(){}}}var gh=7,mv=["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"],gl=(i,t=1,e)=>({st:"pick",setter:i,w:"",hint:"",g:"",n:t,s:e||{lesha:0,ari:0}});function gv(){return`<svg viewBox="0 0 220 230" class="petal-svg"><path class="st" d="M110 122 C108 160 112 190 110 224"/><ellipse class="lf" cx="86" cy="178" rx="22" ry="9" transform="rotate(-25 86 178)"/><ellipse class="lf" cx="136" cy="198" rx="22" ry="9" transform="rotate(25 136 198)"/>${Array.from({length:gh},(t,e)=>`<ellipse class="pt" data-i="${e}" cx="110" cy="58" rx="17" ry="38" transform="rotate(${e*360/gh} 110 104)"/>`).join("")}<circle class="ct" cx="110" cy="104" r="11"/></svg>`}function Tf(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.hang||null,a=L("div",{class:"ttt-score"}),o=L("div",{class:"g-status",id:"hg-status"}),l=L("div",{class:"petal-art",html:gv()}),c=L("div",{class:"hg-word",id:"hg-word"}),h=L("div",{class:"g-note",id:"hg-hint"}),u=L("div",{class:"hg-body"}),d=L("div",{class:"game hang"},a,o,l,c,h,u),f=null,g=null;function x(S){let w=r()||gl("lesha");Ps(e,"games/hang",r(),w,S)}function p(S){let w=r();if(!w||w.st!=="play"||w.setter===n||(w.g||"").includes(S))return;let A=(w.g||"")+S,_=new Set([...A].filter(F=>!w.w.includes(F))).size,U=[...w.w].every(F=>A.includes(F))?"won":_>=gh?"lost":"play",P={g:A,st:U};U==="won"&&(P["s/"+n]=(w.s&&w.s[n]||0)+1),U==="lost"&&(P["s/"+w.setter]=(w.s&&w.s[w.setter]||0)+1),e.patch("games/hang",P)}function m(){let S=r()||gl("lesha");e.set("games/hang",gl(S.setter==="lesha"?"ari":"lesha",(S.n||1)+1,S.s))}function M(){let S=(f.value||"").toUpperCase().replace(/[^A-Z]/g,"");if(S.length<3){i.toast(t("wordShort"));return}x({w:S,hint:(g.value||"").trim().slice(0,40),st:"play",g:""})}function C(){let S=r()||gl("lesha"),w=S.g||"",A=S.w?new Set([...w].filter(U=>!S.w.includes(U))).size:0;l.querySelectorAll(".pt").forEach((U,P)=>U.classList.toggle("fall",P<A)),a.innerHTML=`<span class="s-l">${i.name("lesha")} ${S.s&&S.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${S.s&&S.s.ari||0}</span>`;let _=S.setter===n;if(c.textContent="",h.textContent=S.hint?t("hintIs",{h:S.hint}):"",S.st==="pick"){_?(o.textContent=t("pickWord"),o.className="g-status mine",u.querySelector("#hg-input")||(f=L("input",{id:"hg-input",maxlength:12,placeholder:"WORD",autocapitalize:"characters",autocomplete:"off",oninput:()=>{f.value=f.value.toUpperCase().replace(/[^A-Z]/g,"")}}),g=L("input",{id:"hg-hintin",maxlength:40,placeholder:t("hintOptional")}),u.replaceChildren(f,g,L("button",{class:"btn big",id:"hg-hide",onclick:M},t("hideWord")),L("p",{class:"g-note"},t("wordHelp"))))):(o.textContent=t("waitingWord",{name:i.name(S.setter)}),o.className="g-status",u.replaceChildren());return}let b=[...S.w].map(U=>w.includes(U)||S.st!=="play"||_?U:"_");if(c.innerHTML=b.map((U,P)=>`<span class="${w.includes(S.w[P])?"got":S.st!=="play"||_?"ghost":""}">${U}</span>`).join(""),S.st==="play")o.className="g-status"+(_?"":" mine"),o.textContent=_?t("watching",{name:i.name(s)}):t("guessLetters"),u.replaceChildren(L("div",{class:"kb"},mv.map(U=>L("div",{class:"kb-row"},[...U].map(P=>L("button",{class:"key"+(w.includes(P)?S.w.includes(P)?" ok":" bad":""),"data-k":P,disabled:_||w.includes(P),onclick:()=>p(P)},P))))));else{let U=S.st==="won";o.textContent=U?_?t("theyGuessed",{name:i.name(s)}):t("youGuessed"):_?t("theyFailed",{name:i.name(s)}):t("wordWas",{w:S.w}),o.className="g-status"+(U!==_?" mine":""),u.replaceChildren(L("button",{class:"btn big",id:"hg-next",onclick:m},t("newRound")))}}return C(),{el:d,update:C,destroy(){}}}var Rt=i=>document.querySelector(i),xl={lesha:{name:{en:"Tula",ru:"\u0422\u0443\u043B\u0430"},lat:54.1931,lon:37.6173,tz:"Europe/Moscow"},ari:{name:{en:"Seattle",ru:"\u0421\u0438\u044D\u0442\u043B"},lat:47.6062,lon:-122.3321,tz:"America/Los_Angeles"}},_v={lesha:"#6ad7ff",ari:"#ff7eb6"},Hr=(i,t)=>({name:{en:t.name.en,ru:t.name.ru},lat:t.lat,lon:t.lon,tz:t.tz,color:_v[i],person:i}),fe={ari:Hr("ari",xl.ari),lesha:Hr("lesha",xl.lesha)},Uf=i=>({name:{en:i.n.en,ru:i.n.ru},lat:i.lat,lon:i.lon,tz:i.tz});try{let i=JSON.parse(localStorage.getItem("g_cities")||"null")||{};for(let t of["lesha","ari"]){let e=i[t];e&&e.n&&e.tz&&(fe[t]=Hr(t,Uf(e)))}}catch{}var Ff=()=>Object.fromEntries(Object.entries(fe).map(([i,t])=>[i,{lat:t.lat,lon:t.lon,color:t.color}])),Tn={lesha:{name:{en:"Lesha",ru:"\u041B\u0435\u0448\u0430"},city:"lesha",get tz(){return fe.lesha.tz}},ari:{name:{en:"Ari",ru:"\u0410\u0440\u0438"},city:"ari",get tz(){return fe.ari.tz}}},Of=["\u{1F60A}","\u{1F970}","\u{1F634}","\u{1F60E}","\u{1F914}","\u{1F622}","\u{1F624}","\u{1F973}","\u{1F912}","\u{1F917}","\u{1F60B}","\u{1F3A7}","\u2615","\u{1F4AA}","\u{1F327}\uFE0F","\u2728"];nf([...Of,...Object.values(uh).flat()]);var T={S:{meta:{},bottles:{},games:{},wx:{}},me:null,other:null,net:null,globe:null,sel:null,units:"c",stack:[],cfg:{},phrase:"",mine:{k:"",today:0,total:0},t:ht,toast:tn,lang:()=>Pe(),name:i=>Tn[i].name[Pe()]};T.t=(i,t)=>Pe()==="ru"?ht(i,{s:T.me==="ari"?"\u0430":"",...t&&t.name!==void 0?{g:t.name===Tn.ari.name.ru?"\u0430":""}:{},...t}):ht(i,t);window.__A=T;var Ds=(i,t=new Date)=>new Intl.DateTimeFormat("en-CA",{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit"}).format(t),Gi=()=>Pe()==="ru"?"ru-RU":"en-US",Ah=(i,t=new Date)=>new Intl.DateTimeFormat(Gi(),{timeZone:i,hour:"numeric",minute:"2-digit",hour12:Pe()!=="ru"}).format(t),xv=(i,t=new Date)=>new Intl.DateTimeFormat(Gi(),{timeZone:i,weekday:"short",month:"short",day:"numeric"}).format(t);function Ef(i,t=new Date){let e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t).map(n=>[n.type,n.value]));return Math.round((Date.UTC(+e.year,+e.month-1,+e.day,+e.hour,+e.minute,+e.second)-Math.floor(t.getTime()/1e3)*1e3)/6e4)}var Xr=()=>Tn[T.me].city,Ls=()=>Tn[T.other].city,vv=i=>T.units==="f"?Math.round(il(i))+"\xB0F":Math.round(i)+"\xB0C",Gr=i=>Math.round(T.units==="f"?il(i):i)+"\xB0";T.ago=i=>{let t=Math.max(0,(Date.now()-i)/1e3),e=new Intl.RelativeTimeFormat(Gi(),{numeric:"auto"});return t<90?e.format(0,"second"):t<3600?e.format(-Math.round(t/60),"minute"):t<86400?e.format(-Math.round(t/3600),"hour"):e.format(-Math.round(t/86400),"day")};var Vr=i=>{let t=Ds(Tn[i].tz),e=T.S.meta.hearts&&T.S.meta.hearts[i]&&T.S.meta.hearts[i][t]||0;return i===T.me&&T.mine.k===t?Math.max(e,T.mine.today):e},Mh=i=>{let t=T.S.meta.heartsTotal&&T.S.meta.heartsTotal[i]||0;return i===T.me?Math.max(t,T.mine.total):t},Bf=(i,t)=>new Date(Date.parse(i+"T00:00:00Z")+t*864e5).toISOString().slice(0,10);function kf(i){let t=T.S.meta.streak&&T.S.meta.streak[i];if(!t||!t.d)return{n:0,lit:!1,best:0};let e=Ds(Tn[i].tz),n=t.d===e;return{n:(n||t.d===Bf(e,-1))&&t.n||0,lit:n,best:Math.max(t.best||0,t.n||0)}}function yv(){let i=T.me,t=Ds(Tn[i].tz),e=T.S.meta.streak&&T.S.meta.streak[i];if(e&&e.d===t)return;let n=e&&e.d===Bf(t,-1)?(e.n||0)+1:1;T.net.set("meta/streak/"+i,{d:t,n,best:Math.max(n,e&&e.best||0)}),n>1&&setTimeout(()=>tn(T.t("streakNew",{n})),1800)}var Mv=i=>{let t=new Intl.PluralRules(Gi()).select(i);return Pe()==="ru"?t==="one"?ht("streakDay"):ht("streakDays"):i===1?ht("streakDay"):ht("streakDays")},vl=()=>T.presAt>0&&Date.now()-T.presAt<5e4&&T.presVal>0,Sh=!1;function Sl(i,t){let e=Rt("#screen"),n=T.stack[T.stack.length-1];n&&n.el.classList.add("under");let s=L("div",{class:"scr"},L("div",{class:"scr-h"},L("button",{class:"back",id:"scr-back",html:Xt.back,onclick:()=>T.pop()}),L("h2",{},i),L("span",{class:"who-dot"+(vl()?" on":""),title:T.name(T.other)})),L("div",{class:"scr-b"},t.el));e.append(s),e.classList.add("open"),T.stack.push({el:s,view:t}),T.globe&&(T.globe.paused=!0),history.pushState({g:T.stack.length},"")}function zf(){let i=T.stack.pop();if(!i)return;i.view.destroy&&i.view.destroy(),i.el.classList.add("out"),setTimeout(()=>i.el.remove(),280);let t=T.stack[T.stack.length-1];t?(t.el.classList.remove("under"),t.view.update&&t.view.update()):(Rt("#screen").classList.remove("open"),T.globe&&(T.globe.paused=!1))}T.push=Sl;T.pop=()=>{if(!T.stack.length)return;let i=T.stack.length;Sh=!0,history.back(),setTimeout(()=>{T.stack.length===i&&zf(),Sh=!1},350)};T.replace=(i,t)=>{let e=T.stack.pop();e&&(e.view.destroy&&e.view.destroy(),e.el.remove());let n=T.stack[T.stack.length-1];n&&n.el.classList.remove("under");let s=Rt("#screen"),r=L("div",{class:"scr"},L("div",{class:"scr-h"},L("button",{class:"back",id:"scr-back",html:Xt.back,onclick:()=>T.pop()}),L("h2",{},i),L("span",{class:"who-dot"+(vl()?" on":"")})),L("div",{class:"scr-b"},t.el));n&&n.el.classList.add("under"),s.append(r),T.stack.push({el:r,view:t})};window.addEventListener("popstate",()=>{T.stack.length&&(zf(),Sh=!1)});var Th=()=>T.stack.forEach(i=>i.view.update&&i.view.update());T.pruneBottles=()=>{let i=Object.entries(T.S.bottles||{}).map(([e,n])=>({id:e,...n})).sort((e,n)=>e.t-n.t);if(i.length<=60)return;let t=i.filter(e=>e.r);for(let e of t.slice(0,i.length-50))T.net.remove("bottles/"+e.id)};var Wr=new Set;T.afterBottleSent=i=>{Wr.add(i),yl(),T.globe.launchBottle(Xr(),Ls(),()=>{Wr.delete(i),yl()}),tn(ht("bottleSent"))};function yl(){let i=0,t=0;for(let[e,n]of Object.entries(T.S.bottles||{}))n.r||Wr.has(e)||(n.f===T.me?t++:i++);for(let[e,n]of Object.entries(fe)){let s=Vi[e];if(!s)continue;let r=n.person===T.me,a=r?i:t,o=a?r?"in":"out":"";if(s.bst!==o){let l=s.bst;s.bst=o,s.bt.className="bt"+(o?" on "+o:""),s.bt.removeAttribute("style"),o==="in"&&T.booted&&(s.bt.offsetWidth,s.bt.classList.add("land"),navigator.vibrate&&navigator.vibrate([12,40,12])),s.chip.classList.toggle("alert",o==="in"),s.btH=o?30:0,Si(),!o&&l==="in"&&s.chip.style.removeProperty("--bl")}s.bt.dataset.n=a>1?a:"",T.globe.setAlert(e,o==="in")}}var Sv=()=>Object.values(T.S.bottles||{}).filter(i=>i.f!==T.me&&!i.r).length;function Hf(){let i=T.S.games||{},t=T.me;return{ttt:!!(i.ttt&&!i.ttt.w&&i.ttt.turn===t),bs:!!(i.bs&&(i.bs.st==="place"&&!(i.bs.ready&&i.bs.ready[t])||i.bs.st==="play"&&i.bs.turn===t)),hang:!!(i.hang&&(i.hang.st==="pick"&&i.hang.setter===t||i.hang.st==="play"&&i.hang.setter!==t))}}function bv(){let i=new URLSearchParams(location.hash.replace(/^#/,""));return{k:i.get("k")||"",me:i.get("me")||""}}function wv(i){return new Promise(t=>{let e=i.me==="lesha"||i.me==="ari"?i.me:"",n=L("input",{id:"setup-word",placeholder:"\u2026",autocomplete:"off",autocapitalize:"none",value:i.k}),s=L("div",{class:"err"}),r=u=>L("button",{class:"who-btn"+(e===u?" on":""),"data-who":u,onclick:()=>{e=u,l()}},Tn[u].name[Pe()]),a=r("lesha"),o=r("ari"),l=()=>{a.classList.toggle("on",e==="lesha"),o.classList.toggle("on",e==="ari")},c=L("button",{class:"btn big",id:"setup-go",onclick:()=>{if(!e){s.textContent=ht("needWho");return}if(!n.value.trim()){s.textContent=ht("needWord");return}h.remove(),t({me:e,phrase:n.value.trim()})}},ht("openGlobe")),h=L("div",{class:"setup",id:"setup"},L("div",{class:"setup-card glass"},L("div",{class:"logo",html:Xt.heart}),L("h1",{},ht("setupTitle")),L("p",{},ht("setupSub")),L("h3",{},ht("whoAreYou")),L("div",{class:"row"},a,o),L("h3",{},ht("secretWord")),n,L("p",{class:"small"},ht("secretHint")),s,c));document.body.append(h),e&&i.k&&c.click()})}var Vi={};function Av(){let i=Rt("#labels");i.replaceChildren();for(let[t,e]of Object.entries(fe)){let n=L("div",{class:"cl","data-city":t,"data-who":e.person||"",style:{opacity:0}},L("button",{class:"bt","data-city":t,"aria-label":ht("bottle"),html:Xt.bottle,onclick:()=>Wf(t)}),L("div",{class:"l1"},L("b",{class:"cn"}),L("span",{class:"cm"})),L("div",{class:"l2"},L("span",{class:"ct"}),L("span",{class:"cw"})));i.append(n),Vi[t]={chip:n,bt:n.querySelector(".bt"),cn:n.querySelector(".cn"),cm:n.querySelector(".cm"),ct:n.querySelector(".ct"),cw:n.querySelector(".cw"),bst:"",btH:0}}}function Si(){for(let[i,t]of Object.entries(fe)){let e=Vi[i];if(!e)continue;e.cn.textContent=t.name[Pe()].toUpperCase(),e.ct.textContent=Ah(t.tz);let n=T.S.wx[i];if(n&&n.current){let s=n.current;e.cw.innerHTML=Xt[Ur(s.weather_code,s.is_day)]+`<span>${Gr(s.temperature_2m)}</span>`}else e.cw.textContent="";e.w=e.chip.offsetWidth,e.hh=e.chip.offsetHeight}}function bl(){for(let[i,t]of Object.entries(fe)){let e=Vi[i];if(!e||!t.person||t.person===T.me&&T.moodHold)continue;let n=T.S.meta.mood&&T.S.meta.mood[t.person];(e.cm.dataset.e||"")!==(n?n.e:"")&&(e.cm.dataset.e=n?n.e:"",e.cm.innerHTML=n?Br(n.e):"")}}function Tv(){let i=T.globe;if(!i||!i.earth)return;let t=innerWidth,e=[];for(let[n,s]of Object.entries(Vi)){let r=i.cityScreen(n),a=r.x>t*.55,o=a?{dx:-14,dy:11}:{dx:15,dy:11};s.r!==a&&(s.r=a,s.chip.classList.toggle("r",a));let l=s.w||80,c=r.x+o.dx;c=a?Math.min(Math.max(c,l+12),t-12):Math.min(Math.max(c,12),t-l-12);let h=r.y+o.dy-(s.btH||0),u=a?c-l:c,d={x0:u,x1:u+l,y0:h,y1:h+(s.hh||34)},f=e.some(x=>d.x0<x.x1+6&&d.x1>x.x0-6&&d.y0<x.y1+4&&d.y1>x.y0-4);r.visible&&!f&&e.push(d);let g=r.visible&&!f&&!T.sel;s.chip.style.opacity=g?1:0,s.chip.classList.toggle("hid",!g),s.bst==="in"&&s.chip.style.setProperty("--bl",i.blink.toFixed(3)),s.chip.style.transform=`translate3d(${c.toFixed(1)}px,${h.toFixed(1)}px,0) translateX(${a?"-100%":"0"})`}}async function Eh(i,t){let e=await Yd(i,fe[i],{force:t});e&&(T.S.wx[i]=e,Si(),T.sel===i&&Us())}var _h=i=>Object.keys(fe).forEach(t=>Eh(t,i));function Ch(i,t){let e=t?Hr(i,Uf(t)):Hr(i,xl[i]),n=fe[i];if(Math.abs(n.lat-e.lat)<1e-4&&Math.abs(n.lon-e.lon)<1e-4)return n.name=e.name,!1;T.sel===i&&bi(),qd(i),delete T.S.wx[i],fe[i]=e;try{let s=JSON.parse(localStorage.getItem("g_cities")||"null")||{};t?s[i]={n:t.n,lat:t.lat,lon:t.lon,tz:t.tz}:delete s[i],localStorage.setItem("g_cities",JSON.stringify(s))}catch{}return T.globe&&(T.globe.syncCities(Ff()),T.globe.setArc("lesha","ari")),Si(),ti(),Eh(i),!0}function Ev(i){let t={n:i.n,lat:i.lat,lon:i.lon,tz:i.tz,t:Date.now()};Ch(T.me,t),T.net.set("meta/city/"+T.me,t),bi(),T.globe.viewBoth(1800)}function Cv(){Ch(T.me,null),T.net.remove("meta/city/"+T.me),bi(),T.globe.viewBoth(1800)}function xh(i,t){t=String(t),i.textContent!==t&&(i.textContent=t,T.booted&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")))}function ti(){let i=T.me,t=T.other;Rt("#hp-me-n").textContent=ht("you"),xh(Rt("#hp-me"),Vr(i)),Rt("#hp-ot-n").textContent=T.name(t),xh(Rt("#hp-ot"),Vr(t)),Rt("#hp-dot").classList.toggle("on",vl());for(let[u,d]of[[i,"me"],[t,"ot"]]){let f=kf(u);xh(Rt("#hp-"+d+"-s"),f.n),Rt("#fl-"+d).classList.toggle("lit",f.lit&&f.n>0),Rt("#fl-"+d).classList.toggle("off",f.n===0)}let e=T.S.meta.meet,n=Rt("#meet-t");if(!e||!e.d)n.textContent=ht("meetSet");else{let u=Ds(Tn[i].tz),d=Math.round((Date.parse(e.d+"T00:00:00Z")-Date.parse(u+"T00:00:00Z"))/864e5);n.textContent=d>1?ht("meetDays",{n:d}):d===1?ht("meetOne"):d===0?ht("meetToday"):ht("meetAgo",{n:-d})}let s=T.S.meta.mood&&T.S.meta.mood[i],r=Rt("#mood-e");T.moodHold||(s?(r.classList.add("emo"),r.dataset.e!==s.e&&(r.dataset.e=s.e,r.innerHTML=Br(s.e))):(r.classList.contains("emo")||!r.querySelector("svg"))&&(r.classList.remove("emo"),delete r.dataset.e,r.innerHTML=Xt.smile));let a=Hf(),o=Object.values(a).filter(Boolean).length,l=Rt("#b-games .badge");l.textContent=o||"",l.style.display=o?"":"none";let c=Rt("#b-bottles .badge"),h=T.S.bottles?Sv():0;c.textContent=h||"",c.style.display=h?"":"none",document.querySelectorAll(".scr-h .who-dot").forEach(u=>u.classList.toggle("on",vl()))}function Gf(){document.querySelectorAll("[data-ic]").forEach(i=>{i.dataset.done||(i.innerHTML=Xt[i.dataset.ic],i.dataset.done=1)}),document.querySelectorAll("[data-i]").forEach(i=>{i.textContent=ht(i.dataset.i)}),document.title=ht("app")}function Rv(i){return $d(i,12).map(t=>{let e=+t.time.slice(11,13),n=Pe()==="ru"?String(e).padStart(2,"0"):(e%12||12)+(e<12?"a":"p"),s=nl(t.code,t.day,Pe());return`<div class="hr"><small>${n}</small><span>${Xt[Ur(t.code,t.day)]}</span><b>${Gr(t.temp)}</b></div>`}).join("")}function Pv(i){return i.daily?i.daily.time.slice(0,4).map((t,e)=>{let n=nl(i.daily.weather_code[e],1,Pe()),s=new Intl.DateTimeFormat(Gi(),{weekday:"short"}).format(new Date(t+"T12:00:00"));return`<div class="dy"><span class="dn">${pe(s)}</span><span>${Xt[Ur(i.daily.weather_code[e],1)]}</span><span class="dd">${pe(n.text)}</span><b>${Gr(i.daily.temperature_2m_max[e])}</b><small>${Gr(i.daily.temperature_2m_min[e])}</small></div>`}).join(""):""}function Iv(i){let t=fe[i],e=T.S.wx[i],n=Pe(),s=t.person,r=`<div class="sh-head"><div><h2>${pe(t.name[n])}</h2></div><button class="x" id="sh-x" aria-label="${pe(ht("close"))}">${Xt.close}</button></div>`;if(r+='<div class="sh-clock"><b id="sh-time"></b><span id="sh-date"></span></div>',s){let a=T.S.meta.mood&&T.S.meta.mood[s],o=s===T.me;r+=`<div class="who"><div class="who-l"><span class="av">${a?Br(a.e):Xt.heartO}</span><div><b>${pe(T.name(s))}</b><small>${a?pe(T.ago(a.t)):pe(ht("noMood"))}</small></div></div>`,r+=`<div class="who-r"><div class="hc"><span>${Xt.heartO}</span> <b id="sh-hc">${Vr(s)}</b><small>${pe(ht("today"))}</small></div>`,r+=o?`<button class="mini" id="sh-mood" aria-label="${pe(ht("setMood"))}">${a?Br(a.e):Xt.smile}</button>`:`<button class="mini send" id="sh-heart" aria-label="${pe(ht("sendHeart"))}">${Xt.heart}</button>`,r+="</div></div>"}if(e&&e.current){let a=e.current,o=nl(a.weather_code,a.is_day,n),l=T.units==="f"?Math.round(a.temperature_2m)+"\xB0C":Math.round(il(a.temperature_2m))+"\xB0F",c=T.units==="f"?Math.round(Xd(a.wind_speed_10m))+" "+ht("mph"):Math.round(a.wind_speed_10m)+" "+ht("ms");r+=`<div class="wx"><div class="wx-main"><span class="wx-ic">${Xt[Ur(a.weather_code,a.is_day)]}</span><div><div class="wx-t">${vv(a.temperature_2m)} <small>${l}</small></div><div class="wx-d">${pe(o.text)}</div></div><button class="unit" id="sh-unit">${T.units==="f"?"\xB0F \u2192 \xB0C":"\xB0C \u2192 \xB0F"}</button></div>`,r+=`<div class="wx-meta"><span>${pe(ht("feels"))} <b>${Gr(a.apparent_temperature)}</b></span><span>${pe(ht("wind"))} <b>${pe(c)}</b></span><span>${pe(ht("humidity"))} <b>${Math.round(a.relative_humidity_2m)}%</b></span></div>`,r+=`<div class="hours">${Rv(e)}</div><div class="days">${Pv(e)}</div>`,e.daily&&e.daily.sunrise&&(r+=`<div class="sun"><span>${pe(ht("sunrise"))}<b>${e.daily.sunrise[0].slice(11,16)}</b></span><span>${pe(ht("sunset"))}<b>${e.daily.sunset[0].slice(11,16)}</b></span></div>`),r+="</div>"}else r+=`<div class="wx empty">${pe(ht("noWeather"))}</div>`;if(s){let a=fe.lesha,o=fe.ari,l=Math.round((Ef(a.tz)-Ef(o.tz))/60),c=Math.round(Gd(a,o));if(c<40)return r+`<div class="dist">${pe(ht("sameCity"))}</div>`;let h=l===0?ht("timeSame",{a:a.name[n],b:o.name[n]}):ht("timeAhead",{a:(l>0?a:o).name[n],b:(l>0?o:a).name[n],h:Math.abs(l)});r+=`<div class="dist">${pe(h)}<br>${pe(ht("distance",{km:c.toLocaleString(Gi()),mi:Math.round(c*.621371).toLocaleString(Gi())}))}</div>`}return r}var Ml="";function Vf(){if(!T.sel)return;let i=Rt("#sh-time"),t=Rt("#sh-date");i&&(i.textContent=Ah(fe[T.sel].tz)),t&&(t.textContent=xv(fe[T.sel].tz))}function Us(){if(!T.sel)return;let i=Iv(T.sel);if(i===Ml)return;Ml=i;let t=Rt("#sheet-body"),e=t.scrollTop;t.innerHTML=i,t.scrollTop=e,Vf()}function Cf(i){T.sel=i,Ml="",T.globe.setSelected(i),T.globe.focusCity(i),T.globe.setSheetOpen(!0),Rt("#sheet").classList.add("open"),Rt("#app").classList.add("sheet-open"),Rt("#sheet-body").scrollTop=0,Us(),[...Rt("#sheet-body").children].forEach((t,e)=>{t.classList.add("rise"),t.style.animationDelay=(.06+e*.055).toFixed(3)+"s"}),T.globe.pulseCity(i),Eh(i)}var vh=!1;function Wf(i){if(vh)return;let t=fe[i],e=t&&t.person===T.me?hh(T):[];if(!e.length){Cf(i);return}vh=!0,bi(),T.globe.focusCity(i),T.globe.pulseCity(i),ch(T,e[0].id,{others:e.length-1,onLeave:()=>{vh=!1},onClose:()=>Cf(i)})}function bi(){T.sel&&(T.sel=null,Ml="",T.globe.setSelected(null),T.globe.setSheetOpen(!1),Rt("#sheet").classList.remove("open"),Rt("#app").classList.remove("sheet-open"))}var _l=0,Rf=null,Pf=0;function Lv(){let i=Rt("#b-heart"),t=i.getBoundingClientRect(),e=Rt("#fx"),n=L("i",{class:"rip"});for(i.append(n),n.addEventListener("animationend",()=>n.remove());e.children.length>26;)e.firstChild.remove();let s=["#ff5c9d","#ff8cc0","#ffb3d4","#ffd27a"],r=3+Math.floor(Math.random()*2);for(let a=0;a<r;a++){let o=12+Math.random()*14,l=L("i",{class:"fxh",html:Xt.heart});l.style.cssText=`left:${t.left+t.width/2+(Math.random()-.5)*22}px;top:${t.top+t.height*.3}px;--s:${o}px;--c:${s[Math.random()*s.length|0]};--dx:${(Math.random()-.5)*120}px;--dy:${-(110+Math.random()*130)}px;--r:${(Math.random()-.5)*70}deg;--t:${(.9+Math.random()*.7).toFixed(2)}s;animation-delay:${(a*.045).toFixed(3)}s`,l.addEventListener("animationend",()=>l.remove()),e.append(l)}}function If(){let i=T.me,t=Ds(Tn[i].tz);T.mine.k!==t&&(T.mine={k:t,today:Vr(i),total:Mh(i)}),T.mine.today++,T.mine.total++,_l++,T.net.set(`meta/hearts/${i}/${t}`,T.mine.today),T.net.set(`meta/heartsTotal/${i}`,T.mine.total),clearTimeout(Rf),Rf=setTimeout(bh,500);let e=performance.now();e-Pf>160&&(Pf=e,T.globe.launchHearts(Xr(),Ls(),1));let n=Rt("#b-heart");if(n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),Lv(),navigator.vibrate&&navigator.vibrate(12),ti(),bl(),T.sel){let s=Rt("#sh-hc");s&&fe[T.sel].person===i&&(s.textContent=Vr(i))}}function bh(){if(!_l)return;let i=_l;_l=0,T.net.set(`meta/lastHeart/${T.me}`,{n:i,t:Date.now()})}function Nv(i){T.globe.launchHearts(Ls(),Xr(),Math.min(i,6)),tn(ht("heartsIn",{name:T.name(T.other),n:i})),navigator.vibrate&&navigator.vibrate([20,40,20])}var Is=!1;function Dv(){let i=T.S.meta,t=T.me,e=T.other,n=Ds(Tn[t].tz),s=i.hearts&&i.hearts[t]&&i.hearts[t][n]||0,r=i.heartsTotal&&i.heartsTotal[t]||0;T.mine.k!==n?T.mine={k:n,today:s,total:Math.max(r,T.mine.total)}:(T.mine.today=Math.max(T.mine.today,s),T.mine.total=Math.max(T.mine.total,r));let a=i.lastHeart&&i.lastHeart[e];T.lastSeenHeart==null?T.lastSeenHeart=a?a.t:0:a&&a.t>T.lastSeenHeart&&(T.lastSeenHeart=a.t,Nv(a.n||1));let o=i.heartsTotal&&i.heartsTotal[e]||0,l="g_seen_"+e;if(!Is){let x=+localStorage.getItem(l)||0;x&&o>x&&tn(ht("whileAway",{n:o-x,name:T.name(e)}),4200)}o&&localStorage.setItem(l,o);let c=i.presence&&i.presence[e]||0;Is?c!==T.presVal&&(T.presVal=c,T.presAt=Date.now()):(T.presVal=c,T.presAt=0);let h=i.mood&&i.mood[e],u=h?h.e+":"+h.t:"";Is?u!==T.moodKey&&(T.moodKey=u,h&&Date.now()-h.t<3e5&&(T.pendingMood=h.e)):T.moodKey=u;let d=i.ingame&&i.ingame[e],f=d?d.g+":"+d.n:"";Is?f!==T.igKey&&(T.igKey=f,d&&(T.igAt=Date.now()),d&&d.g!==T.igGame&&Ns[d.g]&&wi!==d.g&&navigator.vibrate&&navigator.vibrate([10,40,10]),T.igGame=d?d.g:"",Th()):(T.igKey=f,T.igGame=d?d.g:"",T.igAt=d&&Math.abs(Date.now()-d.n)<45e3?Date.now():0);let g=!Is;Is=!0;for(let x of["lesha","ari"]){let p=i.city&&i.city[x]&&i.city[x].n&&i.city[x].tz?i.city[x]:null;Ch(x,p)&&!g&&x!==T.me&&tn(ht("cityMoved",{name:T.name(x),city:fe[x].name[Pe()]}),4200)}if(g&&yv(),ti(),bl(),T.pendingMood){let x=T.pendingMood;T.pendingMood=null,Ov(x)}T.sel&&Us(),wl()}var Lf=!1;function Uv(){let i=T.S.bottles||{};if(!Lf)T.seenBottles=new Set(Object.keys(i)),Lf=!0;else for(let[t,e]of Object.entries(i))T.seenBottles.has(t)||(T.seenBottles.add(t),e.f!==T.me&&(Wr.add(t),T.globe.launchBottle(Ls(),Xr(),()=>{Wr.delete(t),yl()}),tn(ht("bottleArrived",{name:T.name(T.other)}),4e3),navigator.vibrate&&navigator.vibrate([15,30,15])));yl(),ti(),Th()}function Fv(i,t,e){let n=t.getBoundingClientRect(),r=(T.sel&&Rt("#sh-mood")||Rt("#mood-e")).getBoundingClientRect();T.moodHold=!0,T.net.set("meta/mood/"+T.me,{e:i,t:Date.now()}),e.close();let a=()=>{if(!T.moodHold)return;T.moodHold=!1,ti(),bl(),dl(T.sel&&Rt("#sh-mood")||Rt("#mood-e"));let o=Vi[Xr()];o&&o.cm.dataset.e&&dl(o.cm),navigator.vibrate&&navigator.vibrate(14)};of(i,n,r,a),setTimeout(a,3e3)}function Nf(){let i=T.S.meta.mood&&T.S.meta.mood[T.me]&&T.S.meta.mood[T.me].e,t=Of.map((n,s)=>{let r=L("button",{class:"mood"+(n===i?" on":""),"data-e":n,onclick:()=>Fv(n,r,e)},ef(n));return r.style.setProperty("--i",s),r}),e=Fn(L("div",{},L("h3",{},ht("moodTitle")),L("div",{class:"mood-grid"},t),i?L("button",{class:"btn ghost",onclick:()=>{T.net.remove("meta/mood/"+T.me),e.close()}},ht("moodClear")):null))}function Ov(i){let t=Vi[Ls()],e=T.globe.cityScreen(Ls());if(!t||!e.visible||T.sel||t.chip.style.opacity!=="1"||!t.cm.dataset.e){tn(T.name(T.other)+" "+i,2600);return}let n=t.cm.getBoundingClientRect(),s=hl(n);lf(i,s.x,s.y),setTimeout(()=>dl(t.cm),380)}function Bv(){let i=T.S.meta.meet&&T.S.meta.meet.d,t=L("input",{type:"date",id:"meet-input",value:i||""}),e=Fn(L("div",{},L("h3",{},ht("meetTitle")),t,L("div",{class:"row"},i?L("button",{class:"btn ghost",onclick:()=>{T.net.remove("meta/meet"),e.close()}},ht("meetClear")):null,L("button",{class:"btn",id:"meet-save",onclick:()=>{t.value&&T.net.set("meta/meet",{d:t.value,t:Date.now()}),e.close()}},ht("meetSave")))))}function kv(){let i=t=>{let e=kf(t);return L("div",{class:"sk-row"+(e.lit?" lit":"")},L("div",{class:"sk-fire",html:Xt.flame}),L("div",{class:"sk-info"},L("b",{},T.name(t)+(t===T.me?" \xB7 "+ht("you"):"")),L("small",{},e.n?T.t("streakNow",{n:e.n,d:Mv(e.n)}):"\u2014"),L("small",{},e.lit?T.t("streakLit",{name:T.name(t)}):T.t("streakWait",{name:T.name(t)}))),L("div",{class:"sk-n"},e.n,e.best>1?L("small",{},T.t("streakBest",{n:e.best})):null))};Fn(L("div",{class:"streak-modal"},L("h3",{},ht("streakTitle")),i(T.me),i(T.other),L("div",{class:"sk-tot"},L("span",{html:Xt.heartO},ht("heartsTotal")),L("b",{},Mh("lesha")+Mh("ari"))),L("p",{class:"small"},ht("streakHint"))))}function zv(){let i=ht("status_"+(T.net.status||"connecting"))||"",t=()=>`${location.origin}${location.pathname}#k=${encodeURIComponent(T.phrase)}&me=${T.other}`,e=(r,a)=>L("button",{class:"seg"+(Pe()===r?" on":""),onclick:()=>{Hv(r),s.close()}},a),n=(r,a)=>L("button",{class:"seg"+(T.units===r?" on":""),onclick:()=>{T.units=r,localStorage.setItem("g_units",r),Si(),Us(),s.close()}},a),s=Fn(L("div",{class:"settings"},L("h3",{},ht("settings")),L("label",{},ht("language")),L("div",{class:"row"},e("en","English"),e("ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439")),L("label",{},ht("tempUnits")),L("div",{class:"row"},n("c","\xB0C"),n("f","\xB0F")),L("label",{},ht("myCity")),L("button",{class:"btn ghost city-btn",id:"set-city",onclick:()=>{s.close();let r=xl[T.me],a=Math.abs(fe[T.me].lat-r.lat)>1e-4||Math.abs(fe[T.me].lon-r.lon)>1e-4;setTimeout(()=>pf(T,{fmtTime:Ah,canReset:a,resetName:r.name[Pe()],onPick:Ev,onReset:Cv}),220)}},L("span",{},fe[T.me].name[Pe()]),L("i",{html:Xt.chevron})),L("button",{class:"btn ghost",id:"set-share",onclick:async()=>{try{await navigator.clipboard.writeText(t()),tn(ht("linkCopied"))}catch{window.prompt("",t())}}},ht("shareLink",{name:T.name(T.other)})),L("label",{},ht("serverStatus")),L("p",{class:"small",id:"set-status"},i),L("button",{class:"btn ghost danger",id:"set-reset",onclick:async()=>{await Rs(ht("switchConfirm"),ht("yes"),ht("no"))&&(["g_me","g_phrase"].forEach(r=>localStorage.removeItem(r)),location.hash="",location.reload())}},ht("switchPerson")),L("p",{class:"small credits"},ht("credits"))))}function Hv(i){rl(i),localStorage.setItem("g_lang",i),Gf(),Si(),ti(),bl(),Us()}var Ns={canvas:{icon:"pen",title:"g_canvas",desc:"g_canvas_d",make:()=>ll(T)},theme:{icon:"bulb",title:"g_theme",desc:"g_theme_d",make:()=>yf(T)},ttt:{icon:"hash",title:"g_ttt",desc:"g_ttt_d",make:()=>Sf(T)},bs:{icon:"anchor",title:"g_bs",desc:"g_bs_d",make:()=>Af(T)},hang:{icon:"petal",title:"g_hang",desc:"g_hang_d",make:()=>Tf(T)}},wi=null,yh=0,wh=()=>{wi&&document.visibilityState==="visible"&&T.net.set("meta/ingame/"+T.me,{g:wi,n:Date.now()})};function Df(i){wi=i,clearInterval(yh),yh=0,i?(wh(),yh=setInterval(wh,15e3)):T.net.remove("meta/ingame/"+T.me),wl()}function Xf(i){let t=Ns[i];if(!t)return;let e=t.make(),n=T.stack[T.stack.length-1],s={el:e.el,update:e.update,game:i,destroy(){e.destroy&&e.destroy(),wi===i&&Df(null)}};bi(),n&&n.view.game?T.replace(ht(t.title),s):Sl(ht(t.title),s),Df(i)}var qf=()=>{let i=T.S.meta.ingame&&T.S.meta.ingame[T.other];return i&&Ns[i.g]&&T.igAt&&Date.now()-T.igAt<45e3?i.g:""};function wl(){let i=Rt("#invite");if(!i||!T.net)return;let t=qf();t||(T.invOff="");let e=t&&wi!==t&&T.invOff!==t?t:"";if(e===(T.invKey||""))return;T.invKey=e;let n=i.firstElementChild;if(n&&(n.classList.add("out"),setTimeout(()=>n.remove(),360)),!e)return;let s=Ns[e],r=L("div",{class:"invite",id:"invite-pill","data-game":e},L("span",{class:"iv-ic",html:Xt[s.icon]}),L("span",{class:"iv-t"},L("b",{},ht("inviteTitle",{name:T.name(T.other)})),L("small",{},ht(s.title))),L("button",{class:"iv-go",id:"inv-join",onclick:()=>Xf(e)},ht("inviteJoin")),L("button",{class:"iv-x",id:"inv-x","aria-label":ht("close"),html:Xt.close,onclick:()=>{T.invOff=e,wl()}}));i.append(r)}function Gv(){let i={},t=Object.entries(Ns).map(([s,r])=>{let a=L("span",{class:"gs"});return i[s]=a,L("button",{class:"g-card",id:"gc-"+s,onclick:()=>Xf(s)},L("span",{class:"gi",html:Xt[r.icon]}),L("div",{class:"gt"},L("b",{},ht(r.title)),L("small",{},ht(r.desc))),a)}),e=L("div",{class:"game hub"},t);function n(){let s=Hf(),r=qf();for(let a of Object.keys(Ns)){let o=s[a]?ht("yourTurnBadge"):r===a?ht("hereBadge",{name:T.name(T.other)}):"";i[a].textContent=o,i[a].classList.toggle("on",!!o)}}n(),Sl(ht("gamesTitle"),{el:e,update:n,destroy(){}})}async function Vv(){let i=Rt("#loader");T.cfg=await fetch("config.json?_="+Date.now()).then(u=>u.json()).catch(()=>({}));let t=bv(),e=localStorage.getItem("g_me"),n=localStorage.getItem("g_phrase"),s=localStorage.getItem("g_lang");if(rl(s||"en"),!e||!n){i.classList.add("hide");let u=await wv(t);e=u.me,n=u.phrase,localStorage.setItem("g_me",e),localStorage.setItem("g_phrase",n),s||(rl(e==="lesha"?"ru":"en"),localStorage.setItem("g_lang",Pe())),i.classList.remove("hide")}(t.k||t.me)&&history.replaceState(null,"",location.pathname+location.search),T.me=e,T.other=e==="lesha"?"ari":"lesha",T.phrase=n,T.units=localStorage.getItem("g_units")||(e==="ari"?"f":"c"),Gf();let r=await Vd(n);T.net=new el(T.cfg.db,r),T.net.onStatus(u=>{let d=Rt("#set-status");d&&(d.textContent=ht("status_"+u)),Rt("#app").dataset.net=u});let a=Rt("#gl"),o=new tl(a,{onPick:u=>{if(!u)return bi();u.type==="city"&&Wf(u.id)}});T.globe=o,window.__g=o;try{await o.init("assets/",u=>{Rt("#loader .bar i").style.width=Math.round(u*100)+"%"})}catch(u){console.error(u),Rt("#loader p").textContent=ht("noWebgl");return}o.setCities(Ff()),o.setArc("lesha","ari");let l=location.search.includes("nointro");l?o.viewBoth(0):o.intro(),Av(),Si(),ti(),o.onFrame=Tv,o.start(),i.classList.add("hide"),Rt("#app").classList.add("live"),setTimeout(()=>{Rt("#labels").classList.add("show"),T.booted=!0},l?0:2100),T.net.listen("meta",u=>{T.S.meta=u||{},Dv()}),T.net.listen("bottles",u=>{T.S.bottles=u||{},Uv()}),T.net.listen("games",u=>{T.S.games=u||{},ti(),Th()}),Rt("#b-heart").addEventListener("click",If),Rt("#b-games").addEventListener("click",Gv),Rt("#b-bottles").addEventListener("click",()=>Sl(ht("bottles"),tf(T))),Rt("#b-mood").addEventListener("click",Nf),Rt("#b-both").addEventListener("click",()=>{bi(),o.viewBoth(1400)}),Rt("#btn-set").addEventListener("click",zv),Rt("#meet").addEventListener("click",Bv),Rt("#hearts-pill").addEventListener("click",kv),Rt("#sheet").addEventListener("click",u=>{u.target.closest("#sh-x")?bi():u.target.closest("#sh-heart")?If():u.target.closest("#sh-mood")?Nf():u.target.closest("#sh-unit")&&(T.units=T.units==="f"?"c":"f",localStorage.setItem("g_units",T.units),Si(),Us())}),_h(),setInterval(()=>_h(),900*1e3),setInterval(()=>{Si(),Vf(),ti(),wl()},1e3);let c=()=>{document.visibilityState==="visible"&&T.net.set("meta/presence/"+T.me,Date.now())};c(),setInterval(c,2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(bh(),T.net.set("meta/presence/"+T.me,0),wi&&T.net.remove("meta/ingame/"+T.me)):(c(),wh(),_h(),o._updateSun())}),window.addEventListener("pagehide",()=>{bh(),T.net.set("meta/presence/"+T.me,0),wi&&T.net.remove("meta/ingame/"+T.me)}),"serviceWorker"in navigator&&!location.search.includes("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});let h=()=>{(window.scrollY||window.scrollX)&&window.scrollTo(0,0);let u=document.scrollingElement;u&&u.scrollTop&&(u.scrollTop=0),Rt("#app").scrollTop=0};document.addEventListener("focusout",()=>setTimeout(h,80)),window.addEventListener("scroll",h,{passive:!0}),window.__ready=!0}Vv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

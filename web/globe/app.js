(()=>{var tu=0,ql=1,eu=2;var mr=1,nu=2,_s=3,hi=0,Ue=1,nn=2,Pi=0,ui=1,fn=2,Yl=3,$l=4,iu=5;var Ii=100,su=101,ru=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,Zl=204,Jl=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,xu=212,vu=213,yu=214,ua=0,da=1,fa=2,ss=3,pa=4,ma=5,ga=6,_a=7,Kl=0,Mu=1,Su=2,Dn=0,jl=1,Ql=2,tc=3,ec=4,nc=5,ic=6,sc=7;var rc=300,Li=301,xs=302,Za=303,Ja=304,rs=1e3,Rn=1001,xa=1002,Ce=1003,bu=1004;var gr=1005;var Ye=1006,Ka=1007;var $n=1008;var Ke=1009,ac=1010,oc=1011,vs=1012,ja=1013,Sn=1014,bn=1015,wn=1016,Qa=1017,to=1018,Di=1020,lc=35902,cc=35899,hc=1021,uc=1022,An=1023,Xn=1026,Zn=1027,dc=1028,eo=1029,di=1030,no=1031;var io=1033,_r=33776,xr=33777,vr=33778,yr=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37488,fo=37489,Mr=37490,po=37491,mo=37808,go=37809,_o=37810,xo=37811,vo=37812,yo=37813,Mo=37814,So=37815,bo=37816,wo=37817,Ao=37818,To=37819,Eo=37820,Co=37821,Ro=36492,Po=36494,Io=36495,Lo=36283,Do=36284,Sr=36285,No=36286;var Vs=2300,va=2301,la=2302,Bl=2303,kl=2400,zl=2401,Hl=2402;var wu=3200;var fc=0,Au=1,Tn="",Xe="srgb",Gs="srgb-linear",Ws="linear",te="srgb";var ca=7680;var Tu=519,Eu=512,Cu=513,Ru=514,pc=515,Pu=516,Iu=517,mc=518,gc=519,_c=35044;var xc="300 es",un=2e3,as=2001;function Sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lu(){let i=os("canvas");return i.style.display="block",i}var Mh={},ls=null;function Xs(...i){let t="THREE."+i.shift();ls?ls("log",t,...i):console.log(t,...i)}function Du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=Du(i);let t="THREE."+i.shift();if(ls)ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=Du(i);let t="THREE."+i.shift();if(ls)ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){let t=i.join(" ");t in Mh||(Mh[t]=!0,It(...i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[ua]:ua,[fa]:ga,[pa]:pa,[ss]:ma,[da]:da,[ga]:fa,[_a]:_a,[ma]:ss},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,Bs=Math.PI/180,cs=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function vc(i,t){return(i%t+t)%t}function wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Af(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function Tf(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function Ef(i,t=1){return t-Math.abs(vc(i,t*2)-t)}function Cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function If(i,t){return i+Math.random()*(t-i)}function Lf(i){return i*(.5-Math.random())}function Df(i){i!==void 0&&(Sh=i);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*Bs}function Uf(i){return i*cs}function Ff(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Of(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mc(i,t){if(t.constructor===Float32Array)return i;let e=Uo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Sc(i,t){if(t.constructor===Float32Array)return i;let e=Uo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var He={DEG2RAD:Bs,RAD2DEG:cs,generateUUID:fi,clamp:Wt,euclideanModulo:vc,mapLinear:wf,inverseLerp:Af,lerp:ks,damp:Tf,pingpong:Ef,smoothstep:Cf,smootherstep:Rf,randInt:Pf,randFloat:If,randFloatSpread:Lf,seededRandom:Df,degToRad:Nf,radToDeg:Uf,isPowerOfTwo:Ff,ceilPowerOfTwo:Of,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Bf,normalize:Sc,denormalize:Mc},Cc=class Cc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;var Tt=Cc,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rc=class Rc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rc.prototype.isVector3=!0;var F=Rc,pl=new F,bh=new In,Pc=class Pc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],S=s[1],E=s[4],M=s[7],w=s[2],A=s[5],_=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*g+o*E+l*A,r[6]=a*m+o*M+l*_,r[1]=c*v+h*S+u*w,r[4]=c*g+h*E+u*A,r[7]=c*m+h*M+u*_,r[2]=d*v+f*S+p*w,r[5]=d*g+f*E+p*A,r[8]=d*m+f*M+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;var Ft=Pc,ml=new Ft,wh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kf(){let i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:t,whitePoint:n,transfer:Ws,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var $t=kf();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ki,ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=os("canvas")),ki.width=t.width,ki.height=t.height;let s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Hf=0,_l=new F,ze=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ye,a=$n,o=An,l=Ke,c=i.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=fi(),this.name="",this.source=new hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=rc;ze.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(f+1)/2,w=(m+1)/2,A=(h+d)/4,_=(u+v)/4,b=(p+g)/4;return E>M&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;var he=Ic,Ma=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ze({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Ma{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,v,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,v,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d+v*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Gf)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Qn.crossVectors(n,je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Qn.crossVectors(n,je)),Qn.normalize(),Or.crossVectors(je,Qn),s[0]=Qn.x,s[4]=Or.x,s[8]=je.x,s[1]=Qn.y,s[5]=Or.y,s[9]=je.y,s[2]=Qn.z,s[6]=Or.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],E=n[7],M=n[11],w=n[15],A=s[0],_=s[4],b=s[8],N=s[12],P=s[1],O=s[5],k=s[9],L=s[13],C=s[2],G=s[6],q=s[10],W=s[14],nt=s[3],X=s[7],J=s[11],tt=s[15];return r[0]=a*A+o*P+l*C+c*nt,r[4]=a*_+o*O+l*G+c*X,r[8]=a*b+o*k+l*q+c*J,r[12]=a*N+o*L+l*W+c*tt,r[1]=h*A+u*P+d*C+f*nt,r[5]=h*_+u*O+d*G+f*X,r[9]=h*b+u*k+d*q+f*J,r[13]=h*N+u*L+d*W+f*tt,r[2]=p*A+v*P+g*C+m*nt,r[6]=p*_+v*O+g*G+m*X,r[10]=p*b+v*k+g*q+m*J,r[14]=p*N+v*L+g*W+m*tt,r[3]=S*A+E*P+M*C+w*nt,r[7]=S*_+E*O+M*G+w*X,r[11]=S*b+E*k+M*q+w*J,r[15]=S*N+E*L+M*W+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15],S=l*f-c*d,E=o*f-c*u,M=o*d-l*u,w=a*f-c*h,A=a*d-l*h,_=a*u-o*h;return e*(v*S-g*E+m*M)-n*(p*S-g*w+m*A)+s*(p*E-v*w+m*_)-r*(p*M-v*A+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],S=e*o-n*a,E=e*l-s*a,M=e*c-r*a,w=n*l-s*o,A=n*c-r*o,_=s*c-r*l,b=h*v-u*p,N=h*g-d*p,P=h*m-f*p,O=u*g-d*v,k=u*m-f*v,L=d*m-f*g,C=S*L-E*k+M*O+w*P-A*N+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return t[0]=(o*L-l*k+c*O)*G,t[1]=(s*k-n*L-r*O)*G,t[2]=(v*_-g*A+m*w)*G,t[3]=(d*A-u*_-f*w)*G,t[4]=(l*P-a*L-c*N)*G,t[5]=(e*L-s*P+r*N)*G,t[6]=(g*M-p*_-m*E)*G,t[7]=(h*_-d*M+f*E)*G,t[8]=(a*k-o*P+c*b)*G,t[9]=(n*P-e*k-r*b)*G,t[10]=(p*A-v*M+m*S)*G,t[11]=(u*M-h*A-f*S)*G,t[12]=(o*N-a*O-l*b)*G,t[13]=(e*O-n*N+s*b)*G,t[14]=(v*E-p*w-g*S)*G,t[15]=(h*w-u*E+d*S)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,g=a*u,m=o*u,S=l*c,E=l*h,M=l*u,w=n.x,A=n.y,_=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+M)*w,s[2]=(p-E)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+m))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(p+E)*_,s[9]=(g-S)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,h=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===un)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===as)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===un)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===as)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var re=$a,zi=new F,_n=new re,Vf=new F(0,0,0),Gf=new F(1,1,1),Qn=new F,Or=new F,je=new F,Th=new re,Eh=new In,si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,Ch=new F,Hi=new In,On=new re,Br=new F,Ps=new F,Xf=new F,qf=new In,Rh=new F(1,0,0),Ph=new F(0,1,0),Ih=new F(0,0,1),Lh={type:"added"},Yf={type:"removed"},Vi={type:"childadded",child:null},xl={type:"childremoved",child:null},Le=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new si,n=new In,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Ft}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ps,Br,this.up):On.lookAt(Br,Ps,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new F(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},kr={h:0,s:0,l:0};function vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=vc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vl(a,r,t+1/3),this.g=vl(a,r,t),this.b=vl(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=Fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return $t.workingToColorSpace(ke.copy(this),t),Math.round(Wt(ke.r*255,0,255))*65536+Math.round(Wt(ke.g*255,0,255))*256+Math.round(Wt(ke.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Xe){$t.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(kr);let n=ks(ti.h,kr.h,e),s=ks(ti.s,kr.s,e),r=ks(ti.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new zt;zt.NAMES=Fu;var $s=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new F,Bn=new F,yl=new F,kn=new F,Gi=new F,Wi=new F,Dh=new F,Ml=new F,Sl=new F,bl=new F,wl=new he,Al=new he,Tl=new he,Vn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Bn.subVectors(n,e),yl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Bn),l=xn.dot(yl),c=Bn.dot(Bn),h=Bn.dot(yl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return wl.setScalar(0),Al.setScalar(0),Tl.setScalar(0),wl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,n),Tl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(wl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,n),Wi.subVectors(r,n),Ml.subVectors(t,n);let l=Gi.dot(Ml),c=Wi.dot(Ml);if(l<=0&&c<=0)return e.copy(n);Sl.subVectors(t,s);let h=Gi.dot(Sl),u=Wi.dot(Sl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);bl.subVectors(t,r);let f=Gi.dot(bl),p=Wi.dot(bl);if(p>=0&&f<=p)return e.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Wi,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Dh.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Dh,o);let m=1/(g+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Hr.subVectors(this.max,Is),Xi.subVectors(t.a,Is),qi.subVectors(t.b,Is),Yi.subVectors(t.c,Is),ei.subVectors(qi,Xi),ni.subVectors(Yi,qi),Si.subVectors(Xi,Yi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Si.y,Si.x,0];return!El(e,Xi,qi,Yi,Hr)||(e=[1,0,0,0,1,0,0,0,1],!El(e,Xi,qi,Yi,Hr))?!1:(Vr.crossVectors(ei,ni),e=[Vr.x,Vr.y,Vr.z],El(e,Xi,qi,Yi,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new F,new F,new F,new F,new F,new F,new F,new F],vn=new F,zr=new ri,Xi=new F,qi=new F,Yi=new F,ei=new F,ni=new F,Si=new F,Is=new F,Hr=new F,Vr=new F,bi=new F;function El(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ve=new F,Gr=new Tt,Zf=0,Je=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?Uo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Mc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Sc(t,this.array)}};var Zs=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jf=new ri,Ls=new F,Cl=new F,Ti=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Cl)),this.expandByPoint(Ls.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kf=0,hn=new re,Rl=new Le,$i=new F,Qe=new ri,Ds=new ri,Ee=new F,$e=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?Js:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Qe.min,Ds.min),Qe.expandByPoint(Ee),Ee.addVectors(Qe.max,Ds.max),Qe.expandByPoint(Ee)):(Qe.expandByPoint(Ds.min),Qe.expandByPoint(Ds.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),Ee.add($i)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new F,l[N]=new F;let h=new F,u=new F,d=new F,f=new Tt,p=new Tt,v=new Tt,g=new F,m=new F;function S(N,P,O){c[N]=c[P]=c[O]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,O),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,P),v.fromBufferAttribute(r,O),u.sub(h),d.sub(h),p.sub(f),v.sub(f);let k=1/(p.x*v.y-v.x*p.y);isFinite(k)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(k),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(k),o[N].add(g),o[P].add(g),o[O].add(g),l[N].add(m),l[P].add(m),l[O].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,P=E.length;N<P;++N){let O=E[N],k=O.start,L=O.count;for(let C=k,G=k+L;C<G;C+=3)S(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let M=new F,w=new F,A=new F,_=new F;function b(N){A.fromBufferAttribute(s,N),_.copy(A);let P=o[N];M.copy(P),M.sub(A.multiplyScalar(A.dot(P))).normalize(),w.crossVectors(_,P);let k=w.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,k)}for(let N=0,P=n.count;N<P;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Je(d,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ba=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Nh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Nh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var We=new F,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Uo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Mc(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Sc(t,this.data.array)}},Pl=new F,jf=new F,Qf=new Ft,yn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Pl.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tp=0,qn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ui,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mn=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,Ns=new F,Ji=new F,Ki=new F,ji=new Tt,Us=new Tt,Ou=new re,Wr=new F,Fs=new F,Xr=new F,Uh=new Tt,Il=new Tt,Fh=new Tt,Ln=class extends Le{constructor(t=new Mn){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ba(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Ks(n,3,0,!1)),Zi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;qr(Wr.set(-.5,-.5,0),Ki,a,Ji,s,r),qr(Fs.set(.5,-.5,0),Ki,a,Ji,s,r),qr(Xr.set(.5,.5,0),Ki,a,Ji,s,r),Uh.set(0,0),Il.set(1,0),Fh.set(1,1);let o=t.ray.intersectTriangle(Wr,Fs,Xr,!1,Ns);if(o===null&&(qr(Fs.set(-.5,.5,0),Ki,a,Ji,s,r),Il.set(0,1),o=t.ray.intersectTriangle(Wr,Xr,Fs,!1,Ns),o===null))return;let l=t.ray.origin.distanceTo(Ns);l<t.near||l>t.far||e.push({distance:l,point:Ns.clone(),uv:Vn.getInterpolation(Ns,Wr,Fs,Xr,Uh,Il,Fh,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function qr(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*ji.x-s*ji.y,Us.y=s*ji.x+r*ji.y):Us.copy(ji),i.copy(t),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Ou)}var Hn=new F,Ll=new F,Yr=new F,$r=new F,js=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ll.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),$r.copy(this.origin).sub(Ll);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),o=$r.dot(this.direction),l=-$r.dot(Yr),c=$r.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ll).addScaledVector(Yr,d),f}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,v=e.y-a.y,g=e.z-a.z,m=n.x-a.x,S=n.y-a.y,E=n.z-a.z,M=Math.abs(l),w=Math.abs(c),A=Math.abs(h),_,b,N,P,O,k,L,C,G,q,W,nt;if(M>=w&&M>=A?(N=l,k=u,G=p,nt=m,l>=0?(_=c,b=h,P=d,O=f,L=v,C=g,q=S,W=E):(_=h,b=c,P=f,O=d,L=g,C=v,q=E,W=S)):w>=A?(N=c,k=d,G=v,nt=S,c>=0?(_=h,b=l,P=f,O=u,L=g,C=p,q=E,W=m):(_=l,b=h,P=u,O=f,L=p,C=g,q=m,W=E)):(N=h,k=f,G=g,nt=E,h>=0?(_=l,b=c,P=u,O=d,L=p,C=v,q=m,W=S):(_=c,b=l,P=d,O=u,L=v,C=p,q=S,W=m)),N===0)return null;let X=_/N,J=b/N,tt=1/N,yt=P-X*k,Dt=O-J*k,j=L-X*G,_t=C-J*G,St=q-X*nt,Rt=W-J*nt,xt=St*_t-Rt*j,kt=yt*Rt-Dt*St,_e=j*Dt-_t*yt;if(s){if(xt<0||kt<0||_e<0)return null}else if((xt<0||kt<0||_e<0)&&(xt>0||kt>0||_e>0))return null;let Lt=xt+kt+_e;if(Lt===0)return null;let ee=tt*(xt*k+kt*G+_e*nt);return(Lt>0?ee<0:ee>0)?null:this.at(ee/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wa=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Oh=new re,wi=new js,Zr=new Ti,Bh=new F,Jr=new F,Kr=new F,jr=new F,Dl=new F,Qr=new F,kh=new F,ta=new F,De=class extends Le{constructor(t=new $e,e=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Dl.fromBufferAttribute(u,t),a?Qr.addScaledVector(Dl,h):Qr.addScaledVector(Dl.sub(e),h))}e.add(Qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Zr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Zr,Bh)===null||wi.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Oh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,w=E;M<w;M+=3){let A=o.getX(M),_=o.getX(M+1),b=o.getX(M+2);s=ea(this,m,t,n,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let S=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);s=ea(this,a,t,n,c,h,u,S,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,w=E;M<w;M+=3){let A=M,_=M+1,b=M+2;s=ea(this,m,t,n,c,h,u,A,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let S=g,E=g+1,M=g+2;s=ea(this,a,t,n,c,h,u,S,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ep(i,t,e,n,s,r,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===hi,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:i}}function ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Jr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,jr);let h=ep(i,t,e,n,Jr,Kr,jr,kh);if(h){let u=new F;Vn.getBarycoord(kh,Jr,Kr,jr,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,u,new Tt)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new Tt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Vn.getNormal(Jr,Kr,jr,d.normal),h.face=d,h.barycoord=u}return h}var Aa=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,h=Ce,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=new Ti,np=new Tt(.5,.5),na=new F,ai=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],S=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-p,w-S).normalize(),s[1].setComponents(c+a,f+h,m+p,w+S).normalize(),s[2].setComponents(c+o,f+u,m+v,w+E).normalize(),s[3].setComponents(c-o,f-u,m-v,w-E).normalize(),n)s[4].setComponents(l,d,g,M).normalize(),s[5].setComponents(c-l,f-d,m-g,w-M).normalize();else if(s[4].setComponents(c-l,f-d,m-g,w-M).normalize(),e===un)s[5].setComponents(c+l,f+d,m+g,w+M).normalize();else if(e===as)s[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);let e=np.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zh=new re,Ta=class i{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];zh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ai),n[s].setFromProjectionMatrix(zh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ai),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ds=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new re,Vl=new js,ia=new Ti,sa=new F,Qs=class extends Le{constructor(t=new $e,e=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Hh.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(Hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);sa.fromBufferAttribute(u,g),Vh(sa,g,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)sa.fromBufferAttribute(u,p),Vh(sa,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(i,t,e,n,s,r,a){let o=Vl.distanceSqToPoint(i);if(o<e){let l=new F;Vl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var tr=class extends ze{constructor(t=[],e=Li,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},er=class extends ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends ze{constructor(t,e,n=Sn,s,r,a,o=Ce,l=Ce,c,h=Xn,u=1){if(h!==Xn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nr=class extends Yn{constructor(t,e=Sn,n=Li,s,r,a=Ce,o=Ce,l,c=Xn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fs=class i extends $e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function p(v,g,m,S,E,M,w,A,_,b,N){let P=M/_,O=w/b,k=M/2,L=w/2,C=A/2,G=_+1,q=b+1,W=0,nt=0,X=new F;for(let J=0;J<q;J++){let tt=J*O-L;for(let yt=0;yt<G;yt++){let Dt=yt*P-k;X[v]=Dt*S,X[g]=tt*E,X[m]=C,c.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[m]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(yt/_),u.push(1-J/b),W+=1}}for(let J=0;J<b;J++)for(let tt=0;tt<_;tt++){let yt=d+tt+G*J,Dt=d+tt+G*(J+1),j=d+(tt+1)+G*(J+1),_t=d+(tt+1)+G*J;l.push(yt,Dt,_t),l.push(Dt,j,_t),nt+=6}o.addGroup(f,nt,N),f+=nt,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sr=class i extends $e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],g=n/2,m=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function S(){let M=new F,w=new F,A=0,_=(e-t)/n;for(let b=0;b<=r;b++){let N=[],P=b/r,O=P*(e-t)+t;for(let k=0;k<=s;k++){let L=k/s,C=L*l+o,G=Math.sin(C),q=Math.cos(C);w.x=O*G,w.y=-P*n+g,w.z=O*q,u.push(w.x,w.y,w.z),M.set(G,_,q).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-P),N.push(p++)}v.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let P=v[N][b],O=v[N+1][b],k=v[N+1][b+1],L=v[N][b+1];(t>0||N!==0)&&(h.push(P,O,L),A+=3),(e>0||N!==r-1)&&(h.push(O,k,L),A+=3)}c.addGroup(m,A,0),m+=A}function E(M){let w=p,A=new Tt,_=new F,b=0,N=M===!0?t:e,P=M===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),p++;let O=p;for(let k=0;k<=s;k++){let C=k/s*l+o,G=Math.cos(C),q=Math.sin(C);_.x=N*q,_.y=g*P,_.z=N*G,u.push(_.x,_.y,_.z),d.push(0,P,0),A.x=G*.5+.5,A.y=q*.5*P+.5,f.push(A.x,A.y),p++}for(let k=0;k<s;k++){let L=w+k,C=O+k;M===!0?h.push(C,C+1,L):h.push(C+1,C,L),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new re;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},rr=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends rr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Gh=new F,Wh=new F,Nl=new bc,Ul=new bc,Fl=new bc,Ei=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Wh.subVectors(s[0],s[1]).add(s[0]),c=Wh);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Gh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),Ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),Fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Nl.calc(l),Ul.calc(l),Fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ip(i,t){let e=1-i;return e*e*t}function sp(i,t){return 2*(1-i)*i*t}function rp(i,t){return i*i*t}function zs(i,t,e,n){return ip(i,t)+sp(i,e)+rp(i,n)}function ap(i,t){let e=1-i;return e*e*e*t}function op(i,t){let e=1-i;return 3*e*e*i*t}function lp(i,t){return 3*(1-i)*i*i*t}function cp(i,t){return i*i*i*t}function Hs(i,t,e,n,s){return ap(i,t)+op(i,e)+lp(i,n)+cp(i,s)}var Ca=class extends dn{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ra=class extends dn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y),Hs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends dn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends dn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends dn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends dn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,s.x,r.x,a.x),zs(t,s.y,r.y,a.y),zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xh(o,l.x,c.x,h.x,u.x),Xh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Ei,CubicBezierCurve:Ca,CubicBezierCurve3:Ra,EllipseCurve:rr,LineCurve:Pa,LineCurve3:Ia,QuadraticBezierCurve:La,QuadraticBezierCurve3:ar,SplineCurve:Da});var Ci=class i extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){let S=m*d-a;for(let E=0;E<c;E++){let M=E*u-r;p.push(M,-S,0),v.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let E=S+c*m,M=S+c*(m+1),w=S+1+c*(m+1),A=S+1+c*m;f.push(E,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ri=class i extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,d=new F,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let S=[],E=m/n,M=a+E*o,w=t*Math.cos(M),A=Math.sqrt(t*t-w*w),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let N=b/e,P=s+N*r;u.x=-A*Math.cos(P),u.y=w,u.z=A*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(N+_,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let E=h[m][S+1],M=h[m][S],w=h[m+1][S],A=h[m+1][S+1];(m!==0||a>0)&&f.push(E,M,A),(m!==n-1||l<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var or=class i extends $e{constructor(t=new ar(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new Tt,h=new F,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function v(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),S(),m()}function g(E){h=t.getPointAt(E/e,h);let M=a.normals[E],w=a.binormals[E];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,b=Math.sin(_),N=-Math.cos(_);l.x=N*M.x+b*w.x,l.y=N*M.y+b*w.y,l.z=N*M.z+b*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let w=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),_=(s+1)*E+M,b=(s+1)*(E-1)+M;p.push(w,A,b),p.push(A,_,b)}}function S(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)c.x=E/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new hp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ni(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qh(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Ni(i[e]);for(let s in n)t[s]=n[s]}return t}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function up(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Bu={clone:Ni,merge:Ve},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new he().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Na=class extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ua=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oa=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:r=t,o=2*e-n;break;case Hl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:a=t,l=2*n-e;break;case Hl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,S=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,E=(-1-f)*g+(1.5+f)*v+.5*p,M=f*g-f*v;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+S*a[c+w]+E*a[l+w]+M*a[u+w];return r}},Ba=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ka=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},za=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),v=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*p;return r}let d=o*2,f=t-1;for(let p=0;p!==o;++p){let v=a[c+p],g=a[l+p],m=f*d+p*2,S=u[m],E=u[m+1],M=t*d+p*2,w=h[M],A=h[M+1],_=mp(n,e,S,w,s);r[p]=ku(_,v,E,A,g)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function pp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function mp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ku(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=pp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qi(e,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qi(t.times,Array),values:Qi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ra(t.settings)&&(n.settings={inTangents:Qi(t.settings.inTangents,Array),outTangents:Qi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new za(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ra(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ra(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=e[u+p];if(v!==e[d+p]||v!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function $h(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=va;var li=class extends en{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Vs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="color";var Va=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="number";var Ga=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},lr=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends en{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Vs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Wa.prototype.ValueTypeName="vector";var ha={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ps=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zu=new ps,ms=class{constructor(t){this.manager=t!==void 0?t:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ms.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=new WeakMap,Xa=class extends ms{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ha.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=ts.get(a);u===void 0&&(u=[],ts.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=os("img");function l(){h(),e&&e(this);let u=ts.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ts.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),ha.remove(`image:${t}`);let d=ts.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ha.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var cr=class extends ms{constructor(t){super(t)}load(t,e,n,s){let r=new ze,a=new Xa(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},hr=class extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Ol=new re,Jh=new F,Kh=new F,qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ol,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===as||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=new F,oa=new In,Cn=new F,ur=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(aa,oa,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new F,jh=new Tt,Qh=new Tt,qe=class extends ur{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Qh),e.subVectors(Qh,jh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var dr=class extends ur{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends qa{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},pr=class extends hr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var es=-90,ns=1,gs=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new qe(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new qe(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new qe(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new qe(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new qe(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ya=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ac="\\[\\]\\.:\\/",gp=new RegExp("["+Ac+"]","g"),Tc="[^"+Ac+"]",_p="[^"+Ac.replace("\\.","")+"]",xp=/((?:WC+[\/:])*)/.source.replace("WC",Tc),vp=/(WCOD+)?/.source.replace("WCOD",_p),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Sp=new RegExp("^"+xp+vp+yp+Mp+"$"),bp=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(t){let e=Sp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Wl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);var Lc=class Lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lc.prototype.isMatrix2=!0;var Xl=Lc;function Ec(i,t,e,n){let s=wp(n);switch(e){case hc:return i*t;case dc:return i*t/s.components*s.byteLength;case eo:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case no:return i*t*2/s.components*s.byteLength;case uc:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case io:return i*t*4/s.components*s.byteLength;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case Mr:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Po:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lo:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sr:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wp(i){switch(i){case Ke:case ac:return{byteLength:1,components:1};case vs:case oc:case wn:return{byteLength:2,components:1};case Qa:case to:return{byteLength:2,components:4};case Sn:case ja:case bn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ld(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`uniform sampler2D dfgLUT;
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
}`,Am=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform float backgroundBlurriness;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Ep,alphahash_pars_fragment:Cp,alphamap_fragment:Rp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Np,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:zp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:$p,color_vertex:Zp,common:Jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:vm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Am,lights_fragment_maps:Tm,lights_fragment_end:Em,lightprobes_pars_fragment:Cm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Nm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:km,morphcolor_vertex:zm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:$m,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:ag,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:yg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:bg,uv_vertex:wg,worldpos_vertex:Ag,background_vert:Tg,background_frag:Eg,backgroundCube_vert:Cg,backgroundCube_frag:Rg,cube_vert:Pg,cube_frag:Ig,depth_vert:Lg,depth_frag:Dg,distance_vert:Ng,distance_frag:Ug,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:kg,meshbasic_vert:zg,meshbasic_frag:Hg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:$g,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Kg,meshtoon_vert:jg,meshtoon_frag:Qg,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},gt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Un={basic:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ve([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ve([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ve([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ve([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ve([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ve([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Ve([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Ve([gt.lights,gt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Un.physical={uniforms:Ve([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Fo={r:0,b:0,g:0},a0=new re,cd=new Ft;cd.set(-1,0,0,0,1,0,0,0,1);function o0(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let M=S.backgroundBlurriness>0;E=t.get(E,M)}return E}function p(S){let E=!1,M=f(S);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,E){let M=f(E);M&&M.isCubeTexture?(c===void 0&&(c=new De(new fs(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Ni(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cd),c.material.toneMapped=$t.getTransfer(M.colorSpace)!==te,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new De(new Ci(2,2),new Ne({name:"BackgroundMaterial",uniforms:Ni(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$t.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,E){S.getRGB(Fo,wc(i)),e.buffers.color.setClear(Fo.r,Fo.g,Fo.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:v,dispose:m}}function l0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(O,k,L,C,G){let q=!1,W=u(O,C,L,k);r!==W&&(r=W,c(r.object)),q=f(O,C,L,G),q&&p(O,C,L,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(O,k,L,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,k,L,C){let G=C.wireframe===!0,q=n[k.id];q===void 0&&(q={},n[k.id]=q);let W=O.isInstancedMesh===!0?O.id:0,nt=q[W];nt===void 0&&(nt={},q[W]=nt);let X=nt[L.id];X===void 0&&(X={},nt[L.id]=X);let J=X[G];return J===void 0&&(J=d(l()),X[G]=J),J}function d(O){let k=[],L=[],C=[];for(let G=0;G<e;G++)k[G]=0,L[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:C,object:O,attributes:{},index:null}}function f(O,k,L,C){let G=r.attributes,q=k.attributes,W=0,nt=L.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=G[X],yt=q[X];if(yt===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(yt=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(yt=O.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function p(O,k,L,C){let G={},q=k.attributes,W=0,nt=L.getAttributes();for(let X in nt)if(nt[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),G[X]=yt,W++}r.attributes=G,r.attributesNum=W,r.index=C}function v(){let O=r.newAttributes;for(let k=0,L=O.length;k<L;k++)O[k]=0}function g(O){m(O,0)}function m(O,k){let L=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;L[O]=1,C[O]===0&&(i.enableVertexAttribArray(O),C[O]=1),G[O]!==k&&(i.vertexAttribDivisor(O,k),G[O]=k)}function S(){let O=r.newAttributes,k=r.enabledAttributes;for(let L=0,C=k.length;L<C;L++)k[L]!==O[L]&&(i.disableVertexAttribArray(L),k[L]=0)}function E(O,k,L,C,G,q,W){W===!0?i.vertexAttribIPointer(O,k,L,G,q):i.vertexAttribPointer(O,k,L,C,G,q)}function M(O,k,L,C){v();let G=C.attributes,q=L.getAttributes(),W=k.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let J=G[nt];if(J===void 0&&(nt==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),nt==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),J!==void 0){let tt=J.normalized,yt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;let j=Dt.buffer,_t=Dt.type,St=Dt.bytesPerElement,Rt=_t===i.INT||_t===i.UNSIGNED_INT||J.gpuType===ja;if(J.isInterleavedBufferAttribute){let xt=J.data,kt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,_e=J.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt,xt.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)g(X.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Lt=0;Lt<X.locationSize;Lt++)E(X.location+Lt,yt/X.locationSize,_t,tt,kt*St,(_e+yt/X.locationSize*Lt)*St,Rt)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt,J.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<X.locationSize;xt++)g(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let xt=0;xt<X.locationSize;xt++)E(X.location+xt,yt/X.locationSize,_t,tt,yt*St,yt/X.locationSize*xt*St,Rt)}}else if(W!==void 0){let tt=W[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}S()}function w(){N();for(let O in n){let k=n[O];for(let L in k){let C=k[L];for(let G in C){let q=C[G];for(let W in q)h(q[W].object),delete q[W];delete C[G]}}delete n[O]}}function A(O){if(n[O.id]===void 0)return;let k=n[O.id];for(let L in k){let C=k[L];for(let G in C){let q=C[G];for(let W in q)h(q[W].object),delete q[W];delete C[G]}}delete n[O.id]}function _(O){for(let k in n){let L=n[k];for(let C in L){let G=L[C];if(G[O.id]===void 0)continue;let q=G[O.id];for(let W in q)h(q[W].object),delete q[W];delete G[O.id]}}}function b(O){for(let k in n){let L=n[k],C=O.isInstancedMesh===!0?O.id:0,G=L[C];if(G!==void 0){for(let q in G){let W=G[q];for(let nt in W)h(W[nt].object),delete W[nt];delete G[q]}delete L[C],Object.keys(L).length===0&&delete n[k]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function c0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function h0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==An&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ke&&_!==bn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:A}}function u0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,E=S*4,M=m.clippingState||null;l.value=M,M=h(p,d,E,f);for(let w=0;w!==E;++w)M[w]=e[w];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=f;E!==v;++E,M+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var Ar=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fs(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Pi});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=Ye),new gs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Hu=256,d0=3,f0=20,hd=256,ud=16,p0=3,m0=new F,g0=new zt,Bo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gs(1,10,null),this._boxMesh=new De(new fs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=m0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(g0));let g=new gs(n,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Hu,yc(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===xs?this._setSize(t.image.length===0?Hu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-d0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_0(),this._integrationMaterial=x0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ud);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-p0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(hd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=v0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vu(i,t,e){return new Ar(i,{minFilter:$n,generateMipmaps:t,type:wn,colorSpace:Gs,depthBuffer:e})}function Tr(i,t,e){return new Ne({name:i,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:e,side:Ue,blending:Pi,depthTest:!1,depthWrite:!1})}function _0(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hd}u

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
	`)}function x0(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ud}},`

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
	`)}function v0(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${f0}
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
	`)}function Gu(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wu(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function y0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Za||f===Ja)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let v=new Ar(p.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Za||f===Ja,v=f===Li||f===xs;if(p||v){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Bo(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Bo(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Za?d.mapping=Li:f===Ja&&(d.mapping=xs),d}function l(d){let f=0,p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function M0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(p){let v=p.attributes;for(let g in v)t.update(v[g],i.ARRAY_BUFFER)}function u(p){let v=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let S=v!==null?v.array.length:g.array.length/3-1,E=g.count>=65535?Js:Zs,M=new E(Math.ceil(S/3)*6,1),w=M.array;if(v!==null){let _=v.array;m=v.version;for(let b=0,N=0;b<S;b+=3){let P=_[b+0],O=_[b+1],k=_[b+2];w[N++]=P,w[N++]=O,w[N++]=O,w[N++]=k,w[N++]=k,w[N++]=P}}else{m=g.version;for(let _=0,b=0;_<S;_+=3){let N=_+0,P=_+1,O=_+2;w[b++]=N,w[b++]=P,w[b++]=P,w[b++]=O,w[b++]=O,w[b++]=N}}M.version=m;let A=r.get(p);A&&t.remove(A),r.set(p,M)}function d(p){let v=r.get(p);if(v){let g=p.index;g!==null&&v.version<g.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function b0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A0(i,t,e){let n=new WeakMap,s=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*w*4*u),_=new qs(A,M,w,u);_.type=bn,_.needsUpdate=!0;let b=E*4;for(let P=0;P<u;P++){let O=g[P],k=m[P],L=S[P],C=M*w*4*P;for(let G=0;G<O.count;G++){let q=G*b;f===!0&&(s.fromBufferAttribute(O,G),A[C+q+0]=s.x,A[C+q+1]=s.y,A[C+q+2]=s.z,A[C+q+3]=0),p===!0&&(s.fromBufferAttribute(k,G),A[C+q+4]=s.x,A[C+q+5]=s.y,A[C+q+6]=s.z,A[C+q+7]=0),v===!0&&(s.fromBufferAttribute(L,G),A[C+q+8]=s.x,A[C+q+9]=s.y,A[C+q+10]=s.z,A[C+q+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Tt(M,w)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var E0={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function C0(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new $e;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));let u=new Na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new De(h,u),f=new dr(-1,1,1,-1,0,1),p=null,v=null,g=!1,m,S=null,E=[],M=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(w,A)}},this.setEffects=function(w){E=w,M=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new tn(A,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(A,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Yn(A,_),r===!0&&(c.format=Zn,c.type=Di)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<E.length;N++){let P=E[N];P.setSize&&P.setSize(A,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,A){if(g||w.toneMapping===Dn&&E.length===0)return!1;if(S=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return M===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Dn,!0},this.hasRenderPass=function(){return M},this.end=function(w,A){w.toneMapping=m,g=!0;let _=a,b=o;for(let N=0;N<E.length;N++){let P=E[N];P.enabled!==!1&&(P.render(w,b,_,A),P.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==w.outputColorSpace||v!==w.toneMapping){p=w.outputColorSpace,v=w.toneMapping,u.defines={},$t.getTransfer(p)===te&&(u.defines.SRGB_TRANSFER="");let N=E0[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(S),w.render(d,f),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var dd=new ze,fd=new Yn(1,1),pd=new nr(1),md=new qs,gd=new Sa,_d=new tr,Xu=[],qu=[],Yu=new Float32Array(16),$u=new Float32Array(9),Zu=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xu[s];if(r===void 0&&(r=new Float32Array(s),Xu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function D0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),be(e,n)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),be(e,n)}}function U0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),be(e,n)}}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Ho(i){return i.version===0&&(i.compareFunction=gc,i.needsUpdate=!0),i}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ho(fd):r=dd,e.setTexture2D(t||r,s)}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ho(pd):r=_d,e.setTextureCube(t||r,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function $0(i){switch(i){case 5126:return R0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(i,t){i.uniform1fv(this.addr,t)}function J0(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function j0(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function a_(i,t){i.uniform1uiv(this.addr,t)}function o_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function h_(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ho(fd):a=dd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function u_(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gd,r[a])}function d_(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ho(pd):a=_d;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function f_(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||md,r[a])}function p_(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return j0;case 35674:return Q0;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}},Fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}},Oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Ju(i,t){i.seq.push(t),i.map[t.id]=t}function m_(i,t,e){let n=i.name,s=n.length;for(Dc.lastIndex=0;;){let r=Dc.exec(n),a=Dc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ju(e,c===void 0?new Uc(o,i,t):new Fc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Oc(o),Ju(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);m_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var g_=37297,__=0;function x_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ju=new Ft;function v_(i){$t._getMatrix(ju,$t.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+x_(i.getShaderSource(t),o)}else return r}function y_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var M_={[jl]:"Linear",[Ql]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function S_(i,t){let e=M_[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oo=new F;function b_(){$t.getLuminanceCoefficients(Oo);let i=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function A_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wr(i){return i!==""}function td(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(E_,C_)}function C_(i,t){let e=Gt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bc(e)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(R_,P_)}function P_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var I_={[mr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function L_(i){return I_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[xs]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function F_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function O_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=L_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=N_(e),u=F_(e),d=w_(e),f=A_(r),p=s.createProgram(),v,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(wr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(wr).join(`
`),g.length>0&&(g+=`
`)):(v=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),g=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),b_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=Bc(a),a=td(a,e),a=ed(a,e),o=Bc(o),o=td(o,e),o=ed(o,e),a=nd(a),o=nd(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=m+v+a,E=m+g+o,M=Ku(s,s.VERTEX_SHADER,S),w=Ku(s,s.FRAGMENT_SHADER,E);s.attachShader(p,M),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(w)||"",C=O.trim(),G=k.trim(),q=L.trim(),W=!0,nt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,w);else{let X=Qu(s,M,"vertex"),J=Qu(s,w,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+X+`
`+J)}else C!==""?It("WebGLProgram: Program Info Log:",C):(G===""||q==="")&&(nt=!1);nt&&(P.diagnostics={runnable:W,programLog:C,vertexShader:{log:G,prefix:v},fragmentShader:{log:q,prefix:g}})}s.deleteShader(M),s.deleteShader(w),_=new ys(s,p),b=T_(s,p)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,g_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}var B_=0,kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zc(t),e.set(t,n)),n}},zc=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function k_(i){return i===di||i===Mr||i===Sr}function z_(i,t,e,n,s,r){let a=new Ys,o=new kc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,N,P,O,k){let L=P.fog,C=O.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||G,q),nt=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=J!==void 0?J.length:0,yt=0;C.morphAttributes.position!==void 0&&(yt=1),C.morphAttributes.normal!==void 0&&(yt=2),C.morphAttributes.color!==void 0&&(yt=3);let Dt,j,_t,St;if(nt){let mt=Un[nt];Dt=mt.vertexShader,j=mt.fragmentShader}else{Dt=_.vertexShader,j=_.fragmentShader;let mt=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,mt,ne),_t=mt.id,St=ne.id}let Rt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),kt=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Lt=!!_.map,ee=!!_.matcap,ie=!!W,Xt=ie&&W.isPMREMTexture===!0,Pe=!!_.aoMap,ye=!!_.lightMap,Ze=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,En=!!_.displacementMap,we=!!_.emissiveMap,an=!!_.metalnessMap,on=!!_.roughnessMap,ln=_.anisotropy>0,B=_.clearcoat>0,cn=_.diffuseRoughness>0,le=_.dispersion>0,ce=_.retroreflectivity>0,ft=_.iridescence>0,Me=_.sheen>0,Pt=_.transmission>0,Ot=ln&&!!_.anisotropyMap,T=B&&!!_.clearcoatMap,x=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,it=cn&&!!_.diffuseRoughnessMap,et=ft&&!!_.iridescenceMap,at=ft&&!!_.iridescenceThicknessMap,ut=Me&&!!_.sheenColorMap,Z=Me&&!!_.sheenRoughnessMap,K=!!_.specularMap,lt=!!_.specularColorMap,I=!!_.specularIntensityMap,Q=Pt&&!!_.transmissionMap,$=Pt&&!!_.thicknessMap,ct=!!_.gradientMap,rt=!!_.alphaMap,ot=_.alphaTest>0,Et=!!_.alphaHash,Vt=!!_.extensions,st=Dn;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(st=i.toneMapping);let Ct=Xt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Ht={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:j,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:kt,instancingColor:kt&&O.instanceColor!==null,instancingMorph:kt&&O.morphTexture!==null,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:ee,envMap:ie,envMapMode:ie&&W.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Ct.length-1:null,envMapSize:Xt?Ct[0].width:null,aoMap:Pe,lightMap:ye,bumpMap:Ze,normalMap:ue,displacementMap:En,emissiveMap:we,normalMapObjectSpace:ue&&_.normalMapType===Au,normalMapTangentSpace:ue&&_.normalMapType===fc,packedNormalMap:ue&&_.normalMapType===fc&&k_(_.normalMap.format),metalnessMap:an,roughnessMap:on,anisotropy:ln,anisotropyMap:Ot,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:H,diffuseRoughness:cn,diffuseRoughnessMap:it,dispersion:le,retroreflection:ce,iridescence:ft,iridescenceMap:et,iridescenceThicknessMap:at,sheen:Me,sheenColorMap:ut,sheenRoughnessMap:Z,specularMap:K,specularColorMap:lt,specularIntensityMap:I,transmission:Pt,transmissionMap:Q,thicknessMap:$,gradientMap:ct,opaque:_.transparent===!1&&_.blending===ui&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:Et,combine:_.combine,mapUv:Lt&&f(_.map.channel),aoMapUv:Pe&&f(_.aoMap.channel),lightMapUv:ye&&f(_.lightMap.channel),bumpMapUv:Ze&&f(_.bumpMap.channel),normalMapUv:ue&&f(_.normalMap.channel),displacementMapUv:En&&f(_.displacementMap.channel),emissiveMapUv:we&&f(_.emissiveMap.channel),metalnessMapUv:an&&f(_.metalnessMap.channel),roughnessMapUv:on&&f(_.roughnessMap.channel),anisotropyMapUv:Ot&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:lt&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ue||ln),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!C.attributes.uv&&(Lt||rt),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===te,decodeVideoTextureEmissive:we&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===te,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&_.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function v(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let b=d[_.type],N;if(b){let P=Un[b];N=Bu.clone(P.uniforms)}else N=_.uniforms;return N}function E(_,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new O_(i,b,_,s),c.push(N),h.set(b,N)),N}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:S,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function H_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,g,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=g,S.group=m),t++,S}function l(d,f,p,v,g,m,S){S.reversedDepth===!0&&(g=-g);let E=o(d,f,p,v,g,m);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(d,f,p,v,g,m){let S=o(d,f,p,v,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||V_),n.length>1&&n.sort(f||sd),s.length>1&&s.sort(f||sd)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function G_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rd,i.set(n,[a])):s>=r.length?(a=new rd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new zt};break;case"SpotLight":e={position:new F,direction:new F,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q_=0;function Y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $_(i){let t=new W_,e=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,E=0,M=0,w=0,A=0,_=0,b=0,N=0,P=0;c.sort(Y_);for(let k=0,L=c.length;k<L;k++){let C=c[k],G=C.color,q=C.intensity,W=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===di?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],q);P++}else if(C.isSunLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,tt=e.get(C);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=nt;let yt=J.getViewportCount();for(let Dt=0;Dt<yt;Dt++)n.sunShadowMatrix[v+Dt]=J.getMatrix(Dt),n.sunShadowCascade[v+Dt]=J._cascadeData[Dt];v+=yt,p++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,tt=e.get(C);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=X,g++}else if(C.isSpotLight){let X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(G).multiplyScalar(q),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[S]=X;let J=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,J.updateMatrices(C),C.castShadow&&N++),n.spotLightMatrix[S]=J.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=nt,_++}S++}else if(C.isRectAreaLight){let X=t.get(C);X.color.copy(G).multiplyScalar(q),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=X,E++}else if(C.isPointLight){let X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let J=C.shadow,tt=e.get(C);tt.shadowIntensity=J.intensity,tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=C.shadow.matrix,A++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(q),X.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[M]=X,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.sunLength!==f||O.directionalLength!==g||O.pointLength!==m||O.spotLength!==S||O.rectAreaLength!==E||O.hemiLength!==M||O.numSunShadows!==p||O.numDirectionalShadows!==w||O.numPointShadows!==A||O.numSpotShadows!==_||O.numSpotMaps!==b||O.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-N,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,O.sunLength=f,O.directionalLength=g,O.pointLength=m,O.spotLength=S,O.rectAreaLength=E,O.hemiLength=M,O.numSunShadows=p,O.numDirectionalShadows=w,O.numPointShadows=A,O.numSpotShadows=_,O.numSpotMaps=b,O.numLightProbes=P,n.version=q_++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,g=0,m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let M=c[S];if(M.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function ad(i){let t=new $_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Z_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ad(i),t.set(s,[o])):r>=a.length?(o=new ad(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`,j_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Q_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],od=new re,br=new F,Nc=new F;function tx(i,t,e){let n=new ai,s=new Tt,r=new Tt,a=new he,o=new Ua,l=new Fa,c={},h=e.maxTextureSize,u={[hi]:Ue,[Ue]:hi,[nn]:nn},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:J_,fragmentShader:K_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new $e;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let m=this.type;this.render=function(A,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===nu&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Pi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let L=m!==this.type;L&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=A.length;C<G;C++){let q=A[C],W=q.shadow;if(W===void 0){It("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let nt=W.getFrameExtents();s.multiply(nt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||L===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===_s){if(q.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new tn(s.x,s.y,{format:di,type:wn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Yn(s.x,s.y,bn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Xn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ce,W.map.depthTexture.magFilter=Ce}else q.isPointLight?(W.map=new Ar(s.x),W.map.depthTexture=new nr(s.x,Sn)):(W.map=new tn(s.x,s.y),W.map.depthTexture=new Yn(s.x,s.y,Sn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Xn,this.type===mr?(W.map.depthTexture.compareFunction=X?mc:pc,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ce,W.map.depthTexture.magFilter=Ce);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,b);let tt=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let yt=0;yt<J;yt++){let Dt=W.getCamera(yt);if(q.isPointLight){let j=W.camera,_t=W.matrix,St=q.distance||j.far;St!==j.far&&(j.far=St,j.updateProjectionMatrix()),br.setFromMatrixPosition(q.matrixWorld),j.position.copy(br),Nc.copy(j.position),Nc.add(j_[yt]),j.up.copy(Q_[yt]),j.lookAt(Nc),j.updateMatrixWorld(),_t.makeTranslation(-br.x,-br.y,-br.z),od.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(od,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(W.map),i.clear());let j=W.getViewport(yt);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),k.viewport(a)}n=W.getFrustum(yt),M(_,b,Dt,q,tt,this.type)}W.isPointLightShadow!==!0&&this.type===_s&&S(W,b),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(N,P,O)};function S(A,_){let b=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new tn(s.x,s.y,{format:di,type:wn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,b,f,v,null)}function E(A,_,b,N){let P=null,O=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)P=O;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=P.uuid,L=_.uuid,C=c[k];C===void 0&&(C={},c[k]=C);let G=C[L];G===void 0&&(G=P.clone(),C[L]=G,_.addEventListener("dispose",w)),P=G}if(P.visible=_.visible,P.wireframe=_.wireframe,N===_s?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=b}return P}function M(A,_,b,N,P,O){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===_s)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let C=t.update(A),G=A.material;if(Array.isArray(G)){let q=C.groups;for(let W=0,nt=q.length;W<nt;W++){let X=q[W],J=G[X.materialIndex];if(J&&J.visible){let tt=E(A,J,N,O);A.onBeforeShadow(i,A,_,b,C,tt,X),i.renderBufferDirect(b,null,C,tt,A,X),A.onAfterShadow(i,A,_,b,C,tt,X)}}}else if(G.visible){let q=E(A,G,N,O);A.onBeforeShadow(i,A,_,b,C,q,null),i.renderBufferDirect(b,null,C,q,A,null),A.onAfterShadow(i,A,_,b,C,q,null)}}let L=A.children;for(let C=0,G=L.length;C<G;C++)M(L[C],_,b,N,P,O)}function w(A){A.target.removeEventListener("dispose",w);for(let b in c){let N=c[b],P=A.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function ex(i,t){function e(){let I=!1,Q=new he,$=null,ct=new he(0,0,0,0);return{setMask:function(rt){$!==rt&&!I&&(i.colorMask(rt,rt,rt,rt),$=rt)},setLocked:function(rt){I=rt},setClear:function(rt,ot,Et,Vt,st){st===!0&&(rt*=Vt,ot*=Vt,Et*=Vt),Q.set(rt,ot,Et,Vt),ct.equals(Q)===!1&&(i.clearColor(rt,ot,Et,Vt),ct.copy(Q))},reset:function(){I=!1,$=null,ct.set(-1,0,0,0)}}}function n(){let I=!1,Q=!1,$=null,ct=null,rt=null;return{setReversed:function(ot){if(Q!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return Q},setTest:function(ot){ot?xt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(ot){$!==ot&&!I&&(i.depthMask(ot),$=ot)},setFunc:function(ot){if(Q&&(ot=Uu[ot]),ct!==ot){switch(ot){case ua:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case fa:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){I=ot},setClear:function(ot){rt!==ot&&(rt=ot,Q&&(ot=1-ot),i.clearDepth(ot))},reset:function(){I=!1,$=null,ct=null,rt=null,Q=!1}}}function s(){let I=!1,Q=null,$=null,ct=null,rt=null,ot=null,Et=null,Vt=null,st=null;return{setTest:function(Ct){I||(Ct?xt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Ct){Q!==Ct&&!I&&(i.stencilMask(Ct),Q=Ct)},setFunc:function(Ct,Ht,mt){($!==Ct||ct!==Ht||rt!==mt)&&(i.stencilFunc(Ct,Ht,mt),$=Ct,ct=Ht,rt=mt)},setOp:function(Ct,Ht,mt){(ot!==Ct||Et!==Ht||Vt!==mt)&&(i.stencilOp(Ct,Ht,mt),ot=Ct,Et=Ht,Vt=mt)},setLocked:function(Ct){I=Ct},setClear:function(Ct){st!==Ct&&(i.clearStencil(Ct),st=Ct)},reset:function(){I=!1,Q=null,$=null,ct=null,rt=null,ot=null,Et=null,Vt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,E=null,M=null,w=null,A=null,_=null,b=new zt(0,0,0),N=0,P=!1,O=null,k=null,L=null,C=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let J=null,tt={},yt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),j=new he().fromArray(yt),_t=new he().fromArray(Dt);function St(I,Q,$,ct){let rt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(I,ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<$;Et++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Q+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ot}let Rt={};Rt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(ss),Ze(!1),ue(ql),xt(i.CULL_FACE),Pe(Pi);function xt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function _e(I,Q){return d[I]!==Q?(i.bindFramebuffer(I,Q),d[I]=Q,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Lt(I,Q){let $=p,ct=!1;if(I){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let rt=I.textures;if($.length!==rt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Et=rt.length;ot<Et;ot++)$[ot]=i.COLOR_ATTACHMENT0+ot;$.length=rt.length,ct=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ct=!0);ct&&i.drawBuffers($)}function ee(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let ie={[Ii]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};ie[au]=i.MIN,ie[ou]=i.MAX;let Xt={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[Jl]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function Pe(I,Q,$,ct,rt,ot,Et,Vt,st,Ct){if(I===Pi){g===!0&&(kt(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),I!==iu){if(I!==m||Ct!==P){if((S!==Ii||w!==Ii)&&(i.blendEquation(i.FUNC_ADD),S=Ii,w=Ii),Ct)switch(I){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",I);break}else switch(I){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",I);break}E=null,M=null,A=null,_=null,b.set(0,0,0),N=0,m=I,P=Ct}return}rt=rt||Q,ot=ot||$,Et=Et||ct,(Q!==S||rt!==w)&&(i.blendEquationSeparate(ie[Q],ie[rt]),S=Q,w=rt),($!==E||ct!==M||ot!==A||Et!==_)&&(i.blendFuncSeparate(Xt[$],Xt[ct],Xt[ot],Xt[Et]),E=$,M=ct,A=ot,_=Et),(Vt.equals(b)===!1||st!==N)&&(i.blendColor(Vt.r,Vt.g,Vt.b,st),b.copy(Vt),N=st),m=I,P=!1}function ye(I,Q){I.side===nn?kt(i.CULL_FACE):xt(i.CULL_FACE);let $=I.side===Ue;Q&&($=!$),Ze($),I.blending===ui&&I.transparent===!1?Pe(Pi):Pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ct=I.stencilWrite;o.setTest(ct),ct&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),we(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){O!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),O=I)}function ue(I){I!==tu?(xt(i.CULL_FACE),I!==k&&(I===ql?i.cullFace(i.BACK):I===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),k=I}function En(I){I!==L&&(W&&i.lineWidth(I),L=I)}function we(I,Q,$){I?(xt(i.POLYGON_OFFSET_FILL),(C!==Q||G!==$)&&(C=Q,G=$,a.getReversed()&&(Q=-Q,$=-$),i.polygonOffset(Q,$))):kt(i.POLYGON_OFFSET_FILL)}function an(I){I?xt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function on(I){I===void 0&&(I=i.TEXTURE0+q-1),J!==I&&(i.activeTexture(I),J=I)}function ln(I,Q,$){$===void 0&&(J===null?$=i.TEXTURE0+q-1:$=J);let ct=tt[$];ct===void 0&&(ct={type:void 0,texture:void 0},tt[$]=ct),(ct.type!==I||ct.texture!==Q)&&(J!==$&&(i.activeTexture($),J=$),i.bindTexture(I,Q||Rt[I]),ct.type=I,ct.texture=Q)}function B(){let I=tt[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function cn(){try{i.compressedTexImage2D(...arguments)}catch(I){Nt("WebGLState:",I)}}function le(){try{i.compressedTexImage3D(...arguments)}catch(I){Nt("WebGLState:",I)}}function ce(){try{i.texSubImage2D(...arguments)}catch(I){Nt("WebGLState:",I)}}function ft(){try{i.texSubImage3D(...arguments)}catch(I){Nt("WebGLState:",I)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Nt("WebGLState:",I)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Nt("WebGLState:",I)}}function Ot(){try{i.texStorage2D(...arguments)}catch(I){Nt("WebGLState:",I)}}function T(){try{i.texStorage3D(...arguments)}catch(I){Nt("WebGLState:",I)}}function x(){try{i.texImage2D(...arguments)}catch(I){Nt("WebGLState:",I)}}function H(){try{i.texImage3D(...arguments)}catch(I){Nt("WebGLState:",I)}}function it(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function et(I,Q){u[I]!==Q&&(i.pixelStorei(I,Q),u[I]=Q)}function at(I){j.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function ut(I){_t.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function Z(I,Q){let $=c.get(Q);$===void 0&&($=new WeakMap,c.set(Q,$));let ct=$.get(I);ct===void 0&&(ct=i.getUniformBlockIndex(Q,I.name),i.uniformBlockBinding(Q,ct,ct),$.set(I,ct))}function K(I,Q,$){let rt=c.get(Q).get(I);l[rt]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,$),l[rt]=$)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,tt={},d={},l={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,E=null,M=null,w=null,A=null,_=null,b=new zt(0,0,0),N=0,P=!1,O=null,k=null,L=null,C=null,G=null,j.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:kt,bindFramebuffer:_e,drawBuffers:Lt,useProgram:ee,setBlending:Pe,setMaterial:ye,setFlipSided:Ze,setCullFace:ue,setLineWidth:En,setPolygonOffset:we,setScissorTest:an,activeTexture:on,bindTexture:ln,unbindTexture:B,compressedTexImage2D:cn,compressedTexImage3D:le,texImage2D:x,texImage3D:H,pixelStorei:et,getParameter:it,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Ot,texStorage3D:T,texSubImage2D:ce,texSubImage3D:ft,compressedTexSubImage2D:Me,compressedTexSubImage3D:Pt,scissor:at,viewport:ut,reset:lt}}function nx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,v=new FinalizationRegistry(T=>p.delete(T)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,x){return g?new OffscreenCanvas(T,x):os("canvas")}function S(T,x,H){let it=1,et=Ot(T);if((et.width>H||et.height>H)&&(it=H/Math.max(et.width,et.height)),it<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(it*et.width),ut=Math.floor(it*et.height);d===void 0&&(d=m(at,ut));let Z=x?m(at,ut):d;return Z.width=at,Z.height=ut,Z.getContext("2d").drawImage(T,0,0,at,ut),It("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+at+"x"+ut+")."),Z}else return"data"in T&&It("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function E(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,H,it,et,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;it&&(ut=t.get("EXT_texture_norm16"),ut||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8),H===i.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),H===i.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8),H===i.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),H===i.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),H===i.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let K=at?Ws:$t.getTransfer(et);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=K===te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),H===i.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,x){let H;return T?x===null||x===Sn||x===Di?H=i.DEPTH24_STENCIL8:x===bn?H=i.DEPTH32F_STENCIL8:x===vs&&(H=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Sn||x===Di?H=i.DEPTH_COMPONENT24:x===bn?H=i.DEPTH_COMPONENT32F:x===vs&&(H=i.DEPTH_COMPONENT16),H}function b(T,x){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function N(T){let x=new WeakRef(T);n.get(T).__ref=x,p.add(x),v.register(T,x,x)}function P(T){let x=n.get(T).__ref;x!==void 0&&(p.delete(x),v.unregister(x))}function O(T){L(T.target)}function k(T){C(T.target)}function L(T){T.removeEventListener("dispose",O),P(T),q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function C(T){T.removeEventListener("dispose",k),P(T),nt(T)}function G(){for(let T of p){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):L(x))}p.clear(),u.clear()}function q(T){let x=n.get(T);if(x.__webglInit===void 0)return;let H=T.source,it=f.get(H);if(it){let et=it[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&W(T),Object.keys(it).length===0&&f.delete(H)}n.remove(T)}function W(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let H=T.source,it=f.get(H);delete it[x.__cacheKey],a.memory.textures--}function nt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let H=T.depthTexture;if(H&&H.renderTarget===T&&L(H),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let at=0;at<x.__webglFramebuffer[et].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[et][at]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let it=T.textures;for(let et=0,at=it.length;et<at;et++){let ut=n.get(it[et]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(it[et])}n.remove(T)}let X=0;function J(){X=0}function tt(){return X}function yt(T){X=T}function Dt(){let T=X;return T>=s.maxTextures&&It("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function j(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function _t(T,x){let H=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){let it=T.image;if(it===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,T,x);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function St(T,x){let H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){ye(H,T,x);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function Rt(T,x){let H=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){ye(H,T,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function xt(T,x){let H=n.get(T);if(T.version>0&&H.__version!==T.version){Ze(H,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let kt={[rs]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},_e={[Ce]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},Lt={[Eu]:i.NEVER,[gc]:i.ALWAYS,[Cu]:i.LESS,[pc]:i.LEQUAL,[Ru]:i.EQUAL,[mc]:i.GEQUAL,[Pu]:i.GREATER,[Iu]:i.NOTEQUAL};function ee(T,x){if(x.type===bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===Ka||x.magFilter===gr||x.magFilter===$n||x.minFilter===Ye||x.minFilter===Ka||x.minFilter===gr||x.minFilter===$n)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,kt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,kt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,kt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ce||x.minFilter!==gr&&x.minFilter!==$n||x.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(T,x){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",O),N(x));let it=x.source,et=f.get(it);et===void 0&&(et={},f.set(it,et));let at=j(x);if(at!==T.__cacheKey){et[at]===void 0&&(et[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[at].usedTimes++;let ut=et[T.__cacheKey];ut!==void 0&&(et[T.__cacheKey].usedTimes--,ut.usedTimes===0&&W(x)),T.__cacheKey=at,T.__webglTexture=et[at].texture}return H}function Xt(T,x,H){return Math.floor(Math.floor(T/H)/x)}function Pe(T,x,H,it){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,it,x.data);else{at.sort((I,Q)=>I.start-Q.start);let ut=0;for(let I=1;I<at.length;I++){let Q=at[ut],$=at[I],ct=Q.start+Q.count,rt=Xt($.start,x.width,4),ot=Xt(Q.start,x.width,4);$.start<=ct+1&&rt===ot&&Xt($.start+$.count-1,x.width,4)===rt?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++ut,at[ut]=$)}at.length=ut+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let I=0,Q=at.length;I<Q;I++){let $=at[I],ct=Math.floor($.start/4),rt=Math.ceil($.count/4),ot=ct%x.width,Et=Math.floor(ct/x.width),Vt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(i.TEXTURE_2D,0,ot,Et,Vt,st,H,it,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function ye(T,x,H){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let et=ie(T,x),at=x.source;e.bindTexture(it,T.__webglTexture,i.TEXTURE0+H);let ut=n.get(at);if(at.version!==ut.__version||et===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=$t.getPrimaries($t.workingColorSpace),Ct=x.colorSpace===Tn?null:$t.getPrimaries(x.colorSpace),Ht=x.colorSpace===Tn||st===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=S(x.image,!1,s.maxTextureSize);K=Pt(x,K);let lt=r.convert(x.format,x.colorSpace),I=r.convert(x.type),Q=A(x.internalFormat,lt,I,x.normalized,x.colorSpace,x.isVideoTexture);ee(it,x);let $,ct=x.mipmaps,rt=x.isVideoTexture!==!0,ot=ut.__version===void 0||et===!0,Et=at.dataReady,Vt=b(x,K);if(x.isDepthTexture)Q=_(x.format===Zn,x.type),ot&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,lt,I,null));else if(x.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,ct[0].width,ct[0].height);for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,I,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,lt,I,$.data);x.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,K.width,K.height),Et&&Pe(x,K,lt,I)):e.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,lt,I,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Q,ct[0].width,ct[0].height,K.depth);for(let st=0,Ct=ct.length;st<Ct;st++)if($=ct[st],x.format!==An)if(lt!==null)if(rt){if(Et)if(x.layerUpdates.size>0){let Ht=Ec($.width,$.height,x.format,x.type);for(let mt of x.layerUpdates){let ne=$.data.subarray(mt*Ht/$.data.BYTES_PER_ELEMENT,(mt+1)*Ht/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,mt,$.width,$.height,1,lt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,K.depth,lt,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,K.depth,0,$.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,$.width,$.height,K.depth,lt,I,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,$.width,$.height,K.depth,0,lt,I,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(i.TEXTURE_2D,Vt,Q,ct[0].width,ct[0].height);for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],x.format!==An?lt!==null?rt?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,$.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,$.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,$.width,$.height,lt,I,$.data):e.texImage2D(i.TEXTURE_2D,st,Q,$.width,$.height,0,lt,I,$.data)}else if(x.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,Q,K.width,K.height,K.depth),Et)if(x.layerUpdates.size>0){let st=Ec(K.width,K.height,x.format,x.type);for(let Ct of x.layerUpdates){let Ht=K.data.subarray(Ct*st/K.data.BYTES_PER_ELEMENT,(Ct+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,K.width,K.height,1,lt,I,Ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,I,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,lt,I,K.data);else if(x.isData3DTexture)rt?(ot&&e.texStorage3D(i.TEXTURE_3D,Vt,Q,K.width,K.height,K.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,I,K.data)):e.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,lt,I,K.data);else if(x.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(i.TEXTURE_2D,Vt,Q,K.width,K.height);else{let st=K.width,Ct=K.height;for(let Ht=0;Ht<Vt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Q,st,Ct,0,lt,I,null),st>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),u.add(x),st.onpaint=Ct=>{let Ht=Ct.changedElements;for(let mt of u)Ht.includes(mt.image)&&(mt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Ht=i.RGBA,mt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,mt,ne,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){let st=Ot(ct[0]);e.texStorage2D(i.TEXTURE_2D,Vt,Q,st.width,st.height)}for(let st=0,Ct=ct.length;st<Ct;st++)$=ct[st],rt?Et&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,lt,I,$):e.texImage2D(i.TEXTURE_2D,st,Q,lt,I,$);x.generateMipmaps=!1}else if(rt){if(ot){let st=Ot(K);e.texStorage2D(i.TEXTURE_2D,Vt,Q,st.width,st.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,I,K)}else e.texImage2D(i.TEXTURE_2D,0,Q,lt,I,K);E(x)&&x.mipmapsAutoUpdate===!0&&M(it),ut.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ze(T,x,H){if(x.image.length!==6)return;let it=ie(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let at=n.get(et);if(et.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+H);let ut=$t.getPrimaries($t.workingColorSpace),Z=x.colorSpace===Tn?null:$t.getPrimaries(x.colorSpace),K=x.colorSpace===Tn||ut===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let mt=0;mt<6;mt++)!lt&&!I?Q[mt]=S(x.image[mt],!0,s.maxCubemapSize):Q[mt]=I?x.image[mt].image:x.image[mt],Q[mt]=Pt(x,Q[mt]);let $=Q[0],ct=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ot=A(x.internalFormat,ct,rt,x.normalized,x.colorSpace),Et=x.isVideoTexture!==!0,Vt=at.__version===void 0||it===!0,st=et.dataReady,Ct=b(x,$);ee(i.TEXTURE_CUBE_MAP,x);let Ht;if(x.isDepthTexture){if(ot=_(x.format===Zn,x.type),Vt)if(Et)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,$.width,$.height);else for(let mt=0;mt<6;mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,$.width,$.height,0,ct,rt,null)}else if(lt){Et&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ot,$.width,$.height);for(let mt=0;mt<6;mt++){Ht=Q[mt].mipmaps;for(let ne=0;ne<Ht.length;ne++){let Ae=Ht[ne];x.format!==An?ct!==null?Et?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Ae.width,Ae.height,ct,Ae.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ot,Ae.width,Ae.height,0,Ae.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,0,0,Ae.width,Ae.height,ct,rt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne,ot,Ae.width,Ae.height,0,ct,rt,Ae.data)}}}else{if(Ht=x.mipmaps,Et&&Vt){Ht.length>0&&Ct++;let mt=Ot(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ot,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(I){Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Q[mt].width,Q[mt].height,ct,rt,Q[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,Q[mt].width,Q[mt].height,0,ct,rt,Q[mt].data);for(let ne=0;ne<Ht.length;ne++){let Kn=Ht[ne].image[mt].image;Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,Kn.width,Kn.height,ct,rt,Kn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ot,Kn.width,Kn.height,0,ct,rt,Kn.data)}}else{Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct,rt,Q[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,ct,rt,Q[mt]);for(let ne=0;ne<Ht.length;ne++){let Ae=Ht[ne];Et?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,0,0,ct,rt,Ae.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ne+1,ot,ct,rt,Ae.image[mt])}}}E(x)&&x.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),at.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ue(T,x,H,it,et,at){let ut=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),K=A(H.internalFormat,ut,Z,H.normalized,H.colorSpace),lt=n.get(x),I=n.get(H);if(I.__renderTarget=x,!lt.__hasExternalTextures){let Q=Math.max(1,x.width>>at),$=Math.max(1,x.height>>at);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,at,K,Q,$,x.depth,0,ut,Z,null):e.texImage2D(et,at,K,Q,$,0,ut,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,et,I.__webglTexture,0,ce(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,et,I.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function En(T,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let it=x.depthTexture,et=it&&it.isDepthTexture?it.type:null,at=_(x.stencilBuffer,et),ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(x),at,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,T)}else{let it=x.textures;for(let et=0;et<it.length;et++){let at=it[et],ut=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),K=A(at.internalFormat,ut,Z,at.normalized,at.colorSpace);ft(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(x),K,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,x,H){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(x.depthTexture);et.__renderTarget=x;let at=it?x.depthTexture.image[0]:x.depthTexture.image;(!et.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),it?xt(x.depthTexture,0):_t(x.depthTexture,0);let ut=et.__webglTexture,Z=ce(x),K=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,lt=x.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,ut,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,ut,0);else if(x.depthTexture.format===Zn)ft(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,ut,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function an(T){let x=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let it=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",et)};it.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=it}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let it=0;it<6;it++)we(x.__webglFramebuffer[it],T,it);else T.texture.mipmaps.length>0?we(x.__webglFramebuffer[0],T,0):we(x.__webglFramebuffer,T,0);else if(H){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),En(x.__webglDepthbuffer[it],T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),En(x.__webglDepthbuffer,T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function on(T,x,H){let it=n.get(T);x!==void 0&&ue(it.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&an(T)}function ln(T){let x=T.texture,H=n.get(T),it=n.get(x);T.addEventListener("dispose",k),N(T);let et=T.textures,at=T.isWebGLCubeRenderTarget===!0,ut=et.length>1;if(ut||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,a.memory.textures++),at){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let K=0;K<x.mipmaps.length;K++)H.__webglFramebuffer[Z][K]=i.createFramebuffer()}else H.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)H.__webglFramebuffer[Z]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ut)for(let Z=0,K=et.length;Z<K;Z++){let lt=n.get(et[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ft(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<et.length;Z++){let K=et[Z];H.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let lt=r.convert(K.format,K.colorSpace),I=r.convert(K.type),Q=A(K.internalFormat,lt,I,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),$=ce(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),En(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)ue(H.__webglFramebuffer[Z][K],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else ue(H.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(x)?M(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Z=0,K=et.length;Z<K;Z++){let lt=et[Z],I=n.get(lt),Q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),ee(Q,lt),ue(H.__webglFramebuffer,T,lt,i.COLOR_ATTACHMENT0+Z,Q,0),E(lt)&&M(Q)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,it.__webglTexture),ee(Z,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)ue(H.__webglFramebuffer[K],T,x,i.COLOR_ATTACHMENT0,Z,K);else ue(H.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);E(x)?M(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&an(T)}function B(T){let x=T.textures;for(let H=0,it=x.length;H<it;H++){let et=x[H];if(E(et)&&et.mipmapsAutoUpdate===!0){let at=w(T),ut=n.get(et).__webglTexture;e.bindTexture(at,ut),M(at),e.unbindTexture()}}}let cn=[];function le(T){if(T.samples>0){if(ft(T)===!1){let x=T.textures,H=T.width,it=T.height,et=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(T),Z=x.length>1;if(Z)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let I=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,H,it,0,0,H,it,et,i.NEAREST),l===!0&&(cn.length=0,cn.push(i.COLOR_ATTACHMENT0+lt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&cn.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,cn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let I=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function ft(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Pt(T,x){let H=T.colorSpace,it=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Gs&&H!==Tn&&($t.getTransfer(H)===te?(it!==An||et!==Ke)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",H)),x}function Ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=J,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=_t,this.setTexture2DArray=St,this.setTexture3D=Rt,this.setTextureCube=xt,this.rebindTextures=on,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=an,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ft,this.dispose=G}function ix(i,t){function e(n,s=Tn){let r,a=$t.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return i.BYTE;if(n===oc)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===uc)return i.RGB;if(n===An)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===eo)return i.RED_INTEGER;if(n===di)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===_r||n===xr||n===vr||n===yr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho||n===uo||n===fo||n===Mr||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uo)return r.COMPRESSED_R11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return r.COMPRESSED_RG11_EAC;if(n===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Ao||n===To||n===Eo||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Po||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Do||n===Sr||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=typeof XRWebGLBinding<"u",g=new Hc,m={},S=e.getContextAttributes(),E=null,M=null,w=[],A=[],_=new Tt,b=null,N=null,P=new qe;P.viewport=new he;let O=new qe;O.viewport=new he;let k=[P,O],L=new Ya,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _t=w[j];return _t===void 0&&(_t=new us,w[j]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(j){let _t=w[j];return _t===void 0&&(_t=new us,w[j]=_t),_t.getGripSpace()},this.getHand=function(j){let _t=w[j];return _t===void 0&&(_t=new us,w[j]=_t),_t.getHandSpace()};function q(j){let _t=A.indexOf(j.inputSource);if(_t===-1)return;let St=w[_t];St!==void 0&&(St.update(j.inputSource,j.frame,c||a),St.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let j=0;j<w.length;j++){let _t=A[j];_t!==null&&(A[j]=null,w[j].disconnect(_t))}C=null,G=null,g.reset();for(let j in m)delete m[j];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,M=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),N!==null){let j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=S.stencil?Zn:Xn,Rt=S.stencil?Di:Sn);let kt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new tn(d.textureWidth,d.textureHeight,{format:An,type:Ke,depthTexture:new Yn(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tn(f.framebufferWidth,f.framebufferHeight,{format:An,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(j){for(let _t=0;_t<j.removed.length;_t++){let St=j.removed[_t],Rt=A.indexOf(St);Rt>=0&&(A[Rt]=null,w[Rt].disconnect(St))}for(let _t=0;_t<j.added.length;_t++){let St=j.added[_t],Rt=A.indexOf(St);if(Rt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=A.length){A.push(St),Rt=kt;break}else if(A[kt]===null){A[kt]=St,Rt=kt;break}if(Rt===-1)break}let xt=w[Rt];xt&&xt.connect(St)}}function X(j,_t){_t===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_t.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _t=j.near,St=j.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(St=g.depthFar)),L.near=O.near=P.near=_t,L.far=O.far=P.far=St,(C!==L.near||G!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,G=L.far),L.layers.mask=j.layers.mask|6,P.layers.mask=L.layers.mask&-5,O.layers.mask=L.layers.mask&-3;let Rt=j.parent,xt=L.cameras;X(L,Rt);for(let kt=0;kt<xt.length;kt++)X(xt[kt],Rt);L.projectionMatrix.copy(P.projectionMatrix),L.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),J(j,L,Rt)};function J(j,_t,St){St===null?j.matrix.copy(_t.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(_t.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_t.projectionMatrix),j.projectionMatrixInverse.copy(_t.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=cs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return m[j]};let tt=null;function yt(j,_t){if(h=_t.getViewerPose(c||a),p=_t,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Rt=!1;St.length!==L.cameras.length&&(L.cameras.length=0,Rt=!0);for(let Lt=0;Lt<St.length;Lt++){let ee=St[Lt],ie=null;if(f!==null)ie=f.getViewport(ee);else{let Pe=u.getViewSubImage(d,ee);ie=Pe.viewport,Lt===0&&(t.setRenderTargetTextures(M,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(M))}let Xt=k[Lt];Xt===void 0&&(Xt=new qe,Xt.layers.enable(Lt),Xt.viewport=new he,k[Lt]=Xt),Xt.matrix.fromArray(ee.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(ee.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ie.x,ie.y,ie.width,ie.height),Lt===0&&(L.matrix.copy(Xt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Rt===!0&&L.cameras.push(Xt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Lt=u.getDepthInformation(St[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(Lt,s.renderState)}if(xt&&xt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let Lt=0;Lt<St.length;Lt++){let ee=St[Lt].camera;if(ee){let ie=m[ee];ie||(ie=new ir,m[ee]=ie);let Xt=u.getCameraImage(ee);ie.sourceTexture=Xt}}}}for(let St=0;St<w.length;St++){let Rt=A[St],xt=w[St];Rt!==null&&xt!==void 0&&xt.update(Rt,_t,c||a)}tt&&tt(j,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),p=null}let Dt=new ld;Dt.setAnimationLoop(yt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}},ax=new re,xd=new Ft;xd.set(-1,0,0,0,1,0,0,0,1);function ox(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,wc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ue&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ue&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),E=S.envMap,M=S.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,t,e,n){let s={},r={};function a(S,E){let M=E.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,E){let M=s[S.id];M===void 0&&(p(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",g));let w=E.program;n.updateUBOMapping(S,w);let A=t.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function l(S){let E=i.createBuffer(),M=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){let E=s[S.id],M=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=M.length;A<_;A++){let b=M[A];if(Array.isArray(b))for(let N=0,P=b.length;N<P;N++)h(b[N],A,N,w);else h(b,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,M,w){if(d(S,E,M,w)===!0){let A=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let N=0;N<_.length;N++){let P=_[N],O=v(P,!0);u(P,S.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function u(S,E,M){typeof S=="number"||typeof S=="boolean"?E[M]=S:S.isMatrix3?(E[M]=S.elements[0],E[M+1]=S.elements[1],E[M+2]=S.elements[2],E[M+3]=0,E[M+4]=S.elements[3],E[M+5]=S.elements[4],E[M+6]=S.elements[5],E[M+7]=0,E[M+8]=S.elements[6],E[M+9]=S.elements[7],E[M+10]=S.elements[8],E[M+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-M),M):S.toArray(E,M)}function d(S,E,M,w){let A=S.value,_=E+"_"+M;if(Array.isArray(A)){w[_]===void 0&&(w[_]=[]);let b=w[_],N=!1;for(let P=0;P<A.length;P++)f(A[P],b,P)===!0&&(N=!0);return N}return f(A,w,_)}function f(S,E,M){if(E[M]===void 0)return typeof S=="number"||typeof S=="boolean"?E[M]=S:ArrayBuffer.isView(S)?E[M]=S.slice():E[M]=S.clone(),!0;{let w=E[M];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return E[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function p(S){let E=S.uniforms,M=0,w=16;for(let _=0,b=E.length;_<b;_++){let N=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,O=N.length;P<O;P++){let k=N[P],L=Array.isArray(k.value)?k.value:[k.value],C=Array.isArray(E[_])||Array.isArray(k.value),G=M;for(let W=0,nt=L.length;W<nt;W++){let X=L[W],J=v(X,C),tt=M%w,yt=tt%J.boundary,Dt=tt+yt;M+=yt,Dt!==0&&w-Dt<J.storage&&(M+=w-Dt),W===0&&(G=M),M+=J.storage}let q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new q((M-G)/Float32Array.BYTES_PER_ELEMENT),k.__offset=G}}let A=M%w;return A>0&&(M+=w-A),S.__size=M,S.__cache={},this}function v(S,E){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(S){let E=S.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function hx(){return Nn===null&&(Nn=new Aa(cx,16,16,di,wn),Nn.name="DFG_LUT",Nn.minFilter=Ye,Nn.magFilter=Ye,Nn.wrapS=Rn,Nn.wrapT=Rn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var ko=class{constructor(t={}){let{canvas:e=Lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ke}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=f,g=new Set([io,no,eo]),m=new Set([Ke,Sn,vs,Di,Qa,to]),S=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,A=null,_=[],b=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,k=null,L=null,C=null,G=null;this._outputColorSpace=Xe;let q=0,W=0,nt=null,X=-1,J=null,tt=new he,yt=new he,Dt=null,j=new zt(0),_t=0,St=e.width,Rt=e.height,xt=1,kt=null,_e=null,Lt=new he(0,0,St,Rt),ee=new he(0,0,St,Rt),ie=!1,Xt=new ai,Pe=new Ta,ye=!1,Ze=!1,ue=new re,En=new F,we=new he,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},on=!1;function ln(){return nt===null?xt:1}let B=n;function cn(y,D){return e.getContext(y,D)}let le,ce,ft,Me,Pt,Ot,T,x,H,it,et,at,ut,Z,K,lt,I,Q,$,ct,rt,ot,Et;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){let D="webgl2";if(B=cn(D,y),B===null)throw cn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(y){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Nt("WebGLRenderer: "+y.message),y}function Vt(){le=new M0(B),le.init(),rt=new ix(B,le),ce=new h0(B,le,t,rt),ft=new ex(B,le),ce.reversedDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),L=B.createFramebuffer(),C=B.createFramebuffer(),G=B.createFramebuffer(),Me=new w0(B),Pt=new H_,Ot=new nx(B,le,ft,Pt,ce,rt,Me),T=new y0(P),x=new Tp(B),ot=new l0(B,x),H=new S0(B,x,Me,ot),it=new T0(B,H,x,ot,Me),Q=new A0(B,ce,Ot),K=new u0(Pt),et=new z_(P,T,le,ce,ot,K),at=new ox(P,Pt),ut=new G_,Z=new Z_(le),I=new o0(P,T,ft,it,p,l),lt=new tx(P,it,ce),Et=new lx(B,Me,ce,ft),$=new c0(B,le,Me),ct=new b0(B,le,Me),Me.programs=et.programs,P.capabilities=ce,P.extensions=le,P.properties=Pt,P.renderLists=ut,P.shadowMap=lt,P.state=ft,P.info=Me}v!==Ke&&(N=new C0(v,e.width,e.height,o,s,r));let st=new Vc(P,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let y=le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(y){y!==void 0&&(xt=y,this.setSize(St,Rt,!1))},this.getSize=function(y){return y.set(St,Rt)},this.setSize=function(y,D,Y=!0){if(st.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}St=y,Rt=D,e.width=Math.floor(y*xt),e.height=Math.floor(D*xt),Y===!0&&(e.style.width=y+"px",e.style.height=D+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(St*xt,Rt*xt).floor()},this.setDrawingBufferSize=function(y,D,Y){St=y,Rt=D,xt=Y,e.width=Math.floor(y*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(v===Ke){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(Lt)},this.setViewport=function(y,D,Y,z){y.isVector4?Lt.set(y.x,y.y,y.z,y.w):Lt.set(y,D,Y,z),ft.viewport(tt.copy(Lt).multiplyScalar(ln()).round())},this.getScissor=function(y){return y.copy(ee)},this.setScissor=function(y,D,Y,z){y.isVector4?ee.set(y.x,y.y,y.z,y.w):ee.set(y,D,Y,z),ft.scissor(yt.copy(ee).multiplyScalar(ln()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){ft.setScissorTest(ie=y)},this.setOpaqueSort=function(y){kt=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,Y=!0){let z=0;if(y){let V=!1;if(nt!==null){let dt=nt.texture.format;V=g.has(dt)}if(V){let dt=nt.texture.type,Mt=m.has(dt),ht=I.getClearColor(),vt=I.getClearAlpha(),At=ht.r,Bt=ht.g,qt=ht.b;Mt?(S[0]=At,S[1]=Bt,S[2]=qt,S[3]=vt,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=At,E[1]=Bt,E[2]=qt,E[3]=vt,B.clearBufferiv(B.COLOR,0,E))}else z|=B.COLOR_BUFFER_BIT}D&&(z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),I.dispose(),ut.dispose(),Z.dispose(),Ot.dispose(),Pt.dispose(),T.dispose(),it.dispose(),H.dispose(),ot.dispose(),Et.dispose(),et.dispose(),st.dispose(),st.removeEventListener("sessionstart",uh),st.removeEventListener("sessionend",dh),vi.stop()};function Ct(y){y.preventDefault(),Xs("WebGLRenderer: Context Lost."),O=!0}function Ht(){Xs("WebGLRenderer: Context Restored."),O=!1;let y=Me.autoReset,D=lt.enabled,Y=lt.autoUpdate,z=lt.needsUpdate,V=lt.type;Vt(),Me.autoReset=y,lt.enabled=D,lt.autoUpdate=Y,lt.needsUpdate=z,lt.type=V}function mt(y){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ne(y){let D=y.target;D.removeEventListener("dispose",ne),Ae(D)}function Ae(y){Kn(y),Pt.remove(y)}function Kn(y){let D=Pt.get(y).programs;D!==void 0&&(D.forEach(function(Y){et.releaseProgram(Y)}),y.isShaderMaterial&&et.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,Y,z,V,dt){D===null&&(D=an);let Mt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ht=vf(y,D,Y,z,V);ft.setMaterial(z,Mt);let vt=Y.index,At=1;if(z.wireframe===!0){if(vt=H.getWireframeAttribute(Y),vt===void 0)return;At=2}let Bt=Y.drawRange,qt=Y.attributes.position,bt=Bt.start*At,Yt=(Bt.start+Bt.count)*At;dt!==null&&(bt=Math.max(bt,dt.start*At),Yt=Math.min(Yt,(dt.start+dt.count)*At)),vt!==null?(bt=Math.max(bt,0),Yt=Math.min(Yt,vt.count)):qt!=null&&(bt=Math.max(bt,0),Yt=Math.min(Yt,qt.count));let xe=Yt-bt;if(xe<0||xe===1/0)return;ot.setup(V,z,ht,Y,vt);let ae,se=$;if(vt!==null&&(ae=x.get(vt),se=ct,se.setIndex(ae)),V.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*ln()),se.setMode(B.LINES)):se.setMode(B.TRIANGLES);else if(V.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),ft.setLineWidth(Fe*ln()),V.isLineSegments?se.setMode(B.LINES):V.isLineLoop?se.setMode(B.LINE_LOOP):se.setMode(B.LINE_STRIP)}else V.isPoints?se.setMode(B.POINTS):V.isSprite&&se.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(le.get("WEBGL_multi_draw"))se.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Fe=V._multiDrawStarts,wt=V._multiDrawCounts,Ge=V._multiDrawCount,jt=vt?x.get(vt).bytesPerElement:1,yi=Pt.get(z).currentProgram.getUniforms();for(let Oe=0;Oe<Ge;Oe++)yi.setValue(B,"_gl_DrawID",Oe),se.render(Fe[Oe]/jt,wt[Oe])}else if(V.isInstancedMesh)se.renderInstances(bt,xe,V.count);else if(Y.isInstancedBufferGeometry){let Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,Fe);se.renderInstances(bt,xe,wt)}else se.render(bt,xe)};function hh(y,D,Y,z){k!==null&&y.isNodeMaterial&&k.setObject(z,y),ye===!0&&K.setState(y,Y,!1),y.transparent===!0&&y.side===nn&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,Rs(y,D,z),y.side=hi,y.needsUpdate=!0,Rs(y,D,z),y.side=nn):Rs(y,D,z)}this.compile=function(y,D,Y=null){Y===null&&(Y=y),k!==null&&k.renderStart(y,D,Y),A=Z.get(Y),A.init(D),b.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),y!==Y&&y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),Ze=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Ze),ye===!0&&K.setGlobalState(this.clippingPlanes,D),k!==null&&lt.render(A.state.shadowsArray,Y,D);let z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let dt=V.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let ht=dt[Mt];hh(ht,Y,D,V),z.add(ht)}else hh(dt,Y,D,V),z.add(dt)}),A=b.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(y,D,Y=null){let z=this.compile(y,D,Y);return new Promise(V=>{function dt(){if(z.forEach(function(Mt){let vt=Pt.get(Mt).currentProgram;(vt===void 0||vt.isReady())&&z.delete(Mt)}),z.size===0){V(y);return}setTimeout(dt,10)}le.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let dl=null;function _f(y){dl&&dl(y)}function uh(){vi.stop()}function dh(){vi.start()}let vi=new ld;vi.setAnimationLoop(_f),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(y){dl=y,st.setAnimationLoop(y),y===null?vi.stop():vi.start()},st.addEventListener("sessionstart",uh),st.addEventListener("sessionend",dh),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;k!==null&&k.renderStart(y,D);let Y=st.enabled===!0&&st.isPresenting===!0,z=N!==null&&(nt===null||Y)&&N.begin(P,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,D,nt),A=Z.get(y,b.length),A.init(D),A.state.textureUnits=Ot.getTextureUnits(),b.push(A),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Pe.setFromArrayCamera(D):Xt.setFromProjectionMatrix(ue,un,D.reversedDepth),Ze=this.localClippingEnabled,ye=K.init(this.clippingPlanes,Ze),w=ut.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&fl(Mt,D,-1/0,P.sortObjects)}fl(y,D,0,P.sortObjects),w.finish(),k!==null&&k.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(kt,_e),on=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,on&&I.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),ye===!0&&K.beginShadows();let V=A.state.shadowsArray;if(lt.render(V,y,D),ye===!0&&K.endShadows(),(z&&N.hasRenderPass())===!1){let Mt=w.opaque,ht=w.transmissive;if(A.setupLights(),D.isArrayCamera){let vt=D.cameras;if(ht.length>0)for(let At=0,Bt=vt.length;At<Bt;At++){let qt=vt[At];ph(Mt,ht,y,qt)}on&&I.render(y);for(let At=0,Bt=vt.length;At<Bt;At++){let qt=vt[At];fh(w,y,qt,qt.viewport)}}else ht.length>0&&ph(Mt,ht,y,D),on&&I.render(y),fh(w,y,D)}nt!==null&&W===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),z&&N.end(P),y.isScene===!0&&y.onAfterRender(P,y,D),ot.resetDefaultState(),X=-1,J=null,b.pop(),b.length>0?(A=b[b.length-1],Ot.setTextureUnits(A.state.textureUnits),ye===!0&&K.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,k!==null&&k.renderEnd()};function fl(y,D,Y,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let Mt=D.isArrayCamera?Pe:Xt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){z&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);let ht=it.update(y),vt=y.material;vt.visible&&w.push(y,ht,vt,Y,we.z,null,D)}}else if(y.isMesh||y.isLine||y.isPoints){let Mt=D.isArrayCamera?Pe:Xt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){let ht=it.update(y),vt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),we.copy(ht.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(vt)){let At=ht.groups;for(let Bt=0,qt=At.length;Bt<qt;Bt++){let bt=At[Bt],Yt=vt[bt.materialIndex];Yt&&Yt.visible&&w.push(y,ht,Yt,Y,we.z,bt,D)}}else vt.visible&&w.push(y,ht,vt,Y,we.z,null,D)}}}let dt=y.children;for(let Mt=0,ht=dt.length;Mt<ht;Mt++)fl(dt[Mt],D,Y,z)}function fh(y,D,Y,z){let{opaque:V,transmissive:dt,transparent:Mt}=y;A.setupLightsView(Y),ye===!0&&K.setGlobalState(P.clippingPlanes,Y),z&&ft.viewport(tt.copy(z)),V.length>0&&Ur(V,D,Y),dt.length>0&&Ur(dt,D,Y),Mt.length>0&&Ur(Mt,D,Y),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ph(y,D,Y,z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let bt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new tn(1,1,{generateMipmaps:!0,type:bt?wn:Ke,minFilter:$n,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let dt=A.state.transmissionRenderTarget[z.id],Mt=z.viewport||tt;dt.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let ht=P.getRenderTarget(),vt=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(j),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),on&&I.render(Y);let Bt=P.toneMapping;P.toneMapping=Dn;let qt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),ye===!0&&K.setGlobalState(P.clippingPlanes,z),Ur(y,Y,z),Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt),le.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Yt=0,xe=D.length;Yt<xe;Yt++){let ae=D[Yt],{object:se,geometry:Fe,material:wt,group:Ge}=ae;if(wt.side===nn&&se.layers.test(z.layers)){let jt=wt.side;wt.side=Ue,wt.needsUpdate=!0,mh(se,Y,z,Fe,wt,Ge),wt.side=jt,wt.needsUpdate=!0,bt=!0}}bt===!0&&(Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt))}P.setRenderTarget(ht,vt,At),P.setClearColor(j,_t),qt!==void 0&&(z.viewport=qt),P.toneMapping=Bt}function Ur(y,D,Y){let z=D.isScene===!0?D.overrideMaterial:null;for(let V=0,dt=y.length;V<dt;V++){let Mt=y[V],{object:ht,geometry:vt,group:At}=Mt,Bt=Mt.material;Bt.allowOverride===!0&&z!==null&&(Bt=z),ht.layers.test(Y.layers)&&mh(ht,D,Y,vt,Bt,At)}}function mh(y,D,Y,z,V,dt){k!==null&&V.isNodeMaterial&&k.setObject(y,V),y.onBeforeRender(P,D,Y,z,V,dt),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(P,D,Y,z,y,dt),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=Ue,V.needsUpdate=!0,P.renderBufferDirect(Y,D,z,V,y,dt),V.side=hi,V.needsUpdate=!0,P.renderBufferDirect(Y,D,z,V,y,dt),V.side=nn):P.renderBufferDirect(Y,D,z,V,y,dt),y.onAfterRender(P,D,Y,z,V,dt)}function gh(y){let D=0;for(let Y of y)Y.texture!==null&&D++;return D}function Rs(y,D,Y){D.isScene!==!0&&(D=an);let z=Pt.get(y),V=A.state.lights,dt=A.state.shadowsArray,Mt=V.state.version,ht=et.getParameters(y,V.state,dt,D,Y,A.state.lightProbeGridArray),vt=et.getProgramCacheKey(ht),At=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Bt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=T.get(y.envMap||z.environment,Bt),z.envMapRotation=z.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",ne),At=new Map,z.programs=At,z.programVariants=new Map);let qt=At.get(vt);if(qt!==void 0){if(z.currentProgram===qt&&z.lightsStateVersion===Mt)return xh(y,ht),qt}else ht.uniforms=et.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,Y,ht),y.onBeforeCompile(ht,P),qt=et.acquireProgram(ht,vt),At.set(vt,qt),z.uniforms=ht.uniforms;let bt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=K.uniform),xh(y,ht),z.needsLights=Mf(y),z.lightsStateVersion=Mt,z.needsLights&&(bt.ambientLightColor.value=V.state.ambient,bt.lightProbe.value=V.state.probe,bt.sunLights.value=V.state.sun,bt.sunLightShadows.value=V.state.sunShadow,bt.directionalLights.value=V.state.directional,bt.directionalLightShadows.value=V.state.directionalShadow,bt.spotLights.value=V.state.spot,bt.spotLightShadows.value=V.state.spotShadow,bt.rectAreaLights.value=V.state.rectArea,bt.ltc_1.value=V.state.rectAreaLTC1,bt.ltc_2.value=V.state.rectAreaLTC2,bt.pointLights.value=V.state.point,bt.pointLightShadows.value=V.state.pointShadow,bt.hemisphereLights.value=V.state.hemi,bt.sunShadowMatrix.value=V.state.sunShadowMatrix,bt.sunShadowCascade.value=V.state.sunShadowCascade,bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,bt.spotLightMatrix.value=V.state.spotLightMatrix,bt.spotLightMap.value=V.state.spotLightMap,bt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.numLightProbeGrids=gh(A.state.lightProbeGridArray),z.currentProgram=qt,z.uniformsList=null,qt}function xf(y,D,Y,z,V){let dt=Pt.get(y),Mt=dt.currentProgram.id+","+z+","+V,ht=dt.programVariants.get(Mt);return ht===void 0?(ht=Rs(y,D,Y),dt.programVariants.set(Mt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=z,dt.toneMapping=V),ht}function _h(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=ys.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function xh(y,D){let Y=Pt.get(y);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function vf(y,D,Y,z,V){D.isScene!==!0&&(D=an),Ot.resetTextureUnits();let dt=D.fog,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ht=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,At=T.get(z.envMap||Mt,vt),Bt=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!Y.morphAttributes.position,Yt=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color,ae=Dn;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ae=P.toneMapping);let se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Fe=se!==void 0?se.length:0,wt=Pt.get(z),Ge=A.state.lights;if(ye===!0&&(Ze===!0||y!==J)){let de=y===J&&z.id===X;K.setState(z,y,de)}let jt=!1,yi=!1;z.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==Ge.state.version||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==At||z.fog===!0&&wt.fog!==dt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==K.numPlanes||wt.numIntersection!==K.numIntersection)||wt.vertexAlphas!==Bt||wt.vertexTangents!==qt||wt.morphTargets!==bt||wt.morphNormals!==Yt||wt.morphColors!==xe||wt.morphTargetsCount!==Fe||wt.numLightProbeGrids!==gh(A.state.lightProbeGridArray)?jt=!0:(wt.outputColorSpace!==ht||wt.toneMapping!==ae)&&(yi=!0):(jt=!0,wt.__version=z.version);let Oe=wt.currentProgram;(jt===!0||yi===!0)&&(Oe=yi===!0?xf(z,D,V,ht,ae):Rs(z,D,V),k&&z.isNodeMaterial&&k.onUpdateProgram(z,Oe,wt));let Fr=!1,jn=!1,Mi=!1,Zt=Oe.getUniforms(),Ie=wt.uniforms;if(ft.useProgram(Oe.program)&&(Fr=!0,jn=!0,Mi=!0),z.id!==X&&(X=z.id,jn=!0),Fr||J!==y){ft.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Zt.setValue(B,"projectionMatrix",y.projectionMatrix),Zt.setValue(B,"viewMatrix",y.matrixWorldInverse);let Te=Zt.map.cameraPosition;Te!==void 0&&Te.setValue(B,En.setFromMatrixPosition(y.matrixWorld)),ce.logarithmicDepthBuffer&&Zt.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Zt.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,jn=!0,Mi=!0)}if(wt.needsLights&&(Ge.state.sunShadowMap.length>0&&Zt.setValue(B,"sunShadowMap",Ge.state.sunShadowMap,Ot),Ge.state.directionalShadowMap.length>0&&Zt.setValue(B,"directionalShadowMap",Ge.state.directionalShadowMap,Ot),Ge.state.spotShadowMap.length>0&&Zt.setValue(B,"spotShadowMap",Ge.state.spotShadowMap,Ot),Ge.state.pointShadowMap.length>0&&Zt.setValue(B,"pointShadowMap",Ge.state.pointShadowMap,Ot)),V.isSkinnedMesh){Zt.setOptional(B,V,"bindMatrix"),Zt.setOptional(B,V,"bindMatrixInverse");let de=V.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Zt.setValue(B,"boneTexture",de.boneTexture,Ot))}V.isBatchedMesh&&(Zt.setOptional(B,V,"batchingTexture"),Zt.setValue(B,"batchingTexture",V._matricesTexture,Ot),Zt.setOptional(B,V,"batchingIdTexture"),Zt.setValue(B,"batchingIdTexture",V._indirectTexture,Ot),Zt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Zt.setValue(B,"batchingColorTexture",V._colorsTexture,Ot));let gn=Y.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Q.update(V,Y,Oe),(jn||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,Zt.setValue(B,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ie.envMapIntensity.value=D.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=hx()),jn){if(Zt.setValue(B,"toneMappingExposure",P.toneMappingExposure),wt.needsLights&&yf(Ie,Mi),dt&&z.fog===!0&&at.refreshFogUniforms(Ie,dt),at.refreshMaterialUniforms(Ie,z,xt,Rt,A.state.transmissionRenderTarget[y.id]),wt.needsLights&&wt.numLightProbeGrids>0){let de=M,Te=0;for(let Fn of A.state.lightProbeGridArray)Fn.texture!==null&&(de.textures[Te]=Fn.texture,de.min[Te]=Fn.boundingBox.min,de.max[Te]=Fn.boundingBox.max,de.resolution[Te]=Fn.resolution,Te++);for(let Fn in de)de[Fn].length=Te;Ie.probesSH.value=de.textures,Ie.probesMin.value=de.min,Ie.probesMax.value=de.max,Ie.probesResolution.value=de.resolution}ys.upload(B,_h(wt),Ie,Ot)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ys.upload(B,_h(wt),Ie,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Zt.setValue(B,"center",V.center),Zt.setValue(B,"modelViewMatrix",V.modelViewMatrix),Zt.setValue(B,"normalMatrix",V.normalMatrix),Zt.setValue(B,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let de=z.uniformsGroups;for(let Te=0,Fn=de.length;Te<Fn;Te++){let yh=de[Te];Et.update(yh,Oe),Et.bind(yh,Oe)}}return Oe}function yf(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Mf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,D,Y){let z=Pt.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Pt.get(y.texture).__webglTexture=D,Pt.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Y,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let Y=Pt.get(y);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,Y=0){nt=y,q=D,W=Y;let z=null,V=!1,dt=!1;if(y){let ht=Pt.get(y);if(ht.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(B.FRAMEBUFFER,ht.__webglFramebuffer),tt.copy(y.viewport),yt.copy(y.scissor),Dt=y.scissorTest,ft.viewport(tt),ft.scissor(yt),ft.setScissorTest(Dt),X=-1;return}else if(ht.__webglFramebuffer===void 0)Ot.setupRenderTarget(y);else if(ht.__hasExternalTextures)Ot.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Bt=y.depthTexture;if(ht.__boundDepthTexture!==Bt){if(Bt!==null&&Pt.has(Bt)&&(y.width!==Bt.image.width||y.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(y)}}let vt=y.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);let At=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(At[D])?z=At[D][Y]:z=At[D],V=!0):y.samples>0&&Ot.useMultisampledRTT(y)===!1?z=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[Y]:z=At,tt.copy(y.viewport),yt.copy(y.scissor),Dt=y.scissorTest}else tt.copy(Lt).multiplyScalar(xt).floor(),yt.copy(ee).multiplyScalar(xt).floor(),Dt=ie;if(Y!==0&&(z=L),ft.bindFramebuffer(B.FRAMEBUFFER,z)&&ft.drawBuffers(y,z),ft.viewport(tt),ft.scissor(yt),ft.setScissorTest(Dt),V){let ht=Pt.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+D,ht.__webglTexture,Y)}else if(dt){let ht=D;for(let vt=0;vt<y.textures.length;vt++){let At=Pt.get(y.textures[vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+vt,At.__webglTexture,Y,ht)}}else if(y!==null&&Y!==0){let ht=Pt.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,Y)}X=-1};function vh(y){let D=Pt.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=ce.textureFormatReadable(y.format),D.__typeReadable=ce.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,Y,z,V,dt,Mt,ht=0){if(!(y&&y.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt){ft.bindFramebuffer(B.FRAMEBUFFER,vt);try{let At=y.textures[ht],Bt=At.format,qt=At.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht);let bt=vh(At);if(bt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&Y>=0&&Y<=y.height-V&&B.readPixels(D,Y,z,V,rt.convert(Bt),rt.convert(qt),dt)}finally{let At=nt!==null?Pt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,D,Y,z,V,dt,Mt,ht=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt)if(D>=0&&D<=y.width-z&&Y>=0&&Y<=y.height-V){ft.bindFramebuffer(B.FRAMEBUFFER,vt);let At=y.textures[ht],Bt=At.format,qt=At.type;y.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht);let bt=vh(At);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),B.readPixels(D,Y,z,V,rt.convert(Bt),rt.convert(qt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let xe=nt!==null?Pt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(B.FRAMEBUFFER,xe);let ae=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Nu(B,ae,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Yt),B.deleteSync(ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,Y=0){let z=Math.pow(2,-Y),V=Math.floor(y.image.width*z),dt=Math.floor(y.image.height*z),Mt=D!==null?D.x:0,ht=D!==null?D.y:0;Ot.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Mt,ht,V,dt),ft.unbindTexture()},this.copyTextureToTexture=function(y,D,Y=null,z=null,V=0,dt=0){let Mt,ht,vt,At,Bt,qt,bt,Yt,xe,ae=y.isCompressedTexture?y.mipmaps[dt]:y.image;if(Y!==null)Mt=Y.max.x-Y.min.x,ht=Y.max.y-Y.min.y,vt=Y.isBox3?Y.max.z-Y.min.z:1,At=Y.min.x,Bt=Y.min.y,qt=Y.isBox3?Y.min.z:0;else{let Zt=Math.pow(2,-V);Mt=Math.floor(ae.width*Zt),ht=Math.floor(ae.height*Zt),y.isDataArrayTexture?vt=ae.depth:y.isData3DTexture?vt=Math.floor(ae.depth*Zt):vt=1,At=0,Bt=0,qt=0}z!==null?(bt=z.x,Yt=z.y,xe=z.z):(bt=0,Yt=0,xe=0);let se=rt.convert(D.format),Fe=rt.convert(D.type),wt;D.isData3DTexture?(Ot.setTexture3D(D,0),wt=B.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ot.setTexture2DArray(D,0),wt=B.TEXTURE_2D_ARRAY):(Ot.setTexture2D(D,0),wt=B.TEXTURE_2D),ft.activeTexture(B.TEXTURE0),ft.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,D.flipY),ft.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ft.pixelStorei(B.UNPACK_ALIGNMENT,D.unpackAlignment);let Ge=ft.getParameter(B.UNPACK_ROW_LENGTH),jt=ft.getParameter(B.UNPACK_IMAGE_HEIGHT),yi=ft.getParameter(B.UNPACK_SKIP_PIXELS),Oe=ft.getParameter(B.UNPACK_SKIP_ROWS),Fr=ft.getParameter(B.UNPACK_SKIP_IMAGES);ft.pixelStorei(B.UNPACK_ROW_LENGTH,ae.width),ft.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae.height),ft.pixelStorei(B.UNPACK_SKIP_PIXELS,At),ft.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),ft.pixelStorei(B.UNPACK_SKIP_IMAGES,qt);let jn=y.isDataArrayTexture||y.isData3DTexture,Mi=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Zt=Pt.get(y),Ie=Pt.get(D),gn=Pt.get(Zt.__renderTarget),de=Pt.get(Ie.__renderTarget);ft.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Te=0;Te<vt;Te++)jn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(y).__webglTexture,V,qt+Te),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(D).__webglTexture,dt,xe+Te)),B.blitFramebuffer(At,Bt,At+Mt,Bt+ht,bt,Yt,bt+Mt,Yt+ht,B.DEPTH_BUFFER_BIT,B.NEAREST);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||Pt.has(y)){let Zt=Pt.get(y),Ie=Pt.get(D);ft.bindFramebuffer(B.READ_FRAMEBUFFER,C),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let gn=0;gn<vt;gn++)jn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,V,qt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,V),Mi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,dt,xe+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ie.__webglTexture,dt),V!==0?B.blitFramebuffer(At,Bt,At+Mt,Bt+ht,bt,Yt,bt+Mt,Yt+ht,B.COLOR_BUFFER_BIT,B.NEAREST):Mi?B.copyTexSubImage3D(wt,dt,bt,Yt,xe+gn,At,Bt,Mt,ht):B.copyTexSubImage2D(wt,dt,bt,Yt,At,Bt,Mt,ht);ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mi?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(wt,dt,bt,Yt,xe,Mt,ht,vt,se,Fe,ae.data):D.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,dt,bt,Yt,xe,Mt,ht,vt,se,ae.data):B.texSubImage3D(wt,dt,bt,Yt,xe,Mt,ht,vt,se,Fe,ae):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,dt,bt,Yt,Mt,ht,se,Fe,ae.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,dt,bt,Yt,ae.width,ae.height,se,ae.data):B.texSubImage2D(B.TEXTURE_2D,dt,bt,Yt,Mt,ht,se,Fe,ae);ft.pixelStorei(B.UNPACK_ROW_LENGTH,Ge),ft.pixelStorei(B.UNPACK_IMAGE_HEIGHT,jt),ft.pixelStorei(B.UNPACK_SKIP_PIXELS,yi),ft.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),ft.pixelStorei(B.UNPACK_SKIP_IMAGES,Fr),dt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&B.generateMipmap(wt),ft.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&Ot.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ot.setTextureCube(y,0):y.isData3DTexture?Ot.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ot.setTexture2DArray(y,0):Ot.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){q=0,W=0,nt=null,ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var pn=Math.PI/180;function Er(i,t,e=1,n=new F){let s=i*pn,r=t*pn;return n.set(e*Math.cos(s)*Math.cos(r),e*Math.sin(s),-e*Math.cos(s)*Math.sin(r))}function dx(i=new Date){let t=Date.UTC(i.getUTCFullYear(),0,0),e=Math.floor((i.getTime()-t)/864e5),n=i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600,s=2*Math.PI/365*(e-1+(n-12)/24),r=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),o=-15*(n-12+r/60);return o=(o+540)%360-180,{lat:a/pn,lon:o}}function bd(i,t){let n=(t.lat-i.lat)*pn,s=(t.lon-i.lon)*pn,r=Math.sin(n/2)**2+Math.cos(i.lat*pn)*Math.cos(t.lat*pn)*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.sqrt(r))}function vd(i,t,e,n){let s=[],r=Math.acos(He.clamp(i.dot(t),-1,1));if(r<.001){let l=new F(0,1,0).cross(i);l.lengthSq()<1e-4&&l.set(1,0,0).cross(i),l.normalize();for(let c=0;c<=e;c++){let h=c/e,u=Math.sin(Math.PI*h);s.push(i.clone().addScaledVector(l,.045*u).normalize().multiplyScalar(1.004+.1*u))}return s}let a=Math.sin(r),o=n*He.clamp(r/.6,.2,1);for(let l=0;l<=e;l++){let c=l/e,h=Math.sin((1-c)*r)/a,u=Math.sin(c*r)/a,d=i.clone().multiplyScalar(h).add(t.clone().multiplyScalar(u)).normalize();d.multiplyScalar(1.004+o*Math.pow(Math.sin(Math.PI*c),.85)),s.push(d)}return s}function Ss(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new er(e);return n.colorSpace=Xe,n.anisotropy=4,n}function Vo(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.95),i.bezierCurveTo(t-n*1.45,e+n*.05,t-n*1.05,e-n*1,t,e-n*.38),i.bezierCurveTo(t+n*1.05,e-n*1,t+n*1.45,e+n*.05,t,e+n*.95),i.closePath()}function fx(){let i=Ss(128,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.22,"rgba(255,255,255,0.85)"),l.addColorStop(.5,"rgba(255,255,255,0.22)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,o,o)}),t=Ss(128,(a,o)=>{a.strokeStyle="rgba(255,255,255,0.95)",a.lineWidth=5,a.beginPath(),a.arc(o/2,o/2,o*.4,0,Math.PI*2),a.stroke()}),e=Ss(128,(a,o)=>{a.shadowColor="rgba(255,90,150,0.85)",a.shadowBlur=16;let l=a.createLinearGradient(o*.2,o*.2,o*.8,o*.85);l.addColorStop(0,"#ffc9de"),l.addColorStop(.45,"#ff6fa8"),l.addColorStop(1,"#e8266f"),a.fillStyle=l,Vo(a,o/2,o*.5,o*.3),a.fill(),a.shadowBlur=0,a.lineWidth=2,a.strokeStyle="rgba(255,255,255,0.4)",Vo(a,o/2,o*.5,o*.3),a.stroke(),a.save(),Vo(a,o/2,o*.5,o*.3),a.clip();let c=a.createLinearGradient(0,o*.2,0,o*.55);c.addColorStop(0,"rgba(255,255,255,0.7)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.beginPath(),a.ellipse(o*.5,o*.34,o*.27,o*.15,0,0,Math.PI*2),a.fill(),a.restore()}),n=Ss(64,(a,o)=>{a.translate(o/2,o/2);let l=a.createRadialGradient(0,0,0,0,0,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.16,"rgba(255,255,255,0.6)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.beginPath(),a.arc(0,0,o/2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.95)";for(let c of[0,Math.PI/2])a.save(),a.rotate(c),a.beginPath(),a.moveTo(-o*.49,0),a.quadraticCurveTo(0,-o*.04,o*.49,0),a.quadraticCurveTo(0,o*.04,-o*.49,0),a.fill(),a.restore()}),s=Ss(256,(a,o)=>{a.translate(o/2,o/2),a.rotate(-.55);let l=a.createRadialGradient(0,0,8,0,0,o*.5);l.addColorStop(0,"rgba(150,225,255,0.45)"),l.addColorStop(1,"rgba(150,225,255,0)"),a.fillStyle=l,a.fillRect(-o/2,-o/2,o,o);let c=(h,u,d,f,p)=>{a.beginPath(),a.moveTo(h+p,u),a.arcTo(h+d,u,h+d,u+f,p),a.arcTo(h+d,u+f,h,u+f,p),a.arcTo(h,u+f,h,u,p),a.arcTo(h,u,h+d,u,p),a.closePath()};a.lineWidth=5,a.strokeStyle="rgba(255,255,255,0.92)",a.fillStyle="rgba(150,215,235,0.55)",c(-o*.13,-o*.04,o*.26,o*.36,o*.09),a.fill(),a.stroke(),c(-o*.05,-o*.25,o*.1,o*.24,o*.03),a.fill(),a.stroke(),a.fillStyle="#b8895a",a.strokeStyle="#7a5530",a.lineWidth=3,c(-o*.055,-o*.31,o*.11,o*.07,o*.02),a.fill(),a.stroke(),a.fillStyle="#fff3d6",a.strokeStyle="#c9a66b",a.lineWidth=2,a.save(),a.rotate(.35),c(-o*.035,o*0,o*.07,o*.26,o*.03),a.fill(),a.stroke(),a.restore(),a.fillStyle="#ff6fa5",Vo(a,0,o*.15,o*.032),a.fill(),a.fillStyle="rgba(255,255,255,0.7)",a.fillRect(-o*.1,o*.02,o*.025,o*.22)}),r=Ss(64,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,o,o)});return{glow:i,ring:t,heart:e,bottle:s,spark:r,star:n}}var yd=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,px=`
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
}`,mx=`
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
}`,gx=`
varying vec3 vP;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,_x=`
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
}`,xx=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,vx=`
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
}`,yx=`
varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Mx=`
uniform float uTime; uniform float uSel; uniform float uAppear; uniform float uPulseT; uniform float uPhase; uniform vec3 uColor;
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
  float core = 1.0 - smoothstep(0.042, 0.068, r);
  float coreGlow = exp(-r * r * 110.0);
  vec3 hot = mix(uColor, vec3(1.0), 0.8);
  vec3 rgb = uColor * a + hot * (core * 0.95 + coreGlow * 0.7) * mix(0.0, 1.0, uAppear) + hotAdd;
  float edge = 1.0 - smoothstep(0.86, 1.0, r);
  gl_FragColor = vec4(rgb * edge, 1.0);
}`,Sx=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,bx=`
uniform float uTime; uniform float uAppear; uniform vec3 uColor;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vec3 V = normalize(cameraPosition - vP);
  float rim = pow(abs(dot(normalize(vN), V)), 1.7);
  float h = vUv.y;
  float a = pow(1.0 - h, 2.1) * rim * 0.42 * (0.86 + 0.14 * sin(uTime * 2.2 + h * 9.0)) * uAppear;
  vec3 col = mix(uColor, vec3(1.0), (1.0 - h) * 0.45);
  gl_FragColor = vec4(col * a, 1.0);
}`,Md=i=>.5-.5*Math.cos(Math.PI*i),Gc=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Sd=i=>1-Math.pow(1-i,5),Wc=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),Go=class{constructor(t,{onPick:e}={}){this.canvas=t,this.onPick=e||(()=>{}),this.renderer=new ko({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new $s,this.scene.background=new zt(66058),this.camera=new qe(50,1,.05,200),this.cam={lat:70,lon:-40,dist:3},this.vel={lon:0,lat:0,dist:0},this.tween=null,this.sunDir=new F(1,0,0),this.fx=[],this.cities={},this.bottleSprites=new Map,this.arcs=[],this.shiftY=0,this.shiftTarget=0,this.selected=null,this.t=0,this.onFrame=null,this.minDist=1.28,this.maxDist=8,this.W=1,this.H=1,this.tex=fx(),this._bindInput(),this.resize()}async init(t="assets/",e){let n=new ps;n.onProgress=(h,u,d)=>e&&e(u/d);let s=new cr(n),r=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),a=h=>new Promise((u,d)=>s.load(t+h,f=>{f.wrapS=rs,f.anisotropy=r,f.colorSpace=Tn,u(f)},void 0,d)),[o,l,c]=await Promise.all([a("earth_day_4096.jpg"),a("earth_night_2048.jpg"),a("earth_pack_4096.jpg")]);this.texDay=o,this.texNight=l,this.texPack=c,this._buildScene(),this._updateSun()}_buildScene(){let t={value:this.sunDir},e=new Ri(1,160,96);this.earthMat=new Ne({vertexShader:yd,fragmentShader:px,uniforms:{uDay:{value:this.texDay},uNight:{value:this.texNight},uPack:{value:this.texPack},uSun:t,uBump:{value:.0065}}}),this.earth=new De(e,this.earthMat),this.scene.add(this.earth),this.cloudMat=new Ne({vertexShader:yd,fragmentShader:mx,transparent:!0,depthWrite:!1,uniforms:{uPack:{value:this.texPack},uSun:t,uShift:{value:0}}}),this.clouds=new De(new Ri(1.011,128,80),this.cloudMat),this.scene.add(this.clouds),this.atmoMat=new Ne({vertexShader:gx,fragmentShader:_x,side:Ue,blending:fn,transparent:!0,depthWrite:!1,uniforms:{uSun:t,uInner:{value:.995},uOuter:{value:1.16}}}),this.scene.add(new De(new Ri(1.17,96,64),this.atmoMat));let n=2600,s=new Float32Array(n*3),r=new Float32Array(n*3),a=12345,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let h=o()*2-1,u=o()*Math.PI*2,d=Math.sqrt(1-h*h),f=60+o()*20;s.set([d*Math.cos(u)*f,h*f,d*Math.sin(u)*f],c*3);let p=.25+Math.pow(o(),3)*.75,v=o();r.set([p*(v>.8?1:.85+v*.15),p*(v>.8?.85:.9),p*(v<.3?1:.88)],c*3)}let l=new $e;l.setAttribute("position",new Je(s,3)),l.setAttribute("color",new Je(r,3)),this.stars=new Qs(l,new ds({size:3.4*Math.min(window.devicePixelRatio||1,2),map:this.tex.spark,alphaTest:.02,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.scene.add(this.stars),this.sunLight=new fr(16773341,2.4),this.scene.add(this.sunLight),this.scene.add(new pr(8360918,1.1))}_makeCity(t,e,n){let s=new Gn,r=Er(e.lat,e.lon,1).normalize();s.position.copy(r).multiplyScalar(1.0035),s.quaternion.setFromUnitVectors(new F(0,1,0),r);let a=new zt(e.color||"#ffffff"),o={uTime:{value:0},uSel:{value:0},uAppear:{value:0},uPulseT:{value:9},uPhase:{value:Math.random()},uColor:{value:a.clone().convertLinearToSRGB()}},l=new Ne({vertexShader:yx,fragmentShader:Mx,uniforms:o,transparent:!0,depthWrite:!1,blending:fn,side:nn}),c=new De(new Ci(2,2).rotateX(-Math.PI/2),l);c.renderOrder=4,s.add(c);let h={uTime:o.uTime,uAppear:o.uAppear,uColor:o.uColor},u=new Ne({vertexShader:Sx,fragmentShader:bx,uniforms:h,transparent:!0,depthWrite:!1,blending:fn,side:nn}),d=new De(new sr(.012,.05,1.05,28,1,!0).translate(0,.525,0),u);d.renderOrder=5,s.add(d),this.scene.add(s),this.cities[t]={key:t,def:e,group:s,pos:Er(e.lat,e.lon,1.006),mat:l,u:o,color:a,selV:0,pulseT:9,born:n}}_dropCity(t){let e=this.cities[t];e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}),delete this.cities[t],this.selected===t&&(this.selected=null))}setCities(t){for(let n of Object.keys(this.cities))this._dropCity(n);let e=0;for(let[n,s]of Object.entries(t))this._makeCity(n,s,this.t+1.5+e++*.45)}syncCities(t){for(let e of Object.keys(this.cities))t[e]||this._dropCity(e);for(let[e,n]of Object.entries(t)){let s=this.cities[e];s&&Math.abs(s.def.lat-n.lat)<1e-4&&Math.abs(s.def.lon-n.lon)<1e-4||(s&&this._dropCity(e),this._makeCity(e,n,this.t+.2),this.cities[e].pulseT=0)}}setArc(t,e){this.arcs.forEach(h=>{this.scene.remove(h.mesh),h.mesh.geometry.dispose()}),this.arcs=[];let n=this.cities[t],s=this.cities[e];if(!n||!s)return;let r=vd(n.pos.clone().normalize(),s.pos.clone().normalize(),140,.2),a=new Ei(r),o=h=>new zt(h).convertLinearToSRGB(),l=new Ne({vertexShader:xx,fragmentShader:vx,transparent:!0,depthWrite:!1,blending:fn,uniforms:{uTime:{value:0},uReveal:{value:0},uA:{value:o("#6ad7ff")},uB:{value:o("#ff8cc0")}}}),c=new De(new or(a,240,.0026,6,!1),l);this.scene.add(c),this.arcs.push({mesh:c,curve:a,a:t,b:e,mat:l,t0:this.t+(this.t<5?1.2:.45)}),this.arcInfo={a:t,b:e,curve:a}}_arcCurve(t,e){if(this.arcInfo&&(this.arcInfo.a===t&&this.arcInfo.b===e||this.arcInfo.a===e&&this.arcInfo.b===t)){let a=this.arcInfo.curve,o=this.arcInfo.a!==t;return l=>a.getPointAt(o?1-l:l)}let n=this.cities[t],s=this.cities[e],r=new Ei(vd(n.pos.clone().normalize(),s.pos.clone().normalize(),60,.12));return a=>r.getPointAt(a)}setSelected(t){this.selected=t}pulseCity(t){let e=this.cities[t];e&&(e.pulseT=0)}_vis(t){let e=this.camera.position,n=t.clone().sub(e),s=n.length()||1;n.divideScalar(s);let r=He.clamp(-e.dot(n),0,s);return He.smoothstep(e.clone().addScaledVector(n,r).length(),.985,1.004)}_px(){return .55+this.cam.dist*.25}_sparkle(t,e,n,s,r=16765670,a="star",o=2.2){let l=new Ln(new Mn({map:this.tex[a],color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:fn,opacity:0}));l.renderOrder=30,l.position.copy(t),this.scene.add(l);let c=t.clone(),h=e.clone(),u=Math.random()*6,d=0;this.fx.push({update:f=>{d+=f;let p=d/n;return p>=1?(this.scene.remove(l),l.material.dispose(),!1):(h.multiplyScalar(Math.exp(-o*f)),c.addScaledVector(h,f),l.position.copy(c),l.material.opacity=Math.pow(1-p,1.4)*Math.min(1,p*9)*(.72+.28*Math.sin(d*17+u))*this._vis(c),l.scale.setScalar(s*this._px()*(.55+.45*Math.sin(Math.min(1,p*1.7)*Math.PI))),l.material.rotation=d*1.4+u,!0)}})}launchHearts(t,e,n=1){if(!this.cities[t]||!this.cities[e])return;let s=this._arcCurve(t,e),r=Math.min(n,8),a=16;for(let o=0;o<r;o++){let l=o*.3,c=3.8+Math.random()*.5,h=(m,S,E)=>{let M=new Ln(new Mn({map:m,color:S,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,blending:E}));return M.renderOrder=20,this.scene.add(M),M},u=h(this.tex.glow,16740261,fn),d=Array.from({length:a},(m,S)=>h(this.tex.glow,new zt(16736158).lerp(new zt(16761498),S/a),fn)),f=h(this.tex.heart,16777215,ui);f.renderOrder=22;let p=-l,v=0,g=!1;this.fx.push({update:m=>{if(p+=m,p<0)return!0;g||(g=!0,this.pulseCity(t));let S=Math.min(p/c,1),E=Md(S),M=s(E),w=this._vis(M),A=Gc(Math.min(1,p/.5)),_=1-.75*Wc((S-.93)/.07),b=1+.11*Math.pow(Math.max(0,Math.sin(p*6.2)),3),N=.062*this._px()*.85*A*_*b;for(f.position.copy(M),f.scale.setScalar(N),f.material.opacity=Math.min(1,S*14)*(S>.97?(1-S)/.03:1)*w,f.material.rotation=Math.sin(p*2.3+o)*.2,u.position.copy(M),u.scale.setScalar(N*(2.9+.5*Math.sin(p*6.2))),u.material.opacity=f.material.opacity*.5,d.forEach((P,O)=>{P.position.copy(s(Math.max(0,E-(O+1)*.0075))),P.scale.setScalar(N*(1.05-O*.052)),P.material.opacity=f.material.opacity*Math.pow(1-O/a,2)*.5*this._vis(P.position)}),v+=m;v>.05&&S<.97;){v-=.05;let P=s(Math.min(1,E+.01)).sub(M).normalize(),O=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.05);this._sparkle(M,P.multiplyScalar(-.03).add(O),.9+Math.random()*.7,.02+Math.random()*.02,Math.random()<.5?16765670:16773321)}return S>=1?([f,u,...d].forEach(P=>{this.scene.remove(P),P.material.dispose()}),this._burst(e),!1):!0}})}}_burst(t){let e=this.cities[t];if(!e)return;this.pulseCity(t);let n=e.pos.clone().normalize(),s=new Ln(new Mn({map:this.tex.glow,color:16751812,transparent:!0,depthWrite:!1,depthTest:!1,blending:fn,opacity:0}));s.renderOrder=28,s.position.copy(e.pos).addScaledVector(n,.012),this.scene.add(s);let r=0;this.fx.push({update:a=>{r+=a;let o=r/.8;return o>=1?(this.scene.remove(s),s.material.dispose(),!1):(s.scale.setScalar(this._px()*(.1+.2*(1-Math.pow(1-o,3)))),s.material.opacity=Math.pow(1-o,2)*.9*this._vis(s.position),!0)}});for(let a=0;a<22;a++){let o=Math.random()*Math.PI*2,c=new F(Math.cos(o),Math.sin(o),.3).cross(n).normalize().multiplyScalar(.03+Math.random()*.1).addScaledVector(n,.03+Math.random()*.09);this._sparkle(e.pos.clone().addScaledVector(n,.01),c,1+Math.random()*.8,.018+Math.random()*.026,Math.random()<.6?16761564:16773839)}for(let a=0;a<5;a++){let o=new Ln(new Mn({map:this.tex.heart,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));o.renderOrder=26,this.scene.add(o);let l=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).cross(n).normalize().multiplyScalar((Math.random()-.5)*.05),c=a*.12+Math.random()*.1,h=1.9+Math.random()*.5,u=Math.random()*6,d=-c;this.fx.push({update:f=>{if(d+=f,d<0)return!0;let p=d/h;if(p>=1)return this.scene.remove(o),o.material.dispose(),!1;let v=1-Math.pow(1-p,2.2);return o.position.copy(e.pos).addScaledVector(n,.02+v*.12).addScaledVector(l,v).addScaledVector(l.clone().cross(n),Math.sin(d*3+u)*.006),o.scale.setScalar(.03*this._px()*Gc(Math.min(1,d/.35))*(1-.3*p)),o.material.opacity=Math.min(1,p*8)*Math.pow(1-p,1.2)*this._vis(o.position),o.material.rotation=Math.sin(d*2+u)*.25,!0}})}}launchBottle(t,e,n){if(!this.cities[t]||!this.cities[e]){n&&n();return}let s=this._arcCurve(t,e),r=new Ln(new Mn({map:this.tex.bottle,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));r.renderOrder=22,this.scene.add(r);let a=0,o=0,l=!1,c=7.5;this.fx.push({update:h=>{a+=h;let u=Math.min(a/c,1),d=Md(u);l||(l=!0,this.pulseCity(t));let f=s(d);for(f.multiplyScalar(1-.12*Math.sin(u*Math.PI)),r.position.copy(f),r.material.rotation=Math.sin(a*2)*.22,r.scale.setScalar(.07*(.8+this.cam.dist*.15)*Gc(Math.min(1,a/.6))*(1-.5*Wc((u-.94)/.06))),r.material.opacity=Math.min(1,u*12)*(u>.96?(1-u)/.04:1)*this._vis(f),o+=h;o>.07&&u<.97;)o-=.07,this._sparkle(f,new F,1.1,.03,10478591,"glow",0);return u>=1?(this.scene.remove(r),r.material.dispose(),this._burst(e),n&&n(),!1):!0}})}setBottles(t){let e=new Map(t.map(s=>[s.id,s]));for(let[s,r]of this.bottleSprites)e.has(s)||(this.scene.remove(r.sprite),r.sprite.material.dispose(),this.bottleSprites.delete(s));let n={};for(let s of t){if(!this.cities[s.city])continue;let a=(n[s.city]=(n[s.city]||0)+1)-1,o=this.bottleSprites.get(s.id);if(!o){let l=new Ln(new Mn({map:this.tex.bottle,transparent:!0,depthWrite:!1}));this.scene.add(l),o={sprite:l,id:s.id,city:s.city,phase:Math.random()*6},this.bottleSprites.set(s.id,o)}o.idx=a}}_updateSun(){let t=dx(this.simDate||new Date);this.sunSub=t,Er(t.lat,t.lon,1,this.sunDir),this.sunLight&&this.sunLight.position.copy(this.sunDir).multiplyScalar(10)}setSimDate(t){this.simDate=t,this._updateSun()}fitDist(){let t=this.W/this.H,e=this.camera.fov*pn,n=t>=1?e/2:Math.atan(Math.tan(e/2)*t);return 1/Math.sin(n*.97)}_bothTarget(){let t=this.cities.lesha,e=this.cities.ari,n=new F;t&&e?n=t.pos.clone().normalize().add(e.pos.clone().normalize()).normalize():n=Er(60,0);let s=Math.asin(n.y)/pn,r=Math.atan2(-n.z,n.x)/pn;return{lat:Math.min(s+6,80),lon:r,dist:this.fitDist()*.93}}viewBoth(t=1600){this.flyTo(this._bothTarget(),t)}intro(t=4200){let e=this._bothTarget();this.cam={lat:e.lat-22,lon:e.lon-100,dist:Math.min(this.maxDist,e.dist*2.6)},this.flyTo(e,t,"out")}focusCity(t,e=1400){let n=this.cities[t];if(!n)return;let s=n.pos.clone().normalize();this.flyTo({lat:Math.asin(s.y)/pn,lon:Math.atan2(-s.z,s.x)/pn,dist:Math.max(this.minDist+.25,this.fitDist()*.62)},e)}flyTo(t,e=1400,n){this.vel.lon=this.vel.lat=this.vel.dist=0;let s=t.lon-this.cam.lon;s=(s+540)%360-180,this.tween={t:0,dur:e/1e3,ease:n,from:{...this.cam},to:{lat:t.lat,lon:this.cam.lon+s,dist:t.dist}},e<=0&&(this.cam={...this.tween.to},this.tween=null)}setSheetOpen(t){this.shiftTarget=t?-.2:0}resize(){let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.maxDist=Math.max(6,this.fitDist()*1.9),this.camera.aspect=t/e,this._applyView()}_applyView(){let t=Math.round(this.shiftY*this.H);t!==0?this.camera.setViewOffset(this.W,this.H,0,-t,this.W,this.H):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}_bindInput(){let t=this.canvas;t.style.touchAction="none";let e=new Map,n=0,s=0,r=0,a=0,o=0,l=0;t.addEventListener("pointerdown",h=>{if(t.setPointerCapture(h.pointerId),e.set(h.pointerId,{x:h.clientX,y:h.clientY}),e.size===1&&(n=0,s=performance.now(),r=h.clientX,a=h.clientY),e.size===2){let[u,d]=[...e.values()];o=Math.hypot(u.x-d.x,u.y-d.y),l=this.cam.dist}this.tween=null,this.vel.lon=this.vel.lat=0}),t.addEventListener("pointermove",h=>{let u=e.get(h.pointerId);if(!u)return;let d=h.clientX-u.x,f=h.clientY-u.y;if(u.x=h.clientX,u.y=h.clientY,e.size===1){n+=Math.abs(d)+Math.abs(f);let p=(this.cam.dist-.88)*.11,v=performance.now(),g=Math.max((v-(this._lastMove||v-16))/1e3,.008);this._lastMove=v,this.cam.lon-=d*p,this.cam.lat=He.clamp(this.cam.lat+f*p,-84,84),this.vel.lon=He.lerp(this.vel.lon,-d*p/g,.5),this.vel.lat=He.lerp(this.vel.lat,f*p/g,.5)}else if(e.size===2){let[p,v]=[...e.values()],g=Math.hypot(p.x-v.x,p.y-v.y);o>0&&(this.cam.dist=He.clamp(l*o/g,this.minDist,this.maxDist)),n+=10}});let c=h=>{e.delete(h.pointerId)&&(e.size===0&&n<8&&performance.now()-s<450&&this._tap(h.clientX,h.clientY),e.size===0&&(this.vel.lon=He.clamp(this.vel.lon,-140,140),this.vel.lat=He.clamp(this.vel.lat,-90,90)))};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("wheel",h=>{h.preventDefault(),this.tween=null,this.cam.dist=He.clamp(this.cam.dist*Math.exp(h.deltaY*.0012),this.minDist,this.maxDist)},{passive:!1}),window.addEventListener("resize",()=>this.resize())}_tap(t,e){let n=this.canvas.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=null,o=1e9;for(let[l,c]of this.bottleSprites){let h=this.screenOf(c.sprite.position);if(!h.visible)continue;let u=Math.hypot(h.x-s,h.y-r);u<34&&u<o&&(o=u,a={type:"bottle",id:l})}if(!a)for(let[l,c]of Object.entries(this.cities)){let h=this.screenOf(c.pos);if(!h.visible)continue;let u=Math.hypot(h.x-s,h.y-r);u<38&&u<o&&(o=u,a={type:"city",id:l})}this.onPick(a)}screenOf(t){let e=t.clone().project(this.camera),n=(e.x*.5+.5)*this.W,s=(-e.y*.5+.5)*this.H,r=this.camera.position.clone().sub(t).normalize(),a=t.clone().normalize().dot(r)>.04;return{x:n,y:s,visible:a&&e.z<1&&e.z>-1}}cityScreen(t){let e=this.cities[t];return e?this.screenOf(e.pos):{x:0,y:0,visible:!1}}frame(t){if(t=Math.max(0,Math.min(t,.05)),this.t+=t,this.tween){let n=this.tween;n.t+=t;let s=Math.min(n.t/n.dur,1),r=n.ease==="out"?Sd(s):s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;this.cam.lat=n.from.lat+(n.to.lat-n.from.lat)*r,this.cam.lon=n.from.lon+(n.to.lon-n.from.lon)*r,this.cam.dist=n.from.dist+(n.to.dist-n.from.dist)*r,s>=1&&(this.tween=null)}else{this.cam.lon+=this.vel.lon*t,this.cam.lat=He.clamp(this.cam.lat+this.vel.lat*t,-84,84);let n=Math.exp(-t*3.2);this.vel.lon*=n,this.vel.lat*=n}this.cam.dist=He.clamp(this.cam.dist,this.minDist,this.maxDist),Math.abs(this.shiftY-this.shiftTarget)>5e-4&&(this.shiftY+=(this.shiftTarget-this.shiftY)*Math.min(1,t*7),this._applyView()),Math.floor(this.t)!==Math.floor(this.t-t)&&Math.floor(this.t)%20===0&&this._updateSun();let e=Er(this.cam.lat,this.cam.lon,this.cam.dist);if(this.camera.position.copy(e),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),this.earth){this.cloudMat.uniforms.uShift.value=this.t*45e-5;for(let s of this.arcs)s.mat.uniforms.uTime.value=this.t,s.mat.uniforms.uReveal.value=1.08*Sd(He.clamp((this.t-s.t0)/2.6,0,1));let n=this.cam.dist-1;for(let s of Object.values(this.cities)){s.group.scale.setScalar(Math.max(n,.1)*.068);let r=Wc((this.t-s.born)/1.5);s.selV+=((this.selected===s.key?1:0)-s.selV)*Math.min(1,t*7),s.pulseT<1&&(s.pulseT=Math.min(1,s.pulseT+t/1.7)),s.u.uTime.value=this.t,s.u.uAppear.value=r,s.u.uSel.value=s.selV,s.u.uPulseT.value=s.pulseT}for(let s of this.bottleSprites.values()){let r=this.cities[s.city];if(!r)continue;let a=r.pos.clone().normalize(),o=new F(a.z,0,-a.x).normalize(),l=a.clone().cross(o).normalize(),c=s.idx*1.9+.6,h=.045+s.idx*.012,u=Math.sin(this.t*1.6+s.phase)*.004;s.sprite.position.copy(a).multiplyScalar(1.016+u).addScaledVector(o,Math.cos(c)*h).addScaledVector(l,Math.sin(c)*h),s.sprite.scale.setScalar(Math.max(n,.12)*.17),s.sprite.material.rotation=Math.sin(this.t*1.3+s.phase)*.25}}for(let n=this.fx.length-1;n>=0;n--)this.fx[n].update(t)||this.fx.splice(n,1);this.renderer.render(this.scene,this.camera),this.onFrame&&this.onFrame(t)}start(){let t=performance.now(),e=n=>{this.paused||this.frame((n-t)/1e3),t=n,this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}};function mi(i,t,e){if(t.length===0)return e===void 0?null:e;(i===null||typeof i!="object")&&(i={});let n=t[0];if(t.length===1)e==null?delete i[n]:i[n]=e;else{let s=mi(i[n],t.slice(1),e);s===null||typeof s=="object"&&Object.keys(s).length===0?delete i[n]:i[n]=s}return Object.keys(i).length?i:null}var pi=i=>String(i||"").split("/").filter(Boolean),bs=i=>i==null?null:JSON.parse(JSON.stringify(i)),Xc=(i,t)=>{let e=i;for(let n of t){if(e===null||typeof e!="object"||!(n in e))return null;e=e[n]}return e===void 0?null:e},Wo=class{constructor(t,e){this.db=(t||"").replace(/\/+$/,""),this.room=e,this.local=!this.db,this.listeners=new Set,this.status=this.local?"local":"connecting",this.statusCbs=[],this.queue=[],this.pumping=!1,this.denied=!1,this.local&&this._initLocal(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.reconnectAll()}),window.addEventListener("online",()=>this.reconnectAll())}onStatus(t){this.statusCbs.push(t),t(this.status)}_setStatus(t){t!==this.status&&(this.status=t,this.statusCbs.forEach(e=>e(t)))}url(t){return`${this.db}/rooms/${this.room}/${pi(t).join("/")}.json`}_initLocal(){this.key="globe-local-"+this.room;try{this.tree=JSON.parse(localStorage.getItem(this.key)||"null")}catch{this.tree=null}try{this.bc=new BroadcastChannel(this.key),this.bc.onmessage=t=>{this.tree=t.data,this._notifyAll("")}}catch{}}_saveLocal(){try{localStorage.setItem(this.key,JSON.stringify(this.tree))}catch{}try{this.bc&&this.bc.postMessage(this.tree)}catch{}}listen(t,e){let n={path:pi(t).join("/"),parts:pi(t),cb:e,data:null,es:null,closed:!1,retry:0,ready:!1};return this.listeners.add(n),this.local?(n.data=bs(Xc(this.tree,n.parts)),n.ready=!0,setTimeout(()=>!n.closed&&e(bs(n.data),"",!0),0)):this._connect(n),()=>{n.closed=!0,this.listeners.delete(n),n.es&&n.es.close()}}_connect(t){if(t.closed)return;if(t.es)try{t.es.close()}catch{}let e;try{e=new EventSource(this.url(t.path))}catch{this._setStatus("offline");return}t.es=e,e.addEventListener("open",()=>{t.retry=0,this._setStatus("online")});let n=(s,r)=>{let a;try{a=JSON.parse(s.data)}catch{return}if(!a)return;let o=pi(a.path);if(r)for(let[l,c]of Object.entries(a.data||{}))t.data=mi(t.data,[...o,...pi(l)],c);else t.data=mi(t.data,o,a.data);t.ready=!0,t.cb(bs(t.data),o.join("/"),!1)};e.addEventListener("put",s=>n(s,!1)),e.addEventListener("patch",s=>n(s,!0)),e.addEventListener("cancel",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.addEventListener("auth_revoked",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.onerror=()=>{t.closed||(e.readyState===2?(this._setStatus("offline"),t.retry++,setTimeout(()=>this._connect(t),Math.min(1e3*2**t.retry,15e3))):this._setStatus("offline"))}}reconnectAll(){if(!this.local){for(let t of this.listeners)this._connect(t);this._pump()}}_apply(t,e,n){let s=pi(t);if(this.local){if(n)for(let[r,a]of Object.entries(e))this.tree=mi(this.tree,[...s,...pi(r)],a);else this.tree=mi(this.tree,s,e);this._saveLocal(),this._notifyAll(s.join("/"));return}for(let r of this.listeners){let a=r.parts,o=s.length>=a.length&&a.every((h,u)=>s[u]===h),l=!o&&s.length<a.length&&s.every((h,u)=>a[u]===h);if(!o&&!l)continue;let c=o?s.slice(a.length):[];if(n)for(let[h,u]of Object.entries(e)){let d=[...s,...pi(h)];d.length>=a.length&&a.every((p,v)=>d[v]===p)&&(r.data=mi(r.data,d.slice(a.length),u))}else o?r.data=mi(r.data,c,e):r.data=mi(r.data,[],Xc(e,a.slice(s.length)));r.ready&&r.cb(bs(r.data),c.join("/"),!1)}}_notifyAll(t){for(let e of this.listeners)e.data=bs(Xc(this.tree,e.parts)),e.cb(bs(e.data),t,!1)}set(t,e){return this._apply(t,e===void 0?null:e,!1),this._enqueue("PUT",t,e===void 0?null:e)}patch(t,e){return this._apply(t,e,!0),this._enqueue("PATCH",t,e)}remove(t){return this._apply(t,null,!1),this._enqueue("DELETE",t)}newId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}_enqueue(t,e,n){if(this.local)return Promise.resolve();let s=this.url(e);if(t==="PUT"){let a=this.queue.find(o=>o.url===s&&o.method==="PUT"&&!o.inflight);if(a)return a.body=n,a.promise}let r={method:t,url:s,body:n,tries:0,inflight:!1};return r.promise=new Promise(a=>{r.done=a}),this.queue.push(r),this._pump(),r.promise}async _pump(){if(!this.pumping){for(this.pumping=!0;this.queue.length;){let t=this.queue[0];t.inflight=!0;try{let e=await fetch(t.url+"?print=silent",{method:t.method,body:t.method==="DELETE"?void 0:JSON.stringify(t.body),keepalive:!1});if(e.status>=500||e.status===429)throw new Error("server "+e.status);(e.status===401||e.status===403)&&(this.denied=!0,this._setStatus("denied")),this.queue.shift(),t.done(e.ok)}catch{if(t.inflight=!1,t.tries++,t.tries>6){this.queue.shift(),t.done(!1);continue}this._setStatus("offline"),await new Promise(n=>setTimeout(n,Math.min(1500*t.tries,8e3)))}}this.pumping=!1}}async ping(){if(this.local)return!0;try{return(await fetch(this.url("meta/ping")+"?shallow=true")).ok}catch{return!1}}};async function wd(i){let t=new TextEncoder().encode("globe-for-two:"+i.trim().toLowerCase()),e=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(n=>n.toString(16).padStart(2,"0")).join("").slice(0,32)}var Ad={0:["\u2600\uFE0F","\u{1F319}","Clear","\u042F\u0441\u043D\u043E"],1:["\u{1F324}\uFE0F","\u{1F319}","Mostly clear","\u041C\u0430\u043B\u043E\u043E\u0431\u043B\u0430\u0447\u043D\u043E"],2:["\u26C5","\u2601\uFE0F","Partly cloudy","\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C"],3:["\u2601\uFE0F","\u2601\uFE0F","Overcast","\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u043E"],45:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Fog","\u0422\u0443\u043C\u0430\u043D"],48:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Freezing fog","\u0418\u0437\u043C\u043E\u0440\u043E\u0437\u044C"],51:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light drizzle","\u041B\u0451\u0433\u043A\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],53:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Drizzle","\u041C\u043E\u0440\u043E\u0441\u044C"],55:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy drizzle","\u0421\u0438\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],56:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],57:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],61:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light rain","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],63:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain","\u0414\u043E\u0436\u0434\u044C"],65:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy rain","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C"],66:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],67:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],71:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Light snow","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043D\u0435\u0433"],73:["\u2744\uFE0F","\u2744\uFE0F","Snow","\u0421\u043D\u0435\u0433"],75:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433"],77:["\u2744\uFE0F","\u2744\uFE0F","Snow grains","\u0421\u043D\u0435\u0436\u043D\u0430\u044F \u043A\u0440\u0443\u043F\u0430"],80:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],81:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],82:["\u26C8\uFE0F","\u26C8\uFE0F","Violent showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u043B\u0438\u0432\u043D\u0438"],85:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Snow showers","\u0421\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],86:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],95:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm","\u0413\u0440\u043E\u0437\u0430"],96:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"],99:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"]};function Xo(i,t,e){let n=Ad[i]||Ad[3];return{icon:t?n[0]:n[1],text:e==="ru"?n[3]:n[2]}}var qo=i=>i*9/5+32,Td=i=>i*2.23694,wx=720*1e3,Ui={};function Ed(i){delete Ui[i];try{localStorage.removeItem("wx_"+i)}catch{}}async function Cd(i,t,{force:e=!1}={}){let n=Date.now();if(!Ui[i])try{Ui[i]=JSON.parse(localStorage.getItem("wx_"+i)||"null")}catch{Ui[i]=null}let s=Ui[i];if(s&&!e&&n-s.at<wx)return s.data;let r=`https://api.open-meteo.com/v1/forecast?latitude=${t.lat}&longitude=${t.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,wind_speed_10m,precipitation&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&wind_speed_unit=ms&timezone=auto&forecast_days=4`;try{let a=await fetch(r);if(!a.ok)throw new Error("wx "+a.status);let o=await a.json();Ui[i]={at:n,data:o};try{localStorage.setItem("wx_"+i,JSON.stringify(Ui[i]))}catch{}return o}catch{return s?s.data:null}}function Rd(i,t=12){if(!i||!i.hourly)return[];let e=i.current&&i.current.time?i.current.time.slice(0,13):null,n=e?i.hourly.time.findIndex(r=>r.slice(0,13)===e):0;n<0&&(n=0);let s=[];for(let r=n;r<Math.min(n+t,i.hourly.time.length);r++)s.push({time:i.hourly.time[r],temp:i.hourly.temperature_2m[r],code:i.hourly.weather_code[r],day:i.hourly.is_day[r]});return s}var qc={en:{app:"Our Globe",loading:"Warming up the planet\u2026",noWebgl:"This device cannot draw the globe (WebGL is off).",setupTitle:"Our little planet",setupSub:"A globe for two, with real day and night.",whoAreYou:"Who are you?",secretWord:"Your secret word",secretHint:"Pick any word or phrase only you two know. It locks your shared space.",openGlobe:"Open the globe",needWord:"Type the secret word first",needWho:"Choose who you are",today:"Today",you:"You",meetSet:"Set the day we meet",meetDays:"{n} days until we meet",meetOne:"1 day until we meet",meetToday:"We meet today!",meetAgo:"We met {n} days ago",meetTitle:"The day we meet",meetSave:"Save",meetClear:"Remove",games:"Games",bottles:"Bottles",mood:"Mood",both:"Both",day:"Daytime",night:"Night",feels:"Feels like",wind:"Wind",humidity:"Humidity",next12:"Next hours",forecast:"Forecast",heartsToday:"{n} today",sendHeart:"Send a heart",setMood:"Set mood",noMood:"no mood yet",timeAhead:"{a} is {h} h ahead of {b}",timeSame:"Same time in {a} and {b}",distance:"{km} km ({mi} mi) apart",noWeather:"Weather is not available right now",sunrise:"Sunrise",sunset:"Sunset",ms:"m/s",mph:"mph",moodTitle:"How are you feeling?",moodClear:"Clear mood",heartsIn:"{name} sent you {n} \u2665",whileAway:"While you were away: +{n} \u2665 from {name}",myCity:"My city",cityTitle:"Where are you now?",citySearch:"Search for a city\u2026",cityReset:"Back to {city}",cityPopular:"Popular",cityNo:"Nothing found",cityOffline:"Search is offline, showing popular cities",cityMoved:"{name} is now in {city}",sameCity:"You two are in the same city!",settings:"Settings",language:"Language",tempUnits:"Temperature",shareLink:"Copy the link for {name}",linkCopied:"Link copied",switchPerson:"Switch person / reset",switchConfirm:"Forget this phone and start over?",serverStatus:"Connection",status_online:"Connected",status_offline:"Reconnecting\u2026",status_local:"Preview mode: no server yet, data stays on this phone",status_denied:"Server refused access: check the database rules",status_connecting:"Connecting\u2026",credits:"Earth textures: NASA Blue Marble via three.js examples. Weather: Open-Meteo.",close:"Close",streakTitle:"Our streak",streakHint:"Open the globe every day to keep the flame alive.",streakDay:"day",streakDays:"days",streakNow:"{n} {d} in a row",streakBest:"best: {n}",streakLit:"here today",streakWait:"not here yet today",streakNew:"{n} days in a row",heartsTotal:"Hearts sent",gamesTitle:"Play together",g_canvas:"Our canvas",g_canvas_d:"Draw on one picture at the same time",g_theme:"Draw a theme",g_theme_d:"One prompt, one picture, both of you",themeLabel:"Theme",themeNew:"New theme",themeAll:"All",themeNewConfirm:"Start a new picture? The current one will be cleared for both of you.",g_bottles:"Bottle mail",g_bottles_d:"A drawing in a bottle floats to the other city",g_ttt:"Tic-tac-toe",g_ttt_d:"Stars against hearts",g_bs:"Battleship",g_bs_d:"Sea battle on an 8\xD78 grid",g_hang:"Petals",g_hang_d:"Guess the English word before the petals fall",online:"online",offline:"offline",back:"Back",yourTurnBadge:"your turn",newBadge:"new",undo:"Undo",clear:"Clear",save:"Save picture",saved:"Picture saved",eraser:"Eraser",clearConfirm:"Clear the whole canvas for both of you?",yes:"Yes",no:"No",canvasFull:"The canvas is full. Clear it to keep drawing.",bottleHelp:"Draw something and write a few words. The bottle floats across the ocean to the other city.",newBottle:"Write a bottle",writeBottle:"New bottle",noBottles:"No bottles yet. Send the first one!",toX:"To {name}",fromX:"From {name}",bottle:"Bottle",bottleText:"A few words (optional)",drawSomething:"Draw or write something first",sendBottle:"Throw it into the sea",bottleSent:"Bottle sent! It floats across the ocean",bottleArrived:"A bottle from {name} washed ashore!",reply:"Reply",replay:"Watch again",newRound:"Next round",youWin:"You won!",theyWin:"{name} won",draw:"A draw!",yourTurn:"Your turn",theirTurn:"{name} is thinking\u2026",enemyWaters:"Enemy waters",yourFleet:"Your fleet",newGame:"New game",noFit:"The ship does not fit there",placeShips:"Place your ships",horiz:"Horizontal",vert:"Vertical",random:"Random",ready:"Ready!",waitingPlace:"Waiting for {name} to place ships\u2026",bsMiss:"miss",bsHit:"hit!",bsSunk:"sunk a ship!",bsHint:"Tap the enemy waters to fire.",wordShort:"Use at least 3 letters (A\u2013Z)",hintIs:"Hint: {h}",pickWord:"Pick an English word",hintOptional:"Hint (optional)",hideWord:"Hide the word",wordHelp:"Letters A\u2013Z only, 3 to 12 letters.",waitingWord:"{name} is picking a word\u2026",watching:"{name} is guessing\u2026",guessLetters:"Guess the letters",theyGuessed:"{name} guessed it!",youGuessed:"You guessed it!",theyFailed:"The petals fell. {name} lost this one",wordWas:"The petals fell. The word was {w}",nextRound2:"Next round"},ru:{app:"\u041D\u0430\u0448 \u0433\u043B\u043E\u0431\u0443\u0441",loading:"\u0420\u0430\u0437\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C \u043F\u043B\u0430\u043D\u0435\u0442\u0443\u2026",noWebgl:"\u042D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441 (\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D WebGL).",setupTitle:"\u041D\u0430\u0448\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u043A\u0430",setupSub:"\u0413\u043B\u043E\u0431\u0443\u0441 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0434\u043D\u0451\u043C \u0438 \u043D\u043E\u0447\u044C\u044E.",whoAreYou:"\u041A\u0442\u043E \u0442\u044B?",secretWord:"\u0412\u0430\u0448\u0435 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",secretHint:"\u041B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0437\u043D\u0430\u0435\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0434\u0432\u043E\u0435. \u041E\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u043E\u0431\u0449\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.",openGlobe:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441",needWord:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0432\u0435\u0434\u0438 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",needWho:"\u0412\u044B\u0431\u0435\u0440\u0438, \u043A\u0442\u043E \u0442\u044B",today:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",you:"\u0422\u044B",meetSet:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetDays:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438: {n} \u0434\u043D.",meetOne:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 1 \u0434\u0435\u043D\u044C",meetToday:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C\u0441\u044F!",meetAgo:"\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u043B\u0438\u0441\u044C {n} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434",meetTitle:"\u0414\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetSave:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",meetClear:"\u0423\u0431\u0440\u0430\u0442\u044C",games:"\u0418\u0433\u0440\u044B",bottles:"\u0411\u0443\u0442\u044B\u043B\u043A\u0438",mood:"\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",both:"\u041E\u0431\u0430",day:"\u0414\u0435\u043D\u044C",night:"\u041D\u043E\u0447\u044C",feels:"\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C",next12:"\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0447\u0430\u0441\u044B",forecast:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437",heartsToday:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F: {n}",sendHeart:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E",setMood:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",noMood:"\u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",timeAhead:"{a} \u043E\u043F\u0435\u0440\u0435\u0436\u0430\u0435\u0442 {b} \u043D\u0430 {h} \u0447",timeSame:"\u0412 {a} \u0438 {b} \u043E\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u044F",distance:"{km} \u043A\u043C ({mi} \u043C\u0438\u043B\u044C) \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430",noWeather:"\u041F\u043E\u0433\u043E\u0434\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",sunrise:"\u0412\u043E\u0441\u0445\u043E\u0434",sunset:"\u0417\u0430\u043A\u0430\u0442",ms:"\u043C/\u0441",mph:"\u043C\u0438\u043B\u044C/\u0447",moodTitle:"\u041A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435?",moodClear:"\u0423\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",heartsIn:"\u041E\u0442 {name}: {n} \u2665",whileAway:"\u041F\u043E\u043A\u0430 \u0442\u0435\u0431\u044F \u043D\u0435 \u0431\u044B\u043B\u043E: +{n} \u2665 \u043E\u0442 {name}",myCity:"\u041C\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",cityTitle:"\u0413\u0434\u0435 \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441?",citySearch:"\u041D\u0430\u0439\u0442\u0438 \u0433\u043E\u0440\u043E\u0434\u2026",cityReset:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C: {city}",cityPopular:"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityNo:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C",cityOffline:"\u041F\u043E\u0438\u0441\u043A \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityMoved:"{name} \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u0433\u043E\u0440\u043E\u0434\u0435: {city}",sameCity:"\u0412\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435!",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",language:"\u042F\u0437\u044B\u043A",tempUnits:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",shareLink:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F {name}",linkCopied:"\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",switchPerson:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 / \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C",switchConfirm:"\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E?",serverStatus:"\u0421\u0432\u044F\u0437\u044C",status_online:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",status_offline:"\u041F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",status_local:"\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C: \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435",status_denied:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0443\u0441\u043A\u0430\u0435\u0442: \u043F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445",status_connecting:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",credits:"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0417\u0435\u043C\u043B\u0438: NASA Blue Marble (\u043F\u0440\u0438\u043C\u0435\u0440\u044B three.js). \u041F\u043E\u0433\u043E\u0434\u0430: Open-Meteo.",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",streakTitle:"\u041D\u0430\u0448\u0430 \u0441\u0435\u0440\u0438\u044F",streakHint:"\u0417\u0430\u0445\u043E\u0434\u0438 \u0432 \u0433\u043B\u043E\u0431\u0443\u0441 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0433\u043E\u043D\u0451\u043A \u043D\u0435 \u043F\u043E\u0433\u0430\u0441.",streakDay:"\u0434\u0435\u043D\u044C",streakDays:"\u0434\u043D.",streakNow:"{n} {d} \u043F\u043E\u0434\u0440\u044F\u0434",streakBest:"\u0440\u0435\u043A\u043E\u0440\u0434: {n}",streakLit:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0443\u0436\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakWait:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakNew:"{n} \u0434\u043D. \u043F\u043E\u0434\u0440\u044F\u0434",heartsTotal:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",gamesTitle:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435",g_canvas:"\u041D\u0430\u0448 \u0445\u043E\u043B\u0441\u0442",g_canvas_d:"\u0420\u0438\u0441\u0443\u0435\u043C \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E",g_theme:"\u0420\u0438\u0441\u0443\u0435\u043C \u043F\u043E \u0442\u0435\u043C\u0435",g_theme_d:"\u041E\u0434\u043D\u0430 \u0442\u0435\u043C\u0430, \u043E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445",themeLabel:"\u0422\u0435\u043C\u0430",themeNew:"\u0414\u0440\u0443\u0433\u0430\u044F \u0442\u0435\u043C\u0430",themeAll:"\u0412\u0441\u0451",themeNewConfirm:"\u041D\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0441\u044F \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445, \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0435\u0451, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430.",g_bottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",g_bottles_d:"\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u0432 \u0431\u0443\u0442\u044B\u043B\u043A\u0435 \u043F\u043B\u044B\u0432\u0451\u0442 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",g_ttt:"\u041A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438",g_ttt_d:"\u0417\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",g_bs:"\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439",g_bs_d:"\u0411\u0438\u0442\u0432\u0430 \u043D\u0430 \u043F\u043E\u043B\u0435 8\xD78",g_hang:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",g_hang_d:"\u0423\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",online:"\u0432 \u0441\u0435\u0442\u0438",offline:"\u043D\u0435 \u0432 \u0441\u0435\u0442\u0438",back:"\u041D\u0430\u0437\u0430\u0434",yourTurnBadge:"\u0442\u0432\u043E\u0439 \u0445\u043E\u0434",newBadge:"\u043D\u043E\u0432\u043E\u0435",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",clear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",saved:"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",eraser:"\u041B\u0430\u0441\u0442\u0438\u043A",clearConfirm:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0445\u043E\u043B\u0441\u0442 \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445?",yes:"\u0414\u0430",no:"\u041D\u0435\u0442",canvasFull:"\u0425\u043E\u043B\u0441\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D. \u041E\u0447\u0438\u0441\u0442\u0438 \u0435\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.",bottleHelp:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432. \u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u044B\u0432\u0451\u0442 \u043E\u043A\u0435\u0430\u043D \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434.",newBottle:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u0443\u0442\u044B\u043B\u043A\u0443",writeBottle:"\u041D\u043E\u0432\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430",noBottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0435\u0440\u0432\u0443\u044E!",toX:"\u0414\u043B\u044F {name}",fromX:"\u041E\u0442 {name}",bottle:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430",bottleText:"\u041F\u0430\u0440\u0430 \u0441\u043B\u043E\u0432 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",drawSomething:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0440\u0438\u0441\u0443\u0439 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",sendBottle:"\u0411\u0440\u043E\u0441\u0438\u0442\u044C \u0432 \u043C\u043E\u0440\u0435",bottleSent:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430! \u041E\u043D\u0430 \u043F\u043B\u044B\u0432\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u043E\u043A\u0435\u0430\u043D",bottleArrived:"\u041A \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0438\u0431\u0438\u043B\u043E \u0431\u0443\u0442\u044B\u043B\u043A\u0443 \u043E\u0442 {name}!",reply:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",replay:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",newRound:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434",youWin:"\u0422\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B{s}!",theyWin:"\u0412\u044B\u0438\u0433\u0440\u0430\u043B{g} {name}",draw:"\u041D\u0438\u0447\u044C\u044F!",yourTurn:"\u0422\u0432\u043E\u0439 \u0445\u043E\u0434",theirTurn:"{name} \u0434\u0443\u043C\u0430\u0435\u0442\u2026",enemyWaters:"\u0412\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",yourFleet:"\u0422\u0432\u043E\u0439 \u0444\u043B\u043E\u0442",newGame:"\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430",noFit:"\u041A\u043E\u0440\u0430\u0431\u043B\u044C \u0441\u044E\u0434\u0430 \u043D\u0435 \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F",placeShips:"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u0440\u0430\u0431\u043B\u0438",horiz:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",vert:"\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",ready:"\u0413\u043E\u0442\u043E\u0432\u043E!",waitingPlace:"\u0416\u0434\u0451\u043C, \u043F\u043E\u043A\u0430 {name} \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442 \u043A\u043E\u0440\u0430\u0431\u043B\u0438\u2026",bsMiss:"\u043C\u0438\u043C\u043E",bsHit:"\u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435!",bsSunk:"\u043A\u043E\u0440\u0430\u0431\u043B\u044C \u043F\u043E\u0442\u043E\u043F\u043B\u0435\u043D!",bsHint:"\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u0432\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0435\u043B\u044F\u0442\u044C.",wordShort:"\u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0431\u0443\u043A\u0432\u044B (A\u2013Z)",hintIs:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430: {h}",pickWord:"\u0417\u0430\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",hintOptional:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",hideWord:"\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0441\u043B\u043E\u0432\u043E",wordHelp:"\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B A\u2013Z, \u043E\u0442 3 \u0434\u043E 12.",waitingWord:"{name} \u0437\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0441\u043B\u043E\u0432\u043E\u2026",watching:"{name} \u043E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u2026",guessLetters:"\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u0439 \u0431\u0443\u043A\u0432\u044B",theyGuessed:"{name} \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}!",youGuessed:"\u0422\u044B \u043E\u0442\u0433\u0430\u0434\u0430\u043B{s}!",theyFailed:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. {name} \u043D\u0435 \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}",wordWas:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. \u0421\u043B\u043E\u0432\u043E \u0431\u044B\u043B\u043E {w}",nextRound2:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434"}},Yo="en",$o=i=>{Yo=qc[i]?i:"en",document.documentElement.lang=Yo},Re=()=>Yo;function pt(i,t){let e=qc[Yo][i]??qc.en[i]??i;if(t)for(let[n,s]of Object.entries(t))e=e.split("{"+n+"}").join(s);return e}function U(i,t,...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t||{}))r===!1||r==null||(s==="class"?n.className=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):n.setAttribute(s,r===!0?"":r));for(let s of e.flat(1/0))s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Pd=null;function sn(i,t=2800){let e=document.getElementById("toast");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(Pd),Pd=setTimeout(()=>e.classList.remove("show"),t))}function gi(i,{onClose:t,cls:e=""}={}){let n=U("div",{class:"modal-wrap "+e}),s=U("div",{class:"modal glass"},i);n.append(s);let r=()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),200),t&&t()};return n.addEventListener("pointerdown",a=>{a.target===n&&r()}),document.getElementById("modals").append(n),requestAnimationFrame(()=>n.classList.add("in")),{close:r,el:s}}function ws(i,t,e){return new Promise(n=>{let s=!1,r=o=>{s||(s=!0,n(o)),a.close()},a=gi(U("div",{class:"confirm"},U("p",{},i),U("div",{class:"row"},U("button",{class:"btn ghost",onclick:()=>r(!1)},e),U("button",{class:"btn",onclick:()=>r(!0)},t))),{onClose:()=>{s||(s=!0,n(!1))}})})}var fe=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Qt=(i,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${t}>${i}</svg>`,Jt={heart:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.6s-7.3-4.5-9.4-9.1C1.2 8.3 2.9 4.7 6.4 4.7c1.9 0 3.5 1 4.6 2.6h2c1.1-1.6 2.7-2.6 4.6-2.6 3.5 0 5.2 3.6 3.8 6.8-2.1 4.6-9.4 9.1-9.4 9.1z"/></svg>',heartO:Qt('<path d="M12 20s-7-4.3-9-8.7C1.7 8.3 3.3 5 6.5 5c1.8 0 3.3 1 4.3 2.5h2.4C14.2 6 15.7 5 17.5 5 20.7 5 22.3 8.3 21 11.3 19 15.7 12 20 12 20z"/>'),flame:Qt('<path d="M12 21c3.9 0 6.5-2.6 6.5-6.2 0-2.7-1.6-4.4-3-6-.8-.9-1.4-2.2-1.5-3.8C11 6 7.5 9.4 7.5 14.2 7.5 18 9.8 21 12 21z"/><path d="M12 21c-1.7 0-2.9-1.2-2.9-2.9 0-1.5 1-2.3 1.9-3.3.4-.4.7-1 .8-1.7 1.4.8 3 2.2 3 4.2 0 2-1.3 3.7-2.8 3.7z" stroke-width="1.2"/>'),globe:Qt('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.4 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.4-3.4-8.5s1-6.1 3.4-8.5z"/>'),games:Qt('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><circle cx="17" cy="17" r="3.5"/>'),bottle:Qt('<path d="M10 3h4M10.5 3v3.5L8.5 9.5V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9.5l-2-3V3"/><path d="M8.5 13h7"/>'),smile:Qt('<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2"/><path d="M9 9.8v.01M15 9.8v.01" stroke-width="2"/>'),gear:Qt('<circle cx="12" cy="12" r="2.8"/><path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6"/>'),back:Qt('<path d="M14.5 5.5 8 12l6.5 6.5"/>','stroke-width="1.8"'),close:Qt('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>','stroke-width="1.8"'),undo:Qt('<path d="M9 14 4.5 9.5 9 5"/><path d="M4.5 9.5H14a5.5 5.5 0 0 1 0 11h-3"/>'),trash:Qt('<path d="M4.5 7h15M10 11v6M14 11v6M6.5 7l.8 12h9.4l.8-12M9.5 7V4.5h5V7"/>'),eraser:Qt('<path d="M19.5 19.5H9L4.2 14.7a1.8 1.8 0 0 1 0-2.5l7.5-7.5a1.8 1.8 0 0 1 2.5 0l5.1 5.1a1.8 1.8 0 0 1 0 2.5l-5.3 5.2"/><path d="m7.5 10.5 6 6"/>'),save:Qt('<path d="M12 4v11M7.5 11 12 15.5 16.5 11M5 19.5h14"/>'),send:Qt('<path d="M20.5 3.5 10 14M20.5 3.5l-6.6 17-3.9-6.5-6.5-3.9z"/>'),pen:Qt('<path d="M4 20l1-4.5L16.5 4a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.5 19z"/><path d="M14.5 6l3.5 3.5"/>'),hash:Qt('<path d="M9 4 7.5 20M16.5 4 15 20M4.5 9h15.5M4 15h15.5"/>'),anchor:Qt('<circle cx="12" cy="5.5" r="2"/><path d="M12 7.5V21M7.5 11h9M4.5 14c.4 3.4 3.4 6.5 7.5 6.5s7.1-3.1 7.5-6.5"/>'),petal:Qt('<circle cx="12" cy="12" r="2"/><path d="M12 10C9.5 7 9.5 4 12 3c2.5 1 2.5 4 0 7zM14 12c3-2.5 6-2.5 7 0-1 2.5-4 2.5-7 0zM12 14c2.500 3 2.500 6 0 7-2.500-1-2.500-4 0-7zM10 12c-3 2.500-6 2.500-7 0 1-2.500 4-2.500 7 0z" stroke-width="1.2"/>'),shuffle:Qt('<path d="M3.5 7.5h3c1.6 0 3 .8 3.9 2.200l2.700 4.600c.9 1.400 2.300 2.200 3.900 2.200h3.500M3.500 16.500h3c1.600 0 3-.800 3.900-2.200M13.400 9.700c.900-1.400 2.300-2.200 3.900-2.200h3.200"/><path d="M18 5l2.500 2.500L18 10M18 14l2.500 2.500L18 19"/>'),bulb:Qt('<path d="M9.500 18h5M10.500 21h3"/><path d="M12 3.500a5.700 5.700 0 0 0-3.400 10.300c.6.500.9 1.100.9 1.700v.5h5v-.5c0-.6.3-1.200.9-1.700A5.700 5.700 0 0 0 12 3.500z"/>'),chevron:Qt('<path d="M9.5 5.5 16 12l-6.5 6.5"/>'),sun:Qt('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>'),moon:Qt('<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z"/>'),cloud:Qt('<path d="M7 18h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 9.6 4.2 4.2 0 0 0 7 18z"/>'),partly:Qt('<circle cx="8.5" cy="8.5" r="2.7"/><path d="M8.5 3v1.2M3 8.5h1.2M4.7 4.7l.9.9M12.3 4.7l-.9.9"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.1z"/>'),partlyN:Qt('<path d="M10.5 4.2A4.3 4.3 0 1 0 14 10.5a3.4 3.4 0 0 1-3.5-6.300z"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.100z"/>'),rain:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18l-1 2.500M12.500 18l-1 2.500M16.500 18l-1 2.500"/>'),drizzle:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v1M12.500 18.500v1M16.500 18.500v1"/>'),snow:Qt('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v.01M12.500 20v.01M16.500 18.500v.01" stroke-width="2.300"/>'),storm:Qt('<path d="M7 14.500h10.200a4 4 0 0 0 .6-7.950A5.600 5.600 0 0 0 7 6.100 4.200 4.200 0 0 0 7 14.500z"/><path d="m12.800 14.500-2.600 3.700h3.200L11.800 21.500"/>'),fog:Qt('<path d="M4 9h16M6.500 13h11M4 17h16"/>')};function Cr(i,t){return i===0?t?"sun":"moon":i===1||i===2?t?"partly":"partlyN":i===45||i===48?"fog":[51,53,55,56,57].includes(i)?"drizzle":[61,63,65,66,67,80,81,82].includes(i)?"rain":[71,73,75,77,85,86].includes(i)?"snow":[95,96,99].includes(i)?"storm":"cloud"}var Yc=["#2b2d42","#ff4d8d","#ff9f43","#ffd93d","#4cd964","#4cc9f0","#8a5cf6","#ffffff"],$c=[5,11,22],Zo=i=>`${i.c.replace("#","")},${i.w},${i.e?1:0}:${i.pts.map(t=>t[0]+","+t[1]).join(" ")}`;function Id(i){let t=i.indexOf(":"),e=i.slice(0,t).split(","),n=i.slice(t+1).split(" ").filter(Boolean).map(s=>s.split(",").map(Number));return{c:"#"+e[0],w:+e[1],e:e[2]==="1",pts:n}}var Ld=i=>i.map(Zo).join("|"),Jo=i=>i?i.split("|").filter(Boolean).map(Id):[];function Ax(i,t,e){i.beginPath(),i.moveTo(t[0][0]*e,t[0][1]*e);for(let s=1;s<t.length-1;s++)i.quadraticCurveTo(t[s][0]*e,t[s][1]*e,(t[s][0]+t[s+1][0])/2*e,(t[s][1]+t[s+1][1])/2*e);let n=t[t.length-1];i.lineTo(n[0]*e,n[1]*e)}function Dd(i,t,e,n=1){let s=e/1e3,r=n>=1?1/0:t.reduce((a,o)=>a+o.pts.length,0)*n;i.lineCap="round",i.lineJoin="round";for(let a of t){if(r<=0)break;let o=Math.min(a.pts.length,Math.ceil(r));r-=a.pts.length;let l=a.pts.slice(0,o);l.length&&(i.globalCompositeOperation=a.e?"destination-out":"source-over",i.strokeStyle=i.fillStyle=a.c,i.lineWidth=a.w*s,l.length===1?(i.beginPath(),i.arc(l[0][0]*s,l[0][1]*s,a.w*s/2,0,Math.PI*2),i.fill()):(Ax(i,l,s),i.stroke()))}i.globalCompositeOperation="source-over"}var Fi=class{constructor(t,e={}){this.cv=t,this.ctx=t.getContext("2d"),this.layer=document.createElement("canvas"),this.lctx=this.layer.getContext("2d"),this.bg=e.bg||"#fffaf3",this.readonly=!!e.readonly,this.me=e.me||"x",this.onUpdate=e.onUpdate,this.onEnd=e.onEnd,this.tool={c:Yc[0],w:$c[1],e:!1},this.strokes=new Map,this.cur=null,this.dirty=!0,this.replay=null,this.alive=!0,this._cache=new Map,t.style.touchAction="none",this._bind();let n=()=>{this.alive&&(this._frame(),requestAnimationFrame(n))};requestAnimationFrame(n)}destroy(){this.alive=!1}list(){return[...this.strokes.values()].sort((t,e)=>t.t-e.t||(t.id<e.id?-1:1))}merge(t){let e=Date.now();for(let[n,s]of Object.entries(t||{})){if(this.cur&&this.cur.id===n)continue;let r=n+":"+s.d.length,a=this._cache.get(r);a||(a=Id(s.d),this._cache.set(r,a)),this.strokes.set(n,{id:n,u:s.u,t:s.t,...a})}for(let[n,s]of[...this.strokes])t&&t[n]||this.cur&&this.cur.id===n||s.pendingUntil&&s.pendingUntil>e||this.strokes.delete(n);this.dirty=!0}setStrokes(t){this.strokes.clear(),t.forEach((e,n)=>this.strokes.set("s"+n,{id:"s"+n,t:n,u:"",...e})),this.dirty=!0}clearAll(){this.strokes.clear(),this.dirty=!0}myLast(){let t=this.list().filter(e=>e.u===this.me);return t[t.length-1]||null}removeLocal(t){this.strokes.delete(t),this.dirty=!0}playReplay(t=2600,e){this.replay={t0:performance.now(),ms:t,done:e},this.dirty=!0}_pt(t){let e=this.cv.getBoundingClientRect();return[Math.max(0,Math.min(1e3,Math.round((t.clientX-e.left)/e.width*1e3))),Math.max(0,Math.min(1e3,Math.round((t.clientY-e.top)/e.height*1e3)))]}_bind(){let t=this.cv;t.addEventListener("pointerdown",n=>{if(this.readonly||this.cur)return;t.setPointerCapture(n.pointerId);let s=this.tool;this.cur={id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),u:this.me,t:Date.now(),c:s.c,w:s.e?s.w*2.4:s.w,e:s.e,pts:[this._pt(n)]},this.strokes.set(this.cur.id,this.cur),this.dirty=!0,this._emit(!1),n.preventDefault()}),t.addEventListener("pointermove",n=>{let s=this.cur;if(!s)return;let r=n.getCoalescedEvents?n.getCoalescedEvents():[n];for(let a of r.length?r:[n]){let o=this._pt(a),l=s.pts[s.pts.length-1];Math.abs(o[0]-l[0])+Math.abs(o[1]-l[1])>=2&&s.pts.push(o)}this.dirty=!0,this._emit(!1)});let e=()=>{let n=this.cur;n&&(this._ended=n,this.cur=null,n.pendingUntil=Date.now()+5e3,this._emit(!0))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}_emit(t){if(t){this.onEnd&&this.onEnd(this._ended);return}let e=performance.now();this._last&&e-this._last<110||(this._last=e,this.onUpdate&&this.onUpdate(this.cur))}_frame(){let t=this.cv.getBoundingClientRect();if(!t.width)return;let e=Math.min(window.devicePixelRatio||1,2),n=Math.round(t.width*e);this.cv.width!==n&&(this.cv.width=this.cv.height=this.layer.width=this.layer.height=n,this.dirty=!0);let s=1;if(this.replay&&(s=Math.min(1,(performance.now()-this.replay.t0)/this.replay.ms),this.dirty=!0,s>=1)){let r=this.replay.done;this.replay=null,r&&r()}this.dirty&&(this.dirty=!1,this.lctx.clearRect(0,0,n,n),Dd(this.lctx,this.list(),n,s),this.ctx.fillStyle=this.bg,this.ctx.fillRect(0,0,n,n),this.ctx.drawImage(this.layer,0,0))}toBlob(){return new Promise(t=>this.cv.toBlob(t,"image/png"))}};function Nd(i,t=96,e="#fffaf3"){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=document.createElement("canvas");return r.width=r.height=t,Dd(r.getContext("2d"),Jo(i),t),s.fillStyle=e,s.fillRect(0,0,t,t),s.drawImage(r,0,0),n}function Ko(i,t,e=[]){let n=Yc.map(c=>U("button",{class:"sw","data-c":c,style:{background:c},"aria-label":c,onclick:()=>a(c)})),s=$c.map((c,h)=>U("button",{class:"sz","data-w":c,onclick:()=>o(c)},U("i",{style:{width:6+h*6+"px",height:6+h*6+"px"}}))),r=U("button",{class:"tb",id:"tb-eraser",title:t("eraser"),html:Jt.eraser,onclick:()=>{i.tool.e=!i.tool.e,l()}});function a(c){i.tool.c=c,i.tool.e=!1,l()}function o(c){i.tool.w=c,l()}function l(){n.forEach(c=>c.classList.toggle("on",!i.tool.e&&c.dataset.c===i.tool.c)),s.forEach(c=>c.classList.toggle("on",+c.dataset.w===i.tool.w)),r.classList.toggle("on",i.tool.e)}return l(),U("div",{class:"toolbar"},U("div",{class:"row sws"},n),U("div",{class:"row"},s,r,...e))}function jo(i,{path:t="canvas",head:e=null}={}){let{t:n,net:s,me:r}=i,a=U("canvas",{id:"shared-canvas",class:"board"}),o=U("div",{class:"g-note"}),l=new Fi(a,{me:r,onUpdate:v=>s.set(t+"/strokes/"+v.id,{u:v.u,t:v.t,d:Zo(v)}),onEnd:v=>{v&&s.set(t+"/strokes/"+v.id,{u:v.u,t:v.t,d:Zo(v)})}}),c=0,h=s.listen(t+"/strokes",v=>{c=Object.keys(v||{}).length,l.merge(v||{}),o.textContent=c>=500?n("canvasFull"):""}),u=U("button",{class:"tb",id:"tb-undo",title:n("undo"),html:Jt.undo,onclick:()=>{let v=l.myLast();v&&(l.removeLocal(v.id),s.remove(t+"/strokes/"+v.id))}}),d=U("button",{class:"tb",id:"tb-clear",title:n("clear"),html:Jt.trash,onclick:async()=>{await ws(n("clearConfirm"),n("yes"),n("no"))&&(l.clearAll(),s.remove(t+"/strokes"))}}),f=U("button",{class:"tb",id:"tb-save",title:n("save"),html:Jt.save,onclick:async()=>{let v=await l.toBlob(),g=new File([v],"our-drawing.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[g]})){await navigator.share({files:[g]});return}}catch{return}let m=document.createElement("a");m.href=URL.createObjectURL(v),m.download="our-drawing.png",document.body.append(m),m.click(),m.remove(),sn(n("saved"))}});return{el:U("div",{class:"game canvas-game"},e,U("div",{class:"board-wrap"},a),o,Ko(l,n,[u,d,f])),update(){},count:()=>c,wipe(){l.clearAll(),s.remove(t+"/strokes")},destroy(){h(),l.destroy()}}}function Zc(i){let{t,me:e,other:n}=i,s=U("div",{class:"b-list"}),r=U("div",{class:"game bottles"},U("button",{class:"btn big",id:"b-write",onclick:()=>i.push(t("writeBottle"),Ud(i))},U("span",{class:"ico",html:Jt.bottle}),t("newBottle")),U("p",{class:"g-note"},t("bottleHelp")),s);function a(){let l=Object.entries(i.S.bottles||{}).map(([c,h])=>({id:c,...h})).sort((c,h)=>h.t-c.t);s.replaceChildren(...l.length?l.map(o):[U("div",{class:"empty"},t("noBottles"))])}function o(l){let c=l.f===e,h=!c&&!l.r,u=Nd(l.s||"",84);return u.className="b-thumb",U("button",{class:"b-row"+(h?" unread":""),"data-id":l.id,onclick:()=>i.push(t("bottle"),Jc(i,l.id))},u,U("div",{class:"b-info"},U("b",{},c?t("toX",{name:i.name(n)}):t("fromX",{name:i.name(n)})),U("small",{},i.ago(l.t)+(l.x?" \xB7 "+l.x.slice(0,40):""))),h?U("i",{class:"dot"}):null)}return a(),{el:r,update:a,destroy(){}}}function Ud(i){let{t,me:e}=i,n=U("canvas",{id:"bottle-canvas",class:"board"}),s=new Fi(n,{me:e,bg:"#fff6e6"}),r=U("textarea",{id:"bottle-text",maxlength:120,rows:2,placeholder:t("bottleText")}),a=!1,o=U("button",{class:"btn big",id:"bottle-send",onclick:async()=>{if(a)return;let c=s.list(),h=r.value.trim();if(!c.length&&!h){sn(t("drawSomething"));return}a=!0;let u=i.net.newId();i.net.set("bottles/"+u,{f:e,t:Date.now(),x:h,s:Ld(c.map(d=>({c:d.c,w:d.w,e:d.e,pts:d.pts}))),r:0}),i.pruneBottles(),i.pop(),i.afterBottleSent(u)}},U("span",{class:"ico",html:Jt.send}),t("sendBottle"));return{el:U("div",{class:"game compose"},U("div",{class:"board-wrap sm"},n),Ko(s,t),r,o),update(){},destroy(){s.destroy()}}}function Jc(i,t){let{t:e,me:n}=i,s=(i.S.bottles||{})[t],r=U("canvas",{id:"viewer-canvas",class:"board"}),a=new Fi(r,{readonly:!0,bg:"#fff6e6"}),o=U("div",{class:"b-msg"}),l=U("div",{class:"b-from"}),c=U("div",{class:"row"}),h=U("div",{class:"game viewer"},l,U("div",{class:"board-wrap sm"},r),o,c),u=!1;function d(){let f=(i.S.bottles||{})[t];if(!f){i.pop();return}let p=f.f===n;l.textContent=(p?e("toX",{name:i.name(i.other)}):e("fromX",{name:i.name(i.other)}))+" \xB7 "+i.ago(f.t),o.textContent=f.x||"",u||(u=!0,a.setStrokes(Jo(f.s||"")),a.playReplay(Math.min(3600,900+Jo(f.s||"").reduce((v,g)=>v+g.pts.length,0)*12)),!p&&!f.r&&i.net.set("bottles/"+t+"/r",Date.now()),c.replaceChildren(p?null:U("button",{class:"btn",id:"bottle-reply",onclick:()=>i.replace(e("writeBottle"),Ud(i))},U("span",{class:"ico",html:Jt.bottle}),e("reply")),U("button",{class:"btn ghost",id:"bottle-replay",onclick:()=>a.playReplay(2400)},e("replay"))))}return d(),{el:h,update:d,destroy(){a.destroy()}}}var Kt=(i,t,e,n,s)=>({n:{en:i,ru:t},lat:e,lon:n,tz:s}),Fd=[Kt("Tula","\u0422\u0443\u043B\u0430",54.1931,37.6173,"Europe/Moscow"),Kt("Seattle","\u0421\u0438\u044D\u0442\u043B",47.6062,-122.3321,"America/Los_Angeles"),Kt("Moscow","\u041C\u043E\u0441\u043A\u0432\u0430",55.7558,37.6173,"Europe/Moscow"),Kt("Saint Petersburg","\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",59.9343,30.3351,"Europe/Moscow"),Kt("Kazan","\u041A\u0430\u0437\u0430\u043D\u044C",55.7887,49.1221,"Europe/Moscow"),Kt("Sochi","\u0421\u043E\u0447\u0438",43.5855,39.7231,"Europe/Moscow"),Kt("Kaliningrad","\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434",54.7104,20.4522,"Europe/Kaliningrad"),Kt("Yekaterinburg","\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433",56.8389,60.6057,"Asia/Yekaterinburg"),Kt("Novosibirsk","\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",55.0084,82.9357,"Asia/Novosibirsk"),Kt("Vladivostok","\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",43.1155,131.8855,"Asia/Vladivostok"),Kt("London","\u041B\u043E\u043D\u0434\u043E\u043D",51.5072,-.1276,"Europe/London"),Kt("Paris","\u041F\u0430\u0440\u0438\u0436",48.8566,2.3522,"Europe/Paris"),Kt("Berlin","\u0411\u0435\u0440\u043B\u0438\u043D",52.52,13.405,"Europe/Berlin"),Kt("Rome","\u0420\u0438\u043C",41.9028,12.4964,"Europe/Rome"),Kt("Barcelona","\u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430",41.3874,2.1686,"Europe/Madrid"),Kt("Prague","\u041F\u0440\u0430\u0433\u0430",50.0755,14.4378,"Europe/Prague"),Kt("Istanbul","\u0421\u0442\u0430\u043C\u0431\u0443\u043B",41.0082,28.9784,"Europe/Istanbul"),Kt("Dubai","\u0414\u0443\u0431\u0430\u0439",25.2048,55.2708,"Asia/Dubai"),Kt("Tbilisi","\u0422\u0431\u0438\u043B\u0438\u0441\u0438",41.7151,44.8271,"Asia/Tbilisi"),Kt("Yerevan","\u0415\u0440\u0435\u0432\u0430\u043D",40.1792,44.4991,"Asia/Yerevan"),Kt("Tokyo","\u0422\u043E\u043A\u0438\u043E",35.6762,139.6503,"Asia/Tokyo"),Kt("Seoul","\u0421\u0435\u0443\u043B",37.5665,126.978,"Asia/Seoul"),Kt("Bangkok","\u0411\u0430\u043D\u0433\u043A\u043E\u043A",13.7563,100.5018,"Asia/Bangkok"),Kt("Singapore","\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",1.3521,103.8198,"Asia/Singapore"),Kt("Sydney","\u0421\u0438\u0434\u043D\u0435\u0439",-33.8688,151.2093,"Australia/Sydney"),Kt("Reykjavik","\u0420\u0435\u0439\u043A\u044C\u044F\u0432\u0438\u043A",64.1466,-21.9426,"Atlantic/Reykjavik"),Kt("New York","\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",40.7128,-74.006,"America/New_York"),Kt("Chicago","\u0427\u0438\u043A\u0430\u0433\u043E",41.8781,-87.6298,"America/Chicago"),Kt("Los Angeles","\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441",34.0522,-118.2437,"America/Los_Angeles"),Kt("San Francisco","\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E",37.7749,-122.4194,"America/Los_Angeles"),Kt("Portland","\u041F\u043E\u0440\u0442\u043B\u0435\u043D\u0434",45.5152,-122.6784,"America/Los_Angeles"),Kt("Vancouver","\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440",49.2827,-123.1207,"America/Vancouver")],Od="https://geocoding-api.open-meteo.com/v1/",Bd=i=>{let t=new AbortController;return setTimeout(()=>t.abort(),i),t.signal};async function kd(i,t){let e=await fetch(`${Od}search?name=${encodeURIComponent(i)}&count=8&language=${t}&format=json`,{signal:Bd(6e3)});if(!e.ok)throw new Error("geo "+e.status);return((await e.json()).results||[]).filter(s=>s.timezone).map(s=>({id:s.id,n:{[t]:s.name},lat:s.latitude,lon:s.longitude,tz:s.timezone,sub:[s.admin1,s.country].filter(Boolean).join(", ")}))}async function zd(i,t){let e=t==="ru"?"en":"ru",n={n:{en:i.n.en,ru:i.n.ru},lat:+i.lat.toFixed(4),lon:+i.lon.toFixed(4),tz:i.tz};if(!i.n[e]&&i.id)try{let s=await fetch(`${Od}get?id=${i.id}&language=${e}`,{signal:Bd(3500)});if(s.ok){let r=await s.json();r&&r.name&&(n.n[e]=r.name)}}catch{}return n.n.en=n.n.en||n.n[t],n.n.ru=n.n.ru||n.n[t],n}function Hd(i,{fmtTime:t,canReset:e,resetName:n,onPick:s,onReset:r}){let{t:a}=i,o=i.lang(),l=U("input",{id:"city-q",type:"search",placeholder:a("citySearch"),autocomplete:"off",autocapitalize:"words",spellcheck:"false",enterkeyhint:"search"}),c=U("div",{class:"city-list",id:"city-list"}),h=U("p",{class:"small city-note"}),u,d=0,f=null,p=!1,v=w=>w.n[o]||w.n.en||w.n.ru||"",g=(w,A)=>U("button",{class:"city-row","data-i":A,onclick:()=>E(w)},U("span",{class:"cr-n"},U("b",{},v(w)),w.sub?U("small",{},w.sub):null),U("span",{class:"cr-t"},t(w.tz))),m=(w,A)=>{c.replaceChildren(...A?[U("div",{class:"city-h"},A)]:[],...w.map(g))},S=(w="")=>{let A=w.trim().toLowerCase();return Fd.filter(_=>!A||_.n.en.toLowerCase().includes(A)||_.n.ru.toLowerCase().includes(A))};async function E(w){if(p)return;p=!0,c.classList.add("busy");let A=await zd(w,o);u.close(),s(A)}async function M(){let w=l.value.trim(),A=++d;if(h.textContent="",w.length<2){m(S(),a("cityPopular"));return}let _=S(w);m(_);try{let b=await kd(w,o);if(A!==d)return;let N=O=>_.some(k=>Math.abs(k.lat-O.lat)<.15&&Math.abs(k.lon-O.lon)<.15),P=[..._,...b.filter(O=>!N(O))];P.length?m(P):(c.replaceChildren(),h.textContent=a("cityNo"))}catch{if(A!==d)return;_.length?h.textContent=a("cityOffline"):h.textContent=a("cityNo")}}l.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(M,260)}),u=gi(U("div",{class:"cityp"},U("h3",{},a("cityTitle")),l,h,c,e?U("button",{class:"btn ghost",id:"city-reset",onclick:()=>{u.close(),r()}},a("cityReset",{city:n})):null)),m(S(),a("cityPopular")),setTimeout(()=>{try{l.focus({preventScroll:!0})}catch{}},350)}var rn=i=>i.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>t.split("|")),Jn=[{id:"us",ru:"\u041C\u044B \u0432\u0434\u0432\u043E\u0451\u043C",en:"Us two",items:rn(`
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
`)},{id:"sweet",ru:"\u041C\u0438\u043B\u043E\u0435",en:"Sweet",items:rn(`
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
`)},{id:"animals",ru:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435",en:"Animals",items:rn(`
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
`)},{id:"food",ru:"\u0415\u0434\u0430",en:"Food",items:rn(`
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
`)},{id:"places",ru:"\u041C\u0435\u0441\u0442\u0430",en:"Places",items:rn(`
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
`)},{id:"nature",ru:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",en:"Nature",items:rn(`
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
`)},{id:"fantasy",ru:"\u0424\u044D\u043D\u0442\u0435\u0437\u0438",en:"Fantasy",items:rn(`
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
`)},{id:"funny",ru:"\u0421\u043C\u0435\u0448\u043D\u043E\u0435",en:"Silly",items:rn(`
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
`)},{id:"objects",ru:"\u0412\u0435\u0449\u0438",en:"Things",items:rn(`
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
`)},{id:"feelings",ru:"\u0427\u0443\u0432\u0441\u0442\u0432\u0430",en:"Feelings",items:rn(`
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
`)},{id:"hobbies",ru:"\u0417\u0430\u043D\u044F\u0442\u0438\u044F",en:"Activities",items:rn(`
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
`)}],Qo={who:rn(`
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
`),does:rn(`
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
`)},Tx=Jn.map(i=>i.id),WS=Jn.reduce((i,t)=>i+t.items.length,0),Ex=i=>i[Math.random()*i.length|0];function Vd(i,t){if(!i)return"";let e=t==="ru"?0:1;if(i.k==="mix"){let r=Qo.who[i.a],a=Qo.does[i.b];return!r||!a?"":t==="ru"?`${r[0]} ${a[0]}`:`${r[1]} ${a[1]}`}let n=Jn.find(r=>r.id===i.k),s=n&&n.items[i.i];return s?s[e]||s[0]:""}function Kc(i,t){if(!i)return"";if(i.k==="mix")return t==="ru"?"\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u043C\u0438\u043A\u0441":"Wild mix";let e=Jn.find(n=>n.id===i.k);return e?t==="ru"?e.ru:e.en:""}function jc(i,t=[]){let e=new Set(t);for(let n=0;n<30;n++){let s=i;s==="all"&&(s=Math.random()<.18?"mix":Ex(Tx));let r;if(s==="mix")r={k:s,a:Math.random()*Qo.who.length|0,b:Math.random()*Qo.does.length|0};else{let o=Jn.find(l=>l.id===s)||Jn[0];r={k:o.id,i:Math.random()*o.items.length|0}}let a=r.k+":"+(r.k==="mix"?r.a+"-"+r.b:r.i);if(!e.has(a))return r}return{k:"sweet",i:0}}var Gd=i=>i.k+":"+(i.k==="mix"?i.a+"-"+i.b:i.i);var qd="g_theme_recent",Wd="g_theme_cat",Qc=()=>{try{return JSON.parse(localStorage.getItem(qd)||"[]")}catch{return[]}},Xd=i=>{try{localStorage.setItem(qd,JSON.stringify([...Qc().slice(-80),Gd(i)]))}catch{}};function Yd(i){let{t,net:e,me:n}=i,s=()=>i.lang(),r=null,a=localStorage.getItem(Wd)||"all",o=U("span",{class:"th-lab"}),l=U("div",{class:"th-t",id:"th-t"}),c=["all",...Jn.map(S=>S.id),"mix"].map(S=>U("button",{class:"th-chip","data-c":S,onclick:()=>{a=S,localStorage.setItem(Wd,S),u()}})),h=()=>{c.forEach(S=>{let E=S.dataset.c;S.textContent=E==="all"?t("themeAll"):E==="mix"?Kc({k:"mix"},s()):(()=>{let M=Jn.find(w=>w.id===E);return s()==="ru"?M.ru:M.en})(),S.classList.toggle("on",E===a)})};function u(){h();let S=Vd(r,s());o.textContent=t("themeLabel")+(r?" \xB7 "+Kc(r,s()):""),l.textContent!==S&&(l.textContent=S,l.classList.remove("swap"),l.offsetWidth,l.classList.add("swap"))}let d=async()=>{if(v.count()>0&&!await ws(t("themeNewConfirm"),t("yes"),t("no")))return;let S=jc(a,Qc());Xd(S),v.wipe(),e.set("theme/topic",{...S,t:Date.now(),by:n})},f=U("div",{class:"th-cats"},c),p=U("div",{class:"theme"},U("div",{class:"th-top"},o,U("button",{class:"th-new",id:"th-new",onclick:d},U("i",{html:Jt.shuffle}),U("span",{},t("themeNew")))),l,f),v=jo(i,{path:"theme",head:p}),g=!0,m=e.listen("theme/topic",S=>{if(!S&&g){g=!1,r=jc("all",Qc()),Xd(r),e.set("theme/topic",{...r,t:Date.now(),by:n}),u();return}g=!1,S&&(r={k:S.k,i:S.i,a:S.a,b:S.b}),u()});return u(),setTimeout(()=>{let S=f.querySelector(".on");S&&(f.scrollLeft=Math.max(0,S.offsetLeft-60))},30),{el:v.el,update:u,destroy(){m(),v.destroy()}}}function Cx(i,t){let e=JSON.parse(JSON.stringify(i));for(let[n,s]of Object.entries(t)){let r=n.split("/"),a=e;for(let o=0;o<r.length-1;o++)(!a[r[o]]||typeof a[r[o]]!="object")&&(a[r[o]]={}),a=a[r[o]];a[r[r.length-1]]=s}return e}function As(i,t,e,n,s){e?i.patch(t,s):i.set(t,Cx(n,s))}var Rx=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],Px={lesha:"L",ari:"A"},th=i=>({b:".........",turn:i,starter:i,w:"",s:{lesha:0,ari:0},n:1}),$d=i=>Rx.find(([t,e,n])=>i[t]!=="."&&i[t]===i[e]&&i[e]===i[n]),Ix='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',Lx='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 2.7 4.5 6.3 4.5c2 0 3.7 1.1 4.7 2.7h2c1-1.6 2.7-2.7 4.7-2.7 3.6 0 5.4 3.7 3.9 7.2C19.5 16.4 12 21 12 21z"/></svg>';function Zd(i){let{t,net:e,me:n,other:s}=i,r=U("div",{class:"ttt-score"}),a=U("div",{class:"g-status",id:"ttt-status"}),o=[...Array(9)].map((p,v)=>U("button",{class:"ttt-cell","data-i":v,onclick:()=>u(v)})),l=U("button",{class:"btn",id:"ttt-new",onclick:d},t("newRound")),c=U("div",{class:"game ttt"},r,a,U("div",{class:"ttt-grid"},o),l),h=()=>i.S.games.ttt||null;function u(p){let v=h()||th("lesha");if(v.w||v.turn!==n||v.b[p]!==".")return;let g=v.b.slice(0,p)+Px[n]+v.b.slice(p+1),m=$d(g),S=!g.includes("."),E=m?n:S?"d":"",M={b:g,turn:s,w:E};E===n&&(M["s/"+n]=(v.s&&v.s[n]||0)+1),As(e,"games/ttt",h(),v,M)}function d(){let p=h()||th("lesha"),v=p.starter==="lesha"?"ari":"lesha";e.set("games/ttt",{b:".........",turn:v,starter:v,w:"",s:p.s||{lesha:0,ari:0},n:(p.n||1)+1})}function f(){let p=h()||th("lesha"),v=$d(p.b);o.forEach((g,m)=>{let S=p.b[m];g.innerHTML=S==="L"?Ix:S==="A"?Lx:"",g.className="ttt-cell"+(S==="L"?" lesha":S==="A"?" ari":"")+(v&&v.includes(m)?" win":"")+(!p.w&&p.turn===n&&S==="."?" can":"")}),r.innerHTML=`<span class="s-l">${i.name("lesha")} ${p.s&&p.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${p.s&&p.s.ari||0}</span>`,a.textContent=p.w==="d"?t("draw"):p.w?p.w===n?t("youWin"):t("theyWin",{name:i.name(p.w)}):p.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(p.turn)}),a.className="g-status"+(!p.w&&p.turn===n?" mine":""),l.style.display=p.w?"":"none"}return f(),{el:c,update:f,destroy(){}}}var me=8,_i=[4,3,3,2,2],tl=".".repeat(me*me),Rr=(i,t=1)=>({n:t,st:"place",starter:i,turn:i,ready:{lesha:0,ari:0},b:{lesha:"",ari:""},sh:{lesha:tl,ari:tl},win:""}),Jd=i=>"ABCDEFGH"[i%me]+(Math.floor(i/me)+1);function Kd(i,t,e){let n=i%me,s=Math.floor(i/me);return(e?n+t>me:s+t>me)?null:Array.from({length:t},(r,a)=>i+a*(e?1:me))}function jd(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.bs||null,a=Array(me*me).fill("."),o=_i.map(()=>!1),l=0,c=!0,h=U("div",{class:"g-status",id:"bs-status"}),u=U("div",{class:"g-note",id:"bs-last"}),d=U("div",{class:"bs-palette"}),f=U("div",{class:"row bs-ctrl"}),p=(L,C)=>{let G=Array.from({length:me*me},(q,W)=>U("button",{class:"bs-cell","data-i":W,onclick:()=>C(W)}));return{cells:G,el:U("div",{class:"bs-grid",id:L},G)}},v=p("bs-mine",A),g=p("bs-enemy",N),m=U("div",{class:"bs-box"},U("div",{class:"bs-cap"},t("enemyWaters")),g.el),S=U("div",{class:"bs-box"},U("div",{class:"bs-cap",id:"bs-mine-cap"},t("yourFleet")),v.el),E=U("button",{class:"btn",id:"bs-new",onclick:P},t("newGame")),M=U("div",{class:"game bs"},h,d,f,m,S,u,E);function w(){let L=o.findIndex(C=>!C);return L<0?null:L}function A(L){let C=r()||Rr("lesha");if(C.st!=="place"||C.ready&&C.ready[n])return;if(a[L]!=="."){let q=+a[L];return a=a.map(W=>W===String(q)?".":W),o[q]=!1,l=q,k()}if((l===null||o[l])&&(l=w()),l===null)return;let G=Kd(L,_i[l],c);if(!G||G.some(q=>a[q]!==".")){i.toast(t("noFit"));return}G.forEach(q=>a[q]=String(l)),o[l]=!0,l=w(),k()}function _(){for(let L=0;L<200;L++){let C=Array(me*me).fill("."),G=!0;for(let q=0;q<_i.length&&G;q++){let W=!1;for(let nt=0;nt<60&&!W;nt++){let X=Math.random()<.5,J=Math.floor(Math.random()*me*me),tt=Kd(J,_i[q],X);tt&&tt.every(yt=>C[yt]===".")&&(tt.forEach(yt=>C[yt]=String(q)),W=!0)}G=W}if(G)return a=C,o=_i.map(()=>!0),l=null,k()}}function b(){if(o.some(G=>!G))return;let L=r()||Rr("lesha"),C={["b/"+n]:a.join(""),["ready/"+n]:1};L.ready&&L.ready[s]&&(C.st="play",C.turn=L.starter),As(e,"games/bs",r(),L,C)}function N(L){let C=r();if(!C||C.st!=="play"||C.turn!==n)return;let G=C.sh[n];if(G[L]!==".")return;let q=C.b[s];if(!q)return;let W=q[L]!==".",nt=G.slice(0,L)+(W?"h":"m")+G.slice(L+1),X=[...q].every((yt,Dt)=>yt==="."||nt[Dt]==="h"),J=W&&[...q].every((yt,Dt)=>yt!==q[L]||nt[Dt]==="h"),tt={["sh/"+n]:nt,turn:s,last:{by:n,i:L,r:W?J?"s":"h":"m",t:Date.now()}};X&&(tt.st="done",tt.win=n),e.patch("games/bs",tt)}function P(){let L=r()||Rr("lesha");e.set("games/bs",Rr(L.starter==="lesha"?"ari":"lesha",(L.n||1)+1)),a=Array(me*me).fill("."),o=_i.map(()=>!1),l=0,c=!0}let O=L=>t(L==="m"?"bsMiss":L==="s"?"bsSunk":"bsHit");function k(){let L=r()||Rr("lesha");L.st==="place"&&!(L.ready&&L.ready[n])&&L.n!==k.n&&(k.n=L.n,!o.every(X=>!X)&&L.n>1&&(a=Array(me*me).fill("."),o=_i.map(()=>!1),l=0)),L.st==="place"&&L.ready&&L.ready.lesha&&L.ready.ari&&e.patch("games/bs",{st:"play",turn:L.starter});let C=L.st==="place"&&!(L.ready&&L.ready[n]),G=L.st==="place"&&L.ready&&L.ready[n]&&!L.ready[s];d.style.display=f.style.display=C?"":"none",m.style.display=L.st==="place"?"none":"",E.style.display=L.st==="done"?"":"none",C?(h.textContent=t("placeShips"),h.className="g-status mine",d.replaceChildren(..._i.map((X,J)=>U("button",{class:"bs-ship"+(o[J]?" placed":"")+(l===J?" sel":""),onclick:()=>{o[J]&&(a=a.map(tt=>tt===String(J)?".":tt),o[J]=!1),l=J,k()}},Array.from({length:X},()=>U("i"))))),f.replaceChildren(U("button",{class:"btn ghost",id:"bs-rot",onclick:()=>{c=!c,k()}},t(c?"horiz":"vert")),U("button",{class:"btn ghost",id:"bs-rand",onclick:_},t("random")),U("button",{class:"btn",id:"bs-ready",disabled:o.some(X=>!X),onclick:b},t("ready")))):G?(h.textContent=t("waitingPlace",{name:i.name(s)}),h.className="g-status"):L.st==="play"?(h.textContent=L.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(s)}),h.className="g-status"+(L.turn===n?" mine":"")):L.st==="done"?(h.textContent=L.win===n?t("youWin"):t("theyWin",{name:i.name(L.win)}),h.className="g-status"+(L.win===n?" mine":"")):(h.textContent=t("placeShips"),h.className="g-status");let q=C?a.join(""):L.b&&L.b[n]||a.join(""),W=L.sh&&L.sh[s]||tl;v.cells.forEach((X,J)=>{let tt=q[J]!==".",yt=W[J];X.className="bs-cell"+(tt?" ship":"")+(yt==="h"?" hit":yt==="m"?" miss":""),X.disabled=!C});let nt=L.sh&&L.sh[n]||tl;if(g.cells.forEach((X,J)=>{let tt=nt[J];X.className="bs-cell"+(tt==="h"?" hit":tt==="m"?" miss":"")+(L.st==="play"&&L.turn===n&&tt==="."?" can":""),X.disabled=!(L.st==="play"&&L.turn===n&&tt===".")}),L.last&&L.st!=="place"){let X=L.last.by===n?t("you"):i.name(L.last.by);u.textContent=`${X} \u2192 ${Jd(L.last.i)}: ${O(L.last.r)}`,L.last.by!==n&&L.last.t!==k.seenLast&&(k.seenLast&&i.toast(`${i.name(L.last.by)} \u2192 ${Jd(L.last.i)}: ${O(L.last.r)}`),k.seenLast=L.last.t)}else u.textContent=t("bsHint")}return k(),{el:M,update:k,destroy(){}}}var eh=7,Dx=["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"],el=(i,t=1,e)=>({st:"pick",setter:i,w:"",hint:"",g:"",n:t,s:e||{lesha:0,ari:0}});function Nx(){return`<svg viewBox="0 0 220 230" class="petal-svg"><path class="st" d="M110 122 C108 160 112 190 110 224"/><ellipse class="lf" cx="86" cy="178" rx="22" ry="9" transform="rotate(-25 86 178)"/><ellipse class="lf" cx="136" cy="198" rx="22" ry="9" transform="rotate(25 136 198)"/>${Array.from({length:eh},(t,e)=>`<ellipse class="pt" data-i="${e}" cx="110" cy="58" rx="17" ry="38" transform="rotate(${e*360/eh} 110 104)"/>`).join("")}<circle class="ct" cx="110" cy="104" r="11"/></svg>`}function Qd(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.hang||null,a=U("div",{class:"ttt-score"}),o=U("div",{class:"g-status",id:"hg-status"}),l=U("div",{class:"petal-art",html:Nx()}),c=U("div",{class:"hg-word",id:"hg-word"}),h=U("div",{class:"g-note",id:"hg-hint"}),u=U("div",{class:"hg-body"}),d=U("div",{class:"game hang"},a,o,l,c,h,u),f=null,p=null;function v(M){let w=r()||el("lesha");As(e,"games/hang",r(),w,M)}function g(M){let w=r();if(!w||w.st!=="play"||w.setter===n||(w.g||"").includes(M))return;let A=(w.g||"")+M,_=new Set([...A].filter(O=>!w.w.includes(O))).size,N=[...w.w].every(O=>A.includes(O))?"won":_>=eh?"lost":"play",P={g:A,st:N};N==="won"&&(P["s/"+n]=(w.s&&w.s[n]||0)+1),N==="lost"&&(P["s/"+w.setter]=(w.s&&w.s[w.setter]||0)+1),e.patch("games/hang",P)}function m(){let M=r()||el("lesha");e.set("games/hang",el(M.setter==="lesha"?"ari":"lesha",(M.n||1)+1,M.s))}function S(){let M=(f.value||"").toUpperCase().replace(/[^A-Z]/g,"");if(M.length<3){i.toast(t("wordShort"));return}v({w:M,hint:(p.value||"").trim().slice(0,40),st:"play",g:""})}function E(){let M=r()||el("lesha"),w=M.g||"",A=M.w?new Set([...w].filter(N=>!M.w.includes(N))).size:0;l.querySelectorAll(".pt").forEach((N,P)=>N.classList.toggle("fall",P<A)),a.innerHTML=`<span class="s-l">${i.name("lesha")} ${M.s&&M.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${M.s&&M.s.ari||0}</span>`;let _=M.setter===n;if(c.textContent="",h.textContent=M.hint?t("hintIs",{h:M.hint}):"",M.st==="pick"){_?(o.textContent=t("pickWord"),o.className="g-status mine",u.querySelector("#hg-input")||(f=U("input",{id:"hg-input",maxlength:12,placeholder:"WORD",autocapitalize:"characters",autocomplete:"off",oninput:()=>{f.value=f.value.toUpperCase().replace(/[^A-Z]/g,"")}}),p=U("input",{id:"hg-hintin",maxlength:40,placeholder:t("hintOptional")}),u.replaceChildren(f,p,U("button",{class:"btn big",id:"hg-hide",onclick:S},t("hideWord")),U("p",{class:"g-note"},t("wordHelp"))))):(o.textContent=t("waitingWord",{name:i.name(M.setter)}),o.className="g-status",u.replaceChildren());return}let b=[...M.w].map(N=>w.includes(N)||M.st!=="play"||_?N:"_");if(c.innerHTML=b.map((N,P)=>`<span class="${w.includes(M.w[P])?"got":M.st!=="play"||_?"ghost":""}">${N}</span>`).join(""),M.st==="play")o.className="g-status"+(_?"":" mine"),o.textContent=_?t("watching",{name:i.name(s)}):t("guessLetters"),u.replaceChildren(U("div",{class:"kb"},Dx.map(N=>U("div",{class:"kb-row"},[...N].map(P=>U("button",{class:"key"+(w.includes(P)?M.w.includes(P)?" ok":" bad":""),"data-k":P,disabled:_||w.includes(P),onclick:()=>g(P)},P))))));else{let N=M.st==="won";o.textContent=N?_?t("theyGuessed",{name:i.name(s)}):t("youGuessed"):_?t("theyFailed",{name:i.name(s)}):t("wordWas",{w:M.w}),o.className="g-status"+(N!==_?" mine":""),u.replaceChildren(U("button",{class:"btn big",id:"hg-next",onclick:m},t("newRound")))}}return E(),{el:d,update:E,destroy(){}}}var Ut=i=>document.querySelector(i),rl={lesha:{name:{en:"Tula",ru:"\u0422\u0443\u043B\u0430"},lat:54.1931,lon:37.6173,tz:"Europe/Moscow"},ari:{name:{en:"Seattle",ru:"\u0421\u0438\u044D\u0442\u043B"},lat:47.6062,lon:-122.3321,tz:"America/Los_Angeles"}},Ux={lesha:"#6ad7ff",ari:"#ff7eb6"},Pr=(i,t)=>({name:{en:t.name.en,ru:t.name.ru},lat:t.lat,lon:t.lon,tz:t.tz,color:Ux[i],person:i}),ge={ari:Pr("ari",rl.ari),lesha:Pr("lesha",rl.lesha)},of=i=>({name:{en:i.n.en,ru:i.n.ru},lat:i.lat,lon:i.lon,tz:i.tz});try{let i=JSON.parse(localStorage.getItem("g_cities")||"null")||{};for(let t of["lesha","ari"]){let e=i[t];e&&e.n&&e.tz&&(ge[t]=Pr(t,of(e)))}}catch{}var lf=()=>Object.fromEntries(Object.entries(ge).map(([i,t])=>[i,{lat:t.lat,lon:t.lon,color:t.color}])),mn={lesha:{name:{en:"Lesha",ru:"\u041B\u0435\u0448\u0430"},city:"lesha",get tz(){return ge.lesha.tz}},ari:{name:{en:"Ari",ru:"\u0410\u0440\u0438"},city:"ari",get tz(){return ge.ari.tz}}},Fx=["\u{1F60A}","\u{1F970}","\u{1F634}","\u{1F60E}","\u{1F914}","\u{1F622}","\u{1F624}","\u{1F973}","\u{1F912}","\u{1F917}","\u{1F60B}","\u{1F3A7}","\u2615","\u{1F4AA}","\u{1F327}\uFE0F","\u2728"],R={S:{meta:{},bottles:{},games:{},wx:{}},me:null,other:null,net:null,globe:null,sel:null,units:"c",stack:[],cfg:{},phrase:"",mine:{k:"",today:0,total:0},t:pt,toast:sn,lang:()=>Re(),name:i=>mn[i].name[Re()]};R.t=(i,t)=>Re()==="ru"?pt(i,{s:R.me==="ari"?"\u0430":"",...t&&t.name!==void 0?{g:t.name===mn.ari.name.ru?"\u0430":""}:{},...t}):pt(i,t);window.__A=R;var Es=(i,t=new Date)=>new Intl.DateTimeFormat("en-CA",{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit"}).format(t),Bi=()=>Re()==="ru"?"ru-RU":"en-US",ah=(i,t=new Date)=>new Intl.DateTimeFormat(Bi(),{timeZone:i,hour:"numeric",minute:"2-digit",hour12:Re()!=="ru"}).format(t),Ox=(i,t=new Date)=>new Intl.DateTimeFormat(Bi(),{timeZone:i,weekday:"short",month:"short",day:"numeric"}).format(t);function tf(i,t=new Date){let e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t).map(n=>[n.type,n.value]));return Math.round((Date.UTC(+e.year,+e.month-1,+e.day,+e.hour,+e.minute,+e.second)-Math.floor(t.getTime()/1e3)*1e3)/6e4)}var cl=()=>mn[R.me].city,hl=()=>mn[R.other].city,Bx=i=>R.units==="f"?Math.round(qo(i))+"\xB0F":Math.round(i)+"\xB0C",Ir=i=>Math.round(R.units==="f"?qo(i):i)+"\xB0";R.ago=i=>{let t=Math.max(0,(Date.now()-i)/1e3),e=new Intl.RelativeTimeFormat(Bi(),{numeric:"auto"});return t<90?e.format(0,"second"):t<3600?e.format(-Math.round(t/60),"minute"):t<86400?e.format(-Math.round(t/3600),"hour"):e.format(-Math.round(t/86400),"day")};var Lr=i=>{let t=Es(mn[i].tz),e=R.S.meta.hearts&&R.S.meta.hearts[i]&&R.S.meta.hearts[i][t]||0;return i===R.me&&R.mine.k===t?Math.max(e,R.mine.today):e},ih=i=>{let t=R.S.meta.heartsTotal&&R.S.meta.heartsTotal[i]||0;return i===R.me?Math.max(t,R.mine.total):t},cf=(i,t)=>new Date(Date.parse(i+"T00:00:00Z")+t*864e5).toISOString().slice(0,10);function hf(i){let t=R.S.meta.streak&&R.S.meta.streak[i];if(!t||!t.d)return{n:0,lit:!1,best:0};let e=Es(mn[i].tz),n=t.d===e;return{n:(n||t.d===cf(e,-1))&&t.n||0,lit:n,best:Math.max(t.best||0,t.n||0)}}function kx(){let i=R.me,t=Es(mn[i].tz),e=R.S.meta.streak&&R.S.meta.streak[i];if(e&&e.d===t)return;let n=e&&e.d===cf(t,-1)?(e.n||0)+1:1;R.net.set("meta/streak/"+i,{d:t,n,best:Math.max(n,e&&e.best||0)}),n>1&&setTimeout(()=>sn(R.t("streakNew",{n})),1800)}var zx=i=>{let t=new Intl.PluralRules(Bi()).select(i);return Re()==="ru"?t==="one"?pt("streakDay"):pt("streakDays"):i===1?pt("streakDay"):pt("streakDays")},al=()=>R.presAt>0&&Date.now()-R.presAt<5e4&&R.presVal>0,sh=!1;function Dr(i,t){let e=Ut("#screen"),n=R.stack[R.stack.length-1];n&&n.el.classList.add("under");let s=U("div",{class:"scr"},U("div",{class:"scr-h"},U("button",{class:"back",id:"scr-back",html:Jt.back,onclick:()=>R.pop()}),U("h2",{},i),U("span",{class:"who-dot"+(al()?" on":""),title:R.name(R.other)})),U("div",{class:"scr-b"},t.el));e.append(s),e.classList.add("open"),R.stack.push({el:s,view:t}),R.globe&&(R.globe.paused=!0),history.pushState({g:R.stack.length},"")}function uf(){let i=R.stack.pop();if(!i)return;i.view.destroy&&i.view.destroy(),i.el.classList.add("out"),setTimeout(()=>i.el.remove(),280);let t=R.stack[R.stack.length-1];t?(t.el.classList.remove("under"),t.view.update&&t.view.update()):(Ut("#screen").classList.remove("open"),R.globe&&(R.globe.paused=!1))}R.push=Dr;R.pop=()=>{if(!R.stack.length)return;let i=R.stack.length;sh=!0,history.back(),setTimeout(()=>{R.stack.length===i&&uf(),sh=!1},350)};R.replace=(i,t)=>{let e=R.stack.pop();e&&(e.view.destroy&&e.view.destroy(),e.el.remove());let n=R.stack[R.stack.length-1];n&&n.el.classList.remove("under");let s=Ut("#screen"),r=U("div",{class:"scr"},U("div",{class:"scr-h"},U("button",{class:"back",id:"scr-back",html:Jt.back,onclick:()=>R.pop()}),U("h2",{},i),U("span",{class:"who-dot"+(al()?" on":"")})),U("div",{class:"scr-b"},t.el));n&&n.el.classList.add("under"),s.append(r),R.stack.push({el:r,view:t})};window.addEventListener("popstate",()=>{R.stack.length&&(uf(),sh=!1)});var df=()=>R.stack.forEach(i=>i.view.update&&i.view.update());R.pruneBottles=()=>{let i=Object.entries(R.S.bottles||{}).map(([e,n])=>({id:e,...n})).sort((e,n)=>e.t-n.t);if(i.length<=60)return;let t=i.filter(e=>e.r);for(let e of t.slice(0,i.length-50))R.net.remove("bottles/"+e.id)};var Nr=new Set;R.afterBottleSent=i=>{Nr.add(i),ol(),R.globe.launchBottle(cl(),hl(),()=>{Nr.delete(i),ol()}),sn(pt("bottleSent"))};function ol(){let i=[];for(let[t,e]of Object.entries(R.S.bottles||{}))e.r||Nr.has(t)||i.push({id:t,city:mn[e.f===R.me?R.other:R.me].city});R.globe.setBottles(i)}var ff=()=>Object.values(R.S.bottles||{}).filter(i=>i.f!==R.me&&!i.r).length;function pf(){let i=R.S.games||{},t=R.me;return{ttt:!!(i.ttt&&!i.ttt.w&&i.ttt.turn===t),bs:!!(i.bs&&(i.bs.st==="place"&&!(i.bs.ready&&i.bs.ready[t])||i.bs.st==="play"&&i.bs.turn===t)),hang:!!(i.hang&&(i.hang.st==="pick"&&i.hang.setter===t||i.hang.st==="play"&&i.hang.setter!==t))}}function Hx(){let i=new URLSearchParams(location.hash.replace(/^#/,""));return{k:i.get("k")||"",me:i.get("me")||""}}function Vx(i){return new Promise(t=>{let e=i.me==="lesha"||i.me==="ari"?i.me:"",n=U("input",{id:"setup-word",placeholder:"\u2026",autocomplete:"off",autocapitalize:"none",value:i.k}),s=U("div",{class:"err"}),r=u=>U("button",{class:"who-btn"+(e===u?" on":""),"data-who":u,onclick:()=>{e=u,l()}},mn[u].name[Re()]),a=r("lesha"),o=r("ari"),l=()=>{a.classList.toggle("on",e==="lesha"),o.classList.toggle("on",e==="ari")},c=U("button",{class:"btn big",id:"setup-go",onclick:()=>{if(!e){s.textContent=pt("needWho");return}if(!n.value.trim()){s.textContent=pt("needWord");return}h.remove(),t({me:e,phrase:n.value.trim()})}},pt("openGlobe")),h=U("div",{class:"setup",id:"setup"},U("div",{class:"setup-card glass"},U("div",{class:"logo",html:Jt.heart}),U("h1",{},pt("setupTitle")),U("p",{},pt("setupSub")),U("h3",{},pt("whoAreYou")),U("div",{class:"row"},a,o),U("h3",{},pt("secretWord")),n,U("p",{class:"small"},pt("secretHint")),s,c));document.body.append(h),e&&i.k&&c.click()})}var ul={};function Gx(){let i=Ut("#labels");i.replaceChildren();for(let[t,e]of Object.entries(ge)){let n=U("div",{class:"cl","data-city":t,"data-who":e.person||"",style:{opacity:0}},U("div",{class:"l1"},U("b",{class:"cn"}),U("span",{class:"cm"})),U("div",{class:"l2"},U("span",{class:"ct"}),U("span",{class:"cw"})));i.append(n),ul[t]={chip:n,cn:n.querySelector(".cn"),cm:n.querySelector(".cm"),ct:n.querySelector(".ct"),cw:n.querySelector(".cw")}}}function Oi(){for(let[i,t]of Object.entries(ge)){let e=ul[i];if(!e)continue;e.cn.textContent=t.name[Re()].toUpperCase(),e.ct.textContent=ah(t.tz);let n=R.S.wx[i];if(n&&n.current){let s=n.current;e.cw.innerHTML=Jt[Cr(s.weather_code,s.is_day)]+`<span>${Ir(s.temperature_2m)}</span>`}else e.cw.textContent="";e.w=e.chip.offsetWidth}}function oh(){for(let[i,t]of Object.entries(ge)){let e=ul[i];if(!e||!t.person)continue;let n=R.S.meta.mood&&R.S.meta.mood[t.person];e.cm.textContent=n?n.e:""}}function Wx(){let i=R.globe;if(!i||!i.earth)return;let t=innerWidth,e=34,n=[];for(let[s,r]of Object.entries(ul)){let a=i.cityScreen(s),o=a.x>t*.55,l=o?{dx:-14,dy:11}:{dx:15,dy:11};r.r!==o&&(r.r=o,r.chip.classList.toggle("r",o));let c=r.w||80,h=a.x+l.dx;h=o?Math.min(Math.max(h,c+12),t-12):Math.min(Math.max(h,12),t-c-12);let u=a.y+l.dy,d=o?h-c:h,f={x0:d,x1:d+c,y0:u,y1:u+e},p=n.some(v=>f.x0<v.x1+6&&f.x1>v.x0-6&&f.y0<v.y1+4&&f.y1>v.y0-4);a.visible&&!p&&n.push(f),r.chip.style.opacity=a.visible&&!p&&!R.sel?1:0,r.chip.style.transform=`translate3d(${h.toFixed(1)}px,${u.toFixed(1)}px,0) translateX(${o?"-100%":"0"})`}}async function lh(i,t){let e=await Cd(i,ge[i],{force:t});e&&(R.S.wx[i]=e,Oi(),R.sel===i&&Cs())}var nh=i=>Object.keys(ge).forEach(t=>lh(t,i));function ch(i,t){let e=t?Pr(i,of(t)):Pr(i,rl[i]),n=ge[i];if(Math.abs(n.lat-e.lat)<1e-4&&Math.abs(n.lon-e.lon)<1e-4)return n.name=e.name,!1;R.sel===i&&Ts(),Ed(i),delete R.S.wx[i],ge[i]=e;try{let s=JSON.parse(localStorage.getItem("g_cities")||"null")||{};t?s[i]={n:t.n,lat:t.lat,lon:t.lon,tz:t.tz}:delete s[i],localStorage.setItem("g_cities",JSON.stringify(s))}catch{}return R.globe&&(R.globe.syncCities(lf()),R.globe.setArc("lesha","ari")),Oi(),xi(),lh(i),!0}function Xx(i){let t={n:i.n,lat:i.lat,lon:i.lon,tz:i.tz,t:Date.now()};ch(R.me,t),R.net.set("meta/city/"+R.me,t),Ts(),R.globe.viewBoth(1800)}function qx(){ch(R.me,null),R.net.remove("meta/city/"+R.me),Ts(),R.globe.viewBoth(1800)}function nl(i,t){t=String(t),i.textContent!==t&&(i.textContent=t,R.booted&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")))}function xi(){let i=R.me,t=R.other;Ut("#hp-me-n").textContent=pt("you"),nl(Ut("#hp-me"),Lr(i)),Ut("#hp-ot-n").textContent=R.name(t),nl(Ut("#hp-ot"),Lr(t)),Ut("#hp-dot").classList.toggle("on",al());for(let[u,d]of[[i,"me"],[t,"ot"]]){let f=hf(u);nl(Ut("#hp-"+d+"-s"),f.n),Ut("#fl-"+d).classList.toggle("lit",f.lit&&f.n>0),Ut("#fl-"+d).classList.toggle("off",f.n===0)}let e=R.S.meta.meet,n=Ut("#meet-t");if(!e||!e.d)n.textContent=pt("meetSet");else{let u=Es(mn[i].tz),d=Math.round((Date.parse(e.d+"T00:00:00Z")-Date.parse(u+"T00:00:00Z"))/864e5);n.textContent=d>1?pt("meetDays",{n:d}):d===1?pt("meetOne"):d===0?pt("meetToday"):pt("meetAgo",{n:-d})}let s=R.S.meta.mood&&R.S.meta.mood[i],r=Ut("#mood-e");s?(r.classList.add("emo"),nl(r,s.e)):(r.classList.contains("emo")||!r.querySelector("svg"))&&(r.classList.remove("emo"),r.innerHTML=Jt.smile);let a=pf(),o=Object.values(a).filter(Boolean).length,l=Ut("#b-games .badge");l.textContent=o||"",l.style.display=o?"":"none";let c=Ut("#b-bottles .badge"),h=R.S.bottles?ff():0;c.textContent=h||"",c.style.display=h?"":"none",document.querySelectorAll(".scr-h .who-dot").forEach(u=>u.classList.toggle("on",al()))}function mf(){document.querySelectorAll("[data-ic]").forEach(i=>{i.dataset.done||(i.innerHTML=Jt[i.dataset.ic],i.dataset.done=1)}),document.querySelectorAll("[data-i]").forEach(i=>{i.textContent=pt(i.dataset.i)}),document.title=pt("app")}function Yx(i){return Rd(i,12).map(t=>{let e=+t.time.slice(11,13),n=Re()==="ru"?String(e).padStart(2,"0"):(e%12||12)+(e<12?"a":"p"),s=Xo(t.code,t.day,Re());return`<div class="hr"><small>${n}</small><span>${Jt[Cr(t.code,t.day)]}</span><b>${Ir(t.temp)}</b></div>`}).join("")}function $x(i){return i.daily?i.daily.time.slice(0,4).map((t,e)=>{let n=Xo(i.daily.weather_code[e],1,Re()),s=new Intl.DateTimeFormat(Bi(),{weekday:"short"}).format(new Date(t+"T12:00:00"));return`<div class="dy"><span class="dn">${fe(s)}</span><span>${Jt[Cr(i.daily.weather_code[e],1)]}</span><span class="dd">${fe(n.text)}</span><b>${Ir(i.daily.temperature_2m_max[e])}</b><small>${Ir(i.daily.temperature_2m_min[e])}</small></div>`}).join(""):""}function Zx(i){let t=ge[i],e=R.S.wx[i],n=Re(),s=t.person,r=`<div class="sh-head"><div><h2>${fe(t.name[n])}</h2></div><button class="x" id="sh-x" aria-label="${fe(pt("close"))}">${Jt.close}</button></div>`;if(r+='<div class="sh-clock"><b id="sh-time"></b><span id="sh-date"></span></div>',s){let a=R.S.meta.mood&&R.S.meta.mood[s],o=s===R.me;r+=`<div class="who"><div class="who-l"><span class="av">${a?a.e:Jt.heartO}</span><div><b>${fe(R.name(s))}</b><small>${a?fe(R.ago(a.t)):fe(pt("noMood"))}</small></div></div>`,r+=`<div class="who-r"><div class="hc"><span>${Jt.heartO}</span> <b id="sh-hc">${Lr(s)}</b><small>${fe(pt("today"))}</small></div>`,r+=o?`<button class="mini" id="sh-mood" aria-label="${fe(pt("setMood"))}">${a?a.e:Jt.smile}</button>`:`<button class="mini send" id="sh-heart" aria-label="${fe(pt("sendHeart"))}">${Jt.heart}</button>`,r+="</div></div>"}if(e&&e.current){let a=e.current,o=Xo(a.weather_code,a.is_day,n),l=R.units==="f"?Math.round(a.temperature_2m)+"\xB0C":Math.round(qo(a.temperature_2m))+"\xB0F",c=R.units==="f"?Math.round(Td(a.wind_speed_10m))+" "+pt("mph"):Math.round(a.wind_speed_10m)+" "+pt("ms");r+=`<div class="wx"><div class="wx-main"><span class="wx-ic">${Jt[Cr(a.weather_code,a.is_day)]}</span><div><div class="wx-t">${Bx(a.temperature_2m)} <small>${l}</small></div><div class="wx-d">${fe(o.text)}</div></div><button class="unit" id="sh-unit">${R.units==="f"?"\xB0F \u2192 \xB0C":"\xB0C \u2192 \xB0F"}</button></div>`,r+=`<div class="wx-meta"><span>${fe(pt("feels"))} <b>${Ir(a.apparent_temperature)}</b></span><span>${fe(pt("wind"))} <b>${fe(c)}</b></span><span>${fe(pt("humidity"))} <b>${Math.round(a.relative_humidity_2m)}%</b></span></div>`,r+=`<div class="hours">${Yx(e)}</div><div class="days">${$x(e)}</div>`,e.daily&&e.daily.sunrise&&(r+=`<div class="sun"><span>${fe(pt("sunrise"))}<b>${e.daily.sunrise[0].slice(11,16)}</b></span><span>${fe(pt("sunset"))}<b>${e.daily.sunset[0].slice(11,16)}</b></span></div>`),r+="</div>"}else r+=`<div class="wx empty">${fe(pt("noWeather"))}</div>`;if(s){let a=ge.lesha,o=ge.ari,l=Math.round((tf(a.tz)-tf(o.tz))/60),c=Math.round(bd(a,o));if(c<40)return r+`<div class="dist">${fe(pt("sameCity"))}</div>`;let h=l===0?pt("timeSame",{a:a.name[n],b:o.name[n]}):pt("timeAhead",{a:(l>0?a:o).name[n],b:(l>0?o:a).name[n],h:Math.abs(l)});r+=`<div class="dist">${fe(h)}<br>${fe(pt("distance",{km:c.toLocaleString(Bi()),mi:Math.round(c*.621371).toLocaleString(Bi())}))}</div>`}return r}var ll="";function gf(){if(!R.sel)return;let i=Ut("#sh-time"),t=Ut("#sh-date");i&&(i.textContent=ah(ge[R.sel].tz)),t&&(t.textContent=Ox(ge[R.sel].tz))}function Cs(){if(!R.sel)return;let i=Zx(R.sel);if(i===ll)return;ll=i;let t=Ut("#sheet-body"),e=t.scrollTop;t.innerHTML=i,t.scrollTop=e,gf()}function Jx(i){R.sel=i,ll="",R.globe.setSelected(i),R.globe.focusCity(i),R.globe.setSheetOpen(!0),Ut("#sheet").classList.add("open"),Ut("#app").classList.add("sheet-open"),Ut("#sheet-body").scrollTop=0,Cs(),[...Ut("#sheet-body").children].forEach((t,e)=>{t.classList.add("rise"),t.style.animationDelay=(.06+e*.055).toFixed(3)+"s"}),R.globe.pulseCity(i),lh(i)}function Ts(){R.sel&&(R.sel=null,ll="",R.globe.setSelected(null),R.globe.setSheetOpen(!1),Ut("#sheet").classList.remove("open"),Ut("#app").classList.remove("sheet-open"))}var sl=0,ef=null,nf=0;function Kx(){let i=Ut("#b-heart"),t=i.getBoundingClientRect(),e=Ut("#fx"),n=U("i",{class:"rip"});for(i.append(n),n.addEventListener("animationend",()=>n.remove());e.children.length>26;)e.firstChild.remove();let s=["#ff5c9d","#ff8cc0","#ffb3d4","#ffd27a"],r=3+Math.floor(Math.random()*2);for(let a=0;a<r;a++){let o=12+Math.random()*14,l=U("i",{class:"fxh",html:Jt.heart});l.style.cssText=`left:${t.left+t.width/2+(Math.random()-.5)*22}px;top:${t.top+t.height*.3}px;--s:${o}px;--c:${s[Math.random()*s.length|0]};--dx:${(Math.random()-.5)*120}px;--dy:${-(110+Math.random()*130)}px;--r:${(Math.random()-.5)*70}deg;--t:${(.9+Math.random()*.7).toFixed(2)}s;animation-delay:${(a*.045).toFixed(3)}s`,l.addEventListener("animationend",()=>l.remove()),e.append(l)}}function sf(){let i=R.me,t=Es(mn[i].tz);R.mine.k!==t&&(R.mine={k:t,today:Lr(i),total:ih(i)}),R.mine.today++,R.mine.total++,sl++,R.net.set(`meta/hearts/${i}/${t}`,R.mine.today),R.net.set(`meta/heartsTotal/${i}`,R.mine.total),clearTimeout(ef),ef=setTimeout(rh,500);let e=performance.now();e-nf>160&&(nf=e,R.globe.launchHearts(cl(),hl(),1));let n=Ut("#b-heart");if(n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),Kx(),navigator.vibrate&&navigator.vibrate(12),xi(),oh(),R.sel){let s=Ut("#sh-hc");s&&ge[R.sel].person===i&&(s.textContent=Lr(i))}}function rh(){if(!sl)return;let i=sl;sl=0,R.net.set(`meta/lastHeart/${R.me}`,{n:i,t:Date.now()})}function jx(i){R.globe.launchHearts(hl(),cl(),Math.min(i,6)),sn(pt("heartsIn",{name:R.name(R.other),n:i})),navigator.vibrate&&navigator.vibrate([20,40,20])}var il=!1;function Qx(){let i=R.S.meta,t=R.me,e=R.other,n=Es(mn[t].tz),s=i.hearts&&i.hearts[t]&&i.hearts[t][n]||0,r=i.heartsTotal&&i.heartsTotal[t]||0;R.mine.k!==n?R.mine={k:n,today:s,total:Math.max(r,R.mine.total)}:(R.mine.today=Math.max(R.mine.today,s),R.mine.total=Math.max(R.mine.total,r));let a=i.lastHeart&&i.lastHeart[e];R.lastSeenHeart==null?R.lastSeenHeart=a?a.t:0:a&&a.t>R.lastSeenHeart&&(R.lastSeenHeart=a.t,jx(a.n||1));let o=i.heartsTotal&&i.heartsTotal[e]||0,l="g_seen_"+e;if(!il){let u=+localStorage.getItem(l)||0;u&&o>u&&sn(pt("whileAway",{n:o-u,name:R.name(e)}),4200)}o&&localStorage.setItem(l,o);let c=i.presence&&i.presence[e]||0;il?c!==R.presVal&&(R.presVal=c,R.presAt=Date.now()):(R.presVal=c,R.presAt=0);let h=!il;il=!0;for(let u of["lesha","ari"]){let d=i.city&&i.city[u]&&i.city[u].n&&i.city[u].tz?i.city[u]:null;ch(u,d)&&!h&&u!==R.me&&sn(pt("cityMoved",{name:R.name(u),city:ge[u].name[Re()]}),4200)}h&&kx(),xi(),oh(),R.sel&&Cs()}var rf=!1;function tv(){let i=R.S.bottles||{};if(!rf)R.seenBottles=new Set(Object.keys(i)),rf=!0;else for(let[t,e]of Object.entries(i))R.seenBottles.has(t)||(R.seenBottles.add(t),e.f!==R.me&&(Nr.add(t),R.globe.launchBottle(hl(),cl(),()=>{Nr.delete(t),ol()}),sn(pt("bottleArrived",{name:R.name(R.other)}),4e3),navigator.vibrate&&navigator.vibrate([15,30,15])));ol(),xi(),df()}function af(){let i=R.S.meta.mood&&R.S.meta.mood[R.me]&&R.S.meta.mood[R.me].e,t=gi(U("div",{},U("h3",{},pt("moodTitle")),U("div",{class:"mood-grid"},Fx.map(e=>U("button",{class:"mood"+(e===i?" on":""),"data-e":e,onclick:()=>{R.net.set("meta/mood/"+R.me,{e,t:Date.now()}),t.close()}},e))),i?U("button",{class:"btn ghost",onclick:()=>{R.net.remove("meta/mood/"+R.me),t.close()}},pt("moodClear")):null))}function ev(){let i=R.S.meta.meet&&R.S.meta.meet.d,t=U("input",{type:"date",id:"meet-input",value:i||""}),e=gi(U("div",{},U("h3",{},pt("meetTitle")),t,U("div",{class:"row"},i?U("button",{class:"btn ghost",onclick:()=>{R.net.remove("meta/meet"),e.close()}},pt("meetClear")):null,U("button",{class:"btn",id:"meet-save",onclick:()=>{t.value&&R.net.set("meta/meet",{d:t.value,t:Date.now()}),e.close()}},pt("meetSave")))))}function nv(){let i=t=>{let e=hf(t);return U("div",{class:"sk-row"+(e.lit?" lit":"")},U("div",{class:"sk-fire",html:Jt.flame}),U("div",{class:"sk-info"},U("b",{},R.name(t)+(t===R.me?" \xB7 "+pt("you"):"")),U("small",{},e.n?R.t("streakNow",{n:e.n,d:zx(e.n)}):"\u2014"),U("small",{},e.lit?R.t("streakLit",{name:R.name(t)}):R.t("streakWait",{name:R.name(t)}))),U("div",{class:"sk-n"},e.n,e.best>1?U("small",{},R.t("streakBest",{n:e.best})):null))};gi(U("div",{class:"streak-modal"},U("h3",{},pt("streakTitle")),i(R.me),i(R.other),U("div",{class:"sk-tot"},U("span",{html:Jt.heartO},pt("heartsTotal")),U("b",{},ih("lesha")+ih("ari"))),U("p",{class:"small"},pt("streakHint"))))}function iv(){let i=pt("status_"+(R.net.status||"connecting"))||"",t=()=>`${location.origin}${location.pathname}#k=${encodeURIComponent(R.phrase)}&me=${R.other}`,e=(r,a)=>U("button",{class:"seg"+(Re()===r?" on":""),onclick:()=>{sv(r),s.close()}},a),n=(r,a)=>U("button",{class:"seg"+(R.units===r?" on":""),onclick:()=>{R.units=r,localStorage.setItem("g_units",r),Oi(),Cs(),s.close()}},a),s=gi(U("div",{class:"settings"},U("h3",{},pt("settings")),U("label",{},pt("language")),U("div",{class:"row"},e("en","English"),e("ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439")),U("label",{},pt("tempUnits")),U("div",{class:"row"},n("c","\xB0C"),n("f","\xB0F")),U("label",{},pt("myCity")),U("button",{class:"btn ghost city-btn",id:"set-city",onclick:()=>{s.close();let r=rl[R.me],a=Math.abs(ge[R.me].lat-r.lat)>1e-4||Math.abs(ge[R.me].lon-r.lon)>1e-4;setTimeout(()=>Hd(R,{fmtTime:ah,canReset:a,resetName:r.name[Re()],onPick:Xx,onReset:qx}),220)}},U("span",{},ge[R.me].name[Re()]),U("i",{html:Jt.chevron})),U("button",{class:"btn ghost",id:"set-share",onclick:async()=>{try{await navigator.clipboard.writeText(t()),sn(pt("linkCopied"))}catch{window.prompt("",t())}}},pt("shareLink",{name:R.name(R.other)})),U("label",{},pt("serverStatus")),U("p",{class:"small",id:"set-status"},i),U("button",{class:"btn ghost danger",id:"set-reset",onclick:async()=>{await ws(pt("switchConfirm"),pt("yes"),pt("no"))&&(["g_me","g_phrase"].forEach(r=>localStorage.removeItem(r)),location.hash="",location.reload())}},pt("switchPerson")),U("p",{class:"small credits"},pt("credits"))))}function sv(i){$o(i),localStorage.setItem("g_lang",i),mf(),Oi(),xi(),oh(),Cs()}function rv(){let i=[["canvas","pen","g_canvas","g_canvas_d",()=>jo(R)],["theme","bulb","g_theme","g_theme_d",()=>Yd(R)],["bottles","bottle","g_bottles","g_bottles_d",()=>Zc(R)],["ttt","hash","g_ttt","g_ttt_d",()=>Zd(R)],["bs","anchor","g_bs","g_bs_d",()=>jd(R)],["hang","petal","g_hang","g_hang_d",()=>Qd(R)]],t={},e=i.map(([r,a,o,l,c])=>{let h=U("span",{class:"gs"});return t[r]=h,U("button",{class:"g-card",id:"gc-"+r,onclick:()=>Dr(pt(o),c())},U("span",{class:"gi",html:Jt[a]}),U("div",{class:"gt"},U("b",{},pt(o)),U("small",{},pt(l))),h)}),n=U("div",{class:"game hub"},e);function s(){let r=pf(),a=ff();for(let o of["ttt","bs","hang"])t[o].textContent=r[o]?pt("yourTurnBadge"):"",t[o].classList.toggle("on",r[o]);t.bottles.textContent=a?a+" "+pt("newBadge"):"",t.bottles.classList.toggle("on",!!a)}s(),Dr(pt("gamesTitle"),{el:n,update:s,destroy(){}})}async function av(){let i=Ut("#loader");R.cfg=await fetch("config.json?_="+Date.now()).then(u=>u.json()).catch(()=>({}));let t=Hx(),e=localStorage.getItem("g_me"),n=localStorage.getItem("g_phrase"),s=localStorage.getItem("g_lang");if($o(s||"en"),!e||!n){i.classList.add("hide");let u=await Vx(t);e=u.me,n=u.phrase,localStorage.setItem("g_me",e),localStorage.setItem("g_phrase",n),s||($o(e==="lesha"?"ru":"en"),localStorage.setItem("g_lang",Re())),i.classList.remove("hide")}(t.k||t.me)&&history.replaceState(null,"",location.pathname+location.search),R.me=e,R.other=e==="lesha"?"ari":"lesha",R.phrase=n,R.units=localStorage.getItem("g_units")||(e==="ari"?"f":"c"),mf();let r=await wd(n);R.net=new Wo(R.cfg.db,r),R.net.onStatus(u=>{let d=Ut("#set-status");d&&(d.textContent=pt("status_"+u)),Ut("#app").dataset.net=u});let a=Ut("#gl"),o=new Go(a,{onPick:u=>{if(!u)return Ts();u.type==="city"?Jx(u.id):u.type==="bottle"&&(R.S.bottles||{})[u.id]&&Dr(pt("bottle"),Jc(R,u.id))}});R.globe=o,window.__g=o;try{await o.init("assets/",u=>{Ut("#loader .bar i").style.width=Math.round(u*100)+"%"})}catch(u){console.error(u),Ut("#loader p").textContent=pt("noWebgl");return}o.setCities(lf()),o.setArc("lesha","ari");let l=location.search.includes("nointro");l?o.viewBoth(0):o.intro(),Gx(),Oi(),xi(),o.onFrame=Wx,o.start(),i.classList.add("hide"),Ut("#app").classList.add("live"),setTimeout(()=>{Ut("#labels").classList.add("show"),R.booted=!0},l?0:2100),R.net.listen("meta",u=>{R.S.meta=u||{},Qx()}),R.net.listen("bottles",u=>{R.S.bottles=u||{},tv()}),R.net.listen("games",u=>{R.S.games=u||{},xi(),df()}),Ut("#b-heart").addEventListener("click",sf),Ut("#b-games").addEventListener("click",rv),Ut("#b-bottles").addEventListener("click",()=>Dr(pt("bottles"),Zc(R))),Ut("#b-mood").addEventListener("click",af),Ut("#b-both").addEventListener("click",()=>{Ts(),o.viewBoth(1400)}),Ut("#btn-set").addEventListener("click",iv),Ut("#meet").addEventListener("click",ev),Ut("#hearts-pill").addEventListener("click",nv),Ut("#sheet").addEventListener("click",u=>{u.target.closest("#sh-x")?Ts():u.target.closest("#sh-heart")?sf():u.target.closest("#sh-mood")?af():u.target.closest("#sh-unit")&&(R.units=R.units==="f"?"c":"f",localStorage.setItem("g_units",R.units),Oi(),Cs())}),nh(),setInterval(()=>nh(),900*1e3),setInterval(()=>{Oi(),gf(),xi()},1e3);let c=()=>{document.visibilityState==="visible"&&R.net.set("meta/presence/"+R.me,Date.now())};c(),setInterval(c,2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?(rh(),R.net.set("meta/presence/"+R.me,0)):(c(),nh(),o._updateSun())}),window.addEventListener("pagehide",()=>{rh(),R.net.set("meta/presence/"+R.me,0)}),"serviceWorker"in navigator&&!location.search.includes("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});let h=()=>{(window.scrollY||window.scrollX)&&window.scrollTo(0,0);let u=document.scrollingElement;u&&u.scrollTop&&(u.scrollTop=0),Ut("#app").scrollTop=0};document.addEventListener("focusout",()=>setTimeout(h,80)),window.addEventListener("scroll",h,{passive:!0}),window.__ready=!0}av();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

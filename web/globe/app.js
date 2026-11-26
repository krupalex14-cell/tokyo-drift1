(()=>{var Wu=0,bc=1,Xu=2;var Pr=1,qu=2,Es=3,gi=0,Xe=1,un=2,ki=0,jn=1,sn=2,Sc=3,wc=4,Yu=5;var zi=100,$u=101,Zu=102,Ju=103,Ku=104,ju=200,Qu=201,td=202,ed=203,Tc=204,Ac=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,La=0,Da=1,Na=2,ps=3,Ua=4,Fa=5,Oa=6,Ba=7,Ec=0,ud=1,dd=2,Un=0,Cc=1,Rc=2,Pc=3,Ic=4,Lc=5,Dc=6,Nc=7;var Uc=300,Hi=301,Cs=302,_o=303,xo=304,ms=1e3,gn=1001,ka=1002,ke=1003,fd=1004;var Ir=1005;var Ge=1006,vo=1007;var Tn=1008;var rn=1009,Fc=1010,Oc=1011,Rs=1012,yo=1013,An=1014,En=1015,Cn=1016,Mo=1017,bo=1018,Gi=1020,Bc=35902,kc=35899,zc=1021,Hc=1022,Rn=1023,$n=1026,Qn=1027,Gc=1028,So=1029,_i=1030,wo=1031;var To=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,Ao=35840,Eo=35841,Co=35842,Ro=35843,Po=36196,Io=37492,Lo=37496,Do=37488,No=37489,Fr=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,ko=37811,zo=37812,Ho=37813,Go=37814,Vo=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,$o=37820,Zo=37821,Jo=36492,Ko=36494,jo=36495,Qo=36283,tl=36284,Or=36285,el=36286;var ir=2300,za=2301,Ra=2302,pc=2303,mc=2400,gc=2401,_c=2402;var pd=3200;var Vc=0,md=1,dn="",tn="srgb",sr="srgb-linear",rr="linear",ue="srgb";var Pa=7680;var gd=519,_d=512,xd=513,vd=514,Wc=515,yd=516,Md=517,Xc=518,qc=519,Yc=35044;var $c="300 es",_n=2e3,gs=2001;function Vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){let i=_s("canvas");return i.style.display="block",i}var uu={},xs=null;function ar(...i){let t="THREE."+i.shift();xs?xs("log",t,...i):console.log(t,...i)}function Sd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Sd(i);let t="THREE."+i.shift();if(xs)xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Sd(i);let t="THREE."+i.shift();if(xs)xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function js(...i){let t=i.join(" ");t in uu||(uu[t]=!0,Wt(...i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Td={[La]:La,[Na]:Oa,[Ua]:Ua,[ps]:Fa,[Da]:Da,[Oa]:Na,[Ba]:Ba,[Fa]:ps},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,Qs=Math.PI/180,vs=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function Xp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qp(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Yp(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function $p(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jp(i,t){return i+Math.random()*(t-i)}function Qp(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(du=i);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function em(i){return i*Qs}function nm(i){return i*vs}function im(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*_,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*_,o*l);break;case"ZYZ":i.set(c*_,c*f,o*h,o*l);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kc(i,t){if(t.constructor===Float32Array)return i;let e=nl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function jc(i,t){if(t.constructor===Float32Array)return i;let e=nl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Le={DEG2RAD:Qs,RAD2DEG:vs,generateUUID:xi,clamp:ne,euclideanModulo:Zc,mapLinear:Xp,inverseLerp:qp,lerp:tr,damp:Yp,pingpong:$p,smoothstep:Zp,smootherstep:Jp,randInt:Kp,randFloat:jp,randFloatSpread:Qp,seededRandom:tm,degToRad:em,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:Jc,setQuaternionFromProperEuler:rm,normalize:jc,denormalize:Kc},sh=class sh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;var Bt=sh,Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==_){let p=c*d+l*f+h*_+u*v;p<0&&(d=-d,f=-f,_=-_,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,c=c*m+d*o,l=l*m+f*o,h=h*m+_*o,u=u*m+v*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+_*o,u=u*m+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-o*f,t[e+2]=l*_+h*f+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rh=class rh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rh.prototype.isVector3=!0;var O=rh,Wl=new O,fu=new Dn,ah=class ah{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],v=s[0],p=s[3],m=s[6],M=s[1],T=s[4],y=s[7],A=s[2],S=s[5],x=s[8];return r[0]=a*v+o*M+c*A,r[3]=a*p+o*T+c*S,r[6]=a*m+o*y+c*x,r[1]=l*v+h*M+u*A,r[4]=l*p+h*T+u*S,r[7]=l*m+h*y+u*x,r[2]=d*v+f*M+_*A,r[5]=d*p+f*T+_*S,r[8]=d*m+f*y+_*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,_=e*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;var Yt=ah,Xl=new Yt,pu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===dn?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var ae=am();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=_s("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var lm=0,Yl=new O,ze=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Ge,a=Tn,o=Rn,c=rn,l=i.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=xi(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Uc;ze.DEFAULT_ANISOTROPY=1;var oh=class oh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,y=(f+1)/2,A=(m+1)/2,S=(h+d)/4,x=(u+v)/4,g=(_+p)/4;return T>y&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=S/n,r=x/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=g/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=g/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;var ve=oh,Ga=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ze({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,_,v,p)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,_,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,_=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,_=l*h,v=l*u;e[0]=d+v*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,_=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,_=o*h,v=o*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*c,f=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ri.crossVectors(n,on),ri.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ri.crossVectors(n,on)),ri.normalize(),sa.crossVectors(on,ri),s[0]=ri.x,s[4]=sa.x,s[8]=on.x,s[1]=ri.y,s[5]=sa.y,s[9]=on.y,s[2]=ri.z,s[6]=sa.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],v=n[6],p=n[10],m=n[14],M=n[3],T=n[7],y=n[11],A=n[15],S=s[0],x=s[4],g=s[8],L=s[12],I=s[1],U=s[5],H=s[9],Z=s[13],N=s[2],q=s[6],J=s[10],X=s[14],ct=s[3],K=s[7],rt=s[11],ot=s[15];return r[0]=a*S+o*I+c*N+l*ct,r[4]=a*x+o*U+c*q+l*K,r[8]=a*g+o*H+c*J+l*rt,r[12]=a*L+o*Z+c*X+l*ot,r[1]=h*S+u*I+d*N+f*ct,r[5]=h*x+u*U+d*q+f*K,r[9]=h*g+u*H+d*J+f*rt,r[13]=h*L+u*Z+d*X+f*ot,r[2]=_*S+v*I+p*N+m*ct,r[6]=_*x+v*U+p*q+m*K,r[10]=_*g+v*H+p*J+m*rt,r[14]=_*L+v*Z+p*X+m*ot,r[3]=M*S+T*I+y*N+A*ct,r[7]=M*x+T*U+y*q+A*K,r[11]=M*g+T*H+y*J+A*rt,r[15]=M*L+T*Z+y*X+A*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],v=t[7],p=t[11],m=t[15],M=c*f-l*d,T=o*f-l*u,y=o*d-c*u,A=a*f-l*h,S=a*d-c*h,x=a*u-o*h;return e*(v*M-p*T+m*y)-n*(_*M-p*A+m*S)+s*(_*T-v*A+m*x)-r*(_*y-v*S+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],v=t[13],p=t[14],m=t[15],M=e*o-n*a,T=e*c-s*a,y=e*l-r*a,A=n*c-s*o,S=n*l-r*o,x=s*l-r*c,g=h*v-u*_,L=h*p-d*_,I=h*m-f*_,U=u*p-d*v,H=u*m-f*v,Z=d*m-f*p,N=M*Z-T*H+y*U+A*I-S*L+x*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/N;return t[0]=(o*Z-c*H+l*U)*q,t[1]=(s*H-n*Z-r*U)*q,t[2]=(v*x-p*S+m*A)*q,t[3]=(d*S-u*x-f*A)*q,t[4]=(c*I-a*Z-l*L)*q,t[5]=(e*Z-s*I+r*L)*q,t[6]=(p*y-_*x-m*T)*q,t[7]=(h*x-d*y+f*T)*q,t[8]=(a*H-o*I+l*g)*q,t[9]=(n*I-e*H-r*g)*q,t[10]=(_*S-v*y+m*M)*q,t[11]=(u*y-h*S-f*M)*q,t[12]=(o*L-a*U-c*g)*q,t[13]=(e*U-n*L+s*g)*q,t[14]=(v*T-_*A-p*M)*q,t[15]=(h*A-u*T+d*M)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,_=r*u,v=a*h,p=a*u,m=o*u,M=c*l,T=c*h,y=c*u,A=n.x,S=n.y,x=n.z;return s[0]=(1-(v+m))*A,s[1]=(f+y)*A,s[2]=(_-T)*A,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+m))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(_+T)*x,s[9]=(p-M)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),c=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let l=1/a,h=1/o,u=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=_n,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),_,v;if(c)_=r/(a-r),v=a*r/(a-r);else if(o===_n)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===gs)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),_,v;if(c)_=1/(a-r),v=a/(a-r);else if(o===_n)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===gs)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var pe=go,Ji=new O,Mn=new pe,cm=new O(0,0,0),hm=new O(1,1,1),ri=new O,sa=new O,on=new O,gu=new pe,_u=new Dn,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,xu=new O,Ki=new Dn,zn=new pe,ra=new O,Xs=new O,dm=new O,fm=new Dn,vu=new O(1,0,0),yu=new O(0,1,0),Mu=new O(0,0,1),bu={type:"added"},pm={type:"removed"},ji={type:"childadded",child:null},$l={type:"childremoved",child:null},Ve=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new hi,n=new Dn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Yt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ra.copy(t):ra.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Xs,ra,this.up):zn.lookAt(ra,Xs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(zn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),ji.child=t,this.dispatchEvent(ji),ji.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new O(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Zc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zl(a,r,t+1/3),this.g=Zl(a,r,t),this.b=Zl(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ae.workingToColorSpace(Je.copy(this),t),Math.round(ne(Je.r*255,0,255))*65536+Math.round(ne(Je.g*255,0,255))*256+Math.round(ne(Je.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=tn){ae.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(aa);let n=tr(ai.h,aa.h,e),s=tr(ai.s,aa.s,e),r=tr(ai.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Jt;Jt.NAMES=Ad;var cr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new O,Hn=new O,Jl=new O,Gn=new O,Qi=new O,ts=new O,Su=new O,Kl=new O,jl=new O,Ql=new O,tc=new ve,ec=new ve,nc=new ve,Xn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Hn.subVectors(n,e),Jl.subVectors(t,e);let a=bn.dot(bn),o=bn.dot(Hn),c=bn.dot(Jl),l=Hn.dot(Hn),h=Hn.dot(Jl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Hn.subVectors(t,e),bn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ts.subVectors(r,n),Kl.subVectors(t,n);let c=Qi.dot(Kl),l=ts.dot(Kl);if(c<=0&&l<=0)return e.copy(n);jl.subVectors(t,s);let h=Qi.dot(jl),u=ts.dot(jl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Qi,a);Ql.subVectors(t,r);let f=Qi.dot(Ql),_=ts.dot(Ql);if(_>=0&&f<=_)return e.copy(r);let v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ts,o);let p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return Su.subVectors(r,s),o=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(Su,o);let m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Qi,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ui=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),la.subVectors(this.max,qs),es.subVectors(t.a,qs),ns.subVectors(t.b,qs),is.subVectors(t.c,qs),oi.subVectors(ns,es),li.subVectors(is,ns),Ii.subVectors(es,is);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ii.z,Ii.y,oi.z,0,-oi.x,li.z,0,-li.x,Ii.z,0,-Ii.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ii.y,Ii.x,0];return!ic(e,es,ns,is,la)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,es,ns,is,la))?!1:(ca.crossVectors(oi,li),e=[ca.x,ca.y,ca.z],ic(e,es,ns,is,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new O,new O,new O,new O,new O,new O,new O,new O],Sn=new O,oa=new ui,es=new O,ns=new O,is=new O,oi=new O,li=new O,Ii=new O,qs=new O,la=new O,ca=new O,Li=new O;function ic(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ee=new O,ha=new Bt,gm=0,Ce=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=t!==void 0?nl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Kc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):jc(t,this.array)}};var hr=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=new ui,Ys=new O,sc=new O,Ui=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(sc)),this.expandByPoint(Ys.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xm=0,mn=new pe,rc=new Ve,ss=new O,ln=new ui,$s=new ui,Be=new O,We=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ln.min,$s.min),ln.expandByPoint(Be),Be.addVectors(ln.max,$s.max),ln.expandByPoint(Be)):(ln.expandByPoint($s.min),ln.expandByPoint($s.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(t,l),Be.add(ss)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new O,c[L]=new O;let h=new O,u=new O,d=new O,f=new Bt,_=new Bt,v=new Bt,p=new O,m=new O;function M(L,I,U){l[L]=l[I]=l[U]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,L),_.fromBufferAttribute(r,I),v.fromBufferAttribute(r,U),u.sub(h),d.sub(h),_.sub(f),v.sub(f);let H=1/(_.x*v.y-v.x*_.y);isFinite(H)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-_.y).multiplyScalar(H),m.copy(d).multiplyScalar(_.x).addScaledVector(u,-v.x).multiplyScalar(H),o[L].add(p),o[I].add(p),o[U].add(p),c[L].add(m),c[I].add(m),c[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,I=T.length;L<I;++L){let U=T[L],H=U.start,Z=U.count;for(let N=H,q=H+Z;N<q;N+=3)M(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new O,A=new O,S=new O,x=new O;function g(L){S.fromBufferAttribute(s,L),x.copy(S);let I=o[L];y.copy(I),y.sub(S.multiplyScalar(S.dot(I))).normalize(),A.crossVectors(x,I);let H=A.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,H)}for(let L=0,I=n.count;L<I;++L)l[L]&&g(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new Ce(d,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=wu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function wu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Qe=new O,dr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?nl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Kc(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):jc(t,this.data.array)}},ac=new O,vm=new O,ym=new Yt,wn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ac.subVectors(n,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mm=0,Zn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=jn,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nn=class extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rs,Zs=new O,as=new O,os=new O,ls=new Bt,Js=new Bt,Ed=new pe,ua=new O,Ks=new O,da=new O,Tu=new Bt,oc=new Bt,Au=new Bt,Jn=class extends Ve{constructor(t=new Nn){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new dr(n,3,0,!1)),rs.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Ed.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ua.set(-.5,-.5,0),os,a,as,s,r),fa(Ks.set(.5,-.5,0),os,a,as,s,r),fa(da.set(.5,.5,0),os,a,as,s,r),Tu.set(0,0),oc.set(1,0),Au.set(1,1);let o=t.ray.intersectTriangle(ua,Ks,da,!1,Zs);if(o===null&&(fa(Ks.set(-.5,.5,0),os,a,as,s,r),oc.set(0,1),o=t.ray.intersectTriangle(ua,da,Ks,!1,Zs),o===null))return;let c=t.ray.origin.distanceTo(Zs);c<t.near||c>t.far||e.push({distance:c,point:Zs.clone(),uv:Xn.getInterpolation(Zs,ua,Ks,da,Tu,oc,Au,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function fa(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ls.x-s*ls.y,Js.y=s*ls.x+r*ls.y):Js.copy(ls),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Ed)}var Wn=new O,lc=new O,pa=new O,ma=new O,fr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lc).addScaledVector(pa,d),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,_=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,T=n.z-a.z,y=Math.abs(c),A=Math.abs(l),S=Math.abs(h),x,g,L,I,U,H,Z,N,q,J,X,ct;if(y>=A&&y>=S?(L=c,H=u,q=_,ct=m,c>=0?(x=l,g=h,I=d,U=f,Z=v,N=p,J=M,X=T):(x=h,g=l,I=f,U=d,Z=p,N=v,J=T,X=M)):A>=S?(L=l,H=d,q=v,ct=M,l>=0?(x=h,g=c,I=f,U=u,Z=p,N=_,J=T,X=m):(x=c,g=h,I=u,U=f,Z=_,N=p,J=m,X=T)):(L=h,H=f,q=p,ct=T,h>=0?(x=c,g=l,I=u,U=d,Z=_,N=v,J=m,X=M):(x=l,g=c,I=d,U=u,Z=v,N=_,J=M,X=m)),L===0)return null;let K=x/L,rt=g/L,ot=1/L,Pt=I-K*H,Xt=U-rt*H,tt=Z-K*q,bt=N-rt*q,Ct=J-K*ct,Nt=X-rt*ct,ht=Ct*bt-Nt*tt,P=Pt*Nt-Xt*Ct,k=tt*Xt-bt*Pt;if(s){if(ht<0||P<0||k<0)return null}else if((ht<0||P<0||k<0)&&(ht>0||P>0||k>0))return null;let z=ht+P+k;if(z===0)return null;let $=ot*(ht*H+P*q+k*ct);return(z>0?$<0:$>0)?null:this.at($/z,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xa=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eu=new pe,Di=new fr,ga=new Ui,Cu=new O,_a=new O,xa=new O,va=new O,cc=new O,ya=new O,Ru=new O,Ma=new O,Pe=class extends Ve{constructor(t=new We,e=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,t),a?ya.addScaledVector(cc,h):ya.addScaledVector(cc.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(ga.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ga,Cu)===null||Di.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Eu.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let p=d[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=T;y<A;y+=3){let S=o.getX(y),x=o.getX(y+1),g=o.getX(y+2);s=ba(this,m,t,n,l,h,u,S,x,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let M=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=ba(this,a,t,n,l,h,u,M,T,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){let p=d[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,A=T;y<A;y+=3){let S=y,x=y+1,g=y+2;s=ba(this,m,t,n,l,h,u,S,x,g),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){let M=p,T=p+1,y=p+2;s=ba(this,a,t,n,l,h,u,M,T,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bm(i,t,e,n,s,r,a,o){let c;if(t.side===Xe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===gi,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,_a),i.getVertexPosition(c,xa),i.getVertexPosition(l,va);let h=bm(i,t,e,n,_a,xa,va,Ru);if(h){let u=new O;Xn.getBarycoord(Ru,_a,xa,va,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,o,c,l,u,new Bt)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,o,c,l,u,new Bt)),a&&(h.normal=Xn.getInterpolatedAttribute(a,o,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};Xn.getNormal(_a,xa,va,d.normal),h.face=d,h.barycoord=u}return h}var qa=class extends ze{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ke,h=ke,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new Ui,Sm=new Bt(.5,.5),Sa=new O,di=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],v=r[9],p=r[10],m=r[11],M=r[12],T=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,f-h,m-_,A-M).normalize(),s[1].setComponents(l+a,f+h,m+_,A+M).normalize(),s[2].setComponents(l+o,f+u,m+v,A+T).normalize(),s[3].setComponents(l-o,f-u,m-v,A-T).normalize(),n)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,f-d,m-p,A-y).normalize();else if(s[4].setComponents(l-c,f-d,m-p,A-y).normalize(),e===_n)s[5].setComponents(l+c,f+d,m+p,A+y).normalize();else if(e===gs)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Sm.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pu=new pe,Ya=class i{constructor(){this.coordinateSystem=_n,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Pu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new di),n[s].setFromProjectionMatrix(Pu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new di),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var bs=class extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new pe,xc=new fr,wa=new Ui,Ta=new O,pr=class extends Ve{constructor(t=new We,e=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Iu.copy(s).invert(),xc.copy(t.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=d,v=f;_<v;_++){let p=l.getX(_);Ta.fromBufferAttribute(u,p),Lu(Ta,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,v=f;_<v;_++)Ta.fromBufferAttribute(u,_),Lu(Ta,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lu(i,t,e,n,s,r,a){let o=xc.distanceSqToPoint(i);if(o<e){let c=new O;xc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var mr=class extends ze{constructor(t=[],e=Hi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gr=class extends ze{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends ze{constructor(t,e,n=An,s,r,a,o=ke,c=ke,l,h=$n,u=1){if(h!==$n&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_r=class extends Kn{constructor(t,e=An,n=Hi,s,r,a=ke,o=ke,c,l=$n){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ss=class i extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function _(v,p,m,M,T,y,A,S,x,g,L){let I=y/x,U=A/g,H=y/2,Z=A/2,N=S/2,q=x+1,J=g+1,X=0,ct=0,K=new O;for(let rt=0;rt<J;rt++){let ot=rt*U-Z;for(let Pt=0;Pt<q;Pt++){let Xt=Pt*I-H;K[v]=Xt*M,K[p]=ot*T,K[m]=N,l.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=S>0?1:-1,h.push(K.x,K.y,K.z),u.push(Pt/x),u.push(1-rt/g),X+=1}}for(let rt=0;rt<g;rt++)for(let ot=0;ot<x;ot++){let Pt=d+ot+q*rt,Xt=d+ot+q*(rt+1),tt=d+(ot+1)+q*(rt+1),bt=d+(ot+1)+q*rt;c.push(Pt,Xt,bt),c.push(Xt,tt,bt),ct+=6}o.addGroup(f,ct,L),f+=ct,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vr=class i extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,v=[],p=n/2,m=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function M(){let y=new O,A=new O,S=0,x=(e-t)/n;for(let g=0;g<=r;g++){let L=[],I=g/r,U=I*(e-t)+t;for(let H=0;H<=s;H++){let Z=H/s,N=Z*c+o,q=Math.sin(N),J=Math.cos(N);A.x=U*q,A.y=-I*n+p,A.z=U*J,u.push(A.x,A.y,A.z),y.set(q,x,J).normalize(),d.push(y.x,y.y,y.z),f.push(Z,1-I),L.push(_++)}v.push(L)}for(let g=0;g<s;g++)for(let L=0;L<r;L++){let I=v[L][g],U=v[L+1][g],H=v[L+1][g+1],Z=v[L][g+1];(t>0||L!==0)&&(h.push(I,U,Z),S+=3),(e>0||L!==r-1)&&(h.push(U,H,Z),S+=3)}l.addGroup(m,S,0),m+=S}function T(y){let A=_,S=new Bt,x=new O,g=0,L=y===!0?t:e,I=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),_++;let U=_;for(let H=0;H<=s;H++){let N=H/s*c+o,q=Math.cos(N),J=Math.sin(N);x.x=L*J,x.y=p*I,x.z=L*q,u.push(x.x,x.y,x.z),d.push(0,I,0),S.x=q*.5+.5,S.y=J*.5*I+.5,f.push(S.x,S.y),_++}for(let H=0;H<s;H++){let Z=A+H,N=U+H;y===!0?h.push(N,N+1,Z):h.push(N+1,N,Z),g+=3}l.addGroup(m,g,y===!0?1:2),m+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Bt:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,c=new pe;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},yr=class extends xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends yr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Du=new O,Nu=new O,hc=new Qc,uc=new Qc,dc=new Qc,Fi=class extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Nu.subVectors(s[0],s[1]).add(s[0]),l=Nu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Du.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Du),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),hc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,v,p),uc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,v,p),dc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,v,p)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),dc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),dc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function wm(i,t){let e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Am(i,t){return i*i*t}function er(i,t,e,n){return wm(i,t)+Tm(i,e)+Am(i,n)}function Em(i,t){let e=1-i;return e*e*e*t}function Cm(i,t){let e=1-i;return 3*e*e*i*t}function Rm(i,t){return 3*(1-i)*i*i*t}function Pm(i,t){return i*i*i*t}function nr(i,t,e,n,s){return Em(i,t)+Cm(i,e)+Rm(i,n)+Pm(i,s)}var Za=class extends xn{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends xn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y),nr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends xn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends xn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends xn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends xn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y),er(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Uu(o,c.x,l.x,h.x,u.x),Uu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},Im=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Fi,CubicBezierCurve:Za,CubicBezierCurve3:Ja,EllipseCurve:yr,LineCurve:Ka,LineCurve3:ja,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:Mr,SplineCurve:to});var Oi=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],_=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let T=0;T<l;T++){let y=T*u-r;_.push(y,-M,0),v.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let T=M+l*m,y=M+l*(m+1),A=M+1+l*(m+1),S=M+1+l*m;f.push(T,y,S),f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Bi=class i extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new O,d=new O,f=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){let M=[],T=m/n,y=a+T*o,A=t*Math.cos(y),S=Math.sqrt(t*t-A*A),x=0;m===0&&a===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let g=0;g<=e;g++){let L=g/e,I=s+L*r;u.x=-S*Math.cos(I),u.y=A,u.z=S*Math.sin(I),_.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(L+x,1-T),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let T=h[m][M+1],y=h[m][M],A=h[m+1][M],S=h[m+1][M+1];(m!==0||a>0)&&f.push(T,y,S),(m!==n-1||c<Math.PI)&&f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var br=class i extends We{constructor(t=new Mr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,c=new O,l=new Bt,h=new O,u=[],d=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function v(){for(let T=0;T<e;T++)p(T);p(r===!1?e:0),M(),m()}function p(T){h=t.getPointAt(T/e,h);let y=a.normals[T],A=a.binormals[T];for(let S=0;S<=s;S++){let x=S/s*Math.PI*2,g=Math.sin(x),L=-Math.cos(x);c.x=L*y.x+g*A.x,c.y=L*y.y+g*A.y,c.z=L*y.z+g*A.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=e;T++)for(let y=1;y<=s;y++){let A=(s+1)*(T-1)+(y-1),S=(s+1)*T+(y-1),x=(s+1)*T+y,g=(s+1)*(T-1)+y;_.push(A,S,g),_.push(S,x,g)}}function M(){for(let T=0;T<=e;T++)for(let y=0;y<=s;y++)l.x=T/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Im[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fu(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Cd={clone:Vi,merge:Ke},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},eo=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var no=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Aa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=t,o=2*e-n;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gc:a=t,c=2*n-e;break;case _c:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),v=_*_,p=v*_,m=-d*p+2*d*v-d*_,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,T=(-1-f)*p+(1.5+f)*v+.5*_,y=f*p-f*v;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+M*a[l+A]+T*a[c+A]+y*a[u+A];return r}},ro=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ao=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oo=class extends fi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let _=(n-e)/(s-e),v=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*_;return r}let d=o*2,f=t-1;for(let _=0;_!==o;++_){let v=a[l+_],p=a[c+_],m=f*d+_*2,M=u[m],T=u[m+1],y=t*d+_*2,A=h[y],S=h[y+1],x=Fm(n,e,M,A,s);r[_]=Rd(x,v,T,S,p)}return r}};function Rd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Um(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Rd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Um(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Aa(t.settings)&&(n.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break;case pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Aa(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Aa(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){qt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Wp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ra,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let v=e[u+_];if(v!==e[d+_]||v!==e[f+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Aa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ou(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=za;var pi=class extends hn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ir;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="color";var co=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="number";var ho=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Dn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Sr=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends hn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=ir;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};uo.prototype.ValueTypeName="vector";var Ia={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(ku(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!ku(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ku(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ws=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pd=new ws,Ts=class{constructor(t){this.manager=t!==void 0?t:Pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var hs=new WeakMap,fo=class extends Ts{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ia.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=hs.get(a);u===void 0&&(u=[],hs.set(a,u)),u.push({onLoad:e,onError:s})}return a}let o=_s("img");function c(){h(),e&&e(this);let u=hs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),Ia.remove(`image:${t}`);let d=hs.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}hs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ia.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var wr=class extends Ts{constructor(t){super(t)}load(t,e,n,s){let r=new ze,a=new fo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Tr=class extends Ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fc=new pe,zu=new O,Hu=new O,po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ea=new O,Ca=new Dn,In=new O,Ar=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Ca,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ca,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ea,Ca,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ca,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new O,Gu=new Bt,Vu=new Bt,en=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Vu),e.subVectors(Vu,Gu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Er=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vc=class extends po{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Rr=class extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var us=-90,ds=1,As=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new en(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new en(us,ds,t,e);a.layers=this.layers,this.add(a);let o=new en(us,ds,t,e);o.layers=this.layers,this.add(o);let c=new en(us,ds,t,e);c.layers=this.layers,this.add(c);let l=new en(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},mo=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var eh="\\[\\]\\.:\\/",Om=new RegExp("["+eh+"]","g"),nh="[^"+eh+"]",Bm="[^"+eh.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",nh),zm=/(WCOD+)?/.source.replace("WCOD",Bm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Vm=new RegExp("^"+km+zm+Hm+Gm+"$"),Wm=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Om,"")}static parseTrackName(t){let e=Vm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=yc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);var lh=class lh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lh.prototype.isMatrix2=!0;var Mc=lh;function ih(i,t,e,n){let s=Xm(n);switch(e){case zc:return i*t;case Gc:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case _i:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case Hc:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Io:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Fr:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xm(i){switch(i){case rn:case Fc:return{byteLength:1,components:1};case Rs:case Oc:case Cn:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case An:case yo:case En:return{byteLength:4,components:1};case Bc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ym(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],v=u[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_0=`#define PI 3.141592653589793
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
} // validated`,x0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
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
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform float backgroundBlurriness;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,__=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,y_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,w_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:$m,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Km,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:t0,aomap_pars_fragment:e0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:_0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:b0,colorspace_fragment:S0,colorspace_pars_fragment:w0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:E0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:k0,envmap_vertex:R0,fog_vertex:P0,fog_pars_vertex:I0,fog_fragment:L0,fog_pars_fragment:D0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:U0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:z0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:$0,lightprobes_pars_fragment:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:yg,opaque_fragment:Mg,packing:bg,premultiplied_alpha_fragment:Sg,project_vertex:wg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:zg,transmission_fragment:Hg,transmission_pars_fragment:Gg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:t_,distance_vert:e_,distance_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:M_,points_frag:b_,shadow_vert:S_,shadow_frag:w_,sprite_vert:T_,sprite_frag:A_},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ke([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ke([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ke([Et.points,Et.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ke([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ke([Et.common,Et.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ke([Et.sprite,Et.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ke([Et.common,Et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ke([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};On.physical={uniforms:Ke([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var il={r:0,b:0,g:0},E_=new pe,Qd=new Yt;Qd.set(-1,0,0,0,1,0,0,0,1);function C_(i,t,e,n,s,r){let a=new Jt(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let y=M.backgroundBlurriness>0;T=t.get(T,y)}return T}function _(M){let T=!1,y=f(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,T){let y=f(T);y&&y.isCubeTexture?(l===void 0&&(l=new Pe(new Ss(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Vi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qd),l.material.toneMapped=ae.getTransfer(y.colorSpace)!==ue,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pe(new Oi(2,2),new Ie({name:"BackgroundMaterial",uniforms:Vi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(il,th(i)),e.buffers.color.setClear(il.r,il.g,il.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:v,dispose:m}}function R_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,H,Z,N,q){let J=!1,X=u(U,N,Z,H);r!==X&&(r=X,l(r.object)),J=f(U,N,Z,q),J&&_(U,N,Z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(U,H,Z,N),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,H,Z,N){let q=N.wireframe===!0,J=n[H.id];J===void 0&&(J={},n[H.id]=J);let X=U.isInstancedMesh===!0?U.id:0,ct=J[X];ct===void 0&&(ct={},J[X]=ct);let K=ct[Z.id];K===void 0&&(K={},ct[Z.id]=K);let rt=K[q];return rt===void 0&&(rt=d(c()),K[q]=rt),rt}function d(U){let H=[],Z=[],N=[];for(let q=0;q<e;q++)H[q]=0,Z[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,H,Z,N){let q=r.attributes,J=H.attributes,X=0,ct=Z.getAttributes();for(let K in ct)if(ct[K].location>=0){let ot=q[K],Pt=J[K];if(Pt===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Pt=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Pt=U.instanceColor)),ot===void 0||ot.attribute!==Pt||Pt&&ot.data!==Pt.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function _(U,H,Z,N){let q={},J=H.attributes,X=0,ct=Z.getAttributes();for(let K in ct)if(ct[K].location>=0){let ot=J[K];ot===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor));let Pt={};Pt.attribute=ot,ot&&ot.data&&(Pt.data=ot.data),q[K]=Pt,X++}r.attributes=q,r.attributesNum=X,r.index=N}function v(){let U=r.newAttributes;for(let H=0,Z=U.length;H<Z;H++)U[H]=0}function p(U){m(U,0)}function m(U,H){let Z=r.newAttributes,N=r.enabledAttributes,q=r.attributeDivisors;Z[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),q[U]!==H&&(i.vertexAttribDivisor(U,H),q[U]=H)}function M(){let U=r.newAttributes,H=r.enabledAttributes;for(let Z=0,N=H.length;Z<N;Z++)H[Z]!==U[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function T(U,H,Z,N,q,J,X){X===!0?i.vertexAttribIPointer(U,H,Z,q,J):i.vertexAttribPointer(U,H,Z,N,q,J)}function y(U,H,Z,N){v();let q=N.attributes,J=Z.getAttributes(),X=H.defaultAttributeValues;for(let ct in J){let K=J[ct];if(K.location>=0){let rt=q[ct];if(rt===void 0&&(ct==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),ct==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor)),rt!==void 0){let ot=rt.normalized,Pt=rt.itemSize,Xt=t.get(rt);if(Xt===void 0)continue;let tt=Xt.buffer,bt=Xt.type,Ct=Xt.bytesPerElement,Nt=bt===i.INT||bt===i.UNSIGNED_INT||rt.gpuType===yo;if(rt.isInterleavedBufferAttribute){let ht=rt.data,P=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,k=rt.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let z=0;z<K.locationSize;z++)m(K.location+z,ht.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let z=0;z<K.locationSize;z++)p(K.location+z);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let z=0;z<K.locationSize;z++)T(K.location+z,Pt/K.locationSize,bt,ot,P*Ct,(k+Pt/K.locationSize*z)*Ct,Nt)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)m(K.location+ht,rt.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<K.locationSize;ht++)p(K.location+ht);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ht=0;ht<K.locationSize;ht++)T(K.location+ht,Pt/K.locationSize,bt,ot,Pt*Ct,Pt/K.locationSize*ht*Ct,Nt)}}else if(X!==void 0){let ot=X[ct];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(K.location,ot);break;case 3:i.vertexAttrib3fv(K.location,ot);break;case 4:i.vertexAttrib4fv(K.location,ot);break;default:i.vertexAttrib1fv(K.location,ot)}}}}M()}function A(){L();for(let U in n){let H=n[U];for(let Z in H){let N=H[Z];for(let q in N){let J=N[q];for(let X in J)h(J[X].object),delete J[X];delete N[q]}}delete n[U]}}function S(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let Z in H){let N=H[Z];for(let q in N){let J=N[q];for(let X in J)h(J[X].object),delete J[X];delete N[q]}}delete n[U.id]}function x(U){for(let H in n){let Z=n[H];for(let N in Z){let q=Z[N];if(q[U.id]===void 0)continue;let J=q[U.id];for(let X in J)h(J[X].object),delete J[X];delete q[U.id]}}}function g(U){for(let H in n){let Z=n[H],N=U.isInstancedMesh===!0?U.id:0,q=Z[N];if(q!==void 0){for(let J in q){let X=q[J];for(let ct in X)h(X[ct].object),delete X[ct];delete q[J]}delete Z[N],Object.keys(Z).length===0&&delete n[H]}}}function L(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function P_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function I_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Rn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let g=x===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==rn&&x!==En&&!g&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Wt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:S}}function L_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,T=M*4,y=m.clippingState||null;c.value=y,y=h(_,d,T,f);for(let A=0;A!==T;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,_!==!0||p===null){let m=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=f;T!==v;++T,y+=4)a.copy(u[T]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var zr=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ss(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:ki});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Ge),new As(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Id=256,D_=3,N_=20,tf=256,ef=16,U_=3,F_=new O,O_=new Jt,rl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new Pe(new Ss(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=F_}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(O_));let p=new As(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=_,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Id,Jc(t))}_fromTexture(t,e){t.mapping===Hi||t.mapping===Cs?this._setSize(t.image.length===0?Id:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ld(t,!1,!1),n=Math.log2(t)-D_;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ld(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Hi||t.mapping===Cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=B_(),this._integrationMaterial=k_());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ef);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-U_)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(tf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=z_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ld(i,t,e){return new zr(i,{minFilter:Tn,generateMipmaps:t,type:Cn,colorSpace:sr,depthBuffer:e})}function Hr(i,t,e){return new Ie({name:i,uniforms:t,vertexShader:ee.cube_vert,fragmentShader:e,side:Xe,blending:ki,depthTest:!1,depthWrite:!1})}function B_(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tf}u

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
	`)}function k_(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ef}},`

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
	`)}function z_(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N_}
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
	`)}function Dd(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nd(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function H_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===_o||f===xo)if(t.has(d)){let _=t.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let v=new zr(_.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,_=f===_o||f===xo,v=f===Hi||f===Cs;if(_||v){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new rl(i)),p=_?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return _&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new rl(i)),p=_?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===_o?d.mapping=Hi:f===xo&&(d.mapping=Cs),d}function c(d){let f=0,_=6;for(let v=0;v<_;v++)d[v]!==void 0&&f++;return f===_}function l(d){let f=d.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function G_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&js("WebGLRenderer: "+n+" extension not supported."),s}}}function V_(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let v=r.get(_);v&&(t.remove(v),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(_){let v=_.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function u(_){let v=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?ur:hr,y=new T(Math.ceil(M/3)*6,1),A=y.array;if(v!==null){let x=v.array;m=v.version;for(let g=0,L=0;g<M;g+=3){let I=x[g+0],U=x[g+1],H=x[g+2];A[L++]=I,A[L++]=U,A[L++]=U,A[L++]=H,A[L++]=H,A[L++]=I}}else{m=p.version;for(let x=0,g=0;x<M;x+=3){let L=x+0,I=x+1,U=x+2;A[g++]=L,A[g++]=I,A[g++]=I,A[g++]=U,A[g++]=U,A[g++]=L}}y.version=m;let S=r.get(_);S&&t.remove(S),r.set(_,y)}function d(_){let v=r.get(_);if(v){let p=_.index;p!==null&&v.version<p.version&&u(_)}else u(_);return r.get(_)}function f(){for(let _ in s){let v=s[_].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function W_(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function X_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function q_(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let y=o.attributes.position.count*T,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*A*4*u),x=new or(S,y,A,u);x.type=En,x.needsUpdate=!0;let g=T*4;for(let I=0;I<u;I++){let U=p[I],H=m[I],Z=M[I],N=y*A*4*I;for(let q=0;q<U.count;q++){let J=q*g;f===!0&&(s.fromBufferAttribute(U,q),S[N+J+0]=s.x,S[N+J+1]=s.y,S[N+J+2]=s.z,S[N+J+3]=0),_===!0&&(s.fromBufferAttribute(H,q),S[N+J+4]=s.x,S[N+J+5]=s.y,S[N+J+6]=s.z,S[N+J+7]=0),v===!0&&(s.fromBufferAttribute(Z,q),S[N+J+8]=s.x,S[N+J+9]=s.y,S[N+J+10]=s.z,S[N+J+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Bt(y,A)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Y_(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var $_={[Cc]:"LINEAR_TONE_MAPPING",[Rc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Z_(i,t,e,n,s,r){let a=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new We;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(h,u),f=new Er(-1,1,1,-1,0,1),_=null,v=null,p=!1,m,M=null,T=[],y=!1;this.setSize=function(A,S){a.setSize(A,S),o!==null&&o.setSize(A,S),c!==null&&c.setSize(A,S);for(let x=0;x<T.length;x++){let g=T[x];g.setSize&&g.setSize(A,S)}},this.setEffects=function(A){T=A,y=T.length>0&&T[0].isRenderPass===!0;let S=a.width,x=a.height;T.length>0&&o===null&&(o=new cn(S,x,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new cn(S,x,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));let g=s===!0&&T.some(L=>L.needsDepthTexture===!0);g!==(a.depthTexture!==null)&&(g===!0&&l===null&&(l=new Kn(S,x),r===!0&&(l.format=Qn,l.type=Gi)),a.dispose(),a.depthTexture=g?l:null,a.resolveDepthBuffer=g,a.storeMultisampledDepthBuffer=g);for(let L=0;L<T.length;L++){let I=T[L];I.setSize&&I.setSize(S,x),g&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(A,S){if(p||A.toneMapping===Un&&T.length===0)return!1;if(M=S,S!==null){let x=S.width,g=S.height;(a.width!==x||a.height!==g)&&this.setSize(x,g)}return y===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(A,S){A.toneMapping=m,p=!0;let x=a,g=o;for(let L=0;L<T.length;L++){let I=T[L];I.enabled!==!1&&(I.render(A,g,x,S),I.needsSwap!==!1&&(x=g,g=g===o?c:o))}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,u.defines={},ae.getTransfer(_)===ue&&(u.defines.SRGB_TRANSFER="");let L=$_[v];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var nf=new ze,sf=new Kn(1,1),rf=new _r(1),af=new or,of=new Va,lf=new mr,Ud=[],Fd=[],Od=new Float32Array(16),Bd=new Float32Array(9),kd=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ud[s];if(r===void 0&&(r=new Float32Array(s),Ud[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=Fd[t];e===void 0&&(e=new Int32Array(t),Fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),Ne(e,n)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Bd.set(n),i.uniformMatrix3fv(this.addr,!1,Bd),Ne(e,n)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Od.set(n),i.uniformMatrix4fv(this.addr,!1,Od),Ne(e,n)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ll(i){return i.version===0&&(i.compareFunction=qc,i.needsUpdate=!0),i}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ll(sf):r=nf,e.setTexture2D(t||r,s)}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ll(rf):r=lf,e.setTextureCube(t||r,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||af,s)}function mx(i){switch(i){case 5126:return J_;case 35664:return K_;case 35665:return j_;case 35666:return Q_;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,t){i.uniform1fv(this.addr,t)}function _x(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function xx(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function vx(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function yx(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bx(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function Tx(i,t){i.uniform3iv(this.addr,t)}function Ax(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function Cx(i,t){i.uniform2uiv(this.addr,t)}function Rx(i,t){i.uniform3uiv(this.addr,t)}function Px(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ll(sf):a=nf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Lx(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||of,r[a])}function Dx(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ll(rf):a=lf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Nx(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||af,r[a])}function Ux(i){switch(i){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Ex;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}var uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}},dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}},fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function zd(i,t){i.seq.push(t),i.map[t.id]=t}function Fx(i,t,e){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zd(e,l===void 0?new uh(o,i,t):new dh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new fh(o),zd(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Fx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ox=37297,Bx=0;function kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Gd=new Yt;function zx(i){ae._getMatrix(Gd,ae.workingColorSpace,i);let t=`mat3( ${Gd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kx(i.getShaderSource(t),o)}else return r}function Hx(i,t){let e=zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Gx={[Cc]:"Linear",[Rc]:"Reinhard",[Pc]:"Cineon",[Ic]:"ACESFilmic",[Dc]:"AgX",[Nc]:"Neutral",[Lc]:"Custom"};function Vx(i,t){let e=Gx[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new O;function Wx(){ae.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function qx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function Wd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace($x,Zx)}function Zx(i,t){let e=ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ph(e)}var Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(i){return i.replace(Jx,Kx)}function Kx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var jx={[Pr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Qx(i){return jx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tv={[Cs]:"ENVMAP_MODE_REFRACTION"};function ev(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nv={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Qx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ev(e),u=iv(e),d=Xx(e),f=qx(r),_=s.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(v=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ee.tonemapping_pars_fragment:"",e.toneMapping!==Un?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Hx("linearToOutputTexel",e.outputColorSpace),Wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=ph(a),a=Wd(a,e),a=Xd(a,e),o=ph(o),o=Wd(o,e),o=Xd(o,e),a=qd(a),o=qd(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,T=m+p+o,y=Hd(s,s.VERTEX_SHADER,M),A=Hd(s,s.FRAGMENT_SHADER,T);s.attachShader(_,y),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(A)||"",N=U.trim(),q=H.trim(),J=Z.trim(),X=!0,ct=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,A);else{let K=Vd(s,y,"vertex"),rt=Vd(s,A,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+K+`
`+rt)}else N!==""?Wt("WebGLProgram: Program Info Log:",N):(q===""||J==="")&&(ct=!1);ct&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:q,prefix:v},fragmentShader:{log:J,prefix:p}})}s.deleteShader(y),s.deleteShader(A),x=new Ps(s,_),g=Yx(s,_)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let g;this.getAttributes=function(){return g===void 0&&S(this),g};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,Ox)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}var rv=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gh(t),e.set(t,n)),n}},gh=class{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}};function av(i){return i===_i||i===Fr||i===Or}function ov(i,t,e,n,s,r){let a=new lr,o=new mh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,g,L,I,U,H){let Z=I.fog,N=U.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||q,J),ct=d[x.type],K=n.precision;x.precision!==null&&(K=n.getMaxPrecision(x.precision),K!==x.precision&&Wt("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));let rt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ot=rt!==void 0?rt.length:0,Pt=0;N.morphAttributes.position!==void 0&&(Pt=1),N.morphAttributes.normal!==void 0&&(Pt=2),N.morphAttributes.color!==void 0&&(Pt=3);let Xt,tt,bt,Ct;if(ct){let At=On[ct];Xt=At.vertexShader,tt=At.fragmentShader}else{Xt=x.vertexShader,tt=x.fragmentShader;let At=o.getVertexShaderStage(x),de=o.getFragmentShaderStage(x);o.update(x,At,de),bt=At.id,Ct=de.id}let Nt=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),P=U.isInstancedMesh===!0,k=U.isBatchedMesh===!0,z=!!x.map,$=!!x.matcap,nt=!!X,dt=nt&&X.isPMREMTexture===!0,Q=!!x.aoMap,It=!!x.lightMap,Lt=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,lt=!!x.displacementMap,Ut=!!x.emissiveMap,Qt=!!x.metalnessMap,Se=!!x.roughnessMap,qe=x.anisotropy>0,B=x.clearcoat>0,nn=x.diffuseRoughness>0,_e=x.dispersion>0,xe=x.retroreflectivity>0,Tt=x.iridescence>0,Re=x.sheen>0,Vt=x.transmission>0,$t=qe&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,b=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,ut=nn&&!!x.diffuseRoughnessMap,at=Tt&&!!x.iridescenceMap,gt=Tt&&!!x.iridescenceThicknessMap,St=Re&&!!x.sheenColorMap,et=Re&&!!x.sheenRoughnessMap,it=!!x.specularMap,xt=!!x.specularColorMap,D=!!x.specularIntensityMap,st=Vt&&!!x.transmissionMap,j=Vt&&!!x.thicknessMap,vt=!!x.gradientMap,mt=!!x.alphaMap,_t=x.alphaTest>0,zt=!!x.alphaHash,te=!!x.extensions,ft=Un;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Ht=dt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Kt={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:tt,defines:x.defines,customVertexShaderID:bt,customFragmentShaderID:Ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:k,batchingColor:k&&U._colorsTexture!==null,instancing:P,instancingColor:P&&U.instanceColor!==null,instancingMorph:P&&U.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:z,matcap:$,envMap:nt,envMapMode:nt&&X.mapping,envMapPMREM:dt,envMapMaxLod:dt?Ht.length-1:null,envMapSize:dt?Ht[0].width:null,aoMap:Q,lightMap:It,bumpMap:Lt,normalMap:pt,displacementMap:lt,emissiveMap:Ut,normalMapObjectSpace:pt&&x.normalMapType===md,normalMapTangentSpace:pt&&x.normalMapType===Vc,packedNormalMap:pt&&x.normalMapType===Vc&&av(x.normalMap.format),metalnessMap:Qt,roughnessMap:Se,anisotropy:qe,anisotropyMap:$t,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:nn,diffuseRoughnessMap:ut,dispersion:_e,retroreflection:xe,iridescence:Tt,iridescenceMap:at,iridescenceThicknessMap:gt,sheen:Re,sheenColorMap:St,sheenRoughnessMap:et,specularMap:it,specularColorMap:xt,specularIntensityMap:D,transmission:Vt,transmissionMap:st,thicknessMap:j,gradientMap:vt,opaque:x.transparent===!1&&x.blending===jn&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:_t,alphaHash:zt,combine:x.combine,mapUv:z&&f(x.map.channel),aoMapUv:Q&&f(x.aoMap.channel),lightMapUv:It&&f(x.lightMap.channel),bumpMapUv:Lt&&f(x.bumpMap.channel),normalMapUv:pt&&f(x.normalMap.channel),displacementMapUv:lt&&f(x.displacementMap.channel),emissiveMapUv:Ut&&f(x.emissiveMap.channel),metalnessMapUv:Qt&&f(x.metalnessMap.channel),roughnessMapUv:Se&&f(x.roughnessMap.channel),anisotropyMapUv:$t&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(x.sheenRoughnessMap.channel),specularMapUv:it&&f(x.specularMap.channel),specularColorMapUv:xt&&f(x.specularColorMap.channel),specularIntensityMapUv:D&&f(x.specularIntensityMap.channel),transmissionMapUv:st&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:mt&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||qe),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(z||mt),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Pt,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:H.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:z&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:te&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&x.extensions.multiDraw===!0||k)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function v(x){let g=[];if(x.shaderID?g.push(x.shaderID):(g.push(x.customVertexShaderID),g.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)g.push(L),g.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(g,x),m(g,x),g.push(i.outputColorSpace)),g.push(x.customProgramCacheKey),g.join()}function p(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapPMREM),x.push(g.envMapMaxLod),x.push(g.envMapSize),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.diffuseRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.numSunLights),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numSunLightShadows),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.numLightProbeGrids),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}function m(x,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.retroreflection&&a.enable(24),g.diffuseRoughness&&a.enable(25),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),g.packedNormalMap&&a.enable(22),g.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),g.numLightProbeGrids>0&&a.enable(22),g.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let g=d[x.type],L;if(g){let I=On[g];L=Cd.clone(I.uniforms)}else L=x.uniforms;return L}function T(x,g){let L=h.get(g);return L!==void 0?++L.usedTimes:(L=new sv(i,g,x,s),l.push(L),h.set(g,L)),L}function y(x){if(--x.usedTimes===0){let g=l.indexOf(x);l[g]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function S(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:S}}function lv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $d(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,v,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=_,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function c(d,f,_,v,p,m,M){M.reversedDepth===!0&&(p=-p);let T=o(d,f,_,v,p,m);_.transmission>0?n.push(T):_.transparent===!0?s.push(T):e.push(T)}function l(d,f,_,v,p,m){let M=o(d,f,_,v,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||cv),n.length>1&&n.sort(f||$d),s.length>1&&s.sort(f||$d)}function u(){for(let d=t,f=i.length;d<f;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function hv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Zd,i.set(n,[a])):s>=r.length?(a=new Zd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Jt};break;case"SpotLight":e={position:new O,direction:new O,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function dv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fv=0;function pv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mv(i){let t=new uv,e=dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new pe,a=new pe;function o(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,_=0,v=0,p=0,m=0,M=0,T=0,y=0,A=0,S=0,x=0,g=0,L=0,I=0;l.sort(pv);for(let H=0,Z=l.length;H<Z;H++){let N=l[H],q=N.color,J=N.intensity,X=N.distance,ct=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_i?ct=N.shadow.map.texture:ct=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=q.r*J,u+=q.g*J,d+=q.b*J;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],J);I++}else if(N.isSunLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[_]=ot,n.sunShadowMap[_]=ct;let Pt=rt.getViewportCount();for(let Xt=0;Xt<Pt;Xt++)n.sunShadowMatrix[v+Xt]=rt.getMatrix(Xt),n.sunShadowCascade[v+Xt]=rt._cascadeData[Xt];v+=Pt,_++}n.sun[f]=K,f++}else if(N.isDirectionalLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,n.directionalShadow[p]=ot,n.directionalShadowMap[p]=ct,n.directionalShadowMatrix[p]=N.shadow.matrix,A++}n.directional[p]=K,p++}else if(N.isSpotLight){let K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(q).multiplyScalar(J),K.distance=X,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[M]=K;let rt=N.shadow;if(N.map&&(n.spotLightMap[g]=N.map,g++,rt.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[M]=rt.matrix,N.castShadow){let ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=ct,x++}M++}else if(N.isRectAreaLight){let K=t.get(N);K.color.copy(q).multiplyScalar(J),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=K,T++}else if(N.isPointLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let rt=N.shadow,ot=e.get(N);ot.shadowIntensity=rt.intensity,ot.shadowBias=rt.bias,ot.shadowNormalBias=rt.normalBias,ot.shadowRadius=rt.radius,ot.shadowMapSize=rt.mapSize,ot.shadowCameraNear=rt.camera.near,ot.shadowCameraFar=rt.camera.far,n.pointShadow[m]=ot,n.pointShadowMap[m]=ct,n.pointShadowMatrix[m]=N.shadow.matrix,S++}n.point[m]=K,m++}else if(N.isHemisphereLight){let K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(J),K.groundColor.copy(N.groundColor).multiplyScalar(J),n.hemi[y]=K,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==_||U.numDirectionalShadows!==A||U.numPointShadows!==S||U.numSpotShadows!==x||U.numSpotMaps!==g||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+g-L,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=M,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=_,U.numDirectionalShadows=A,U.numPointShadows=S,U.numSpotShadows=x,U.numSpotMaps=g,U.numLightProbes=I,n.version=fv++)}function c(l,h){let u=0,d=0,f=0,_=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let y=l[M];if(y.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(y.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Jd(i){let t=new mv(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function c(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jd(i),t.set(s,[o])):r>=a.length?(o=new Jd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,vv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],yv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Kd=new pe,Br=new O,hh=new O;function Mv(i,t,e){let n=new di,s=new Bt,r=new Bt,a=new ve,o=new no,c=new io,l={},h=e.maxTextureSize,u={[gi]:Xe,[Xe]:gi,[un]:un},d=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:_v,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new We;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pe(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let m=this.type;this.render=function(S,x,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===qu&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ki),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=m!==this.type;Z&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=S.length;N<q;N++){let J=S[N],X=J.shadow;if(X===void 0){Wt("WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ct=X.getFrameExtents();s.multiply(ct),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=K,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Es){if(J.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new cn(s.x,s.y,{format:_i,type:Cn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),X.map.texture.name=J.name+".shadowMap",X.map.depthTexture=new Kn(s.x,s.y,En),X.map.depthTexture.name=J.name+".shadowMapDepth",X.map.depthTexture.format=$n,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke}else J.isPointLight?(X.map=new zr(s.x),X.map.depthTexture=new _r(s.x,An)):(X.map=new cn(s.x,s.y),X.map.depthTexture=new Kn(s.x,s.y,An)),X.map.depthTexture.name=J.name+".shadowMap",X.map.depthTexture.format=$n,this.type===Pr?(X.map.depthTexture.compareFunction=K?Xc:Wc,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let rt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();J.isPointLight!==!0&&X.updateMatrices(J,g);let ot=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:g.layers;for(let Pt=0;Pt<rt;Pt++){let Xt=X.getCamera(Pt);if(J.isPointLight){let tt=X.camera,bt=X.matrix,Ct=J.distance||tt.far;Ct!==tt.far&&(tt.far=Ct,tt.updateProjectionMatrix()),Br.setFromMatrixPosition(J.matrixWorld),tt.position.copy(Br),hh.copy(tt.position),hh.add(vv[Pt]),tt.up.copy(yv[Pt]),tt.lookAt(hh),tt.updateMatrixWorld(),bt.makeTranslation(-Br.x,-Br.y,-Br.z),Kd.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Kd,tt.coordinateSystem,tt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Pt),i.clear();else{Pt===0&&(i.setRenderTarget(X.map),i.clear());let tt=X.getViewport(Pt);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),H.viewport(a)}n=X.getFrustum(Pt),y(x,g,Xt,J,ot,this.type)}X.isPointLightShadow!==!0&&this.type===Es&&M(X,g),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,I,U)};function M(S,x){let g=t.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new cn(s.x,s.y,{format:_i,type:Cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,g,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,g,f,v,null)}function T(S,x,g,L){let I=null,U=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)I=U;else if(I=g.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=I.uuid,Z=x.uuid,N=l[H];N===void 0&&(N={},l[H]=N);let q=N[Z];q===void 0&&(q=I.clone(),N[Z]=q,x.addEventListener("dispose",A)),I=q}if(I.visible=x.visible,I.wireframe=x.wireframe,L===Es?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:u[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,g.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=i.properties.get(I);H.light=g}return I}function y(S,x,g,L,I,U){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&U===Es)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);let N=t.update(S),q=S.material;if(Array.isArray(q)){let J=N.groups;for(let X=0,ct=J.length;X<ct;X++){let K=J[X],rt=q[K.materialIndex];if(rt&&rt.visible){let ot=T(S,rt,L,U);S.onBeforeShadow(i,S,x,g,N,ot,K),i.renderBufferDirect(g,null,N,ot,S,K),S.onAfterShadow(i,S,x,g,N,ot,K)}}}else if(q.visible){let J=T(S,q,L,U);S.onBeforeShadow(i,S,x,g,N,J,null),i.renderBufferDirect(g,null,N,J,S,null),S.onAfterShadow(i,S,x,g,N,J,null)}}let Z=S.children;for(let N=0,q=Z.length;N<q;N++)y(Z[N],x,g,L,I,U)}function A(S){S.target.removeEventListener("dispose",A);for(let g in l){let L=l[g],I=S.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function bv(i,t){function e(){let D=!1,st=new ve,j=null,vt=new ve(0,0,0,0);return{setMask:function(mt){j!==mt&&!D&&(i.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){D=mt},setClear:function(mt,_t,zt,te,ft){ft===!0&&(mt*=te,_t*=te,zt*=te),st.set(mt,_t,zt,te),vt.equals(st)===!1&&(i.clearColor(mt,_t,zt,te),vt.copy(st))},reset:function(){D=!1,j=null,vt.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,j=null,vt=null,mt=null;return{setReversed:function(_t){if(st!==_t){let zt=t.get("EXT_clip_control");_t?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),st=_t;let te=mt;mt=null,this.setClear(te)}},getReversed:function(){return st},setTest:function(_t){_t?ht(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(_t){j!==_t&&!D&&(i.depthMask(_t),j=_t)},setFunc:function(_t){if(st&&(_t=Td[_t]),vt!==_t){switch(_t){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=_t}},setLocked:function(_t){D=_t},setClear:function(_t){mt!==_t&&(mt=_t,st&&(_t=1-_t),i.clearDepth(_t))},reset:function(){D=!1,j=null,vt=null,mt=null,st=!1}}}function s(){let D=!1,st=null,j=null,vt=null,mt=null,_t=null,zt=null,te=null,ft=null;return{setTest:function(Ht){D||(Ht?ht(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(Ht){st!==Ht&&!D&&(i.stencilMask(Ht),st=Ht)},setFunc:function(Ht,Kt,At){(j!==Ht||vt!==Kt||mt!==At)&&(i.stencilFunc(Ht,Kt,At),j=Ht,vt=Kt,mt=At)},setOp:function(Ht,Kt,At){(_t!==Ht||zt!==Kt||te!==At)&&(i.stencilOp(Ht,Kt,At),_t=Ht,zt=Kt,te=At)},setLocked:function(Ht){D=Ht},setClear:function(Ht){ft!==Ht&&(i.clearStencil(Ht),ft=Ht)},reset:function(){D=!1,st=null,j=null,vt=null,mt=null,_t=null,zt=null,te=null,ft=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,_=[],v=null,p=!1,m=null,M=null,T=null,y=null,A=null,S=null,x=null,g=new Jt(0,0,0),L=0,I=!1,U=null,H=null,Z=null,N=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ct=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=ct>=1):K.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=ct>=2);let rt=null,ot={},Pt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),tt=new ve().fromArray(Pt),bt=new ve().fromArray(Xt);function Ct(D,st,j,vt){let mt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(D,_t),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<j;zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(st+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return _t}let Nt={};Nt[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(ps),Lt(!1),pt(bc),ht(i.CULL_FACE),Q(ki);function ht(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function P(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function k(D,st){return d[D]!==st?(i.bindFramebuffer(D,st),d[D]=st,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function z(D,st){let j=_,vt=!1;if(D){j=f.get(st),j===void 0&&(j=[],f.set(st,j));let mt=D.textures;if(j.length!==mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,zt=mt.length;_t<zt;_t++)j[_t]=i.COLOR_ATTACHMENT0+_t;j.length=mt.length,vt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,vt=!0);vt&&i.drawBuffers(j)}function $(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let nt={[zi]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};nt[Ju]=i.MIN,nt[Ku]=i.MAX;let dt={[ju]:i.ZERO,[Qu]:i.ONE,[td]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(D,st,j,vt,mt,_t,zt,te,ft,Ht){if(D===ki){p===!0&&(P(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),D!==Yu){if(D!==m||Ht!==I){if((M!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),M=zi,A=zi),Ht)switch(D){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",D);break}else switch(D){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",D);break}T=null,y=null,S=null,x=null,g.set(0,0,0),L=0,m=D,I=Ht}return}mt=mt||st,_t=_t||j,zt=zt||vt,(st!==M||mt!==A)&&(i.blendEquationSeparate(nt[st],nt[mt]),M=st,A=mt),(j!==T||vt!==y||_t!==S||zt!==x)&&(i.blendFuncSeparate(dt[j],dt[vt],dt[_t],dt[zt]),T=j,y=vt,S=_t,x=zt),(te.equals(g)===!1||ft!==L)&&(i.blendColor(te.r,te.g,te.b,ft),g.copy(te),L=ft),m=D,I=!1}function It(D,st){D.side===un?P(i.CULL_FACE):ht(i.CULL_FACE);let j=D.side===Xe;st&&(j=!j),Lt(j),D.blending===jn&&D.transparent===!1?Q(ki):Q(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let vt=D.stencilWrite;o.setTest(vt),vt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function pt(D){D!==Wu?(ht(i.CULL_FACE),D!==H&&(D===bc?i.cullFace(i.BACK):D===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),H=D}function lt(D){D!==Z&&(X&&i.lineWidth(D),Z=D)}function Ut(D,st,j){D?(ht(i.POLYGON_OFFSET_FILL),(N!==st||q!==j)&&(N=st,q=j,a.getReversed()&&(st=-st,j=-j),i.polygonOffset(st,j))):P(i.POLYGON_OFFSET_FILL)}function Qt(D){D?ht(i.SCISSOR_TEST):P(i.SCISSOR_TEST)}function Se(D){D===void 0&&(D=i.TEXTURE0+J-1),rt!==D&&(i.activeTexture(D),rt=D)}function qe(D,st,j){j===void 0&&(rt===null?j=i.TEXTURE0+J-1:j=rt);let vt=ot[j];vt===void 0&&(vt={type:void 0,texture:void 0},ot[j]=vt),(vt.type!==D||vt.texture!==st)&&(rt!==j&&(i.activeTexture(j),rt=j),i.bindTexture(D,st||Nt[D]),vt.type=D,vt.texture=st)}function B(){let D=ot[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nn(){try{i.compressedTexImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function _e(){try{i.compressedTexImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function xe(){try{i.texSubImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function Vt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function $t(){try{i.texStorage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function b(){try{i.texImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function V(){try{i.texImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function ut(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function at(D,st){u[D]!==st&&(i.pixelStorei(D,st),u[D]=st)}function gt(D){tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function St(D){bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),bt.copy(D))}function et(D,st){let j=l.get(st);j===void 0&&(j=new WeakMap,l.set(st,j));let vt=j.get(D);vt===void 0&&(vt=i.getUniformBlockIndex(st,D.name),i.uniformBlockBinding(st,vt,vt),j.set(D,vt))}function it(D,st,j){let mt=l.get(st).get(D);c[mt]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,mt,j),c[mt]=j)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},rt=null,ot={},d={},c={},f=new WeakMap,_=[],v=null,p=!1,m=null,M=null,T=null,y=null,A=null,S=null,x=null,g=new Jt(0,0,0),L=0,I=!1,U=null,H=null,Z=null,N=null,q=null,tt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:P,bindFramebuffer:k,drawBuffers:z,useProgram:$,setBlending:Q,setMaterial:It,setFlipSided:Lt,setCullFace:pt,setLineWidth:lt,setPolygonOffset:Ut,setScissorTest:Qt,activeTexture:Se,bindTexture:qe,unbindTexture:B,compressedTexImage2D:nn,compressedTexImage3D:_e,texImage2D:b,texImage3D:V,pixelStorei:at,getParameter:ut,updateUBOMapping:et,uniformBlockBinding:it,texStorage2D:$t,texStorage3D:R,texSubImage2D:xe,texSubImage3D:Tt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Vt,scissor:gt,viewport:St,reset:xt}}function Sv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,u=new Set,d,f=new WeakMap,_=new Set,v=new FinalizationRegistry(R=>_.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return p?new OffscreenCanvas(R,b):_s("canvas")}function M(R,b,V){let ut=1,at=$t(R);if((at.width>V||at.height>V)&&(ut=V/Math.max(at.width,at.height)),ut<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let gt=Math.floor(ut*at.width),St=Math.floor(ut*at.height);d===void 0&&(d=m(gt,St));let et=b?m(gt,St):d;return et.width=gt,et.height=St,et.getContext("2d").drawImage(R,0,0,gt,St),Wt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+gt+"x"+St+")."),et}else return"data"in R&&Wt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,V,ut,at,gt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;ut&&(St=t.get("EXT_texture_norm16"),St||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=b;if(b===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8),V===i.UNSIGNED_SHORT&&St&&(et=St.R16_EXT),V===i.SHORT&&St&&(et=St.R16_SNORM_EXT)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),b===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8),V===i.UNSIGNED_SHORT&&St&&(et=St.RG16_EXT),V===i.SHORT&&St&&(et=St.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_SHORT&&St&&(et=St.RGB16_EXT),V===i.SHORT&&St&&(et=St.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),b===i.RGBA){let it=gt?rr:ae.getTransfer(at);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=it===ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&St&&(et=St.RGBA16_EXT),V===i.SHORT&&St&&(et=St.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(R,b){let V;return R?b===null||b===An||b===Gi?V=i.DEPTH24_STENCIL8:b===En?V=i.DEPTH32F_STENCIL8:b===Rs&&(V=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===An||b===Gi?V=i.DEPTH_COMPONENT24:b===En?V=i.DEPTH_COMPONENT32F:b===Rs&&(V=i.DEPTH_COMPONENT16),V}function g(R,b){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Ge?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function L(R){let b=new WeakRef(R);n.get(R).__ref=b,_.add(b),v.register(R,b,b)}function I(R){let b=n.get(R).__ref;b!==void 0&&(_.delete(b),v.unregister(b))}function U(R){Z(R.target)}function H(R){N(R.target)}function Z(R){R.removeEventListener("dispose",U),I(R),J(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function N(R){R.removeEventListener("dispose",H),I(R),ct(R)}function q(){for(let R of _){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):Z(b))}_.clear(),u.clear()}function J(R){let b=n.get(R);if(b.__webglInit===void 0)return;let V=R.source,ut=f.get(V);if(ut){let at=ut[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&X(R),Object.keys(ut).length===0&&f.delete(V)}n.remove(R)}function X(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let V=R.source,ut=f.get(V);delete ut[b.__cacheKey],a.memory.textures--}function ct(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&Z(V),R.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(b.__webglFramebuffer[at]))for(let gt=0;gt<b.__webglFramebuffer[at].length;gt++)i.deleteFramebuffer(b.__webglFramebuffer[at][gt]);else i.deleteFramebuffer(b.__webglFramebuffer[at]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[at])}else{if(Array.isArray(b.__webglFramebuffer))for(let at=0;at<b.__webglFramebuffer.length;at++)i.deleteFramebuffer(b.__webglFramebuffer[at]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let at=0;at<b.__webglColorRenderbuffer.length;at++)b.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[at]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ut=R.textures;for(let at=0,gt=ut.length;at<gt;at++){let St=n.get(ut[at]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(ut[at])}n.remove(R)}let K=0;function rt(){K=0}function ot(){return K}function Pt(R){K=R}function Xt(){let R=K;return R>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,R}function tt(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function bt(R,b){let V=n.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let ut=R.image;if(ut===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{It(V,R,b);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function Ct(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){It(V,R,b);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Nt(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){It(V,R,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function ht(R,b){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Lt(V,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let P={[ms]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},k={[ke]:i.NEAREST,[fd]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},z={[_d]:i.NEVER,[qc]:i.ALWAYS,[xd]:i.LESS,[Wc]:i.LEQUAL,[vd]:i.EQUAL,[Xc]:i.GEQUAL,[yd]:i.GREATER,[Md]:i.NOTEQUAL};function $(R,b){if(b.type===En&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ge||b.magFilter===vo||b.magFilter===Ir||b.magFilter===Tn||b.minFilter===Ge||b.minFilter===vo||b.minFilter===Ir||b.minFilter===Tn)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,P[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,P[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,P[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,k[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ke||b.minFilter!==Ir&&b.minFilter!==Tn||b.type===En&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function nt(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",U),L(b));let ut=b.source,at=f.get(ut);at===void 0&&(at={},f.set(ut,at));let gt=tt(b);if(gt!==R.__cacheKey){at[gt]===void 0&&(at[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),at[gt].usedTimes++;let St=at[R.__cacheKey];St!==void 0&&(at[R.__cacheKey].usedTimes--,St.usedTimes===0&&X(b)),R.__cacheKey=gt,R.__webglTexture=at[gt].texture}return V}function dt(R,b,V){return Math.floor(Math.floor(R/V)/b)}function Q(R,b,V,ut){let gt=R.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,ut,b.data);else{gt.sort((D,st)=>D.start-st.start);let St=0;for(let D=1;D<gt.length;D++){let st=gt[St],j=gt[D],vt=st.start+st.count,mt=dt(j.start,b.width,4),_t=dt(st.start,b.width,4);j.start<=vt+1&&mt===_t&&dt(j.start+j.count-1,b.width,4)===mt?st.count=Math.max(st.count,j.start+j.count-st.start):(++St,gt[St]=j)}gt.length=St+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,st=gt.length;D<st;D++){let j=gt[D],vt=Math.floor(j.start/4),mt=Math.ceil(j.count/4),_t=vt%b.width,zt=Math.floor(vt/b.width),te=mt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,_t,zt,te,ft,V,ut,b.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function It(R,b,V){let ut=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=i.TEXTURE_3D);let at=nt(R,b),gt=b.source;e.bindTexture(ut,R.__webglTexture,i.TEXTURE0+V);let St=n.get(gt);if(gt.version!==St.__version||at===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ft=ae.getPrimaries(ae.workingColorSpace),Ht=b.colorSpace===dn?null:ae.getPrimaries(b.colorSpace),Kt=b.colorSpace===dn||ft===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let it=M(b.image,!1,s.maxTextureSize);it=Vt(b,it);let xt=r.convert(b.format,b.colorSpace),D=r.convert(b.type),st=S(b.internalFormat,xt,D,b.normalized,b.colorSpace,b.isVideoTexture);$(ut,b);let j,vt=b.mipmaps,mt=b.isVideoTexture!==!0,_t=St.__version===void 0||at===!0,zt=gt.dataReady,te=g(b,it);if(b.isDepthTexture)st=x(b.format===Qn,b.type),_t&&(mt?e.texStorage2D(i.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,st,it.width,it.height,0,xt,D,null));else if(b.isDataTexture)if(vt.length>0){mt&&_t&&e.texStorage2D(i.TEXTURE_2D,te,st,vt[0].width,vt[0].height);for(let ft=0,Ht=vt.length;ft<Ht;ft++)j=vt[ft],mt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,D,j.data):e.texImage2D(i.TEXTURE_2D,ft,st,j.width,j.height,0,xt,D,j.data);b.generateMipmaps=!1}else mt?(_t&&e.texStorage2D(i.TEXTURE_2D,te,st,it.width,it.height),zt&&Q(b,it,xt,D)):e.texImage2D(i.TEXTURE_2D,0,st,it.width,it.height,0,xt,D,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){mt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,te,st,vt[0].width,vt[0].height,it.depth);for(let ft=0,Ht=vt.length;ft<Ht;ft++)if(j=vt[ft],b.format!==Rn)if(xt!==null)if(mt){if(zt)if(b.layerUpdates.size>0){let Kt=ih(j.width,j.height,b.format,b.type);for(let At of b.layerUpdates){let de=j.data.subarray(At*Kt/j.data.BYTES_PER_ELEMENT,(At+1)*Kt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,At,j.width,j.height,1,xt,de)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,j.width,j.height,it.depth,xt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,st,j.width,j.height,it.depth,0,j.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,j.width,j.height,it.depth,xt,D,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,st,j.width,j.height,it.depth,0,xt,D,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{mt&&_t&&e.texStorage2D(i.TEXTURE_2D,te,st,vt[0].width,vt[0].height);for(let ft=0,Ht=vt.length;ft<Ht;ft++)j=vt[ft],b.format!==Rn?xt!==null?mt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,st,j.width,j.height,0,j.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,D,j.data):e.texImage2D(i.TEXTURE_2D,ft,st,j.width,j.height,0,xt,D,j.data)}else if(b.isDataArrayTexture)if(mt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,te,st,it.width,it.height,it.depth),zt)if(b.layerUpdates.size>0){let ft=ih(it.width,it.height,b.format,b.type);for(let Ht of b.layerUpdates){let Kt=it.data.subarray(Ht*ft/it.data.BYTES_PER_ELEMENT,(Ht+1)*ft/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,it.width,it.height,1,xt,D,Kt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,D,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,xt,D,it.data);else if(b.isData3DTexture)mt?(_t&&e.texStorage3D(i.TEXTURE_3D,te,st,it.width,it.height,it.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,D,it.data)):e.texImage3D(i.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,xt,D,it.data);else if(b.isFramebufferTexture){if(_t)if(mt)e.texStorage2D(i.TEXTURE_2D,te,st,it.width,it.height);else{let ft=it.width,Ht=it.height;for(let Kt=0;Kt<te;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,st,ft,Ht,0,xt,D,null),ft>>=1,Ht>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),it.parentNode!==ft){ft.appendChild(it),u.add(b),ft.onpaint=Ht=>{let Kt=Ht.changedElements;for(let At of u)Kt.includes(At.image)&&(At.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let Kt=i.RGBA,At=i.RGBA,de=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,At,de,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(mt&&_t){let ft=$t(vt[0]);e.texStorage2D(i.TEXTURE_2D,te,st,ft.width,ft.height)}for(let ft=0,Ht=vt.length;ft<Ht;ft++)j=vt[ft],mt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,xt,D,j):e.texImage2D(i.TEXTURE_2D,ft,st,xt,D,j);b.generateMipmaps=!1}else if(mt){if(_t){let ft=$t(it);e.texStorage2D(i.TEXTURE_2D,te,st,ft.width,ft.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,D,it)}else e.texImage2D(i.TEXTURE_2D,0,st,xt,D,it);T(b)&&b.mipmapsAutoUpdate===!0&&y(ut),St.__version=gt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Lt(R,b,V){if(b.image.length!==6)return;let ut=nt(R,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let gt=n.get(at);if(at.version!==gt.__version||ut===!0){e.activeTexture(i.TEXTURE0+V);let St=ae.getPrimaries(ae.workingColorSpace),et=b.colorSpace===dn?null:ae.getPrimaries(b.colorSpace),it=b.colorSpace===dn||St===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let xt=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,st=[];for(let At=0;At<6;At++)!xt&&!D?st[At]=M(b.image[At],!0,s.maxCubemapSize):st[At]=D?b.image[At].image:b.image[At],st[At]=Vt(b,st[At]);let j=st[0],vt=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),_t=S(b.internalFormat,vt,mt,b.normalized,b.colorSpace),zt=b.isVideoTexture!==!0,te=gt.__version===void 0||ut===!0,ft=at.dataReady,Ht=g(b,j);$(i.TEXTURE_CUBE_MAP,b);let Kt;if(b.isDepthTexture){if(_t=x(b.format===Qn,b.type),te)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,j.width,j.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,j.width,j.height,0,vt,mt,null)}else if(xt){zt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,_t,j.width,j.height);for(let At=0;At<6;At++){Kt=st[At].mipmaps;for(let de=0;de<Kt.length;de++){let Fe=Kt[de];b.format!==Rn?vt!==null?zt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de,0,0,Fe.width,Fe.height,vt,Fe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de,_t,Fe.width,Fe.height,0,Fe.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de,0,0,Fe.width,Fe.height,vt,mt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de,_t,Fe.width,Fe.height,0,vt,mt,Fe.data)}}}else{if(Kt=b.mipmaps,zt&&te){Kt.length>0&&Ht++;let At=$t(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,_t,At.width,At.height)}for(let At=0;At<6;At++)if(D){zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,st[At].width,st[At].height,vt,mt,st[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,st[At].width,st[At].height,0,vt,mt,st[At].data);for(let de=0;de<Kt.length;de++){let ii=Kt[de].image[At].image;zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de+1,0,0,ii.width,ii.height,vt,mt,ii.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de+1,_t,ii.width,ii.height,0,vt,mt,ii.data)}}else{zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,vt,mt,st[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,vt,mt,st[At]);for(let de=0;de<Kt.length;de++){let Fe=Kt[de];zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de+1,0,0,vt,mt,Fe.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,de+1,_t,vt,mt,Fe.image[At])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),gt.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pt(R,b,V,ut,at,gt){let St=r.convert(V.format,V.colorSpace),et=r.convert(V.type),it=S(V.internalFormat,St,et,V.normalized,V.colorSpace),xt=n.get(b),D=n.get(V);if(D.__renderTarget=b,!xt.__hasExternalTextures){let st=Math.max(1,b.width>>gt),j=Math.max(1,b.height>>gt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,gt,it,st,j,b.depth,0,St,et,null):e.texImage2D(at,gt,it,st,j,0,St,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Tt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,at,D.__webglTexture,0,xe(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,at,D.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let ut=b.depthTexture,at=ut&&ut.isDepthTexture?ut.type:null,gt=x(b.stencilBuffer,at),St=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(b),gt,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(b),gt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{let ut=b.textures;for(let at=0;at<ut.length;at++){let gt=ut[at],St=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),it=S(gt.internalFormat,St,et,gt.normalized,gt.colorSpace);Tt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(b),it,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(b),it,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,it,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(R,b,V){let ut=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(b.depthTexture);at.__renderTarget=b;let gt=ut?b.depthTexture.image[0]:b.depthTexture.image;(!at.__webglTexture||gt.width!==b.width||gt.height!==b.height)&&(gt.width=b.width,gt.height=b.height,b.depthTexture.needsUpdate=!0),ut?ht(b.depthTexture,0):bt(b.depthTexture,0);let St=at.__webglTexture,et=xe(b),it=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,xt=b.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===$n)Tt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,it,St,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,xt,it,St,0);else if(b.depthTexture.format===Qn)Tt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,it,St,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,xt,it,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(R){let b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ut=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){let at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",at)};ut.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=ut}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let ut=0;ut<6;ut++)Ut(b.__webglFramebuffer[ut],R,ut);else R.texture.mipmaps.length>0?Ut(b.__webglFramebuffer[0],R,0):Ut(b.__webglFramebuffer,R,0);else if(V){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[ut],R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,R,!1);else{let at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(R,b,V){let ut=n.get(R);b!==void 0&&pt(ut.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Qt(R)}function qe(R){let b=R.texture,V=n.get(R),ut=n.get(b);R.addEventListener("dispose",H),L(R);let at=R.textures,gt=R.isWebGLCubeRenderTarget===!0,St=at.length>1;if(St||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=b.version,a.memory.textures++),gt){V.__webglFramebuffer=[];for(let et=0;et<6;et++)if(b.mipmaps.length>0){V.__webglFramebuffer[et]=[];for(let it=0;it<b.mipmaps.length;it++)V.__webglFramebuffer[et][it]=i.createFramebuffer()}else V.__webglFramebuffer[et]=i.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let et=0;et<b.mipmaps.length;et++)V.__webglFramebuffer[et]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let et=0,it=at.length;et<it;et++){let xt=n.get(at[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Tt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let et=0;et<at.length;et++){let it=at[et];V.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[et]);let xt=r.convert(it.format,it.colorSpace),D=r.convert(it.type),st=S(it.internalFormat,xt,D,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),j=xe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,st,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,V.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),$(i.TEXTURE_CUBE_MAP,b);for(let et=0;et<6;et++)if(b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)pt(V.__webglFramebuffer[et][it],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else pt(V.__webglFramebuffer[et],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);T(b)?y(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(St){for(let et=0,it=at.length;et<it;et++){let xt=at[et],D=n.get(xt),st=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,D.__webglTexture),$(st,xt),pt(V.__webglFramebuffer,R,xt,i.COLOR_ATTACHMENT0+et,st,0),T(xt)&&y(st)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,ut.__webglTexture),$(et,b),b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)pt(V.__webglFramebuffer[it],R,b,i.COLOR_ATTACHMENT0,et,it);else pt(V.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,et,0);T(b)?y(et):b.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Qt(R)}function B(R){let b=R.textures;for(let V=0,ut=b.length;V<ut;V++){let at=b[V];if(T(at)&&at.mipmapsAutoUpdate===!0){let gt=A(R),St=n.get(at).__webglTexture;e.bindTexture(gt,St),y(gt),e.unbindTexture()}}}let nn=[];function _e(R){if(R.samples>0){if(Tt(R)===!1){let b=R.textures,V=R.width,ut=R.height,at=i.COLOR_BUFFER_BIT,gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),et=b.length>1;if(et)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let D=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,V,ut,0,0,V,ut,at,i.NEAREST),c===!0&&(nn.length=0,nn.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&nn.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let D=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function xe(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Vt(R,b){let V=R.colorSpace,ut=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==sr&&V!==dn&&(ae.getTransfer(V)===ue?(ut!==Rn||at!==rn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",V)),b}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Xt,this.resetTextureUnits=rt,this.getTextureUnits=ot,this.setTextureUnits=Pt,this.setTexture2D=bt,this.setTexture2DArray=Ct,this.setTexture3D=Nt,this.setTextureCube=ht,this.rebindTextures=Se,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Tt,this.dispose=q}function wv(i,t){function e(n,s=dn){let r,a=ae.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===Rn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===So)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Eo||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===No||n===Fr||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===Or||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ie({vertexShader:Tv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null,v=typeof XRWebGLBinding<"u",p=new _h,m={},M=e.getContextAttributes(),T=null,y=null,A=[],S=[],x=new Bt,g=null,L=null,I=new en;I.viewport=new ve;let U=new en;U.viewport=new ve;let H=[I,U],Z=new mo,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let bt=A[tt];return bt===void 0&&(bt=new Ms,A[tt]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(tt){let bt=A[tt];return bt===void 0&&(bt=new Ms,A[tt]=bt),bt.getGripSpace()},this.getHand=function(tt){let bt=A[tt];return bt===void 0&&(bt=new Ms,A[tt]=bt),bt.getHandSpace()};function J(tt){let bt=S.indexOf(tt.inputSource);if(bt===-1)return;let Ct=A[bt];Ct!==void 0&&(Ct.update(tt.inputSource,tt.frame,l||a),Ct.dispatchEvent({type:tt.type,data:tt.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let tt=0;tt<A.length;tt++){let bt=S[tt];bt!==null&&(S[tt]=null,A[tt].disconnect(bt))}N=null,q=null,p.reset();for(let tt in m)delete m[tt];if(t.setRenderTarget(T),f=null,d=null,u=null,s=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(x.width,x.height,!1),L!==null){let tt=L.camera;tt.fov=L.fov,tt.zoom=L.zoom,tt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Nt=null,ht=null;M.depth&&(ht=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=M.stencil?Qn:$n,Nt=M.stencil?Gi:An);let P={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(P),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:Rn,type:rn,depthTexture:new Kn(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ct(tt){for(let bt=0;bt<tt.removed.length;bt++){let Ct=tt.removed[bt],Nt=S.indexOf(Ct);Nt>=0&&(S[Nt]=null,A[Nt].disconnect(Ct))}for(let bt=0;bt<tt.added.length;bt++){let Ct=tt.added[bt],Nt=S.indexOf(Ct);if(Nt===-1){for(let P=0;P<A.length;P++)if(P>=S.length){S.push(Ct),Nt=P;break}else if(S[P]===null){S[P]=Ct,Nt=P;break}if(Nt===-1)break}let ht=A[Nt];ht&&ht.connect(Ct)}}function K(tt,bt){bt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(bt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let bt=tt.near,Ct=tt.far;p.texture!==null&&(p.depthNear>0&&(bt=p.depthNear),p.depthFar>0&&(Ct=p.depthFar)),Z.near=U.near=I.near=bt,Z.far=U.far=I.far=Ct,(N!==Z.near||q!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),N=Z.near,q=Z.far),Z.layers.mask=tt.layers.mask|6,I.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;let Nt=tt.parent,ht=Z.cameras;K(Z,Nt);for(let P=0;P<ht.length;P++)K(ht[P],Nt);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&tt.isPerspectiveCamera&&(L={camera:tt,fov:tt.fov,zoom:tt.zoom}),rt(tt,Z,Nt)};function rt(tt,bt,Ct){Ct===null?tt.matrix.copy(bt.matrixWorld):(tt.matrix.copy(Ct.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(bt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(bt.projectionMatrix),tt.projectionMatrixInverse.copy(bt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=vs*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(tt){c=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(tt){return m[tt]};let ot=null;function Pt(tt,bt){if(h=bt.getViewerPose(l||a),_=bt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Nt=!1;Ct.length!==Z.cameras.length&&(Z.cameras.length=0,Nt=!0);for(let z=0;z<Ct.length;z++){let $=Ct[z],nt=null;if(f!==null)nt=f.getViewport($);else{let Q=u.getViewSubImage(d,$);nt=Q.viewport,z===0&&(t.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(y))}let dt=H[z];dt===void 0&&(dt=new en,dt.layers.enable(z),dt.viewport=new ve,H[z]=dt),dt.matrix.fromArray($.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray($.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(nt.x,nt.y,nt.width,nt.height),z===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Nt===!0&&Z.cameras.push(dt)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let z=u.getDepthInformation(Ct[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(ht&&ht.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let z=0;z<Ct.length;z++){let $=Ct[z].camera;if($){let nt=m[$];nt||(nt=new xr,m[$]=nt);let dt=u.getCameraImage($);nt.sourceTexture=dt}}}}for(let Ct=0;Ct<A.length;Ct++){let Nt=S[Ct],ht=A[Ct];Nt!==null&&ht!==void 0&&ht.update(Nt,bt,l||a)}ot&&ot(tt,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),_=null}let Xt=new jd;Xt.setAnimationLoop(Pt),this.setAnimationLoop=function(tt){ot=tt},this.dispose=function(){}}},Ev=new pe,cf=new Yt;cf.set(-1,0,0,0,1,0,0,0,1);function Cv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,th(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),T=M.envMap,y=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,t,e,n){let s={},r={};function a(M,T){let y=T.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,T){let y=s[M.id];y===void 0&&(_(M),y=c(M),s[M.id]=y,M.addEventListener("dispose",p));let A=T.program;n.updateUBOMapping(M,A);let S=t.render.frame;r[M.id]!==S&&(l(M),r[M.id]=S)}function c(M){let T=i.createBuffer(),y=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(M){let T=s[M.id],y=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let S=0,x=y.length;S<x;S++){let g=y[S];if(Array.isArray(g))for(let L=0,I=g.length;L<I;L++)h(g[L],S,L,A);else h(g,S,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,y,A){if(d(M,T,y,A)===!0){let S=M.__offset,x=M.value;if(Array.isArray(x)){let g=0;for(let L=0;L<x.length;L++){let I=x[L],U=v(I,!0);u(I,M.__data,g),g+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,M.__data)}}function u(M,T,y){typeof M=="number"||typeof M=="boolean"?T[y]=M:M.isMatrix3?(T[y]=M.elements[0],T[y+1]=M.elements[1],T[y+2]=M.elements[2],T[y+3]=0,T[y+4]=M.elements[3],T[y+5]=M.elements[4],T[y+6]=M.elements[5],T[y+7]=0,T[y+8]=M.elements[6],T[y+9]=M.elements[7],T[y+10]=M.elements[8],T[y+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-y),y):M.toArray(T,y)}function d(M,T,y,A){let S=M.value,x=T+"_"+y;if(Array.isArray(S)){A[x]===void 0&&(A[x]=[]);let g=A[x],L=!1;for(let I=0;I<S.length;I++)f(S[I],g,I)===!0&&(L=!0);return L}return f(S,A,x)}function f(M,T,y){if(T[y]===void 0)return typeof M=="number"||typeof M=="boolean"?T[y]=M:ArrayBuffer.isView(M)?T[y]=M.slice():T[y]=M.clone(),!0;{let A=T[y];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function _(M){let T=M.uniforms,y=0,A=16;for(let x=0,g=T.length;x<g;x++){let L=Array.isArray(T[x])?T[x]:[T[x]];for(let I=0,U=L.length;I<U;I++){let H=L[I],Z=Array.isArray(H.value)?H.value:[H.value],N=Array.isArray(T[x])||Array.isArray(H.value),q=y;for(let X=0,ct=Z.length;X<ct;X++){let K=Z[X],rt=v(K,N),ot=y%A,Pt=ot%rt.boundary,Xt=ot+Pt;y+=Pt,Xt!==0&&A-Xt<rt.storage&&(y+=A-Xt),X===0&&(q=y),y+=rt.storage}let J=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new J((y-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}let S=y%A;return S>0&&(y+=A-S),M.__size=y,M.__cache={},this}function v(M,T){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){let T=M.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var Pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function Iv(){return Fn===null&&(Fn=new qa(Pv,16,16,_i,Cn),Fn.name="DFG_LUT",Fn.minFilter=Ge,Fn.magFilter=Ge,Fn.wrapS=gn,Fn.wrapT=gn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var al=class{constructor(t={}){let{canvas:e=bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let v=f,p=new Set([To,wo,So]),m=new Set([rn,An,Rs,Gi,Mo,bo]),M=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,S=null,x=[],g=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,H=null,Z=null,N=null,q=null;this._outputColorSpace=tn;let J=0,X=0,ct=null,K=-1,rt=null,ot=new ve,Pt=new ve,Xt=null,tt=new Jt(0),bt=0,Ct=e.width,Nt=e.height,ht=1,P=null,k=null,z=new ve(0,0,Ct,Nt),$=new ve(0,0,Ct,Nt),nt=!1,dt=new di,Q=new Ya,It=!1,Lt=!1,pt=new pe,lt=new O,Ut=new ve,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function qe(){return ct===null?ht:1}let B=n;function nn(w,F){return e.getContext(w,F)}let _e,xe,Tt,Re,Vt,$t,R,b,V,ut,at,gt,St,et,it,xt,D,st,j,vt,mt,_t,zt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",At,!1),B===null){let F="webgl2";if(B=nn(F,w),B===null)throw nn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}te()}catch(w){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),qt("WebGLRenderer: "+w.message),w}function te(){_e=new G_(B),_e.init(),mt=new wv(B,_e),xe=new I_(B,_e,t,mt),Tt=new bv(B,_e),xe.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),N=B.createFramebuffer(),q=B.createFramebuffer(),Re=new X_(B),Vt=new lv,$t=new Sv(B,_e,Tt,Vt,xe,mt,Re),R=new H_(I),b=new Ym(B),_t=new R_(B,b),V=new V_(B,b,Re,_t),ut=new Y_(B,V,b,_t,Re),st=new q_(B,xe,$t),it=new L_(Vt),at=new ov(I,R,_e,xe,_t,it),gt=new Cv(I,Vt),St=new hv,et=new gv(_e),D=new C_(I,R,Tt,ut,_,c),xt=new Mv(I,ut,xe),zt=new Rv(B,Re,xe,Tt),j=new P_(B,_e,Re),vt=new W_(B,_e,Re),Re.programs=at.programs,I.capabilities=xe,I.extensions=_e,I.properties=Vt,I.renderLists=St,I.shadowMap=xt,I.state=Tt,I.info=Re}v!==rn&&(L=new Z_(v,e.width,e.height,o,s,r));let ft=new xh(I,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(w){w!==void 0&&(ht=w,this.setSize(Ct,Nt,!1))},this.getSize=function(w){return w.set(Ct,Nt)},this.setSize=function(w,F,Y=!0){if(ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=w,Nt=F,e.width=Math.floor(w*ht),e.height=Math.floor(F*ht),Y===!0&&(e.style.width=w+"px",e.style.height=F+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Ct*ht,Nt*ht).floor()},this.setDrawingBufferSize=function(w,F,Y){Ct=w,Nt=F,ht=Y,e.width=Math.floor(w*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(v===rn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,F,Y,G){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,F,Y,G),Tt.viewport(ot.copy(z).multiplyScalar(qe()).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,F,Y,G){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,F,Y,G),Tt.scissor(Pt.copy($).multiplyScalar(qe()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){Tt.setScissorTest(nt=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,Y=!0){let G=0;if(w){let W=!1;if(ct!==null){let wt=ct.texture.format;W=p.has(wt)}if(W){let wt=ct.texture.type,Dt=m.has(wt),Mt=D.getClearColor(),Rt=D.getClearAlpha(),kt=Mt.r,Zt=Mt.g,se=Mt.b;Dt?(M[0]=kt,M[1]=Zt,M[2]=se,M[3]=Rt,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=kt,T[1]=Zt,T[2]=se,T[3]=Rt,B.clearBufferiv(B.COLOR,0,T))}else G|=B.COLOR_BUFFER_BIT}F&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),H=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),D.dispose(),St.dispose(),et.dispose(),$t.dispose(),Vt.dispose(),R.dispose(),ut.dispose(),V.dispose(),_t.dispose(),zt.dispose(),at.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",eu),ft.removeEventListener("sessionend",nu),Ci.stop()};function Ht(w){w.preventDefault(),ar("WebGLRenderer: Context Lost."),U=!0}function Kt(){ar("WebGLRenderer: Context Restored."),U=!1;let w=Re.autoReset,F=xt.enabled,Y=xt.autoUpdate,G=xt.needsUpdate,W=xt.type;te(),Re.autoReset=w,xt.enabled=F,xt.autoUpdate=Y,xt.needsUpdate=G,xt.type=W}function At(w){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){let F=w.target;F.removeEventListener("dispose",de),Fe(F)}function Fe(w){ii(w),Vt.remove(w)}function ii(w){let F=Vt.get(w).programs;F!==void 0&&(F.forEach(function(Y){at.releaseProgram(Y)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Y,G,W,wt){F===null&&(F=Qt);let Dt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=zp(w,F,Y,G,W);Tt.setMaterial(G,Dt);let Rt=Y.index,kt=1;if(G.wireframe===!0){if(Rt=V.getWireframeAttribute(Y),Rt===void 0)return;kt=2}let Zt=Y.drawRange,se=Y.attributes.position,Ft=Zt.start*kt,re=(Zt.start+Zt.count)*kt;wt!==null&&(Ft=Math.max(Ft,wt.start*kt),re=Math.min(re,(wt.start+wt.count)*kt)),Rt!==null?(Ft=Math.max(Ft,0),re=Math.min(re,Rt.count)):se!=null&&(Ft=Math.max(Ft,0),re=Math.min(re,se.count));let Ae=re-Ft;if(Ae<0||Ae===1/0)return;_t.setup(W,G,Mt,Y,Rt);let me,fe=j;if(Rt!==null&&(me=b.get(Rt),fe=vt,fe.setIndex(me)),W.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*qe()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(W.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),Tt.setLineWidth(Ye*qe()),W.isLineSegments?fe.setMode(B.LINES):W.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else W.isPoints?fe.setMode(B.POINTS):W.isSprite&&fe.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ye=W._multiDrawStarts,Ot=W._multiDrawCounts,je=W._multiDrawCount,he=Rt?b.get(Rt).bytesPerElement:1,Ri=Vt.get(G).currentProgram.getUniforms();for(let $e=0;$e<je;$e++)Ri.setValue(B,"_gl_DrawID",$e),fe.render(Ye[$e]/he,Ot[$e])}else if(W.isInstancedMesh)fe.renderInstances(Ft,Ae,W.count);else if(Y.isInstancedBufferGeometry){let Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ot=Math.min(Y.instanceCount,Ye);fe.renderInstances(Ft,Ae,Ot)}else fe.render(Ft,Ae)};function tu(w,F,Y,G){H!==null&&w.isNodeMaterial&&H.setObject(G,w),It===!0&&it.setState(w,Y,!1),w.transparent===!0&&w.side===un&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,Ws(w,F,G),w.side=gi,w.needsUpdate=!0,Ws(w,F,G),w.side=un):Ws(w,F,G)}this.compile=function(w,F,Y=null){Y===null&&(Y=w),H!==null&&H.renderStart(w,F,Y),S=et.get(Y),S.init(F),g.push(S),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),H!==null&&H.updateLights(S.state.lightsArray),Lt=this.localClippingEnabled,It=it.init(this.clippingPlanes,Lt),It===!0&&it.setGlobalState(this.clippingPlanes,F),H!==null&&xt.render(S.state.shadowsArray,Y,F);let G=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let wt=W.material;if(wt)if(Array.isArray(wt))for(let Dt=0;Dt<wt.length;Dt++){let Mt=wt[Dt];tu(Mt,Y,F,W),G.add(Mt)}else tu(wt,Y,F,W),G.add(wt)}),S=g.pop(),H!==null&&H.renderEnd(),G},this.compileAsync=function(w,F,Y=null){let G=this.compile(w,F,Y);return new Promise(W=>{function wt(){if(G.forEach(function(Dt){let Rt=Vt.get(Dt).currentProgram;(Rt===void 0||Rt.isReady())&&G.delete(Dt)}),G.size===0){W(w);return}setTimeout(wt,10)}_e.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Gl=null;function Bp(w){Gl&&Gl(w)}function eu(){Ci.stop()}function nu(){Ci.start()}let Ci=new jd;Ci.setAnimationLoop(Bp),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Gl=w,ft.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},ft.addEventListener("sessionstart",eu),ft.addEventListener("sessionend",nu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(w,F);let Y=ft.enabled===!0&&ft.isPresenting===!0,G=L!==null&&(ct===null||Y)&&L.begin(I,ct);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,F,ct),S=et.get(w,g.length),S.init(F),S.state.textureUnits=$t.getTextureUnits(),g.push(S),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Q.setFromArrayCamera(F):dt.setFromProjectionMatrix(pt,_n,F.reversedDepth),Lt=this.localClippingEnabled,It=it.init(this.clippingPlanes,Lt),A=St.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Dt=I.xr.getDepthSensingMesh();Dt!==null&&Vl(Dt,F,-1/0,I.sortObjects)}Vl(w,F,0,I.sortObjects),A.finish(),H!==null&&H.updateLights(S.state.lightsArray),I.sortObjects===!0&&A.sort(P,k),Se=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Se&&D.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),It===!0&&it.beginShadows();let W=S.state.shadowsArray;if(xt.render(W,w,F),It===!0&&it.endShadows(),(G&&L.hasRenderPass())===!1){let Dt=A.opaque,Mt=A.transmissive;if(S.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(Mt.length>0)for(let kt=0,Zt=Rt.length;kt<Zt;kt++){let se=Rt[kt];su(Dt,Mt,w,se)}Se&&D.render(w);for(let kt=0,Zt=Rt.length;kt<Zt;kt++){let se=Rt[kt];iu(A,w,se,se.viewport)}}else Mt.length>0&&su(Dt,Mt,w,F),Se&&D.render(w),iu(A,w,F)}ct!==null&&X===0&&($t.updateMultisampleRenderTarget(ct),$t.updateRenderTargetMipmap(ct)),G&&L.end(I),w.isScene===!0&&w.onAfterRender(I,w,F),_t.resetDefaultState(),K=-1,rt=null,g.pop(),g.length>0?(S=g[g.length-1],$t.setTextureUnits(S.state.textureUnits),It===!0&&it.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,H!==null&&H.renderEnd()};function Vl(w,F,Y,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){let Dt=F.isArrayCamera?Q:dt;if(!w.frustumCulled||w.intersectsFrustum(Dt)){G&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);let Mt=ut.update(w),Rt=w.material;Rt.visible&&A.push(w,Mt,Rt,Y,Ut.z,null,F)}}else if(w.isMesh||w.isLine||w.isPoints){let Dt=F.isArrayCamera?Q:dt;if(!w.frustumCulled||w.intersectsFrustum(Dt)){let Mt=ut.update(w),Rt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(Rt)){let kt=Mt.groups;for(let Zt=0,se=kt.length;Zt<se;Zt++){let Ft=kt[Zt],re=Rt[Ft.materialIndex];re&&re.visible&&A.push(w,Mt,re,Y,Ut.z,Ft,F)}}else Rt.visible&&A.push(w,Mt,Rt,Y,Ut.z,null,F)}}}let wt=w.children;for(let Dt=0,Mt=wt.length;Dt<Mt;Dt++)Vl(wt[Dt],F,Y,G)}function iu(w,F,Y,G){let{opaque:W,transmissive:wt,transparent:Dt}=w;S.setupLightsView(Y),It===!0&&it.setGlobalState(I.clippingPlanes,Y),G&&Tt.viewport(ot.copy(G)),W.length>0&&na(W,F,Y),wt.length>0&&na(wt,F,Y),Dt.length>0&&na(Dt,F,Y),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function su(w,F,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Ft=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new cn(1,1,{generateMipmaps:!0,type:Ft?Cn:rn,minFilter:Tn,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let wt=S.state.transmissionRenderTarget[G.id],Dt=G.viewport||ot;wt.setSize(Dt.z*I.transmissionResolutionScale,Dt.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),Rt=I.getActiveCubeFace(),kt=I.getActiveMipmapLevel();I.setRenderTarget(wt),I.getClearColor(tt),bt=I.getClearAlpha(),bt<1&&I.setClearColor(16777215,.5),I.clear(),Se&&D.render(Y);let Zt=I.toneMapping;I.toneMapping=Un;let se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),It===!0&&it.setGlobalState(I.clippingPlanes,G),na(w,Y,G),$t.updateMultisampleRenderTarget(wt),$t.updateRenderTargetMipmap(wt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let re=0,Ae=F.length;re<Ae;re++){let me=F[re],{object:fe,geometry:Ye,material:Ot,group:je}=me;if(Ot.side===un&&fe.layers.test(G.layers)){let he=Ot.side;Ot.side=Xe,Ot.needsUpdate=!0,ru(fe,Y,G,Ye,Ot,je),Ot.side=he,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&($t.updateMultisampleRenderTarget(wt),$t.updateRenderTargetMipmap(wt))}I.setRenderTarget(Mt,Rt,kt),I.setClearColor(tt,bt),se!==void 0&&(G.viewport=se),I.toneMapping=Zt}function na(w,F,Y){let G=F.isScene===!0?F.overrideMaterial:null;for(let W=0,wt=w.length;W<wt;W++){let Dt=w[W],{object:Mt,geometry:Rt,group:kt}=Dt,Zt=Dt.material;Zt.allowOverride===!0&&G!==null&&(Zt=G),Mt.layers.test(Y.layers)&&ru(Mt,F,Y,Rt,Zt,kt)}}function ru(w,F,Y,G,W,wt){H!==null&&W.isNodeMaterial&&H.setObject(w,W),w.onBeforeRender(I,F,Y,G,W,wt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(I,F,Y,G,w,wt),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Xe,W.needsUpdate=!0,I.renderBufferDirect(Y,F,G,W,w,wt),W.side=gi,W.needsUpdate=!0,I.renderBufferDirect(Y,F,G,W,w,wt),W.side=un):I.renderBufferDirect(Y,F,G,W,w,wt),w.onAfterRender(I,F,Y,G,W,wt)}function au(w){let F=0;for(let Y of w)Y.texture!==null&&F++;return F}function Ws(w,F,Y){F.isScene!==!0&&(F=Qt);let G=Vt.get(w),W=S.state.lights,wt=S.state.shadowsArray,Dt=W.state.version,Mt=at.getParameters(w,W.state,wt,F,Y,S.state.lightProbeGridArray),Rt=at.getProgramCacheKey(Mt),kt=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Zt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=R.get(w.envMap||G.environment,Zt),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",de),kt=new Map,G.programs=kt,G.programVariants=new Map);let se=kt.get(Rt);if(se!==void 0){if(G.currentProgram===se&&G.lightsStateVersion===Dt)return lu(w,Mt),se}else Mt.uniforms=at.getUniforms(w),H!==null&&w.isNodeMaterial&&H.build(w,Y,Mt),w.onBeforeCompile(Mt,I),se=at.acquireProgram(Mt,Rt),kt.set(Rt,se),G.uniforms=Mt.uniforms;let Ft=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=it.uniform),lu(w,Mt),G.needsLights=Gp(w),G.lightsStateVersion=Dt,G.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.sunLights.value=W.state.sun,Ft.sunLightShadows.value=W.state.sunShadow,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.sunShadowMatrix.value=W.state.sunShadowMatrix,Ft.sunShadowCascade.value=W.state.sunShadowCascade,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=au(S.state.lightProbeGridArray),G.currentProgram=se,G.uniformsList=null,se}function kp(w,F,Y,G,W){let wt=Vt.get(w),Dt=wt.currentProgram.id+","+G+","+W,Mt=wt.programVariants.get(Dt);return Mt===void 0?(Mt=Ws(w,F,Y),wt.programVariants.set(Dt,Mt)):(wt.currentProgram=Mt,wt.uniformsList=null,wt.outputColorSpace=G,wt.toneMapping=W),Mt}function ou(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ps.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function lu(w,F){let Y=Vt.get(w);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function zp(w,F,Y,G,W){F.isScene!==!0&&(F=Qt),$t.resetTextureUnits();let wt=F.fog,Dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Mt=ct===null?I.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ae.workingColorSpace,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,kt=R.get(G.envMap||Dt,Rt),Zt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!Y.morphAttributes.position,re=!!Y.morphAttributes.normal,Ae=!!Y.morphAttributes.color,me=Un;G.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(me=I.toneMapping);let fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ye=fe!==void 0?fe.length:0,Ot=Vt.get(G),je=S.state.lights;if(It===!0&&(Lt===!0||w!==rt)){let ye=w===rt&&G.id===K;it.setState(G,w,ye)}let he=!1,Ri=!1;G.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==je.state.version||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==kt||G.fog===!0&&Ot.fog!==wt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==it.numPlanes||Ot.numIntersection!==it.numIntersection)||Ot.vertexAlphas!==Zt||Ot.vertexTangents!==se||Ot.morphTargets!==Ft||Ot.morphNormals!==re||Ot.morphColors!==Ae||Ot.morphTargetsCount!==Ye||Ot.numLightProbeGrids!==au(S.state.lightProbeGridArray)?he=!0:(Ot.outputColorSpace!==Mt||Ot.toneMapping!==me)&&(Ri=!0):(he=!0,Ot.__version=G.version);let $e=Ot.currentProgram;(he===!0||Ri===!0)&&($e=Ri===!0?kp(G,F,W,Mt,me):Ws(G,F,W),H&&G.isNodeMaterial&&H.onUpdateProgram(G,$e,Ot));let ia=!1,si=!1,Pi=!1,le=$e.getUniforms(),He=Ot.uniforms;if(Tt.useProgram($e.program)&&(ia=!0,si=!0,Pi=!0),G.id!==K&&(K=G.id,si=!0),ia||rt!==w){Tt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),le.setValue(B,"projectionMatrix",w.projectionMatrix),le.setValue(B,"viewMatrix",w.matrixWorldInverse);let Oe=le.map.cameraPosition;Oe!==void 0&&Oe.setValue(B,lt.setFromMatrixPosition(w.matrixWorld)),xe.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,si=!0,Pi=!0)}if(Ot.needsLights&&(je.state.sunShadowMap.length>0&&le.setValue(B,"sunShadowMap",je.state.sunShadowMap,$t),je.state.directionalShadowMap.length>0&&le.setValue(B,"directionalShadowMap",je.state.directionalShadowMap,$t),je.state.spotShadowMap.length>0&&le.setValue(B,"spotShadowMap",je.state.spotShadowMap,$t),je.state.pointShadowMap.length>0&&le.setValue(B,"pointShadowMap",je.state.pointShadowMap,$t)),W.isSkinnedMesh){le.setOptional(B,W,"bindMatrix"),le.setOptional(B,W,"bindMatrixInverse");let ye=W.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),le.setValue(B,"boneTexture",ye.boneTexture,$t))}W.isBatchedMesh&&(le.setOptional(B,W,"batchingTexture"),le.setValue(B,"batchingTexture",W._matricesTexture,$t),le.setOptional(B,W,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",W._indirectTexture,$t),le.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",W._colorsTexture,$t));let yn=Y.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&st.update(W,Y,$e),(si||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,le.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(He.envMapIntensity.value=F.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Iv()),si){if(le.setValue(B,"toneMappingExposure",I.toneMappingExposure),Ot.needsLights&&Hp(He,Pi),wt&&G.fog===!0&&gt.refreshFogUniforms(He,wt),gt.refreshMaterialUniforms(He,G,ht,Nt,S.state.transmissionRenderTarget[w.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let ye=y,Oe=0;for(let kn of S.state.lightProbeGridArray)kn.texture!==null&&(ye.textures[Oe]=kn.texture,ye.min[Oe]=kn.boundingBox.min,ye.max[Oe]=kn.boundingBox.max,ye.resolution[Oe]=kn.resolution,Oe++);for(let kn in ye)ye[kn].length=Oe;He.probesSH.value=ye.textures,He.probesMin.value=ye.min,He.probesMax.value=ye.max,He.probesResolution.value=ye.resolution}Ps.upload(B,ou(Ot),He,$t)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ps.upload(B,ou(Ot),He,$t),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(B,"center",W.center),le.setValue(B,"modelViewMatrix",W.modelViewMatrix),le.setValue(B,"normalMatrix",W.normalMatrix),le.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ye=G.uniformsGroups;for(let Oe=0,kn=ye.length;Oe<kn;Oe++){let hu=ye[Oe];zt.update(hu,$e),zt.bind(hu,$e)}}return $e}function Hp(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Gp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(w,F,Y){let G=Vt.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=F,Vt.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let Y=Vt.get(w);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Y=0){ct=w,J=F,X=Y;let G=null,W=!1,wt=!1;if(w){let Mt=Vt.get(w);if(Mt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(B.FRAMEBUFFER,Mt.__webglFramebuffer),ot.copy(w.viewport),Pt.copy(w.scissor),Xt=w.scissorTest,Tt.viewport(ot),Tt.scissor(Pt),Tt.setScissorTest(Xt),K=-1;return}else if(Mt.__webglFramebuffer===void 0)$t.setupRenderTarget(w);else if(Mt.__hasExternalTextures)$t.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Zt=w.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&Vt.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(w)}}let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(wt=!0);let kt=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[F])?G=kt[F][Y]:G=kt[F],W=!0):w.samples>0&&$t.useMultisampledRTT(w)===!1?G=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,ot.copy(w.viewport),Pt.copy(w.scissor),Xt=w.scissorTest}else ot.copy(z).multiplyScalar(ht).floor(),Pt.copy($).multiplyScalar(ht).floor(),Xt=nt;if(Y!==0&&(G=Z),Tt.bindFramebuffer(B.FRAMEBUFFER,G)&&Tt.drawBuffers(w,G),Tt.viewport(ot),Tt.scissor(Pt),Tt.setScissorTest(Xt),W){let Mt=Vt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,Y)}else if(wt){let Mt=F;for(let Rt=0;Rt<w.textures.length;Rt++){let kt=Vt.get(w.textures[Rt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Rt,kt.__webglTexture,Y,Mt)}}else if(w!==null&&Y!==0){let Mt=Vt.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mt.__webglTexture,Y)}K=-1};function cu(w){let F=Vt.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=xe.textureFormatReadable(w.format),F.__typeReadable=xe.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,Y,G,W,wt,Dt,Mt=0){if(!(w&&w.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Rt=Rt[Dt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){Tt.bindFramebuffer(B.FRAMEBUFFER,Rt);try{let kt=w.textures[Mt],Zt=kt.format,se=kt.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let Ft=cu(kt);if(Ft.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&Y>=0&&Y<=w.height-W&&B.readPixels(F,Y,G,W,mt.convert(Zt),mt.convert(se),wt)}finally{let kt=ct!==null?Vt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,F,Y,G,W,wt,Dt,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Rt=Rt[Dt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(F>=0&&F<=w.width-G&&Y>=0&&Y<=w.height-W){Tt.bindFramebuffer(B.FRAMEBUFFER,Rt);let kt=w.textures[Mt],Zt=kt.format,se=kt.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let Ft=cu(kt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.bufferData(B.PIXEL_PACK_BUFFER,wt.byteLength,B.STREAM_READ),B.readPixels(F,Y,G,W,mt.convert(Zt),mt.convert(se),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ae=ct!==null?Vt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Ae);let me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await wd(B,me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,wt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(re),B.deleteSync(me),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(w.image.width*G),wt=Math.floor(w.image.height*G),Dt=F!==null?F.x:0,Mt=F!==null?F.y:0;$t.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Dt,Mt,W,wt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,F,Y=null,G=null,W=0,wt=0){let Dt,Mt,Rt,kt,Zt,se,Ft,re,Ae,me=w.isCompressedTexture?w.mipmaps[wt]:w.image;if(Y!==null)Dt=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,Rt=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,Zt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let le=Math.pow(2,-W);Dt=Math.floor(me.width*le),Mt=Math.floor(me.height*le),w.isDataArrayTexture?Rt=me.depth:w.isData3DTexture?Rt=Math.floor(me.depth*le):Rt=1,kt=0,Zt=0,se=0}G!==null?(Ft=G.x,re=G.y,Ae=G.z):(Ft=0,re=0,Ae=0);let fe=mt.convert(F.format),Ye=mt.convert(F.type),Ot;F.isData3DTexture?($t.setTexture3D(F,0),Ot=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($t.setTexture2DArray(F,0),Ot=B.TEXTURE_2D_ARRAY):($t.setTexture2D(F,0),Ot=B.TEXTURE_2D),Tt.activeTexture(B.TEXTURE0),Tt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Tt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Tt.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let je=Tt.getParameter(B.UNPACK_ROW_LENGTH),he=Tt.getParameter(B.UNPACK_IMAGE_HEIGHT),Ri=Tt.getParameter(B.UNPACK_SKIP_PIXELS),$e=Tt.getParameter(B.UNPACK_SKIP_ROWS),ia=Tt.getParameter(B.UNPACK_SKIP_IMAGES);Tt.pixelStorei(B.UNPACK_ROW_LENGTH,me.width),Tt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me.height),Tt.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),Tt.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),Tt.pixelStorei(B.UNPACK_SKIP_IMAGES,se);let si=w.isDataArrayTexture||w.isData3DTexture,Pi=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let le=Vt.get(w),He=Vt.get(F),yn=Vt.get(le.__renderTarget),ye=Vt.get(He.__renderTarget);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,yn.__webglFramebuffer),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Oe=0;Oe<Rt;Oe++)si&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,W,se+Oe),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(F).__webglTexture,wt,Ae+Oe)),B.blitFramebuffer(kt,Zt,kt+Dt,Zt+Mt,Ft,re,Ft+Dt,re+Mt,B.DEPTH_BUFFER_BIT,B.NEAREST);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Vt.has(w)){let le=Vt.get(w),He=Vt.get(F);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,N),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let yn=0;yn<Rt;yn++)si?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.__webglTexture,W,se+yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,le.__webglTexture,W),Pi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,wt,Ae+yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,He.__webglTexture,wt),W!==0?B.blitFramebuffer(kt,Zt,kt+Dt,Zt+Mt,Ft,re,Ft+Dt,re+Mt,B.COLOR_BUFFER_BIT,B.NEAREST):Pi?B.copyTexSubImage3D(Ot,wt,Ft,re,Ae+yn,kt,Zt,Dt,Mt):B.copyTexSubImage2D(Ot,wt,Ft,re,kt,Zt,Dt,Mt);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pi?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Ot,wt,Ft,re,Ae,Dt,Mt,Rt,fe,Ye,me.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,wt,Ft,re,Ae,Dt,Mt,Rt,fe,me.data):B.texSubImage3D(Ot,wt,Ft,re,Ae,Dt,Mt,Rt,fe,Ye,me):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,wt,Ft,re,Dt,Mt,fe,Ye,me.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,wt,Ft,re,me.width,me.height,fe,me.data):B.texSubImage2D(B.TEXTURE_2D,wt,Ft,re,Dt,Mt,fe,Ye,me);Tt.pixelStorei(B.UNPACK_ROW_LENGTH,je),Tt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he),Tt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ri),Tt.pixelStorei(B.UNPACK_SKIP_ROWS,$e),Tt.pixelStorei(B.UNPACK_SKIP_IMAGES,ia),wt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Ot),Tt.unbindTexture()},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&$t.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$t.setTextureCube(w,0):w.isData3DTexture?$t.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$t.setTexture2DArray(w,0):$t.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){J=0,X=0,ct=null,Tt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var hl=Math.PI/180,Lv=Math.PI*2,Dv=1.00015,Nv=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),vh=new Map;function Uv(i){if(vh.has(i))return vh.get(i);let t=new Uint16Array(i*i*6),e=0;for(let s=0;s<i;s++)for(let r=0;r<i;r++){let a=s*(i+1)+r,o=a+1,c=a+i+1,l=c+1;t[e++]=a,t[e++]=c,t[e++]=o,t[e++]=o,t[e++]=c,t[e++]=l}let n=new Ce(t,1);return vh.set(i,n),n}var Gr=(i,t)=>Math.atan(Math.sinh(Math.PI*(1-2*t/2**i)))/hl,cl=(i,t)=>t/2**i*360-180,ul=class{constructor({scene:t,renderer:e,ll2v:n,vs:s,fs:r,shared:a,cfg:o}){this.scene=t,this.renderer=e,this.ll2v=n,this.vs=s,this.fs=r,this.shared=a,this.url=o.url,this.zMin=o.minZoom??5;let c=o.maxZoom??14,l=typeof navigator<"u"&&navigator.connection;this.saver=!!(l&&(l.saveData||/(^|-)2g$/.test(l.effectiveType||""))),this.saver&&(c=Math.min(c,9)),this.zMax=c,this.maxTex=o.maxTiles??120,this.maxLeaves=o.maxLeaves??70,this.flightMax=o.flight??6,this.aniso=Math.min(e.capabilities.getMaxAnisotropy(),4),this.map=new Map,this.queue=[],this.inflight=0,this.uploads=[],this.show=new Set,this.dirty=!0,this.acc=1,this.sig="",this.frame=0,this.active=!1,this.busy=!1,this.stats={loaded:0,failed:0,leaves:0,shown:0,flights:0},this.enabled=!0,this._v=new O,this._p=new O,this._c=new O,this._k=Array.from({length:8},()=>new O)}key(t,e,n){return t+"/"+e+"/"+n}entry(t,e,n){let s=this.key(t,e,n),r=this.map.get(s);return r||(r={k:s,z:t,x:e,y:n,state:"idle",mesh:null,tex:null,fade:0,last:0,fails:0,retry:0,ang:0,urgent:0},this.map.set(s,r)),r}_wanted(t){let e=t.camera,n=t.cam.dist,s=this._c.copy(e.position).normalize(),r=e.position,a=this._v.copy(s).negate(),o=this.renderer.getPixelRatio(),c=t.H*o*.5/Math.tan(e.fov*hl*.5),l=t.W/t.H,h=Math.atan(Math.tan(e.fov*hl*.5)*Math.sqrt(1+l*l))*1.06+Math.abs(t.shiftY)*.9+.02,u=Math.acos(Math.min(1,1/n)),d=Math.max(n-1,2e-4),f=this._p,_=this._k,v=this.cnt={v:0,h:0,f:0},p=1.25,m,M=(T,y,A)=>{let S=Gr(T,A),x=Gr(T,A+1),g=cl(T,y),L=cl(T,y+1),I=Gr(T,A+.5),U=(g+L)/2;this.ll2v(I,U,1,f),this.ll2v(S,g,1,_[0]),this.ll2v(S,L,1,_[1]),this.ll2v(x,g,1,_[2]),this.ll2v(x,L,1,_[3]),this.ll2v(S,U,1,_[4]),this.ll2v(x,U,1,_[5]),this.ll2v(I,g,1,_[6]),this.ll2v(I,L,1,_[7]);let H=0;for(let Pt of _)H=Math.max(H,Pt.distanceTo(f));let Z=2*Math.asin(Math.min(1,H/2));if(v.v++,T>=3&&f.dot(s)<Math.cos(Math.min(Math.PI,u+Z*1.08))){v.h++;return}let N=f.x-r.x,q=f.y-r.y,J=f.z-r.z,X=Math.hypot(N,q,J)||1e-6,ct=Math.acos(Math.max(-1,Math.min(1,(N*a.x+q*a.y+J*a.z)/X))),K=X>H?Math.asin(H/X):Math.PI/2;if(T>=3&&ct-K>h){v.f++;return}let rt=Math.max(d,X-H),ot=Lv*Math.cos(I*hl)/(256*2**T)*c/rt;T<this.zMax&&ot>p?(M(T+1,y*2,A*2),M(T+1,y*2+1,A*2),M(T+1,y*2,A*2+1),M(T+1,y*2+1,A*2+1)):T>=this.zMin&&m.push({z:T,x:y,y:A,a:ct})};for(let T=0;T<5&&(m=[],M(0,0,0),!(m.length<=this.maxLeaves));T++)p*=1.5;return m}update(t,e){if(this.frame++,this._upload(),this._fade(t),this.acc+=t,!this.enabled||e.cam.dist>2.6){this.show.size&&this._hide(),this.active=!1;return}let n=[e.cam.lat.toFixed(3),e.cam.lon.toFixed(3),e.cam.dist.toFixed(4),e.W,e.H,e.shiftY.toFixed(2)].join();if(this.acc<.12||n===this.sig&&!this.dirty)return;this.acc=0,this.sig=n,this.dirty=!1;let s=performance.now(),r=this._wanted(e);this.stats.leaves=r.length;let a=new Map;for(let l of r){let h=this.entry(l.z,l.x,l.y);h.last=s,h.ang=l.a,h.urgent=0,a.set(h.k,h);let u=Math.max(this.zMin,l.z-3);if(u<l.z){let d=l.z-u,f=this.entry(u,l.x>>d,l.y>>d);f.last=s,f.ang=Math.min(a.has(f.k)?f.ang:9,l.a),f.urgent=1,a.set(f.k,f)}}let o=new Set,c=(l,h,u)=>{for(let d=l;d>=this.zMin;d--){let f=l-d,_=this.map.get(this.key(d,h>>f,u>>f));if(_&&_.state==="ready"){o.add(_),_.last=s,_.fade<1&&d>this.zMin&&c(d-1,h>>f+1,u>>f+1);return}}};for(let l of r)c(l.z,l.x,l.y);this._setShow(o),this.queue=[...a.values()].filter(l=>l.state==="idle"||l.state==="failed"&&s>=l.retry).sort((l,h)=>h.urgent-l.urgent||l.ang-h.ang);for(let l of this.map.values())l.state==="loading"&&s-l.last>1500&&l.ctrl&&l.ctrl.abort();this._pump(),this._evict(s),this.busy=this.inflight>0||this.uploads.length>0||this.queue.length>0,this.stats.shown=this.show.size,this.stats.flights=this.inflight}_setShow(t){for(let e of this.show)!t.has(e)&&e.mesh&&(e.mesh.visible=!1);for(let e of t)e.mesh&&(e.mesh.visible=!0);this.show=t}_hide(){this._setShow(new Set),this.queue=[]}_fade(t){let e=!1;for(let n of this.show)n.fade<1&&(n.fade=Math.min(1,n.fade+t/.5),n.mesh.material.uniforms.uFade.value=Nv(n.fade),n.fade>=1&&(this.dirty=!0)),n.fade>.5&&(e=!0);this.active=e}_pump(){for(;this.inflight<this.flightMax&&this.queue.length;)this._load(this.queue.shift())}async _load(t){t.state="loading",t.ctrl=new AbortController,this.inflight++;try{let e=await fetch(this.url.replace("{z}",t.z).replace("{x}",t.x).replace("{y}",t.y),{signal:t.ctrl.signal,mode:"cors",credentials:"omit"});if(!e.ok)throw new Error("http "+e.status);let n=await e.blob(),s;try{s=await createImageBitmap(n)}catch{s=await new Promise((r,a)=>{let o=new Image;o.onload=()=>r(o),o.onerror=a,o.src=URL.createObjectURL(n)})}t.bm=s,t.state="decoded",this.uploads.push(t)}catch(e){e&&e.name==="AbortError"?t.state="idle":(t.state="failed",t.fails++,t.retry=performance.now()+Math.min(12e4,8e3*2**Math.min(t.fails,4)),this.stats.failed++)}finally{t.ctrl=null,this.inflight--,this.dirty=!0,this._pump()}}_upload(){for(let t=0;t<2&&this.uploads.length;t++){let e=this.uploads.shift();if(e.state!=="decoded")continue;let n=e.bm;e.bm=null;let s=new ze(n);s.flipY=!1,s.colorSpace=dn,s.wrapS=s.wrapT=gn,s.minFilter=Tn,s.magFilter=Ge,s.anisotropy=this.aniso,s.onUpdate=()=>{s.onUpdate=null;try{n.close&&n.close()}catch{}},s.needsUpdate=!0;try{this.renderer.initTexture(s)}catch{}e.tex=s,e.mesh=this._mesh(e,s),e.state="ready",e.fade=0,this.stats.loaded++,this.dirty=!0}}_mesh(t,e){let n=t.z<=7?12:8,s=n+1,r=new Float32Array(s*s*3),a=new Float32Array(s*s*2),o=new Float32Array(s*s*2),c=this._v,l=.5/256;for(let v=0;v<=n;v++)for(let p=0;p<=n;p++){let m=p/n,M=v/n,T=v*s+p,y=Gr(t.z,t.y+M),A=cl(t.z,t.x+m);this.ll2v(y,A,Dv,c),r[T*3]=c.x,r[T*3+1]=c.y,r[T*3+2]=c.z,a[T*2]=(A+180)/360,a[T*2+1]=(y+90)/180,o[T*2]=l+m*(1-2*l),o[T*2+1]=l+M*(1-2*l)}let h=new We;h.setAttribute("position",new Ce(r,3)),h.setAttribute("uv",new Ce(a,2)),h.setAttribute("tuv",new Ce(o,2)),h.setAttribute("normal",new Ce(r.slice(),3)),h.setIndex(Uv(n)),h.computeBoundingSphere();let u=Gr(t.z,t.y+.5),d=cl(t.z,t.x+.5),f=new Ie({vertexShader:this.vs,fragmentShader:this.fs,defines:{TILE:""},uniforms:{uTile:{value:e},uFade:{value:0},uDay:this.shared.uDay,uMatch:this.shared.uMatch,uBaseUv:{value:new Bt((d+180)/360,(u+90)/180)},uBaseLod:{value:Le.clamp(12-t.z-.3,0,11)},uNight:this.shared.uNight,uPack:this.shared.uPack,uSun:this.shared.uSun,uBump:this.shared.uBump,uSmooth:this.shared.uSmooth},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),_=new Pe(h,f);return _.renderOrder=-1+t.z*.01,_.visible=!1,this.scene.add(_),_}_evict(t){let e=[...this.map.values()].filter(s=>s.state==="ready"),n=e.length-this.maxTex;if(n>0&&e.filter(s=>!this.show.has(s)&&t-s.last>2500).sort((s,r)=>s.last-r.last).slice(0,n).forEach(s=>this._drop(s)),this.map.size>this.maxTex*6)for(let s of this.map.values())s.state!=="ready"&&s.state!=="loading"&&t-s.last>3e4&&this.map.delete(s.k)}_drop(t){t.mesh&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.mesh=null),t.tex&&(t.tex.dispose(),t.tex=null),t.state="idle",t.fade=0}dispose(){for(let t of this.map.values())t.ctrl&&t.ctrl.abort(),this._drop(t);this.map.clear(),this.queue=[]}};var vn=Math.PI/180;function Ls(i,t,e=1,n=new O){let s=i*vn,r=t*vn;return n.set(e*Math.cos(s)*Math.cos(r),e*Math.sin(s),-e*Math.cos(s)*Math.sin(r))}function Fv(i=new Date){let t=Date.UTC(i.getUTCFullYear(),0,0),e=Math.floor((i.getTime()-t)/864e5),n=i.getUTCHours()+i.getUTCMinutes()/60+i.getUTCSeconds()/3600,s=2*Math.PI/365*(e-1+(n-12)/24),r=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),o=-15*(n-12+r/60);return o=(o+540)%360-180,{lat:a/vn,lon:o}}function mf(i,t){let n=(t.lat-i.lat)*vn,s=(t.lon-i.lon)*vn,r=Math.sin(n/2)**2+Math.cos(i.lat*vn)*Math.cos(t.lat*vn)*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.sqrt(r))}function uf(i,t,e,n){let s=[],r=Math.acos(Le.clamp(i.dot(t),-1,1));if(r<.001){let c=new O(0,1,0).cross(i);c.lengthSq()<1e-4&&c.set(1,0,0).cross(i),c.normalize();for(let l=0;l<=e;l++){let h=l/e,u=Math.sin(Math.PI*h);s.push(i.clone().addScaledVector(c,.045*u).normalize().multiplyScalar(1.004+.1*u))}return s}let a=Math.sin(r),o=n*Le.clamp(r/.6,.2,1);for(let c=0;c<=e;c++){let l=c/e,h=Math.sin((1-l)*r)/a,u=Math.sin(l*r)/a,d=i.clone().multiplyScalar(h).add(t.clone().multiplyScalar(u)).normalize();d.multiplyScalar(1.004+o*Math.pow(Math.sin(Math.PI*l),.85)),s.push(d)}return s}function Ds(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new gr(e);return n.colorSpace=tn,n.anisotropy=4,n}function dl(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.95),i.bezierCurveTo(t-n*1.45,e+n*.05,t-n*1.05,e-n*1,t,e-n*.38),i.bezierCurveTo(t+n*1.05,e-n*1,t+n*1.45,e+n*.05,t,e+n*.95),i.closePath()}function Ov(){let i=Ds(128,(a,o)=>{let c=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.22,"rgba(255,255,255,0.85)"),c.addColorStop(.5,"rgba(255,255,255,0.22)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,o,o)}),t=Ds(128,(a,o)=>{a.strokeStyle="rgba(255,255,255,0.95)",a.lineWidth=5,a.beginPath(),a.arc(o/2,o/2,o*.4,0,Math.PI*2),a.stroke()}),e=Ds(128,(a,o)=>{a.shadowColor="rgba(255,90,150,0.85)",a.shadowBlur=16;let c=a.createLinearGradient(o*.2,o*.2,o*.8,o*.85);c.addColorStop(0,"#ffc9de"),c.addColorStop(.45,"#ff6fa8"),c.addColorStop(1,"#e8266f"),a.fillStyle=c,dl(a,o/2,o*.5,o*.3),a.fill(),a.shadowBlur=0,a.lineWidth=2,a.strokeStyle="rgba(255,255,255,0.4)",dl(a,o/2,o*.5,o*.3),a.stroke(),a.save(),dl(a,o/2,o*.5,o*.3),a.clip();let l=a.createLinearGradient(0,o*.2,0,o*.55);l.addColorStop(0,"rgba(255,255,255,0.7)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.beginPath(),a.ellipse(o*.5,o*.34,o*.27,o*.15,0,0,Math.PI*2),a.fill(),a.restore()}),n=Ds(64,(a,o)=>{a.translate(o/2,o/2);let c=a.createRadialGradient(0,0,0,0,0,o/2);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.16,"rgba(255,255,255,0.6)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.beginPath(),a.arc(0,0,o/2,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,255,255,0.95)";for(let l of[0,Math.PI/2])a.save(),a.rotate(l),a.beginPath(),a.moveTo(-o*.49,0),a.quadraticCurveTo(0,-o*.04,o*.49,0),a.quadraticCurveTo(0,o*.04,-o*.49,0),a.fill(),a.restore()}),s=Ds(256,(a,o)=>{a.translate(o/2,o/2),a.rotate(-.5),a.scale(o/256,o/256);let c=a.createRadialGradient(0,0,10,0,0,128);c.addColorStop(0,"rgba(140,215,255,0.5)"),c.addColorStop(.55,"rgba(140,215,255,0.12)"),c.addColorStop(1,"rgba(140,215,255,0)"),a.fillStyle=c,a.fillRect(-128,-128,256,256);let l=()=>{a.beginPath(),a.moveTo(-13,-70),a.lineTo(-13,-46),a.bezierCurveTo(-13,-26,-42,-22,-42,4),a.lineTo(-42,70),a.quadraticCurveTo(-42,90,-22,90),a.lineTo(22,90),a.quadraticCurveTo(42,90,42,70),a.lineTo(42,4),a.bezierCurveTo(42,-22,13,-26,13,-46),a.lineTo(13,-70),a.closePath()},h=a.createLinearGradient(-42,0,42,0);h.addColorStop(0,"rgba(190,235,255,0.34)"),h.addColorStop(.5,"rgba(190,235,255,0.10)"),h.addColorStop(1,"rgba(190,235,255,0.26)"),a.save(),a.rotate(.14);let u=(_,v,p,m,M)=>{a.beginPath(),a.moveTo(_+M,v),a.arcTo(_+p,v,_+p,v+m,M),a.arcTo(_+p,v+m,_,v+m,M),a.arcTo(_,v+m,_,v,M),a.arcTo(_,v,_+p,v,M),a.closePath()},d=a.createLinearGradient(0,-20,0,70);d.addColorStop(0,"#fffaf0"),d.addColorStop(1,"#f3e1c3"),a.fillStyle=d,u(-13,-22,26,88,8),a.fill(),a.strokeStyle="rgba(160,120,70,0.55)",a.lineWidth=1.6,u(-13,-22,26,88,8),a.stroke(),a.fillStyle="#ff6fa5",a.fillRect(-14,14,28,7),a.fillStyle="#ff8cc0",dl(a,0,-2,7),a.fill(),a.restore(),a.fillStyle=h,l(),a.fill(),a.lineJoin="round",a.lineWidth=4,a.strokeStyle="rgba(255,255,255,0.95)",l(),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-16,-72),a.lineTo(16,-72),a.stroke();let f=a.createLinearGradient(0,-98,0,-72);f.addColorStop(0,"#e6b97c"),f.addColorStop(1,"#b98750"),a.fillStyle=f,u(-11,-98,22,28,6),a.fill(),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=2,u(-11,-98,22,28,6),a.stroke(),a.strokeStyle="rgba(255,255,255,0.65)",a.lineWidth=5,a.lineCap="round",a.beginPath(),a.moveTo(-31,14),a.lineTo(-31,62),a.stroke(),a.lineWidth=3,a.beginPath(),a.moveTo(-31,4),a.lineTo(-31,6),a.stroke()}),r=Ds(64,(a,o)=>{let c=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,o,o)});return{glow:i,ring:t,heart:e,bottle:s,spark:r,star:n}}var yh=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
#ifdef TILE
attribute vec2 tuv; varying vec2 vT;
#endif
void main(){
  vUv = uv;
#ifdef TILE
  vT = tuv;
#endif
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vP = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,df=`
uniform sampler2D uDay; uniform sampler2D uNight; uniform sampler2D uPack;
uniform vec3 uSun; uniform float uBump; uniform float uSmooth;
#ifdef TILE
uniform sampler2D uTile; uniform float uFade; uniform float uMatch; uniform vec2 uBaseUv; uniform float uBaseLod; varying vec2 vT;
#endif
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 srgb(vec3 c){ return pow(max(c, vec3(0.0)), vec3(1.0/2.2)); }
// the night map is only 2048 px wide: up close, soften it into round glows instead of square blocks
vec3 nightLights(vec2 uv){
  vec3 lo = texture2D(uNight, uv).rgb;
  if (uSmooth < 0.01) return lo;
  vec2 sz = vec2(2048.0, 1024.0), p = uv * sz - 0.5, f = fract(p), i = floor(p);
  vec2 w0 = (1.0 - f) * (1.0 - f) * (1.0 - f) / 6.0;
  vec2 w1 = (4.0 - 6.0 * f * f + 3.0 * f * f * f) / 6.0;
  vec2 w3 = f * f * f / 6.0;
  vec2 w2 = 1.0 - w0 - w1 - w3;
  vec2 s0 = w0 + w1, s1 = w2 + w3;
  vec2 f0 = (i - 0.5 + w1 / s0) / sz, f1 = (i + 1.5 + w3 / s1) / sz;
  vec3 hi = texture2D(uNight, vec2(f0.x, f0.y)).rgb * s0.x * s0.y + texture2D(uNight, vec2(f1.x, f0.y)).rgb * s1.x * s0.y
          + texture2D(uNight, vec2(f0.x, f1.y)).rgb * s0.x * s1.y + texture2D(uNight, vec2(f1.x, f1.y)).rgb * s1.x * s1.y;
  return mix(lo, hi, uSmooth);
}
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
  float lightMod = 1.0, closeAmt = 0.0;
#ifdef TILE
  vec3 tileRGB = texture2D(uTile, vT).rgb;
  vec3 albedo = lin(tileRGB);
  {
    // night: the coarse city-light blobs borrow their structure from the daytime picture (streets and built-up areas glow, forest stays dark)
    const vec3 LW = vec3(0.30, 0.59, 0.11);
    vec2 o = vec2(5.0 / 256.0);     // local mean from four taps around the pixel: no per-tile blocks, so tile borders stay invisible
    float lum = dot(tileRGB, LW);
    float loc = 0.25 * (dot(texture2D(uTile, vT + vec2(o.x, o.y)).rgb, LW) + dot(texture2D(uTile, vT + vec2(-o.x, o.y)).rgb, LW)
                      + dot(texture2D(uTile, vT + vec2(o.x, -o.y)).rgb, LW) + dot(texture2D(uTile, vT + vec2(-o.x, -o.y)).rgb, LW));
    float st = clamp(0.5 + 1.1 * (lum - loc) / (loc + 0.08), 0.0, 1.0);
    closeAmt = 1.0 - uMatch;
    lightMod = mix(1.0, 0.08 + 1.9 * st * st, closeAmt);         // gentle: streets read as a soft texture, never a harsh engraving
  }
  {
    // far out, nudge each tile's overall colour toward the base map's (same place, same footprint) so tiles blend in without a visible edge;
    // up close the imagery keeps its own colours
    vec3 tm = lin(textureLod(uTile, vec2(0.5), 8.0).rgb), bm = lin(textureLod(uDay, uBaseUv, uBaseLod).rgb);
    vec3 gain = clamp(bm / max(tm, vec3(0.004)), vec3(0.45), vec3(2.6));
    albedo *= mix(vec3(1.0), gain, uMatch);
  }
#else
  vec3 albedo = lin(texture2D(uDay, vUv).rgb);
#endif
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
  vec3 city = lin(nightLights(vUv)) * lightMod;
  float nightAmt = 1.0 - smoothstep(-0.20, 0.06, ndl0);
  vec3 cityC = city * vec3(1.0, 0.76, 0.46) * mix(2.6, 0.3, closeAmt) * nightAmt * (1.0 - cl * 0.72);
  cityC = mix(cityC, cityC / (1.0 + cityC * 1.0), closeAmt);   // up close a big city must not burn out the whole screen
  col += cityC;
#ifdef TILE
  col += albedo * vec3(0.30, 0.45, 1.0) * 0.050 * nightAmt;
#else
  col += albedo * vec3(0.30, 0.45, 1.0) * 0.010 * nightAmt;
#endif

  // warm twilight band
  float tw = exp(-pow(ndl0 / 0.17, 2.0));
  col *= mix(vec3(1.0), vec3(1.38, 0.88, 0.66), tw * 0.65);

  // thin atmosphere on the limb
  float fres = pow(1.0 - max(dot(N0, V), 0.0), 3.0);
  float lt = smoothstep(-0.25, 0.45, ndl0);
  vec3 atm = mix(vec3(0.02, 0.05, 0.14), vec3(0.28, 0.56, 1.0), lt);
  col += atm * fres * (0.25 + 1.0 * lt);

  col = col / (1.0 + col * 0.18);
#ifdef TILE
  gl_FragColor = vec4(srgb(col), uFade);
#else
  gl_FragColor = vec4(srgb(col), 1.0);
#endif
}`,Bv=`
uniform sampler2D uPack; uniform vec3 uSun; uniform float uShift; uniform float uFade;
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
  a = clamp(a + fres * 0.08, 0.0, 1.0) * uFade;
  gl_FragColor = vec4(pow(col, vec3(0.4545)), a);
}`,kv=`
varying vec3 vP;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,zv=`
uniform vec3 uSun; uniform float uInner; uniform float uOuter; uniform float uFade;
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
  gl_FragColor = vec4(col * g * (0.30 + 1.0 * lit) * uFade, 1.0);
}`,Hv=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,Gv=`
uniform float uTime; uniform float uReveal; uniform float uFade; uniform vec3 uA; uniform vec3 uB;
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
  gl_FragColor = vec4(col * rim * ends * rv * uFade, 1.0);
}`,Vv=`
varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Wv=`
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
}`,Xv=`
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,qv=`
uniform float uTime; uniform float uAppear; uniform float uBlink; uniform vec3 uColor;
varying vec2 vUv; varying vec3 vN; varying vec3 vP;
void main(){
  vec3 V = normalize(cameraPosition - vP);
  float rim = pow(abs(dot(normalize(vN), V)), 1.7);
  float h = vUv.y;
  float a = pow(1.0 - h, 2.1) * rim * 0.42 * (0.86 + 0.14 * sin(uTime * 2.2 + h * 9.0)) * uAppear * (1.0 + uBlink * 1.8);
  vec3 col = mix(uColor, vec3(1.0), (1.0 - h) * 0.45);
  gl_FragColor = vec4(col * a, 1.0);
}`,ff=i=>.5-.5*Math.cos(Math.PI*i),Mh=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),pf=i=>1-Math.pow(1-i,5),ti=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),Yv=i=>{let t=(i%1+1)%1,e=n=>Math.exp(-Math.pow((t-n)/.05,2));return Math.min(1,e(.1)+e(.34))},fl=class{constructor(t,{onPick:e}={}){this.canvas=t,this.onPick=e||(()=>{}),this.renderer=new al({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene=new cr,this.scene.background=new Jt(66058),this.camera=new en(50,1,.05,200),this.cam={lat:70,lon:-40,dist:3},this.vel={lon:0,lat:0,dist:0},this.tween=null,this.sunDir=new O(1,0,0),this.fx=[],this.cities={},this.alerts=new Set,this.blink=0,this.arcs=[],this.shiftY=0,this.shiftTarget=0,this.selected=null,this.t=0,this.onFrame=null,this.minDist=1.004,this.maxDist=8,this.W=1,this.H=1,this.tex=Ov(),this._bindInput(),this.resize()}async init(t="assets/",e){let n=new ws;n.onProgress=(h,u,d)=>e&&e(u/d);let s=new wr(n),r=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),a=h=>new Promise((u,d)=>s.load(t+h,f=>{f.wrapS=ms,f.anisotropy=r,f.colorSpace=dn,u(f)},void 0,d)),[o,c,l]=await Promise.all([a("earth_day_4096.jpg"),a("earth_night_2048.jpg"),a("earth_pack_4096.jpg")]);this.texDay=o,this.texNight=c,this.texPack=l,this._buildScene(),this._updateSun()}_buildScene(){let t={value:this.sunDir},e=new Bi(1,160,96);this.earthMat=new Ie({vertexShader:yh,fragmentShader:df,uniforms:{uDay:{value:this.texDay},uNight:{value:this.texNight},uPack:{value:this.texPack},uSun:t,uBump:{value:.0065},uSmooth:{value:0},uMatch:{value:1}}}),this.earth=new Pe(e,this.earthMat),this.scene.add(this.earth),this.cloudMat=new Ie({vertexShader:yh,fragmentShader:Bv,transparent:!0,depthWrite:!1,uniforms:{uPack:{value:this.texPack},uSun:t,uShift:{value:0},uFade:{value:1}}}),this.clouds=new Pe(new Bi(1.011,128,80),this.cloudMat),this.clouds.renderOrder=2,this.scene.add(this.clouds),this.atmoMat=new Ie({vertexShader:kv,fragmentShader:zv,side:Xe,blending:sn,transparent:!0,depthWrite:!1,uniforms:{uSun:t,uInner:{value:.995},uOuter:{value:1.16},uFade:{value:1}}}),this.atmo=new Pe(new Bi(1.17,96,64),this.atmoMat),this.scene.add(this.atmo);let n=2600,s=new Float32Array(n*3),r=new Float32Array(n*3),a=12345,o=()=>(a=a*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let h=o()*2-1,u=o()*Math.PI*2,d=Math.sqrt(1-h*h),f=60+o()*20;s.set([d*Math.cos(u)*f,h*f,d*Math.sin(u)*f],l*3);let _=.25+Math.pow(o(),3)*.75,v=o();r.set([_*(v>.8?1:.85+v*.15),_*(v>.8?.85:.9),_*(v<.3?1:.88)],l*3)}let c=new We;c.setAttribute("position",new Ce(s,3)),c.setAttribute("color",new Ce(r,3)),this.stars=new pr(c,new bs({size:3.4*Math.min(window.devicePixelRatio||1,2),map:this.tex.spark,alphaTest:.02,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1})),this.scene.add(this.stars),this.sunLight=new Cr(16773341,2.4),this.scene.add(this.sunLight),this.scene.add(new Rr(8360918,1.1))}enableTiles(t,e){if(!t||!t.url||this.tiles||!this.earth)return;let n=this.earthMat.uniforms;this.tiles=new ul({scene:this.scene,renderer:this.renderer,ll2v:Ls,vs:yh,fs:df,cfg:t,shared:{uDay:n.uDay,uNight:n.uNight,uPack:n.uPack,uSun:n.uSun,uBump:n.uBump,uSmooth:n.uSmooth,uMatch:n.uMatch}}),this._tilesCb=e||null,this._tilesOn=!1}_makeCity(t,e,n){let s=new qn,r=Ls(e.lat,e.lon,1).normalize();s.position.copy(r).multiplyScalar(1.0035),s.quaternion.setFromUnitVectors(new O(0,1,0),r);let a=new Jt(e.color||"#ffffff"),o={uTime:{value:0},uSel:{value:0},uAppear:{value:0},uPulseT:{value:9},uPhase:{value:Math.random()},uBlink:{value:0},uColor:{value:a.clone().convertLinearToSRGB()}},c=new Ie({vertexShader:Vv,fragmentShader:Wv,uniforms:o,transparent:!0,depthWrite:!1,blending:sn,side:un}),l=new Pe(new Oi(2,2).rotateX(-Math.PI/2),c);l.renderOrder=4,s.add(l);let h={uTime:o.uTime,uAppear:o.uAppear,uBlink:o.uBlink,uColor:o.uColor},u=new Ie({vertexShader:Xv,fragmentShader:qv,uniforms:h,transparent:!0,depthWrite:!1,blending:sn,side:un}),d=new Pe(new vr(.012,.05,1.05,28,1,!0).translate(0,.525,0),u);d.renderOrder=5,s.add(d),this.scene.add(s),this.cities[t]={key:t,def:e,group:s,n:r,pos:Ls(e.lat,e.lon,1.006),mat:c,u:o,color:a,selV:0,pulseT:9,born:n}}_dropCity(t){let e=this.cities[t];e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}),delete this.cities[t],this.selected===t&&(this.selected=null))}setCities(t){for(let n of Object.keys(this.cities))this._dropCity(n);let e=0;for(let[n,s]of Object.entries(t))this._makeCity(n,s,this.t+1.5+e++*.45)}syncCities(t){for(let e of Object.keys(this.cities))t[e]||this._dropCity(e);for(let[e,n]of Object.entries(t)){let s=this.cities[e];s&&Math.abs(s.def.lat-n.lat)<1e-4&&Math.abs(s.def.lon-n.lon)<1e-4||(s&&this._dropCity(e),this._makeCity(e,n,this.t+.2),this.cities[e].pulseT=0)}}setArc(t,e){this.arcs.forEach(h=>{this.scene.remove(h.mesh),h.mesh.geometry.dispose()}),this.arcs=[];let n=this.cities[t],s=this.cities[e];if(!n||!s)return;let r=uf(n.pos.clone().normalize(),s.pos.clone().normalize(),140,.2),a=new Fi(r),o=h=>new Jt(h).convertLinearToSRGB(),c=new Ie({vertexShader:Hv,fragmentShader:Gv,transparent:!0,depthWrite:!1,blending:sn,uniforms:{uTime:{value:0},uReveal:{value:0},uFade:{value:1},uA:{value:o("#6ad7ff")},uB:{value:o("#ff8cc0")}}}),l=new Pe(new br(a,240,.0026,6,!1),c);this.scene.add(l),this.arcs.push({mesh:l,curve:a,a:t,b:e,mat:c,t0:this.t+(this.t<5?1.2:.45)}),this.arcInfo={a:t,b:e,curve:a}}_arcCurve(t,e){if(this.arcInfo&&(this.arcInfo.a===t&&this.arcInfo.b===e||this.arcInfo.a===e&&this.arcInfo.b===t)){let a=this.arcInfo.curve,o=this.arcInfo.a!==t;return c=>a.getPointAt(o?1-c:c)}let n=this.cities[t],s=this.cities[e],r=new Fi(uf(n.pos.clone().normalize(),s.pos.clone().normalize(),60,.12));return a=>r.getPointAt(a)}setSelected(t){this.selected=t}pulseCity(t){let e=this.cities[t];e&&(e.pulseT=0)}_vis(t){let e=this.camera.position,n=t.clone().sub(e),s=n.length()||1;n.divideScalar(s);let r=Le.clamp(-e.dot(n),0,s);return Le.smoothstep(e.clone().addScaledVector(n,r).length(),.985,1.004)}_px(){return .55+this.cam.dist*.25}_sparkle(t,e,n,s,r=16765670,a="star",o=2.2){let c=new Jn(new Nn({map:this.tex[a],color:r,transparent:!0,depthWrite:!1,depthTest:!1,blending:sn,opacity:0}));c.renderOrder=30,c.position.copy(t),this.scene.add(c);let l=t.clone(),h=e.clone(),u=Math.random()*6,d=0;this.fx.push({update:f=>{d+=f;let _=d/n;return _>=1?(this.scene.remove(c),c.material.dispose(),!1):(h.multiplyScalar(Math.exp(-o*f)),l.addScaledVector(h,f),c.position.copy(l),c.material.opacity=Math.pow(1-_,1.4)*Math.min(1,_*9)*(.72+.28*Math.sin(d*17+u))*this._vis(l),c.scale.setScalar(s*this._px()*(.55+.45*Math.sin(Math.min(1,_*1.7)*Math.PI))),c.material.rotation=d*1.4+u,!0)}})}launchHearts(t,e,n=1){if(!this.cities[t]||!this.cities[e])return;let s=this._arcCurve(t,e),r=Math.min(n,8),a=16;for(let o=0;o<r;o++){let c=o*.3,l=3.8+Math.random()*.5,h=(m,M,T)=>{let y=new Jn(new Nn({map:m,color:M,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,blending:T}));return y.renderOrder=20,this.scene.add(y),y},u=h(this.tex.glow,16740261,sn),d=Array.from({length:a},(m,M)=>h(this.tex.glow,new Jt(16736158).lerp(new Jt(16761498),M/a),sn)),f=h(this.tex.heart,16777215,jn);f.renderOrder=22;let _=-c,v=0,p=!1;this.fx.push({update:m=>{if(_+=m,_<0)return!0;p||(p=!0,this.pulseCity(t));let M=Math.min(_/l,1),T=ff(M),y=s(T),A=this._vis(y),S=Mh(Math.min(1,_/.5)),x=1-.75*ti((M-.93)/.07),g=1+.11*Math.pow(Math.max(0,Math.sin(_*6.2)),3),L=.062*this._px()*.85*S*x*g;for(f.position.copy(y),f.scale.setScalar(L),f.material.opacity=Math.min(1,M*14)*(M>.97?(1-M)/.03:1)*A,f.material.rotation=Math.sin(_*2.3+o)*.2,u.position.copy(y),u.scale.setScalar(L*(2.9+.5*Math.sin(_*6.2))),u.material.opacity=f.material.opacity*.5,d.forEach((I,U)=>{I.position.copy(s(Math.max(0,T-(U+1)*.0075))),I.scale.setScalar(L*(1.05-U*.052)),I.material.opacity=f.material.opacity*Math.pow(1-U/a,2)*.5*this._vis(I.position)}),v+=m;v>.05&&M<.97;){v-=.05;let I=s(Math.min(1,T+.01)).sub(y).normalize(),U=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.05);this._sparkle(y,I.multiplyScalar(-.03).add(U),.9+Math.random()*.7,.02+Math.random()*.02,Math.random()<.5?16765670:16773321)}return M>=1?([f,u,...d].forEach(I=>{this.scene.remove(I),I.material.dispose()}),this._burst(e),!1):!0}})}}_burst(t){let e=this.cities[t];if(!e)return;this.pulseCity(t);let n=e.pos.clone().normalize(),s=new Jn(new Nn({map:this.tex.glow,color:16751812,transparent:!0,depthWrite:!1,depthTest:!1,blending:sn,opacity:0}));s.renderOrder=28,s.position.copy(e.pos).addScaledVector(n,.012),this.scene.add(s);let r=0;this.fx.push({update:a=>{r+=a;let o=r/.8;return o>=1?(this.scene.remove(s),s.material.dispose(),!1):(s.scale.setScalar(this._px()*(.1+.2*(1-Math.pow(1-o,3)))),s.material.opacity=Math.pow(1-o,2)*.9*this._vis(s.position),!0)}});for(let a=0;a<22;a++){let o=Math.random()*Math.PI*2,l=new O(Math.cos(o),Math.sin(o),.3).cross(n).normalize().multiplyScalar(.03+Math.random()*.1).addScaledVector(n,.03+Math.random()*.09);this._sparkle(e.pos.clone().addScaledVector(n,.01),l,1+Math.random()*.8,.018+Math.random()*.026,Math.random()<.6?16761564:16773839)}for(let a=0;a<5;a++){let o=new Jn(new Nn({map:this.tex.heart,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));o.renderOrder=26,this.scene.add(o);let c=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).cross(n).normalize().multiplyScalar((Math.random()-.5)*.05),l=a*.12+Math.random()*.1,h=1.9+Math.random()*.5,u=Math.random()*6,d=-l;this.fx.push({update:f=>{if(d+=f,d<0)return!0;let _=d/h;if(_>=1)return this.scene.remove(o),o.material.dispose(),!1;let v=1-Math.pow(1-_,2.2);return o.position.copy(e.pos).addScaledVector(n,.02+v*.12).addScaledVector(c,v).addScaledVector(c.clone().cross(n),Math.sin(d*3+u)*.006),o.scale.setScalar(.03*this._px()*Mh(Math.min(1,d/.35))*(1-.3*_)),o.material.opacity=Math.min(1,_*8)*Math.pow(1-_,1.2)*this._vis(o.position),o.material.rotation=Math.sin(d*2+u)*.25,!0}})}}launchBottle(t,e,n){if(!this.cities[t]||!this.cities[e]){n&&n();return}let s=this._arcCurve(t,e),r=14,a=7.5,o=(_,v,p,m)=>{let M=new Jn(new Nn({map:_,color:v,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,blending:p}));return M.renderOrder=m,this.scene.add(M),M},c=o(this.tex.glow,9428223,sn,20),l=Array.from({length:r},(_,v)=>o(this.tex.glow,new Jt(8049407).lerp(new Jt(16765158),v/r),sn,20)),h=o(this.tex.bottle,16777215,jn,23),u=0,d=0,f=!1;this.fx.push({update:_=>{u+=_;let v=Math.min(u/a,1),p=ff(v);f||(f=!0,this.pulseCity(t));let m=s(p);m.multiplyScalar(1-.1*Math.sin(v*Math.PI));let M=this._vis(m),T=Mh(Math.min(1,u/.6)),y=1-.7*ti((v-.93)/.07),A=.078*this._px()*T*y;for(h.position.copy(m),h.scale.setScalar(A),h.material.opacity=Math.min(1,v*12)*(v>.97?(1-v)/.03:1)*M,h.material.rotation=Math.sin(u*1.9)*.16,c.position.copy(m),c.scale.setScalar(A*(2.6+.35*Math.sin(u*3.1))),c.material.opacity=h.material.opacity*.42,l.forEach((S,x)=>{S.position.copy(s(Math.max(0,p-(x+1)*.0065))),S.scale.setScalar(A*(.9-x*.05)),S.material.opacity=h.material.opacity*Math.pow(1-x/r,2)*.42*this._vis(S.position)}),d+=_;d>.06&&v<.97;)d-=.06,this._sparkle(m,new O,1.1,.026,10478591,"glow",0);return v>=1?([h,c,...l].forEach(S=>{this.scene.remove(S),S.material.dispose()}),this._burst(e),n&&n(),!1):!0}})}setAlert(t,e){e?this.alerts.add(t):this.alerts.delete(t)}_updateSun(){let t=Fv(this.simDate||new Date);this.sunSub=t,Ls(t.lat,t.lon,1,this.sunDir),this.sunLight&&this.sunLight.position.copy(this.sunDir).multiplyScalar(10)}setSimDate(t){this.simDate=t,this._updateSun()}fitDist(){let t=this.W/this.H,e=this.camera.fov*vn,n=t>=1?e/2:Math.atan(Math.tan(e/2)*t);return 1/Math.sin(n*.97)}_bothTarget(){let t=this.cities.lesha,e=this.cities.ari,n=new O;t&&e?n=t.pos.clone().normalize().add(e.pos.clone().normalize()).normalize():n=Ls(60,0);let s=Math.asin(n.y)/vn,r=Math.atan2(-n.z,n.x)/vn;return{lat:Math.min(s+6,80),lon:r,dist:this.fitDist()*.93}}viewBoth(t=1600){this.flyTo(this._bothTarget(),t)}intro(t=4200){let e=this._bothTarget();this.cam={lat:e.lat-22,lon:e.lon-100,dist:Math.min(this.maxDist,e.dist*2.6)},this.flyTo(e,t,"out")}focusCity(t,e=1400){let n=this.cities[t];if(!n)return;let s=n.pos.clone().normalize();this.flyTo({lat:Math.asin(s.y)/vn,lon:Math.atan2(-s.z,s.x)/vn,dist:Math.max(1.53,this.fitDist()*.62)},e)}flyTo(t,e=1400,n){this.vel.lon=this.vel.lat=this.vel.dist=0;let s=t.lon-this.cam.lon;s=(s+540)%360-180,this.tween={t:0,dur:e/1e3,ease:n,from:{...this.cam},to:{lat:t.lat,lon:this.cam.lon+s,dist:t.dist}},e<=0&&(this.cam={...this.tween.to},this.tween=null)}setSheetOpen(t){this.shiftTarget=t?-.2:0}resize(){let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.maxDist=Math.max(6,this.fitDist()*1.9),this.camera.aspect=t/e,this._applyView()}_applyView(){let t=Math.round(this.shiftY*this.H);t!==0?this.camera.setViewOffset(this.W,this.H,0,-t,this.W,this.H):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}_bindInput(){let t=this.canvas;t.style.touchAction="none";let e=new Map,n=0,s=0,r=0,a=0,o=0,c=0;t.addEventListener("pointerdown",h=>{if(t.setPointerCapture(h.pointerId),this._touching=!0,e.set(h.pointerId,{x:h.clientX,y:h.clientY}),e.size===1&&(n=0,s=performance.now(),r=h.clientX,a=h.clientY),e.size===2){let[u,d]=[...e.values()];o=Math.hypot(u.x-d.x,u.y-d.y),c=this.cam.dist}this.tween=null,this.vel.lon=this.vel.lat=0}),t.addEventListener("pointermove",h=>{let u=e.get(h.pointerId);if(!u)return;let d=h.clientX-u.x,f=h.clientY-u.y;if(u.x=h.clientX,u.y=h.clientY,e.size===1){n+=Math.abs(d)+Math.abs(f);let _=(this.cam.dist-1)*.072,v=performance.now(),p=Math.max((v-(this._lastMove||v-16))/1e3,.008);this._lastMove=v,this.cam.lon-=d*_,this.cam.lat=Le.clamp(this.cam.lat+f*_,-84,84),this.vel.lon=Le.lerp(this.vel.lon,-d*_/p,.5),this.vel.lat=Le.lerp(this.vel.lat,f*_/p,.5)}else if(e.size===2){let[_,v]=[...e.values()],p=Math.hypot(_.x-v.x,_.y-v.y);o>0&&(this.cam.dist=Le.clamp(1+(c-1)*Math.pow(o/p,1.35),this.minDist,this.maxDist)),n+=10}});let l=h=>{let u=e.delete(h.pointerId);if(e.size===0&&(this._touching=!1),!!u&&(e.size===0&&n<8&&performance.now()-s<450&&this._tap(h.clientX,h.clientY),e.size===0)){let d=Math.max(.02,Math.min(1,(this.cam.dist-1)/2));this.vel.lon=Le.clamp(this.vel.lon,-90*d,90*d),this.vel.lat=Le.clamp(this.vel.lat,-60*d,60*d)}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l),t.addEventListener("wheel",h=>{h.preventDefault(),this.tween=null,this._inputAt=performance.now(),this.cam.dist=Le.clamp(1+(this.cam.dist-1)*Math.exp(h.deltaY*.0012),this.minDist,this.maxDist)},{passive:!1}),window.addEventListener("resize",()=>this.resize())}_tap(t,e){let n=this.canvas.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=null,o=1e9;for(let[c,l]of Object.entries(this.cities)){let h=this.screenOf(l.pos);if(!h.visible)continue;let u=Math.hypot(h.x-s,h.y-r);u<38&&u<o&&(o=u,a={type:"city",id:c})}this.onPick(a)}screenOf(t){let e=t.clone().project(this.camera),n=(e.x*.5+.5)*this.W,s=(-e.y*.5+.5)*this.H,r=this.camera.position.clone().sub(t).normalize(),a=t.clone().normalize().dot(r)>.04;return{x:n,y:s,visible:a&&e.z<1&&e.z>-1}}cityScreen(t){let e=this.cities[t];return e?this.screenOf(e.pos):{x:0,y:0,visible:!1}}frame(t){if(t=Math.max(0,Math.min(t,.05)),this.t+=t,this.blink=Yv(this.t),this.tween){let s=this.tween;s.t+=t;let r=Math.min(s.t/s.dur,1),a=s.ease==="out"?pf(r):r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;this.cam.lat=s.from.lat+(s.to.lat-s.from.lat)*a,this.cam.lon=s.from.lon+(s.to.lon-s.from.lon)*a,this.cam.dist=s.from.dist+(s.to.dist-s.from.dist)*a,r>=1&&(this.tween=null)}else{this.cam.lon+=this.vel.lon*t,this.cam.lat=Le.clamp(this.cam.lat+this.vel.lat*t,-84,84);let s=Math.exp(-t*3.2);this.vel.lon*=s,this.vel.lat*=s}this.cam.dist=Le.clamp(this.cam.dist,this.minDist,this.maxDist),Math.abs(this.shiftY-this.shiftTarget)>5e-4&&(this.shiftY+=(this.shiftTarget-this.shiftY)*Math.min(1,t*7),this._applyView()),Math.floor(this.t)!==Math.floor(this.t-t)&&Math.floor(this.t)%20===0&&this._updateSun();let e=Ls(this.cam.lat,this.cam.lon,this.cam.dist);this.camera.position.copy(e),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0);let n=Le.clamp((this.cam.dist-1)*.2,4e-4,.05);if(Math.abs(n-this.camera.near)>n*.02&&(this.camera.near=n,this.camera.updateProjectionMatrix()),this.earth){this.cloudMat.uniforms.uShift.value=this.t*45e-5;for(let l of this.arcs)l.mat.uniforms.uTime.value=this.t,l.mat.uniforms.uReveal.value=1.08*pf(Le.clamp((this.t-l.t0)/2.6,0,1));let s=this.cam.dist-1,r=this.cam.dist,a=ti((r-1.17)/.11),o=ti((r-1.03)/.22),c=ti((r-1.15)/.3);this.atmoMat.uniforms.uFade.value=a,this.atmo.visible=a>.002,this.cloudMat.uniforms.uFade.value=o,this.clouds.visible=o>.002;for(let l of this.arcs)l.mat.uniforms.uFade.value=c,l.mesh.visible=c>.002;this.earthMat.uniforms.uBump.value=.0065*ti((r-1.06)/.22),this.earthMat.uniforms.uSmooth.value=ti((2.2-r)/.9),this.earthMat.uniforms.uMatch.value=ti((r-1.1)/.6);for(let l of Object.values(this.cities)){let h=s*.068;l.group.position.copy(l.n).multiplyScalar(1+.0257*h),l.pos.copy(l.n).multiplyScalar(1+.0441*h),l.group.scale.setScalar(h);let u=ti((this.t-l.born)/1.5);l.selV+=((this.selected===l.key?1:0)-l.selV)*Math.min(1,t*7),l.pulseT<1&&(l.pulseT=Math.min(1,l.pulseT+t/1.7)),l.u.uTime.value=this.t,l.u.uAppear.value=u,l.u.uSel.value=l.selV,l.u.uPulseT.value=l.pulseT,l.u.uBlink.value=this.alerts.has(l.key)?this.blink:0}}for(let s=this.fx.length-1;s>=0;s--)this.fx[s].update(t)||this.fx.splice(s,1);this.tiles&&(this.tiles.update(t,this),this._tilesCb&&this.tiles.active!==this._tilesOn&&(this._tilesOn=this.tiles.active,this._tilesCb(this._tilesOn))),this.renderer.render(this.scene,this.camera),this.onFrame&&this.onFrame(t)}_busy(){return!!(this.tween||this._touching||performance.now()-(this._inputAt||0)<700||Math.abs(this.vel.lon)+Math.abs(this.vel.lat)>.05||this.fx.length||this.alerts.size||this.selected||this.tiles&&this.tiles.busy)}start(){let t=performance.now(),e=0,n=t,s=0,r=0,a=t,o=!1,c=!navigator.webdriver,l=this.renderer.getPixelRatio(),h=u=>{if(this._raf=requestAnimationFrame(h),this.paused){t=u;return}if(this._busy()&&(n=u),u-n>6e3&&u-e<30)return;let d=(u-t)/1e3;if(t=u,e=u,this.frame(d),c&&u-n<6e3){let f=Math.min(d,.1)*1e3;s=f>27?s+d:Math.max(0,s-d),r=f<18.6?r+d:0;let _=this.renderer.getPixelRatio();s>1.5&&_>1&&u-a>2500?(this._setPR(Math.max(1,_-.25)),s=0,a=u,o=!0):r>8&&_<l&&!o&&u-a>2500&&(this._setPR(Math.min(l,_+.25)),r=0,a=u)}};this._raf=requestAnimationFrame(h)}_setPR(t){this.renderer.setPixelRatio(t),this.renderer.setSize(this.W,this.H,!1),this.stars&&(this.stars.material.size=3.4*t)}};function yi(i,t,e){if(t.length===0)return e===void 0?null:e;(i===null||typeof i!="object")&&(i={});let n=t[0];if(t.length===1)e==null?delete i[n]:i[n]=e;else{let s=yi(i[n],t.slice(1),e);s===null||typeof s=="object"&&Object.keys(s).length===0?delete i[n]:i[n]=s}return Object.keys(i).length?i:null}var vi=i=>String(i||"").split("/").filter(Boolean),Ns=i=>i==null?null:JSON.parse(JSON.stringify(i)),bh=(i,t)=>{let e=i;for(let n of t){if(e===null||typeof e!="object"||!(n in e))return null;e=e[n]}return e===void 0?null:e},pl=class{constructor(t,e){this.db=(t||"").replace(/\/+$/,""),this.room=e,this.local=!this.db,this.listeners=new Set,this.status=this.local?"local":"connecting",this.statusCbs=[],this.queue=[],this.pumping=!1,this.denied=!1,this.local&&this._initLocal(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.reconnectAll()}),window.addEventListener("online",()=>this.reconnectAll())}onStatus(t){this.statusCbs.push(t),t(this.status)}_setStatus(t){t!==this.status&&(this.status=t,this.statusCbs.forEach(e=>e(t)))}url(t){return`${this.db}/rooms/${this.room}/${vi(t).join("/")}.json`}_initLocal(){this.key="globe-local-"+this.room;try{this.tree=JSON.parse(localStorage.getItem(this.key)||"null")}catch{this.tree=null}try{this.bc=new BroadcastChannel(this.key),this.bc.onmessage=t=>{this.tree=t.data,this._notifyAll("")}}catch{}}_saveLocal(){try{localStorage.setItem(this.key,JSON.stringify(this.tree))}catch{}try{this.bc&&this.bc.postMessage(this.tree)}catch{}}listen(t,e){let n={path:vi(t).join("/"),parts:vi(t),cb:e,data:null,es:null,closed:!1,retry:0,ready:!1};return this.listeners.add(n),this.local?(n.data=Ns(bh(this.tree,n.parts)),n.ready=!0,setTimeout(()=>!n.closed&&e(Ns(n.data),"",!0),0)):this._connect(n),()=>{n.closed=!0,this.listeners.delete(n),n.es&&n.es.close()}}_connect(t){if(t.closed)return;if(t.es)try{t.es.close()}catch{}let e;try{e=new EventSource(this.url(t.path))}catch{this._setStatus("offline");return}t.es=e,e.addEventListener("open",()=>{t.retry=0,this._setStatus("online")});let n=(s,r)=>{let a;try{a=JSON.parse(s.data)}catch{return}if(!a)return;let o=vi(a.path);if(r)for(let[c,l]of Object.entries(a.data||{}))t.data=yi(t.data,[...o,...vi(c)],l);else t.data=yi(t.data,o,a.data);t.ready=!0,t.cb(Ns(t.data),o.join("/"),!1)};e.addEventListener("put",s=>n(s,!1)),e.addEventListener("patch",s=>n(s,!0)),e.addEventListener("cancel",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.addEventListener("auth_revoked",()=>{this.denied=!0,this._setStatus("denied"),e.close()}),e.onerror=()=>{t.closed||(e.readyState===2?(this._setStatus("offline"),t.retry++,setTimeout(()=>this._connect(t),Math.min(1e3*2**t.retry,15e3))):this._setStatus("offline"))}}reconnectAll(){if(!this.local){for(let t of this.listeners)this._connect(t);this._pump()}}_apply(t,e,n){let s=vi(t);if(this.local){if(n)for(let[r,a]of Object.entries(e))this.tree=yi(this.tree,[...s,...vi(r)],a);else this.tree=yi(this.tree,s,e);this._saveLocal(),this._notifyAll(s.join("/"));return}for(let r of this.listeners){let a=r.parts,o=s.length>=a.length&&a.every((h,u)=>s[u]===h),c=!o&&s.length<a.length&&s.every((h,u)=>a[u]===h);if(!o&&!c)continue;let l=o?s.slice(a.length):[];if(n)for(let[h,u]of Object.entries(e)){let d=[...s,...vi(h)];d.length>=a.length&&a.every((_,v)=>d[v]===_)&&(r.data=yi(r.data,d.slice(a.length),u))}else o?r.data=yi(r.data,l,e):r.data=yi(r.data,[],bh(e,a.slice(s.length)));r.ready&&r.cb(Ns(r.data),l.join("/"),!1)}}_notifyAll(t){for(let e of this.listeners)e.data=Ns(bh(this.tree,e.parts)),e.cb(Ns(e.data),t,!1)}set(t,e){return this._apply(t,e===void 0?null:e,!1),this._enqueue("PUT",t,e===void 0?null:e)}patch(t,e){return this._apply(t,e,!0),this._enqueue("PATCH",t,e)}remove(t){return this._apply(t,null,!1),this._enqueue("DELETE",t)}newId(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}_enqueue(t,e,n){if(this.local)return Promise.resolve();let s=this.url(e);if(t==="PUT"){let a=this.queue.find(o=>o.url===s&&o.method==="PUT"&&!o.inflight);if(a)return a.body=n,a.promise}let r={method:t,url:s,body:n,tries:0,inflight:!1};return r.promise=new Promise(a=>{r.done=a}),this.queue.push(r),this._pump(),r.promise}async _pump(){if(!this.pumping){for(this.pumping=!0;this.queue.length;){let t=this.queue[0];t.inflight=!0;try{let e=await fetch(t.url+"?print=silent",{method:t.method,body:t.method==="DELETE"?void 0:JSON.stringify(t.body),keepalive:!1});if(e.status>=500||e.status===429)throw new Error("server "+e.status);(e.status===401||e.status===403)&&(this.denied=!0,this._setStatus("denied")),this.queue.shift(),t.done(e.ok)}catch{if(t.inflight=!1,t.tries++,t.tries>6){this.queue.shift(),t.done(!1);continue}this._setStatus("offline"),await new Promise(n=>setTimeout(n,Math.min(1500*t.tries,8e3)))}}this.pumping=!1}}async ping(){if(this.local)return!0;try{return(await fetch(this.url("meta/ping")+"?shallow=true")).ok}catch{return!1}}};async function gf(i){let t=new TextEncoder().encode("globe-for-two:"+i.trim().toLowerCase()),e=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(e)].map(n=>n.toString(16).padStart(2,"0")).join("").slice(0,32)}var _f={0:["\u2600\uFE0F","\u{1F319}","Clear","\u042F\u0441\u043D\u043E"],1:["\u{1F324}\uFE0F","\u{1F319}","Mostly clear","\u041C\u0430\u043B\u043E\u043E\u0431\u043B\u0430\u0447\u043D\u043E"],2:["\u26C5","\u2601\uFE0F","Partly cloudy","\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C"],3:["\u2601\uFE0F","\u2601\uFE0F","Overcast","\u041F\u0430\u0441\u043C\u0443\u0440\u043D\u043E"],45:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Fog","\u0422\u0443\u043C\u0430\u043D"],48:["\u{1F32B}\uFE0F","\u{1F32B}\uFE0F","Freezing fog","\u0418\u0437\u043C\u043E\u0440\u043E\u0437\u044C"],51:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light drizzle","\u041B\u0451\u0433\u043A\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],53:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Drizzle","\u041C\u043E\u0440\u043E\u0441\u044C"],55:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy drizzle","\u0421\u0438\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],56:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],57:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing drizzle","\u041B\u0435\u0434\u044F\u043D\u0430\u044F \u043C\u043E\u0440\u043E\u0441\u044C"],61:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Light rain","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],63:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain","\u0414\u043E\u0436\u0434\u044C"],65:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Heavy rain","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C"],66:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],67:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Freezing rain","\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u0434\u043E\u0436\u0434\u044C"],71:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Light snow","\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043D\u0435\u0433"],73:["\u2744\uFE0F","\u2744\uFE0F","Snow","\u0421\u043D\u0435\u0433"],75:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433"],77:["\u2744\uFE0F","\u2744\uFE0F","Snow grains","\u0421\u043D\u0435\u0436\u043D\u0430\u044F \u043A\u0440\u0443\u043F\u0430"],80:["\u{1F326}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],81:["\u{1F327}\uFE0F","\u{1F327}\uFE0F","Rain showers","\u041B\u0438\u0432\u043D\u0438"],82:["\u26C8\uFE0F","\u26C8\uFE0F","Violent showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u043B\u0438\u0432\u043D\u0438"],85:["\u{1F328}\uFE0F","\u{1F328}\uFE0F","Snow showers","\u0421\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],86:["\u2744\uFE0F","\u2744\uFE0F","Heavy snow showers","\u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0435\u0433\u043E\u043F\u0430\u0434"],95:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm","\u0413\u0440\u043E\u0437\u0430"],96:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"],99:["\u26C8\uFE0F","\u26C8\uFE0F","Thunderstorm, hail","\u0413\u0440\u043E\u0437\u0430 \u0441 \u0433\u0440\u0430\u0434\u043E\u043C"]};function ml(i,t,e){let n=_f[i]||_f[3];return{icon:t?n[0]:n[1],text:e==="ru"?n[3]:n[2]}}var gl=i=>i*9/5+32,xf=i=>i*2.23694,$v=720*1e3,Wi={};function vf(i){delete Wi[i];try{localStorage.removeItem("wx_"+i)}catch{}}async function yf(i,t,{force:e=!1}={}){let n=Date.now();if(!Wi[i])try{Wi[i]=JSON.parse(localStorage.getItem("wx_"+i)||"null")}catch{Wi[i]=null}let s=Wi[i];if(s&&!e&&n-s.at<$v)return s.data;let r=`https://api.open-meteo.com/v1/forecast?latitude=${t.lat}&longitude=${t.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,weather_code,wind_speed_10m,precipitation&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&wind_speed_unit=ms&timezone=auto&forecast_days=4`;try{let a=await fetch(r);if(!a.ok)throw new Error("wx "+a.status);let o=await a.json();Wi[i]={at:n,data:o};try{localStorage.setItem("wx_"+i,JSON.stringify(Wi[i]))}catch{}return o}catch{return s?s.data:null}}function Mf(i,t=12){if(!i||!i.hourly)return[];let e=i.current&&i.current.time?i.current.time.slice(0,13):null,n=e?i.hourly.time.findIndex(r=>r.slice(0,13)===e):0;n<0&&(n=0);let s=[];for(let r=n;r<Math.min(n+t,i.hourly.time.length);r++)s.push({time:i.hourly.time[r],temp:i.hourly.temperature_2m[r],code:i.hourly.weather_code[r],day:i.hourly.is_day[r]});return s}var Sh={en:{app:"Our Globe",loading:"Warming up the planet\u2026",noWebgl:"This device cannot draw the globe (WebGL is off).",setupTitle:"Our little planet",setupSub:"A globe for two, with real day and night.",whoAreYou:"Who are you?",secretWord:"Your secret word",secretHint:"Pick any word or phrase only you two know. It locks your shared space.",openGlobe:"Open the globe",needWord:"Type the secret word first",needWho:"Choose who you are",today:"Today",you:"You",meetSet:"Set the day we meet",meetDays:"{n} days until we meet",meetOne:"1 day until we meet",meetToday:"We meet today!",meetAgo:"We met {n} days ago",meetTitle:"The day we meet",meetSave:"Save",meetClear:"Remove",games:"Games",bottles:"Bottles",mood:"Mood",both:"Both",day:"Daytime",night:"Night",feels:"Feels like",wind:"Wind",humidity:"Humidity",next12:"Next hours",forecast:"Forecast",heartsToday:"{n} today",sendHeart:"Send a heart",setMood:"Set mood",noMood:"no mood yet",timeAhead:"{a} is {h} h ahead of {b}",timeSame:"Same time in {a} and {b}",distance:"{km} km ({mi} mi) apart",noWeather:"Weather is not available right now",sunrise:"Sunrise",sunset:"Sunset",ms:"m/s",mph:"mph",moodTitle:"How are you feeling?",moodClear:"Clear mood",heartsIn:"{name} sent you {n} \u2665",whileAway:"While you were away: +{n} \u2665 from {name}",myCity:"My city",cityTitle:"Where are you now?",citySearch:"Search for a city\u2026",cityReset:"Back to {city}",cityPopular:"Popular",cityNo:"Nothing found",cityOffline:"Search is offline, showing popular cities",cityMoved:"{name} is now in {city}",sameCity:"You two are in the same city!",settings:"Settings",language:"Language",tempUnits:"Temperature",shareLink:"Copy the link for {name}",linkCopied:"Link copied",switchPerson:"Switch person / reset",switchConfirm:"Forget this phone and start over?",serverStatus:"Connection",status_online:"Connected",status_offline:"Reconnecting\u2026",status_local:"Preview mode: no server yet, data stays on this phone",status_denied:"Server refused access: check the database rules",status_connecting:"Connecting\u2026",credits:"Earth textures: NASA Blue Marble via three.js examples. Weather: Open-Meteo. Emoji: Twemoji (CC-BY 4.0). Satellite imagery: Sentinel-2 cloudless by EOX IT Services GmbH (contains modified Copernicus Sentinel data 2020).",close:"Close",streakTitle:"Our streak",streakHint:"Open the globe every day to keep the flame alive.",streakDay:"day",streakDays:"days",streakNow:"{n} {d} in a row",streakBest:"best: {n}",streakLit:"here today",streakWait:"not here yet today",streakNew:"{n} days in a row",heartsTotal:"Hearts sent",gamesTitle:"Play together",g_canvas:"Our canvas",g_canvas_d:"Draw on one picture at the same time",g_theme:"Draw a theme",g_theme_d:"One prompt, one picture, both of you",themeLabel:"Theme",themeNew:"New theme",themeAll:"All",themeNewConfirm:"Start a new picture? The current one will be cleared for both of you.",g_bottles:"Bottle mail",g_bottles_d:"A drawing in a bottle floats to the other city",g_ttt:"Tic-tac-toe",g_ttt_d:"Stars against hearts",g_bs:"Battleship",g_bs_d:"Classic sea battle, 10\xD710",g_pz:"Puzzle",g_pz_d:"Put a picture together, piece by piece, both of you",pzPieces:"pieces",pzPick:"Pick a picture",pzOwnPhoto:"Your own photo",pzPhotoFail:"Could not read that photo",pzBackTo:"Back to the puzzle",pzPeek:"Hold to see the picture",pzNew:"New puzzle",pzLoading:"Loading the picture\u2026",pzLoadFail:"The picture did not load",pzRetry:"Try again",pzDone:"You did it!",pzDoneIn:"{n} pieces in {time}",pzAnother:"Another picture",g_c4:"Connect Four",g_c4_d:"Line up four before the other one does",colFull:"This column is full",g_hang:"Petals",g_hang_d:"Guess the English word before the petals fall",online:"online",offline:"offline",back:"Back",yourTurnBadge:"your turn",newBadge:"new",undo:"Undo",clear:"Clear",save:"Save picture",saved:"Picture saved",eraser:"Eraser",clearConfirm:"Clear the whole canvas for both of you?",yes:"Yes",no:"No",canvasFull:"The canvas is full. Clear it to keep drawing.",bottleHelp:"Draw something and write a few words. The bottle floats across the ocean to the other city.",newBottle:"Write a bottle",writeBottle:"New bottle",noBottles:"No bottles yet. Send the first one!",toX:"To {name}",fromX:"From {name}",bottle:"Bottle",bottleText:"A few words (optional)",drawSomething:"Draw or write something first",sendBottle:"Throw it into the sea",bottleSent:"Bottle sent! It floats across the ocean",bottleArrived:"A bottle from {name} washed ashore!",reply:"Reply",replay:"Watch again",bottleMore:"Next bottle ({n})",inviteTitle:"{name} is waiting for you",inviteJoin:"Join",again:"Watch again",hereBadge:"{name} is here",tttClear:"Clear the board",newRound:"Next round",youWin:"You won!",theyWin:"{name} won",draw:"A draw!",yourTurn:"Your turn",theirTurn:"{name} is thinking\u2026",enemyWaters:"Enemy waters",yourFleet:"Your fleet",newGame:"New game",noFit:"Ships can\u2019t touch, even at the corners",placeShips:"Place your ships",horiz:"Horizontal",vert:"Vertical",random:"Random",ready:"Ready!",waitingPlace:"Waiting for {name} to place ships\u2026",bsMiss:"Miss",bsHit:"Hit!",bsSunk:"Sunk!",bsHint:"Tap the enemy waters to fire. A hit gives you another shot.",shootAgain:"A hit, shoot again!",bsDragHint:"Drag ships onto the field. Tap a ship to turn it.",bsClear:"Clear",bsAllSet:"All ships are in place",wordShort:"Use at least 3 letters (A\u2013Z)",hintIs:"Hint: {h}",pickWord:"Pick an English word",hintOptional:"Hint (optional)",hideWord:"Hide the word",wordHelp:"Letters A\u2013Z only, 3 to 12 letters.",waitingWord:"{name} is picking a word\u2026",watching:"{name} is guessing\u2026",guessLetters:"Guess the letters",theyGuessed:"{name} guessed it!",youGuessed:"You guessed it!",theyFailed:"The petals fell. {name} lost this one",wordWas:"The petals fell. The word was {w}",nextRound2:"Next round"},ru:{app:"\u041D\u0430\u0448 \u0433\u043B\u043E\u0431\u0443\u0441",loading:"\u0420\u0430\u0437\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C \u043F\u043B\u0430\u043D\u0435\u0442\u0443\u2026",noWebgl:"\u042D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441 (\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D WebGL).",setupTitle:"\u041D\u0430\u0448\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u043A\u0430",setupSub:"\u0413\u043B\u043E\u0431\u0443\u0441 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0434\u043D\u0451\u043C \u0438 \u043D\u043E\u0447\u044C\u044E.",whoAreYou:"\u041A\u0442\u043E \u0442\u044B?",secretWord:"\u0412\u0430\u0448\u0435 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",secretHint:"\u041B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u0444\u0440\u0430\u0437\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0437\u043D\u0430\u0435\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0434\u0432\u043E\u0435. \u041E\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0448\u0435 \u043E\u0431\u0449\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E.",openGlobe:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0433\u043B\u043E\u0431\u0443\u0441",needWord:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0432\u0435\u0434\u0438 \u0441\u0435\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",needWho:"\u0412\u044B\u0431\u0435\u0440\u0438, \u043A\u0442\u043E \u0442\u044B",today:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",you:"\u0422\u044B",meetSet:"\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetDays:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438: {n} \u0434\u043D.",meetOne:"\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 1 \u0434\u0435\u043D\u044C",meetToday:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043C\u0441\u044F!",meetAgo:"\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u043B\u0438\u0441\u044C {n} \u0434\u043D. \u043D\u0430\u0437\u0430\u0434",meetTitle:"\u0414\u0435\u043D\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438",meetSave:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",meetClear:"\u0423\u0431\u0440\u0430\u0442\u044C",games:"\u0418\u0433\u0440\u044B",bottles:"\u0411\u0443\u0442\u044B\u043B\u043A\u0438",mood:"\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",both:"\u041E\u0431\u0430",day:"\u0414\u0435\u043D\u044C",night:"\u041D\u043E\u0447\u044C",feels:"\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C",next12:"\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0447\u0430\u0441\u044B",forecast:"\u041F\u0440\u043E\u0433\u043D\u043E\u0437",heartsToday:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F: {n}",sendHeart:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E",setMood:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",noMood:"\u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",timeAhead:"{a} \u043E\u043F\u0435\u0440\u0435\u0436\u0430\u0435\u0442 {b} \u043D\u0430 {h} \u0447",timeSame:"\u0412 {a} \u0438 {b} \u043E\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u044F",distance:"{km} \u043A\u043C ({mi} \u043C\u0438\u043B\u044C) \u0434\u0440\u0443\u0433 \u043E\u0442 \u0434\u0440\u0443\u0433\u0430",noWeather:"\u041F\u043E\u0433\u043E\u0434\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",sunrise:"\u0412\u043E\u0441\u0445\u043E\u0434",sunset:"\u0417\u0430\u043A\u0430\u0442",ms:"\u043C/\u0441",mph:"\u043C\u0438\u043B\u044C/\u0447",moodTitle:"\u041A\u0430\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435?",moodClear:"\u0423\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",heartsIn:"\u041E\u0442 {name}: {n} \u2665",whileAway:"\u041F\u043E\u043A\u0430 \u0442\u0435\u0431\u044F \u043D\u0435 \u0431\u044B\u043B\u043E: +{n} \u2665 \u043E\u0442 {name}",myCity:"\u041C\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",cityTitle:"\u0413\u0434\u0435 \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441?",citySearch:"\u041D\u0430\u0439\u0442\u0438 \u0433\u043E\u0440\u043E\u0434\u2026",cityReset:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C: {city}",cityPopular:"\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityNo:"\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C",cityOffline:"\u041F\u043E\u0438\u0441\u043A \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",cityMoved:"{name} \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u0433\u043E\u0440\u043E\u0434\u0435: {city}",sameCity:"\u0412\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435!",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",language:"\u042F\u0437\u044B\u043A",tempUnits:"\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",shareLink:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0434\u043B\u044F {name}",linkCopied:"\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",switchPerson:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 / \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C",switchConfirm:"\u0417\u0430\u0431\u044B\u0442\u044C \u044D\u0442\u043E\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E?",serverStatus:"\u0421\u0432\u044F\u0437\u044C",status_online:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",status_offline:"\u041F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",status_local:"\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C: \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442, \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435",status_denied:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0443\u0441\u043A\u0430\u0435\u0442: \u043F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445",status_connecting:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F\u2026",credits:"\u0422\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0417\u0435\u043C\u043B\u0438: NASA Blue Marble (\u043F\u0440\u0438\u043C\u0435\u0440\u044B three.js). \u041F\u043E\u0433\u043E\u0434\u0430: Open-Meteo. \u0421\u043C\u0430\u0439\u043B\u044B: Twemoji (CC-BY 4.0). \u0421\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u0432\u044B\u0435 \u0441\u043D\u0438\u043C\u043A\u0438: Sentinel-2 cloudless, EOX IT Services GmbH (\u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 Copernicus Sentinel 2020).",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",streakTitle:"\u041D\u0430\u0448\u0430 \u0441\u0435\u0440\u0438\u044F",streakHint:"\u0417\u0430\u0445\u043E\u0434\u0438 \u0432 \u0433\u043B\u043E\u0431\u0443\u0441 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0433\u043E\u043D\u0451\u043A \u043D\u0435 \u043F\u043E\u0433\u0430\u0441.",streakDay:"\u0434\u0435\u043D\u044C",streakDays:"\u0434\u043D.",streakNow:"{n} {d} \u043F\u043E\u0434\u0440\u044F\u0434",streakBest:"\u0440\u0435\u043A\u043E\u0440\u0434: {n}",streakLit:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0443\u0436\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakWait:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u0445\u043E\u0434\u0438\u043B{g}",streakNew:"{n} \u0434\u043D. \u043F\u043E\u0434\u0440\u044F\u0434",heartsTotal:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",gamesTitle:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435",g_canvas:"\u041D\u0430\u0448 \u0445\u043E\u043B\u0441\u0442",g_canvas_d:"\u0420\u0438\u0441\u0443\u0435\u043C \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E",g_theme:"\u0420\u0438\u0441\u0443\u0435\u043C \u043F\u043E \u0442\u0435\u043C\u0435",g_theme_d:"\u041E\u0434\u043D\u0430 \u0442\u0435\u043C\u0430, \u043E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445",themeLabel:"\u0422\u0435\u043C\u0430",themeNew:"\u0414\u0440\u0443\u0433\u0430\u044F \u0442\u0435\u043C\u0430",themeAll:"\u0412\u0441\u0451",themeNewConfirm:"\u041D\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443? \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0441\u044F \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445, \u0441\u043E\u0445\u0440\u0430\u043D\u0438 \u0435\u0451, \u0435\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u0430.",g_bottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",g_bottles_d:"\u0420\u0438\u0441\u0443\u043D\u043E\u043A \u0432 \u0431\u0443\u0442\u044B\u043B\u043A\u0435 \u043F\u043B\u044B\u0432\u0451\u0442 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434",g_ttt:"\u041A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438",g_ttt_d:"\u0417\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0442\u0438\u0432 \u0441\u0435\u0440\u0434\u0435\u0447\u0435\u043A",g_bs:"\u041C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439",g_bs_d:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0431\u043E\u0439 10\xD710",g_pz:"\u041F\u0430\u0437\u043B",g_pz_d:"\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0432\u0434\u0432\u043E\u0451\u043C, \u0434\u0435\u0442\u0430\u043B\u044C \u0437\u0430 \u0434\u0435\u0442\u0430\u043B\u044C\u044E",pzPieces:"\u0434\u0435\u0442\u0430\u043B\u0435\u0439",pzPick:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",pzOwnPhoto:"\u0421\u0432\u043E\u0451 \u0444\u043E\u0442\u043E",pzPhotoFail:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0442\u043E",pzBackTo:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0430\u0437\u043B\u0443",pzPeek:"\u0417\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",pzNew:"\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0437\u043B",pzLoading:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443\u2026",pzLoadFail:"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C",pzRetry:"\u0415\u0449\u0451 \u0440\u0430\u0437",pzDone:"\u0421\u043E\u0431\u0440\u0430\u043B\u0438!",pzDoneIn:"{n} \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u0437\u0430 {time}",pzAnother:"\u0414\u0440\u0443\u0433\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430",g_c4:"\u0427\u0435\u0442\u044B\u0440\u0435 \u0432 \u0440\u044F\u0434",g_c4_d:"\u0421\u043E\u0431\u0435\u0440\u0438 \u0447\u0435\u0442\u044B\u0440\u0435 \u0432 \u0440\u044F\u0434 \u0440\u0430\u043D\u044C\u0448\u0435 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",colFull:"\u041A\u043E\u043B\u043E\u043D\u043A\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430",g_hang:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",g_hang_d:"\u0423\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C \u043B\u0435\u043F\u0435\u0441\u0442\u043A\u0438",online:"\u0432 \u0441\u0435\u0442\u0438",offline:"\u043D\u0435 \u0432 \u0441\u0435\u0442\u0438",back:"\u041D\u0430\u0437\u0430\u0434",yourTurnBadge:"\u0442\u0432\u043E\u0439 \u0445\u043E\u0434",newBadge:"\u043D\u043E\u0432\u043E\u0435",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",clear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443",saved:"\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",eraser:"\u041B\u0430\u0441\u0442\u0438\u043A",clearConfirm:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0435\u0441\u044C \u0445\u043E\u043B\u0441\u0442 \u0443 \u0432\u0430\u0441 \u043E\u0431\u043E\u0438\u0445?",yes:"\u0414\u0430",no:"\u041D\u0435\u0442",canvasFull:"\u0425\u043E\u043B\u0441\u0442 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D. \u041E\u0447\u0438\u0441\u0442\u0438 \u0435\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.",bottleHelp:"\u041D\u0430\u0440\u0438\u0441\u0443\u0439 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432. \u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u043F\u043B\u044B\u0432\u0451\u0442 \u043E\u043A\u0435\u0430\u043D \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0433\u043E\u0440\u043E\u0434.",newBottle:"\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0431\u0443\u0442\u044B\u043B\u043A\u0443",writeBottle:"\u041D\u043E\u0432\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430",noBottles:"\u0411\u0443\u0442\u044B\u043B\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u043F\u0435\u0440\u0432\u0443\u044E!",toX:"\u0414\u043B\u044F {name}",fromX:"\u041E\u0442 {name}",bottle:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430",bottleText:"\u041F\u0430\u0440\u0430 \u0441\u043B\u043E\u0432 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",drawSomething:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0440\u0438\u0441\u0443\u0439 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C",sendBottle:"\u0411\u0440\u043E\u0441\u0438\u0442\u044C \u0432 \u043C\u043E\u0440\u0435",bottleSent:"\u0411\u0443\u0442\u044B\u043B\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430! \u041E\u043D\u0430 \u043F\u043B\u044B\u0432\u0451\u0442 \u0447\u0435\u0440\u0435\u0437 \u043E\u043A\u0435\u0430\u043D",bottleArrived:"\u041A \u0431\u0435\u0440\u0435\u0433\u0443 \u043F\u0440\u0438\u0431\u0438\u043B\u043E \u0431\u0443\u0442\u044B\u043B\u043A\u0443 \u043E\u0442 {name}!",reply:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",replay:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",bottleMore:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0431\u0443\u0442\u044B\u043B\u043A\u0430 ({n})",inviteTitle:"{name} \u0436\u0434\u0451\u0442 \u0442\u0435\u0431\u044F",inviteJoin:"\u0417\u0430\u0439\u0442\u0438",again:"\u0415\u0449\u0451 \u0440\u0430\u0437",hereBadge:"{name} \u0437\u0434\u0435\u0441\u044C",tttClear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",newRound:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434",youWin:"\u0422\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B{s}!",theyWin:"\u0412\u044B\u0438\u0433\u0440\u0430\u043B{g} {name}",draw:"\u041D\u0438\u0447\u044C\u044F!",yourTurn:"\u0422\u0432\u043E\u0439 \u0445\u043E\u0434",theirTurn:"{name} \u0434\u0443\u043C\u0430\u0435\u0442\u2026",enemyWaters:"\u0412\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",yourFleet:"\u0422\u0432\u043E\u0439 \u0444\u043B\u043E\u0442",newGame:"\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430",noFit:"\u041A\u043E\u0440\u0430\u0431\u043B\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u043A\u0430\u0441\u0430\u0442\u044C\u0441\u044F \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u0434\u0430\u0436\u0435 \u0443\u0433\u043B\u0430\u043C\u0438",placeShips:"\u0420\u0430\u0441\u0441\u0442\u0430\u0432\u044C \u043A\u043E\u0440\u0430\u0431\u043B\u0438",horiz:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",vert:"\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",random:"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",ready:"\u0413\u043E\u0442\u043E\u0432\u043E!",waitingPlace:"\u0416\u0434\u0451\u043C, \u043F\u043E\u043A\u0430 {name} \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u0438\u0442 \u043A\u043E\u0440\u0430\u0431\u043B\u0438\u2026",bsMiss:"\u041C\u0438\u043C\u043E",bsHit:"\u0420\u0430\u043D\u0438\u043B!",bsSunk:"\u0423\u0431\u0438\u043B!",bsHint:"\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u0432\u043E\u0434\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0435\u043B\u044F\u0442\u044C. \u041F\u043E\u043F\u0430\u043B \u2014 \u0441\u0442\u0440\u0435\u043B\u044F\u0435\u0448\u044C \u0435\u0449\u0451.",shootAgain:"\u041F\u043E\u043F\u0430\u043B, \u0441\u0442\u0440\u0435\u043B\u044F\u0439 \u0435\u0449\u0451!",bsDragHint:"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438 \u043A\u043E\u0440\u0430\u0431\u043B\u0438 \u043D\u0430 \u043F\u043E\u043B\u0435. \u0422\u0430\u043F \u043F\u043E \u043A\u043E\u0440\u0430\u0431\u043B\u044E \u2014 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C.",bsClear:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",bsAllSet:"\u0412\u0441\u0435 \u043A\u043E\u0440\u0430\u0431\u043B\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0430\u0445",wordShort:"\u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0431\u0443\u043A\u0432\u044B (A\u2013Z)",hintIs:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430: {h}",pickWord:"\u0417\u0430\u0433\u0430\u0434\u0430\u0439 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",hintOptional:"\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",hideWord:"\u0421\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0441\u043B\u043E\u0432\u043E",wordHelp:"\u0422\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B A\u2013Z, \u043E\u0442 3 \u0434\u043E 12.",waitingWord:"{name} \u0437\u0430\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0441\u043B\u043E\u0432\u043E\u2026",watching:"{name} \u043E\u0442\u0433\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u2026",guessLetters:"\u0423\u0433\u0430\u0434\u044B\u0432\u0430\u0439 \u0431\u0443\u043A\u0432\u044B",theyGuessed:"{name} \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}!",youGuessed:"\u0422\u044B \u043E\u0442\u0433\u0430\u0434\u0430\u043B{s}!",theyFailed:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. {name} \u043D\u0435 \u043E\u0442\u0433\u0430\u0434\u0430\u043B{g}",wordWas:"\u041B\u0435\u043F\u0435\u0441\u0442\u043A\u0438 \u043E\u0441\u044B\u043F\u0430\u043B\u0438\u0441\u044C. \u0421\u043B\u043E\u0432\u043E \u0431\u044B\u043B\u043E {w}",nextRound2:"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434"}},_l="en",xl=i=>{_l=Sh[i]?i:"en",document.documentElement.lang=_l},Me=()=>_l;function yt(i,t){let e=Sh[_l][i]??Sh.en[i]??i;if(t)for(let[n,s]of Object.entries(t))e=e.split("{"+n+"}").join(s);return e}function C(i,t,...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t||{}))r===!1||r==null||(s==="class"?n.className=r:s==="html"?n.innerHTML=r:s==="style"&&typeof r=="object"?Object.assign(n.style,r):s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):n.setAttribute(s,r===!0?"":r));for(let s of e.flat(1/0))s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var bf=null;function an(i,t=2800){let e=document.getElementById("toast");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(bf),bf=setTimeout(()=>e.classList.remove("show"),t))}function Bn(i,{onClose:t,cls:e=""}={}){let n=C("div",{class:"modal-wrap "+e}),s=C("div",{class:"modal glass"},i);n.append(s);let r=()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),200),t&&t()};return n.addEventListener("pointerdown",a=>{a.target===n&&r()}),document.getElementById("modals").append(n),requestAnimationFrame(()=>n.classList.add("in")),{close:r,el:s}}function Us(i,t,e){return new Promise(n=>{let s=!1,r=o=>{s||(s=!0,n(o)),a.close()},a=Bn(C("div",{class:"confirm"},C("p",{},i),C("div",{class:"row"},C("button",{class:"btn ghost",onclick:()=>r(!1)},e),C("button",{class:"btn",onclick:()=>r(!0)},t))),{onClose:()=>{s||(s=!0,n(!1))}})})}var we=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),oe=(i,t="")=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ${t}>${i}</svg>`,jt={heart:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.6s-7.3-4.5-9.4-9.1C1.2 8.3 2.9 4.7 6.4 4.7c1.9 0 3.5 1 4.6 2.6h2c1.1-1.6 2.7-2.6 4.6-2.6 3.5 0 5.2 3.6 3.8 6.8-2.1 4.6-9.4 9.1-9.4 9.1z"/></svg>',heartO:oe('<path d="M12 20s-7-4.3-9-8.7C1.7 8.3 3.3 5 6.5 5c1.8 0 3.3 1 4.3 2.5h2.4C14.2 6 15.7 5 17.5 5 20.7 5 22.3 8.3 21 11.3 19 15.7 12 20 12 20z"/>'),flame:oe('<path d="M12 21c3.9 0 6.5-2.6 6.5-6.2 0-2.7-1.6-4.4-3-6-.8-.9-1.4-2.2-1.5-3.8C11 6 7.5 9.4 7.5 14.2 7.5 18 9.8 21 12 21z"/><path d="M12 21c-1.7 0-2.9-1.2-2.9-2.9 0-1.5 1-2.3 1.9-3.3.4-.4.7-1 .8-1.7 1.4.8 3 2.2 3 4.2 0 2-1.3 3.7-2.8 3.7z" stroke-width="1.2"/>'),globe:oe('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.4 5.4 3.4 8.5s-1 6.1-3.4 8.5c-2.4-2.4-3.4-5.4-3.4-8.5s1-6.1 3.4-8.5z"/>'),games:oe('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><circle cx="17" cy="17" r="3.5"/>'),bottle:oe('<path d="M10 3h4M10.5 3v3.5L8.5 9.5V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V9.5l-2-3V3"/><path d="M8.5 13h7"/>'),smile:oe('<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2"/><path d="M9 9.8v.01M15 9.8v.01" stroke-width="2"/>'),gear:oe('<circle cx="12" cy="12" r="2.8"/><path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6"/>'),back:oe('<path d="M14.5 5.5 8 12l6.5 6.5"/>','stroke-width="1.8"'),close:oe('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>','stroke-width="1.8"'),undo:oe('<path d="M9 14 4.5 9.5 9 5"/><path d="M4.5 9.5H14a5.5 5.5 0 0 1 0 11h-3"/>'),trash:oe('<path d="M4.5 7h15M10 11v6M14 11v6M6.5 7l.8 12h9.4l.8-12M9.5 7V4.5h5V7"/>'),eraser:oe('<path d="M19.5 19.5H9L4.2 14.7a1.8 1.8 0 0 1 0-2.5l7.5-7.5a1.8 1.8 0 0 1 2.5 0l5.1 5.1a1.8 1.8 0 0 1 0 2.5l-5.3 5.2"/><path d="m7.5 10.5 6 6"/>'),save:oe('<path d="M12 4v11M7.5 11 12 15.5 16.5 11M5 19.5h14"/>'),send:oe('<path d="M20.5 3.5 10 14M20.5 3.5l-6.6 17-3.9-6.5-6.5-3.9z"/>'),pen:oe('<path d="M4 20l1-4.5L16.5 4a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.5 19z"/><path d="M14.5 6l3.5 3.5"/>'),hash:oe('<path d="M9 4 7.5 20M16.5 4 15 20M4.5 9h15.5M4 15h15.5"/>'),eye:oe('<path d="M2.5 12S6 5.500 12 5.500 21.500 12 21.500 12 18 18.500 12 18.500 2.500 12 2.500 12z"/><circle cx="12" cy="12" r="2.800"/>'),four:oe('<rect x="3.5" y="4" width="17" height="16" rx="3.5"/><circle cx="8" cy="15.5" r="1.4"/><circle cx="11" cy="12.5" r="1.4"/><circle cx="14" cy="9.5" r="1.4"/><circle cx="17" cy="6.8" r="1.4"/>'),puzzle:oe('<path d="M10 4.5a1.8 1.8 0 0 1 3.600 0V6.500h3.400a1.500 1.500 0 0 1 1.500 1.500v3h-2a1.800 1.800 0 1 0 0 3.600h2V18a1.500 1.500 0 0 1-1.500 1.500h-3.400v-2a1.800 1.800 0 1 0-3.600 0v2H6.500A1.500 1.500 0 0 1 5 18v-3.400h2a1.800 1.800 0 1 0 0-3.600H5V8a1.500 1.500 0 0 1 1.500-1.500H10z"/>'),anchor:oe('<circle cx="12" cy="5.5" r="2"/><path d="M12 7.5V21M7.5 11h9M4.5 14c.4 3.4 3.4 6.5 7.5 6.5s7.1-3.1 7.5-6.5"/>'),petal:oe('<circle cx="12" cy="12" r="2"/><path d="M12 10C9.5 7 9.5 4 12 3c2.5 1 2.5 4 0 7zM14 12c3-2.5 6-2.5 7 0-1 2.5-4 2.5-7 0zM12 14c2.500 3 2.500 6 0 7-2.500-1-2.500-4 0-7zM10 12c-3 2.500-6 2.500-7 0 1-2.500 4-2.500 7 0z" stroke-width="1.2"/>'),shuffle:oe('<path d="M3.5 7.5h3c1.6 0 3 .8 3.9 2.200l2.700 4.600c.9 1.400 2.300 2.200 3.900 2.200h3.500M3.500 16.500h3c1.600 0 3-.800 3.900-2.200M13.400 9.700c.900-1.400 2.300-2.200 3.900-2.200h3.200"/><path d="M18 5l2.500 2.500L18 10M18 14l2.500 2.500L18 19"/>'),bulb:oe('<path d="M9.500 18h5M10.500 21h3"/><path d="M12 3.500a5.700 5.700 0 0 0-3.400 10.300c.6.500.9 1.100.9 1.700v.5h5v-.5c0-.6.3-1.200.9-1.700A5.700 5.700 0 0 0 12 3.500z"/>'),chevron:oe('<path d="M9.5 5.5 16 12l-6.5 6.5"/>'),sun:oe('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>'),moon:oe('<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z"/>'),cloud:oe('<path d="M7 18h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 9.6 4.2 4.2 0 0 0 7 18z"/>'),partly:oe('<circle cx="8.5" cy="8.5" r="2.7"/><path d="M8.5 3v1.2M3 8.5h1.2M4.7 4.7l.9.9M12.3 4.7l-.9.9"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.1z"/>'),partlyN:oe('<path d="M10.5 4.2A4.3 4.3 0 1 0 14 10.5a3.4 3.4 0 0 1-3.5-6.300z"/><path d="M9 19.5h8a3.5 3.5 0 0 0 .4-7A4.8 4.8 0 0 0 9 12.4a3.6 3.6 0 0 0 0 7.100z"/>'),rain:oe('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18l-1 2.500M12.500 18l-1 2.500M16.500 18l-1 2.500"/>'),drizzle:oe('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v1M12.500 18.500v1M16.500 18.500v1"/>'),snow:oe('<path d="M7 15h10.2a4 4 0 0 0 .6-7.95A5.6 5.6 0 0 0 7 6.600 4.200 4.200 0 0 0 7 15z"/><path d="M8.500 18.500v.01M12.500 20v.01M16.500 18.500v.01" stroke-width="2.300"/>'),storm:oe('<path d="M7 14.500h10.200a4 4 0 0 0 .6-7.950A5.600 5.600 0 0 0 7 6.100 4.200 4.200 0 0 0 7 14.500z"/><path d="m12.800 14.500-2.600 3.700h3.200L11.800 21.500"/>'),fog:oe('<path d="M4 9h16M6.500 13h11M4 17h16"/>')};function Vr(i,t){return i===0?t?"sun":"moon":i===1||i===2?t?"partly":"partlyN":i===45||i===48?"fog":[51,53,55,56,57].includes(i)?"drizzle":[61,63,65,66,67,80,81,82].includes(i)?"rain":[71,73,75,77,85,86].includes(i)?"snow":[95,96,99].includes(i)?"storm":"cloud"}var wh=["#2b2d42","#ff4d8d","#ff9f43","#ffd93d","#4cd964","#4cc9f0","#8a5cf6","#ffffff"],Th=[5,11,22],vl=i=>`${i.c.replace("#","")},${i.w},${i.e?1:0}:${i.pts.map(t=>t[0]+","+t[1]).join(" ")}`;function Sf(i){let t=i.indexOf(":"),e=i.slice(0,t).split(","),n=i.slice(t+1).split(" ").filter(Boolean).map(s=>s.split(",").map(Number));return{c:"#"+e[0],w:+e[1],e:e[2]==="1",pts:n}}var wf=i=>i.map(vl).join("|"),Wr=i=>i?i.split("|").filter(Boolean).map(Sf):[];function Zv(i,t,e){i.beginPath(),i.moveTo(t[0][0]*e,t[0][1]*e);for(let s=1;s<t.length-1;s++)i.quadraticCurveTo(t[s][0]*e,t[s][1]*e,(t[s][0]+t[s+1][0])/2*e,(t[s][1]+t[s+1][1])/2*e);let n=t[t.length-1];i.lineTo(n[0]*e,n[1]*e)}function Tf(i,t,e,n=1){let s=e/1e3,r=n>=1?1/0:t.reduce((a,o)=>a+o.pts.length,0)*n;i.lineCap="round",i.lineJoin="round";for(let a of t){if(r<=0)break;let o=Math.min(a.pts.length,Math.ceil(r));r-=a.pts.length;let c=a.pts.slice(0,o);c.length&&(i.globalCompositeOperation=a.e?"destination-out":"source-over",i.strokeStyle=i.fillStyle=a.c,i.lineWidth=a.w*s,c.length===1?(i.beginPath(),i.arc(c[0][0]*s,c[0][1]*s,a.w*s/2,0,Math.PI*2),i.fill()):(Zv(i,c,s),i.stroke()))}i.globalCompositeOperation="source-over"}var Mi=class{constructor(t,e={}){this.cv=t,this.ctx=t.getContext("2d"),this.layer=document.createElement("canvas"),this.lctx=this.layer.getContext("2d"),this.bg=e.bg||"#fffaf3",this.readonly=!!e.readonly,this.me=e.me||"x",this.onUpdate=e.onUpdate,this.onEnd=e.onEnd,this.tool={c:wh[0],w:Th[1],e:!1},this.strokes=new Map,this.cur=null,this.dirty=!0,this.replay=null,this.alive=!0,this._cache=new Map,t.style.touchAction="none",this._bind();let n=()=>{this.alive&&(this._frame(),requestAnimationFrame(n))};requestAnimationFrame(n)}destroy(){this.alive=!1}list(){return[...this.strokes.values()].sort((t,e)=>t.t-e.t||(t.id<e.id?-1:1))}merge(t){let e=Date.now();for(let[n,s]of Object.entries(t||{})){if(this.cur&&this.cur.id===n)continue;let r=n+":"+s.d.length,a=this._cache.get(r);a||(a=Sf(s.d),this._cache.set(r,a)),this.strokes.set(n,{id:n,u:s.u,t:s.t,...a})}for(let[n,s]of[...this.strokes])t&&t[n]||this.cur&&this.cur.id===n||s.pendingUntil&&s.pendingUntil>e||this.strokes.delete(n);this.dirty=!0}setStrokes(t){this.strokes.clear(),t.forEach((e,n)=>this.strokes.set("s"+n,{id:"s"+n,t:n,u:"",...e})),this.dirty=!0}clearAll(){this.strokes.clear(),this.dirty=!0}myLast(){let t=this.list().filter(e=>e.u===this.me);return t[t.length-1]||null}removeLocal(t){this.strokes.delete(t),this.dirty=!0}playReplay(t=2600,e){this.replay={t0:performance.now(),ms:t,done:e},this.dirty=!0}_pt(t){let e=this.cv.getBoundingClientRect();return[Math.max(0,Math.min(1e3,Math.round((t.clientX-e.left)/e.width*1e3))),Math.max(0,Math.min(1e3,Math.round((t.clientY-e.top)/e.height*1e3)))]}_bind(){let t=this.cv;t.addEventListener("pointerdown",n=>{if(this.readonly||this.cur)return;t.setPointerCapture(n.pointerId);let s=this.tool;this.cur={id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),u:this.me,t:Date.now(),c:s.c,w:s.e?s.w*2.4:s.w,e:s.e,pts:[this._pt(n)]},this.strokes.set(this.cur.id,this.cur),this.dirty=!0,this._emit(!1),n.preventDefault()}),t.addEventListener("pointermove",n=>{let s=this.cur;if(!s)return;let r=n.getCoalescedEvents?n.getCoalescedEvents():[n];for(let a of r.length?r:[n]){let o=this._pt(a),c=s.pts[s.pts.length-1];Math.abs(o[0]-c[0])+Math.abs(o[1]-c[1])>=2&&s.pts.push(o)}this.dirty=!0,this._emit(!1)});let e=()=>{let n=this.cur;n&&(this._ended=n,this.cur=null,n.pendingUntil=Date.now()+5e3,this._emit(!0))};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}_emit(t){if(t){this.onEnd&&this.onEnd(this._ended);return}let e=performance.now();this._last&&e-this._last<110||(this._last=e,this.onUpdate&&this.onUpdate(this.cur))}_frame(){let t=this.cv.getBoundingClientRect();if(!t.width)return;let e=Math.min(window.devicePixelRatio||1,2),n=Math.round(t.width*e);this.cv.width!==n&&(this.cv.width=this.cv.height=this.layer.width=this.layer.height=n,this.dirty=!0);let s=1;if(this.replay&&(s=Math.min(1,(performance.now()-this.replay.t0)/this.replay.ms),this.dirty=!0,s>=1)){let r=this.replay.done;this.replay=null,r&&r()}this.dirty&&(this.dirty=!1,this.lctx.clearRect(0,0,n,n),Tf(this.lctx,this.list(),n,s),this.ctx.fillStyle=this.bg,this.ctx.fillRect(0,0,n,n),this.ctx.drawImage(this.layer,0,0))}toBlob(){return new Promise(t=>this.cv.toBlob(t,"image/png"))}};function Af(i,t=96,e="#fffaf3"){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d"),r=document.createElement("canvas");return r.width=r.height=t,Tf(r.getContext("2d"),Wr(i),t),s.fillStyle=e,s.fillRect(0,0,t,t),s.drawImage(r,0,0),n}function yl(i,t,e=[]){let n=wh.map(l=>C("button",{class:"sw","data-c":l,style:{background:l},"aria-label":l,onclick:()=>a(l)})),s=Th.map((l,h)=>C("button",{class:"sz","data-w":l,onclick:()=>o(l)},C("i",{style:{width:6+h*6+"px",height:6+h*6+"px"}}))),r=C("button",{class:"tb",id:"tb-eraser",title:t("eraser"),html:jt.eraser,onclick:()=>{i.tool.e=!i.tool.e,c()}});function a(l){i.tool.c=l,i.tool.e=!1,c()}function o(l){i.tool.w=l,c()}function c(){n.forEach(l=>l.classList.toggle("on",!i.tool.e&&l.dataset.c===i.tool.c)),s.forEach(l=>l.classList.toggle("on",+l.dataset.w===i.tool.w)),r.classList.toggle("on",i.tool.e)}return c(),C("div",{class:"toolbar"},C("div",{class:"row sws"},n),C("div",{class:"row"},s,r,...e))}function Ml(i,{path:t="canvas",head:e=null}={}){let{t:n,net:s,me:r}=i,a=C("canvas",{id:"shared-canvas",class:"board"}),o=C("div",{class:"g-note"}),c=new Mi(a,{me:r,onUpdate:v=>s.set(t+"/strokes/"+v.id,{u:v.u,t:v.t,d:vl(v)}),onEnd:v=>{v&&s.set(t+"/strokes/"+v.id,{u:v.u,t:v.t,d:vl(v)})}}),l=0,h=s.listen(t+"/strokes",v=>{l=Object.keys(v||{}).length,c.merge(v||{}),o.textContent=l>=500?n("canvasFull"):""}),u=C("button",{class:"tb",id:"tb-undo",title:n("undo"),html:jt.undo,onclick:()=>{let v=c.myLast();v&&(c.removeLocal(v.id),s.remove(t+"/strokes/"+v.id))}}),d=C("button",{class:"tb",id:"tb-clear",title:n("clear"),html:jt.trash,onclick:async()=>{await Us(n("clearConfirm"),n("yes"),n("no"))&&(c.clearAll(),s.remove(t+"/strokes"))}}),f=C("button",{class:"tb",id:"tb-save",title:n("save"),html:jt.save,onclick:async()=>{let v=await c.toBlob(),p=new File([v],"our-drawing.png",{type:"image/png"});try{if(navigator.canShare&&navigator.canShare({files:[p]})){await navigator.share({files:[p]});return}}catch{return}let m=document.createElement("a");m.href=URL.createObjectURL(v),m.download="our-drawing.png",document.body.append(m),m.click(),m.remove(),an(n("saved"))}});return{el:C("div",{class:"game canvas-game"},e,C("div",{class:"board-wrap"},a),o,yl(c,n,[u,d,f])),update(){},count:()=>l,wipe(){c.clearAll(),s.remove(t+"/strokes")},destroy(){h(),c.destroy()}}}function Ef(i){let{t,me:e,other:n}=i,s=C("div",{class:"b-list"}),r=C("div",{class:"game bottles"},C("button",{class:"btn big",id:"b-write",onclick:()=>i.push(t("writeBottle"),Ah(i))},C("span",{class:"ico",html:jt.bottle}),t("newBottle")),C("p",{class:"g-note"},t("bottleHelp")),s);function a(){let c=Object.entries(i.S.bottles||{}).map(([l,h])=>({id:l,...h})).sort((l,h)=>h.t-l.t);s.replaceChildren(...c.length?c.map(o):[C("div",{class:"empty"},t("noBottles"))])}function o(c){let l=c.f===e,h=!l&&!c.r,u=Af(c.s||"",84);return u.className="b-thumb",C("button",{class:"b-row"+(h?" unread":""),"data-id":c.id,onclick:()=>i.push(t("bottle"),Jv(i,c.id))},u,C("div",{class:"b-info"},C("b",{},l?t("toX",{name:i.name(n)}):t("fromX",{name:i.name(n)})),C("small",{},i.ago(c.t)+(c.x?" \xB7 "+c.x.slice(0,40):""))),h?C("i",{class:"dot"}):null)}return a(),{el:r,update:a,destroy(){}}}function Ah(i){let{t,me:e}=i,n=C("canvas",{id:"bottle-canvas",class:"board"}),s=new Mi(n,{me:e,bg:"#fff6e6"}),r=C("textarea",{id:"bottle-text",maxlength:120,rows:2,placeholder:t("bottleText")}),a=!1,o=C("button",{class:"btn big",id:"bottle-send",onclick:async()=>{if(a)return;let l=s.list(),h=r.value.trim();if(!l.length&&!h){an(t("drawSomething"));return}a=!0;let u=i.net.newId();i.net.set("bottles/"+u,{f:e,t:Date.now(),x:h,s:wf(l.map(d=>({c:d.c,w:d.w,e:d.e,pts:d.pts}))),r:0}),i.pruneBottles(),i.pop(),i.afterBottleSent(u)}},C("span",{class:"ico",html:jt.send}),t("sendBottle"));return{el:C("div",{class:"game compose"},C("div",{class:"board-wrap sm"},n),yl(s,t),r,o),update(){},destroy(){s.destroy()}}}function Jv(i,t){let{t:e,me:n}=i,s=(i.S.bottles||{})[t],r=C("canvas",{id:"viewer-canvas",class:"board"}),a=new Mi(r,{readonly:!0,bg:"#fff6e6"}),o=C("div",{class:"b-msg"}),c=C("div",{class:"b-from"}),l=C("div",{class:"row"}),h=C("div",{class:"game viewer"},c,C("div",{class:"board-wrap sm"},r),o,l),u=!1;function d(){let f=(i.S.bottles||{})[t];if(!f){i.pop();return}let _=f.f===n;c.textContent=(_?e("toX",{name:i.name(i.other)}):e("fromX",{name:i.name(i.other)}))+" \xB7 "+i.ago(f.t),o.textContent=f.x||"",u||(u=!0,a.setStrokes(Wr(f.s||"")),a.playReplay(Math.min(3600,900+Wr(f.s||"").reduce((v,p)=>v+p.pts.length,0)*12)),!_&&!f.r&&i.net.set("bottles/"+t+"/r",Date.now()),l.replaceChildren(_?null:C("button",{class:"btn",id:"bottle-reply",onclick:()=>i.replace(e("writeBottle"),Ah(i))},C("span",{class:"ico",html:jt.bottle}),e("reply")),C("button",{class:"btn ghost",id:"bottle-replay",onclick:()=>a.playReplay(2400)},e("replay"))))}return d(),{el:h,update:d,destroy(){a.destroy()}}}function Eh(i,t,{onClose:e,onLeave:n,others:s=0}={}){let{t:r,me:a}=i,o=(i.S.bottles||{})[t];if(!o)return n&&n(),e&&e(),null;let c=C("canvas",{id:"viewer-canvas",class:"board"}),l=new Mi(c,{readonly:!0,bg:"#fff6e6"}),h=Wr(o.s||""),u=!1,d=(v,p)=>{u||(u=!0,l.destroy(),_.close(),v?(p||n&&n(),v()):(n&&n(),e&&e()))},f=C("div",{class:"bc-glyph",html:jt.bottle}),_=Bn(C("div",{class:"bcard"},C("button",{class:"x bc-x",id:"bc-x","aria-label":r("close"),html:jt.close,onclick:()=>d()}),f,C("div",{class:"bc-from"},r("fromX",{name:i.name(i.other)})+" \xB7 "+i.ago(o.t)),C("div",{class:"board-wrap sm bc-paper"},c),o.x?C("div",{class:"b-msg bc-msg"},o.x):null,C("div",{class:"row bc-actions"},C("button",{class:"btn",id:"bottle-reply",onclick:()=>d(()=>i.push(r("writeBottle"),Ah(i)))},C("span",{class:"ico",html:jt.bottle}),r("reply")),C("button",{class:"btn ghost",id:"bottle-replay",onclick:()=>l.playReplay(2400)},r("again"))),s>0?C("button",{class:"btn ghost bc-more",id:"bc-next",onclick:()=>d(()=>{let v=Kv(i,t);v?Eh(i,v,{onClose:e,onLeave:n,others:Math.max(0,s-1)}):(n&&n(),e&&e())},!0)},r("bottleMore",{n:s})):null),{cls:"bcard-modal",onClose:()=>{u||(u=!0,l.destroy(),n&&n(),e&&e())}});return setTimeout(()=>{u||(l.setStrokes(h),l.playReplay(Math.min(3600,900+h.reduce((v,p)=>v+p.pts.length,0)*12)))},520),!o.r&&o.f!==a&&i.net.set("bottles/"+t+"/r",Date.now()),_}function Ch(i){return Object.entries(i.S.bottles||{}).filter(([,t])=>t.f!==i.me&&!t.r).map(([t,e])=>({id:t,t:e.t})).sort((t,e)=>t.t-e.t)}function Kv(i,t){let e=Ch(i).filter(n=>n.id!==t);return e.length?e[0].id:null}var jv=i=>[...i].map(t=>t.codePointAt(0).toString(16)).filter(t=>t!=="fe0f").join("-"),Xi=i=>"assets/emoji/"+jv(i)+".svg",Xr=(i,t="")=>`<img class="em${t?" "+t:""}" src="${Xi(i)}" alt="${i}" data-e="${i}" draggable="false">`;function Cf(i,t=""){let e=document.createElement("img");return e.className="em"+(t?" "+t:""),e.src=Xi(i),e.alt=i,e.draggable=!1,e.dataset.e=i,e}var Qv=[];function Rf(i){for(let t of new Set(i)){let e=new Image;e.src=Xi(t),Qv.push(e),e.decode&&e.decode().catch(()=>{})}}typeof document<"u"&&document.addEventListener("error",i=>{let t=i.target;if(t&&t.tagName==="IMG"&&t.classList.contains("em")){let e=document.createElement("span");e.className="emf",e.textContent=t.alt,e.dataset.e=t.dataset.e||t.alt,t.replaceWith(e)}},!0);var Rh={"\u{1F60A}":["\u2728","\u{1F338}","\u2600\uFE0F"],"\u{1F970}":["\u{1F497}","\u{1F495}","\u{1F496}","\u2728"],"\u{1F634}":["\u{1F4A4}","\u{1F4A4}","\u2728","\u{1F319}"],"\u{1F60E}":["\u2728","\u2B50","\u{1F4AB}"],"\u{1F914}":["\u2753","\u{1F4AD}","\u2728"],"\u{1F622}":["\u{1F4A7}","\u{1F4A7}","\u{1F499}"],"\u{1F624}":["\u{1F4A2}","\u{1F4A8}","\u{1F525}"],"\u{1F973}":["\u{1F389}","\u{1F38A}","\u2728","\u{1F388}"],"\u{1F912}":["\u2744\uFE0F","\u{1F4A7}","\u{1F48A}"],"\u{1F917}":["\u{1F49B}","\u{1F9E1}","\u2728"],"\u{1F60B}":["\u{1F370}","\u2728","\u{1F60B}"],"\u{1F3A7}":["\u{1F3B5}","\u{1F3B6}","\u2728"],"\u2615":["\u2601\uFE0F","\u2728","\u{1F90E}"],"\u{1F4AA}":["\u26A1","\u{1F525}","\u2728"],"\u{1F327}\uFE0F":["\u{1F4A7}","\u2614","\u2601\uFE0F"],"\u2728":["\u2728","\u2B50","\u{1F4AB}","\u{1F31F}"]},Pf=()=>document.getElementById("fx"),bi=(i,t)=>i+Math.random()*(t-i),ty=i=>i[Math.random()*i.length|0],If=()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}},Ph=()=>!!(Pf()&&Element.prototype.animate)&&!If(),Sl=i=>({x:i.left+i.width/2,y:i.top+i.height/2});function qr(i,t,e,n,s){let r;i?(r=document.createElement("img"),r.src=Xi(i),r.alt="",r.draggable=!1,r.decoding="async",r.style.width=r.style.height=s+"px"):r=document.createElement("i"),r.className=t,r.style.left=e+"px",r.style.top=n+"px";let a=Pf();for(;a.childElementCount>90;)a.firstElementChild.remove();return a.append(r),r}var wl=(i,t)=>{i.onfinish=()=>t.remove(),i.oncancel=()=>t.remove()},Ue="translate(-50%,-50%)";function bl(i,t,{n:e=14,spread:n=150,lift:s=30}={}){if(!Ph())return;let r=Rh[i]||[i,"\u2728"];for(let a=0;a<e;a++){let o=a/e*Math.PI*2+bi(-.28,.28),c=n*bi(.55,1.15),l=Math.cos(o)*c,h=Math.sin(o)*c*.85-s,u=bi(26,70),d=bi(.7,1.25)/1.25,f=bi(-80,80),_=qr(ty(r),"mfx-p",t.x,t.y,Math.round(bi(19,32)));wl(_.animate([{transform:`${Ue} translate(0px,0px) scale(.15) rotate(0deg)`,opacity:0},{transform:`${Ue} translate(${l*.62}px,${h*.62}px) scale(${d}) rotate(${f*.5}deg)`,opacity:1,offset:.34},{transform:`${Ue} translate(${l}px,${h+u}px) scale(${d*.75}) rotate(${f}deg)`,opacity:0}],{duration:bi(900,1500),delay:bi(0,140),easing:"cubic-bezier(.12,.75,.3,1)",fill:"forwards"}),_)}}function Lf(i,t=34,e){let n=qr("","mfx-ring",i.x,i.y);n.style.width=n.style.height=t+"px",e&&(n.style.borderColor=e),wl(n.animate([{transform:`${Ue} scale(.5)`,opacity:.9},{transform:`${Ue} scale(2.6)`,opacity:0}],{duration:760,easing:"cubic-bezier(.1,.6,.3,1)",fill:"forwards"}),n)}function Tl(i){!i||!i.animate||If()||i.animate([{transform:"scale(.35)",offset:0},{transform:"scale(1.42)",offset:.42},{transform:"scale(.92)",offset:.7},{transform:"scale(1)",offset:1}],{duration:640,easing:"cubic-bezier(.3,.1,.2,1)"})}function Df(i,t,e,n){if(!Ph()){n&&n();return}let s=Sl(t),r=Sl(e),a=qr("","mfx-glow",s.x,s.y);wl(a.animate([{transform:`${Ue} scale(.2)`,opacity:0},{transform:`${Ue} scale(1.1)`,opacity:1,offset:.26},{transform:`${Ue} scale(1.55)`,opacity:0}],{duration:1150,easing:"cubic-bezier(.2,.7,.3,1)",fill:"forwards"}),a);let c=qr(i,"mfx-big",s.x,s.y,150),l=c.animate([{transform:`${Ue} scale(.2) rotate(0deg)`,opacity:0,offset:0,easing:"cubic-bezier(.25,.9,.3,1.1)"},{transform:`${Ue} scale(1) rotate(-12deg)`,opacity:1,offset:.2,easing:"ease-in-out"},{transform:`${Ue} scale(.79) rotate(8deg)`,opacity:1,offset:.36,easing:"ease-in-out"},{transform:`${Ue} scale(.89) rotate(-5deg)`,opacity:1,offset:.55,easing:"ease-in-out"},{transform:`${Ue} scale(.82) rotate(3deg)`,opacity:1,offset:.78,easing:"ease-in-out"},{transform:`${Ue} scale(.85) rotate(0deg)`,opacity:1,offset:1}],{duration:980,fill:"forwards"});setTimeout(()=>bl(i,s,{n:15,spread:150}),110),setTimeout(()=>bl(i,s,{n:8,spread:95,lift:10}),330),l.onfinish=()=>{let h=r.x-s.x,u=r.y-s.y,d=Math.hypot(h,u)||1,f=-u/d,_=h/d,v=Math.min(110,d*.28)*(_>0?-1:1),p=(s.x+r.x)/2+f*v,m=(s.y+r.y)/2+_*v,M=18,T=[];for(let A=0;A<=M;A++){let S=A/M,x=S<.5?4*S*S*S:1-Math.pow(-2*S+2,3)/2,g=1-x,L=g*g*s.x+2*g*x*p+x*x*r.x,I=g*g*s.y+2*g*x*m+x*x*r.y;T.push({transform:`translate(calc(-50% + ${(L-s.x).toFixed(1)}px),calc(-50% + ${(I-s.y).toFixed(1)}px)) scale(${(.85+(.18-.85)*x).toFixed(3)}) rotate(${(Math.sin(S*Math.PI)*10).toFixed(1)}deg)`,opacity:1})}let y=c.animate(T,{duration:700,easing:"linear",fill:"forwards"});y.onfinish=()=>{c.remove(),Lf(r,36),bl(i,r,{n:7,spread:46,lift:6}),n&&n()}}}function Nf(i,t,e){if(!Ph())return;let n={x:t,y:e},s=qr(i,"mfx-big",t,e,110);wl(s.animate([{transform:`${Ue} scale(.12) rotate(0deg)`,opacity:0,offset:0,easing:"cubic-bezier(.25,.9,.3,1.1)"},{transform:`${Ue} scale(.9) rotate(-10deg)`,opacity:1,offset:.2,easing:"ease-in-out"},{transform:`${Ue} translateY(-4px) scale(.77) rotate(6deg)`,opacity:1,offset:.45,easing:"ease-in-out"},{transform:`${Ue} translateY(-14px) scale(.81) rotate(-3deg)`,opacity:1,offset:.72},{transform:`${Ue} translateY(-38px) scale(.54) rotate(0deg)`,opacity:0,offset:1}],{duration:1500,fill:"forwards"}),s),Lf(n,30),setTimeout(()=>bl(i,n,{n:10,spread:100}),90)}var ce=(i,t,e,n,s)=>({n:{en:i,ru:t},lat:e,lon:n,tz:s}),Uf=[ce("Tula","\u0422\u0443\u043B\u0430",54.1931,37.6173,"Europe/Moscow"),ce("Seattle","\u0421\u0438\u044D\u0442\u043B",47.6062,-122.3321,"America/Los_Angeles"),ce("Moscow","\u041C\u043E\u0441\u043A\u0432\u0430",55.7558,37.6173,"Europe/Moscow"),ce("Saint Petersburg","\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",59.9343,30.3351,"Europe/Moscow"),ce("Kazan","\u041A\u0430\u0437\u0430\u043D\u044C",55.7887,49.1221,"Europe/Moscow"),ce("Sochi","\u0421\u043E\u0447\u0438",43.5855,39.7231,"Europe/Moscow"),ce("Kaliningrad","\u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434",54.7104,20.4522,"Europe/Kaliningrad"),ce("Yekaterinburg","\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0431\u0443\u0440\u0433",56.8389,60.6057,"Asia/Yekaterinburg"),ce("Novosibirsk","\u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A",55.0084,82.9357,"Asia/Novosibirsk"),ce("Vladivostok","\u0412\u043B\u0430\u0434\u0438\u0432\u043E\u0441\u0442\u043E\u043A",43.1155,131.8855,"Asia/Vladivostok"),ce("London","\u041B\u043E\u043D\u0434\u043E\u043D",51.5072,-.1276,"Europe/London"),ce("Paris","\u041F\u0430\u0440\u0438\u0436",48.8566,2.3522,"Europe/Paris"),ce("Berlin","\u0411\u0435\u0440\u043B\u0438\u043D",52.52,13.405,"Europe/Berlin"),ce("Rome","\u0420\u0438\u043C",41.9028,12.4964,"Europe/Rome"),ce("Barcelona","\u0411\u0430\u0440\u0441\u0435\u043B\u043E\u043D\u0430",41.3874,2.1686,"Europe/Madrid"),ce("Prague","\u041F\u0440\u0430\u0433\u0430",50.0755,14.4378,"Europe/Prague"),ce("Istanbul","\u0421\u0442\u0430\u043C\u0431\u0443\u043B",41.0082,28.9784,"Europe/Istanbul"),ce("Dubai","\u0414\u0443\u0431\u0430\u0439",25.2048,55.2708,"Asia/Dubai"),ce("Tbilisi","\u0422\u0431\u0438\u043B\u0438\u0441\u0438",41.7151,44.8271,"Asia/Tbilisi"),ce("Yerevan","\u0415\u0440\u0435\u0432\u0430\u043D",40.1792,44.4991,"Asia/Yerevan"),ce("Tokyo","\u0422\u043E\u043A\u0438\u043E",35.6762,139.6503,"Asia/Tokyo"),ce("Seoul","\u0421\u0435\u0443\u043B",37.5665,126.978,"Asia/Seoul"),ce("Bangkok","\u0411\u0430\u043D\u0433\u043A\u043E\u043A",13.7563,100.5018,"Asia/Bangkok"),ce("Singapore","\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440",1.3521,103.8198,"Asia/Singapore"),ce("Sydney","\u0421\u0438\u0434\u043D\u0435\u0439",-33.8688,151.2093,"Australia/Sydney"),ce("Reykjavik","\u0420\u0435\u0439\u043A\u044C\u044F\u0432\u0438\u043A",64.1466,-21.9426,"Atlantic/Reykjavik"),ce("New York","\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",40.7128,-74.006,"America/New_York"),ce("Chicago","\u0427\u0438\u043A\u0430\u0433\u043E",41.8781,-87.6298,"America/Chicago"),ce("Los Angeles","\u041B\u043E\u0441-\u0410\u043D\u0434\u0436\u0435\u043B\u0435\u0441",34.0522,-118.2437,"America/Los_Angeles"),ce("San Francisco","\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E",37.7749,-122.4194,"America/Los_Angeles"),ce("Portland","\u041F\u043E\u0440\u0442\u043B\u0435\u043D\u0434",45.5152,-122.6784,"America/Los_Angeles"),ce("Vancouver","\u0412\u0430\u043D\u043A\u0443\u0432\u0435\u0440",49.2827,-123.1207,"America/Vancouver")],Ff="https://geocoding-api.open-meteo.com/v1/",Of=i=>{let t=new AbortController;return setTimeout(()=>t.abort(),i),t.signal};async function Bf(i,t){let e=await fetch(`${Ff}search?name=${encodeURIComponent(i)}&count=8&language=${t}&format=json`,{signal:Of(6e3)});if(!e.ok)throw new Error("geo "+e.status);return((await e.json()).results||[]).filter(s=>s.timezone).map(s=>({id:s.id,n:{[t]:s.name},lat:s.latitude,lon:s.longitude,tz:s.timezone,sub:[s.admin1,s.country].filter(Boolean).join(", ")}))}async function kf(i,t){let e=t==="ru"?"en":"ru",n={n:{en:i.n.en,ru:i.n.ru},lat:+i.lat.toFixed(4),lon:+i.lon.toFixed(4),tz:i.tz};if(!i.n[e]&&i.id)try{let s=await fetch(`${Ff}get?id=${i.id}&language=${e}`,{signal:Of(3500)});if(s.ok){let r=await s.json();r&&r.name&&(n.n[e]=r.name)}}catch{}return n.n.en=n.n.en||n.n[t],n.n.ru=n.n.ru||n.n[t],n}function zf(i,{fmtTime:t,canReset:e,resetName:n,onPick:s,onReset:r}){let{t:a}=i,o=i.lang(),c=C("input",{id:"city-q",type:"search",placeholder:a("citySearch"),autocomplete:"off",autocapitalize:"words",spellcheck:"false",enterkeyhint:"search"}),l=C("div",{class:"city-list",id:"city-list"}),h=C("p",{class:"small city-note"}),u,d=0,f=null,_=!1,v=A=>A.n[o]||A.n.en||A.n.ru||"",p=(A,S)=>C("button",{class:"city-row","data-i":S,onclick:()=>T(A)},C("span",{class:"cr-n"},C("b",{},v(A)),A.sub?C("small",{},A.sub):null),C("span",{class:"cr-t"},t(A.tz))),m=(A,S)=>{l.replaceChildren(...S?[C("div",{class:"city-h"},S)]:[],...A.map(p))},M=(A="")=>{let S=A.trim().toLowerCase();return Uf.filter(x=>!S||x.n.en.toLowerCase().includes(S)||x.n.ru.toLowerCase().includes(S))};async function T(A){if(_)return;_=!0,l.classList.add("busy");let S=await kf(A,o);u.close(),s(S)}async function y(){let A=c.value.trim(),S=++d;if(h.textContent="",A.length<2){m(M(),a("cityPopular"));return}let x=M(A);m(x);try{let g=await Bf(A,o);if(S!==d)return;let L=U=>x.some(H=>Math.abs(H.lat-U.lat)<.15&&Math.abs(H.lon-U.lon)<.15),I=[...x,...g.filter(U=>!L(U))];I.length?m(I):(l.replaceChildren(),h.textContent=a("cityNo"))}catch{if(S!==d)return;x.length?h.textContent=a("cityOffline"):h.textContent=a("cityNo")}}c.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(y,260)}),u=Bn(C("div",{class:"cityp"},C("h3",{},a("cityTitle")),c,h,l,e?C("button",{class:"btn ghost",id:"city-reset",onclick:()=>{u.close(),r()}},a("cityReset",{city:n})):null)),m(M(),a("cityPopular")),setTimeout(()=>{try{c.focus({preventScroll:!0})}catch{}},350)}var fn=i=>i.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>t.split("|")),ei=[{id:"us",ru:"\u041C\u044B \u0432\u0434\u0432\u043E\u0451\u043C",en:"Us two",items:fn(`
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
`)},{id:"sweet",ru:"\u041C\u0438\u043B\u043E\u0435",en:"Sweet",items:fn(`
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
`)},{id:"animals",ru:"\u0416\u0438\u0432\u043E\u0442\u043D\u044B\u0435",en:"Animals",items:fn(`
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
`)},{id:"food",ru:"\u0415\u0434\u0430",en:"Food",items:fn(`
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
`)},{id:"places",ru:"\u041C\u0435\u0441\u0442\u0430",en:"Places",items:fn(`
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
`)},{id:"nature",ru:"\u041F\u0440\u0438\u0440\u043E\u0434\u0430",en:"Nature",items:fn(`
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
`)},{id:"fantasy",ru:"\u0424\u044D\u043D\u0442\u0435\u0437\u0438",en:"Fantasy",items:fn(`
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
`)},{id:"funny",ru:"\u0421\u043C\u0435\u0448\u043D\u043E\u0435",en:"Silly",items:fn(`
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
`)},{id:"objects",ru:"\u0412\u0435\u0449\u0438",en:"Things",items:fn(`
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
`)},{id:"feelings",ru:"\u0427\u0443\u0432\u0441\u0442\u0432\u0430",en:"Feelings",items:fn(`
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
`)},{id:"hobbies",ru:"\u0417\u0430\u043D\u044F\u0442\u0438\u044F",en:"Activities",items:fn(`
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
`)}],Al={who:fn(`
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
`),does:fn(`
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
`)},ey=ei.map(i=>i.id),z1=ei.reduce((i,t)=>i+t.items.length,0),ny=i=>i[Math.random()*i.length|0];function Hf(i,t){if(!i)return"";let e=t==="ru"?0:1;if(i.k==="mix"){let r=Al.who[i.a],a=Al.does[i.b];return!r||!a?"":t==="ru"?`${r[0]} ${a[0]}`:`${r[1]} ${a[1]}`}let n=ei.find(r=>r.id===i.k),s=n&&n.items[i.i];return s?s[e]||s[0]:""}function Ih(i,t){if(!i)return"";if(i.k==="mix")return t==="ru"?"\u0411\u0435\u0437\u0443\u043C\u043D\u044B\u0439 \u043C\u0438\u043A\u0441":"Wild mix";let e=ei.find(n=>n.id===i.k);return e?t==="ru"?e.ru:e.en:""}function Lh(i,t=[]){let e=new Set(t);for(let n=0;n<30;n++){let s=i;s==="all"&&(s=Math.random()<.18?"mix":ny(ey));let r;if(s==="mix")r={k:s,a:Math.random()*Al.who.length|0,b:Math.random()*Al.does.length|0};else{let o=ei.find(c=>c.id===s)||ei[0];r={k:o.id,i:Math.random()*o.items.length|0}}let a=r.k+":"+(r.k==="mix"?r.a+"-"+r.b:r.i);if(!e.has(a))return r}return{k:"sweet",i:0}}var Gf=i=>i.k+":"+(i.k==="mix"?i.a+"-"+i.b:i.i);var Xf="g_theme_recent",Vf="g_theme_cat",Dh=()=>{try{return JSON.parse(localStorage.getItem(Xf)||"[]")}catch{return[]}},Wf=i=>{try{localStorage.setItem(Xf,JSON.stringify([...Dh().slice(-80),Gf(i)]))}catch{}};function qf(i){let{t,net:e,me:n}=i,s=()=>i.lang(),r=null,a=localStorage.getItem(Vf)||"all",o=C("span",{class:"th-lab"}),c=C("div",{class:"th-t",id:"th-t"}),l=["all",...ei.map(M=>M.id),"mix"].map(M=>C("button",{class:"th-chip","data-c":M,onclick:()=>{a=M,localStorage.setItem(Vf,M),u()}})),h=()=>{l.forEach(M=>{let T=M.dataset.c;M.textContent=T==="all"?t("themeAll"):T==="mix"?Ih({k:"mix"},s()):(()=>{let y=ei.find(A=>A.id===T);return s()==="ru"?y.ru:y.en})(),M.classList.toggle("on",T===a)})};function u(){h();let M=Hf(r,s());o.textContent=t("themeLabel")+(r?" \xB7 "+Ih(r,s()):""),c.textContent!==M&&(c.textContent=M,c.classList.remove("swap"),c.offsetWidth,c.classList.add("swap"))}let d=async()=>{if(v.count()>0&&!await Us(t("themeNewConfirm"),t("yes"),t("no")))return;let M=Lh(a,Dh());Wf(M),v.wipe(),e.set("theme/topic",{...M,t:Date.now(),by:n})},f=C("div",{class:"th-cats"},l),_=C("div",{class:"theme"},C("div",{class:"th-top"},o,C("button",{class:"th-new",id:"th-new",onclick:d},C("i",{html:jt.shuffle}),C("span",{},t("themeNew")))),c,f),v=Ml(i,{path:"theme",head:_}),p=!0,m=e.listen("theme/topic",M=>{if(!M&&p){p=!1,r=Lh("all",Dh()),Wf(r),e.set("theme/topic",{...r,t:Date.now(),by:n}),u();return}p=!1,M&&(r={k:M.k,i:M.i,a:M.a,b:M.b}),u()});return u(),setTimeout(()=>{let M=f.querySelector(".on");M&&(f.scrollLeft=Math.max(0,M.offsetLeft-60))},30),{el:v.el,update:u,destroy(){m(),v.destroy()}}}function iy(i,t){let e=JSON.parse(JSON.stringify(i));for(let[n,s]of Object.entries(t)){let r=n.split("/"),a=e;for(let o=0;o<r.length-1;o++)(!a[r[o]]||typeof a[r[o]]!="object")&&(a[r[o]]={}),a=a[r[o]];a[r[r.length-1]]=s}return e}function Si(i,t,e,n,s){e?i.patch(t,s):i.set(t,iy(n,s))}var sy=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],ry={lesha:"L",ari:"A"},El=i=>({b:".........",turn:i,starter:i,w:"",s:{lesha:0,ari:0},n:1}),Yf=i=>sy.find(([t,e,n])=>i[t]!=="."&&i[t]===i[e]&&i[e]===i[n]),ay='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',oy='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 2.7 4.5 6.3 4.5c2 0 3.7 1.1 4.7 2.7h2c1-1.6 2.7-2.7 4.7-2.7 3.6 0 5.4 3.7 3.9 7.2C19.5 16.4 12 21 12 21z"/></svg>';function $f(i){let{t,net:e,me:n,other:s}=i,r=C("div",{class:"ttt-score"}),a=C("div",{class:"g-status",id:"ttt-status"}),o=[...Array(9)].map((p,m)=>C("button",{class:"ttt-cell","data-i":m,onclick:()=>d(m)})),c=C("button",{class:"btn",id:"ttt-new",onclick:f},t("newRound")),l=C("button",{class:"btn ghost",id:"ttt-clear",onclick:_},t("tttClear")),h=C("div",{class:"game ttt"},r,a,C("div",{class:"ttt-grid"},o),c,l),u=()=>i.S.games.ttt||null;function d(p){let m=u()||El("lesha");if(m.w||m.turn!==n||m.b[p]!==".")return;let M=m.b.slice(0,p)+ry[n]+m.b.slice(p+1),T=Yf(M),y=!M.includes("."),A=T?n:y?"d":"",S={b:M,turn:s,w:A};A===n&&(S["s/"+n]=(m.s&&m.s[n]||0)+1),Si(e,"games/ttt",u(),m,S)}function f(){let p=u()||El("lesha"),m=p.starter==="lesha"?"ari":"lesha";e.set("games/ttt",{b:".........",turn:m,starter:m,w:"",s:p.s||{lesha:0,ari:0},n:(p.n||1)+1})}function _(){let p=u()||El("lesha");if(p.b==="........."&&!p.w)return;let m=p.starter||"lesha";e.set("games/ttt",{b:".........",turn:m,starter:m,w:"",s:p.s||{lesha:0,ari:0},n:p.n||1})}function v(){let p=u()||El("lesha"),m=Yf(p.b);o.forEach((M,T)=>{let y=p.b[T];M.innerHTML=y==="L"?ay:y==="A"?oy:"",M.className="ttt-cell"+(y==="L"?" lesha":y==="A"?" ari":"")+(m&&m.includes(T)?" win":"")+(!p.w&&p.turn===n&&y==="."?" can":"")}),r.innerHTML=`<span class="s-l">${i.name("lesha")} ${p.s&&p.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${p.s&&p.s.ari||0}</span>`,a.textContent=p.w==="d"?t("draw"):p.w?p.w===n?t("youWin"):t("theyWin",{name:i.name(p.w)}):p.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(p.turn)}),a.className="g-status"+(!p.w&&p.turn===n?" mine":""),c.style.display=p.w?"":"none",l.style.display=!p.w&&p.b!=="........."?"":"none"}return v(),{el:h,update:v,destroy(){}}}var ie=10,Zr=ie*ie,wi=[4,3,3,2,2,2,1,1,1,1],$r=".".repeat(Zr),Cl=(i,t=1)=>({v:2,n:t,st:"place",starter:i,turn:i,ready:{lesha:0,ari:0},b:{lesha:"",ari:""},sh:{lesha:$r,ari:$r},win:""}),Zf={ru:"\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u041A",en:"ABCDEFGHIJ"},Qf=()=>Zf[Me()]||Zf.en,ly=i=>Qf()[i%ie]+(Math.floor(i/ie)+1),Rl=i=>Array.from({length:i.len},(t,e)=>(i.y+(i.h?0:e))*ie+i.x+(i.h?e:0)),Uh=i=>i.x>=0&&i.y>=0&&(i.h?i.x+i.len<=ie&&i.y<ie:i.y+i.len<=ie&&i.x<ie);function Yr(i,t){if(!Uh(i))return!1;let e=new Set;t.forEach(n=>Rl(n).forEach(s=>e.add(s)));for(let n of Rl(i)){let s=n%ie,r=Math.floor(n/ie);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let c=s+o,l=r+a;if(c>=0&&l>=0&&c<ie&&l<ie&&e.has(l*ie+c))return!1}}return!0}function cy(){for(let i=0;i<500;i++){let t=[],e=!0;for(let n=0;n<wi.length&&e;n++){let s=!1;for(let r=0;r<80&&!s;r++){let a={id:n,len:wi[n],h:Math.random()<.5,x:Math.floor(Math.random()*ie),y:Math.floor(Math.random()*ie)};Yr(a,t)&&(t.push(a),s=!0)}e=s}if(e)return t}return[]}var Nh=i=>{let t=Array(Zr).fill(".");return i.forEach(e=>Rl(e).forEach(n=>t[n]=String(e.id))),t.join("")};function Jf(i){let t=[];if(!i)return t;for(let e=0;e<wi.length;e++){let n=[];for(let s=0;s<Zr;s++)i[s]===String(e)&&n.push(s);n.length&&t.push({id:e,len:n.length,x:n[0]%ie,y:Math.floor(n[0]/ie),h:n.length===1||n[1]-n[0]===1,cells:n})}return t}var hy=i=>{let t=new Set,e=new Set(i);for(let n of i){let s=n%ie,r=Math.floor(n/ie);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let c=s+o,l=r+a;c>=0&&l>=0&&c<ie&&l<ie&&!e.has(l*ie+c)&&t.add(l*ie+c)}}return t},Kf=(i,t="")=>C("div",{class:"bs-hull "+t,"data-id":i.id,style:{left:i.x*ie+"%",top:i.y*ie+"%",width:(i.h?i.len:1)*ie+"%",height:(i.h?1:i.len)*ie+"%"}},C("i")),jf="g_bs_draft";function tp(i){let{t,net:e,me:n,other:s}=i,r=()=>{let P=i.S.games.bs;return P&&P.v===2?P:null},a=[],o=null,c=32;function l(P){let k=Array.from({length:Zr},(pt,lt)=>C("button",{class:"bs-cell","data-i":lt,tabindex:P?0:-1,onclick:P?()=>Pt(lt):null})),z=C("div",{class:"bs-cells"},k),$=C("div",{class:"bs-ships"}),nt=C("div",{class:"bs-grid"},$,z),dt=C("div",{class:"bs-lab-x"}),Q=C("div",{class:"bs-lab-y"}),It=C("div",{class:"bs-frame"},dt,Q,nt),Lt=()=>{let pt=Qf();dt.replaceChildren(...[...pt].map(lt=>C("i",{},lt))),Q.replaceChildren(...Array.from({length:ie},(lt,Ut)=>C("i",{},Ut+1)))};return Lt(),{cells:k,hulls:$,grid:nt,frame:It,labels:Lt}}let h=l(!0),u=l(!1),d=C("div",{class:"g-status",id:"bs-status"}),f=C("div",{class:"g-note",id:"bs-hint"}),_=C("div",{class:"bs-banner",id:"bs-banner"}),v=C("div",{class:"bs-fleet",id:"bs-fleet-enemy"}),p=C("div",{class:"bs-fleet",id:"bs-fleet-mine"}),m=C("div",{class:"bs-box bs-enemy"},C("div",{class:"bs-cap"},C("span",{id:"bs-enemy-cap"},t("enemyWaters"))),v,C("div",{class:"bs-wrap"},h.frame,_)),M=C("div",{class:"bs-cap",id:"bs-mine-cap"},t("yourFleet")),T=C("div",{class:"bs-side"},M,p),y=C("div",{class:"bs-mine-row"},C("div",{class:"bs-mine-board"},u.frame),T),A=C("div",{class:"bs-dock",id:"bs-dock"}),S=C("div",{class:"row bs-ctrl"}),x=C("button",{class:"btn",id:"bs-new",onclick:Xt},t("newGame")),g=C("div",{class:"game bs"},d,f,m,y,A,S,x),L=P=>a.find(k=>k.id===P),I=()=>{let P=r();try{localStorage.setItem(jf,JSON.stringify({n:P?P.n:1,ships:a}))}catch{}};function U(P){try{let k=JSON.parse(localStorage.getItem(jf)||"null");k&&k.n===P&&Array.isArray(k.ships)&&(a=k.ships.filter((z,$,nt)=>wi[z.id]===z.len&&Yr(z,nt.slice(0,$))))}catch{a=[]}}function H(P){return{x:P.clientX,y:P.clientY}}function Z(P,k,z,$){if(P.button>0)return;P.preventDefault();let nt=$.getBoundingClientRect(),dt=L(k);o={id:k,fromDock:z,orig:dt?{...dt}:null,sx:P.clientX,sy:P.clientY,offX:P.clientX-nt.left,offY:P.clientY-nt.top,moved:!1,ghost:null,h:dt?dt.h:!0,touch:P.pointerType!=="mouse",len:wi[k],tgt:null},window.addEventListener("pointermove",q),window.addEventListener("pointerup",J),window.addEventListener("pointercancel",J)}function N(P){let k=u.grid.getBoundingClientRect(),z=k.width/ie,$=o.touch?z*1.6:0,nt=P.clientX-o.offX,dt=P.clientY-o.offY-$,Q={id:o.id,len:o.len,h:o.h,x:Math.round((nt-k.left)/z),y:Math.round((dt-k.top)/z)};return{s:Q,ok:Yr(Q,a.filter(It=>It.id!==o.id)),gr:k,c:z,tlx:nt,tly:dt}}function q(P){if(!o||!o.moved&&Math.hypot(P.clientX-o.sx,P.clientY-o.sy)<7)return;o.moved||(o.moved=!0,o.ghost=C("div",{class:"bs-drag"+(o.h?"":" v")},C("b")),document.body.append(o.ghost),L(o.id)&&(a=a.filter(pt=>pt.id!==o.id),ht()));let k=N(P);o.tgt=k;let z=k.s.x>-3&&k.s.y>-3&&k.s.x<ie+2&&k.s.y<ie+2,$=o.ghost,nt=(o.h?o.len:1)*k.c,dt=(o.h?1:o.len)*k.c;$.style.width=nt+"px",$.style.height=dt+"px";let Q=z&&Uh(k.s),It=Q?k.gr.left+k.s.x*k.c:k.tlx,Lt=Q?k.gr.top+k.s.y*k.c:k.tly;$.style.transform=`translate(${It}px,${Lt}px)`,$.classList.toggle("ok",Q&&k.ok),$.classList.toggle("bad",Q&&!k.ok),$.classList.toggle("free",!Q),u.grid.classList.add("aim")}function J(P){window.removeEventListener("pointermove",q),window.removeEventListener("pointerup",J),window.removeEventListener("pointercancel",J);let k=o;if(o=null,!k)return;if(u.grid.classList.remove("aim"),k.ghost&&k.ghost.remove(),!k.moved){k.orig&&P.type!=="pointercancel"&&X(k.orig);return}let z=k.tgt;if(P.type!=="pointercancel"&&z&&Uh(z.s)&&z.ok)a.push({id:k.id,len:k.len,h:k.h,x:z.s.x,y:z.s.y});else if(k.orig){a.push(k.orig);let $=u.grid.getBoundingClientRect();z&&P.clientY>$.top-60&&P.clientY<$.bottom+20&&i.toast(t("noFit"))}I(),ht()}function X(P){let k=a.filter($=>$.id!==P.id),z={...P,h:!P.h};if(!Yr(z,k)){let $={...z,x:Math.min(z.x,z.h?ie-z.len:ie-1),y:Math.min(z.y,z.h?ie-1:ie-z.len)};if(Yr($,k))z=$;else{ct(P.id),i.toast(t("noFit"));return}}a=a.map($=>$.id===P.id?z:$),I(),ht()}function ct(P){let k=u.hulls.querySelector(`[data-id="${P}"]`);k&&(k.classList.remove("shake"),k.offsetWidth,k.classList.add("shake"))}function K(){a=cy(),I(),ht()}function rt(){a=[],I(),ht()}function ot(){if(a.length<wi.length)return;let P=r()||Cl("lesha"),k={["b/"+n]:Nh(a),["ready/"+n]:1};P.ready&&P.ready[s]&&(k.st="play",k.turn=P.starter),Si(e,"games/bs",r(),P,k)}function Pt(P){let k=r();if(!k||k.st!=="play"||k.turn!==n)return;let z=k.sh[n];if(z[P]!==".")return;let $=k.b[s];if(!$)return;let nt=$[P],dt=nt!==".",Q=z.slice(0,P)+(dt?"h":"m")+z.slice(P+1),It=dt?"h":"m";if(dt){let pt=[];for(let lt=0;lt<Zr;lt++)$[lt]===nt&&pt.push(lt);if(pt.every(lt=>Q[lt]==="h")){let lt=[...Q];pt.forEach(Ut=>lt[Ut]="k"),hy(pt).forEach(Ut=>{lt[Ut]==="."&&(lt[Ut]="o")}),Q=lt.join(""),It="s"}}let Lt={["sh/"+n]:Q,turn:dt?n:s,last:{by:n,i:P,r:It,t:Date.now()}};[...$].every((pt,lt)=>pt==="."||Q[lt]==="k")&&(Lt.st="done",Lt.win=n),e.patch("games/bs",Lt),navigator.vibrate&&navigator.vibrate(It==="s"?[18,40,28]:dt?16:6)}function Xt(){let P=r()||Cl("lesha");a=[],I(),e.set("games/bs",Cl(P.starter==="lesha"?"ari":"lesha",(P.n||1)+1))}let tt=P=>t(P==="m"?"bsMiss":P==="s"?"bsSunk":"bsHit");function bt(P,k,z,$){P.cells.forEach((nt,dt)=>{let Q=k[dt];nt.className="bs-cell"+(Q!=="."?" "+Q:"")+(z&&z[dt]!==Q&&Q!=="."?" fresh":"")+($&&Q==="."?" can":""),nt.disabled=!$||Q!=="."})}function Ct(P,k,z){P.replaceChildren(...[...k].sort(($,nt)=>nt.len-$.len).map($=>C("span",{class:"bs-fl"+($.cells.every(nt=>z[nt]==="k")?" sunk":"")},...Array.from({length:$.len},()=>C("i")))))}let Nt={mine:null,enemy:null,n:0};function ht(){let P=r()||Cl("lesha"),k=Me();ht.lang!==k&&(ht.lang=k,h.labels(),u.labels()),ht.n!==P.n&&(ht.n=P.n,P.st==="place"&&!(P.ready&&P.ready[n])&&(a=[],U(P.n)),Nt.mine=Nt.enemy=null),P.st==="place"&&P.ready&&P.ready.lesha&&P.ready.ari&&e.patch("games/bs",{st:"play",turn:P.starter});let z=P.st==="place"&&!(P.ready&&P.ready[n]),$=P.st==="place"&&!z,nt=P.st==="play"||P.st==="done";g.classList.toggle("placing",z),m.style.display=nt?"":"none",y.classList.toggle("big",z||$),T.style.display=z||$?"none":"",A.style.display=S.style.display=z?"":"none",f.style.display=z||P.st==="play"&&!P.last?"":"none",x.style.display=P.st==="done"?"":"none";let dt=u.grid.getBoundingClientRect().width;dt>20?c=dt/ie:ht.again||(ht.again=!0,requestAnimationFrame(()=>{ht.again=!1,ht()})),g.style.setProperty("--cs",c+"px");let Q=P.st==="play"&&P.turn===n;z?(d.textContent=t("placeShips"),d.className="g-status mine",f.textContent=t("bsDragHint")):$?(d.textContent=t("waitingPlace",{name:i.name(s)}),d.className="g-status"):P.st==="play"?(d.textContent=Q?P.last&&P.last.by===n&&P.last.r!=="m"?t("shootAgain"):t("yourTurn"):t("theirTurn",{name:i.name(s)}),d.className="g-status"+(Q?" mine":""),f.textContent=t("bsHint")):(d.textContent=P.win===n?t("youWin"):t("theyWin",{name:i.name(P.win)}),d.className="g-status"+(P.win===n?" mine":""));let It=(nt||$)&&P.b&&P.b[n]||Nh(a),Lt=P.sh&&P.sh[s]||$r,pt=z?a.map(lt=>({...lt,cells:Rl(lt)})):Jf(It);if(u.hulls.replaceChildren(...pt.map(lt=>Kf(lt,(z?"edit ":"")+(!z&&lt.cells.every(Ut=>Lt[Ut]==="k")?"sunk":"")))),u.hulls.querySelectorAll(".bs-hull.edit").forEach(lt=>lt.addEventListener("pointerdown",Ut=>Z(Ut,+lt.dataset.id,!1,lt))),bt(u,z?$r:Lt,z?null:Nt.mine,!1),Nt.mine=Lt,u.grid.classList.toggle("place",z),M.textContent=t("yourFleet"),Ct(p,pt,Lt),z){let lt=wi.map((Ut,Qt)=>({id:Qt,len:Ut})).filter(Ut=>!L(Ut.id));A.replaceChildren(...lt.map(Ut=>{let Qt=C("div",{class:"bs-dship","data-id":Ut.id},C("b"));return Qt.firstElementChild.style.setProperty("--len",Ut.len),Qt.addEventListener("pointerdown",Se=>Z(Se,Ut.id,!0,Qt.firstElementChild)),Qt})),lt.length||A.replaceChildren(C("div",{class:"bs-alldone"},t("bsAllSet"))),S.replaceChildren(C("button",{class:"btn ghost",id:"bs-rand",onclick:K},t("random")),C("button",{class:"btn ghost",id:"bs-clear",disabled:!a.length,onclick:rt},t("bsClear")),C("button",{class:"btn",id:"bs-ready",disabled:a.length<wi.length,onclick:ot},t("ready")))}if(nt){let lt=P.sh&&P.sh[n]||$r,Ut=P.b&&P.b[s]||"",Qt=Jf(Ut),Se=Qt.filter(B=>B.cells.every(nn=>lt[nn]==="k")),qe=P.st==="done"?Qt:Se;h.hulls.replaceChildren(...qe.map(B=>Kf(B,Se.includes(B)?"sunk":"rev"))),bt(h,lt,Nt.enemy,Q),Nt.enemy=lt,Ct(v,Qt,lt)}if(ht.seen===void 0&&(ht.seen=P.last?P.last.t:0),P.last&&nt&&P.last.t!==ht.seen){ht.seen=P.last.t;let lt=P.last.by===n;_.className="bs-banner",_.offsetWidth,_.textContent=(lt?"":i.name(P.last.by)+": ")+tt(P.last.r),_.className="bs-banner show r-"+P.last.r+(lt?"":" theirs"),lt||i.toast(`${i.name(P.last.by)} \u2192 ${ly(P.last.i)}: ${tt(P.last.r)}`,2200)}if(P.last&&nt){let lt=P.last.by===n?h:u;lt.cells[P.last.i]&&lt.cells[P.last.i].classList.add("lastmark")}}return ht(),{el:g,update:ht,destroy(){window.removeEventListener("pointermove",q),window.removeEventListener("pointerup",J),o&&o.ghost&&o.ghost.remove(),o=null}}}var Fh=7,uy=["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"],Pl=(i,t=1,e)=>({st:"pick",setter:i,w:"",hint:"",g:"",n:t,s:e||{lesha:0,ari:0}});function dy(){return`<svg viewBox="0 0 220 230" class="petal-svg"><path class="st" d="M110 122 C108 160 112 190 110 224"/><ellipse class="lf" cx="86" cy="178" rx="22" ry="9" transform="rotate(-25 86 178)"/><ellipse class="lf" cx="136" cy="198" rx="22" ry="9" transform="rotate(25 136 198)"/>${Array.from({length:Fh},(t,e)=>`<ellipse class="pt" data-i="${e}" cx="110" cy="58" rx="17" ry="38" transform="rotate(${e*360/Fh} 110 104)"/>`).join("")}<circle class="ct" cx="110" cy="104" r="11"/></svg>`}function ep(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.hang||null,a=C("div",{class:"ttt-score"}),o=C("div",{class:"g-status",id:"hg-status"}),c=C("div",{class:"petal-art",html:dy()}),l=C("div",{class:"hg-word",id:"hg-word"}),h=C("div",{class:"g-note",id:"hg-hint"}),u=C("div",{class:"hg-body"}),d=C("div",{class:"game hang"},a,o,c,l,h,u),f=null,_=null;function v(y){let A=r()||Pl("lesha");Si(e,"games/hang",r(),A,y)}function p(y){let A=r();if(!A||A.st!=="play"||A.setter===n||(A.g||"").includes(y))return;let S=(A.g||"")+y,x=new Set([...S].filter(U=>!A.w.includes(U))).size,L=[...A.w].every(U=>S.includes(U))?"won":x>=Fh?"lost":"play",I={g:S,st:L};L==="won"&&(I["s/"+n]=(A.s&&A.s[n]||0)+1),L==="lost"&&(I["s/"+A.setter]=(A.s&&A.s[A.setter]||0)+1),e.patch("games/hang",I)}function m(){let y=r()||Pl("lesha");e.set("games/hang",Pl(y.setter==="lesha"?"ari":"lesha",(y.n||1)+1,y.s))}function M(){let y=(f.value||"").toUpperCase().replace(/[^A-Z]/g,"");if(y.length<3){i.toast(t("wordShort"));return}v({w:y,hint:(_.value||"").trim().slice(0,40),st:"play",g:""})}function T(){let y=r()||Pl("lesha"),A=y.g||"",S=y.w?new Set([...A].filter(L=>!y.w.includes(L))).size:0;c.querySelectorAll(".pt").forEach((L,I)=>L.classList.toggle("fall",I<S)),a.innerHTML=`<span class="s-l">${i.name("lesha")} ${y.s&&y.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${y.s&&y.s.ari||0}</span>`;let x=y.setter===n;if(l.textContent="",h.textContent=y.hint?t("hintIs",{h:y.hint}):"",y.st==="pick"){x?(o.textContent=t("pickWord"),o.className="g-status mine",u.querySelector("#hg-input")||(f=C("input",{id:"hg-input",maxlength:12,placeholder:"WORD",autocapitalize:"characters",autocomplete:"off",oninput:()=>{f.value=f.value.toUpperCase().replace(/[^A-Z]/g,"")}}),_=C("input",{id:"hg-hintin",maxlength:40,placeholder:t("hintOptional")}),u.replaceChildren(f,_,C("button",{class:"btn big",id:"hg-hide",onclick:M},t("hideWord")),C("p",{class:"g-note"},t("wordHelp"))))):(o.textContent=t("waitingWord",{name:i.name(y.setter)}),o.className="g-status",u.replaceChildren());return}let g=[...y.w].map(L=>A.includes(L)||y.st!=="play"||x?L:"_");if(l.innerHTML=g.map((L,I)=>`<span class="${A.includes(y.w[I])?"got":y.st!=="play"||x?"ghost":""}">${L}</span>`).join(""),y.st==="play")o.className="g-status"+(x?"":" mine"),o.textContent=x?t("watching",{name:i.name(s)}):t("guessLetters"),u.replaceChildren(C("div",{class:"kb"},uy.map(L=>C("div",{class:"kb-row"},[...L].map(I=>C("button",{class:"key"+(A.includes(I)?y.w.includes(I)?" ok":" bad":""),"data-k":I,disabled:x||A.includes(I),onclick:()=>p(I)},I))))));else{let L=y.st==="won";o.textContent=L?x?t("theyGuessed",{name:i.name(s)}):t("youGuessed"):x?t("theyFailed",{name:i.name(s)}):t("wordWas",{w:y.w}),o.className="g-status"+(L!==x?" mine":""),u.replaceChildren(C("button",{class:"btn big",id:"hg-next",onclick:m},t("newRound")))}}return T(),{el:d,update:T,destroy(){}}}var pn=7,Os=6,fy=".".repeat(pn*Os),np={lesha:"L",ari:"A"},Fs=(i,t=1,e)=>({b:fy,turn:i,starter:i,w:"",s:e||{lesha:0,ari:0},n:t,last:-1}),py=[[1,0],[0,1],[1,1],[1,-1]];function ip(i){for(let t=0;t<Os;t++)for(let e=0;e<pn;e++){let n=i[t*pn+e];if(n!==".")for(let[s,r]of py){let a=[t*pn+e],o=1;for(;o<4;o++){let c=e+s*o,l=t+r*o;if(c<0||c>=pn||l<0||l>=Os||i[l*pn+c]!==n)break;a.push(l*pn+c)}if(o===4)return a}}return null}var sp='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',rp='<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 2.7 4.5 6.3 4.5c2 0 3.7 1.1 4.7 2.7h2c1-1.6 2.7-2.7 4.7-2.7 3.6 0 5.4 3.7 3.9 7.2C19.5 16.4 12 21 12 21z"/></svg>';function ap(i){let{t,net:e,me:n,other:s}=i,r=()=>i.S.games.c4||null,a=C("div",{class:"ttt-score"}),o=C("div",{class:"g-status",id:"c4-status"}),c=[...Array(pn*Os)].map((T,y)=>C("div",{class:"c4-cell","data-i":y})),l=[...Array(pn)].map((T,y)=>C("button",{class:"c4-col","data-c":y,"aria-label":String(y+1),onclick:()=>_(y)},...Array.from({length:Os},(A,S)=>c[S*pn+y]))),h=C("div",{class:"c4-ghost"}),u=C("div",{class:"c4-board",id:"c4-board"},h,C("div",{class:"c4-cols"},l)),d=C("button",{class:"btn",id:"c4-new",onclick:v},t("newRound")),f=C("div",{class:"game c4"},a,o,u,d);function _(T){let y=r()||Fs("lesha");if(y.w||y.turn!==n)return;let A=-1;for(let I=Os-1;I>=0;I--)if(y.b[I*pn+T]==="."){A=I*pn+T;break}if(A<0){i.toast(t("colFull"));return}let S=y.b.slice(0,A)+np[n]+y.b.slice(A+1),g=ip(S)?n:S.includes(".")?"":"d",L={b:S,turn:s,w:g,last:A};g===n&&(L["s/"+n]=(y.s&&y.s[n]||0)+1),Si(e,"games/c4",r(),y,L)}function v(){let T=r()||Fs("lesha");e.set("games/c4",Fs(T.starter==="lesha"?"ari":"lesha",(T.n||1)+1,T.s))}let p=T=>{h.style.setProperty("--c",T),h.classList.toggle("on",T>=0)};l.forEach((T,y)=>{T.addEventListener("pointerenter",()=>{let A=r()||Fs("lesha");!A.w&&A.turn===n&&p(y)}),T.addEventListener("pointerdown",()=>{let A=r()||Fs("lesha");!A.w&&A.turn===n&&p(y)})}),u.addEventListener("pointerleave",()=>p(-1));let m=null;function M(){let T=r()||Fs("lesha"),y=T.w&&T.w!=="d"?ip(T.b):null,A=T.n+":"+T.last+":"+[...T.b].filter(g=>g!==".").length,S=m!==null&&A!==m&&T.last>=0;m=A;let x=!T.w&&T.turn===n;h.dataset.p=np[n],h.innerHTML="<i>"+(n==="lesha"?sp:rp)+"</i>",x||p(-1),c.forEach((g,L)=>{let I=T.b[L],U=g.firstElementChild;if(I==="."){U&&U.remove(),g.className="c4-cell";return}if(!U||U.dataset.v!==I){if(U&&U.remove(),U=C("i",{class:"c4-disc "+(I==="L"?"lesha":"ari"),"data-v":I,html:I==="L"?sp:rp}),S&&L===T.last){let H=Math.floor(L/pn)+1;U.style.setProperty("--fall",H),U.style.setProperty("--dur",(.26+.075*H).toFixed(2)+"s"),U.classList.add("drop")}g.append(U)}g.className="c4-cell"+(y&&y.includes(L)?" win":"")}),l.forEach((g,L)=>{g.disabled=!x||T.b[L]!==".",g.classList.toggle("can",x&&T.b[L]===".")}),a.innerHTML=`<span class="s-l">${i.name("lesha")} ${T.s&&T.s.lesha||0}</span><span class="s-a">${i.name("ari")} ${T.s&&T.s.ari||0}</span>`,o.textContent=T.w==="d"?t("draw"):T.w?T.w===n?t("youWin"):t("theyWin",{name:i.name(T.w)}):T.turn===n?t("yourTurn"):t("theirTurn",{name:i.name(T.turn)}),o.className="g-status"+(x?" mine":""),d.style.display=T.w?"":"none",u.classList.toggle("done",!!T.w)}return M(),{el:f,update:M,destroy(){}}}var Bh=[{id:"tula",n:{en:"Tula",ru:"\u0422\u0443\u043B\u0430"},z:11,x:1238,y:655},{id:"sea",n:{en:"Seattle",ru:"\u0421\u0438\u044D\u0442\u043B"},z:11,x:328,y:715},{id:"msk",n:{en:"Moscow",ru:"\u041C\u043E\u0441\u043A\u0432\u0430"},z:11,x:1238,y:640},{id:"spb",n:{en:"Saint Petersburg",ru:"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},z:11,x:1196,y:595},{id:"ven",n:{en:"Venice",ru:"\u0412\u0435\u043D\u0435\u0446\u0438\u044F"},z:11,x:1094,y:733},{id:"ist",n:{en:"Istanbul",ru:"\u0421\u0442\u0430\u043C\u0431\u0443\u043B"},z:11,x:1188,y:767},{id:"nyc",n:{en:"New York",ru:"\u041D\u044C\u044E-\u0419\u043E\u0440\u043A"},z:11,x:603,y:769},{id:"sfo",n:{en:"San Francisco",ru:"\u0421\u0430\u043D-\u0424\u0440\u0430\u043D\u0446\u0438\u0441\u043A\u043E"},z:11,x:327,y:791},{id:"dxb",n:{en:"Palm Jumeirah",ru:"\u041F\u0430\u043B\u044C\u043C\u0430 \u0414\u0436\u0443\u043C\u0435\u0439\u0440\u0430"},z:11,x:1337,y:876},{id:"gcn",n:{en:"Grand Canyon",ru:"\u0413\u0440\u0430\u043D\u0434-\u041A\u0430\u043D\u044C\u043E\u043D"},z:10,x:193,y:401},{id:"pow",n:{en:"Lake Powell",ru:"\u041E\u0437\u0435\u0440\u043E \u041F\u0430\u0443\u044D\u043B\u043B"},z:10,x:194,y:398},{id:"tyo",n:{en:"Tokyo",ru:"\u0422\u043E\u043A\u0438\u043E"},z:11,x:1819,y:806}],lp=[{id:"dusk",n:{en:"Dusk ridges",ru:"\u0413\u043E\u0440\u044B \u043D\u0430 \u0437\u0430\u043A\u0430\u0442\u0435"}},{id:"aurora",n:{en:"Northern lights",ru:"\u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435"}},{id:"sea",n:{en:"Calm sunset",ru:"\u0422\u0438\u0445\u0438\u0439 \u0437\u0430\u043A\u0430\u0442"}},{id:"stars",n:{en:"Our stars",ru:"\u041D\u0430\u0448\u0438 \u0437\u0432\u0451\u0437\u0434\u044B"}}],cp=(i,t,e,n)=>i.replace("{z}",t).replace("{x}",e).replace("{y}",n),hp=(i,t)=>cp(i,t.z,t.x,t.y),Il=new Map,qi=(i,t=i)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,e};async function my(i){let t=await fetch(i,{mode:"cors"});if(!t.ok)throw new Error("tile "+t.status);let e=await t.blob();return createImageBitmap?createImageBitmap(e):new Promise((n,s)=>{let r=new Image;r.onload=()=>n(r),r.onerror=s,r.src=URL.createObjectURL(e)})}async function gy(i,t){let n=qi(1024),s=n.getContext("2d");s.fillStyle="#0a1018",s.fillRect(0,0,1024,1024);let r=[];for(let a=0;a<4;a++)for(let o=0;o<4;o++){let c=cp(i,t.z+2,t.x*4+o,t.y*4+a);r.push((async()=>{for(let l=0;l<3;l++)try{let h=await my(c);s.drawImage(h,o*256,a*256),h.close&&h.close();return}catch(h){if(l===2)throw h;await new Promise(u=>setTimeout(u,400*(l+1)))}})())}return await Promise.all(r),n}function Jr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ll=(i,t,e)=>i+(t-i)*e;function kh(i,t,e,n,s,r=1){for(let a=0;a<n;a++){let o=e()*t,c=e()*s,l=e()**3,h=.4+l*1.7,u=(.25+l*.75)*r*(1-.6*c/s);i.fillStyle=`rgba(255,255,255,${u.toFixed(3)})`,i.beginPath(),i.arc(o,c,h*t/1024,0,7),i.fill()}}function Dl(i,t,e=7){let n=i.getImageData(0,0,t,t),s=n.data,r=Jr(99);for(let a=0;a<s.length;a+=4){let o=(r()-.5)*e;s[a]+=o,s[a+1]+=o,s[a+2]+=o}i.putImageData(n,0,0)}function Oh(i,t,e,n,s,r,a,o,c){let l=[e()*6,e()*6,e()*6],h=[];for(let d=0;d<=t;d+=4){let f=d/t*Math.PI*2;h.push([d,n-s*(.55*Math.sin(f*1.3+l[0])+.3*Math.sin(f*3.1+l[1])+.18*r*Math.sin(f*7.3+l[2])+.08*r*Math.sin(f*17+l[0]*2))])}let u=i.createLinearGradient(0,n-s*1.2,0,n+t*.12);u.addColorStop(0,c||a),u.addColorStop(.25,a),u.addColorStop(1,o),i.fillStyle=u,i.beginPath(),i.moveTo(0,t),h.forEach(([d,f])=>i.lineTo(d,f)),i.lineTo(t,t),i.closePath(),i.fill()}function op(i){let t=qi(i),e=t.getContext("2d"),n=Jr(11),s=e.createLinearGradient(0,0,0,i*.78);[[0,"#140f3d"],[.3,"#4a2487"],[.58,"#c9508f"],[.82,"#ff9d73"],[1,"#ffd49a"]].forEach(([c,l])=>s.addColorStop(c,l)),e.fillStyle=s,e.fillRect(0,0,i,i),kh(e,i,n,160,i*.38);let r=i*.66,a=i*.6;s=e.createRadialGradient(r,a,0,r,a,i*.42),s.addColorStop(0,"rgba(255,244,205,1)"),s.addColorStop(.07,"rgba(255,226,170,.95)"),s.addColorStop(.18,"rgba(255,170,130,.5)"),s.addColorStop(1,"rgba(255,120,150,0)"),e.fillStyle=s,e.fillRect(0,0,i,i),[["#8a5a9c","#4a2a68","#ae78a6",.55,.15],["#6b4488","#3a2358","#8c5a98",.62,.17],["#4a3070","#27183f","#63407e",.7,.19],["#2f2050","#170f2c","#3d2a63",.79,.2],["#1a1233","#0a0715","#241848",.9,.17]].forEach(([c,l,h,u,d],f)=>Oh(e,i,n,i*u,i*d,.8+f*.12,c,l,h));for(let c=0;c<26;c++){let l=n()*i,h=i*(.88+n()*.12),u=i*(.03+n()*.05);e.fillStyle="#080510",e.beginPath(),e.moveTo(l,h-u),e.lineTo(l-u*.28,h),e.lineTo(l+u*.28,h),e.fill()}return Dl(e,i,6),t}function _y(i){let t=qi(i),e=t.getContext("2d"),n=Jr(23),s=e.createLinearGradient(0,0,0,i);[[0,"#01030b"],[.45,"#06142e"],[.75,"#0a2c3d"],[1,"#0a1a24"]].forEach(([c,l])=>s.addColorStop(c,l)),e.fillStyle=s,e.fillRect(0,0,i,i),kh(e,i,n,260,i*.7),e.globalCompositeOperation="lighter",[[.3,.16,[70,255,160],1,0],[.38,.12,[60,215,235],.7,2],[.24,.09,[190,90,255],.55,4]].forEach(([c,l,h,u,d],f)=>{for(let _=0;_<i;_+=2){let v=_/i*Math.PI*2,p=i*(c+.07*Math.sin(v*1.4+d)+.035*Math.sin(v*3.3+d*2)+.012*Math.sin(v*9+f)),m=i*(l+.06*Math.sin(v*2.1+d+1)+.03*Math.sin(v*5.7)),M=e.createLinearGradient(0,p-m,0,p+m*.35);M.addColorStop(0,`rgba(${h},0)`),M.addColorStop(.55,`rgba(${h},${(.5*u).toFixed(2)})`),M.addColorStop(.8,`rgba(${h},${(.28*u).toFixed(2)})`),M.addColorStop(1,`rgba(${h},0)`),e.fillStyle=M,e.fillRect(_,p-m,2.2,m*1.35)}}),e.globalCompositeOperation="source-over",Oh(e,i,n,i*.8,i*.07,.4,"#16303f","#07121a","#27506a"),Oh(e,i,n,i*.9,i*.06,.5,"#0b1a24","#03080c","#12293a");for(let c=0;c<34;c++){let l=n()*i,h=i*(.9+n()*.1),u=i*(.04+n()*.06);e.fillStyle="#04090d",e.beginPath(),e.moveTo(l,h-u),e.lineTo(l-u*.3,h),e.lineTo(l+u*.3,h),e.fill()}let a=i*.3,o=i*.93;return e.fillStyle="#05090d",e.fillRect(a,o-i*.03,i*.07,i*.03),e.beginPath(),e.moveTo(a-4,o-i*.03),e.lineTo(a+i*.035,o-i*.055),e.lineTo(a+i*.074,o-i*.03),e.fill(),s=e.createRadialGradient(a+i*.03,o-i*.015,0,a+i*.03,o-i*.015,i*.05),s.addColorStop(0,"rgba(255,200,110,.9)"),s.addColorStop(1,"rgba(255,170,80,0)"),e.fillStyle=s,e.fillRect(a-i*.03,o-i*.07,i*.13,i*.1),e.fillStyle="#ffd68a",e.fillRect(a+i*.022,o-i*.022,i*.016,i*.013),Dl(e,i,5),t}function xy(i){let t=qi(i),e=t.getContext("2d"),n=Jr(37),s=i*.56,r=e.createLinearGradient(0,0,0,s);[[0,"#1b2b66"],[.4,"#6a3f93"],[.75,"#f0709b"],[1,"#ffbe80"]].forEach(([l,h])=>r.addColorStop(l,h)),e.fillStyle=r,e.fillRect(0,0,i,s),r=e.createLinearGradient(0,s,0,i),[[0,"#e9847f"],[.18,"#7d4a8a"],[.6,"#2a2f68"],[1,"#101840"]].forEach(([l,h])=>r.addColorStop(l,h)),e.fillStyle=r,e.fillRect(0,s,i,i-s);let a=i*.5;r=e.createRadialGradient(a,s,0,a,s,i*.5),r.addColorStop(0,"rgba(255,240,200,.95)"),r.addColorStop(.1,"rgba(255,200,140,.6)"),r.addColorStop(1,"rgba(255,140,150,0)"),e.fillStyle=r,e.fillRect(0,0,i,i),e.save(),e.beginPath(),e.rect(0,0,i,s),e.clip(),e.fillStyle="#fff1cf",e.beginPath(),e.arc(a,s+i*.01,i*.085,0,7),e.fill(),e.restore();for(let l=0;l<9;l++){let h=n()*i,u=s*(.2+n()*.55),d=i*(.18+n()*.22),f=e.createRadialGradient(h,u,0,h,u,d);f.addColorStop(0,"rgba(255,170,170,.28)"),f.addColorStop(1,"rgba(255,170,170,0)"),e.save(),e.translate(0,u),e.scale(1,.13),e.translate(0,-u),e.fillStyle=f,e.fillRect(h-d,u-d,d*2,d*2),e.restore()}for(let l=0;l<520;l++){let h=n()**1.6,u=s+3+h*(i-s),d=i*(.02+h*.2),f=a+(n()-.5)*2*d*(.4+n()),_=i*(.012+h*.05)*(.4+n()),v=(1-h)*.55*(1-Math.abs(f-a)/(d*1.6+1));v>.02&&(e.fillStyle=`rgba(255,${Math.round(Ll(236,170,h))},${Math.round(Ll(190,130,h))},${v.toFixed(3)})`,e.fillRect(f-_/2,u,_,1.2+h*2.2))}e.strokeStyle="rgba(255,255,255,.07)";for(let l=0;l<70;l++){let h=n()**1.4,u=s+8+h*(i-s),d=n()*i,f=i*(.03+h*.12);e.lineWidth=1+h*1.5,e.beginPath(),e.moveTo(d,u),e.lineTo(d+f,u),e.stroke()}let o=i*.72,c=s+i*.035;return e.fillStyle="#1a1030",e.beginPath(),e.moveTo(o-i*.03,c),e.lineTo(o+i*.03,c),e.lineTo(o+i*.02,c+i*.012),e.lineTo(o-i*.022,c+i*.012),e.fill(),e.beginPath(),e.moveTo(o,c-i*.075),e.lineTo(o+i*.026,c-i*.004),e.lineTo(o,c-i*.004),e.fill(),e.beginPath(),e.moveTo(o-i*.004,c-i*.06),e.lineTo(o-i*.022,c-i*.004),e.lineTo(o-i*.004,c-i*.004),e.fill(),Dl(e,i,6),t}function vy(i){let t=qi(i),e=t.getContext("2d"),n=Jr(53),s=e.createLinearGradient(0,0,i*.3,i);[[0,"#070a24"],[.55,"#1a1250"],[1,"#2a1048"]].forEach(([l,h])=>s.addColorStop(l,h)),e.fillStyle=s,e.fillRect(0,0,i,i),e.globalCompositeOperation="lighter";let r=[[255,90,170],[80,110,255],[60,210,230],[190,90,255]];for(let l=0;l<16;l++){let h=n()*i,u=n()*i,d=i*(.16+n()*.26),f=r[l%4];s=e.createRadialGradient(h,u,0,h,u,d),s.addColorStop(0,`rgba(${f},.16)`),s.addColorStop(1,`rgba(${f},0)`),e.fillStyle=s,e.fillRect(h-d,u-d,d*2,d*2)}e.globalCompositeOperation="source-over",kh(e,i,n,520,i,1);let a=[];for(let l=0;l<15;l++){let h=l/15*Math.PI*2;a.push([i*.5+16*Math.sin(h)**3*i*.0155,i*.43-(13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h))*i*.0155])}e.strokeStyle="rgba(255,190,225,.42)",e.lineWidth=1.6*i/1024,e.beginPath(),a.forEach(([l,h],u)=>u?e.lineTo(l,h):e.moveTo(l,h)),e.closePath(),e.stroke(),a.forEach(([l,h],u)=>{let d=i*(.004+u%3*.0016),f=e.createRadialGradient(l,h,0,l,h,d*5);f.addColorStop(0,"rgba(255,230,245,1)"),f.addColorStop(.25,"rgba(255,170,215,.55)"),f.addColorStop(1,"rgba(255,140,200,0)"),e.fillStyle=f,e.fillRect(l-d*5,h-d*5,d*10,d*10)});let o=[i*.17,i*.82],c=[i*.84,i*.16];e.fillStyle="rgba(255,255,255,.55)";for(let l=1;l<28;l++){let h=l/28,u=Ll(o[0],c[0],h),d=Ll(o[1],c[1],h)-Math.sin(h*Math.PI)*i*.18;e.beginPath(),e.arc(u,d,(1+1.4*Math.sin(h*Math.PI))*i/1024,0,7),e.fill()}return[[o,"255,215,150"],[c,"170,205,255"]].forEach(([[l,h],u])=>{let d=i*.05,f=e.createRadialGradient(l,h,0,l,h,d);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.2,`rgba(${u},.8)`),f.addColorStop(1,`rgba(${u},0)`),e.fillStyle=f,e.fillRect(l-d,h-d,d*2,d*2),e.strokeStyle=`rgba(${u},.7)`,e.lineWidth=1.4*i/1024,e.beginPath(),e.moveTo(l-d*1.5,h),e.lineTo(l+d*1.5,h),e.moveTo(l,h-d*1.5),e.lineTo(l,h+d*1.5),e.stroke()}),Dl(e,i,5),t}function zh(i,t=1024){return({dusk:op,aurora:_y,sea:xy,stars:vy}[i]||op)(t)}async function up(i,t=720,e=.72){let n;try{n=await createImageBitmap(i,{imageOrientation:"from-image"})}catch{n=await new Promise((l,h)=>{let u=new Image;u.onload=()=>l(u),u.onerror=h,u.src=URL.createObjectURL(i)})}let s=n.width||n.naturalWidth,r=n.height||n.naturalHeight,a=Math.min(s,r),o=qi(t);o.getContext("2d").drawImage(n,(s-a)/2,(r-a)/2,a,a,0,0,t,t);let c=o.toDataURL("image/jpeg",e);return c.length>17e4&&(c=o.toDataURL("image/jpeg",.55)),c}var yy=i=>new Promise((t,e)=>{let n=new Image;n.onload=()=>{let s=qi(1024);s.getContext("2d").drawImage(n,0,0,1024,1024),t(s)},n.onerror=e,n.src=i});function dp(i,t){let e=i.k==="photo"?"photo:"+(i.d||"").length+":"+(i.d||"").slice(-40):i.k+":"+i.i;if(Il.has(e))return Il.get(e);let n=(async()=>{if(i.k==="art")return zh(i.i,1024);if(i.k==="photo")return yy(i.d);let s=Bh.find(r=>r.id===i.i);if(!s||!t)throw new Error("no place");return gy(t,s)})();return Il.set(e,n),n.catch(()=>Il.delete(e)),n}var fp=[4,5,6],My=i=>{let t=2166136261;for(let e of String(i))t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0};function by(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Sy(i){let s=.8/i,r=s*.3,a=r+.008,o=.03+.8+.035+r,c=1-2*a-s,l=Math.max(2,Math.floor(c/(s*1.04)+1)),h=Math.ceil(i*i/l),u=c/(l-1),d=s*1.04;return{n:i,F:.8,fx:.1,fy:.03,c:s,pad:r,tx0:a,ty:o,cols:l,rows:h,sw:u,sh:d,H:o+(h-1)*d+s+r+.03}}var wy=[[.42,0,.4,.06,.37,.12],[.3,.24,.38,.33,.5,.33],[.62,.33,.7,.24,.63,.12],[.6,.06,.58,0,.65,0]];function Bs(i,t,e,n,s){let r=[[0,0],[1,0],[1,1],[0,1],[0,0]];i.moveTo(e,n);for(let a=0;a<4;a++){let[o,c]=r[a],[l,h]=r[a+1],u=l-o,d=h-c,f=d,_=-u,v=s[a],p=(m,M)=>[e+(o+u*m+f*M*v*.78)*t,n+(c+d*m+_*M*v*.78)*t];if(!v){i.lineTo(...p(1,0));continue}i.lineTo(...p(.35,0));for(let m of wy)i.bezierCurveTo(...p(m[0],m[1]),...p(m[2],m[3]),...p(m[4],m[5]));i.lineTo(...p(1,0))}i.closePath()}var pp=i=>{let t=Math.max(0,Math.round(i/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},Hh=new Map,mp=i=>(Hh.has(i)||Hh.set(i,zh(i,240)),Hh.get(i)),gp=i=>i.n[Me()]||i.n.en;function _p(i){let{t,net:e,me:n,other:s}=i,r=()=>{let P=i.S.games.pz;return P&&P.v===1&&P.id?P:null},a=Math.min(window.devicePixelRatio||1,2),o=!1,c=+localStorage.getItem("g_pz_n")||4;fp.includes(c)||(c=4);let l=C("div",{class:"game pz"}),h=l;function u(){let P=r(),k=C("div",{class:"pz-seg"},fp.map(Q=>C("button",{class:Q===c?"on":"","data-n":Q,onclick:()=>{c=Q,localStorage.setItem("g_pz_n",Q),u()}},C("b",{},Q*Q),C("small",{},t("pzPieces"))))),z=(Q,It,Lt,pt)=>C("button",{class:"pz-card",id:pt,onclick:Lt},C("div",{class:"pz-th"},Q),C("span",{},It)),$=[];lp.forEach(Q=>{let It=mp(Q.id).cloneNode(!1);It.getContext("2d").drawImage(mp(Q.id),0,0),It.className="pz-thc",$.push(z(It,gp(Q),()=>d({k:"art",i:Q.id}),"pz-art-"+Q.id))}),i.tileUrl&&Bh.forEach(Q=>$.push(z(C("img",{src:hp(i.tileUrl,Q),loading:"lazy",alt:"",draggable:"false"}),gp(Q),()=>d({k:"sat",i:Q.id}),"pz-sat-"+Q.id)));let nt=C("input",{type:"file",accept:"image/*",id:"pz-file",class:"pz-file",onchange:async()=>{let Q=nt.files&&nt.files[0];if(Q)try{let It=await up(Q);d({k:"photo",d:It})}catch{i.toast(t("pzPhotoFail"))}}}),dt=C("label",{class:"pz-card pz-photo",id:"pz-photo"},C("div",{class:"pz-th"},C("span",{class:"pz-plus"},"+")),C("span",{},t("pzOwnPhoto")),nt);l.replaceChildren(C("div",{class:"g-status"},t("pzPick")),k,C("div",{class:"pz-grid"},dt,$),P?C("button",{class:"btn ghost",id:"pz-back",onclick:()=>{o=!1,L="",Ct()}},t("pzBackTo")):null)}function d(P){let k=e.newId();e.set("games/pz",{v:1,id:k,img:P,n:c,t0:Date.now()}),o=!1,L="",Ct()}let f=C("canvas",{class:"pz-cv",id:"pz-canvas"}),_=C("div",{class:"pz-wrap"},f),v=C("b",{id:"pz-prog"}),p=C("span",{id:"pz-clock"}),m=C("button",{class:"tb",id:"pz-peek",title:t("pzPeek"),html:jt.eye}),M=C("button",{class:"tb",id:"pz-new",title:t("pzNew"),html:jt.shuffle,onclick:()=>{o=!0,L="",Ct()}}),T=C("div",{class:"pz-hud"},C("div",{class:"pz-info"},v,p),C("div",{class:"row"},m,M)),y=C("div",{class:"pz-msg",id:"pz-msg"}),A=C("div",{class:"pz-done",id:"pz-done"}),S=f.getContext("2d"),x=document.createElement("canvas").getContext("2d"),g=window.__pz={id:"",L:null,n:0,Wpx:0,img:null,bm:[],hp:[],pos:[],want:[],home:[],locked:[],order:[],raw:[],flash:[],hold:[],lastRemote:[],signs:[],loading:!1,error:!1,complete:!1,reveal:0,peek:!1,drag:null,raf:0,burst:""},L="";function I(P){let k=P.n||4,z=Sy(k),$=by(My(P.id));g.id=P.id,g.L=z,g.n=k,g.img=null,g.error=!1,g.complete=!1,g.reveal=0,g.drag=null,g.burst="";let nt=k*k;g.home=Array.from({length:nt},(pt,lt)=>({x:z.fx+lt%k*z.c,y:z.fy+Math.floor(lt/k)*z.c}));let dt=Array.from({length:k*(k-1)},()=>$()<.5?1:-1),Q=Array.from({length:k*(k-1)},()=>$()<.5?1:-1);g.signs=Array.from({length:nt},(pt,lt)=>{let Ut=lt%k,Qt=Math.floor(lt/k);return[Qt>0?-Q[(Qt-1)*k+Ut]:0,Ut<k-1?dt[Qt*(k-1)+Ut]:0,Qt<k-1?Q[Qt*k+Ut]:0,Ut>0?-dt[Qt*(k-1)+Ut-1]:0]});let It=Array.from({length:nt},(pt,lt)=>lt);for(let pt=nt-1;pt>0;pt--){let lt=Math.floor($()*(pt+1));[It[pt],It[lt]]=[It[lt],It[pt]]}g.scatter=It.map((pt,lt)=>{let Ut=pt%z.cols,Qt=Math.floor(pt/z.cols),Se=($()-.5)*z.c*.2,qe=($()-.5)*z.c*.16;return{x:Math.min(1-z.c-z.pad,Math.max(z.pad,z.tx0+Ut*z.sw+Se)),y:z.ty+Qt*z.sh+qe}}),g.pos=g.scatter.map(pt=>({...pt})),g.want=g.scatter.map(pt=>({...pt})),g.locked=Array(nt).fill(!1),g.order=Array.from({length:nt},(pt,lt)=>lt),g.raw=Array(nt).fill(""),g.flash=Array(nt).fill(0),g.hold=Array(nt).fill(""),g.holdT=Array(nt).fill(0),g.lastRemote=Array(nt).fill(0),g.bm=[],g.hp=[],_.replaceChildren(f,A),l.replaceChildren(T,_,y),A.className="pz-done",A.replaceChildren(),f.style.width="100%",f.style.height=Math.round(1*z.H*330)+"px",y.textContent=t("pzLoading"),y.classList.add("on");let Lt=r();g.loading=!0,dp(P.img,i.tileUrl).then(pt=>{g.id===P.id&&(g.img=pt,g.loading=!1,y.classList.remove("on"),U(),N(r()||P),X())}).catch(()=>{g.id===P.id&&(g.loading=!1,g.error=!0,y.innerHTML="",y.classList.add("on"),y.append(t("pzLoadFail"),C("button",{class:"btn ghost",id:"pz-retry",onclick:()=>{L="",Ct()}},t("pzRetry"))))})}function U(){if(!g.L)return;let P=_.clientWidth||340,k=f.getBoundingClientRect().top,z=Math.max(320,window.innerHeight-k-16),$=Math.floor(Math.min(P,z/g.L.H,560));if($<80)return;let nt=$!==g.Wpx;g.Wpx=$,f.style.width=$+"px",f.style.height=Math.round($*g.L.H)+"px",f.width=Math.round($*a),f.height=Math.round($*g.L.H*a),(nt||!g.bm.length)&&H(),X()}function H(){if(!g.img||!g.Wpx)return;let{L:P}=g,k=g.n*g.n,z=P.c*g.Wpx,$=P.pad*g.Wpx,nt=Math.ceil((z+2*$)*a),dt=g.img.width/P.F;g.bm=[],g.hp=[];for(let Q=0;Q<k;Q++){let It=Q%g.n,Lt=Math.floor(Q/g.n),pt=document.createElement("canvas");pt.width=pt.height=nt;let lt=pt.getContext("2d"),Ut=$*a;lt.save(),lt.beginPath(),Bs(lt,z*a,Ut,Ut,g.signs[Q]),lt.clip(),lt.drawImage(g.img,(It*P.c-P.pad)*dt,(Lt*P.c-P.pad)*dt,(P.c+2*P.pad)*dt,(P.c+2*P.pad)*dt,0,0,nt,nt);let Qt=lt.createLinearGradient(0,0,nt,nt);Qt.addColorStop(0,"rgba(255,255,255,.10)"),Qt.addColorStop(.5,"rgba(255,255,255,0)"),Qt.addColorStop(1,"rgba(0,0,0,.14)"),lt.fillStyle=Qt,lt.fillRect(0,0,nt,nt),lt.beginPath(),Bs(lt,z*a,Ut,Ut,g.signs[Q]),lt.strokeStyle="rgba(255,255,255,.34)",lt.lineWidth=3*a,lt.stroke(),lt.restore(),lt.beginPath(),Bs(lt,z*a,Ut,Ut,g.signs[Q]),lt.strokeStyle="rgba(0,0,0,.5)",lt.lineWidth=1*a,lt.stroke(),g.bm.push(pt);let Se=new Path2D;Bs(Se,z,0,0,g.signs[Q]),g.hp.push(Se)}}function Z(P){let[k,z]=String(P).split(",").map(Number);return Number.isFinite(k)&&Number.isFinite(z)?{x:k,y:z}:null}function N(P){if(!g.L||P.id!==g.id)return;let k=P.p||{},z=P.hold||{},$=Date.now(),nt=g.n*g.n;for(let Q=0;Q<nt;Q++){let It=k[Q]===void 0?"":String(k[Q]);if(It!==g.raw[Q]){let Lt=g.raw[Q]===""&&It!=="";if(g.raw[Q]=It,It==="L")g.locked[Q]||(g.locked[Q]=!0,g.drag&&g.drag.i===Q||(g.flash[Q]=1),g.want[Q]={...g.home[Q]},g.order=g.order.filter(pt=>pt!==Q));else if(!(g.drag&&g.drag.i===Q)){let pt=It?Z(It):g.scatter[Q];pt&&(g.want[Q]=pt,It&&(g.order=g.order.filter(lt=>lt!==Q),g.order.push(Q),g.lastRemote[Q]=$))}}z[Q]&&z[Q].t!==g.holdT[Q]&&(g.holdT[Q]=z[Q].t,z[Q].u!==n&&(g.lastRemote[Q]=$)),g.hold[Q]=z[Q]&&z[Q].u&&z[Q].u!==n&&$-g.lastRemote[Q]<4e3?z[Q].u:""}let dt=g.locked.every(Boolean);dt&&!g.complete&&(g.complete=!0,!P.done&&g.img&&e.patch("games/pz",{done:Date.now()}),tt(P)),dt||(g.complete=!1),X()}function q(){let{L:P,Wpx:k}=g;if(!P||!k)return;S.setTransform(a,0,0,a,0,0),S.clearRect(0,0,k,P.H*k);let z=P.fx*k,$=P.fy*k,nt=P.F*k;if(S.save(),S.beginPath(),S.roundRect?S.roundRect(z-3,$-3,nt+6,nt+6,12):S.rect(z-3,$-3,nt+6,nt+6),S.fillStyle="rgba(255,255,255,.04)",S.fill(),S.strokeStyle="rgba(255,255,255,.16)",S.lineWidth=1,S.stroke(),S.clip(),g.img&&(S.globalAlpha=.09,S.drawImage(g.img,z,$,nt,nt)),S.restore(),!g.img||!g.bm.length)return;let dt=P.pad*k,Q=g.bm[0].width/a,It=(Lt,pt=0,lt=1)=>{let Ut=g.pos[Lt];S.globalAlpha=lt,S.drawImage(g.bm[Lt],Ut.x*k-dt-pt,Ut.y*k-dt-pt,Q+pt*2,Q+pt*2),S.globalAlpha=1};for(let Lt=0;Lt<g.bm.length;Lt++)g.locked[Lt]&&It(Lt);for(let Lt of g.order){if(g.locked[Lt])continue;let pt=g.drag&&g.drag.i===Lt||g.hold[Lt];if(S.save(),S.shadowColor="rgba(0,0,0,"+(pt?.6:.42)+")",S.shadowBlur=(pt?20:7)*a,S.shadowOffsetY=(pt?9:2)*a,It(Lt,pt?k*.006:0),S.restore(),g.hold[Lt]){let lt=g.pos[Lt],Ut=P.c*k;S.save(),S.translate(lt.x*k,lt.y*k),S.strokeStyle=g.hold[Lt]==="ari"?"rgba(255,141,181,.95)":"rgba(255,255,255,.9)",S.lineWidth=2,S.shadowColor=S.strokeStyle,S.shadowBlur=12,S.beginPath(),Bs(S,Ut,0,0,g.signs[Lt]),S.stroke(),S.restore()}}for(let Lt=0;Lt<g.bm.length;Lt++)if(g.flash[Lt]>.02){let pt=g.pos[Lt],lt=P.c*k;S.save(),S.translate(pt.x*k,pt.y*k),S.globalAlpha=g.flash[Lt]*.55,S.fillStyle="#fff",S.beginPath(),Bs(S,lt,0,0,g.signs[Lt]),S.fill(),S.restore()}g.reveal>0&&(S.save(),S.globalAlpha=g.reveal,S.drawImage(g.img,z,$,nt,nt),S.restore()),g.peek&&(S.save(),S.globalAlpha=.96,S.drawImage(g.img,z,$,nt,nt),S.restore())}function J(){g.raf=0;let P=!1;for(let k=0;k<g.pos.length;k++){if(g.drag&&g.drag.i===k)continue;let z=g.pos[k],$=g.want[k],nt=$.x-z.x,dt=$.y-z.y;if(Math.abs(nt)+Math.abs(dt)>6e-4){let Q=g.locked[k]?.28:.4;z.x+=nt*Q,z.y+=dt*Q,P=!0}else z.x=$.x,z.y=$.y;g.flash[k]>0&&(g.flash[k]=Math.max(0,g.flash[k]-.045),P=!0)}g.complete&&g.reveal<1&&(g.reveal=Math.min(1,g.reveal+.022),P=!0),!g.complete&&g.reveal>0&&(g.reveal=0,P=!0),q(),(P||g.drag)&&X()}function X(){g.raf||(g.raf=requestAnimationFrame(J))}function ct(P){let k=f.getBoundingClientRect();return{x:(P.clientX-k.left)/g.Wpx,y:(P.clientY-k.top)/g.Wpx}}function K(P){let{L:k,Wpx:z}=g;for(let $=g.order.length-1;$>=0;$--){let nt=g.order[$];if(g.locked[nt]||g.hold[nt])continue;let dt=g.pos[nt],Q=(P.x-dt.x)*z,It=(P.y-dt.y)*z;if(g.hp[nt]&&x.isPointInPath(g.hp[nt],Q,It)||Q>0&&It>0&&Q<k.c*z&&It<k.c*z)return nt}return-1}let rt=0,ot=P=>P.x.toFixed(3)+","+P.y.toFixed(3);f.addEventListener("pointerdown",P=>{if(!g.img||!g.bm.length||g.complete||P.button>0)return;let k=ct(P),z=K(k);if(z<0)return;P.preventDefault();try{f.setPointerCapture(P.pointerId)}catch{}g.drag={i:z,dx:k.x-g.pos[z].x,dy:k.y-g.pos[z].y,id:P.pointerId},g.order=g.order.filter(nt=>nt!==z),g.order.push(z);let $=g.pos[z];g.want[z]={...$},e.patch("games/pz",{["hold/"+z]:{u:n,t:Date.now()},["p/"+z]:ot($)}),navigator.vibrate&&navigator.vibrate(5),X()}),f.addEventListener("pointermove",P=>{let k=g.drag;if(!k||P.pointerId!==k.id)return;let z=ct(P),{L:$}=g,nt=g.pos[k.i];nt.x=Math.min(1-$.c*.95,Math.max(-$.c*.05,z.x-k.dx)),nt.y=Math.min($.H-$.c*.95,Math.max(-$.c*.05,z.y-k.dy)),g.want[k.i]={x:nt.x,y:nt.y};let dt=performance.now();dt-rt>65&&(rt=dt,e.set("games/pz/p/"+k.i,ot(nt))),X()});let Pt=P=>{let k=g.drag;if(!k||P&&P.pointerId!==k.id)return;g.drag=null;try{f.releasePointerCapture(k.id)}catch{}let{L:z}=g,$=k.i,nt=g.pos[$],dt=g.home[$];P&&P.type!=="pointercancel"&&Math.hypot(nt.x-dt.x,nt.y-dt.y)<z.c*.3?(g.locked[$]=!0,g.raw[$]="L",g.want[$]={...dt},g.flash[$]=1,g.order=g.order.filter(Q=>Q!==$),e.patch("games/pz",{["p/"+$]:"L",["hold/"+$]:null}),navigator.vibrate&&navigator.vibrate([12,30,10]),g.locked.every(Boolean)&&(g.complete=!0,e.patch("games/pz",{done:Date.now()}),tt(r()))):(g.raw[$]=ot(nt),g.want[$]={x:nt.x,y:nt.y},e.patch("games/pz",{["p/"+$]:ot(nt),["hold/"+$]:null})),bt(),X()};f.addEventListener("pointerup",Pt),f.addEventListener("pointercancel",Pt);let Xt=P=>k=>{k.preventDefault(),g.peek=P,m.classList.toggle("on",P),X()};m.addEventListener("pointerdown",Xt(!0)),["pointerup","pointerleave","pointercancel"].forEach(P=>m.addEventListener(P,Xt(!1)));function tt(P){if(g.burst===g.id)return;g.burst=g.id;let k=document.getElementById("fx");if(!k||!Element.prototype.animate)return;let z=f.getBoundingClientRect(),$=k.getBoundingClientRect(),nt=z.left+z.width/2-$.left,dt=z.top+g.L.fy*g.Wpx+g.L.F*g.Wpx/2-$.top;["\u{1F497}","\u{1F495}","\u{1F496}","\u2728"].forEach((Q,It)=>{for(let Lt=0;Lt<5;Lt++){let pt=document.createElement("img");pt.src=Xi(Q),pt.alt="";let lt=22+Math.random()*14;Object.assign(pt.style,{position:"absolute",left:nt-lt/2+"px",top:dt-lt/2+"px",width:lt+"px",height:lt+"px"}),k.append(pt);let Ut=Math.random()*Math.PI*2,Qt=90+Math.random()*150;pt.animate([{transform:"translate(0,0) scale(.3) rotate(0)",opacity:0},{opacity:1,offset:.15},{transform:`translate(${Math.cos(Ut)*Qt}px,${Math.sin(Ut)*Qt-40}px) scale(1) rotate(${(Math.random()-.5)*80}deg)`,opacity:0}],{duration:1500+Math.random()*600,delay:(It*5+Lt)*18,easing:"cubic-bezier(.2,.7,.3,1)",fill:"both"}).onfinish=()=>pt.remove()}})}function bt(){let P=r();if(!P||L!==P.id)return;let k=g.n*g.n,z=g.locked.filter(nt=>!nt).length;v.textContent=`${k-z} / ${k}`;let $=P.done||(g.complete?Date.now():0);p.textContent=pp(($||Date.now())-(P.t0||Date.now())),m.style.display=g.complete?"none":"",g.complete?(A.className="pz-done on",A.firstChild||A.replaceChildren(C("b",{},t("pzDone")),C("span",{},t("pzDoneIn",{time:pp($-(P.t0||$)),n:k})),C("button",{class:"btn",id:"pz-again",onclick:()=>{o=!0,L="",Ct()}},t("pzAnother")))):(A.className="pz-done",A.replaceChildren())}function Ct(){let P=r();if(!P||o){L!=="pick"&&(L="pick",u());return}L!==P.id&&(L=P.id,I(P)),N(P),bt()}let Nt=null,ht=setInterval(()=>{L&&L!=="pick"&&bt()},1e3);try{Nt=new ResizeObserver(()=>U()),Nt.observe(_)}catch{}return window.addEventListener("resize",U),Ct(),requestAnimationFrame(()=>U()),{el:h,update:Ct,destroy(){clearInterval(ht),Nt&&Nt.disconnect(),window.removeEventListener("resize",U),cancelAnimationFrame(g.raf)}}}var Gt=i=>document.querySelector(i),Ul={lesha:{name:{en:"Tula",ru:"\u0422\u0443\u043B\u0430"},lat:54.1931,lon:37.6173,tz:"Europe/Moscow"},ari:{name:{en:"Seattle",ru:"\u0421\u0438\u044D\u0442\u043B"},lat:47.6062,lon:-122.3321,tz:"America/Los_Angeles"}},Ty={lesha:"#6ad7ff",ari:"#ff7eb6"},Kr=(i,t)=>({name:{en:t.name.en,ru:t.name.ru},lat:t.lat,lon:t.lon,tz:t.tz,color:Ty[i],person:i}),be={ari:Kr("ari",Ul.ari),lesha:Kr("lesha",Ul.lesha)},Ap=i=>({name:{en:i.n.en,ru:i.n.ru},lat:i.lat,lon:i.lon,tz:i.tz});try{let i=JSON.parse(localStorage.getItem("g_cities")||"null")||{};for(let t of["lesha","ari"]){let e=i[t];e&&e.n&&e.tz&&(be[t]=Kr(t,Ap(e)))}}catch{}var Ep=()=>Object.fromEntries(Object.entries(be).map(([i,t])=>[i,{lat:t.lat,lon:t.lon,color:t.color}])),Pn={lesha:{name:{en:"Lesha",ru:"\u041B\u0435\u0448\u0430"},city:"lesha",get tz(){return be.lesha.tz}},ari:{name:{en:"Ari",ru:"\u0410\u0440\u0438"},city:"ari",get tz(){return be.ari.tz}}},Cp=["\u{1F60A}","\u{1F970}","\u{1F634}","\u{1F60E}","\u{1F914}","\u{1F622}","\u{1F624}","\u{1F973}","\u{1F912}","\u{1F917}","\u{1F60B}","\u{1F3A7}","\u2615","\u{1F4AA}","\u{1F327}\uFE0F","\u2728"];Rf([...Cp,...Object.values(Rh).flat()]);var E={S:{meta:{},bottles:{},games:{},wx:{}},me:null,other:null,net:null,globe:null,sel:null,units:"c",stack:[],cfg:{},phrase:"",mine:{k:"",today:0,total:0},t:yt,toast:an,lang:()=>Me(),name:i=>Pn[i].name[Me()]};E.t=(i,t)=>Me()==="ru"?yt(i,{s:E.me==="ari"?"\u0430":"",...t&&t.name!==void 0?{g:t.name===Pn.ari.name.ru?"\u0430":""}:{},...t}):yt(i,t);window.__A=E;var Gs=(i,t=new Date)=>new Intl.DateTimeFormat("en-CA",{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit"}).format(t),Yi=()=>Me()==="ru"?"ru-RU":"en-US",Jh=(i,t=new Date)=>new Intl.DateTimeFormat(Yi(),{timeZone:i,hour:"numeric",minute:"2-digit",hour12:Me()!=="ru"}).format(t),Ay=(i,t=new Date)=>new Intl.DateTimeFormat(Yi(),{timeZone:i,weekday:"short",month:"short",day:"numeric"}).format(t);function xp(i,t=new Date){let e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:i,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t).map(n=>[n.type,n.value]));return Math.round((Date.UTC(+e.year,+e.month-1,+e.day,+e.hour,+e.minute,+e.second)-Math.floor(t.getTime()/1e3)*1e3)/6e4)}var ea=()=>Pn[E.me].city,zs=()=>Pn[E.other].city,Ey=i=>E.units==="f"?Math.round(gl(i))+"\xB0F":Math.round(i)+"\xB0C",jr=i=>Math.round(E.units==="f"?gl(i):i)+"\xB0";E.ago=i=>{let t=Math.max(0,(Date.now()-i)/1e3),e=new Intl.RelativeTimeFormat(Yi(),{numeric:"auto"});return t<90?e.format(0,"second"):t<3600?e.format(-Math.round(t/60),"minute"):t<86400?e.format(-Math.round(t/3600),"hour"):e.format(-Math.round(t/86400),"day")};var Qr=i=>{let t=Gs(Pn[i].tz),e=E.S.meta.hearts&&E.S.meta.hearts[i]&&E.S.meta.hearts[i][t]||0;return i===E.me&&E.mine.k===t?Math.max(e,E.mine.today):e},qh=i=>{let t=E.S.meta.heartsTotal&&E.S.meta.heartsTotal[i]||0;return i===E.me?Math.max(t,E.mine.total):t},Rp=(i,t)=>new Date(Date.parse(i+"T00:00:00Z")+t*864e5).toISOString().slice(0,10);function Pp(i){let t=E.S.meta.streak&&E.S.meta.streak[i];if(!t||!t.d)return{n:0,lit:!1,best:0};let e=Gs(Pn[i].tz),n=t.d===e;return{n:(n||t.d===Rp(e,-1))&&t.n||0,lit:n,best:Math.max(t.best||0,t.n||0)}}function Cy(){let i=E.me,t=Gs(Pn[i].tz),e=E.S.meta.streak&&E.S.meta.streak[i];if(e&&e.d===t)return;let n=e&&e.d===Rp(t,-1)?(e.n||0)+1:1;E.net.set("meta/streak/"+i,{d:t,n,best:Math.max(n,e&&e.best||0)}),n>1&&setTimeout(()=>an(E.t("streakNew",{n})),1800)}var Ry=i=>{let t=new Intl.PluralRules(Yi()).select(i);return Me()==="ru"?t==="one"?yt("streakDay"):yt("streakDays"):i===1?yt("streakDay"):yt("streakDays")},Fl=()=>E.presAt>0&&Date.now()-E.presAt<5e4&&E.presVal>0,Yh=!1;function kl(i,t){let e=Gt("#screen"),n=E.stack[E.stack.length-1];n&&n.el.classList.add("under");let s=C("div",{class:"scr"},C("div",{class:"scr-h"},C("button",{class:"back",id:"scr-back",html:jt.back,onclick:()=>E.pop()}),C("h2",{},i),C("span",{class:"who-dot"+(Fl()?" on":""),title:E.name(E.other)})),C("div",{class:"scr-b"},t.el));e.append(s),e.classList.add("open"),E.stack.push({el:s,view:t}),E.globe&&(E.globe.paused=!0),history.pushState({g:E.stack.length},"")}function Ip(){let i=E.stack.pop();if(!i)return;i.view.destroy&&i.view.destroy(),i.el.classList.add("out"),setTimeout(()=>i.el.remove(),280);let t=E.stack[E.stack.length-1];t?(t.el.classList.remove("under"),t.view.update&&t.view.update()):(Gt("#screen").classList.remove("open"),E.globe&&(E.globe.paused=!1))}E.push=kl;E.pop=()=>{if(!E.stack.length)return;let i=E.stack.length;Yh=!0,history.back(),setTimeout(()=>{E.stack.length===i&&Ip(),Yh=!1},350)};E.replace=(i,t)=>{let e=E.stack.pop();e&&(e.view.destroy&&e.view.destroy(),e.el.remove());let n=E.stack[E.stack.length-1];n&&n.el.classList.remove("under");let s=Gt("#screen"),r=C("div",{class:"scr"},C("div",{class:"scr-h"},C("button",{class:"back",id:"scr-back",html:jt.back,onclick:()=>E.pop()}),C("h2",{},i),C("span",{class:"who-dot"+(Fl()?" on":"")})),C("div",{class:"scr-b"},t.el));n&&n.el.classList.add("under"),s.append(r),E.stack.push({el:r,view:t})};window.addEventListener("popstate",()=>{E.stack.length&&(Ip(),Yh=!1)});var Kh=()=>E.stack.forEach(i=>i.view.update&&i.view.update());E.pruneBottles=()=>{let i=Object.entries(E.S.bottles||{}).map(([e,n])=>({id:e,...n})).sort((e,n)=>e.t-n.t);if(i.length<=60)return;let t=i.filter(e=>e.r);for(let e of t.slice(0,i.length-50))E.net.remove("bottles/"+e.id)};var ta=new Set;E.afterBottleSent=i=>{ta.add(i),Ol(),E.globe.launchBottle(ea(),zs(),()=>{ta.delete(i),Ol()}),an(yt("bottleSent"))};function Ol(){let i=0,t=0;for(let[e,n]of Object.entries(E.S.bottles||{}))n.r||ta.has(e)||(n.f===E.me?t++:i++);for(let[e,n]of Object.entries(be)){let s=$i[e];if(!s)continue;let r=n.person===E.me,a=r?i:t,o=a?r?"in":"out":"";if(s.bst!==o){let c=s.bst;s.bst=o,s.bt.className="bt"+(o?" on "+o:""),s.bt.removeAttribute("style"),o==="in"&&E.booted&&(s.bt.offsetWidth,s.bt.classList.add("land"),navigator.vibrate&&navigator.vibrate([12,40,12])),s.chip.classList.toggle("alert",o==="in"),s.btH=o?30:0,Ti(),!o&&c==="in"&&s.chip.style.removeProperty("--bl")}s.bt.dataset.n=a>1?a:"",E.globe.setAlert(e,o==="in")}}var Py=()=>Object.values(E.S.bottles||{}).filter(i=>i.f!==E.me&&!i.r).length;function Lp(){let i=E.S.games||{},t=E.me;return{ttt:!!(i.ttt&&!i.ttt.w&&i.ttt.turn===t),c4:!!(i.c4&&!i.c4.w&&i.c4.turn===t),bs:!!(i.bs&&i.bs.v===2&&(i.bs.st==="place"&&!(i.bs.ready&&i.bs.ready[t])||i.bs.st==="play"&&i.bs.turn===t)),hang:!!(i.hang&&(i.hang.st==="pick"&&i.hang.setter===t||i.hang.st==="play"&&i.hang.setter!==t))}}function Iy(){let i=new URLSearchParams(location.hash.replace(/^#/,""));return{k:i.get("k")||"",me:i.get("me")||""}}function Ly(i){return new Promise(t=>{let e=i.me==="lesha"||i.me==="ari"?i.me:"",n=C("input",{id:"setup-word",placeholder:"\u2026",autocomplete:"off",autocapitalize:"none",value:i.k}),s=C("div",{class:"err"}),r=u=>C("button",{class:"who-btn"+(e===u?" on":""),"data-who":u,onclick:()=>{e=u,c()}},Pn[u].name[Me()]),a=r("lesha"),o=r("ari"),c=()=>{a.classList.toggle("on",e==="lesha"),o.classList.toggle("on",e==="ari")},l=C("button",{class:"btn big",id:"setup-go",onclick:()=>{if(!e){s.textContent=yt("needWho");return}if(!n.value.trim()){s.textContent=yt("needWord");return}h.remove(),t({me:e,phrase:n.value.trim()})}},yt("openGlobe")),h=C("div",{class:"setup",id:"setup"},C("div",{class:"setup-card glass"},C("div",{class:"logo",html:jt.heart}),C("h1",{},yt("setupTitle")),C("p",{},yt("setupSub")),C("h3",{},yt("whoAreYou")),C("div",{class:"row"},a,o),C("h3",{},yt("secretWord")),n,C("p",{class:"small"},yt("secretHint")),s,l));document.body.append(h),e&&i.k&&l.click()})}var $i={};function Dy(){let i=Gt("#labels");i.replaceChildren();for(let[t,e]of Object.entries(be)){let n=C("div",{class:"cl","data-city":t,"data-who":e.person||"",style:{opacity:0}},C("button",{class:"bt","data-city":t,"aria-label":yt("bottle"),html:jt.bottle,onclick:()=>Up(t)}),C("div",{class:"l1"},C("b",{class:"cn"}),C("span",{class:"cm"})),C("div",{class:"l2"},C("span",{class:"ct"}),C("span",{class:"cw"})));i.append(n),$i[t]={chip:n,bt:n.querySelector(".bt"),cn:n.querySelector(".cn"),cm:n.querySelector(".cm"),ct:n.querySelector(".ct"),cw:n.querySelector(".cw"),bst:"",btH:0}}}function Ti(){for(let[i,t]of Object.entries(be)){let e=$i[i];if(!e)continue;e.cn.textContent=t.name[Me()].toUpperCase(),e.ct.textContent=Jh(t.tz);let n=E.S.wx[i];if(n&&n.current){let s=n.current;e.cw.innerHTML=jt[Vr(s.weather_code,s.is_day)]+`<span>${jr(s.temperature_2m)}</span>`}else e.cw.textContent="";e.w=e.chip.offsetWidth,e.hh=e.chip.offsetHeight}}function zl(){for(let[i,t]of Object.entries(be)){let e=$i[i];if(!e||!t.person||t.person===E.me&&E.moodHold)continue;let n=E.S.meta.mood&&E.S.meta.mood[t.person];(e.cm.dataset.e||"")!==(n?n.e:"")&&(e.cm.dataset.e=n?n.e:"",e.cm.innerHTML=n?Xr(n.e):"")}}function Ny(){let i=E.globe;if(!i||!i.earth)return;let t=innerWidth,e=[];for(let[n,s]of Object.entries($i)){let r=i.cityScreen(n),a=r.x>t*.55,o=a?{dx:-14,dy:11}:{dx:15,dy:11};s.r!==a&&(s.r=a,s.chip.classList.toggle("r",a));let c=s.w||80,l=r.x+o.dx;l=a?Math.min(Math.max(l,c+12),t-12):Math.min(Math.max(l,12),t-c-12);let h=r.y+o.dy-(s.btH||0),u=a?l-c:l,d={x0:u,x1:u+c,y0:h,y1:h+(s.hh||34)},f=e.some(v=>d.x0<v.x1+6&&d.x1>v.x0-6&&d.y0<v.y1+4&&d.y1>v.y0-4);r.visible&&!f&&e.push(d);let _=r.visible&&!f&&!E.sel;s.chip.style.opacity=_?1:0,s.chip.classList.toggle("hid",!_),s.bst==="in"&&s.chip.style.setProperty("--bl",i.blink.toFixed(3)),s.chip.style.transform=`translate3d(${l.toFixed(1)}px,${h.toFixed(1)}px,0) translateX(${a?"-100%":"0"})`}}async function jh(i,t){let e=await yf(i,be[i],{force:t});e&&(E.S.wx[i]=e,Ti(),E.sel===i&&Vs())}var Gh=i=>Object.keys(be).forEach(t=>jh(t,i));function Qh(i,t){let e=t?Kr(i,Ap(t)):Kr(i,Ul[i]),n=be[i];if(Math.abs(n.lat-e.lat)<1e-4&&Math.abs(n.lon-e.lon)<1e-4)return n.name=e.name,!1;E.sel===i&&Ai(),vf(i),delete E.S.wx[i],be[i]=e;try{let s=JSON.parse(localStorage.getItem("g_cities")||"null")||{};t?s[i]={n:t.n,lat:t.lat,lon:t.lon,tz:t.tz}:delete s[i],localStorage.setItem("g_cities",JSON.stringify(s))}catch{}return E.globe&&(E.globe.syncCities(Ep()),E.globe.setArc("lesha","ari")),Ti(),ni(),jh(i),!0}function Uy(i){let t={n:i.n,lat:i.lat,lon:i.lon,tz:i.tz,t:Date.now()};Qh(E.me,t),E.net.set("meta/city/"+E.me,t),Ai(),E.globe.viewBoth(1800)}function Fy(){Qh(E.me,null),E.net.remove("meta/city/"+E.me),Ai(),E.globe.viewBoth(1800)}function Vh(i,t){t=String(t),i.textContent!==t&&(i.textContent=t,E.booted&&(i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")))}function ni(){let i=E.me,t=E.other;Gt("#hp-me-n").textContent=yt("you"),Vh(Gt("#hp-me"),Qr(i)),Gt("#hp-ot-n").textContent=E.name(t),Vh(Gt("#hp-ot"),Qr(t)),Gt("#hp-dot").classList.toggle("on",Fl());for(let[u,d]of[[i,"me"],[t,"ot"]]){let f=Pp(u);Vh(Gt("#hp-"+d+"-s"),f.n),Gt("#fl-"+d).classList.toggle("lit",f.lit&&f.n>0),Gt("#fl-"+d).classList.toggle("off",f.n===0)}let e=E.S.meta.meet,n=Gt("#meet-t");if(!e||!e.d)n.textContent=yt("meetSet");else{let u=Gs(Pn[i].tz),d=Math.round((Date.parse(e.d+"T00:00:00Z")-Date.parse(u+"T00:00:00Z"))/864e5);n.textContent=d>1?yt("meetDays",{n:d}):d===1?yt("meetOne"):d===0?yt("meetToday"):yt("meetAgo",{n:-d})}let s=E.S.meta.mood&&E.S.meta.mood[i],r=Gt("#mood-e");E.moodHold||(s?(r.classList.add("emo"),r.dataset.e!==s.e&&(r.dataset.e=s.e,r.innerHTML=Xr(s.e))):(r.classList.contains("emo")||!r.querySelector("svg"))&&(r.classList.remove("emo"),delete r.dataset.e,r.innerHTML=jt.smile));let a=Lp(),o=Object.values(a).filter(Boolean).length,c=Gt("#b-games .badge");c.textContent=o||"",c.style.display=o?"":"none";let l=Gt("#b-bottles .badge"),h=E.S.bottles?Py():0;l.textContent=h||"",l.style.display=h?"":"none",document.querySelectorAll(".scr-h .who-dot").forEach(u=>u.classList.toggle("on",Fl()))}function Dp(){document.querySelectorAll("[data-ic]").forEach(i=>{i.dataset.done||(i.innerHTML=jt[i.dataset.ic],i.dataset.done=1)}),document.querySelectorAll("[data-i]").forEach(i=>{i.textContent=yt(i.dataset.i)}),document.title=yt("app")}function Oy(i){return Mf(i,12).map(t=>{let e=+t.time.slice(11,13),n=Me()==="ru"?String(e).padStart(2,"0"):(e%12||12)+(e<12?"a":"p"),s=ml(t.code,t.day,Me());return`<div class="hr"><small>${n}</small><span>${jt[Vr(t.code,t.day)]}</span><b>${jr(t.temp)}</b></div>`}).join("")}function By(i){return i.daily?i.daily.time.slice(0,4).map((t,e)=>{let n=ml(i.daily.weather_code[e],1,Me()),s=new Intl.DateTimeFormat(Yi(),{weekday:"short"}).format(new Date(t+"T12:00:00"));return`<div class="dy"><span class="dn">${we(s)}</span><span>${jt[Vr(i.daily.weather_code[e],1)]}</span><span class="dd">${we(n.text)}</span><b>${jr(i.daily.temperature_2m_max[e])}</b><small>${jr(i.daily.temperature_2m_min[e])}</small></div>`}).join(""):""}function ky(i){let t=be[i],e=E.S.wx[i],n=Me(),s=t.person,r=`<div class="sh-head"><div><h2>${we(t.name[n])}</h2></div><button class="x" id="sh-x" aria-label="${we(yt("close"))}">${jt.close}</button></div>`;if(r+='<div class="sh-clock"><b id="sh-time"></b><span id="sh-date"></span></div>',s){let a=E.S.meta.mood&&E.S.meta.mood[s],o=s===E.me;r+=`<div class="who"><div class="who-l"><span class="av">${a?Xr(a.e):jt.heartO}</span><div><b>${we(E.name(s))}</b><small>${a?we(E.ago(a.t)):we(yt("noMood"))}</small></div></div>`,r+=`<div class="who-r"><div class="hc"><span>${jt.heartO}</span> <b id="sh-hc">${Qr(s)}</b><small>${we(yt("today"))}</small></div>`,r+=o?`<button class="mini" id="sh-mood" aria-label="${we(yt("setMood"))}">${a?Xr(a.e):jt.smile}</button>`:`<button class="mini send" id="sh-heart" aria-label="${we(yt("sendHeart"))}">${jt.heart}</button>`,r+="</div></div>"}if(e&&e.current){let a=e.current,o=ml(a.weather_code,a.is_day,n),c=E.units==="f"?Math.round(a.temperature_2m)+"\xB0C":Math.round(gl(a.temperature_2m))+"\xB0F",l=E.units==="f"?Math.round(xf(a.wind_speed_10m))+" "+yt("mph"):Math.round(a.wind_speed_10m)+" "+yt("ms");r+=`<div class="wx"><div class="wx-main"><span class="wx-ic">${jt[Vr(a.weather_code,a.is_day)]}</span><div><div class="wx-t">${Ey(a.temperature_2m)} <small>${c}</small></div><div class="wx-d">${we(o.text)}</div></div><button class="unit" id="sh-unit">${E.units==="f"?"\xB0F \u2192 \xB0C":"\xB0C \u2192 \xB0F"}</button></div>`,r+=`<div class="wx-meta"><span>${we(yt("feels"))} <b>${jr(a.apparent_temperature)}</b></span><span>${we(yt("wind"))} <b>${we(l)}</b></span><span>${we(yt("humidity"))} <b>${Math.round(a.relative_humidity_2m)}%</b></span></div>`,r+=`<div class="hours">${Oy(e)}</div><div class="days">${By(e)}</div>`,e.daily&&e.daily.sunrise&&(r+=`<div class="sun"><span>${we(yt("sunrise"))}<b>${e.daily.sunrise[0].slice(11,16)}</b></span><span>${we(yt("sunset"))}<b>${e.daily.sunset[0].slice(11,16)}</b></span></div>`),r+="</div>"}else r+=`<div class="wx empty">${we(yt("noWeather"))}</div>`;if(s){let a=be.lesha,o=be.ari,c=Math.round((xp(a.tz)-xp(o.tz))/60),l=Math.round(mf(a,o));if(l<40)return r+`<div class="dist">${we(yt("sameCity"))}</div>`;let h=c===0?yt("timeSame",{a:a.name[n],b:o.name[n]}):yt("timeAhead",{a:(c>0?a:o).name[n],b:(c>0?o:a).name[n],h:Math.abs(c)});r+=`<div class="dist">${we(h)}<br>${we(yt("distance",{km:l.toLocaleString(Yi()),mi:Math.round(l*.621371).toLocaleString(Yi())}))}</div>`}return r}var Bl="";function Np(){if(!E.sel)return;let i=Gt("#sh-time"),t=Gt("#sh-date");i&&(i.textContent=Jh(be[E.sel].tz)),t&&(t.textContent=Ay(be[E.sel].tz))}function Vs(){if(!E.sel)return;let i=ky(E.sel);if(i===Bl)return;Bl=i;let t=Gt("#sheet-body"),e=t.scrollTop;t.innerHTML=i,t.scrollTop=e,Np()}function vp(i){E.sel=i,Bl="",E.globe.setSelected(i),E.globe.focusCity(i),E.globe.setSheetOpen(!0),Gt("#sheet").classList.add("open"),Gt("#app").classList.add("sheet-open"),Gt("#sheet-body").scrollTop=0,Vs(),[...Gt("#sheet-body").children].forEach((t,e)=>{t.classList.add("rise"),t.style.animationDelay=(.06+e*.055).toFixed(3)+"s"}),E.globe.pulseCity(i),jh(i)}var Wh=!1;function Up(i){if(Wh)return;let t=be[i],e=t&&t.person===E.me?Ch(E):[];if(!e.length){vp(i);return}Wh=!0,Ai(),E.globe.focusCity(i),E.globe.pulseCity(i),Eh(E,e[0].id,{others:e.length-1,onLeave:()=>{Wh=!1},onClose:()=>vp(i)})}function Ai(){E.sel&&(E.sel=null,Bl="",E.globe.setSelected(null),E.globe.setSheetOpen(!1),Gt("#sheet").classList.remove("open"),Gt("#app").classList.remove("sheet-open"))}var Nl=0,yp=null,Mp=0;function zy(){let i=Gt("#b-heart"),t=i.getBoundingClientRect(),e=Gt("#fx"),n=C("i",{class:"rip"});for(i.append(n),n.addEventListener("animationend",()=>n.remove());e.children.length>26;)e.firstChild.remove();let s=["#ff5c9d","#ff8cc0","#ffb3d4","#ffd27a"],r=3+Math.floor(Math.random()*2);for(let a=0;a<r;a++){let o=12+Math.random()*14,c=C("i",{class:"fxh",html:jt.heart});c.style.cssText=`left:${t.left+t.width/2+(Math.random()-.5)*22}px;top:${t.top+t.height*.3}px;--s:${o}px;--c:${s[Math.random()*s.length|0]};--dx:${(Math.random()-.5)*120}px;--dy:${-(110+Math.random()*130)}px;--r:${(Math.random()-.5)*70}deg;--t:${(.9+Math.random()*.7).toFixed(2)}s;animation-delay:${(a*.045).toFixed(3)}s`,c.addEventListener("animationend",()=>c.remove()),e.append(c)}}function bp(){let i=E.me,t=Gs(Pn[i].tz);E.mine.k!==t&&(E.mine={k:t,today:Qr(i),total:qh(i)}),E.mine.today++,E.mine.total++,Nl++,E.net.set(`meta/hearts/${i}/${t}`,E.mine.today),E.net.set(`meta/heartsTotal/${i}`,E.mine.total),clearTimeout(yp),yp=setTimeout($h,500);let e=performance.now();e-Mp>160&&(Mp=e,E.globe.launchHearts(ea(),zs(),1));let n=Gt("#b-heart");if(n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),zy(),navigator.vibrate&&navigator.vibrate(12),ni(),zl(),E.sel){let s=Gt("#sh-hc");s&&be[E.sel].person===i&&(s.textContent=Qr(i))}}function $h(){if(!Nl)return;let i=Nl;Nl=0,E.net.set(`meta/lastHeart/${E.me}`,{n:i,t:Date.now()})}function Hy(i){E.globe.launchHearts(zs(),ea(),Math.min(i,6)),an(yt("heartsIn",{name:E.name(E.other),n:i})),navigator.vibrate&&navigator.vibrate([20,40,20])}var ks=!1;function Gy(){let i=E.S.meta,t=E.me,e=E.other,n=Gs(Pn[t].tz),s=i.hearts&&i.hearts[t]&&i.hearts[t][n]||0,r=i.heartsTotal&&i.heartsTotal[t]||0;E.mine.k!==n?E.mine={k:n,today:s,total:Math.max(r,E.mine.total)}:(E.mine.today=Math.max(E.mine.today,s),E.mine.total=Math.max(E.mine.total,r));let a=i.lastHeart&&i.lastHeart[e];E.lastSeenHeart==null?E.lastSeenHeart=a?a.t:0:a&&a.t>E.lastSeenHeart&&(E.lastSeenHeart=a.t,Hy(a.n||1));let o=i.heartsTotal&&i.heartsTotal[e]||0,c="g_seen_"+e;if(!ks){let v=+localStorage.getItem(c)||0;v&&o>v&&an(yt("whileAway",{n:o-v,name:E.name(e)}),4200)}o&&localStorage.setItem(c,o);let l=i.presence&&i.presence[e]||0;ks?l!==E.presVal&&(E.presVal=l,E.presAt=Date.now()):(E.presVal=l,E.presAt=0);let h=i.mood&&i.mood[e],u=h?h.e+":"+h.t:"";ks?u!==E.moodKey&&(E.moodKey=u,h&&Date.now()-h.t<3e5&&(E.pendingMood=h.e)):E.moodKey=u;let d=i.ingame&&i.ingame[e],f=d?d.g+":"+d.n:"";ks?f!==E.igKey&&(E.igKey=f,d&&(E.igAt=Date.now()),d&&d.g!==E.igGame&&Hs[d.g]&&Ei!==d.g&&navigator.vibrate&&navigator.vibrate([10,40,10]),E.igGame=d?d.g:"",Kh()):(E.igKey=f,E.igGame=d?d.g:"",E.igAt=d&&Math.abs(Date.now()-d.n)<45e3?Date.now():0);let _=!ks;ks=!0;for(let v of["lesha","ari"]){let p=i.city&&i.city[v]&&i.city[v].n&&i.city[v].tz?i.city[v]:null;Qh(v,p)&&!_&&v!==E.me&&an(yt("cityMoved",{name:E.name(v),city:be[v].name[Me()]}),4200)}if(_&&Cy(),ni(),zl(),E.pendingMood){let v=E.pendingMood;E.pendingMood=null,Xy(v)}E.sel&&Vs(),Hl()}var Sp=!1;function Vy(){let i=E.S.bottles||{};if(!Sp)E.seenBottles=new Set(Object.keys(i)),Sp=!0;else for(let[t,e]of Object.entries(i))E.seenBottles.has(t)||(E.seenBottles.add(t),e.f!==E.me&&(ta.add(t),E.globe.launchBottle(zs(),ea(),()=>{ta.delete(t),Ol()}),an(yt("bottleArrived",{name:E.name(E.other)}),4e3),navigator.vibrate&&navigator.vibrate([15,30,15])));Ol(),ni(),Kh()}function Wy(i,t,e){let n=t.getBoundingClientRect(),r=(E.sel&&Gt("#sh-mood")||Gt("#mood-e")).getBoundingClientRect();E.moodHold=!0,E.net.set("meta/mood/"+E.me,{e:i,t:Date.now()}),e.close();let a=()=>{if(!E.moodHold)return;E.moodHold=!1,ni(),zl(),Tl(E.sel&&Gt("#sh-mood")||Gt("#mood-e"));let o=$i[ea()];o&&o.cm.dataset.e&&Tl(o.cm),navigator.vibrate&&navigator.vibrate(14)};Df(i,n,r,a),setTimeout(a,3e3)}function wp(){let i=E.S.meta.mood&&E.S.meta.mood[E.me]&&E.S.meta.mood[E.me].e,t=Cp.map((n,s)=>{let r=C("button",{class:"mood"+(n===i?" on":""),"data-e":n,onclick:()=>Wy(n,r,e)},Cf(n));return r.style.setProperty("--i",s),r}),e=Bn(C("div",{},C("h3",{},yt("moodTitle")),C("div",{class:"mood-grid"},t),i?C("button",{class:"btn ghost",onclick:()=>{E.net.remove("meta/mood/"+E.me),e.close()}},yt("moodClear")):null))}function Xy(i){let t=$i[zs()],e=E.globe.cityScreen(zs());if(!t||!e.visible||E.sel||t.chip.style.opacity!=="1"||!t.cm.dataset.e){an(E.name(E.other)+" "+i,2600);return}let n=t.cm.getBoundingClientRect(),s=Sl(n);Nf(i,s.x,s.y),setTimeout(()=>Tl(t.cm),380)}function qy(){let i=E.S.meta.meet&&E.S.meta.meet.d,t=C("input",{type:"date",id:"meet-input",value:i||""}),e=Bn(C("div",{},C("h3",{},yt("meetTitle")),t,C("div",{class:"row"},i?C("button",{class:"btn ghost",onclick:()=>{E.net.remove("meta/meet"),e.close()}},yt("meetClear")):null,C("button",{class:"btn",id:"meet-save",onclick:()=>{t.value&&E.net.set("meta/meet",{d:t.value,t:Date.now()}),e.close()}},yt("meetSave")))))}function Yy(){let i=t=>{let e=Pp(t);return C("div",{class:"sk-row"+(e.lit?" lit":"")},C("div",{class:"sk-fire",html:jt.flame}),C("div",{class:"sk-info"},C("b",{},E.name(t)+(t===E.me?" \xB7 "+yt("you"):"")),C("small",{},e.n?E.t("streakNow",{n:e.n,d:Ry(e.n)}):"\u2014"),C("small",{},e.lit?E.t("streakLit",{name:E.name(t)}):E.t("streakWait",{name:E.name(t)}))),C("div",{class:"sk-n"},e.n,e.best>1?C("small",{},E.t("streakBest",{n:e.best})):null))};Bn(C("div",{class:"streak-modal"},C("h3",{},yt("streakTitle")),i(E.me),i(E.other),C("div",{class:"sk-tot"},C("span",{html:jt.heartO},yt("heartsTotal")),C("b",{},qh("lesha")+qh("ari"))),C("p",{class:"small"},yt("streakHint"))))}function $y(){let i=yt("status_"+(E.net.status||"connecting"))||"",t=()=>`${location.origin}${location.pathname}#k=${encodeURIComponent(E.phrase)}&me=${E.other}`,e=(r,a)=>C("button",{class:"seg"+(Me()===r?" on":""),onclick:()=>{Zy(r),s.close()}},a),n=(r,a)=>C("button",{class:"seg"+(E.units===r?" on":""),onclick:()=>{E.units=r,localStorage.setItem("g_units",r),Ti(),Vs(),s.close()}},a),s=Bn(C("div",{class:"settings"},C("h3",{},yt("settings")),C("label",{},yt("language")),C("div",{class:"row"},e("en","English"),e("ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439")),C("label",{},yt("tempUnits")),C("div",{class:"row"},n("c","\xB0C"),n("f","\xB0F")),C("label",{},yt("myCity")),C("button",{class:"btn ghost city-btn",id:"set-city",onclick:()=>{s.close();let r=Ul[E.me],a=Math.abs(be[E.me].lat-r.lat)>1e-4||Math.abs(be[E.me].lon-r.lon)>1e-4;setTimeout(()=>zf(E,{fmtTime:Jh,canReset:a,resetName:r.name[Me()],onPick:Uy,onReset:Fy}),220)}},C("span",{},be[E.me].name[Me()]),C("i",{html:jt.chevron})),C("button",{class:"btn ghost",id:"set-share",onclick:async()=>{try{await navigator.clipboard.writeText(t()),an(yt("linkCopied"))}catch{window.prompt("",t())}}},yt("shareLink",{name:E.name(E.other)})),C("label",{},yt("serverStatus")),C("p",{class:"small",id:"set-status"},i),C("button",{class:"btn ghost danger",id:"set-reset",onclick:async()=>{await Us(yt("switchConfirm"),yt("yes"),yt("no"))&&(["g_me","g_phrase"].forEach(r=>localStorage.removeItem(r)),location.hash="",location.reload())}},yt("switchPerson")),C("p",{class:"small credits"},yt("credits"))))}function Zy(i){xl(i),localStorage.setItem("g_lang",i),Dp(),Ti(),ni(),zl(),Vs()}var Hs={canvas:{icon:"pen",title:"g_canvas",desc:"g_canvas_d",make:()=>Ml(E)},theme:{icon:"bulb",title:"g_theme",desc:"g_theme_d",make:()=>qf(E)},ttt:{icon:"hash",title:"g_ttt",desc:"g_ttt_d",make:()=>$f(E)},pz:{icon:"puzzle",title:"g_pz",desc:"g_pz_d",make:()=>_p(E)},c4:{icon:"four",title:"g_c4",desc:"g_c4_d",make:()=>ap(E)},bs:{icon:"anchor",title:"g_bs",desc:"g_bs_d",make:()=>tp(E)},hang:{icon:"petal",title:"g_hang",desc:"g_hang_d",make:()=>ep(E)}},Ei=null,Xh=0,Zh=()=>{Ei&&document.visibilityState==="visible"&&E.net.set("meta/ingame/"+E.me,{g:Ei,n:Date.now()})};function Tp(i){Ei=i,clearInterval(Xh),Xh=0,i?(Zh(),Xh=setInterval(Zh,15e3)):E.net.remove("meta/ingame/"+E.me),Hl()}function Fp(i){let t=Hs[i];if(!t)return;let e=t.make(),n=E.stack[E.stack.length-1],s={el:e.el,update:e.update,game:i,destroy(){e.destroy&&e.destroy(),Ei===i&&Tp(null)}};Ai(),n&&n.view.game?E.replace(yt(t.title),s):kl(yt(t.title),s),Tp(i)}var Op=()=>{let i=E.S.meta.ingame&&E.S.meta.ingame[E.other];return i&&Hs[i.g]&&E.igAt&&Date.now()-E.igAt<45e3?i.g:""};function Hl(){let i=Gt("#invite");if(!i||!E.net)return;let t=Op();t||(E.invOff="");let e=t&&Ei!==t&&E.invOff!==t?t:"";if(e===(E.invKey||""))return;E.invKey=e;let n=i.firstElementChild;if(n&&(n.classList.add("out"),setTimeout(()=>n.remove(),360)),!e)return;let s=Hs[e],r=C("div",{class:"invite",id:"invite-pill","data-game":e},C("span",{class:"iv-ic",html:jt[s.icon]}),C("span",{class:"iv-t"},C("b",{},yt("inviteTitle",{name:E.name(E.other)})),C("small",{},yt(s.title))),C("button",{class:"iv-go",id:"inv-join",onclick:()=>Fp(e)},yt("inviteJoin")),C("button",{class:"iv-x",id:"inv-x","aria-label":yt("close"),html:jt.close,onclick:()=>{E.invOff=e,Hl()}}));i.append(r)}function Jy(){let i={},t=Object.entries(Hs).map(([s,r])=>{let a=C("span",{class:"gs"});return i[s]=a,C("button",{class:"g-card",id:"gc-"+s,onclick:()=>Fp(s)},C("span",{class:"gi",html:jt[r.icon]}),C("div",{class:"gt"},C("b",{},yt(r.title)),C("small",{},yt(r.desc))),a)}),e=C("div",{class:"game hub"},t);function n(){let s=Lp(),r=Op();for(let a of Object.keys(Hs)){let o=s[a]?yt("yourTurnBadge"):r===a?yt("hereBadge",{name:E.name(E.other)}):"";i[a].textContent=o,i[a].classList.toggle("on",!!o)}}n(),kl(yt("gamesTitle"),{el:e,update:n,destroy(){}})}async function Ky(){let i=Gt("#loader");E.cfg=await fetch("config.json?_="+Date.now()).then(u=>u.json()).catch(()=>({}));let t=Iy(),e=localStorage.getItem("g_me"),n=localStorage.getItem("g_phrase"),s=localStorage.getItem("g_lang");if(xl(s||"en"),!e||!n){i.classList.add("hide");let u=await Ly(t);e=u.me,n=u.phrase,localStorage.setItem("g_me",e),localStorage.setItem("g_phrase",n),s||(xl(e==="lesha"?"ru":"en"),localStorage.setItem("g_lang",Me())),i.classList.remove("hide")}(t.k||t.me)&&history.replaceState(null,"",location.pathname+location.search),E.me=e,E.other=e==="lesha"?"ari":"lesha",E.phrase=n,E.units=localStorage.getItem("g_units")||(e==="ari"?"f":"c"),Dp();let r=await gf(n);E.net=new pl(E.cfg.db,r),E.net.onStatus(u=>{let d=Gt("#set-status");d&&(d.textContent=yt("status_"+u)),Gt("#app").dataset.net=u});let a=Gt("#gl"),o=new fl(a,{onPick:u=>{if(!u)return Ai();u.type==="city"&&Up(u.id)}});E.globe=o,window.__g=o;try{await o.init("assets/",u=>{Gt("#loader .bar i").style.width=Math.round(u*100)+"%"})}catch(u){console.error(u),Gt("#loader p").textContent=yt("noWebgl");return}o.setCities(Ep()),o.setArc("lesha","ari");{let u=new URLSearchParams(location.search),d=E.cfg.tiles||{},f=u.has("notiles")?"":u.get("tiles")||d.url;E.tileUrl=f||"",f&&o.enableTiles({...d,url:f},_=>document.body.classList.toggle("tiles-on",_))}let c=location.search.includes("nointro");c?o.viewBoth(0):o.intro(),Dy(),Ti(),ni(),o.onFrame=Ny,o.start(),i.classList.add("hide"),Gt("#app").classList.add("live"),setTimeout(()=>{Gt("#labels").classList.add("show"),E.booted=!0},c?0:2100),E.net.listen("meta",u=>{E.S.meta=u||{},Gy()}),E.net.listen("bottles",u=>{E.S.bottles=u||{},Vy()}),E.net.listen("games",u=>{E.S.games=u||{},ni(),Kh()}),Gt("#b-heart").addEventListener("click",bp),Gt("#b-games").addEventListener("click",Jy),Gt("#b-bottles").addEventListener("click",()=>kl(yt("bottles"),Ef(E))),Gt("#b-mood").addEventListener("click",wp),Gt("#b-both").addEventListener("click",()=>{Ai(),o.viewBoth(1400)}),Gt("#btn-set").addEventListener("click",$y),Gt("#meet").addEventListener("click",qy),Gt("#hearts-pill").addEventListener("click",Yy),Gt("#sheet").addEventListener("click",u=>{u.target.closest("#sh-x")?Ai():u.target.closest("#sh-heart")?bp():u.target.closest("#sh-mood")?wp():u.target.closest("#sh-unit")&&(E.units=E.units==="f"?"c":"f",localStorage.setItem("g_units",E.units),Ti(),Vs())}),Gh(),setInterval(()=>Gh(),900*1e3),setInterval(()=>{Ti(),Np(),ni(),Hl()},1e3);let l=()=>{document.visibilityState==="visible"&&E.net.set("meta/presence/"+E.me,Date.now())};l(),setInterval(l,2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?($h(),E.net.set("meta/presence/"+E.me,0),Ei&&E.net.remove("meta/ingame/"+E.me)):(l(),Zh(),Gh(),o._updateSun())}),window.addEventListener("pagehide",()=>{$h(),E.net.set("meta/presence/"+E.me,0),Ei&&E.net.remove("meta/ingame/"+E.me)}),"serviceWorker"in navigator&&!location.search.includes("nosw")&&navigator.serviceWorker.register("sw.js").catch(()=>{});let h=()=>{(window.scrollY||window.scrollX)&&window.scrollTo(0,0);let u=document.scrollingElement;u&&u.scrollTop&&(u.scrollTop=0),Gt("#app").scrollTop=0};document.addEventListener("focusout",()=>setTimeout(h,80)),window.addEventListener("scroll",h,{passive:!0}),window.__ready=!0}Ky();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

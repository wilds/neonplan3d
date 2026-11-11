var qd=0,$u=1,$d=2;var bo=1,Zd=2,bs=3,ui=0,an=1,ne=2,On=0,Rn=1,Se=2,Zu=3,xo=4,wl=5;var _r=100,Kd=101,Jd=102,jd=103,Qd=104,Tl=200,vo=201,tp=202,ep=203,yo=204,Ku=205,np=206,ip=207,rp=208,sp=209,op=210,ap=211,lp=212,cp=213,up=214,Ha=0,Wa=1,Xa=2,os=3,Ya=4,qa=5,$a=6,Za=7,Ju=0,hp=1,fp=2,qn=0,ju=1,Qu=2,th=3,eh=4,nh=5,ih=6,rh=7;var sh=300,$i=301,Mr=302,Al=303,El=304,_o=306,gr=1e3,Tn=1001,Ka=1002,en=1003,dp=1004;var Mo=1005;var Xe=1006,Rl=1007;var Zi=1008;var Cn=1009,oh=1010,ah=1011,xs=1012,Cl=1013,$n=1014,Zn=1015,Kn=1016,Pl=1017,Il=1018,vs=1020,lh=35902,ch=35899,uh=1021,hh=1022,Nn=1023,ri=1026,Ki=1027,fh=1028,Ll=1029,Ji=1030,Fl=1031;var Dl=1033,So=33776,wo=33777,To=33778,Ao=33779,Ol=35840,Nl=35841,Ul=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Gl=37488,Hl=37489,Eo=37490,Wl=37491,Xl=37808,Yl=37809,ql=37810,$l=37811,Zl=37812,Kl=37813,Jl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,sc=36492,oc=36494,ac=36495,lc=36283,cc=36284,Ro=36285,uc=36286;var Zs=2300,Ja=2301,za=2302,Uu=2303,Bu=2400,ku=2401,zu=2402;var pp=3200;var dh=0,mp=1,Ai="",Ue="srgb",Ks="srgb-linear",Js="linear",_e="srgb";var Va=7680;var gp=519,bp=512,xp=513,vp=514,hc=515,yp=516,_p=517,fc=518,Mp=519,ph=35044,mh=35048;var gh="300 es",Xn=2e3,js=2001;function Ab(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Eb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){let i=as("canvas");return i.style.display="block",i}var pd={},ls=null;function Qs(...i){let t="THREE."+i.shift();ls?ls("log",t,...i):console.log(t,...i)}function wp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=wp(i);let t="THREE."+i.shift();if(ls)ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=wp(i);let t="THREE."+i.shift();if(ls)ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function mr(...i){let t=i.join(" ");t in pd||(pd[t]=!0,Zt(...i))}function Tp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ap={[Ha]:Wa,[Xa]:$a,[Ya]:Za,[os]:qa,[Wa]:Ha,[$a]:Xa,[Za]:Ya,[qa]:os},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var du=Math.PI/180,ja=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Rb(i,t){return(i%t+t)%t}function pu(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _h=class _h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;var jt=_h,oi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],b=s[o+3];if(u!==b||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*b;g<0&&(f=-f,d=-d,m=-m,b=-b,g=-g);let p=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);p=Math.sin(p*x)/_,a=Math.sin(a*x)/_,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Mh=class Mh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(md.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mu.copy(this).projectOnVector(t),this.sub(mu)}reflect(t){return this.sub(mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mh.prototype.isVector3=!0;var q=Mh,mu=new q,md=new oi,Sh=class Sh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=r[0],g=r[3],p=r[6],x=r[1],_=r[4],v=r[7],M=r[2],S=r[5],A=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*g+a*_+l*S,s[6]=o*p+a*v+l*A,s[1]=c*b+h*x+u*M,s[4]=c*g+h*_+u*S,s[7]=c*p+h*v+u*A,s[2]=f*b+d*x+m*M,s[5]=f*g+d*_+m*S,s[8]=f*p+d*v+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=e*u+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gu.makeScale(t,e)),this}rotate(t){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gu.makeRotation(-t)),this}translate(t,e){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;var ee=Sh,gu=new ee,gd=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cb(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_e&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?Js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:gd,fromXYZ:bd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:gd,fromXYZ:bd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var fe=Cb();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vr===void 0&&(Vr=as("canvas")),Vr.width=t.width,Vr.height=t.height;let r=Vr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=as("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pb=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bu(r[o].image)):s.push(bu(r[o]))}else s=bu(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function bu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Ib=0,xu=new q,dn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,r=Tn,s=Xe,o=Zi,a=Nn,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Gi(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=sh;dn.DEFAULT_ANISOTROPY=1;var wh=class wh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(p+1)/2,S=(h+f)/4,A=(u+b)/4,y=(m+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=S/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=S/r,s=y/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wh.prototype.isVector4=!0;var ke=wh,tl=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new dn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},to=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Gr.setFromMatrixColumn(t,0).length(),s=1/Gr.setFromMatrixColumn(t,1).length(),o=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f+b*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,b=c*u;e[0]=f-b*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,b=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-b*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lb,t,Fb)}lookAt(t,e,n){let r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(n,Sn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(n,Sn)),Ui.normalize(),fa.crossVectors(Sn,Ui),r[0]=Ui.x,r[4]=fa.x,r[8]=Sn.x,r[1]=Ui.y,r[5]=fa.y,r[9]=Sn.y,r[2]=Ui.z,r[6]=fa.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],_=n[7],v=n[11],M=n[15],S=r[0],A=r[4],y=r[8],R=r[12],E=r[1],w=r[5],C=r[9],L=r[13],I=r[2],O=r[6],T=r[10],P=r[14],N=r[3],F=r[7],B=r[11],z=r[15];return s[0]=o*S+a*E+l*I+c*N,s[4]=o*A+a*w+l*O+c*F,s[8]=o*y+a*C+l*T+c*B,s[12]=o*R+a*L+l*P+c*z,s[1]=h*S+u*E+f*I+d*N,s[5]=h*A+u*w+f*O+d*F,s[9]=h*y+u*C+f*T+d*B,s[13]=h*R+u*L+f*P+d*z,s[2]=m*S+b*E+g*I+p*N,s[6]=m*A+b*w+g*O+p*F,s[10]=m*y+b*C+g*T+p*B,s[14]=m*R+b*L+g*P+p*z,s[3]=x*S+_*E+v*I+M*N,s[7]=x*A+_*w+v*O+M*F,s[11]=x*y+_*C+v*T+M*B,s[15]=x*R+_*L+v*P+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],b=t[7],g=t[11],p=t[15],x=l*d-c*f,_=a*d-c*u,v=a*f-l*u,M=o*d-c*h,S=o*f-l*h,A=o*u-a*h;return e*(b*x-g*_+p*v)-n*(m*x-g*M+p*S)+r*(m*_-b*M+p*A)-s*(m*v-b*S+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=e*a-n*o,_=e*l-r*o,v=e*c-s*o,M=n*l-r*a,S=n*c-s*a,A=r*c-s*l,y=h*b-u*m,R=h*g-f*m,E=h*p-d*m,w=u*g-f*b,C=u*p-d*b,L=f*p-d*g,I=x*L-_*C+v*w+M*E-S*R+A*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(a*L-l*C+c*w)*O,t[1]=(r*C-n*L-s*w)*O,t[2]=(b*A-g*S+p*M)*O,t[3]=(f*S-u*A-d*M)*O,t[4]=(l*E-o*L-c*R)*O,t[5]=(e*L-r*E+s*R)*O,t[6]=(g*v-m*A-p*_)*O,t[7]=(h*A-f*v+d*_)*O,t[8]=(o*C-a*E+c*y)*O,t[9]=(n*E-e*C-s*y)*O,t[10]=(m*S-b*v+p*x)*O,t[11]=(u*v-h*S-d*x)*O,t[12]=(a*R-o*w-l*y)*O,t[13]=(e*w-n*R+r*y)*O,t[14]=(b*_-m*M-g*x)*O,t[15]=(h*M-u*_+f*x)*O,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,b=o*h,g=o*u,p=a*u,x=l*c,_=l*h,v=l*u,M=n.x,S=n.y,A=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(m-_)*M,r[3]=0,r[4]=(d-v)*S,r[5]=(1-(f+p))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(m+_)*A,r[9]=(g-x)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Gr.set(r[0],r[1],r[2]).length(),a=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Vn.copy(this);let c=1/o,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,b;if(l)m=s/(o-s),b=o*s/(o-s);else if(a===Xn)m=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===js)m=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,b;if(l)m=1/(o-s),b=o/(o-s);else if(a===Xn)m=-2/(o-s),b=-(o+s)/(o-s);else if(a===js)m=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sl.prototype.isMatrix4=!0;var Ae=Sl,Gr=new q,Vn=new Ae,Lb=new q(0,0,0),Fb=new q(1,1,1),Ui=new q,fa=new q,Sn=new q,xd=new Ae,vd=new oi,Hi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Db=0,yd=new q,Hr=new oi,vi=new Ae,da=new q,zs=new q,Ob=new q,Nb=new oi,_d=new q(1,0,0),Md=new q(0,1,0),Sd=new q(0,0,1),wd={type:"added"},Ub={type:"removed"},Wr={type:"childadded",child:null},vu={type:"childremoved",child:null},vn=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Hi,n=new oi,r=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new ee}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(_d,t)}rotateY(t){return this.rotateOnAxis(Md,t)}rotateZ(t){return this.rotateOnAxis(Sd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_d,t)}translateY(t){return this.translateOnAxis(Md,t)}translateZ(t){return this.translateOnAxis(Sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zs,da,this.up):vi.lookAt(da,zs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(vi),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ub),vu.child=t,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Ob),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Nb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bb={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function yu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=Rb(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yu(o,s,t+1/3),this.g=yu(o,s,t),this.b=yu(o,s,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Ep[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return fe.workingToColorSpace(fn.copy(this),t),Math.round(me(fn.r*255,0,255))*65536+Math.round(me(fn.g*255,0,255))*256+Math.round(me(fn.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ue){fe.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(pa);let n=pu(Bi.h,pa.h,e),r=pu(Bi.s,pa.s,e),s=pu(Bi.l,pa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new tt;tt.NAMES=Ep;var fs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new q,yi=new q,_u=new q,_i=new q,Xr=new q,Yr=new q,Td=new q,Mu=new q,Su=new q,wu=new q,Tu=new ke,Au=new ke,Eu=new ke,wi=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Gn.subVectors(t,e),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Gn.subVectors(r,e),yi.subVectors(n,e),_u.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(yi),l=Gn.dot(_u),c=yi.dot(yi),h=yi.dot(_u),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Tu.setScalar(0),Au.setScalar(0),Eu.setScalar(0),Tu.fromBufferAttribute(t,e),Au.fromBufferAttribute(t,n),Eu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Tu,s.x),o.addScaledVector(Au,s.y),o.addScaledVector(Eu,s.z),o}static isFrontFacing(t,e,n,r){return Gn.subVectors(n,e),yi.subVectors(t,e),Gn.cross(yi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Xr.subVectors(r,n),Yr.subVectors(s,n),Mu.subVectors(t,n);let l=Xr.dot(Mu),c=Yr.dot(Mu);if(l<=0&&c<=0)return e.copy(n);Su.subVectors(t,r);let h=Xr.dot(Su),u=Yr.dot(Su);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xr,o);wu.subVectors(t,s);let d=Xr.dot(wu),m=Yr.dot(wu);if(m>=0&&d<=m)return e.copy(s);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Yr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Td.subVectors(s,r),a=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(Td,a);let p=1/(g+b+f);return o=b*p,a=f*p,e.copy(n).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),ga.subVectors(this.max,Vs),qr.subVectors(t.a,Vs),$r.subVectors(t.b,Vs),Zr.subVectors(t.c,Vs),ki.subVectors($r,qr),zi.subVectors(Zr,$r),hr.subVectors(qr,Zr);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-hr.z,hr.y,ki.z,0,-ki.x,zi.z,0,-zi.x,hr.z,0,-hr.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-hr.y,hr.x,0];return!Ru(e,qr,$r,Zr,ga)||(e=[1,0,0,0,1,0,0,0,1],!Ru(e,qr,$r,Zr,ga))?!1:(ba.crossVectors(ki,zi),e=[ba.x,ba.y,ba.z],Ru(e,qr,$r,Zr,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new q,new q,new q,new q,new q,new q,new q,new q],Hn=new q,ma=new yn,qr=new q,$r=new q,Zr=new q,ki=new q,zi=new q,hr=new q,Vs=new q,ga=new q,ba=new q,fr=new q;function Ru(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fr.fromArray(i,s);let a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=t.dot(fr),c=e.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new q,xa=new jt,kb=0,tn=class extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var eo=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zb=new yn,Gs=new q,Cu=new q,Wi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zb.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Cu)),this.expandByPoint(Gs.copy(t.center).sub(Cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vb=0,Fn=new Ae,Pu=new vn,Kr=new q,wn=new yn,Hs=new yn,je=new q,Ot=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ab(t)?br:eo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Pu.lookAt(t),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(wn.min,Hs.min),wn.expandByPoint(je),je.addVectors(wn.max,Hs.max),wn.expandByPoint(je)):(wn.expandByPoint(Hs.min),wn.expandByPoint(Hs.max))}wn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(t,c),je.add(Kr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new q,l[y]=new q;let c=new q,h=new q,u=new q,f=new jt,d=new jt,m=new jt,b=new q,g=new q;function p(y,R,E){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let w=1/(d.x*m.y-m.x*d.y);isFinite(w)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(w),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(w),a[y].add(b),a[R].add(b),a[E].add(b),l[y].add(g),l[R].add(g),l[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,R=x.length;y<R;++y){let E=x[y],w=E.start,C=E.count;for(let L=w,I=w+C;L<I;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new q,v=new q,M=new q,S=new q;function A(y){M.fromBufferAttribute(r,y),S.copy(M);let R=a[y];_.copy(R),_.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(S,R);let w=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,w)}for(let y=0,R=x.length;y<R;++y){let E=x[y],w=E.start,C=E.count;for(let L=w,I=w+C;L<I;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new q,no=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Iu=new q,Gb=new q,Hb=new ee,Wn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Iu.subVectors(n,e).cross(Gb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Iu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hb.getNormalMatrix(t),r=this.coplanarPoint(Iu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wb=0,li=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Rn,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Ku,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ds=class extends li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jr,Ws=new q,jr=new q,Qr=new q,ts=new jt,Xs=new jt,Rp=new Ae,va=new q,Ys=new q,ya=new q,Ad=new jt,Lu=new jt,Ed=new jt,io=class extends vn{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Jr===void 0){Jr=new Ot;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(e,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new no(n,3,0,!1)),Jr.setAttribute("uv",new no(n,2,3,!1))}this.geometry=Jr,this.material=t,this.center=new jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),Rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Qr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;_a(va.set(-.5,-.5,0),Qr,o,jr,r,s),_a(Ys.set(.5,-.5,0),Qr,o,jr,r,s),_a(ya.set(.5,.5,0),Qr,o,jr,r,s),Ad.set(0,0),Lu.set(1,0),Ed.set(1,1);let a=t.ray.intersectTriangle(va,Ys,ya,!1,Ws);if(a===null&&(_a(Ys.set(-.5,.5,0),Qr,o,jr,r,s),Lu.set(0,1),a=t.ray.intersectTriangle(va,ya,Ys,!1,Ws),a===null))return;let l=t.ray.origin.distanceTo(Ws);l<t.near||l>t.far||e.push({distance:l,point:Ws.clone(),uv:wi.getInterpolation(Ws,va,Ys,ya,Ad,Lu,Ed,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(i,t,e,n,r,s){ts.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Xs.x=s*ts.x-r*ts.y,Xs.y=r*ts.x+s*ts.y):Xs.copy(ts),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(Rp)}var Si=new q,Fu=new q,Ma=new q,Sa=new q,xr=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fu.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(Fu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fu).addScaledVector(Ma,f),d}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),r=Si.dot(Si)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,b=e.y-o.y,g=e.z-o.z,p=n.x-o.x,x=n.y-o.y,_=n.z-o.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(h),A,y,R,E,w,C,L,I,O,T,P,N;if(v>=M&&v>=S?(R=l,C=u,O=m,N=p,l>=0?(A=c,y=h,E=f,w=d,L=b,I=g,T=x,P=_):(A=h,y=c,E=d,w=f,L=g,I=b,T=_,P=x)):M>=S?(R=c,C=f,O=b,N=x,c>=0?(A=h,y=l,E=d,w=u,L=g,I=m,T=_,P=p):(A=l,y=h,E=u,w=d,L=m,I=g,T=p,P=_)):(R=h,C=d,O=g,N=_,h>=0?(A=l,y=c,E=u,w=f,L=m,I=b,T=p,P=x):(A=c,y=l,E=f,w=u,L=b,I=m,T=x,P=p)),R===0)return null;let F=A/R,B=y/R,z=1/R,G=E-F*C,V=w-B*C,W=L-F*O,K=I-B*O,nt=T-F*N,X=P-B*N,Y=nt*K-X*W,et=G*X-V*nt,Z=W*V-K*G;if(r){if(Y<0||et<0||Z<0)return null}else if((Y<0||et<0||Z<0)&&(Y>0||et>0||Z>0))return null;let J=Y+et+Z;if(J===0)return null;let rt=z*(Y*C+et*O+Z*N);return(J>0?rt<0:rt>0)?null:this.at(rt/J,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rd=new Ae,dr=new xr,wa=new Wi,Cd=new q,Ta=new q,Aa=new q,Ea=new q,Du=new q,Ra=new q,Pd=new q,Ca=new q,Et=class extends vn{constructor(t=new Ot,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Du.fromBufferAttribute(u,t),o?Ra.addScaledVector(Du,h):Ra.addScaledVector(Du.sub(e),h))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),dr.copy(t.ray).recast(t.near),!(wa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(wa,Cd)===null||dr.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Rd.copy(s).invert(),dr.copy(t.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,dr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let S=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);r=Pa(this,p,t,n,c,h,u,S,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=Pa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,b=f.length;m<b;m++){let g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let S=v,A=v+1,y=v+2;r=Pa(this,p,t,n,c,h,u,S,A,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){let x=g,_=g+1,v=g+2;r=Pa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Xb(i,t,e,n,r,s,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ui,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ta),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ea);let h=Xb(i,t,e,n,Ta,Aa,Ea,Pd);if(h){let u=new q;wi.getBarycoord(Pd,Ta,Aa,Ea,u),r&&(h.uv=wi.getInterpolatedAttribute(r,a,l,c,u,new jt)),s&&(h.uv1=wi.getInterpolatedAttribute(s,a,l,c,u,new jt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new q,materialIndex:0};wi.getNormal(Ta,Aa,Ea,f.normal),h.face=f,h.barycoord=u}return h}var il=class extends dn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=en,h=en,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=new Wi,Yb=new jt(.5,.5),Ia=new q,ro=class{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],_=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-h,p-m,M-x).normalize(),r[1].setComponents(c+o,d+h,p+m,M+x).normalize(),r[2].setComponents(c+a,d+u,p+b,M+_).normalize(),r[3].setComponents(c-a,d-u,p-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===Xn)r[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===js)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let e=Yb.distanceTo(t.center);return pr.radius=.7071067811865476+e,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ia.x=r.normal.x>0?t.max.x:t.min.x,Ia.y=r.normal.y>0?t.max.y:t.min.y,Ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rl=new q,sl=new q,Id=new Ae,qs=new xr,La=new Wi,Ou=new q,Ld=new q,ol=class extends vn{constructor(t=new Ot,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)rl.fromBufferAttribute(e,r-1),sl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=rl.distanceTo(sl);t.setAttribute("lineDistance",new Lt(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;Id.copy(r).invert(),qs.copy(t.ray).applyMatrix4(Id);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let b=d,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),_=Fa(this,t,qs,l,p,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(d),p=Fa(this,t,qs,l,b,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let b=d,g=m-1;b<g;b+=c){let p=Fa(this,t,qs,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Fa(this,t,qs,l,m-1,d,m-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fa(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(rl.fromBufferAttribute(a,r),sl.fromBufferAttribute(a,s),e.distanceSqToSegment(rl,sl,Ou,Ld)>n)return;Ou.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ou);if(!(c<t.near||c>t.far))return{distance:c,point:Ld.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fd=new q,Dd=new q,qe=class extends ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Fd.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fd.distanceTo(Dd);t.setAttribute("lineDistance",new Lt(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _n=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Od=new Ae,Vu=new xr,Da=new Wi,Oa=new q,An=class extends vn{constructor(t=new Ot,e=new _n){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,t.ray.intersectsSphere(Da)===!1)return;Od.copy(r).invert(),Vu.copy(t.ray).applyMatrix4(Od);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,b=d;m<b;m++){let g=c.getX(m);Oa.fromBufferAttribute(u,g),Nd(Oa,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,b=d;m<b;m++)Oa.fromBufferAttribute(u,m),Nd(Oa,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nd(i,t,e,n,r,s,o){let a=Vu.distanceSqToPoint(i);if(a<e){let l=new q;Vu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var so=class extends dn{constructor(t=[],e=$i,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends dn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends dn{constructor(t,e,n=$n,r,s,o,a=en,l=en,c,h=ri,u=1){if(h!==ri&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},al=class extends ci{constructor(t,e=$n,n=$i,r,s,o=en,a=en,l,c=ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oo=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ps=class i extends Ot{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function m(b,g,p,x,_,v,M,S,A,y,R){let E=v/A,w=M/y,C=v/2,L=M/2,I=S/2,O=A+1,T=y+1,P=0,N=0,F=new q;for(let B=0;B<T;B++){let z=B*w-L;for(let G=0;G<O;G++){let V=G*E-C;F[b]=V*x,F[g]=z*_,F[p]=I,c.push(F.x,F.y,F.z),F[b]=0,F[g]=0,F[p]=S>0?1:-1,h.push(F.x,F.y,F.z),u.push(G/A),u.push(1-B/y),P+=1}}for(let B=0;B<y;B++)for(let z=0;z<A;z++){let G=f+z+O*B,V=f+z+O*(B+1),W=f+(z+1)+O*(B+1),K=f+(z+1)+O*B;l.push(G,V,K),l.push(V,W,K),N+=6}a.addGroup(d,N,R),d+=N,f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ao=class i extends Ot{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new q,h=new jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function qb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Cp(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=jb(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return lo(s,o,e,a,l,c,0),o}function Cp(i,t,e,n,r){let s;if(r===cx(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Ud(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Ud(o/n|0,i[o],i[o+1],s);return s&&ms(s,s.next)&&(uo(s),s=s.next),s}function vr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ms(e,e.next)||Be(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ix(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Zb(i,n,r,s):$b(i)){t.push(l.i,i.i,c.i),uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kb(vr(i),t),lo(i,t,e,n,r,s,2)):o===2&&Jb(i,t,e,n,r,s):lo(vr(i),t,e,n,r,s,1);break}}}function $b(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&$s(r,a,s,l,o,c,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zb(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Be(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),p=Gu(d,m,t,e,n),x=Gu(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&$s(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=b&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&$s(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ms(n,r)&&Ip(n,e,e.next,r)&&co(n,r)&&co(r,n)&&(t.push(n.i,e.i,r.i),uo(e),uo(e.next),e=i=r),e=e.next}while(e!==i);return vr(e)}function Jb(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ox(o,a)){let l=Lp(o,a);o=vr(o,o.next),l=vr(l,l.next),lo(o,t,e,n,r,s,0),lo(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function jb(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Cp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(sx(c))}r.sort(Qb);for(let s=0;s<r.length;s++)e=tx(r[s],e);return e}function Qb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function tx(i,t){let e=ex(i,t);if(!e)return t;let n=Lp(e,i);return vr(n,n.next),vr(e,e.next)}function ex(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ms(i,e))return e;do{if(ms(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pp(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);co(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&nx(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function nx(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function ix(i,t,e,n){let r=i;do r.z===0&&(r.z=Gu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,rx(r)}function rx(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Gu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function sx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function $s(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Pp(i,t,e,n,r,s,o,a)}function ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ax(i,t)&&(co(i,t)&&co(t,i)&&lx(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||ms(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ms(i,t){return i.x===t.x&&i.y===t.y}function Ip(i,t,e,n){let r=Ua(Be(i,t,e)),s=Ua(Be(i,t,n)),o=Ua(Be(e,n,i)),a=Ua(Be(e,n,t));return!!(r!==s&&o!==a||r===0&&Na(i,e,t)||s===0&&Na(i,n,t)||o===0&&Na(e,i,n)||a===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ua(i){return i>0?1:i<0?-1:0}function ax(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ip(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function co(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function lx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lp(i,t){let e=Hu(i.i,i.x,i.y),n=Hu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ud(i,t,e,n){let r=Hu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cx(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Wu=class{static triangulate(t,e,n=2){return qb(t,e,n)}},ho=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Bd(t),kd(n,t);let o=t.length;e.forEach(Bd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,kd(n,e[l]);let a=Wu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Bd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yn=class i extends Ot{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*f-o;for(let _=0;_<c;_++){let v=_*u-s;m.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),S=x+1+c*p;d.push(_,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fo=class i extends Ot{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new q,m=new jt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,_=x,v=x+n+1,M=x+n+2,S=x+1;a.push(_,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Sr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(zd(r))r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(zd(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Sr(i[e]);for(let r in n)t[r]=n[r]}return t}function zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ux(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Fp={clone:Sr,merge:gn},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=ux(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new q().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cl=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function es(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:s=t,a=2*e-n;break;case zu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:o=t,l=2*n-e;break;case zu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),b=m*m,g=b*m,p=-f*g+2*f*b-f*m,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,_=(-1-d)*g+(1.5+d)*b+.5*m,v=d*g-d*b;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+x*o[c+M]+_*o[l+M]+v*o[u+M];return s}},fl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},dl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends Xi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(r-e),b=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*m;return s}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let b=o[c+m],g=o[l+m],p=d*f+m*2,x=u[p],_=u[p+1],v=t*f+m*2,M=h[v],S=h[v+1],A=px(n,e,x,M,r);s[m]=Dp(A,b,_,S,g)}return s}};function Dp(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function dx(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function px(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Dp(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=dx(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var En=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=es(e,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:es(t.times,Array),values:es(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Nu(t.settings)&&(n.settings={inTangents:es(t.settings.inTangents,Array),outTangents:es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case Uu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Nu(this.settings)&&(Vd(this.settings.inTangents,t),Vd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Eb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===za,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let b=e[u+m];if(b!==e[f+m]||b!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Nu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Vd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Ja;var Yi=class extends En{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Zs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};ml.prototype.ValueTypeName="color";var gl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};gl.prototype.ValueTypeName="number";var bl=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(s,0,o,c-a,o,c,l);return s}},po=class extends En{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends En{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Zs;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends En{constructor(t,e,n,r){super(t,e,n,r)}};xl.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Gd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Gd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var vl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Op=new vl,gs=class{constructor(t){this.manager=t!==void 0?t:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=new WeakMap,yl=class extends gs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Ga.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=ns.get(o);u===void 0&&(u=[],ns.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=as("img");function l(){h(),e&&e(this);let u=ns.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ns.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Ga.remove(`image:${t}`);let f=ns.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}ns.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ga.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var yr=class extends gs{constructor(t){super(t)}load(t,e,n,r){let s=new dn,o=new yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ba=new q,ka=new oi,ni=new q,mo=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,ka,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ba,ka,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new q,Hd=new jt,Wd=new jt,Qe=class extends mo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(du*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,Wd),e.subVectors(Wd,Hd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(du*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dn=class extends mo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var is=-90,rs=1,_l=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(is,rs,t,e);r.layers=this.layers,this.add(r);let s=new Qe(is,rs,t,e);s.layers=this.layers,this.add(s);let o=new Qe(is,rs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(is,rs,t,e);a.layers=this.layers,this.add(a);let l=new Qe(is,rs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(is,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ml=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xh="\\[\\]\\.:\\/",mx=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",gx="[^"+xh.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",vh),xx=/(WCOD+)?/.source.replace("WCOD",gx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),_x=new RegExp("^"+bx+xx+vx+yx+"$"),Mx=["material","materials","bones","map"],Xu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){let e=_x.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Mx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Xu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cT=new Float32Array(1);var Xd=new Ae,go=class{constructor(t,e,n=0,r=1/0){this.ray=new xr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(t,e=!0,n=[]){return Yu(t,this,n,e),n.sort(Yd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Yu(t[r],this,n,e);return n.sort(Yd),n}};function Yd(i,t){return i.distance-t.distance}function Yu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Yu(s[o],t,e,!0)}}var Th=class Th{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Th.prototype.isMatrix2=!0;var qu=Th;function yh(i,t,e,n){let r=Sx(n);switch(e){case uh:return i*t;case fh:return i*t/r.components*r.byteLength;case Ll:return i*t/r.components*r.byteLength;case Ji:return i*t*2/r.components*r.byteLength;case Fl:return i*t*2/r.components*r.byteLength;case hh:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case Dl:return i*t*4/r.components*r.byteLength;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Bl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case kl:case zl:case Gl:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:case Eo:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sx(i){switch(i){case Cn:case oh:return{byteLength:1,components:1};case xs:case ah:case Kn:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case $n:case Cl:case Zn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function i0(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Tx(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,zx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zx=`#define PI 3.141592653589793
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
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,wv=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Tv=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zv=`#ifdef USE_NORMALMAP
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
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,D1=`#define DISTANCE
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
}`,O1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,k1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,G1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,W1=`#define MATCAP
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
}`,X1=`#define MATCAP
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
}`,Y1=`#define NORMAL
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
}`,q1=`#define NORMAL
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
}`,$1=`#define PHONG
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
}`,Z1=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,K1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,j1=`#define TOON
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
}`,Q1=`#define TOON
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
}`,ty=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,ry=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Ax,alphahash_pars_fragment:Ex,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Px,alphatest_pars_fragment:Ix,aomap_fragment:Lx,aomap_pars_fragment:Fx,batching_pars_vertex:Dx,batching_vertex:Ox,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:Bx,iridescence_fragment:kx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:Yx,color_pars_vertex:qx,color_vertex:$x,common:Zx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:jx,displacementmap_vertex:Qx,emissivemap_fragment:tv,emissivemap_pars_fragment:ev,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:rv,envmap_common_pars_fragment:sv,envmap_pars_fragment:ov,envmap_pars_vertex:av,envmap_physical_pars_fragment:xv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:bv,lights_toon_fragment:vv,lights_toon_pars_fragment:yv,lights_phong_fragment:_v,lights_phong_pars_fragment:Mv,lights_physical_fragment:Sv,lights_physical_pars_fragment:wv,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:Ev,lightprobes_pars_fragment:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Lv,map_fragment:Fv,map_pars_fragment:Dv,map_particle_fragment:Ov,map_particle_pars_fragment:Nv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Bv,morphinstance_vertex:kv,morphcolor_vertex:zv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Gv,morphtarget_vertex:Hv,normal_fragment_begin:Wv,normal_fragment_maps:Xv,normal_pars_fragment:Yv,normal_pars_vertex:qv,normal_vertex:$v,normalmap_pars_fragment:Zv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Qv,opaque_fragment:t1,packing:e1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:h1,skinbase_vertex:f1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:b1,tonemapping_fragment:x1,tonemapping_pars_fragment:v1,transmission_fragment:y1,transmission_pars_fragment:_1,uv_pars_fragment:M1,uv_pars_vertex:S1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:E1,backgroundCube_vert:R1,backgroundCube_frag:C1,cube_vert:P1,cube_frag:I1,depth_vert:L1,depth_frag:F1,distance_vert:D1,distance_frag:O1,equirect_vert:N1,equirect_frag:U1,linedashed_vert:B1,linedashed_frag:k1,meshbasic_vert:z1,meshbasic_frag:V1,meshlambert_vert:G1,meshlambert_frag:H1,meshmatcap_vert:W1,meshmatcap_frag:X1,meshnormal_vert:Y1,meshnormal_frag:q1,meshphong_vert:$1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:J1,meshtoon_vert:j1,meshtoon_frag:Q1,points_vert:ty,points_frag:ey,shadow_vert:ny,shadow_frag:iy,sprite_vert:ry,sprite_frag:sy},Rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},fi={basic:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:gn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:gn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:gn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:gn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:gn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:gn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:gn([Rt.common,Rt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:gn([Rt.lights,Rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};fi.physical={uniforms:gn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var dc={r:0,b:0,g:0},oy=new Ae,r0=new ee;r0.set(-1,0,0,0,1,0,0,0,1);function ay(i,t,e,n,r,s){let o=new tt(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function m(x){let _=!1,v=d(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===_o)?(c===void 0&&(c=new Et(new ps(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Sr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(r0),c.material.toneMapped=fe.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Et(new Yn(2,2),new mn({name:"BackgroundMaterial",uniforms:Sr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=fe.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(dc,bh(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:b,dispose:p}}function ly(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(w,C,L,I,O){let T=!1,P=u(w,I,L,C);s!==P&&(s=P,c(s.object)),T=d(w,I,L,O),T&&m(w,I,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,v(w,C,L,I),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,C,L,I){let O=I.wireframe===!0,T=n[C.id];T===void 0&&(T={},n[C.id]=T);let P=w.isInstancedMesh===!0?w.id:0,N=T[P];N===void 0&&(N={},T[P]=N);let F=N[L.id];F===void 0&&(F={},N[L.id]=F);let B=F[O];return B===void 0&&(B=f(l()),F[O]=B),B}function f(w){let C=[],L=[],I=[];for(let O=0;O<e;O++)C[O]=0,L[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:I,object:w,attributes:{},index:null}}function d(w,C,L,I){let O=s.attributes,T=C.attributes,P=0,N=L.getAttributes();for(let F in N)if(N[F].location>=0){let z=O[F],G=T[F];if(G===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;P++}return s.attributesNum!==P||s.index!==I}function m(w,C,L,I){let O={},T=C.attributes,P=0,N=L.getAttributes();for(let F in N)if(N[F].location>=0){let z=T[F];z===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),O[F]=G,P++}s.attributes=O,s.attributesNum=P,s.index=I}function b(){let w=s.newAttributes;for(let C=0,L=w.length;C<L;C++)w[C]=0}function g(w){p(w,0)}function p(w,C){let L=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;L[w]=1,I[w]===0&&(i.enableVertexAttribArray(w),I[w]=1),O[w]!==C&&(i.vertexAttribDivisor(w,C),O[w]=C)}function x(){let w=s.newAttributes,C=s.enabledAttributes;for(let L=0,I=C.length;L<I;L++)C[L]!==w[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function _(w,C,L,I,O,T,P){P===!0?i.vertexAttribIPointer(w,C,L,O,T):i.vertexAttribPointer(w,C,L,I,O,T)}function v(w,C,L,I){b();let O=I.attributes,T=L.getAttributes(),P=C.defaultAttributeValues;for(let N in T){let F=T[N];if(F.location>=0){let B=O[N];if(B===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),B!==void 0){let z=B.normalized,G=B.itemSize,V=t.get(B);if(V===void 0)continue;let W=V.buffer,K=V.type,nt=V.bytesPerElement,X=K===i.INT||K===i.UNSIGNED_INT||B.gpuType===Cl;if(B.isInterleavedBufferAttribute){let Y=B.data,et=Y.stride,Z=B.offset;if(Y.isInstancedInterleavedBuffer){for(let J=0;J<F.locationSize;J++)p(F.location+J,Y.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<F.locationSize;J++)g(F.location+J);i.bindBuffer(i.ARRAY_BUFFER,W);for(let J=0;J<F.locationSize;J++)_(F.location+J,G/F.locationSize,K,z,et*nt,(Z+G/F.locationSize*J)*nt,X)}else{if(B.isInstancedBufferAttribute){for(let Y=0;Y<F.locationSize;Y++)p(F.location+Y,B.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Y=0;Y<F.locationSize;Y++)g(F.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<F.locationSize;Y++)_(F.location+Y,G/F.locationSize,K,z,G*nt,G/F.locationSize*Y*nt,X)}}else if(P!==void 0){let z=P[N];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(F.location,z);break;case 3:i.vertexAttrib3fv(F.location,z);break;case 4:i.vertexAttrib4fv(F.location,z);break;default:i.vertexAttrib1fv(F.location,z)}}}}x()}function M(){R();for(let w in n){let C=n[w];for(let L in C){let I=C[L];for(let O in I){let T=I[O];for(let P in T)h(T[P].object),delete T[P];delete I[O]}}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let C=n[w.id];for(let L in C){let I=C[L];for(let O in I){let T=I[O];for(let P in T)h(T[P].object),delete T[P];delete I[O]}}delete n[w.id]}function A(w){for(let C in n){let L=n[C];for(let I in L){let O=L[I];if(O[w.id]===void 0)continue;let T=O[w.id];for(let P in T)h(T[P].object),delete T[P];delete O[w.id]}}}function y(w){for(let C in n){let L=n[C],I=w.isInstancedMesh===!0?w.id:0,O=L[I];if(O!==void 0){for(let T in O){let P=O[T];for(let N in P)h(P[N].object),delete P[N];delete O[T]}delete L[I],Object.keys(L).length===0&&delete n[C]}}}function R(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function cy(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function uy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Cn&&A!==Zn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:S}}function hy(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Wn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{let x=s?0:n,_=x*4,v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==b;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var _s=4,fy=6,dy=20,py=256,Co=new Dn,Np=new tt,Ah=null,Eh=0,Rh=0,Ch=!1,my=new q,wr=new q,mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=my}=s;Ah=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Eh,Rh),this._renderer.xr.enabled=Ch,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:Ks,depthBuffer:!1},r=Up(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gy(s)),this._blurMaterial=xy(s,t,e),this._ggxMaterial=by(s,t,e)}return r}_compileMaterial(t){let e=new Et(new Ot,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Np),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new ps,new Yt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Np),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let M=this._cubeSize;ys(r,v*M,_>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===$i||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-_s?n-m+_s:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,ys(s,g,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,ys(t,g,p,3*b,2*b),r.setRenderTarget(t),r.render(a,Co)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-_s?r-this._lodMax+_s:0),f=4*(this._cubeSize-h);ys(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Co)}};function gy(i){let t=[],e=[],n=i,r=i-_s+1+fy;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,_=p>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;p===0?wr.set(1,A,S):p===1?wr.set(-S,1,-A):p===2?wr.set(-S,A,1):p===3?wr.set(-1,A,-S):p===4?wr.set(-S,-1,A):wr.set(S,A,-1),wr.toArray(b,(p*f+M)*d)}}let g=new Ot;g.setAttribute("position",new tn(m,d)),g.setAttribute("outputDirection",new tn(b,d)),e.push(new Et(g,null)),n>_s&&n--}return{lodMeshes:e,sizeLods:t}}function Up(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function by(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function xy(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Bp(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function kp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new so(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:On});s.uniforms.tEquirect.value=e;let o=new Et(r,s),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=Xe),new _l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function vy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Al||d===El)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new gc(m.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Al||d===El,b=d===$i||d===Mr;if(m||b){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new mc(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return m&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new mc(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Al?f.mapping=$i:d===El&&(f.mapping=Mr),f}function l(f){let d=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function yy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function _y(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],S=x[_+1],A=x[_+2];f.push(M,S,S,A,A,M)}}else{let x=m.array;b=m.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,S=_+1,A=_+2;f.push(M,S,S,A,A,M)}}let g=new(m.count>=65535?br:eo)(f,1);g.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function My(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function wy(i,t,e){let n=new WeakMap,r=new ke;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*u),A=new to(S,v,M,u);A.type=Zn,A.needsUpdate=!0;let y=_*4;for(let E=0;E<u;E++){let w=g[E],C=p[E],L=x[E],I=v*M*4*E;for(let O=0;O<w.count;O++){let T=O*y;d===!0&&(r.fromBufferAttribute(w,O),S[I+T+0]=r.x,S[I+T+1]=r.y,S[I+T+2]=r.z,S[I+T+3]=0),m===!0&&(r.fromBufferAttribute(C,O),S[I+T+4]=r.x,S[I+T+5]=r.y,S[I+T+6]=r.z,S[I+T+7]=0),b===!0&&(r.fromBufferAttribute(L,O),S[I+T+8]=r.x,S[I+T+9]=r.y,S[I+T+10]=r.z,S[I+T+11]=L.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new jt(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ty(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ay={[ju]:"LINEAR_TONE_MAPPING",[Qu]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[eh]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function Ey(i,t,e,n,r,s){let o=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Et(c,h),f=new Dn(-1,1,1,-1,0,1),d=null,m=null,b=!1,g,p=null,x=[],_=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<x.length;S++){let A=x[S];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=o.width,S=o.height;x.length>0&&a===null&&(a=new Ye(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let y=x[A];y.setSize&&y.setSize(M,S)}},this.begin=function(v,M){if(b||v.toneMapping===qn&&x.length===0)return!1;if(p=M,M!==null){let S=M.width,A=M.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return _===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let S=o,A=a;for(let y=0;y<x.length;y++){let R=x[y];R.enabled!==!1&&(R.render(v,A,S,M),R.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},fe.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let y=Ay[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(u,f),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var s0=new dn,Lh=new ci(1,1),o0=new to,a0=new el,l0=new so,zp=[],Vp=[],Gp=new Float32Array(16),Hp=new Float32Array(9),Wp=new Float32Array(4);function Ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=zp[r];if(s===void 0&&(s=new Float32Array(r),zp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xc(i,t){let e=Vp[t];e===void 0&&(e=new Int32Array(t),Vp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Ly(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Wp.set(n),i.uniformMatrix2fv(this.addr,!1,Wp),Ke(e,n)}}function Fy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Hp.set(n),i.uniformMatrix3fv(this.addr,!1,Hp),Ke(e,n)}}function Dy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Gp.set(n),i.uniformMatrix4fv(this.addr,!1,Gp),Ke(e,n)}}function Oy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Hy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=e.isReversedDepthBuffer()?fc:hc,s=Lh):s=s0,e.setTexture2D(t||s,r)}function Wy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||a0,r)}function Xy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||l0,r)}function Yy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||o0,r)}function qy(i){switch(i){case 5126:return Ry;case 35664:return Cy;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Fy;case 35676:return Dy;case 5124:case 35670:return Oy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Vy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}function $y(i,t){i.uniform1fv(this.addr,t)}function Zy(i,t){let e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Ky(i,t){let e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Jy(i,t){let e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function jy(i,t){let e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qy(i,t){let e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t_(i,t){let e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e_(i,t){i.uniform1iv(this.addr,t)}function n_(i,t){i.uniform2iv(this.addr,t)}function i_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function s_(i,t){i.uniform1uiv(this.addr,t)}function o_(i,t){i.uniform2uiv(this.addr,t)}function a_(i,t){i.uniform3uiv(this.addr,t)}function l_(i,t){i.uniform4uiv(this.addr,t)}function c_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Lh:o=s0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function u_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||a0,s[o])}function h_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||l0,s[o])}function f_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||o0,s[o])}function d_(i){switch(i){case 5126:return $y;case 35664:return Zy;case 35665:return Ky;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return f_}}var Fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qy(e.type)}},Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}},Oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function Xp(i,t){i.seq.push(t),i.map[t.id]=t}function p_(i,t,e){let n=i.name,r=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),o=Ph.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xp(e,c===void 0?new Fh(a,i,t):new Dh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Oh(a),Xp(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);p_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Yp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var m_=37297,g_=0;function b_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qp=new ee;function x_(i){fe._getMatrix(qp,fe.workingColorSpace,i);let t=`mat3( ${qp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $p(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+b_(i.getShaderSource(t),a)}else return s}function v_(i,t){let e=x_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var y_={[ju]:"Linear",[Qu]:"Reinhard",[th]:"Cineon",[eh]:"ACESFilmic",[ih]:"AgX",[rh]:"Neutral",[nh]:"Custom"};function __(i,t){let e=y_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pc=new q;function M_(){fe.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function w_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function Zp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(A_,R_)}var E_=new Map;function R_(i,t){let e=ce[t];if(e===void 0){let n=E_.get(t);if(n!==void 0)e=ce[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nh(e)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(i){return i.replace(C_,P_)}function P_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var I_={[bo]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function L_(i){return I_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[$i]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function D_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O_={[Mr]:"ENVMAP_MODE_REFRACTION"};function N_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U_={[Ju]:"ENVMAP_BLENDING_MULTIPLY",[hp]:"ENVMAP_BLENDING_MIX",[fp]:"ENVMAP_BLENDING_ADD"};function B_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":U_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=L_(e),c=D_(e),h=N_(e),u=B_(e),f=k_(e),d=S_(e),m=w_(s),b=r.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(g=[jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==qn?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Nh(o),o=Zp(o,e),o=Kp(o,e),a=Nh(a),a=Zp(a,e),a=Kp(a,e),o=Jp(o),a=Jp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+g+o,v=x+p+a,M=Yp(r,r.VERTEX_SHADER,_),S=Yp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,S),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(w){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(b)||"",L=r.getShaderInfoLog(M)||"",I=r.getShaderInfoLog(S)||"",O=C.trim(),T=L.trim(),P=I.trim(),N=!0,F=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,S);else{let B=$p(r,M,"vertex"),z=$p(r,S,"fragment");Kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+B+`
`+z)}else O!==""?Zt("WebGLProgram: Program Info Log:",O):(T===""||P==="")&&(F=!1);F&&(w.diagnostics={runnable:N,programLog:O,vertexShader:{log:T,prefix:g},fragmentShader:{log:P,prefix:p}})}r.deleteShader(M),r.deleteShader(S),y=new Ms(r,b),R=T_(r,b)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,m_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var V_=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bh(t),e.set(t,n)),n}},Bh=class{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}};function G_(i){return i===Ji||i===Eo||i===Ro}function H_(i,t,e,n,r,s){let o=new us,a=new Uh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,E,w,C,L){let I=w.fog,O=C.geometry,T=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?w.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=t.get(y.envMap||T,P),F=N&&N.mapping===_o?N.image.height:null,B=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,G=z!==void 0?z.length:0,V=0;O.morphAttributes.position!==void 0&&(V=1),O.morphAttributes.normal!==void 0&&(V=2),O.morphAttributes.color!==void 0&&(V=3);let W,K,nt,X;if(B){let Re=fi[B];W=Re.vertexShader,K=Re.fragmentShader}else{W=y.vertexShader,K=y.fragmentShader;let Re=a.getVertexShaderStage(y),ve=a.getFragmentShaderStage(y);a.update(y,Re,ve),nt=Re.id,X=ve.id}let Y=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),Z=C.isInstancedMesh===!0,J=C.isBatchedMesh===!0,rt=!!y.map,ft=!!y.matcap,ht=!!N,at=!!y.aoMap,bt=!!y.lightMap,gt=!!y.bumpMap&&y.wireframe===!1,Nt=!!y.normalMap,ge=!!y.displacementMap,be=!!y.emissiveMap,pe=!!y.metalnessMap,se=!!y.roughnessMap,$=y.anisotropy>0,De=y.clearcoat>0,he=y.dispersion>0,H=y.retroreflectivity>0,D=y.iridescence>0,it=y.sheen>0,lt=y.transmission>0,ut=$&&!!y.anisotropyMap,yt=De&&!!y.clearcoatMap,_t=De&&!!y.clearcoatNormalMap,dt=De&&!!y.clearcoatRoughnessMap,mt=D&&!!y.iridescenceMap,Mt=D&&!!y.iridescenceThicknessMap,Ht=it&&!!y.sheenColorMap,At=it&&!!y.sheenRoughnessMap,St=!!y.specularMap,Wt=!!y.specularColorMap,$t=!!y.specularIntensityMap,ae=lt&&!!y.transmissionMap,Q=lt&&!!y.thicknessMap,wt=!!y.gradientMap,pt=!!y.alphaMap,Tt=y.alphaTest>0,It=!!y.alphaHash,vt=!!y.extensions,Xt=qn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Vt={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:K,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:J,batchingColor:J&&C._colorsTexture!==null,instancing:Z,instancingColor:Z&&C.instanceColor!==null,instancingMorph:Z&&C.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:ft,envMap:ht,envMapMode:ht&&N.mapping,envMapCubeUVHeight:F,aoMap:at,lightMap:bt,bumpMap:gt,normalMap:Nt,displacementMap:ge,emissiveMap:be,normalMapObjectSpace:Nt&&y.normalMapType===mp,normalMapTangentSpace:Nt&&y.normalMapType===dh,packedNormalMap:Nt&&y.normalMapType===dh&&G_(y.normalMap.format),metalnessMap:pe,roughnessMap:se,anisotropy:$,anisotropyMap:ut,clearcoat:De,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:dt,dispersion:he,retroreflection:H,iridescence:D,iridescenceMap:mt,iridescenceThicknessMap:Mt,sheen:it,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:St,specularColorMap:Wt,specularIntensityMap:$t,transmission:lt,transmissionMap:ae,thicknessMap:Q,gradientMap:wt,opaque:y.transparent===!1&&y.blending===Rn&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:Tt,alphaHash:It,combine:y.combine,mapUv:rt&&m(y.map.channel),aoMapUv:at&&m(y.aoMap.channel),lightMapUv:bt&&m(y.lightMap.channel),bumpMapUv:gt&&m(y.bumpMap.channel),normalMapUv:Nt&&m(y.normalMap.channel),displacementMapUv:ge&&m(y.displacementMap.channel),emissiveMapUv:be&&m(y.emissiveMap.channel),metalnessMapUv:pe&&m(y.metalnessMap.channel),roughnessMapUv:se&&m(y.roughnessMap.channel),anisotropyMapUv:ut&&m(y.anisotropyMap.channel),clearcoatMapUv:yt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(y.sheenRoughnessMap.channel),specularMapUv:St&&m(y.specularMap.channel),specularColorMapUv:Wt&&m(y.specularColorMap.channel),specularIntensityMapUv:$t&&m(y.specularIntensityMap.channel),transmissionMapUv:ae&&m(y.transmissionMap.channel),thicknessMapUv:Q&&m(y.thicknessMap.channel),alphaMapUv:pt&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Nt||$),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(rt||pt),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&Nt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:et,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ne,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||J)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)R.push(E),R.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(p(R,y),x(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function p(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let R=d[y.type],E;if(R){let w=fi[R];E=Fp.clone(w.uniforms)}else E=y.uniforms;return E}function v(y,R){let E=h.get(R);return E!==void 0?++E.usedTimes:(E=new z_(i,R,y,r),c.push(E),h.set(R,E)),E}function M(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function t0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,b,g,p){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:p},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function l(f,d,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,m,b,g,p);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):e.push(_)}function c(f,d,m,b,g,p){let x=a(f,d,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||X_),n.length>1&&n.sort(d||Qp),r.length>1&&r.sort(d||Qp)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function Y_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new t0,i.set(n,[o])):r>=s.length?(o=new t0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new tt};break;case"SpotLight":e={position:new q,direction:new q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function $_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Z_=0;function K_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function J_(i){let t=new q_,e=$_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let r=new q,s=new Ae,o=new Ae;function a(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,x=0,_=0,v=0,M=0,S=0,A=0,y=0,R=0,E=0;c.sort(K_);for(let C=0,L=c.length;C<L;C++){let I=c[C],O=I.color,T=I.intensity,P=I.distance,N=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ji?N=I.shadow.map.texture:N=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*T,u+=O.g*T,f+=O.b*T;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],T);E++}else if(I.isSunLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let B=I.shadow,z=e.get(I);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=z,n.sunShadowMap[m]=N;let G=B.getViewportCount();for(let V=0;V<G;V++)n.sunShadowMatrix[b+V]=B.getMatrix(V),n.sunShadowCascade[b+V]=B._cascadeData[V];b+=G,m++}n.sun[d]=F,d++}else if(I.isDirectionalLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let B=I.shadow,z=e.get(I);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=I.shadow.matrix,M++}n.directional[g]=F,g++}else if(I.isSpotLight){let F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(O).multiplyScalar(T),F.distance=P,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[x]=F;let B=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,B.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=B.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=N,A++}x++}else if(I.isRectAreaLight){let F=t.get(I);F.color.copy(O).multiplyScalar(T),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[_]=F,_++}else if(I.isPointLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let B=I.shadow,z=e.get(I);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=F,p++}else if(I.isHemisphereLight){let F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(T),F.groundColor.copy(I.groundColor).multiplyScalar(T),n.hemi[v]=F,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.sunLength!==d||w.directionalLength!==g||w.pointLength!==p||w.spotLength!==x||w.rectAreaLength!==_||w.hemiLength!==v||w.numSunShadows!==m||w.numDirectionalShadows!==M||w.numPointShadows!==S||w.numSpotShadows!==A||w.numSpotMaps!==y||w.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,w.sunLength=d,w.directionalLength=g,w.pointLength=p,w.spotLength=x,w.rectAreaLength=_,w.hemiLength=v,w.numSunShadows=m,w.numDirectionalShadows=M,w.numPointShadows=S,w.numSpotShadows=A,w.numSpotMaps=y,w.numLightProbes=E,n.version=Z_++)}function l(c,h){let u=0,f=0,d=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function e0(i){let t=new J_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function j_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new e0(i),t.set(r,[a])):s>=o.length?(a=new e0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
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
}`,eM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],nM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],n0=new Ae,Po=new q,Ih=new q;function iM(i,t,e){let n=new ro,r=new jt,s=new jt,o=new ke,a=new cl,l=new ul,c={},h=e.maxTextureSize,u={[ui]:an,[an]:ui,[ne]:ne},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Q_,fragmentShader:tM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let p=this.type;this.render=function(S,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Zd&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);let R=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),C=i.state;C.setBlending(On),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=p!==this.type;L&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=S.length;I<O;I++){let T=S[I],P=T.shadow;if(P===void 0){Zt("WebGLShadowMap:",T,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let N=P.getFrameExtents();r.multiply(N),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/N.x),r.x=s.x*N.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/N.y),r.y=s.y*N.y,P.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=F,P.map===null||L===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===bs){if(T.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ye(r.x,r.y,{format:Ji,type:Kn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),P.map.texture.name=T.name+".shadowMap",P.map.depthTexture=new ci(r.x,r.y,Zn),P.map.depthTexture.name=T.name+".shadowMapDepth",P.map.depthTexture.format=ri,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=en,P.map.depthTexture.magFilter=en}else T.isPointLight?(P.map=new gc(r.x),P.map.depthTexture=new al(r.x,$n)):(P.map=new Ye(r.x,r.y),P.map.depthTexture=new ci(r.x,r.y,$n)),P.map.depthTexture.name=T.name+".shadowMap",P.map.depthTexture.format=ri,this.type===bo?(P.map.depthTexture.compareFunction=F?fc:hc,P.map.depthTexture.minFilter=Xe,P.map.depthTexture.magFilter=Xe):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=en,P.map.depthTexture.magFilter=en);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==r.x||P.map.height!==r.y)&&P.map.setSize(r.x,r.y);let B=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();T.isPointLight!==!0&&P.updateMatrices(T,y);for(let z=0;z<B;z++){let G=P.getCamera(z);if(T.isPointLight){let V=P.camera,W=P.matrix,K=T.distance||V.far;K!==V.far&&(V.far=K,V.updateProjectionMatrix()),Po.setFromMatrixPosition(T.matrixWorld),V.position.copy(Po),Ih.copy(V.position),Ih.add(eM[z]),V.up.copy(nM[z]),V.lookAt(Ih),V.updateMatrixWorld(),W.makeTranslation(-Po.x,-Po.y,-Po.z),n0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),P._frustum.setFromProjectionMatrix(n0,V.coordinateSystem,V.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,z),i.clear();else{z===0&&(i.setRenderTarget(P.map),i.clear());let V=P.getViewport(z);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),C.viewport(o)}n=P.getFrustum(z),v(A,y,G,T,this.type)}P.isPointLightShadow!==!0&&this.type===bs&&x(P,y),P.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(R,E,w)};function x(S,A){let y=t.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ye(r.x,r.y,{format:Ji,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,f,b,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,d,b,null)}function _(S,A,y,R){let E=null,w=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)E=w;else if(E=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=E.uuid,L=A.uuid,I=c[C];I===void 0&&(I={},c[C]=I);let O=I[L];O===void 0&&(O=E.clone(),I[L]=O,A.addEventListener("dispose",M)),E=O}if(E.visible=A.visible,E.wireframe=A.wireframe,R===bs?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let C=i.properties.get(E);C.light=y}return E}function v(S,A,y,R,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===bs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let L=t.update(S),I=S.material;if(Array.isArray(I)){let O=L.groups;for(let T=0,P=O.length;T<P;T++){let N=O[T],F=I[N.materialIndex];if(F&&F.visible){let B=_(S,F,R,E);S.onBeforeShadow(i,S,A,y,L,B,N),i.renderBufferDirect(y,null,L,B,S,N),S.onAfterShadow(i,S,A,y,L,B,N)}}}else if(I.visible){let O=_(S,I,R,E);S.onBeforeShadow(i,S,A,y,L,O,null),i.renderBufferDirect(y,null,L,O,S,null),S.onAfterShadow(i,S,A,y,L,O,null)}}let C=S.children;for(let L=0,I=C.length;L<I;L++)v(C[L],A,y,R,E)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let R=c[y],E=S.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function rM(i,t){function e(){let Q=!1,wt=new ke,pt=null,Tt=new ke(0,0,0,0);return{setMask:function(It){pt!==It&&!Q&&(i.colorMask(It,It,It,It),pt=It)},setLocked:function(It){Q=It},setClear:function(It,vt,Xt,Vt,Re){Re===!0&&(It*=Vt,vt*=Vt,Xt*=Vt),wt.set(It,vt,Xt,Vt),Tt.equals(wt)===!1&&(i.clearColor(It,vt,Xt,Vt),Tt.copy(wt))},reset:function(){Q=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let Q=!1,wt=!1,pt=null,Tt=null,It=null;return{setReversed:function(vt){if(wt!==vt){let Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;let Vt=It;It=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(vt){vt?Y(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(vt){pt!==vt&&!Q&&(i.depthMask(vt),pt=vt)},setFunc:function(vt){if(wt&&(vt=Ap[vt]),Tt!==vt){switch(vt){case Ha:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=vt}},setLocked:function(vt){Q=vt},setClear:function(vt){It!==vt&&(It=vt,wt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){Q=!1,pt=null,Tt=null,It=null,wt=!1}}}function r(){let Q=!1,wt=null,pt=null,Tt=null,It=null,vt=null,Xt=null,Vt=null,Re=null;return{setTest:function(ve){Q||(ve?Y(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ve){wt!==ve&&!Q&&(i.stencilMask(ve),wt=ve)},setFunc:function(ve,zn,ti){(pt!==ve||Tt!==zn||It!==ti)&&(i.stencilFunc(ve,zn,ti),pt=ve,Tt=zn,It=ti)},setOp:function(ve,zn,ti){(vt!==ve||Xt!==zn||Vt!==ti)&&(i.stencilOp(ve,zn,ti),vt=ve,Xt=zn,Vt=ti)},setLocked:function(ve){Q=ve},setClear:function(ve){Re!==ve&&(i.clearStencil(ve),Re=ve)},reset:function(){Q=!1,wt=null,pt=null,Tt=null,It=null,vt=null,Xt=null,Vt=null,Re=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,_=null,v=null,M=null,S=null,A=null,y=new tt(0,0,0),R=0,E=!1,w=null,C=null,L=null,I=null,O=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,N=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=N>=2);let B=null,z={},G=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),W=new ke().fromArray(G),K=new ke().fromArray(V);function nt(Q,wt,pt,Tt){let It=new Uint8Array(4),vt=i.createTexture();i.bindTexture(Q,vt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<pt;Xt++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(wt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return vt}let X={};X[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(os),gt(!1),Nt($u),Y(i.CULL_FACE),at(On);function Y(Q){h[Q]!==!0&&(i.enable(Q),h[Q]=!0)}function et(Q){h[Q]!==!1&&(i.disable(Q),h[Q]=!1)}function Z(Q,wt){return f[Q]!==wt?(i.bindFramebuffer(Q,wt),f[Q]=wt,Q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),Q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function J(Q,wt){let pt=m,Tt=!1;if(Q){pt=d.get(wt),pt===void 0&&(pt=[],d.set(wt,pt));let It=Q.textures;if(pt.length!==It.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Xt=It.length;vt<Xt;vt++)pt[vt]=i.COLOR_ATTACHMENT0+vt;pt.length=It.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function rt(Q){return b!==Q?(i.useProgram(Q),b=Q,!0):!1}let ft={[_r]:i.FUNC_ADD,[Kd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};ft[jd]=i.MIN,ft[Qd]=i.MAX;let ht={[Tl]:i.ZERO,[vo]:i.ONE,[tp]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[op]:i.SRC_ALPHA_SATURATE,[rp]:i.DST_COLOR,[np]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[Ku]:i.ONE_MINUS_SRC_ALPHA,[sp]:i.ONE_MINUS_DST_COLOR,[ip]:i.ONE_MINUS_DST_ALPHA,[ap]:i.CONSTANT_COLOR,[lp]:i.ONE_MINUS_CONSTANT_COLOR,[cp]:i.CONSTANT_ALPHA,[up]:i.ONE_MINUS_CONSTANT_ALPHA};function at(Q,wt,pt,Tt,It,vt,Xt,Vt,Re,ve){if(Q===On){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),Q!==wl){if(Q!==p||ve!==E){if((x!==_r||M!==_r)&&(i.blendEquation(i.FUNC_ADD),x=_r,M=_r),ve)switch(Q){case Rn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Se:i.blendFunc(i.ONE,i.ONE);break;case Zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Se:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zu:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",Q);break}_=null,v=null,S=null,A=null,y.set(0,0,0),R=0,p=Q,E=ve}return}It=It||wt,vt=vt||pt,Xt=Xt||Tt,(wt!==x||It!==M)&&(i.blendEquationSeparate(ft[wt],ft[It]),x=wt,M=It),(pt!==_||Tt!==v||vt!==S||Xt!==A)&&(i.blendFuncSeparate(ht[pt],ht[Tt],ht[vt],ht[Xt]),_=pt,v=Tt,S=vt,A=Xt),(Vt.equals(y)===!1||Re!==R)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Re),y.copy(Vt),R=Re),p=Q,E=!1}function bt(Q,wt){Q.side===ne?et(i.CULL_FACE):Y(i.CULL_FACE);let pt=Q.side===an;wt&&(pt=!pt),gt(pt),Q.blending===Rn&&Q.transparent===!1?at(On):at(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),s.setMask(Q.colorWrite);let Tt=Q.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),be(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(Q){w!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),w=Q)}function Nt(Q){Q!==qd?(Y(i.CULL_FACE),Q!==C&&(Q===$u?i.cullFace(i.BACK):Q===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),C=Q}function ge(Q){Q!==L&&(P&&i.lineWidth(Q),L=Q)}function be(Q,wt,pt){Q?(Y(i.POLYGON_OFFSET_FILL),(I!==wt||O!==pt)&&(I=wt,O=pt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,pt))):et(i.POLYGON_OFFSET_FILL)}function pe(Q){Q?Y(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function se(Q){Q===void 0&&(Q=i.TEXTURE0+T-1),B!==Q&&(i.activeTexture(Q),B=Q)}function $(Q,wt,pt){pt===void 0&&(B===null?pt=i.TEXTURE0+T-1:pt=B);let Tt=z[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[pt]=Tt),(Tt.type!==Q||Tt.texture!==wt)&&(B!==pt&&(i.activeTexture(pt),B=pt),i.bindTexture(Q,wt||X[Q]),Tt.type=Q,Tt.texture=wt)}function De(){let Q=z[B];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function D(){try{i.texSubImage2D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function it(){try{i.texSubImage3D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function yt(){try{i.texStorage2D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function _t(){try{i.texStorage3D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function dt(){try{i.texImage2D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function mt(){try{i.texImage3D(...arguments)}catch(Q){Kt("WebGLState:",Q)}}function Mt(Q){return u[Q]!==void 0?u[Q]:i.getParameter(Q)}function Ht(Q,wt){u[Q]!==wt&&(i.pixelStorei(Q,wt),u[Q]=wt)}function At(Q){W.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),W.copy(Q))}function St(Q){K.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),K.copy(Q))}function Wt(Q,wt){let pt=c.get(wt);pt===void 0&&(pt=new WeakMap,c.set(wt,pt));let Tt=pt.get(Q);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,Q.name),pt.set(Q,Tt))}function $t(Q,wt){let Tt=c.get(wt).get(Q);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,Q.__bindingPointIndex),l.set(wt,Tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,z={},f={},d=new WeakMap,m=[],b=null,g=!1,p=null,x=null,_=null,v=null,M=null,S=null,A=null,y=new tt(0,0,0),R=0,E=!1,w=null,C=null,L=null,I=null,O=null,W.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:et,bindFramebuffer:Z,drawBuffers:J,useProgram:rt,setBlending:at,setMaterial:bt,setFlipSided:gt,setCullFace:Nt,setLineWidth:ge,setPolygonOffset:be,setScissorTest:pe,activeTexture:se,bindTexture:$,unbindTexture:De,compressedTexImage2D:he,compressedTexImage3D:H,texImage2D:dt,texImage3D:mt,pixelStorei:Ht,getParameter:Mt,updateUBOMapping:Wt,uniformBlockBinding:$t,texStorage2D:yt,texStorage3D:_t,texSubImage2D:D,texSubImage3D:it,compressedTexSubImage2D:lt,compressedTexSubImage3D:ut,scissor:At,viewport:St,reset:ae}}function sM(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,D){return m?new OffscreenCanvas(H,D):as("canvas")}function g(H,D,it){let lt=1,ut=he(H);if((ut.width>it||ut.height>it)&&(lt=it/Math.max(ut.width,ut.height)),lt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let yt=Math.floor(lt*ut.width),_t=Math.floor(lt*ut.height);f===void 0&&(f=b(yt,_t));let dt=D?b(yt,_t):f;return dt.width=yt,dt.height=_t,dt.getContext("2d").drawImage(H,0,0,yt,_t),Zt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+yt+"x"+_t+")."),dt}else return"data"in H&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),H;return H}function p(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,D,it,lt,ut,yt=!1){if(H!==null){if(i[H]!==void 0)return i[H];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t;lt&&(_t=t.get("EXT_texture_norm16"),_t||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=D;if(D===i.RED&&(it===i.FLOAT&&(dt=i.R32F),it===i.HALF_FLOAT&&(dt=i.R16F),it===i.UNSIGNED_BYTE&&(dt=i.R8),it===i.UNSIGNED_SHORT&&_t&&(dt=_t.R16_EXT),it===i.SHORT&&_t&&(dt=_t.R16_SNORM_EXT)),D===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(dt=i.R8UI),it===i.UNSIGNED_SHORT&&(dt=i.R16UI),it===i.UNSIGNED_INT&&(dt=i.R32UI),it===i.BYTE&&(dt=i.R8I),it===i.SHORT&&(dt=i.R16I),it===i.INT&&(dt=i.R32I)),D===i.RG&&(it===i.FLOAT&&(dt=i.RG32F),it===i.HALF_FLOAT&&(dt=i.RG16F),it===i.UNSIGNED_BYTE&&(dt=i.RG8),it===i.UNSIGNED_SHORT&&_t&&(dt=_t.RG16_EXT),it===i.SHORT&&_t&&(dt=_t.RG16_SNORM_EXT)),D===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(dt=i.RG8UI),it===i.UNSIGNED_SHORT&&(dt=i.RG16UI),it===i.UNSIGNED_INT&&(dt=i.RG32UI),it===i.BYTE&&(dt=i.RG8I),it===i.SHORT&&(dt=i.RG16I),it===i.INT&&(dt=i.RG32I)),D===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),it===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),it===i.UNSIGNED_INT&&(dt=i.RGB32UI),it===i.BYTE&&(dt=i.RGB8I),it===i.SHORT&&(dt=i.RGB16I),it===i.INT&&(dt=i.RGB32I)),D===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),it===i.UNSIGNED_INT&&(dt=i.RGBA32UI),it===i.BYTE&&(dt=i.RGBA8I),it===i.SHORT&&(dt=i.RGBA16I),it===i.INT&&(dt=i.RGBA32I)),D===i.RGB&&(it===i.UNSIGNED_SHORT&&_t&&(dt=_t.RGB16_EXT),it===i.SHORT&&_t&&(dt=_t.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),D===i.RGBA){let mt=yt?Js:fe.getTransfer(ut);it===i.FLOAT&&(dt=i.RGBA32F),it===i.HALF_FLOAT&&(dt=i.RGBA16F),it===i.UNSIGNED_BYTE&&(dt=mt===_e?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&_t&&(dt=_t.RGBA16_EXT),it===i.SHORT&&_t&&(dt=_t.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function M(H,D){let it;return H?D===null||D===$n||D===vs?it=i.DEPTH24_STENCIL8:D===Zn?it=i.DEPTH32F_STENCIL8:D===xs&&(it=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===$n||D===vs?it=i.DEPTH_COMPONENT24:D===Zn?it=i.DEPTH_COMPONENT32F:D===xs&&(it=i.DEPTH_COMPONENT16),it}function S(H,D){return p(H)===!0||H.isFramebufferTexture&&H.minFilter!==en&&H.minFilter!==Xe?Math.log2(Math.max(D.width,D.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?D.mipmaps.length:1}function A(H){let D=H.target;D.removeEventListener("dispose",A),R(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function y(H){let D=H.target;D.removeEventListener("dispose",y),w(D)}function R(H){let D=n.get(H);if(D.__webglInit===void 0)return;let it=H.source,lt=d.get(it);if(lt){let ut=lt[D.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&E(H),Object.keys(lt).length===0&&d.delete(it)}n.remove(H)}function E(H){let D=n.get(H);i.deleteTexture(D.__webglTexture);let it=H.source,lt=d.get(it);delete lt[D.__cacheKey],o.memory.textures--}function w(H){let D=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(D.__webglFramebuffer[lt]))for(let ut=0;ut<D.__webglFramebuffer[lt].length;ut++)i.deleteFramebuffer(D.__webglFramebuffer[lt][ut]);else i.deleteFramebuffer(D.__webglFramebuffer[lt]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[lt])}else{if(Array.isArray(D.__webglFramebuffer))for(let lt=0;lt<D.__webglFramebuffer.length;lt++)i.deleteFramebuffer(D.__webglFramebuffer[lt]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let lt=0;lt<D.__webglColorRenderbuffer.length;lt++)D.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[lt]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let it=H.textures;for(let lt=0,ut=it.length;lt<ut;lt++){let yt=n.get(it[lt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(it[lt])}n.remove(H)}let C=0;function L(){C=0}function I(){return C}function O(H){C=H}function T(){let H=C;return H>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,H}function P(H){let D=[];return D.push(H.wrapS),D.push(H.wrapT),D.push(H.wrapR||0),D.push(H.magFilter),D.push(H.minFilter),D.push(H.anisotropy),D.push(H.internalFormat),D.push(H.format),D.push(H.type),D.push(H.generateMipmaps),D.push(H.premultiplyAlpha),D.push(H.flipY),D.push(H.unpackAlignment),D.push(H.colorSpace),D.join()}function N(H,D){let it=n.get(H);if(H.isVideoTexture&&$(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&it.__version!==H.version){let lt=H.image;if(lt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(it,H,D);return}}else H.isExternalTexture&&(it.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+D)}function F(H,D){let it=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&it.__version!==H.version){et(it,H,D);return}else H.isExternalTexture&&(it.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+D)}function B(H,D){let it=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&it.__version!==H.version){et(it,H,D);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+D)}function z(H,D){let it=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&it.__version!==H.version){Z(it,H,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+D)}let G={[gr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},V={[en]:i.NEAREST,[dp]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},W={[bp]:i.NEVER,[Mp]:i.ALWAYS,[xp]:i.LESS,[hc]:i.LEQUAL,[vp]:i.EQUAL,[fc]:i.GEQUAL,[yp]:i.GREATER,[_p]:i.NOTEQUAL};function K(H,D){if(D.type===Zn&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Xe||D.magFilter===Rl||D.magFilter===Mo||D.magFilter===Zi||D.minFilter===Xe||D.minFilter===Rl||D.minFilter===Mo||D.minFilter===Zi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,G[D.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,G[D.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,G[D.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,V[D.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,V[D.minFilter]),D.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,W[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===en||D.minFilter!==Mo&&D.minFilter!==Zi||D.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function nt(H,D){let it=!1;H.__webglInit===void 0&&(H.__webglInit=!0,D.addEventListener("dispose",A));let lt=D.source,ut=d.get(lt);ut===void 0&&(ut={},d.set(lt,ut));let yt=P(D);if(yt!==H.__cacheKey){ut[yt]===void 0&&(ut[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,it=!0),ut[yt].usedTimes++;let _t=ut[H.__cacheKey];_t!==void 0&&(ut[H.__cacheKey].usedTimes--,_t.usedTimes===0&&E(D)),H.__cacheKey=yt,H.__webglTexture=ut[yt].texture}return it}function X(H,D,it){return Math.floor(Math.floor(H/it)/D)}function Y(H,D,it,lt){let yt=H.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,it,lt,D.data);else{yt.sort((Ht,At)=>Ht.start-At.start);let _t=0;for(let Ht=1;Ht<yt.length;Ht++){let At=yt[_t],St=yt[Ht],Wt=At.start+At.count,$t=X(St.start,D.width,4),ae=X(At.start,D.width,4);St.start<=Wt+1&&$t===ae&&X(St.start+St.count-1,D.width,4)===$t?At.count=Math.max(At.count,St.start+St.count-At.start):(++_t,yt[_t]=St)}yt.length=_t+1;let dt=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,D.width);for(let Ht=0,At=yt.length;Ht<At;Ht++){let St=yt[Ht],Wt=Math.floor(St.start/4),$t=Math.ceil(St.count/4),ae=Wt%D.width,Q=Math.floor(Wt/D.width),wt=$t,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,ae,Q,wt,pt,it,lt,D.data)}H.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function et(H,D,it){let lt=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(lt=i.TEXTURE_3D);let ut=nt(H,D),yt=D.source;e.bindTexture(lt,H.__webglTexture,i.TEXTURE0+it);let _t=n.get(yt);if(yt.version!==_t.__version||ut===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let pt=fe.getPrimaries(fe.workingColorSpace),Tt=D.colorSpace===Ai?null:fe.getPrimaries(D.colorSpace),It=D.colorSpace===Ai||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment);let mt=g(D.image,!1,r.maxTextureSize);mt=De(D,mt);let Mt=s.convert(D.format,D.colorSpace),Ht=s.convert(D.type),At=v(D.internalFormat,Mt,Ht,D.normalized,D.colorSpace,D.isVideoTexture);K(lt,D);let St,Wt=D.mipmaps,$t=D.isVideoTexture!==!0,ae=_t.__version===void 0||ut===!0,Q=yt.dataReady,wt=S(D,mt);if(D.isDepthTexture)At=M(D.format===Ki,D.type),ae&&($t?e.texStorage2D(i.TEXTURE_2D,1,At,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,Mt,Ht,null));else if(D.isDataTexture)if(Wt.length>0){$t&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,Wt[0].width,Wt[0].height);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],$t?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,Mt,Ht,St.data);D.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,mt.width,mt.height),Q&&Y(D,mt,Mt,Ht)):e.texImage2D(i.TEXTURE_2D,0,At,mt.width,mt.height,0,Mt,Ht,mt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Wt[0].width,Wt[0].height,mt.depth);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)if(St=Wt[pt],D.format!==Nn)if(Mt!==null)if($t){if(Q)if(D.layerUpdates.size>0){let It=yh(St.width,St.height,D.format,D.type);for(let vt of D.layerUpdates){let Xt=St.data.subarray(vt*It/St.data.BYTES_PER_ELEMENT,(vt+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,vt,St.width,St.height,1,Mt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,At,St.width,St.height,mt.depth,0,St.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,Ht,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,At,St.width,St.height,mt.depth,0,Mt,Ht,St.data);D.layerUpdates.size>0&&D.clearLayerUpdates()}else{$t&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,Wt[0].width,Wt[0].height);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],D.format!==Nn?Mt!==null?$t?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,St.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,pt,At,St.width,St.height,0,Mt,Ht,St.data)}else if(D.isDataArrayTexture)if($t){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,mt.width,mt.height,mt.depth),Q)if(D.layerUpdates.size>0){let pt=yh(mt.width,mt.height,D.format,D.type);for(let Tt of D.layerUpdates){let It=mt.data.subarray(Tt*pt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*pt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,Mt,Ht,It)}D.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Ht,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,mt.width,mt.height,mt.depth,0,Mt,Ht,mt.data);else if(D.isData3DTexture)$t?(ae&&e.texStorage3D(i.TEXTURE_3D,wt,At,mt.width,mt.height,mt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Ht,mt.data)):e.texImage3D(i.TEXTURE_3D,0,At,mt.width,mt.height,mt.depth,0,Mt,Ht,mt.data);else if(D.isFramebufferTexture){if(ae)if($t)e.texStorage2D(i.TEXTURE_2D,wt,At,mt.width,mt.height);else{let pt=mt.width,Tt=mt.height;for(let It=0;It<wt;It++)e.texImage2D(i.TEXTURE_2D,It,At,pt,Tt,0,Mt,Ht,null),pt>>=1,Tt>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),mt.parentNode!==pt){pt.appendChild(mt),u.add(D),pt.onpaint=Tt=>{let It=Tt.changedElements;for(let vt of u)It.includes(vt.image)&&(vt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let It=i.RGBA,vt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,vt,Xt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if($t&&ae){let pt=he(Wt[0]);e.texStorage2D(i.TEXTURE_2D,wt,At,pt.width,pt.height)}for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],$t?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,Ht,St):e.texImage2D(i.TEXTURE_2D,pt,At,Mt,Ht,St);D.generateMipmaps=!1}else if($t){if(ae){let pt=he(mt);e.texStorage2D(i.TEXTURE_2D,wt,At,pt.width,pt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ht,mt)}else e.texImage2D(i.TEXTURE_2D,0,At,Mt,Ht,mt);p(D)&&x(lt),_t.__version=yt.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function Z(H,D,it){if(D.image.length!==6)return;let lt=nt(H,D),ut=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+it);let yt=n.get(ut);if(ut.version!==yt.__version||lt===!0){e.activeTexture(i.TEXTURE0+it);let _t=fe.getPrimaries(fe.workingColorSpace),dt=D.colorSpace===Ai?null:fe.getPrimaries(D.colorSpace),mt=D.colorSpace===Ai||_t===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Mt=D.isCompressedTexture||D.image[0].isCompressedTexture,Ht=D.image[0]&&D.image[0].isDataTexture,At=[];for(let vt=0;vt<6;vt++)!Mt&&!Ht?At[vt]=g(D.image[vt],!0,r.maxCubemapSize):At[vt]=Ht?D.image[vt].image:D.image[vt],At[vt]=De(D,At[vt]);let St=At[0],Wt=s.convert(D.format,D.colorSpace),$t=s.convert(D.type),ae=v(D.internalFormat,Wt,$t,D.normalized,D.colorSpace),Q=D.isVideoTexture!==!0,wt=yt.__version===void 0||lt===!0,pt=ut.dataReady,Tt=S(D,St);K(i.TEXTURE_CUBE_MAP,D);let It;if(Mt){Q&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,St.width,St.height);for(let vt=0;vt<6;vt++){It=At[vt].mipmaps;for(let Xt=0;Xt<It.length;Xt++){let Vt=It[Xt];D.format!==Nn?Wt!==null?Q?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,Vt.width,Vt.height,Wt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ae,Vt.width,Vt.height,0,Vt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,Vt.width,Vt.height,Wt,$t,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ae,Vt.width,Vt.height,0,Wt,$t,Vt.data)}}}else{if(It=D.mipmaps,Q&&wt){It.length>0&&Tt++;let vt=he(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ht){Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,At[vt].width,At[vt].height,Wt,$t,At[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,At[vt].width,At[vt].height,0,Wt,$t,At[vt].data);for(let Xt=0;Xt<It.length;Xt++){let Re=It[Xt].image[vt].image;Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Re.width,Re.height,Wt,$t,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ae,Re.width,Re.height,0,Wt,$t,Re.data)}}else{Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,$t,At[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,Wt,$t,At[vt]);for(let Xt=0;Xt<It.length;Xt++){let Vt=It[Xt];Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Wt,$t,Vt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ae,Wt,$t,Vt.image[vt])}}}p(D)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ut.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function J(H,D,it,lt,ut,yt){let _t=s.convert(it.format,it.colorSpace),dt=s.convert(it.type),mt=v(it.internalFormat,_t,dt,it.normalized,it.colorSpace),Mt=n.get(D),Ht=n.get(it);if(Ht.__renderTarget=D,!Mt.__hasExternalTextures){let At=Math.max(1,D.width>>yt),St=Math.max(1,D.height>>yt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,yt,mt,At,St,D.depth,0,_t,dt,null):e.texImage2D(ut,yt,mt,At,St,0,_t,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),se(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ut,Ht.__webglTexture,0,pe(D)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ut,Ht.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(H,D,it){if(i.bindRenderbuffer(i.RENDERBUFFER,H),D.depthBuffer){let lt=D.depthTexture,ut=lt&&lt.isDepthTexture?lt.type:null,yt=M(D.stencilBuffer,ut),_t=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(D),yt,D.width,D.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(D),yt,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,yt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,H)}else{let lt=D.textures;for(let ut=0;ut<lt.length;ut++){let yt=lt[ut],_t=s.convert(yt.format,yt.colorSpace),dt=s.convert(yt.type),mt=v(yt.internalFormat,_t,dt,yt.normalized,yt.colorSpace);se(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(D),mt,D.width,D.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(D),mt,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,mt,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(H,D,it){let lt=D.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ut=n.get(D.depthTexture);if(ut.__renderTarget=D,(!ut.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),lt){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,D.depthTexture.addEventListener("dispose",A)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),K(i.TEXTURE_CUBE_MAP,D.depthTexture);let Mt=s.convert(D.depthTexture.format),Ht=s.convert(D.depthTexture.type),At;D.depthTexture.format===ri?At=i.DEPTH_COMPONENT24:D.depthTexture.format===Ki&&(At=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,At,D.width,D.height,0,Mt,Ht,null)}}else N(D.depthTexture,0);let yt=ut.__webglTexture,_t=pe(D),dt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,mt=D.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(D.depthTexture.format===ri)se(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,dt,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,dt,yt,0);else if(D.depthTexture.format===Ki)se(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,dt,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,dt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(H){let D=n.get(H),it=H.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==H.depthTexture){let lt=H.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),lt){let ut=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,lt.removeEventListener("dispose",ut)};lt.addEventListener("dispose",ut),D.__depthDisposeCallback=ut}D.__boundDepthTexture=lt}if(H.depthTexture&&!D.__autoAllocateDepthBuffer)if(it)for(let lt=0;lt<6;lt++)ft(D.__webglFramebuffer[lt],H,lt);else{let lt=H.texture.mipmaps;lt&&lt.length>0?ft(D.__webglFramebuffer[0],H,0):ft(D.__webglFramebuffer,H,0)}else if(it){D.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[lt]),D.__webglDepthbuffer[lt]===void 0)D.__webglDepthbuffer[lt]=i.createRenderbuffer(),rt(D.__webglDepthbuffer[lt],H,!1);else{let ut=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,yt)}}else{let lt=H.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),rt(D.__webglDepthbuffer,H,!1);else{let ut=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(H,D,it){let lt=n.get(H);D!==void 0&&J(lt.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&ht(H)}function bt(H){let D=H.texture,it=n.get(H),lt=n.get(D);H.addEventListener("dispose",y);let ut=H.textures,yt=H.isWebGLCubeRenderTarget===!0,_t=ut.length>1;if(_t||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=D.version,o.memory.textures++),yt){it.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer[dt]=[];for(let mt=0;mt<D.mipmaps.length;mt++)it.__webglFramebuffer[dt][mt]=i.createFramebuffer()}else it.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer=[];for(let dt=0;dt<D.mipmaps.length;dt++)it.__webglFramebuffer[dt]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(_t)for(let dt=0,mt=ut.length;dt<mt;dt++){let Mt=n.get(ut[dt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(H.samples>0&&se(H)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let dt=0;dt<ut.length;dt++){let mt=ut[dt];it.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[dt]);let Mt=s.convert(mt.format,mt.colorSpace),Ht=s.convert(mt.type),At=v(mt.internalFormat,Mt,Ht,mt.normalized,mt.colorSpace,H.isXRRenderTarget===!0),St=pe(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,At,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,it.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(it.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),K(i.TEXTURE_CUBE_MAP,D);for(let dt=0;dt<6;dt++)if(D.mipmaps&&D.mipmaps.length>0)for(let mt=0;mt<D.mipmaps.length;mt++)J(it.__webglFramebuffer[dt][mt],H,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,mt);else J(it.__webglFramebuffer[dt],H,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(D)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let dt=0,mt=ut.length;dt<mt;dt++){let Mt=ut[dt],Ht=n.get(Mt),At=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(At=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Ht.__webglTexture),K(At,Mt),J(it.__webglFramebuffer,H,Mt,i.COLOR_ATTACHMENT0+dt,At,0),p(Mt)&&x(At)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(dt=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,lt.__webglTexture),K(dt,D),D.mipmaps&&D.mipmaps.length>0)for(let mt=0;mt<D.mipmaps.length;mt++)J(it.__webglFramebuffer[mt],H,D,i.COLOR_ATTACHMENT0,dt,mt);else J(it.__webglFramebuffer,H,D,i.COLOR_ATTACHMENT0,dt,0);p(D)&&x(dt),e.unbindTexture()}H.depthBuffer&&ht(H)}function gt(H){let D=H.textures;for(let it=0,lt=D.length;it<lt;it++){let ut=D[it];if(p(ut)){let yt=_(H),_t=n.get(ut).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let Nt=[],ge=[];function be(H){if(H.samples>0){if(se(H)===!1){let D=H.textures,it=H.width,lt=H.height,ut=i.COLOR_BUFFER_BIT,yt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(H),dt=D.length>1;if(dt)for(let Mt=0;Mt<D.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let mt=H.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<D.length;Mt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Ht=n.get(D[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,it,lt,0,0,it,lt,ut,i.NEAREST),l===!0&&(Nt.length=0,ge.length=0,Nt.push(i.COLOR_ATTACHMENT0+Mt),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(Nt.push(yt),ge.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<D.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Ht=n.get(D[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&l){let D=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function pe(H){return Math.min(r.maxSamples,H.samples)}function se(H){let D=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function $(H){let D=o.render.frame;h.get(H)!==D&&(h.set(H,D),H.update())}function De(H,D){let it=H.colorSpace,lt=H.format,ut=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||it!==Ks&&it!==Ai&&(fe.getTransfer(it)===_e?(lt!==Nn||ut!==Cn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",it)),D}function he(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=L,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=at,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=J,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oM(i,t){function e(n,r=Ai){let s,o=fe.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===ah)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===hh)return i.RGB;if(n===Nn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===fh)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===So||n===wo||n===To||n===Ao)if(o===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Nl||n===Ul||n===Bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Eo||n===Wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===zl)return o===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return s.COMPRESSED_R11_EAC;if(n===Hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return s.COMPRESSED_RG11_EAC;if(n===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===Yl||n===ql||n===$l||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===oc||n===ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return o===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Ro||n===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:aM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends si{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,b=typeof XRWebGLBinding<"u",g=new kh,p={},x=e.getContextAttributes(),_=null,v=null,M=[],S=[],A=new jt,y=null,R=null,E=new Qe;E.viewport=new ke;let w=new Qe;w.viewport=new ke;let C=[E,w],L=new Ml,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=M[X];return Y===void 0&&(Y=new hs,M[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=M[X];return Y===void 0&&(Y=new hs,M[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=M[X];return Y===void 0&&(Y=new hs,M[X]=Y),Y.getHandSpace()};function T(X){let Y=S.indexOf(X.inputSource);if(Y===-1)return;let et=M[Y];et!==void 0&&(et.update(X.inputSource,X.frame,c||o),et.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let X=0;X<M.length;X++){let Y=S[X];Y!==null&&(S[X]=null,M[X].disconnect(Y))}I=null,O=null,g.reset();for(let X in p)delete p[X];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,v=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Z=null,J=null;x.depth&&(J=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=x.stencil?Ki:ri,Z=x.stencil?vs:$n);let rt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(rt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ye(f.textureWidth,f.textureHeight,{format:Nn,type:Cn,depthTexture:new ci(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(X){for(let Y=0;Y<X.removed.length;Y++){let et=X.removed[Y],Z=S.indexOf(et);Z>=0&&(S[Z]=null,M[Z].disconnect(et))}for(let Y=0;Y<X.added.length;Y++){let et=X.added[Y],Z=S.indexOf(et);if(Z===-1){for(let rt=0;rt<M.length;rt++)if(rt>=S.length){S.push(et),Z=rt;break}else if(S[rt]===null){S[rt]=et,Z=rt;break}if(Z===-1)break}let J=M[Z];J&&J.connect(et)}}let F=new q,B=new q;function z(X,Y,et){F.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(et.matrixWorld);let Z=F.distanceTo(B),J=Y.projectionMatrix.elements,rt=et.projectionMatrix.elements,ft=J[14]/(J[10]-1),ht=J[14]/(J[10]+1),at=(J[9]+1)/J[5],bt=(J[9]-1)/J[5],gt=(J[8]-1)/J[0],Nt=(rt[8]+1)/rt[0],ge=ft*gt,be=ft*Nt,pe=Z/(-gt+Nt),se=pe*-gt;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(se),X.translateZ(pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),J[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let $=ft+pe,De=ht+pe,he=ge-se,H=be+(Z-se),D=at*ht/De*$,it=bt*ht/De*$;X.projectionMatrix.makePerspective(he,H,D,it,$,De),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function G(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,et=X.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(et=g.depthFar)),L.near=w.near=E.near=Y,L.far=w.far=E.far=et,(I!==L.near||O!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,O=L.far),L.layers.mask=X.layers.mask|6,E.layers.mask=L.layers.mask&-5,w.layers.mask=L.layers.mask&-3;let Z=X.parent,J=L.cameras;G(L,Z);for(let rt=0;rt<J.length;rt++)G(J[rt],Z);J.length===2?z(L,E,w):L.projectionMatrix.copy(E.projectionMatrix),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),V(X,L,Z)};function V(X,Y,et){et===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(et.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ja*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(X){return p[X]};let W=null;function K(X,Y){if(h=Y.getViewerPose(c||o),m=Y,h!==null){let et=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Z=!1;et.length!==L.cameras.length&&(L.cameras.length=0,Z=!0);for(let ht=0;ht<et.length;ht++){let at=et[ht],bt=null;if(d!==null)bt=d.getViewport(at);else{let Nt=u.getViewSubImage(f,at);bt=Nt.viewport,ht===0&&(t.setRenderTargetTextures(v,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(v))}let gt=C[ht];gt===void 0&&(gt=new Qe,gt.layers.enable(ht),gt.viewport=new ke,C[ht]=gt),gt.matrix.fromArray(at.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(at.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(bt.x,bt.y,bt.width,bt.height),ht===0&&(L.matrix.copy(gt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Z===!0&&L.cameras.push(gt)}let J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ht=u.getDepthInformation(et[0]);ht&&ht.isValid&&ht.texture&&g.init(ht,r.renderState)}if(J&&J.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ht=0;ht<et.length;ht++){let at=et[ht].camera;if(at){let bt=p[at];bt||(bt=new oo,p[at]=bt);let gt=u.getCameraImage(at);bt.sourceTexture=gt}}}}for(let et=0;et<M.length;et++){let Z=S[et],J=M[et];Z!==null&&J!==void 0&&J.update(Z,Y,c||o)}W&&W(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let nt=new i0;nt.setAnimationLoop(K),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}},cM=new Ae,c0=new ee;c0.set(-1,0,0,0,1,0,0,0,1);function uM(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,bh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,_,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(c0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=r[v.id];S===void 0&&(g(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(v,A);let y=t.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function h(v){let M=u();v.__bindingPointIndex=M;let S=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,R=S.length;y<R;y++){let E=S[y];if(Array.isArray(E))for(let w=0,C=E.length;w<C;w++)d(E[w],y,w,A);else d(E,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,S,A){if(b(v,M,S,A)===!0){let y=v.__offset,R=v.value;if(Array.isArray(R)){let E=0;for(let w=0;w<R.length;w++){let C=R[w],L=p(C);m(C,v.__data,E),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(E+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function m(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function b(v,M,S,A){let y=v.value,R=M+"_"+S;if(A[R]===void 0)return typeof y=="number"||typeof y=="boolean"?A[R]=y:ArrayBuffer.isView(y)?A[R]=y.slice():A[R]=y.clone(),!0;{let E=A[R];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return A[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function g(v){let M=v.uniforms,S=0,A=16;for(let R=0,E=M.length;R<E;R++){let w=Array.isArray(M[R])?M[R]:[M[R]];for(let C=0,L=w.length;C<L;C++){let I=w[C],O=Array.isArray(I.value)?I.value:[I.value];for(let T=0,P=O.length;T<P;T++){let N=O[T],F=p(N),B=S%A,z=B%F.boundary,G=B+z;S+=z,G!==0&&A-G<F.storage&&(S+=A-G),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=F.storage}}}let y=S%A;return y>0&&(S+=A-y),v.__size=S,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function dM(){return hi===null&&(hi=new il(fM,16,16,Ji,Kn),hi.name="DFG_LUT",hi.minFilter=Xe,hi.magFilter=Xe,hi.wrapS=Tn,hi.wrapT=Tn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Tr=class{constructor(t={}){let{canvas:e=Sp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Cn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let b=d,g=new Set([Dl,Fl,Ll]),p=new Set([Cn,$n,xs,vs,Pl,Il]),x=new Uint32Array(4),_=new Int32Array(4),v=new q,M=null,S=null,A=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,w=!1,C=null,L=null,I=null,O=null;this._outputColorSpace=Ue;let T=0,P=0,N=null,F=-1,B=null,z=new ke,G=new ke,V=null,W=new tt(0),K=0,nt=e.width,X=e.height,Y=1,et=null,Z=null,J=new ke(0,0,nt,X),rt=new ke(0,0,nt,X),ft=!1,ht=new ro,at=!1,bt=!1,gt=new Ae,Nt=new q,ge=new ke,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function se(){return N===null?Y:1}let $=n;function De(k,j){return e.getContext(k,j)}let he,H,D,it,lt,ut,yt,_t,dt,mt,Mt,Ht,At,St,Wt,$t,ae,Q,wt,pt,Tt,It,vt;try{let k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",zn,!1),$===null){let j="webgl2";if($=De(j,k),$===null)throw De(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(k){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Kt("WebGLRenderer: "+k.message),k}function Xt(){he=new yy($),he.init(),Tt=new oM($,he),H=new uy($,he,t,Tt),D=new rM($,he),H.reversedDepthBuffer&&f&&D.buffers.depth.setReversed(!0),L=$.createFramebuffer(),I=$.createFramebuffer(),O=$.createFramebuffer(),it=new Sy($),lt=new W_,ut=new sM($,he,D,lt,H,Tt,it),yt=new vy(E),_t=new Tx($),It=new ly($,_t),dt=new _y($,_t,it,It),mt=new Ty($,dt,_t,It,it),Q=new wy($,H,ut),Wt=new hy(lt),Mt=new H_(E,yt,he,H,It,Wt),Ht=new uM(E,lt),At=new Y_,St=new j_(he),ae=new ay(E,yt,D,mt,m,l),$t=new iM(E,mt,H),vt=new hM($,it,H,D),wt=new cy($,he,it),pt=new My($,he,it),it.programs=Mt.programs,E.capabilities=H,E.extensions=he,E.properties=lt,E.renderLists=At,E.shadowMap=$t,E.state=D,E.info=it}b!==Cn&&(R=new Ey(b,e.width,e.height,a,r,s));let Vt=new zh(E,$);this.xr=Vt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let k=he.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=he.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(k){k!==void 0&&(Y=k,this.setSize(nt,X,!1))},this.getSize=function(k){return k.set(nt,X)},this.setSize=function(k,j,ct=!0){if(Vt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=k,X=j,e.width=Math.floor(k*Y),e.height=Math.floor(j*Y),ct===!0&&(e.style.width=k+"px",e.style.height=j+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,k,j)},this.getDrawingBufferSize=function(k){return k.set(nt*Y,X*Y).floor()},this.setDrawingBufferSize=function(k,j,ct){nt=k,X=j,Y=ct,e.width=Math.floor(k*ct),e.height=Math.floor(j*ct),this.setViewport(0,0,k,j)},this.setEffects=function(k){if(b===Cn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let j=0;j<k.length;j++)if(k[j].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(z)},this.getViewport=function(k){return k.copy(J)},this.setViewport=function(k,j,ct,st){k.isVector4?J.set(k.x,k.y,k.z,k.w):J.set(k,j,ct,st),D.viewport(z.copy(J).multiplyScalar(Y).round())},this.getScissor=function(k){return k.copy(rt)},this.setScissor=function(k,j,ct,st){k.isVector4?rt.set(k.x,k.y,k.z,k.w):rt.set(k,j,ct,st),D.scissor(G.copy(rt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(k){D.setScissorTest(ft=k)},this.setOpaqueSort=function(k){et=k},this.setTransparentSort=function(k){Z=k},this.getClearColor=function(k){return k.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(k=!0,j=!0,ct=!0){let st=0;if(k){let ot=!1;if(N!==null){let Pt=N.texture.format;ot=g.has(Pt)}if(ot){let Pt=N.texture.type,Dt=p.has(Pt),Ct=ae.getClearColor(),Bt=ae.getClearAlpha(),Gt=Ct.r,le=Ct.g,ue=Ct.b;Dt?(x[0]=Gt,x[1]=le,x[2]=ue,x[3]=Bt,$.clearBufferuiv($.COLOR,0,x)):(_[0]=Gt,_[1]=le,_[2]=ue,_[3]=Bt,$.clearBufferiv($.COLOR,0,_))}else st|=$.COLOR_BUFFER_BIT}j&&(st|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(st|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&$.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),C=k},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),ae.dispose(),At.dispose(),St.dispose(),lt.dispose(),yt.dispose(),mt.dispose(),It.dispose(),vt.dispose(),Mt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",sd),Vt.removeEventListener("sessionend",od),ur.stop()};function Re(k){k.preventDefault(),Qs("WebGLRenderer: Context Lost."),w=!0}function ve(){Qs("WebGLRenderer: Context Restored."),w=!1;let k=it.autoReset,j=$t.enabled,ct=$t.autoUpdate,st=$t.needsUpdate,ot=$t.type;Xt(),it.autoReset=k,$t.enabled=j,$t.autoUpdate=ct,$t.needsUpdate=st,$t.type=ot}function zn(k){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ti(k){let j=k.target;j.removeEventListener("dispose",ti),vb(j)}function vb(k){yb(k),lt.remove(k)}function yb(k){let j=lt.get(k).programs;j!==void 0&&(j.forEach(function(ct){Mt.releaseProgram(ct)}),k.isShaderMaterial&&Mt.releaseShaderCache(k))}this.renderBufferDirect=function(k,j,ct,st,ot,Pt){j===null&&(j=be);let Dt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ct=Sb(k,j,ct,st,ot);D.setMaterial(st,Dt);let Bt=ct.index,Gt=1;if(st.wireframe===!0){if(Bt=dt.getWireframeAttribute(ct),Bt===void 0)return;Gt=2}let le=ct.drawRange,ue=ct.attributes.position,kt=le.start*Gt,ye=(le.start+le.count)*Gt;Pt!==null&&(kt=Math.max(kt,Pt.start*Gt),ye=Math.min(ye,(Pt.start+Pt.count)*Gt)),Bt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,Bt.count)):ue!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,ue.count));let He=ye-kt;if(He<0||He===1/0)return;It.setup(ot,st,Ct,ct,Bt);let Le,Ee=wt;if(Bt!==null&&(Le=_t.get(Bt),Ee=pt,Ee.setIndex(Le)),ot.isMesh)st.wireframe===!0?(D.setLineWidth(st.wireframeLinewidth*se()),Ee.setMode($.LINES)):Ee.setMode($.TRIANGLES);else if(ot.isLine){let un=st.linewidth;un===void 0&&(un=1),D.setLineWidth(un*se()),ot.isLineSegments?Ee.setMode($.LINES):ot.isLineLoop?Ee.setMode($.LINE_LOOP):Ee.setMode($.LINE_STRIP)}else ot.isPoints?Ee.setMode($.POINTS):ot.isSprite&&Ee.setMode($.TRIANGLES);if(ot.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ee.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let un=ot._multiDrawStarts,Ft=ot._multiDrawCounts,bn=ot._multiDrawCount,xe=Bt?_t.get(Bt).bytesPerElement:1,Ln=lt.get(st).currentProgram.getUniforms();for(let ei=0;ei<bn;ei++)Ln.setValue($,"_gl_DrawID",ei),Ee.render(un[ei]/xe,Ft[ei])}else if(ot.isInstancedMesh)Ee.renderInstances(kt,He,ot.count);else if(ct.isInstancedBufferGeometry){let un=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ft=Math.min(ct.instanceCount,un);Ee.renderInstances(kt,He,Ft)}else Ee.render(kt,He)};function rd(k,j,ct,st){C!==null&&k.isNodeMaterial&&C.setObject(st,k),at===!0&&Wt.setState(k,ct,!1),k.transparent===!0&&k.side===ne&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,ha(k,j,st),k.side=ui,k.needsUpdate=!0,ha(k,j,st),k.side=ne):ha(k,j,st)}this.compile=function(k,j,ct=null){ct===null&&(ct=k),C!==null&&C.renderStart(k,j,ct),S=St.get(ct),S.init(j),y.push(S),ct.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),k!==ct&&k.traverseVisible(function(ot){ot.isLight&&ot.layers.test(j.layers)&&(S.pushLight(ot),ot.castShadow&&S.pushShadow(ot))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),bt=this.localClippingEnabled,at=Wt.init(this.clippingPlanes,bt),at===!0&&Wt.setGlobalState(this.clippingPlanes,j),C!==null&&$t.render(S.state.shadowsArray,ct,j);let st=new Set;return k.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Pt=ot.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];rd(Ct,ct,j,ot),st.add(Ct)}else rd(Pt,ct,j,ot),st.add(Pt)}),S=y.pop(),C!==null&&C.renderEnd(),st},this.compileAsync=function(k,j,ct=null){let st=this.compile(k,j,ct);return new Promise(ot=>{function Pt(){if(st.forEach(function(Dt){let Bt=lt.get(Dt).currentProgram;(Bt===void 0||Bt.isReady())&&st.delete(Dt)}),st.size===0){ot(k);return}setTimeout(Pt,10)}he.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let hu=null;function _b(k){hu&&hu(k)}function sd(){ur.stop()}function od(){ur.start()}let ur=new i0;ur.setAnimationLoop(_b),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(k){hu=k,Vt.setAnimationLoop(k),k===null?ur.stop():ur.start()},Vt.addEventListener("sessionstart",sd),Vt.addEventListener("sessionend",od),this.render=function(k,j){if(j!==void 0&&j.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C!==null&&C.renderStart(k,j);let ct=Vt.enabled===!0&&Vt.isPresenting===!0,st=R!==null&&(N===null||ct)&&R.begin(E,N);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(j),j=Vt.getCamera()),k.isScene===!0&&k.onBeforeRender(E,k,j,N),S=St.get(k,y.length),S.init(j),S.state.textureUnits=ut.getTextureUnits(),y.push(S),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ht.setFromProjectionMatrix(gt,Xn,j.reversedDepth),bt=this.localClippingEnabled,at=Wt.init(this.clippingPlanes,bt),M=At.get(k,A.length),M.init(),A.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Dt=E.xr.getDepthSensingMesh();Dt!==null&&fu(Dt,j,-1/0,E.sortObjects)}fu(k,j,0,E.sortObjects),M.finish(),C!==null&&C.updateLights(S.state.lightsArray),E.sortObjects===!0&&M.sort(et,Z),pe=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,pe&&ae.addToRenderList(M,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Wt.beginShadows();let ot=S.state.shadowsArray;if($t.render(ot,k,j),at===!0&&Wt.endShadows(),(st&&R.hasRenderPass())===!1){let Dt=M.opaque,Ct=M.transmissive;if(S.setupLights(),j.isArrayCamera){let Bt=j.cameras;if(Ct.length>0)for(let Gt=0,le=Bt.length;Gt<le;Gt++){let ue=Bt[Gt];ld(Dt,Ct,k,ue)}pe&&ae.render(k);for(let Gt=0,le=Bt.length;Gt<le;Gt++){let ue=Bt[Gt];ad(M,k,ue,ue.viewport)}}else Ct.length>0&&ld(Dt,Ct,k,j),pe&&ae.render(k),ad(M,k,j)}N!==null&&P===0&&(ut.updateMultisampleRenderTarget(N),ut.updateRenderTargetMipmap(N)),st&&R.end(E),k.isScene===!0&&k.onAfterRender(E,k,j),It.resetDefaultState(),F=-1,B=null,y.pop(),y.length>0?(S=y[y.length-1],ut.setTextureUnits(S.state.textureUnits),at===!0&&Wt.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,C!==null&&C.renderEnd()};function fu(k,j,ct,st){if(k.visible===!1)return;if(k.layers.test(j.layers)){if(k.isGroup)ct=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(j);else if(k.isLightProbeGrid)S.pushLightProbeGrid(k);else if(k.isLight)S.pushLight(k),k.castShadow&&S.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(ht)){st&&ge.setFromMatrixPosition(k.matrixWorld).applyMatrix4(gt);let Dt=mt.update(k),Ct=k.material;Ct.visible&&M.push(k,Dt,Ct,ct,ge.z,null,j)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(ht))){let Dt=mt.update(k),Ct=k.material;if(st&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),ge.copy(k.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ge.copy(Dt.boundingSphere.center)),ge.applyMatrix4(k.matrixWorld).applyMatrix4(gt)),Array.isArray(Ct)){let Bt=Dt.groups;for(let Gt=0,le=Bt.length;Gt<le;Gt++){let ue=Bt[Gt],kt=Ct[ue.materialIndex];kt&&kt.visible&&M.push(k,Dt,kt,ct,ge.z,ue,j)}}else Ct.visible&&M.push(k,Dt,Ct,ct,ge.z,null,j)}}let Pt=k.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)fu(Pt[Dt],j,ct,st)}function ad(k,j,ct,st){let{opaque:ot,transmissive:Pt,transparent:Dt}=k;S.setupLightsView(ct),at===!0&&Wt.setGlobalState(E.clippingPlanes,ct),st&&D.viewport(z.copy(st)),ot.length>0&&ua(ot,j,ct),Pt.length>0&&ua(Pt,j,ct),Dt.length>0&&ua(Dt,j,ct),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function ld(k,j,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[st.id]===void 0){let kt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[st.id]=new Ye(1,1,{generateMipmaps:!0,type:kt?Kn:Cn,minFilter:Zi,samples:Math.max(4,H.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Pt=S.state.transmissionRenderTarget[st.id],Dt=st.viewport||z;Pt.setSize(Dt.z*E.transmissionResolutionScale,Dt.w*E.transmissionResolutionScale);let Ct=E.getRenderTarget(),Bt=E.getActiveCubeFace(),Gt=E.getActiveMipmapLevel();E.setRenderTarget(Pt),E.getClearColor(W),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),pe&&ae.render(ct);let le=E.toneMapping;E.toneMapping=qn;let ue=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),at===!0&&Wt.setGlobalState(E.clippingPlanes,st),ua(k,ct,st),ut.updateMultisampleRenderTarget(Pt),ut.updateRenderTargetMipmap(Pt),he.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,He=j.length;ye<He;ye++){let Le=j[ye],{object:Ee,geometry:un,material:Ft,group:bn}=Le;if(Ft.side===ne&&Ee.layers.test(st.layers)){let xe=Ft.side;Ft.side=an,Ft.needsUpdate=!0,cd(Ee,ct,st,un,Ft,bn),Ft.side=xe,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(ut.updateMultisampleRenderTarget(Pt),ut.updateRenderTargetMipmap(Pt))}E.setRenderTarget(Ct,Bt,Gt),E.setClearColor(W,K),ue!==void 0&&(st.viewport=ue),E.toneMapping=le}function ua(k,j,ct){let st=j.isScene===!0?j.overrideMaterial:null;for(let ot=0,Pt=k.length;ot<Pt;ot++){let Dt=k[ot],{object:Ct,geometry:Bt,group:Gt}=Dt,le=Dt.material;le.allowOverride===!0&&st!==null&&(le=st),Ct.layers.test(ct.layers)&&cd(Ct,j,ct,Bt,le,Gt)}}function cd(k,j,ct,st,ot,Pt){C!==null&&ot.isNodeMaterial&&C.setObject(k,ot),k.onBeforeRender(E,j,ct,st,ot,Pt),k.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),ot.onBeforeRender(E,j,ct,st,k,Pt),ot.transparent===!0&&ot.side===ne&&ot.forceSinglePass===!1?(ot.side=an,ot.needsUpdate=!0,E.renderBufferDirect(ct,j,st,ot,k,Pt),ot.side=ui,ot.needsUpdate=!0,E.renderBufferDirect(ct,j,st,ot,k,Pt),ot.side=ne):E.renderBufferDirect(ct,j,st,ot,k,Pt),k.onAfterRender(E,j,ct,st,ot,Pt)}function ha(k,j,ct){j.isScene!==!0&&(j=be);let st=lt.get(k),ot=S.state.lights,Pt=S.state.shadowsArray,Dt=ot.state.version,Ct=Mt.getParameters(k,ot.state,Pt,j,ct,S.state.lightProbeGridArray),Bt=Mt.getProgramCacheKey(Ct),Gt=st.programs;st.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?j.environment:null,st.fog=j.fog;let le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;st.envMap=yt.get(k.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&k.envMap===null?j.environmentRotation:k.envMapRotation,Gt===void 0&&(k.addEventListener("dispose",ti),Gt=new Map,st.programs=Gt);let ue=Gt.get(Bt);if(ue!==void 0){if(st.currentProgram===ue&&st.lightsStateVersion===Dt)return hd(k,Ct),ue}else Ct.uniforms=Mt.getUniforms(k),C!==null&&k.isNodeMaterial&&C.build(k,ct,Ct),k.onBeforeCompile(Ct,E),ue=Mt.acquireProgram(Ct,Bt),Gt.set(Bt,ue),st.uniforms=Ct.uniforms;let kt=st.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(kt.clippingPlanes=Wt.uniform),hd(k,Ct),st.needsLights=Tb(k),st.lightsStateVersion=Dt,st.needsLights&&(kt.ambientLightColor.value=ot.state.ambient,kt.lightProbe.value=ot.state.probe,kt.sunLights.value=ot.state.sun,kt.sunLightShadows.value=ot.state.sunShadow,kt.directionalLights.value=ot.state.directional,kt.directionalLightShadows.value=ot.state.directionalShadow,kt.spotLights.value=ot.state.spot,kt.spotLightShadows.value=ot.state.spotShadow,kt.rectAreaLights.value=ot.state.rectArea,kt.ltc_1.value=ot.state.rectAreaLTC1,kt.ltc_2.value=ot.state.rectAreaLTC2,kt.pointLights.value=ot.state.point,kt.pointLightShadows.value=ot.state.pointShadow,kt.hemisphereLights.value=ot.state.hemi,kt.sunShadowMatrix.value=ot.state.sunShadowMatrix,kt.sunShadowCascade.value=ot.state.sunShadowCascade,kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,kt.spotLightMatrix.value=ot.state.spotLightMatrix,kt.spotLightMap.value=ot.state.spotLightMap,kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),st.lightProbeGrid=S.state.lightProbeGridArray.length>0,st.currentProgram=ue,st.uniformsList=null,ue}function ud(k){if(k.uniformsList===null){let j=k.currentProgram.getUniforms();k.uniformsList=Ms.seqWithValue(j.seq,k.uniforms)}return k.uniformsList}function hd(k,j){let ct=lt.get(k);ct.outputColorSpace=j.outputColorSpace,ct.batching=j.batching,ct.batchingColor=j.batchingColor,ct.instancing=j.instancing,ct.instancingColor=j.instancingColor,ct.instancingMorph=j.instancingMorph,ct.skinning=j.skinning,ct.morphTargets=j.morphTargets,ct.morphNormals=j.morphNormals,ct.morphColors=j.morphColors,ct.morphTargetsCount=j.morphTargetsCount,ct.numClippingPlanes=j.numClippingPlanes,ct.numIntersection=j.numClipIntersection,ct.vertexAlphas=j.vertexAlphas,ct.vertexTangents=j.vertexTangents,ct.toneMapping=j.toneMapping}function Mb(k,j){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;v.setFromMatrixPosition(j.matrixWorld);for(let ct=0,st=k.length;ct<st;ct++){let ot=k[ct];if(ot.texture!==null&&ot.boundingBox.containsPoint(v))return ot}return null}function Sb(k,j,ct,st,ot){j.isScene!==!0&&(j=be),ut.resetTextureUnits();let Pt=j.fog,Dt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?j.environment:null,Ct=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fe.workingColorSpace,Bt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Gt=yt.get(st.envMap||Dt,Bt),le=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ue=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!ct.morphAttributes.position,ye=!!ct.morphAttributes.normal,He=!!ct.morphAttributes.color,Le=qn;st.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Le=E.toneMapping);let Ee=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,un=Ee!==void 0?Ee.length:0,Ft=lt.get(st),bn=S.state.lights;if(at===!0&&(bt===!0||k!==B)){let Ce=k===B&&st.id===F;Wt.setState(st,k,Ce)}let xe=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==bn.state.version||Ft.outputColorSpace!==Ct||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Gt||st.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Wt.numPlanes||Ft.numIntersection!==Wt.numIntersection)||Ft.vertexAlphas!==le||Ft.vertexTangents!==ue||Ft.morphTargets!==kt||Ft.morphNormals!==ye||Ft.morphColors!==He||Ft.toneMapping!==Le||Ft.morphTargetsCount!==un||!!Ft.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Ft.__version=st.version);let Ln=Ft.currentProgram;xe===!0&&(Ln=ha(st,j,ot),C&&st.isNodeMaterial&&C.onUpdateProgram(st,Ln,Ft));let ei=!1,Di=!1,kr=!1,we=Ln.getUniforms(),Ve=Ft.uniforms;if(D.useProgram(Ln.program)&&(ei=!0,Di=!0,kr=!0),st.id!==F&&(F=st.id,Di=!0),Ft.needsLights){let Ce=Mb(S.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Ce&&(Ft.lightProbeGrid=Ce,Di=!0)}if(ei||B!==k){D.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),we.setValue($,"projectionMatrix",k.projectionMatrix),we.setValue($,"viewMatrix",k.matrixWorldInverse);let Ni=we.map.cameraPosition;Ni!==void 0&&Ni.setValue($,Nt.setFromMatrixPosition(k.matrixWorld)),H.logarithmicDepthBuffer&&we.setValue($,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&we.setValue($,"isOrthographic",k.isOrthographicCamera===!0),B!==k&&(B=k,Di=!0,kr=!0)}if(Ft.needsLights&&(bn.state.sunShadowMap.length>0&&we.setValue($,"sunShadowMap",bn.state.sunShadowMap,ut),bn.state.directionalShadowMap.length>0&&we.setValue($,"directionalShadowMap",bn.state.directionalShadowMap,ut),bn.state.spotShadowMap.length>0&&we.setValue($,"spotShadowMap",bn.state.spotShadowMap,ut),bn.state.pointShadowMap.length>0&&we.setValue($,"pointShadowMap",bn.state.pointShadowMap,ut)),ot.isSkinnedMesh){we.setOptional($,ot,"bindMatrix"),we.setOptional($,ot,"bindMatrixInverse");let Ce=ot.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue($,"boneTexture",Ce.boneTexture,ut))}ot.isBatchedMesh&&(we.setOptional($,ot,"batchingTexture"),we.setValue($,"batchingTexture",ot._matricesTexture,ut),we.setOptional($,ot,"batchingIdTexture"),we.setValue($,"batchingIdTexture",ot._indirectTexture,ut),we.setOptional($,ot,"batchingColorTexture"),ot._colorsTexture!==null&&we.setValue($,"batchingColorTexture",ot._colorsTexture,ut));let Oi=ct.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Q.update(ot,ct,Ln),(Di||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,we.setValue($,"receiveShadow",ot.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&j.environment!==null&&(Ve.envMapIntensity.value=j.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=dM()),Di){if(we.setValue($,"toneMappingExposure",E.toneMappingExposure),Ft.needsLights&&wb(Ve,kr),Pt&&st.fog===!0&&Ht.refreshFogUniforms(Ve,Pt),Ht.refreshMaterialUniforms(Ve,st,Y,X,S.state.transmissionRenderTarget[k.id]),Ft.needsLights&&Ft.lightProbeGrid){let Ce=Ft.lightProbeGrid;Ve.probesSH.value=Ce.texture,Ve.probesMin.value.copy(Ce.boundingBox.min),Ve.probesMax.value.copy(Ce.boundingBox.max),Ve.probesResolution.value.copy(Ce.resolution)}Ms.upload($,ud(Ft),Ve,ut)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ms.upload($,ud(Ft),Ve,ut),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&we.setValue($,"center",ot.center),we.setValue($,"modelViewMatrix",ot.modelViewMatrix),we.setValue($,"normalMatrix",ot.normalMatrix),we.setValue($,"modelMatrix",ot.matrixWorld),st.uniformsGroups!==void 0){let Ce=st.uniformsGroups;for(let Ni=0,zr=Ce.length;Ni<zr;Ni++){let dd=Ce[Ni];vt.update(dd,Ln),vt.bind(dd,Ln)}}return Ln}function wb(k,j){k.ambientLightColor.needsUpdate=j,k.lightProbe.needsUpdate=j,k.sunLights.needsUpdate=j,k.sunLightShadows.needsUpdate=j,k.directionalLights.needsUpdate=j,k.directionalLightShadows.needsUpdate=j,k.pointLights.needsUpdate=j,k.pointLightShadows.needsUpdate=j,k.spotLights.needsUpdate=j,k.spotLightShadows.needsUpdate=j,k.rectAreaLights.needsUpdate=j,k.hemisphereLights.needsUpdate=j}function Tb(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(k,j,ct){let st=lt.get(k);st.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),lt.get(k.texture).__webglTexture=j,lt.get(k.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,j){let ct=lt.get(k);ct.__webglFramebuffer=j,ct.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(k,j=0,ct=0){N=k,T=j,P=ct;let st=null,ot=!1,Pt=!1;if(k){let Ct=lt.get(k);if(Ct.__useDefaultFramebuffer!==void 0){D.bindFramebuffer($.FRAMEBUFFER,Ct.__webglFramebuffer),z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest,D.viewport(z),D.scissor(G),D.setScissorTest(V),F=-1;return}else if(Ct.__webglFramebuffer===void 0)ut.setupRenderTarget(k);else if(Ct.__hasExternalTextures)ut.rebindTextures(k,lt.get(k.texture).__webglTexture,lt.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let le=k.depthTexture;if(Ct.__boundDepthTexture!==le){if(le!==null&&lt.has(le)&&(k.width!==le.image.width||k.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(k)}}let Bt=k.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Pt=!0);let Gt=lt.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Gt[j])?st=Gt[j][ct]:st=Gt[j],ot=!0):k.samples>0&&ut.useMultisampledRTT(k)===!1?st=lt.get(k).__webglMultisampledFramebuffer:Array.isArray(Gt)?st=Gt[ct]:st=Gt,z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest}else z.copy(J).multiplyScalar(Y).floor(),G.copy(rt).multiplyScalar(Y).floor(),V=ft;if(ct!==0&&(st=L),D.bindFramebuffer($.FRAMEBUFFER,st)&&D.drawBuffers(k,st),D.viewport(z),D.scissor(G),D.setScissorTest(V),ot){let Ct=lt.get(k.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct.__webglTexture,ct)}else if(Pt){let Ct=j;for(let Bt=0;Bt<k.textures.length;Bt++){let Gt=lt.get(k.textures[Bt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,ct,Ct)}}else if(k!==null&&ct!==0){let Ct=lt.get(k.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ct.__webglTexture,ct)}F=-1};function fd(k){let j=lt.get(k);return(j.__readFormat!==k.format||j.__readType!==k.type)&&(j.__readFormat=k.format,j.__readType=k.type,j.__formatReadable=H.textureFormatReadable(k.format),j.__typeReadable=H.textureTypeReadable(k.type)),j}this.readRenderTargetPixels=function(k,j,ct,st,ot,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=lt.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){D.bindFramebuffer($.FRAMEBUFFER,Bt);try{let Gt=k.textures[Ct],le=Gt.format,ue=Gt.type;k.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ct);let kt=fd(Gt);if(kt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=k.width-st&&ct>=0&&ct<=k.height-ot&&$.readPixels(j,ct,st,ot,Tt.convert(le),Tt.convert(ue),Pt)}finally{let Gt=N!==null?lt.get(N).__webglFramebuffer:null;D.bindFramebuffer($.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(k,j,ct,st,ot,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=lt.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(j>=0&&j<=k.width-st&&ct>=0&&ct<=k.height-ot){D.bindFramebuffer($.FRAMEBUFFER,Bt);let Gt=k.textures[Ct],le=Gt.format,ue=Gt.type;k.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ct);let kt=fd(Gt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ye),$.bufferData($.PIXEL_PACK_BUFFER,Pt.byteLength,$.STREAM_READ),$.readPixels(j,ct,st,ot,Tt.convert(le),Tt.convert(ue),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let He=N!==null?lt.get(N).__webglFramebuffer:null;D.bindFramebuffer($.FRAMEBUFFER,He);let Le=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Tp($,Le,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ye),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Pt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(ye),$.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,j=null,ct=0){let st=Math.pow(2,-ct),ot=Math.floor(k.image.width*st),Pt=Math.floor(k.image.height*st),Dt=j!==null?j.x:0,Ct=j!==null?j.y:0;ut.setTexture2D(k,0),$.copyTexSubImage2D($.TEXTURE_2D,ct,0,0,Dt,Ct,ot,Pt),D.unbindTexture()},this.copyTextureToTexture=function(k,j,ct=null,st=null,ot=0,Pt=0){let Dt,Ct,Bt,Gt,le,ue,kt,ye,He,Le=k.isCompressedTexture?k.mipmaps[Pt]:k.image;if(ct!==null)Dt=ct.max.x-ct.min.x,Ct=ct.max.y-ct.min.y,Bt=ct.isBox3?ct.max.z-ct.min.z:1,Gt=ct.min.x,le=ct.min.y,ue=ct.isBox3?ct.min.z:0;else{let Ve=Math.pow(2,-ot);Dt=Math.floor(Le.width*Ve),Ct=Math.floor(Le.height*Ve),k.isDataArrayTexture?Bt=Le.depth:k.isData3DTexture?Bt=Math.floor(Le.depth*Ve):Bt=1,Gt=0,le=0,ue=0}st!==null?(kt=st.x,ye=st.y,He=st.z):(kt=0,ye=0,He=0);let Ee=Tt.convert(j.format),un=Tt.convert(j.type),Ft;j.isData3DTexture?(ut.setTexture3D(j,0),Ft=$.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Ft=$.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Ft=$.TEXTURE_2D),D.activeTexture($.TEXTURE0),D.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment);let bn=D.getParameter($.UNPACK_ROW_LENGTH),xe=D.getParameter($.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter($.UNPACK_SKIP_PIXELS),ei=D.getParameter($.UNPACK_SKIP_ROWS),Di=D.getParameter($.UNPACK_SKIP_IMAGES);D.pixelStorei($.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei($.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei($.UNPACK_SKIP_PIXELS,Gt),D.pixelStorei($.UNPACK_SKIP_ROWS,le),D.pixelStorei($.UNPACK_SKIP_IMAGES,ue);let kr=k.isDataArrayTexture||k.isData3DTexture,we=j.isDataArrayTexture||j.isData3DTexture;if(k.isDepthTexture){let Ve=lt.get(k),Oi=lt.get(j),Ce=lt.get(Ve.__renderTarget),Ni=lt.get(Oi.__renderTarget);D.bindFramebuffer($.READ_FRAMEBUFFER,Ce.__webglFramebuffer),D.bindFramebuffer($.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let zr=0;zr<Bt;zr++)kr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,lt.get(k).__webglTexture,ot,ue+zr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,lt.get(j).__webglTexture,Pt,He+zr)),$.blitFramebuffer(Gt,le,Dt,Ct,kt,ye,Dt,Ct,$.DEPTH_BUFFER_BIT,$.NEAREST);D.bindFramebuffer($.READ_FRAMEBUFFER,null),D.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ot!==0||k.isRenderTargetTexture||lt.has(k)){let Ve=lt.get(k),Oi=lt.get(j);D.bindFramebuffer($.READ_FRAMEBUFFER,I),D.bindFramebuffer($.DRAW_FRAMEBUFFER,O);for(let Ce=0;Ce<Bt;Ce++)kr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.__webglTexture,ot,ue+Ce):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ve.__webglTexture,ot),we?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Oi.__webglTexture,Pt,He+Ce):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Oi.__webglTexture,Pt),ot!==0?$.blitFramebuffer(Gt,le,Dt,Ct,kt,ye,Dt,Ct,$.COLOR_BUFFER_BIT,$.NEAREST):we?$.copyTexSubImage3D(Ft,Pt,kt,ye,He+Ce,Gt,le,Dt,Ct):$.copyTexSubImage2D(Ft,Pt,kt,ye,Gt,le,Dt,Ct);D.bindFramebuffer($.READ_FRAMEBUFFER,null),D.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else we?k.isDataTexture||k.isData3DTexture?$.texSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,un,Le.data):j.isCompressedArrayTexture?$.compressedTexSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,Le.data):$.texSubImage3D(Ft,Pt,kt,ye,He,Dt,Ct,Bt,Ee,un,Le):k.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Pt,kt,ye,Dt,Ct,Ee,un,Le.data):k.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Pt,kt,ye,Le.width,Le.height,Ee,Le.data):$.texSubImage2D($.TEXTURE_2D,Pt,kt,ye,Dt,Ct,Ee,un,Le);D.pixelStorei($.UNPACK_ROW_LENGTH,bn),D.pixelStorei($.UNPACK_IMAGE_HEIGHT,xe),D.pixelStorei($.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei($.UNPACK_SKIP_ROWS,ei),D.pixelStorei($.UNPACK_SKIP_IMAGES,Di),Pt===0&&j.generateMipmaps&&$.generateMipmap(Ft),D.unbindTexture()},this.initRenderTarget=function(k){lt.get(k).__webglFramebuffer===void 0&&ut.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ut.setTextureCube(k,0):k.isData3DTexture?ut.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ut.setTexture2DArray(k,0):ut.setTexture2D(k,0),D.unbindTexture()},this.resetState=function(){T=0,P=0,N=null,D.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function u0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function h0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function f0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}function d0(i=new Date){let t=i.getFullYear(),e=i.getMonth();if(e===0&&i.getDate()<=6)return 4;if(e<10)return 0;let n=new Date(t,e,i.getDate()).getTime(),r=new Date(t,11,24),s=new Date(t,11,24-r.getDay()).getTime(),o=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=s-(4-l)*o-3600*1e3&&(a=l);return a}var pM=[],Vh=new Map,mM=0;function Lo(i){pM=i,Vh=new Map(i.flatMap(t=>t.items.map(e=>[gM(t.id,e.id),e]))),mM++}function gM(i,t){return`pack:${i}:${t}`}function Gh(i){return i.startsWith("pack:")}function vc(i){return Gh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Hh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function p0(i){return i==="robot_vacuum"||Gh(i)&&i.endsWith(":robot_vacuum")}function Fo(i){return i.z>.05}function m0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Fo(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var bM={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function g0(i){return Me(i)?.parts.find(t=>t.screen)}function Me(i){if(!Gh(i))return;let t=Vh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=bM[e];return r?Vh.get(`pack:${r}:${n.join(":")}`):void 0}function ln(i,t){let e=Me(t.type);if(t.mount_y!=null)return t.mount_y;let n=y0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return _c;if(b0.has(t.type))return Math.max(0,i.height-x0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ws(i,t)+v0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?ws(i,t):Ar(t)||ws(i,t)}}function ws(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>qt([t.x,t.z],n.points))?0:yc(i,t.x,t.z)}var Er={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Mn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Wh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Mn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Sc(i){return[...i.rooms,...Wh(i)]}function vM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function Do(i,t,e,n){return ji(i,t)+Er[t.type]-As(i,t,e,n)}var Xh=-.2,Mc={set:!1,level:Xh};function M0(i){let t=i?.settings.terrain??null;Mc={set:t?.level!=null,level:t?.level??Xh}}function Ts(i,t){return Mc.level}function Yh(i){return i.elevation>.3?0:Mc.set?Mc.level-i.elevation:Xh}function ji(i,t){return Yh(i)+(t.offset??0)}function As(i,t,e,n){return t.type==="pool"?0:vM(t,e,n)}function yc(i,t,e){let n=(i.outdoor??[]).filter(s=>!Mn(s.type)&&s.type!=="pool"&&qt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?Do(i,r,t,e):Yh(i)}function S0(i,t,e){let n=(i.outdoor??[]).filter(s=>!Mn(s.type)&&s.type!=="pool"&&qt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut);return r?Do(i,r,t,e):n.length?Math.max(...n.map(s=>Do(i,s,t,e))):Yh(i)}function wc(i){if(i.type!=="fence"||!i.gates?.length)return[];let t=i.points.length,e=[];for(let n of i.gates){if(n.edge<0||n.edge>=t||i.open&&n.edge===t-1)continue;let r=i.points[n.edge],s=i.points[(n.edge+1)%t],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<.4)continue;let a=Math.min(Math.max(.3,n.width),o-.1),l=Math.min(Math.max(a/2+.05,n.at),o-a/2-.05);e.push({gate:n,p:r,q:s,s0:l-a/2,s1:l+a/2})}return e}function Tc(i,t){return ji(i,t)+(t.above?T0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function yM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?T0(i):1.5}function qh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Mn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>qt(n,e.points)))}function w0(i,t){return!t.above&&!qh(i,t)?Ac(i,t)-.05:Tc(i,t)-yM(t)}function Ac(i,t){return Tc(i,t)-.15}function T0(i){return i.height&&i.height>.3?i.height:1.2}var _M={type:"none",pitch:35,overhang:.4},V3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{..._M}};var A0=.3;var E0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),_c=1.75;var b0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function x0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var R0=new Set(["stairs","stairs_u"]);function Ec(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function C0(i){return E0.has(i)||!!Me(i)?.light}var MM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ar(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var _0=.04,SM=1.2;function v0(i,t,e,n=0){let r=0;for(let s of i.furniture)!(MM.has(s.type)||Me(s.type)?.surface)||!qt([t,e],Ri(s))||s.type==="worktop"&&n>0&&s.h-_0>=SM&&n<=s.h-_0-.02||(r=Math.max(r,s.h));return r}var Rc=new Set(["wall_switch","wall_socket"]),wM=4;function P0(i){let t=(i.gangs??[]).slice(0,wM);return t.length?t:[{entity:null}]}function y0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var xM=new Set([...E0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var TM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],AM=["standard","bars","glass_wall","slide"];function Ei(i,t){return i.type==="door"?i.style&&TM.includes(i.style)?i.style:t?"front":"interior":i.style&&AM.includes(i.style)?i.style:"standard"}function I0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function L0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Pn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Jn(i){return Math.abs(Pn(i))}function di(i){let t=Pn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function F0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function D0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Ri(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function qt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Rr(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],pi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Un=(i,t)=>[i[0]*t,i[1]*t],Rs=(i,t)=>i[0]*t[0]+i[1]*t[1],Es=(i,t)=>i[0]*t[1]-i[1]*t[0],Oo=i=>Math.hypot(i[0],i[1]),In=i=>{let t=Oo(i)||1;return[i[0]/t,i[1]/t]},Zh=i=>[-i[1],i[0]],O0=i=>[i[1],-i[0]];function mi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),o=[],a=w=>{for(let C=0;C<o.length;C++)if(Math.abs(o[C][0]-w[0])<=n&&Math.abs(o[C][1]-w[1])<=n)return C;return o.push([w[0],w[1]]),o.length-1},l=[];for(let w of i){let C=w.points;if(C.length<3||Math.abs(Pn(C))<1e-6)continue;let L=Pn(C)>0,I=C.map(a);for(let O=0;O<C.length;O++){let T=I[O],P=I[(O+1)%C.length];T!==P&&l.push(L?{u:T,v:P,room:w.id,edge:O,forward:!0}:{u:P,v:T,room:w.id,edge:O,forward:!1})}}let c=s.map(w=>[a(w.a),a(w.b)]),h=new Set;for(let w of i){let C=w.points;C.length<3||(w.wall_splits??[]).forEach((L,I)=>{if(!L||I>=C.length)return;let O=C[I],T=ze(C[(I+1)%C.length],O),P=Oo(T);for(let N of L)N>n&&N<P-n&&h.add(a(pi(O,Un(T,N/P))))})}let u=[];for(let w of l){let C=o[w.u],L=o[w.v],I=ze(L,C),O=Oo(I),T=Un(I,1/O),P=[];for(let F=0;F<o.length;F++){if(F===w.u||F===w.v)continue;let B=ze(o[F],C),z=Rs(B,T);z<=n||z>=O-n||Math.abs(Es(T,B))<=n&&P.push({t:z,id:F})}P.sort((F,B)=>F.t-B.t);let N=[{t:0,id:w.u},...P,{t:O,id:w.v}];for(let F=0;F+1<N.length;F++){let B=N[F],z=N[F+1],G=w.forward?B.t:O-z.t,V=w.forward?z.t:O-B.t;u.push({u:B.id,v:z.id,room:w.room,edge:w.edge,t0:G,t1:V})}}let f=new Map;for(let w of u){let C=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,L=f.get(C);L||f.set(C,L=[]),L.push(w)}let d=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),m=new Map;for(let w of u){let C=`${w.room}:${w.edge}`;m.set(C,[...m.get(C)??[],w.t0].sort((L,I)=>L-I))}let b=w=>{let C=i.find(I=>I.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(C))return C;let L=m.get(`${w.room}:${w.edge}`)??[];return C[L.indexOf(w.t0)]??null},g=w=>{let C=w.map(b).filter(I=>typeof I=="number"&&I>0);if(C.length)return Math.min(...C);let L=w.map(I=>i.find(O=>O.id===I.room)?.ceiling_height);return L.every(I=>typeof I=="number"&&I>0)?Math.max(...L):void 0},p=w=>{let C=w.map(L=>i.find(I=>I.id===L.room)?.wall_thickness?.[L.edge]).filter(L=>typeof L=="number"&&L>0);return C.length?Math.max(...C):void 0},x=w=>{for(let C of w){let L=i.find(P=>P.id===C.room),I=L?.wall_slopes?.[C.edge];if(!L||!I)continue;let O=L.points[C.edge],T=L.points[(C.edge+1)%L.points.length];return{p:[O[0],O[1]],q:[T[0],T[1]],h0:Math.max(.05,I[0]),h1:Math.max(.05,I[1])}}},_=w=>w.some(C=>b(C)===0),v=w=>{let C=x(w);return C?{height:Math.max(C.h0,C.h1),slope:C}:{height:g(w)}},M=w=>{let C=w.map(L=>i.find(I=>I.id===L.room)?.wall_offsets?.[L.edge]).filter(L=>typeof L=="number"&&Math.abs(L)>1e-4);return C.length?Math.min(...C):void 0},S=[],A=[];for(let w of f.values()){let C=w[0],L=w.find(O=>O!==C&&O.u===C.v&&O.v===C.u&&O.room!==C.room);for(let O of w)O!==C&&O!==L&&O.room!==C.room&&r.push(`overlap:${C.room}:${O.room}`);if(_(L?[C,L]:[C])){L&&S.push([C.room,L.room]);continue}let I=M(L?[C,L]:[C]);if(L){let O=p([C,L])??t.interior;A.push({a:C.u,b:C.v,left:O/2,right:O/2,exterior:!1,roomLeft:C.room,roomRight:L.room,sources:[d(C),d(L)],...v([C,L]),...I!==void 0?{offset:I}:{}})}else A.push({a:C.u,b:C.v,left:0,right:p([C])??t.exterior,exterior:!0,roomLeft:C.room,roomRight:null,sources:[d(C)],...v([C]),...I!==void 0?{offset:I}:{}})}let y=w=>In(ze(o[w.b],o[w.a]));for(let w of A){if(w.exterior||w.free)continue;let C=new Set;for(let I of[w.a,w.b])for(let O of A)!O.exterior||O.free||O.a!==I&&O.b!==I||Math.abs(Es(y(w),y(O)))>1e-6||(O.roomLeft===w.roomLeft?C.add("left"):O.roomLeft===w.roomRight&&C.add("right"));if(C.size!==1)continue;let L=w.left+w.right;C.has("left")?(w.left=0,w.right=L):(w.left=L,w.right=0)}s.forEach((w,C)=>{let[L,I]=c[C];if(L===I)return;let O=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],T=i.find(G=>G.points.length>=3&&qt(O,G.points))?.id??null,P=(w.thickness??t.interior)/2,N=typeof w.height=="number"&&w.height>0?w.height:void 0,F=w.slope,B=F?{p:[w.a[0],w.a[1]],q:[w.b[0],w.b[1]],h0:Math.max(.05,F[0]),h1:Math.max(.05,F[1])}:void 0,z=typeof w.offset=="number"&&Math.abs(w.offset)>1e-4?w.offset:void 0;A.push({free:w.id,a:L,b:I,left:P,right:P,exterior:!1,roomLeft:T,roomRight:T,sources:[],...B?{height:Math.max(B.h0,B.h1),slope:B}:{height:N},...z!==void 0?{offset:z}:{}})}),A=RM(A,o,h);let R=PM(A,o);return{walls:A.map((w,C)=>{let L=o[w.a],I=o[w.b],O=R.get(`${C}:a`),T=R.get(`${C}:b`),P=IM([O.right,T.left,I,T.right,O.left,L],1e-6);return{id:EM(L,I),a:[L[0],L[1]],b:[I[0],I[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:P,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{},...w.offset!==void 0?{offset:w.offset}:{},...w.slope?{slope:w.slope}:{}}}),warnings:[...new Set(r)],open:S}}function EM(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function $h(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function RM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]],h=l.b!==o&&c.a!==o;if(l.b!==o&&(l=$h(l)),c.a!==o&&(c=$h(c)),l.a===c.b)continue;let u=In(ze(t[l.b],t[l.a])),f=In(ze(t[c.b],t[c.a]));if(Math.abs(Es(u,f))>1e-6||Rs(u,f)<=0||l.free||c.free||l.height!==c.height||(l.offset??0)!==(c.offset??0)||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:CM(l.sources,c.sources)},m=h?$h(d):d,b=n.filter((g,p)=>p!==a[0]&&p!==a[1]);b.push(m),n.length=0,n.push(...b),r=!0;break}}return n}function CM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function PM(i,t){let e=new Map;i.forEach((r,s)=>{let o=In(ze(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Un(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:pi(o,Un(Zh(c.d),c.left)),right:pi(o,Un(O0(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=pi(o,Un(Zh(h.d),h.left)),d=pi(o,Un(O0(u.d),u.right)),m=Es(h.d,u.d);if(Math.abs(m)<1e-4)continue;let b=Es(ze(d,f),u.d)/m,g=pi(f,Un(h.d,b));Oo(ze(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function IM(i,t){let e=i.filter((r,s)=>Oo(ze(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=ze(o,s),c=ze(a,o);if(Math.abs(Es(In(l),In(c)))<1e-7&&Rs(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Kh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=In(ze(r,n));return pi(n,Un(s,e))}function N0(i,t){let e=ze(i.b,i.a),n=Zh(In(e)),r=a=>t.some(l=>l.points.length>=3&&qt(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=pi(i.a,Un(e,a));r(pi(l,Un(n,i.left+.2)))&&s++,r(ze(l,Un(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function Cs(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=In(ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,pi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Ps(i,t,e){if(!t.wall)return LM(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Kh(e.room,0,t.offset);return{wall:n,s:Rs(ze(r,n.a),In(ze(n.b,n.a)))}}function Jh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=In(ze(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||Rs(In(ze(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function LM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Kh(t,e,n);return{wall:r,s:Rs(ze(o,r.a),In(ze(r.b,r.a)))}}return null}function Cc(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],m=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,p=m>-c.right-1e-4&&m<c.left+1e-4,x=Math.abs(m-(g+b*(o/2)));if(!p&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=p?g+b*(o/2):m,S=c.slope?Rr(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:S,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Qi=Math.PI/180;function Cr(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Qi;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Ic(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],s=e?-i.s:i.s;return[i.p[0]+n*i.c-r*s,i.p[1]+n*s+r*i.c]}function nn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),s=Cr(i),o=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=s?(l,c)=>Ic(s,o(l,c)):o;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function B0(i,t,e,n=1e-6){let[r,s]=bi(i,t,e),o=nn({...i,rotation:0});return r>=o.u0-n&&r<=o.u1+n&&s>=-n&&s<=o.w+n}function cn(i){let t=nn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=H0(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function Qh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var tf=.14;function k0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function ef(i,t){return cn(i).rh-tf>t+.01}function z0(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of Qh(i)){if(o.open||n!==void 0&&!ef(o,n))continue;let a=o.points&&o.points.length>=3?null:o.overhang_sides??null,l=p=>typeof a?.[p]=="number"?Math.max(0,a[p]):null,[c,h]=bi(o,t,e),u=nn({...o,rotation:0}),f=1e-6;if(c<u.u0-(l(2)??0)-f||c>u.u1+(l(3)??0)+f||h<-(l(0)??0)-f||h>u.w+(l(1)??0)+f||o.points&&o.points.length>=3&&!qt([t,e],o.points))continue;let d=o.shape==="flat"||o.shape==="parapet",m=Math.max(0,o.overhang??s),g=((d?null:zo(Pr(o,{a:l(0)??m,b:l(1)??m,u0:l(2)??m,u1:l(3)??m}),c,h))??cn(o).y(h))-tf;r=r===null?g:Math.max(r,g)}return r}function ko(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=U0([a[0]-o[0],a[1]-o[1]]),h=U0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],b=Math.hypot(d,m);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+m*u[1])/b,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*p,a[1]+m/b*t*p])}return r}function U0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function V0(i,t){if(i.points&&i.points.length>=3)return ko(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t,o=Cr(i);return[[e,r],[n,r],[n,s],[e,s]].map(a=>Ic(o,a))}function G0(i,t,e,n){let r=mi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let m=(o.get(s(d))??[]).find(b=>!l.has(b));if(!m||(l.add(m),d=s(m.a)===s(d)?m.b:m.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],m=c[(u+1)%c.length],b=(d[0]-f[0])*(m[1]-d[1])-(d[1]-f[1])*(m[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?ko(h,e):null}var No=Math.tan(30*Qi);function H0(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+No*(i-o+s))/(2*No))),h=a+(c-s)*No;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*No:f<=i-o?l+(i-o-f)*No:e+(i-f)*r}}function Pr(i,t){let e=nn(i),n=cn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(N,F)=>[N,F,n.y(F)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="pent"){let N=[h,u,f,d],F=[[0,n.y(0)],[r,n.y(r)]];return{faces:[N],rim:N,ridges:[[f,d]],gable:F,gables:[F,F]}}if(i.shape==="pyramid"){let N=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,N],[u,f,N],[f,d,N],[d,h,N]],rim:[h,u,f,d],ridges:[[h,N],[d,N],[u,N],[f,N]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let N=H0(r,i.eave_a,i.eave_b,m,b),F=[[0,n.y(0)],[N.vla,N.yla],[N.vr,N.rh],[r-N.vlb,N.ylb],[r,n.y(r)]],B=[a,N.vla,N.yla],z=[l,N.vla,N.yla],G=[a,r-N.vlb,N.ylb],V=[l,r-N.vlb,N.ylb],W=[a,N.vr,N.rh],K=[l,N.vr,N.rh];return{faces:[[h,u,z,B],[B,z,K,W],[W,K,V,G],[G,V,f,d]],rim:[h,u,z,K,V,f,d,G,W,B],ridges:[[W,K],[B,z],[G,V]],gable:F,gables:[F,F]}}let[g,p]=Lc(i)??["gable","gable"],x=nf(i,[g,p]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=p==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],S=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],R=g==="halfhip",E=p==="halfhip",w=[[h,u,...E?[A]:[],v,_,...R?[M]:[]],[_,v,...E?[y]:[],f,d,...R?[S]:[]]];g==="hip"&&w.push([d,h,_]),R&&w.push([S,M,_]),p==="hip"&&w.push([u,f,v]),E&&w.push([A,y,v]);let C=[h,u,...p==="gable"?[v]:E?[A,y]:[],f,d,...g==="gable"?[_]:R?[S,M]:[]],L=[[_,v]];g==="hip"&&L.push([h,_],[d,_]),R&&L.push([M,_],[S,_]),p==="hip"&&L.push([u,v],[f,v]),E&&L.push([A,v],[y,v]);let I=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],O=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],T=N=>N==="gable"?I:N==="halfhip"?O:null,P=[T(g),T(p)];return{faces:w,rim:C,ridges:L,gable:P[0]??P[1],gables:P}}function Lc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function nf(i,t){let e=nn(i),n=cn(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(h-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(h-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),m=Math.min(l-.1,(n.rh-h)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?m:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function zo(i,t,e){let n=null;for(let r of i.faces){if(!qt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],m=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/b;n=n===null?p:Math.min(n,p)}return n}function bi(i,t,e){let[n,r]=Ic(Cr(i),[t,e],!0),s=Math.min(i.x0,i.x1),o=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?o-n:n-s]}function jh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function tr(i,t){let[e,n]=Ic(Cr(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5||B0(o,e,n)&&(!s||r(o)<r(s))&&(s=o);return s}function rf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=nn(t),n=cn(t).rh,r=Pr(i,{u0:0,u1:0,a:0,b:0}),s=cn(i),o=b=>{let[g,p]=e.at(b,e.w/2),[x,_]=bi(i,g,p);return zo(r,x,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(o(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Cr(t),m={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?m.x1=f:m.x0=f:c===e.u1?m.z1=f:m.z0=f,m}function W0(i,t){let e=rf(i,t),n=nn(e),r=cn(e),s=Pr(i,{u0:0,u1:0,a:0,b:0}),o=cn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[b,g]=bi(i,d,m);return zo(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let R=n.w*y/40;r.y(R)>p+.02&&(x=Math.min(x,R),_=Math.max(_,R))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),S=bi(i,v[0],v[1]),A=bi(i,M[0],M[1]);h.push({u0:Math.min(S[0],A[0]),u1:Math.max(S[0],A[0]),v0:Math.min(S[1],A[1]),v1:Math.max(S[1],A[1])})}return h}function gi(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function sf(i,t){let e=gi(i,0,t.u0,!0),n=gi(i,0,t.u1,!1),r=gi(gi(i,0,t.u0,!1),0,t.u1,!0),s=gi(r,1,t.v0,!0),o=gi(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Fc(i,t,e){let n=nn(t),r=i.floors.flatMap(b=>b.rooms.filter(g=>g.points.length>=3&&b.elevation+b.height>t.base+.05)),s=i.settings.wall_exterior,o=r.map(b=>ko(b.points,Math.max(s,...(b.wall_thickness??[]).map(g=>g??0))+.01)),a=.35,l=(b,g)=>{if(r.some(x=>qt(b(a),x.points)))return!0;let p=b(-Math.min(.3,g/2));return o.some(x=>!qt(p,x)&&[.05,.2,a].some(_=>qt(b(_),x)))},c=[.15,.5,.85],h=c.map(b=>n.u0+(n.u1-n.u0)*b),u=c.map(b=>n.w*b),f=b=>b==="a"?h.some(g=>l(p=>n.at(g,-p),n.w)):b==="b"?h.some(g=>l(p=>n.at(g,n.w+p),n.w)):b==="u0"?u.some(g=>l(p=>n.at(n.u0-p,g),n.u1-n.u0)):u.some(g=>l(p=>n.at(n.u1+p,g),n.u1-n.u0)),d=t.overhang_sides??null,m=(b,g)=>{let p=d?.[b];return typeof p=="number"?Math.max(0,p):f(g)?0:e};return{a:m(0,"a"),b:m(1,"b"),u0:m(2,"u0"),u1:m(3,"u1")}}function X0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function FM(i){return cn(i).rh}function Y0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>tr(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>FM(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return B0(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Pc(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Uo(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let m=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(m)>Math.abs(o)&&(o=m,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],h=s[2]-t[2],u=(c*l-h*r)/o,f=(n*h-a*c)/o;return[u,f,t[2]-u*t[0]-f*t[1]]}var Is=i=>Math.abs(Jn(i.map(t=>[t[0],t[1]])));function Dc(i){let t=Pn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function DM(i,t){let e=Uo(i),n=Uo(t.poly);if(!e||!n||Is(t.poly)<1e-6)return null;let r=[...Dc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function q0(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=DM(s,n),a=o?s:[];for(let c of o??[])a=Pc(a,c);if(a.length<3||Is(a)<1e-6){r.push(s);continue}let l=s;for(let[c,h,u]of Dc(a)){let f=Pc(l,[-c,-h,-u]);if(f.length>=3&&Is(f)>1e-6&&r.push(f),l=Pc(l,[c,h,u]),l.length<3)break}}e=r}return e}function of(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Uo(s.poly);if(!o||Is(s.poly)<1e-6)continue;let a=Dc(s.poly).map(([d,m,b])=>[d*i[0]+m*i[1]+b,d*(t[0]-i[0])+m*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(s.depth)&&a.push([s.depth-c,-h]);let u=0,f=1;for(let[d,m]of a){if(Math.abs(m)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/m;m>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,m])=>[[d,Math.min(m,u)],[Math.max(d,f),m]]).filter(([d,m])=>m-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function $0(i,t){let e=Uo(i),n=Uo(t);if(!e||!n||Is(t)<1e-6)return null;let r=[...i];for(let c of Dc(t))r=Pc(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=s(h),d=s(u);if(f<0!=d<0){let m=f/(f-d);o.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m,h[2]+(u[2]-h[2])*m])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function Z0(i,t){let e=nn(i),n=s=>s.map(([o,a,l])=>{let[c,h]=e.at(o,a);return[c,h,l]}),r=[];for(let s of t){let o=gi(gi(gi(gi(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&Is(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of sf(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:tf})}return r}function af(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...bi(i,n,r),s]),depth:e.depth}))}function K0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:(tr(i,t)!==e||Bo(i,t))&&(tr(i,e)!==t||Bo(i,e))}function Bo(i,t){let e=tr(i,t);if(!e)return!1;let n=((t.rotation??0)-(e.rotation??0))%90+90;return Math.min(n%90,90-n%90)>.5}function J0(i,t){if(t.dormer||t.open||!Lc(t)||Cr(t)||tr(i,t))return null;let e=nn(t),n=cn(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||Cr(o)||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=cn(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=jh(o),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],m=jh(t),[b,g]=t.axis==="x"?[m.z0,m.z1]:[m.x0,m.x1];if(b<f-.05||g>d+.05)continue;let p=j0(t,o),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=p+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=p-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function j0(i,t){let e=nn(t),n=e.at(e.u0,cn(t).vr);return i.axis==="x"?n[0]:n[1]}function Q0(i,t){let e=j0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=jh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}var em=.8,tm=.3;function lf(i,t){return t.rooms.some(e=>e.points.length>=3)?G0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function cf(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=lf(i,t);return!!e&&e.some(([n,r])=>Ts(n,r)-t.elevation>-.15)}function OM(i,t,e){let n=null;for(let r of i.floors)if(!(r.elevation>.3))for(let s of r.outdoor??[]){if(s.points.length<3||s.type==="pool"||s.type==="balcony"||Mn(s.type)||!qt(e,s.points))continue;let o=r.elevation+Do(r,s,e[0],e[1])-t.elevation;n=n===null?o:Math.max(n,o)}return n}function nm(i,t,e,n,r,s){if(!e||!cf(i,t))return!1;let o=Ts(r[0],r[1])-t.elevation;return s&&(o=Math.max(o,OM(i,t,[r[0]+s[0]*tm,r[1]+s[1]*tm])??-1/0)),n<Math.min(t.height,o)-.05}function Ir(i,t){let e=Pn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let m=f/(f-d);n.push([h[0]+(u[0]-h[0])*m,h[1]+(u[1]-h[1])*m])}}}return n}function uf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var jn=1e-4;function hf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function im(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>jn&&a<1-jn&&l>-jn&&l<1+jn?a:null}function ff(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=jn||o>=1-jn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<jn?o:null}function NM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(im(n,r,o,a)!==null||ff(o,n,r)!==null||ff(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<jn)return!0}}return qt(i[0],t)||qt(t[0],i)}function UM(i){let t=i.map(s=>hf(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let m=u[d],b=u[(d+1)%u.length],g=im(l,c,m,b)??ff(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<jn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&qt(b,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<jn&&Math.hypot(p[0]-d[0],p[1]-d[1])<jn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&hf(o)>1e-6&&n.push(o)}return n}function rm(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&NM(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:UM(s))}function BM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function df(i,t,e=.03){return i.every(n=>qt(n,t)||t.some((r,s)=>BM(n,r,t[(s+1)%t.length])<=e))}function sm(i,t){let e=hf(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function mf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Ls=(i,t)=>!!i.fix&&i.fix.includes(t);function pf(i,t,e,n){let r=new Map,s=i.filter(c=>Ls(c,t)).map(c=>({p:c,e:mf(c,t,e)})),o=Math.min(.05,.1*e);for(let{p:c,e:h}of s)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||u[0]>a+(a===0?o:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:o)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of s)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Lr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function om(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Oc(n))return[Lr(t,n),Lr(e,n)];let r=n.side.get(i)??"lo",s=e-t;if(r==="mid")return[n.s/2-s/2,n.s/2+s/2];if(r==="free"){let o=Lr((t+e)/2,n);return[o-s/2,o+s/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Oc(i){return i.lo>0||i.hi>0}function Nc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:pf(i.parts,"w",r,t),d:pf(i.parts,"d",s,e),h:pf(i.parts,"h",o,n)},l={w:!Oc(a.w)&&i.parts.some(c=>Ls(c,"w")),d:!Oc(a.d)&&i.parts.some(c=>Ls(c,"d")),h:!Oc(a.h)&&i.parts.some(c=>Ls(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[v,M]=mf(c,x,_.s0);return Ls(c,x)&&!l[x]?om(c,v,M,_):[Lr(v,_),Lr(M,_)]},[u,f]=h("w"),[d,m]=h("d"),[b,g]=h("h"),p={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+m)/2/e-.5,d:(m-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(A,y,R,E,w)=>{let C=a[A],L=y??E,I=R??w,O=(L-I/2+.5)*C.s0,T=(L+I/2+.5)*C.s0;if(!Ls(c,A)||l[A])return[Lr(O,C),Lr(T,C)];let[P,N]=mf(c,A,C.s0),[F]=om(c,P,N,C),B=F-P;return[O+B,T+B]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,S]=x("d",c.tz,c.td,c.z,c.d);p.tx=(_+v)/2/t-.5,p.tw=(v-_)/t,p.tz=(M+S)/2/e-.5,p.td=(S-M)/e}return p})}var kM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var zM=["wall","pole","pillar","parcel","bank"];function lm(i){return kM.includes(i.variant??"")?i.variant:"bin240"}function cm(i){return zM.includes(i.variant??"")?i.variant:"wall"}var Ge=["#3a3f47","#3a3f47"],Fr=["#23262b","#23262b"],Qn=["#5a3b25","#5a3b25"],Oe=["#1f4fa8","#1f4fa8"],er=["#e3b616","#e3b616"],de=["#2f7d3b","#2f7d3b"],am={default:{rest:Ge,bio:Qn,paper:Oe,plastic:er,glass:de,garden:de,recycling:er,other:Ge},DE:{rest:Fr,bio:Qn,paper:Oe,plastic:er,glass:de,garden:de,recycling:er},AT:{rest:Ge,bio:Qn,paper:[Ge[0],"#c0262d"],plastic:er,glass:de,garden:de},CH:{rest:["#d8d8d8","#d8d8d8"],bio:de,paper:Oe,plastic:Ge,glass:de,garden:de},NL:{rest:Ge,bio:de,paper:Oe,plastic:["#3a3f47","#e57a1f"],glass:de,garden:de},BE:{rest:Ge,bio:de,paper:Oe,plastic:Oe,glass:de,garden:de},GB:{rest:Fr,bio:["#3a3f47","#5a3b25"],paper:Oe,plastic:Oe,glass:Fr,garden:Qn,recycling:Oe},US:{rest:Fr,bio:de,paper:Oe,plastic:Oe,glass:Oe,garden:de,recycling:Oe},CA:{rest:Fr,bio:de,paper:Oe,plastic:Oe,glass:Oe,garden:de,recycling:Oe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ge,bio:Qn,paper:[Ge[0],"#e3b616"],plastic:[Ge[0],"#e3b616"],recycling:[Ge[0],"#e3b616"],glass:de,garden:de},IT:{rest:Ge,bio:Qn,paper:Oe,plastic:er,glass:de,garden:de},ES:{rest:Ge,bio:Qn,paper:Oe,plastic:er,glass:de,garden:de},PT:{rest:Ge,bio:Qn,paper:Oe,plastic:er,glass:de,garden:de},DK:{rest:Fr,bio:de,paper:Oe,plastic:Ge,glass:de,garden:de},SE:{rest:Fr,bio:Qn,paper:Oe,plastic:Ge,glass:de,garden:de},NO:{rest:Ge,bio:Qn,paper:Oe,plastic:Ge,glass:de,garden:de},FI:{rest:Ge,bio:Qn,paper:Oe,plastic:Ge,glass:de,garden:de}},um="DE";function hm(){return um}function VM(i,t){return am[t]?.[i]??am.default[i]??Ge}function fm(i,t=um){let e=VM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var nr=zt(3662079,.95),gf=zt(3662079,1),Ci=zt(5995775,.34),dm=zt(5995775,.22),Uc=[-.55,.83],Jt=-1,Bc=16,ir=32,pm=48,bf=64,Qt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ot;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),this.uv&&t.setAttribute("uv",new Lt(this.uv,2)),this.tile&&t.setAttribute("tile",new Lt(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=nr,r=Jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Jt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Jt),this.seg(c,a,n,s)}geometry(){let t=new Ot;return t.setAttribute("position",new Lt(this.p,3)),t.setAttribute("color",new Lt(this.c,3)),t.setAttribute("fold",new Lt(this.f,1)),t}};function mm(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,b)=>m+(f.p[b]-m)*d),c:u.c.map((m,b)=>m+(f.c[b]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,b)=>m+(f.uv[b]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let b=u*3+m;for(let g=0;g<3;g++)i.p[b*3+g]=f[m].p[g],i.c[b*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[m].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv&&i.uv.push(...m.uv??[.5,.5]),i.tile&&i.tile.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(y=>y.p[1]>e+1e-6),m=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let b=i.f[u*3],g=(y,R)=>a(y,R,(e-y.p[1])/(R.p[1]-y.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],S=g(_,v),A=g(M,_);p===1?(l(u,[_,S,A],n),c([S,v,M],b),c([S,M,A],b)):(l(u,[_,S,A],b),c([S,v,M],n),c([S,M,A],n))}}function gm(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ie=Math.PI/180;function zt(i,t){let e=new tt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function GM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function rn(i,t=[]){let e=i.map(([n,r])=>new jt(n,r));return ho.triangulateShape(e,t.map(n=>n.map(([r,s])=>new jt(r,s))))}function bm(i,t,e,n,r,s,o){let a=new tt(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],b=t[(d+1)%4],g=e[d],p=e[(d+1)%4],x=b[0]-m[0],_=b[1]-m[1],v=Math.hypot(x,_);if(v<1e-6)continue;let S=.8+.28*((_/v*Uc[0]-x/v*Uc[1]+1)/2),A=(g[0]+p[0]-m[0]-b[0])/2*(-_/v)+(g[1]+p[1]-m[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),R=zt(s,l(n)*S).lerp(a,y),E=zt(s,l(r)*S).lerp(a,y);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],R,E,E),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[b[0],n,b[1]],R,E,R)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function xm(i,t,e,n,r,s,o,a,l,c){let h=new tt(l),u=[];for(let g=0;g<c;g++){let p=g/c*Math.PI*2;u.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(g,p)=>{let x=t(g,u[p%c].s);return[x[0],u[p%c].y,x[1]]},d=t(e,r),m=t(n,r),b=(g,p,x,_,v)=>{let M=(p[1]-g[1])*(x[2]-g[2])-(p[2]-g[2])*(x[1]-g[1]),S=(p[2]-g[2])*(x[0]-g[0])-(p[0]-g[0])*(x[2]-g[2]),A=(p[0]-g[0])*(x[1]-g[1])-(p[1]-g[1])*(x[0]-g[0]);M*_[0]+S*_[1]+A*_[2]<0?i.tri(g,x,p,v):i.tri(g,p,x,v)};for(let g=0;g<c;g++){let p=(g+.5)/c*Math.PI*2,x=zt(a,.62+.4*Math.max(0,Math.cos(p))),_=t((e+n)/2,r+Math.sin(p)*o),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(p)*o,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,p,x]of[[e,m,d],[n,d,m]]){let _=t(g,r),v=[_[0],s,_[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let S=0;S<c;S++)b(v,f(g,S),f(g,S+1),M,h)}}function Ie(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??Jt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(o.holes??[]).map(m=>GM(m)>0?[...m].reverse():m),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:rn(t,u);if(o.topFace!==!1){let m=new tt(s);for(let[b,g,p]of d){let x=f[b],_=f[g],v=f[p];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=zt(r,.55);for(let[b,g,p]of d){let x=f[b],_=f[g],v=f[p];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...u])for(let b=0;b<m.length;b++){let g=m[b],p=m[(b+1)%m.length],x=p[0]-g[0],_=p[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||o.skipSide?.(g,p))continue;let S=.8+.28*((_/v*Uc[0]-x/v*Uc[1]+1)/2),A=a(g),y=a(p),R=zt(r,h(e)*S),E=zt(r,h(A)*S),w=zt(r,h(y)*S);i.tri([g[0],e,g[1]],[g[0],A,g[1]],[p[0],y,p[1]],R,E,w,void 0,c),i.tri([g[0],e,g[1]],[p[0],y,p[1]],[p[0],e,p[1]],R,w,R,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},xt=zt(5995775,.3),Ut=zt(5995775,.17),te=zt(3662079,.45),sr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=yf(n)}rotated(t,e,n){let r=n*ie,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ie(this.buf,xf(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==xf(l)&&(l.reverse(),c.reverse()),bm(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,b=t==="x"?n:e,g=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(xm(this.buf,g,m-o/2,m+o/2,b,d,f,l,c,h),u)for(let p of[m-o/2,m+o/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(p,b+Math.sin(_)*f),g(p,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ie(this.buf,xf(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=xt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Jt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function yf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function xf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Dr(i,t,e,n,r,s,o=U.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function Go(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Ut)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,te);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,te)}}}function vm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Dr(i,t,e,.07,.05,.05,U.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,U.fabric,U.fabricTop,.04,xt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,U.fabric,U.fabricTop,xt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,xt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,xt);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let b=s+c+d*m+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,U.cushion)}}function ym(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],b=(y,R)=>i.loft([y-.015,y+.015,R-.015,R+.015],[y-.025,y+.025,R-.025,R+.025],0,.07,U.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let y of m)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,xt);for(let y of m){let[R,E]=y<0?[s+.02,s+c]:[o-c,o-.02];i.pad(R,E,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,xt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,U.fabric,U.fabricTop,xt);for(let y of m)y<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,xt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,xt);for(let y of m){let[R,E]=y<0?[s+h,s+c]:[o-c,o-h];i.pad(R,E,f-.08,d,l-u,l,U.fabric,U.fabricTop,.04,xt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,xt);let g=s+h,p=r?o-h:o-u,x=Math.max(1,Math.round((p-g)/.62)),_=(p-g)/x;for(let y=0;y<x;y++){let R=g+_*y+.02,E=R+_-.04;i.pad(R,E,f-.08,f+.05,a+h+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([R+.01,E-.01,a+h*.55,a+h+.14],[R+.03,E-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,U.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let S=Math.max(1,Math.round((M-v)/.62)),A=(M-v)/S;for(let y of m)for(let R=0;R<S;R++){let E=v+A*R+.02,w=E+A-.04;y<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,E,w,U.cushion,U.cushion,.04),i.loft([s+h*.55,s+h+.14,E+.01,w-.01],[s+h*.4,s+h*.4+.06,E+.03,w-.03],f+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,E,w,U.cushion,U.cushion,.04),i.loft([o-h-.14,o-h*.55,E+.01,w-.01],[o-h*.4-.06,o-h*.4,E+.03,w-.03],f+.03,n*.93,U.cushion))}}function HM(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Dr(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,r+.06,s,U.wood,U.woodTop,xt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,xt),i.box(o,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Ut);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,U.cushion,U.fabricTop,.025,Ut),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let m=o+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],[m+.03,m+f-.03,b,b+g],c,c+.06,U.whiteTop),i.loft([m+.03,m+f-.03,b,b+g],[m+.03+p,m+f-.03-p,b+p*.5,b+g-p*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Ut)}}function WM(i,t,e,n){let r=Math.min(.46,n*.52);Dr(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,xt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,xt)}function XM(i,t,e,n){Dr(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,te),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function YM(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,U.wood,U.woodTop,xt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,xt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Ut);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,te);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,te),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function rr(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Go(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function qM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,xt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,xt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Ut),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=h+.006,c++}}}}function $M(i,t,e,n){let r=Math.max(1,Math.round(t/.6));rr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,xt)}function ZM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,xt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ut);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,te),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,te)}var kc=(i,t)=>zt(parseInt(i.slice(1),16),t).getHex(),Vo=!1;function wm(i){Vo=i}function Tm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function KM(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new tt(f).toArray());return kc(f,d>.05?Math.max(1,.62/d):1)},a=Vo?o(s[0]):kc(s[0],.55),l=Vo?o(s[1]):kc(s[1],.8),c=kc(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Ut),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,xt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Ut),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,xt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Ut),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Ut);return}if(r==="bin1100"){for(let d of[-1,1])for(let m of[-1,1])i.cyl(d*(t/2-.12),m*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,xt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Ut),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Ut);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,xt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Ut),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,te),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ut))}function JM(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?U.metal:U.white,o?U.metal:U.whiteTop,xt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ut),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,U.white,U.whiteTop,Ut),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ut);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,U.metal,U.metal,Ut),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ut);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,U.dark,U.dark,14,Ut),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,xt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,xt)}}}function jM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,xt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Ut)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,U.white,U.whiteTop,24,xt),i.cyl(0,0,s*.5,n,n+.01,U.metal,U.metal,12)}function QM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,.05,xt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,U.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,U.metal,U.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,U.white,U.whiteTop,20,xt),i.cyl(0,0,s*.85,n-.05,n,U.white,U.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,U.dark,U.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,U.dark)}function t2(i,t,e,n,r){let s=U.metal,o=zt(U.metal,1.25).getHex(),a=zt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Ut),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,xt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,xt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Ut),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,xt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,xt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Ut),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,xt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Ut),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,xt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,xt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function e2(i,t,e,n){let r=e/2-Am;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,xt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Ut),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Ut))}var Am=.06;function Em(i,t,e,n){let r=t.rotation*ie,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(I,O,T)=>[t.x+I*s-T*o,O,t.z+I*o+T*s],c=(I,O,T,P,N)=>{i.tri(I,O,T,N),i.tri(I,T,P,N),i.tri(I,T,O,N),i.tri(I,P,T,N)},h=(I,O,T,P)=>{let N=l(I[0],I[1],I[2]),F=l(O[0],O[1],O[2]),B=F[0]-N[0],z=F[1]-N[1],G=F[2]-N[2],V=Math.hypot(B,z,G)||1,W=[B/V,z/V,G/V],K=Math.abs(W[1])>.9?[1,0,0]:[0,1,0],nt=[W[1]*K[2]-W[2]*K[1],W[2]*K[0]-W[0]*K[2],W[0]*K[1]-W[1]*K[0]],X=Math.hypot(nt[0],nt[1],nt[2])||1,Y=[nt[0]/X*T,nt[1]/X*T,nt[2]/X*T],et=[W[1]*Y[2]-W[2]*Y[1],W[2]*Y[0]-W[0]*Y[2],W[0]*Y[1]-W[1]*Y[0]],Z=[[1,1],[-1,1],[-1,-1],[1,-1]],J=(rt,ft)=>[rt[0]+Y[0]*Z[ft][0]+et[0]*Z[ft][1],rt[1]+Y[1]*Z[ft][0]+et[1]*Z[ft][1],rt[2]+Y[2]*Z[ft][0]+et[2]*Z[ft][1]];for(let rt=0;rt<4;rt++){let ft=(rt+1)%4;i.tri(J(N,rt),J(F,rt),J(F,ft),P),i.tri(J(N,rt),J(F,ft),J(N,ft),P)}},u=(I,O,T,P,N,F,B,z)=>{c(l(I,P,N),l(O,P,N),l(O,P,F),l(I,P,F),z),c(l(I,T,F),l(O,T,F),l(O,P,F),l(I,P,F),B),c(l(I,T,N),l(O,T,N),l(O,T,F),l(I,T,F),B),c(l(I,T,N),l(I,T,F),l(I,P,F),l(I,P,N),B),c(l(O,T,N),l(O,T,F),l(O,P,F),l(O,P,N),B)},f=new tt(U.body),d=new tt(U.bodyTop),m=new tt(U.accent),b=new tt(1929098),g=new tt(995141),p=(I,O,T,P,N)=>{let F=(B,z,G)=>[B[0]+(z[0]-B[0])*G,B[1]+(z[1]-B[1])*G,B[2]+(z[2]-B[2])*G];for(let B=0;B<N;B++){let z=F(I,O,B/N),G=F(I,O,(B+1)/N),V=F(T,P,(B+1)/N),W=F(T,P,B/N);c(l(z[0],z[1],z[2]),l(G[0],G[1],G[2]),l(V[0],V[1],V[2]),l(W[0],W[1],W[2]),B%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),S=(t.awning_pitch??12)*Math.PI/180,A=(I,O)=>{t.awning_valance!==!1&&p([-x+.04,I,O+.01],[x-.04,I,O+.01],[-x+.04,I-.2,O+.01],[x-.04,I-.2,O+.01],M)},y=t.variant??"arm";if(y==="side"){let I=e,O=.05,T=0,P=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,I+.05,T-.05,T+.05,f,d),u(x-.06,x,0,I+.05,T-.03,T+.03,f,d),a>.01&&p([-x+.1,I,T],[-x+.1,O,T],[P,I,T],[P,O,T],Math.max(4,Math.round((I-O)/.3))),h([P,O,T],[P,I,T],.02,m);return}if(y==="vertical"){let I=_,O=Math.min(t.d/2,_+v);u(-x,x,e,e+v,I,O,f,d);let T=(I+O)/2;for(let N of[-x+.02,x-.02])h([N,.02,T],[N,e,T],.02,m);let P=e-a*Math.max(0,e-.04);a>.01&&p([-x+.04,e,T],[x-.04,e,T],[-x+.04,P,T],[x-.04,P,T],M),h([-x+.03,P,T],[x-.03,P,T],.025,m);return}if(y==="pergola"){let I=t.d/2-.05,O=e+v,T=O-(I-_)*Math.tan(S);u(-x,x,e,O,_,_+v,f,d);for(let F of[-x+.05,x-.05])h([F,O,_+v],[F,T,I],.035,m),h([F,0,I],[F,T,I],.045,f);h([-x+.05,T,I],[x-.05,T,I],.035,m);let P=_+v+a*(I-_-v),N=O-(P-_)*Math.tan(S)+.04;a>.01&&p([-x+.08,O+.04,_+v],[x-.08,O+.04,_+v],[-x+.08,N,P],[x-.08,N,P],M),h([-x+.08,N,P],[x-.08,N,P],.025,m);return}let R=_,E=_+v;u(-x,x,e,e+v,R,E,f,d);let w=[E-.02,e+v*.35];if(y==="drop"){let I=Math.max(.3,t.d-v),O=[E,w[1]-I],T=a*(Math.PI/2+S),P=[O[0]+Math.sin(T)*I,O[1]+Math.cos(T)*I];for(let N of[-x+.08,x-.08])h([N,O[1],O[0]],[N,P[1],P[0]],.018,m);a>.01&&p([-x+.04,w[1],w[0]],[x-.04,w[1],w[0]],[-x+.04,P[1],P[0]],[x-.04,P[1],P[0]],M),h([-x+.02,P[1],P[0]],[x-.02,P[1],P[0]],.03,m),a>.05&&A(P[1],P[0]);return}let C=Math.max(0,t.d-v)*a,L=[w[0]+C,w[1]-C*Math.tan(S)];if(C>.01){p([-x+.04,w[1],w[0]],[x-.04,w[1],w[0]],[-x+.04,L[1],L[0]],[x-.04,L[1],L[0]],M);let I=Math.max(.3,(t.d-v)/2+.05);for(let O of[-1,1]){let T=O*(x-.12),P=[T,e+.02,E-.04],N=[T,L[1]-.02,L[0]],F=Math.hypot(N[2]-P[2],N[1]-P[1]),B=Math.sqrt(Math.max(0,I*I-(F/2)**2)),z=[T-O*Math.min(B,x-.15),(P[1]+N[1])/2,(P[2]+N[2])/2];h(P,z,.018,m),h(z,N,.018,m)}}h([-x+.02,L[1],L[0]],[x-.02,L[1],L[0]],.03,m),C>.05&&A(L[1],L[0])}function Rm(i,t,e,n,r){let s=i.p.length;n2(i,t,e,n,r),t.mirror&&Sf(i,s)}function n2(i,t,e,n,r){let s=t.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],h=e+.05,u=e+t.h-.02,f=new tt(.75,.1,.14),d=new tt(U.dark),m=new tt(U.accent),b=t.w/2-.006,g=(v,M,S)=>{let A=S/p,y=new tt(2043212).lerp(f,A),R=new tt(U.body).lerp(f,A*.8),E=Math.cos(S),w=Math.sin(S),C=(O,T)=>c(v+M*(O*E-T*w),t.d/2+O*w+T*E),L=(O,T,P,N)=>{let[F,B,z,G]=O;i.tri([F[0],T,F[1]],[B[0],T,B[1]],[z[0],P,z[1]],N),i.tri([F[0],T,F[1]],[z[0],P,z[1]],[G[0],P,G[1]],N)},I=(O,T,P,N,F,B,z,G=z)=>{let V=[C(O,B),C(T,B),C(T,F),C(O,F)];L([V[0],V[1],V[1],V[0]],P,N,G),L([V[3],V[2],V[2],V[3]],P,N,z),L([V[0],V[3],V[3],V[0]],P,N,z),L([V[1],V[2],V[2],V[1]],P,N,z),L([V[0],V[1],V[2],V[3]],N,N,z),L([V[3],V[2],V[1],V[0]],P,P,z)};return I(0,b,h,u,-Am,0,R,y),I(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),I},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function i2(i,t,e,n){rr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,xt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,te)}}function r2(i,t,e,n){rr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,xt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,xt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,te),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function s2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,xt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,te),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function o2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,xt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,te),i.seg(r,n,s,o,n,a,te),i.seg(o,.05,a,o,n,a,te);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,te)}function a2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,xt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,xt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function l2(i,t,e,n){rr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,xt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,te),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,te)}function c2(i,t,e,n){rr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,U.dark,U.dark,te)}function u2(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,U.pot,U.pot,10,xt),i.cyl(0,0,r*.08,s,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,U.plant,U.plantTop,8,a===o-1?Ut:null)}}function h2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,xt)}function f2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,U.wood,U.woodTop),i.seg(-t/2,d,u,t/2,d,u,xt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,xt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Ut);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),te);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Ut)}}function d2(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=Ec(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,m=t/2,b=-e/2+l;for(let A=0;A<s;A++){let y=e/2-c*A,R=h*(A+1);i.box(u,f,0,R,y-c,y,U.wood,U.woodTop),i.seg(u,R,y,f,R,y,xt)}i.seg(u,0,e/2,u,h,e/2,xt);let g=h*r,p=.2;i.box(u,f,0,g,-e/2,b,U.wood,U.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,b,U.wood,U.woodTop),i.seg(u,g,b,f,g,b,xt);for(let A=0;A<o;A++){let y=b+c*A,R=h*(r+1+A);i.box(d,m,Math.max(0,R-h-p),R,y,y+c,U.wood,U.woodTop),i.seg(d,R,y,m,R,y,xt)}i.seg(u,h,e/2,u,g,b,Ut),i.seg(m,g,b,m,n,b+c*(o-1),Ut);let x=.9,_=f-.03,v=d+.03,M=b-.03,S=Math.max(1,o-4);i.seg(_,h+x,e/2-c/2,_,g+x,M,te),i.seg(_,g+x,M,v,g+x,M,te),i.seg(v,g+x,M,v,h*(r+S)+x,b+c*(S-.5),te);for(let A=0;A<s;A+=3){let y=e/2-c*(A+.5);i.seg(_,h*(A+1),y,_,h*(A+1)+x,y,Ut)}for(let A of[_,v])i.seg(A,g,M,A,g+x,M,Ut);for(let A=2;A<S;A+=3){let y=b+c*(A+.5);i.seg(v,h*(r+1+A),y,v,h*(r+1+A)+x,y,Ut)}}function p2(i,t,e,n){Dr(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,xt),Go(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function m2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,xt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Ut)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,te)}}function g2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,xt),Go(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,xt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,xt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function _m(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,xt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,xt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Ut),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,xt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,xt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Ut))}function b2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Ut),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,xt)}function x2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,xt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,xt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function v2(i,t,e,n){Dr(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,xt)}function y2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,xt),Go(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function _2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,te),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,te);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Ut);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,te),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,te)}function M2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,xt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),Go(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,xt)}function S2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,te),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,xt)}function Mm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,xt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Ut),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,te);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,te),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Ut)}}function w2(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,xt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Ut),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,xt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Ut)}function T2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,xt)}function A2(i,t,e,n){Dr(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,xt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Ut)}function E2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,te)}function R2(i,t,e,n){let r=_f;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,xt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ut)}}function C2(i,t,e,n){let r=Mf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,xt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,xt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ut),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,te)}function Fs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,te)}}function P2(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,xt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,te),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,xt),Fs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,te);for(let a of[-1,1])Fs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,xt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,te);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ut)}function I2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,xt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Ut);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,xt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,te)}}function L2(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,s,n*.08,n*.78,U.dark,U.body,18,xt),i.cyl(0,0,s*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,xt),Fs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,U.dark,U.metal,16,xt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,te)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,U.dark,U.body)}function F2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,xt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;Fs(i,s,o,r,e/2+.004,24),Fs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Ut),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Ut),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,te);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ut)}function D2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,xt);for(let s of[-1,1])Fs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,te);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Ut)}function O2(i,t,e,n){let r=A0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,xt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function N2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,xt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,te),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ut)}function U2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,xt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,te)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function B2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,xt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ut),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ut),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,te)}function k2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,xt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,te),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ut);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,xt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,te),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,xt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,te)}}var _f=.12,Mf=2.05;function Cm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function wf(i,t){let e=z2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function z2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=g0(i.type);if(s){let l=t?ln(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?ln(t,i)-Ar(i):0,a=V2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function V2(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?ln(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:_f+.02,y1:_f+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Mf+.015,y1:Mf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function G2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=Me(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function H2(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new tt(1-r,1-r,1-r),c=new tt(1,1,1),h=o+.003;if(s){let b=v=>[v[0],h,v[1]],p=(v,M,S)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*S),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let M=b(p(v,e/2,n/2)),S=b(p(v+1,e/2,n/2)),A=b(p(v,e/2+a,n/2+a)),y=b(p(v+1,e/2+a,n/2+a));i.tri(_,M,S,l),i.tri(M,A,y,l,c,c),i.tri(M,y,S,l,c,l)}yf(t)&&Sf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],m=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}yf(t)&&Sf(i,m)}function zc(i,t,e,n,r=0,s=!1){W2(i,t,e,n,r,s)}function Sf(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function W2(i,t,e,n,r,s=!1){let o=Me(n.type)?0:r-Ar(n);if(Me(n.type)||Math.abs(o)<.001)return Sm(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;Sm(i,t,r<.05?e:new Qt,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=o;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=o;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=o}function Sm(i,t,e,n,r,s=!1){let o=n.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new sr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),m=Math.max(.005,n.h);switch(n.type){case"sofa":vm(u,f,d,m,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":vm(u,f,d,m,1);break;case"sofa_l":ym(u,f,d,m,!1);break;case"sofa_u":ym(u,f,d,m,!0);break;case"bed":HM(u,f,d,m);break;case"chair":WM(u,f,d,m);break;case"table":XM(u,f,d,m);break;case"desk":YM(u,f,d,m);break;case"nightstand":rr(u,f,d,m,1,m*.72,!0),u.seg(-f/2,m*.5,d/2-.02,f/2,m*.5,d/2-.02,Ut);break;case"wardrobe":rr(u,f,d,m,Math.max(2,Math.round(f/.5)),m*.5);break;case"shelf":qM(u,f,d,m);break;case"kitchen":$M(u,f,d,m);break;case"fridge":ZM(u,f,d,m);break;case"fridge_smart":e2(u,f,d,m);break;case"waste_bin":{let b=i.c.length;KM(u,f,d,m,lm(n),fm(n,hm())),Vo&&Tm(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;t2(u,f,d,m,cm(n));let p=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;if(p>0)return;break}case"wifi_ap":jM(u,f,d,m,n.variant==="wall");return;case"water_heater":if(QM(u,f,d,m,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;JM(u,f,d,m,P0(n).length,n.type==="wall_socket",n.variant==="outdoor");let p=Ar(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=p;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=p;return}case"awning":return;case"stove":i2(u,f,d,m);break;case"sink":r2(u,f,d,m);break;case"bathtub":s2(u,f,d,m);break;case"shower":o2(u,f,d,m);break;case"wc":a2(u,f,d,m);break;case"washbasin":l2(u,f,d,m);break;case"tv_board":c2(u,f,d,m);break;case"plant":u2(u,f,d,m);break;case"rug":h2(u,f,d);return;case"stairs":f2(u,f,d,m);break;case"stairs_u":d2(u,f,d,m);break;case"stairwell":return;case"sideboard":p2(u,f,d,m);break;case"dresser":m2(u,f,d,m);break;case"tall_cabinet":rr(u,f,d,m,1,m*.5);break;case"coat_rack":g2(u,f,d,m);break;case"bench":_m(u,f,d,m,!1);break;case"corner_bench":_m(u,f,d,m,!0);break;case"bar_stool":b2(u,f,d,m);break;case"office_chair":x2(u,f,d,m);break;case"stool":v2(u,f,d,m);break;case"kitchen_wall":y2(u,f,d,m);return;case"kitchen_tall":_2(u,f,d,m);break;case"island":M2(u,f,d,m);break;case"worktop":u.box(-f/2,f/2,Math.max(0,m-.04),m,-d/2,d/2,U.whiteTop,U.whiteTop,xt);return;case"dishwasher":S2(u,f,d,m);break;case"washer":Mm(u,f,d,m,!1);break;case"dryer":Mm(u,f,d,m,!0);break;case"bunk_bed":w2(u,f,d,m);break;case"table_round":T2(u,f,d,m);break;case"coffee_table":A2(u,f,d,m);break;case"tv_wall":E2(u,f,d,m);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let p=0;p<4;p++)u.seg(g[p][0],.012,g[p][1],g[(p+1)%4][0],.012,g[(p+1)%4][1],Ut);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,xt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,xt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,m,-d/2,-d/2+d*.3,U.white,U.whiteTop,xt),u.box(-f*.2,f*.2,m*.5,m*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":R2(u,f,d,m);return;case"ac_unit":C2(u,f,d,m);return;case"inverter":P2(u,f,d,m,n.variant??null);return;case"grid_point":N2(u,f,d,m);break;case"wallbox":U2(u,f,d,m);return;case"pool_pump":I2(u,f,d,m);break;case"pool_filter":L2(u,f,d,m,n.variant??null);break;case"pool_heat_pump":F2(u,f,d,m);break;case"pool_dosing":D2(u,f,d,m);break;case"pool_valve":O2(u,f,d,m);return;case"meter":B2(u,f,d,m);return;case"home_battery":if(k2(u,f,d,m,n.variant??null),n.variant==="wall")return;break;default:{let b=Me(n.type);if(b){let g=vc(n.type),p=g?x=>Hh(g,x):p0(n.type)&&!s?Fo:null;if(Ho(u,b,f,d,m,r,null,null,p),r>.05)return}else u.box(-f/2,f/2,0,m,-d/2,d/2,U.body,U.bodyTop,xt)}}H2(e,h,f,d,n.type==="plant"?.35:.5,G2(n),Math.min(0,r))}function Pm(i){return!!Me(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function vf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Ho(i,t,e,n,r,s,o,a=null,l=null){let c=!!a,h=t.parts.some(u=>u.advent)?d0():4;for(let u of Nc(t,e,n,r)){if(l?.(u)||u.advent&&u.advent>h||a&&!a(u))continue;let f=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,d=f.glow&&o!==null,m=d?o:vf(f.color,!1)??U.body,b=d?o:vf(f.top,!1)??vf(f.color,!0)??zt(m,1.25).getHex(),g=s+f.y*r,p=s+Math.min(r,(f.y+f.h)*r),x=i.colors.length,_=f.edges==="glow"?nr:f.edges==="faint"?Ut:f.edges?xt:null,v=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))v.lyingCyl(f.axis,f.x*e,f.z*n,g,p,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,m,b,14,_);else if(f.shape==="cyl")v.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,g,p,m,b,14,_);else if(f.shape==="loft"){let M=f.tx??f.x,S=f.tz??f.z,A=f.tw??f.w,y=f.td??f.d;v.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(M-A/2)*e,(M+A/2)*e,(S-y/2)*n,(S+y/2)*n],g,p,m,b,_)}else v.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,g,p,(f.z-f.d/2)*n,(f.z+f.d/2)*n,m,b,_);Vo&&!d&&!c&&(f.color?.startsWith("#")||f.top?.startsWith("#"))&&Tm(i.colors,x)}}function Im(i,t,e,n,r,s){let o=s*ie,a=Math.cos(o),l=Math.sin(o),c=(m,b)=>[e+m*a-b*l,r+m*l+b*a],h=new sr(i,new Ne,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Lm(i,t,e,n,r){let s=m0(t)*n,o=new sr(i,new Ne,(c,h)=>[c,h-s]);Ho(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Fo);let a=0,l=0;for(let c of Nc(t,e,n,r)){if(!Fo(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Wo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ie,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Ho(new sr(i,new Ne,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Fm(i,t,e,n,r,s){let o=X2(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ie,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Ho(new sr(i,new Ne,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function X2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Hh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function Dm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of Nc(i,n,r,s)){if(!g.glow)continue;let p=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*s,v=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));o+=M,a+=p*M,l+=(_+v)/2*M,c+=x*M}if(!o)return null;let h=a/o,u=c/o,f=t.rotation*ie,d=Math.cos(f),m=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*m,e+l/o,t.z+b*h*m+u*d]}function Vc(i,t,e,n,r){let s=e.rotation*ie,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Ho(new sr(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var Y2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function q2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*m-n[0],l[1]+f*m-n[1])<.4}))}var $2=3229309,Z2=5995775;function K2(i,t){let{p:e,q:n}=t,r=Math.hypot(n[0]-e[0],n[1]-e[1])||1,s=[-(n[1]-e[1])/r,(n[0]-e[0])/r],o=(t.s0+t.s1)/2/r,a=[e[0]+(n[0]-e[0])*o,e[1]+(n[1]-e[1])*o],l=[a[0]+s[0]*.05,a[1]+s[1]*.05],c=di(i.points),u=((i.open?(c[0]-a[0])*s[0]+(c[1]-a[1])*s[1]>0:qt(l,i.points))?1:-1)*(t.gate.outward?-1:1);return[s[0]*u,s[1]*u]}function Nm(i,t,e,n,r){let{gate:s,p:o,q:a,s0:l,s1:c}=n,h=Math.hypot(a[0]-o[0],a[1]-o[1])||1,u=[(a[0]-o[0])/h,(a[1]-o[1])/h],f=K2(e,n),d=y=>[o[0]+u[0]*y,o[1]+u[1]*y],m=d((l+c)/2),b=ji(t,e)-As(t,e,m[0],m[1]),g=Math.max(.4,(e.height??Er.fence)-.05),p=Math.min(1,Math.max(0,r)),x=(y,R,E,w,C,L)=>{let I=[-R[1]*(w/2),R[0]*(w/2)],O=[y[0]+R[0]*E,y[1]+R[1]*E];Ie(i,Ds([[y[0]+I[0],y[1]+I[1]],[O[0]+I[0],O[1]+I[1]],[O[0]-I[0],O[1]-I[1]],[y[0]-I[0],y[1]-I[1]]]),b+C,b+L,$2,Z2)},_=(y,R,E)=>{if(E<.1)return;let w=[y[0]+R[0]*.03,y[1]+R[1]*.03],C=E-.06;x(w,R,C,.04,.08,.15),x(w,R,C,.04,g-.07,g);let L=Math.max(1,Math.round(C/.12));for(let I=0;I<=L;I++){let O=Math.min(C-.03,C*I/L);x([w[0]+R[0]*O,w[1]+R[1]*O],R,.03,I===0||I===L?.05:.025,.08,g)}},v=(y,R)=>[y[0]*Math.cos(R)+f[0]*Math.sin(R),y[1]*Math.cos(R)+f[1]*Math.sin(R)],M=p*Math.PI*.5,S=c-l,A=s.kind??"swing";if(A==="slide"){let y=s.flip?1:-1,R=d(l+y*p*S);_([R[0]+f[0]*.08,R[1]+f[1]*.08],u,S)}else A==="double"?(_(d(l),v(u,M),S/2),_(d(c),v([-u[0],-u[1]],M),S/2)):s.flip?_(d(c),v([-u[0],-u[1]],M),S):_(d(l),v(u,M),S)}function Tf(i,t){return t.type==="pool"?Ac(i,t):ji(i,t)+(Mn(t.type)?.01:Er[t.type])}function Ds(i){return Pn(i)>=0?i:[...i].reverse()}function J2(i,t){let e=i[t];if(Mn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>qt(o,e.points))&&n.push(Ds(s.points))}return n}function Om(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,Ds([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let m=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Jt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Jt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Jt)},p=new tt(a),x=new tt(zt(o,.9)),_=new tt(zt(o,.6));g([m(s,1),b(s,1),b(s,-1),m(s,-1)],p),g([m(r,1),b(r,1),b(r,-1),m(r,-1)],_),g([m(r,1),b(r,1),b(s,1),m(s,1)],x),g([m(r,-1),b(r,-1),b(s,-1),m(s,-1)],x),g([m(r,1),m(r,-1),m(s,-1),m(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function Um(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=ji(e,s),l=(x,_)=>a-As(e,s,x,_),c=a-(s.type==="pool"?0:s.slope??0),h=Mn(s.type)&&s.height?s.height:Er[s.type],u={...Y2[s.type],top:h},f=Ds(s.points),d=zt(u.edge,u.edgeAlpha),m=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let _=0;_<f.length;_++){if(_===m)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Jt)}},g=n??i,p=new tt(n?1734832:u.color);switch(s.type){case"pool":{let x=new tt(u.side),_=new tt(zt(u.side,.55)),v=new tt(932440),M=Ac(e,s),S=Tc(e,s),A=w0(e,s);for(let[y,R,E]of rn(f)){let w=f[y],C=f[R],L=f[E];(n?g:i).tri([w[0],M,w[1]],[L[0],M,L[1]],[C[0],M,C[1]],p,p,p,void 0,Jt),i.tri([w[0],A,w[1]],[L[0],A,L[1]],[C[0],A,C[1]],v,v,v,void 0,Jt)}for(let y=0;y<f.length;y++){let R=f[y],E=f[(y+1)%f.length];i.tri([E[0],A,E[1]],[E[0],S,E[1]],[R[0],S,R[1]],_,x,x,void 0,Jt),i.tri([E[0],A,E[1]],[R[0],S,R[1]],[R[0],A,R[1]],_,x,_,void 0,Jt)}if(!s.above&&qh(e,s)){let y=new tt(660258),R=new tt(396054),E=A-.2,w=Math.min(a,S);for(let C=0;C<f.length;C++){let L=f[C],I=f[(C+1)%f.length];i.tri([L[0],E,L[1]],[L[0],w,L[1]],[I[0],w,I[1]],R,y,y,void 0,Jt),i.tri([L[0],E,L[1]],[I[0],w,I[1]],[I[0],E,I[1]],R,y,R,void 0,Jt)}for(let[C,L,I]of rn(f)){let O=f[C],T=f[L],P=f[I];i.tri([O[0],E,O[1]],[T[0],E,T[1]],[P[0],E,P[1]],R,R,R,void 0,Jt)}if(s.outline!==!1)for(let C=0;C<f.length;C++){let L=f[C],I=f[(C+1)%f.length];t.seg([L[0],E,L[1]],[I[0],E,I[1]],zt(u.edge,u.edgeAlpha*.35),Jt),t.seg([L[0],E,L[1]],[L[0],w,L[1]],zt(u.edge,u.edgeAlpha*.25),Jt)}}if(S>a+.02){let y=new tt(2044240),R=new tt(1187123);for(let E=0;E<f.length;E++){let w=f[E],C=f[(E+1)%f.length];i.tri([w[0],a,w[1]],[w[0],S,w[1]],[C[0],S,C[1]],R,y,y,void 0,Jt),i.tri([w[0],a,w[1]],[C[0],S,C[1]],[C[0],a,C[1]],R,y,R,void 0,Jt)}b(()=>a+.005)}if(b(()=>S),b(()=>M+.005),s.outline!==!1)for(let y=0;y<f.length;y++){let R=f[y],E=f[(y+1)%f.length];t.seg([R[0],A+.005,R[1]],[E[0],A+.005,E[1]],zt(u.edge,u.edgeAlpha*.4),Jt)}break}case"fence":{let x=s.points,_=x.length-1,v=wc(s),M=(S,A,y)=>{let R=l(S,A);Ie(i,Ds([[S-y,A-y],[S+y,A-y],[S+y,A+y],[S-y,A+y]]),R,R+u.top,u.side,u.color)};for(let S=0;S<x.length;S++){if(s.open&&S===_)continue;let A=x[S],y=x[(S+1)%x.length],R=Math.hypot(y[0]-A[0],y[1]-A[1]);if(R<1e-6)continue;let E=O=>[A[0]+(y[0]-A[0])*O/R,A[1]+(y[1]-A[1])*O/R],w=v.filter(O=>O.gate.edge===S).sort((O,T)=>O.s0-T.s0),C=[],L=0;for(let O of w)O.s0>L+.01&&C.push([L,O.s0]),L=Math.max(L,O.s1);R>L+.01&&C.push([L,R]);let I=s.open&&S===_-1;for(let[O,T]of C){let P=Math.max(1,Math.round((T-O)/2)),N=O>1e-6?1:0,F=T>=R-1e-6&&I?P:P-1;for(let G=N;G<=F;G++){let[V,W]=E(O+(T-O)*G/P);M(V,W,.04)}let B=E(O),z=E(T);for(let G of[.35,.85])t.seg([B[0],l(B[0],B[1])+G*u.top,B[1]],[z[0],l(z[0],z[1])+G*u.top,z[1]],d,Jt)}for(let O of w)for(let T of[O.s0,O.s1])M(...E(T),.055)}break}case"pergola":{let x=u.top;for(let[_,v]of f){let M=l(_,v);Ie(i,Ds([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===m)continue;let v=f[_],M=f[(_+1)%f.length],S=l(v[0],v[1])+x;if(Om(i,v,M,.12,S-.16,S,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let A=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],A+.25,v[1]],[M[0],y+x-.25,M[1]],d,Jt),t.seg([M[0],y+.25,M[1]],[v[0],A+x-.25,v[1]],d,Jt)}}if(F0(f)){let _=D0(f),v=_.x1-_.x0,M=_.z1-_.z0,S=v>=M,A=S?v:M,y=Math.max(1,Math.round(A/.6));for(let R=1;R<y;R++){let E=(S?_.x0:_.z0)+A*R/y,w=S?[E,_.z0+.06]:[_.x0+.06,E],C=S?[E,_.z1-.06]:[_.x1-.06,E],L=l(w[0],w[1])+x;Om(i,w,C,.06,L-.04,L+.08,u.side,u.color,l(C[0],C[1])-l(w[0],w[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Ie(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=s.height&&s.height>.3?s.height:1,v=zt(9417983,.42),M=zt(3662079,.55);for(let S=0;S<f.length;S++){let A=f[S],y=f[(S+1)%f.length];if(q2(e,A,y))continue;let R=Math.hypot(y[0]-A[0],y[1]-A[1]),E=a+u.top;t.seg([A[0],E+_,A[1]],[y[0],E+_,y[1]],M,Jt),t.seg([A[0],E+.1,A[1]],[y[0],E+.1,y[1]],v,Jt);let w=Math.max(1,Math.round(R/.12));for(let C=0;C<=w;C++){let L=C/w,I=A[0]+(y[0]-A[0])*L,O=A[1]+(y[1]-A[1])*L;t.seg([I,E,O],[I,E+_,O],C===0||C===w?M:v,Jt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,_=J2(r,o);if(Ie(i,f,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let S=v[M],A=v[(M+1)%v.length];t.seg([S[0],x(S[0],S[1])+.004,S[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,Jt)}}}})}var Hc=Math.PI/180,j2=1.13,Q2=1.72,Af=.025,Or=.07,Bm=.25;function km(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=mi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},m=(b,g,p,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:p,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});m(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&m(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var Ef="ground";function ar(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function zm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=ar(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:yc(s,o,a)):t.base??0;return{key:Ef,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function tS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Rf(i,t){let e=i.settings.roof?.frame;if(e&&e.length===4&&e.every(s=>Number.isFinite(s)))return e;let n=t.rooms.flatMap(s=>s.points.map(o=>o[0])),r=t.rooms.flatMap(s=>s.points.map(o=>o[1]));return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function Ur(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>eS(v,Fc(i,v,v.overhang??t.overhang)));let e=tS(i);if(!e)return[];let[n,r,s,o]=Rf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=s+a,h=r-a,u=o+a,f=e.elevation+e.height;if(t.type==="flat")return[Vm("main",null,l,h,c,u,f+Bm)];let d=c-l>=u-h,m=t.ridge==="short"?!d:d,b=(m?u-h:c-l)/2,g=b*Math.tan(t.pitch*Hc),p=(v,M,S)=>m?[v,f+S,(h+u)/2+M]:[(l+c)/2+M,f+S,v],[x,_]=m?[l,c]:[h,u];return[-1,1].map(v=>Gc(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",p(x,v*b,0),p(_,v*b,0),p(x,0,g),t.pitch,()=>[0,_-x]))}function eS(i,t){let e=nn(i),n=cn(i),r=(_,v,M)=>{let[S,A]=e.at(_,v);return[S,M,A]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-s),v=e.at(l,e.w+o);return[Vm(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+Bm)]}if(i.shape==="pent")return[Gc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=Lc(i),u=h?nf(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",m=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+m-a:0,p=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(Gc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-p*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(Gc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[p*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-s),v=n.y(e.w+o),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,_),r(e.u0+m,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,_),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[S,A,y,R,E]of M){let w=nS(S,i.id,A,y,R,E);w&&x.push(w)}}return x}function nS(i,t,e,n,r,s){let o=Xo(Nr(r,n));if(o<.3)return null;let a=or(Nr(r,n)),l=Nr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Xo(h);if(u<.3)return null;let f=or(h),d=or(Wm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=or([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Hc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/u));return[c*x,o-(o-c)*x]},facing:[m[0],m[2]]}}function Gc(i,t,e,n,r,s,o,a){let l=or(Nr(r,n)),c=or(Nr(s,n)),h=or(Wm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=or([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Xo(Nr(r,n)),ls:Xo(Nr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Vm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Gm(i){let t=i.module_w||j2,e=i.module_h||Q2;return i.portrait===!1?[e,t]:[t,e]}function iS(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Hm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Hc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Hc:0}function rS(i,t){let[,e]=Gm(t),n=Hm(i,t);return i.wall?e*Math.cos(n)+Af:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Af}function Yo(i,t,e=!1){let[n,r]=Gm(t),s=[],o=Hm(i,t),a=r*Math.cos(o),l=rS(i,t),c=iS(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*p],m=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,x]=i.span(g);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let p=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=u.has(_);if(v&&!e)continue;let M=t.u+(x+p)*(n+Af),S=t.v+g*l,A=M+n,y=S+(i.flat||i.wall?a:r);if(f){if(!(m((M+A)/2,S)&&m((M+A)/2,y)))continue}else if(![[M,S],[A,S],[A,y],[M,y]].every(([I,O])=>m(I,O)))continue;if(i.wall&&o>.001){let I=Or+r*Math.sin(o),[O,T]=t.flip?[I,Or]:[Or,I],P=[d(M,S,O),d(A,S,O),d(A,y,T),d(M,y,T)],N=t.flip?S:y,F=[M+.05,A-.05].map(B=>[d(B,N,0),d(B,N,I)]);s.push({corners:P,posts:F,cell:_,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,S,Or),d(A,S,Or),d(A,y,Or),d(M,y,Or)],posts:[],cell:_,skipped:v});continue}let R=.15,E=R+r*Math.sin(o),[w,C]=t.flip?[y,S]:[S,y],L=[d(M,w,R),d(A,w,R),d(A,C,E),d(M,C,E)];s.push({corners:L,posts:[M+.05,A-.05].flatMap(I=>[[d(I,w,0),d(I,w,R)],[d(I,C,0),d(I,C,E)]]),cell:_,skipped:v})}}),s}function Nr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Xo(i){return Math.hypot(i[0],i[1],i[2])}function or(i){let t=Xo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Wm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var sS=.78,oS=1.18;function aS(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||sS,module_h:i.h||oS}}function Wc(i,t){let e=Yo(i,aS(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Xc(i,t,e){let n=t?Wc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>qt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var qo=1712952,$o=2239816,$m=1318193,lr=zt(3662079,.9),Os=zt(5995775,.45),Je=.14,lS=9427199,cS=13226982,uS=14936565,hS={black:{glass:new tt(329483),edge:zt(9082544,.32),cells:zt(2766160,.22)},blue:{glass:new tt(1386842),edge:zt(10467583,.55),cells:zt(4025599,.35)}},fS=zt(13226982,.5),dS=zt(13226982,.85),pS=zt(16757575,.95),Xm=new tt(2845583),Ym=new tt(1713986),mS=new tt(3662079).multiplyScalar(.35),qm=new tt(4871791);function gS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Zm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:vS(i),r=e?.type==="custom"?yS(i,e.sections??[],e.overhang):n?[n]:[];return xS(i,r),bS(i,r,t),r}function bS(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Ur(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Wc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(T=>T.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?Xc(i,o,s):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=T=>[T[0],T[1]-u,T[2]],[d,m,b,g]=a.map(f),p=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new Qt,lines:new Ne,glass:new Qt}).get(h.id):x?l.win??={solid:new Qt,lines:new Ne,glass:new Qt}:l.winRoof??={solid:new Qt,lines:new Ne,glass:new Qt},v=(T,P)=>[T[0]+o.n[0]*P,T[1]+o.n[1]*P,T[2]+o.n[2]*P],M=(T,P,N)=>[T[0]+(P[0]-T[0])*N,T[1]+(P[1]-T[1])*N,T[2]+(P[2]-T[2])*N],S=p.open>.02||p.tilt>.02?pS:dS,A=[d,m,b,g].map(T=>v(T,.06)),y=[d,m,b,g].map(T=>v(T,-.02));for(let T=0;T<4;T++){_.lines.seg(A[T],A[(T+1)%4],S);let P=(T+1)%4;_.solid.tri(y[T],y[P],A[P],qm),_.solid.tri(y[T],A[P],A[T],qm)}let R=(p.open>.02?30*Math.min(1,p.open):p.tilt>.5?12:0)*ie,E=Math.hypot(b[0]-m[0],b[1]-m[1],b[2]-m[2]),w=T=>{let P=o.es;return[T[0]-P[0]*E*Math.cos(R)+o.n[0]*E*Math.sin(R),T[1]-P[1]*E*Math.cos(R)+o.n[1]*E*Math.sin(R),T[2]-P[2]*E*Math.cos(R)+o.n[2]*E*Math.sin(R)]},C=v(g,.065),L=v(b,.065),I=w(C),O=w(L);_.glass.tri(I,O,L,Xm),_.glass.tri(I,L,C,Xm);for(let[T,P]of[[I,O],[O,L],[L,C],[C,I]])_.lines.seg(T,P,S);if(p.cover>.02){let T=Math.min(1,p.cover),P=v(M(C,I,T),.01),N=v(M(L,O,T),.01),F=v(C,.01),B=v(L,.01);_.solid.tri(P,N,B,Ym),_.solid.tri(P,B,F,Ym);let z=Math.max(1,Math.round(E*T/.05));for(let G=1;G<=z;G++){let V=G/z;_.lines.seg(v(M(F,P,V),.004),v(M(B,N,V),.004),mS)}}}}function xS(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Ur(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Cf(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Cf(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=hS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Yo(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let m=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,_)=>[p[0]+(x[0]-p[0])*_,p[1]+(x[1]-p[1])*_,p[2]+(x[2]-p[2])*_],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(b(h,u,p/a)),m(b(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(b(h,d,p/l)),m(b(u,f,p/l)),o.cells);for(let[p,x]of c.posts)t.seg(s(p),s(x),fS)}}function vS(i){let t=i.settings.roof,e=gS(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let[n,r,s,o]=Rf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=s+a,h=r-a,u=o+a,f=new Qt,d=new Ne;if(t.type==="flat"){Ie(f,[[l,h],[c,h],[c,u],[l,u]],0,.25,qo,$o,{bottom:!0});let C=.252;for(let[L,I]of[[[l,h],[c,h]],[[c,h],[c,u]],[[c,u],[l,u]],[[l,u],[l,h]]])d.seg([L[0],C,L[1]],[I[0],C,I[1]],lr),d.seg([L[0],0,L[1]],[I[0],0,I[1]],Os);return{floor:e,base:e.height,solid:f,lines:d,glass:new Qt}}let m=c-l>=u-h,b=t.ridge==="short"?!m:m,g=(b?u-h:c-l)/2,p=g*Math.tan(t.pitch*ie),x=(C,L,I)=>b?[C,I,(h+u)/2+L]:[(l+c)/2+L,I,C],[_,v]=b?[l,c]:[h,u],M=new tt($o),S=new tt(qo),A=(C,L,I,O,T)=>{f.tri(C,L,I,T),f.tri(C,I,O,T)};for(let C of[-1,1]){A(x(_,C*g,0),x(v,C*g,0),x(v,0,p),x(_,0,p),M),A(x(_,C*g,-Je),x(_,0,p-Je),x(v,0,p-Je),x(v,C*g,-Je),S),A(x(_,C*g,-Je),x(v,C*g,-Je),x(v,C*g,0),x(_,C*g,0),S);for(let L of[_,v])A(x(L,C*g,-Je),x(L,C*g,0),x(L,0,p),x(L,0,p-Je),S);d.seg(x(_,C*g,0),x(v,C*g,0),Os);for(let L of[_,v])d.seg(x(L,C*g,0),x(L,0,p),Os)}let y=t.overhang,R=new tt($m),E=g-y,w=E*Math.tan(t.pitch*ie);for(let C of[_+y,v-y])f.tri(x(C,-E,-Je),x(C,E,-Je),x(C,0,w-Je),R),f.tri(x(C,E,-Je),x(C,-E,-Je),x(C,0,w-Je),R);return d.seg(x(_,0,p+.004),x(v,0,p+.004),lr),{floor:e,base:e.height,solid:f,lines:d,glass:new Qt}}function yS(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Ur(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=tr(t,l),h=c?null:J0(t,l),u=c?Bo(t,l)?l:rf(c,l):h?Q0(l,h):l,f=Fc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,m=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:m?Z0(u,Pr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),h=X0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new Qt,lines:new Ne,glass:new Qt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,m=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&tr(t,v)===l&&!Bo(t,v)).flatMap(v=>W0(l,v));for(let v of i.settings.roof.windows??[]){let M=s.get(v.face),S=M&&M.section===l.id?Wc(M,v):null;if(!S)continue;let A=S.map(y=>bi(l,y[0],y[2]));b.push({u0:Math.min(...A.map(y=>y[0])),u1:Math.max(...A.map(y=>y[0])),v0:Math.min(...A.map(y=>y[1])),v1:Math.max(...A.map(y=>y[1]))})}let g=c.drawn,p=c.junction?1-c.junction.end:null;if(d){let v=nn(g),M=Pr(d,{u0:0,u1:0,a:0,b:0}),S=A=>{let[y,R]=v.at(A,v.w/2),[E,w]=bi(d,y,R);return zo(M,E,w)??cn(d).y(w)};p=S(v.u0)<=S(v.u1)?0:1}let x=o.filter(v=>K0(t,l,v)),_=x.length?{covers:af(g,x.flatMap(v=>a.get(v).covers)),lines:af(g,x.filter(v=>o.indexOf(v)>o.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[nn(l).u0,nn(l).u1]:null}:null;_S(f.solid,f.lines,g,c.ov,h.elevation,f.glass,m,b,p,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function _S(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let h=nn(e),u=cn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),m=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),p=h.u1+Math.max(0,f.u1),x=(T,P,N)=>{let[F,B]=h.at(T,P);return[F,N-r,B]},_=new tt($o),v=new tt(qo),M=new tt($m),S=(T,P)=>{for(let N=1;N+1<T.length;N++)i.tri(T[0],T[N],T[N+1],P)},A=[],y=[],R=[],E=[null,null],w=[];if(e.shape==="flat"||e.shape==="parapet"){let T=e.eave_a,P=e.shape==="parapet",N=e.points&&e.points.length>=3?V0(e,P?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):P?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(p,-d),h.at(p,b+m),h.at(g,b+m)];Ie(i,N,T-r,T-r+.25,qo,$o,{bottom:!0});for(let F=0;F<N.length;F++){let B=N[F],z=N[(F+1)%N.length];t.seg([B[0],T-r+.252,B[1]],[z[0],T-r+.252,z[1]],lr),t.seg([B[0],T-r,B[1]],[z[0],T-r,z[1]],Os)}if(P){let F=V=>Jn(V)>=0?V:[...V].reverse(),B=F(N),z=ko(B,-.2),G=B.length;for(let V=0;V<G;V++){let W=F([B[V],B[(V+1)%G],z[(V+1)%G],z[V]]);Ie(i,W,T-r+.25,T-r+.65,qo,$o),t.seg([B[V][0],T-r+.652,B[V][1]],[B[(V+1)%G][0],T-r+.652,B[(V+1)%G][1]],lr),t.seg([z[V][0],T-r+.652,z[V][1]],[z[(V+1)%G][0],T-r+.652,z[(V+1)%G][1]],lr)}}}else{let T=Pr(e,f);A=T.faces;for(let P of a)A=A.flatMap(N=>sf(N,P));if(y=T.rim,R=T.ridges,E=T.gables,c){for(let P of A)for(let N of c.lines){let F=$0(P,N.poly);if(F)for(let[B,z]of of(F[0],F[1],c.covers.filter(G=>G!==N)))w.push([B,z])}A=A.flatMap(P=>q0(P,c.covers))}}let C=!!e.open,L=new tt(lS);for(let T of A){if(C){for(let P=1;P+1<T.length;P++)s.tri(x(T[0][0],T[0][1],T[0][2]),x(T[P][0],T[P][1],T[P][2]),x(T[P+1][0],T[P+1][1],T[P+1][2]),L);continue}S(T.map(([P,N,F])=>x(P,N,F)),_),S(T.map(([P,N,F])=>x(P,N,F-Je)),v)}let I=(T,P)=>c?of(T,P,c.covers):[[T,P]];for(let T=0;T<y.length;T++)for(let[[P,N,F],[B,z,G]]of I(y[T],y[(T+1)%y.length]))C||S([x(P,N,F),x(B,z,G),x(B,z,G-Je),x(P,N,F-Je)],v),t.seg(x(P,N,F),x(B,z,G),C?lr:Os);if(C){MS(i,t,h,u,f,x,r);return}for(let[T,P]of R)for(let[[N,F,B],[z,G,V]]of I(T,P))t.seg(x(N,F,B+.004),x(z,G,V+.004),lr);for(let[[T,P,N],[F,B,z]]of w)t.seg(x(T,P,N+.004),x(F,B,z+.004),lr);let O=e.base;if(!o){for(let T of[0,1]){let P=E[T];if(!P||l!==null&&l!==T)continue;let N=SS(P,O-Je),F=T===0?h.u0:h.u1;N.length>=3&&S(N.map(([B,z])=>x(F,B,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[T,P]=c?.wallU??[h.u0,h.u1];for(let N of[0,b]){let F=u.y(N)-Je;F>O+.02&&S([x(T,N,O),x(P,N,O),x(P,N,F),x(T,N,F)],M)}}else if(e.eave_a>O+.02)for(let[T,P,N,F]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])S([x(T,P,O),x(N,F,O),x(N,F,e.eave_a),x(T,P,e.eave_a)],M)}}function MS(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,x,_,v,M,S)=>{let A=[e.at(p,_),e.at(x,_),e.at(x,v),e.at(p,v)],y=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ie(i,y<0?[...A].reverse():A,M-o,S-o,cS,uS,{bottom:!0})},b=o;for(let[p,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,_-c,_),t.seg(s(e.u0,p,_-c),s(e.u1,p,_-c),Os)}for(let[p,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,S=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,S-c,S)}let g=[];for(let[p,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let S=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([S,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,x]of g){let _=n.y(x+l/2)-.03-c;m(p,p+l,x,x+l,b,_)}}function SS(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Zo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Km={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},sn=.2,Jm=-.06,wS=.01,Ko=8,Yc=.42,Pf=.42;function eg(i,t,e,n=[],r=[],s){let{walls:o,open:a}=mi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,P,N,F)=>{let B=F?.slope?Math.min(N,Rr(F.slope,T,P)):N,z=s?s(T,P):null;return z===null?B:Math.max(.05,Math.min(B,z))},c=(T,P)=>{let N=s?s(T,P):null;return N!==null&&N<Jm},h=T=>{if(!s)return T;let P=T.map(([F,B])=>{let z=s(F,B);return z===null?1/0:z-Jm});if(P.every(F=>F>=0))return T;if(P.every(F=>F<0))return[];let N=[];for(let F=0;F<T.length;F++){let B=(F+1)%T.length,[z,G]=[T[F],T[B]],[V,W]=[P[F],P[B]];if(V>=0&&N.push(z),V>=0!=W>=0&&Number.isFinite(V)&&Number.isFinite(W)){let K=V/(V-W);N.push([z[0]+(G[0]-z[0])*K,z[1]+(G[1]-z[1])*K])}}return N},u=(T,P,N,F,B,z)=>{if(!s&&!z?.slope)return B;let G=B,V=Math.max(2,Math.ceil((F-N)/.25)+1);for(let W=0;W<V;W++){let K=N+(F-N)*W/(V-1);G=Math.min(G,l(T[0]+P[0]*K,T[1]+P[1]*K,B,z))}return G},f=new Qt(!0,!0),d=[],m=new Ne,b=[];for(let T of i.rooms){if(T.points.length<3)continue;let P=Zc(T.points),N=Km[T.floor_material]??Km.wood,F=new tt(N.color),B=n.flatMap(nt=>{if(df(nt,P)&&(!uf(nt)||df(nt,P,.002)))return[nt];if(!uf(nt))return[];let X=PS(Ir(P,nt));return X.length>=3&&Math.abs(Jn(X))>.01?[Zc(X)]:[]}),z=rm(B).map(nt=>sm(Zc(nt),.003));b.push(...z);let G=[...P,...z.flat()],V=f.count;for(let[nt,X,Y]of rn(P,z)){let et=G[nt],Z=G[X],J=G[Y];f.tri([et[0],0,et[1]],[J[0],0,J[1]],[Z[0],0,Z[1]],F,F,F,[et[0],et[1],J[0],J[1],Z[0],Z[1]],Jt,N.tile)}d.push({roomId:T.id,start:V,end:f.count,color:N.color});let W=new tt(Zo.slab),K=nt=>{for(let X=0;X<nt.length;X++){let Y=nt[X],et=nt[(X+1)%nt.length];f.tri([Y[0],-sn,Y[1]],[Y[0],0,Y[1]],[et[0],0,et[1]],W),f.tri([Y[0],-sn,Y[1]],[et[0],0,et[1]],[et[0],-sn,et[1]],W)}};K(P);for(let nt of z){K([...Zc(nt)].reverse());for(let X=0;X<nt.length;X++){let Y=nt[X],et=nt[(X+1)%nt.length];m.seg([Y[0],.006,Y[1]],[et[0],.006,et[1]],nr),m.seg([Y[0],-sn,Y[1]],[et[0],-sn,et[1]],Ci)}}}let g=new Map,p=[],x=new Map,_=new Map;for(let T of o){if(!T.free)continue;let P=N0(T,i.rooms);P!==null&&_.set(T,P)}for(let T of o){let P="interior",N=null,F=_.get(T);if(T.exterior||F!==void 0){let z=T.b[0]-T.a[0],G=T.b[1]-T.a[1],V=Math.hypot(z,G)||1,W=F===!1?-1:1,K=[W*G/V,-W*z/V],nt=(Math.round(Math.atan2(K[1],K[0])/(2*Math.PI)*Ko)%Ko+Ko)%Ko;P=`s${nt}`;let X=nt/Ko*2*Math.PI;N=[Math.cos(X),Math.sin(X)]}let B=g.get(P);B===void 0&&(B=p.length,g.set(P,B),p.push(N)),x.set(T,B)}let v=new Map,M=[];for(let T of i.openings){let P=Cs(T,i.rooms,i.walls??[]);if(!P)continue;let N=Ps(o,T,P);if(!N)continue;let{wall:F,s:B}=N,z=Jc([F.b[0]-F.a[0],F.b[1]-F.a[1]]),G=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),V=B-T.width/2<-1e-6?Jh(o,F,!1):null,W=B+T.width/2>G+1e-6?Jh(o,F,!0):null,K=se=>se?Math.hypot(se.b[0]-se.a[0],se.b[1]-se.a[1]):0,nt=-K(V),X=G+K(W),Y=Math.min(T.width,X-nt),et=Math.max(nt,Math.min(X-Y,B-Y/2)),Z=P.room.points,J=_.get(F),rt=F.free?J??z[0]*(Z[1][0]-Z[0][0])+z[1]*(Z[1][1]-Z[0][1])>0:F.exterior||F.roomLeft===T.room_id,ft=[-z[1],z[0]],ht=rt?ft:[-ft[0],-ft[1]],at=F.offset??0,bt=Math.min(u(F.a,z,et,et+Y,$c(F,i.height),F)-.02,T.sill+T.height)+at,gt=Math.max(at,Math.min(T.sill+at,bt-.1)),Nt=[ht[1],-ht[0]],ge=z[0]*Nt[0]+z[1]*Nt[1]>0,be={opening:T,bucket:x.get(F),start:[F.a[0]+z[0]*et,F.a[1]+z[1]*et],axis:z,width:Y,toRoom:ht,faceRoom:rt?F.left:F.right,faceOut:rt?F.right:F.left,sill:gt,top:bt,hingeAtStart:T.hinge==="left"===ge,exterior:F.exterior||J!==void 0};M.push(be);let pe=v.get(F);pe||v.set(F,pe=[]),pe.push({s0:et,s1:et+Y,sill:gt,top:bt,info:be});for(let se of[V,W]){if(!se)continue;let $=D=>(F.a[0]+z[0]*D-se.a[0])*z[0]+(F.a[1]+z[1]*D-se.a[1])*z[1],De=Math.max(0,$(et)),he=Math.min(K(se),$(et+Y));if(he-De<1e-4)continue;let H=v.get(se);H||v.set(se,H=[]),H.push({s0:De,s1:he,sill:gt,top:bt,info:be,cont:!0})}}let S=Math.min(i.cut_height,i.height),A=new Qt;for(let T of o){let P=x.get(T),N=Jc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),F=(v.get(T)??[]).sort((Z,J)=>Z.s0-J.s0),B=$c(T,i.height),z=T.offset??0,G=[],V=[-1/0,...new Set(F.flatMap(Z=>[Z.s0,Z.s1])).values(),1/0].sort((Z,J)=>Z-J);for(let Z=0;Z+1<V.length;Z++){let J=V[Z],rt=V[Z+1];if(rt-J<1e-6)continue;let ft=Number.isFinite(J)&&Number.isFinite(rt)?(J+rt)/2:Number.isFinite(J)?J+1:rt-1,ht=F.filter(gt=>gt.s0<ft&&gt.s1>ft).map(gt=>[gt.sill,gt.top]).sort((gt,Nt)=>gt[0]-Nt[0]),at=[],bt=-sn;for(let[gt,Nt]of ht)gt>bt+1e-4&&at.push([bt,gt<1e-4?-wS:gt]),bt=Math.max(bt,Nt);B>bt+1e-4&&at.push([bt,B]),G.push({t0:J,t1:rt,ranges:at})}let W=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),K=(s||T.slope)&&u(T.a,N,0,W,B,T)<B-.001,nt=K?G.flatMap(Z=>{let J=Math.max(Z.t0,-.5),rt=Math.min(Z.t1,W+.5),ft=Math.max(1,Math.ceil((rt-J)/.3));return Array.from({length:ft},(ht,at)=>({t0:at===0?Z.t0:J+(rt-J)*at/ft,t1:at===ft-1?Z.t1:J+(rt-J)*(at+1)/ft,ranges:Z.ranges,inner0:at>0,inner1:at<ft-1}))}):G.map(Z=>({...Z,inner0:!1,inner1:!1})),X=Z=>(Z[0]-T.a[0])*N[0]+(Z[1]-T.a[1])*N[1],Y=Z=>{if(!s)return[Z];let J=qc(T.footprint,T.a,N,Z.t0,Z.t1),rt=J.filter(([bt,gt])=>c(bt,gt)).length;if(rt===0)return[Z];if(rt===J.length)return[];let ft=Math.max(Z.t0,-.5),ht=Math.min(Z.t1,W+.5),at=Math.max(1,Math.ceil((ht-ft)/.05));return Array.from({length:at},(bt,gt)=>({t0:gt===0?Z.t0:ft+(ht-ft)*gt/at,t1:gt===at-1?Z.t1:ft+(ht-ft)*(gt+1)/at,ranges:Z.ranges,inner0:gt>0||Z.inner0,inner1:gt<at-1||Z.inner1})).filter(bt=>!qc(T.footprint,T.a,N,bt.t0,bt.t1).every(([gt,Nt])=>c(gt,Nt)))},et=Z=>{let J=bt=>l(T.a[0]+N[0]*bt,T.a[1]+N[1]*bt,B,T),rt=Math.max(Z.t0,0),ft=Math.min(Z.t1,W);if(ft-rt<.01||(J(rt)-S)*(J(ft)-S)>=0)return[Z];let ht=J(ft)>S;for(let bt=0;bt<24;bt++){let gt=(rt+ft)/2;J(gt)>S===ht?ft=gt:rt=gt}let at=ht?ft:rt;return[{...Z,t1:at,inner1:!0},{...Z,t0:at,inner0:!0}]};for(let Z of K?nt.flatMap(Y).flatMap(et):nt){let J=K?h(qc(T.footprint,T.a,N,Z.t0,Z.t1)):qc(T.footprint,T.a,N,Z.t0,Z.t1);if(J.length<3)continue;let rt=(at,bt)=>Math.abs(X(at)-bt)<1e-4,ft=(at,bt)=>Z.inner0&&rt(at,Z.t0)&&rt(bt,Z.t0)||Z.inner1&&rt(at,Z.t1)&&rt(bt,Z.t1),ht=K?Math.min(...J.map(([at,bt])=>l(at,bt,B,T))):B;for(let[at,bt]of Z.ranges){let gt=at+z,Nt=Math.min(bt+z,K?Math.max(...J.map(([se,$])=>l(se,$,B,T)+z)):bt+z);if(Nt-gt<1e-4||ht+z-gt<.01)continue;let ge=at>.01,be=K&&bt>ht,pe=(se,$)=>Math.min(bt+z,l(se,$,B,T)+z);if(gt<S-1e-6){let se=Nt>S+1e-6?pm+P:ir+P,$=be&&ht+z<S?(De,he)=>Math.min(S,pe(De,he)):Math.min(Nt,S);Ie(A,J,gt,$,Zo.wall,Zo.wallTop,{aoFrom:z,bottom:ge||z>.01,fold:ir+P,topFold:se,skipSide:ft})}Nt>S+1e-6&&ht+z>S-1e-6&&Ie(A,J,Math.max(gt,S),be?pe:Nt,Zo.wall,Zo.wallTop,{aoFrom:z,fold:P,bottom:(ge||z>.01)&&gt>=S,skipSide:ft})}}}let y=o.flatMap(T=>T.footprint),R=ES(o,y),E=new Ne;E.p.push(...m.p),E.c.push(...m.c),E.f.push(...m.f);let w=(T,P)=>(v.get(T)??[]).filter(P);for(let T of R.edges){let P=x.get(T.wall),N=T.wall.offset??0;for(let[B,z]of Kc(T,w(T.wall,G=>G.sill<=.005+N)))E.seg([B[0],.004+N,B[1]],[z[0],.004+N,z[1]],dm);for(let[B,z]of Kc(T,w(T.wall,G=>G.sill<S&&G.top>S)))E.seg([B[0],S,B[1]],[z[0],S,z[1]],gf,Bc+P);let F=$c(T.wall,i.height);for(let[B,z]of Kc(T,w(T.wall,G=>G.top>=F+N-.021))){if(!s&&!T.wall.slope){E.seg([B[0],F+N,B[1]],[z[0],F+N,z[1]],nr,F+N<=S+1e-6?ir+P:P);continue}let G=Math.max(1,Math.ceil(Math.hypot(z[0]-B[0],z[1]-B[1])/.3));for(let V=0;V<G;V++){let W=[B[0]+(z[0]-B[0])*V/G,B[1]+(z[1]-B[1])*V/G],K=[B[0]+(z[0]-B[0])*(V+1)/G,B[1]+(z[1]-B[1])*(V+1)/G];if(c(W[0],W[1])&&c(K[0],K[1]))continue;let nt=l(W[0],W[1],F,T.wall)+N,X=l(K[0],K[1],F,T.wall)+N;E.seg([W[0],nt,W[1]],[K[0],X,K[1]],nr,Math.max(nt,X)<=S+1e-6?ir+P:P)}}}let C=(T,P)=>l(P[0],P[1],$c(T,i.height),T)+(T.offset??0);for(let T of R.corners){if(c(T.p[0],T.p[1]))continue;let P=T.walls.reduce((B,z)=>C(z,T.p)>C(B,T.p)+1e-6?z:B,T.wall),N=C(P,T.p),F=P.offset??0;E.segSplit([T.p[0],.004+F,T.p[1]],[T.p[0],N,T.p[1]],Ci,Math.min(S,N),x.get(P))}for(let T of R.joints){let[P,N]=T.walls,F=[C(P,T.a),C(N,T.a)],B=[C(P,T.b),C(N,T.b)];if(Math.abs(F[0]-F[1])<.01&&Math.abs(B[0]-B[1])<.01)continue;let z=F[1]+B[1]>=F[0]+B[0]?N:P,G=x.get(z),V=Math.max(...F),W=Math.max(...B);E.seg([T.a[0],V,T.a[1]],[T.b[0],W,T.b[1]],nr,Math.max(V,W)<=S+1e-6?ir+G:G);for(let[K,nt]of[[T.a,F],[T.b,B]]){let X=Math.min(...nt),Y=Math.max(...nt);Y-X>.01&&E.segSplit([K[0],X,K[1]],[K[0],Y,K[1]],Ci,S,G)}}for(let T of v.values())for(let P of T)P.cont||TS(E,P,S);let L=RS(R.edges,i.rooms,v),I=new Qt;Um(A,E,i,I);for(let T of r)Cf(A,E,T.face,T.field,i.elevation);let O=[];for(let T of i.furniture){if(C0(T.type))continue;let P=A.count,N=E.p.length/6,F=T,B=ln(i,F);if(Rc.has(F.type)){let z=Cc(o,F,i.height,B);F={...F,x:z.x,z:z.z},B=z.y}zc(A,E,L,F,B),B+F.h>S+.05&&(mm(A,P,S,bf),gm(E,N,S,bf)),O.push({id:F.id,start:P,end:A.count})}return{floor:f.geometry(),roomTris:d,holes:b,walls:A.geometry(),water:I.geometry(),lines:E.geometry(),shadow:L.geometry(),buckets:p,openings:M,walls2d:o,openRooms:a,wallBuckets:o.map(T=>x.get(T)),furnitureTris:O,roofUnder:s}}function TS(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ci,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ci,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ci,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ci,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ci,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),gf,Bc+r)}function qc(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=jm(o,a=>s(a)-n)),Number.isFinite(r)&&(o=jm(o,a=>r-s(a))),o}function jm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var Qm=i=>Math.round(i*1e3),Jo=i=>`${Qm(i[0])},${Qm(i[1])}`,tg=(i,t)=>{let e=Jo(i),n=Jo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function AS(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];Jo(f)!==Jo(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function ES(i,t){let e=i.map(h=>({wall:h,edges:AS(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let m=tg(f,d);n.set(m,(n.get(m)??0)+1);let b=r.get(m);b?b.walls.push(h):r.set(m,{a:f,b:d,walls:[h]})}let s=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&s.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let o=[],a=new Map,l=(h,u,f)=>{let d=Jo(h),m=a.get(d);m||a.set(d,m={p:h,wall:u,walls:[],d:[]}),m.d.push(f),m.walls.includes(u)||m.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(tg(f,d))!==1)continue;let m=Math.hypot(d[0]-f[0],d[1]-f[1]);if(m<1e-4)continue;o.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/m,(d[1]-f[1])/m];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(m=>d.some(b=>Math.abs(m[0]*b[1]-m[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:o,corners:c,joints:s}}function Kc(i,t){if(!t.length)return[[i.a,i.b]];let e=Jc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Jc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function RS(i,t,e){let n=new Qt,r=new tt(Pf,Pf,Pf),s=new tt(1,1,1),o=.002;for(let a of i)for(let[l,c]of Kc(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&qt(m,p.points)))continue;let b=[l[0]+d[0]*Yc,l[1]+d[1]*Yc],g=[c[0]+d[0]*Yc,c[1]+d[1]*Yc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function ng(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Ri),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(R0.has(s.type)||Me(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).flatMap(s=>s.type==="stairs_u"?CS(s):[Ri(s)]);return[...e,...r]}function CS(i){let{steps2:t,fw:e,landing:n,run:r}=Ec(i.w,i.d,i.h),s=-i.d/2+n+r*t;if(s>=i.d/2-1e-6)return[Ri(i)];let o=i.rotation*Math.PI/180,a=Math.cos(o),l=Math.sin(o),c=i.mirror?-1:1,h=(d,m)=>[i.x+c*d*a-m*l,i.z+c*d*l+m*a],u=(d,m,b,g)=>{let p=[h(d,m),h(b,m),h(b,g),h(d,g)];return i.mirror?p.reverse():p},f=i.w/2-e;return[u(-i.w/2,-i.d/2,f,i.d/2),u(f,-i.d/2,i.w/2,s)]}function $c(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Jc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function PS(i){return i.filter((t,e)=>{let n=i[(e+i.length-1)%i.length];return i.length<2||Math.hypot(t[0]-n[0],t[1]-n[1])>1e-6})}function Zc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var IS=new tt(1516340),LS=new tt(527897),If=new tt(1779256),jo=new tt(1120808),FS=new tt(4163256),ig=new tt(5995161),DS=new tt(2240842),OS=new tt(1318704),NS=.35,US=.2,rg=.1;function BS(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||Mn(o.type)||!qt(e,o.points)||(r=Math.max(r,s.elevation+ji(s,o)+Er[o.type]-t.elevation));return r>n?r-n:0}function sg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=lf(i,t);if(!r)return null;let s=(m,b)=>Ts(m,b)-t.elevation,o=n&&r.some(([m,b])=>s(m,b)<-sn-.03);if(!o&&!cf(i,t))return null;let a=t.height,l=-NS,c=(m,b)=>Math.min(a,Ts(m,b)-t.elevation),h=new Qt,u=new Qt,f=new Ne,d=(m,b,g,p,x,_,v,M)=>{let S=[b[0]-m[0],b[2]-m[2]];-S[1]*x[0]+S[0]*x[1]>0?(M.tri(m,b,g,_,_,v),M.tri(m,g,p,_,v,v)):(M.tri(m,g,b,_,v,_),M.tri(m,p,g,_,v,v))};for(let m=0;m<r.length;m++){let b=r[m],g=r[(m+1)%r.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<1e-4)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];qt(v,r)&&(_=[-_[0],-_[1]]);let M=(E,w=.012)=>[b[0]+x[0]*E+_[0]*w,b[1]+x[1]*E+_[1]*w],S=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let w=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,C=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,L=(w-b[0])*x[0]+(C-b[1])*x[1],I=(w-b[0])*_[0]+(C-b[1])*_[1];if(Math.abs(E.axis[0]*x[0]+E.axis[1]*x[1])<.99||I<-.08||I>.6||L<-.05||L>p+.05||!nm(i,t,E.exterior,E.sill,[w,C],_))continue;let O=E.opening.well_depth??em;S.push({s0:Math.max(0,L-E.width/2-rg),s1:Math.min(p,L+E.width/2+rg),bottom:Math.max(l+.05,E.sill-US),rim:E.opening.well_rim??0,off:Math.max(0,I),depth:O})}let A=new Set([0,p]);for(let E of S)A.add(E.s0),A.add(E.s1);let y=[...A].sort((E,w)=>E-w),R=[];for(let E=0;E<y.length-1;E++){let w=Math.max(1,Math.ceil((y[E+1]-y[E])/.5));for(let C=0;C<w;C++)R.push(y[E]+(y[E+1]-y[E])*C/w)}R.push(p);for(let E=0;E<R.length-1;E++){let w=R[E],C=R[E+1],L=S.find(G=>w>=G.s0-1e-6&&C<=G.s1+1e-6),I=M(w),O=M(C),T=c(I[0],I[1]),P=c(O[0],O[1]),N=L?Math.min(T,L.bottom):T,F=L?Math.min(P,L.bottom):P;if(N>l+.01||F>l+.01){let G=Math.min(N,l),V=Math.min(F,l);d([I[0],G,I[1]],[O[0],V,O[1]],[O[0],Math.max(F,l),O[1]],[I[0],Math.max(N,l),I[1]],_,LS,IS,h)}let B=s(I[0],I[1]),z=s(O[0],O[1]);if(o&&(B<-sn-.01||z<-sn-.01)&&d([I[0],Math.min(B,-sn),I[1]],[O[0],Math.min(z,-sn),O[1]],[O[0],-sn,O[1]],[I[0],-sn,I[1]],_,OS,DS,h),T>l||P>l||o&&(B<-sn||z<-sn)){let G=o?Math.min(B,Math.max(T,l)):Math.max(T,l),V=o?Math.min(z,Math.max(P,l)):Math.max(P,l);f.seg([I[0],G+.004,I[1]],[O[0],V+.004,O[1]],FS)}}for(let E of S){let w=M(E.s0,E.off),C=M(E.s1,E.off),L=[w[0]+_[0]*E.depth,w[1]+_[1]*E.depth],I=[C[0]+_[0]*E.depth,C[1]+_[1]*E.depth],O=[(w[0]+C[0]+L[0]+I[0])/4,(w[1]+C[1]+L[1]+I[1])/4],T=BS(i,t,O,c(O[0],O[1])),P=Math.max(E.rim,T>0?T+.02:0),N=W=>c(W[0],W[1])+P,F=E.bottom,B=(W,K)=>[W[0],K,W[1]];u.tri(B(w,F),B(C,F),B(I,F),jo),u.tri(B(w,F),B(I,F),B(L,F),jo);let z=(W,K)=>{u.tri(B(W,F),B(K,F),B(K,N(K)),jo,jo,If),u.tri(B(W,F),B(K,N(K)),B(W,N(W)),jo,If,If)};z(w,L),z(C,I),z(L,I);let G=W=>[W[0],N(W)+.01,W[1]];for(let[W,K]of[[w,C],[C,I],[I,L],[L,w]])f.seg(G(W),G(K),ig);let V=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let W=1;W<V;W++){let K=W/V,nt=[w[0]+(C[0]-w[0])*K,w[1]+(C[1]-w[1])*K];f.seg(G(nt),G([nt[0]+_[0]*E.depth,nt[1]+_[1]*E.depth]),ig)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var og=i=>Math.round(i*1e3)/1e3;function kS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function ag(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&qt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Pn(a)>=0?1:-1,c=Ri({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Ri({...t,x:h,z:u});for(let m=0;m<a.length;m++){let b=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-b[0],g[1]-b[1]);if(p<.05)continue;let x=[(g[0]-b[0])/p,(g[1]-b[1])/p],_=[-x[1]*l,x[0]*l],v=kS(i,o.id,b,g)?r/2:0,M=0;d.forEach((S,A)=>{let y=(S[0]-b[0])*x[0]+(S[1]-b[1])*x[1];if(y<-.01||y>p+.01)return;let R=(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v,E=c[A];(E[0]-b[0])*_[0]+(E[1]-b[1])*_[1]-v<-s||R<M&&(M=R)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[og(h),og(u)]}var zS=500,VS=1e3;function lg(i,t){let e=t-i.timeStamp;return e>VS&&e<6e4}var cg=.12,ug=1.35,GS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,jc=class{view={target:new q,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;rightClickBack=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=GS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Lf(this.view.phi+this.velocity.phi,cg,ug),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},zS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(lg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Lf(this.view.phi+c,cg,ug),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){let e=this.pointers.get(t.pointerId)?.button;if(e!==void 0){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let n=this.el.getBoundingClientRect(),r=t.clientX-n.left,s=t.clientY-n.top,o=performance.now();e===2&&this.rightClickBack&&this.events.back?(this.lastTap=0,this.events.back()):o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(r,s)):(this.lastTap=o,this.events.tap(r,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!lg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Lf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new q(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new q(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Lf(i,t,e){return Math.min(e,Math.max(t,i))}function xi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var eu=5,Qc=512,hg=.7,tu=class{projectors=new Map;loader=new yr;loggedIds="";depthMaterial=new Yt({colorWrite:!1,side:ne});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Ye(Qc,Qc);a.depthTexture=new ci(Qc,Qc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,hg,40),target:a,matrix:new Ae,uniforms:{uProjMat:{value:new Ae},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(eu),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ue;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of o.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),o.overlays.delete(b));for(let b of n){let g=o.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new Et(b.geometry,this.material(o,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),o.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let h=o.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/o.aspect)*180/Math.PI,h.aspect=o.aspect,h.far=a.reach,h.near=hg,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),o.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),m=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=m;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Yt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?xi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function fg(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function dg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=fg(s,o),c=fg(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],m=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,p=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([p*d[0]+x*o[0]+_*m[0],p*d[1]+x*o[1]+_*m[1],p*d[2]+x*o[2]+_*m[2]])}}return n.push(i[i.length-1]),n}var pg=new tt(7568261),mg=new tt(4869974),HS=new tt(3116287),gg=new tt(3948872),Ff=Br([.35,.85,.4]),bg=10;function Br(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Qo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function xg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Br(Qo(i,t));return[e,Br(Qo(i,e))]}function Pi(i,t){let e=.5+.5*Math.max(0,t[0]*Ff[0]+t[1]*Ff[1]+t[2]*Ff[2]);return i.clone().multiplyScalar(e)}function Ns(i,t,e,n,r,s=!1){let o=Br([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=xg(o),c=(h,u)=>{let f=u/bg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<bg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),m=c(e,h+1);i.tri(u.p,m.p,d.p,Pi(r,u.n),Pi(r,m.n),Pi(r,d.n)),i.tri(u.p,f.p,m.p,Pi(r,u.n),Pi(r,f.n),Pi(r,m.n)),s&&(i.tri([...t],f.p,u.p,Pi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,m.p,Pi(r,o)))}}function WS(i,t,e,n,r,s,o,a){let l=Br(Qo(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Pi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function vg(i,t){if(t.points.length<2)return;let e=t.radius,n=dg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?pg.clone().multiplyScalar(.55):pg;Ns(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);Ns(i,o,a,e*1.22,mg,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);Ns(i,o,a,e*1.08,t.water?new tt(...t.water).multiplyScalar(.9):new tt(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Ns(i,c,h,e*1.3,mg,!0)}}else{let[o,a]=s(.055);Ns(i,o,a,e*1.4,gg,!0);let[l]=xg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Ns(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,gg,!0);let u=r.open===!1?Br(Qo(r.dir,c)):r.dir,f=Br(Qo(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];WS(i,d,u,f,.1,.028,.012,HS)}}}function Df(i){return i.furnitureId?`${i.id}@${i.furnitureId}`:i.id}var Of=1.62,nu=.2,Nf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=mi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Cs(a,e.rooms,e.walls??[]);if(!c)continue;let h=Ps(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],m=Math.hypot(f,d)||1,b=f/m,g=d/m,p=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,_=u.right+.45,v=[[p[0]-g*x,p[1]+b*x],[p[0]+g*_,p[1]-b*_]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(S=>S.points.length>=3&&qt(v[1],S.points)))continue;let M=o.get(u)??[];M.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),o.set(u,M),this.doors.push({centre:p,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=nu){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=nu){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=nu){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>qt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let m=this.path(d,e);return m?[d,...m]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let m=this.path(t,d);return m?[...m,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>XS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let m=nu+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,p])=>[d.c[0]+d.u[0]*g*(d.hw+m)+b[0]*p*(d.hd+m),d.c[1]+d.u[1]*g*(d.hw+m)+b[1]*p*(d.hd+m)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let h=new Map,u=(d,m)=>{let b=d<m?`${d}:${m}`:`${m}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(s[d],s[m]),h.set(b,g)),g};for(;;){let d=-1;for(let m=0;m<o;m++)!c[m]&&a[m]<1/0&&(d<0||a[m]<a[d])&&(d=m);if(d<0)return null;if(d===1)break;c[d]=!0;for(let m=0;m<o;m++){if(c[m]||m===d)continue;let b=Math.hypot(s[d][0]-s[m][0],s[d][1]-s[m][1]);a[d]+b>=a[m]||u(d,m)&&(a[m]=a[d]+b,l[m]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=Cs(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=Ps(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],m=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>yg(s)-yg(r))[0],n=e?this.freeNear(di(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function XS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function yg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var Uf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Of}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-Of,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(di(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[m[1]*b[2]-m[2]*b[1],m[2]*b[0]-m[0]*b[2],m[0]*b[1]-m[1]*b[0]],p=[-g[0],-g[1],-g[2]],x=[m[0]+b[0]*r*u*f+p[0]*s*u,m[1]+b[1]*r*u*f+p[1]*s*u,m[2]+b[2]*r*u*f+p[2]*s*u];if(x[1]>=-.02)return null;let _=Of/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function YS(i,t){let e=Me(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Bf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?YS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}var _g=8,Mg=1024,Ii=6,iu=class{group=new Pe;shadow;target=null;arc=new Pe;glow=ZS();textures=[];constructor(){this.shadow=new Et(new Yn(1,1),new Yt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,s,o,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(Mg,Math.max(32,Math.ceil((h-l)*_g))),d=Math.min(Mg,Math.max(32,Math.ceil((u-c)*_g)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Ye(f,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let S=this.shadow.material;S.map=this.target.texture,S.needsUpdate=!0}let m=new ai,b=S=>{let A=new Float32Array(S.length/2*3);for(let R=0,E=0;R<S.length;R+=2,E+=3)A.set([S[R],-S[R+1],0],E);let y=new Ot;return y.setAttribute("position",new Lt(A,3)),y},g=new Et(b(e),new Yt({color:16777215,side:ne})),p=[];for(let S of r)for(let A of rn(S))for(let y of A)p.push(S[y][0],S[y][1]);let x=new Et(b(p),new Yt({color:0,transparent:!0,opacity:0,blending:On,side:ne,forceSinglePass:!0}));x.renderOrder=1,m.add(g,x);let _=new Dn(l,h,-c,-u,.1,10);_.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(m,_),t.setRenderTarget(v);for(let S of[g,x])S.geometry.dispose(),S.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,s,(c+u)/2);let M=this.shadow.material;M.opacity=o,M.color.set(a),this.shadow.visible=o>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Rn:Se,n=(s,o)=>{let a=$S(t.points.map(c=>c.at),s,t.points.map(c=>qS(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new Et(a,new Yt({vertexColors:!0,transparent:!0,opacity:o*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new An(Sg(t.hours.flat()),new _n({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let s=this.sprite(KS(t.light),t.size*5,t.size*5,t.fade,e);s.position.set(...t.sun),this.arc.add(s)}for(let s of t.labels){let o=this.sprite(JS(`${s.rising?"\u2191":"\u2193"} ${s.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Rn,!0);o.position.set(...s.at),this.arc.add(o)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:s}=t.ring,o=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,o,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(Sg(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Rn:Se,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),s.forEach((h,u)=>{let f=this.sprite(jS(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Rn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,s,o=!1){this.textures.push(t);let a=new io(new ds({map:t,transparent:!0,opacity:r,blending:s,depthWrite:!1,depthTest:!o}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function Sg(i){let t=new Ot;return t.setAttribute("position",new Lt(i,3)),t}function qS(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new tt(t?13778970:16730666),r=new tt(t?14711552:16753978),s=new tt(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(s,(e-.4)/.6)}function $S(i,t,e){let n=[],r=[],s=[],o=new q(0,1,0);for(let l=0;l<i.length;l++){let c=new q(...i[l]),h=new q(...i[Math.max(0,l-1)]),f=new q(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new q().crossVectors(f,o);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let m=new q().crossVectors(d,f).normalize();for(let b=0;b<Ii;b++){let g=b/Ii*Math.PI*2,p=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(m,Math.sin(g)*t);n.push(p.x,p.y,p.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ii;b++){let g=(l-1)*Ii+b,p=(l-1)*Ii+(b+1)%Ii,x=l*Ii+b,_=l*Ii+(b+1)%Ii;s.push(g,x,_,g,_,p)}}let a=new Ot;return a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),a.setIndex(s),a}function ru(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function ZS(){let[i,t]=ru(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function KS(i){let[t,e]=ru(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let s=r%2===0?124:92,o=e.createLinearGradient(0,0,0,-s);o.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),o.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-s),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new pn(t)}function JS(i,t){let[e,n]=ru(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),s=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(s,10,r,84,42):n.rect(s,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(e)}function jS(i,t,e){let[n,r]=ru(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}var QS=40;function wg(i,t,e,n,r){let s=[];if(n<=0)return s;let o=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(QS,Math.max(0,h-r)*o);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>s.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),m=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,p]of rn(h.points))l(d[b],d[g],d[p]),l(m[b],m[g],m[p]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],m[g]),l(d[b],m[g],m[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return s}function Tg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let s=0;s<i.length;s+=2)t=Math.min(t,i[s]),n=Math.max(n,i[s]),e=Math.min(e,i[s+1]),r=Math.max(r,i[s+1]);return[t,e,n,r]}function ta(i,t,e=.3){if(!(t>0))return 0;let n=Math.min(e,t/2),r=Math.min(1,i/n,(t-i)/n);return r>0?r:0}var tw=150;function Ag(i){let t=i?ar(i):null;if(!i||!t)return null;let e=i.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points));if(!e.length)return null;let n=i.settings.sun_arc==="plot",r=n?[...e,...i.floors.flatMap(h=>[...h.rooms.flatMap(u=>u.points),...(h.outdoor??[]).flatMap(u=>u.points),...(h.walls??[]).flatMap(u=>[u.a,u.b])])]:e,[s,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let[h,u]of r)s=Math.min(s,h),o=Math.max(o,h),a=Math.min(a,u),l=Math.max(l,u);let c=Math.max(7,Math.hypot(o-s,l-a)*.62);return{x:(s+o)/2,z:(a+l)/2,y:t.elevation,r:n?Math.min(tw,c):c}}function kf(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=ew(c.id)%1e3/1e3;for(let b of Yo(l,c)){let[g,p,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[S,A,y]=v[M];e.push(S[0],S[1],S[2]),n.push(A,y),r.push(u,f),s.push(d)}}let m=e.length/3-h;m&&o.push({id:c.id,start:h,count:m})}if(!e.length)return null;let a=new Ot;return a.setAttribute("position",new Lt(e,3)),a.setAttribute("uv",new Lt(n,2)),a.setAttribute("aCells",new Lt(r,2)),a.setAttribute("aPhase",new Lt(s,1)),a.setAttribute("aLevel",new Lt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function ea(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function zf(i){let t=new Yt({transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function ew(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var nw=[1,.78,.42],Eg=[[1,.25,.3],[1,.8,.25],[.3,1,.45],[.3,.55,1]];function Rg(i,t,e,n=!0){let r=[],s=[],o=new Set,a=0,l=(u,f,d)=>{let m=`${Math.round(u/.08)},${Math.round(f/.08)},${Math.round(d/.08)}`;o.has(m)||(o.add(m),r.push(u,f-t,d),s.push(...e?Eg[a++%Eg.length]:nw))},c=(u,f,d,m=-.04)=>{let b=Math.hypot(d[0],d[2]),g=b?d[0]/b*.05:0,p=b?d[2]/b*.05:0,x=Math.hypot(f[0]-u[0],f[1]-u[1],f[2]-u[2]),_=Math.max(2,Math.round(x/.25)+1);for(let v=0;v<_;v++){let M=v/(_-1);l(u[0]+(f[0]-u[0])*M+g,u[1]+(f[1]-u[1])*M+m,u[2]+(f[2]-u[2])*M+p)}},h=(u,f,d)=>[u.o[0]+u.eu[0]*f+u.es[0]*d,u.o[1]+u.eu[1]*f+u.es[1]*d,u.o[2]+u.eu[2]*f+u.es[2]*d];for(let u of i){if(u.unbounded||u.wall)continue;let[f,d]=u.span(0);if(!u.flat){if(c(h(u,f,0),h(u,d,0),[-u.es[0],0,-u.es[2]]),n&&u.ls>0){let[g,p]=u.span(u.ls);c(h(u,f,0),h(u,g,u.ls),[-u.eu[0],0,-u.eu[2]]),c(h(u,d,0),h(u,p,u.ls),[u.eu[0],0,u.eu[2]]),p-g>.05&&c(h(u,g,u.ls),h(u,p,u.ls),[0,0,0],.04)}continue}let m=[h(u,f,0),h(u,d,0),h(u,d,u.ls),h(u,f,u.ls)],b=h(u,(f+d)/2,u.ls/2);for(let g=0;g<4;g++){let p=m[g],x=m[(g+1)%4];c(p,x,[(p[0]+x[0])/2-b[0],0,(p[2]+x[2])/2-b[2]])}}return r.length?{positions:new Float32Array(r),colors:new Float32Array(s)}:null}function Cg(i,t){let e=[];for(let o of i){if(o.unbounded||o.wall||o.ls<=0)continue;let a=(l,c)=>[o.o[0]+o.eu[0]*l+o.es[0]*c+o.n[0]*.035,o.o[1]+o.eu[1]*l+o.es[1]*c+o.n[1]*.035-t,o.o[2]+o.eu[2]*l+o.es[2]*c+o.n[2]*.035];for(let l=0;l<6;l++){let c=o.ls*l/6,h=o.ls*(l+1)/6,[u,f]=o.span(c),[d,m]=o.span(h);if(f<=u&&m<=d)continue;let b=[a(u,c),a(f,c),a(m,h),a(d,h)];for(let g of[0,1,2,0,2,3])e.push(...b[g])}}if(!e.length)return null;let s=new Ot;return s.setAttribute("position",new tn(new Float32Array(e),3)),s}var su=null;function na(){if(su)return su;if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),su=new pn(i),su}var ia=90,ra=6,Vf=ia*ra,Gf=[[.22,.88,1],[1,.3,.75],[1,.8,.25],[.45,1,.5],[.7,.45,1]],ou=class{points;pos=new Float32Array(Vf*3);col=new Float32Array(Vf*3);vel=new Float32Array(Vf*3);age=new Float32Array(ra).fill(99);tint=Array.from({length:ra},()=>Gf[0]);next=0;wait=0;box;constructor(t){this.box=t;let e=new Ot;e.setAttribute("position",new tn(this.pos,3)),e.setAttribute("color",new tn(this.col,3));let n=new _n({size:.35,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Se,sizeAttenuation:!0,map:na()});this.points=new An(e,n),this.points.frustumCulled=!1,this.points.renderOrder=30}burst(t){let e=this.box,n=e.x0+Math.random()*(e.x1-e.x0),r=e.z0+Math.random()*(e.z1-e.z0),s=e.top+3+Math.random()*3;this.age[t]=0,this.tint[t]=Gf[Math.floor(Math.random()*Gf.length)];for(let o=0;o<ia;o++){let a=(t*ia+o)*3,l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=3.2+Math.random()*1.6;this.pos[a]=n,this.pos[a+1]=s,this.pos[a+2]=r,this.vel[a]=h*Math.cos(c)*u,this.vel[a+1]=l*u+.6,this.vel[a+2]=h*Math.sin(c)*u}}step(t){let e=Math.min(.05,Math.max(0,t));this.wait-=e,this.wait<=0&&(this.burst(this.next),this.next=(this.next+1)%ra,this.wait=.45+Math.random()*.6);for(let n=0;n<ra;n++){this.age[n]+=e;let r=this.age[n],s=r>2.2?0:Math.max(0,1-r/2.2)**1.4,[o,a,l]=this.tint[n];for(let c=0;c<ia;c++){let h=(n*ia+c)*3;r<2.2&&(this.vel[h]*=1-1.2*e,this.vel[h+1]=this.vel[h+1]*(1-1.2*e)-2.4*e,this.vel[h+2]*=1-1.2*e,this.pos[h]+=this.vel[h]*e,this.pos[h+1]+=this.vel[h+1]*e,this.pos[h+2]+=this.vel[h+2]*e),this.col[h]=o*s,this.col[h+1]=a*s,this.col[h+2]=l*s}}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}};var Ig=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,iw=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,rw=Ig,sw=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Pg(i,t){let e=[];for(let[r,s,o]of rn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Ot;return n.setAttribute("position",new Lt(e,3)),n}function Lg(i,t){let e=new Pe;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Et(Pg(n.points,o),new mn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Ig,fragmentShader:iw,transparent:!0,blending:Se,depthWrite:!1,side:ne}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),m=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Ir(n.points,m);if(b.length>=3){let g=new Et(Pg(b,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:rw,fragmentShader:sw,transparent:!0,side:ne,forceSinglePass:!0}));g.renderOrder=6,e.add(g);let p=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Ot;x.setAttribute("position",new Lt(p,3)),e.add(new qe(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Fg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Dg=["neon","blueprint","day"];function Og(i){return Dg.indexOf(i)}var Us={value:new q(.22,.88,1)},Bs={value:0};function Ng(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var ow=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line, bool accent) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function on(i,t,e=!1,n=!0){let r=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,a)=>{r(o,a),o.uniforms.uTheme=t,o.uniforms.uAccent=Us,o.uniforms.uAccentOn=Bs,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${ow}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e}, ${n});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}${n?"":"-na"}`,i}function sa(i){return i==="day"?Rn:Se}var Li=.012,aw=.012;function kg(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(p,x,_,v,M,S,A)=>{for(let y of[p,x,_,p,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(S),h.push(A)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let _=p.points.map(w=>w[0]),v=p.points.map(w=>w[1]),M=Math.min(..._),S=Math.min(...v),A=Math.max(..._),y=Math.max(...v),R=Math.max(1,Math.ceil((A-M)/r)),E=Math.max(1,Math.ceil((y-S)/r));for(let w=0;w<R;w++)for(let C=0;C<E;C++){let L=M+w*r,I=S+C*r,O=Math.min(L+r,A),T=Math.min(I+r,y),P=Ir(p.points,[[L,I],[O,I],[O,T],[L,T]]),N=P.length>=3?Math.abs(oa(P)):0;if(N<1e-4)continue;let F=pw(P);if(!s.some(B=>qt(F,B))){if(N>(O-L)*(T-I)-1e-6){u([L,Li,I],[L,Li,T],[O,Li,T],[O,Li,I],[0,1,0],x,-1);continue}for(let[B,z,G]of rn(P)){let V=P[B],W=P[G],K=P[z];(K[1]-V[1])*(W[0]-V[0])-(K[0]-V[0])*(W[1]-V[1])<0&&([V,W]=[W,V]),u([V[0],Li,V[1]],[K[0],Li,K[1]],[W[0],Li,W[1]],[W[0],Li,W[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!Mn(p.type));if(d.length){let p=d.flatMap(E=>E.points.map(w=>w[0])),x=d.flatMap(E=>E.points.map(w=>w[1])),_=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-_)/r)),S=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),A=(E,w,C)=>Tf(i,E)-As(i,E,w,C)+Li,y=d.map((E,w)=>({a:E,i:w,top:Tf(i,E),box:mw(E.points),convex:gw(E.points)})).sort((E,w)=>+(w.a.type==="pool")-+(E.a.type==="pool")||+!!w.a.cut-+!!E.a.cut||w.top-E.top||w.i-E.i).map(E=>({...E,parts:E.convex?[E.a.points]:rn([...E.a.points]).map(w=>w.map(C=>E.a.points[C]))})),R=(E,w)=>{for(let[C,L,I]of rn(w)){let O=w[C],T=w[I],P=w[L];(P[1]-O[1])*(T[0]-O[0])-(P[0]-O[0])*(T[1]-O[1])<0&&([O,T]=[T,O]);let N=[T[0],A(E,T[0],T[1]),T[1]];u([O[0],A(E,O[0],O[1]),O[1]],[P[0],A(E,P[0],P[1]),P[1]],N,N,[0,1,0],f,-1)}};for(let E=0;E<M;E++)for(let w=0;w<S;w++){let C=_+E*r,L=v+w*r,I=[[C,L],[C+r,L],[C+r,L+r],[C,L+r]],O=[I];for(let T of y){if(!O.length)break;if(T.box[0]>=C+r||T.box[2]<=C||T.box[1]>=L+r||T.box[3]<=L)continue;let P=[];for(let N of O){let F=Ir(T.a.points,N),B=F.length>=3?Math.abs(oa(F)):0;if(B<1e-4){P.push(N);continue}if(N===I&&B>r*r-1e-6){let G=(V,W)=>[V,A(T.a,V,W),W];u(G(C,L),G(C,L+r),G(C+r,L+r),G(C+r,L),[0,1,0],f,-1);continue}R(T.a,F);let z=[N];for(let G of T.parts)z=z.flatMap(V=>bw(V,G));P.push(...z.filter(G=>G.length>=3&&Math.abs(oa(G))>1e-4))}O=P}}}let m=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let _=Math.min(i.height,p.height??i.height),v=Math.min(m,_-.02),M=p.b[0]-p.a[0],S=p.b[1]-p.a[1],A=Math.hypot(M,S);if(A<.05)return;let y=[M/A,S/A],R=[-y[1],y[0]],E=e[x],w=cw(p,y,A,n),C=(P,N)=>P?i.rooms.findIndex(F=>F.id===P):N?f:-1,L=p.slope?{h:Math.min(_,Rr(p.slope,p.a[0],p.a[1])),h1:Math.min(_,Rr(p.slope,p.b[0],p.b[1]))}:{h:_};b.push({a:p.a,b:p.b,...L,ra:C(p.roomLeft,!1),rb:C(p.roomRight,p.exterior),gaps:w});let I=(P,N,F)=>[N,F,...P.filter(B=>B>N+.005&&B<F-.005)].sort((B,z)=>B-z).filter((B,z,G)=>z===0||B>G[z-1]+.005),O=I([v,(v+_)/2,...w.flatMap(P=>[P.y0+.01,P.y1-.01])],.02,_-.02),T=I(w.flatMap(P=>[P.s0,P.s1]),0,A);for(let P of[1,-1]){let N=P>0?p.roomLeft:p.roomRight,F=N?i.rooms.findIndex(W=>W.id===N):p.exterior?f:-1;if(F<0)continue;let B=(P>0?p.left:p.right)+aw,z=[R[0]*P,R[1]*P],G=(W,K)=>[p.a[0]+y[0]*W+z[0]*B,K,p.a[1]+y[1]*W+z[1]*B],V=W=>{let K=G(W,0),nt=o?.(K[0],K[2]),X=p.slope?Rr(p.slope,p.a[0]+y[0]*W,p.a[1]+y[1]*W)-.02:1/0;return Math.min(nt==null?1/0:nt-.02,X)};for(let W=0;W<T.length-1;W++){let K=T[W+1]-T[W],nt=Math.max(1,Math.ceil(K/r));for(let X=0;X<nt;X++){let Y=T[W]+K/nt*X,et=T[W]+K/nt*(X+1),Z=(Y+et)/2;for(let J=0;J<O.length-1;J++){let rt=O[J],ft=O[J+1];if(ft-rt<.01)continue;let ht=(rt+ft)/2;if(w.some(Nt=>Z>Nt.s0&&Z<Nt.s1&&ht>Nt.y0&&ht<Nt.y1))continue;let at=rt>=m-1e-6?E:ir+E,bt=Math.min(ft,V(Y)),gt=Math.min(ft,V(et));if(!(bt<=rt+.005&&gt<=rt+.005)){if(bt<rt||gt<rt){let Nt=Y+(et-Y)*(rt-bt)/(gt-bt);bt<rt?u(G(Nt,rt),G(et,rt),G(et,gt),G(Nt,rt),[z[0],0,z[1]],F,at):u(G(Y,rt),G(Nt,rt),G(Nt,rt),G(Y,bt),[z[0],0,z[1]],F,at);continue}u(G(Y,rt),G(et,rt),G(et,gt),G(Y,bt),[z[0],0,z[1]],F,at)}}}}}});let g=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>zg(M,p)&&lw(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:p.opening.id,a:_,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b,outside:f}}function zg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function lw(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function cw(i,t,e,n){let r=[];for(let s of n){if(!zg(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function uw(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function hw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Vg(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=hw(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*m*(.2+.8*b)*uw(i.kind,l/u)}function Gg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let d=n[f]??.5;if(!(d<=.01))for(let[m,b]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0],p=i.blockers.filter(_=>_.ra===m||_.rb===m);for(let _ of t){if(_.room!==m||p.length&&au(_,p,u.x,u.y,u.z))continue;let v=_.x-u.x,M=_.y-u.y,S=_.z-u.z,A=Math.hypot(v,M,S)||1,y=Vg(_,u.x,u.y,u.z,v/A,M/A,S/A);g[0]+=_.color[0]*y,g[1]+=_.color[1]*y,g[2]+=_.color[2]*y}let x=Math.max(g[0],g[1],g[2]);x<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/x,g[1]/x,g[2]/x],level:Math.round(Math.min(1,x*.9*(.35+.65*d))*50)/50,kind:"wall",room:b})}});let s=fw(i),{pos:o,room:a}=i,l=new Float32Array(o.length),c=new Set;for(let u of r){let f=dw(i,s,u);c.add(f.key);let d=u.color.map(g=>Math.pow(g,1.5)),{verts:m,k:b}=f;for(let g=0;g<m.length;g++){let p=m[g]*3;l[p]+=d[0]*b[g],l[p+1]+=d[1]*b[g],l[p+2]+=d[2]*b[g]}}for(let u of s.weights.keys())c.has(u)||s.weights.delete(u);let h=new Float32Array(o.length);for(let u=0;u<a.length;u++){let f=u*3;(l[f]||l[f+1]||l[f+2])&&(h[f]=1-Math.exp(-l[f]*e*1.6),h[f+1]=1-Math.exp(-l[f+1]*e*1.6),h[f+2]=1-Math.exp(-l[f+2]*e*1.6))}return h}var Ug=new WeakMap;function fw(i){let t=Ug.get(i);if(!t){let e=new Map;i.room.forEach((n,r)=>{let s=e.get(n);s?s.push(r):e.set(n,[r])}),t={roomVerts:new Map([...e].map(([n,r])=>[n,Uint32Array.from(r)])),weights:new Map},Ug.set(i,t)}return t}function dw(i,t,e){let n=`${e.x},${e.y},${e.z},${e.kind},${e.level},${e.room}`,r=t.weights.get(n);if(r)return r;let s=t.roomVerts.get(e.room)??new Uint32Array(0),o=i.outside??-2,a=i.blockers.filter(f=>e.room===o||f.ra===e.room||f.rb===e.room),{pos:l,normal:c}=i,h=new Float32Array(s.length);for(let f=0;f<s.length;f++){let d=s[f]*3;a.length&&au(e,a,l[d],l[d+1],l[d+2])||(h[f]=Vg(e,l[d],l[d+1],l[d+2],c[d],c[d+1],c[d+2]))}let u={key:n,verts:s,k:h};return t.weights.set(n,u),u}function au(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let m=(u*o-f*s)/h;if(m<0||m>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*m))continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&b>p.y0&&b<p.y1))return!0}return!1}function Hg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Hf(i,t,e,n){let r=i.x-t.start[0],s=i.z-t.start[1],o=-(r*t.out[0]+s*t.out[1]),a=r*t.axis[0]+s*t.axis[1];if(o<.05||i.y<=t.sill+.05)return null;let l=o*(t.sill-e)/(i.y-t.sill);if(l>=n)return null;let c=i.y>t.top+.05?Math.min(n,o*(t.top-e)/(i.y-t.top)):n;if(c-l<.1)return null;let h=Math.max(o,1);return{d0:l,d1:c,D:o,ls:a,edge(u){let f=1+u/h;return[a-a*f,a+(t.width-a)*f]}}}function Wf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&qt([t,e],r.points));return n<0?i.rooms.length:n}function ks(i,t){return i&&t>=0&&t<i.length?i[t]:t}function oa(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function pw(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}function mw(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function gw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}function Bg(i,t,e,n){let r=o=>n*((e[0]-t[0])*(o[1]-t[1])-(e[1]-t[1])*(o[0]-t[0])),s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=0&&s.push(a),c>=0!=h>=0){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return s}function bw(i,t){let e=oa(t)>0?1:-1,n=[],r=[...i];for(let s=0;s<t.length&&r.length>=3;s++){let o=t[s],a=t[(s+1)%t.length],l=Bg(r,o,a,e===1?-1:1);l.length>=3&&Math.abs(oa(l))>1e-7&&n.push(l),r=Bg(r,o,a,e)}return n}var aa={open:0,open2:0,tilt:0,tilt2:0,cover:null},Wg=2043986,Xg=2769520,Xf=2242399,Zf=1845831,xw=1450554,Bn=16758087,lu=3662079,vw=1.2,yw=1.5,_w=.5,Mw=1846349,Sw=2572395,ww=1120816,Tw=1845831,Yf=5995775,qf=9085695,cr=zt(3662079,.08),Aw=.2,Ew=.45;function cu(i,t,e,n,r,s,o,a,l,c,h){let u=(d,m,b)=>t(d,m,b),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),zt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),zt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),zt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),zt(l.getHex(),.92)]];for(let[d,m,b,g,p]of f)i.tri(d,m,b,p,p,p,void 0,h),i.tri(d,b,g,p,p,p,void 0,h)}function re(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return cu(i,t,e,n,r,s,o,a,l,c,Jt);if(o>=h-1e-6)return cu(i,t,e,n,r,s,o,a,l,c,u);cu(i,t,e,n,r,s,o,h,l,c,Jt),cu(i,t,e,n,r,s,h,a,l,c,u)}function Fi(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,m)=>{let b=v=>h?(o-v)/h:.5,g=t(e,r,f),p=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,p,x,a,a,a,[0,b(f),1,b(f),1,b(d)],m),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],m)};o<=l+1e-6?u(s,o,Jt):s>=l-1e-6?u(s,o,c):(u(s,l,Jt),u(l,o,c))}function Rw(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),m=0,b=(s-r)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,b],l),i.tri(h,f,d,a,a,a,[0,m,1,b,0,b],l)}function Cw(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function Pw(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!Cw(i,t)&&Ei(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function $f(i,t,e,n,r,s,o,a,l){let c=Pw(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&re(e,n,-.04,h+.04,r+s,i.faceRoom+.07,u-.03,u,new tt(Zf),o,a,l),c.outside&&re(e,n,-.03,h+.03,-i.faceOut-.06,r-s,u-.04,u-.02,new tt(Zf),o,a,l)}function Yg(i,t,e){let n=new Qt,r=new Qt,s=new Qt(!0),o=new tt(Wg),a=new tt(Xg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,m=s.count,b=t.get(u.opening.id)??aa,g=u.width,{sill:p,top:x,bucket:_}=u,v=(y,R,E)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*R,E,u.start[1]+u.axis[1]*y+u.toRoom[1]*R],M=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",A=u.opening.type==="door"&&Ei(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let y=-u.faceOut-.012,R=u.faceRoom+.012,E=u.opening.type==="garage"&&(S?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),w=E?zt(Bn,.8):new tt(Wg),C=E?zt(Bn,1):new tt(Xg);re(n,v,-.045,.02,y,R,0,x+.045,w,C,e,_),re(n,v,g-.02,g+.045,y,R,0,x+.045,w,C,e,_),re(n,v,.02,g-.02,y,R,x-.02,x+.045,w,C,e,_)}if(u.opening.type==="door"){let y=Ei(u.opening,u.exterior),R=L0(y),E=u.opening.swing==="out"?-1:1,w=E>0?u.faceRoom:-u.faceOut,C=u.opening.leaves===2,L=.02,I=g-.02,O=I0(g,y,u.hingeAtStart,u.opening);if(O){let B=-u.faceOut-.012,z=u.faceRoom+.012,G=w-E*(R?.06:.04)/2,V=.06;for(let[W,K]of O.panels)re(n,v,W,W+V,B,z,.02,x-.02,o,a,e,_),re(n,v,K-V,K,B,z,.02,x-.02,o,a,e,_),re(n,v,W+V,K-V,B,z,.02,.12,o,a,e,_),Fi(r,v,W+V,K-V,G,.12,x-.02,cr,e,_);L=O.x0,I=O.x1}let T=C?(I-L)/2-.004:I-L,P=R?.06:.04;R&&(re(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new tt(Zf),a,e,_),u.exterior&&re(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,zt(Bn,.55),zt(Bn,.85),e,Jt));let N=A?[]:[[u.hingeAtStart,b.open]];C&&!A&&N.push([!u.hingeAtStart,b.open2??0]);let F=u.opening.open_angle;for(let[B,z]of N){let G=Math.min(1,Math.max(0,z)),V=y==="sliding"?0:F!=null&&F>0?(b.sensed?G:Math.min(1,G/_w))*Math.min(170,F)*(Math.PI/180):G*yw,W=y==="sliding"?G*T:0,K=(ht,at,bt)=>{let gt=ht*Math.cos(V)-at*Math.sin(V)-W,Nt=w+E*(at*Math.cos(V)+ht*Math.sin(V)+(W?.05:0));return v(B?L+gt:I-gt,Nt,bt)},nt=G>.05?Jt:_,X=S?!!b.sensed&&G<.05:G>.9,Y=X?zt(Bn,.7):new tt(R?ww:Mw),et=X?zt(Bn,.9):new tt(R?Tw:Sw);y==="glass"?(re(n,K,0,.05,-P,0,.01,x-.01,Y,et,e,nt),re(n,K,T-.05,T,-P,0,.01,x-.01,Y,et,e,nt),re(n,K,.05,T-.05,-P,0,.01,.12,Y,et,e,nt),re(n,K,.05,T-.05,-P,0,x-.08,x-.01,Y,et,e,nt),Fi(r,K,.05,T-.05,-P/2,.12,x-.08,cr,e,nt)):re(n,K,0,T,-P,0,.01,x-.01,Y,et,e,nt);for(let ht of[.001,-P-.001])y==="front_glass"?Fi(r,K,.12,T-.12,ht,x*.55,x-.18,cr,e,nt):R&&Fi(r,K,.1,.18,ht,.3,x-.3,cr,e,nt);let Z=Math.min(1.05,x*.5),J=R?.3:.012,rt=R?T-.11:T-.16,ft=R?T-.08:T-.05;re(n,K,rt,ft,.004,.05,Z-J,Z+J,new tt(Yf),new tt(qf),e,nt),re(n,K,rt,ft,-P-.05,-P-.004,Z-J,Z+J,new tt(Yf),new tt(qf),e,nt),b.unlocked&&B===u.hingeAtStart&&re(n,K,T-.022,T+.004,-P-.006,.006,.03,x-.03,zt(lu,.85),zt(lu,1),e,nt)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),R=new tt(13951231),E=u.faceRoom-.03,w=x*(1-y);y>.01&&Fi(s,v,.02,g-.02,E,w,x,R,e,_,.5);let C=(1-y)*x;C>.01&&Rw(s,v,.02,g-.02,E,E+C,x+.03,R,_,.5)}else if(Ei(u.opening,u.exterior)==="slide"){re(n,v,0,.06,M-.05,M+.05,p,x,o,a,e,_),re(n,v,g-.06,g,M-.05,M+.05,p,x,o,a,e,_),re(n,v,.06,g-.06,M-.05,M+.05,p,p+(p>.05?.06:.03),o,a,e,_),re(n,v,.06,g-.06,M-.05,M+.05,x-.06,x,o,a,e,_),$f(u,i,n,v,M,.05,a,e,_);let E=p+(p>.05?.06:.03),w=x-.06,C=(g-2*.06)/2+.03,L=Math.min(1,Math.max(b.open,b.tilt*.12)),I=S?!!b.sensed&&L<.02:L>.02,O=I?zt(Bn,.75):new tt(Xf),T=I?zt(Bn,.95):a,P=.06,N=(W,K,nt,X,Y,et)=>{let Z=(ft,ht,at)=>v(ft+nt,ht,at),J=W+C,rt=nt?Jt:_;re(n,Z,W,W+P,K,K+.04,E,w,X,Y,e,rt),re(n,Z,J-P,J,K,K+.04,E,w,X,Y,e,rt),re(n,Z,W+P,J-P,K,K+.04,E,E+P,X,Y,e,rt),re(n,Z,W+P,J-P,K,K+.04,w-P,w,X,Y,e,rt),Fi(r,Z,W+P,J-P,K+.02,E+P,w-P,et,e,rt)},F=u.hingeAtStart?.06:g-.06-C,B=u.hingeAtStart?g-.06-C:.06,z=L*(C-.08)*(u.hingeAtStart?-1:1);N(F,M-.05+.005,0,new tt(Xf),a,cr),N(B,M+.005,z,O,T,I?zt(Bn,.16):cr);let G=u.hingeAtStart?B+.025:B+C-.035,V=Math.min(1.05,(p+x)/2);re(n,(W,K,nt)=>v(W+z,K,nt),G,G+.012,M+.045,M+.07,V-.15,V+.15,new tt(Yf),new tt(qf),e,Jt)}else if(Ei(u.opening,u.exterior)==="glass_wall"){re(n,v,0,.04,M-.025,M+.025,p,x,o,a,e,_),re(n,v,g-.04,g,M-.025,M+.025,p,x,o,a,e,_),re(n,v,.04,g-.04,M-.025,M+.025,p,p+.03,o,a,e,_),re(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,o,a,e,_),$f(u,i,n,v,M,.025,a,e,_);let E=Math.max(1,Math.round((g-2*.04)/.9)),w=(g-2*.04)/E;for(let C=1;C<E;C++){let L=.04+C*w;re(n,v,L-.02,L+.02,M-.025,M+.025,p+.03,x-.04,o,a,e,_)}for(let C=0;C<E;C++){let L=.04+C*w+(C?.02:0),I=.04+(C+1)*w-(C<E-1?.02:0);Fi(r,v,L,I,M,p+.03,x-.04,cr,e,_)}}else{re(n,v,0,.06,M-.035,M+.035,p,x,o,a,e,_),re(n,v,g-.06,g,M-.035,M+.035,p,x,o,a,e,_),re(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,_),re(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,o,a,e,_),$f(u,i,n,v,M,.035,a,e,_);let E=.055,w=p+(p>.05?.06:.03),C=x-.06,L=M+.035,I=M+.035+.06,T=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let P of T){let N=P.open>.02||P.tilt>.02,F=S?!!b.sensed&&!N:N,B=F?zt(Bn,.75):new tt(Xf),z=F?zt(Bn,.95):a,G=P.x0,V=P.x1,W=V-G,K=!!u.opening.top_hung,nt=K?0:P.open*vw*(u.opening.swing==="out"?-1:1),X=K?0:P.tilt*Aw,Y=K?Math.max(P.open,P.tilt)*Ew:0,et=(J,rt,ft)=>{if(Y){let ge=rt-L,be=ft-C,pe=P.atStart?G+J:V-J;return v(pe,L+ge*Math.cos(Y)+be*Math.sin(Y),C-ge*Math.sin(Y)+be*Math.cos(Y))}let ht=ft-w,at=rt+ht*Math.sin(X),bt=w+ht*Math.cos(X),gt=J*Math.cos(nt)-(at-L)*Math.sin(nt);at=L+(at-L)*Math.cos(nt)+J*Math.sin(nt);let Nt=P.atStart?G+gt:V-gt;return v(Nt,at,bt)},Z=Math.abs(nt)>.05||Y>.05?Jt:_;if(re(n,et,0,E,L,I,w,C,B,z,e,Z),re(n,et,W-E,W,L,I,w,C,B,z,e,Z),re(n,et,E,W-E,L,I,w,w+E,B,z,e,Z),re(n,et,E,W-E,L,I,C-E,C,B,z,e,Z),Fi(r,et,E,W-E,(L+I)/2,w+E,C-E,F?zt(Bn,.16):cr,e,Z),b.unlocked&&P.atStart===u.hingeAtStart&&re(n,et,W-.022,W+.004,L-.006,I+.006,w+.02,C-.02,zt(lu,.85),zt(lu,1),e,Z),Ei(u.opening,u.exterior)==="bars"){let J=(w+C)/2,rt=(L+I)/2;re(n,et,E,W-E,rt-.012,rt+.012,J-.012,J+.012,B,z,e,Z),re(n,et,W/2-.012,W/2+.012,rt-.012,rt+.012,w+E,C-E,B,z,e,Z)}}}if(b.cover!==null){let y=-u.faceOut,R=x+.2;re(n,v,-.05,g+.05,y-.15,y,x,R,new tt(xw),a,e,_);let E=Math.min(1,Math.max(0,b.cover));if(E>.01){let w=x-E*(x-p);Fi(s,v,0,g,y-.07,w,x,new tt(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var Iw=.3,qg=2.6;function $g(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=M=>{let S=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...S,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return S.every(y=>qt(y,i))&&!n.some(y=>A.some(R=>qt(R,y)))},d=(M,S)=>f(h?[M,S]:[S,M]),m=(M,S)=>{let A=Math.ceil(Math.hypot(S[0]-M[0],S[1]-M[1])/.05);for(let y=1;y<A;y++)if(!f([M[0]+(S[0]-M[0])*y/A,M[1]+(S[1]-M[1])*y/A]))return!1;return!0},[b,g,p,x]=h?[o,a,l,c]:[l,c,o,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let S=null,A=null,y=.05;for(let C=p;C<=x+1e-6;C+=y)if(d(M,C)&&(A??=C),(!d(M,C)||C+y>x+1e-6)&&A!==null){let L=d(M,C)?C:C-y;(!S||L-A>S[1]-S[0])&&(S=[A,L]),A=null}if(!S||S[1]-S[0]<.2)continue;let R=C=>{let[L,I]=C?S:[S[1],S[0]];return[h?[M,L]:[L,M],h?[M,I]:[I,M]]},E=R(v),w=_[_.length-1];if(w&&n.length&&!m(w,E[0])){let C=R(!v);if(!m(w,C[0]))continue;E=C,v=!v}_.push(E[0],E[1]),v=!v}return _}function Jf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Kf=i=>Math.atan2(Math.sin(i),Math.cos(i));function Zg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Kf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),qg*e),!0)}let a=Math.atan2(r,s),l=Kf(a-i.heading);if(i.heading=Kf(i.heading+Math.sign(l)*Math.min(Math.abs(l),qg*e)),Math.abs(l)<.35){let c=Math.min(o,Iw*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function Kg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var Lw=66,Fw=250;function Jg(i,t){return i?t>=3e4?Fw:Lw:0}function jg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Dw=50,jf=90,Qg=4e3;function tb(i){if(i.length<jf)return!1;let t=[...i].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]>Dw}var Qf="neonplan3d.slow_device";var kn=null,eb=new Map;function ib(i,t=0){let e=new Qt,n=new Ne,r=Me(i.type);if(r?.light)Vc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)td(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};zc(e,n,new Qt,s,0,!0)}return{buf:e,lines:n}}function Ow(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=eb.get(r);if(s)return s;e&&Lo(e),kn??=new Tr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),kn.setSize(t,t,!1),kn.setClearColor(0,0);let{buf:o,lines:a}=ib(i),l=new ai,c=new Et(o.geometry(),new Yt({vertexColors:!0,color:new tt(n,n,n)})),h=new qe(a.geometry(),new $e({vertexColors:!0,color:new tt(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new yn().setFromObject(c),f=u.getCenter(new q),d=new Dn(-1,1,1,-1,.01,100);d.position.copy(f).add(new q(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let v=new q(p,x,_).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let b=m*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),kn.render(l,d);let g=kn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),eb.set(r,g),g}function Nw(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=nb.get(s);if(o)return o;n&&Lo(n);let{buf:a,lines:l}=ib(i,t),c=new Et(a.geometry(),new Yt({vertexColors:!0,color:new tt(r,r,r)})),h=new qe(l.geometry(),new $e({vertexColors:!0,color:new tt(r*1.8,r*1.8,r*1.8)})),u=new yn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,m=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((b-m)*e)));kn??=new Tr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(1),kn.setSize(g,p,!1),kn.setClearColor(0,0);let x=new ai;x.add(c,h);let _=new Dn(f,d,b,m,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),kn.render(x,_);let v=kn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:m,y1:b};return nb.set(s,M),M}var nb=new Map;var MP={Group:Pe,Mesh:Et,MeshBasicMaterial:Yt,CanvasTexture:pn,Color:tt,PlaneGeometry:Yn,BufferGeometry:Ot,Float32BufferAttribute:Lt,DoubleSide:ne},sb={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},Uw=[.22,.88,1],Bw=2.4,ob=1.4,kw=.22,ab=.94,lb=140,cb=1.5;function zw(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,h=l-o,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*h)/u));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+h*f)))}return n}var nd=32,Vw=500,ub=160;function hb(i,t){return i.furniture.some(e=>t.has(e.id))||(i.outdoor??[]).some(e=>(e.gates??[]).some(n=>t.has(n.id)))}var Gw=33,fb=.028,Hw=.026,Ww=.012,Xw=.09,oe=2767456,Yw=2240847,qw=3096944,$w=1911110,Zw=1,db=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),uu=450,pb=125,Kw=200,Jw=.08,ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},jw=new tt(1714765);function Qw(){let i=navigator;return jg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)||tT()}var gb=!1;function tT(){if(gb)return!0;try{return localStorage.getItem(Qf)==="1"}catch{return!1}}var id=class{host;options;renderer;scene=new ai;camera=new Qe(38,1,.1,400);controls;labels;root=new Pe;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new iu;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;slowWatch=null;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;pendingFurniture=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Ot,new $e({color:10471679,transparent:!0,opacity:.4,blending:Se,depthWrite:!1}));snow=new An(new Ot,new _n({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));mist=new An(new Ot,new _n({color:14542064,size:13,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));skyDisc=new Et(new ao(1,28),new Yt({color:16767370,transparent:!0,opacity:0,blending:Se,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;roofSnow=0;snowMat=null;roofLights="off";roofOutline=!0;lightsMat=null;lightsHalo=null;firework=null;fireworkTimer;fireworkAt=0;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fitted=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=nT(),this.blindTexture=rT(),this.haloTexture=aT(),this.ground=new Et(new Yn(1,1),new Yt({transparent:!1,blending:Se,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.mist.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.mist.visible=!1,this.mist.material.map=this.haloTexture,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.mist,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Jg(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Kg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Lo(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,this.controls.rightClickBack=!!t.settings.right_click_back,M0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&this.fitted&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Sc(h.floor).some(u=>u.id===t)),n=e?Sc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=di(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new q(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=di(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new q(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new q(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){let r=Df(n);e.add(r);let s=this.devicePins.get(r);s||(s={el:this.makeDevicePin(n.id,n.furnitureId),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r,s),this.labels.append(s.el));let o=s.el;s.icon!==n.icon&&(s.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let a=n.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${n.name}: ${n.text}`;s.label!==c&&(s.label=c,o.title=n.name,o.setAttribute("aria-label",c)),s.active!==n.active&&(s.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let h=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==h&&(s.glow=h,h?o.style.setProperty("--fp3d-glow",h):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ea(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ea(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Fg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Lg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Pe;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new Et(new fo(.92,1,48),new Yt({color:3662079,transparent:!0,opacity:0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Ot;c.setAttribute("position",new Lt(a,3));let h=new qe(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:Se,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=la(r),o=ed(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setRoofSnow(t){let e=Math.round(Math.max(0,Math.min(1,t))*10)/10;e!==this.roofSnow&&(this.roofSnow=e,this.buildRoofMesh(),this.invalidate())}setRoofLights(t,e=!0){t===this.roofLights&&e===this.roofOutline||(this.roofLights=t,this.roofOutline=e,this.buildRoofMesh(),this.invalidate())}setFirework(t){if(t===!!this.firework)return;if(!t){this.scene.remove(this.firework.points),this.firework.dispose(),this.firework=null;return}let e=(this.building?.floors??[]).flatMap(o=>o.rooms.flatMap(a=>a.points));if(!e.length)return;let n=Math.max(...(this.building?.floors??[]).map(o=>o.elevation+o.height)),r=e.map(o=>o[0]),s=e.map(o=>o[1]);this.firework=new ou({x0:Math.min(...r),z0:Math.min(...s),x1:Math.max(...r),z1:Math.max(...s),top:n}),this.scene.add(this.firework.points),this.fireworkAt=performance.now(),this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of rn(c.points))for(let f of u)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ot;l.setAttribute("position",new Lt(s,3)),l.setAttribute("color",new Lt(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new Qt;for(let s of e)vg(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,m,b,g)=>{let p=Math.hypot(m-f,b-d)||1,x=-(b-d)/p*(g/2+o),_=(m-f)/p*(g/2+o);a.push(f+x,d+_,0,m+x,b+_,0,m-x,b-_,0,f+x,d+_,0,m-x,b-_,0,f-x,d-_,0)},h=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,m=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(m)*h,1.47+Math.sin(m)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ot;return u.setAttribute("position",new Lt(a,3)),u},n=new Et(e(0),new Yt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ne,forceSinglePass:!0})),r=new Et(e(.05),new Yt({color:t,transparent:!0,opacity:.22,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0}));n.renderOrder=6,r.renderOrder=5;let s=new Pe;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Ng(t),n=e?1:0;n===Bs.value&&(!e||Us.value.equals(new q(...e)))||(Bs.value=n,e&&Us.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Og(t),wm(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||Pm(o.type)))&&this.rebuild();let n=sa(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new tt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new fs(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0,o=e&&t.fog>0?Math.round(18+30*t.fog):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.seedMist(o),this.rain.visible=r>0,this.snow.visible=s>0,this.mist.visible=o>0}seedMist(t){if((this.mist.geometry.getAttribute("position")?.count??0)===t)return;let n=this.weatherBox,[r,s,o,a]=[n.x0+6,n.x1-6,n.z0+6,n.z1-6],l=new Float32Array(t*3);for(let h=0;h<t;h++){let u=0,f=0;for(let d=0;d<12&&(u=n.x0-3+Math.random()*(n.x1-n.x0+6),f=n.z0-3+Math.random()*(n.z1-n.z0+6),!(u<r-1||u>s+1||f<o-1||f>a+1));d++);l.set([u,n.y0+.4+Math.random()*1.6,f],h*3)}this.mist.geometry.dispose();let c=new Ot;c.setAttribute("position",new Lt(l,3)),this.mist.geometry=c}placeFog(){let t=this.scene.fog;if(!(t instanceof fs))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new q((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(this.weather?.fog??0))}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ot;l.setAttribute("position",new Lt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible&&!this.mist.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}if(this.mist.visible){let a=this.mist.geometry.getAttribute("position"),l=a.array,c=t/1e3,h=.12+o*.12;for(let u=0;u<l.length;u+=3){let f=l[u]+h*n,d=l[u+2]+Math.sin(c*.3+u)*.05*n;f>r.x1+3&&(f=r.x0-3),l[u]=f,l[u+2]=d}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ie,o=(r?t.azimuth+180:t.azimuth)*ie,a=Math.max(10,Math.abs(t.elevation))*ie,{center:l,r:c}=this.skyFrame(),h=new q(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new q((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*ie,s=this.weather?.cloud??0,o=n&&!this.lowQuality&&e.elevation>1&&s<.9&&!this.roomTint,a=o?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${s.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,o?this.drawShadow(t,e,r,s):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${s.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(p,x,_=0)=>{let v=Math.max(0,x)*ie,M=r+p*ie;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+_,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*s,m=Date.now(),b=p=>new Date(p).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(p=>({at:f(p.azimuth,p.elevation),t:p.t,elevation:p.elevation})),now:m,hours:l.points.filter(p=>p!==l.rise&&p!==l.set&&new Date(p.t).getMinutes()===0).map(p=>f(p.azimuth,p.elevation)),labels:[l.rise,l.set].flatMap(p=>p?[{text:b(p.t),at:f(p.azimuth,p.elevation,g*2.2),rising:p===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=Ag(this.building);if(!t||!this.building)return t;let e=ar(this.building),n=e?this.floorMap.get(e.id):void 0;return n?.y?{...t,y:t.y+n.y}:t}cameraBusy(){return this.controls.busy||this.lastFrame>0&&performance.now()-this.lastFrame<100}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),s=n&&r>0?ar(n):null,o=!!s&&Math.abs(t.floor.elevation-s.elevation)<.5,a=f=>Math.pow(Math.max(0,(f-.2)/.8),2),l=o?e.filter(f=>a(f.level)>.02):[],c=[...t.openings.values()].map(f=>(f.cover??0).toFixed(1)).join(","),h=l.length?`${r.toFixed(2)}|${l.map(f=>`${f.room}:${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.level.toFixed(2)},${f.color.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${c}|${t.lightSurface?1:0}`:"";if(h===t.spillSig)return;t.spillSig=h;let u=new Qt;if(h){let f=t.lightSurface?.blockers??[],d=t.floor.rooms.filter(p=>p.points.length>=3),m=(p,x)=>{let _=d.find(v=>qt([p,x],v.points));return _?_.outdoor?0:99:S0(t.floor,p,x)},b=5,g=[[0,0],[.18,1],[.82,1],[1,0]];for(let p of t.geo.openings){if(p.opening.type!=="window"||!p.exterior)continue;let x=t.floor.rooms.findIndex(L=>L.id===p.opening.room_id);if(x<0)continue;let _=ks(t.lightZones,x),M=1-(t.openings.get(p.opening.id)?.cover??0),S=p.top-p.sill;if(M<.05||S<.1)continue;let A=[-p.toRoom[0],-p.toRoom[1]],y=(L,I)=>[p.start[0]+p.axis[0]*L+A[0]*I,p.start[1]+p.axis[1]*L+A[1]*I],[R,E]=y(p.width/2,p.faceOut+.05),w=m(R,E);if(w>50)continue;let C=(p.sill+p.top)/2;for(let L of l){if(L.room!==_)continue;let I=[.1,.3,.5,.7,.9].filter(rt=>{let[ft,ht]=y(rt*p.width,-.02);return!au(L,f,ft,C,ht)});if(!I.length)continue;let O=Math.max(0,I[0]-.1),T=Math.min(1,I[I.length-1]+.1),P={start:y(O*p.width,0),axis:p.axis,out:A,width:(T-O)*p.width,sill:p.sill,top:p.top},N=Hf(L,P,w,b);if(!N)continue;let F=Math.max(N.d0,p.faceOut+.02),B=m(...y(O*p.width+P.width/2,F));if(B>50||Math.abs(B-w)>.1&&(N=Hf(L,P,B,b),!N))continue;let z=Math.max(N.d0,p.faceOut+.02);if(N.d1-z<.15)continue;let G=(rt,ft)=>{let[ht,at]=N.edge(ft);return O*p.width+ht+rt*(at-ht)},V=Hg((rt,ft)=>m(...y(G(rt,z+ft),z+ft)),B,N.d1-z);if(V<.15)continue;let W=N.d1>=b&&z+V>b-.1,K=Math.max(L.color[0],L.color[1],L.color[2],1e-6),nt=.3*r*a(L.level)*M*Math.min(1,S/1.2)/Math.sqrt(l.filter(rt=>rt.room===_).length),X=new tt(L.color[0]/K*nt,L.color[1]/K*nt,L.color[2]/K*nt),Y=(rt,ft,ht)=>{let at=(rt-L.x)**2+(ft-L.y)**2+(ht-L.z)**2,bt=1/(1+at/9),gt=Math.max(0,L.y-ft)/Math.sqrt(at||1e-6);return Math.min(1,bt*Math.sqrt(bt)*gt/.15)},et=(rt,ft)=>{let[ht,at]=y(G(rt,ft),ft),bt=m(ht,at);return[ht,(bt>50?B:Math.max(B,bt))+.014,at]},Z=(rt,ft)=>{let ht=Math.min(1,(ft-z)/.25+.3),at=W?Math.min(1,(z+V-ft)/1.2):1;return Y(rt[0],rt[1],rt[2])*ht*at},J=Math.max(4,Math.ceil(V/.3));for(let rt=0;rt<J;rt++){let ft=z+V*rt/J,ht=z+V*(rt+1)/J;for(let at=0;at+1<g.length;at++){let[bt,gt]=g[at],[Nt,ge]=g[at+1],be=et(bt,ft),pe=et(Nt,ft),se=et(Nt,ht),$=et(bt,ht),De=X.clone().multiplyScalar(Z(be,ft)*gt),he=X.clone().multiplyScalar(Z(pe,ft)*ge),H=X.clone().multiplyScalar(Z(se,ht)*ge),D=X.clone().multiplyScalar(Z($,ht)*gt);u.tri(be,pe,se,De,he,H),u.tri(be,se,$,De,H,D)}}}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=u.geometry(),t.spillMesh.visible=u.count>0}drawShadow(t,e,n,r){let s=ar(t),o=s?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!s||!o.length)return this.sunFx.hideShadow();let a=o.flatMap(g=>g.points.map(p=>p[0])),l=o.flatMap(g=>g.points.map(p=>p[1])),c=s.elevation+ws(s,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*ie,u=wg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Tg(u);if(!f)return this.sunFx.hideShadow();let d=s.elevation-c<=.35?s.elevation+.012:c+.012,m=t.floors.filter(g=>Math.abs(g.elevation-s.elevation)<.5).flatMap(g=>g.rooms.filter(p=>!p.outdoor&&p.points.length>=3).map(p=>p.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,m,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){t.textContent="";let r=document.createElement("span");if(r.className="fp3d-pin-name",r.textContent=e||"\u2013",t.append(r),n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??aa,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=r.out??(r.settled&&r.moving>0?1:0),o=this.awnings.get(n)??{cur:s,to:s,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)hb(e.floor,t)&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/ub),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)hb(r.floor,n)&&this.buildFridges(r);return!0}buildFridges(t){let e=new Qt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Rm(e,n,ln(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Em(e,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=vc(n.type),s=r?Me(n.type):void 0;r&&s&&Fm(e,s,r,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.gateTris=[];for(let n of t.floor.outdoor??[])for(let r of wc(n)){let s=e.count;Nm(e,t.floor,n,r,this.awnings.get(r.gate.id)?.cur??0);let o=r.gate.entity&&r.gate.entity!=="none"?r.gate.entity:r.gate.contact&&r.gate.contact!=="none"?r.gate.contact:null;o&&t.gateTris.push({id:o,start:s,end:e.count})}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new tu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new q(e.x,a,e.z),direction:new q(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(eu);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(eu),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.firework?.dispose(),this.snowMat?.dispose(),this.lightsMat?.dispose(),this.lightsHalo?.dispose(),clearTimeout(this.fireworkTimer),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&Qw();this.lowQuality=e,this.slowWatch=t==="auto"&&!e?{quality:t,since:performance.now(),last:0,ms:[]}:null,this.applyWeather(),this.highQuality=t==="high";let n=new Tr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ue,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new jc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),back:()=>this.options.onBack?.(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t,e){let n=document.createElement("button");n.className="fp3d-dev",n.dataset.entity=t;let r=document.createElement("span");r.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let a=document.createElement("span");a.className="fp3d-dev-name",n.append(r,s,o,a);let l,c=!1;n.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t,this.pendingFurniture=e??null;return}u.stopPropagation(),c=!1,clearTimeout(l),l=setTimeout(()=>{c=!0;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)},Vw)});let h=()=>clearTimeout(l);return n.addEventListener("pointerleave",h),n.addEventListener("pointercancel",h),n.addEventListener("pointerup",h),n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(c)return;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();if(this.tapOpens){let m=this.devices.find(b=>b.id===t);return m?this.options.onRoomTap?.(m.floorId,m.roomId??null):this.onTap(f.left+f.width/2-d.left,f.bottom-d.top)}this.options.onDeviceTap?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}),n.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}}),n}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=kg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=mb(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=ks(r,a.ra),a.rb=ks(r,a.rb)}t.lightSurface=n;let s=new Ot;s.setAttribute("position",new Lt(n.pos,3)),s.setAttribute("color",new Lt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Lt(n.fold,1));let o=new br(new Uint32Array(n.pos.length/3),1);o.setUsage(mh),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=Me(t.pack);if(!e)return null;let[n,r,s]=t.size??ca.wall;return Dm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Wf(t.floor,n.x,n.z),a=ks(t.lightZones,o),[l,,c]=n.size??(n.lamp?ca[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<Zw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],m=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ie,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*ie;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:m+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:p||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:m,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=qt([h.x,h.z],s)?0:zw(h.x,h.z,s);if(f>cb)continue;let d=u.level*(1-f/cb);for(let m=0;m<3;m++)a[m]+=u.color[m]*d;o+=d}if(o<.02)continue;let[l,c]=di(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:ks(t.lightZones,Wf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(m=>m.opening.id===u.id);if(f&&Ei(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Gg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:on(new Yt({vertexColors:!0}),this.themeUniform,!1,!1),pattern:iT(this.patternTexture),wall:on(xi(new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:xi(new Yt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Yt({vertexColors:!0,blending:xo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ne,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-1}),lines:on(xi(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:xi(new Yt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:on(xi(new Yt({vertexColors:!0,side:ne}),t),this.themeUniform),glass:xi(new Yt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0}),t),blinds:on(xi(new Yt({map:this.blindTexture,vertexColors:!0,side:ne}),t),this.themeUniform),water:on(new Yt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ne,forceSinglePass:!0}),this.themeUniform),flow:oT(this.flowTime),pipeLine:sT(this.flowTime),patch:new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ne,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Yt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:zf(this.flowTime),lamps:on(new Yt({vertexColors:!0}),this.themeUniform),halos:new _n({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1}),cones:new Yt({vertexColors:!0,transparent:!0,blending:wl,blendSrc:yo,blendDst:vo,blendSrcAlpha:Tl,blendDstAlpha:vo,depthWrite:!1,side:ne,forceSinglePass:!0}),screens:new Yt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0}),earth:on(new Yt({vertexColors:!0}),this.themeUniform),earthWell:on(new Yt({vertexColors:!0,side:ne}),this.themeUniform),earthLines:on(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=ar(n)?.id===s.id?o.filter(at=>at.face===Ef).map(at=>({field:at,face:zm(n,at)})):[],l=o.filter(at=>at.face.startsWith(`wall:${s.id}:`));if(l.length){let at=new Map(km(n,s.id).map(bt=>[bt.key,bt]));for(let bt of l){let gt=at.get(bt.face);gt&&a.push({field:bt,face:gt})}}let h=Qh(n).some(at=>k0(at,s.elevation+s.height)&&ef(at,s.elevation))?(at,bt)=>{let gt=z0(n,at,bt,s.elevation);return gt===null?null:gt-s.elevation}:void 0,u=eg(Bf(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,ng(n.floors,s),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new Pe,b=new Et(u.floor,d.floor),g=new Et(u.shadow,d.shadow);g.renderOrder=1;let p=new Et(u.floor,d.pattern);p.renderOrder=2;let x=new Et(new Ot,d.glow);x.renderOrder=3,x.visible=!1;let _=new Et(new Ot,d.frames),v=new Et(new Ot,d.blinds),M=new Et(new Ot,d.glass);M.renderOrder=4;let S=new Et(new Ot,d.lamps);S.visible=!1;let A=new Et(new Ot,d.cones);A.visible=!1,A.renderOrder=3;let y=new Et(new Ot,d.cones);y.visible=!1,y.renderOrder=3;let R=new An(new Ot,d.halos);R.visible=!1,R.renderOrder=7;let E=new Et(new Ot,d.cones);E.visible=!1,E.renderOrder=7;let w=new Et(new Ot,d.cones);w.visible=!1,w.renderOrder=7;let C=new Et(new Ot,d.lamps);C.visible=!1;let L=new Et(new Ot,d.lamps);L.visible=!1;let I=new Et(new Ot,d.patch);I.visible=!1,I.renderOrder=3;let O=new Et(new Ot,d.patchGlow);O.visible=!1,O.renderOrder=3;let T=new Et(new Ot,d.screens);T.visible=!1,T.renderOrder=5;let P=new Et(new Ot,d.flow);P.renderOrder=5,P.frustumCulled=!1;let N=new Et(new Ot,d.pipeLine),F=new Et(new Ot,d.pipeLine),B=new Et(new Ot,d.pipeLine);for(let at of[N,F,B])at.renderOrder=4,at.frustumCulled=!1,at.visible=!1;let z=kf(a,s.elevation),G=z?new Et(z.geometry,d.solarLive):null;G&&(G.renderOrder=6,ea(z,this.solarLevels));for(let at of[_,v,M])at.frustumCulled=!1;let V=new Et(u.walls,d.glassWall),W=new Et(u.walls,d.wall);V.renderOrder=6;let K=new Et(u.water,d.water);K.renderOrder=4;let nt=Math.min(...n.floors.filter(at=>at.rooms.length).map(at=>at.elevation)),X=sg(n,s,u.openings,s.elevation===nt),Y=X?[new Et(X.earth.geometry(),d.earth),new Et(X.wells.geometry(),d.earthWell),new qe(X.lines.geometry(),d.earthLines)]:[];for(let at of Y)at.userData.earth=!0;m.add(b,g,p,x,W,K,new qe(u.lines,d.lines),_,v,M,P,N,F,B,S,A,y,R,E,w,C,L,I,O,T,V,...G?[G]:[],...Y),this.root.add(m);let et=document.createElement("button");et.className="fp3d-pin fp3d-pin-floor",et.dataset.floor=s.id;let Z=document.createElement("b");Z.textContent=s.name||"\u2013";let J=document.createElement("span");J.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",et.append(Z,J),et.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(et);let rt=t.get(s.id),ft=[],ht=null;for(let at of Sc(s)){let bt=document.createElement("button");bt.className="fp3d-pin",bt.dataset.room=at.id,bt.dataset.floor=s.id,this.fillRoomPin(bt,at.name,this.roomInfo.get(at.id)),bt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,at.id)),this.labels.append(bt);let[gt,Nt]=di(at.points);if(ft.push({pin:bt,room:at,cx:gt,cz:Nt}),!at.outdoor)for(let[ge,be]of at.points)ht??={x0:ge,x1:ge,z0:be,z1:be},ht.x0=Math.min(ht.x0,ge),ht.x1=Math.max(ht.x1,ge),ht.z0=Math.min(ht.z0,be),ht.z1=Math.max(ht.z1,be)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:u,floorMesh:b,shadowMesh:g,patternMesh:p,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:P,pipeLineMesh:N,pipeHouseMesh:F,pipeFloorMesh:B,pipeLineSig:"",solarMesh:G,solarLive:z,lampMesh:S,sunMesh:A,sunSig:"",spillMesh:y,spillSig:"",haloMesh:R,coneMesh:E,trailMesh:w,fridgeMesh:C,pipeMesh:L,pipeSig:"",patchMesh:I,patchGlowMesh:O,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],gateTris:[],glassTris:[],blindTris:[],wallMesh:W,screenMesh:T,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ht,roomPins:ft,labelSize:null,materials:d,mask:f,openings:new Map,y:rt?.y??0,o:rt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:et})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??aa);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(p=>p.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>p.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Zm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Ur(this.building).map(p=>[p.key,p])),n=this.building.settings.roof?.solar??[],r=zf(this.flowTime),s=[],o=new Pe,a=on(new Yt({vertexColors:!0,transparent:!0,side:ne,forceSinglePass:!0}),this.themeUniform),l=on(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),c=on(new Yt({vertexColors:!0,transparent:!0,side:ne,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),h=new Pe,u=on(new Yt({vertexColors:!0,side:ne}),this.themeUniform),f=on(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:ne,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),d=on(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:ne,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),m=on(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(p=>{let x=new Pe;x.add(new Et(p.solid.geometry(),a),new qe(p.lines.geometry(),l)),p.glass.count&&x.add(new Et(p.glass.geometry(),c));let _=n.flatMap(S=>{let A=e.get(S.face);return A&&(A.section?p.sections?.includes(A.section):p===t[0])?[{face:A,field:S}]:[]}),v=kf(_,p.floor.elevation+p.base);if(v){let S=new Et(v.geometry,r);S.renderOrder=9,x.add(S),s.push(v),ea(v,this.solarLevels)}if(this.roofSnow>0){let S=[...e.values()].filter(y=>y.section?p.sections?.includes(y.section):p===t[0]),A=Cg(S,p.floor.elevation+p.base);if(A){this.snowMat??=new Yt({color:15857151,transparent:!0,side:ne,forceSinglePass:!0,depthWrite:!1}),this.snowMat.opacity=.85*this.roofSnow;let y=new Et(A,this.snowMat);y.renderOrder=9,x.add(y)}}if(this.roofLights!=="off"){let S=[...e.values()].filter(y=>y.section?p.sections?.includes(y.section):p===t[0]),A=Rg(S,p.floor.elevation+p.base,this.roofLights==="color",this.roofOutline);if(A){let y=new Ot;y.setAttribute("position",new Lt(A.positions,3)),y.setAttribute("color",new Lt(A.colors,3)),this.lightsMat??=new _n({size:.24,vertexColors:!0,sizeAttenuation:!0,map:na(),alphaTest:.35,transparent:!0}),this.lightsHalo??=new _n({size:.8,vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1,blending:Se,sizeAttenuation:!0,map:na()});let R=new An(y,this.lightsMat),E=new An(y,this.lightsHalo);R.renderOrder=10,E.renderOrder=11,x.add(R,E)}}p.winRoof?.solid.count&&x.add(new Et(p.winRoof.solid.geometry(),u),new qe(p.winRoof.lines.geometry(),m)),p.winRoof?.glass.count&&x.add(new Et(p.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let M=null;(p.win?.solid.count||p.win?.glass.count)&&(M=new Pe,M.add(new Et(p.win.solid.geometry(),u),new qe(p.win.lines.geometry(),m)),p.win.glass.count&&M.add(new Et(p.win.glass.geometry(),f)),h.add(M));for(let[S,A]of p.winBelow??[]){if(!A.solid.count&&!A.glass.count)continue;let y=new Pe;y.add(new Et(A.solid.geometry(),u),new qe(A.lines.geometry(),m)),A.glass.count&&y.add(new Et(A.glass.geometry(),f)),h.add(y),b.push({floorId:S,win:y})}return{group:x,floorId:p.floor.id,rideId:Y0(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:M}});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:m,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/ab)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?ab*n:0,o=1-Math.exp(-t/lb),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*ob:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*ob:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:kw)):r=this.explode?n.rank*Bw:0,n.ty=r,n.to=s;let a=e===n?an:ui;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/lb);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e&&this.sunFx&&this.buildSunFx(),e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/ub);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??aa,h=(d,m)=>(d??null)===(m??null)||typeof d=="number"&&typeof m=="number"&&Math.abs(d-m)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let m=c[d]??0,b=l[d]??0,g=m-b;Math.abs(g)<.003?u[d]=m:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=Kw)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new tt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*Jw+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>uu?.5+.5*Math.sin(f/140):f/uu;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0},${h.ownLook?1:0}`).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}${h.motion?",m":""}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new Qt,u=[],f=[],d=new Map,m=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??m)>Math.min(t.floor.cut_height,m):b.lamp?db.has(b.lamp)&&(b.top??m)>Math.min(t.floor.cut_height,m):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let p=h.count,x=b.pack?Me(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||Im(h,b.model,b.x,b.model==="camera_ceiling"?m:b.y,b.z,b.rotation??0):x?Vc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):td(h,{...b,lamp:b.lamp},b.top??m,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:p,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:p,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=u0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],m=d?.55+.45*d.level:0,b=d?new tt(...d.color.map(x=>Math.min(1,x*m))):new tt($w),g=n(h.id);g>0&&b.lerp(new tt(1,1,1),.7*g);let p=new tt(b.getHex());h0(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ie,r=this.weather?.cloud??0,s=mb(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new Qt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ie,h=e.azimuth*ie,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c),d=new Set;for(let m of t.geo.openings){if(m.opening.type!=="window"||!m.exterior||!(m.width>.05))continue;let b=[-m.toRoom[0],-m.toRoom[1]],g=b[0]*u[0]+b[1]*u[1];if(g<.05)continue;let p=t.openings.get(m.opening.id),x=Math.max(0,m.sill),_=m.top-(p?.cover??0)*(m.top-x);if(_-x<.05)continue;let v=[m.start,m.axis,m.width,x,_].join();if(d.has(v))continue;d.add(v);let M=P=>Math.min(7,P*f),S=(P,N)=>{let F=M(N);return[m.start[0]+m.axis[0]*P+m.toRoom[0]*m.faceRoom-u[0]*F,.02,m.start[1]+m.axis[1]*P+m.toRoom[1]*m.faceRoom-u[1]*F]},A=.085*l*Math.min(1,g*1.5),y=new tt(1*A,.72*A,.36*A),R=y.clone().multiplyScalar(.5),E=M(_)-M(x),w=(P,N)=>y.clone().lerp(R,(N-x)/(_-x)).multiplyScalar(ta(P,m.width)*ta(M(N)-M(x),E)),C=t.floor.rooms.findIndex(P=>P.id===m.opening.room_id);if(C<0||t.floor.rooms[C].points.length<3)continue;let L=s[C],I=t.floor.rooms.filter((P,N)=>s[N]===L&&P.points.length>=3).map(P=>P.points),O=Math.max(2,Math.ceil(Math.min(7,_*f)/.25)),T=Math.max(2,Math.ceil(m.width/.3));for(let P=0;P<O;P++){let N=x+(_-x)*P/O,F=x+(_-x)*(P+1)/O;for(let B=0;B<T;B++){let z=m.width*B/T,G=m.width*(B+1)/T,V=S((z+G)/2,(N+F)/2);if(!I.some(Y=>qt([V[0],V[2]],Y)))continue;let W=S(z,N),K=S(G,F),nt=w(z,N),X=w(G,F);a.tri(W,S(G,N),K,nt,w(G,N),X),a.tri(W,K,S(z,F),nt,X,w(z,F))}}}this.pushRoofSun(t,a,s,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Ur(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let u of l){let f=c.get(u.face),d=Xc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let m=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,p,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let v=(I,O,T)=>[I[0]+(O[0]-I[0])*T,I[1]+(O[1]-I[1])*T,I[2]+(O[2]-I[2])*T],M=v(x,b,_),S=v(p,g,_),A=t.floor.rooms.findIndex(I=>I.id===d.roomId);if(A<0)continue;let y=t.floor.rooms.filter((I,O)=>n[O]===n[A]&&I.points.length>=3).map(I=>I.points),R=(I,O)=>{let P=(F,B)=>v(v(I[0],I[1],F/6),v(I[3],I[2],F/6),B/6),N=(F,B)=>O.clone().multiplyScalar(ta(F,6,1)*ta(B,6,1));for(let F=0;F<6;F++)for(let B=0;B<6;B++){let z=P(F+.5,B+.5);y.some(G=>qt([z[0],z[2]],G))&&(e.tri(P(F,B),P(F+1,B),P(F+1,B+1),N(F,B),N(F+1,B),N(F+1,B+1)),e.tri(P(F,B),P(F+1,B+1),P(F,B+1),N(F,B),N(F+1,B+1),N(F,B+1)))}},E=I=>[I[0],.019,I[2]],w=.04*o;if(R([E(b),E(g),E(S),E(M)],new tt(.75*w,.85*w,1*w)),m<.05)continue;let C=I=>{let O=Math.min(7,(I[1]-t.floor.elevation)/Math.tan(s));return[I[0]-r[0]*O,.02,I[2]-r[1]*O]},L=.1*o*Math.min(1,m*1.5);R([C(b),C(g),C(S),C(M)],new tt(1*L,.72*L,.36*L))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new Qt,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ie,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),S=(l.fov??(v?360:90))*ie/2,A=l.motion?new tt(.9,.12,.16):new tt(.04,.22,.28),y=new tt(0,0,0),R=Math.max(4,Math.round(S/.15)),E=.015,w=t.geo.walls2d,C=F=>{let B=F.b[0]-F.a[0],z=F.b[1]-F.a[1],G=B*B+z*z||1,V=Math.max(0,Math.min(1,((l.x-F.a[0])*B+(l.z-F.a[1])*z)/G));return Math.hypot(l.x-(F.a[0]+B*V),l.z-(F.a[1]+z*V))},L=null;for(let F of w)C(F)<.45&&(!L||C(F)<C(L))&&(L=F);let I=F=>{let B=_[0]*Math.cos(F)-_[1]*Math.sin(F),z=_[1]*Math.cos(F)+_[0]*Math.sin(F),G=M;for(let V of w){let W=V.b[0]-V.a[0],K=V.b[1]-V.a[1],nt=B*K-z*W;if(Math.abs(nt)<1e-9)continue;let X=((V.a[0]-l.x)*K-(V.a[1]-l.z)*W)/nt,Y=((V.a[0]-l.x)*z-(V.a[1]-l.z)*B)/nt;V===L&&X<=.45||X>.02&&X<G&&Y>=0&&Y<=1&&(G=X)}return G},O=(F,B)=>E+ws(t.floor,{x:F,z:B}),T=F=>{let B=I(F),z=l.x+(_[0]*Math.cos(F)-_[1]*Math.sin(F))*B,G=l.z+(_[1]*Math.cos(F)+_[0]*Math.sin(F))*B;return[z,O(z,G),G]},P=[l.x,Math.max(O(l.x,l.z),v?-1/0:O(l.x+_[0]*.3,l.z+_[1]*.3)),l.z],N=s.count;for(let F=0;F<R;F++)s.tri(P,T(-S+2*S*(F+1)/R),T(-S+2*S*F/R),A,y,y);o.push({id:l.id,start:N,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||db.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??ca[l.lamp],m=l.base??0,b=(l.rotation??0)*ie,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],p=(x,_,v=1)=>{n.push(x,g,_),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,m+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*ie;n.push(l.x+Math.cos(b)*u*x*Math.cos(_),g+Math.sin(_)*u*x,l.z+Math.sin(b)*u*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else p(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):p(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new tt(...c.color.map(A=>A*.09*c.level)),_=new tt(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,S=16;for(let A=0;A<S;A++){let y=A/S*Math.PI*2,R=(A+1)/S*Math.PI*2,E=[l.x+Math.cos(y)*v,g,l.z+Math.sin(y)*v],w=[l.x+Math.cos(R)*v,g,l.z+Math.sin(R)*v],C=[l.x+Math.cos(y)*M,.02,l.z+Math.sin(y)*M],L=[l.x+Math.cos(R)*M,.02,l.z+Math.sin(R)*M];s.tri(E,C,L,x,_,_),s.tri(E,L,w,x,_,x)}}}let a=new Ot;a.setAttribute("position",new Lt(n,3)),a.setAttribute("color",new Lt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Bf(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Bs.value?Us.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new Qt;for(let o of e){let a=this.screens.get(o.id),l=Rc.has(o.type)?Cc(t.geo.walls2d,o,t.floor.height,ln(t.floor,o)):null,c=l?{...o,x:l.x,z:l.z,mount_y:l.y}:o,h=c.rotation*ie,u=Math.cos(h),f=Math.sin(h),d=(A,y,R)=>[c.x+A*u-R*f,y,c.z+A*f+R*u];if(a.faces){let A=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),R=Math.max(.005,c.h),E=ln(t.floor,c);for(let w of a.faces){if(w.part==="lights"){let G=Me(c.type),V=W=>["#e8f4ff","#ff3b4f"].includes(W.color.toLowerCase());if(G&&G.parts.some(V)){let W=new tt(...w.color.map(K=>Math.min(1,K*(.4+.6*w.level))));Wo(s,G,c,E,W.getHex(),V)}continue}if(w.part==="cabin"){let G=Me(c.type),V=W=>W.color.toLowerCase()==="#13283a"||W.color==="glass";if(G&&G.parts.some(V)){let W=new tt(...w.color.map(K=>Math.min(1,K*(.3+.5*w.level))));Wo(s,G,c,E,W.getHex(),V);continue}}if(w.part==="burners"&&Me(c.type)){let G=Me(c.type),V=new tt(...w.color.map(W=>Math.min(1,W*(.25+.6*w.level))));Wo(s,G,c,E,V.getHex(),f0);continue}if(w.part==="burners"){let G=new tt(...w.color.map(W=>Math.min(1,W*(.25+.6*w.level)))),V=E+R+.008;for(let[W,K,nt]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let X=W*Math.abs(A)/.6,Y=K*y/.62,et=14;for(let Z=0;Z<et;Z++){let J=Z/et*Math.PI*2,rt=(Z+1)/et*Math.PI*2;s.tri(d(X,V,Y),d(X+Math.cos(J)*nt,V,Y+Math.sin(J)*nt),d(X+Math.cos(rt)*nt,V,Y+Math.sin(rt)*nt),G)}}continue}if(w.part==="plate"){let G=new tt(...w.color.map(et=>Math.min(1,et*(.3+.45*w.level)))),V=Math.abs(A)/2+.008,W=y/2+.008,K=E+R+.006,nt=Math.sign(A)||1;s.tri(d(-V*nt,K,-W),d(V*nt,K,-W),d(V*nt,K,W),G),s.tri(d(-V*nt,K,-W),d(V*nt,K,W),d(-V*nt,K,W),G);let X=E+R-.035,Y=[[-V,-W],[V,-W],[V,W],[-V,W]];for(let et=0;et<4;et++){let Z=Y[et],J=Y[(et+1)%4];s.tri(d(Z[0]*nt,X,Z[1]),d(J[0]*nt,X,J[1]),d(J[0]*nt,K,J[1]),G),s.tri(d(Z[0]*nt,X,Z[1]),d(J[0]*nt,K,J[1]),d(Z[0]*nt,K,Z[1]),G)}continue}if(w.part==="band"||w.part==="cabin"){let G=w.part==="cabin",V=E+R*(G?.6:.42),W=G?E+R*.86:V+.07,K=new tt(...w.color.map(et=>Math.min(1,et*(.3+.45*w.level)))),nt=Math.abs(A)/2+(G?.012:.02),X=y/2+(G?.012:.02),Y=[[-nt,-X],[nt,-X],[nt,X],[-nt,X]];for(let et=0;et<4;et++){let Z=Y[et],J=Y[(et+1)%4],rt=d(Z[0]*Math.sign(A),V,Z[1]),ft=d(J[0]*Math.sign(A),V,J[1]),ht=d(J[0]*Math.sign(A),W,J[1]),at=d(Z[0]*Math.sign(A),W,Z[1]);s.tri(rt,ft,ht,K),s.tri(rt,ht,at,K)}continue}if(w.part==="strata"){let G=w.top??w.color,V=.22+.4*w.level,W=new tt(...w.color.map(J=>Math.min(1,J*V))),K=new tt(...G.map(J=>Math.min(1,J*V))),nt=E+R*.06,X=E+R*.94,Y=Math.abs(A)/2+.012,et=y/2+.012,Z=20;for(let J=0;J<Z;J++){let rt=J/Z*Math.PI*2,ft=(J+1)/Z*Math.PI*2,ht=[Math.cos(rt)*Y,Math.sin(rt)*et],at=[Math.cos(ft)*Y,Math.sin(ft)*et];s.tri(d(ht[0],nt,ht[1]),d(at[0],nt,at[1]),d(at[0],X,at[1]),W,W,K),s.tri(d(ht[0],nt,ht[1]),d(at[0],X,at[1]),d(ht[0],X,ht[1]),W,K,K)}continue}if(w.part==="apring"){let G=c.variant==="wall",V=Math.abs(A),W=G?Math.min(V,R)*.3:Math.min(V,y)*.3,K=new tt(...w.color.map(et=>Math.min(1,et*(.4+.6*w.level)))),nt=new tt(0,0,0),X=24,Y=(et,Z)=>G?d(Math.cos(et)*Z,E+R/2+Math.sin(et)*Z,y/2+.004):d(Math.cos(et)*Z,E-.003,Math.sin(et)*Z);for(let et=0;et<X;et++){let Z=et/X*Math.PI*2,J=(et+1)/X*Math.PI*2;s.tri(Y(Z,W*.8),Y(Z,W),Y(J,W),K),s.tri(Y(Z,W*.8),Y(J,W),Y(J,W*.8),K),s.tri(Y(Z,W),Y(Z,W*1.5),Y(J,W*1.5),K,nt,nt),s.tri(Y(Z,W),Y(J,W*1.5),Y(J,W),K,nt,K)}continue}if(w.part==="drum"){let G=Math.abs(A),V=Math.min(G*.36,(R-.2)*.42),W=E+(R-.14)/2+.04,K=y/2-.006,nt=new tt(...w.color.map(J=>Math.min(1,J*(.35+.65*w.level)))),X=nt.clone().multiplyScalar(.12),Y=new tt(0,0,0),et=28,Z=(J,rt)=>d(Math.cos(J)*rt,W+Math.sin(J)*rt,K);for(let J=0;J<et;J++){let rt=J/et*Math.PI*2,ft=(J+1)/et*Math.PI*2;s.tri(d(0,W,K),Z(rt,V*.78),Z(ft,V*.78),X),s.tri(Z(rt,V*.78),Z(rt,V),Z(ft,V),nt),s.tri(Z(rt,V*.78),Z(ft,V),Z(ft,V*.78),nt),s.tri(Z(rt,V),Z(rt,V*1.18),Z(ft,V*1.18),nt,Y,Y),s.tri(Z(rt,V),Z(ft,V*1.18),Z(ft,V),nt,Y,nt)}continue}if(w.part==="gang"){let G=Math.max(1,w.of??1),V=Math.abs(A),W=V/G,K=(-V/2+W*((w.index??0)+.5))*Math.sign(A),nt=y/2+(c.variant==="outdoor"?.02:.008),X=w.accent?Bs.value?Us.value.toArray():Uw:w.color,Y=new tt(...X.map(gt=>Math.min(1,gt*(.35+.65*w.level)))),et=Y.clone().multiplyScalar(.5),Z=new tt(0,0,0),J=W*.34,rt=E+R*.16,ft=E+R*.84,ht=[d(K-J,rt,nt),d(K+J,rt,nt),d(K+J,ft,nt),d(K-J,ft,nt)];s.tri(ht[0],ht[1],ht[2],Y),s.tri(ht[0],ht[2],ht[3],Y);let at=.012+.015*w.level,bt=[d(K-J-at,rt-at,nt-.001),d(K+J+at,rt-at,nt-.001),d(K+J+at,ft+at,nt-.001),d(K-J-at,ft+at,nt-.001)];for(let gt=0;gt<4;gt++){let Nt=(gt+1)%4;s.tri(ht[gt],bt[Nt],bt[gt],et,Z,Z),s.tri(ht[gt],ht[Nt],bt[Nt],et,et,Z)}continue}if(w.part==="beacon"){let G=new tt(...w.color.map(ft=>Math.min(1,ft*(.25+.45*w.level)))),V=new tt(0,0,0),W=E+R+.01,K=.6+.6*w.level,nt=Math.min(Math.abs(A),y)*.38;for(let[ft,ht]of[[nt,0],[0,nt]]){let at=d(-ft,W,-ht),bt=d(ft,W,ht),gt=d(ft*.4,W+K,ht*.4),Nt=d(-ft*.4,W+K,-ht*.4);s.tri(at,bt,gt,G,G,V),s.tri(at,gt,Nt,G,V,V)}let X=ln(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(A)/2+.03,et=y/2+.03,Z=.22+.18*w.level,J=(ft,ht,at)=>d(ft*(Y+at),X,ht*(et+at)),rt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ft=0;ft<4;ft++){let[ht,at]=rt[ft],[bt,gt]=rt[(ft+1)%4];s.tri(J(ht,at,0),J(bt,gt,0),J(bt,gt,Z),G,G,V),s.tri(J(ht,at,0),J(bt,gt,Z),J(ht,at,Z),G,V,V)}continue}let C=w.part==="right"?.03:-Math.abs(A)/2+.03,L=w.part==="left"?-.03:Math.abs(A)/2-.03,I=E+(w.part==="bottom"?R*.45:R)+.006,O=new tt(...w.color.map(G=>Math.min(1,G*(.35+.65*w.level)))),T=new tt(0,0,0),P=(G,V,W=I)=>d(G*Math.sign(A),W,V),N=[P(C,-y/2+.03),P(L,-y/2+.03),P(L,y/2-.03),P(C,y/2-.03)];s.tri(N[0],N[2],N[1],O),s.tri(N[0],N[3],N[2],O);let F=w.part==="lid"?.025+.02*w.level:.12+.1*w.level,B=O.clone().multiplyScalar(w.part==="lid"?.7:.5),z=[P(C-F,-y/2-F,I+.004),P(L+F,-y/2-F,I+.004),P(L+F,y/2+F,I+.004),P(C-F,y/2+F,I+.004)];for(let G=0;G<4;G++){let V=(G+1)%4;s.tri(N[G],z[V],z[G],B,T,T),s.tri(N[G],N[V],z[V],B,B,T)}}continue}let m=Me(c.type);if(m&&!m.light&&a.ring&&m.parts.some(A=>A.glow)){let A=new tt(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));Wo(s,m,c,ln(t.floor,c),A.getHex())}let b=wf(c,t.floor);if(!b)continue;let g=new tt(...a.color.map(A=>Math.min(1,A*(.35+.65*a.level)))),p=new tt(0,0,0),x=b.z+.004;if(s.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),s.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],S=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let A=0;A<4;A++){let y=(A+1)%4;s.tri(M[A],S[A],S[y],v,p,p),s.tri(M[A],S[y],M[y],v,p,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=wf(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Et(new Yn(1,1),new Yt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new yr().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ue,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,{w:a,h:l}=Cm(n.x1-n.x0,n.y1-n.y0,o),c=e.rotation*ie,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(la).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(la(h))??{speed:ed(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),m=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(m<1e-4)continue;let b=[(h.b[0]-h.a[0])/m,(h.b[1]-h.a[1])/m,(h.b[2]-h.a[2])/m],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[fb*1.4,1]]:[[Xw,.25],[fb,1]];for(let[x,_]of p)for(let v of g){let M=x*(h.width??1)/2,S=(y,R)=>[y[0]+v[0]*M*R,y[1]+v[1]*M*R,y[2]+v[2]*M*R],A=[[S(h.a,-1),h.dist,0],[S(h.b,-1),h.dist+m,0],[S(h.b,1),h.dist+m,1],[S(h.a,1),h.dist,1]];for(let y of[0,1,2,0,2,3]){let[R,E,w]=A[y];n.push(R[0],R[1],R[2]),r.push(d[0]*_,d[1]*_,d[2]*_),s.push(E,w),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ot;c.setAttribute("position",new Lt(n,3)),c.setAttribute("color",new Lt(r,3)),c.setAttribute("uv",new Lt(s,2)),c.setAttribute("flowSpeed",new Lt(o,1)),c.setAttribute("flowOffset",new Lt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(la(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let m=this.flowPhase.get(la(f))??{speed:ed(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let p=Hw*(f.width??1),x=f.power>.5?1:.62,_=[[p+Ww*2,[.02,.025,.05],.78,2],[p,f.color.map(v=>v*x),1,0]];for(let[v,M,S,A]of _)for(let y of g){let R=v/2,E=A===0?.002:0,w=(L,I)=>[L[0]+y[0]*R*I,L[1]+y[1]*R*I+E,L[2]+y[2]*R*I],C=[[w(f.a,-1),f.dist,A],[w(f.b,-1),f.dist+d,A],[w(f.b,1),f.dist+d,A+1],[w(f.a,1),f.dist,A+1]];for(let L of[0,1,2,0,2,3]){let[I,O,T]=C[L];s.push(I[0],I[1],I[2]),o.push(M[0],M[1],M[2],S),a.push(O,T),l.push(m.speed),c.push(m.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ot;u.setAttribute("position",new Lt(s,3)),u.setAttribute("color",new Lt(o,4)),u.setAttribute("uv",new Lt(a,2)),u.setAttribute("flowSpeed",new Lt(l,1)),u.setAttribute("flowOffset",new Lt(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=Yg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new tt(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new tt(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(jw,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new yn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[m,b]of d.points)e.expandByPoint(new q(m,f,b)),e.expandByPoint(new q(m,f+u.floor.height,b))}e.isEmpty()&&e.set(new q(-4,0,-4),new q(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new q),r=e.getSize(new q),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.fitted=!0,this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new q(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new yn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new q(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new q(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=lT();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new q),r=t.getSize(new q),s=nd*Math.ceil((Math.max(r.x,r.z)+16)/nd);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-sn-.02,n.z)}distanceFor(t){let e=this.camera.fov*ie,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new go;return r.setFromCamera(new jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e,n=!0){let r=this.rayAt(t,e),s=this.activeFloors(),o=s.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.fridgeMesh,l.wallMesh,l.floorMesh].filter(c=>c.visible)),a=(l,c)=>l.find(h=>c>=h.start&&c<h.end)?.id;for(let l of r.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,h=s.find(u=>u.group===l.object.parent);if(l.object===h.fridgeMesh){let u=a(h.gateTris,c);if(u&&n)return{entity:u}}else if(l.object===h.lampMesh||l.object===h.coneMesh){let u=a(l.object===h.lampMesh?h.lampTris:h.coneTris,c);if(u&&n)return{entity:u}}else if(l.object===h.framesMesh||l.object===h.blindsMesh||l.object===h.glassMesh){if(this.wallMode==="cut"&&l.face){let d=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Jt;if(d!==Jt&&Math.floor(d/16)===0)continue}let u=a(l.object===h.framesMesh?h.frameTris:l.object===h.glassMesh?h.glassTris:h.blindTris,c),f=u?this.pickOpenings.get(u):void 0;if(f&&n)return{entity:f}}else if(l.object===h.wallMesh){let u=a(h.geo.furnitureTris,c),f=u?this.pickFurniture.get(u):void 0;if(f&&n)return{entity:f};if(!u&&l.face&&l.face.normal.y>.7){let d=Wh(h.floor).find(m=>qt([l.point.x,l.point.z],m.points));if(d)return{floorId:h.floor.id,roomId:d.id}}if(l.face&&!u){let d=h.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,m=Math.floor(d/16),b=d%16,g=this.wallMode==="cut"&&m===0,p=(h.mask.glass.value&1<<b)!==0;if(!g){let x=r.ray.direction,_=Math.hypot(x.x,x.z)||1,v=[l.point.x-x.x/_*.3,l.point.z-x.z/_*.3],M=h.floor.rooms.find(S=>S.points.length>=3&&qt(v,S.points))?.id??null;if(this.roomId!==null){if(M===this.roomId)return{floorId:h.floor.id,roomId:M}}else if(!p&&M)return{floorId:h.floor.id,roomId:M}}}}else if(l.object===h.floorMesh)return{floorId:h.floor.id,roomId:a(h.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),c)??null}}return null}get tapOpens(){return!!this.building?.settings.tap_in_room&&this.roomId===null&&!this.furnish}onTap(t,e){let n=this.pick(t,e,!this.tapOpens);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+uu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ie,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice,r=this.pendingFurniture;this.pendingDevice=null,this.pendingFurniture=null;let s=this.furnishTypes;if(s){let a=n?r??this.devices.find(f=>f.id===n)?.furnitureId:void 0,l=a?null:this.furnitureAt(t,e),c=a??l?.id,h=c?this.floors.find(f=>f.floor.furniture.some(d=>d.id===c)):void 0,u=h?.floor.furniture.find(f=>f.id===c)?.type;return!!(h&&c&&u&&s.has(u))&&this.grabItem(h,c,t,e)}if(n){let a=r??this.devices.find(c=>c.id===n)?.furnitureId,l=a?this.floors.find(c=>c.floor.furniture.some(h=>h.id===a)):void 0;return!a||!l?this.grabDevice(n,t,e):this.grabItem(l,a,t,e)}let o=this.furnitureAt(t,e);if(!o){let a=this.pick(t,e);return a&&"entity"in a?this.grabDevice(a.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new q),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let e of this.devicePins.values())e.el.classList.toggle("fp3d-dev-sel",e.el.dataset.entity===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((m[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ag(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new tt(.25,.9,1):new tt(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=Me(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?ln(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:ln(e.floor,n),u=n.rotation*ie,f=Math.cos(u),d=Math.sin(u),m=(g,p,x)=>[s+g*f-p*d,x,o+g*d+p*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[p,x]=b[g],[_,v]=b[(g+1)%4];t.seg(m(p,x,h+.01),m(_,v,h+.01),r),t.seg(m(p,x,h+c),m(_,v,h+c),r),t.seg(m(p,x,h+.01),m(p,x,h+c),r)}t.seg(m(-n.w/2,n.d/2+.03,h+.02),m(n.w/2,n.d/2+.03,h+.02),new tt(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||this.tapOpens||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ye(s,o);a.texture.colorSpace=Ue;let l=new Dn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let b=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let L of this.floors)L.group.visible=L===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let x=p.floor.rooms.flatMap(L=>L.points),_=p.floor.elevation,v=new yn(new q(Math.min(...x.map(L=>L[0]))-.3,_,Math.min(...x.map(L=>L[1]))-.3),new q(Math.max(...x.map(L=>L[0]))+.3,_+Math.min(p.floor.cut_height,p.floor.height),Math.max(...x.map(L=>L[1]))+.3)),M=v.getCenter(new q),S=-.6,A=.8,y=new q(Math.sin(A)*Math.sin(S),Math.cos(A),Math.sin(A)*Math.cos(S));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let R=.5,E=.5;for(let L of[v.min.x,v.max.x])for(let I of[v.min.y,v.max.y])for(let O of[v.min.z,v.max.z]){let T=new q(L,I,O).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(T.x)),E=Math.max(E,Math.abs(T.y))}let w=s/o;R/E>w?E=R/w:R=E*w,l.left=-R*1.05,l.right=R*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let C=b.createImageData(s,o);for(let L=0;L<o;L++)C.data.set(d.subarray((o-1-L)*s*4,(o-L)*s*4),L*s*4);b.putImageData(C,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?$g(n.room,void 0,void 0,n.obstacles):Jf(n.rest),l=a.length?a:Jf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!qt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(sb[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&Me(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Yt({color:sb[t.mode]}),r=this.robotModelKey(t),s=t.model?Me(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,h=new Qt,{radius:u,top:f}=Lm(h,s,a,l,c),d=new Qt,m=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ie(d,[[-m,b],[m,b],[m,b+m*.8],[-m,b+m*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Yt({vertexColors:!0});let g=[h.geometry(),d.geometry()],p=new Pe;return p.add(new Et(g[0],this.robotMat),new Et(g[1],n)),{info:t,motion:e,group:p,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new Qt,l=(h,u,f,d,m)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Ie(a,b,u,f,d,m,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Yt({vertexColors:!0});let c=new Qt;Ie(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new Pe;return o.add(new Et(this.robotGeo,this.robotMat),new Et(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new Qt;xb(h,0,0,0,l,0),this.fanMat??=new Yt({vertexColors:!0});let u=new Et(h.geometry(),this.fanMat),f=new Pe;f.add(u),f.rotation.y=-((n.rotation??0)*ie),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=bb(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Zg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new tt(.25-.2*a,.95-.83*a,1-.7*a),r=new tt(0,0,0),s=new tt(.3,1,.6),o=.02;for(let a of this.floors){let l=new Qt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let m=h.points[d-1];if(m){let b=Math.hypot(u-m[0],f-m[1])||1,g=-(f-m[1])/b*.1,p=(u-m[0])/b*.1;l.tri([m[0]+g,o,m[1]+p],[u+g,o,f+p],[u-g,o,f-p],s,s,s),l.tri([m[0]+g,o,m[1]+p],[u-g,o,f-p],[m[0]-g,o,m[1]-p],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[u+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,m=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+m],[h.x+d,o,h.z+m],[h.x-d,o,h.z-m],b,u,u),l.tri([c.x+d,o,c.z+m],[h.x-d,o,h.z-m],[c.x-d,o,c.z-m],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(m)*.22,o,h.z+Math.sin(m)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ie,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ie)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new q(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new q(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+uu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new q(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let p=new Set;for(let[x,_]of this.flashes){let v=this.deviceFloor.get(x);v&&p.add(v),_<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)p.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||s||o||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.firework&&(this.firework.step((t-this.fireworkAt)/1e3),this.fireworkAt=t),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),this.watchSlow(t,r||this.controls.busy),f&&this.invalidate();let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;m&&!this.decorWas&&(this.lastWake=t),this.decorWas=m;let b=this.effectFloors.size?this.decor(this.lowQuality?2*pb:pb):null;if(b!==null&&!this.effectTimer&&!document.hidden&&!f){let p=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),this.firework&&!this.fireworkTimer&&!document.hidden&&(this.fireworkTimer=setTimeout(()=>{this.fireworkTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let p=c||g||h?this.decor(h?83:0,h?83:void 0):null;!f&&p!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},p));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},Gw))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new q,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new q(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new q(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new q,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(Df(s))?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}watchSlow(t,e){let n=this.slowWatch;if(n){if(!e||t-n.since<Qg){n.last=0;return}if(n.last&&t-n.last<1e3&&n.ms.push(t-n.last),n.last=t,!tb(n.ms)){n.ms.length>=2*jf&&(this.slowWatch=null);return}this.slowWatch=null,gb=!0;try{localStorage.setItem(Qf,"1")}catch{}setTimeout(()=>!this.disposed&&this.setQuality(n.quality),0)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=eT(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function eT(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function nT(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new pn(t);return s.flipY=!1,s.wrapS=Tn,s.wrapT=Tn,s.anisotropy=4,s.colorSpace=Ue,s}function iT(i){let t=new Yt({map:i,transparent:!0,blending:Se,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function rT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pn(i);return e.wrapS=gr,e.wrapT=gr,e.colorSpace=Ue,e}function la(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function ed(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function sT(i){let t=new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ne,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function oT(i){let t=new Yt({vertexColors:!0,transparent:!0,blending:Se,depthWrite:!1,side:ne,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function mb(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function aT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pn(t);return r.colorSpace=Ue,r}function lT(){let t=nd,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new pn(e);return s.anisotropy=4,s.colorSpace=Ue,s}function zP(i,t){return new id(i,t)}function bb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function xb(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([m,b])=>[t+m*h-b*u,n+m*u+b*h]);Ie(i,d,e-.006,e+.006,Yw,qw,{aoFrom:0,bottom:!0})}}function td(i,t,e,n,r=!0){let[s,o,a]=t.size??ca[t.lamp],l=t.base??0,c=(t.rotation??0)*ie,h=Math.cos(c),u=Math.sin(c),f=(g,p)=>[t.x+g*h-p*u,t.z+g*u+p*h],d=(g,p,x,_,v,M=14)=>{let S=[];for(let A=0;A<M;A++){let y=A/M*Math.PI*2;S.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Ie(i,S,p,x,_,v,{aoFrom:0,bottom:!0})},m=(g,p,x,_,v,M,S,A=S)=>Ie(i,[f(g,x),f(p,x),f(p,_),f(g,_)],v,M,S,A,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,oe,oe,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,oe,oe,8);let p=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,p,e-.02,oe,oe,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,oe,oe,10),d(.012,g+.16,e-.03,oe,oe,6),d(.13,g+.07,g+.16,oe,oe,16),d(.11,g,g+.07,n,n,16),r&&xb(i,t.x,bb(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,oe,oe,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,oe,oe,10),d(b,e-Math.max(.06,a),e-.02,oe,oe,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":m(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,oe,oe),m(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,oe,oe),d(.014,l+.03,l+a-.12,oe,oe,6),d(b,l+a-.14,l+a-.02,oe,oe),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,oe,oe,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,oe,oe,10);break;case"garden":d(.012,l,l+a-.08,oe,oe,5),d(b,l+a-.08,l+a-.01,oe,oe,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,oe,oe),d(.014,l+.03,l+a-.28,oe,oe,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,oe,oe),d(.012,l+.03,l+a-.16,oe,oe,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??_c;m(-s/2+.03,s/2-.03,-o/2,-o/2+.02,g,g+a,oe),m(-s/2,s/2,-o/2+.02,o/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),p=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){m(-s/2,s/2,-o/2,o/2,p-g,p,n);break}let x=(t.roll??0)*ie,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+s/2:p-g/2,S=(t.upright?0:t.rise??0)*ie,A=(C,L,I)=>{let O=C,T=L*_-I*v,P=L*v+I*_;return S&&([O,T]=[O*Math.cos(S)-T*Math.sin(S),O*Math.sin(S)+T*Math.cos(S)]),t.upright&&([O,T]=[-T,O]),[t.x+O*h-P*u,M+T,t.z+O*u+P*h]},y=[A(-s/2,-g/2,-o/2),A(s/2,-g/2,-o/2),A(s/2,-g/2,o/2),A(-s/2,-g/2,o/2),A(-s/2,g/2,-o/2),A(s/2,g/2,-o/2),A(s/2,g/2,o/2),A(-s/2,g/2,o/2)],R=new tt(n),E=[t.x,M,t.z],w=(C,L,I,O)=>{let[T,P,N]=[y[C],y[L],y[I]],F=[(P[1]-T[1])*(N[2]-T[2])-(P[2]-T[2])*(N[1]-T[1]),(P[2]-T[2])*(N[0]-T[0])-(P[0]-T[0])*(N[2]-T[2]),(P[0]-T[0])*(N[1]-T[1])-(P[1]-T[1])*(N[0]-T[0])],B=[T[0]-E[0],T[1]-E[1],T[2]-E[2]],z=F[0]*B[0]+F[1]*B[1]+F[2]*B[2]<0,[G,V,W,K]=z?[y[O],y[I],y[L],y[C]]:[y[C],y[L],y[I],y[O]];i.tri(G,V,W,R,R,R),i.tri(G,W,K,R,R,R)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{Nf as FloorMap,id as FloorplanViewer,Uf as WalkCamera,zP as createViewer,MP as funLib,Nw as furnitureFront,Ow as furniturePreview,Qw as isLowEnd,xb as pushFanBlades,td as pushLampModel};

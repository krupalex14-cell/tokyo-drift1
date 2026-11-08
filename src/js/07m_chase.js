// ===== chase (lesson "Cut off"): Rin hunts you over the road network, closes in and tries to ram =====
// She used to replay your exact trail and got stuck on the first wall you scraped. Now she re-plans a GPS route to
// where you are going every second, drives it at a pace matched to your car, and when she has you in sight up
// close she goes straight for your rear quarter. After a hit she eases off for a moment so you can get away.
function gpsPathFrom(fx,fy,tx,ty){var q=gpsNear(tx,ty,90)||gpsNear(tx,ty,260)||gpsNear(tx,ty,700);if(!q)return null;var sw=WP,sc=car,pts=null;
 GPSNOEXP=true;try{WP={x:wrap(tx),y:wrap(ty),q:q};car={x:fx,y:fy};gpsRoute();pts=WP&&WP.pts}catch(e){pts=null}GPSNOEXP=false;WP=sw;car=sc;return pts&&pts.length>1?pts:null}
function ptInBld(x,y){var h=false;BH.q(x-1,y-1,x+1,y+1,function(b){if(h||b.hid)return;var dx=wd(x,b.x),dy=wd(y,b.y);if(dx>0&&dy>0&&dx<b.w&&dy<b.h)h=true});return h}
function stLos(x0,y0,x1,y1){var dx=wd(x1,x0),dy=wd(y1,y0),d=Math.hypot(dx,dy),n=Math.ceil(d/14);for(var i=1;i<n;i++){var t=i/n;if(ptInBld(x0+dx*t,y0+dy*t))return false}return true}
function rinOffPath(R){if(!R.pts||R.pts.length<2)return 1e9;var T=[0,0,0];rivAt(R,R.P,T);return Math.hypot(wd(R.c.x,T[0]),wd(R.c.y,T[1]))}
function rinAttack(r,dt){if(!r.atk&&!r.hold)return null;var c=r.c,lead=.22,ca=Math.cos(car.a),sa=Math.sin(car.a),dd=Math.hypot(wd(car.x,c.x),wd(car.y,c.y));
 var side=(wd(c.x,car.x)*-sa+wd(c.y,car.y)*ca)>=0?1:-1,tx=car.x+car.vx*lead-ca*9-sa*side*5,ty=car.y+car.vy*lead-sa*9+ca*side*5;
 var head=c.dr?Math.atan2(c.vy,c.vx):c.a,err=angd(Math.atan2(wd(ty,c.y),wd(tx,c.x)),head),I={s:clamp(err*3,-1,1),t:1,b:0,h:0};
 if(dd<52)r.stuck=0;// leaning on you is the point, not being stuck
 if(r.stuck>.6){r.rev=.8;r.stuck=0;r.rt=0;r.revN=(r.revN||0)+1}if(r.rev>0){r.rev-=dt;return{s:err>0?-1:1,t:0,b:1,h:0}}
 // overshot you at close range: back up and turn, instead of a lap round the block
 if(Math.abs(err)>1.7&&dd<120){if(c.sp>70)return{s:I.s,t:0,b:1,h:0};return{s:err>0?-1:1,t:0,b:1,h:0}}
 if(Math.abs(err)>1.25&&c.sp>110){I.t=.2;I.b=.5}
 // arrive at a speed she can still steer with (you standing still = she does not fly past), then lean on you
 var vd=r.hold?(dd<95?0:dd*1.1):Math.max(70,dd*2.3+car.sp);if(c.sp>vd+25){I.t=0;I.b=r.hold?.8:.45}else if(c.sp>vd)I.t=.25;
 if(!r.hold&&dd<46&&car.sp<45)I.t=.6;
 return I}
var _rivAIc=rivAI;rivAI=function(r,dt){if(r.hunt){var o=rinAttack(r,dt);if(o)return o;if(r.stuck>.6)r.rt=0}return _rivAIc(r,dt)};
function c3jam(R,dt,dd){var c=R.c;R.jt=(R.jt||0)+dt;if(R.jt<1)return;R.jt=0;var mv=R.jx==null?99:Math.hypot(wd(c.x,R.jx),wd(c.y,R.jy));R.jx=c.x;R.jy=c.y;
 R.jam=mv<22&&dd>70?(R.jam||0)+1:0;if(R.jam<4||(R.los&&dd<240))return;var q=gpsNear(c.x,c.y,320);if(!q)return;R.jam=0;c.x=q.x;c.y=q.y;c.a=Math.atan2(wd(car.y,q.y),wd(car.x,q.x));c.vx=c.vy=c.w=0;c.dr=false;R.x=q.x;R.y=q.y;R.rt=0;R.rev=0;R.stuck=0;R.revN=0}
function stRinSetup(R){R.hunt=1;R.rt=0;R.drift=1;R.back=2.2;var P=R.c.P,Q=car.P;P.vmax=Math.max(P.vmax,Q.vmax*1.04);P.pw=Math.max(P.pw,Q.pw*1.06);P.grip=Math.max(P.grip,Q.grip);P.turn=Math.max(P.turn,Q.turn);P.dturn=Math.max(P.dturn,Q.dturn)}
// returns the straight-line distance to the player
function stRinUpdate(R,dt){var c=R.c,dd=Math.hypot(wd(car.x,c.x),wd(car.y,c.y));if(!R.hunt)stRinSetup(R);
 R.rt-=dt;R.cd=(R.cd||0)-dt;R.back=(R.back||0)-dt;R.lt=(R.lt||0)-dt;
 if(R.lt<=0){R.lt=.25;R.los=(c.l|0)===(car.l|0)&&dd<420&&stLos(c.x,c.y,car.x,car.y)?1:0}
 R.nolos=R.los?0:(R.nolos||0)+dt;
 // you standing still in sight: she comes straight for you; right after a hit she hangs back close by instead of driving off
 R.noatk=(R.noatk||0)-dt;if((R.revN||0)>=3){R.revN=0;R.noatk=2.5;R.rt=0}
 R.slowT=car.sp<40?(R.slowT||0)+dt:0;
 R.atk=!!(R.los&&R.back<=0&&R.noatk<=0&&(dd<125||(R.slowT>1.2&&dd<260)));
 R.hold=!!(!R.atk&&R.los&&R.back>0&&dd<230&&R.noatk<=0);if(R.atk||R.hold)c3jam(R,dt,dd);
 // wedged somewhere out of your sight for a while: back onto the nearest road, facing you
 if(!R.atk&&!R.hold)c3jam(R,dt,dd);
 if(!R.atk&&!R.hold&&(R.rt<=0||rinOffPath(R)>55||R.L-R.P<40)){R.rt=dd>500?1.5:.85;var lead=Math.min(.9,dd/350),p=gpsPathFrom(c.x,c.y,car.x+car.vx*lead,car.y+car.vy*lead);if(p)rivPath(R,p,false)}
 // pace: matched to your car, a little quicker when she is far behind, easing off right after a hit
 var pv=car.P.vmax;R.vmax=R.back>0?pv*.75:dd>420?pv*1.08:dd>200?pv*1.02:pv;R.sk=R.back>0?.85:1;
 // contact = a ram attempt
 if(dd<c.hx+car.hx+5&&R.cd<=0){var rel=Math.hypot(c.vx-car.vx,c.vy-car.vy);if(rel>35){R.cd=2.4;R.back=R.slowT>1.2?0:2;ST.rams=(ST.rams||0)+1;flash(L(R.ramMsg||'Рин толкнула!'),.9);if(S.vib&&navigator.vibrate)try{navigator.vibrate(40)}catch(e){}}}
 return dd}

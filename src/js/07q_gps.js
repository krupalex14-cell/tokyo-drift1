// ===== GPS arrows at night and in the rain: they glow (drawn again in the light pass) =====
function gpsGlow(a){if(!WP||!WP.arr)return;var k=Math.min(1,a+((typeof W!=='undefined'&&W.rain)||0)*.6);if(k<=.03)return;var A=WP.arr,S6=gpsSpr(),P=WP.P;
 for(var i=0;i<A.length;i++){var o=A[i],rel=o.d-P;if(rel<-3)continue;if(rel>1600)break;var x=SX(o.x),y=SY(o.y);if(x<-14||y<-14||x>VW+14||y>VH+14)continue;
  var al=rel<10?Math.max(0,(rel+3)/13):rel>1200?Math.max(0,1-(rel-1200)/400):1;if(al<=0)continue;
  var t=rel<170?1-rel/170:0,idx=Math.round(t*5),ai=((Math.round(o.a/TAU*32)%32)+32)%32;
  gl(x,y,13,13,[255,77,154],k*.42*al);cx.globalAlpha=Math.min(1,k*.7*al);cx.drawImage(S6[idx][ai],x-9,y-9)}
 cx.globalAlpha=1}
var _edGps=emisDraw;emisDraw=function(a){_edGps(a);gpsGlow(a)};
// arrows on the expressway are drawn with the deck, not under it
var _dsGps=drawSmoke;drawSmoke=function(z){if(z===1&&mode==='game')gpsDraw(1);_dsGps(z)};
// story places up on the expressway (the Wangan start, the C1): route to the deck, not to the street below it
var _spGps=stPlaces;stPlaces=function(){var P=_spGps();if(P.wgs&&P.wgs.l==null){P.wgs.l=1;if(P.c1)P.c1.l=1}return P};
var _stRq=stRoute;stRoute=function(x,y){var up=false,P=stPlaces();for(var k in P){var p=P[k];if(p&&p.l===1&&Math.abs(wd(p.x,x))<2&&Math.abs(wd(p.y,y))<2)up=true}
 if(!up)return _stRq(x,y);if(!GPSG)gpsBuild();var q=gpsNearUp(x,y,220)||gpsNear(x,y,600);if(!q)return;WP={x:x,y:y,q:q,st:1,up:q.up?1:0};ST.rt=TIME;gpsRoute()};

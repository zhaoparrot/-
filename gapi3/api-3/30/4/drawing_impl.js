google.maps.__gjsload__('drawing_impl', function(_){var x5=function(a,b){_.v(b,a.unbind,a)},C5=function(a,b){function c(b,c,h,l){var f=_.Y("div",a);_.dM(f,"left");f.style.lineHeight="0";c={title:c,b:h,j:l,padding:[4],f:!0};h=_.Y("span");h.style.display="inline-block";var g=b||"hand",r=y5[g],u=_.HB(d,h,new _.K(0,r),z5);u.style.position="relative";var C=new _.aN(f,h,b,c);_.z.addListener(C,"active_changed",function(){var a=C.get("active")?A5[g]:r;_.IB(u,z5,new _.K(0,a))});C.bindTo("value",e,"drawingMode")}var d=_.Lm("drawing"),e=this;c(null,"Stop drawing",
!0,!b.length);_.v(b,function(a,d){var e=B5[a];e&&c(a,e,!1,d==b.length-1)})},D5=_.oa(),E5=function(a,b,c){this.l=a;this.m=b;this.B=c;_.z.bind(this,"click",this,this.Mj);_.z.bind(this,"mousemove",this,this.Oc);_.z.bind(this,"movestart",this,this.Kj);_.z.bind(this,"move",this,this.Lj);_.z.bind(this,"moveend",this,this.Jj)},F5=function(a){if(!a.b){var b={};_.$a(b,a.get("options"));null==b.zIndex&&(b.zIndex=a.B());delete b.map;a.b=a.l.f(b)}},G5=function(a,b){a.Oc(b);b=a.b;b.unbind("map");a.b=null;_.z.trigger(a,
"overlaycomplete",{type:a.l.l(),overlay:b});_.z.trigger(a,a.l.j(),b);a.f=null;a.j=!1},H5=_.oa(),I5=function(a){this.f=a;this.b=null;_.z.bind(this,"click",this,this.j)},J5=function(a){if(!a.b){var b={};_.$a(b,a.get("options"));delete b.map;a.b=new _.Ie(b)}},K5=function(a,b,c,d){this.j=a;this.f=b;this.l=c;this.m=d+1E-6;this.b=null;this.D=new _.K(0,0);this.B=new _.K(0,0);this.C=new _.K(0,0);_.z.bind(this,"click",this,this.sj);_.z.bind(this,"dblclick",this,this.Bl);_.z.bind(this,"mousemove",this,this.tj);
_.z.bind(this,"movestart",this,this.vj);_.z.bind(this,"move",this,this.wj);_.z.bind(this,"moveend",this,this.uj)},L5=function(a,b){a.b.Pb.getPath().push(b);a.b.Ab.set("anchors",[b])},O5=function(a,b){var c=M5(a,b);c?(a.j||2!=c.type||L5(a,c.latLng),N5(a)):L5(a,b)},M5=function(a,b){var c=a.b.Pb.getPath(),d=c.getLength();if(d){var e=a.get("map"),f=e.get("projection");e=e.__gm.get("zoom");e=a.m/(1<<e);var g=f.fromLatLngToPoint(b,a.D);b=b.lng();d=c.getAt(d-1);var h=new _.F(d.lat(),_.cb(d.lng(),b-180,b+
180),!0);h=f.fromLatLngToPoint(h,a.B);if(Math.abs(g.x-h.x)<=e&&Math.abs(g.y-h.y)<=e)return{type:1,latLng:d};c=c.getAt(0);b=new _.F(c.lat(),_.cb(c.lng(),b-180,b+180),!0);a=f.fromLatLngToPoint(b,a.C);if(Math.abs(g.x-a.x)<=e&&Math.abs(g.y-a.y)<=e)return{type:2,latLng:c}}return null},Q5=function(a){var b=a.get("options"),c=new _.D;c.setValues(b);var d=new _.TK(c,a.j);c={};_.$a(c,b);c.strokeColor=d.get("strokeColor");c.strokeOpacity=d.get("strokeOpacity");c.strokeWeight=d.get("strokeWeight");null==c.zIndex&&
(c.zIndex=a.l());delete c.path;delete c.map;var e=new _.Ig(c);e.bindTo("map",a);c.strokeOpacity=d.get("ghostStrokeOpacity");d=new _.QK;d.setValues(c);d.set("anchors",[]);d.bindTo("map",a);var f=null;a.j&&(f={},_.$a(f,b),f.zIndex=c.zIndex,f.paths=new _.pd([e.getPath()]),delete f.map,f=new _.Hg(f));a.b={Pb:e,Bh:f,Ab:d};P5(a)},N5=function(a){var b=a.b.Pb;b.unbind("map");var c=a.b.Bh;a.b.Ab.unbind("map");a.b.Ab.set("map",null);a.b=null;a.set("draggableCursor",a.f);if(b.getPath().getLength()){if(a.j){b.set("map",
null);c.set("map",a.get("map"));var d={type:"polygon",overlay:c};_.z.trigger(a,"overlaycomplete",d);_.z.trigger(a,"polygoncomplete",c)}else d={type:"polyline",overlay:b},_.z.trigger(a,"overlaycomplete",d),_.z.trigger(a,"polylinecomplete",b);P5(a)}else b.set("map",null)},P5=function(a){a.set("enablePanning",!!a.b&&a.get("drawPolysWithDrag")&&!a.get("panWhileDrawing"))},R5=_.oa(),S5=function(a,b){if(a.lat()<b.lat()){var c=a.lat();var d=b.lat()}else c=b.lat(),d=a.lat();if(180>=_.ad(a.lng(),b.lng())){var e=
a.lng();a=b.lng()}else e=b.lng(),a=a.lng();return _.fd(c,e,d,a)},T5=function(){var a=0;return function(){return a++}},X5=function(){var a="click dblclick movestart move moveend panbynow mousewheel".split(" ");_.im()||a.push("mousemove");a=this.f=U5(this,a);this.F=V5(this);var b="url("+_.Km+"crosshair.cur)";_.X.f&&(b+=" 7 7");b+=", crosshair";var c=T5();this.m=6+(_.im()?9:0);this.j={circle:new E5(new H5,b,c),marker:new I5(b),polygon:new K5(!0,b,c,this.m),polyline:new K5(!1,b,c,this.m),rectangle:new E5(new R5,
b,c)};b=W5(this);for(var d in this.j)c=this.j[d],c.bindTo("map",this),c.bindTo("panWhileDrawing",this),c.bindTo("draggingCursor",a),c.bindTo("draggableCursor",b),c.bindTo("enablePanning",a,"panAtEdge"),c.bindTo("options",this,d+"Options"),_.z.forward(c,"overlaycomplete",this),_.z.forward(c,d+"complete",this);this.j.polygon.bindTo("drawPolysWithDrag",this);this.j.polyline.bindTo("drawPolysWithDrag",this);this.b=null;this.N=[];this.l=this.B=null;this.G=0;this.D=this.C=null},U5=function(a,b){var c=new _.OK(b),
d=!1;_.v(b,function(b){_.z.addListener(c,b,function(c){"click"!=b&&"dblclick"!=b&&"mousemove"!=b||_.rb(c);if("mousewheel"!=b&&(!d||"mousemove"!=b)){if("mousemove"==b||"move"==b)a.C=b,a.D=c;if(d||!a.get("panWhileDrawing"))"movestart"==b&&(d=!0),"moveend"==b&&(d=!1),"panbynow"==b?a.C&&a.D&&Y5(a,a.C,a.D):Y5(a,b,c)}})});return c},V5=function(a){var b=new _.LB(["map","drawingMode","pegmanDragging"],"active",function(a,b,e){return!!a&&!!b&&!e});b.bindTo("map",a);b.bindTo("drawingMode",a);a.f.bindTo("active",
b);return b},W5=function(a){var b=new _.LB(["draggableCursor","panWhileDrawing"],"cursor",function(a,b){return b?null:a});b.bindTo("panWhileDrawing",a);a.f.bindTo("draggableCursor",b,"cursor");return b},Y5=function(a,b,c){var d=a.get("map");if(a.b){var e=d.__gm.get("projectionController");d=d.__gm.get("panes");if(e&&d){c.ea?(d=c.ea,e=e.fromContainerPixelToLatLng(d)):(d=_.qn(c,d.floatPane),e=e.fromDivPixelToLatLng(d));var f=a.get("snappingCallback");(f=f&&f(a.b.hf(e)))&&(e=f);if("click"==b){f=_.bk();
if(300>=f-a.G&&a.l&&_.db(a.l.x,d.x,a.m)&&_.db(a.l.y,d.y,a.m))return;a.l=d;a.G=f}_.z.trigger(a.b,b,e,c)}}},Z5=function(a){_.Xf.call(this);var b=new X5;b.bindTo("map",a);b.bindTo("drawingMode",a);b.bindTo("panWhileDrawing",a);b.bindTo("markerOptions",a);b.bindTo("polygonOptions",a);b.bindTo("polylineOptions",a);b.bindTo("rectangleOptions",a);b.bindTo("circleOptions",a);b.bindTo("drawPolysWithDrag",a);_.z.forward(b,"overlaycomplete",a);_.z.forward(b,"circlecomplete",a);_.z.forward(b,"markercomplete",
a);_.z.forward(b,"polygoncomplete",a);_.z.forward(b,"polylinecomplete",a);_.z.forward(b,"rectanglecomplete",a);this.bindTo("map",a);this.bindTo("drawingControl",a);this.bindTo("drawingControlOptions",a);this.bindTo("drawingMode",a);this.set("snappingCallback",a.get("snappingCallback"));a.bindTo("snappingCallback",this);b.bindTo("snappingCallback",this)},$5=function(a){switch(a){case null:return null;case "Point":return"marker";case "LineString":return"polyline";case "Polygon":return"polygon";default:return null}};
_.t(C5,_.D);var B5={marker:"Add a marker",polygon:"Draw a shape",polyline:"Draw a line",rectangle:"Draw a rectangle",circle:"Draw a circle"},z5=new _.L(16,16),A5={hand:144,marker:112,polygon:96,polyline:128,rectangle:48,circle:0},y5={hand:80,marker:176,polygon:64,polyline:32,rectangle:16,circle:160};_.t(D5,_.D);_.t(E5,D5);_.k=E5.prototype;_.k.hf=function(a){F5(this);this.Oc(a);return{latLng:a,overlay:this.b}};_.k.active_changed=function(){if(this.get("active"))this.set("draggableCursor",this.m),this.set("draggingCursor","");else{var a=this.b;a&&(a.unbind("map"),a.set("map",null),this.b=null);this.f=null;this.j=!1}};_.k.Oc=function(a){this.b&&(this.f?(this.b.get("map")||this.b.bindTo("map",this),this.l.b(this.b,this.f,a)):this.l.b(this.b,a))};
_.k.Mj=function(a){this.f?G5(this,a):(F5(this),this.f=a,this.Oc(a),this.j=!0)};_.k.Kj=function(a,b){this.j||(this.set("draggingCursor",this.m),this.set("enablePanning",!0),F5(this),this.f=a,this.Oc(a),_.KB(b))};_.k.Lj=function(a,b){this.j||(this.Oc(a),_.KB(b))};_.k.Jj=function(a,b){this.j||(this.set("draggingCursor",""),this.set("enablePanning",!1),G5(this,a),_.KB(b))};H5.prototype.f=function(a){return new _.Fg(a)};H5.prototype.b=function(a,b,c){a.set("center",b);var d=0,e=a.get("map");e&&c&&(d=e.__gm.get("baseMapType"),d=_.Cz(b,c,d&&d.radius));a.set("radius",d)};H5.prototype.l=_.ra("circle");H5.prototype.j=_.ra("circlecomplete");_.t(I5,D5);I5.prototype.hf=function(a){J5(this);this.b.setPosition(a);return{latLng:a,overlay:this.b}};I5.prototype.active_changed=function(){this.get("active")&&this.set("draggableCursor",this.f)};I5.prototype.j=function(a){J5(this);this.b.setPosition(a);this.b.setMap(this.get("map"));_.z.trigger(this,"overlaycomplete",{type:"marker",overlay:this.b});_.z.trigger(this,"markercomplete",this.b);this.b=null};_.t(K5,D5);_.k=K5.prototype;_.k.hf=function(a){this.b&&this.b.Pb||Q5(this);return{latLng:a,overlay:this.b.Bh||this.b.Pb}};_.k.active_changed=function(){this.get("active")?this.set("draggableCursor",this.f):this.b&&this.b.Pb&&N5(this)};_.k.sj=function(a){this.b?O5(this,a):(Q5(this),L5(this,a))};_.k.Bl=function(){this.b&&1<this.b.Pb.getPath().getLength()&&N5(this)};
_.k.tj=function(a){var b=a;this.b&&(a=M5(this,a),this.set("draggableCursor",a?"pointer":this.f),a&&(b=a.latLng),this.b.Ab.set("freeVertexPosition",b))};_.k.vj=function(a,b){this.get("drawPolysWithDrag")&&(this.b||Q5(this),this.b.Pb.getPath().getLength()||L5(this,a),this.set("draggingCursor",this.f),_.KB(b))};_.k.wj=function(a,b){this.b&&this.get("drawPolysWithDrag")&&(this.b.Ab.set("freeVertexPosition",a),_.KB(b))};
_.k.uj=function(a,b){this.get("drawPolysWithDrag")&&(this.b&&(O5(this,a),this.set("draggingCursor","")),this.b&&this.b.Ab.set("freeVertexPosition",null),_.KB(b))};_.k.drawPolysWithDrag_changed=K5.prototype.panWhileDrawing_changed=function(){P5(this)};R5.prototype.f=function(a){return new _.Jg(a)};R5.prototype.b=function(a,b,c){a.set("bounds",S5(b,c||b))};R5.prototype.l=_.ra("rectangle");R5.prototype.j=_.ra("rectanglecomplete");_.t(X5,_.D);X5.prototype.map_changed=function(){var a=this.get("map"),b=this.F,c=this.f;if(a){var d=a.__gm;this.bindTo("mouseEventTarget",d);b.bindTo("pegmanDragging",d);c.bindTo("draggable",a);c.bindTo("scrollwheel",a);this.B=_.z.forward(c,"panbynow",d)}else this.unbind("mouseEventTarget"),this.set("mouseEventTarget",null),b.unbind("pegmanDragging"),c.unbind("draggable"),c.unbind("scrollwheel"),this.B&&(_.z.removeListener(this.B),this.B=null)};
X5.prototype.mouseEventTarget_changed=function(){var a=["offset","panes","projectionTopLeft","size"];x5(this.f,a);var b=this.N;_.v(b,_.z.removeListener);b.length=0;var c=this.get("mouseEventTarget");if(c){var d=this.f,e=this.get("map");_.fA(d,a,e.__gm);_.v(["movestart","move","moveend"],function(a){var e=_.z.addListener(d,a,function(b){_.iq(b)||_.z.trigger(c,a,b)});b.push(e)});_.z.forward(d,"mousewheel",c)}};
X5.prototype.drawingMode_changed=function(){this.b&&this.b.set("active",!1);this.f.set("panAtEdge",!1);var a=this.get("drawingMode");(this.b=this.j[a])&&this.b.set("active",!0)};_.t(Z5,_.Xf);_.k=Z5.prototype;_.k.map_changed=function(){var a=this.get("map");a?(a=a.__gm,this.bindTo("layoutManager",a),a.set("snappingCallback",this.get("snappingCallback")),this.bindTo("snappingCallback",a)):(this.unbind("layoutManager"),this.set("layoutManager",null),this.unbind("snappingCallback"))};_.k.layoutManager_changed=Z5.prototype.O;_.k.drawingControl_changed=Z5.prototype.O;_.k.drawingControlOptions_changed=Z5.prototype.O;
_.k.da=function(){this.b&&(this.f.Db(this.b),_.pg(this.b),this.b=null,this.j.unbindAll(),this.j=null);if((this.f=this.get("layoutManager"))&&0!=this.get("drawingControl")){var a=this.get("drawingControlOptions")||{},b=a.drawingModes||a6,c=window.document.createElement("div");_.SA(c);c.style.margin=_.W(5);_.vm(c,10);this.b=c;this.j=new C5(this.b,b);this.j.bindTo("drawingMode",this);this.f.addElement(this.b,a.position||1,!1,.25)}};var a6=["marker","polyline","rectangle","circle","polygon"];_.Tc("drawing_impl",{Ji:Z5,Nl:function(a){var b=new _.D,c=new _.LB(["dataDrawingMode"],"drawingManagerMode",$5);c.bindTo("dataDrawingMode",a,"drawingMode");var d=new _.LB(["styleOrStylingFunction"],"style",function(a){return"function"===typeof a?a(new _.Vc):a});d.bindTo("styleOrStylingFunction",a,"style");var e=new _.LB(["controls","controlPosition"],"drawingControlOptions",function(a,b){return{drawingModes:_.eb(a,$5),position:b}});e.bindTo("controls",a);e.bindTo("controlPosition",a);var f=new _.LB(["controls"],
"drawingControl",function(a){return!!a});f.bindTo("controls",a);b.bindTo("map",a);b.bindTo("drawingMode",c,"drawingManagerMode");b.bindTo("markerOptions",d,"style");b.bindTo("polylineOptions",d,"style");b.bindTo("polygonOptions",d,"style");b.bindTo("drawingControlOptions",e);b.bindTo("drawingControl",f);_.z.addListener(b,"overlaycomplete",function(b){b=b.overlay;var c=_.LK([b]),d=a.get("featureFactory");c=d?d(c):new _.Vc({geometry:c});a.add(c);b.set("map",null)});new Z5(b);_.ek(a,"map_changed",function(){var b=
a.get("map");b&&_.rn(b,"Le")})}});});

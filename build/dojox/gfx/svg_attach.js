//>>built
define("dojox/gfx/svg_attach","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/Color ./_base ./svg ./matrix".split(" "),function(n,h,k,l,f,e,p){function q(a){var c=a.rawNode.getAttribute("fill");if("none"==c)a.fillStyle=null;else{var b=null,d=e.getRef(c);if(d)switch(d.tagName.toLowerCase()){case "lineargradient":b=m(f.defaultLinearGradient,d);k.forEach(["x1","y1","x2","y2"],function(a){b[a]=d.getAttribute(a)});break;case "radialgradient":b=m(f.defaultRadialGradient,d);k.forEach(["cx",
"cy","r"],function(a){b[a]=d.getAttribute(a)});b.cx=d.getAttribute("cx");b.cy=d.getAttribute("cy");b.r=d.getAttribute("r");break;case "pattern":b=h.clone(f.defaultPattern),k.forEach(["x","y","width","height"],function(a){b[a]=d.getAttribute(a)}),b.src=d.firstChild.getAttributeNS(e.xmlns.xlink,"href")}else b=new l(c),c=a.rawNode.getAttribute("fill-opacity"),null!=c&&(b.a=c);a.fillStyle=b}}function m(a,c){var b=h.clone(a);b.colors=[];for(var d=0;d<c.childNodes.length;++d)b.colors.push({offset:c.childNodes[d].getAttribute("offset"),
color:new l(c.childNodes[d].getAttribute("stop-color"))});return b}function g(a,c){var b=a.shape=h.clone(c),d=a.rawNode,e;for(e in b)b[e]=d.getAttribute(e)}n.experimental("dojox.gfx.svg_attach");e.attachNode=function(a){if(!a)return null;var c=null;switch(a.tagName.toLowerCase()){case e.Rect.nodeType:a=c=new e.Rect(a);g(a,f.defaultRect);a.shape.r=Math.min(a.rawNode.getAttribute("rx"),a.rawNode.getAttribute("ry"));break;case e.Ellipse.nodeType:c=new e.Ellipse(a);g(c,f.defaultEllipse);break;case e.Polyline.nodeType:c=
new e.Polyline(a);g(c,f.defaultPolyline);break;case e.Path.nodeType:c=new e.Path(a);g(c,f.defaultPath);break;case e.Circle.nodeType:c=new e.Circle(a);g(c,f.defaultCircle);break;case e.Line.nodeType:c=new e.Line(a);g(c,f.defaultLine);break;case e.Image.nodeType:c=new e.Image(a);g(c,f.defaultImage);break;case e.Text.nodeType:if((c=a.getElementsByTagName("textPath"))&&c.length){c=new e.TextPath(a);g(c,f.defaultPath);var b=c;a=b.shape=h.clone(f.defaultTextPath);b=b.rawNode}else b=c=new e.Text(a),a=b.shape=
h.clone(f.defaultText),b=b.rawNode,a.x=b.getAttribute("x"),a.y=b.getAttribute("y");a.align=b.getAttribute("text-anchor");a.decoration=b.getAttribute("text-decoration");a.rotated=0!=parseFloat(b.getAttribute("rotate"));a.kerning="auto"==b.getAttribute("kerning");a.text=b.firstChild.nodeValue;b=c;a=b.fontStyle=h.clone(f.defaultFont);b=b.rawNode;a.style=b.getAttribute("font-style");a.variant=b.getAttribute("font-variant");a.weight=b.getAttribute("font-weight");a.size=b.getAttribute("font-size");a.family=
b.getAttribute("font-family");break;default:return null}if(!(c instanceof e.Image)){q(c);var d=c;a=d.rawNode;b=a.getAttribute("stroke");if(null==b||"none"==b)d.strokeStyle=null;else if(d=d.strokeStyle=h.clone(f.defaultStroke),b=new l(b))d.color=b,d.color.a=a.getAttribute("stroke-opacity"),d.width=a.getAttribute("stroke-width"),d.cap=a.getAttribute("stroke-linecap"),d.join=a.getAttribute("stroke-linejoin"),"miter"==d.join&&(d.join=a.getAttribute("stroke-miterlimit")),d.style=a.getAttribute("dojoGfxStrokeStyle")}a=
c;b=a.rawNode.getAttribute("transform");b.match(/^matrix\(.+\)$/)?(b=b.slice(7,-1).split(","),a.matrix=p.normalize({xx:parseFloat(b[0]),xy:parseFloat(b[2]),yx:parseFloat(b[1]),yy:parseFloat(b[3]),dx:parseFloat(b[4]),dy:parseFloat(b[5])})):a.matrix=null;return c};e.attachSurface=function(a){var c=new e.Surface;c.rawNode=a;a=a.getElementsByTagName("defs");if(0==a.length)return null;c.defNode=a[0];return c};return e});
//@ sourceMappingURL=svg_attach.js.map
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var b=arguments;b.callee=b.callee.caller;b=[].slice.call(b);typeof console.log==="object"?log.apply.call(console.log,console,b):console.log.apply(console,b)}};
(function(b){function m(){}for(var j="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),k;k=j.pop();)b[k]=b[k]||m})(function(){try{return console.log(),window.console}catch(b){return window.console={}}}());
(function(b,m){function j(e){return!b(e).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}function k(e,i){var l=e.nodeName.toLowerCase();if("area"===l){var l=e.parentNode,n=l.name;if(!e.href||!n||l.nodeName.toLowerCase()!=="map")return!1;l=b("img[usemap=#"+n+"]")[0];return!!l&&j(l)}return(/input|select|textarea|button|object/.test(l)?!e.disabled:"a"==l?e.href||i:i)&&j(e)}b.ui=b.ui||{};b.ui.version||(b.extend(b.ui,{version:"1.8.18",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),b.fn.extend({propAttr:b.fn.prop||b.fn.attr,_focus:b.fn.focus,focus:function(e,i){return typeof e=="number"?this.each(function(){var l=
this;setTimeout(function(){b(l).focus();i&&i.call(l)},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?e=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):e=this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,
"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?b(document):e},zIndex:function(e){if(e!==m)return this.css("zIndex",e);if(this.length)for(var e=b(this[0]),i;e.length&&e[0]!==document;){i=e.css("position");if(i==="absolute"||i==="relative"||i==="fixed")if(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&i!==0)return i;e=e.parent()}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(b){b.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),b.each(["Width","Height"],function(e,i){function l(e,d,a,c){b.each(j,function(){d-=parseFloat(b.curCSS(e,"padding"+this,!0))||0;a&&(d-=parseFloat(b.curCSS(e,"border"+this+"Width",!0))||0);c&&(d-=parseFloat(b.curCSS(e,"margin"+this,!0))||0)});return d}var j=i==="Width"?["Left","Right"]:["Top","Bottom"],k=i.toLowerCase(),g={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,
outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+i]=function(e){return e===m?g["inner"+i].call(this):this.each(function(){b(this).css(k,l(this,e)+"px")})};b.fn["outer"+i]=function(e,d){return typeof e!="number"?g["outer"+i].call(this,e):this.each(function(){b(this).css(k,l(this,e,!0,d)+"px")})}}),b.extend(b.expr[":"],{data:function(e,i,l){return!!b.data(e,l[3])},focusable:function(e){return k(e,!isNaN(b.attr(e,"tabindex")))},tabbable:function(e){var i=b.attr(e,"tabindex"),l=isNaN(i);
return(l||i>=0)&&k(e,!l)}}),b(function(){var e=document.body,i=e.appendChild(i=document.createElement("div"));b.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=i.offsetHeight===100;b.support.selectstart="onselectstart"in i;e.removeChild(i).style.display="none"}),b.extend(b.ui,{plugin:{add:function(e,i,l){var e=b.ui[e].prototype,j;for(j in l)e.plugins[j]=e.plugins[j]||[],e.plugins[j].push([i,l[j]])},call:function(b,i,l){if((i=b.plugins[i])&&b.element[0].parentNode)for(var j=
0;j<i.length;j++)b.options[i[j][0]]&&i[j][1].apply(b.element,l)}},contains:function(b,i){return document.compareDocumentPosition?b.compareDocumentPosition(i)&16:b!==i&&b.contains(i)},hasScroll:function(e,i){if(b(e).css("overflow")==="hidden")return!1;var j=i&&i==="left"?"scrollLeft":"scrollTop",k=!1;if(e[j]>0)return!0;e[j]=1;k=e[j]>0;e[j]=0;return k},isOverAxis:function(b,i,j){return b>i&&b<i+j},isOver:function(e,i,j,k,m,g){return b.ui.isOverAxis(e,j,m)&&b.ui.isOverAxis(i,k,g)}}))})(jQuery);
jQuery.effects||function(b,m){function j(d){return!d||typeof d=="number"||b.fx.speeds[d]?!0:typeof d=="string"&&!b.effects[d]?!0:!1}function k(d,a,c,h){typeof d=="object"&&(h=a,c=null,a=d,d=a.effect);b.isFunction(a)&&(h=a,c=null,a={});if(typeof a=="number"||b.fx.speeds[a])h=c,c=a,a={};b.isFunction(c)&&(h=c,c=null);a=a||{};c=c||a.duration;c=b.fx.off?0:typeof c=="number"?c:c in b.fx.speeds?b.fx.speeds[c]:b.fx.speeds._default;h=h||a.complete;return[d,a,c,h]}function e(d,a){var c={_:0},b;for(b in a)d[b]!=
a[b]&&(c[b]=a[b]);return c}function i(d){var a,c;for(a in d)c=d[a],(c==null||b.isFunction(c)||a in o||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(c)))&&delete d[a];return d}function l(){var d=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={},c,b;if(d&&d.length&&d[0]&&d[d[0]])for(var f=d.length;f--;)c=d[f],typeof d[c]=="string"&&(b=c.replace(/\-(\w)/g,function(a,c){return c.toUpperCase()}),a[b]=d[c]);else for(c in d)typeof d[c]=="string"&&(a[c]=
d[c]);return a}function n(d){var a;return d&&d.constructor==Array&&d.length==3?d:(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(d))?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(d))?[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55]:(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],
16)]:(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(d))?[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]:/rgba\(0, 0, 0, 0\)/.exec(d)?p.transparent:p[b.trim(d).toLowerCase()]}b.effects={};b.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,borderColor,color,outlineColor".split(","),function(d,a){b.fx.step[a]=function(c){if(!c.colorInit){var d;d=c.elem;var f=a,e;do{e=b.curCSS(d,f);if(e!=""&&e!="transparent"||b.nodeName(d,"body"))break;
f="backgroundColor"}while(d=d.parentNode);d=n(e);c.start=d;c.end=n(c.end);c.colorInit=!0}c.elem.style[a]="rgb("+Math.max(Math.min(parseInt(c.pos*(c.end[0]-c.start[0])+c.start[0],10),255),0)+","+Math.max(Math.min(parseInt(c.pos*(c.end[1]-c.start[1])+c.start[1],10),255),0)+","+Math.max(Math.min(parseInt(c.pos*(c.end[2]-c.start[2])+c.start[2],10),255),0)+")"}});var p={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,
0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,
255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},g=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.effects.animateClass=function(d,a,c,h){b.isFunction(c)&&(h=c,c=null);return this.queue(function(){var f=
b(this),q=f.attr("style")||" ",j=i(l.call(this)),k,m=f.attr("class");b.each(g,function(a,c){d[c]&&f[c+"Class"](d[c])});k=i(l.call(this));f.attr("class",m);f.animate(e(j,k),{queue:!1,duration:a,easing:c,complete:function(){b.each(g,function(a,c){d[c]&&f[c+"Class"](d[c])});typeof f.attr("style")=="object"?(f.attr("style").cssText="",f.attr("style").cssText=q):f.attr("style",q);h&&h.apply(this,arguments);b.dequeue(this)}})})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(d,a,c,h){return a?b.effects.animateClass.apply(this,
[{add:d},a,c,h]):this._addClass(d)},_removeClass:b.fn.removeClass,removeClass:function(d,a,c,h){return a?b.effects.animateClass.apply(this,[{remove:d},a,c,h]):this._removeClass(d)},_toggleClass:b.fn.toggleClass,toggleClass:function(d,a,c,h,f){return typeof a=="boolean"||a===m?c?b.effects.animateClass.apply(this,[a?{add:d}:{remove:d},c,h,f]):this._toggleClass(d,a):b.effects.animateClass.apply(this,[{toggle:d},a,c,h])},switchClass:function(d,a,c,h,f){return b.effects.animateClass.apply(this,[{add:a,
remove:d},c,h,f])}});b.extend(b.effects,{version:"1.8.18",save:function(d,a){for(var c=0;c<a.length;c++)a[c]!==null&&d.data("ec.storage."+a[c],d[0].style[a[c]])},restore:function(d,a){for(var c=0;c<a.length;c++)a[c]!==null&&d.css(a[c],d.data("ec.storage."+a[c]))},setMode:function(d,a){a=="toggle"&&(a=d.is(":hidden")?"show":"hide");return a},getBaseline:function(d,a){var c,b;switch(d[0]){case "top":c=0;break;case "middle":c=0.5;break;case "bottom":c=1;break;default:c=d[0]/a.height}switch(d[1]){case "left":b=
0;break;case "center":b=0.5;break;case "right":b=1;break;default:b=d[1]/a.width}return{x:b,y:c}},createWrapper:function(d){if(d.parent().is(".ui-effects-wrapper"))return d.parent();var a={width:d.outerWidth(!0),height:d.outerHeight(!0),"float":d.css("float")},c=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),h=document.activeElement;d.wrap(c);(d[0]===h||b.contains(d[0],h))&&b(h).focus();c=d.parent();d.css("position")==
"static"?(c.css({position:"relative"}),d.css({position:"relative"})):(b.extend(a,{position:d.css("position"),zIndex:d.css("z-index")}),b.each(["top","left","bottom","right"],function(c,b){a[b]=d.css(b);isNaN(parseInt(a[b],10))&&(a[b]="auto")}),d.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"}));return c.css(a).show()},removeWrapper:function(d){var a,c=document.activeElement;return d.parent().is(".ui-effects-wrapper")?(a=d.parent().replaceWith(d),(d[0]===c||b.contains(d[0],c))&&b(c).focus(),
a):d},setTransition:function(d,a,c,h){h=h||{};b.each(a,function(a,b){unit=d.cssUnit(b);unit[0]>0&&(h[b]=unit[0]*c+unit[1])});return h}});b.fn.extend({effect:function(d,a,c,h){var f=k.apply(this,arguments),e={options:f[1],duration:f[2],callback:f[3]},f=e.options.mode,g=b.effects[d];return b.fx.off||!g?f?this[f](e.duration,e.callback):this.each(function(){e.callback&&e.callback.call(this)}):g.call(this,e)},_show:b.fn.show,show:function(d){if(j(d))return this._show.apply(this,arguments);var a=k.apply(this,
arguments);a[1].mode="show";return this.effect.apply(this,a)},_hide:b.fn.hide,hide:function(d){if(j(d))return this._hide.apply(this,arguments);var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)},__toggle:b.fn.toggle,toggle:function(d){if(j(d)||typeof d=="boolean"||b.isFunction(d))return this.__toggle.apply(this,arguments);var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)},cssUnit:function(d){var a=this.css(d),c=[];b.each(["em","px","%",
"pt"],function(d,b){a.indexOf(b)>0&&(c=[parseFloat(a),b])});return c}});b.easing.jswing=b.easing.swing;b.extend(b.easing,{def:"easeOutQuad",swing:function(d,a,c,h,f){return b.easing[b.easing.def](d,a,c,h,f)},easeInQuad:function(d,a,c,b,f){return b*(a/=f)*a+c},easeOutQuad:function(d,a,c,b,f){return-b*(a/=f)*(a-2)+c},easeInOutQuad:function(d,a,c,b,f){return(a/=f/2)<1?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(d,a,c,b,f){return b*(a/=f)*a*a+c},easeOutCubic:function(d,a,c,b,f){return b*((a=
a/f-1)*a*a+1)+c},easeInOutCubic:function(d,a,c,b,f){return(a/=f/2)<1?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(d,a,c,b,f){return b*(a/=f)*a*a*a+c},easeOutQuart:function(d,a,c,b,f){return-b*((a=a/f-1)*a*a*a-1)+c},easeInOutQuart:function(d,a,c,b,f){return(a/=f/2)<1?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(d,a,c,b,f){return b*(a/=f)*a*a*a*a+c},easeOutQuint:function(d,a,c,b,f){return b*((a=a/f-1)*a*a*a*a+1)+c},easeInOutQuint:function(b,a,c,h,f){return(a/=f/2)<1?h/2*a*a*
a*a*a+c:h/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(b,a,c,h,f){return-h*Math.cos(a/f*(Math.PI/2))+h+c},easeOutSine:function(b,a,c,h,f){return h*Math.sin(a/f*(Math.PI/2))+c},easeInOutSine:function(b,a,c,h,f){return-h/2*(Math.cos(Math.PI*a/f)-1)+c},easeInExpo:function(b,a,c,h,f){return a==0?c:h*Math.pow(2,10*(a/f-1))+c},easeOutExpo:function(b,a,c,h,f){return a==f?c+h:h*(-Math.pow(2,-10*a/f)+1)+c},easeInOutExpo:function(b,a,c,h,f){return a==0?c:a==f?c+h:(a/=f/2)<1?h/2*Math.pow(2,10*(a-1))+c:h/2*(-Math.pow(2,
-10*--a)+2)+c},easeInCirc:function(b,a,c,h,f){return-h*(Math.sqrt(1-(a/=f)*a)-1)+c},easeOutCirc:function(b,a,c,h,f){return h*Math.sqrt(1-(a=a/f-1)*a)+c},easeInOutCirc:function(b,a,c,h,f){return(a/=f/2)<1?-h/2*(Math.sqrt(1-a*a)-1)+c:h/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(b,a,c,h,f){var b=1.70158,e=0,g=h;if(a==0)return c;if((a/=f)==1)return c+h;e||(e=f*0.3);g<Math.abs(h)?(g=h,b=e/4):b=e/(2*Math.PI)*Math.asin(h/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*f-b)*2*Math.PI/e))+c},easeOutElastic:function(b,
a,c,h,f){var b=1.70158,e=0,g=h;if(a==0)return c;if((a/=f)==1)return c+h;e||(e=f*0.3);g<Math.abs(h)?(g=h,b=e/4):b=e/(2*Math.PI)*Math.asin(h/g);return g*Math.pow(2,-10*a)*Math.sin((a*f-b)*2*Math.PI/e)+h+c},easeInOutElastic:function(b,a,c,h,f){var b=1.70158,e=0,g=h;if(a==0)return c;if((a/=f/2)==2)return c+h;e||(e=f*0.3*1.5);g<Math.abs(h)?(g=h,b=e/4):b=e/(2*Math.PI)*Math.asin(h/g);return a<1?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*f-b)*2*Math.PI/e)+c:g*Math.pow(2,-10*(a-=1))*Math.sin((a*f-b)*2*Math.PI/
e)*0.5+h+c},easeInBack:function(b,a,c,h,f,e){e==m&&(e=1.70158);return h*(a/=f)*a*((e+1)*a-e)+c},easeOutBack:function(b,a,c,e,f,g){g==m&&(g=1.70158);return e*((a=a/f-1)*a*((g+1)*a+g)+1)+c},easeInOutBack:function(b,a,c,e,f,g){g==m&&(g=1.70158);return(a/=f/2)<1?e/2*a*a*(((g*=1.525)+1)*a-g)+c:e/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+c},easeInBounce:function(d,a,c,e,f){return e-b.easing.easeOutBounce(d,f-a,0,e,f)+c},easeOutBounce:function(b,a,c,e,f){return(a/=f)<1/2.75?e*7.5625*a*a+c:a<2/2.75?e*(7.5625*(a-=
1.5/2.75)*a+0.75)+c:a<2.5/2.75?e*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:e*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(d,a,c,e,f){return a<f/2?b.easing.easeInBounce(d,a*2,0,e,f)*0.5+c:b.easing.easeOutBounce(d,a*2-f,0,e,f)*0.5+e*0.5+c}})}(jQuery);
(function(b){b.effects.highlight=function(m){return this.queue(function(){var j=b(this),k=["backgroundImage","backgroundColor","opacity"],e=b.effects.setMode(j,m.options.mode||"show"),i={backgroundColor:j.css("backgroundColor")};e=="hide"&&(i.opacity=0);b.effects.save(j,k);j.show().css({backgroundImage:"none",backgroundColor:m.options.color||"#ffff99"}).animate(i,{queue:!1,duration:m.duration,easing:m.options.easing,complete:function(){e=="hide"&&j.hide();b.effects.restore(j,k);e=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");m.callback&&m.callback.apply(this,arguments);j.dequeue()}})})}})(jQuery);
(function(b){typeof define==="function"&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){b.fn.tweet=function(m){function j(b,a){if(typeof b==="string"){var c=b,e;for(e in a)var f=a[e],c=c.replace(RegExp("{"+e+"}","g"),f===null?"":f);return c}else return b(a)}function k(d,a){return function(){var c=[];this.each(function(){c.push(this.replace(d,a))});return b(c)}}function e(b,a){return b.replace(o,function(b){for(var d=/^[a-z]+:/i.test(b)?b:"http://"+b,e=0;e<a.length;++e){var g=a[e];if(g.url==
d&&g.expanded_url){d=g.expanded_url;b=g.display_url;break}}return'<a href="'+d.replace(/</g,"&lt;").replace(/>/g,"^&gt;")+'">'+b.replace(/</g,"&lt;").replace(/>/g,"^&gt;")+"</a>"})}function i(b){var a=parseInt(((arguments.length>1?arguments[1]:new Date).getTime()-b)/1E3,10),c="";return c=a<1?"just now":a<60?a+" seconds ago":a<120?"about a minute ago":a<2700?"about "+parseInt(a/60,10).toString()+" minutes ago":a<7200?"about an hour ago":a<86400?"about "+parseInt(a/3600,10).toString()+" hours ago":
a<172800?"about a day ago":"about "+parseInt(a/86400,10).toString()+" days ago"}function l(){var b="https:"==document.location.protocol?"https:":"http:",a=g.fetch===null?g.count:g.fetch;if(g.list)return b+"//"+g.twitter_api_url+"/1/"+g.username[0]+"/lists/"+g.list+"/statuses.json?page="+g.page+"&per_page="+a+"&include_entities=1&callback=?";else if(g.favorites)return b+"//"+g.twitter_api_url+"/favorites/"+g.username[0]+".json?page="+g.page+"&count="+a+"&include_entities=1&callback=?";else if(g.query===
null&&g.username.length==1)return b+"//"+g.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+g.username[0]+"&count="+a+(g.retweets?"&include_rts=1":"")+"&page="+g.page+"&include_entities=1&callback=?";else{var c=g.query||"from:"+g.username.join(" OR from:");return b+"//"+g.twitter_search_url+"/search.json?&q="+encodeURIComponent(c)+"&rpp="+a+"&page="+g.page+"&include_entities=1&callback=?"}}function n(b,a){return a?"user"in b?b.user.profile_image_url_https:n(b,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,
"https://s3.amazonaws.com/twitter_production/"):b.profile_image_url||b.user.profile_image_url}function p(d){var a={};a.item=d;a.source=d.source;a.screen_name=d.from_user||d.user.screen_name;a.avatar_size=g.avatar_size;a.avatar_url=n(d,document.location.protocol==="https:");a.retweet=typeof d.retweeted_status!="undefined";a.tweet_time=Date.parse(d.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"));a.join_text=g.join_text=="auto"?d.text.match(/^(@([A-Za-z0-9-_]+)) .*/i)?g.auto_join_text_reply:
d.text.match(o)?g.auto_join_text_url:d.text.match(/^((\w+ed)|just) .*/im)?g.auto_join_text_ed:d.text.match(/^(\w*ing) .*/i)?g.auto_join_text_ing:g.auto_join_text_default:g.join_text;a.tweet_id=d.id_str;a.twitter_base="http://"+g.twitter_url+"/";a.user_url=a.twitter_base+a.screen_name;a.tweet_url=a.user_url+"/status/"+a.tweet_id;a.reply_url=a.twitter_base+"intent/tweet?in_reply_to="+a.tweet_id;a.retweet_url=a.twitter_base+"intent/retweet?tweet_id="+a.tweet_id;a.favorite_url=a.twitter_base+"intent/favorite?tweet_id="+
a.tweet_id;a.retweeted_screen_name=a.retweet&&d.retweeted_status.user.screen_name;a.tweet_relative_time=i(a.tweet_time);a.entities=d.entities?(d.entities.urls||[]).concat(d.entities.media||[]):[];a.tweet_raw_text=a.retweet?"RT @"+a.retweeted_screen_name+" "+d.retweeted_status.text:d.text;a.tweet_text=b([e(a.tweet_raw_text,a.entities)]).linkUser().linkHash()[0];a.tweet_text_fancy=b([a.tweet_text]).makeHeart().capAwesome().capEpic()[0];a.user=j('<a class="tweet_user" href="{user_url}">{screen_name}</a>',
a);a.join=g.join_text?j(' <span class="tweet_join">{join_text}</span> ',a):" ";a.avatar=a.avatar_size?j('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',a):"";a.time=j('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',a);a.text=j('<span class="tweet_text">{tweet_text_fancy}</span>',a);a.reply_action=
j('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',a);a.retweet_action=j('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',a);a.favorite_action=j('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',a);return a}var g=b.extend({username:null,list:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",
auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(b,a){return a.tweet_time-b.tweet_time},filter:function(){return!0}},m),o=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd]))/gi;
b.extend({tweet:{t:j}});b.fn.extend({linkUser:k(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+g.twitter_url+'/$2">$2</a>'),linkHash:k(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+g.twitter_search_url+"/search?q=&tag=$1&lang=all"+(g.username&&g.username.length==1&&!g.list?"&from="+g.username.join("%2BOR%2B"):"")+'">#$1</a>'),capAwesome:k(/\b(awesome)\b/gi,'<span class="awesome">$1</span>'),capEpic:k(/\b(epic)\b/gi,'<span class="epic">$1</span>'),
makeHeart:k(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(d,a){var c=b('<ul class="tweet_list">'),e='<p class="tweet_intro">'+g.intro_text+"</p>",f='<p class="tweet_outro">'+g.outro_text+"</p>",i=b('<p class="loading">'+g.loading_text+"</p>");if(g.username&&typeof g.username=="string")g.username=[g.username];b(a).unbind("tweet:load").bind("tweet:load",function(){g.loading_text&&b(a).empty().append(i);b.getJSON(l(),function(d){b(a).empty().append(c);g.intro_text&&c.before(e);
c.empty();d=b.map(d.results||d,p);d=b.grep(d,g.filter).sort(g.comparator).slice(0,g.count);c.append(b.map(d,function(a){return"<li>"+j(g.template,a)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");g.outro_text&&c.after(f);b(a).trigger("loaded").trigger(d.length===0?"empty":"full");g.refresh_interval&&window.setTimeout(function(){b(a).trigger("tweet:load")},1E3*g.refresh_interval)})}).trigger("tweet:load")})}});

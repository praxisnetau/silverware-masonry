!function(t){function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var e={};i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/silverware-masonry/client/dist/",i(i.s=4)}([function(t,i,e){var n,o;!function(r,s){n=s,void 0!==(o="function"==typeof n?n.call(i,e,i,t):n)&&(t.exports=o)}("undefined"!=typeof window&&window,function(){"use strict";function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=0,o=e[n];i=i||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,i),n+=s?0:1,o=e[n]}return this}},t})},function(t,i,e){var n;!function(o,r){"use strict";void 0!==(n=function(){return r()}.call(i,e,i,t))&&(t.exports=n)}(window,function(){"use strict";function t(t){var i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}function i(){}function e(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;i<u;i++)t[h[i]]=0;return t}function n(t){var i=getComputedStyle(t);return i||a("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}function o(){if(!c){c=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(i);var o=n(i);r.isBoxSizeOuter=s=200==t(o.width),e.removeChild(i)}}function r(i){if(o(),"string"==typeof i&&(i=document.querySelector(i)),i&&"object"==typeof i&&i.nodeType){var r=n(i);if("none"==r.display)return e();var a={};a.width=i.offsetWidth,a.height=i.offsetHeight;for(var c=a.isBorderBox="border-box"==r.boxSizing,d=0;d<u;d++){var l=h[d],f=r[l],p=parseFloat(f);a[l]=isNaN(p)?0:p}var m=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,E=a.borderLeftWidth+a.borderRightWidth,_=a.borderTopWidth+a.borderBottomWidth,I=c&&s,b=t(r.width);!1!==b&&(a.width=b+(I?0:m+E));var x=t(r.height);return!1!==x&&(a.height=x+(I?0:g+_)),a.innerWidth=a.width-(m+E),a.innerHeight=a.height-(g+_),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?i:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,c=!1;return r})},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(11),o=e.n(n),r=e(8),s=e.n(r),a=e(7),h=e.n(a);o()(function(){o()(".masonrycomponent").each(function(){var t=o()(this).find(".masonry-grid"),i=new s.a(t[0],t.data("masonry-config"));new h.a(t[0]).on("progress",function(){i.layout()})})})},function(t,i){},function(t,i,e){e(3),e(2)},function(t,i,e){var n,o;!function(r,s){"use strict";n=s,void 0!==(o="function"==typeof n?n.call(i,e,i,t):n)&&(t.exports=o)}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var i=["webkit","moz","ms","o"],e=0;e<i.length;e++){var n=i[e],o=n+"MatchesSelector";if(t[o])return o}}();return function(i,e){return i[t](e)}})},function(t,i,e){var n,o;!function(r,s){n=[e(5)],void 0!==(o=function(t){return s(r,t)}.apply(i,n))&&(t.exports=o)}(window,function(t,i){"use strict";var e={};e.extend=function(t,i){for(var e in i)t[e]=i[e];return t},e.modulo=function(t,i){return(t%i+i)%i},e.makeArray=function(t){var i=[];if(Array.isArray(t))i=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var e=0;e<t.length;e++)i.push(t[e]);else i.push(t);return i},e.removeFrom=function(t,i){var e=t.indexOf(i);-1!=e&&t.splice(e,1)},e.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,i(t,e))return t},e.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},e.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},e.filterFindElements=function(t,n){t=e.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);i(t,n)&&o.push(t);for(var e=t.querySelectorAll(n),r=0;r<e.length;r++)o.push(e[r])}}),o},e.debounceMethod=function(t,i,e){var n=t.prototype[i],o=i+"Timeout";t.prototype[i]=function(){var t=this[o];t&&clearTimeout(t);var i=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,i),delete r[o]},e||100)}},e.docReady=function(t){var i=document.readyState;"complete"==i||"interactive"==i?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},e.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,i,e){return i+"-"+e}).toLowerCase()};var n=t.console;return e.htmlInit=function(i,o){e.docReady(function(){var r=e.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=e.makeArray(a).concat(e.makeArray(h)),c=s+"-options",d=t.jQuery;u.forEach(function(t){var e,r=t.getAttribute(s)||t.getAttribute(c);try{e=r&&JSON.parse(r)}catch(i){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+i))}var a=new i(t,e);d&&d.data(t,o,a)})})},e})},function(t,i,e){var n,o;!function(r,s){"use strict";n=[e(0)],void 0!==(o=function(t){return s(r,t)}.apply(i,n))&&(t.exports=o)}("undefined"!=typeof window?window:this,function(t,i){"use strict";function e(t,i){for(var e in i)t[e]=i[e];return t}function n(t){var i=[];if(Array.isArray(t))i=t;else if("number"==typeof t.length)for(var e=0;e<t.length;e++)i.push(t[e]);else i.push(t);return i}function o(t,i,r){if(!(this instanceof o))return new o(t,i,r);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=e({},this.options),"function"==typeof i?r=i:e(this.options,i),r&&this.on("always",r),this.getImages(),a&&(this.jqDeferred=new a.Deferred),setTimeout(function(){this.check()}.bind(this))}function r(t){this.img=t}function s(t,i){this.url=t,this.element=i,this.img=new Image}var a=t.jQuery,h=t.console;o.prototype=Object.create(i.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var i=t.nodeType;if(i&&u[i]){for(var e=t.querySelectorAll("img"),n=0;n<e.length;n++){var o=e[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var i=getComputedStyle(t);if(i)for(var e=/url\((['"])?(.*?)\1\)/gi,n=e.exec(i.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=e.exec(i.backgroundImage)}},o.prototype.addImage=function(t){var i=new r(t);this.images.push(i)},o.prototype.addBackground=function(t,i){var e=new s(t,i);this.images.push(e)},o.prototype.check=function(){function t(t,e,n){setTimeout(function(){i.progress(t,e,n)})}var i=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();this.images.forEach(function(i){i.once("progress",t),i.check()})},o.prototype.progress=function(t,i,e){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,i]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&h&&h.log("progress: "+e,t,i)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var i=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[i](this)}},r.prototype=Object.create(i.prototype),r.prototype.check=function(){if(this.getIsImageComplete())return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,i){this.isLoaded=t,this.emitEvent("progress",[this,this.img,i])},r.prototype.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,i){this.isLoaded=t,this.emitEvent("progress",[this,this.element,i])},o.makeJQueryPlugin=function(i){(i=i||t.jQuery)&&(a=i,a.fn.imagesLoaded=function(t,i){return new o(this,t,i).jqDeferred.promise(a(this))})},o.makeJQueryPlugin(),o})},function(t,i,e){var n,o,r;!function(s,a){o=[e(10),e(1)],n=a,void 0!==(r="function"==typeof n?n.apply(i,o):n)&&(t.exports=r)}(window,function(t,i){"use strict";var e=t.create("masonry");e.compatOptions.fitWidth="isFitWidth";var n=e.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&i(e).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&s<1?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),e=t?this.element.parentNode:this.element,n=i(e);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var i=t.size.outerWidth%this.columnWidth,e=i&&i<1?"round":"ceil",n=Math[e](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;u<h;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var i=this._getTopColGroup(t),e=Math.min.apply(Math,i);return{col:i.indexOf(e),y:e}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var i=[],e=this.cols+1-t,n=0;n<e;n++)i[n]=this._getColGroupY(n,t);return i},n._getColGroupY=function(t,i){if(i<2)return this.colYs[t];var e=this.colYs.slice(t,t+i);return Math.max.apply(Math,e)},n._getHorizontalColPosition=function(t,i){var e=this.horizontalColIndex%this.cols;e=t>1&&e+t>this.cols?0:e;var n=i.size.outerWidth&&i.size.outerHeight;return this.horizontalColIndex=n?e+t:this.horizontalColIndex,{col:e,y:this._getColGroupY(e,t)}},n._manageStamp=function(t){var e=i(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+e.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),c=(u?n.top:n.bottom)+e.outerHeight,d=a;d<=h;d++)this.colYs[d]=Math.max(c,this.colYs[d])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,i=this.cols;--i&&0===this.colYs[i];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e})},function(t,i,e){var n,o,r;!function(s,a){o=[e(0),e(1)],n=a,void 0!==(r="function"==typeof n?n.apply(i,o):n)&&(t.exports=r)}(window,function(t,i){"use strict";function e(t){for(var i in t)return!1;return null,!0}function n(t,i){t&&(this.element=t,this.layout=i,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,r="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:s,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},u=n.prototype=Object.create(t.prototype);u.constructor=n,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},u.getSize=function(){this.size=i(this.element)},u.css=function(t){var i=this.element.style;for(var e in t)i[h[e]||e]=t[e]},u.getPosition=function(){var t=getComputedStyle(this.element),i=this.layout._getOption("originLeft"),e=this.layout._getOption("originTop"),n=t[i?"left":"right"],o=t[e?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=i?r.paddingLeft:r.paddingRight,a-=e?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},u.layoutPosition=function(){var t=this.layout.size,i={},e=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=e?"paddingLeft":"paddingRight",r=e?"left":"right",s=e?"right":"left",a=this.position.x+t[o];i[r]=this.getXValue(a),i[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",c=n?"bottom":"top",d=this.position.y+t[h];i[u]=this.getYValue(d),i[c]="",this.css(i),this.emitEvent("layout",[this])},u.getXValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!i?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var i=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&i?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,i){this.getPosition();var e=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(i,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,i),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-e,h=i-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(t,i){var e=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=e?t:-t,i=n?i:-i,"translate3d("+t+"px, "+i+"px, 0)"},u.goTo=function(t,i){this.setPosition(t,i),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,i){this.position.x=parseInt(t,10),this.position.y=parseInt(i,10)},u._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var i in t.onTransitionEnd)t.onTransitionEnd[i].call(this)},u.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var i=this._transn;for(var e in t.onTransitionEnd)i.onEnd[e]=t.onTransitionEnd[e];for(e in t.to)i.ingProperties[e]=!0,t.isCleaning&&(i.clean[e]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var c="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(s);u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:c,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var d={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var i=this._transn,n=d[t.propertyName]||t.propertyName;delete i.ingProperties[n],e(i.ingProperties)&&this.disableTransition(),n in i.clean&&(this.element.style[t.propertyName]="",delete i.clean[n]),n in i.onEnd&&(i.onEnd[n].call(this),delete i.onEnd[n]),this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var i={};for(var e in t)i[e]="";this.css(i)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(l)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){if(!r||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();this.once("transitionEnd",function(){this.removeElem()}),this.hide()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,i={};i[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:i})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var i=this.layout.options[t];if(i.opacity)return"opacity";for(var e in i)return e},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,i={};i[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:i})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n})},function(t,i,e){var n,o;!function(r,s){"use strict";n=[e(0),e(1),e(6),e(9)],void 0!==(o=function(t,i,e,n){return s(r,t,i,e,n)}.apply(i,n))&&(t.exports=o)}(window,function(t,i,e,n,o){"use strict";function r(t,i){var e=n.getQueryElement(t);if(!e)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(e||t)));this.element=e,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(i);var o=++d;this.element.outlayerGUID=o,l[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}function s(t){function i(){t.apply(this,arguments)}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i}function a(t){if("number"==typeof t)return t;var i=t.match(/(^\d*\.?\d*)(\w*)/),e=i&&i[1],n=i&&i[2];return e.length?(e=parseFloat(e))*(p[n]||1):0}var h=t.console,u=t.jQuery,c=function(){},d=0,l={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,i.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var i=this.constructor.compatOptions[t];return i&&void 0!==this.options[i]?this.options[i]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var i=this._filterFindItemElements(t),e=this.constructor.Item,n=[],o=0;o<i.length;o++){var r=i[o],s=new e(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),i=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,i),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=e(this.element)},f._getMeasurement=function(t,i){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?e(n)[i]:o):this[t]=0},f.layoutItems=function(t,i){t=this._getItemsForLayout(t),this._layoutItems(t,i),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,i){if(this._emitCompleteOnItems("layout",t),t&&t.length){var e=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=i||t.isLayoutInstant,e.push(n)},this),this._processLayoutQueue(e)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,i){this._positionItem(t.item,t.x,t.y,t.isInstant,i)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,i,e,n,o){n?t.goTo(i,e):(t.stagger(o*this.stagger),t.moveTo(i,e))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},f._getContainerSize=c,f._setContainerMeasure=function(t,i){if(void 0!==t){var e=this.size;e.isBorderBox&&(t+=i?e.paddingLeft+e.paddingRight+e.borderLeftWidth+e.borderRightWidth:e.paddingBottom+e.paddingTop+e.borderTopWidth+e.borderBottomWidth),t=Math.max(t,0),this.element.style[i?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,i){function e(){o.dispatchEvent(t+"Complete",null,[i])}function n(){++s==r&&e()}var o=this,r=i.length;if(!i||!r)return void e();var s=0;i.forEach(function(i){i.once(t,n)})},f.dispatchEvent=function(t,i,e){var n=i?[i].concat(e):e;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),i){var o=u.Event(i);o.type=t,this.$element.trigger(o,e)}else this.$element.trigger(t,e)},f.ignore=function(t){var i=this.getItem(t);i&&(i.isIgnored=!0)},f.unignore=function(t){var i=this.getItem(t);i&&delete i.isIgnored},f.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),i=this.size;this._boundingRect={left:t.left+i.paddingLeft+i.borderLeftWidth,top:t.top+i.paddingTop+i.borderTopWidth,right:t.right-(i.paddingRight+i.borderRightWidth),bottom:t.bottom-(i.paddingBottom+i.borderBottomWidth)}},f._manageStamp=c,f._getElementOffset=function(t){var i=t.getBoundingClientRect(),n=this._boundingRect,o=e(t);return{left:i.left-n.left-o.marginLeft,top:i.top-n.top-o.marginTop,right:n.right-i.right-o.marginRight,bottom:n.bottom-i.bottom-o.marginBottom}},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=e(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var i=this._itemize(t);return i.length&&(this.items=this.items.concat(i)),i},f.appended=function(t){var i=this.addItems(t);i.length&&(this.layoutItems(i,!0),this.reveal(i))},f.prepended=function(t){var i=this._itemize(t);if(i.length){var e=this.items.slice(0);this.items=i.concat(e),this._resetLayout(),this._manageStamps(),this.layoutItems(i,!0),this.reveal(i),this.layoutItems(e)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i),t.hide()})}},f.revealItemElements=function(t){var i=this.getItems(t);this.reveal(i)},f.hideItemElements=function(t){var i=this.getItems(t);this.hide(i)},f.getItem=function(t){for(var i=0;i<this.items.length;i++){var e=this.items[i];if(e.element==t)return e}},f.getItems=function(t){t=n.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getItem(t);e&&i.push(e)},this),i},f.remove=function(t){var i=this.getItems(t);this._emitCompleteOnItems("remove",i),i&&i.length&&i.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var i=this.element.outlayerGUID;delete l[i],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var i=t&&t.outlayerGUID;return i&&l[i]},r.create=function(t,i){var e=s(r);return e.defaults=n.extend({},r.defaults),n.extend(e.defaults,i),e.compatOptions=n.extend({},r.compatOptions),e.namespace=t,e.data=r.data,e.Item=s(o),n.htmlInit(e,t),u&&u.bridget&&u.bridget(t,e),e};var p={ms:1,s:1e3};return r.Item=o,r})},function(t,i){t.exports=jQuery}]);
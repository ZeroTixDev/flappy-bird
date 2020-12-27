(()=>{"use strict";var t={426:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(645),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\toverflow:none;\r\n}\r\ncanvas {\r\n\tbackground:black;\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n}",""]);const s=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(r[a]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);n&&r[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},654:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var n=i(379),r=i.n(n),s=i(426);r()(s.Z,{insert:"head",singleton:!1});const a=s.Z.locals||{}},379:(t,e,i)=>{var n,r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),s=[];function a(t){for(var e=-1,i=0;i<s.length;i++)if(s[i].identifier===t){e=i;break}return e}function o(t,e){for(var i={},n=[],r=0;r<t.length;r++){var o=t[r],h=e.base?o[0]+e.base:o[0],c=i[h]||0,d="".concat(h," ").concat(c);i[h]=c+1;var l=a(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(s[l].references++,s[l].updater(u)):s.push({identifier:d,updater:v(u,e),references:1}),n.push(d)}return n}function h(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function u(t,e,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,f=0;function v(t,e){var i,n,r;if(e.singleton){var s=f++;i=p||(p=h(e)),n=l.bind(null,i,s,!1),r=l.bind(null,i,s,!0)}else i=h(e),n=u.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=o(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=a(i[n]);s[r].references--}for(var h=o(t,e),c=0;c<i.length;c++){var d=a(i[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=h}}}},987:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"images/718e72e7d1da2e3163047d817bac334e-bird.png"},304:(t,e,i)=>{t.exports=class{constructor(t,e){this.x=t,this.y=e,this.size=50,this.gravity=.5,this.yv=0,this.jumpHeight=10,this.image=new Image,this.image.src=i(987).Z}control(t){"up"===t&&(this.yv=-this.jumpHeight)}die(t){this.y=t-this.size,this.yv=0}update(){this.yv+=this.gravity,this.y+=this.yv}render(t){t.fillStyle="white",t.drawImage(this.image,this.x-this.size/2,this.y-this.size/2,this.size,this.size)}}},417:(t,e,i)=>{const n=i(304),r=i(61);t.exports=class{constructor({updateRate:t=60}){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.resize(),document.body.appendChild(this.canvas),this.bird=new n(this.canvas.width/2,this.canvas.height/2),this.updateRate=t,this.tick=0,this.pipes=[],this.score=0,this.controls={32:"up"}}resize(){this.canvas.height=window.innerHeight,this.canvas.width=window.innerWidth}restart(){this.bird.die(this.canvas.height),this.score=0,this.pipes=[]}start(){this.start=Date.now(),function t(){this.update(),this.render(),requestAnimationFrame(t.bind(this))}.bind(this)(),window.addEventListener("keydown",this.trackKeys.bind(this)),window.addEventListener("keyup",this.trackKeys.bind(this))}trackKeys({keyCode:t,type:e,repeat:i}){i||void 0!==this.controls[t]&&"keydown"===e&&this.bird.control(this.controls[t])}update(){const t=Math.ceil((Date.now()-this.start)*(this.updateRate/1e3));for(;this.tick<t;){this.tick%45==0&&this.pipes.push(r.create(2*this.canvas.width,this.canvas.height));for(let t=this.pipes.length-1;t>=0;t--){const e=this.pipes[t];if(e.update(this.bird)){this.restart();break}this.bird.x+this.bird.size>e.x&&!e.counted&&(this.score++,e.counted=!0),e.x<0&&this.pipes.splice(t,1)}this.bird.update(),this.bird.y+this.bird.size/2>this.canvas.height&&(this.bird.y=this.canvas.height-this.bird.size/2),this.bird.y-this.bird.size/2<0&&(this.bird.y=this.bird.size/2),this.tick++}}render(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.bird.render(this.ctx);for(const t of this.pipes)t.render(this.ctx);this.ctx.fillStyle="white",this.ctx.font="70px Arial",this.ctx.fillText(this.score,this.canvas.width/2,50)}}},61:t=>{t.exports=class t{constructor(t,e,i,n){this.x=t,this.y=e,this.height=i,this.width=n,this.vel=10,this.counted=!1}render(t){t.fillStyle="gray",t.fillRect(this.x,this.y,this.width,this.height)}collide(t){return t.x+t.size>this.x&&t.x<this.x+this.width&&t.y+t.size>this.y&&t.y<this.y+this.height}update(t){return this.x-=this.vel,this.collide(t)}static create(e,i){if(Math.random()>.5)return new t(e,0,Math.random()*(i-200),20);{const n=Math.random()*(i-200);return new t(e,i-n,n,20)}}}}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{i(654);const t=new(i(417))({updateRate:60});t.start(),window.addEventListener("resize",t.resize)})()})();
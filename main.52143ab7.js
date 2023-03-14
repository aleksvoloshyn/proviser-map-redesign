parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wWBc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logger=void 0;var e=function(e){console.log("hello ".concat(e))};exports.logger=e;
},{}],"xvWX":[function(require,module,exports) {
"use strict";function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.southAmerica=exports.regions=exports.northAmerica=exports.europe=exports.australia=exports.asia=exports.Region=void 0;var s=r(function e(r,s,i,a,n,p){t(this,e),o(this,"region",void 0),o(this,"people",0),o(this,"devices",0),o(this,"mainServer",""),o(this,"reserveServer",""),o(this,"peopleClass",""),o(this,"setDeviceQuantity",function(e){this.devices=e}),this.region=r,this.people=s,this.devices=i,this.mainServer=a,this.reserveServer=n,this.peopleClass=this.peopleClass});exports.Region=s;var i=new s("europe",0,0,"de","us_e","people-block__de");exports.europe=i;var a=new s("asia",0,0,"sg","de","people - block__asia");exports.asia=a;var n=new s("australia",0,0,"sg","de","people - block__au");exports.australia=n;var p=new s("southAmerica",0,0,"us_e","us_w","people - block__sAm");exports.southAmerica=p;var l=new s("northAmerica",0,0,"us_w","us_e","people - block__nAm");exports.northAmerica=l;var u=[i,a,n,l,p];exports.regions=u;
},{}],"Ky9y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.peopleIconToggle=void 0;var e=require("./regionClass"),i=function(e){e.classList.contains("people-laptop")&&(e.classList.add("hide"),e.parentNode.children[1].classList.remove("hide")),e.classList.contains("people-phone")&&(e.classList.add("hide"),e.parentNode.children[3].classList.remove("hide"),e.parentNode.children[1].classList.remove("hide"),e.parentNode.children[0].classList.add("hide")),e.classList.contains("people-display")&&(e.classList.add("hide"),e.parentNode.children[0].classList.add("hide"),e.parentNode.children[1].classList.remove("hide"),e.parentNode.children[2].classList.add("hide"),e.parentNode.children[3].classList.remove("hide"),e.parentNode.children[4].classList.add("hide"),e.parentNode.children[5].classList.remove("hide"))},t=function(e){e.classList.contains("people-laptop-active")&&(e.classList.add("hide"),e.parentNode.children[0].classList.remove("hide")),e.classList.contains("people-phone-active")&&(e.classList.add("hide"),e.parentNode.children[2].classList.remove("hide"),e.parentNode.children[1].classList.add("hide"),e.parentNode.children[0].classList.remove("hide")),e.classList.contains("people-display-active")&&(e.classList.add("hide"),e.parentNode.children[4].classList.remove("hide"),e.parentNode.children[3].classList.add("hide"),e.parentNode.children[2].classList.remove("hide"),e.parentNode.children[1].classList.add("hide"),e.parentNode.children[0].classList.remove("hide"))},s=function(i,t){t.classList.contains("people-laptop-active")&&t.parentNode.dataset.region===i&&("europe"===i&&(e.europe.setDeviceQuantity(1),t.parentNode.nextElementSibling.children[0].classList.remove("hide")),"asia"===i&&(e.asia.setDeviceQuantity(1),t.parentNode.nextElementSibling.children[0].classList.remove("hide")),"northAmerica"===i&&(e.northAmerica.setDeviceQuantity(1),t.parentNode.nextElementSibling.children[0].classList.remove("hide")),"southAmerica"===i&&(e.southAmerica.setDeviceQuantity(1),t.parentNode.nextElementSibling.children[0].classList.remove("hide")),"australia"===i&&(e.australia.setDeviceQuantity(1),t.parentNode.nextElementSibling.children[0].classList.remove("hide")),t.parentNode.classList.add("hide")),t.classList.contains("people-phone-active")&&t.parentNode.dataset.region===i&&("europe"===i&&(e.europe.setDeviceQuantity(2),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide")),"asia"===i&&(e.asia.setDeviceQuantity(2),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide")),"northAmerica"===i&&(e.northAmerica.setDeviceQuantity(2),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide")),"southAmerica"===i&&(e.southAmerica.setDeviceQuantity(2),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide")),"australia"===i&&(e.australia.setDeviceQuantity(2),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide")),t.parentNode.classList.add("hide")),t.classList.contains("people-display-active")&&t.parentNode.dataset.region===i&&("europe"===i&&(e.europe.setDeviceQuantity(3),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide"),t.parentNode.nextElementSibling.children[2].classList.remove("hide")),"asia"===i&&(e.asia.setDeviceQuantity(3),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide"),t.parentNode.nextElementSibling.children[2].classList.remove("hide")),"northAmerica"===i&&(e.northAmerica.setDeviceQuantity(3),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide"),t.parentNode.nextElementSibling.children[2].classList.remove("hide")),"southAmerica"===i&&(e.southAmerica.setDeviceQuantity(3),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide"),t.parentNode.nextElementSibling.children[2].classList.remove("hide")),"australia"===i&&(e.australia.setDeviceQuantity(3),t.parentNode.nextElementSibling.children[0].classList.remove("hide"),t.parentNode.nextElementSibling.children[1].classList.remove("hide"),t.parentNode.nextElementSibling.children[2].classList.remove("hide")),t.parentNode.classList.add("hide"))},n=function(){document.querySelectorAll(".people").forEach(function(n){n.addEventListener("mouseover",function(e){i(n,e.target.classList[1])}),n.addEventListener("mouseout",function(e){t(n,e.target.classList[1])}),n.addEventListener("click",function(){s("europe",n),s("asia",n),s("northAmerica",n),s("southAmerica",n),s("australia",n),console.log(e.regions)})})};exports.peopleIconToggle=n;
},{"./regionClass":"xvWX"}],"YLGs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showClouds=exports.onShowCloudHandler=exports.onMouseOverHandler=exports.onMouseOutHandler=exports.cloud=void 0;var e=document.querySelectorAll(".cloud__image");exports.cloud=e;var o=document.querySelector(".showClouds");exports.showClouds=o;var r=function(e){e.forEach(function(e){e.classList.remove("hide")})};exports.onShowCloudHandler=r;var t=function(e,o){e.setAttribute("src",o)};exports.onMouseOverHandler=t;var s=function(e,o){e.setAttribute("src",o)};exports.onMouseOutHandler=s;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./test"),o=require("./regionClass"),n=require("./peopleHandler"),u=require("./clouds");(0,n.peopleIconToggle)(),u.showClouds.addEventListener("click",function(){(0,u.onShowCloudHandler)(u.cloud)}),u.cloud.forEach(function(e){e.addEventListener("mouseover",function(){(0,u.onMouseOverHandler)(e,"/images/Cloud_active.png")}),e.addEventListener("mouseout",function(){(0,u.onMouseOutHandler)(e,"./images/Cloud_2.png")})});
},{"./test":"wWBc","./regionClass":"xvWX","./peopleHandler":"Ky9y","./clouds":"YLGs"}]},{},["d6sW"], null)
//# sourceMappingURL=/proviser-map-redesign/main.52143ab7.js.map
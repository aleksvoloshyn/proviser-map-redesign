// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/test.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var logger = function logger(name) {
  console.log("hello ".concat(name));
};

exports.logger = logger;
},{}],"js/regionClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.southAmerica = exports.regions = exports.northAmerica = exports.europe = exports.australia = exports.asia = exports.Region = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Region = /*#__PURE__*/_createClass(function Region(region, people, devices, mainServer, reserveServer, peopleClass) {
  _classCallCheck(this, Region);

  _defineProperty(this, "region", void 0);

  _defineProperty(this, "people", 0);

  _defineProperty(this, "devices", 0);

  _defineProperty(this, "mainServer", '');

  _defineProperty(this, "reserveServer", '');

  _defineProperty(this, "peopleClass", '');

  _defineProperty(this, "setDeviceQuantity", function (q) {
    this.devices = q;
  });

  this.region = region;
  this.people = people;
  this.devices = devices;
  this.mainServer = mainServer;
  this.reserveServer = reserveServer;
  this.peopleClass = this.peopleClass;
});

exports.Region = Region;
var europe = new Region('europe', 0, 0, 'de', 'us_e', 'people-block__de');
exports.europe = europe;
var asia = new Region('asia', 0, 0, 'sg', 'de', 'people - block__asia');
exports.asia = asia;
var australia = new Region('australia', 0, 0, 'sg', 'de', 'people - block__au');
exports.australia = australia;
var southAmerica = new Region('southAmerica', 0, 0, 'us_e', 'us_w', 'people - block__sAm');
exports.southAmerica = southAmerica;
var northAmerica = new Region('northAmerica', 0, 0, 'us_w', 'us_e', 'people - block__nAm');
exports.northAmerica = northAmerica;
var regions = [europe, asia, australia, northAmerica, southAmerica];
exports.regions = regions;
},{}],"js/peopleHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peopleIconToggle = void 0;

var _regionClass = require("./regionClass");

var mouseOnPeopleHandler = function mouseOnPeopleHandler(item) {
  if (item.classList.contains("people-laptop")) {
    item.classList.add('hide');
    item.parentNode.children[1].classList.remove('hide');
  }

  if (item.classList.contains("people-phone")) {
    item.classList.add('hide');
    item.parentNode.children[3].classList.remove('hide');
    item.parentNode.children[1].classList.remove('hide');
    item.parentNode.children[0].classList.add('hide');
  }

  if (item.classList.contains("people-display")) {
    item.classList.add('hide');
    item.parentNode.children[0].classList.add('hide');
    item.parentNode.children[1].classList.remove('hide');
    item.parentNode.children[2].classList.add('hide');
    item.parentNode.children[3].classList.remove('hide');
    item.parentNode.children[4].classList.add('hide');
    item.parentNode.children[5].classList.remove('hide');
  }
};

var mouseOutPeopleHandler = function mouseOutPeopleHandler(item) {
  if (item.classList.contains('people-laptop-active')) {
    item.classList.add('hide');
    item.parentNode.children[0].classList.remove('hide');
  }

  if (item.classList.contains("people-phone-active")) {
    item.classList.add('hide');
    item.parentNode.children[2].classList.remove('hide');
    item.parentNode.children[1].classList.add('hide');
    item.parentNode.children[0].classList.remove('hide');
  }

  if (item.classList.contains("people-display-active")) {
    item.classList.add('hide');
    item.parentNode.children[4].classList.remove('hide');
    item.parentNode.children[3].classList.add('hide');
    item.parentNode.children[2].classList.remove('hide');
    item.parentNode.children[1].classList.add('hide');
    item.parentNode.children[0].classList.remove('hide');
  }
};

var onUserClickButtonHandler = function onUserClickButtonHandler(reg, item) {
  if (item.classList.contains('people-laptop-active') && item.parentNode.dataset.region === reg) {
    if (reg === 'europe') {
      _regionClass.europe.setDeviceQuantity(1);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
    }

    if (reg === 'asia') {
      _regionClass.asia.setDeviceQuantity(1);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
    }

    if (reg === 'northAmerica') {
      _regionClass.northAmerica.setDeviceQuantity(1);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
    }

    if (reg === 'southAmerica') {
      _regionClass.southAmerica.setDeviceQuantity(1);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
    }

    if (reg === 'australia') {
      _regionClass.australia.setDeviceQuantity(1);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
    }

    item.parentNode.classList.add('hide');
  }

  if (item.classList.contains('people-phone-active') && item.parentNode.dataset.region === reg) {
    if (reg === 'europe') {
      _regionClass.europe.setDeviceQuantity(2);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
    }

    if (reg === 'asia') {
      _regionClass.asia.setDeviceQuantity(2);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
    }

    if (reg === 'northAmerica') {
      _regionClass.northAmerica.setDeviceQuantity(2);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
    }

    if (reg === 'southAmerica') {
      _regionClass.southAmerica.setDeviceQuantity(2);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
    }

    if (reg === 'australia') {
      _regionClass.australia.setDeviceQuantity(2);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
    }

    item.parentNode.classList.add('hide');
  }

  if (item.classList.contains('people-display-active') && item.parentNode.dataset.region === reg) {
    if (reg === 'europe') {
      _regionClass.europe.setDeviceQuantity(3);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
      item.parentNode.nextElementSibling.children[2].classList.remove('hide');
    }

    if (reg === 'asia') {
      _regionClass.asia.setDeviceQuantity(3);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
      item.parentNode.nextElementSibling.children[2].classList.remove('hide');
    }

    if (reg === 'northAmerica') {
      _regionClass.northAmerica.setDeviceQuantity(3);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
      item.parentNode.nextElementSibling.children[2].classList.remove('hide');
    }

    if (reg === 'southAmerica') {
      _regionClass.southAmerica.setDeviceQuantity(3);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
      item.parentNode.nextElementSibling.children[2].classList.remove('hide');
    }

    if (reg === 'australia') {
      _regionClass.australia.setDeviceQuantity(3);

      item.parentNode.nextElementSibling.children[0].classList.remove('hide');
      item.parentNode.nextElementSibling.children[1].classList.remove('hide');
      item.parentNode.nextElementSibling.children[2].classList.remove('hide');
    }

    item.parentNode.classList.add('hide');
  }
};

var peopleIconToggle = function peopleIconToggle() {
  document.querySelectorAll('.people').forEach(function (item) {
    item.addEventListener('mouseover', function (e) {
      mouseOnPeopleHandler(item, e.target.classList[1]);
    });
    item.addEventListener('mouseout', function (e) {
      mouseOutPeopleHandler(item, e.target.classList[1]);
    });
    item.addEventListener('click', function () {
      onUserClickButtonHandler('europe', item);
      onUserClickButtonHandler('asia', item);
      onUserClickButtonHandler('northAmerica', item);
      onUserClickButtonHandler('southAmerica', item);
      onUserClickButtonHandler('australia', item);
      console.log(_regionClass.regions);
    });
  });
};

exports.peopleIconToggle = peopleIconToggle;
},{"./regionClass":"js/regionClass.js"}],"js/clouds.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showClouds = exports.onShowCloudHandler = exports.onMouseOverHandler = exports.onMouseOutHandler = exports.cloud = void 0;
var cloud = document.querySelectorAll('.cloud__image');
exports.cloud = cloud;
var showClouds = document.querySelector('.showClouds');
exports.showClouds = showClouds;

var onShowCloudHandler = function onShowCloudHandler(el) {
  el.forEach(function (el) {
    el.classList.remove('hide');
  });
};

exports.onShowCloudHandler = onShowCloudHandler;

var onMouseOverHandler = function onMouseOverHandler(el, src) {
  el.setAttribute('src', src);
};

exports.onMouseOverHandler = onMouseOverHandler;

var onMouseOutHandler = function onMouseOutHandler(el, src) {
  el.setAttribute('src', src);
};

exports.onMouseOutHandler = onMouseOutHandler;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _test = require("./test");

var _regionClass = require("./regionClass");

var _peopleHandler = require("./peopleHandler");

var _clouds = require("./clouds");

// import _ from 'lodash'
// console.log(_.concat([10, 20, 30], [50]))
(0, _peopleHandler.peopleIconToggle)();

_clouds.showClouds.addEventListener('click', function () {
  (0, _clouds.onShowCloudHandler)(_clouds.cloud);
});

_clouds.cloud.forEach(function (el) {
  el.addEventListener('mouseover', function () {
    (0, _clouds.onMouseOverHandler)(el, '/Cloud_active.png');
  });
  el.addEventListener('mouseout', function () {
    (0, _clouds.onMouseOutHandler)(el, '/Cloud_2.png');
  });
});
},{"./test":"js/test.js","./regionClass":"js/regionClass.js","./peopleHandler":"js/peopleHandler.js","./clouds":"js/clouds.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55911" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
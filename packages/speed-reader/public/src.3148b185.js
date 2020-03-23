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
})({"T0VR":[function(require,module,exports) {

},{}],"YOw+":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"pyFg":[function(require,module,exports) {
/** @license React v16.9.0-alpha.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var h = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    aa = n ? Symbol.for("react.suspense") : 60113,
    ba = n ? Symbol.for("react.memo") : 60115,
    ca = n ? Symbol.for("react.lazy") : 60116,
    z = "function" === typeof Symbol && Symbol.iterator;

function A(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return Error("Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ");
}

var B = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    C = {};

function D(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = c || B;
}

D.prototype.isReactComponent = {};

D.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw A(85);
  this.updater.enqueueSetState(this, a, b, "setState");
};

D.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function E() {}

E.prototype = D.prototype;

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = c || B;
}

var G = F.prototype = new E();
G.constructor = F;
h(G, D.prototype);
G.isPureReactComponent = !0;
var H = {
  current: null
},
    I = {
  current: null
},
    J = Object.prototype.hasOwnProperty,
    K = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function L(a, b, c) {
  var d = void 0,
      e = {},
      g = null,
      k = null;
  if (null != b) for (d in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) J.call(b, d) && !K.hasOwnProperty(d) && (e[d] = b[d]);
  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (d in f = a.defaultProps, f) void 0 === e[d] && (e[d] = f[d]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: e,
    _owner: I.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function M(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var N = /\/+/g,
    O = [];

function P(a, b, c, d) {
  if (O.length) {
    var e = O.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = c;
    e.context = d;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: d,
    count: 0
  };
}

function Q(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > O.length && O.push(a);
}

function R(a, b, c, d) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(d, a, "" === b ? "." + S(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    e = a[k];
    var f = b + S(e, k);
    g += R(e, f, c, d);
  } else if (null === a || "object" !== typeof a ? f = null : (f = z && a[z] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(e = a.next()).done;) e = e.value, f = b + S(e, k++), g += R(e, f, c, d);else if ("object" === e) throw c = "" + a, A(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, "");
  return g;
}

function T(a, b, c) {
  return null == a ? 0 : R(a, "", b, c);
}

function S(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, c) {
  var d = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? U(a, d, c, function (a) {
    return a;
  }) : null != a && (M(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(N, "$&/") + "/") + c)), d.push(a));
}

function U(a, b, c, d, e) {
  var g = "";
  null != c && (g = ("" + c).replace(N, "$&/") + "/");
  b = P(b, g, d, e);
  T(a, fa, b);
  Q(b);
}

function V() {
  var a = H.current;
  if (null === a) throw A(321);
  return a;
}

function W() {}

var X = {
  Children: {
    map: function (a, b, c) {
      if (null == a) return a;
      var d = [];
      U(a, d, null, b, c);
      return d;
    },
    forEach: function (a, b, c) {
      if (null == a) return a;
      b = P(null, null, b, c);
      T(a, ea, b);
      Q(b);
    },
    count: function (a) {
      return T(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      U(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      if (!M(a)) throw A(143);
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: D,
  PureComponent: F,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ca,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: ba,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  error: W,
  warn: W,
  useCallback: function (a, b) {
    return V().useCallback(a, b);
  },
  useContext: function (a, b) {
    return V().useContext(a, b);
  },
  useEffect: function (a, b) {
    return V().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, c) {
    return V().useImperativeHandle(a, b, c);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return V().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return V().useMemo(a, b);
  },
  useReducer: function (a, b, c) {
    return V().useReducer(a, b, c);
  },
  useRef: function (a) {
    return V().useRef(a);
  },
  useState: function (a) {
    return V().useState(a);
  },
  Fragment: r,
  Profiler: u,
  StrictMode: t,
  Suspense: aa,
  createElement: L,
  cloneElement: function (a, b, c) {
    if (null === a || void 0 === a) throw A(267, a);
    var d = void 0,
        e = h({}, a.props),
        g = a.key,
        k = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (k = b.ref, f = I.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (d in b) J.call(b, d) && !K.hasOwnProperty(d) && (e[d] = void 0 === b[d] && void 0 !== l ? l[d] : b[d]);
    }

    d = arguments.length - 2;
    if (1 === d) e.children = c;else if (1 < d) {
      l = Array(d);

      for (var m = 0; m < d; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: k,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = L.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: M,
  version: "16.9.0-alpha.0",
  unstable_ConcurrentMode: x,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: H,
    ReactCurrentOwner: I,
    ReactShouldWarnActingUpdates: {
      current: !1
    },
    assign: h
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"YOw+"}],"HdMw":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"pyFg"}],"5x9c":[function(require,module,exports) {
/** @license React v0.14.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,f=void 0,g=void 0;exports.unstable_now=void 0;var k=Date,m="function"===typeof setTimeout?setTimeout:void 0,n="function"===typeof clearTimeout?clearTimeout:void 0,p="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,q="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,r=void 0,t=void 0;function u(a){r=p(function(b){n(t);a(b)});t=m(function(){q(r);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var v=performance;exports.unstable_now=function(){return v.now()}}else exports.unstable_now=function(){return k.now()};
if("undefined"===typeof window||"function"!==typeof MessageChannel){var w=null,x=function(a){if(null!==w)try{w(a)}finally{w=null}};d=function(a){null!==w?setTimeout(d,0,a):(w=a,setTimeout(x,0,!1))};f=function(){w=null};g=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof p&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof q&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
var y=null,z=!1,A=-1,B=!1,C=!1,D=0,E=33,F=33;g=function(){return D<=exports.unstable_now()};var G=new MessageChannel,H=G.port2;G.port1.onmessage=function(){z=!1;var a=y,b=A;y=null;A=-1;var c=exports.unstable_now(),e=!1;if(0>=D-c)if(-1!==b&&b<=c)e=!0;else{B||(B=!0,u(I));y=a;A=b;return}if(null!==a){C=!0;try{a(e)}finally{C=!1}}};var I=function(a){if(null!==y){u(I);var b=a-D+F;b<F&&E<F?(8>b&&(b=8),F=b<E?E:b):E=b;D=a+F;z||(z=!0,H.postMessage(void 0))}else B=!1};d=function(a,b){y=a;A=b;C||0>b?H.postMessage(void 0):
B||(B=!0,u(I))};f=function(){y=null;z=!1;A=-1}}var J=null,K=!1,L=3,M=-1,N=-1,O=!1,P=!1;function Q(){if(!O&&null!==J){var a=J.expirationTime;P?f():P=!0;d(R,a)}}
function S(){var a=J,b=J.next;if(J===b)J=null;else{var c=J.previous;J=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=L,l=N;L=a;N=b;try{var h=c(K||1===a)}catch(T){throw T;}finally{L=e,N=l}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===J)J=h.next=h.previous=h;else{c=null;a=J;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==J);null===c?c=J:c===J&&(J=h,Q());b=c.previous;b.next=c.previous=
h;h.next=c;h.previous=b}}function R(a){P=!1;O=!0;var b=K;K=a;try{if(a)for(;null!==J;){var c=exports.unstable_now();if(J.expirationTime<=c){do S();while(null!==J&&J.expirationTime<=c)}else break}else if(null!==J){do S();while(null!==J&&!g())}}finally{O=!1,K=b,Q()}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=L,e=M;L=a;M=exports.unstable_now();try{return b()}catch(l){throw Q(),l;}finally{L=c,M=e}};exports.unstable_next=function(a){switch(L){case 1:case 2:case 3:var b=3;break;default:b=L}var c=L,e=M;L=b;M=exports.unstable_now();try{return a()}catch(l){throw Q(),l;}finally{L=c,M=e}};
exports.unstable_scheduleCallback=function(a,b,c){var e=-1!==M?M:exports.unstable_now();if("object"===typeof c&&null!==c&&"number"===typeof c.timeout)c=e+c.timeout;else switch(a){case 1:c=e+-1;break;case 2:c=e+250;break;case 5:c=e+1073741823;break;case 4:c=e+1E4;break;default:c=e+5E3}a={callback:b,priorityLevel:a,expirationTime:c,next:null,previous:null};if(null===J)J=a.next=a.previous=a,Q();else{b=null;e=J;do{if(e.expirationTime>c){b=e;break}e=e.next}while(e!==J);null===b?b=J:b===J&&(J=a,Q());c=
b.previous;c.next=b.previous=a;a.next=b;a.previous=c}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)J=null;else{a===J&&(J=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=L;return function(){var c=L,e=M;L=b;M=exports.unstable_now();try{return a.apply(this,arguments)}catch(l){throw Q(),l;}finally{L=c,M=e}}};exports.unstable_getCurrentPriorityLevel=function(){return L};
exports.unstable_shouldYield=function(){return!K&&(null!==J&&J.expirationTime<N||g())};exports.unstable_continueExecution=function(){null!==J&&Q()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return J};

},{}],"IGIl":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"5x9c"}],"jF7N":[function(require,module,exports) {
/** @license React v16.9.0-alpha.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),ba=require("scheduler");function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return Error("Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ")}if(!aa)throw q(227);var ca=null,da={};
function ea(){if(ca)for(var a in da){var b=da[a],c=ca.indexOf(a);if(!(-1<c))throw q(96,a);if(!fa[c]){if(!b.extractEvents)throw q(97,a);fa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ha.hasOwnProperty(h))throw q(99,h);ha[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&ia(l[e],g,h);e=!0}else f.registrationName?(ia(f.registrationName,g,h),e=!0):e=!1;if(!e)throw q(98,d,a);}}}}
function ia(a,b,c){if(ja[a])throw q(100,a);ja[a]=b;ka[a]=b.eventTypes[c].dependencies}var fa=[],ha={},ja={},ka={};function la(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}var ma=!1,na=null,oa=!1,qa=null,ra={onError:function(a){ma=!0;na=a}};function sa(a,b,c,d,e,f,g,h,l){ma=!1;na=null;la.apply(ra,arguments)}function ta(a,b,c,d,e,f,g,h,l){sa.apply(this,arguments);if(ma){if(ma){var k=na;ma=!1;na=null}else throw q(198);oa||(oa=!0,qa=k)}}
var ua=null,va=null,wa=null;function xa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=wa(c);ta(d,b,void 0,a);a.currentTarget=null}function ya(a,b){if(null==b)throw q(30);if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;
function Ba(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)xa(a,b[d],c[d]);else b&&xa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a){za(a,Ba);if(Aa)throw q(95);if(oa)throw a=qa,oa=!1,qa=null,a;}}
var Da={injectEventPluginOrder:function(a){if(ca)throw q(101);ca=Array.prototype.slice.call(a);ea()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!da.hasOwnProperty(c)||da[c]!==d){if(da[c])throw q(102,c);da[c]=d;b=!0}}b&&ea()}};
function Ea(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw q(231,b,typeof c);
return c}var Fa=Math.random().toString(36).slice(2),Ga="__reactInternalInstance$"+Fa,Ha="__reactEventHandlers$"+Fa;function Ia(a){if(a[Ga])return a[Ga];for(;!a[Ga];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ga];return 5===a.tag||6===a.tag?a:null}function Ja(a){a=a[Ga];return!a||5!==a.tag&&6!==a.tag?null:a}function Ka(a){if(5===a.tag||6===a.tag)return a.stateNode;throw q(33);}function La(a){return a[Ha]||null}function Ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Na(a,b,c){if(b=Ea(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}function Oa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ma(b);for(b=c.length;0<b--;)Na(c[b],"captured",a);for(b=0;b<c.length;b++)Na(c[b],"bubbled",a)}}
function Pa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ea(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Qa(a){a&&a.dispatchConfig.registrationName&&Pa(a._targetInst,null,a)}function Ra(a){za(a,Oa)}var Sa=!("undefined"===typeof window||!window.document||!window.document.createElement);
function Ta(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ua={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Va={},Wa={};
Sa&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Xa(a){if(Va[a])return Va[a];if(!Ua[a])return a;var b=Ua[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Wa)return Va[a]=b[c];return a}
var Ya=Xa("animationend"),Za=Xa("animationiteration"),$a=Xa("animationstart"),ab=Xa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
function A(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
n(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});A.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
A.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(A);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function kb(a){if(!(a instanceof this))throw q(279);a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=A.extend({data:null}),mb=A.extend({data:null}),nb=[9,13,27,32],ob=Sa&&"CompositionEvent"in window,pb=null;Sa&&"documentMode"in document&&(pb=document.documentMode);
var qb=Sa&&"TextEvent"in window&&!pb,rb=Sa&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function zb(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Ab(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return rb&&"ko"!==b.locale?null:b.data;default:return null}}
var Bb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(rb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Ra(e),f=e):f=null;(a=qb?zb(a,c):Ab(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Ra(b)):b=null;return null===f?b:null===b?f:[f,b]}},Cb=null,Db=null,Eb=null;function Fb(a){if(a=va(a)){if("function"!==typeof Cb)throw q(280);var b=ua(a.stateNode);Cb(a.stateNode,a.type,b)}}function Gb(a){Db?Eb?Eb.push(a):Eb=[a]:Db=a}function Hb(){if(Db){var a=Db,b=Eb;Eb=Db=null;Fb(a);if(b)for(a=0;a<b.length;a++)Fb(b[a])}}
function Ib(a,b){return a(b)}function Jb(a,b,c,d){return a(b,c,d)}function Kb(){}var Lb=!1;function Mb(a,b){if(Lb)return a(b);Lb=!0;try{return Ib(a,b)}finally{if(Lb=!1,null!==Db||null!==Eb)Kb(),Hb()}}var Nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ob(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Nb[a.type]:"textarea"===b?!0:!1}
function Pb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Rb(a){if(!Sa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Tb(a){var b=Sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Ub(a){a._valueTracker||(a._valueTracker=Tb(a))}function Vb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Wb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wb.hasOwnProperty("ReactCurrentDispatcher")||(Wb.ReactCurrentDispatcher={current:null});
var Xb=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,Yb=D?Symbol.for("react.element"):60103,Zb=D?Symbol.for("react.portal"):60106,$b=D?Symbol.for("react.fragment"):60107,ac=D?Symbol.for("react.strict_mode"):60108,bc=D?Symbol.for("react.profiler"):60114,cc=D?Symbol.for("react.provider"):60109,dc=D?Symbol.for("react.context"):60110,ec=D?Symbol.for("react.concurrent_mode"):60111,fc=D?Symbol.for("react.forward_ref"):60112,gc=D?Symbol.for("react.suspense"):60113,hc=D?Symbol.for("react.memo"):
60115,ic=D?Symbol.for("react.lazy"):60116,jc=D?Symbol.for("react.event_component"):60117,kc=D?Symbol.for("react.event_target"):60118,lc=D?Symbol.for("react.event_target.touch_hit"):60119,mc="function"===typeof Symbol&&Symbol.iterator;function nc(a){if(null===a||"object"!==typeof a)return null;a=mc&&a[mc]||a["@@iterator"];return"function"===typeof a?a:null}
function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ec:return"ConcurrentMode";case $b:return"Fragment";case Zb:return"Portal";case bc:return"Profiler";case ac:return"StrictMode";case gc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case dc:return"Context.Consumer";case cc:return"Context.Provider";case fc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case hc:return oc(a.type);case ic:if(a=1===a._status?a._result:null)return oc(a);break;case jc:a=a.displayName;if(void 0!==a)return a;break;case kc:if(a.type===lc)return"TouchHitTarget";a=a.displayName;if(void 0!==a)return a}return null}
function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Xb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null,!1)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
yc);G[b]=new F(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){G[a]=new F(a,1,!1,a.toLowerCase(),null,!1)});
G.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){G[a]=new F(a,1,!1,a.toLowerCase(),null,!0)});
function zc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=A.getPooled(Hc.change,a,b,c);a.type="change";Gb(c);Ra(a);return a}var Jc=null,Kc=null;function Lc(a){Ca(a)}
function Mc(a){var b=Ka(a);if(Vb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Sa&&(Oc=Rb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){"value"===a.propertyName&&Mc(Kc)&&(a=Ic(Kc,a,Pb(a)),Mb(Lc,a))}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}
function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ka(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Nc:Ob(e)?Oc?f=Uc:(f=Sc,g=Rc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=A.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),hd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},id={eventTypes:hd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ia(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=hd.mouseLeave,l=hd.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=ed,h=hd.pointerLeave,l=hd.pointerEnter,k="pointer";var m=null==f?e:Ka(f);e=null==b?e:Ka(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=Ma(g))k++;g=0;for(l=e;l;l=Ma(l))g++;for(;0<k-g;)b=Ma(b),k--;for(;0<g-k;)e=Ma(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=Ma(b);e=Ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=Ma(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=Ma(d)}for(d=0;d<b.length;d++)Pa(b[d],"bubbled",a);for(d=f.length;0<d--;)Pa(f[d],"captured",c);return[a,c]}};function jd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var kd=Object.prototype.hasOwnProperty;
function ld(a,b){if(jd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!kd.call(b,c[d])||!jd(a[c[d]],b[c[d]]))return!1;return!0}var md="function"===typeof WeakSet?WeakSet:Set;new Map;new Map;new Map;new md;
function nd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}
function od(a){var b=a.alternate;if(!b){b=nd(a);if(3===b)throw q(188);return 1===b?null:a}for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(f=e.child;f;){if(f===c){if(2!==nd(e))break;return a}if(f===d){if(2!==nd(e))break;return b}f=f.sibling}throw q(188);}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=
!0;d=f;c=e;break}h=h.sibling}if(!g)throw q(189);}}if(c.alternate!==d)throw q(190);}if(3!==c.tag)throw q(188);return c.stateNode.current===c?a:b}function pd(a){a=od(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var qd=A.extend({animationName:null,elapsedTime:null,pseudoElement:null}),rd=A.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),sd=Wc.extend({relatedTarget:null});function td(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd=Wc.extend({key:function(a){if(a.key){var b=ud[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=td(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?vd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?td(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?td(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),xd=dd.extend({dataTransfer:null}),yd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),zd=A.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ad=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Bd=[["abort","abort"],[Ya,"animationEnd"],[Za,"animationIteration"],[$a,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ab,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Cd={},Dd={};function Ed(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Cd[a]=b;Dd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Ed(a,!0)});Bd.forEach(function(a){Ed(a,!1)});
var Fd={eventTypes:Cd,isInteractiveTopLevelEventType:function(a){a=Dd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Dd[a];if(!e)return null;switch(a){case "keypress":if(0===td(c))return null;case "keydown":case "keyup":a=wd;break;case "blur":case "focus":a=sd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
xd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=yd;break;case Ya:case Za:case $a:a=qd;break;case ab:a=zd;break;case "scroll":a=Wc;break;case "wheel":a=Ad;break;case "copy":case "cut":case "paste":a=rd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=A}b=a.getPooled(e,b,c,d);Ra(b);return b}},Gd=Fd.isInteractiveTopLevelEventType,
Hd=[];function Id(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ia(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];d=a.eventSystemFlags;var e=Pb(a.nativeEvent),f=a.topLevelType,g=a.nativeEvent;if(1===d){d=f;f=null;for(var h=0;h<fa.length;h++){var l=fa[h];l&&(l=l.extractEvents(d,b,g,e))&&(f=ya(f,l))}Ca(f)}}}var Jd=!0;function H(a,b){Kd(b,a,!1)}
function Kd(a,b,c){var d=(Gd(b)?Ld:Md).bind(null,b,1);c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Ld(a,b,c){Jb(Md,a,b,c)}
function Md(a,b,c){if(Jd){var d=Pb(c);d=Ia(d);null===d||"number"!==typeof d.tag||2===nd(d)||(d=null);if(Hd.length){var e=Hd.pop();e.topLevelType=a;e.nativeEvent=c;e.targetInst=d;e.eventSystemFlags=b;a=e}else a={topLevelType:a,nativeEvent:c,targetInst:d,ancestors:[],eventSystemFlags:b};try{Mb(Id,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,a.eventSystemFlags=0,10>Hd.length&&Hd.push(a)}}}var Nd=new ("function"===typeof WeakMap?WeakMap:Map);
function Od(a){var b=Nd.get(a);void 0===b&&(b=new Set,Nd.set(a,b));return b}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Sa&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&ld(Zd,c)?null:(Zd=c,a=A.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ra(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ka.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ka(b):window;switch(a){case "focus":if(Ob(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Da.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=La;va=Ja;wa=Ka;Da.injectEventPluginsByName({SimpleEventPlugin:Fd,EnterLeaveEventPlugin:id,ChangeEventPlugin:Vc,SelectEventPlugin:be,BeforeInputEventPlugin:Bb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){if(null!=b.dangerouslySetInnerHTML)throw q(91);return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw q(92);if(Array.isArray(b)){if(!(1>=b.length))throw q(93);b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
function he(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});function re(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pe.hasOwnProperty(a)&&pe[a]?(""+b).trim():b+"px"}
function se(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=re(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var te=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ue(a,b){if(b){if(te[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw q(137,a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw q(60);if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw q(61);}if(null!=b.style&&"object"!==typeof b.style)throw q(62,"");}}
function ve(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function we(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ka[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Kd(a,"scroll",!0);break;case "focus":case "blur":Kd(a,"focus",!0);Kd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rb(e)&&Kd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&H(e,a)}c.add(e)}}}function xe(){}var ye=null,ze=null;
function Ae(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Be(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Ce="function"===typeof setTimeout?setTimeout:void 0,De="function"===typeof clearTimeout?clearTimeout:void 0;
function Ee(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Fe(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Ge=[],He=-1;function I(a){0>He||(a.current=Ge[He],Ge[He]=null,He--)}function J(a,b){He++;Ge[He]=a.current;a.current=b}var Ie={},K={current:Ie},L={current:!1},Je=Ie;
function Ke(a,b){var c=a.type.contextTypes;if(!c)return Ie;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Le(a){I(L,a);I(K,a)}function Me(a){I(L,a);I(K,a)}
function Ne(a,b,c){if(K.current!==Ie)throw q(168);J(K,b,a);J(L,c,a)}function Oe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw q(108,oc(b)||"Unknown",e);return n({},c,d)}function Pe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Ie;Je=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Qe(a,b,c){var d=a.stateNode;if(!d)throw q(169);c?(b=Oe(a,b,Je),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Re=null,Se=null;function Te(a){return function(b){try{return a(b)}catch(c){}}}
function Ue(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Re=Te(function(a){return b.onCommitFiberRoot(c,a)});Se=Te(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function Ve(a,b,c){c/=10;return 1073741822-(((1073741822-a+b/10)/c|0)+1)*c}
function We(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Xe(a,b,c,d){return new We(a,b,c,d)}
function Ye(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ze(a){if("function"===typeof a)return Ye(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===fc)return 11;if(a===hc)return 14}return 2}
function $e(a,b){var c=a.alternate;null===c?(c=Xe(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function af(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ye(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case $b:return bf(c.children,e,f,b);case ec:return cf(c,e|3,f,b);case ac:return cf(c,e|2,f,b);case bc:return a=Xe(12,c,b,e|4),a.elementType=bc,a.type=bc,a.expirationTime=f,a;case gc:return a=Xe(13,c,b,e),a.elementType=gc,a.type=gc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case cc:g=10;break a;case dc:g=9;break a;case fc:g=11;break a;case hc:g=
14;break a;case ic:g=16;d=null;break a}throw q(130,null==a?a:typeof a,"");}b=Xe(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function bf(a,b,c,d){a=Xe(7,a,d,b);a.expirationTime=c;return a}function cf(a,b,c,d){a=Xe(8,a,d,b);b=0===(b&1)?ac:ec;a.elementType=b;a.type=b;a.expirationTime=c;return a}function df(a,b,c){a=Xe(6,a,null,b);a.expirationTime=c;return a}
function ef(a,b,c){b=Xe(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ff(a,b){this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.pendingCommitExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=b;this.firstBatch=null;this.latestPingedTime=this.latestSuspendedTime=this.earliestSuspendedTime=this.latestPendingTime=this.earliestPendingTime=0;this.didError=!1;this.expirationTime=this.nextExpirationTimeToWorkOn=0;this.nextScheduledRoot=null}
function gf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);hf(b,a)}
function jf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);hf(b,a)}function kf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}
function hf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function N(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function lf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var mf=(new aa.Component).refs;
function nf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var wf={isMounted:function(a){return(a=a._reactInternalFiber)?2===nd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=of();d=pf(d,a);var e=qf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);rf();sf(a,e);tf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=of();d=pf(d,a);var e=qf(d);e.tag=uf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);rf();sf(a,e);tf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=of();c=pf(c,a);var d=qf(c);d.tag=
vf;void 0!==b&&null!==b&&(d.callback=b);rf();sf(a,d);tf(a,c)}};function xf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!ld(c,d)||!ld(e,f):!0}
function yf(a,b,c){var d=!1,e=Ie;var f=b.contextType;"object"===typeof f&&null!==f?f=zf(f):(e=M(b)?Je:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ke(a,e):Ie);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=wf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Af(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&wf.enqueueReplaceState(b,b.state,null)}
function Bf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=mf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=zf(f):(f=M(b)?Je:K.current,e.context=Ke(a,f));f=a.updateQueue;null!==f&&(Cf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(nf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&wf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Cf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Df=Array.isArray;
function Ef(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw q(309);d=c.stateNode}if(!d)throw q(147,a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===mf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw q(284);if(!c._owner)throw q(290,a);}return a}
function Ff(a,b){if("textarea"!==a.type)throw q(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function Gf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=$e(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=df(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Ef(a,b,c),d.return=a,d;d=af(c.type,c.key,c.props,null,a.mode,d);d.ref=Ef(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=ef(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=bf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function w(a,b,c){if("string"===typeof b||"number"===typeof b)return b=df(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Yb:return c=af(b.type,b.key,b.props,null,a.mode,c),c.ref=Ef(a,null,b),c.return=a,c;case Zb:return b=ef(b,a.mode,c),b.return=a,b}if(Df(b)||
nc(b))return b=bf(b,a.mode,c,null),b.return=a,b;Ff(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Yb:return c.key===e?c.type===$b?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Zb:return c.key===e?k(a,b,c,d):null}if(Df(c)||nc(c))return null!==e?null:m(a,b,c,d,null);Ff(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Yb:return a=a.get(null===d.key?c:d.key)||null,d.type===$b?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Zb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(Df(d)||nc(d))return a=a.get(c)||null,m(b,a,d,e,null);Ff(b,d)}return null}function r(e,g,h,l){for(var k=null,p=null,m=g,u=g=0,z=null;null!==m&&u<h.length;u++){m.index>u?(z=m,m=null):z=m.sibling;var t=x(e,m,h[u],l);if(null===t){null===m&&(m=z);break}a&&
m&&null===t.alternate&&b(e,m);g=f(t,g,u);null===p?k=t:p.sibling=t;p=t;m=z}if(u===h.length)return c(e,m),k;if(null===m){for(;u<h.length;u++)if(m=w(e,h[u],l))g=f(m,g,u),null===p?k=m:p.sibling=m,p=m;return k}for(m=d(e,m);u<h.length;u++)if(z=C(m,e,u,h[u],l))a&&null!==z.alternate&&m.delete(null===z.key?u:z.key),g=f(z,g,u),null===p?k=z:p.sibling=z,p=z;a&&m.forEach(function(a){return b(e,a)});return k}function V(e,g,h,l){var k=nc(h);if("function"!==typeof k)throw q(150);h=k.call(h);if(null==h)throw q(151);
for(var m=k=null,p=g,u=g=0,z=null,t=h.next();null!==p&&!t.done;u++,t=h.next()){p.index>u?(z=p,p=null):z=p.sibling;var r=x(e,p,t.value,l);if(null===r){p||(p=z);break}a&&p&&null===r.alternate&&b(e,p);g=f(r,g,u);null===m?k=r:m.sibling=r;m=r;p=z}if(t.done)return c(e,p),k;if(null===p){for(;!t.done;u++,t=h.next())t=w(e,t.value,l),null!==t&&(g=f(t,g,u),null===m?k=t:m.sibling=t,m=t);return k}for(p=d(e,p);!t.done;u++,t=h.next())t=C(p,e,u,t.value,l),null!==t&&(a&&null!==t.alternate&&p.delete(null===t.key?u:
t.key),g=f(t,g,u),null===m?k=t:m.sibling=t,m=t);a&&p.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===$b&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Yb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===$b:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===$b?f.props.children:f.props,h);d.ref=Ef(a,k,f);d.return=a;a=d;break a}c(a,k);break}else b(a,k);k=k.sibling}f.type===
$b?(d=bf(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=af(f.type,f.key,f.props,null,a.mode,h),h.ref=Ef(a,d,f),h.return=a,a=h)}return g(a);case Zb:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=ef(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==
d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=df(f,a.mode,h),d.return=a,a=d),g(a);if(Df(f))return r(a,d,f,h);if(nc(f))return V(a,d,f,h);l&&Ff(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,q(152,a.displayName||a.name||"Component");}return c(a,d)}}var Hf=Gf(!0),If=Gf(!1),Jf={},Kf={current:Jf},Lf={current:Jf},Mf={current:Jf};function Nf(a){if(a===Jf)throw q(174);return a}
function Of(a,b){J(Mf,b,a);J(Lf,a,a);J(Kf,Jf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}I(Kf,a);J(Kf,b,a)}function Pf(a){I(Kf,a);I(Lf,a);I(Mf,a)}function Qf(a){Nf(Mf.current);var b=Nf(Kf.current);var c=le(b,a.type);b!==c&&(J(Lf,a,a),J(Kf,c,a))}function Rf(a){Lf.current===a&&(I(Kf,a),I(Lf,a))}
var Sf=Wb.ReactCurrentDispatcher,Tf=0,Uf=null,O=null,Vf=null,Wf=null,P=null,Xf=null,Yf=0,Zf=null,$f=0,ag=!1,bg=null,cg=0;function dg(){throw q(321);}function eg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!jd(a[c],b[c]))return!1;return!0}
function fg(a,b,c,d,e,f){Tf=f;Uf=b;Vf=null!==a?a.memoizedState:null;Sf.current=null===Vf?gg:hg;b=c(d,e);if(ag){do ag=!1,cg+=1,Vf=null!==a?a.memoizedState:null,Xf=Wf,Zf=P=O=null,Sf.current=hg,b=c(d,e);while(ag);bg=null;cg=0}Sf.current=ig;a=Uf;a.memoizedState=Wf;a.expirationTime=Yf;a.updateQueue=Zf;a.effectTag|=$f;a=null!==O&&null!==O.next;Tf=0;Xf=P=Wf=Vf=O=Uf=null;Yf=0;Zf=null;$f=0;if(a)throw q(300);return b}
function jg(){Sf.current=ig;Tf=0;Xf=P=Wf=Vf=O=Uf=null;Yf=0;Zf=null;$f=0;ag=!1;bg=null;cg=0}function kg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P?Wf=P=a:P=P.next=a;return P}function lg(){if(null!==Xf)P=Xf,Xf=P.next,O=Vf,Vf=null!==O?O.next:null;else{if(null===Vf)throw q(310);O=Vf;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};P=null===P?Wf=a:P.next=a;Vf=O.next}return P}
function mg(a,b){return"function"===typeof b?b(a):b}
function ng(a){var b=lg(),c=b.queue;if(null===c)throw q(311);c.lastRenderedReducer=a;if(0<cg){var d=c.dispatch;if(null!==bg){var e=bg.get(c);if(void 0!==e){bg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);jd(f,b.memoizedState)||(og=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Tf?(k||(k=!0,h=g,e=f),m>Yf&&(Yf=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);jd(f,b.memoizedState)||(og=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function pg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Zf?(Zf={lastEffect:null},Zf.lastEffect=a.next=a):(b=Zf.lastEffect,null===b?Zf.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Zf.lastEffect=a));return a}function qg(a,b,c,d){var e=kg();$f|=a;e.memoizedState=pg(b,c,void 0,void 0===d?null:d)}
function rg(a,b,c,d){var e=lg();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&eg(d,g.deps)){pg(0,c,f,d);return}}$f|=a;e.memoizedState=pg(b,c,f,d)}function sg(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function tg(){}
function ug(a,b,c){if(!(25>cg))throw q(301);var d=a.alternate;if(a===Uf||null!==d&&d===Uf)if(ag=!0,a={expirationTime:Tf,action:c,eagerReducer:null,eagerState:null,next:null},null===bg&&(bg=new Map),c=bg.get(b),void 0===c)bg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{rf();var e=of();e=pf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(jd(k,l))return}catch(m){}finally{}tf(a,e)}}
var ig={readContext:zf,useCallback:dg,useContext:dg,useEffect:dg,useImperativeHandle:dg,useLayoutEffect:dg,useMemo:dg,useReducer:dg,useRef:dg,useState:dg,useDebugValue:dg},gg={readContext:zf,useCallback:function(a,b){kg().memoizedState=[a,void 0===b?null:b];return a},useContext:zf,useEffect:function(a,b){return qg(516,192,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return qg(4,36,sg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return qg(4,36,a,b)},useMemo:function(a,
b){var c=kg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=kg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=ug.bind(null,Uf,a);return[d.memoizedState,a]},useRef:function(a){var b=kg();a={current:a};return b.memoizedState=a},useState:function(a){var b=kg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:mg,
lastRenderedState:a};a=a.dispatch=ug.bind(null,Uf,a);return[b.memoizedState,a]},useDebugValue:tg},hg={readContext:zf,useCallback:function(a,b){var c=lg();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&eg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:zf,useEffect:function(a,b){return rg(516,192,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return rg(4,36,sg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return rg(4,36,a,b)},
useMemo:function(a,b){var c=lg();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&eg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:ng,useRef:function(){return lg().memoizedState},useState:function(a){return ng(mg,a)},useDebugValue:tg},wg=null,xg=null,yg=!1;
function zg(a,b){var c=Xe(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Ag(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Bg(a){if(yg){var b=xg;if(b){var c=b;if(!Ag(a,b)){b=Ee(c);if(!b||!Ag(a,b)){a.effectTag|=2;yg=!1;wg=a;return}zg(wg,c)}wg=a;xg=Fe(b)}else a.effectTag|=2,yg=!1,wg=a}}function Cg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;wg=a}function Dg(a){if(a!==wg)return!1;if(!yg)return Cg(a),yg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Be(b,a.memoizedProps))for(b=xg;b;)zg(a,b),b=Ee(b);Cg(a);xg=wg?Ee(a.stateNode):null;return!0}function Eg(){xg=wg=null;yg=!1}
var Fg=Wb.ReactCurrentOwner,og=!1;function Q(a,b,c,d){b.child=null===a?If(b,null,c,d):Hf(b,a.child,c,d)}function Gg(a,b,c,d,e){c=c.render;var f=b.ref;Hg(b,e);d=fg(a,b,c,d,f,e);if(null!==a&&!og)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Ig(a,b,e);b.effectTag|=1;Q(a,b,d,e);return b.child}
function Jg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ye(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Kg(a,b,g,d,e,f);a=af(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:ld,c(e,d)&&a.ref===b.ref))return Ig(a,b,f);b.effectTag|=1;a=$e(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Kg(a,b,c,d,e,f){return null!==a&&ld(a.memoizedProps,d)&&a.ref===b.ref&&(og=!1,e<f)?Ig(a,b,f):Lg(a,b,c,d,f)}function Mg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Lg(a,b,c,d,e){var f=M(c)?Je:K.current;f=Ke(b,f);Hg(b,e);c=fg(a,b,c,d,f,e);if(null!==a&&!og)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Ig(a,b,e);b.effectTag|=1;Q(a,b,c,e);return b.child}
function Ng(a,b,c,d,e){if(M(c)){var f=!0;Pe(b)}else f=!1;Hg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),yf(b,c,d,e),Bf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=zf(k):(k=M(c)?Je:K.current,k=Ke(b,k));var m=c.getDerivedStateFromProps,w="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;w||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Af(b,g,d,k);Og=!1;var x=b.memoizedState;l=g.state=x;var C=b.updateQueue;null!==C&&(Cf(b,C,d,g,e),l=b.memoizedState);h!==d||x!==l||L.current||Og?("function"===typeof m&&(nf(b,c,m,d),l=b.memoizedState),(h=Og||xf(b,c,h,d,x,l,k))?(w||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:N(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=zf(k):(k=M(c)?Je:K.current,k=Ke(b,k)),m=c.getDerivedStateFromProps,(w="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Af(b,g,d,k),Og=!1,l=b.memoizedState,x=g.state=l,C=b.updateQueue,null!==C&&(Cf(b,C,d,g,e),x=b.memoizedState),h!==d||l!==x||L.current||Og?("function"===typeof m&&(nf(b,c,m,d),x=b.memoizedState),(m=Og||xf(b,c,h,d,l,x,k))?(w||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
x),g.props=d,g.state=x,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Pg(a,b,c,d,f,e)}
function Pg(a,b,c,d,e,f){Mg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Qe(b,c,!1),Ig(a,b,f);d=b.stateNode;Fg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Hf(b,a.child,null,f),b.child=Hf(b,null,h,f)):Q(a,b,h,f);b.memoizedState=d.state;e&&Qe(b,c,!0);return b.child}function Qg(a){var b=a.stateNode;b.pendingContext?Ne(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ne(a,b.context,!1);Of(a,b.containerInfo)}
function Rg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=bf(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=bf(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=If(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=$e(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=$e(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Hf(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=bf(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=bf(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Hf(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Ig(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw q(153);if(null!==b.child){a=b.child;c=$e(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=$e(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Sg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||L.current)og=!0;else{if(d<c){og=!1;switch(b.tag){case 3:Qg(b);Eg();break;case 5:Qf(b);break;case 1:M(b.type)&&Pe(b);break;case 4:Of(b,b.stateNode.containerInfo);break;case 10:Tg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Rg(a,b,c);b=Ig(a,b,c);return null!==b?b.sibling:null}}return Ig(a,b,c)}}else og=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Ke(b,K.current);Hg(b,c);e=fg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;jg();if(M(d)){var f=!0;Pe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&nf(b,d,g,a);e.updater=wf;b.stateNode=e;e._reactInternalFiber=b;Bf(b,d,a,c);b=Pg(null,b,d,!0,f,
c)}else b.tag=0,Q(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=lf(e);b.type=e;f=b.tag=Ze(e);a=N(e,a);switch(f){case 0:b=Lg(null,b,e,a,c);break;case 1:b=Ng(null,b,e,a,c);break;case 11:b=Gg(null,b,e,a,c);break;case 14:b=Jg(null,b,e,N(e.type,a),d,c);break;default:throw q(306,e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:N(d,e),Lg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:N(d,e),Ng(a,b,d,e,c);case 3:Qg(b);d=b.updateQueue;if(null===d)throw q(282);e=b.memoizedState;e=null!==e?e.element:null;Cf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Eg(),b=Ig(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)xg=Fe(b.stateNode.containerInfo),wg=b,e=yg=!0;e?(b.effectTag|=2,b.child=If(b,null,d,c)):(Q(a,b,d,c),Eg());b=b.child}return b;case 5:return Qf(b),null===a&&Bg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,Be(d,e)?g=null:null!==f&&Be(d,f)&&(b.effectTag|=16),Mg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(Q(a,b,g,c),b=b.child),b;case 6:return null===a&&Bg(b),null;case 13:return Rg(a,b,c);case 4:return Of(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Hf(b,null,d,c):Q(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:N(d,e),Gg(a,b,d,e,c);case 7:return Q(a,b,b.pendingProps,c),b.child;case 8:return Q(a,b,b.pendingProps.children,
c),b.child;case 12:return Q(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Tg(b,f);if(null!==g){var h=g.value;f=jd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=Ig(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=qf(c),k.tag=vf,sf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var w=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==w&&w.childExpirationTime<k&&(w.childExpirationTime=k);else if(null!==w&&w.childExpirationTime<k)w.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}Q(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Hg(b,c),e=zf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,Q(a,b,d,c),b.child;case 14:return e=b.type,f=N(e,b.pendingProps),f=N(e.type,f),Jg(a,b,e,f,d,c);case 15:return Kg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=
b.elementType===d?e:N(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=!0,Pe(b)):a=!1,Hg(b,c),yf(b,d,e,c),Bf(b,d,e,c),Pg(null,b,d,!0,a,c)}throw q(156);}var Ug={current:null},Vg=null,Wg=null,Xg=null;function Tg(a,b){var c=a.type._context;J(Ug,c._currentValue,a);c._currentValue=b}function Yg(a){var b=Ug.current;I(Ug,a);a.type._context._currentValue=b}
function Hg(a,b){Vg=a;Xg=Wg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(og=!0);a.contextDependencies=null}function zf(a,b){if(Xg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Xg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Wg){if(null===Vg)throw q(308);Wg=b;Vg.contextDependencies={first:b,expirationTime:0}}else Wg=Wg.next=b}return a._currentValue}var Zg=0,uf=1,vf=2,$g=3,Og=!1;
function ah(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function bh(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function qf(a){return{expirationTime:a,tag:Zg,payload:null,callback:null,next:null,nextEffect:null}}function ch(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=ah(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=ah(a.memoizedState),e=c.updateQueue=ah(c.memoizedState)):d=a.updateQueue=bh(e):null===e&&(e=c.updateQueue=bh(d));null===e||d===e?ch(d,b):null===d.lastUpdate||null===e.lastUpdate?(ch(d,b),ch(e,b)):(ch(d,b),e.lastUpdate=b)}
function dh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=ah(a.memoizedState):eh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function eh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=bh(b));return b}
function fh(a,b,c,d,e,f){switch(c.tag){case uf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case $g:a.effectTag=a.effectTag&-2049|64;case Zg:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case vf:Og=!0}return d}
function Cf(a,b,c,d,e){Og=!1;b=eh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=fh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var w=l.expirationTime;w<e?(null===m&&(m=l,null===g&&(f=k)),h<w&&(h=w)):(k=fh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function gh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);hh(b.firstEffect,c);b.firstEffect=b.lastEffect=null;hh(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function hh(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw q(191,c);c.call(d)}a=a.nextEffect}}
function ih(a,b){return{value:a,source:b,stack:pc(b)}}function jh(a){a.effectTag|=4}var kh=void 0,lh=void 0,mh=void 0,nh=void 0;kh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};lh=function(){};
mh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Nf(Kf.current);a=null;switch(c){case "input":f=Bc(g,f);d=Bc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=xe)}ue(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ja.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ja.hasOwnProperty(c)?(null!=k&&we(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&jh(b)}};nh=function(a,b,c,d){c!==d&&jh(b)};
var oh="function"===typeof WeakSet?WeakSet:Set;function ph(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function qh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){rh(a,c)}else b.current=null}
function sh(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function wh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=re("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function xh(a){"function"===typeof Se&&Se(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){rh(e,f)}}c=c.next}while(c!==b)}break;case 1:qh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){rh(a,f)}break;case 5:qh(a);break;case 4:yh(a)}}
function zh(a){return 5===a.tag||3===a.tag||4===a.tag}
function Ah(a){a:{for(var b=a.return;null!==b;){if(zh(b)){var c=b;break a}b=b.return}throw q(160);}switch(c.tag){case 5:b=c.stateNode;var d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:throw q(161);}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=xe)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){if(null===c)throw q(160);switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(xh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(xh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:sh(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ha]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);ve(a,e);b=ve(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?se(c,h):"dangerouslySetInnerHTML"===g?ne(c,h):"children"===g?oe(c,h):zc(c,g,h,b)}switch(a){case "input":Ec(c,d);break;case "textarea":he(c,
d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw q(162);b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:Ch(b);break;case 17:break;default:throw q(163);}}
function Ch(a){var b=a.memoizedState,c=void 0,d=a;null===b?c=!1:(c=!0,d=a.child,0===b.timedOutAt&&(b.timedOutAt=of()));null!==d&&wh(d,c);b=a.updateQueue;if(null!==b){a.updateQueue=null;var e=a.stateNode;null===e&&(e=a.stateNode=new oh);b.forEach(function(b){var c=Dh.bind(null,a,b);e.has(b)||(e.add(b),b.then(c,c))})}}var Eh="function"===typeof WeakMap?WeakMap:Map;function Fh(a,b,c){c=qf(c);c.tag=$g;c.payload={element:null};var d=b.value;c.callback=function(){Gh(d);ph(a,b)};return c}
function Hh(a,b,c){c=qf(c);c.tag=$g;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ih?Ih=new Set([this]):Ih.add(this));var c=b.value,e=b.stack;ph(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Jh(a){switch(a.tag){case 1:M(a.type)&&Le(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Pf(a);Me(a);b=a.effectTag;if(0!==(b&64))throw q(285);a.effectTag=b&-2049|64;return a;case 5:return Rf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Pf(a),null;case 10:return Yg(a),null;case 19:case 20:return null;default:return null}}
var Kh=ba.unstable_scheduleCallback,Lh=ba.unstable_cancelCallback,Mh=ba.unstable_shouldYield,Nh=ba.unstable_now,Oh=ba.unstable_getCurrentPriorityLevel,Ph=ba.unstable_NormalPriority,Qh=Wb.ReactCurrentDispatcher,Rh=Wb.ReactCurrentOwner,Sh=1073741822,Th=0,Uh=!1,R=null,Vh=null,S=0,Wh=-1,Xh=!1,T=null,Yh=!1,Zh=null,$h=null,ai=null,Ih=null;
function bi(){if(null!==R)for(var a=R.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Le(b);break;case 3:Pf(b);Me(b);break;case 5:Rf(b);break;case 4:Pf(b);break;case 10:Yg(b)}a=a.return}Vh=null;S=0;Wh=-1;Xh=!1;R=null}
function ci(a,b){ai=$h=Zh=null;var c=U;U=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;sh(128,0,f);sh(0,64,f)}catch(g){d=!0,e=g}d&&di(b,e)}b=b.nextEffect}while(null!==b);U=c;c=a.expirationTime;0!==c&&ei(a,c);W||U||fi(1073741823)}function gi(a){return null!==Ih&&Ih.has(a)}function hi(){var a=null!==ai;null!==$h&&Lh($h);null!==ai&&ai();return a}
function ii(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){R=a;a:{var e=b;b=a;var f=S;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&Le(b);break;case 3:Pf(b);Me(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Dg(b),b.effectTag&=-3;lh(b);break;case 5:Rf(b);var h=Nf(Mf.current);f=b.type;if(null!==e&&null!=b.stateNode)mh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=Nf(Kf.current);if(Dg(b)){g=void 0;f=b.stateNode;e=b.type;l=b.memoizedProps;f[Ga]=b;f[Ha]=l;switch(e){case "iframe":case "object":H("load",f);break;case "video":case "audio":for(var k=0;k<bb.length;k++)H(bb[k],f);break;case "source":H("error",f);break;case "img":case "image":case "link":H("error",f);H("load",f);break;case "form":H("reset",f);H("submit",f);break;case "details":H("toggle",f);break;case "input":Cc(f,l);H("invalid",f);we(h,"onChange");break;case "select":f._wrapperState=
{wasMultiple:!!l.multiple};H("invalid",f);we(h,"onChange");break;case "textarea":ge(f,l),H("invalid",f),we(h,"onChange")}ue(e,l);k=null;for(g in l)if(l.hasOwnProperty(g)){var m=l[g];"children"===g?"string"===typeof m?f.textContent!==m&&(k=["children",m]):"number"===typeof m&&f.textContent!==""+m&&(k=["children",""+m]):ja.hasOwnProperty(g)&&null!=m&&we(h,g)}switch(e){case "input":Ub(f);Gc(f,l,!0);break;case "textarea":Ub(f);ie(f,l);break;case "select":case "option":break;default:"function"===typeof l.onClick&&
(f.onclick=xe)}g=k;b.updateQueue=g;(g=null!==g?!0:!1)&&jh(b)}else{e=9===h.nodeType?h:h.ownerDocument;l===je.html&&(l=ke(f));l===je.html?"script"===f?(e=e.createElement("div"),e.innerHTML="<script>\x3c/script>",e=e.removeChild(e.firstChild)):"string"===typeof g.is?e=e.createElement(f,{is:g.is}):(e=e.createElement(f),"select"===f&&(l=e,g.multiple?l.multiple=!0:g.size&&(l.size=g.size))):e=e.createElementNS(l,f);e[Ga]=b;e[Ha]=g;kh(e,b,!1,!1);var w=ve(f,g);switch(f){case "iframe":case "object":H("load",
e);l=g;break;case "video":case "audio":for(l=0;l<bb.length;l++)H(bb[l],e);l=g;break;case "source":H("error",e);l=g;break;case "img":case "image":case "link":H("error",e);H("load",e);l=g;break;case "form":H("reset",e);H("submit",e);l=g;break;case "details":H("toggle",e);l=g;break;case "input":Cc(e,g);l=Bc(e,g);H("invalid",e);we(h,"onChange");break;case "option":l=de(e,g);break;case "select":e._wrapperState={wasMultiple:!!g.multiple};l=n({},g,{value:void 0});H("invalid",e);we(h,"onChange");break;case "textarea":ge(e,
g);l=fe(e,g);H("invalid",e);we(h,"onChange");break;default:l=g}ue(f,l);k=void 0;m=f;var x=e,C=l;for(k in C)if(C.hasOwnProperty(k)){var r=C[k];"style"===k?se(x,r):"dangerouslySetInnerHTML"===k?(r=r?r.__html:void 0,null!=r&&ne(x,r)):"children"===k?"string"===typeof r?("textarea"!==m||""!==r)&&oe(x,r):"number"===typeof r&&oe(x,""+r):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ja.hasOwnProperty(k)?null!=r&&we(h,k):null!=r&&zc(x,k,r,w))}switch(f){case "input":Ub(e);
Gc(e,g,!1);break;case "textarea":Ub(e);ie(e,g);break;case "option":null!=g.value&&e.setAttribute("value",""+Ac(g.value));break;case "select":h=e;l=g;h.multiple=!!l.multiple;k=l.value;null!=k?ee(h,!!l.multiple,k,!1):null!=l.defaultValue&&ee(h,!!l.multiple,l.defaultValue,!0);break;default:"function"===typeof l.onClick&&(e.onclick=xe)}(g=Ae(f,g))&&jh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw q(166);break;case 6:if(e&&null!=b.stateNode)nh(e,b,e.memoizedProps,g);
else{if("string"!==typeof g&&null===b.stateNode)throw q(166);f=Nf(Mf.current);Nf(Kf.current);Dg(b)?(g=b.stateNode,f=b.memoizedProps,g[Ga]=b,g.nodeValue!==f&&jh(b)):(g=(9===f.nodeType?f:f.ownerDocument).createTextNode(g),g[Ga]=b,b.stateNode=g)}break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;R=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null===e?Dg(b):!g&&f&&(h=e.child.sibling,null!==h&&(e=b.firstEffect,null!==e?(b.firstEffect=h,h.nextEffect=e):
(b.firstEffect=b.lastEffect=h,h.nextEffect=null),h.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Pf(b);lh(b);break;case 10:Yg(b);break;case 9:break;case 14:break;case 17:M(b.type)&&Le(b);break;case 18:break;case 19:break;case 20:break;default:throw q(156);}R=null}b=a;if(1===S||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)h=f.expirationTime,e=f.childExpirationTime,h>g&&(g=h),e>g&&(g=e),f=f.sibling;b.childExpirationTime=g}if(null!==R)return R;null!==
c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Jh(a,S);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function ji(a){var b=Sg(a.alternate,a,S);a.memoizedProps=a.pendingProps;null===b&&(b=ii(a));Rh.current=null;return b}
function ki(a,b){if(Uh)throw q(243);hi();Uh=!0;var c=Qh.current;Qh.current=ig;var d=a.nextExpirationTimeToWorkOn;if(d!==S||a!==Vh||null===R)bi(),Vh=a,S=d,R=$e(Vh.current,null,S),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==R&&!Mh();)R=ji(R);else for(;null!==R;)R=ji(R)}catch(z){if(Xg=Wg=Vg=null,jg(),null===R)e=!0,li(z);else{if(null===R)throw q(271);var f=R,g=f.return;if(null===g)e=!0,li(z);else{a:{var h=a,l=g,k=f,m=z;g=S;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var w=m;m=l;var x=-1,C=-1;do{if(13===m.tag){var r=m.alternate;if(null!==r&&(r=r.memoizedState,null!==r)){C=10*(1073741822-r.timedOutAt);break}if(-1===x||150<x)x=150}m=m.return}while(null!==m);m=l;do{if(13===m.tag&&(void 0===m.memoizedProps.fallback?0:null===m.memoizedState)){l=m.updateQueue;null===l?(l=new Set,l.add(w),m.updateQueue=l):l.add(w);if(0===(m.mode&1)){m.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=qf(1073741823),
g.tag=vf,sf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var V=k.pingCache;null===V?(V=k.pingCache=new Eh,r=new Set,V.set(w,r)):(r=V.get(w),void 0===r&&(r=new Set,V.set(w,r)));r.has(l)||(r.add(l),k=mi.bind(null,k,w,l),w.then(k,k));-1===x?h=1073741823:(-1===C&&(C=10*(1073741822-kf(h,g))-5E3),h=C+x);0<=h&&Wh<h&&(Wh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
pc(k))}Xh=!0;m=ih(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Fh(h,m,g);dh(h,g);break a;case 1:if(x=m,C=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof C.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&!ni(k))){h.effectTag|=2048;h.expirationTime=g;g=Hh(h,x,g);dh(h,g);break a}}h=h.return}while(null!==h)}R=ii(f);continue}}}break}while(1);Uh=!1;Qh.current=c;Xg=Wg=Vg=null;jg();if(e)Vh=null,a.finishedWork=null;else if(null!==R)a.finishedWork=
null;else{c=a.current.alternate;if(null===c)throw q(281);Vh=null;if(Xh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){jf(a,d);oi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;b=a.expirationTime=1073741823;oi(a,c,d,b,-1);return}}b&&-1!==Wh?(jf(a,d),b=10*(1073741822-kf(a,d)),b<Wh&&(Wh=b),b=10*(1073741822-pi()),b=Wh-b,oi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=
c)}}function di(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&!gi(d)){a=ih(b,a);a=Hh(c,a,1073741823);sf(c,a);qi(c,1073741823);return}break;case 3:a=ih(b,a);a=Fh(c,a,1073741823);sf(c,a);qi(c,1073741823);return}c=c.return}3===a.tag&&(c=ih(b,a),c=Fh(a,c,1073741823),sf(a,c),qi(a,1073741823))}
function ri(a,b){0!==Th?a=Th:Uh?a=Yh?1073741823:S:b.mode&1?(a=si?Ve(a,150,100):Ve(a,5E3,250),null!==Vh&&a===S&&--a):a=1073741823;si&&(0===ti||a<ti)&&(ti=a);return a}
function ui(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qi(a,b){a=ui(a,b);if(null!==a&&(!Uh&&0!==S&&b>S&&bi(),gf(a,b),Uh&&!Yh&&Vh===a||ei(a,a.expirationTime),vi>wi))throw vi=0,q(185);}function xi(a,b,c,d,e){var f=Th;Th=1073741823;try{return a(b,c,d,e)}finally{Th=f}}var yi=null,X=null,zi=0,Ai=void 0,U=!1,Y=null,Z=0,ti=0,Bi=!1,Ci=null,W=!1,Di=!1,si=!1,Ei=null,Fi=Nh(),Gi=1073741822-(Fi/10|0),Hi=Gi,wi=50,vi=0,Ii=null;function Ji(){Gi=1073741822-((Nh()-Fi)/10|0)}
function Ki(a,b){if(0!==zi){if(b<zi)return;null!==Ai&&Lh(Ai)}zi=b;a=Nh()-Fi;b=10*(1073741822-b)-a;a=Oh();Ai=Kh(a,Li,{timeout:b})}function oi(a,b,c,d,e){a.expirationTime=d;0!==e||Mh()?0<e&&(a.timeoutHandle=Ce(Mi.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Mi(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Ji();Hi=Gi;Ni(a,c)}function pi(){if(U)return Hi;Oi();if(0===Z||1===Z)Ji(),Hi=Gi;return Hi}
function ei(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===X?(yi=X=a,a.nextScheduledRoot=a):(X=X.nextScheduledRoot=a,X.nextScheduledRoot=yi)):b>a.expirationTime&&(a.expirationTime=b);U||(W?Di&&(Y=a,Z=1073741823,Qi(a,1073741823,!1)):1073741823===b?fi(1073741823):Ki(a,b))}
function Oi(){var a=0,b=null;if(null!==X)for(var c=X,d=yi;null!==d;){var e=d.expirationTime;if(0===e){if(null===c||null===X)throw q(244);if(d===d.nextScheduledRoot){yi=X=d.nextScheduledRoot=null;break}else if(d===yi)yi=e=d.nextScheduledRoot,X.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===X){X=c;X.nextScheduledRoot=yi;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===X)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function Li(a){if(a&&null!==yi){Ji();a=yi;do{var b=a.expirationTime;0!==b&&Gi<=b&&(a.nextExpirationTimeToWorkOn=Gi);a=a.nextScheduledRoot}while(a!==yi)}Oi();Ji();for(Hi=Gi;null!==Y&&0!==Z&&!(Mh()&&Gi>Z);)Qi(Y,Z,Gi>Z),Oi(),Ji(),Hi=Gi;zi=0;Ai=null;0!==Z&&Ki(Y,Z);Ri()}function fi(a){for(Oi();null!==Y&&0!==Z&&a<=Z;)Qi(Y,Z,!1),Oi();0!==Z&&Ki(Y,Z);Ri()}function Ni(a,b){if(U)throw q(253);Y=a;Z=b;Qi(a,b,!1);fi(1073741823)}
function Ri(){vi=0;Ii=null;if(null!==Ei){var a=Ei;Ei=null;for(var b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Bi||(Bi=!0,Ci=d)}}}if(Bi)throw a=Ci,Ci=null,Bi=!1,a;}
function Qi(a,b,c){if(U)throw q(245);U=!0;if(c){var d=a.finishedWork;null!==d?Si(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,De(d)),ki(a,c),d=a.finishedWork,null!==d&&(Mh()?a.finishedWork=d:Si(a,d,b)))}else d=a.finishedWork,null!==d?Si(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,De(d)),ki(a,c),d=a.finishedWork,null!==d&&Si(a,d,b));U=!1}
function Si(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===Ei?Ei=[d]:Ei.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===Ii?vi++:(Ii=a,vi=0);Yh=Uh=!0;if(a.current===b)throw q(177);c=a.pendingCommitExpirationTime;if(0===c)throw q(261);a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
0):(d<a.latestPingedTime&&(a.latestPingedTime=0),e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?gf(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,gf(a,d)):d>e&&gf(a,d));hf(0,a);Rh.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ye=Jd;e=Td();if(Ud(e)){if("selectionStart"in
e)var f={start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,l=g.focusNode;g=g.focusOffset;try{f.nodeType,l.nodeType}catch(sb){f=null;break a}var k=0,m=-1,w=-1,x=0,C=0,r=e,V=null;b:for(;;){for(var z;;){r!==f||0!==h&&3!==r.nodeType||(m=k+h);r!==l||0!==g&&3!==r.nodeType||(w=k+g);3===r.nodeType&&(k+=r.nodeValue.length);if(null===(z=r.firstChild))break;V=r;r=z}for(;;){if(r===
e)break b;V===f&&++x===h&&(m=k);V===l&&++C===g&&(w=k);if(null!==(z=r.nextSibling))break;r=V;V=r.parentNode}r=z}f=-1===m||-1===w?null:{start:m,end:w}}else f=null}f=f||{start:0,end:0}}else f=null;ze={focusedElem:e,selectionRange:f};Jd=!1;for(T=d;null!==T;){e=!1;f=void 0;try{for(;null!==T;){if(T.effectTag&256){var p=T.alternate;h=T;switch(h.tag){case 0:case 11:case 15:sh(2,0,h);break;case 1:if(h.effectTag&256&&null!==p){var u=p.memoizedProps,E=p.memoizedState,vg=h.stateNode,Pi=vg.getSnapshotBeforeUpdate(h.elementType===
h.type?u:N(h.type,u),E);vg.__reactInternalSnapshotBeforeUpdate=Pi}break;case 3:case 5:case 6:case 4:case 17:break;default:throw q(163);}}T=T.nextEffect}}catch(sb){e=!0,f=sb}if(e){if(null===T)throw q(178);di(T,f);null!==T&&(T=T.nextEffect)}}for(T=d;null!==T;){p=!1;u=void 0;try{for(;null!==T;){var y=T.effectTag;y&16&&oe(T.stateNode,"");if(y&128){var B=T.alternate;if(null!==B){var v=B.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(y&14){case 2:Ah(T);T.effectTag&=-3;break;case 6:Ah(T);
T.effectTag&=-3;Bh(T.alternate,T);break;case 4:Bh(T.alternate,T);break;case 8:E=T;yh(E);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;var t=E.alternate;null!==t&&(t.return=null,t.child=null,t.memoizedState=null,t.updateQueue=null)}T=T.nextEffect}}catch(sb){p=!0,u=sb}if(p){if(null===T)throw q(178);di(T,u);null!==T&&(T=T.nextEffect)}}v=ze;B=Td();y=v.focusedElem;p=v.selectionRange;if(B!==y&&y&&y.ownerDocument&&Sd(y.ownerDocument.documentElement,y)){null!==p&&Ud(y)&&(B=p.start,v=
p.end,void 0===v&&(v=B),"selectionStart"in y?(y.selectionStart=B,y.selectionEnd=Math.min(v,y.value.length)):(v=(B=y.ownerDocument||document)&&B.defaultView||window,v.getSelection&&(v=v.getSelection(),u=y.textContent.length,t=Math.min(p.start,u),p=void 0===p.end?t:Math.min(p.end,u),!v.extend&&t>p&&(u=p,p=t,t=u),u=Rd(y,t),E=Rd(y,p),u&&E&&(1!==v.rangeCount||v.anchorNode!==u.node||v.anchorOffset!==u.offset||v.focusNode!==E.node||v.focusOffset!==E.offset)&&(B=B.createRange(),B.setStart(u.node,u.offset),
v.removeAllRanges(),t>p?(v.addRange(B),v.extend(E.node,E.offset)):(B.setEnd(E.node,E.offset),v.addRange(B))))));B=[];for(v=y;v=v.parentNode;)1===v.nodeType&&B.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof y.focus&&y.focus();for(y=0;y<B.length;y++)v=B[y],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}ze=null;Jd=!!ye;ye=null;a.current=b;for(T=d;null!==T;){y=!1;B=void 0;try{for(v=a,t=c;null!==T;){var pa=T.effectTag;if(pa&36){var Qb=T.alternate;p=T;u=t;switch(p.tag){case 0:case 11:case 15:sh(16,
32,p);break;case 1:var fd=p.stateNode;if(p.effectTag&4)if(null===Qb)fd.componentDidMount();else{var hj=p.elementType===p.type?Qb.memoizedProps:N(p.type,Qb.memoizedProps);fd.componentDidUpdate(hj,Qb.memoizedState,fd.__reactInternalSnapshotBeforeUpdate)}var th=p.updateQueue;null!==th&&gh(p,th,fd,u);break;case 3:var uh=p.updateQueue;if(null!==uh){E=null;if(null!==p.child)switch(p.child.tag){case 5:E=p.child.stateNode;break;case 1:E=p.child.stateNode}gh(p,uh,E,u)}break;case 5:var ij=p.stateNode;null===
Qb&&p.effectTag&4&&Ae(p.type,p.memoizedProps)&&ij.focus();break;case 6:break;case 4:break;case 12:break;case 13:case 17:break;default:throw q(163);}}if(pa&128){p=void 0;var gd=T.ref;if(null!==gd){var vh=T.stateNode;switch(T.tag){case 5:p=vh;break;default:p=vh}"function"===typeof gd?gd(p):gd.current=p}}pa&512&&(Zh=v);T=T.nextEffect}}catch(sb){y=!0,B=sb}if(y){if(null===T)throw q(178);di(T,B);null!==T&&(T=T.nextEffect)}}null!==d&&null!==Zh&&(pa=ci.bind(null,a,d),$h=Kh(Ph,pa),ai=pa);Uh=Yh=!1;"function"===
typeof Re&&Re(b.stateNode);pa=b.expirationTime;b=b.childExpirationTime;b=b>pa?b:pa;0===b&&(Ih=null);a.expirationTime=b;a.finishedWork=null}function li(a){if(null===Y)throw q(246);Y.expirationTime=0;Bi||(Bi=!0,Ci=a)}var of=pi,pf=ri,rh=di,Gh=li;
function mi(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Vh&&S===c)Vh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;hf(c,a);c=a.expirationTime;0!==c&&ei(a,c)}}function Dh(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=pi();b=ri(b,a);a=ui(a,b);null!==a&&(gf(a,b),b=a.expirationTime,0!==b&&ei(a,b))}var ni=gi,tf=qi,Ti=Ni;
function Ui(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||U||fi(1073741823)}}function Vi(a,b){if(W&&!Di){Di=!0;try{return a(b)}finally{Di=!1}}return a(b)}function Wi(a,b,c,d){if(si)return a(b,c,d);W||U||0===ti||(fi(ti),ti=0);var e=si,f=W;W=si=!0;try{return a(b,c,d)}finally{si=e,(W=f)||U||fi(1073741823)}}var rf=hi;
function Xi(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==nd(c)||1!==c.tag)throw q(170);var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw q(171);}if(1===c.tag){var h=c.type;if(M(h)){c=Oe(c,h,g);break a}}c=g}else c=Ie;null===b.context?b.context=c:b.pendingContext=c;b=e;e=qf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);rf();
sf(f,e);tf(f,d);return d}function Yi(a,b,c,d){var e=b.current,f=of();e=pf(f,e);return Xi(a,b,c,e,d)}function Zi(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function $i(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Zb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Cb=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=La(d);if(!e)throw q(90);Vb(d);Ec(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function aj(a){var b=pi();b=Ve(b,5E3,250);b>=Sh&&(b=Sh-1);this._expirationTime=Sh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}aj.prototype.render=function(a){if(!this._defer)throw q(250);this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new bj;Xi(a,b,null,c,d._onCommit);return d};
aj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
aj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw q(251);if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw q(251);d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Ti(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};aj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function bj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}bj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
bj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw q(191,c);c()}}};function cj(a,b,c){a=new ff(a,c);b=Xe(3,null,null,b?3:0);a.current=b;this._internalRoot=b.stateNode=a}cj.prototype.render=function(a,b){var c=this._internalRoot,d=new bj;b=void 0===b?null:b;null!==b&&d.then(b);Yi(a,c,null,d._onCommit);return d};
cj.prototype.unmount=function(a){var b=this._internalRoot,c=new bj;a=void 0===a?null:a;null!==a&&c.then(a);Yi(null,b,null,c._onCommit);return c};cj.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new bj;c=void 0===c?null:c;null!==c&&e.then(c);Yi(b,d,a,e._onCommit);return e};
cj.prototype.createBatch=function(){var a=new aj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function dj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Ib=Ui;Jb=Wi;Kb=function(){U||0===ti||(fi(ti),ti=0)};
function ej(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new cj(a,!1,b)}
function fj(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Zi(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=ej(c,d);if("function"===typeof e){var h=e;e=function(){var a=Zi(f._internalRoot);h.call(a)}}Vi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Zi(f._internalRoot)}
function gj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!dj(b))throw q(200);return $i(a,b,null,c)}
var kj={createPortal:gj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw q(188);throw q(268,Object.keys(a));}a=pd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!dj(b))throw q(200);return fj(null,a,b,!0,c)},render:function(a,b,c){if(!dj(b))throw q(200);return fj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!dj(c))throw q(200);if(null==a||void 0===a._reactInternalFiber)throw q(38);
return fj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!dj(a))throw q(40);return a._reactRootContainer?(Vi(function(){fj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return gj.apply(void 0,arguments)},unstable_batchedUpdates:Ui,unstable_interactiveUpdates:Wi,flushSync:function(a,b){if(U)throw q(187);var c=W;W=!0;try{return xi(a,b)}finally{W=c,fi(1073741823)}},unstable_createRoot:jj,unstable_flushControlled:function(a){var b=W;W=!0;try{xi(a)}finally{(W=
b)||U||fi(1073741823)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ja,Ka,La,Da.injectEventPluginsByName,ha,Ra,function(a){za(a,Qa)},Gb,Hb,Md,Ca,rf]}};function jj(a,b){if(!dj(a))throw q(299,"unstable_createRoot");return new cj(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Ue(n({},a,{overrideHookState:null,overrideProps:null,currentDispatcherRef:Wb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=pd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ia,bundleType:0,version:"16.9.0-alpha.0",rendererPackageName:"react-dom"});var lj={default:kj},mj=lj&&kj||lj;module.exports=mj.default||mj;

},{"react":"HdMw","object-assign":"YOw+","scheduler":"IGIl"}],"X9zx":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"jF7N"}],"CvJj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"wTZR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogLevel = void 0;

/** Console logging verbosity for the SDK. */
var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  /** No logs will be generated. */
  LogLevel[LogLevel["None"] = 0] = "None";
  /** Only SDK internal errors will be logged. */

  LogLevel[LogLevel["Error"] = 1] = "Error";
  /** Information useful for debugging the SDK will be logged. */

  LogLevel[LogLevel["Debug"] = 2] = "Debug";
  /** All SDK actions will be logged. */

  LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
},{}],"xU/E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Severity = void 0;

/** JSDoc */
var Severity;
exports.Severity = Severity;

(function (Severity) {
  /** JSDoc */
  Severity["Fatal"] = "fatal";
  /** JSDoc */

  Severity["Error"] = "error";
  /** JSDoc */

  Severity["Warning"] = "warning";
  /** JSDoc */

  Severity["Log"] = "log";
  /** JSDoc */

  Severity["Info"] = "info";
  /** JSDoc */

  Severity["Debug"] = "debug";
  /** JSDoc */

  Severity["Critical"] = "critical";
})(Severity || (exports.Severity = Severity = {})); // tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace


(function (Severity) {
  /**
   * Converts a string-based level into a {@link Severity}.
   *
   * @param level string representation of Severity
   * @returns Severity
   */
  function fromString(level) {
    switch (level) {
      case 'debug':
        return Severity.Debug;

      case 'info':
        return Severity.Info;

      case 'warn':
      case 'warning':
        return Severity.Warning;

      case 'error':
        return Severity.Error;

      case 'fatal':
        return Severity.Fatal;

      case 'critical':
        return Severity.Critical;

      case 'log':
      default:
        return Severity.Log;
    }
  }

  Severity.fromString = fromString;
})(Severity || (exports.Severity = Severity = {}));
},{}],"5G/C":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

/** The status of an event. */
var Status;
exports.Status = Status;

(function (Status) {
  /** The status could not be determined. */
  Status["Unknown"] = "unknown";
  /** The event was skipped due to configuration or callbacks. */

  Status["Skipped"] = "skipped";
  /** The event was sent to Sentry successfully. */

  Status["Success"] = "success";
  /** The client is currently rate limited and will try again later. */

  Status["RateLimit"] = "rate_limit";
  /** The event could not be processed. */

  Status["Invalid"] = "invalid";
  /** A server-side error ocurred during submission. */

  Status["Failed"] = "failed";
})(Status || (exports.Status = Status = {})); // tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace


(function (Status) {
  /**
   * Converts a HTTP status code into a {@link Status}.
   *
   * @param code The HTTP response status code.
   * @returns The send status or {@link Status.Unknown}.
   */
  function fromHttpCode(code) {
    if (code >= 200 && code < 300) {
      return Status.Success;
    }

    if (code === 429) {
      return Status.RateLimit;
    }

    if (code >= 400 && code < 500) {
      return Status.Invalid;
    }

    if (code >= 500) {
      return Status.Failed;
    }

    return Status.Unknown;
  }

  Status.fromHttpCode = fromHttpCode;
})(Status || (exports.Status = Status = {}));
},{}],"WE5h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LogLevel", {
  enumerable: true,
  get: function () {
    return _loglevel.LogLevel;
  }
});
Object.defineProperty(exports, "Severity", {
  enumerable: true,
  get: function () {
    return _severity.Severity;
  }
});
Object.defineProperty(exports, "Status", {
  enumerable: true,
  get: function () {
    return _status.Status;
  }
});

var _loglevel = require("./loglevel");

var _severity = require("./severity");

var _status = require("./status");
},{"./loglevel":"wTZR","./severity":"xU/E","./status":"5G/C"}],"Rw5m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forget = forget;
exports.filterAsync = filterAsync;

var tslib_1 = _interopRequireWildcard(require("tslib"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
function forget(promise) {
  promise.catch(function (e) {
    // TODO: Use a better logging mechanism
    console.error(e);
  });
}
/**
 * Helper to filter an array with asynchronous callbacks.
 *
 * @param array An array containing items to filter.
 * @param predicate An async predicate evaluated on every item.
 * @param thisArg Optional value passed as "this" into the callback.
 * @returns An array containing only values where the callback returned true.
 */


function filterAsync(array, predicate, thisArg) {
  return tslib_1.__awaiter(this, void 0, void 0, function () {
    var verdicts;
    return tslib_1.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , Promise.all(array.map(predicate, thisArg))];

        case 1:
          verdicts = _a.sent();
          return [2
          /*return*/
          , array.filter(function (_, index) {
            return verdicts[index];
          })];
      }
    });
  });
}
},{"tslib":"CvJj"}],"WD/a":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SentryError = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** An error emitted by Sentry SDKs and related utilities. */
var SentryError =
/** @class */
function (_super) {
  tslib_1.__extends(SentryError, _super);

  function SentryError(message) {
    var _newTarget = this.constructor;

    var _this = _super.call(this, message) || this;

    _this.message = message; // tslint:disable:no-unsafe-any

    _this.name = _newTarget.prototype.constructor.name;
    Object.setPrototypeOf(_this, _newTarget.prototype);
    return _this;
  }

  return SentryError;
}(Error);

exports.SentryError = SentryError;
},{"tslib":"CvJj"}],"ADSP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isError = isError;
exports.isErrorEvent = isErrorEvent;
exports.isDOMError = isDOMError;
exports.isDOMException = isDOMException;
exports.isString = isString;
exports.isPrimitive = isPrimitive;
exports.isPlainObject = isPlainObject;
exports.isRegExp = isRegExp;
exports.isThenable = isThenable;
exports.isSyntheticEvent = isSyntheticEvent;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (Object.prototype.toString.call(wat)) {
    case '[object Error]':
      return true;

    case '[object Exception]':
      return true;

    case '[object DOMException]':
      return true;

    default:
      return wat instanceof Error;
  }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isErrorEvent(wat) {
  return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isDOMError(wat) {
  return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isDOMException(wat) {
  return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isString(wat) {
  return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isPrimitive(wat) {
  return wat === null || typeof wat !== 'object' && typeof wat !== 'function';
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isPlainObject(wat) {
  return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isRegExp(wat) {
  return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */


function isThenable(wat) {
  // tslint:disable:no-unsafe-any
  return Boolean(wat && wat.then && typeof wat.then === 'function'); // tslint:enable:no-unsafe-any
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */


function isSyntheticEvent(wat) {
  // tslint:disable-next-line:no-unsafe-any
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
},{}],"g5I+":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"7u9E":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dynamicRequire = dynamicRequire;
exports.isNodeEnv = isNodeEnv;
exports.getGlobalObject = getGlobalObject;
exports.uuid4 = uuid4;
exports.parseUrl = parseUrl;
exports.getEventDescription = getEventDescription;
exports.consoleSandbox = consoleSandbox;
exports.addExceptionTypeValue = addExceptionTypeValue;

/**
 * Requires a module which is protected _against bundler minification.
 *
 * @param request The module path to resolve
 */
function dynamicRequire(mod, request) {
  // tslint:disable-next-line: no-unsafe-any
  return mod.require(request);
}
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */


function isNodeEnv() {
  // tslint:disable:strict-type-predicates
  return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}

var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */

function getGlobalObject() {
  return isNodeEnv() ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : fallbackGlobalObject;
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */


function uuid4() {
  var global = getGlobalObject();
  var crypto = global.crypto || global.msCrypto;

  if (!(crypto === void 0) && crypto.getRandomValues) {
    // Use window.crypto API if available
    var arr = new Uint16Array(8);
    crypto.getRandomValues(arr); // set 4 in byte 7
    // tslint:disable-next-line:no-bitwise

    arr[3] = arr[3] & 0xfff | 0x4000; // set 2 most significant bits of byte 9 to '10'
    // tslint:disable-next-line:no-bitwise

    arr[4] = arr[4] & 0x3fff | 0x8000;

    var pad = function (num) {
      var v = num.toString(16);

      while (v.length < 4) {
        v = "0" + v;
      }

      return v;
    };

    return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
  } // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523


  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    var r = Math.random() * 16 | 0; // tslint:disable-next-line:no-bitwise

    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */


function parseUrl(url) {
  if (!url) {
    return {};
  }

  var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);

  if (!match) {
    return {};
  } // coerce to undefined values to empty string so we don't get 'undefined'


  var query = match[6] || '';
  var fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment
  };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */


function getEventDescription(event) {
  if (event.message) {
    return event.message;
  }

  if (event.exception && event.exception.values && event.exception.values[0]) {
    var exception = event.exception.values[0];

    if (exception.type && exception.value) {
      return exception.type + ": " + exception.value;
    }

    return exception.type || exception.value || event.event_id || '<unknown>';
  }

  return event.event_id || '<unknown>';
}
/** JSDoc */


function consoleSandbox(callback) {
  var global = getGlobalObject();
  var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];

  if (!('console' in global)) {
    return callback();
  }

  var originalConsole = global.console;
  var wrappedLevels = {}; // Restore all wrapped console methods

  levels.forEach(function (level) {
    if (level in global.console && originalConsole[level].__sentry__) {
      wrappedLevels[level] = originalConsole[level].__sentry_wrapped__;
      originalConsole[level] = originalConsole[level].__sentry_original__;
    }
  }); // Perform callback manipulations

  var result = callback(); // Revert restoration to wrapped state

  Object.keys(wrappedLevels).forEach(function (level) {
    originalConsole[level] = wrappedLevels[level];
  });
  return result;
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @param mechanism Mechanism of the exception.
 * @hidden
 */


function addExceptionTypeValue(event, value, type, mechanism) {
  if (mechanism === void 0) {
    mechanism = {
      handled: true,
      type: 'generic'
    };
  }

  event.exception = event.exception || {};
  event.exception.values = event.exception.values || [];
  event.exception.values[0] = event.exception.values[0] || {};
  event.exception.values[0].value = event.exception.values[0].value || value || '';
  event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
  event.exception.values[0].mechanism = event.exception.values[0].mechanism || mechanism;
}
},{"process":"g5I+"}],"RROe":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _misc = require("./misc");

// TODO: Implement different loggers for different environments
var global = (0, _misc.getGlobalObject)();
/** Prefix for logging strings */

var PREFIX = 'Sentry Logger ';
/** JSDoc */

var Logger =
/** @class */
function () {
  /** JSDoc */
  function Logger() {
    this._enabled = false;
  }
  /** JSDoc */


  Logger.prototype.disable = function () {
    this._enabled = false;
  };
  /** JSDoc */


  Logger.prototype.enable = function () {
    this._enabled = true;
  };
  /** JSDoc */


  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this._enabled) {
      return;
    }

    (0, _misc.consoleSandbox)(function () {
      global.console.log(PREFIX + "[Log]: " + args.join(' ')); // tslint:disable-line:no-console
    });
  };
  /** JSDoc */


  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this._enabled) {
      return;
    }

    (0, _misc.consoleSandbox)(function () {
      global.console.warn(PREFIX + "[Warn]: " + args.join(' ')); // tslint:disable-line:no-console
    });
  };
  /** JSDoc */


  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this._enabled) {
      return;
    }

    (0, _misc.consoleSandbox)(function () {
      global.console.error(PREFIX + "[Error]: " + args.join(' ')); // tslint:disable-line:no-console
    });
  };

  return Logger;
}(); // Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used


global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());
exports.logger = logger;
},{"./misc":"7u9E"}],"RZvh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Memo = void 0;

// tslint:disable:no-unsafe-any

/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo =
/** @class */
function () {
  function Memo() {
    // tslint:disable-next-line
    this._hasWeakSet = typeof WeakSet === 'function';
    this._inner = this._hasWeakSet ? new WeakSet() : [];
  }
  /**
   * Sets obj to remember.
   * @param obj Object to remember
   */


  Memo.prototype.memoize = function (obj) {
    if (this._hasWeakSet) {
      if (this._inner.has(obj)) {
        return true;
      }

      this._inner.add(obj);

      return false;
    } // tslint:disable-next-line:prefer-for-of


    for (var i = 0; i < this._inner.length; i++) {
      var value = this._inner[i];

      if (value === obj) {
        return true;
      }
    }

    this._inner.push(obj);

    return false;
  };
  /**
   * Removes object from internal storage.
   * @param obj Object to forget
   */


  Memo.prototype.unmemoize = function (obj) {
    if (this._hasWeakSet) {
      this._inner.delete(obj);
    } else {
      for (var i = 0; i < this._inner.length; i++) {
        if (this._inner[i] === obj) {
          this._inner.splice(i, 1);

          break;
        }
      }
    }
  };

  return Memo;
}();

exports.Memo = Memo;
},{}],"viw5":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;
exports.urlEncode = urlEncode;
exports.normalizeToSize = normalizeToSize;
exports.walk = walk;
exports.normalize = normalize;

var _is = require("./is");

var _memo = require("./memo");

/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
  if (!(name in source)) {
    return;
  }

  var original = source[name];
  var wrapped = replacement(original); // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  // tslint:disable-next-line:strict-type-predicates

  if (typeof wrapped === 'function') {
    try {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __sentry__: {
          enumerable: false,
          value: true
        },
        __sentry_original__: {
          enumerable: false,
          value: original
        },
        __sentry_wrapped__: {
          enumerable: false,
          value: wrapped
        }
      });
    } catch (_Oo) {// This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }

  source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */


function urlEncode(object) {
  return Object.keys(object).map( // tslint:disable-next-line:no-unsafe-any
  function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
  }).join('&');
}
/**
 * Transforms Error object into an object literal with all it's attributes
 * attached to it.
 *
 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
 *
 * @param error An Error containing all relevant information
 * @returns An object with all error properties
 */


function objectifyError(error) {
  // These properties are implemented as magical getters and don't show up in `for-in` loop
  var err = {
    message: error.message,
    name: error.name,
    stack: error.stack
  };

  for (var i in error) {
    if (Object.prototype.hasOwnProperty.call(error, i)) {
      err[i] = error[i];
    }
  }

  return err;
}
/** Calculates bytes size of input string */


function utf8Length(value) {
  // tslint:disable-next-line:no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */


function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
/** JSDoc */


function normalizeToSize(object, // Default Node.js REPL depth
depth, // 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
  if (depth === void 0) {
    depth = 3;
  }

  if (maxSize === void 0) {
    maxSize = 100 * 1024;
  }

  var serialized = normalize(object, depth);

  if (jsonSize(serialized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }

  return serialized;
}
/** Transforms any input value into a string form, either primitive value or a type of the input */


function serializeValue(value) {
  var type = Object.prototype.toString.call(value); // Node.js REPL notation

  if (typeof value === 'string') {
    return value;
  }

  if (type === '[object Object]') {
    return '[Object]';
  }

  if (type === '[object Array]') {
    return '[Array]';
  }

  var normalized = normalizeValue(value);
  return (0, _is.isPrimitive)(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */


function normalizeValue(value, key) {
  if (key === 'domain' && typeof value === 'object' && value._events) {
    return '[Domain]';
  }

  if (key === 'domainEmitter') {
    return '[DomainEmitter]';
  }

  if (typeof global !== 'undefined' && value === global) {
    return '[Global]';
  }

  if (typeof window !== 'undefined' && value === window) {
    return '[Window]';
  }

  if (typeof document !== 'undefined' && value === document) {
    return '[Document]';
  } // tslint:disable-next-line:strict-type-predicates


  if (typeof Event !== 'undefined' && value instanceof Event) {
    return Object.getPrototypeOf(value) ? value.constructor.name : 'Event';
  } // React's SyntheticEvent thingy


  if ((0, _is.isSyntheticEvent)(value)) {
    return '[SyntheticEvent]';
  }

  if (Number.isNaN(value)) {
    return '[NaN]';
  }

  if (value === void 0) {
    return '[undefined]';
  }

  if (typeof value === 'function') {
    return "[Function: " + (value.name || '<unknown-function-name>') + "]";
  }

  return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */


function walk(key, value, depth, memo) {
  if (depth === void 0) {
    depth = +Infinity;
  }

  if (memo === void 0) {
    memo = new _memo.Memo();
  } // If we reach the maximum depth, serialize whatever has left


  if (depth === 0) {
    return serializeValue(value);
  } // If value implements `toJSON` method, call it and return early
  // tslint:disable:no-unsafe-any


  if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
    return value.toJSON();
  } // tslint:enable:no-unsafe-any
  // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further


  var normalized = normalizeValue(value, key);

  if ((0, _is.isPrimitive)(normalized)) {
    return normalized;
  } // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself


  var source = (0, _is.isError)(value) ? objectifyError(value) : value; // Create an accumulator that will act as a parent for all future itterations of that branch

  var acc = Array.isArray(value) ? [] : {}; // If we already walked that branch, bail out, as it's circular reference

  if (memo.memoize(value)) {
    return '[Circular ~]';
  } // Walk all keys of the source


  for (var innerKey in source) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
      continue;
    } // Recursively walk through all the child nodes


    acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
  } // Once walked through all the branches, remove the parent from memo storage


  memo.unmemoize(value); // Return accumulated values

  return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */


function normalize(input, depth) {
  try {
    // tslint:disable-next-line:no-unsafe-any
    return JSON.parse(JSON.stringify(input, function (key, value) {
      return walk(key, value, depth);
    }));
  } catch (_oO) {
    return '**non-serializable**';
  }
}
},{"./is":"ADSP","./memo":"RZvh"}],"7WKV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;
exports.relative = relative;
exports.normalizePath = normalizePath;
exports.isAbsolute = isAbsolute;
exports.join = join;
exports.dirname = dirname;
exports.basename = basename;

// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js

/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.


var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
/** JSDoc */

function splitPath(filename) {
  var parts = splitPathRe.exec(filename);
  return parts ? parts.slice(1) : [];
} // path.resolve([from ...], to)
// posix version

/** JSDoc */


function resolve() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resolvedPath = '';
  var resolvedAbsolute = false;

  for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? args[i] : '/'; // Skip empty entries

    if (!path) {
      continue;
    }

    resolvedPath = path + "/" + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */


function trim(arr) {
  var start = 0;

  for (; start < arr.length; start++) {
    if (arr[start] !== '') {
      break;
    }
  }

  var end = arr.length - 1;

  for (; end >= 0; end--) {
    if (arr[end] !== '') {
      break;
    }
  }

  if (start > end) {
    return [];
  }

  return arr.slice(start, end - start + 1);
} // path.relative(from, to)
// posix version

/** JSDoc */


function relative(from, to) {
  // tslint:disable:no-parameter-reassignment
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);
  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
} // path.normalize(path)
// posix version

/** JSDoc */


function normalizePath(path) {
  var isPathAbsolute = isAbsolute(path);
  var trailingSlash = path.substr(-1) === '/'; // Normalize the path

  var normalizedPath = normalizeArray(path.split('/').filter(function (p) {
    return !!p;
  }), !isPathAbsolute).join('/');

  if (!normalizedPath && !isPathAbsolute) {
    normalizedPath = '.';
  }

  if (normalizedPath && trailingSlash) {
    normalizedPath += '/';
  }

  return (isPathAbsolute ? '/' : '') + normalizedPath;
} // posix version

/** JSDoc */


function isAbsolute(path) {
  return path.charAt(0) === '/';
} // posix version

/** JSDoc */


function join() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return normalizePath(args.join('/'));
}
/** JSDoc */


function dirname(path) {
  var result = splitPath(path);
  var root = result[0];
  var dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
}
/** JSDoc */


function basename(path, ext) {
  var f = splitPath(path)[2];

  if (ext && f.substr(ext.length * -1) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
}
},{}],"SYJG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromiseBuffer = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _error = require("./error");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** A simple queue that holds promises. */
var PromiseBuffer =
/** @class */
function () {
  function PromiseBuffer(_limit) {
    this._limit = _limit;
    /** Internal set of queued Promises */

    this._buffer = [];
  }
  /**
   * Says if the buffer is ready to take more requests
   */


  PromiseBuffer.prototype.isReady = function () {
    return this._limit === undefined || this.length() < this._limit;
  };
  /**
   * Add a promise to the queue.
   *
   * @param task Can be any Promise<T>
   * @returns The original promise.
   */


  PromiseBuffer.prototype.add = function (task) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var _this = this;

      return tslib_1.__generator(this, function (_a) {
        if (!this.isReady()) {
          return [2
          /*return*/
          , Promise.reject(new _error.SentryError('Not adding Promise due to buffer limit reached.'))];
        }

        if (this._buffer.indexOf(task) === -1) {
          this._buffer.push(task);
        }

        task.then(function () {
          return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              return [2
              /*return*/
              , this.remove(task)];
            });
          });
        }).catch(function () {
          return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              return [2
              /*return*/
              , this.remove(task).catch(function () {// We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
              })];
            });
          });
        });
        return [2
        /*return*/
        , task];
      });
    });
  };
  /**
   * Remove a promise to the queue.
   *
   * @param task Can be any Promise<T>
   * @returns Removed promise.
   */


  PromiseBuffer.prototype.remove = function (task) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var removedTask;
      return tslib_1.__generator(this, function (_a) {
        removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return [2
        /*return*/
        , removedTask];
      });
    });
  };
  /**
   * This function returns the number of unresolved promises in the queue.
   */


  PromiseBuffer.prototype.length = function () {
    return this._buffer.length;
  };
  /**
   * This will drain the whole queue, returns true if queue is empty or drained.
   * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
   *
   * @param timeout Number in ms to wait until it resolves with false.
   */


  PromiseBuffer.prototype.drain = function (timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var _this = this;

      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve) {
          var capturedSetTimeout = setTimeout(function () {
            if (timeout && timeout > 0) {
              resolve(false);
            }
          }, timeout);
          Promise.all(_this._buffer).then(function () {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }).catch(function () {
            resolve(true);
          });
        })];
      });
    });
  };

  return PromiseBuffer;
}();

exports.PromiseBuffer = PromiseBuffer;
},{"tslib":"CvJj","./error":"WD/a"}],"cnzr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.truncate = truncate;
exports.snipLine = snipLine;
exports.safeJoin = safeJoin;
exports.keysToEventMessage = keysToEventMessage;

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
  if (max === void 0) {
    max = 0;
  }

  if (max === 0) {
    return str;
  }

  return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */


function snipLine(line, colno) {
  var newLine = line;
  var ll = newLine.length;

  if (ll <= 150) {
    return newLine;
  }

  if (colno > ll) {
    colno = ll; // tslint:disable-line:no-parameter-reassignment
  }

  var start = Math.max(colno - 60, 0);

  if (start < 5) {
    start = 0;
  }

  var end = Math.min(start + 140, ll);

  if (end > ll - 5) {
    end = ll;
  }

  if (end === ll) {
    start = Math.max(end - 140, 0);
  }

  newLine = newLine.slice(start, end);

  if (start > 0) {
    newLine = "'{snip} " + newLine;
  }

  if (end < ll) {
    newLine += ' {snip}';
  }

  return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */


function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }

  var output = []; // tslint:disable-next-line:prefer-for-of

  for (var i = 0; i < input.length; i++) {
    var value = input[i];

    try {
      output.push(String(value));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}
/** Merges provided array of keys into */


function keysToEventMessage(keys, maxLength) {
  if (maxLength === void 0) {
    maxLength = 40;
  }

  if (!keys.length) {
    return '[object has no keys]';
  }

  if (keys[0].length >= maxLength) {
    return truncate(keys[0], maxLength);
  }

  for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    var serialized = keys.slice(0, includedKeys).join(', ');

    if (serialized.length > maxLength) {
      continue;
    }

    if (includedKeys === keys.length) {
      return serialized;
    }

    return truncate(serialized, maxLength);
  }

  return '';
}
},{}],"DnGa":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsErrorEvent = supportsErrorEvent;
exports.supportsDOMError = supportsDOMError;
exports.supportsDOMException = supportsDOMException;
exports.supportsFetch = supportsFetch;
exports.supportsNativeFetch = supportsNativeFetch;
exports.supportsReportingObserver = supportsReportingObserver;
exports.supportsReferrerPolicy = supportsReferrerPolicy;
exports.supportsHistory = supportsHistory;

var _misc = require("./misc");

/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
  try {
    // tslint:disable:no-unused-expression
    new ErrorEvent('');
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */


function supportsDOMError() {
  try {
    // It really needs 1 argument, not 0.
    // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
    // 1 argument required, but only 0 present.
    // @ts-ignore
    // tslint:disable:no-unused-expression
    new DOMError('');
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */


function supportsDOMException() {
  try {
    // tslint:disable:no-unused-expression
    new DOMException('');
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */


function supportsFetch() {
  if (!('fetch' in (0, _misc.getGlobalObject)())) {
    return false;
  }

  try {
    // tslint:disable-next-line:no-unused-expression
    new Headers(); // tslint:disable-next-line:no-unused-expression

    new Request(''); // tslint:disable-next-line:no-unused-expression

    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns Answer to the given question.
 */


function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }

  var global = (0, _misc.getGlobalObject)();
  return global.fetch.toString().indexOf('native') !== -1;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */


function supportsReportingObserver() {
  // tslint:disable-next-line: no-unsafe-any
  return 'ReportingObserver' in (0, _misc.getGlobalObject)();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */


function supportsReferrerPolicy() {
  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
  // https://caniuse.com/#feat=referrer-policy
  // It doesn't. And it throw exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233
  if (!supportsFetch()) {
    return false;
  }

  try {
    // tslint:disable:no-unused-expression
    new Request('_', {
      referrerPolicy: 'origin'
    });
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */


function supportsHistory() {
  // NOTE: in Chrome App environment, touching history.pushState, *even inside
  //       a try/catch block*, will cause Chrome to output an error to console.error
  // borrowed from: https://github.com/angular/angular.js/pull/13945/files
  var global = (0, _misc.getGlobalObject)();
  var chrome = global.chrome; // tslint:disable-next-line:no-unsafe-any

  var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}
},{"./misc":"7u9E"}],"YDMM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncPromise = void 0;

var _is = require("./is");

/** JSDoc */
var States;

(function (States) {
  /** JSDoc */
  States["PENDING"] = "PENDING";
  /** JSDoc */

  States["RESOLVED"] = "RESOLVED";
  /** JSDoc */

  States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/** JSDoc */


var SyncPromise =
/** @class */
function () {
  function SyncPromise(callback) {
    var _this = this;
    /** JSDoc */


    this._state = States.PENDING;
    /** JSDoc */

    this._handlers = [];
    /** JSDoc */

    this._resolve = function (value) {
      _this._setResult(value, States.RESOLVED);
    };
    /** JSDoc */


    this._reject = function (reason) {
      _this._setResult(reason, States.REJECTED);
    };
    /** JSDoc */


    this._setResult = function (value, state) {
      if (_this._state !== States.PENDING) {
        return;
      }

      if ((0, _is.isThenable)(value)) {
        value.then(_this._resolve, _this._reject);
        return;
      }

      _this._value = value;
      _this._state = state;

      _this._executeHandlers();
    };
    /** JSDoc */


    this._executeHandlers = function () {
      if (_this._state === States.PENDING) {
        return;
      }

      if (_this._state === States.REJECTED) {
        // tslint:disable-next-line:no-unsafe-any
        _this._handlers.forEach(function (h) {
          return h.onFail && h.onFail(_this._value);
        });
      } else {
        // tslint:disable-next-line:no-unsafe-any
        _this._handlers.forEach(function (h) {
          return h.onSuccess && h.onSuccess(_this._value);
        });
      }

      _this._handlers = [];
      return;
    };
    /** JSDoc */


    this._attachHandler = function (handler) {
      _this._handlers = _this._handlers.concat(handler);

      _this._executeHandlers();
    };

    try {
      callback(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  /** JSDoc */


  SyncPromise.prototype.then = function (onfulfilled, onrejected) {
    var _this = this; // public then<U>(onSuccess?: HandlerOnSuccess<T, U>, onFail?: HandlerOnFail<U>): SyncPromise<T | U> {


    return new SyncPromise(function (resolve, reject) {
      _this._attachHandler({
        onFail: function (reason) {
          if (!onrejected) {
            reject(reason);
            return;
          }

          try {
            resolve(onrejected(reason));
            return;
          } catch (e) {
            reject(e);
            return;
          }
        },
        onSuccess: function (result) {
          if (!onfulfilled) {
            resolve(result);
            return;
          }

          try {
            resolve(onfulfilled(result));
            return;
          } catch (e) {
            reject(e);
            return;
          }
        }
      });
    });
  };
  /** JSDoc */


  SyncPromise.prototype.catch = function (onFail) {
    // tslint:disable-next-line:no-unsafe-any
    return this.then(function (val) {
      return val;
    }, onFail);
  };
  /** JSDoc */


  SyncPromise.prototype.toString = function () {
    return "[object SyncPromise]";
  };
  /** JSDoc */


  SyncPromise.resolve = function (value) {
    return new SyncPromise(function (resolve) {
      resolve(value);
    });
  };
  /** JSDoc */


  SyncPromise.reject = function (reason) {
    return new SyncPromise(function (_, reject) {
      reject(reason);
    });
  };

  return SyncPromise;
}();

exports.SyncPromise = SyncPromise;
},{"./is":"ADSP"}],"ZEwu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("./async");

Object.keys(_async).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _async[key];
    }
  });
});

var _error = require("./error");

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});

var _is = require("./is");

Object.keys(_is).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _is[key];
    }
  });
});

var _logger = require("./logger");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});

var _memo = require("./memo");

Object.keys(_memo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _memo[key];
    }
  });
});

var _misc = require("./misc");

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _object = require("./object");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _object[key];
    }
  });
});

var _path = require("./path");

Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _path[key];
    }
  });
});

var _promisebuffer = require("./promisebuffer");

Object.keys(_promisebuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _promisebuffer[key];
    }
  });
});

var _string = require("./string");

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _string[key];
    }
  });
});

var _supports = require("./supports");

Object.keys(_supports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _supports[key];
    }
  });
});

var _syncpromise = require("./syncpromise");

Object.keys(_syncpromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _syncpromise[key];
    }
  });
});
},{"./async":"Rw5m","./error":"WD/a","./is":"ADSP","./logger":"RROe","./memo":"RZvh","./misc":"7u9E","./object":"viw5","./path":"7WKV","./promisebuffer":"SYJG","./string":"cnzr","./supports":"DnGa","./syncpromise":"YDMM"}],"+pNp":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGlobalEventProcessor = addGlobalEventProcessor;
exports.Scope = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope =
/** @class */
function () {
  function Scope() {
    /** Flag if notifiying is happening. */
    this._notifyingListeners = false;
    /** Callback for client to receive scope changes. */

    this._scopeListeners = [];
    /** Callback list that will be called after {@link applyToEvent}. */

    this._eventProcessors = [];
    /** Array of breadcrumbs. */

    this._breadcrumbs = [];
    /** User */

    this._user = {};
    /** Tags */

    this._tags = {};
    /** Extra */

    this._extra = {};
    /** Contexts */

    this._context = {};
  }
  /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */


  Scope.prototype.addScopeListener = function (callback) {
    this._scopeListeners.push(callback);
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.addEventProcessor = function (callback) {
    this._eventProcessors.push(callback);

    return this;
  };
  /**
   * This will be called on every set call.
   */


  Scope.prototype._notifyScopeListeners = function () {
    var _this = this;

    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      setTimeout(function () {
        _this._scopeListeners.forEach(function (callback) {
          callback(_this);
        });

        _this._notifyingListeners = false;
      });
    }
  };
  /**
   * This will be called after {@link applyToEvent} is finished.
   */


  Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
    var _this = this;

    if (index === void 0) {
      index = 0;
    }

    return new _utils.SyncPromise(function (resolve, reject) {
      var processor = processors[index]; // tslint:disable-next-line:strict-type-predicates

      if (event === null || typeof processor !== 'function') {
        resolve(event);
      } else {
        var result = processor(tslib_1.__assign({}, event), hint);

        if ((0, _utils.isThenable)(result)) {
          result.then(function (final) {
            return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve);
          }).catch(reject);
        } else {
          _this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).catch(reject);
        }
      }
    });
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setUser = function (user) {
    this._user = (0, _utils.normalize)(user);

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setTags = function (tags) {
    this._tags = tslib_1.__assign({}, this._tags, (0, _utils.normalize)(tags));

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setTag = function (key, value) {
    var _a;

    this._tags = tslib_1.__assign({}, this._tags, (_a = {}, _a[key] = (0, _utils.normalize)(value), _a));

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setExtras = function (extra) {
    this._extra = tslib_1.__assign({}, this._extra, (0, _utils.normalize)(extra));

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setExtra = function (key, extra) {
    var _a;

    this._extra = tslib_1.__assign({}, this._extra, (_a = {}, _a[key] = (0, _utils.normalize)(extra), _a));

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setFingerprint = function (fingerprint) {
    this._fingerprint = (0, _utils.normalize)(fingerprint);

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setLevel = function (level) {
    this._level = (0, _utils.normalize)(level);

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.setContext = function (name, context) {
    this._context[name] = context ? (0, _utils.normalize)(context) : undefined;

    this._notifyScopeListeners();

    return this;
  };
  /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */


  Scope.clone = function (scope) {
    var newScope = new Scope();
    Object.assign(newScope, scope, {
      _scopeListeners: []
    });

    if (scope) {
      newScope._breadcrumbs = tslib_1.__spread(scope._breadcrumbs);
      newScope._tags = tslib_1.__assign({}, scope._tags);
      newScope._extra = tslib_1.__assign({}, scope._extra);
      newScope._context = tslib_1.__assign({}, scope._context);
      newScope._user = scope._user;
      newScope._level = scope._level;
      newScope._fingerprint = scope._fingerprint;
      newScope._eventProcessors = tslib_1.__spread(scope._eventProcessors);
    }

    return newScope;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.clear = function () {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._context = {};
    this._level = undefined;
    this._fingerprint = undefined;

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
    var timestamp = new Date().getTime() / 1000;

    var mergedBreadcrumb = tslib_1.__assign({
      timestamp: timestamp
    }, breadcrumb);

    this._breadcrumbs = maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0 ? tslib_1.__spread(this._breadcrumbs, [(0, _utils.normalize)(mergedBreadcrumb)]).slice(-maxBreadcrumbs) : tslib_1.__spread(this._breadcrumbs, [(0, _utils.normalize)(mergedBreadcrumb)]);

    this._notifyScopeListeners();

    return this;
  };
  /**
   * @inheritDoc
   */


  Scope.prototype.clearBreadcrumbs = function () {
    this._breadcrumbs = [];

    this._notifyScopeListeners();

    return this;
  };
  /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */


  Scope.prototype._applyFingerprint = function (event) {
    // Make sure it's an array first and we actually have something in place
    event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : []; // If we have something on the scope, then merge it with event

    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint);
    } // If we have no data at all, remove empty array default


    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint;
    }
  };
  /**
   * Applies the current context and fingerprint to the event.
   * Note that breadcrumbs will be added by the client.
   * Also if the event has already breadcrumbs on it, we do not merge them.
   * @param event Event
   * @param hint May contain additional informartion about the original exception.
   * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
   * @hidden
   */


  Scope.prototype.applyToEvent = function (event, hint) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = tslib_1.__assign({}, this._extra, event.extra);
    }

    if (this._tags && Object.keys(this._tags).length) {
      event.tags = tslib_1.__assign({}, this._tags, event.tags);
    }

    if (this._user && Object.keys(this._user).length) {
      event.user = tslib_1.__assign({}, this._user, event.user);
    }

    if (this._context && Object.keys(this._context).length) {
      event.contexts = tslib_1.__assign({}, this._context, event.contexts);
    }

    if (this._level) {
      event.level = this._level;
    }

    this._applyFingerprint(event);

    event.breadcrumbs = tslib_1.__spread(event.breadcrumbs || [], this._breadcrumbs);
    event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
    return this._notifyEventProcessors(tslib_1.__spread(getGlobalEventProcessors(), this._eventProcessors), event, hint);
  };

  return Scope;
}();

exports.Scope = Scope;

/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
  var global = (0, _utils.getGlobalObject)();
  global.__SENTRY__ = global.__SENTRY__ || {};
  global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
  return global.__SENTRY__.globalEventProcessors;
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */


function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}
},{"tslib":"CvJj","@sentry/utils":"ZEwu"}],"k4QB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainCarrier = getMainCarrier;
exports.makeMain = makeMain;
exports.getCurrentHub = getCurrentHub;
exports.getHubFromCarrier = getHubFromCarrier;
exports.setHubOnCarrier = setHubOnCarrier;
exports.Hub = exports.API_VERSION = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _utils = require("@sentry/utils");

var _scope = require("./scope");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be incresed when the global interface
 * changes a and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 3;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */

exports.API_VERSION = API_VERSION;
var DEFAULT_BREADCRUMBS = 30;
/**
 * Absolute maximum number of breadcrumbs added to an event. The
 * `maxBreadcrumbs` option cannot be higher than this value.
 */

var MAX_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */

var Hub =
/** @class */
function () {
  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */
  function Hub(client, scope, _version) {
    if (scope === void 0) {
      scope = new _scope.Scope();
    }

    if (_version === void 0) {
      _version = API_VERSION;
    }

    this._version = _version;
    /** Is a {@link Layer}[] containing the client and scope */

    this._stack = [];

    this._stack.push({
      client: client,
      scope: scope
    });
  }
  /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */


  Hub.prototype._invokeClient = function (method) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var _a;

    var top = this.getStackTop();

    if (top && top.client && top.client[method]) {
      (_a = top.client)[method].apply(_a, tslib_1.__spread(args, [top.scope]));
    }
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.isOlderThan = function (version) {
    return this._version < version;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.bindClient = function (client) {
    var top = this.getStackTop();
    top.client = client;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.pushScope = function () {
    // We want to clone the content of prev scope
    var stack = this.getStack();
    var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;

    var scope = _scope.Scope.clone(parentScope);

    this.getStack().push({
      client: this.getClient(),
      scope: scope
    });
    return scope;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.popScope = function () {
    return this.getStack().pop() !== undefined;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.withScope = function (callback) {
    var scope = this.pushScope();

    try {
      callback(scope);
    } finally {
      this.popScope();
    }
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.getClient = function () {
    return this.getStackTop().client;
  };
  /** Returns the scope of the top stack. */


  Hub.prototype.getScope = function () {
    return this.getStackTop().scope;
  };
  /** Returns the scope stack for domains or the process. */


  Hub.prototype.getStack = function () {
    return this._stack;
  };
  /** Returns the topmost scope layer in the order domain > local > process. */


  Hub.prototype.getStackTop = function () {
    return this._stack[this._stack.length - 1];
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.captureException = function (exception, hint) {
    var eventId = this._lastEventId = (0, _utils.uuid4)();

    this._invokeClient('captureException', exception, tslib_1.__assign({}, hint, {
      event_id: eventId
    }));

    return eventId;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.captureMessage = function (message, level, hint) {
    var eventId = this._lastEventId = (0, _utils.uuid4)();

    this._invokeClient('captureMessage', message, level, tslib_1.__assign({}, hint, {
      event_id: eventId
    }));

    return eventId;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.captureEvent = function (event, hint) {
    var eventId = this._lastEventId = (0, _utils.uuid4)();

    this._invokeClient('captureEvent', event, tslib_1.__assign({}, hint, {
      event_id: eventId
    }));

    return eventId;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.lastEventId = function () {
    return this._lastEventId;
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
    var top = this.getStackTop();

    if (!top.scope || !top.client) {
      return;
    }

    var _a = top.client.getOptions && top.client.getOptions() || {},
        _b = _a.beforeBreadcrumb,
        beforeBreadcrumb = _b === void 0 ? null : _b,
        _c = _a.maxBreadcrumbs,
        maxBreadcrumbs = _c === void 0 ? DEFAULT_BREADCRUMBS : _c;

    if (maxBreadcrumbs <= 0) {
      return;
    }

    var timestamp = new Date().getTime() / 1000;

    var mergedBreadcrumb = tslib_1.__assign({
      timestamp: timestamp
    }, breadcrumb);

    var finalBreadcrumb = beforeBreadcrumb ? (0, _utils.consoleSandbox)(function () {
      return beforeBreadcrumb(mergedBreadcrumb, hint);
    }) : mergedBreadcrumb;

    if (finalBreadcrumb === null) {
      return;
    }

    top.scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.configureScope = function (callback) {
    var top = this.getStackTop();

    if (top.scope && top.client) {
      // TODO: freeze flag
      callback(top.scope);
    }
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.run = function (callback) {
    var oldHub = makeMain(this);

    try {
      callback(this);
    } finally {
      makeMain(oldHub);
    }
  };
  /**
   * @inheritDoc
   */


  Hub.prototype.getIntegration = function (integration) {
    var client = this.getClient();

    if (!client) {
      return null;
    }

    try {
      return client.getIntegration(integration);
    } catch (_oO) {
      _utils.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");

      return null;
    }
  };

  return Hub;
}();

exports.Hub = Hub;

/** Returns the global shim registry. */
function getMainCarrier() {
  var carrier = (0, _utils.getGlobalObject)();
  carrier.__SENTRY__ = carrier.__SENTRY__ || {
    hub: undefined
  };
  return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */


function makeMain(hub) {
  var registry = getMainCarrier();
  var oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */


function getCurrentHub() {
  // Get main carrier (global for every environment)
  var registry = getMainCarrier(); // If there's no hub, or its an old API, assign a new one

  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  } // Prefer domains over global if they are there


  try {
    // We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
    // We do not want this to happen, we need to try to `require` the domain node module and fail if we are in browser
    // for example so we do not have to shim it and use `getCurrentHub` universally.
    var domain = (0, _utils.dynamicRequire)(module, 'domain');
    var activeDomain = domain.active; // If there no active domain, just return global hub

    if (!activeDomain) {
      return getHubFromCarrier(registry);
    } // If there's no hub on current domain, or its an old API, assign a new one


    if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
      var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
      setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope.Scope.clone(registryHubTopStack.scope)));
    } // Return hub that lives on a domain


    return getHubFromCarrier(activeDomain);
  } catch (_Oo) {
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
  }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */


function hasHubOnCarrier(carrier) {
  if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
    return true;
  }

  return false;
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */


function getHubFromCarrier(carrier) {
  if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
    return carrier.__SENTRY__.hub;
  }

  carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  carrier.__SENTRY__.hub = new Hub();
  return carrier.__SENTRY__.hub;
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 */


function setHubOnCarrier(carrier, hub) {
  if (!carrier) {
    return false;
  }

  carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  carrier.__SENTRY__.hub = hub;
  return true;
}
},{"tslib":"CvJj","@sentry/utils":"ZEwu","./scope":"+pNp"}],"g/pV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addGlobalEventProcessor", {
  enumerable: true,
  get: function () {
    return _scope.addGlobalEventProcessor;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function () {
    return _scope.Scope;
  }
});
Object.defineProperty(exports, "getCurrentHub", {
  enumerable: true,
  get: function () {
    return _hub.getCurrentHub;
  }
});
Object.defineProperty(exports, "getHubFromCarrier", {
  enumerable: true,
  get: function () {
    return _hub.getHubFromCarrier;
  }
});
Object.defineProperty(exports, "getMainCarrier", {
  enumerable: true,
  get: function () {
    return _hub.getMainCarrier;
  }
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function () {
    return _hub.Hub;
  }
});
Object.defineProperty(exports, "makeMain", {
  enumerable: true,
  get: function () {
    return _hub.makeMain;
  }
});
Object.defineProperty(exports, "setHubOnCarrier", {
  enumerable: true,
  get: function () {
    return _hub.setHubOnCarrier;
  }
});

var _scope = require("./scope");

var _hub = require("./hub");
},{"./scope":"+pNp","./hub":"k4QB"}],"7Ys6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureException = captureException;
exports.captureMessage = captureMessage;
exports.captureEvent = captureEvent;
exports.addBreadcrumb = addBreadcrumb;
exports.configureScope = configureScope;
exports.withScope = withScope;
exports._callOnClient = _callOnClient;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _hub = require("@sentry/hub");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
function callOnHub(method) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var hub = (0, _hub.getCurrentHub)();

  if (hub && hub[method]) {
    // tslint:disable-next-line:no-unsafe-any
    return hub[method].apply(hub, tslib_1.__spread(args));
  }

  throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */


function captureException(exception) {
  var syntheticException;

  try {
    throw new Error('Sentry syntheticException');
  } catch (exception) {
    syntheticException = exception;
  }

  return callOnHub('captureException', exception, {
    originalException: exception,
    syntheticException: syntheticException
  });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */


function captureMessage(message, level) {
  var syntheticException;

  try {
    throw new Error(message);
  } catch (exception) {
    syntheticException = exception;
  }

  return callOnHub('captureMessage', message, level, {
    originalException: message,
    syntheticException: syntheticException
  });
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */


function captureEvent(event) {
  return callOnHub('captureEvent', event);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */


function addBreadcrumb(breadcrumb) {
  callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */


function configureScope(callback) {
  callOnHub('configureScope', callback);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */


function withScope(callback) {
  callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 */


function _callOnClient(method) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  callOnHub.apply(void 0, tslib_1.__spread(['_invokeClient', method], args));
}
},{"tslib":"CvJj","@sentry/hub":"g/pV"}],"fQsA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dsn = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
/** Error message */

var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */

var Dsn =
/** @class */
function () {
  /** Creates a new Dsn component */
  function Dsn(from) {
    if (typeof from === 'string') {
      this._fromString(from);
    } else {
      this._fromComponents(from);
    }

    this._validate();
  }
  /**
   * Renders the string representation of this Dsn.
   *
   * By default, this will render the public representation without the password
   * component. To get the deprecated private _representation, set `withPassword`
   * to true.
   *
   * @param withPassword When set to true, the password will be included.
   */


  Dsn.prototype.toString = function (withPassword) {
    if (withPassword === void 0) {
      withPassword = false;
    } // tslint:disable-next-line:no-this-assignment


    var _a = this,
        host = _a.host,
        path = _a.path,
        pass = _a.pass,
        port = _a.port,
        projectId = _a.projectId,
        protocol = _a.protocol,
        user = _a.user;

    return protocol + "://" + user + (withPassword && pass ? ":" + pass : '') + ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId);
  };
  /** Parses a string into this Dsn. */


  Dsn.prototype._fromString = function (str) {
    var match = DSN_REGEX.exec(str);

    if (!match) {
      throw new _utils.SentryError(ERROR_MESSAGE);
    }

    var _a = tslib_1.__read(match.slice(1), 6),
        protocol = _a[0],
        user = _a[1],
        _b = _a[2],
        pass = _b === void 0 ? '' : _b,
        host = _a[3],
        _c = _a[4],
        port = _c === void 0 ? '' : _c,
        lastPath = _a[5];

    var path = '';
    var projectId = lastPath;
    var split = projectId.split('/');

    if (split.length > 1) {
      path = split.slice(0, -1).join('/');
      projectId = split.pop();
    }

    Object.assign(this, {
      host: host,
      pass: pass,
      path: path,
      projectId: projectId,
      port: port,
      protocol: protocol,
      user: user
    });
  };
  /** Maps Dsn components into this instance. */


  Dsn.prototype._fromComponents = function (components) {
    this.protocol = components.protocol;
    this.user = components.user;
    this.pass = components.pass || '';
    this.host = components.host;
    this.port = components.port || '';
    this.path = components.path || '';
    this.projectId = components.projectId;
  };
  /** Validates this Dsn and throws on error. */


  Dsn.prototype._validate = function () {
    var _this = this;

    ['protocol', 'user', 'host', 'projectId'].forEach(function (component) {
      if (!_this[component]) {
        throw new _utils.SentryError(ERROR_MESSAGE);
      }
    });

    if (this.protocol !== 'http' && this.protocol !== 'https') {
      throw new _utils.SentryError(ERROR_MESSAGE);
    }

    if (this.port && Number.isNaN(parseInt(this.port, 10))) {
      throw new _utils.SentryError(ERROR_MESSAGE);
    }
  };

  return Dsn;
}();

exports.Dsn = Dsn;
},{"tslib":"CvJj","@sentry/utils":"ZEwu"}],"Oe72":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = void 0;

var _utils = require("@sentry/utils");

var _dsn = require("./dsn");

var SENTRY_API_VERSION = '7';
/** Helper class to provide urls to different Sentry endpoints. */

var API =
/** @class */
function () {
  /** Create a new instance of API */
  function API(dsn) {
    this.dsn = dsn;
    this._dsnObject = new _dsn.Dsn(dsn);
  }
  /** Returns the Dsn object. */


  API.prototype.getDsn = function () {
    return this._dsnObject;
  };
  /** Returns a string with auth headers in the url to the store endpoint. */


  API.prototype.getStoreEndpoint = function () {
    return "" + this._getBaseUrl() + this.getStoreEndpointPath();
  };
  /** Returns the store endpoint with auth added in url encoded. */


  API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    var dsn = this._dsnObject;
    var auth = {
      sentry_key: dsn.user,
      sentry_version: SENTRY_API_VERSION
    }; // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
    // to avoid preflight CORS requests

    return this.getStoreEndpoint() + "?" + (0, _utils.urlEncode)(auth);
  };
  /** Returns the base path of the url including the port. */


  API.prototype._getBaseUrl = function () {
    var dsn = this._dsnObject;
    var protocol = dsn.protocol ? dsn.protocol + ":" : '';
    var port = dsn.port ? ":" + dsn.port : '';
    return protocol + "//" + dsn.host + port;
  };
  /** Returns only the path component for the store endpoint. */


  API.prototype.getStoreEndpointPath = function () {
    var dsn = this._dsnObject;
    return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
  };
  /** Returns an object that can be used in request headers. */


  API.prototype.getRequestHeaders = function (clientName, clientVersion) {
    var dsn = this._dsnObject;
    var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
    header.push("sentry_timestamp=" + new Date().getTime());
    header.push("sentry_client=" + clientName + "/" + clientVersion);
    header.push("sentry_key=" + dsn.user);

    if (dsn.pass) {
      header.push("sentry_secret=" + dsn.pass);
    }

    return {
      'Content-Type': 'application/json',
      'X-Sentry-Auth': header.join(', ')
    };
  };
  /** Returns the url to the report dialog endpoint. */


  API.prototype.getReportDialogEndpoint = function (dialogOptions) {
    if (dialogOptions === void 0) {
      dialogOptions = {};
    }

    var dsn = this._dsnObject;
    var endpoint = "" + this._getBaseUrl() + (dsn.path ? "/" + dsn.path : '') + "/api/embed/error-page/";
    var encodedOptions = [];
    encodedOptions.push("dsn=" + dsn.toString());

    for (var key in dialogOptions) {
      if (key === 'user') {
        if (!dialogOptions.user) {
          continue;
        }

        if (dialogOptions.user.name) {
          encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
        }

        if (dialogOptions.user.email) {
          encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
        }
      } else {
        encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
      }
    }

    if (encodedOptions.length) {
      return endpoint + "?" + encodedOptions.join('&');
    }

    return endpoint;
  };

  return API;
}();

exports.API = API;
},{"@sentry/utils":"ZEwu","./dsn":"fQsA"}],"2CNe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntegrationsToSetup = getIntegrationsToSetup;
exports.setupIntegration = setupIntegration;
exports.setupIntegrations = setupIntegrations;
exports.installedIntegrations = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _hub = require("@sentry/hub");

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var installedIntegrations = [];
/** Gets integration to install */

exports.installedIntegrations = installedIntegrations;

function getIntegrationsToSetup(options) {
  var defaultIntegrations = options.defaultIntegrations && tslib_1.__spread(options.defaultIntegrations) || [];
  var userIntegrations = options.integrations;
  var integrations = [];

  if (Array.isArray(userIntegrations)) {
    var userIntegrationsNames_1 = userIntegrations.map(function (i) {
      return i.name;
    });
    var pickedIntegrationsNames_1 = []; // Leave only unique default integrations, that were not overridden with provided user integrations

    defaultIntegrations.forEach(function (defaultIntegration) {
      if (userIntegrationsNames_1.indexOf(defaultIntegration.name) === -1 && pickedIntegrationsNames_1.indexOf(defaultIntegration.name) === -1) {
        integrations.push(defaultIntegration);
        pickedIntegrationsNames_1.push(defaultIntegration.name);
      }
    }); // Don't add same user integration twice

    userIntegrations.forEach(function (userIntegration) {
      if (pickedIntegrationsNames_1.indexOf(userIntegration.name) === -1) {
        integrations.push(userIntegration);
        pickedIntegrationsNames_1.push(userIntegration.name);
      }
    });
  } else if (typeof userIntegrations === 'function') {
    integrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(integrations) ? integrations : [integrations];
  } else {
    return tslib_1.__spread(defaultIntegrations);
  }

  return integrations;
}
/** Setup given integration */


function setupIntegration(integration) {
  if (installedIntegrations.indexOf(integration.name) !== -1) {
    return;
  }

  integration.setupOnce(_hub.addGlobalEventProcessor, _hub.getCurrentHub);
  installedIntegrations.push(integration.name);

  _utils.logger.log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */


function setupIntegrations(options) {
  var integrations = {};
  getIntegrationsToSetup(options).forEach(function (integration) {
    integrations[integration.name] = integration;
    setupIntegration(integration);
  });
  return integrations;
}
},{"tslib":"CvJj","@sentry/hub":"g/pV","@sentry/utils":"ZEwu"}],"dNnA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseClient = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _utils = require("@sentry/utils");

var _dsn = require("./dsn");

var _integration = require("./integration");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient.prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient =
/** @class */
function () {
  /**
   * Initializes this client instance.
   *
   * @param backendClass A constructor function to create the backend.
   * @param options Options for the client.
   */
  function BaseClient(backendClass, options) {
    /** Is the client still processing a call? */
    this._processing = false;
    this._backend = new backendClass(options);
    this._options = options;

    if (options.dsn) {
      this._dsn = new _dsn.Dsn(options.dsn);
    }

    this._integrations = (0, _integration.setupIntegrations)(this._options);
  }
  /**
   * @inheritDoc
   */


  BaseClient.prototype.captureException = function (exception, hint, scope) {
    var _this = this;

    var eventId = hint && hint.event_id;
    this._processing = true;

    this._getBackend().eventFromException(exception, hint).then(function (event) {
      return _this._processEvent(event, hint, scope);
    }).then(function (finalEvent) {
      // We need to check for finalEvent in case beforeSend returned null
      eventId = finalEvent && finalEvent.event_id;
      _this._processing = false;
    }).catch(function (reason) {
      _utils.logger.error(reason);

      _this._processing = false;
    });

    return eventId;
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
    var _this = this;

    var eventId = hint && hint.event_id;
    this._processing = true;
    var promisedEvent = (0, _utils.isPrimitive)(message) ? this._getBackend().eventFromMessage("" + message, level, hint) : this._getBackend().eventFromException(message, hint);
    promisedEvent.then(function (event) {
      return _this._processEvent(event, hint, scope);
    }).then(function (finalEvent) {
      // We need to check for finalEvent in case beforeSend returned null
      eventId = finalEvent && finalEvent.event_id;
      _this._processing = false;
    }).catch(function (reason) {
      _utils.logger.error(reason);

      _this._processing = false;
    });
    return eventId;
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.captureEvent = function (event, hint, scope) {
    var _this = this;

    var eventId = hint && hint.event_id;
    this._processing = true;

    this._processEvent(event, hint, scope).then(function (finalEvent) {
      // We need to check for finalEvent in case beforeSend returned null
      eventId = finalEvent && finalEvent.event_id;
      _this._processing = false;
    }).catch(function (reason) {
      _utils.logger.error(reason);

      _this._processing = false;
    });

    return eventId;
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.getDsn = function () {
    return this._dsn;
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.getOptions = function () {
    return this._options;
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.flush = function (timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var clientReady, transportFlushed;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this._isClientProcessing(timeout)];

          case 1:
            clientReady = _a.sent();

            if (this._processingInterval) {
              clearInterval(this._processingInterval);
            }

            return [4
            /*yield*/
            , this._getBackend().getTransport().close(timeout)];

          case 2:
            transportFlushed = _a.sent();
            return [2
            /*return*/
            , clientReady && transportFlushed];
        }
      });
    });
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.close = function (timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var result;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.flush(timeout)];

          case 1:
            result = _a.sent();
            this.getOptions().enabled = false;
            return [2
            /*return*/
            , result];
        }
      });
    });
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.getIntegrations = function () {
    return this._integrations || {};
  };
  /**
   * @inheritDoc
   */


  BaseClient.prototype.getIntegration = function (integration) {
    try {
      return this._integrations[integration.id] || null;
    } catch (_oO) {
      _utils.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");

      return null;
    }
  };
  /** Waits for the client to be done with processing. */


  BaseClient.prototype._isClientProcessing = function (timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var _this = this;

      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , new Promise(function (resolve) {
          var ticked = 0;
          var tick = 1;

          if (_this._processingInterval) {
            clearInterval(_this._processingInterval);
          }

          _this._processingInterval = setInterval(function () {
            if (!_this._processing) {
              resolve(true);
            } else {
              ticked += tick;

              if (timeout && ticked >= timeout) {
                resolve(false);
              }
            }
          }, tick);
        })];
      });
    });
  };
  /** Returns the current backend. */


  BaseClient.prototype._getBackend = function () {
    return this._backend;
  };
  /** Determines whether this SDK is enabled and a valid Dsn is present. */


  BaseClient.prototype._isEnabled = function () {
    return this.getOptions().enabled !== false && this._dsn !== undefined;
  };
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional informartion about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */


  BaseClient.prototype._prepareEvent = function (event, scope, hint) {
    var _a = this.getOptions(),
        environment = _a.environment,
        release = _a.release,
        dist = _a.dist,
        _b = _a.maxValueLength,
        maxValueLength = _b === void 0 ? 250 : _b;

    var prepared = tslib_1.__assign({}, event);

    if (prepared.environment === undefined && environment !== undefined) {
      prepared.environment = environment;
    }

    if (prepared.release === undefined && release !== undefined) {
      prepared.release = release;
    }

    if (prepared.dist === undefined && dist !== undefined) {
      prepared.dist = dist;
    }

    if (prepared.message) {
      prepared.message = (0, _utils.truncate)(prepared.message, maxValueLength);
    }

    var exception = prepared.exception && prepared.exception.values && prepared.exception.values[0];

    if (exception && exception.value) {
      exception.value = (0, _utils.truncate)(exception.value, maxValueLength);
    }

    var request = prepared.request;

    if (request && request.url) {
      request.url = (0, _utils.truncate)(request.url, maxValueLength);
    }

    if (prepared.event_id === undefined) {
      prepared.event_id = (0, _utils.uuid4)();
    }

    this._addIntegrations(prepared.sdk); // We prepare the result here with a resolved Event.


    var result = _utils.SyncPromise.resolve(prepared); // This should be the last thing called, since we want that
    // {@link Hub.addEventProcessor} gets the finished prepared event.


    if (scope) {
      // In case we have a hub we reassign it.
      result = scope.applyToEvent(prepared, hint);
    }

    return result;
  };
  /**
   * This function adds all used integrations to the SDK info in the event.
   * @param sdkInfo The sdkInfo of the event that will be filled with all integrations.
   */


  BaseClient.prototype._addIntegrations = function (sdkInfo) {
    var integrationsArray = Object.keys(this._integrations);

    if (sdkInfo && integrationsArray.length > 0) {
      sdkInfo.integrations = integrationsArray;
    }
  };
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional informartion about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */


  BaseClient.prototype._processEvent = function (event, hint, scope) {
    var _this = this;

    var _a = this.getOptions(),
        beforeSend = _a.beforeSend,
        sampleRate = _a.sampleRate;

    if (!this._isEnabled()) {
      return _utils.SyncPromise.reject('SDK not enabled, will not send event.');
    } // 1.0 === 100% events are sent
    // 0.0 === 0% events are sent


    if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
      return _utils.SyncPromise.reject('This event has been sampled, will not send event.');
    }

    return new _utils.SyncPromise(function (resolve, reject) {
      _this._prepareEvent(event, scope, hint).then(function (prepared) {
        if (prepared === null) {
          reject('An event processor returned null, will not send event.');
          return;
        }

        var finalEvent = prepared;

        try {
          var isInternalException = hint && hint.data && hint.data.__sentry__ === true;

          if (isInternalException || !beforeSend) {
            _this._getBackend().sendEvent(finalEvent);

            resolve(finalEvent);
            return;
          }

          var beforeSendResult = beforeSend(prepared, hint);

          if (typeof beforeSendResult === 'undefined') {
            _utils.logger.error('`beforeSend` method has to return `null` or a valid event.');
          } else if ((0, _utils.isThenable)(beforeSendResult)) {
            _this._handleAsyncBeforeSend(beforeSendResult, resolve, reject);
          } else {
            finalEvent = beforeSendResult;

            if (finalEvent === null) {
              _utils.logger.log('`beforeSend` returned `null`, will not send event.');

              resolve(null);
              return;
            } // From here on we are really async


            _this._getBackend().sendEvent(finalEvent);

            resolve(finalEvent);
          }
        } catch (exception) {
          _this.captureException(exception, {
            data: {
              __sentry__: true
            },
            originalException: exception
          });

          reject('`beforeSend` throw an error, will not send event.');
        }
      });
    });
  };
  /**
   * Resolves before send Promise and calls resolve/reject on parent SyncPromise.
   */


  BaseClient.prototype._handleAsyncBeforeSend = function (beforeSend, resolve, reject) {
    var _this = this;

    beforeSend.then(function (processedEvent) {
      if (processedEvent === null) {
        reject('`beforeSend` returned `null`, will not send event.');
        return;
      } // From here on we are really async


      _this._getBackend().sendEvent(processedEvent);

      resolve(processedEvent);
    }).catch(function (e) {
      reject("beforeSend rejected with " + e);
    });
  };

  return BaseClient;
}();

exports.BaseClient = BaseClient;
},{"tslib":"CvJj","@sentry/utils":"ZEwu","./dsn":"fQsA","./integration":"2CNe"}],"lWXV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoopTransport = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _types = require("@sentry/types");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** Noop transport */
var NoopTransport =
/** @class */
function () {
  function NoopTransport() {}
  /**
   * @inheritDoc
   */


  NoopTransport.prototype.sendEvent = function (_) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve({
          reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
          status: _types.Status.Skipped
        })];
      });
    });
  };
  /**
   * @inheritDoc
   */


  NoopTransport.prototype.close = function (_) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , Promise.resolve(true)];
      });
    });
  };

  return NoopTransport;
}();

exports.NoopTransport = NoopTransport;
},{"tslib":"CvJj","@sentry/types":"WE5h"}],"v5M4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseBackend = void 0;

var _utils = require("@sentry/utils");

var _noop = require("./transports/noop");

/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend =
/** @class */
function () {
  /** Creates a new backend instance. */
  function BaseBackend(options) {
    this._options = options;

    if (!this._options.dsn) {
      _utils.logger.warn('No DSN provided, backend will not do anything.');
    }

    this._transport = this._setupTransport();
  }
  /**
   * Sets up the transport so it can be used later to send requests.
   */


  BaseBackend.prototype._setupTransport = function () {
    return new _noop.NoopTransport();
  };
  /**
   * @inheritDoc
   */


  BaseBackend.prototype.eventFromException = function (_exception, _hint) {
    throw new _utils.SentryError('Backend has to implement `eventFromException` method');
  };
  /**
   * @inheritDoc
   */


  BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
    throw new _utils.SentryError('Backend has to implement `eventFromMessage` method');
  };
  /**
   * @inheritDoc
   */


  BaseBackend.prototype.sendEvent = function (event) {
    this._transport.sendEvent(event).catch(function (reason) {
      _utils.logger.error("Error while sending event: " + reason);
    });
  };
  /**
   * @inheritDoc
   */


  BaseBackend.prototype.getTransport = function () {
    return this._transport;
  };

  return BaseBackend;
}();

exports.BaseBackend = BaseBackend;
},{"@sentry/utils":"ZEwu","./transports/noop":"lWXV"}],"nOFi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAndBind = initAndBind;

var _hub = require("@sentry/hub");

var _utils = require("@sentry/utils");

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instanciate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    _utils.logger.enable();
  }

  (0, _hub.getCurrentHub)().bindClient(new clientClass(options));
}
},{"@sentry/hub":"g/pV","@sentry/utils":"ZEwu"}],"Ys6H":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionToString = void 0;
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */

var FunctionToString =
/** @class */
function () {
  function FunctionToString() {
    /**
     * @inheritDoc
     */
    this.name = FunctionToString.id;
  }
  /**
   * @inheritDoc
   */


  FunctionToString.prototype.setupOnce = function () {
    originalFunctionToString = Function.prototype.toString;

    Function.prototype.toString = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var context = this.__sentry__ ? this.__sentry_original__ : this; // tslint:disable-next-line:no-unsafe-any

      return originalFunctionToString.apply(context, args);
    };
  };
  /**
   * @inheritDoc
   */


  FunctionToString.id = 'FunctionToString';
  return FunctionToString;
}();

exports.FunctionToString = FunctionToString;
},{}],"WUYI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InboundFilters = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _hub = require("@sentry/hub");

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */

var InboundFilters =
/** @class */
function () {
  function InboundFilters(_options) {
    if (_options === void 0) {
      _options = {};
    }

    this._options = _options;
    /**
     * @inheritDoc
     */

    this.name = InboundFilters.id;
  }
  /**
   * @inheritDoc
   */


  InboundFilters.prototype.setupOnce = function () {
    (0, _hub.addGlobalEventProcessor)(function (event) {
      var hub = (0, _hub.getCurrentHub)();

      if (!hub) {
        return event;
      }

      var self = hub.getIntegration(InboundFilters);

      if (self) {
        var client = hub.getClient();
        var clientOptions = client ? client.getOptions() : {};

        var options = self._mergeOptions(clientOptions);

        if (self._shouldDropEvent(event, options)) {
          return null;
        }
      }

      return event;
    });
  };
  /** JSDoc */


  InboundFilters.prototype._shouldDropEvent = function (event, options) {
    if (this._isSentryError(event, options)) {
      _utils.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, _utils.getEventDescription)(event));

      return true;
    }

    if (this._isIgnoredError(event, options)) {
      _utils.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, _utils.getEventDescription)(event));

      return true;
    }

    if (this._isBlacklistedUrl(event, options)) {
      _utils.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + (0, _utils.getEventDescription)(event) + ".\nUrl: " + this._getEventFilterUrl(event));

      return true;
    }

    if (!this._isWhitelistedUrl(event, options)) {
      _utils.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + (0, _utils.getEventDescription)(event) + ".\nUrl: " + this._getEventFilterUrl(event));

      return true;
    }

    return false;
  };
  /** JSDoc */


  InboundFilters.prototype._isSentryError = function (event, options) {
    if (options === void 0) {
      options = {};
    }

    if (!options.ignoreInternal) {
      return false;
    }

    try {
      // tslint:disable-next-line:no-unsafe-any
      return event.exception.values[0].type === 'SentryError';
    } catch (_oO) {
      return false;
    }
  };
  /** JSDoc */


  InboundFilters.prototype._isIgnoredError = function (event, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (!options.ignoreErrors || !options.ignoreErrors.length) {
      return false;
    }

    return this._getPossibleEventMessages(event).some(function (message) {
      // Not sure why TypeScript complains here...
      return options.ignoreErrors.some(function (pattern) {
        return _this._isMatchingPattern(message, pattern);
      });
    });
  };
  /** JSDoc */


  InboundFilters.prototype._isBlacklistedUrl = function (event, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    } // TODO: Use Glob instead?


    if (!options.blacklistUrls || !options.blacklistUrls.length) {
      return false;
    }

    var url = this._getEventFilterUrl(event);

    return !url ? false : options.blacklistUrls.some(function (pattern) {
      return _this._isMatchingPattern(url, pattern);
    });
  };
  /** JSDoc */


  InboundFilters.prototype._isWhitelistedUrl = function (event, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    } // TODO: Use Glob instead?


    if (!options.whitelistUrls || !options.whitelistUrls.length) {
      return true;
    }

    var url = this._getEventFilterUrl(event);

    return !url ? true : options.whitelistUrls.some(function (pattern) {
      return _this._isMatchingPattern(url, pattern);
    });
  };
  /** JSDoc */


  InboundFilters.prototype._mergeOptions = function (clientOptions) {
    if (clientOptions === void 0) {
      clientOptions = {};
    }

    return {
      blacklistUrls: tslib_1.__spread(this._options.blacklistUrls || [], clientOptions.blacklistUrls || []),
      ignoreErrors: tslib_1.__spread(this._options.ignoreErrors || [], clientOptions.ignoreErrors || [], DEFAULT_IGNORE_ERRORS),
      ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
      whitelistUrls: tslib_1.__spread(this._options.whitelistUrls || [], clientOptions.whitelistUrls || [])
    };
  };
  /** JSDoc */


  InboundFilters.prototype._isMatchingPattern = function (value, pattern) {
    if ((0, _utils.isRegExp)(pattern)) {
      return pattern.test(value);
    }

    if (typeof pattern === 'string') {
      return value.includes(pattern);
    }

    return false;
  };
  /** JSDoc */


  InboundFilters.prototype._getPossibleEventMessages = function (event) {
    if (event.message) {
      return [event.message];
    }

    if (event.exception) {
      try {
        // tslint:disable-next-line:no-unsafe-any
        var _a = event.exception.values[0],
            type = _a.type,
            value = _a.value;
        return ["" + value, type + ": " + value];
      } catch (oO) {
        _utils.logger.error("Cannot extract message for event " + (0, _utils.getEventDescription)(event));

        return [];
      }
    }

    return [];
  };
  /** JSDoc */


  InboundFilters.prototype._getEventFilterUrl = function (event) {
    try {
      if (event.stacktrace) {
        // tslint:disable:no-unsafe-any
        var frames_1 = event.stacktrace.frames;
        return frames_1[frames_1.length - 1].filename;
      }

      if (event.exception) {
        // tslint:disable:no-unsafe-any
        var frames_2 = event.exception.values[0].stacktrace.frames;
        return frames_2[frames_2.length - 1].filename;
      }

      return null;
    } catch (oO) {
      _utils.logger.error("Cannot extract url for event " + (0, _utils.getEventDescription)(event));

      return null;
    }
  };
  /**
   * @inheritDoc
   */


  InboundFilters.id = 'InboundFilters';
  return InboundFilters;
}();

exports.InboundFilters = InboundFilters;
},{"tslib":"CvJj","@sentry/hub":"g/pV","@sentry/utils":"ZEwu"}],"D5PU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FunctionToString", {
  enumerable: true,
  get: function () {
    return _functiontostring.FunctionToString;
  }
});
Object.defineProperty(exports, "InboundFilters", {
  enumerable: true,
  get: function () {
    return _inboundfilters.InboundFilters;
  }
});

var _functiontostring = require("./functiontostring");

var _inboundfilters = require("./inboundfilters");
},{"./functiontostring":"Ys6H","./inboundfilters":"WUYI"}],"o7YD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addBreadcrumb", {
  enumerable: true,
  get: function () {
    return _minimal.addBreadcrumb;
  }
});
Object.defineProperty(exports, "captureException", {
  enumerable: true,
  get: function () {
    return _minimal.captureException;
  }
});
Object.defineProperty(exports, "captureEvent", {
  enumerable: true,
  get: function () {
    return _minimal.captureEvent;
  }
});
Object.defineProperty(exports, "captureMessage", {
  enumerable: true,
  get: function () {
    return _minimal.captureMessage;
  }
});
Object.defineProperty(exports, "configureScope", {
  enumerable: true,
  get: function () {
    return _minimal.configureScope;
  }
});
Object.defineProperty(exports, "withScope", {
  enumerable: true,
  get: function () {
    return _minimal.withScope;
  }
});
Object.defineProperty(exports, "addGlobalEventProcessor", {
  enumerable: true,
  get: function () {
    return _hub.addGlobalEventProcessor;
  }
});
Object.defineProperty(exports, "getCurrentHub", {
  enumerable: true,
  get: function () {
    return _hub.getCurrentHub;
  }
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function () {
    return _hub.Hub;
  }
});
Object.defineProperty(exports, "getHubFromCarrier", {
  enumerable: true,
  get: function () {
    return _hub.getHubFromCarrier;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function () {
    return _hub.Scope;
  }
});
Object.defineProperty(exports, "API", {
  enumerable: true,
  get: function () {
    return _api.API;
  }
});
Object.defineProperty(exports, "BaseClient", {
  enumerable: true,
  get: function () {
    return _baseclient.BaseClient;
  }
});
Object.defineProperty(exports, "BaseBackend", {
  enumerable: true,
  get: function () {
    return _basebackend.BaseBackend;
  }
});
Object.defineProperty(exports, "Dsn", {
  enumerable: true,
  get: function () {
    return _dsn.Dsn;
  }
});
Object.defineProperty(exports, "initAndBind", {
  enumerable: true,
  get: function () {
    return _sdk.initAndBind;
  }
});
Object.defineProperty(exports, "NoopTransport", {
  enumerable: true,
  get: function () {
    return _noop.NoopTransport;
  }
});
exports.Integrations = void 0;

var _minimal = require("@sentry/minimal");

var _hub = require("@sentry/hub");

var _api = require("./api");

var _baseclient = require("./baseclient");

var _basebackend = require("./basebackend");

var _dsn = require("./dsn");

var _sdk = require("./sdk");

var _noop = require("./transports/noop");

var Integrations = _interopRequireWildcard(require("./integrations"));

exports.Integrations = Integrations;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"@sentry/minimal":"7Ys6","@sentry/hub":"g/pV","./api":"Oe72","./baseclient":"dNnA","./basebackend":"v5M4","./dsn":"fQsA","./sdk":"nOFi","./transports/noop":"lWXV","./integrations":"D5PU"}],"PZj+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._computeStackTrace = exports._installGlobalUnhandledRejectionHandler = exports._installGlobalHandler = exports._subscribe = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// tslint:disable

/**
 * TraceKit - Cross brower stack traces
 *
 * This was originally forked from github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 *
 * NOTE: Last merge with upstream repository
 * Jul 11,2018 - #f03357c
 *
 * https://github.com/csnover/TraceKit
 * @license MIT
 * @namespace TraceKit
 */
var window = (0, _utils.getGlobalObject)();
var TraceKit = {
  _report: false,
  _collectWindowErrors: false,
  _computeStackTrace: false,
  _linesOfContext: false
}; // var TraceKit: TraceKitInterface = {};
// var TraceKit = {};
// global reference to slice

var UNKNOWN_FUNCTION = '?'; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types

var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
/**
 * A better form of hasOwnProperty<br/>
 * Example: `_has(MainHostObject, property) === true/false`
 *
 * @param {Object} object to check property
 * @param {string} key to check
 * @return {Boolean} true if the object has the key and it is not inherited
 */

function _has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
/**
 * A safe form of location.href<br/>
 *
 * @return {string} location.href
 */


function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';
  return document.location.href;
}
/**
 * Cross-browser processing of unhandled exceptions
 *
 * Syntax:
 * ```js
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 * ```
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *     on top frame; column number is not guaranteed
 *   - Opera: full stack trace with line and column numbers
 *   - Chrome: full stack trace with line and column numbers
 *   - Safari: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *   - IE: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit._computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a TraceKit.StackTrace object as described in the
 * TraceKit._computeStackTrace docs.
 *
 * @memberof TraceKit
 * @namespace
 */


TraceKit._report = function reportModuleWrapper() {
  var handlers = [],
      lastException = null,
      lastExceptionStack = null;
  /**
   * Add a crash handler.
   * @param {Function} handler
   * @memberof TraceKit.report
   */

  function _subscribe(handler) {
    // NOTE: We call both handlers manually in browser/integrations/globalhandler.ts
    // So user can choose which one he wants to attach
    // installGlobalHandler();
    // installGlobalUnhandledRejectionHandler();
    handlers.push(handler);
  }
  /**
   * Dispatch stack information to all handlers.
   * @param {TraceKit.StackTrace} stack
   * @param {boolean} isWindowError Is this a top-level window error?
   * @param {Error=} error The error that's being handled (if available, null otherwise)
   * @memberof TraceKit.report
   * @throws An exception if an error occurs while calling an handler.
   */


  function _notifyHandlers(stack, isWindowError, error) {
    var exception = null;

    if (isWindowError && !TraceKit._collectWindowErrors) {
      return;
    }

    for (var i in handlers) {
      if (_has(handlers, i)) {
        try {
          handlers[i](stack, isWindowError, error);
        } catch (inner) {
          exception = inner;
        }
      }
    }

    if (exception) {
      throw exception;
    }
  }

  var _oldOnerrorHandler, _onErrorHandlerInstalled;
  /**
   * Ensures all global unhandled exceptions are recorded.
   * Supported by Gecko and IE.
   * @param {string} message Error message.
   * @param {string} url URL of script that generated the exception.
   * @param {(number|string)} lineNo The line number at which the error occurred.
   * @param {(number|string)=} columnNo The column number at which the error occurred.
   * @param {Error=} errorObj The actual Error object.
   * @memberof TraceKit.report
   */


  function _traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
    var stack = null; // If 'errorObj' is ErrorEvent, get real Error from inside

    errorObj = (0, _utils.isErrorEvent)(errorObj) ? errorObj.error : errorObj; // If 'message' is ErrorEvent, get real message from inside

    message = (0, _utils.isErrorEvent)(message) ? message.message : message;

    if (lastExceptionStack) {
      TraceKit._computeStackTrace._augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);

      processLastException();
    } else if (errorObj && (0, _utils.isError)(errorObj)) {
      stack = TraceKit._computeStackTrace(errorObj);
      stack.mechanism = 'onerror';

      _notifyHandlers(stack, true, errorObj);
    } else {
      var location = {
        url: url,
        line: lineNo,
        column: columnNo
      };
      var name;
      var msg = message; // must be new var or will modify original `arguments`

      if ({}.toString.call(message) === '[object String]') {
        var groups = message.match(ERROR_TYPES_RE);

        if (groups) {
          name = groups[1];
          msg = groups[2];
        }
      }

      location.func = UNKNOWN_FUNCTION;
      location.context = null;
      stack = {
        name: name,
        message: msg,
        mode: 'onerror',
        mechanism: 'onerror',
        stack: [tslib_1.__assign({}, location, {
          // Firefox sometimes doesn't return url correctly and this is an old behavior
          // that I prefer to port here as well.
          // It can be altered only here, as previously it's using `location.url` for other things — Kamil
          url: location.url || getLocationHref()
        })]
      };

      _notifyHandlers(stack, true, null);
    }

    if (_oldOnerrorHandler) {
      // @ts-ignore
      return _oldOnerrorHandler.apply(this, arguments);
    }

    return false;
  }
  /**
   * Ensures all unhandled rejections are recorded.
   * @param {PromiseRejectionEvent} e event.
   * @memberof TraceKit.report
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
   */


  function _traceKitWindowOnUnhandledRejection(e) {
    var err = e && (e.detail ? e.detail.reason : e.reason) || e;

    var stack = TraceKit._computeStackTrace(err);

    stack.mechanism = 'onunhandledrejection';

    _notifyHandlers(stack, true, err);
  }
  /**
   * Install a global onerror handler
   * @memberof TraceKit.report
   */


  function _installGlobalHandler() {
    if (_onErrorHandlerInstalled === true) {
      return;
    }

    _oldOnerrorHandler = window.onerror;
    window.onerror = _traceKitWindowOnError;
    _onErrorHandlerInstalled = true;
  }
  /**
   * Install a global onunhandledrejection handler
   * @memberof TraceKit.report
   */


  function _installGlobalUnhandledRejectionHandler() {
    window.onunhandledrejection = _traceKitWindowOnUnhandledRejection;
  }
  /**
   * Process the most recent exception
   * @memberof TraceKit.report
   */


  function processLastException() {
    var _lastExceptionStack = lastExceptionStack,
        _lastException = lastException;
    lastExceptionStack = null;
    lastException = null;

    _notifyHandlers(_lastExceptionStack, false, _lastException);
  }
  /**
   * Reports an unhandled Error to TraceKit.
   * @param {Error} ex
   * @memberof TraceKit.report
   * @throws An exception if an incomplete stack trace is detected (old IE browsers).
   */


  function _report(ex) {
    if (lastExceptionStack) {
      if (lastException === ex) {
        return; // already caught by an inner catch block, ignore
      } else {
        processLastException();
      }
    }

    var stack = TraceKit._computeStackTrace(ex);

    lastExceptionStack = stack;
    lastException = ex; // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace

    setTimeout(function () {
      if (lastException === ex) {
        processLastException();
      }
    }, stack.incomplete ? 2000 : 0);
    throw ex; // re-throw to propagate to the top level (and cause window.onerror)
  }

  _report._subscribe = _subscribe;
  _report._installGlobalHandler = _installGlobalHandler;
  _report._installGlobalUnhandledRejectionHandler = _installGlobalUnhandledRejectionHandler;
  return _report;
}();
/**
 * An object representing a single stack frame.
 * @typedef {Object} StackFrame
 * @property {string} url The JavaScript or HTML file URL.
 * @property {string} func The function name, or empty for anonymous functions (if guessing did not work).
 * @property {string[]?} args The arguments passed to the function, if known.
 * @property {number=} line The line number, if known.
 * @property {number=} column The column number, if known.
 * @property {string[]} context An array of source code lines; the middle element corresponds to the correct line#.
 * @memberof TraceKit
 */

/**
 * An object representing a JavaScript stack trace.
 * @typedef {Object} StackTrace
 * @property {string} name The name of the thrown exception.
 * @property {string} message The exception error message.
 * @property {TraceKit.StackFrame[]} stack An array of stack frames.
 * @property {string} mode 'stack', 'stacktrace', 'multiline', 'callers', 'onerror', or 'failed' -- method used to collect the stack trace.
 * @memberof TraceKit
 */

/**
 * TraceKit._computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   ```js
 *   s = TraceKit._computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 *   ```
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit._computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit._computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 * @memberof TraceKit
 * @namespace
 */


TraceKit._computeStackTrace = function _computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

  /**
   * Computes stack trace information from the stack property.
   * Chrome and Gecko use this property.
   * @param {Error} ex
   * @return {?TraceKit.StackTrace} Stack trace information.
   * @memberof TraceKit._computeStackTrace
   */
  function _computeStackTraceFromStackProp(ex) {
    if (!ex.stack) {
      return null;
    }

    var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        // gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
    // generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
    // We need this specific case for now because we want no other regex to match.
    gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        // Used to additionally parse URL/line/column from eval frames
    isEval,
        geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        lines = ex.stack.split('\n'),
        stack = [],
        submatch,
        parts,
        element,
        reference = /^(.*) is undefined$/.exec(ex.message);

    for (var i = 0, j = lines.length; i < j; ++i) {
      if (parts = chrome.exec(lines[i])) {
        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

        isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1]; // url
          // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
          // parts[3] = submatch[2]; // line
          // parts[4] = submatch[3]; // column
        }

        element = {
          url: !isNative ? parts[2] : null,
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null
        };
      } else if (parts = winjs.exec(lines[i])) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null
        };
      } else if (parts = gecko.exec(lines[i])) {
        isEval = parts[3] && parts[3].indexOf(' > eval') > -1;

        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[3] = submatch[1]; // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
          // parts[4] = submatch[2];
          // parts[5] = null; // no column when eval
        } else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1;
        }

        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null
        };
      } else {
        continue;
      }

      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION;
      }

      element.context = null;
      stack.push(element);
    }

    if (!stack.length) {
      return null;
    }

    if (stack[0] && stack[0].line && !stack[0].column && reference) {
      stack[0].column = null;
    }

    return {
      mode: 'stack',
      name: ex.name,
      message: ex.message,
      stack: stack
    };
  }
  /**
   * Computes stack trace information from the stacktrace property.
   * Opera 10+ uses this property.
   * @param {Error} ex
   * @return {?TraceKit.StackTrace} Stack trace information.
   * @memberof TraceKit._computeStackTrace
   */


  function _computeStackTraceFromStacktraceProp(ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace;

    if (!stacktrace) {
      return;
    }

    var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
        lines = stacktrace.split('\n'),
        stack = [],
        parts;

    for (var line = 0; line < lines.length; line += 2) {
      var element = null;

      if (parts = opera10Regex.exec(lines[line])) {
        element = {
          url: parts[2],
          line: +parts[1],
          column: null,
          func: parts[3],
          args: []
        };
      } else if (parts = opera11Regex.exec(lines[line])) {
        element = {
          url: parts[6],
          line: +parts[1],
          column: +parts[2],
          func: parts[3] || parts[4],
          args: parts[5] ? parts[5].split(',') : []
        };
      }

      if (element) {
        if (!element.func && element.line) {
          element.func = UNKNOWN_FUNCTION;
        }

        if (element.line) {
          element.context = null;
        }

        if (!element.context) {
          element.context = [lines[line + 1]];
        }

        stack.push(element);
      }
    }

    if (!stack.length) {
      return null;
    }

    return {
      mode: 'stacktrace',
      name: ex.name,
      message: ex.message,
      stack: stack
    };
  }
  /**
   * NOT TESTED.
   * Computes stack trace information from an error message that includes
   * the stack trace.
   * Opera 9 and earlier use this method if the option to show stack
   * traces is turned on in opera:config.
   * @param {Error} ex
   * @return {?TraceKit.StackTrace} Stack information.
   * @memberof TraceKit._computeStackTrace
   */


  function _computeStackTraceFromOperaMultiLineMessage(ex) {
    // TODO: Clean this function up
    // Opera includes a stack trace into the exception message. An example is:
    //
    // Statement on line 3: Undefined variable: undefinedFunc
    // Backtrace:
    //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
    //         undefinedFunc(a);
    //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
    //           zzz(x, y, z);
    //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
    //           yyy(a, a, a);
    //   Line 1 of function script
    //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
    //   ...
    var lines = ex.message.split('\n');

    if (lines.length < 4) {
      return null;
    }

    var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
        lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
        lineRE3 = /^\s*Line (\d+) of function script\s*$/i,
        stack = [],
        scripts = window && window.document && window.document.getElementsByTagName('script'),
        inlineScriptBlocks = [],
        parts;

    for (var s in scripts) {
      if (_has(scripts, s) && !scripts[s].src) {
        inlineScriptBlocks.push(scripts[s]);
      }
    }

    for (var line = 2; line < lines.length; line += 2) {
      var item = null;

      if (parts = lineRE1.exec(lines[line])) {
        item = {
          url: parts[2],
          func: parts[3],
          args: [],
          line: +parts[1],
          column: null
        };
      } else if (parts = lineRE2.exec(lines[line])) {
        item = {
          url: parts[3],
          func: parts[4],
          args: [],
          line: +parts[1],
          column: null
        };
      } else if (parts = lineRE3.exec(lines[line])) {
        var url = getLocationHref().replace(/#.*$/, '');
        item = {
          url: url,
          func: '',
          args: [],
          line: parts[1],
          column: null
        };
      }

      if (item) {
        if (!item.func) {
          item.func = UNKNOWN_FUNCTION;
        } // if (context) alert("Context mismatch. Correct midline:\n" + lines[i+1] + "\n\nMidline:\n" + midline + "\n\nContext:\n" + context.join("\n") + "\n\nURL:\n" + item.url);


        item.context = [lines[line + 1]];
        stack.push(item);
      }
    }

    if (!stack.length) {
      return null; // could not parse multiline exception message as Opera stack trace
    }

    return {
      mode: 'multiline',
      name: ex.name,
      message: lines[0],
      stack: stack
    };
  }
  /**
   * Adds information about the first frame to incomplete stack traces.
   * Safari and IE require this to get complete data on the first frame.
   * @param {TraceKit.StackTrace} stackInfo Stack trace information from
   * one of the compute* methods.
   * @param {string} url The URL of the script that caused an error.
   * @param {(number|string)} lineNo The line number of the script that
   * caused an error.
   * @param {string=} message The error generated by the browser, which
   * hopefully contains the name of the object that caused the error.
   * @return {boolean} Whether or not the stack information was
   * augmented.
   * @memberof TraceKit._computeStackTrace
   */


  function _augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    var initial = {
      url: url,
      line: lineNo
    };

    if (initial.url && initial.line) {
      stackInfo.incomplete = false;

      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION;
      }

      if (!initial.context) {
        initial.context = null;
      }

      var reference = / '([^']+)' /.exec(message);

      if (reference) {
        initial.column = null;
      }

      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false; // already in stack trace
          } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
            stackInfo.stack[0].line = initial.line;
            stackInfo.stack[0].context = initial.context;
            return false;
          }
        }
      }

      stackInfo.stack.unshift(initial);
      stackInfo.partial = true;
      return true;
    } else {
      stackInfo.incomplete = true;
    }

    return false;
  }
  /**
   * Computes stack trace information by walking the arguments.caller
   * chain at the time the exception occurred. This will cause earlier
   * frames to be missed but is the only way to get any stack trace in
   * Safari and IE. The top frame is restored by
   * {@link augmentStackTraceWithInitialElement}.
   * @param {Error} ex
   * @return {TraceKit.StackTrace=} Stack trace information.
   * @memberof TraceKit._computeStackTrace
   */


  function _computeStackTraceByWalkingCallerChain(ex, depth) {
    var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
        stack = [],
        funcs = {},
        recursion = false,
        parts,
        item;

    for (var curr = _computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
      if (curr === _computeStackTrace || curr === TraceKit._report) {
        continue;
      }

      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        args: [],
        line: null,
        column: null
      };

      if (curr.name) {
        item.func = curr.name;
      } else if (parts = functionName.exec(curr.toString())) {
        item.func = parts[1];
      }

      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'));
        } catch (e) {}
      }

      if (funcs['' + curr]) {
        recursion = true;
      } else {
        funcs['' + curr] = true;
      }

      stack.push(item);
    }

    if (depth) {
      stack.splice(0, depth);
    }

    var result = {
      mode: 'callers',
      name: ex.name,
      message: ex.message,
      stack: stack
    };

    _augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);

    return result;
  }
  /**
   * Computes a stack trace for an exception.
   * @param {Error} ex
   * @param {(string|number)=} depth
   * @memberof TraceKit._computeStackTrace
   */


  function computeStackTrace(ex, depth) {
    var stack = null;
    depth = depth == null ? 0 : +depth;

    try {
      // This must be tried first because Opera 10 *destroys*
      // its stacktrace property if you try to access the stack
      // property first!!
      stack = _computeStackTraceFromStacktraceProp(ex);

      if (stack) {
        return stack;
      }
    } catch (e) {}

    try {
      stack = _computeStackTraceFromStackProp(ex);

      if (stack) {
        return stack;
      }
    } catch (e) {}

    try {
      stack = _computeStackTraceFromOperaMultiLineMessage(ex);

      if (stack) {
        return stack;
      }
    } catch (e) {}

    try {
      stack = _computeStackTraceByWalkingCallerChain(ex, depth + 1);

      if (stack) {
        return stack;
      }
    } catch (e) {}

    return {
      original: ex,
      name: ex.name,
      message: ex.message,
      mode: 'failed'
    };
  }

  computeStackTrace._augmentStackTraceWithInitialElement = _augmentStackTraceWithInitialElement;
  computeStackTrace._computeStackTraceFromStackProp = _computeStackTraceFromStackProp;
  return computeStackTrace;
}();

TraceKit._collectWindowErrors = true;
TraceKit._linesOfContext = 11;
var _subscribe = TraceKit._report._subscribe;
exports._subscribe = _subscribe;
var _installGlobalHandler = TraceKit._report._installGlobalHandler;
exports._installGlobalHandler = _installGlobalHandler;
var _installGlobalUnhandledRejectionHandler = TraceKit._report._installGlobalUnhandledRejectionHandler;
exports._installGlobalUnhandledRejectionHandler = _installGlobalUnhandledRejectionHandler;
var _computeStackTrace = TraceKit._computeStackTrace;
exports._computeStackTrace = _computeStackTrace;
},{"tslib":"CvJj","@sentry/utils":"ZEwu"}],"clUx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exceptionFromStacktrace = exceptionFromStacktrace;
exports.eventFromPlainObject = eventFromPlainObject;
exports.eventFromStacktrace = eventFromStacktrace;
exports.prepareFramesForEvent = prepareFramesForEvent;

var _utils = require("@sentry/utils");

var _tracekit = require("./tracekit");

var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */

function exceptionFromStacktrace(stacktrace) {
  var frames = prepareFramesForEvent(stacktrace.stack);
  var exception = {
    type: stacktrace.name,
    value: stacktrace.message
  };

  if (frames && frames.length) {
    exception.stacktrace = {
      frames: frames
    };
  } // tslint:disable-next-line:strict-type-predicates


  if (exception.type === undefined && exception.value === '') {
    exception.value = 'Unrecoverable error caught';
  }

  return exception;
}
/**
 * @hidden
 */


function eventFromPlainObject(exception, syntheticException) {
  var exceptionKeys = Object.keys(exception).sort();
  var event = {
    extra: {
      __serialized__: (0, _utils.normalizeToSize)(exception)
    },
    message: "Non-Error exception captured with keys: " + (0, _utils.keysToEventMessage)(exceptionKeys)
  };

  if (syntheticException) {
    var stacktrace = (0, _tracekit._computeStackTrace)(syntheticException);
    var frames_1 = prepareFramesForEvent(stacktrace.stack);
    event.stacktrace = {
      frames: frames_1
    };
  }

  return event;
}
/**
 * @hidden
 */


function eventFromStacktrace(stacktrace) {
  var exception = exceptionFromStacktrace(stacktrace);
  return {
    exception: {
      values: [exception]
    }
  };
}
/**
 * @hidden
 */


function prepareFramesForEvent(stack) {
  if (!stack || !stack.length) {
    return [];
  }

  var localStack = stack;
  var firstFrameFunction = localStack[0].func || '';
  var lastFrameFunction = localStack[localStack.length - 1].func || ''; // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)

  if (firstFrameFunction.includes('captureMessage') || firstFrameFunction.includes('captureException')) {
    localStack = localStack.slice(1);
  } // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)


  if (lastFrameFunction.includes('sentryWrapped')) {
    localStack = localStack.slice(0, -1);
  } // The frame where the crash happened, should be the last entry in the array


  return localStack.map(function (frame) {
    return {
      colno: frame.column,
      filename: frame.url || localStack[0].url,
      function: frame.func || '?',
      in_app: true,
      lineno: frame.line
    };
  }).slice(0, STACKTRACE_LIMIT).reverse();
}
},{"@sentry/utils":"ZEwu","./tracekit":"PZj+"}],"Tu+R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTransport = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** Base Transport class implementation */
var BaseTransport =
/** @class */
function () {
  function BaseTransport(options) {
    this.options = options;
    /** A simple buffer holding all requests. */

    this._buffer = new _utils.PromiseBuffer(30);
    this.url = new _core.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
  }
  /**
   * @inheritDoc
   */


  BaseTransport.prototype.sendEvent = function (_) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      return tslib_1.__generator(this, function (_a) {
        throw new _utils.SentryError('Transport Class has to implement `sendEvent` method');
      });
    });
  };
  /**
   * @inheritDoc
   */


  BaseTransport.prototype.close = function (timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , this._buffer.drain(timeout)];
      });
    });
  };

  return BaseTransport;
}();

exports.BaseTransport = BaseTransport;
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/utils":"ZEwu"}],"xy9H":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchTransport = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _types = require("@sentry/types");

var _utils = require("@sentry/utils");

var _base = require("./base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var global = (0, _utils.getGlobalObject)();
/** `fetch` based transport */

var FetchTransport =
/** @class */
function (_super) {
  tslib_1.__extends(FetchTransport, _super);

  function FetchTransport() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @inheritDoc
   */


  FetchTransport.prototype.sendEvent = function (event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var defaultOptions;
      return tslib_1.__generator(this, function (_a) {
        defaultOptions = {
          body: JSON.stringify(event),
          method: 'POST',
          // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
          // https://caniuse.com/#feat=referrer-policy
          // It doesn't. And it throw exception instead of ignoring this parameter...
          // REF: https://github.com/getsentry/raven-js/issues/1233
          referrerPolicy: (0, _utils.supportsReferrerPolicy)() ? 'origin' : ''
        };
        return [2
        /*return*/
        , this._buffer.add(global.fetch(this.url, defaultOptions).then(function (response) {
          return {
            status: _types.Status.fromHttpCode(response.status)
          };
        }))];
      });
    });
  };

  return FetchTransport;
}(_base.BaseTransport);

exports.FetchTransport = FetchTransport;
},{"tslib":"CvJj","@sentry/types":"WE5h","@sentry/utils":"ZEwu","./base":"Tu+R"}],"aLAX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XHRTransport = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _types = require("@sentry/types");

var _base = require("./base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** `XHR` based transport */
var XHRTransport =
/** @class */
function (_super) {
  tslib_1.__extends(XHRTransport, _super);

  function XHRTransport() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @inheritDoc
   */


  XHRTransport.prototype.sendEvent = function (event) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var _this = this;

      return tslib_1.__generator(this, function (_a) {
        return [2
        /*return*/
        , this._buffer.add(new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();

          request.onreadystatechange = function () {
            if (request.readyState !== 4) {
              return;
            }

            if (request.status === 200) {
              resolve({
                status: _types.Status.fromHttpCode(request.status)
              });
            }

            reject(request);
          };

          request.open('POST', _this.url);
          request.send(JSON.stringify(event));
        }))];
      });
    });
  };

  return XHRTransport;
}(_base.BaseTransport);

exports.XHRTransport = XHRTransport;
},{"tslib":"CvJj","@sentry/types":"WE5h","./base":"Tu+R"}],"wCCh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BaseTransport", {
  enumerable: true,
  get: function () {
    return _base.BaseTransport;
  }
});
Object.defineProperty(exports, "FetchTransport", {
  enumerable: true,
  get: function () {
    return _fetch.FetchTransport;
  }
});
Object.defineProperty(exports, "XHRTransport", {
  enumerable: true,
  get: function () {
    return _xhr.XHRTransport;
  }
});

var _base = require("./base");

var _fetch = require("./fetch");

var _xhr = require("./xhr");
},{"./base":"Tu+R","./fetch":"xy9H","./xhr":"aLAX"}],"IjAw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserBackend = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _types = require("@sentry/types");

var _utils = require("@sentry/utils");

var _parsers = require("./parsers");

var _tracekit = require("./tracekit");

var _transports = require("./transports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend =
/** @class */
function (_super) {
  tslib_1.__extends(BrowserBackend, _super);

  function BrowserBackend() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @inheritDoc
   */


  BrowserBackend.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      // We return the noop transport here in case there is no Dsn.
      return _super.prototype._setupTransport.call(this);
    }

    var transportOptions = this._options.transportOptions ? this._options.transportOptions : {
      dsn: this._options.dsn
    };

    if (this._options.transport) {
      return new this._options.transport(transportOptions);
    }

    if ((0, _utils.supportsFetch)()) {
      return new _transports.FetchTransport(transportOptions);
    }

    return new _transports.XHRTransport(transportOptions);
  };
  /**
   * @inheritDoc
   */


  BrowserBackend.prototype.eventFromException = function (exception, hint) {
    var _this = this;

    var event;

    if ((0, _utils.isErrorEvent)(exception) && exception.error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      var errorEvent = exception;
      exception = errorEvent.error; // tslint:disable-line:no-parameter-reassignment

      event = (0, _parsers.eventFromStacktrace)((0, _tracekit._computeStackTrace)(exception));
      return _utils.SyncPromise.resolve(this._buildEvent(event, hint));
    }

    if ((0, _utils.isDOMError)(exception) || (0, _utils.isDOMException)(exception)) {
      // If it is a DOMError or DOMException (which are legacy APIs, but still supported in some browsers)
      // then we just extract the name and message, as they don't provide anything else
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
      // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
      var domException = exception;
      var name_1 = domException.name || ((0, _utils.isDOMError)(domException) ? 'DOMError' : 'DOMException');
      var message_1 = domException.message ? name_1 + ": " + domException.message : name_1;
      return this.eventFromMessage(message_1, _types.Severity.Error, hint).then(function (messageEvent) {
        (0, _utils.addExceptionTypeValue)(messageEvent, message_1);
        return _utils.SyncPromise.resolve(_this._buildEvent(messageEvent, hint));
      });
    }

    if ((0, _utils.isError)(exception)) {
      // we have a real Error object, do nothing
      event = (0, _parsers.eventFromStacktrace)((0, _tracekit._computeStackTrace)(exception));
      return _utils.SyncPromise.resolve(this._buildEvent(event, hint));
    }

    if ((0, _utils.isPlainObject)(exception) && hint && hint.syntheticException) {
      // If it is plain Object, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      var objectException = exception;
      event = (0, _parsers.eventFromPlainObject)(objectException, hint.syntheticException);
      (0, _utils.addExceptionTypeValue)(event, 'Custom Object', undefined, {
        handled: true,
        synthetic: true,
        type: 'generic'
      });
      event.level = _types.Severity.Error;
      return _utils.SyncPromise.resolve(this._buildEvent(event, hint));
    } // If none of previous checks were valid, then it means that
    // it's not a DOMError/DOMException
    // it's not a plain Object
    // it's not a valid ErrorEvent (one with an error property)
    // it's not an Error
    // So bail out and capture it as a simple message:


    var stringException = exception;
    return this.eventFromMessage(stringException, undefined, hint).then(function (messageEvent) {
      (0, _utils.addExceptionTypeValue)(messageEvent, "" + stringException, undefined, {
        handled: true,
        synthetic: true,
        type: 'generic'
      });
      messageEvent.level = _types.Severity.Error;
      return _utils.SyncPromise.resolve(_this._buildEvent(messageEvent, hint));
    });
  };
  /**
   * This is an internal helper function that creates an event.
   */


  BrowserBackend.prototype._buildEvent = function (event, hint) {
    return tslib_1.__assign({}, event, {
      event_id: hint && hint.event_id
    });
  };
  /**
   * @inheritDoc
   */


  BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
    if (level === void 0) {
      level = _types.Severity.Info;
    }

    var event = {
      event_id: hint && hint.event_id,
      level: level,
      message: message
    };

    if (this._options.attachStacktrace && hint && hint.syntheticException) {
      var stacktrace = (0, _tracekit._computeStackTrace)(hint.syntheticException);
      var frames_1 = (0, _parsers.prepareFramesForEvent)(stacktrace.stack);
      event.stacktrace = {
        frames: frames_1
      };
    }

    return _utils.SyncPromise.resolve(event);
  };

  return BrowserBackend;
}(_core.BaseBackend);

exports.BrowserBackend = BrowserBackend;
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/types":"WE5h","@sentry/utils":"ZEwu","./parsers":"clUx","./tracekit":"PZj+","./transports":"wCCh"}],"9CZt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SDK_VERSION = exports.SDK_NAME = void 0;
var SDK_NAME = 'sentry.javascript.browser';
exports.SDK_NAME = SDK_NAME;
var SDK_VERSION = '5.1.2';
exports.SDK_VERSION = SDK_VERSION;
},{}],"K0OH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserClient = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _utils = require("@sentry/utils");

var _backend = require("./backend");

var _version = require("./version");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient =
/** @class */
function (_super) {
  tslib_1.__extends(BrowserClient, _super);
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */


  function BrowserClient(options) {
    if (options === void 0) {
      options = {};
    }

    return _super.call(this, _backend.BrowserBackend, options) || this;
  }
  /**
   * @inheritDoc
   */


  BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
    event.platform = event.platform || 'javascript';
    event.sdk = tslib_1.__assign({}, event.sdk, {
      name: _version.SDK_NAME,
      packages: tslib_1.__spread(event.sdk && event.sdk.packages || [], [{
        name: 'npm:@sentry/browser',
        version: _version.SDK_VERSION
      }]),
      version: _version.SDK_VERSION
    });
    return _super.prototype._prepareEvent.call(this, event, scope, hint);
  };
  /**
   * Show a report dialog to the user to send feedback to a specific event.
   *
   * @param options Set individual options for the dialog
   */


  BrowserClient.prototype.showReportDialog = function (options) {
    if (options === void 0) {
      options = {};
    } // doesn't work without a document (React Native)


    var document = (0, _utils.getGlobalObject)().document;

    if (!document) {
      return;
    }

    if (!this._isEnabled()) {
      _utils.logger.error('Trying to call showReportDialog with Sentry Client is disabled');

      return;
    }

    var dsn = options.dsn || this.getDsn();

    if (!options.eventId) {
      _utils.logger.error('Missing `eventId` option in showReportDialog call');

      return;
    }

    if (!dsn) {
      _utils.logger.error('Missing `Dsn` option in showReportDialog call');

      return;
    }

    var script = document.createElement('script');
    script.async = true;
    script.src = new _core.API(dsn).getReportDialogEndpoint(options);
    (document.head || document.body).appendChild(script);
  };

  return BrowserClient;
}(_core.BaseClient);

exports.BrowserClient = BrowserClient;
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/utils":"ZEwu","./backend":"IjAw","./version":"9CZt"}],"gwhD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldIgnoreOnError = shouldIgnoreOnError;
exports.ignoreNextOnError = ignoreNextOnError;
exports.wrap = wrap;
exports.breadcrumbEventHandler = breadcrumbEventHandler;
exports.keypressEventHandler = keypressEventHandler;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var debounceDuration = 1000;
var keypressTimeout;
var lastCapturedEvent;
var ignoreOnError = 0;
/**
 * @hidden
 */

function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
/**
 * @hidden
 */


function ignoreNextOnError() {
  // onerror should trigger before setTimeout
  ignoreOnError += 1;
  setTimeout(function () {
    ignoreOnError -= 1;
  });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */


function wrap(fn, options, before) {
  if (options === void 0) {
    options = {};
  } // tslint:disable-next-line:strict-type-predicates


  if (typeof fn !== 'function') {
    return fn;
  }

  try {
    // We don't wanna wrap it twice
    if (fn.__sentry__) {
      return fn;
    } // If this has already been wrapped in the past, return that wrapped function


    if (fn.__sentry_wrapped__) {
      return fn.__sentry_wrapped__;
    }
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn;
  }

  var sentryWrapped = function () {
    // tslint:disable-next-line:strict-type-predicates
    if (before && typeof before === 'function') {
      before.apply(this, arguments);
    }

    var args = Array.prototype.slice.call(arguments);

    try {
      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means Raven caught an error invoking your application code. This is
      //       expected behavior and NOT indicative of a bug with Raven.js.
      var wrappedArguments = args.map(function (arg) {
        return wrap(arg, options);
      });

      if (fn.handleEvent) {
        return fn.handleEvent.apply(this, wrappedArguments);
      }

      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      (0, _core.withScope)(function (scope) {
        scope.addEventProcessor(function (event) {
          var processedEvent = tslib_1.__assign({}, event);

          if (options.mechanism) {
            (0, _utils.addExceptionTypeValue)(processedEvent, undefined, undefined, options.mechanism);
          }

          processedEvent.extra = tslib_1.__assign({}, processedEvent.extra, {
            arguments: (0, _utils.normalize)(args, 3)
          });
          return processedEvent;
        });
        (0, _core.captureException)(ex);
      });
      throw ex;
    }
  }; // Accessing some objects may throw
  // ref: https://github.com/getsentry/sentry-javascript/issues/1168


  try {
    for (var property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) {} // tslint:disable-line:no-empty


  fn.prototype = fn.prototype || {};
  sentryWrapped.prototype = fn.prototype;
  Object.defineProperty(fn, '__sentry_wrapped__', {
    enumerable: false,
    value: sentryWrapped
  }); // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice

  Object.defineProperties(sentryWrapped, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: fn
    }
  }); // Restore original function name (not all browsers allow that)

  try {
    Object.defineProperty(sentryWrapped, 'name', {
      get: function () {
        return fn.name;
      }
    });
  } catch (_oO) {
    /*no-empty*/
  }

  return sentryWrapped;
}

var debounceTimer = 0;
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param eventName the event name (e.g. "click")
 * @returns wrapped breadcrumb events handler
 * @hidden
 */

function breadcrumbEventHandler(eventName, debounce) {
  if (debounce === void 0) {
    debounce = false;
  }

  return function (event) {
    // reset keypress timeout; e.g. triggering a 'click' after
    // a 'keypress' will reset the keypress debounce so that a new
    // set of keypresses can be recorded
    keypressTimeout = undefined; // It's possible this handler might trigger multiple times for the same
    // event (e.g. event propagation through node ancestors). Ignore if we've
    // already captured the event.

    if (!event || lastCapturedEvent === event) {
      return;
    }

    lastCapturedEvent = event;

    var captureBreadcrumb = function () {
      // try/catch both:
      // - accessing event.target (see getsentry/raven-js#838, #768)
      // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
      //   can throw an exception in some circumstances.
      var target;

      try {
        target = event.target ? _htmlTreeAsString(event.target) : _htmlTreeAsString(event);
      } catch (e) {
        target = '<unknown>';
      }

      if (target.length === 0) {
        return;
      }

      (0, _core.getCurrentHub)().addBreadcrumb({
        category: "ui." + eventName,
        message: target
      }, {
        event: event,
        name: eventName
      });
    };

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    if (debounce) {
      debounceTimer = setTimeout(captureBreadcrumb);
    } else {
      captureBreadcrumb();
    }
  };
}
/**
 * Wraps addEventListener to capture keypress UI events
 * @returns wrapped keypress events handler
 * @hidden
 */


function keypressEventHandler() {
  // TODO: if somehow user switches keypress target before
  //       debounce timeout is triggered, we will only capture
  //       a single breadcrumb from the FIRST target (acceptable?)
  return function (event) {
    var target;

    try {
      target = event.target;
    } catch (e) {
      // just accessing event properties can throw an exception in some rare circumstances
      // see: https://github.com/getsentry/raven-js/issues/838
      return;
    }

    var tagName = target && target.tagName; // only consider keypress events on actual input elements
    // this will disregard keypresses targeting body (e.g. tabbing
    // through elements, hotkeys, etc)

    if (!tagName || tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable) {
      return;
    } // record first keypress in a series, but ignore subsequent
    // keypresses until debounce clears


    if (!keypressTimeout) {
      breadcrumbEventHandler('input')(event);
    }

    clearTimeout(keypressTimeout);
    keypressTimeout = setTimeout(function () {
      keypressTimeout = undefined;
    }, debounceDuration);
  };
}
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */


function _htmlTreeAsString(elem) {
  var currentElem = elem;
  var MAX_TRAVERSE_HEIGHT = 5;
  var MAX_OUTPUT_LEN = 80;
  var out = [];
  var height = 0;
  var len = 0;
  var separator = ' > ';
  var sepLength = separator.length;
  var nextStr;

  while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
    nextStr = _htmlElementAsString(currentElem); // bail out if
    // - nextStr is the 'html' element
    // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
    //   (ignore this limit if we are on the first iteration)

    if (nextStr === 'html' || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) {
      break;
    }

    out.push(nextStr);
    len += nextStr.length;
    currentElem = currentElem.parentNode;
  }

  return out.reverse().join(separator);
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */


function _htmlElementAsString(elem) {
  var out = [];
  var className;
  var classes;
  var key;
  var attr;
  var i;

  if (!elem || !elem.tagName) {
    return '';
  }

  out.push(elem.tagName.toLowerCase());

  if (elem.id) {
    out.push("#" + elem.id);
  }

  className = elem.className;

  if (className && (0, _utils.isString)(className)) {
    classes = className.split(/\s+/);

    for (i = 0; i < classes.length; i++) {
      out.push("." + classes[i]);
    }
  }

  var attrWhitelist = ['type', 'name', 'title', 'alt'];

  for (i = 0; i < attrWhitelist.length; i++) {
    key = attrWhitelist[i];
    attr = elem.getAttribute(key);

    if (attr) {
      out.push("[" + key + "=\"" + attr + "\"]");
    }
  }

  return out.join('');
}
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/utils":"ZEwu"}],"BXha":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalHandlers = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _utils = require("@sentry/utils");

var _parsers = require("../parsers");

var _tracekit = require("../tracekit");

var _helpers = require("./helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** Global handlers */
var GlobalHandlers =
/** @class */
function () {
  /** JSDoc */
  function GlobalHandlers(options) {
    /**
     * @inheritDoc
     */
    this.name = GlobalHandlers.id;
    this._options = tslib_1.__assign({
      onerror: true,
      onunhandledrejection: true
    }, options);
  }
  /**
   * @inheritDoc
   */


  GlobalHandlers.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50;
    (0, _tracekit._subscribe)(function (stack, _, error) {
      // TODO: use stack.context to get a valuable information from TraceKit, eg.
      // [
      //   0: "  })"
      //   1: ""
      //   2: "  function foo () {"
      //   3: "    Sentry.captureException('some error')"
      //   4: "    Sentry.captureMessage('some message')"
      //   5: "    throw 'foo'"
      //   6: "  }"
      //   7: ""
      //   8: "  function bar () {"
      //   9: "    foo();"
      //   10: "  }"
      // ]
      if ((0, _helpers.shouldIgnoreOnError)()) {
        return;
      }

      var self = (0, _core.getCurrentHub)().getIntegration(GlobalHandlers);

      if (self) {
        (0, _core.getCurrentHub)().captureEvent(self._eventFromGlobalHandler(stack), {
          data: {
            stack: stack
          },
          originalException: error
        });
      }
    });

    if (this._options.onerror) {
      _utils.logger.log('Global Handler attached: onerror');

      (0, _tracekit._installGlobalHandler)();
    }

    if (this._options.onunhandledrejection) {
      _utils.logger.log('Global Handler attached: onunhandledrejection');

      (0, _tracekit._installGlobalUnhandledRejectionHandler)();
    }
  };
  /**
   * This function creates an Event from an TraceKitStackTrace.
   *
   * @param stacktrace TraceKitStackTrace to be converted to an Event.
   */


  GlobalHandlers.prototype._eventFromGlobalHandler = function (stacktrace) {
    var event = (0, _parsers.eventFromStacktrace)(stacktrace);
    var data = {
      mode: stacktrace.mode
    };

    if (stacktrace.message) {
      data.message = stacktrace.message;
    }

    if (stacktrace.name) {
      data.name = stacktrace.name;
    }

    var client = (0, _core.getCurrentHub)().getClient();
    var maxValueLength = client && client.getOptions().maxValueLength || 250;
    var fallbackValue = stacktrace.original ? (0, _utils.truncate)(JSON.stringify((0, _utils.normalize)(stacktrace.original)), maxValueLength) : '';
    var fallbackType = stacktrace.mechanism === 'onunhandledrejection' ? 'UnhandledRejection' : 'Error'; // This makes sure we have type/value in every exception

    (0, _utils.addExceptionTypeValue)(event, fallbackValue, fallbackType, {
      data: data,
      handled: false,
      type: stacktrace.mechanism
    });
    return event;
  };
  /**
   * @inheritDoc
   */


  GlobalHandlers.id = 'GlobalHandlers';
  return GlobalHandlers;
}();

exports.GlobalHandlers = GlobalHandlers;
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/utils":"ZEwu","../parsers":"clUx","../tracekit":"PZj+","./helpers":"gwhD"}],"Ivcs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TryCatch = void 0;

var _utils = require("@sentry/utils");

var _helpers = require("./helpers");

/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch =
/** @class */
function () {
  function TryCatch() {
    /** JSDoc */
    this._ignoreOnError = 0;
    /**
     * @inheritDoc
     */

    this.name = TryCatch.id;
  }
  /** JSDoc */


  TryCatch.prototype._wrapTimeFunction = function (original) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var originalCallback = args[0];
      args[0] = (0, _helpers.wrap)(originalCallback, {
        mechanism: {
          data: {
            function: getFunctionName(original)
          },
          handled: true,
          type: 'instrument'
        }
      });
      return original.apply(this, args);
    };
  };
  /** JSDoc */


  TryCatch.prototype._wrapRAF = function (original) {
    return function (callback) {
      return original((0, _helpers.wrap)(callback, {
        mechanism: {
          data: {
            function: 'requestAnimationFrame',
            handler: getFunctionName(original)
          },
          handled: true,
          type: 'instrument'
        }
      }));
    };
  };
  /** JSDoc */


  TryCatch.prototype._wrapEventTarget = function (target) {
    var global = (0, _utils.getGlobalObject)();
    var proto = global[target] && global[target].prototype;

    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }

    (0, _utils.fill)(proto, 'addEventListener', function (original) {
      return function (eventName, fn, options) {
        try {
          fn.handleEvent = (0, _helpers.wrap)(fn.handleEvent.bind(fn), {
            mechanism: {
              data: {
                function: 'handleEvent',
                handler: getFunctionName(fn),
                target: target
              },
              handled: true,
              type: 'instrument'
            }
          });
        } catch (err) {// can sometimes get 'Permission denied to access property "handle Event'
        }

        return original.call(this, eventName, (0, _helpers.wrap)(fn, {
          mechanism: {
            data: {
              function: 'addEventListener',
              handler: getFunctionName(fn),
              target: target
            },
            handled: true,
            type: 'instrument'
          }
        }), options);
      };
    });
    (0, _utils.fill)(proto, 'removeEventListener', function (original) {
      return function (eventName, fn, options) {
        var callback = fn;

        try {
          callback = callback && (callback.__sentry_wrapped__ || callback);
        } catch (e) {// ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
        }

        return original.call(this, eventName, callback, options);
      };
    });
  };
  /**
   * Wrap timer functions and event targets to catch errors
   * and provide better metadata.
   */


  TryCatch.prototype.setupOnce = function () {
    this._ignoreOnError = this._ignoreOnError;
    var global = (0, _utils.getGlobalObject)();
    (0, _utils.fill)(global, 'setTimeout', this._wrapTimeFunction.bind(this));
    (0, _utils.fill)(global, 'setInterval', this._wrapTimeFunction.bind(this));
    (0, _utils.fill)(global, 'requestAnimationFrame', this._wrapRAF.bind(this));
    ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'].forEach(this._wrapEventTarget.bind(this));
  };
  /**
   * @inheritDoc
   */


  TryCatch.id = 'TryCatch';
  return TryCatch;
}();

exports.TryCatch = TryCatch;

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    return fn && fn.name || '<anonymous>';
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return '<anonymous>';
  }
}
},{"@sentry/utils":"ZEwu","./helpers":"gwhD"}],"f9dn":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _types = require("@sentry/types");

var _utils = require("@sentry/utils");

var _helpers = require("./helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var global = (0, _utils.getGlobalObject)();
var lastHref;
/** Default Breadcrumbs instrumentations */

var Breadcrumbs =
/** @class */
function () {
  /**
   * @inheritDoc
   */
  function Breadcrumbs(options) {
    /**
     * @inheritDoc
     */
    this.name = Breadcrumbs.id;
    this._options = tslib_1.__assign({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, options);
  }
  /** JSDoc */


  Breadcrumbs.prototype._instrumentConsole = function () {
    if (!('console' in global)) {
      return;
    }

    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
      if (!(level in global.console)) {
        return;
      }

      (0, _utils.fill)(global.console, level, function (originalConsoleLevel) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var breadcrumbData = {
            category: 'console',
            data: {
              extra: {
                arguments: (0, _utils.normalize)(args, 3)
              },
              logger: 'console'
            },
            level: _types.Severity.fromString(level),
            message: (0, _utils.safeJoin)(args, ' ')
          };

          if (level === 'assert') {
            if (args[0] === false) {
              breadcrumbData.message = "Assertion failed: " + ((0, _utils.safeJoin)(args.slice(1), ' ') || 'console.assert');
              breadcrumbData.data.extra.arguments = (0, _utils.normalize)(args.slice(1), 3);
            }
          }

          Breadcrumbs.addBreadcrumb(breadcrumbData, {
            input: args,
            level: level
          }); // this fails for some browsers. :(

          if (originalConsoleLevel) {
            Function.prototype.apply.call(originalConsoleLevel, global.console, args);
          }
        };
      });
    });
  };
  /** JSDoc */


  Breadcrumbs.prototype._instrumentDOM = function () {
    if (!('document' in global)) {
      return;
    } // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
    // to the document. Do this before we instrument addEventListener.


    global.document.addEventListener('click', (0, _helpers.breadcrumbEventHandler)('click'), false);
    global.document.addEventListener('keypress', (0, _helpers.keypressEventHandler)(), false); // After hooking into document bubbled up click and keypresses events, we also hook into user handled click & keypresses.

    ['EventTarget', 'Node'].forEach(function (target) {
      var proto = global[target] && global[target].prototype;

      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
        return;
      }

      (0, _utils.fill)(proto, 'addEventListener', function (original) {
        return function (eventName, fn, options) {
          if (fn && fn.handleEvent) {
            if (eventName === 'click') {
              (0, _utils.fill)(fn, 'handleEvent', function (innerOriginal) {
                return function (event) {
                  (0, _helpers.breadcrumbEventHandler)('click')(event);
                  return innerOriginal.call(this, event);
                };
              });
            }

            if (eventName === 'keypress') {
              (0, _utils.fill)(fn, 'handleEvent', (0, _helpers.keypressEventHandler)());
            }
          } else {
            if (eventName === 'click') {
              (0, _helpers.breadcrumbEventHandler)('click', true)(this);
            }

            if (eventName === 'keypress') {
              (0, _helpers.keypressEventHandler)()(this);
            }
          }

          return original.call(this, eventName, fn, options);
        };
      });
      (0, _utils.fill)(proto, 'removeEventListener', function (original) {
        return function (eventName, fn, options) {
          var callback = fn;

          try {
            callback = callback && (callback.__sentry_wrapped__ || callback);
          } catch (e) {// ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
          }

          return original.call(this, eventName, callback, options);
        };
      });
    });
  };
  /** JSDoc */


  Breadcrumbs.prototype._instrumentFetch = function () {
    if (!(0, _utils.supportsNativeFetch)()) {
      return;
    }

    (0, _utils.fill)(global, 'fetch', function (originalFetch) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var fetchInput = args[0];
        var method = 'GET';
        var url;

        if (typeof fetchInput === 'string') {
          url = fetchInput;
        } else if ('Request' in global && fetchInput instanceof Request) {
          url = fetchInput.url;

          if (fetchInput.method) {
            method = fetchInput.method;
          }
        } else {
          url = String(fetchInput);
        }

        if (args[1] && args[1].method) {
          method = args[1].method;
        }

        var client = (0, _core.getCurrentHub)().getClient();
        var dsn = client && client.getDsn();

        if (dsn) {
          var filterUrl = new _core.API(dsn).getStoreEndpoint(); // if Sentry key appears in URL, don't capture it as a request
          // but rather as our own 'sentry' type breadcrumb

          if (filterUrl && url.includes(filterUrl)) {
            if (method === 'POST' && args[1] && args[1].body) {
              addSentryBreadcrumb(args[1].body);
            }

            return originalFetch.apply(global, args);
          }
        }

        var fetchData = {
          method: method,
          url: url
        };
        return originalFetch.apply(global, args).then(function (response) {
          fetchData.status_code = response.status;
          Breadcrumbs.addBreadcrumb({
            category: 'fetch',
            data: fetchData,
            type: 'http'
          }, {
            input: args,
            response: response
          });
          return response;
        }).catch(function (error) {
          Breadcrumbs.addBreadcrumb({
            category: 'fetch',
            data: fetchData,
            level: _types.Severity.Error,
            type: 'http'
          }, {
            error: error,
            input: args
          });
          throw error;
        });
      };
    });
  };
  /** JSDoc */


  Breadcrumbs.prototype._instrumentHistory = function () {
    var _this = this;

    if (!(0, _utils.supportsHistory)()) {
      return;
    }

    var captureUrlChange = function (from, to) {
      var parsedLoc = (0, _utils.parseUrl)(global.location.href);
      var parsedTo = (0, _utils.parseUrl)(to);
      var parsedFrom = (0, _utils.parseUrl)(from); // Initial pushState doesn't provide `from` information

      if (!parsedFrom.path) {
        parsedFrom = parsedLoc;
      } // because onpopstate only tells you the "new" (to) value of location.href, and
      // not the previous (from) value, we need to track the value of the current URL
      // state ourselves


      lastHref = to; // Use only the path component of the URL if the URL matches the current
      // document (almost all the time when using pushState)

      if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
        // tslint:disable-next-line:no-parameter-reassignment
        to = parsedTo.relative;
      }

      if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
        // tslint:disable-next-line:no-parameter-reassignment
        from = parsedFrom.relative;
      }

      Breadcrumbs.addBreadcrumb({
        category: 'navigation',
        data: {
          from: from,
          to: to
        }
      });
    }; // record navigation (URL) changes


    var oldOnPopState = global.onpopstate;

    global.onpopstate = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var currentHref = global.location.href;
      captureUrlChange(lastHref, currentHref);

      if (oldOnPopState) {
        return oldOnPopState.apply(_this, args);
      }
    };
    /**
     * @hidden
     */


    function historyReplacementFunction(originalHistoryFunction) {
      // note history.pushState.length is 0; intentionally not declaring
      // params to preserve 0 arity
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var url = args.length > 2 ? args[2] : undefined; // url argument is optional

        if (url) {
          // coerce to string (this is what pushState does)
          captureUrlChange(lastHref, String(url));
        }

        return originalHistoryFunction.apply(this, args);
      };
    }

    (0, _utils.fill)(global.history, 'pushState', historyReplacementFunction);
    (0, _utils.fill)(global.history, 'replaceState', historyReplacementFunction);
  };
  /** JSDoc */


  Breadcrumbs.prototype._instrumentXHR = function () {
    if (!('XMLHttpRequest' in global)) {
      return;
    }
    /**
     * @hidden
     */


    function wrapProp(prop, xhr) {
      // TODO: Fix XHR types
      if (prop in xhr && typeof xhr[prop] === 'function') {
        (0, _utils.fill)(xhr, prop, function (original) {
          return (0, _helpers.wrap)(original, {
            mechanism: {
              data: {
                function: prop,
                handler: original && original.name || '<anonymous>'
              },
              handled: true,
              type: 'instrument'
            }
          });
        });
      }
    }

    var xhrproto = XMLHttpRequest.prototype;
    (0, _utils.fill)(xhrproto, 'open', function (originalOpen) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var url = args[1];
        this.__sentry_xhr__ = {
          method: args[0],
          url: args[1]
        };
        var client = (0, _core.getCurrentHub)().getClient();
        var dsn = client && client.getDsn();

        if (dsn) {
          var filterUrl = new _core.API(dsn).getStoreEndpoint(); // if Sentry key appears in URL, don't capture it as a request
          // but rather as our own 'sentry' type breadcrumb

          if ((0, _utils.isString)(url) && filterUrl && url.includes(filterUrl)) {
            this.__sentry_own_request__ = true;
          }
        }

        return originalOpen.apply(this, args);
      };
    });
    (0, _utils.fill)(xhrproto, 'send', function (originalSend) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var xhr = this; // tslint:disable-line:no-this-assignment

        if (xhr.__sentry_own_request__) {
          addSentryBreadcrumb(args[0]);
        }
        /**
         * @hidden
         */


        function onreadystatechangeHandler() {
          if (xhr.readyState === 4) {
            if (xhr.__sentry_own_request__) {
              return;
            }

            try {
              // touching statusCode in some platforms throws
              // an exception
              if (xhr.__sentry_xhr__) {
                xhr.__sentry_xhr__.status_code = xhr.status;
              }
            } catch (e) {
              /* do nothing */
            }

            Breadcrumbs.addBreadcrumb({
              category: 'xhr',
              data: xhr.__sentry_xhr__,
              type: 'http'
            }, {
              xhr: xhr
            });
          }
        }

        ['onload', 'onerror', 'onprogress'].forEach(function (prop) {
          wrapProp(prop, xhr);
        });

        if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
          (0, _utils.fill)(xhr, 'onreadystatechange', function (original) {
            return (0, _helpers.wrap)(original, {
              mechanism: {
                data: {
                  function: 'onreadystatechange',
                  handler: original && original.name || '<anonymous>'
                },
                handled: true,
                type: 'instrument'
              }
            }, onreadystatechangeHandler);
          });
        } else {
          // if onreadystatechange wasn't actually set by the page on this xhr, we
          // are free to set our own and capture the breadcrumb
          xhr.onreadystatechange = onreadystatechangeHandler;
        }

        return originalSend.apply(this, args);
      };
    });
  };
  /**
   * Helper that checks if integration is enabled on the client.
   * @param breadcrumb Breadcrumb
   * @param hint BreadcrumbHint
   */


  Breadcrumbs.addBreadcrumb = function (breadcrumb, hint) {
    if ((0, _core.getCurrentHub)().getIntegration(Breadcrumbs)) {
      (0, _core.getCurrentHub)().addBreadcrumb(breadcrumb, hint);
    }
  };
  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */


  Breadcrumbs.prototype.setupOnce = function () {
    if (this._options.console) {
      this._instrumentConsole();
    }

    if (this._options.dom) {
      this._instrumentDOM();
    }

    if (this._options.xhr) {
      this._instrumentXHR();
    }

    if (this._options.fetch) {
      this._instrumentFetch();
    }

    if (this._options.history) {
      this._instrumentHistory();
    }
  };
  /**
   * @inheritDoc
   */


  Breadcrumbs.id = 'Breadcrumbs';
  return Breadcrumbs;
}();

exports.Breadcrumbs = Breadcrumbs;

/** JSDoc */
function addSentryBreadcrumb(serializedData) {
  // There's always something that can go wrong with deserialization...
  try {
    var event_1 = JSON.parse(serializedData);
    Breadcrumbs.addBreadcrumb({
      category: 'sentry',
      event_id: event_1.event_id,
      level: event_1.level || _types.Severity.fromString('error'),
      message: (0, _utils.getEventDescription)(event_1)
    }, {
      event: event_1
    });
  } catch (_oO) {
    _utils.logger.error('Error while adding sentry type breadcrumb');
  }
}
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/types":"WE5h","@sentry/utils":"ZEwu","./helpers":"gwhD"}],"ezhw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedErrors = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _parsers = require("../parsers");

var _tracekit = require("../tracekit");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */

var LinkedErrors =
/** @class */
function () {
  /**
   * @inheritDoc
   */
  function LinkedErrors(options) {
    if (options === void 0) {
      options = {};
    }
    /**
     * @inheritDoc
     */


    this.name = LinkedErrors.id;
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }
  /**
   * @inheritDoc
   */


  LinkedErrors.prototype.setupOnce = function () {
    (0, _core.addGlobalEventProcessor)(function (event, hint) {
      var self = (0, _core.getCurrentHub)().getIntegration(LinkedErrors);

      if (self) {
        return self._handler(event, hint);
      }

      return event;
    });
  };
  /**
   * @inheritDoc
   */


  LinkedErrors.prototype._handler = function (event, hint) {
    if (!event.exception || !event.exception.values || !hint || !(hint.originalException instanceof Error)) {
      return event;
    }

    var linkedErrors = this._walkErrorTree(hint.originalException, this._key);

    event.exception.values = tslib_1.__spread(linkedErrors, event.exception.values);
    return event;
  };
  /**
   * @inheritDoc
   */


  LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
    if (stack === void 0) {
      stack = [];
    }

    if (!(error[key] instanceof Error) || stack.length + 1 >= this._limit) {
      return stack;
    }

    var stacktrace = (0, _tracekit._computeStackTrace)(error[key]);
    var exception = (0, _parsers.exceptionFromStacktrace)(stacktrace);
    return this._walkErrorTree(error[key], key, tslib_1.__spread([exception], stack));
  };
  /**
   * @inheritDoc
   */


  LinkedErrors.id = 'LinkedErrors';
  return LinkedErrors;
}();

exports.LinkedErrors = LinkedErrors;
},{"tslib":"CvJj","@sentry/core":"o7YD","../parsers":"clUx","../tracekit":"PZj+"}],"/5CZ":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAgent = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _utils = require("@sentry/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var global = (0, _utils.getGlobalObject)();
/** UserAgent */

var UserAgent =
/** @class */
function () {
  function UserAgent() {
    /**
     * @inheritDoc
     */
    this.name = UserAgent.id;
  }
  /**
   * @inheritDoc
   */


  UserAgent.prototype.setupOnce = function () {
    (0, _core.addGlobalEventProcessor)(function (event) {
      if ((0, _core.getCurrentHub)().getIntegration(UserAgent)) {
        if (!global.navigator || !global.location) {
          return event;
        } // HTTP Interface: https://docs.sentry.io/clientdev/interfaces/http/?platform=javascript


        var request = event.request || {};
        request.url = request.url || global.location.href;
        request.headers = request.headers || {};
        request.headers['User-Agent'] = global.navigator.userAgent;
        return tslib_1.__assign({}, event, {
          request: request
        });
      }

      return event;
    });
  };
  /**
   * @inheritDoc
   */


  UserAgent.id = 'UserAgent';
  return UserAgent;
}();

exports.UserAgent = UserAgent;
},{"tslib":"CvJj","@sentry/core":"o7YD","@sentry/utils":"ZEwu"}],"wKZp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GlobalHandlers", {
  enumerable: true,
  get: function () {
    return _globalhandlers.GlobalHandlers;
  }
});
Object.defineProperty(exports, "TryCatch", {
  enumerable: true,
  get: function () {
    return _trycatch.TryCatch;
  }
});
Object.defineProperty(exports, "Breadcrumbs", {
  enumerable: true,
  get: function () {
    return _breadcrumbs.Breadcrumbs;
  }
});
Object.defineProperty(exports, "LinkedErrors", {
  enumerable: true,
  get: function () {
    return _linkederrors.LinkedErrors;
  }
});
Object.defineProperty(exports, "UserAgent", {
  enumerable: true,
  get: function () {
    return _useragent.UserAgent;
  }
});

var _globalhandlers = require("./globalhandlers");

var _trycatch = require("./trycatch");

var _breadcrumbs = require("./breadcrumbs");

var _linkederrors = require("./linkederrors");

var _useragent = require("./useragent");
},{"./globalhandlers":"BXha","./trycatch":"Ivcs","./breadcrumbs":"f9dn","./linkederrors":"ezhw","./useragent":"/5CZ"}],"WGjm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.showReportDialog = showReportDialog;
exports.lastEventId = lastEventId;
exports.forceLoad = forceLoad;
exports.onLoad = onLoad;
exports.flush = flush;
exports.close = close;
exports.defaultIntegrations = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _core = require("@sentry/core");

var _client = require("./client");

var _integrations = require("./integrations");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultIntegrations = [new _core.Integrations.InboundFilters(), new _core.Integrations.FunctionToString(), new _integrations.TryCatch(), new _integrations.Breadcrumbs(), new _integrations.GlobalHandlers(), new _integrations.LinkedErrors(), new _integrations.UserAgent()];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */

exports.defaultIntegrations = defaultIntegrations;

function init(options) {
  if (options === void 0) {
    options = {};
  }

  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations;
  }

  (0, _core.initAndBind)(_client.BrowserClient, options);
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */


function showReportDialog(options) {
  if (options === void 0) {
    options = {};
  }

  if (!options.eventId) {
    options.eventId = (0, _core.getCurrentHub)().lastEventId();
  }

  var client = (0, _core.getCurrentHub)().getClient();

  if (client) {
    client.showReportDialog(options);
  }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */


function lastEventId() {
  return (0, _core.getCurrentHub)().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */


function forceLoad() {} // Noop

/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */


function onLoad(callback) {
  callback();
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */


function flush(timeout) {
  return tslib_1.__awaiter(this, void 0, void 0, function () {
    var client;
    return tslib_1.__generator(this, function (_a) {
      client = (0, _core.getCurrentHub)().getClient();

      if (client) {
        return [2
        /*return*/
        , client.flush(timeout)];
      }

      return [2
      /*return*/
      , Promise.reject(false)];
    });
  });
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */


function close(timeout) {
  return tslib_1.__awaiter(this, void 0, void 0, function () {
    var client;
    return tslib_1.__generator(this, function (_a) {
      client = (0, _core.getCurrentHub)().getClient();

      if (client) {
        return [2
        /*return*/
        , client.close(timeout)];
      }

      return [2
      /*return*/
      , Promise.reject(false)];
    });
  });
}
},{"tslib":"CvJj","@sentry/core":"o7YD","./client":"K0OH","./integrations":"wKZp"}],"Z3VS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Severity", {
  enumerable: true,
  get: function () {
    return _types.Severity;
  }
});
Object.defineProperty(exports, "Status", {
  enumerable: true,
  get: function () {
    return _types.Status;
  }
});
Object.defineProperty(exports, "addGlobalEventProcessor", {
  enumerable: true,
  get: function () {
    return _core.addGlobalEventProcessor;
  }
});
Object.defineProperty(exports, "addBreadcrumb", {
  enumerable: true,
  get: function () {
    return _core.addBreadcrumb;
  }
});
Object.defineProperty(exports, "captureException", {
  enumerable: true,
  get: function () {
    return _core.captureException;
  }
});
Object.defineProperty(exports, "captureEvent", {
  enumerable: true,
  get: function () {
    return _core.captureEvent;
  }
});
Object.defineProperty(exports, "captureMessage", {
  enumerable: true,
  get: function () {
    return _core.captureMessage;
  }
});
Object.defineProperty(exports, "configureScope", {
  enumerable: true,
  get: function () {
    return _core.configureScope;
  }
});
Object.defineProperty(exports, "withScope", {
  enumerable: true,
  get: function () {
    return _core.withScope;
  }
});
Object.defineProperty(exports, "getHubFromCarrier", {
  enumerable: true,
  get: function () {
    return _core.getHubFromCarrier;
  }
});
Object.defineProperty(exports, "getCurrentHub", {
  enumerable: true,
  get: function () {
    return _core.getCurrentHub;
  }
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function () {
    return _core.Hub;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function () {
    return _core.Scope;
  }
});
Object.defineProperty(exports, "BrowserClient", {
  enumerable: true,
  get: function () {
    return _client.BrowserClient;
  }
});
Object.defineProperty(exports, "defaultIntegrations", {
  enumerable: true,
  get: function () {
    return _sdk.defaultIntegrations;
  }
});
Object.defineProperty(exports, "forceLoad", {
  enumerable: true,
  get: function () {
    return _sdk.forceLoad;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function () {
    return _sdk.init;
  }
});
Object.defineProperty(exports, "lastEventId", {
  enumerable: true,
  get: function () {
    return _sdk.lastEventId;
  }
});
Object.defineProperty(exports, "onLoad", {
  enumerable: true,
  get: function () {
    return _sdk.onLoad;
  }
});
Object.defineProperty(exports, "showReportDialog", {
  enumerable: true,
  get: function () {
    return _sdk.showReportDialog;
  }
});
Object.defineProperty(exports, "flush", {
  enumerable: true,
  get: function () {
    return _sdk.flush;
  }
});
Object.defineProperty(exports, "close", {
  enumerable: true,
  get: function () {
    return _sdk.close;
  }
});
Object.defineProperty(exports, "SDK_NAME", {
  enumerable: true,
  get: function () {
    return _version.SDK_NAME;
  }
});
Object.defineProperty(exports, "SDK_VERSION", {
  enumerable: true,
  get: function () {
    return _version.SDK_VERSION;
  }
});
exports.Transports = exports.Integrations = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _types = require("@sentry/types");

var _core = require("@sentry/core");

var _client = require("./client");

var _sdk = require("./sdk");

var _version = require("./version");

var _utils = require("@sentry/utils");

var BrowserIntegrations = _interopRequireWildcard(require("./integrations"));

var Transports = _interopRequireWildcard(require("./transports"));

exports.Transports = Transports;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var windowIntegrations = {}; // This block is needed to add compatibility with the integrations packages when used with a CDN
// tslint:disable: no-unsafe-any

var _window = (0, _utils.getGlobalObject)();

if (_window.Sentry && _window.Sentry.Integrations) {
  windowIntegrations = _window.Sentry.Integrations;
} // tslint:enable: no-unsafe-any


var INTEGRATIONS = tslib_1.__assign({}, windowIntegrations, _core.Integrations, BrowserIntegrations);

exports.Integrations = INTEGRATIONS;
},{"tslib":"CvJj","@sentry/types":"WE5h","@sentry/core":"o7YD","./client":"K0OH","./sdk":"WGjm","./version":"9CZt","@sentry/utils":"ZEwu","./integrations":"wKZp","./transports":"wCCh"}],"xHQ7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentryAnt = sentryAnt;
exports.captureExceptionAnt = void 0;

var Sentry = _interopRequireWildcard(require("@sentry/browser"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function sentryAnt() {
  Sentry.init({
    dsn: 'https://c57bf6cbb9fc431fb3f326f31745f93f@sentry.io/123126'
  });
}

const captureExceptionAnt = x => Sentry.captureException(x);

exports.captureExceptionAnt = captureExceptionAnt;
},{"@sentry/browser":"Z3VS"}],"KdLd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = exports.API_URL_NGROK = void 0;
// export const API_URL_LOCAL = 'http://localhost:8070/lambdas'
// export const API_URL_LOCAL = 'http://localhost:4042/lambdas'
const API_URL_NGROK = 'https://toteff.eu.ngrok.io/lambdas'; // export const API_URL = API_URL_LOCAL

exports.API_URL_NGROK = API_URL_NGROK;
const API_URL = API_URL_NGROK;
exports.API_URL = API_URL;
},{}],"hRTX":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"cnt1":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};
},{}],"Feqj":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":"hRTX","is-buffer":"cnt1"}],"phS/":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"Feqj"}],"xpeW":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"Feqj"}],"IAOH":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"Feqj"}],"mXc0":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"njyv":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"Feqj"}],"Lpyz":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"NZT3":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"Lpyz"}],"Ztkp":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"NZT3"}],"Zn5P":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"Feqj"}],"Rpqp":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"Feqj"}],"M+LC":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"Feqj"}],"akUF":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"Feqj","./../core/settle":"Ztkp","./../helpers/buildURL":"phS/","./../helpers/parseHeaders":"Zn5P","./../helpers/isURLSameOrigin":"Rpqp","../core/createError":"NZT3","./../helpers/cookies":"M+LC"}],"A14q":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"Feqj","./helpers/normalizeHeaderName":"njyv","./adapters/http":"akUF","./adapters/xhr":"akUF","process":"g5I+"}],"R56a":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"uRyQ":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"6H+A":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"Feqj","./transformData":"IAOH","../cancel/isCancel":"mXc0","../defaults":"A14q","./../helpers/isAbsoluteURL":"R56a","./../helpers/combineURLs":"uRyQ"}],"7fBI":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

},{"../utils":"Feqj"}],"2trU":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"Feqj","../helpers/buildURL":"phS/","./InterceptorManager":"xpeW","./dispatchRequest":"6H+A","./mergeConfig":"7fBI"}],"qFUg":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"VgQU":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"qFUg"}],"4yis":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"Wzmt":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"Feqj","./helpers/bind":"hRTX","./core/Axios":"2trU","./core/mergeConfig":"7fBI","./defaults":"A14q","./cancel/Cancel":"qFUg","./cancel/CancelToken":"VgQU","./cancel/isCancel":"mXc0","./helpers/spread":"4yis"}],"O4Aa":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"Wzmt"}],"u1Ug":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _constants = require("../../constants");

var _axios = require("axios");

async function getData(bookIndex) {
  const {
    data
  } = await (0, _axios.post)(`${_constants.API_URL}/speed-reader/`, {
    id: bookIndex
  });
  return data.filter(x => x.trim().length > 0);
}
},{"../../constants":"KdLd","axios":"O4Aa"}],"12t9":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ok = ok;
exports.complement = exports.opposite = complement;
exports.allFalse = allFalse;
exports.allTrue = allTrue;
exports.allType = allType;
exports.anyFalse = anyFalse;
exports.anyTrue = anyTrue;
exports.anyType = anyType;
exports.change = change;
exports.compact = compact;
exports.composeAsync = composeAsync;
exports.composed = composed;
exports.count = count;
exports.debounce = debounce;
exports.defaultToStrict = defaultToStrict;
exports.defaultToWhen = defaultToWhen;
exports.delay = delay;
exports.findInObject = findInObject;
exports.findModify = findModify;
exports.flatMap = flatMap;
exports.getter = getter;
exports.setter = setter;
exports.reset = reset;
exports.glue = glue;
exports.hasPath = hasPath;
exports.headObject = headObject;
exports.ifElseAsync = ifElseAsync;
exports.includesAny = includesAny;
exports.includesType = includesType;
exports.inject = inject;
exports.interval = interval;
exports.isAttach = isAttach;
exports.isFunction = isFunction$1;
exports.isFalsy = isFalsy;
exports.isPromise = isPromise;
exports.isType = isType;
exports.isPrototype = isPrototype;
exports.prototypeToString = prototypeToString;
exports.isValid = isValid;
exports.mapAsync = mapAsync;
exports.mapFastAsync = mapFastAsync;
exports.mapToObject = mapToObject;
exports.maybe = maybe;
exports.memoize = memoize$1;
exports.mergeAll = mergeAll;
exports.mergeRight = mergeRight;
exports.mergeDeep = mergeDeep;
exports.nextIndex = nextIndex;
exports.pass = pass;
exports.once = once;
exports.otherwise = otherwise;
exports.partition = partition;
exports.pathEq = pathEq;
exports.piped = piped;
exports.pipedAsync = pipedAsync;
exports.prevIndex = prevIndex;
exports.produce = produce;
exports.promiseAllObject = promiseAllObject;
exports.pushUniq = pushUniq;
exports.random = random;
exports.remove = remove;
exports.renameProps = renameProps;
exports.resolve = resolve;
exports.s = s;
exports.shuffle = shuffle;
exports.switcher = switcher;
exports.tapAsync = tapAsync;
exports.template = template;
exports.throttle = throttle;
exports.toDecimal = toDecimal;
exports.toggle = toggle;
exports.tryCatch = tryCatch;
exports.unless = unless;
exports.uuid = uuid$1;
exports.wait = wait;
exports.waitFor = waitFor;
exports.when = when;
exports.whenAsync = whenAsync;
exports.where = where;
exports.whereEq = whereEq;
exports.add = add;
exports.all = all;
exports.allPass = allPass;
exports.always = always;
exports.any = any;
exports.anyPass = anyPass;
exports.append = append;
exports.both = both;
exports.compose = compose;
exports.concat = concat;
exports.contains = contains;
exports.curry = curry;
exports.defaultTo = defaultTo;
exports.dissoc = dissoc;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.equals = equals;
exports.F = F;
exports.filter = filter;
exports.find = find;
exports.findIndex = findIndex;
exports.flatten = flatten;
exports.flip = flip;
exports.toPairs = toPairs;
exports.fromPairs = fromPairs;
exports.clone = clone;
exports.forEach = forEach;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.has = has;
exports.head = head;
exports.identity = identity;
exports.ifElse = ifElse;
exports.includes = includes;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.init = init;
exports.is = is$1;
exports.isNil = isNil;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.length = length;
exports.map = map;
exports.match = match;
exports.merge = merge;
exports.max = max;
exports.maxBy = maxBy;
exports.min = min;
exports.minBy = minBy;
exports.modulo = modulo;
exports.multiply = multiply;
exports.none = none;
exports.not = not;
exports.nth = nth;
exports.omit = omit;
exports.partial = partial;
exports.partialCurry = partialCurry;
exports.path = path;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pipe = pipe;
exports.pluck = pluck;
exports.prepend = prepend;
exports.prop = prop;
exports.propEq = propEq;
exports.range = range;
exports.reject = reject;
exports.repeat = repeat;
exports.replace = replace;
exports.reverse = reverse;
exports.sort = sort;
exports.sortBy = sortBy;
exports.split = split;
exports.splitEvery = splitEvery;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.T = T;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.tap = tap;
exports.test = test;
exports.times = times;
exports.toLower = toLower;
exports.toString = toString$1;
exports.toUpper = toUpper;
exports.trim = trim;
exports.type = type;
exports.uniq = uniq;
exports.uniqWith = uniqWith;
exports.update = update;
exports.values = values;
exports.without = without;
exports.zip = zip;
exports.zipObj = zipObj;
exports.reduce = exports.pathOr = exports.inc = exports.dec = exports.assoc = exports.adjust = exports.DELAY = void 0;

function type(val) {
  const typeOf = typeof val;

  if (val === null) {
    return 'Null';
  } else if (val === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(val) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(val)) {
    return 'Array';
  } else if (val instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = val.toString();

  if (asStr.startsWith('async')) {
    return 'Async';
  } else if (asStr === '[object Promise]') {
    return 'Promise';
  } else if (typeOf === 'function') {
    return 'Function';
  }

  return 'Object';
}

function allFalse(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    const x = inputs[counter];

    if (type(x) === 'Function') {
      if (inputs[counter]()) {
        return false;
      }
    } else if (inputs[counter]) {
      return false;
    }

    counter++;
  }

  return true;
}

function allTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    const x = inputs[counter];

    if (type(x) === 'Function') {
      if (!inputs[counter]()) {
        return false;
      }
    } else if (!inputs[counter]) {
      return false;
    }

    counter++;
  }

  return true;
}

function allType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) !== targetType) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function anyFalse(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (!inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) === targetType) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

const FUNC_ERROR_TEXT = 'Expected a function';
const HASH_UNDEFINED = '__lodash_hash_undefined__';
const INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;
const funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reEscapeChar = /\\(\\)?/g;
const reIsHostCtor = /^\[object .+?Constructor\]$/;
const reIsUint = /^(?:0|[1-9]\d*)$/;
const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
const freeSelf = typeof self === 'object' && self && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function('return this')();

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

function isHostObject(value) {
  let result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = Boolean(String(value));
    } catch (e) {}
  }

  return result;
}

const arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;
const coreJsData = root['__core-js_shared__'];

const maskSrcKey = function () {
  const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

const funcToString = funcProto.toString;
const {
  hasOwnProperty
} = objectProto;
const objectToString = objectProto.toString;
const reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
const {
  Symbol: Symbol$1
} = root,
      {
  splice
} = arrayProto;
const Map = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');
const symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

function Hash(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

function hashGet(key) {
  const data = this.__data__;

  if (nativeCreate) {
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

function hashHas(key) {
  const data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

function hashSet(key, value) {
  const data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function ListCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function listCacheClear() {
  this.__data__ = [];
}

function listCacheDelete(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  const lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}

function listCacheGet(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

function MapCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}

function mapCacheDelete(key) {
  return getMapData(this, key).delete(key);
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

function assignValue(object, key, value) {
  const objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

function assocIndexOf(array, key) {
  let {
    length
  } = array;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  const pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = isKey(path, object) ? [path] : castPath(path);
  let index = -1;
  let nested = object;
  const {
    length
  } = path;
  const lastIndex = length - 1;

  while (nested != null && ++index < length) {
    let key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

function baseToString(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

function getMapData(map, key) {
  const data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}

function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return Boolean(length) && (typeof value === 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  const type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

function isKeyable(value) {
  const type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

function isMasked(func) {
  return Boolean(maskSrcKey) && maskSrcKey in func;
}

var stringToPath = memoize(string => {
  string = toString(string);
  const result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, (match, number, quote, string) => {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return String(func);
    } catch (e) {}
  }

  return '';
}

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    const args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          {
      cache
    } = memoized;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var {
  isArray
} = Array;

function isFunction(value) {
  const tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

function isObject(value) {
  const type = typeof value;
  return Boolean(value) && (type == 'object' || type == 'function');
}

function isObjectLike(value) {
  return Boolean(value) && typeof value === 'object';
}

function isSymbol(value) {
  return typeof value === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

function toString(value) {
  return value == null ? '' : baseToString(value);
}

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

function whenObject(rule, hash) {
  const yes = {};
  const no = {};
  Object.entries(hash).forEach(([prop, value]) => {
    if (rule(value, prop)) {
      yes[prop] = value;
    } else {
      no[prop] = value;
    }
  });
  return [yes, no];
}

function partition(rule, list) {
  if (arguments.length === 1) {
    return listHolder => partition(rule, listHolder);
  }

  if (!Array.isArray(list)) return whenObject(rule, list);
  const yes = [];
  const no = [];
  let counter = -1;

  while (counter++ < list.length - 1) {
    if (rule(list[counter], counter)) {
      yes.push(list[counter]);
    } else {
      no.push(list[counter]);
    }
  }

  return [yes, no];
}

const isObject$1 = x => {
  const ok = x !== null && !Array.isArray(x) && typeof x === 'object';

  if (!ok) {
    return false;
  }

  return Object.keys(x).length > 0;
};

function change(origin, pathRaw, rules) {
  const willReturn = JSON.parse(JSON.stringify(origin));

  if (!isObject$1(rules)) {
    set(willReturn, pathRaw, rules);
    return willReturn;
  }

  const path = pathRaw === '' ? '' : `${pathRaw}.`;

  for (const ruleKey of Object.keys(rules)) {
    const rule = rules[ruleKey];

    if (!isObject$1(rule)) {
      set(willReturn, `${path}${ruleKey}`, rule);
      continue;
    }

    const [withObjects, withoutObjects] = partition(subruleKey => isObject$1(rule[subruleKey]), Object.keys(rule));
    withoutObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      set(willReturn, `${path}${ruleKey}.${subruleKey}`, subrule);
    });
    withObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      Object.keys(subrule).forEach(deepKey => {
        const deep = rule[subruleKey][deepKey];

        if (!isObject$1(deep)) {
          return set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}`, deep);
        }

        Object.keys(deep).forEach(superDeepKey => {
          const superDeep = rule[subruleKey][deepKey][superDeepKey];
          set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}.${superDeepKey}`, superDeep);
        });
      });
    });
  }

  return willReturn;
}

function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);

  if (a === b) {
    return true;
  }

  const aType = type(a);

  if (aType !== type(b)) {
    return false;
  }

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    let loopObjectFlag = true;
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }

  return false;
}

const forbidden = ['Null', 'Undefined', 'RegExp'];
const allowed = ['Number', 'Boolean'];
const notEmpty = ['Array', 'String'];

function compact(arr) {
  const willReturn = [];
  arr.forEach(a => {
    const currentType = type(a);
    if (forbidden.includes(currentType)) return;
    if (allowed.includes(currentType)) return willReturn.push(a);

    if (currentType === 'Object') {
      if (!equals(a, {})) willReturn.push(a);
      return;
    }

    if (!notEmpty.includes(currentType)) return;
    if (a.length === 0) return;
    willReturn.push(a);
  });
  return willReturn;
}

function composeAsync(...inputArguments) {
  return async function (startArgument) {
    let argumentsToPass = startArgument;

    while (inputArguments.length !== 0) {
      const fn = inputArguments.pop();
      const typeFn = type(fn);

      if (typeFn === 'Async') {
        argumentsToPass = await fn(argumentsToPass);
      } else {
        argumentsToPass = fn(argumentsToPass);
      }
    }

    return argumentsToPass;
  };
}

function compose(...fns) {
  return (...args) => {
    const list = fns.slice();

    if (list.length > 0) {
      const fn = list.pop();
      let result = fn(...args);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }

    return undefined;
  };
}

function last(list) {
  if (typeof list === 'string') return list[list.length - 1] || '';
  return list[list.length - 1];
}

function baseSlice(array, start, end) {
  let index = -1;
  let {
    length
  } = array;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(list) {
  if (typeof list === 'string') return list.slice(0, -1);
  return list.length ? baseSlice(list, 0, -1) : [];
}

function composed(...inputs) {
  return compose(...init(inputs))(last(inputs));
}

function count(target, list) {
  if (arguments.length === 1) {
    return listHolder => count(target, listHolder);
  }

  if (!Array.isArray(list)) return 0;
  return list.filter(x => equals(x, target)).length;
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      func.apply(null, input);
    }
  };
}

function flagIs(targetType, input) {
  if (!input) return false;
  if (type(input) !== targetType) return false;
  if (targetType === 'Array') return !equals([], input);
  if (targetType === 'Object') return !equals({}, input);
  return true;
}

function defaultToStrict(defaultArgument, ...inputArguments) {
  if (arguments.length === 1) {
    return inputArgumentsHolder => defaultToStrict(defaultArgument, inputArgumentsHolder);
  }

  if (arguments.length === 2) {
    return flagIs(type(defaultArgument), inputArguments[0]) ? inputArguments[0] : defaultArgument;
  }

  const targetType = type(defaultArgument);
  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(targetType, instance)) {
      holder = instance;
      ready = true;
    } else {
      len -= 1;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function defaultToWhen(defaultArgument, fn, ...inputArguments) {
  if (arguments.length === 2) {
    return (...inputArgumentsHolder) => defaultToWhen(defaultArgument, fn, ...inputArgumentsHolder);
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (fn(instance) === true) {
      holder = instance;
      ready = true;
    } else {
      len -= 1;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('RAMBDAX_DELAY');
    }, ms);
  });
}

function findInObject(fn, obj) {
  if (arguments.length === 1) {
    return objHolder => findInObject(fn, objHolder);
  }

  let willReturn = {
    fallback: true
  };
  Object.entries(obj).forEach(([prop, value]) => {
    if (willReturn.fallback) {
      if (fn(value, prop)) {
        willReturn = {
          prop,
          value
        };
      }
    }
  });
  return willReturn;
}

function findModify(fn, list) {
  if (arguments.length === 1) {
    return listHolder => findModify(fn, listHolder);
  }

  const len = list.length;
  if (len === 0) return false;
  let index = -1;

  while (++index < len) {
    const result = fn(list[index], index);

    if (result !== false) {
      return result;
    }
  }

  return false;
}

function flatMap(fn, xs) {
  if (arguments.length === 1) {
    return xsHolder => flatMap(fn, xsHolder);
  }

  return [].concat(...xs.map(fn));
}

function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
}

function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
}

let holder = {};

function getter(key) {
  const typeKey = type(key);
  if (typeKey === 'String') return holder[key];
  if (typeKey === 'Array') return pick(key, holder);
  return holder;
}

function setter(maybeKey, maybeValue) {
  const typeKey = type(maybeKey);
  const typeValue = type(maybeValue);

  if (typeKey === 'String') {
    if (typeValue === 'Function') {
      return holder[maybeKey] = maybeValue(holder[maybeKey]);
    }

    return holder[maybeKey] = maybeValue;
  }

  if (typeKey !== 'Object') return;
  holder = merge(holder, maybeKey);
}

function reset() {
  holder = {};
}

function glue(input, glueChar) {
  return input.split('\n').filter(x => x.trim().length > 0).map(x => x.trim()).join(glue === undefined ? ' ' : glueChar);
}

function path(list, obj) {
  if (arguments.length === 1) return _obj => path(list, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  let willReturn = obj;
  let counter = 0;
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function hasPath(maybePath, obj) {
  if (arguments.length === 1) {
    return objHolder => hasPath(maybePath, objHolder);
  }

  return path(maybePath, obj) !== undefined;
}

function headObject(input) {
  const [head, _] = Object.entries(input);
  if (!head) return {
    prop: undefined,
    value: undefined
  };
  if (_) throw new Error('R.headObject expects object with only one key');
  return {
    prop: head[0],
    value: head[1]
  };
}

function createThenable(x) {
  return async function (input) {
    return x(input);
  };
}

function ifElseAsync(condition, ifFn, elseFn) {
  return input => new Promise((resolve, reject) => {
    const conditionPromise = createThenable(condition);
    const ifFnPromise = createThenable(ifFn);
    const elseFnPromise = createThenable(elseFn);
    conditionPromise(input).then(conditionResult => {
      const promised = conditionResult === true ? ifFnPromise : elseFnPromise;
      promised(input).then(resolve).catch(reject);
    }).catch(reject);
  });
}

function any(fn, list) {
  if (arguments.length === 1) return _list => any(fn, _list);
  let counter = 0;

  while (counter < list.length) {
    if (fn(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
}

function expensiveIncludes(target, source) {
  return any(singleSource => equals(target, singleSource), source);
}

function includesAny(targets, source) {
  if (arguments.length === 1) {
    return sourceHolder => includesAny(targets, sourceHolder);
  }

  const sourceType = type(source);

  if (['Array', 'String'].includes(sourceType) === false) {
    return false;
  }

  if (sourceType === 'String') {
    return any(x => source.includes(x), targets);
  }

  return any(x => expensiveIncludes(x, source), targets);
}

function includesType(targetType, list) {
  if (arguments.length === 1) {
    return listHolder => includesType(targetType, listHolder);
  }

  return any(x => type(x) === targetType, list);
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return (_replacer, _str) => replace(pattern, _replacer, _str);
  } else if (str === undefined) {
    return _str => replace(pattern, replacer, _str);
  }

  return str.replace(pattern, replacer);
}

function inject(injection, marker, content) {
  return replace(marker, `${marker}${injection}`, content);
}

function take(n, list) {
  if (arguments.length === 1) return _list => take(n, _list);
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
}

function shuffle(arrayRaw) {
  const array = arrayRaw.concat();
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const uuidList = '0123456789qwertyuiopasdfghjklzxcvbnm'.split('');

function uuid() {
  return take(5, shuffle(uuidList).join(''));
}

const holder$1 = {};

function interval({
  fn,
  ms,
  whenStop
}) {
  const key = uuid();
  return new Promise(resolve => {
    holder$1[key] = setInterval(() => {
      if (whenStop() === true) {
        clearInterval(holder$1[key]);
        resolve();
      } else {
        fn();
      }
    }, ms);
  });
}

function toLower(str) {
  return str.toLowerCase();
}

function contains(val, list) {
  if (arguments.length === 1) return _list => contains(val, _list);
  let index = -1;

  while (++index < list.length) {
    if (equals(list[index], val)) {
      return true;
    }
  }

  return false;
}

function test(pattern, str) {
  if (arguments.length === 1) return _str => test(pattern, _str);
  return str.search(pattern) !== -1;
}

function all(fn, list) {
  if (arguments.length === 1) return _list => all(fn, _list);

  for (let i = 0; i < list.length; i++) {
    if (!fn(list[i], i)) return false;
  }

  return true;
}

function isPrototype(input) {
  const currentPrototype = input.prototype;
  const list = [Number, String, Boolean, Promise];
  let toReturn = false;
  let counter = -1;

  while (++counter < list.length && !toReturn) {
    if (currentPrototype === list[counter].prototype) toReturn = true;
  }

  return toReturn;
}

function prototypeToString(input) {
  const currentPrototype = input.prototype;
  const list = [Number, String, Boolean, Promise];
  const translatedList = ['Number', 'String', 'Boolean', 'Promise'];
  let found;
  let counter = -1;

  while (++counter < list.length) {
    if (currentPrototype === list[counter].prototype) found = counter;
  }

  return translatedList[found];
}

const typesWithoutPrototype = ['any', 'promise', 'async', 'function'];

function fromPrototypeToString(rule) {
  if (Array.isArray(rule) || rule === undefined || rule === null || rule.prototype === undefined || typesWithoutPrototype.includes(rule)) {
    return {
      rule,
      parsed: false
    };
  }

  if (String.prototype === rule.prototype) {
    return {
      rule: 'string',
      parsed: true
    };
  }

  if (Boolean.prototype === rule.prototype) {
    return {
      rule: 'boolean',
      parsed: true
    };
  }

  if (Number.prototype === rule.prototype) {
    return {
      rule: 'number',
      parsed: true
    };
  }

  return {
    rule: type(rule.prototype).toLowerCase(),
    parsed: true
  };
}

function getRuleAndType(schema, requirementRaw) {
  const ruleRaw = schema[requirementRaw];
  const typeIs = type(ruleRaw);
  const {
    rule,
    parsed
  } = fromPrototypeToString(ruleRaw);
  return {
    rule: rule,
    ruleType: parsed ? 'String' : typeIs
  };
}

function isValid({
  input,
  schema
}) {
  if (input === undefined || schema === undefined) return false;
  let flag = true;

  const boom = boomFlag => {
    if (!boomFlag) {
      flag = false;
    }
  };

  for (const requirementRaw in schema) {
    if (flag) {
      const isOptional = requirementRaw.endsWith('?');
      const requirement = isOptional ? init(requirementRaw) : requirementRaw;
      const {
        rule,
        ruleType
      } = getRuleAndType(schema, requirementRaw);
      const inputProp = input[requirement];
      const inputPropType = type(input[requirement]);
      const ok = isOptional && inputProp !== undefined || !isOptional;
      if (!ok || rule === 'any' && inputProp != null || rule === inputProp) continue;

      if (ruleType === 'Object') {
        const isValidResult = isValid({
          input: inputProp,
          schema: rule
        });
        boom(isValidResult);
      } else if (ruleType === 'String') {
        boom(toLower(inputPropType) === rule);
      } else if (typeof rule === 'function') {
        boom(rule(inputProp));
      } else if (ruleType === 'Array' && inputPropType === 'String') {
        boom(contains(inputProp, rule));
      } else if (ruleType === 'Array' && rule.length === 1 && inputPropType === 'Array') {
        const [currentRule] = rule;
        const currentRuleType = type(currentRule);
        boom(currentRuleType === 'String' || currentRuleType === 'Object' || isPrototype(currentRule));

        if (currentRuleType === 'Object' && flag) {
          const isValidResult = all(inputPropInstance => isValid({
            input: inputPropInstance,
            schema: currentRule
          }), inputProp);
          boom(isValidResult);
        } else if (flag) {
          const actualRule = currentRuleType === 'String' ? currentRule : prototypeToString(currentRule);
          const isInvalidResult = any(inputPropInstance => type(inputPropInstance).toLowerCase() !== actualRule.toLowerCase(), inputProp);
          boom(!isInvalidResult);
        }
      } else if (ruleType === 'RegExp' && inputPropType === 'String') {
        boom(test(rule, inputProp));
      } else {
        boom(false);
      }
    }
  }

  return flag;
}

function isAttach() {
  if (Object.prototype.is !== undefined) {
    return false;
  }

  Object.defineProperty(Object.prototype, 'is', {
    value: function (schema) {
      return isValid({
        input: {
          isProp: this
        },
        schema: {
          isProp: schema
        }
      });
    },
    writable: true,
    configurable: true
  });
  return true;
}

function isFunction$1(fn) {
  return ['Async', 'Promise', 'Function'].includes(type(fn));
}

function isFalsy(x) {
  const typeIs = type(x);
  if (['Array', 'String'].includes(typeIs)) return x.length === 0;
  if (typeIs === 'Object') return Object.keys(x).length === 0;
  if (['Null', 'Undefined'].includes(typeIs)) return true;
  return false;
}

function isPromise(x) {
  return ['Async', 'Promise'].includes(type(x));
}

function isType(xType, x) {
  if (arguments.length === 1) {
    return xHolder => isType(xType, xHolder);
  }

  return type(x) === xType;
}

async function mapAsyncFn(fn, arr) {
  if (Array.isArray(arr)) {
    const willReturn = [];

    for (const a of arr) {
      willReturn.push((await fn(a)));
    }

    return willReturn;
  }

  const willReturn = {};

  for (const prop in arr) {
    willReturn[prop] = await fn(arr[prop], prop);
  }

  return willReturn;
}

function mapAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

async function mapFastAsyncFn(fn, arr) {
  const promised = arr.map(a => fn(a));
  return Promise.all(promised);
}

function mapFastAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapFastAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  let index = -1;
  const len = list.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
}

function mergeAll(arr) {
  let willReturn = {};
  map(val => {
    willReturn = merge(willReturn, val);
  }, arr);
  return willReturn;
}

function check(singleInput, schema) {
  return isValid({
    input: {
      singleInput
    },
    schema: {
      singleInput: schema
    }
  });
}

function ok(...inputs) {
  return (...schemas) => {
    let failedSchema;
    const pass = any((singleInput, i) => {
      const schema = schemas[i] === undefined ? schemas[0] : schemas[i];
      const checked = check(singleInput, schema);

      if (!checked) {
        failedSchema = JSON.stringify({
          input: singleInput,
          schema
        });
      }

      return !checked;
    }, inputs) === false;
    if (!pass) throw new Error(`Failed R.ok with schema ${failedSchema}`);
    return true;
  };
}

function mapToObject(fn, list) {
  if (arguments.length === 1) {
    return listHolder => mapToObject(fn, listHolder);
  }

  ok(type(fn), type(list))('Function', 'Array');
  return mergeAll(map(fn, list));
}

function maybe(ifRule, whenIfRaw, whenElseRaw) {
  const whenIf = ifRule && type(whenIfRaw) === 'Function' ? whenIfRaw() : whenIfRaw;
  const whenElse = !ifRule && type(whenElseRaw) === 'Function' ? whenElseRaw() : whenElseRaw;
  return ifRule ? whenIf : whenElse;
}

function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort(fn);
}

const cache = {};

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1;

  const willReturn = {};
  compose(map(prop => willReturn[prop] = obj[prop]), sort(sortFn))(Object.keys(obj));
  return willReturn;
};

const stringify = a => {
  if (type(a) === 'String') {
    return a;
  } else if (['Function', 'Async'].includes(type(a))) {
    const compacted = replace(/\s{1,}/g, ' ', a.toString());
    return replace(/\s/g, '_', take(15, compacted));
  } else if (type(a) === 'Object') {
    return JSON.stringify(normalizeObject(a));
  }

  return JSON.stringify(a);
};

const generateProp = (fn, ...inputArguments) => {
  let propString = '';
  inputArguments.forEach(inputArgument => {
    propString += `${stringify(inputArgument)}_`;
  });
  return `${propString}${stringify(fn)}`;
};

function memoize$1(fn, ...inputArguments) {
  if (arguments.length === 1) {
    return (...inputArgumentsHolder) => memoize$1(fn, ...inputArgumentsHolder);
  }

  const prop = generateProp(fn, ...inputArguments);
  if (prop in cache) return cache[prop];

  if (type(fn) === 'Async') {
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[prop] = result;
        resolve(result);
      });
    });
  }

  const result = fn(...inputArguments);
  cache[prop] = result;
  return result;
}

function mergeRight(x, y) {
  return merge(y, x);
}

function mergeDeep(target, source) {
  if (arguments.length === 1) {
    return sourceHolder => mergeDeep(target, sourceHolder);
  }

  const willReturn = JSON.parse(JSON.stringify(target));
  Object.keys(source).forEach(key => {
    if (type(source[key]) === 'Object') {
      if (type(target[key]) === 'Object') {
        willReturn[key] = mergeDeep(target[key], source[key]);
      } else {
        willReturn[key] = source[key];
      }
    } else {
      willReturn[key] = source[key];
    }
  });
  return willReturn;
}

function nextIndex(index, list) {
  const newIndex = index >= list.length - 1 ? 0 : index + 1;
  return newIndex;
}

function pass(...inputs) {
  return (...schemas) => any((x, i) => {
    const schema = schemas[i] === undefined ? schemas[0] : schemas[i];
    return !check(x, schema);
  }, inputs) === false;
}

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function onceFn(fn, context) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

function once(fn, context) {
  if (arguments.length === 1) {
    const wrap = onceFn(fn, context);
    return curry(wrap);
  }

  return onceFn(fn, context);
}

function otherwise(fallback, toResolve) {
  if (arguments.length === 1) {
    return toResolveHolder => otherwise(fallback, toResolveHolder);
  }

  return new Promise(resolve => {
    toResolve.then(resolve).catch(e => resolve(fallback(e)));
  });
}

function pathEq(path$$1, target, obj) {
  if (arguments.length === 2) {
    return objHolder => pathEq(path$$1, target, objHolder);
  }

  return path(path$$1, obj) === target;
}

function pipe(...fns) {
  return compose(...fns.reverse());
}

function piped(...inputs) {
  const [input, ...fnList] = inputs;
  return pipe(...fnList)(input);
}

async function pipedAsync(...inputs) {
  const [input, ...fnList] = inputs;
  let argumentsToPass = input;

  while (fnList.length !== 0) {
    const fn = fnList.shift();
    const typeFn = type(fn);

    if (typeFn === 'Async') {
      argumentsToPass = await fn(argumentsToPass);
    } else {
      argumentsToPass = fn(argumentsToPass);
    }
  }

  return argumentsToPass;
}

function prevIndex(index, list) {
  const newIndex = index === 0 ? list.length - 1 : index - 1;
  return newIndex;
}

function helper({
  condition,
  inputArgument,
  prop
}) {
  return new Promise((resolve, reject) => {
    if (!(type(condition) === 'Async')) {
      return resolve({
        type: prop,
        payload: condition(inputArgument)
      });
    }

    condition(inputArgument).then(result => {
      resolve({
        type: prop,
        payload: result
      });
    }).catch(err => reject(err));
  });
}

function produce(conditions, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => produce(conditions, inputArgumentHolder);
  }

  let asyncConditionsFlag = false;

  for (const prop in conditions) {
    if (asyncConditionsFlag === false && type(conditions[prop]) === 'Async') {
      asyncConditionsFlag = true;
    }
  }

  if (asyncConditionsFlag === false) {
    const willReturn = {};

    for (const prop in conditions) {
      willReturn[prop] = conditions[prop](inputArgument);
    }

    return willReturn;
  }

  const promised = [];

  for (const prop in conditions) {
    const condition = conditions[prop];
    promised.push(helper({
      inputArgument,
      condition,
      prop
    }));
  }

  return new Promise((resolve, reject) => {
    Promise.all(promised).then(results => {
      const willReturn = {};
      map(result => willReturn[result.type] = result.payload, results);
      resolve(willReturn);
    }).catch(err => reject(err));
  });
}

function promiseAllObject(promises) {
  return new Promise((res, rej) => {
    let counter = 0;
    const props = {};
    const promisedArr = [];

    for (const prop in promises) {
      props[counter] = prop;
      promisedArr.push(promises[prop]);
      counter++;
    }

    Promise.all(promisedArr).then(result => {
      const willReturn = {};
      result.map((val, key) => {
        const prop = props[key];
        willReturn[prop] = val;
      });
      res(willReturn);
    }).catch(rej);
  });
}

function pushUniq(x, list) {
  if (list.includes(x)) return;
  list.push(x);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(inputs, text) {
  if (arguments.length === 1) {
    return textHolder => remove(inputs, textHolder);
  }

  if (type(text) !== 'String') {
    throw new Error(`R.remove requires string not ${type(text)}`);
  }

  if (type(inputs) !== 'Array') {
    return replace(inputs, '', text).trim();
  }

  let textCopy = text;
  inputs.forEach(singleInput => {
    textCopy = replace(singleInput, '', textCopy).trim();
  });
  return textCopy;
}

function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function renameProps(conditions, inputObject) {
  if (inputObject === undefined) {
    return inputObjectHolder => renameProps(conditions, inputObjectHolder);
  }

  const renamed = {};
  Object.keys(conditions).forEach(renameConditionProp => {
    if (Object.keys(inputObject).includes(renameConditionProp)) {
      renamed[conditions[renameConditionProp]] = inputObject[renameConditionProp];
    }
  });
  return merge(renamed, omit(Object.keys(conditions), inputObject));
}

function resolve(afterResolve, toResolve) {
  if (arguments.length === 1) {
    return toResolveHolder => resolve(afterResolve, toResolveHolder);
  }

  return new Promise(res => {
    toResolve.then(result => res(afterResolve(result)));
  });
}

function s() {
  if (Object.prototype.s === undefined) {
    Object.defineProperty(Object.prototype, 's', {
      value: function (f) {
        return f(this.valueOf());
      },
      writable: true,
      configurable: true
    });
    return true;
  }

  return false;
}

const NO_MATCH_FOUND = Symbol ? Symbol('NO_MATCH_FOUND') : undefined;

const getMatchingKeyValuePair = (cases, testValue, defaultValue) => {
  let iterationValue;

  for (let index = 0; index < cases.length; index++) {
    iterationValue = cases[index].test(testValue);

    if (iterationValue !== NO_MATCH_FOUND) {
      return iterationValue;
    }
  }

  return defaultValue;
};

const isEqual = (testValue, matchValue) => {
  const willReturn = typeof testValue === 'function' ? testValue(matchValue) : equals(testValue, matchValue);
  return willReturn;
};

const is = (testValue, matchResult = true) => ({
  key: testValue,
  test: matchValue => isEqual(testValue, matchValue) ? matchResult : NO_MATCH_FOUND
});

class Switchem {
  constructor(defaultValue, cases, willMatch) {
    if (defaultValue !== undefined && cases === undefined && willMatch === undefined) {
      this.cases = [];
      this.defaultValue = undefined;
      this.willMatch = defaultValue;
    } else {
      this.cases = cases;
      this.defaultValue = defaultValue;
      this.willMatch = willMatch;
    }

    return this;
  }

  default(defaultValue) {
    const holder = new Switchem(defaultValue, this.cases, this.willMatch);
    return holder.match(this.willMatch);
  }

  is(testValue, matchResult) {
    return new Switchem(this.defaultValue, [...this.cases, is(testValue, matchResult)], this.willMatch);
  }

  match(matchValue) {
    return getMatchingKeyValuePair(this.cases, matchValue, this.defaultValue);
  }

}

function switcher(input) {
  return new Switchem(input);
}

function tapAsync(fn, input) {
  if (arguments.length === 1) {
    return inputHolder => tapAsync(fn, inputHolder);
  }

  if (isPromise(fn) === true) {
    return new Promise((resolve, reject) => {
      fn(input).then(() => {
        resolve(input);
      }).catch(reject);
    });
  }

  fn(input);
  return input;
}

const getOccurances = input => input.match(/{{[_a-zA-Z0-9]+}}/g);

const getOccuranceProp = occurance => occurance.replace(/{{|}}/g, '');

const replace$1 = ({
  inputHolder,
  prop,
  replacer
}) => inputHolder.replace(`{{${prop}}}`, replacer);

function template(input, templateInput) {
  if (arguments.length === 1) {
    return templateInputHolder => template(input, templateInputHolder);
  }

  const occurances = getOccurances(input);
  if (occurances === null) return input;
  let inputHolder = input;

  for (const occurance of occurances) {
    const prop = getOccuranceProp(occurance);
    const replacer = templateInput[prop];
    if (replacer === undefined) continue;
    inputHolder = replace$1({
      inputHolder,
      prop,
      replacer
    });
  }

  return inputHolder;
}

function throttle(fn, ms) {
  let wait = false;
  return function (...input) {
    if (!wait) {
      fn.apply(null, input);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, ms);
    }
  };
}

function toDecimal(number, charsAfterDecimalPoint = 2) {
  return Number(parseFloat(String(number)).toFixed(charsAfterDecimalPoint));
}

function toggle(input, list) {
  return input === list[0] ? list[1] : list[0];
}

function tryCatch(fn, fallback) {
  if (!isFunction$1(fn)) {
    throw new Error(`R.tryCatch | fn '${fn}'`);
  }

  const passFallback = isFunction$1(fallback);

  if (!isPromise(fn)) {
    return (...inputs) => {
      try {
        return fn(...inputs);
      } catch (e) {
        return passFallback ? fallback(...inputs) : fallback;
      }
    };
  }

  return (...inputs) => new Promise(resolve => {
    fn(...inputs).then(resolve).catch(() => {
      if (!passFallback) {
        return resolve(fallback);
      }

      if (!isPromise(fallback)) {
        return resolve(fallback(...inputs));
      }

      fallback(...inputs).then(resolve);
    });
  });
}

function unless(condition, whenFalse) {
  if (arguments.length === 1) {
    return whenFalseHolder => unless(condition, whenFalseHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (flag) return input;
    if (isFunction$1(whenFalse)) return whenFalse(input);
    return whenFalse;
  };
}

function range(from, to) {
  if (arguments.length === 1) return _to => range(from, _to);
  const len = to - from;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = from + i;
  }

  return willReturn;
}

function head(list) {
  if (typeof list === 'string') return list[0] || '';
  return list[0];
}

const charCodes = [...range(49, 57), ...range(65, 90), ...range(97, 122)];
const loops = range(0, 8);

function uuid$1() {
  return loops.map(x => String.fromCharCode(head(shuffle(charCodes)))).join('');
}

function wait(fn) {
  return new Promise(resolve => {
    fn.then(result => resolve([result, undefined])).catch(e => resolve([undefined, e]));
  });
}

function waitFor(condition, howLong, loops = 10) {
  const typeCondition = type(condition);
  const passPromise = typeCondition === 'Async';
  const passFunction = typeCondition === 'Function';
  const interval = Math.floor(howLong / loops);

  if (!(passPromise || passFunction)) {
    throw new Error('R.waitFor');
  }

  return async (...inputs) => {
    for (const _ of range(0, loops)) {
      const resultCondition = await condition(...inputs);

      if (resultCondition === false) {
        await delay(interval);
      } else {
        return resultCondition;
      }
    }

    return false;
  };
}

function when(condition, whenTrue) {
  if (arguments.length === 1) {
    return whenTrueHolder => when(condition, whenTrueHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (!flag) return input;
    if (isFunction$1(whenTrue)) return whenTrue(input);
    return whenTrue;
  };
}

function createThenable$1(x) {
  return async function (input) {
    return x(input);
  };
}

function whenAsync(condition, whenTrueFn) {
  if (arguments.length === 1) {
    return whenTrueFnHolder => whenAsync(condition, whenTrueFnHolder);
  }

  return input => new Promise((resolve, reject) => {
    if (typeof condition === 'boolean') {
      if (condition === false) {
        return resolve(input);
      }

      whenTrueFn(input).then(resolve).catch(reject);
    } else {
      const conditionPromise = createThenable$1(condition);
      conditionPromise(input).then(conditionResult => {
        if (conditionResult === false) {
          return resolve(input);
        }

        whenTrueFn(input).then(resolve).catch(reject);
      }).catch(reject);
    }
  });
}

function where(conditions, obj) {
  if (obj === undefined) {
    return objHolder => where(conditions, objHolder);
  }

  let flag = true;

  for (const prop in conditions) {
    const result = conditions[prop](obj[prop]);

    if (flag && result === false) {
      flag = false;
    }
  }

  return flag;
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, list) {
  if (arguments.length === 1) return _list => filter(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return filterObject(fn, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (fn(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function whereEq(rule, input) {
  if (arguments.length === 1) {
    return inputHolder => whereEq(rule, inputHolder);
  }

  if (type(input) !== 'Object') return false;
  const result = filter((ruleValue, ruleProp) => equals(ruleValue, input[ruleProp]), rule);
  return Object.keys(result).length === Object.keys(rule).length;
}

function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b);
  return a + b;
}

function adjustRaw(fn, idx, list) {
  const clone = list.slice();
  const actualIndex = idx < 0 ? clone.length + idx : idx;
  clone[actualIndex] = fn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustRaw);
exports.adjust = adjust;

function allPass(predicates, list) {
  if (arguments.length === 1) return _list => allPass(predicates, _list);
  return !any(fn => !fn(list), predicates);
}

function always(val) {
  return () => val;
}

function anyPass(predicates, list) {
  if (arguments.length === 1) return _list => anyPass(predicates, _list);
  return any(fn => fn(list))(predicates);
}

function append(el, list) {
  if (arguments.length === 1) return _list => append(el, _list);
  if (typeof list === 'string') return `${list}${el}`;
  const clone = list.concat();
  clone.push(el);
  return clone;
}

function assocRaw(prop, val, obj) {
  return Object.assign({}, obj, {
    [prop]: val
  });
}

const assoc = curry(assocRaw);
exports.assoc = assoc;

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return input => f(input) && g(input);
}

function complement(fn) {
  return input => !fn(input);
}

function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
}

const dec = n => n - 1;

exports.dec = dec;

function flagIs$1(inputArgument) {
  return inputArgument === undefined || inputArgument === null || Number.isNaN(inputArgument) === true;
}

function defaultTo(defaultArgument, ...inputArgument) {
  if (arguments.length === 1) {
    return _inputArgument => defaultTo(defaultArgument, _inputArgument);
  } else if (arguments.length === 2) {
    return flagIs$1(inputArgument[0]) ? defaultArgument : inputArgument[0];
  }

  const limit = inputArgument.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArgument[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs$1(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
}

function divide(a, b) {
  if (arguments.length === 1) return _b => divide(a, _b);
  return a / b;
}

function drop(n, list) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return list.slice(n);
}

function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return list.slice(0, -n);
}

function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return input => f(input) || g(input);
}

function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
}

function F() {
  return false;
}

function find(fn, list) {
  if (arguments.length === 1) return _list => find(fn, _list);
  return list.find(fn);
}

function findIndex(fn, list) {
  if (arguments.length === 1) return _list => findIndex(fn, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[0]);
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function toPairs(obj) {
  return Object.entries(obj);
}

function fromPairs(list) {
  const toReturn = {};
  list.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
}

function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list);
  map(fn, list);
  return list;
}

function groupBy(fn, list) {
  if (arguments.length === 1) return _list => groupBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(predicate, list) {
  const toReturn = [];
  let holder = [];
  list.reduce((prev, current, i) => {
    if (i > 0 && predicate(prev, current)) {
      if (holder.length === 0) {
        holder.push(prev);
        holder.push(current);
      } else {
        holder.push(current);
      }
    } else if (i > 0) {
      if (holder.length === 0) {
        toReturn.push([prev]);
        if (i === list.length - 1) holder.push(current);
      } else {
        toReturn.push(holder);
        holder = [];
      }
    }

    return current;
  }, undefined);
  return holder.length === 0 ? toReturn : [...toReturn, holder];
}

function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  return obj[prop] !== undefined;
}

function identity(x) {
  return x;
}

function ifElse(condition, onTrue, onFalse) {
  if (onTrue === undefined) {
    return (_onTrue, _onFalse) => ifElse(condition, _onTrue, _onFalse);
  } else if (onFalse === undefined) {
    return _onFalse => ifElse(condition, onTrue, _onFalse);
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input);

    if (conditionResult === true) {
      return onTrue(input);
    }

    return onFalse(input);
  };
}

const inc = n => n + 1;

exports.inc = inc;

function includes(target, list) {
  if (arguments.length === 1) return _list => includes(target, _list);
  const ok = Array.isArray(list) || typeof list === 'string';
  if (!ok) return false;
  return list.includes(target);
}

function indexBy(fn, list) {
  if (arguments.length === 1) return _list => indexBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    result[fn(item)] = item;
  }

  return result;
}

function indexOf(target, list) {
  if (arguments.length === 1) return _list => indexOf(target, _list);
  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === target) {
      return index;
    }
  }

  return -1;
}

function is$1(ctor, val) {
  if (arguments.length === 1) return _val => is$1(ctor, _val);
  return val != null && val.constructor === ctor || val instanceof ctor;
}

function isNil(x) {
  return x === undefined || x === null;
}

function join(separator, list) {
  if (arguments.length === 1) return _list => join(separator, _list);
  return list.join(separator);
}

function keys(obj) {
  return Object.keys(obj);
}

function lastIndexOf(target, list) {
  if (arguments.length === 1) return _list => lastIndexOf(target, _list);
  let index = list.length;

  while (--index > 0) {
    if (equals(list[index], target)) {
      return index;
    }
  }

  return -1;
}

function length(list) {
  return list.length;
}

function match(pattern, str) {
  if (arguments.length === 1) return _str => match(pattern, _str);
  const willReturn = str.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
}

function maxBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => maxBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => maxBy(fn, _a, _b);
  }

  return fn(b) > fn(a) ? b : a;
}

function min(a, b) {
  if (arguments.length === 1) return _b => min(a, _b);
  return b < a ? b : a;
}

function minBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => minBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => minBy(fn, _a, _b);
  }

  return fn(b) < fn(a) ? b : a;
}

function modulo(a, b) {
  if (arguments.length === 1) return _b => modulo(a, _b);
  return a % b;
}

function multiply(a, b) {
  if (arguments.length === 1) return _b => multiply(a, _b);
  return a * b;
}

function none(fn, list) {
  if (arguments.length === 1) return _list => none(fn, _list);
  return list.filter(fn).length === 0;
}

function not(a) {
  return !a;
}

function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
}

function partialCurry(fn, args = {}) {
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(rest, args)).then(resolve).catch(reject);
      });
    }

    return fn(merge(rest, args));
  };
}

function pathOrRaw(defaultValue, list, obj) {
  return defaultTo(defaultValue, path(list, obj));
}

const pathOr = curry(pathOrRaw);
exports.pathOr = pathOr;

function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
}

function pluck(key, list) {
  if (arguments.length === 1) return _list => pluck(key, _list);
  const willReturn = [];
  map(val => {
    if (val[key] !== undefined) {
      willReturn.push(val[key]);
    }
  }, list);
  return willReturn;
}

function prepend(el, list) {
  if (arguments.length === 1) return _list => prepend(el, _list);
  if (typeof list === 'string') return `${el}${list}`;
  const clone = [el].concat(list);
  return clone;
}

function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
}

function propEq(key, val, obj) {
  if (val === undefined) {
    return (_val, _obj) => propEq(key, _val, _obj);
  } else if (obj === undefined) {
    return _obj => propEq(key, val, _obj);
  }

  return obj[key] === val;
}

function reduceFn(fn, acc, list) {
  return list.reduce(fn, acc);
}

const reduce = curry(reduceFn);
exports.reduce = reduce;

function reject(fn, list) {
  if (arguments.length === 1) return _list => reject(fn, _list);
  return filter((x, i) => !fn(x, i), list);
}

function repeat(val, n) {
  if (arguments.length === 1) return _n => repeat(val, _n);
  const willReturn = Array(n);
  return willReturn.fill(val);
}

function reverse(list) {
  const clone = list.concat();
  return clone.reverse();
}

function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);
    if (fnA === fnB) return 0;
    return fnA < fnB ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str);
  return str.split(separator);
}

function splitEvery(n, list) {
  if (arguments.length === 1) return _list => splitEvery(n, _list);
  const numValue = n > 1 ? n : 1;
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += numValue));
  }

  return willReturn;
}

function startsWith(prefix, list) {
  if (arguments.length === 1) return _list => startsWith(prefix, _list);
  return list.startsWith(prefix);
}

function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
}

function T() {
  return true;
}

function tail(list) {
  return drop(1, list);
}

function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
  let numValue = n > len ? len : n;
  if (typeof list === 'string') return list.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(list, numValue, len);
}

function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
}

function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
  return map(fn, range(0, n));
}

function toString$1(val) {
  return val.toString();
}

function toUpper(str) {
  return str.toUpperCase();
}

function trim(str) {
  return str.trim();
}

function uniq(list) {
  let index = -1;
  const willReturn = [];

  while (++index < list.length) {
    const value = list[index];

    if (!contains(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function uniqWith(fn, list) {
  if (arguments.length === 1) return _list => uniqWith(fn, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.concat();
  return arrClone.fill(val, idx, idx + 1);
}

function values(obj) {
  return Object.values(obj);
}

function without(left, right) {
  if (right === undefined) {
    return _right => without(left, _right);
  }

  return reduce((accum, item) => contains(item, left) ? accum : accum.concat(item), [], right);
}

function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right);
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
}

function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return keys.reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];
    return prev;
  }, {});
}

const DELAY = 'RAMBDAX_DELAY';
exports.DELAY = DELAY;
},{}],"rM7A":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.F = F;
exports.T = T;
exports.add = add;
exports.all = all;
exports.allFalse = allFalse;
exports.allPass = allPass;
exports.allTrue = allTrue;
exports.allType = allType;
exports.always = always;
exports.any = any;
exports.anyFalse = anyFalse;
exports.anyPass = anyPass;
exports.anyTrue = anyTrue;
exports.anyType = anyType;
exports.append = append;
exports.both = both;
exports.change = change;
exports.clone = clone;
exports.compact = compact;
exports.opposite = exports.complement = complement;
exports.compose = compose;
exports.composeAsync = composeAsync;
exports.composed = composed;
exports.concat = concat;
exports.contains = contains;
exports.count = count;
exports.curry = curry;
exports.debounce = debounce;
exports.defaultTo = defaultTo;
exports.defaultToStrict = defaultToStrict;
exports.defaultToWhen = defaultToWhen;
exports.delay = delay;
exports.dissoc = dissoc;
exports.divide = divide;
exports.drop = drop;
exports.dropLast = dropLast;
exports.either = either;
exports.endsWith = endsWith;
exports.equals = equals;
exports.filter = filter;
exports.find = find;
exports.findInObject = findInObject;
exports.findIndex = findIndex;
exports.findModify = findModify;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.flip = flip;
exports.forEach = forEach;
exports.fromPairs = fromPairs;
exports.getter = getter;
exports.glue = glue;
exports.groupBy = groupBy;
exports.groupWith = groupWith;
exports.has = has;
exports.hasPath = hasPath;
exports.head = head;
exports.headObject = headObject$1;
exports.identity = identity;
exports.ifElseAsync = ifElseAsync;
exports.includes = includes;
exports.includesType = includesType;
exports.indexBy = indexBy;
exports.indexOf = indexOf;
exports.init = init;
exports.inject = inject;
exports.interval = interval;
exports.is = is$1;
exports.isAttach = isAttach;
exports.isFalsy = isFalsy;
exports.isFunction = isFunction$1;
exports.isNil = isNil;
exports.isPromise = isPromise;
exports.isPrototype = isPrototype;
exports.isType = isType;
exports.isValid = isValid;
exports.join = join;
exports.keys = keys;
exports.last = last;
exports.lastIndexOf = lastIndexOf;
exports.length = length;
exports.map = map;
exports.mapAsync = mapAsync;
exports.mapFastAsync = mapFastAsync;
exports.mapToObject = mapToObject;
exports.match = match;
exports.max = max;
exports.maxBy = maxBy;
exports.maybe = maybe;
exports.memoize = memoize$1;
exports.merge = merge;
exports.mergeAll = mergeAll;
exports.mergeDeep = mergeDeep;
exports.mergeRight = mergeRight;
exports.min = min;
exports.minBy = minBy;
exports.modulo = modulo;
exports.multiply = multiply;
exports.nextIndex = nextIndex;
exports.none = none;
exports.not = not;
exports.nth = nth;
exports.ok = ok;
exports.omit = omit;
exports.once = once;
exports.otherwise = otherwise;
exports.partial = partial;
exports.partialCurry = partialCurry;
exports.partition = partition;
exports.pass = pass;
exports.path = path;
exports.pathEq = pathEq;
exports.pick = pick;
exports.pickAll = pickAll;
exports.pipe = pipe;
exports.piped = piped;
exports.pipedAsync = pipedAsync;
exports.pluck = pluck;
exports.prepend = prepend;
exports.prevIndex = prevIndex;
exports.produce = produce;
exports.promiseAllObject = promiseAllObject;
exports.prop = prop;
exports.prototypeToString = prototypeToString;
exports.pushUniq = pushUniq;
exports.random = random;
exports.range = range;
exports.reject = reject;
exports.remove = remove;
exports.renameProps = renameProps;
exports.repeat = repeat;
exports.replace = replace;
exports.reset = reset;
exports.resolve = resolve;
exports.reverse = reverse;
exports.runTests = runTests;
exports.s = s;
exports.setter = setter;
exports.shuffle = shuffle;
exports.sort = sort;
exports.sortBy = sortBy;
exports.split = split;
exports.splitEvery = splitEvery;
exports.startsWith = startsWith;
exports.subtract = subtract;
exports.switcher = switcher;
exports.tail = tail;
exports.take = take;
exports.takeLast = takeLast;
exports.tap = tap;
exports.tapAsync = tapAsync;
exports.template = template;
exports.test = test$1;
exports.throttle = throttle;
exports.times = times;
exports.toDecimal = toDecimal;
exports.toLower = toLower;
exports.toPairs = toPairs;
exports.toString = toString$1;
exports.toUpper = toUpper;
exports.toggle = toggle;
exports.trim = trim;
exports.tryCatch = tryCatch;
exports.type = type;
exports.uniq = uniq;
exports.uniqWith = uniqWith;
exports.unless = unless;
exports.update = update;
exports.uuid = uuid;
exports.values = values;
exports.wait = wait;
exports.waitFor = waitFor;
exports.when = when;
exports.whenAsync = whenAsync;
exports.where = where;
exports.whereEq = whereEq;
exports.without = without;
exports.zip = zip;
exports.zipObj = zipObj;
exports.reduce = exports.propEq = exports.pathOr = exports.inc = exports.ifElse = exports.dec = exports.assoc = exports.adjust = exports.DELAY = void 0;

function type(input) {
  const typeOf = typeof input;
  const asStr = input && input.toString ? input.toString() : '';

  if (input === null) {
    return 'Null';
  } else if (input === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(input) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(input)) {
    return 'Array';
  } else if (input instanceof RegExp) {
    return 'RegExp';
  }

  if (['true', 'false'].includes(asStr)) return 'Boolean';
  if (!Number.isNaN(Number(asStr))) return 'Number';
  if (asStr.startsWith('async')) return 'Async';
  if (asStr === '[object Promise]') return 'Promise';
  if (typeOf === 'function') return 'Function';
  if (input instanceof String) return 'String';
  return 'Object';
}

function parseError(maybeError) {
  const typeofError = maybeError.__proto__.toString();

  if (!['Error', 'TypeError'].includes(typeofError)) return [];
  return [typeofError, maybeError.message];
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) return [false];
  return [true, maybeDate.getTime()];
}

function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);
  const aType = type(a);
  if (aType !== type(b)) return false;
  if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
  if (aType === 'String') return a === b;
  if (['Boolean', 'Number'].includes(aType)) return a.toString() === b.toString();

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  const aDate = parseDate(a);
  const bDate = parseDate(b);

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false;
  } else if (bDate[0]) return false;

  const aError = parseError(a);
  const bError = parseError(b);

  if (aError[0]) {
    return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    let loopObjectFlag = true;
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }

  return false;
}

function contains(val, list) {
  if (arguments.length === 1) return _list => contains(val, _list);
  let index = -1;

  while (++index < list.length) {
    if (equals(list[index], val)) {
      return true;
    }
  }

  return false;
}

function allFalse(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    const x = inputs[counter];

    if (type(x) === 'Function') {
      if (inputs[counter]()) {
        return false;
      }
    } else if (inputs[counter]) {
      return false;
    }

    counter++;
  }

  return true;
}

function allTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    const x = inputs[counter];

    if (type(x) === 'Function') {
      if (!inputs[counter]()) {
        return false;
      }
    } else if (!inputs[counter]) {
      return false;
    }

    counter++;
  }

  return true;
}

function allType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) !== targetType) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function anyFalse(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (!inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyTrue(...inputs) {
  let counter = 0;

  while (counter < inputs.length) {
    if (inputs[counter]) {
      return true;
    }

    counter++;
  }

  return false;
}

function anyType(targetType) {
  return (...inputs) => {
    let counter = 0;

    while (counter < inputs.length) {
      if (type(inputs[counter]) === targetType) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

const FUNC_ERROR_TEXT = 'Expected a function';
const HASH_UNDEFINED = '__lodash_hash_undefined__';
const INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;
const funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reEscapeChar = /\\(\\)?/g;
const reIsHostCtor = /^\[object .+?Constructor\]$/;
const reIsUint = /^(?:0|[1-9]\d*)$/;
const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
const freeSelf = typeof self === 'object' && self && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function('return this')();

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

function isHostObject(value) {
  let result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = Boolean(String(value));
    } catch (e) {}
  }

  return result;
}

const arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;
const coreJsData = root['__core-js_shared__'];

const maskSrcKey = function () {
  const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

const funcToString = funcProto.toString;
const {
  hasOwnProperty
} = objectProto;
const objectToString = objectProto.toString;
const reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
const {
  Symbol: Symbol$1
} = root,
      {
  splice
} = arrayProto;
const Map = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');
const symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

function Hash(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

function hashGet(key) {
  const data = this.__data__;

  if (nativeCreate) {
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

function hashHas(key) {
  const data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

function hashSet(key, value) {
  const data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function ListCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function listCacheClear() {
  this.__data__ = [];
}

function listCacheDelete(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  const lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}

function listCacheGet(key) {
  const data = this.__data__,
        index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  const data = this.__data__,
        index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

function MapCache(entries) {
  let index = -1;
  const length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}

function mapCacheDelete(key) {
  return getMapData(this, key).delete(key);
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

function assignValue(object, key, value) {
  const objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

function assocIndexOf(array, key) {
  let {
    length
  } = array;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  const pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = isKey(path, object) ? [path] : castPath(path);
  let index = -1;
  let nested = object;
  const {
    length
  } = path;
  const lastIndex = length - 1;

  while (nested != null && ++index < length) {
    let key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      const objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

function baseToString(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

function getMapData(map, key) {
  const data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}

function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return Boolean(length) && (typeof value === 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  const type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

function isKeyable(value) {
  const type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

function isMasked(func) {
  return Boolean(maskSrcKey) && maskSrcKey in func;
}

var stringToPath = memoize(string => {
  string = toString(string);
  const result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, (match, number, quote, string) => {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return String(func);
    } catch (e) {}
  }

  return '';
}

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    const args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          {
      cache
    } = memoized;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var {
  isArray
} = Array;

function isFunction(value) {
  const tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

function isObject(value) {
  const type = typeof value;
  return Boolean(value) && (type == 'object' || type == 'function');
}

function isObjectLike(value) {
  return Boolean(value) && typeof value === 'object';
}

function isSymbol(value) {
  return typeof value === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

function toString(value) {
  return value == null ? '' : baseToString(value);
}

function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

function whenObject(predicate, input) {
  const yes = {};
  const no = {};
  Object.entries(input).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value;
    } else {
      no[prop] = value;
    }
  });
  return [yes, no];
}

function partition(predicate, input) {
  if (arguments.length === 1) {
    return listHolder => partition(predicate, listHolder);
  }

  if (!Array.isArray(input)) return whenObject(predicate, input);
  const yes = [];
  const no = [];
  let counter = -1;

  while (counter++ < input.length - 1) {
    if (predicate(input[counter], counter)) {
      yes.push(input[counter]);
    } else {
      no.push(input[counter]);
    }
  }

  return [yes, no];
}

const isObject$1 = x => {
  const ok = x !== null && !Array.isArray(x) && typeof x === 'object';

  if (!ok) {
    return false;
  }

  return Object.keys(x).length > 0;
};

function change(origin, pathRaw, rules) {
  const willReturn = JSON.parse(JSON.stringify(origin));

  if (!isObject$1(rules)) {
    set(willReturn, pathRaw, rules);
    return willReturn;
  }

  const path = pathRaw === '' ? '' : `${pathRaw}.`;

  for (const ruleKey of Object.keys(rules)) {
    const rule = rules[ruleKey];

    if (!isObject$1(rule)) {
      set(willReturn, `${path}${ruleKey}`, rule);
      continue;
    }

    const [withObjects, withoutObjects] = partition(subruleKey => isObject$1(rule[subruleKey]), Object.keys(rule));
    withoutObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      set(willReturn, `${path}${ruleKey}.${subruleKey}`, subrule);
    });
    withObjects.forEach(subruleKey => {
      const subrule = rule[subruleKey];
      Object.keys(subrule).forEach(deepKey => {
        const deep = rule[subruleKey][deepKey];

        if (!isObject$1(deep)) {
          return set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}`, deep);
        }

        Object.keys(deep).forEach(superDeepKey => {
          const superDeep = rule[subruleKey][deepKey][superDeepKey];
          set(willReturn, `${path}${ruleKey}.${subruleKey}.${deepKey}.${superDeepKey}`, superDeep);
        });
      });
    });
  }

  return willReturn;
}

const forbidden = ['Null', 'Undefined', 'RegExp'];
const allowed = ['Number', 'Boolean'];
const notEmpty = ['Array', 'String'];

function compact(arr) {
  const willReturn = [];
  arr.forEach(a => {
    const currentType = type(a);
    if (forbidden.includes(currentType)) return;
    if (allowed.includes(currentType)) return willReturn.push(a);

    if (currentType === 'Object') {
      if (!equals(a, {})) willReturn.push(a);
      return;
    }

    if (!notEmpty.includes(currentType)) return;
    if (a.length === 0) return;
    willReturn.push(a);
  });
  return willReturn;
}

function composeAsync(...inputArguments) {
  return async function (startArgument) {
    let argumentsToPass = startArgument;

    while (inputArguments.length !== 0) {
      const fn = inputArguments.pop();
      const typeFn = type(fn);

      if (typeFn === 'Async') {
        argumentsToPass = await fn(argumentsToPass);
      } else {
        argumentsToPass = fn(argumentsToPass);
      }
    }

    return argumentsToPass;
  };
}

function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return (...args) => {
    const list = fns.slice();

    if (list.length > 0) {
      const fn = list.pop();
      let result = fn(...args);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }
  };
}

function last(list) {
  if (typeof list === 'string') return list[list.length - 1] || '';
  return list[list.length - 1];
}

function baseSlice(array, start, end) {
  let index = -1;
  let {
    length
  } = array;
  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  const result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

function init(list) {
  if (typeof list === 'string') return list.slice(0, -1);
  return list.length ? baseSlice(list, 0, -1) : [];
}

function composed(...inputs) {
  return compose(...init(inputs))(last(inputs));
}

function count(target, list) {
  if (arguments.length === 1) {
    return listHolder => count(target, listHolder);
  }

  if (!Array.isArray(list)) return 0;
  return list.filter(x => equals(x, target)).length;
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      func.apply(null, input);
    }
  };
}

function flagIs(targetType, input) {
  if (!input) return false;
  if (type(input) !== targetType) return false;
  if (targetType === 'Array') return !equals([], input);
  if (targetType === 'Object') return !equals({}, input);
  return true;
}

function defaultToStrict(defaultArgument, ...inputArguments) {
  if (arguments.length === 1) {
    return inputArgumentsHolder => defaultToStrict(defaultArgument, inputArgumentsHolder);
  }

  if (arguments.length === 2) {
    return flagIs(type(defaultArgument), inputArguments[0]) ? inputArguments[0] : defaultArgument;
  }

  const targetType = type(defaultArgument);
  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs(targetType, instance)) {
      holder = instance;
      ready = true;
    } else {
      len -= 1;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
}

function mapObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    willReturn[prop] = fn(obj[prop], prop, obj);
  }

  return willReturn;
}

function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  let index = -1;
  const len = list.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
}

function filterObject(fn, obj) {
  const willReturn = {};

  for (const prop in obj) {
    if (fn(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop];
    }
  }

  return willReturn;
}

function filter(fn, list) {
  if (arguments.length === 1) return _list => filter(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return filterObject(fn, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (fn(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
}

function maybe(ifRule, whenIfRaw, whenElseRaw) {
  const whenIf = ifRule && type(whenIfRaw) === 'Function' ? whenIfRaw() : whenIfRaw;
  const whenElse = !ifRule && type(whenElseRaw) === 'Function' ? whenElseRaw() : whenElseRaw;
  return ifRule ? whenIf : whenElse;
}

function headObject(x) {
  if (type(x) !== 'Object') throw new Error('R.headObject.type');
  const [tag, no] = Object.keys(x);
  if (tag === undefined) throw new Error('R.headObject.less');
  if (no !== undefined) throw new Error('R.headObject.more');
  return {
    prop: tag,
    value: x[tag]
  };
}

function any(fn, list) {
  if (arguments.length === 1) return _list => any(fn, _list);
  let counter = 0;

  while (counter < list.length) {
    if (fn(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
}

function toLower(str) {
  return str.toLowerCase();
}

function includes(target, list) {
  if (arguments.length === 1) return _input => includes(target, _input);

  if (typeof list === 'string') {
    return list.includes(target);
  }

  if (!Array.isArray(list)) return false;
  let index = -1;

  while (++index < list.length) {
    if (equals(list[index], target)) {
      return true;
    }
  }

  return false;
}

function test$1(pattern, str) {
  if (arguments.length === 1) return _str => test$1(pattern, _str);

  if (typeof pattern === 'string') {
    throw new TypeError(`‘test’ requires a value of type RegExp as its first argument; received "${pattern}"`);
  }

  return str.search(pattern) !== -1;
}

function all(fn, list) {
  if (arguments.length === 1) return _list => all(fn, _list);

  for (let i = 0; i < list.length; i++) {
    if (!fn(list[i], i)) return false;
  }

  return true;
}

function isPrototype(input) {
  const currentPrototype = input.prototype;
  const list = [Number, String, Boolean, Promise];
  let toReturn = false;
  let counter = -1;

  while (++counter < list.length && !toReturn) {
    if (currentPrototype === list[counter].prototype) toReturn = true;
  }

  return toReturn;
}

function prototypeToString(input) {
  const currentPrototype = input.prototype;
  const list = [Number, String, Boolean, Promise];
  const translatedList = ['Number', 'String', 'Boolean', 'Promise'];
  let found;
  let counter = -1;

  while (++counter < list.length) {
    if (currentPrototype === list[counter].prototype) found = counter;
  }

  return translatedList[found];
}

const typesWithoutPrototype = ['any', 'promise', 'async', 'function'];

function fromPrototypeToString(rule) {
  if (Array.isArray(rule) || rule === undefined || rule === null || rule.prototype === undefined || typesWithoutPrototype.includes(rule)) {
    return {
      rule,
      parsed: false
    };
  }

  if (String.prototype === rule.prototype) {
    return {
      rule: 'string',
      parsed: true
    };
  }

  if (Boolean.prototype === rule.prototype) {
    return {
      rule: 'boolean',
      parsed: true
    };
  }

  if (Number.prototype === rule.prototype) {
    return {
      rule: 'number',
      parsed: true
    };
  }

  return {
    rule: type(rule.prototype).toLowerCase(),
    parsed: true
  };
}

function getRuleAndType(schema, requirementRaw) {
  const ruleRaw = schema[requirementRaw];
  const typeIs = type(ruleRaw);
  const {
    rule,
    parsed
  } = fromPrototypeToString(ruleRaw);
  return {
    rule: rule,
    ruleType: parsed ? 'String' : typeIs
  };
}

function isValid({
  input,
  schema
}) {
  if (input === undefined || schema === undefined) return false;
  let flag = true;

  const boom = boomFlag => {
    if (!boomFlag) {
      flag = false;
    }
  };

  for (const requirementRaw in schema) {
    if (flag) {
      const isOptional = requirementRaw.endsWith('?');
      const requirement = isOptional ? init(requirementRaw) : requirementRaw;
      const {
        rule,
        ruleType
      } = getRuleAndType(schema, requirementRaw);
      const inputProp = input[requirement];
      const inputPropType = type(input[requirement]);
      const ok = isOptional && inputProp !== undefined || !isOptional;
      if (!ok || rule === 'any' && inputProp != null || rule === inputProp) continue;

      if (ruleType === 'Object') {
        const isValidResult = isValid({
          input: inputProp,
          schema: rule
        });
        boom(isValidResult);
      } else if (ruleType === 'String') {
        boom(toLower(inputPropType) === rule);
      } else if (typeof rule === 'function') {
        boom(rule(inputProp));
      } else if (ruleType === 'Array' && inputPropType === 'String') {
        boom(includes(inputProp, rule));
      } else if (ruleType === 'Array' && rule.length === 1 && inputPropType === 'Array') {
        const [currentRule] = rule;
        const currentRuleType = type(currentRule);
        boom(currentRuleType === 'String' || currentRuleType === 'Object' || isPrototype(currentRule));

        if (currentRuleType === 'Object' && flag) {
          const isValidResult = all(inputPropInstance => isValid({
            input: inputPropInstance,
            schema: currentRule
          }), inputProp);
          boom(isValidResult);
        } else if (flag) {
          const actualRule = currentRuleType === 'String' ? currentRule : prototypeToString(currentRule);
          const isInvalidResult = any(inputPropInstance => type(inputPropInstance).toLowerCase() !== actualRule.toLowerCase(), inputProp);
          boom(!isInvalidResult);
        }
      } else if (ruleType === 'RegExp' && inputPropType === 'String') {
        boom(test$1(rule, inputProp));
      } else {
        boom(false);
      }
    }
  }

  return flag;
}

function check(singleInput, schema) {
  return isValid({
    input: {
      singleInput
    },
    schema: {
      singleInput: schema
    }
  });
}

function ok(...inputs) {
  return (...schemas) => {
    let failedSchema;
    const pass = any((singleInput, i) => {
      const schema = schemas[i] === undefined ? schemas[0] : schemas[i];
      const checked = check(singleInput, schema);

      if (!checked) {
        failedSchema = JSON.stringify({
          input: singleInput,
          schema
        });
      }

      return !checked;
    }, inputs) === false;
    if (!pass) throw new Error(`Failed R.ok with schema ${failedSchema}`);
    return true;
  };
}

function pass(...inputs) {
  return (...schemas) => any((x, i) => {
    const schema = schemas[i] === undefined ? schemas[0] : schemas[i];
    return !check(x, schema);
  }, inputs) === false;
}

const TEST_MODES = ['ok', 'fail', 'danger'];

const dataPredicate = data => {
  const filtered = filter(x => {
    if (type(x) !== 'Object') return true;
    const keys = Object.keys(x);
    const len = keys.length;
    if (len === 1) return true;
    if (len === 2 && typeof x.label === 'string') return true;
    if (len === 2 && keys.includes('match')) return true;
    if (len === 3 && keys.includes('match') && typeof x.label === 'string') return true;
    return false;
  }, data);
  return Object.keys(filtered).length === Object.keys(data).length;
};

const parseData = map(x => {
  if (type(x) !== 'Object') return {
    ok: x
  };
  const keys = Object.keys(x);
  const len = keys.length;

  if (len === 1) {
    const {
      prop
    } = headObject(x);
    return TEST_MODES.includes(prop) ? x : {
      ok: x
    };
  }

  if (len === 2 && keys.includes('label')) {
    const {
      prop
    } = headObject(omit('label', x));
    return TEST_MODES.includes(prop) ? x : {
      ok: x
    };
  }

  if (len === 2 && keys.includes('match')) {
    const {
      prop
    } = headObject(omit('match', x));
    return TEST_MODES.includes(prop) ? x : {
      ok: x
    };
  }

  if (len === 3 && keys.includes('match') && keys.includes('label')) {
    const {
      prop
    } = headObject(omit('match,label', x));
    return TEST_MODES.includes(prop) ? x : {
      ok: x
    };
  }

  return {
    ok: x
  };
});

function runTests(input, optionsInput = {}) {
  const options = _objectSpread2({
    logFlag: false,
    async: false
  }, optionsInput);

  const pass$1 = pass(input)({
    label: 'string',
    data: dataPredicate
  });

  if (describe === undefined || !pass$1) {
    throw new Error('R.runTests.init');
  }

  try {
    const {
      label: suiteLabel,
      fn,
      data
    } = input;
    const counters = {
      ok: -1,
      fail: -1,
      danger: -1
    };
    describe(suiteLabel, () => {
      parseData(data).forEach(dataInstanceInput => {
        const keys = Object.keys(dataInstanceInput);
        const withAsync = options.async;
        const withLabel = keys.includes('label');
        const withMatch = keys.includes('match');
        const dataInstance = withLabel || withMatch ? omit('label,match', dataInstanceInput) : dataInstanceInput;
        const {
          prop: testMode,
          value: x
        } = headObject(dataInstance);
        if (!TEST_MODES.includes(testMode)) return;

        if (!withLabel) {
          counters[testMode] = counters[testMode] + 1;
        }

        const appendLabel = maybe(withLabel, '', counters[testMode] > 0 ? ` - ${counters[testMode]}` : '');
        const testLabel = withLabel ? dataInstanceInput.label : `${testMode}${appendLabel}`;

        if (testMode === 'ok' && !withMatch && !withAsync) {
          test(testLabel, () => {
            const result = fn(x);
            if (options.logFlag) console.log({
              result,
              testLabel
            });
            expect(result).toBeTruthy();
          });
        }

        if (testMode === 'ok' && !withMatch && withAsync) {
          test(testLabel, async () => {
            const result = await fn(x);
            if (options.logFlag) console.log({
              result,
              testLabel
            });
            expect(result).toBeTruthy();
          });
        }

        if (testMode === 'ok' && withMatch && !withAsync) {
          test(testLabel, () => {
            const result = fn(x);
            if (options.logFlag) console.log({
              result,
              match: dataInstanceInput.match,
              testLabel
            });
            expect(equals(result, dataInstanceInput.match)).toBeTruthy();
          });
        }

        if (testMode === 'ok' && withMatch && withAsync) {
          test(testLabel, async () => {
            const result = await fn(x);
            if (options.logFlag) console.log({
              result,
              match: dataInstanceInput.match,
              testLabel
            });
            expect(equals(result, dataInstanceInput.match)).toBeTruthy();
          });
        }

        if (testMode === 'fail' && !withMatch && !withAsync) {
          test(testLabel, () => {
            const result = fn(x);
            if (options.logFlag) console.log({
              result,
              testLabel
            });
            expect(result).toBeFalsy();
          });
        }

        if (testMode === 'fail' && !withMatch && withAsync) {
          test(testLabel, async () => {
            const result = await fn(x);
            if (options.logFlag) console.log({
              result,
              testLabel
            });
            expect(result).toBeFalsy();
          });
        }

        if (testMode === 'fail' && withMatch && !withAsync) {
          test(testLabel, () => {
            const result = fn(x);
            if (options.logFlag) console.log({
              result,
              match: dataInstanceInput.match,
              testLabel
            });
            expect(equals(result, dataInstanceInput.match)).toBeFalsy();
          });
        }

        if (testMode === 'fail' && withMatch && withAsync) {
          test(testLabel, async () => {
            const result = await fn(x);
            if (options.logFlag) console.log({
              result,
              match: dataInstanceInput.match,
              testLabel
            });
            expect(equals(result, dataInstanceInput.match)).toBeFalsy();
          });
        }

        if (testMode === 'danger' && !withMatch && !withAsync) {
          test(testLabel, () => {
            if (options.logFlag) console.log({
              x,
              testLabel
            });
            expect(() => fn(x)).toThrow();
          });
        }

        if (testMode === 'danger' && !withMatch && withAsync) {
          test(testLabel, async () => {
            if (options.logFlag) console.log({
              x,
              testLabel
            });

            try {
              await fn(x);
              expect('danger should throw but it didn\'t').toBe('');
            } catch (error) {
              expect('danger should throw and it did').toBe('danger should throw and it did');
            }
          });
        }

        if (testMode === 'danger' && withMatch && !withAsync) {
          test(testLabel, () => {
            if (options.logFlag) console.log({
              x,
              testLabel,
              match: dataInstanceInput.match
            });
            expect(() => fn(x)).toThrow(dataInstanceInput.match);
          });
        }

        if (testMode === 'danger' && withMatch && withAsync) {
          test(testLabel, async () => {
            if (options.logFlag) console.log({
              x,
              testLabel,
              match: dataInstanceInput.match
            });

            try {
              await fn(x);
              expect('danger test mode should throw but it didn\'t').toBe('');
            } catch (error) {
              const matchError = equals(error, dataInstanceInput.match);
              const messageError = equals(error, new Error(dataInstanceInput.match));
              expect(matchError || messageError).toBeTruthy();
            }
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
    throw new Error('R.runTestsCatch');
  }
}

function defaultToWhen(defaultArgument, fn, ...inputArguments) {
  if (arguments.length === 2) {
    return (...inputArgumentsHolder) => defaultToWhen(defaultArgument, fn, ...inputArgumentsHolder);
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (fn(instance) === true) {
      holder = instance;
      ready = true;
    } else {
      len -= 1;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('RAMBDAX_DELAY');
    }, ms);
  });
}

function findInObject(fn, obj) {
  if (arguments.length === 1) {
    return objHolder => findInObject(fn, objHolder);
  }

  let willReturn = {
    fallback: true
  };
  Object.entries(obj).forEach(([prop, value]) => {
    if (willReturn.fallback) {
      if (fn(value, prop)) {
        willReturn = {
          prop,
          value
        };
      }
    }
  });
  return willReturn;
}

function findModify(fn, list) {
  if (arguments.length === 1) {
    return listHolder => findModify(fn, listHolder);
  }

  const len = list.length;
  if (len === 0) return false;
  let index = -1;

  while (++index < len) {
    const result = fn(list[index], index);

    if (result !== false) {
      return result;
    }
  }

  return false;
}

function flatMap(fn, xs) {
  if (arguments.length === 1) {
    return xsHolder => flatMap(fn, xsHolder);
  }

  return [].concat(...xs.map(fn));
}

function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
}

function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
}

let holder = {};

function getter(key) {
  const typeKey = type(key);
  if (typeKey === 'String') return holder[key];
  if (typeKey === 'Array') return pick(key, holder);
  return holder;
}

function setter(maybeKey, maybeValue) {
  const typeKey = type(maybeKey);
  const typeValue = type(maybeValue);

  if (typeKey === 'String') {
    if (typeValue === 'Function') {
      return holder[maybeKey] = maybeValue(holder[maybeKey]);
    }

    return holder[maybeKey] = maybeValue;
  }

  if (typeKey !== 'Object') return;
  holder = merge(holder, maybeKey);
}

function reset() {
  holder = {};
}

function glue(input, glueChar) {
  return input.split('\n').filter(x => x.trim().length > 0).map(x => x.trim()).join(glueChar === undefined ? ' ' : glueChar);
}

function path(list, obj) {
  if (arguments.length === 1) return _obj => path(list, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  let willReturn = obj;
  let counter = 0;
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
}

function hasPath(maybePath, obj) {
  if (arguments.length === 1) {
    return objHolder => hasPath(maybePath, objHolder);
  }

  return path(maybePath, obj) !== undefined;
}

function headObject$1(input) {
  const [head, _] = Object.entries(input);
  if (!head) return {
    prop: undefined,
    value: undefined
  };
  if (_) throw new Error('R.headObject expects object with only one key');
  return {
    prop: head[0],
    value: head[1]
  };
}

function createThenable(x) {
  return async function (input) {
    return x(input);
  };
}

function ifElseAsync(condition, ifFn, elseFn) {
  return input => new Promise((resolve, reject) => {
    const conditionPromise = createThenable(condition);
    const ifFnPromise = createThenable(ifFn);
    const elseFnPromise = createThenable(elseFn);
    conditionPromise(input).then(conditionResult => {
      const promised = conditionResult === true ? ifFnPromise : elseFnPromise;
      promised(input).then(resolve).catch(reject);
    }).catch(reject);
  });
}

function includesType(targetType, list) {
  if (arguments.length === 1) {
    return listHolder => includesType(targetType, listHolder);
  }

  return any(x => type(x) === targetType, list);
}

function replace(pattern, replacer, str) {
  if (replacer === undefined) {
    return (_replacer, _str) => replace(pattern, _replacer, _str);
  } else if (str === undefined) {
    return _str => replace(pattern, replacer, _str);
  }

  return str.replace(pattern, replacer);
}

function inject(injection, marker, content, beforeFlag = false) {
  return replace(marker, beforeFlag ? `${injection}${marker}` : `${marker}${injection}`, content);
}

function range(from, to) {
  if (arguments.length === 1) return _to => range(from, _to);

  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (to < from) return [];
  const len = to - from;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = from + i;
  }

  return willReturn;
}

function head(list) {
  if (typeof list === 'string') return list[0] || '';
  return list[0];
}

function shuffle(arrayRaw) {
  const array = arrayRaw.concat();
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const charCodes = [...range(49, 57), ...range(65, 90), ...range(97, 122)];

function uuid(length = 8) {
  const loops = range(0, length);
  return loops.map(x => String.fromCharCode(head(shuffle(charCodes)))).join('');
}

const holder$1 = {};

function interval({
  fn,
  ms,
  stopWhen
}) {
  const key = uuid();
  return new Promise(resolve => {
    holder$1[key] = setInterval(() => {
      if (stopWhen() === true) {
        clearInterval(holder$1[key]);
        resolve();
      } else {
        fn();
      }
    }, ms);
  });
}

function isAttach() {
  if (Object.prototype.is !== undefined) {
    return false;
  }

  Object.defineProperty(Object.prototype, 'is', {
    value: function (schema) {
      return isValid({
        input: {
          isProp: this
        },
        schema: {
          isProp: schema
        }
      });
    },
    writable: true,
    configurable: true
  });
  return true;
}

function isFunction$1(fn) {
  return ['Async', 'Promise', 'Function'].includes(type(fn));
}

function isFalsy(x) {
  const typeIs = type(x);
  if (['Array', 'String'].includes(typeIs)) return x.length === 0;
  if (typeIs === 'Object') return Object.keys(x).length === 0;
  if (['Null', 'Undefined'].includes(typeIs)) return true;
  return false;
}

function isPromise(x) {
  return ['Async', 'Promise'].includes(type(x));
}

function isType(xType, x) {
  if (arguments.length === 1) {
    return xHolder => isType(xType, xHolder);
  }

  return type(x) === xType;
}

async function mapAsyncFn(fn, arr) {
  if (Array.isArray(arr)) {
    const willReturn = [];
    let i = 0;

    for (const a of arr) {
      willReturn.push((await fn(a, i++)));
    }

    return willReturn;
  }

  const willReturn = {};

  for (const prop in arr) {
    willReturn[prop] = await fn(arr[prop], prop);
  }

  return willReturn;
}

function mapAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

async function mapFastAsyncFn(fn, arr) {
  const promised = arr.map((a, i) => fn(a, i));
  return Promise.all(promised);
}

function mapFastAsync(fn, arr) {
  if (arguments.length === 1) {
    return async holder => mapFastAsyncFn(fn, holder);
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr).then(resolve).catch(reject);
  });
}

function mergeAll(arr) {
  let willReturn = {};
  map(val => {
    willReturn = merge(willReturn, val);
  }, arr);
  return willReturn;
}

function mapToObject(fn, list) {
  if (arguments.length === 1) {
    return listHolder => mapToObject(fn, listHolder);
  }

  ok(type(fn), type(list))('Function', 'Array');
  return mergeAll(map(fn, list));
}

function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort(fn);
}

function take(n, list) {
  if (arguments.length === 1) return _list => take(n, _list);
  if (n < 0) return list.slice();
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
}

const cache = {};

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1;

  const willReturn = {};
  compose(map(prop => willReturn[prop] = obj[prop]), sort(sortFn))(Object.keys(obj));
  return willReturn;
};

const stringify = a => {
  if (type(a) === 'String') {
    return a;
  } else if (['Function', 'Async'].includes(type(a))) {
    const compacted = replace(/\s{1,}/g, ' ', a.toString());
    return replace(/\s/g, '_', take(15, compacted));
  } else if (type(a) === 'Object') {
    return JSON.stringify(normalizeObject(a));
  }

  return JSON.stringify(a);
};

const generateProp = (fn, ...inputArguments) => {
  let propString = '';
  inputArguments.forEach(inputArgument => {
    propString += `${stringify(inputArgument)}_`;
  });
  return `${propString}${stringify(fn)}`;
};

function memoize$1(fn, ...inputArguments) {
  if (arguments.length === 1) {
    return (...inputArgumentsHolder) => memoize$1(fn, ...inputArgumentsHolder);
  }

  const prop = generateProp(fn, ...inputArguments);
  if (prop in cache) return cache[prop];

  if (type(fn) === 'Async') {
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[prop] = result;
        resolve(result);
      });
    });
  }

  const result = fn(...inputArguments);
  cache[prop] = result;
  return result;
}

function mergeRight(x, y) {
  return merge(y, x);
}

function mergeDeep(target, source) {
  if (arguments.length === 1) {
    return sourceHolder => mergeDeep(target, sourceHolder);
  }

  const willReturn = JSON.parse(JSON.stringify(target));
  Object.keys(source).forEach(key => {
    if (type(source[key]) === 'Object') {
      if (type(target[key]) === 'Object') {
        willReturn[key] = mergeDeep(target[key], source[key]);
      } else {
        willReturn[key] = source[key];
      }
    } else {
      willReturn[key] = source[key];
    }
  });
  return willReturn;
}

function nextIndex(index, list) {
  const base = typeof list === 'number' ? list : list.length;
  const newIndex = index >= base - 1 ? 0 : index + 1;
  return newIndex;
}

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function onceFn(fn, context) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}

function once(fn, context) {
  if (arguments.length === 1) {
    const wrap = onceFn(fn, context);
    return curry(wrap);
  }

  return onceFn(fn, context);
}

function otherwise(fallback, toResolve) {
  if (arguments.length === 1) {
    return toResolveHolder => otherwise(fallback, toResolveHolder);
  }

  return new Promise(resolve => {
    toResolve.then(resolve).catch(e => resolve(fallback(e)));
  });
}

function pathEq(path$1, target, obj) {
  if (arguments.length === 2) {
    return objHolder => pathEq(path$1, target, objHolder);
  }

  return path(path$1, obj) === target;
}

function pipe(...fns) {
  return compose(...fns.reverse());
}

function piped(...inputs) {
  const [input, ...fnList] = inputs;
  return pipe(...fnList)(input);
}

async function pipedAsync(...inputs) {
  const [input, ...fnList] = inputs;
  let argumentsToPass = input;

  while (fnList.length !== 0) {
    const fn = fnList.shift();
    const typeFn = type(fn);

    if (typeFn === 'Async') {
      argumentsToPass = await fn(argumentsToPass);
    } else {
      argumentsToPass = fn(argumentsToPass);
    }
  }

  return argumentsToPass;
}

function prevIndex(index, list) {
  const base = typeof list === 'number' ? list : list.length;
  const newIndex = index === 0 ? base - 1 : index - 1;
  return newIndex;
}

function helper({
  condition,
  inputArgument,
  prop
}) {
  return new Promise((resolve, reject) => {
    if (!(type(condition) === 'Async')) {
      return resolve({
        type: prop,
        payload: condition(inputArgument)
      });
    }

    condition(inputArgument).then(result => {
      resolve({
        type: prop,
        payload: result
      });
    }).catch(err => reject(err));
  });
}

function produce(conditions, inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder => produce(conditions, inputArgumentHolder);
  }

  let asyncConditionsFlag = false;

  for (const prop in conditions) {
    if (asyncConditionsFlag === false && type(conditions[prop]) === 'Async') {
      asyncConditionsFlag = true;
    }
  }

  if (asyncConditionsFlag === false) {
    const willReturn = {};

    for (const prop in conditions) {
      willReturn[prop] = conditions[prop](inputArgument);
    }

    return willReturn;
  }

  const promised = [];

  for (const prop in conditions) {
    const condition = conditions[prop];
    promised.push(helper({
      inputArgument,
      condition,
      prop
    }));
  }

  return new Promise((resolve, reject) => {
    Promise.all(promised).then(results => {
      const willReturn = {};
      map(result => willReturn[result.type] = result.payload, results);
      resolve(willReturn);
    }).catch(err => reject(err));
  });
}

function promiseAllObject(promises) {
  return new Promise((res, rej) => {
    let counter = 0;
    const props = {};
    const promisedArr = [];

    for (const prop in promises) {
      props[counter] = prop;
      promisedArr.push(promises[prop]);
      counter++;
    }

    Promise.all(promisedArr).then(result => {
      const willReturn = {};
      result.map((val, key) => {
        const prop = props[key];
        willReturn[prop] = val;
      });
      res(willReturn);
    }).catch(rej);
  });
}

function pushUniq(x, list) {
  if (list.includes(x)) return;
  list.push(x);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(inputs, text) {
  if (arguments.length === 1) {
    return textHolder => remove(inputs, textHolder);
  }

  if (type(text) !== 'String') {
    throw new Error(`R.remove requires string not ${type(text)}`);
  }

  if (type(inputs) !== 'Array') {
    return replace(inputs, '', text).trim();
  }

  let textCopy = text;
  inputs.forEach(singleInput => {
    textCopy = replace(singleInput, '', textCopy).trim();
  });
  return textCopy;
}

function renameProps(conditions, inputObject) {
  if (inputObject === undefined) {
    return inputObjectHolder => renameProps(conditions, inputObjectHolder);
  }

  const renamed = {};
  Object.keys(conditions).forEach(renameConditionProp => {
    if (Object.keys(inputObject).includes(renameConditionProp)) {
      renamed[conditions[renameConditionProp]] = inputObject[renameConditionProp];
    }
  });
  return merge(renamed, omit(Object.keys(conditions), inputObject));
}

function resolve(afterResolve, toResolve) {
  if (arguments.length === 1) {
    return toResolveHolder => resolve(afterResolve, toResolveHolder);
  }

  return new Promise(res => {
    toResolve.then(result => res(afterResolve(result)));
  });
}

function s() {
  if (Object.prototype.s === undefined) {
    Object.defineProperty(Object.prototype, 's', {
      value: function (f) {
        return f(this.valueOf());
      },
      writable: true,
      configurable: true
    });
    return true;
  }

  return false;
}

const NO_MATCH_FOUND = Symbol ? Symbol('NO_MATCH_FOUND') : undefined;

const getMatchingKeyValuePair = (cases, testValue, defaultValue) => {
  let iterationValue;

  for (let index = 0; index < cases.length; index++) {
    iterationValue = cases[index].test(testValue);

    if (iterationValue !== NO_MATCH_FOUND) {
      return iterationValue;
    }
  }

  return defaultValue;
};

const isEqual = (testValue, matchValue) => {
  const willReturn = typeof testValue === 'function' ? testValue(matchValue) : equals(testValue, matchValue);
  return willReturn;
};

const is = (testValue, matchResult = true) => ({
  key: testValue,
  test: matchValue => isEqual(testValue, matchValue) ? matchResult : NO_MATCH_FOUND
});

class Switchem {
  constructor(defaultValue, cases, willMatch) {
    if (defaultValue !== undefined && cases === undefined && willMatch === undefined) {
      this.cases = [];
      this.defaultValue = undefined;
      this.willMatch = defaultValue;
    } else {
      this.cases = cases;
      this.defaultValue = defaultValue;
      this.willMatch = willMatch;
    }

    return this;
  }

  default(defaultValue) {
    const holder = new Switchem(defaultValue, this.cases, this.willMatch);
    return holder.match(this.willMatch);
  }

  is(testValue, matchResult) {
    return new Switchem(this.defaultValue, [...this.cases, is(testValue, matchResult)], this.willMatch);
  }

  match(matchValue) {
    return getMatchingKeyValuePair(this.cases, matchValue, this.defaultValue);
  }

}

function switcher(input) {
  return new Switchem(input);
}

function tapAsync(fn, input) {
  if (arguments.length === 1) {
    return inputHolder => tapAsync(fn, inputHolder);
  }

  if (isPromise(fn) === true) {
    return new Promise((resolve, reject) => {
      fn(input).then(() => {
        resolve(input);
      }).catch(reject);
    });
  }

  fn(input);
  return input;
}

const getOccurances = input => input.match(/{{[_a-zA-Z0-9]+}}/g);

const getOccuranceProp = occurance => occurance.replace(/{{|}}/g, '');

const replace$1 = ({
  inputHolder,
  prop,
  replacer
}) => inputHolder.replace(`{{${prop}}}`, replacer);

function template(input, templateInput) {
  if (arguments.length === 1) {
    return templateInputHolder => template(input, templateInputHolder);
  }

  const occurances = getOccurances(input);
  if (occurances === null) return input;
  let inputHolder = input;

  for (const occurance of occurances) {
    const prop = getOccuranceProp(occurance);
    const replacer = templateInput[prop];
    if (replacer === undefined) continue;
    inputHolder = replace$1({
      inputHolder,
      prop,
      replacer
    });
  }

  return inputHolder;
}

function throttle(fn, ms) {
  let wait = false;
  return function (...input) {
    if (!wait) {
      fn.apply(null, input);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, ms);
    }
  };
}

function toDecimal(number, charsAfterDecimalPoint = 2) {
  return Number(parseFloat(String(number)).toFixed(charsAfterDecimalPoint));
}

function toggle(input, list) {
  return input === list[0] ? list[1] : list[0];
}

function tryCatch(fn, fallback) {
  if (!isFunction$1(fn)) {
    throw new Error(`R.tryCatch | fn '${fn}'`);
  }

  const passFallback = isFunction$1(fallback);

  if (!isPromise(fn)) {
    return (...inputs) => {
      try {
        return fn(...inputs);
      } catch (e) {
        return passFallback ? fallback(...inputs) : fallback;
      }
    };
  }

  return (...inputs) => new Promise(resolve => {
    fn(...inputs).then(resolve).catch(() => {
      if (!passFallback) {
        return resolve(fallback);
      }

      if (!isPromise(fallback)) {
        return resolve(fallback(...inputs));
      }

      fallback(...inputs).then(resolve);
    });
  });
}

function unless(condition, whenFalse) {
  if (arguments.length === 1) {
    return whenFalseHolder => unless(condition, whenFalseHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (flag) return input;
    if (isFunction$1(whenFalse)) return whenFalse(input);
    return whenFalse;
  };
}

function wait(fn) {
  return new Promise(resolve => {
    fn.then(result => resolve([result, undefined])).catch(e => resolve([undefined, e]));
  });
}

function waitFor(condition, howLong, loops = 10) {
  const typeCondition = type(condition);
  const passPromise = typeCondition === 'Async';
  const passFunction = typeCondition === 'Function';
  const interval = Math.floor(howLong / loops);

  if (!(passPromise || passFunction)) {
    throw new Error('R.waitFor');
  }

  return async (...inputs) => {
    for (const _ of range(0, loops)) {
      const resultCondition = await condition(...inputs);

      if (resultCondition === false) {
        await delay(interval);
      } else {
        return resultCondition;
      }
    }

    return false;
  };
}

function when(condition, whenTrue) {
  if (arguments.length === 1) {
    return whenTrueHolder => when(condition, whenTrueHolder);
  }

  return input => {
    const flag = typeof condition === 'boolean' ? condition : condition(input);
    if (!flag) return input;
    if (isFunction$1(whenTrue)) return whenTrue(input);
    return whenTrue;
  };
}

function createThenable$1(x) {
  return async function (input) {
    return x(input);
  };
}

function whenAsync(condition, whenTrueFn) {
  if (arguments.length === 1) {
    return whenTrueFnHolder => whenAsync(condition, whenTrueFnHolder);
  }

  return input => new Promise((resolve, reject) => {
    if (typeof condition === 'boolean') {
      if (condition === false) {
        return resolve(input);
      }

      whenTrueFn(input).then(resolve).catch(reject);
    } else {
      const conditionPromise = createThenable$1(condition);
      conditionPromise(input).then(conditionResult => {
        if (conditionResult === false) {
          return resolve(input);
        }

        whenTrueFn(input).then(resolve).catch(reject);
      }).catch(reject);
    }
  });
}

function where(conditions, obj) {
  if (obj === undefined) {
    return objHolder => where(conditions, objHolder);
  }

  let flag = true;

  for (const prop in conditions) {
    const result = conditions[prop](obj[prop]);

    if (flag && result === false) {
      flag = false;
    }
  }

  return flag;
}

function whereEq(rule, input) {
  if (arguments.length === 1) {
    return inputHolder => whereEq(rule, inputHolder);
  }

  if (type(input) !== 'Object') return false;
  const result = filter((ruleValue, ruleProp) => equals(ruleValue, input[ruleProp]), rule);
  return Object.keys(result).length === Object.keys(rule).length;
}

function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b);
  return Number(a) + Number(b);
}

function adjustRaw(index, fn, list) {
  const actualIndex = index < 0 ? list.length + index : index;
  if (index >= list.length || actualIndex < 0) return list;
  const clone = list.concat();
  clone[actualIndex] = fn(clone[actualIndex]);
  return clone;
}

const adjust = curry(adjustRaw);
exports.adjust = adjust;

function allPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
        return false;
      }

      counter++;
    }

    return true;
  };
}

function always(val) {
  return () => val;
}

function anyPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (predicates[counter](input)) {
        return true;
      }

      counter++;
    }

    return false;
  };
}

function append(el, list) {
  if (arguments.length === 1) return _list => append(el, _list);
  if (typeof list === 'string') return `${list}${el}`;
  const clone = list.concat();
  clone.push(el);
  return clone;
}

function assocFn(prop, val, obj) {
  return Object.assign({}, obj, {
    [prop]: val
  });
}

const assoc = curry(assocFn);
exports.assoc = assoc;

function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return (...input) => f(...input) && g(...input);
}

function complement(fn) {
  return (...input) => !fn(...input);
}

function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
}

const dec = n => n - 1;

exports.dec = dec;

function flagIs$1(inputArguments) {
  return inputArguments === undefined || inputArguments === null || Number.isNaN(inputArguments) === true;
}

function defaultTo(defaultArgument, ...inputArguments) {
  if (arguments.length === 1) {
    return _inputArguments => defaultTo(defaultArgument, _inputArguments);
  } else if (arguments.length === 2) {
    return flagIs$1(inputArguments[0]) ? defaultArgument : inputArguments[0];
  }

  const limit = inputArguments.length - 1;
  let len = limit + 1;
  let ready = false;
  let holder;

  while (!ready) {
    const instance = inputArguments[limit - len + 1];

    if (len === 0) {
      ready = true;
    } else if (flagIs$1(instance)) {
      len -= 1;
    } else {
      holder = instance;
      ready = true;
    }
  }

  return holder === undefined ? defaultArgument : holder;
}

function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
}

function divide(a, b) {
  if (arguments.length === 1) return _b => divide(a, _b);
  return a / b;
}

function drop(n, listOrString) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return listOrString.slice(n > 0 ? n : 0);
}

function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return n > 0 ? list.slice(0, -n) : list.slice();
}

function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return (...input) => f(...input) || g(...input);
}

function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
}

function F() {
  return false;
}

function find(fn, list) {
  if (arguments.length === 1) return _list => find(fn, _list);
  return list.find(fn);
}

function findIndex(fn, list) {
  if (arguments.length === 1) return _list => findIndex(fn, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
}

function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
}

function flipExport(fn) {
  return (...input) => {
    if (input.length === 1) {
      return holder => fn(holder, input[0]);
    } else if (input.length === 2) {
      return fn(input[1], input[0]);
    }

    return undefined;
  };
}

function flip(fn) {
  return flipExport(fn);
}

function toPairs(obj) {
  return Object.entries(obj);
}

function fromPairs(list) {
  const toReturn = {};
  list.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
}

function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};
  if (val && val.getTime) return new Date(val.getTime());

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
}

function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list);
  map(fn, list);
  return list;
}

function groupBy(fn, list) {
  if (arguments.length === 1) return _list => groupBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

function groupWith(predicate, list) {
  const toReturn = [];
  let holder = [];
  list.reduce((prev, current, i) => {
    if (i > 0 && predicate(prev, current)) {
      if (holder.length === 0) {
        holder.push(prev);
        holder.push(current);
      } else {
        holder.push(current);
      }
    } else if (i > 0) {
      if (holder.length === 0) {
        toReturn.push([prev]);
        if (i === list.length - 1) holder.push(current);
      } else {
        toReturn.push(holder);
        holder = [];
      }
    }

    return current;
  }, undefined);
  return holder.length === 0 ? toReturn : [...toReturn, holder];
}

function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  if (!obj) return false;
  return obj[prop] !== undefined;
}

function identity(x) {
  return x;
}

function ifElseFn(condition, onTrue, onFalse) {
  return (...input) => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(...input);

    if (conditionResult === true) {
      return onTrue(...input);
    }

    return onFalse(...input);
  };
}

const ifElse = curry(ifElseFn);
exports.ifElse = ifElse;

const inc = n => n + 1;

exports.inc = inc;

function indexBy(fn, list) {
  if (arguments.length === 1) return _list => indexBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    result[fn(item)] = item;
  }

  return result;
}

function indexOf(target, list) {
  if (arguments.length === 1) return _list => indexOf(target, _list);
  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === target) {
      return index;
    }
  }

  return -1;
}

function is$1(ctor, val) {
  if (arguments.length === 1) return _val => is$1(ctor, _val);
  return val != null && val.constructor === ctor || val instanceof ctor;
}

function isNil(x) {
  return x === undefined || x === null;
}

function join(separator, list) {
  if (arguments.length === 1) return _list => join(separator, _list);
  return list.join(separator);
}

function keys(obj) {
  return Object.keys(obj);
}

function lastIndexOf(target, list) {
  if (arguments.length === 1) return _list => lastIndexOf(target, _list);
  let index = list.length;

  while (--index > 0) {
    if (equals(list[index], target)) {
      return index;
    }
  }

  return -1;
}

function length(list) {
  if (list == null || list.length === undefined) return NaN;
  return list.length;
}

function match(pattern, str) {
  if (arguments.length === 1) return _str => match(pattern, _str);
  const willReturn = str.match(pattern);
  return willReturn === null ? [] : willReturn;
}

function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
}

function maxBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => maxBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => maxBy(fn, _a, _b);
  }

  return fn(b) > fn(a) ? b : a;
}

function min(a, b) {
  if (arguments.length === 1) return _b => min(a, _b);
  return b < a ? b : a;
}

function minBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => minBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => minBy(fn, _a, _b);
  }

  return fn(b) < fn(a) ? b : a;
}

function modulo(a, b) {
  if (arguments.length === 1) return _b => modulo(a, _b);
  return a % b;
}

function multiply(a, b) {
  if (arguments.length === 1) return _b => multiply(a, _b);
  return a * b;
}

function none(fn, list) {
  if (arguments.length === 1) return _list => none(fn, _list);
  return list.filter(fn).length === 0;
}

function not(a) {
  return !a;
}

function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
}

function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
}

function partialCurry(fn, args = {}) {
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(rest, args)).then(resolve).catch(reject);
      });
    }

    return fn(merge(rest, args));
  };
}

function pathOrRaw(defaultValue, list, obj) {
  return defaultTo(defaultValue, path(list, obj));
}

const pathOr = curry(pathOrRaw);
exports.pathOr = pathOr;

function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
}

function pluck(key, list) {
  if (arguments.length === 1) return _list => pluck(key, _list);
  const willReturn = [];
  map(val => {
    if (val[key] !== undefined) {
      willReturn.push(val[key]);
    }
  }, list);
  return willReturn;
}

function prepend(el, list) {
  if (arguments.length === 1) return _list => prepend(el, _list);
  if (typeof list === 'string') return `${el}${list}`;
  const clone = [el].concat(list);
  return clone;
}

function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
}

function propEqFn(key, val, obj) {
  if (obj == null) return false;
  return obj[key] === val;
}

const propEq = curry(propEqFn);
exports.propEq = propEq;

function reduceFn(fn, acc, list) {
  return list.reduce(fn, acc);
}

const reduce = curry(reduceFn);
exports.reduce = reduce;

function reject(fn, list) {
  if (arguments.length === 1) return _list => reject(fn, _list);
  return filter((x, i) => !fn(x, i), list);
}

function repeat(val, n) {
  if (arguments.length === 1) return _n => repeat(val, _n);
  const willReturn = Array(n);
  return willReturn.fill(val);
}

function reverse(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
}

function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.concat();
  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);
    if (fnA === fnB) return 0;
    return fnA < fnB ? -1 : 1;
  });
}

function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str);
  return str.split(separator);
}

function splitEvery(n, list) {
  if (arguments.length === 1) return _list => splitEvery(n, _list);
  if (n < 1) throw new Error('First argument to splitEvery must be a positive integer');
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += n));
  }

  return willReturn;
}

function startsWith(prefix, list) {
  if (arguments.length === 1) return _list => startsWith(prefix, _list);
  return list.startsWith(prefix);
}

function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
}

function T() {
  return true;
}

function tail(list) {
  return drop(1, list);
}

function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
  if (n < 0) return list.slice();
  let numValue = n > len ? len : n;
  if (typeof list === 'string') return list.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(list, numValue, len);
}

function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
}

function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer');
  return map(fn, range(0, n));
}

function toString$1(val) {
  return val.toString();
}

function toUpper(str) {
  return str.toUpperCase();
}

function trim(str) {
  return str.trim();
}

function uniq(list) {
  let index = -1;
  const willReturn = [];

  while (++index < list.length) {
    const value = list[index];

    if (!includes(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function uniqWith(fn, list) {
  if (arguments.length === 1) return _list => uniqWith(fn, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
}

function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.concat();
  return arrClone.fill(val, idx, idx + 1);
}

function values(obj) {
  if (type(obj) !== 'Object') return [];
  console.log(obj);
  return Object.values(obj);
}

function without(left, right) {
  if (right === undefined) {
    return _right => without(left, _right);
  }

  return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
}

function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right);
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
}

function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return take(values.length, keys).reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];
    return prev;
  }, {});
}

const DELAY = 'RAMBDAX_DELAY';
exports.DELAY = DELAY;
},{}],"3ViT":[function(require,module,exports) {
const {
  identity,
  map,
  maybe,
  ok,
  type,
} = require('rambdax')

function normalizeBoolean (input){
  return input === 'false' ?
    false :
    Boolean(input)
}

function normalizeArray (input){
  if (!input) return []

  try {
    return JSON.parse(input)
  } catch (_){
    return []
  }
}

function toString(input){
  return maybe(
    typeof input === 'object',
    JSON.stringify(input),
    typeof input === 'string' ? input : input.toString()
  )
}

function returnNormalized(input){
  if (input === null) return null
  const asString = toString(input)
  if ([ 'true', 'false' ].includes(asString)) return normalizeBoolean(input)
  if (!Number.isNaN(Number(input))) return Number(input)
  if (asString.startsWith('[')){
    const initialResult = JSON.parse(input)

    return initialResult
  }
  if (!asString.startsWith('{')) return input

  if (typeof input === 'object'){
    return map(
      returnNormalized,
      input
    )
  }

  try {
    const initialResult = JSON.parse(input)

    return returnNormalized(initialResult)
  } catch (e){
    return {}
  }
}

function normalizeObject (input){
  try {
    const initialResult = JSON.parse(input)

    const normalized = returnNormalized(initialResult)
    if (normalized === null) return {}

    return normalized
  } catch (e){
    return {}
  }
}

function normalize (input, type){
  if (type === undefined) return returnNormalized(input)

  const methods = {
    boolean : normalizeBoolean,
    number  : Number,
    object  : normalizeObject,
    string  : identity,
    array   : normalizeArray,
  }
  const method = methods[ type ]

  return method(input)
}

function initialGetLocalize (input){
  ok(input)({
    defaultValue : 'any',
    key          : 'string',
  })
  const typeValue = type(input.defaultValue).toLowerCase()
  const x = localStorage.getItem(input.key)

  if (x === null || x === 'null'){
    localStorage.setItem(input.key, toString(input.defaultValue))

    return input.defaultValue
  }

  return normalize(x, typeValue)
}

function getLocalize (key, type){
  const typeValue = type === undefined ? 'string' : type
  const x = localStorage.getItem(key)

  return normalize(x, typeValue)
}
function getTypeless (key){
  return normalize(
    localStorage.getItem(key)
  )
}
function setLocalize (key, value){
  localStorage.setItem(key, toString(value))
}

exports.getLocalize = getLocalize
exports.getTypeless = getTypeless
exports.setLocalize = setLocalize
exports.normalizeLocalize = normalize
exports.initialGetLocalize = initialGetLocalize
exports.returnNormalized = returnNormalized

},{"rambdax":"rM7A"}],"apxT":[function(require,module,exports) {
const { defaultTo, tryCatch, omit, pick } = require('rambdax')

let holder = undefined

const missingInit = 'Storage was not set; created with label CLIENT_HELPERS'
const exists = key => localStorage.getItem(key) !== null

function masterReset(){
  localStorage.setItem(
    holder,
    '{}'
  )
  holder = undefined
}

function getState(keys){
  if (holder === undefined){
    initLocalState('CLIENT_HELPERS')
    console.warn(missingInit)

    return {}
  }

  const stateRaw = localStorage.getItem(
    holder
  )

  const state = tryCatch(
    JSON.parse,
    {}
  )(stateRaw)

  return keys === undefined ?
    state :
    pick(keys, state)
}

function setState(newState){
  localStorage.setItem(
    holder,
    JSON.stringify(
      newState
    )
  )
}

function initLocalState(masterKey, maybeObject){
  holder = masterKey

  if (exists(masterKey)){
    if(!maybeObject) return

    setState({
      ...getState(),
      ...maybeObject
    })
  }else{
    setState(
      defaultTo({}, maybeObject)
    )
  }
}

function getter(key){
  return getState()[ key ]
}

function getterAnt(hash){
  const state = getState()
  const keys = Object.keys(state)

  const exitHash = {}
  Object.entries(hash).forEach(([ hashProp, hashValue ]) => {
    if (keys.includes(hashProp)){
      exitHash[ hashProp ] = state[ hashProp ]
    } else {
      exitHash[ hashProp ] = hashValue
    }
  })

  return exitHash
}

function getterAntReset(hash){
  const state = getState()
  setState({
    ...state,
    ...hash,
  })

  return hash
}

function setter(key, value){
  const state = getState()

  state[ key ] = value
  setState(state)
}

function resetter(keys, extraFlag){
  setState(
    omit(keys, getState())
  )
  if (extraFlag){
    return getState()
  }
}

function push(key, value){
  const state = getState()
  const listRaw = state[ key ]
  const list = Array.isArray(listRaw) ?
    listRaw :
    []
  
  list.push(value)
  state[ key ] = list
  setState(state)
}

function pushUniq(key, value){
  const state = getState()
  const listRaw = state[ key ]
  const list = Array.isArray(listRaw) ?
    listRaw :
    []

  if(list.includes(value)) return

  list.push(value)
  state[ key ] = list
  setState(state)
}

exports.push = push
exports.pushUniq = pushUniq
exports.getter = getter
exports.getterAnt = getterAnt
exports.getterAntReset = getterAntReset
exports.setter = setter
exports.resetter = resetter
exports.masterReset = masterReset
exports.masterSetter = setState
exports.masterGetter = getState
exports.initLocalState = initLocalState

},{"rambdax":"rM7A"}],"wcEF":[function(require,module,exports) {
const x = require('./localize')
const y = require('./storage')

module.exports = {
  ...y,
  ...x
}
},{"./localize":"3ViT","./storage":"apxT"}],"wljF":[function(require,module,exports) {
var define;
!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(null):"function"==typeof define&&define.amd?define(e(null)):window.stylis=e(null)}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});

},{}],"u9nc":[function(require,module,exports) {
var define;
(function (factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))

},{}],"+rrl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var _default = unitlessKeys;
exports.default = _default;
},{}],"hJve":[function(require,module,exports) {
/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};

},{}],"H8ja":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}
},{"./cjs/react-is.production.min.js":"hJve"}],"ctbU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

var _default = memoizeOne;
exports.default = _default;
},{}],"kgel":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"xON/":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":"kgel"}],"Iix9":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("production" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"./factoryWithThrowingShims":"xON/"}],"UHBn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var _default = memoize;
exports.default = _default;
},{}],"9xOZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _memoize = _interopRequireDefault(require("@emotion/memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0, _memoize.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
var _default = index;
exports.default = _default;
},{"@emotion/memoize":"UHBn"}],"Z2d5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = getType;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isPlainObject = isPlainObject;
exports.isObject = isObject;
exports.isAnyObject = isAnyObject;
exports.isObjectLike = isObjectLike;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isString = isString;
exports.isFullString = isFullString;
exports.isEmptyString = isEmptyString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.isSymbol = isSymbol;
exports.isPrimitive = isPrimitive;
exports.isType = isType;

/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */


function isUndefined(payload) {
  return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */


function isNull(payload) {
  return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isPlainObject(payload) {
  if (getType(payload) !== 'Object') return false;
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isObject(payload) {
  return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */


function isAnyObject(payload) {
  return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */


function isObjectLike(payload) {
  return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */


function isFunction(payload) {
  return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */


function isArray(payload) {
  return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isString(payload) {
  return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isFullString(payload) {
  return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */


function isEmptyString(payload) {
  return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */


function isNumber(payload) {
  return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */


function isBoolean(payload) {
  return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */


function isRegExp(payload) {
  return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */


function isDate(payload) {
  return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */


function isSymbol(payload) {
  return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */


function isPrimitive(payload) {
  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */


function isType(payload, type) {
  if (!(type instanceof Function)) {
    throw new TypeError('Type must be a function');
  }

  if (!type.hasOwnProperty('prototype')) {
    throw new TypeError('Type is not a class');
  } // Classes usually have names (as functions usually have names)


  var name = type.name;
  return getType(payload) === name || Boolean(payload && payload.constructor === type);
}
},{}],"/PFB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;
exports.concatArrays = concatArrays;
exports.default = void 0;

var _isWhat = require("is-what");

function assignProp(carry, key, newVal, originalObject) {
  var propType = originalObject.propertyIsEnumerable(key) ? 'enumerable' : 'nonenumerable';
  if (propType === 'enumerable') carry[key] = newVal;

  if (propType === 'nonenumerable') {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}

function mergeRecursively(origin, newComer, extensions) {
  // work directly on newComer if its not an object
  if (!(0, _isWhat.isPlainObject)(newComer)) {
    // extend merge rules
    if (extensions && (0, _isWhat.isArray)(extensions)) {
      extensions.forEach(function (extend) {
        newComer = extend(origin, newComer);
      });
    }

    return newComer;
  } // define newObject to merge all values upon


  var newObject = {};

  if ((0, _isWhat.isPlainObject)(origin)) {
    var props_1 = Object.getOwnPropertyNames(origin);
    var symbols_1 = Object.getOwnPropertySymbols(origin);
    newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
      // @ts-ignore
      var targetVal = origin[key];

      if (!(0, _isWhat.isSymbol)(key) && !Object.getOwnPropertyNames(newComer).includes(key) || (0, _isWhat.isSymbol)(key) && !Object.getOwnPropertySymbols(newComer).includes(key)) {
        assignProp(carry, key, targetVal, origin);
      }

      return carry;
    }, {});
  }

  var props = Object.getOwnPropertyNames(newComer);
  var symbols = Object.getOwnPropertySymbols(newComer);
  var result = props.concat(symbols).reduce(function (carry, key) {
    // re-define the origin and newComer as targetVal and newVal
    var newVal = newComer[key];
    var targetVal = (0, _isWhat.isPlainObject)(origin) ? // @ts-ignore
    origin[key] : undefined; // extend merge rules

    if (extensions && (0, _isWhat.isArray)(extensions)) {
      extensions.forEach(function (extend) {
        newVal = extend(targetVal, newVal);
      });
    } // When newVal is an object do the merge recursively


    if (targetVal !== undefined && (0, _isWhat.isPlainObject)(newVal)) {
      newVal = mergeRecursively(targetVal, newVal, extensions);
    }

    assignProp(carry, key, newVal, newComer);
    return carry;
  }, newObject);
  return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */


function merge(origin) {
  var newComers = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    newComers[_i - 1] = arguments[_i];
  }

  var extensions = null;
  var base = origin;

  if ((0, _isWhat.isPlainObject)(origin) && origin.extensions && Object.keys(origin).length === 1) {
    base = {};
    extensions = origin.extensions;
  }

  return newComers.reduce(function (result, newComer) {
    return mergeRecursively(result, newComer, extensions);
  }, base);
}

function concatArrays(originVal, newVal) {
  if ((0, _isWhat.isArray)(originVal) && (0, _isWhat.isArray)(newVal)) {
    // concat logic
    return originVal.concat(newVal);
  }

  return newVal; // always return newVal as fallback!!
}

var _default = merge;
exports.default = _default;
},{"is-what":"Z2d5"}],"OuU+":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGlobalStyle = createGlobalStyle;
exports.css = css;
exports.isStyledComponent = isStyledComponent;
exports.keyframes = keyframes;
exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = exports.withTheme = exports.ThemeProvider = exports.ThemeContext = exports.ThemeConsumer = exports.StyleSheetManager = exports.StyleSheetContext = exports.StyleSheetConsumer = exports.ServerStyleSheet = exports.default = void 0;

var _stylis = _interopRequireDefault(require("stylis/stylis.min"));

var _stylisRuleSheet = _interopRequireDefault(require("stylis-rule-sheet"));

var _react = _interopRequireWildcard(require("react"));

var _unitless = _interopRequireDefault(require("@emotion/unitless"));

var _reactIs = require("react-is");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isPropValid = _interopRequireDefault(require("@emotion/is-prop-valid"));

var _mergeAnything = _interopRequireDefault(require("merge-anything"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
var interleave = function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}; // 


var isPlainObject = function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
}; // 


var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({}); // 

function isFunction(test) {
  return typeof test === 'function';
} // 


function getComponentName(target) {
  return ("production" !== 'production' ? typeof target === 'string' && target : false) || target.displayName || target.name || 'Component';
} // 


function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
} // 


function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
} // 


var SC_ATTR = typeof process !== 'undefined' && (undefined || undefined) || 'data-styled';
var SC_VERSION_ATTR = 'data-styled-version';
var SC_STREAM_ATTR = 'data-styled-streamed';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (undefined || undefined) || "production" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {}; // 

/**
 * Parse errors.md and turn it into a simple hash of code: message
 */

var ERRORS = "production" !== 'production' ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if ("production" === 'production') {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }

    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error); // 


var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone

  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({
      componentId: componentId,
      matchIndex: matchIndex
    });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;
    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return {
      componentId: componentId,
      cssFromDOM: cssFromDOM
    };
  });
}; // 


var COMMENT_REGEX = /^\s*\/\/.*$/gm; // NOTE: This stylis instance is only used to split rules from SSR'd style tags

var stylisSplitter = new _stylis.default({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});
var stylis = new _stylis.default({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"

}); // Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = []; // eslint-disable-next-line consistent-return

var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = (0, _stylisRuleSheet.default)(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;

var _selector = void 0;

var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if ( // the first self-ref is always untouched
  offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};
/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */


var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS; // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run

  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');
  return stylis(prefix || !selector ? '' : selector, cssStr);
} // 

/* eslint-disable camelcase, no-undef */


var getNonce = function () {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
}; // 

/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */


var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};
/* resets an ID entirely by overwriting it in the dictionary */


var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};
/* factory for a names dictionary checking the existance of an ID:name pairing */


var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};
/* stringifies names for the html/element output */


var stringifyNames = function stringifyNames(names) {
  var str = ''; // eslint-disable-next-line guard-for-in

  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }

  return str.trim();
};
/* clones the nested names dictionary */


var cloneNames = function cloneNames(names) {
  var clone = Object.create(null); // eslint-disable-next-line guard-for-in

  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }

  return clone;
}; // 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */


var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;
  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */

  var size = tag.ownerDocument.styleSheets.length;

  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i]; // $FlowFixMe

    if (sheet.ownerNode === tag) return sheet;
  }
  /* we should always be able to find a tag */


  throw new StyledComponentsError(10);
};
/* insert a rule safely and return whether it was actually injected */


var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;
  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};
/* deletes `size` rules starting from `removalIndex` */


var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;

  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
}; // 

/* this marker separates component styles and is important for rehydration */


var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};
/* add up all numbers in array up until and including the index */


var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;

  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};
/* create a new style tag after lastEl */


var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;
  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.0");
  var nonce = getNonce();

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }
  /* Work around insertRule quirk in EdgeHTML */


  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }
    /* Insert new style tag after the previous one */


    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};
/* takes a css factory function and outputs an html styled tag factory */


var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.0" + '"', additionalAttrs];
    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};
/* takes a css factory function and outputs an element factory */


var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.0", _props);
    var nonce = getNonce();

    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    } // eslint-disable-next-line react/no-danger


    return _react.default.createElement('style', _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: css()
      }
    }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};
/* speedy tags utilise insertRule */


var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);
    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport;
      /* @import rules are reordered to appear first */

      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules;
    /* add up no of injected rules */

    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return; // $FlowFixMe

    if (el.isConnected === false) return;
    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];

      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];

        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */

  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);
    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;

      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true; // $FlowFixMe

      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    /* create new empty text node and replace the current one */

    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];

    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = ''; // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      var cssForId = markers[id][0];

      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }

    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null); // eslint-disable-next-line guard-for-in

    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;
    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }
  /* remove old HTMLStyleElements, since they have been rehydrated */


  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];

    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
}; // 


var SPLIT_REGEX = /\s+/;
/* determine the maximum number of components before tags are sharded */

var MAX_SIZE = void 0;

if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */
  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;
      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }
  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;
    var els = [];
    var extracted = [];
    var isStreamed = false;
    /* retrieve all of our SSR style elements from the DOM */

    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.0" + '"]');
    var nodesSize = nodes.length;
    /* abort rehydration if no previous style tags were found */

    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];
      /* check if style tag is a streamed tag */

      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);
      /* retrieve all component names */

      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;

      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */

        this.rehydratedNames[name] = true;
      }
      /* extract all components and their CSS */


      extracted.push.apply(extracted, extractComps(el.textContent));
      /* store original HTMLStyleElement */

      els.push(el);
    }
    /* abort rehydration if nothing was extracted */


    var extractedSize = extracted.length;
    if (!extractedSize) return this;
    /* create a tag to be used for rehydration */

    var tag = this.makeTag(null);
    rehydrate(tag, els, extracted);
    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */

    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);
    /* retrieve all component ids */

    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };
  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */

  /* reset the internal "master" instance */


  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    master = new StyleSheet(undefined, forceServer).rehydrate();
  };
  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);
    /* add to clone array */

    this.clones.push(sheet);
    /* clone all tags */

    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();
      /* reconstruct tagMap */

      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });
    /* clone other maps */

    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);
    return sheet;
  };
  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;
    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };
  /* get a tag for a given componentId, assign the componentId to one, or shard */


  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];

    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];
    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */

    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };
  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };
  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };
  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };
  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);
    /* add deferred rules for component */

    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);
      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };
  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;
    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }
    /* remove all rules from the tag */


    tag.removeRules(id);
    /* ignore possible rehydrated names */

    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */

    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;
    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return (0, _react.cloneElement)(tag.toElement(), {
        key: key
      });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }
    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}(); // 


var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;
    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}(); // 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */


var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
} // 
// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js


function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _unitless.default)) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
} // 

/**
 * It's falsish not falsy because 0 is allowed.
 */


var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }

    return rules;
  });
  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ("production" !== 'production' && (0, _reactIs.isElement)(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
} // 


function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
} // 


function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!(0, _reactIs.isValidElementType)(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
} // 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js


function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }

  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;

    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;

    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }

  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
} // 

/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */


var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;
  /* get a char and divide by alphabet-length */

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
} // 


function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i]; // recursive case

    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;
  return true;
} // 

/* combines hashStr (murmurhash) and nameGenerator for convenience */


var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */


var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);
    this.rules = rules;
    this.isStatic = "production" === 'production' && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));

    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}(); // 


var LIMIT = 200;

var createWarnTooManyClasses = function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
}; // 


var determineTheme = function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT; // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */

  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
}; // 


var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
} // 


function isTag(target) {
  return typeof target === 'string' && ("production" !== 'production' ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
} // 


function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[_reactIs.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);
var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent), // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));
    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;
    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;
    var i = keys.length;
    var descriptor = void 0;
    var key = void 0; // eslint-disable-next-line no-plusplus

    while (i--) {
      key = keys[i];

      if ( // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
} // 


function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
} // 
// Helper to call a given function, only once


var once = function (cb) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
}; // 


var ThemeContext = (0, _react.createContext)();
exports.ThemeContext = ThemeContext;
var ThemeConsumer = ThemeContext.Consumer;
/**
 * Provide a theme to an entire react component tree via context
 */

exports.ThemeConsumer = ThemeConsumer;

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = (0, _memoizeOne.default)(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;
    return _react.default.createElement(ThemeContext.Consumer, null, this.renderInner);
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);
    return _react.default.createElement(ThemeContext.Provider, {
      value: context
    }, this.props.children);
  };
  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ("production" !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(_react.Component); // 


exports.ThemeProvider = ThemeProvider;
var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);
    /* The master sheet might be reset, so keep a reference here */

    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }
  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return _react.default.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }
    /* the tag index keeps track of which tags have already been emitted */

    var instance = this.instance;
    var instanceTagIndex = 0;
    var streamAttr = SC_STREAM_ATTR + '="true"';
    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk,
      /* encoding */
      _, callback) {
        var tags = instance.tags;
        var html = '';
        /* retrieve html for each new style tag */

        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }
        /* force our StyleSheets to emit entirely new tags */


        instance.sealAllTags();
        var renderedHtml = chunk.toString();
        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */

        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');
          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });
    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal(); // forward the error to the transform stream


      transformer.emit('error', err);
    });
    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}(); // 


exports.ServerStyleSheet = ServerStyleSheet;
var StyleSheetContext = (0, _react.createContext)();
exports.StyleSheetContext = StyleSheetContext;
var StyleSheetConsumer = StyleSheetContext.Consumer;
exports.StyleSheetConsumer = StyleSheetConsumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = (0, _memoizeOne.default)(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;
    return _react.default.createElement(StyleSheetContext.Provider, {
      value: this.getContext(sheet, target)
    }, "production" !== 'production' ? _react.default.Children.only(children) : children);
  };

  return StyleSheetManager;
}(_react.Component);

exports.StyleSheetManager = StyleSheetManager;
"production" !== "production" ? StyleSheetManager.propTypes = {
  sheet: _propTypes.default.oneOfType([_propTypes.default.instanceOf(StyleSheet), _propTypes.default.instanceOf(ServerStyleSheet)]),
  target: _propTypes.default.shape({
    appendChild: _propTypes.default.func.isRequired
  })
} : void 0; // 

var THEME_PROP_REGEX = /\.theme[.[]/;
var identifiers = {};
/* We depend on components having unique IDs */

function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);
  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */

  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
} // $FlowFixMe


var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};
    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if ("production" !== 'production') {
      _this.warnInnerRef = once(function (displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });
      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });
      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (// eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }

    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return _react.default.createElement(StyleSheetConsumer, null, this.renderOuter);
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;
    this.styleSheet = styleSheet; // No need to subscribe a static component to theme changes, it won't change anything

    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();
    return _react.default.createElement(ThemeConsumer, null, this.renderInner);
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target,
        usesTheme = _props$forwardedCompo.usesTheme;
    var generatedClassName = void 0;
    var rawTheme = void 0;

    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      rawTheme = determineTheme(this.props, theme, defaultProps);
      generatedClassName = this.generateAndInjectStyles(rawTheme || EMPTY_OBJECT, this.props);

      if ("production" !== 'production' && usesTheme && !rawTheme) {
        console.error('Component \'' + // $FlowFixMe
        displayName + '\' (.' + styledComponentId + ') references the \'theme\' prop in its styles but no theme was provided via prop or <ThemeProvider>.');
      }
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);
    var propsForElement = {};

    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0; // eslint-disable-next-line guard-for-in

    for (key in computedProps) {
      if ("production" !== 'production' && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || (0, _isPropValid.default)(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');
    return (0, _react.createElement)(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, {
      theme: theme
    });

    if (!attrs.length) return context;
    this.attrs = {};
    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }
      /* eslint-disable guard-for-in */
      // $FlowFixMe


      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if ("production" !== 'production') {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ("production" !== 'production' && _react.default.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */

    });
    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses; // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);
    if ("production" !== 'production' && warnTooManyClasses) warnTooManyClasses(className);
    return className;
  };

  return StyledComponent;
}(_react.Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent = void 0;

  var forwardRef = function forwardRef(props, ref) {
    return _react.default.createElement(ParentComponent, _extends({}, props, {
      forwardedComponent: WrappedStyledComponent,
      forwardedRef: ref
    }));
  };

  forwardRef.displayName = displayName;
  WrappedStyledComponent = _react.default.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName; // $FlowFixMe

  WrappedStyledComponent.attrs = finalAttrs; // $FlowFixMe

  WrappedStyledComponent.componentStyle = componentStyle; // $FlowFixMe

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY; // $FlowFixMe

  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe

  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);
    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? (0, _mergeAnything.default)(target.defaultProps, obj) : obj;
    }
  });

  if ("production" !== 'production') {
    // $FlowFixMe
    WrappedStyledComponent.usesTheme = componentStyle.rules.some(function (x) {
      return isFunction(x) && THEME_PROP_REGEX.test(x.toString());
    }); // $FlowFixMe

    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
} // 
// Thanks to ReactDOMFactories for this handy list!


var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
}); // 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');
    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  }; // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}(); // 
// place our cache into shared context so it'll persist between HMRs


if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;

      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }
      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */


      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */


      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ("production" !== 'production' && _react.default.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return _react.default.createElement(StyleSheetConsumer, null, function (styleSheet) {
        _this2.styleSheet = styleSheet || StyleSheet.master;
        var globalStyle = _this2.state.globalStyle;

        if (globalStyle.isStatic) {
          globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);
          return null;
        } else {
          return _react.default.createElement(ThemeConsumer, null, function (theme) {
            // $FlowFixMe
            var defaultProps = _this2.constructor.defaultProps;

            var context = _extends({}, _this2.props);

            if (typeof theme !== 'undefined') {
              context.theme = determineTheme(_this2.props, theme, defaultProps);
            }

            globalStyle.renderStyles(context, _this2.styleSheet);
            return null;
          });
        }
      });
    };

    return GlobalStyleComponent;
  }(_react.default.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;
  return GlobalStyleComponent;
} // 


var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ("production" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));
  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
} // 


var withTheme = function (Component$$1) {
  var WithTheme = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(ThemeConsumer, null, function (theme) {
      // $FlowFixMe
      var defaultProps = Component$$1.defaultProps;
      var themeProp = determineTheme(props, theme, defaultProps);

      if ("production" !== 'production' && themeProp === undefined) {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
      }

      return _react.default.createElement(Component$$1, _extends({}, props, {
        theme: themeProp,
        ref: ref
      }));
    });
  });

  hoistNonReactStatics(WithTheme, Component$$1);
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  return WithTheme;
}; // 

/* eslint-disable */


exports.withTheme = withTheme;
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
}; // 

/* Warning if you've imported this file on React Native */

exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;

if ("production" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ("production" !== 'production' && "production" !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
} //


var _default = styled;
exports.default = _default;
},{"stylis/stylis.min":"wljF","stylis-rule-sheet":"u9nc","react":"HdMw","@emotion/unitless":"+rrl","react-is":"H8ja","memoize-one":"ctbU","prop-types":"Iix9","@emotion/is-prop-valid":"9xOZ","merge-anything":"/PFB","process":"g5I+"}],"1UWW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = Cell;
exports.Grid = Grid;
exports.ExampleCell = exports.DevContainer = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rambdax = require("rambdax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Container = _styledComponents.default.div(props => ({
  background: props.background ? props.background : 'inherit',
  display: 'grid',
  width: '100vw',
  height: '100vh',
  gridTemplateColumns: 'repeat(32, 1fr)',
  gridTemplateRows: 'repeat(32, 1fr)'
}));

const subgridStyle = (0, _rambdax.glue)(`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
`, '\n');
const DevContainer = (0, _styledComponents.default)(Container)`
  background: #fafafa;
  div{
    outline: 2px solid #433;
  }
`;
exports.DevContainer = DevContainer;
const ExampleCell = _styledComponents.default.div`
  background: #aafafa;
  grid-column: 4 / span 3;
`;
exports.ExampleCell = ExampleCell;

function zeroBasedOrder(x) {
  return x + 1;
}

function Cell({
  children = null,
  evalStyled = null,
  id = undefined,
  subgridFlag = false,
  height,
  topLeft,
  width,
  extraProps = {}
}) {
  const subgridRule = subgridFlag ? subgridStyle : '';
  const evalStyledRule = evalStyled ? evalStyled : '';
  const attrs = id ? {
    id
  } : {};
  const CellContainer = _styledComponents.default.div.attrs(attrs)`
    ${subgridRule}
    grid-column: ${zeroBasedOrder(topLeft.x)} / span ${width};
    grid-row: ${zeroBasedOrder(topLeft.y)} / span ${height};
    ${evalStyledRule}
  `;
  return React.createElement(CellContainer, extraProps, children);
}

function Grid({
  children,
  background = '',
  ...extraProps
}) {
  return React.createElement(Container, _extends({
    background: background
  }, extraProps), children);
}
},{"react":"HdMw","styled-components":"OuU+","rambdax":"12t9"}],"yQPU":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.between = between;
exports.camelCase = camelCase;
exports.count = count;
exports.distance = distance;
exports.distanceGerman = distanceGerman;
exports.dotCase = dotCase;
exports.glob = glob;
exports.indent = indent;
exports.isLetter = isLetter;
exports.isPunctuation = isPunctuation;
exports.kebabCase = kebabCase;
exports.maskSentence = maskSentence;
exports.maskWords = maskWords;
exports.ms = ms;
exports.pascalCase = pascalCase;
exports.removeIndent = removeIndent;
exports.reverse = reverse$1;
exports.seoTitle = seoTitle;
exports.shuffle = shuffle;
exports.snakeCase = snakeCase;
exports.splitPerLine = splitPerLine;
exports.splitSentence = splitSentence;
exports.stripPunctuation = stripPunctuation;
exports.fitWithinLines = fitWithinLines;
exports.stripTags = stripTags;
exports.takeArguments = takeArguments;
exports.titleCase = titleCase;
exports.trim = trim$1;
exports.words = words;
exports.wordsX = wordsX;
exports.getMaxLength = exports.constantCase = void 0;

function between(str, left, rightRaw) {
  // if(str === 2) return
  const right = rightRaw === undefined ? left : rightRaw;
  const rightIndex = str.lastIndexOf(right);
  const leftIndex = str.indexOf(left);
  return rightIndex === -1 ? str : str.substring(leftIndex + left.length, rightIndex).trim();
}

function compose(...fns) {
  return (...args) => {
    const h1 = fns.slice();

    if (h1.length > 0) {
      const fn = h1.pop();
      let j1 = fn(...args);

      while (h1.length > 0) {
        j1 = h1.pop()(j1);
      }

      return j1;
    }

    return void 0;
  };
}

function type(a) {
  const l1 = typeof a;

  if (a === null) {
    return 'Null';
  } else if (a === void 0) {
    return 'Undefined';
  } else if (l1 === 'boolean') {
    return 'Boolean';
  } else if (l1 === 'number') {
    return 'Number';
  } else if (l1 === 'string') {
    return 'String';
  } else if (Array.isArray(a)) {
    return 'Array';
  } else if (a instanceof RegExp) {
    return 'RegExp';
  }

  const m1 = a.toString();

  if (m1.startsWith('async')) {
    return 'Async';
  } else if (m1 === '[object Promise]') {
    return 'Promise';
  } else if (m1.includes('function') || m1.includes('=>')) {
    return 'Function';
  }

  return 'Object';
}

function drop(L1, x) {
  if (arguments.length === 1) {
    return M1 => drop(L1, M1);
  }

  return x.slice(L1);
}

function mapObject(fn, i2) {
  const j2 = {};

  for (const k2 in i2) {
    j2[k2] = fn(i2[k2], k2);
  }

  return j2;
}

function map(fn, m2) {
  if (arguments.length === 1) {
    return n2 => map(fn, n2);
  }

  if (m2 === void 0) {
    return [];
  }

  if (!Array.isArray(m2)) {
    return mapObject(fn, m2);
  }

  let o2 = -1;
  const p2 = m2.length,
        q2 = Array(p2);

  while (++o2 < p2) {
    q2[o2] = fn(m2[o2]);
  }

  return q2;
}

function head(a) {
  if (typeof a === 'string') {
    return a[0] || '';
  }

  return a[0];
}

function baseSlice(V2, W2, X2) {
  let Y2 = -1,
      Z2 = V2.length;
  X2 = X2 > Z2 ? Z2 : X2;

  if (X2 < 0) {
    X2 += Z2;
  }

  Z2 = W2 > X2 ? 0 : X2 - W2 >>> 0;
  W2 >>>= 0;
  const a3 = Array(Z2);

  while (++Y2 < Z2) {
    a3[Y2] = V2[Y2 + W2];
  }

  return a3;
}

function init(a) {
  if (typeof a === 'string') {
    return a.slice(0, -1);
  }

  return a.length ? baseSlice(a, 0, -1) : [];
}

function join(d3, e3) {
  if (arguments.length === 1) {
    return f3 => join(d3, f3);
  }

  return e3.join(d3);
}

function last(a) {
  if (typeof a === 'string') {
    return a[a.length - 1] || '';
  }

  return a[a.length - 1];
}

function length(x) {
  return x.length;
}

function match(l3, x) {
  if (arguments.length === 1) {
    return m3 => match(l3, m3);
  }

  const n3 = x.match(l3);
  return n3 === null ? [] : n3;
}

function merge(o3, p3) {
  if (arguments.length === 1) {
    return q3 => merge(o3, q3);
  }

  return Object.assign({}, o3 || {}, p3 || {});
}

function partialCurry(fn, P3 = {}) {
  return Q3 => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((R3, S3) => {
        fn(merge(Q3, P3)).then(R3).catch(S3);
      });
    }

    return fn(merge(Q3, P3));
  };
}

function replace(V4, W4, X4) {
  if (W4 === void 0) {
    return (Y4, Z4) => replace(V4, Y4, Z4);
  } else if (X4 === void 0) {
    return a5 => replace(V4, W4, a5);
  }

  return X4.replace(V4, W4);
}

function split(n5, o5) {
  if (arguments.length === 1) return p5 => split(n5, p5);
  return o5.split(n5);
}

function tail(x5) {
  return drop(1, x5);
}

function test$1(G5, H5) {
  if (arguments.length === 1) return I5 => test$1(G5, I5);
  return H5.search(G5) !== -1;
}

function toLower(x) {
  return x.toLowerCase();
}

function toUpper(x) {
  return x.toUpperCase();
}

const WORDS = /[A-Z]?[a-z]+|[A-Z]+(?![a-z])+/g;
const WORDS_EXTENDED = /[A-Z\xC0-\xD6\xD8-\xDEА-Я]?[a-z\xDF-\xF6\xF8-\xFFа-я]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])/g;
const PUNCTUATIONSX = /[",\.\?]/g;
const PUNCTUATIONS = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
const HTML_TAGS = /<[^>]*>/g;

function words(str) {
  return match(WORDS, str);
}

function wordsX(str) {
  return match(WORDS_EXTENDED, str);
}

function camelCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  const result = join('', map(val => `${toUpper(head(val))}${toLower(tail(val))}`, method(str)));
  return `${toLower(head(result))}${tail(result)}`;
}

function count(str, substr) {
  return length(split(substr, str)) - 1;
}

const constantCase = (str, extraLatin = false) => {
  const method = extraLatin ? wordsX : words;
  return compose(join('_'), map(toUpper), method)(str);
};

exports.constantCase = constantCase;

function distance(a, b) {
  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  let i, j, prev, tmp, val;

  if (a.length > b.length) {
    tmp = a;
    a = b;
    b = tmp;
  }

  const row = Array(a.length + 1);

  for (i = 0; i <= a.length; i++) {
    row[i] = i;
  }

  for (i = 1; i <= b.length; i++) {
    prev = i;

    for (j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        val = row[j - 1];
      } else {
        val = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1));
      }

      row[j - 1] = prev;
      prev = val;
    }

    row[a.length] = prev;
  }

  return row[a.length];
}

const normalizeGermanChar = char => {
  const arr = ['ä', 'ö', 'ü', 'ß'];
  const normalizedArr = ['a', 'o', 'u', 'ss'];
  const foundIndex = arr.indexOf(char);

  if (foundIndex === -1) {
    return char;
  }

  return normalizedArr[foundIndex];
};

const normalizeGermanWord = str => join('', map(val => normalizeGermanChar(val), split('', toLower(str))));

function distanceGerman(a, b) {
  return distance(normalizeGermanWord(a), normalizeGermanWord(b));
}

function dotCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  return join('.', map(toLower, method(str)));
}

function glob(str, globStr) {
  const numGlobs = count(globStr, '*');

  if (numGlobs === 1) {
    if (head(globStr) === '*') {
      return str.endsWith(tail(globStr));
    } else if (last(globStr) === '*') {
      return str.startsWith(init(globStr));
    }
  } else if (numGlobs === 2 && head(globStr) === '*' && last(globStr) === '*') {
    globStr = init(tail(globStr));
    const foundIndex = str.indexOf(globStr);
    return foundIndex > 0 && foundIndex + globStr.length < str.length;
  }

  return false;
}

function indent(str, indentCount) {
  return join('\n', map(val => `${' '.repeat(indentCount)}${val}`, split('\n', str)));
}

function isLetter(char) {
  return test$1(WORDS_EXTENDED, char);
}

function isPunctuation(char) {
  return test$1(PUNCTUATIONS, char);
}

function kebabCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  return toLower(join('-', method(str)));
}

function trim$1(str) {
  return replace(/\s+/g, ' ', str).trim();
}

const humanLengths = {
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight'
};
const globs = {
  easyFive: '*123*',
  easySix: '*123**',
  easySixR: '**234*',
  easierSix: '*123**',
  easierSixR: '**234*',
  easySeven: '*1234**',
  easySevenR: '**2345*',
  easierSeven: '**234**',
  easyEight: '**2345**',
  easierEight: '**234***',
  easierEightR: '***345**',
  easyAny: len => `**${'-'.repeat(len - 5)}***`,
  easierAny: len => `***${'-'.repeat(len - 6)}***`
};

function chance() {
  return Math.random() > 0.49;
}

function getGlob(len, mode, random) {
  if (len > 8) return globs[`${mode}Any`](len);
  if (len === 5) return globs.easyFive;
  const base = `${mode}${humanLengths[len]}`;
  const maybeKey = globs[base];

  if (!random) {
    return maybeKey === undefined ? globs[`easy${humanLengths[len]}`] : maybeKey;
  }

  return globs[`${base}R`] === undefined ? maybeKey : chance() ? globs[`${base}R`] : maybeKey;
}

function ant(word, glob, replacer) {
  const chars = [...word];
  return chars.map((char, i) => glob[i] === '*' ? char : replacer).join('');
}

function maskWordHelper(word, replacer, charLimit = 4) {
  if (test$1(PUNCTUATIONSX, word) || word.length <= 1) {
    return word;
  }

  if (word.length < charLimit) {
    return `${head(word)}${replacer.repeat(word.length - 1)}`;
  }

  return `${head(word)}${replacer.repeat(word.length - 2)}${last(word)}`;
}

function maskWordHelperX({
  word,
  replacer = '_',
  easyMode = false,
  randomMode = false,
  easierMode = false,
  charLimit = 4
}) {
  const len = word.length;
  if (!easyMode && !easierMode || len <= 4) return maskWordHelper(word, replacer, charLimit);
  const glob = getGlob(len, easyMode ? 'easy' : 'easier', randomMode);
  return ant(word, glob, replacer);
}

const addSpaceAroundPunctuation = sentence => sentence.replace(PUNCTUATIONSX, x => ` ${x} `);
/**
 * Use shorter version of PUNCTUATIONS so_
 * cases `didn't` and `по-добри` be handled
 */


function maskSentence({
  charLimit = 4,
  easyMode = false,
  easierMode = false,
  randomMode = false,
  replacer = '_',
  sentence,
  words = []
}) {
  const parsed = trim$1(addSpaceAroundPunctuation(sentence));
  const hidden = [];
  const visible = [];
  const input = {
    replacer,
    easyMode,
    randomMode,
    easierMode,
    charLimit
  };
  const easyFn = partialCurry(maskWordHelperX, input);
  const ant$$1 = easierMode || easyMode ? word => easyFn({
    word
  }) : word => maskWordHelper(word, replacer, charLimit);
  map(word => {
    const ok = words.length === 0 || words.includes(word);
    const visiblePart = ok ? ant$$1(word) : word;
    hidden.push(word);
    visible.push(visiblePart);
  }, split(' ', parsed));
  return {
    hidden,
    visible
  };
}

function maskWords({
  words,
  replacer = '_',
  charLimit = 3
}) {
  const result = map(val => maskWordHelper(val, replacer, charLimit), split(' ', words));
  return join(' ', result);
}

function parseInput(inputRaw) {
  if (typeof inputRaw !== 'string') throw new Error('inputRaw !== string');
  const numbers = [];
  const chars = [];
  let flag = false;
  inputRaw.split('').forEach(x => {
    if (flag && x) {
      chars.push(x);
    } else if (!flag) {
      const isNumber = Number(x) === Number(x);

      if (isNumber) {
        numbers.push(x);
      } else {
        chars.push(x);
        flag = true;
      }
    } else {
      flag = true;
    }
  });
  return {
    numbers: Number(numbers.join('')),
    chars: chars.join('')
  };
}

const hash = {
  1: ['s', 'seconds', 'second', 'sec'],
  60: ['m', 'minutes', 'minute', 'min'],
  3600: ['h', 'hours', 'hour'],
  86400: ['d', 'days', 'day']
};

function findInHash(hashKey) {
  const [found] = Object.keys(hash).filter(singleKey => hash[singleKey].includes(hashKey));
  if (!found) throw new Error('no numbers passed to `ms`');
  return found;
}

function ms(inputRaw) {
  const input = parseInput(inputRaw);
  const miliseconds = findInHash(input.chars);
  return Math.floor(Number(miliseconds) * 1000 * input.numbers);
}

function pascalCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  return join('', map(val => `${toUpper(head(val))}${toLower(tail(val))}`, method(str)));
}

function removeIndent(str) {
  return join('\n', map(val => val.trimLeft(), split('\n', str)));
}

function reverse$1(str) {
  return [...str].reverse().join('');
}

function seoTitle(str, limit = 3) {
  const result = join(' ', map(val => {
    if (val.length >= limit) {
      return `${toUpper(head(val))}${toLower(tail(val))}`;
    }

    return val;
  }, words(str)));
  return `${toUpper(head(result))}${tail(result)}`;
}

const shuffleArr = arr => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

function shuffle(str) {
  return join('', shuffleArr(split('', str)));
}

function snakeCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  return toLower(join('_', method(str)));
}

function workingMan(partialSplitted, perLine) {
  let lengthHolder = 0;
  let counter = -1;
  let didOverflow = false;
  const willReturn = [];
  const len = partialSplitted.length;
  const overTheTop = head(partialSplitted).length >= perLine;

  while (lengthHolder < perLine && counter + 1 < len) {
    counter++;
    const currentInstance = partialSplitted[counter];
    const mystery = lengthHolder + currentInstance.length + 1;

    if (mystery > perLine) {
      didOverflow = true;
      if (overTheTop) willReturn.push(currentInstance);
    } else {
      willReturn.push(currentInstance);
    }

    lengthHolder = mystery;
  }

  const okCounter = counter - len + 1 === 0;
  const isOver = didOverflow ? overTheTop : okCounter;
  const newPartialSplitted = partialSplitted.slice(willReturn.length);
  return {
    end: isOver,
    readyForPush: willReturn,
    newPartialSplitted: newPartialSplitted
  };
}

function splitPerLine({
  text,
  splitChar = ' ',
  perLine = 30
}) {
  const willReturn = [];
  let counter = -1;
  let splitted = text.split(splitChar);
  const len = splitted.length;

  while (counter++ < len) {
    const {
      end,
      newPartialSplitted,
      readyForPush
    } = workingMan(splitted, perLine);
    willReturn.push(readyForPush);

    if (end) {
      counter = len;
    } else {
      splitted = newPartialSplitted;
    }
  }

  const parsed = willReturn.map(singleAnswer => singleAnswer.join(splitChar));
  return parsed;
}

const addSpaceAroundPunctuation$1 = sentence => sentence.replace(PUNCTUATIONS, match$$1 => ` ${match$$1} `);

function splitSentence(sentence) {
  return split(' ', trim$1(addSpaceAroundPunctuation$1(sentence)));
}

function stripPunctuation(str) {
  return replace(PUNCTUATIONS, '', str);
}
/**Used as the `TypeError` message for "Functions" methods. */


const FUNC_ERROR_TEXT = 'Expected a function';
/**Used to stand-in for `undefined` hash values. */

const HASH_UNDEFINED = '__lodash_hash_undefined__';
/**Used as references for various `Number` constants. */

let INFINITY = 1 / 0;
/**`Object#toString` result references. */

let funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/**Used to match property names within property paths. */

let reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/**Used to match backslashes in property paths. */

const reEscapeChar = /\\(\\)?/g;
/**Used to detect host constructors (Safari). */

const reIsHostCtor = /^\[object .+?Constructor\]$/;
/**Detect free variable `global` from Node.js. */

const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
/**Detect free variable `self`. */

const freeSelf = typeof self === 'object' && self && self.Object === Object && self;
/**Used as a reference to the global object. */

const root = freeGlobal || freeSelf ||
/*#__PURE__*/
Function('return this')();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  //Many host objects are `Object` objects that can coerce to strings
  //despite having improperly defined `toString` methods.
  let result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = Boolean(String(value));
    } catch (e) {}
  }

  return result;
}
/**Used for built-in method references. */


let arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/**Used to detect overreaching core-js shims. */

const coreJsData = root['__core-js_shared__'];
/**Used to detect methods masquerading as native. */

const maskSrcKey =
/*#__PURE__*/
function () {
  const uid =
  /*#__PURE__*/
  /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**Used to resolve the decompiled source of functions. */


const funcToString = funcProto.toString;
/**Used to check objects for own properties. */

const hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

const objectToString = objectProto.toString;
/**Used to detect if a method is native. */

const reIsNative =
/*#__PURE__*/
RegExp('^' +
/*#__PURE__*/
funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**Built-in value references. */

let Symbol$1 = root.Symbol,
    splice = arrayProto.splice;
/*Built-in method references that are verified to be native. */

let Map =
/*#__PURE__*/
getNative(root, 'Map'),
    nativeCreate =
/*#__PURE__*/
getNative(Object, 'create');
/**Used to convert symbols to primitives and strings. */

let symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  const data = this.__data__;

  if (nativeCreate) {
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  const data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  const data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} //Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  let data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  const lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  let data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  let data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} //Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  let index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key).delete(key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} //Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  let length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  const pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  //Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  const result = String(value);
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  const data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  const value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  const type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return Boolean(maskSrcKey) && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath =
/*#__PURE__*/
memoize(string => {
  string = toString$1(string);
  const result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, (match, number, quote, string) => {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return String(func);
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    let args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} //Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  //The use of `Object#toString` avoids issues with the `typeof` operator
  //in Safari 8-9 which returns 'object' for typed array and other constructors.
  const tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  const type = typeof value;
  return Boolean(value) && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return Boolean(value) && typeof value === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

function sort$1(fn, arr) {
  if (arguments.length === 1) return arrHolder => sort$1(fn, arrHolder);
  const arrClone = arr.concat();
  return arrClone.sort(fn);
}

function dropLast$1(dropNumber, x) {
  if (arguments.length === 1) {
    return xHolder => dropLast$1(dropNumber, xHolder);
  }

  return x.slice(0, -dropNumber);
}

function trim$2(str) {
  return str.trim();
}

const getMaxLength = lines => {
  const [max] = sort$1((a, b) => a.length < b.length ? 1 : -1)(lines);
  return max.length;
};

exports.getMaxLength = getMaxLength;
const BUFFER = 3;

function fitWithinLines({
  limit,
  perLine = 30,
  text
}) {
  let counter = perLine;
  const len = text.length;
  let answer;

  while (counter < len) {
    counter++;
    const maybeAnswer = splitPerLine({
      text,
      perLine: counter
    });

    if (maybeAnswer.length <= limit) {
      answer = maybeAnswer;
      counter = len;
    } else if (counter + BUFFER === len) {}
  }

  if (!answer) {
    const partial = trim$2(dropLast$1(BUFFER, text));

    if (partial.length < BUFFER * 2) {
      throw new Error(`such text cannot fit within ${limit} lines`);
    }

    return fitWithinLines({
      text: partial,
      perLine,
      limit
    });
  }

  return answer;
}

function stripTags(str) {
  return replace(/\s+/g, ' ', replace(HTML_TAGS, ' ', str)).trim();
}

function mergeAll$1(arr) {
  let willReturn = {};
  map(val => {
    willReturn = merge(willReturn, val);
  }, arr);
  return willReturn;
}

function mapToObject$1(fn, list) {
  return mergeAll$1(map(fn, list));
}

function takeArguments(url, sep = '?', rawFlag = false) {
  const [, ...rawArguments] = url.split(sep);
  if (rawArguments.length === 0) return {};
  return mapToObject$1(x => {
    const [keyRaw, value] = x.split('=');
    const key = rawFlag ? keyRaw : camelCase(keyRaw);

    if (value === undefined || value === 'true') {
      return {
        [key]: true
      };
    }

    if (value === 'false') {
      return {
        [key]: false
      };
    }

    if (Number.isNaN(Number(value))) {
      return {
        [key]: value
      };
    }

    return {
      [key]: Number(value)
    };
  }, rawArguments);
}

function titleCase(str, extraLatin = false) {
  const method = extraLatin ? wordsX : words;
  return join(' ', map(val => `${toUpper(head(val))}${toLower(tail(val))}`, method(str)));
}
},{}],"vCwO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultFontSize = 2.6;

function Select({
  fontSize = defaultFontSize,
  onChange,
  list,
  current,
  parentProps = {},
  evalStyled = ''
}) {
  const currenOnChange = ({
    target
  }) => onChange(target.value);

  const Container = _styledComponents.default.div`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    outline: 2px solid #46c;
    ${evalStyled}
  `;
  const Select = _styledComponents.default.select`
    cursor: pointer;
    transition: font-size 0.27s ease-in;
    font-size: ${fontSize}vh;
    line-height: ${fontSize}vh;
    width: 100%;
    height: 100%;
    color: #232;
    padding-left: 2vw;
    overflow: hidden;
    &:hover {
      font-size: ${fontSize * 1.2}vh;
    }
  `;
  const OptionStyled = _styledComponents.default.option`
    background: #953a;
  `;

  const Options = _react.default.createElement(_react.default.Fragment, null, list.map((x, i) => _react.default.createElement(OptionStyled, {
    key: `select-sk-${i}`,
    value: x
  }, x)));

  return _react.default.createElement(Container, parentProps, _react.default.createElement(Select, {
    value: current,
    onChange: currenOnChange
  }, Options));
}
},{"react":"HdMw","styled-components":"OuU+"}],"9/Ki":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _rambdax = require("rambdax");

var _component = require("../../Grid/component.js");

var _component2 = require("../../Select/component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class SelectOption extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(newValue) {
    this.props.majorCallback({ ...this.props.expandableProps.singleOption,
      newValue,
      i: this.props.expandableProps.i
    });
  }

  render() {
    const {
      singleOption,
      canShow,
      containerProps
    } = this.props.expandableProps;
    const background = canShow ? '#25a' : '#4334';
    const cellProps = { ...this.props.baseCellProps,
      evalStyled: (0, _rambdax.glue)(`
          background: ${background};
          ${this.props.baseCellProps.evalStyled}
        `)
    };
    const inputProps = {
      height: 2,
      evalStyled: 'outline: solid #d6e5;',
      topLeft: {
        x: 1,
        y: 1
      },
      width: 14
    };
    const label = singleOption.visibleLabel ? singleOption.visibleLabel : singleOption.label;
    return _react.default.createElement(_component.Cell, containerProps, _react.default.createElement("div", null, _react.default.createElement(_component.Grid, null, canShow && _react.default.createElement(_component.Cell, inputProps, _react.default.createElement(_component2.Select, {
      current: singleOption.value,
      list: singleOption.choices,
      onChange: this.handleSelect
    })), _react.default.createElement(_component.Cell, _extends({}, cellProps, {
      extraProps: {
        onClick: () => this.props.turnInputActive(this.props.expandableProps.i)
      }
    }), label, ' : ', _react.default.createElement("span", {
      style: {
        fontSize: '70%'
      }
    }, singleOption.value)))));
  }

}

exports.SelectOption = SelectOption;
},{"react":"HdMw","rambdax":"12t9","../../Grid/component.js":"1UWW","../../Select/component.js":"vCwO"}],"e9XV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWithInitial = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = _styledComponents.default.input`
    padding-left: 5px;
    font-size: 3vh;
    line-height: 5vh;
  `;

class InputWithInitial extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onBlur() {
    this.props.onBlur(this.state.value);
  }

  render() {
    return _react.default.createElement(Input, {
      autoFocus: true,
      type: "text",
      value: this.state.value,
      onBlur: this.onBlur,
      onChange: this.onChange
    });
  }

}

exports.InputWithInitial = InputWithInitial;
},{"react":"HdMw","styled-components":"OuU+"}],"CyF+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _rambdax = require("rambdax");

var _component = require("../../Grid/component.js");

var _InputWithInitial = require("./InputWithInitial");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class InputOption extends _react.default.Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(newValue) {
    this.props.majorCallback({ ...this.props.expandableProps.singleOption,
      newValue,
      i: this.props.expandableProps.i
    });
  }

  render() {
    const background = this.props.expandableProps.canShow ? '#25a' : '#4334';
    const cellProps = { ...this.props.baseCellProps,
      evalStyled: (0, _rambdax.glue)(`
      background: ${background};
      ${this.props.baseCellProps.evalStyled}
    `)
    };
    const inputProps = {
      height: 2,
      topLeft: {
        x: 1,
        y: 1
      },
      width: 7
    };
    const {
      singleOption,
      containerProps
    } = this.props.expandableProps;
    const label = singleOption.visibleLabel ? singleOption.visibleLabel : singleOption.label;
    return _react.default.createElement(_component.Cell, containerProps, _react.default.createElement("div", null, _react.default.createElement(_component.Grid, null, this.props.expandableProps.canShow && _react.default.createElement(_component.Cell, inputProps, _react.default.createElement(_InputWithInitial.InputWithInitial, {
      initialValue: singleOption.value,
      onBlur: this.onBlur
    })), _react.default.createElement(_component.Cell, _extends({}, cellProps, {
      extraProps: {
        onClick: () => this.props.turnInputActive(this.props.expandableProps.i)
      }
    }), label, ' : ', singleOption.value))));
  }

}

exports.InputOption = InputOption;
},{"react":"HdMw","rambdax":"12t9","../../Grid/component.js":"1UWW","./InputWithInitial":"e9XV"}],"CWkB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleOption = ToggleOption;

var _react = _interopRequireDefault(require("react"));

var _rambdax = require("rambdax");

var _component = require("../../Grid/component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ToggleOption({
  baseCellProps,
  containerProps,
  majorCallback,
  singleOption
}) {
  const handleClick = () => {
    majorCallback({
      type: 'TOGGLE',
      label: singleOption.label,
      newValue: !singleOption.value
    });
  };

  const background = singleOption.value ? '#11a111' : '#a449';
  const cellProps = { ...baseCellProps,
    evalStyled: (0, _rambdax.glue)(`
      background: ${background};
      ${baseCellProps.evalStyled}
    `)
  };
  const extraProps = {
    onClick: handleClick
  };
  const label = singleOption.visibleLabel ? singleOption.visibleLabel : singleOption.label;
  return _react.default.createElement(_component.Cell, containerProps, _react.default.createElement("div", null, _react.default.createElement(_component.Grid, null, _react.default.createElement(_component.Cell, _extends({}, cellProps, {
    extraProps: extraProps
  }), label, ' : ', singleOption.value.toString()))));
}
},{"react":"HdMw","rambdax":"12t9","../../Grid/component.js":"1UWW"}],"7TPW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallbackOption = CallbackOption;

var _react = _interopRequireDefault(require("react"));

var _rambdax = require("rambdax");

var _component = require("../../Grid/component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CallbackOption({
  baseCellProps,
  forceClose,
  containerProps,
  singleOption
}) {
  const handleClick = () => {
    forceClose();
    singleOption.callback();
  };

  const background = '#11a5';
  const cellProps = { ...baseCellProps,
    evalStyled: (0, _rambdax.glue)(`
      background: ${background};
      ${baseCellProps.evalStyled}
    `)
  };
  const extraProps = {
    onClick: handleClick
  };
  const label = singleOption.visibleLabel ? singleOption.visibleLabel : singleOption.label;
  return _react.default.createElement(_component.Cell, containerProps, _react.default.createElement("div", null, _react.default.createElement(_component.Grid, null, _react.default.createElement(_component.Cell, _extends({}, cellProps, {
    extraProps: extraProps
  }), label))));
}
},{"react":"HdMw","rambdax":"12t9","../../Grid/component.js":"1UWW"}],"GrtV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _rambdax = require("rambdax");

var _component = require("../../Grid/component.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SliderInput = _styledComponents.default.input`
  width: 100%;
  cursor: pointer;
  outline: 1px solid #54a3;
`;

class SliderOption extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const newValue = e.target.value;
    this.props.majorCallback({ ...this.props.expandableProps.singleOption,
      newValue,
      i: this.props.expandableProps.i
    });
  }

  render() {
    const {
      singleOption,
      canShow,
      containerProps
    } = this.props.expandableProps;
    const background = canShow ? '#25a' : '#4334';
    const cellProps = { ...this.props.baseCellProps,
      evalStyled: (0, _rambdax.glue)(`
          background: ${background};
          ${this.props.baseCellProps.evalStyled}
        `)
    };
    const inputProps = {
      height: 2,
      topLeft: {
        x: 1,
        y: 1
      },
      width: 14
    };
    const label = singleOption.visibleLabel ? singleOption.visibleLabel : singleOption.label;
    return _react.default.createElement(_component.Cell, containerProps, _react.default.createElement("div", null, _react.default.createElement(_component.Grid, null, canShow && _react.default.createElement(_component.Cell, inputProps, _react.default.createElement(SliderInput, {
      autoFocus: true,
      defaultValue: String(singleOption.value),
      max: String(singleOption.between[1]),
      min: String(singleOption.between[0]),
      type: "range",
      onBlur: this.handleInput
    })), _react.default.createElement(_component.Cell, _extends({}, cellProps, {
      extraProps: {
        onClick: () => this.props.turnInputActive(this.props.expandableProps.i)
      }
    }), label, ' : ', singleOption.value, _react.default.createElement("span", {
      style: {
        fontSize: '70%'
      }
    }, '(btw ', singleOption.between[0], ' and ', singleOption.between[1], ')')))));
  }

}

exports.SliderOption = SliderOption;
},{"react":"HdMw","rambdax":"12t9","../../Grid/component.js":"1UWW","styled-components":"OuU+"}],"h8hg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

var _rambdax = require("rambdax");

var React = _interopRequireWildcard(require("react"));

var _clientHelpers = require("client-helpers");

var _component = require("../Grid/component.js");

var _SelectOption = require("./internals/SelectOption");

var _InputOption = require("./internals/InputOption");

var _ToggleOption = require("./internals/ToggleOption");

var _CallbackOption = require("./internals/CallbackOption");

var _SliderOption = require("./internals/SliderOption");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const closeButtonPropsStyled = (0, _rambdax.glue)(`
    background: #498205;
    text-align:center;
    width: 100%;
    line-height: 6vh;  
    cursor: pointer;
    font-size: 3vh;  
`);
const navigationStyled = (0, _rambdax.glue)(`
    background: #847545;
    text-align:center;
    width: 90%;
    margin: 5%;
    line-height: 6vh;  
    cursor: pointer;
    font-size: 3vh;  
`);

function getVisibleOptions(options, perPage, page) {
  return options.slice(page * perPage, page * perPage + perPage);
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.PER_PAGE = 5;
    this.LENGTH = props.allOptions.length;
    this.SHOW_NAVIGATION = props.allOptions.length > this.PER_PAGE;
    this.state = {
      allOptions: props.allOptions,
      expanded: false,
      expandedIndex: -1,
      page: 0
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.majorCallback = this.majorCallback.bind(this);
    this.turnInputActive = this.turnInputActive.bind(this);
    this.turnInputActiveFn = this.turnInputActiveFn.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose(this.state.allOptions);
  }

  handleNavigation(e) {
    const {
      page
    } = this.state;
    const getNewIndex = e.target.id === 'next' ? _rambdax.nextIndex : _rambdax.prevIndex;
    const newPage = getNewIndex(page, Array(Math.ceil(this.LENGTH / this.PER_PAGE)));
    this.setState({
      page: newPage
    });
  }

  turnInputActive(i) {
    if (this.state.expanded && this.state.expandedIndex === i) {
      return this.setState({
        expanded: false
      });
    }

    this.setState({
      expanded: true,
      expandedIndex: i
    });
  }

  turnInputActiveFn(i) {
    if (this.state.expanded && this.state.expandedIndex === i) {
      return {
        expanded: false
      };
    }

    return {
      expanded: true,
      expandedIndex: i
    };
  }

  majorCallback({
    label,
    newValue,
    i
  }) {
    const {
      allOptions
    } = this.state;
    const foundIndex = (0, _rambdax.findIndex)(x => x.label === label, allOptions);
    const newState = (0, _rambdax.change)(this.state, `allOptions.${foundIndex}.value`, newValue);
    this.setState({ ...newState,
      ...(typeof newValue === 'boolean' ? {} : this.turnInputActiveFn(i))
    });
    (0, _clientHelpers.setLocalize)(label, newValue);
  }

  render() {
    const {
      allOptions,
      page
    } = this.state;
    const containerProps = {
      height: 32,
      evalStyled: 'z-index:1',
      subgridFlag: true,
      topLeft: {
        x: 0,
        y: 0
      },
      width: 32
    };
    const closeButtonProps = {
      width: 1,
      height: 1,
      topLeft: {
        y: 1,
        x: 15
      },
      evalStyled: closeButtonPropsStyled,
      extraProps: {
        onClick: this.handleClose
      }
    };
    const prevPageProps = {
      width: 2,
      height: 1,
      topLeft: {
        y: 11,
        x: 5
      },
      evalStyled: navigationStyled,
      extraProps: {
        onClick: this.handleNavigation
      }
    };
    const nextPageProps = { ...prevPageProps,
      topLeft: {
        y: 11,
        x: 7
      },
      extraProps: {
        id: 'next',
        onClick: this.handleNavigation
      }
    };
    const baseCellProps = {
      height: 2,
      evalStyled: 'cursor:pointer;outline: solid #bdc3c7;text-align: center;line-height:5.2vh',
      topLeft: {
        x: 16,
        y: 1
      },
      width: 13
    };

    const Factory = OptionComponent => expandableProps => React.createElement(OptionComponent, {
      baseCellProps: baseCellProps,
      expandableProps: expandableProps,
      key: expandableProps.containerProps.key,
      majorCallback: this.majorCallback,
      turnInputActive: this.turnInputActive
    });

    const ToggleFn = (0, _rambdax.partialCurry)(_ToggleOption.ToggleOption, {
      baseCellProps,
      majorCallback: this.majorCallback
    });
    const CallbackFn = (0, _rambdax.partialCurry)(_CallbackOption.CallbackOption, {
      baseCellProps,
      forceClose: this.props.forceClose
    });
    const InputFn = Factory(_InputOption.InputOption);
    const SelectFn = Factory(_SelectOption.SelectOption);
    const SliderFn = Factory(_SliderOption.SliderOption);
    const visibleOptions = getVisibleOptions(allOptions, this.PER_PAGE, page);
    const AllOptions = visibleOptions.map((singleOption, i) => {
      const containerProps = {
        key: `option-row-${i}`,
        height: 2,
        topLeft: {
          x: 0,
          y: Math.floor(1 + 2 * i)
        },
        width: 15,
        evalStyled: 'background: #fafaf5;outline: solid #282c34'
      };
      const canShow = this.state.expanded && this.state.expandedIndex === i;
      const baseProps = {
        containerProps,
        singleOption
      };
      const expandableProps = { ...baseProps,
        i,
        canShow
      };

      switch (singleOption.type) {
        case 'TOGGLE':
          return ToggleFn(baseProps);

        case 'SELECT':
          return SelectFn(expandableProps);

        case 'INPUT':
          return InputFn(expandableProps);

        case 'SLIDER':
          return SliderFn(expandableProps);

        case 'CALLBACK':
          return CallbackFn(expandableProps);

        default:
          console.warn('invalid input for `Options` component', arguments);
          return null;
      }
    });
    return React.createElement(_component.Cell, containerProps, AllOptions, !this.state.expanded && React.createElement(_component.Cell, closeButtonProps, "X"), this.LENGTH > this.PER_PAGE && React.createElement(React.Fragment, null, React.createElement(_component.Cell, prevPageProps, '<'), React.createElement(_component.Cell, nextPageProps, '>')));
  }

}

exports.Options = Options;
},{"rambdax":"12t9","react":"HdMw","client-helpers":"wcEF","../Grid/component.js":"1UWW","./internals/SelectOption":"9/Ki","./internals/InputOption":"CyF+","./internals/ToggleOption":"CWkB","./internals/CallbackOption":"7TPW","./internals/SliderOption":"GrtV"}],"xvPE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Options = void 0;

var _stringFn = require("string-fn");

var _rambdax = require("rambdax");

var React = _interopRequireWildcard(require("react"));

var _options = require("./options.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createKeyBinding({
  label,
  callback,
  firstKey,
  secondKey
}) {
  (0, _rambdax.ok)(label, callback, firstKey, secondKey)(String, 'function', String, String);
  return ({
    key
  }) => {
    if (key === firstKey) {
      return (0, _rambdax.setter)(label, true);
    } else if (key === secondKey && (0, _rambdax.getter)(label)) {
      callback();
      return (0, _rambdax.setter)(label, false);
    } else if (!(0, _rambdax.getter)(label)) {
      return (0, _rambdax.setter)(label, false);
    }
  };
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    (0, _rambdax.ok)(props)({
      options: Array,
      label: String,
      callback: Function
    });
    this.eventHolder = null;
    this.forceClose = this.forceClose.bind(this);
    this.listener = this.listener.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      active: false
    };
  }

  handleClose(newOptions) {
    this.props.callback({
      type: 'UPDATE_OPTIONS',
      payload: {
        newOptions
      }
    });
    this.setState({
      active: false
    });
  }

  componentDidMount() {
    const [firstKey, secondKey] = this.props.keyBinding ? this.props.keyBinding : ['Alt', 'o'];
    this.eventHolder = createKeyBinding({
      label: `${this.props.label}.options.alt.o`,
      firstKey: (0, _stringFn.pascalCase)(firstKey),
      secondKey: secondKey,
      callback: this.listener
    });
    document.addEventListener('keydown', this.eventHolder);
  }

  componentWillUnmount() {
    if (!this.eventHolder) return;
    document.removeEventListener('keydown', this.eventHolder);
  }

  listener() {
    const newActive = !this.state.active;

    if (newActive) {
      this.props.callback({
        type: 'UPDATE_ACTIVE'
      });
    }

    this.setState({
      active: newActive
    });
  }

  forceClose() {
    this.setState({
      active: false
    });
  }

  render() {
    if (!this.state.active) return null;
    return React.createElement(_options.Options, {
      allOptions: this.props.options,
      forceClose: this.forceClose,
      handleClose: this.handleClose
    });
  }

}

exports.Options = Options;
var _default = Options;
exports.default = _default;
},{"string-fn":"yQPU","rambdax":"12t9","react":"HdMw","./options.js":"h8hg"}],"4qIi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.produceRow = produceRow;

var _rambdax = require("rambdax");

var _stringFn = require("string-fn");

const LIMIT = 26;
const HALF_LIMIT = 13;

function produceRow(wordRaw) {
  const word = wordRaw.length > LIMIT ? (0, _rambdax.take)(LIMIT, wordRaw) : wordRaw;

  if (word.length <= 12) {
    return (0, _rambdax.switcher)(word.length).is(x => x === 1, (0, _stringFn.indent)(word, HALF_LIMIT - 2)).is(x => x === 2, (0, _stringFn.indent)(word, HALF_LIMIT - 3)).is(x => x === 3, (0, _stringFn.indent)(word, HALF_LIMIT - 3)).is(4, (0, _stringFn.indent)(word, HALF_LIMIT - 4)).is(5, (0, _stringFn.indent)(word, HALF_LIMIT - 4)).is(6, (0, _stringFn.indent)(word, HALF_LIMIT - 5)).is(7, (0, _stringFn.indent)(word, HALF_LIMIT - 5)).is(8, (0, _stringFn.indent)(word, HALF_LIMIT - 6)).is(9, (0, _stringFn.indent)(word, HALF_LIMIT - 6)).default((0, _stringFn.indent)(word, HALF_LIMIT - 7));
  }

  if (word.length <= 17) {
    return (0, _rambdax.switcher)(word.length).is(13, (0, _stringFn.indent)(word, HALF_LIMIT - 8)).is(14, (0, _stringFn.indent)(word, HALF_LIMIT - 8)).default((0, _stringFn.indent)(word, HALF_LIMIT - 9));
  }

  return (0, _stringFn.indent)(word, LIMIT - word.length);
}
},{"rambdax":"12t9","string-fn":"yQPU"}],"wIN1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeBy = rangeBy;

var _rambdax = require("rambdax");

function rangeBy(startNum, endNum, distance) {
  const isInteger = !distance.toString().includes('.');

  if (startNum > endNum) {
    const startNumHolder = startNum;
    startNum = endNum;
    endNum = startNumHolder;
  }

  const willReturn = [startNum];
  let valueToPush = startNum;

  if (isInteger) {
    const loopIndexes = (0, _rambdax.range)(0, Math.floor((endNum - startNum) / distance));
    loopIndexes.forEach(() => {
      valueToPush += distance;
      willReturn.push(valueToPush);
    });
  } else {
    const decimalLength = (0, _rambdax.compose)(_rambdax.length, _rambdax.last, (0, _rambdax.split)('.'))(distance.toString());
    const loopIndexes = (0, _rambdax.range)(0, Math.floor((endNum - startNum) / distance));
    loopIndexes.forEach(() => {
      valueToPush += distance;
      willReturn.push(Number(valueToPush.toFixed(decimalLength)));
    });
  }

  return willReturn;
}
},{"rambdax":"12t9"}],"f+HX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReloadIndexes = getReloadIndexes;

var _rangeBy = require("../../libs/rangeBy.js");

function getReloadIndexes(len) {
  const step = Math.floor(len / 100);
  return (0, _rangeBy.rangeBy)(step, len - step - step, step);
}
},{"../../libs/rangeBy.js":"wIN1"}],"Hsuf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeedReader = void 0;

var _getData = require("./getData.js");

var _rambdax = require("rambdax");

var _react = _interopRequireDefault(require("react"));

var _clientHelpers = require("client-helpers");

var _component = require("../../src/Grid/component");

var _component2 = require("../../src/Options/component");

var _produceRow = require("./produceRow.js");

var _getReloadIndexes = require("./getReloadIndexes.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BACKGROUND = '#ede8e1aa';
const Div = _styledComponents.default.div`
z-index:1000;
font-size: 6vh;
color: #30322ef1;
margin-top: auto;
margin-bottom: auto;
`;
const MarkedDivLeft = (0, _styledComponents.default)(Div)`
color: #f7f2f2;
padding-left: 10%;
min-height:7.2vh;
background: #977d96e9;
width: 100%;
`;
const MarkedDivRight = (0, _styledComponents.default)(MarkedDivLeft)`
color: #f7f2f2;
padding-left: 0%;
background: #977d96e9;
width: 100%;
`;

function defineDelay(word, base) {
  const longDelay = word.length > 12;
  const mediumDelay = word.length > 7;
  if (longDelay) return Math.floor(260 * base);
  if (mediumDelay) return Math.floor(220 * base);
  return Math.floor(170 * base);
}

const bookIndexOption = {
  label: 'book.index',
  type: 'SELECT',
  visibleLabel: 'Book index',
  choices: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  value: (0, _clientHelpers.initialGetLocalize)({
    key: 'book.index',
    defaultValue: '1'
  })
};
const forceReloadOption = {
  label: 'force.reload',
  type: 'TOGGLE',
  visibleLabel: 'Force reload on every 1% progress',
  value: (0, _clientHelpers.initialGetLocalize)({
    key: 'force.reload',
    defaultValue: false
  })
};
const progressOption = {
  visibleLabel: 'Progress',
  label: 'speed.reader.progress',
  type: 'SLIDER',
  between: [0, 100],
  value: (0, _clientHelpers.initialGetLocalize)({
    key: 'speed.reader.progress',
    defaultValue: 0
  })
};
const speedOption = {
  visibleLabel: 'Speed',
  label: 'speed.reader.speed',
  type: 'SLIDER',
  between: [200, 1000],
  value: (0, _clientHelpers.initialGetLocalize)({
    key: 'speed.reader.speed',
    defaultValue: 500
  })
};

function calculateActualSpeed(input) {
  return (0, _rambdax.toDecimal)(input / 500, 1);
}

const isFocused = x => [10, 11].includes(x);

class SpeedReader extends _react.default.Component {
  constructor(props) {
    super(props);
    this.SPEED = calculateActualSpeed(speedOption.value);
    this.OPTIONS = [bookIndexOption, progressOption, speedOption, forceReloadOption];
    this.state = {
      show: true,
      word: (0, _rambdax.defaultTo)('', props.testString)
    };
    this.work = this.work.bind(this);
    this.handleOptionsCallback = this.handleOptionsCallback.bind(this);
  }

  async work(data) {
    const len = data.length;
    const reloadIndexes = (0, _getReloadIndexes.getReloadIndexes)(len);
    const initialCounter = progressOption.value === 0 ? -1 : reloadIndexes[progressOption.value];
    const counter = initialCounter ? initialCounter : (0, _rambdax.last)(reloadIndexes);

    for (const i of (0, _rambdax.range)(counter + 1, len)) {
      if (reloadIndexes.includes(i)) {
        const percentage = reloadIndexes.indexOf(i) + 1;
        (0, _clientHelpers.setLocalize)(progressOption.label, percentage);

        if (forceReloadOption.value && percentage < 98) {
          return window.location.reload(false);
        }
      }

      if (this.state.show) {
        this.setState({
          word: data[i]
        });
      }

      await (0, _rambdax.delay)(defineDelay(data[i], this.SPEED));
    }

    (0, _clientHelpers.setLocalize)(progressOption.label, 0);
    await (0, _rambdax.delay)(2000);
    window.location.reload(false);
  }

  handleOptionsCallback({
    type
  }) {
    if (type === 'UPDATE_ACTIVE') {
      return this.setState({
        show: false
      });
    }

    if (type !== 'UPDATE_OPTIONS') return;
    (0, _rambdax.delay)(500).then(() => window.location.reload(false));
  }

  componentDidMount() {
    if (this.props.testString) return;
    (0, _getData.getData)(bookIndexOption.value).then(data => this.work(data));
  }

  render() {
    const row = (0, _produceRow.produceRow)(this.state.word);
    const Row = row.split``.map((char, i) => {
      const focused = isFocused(i);
      if (!focused && (!char || !this.state.show)) return;
      const El = (0, _rambdax.maybe)(i === 10, MarkedDivLeft, i === 11 ? MarkedDivRight : Div);
      return _react.default.createElement(_component.Cell, {
        evalStyled: "display:flex;",
        height: 10,
        key: `speed-reader-row-${i}`,
        topLeft: {
          x: 3 + i,
          y: 10
        },
        width: 1
      }, _react.default.createElement(El, null, char));
    });
    return _react.default.createElement(_component.Grid, {
      background: BACKGROUND
    }, _react.default.createElement(_component2.Options, {
      callback: this.handleOptionsCallback,
      keyBinding: this.props.optionsKeyBinding,
      label: "speed.reader",
      options: this.OPTIONS
    }), _react.default.createElement(_component.Cell, {
      evalStyled: "background: ${BACKGROUND}",
      height: 24,
      topLeft: {
        x: 2,
        y: 4
      },
      width: 28
    }), this.state.show ? Row : null);
  }

}

exports.SpeedReader = SpeedReader;
},{"./getData.js":"u1Ug","rambdax":"12t9","react":"HdMw","client-helpers":"wcEF","../../src/Grid/component":"1UWW","../../src/Options/component":"xvPE","./produceRow.js":"4qIi","./getReloadIndexes.js":"f+HX","styled-components":"OuU+"}],"8uCc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeedReaderComplete = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SpeedReaderComplete extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement(_component.SpeedReader, this.props);
  }

}

exports.SpeedReaderComplete = SpeedReaderComplete;
},{"react":"HdMw","./component":"Hsuf"}],"c2Qt":[function(require,module,exports) {
"use strict";

require("./style.scss");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _sentry = require("./ants/sentry.js");

var _complete = require("../stories/apps/SpeedReader/complete.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sentry.sentryAnt)();

function Root() {
  return _react.default.createElement(_complete.SpeedReaderComplete, null);
}

(0, _reactDom.render)(_react.default.createElement(Root, null), document.getElementById('root'));
},{"./style.scss":"T0VR","react":"HdMw","react-dom":"X9zx","./ants/sentry.js":"xHQ7","../stories/apps/SpeedReader/complete.js":"8uCc"}]},{},["c2Qt"], null)
//# sourceMappingURL=/src.3148b185.js.map
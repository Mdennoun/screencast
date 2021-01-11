function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h1>PCK Screencasting</h1>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClientClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">{{ client?.user?.id }}</h2>\n\n<video #video height=\"200\" width=\"270\" autoplay>\n  Your browser does not support HTML5 video.\n</video>\n\n<video #videoScreenShare height=\"200\" width=\"270\" autoplay>\n  Your browser does not support HTML5 video.\n</video>\n\n<div class=\"incoming\">\n  <h2>Moderator</h2>\n\n  <video #incomingVideo autoplay height=\"500\" width=\"670\">\n    Your browser does not support HTML5 video.\n  </video>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  <a [routerLink]=\"['/moderator']\">Je suis modérateur</a>\n</p>\n\n<p>\n  <a [routerLink]=\"['/client']\">Je suis client</a>\n</p>\n\n<p>\n  <a [routerLink]=\"['/observer']\">Je suis observateur</a>\n</p>\n\n<div class=\"login-form col-md-6 offset-md-3 align-center\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n    <div class=\"form-group\">\n      <label for=\"username\">Nom du compte</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"username\"\n        formControlName=\"username\"\n        autocomplete=\"on\"\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Mot de passe</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        formControlName=\"password\"\n        autocomplete=\"on\"\n      />\n    </div>\n\n    <div class=\"text-center\">\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Connexion\" />\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moderator/moderator.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/moderator/moderator.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModeratorModeratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">{{ connectedUser?.id }}</h2>\n\n<video #video height=\"200\" width=\"270\" autoplay>\n  Your browser does not support HTML5 video.\n</video>\n\n<div class=\"incoming\">\n  <h2>Client</h2>\n\n  <div class=\"embed-responsive embed-responsive-16by9\">\n    <video #incomingAudio autoplay style=\"display: none\">\n      Your browser does not support HTML5 video.\n    </video>\n    <video #incomingVideo autoplay>\n      Your browser does not support HTML5 video.\n    </video>\n  </div>\n\n  <div class=\"embed-responsive embed-responsive-16by9\">\n    <video #incomingVideoScreenShare autoplay>\n      Your browser does not support HTML5 video.\n    </video>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/observer/observer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/observer/observer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsObserverObserverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">{{ client?.user?.id }}</h2>\n\n<div class=\"incoming\">\n  <h2>Moderator</h2>\n\n  <video #incomingModeratorVideo height=\"200\" width=\"270\" autoplay>\n    Your browser does not support HTML5 video.\n  </video>\n</div>\n\n<div class=\"incoming\">\n  <h2>Client</h2>\n\n  <video\n    #incomingClientAudio\n    height=\"200\"\n    width=\"270\"\n    autoplay\n    style=\"display: none\"\n  >\n    Your browser does not support HTML5 video.\n  </video>\n\n  <video #incomingClientVideo height=\"200\" width=\"270\" autoplay>\n    Your browser does not support HTML5 video.\n  </video>\n\n  <video #incomingClientVideoScreenShare autoplay height=\"500\" width=\"670\">\n    Your browser does not support HTML5 video.\n  </video>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
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

        while (_) {
          try {
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
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
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
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

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
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_moderator_moderator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/moderator/moderator.component */
    "./src/app/components/moderator/moderator.component.ts");
    /* harmony import */


    var _components_observer_observer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/observer/observer.component */
    "./src/app/components/observer/observer.component.ts");
    /* harmony import */


    var _components_client_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/client/client.component */
    "./src/app/components/client/client.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");

    var routes = [{
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: "moderator",
      component: _components_moderator_moderator_component__WEBPACK_IMPORTED_MODULE_3__["ModeratorComponent"]
    }, {
      path: "observer",
      component: _components_observer_observer_component__WEBPACK_IMPORTED_MODULE_4__["ObserverComponent"]
    }, {
      path: "client",
      component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_observer_observer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/observer/observer.component */
    "./src/app/components/observer/observer.component.ts");
    /* harmony import */


    var _components_moderator_moderator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/moderator/moderator.component */
    "./src/app/components/moderator/moderator.component.ts");
    /* harmony import */


    var _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/client/client.component */
    "./src/app/components/client/client.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts"); // Modules
    // Components
    // Services


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_observer_observer_component__WEBPACK_IMPORTED_MODULE_5__["ObserverComponent"], _components_moderator_moderator_component__WEBPACK_IMPORTED_MODULE_6__["ModeratorComponent"], _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/client/client.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/client/client.component.ts ***!
    \*******************************************************/

  /*! exports provided: ClientComponent */

  /***/
  function srcAppComponentsClientClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientComponent", function () {
      return ClientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/User */
    "./src/app/models/User.ts");

    var ClientComponent = /*#__PURE__*/function () {
      function ClientComponent() {
        _classCallCheck(this, ClientComponent);

        this.peerConnections = {};
        /**
         * Google server as our stun server
         */

        this.configuration = {
          iceServers: [{
            urls: "stun:stun.l.google.com:19302"
          }],
          // @ts-ignore
          sdpSemantics: "plan-b"
        };
      }

      _createClass(ClientComponent, [{
        key: "receiveAnswer",
        value: function receiveAnswer(data) {
          var payload = data.payload;
          this.peerConnections[data.user.id].setRemoteDescription(payload);
        }
      }, {
        key: "receiveOffer",
        value: function receiveOffer(data) {
          var _this = this;

          var payload = data.payload;

          if (!this.peerConnections[data.user.id]) {
            this.peerConnections[data.user.id] = new RTCPeerConnection(this.configuration);
          }

          this.peerConnections[data.user.id].setRemoteDescription(payload).then(function () {
            return _this.peerConnections[data.user.id].createAnswer();
          }).then(function (sdp) {
            return _this.peerConnections[data.user.id].setLocalDescription(sdp);
          }).then(function () {
            _this.sendSocketMessage(data.user.id, {
              payload: _this.peerConnections[data.user.id].localDescription,
              streamType: data.streamType,
              type: data.type
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_3__["User"]("client");
          this.displayMyStream(user.id).then(function () {
            var socket = new WebSocket("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webSocketUrl, "?userId=").concat(user.id, "&userType=").concat(user.type));
            _this2.client = {
              socket: socket,
              user: user
            };

            socket.onopen = function (event) {
              console.log("Connection Established", event);

              _this2.sendPing(socket);
            };

            socket.onmessage = function (event) {
              var data = JSON.parse(event.data);
              console.log("Message received", data); // Someone joined the stream

              if (data.type === "UserJoined") {
                // Someone joined the stream
                var userJoinedSocketMessage = data;

                _this2.onUserJoined(userJoinedSocketMessage.allUsers);
              } else if (data.type === "UserLeft") {
                _this2.removeUserFromStream(data.user.id);
              } else {
                _this2.gotMessageFromServer(socket, data);
              }
            };

            socket.onclose = function (event) {
              // Close Camera & Audio peer connection
              for (var key in _this2.peerConnections) {
                _this2.peerConnections[key].close();

                delete _this2.peerConnections[key];
              } // Clear associated html elements


              console.log("someone left");
            };

            window.onunload = window.onbeforeunload = function () {
              socket.close();
            };
          });
        }
      }, {
        key: "sendPing",
        value: function sendPing(webSocket) {
          setTimeout(function () {
            webSocket.send(JSON.stringify({
              type: "PingClient"
            }));
          }, 10000); // in milliseconds
        }
      }, {
        key: "gotMessageFromServer",
        value: function gotMessageFromServer(webSocket, data) {
          if (data.type === "Pong") {
            this.sendPing(webSocket);
            return;
          }

          if (this.client.user.id === data.user.id) return;

          switch (data.payload.type) {
            case "answer":
              this.receiveAnswer(data);
              break;

            case "offer":
              this.receiveOffer(data);
              break;

            case undefined:
              this.peerConnections[data.user.id].addIceCandidate(new RTCIceCandidate(data.payload));
              break;

            default:
              console.log("oops", data);
              break;
          }
        }
      }, {
        key: "onUserJoined",
        value: function onUserJoined(allUsers) {
          var _this3 = this;

          allUsers.forEach(function (user) {
            if (user.id === _this3.client.user.id) return;

            if (!_this3.peerConnections[user.id]) {
              _this3.peerConnections[user.id] = new RTCPeerConnection(_this3.configuration);

              _this3.peerConnections[user.id].onicecandidate = function (iceEvent) {
                if (iceEvent.candidate) {
                  _this3.sendSocketMessage(user.id, {
                    payload: iceEvent.candidate,
                    streamType: "video",
                    type: "IceCandidate"
                  });
                }
              };

              if (user.type === "moderator") {
                // @ts-ignore
                _this3.peerConnections[user.id].ontrack = function (event) {
                  var stream;

                  if (event.streams && event.streams[0]) {
                    stream = event.streams[0];
                  } else {
                    console.log("nothing to stream");
                    return;
                  }

                  console.log("streaming ".concat(stream.id));
                  _this3.moderatorHtmlElements.video.srcObject = stream;
                };
              }

              _this3.peerConnections[user.id].onnegotiationneeded = function () {
                _this3.peerConnections[user.id].createOffer().then(function (description) {
                  return _this3.peerConnections[user.id].setLocalDescription(description);
                }).then(function () {
                  _this3.sendSocketMessage(user.id, {
                    payload: _this3.peerConnections[user.id].localDescription,
                    streamType: "video",
                    type: "SessionDescription"
                  });
                });
              };

              _this3.localStream.getTracks().forEach(function (track) {
                return _this3.peerConnections[user.id].addTrack(track, _this3.localStream);
              }); // Send screencapture stream to peer


              _this3.streamScreenShare.getTracks().forEach(function (track) {
                return _this3.peerConnections[user.id].addTrack(track, _this3.streamScreenShare);
              });
            }
          });
        }
      }, {
        key: "removeUserFromStream",
        value: function removeUserFromStream(userId) {
          console.log("removing user from stream");

          if (this.peerConnections[userId]) {
            this.peerConnections[userId].close();
            delete this.peerConnections[userId];
          }
        }
      }, {
        key: "sendSocketMessage",
        value: function sendSocketMessage(toUserId, message) {
          this.client.socket.send(JSON.stringify(Object.assign({}, message, {
            user: this.client.user,
            toUserId: toUserId
          })));
        }
      }, {
        key: "displayMyStream",
        value: function displayMyStream(userId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.localStream) {
                      this.localStream.getTracks().forEach(function (track) {
                        return track.stop();
                      });
                    }

                    if (this.streamScreenShare) {
                      this.streamScreenShare.getTracks().forEach(function (track) {
                        return track.stop();
                      });
                    }

                    _context.prev = 2;
                    _context.next = 5;
                    return navigator.mediaDevices.getUserMedia({
                      audio: true,
                      video: true
                    });

                  case 5:
                    this.localStream = _context.sent;
                    this.gotStream(this.currentUserHtmlElements.video, this.localStream); // @ts-ignore

                    _context.next = 9;
                    return navigator.mediaDevices.getDisplayMedia({
                      video: true
                    });

                  case 9:
                    this.streamScreenShare = _context.sent;
                    this.gotStream(this.currentUserHtmlElements.videoScreenShare, this.streamScreenShare);
                    return _context.abrupt("return", Promise.resolve());

                  case 14:
                    _context.prev = 14;
                    _context.t0 = _context["catch"](2);
                    return _context.abrupt("return", this.logError(_context.t0, "Make sure your microphone or your camera are connected"));

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[2, 14]]);
          }));
        }
      }, {
        key: "gotStream",
        value: function gotStream(videoElement, stream) {
          videoElement.srcObject = stream;
          videoElement.muted = true;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.currentUserHtmlElements = {
            video: this.videoRef.nativeElement,
            videoScreenShare: this.videoScreenShareRef.nativeElement
          };
          this.moderatorHtmlElements = {
            video: this.incomingVideoRef.nativeElement
          };
        }
      }, {
        key: "logError",
        value: function logError(err, message) {
          console.log(err.toString(), err, message);
          return Promise.reject({
            error: err.toString(),
            message: message
          });
        }
      }]);

      return ClientComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", {
      "static": false
    })], ClientComponent.prototype, "videoRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("videoScreenShare", {
      "static": false
    })], ClientComponent.prototype, "videoScreenShareRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingVideo", {
      "static": false
    })], ClientComponent.prototype, "incomingVideoRef", void 0);
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html"))["default"]
    })], ClientComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(userService, router, formBuilder) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.router = router;
        this.loginForm = formBuilder.group({
          username: "",
          password: ""
        });
      }

      _createClass(HomeComponent, [{
        key: "onLogin",
        value: function onLogin() {
          var _this4 = this;

          var formValues = this.loginForm.value;
          this.userService.authenticate(formValues.username, formValues.password).subscribe(function (result) {
            if (result) {
              switch (result.type) {
                case "moderator":
                  _this4.router.navigate(["/moderator"]);

                  break;

                case "client":
                  _this4.router.navigate(["/client"]);

                  break;

                case "observer":
                  _this4.router.navigate(["/observer"]);

                  break;
              }
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/moderator/moderator.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/moderator/moderator.component.ts ***!
    \*************************************************************/

  /*! exports provided: ModeratorComponent */

  /***/
  function srcAppComponentsModeratorModeratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeratorComponent", function () {
      return ModeratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/User */
    "./src/app/models/User.ts");

    var ModeratorComponent = /*#__PURE__*/function () {
      function ModeratorComponent() {
        _classCallCheck(this, ModeratorComponent);

        this.peerConnections = {};
        /**
         * Google server as our stun server
         */

        this.configuration = {
          iceServers: [{
            urls: "stun:stun.l.google.com:19302"
          }],
          // @ts-ignore
          sdpSemantics: "plan-b"
        };
      }

      _createClass(ModeratorComponent, [{
        key: "receiveAnswer",
        value: function receiveAnswer(data) {
          console.log("recieveAnswer ".concat(data.streamType, " ").concat(data.user.id));
          var payload = data.payload;
          this.peerConnections[data.user.id].setRemoteDescription(payload);
        }
      }, {
        key: "receiveOffer",
        value: function receiveOffer(socket, data) {
          var _this5 = this;

          console.log("recieveOffer ".concat(data.streamType, " ").concat(data.user.id));
          var payload = data.payload;
          this.peerConnections[data.user.id].setRemoteDescription(payload).then(function () {
            return _this5.peerConnections[data.user.id].createAnswer();
          }).then(function (sdp) {
            return _this5.peerConnections[data.user.id].setLocalDescription(sdp);
          }).then(function () {
            console.log("recieveOffer send sdp ".concat(data.streamType, " ").concat(data.user.id));

            _this5.sendSocketMessage(socket, data.user.id, {
              payload: _this5.peerConnections[data.user.id].localDescription,
              streamType: data.streamType,
              type: data.type
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_3__["User"]("moderator");
          this.displayMyStream().then(function () {
            var socket = new WebSocket("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webSocketUrl, "?userId=").concat(user.id, "&userType=").concat(user.type));
            _this6.connectedUser = user;

            socket.onopen = function (event) {
              console.log("Connection Established", event);

              _this6.sendPing(socket);
            };

            socket.onmessage = function (event) {
              var data = JSON.parse(event.data);
              console.log("Message received", data);

              if (data.type === "UserJoined") {
                // Someone joined the stream
                var userJoinedSocketMessage = data;

                _this6.onUserJoined(socket, userJoinedSocketMessage.allUsers);
              } else if (data.type === "UserLeft") {
                // Someone left the stream
                _this6.removeUserFromStream(data.user.id);
              } else {
                _this6.gotMessageFromServer(socket, data);
              }
            };

            socket.onclose = function (event) {
              console.log("Connection Closed");

              _this6.onConnectionClosed();
            };

            window.onunload = window.onbeforeunload = function () {
              socket.close();
            };
          });
        }
      }, {
        key: "onConnectionClosed",
        value: function onConnectionClosed() {
          // Close Camera & Audio peer connection
          for (var key in this.peerConnections) {
            this.peerConnections[key].close();
            delete this.peerConnections[key];
          } // Clear associated html elements

        }
      }, {
        key: "onUserJoined",
        value: function onUserJoined(webSocket, allUsers) {
          var _this7 = this;

          allUsers.forEach(function (user) {
            //
            if (user.id === _this7.connectedUser.id) return; //

            if (!_this7.peerConnections[user.id]) {
              console.log("creating peer connection ".concat(user.id));
              _this7.peerConnections[user.id] = new RTCPeerConnection(_this7.configuration);
              console.log("onicecandidate ".concat(user.id));

              _this7.peerConnections[user.id].onicecandidate = function (iceEvent) {
                if (iceEvent.candidate) {
                  _this7.sendSocketMessage(webSocket, user.id, {
                    payload: iceEvent.candidate,
                    streamType: "video",
                    type: "IceCandidate"
                  });
                }
              };

              if (user.type === "client") {
                console.log("ontrack ".concat(user.id));
                var counter = 0; //@ts-ignore

                _this7.peerConnections[user.id].ontrack = function (event) {
                  console.log("streaming their video here");
                  var stream;

                  if (event.streams && event.streams[0]) {
                    stream = event.streams[0];
                  } else {
                    console.log("nothing to stream");
                    return;
                  }

                  if (stream.getAudioTracks().length) {
                    _this7.clientHtmlElements.audio.srcObject = stream;

                    if (stream.getVideoTracks().length) {
                      _this7.clientHtmlElements.video.srcObject = stream;
                      counter = 1;
                    }
                  } else {
                    if (++counter == 2) {
                      _this7.clientHtmlElements.videoScreenShare.srcObject = stream;
                      counter = 0;
                    } else {
                      _this7.clientHtmlElements.video.srcObject = stream;
                    }
                  }
                };
              }

              console.log("addtrack localstream ".concat(user.id)); // Send local stream to peer

              _this7.localStream.getTracks().forEach(function (track) {
                return _this7.peerConnections[user.id].addTrack(track, _this7.localStream);
              }); // Video


              if (user.type === "observer") {
                _this7.peerConnections[user.id].onnegotiationneeded = function () {
                  _this7.peerConnections[user.id].createOffer().then(function (description) {
                    return _this7.peerConnections[user.id].setLocalDescription(description);
                  }).then(function () {
                    console.log("onnegotiationneeded send sdp ".concat(user.id));

                    _this7.sendSocketMessage(webSocket, user.id, {
                      payload: _this7.peerConnections[user.id].localDescription,
                      streamType: "video",
                      type: "SessionDescription"
                    });
                  });
                };
              }
            }
          });
        }
      }, {
        key: "sendPing",
        value: function sendPing(webSocket) {
          setTimeout(function () {
            webSocket.send(JSON.stringify({
              type: "PingModo"
            }));
          }, 10000); // in milliseconds
        }
      }, {
        key: "gotMessageFromServer",
        value: function gotMessageFromServer(webSocket, data) {
          if (data.type === "Pong") {
            this.sendPing(webSocket);
            return;
          }

          if (this.connectedUser.id === data.user.id) return;

          switch (data.payload.type) {
            case "answer":
              this.receiveAnswer(data);
              break;

            case "offer":
              this.receiveOffer(webSocket, data);
              break;

            case undefined:
              console.log("icecandidate");
              this.peerConnections[data.user.id].addIceCandidate(new RTCIceCandidate(data.payload));
              break;

            default:
              console.log("oops", data);
              break;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.currentUserHtmlElements = {
            video: this.videoRef.nativeElement
          };
          this.clientHtmlElements = {
            audio: this.incomingAudioRef.nativeElement,
            video: this.incomingVideoRef.nativeElement,
            videoScreenShare: this.incomingVideoScreenShareRef.nativeElement
          };
        }
      }, {
        key: "sendSocketMessage",
        value: function sendSocketMessage(webSocket, toUserId, message) {
          webSocket.send(JSON.stringify(Object.assign({}, message, {
            user: this.connectedUser,
            toUserId: toUserId
          })));
        }
      }, {
        key: "removeUserFromStream",
        value: function removeUserFromStream(userId) {
          console.log("removing user from stream");

          if (this.peerConnections[userId]) {
            this.peerConnections[userId].close();
            delete this.peerConnections[userId];
          }
        }
      }, {
        key: "displayMyStream",
        value: function displayMyStream() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.localStream) {
                      this.localStream.getTracks().forEach(function (track) {
                        return track.stop();
                      });
                    }

                    _context2.prev = 1;
                    _context2.next = 4;
                    return navigator.mediaDevices.getUserMedia({
                      audio: true,
                      video: true
                    });

                  case 4:
                    this.localStream = _context2.sent;
                    this.currentUserHtmlElements.video.srcObject = this.localStream;
                    this.currentUserHtmlElements.video.muted = true;
                    return _context2.abrupt("return", Promise.resolve());

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](1);
                    return _context2.abrupt("return", this.logError(_context2.t0, "error displaying stream"));

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 10]]);
          }));
        }
      }, {
        key: "logError",
        value: function logError(err, message) {
          console.log(err.toString(), err, message);
          return Promise.reject({
            error: err.toString(),
            message: message
          });
        }
      }]);

      return ModeratorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", {
      "static": false
    })], ModeratorComponent.prototype, "videoRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingVideo", {
      "static": false
    })], ModeratorComponent.prototype, "incomingVideoRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingAudio", {
      "static": false
    })], ModeratorComponent.prototype, "incomingAudioRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingVideoScreenShare", {
      "static": false
    })], ModeratorComponent.prototype, "incomingVideoScreenShareRef", void 0);
    ModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./moderator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moderator/moderator.component.html"))["default"]
    })], ModeratorComponent);
    /***/
  },

  /***/
  "./src/app/components/observer/observer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/observer/observer.component.ts ***!
    \***********************************************************/

  /*! exports provided: ObserverComponent */

  /***/
  function srcAppComponentsObserverObserverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserverComponent", function () {
      return ObserverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/User */
    "./src/app/models/User.ts");

    var ObserverComponent = /*#__PURE__*/function () {
      function ObserverComponent() {
        _classCallCheck(this, ObserverComponent);

        this.moderatorId = "";
        this.clientId = "";
        /**
         * Google server as our stun server
         */

        this.configuration = {
          iceServers: [{
            urls: ["stun:stun.l.google.com:19302"]
          }],
          // @ts-ignore
          sdpSemantics: "plan-b"
        };
      }

      _createClass(ObserverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          var user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_3__["User"]("observer");
          var socket = new WebSocket("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].webSocketUrl, "?userId=").concat(user.id, "&userType=").concat(user.type));
          this.client = {
            socket: socket,
            user: user
          };

          socket.onopen = function (event) {
            console.log("Connection Established", event);

            _this8.sendPing(socket);
          };

          socket.onmessage = function (event) {
            var data = JSON.parse(event.data);
            console.log("Message received", data); // Someone joined the stream

            if (data.type === "UserJoined") {
              // Someone joined the stream
              var userJoinedSocketMessage = data;

              _this8.onUserJoined(userJoinedSocketMessage.allUsers, userJoinedSocketMessage.user.id);
            } else if (data.type === "UserLeft") {
              // Someone left the stream
              _this8.removeUserFromStream(data.user.id);
            } else {
              _this8.gotMessageFromServer(socket, data);
            }
          };

          socket.onclose = function (event) {
            console.log("Connection Closed");

            _this8.onConnectionClosed();
          };

          window.onunload = window.onbeforeunload = function () {
            socket.close();
          };
        }
      }, {
        key: "onConnectionClosed",
        value: function onConnectionClosed() {
          // Close Camera & Audio peer connection
          if (this.peerConnectionModerator) {
            this.peerConnectionModerator.close();
            delete this.peerConnectionModerator;
            this.moderatorHtmlElements.video.srcObject = null;
          }

          if (this.peerConnectionClient) {
            this.peerConnectionClient.close();
            delete this.peerConnectionClient;
            this.clientHtmlElements.video.srcObject = null;
            this.clientHtmlElements.videoScreenShare.srcObject = null;
          } // Clear associated html elements

        }
      }, {
        key: "removeUserFromStream",
        value: function removeUserFromStream(userId) {
          console.log("removing user from stream");

          if (userId === this.moderatorId && this.peerConnectionModerator) {
            this.peerConnectionModerator.close();
            delete this.peerConnectionModerator;
          }

          if (userId === this.clientId && this.peerConnectionClient) {
            this.peerConnectionClient.close();
            delete this.peerConnectionClient;
          }
        }
      }, {
        key: "receiveOffer",
        value: function receiveOffer(data) {
          var _this9 = this;

          var payload = data.payload;

          if (data.user.type === "moderator") {
            console.log("receiveOffer moderator");
            this.peerConnectionModerator.setRemoteDescription(payload).then(function () {
              return _this9.peerConnectionModerator.createAnswer();
            }).then(function (sdp) {
              return _this9.peerConnectionModerator.setLocalDescription(sdp);
            }).then(function () {
              console.log("receiveOffer sendSocketMessage moderator");

              _this9.sendSocketMessage(data.user.id, {
                payload: _this9.peerConnectionModerator.localDescription,
                streamType: data.streamType,
                type: data.type
              });
            });
          } else if (data.user.type === "client") {
            // Client
            console.log("receiveOffer client");
            this.peerConnectionClient.setRemoteDescription(payload).then(function () {
              return _this9.peerConnectionClient.createAnswer();
            }).then(function (sdp) {
              return _this9.peerConnectionClient.setLocalDescription(sdp);
            }).then(function () {
              console.log("receiveOffer sendSocketMessage moderator");

              _this9.sendSocketMessage(data.user.id, {
                payload: _this9.peerConnectionClient.localDescription,
                streamType: data.streamType,
                type: data.type
              });
            });
          }
        }
      }, {
        key: "sendPing",
        value: function sendPing(webSocket) {
          setTimeout(function () {
            webSocket.send(JSON.stringify({
              type: "PingObs"
            }));
          }, 10000); // in milliseconds
        }
      }, {
        key: "gotMessageFromServer",
        value: function gotMessageFromServer(webSocket, data) {
          if (data.type === "Pong") {
            this.sendPing(webSocket);
            return;
          }

          if (this.client.user.id === data.user.id) return;

          switch (data.payload.type) {
            case "offer":
              this.receiveOffer(data);
              break;

            case undefined:
              if (data.user.type === "moderator") {
                console.log("icecandidate moderator");
                this.peerConnectionModerator.addIceCandidate(new RTCIceCandidate(data.payload));
              } else if (data.user.type === "client") {
                console.log("icecandidate client");
                this.peerConnectionClient.addIceCandidate(new RTCIceCandidate(data.payload));
              }

              break;
          }
        }
      }, {
        key: "onUserJoined",
        value: function onUserJoined(allUsers, fromUserId) {
          var _this10 = this;

          var moderator = allUsers.find(function (u) {
            return u.type === "moderator";
          });

          if (moderator) {
            this.moderatorId = moderator.id;

            if (!this.peerConnectionModerator) {
              console.log("create peerconnection moderator");
              this.peerConnectionModerator = new RTCPeerConnection(this.configuration);
              console.log("onicecandidate moderator");

              this.peerConnectionModerator.onicecandidate = function (iceEvent) {
                console.log("received ICE candidate");

                if (iceEvent.candidate) {
                  _this10.sendSocketMessage(moderator.id, {
                    payload: iceEvent.candidate,
                    streamType: "video",
                    type: "IceCandidate"
                  });
                }
              };

              console.log("ontrack moderator");

              this.peerConnectionModerator.ontrack = function (event) {
                console.log("streaming moderator's video here");

                if (event.streams && event.streams[0]) {
                  var stream = event.streams[0];
                  _this10.moderatorHtmlElements.video.srcObject = stream;
                } else {
                  console.log("nothing to stream");
                }
              };
            }
          }

          var client = allUsers.find(function (u) {
            return u.type === "client";
          });

          if (client) {
            this.clientId = client.id;

            if (!this.peerConnectionClient) {
              this.peerConnectionClient = new RTCPeerConnection(this.configuration);

              this.peerConnectionClient.onicecandidate = function (iceEvent) {
                console.log("Sending ice candidate");

                if (iceEvent.candidate) {
                  _this10.sendSocketMessage(client.id, {
                    payload: iceEvent.candidate,
                    streamType: "video",
                    type: "IceCandidate"
                  });
                }
              };

              var counter = 0;

              this.peerConnectionClient.ontrack = function (event) {
                console.log("streaming client's video here");
                var stream;

                if (event.streams && event.streams[0]) {
                  stream = event.streams[0];
                } else {
                  console.log("nothing to stream");
                  return;
                }

                if (stream.getAudioTracks().length) {
                  _this10.clientHtmlElements.audio.srcObject = stream;

                  if (stream.getVideoTracks().length) {
                    _this10.clientHtmlElements.video.srcObject = stream;
                    counter = 1;
                  }
                } else {
                  if (++counter == 2) {
                    _this10.clientHtmlElements.videoScreenShare.srcObject = stream;
                    counter = 0;
                  } else {
                    _this10.clientHtmlElements.video.srcObject = stream;
                  }
                }
              };
            }
          }
        }
      }, {
        key: "sendSocketMessage",
        value: function sendSocketMessage(toUserId, message) {
          this.client.socket.send(JSON.stringify(Object.assign({}, message, {
            user: this.client.user,
            toUserId: toUserId
          })));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.moderatorHtmlElements = {
            video: this.incomingModeratorVideoRef.nativeElement
          };
          this.clientHtmlElements = {
            audio: this.incomingClientAudioRef.nativeElement,
            video: this.incomingClientVideoRef.nativeElement,
            videoScreenShare: this.incomingClientVideoScreenShareRef.nativeElement
          };
        }
      }, {
        key: "logError",
        value: function logError(err) {
          console.log(err.toString(), err);
        }
      }]);

      return ObserverComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingModeratorVideo", {
      "static": false
    })], ObserverComponent.prototype, "incomingModeratorVideoRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingClientAudio", {
      "static": false
    })], ObserverComponent.prototype, "incomingClientAudioRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingClientVideo", {
      "static": false
    })], ObserverComponent.prototype, "incomingClientVideoRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("incomingClientVideoScreenShare", {
      "static": false
    })], ObserverComponent.prototype, "incomingClientVideoScreenShareRef", void 0);
    ObserverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./observer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/observer/observer.component.html"))["default"]
    })], ObserverComponent);
    /***/
  },

  /***/
  "./src/app/models/User.ts":
  /*!********************************!*\
    !*** ./src/app/models/User.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var User = function User(type) {
      _classCallCheck(this, User);

      this.type = type;
      this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    };
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/users.json */
    "./src/assets/users.json");

    var src_assets_users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! src/assets/users.json */
    "./src/assets/users.json", 1);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/User */
    "./src/app/models/User.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);
      }

      _createClass(UserService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          var authenticatedUser = src_assets_users_json__WEBPACK_IMPORTED_MODULE_2__.find(function (u) {
            return u.username === username && u.password === password;
          });
          var result;

          if (authenticatedUser) {
            var type = "observer";

            if (authenticatedUser.type === "CLIENT") {
              type = "client";
            } else if (authenticatedUser.type === "MODERATOR") {
              type = "moderator";
            }

            localStorage.setItem("PCKSC:user", JSON.stringify(authenticatedUser));
            result = new _models_User__WEBPACK_IMPORTED_MODULE_4__["User"](type);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/assets/users.json":
  /*!*******************************!*\
    !*** ./src/assets/users.json ***!
    \*******************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, default */

  /***/
  function srcAssetsUsersJson(module) {
    module.exports = JSON.parse("[{\"username\":\"moderateur\",\"password\":\"123\",\"type\":\"MODERATOR\"},{\"username\":\"client\",\"password\":\"123\",\"type\":\"CLIENT\"},{\"username\":\"user1\",\"password\":\"123\",\"type\":\"OBSERVER\"},{\"username\":\"user2\",\"password\":\"123\",\"type\":\"OBSERVER\"},{\"username\":\"user3\",\"password\":\"123\",\"type\":\"OBSERVER\"},{\"username\":\"user4\",\"password\":\"123\",\"type\":\"OBSERVER\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      webSocketUrl: "ws://localhost:1234"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mohameddennoun/Downloads/pckscreencast-develop/pckscreencast/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
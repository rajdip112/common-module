import re from "react";
import lr from "react-dom";
var ee = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function fr() {
  if (Ae)
    return z;
  Ae = 1;
  var l = re, y = Symbol.for("react.element"), E = Symbol.for("react.fragment"), N = Object.prototype.hasOwnProperty, D = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(S, f, O) {
    var L, d = {}, p = null, P = null;
    O !== void 0 && (p = "" + O), f.key !== void 0 && (p = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (L in f)
      N.call(f, L) && !A.hasOwnProperty(L) && (d[L] = f[L]);
    if (S && S.defaultProps)
      for (L in f = S.defaultProps, f)
        d[L] === void 0 && (d[L] = f[L]);
    return { $$typeof: y, type: S, key: p, ref: P, props: d, _owner: D.current };
  }
  return z.Fragment = E, z.jsx = R, z.jsxs = R, z;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Mr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var l = re, y = Symbol.for("react.element"), E = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), S = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), te = Symbol.iterator, xe = "@@iterator";
    function he(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var x = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        me("error", e, t);
      }
    }
    function me(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var o = t.map(function(i) {
          return String(i);
        });
        o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o);
      }
    }
    var Re = !1, _e = !1, be = !1, ze = !1, we = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === N || e === A || we || e === D || e === O || e === L || ze || e === P || Re || _e || be || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === d || e.$$typeof === R || e.$$typeof === S || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function ke(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case N:
          return "Fragment";
        case E:
          return "Portal";
        case A:
          return "Profiler";
        case D:
          return "StrictMode";
        case O:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return ae(r) + ".Consumer";
          case R:
            var t = e;
            return ae(t._context) + ".Provider";
          case f:
            return ke(e, e.render, "ForwardRef");
          case d:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case p: {
            var u = e, o = u._payload, i = u._init;
            try {
              return T(i(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, _ = 0, ie, ue, oe, se, ce, le, fe;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function Pe() {
      {
        if (_ === 0) {
          ie = console.log, ue = console.info, oe = console.warn, se = console.error, ce = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        _++;
      }
    }
    function Ue() {
      {
        if (_--, _ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ie
            }),
            info: C({}, e, {
              value: ue
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: se
            }),
            group: C({}, e, {
              value: ce
            }),
            groupCollapsed: C({}, e, {
              value: le
            }),
            groupEnd: C({}, e, {
              value: fe
            })
          });
        }
        _ < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = x.ReactCurrentDispatcher, G;
    function U(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, Q;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Qe();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = B.current, B.current = null, Pe();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), g = n.stack.split(`
`), s = a.length - 1, c = g.length - 1; s >= 1 && c >= 0 && a[s] !== g[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (a[s] !== g[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || a[s] !== g[c]) {
                    var j = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, j), j;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        H = !1, B.current = o, Ue(), Error.prepareStackTrace = u;
      }
      var m = e ? e.displayName || e.name : "", De = m ? U(m) : "";
      return typeof e == "function" && Q.set(e, De), De;
    }
    function Fe(e, r, t) {
      return ge(e, !1);
    }
    function $e(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function F(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, $e(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case O:
          return U("Suspense");
        case L:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Fe(e.render);
          case d:
            return F(e.type, r, t);
          case p: {
            var n = e, u = n._payload, o = n._init;
            try {
              return F(o(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, Le = {}, je = x.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = F(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    function We(e, r, t, n, u) {
      {
        var o = Function.call.bind($);
        for (var i in e)
          if (o(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (W(u), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), W(null)), a instanceof Error && !(a.message in Le) && (Le[a.message] = !0, W(u), M("Failed %s type: %s", t, a.message), W(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function de(e) {
      if (Ge(e))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ye(e);
    }
    var b = x.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, ve, Z;
    Z = {};
    function qe(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && b.current && r && b.current.stateNode !== r) {
        var t = T(b.current.type);
        Z[t] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(b.current.type), e.ref), Z[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          Te || (Te = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ve || (ve = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, u, o, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: o
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, u) {
      {
        var o, i = {}, a = null, g = null;
        t !== void 0 && (de(t), a = "" + t), Ze(r) && (de(r.key), a = "" + r.key), qe(r) && (g = r.ref, Je(r, u));
        for (o in r)
          $.call(r, o) && !He.hasOwnProperty(o) && (i[o] = r[o]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (o in s)
            i[o] === void 0 && (i[o] = s[o]);
        }
        if (a || g) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, c), g && Ke(i, c);
        }
        return er(e, a, g, u, n, b.current, i);
      }
    }
    var J = x.ReactCurrentOwner, Ne = x.ReactDebugCurrentFrame;
    function h(e) {
      if (e) {
        var r = e._owner, t = F(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(t);
      } else
        Ne.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Ie() {
      {
        if (J.current) {
          var e = T(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = Ie();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + T(e._owner.type) + "."), h(e), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), h(null);
      }
    }
    function pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Se(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = he(e);
          if (typeof u == "function" && u !== e.entries)
            for (var o = u.call(e), i; !(i = o.next()).done; )
              K(i.value) && Se(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          We(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var u = T(r);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            h(e), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), h(null);
            break;
          }
        }
        e.ref !== null && (h(e), M("Invalid attribute `ref` supplied to `React.Fragment`."), h(null));
      }
    }
    function Ce(e, r, t, n, u, o) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr(u);
          g ? a += g : a += Ie();
          var s;
          e === null ? s = "null" : q(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var c = rr(e, r, t, u, o);
        if (c == null)
          return c;
        if (i) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (q(j)) {
                for (var m = 0; m < j.length; m++)
                  pe(j[m], e);
                Object.freeze && Object.freeze(j);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pe(j, e);
        }
        return e === N ? ir(c) : ar(c), c;
      }
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function or(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var sr = or, cr = ur;
    w.Fragment = N, w.jsx = sr, w.jsxs = cr;
  }()), w;
}
process.env.NODE_ENV === "production" ? ee.exports = fr() : ee.exports = Mr();
var I = ee.exports, k = {}, Y = lr;
if (process.env.NODE_ENV === "production")
  k.createRoot = Y.createRoot, k.hydrateRoot = Y.hydrateRoot;
else {
  var V = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k.createRoot = function(l, y) {
    V.usingClientEntryPoint = !0;
    try {
      return Y.createRoot(l, y);
    } finally {
      V.usingClientEntryPoint = !1;
    }
  }, k.hydrateRoot = function(l, y, E) {
    V.usingClientEntryPoint = !0;
    try {
      return Y.hydrateRoot(l, y, E);
    } finally {
      V.usingClientEntryPoint = !1;
    }
  };
}
const gr = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+PGcgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTY2Ni4zIDI5Ni41YzAtMzIuNS00MC43LTYzLjMtMTAzLjEtODIuNCAxNC40LTYzLjYgOC0xMTQuMi0yMC4yLTEzMC40LTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuM2M0LjYgMCA4LjMuOSAxMS40IDIuNiAxMy42IDcuOCAxOS41IDM3LjUgMTQuOSA3NS43LTEuMSA5LjQtMi45IDE5LjMtNS4xIDI5LjQtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOS0xMy41LTE4LjUtMjcuNS0zNS4zLTQxLjYtNTAgMzIuNi0zMC4zIDYzLjItNDYuOSA4NC00Ni45Vjc4Yy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNi0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vjc4LjVjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXpNNDIxLjIgNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0IDQuNyA4IDkuNSAxNS44IDE0LjQgMjMuNHpNNDIwLjcgMTYzYzkuMyA5LjYgMTguNiAyMC4zIDI3LjggMzItOS0uNC0xOC4yLS43LTI3LjUtLjctOS40IDAtMTguNy4yLTI3LjguNyA5LTExLjcgMTguMy0yMi40IDI3LjUtMzJ6bS03NCA1OC45Yy00LjkgNy43LTkuOCAxNS42LTE0LjQgMjMuNy00LjYgOC04LjkgMTYtMTMgMjQtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjggMTMuMS0zLjEgMjYuOS01LjggNDEuMi03Ljl6bS05MC41IDEyNS4yYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0zMTAgNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnpNMzIwLjggNzguNHoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+PC9nPjwvc3ZnPg==";
function Lr() {
  return /* @__PURE__ */ I.jsx("div", { className: "App", children: /* @__PURE__ */ I.jsxs("header", { className: "App-header", children: [
    /* @__PURE__ */ I.jsx("img", { src: gr, className: "App-logo", alt: "logo" }),
    /* @__PURE__ */ I.jsxs("p", { children: [
      "Edit ",
      /* @__PURE__ */ I.jsx("code", { children: "src/App.tsx" }),
      " and save to reload."
    ] }),
    /* @__PURE__ */ I.jsx(
      "a",
      {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      }
    )
  ] }) });
}
const jr = (l) => {
  l && l instanceof Function && import("./web-vitals-f3c89987.js").then(({ getCLS: y, getFID: E, getFCP: N, getLCP: D, getTTFB: A }) => {
    y(l), E(l), N(l), D(l), A(l);
  });
}, yr = k.createRoot(
  document.getElementById("root")
);
yr.render(
  /* @__PURE__ */ I.jsx(re.StrictMode, { children: /* @__PURE__ */ I.jsx(Lr, {}) })
);
jr();

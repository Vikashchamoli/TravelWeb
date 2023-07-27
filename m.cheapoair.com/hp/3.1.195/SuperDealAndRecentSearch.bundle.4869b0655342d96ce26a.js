/*! For license information please see SuperDealAndRecentSearch.bundle.4869b0655342d96ce26a.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        "1rOq": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("q1tI"),
                o = r.n(n),
                a = r("Vg22"),
                i = r("CnBM"),
                c = r.n(i),
                l = r("sEqU");

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a, i, c = [],
                            l = !0,
                            s = !1;
                        try {
                            if (a = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                        } catch (u) {
                            s = !0, o = u
                        } finally {
                            try {
                                if (!l && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (s) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var p = function() {
                    return o.a.createElement("span", {
                        className: "sr-only"
                    })
                },
                f = c()({
                    loader: function() {
                        return r.e(34).then(r.bind(null, "M+R8"))
                    },
                    modules: ["sharedComponents/upcomingTrip"],
                    webpack: function() {
                        return ["M+R8"]
                    },
                    loading: p
                }),
                d = c()({
                    loader: function() {
                        return Promise.resolve().then(r.bind(null, "IMsR"))
                    },
                    modules: ["sharedComponents/rsDeals/SuperDealAndRecentSearch.mobile"],
                    webpack: function() {
                        return ["IMsR"]
                    },
                    loading: p
                });
            t.default = function(e) {
                var t = e.currTab,
                    r = Object(a.useSelector)((function(e) {
                        return e.userDetails
                    })),
                    i = s(Object(n.useState)(null), 2),
                    c = i[0],
                    u = i[1],
                    p = s(Object(n.useState)(!1), 2),
                    m = p[0],
                    h = p[1];
                return Object(n.useEffect)((function() {
                    !window.appSettings || 92 !== window.appSettings.portalId && 95 !== window.appSettings.portalId || ((r ? r.userName : null) ? Object(l.b)().then((function(e) {
                        e && (e.flight || e.hotel || e.car) && (u(e), h(!0))
                    })) : h(!1))
                }), [null === r || void 0 === r ? void 0 : r.userName]), o.a.createElement(n.Fragment, null, m && c && o.a.createElement(f, {
                    tripsData: c
                }), !m && o.a.createElement(d, {
                    currTab: t
                }))
            }
        },
        Hef7: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("17x9"),
                i = r.n(a),
                c = r("Vg22");

            function l(e) {
                return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }

            function d(e, t) {
                return !t || "object" !== l(t) && "function" !== typeof t ? m(e) : t
            }

            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(c, e);
                var t, r, a, i = f(c);

                function c() {
                    var e;
                    s(this, c);
                    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                    return y(m(e = i.call.apply(i, [this].concat(r))), "renderPrice", (function() {
                        for (var t = e.props, r = t.amount, a = t.ratio, i = t.isSuperScript, c = t.isWholePrice, l = (a * parseFloat(r)).toFixed(2), s = parseInt(l, 10).toString(), u = s.substr(0, s.length % 3), p = s.length % 3; p <= s.length; p += 3) {
                            var f = s.substr(p, 3);
                            u += f ? (u ? "," : "") + f : ""
                        }
                        return i ? o.a.createElement(n.Fragment, null, u, o.a.createElement("sup", {
                            className: "f10"
                        }, ".", l.substr(l.indexOf(".") + 1), " ")) : c ? Math.round(a * parseInt(r, 10)) : l
                    })), e
                }
                return t = c, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.amountClass,
                            r = e.symbolClass,
                            a = e.code,
                            i = e.CurrencyCodeClass,
                            c = this.props.cardCurrencySymbol || this.props.symbol;
                        return "$" === c && "USD" !== a ? o.a.createElement(n.Fragment, null, o.a.createElement("span", {
                            className: t
                        }, this.renderPrice()), o.a.createElement("span", {
                            className: "".concat(r, " ").concat(i || "")
                        }, a)) : o.a.createElement(n.Fragment, null, o.a.createElement("span", {
                            className: r
                        }, c), o.a.createElement("span", {
                            className: t
                        }, this.renderPrice()))
                    }
                }]) && u(t.prototype, r), a && u(t, a), c
            }(o.a.Component);
            v.propTypes = {
                amount: i.a.number.isRequired,
                amountClass: i.a.string,
                isSuperScript: i.a.bool,
                isWholePrice: i.a.bool,
                symbolClass: i.a.string
            };
            t.a = Object(c.connect)((function(e) {
                var t = e.currencyDetails.selectedCurrency;
                return {
                    symbol: t.symbol,
                    ratio: t.ratio,
                    code: t.code
                }
            }), null)(v)
        },
        IMsR: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("q1tI"),
                o = r.n(n),
                a = r("CnBM"),
                i = r.n(a),
                c = r("Vg22"),
                l = r("uBG/"),
                s = r("9xDY"),
                u = r("cm3Y"),
                p = r("z0Ga"),
                f = r("YAlb"),
                d = r("qx9n");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h() {
                h = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    i = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function l(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (P) {
                    l = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function s(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        i = Object.create(a.prototype),
                        c = new D(o || []);
                    return n(i, "_invoke", {
                        value: L(e, r, c)
                    }), i
                }

                function u(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function f() {}

                function d() {}

                function y() {}
                var v = {};
                l(v, a, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(N([])));
                w && w !== t && r.call(w, a) && (v = w);
                var b = y.prototype = f.prototype = Object.create(v);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function S(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function i() {
                                return new t((function(o, i) {
                                    ! function n(o, a, i, c) {
                                        var l = u(e[o], e, a);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == m(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, c)
                                            }), (function(e) {
                                                n("throw", e, i, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, i(s)
                                            }), (function(e) {
                                                return n("throw", e, i, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(n, a, o, i)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }

                function L(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw a;
                            return O()
                        }
                        for (r.method = o, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var c = _(i, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var l = u(e, t, r);
                            if ("normal" === l.type) {
                                if (n = r.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (n = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function _(e, t) {
                    var r = t.method,
                        n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), p;
                    var o = u(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, p;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function D(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = y, n(b, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(S.prototype), l(S.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = S, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new S(s(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, E(b), l(b, c, "Generator"), l(b, a, (function() {
                    return this
                })), l(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function y(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value
                } catch (s) {
                    return void r(s)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            y(a, n, o, i, c, "next", e)
                        }

                        function c(e) {
                            y(a, n, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var g = function() {
                    var e = v(h().mark((function e(t) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("native" !== window.platform) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3, window.readCookie(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    return e.next = 8, d.a.readCookie(t);
                                case 8:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = r("vVlW"),
                b = r("oONF");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S() {
                S = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    i = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function l(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (P) {
                    l = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function s(e, t, r, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        i = Object.create(a.prototype),
                        c = new D(o || []);
                    return n(i, "_invoke", {
                        value: L(e, r, c)
                    }), i
                }

                function u(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                e.wrap = s;
                var p = {};

                function f() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, a, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(N([])));
                v && v !== t && r.call(v, a) && (h = v);
                var g = m.prototype = f.prototype = Object.create(h);

                function w(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, a) {
                            function i() {
                                return new t((function(o, i) {
                                    ! function n(o, a, i, c) {
                                        var l = u(e[o], e, a);
                                        if ("throw" !== l.type) {
                                            var s = l.arg,
                                                p = s.value;
                                            return p && "object" == E(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, c)
                                            }), (function(e) {
                                                n("throw", e, i, c)
                                            })) : t.resolve(p).then((function(e) {
                                                s.value = e, i(s)
                                            }), (function(e) {
                                                return n("throw", e, i, c)
                                            }))
                                        }
                                        c(l.arg)
                                    }(n, a, o, i)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }

                function L(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw a;
                            return O()
                        }
                        for (r.method = o, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var c = _(i, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var l = u(e, t, r);
                            if ("normal" === l.type) {
                                if (n = r.done ? "completed" : "suspendedYield", l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (n = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function _(e, t) {
                    var r = t.method,
                        n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), p;
                    var o = u(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, p;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function D(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = m, n(g, "constructor", {
                    value: m,
                    configurable: !0
                }), n(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, w(b.prototype), l(b.prototype, i, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new b(s(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, w(g), l(g, c, "Generator"), l(g, a, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function L(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value
                } catch (s) {
                    return void r(s)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }
            var _ = function() {
                    var e, t = (e = S().mark((function e() {
                        var t, r, n, o, a;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, g("FPTraveller");
                                case 2:
                                    return t = e.sent, r = t ? t.split("&") : "", e.next = 6, g("uid");
                                case 6:
                                    return e.t0 = e.sent, n = "?uid=" + e.t0, o = Object(w.e)(), (a = o.affiliateId) && (n += "&AffiliateCode=".concat(a)), r.length > 1 && (n += "&PersonGuid=".concat(r[1].split("=")[1])), window.cockpitSetting.ApplicationSettings.SlotIdPersonalizedDeal && (n += "&slotId=" + window.cockpitSetting.ApplicationSettings.SlotIdPersonalizedDeal), e.abrupt("return", new Promise((function(e, t) {
                                        Object(f.a)({
                                            name: "personalizedDeals",
                                            url: n
                                        }).then((function(r) {
                                            var o = r && r.data && r.data.flightDeals ? r.data.flightDeals : null;
                                            if (o && o.length > 1) {
                                                var a = {
                                                    Category: "superdeals",
                                                    Action: "impressions",
                                                    Values: {
                                                        DealType: "superdeals",
                                                        DealParameter: {
                                                            url: n
                                                        },
                                                        Status: "success",
                                                        Deals: r.data
                                                    }
                                                };
                                                "native" === window.platform ? Object(b.a)(a) : window.AnalyticsServiceLogEvent(a), e({
                                                    deals: o,
                                                    dealLastFoundAt: r.data.dealLastFoundAt,
                                                    userIdentifier: r.data.userIdentifier
                                                })
                                            } else {
                                                var i = {
                                                    Category: "superdeals",
                                                    Action: "impressions",
                                                    Values: {
                                                        DealType: "superdeals",
                                                        DealParameter: {
                                                            url: n
                                                        },
                                                        Status: "no deal found",
                                                        Deals: r.data
                                                    }
                                                };
                                                "native" === window.platform ? Object(b.a)(i) : window.AnalyticsServiceLogEvent(i), t("".concat(o ? o.length : 0, " deal found"))
                                            }
                                        })).catch((function(e) {
                                            t("api failure")
                                        }))
                                    })));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(t, r);

                            function i(e) {
                                L(a, n, o, i, c, "next", e)
                            }

                            function c(e) {
                                L(a, n, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                x = r("C5fq"),
                k = r("VVTN"),
                D = r("9/gw"),
                N = r("fx5k"),
                O = r("Hef7"),
                P = function(e) {
                    var t = e.deal,
                        r = e.dealClicked,
                        a = e.index,
                        i = e.selectedCurrency,
                        c = e.isLoggedIn,
                        l = e.hideFirstSuperDeal,
                        u = e.superDealUI,
                        p = "Green" === t.superDealInfo.indicatorType ? "deal-rs__green" : "Yellow" === t.superDealInfo.indicatorType ? "deal-rs__yellow" : "deal-rs__red",
                        f = "ROUNDTRIP" === t.tripType ? "Round Trip" : "One way",
                        d = window.cockpitSetting.ApplicationSettings.monthDate,
                        m = Object(w.d)(t.superDealInfo.rangeLower, i),
                        h = "mobile" === window.platform ? window.iLn.HomeResources || {} : window.iLn.Signups || {},
                        y = "mobile" === window.platform ? window.iLn.WidgetResources || {} : window.iLn.Widget || {},
                        v = i && i.code ? i.code.toLowerCase() : "",
                        g = "https://c.fareportal.com/gcms/portals/2/images/destinations/" + t.destCityCode + "-r2x.jpg",
                        b = "Similar trip cost to " + t.destCityName;
                    return !c && l && 0 === a ? null : o.a.createElement("div", {
                        key: t.uniqueResponseId + a,
                        className: "rsdeals__item col-md-4",
                        onClick: function() {
                            return r(t)
                        }
                    }, o.a.createElement("div", {
                        className: u && "rs-deals-item-new"
                    }, u && o.a.createElement("img", {
                        src: g,
                        alt: g ? y.dealsAltImageMsg + t.destCityName + y.city : "",
                        onError: function(e) {
                            var t = e.currentTarget;
                            t.onerror = null, t.src = "https://c.fareportal.com/gcms/portals/2/images/destinations/adventure-travel-r2x.jpg", t.alt = y.dealsAltImageMsgDefault
                        },
                        className: "rs-image"
                    }), o.a.createElement("div", {
                        className: "deal"
                    }, o.a.createElement("section", {
                        className: "deal-rs__info deal__info--bottom"
                    }, o.a.createElement(s.a, {
                        iconName: "icon_tag_filled",
                        viewBox: "0 0 1024 1024",
                        iconSize: "svg-1-25",
                        iconFill: "fireIcon"
                    }), o.a.createElement("div", {
                        className: "deal-rs__price col-6 col-sm-4 p-0 " + p
                    }, o.a.createElement("span", {
                        className: "deal__price-now " + (m > 6 ? " long_currency " : " ") + "currency--" + v
                    }, o.a.createElement(O.a, {
                        amount: t.totalFare,
                        isSuperScript: !0,
                        isWholePrice: !1
                    }), " "), o.a.createElement("sup", {
                        className: m > 7 ? "currency-sup_long" : "currency-sup"
                    }, "*"), o.a.createElement("div", {
                        className: "deal__type"
                    }, f)), o.a.createElement("div", {
                        className: "deal-rs__destination"
                    }, o.a.createElement("div", {
                        className: "deal-rs__destination-city"
                    }, o.a.createElement("span", {
                        className: "dstCityName"
                    }, " ", u ? t.destCityName : "", " "), o.a.createElement("div", {
                        title: t.originCityName,
                        className: "d-inline-block"
                    }, t.originCityCode), o.a.createElement(s.a, {
                        iconName: "ROUNDTRIP" === t.tripType ? "sv_arwrt" : "sv_arwow",
                        iconSize: "svg-1-25",
                        iconFill: "ROUNDTRIP" === t.tripType ? "text-primary" : "text-primary deals_oneway"
                    }), o.a.createElement("span", {
                        className: "ROUNDTRIP" === t.tripType ? "icon-mweb icon--ondsearch" : "icon-mweb icon--onewaysearch "
                    }), o.a.createElement("div", {
                        title: t.destCityName,
                        className: "d-inline-block"
                    }, " ", t.destCityCode)), o.a.createElement("div", {
                        className: "deal__date col-6 col-sm-8 text-left p-0"
                    }, new Date(t.fromDate).format(d), "ROUNDTRIP" === t.tripType && o.a.createElement(n.Fragment, null, " – " + new Date(t.toDate).format(d))), o.a.createElement("a", {
                        "aria-label": "",
                        className: "deal-rs__btn",
                        href: "javascript:"
                    }, o.a.createElement("i", {
                        className: "deal-rs__tag icon"
                    }, o.a.createElement(s.a, {
                        iconName: "icon_triangle-r",
                        iconSize: "svg-2-2",
                        iconFill: "text-gray-600",
                        viewBox: "0 0 512  512"
                    })))), o.a.createElement("div", {
                        className: "deals__range"
                    }, o.a.createElement("div", {
                        className: "deals-arrow__green deals-rs__arrow"
                    }), o.a.createElement("div", {
                        className: "deals-rs__range deals-green"
                    }), o.a.createElement("div", {
                        className: "deals-rs__range deals-yellow"
                    }), o.a.createElement("div", {
                        className: "deals-rs__range deals-red"
                    })), o.a.createElement("div", {
                        className: "d-flex"
                    }, o.a.createElement("span", {
                        className: "deal-left-" + m.toString() + " deal__price-range deal-left"
                    }, o.a.createElement("span", {
                        className: "currBlock"
                    }, " ", o.a.createElement(O.a, {
                        amount: t.superDealInfo.rangeLower,
                        isSuperScript: !0,
                        isWholePrice: !1
                    }))), o.a.createElement("span", {
                        className: "deal__price-range"
                    }), o.a.createElement("span", {
                        className: "deal-right-" + m.toString() + " deal__price-range deal-right"
                    }, o.a.createElement("span", {
                        className: "currBlock"
                    }, o.a.createElement(O.a, {
                        amount: t.superDealInfo.rangeHigher,
                        isSuperScript: !0,
                        isWholePrice: !1
                    })))), o.a.createElement("span", {
                        className: "typical__price-range"
                    }, u ? o.a.createElement(n.Fragment, null, " ", b) : h.TypicalPriceRange, o.a.createElement("div", {
                        className: "d-inline-block",
                        onClick: function(e) {
                            e.stopPropagation()
                        }
                    }, "mobile" !== window.platform ? o.a.createElement(N.a, {
                        action: "click",
                        display: "bottom",
                        id: "deals-tooltip",
                        size: "mobile" === window.device || "tablet" === window.device ? "sm" : "md"
                    }, o.a.createElement("a", {
                        "aria-describedby": "deals-tooltip",
                        href: "javascript:",
                        className: "icon text-gray cursor-pointer deals-tooltip-cursor"
                    }, " ", o.a.createElement("span", {
                        className: "icon-mweb primary--color icon--info"
                    }), " ", o.a.createElement(s.a, {
                        viewBox: "0 0 1024 1024",
                        iconName: "icon_info_filled",
                        iconSize: "svg-0-9"
                    })), o.a.createElement("div", null, " ", h.TypicalPriceRangeTextOne + " " + window.cockpitSetting.ApplicationSettings.AppName + " " + h.TypicalPriceRangeTextTwo)) : o.a.createElement(k.a, {
                        display: "promocode-tooltip"
                    }, o.a.createElement("a", {
                        "aria-describedby": "deals-tooltip",
                        href: "javascript:",
                        className: "icon text-gray cursor-pointer deals-tooltip-cursor"
                    }, o.a.createElement("span", {
                        className: "icon-mweb primary--color icon--info"
                    }), o.a.createElement(s.a, {
                        viewBox: "0 0 1024 1024",
                        iconName: "icon_info_filled",
                        iconSize: "svg-0-9"
                    })), o.a.createElement("div", null, " ", h.TypicalPriceRangeTextOne + " " + window.cockpitSetting.ApplicationSettings.AppName + " " + h.TypicalPriceRangeTextTwo))))))))
                };

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, B(n.key), n)
                }
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function I(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return F(this, r)
                }
            }

            function F(e, t) {
                if (t && ("object" === T(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function R(e, t, r) {
                return (t = B(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function B(e) {
                var t = function(e, t) {
                    if ("object" !== T(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== T(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === T(t) ? t : String(t)
            }
            var G = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && j(e, t)
                    }(c, e);
                    var t, r, a, i = I(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), R(A(t = i.call(this, e)), "resize", (function() {
                            t.setState({
                                isDesktop: window.innerWidth > 1024
                            })
                        })), R(A(t), "dealClicked", (function(e) {
                            window.AnalyticsServiceLogEvent({
                                Category: "superdeals",
                                Action: "clicked",
                                Values: {
                                    Deal: e,
                                    DealType: "superdeals",
                                    userIdentifier: t.state.userIdentifier
                                }
                            }), l.a.TrackGACommonEvent("clicked", e.dealBasedOn, "superdeals");
                            var r = Object(x.a)(e);
                            window.location = window.cockpitSetting.ApplicationSettings.RemoteSearch + r
                        })), R(A(t), "getRef", (function() {
                            var e = "",
                                r = t.state.deals;
                            return r.length > 0 && r.map((function(t, r) {
                                var n = t.uniqueResponseId.replace("Ref:", ""); - 1 === e.indexOf(n) && ("mobile" === window.platform ? e += (0 === r ? "" : "|<br/>") + n : e += (0 === r ? "" : "|") + n)
                            })), e
                        })), R(A(t), "renderDeals", (function(e) {
                            var r = window.iLn.Signups || {},
                                a = window.FEATURES.isSignUPV2 || !1;
                            return o.a.createElement("div", {
                                className: "row"
                            }, o.a.createElement("div", {
                                className: t.props.superDealUI ? "rsDealsWrap rs-deals-redesign" : "rsDealsWrap"
                            }, !t.props.userDetails && t.state.hideFirstSuperDeal && t.state.isDesktop && o.a.createElement(n.Fragment, null, o.a.createElement("div", {
                                className: "rsdeals__item col-md-4 blurredDeal",
                                onClick: t.showLoginPopUp
                            }, o.a.createElement(s.a, {
                                iconName: "icon_tag_filled",
                                viewBox: "0 0 1024 1024",
                                iconSize: "svg-1-25",
                                iconFill: "fireIcon"
                            }), o.a.createElement(s.a, {
                                iconName: "lock_icon",
                                viewBox: "0 0 24 24",
                                iconSize: "svg-1-25",
                                iconFill: "lockIcon"
                            }), o.a.createElement("br", null), o.a.createElement("div", {
                                className: "blurredText"
                            }, o.a.createElement("span", null, "Sign Up"), " to unlock this offer")), t.state.showLoginPopUp && a ? o.a.createElement(u.a, {
                                pageCategory: "SM-HomePage",
                                pageComponent: "UserProfileBox3-SM-HomePage",
                                signUpSource: "Home.UserProfileBox3",
                                aiCategory: "superdealsignin",
                                closePopUpBox: t.closePopUP,
                                resources: r,
                                hideSuccessScreen: !0
                            }) : t.state.showLoginPopUp ? o.a.createElement(p.a, {
                                pageCategory: "SM-HomePage",
                                pageComponent: "UserProfileBox3-SM-HomePage",
                                signUpSource: "Home.UserProfileBox3",
                                aiCategory: "superdealsignin",
                                closePopUpBox: t.closePopUP,
                                resources: r,
                                hideSuccessScreen: !0
                            }) : ""), e.map((function(e, r) {
                                return o.a.createElement(n.Fragment, {
                                    key: r
                                }, o.a.createElement(P, {
                                    deal: e,
                                    dealClicked: t.dealClicked,
                                    index: r,
                                    selectedCurrency: t.props.selectedCurrency,
                                    isLoggedIn: t.props.userDetails,
                                    hideFirstSuperDeal: t.state.hideFirstSuperDeal && t.state.isDesktop,
                                    superDealUI: t.props.superDealUI
                                }))
                            }))))
                        })), R(A(t), "togglePopup", (function(e, r, n) {
                            r && r.includes("#newwindow") ? window.open(r.split("#")[0], n, "width=825,height=630,resizable=no,scrollbars=yes,toolbar=no,status=no,titlebar=no") : (e ? window.location.hash = "popup" : window.history.pushState(null, null, window.location.href.split("#")[0]), t.setState({
                                showPopup: e,
                                popupUrl: r,
                                popupTitle: n
                            }))
                        })), R(A(t), "showLoginPopUp", (function() {
                            window.AnalyticsServiceLogEvent({
                                Category: "superdeals",
                                Action: "first_deal_clicked"
                            }), document.addEventListener("click", t.handleOutsideClick, !1), document.body.classList && document.body.classList.add("signin_active"), t.setState({
                                showLoginPopUp: !0
                            })
                        })), R(A(t), "closePopUP", (function() {
                            document.removeEventListener("click", t.handleOutsideClick, !1), t.setState({
                                showLoginPopUp: !1
                            }), document.body.classList && document.body.classList.remove("signin_active")
                        })), R(A(t), "handleOutsideClick", (function(e) {
                            e.target.closest(".login-popup", !0) || document.body.contains(e.target) && t.state.showLoginPopUp && (document.removeEventListener("click", t.handleOutsideClick, !1), document.body.classList && document.body.classList.remove("signin_active"), t.setState({
                                showLoginPopUp: !1
                            }))
                        })), R(A(t), "exploreBtnClick", (function() {
                            window.AnalyticsServiceLogEvent({
                                Category: "superdeals",
                                Action: "explore_button_clicked"
                            }), window.open("/explore")
                        })), R(A(t), "seeMoreClick", (function() {
                            window.AnalyticsServiceLogEvent({
                                Category: "superdeals",
                                Action: "seemore_link_clicked"
                            }), document.getElementById("mapdeals").scrollIntoView(!0)
                        })), t.state = {
                            deals: [],
                            dealLastFoundAt: "",
                            userIdentifier: null,
                            showExploreBtn: !1,
                            showExploreLink: !1,
                            showLoader: !0
                        }, t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.state.deals.length > 0 && this.setState({
                                showLoader: !1
                            }), _().then((function(t) {
                                e.setState({
                                    deals: t.deals,
                                    dealLastFoundAt: t.dealLastFoundAt,
                                    userIdentifier: t.userIdentifier,
                                    showLoader: !1
                                }), window.AnalyticsServiceLogEvent({
                                    Category: "superdeals",
                                    Action: "loaded",
                                    Values: {
                                        Deals: t.deals,
                                        DealType: "superdeals",
                                        userIdentifier: e.state.userIdentifier
                                    }
                                })
                            })).catch((function(t) {
                                e.props.hideRsDeals && e.props.hideRsDeals(t), e.setState({
                                    showLoader: !1
                                })
                            })), window.addEventListener("resize", this.resize), this.resize(), Object(w.a)("hideFirstSuperDeal", "false", "0").then((function(t) {
                                !t || !0 !== t && "true" !== t || e.setState({
                                    hideFirstSuperDeal: !0
                                })
                            })), Object(w.a)("explorebtnsuperdeal", "false", "0").then((function(t) {
                                t && "explorebtn" === t && e.setState({
                                    showExploreBtn: !0
                                }), t && "exploreseemorelink" === t && e.setState({
                                    showExploreLink: !0
                                })
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.props.userDetails !== e.userDetails && this.props.userDetails && this.state.hideFirstSuperDeal && (document.removeEventListener("click", this.handleOutsideClick, !1), document.body.classList && document.body.classList.remove("signin_active"), this.setState({
                                showLoginPopUp: !1
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.resize)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if ("FLIGHTS" !== this.props.currTab) return null;
                            var t = this.state,
                                r = t.deals,
                                a = t.showExploreBtn,
                                i = t.showExploreLink,
                                c = t.showLoader;
                            if (c && this.props.superDealUI) return this.props.renderLoader();
                            var l = "rsdeals__block",
                                s = "";
                            r.map((function(t) {
                                var n = Object(w.d)(t.superDealInfo.rangeLower, e.props.selectedCurrency);
                                n > 5 && (s = " rsdeals-curr"), n > 5 && 2 === r.length && (s = " rsdeals-curr rsdeals-two")
                            })), (2 === r.length || window.innerWidth < 768 && "mobile" !== window.device) && (l = "rsdeals-two__block");
                            var u = "mobile" === window.platform ? window.iLn.HomeResources || {} : window.iLn.Signups || {};
                            return o.a.createElement(n.Fragment, null, !c && r.length > 0 && o.a.createElement("div", {
                                ref: function(t) {
                                    return e.dealsRef = t
                                },
                                className: "rsdeals mb-4 ".concat(this.props.superDealUI && r.length > 0 ? "superDealRS" : "")
                            }, o.a.createElement("div", {
                                className: "container"
                            }, o.a.createElement("div", {
                                className: this.props.superDealUI ? "rs-deals-container " + l + s : l + s
                            }, o.a.createElement("div", {
                                className: i ? "d-flex explore-rsdeal__header" : "d-block"
                            }, o.a.createElement("div", {
                                className: "rsdeals__header text-center"
                            }, o.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: this.props.superDealUI ? u.FoundLowFareDeals : u.superDealHeading
                                }
                            })), i && o.a.createElement("div", {
                                className: "explore-link text-right"
                            }, o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return e.seeMoreClick()
                                }
                            }, "See more"))), r.length > 0 && o.a.createElement(n.Fragment, null, this.renderDeals(r)), "mobile" === window.platform ? o.a.createElement("div", {
                                className: "rsdeals__block-terms"
                            }, u.superDealDisclaimer, o.a.createElement(k.a, null, o.a.createElement("span", {
                                className: "icon-mweb primary--color icon--info"
                            }), o.a.createElement("span", null, u.superDealDisclaimer1, o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return e.togglePopup(!0, window.cockpitSetting.LinkSettings.TaxesFeesUrl, u.generalDisclaimer2)
                                }
                            }, u.generalDisclaimer2), " ", u.And, " ", o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return e.togglePopup(!0, window.cockpitSetting.LinkSettings.FlightServiceFeeUrl, u.generalDisclaimer3)
                                }
                            }, u.generalDisclaimer3), ". ", u.GeoDealsDescription8, o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return e.togglePopup(!0, window.cockpitSetting.LinkSettings.TermsConditionUrl, "service fees")
                                }
                            }, u.allBookingTNC), ". Ref: ", o.a.createElement("span", {
                                dangerouslySetInnerHTML: {
                                    __html: this.getRef()
                                }
                            }))), this.state.showPopup && o.a.createElement("section", {
                                className: "info-section appbnr-ch"
                            }, o.a.createElement(D.a, {
                                url: this.state.popupUrl,
                                title: this.state.popupTitle,
                                togglePopup: this.togglePopup,
                                showClose: !0
                            }))) : o.a.createElement("div", {
                                className: "rsdeals__block-terms"
                            }, a && o.a.createElement("button", {
                                onClick: function() {
                                    return e.exploreBtnClick()
                                },
                                className: "btn btn-lg btn-block explore-btn"
                            }, "Explore All"), o.a.createElement("span", null, u.superDealDisclaimer, " ", o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return window.open(window.cockpitSetting.LinkSettings.TaxesFeesUrl, "taxfee", "width=540,height=400,resizable=no,scrollbars=yes,toolbar=no,status=no,titlebar=no")
                                }
                            }, u.taxes, "  & ", u.fees, " "), " ", u.and, " ", o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return window.open(window.cockpitSetting.LinkSettings.ServiceFeeUrl, "ServiceFee", "width=540,height=400,resizable=no,scrollbars=yes,toolbar=no,status=no,titlebar=no")
                                }
                            }, u.ourService), ". ", u.superDealDisclaimer1, " ", o.a.createElement("span", {
                                className: "a-link",
                                onClick: function() {
                                    return window.open(window.cockpitSetting.LinkSettings.BookingConditionsUrl, "TermsConditions", "width=540,height=400,resizable=no,scrollbars=yes,toolbar=no,status=no,titlebar=no")
                                }
                            }, u.allBookingTNC), ". ref ", this.getRef()))))))
                        }
                    }]) && C(t.prototype, r), a && C(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component),
                z = Object(c.connect)((function(e) {
                    return {
                        selectedCurrency: e.currencyDetails.selectedCurrency,
                        userDetails: e.userDetails
                    }
                }))(G);

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a, i, c = [],
                            l = !0,
                            s = !1;
                        try {
                            if (a = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                l = !1
                            } else
                                for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0);
                        } catch (u) {
                            s = !0, o = u
                        } finally {
                            try {
                                if (!l && null != r.return && (i = r.return(), Object(i) !== i)) return
                            } finally {
                                if (s) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return H(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var W = i()({
                loader: function() {
                    return r.e(33).then(r.bind(null, "hXIb"))
                },
                modules: ["recentSearch/RecentSearches"],
                webpack: function() {
                    return ["hXIb"]
                },
                loading: function() {
                    return o.a.createElement("span", {
                        className: "sr-only"
                    })
                }
            });
            t.default = function(e) {
                var t = e.currTab,
                    r = M(Object(n.useState)(window.cockpitSetting.ApplicationSettings.ShowSuperDeals || !1), 2),
                    a = r[0],
                    i = r[1],
                    c = window.appSettings && 92 === window.appSettings.portalId;
                Object(n.useEffect)((function() {
                    document.body.classList && c && document.body.classList.add("superDealUI")
                }), []);
                var l = function() {
                    return c ? o.a.createElement("div", {
                        className: "rsdeals superDealRS"
                    }, o.a.createElement("div", {
                        className: "row"
                    }, o.a.createElement("div", {
                        className: "rsDealsWrap rs-deals-redesign"
                    }, o.a.createElement("div", {
                        className: "rsdeals__item col-md-4 is--loading"
                    }, o.a.createElement("div", {
                        className: "rs-deals-item-new"
                    }, o.a.createElement("div", {
                        className: "loader"
                    }, " "), o.a.createElement("div", {
                        className: "loader1"
                    }, " "))), o.a.createElement("div", {
                        className: "rsdeals__item col-md-4 is--loading"
                    }, o.a.createElement("div", {
                        className: "rs-deals-item-new"
                    }, o.a.createElement("div", {
                        className: "loader"
                    }, " "), o.a.createElement("div", {
                        className: "loader1"
                    }, " "))), o.a.createElement("div", {
                        className: "rsdeals__item col-md-4 is--loading"
                    }, o.a.createElement("div", {
                        className: "rs-deals-item-new"
                    }, o.a.createElement("div", {
                        className: "loader"
                    }, " "), o.a.createElement("div", {
                        className: "loader1"
                    }, " ")))))) : null
                };
                return o.a.createElement(n.Fragment, null, a ? o.a.createElement(z, {
                    hideRsDeals: function(e) {
                        window.AnalyticsServiceLogEvent({
                            Category: "superdeals",
                            Action: "impressions",
                            Values: {
                                DealType: "superdeals",
                                Status: "fallback called",
                                Reason: e
                            }
                        }), i(!1)
                    },
                    currTab: t,
                    superDealUI: !!c,
                    renderLoader: l
                }) : o.a.createElement(W, {
                    currTab: t,
                    superDealUI: !!c,
                    renderLoader: l
                }))
            }
        },
        sEqU: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return l
            })), r.d(t, "b", (function() {
                return s
            }));
            var n = r("YAlb"),
                o = r("1hoQ");

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i() {
                i = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, r) {
                        e[t] = r.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    c = o.iterator || "@@iterator",
                    l = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

                function u(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (P) {
                    u = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function p(e, t, r, o) {
                    var a = t && t.prototype instanceof m ? t : m,
                        i = Object.create(a.prototype),
                        c = new D(o || []);
                    return n(i, "_invoke", {
                        value: L(e, r, c)
                    }), i
                }

                function f(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                e.wrap = p;
                var d = {};

                function m() {}

                function h() {}

                function y() {}
                var v = {};
                u(v, c, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    w = g && g(g(N([])));
                w && w !== t && r.call(w, c) && (v = w);
                var b = y.prototype = m.prototype = Object.create(v);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        u(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function S(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, i) {
                            function c() {
                                return new t((function(o, c) {
                                    ! function n(o, i, c, l) {
                                        var s = f(e[o], e, i);
                                        if ("throw" !== s.type) {
                                            var u = s.arg,
                                                p = u.value;
                                            return p && "object" == a(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, c, l)
                                            }), (function(e) {
                                                n("throw", e, c, l)
                                            })) : t.resolve(p).then((function(e) {
                                                u.value = e, c(u)
                                            }), (function(e) {
                                                return n("throw", e, c, l)
                                            }))
                                        }
                                        l(s.arg)
                                    }(n, i, o, c)
                                }))
                            }
                            return o = o ? o.then(c, c) : c()
                        }
                    })
                }

                function L(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw a;
                            return O()
                        }
                        for (r.method = o, r.arg = a;;) {
                            var i = r.delegate;
                            if (i) {
                                var c = _(i, r);
                                if (c) {
                                    if (c === d) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var l = f(e, t, r);
                            if ("normal" === l.type) {
                                if (n = r.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (n = "completed", r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function _(e, t) {
                    var r = t.method,
                        n = e.iterator[r];
                    if (void 0 === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), d;
                    var o = f(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, d;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function D(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[c];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = y, n(b, "constructor", {
                    value: y,
                    configurable: !0
                }), n(y, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = u(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, u(e, s, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(S.prototype), u(S.prototype, l, (function() {
                    return this
                })), e.AsyncIterator = S, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new S(p(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, E(b), u(b, s, "Generator"), u(b, c, (function() {
                    return this
                })), u(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        r = [];
                    for (var n in t) r.push(n);
                    return r.reverse(),
                        function e() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, D.prototype = {
                    constructor: D,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function c(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value
                } catch (s) {
                    return void r(s)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, o)
            }
            var l = function(e) {
                    return Object(n.c)({
                        name: "baggageSeatAvailability",
                        url: "?guid=" + e
                    })
                },
                s = function() {
                    var e, t = (e = i().mark((function e() {
                        var t, r, n, a, c, l;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = null, e.next = 3, o.a.getUserBookingDetails("v5");
                                case 3:
                                    return (r = e.sent) && r.data && r.data.AllBookingDetails && r.data.AllBookingDetails.length > 0 && (n = r.data.AllBookingDetails, a = u(n), c = a.transactionID, l = a.transactionGUID, t = p(n, c, l)), e.abrupt("return", t);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var a = e.apply(t, r);

                            function i(e) {
                                c(a, n, o, i, l, "next", e)
                            }

                            function l(e) {
                                c(a, n, o, i, l, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                u = function(e) {
                    var t = null,
                        r = null;
                    if (e)
                        for (var n = 0; n < e.length; n++)
                            if ((2 === e[n].FlowType || 3 === e[n].FlowType || 1 === e[n].FlowType) && (!e[n].ParentTid || e[n].TransactionID === e[n].ParentTid)) {
                                t = e[n].TransactionID, r = e[n].TransactionGUID;
                                break
                            }
                    return {
                        transactionID: t,
                        transactionGUID: r
                    }
                },
                p = function(e, t, r) {
                    var n = {
                            flight: null,
                            hotel: null,
                            car: null,
                            transactionID: t,
                            transactionGUID: r
                        },
                        o = window.cockpitSetting.ApplicationSettings.monthDate;
                    return e.map((function(e) {
                        e.TransactionID !== t && t !== e.ParentTid || (1 === e.FlowType && (n.flight = {
                            tid: e.TransactionID,
                            pnr: e.PNR,
                            airline: e.AirlineName,
                            origin: e.FromCityCode,
                            destination: e.ToCityCode,
                            departDate: new Date(e.FromDateTime).format(o),
                            returnDate: new Date(e.ToDateTime).format(o),
                            travelers: e.Traveler,
                            isInsuranceBooked: e.isInsuranceBookedFlight,
                            tripType: e.TripType
                        }), 2 === e.FlowType && (n.car = {
                            tid: e.TransactionID,
                            pickUpLoc: e.FromCityCode,
                            dropOffLoc: e.ToCityCode,
                            pickUpDate: new Date(e.FromDateTime).format(o),
                            dropOffDate: new Date(e.ToDateTime).format(o),
                            carCompany: e.CarCompanyName
                        }), 3 === e.FlowType && (n.hotel = {
                            tid: e.TransactionID,
                            destination: e.ToCity,
                            checkinDate: new Date(e.FromDateTime).format(o),
                            checkoutDate: new Date(e.ToDateTime).format(o),
                            rooms: e.NumberofRooms,
                            travelers: e.Traveler,
                            hotelName: e.HotelName
                        }))
                    })), n
                }
        }
    }
]);
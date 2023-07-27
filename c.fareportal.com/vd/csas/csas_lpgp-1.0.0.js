window.AnalyticsService = function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 10)
}([function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(4),
            r = n(5),
            i = setTimeout;

        function a(e) {
            return Boolean(e && void 0 !== e.length)
        }

        function c() {}

        function u(e) {
            if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(e, this)
        }

        function l(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, u._immediateFn((function() {
                var n, o = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== o) {
                    try {
                        n = o(e._value)
                    } catch (n) {
                        return void f(t.promise, n)
                    }
                    s(t.promise, n)
                } else(1 === e._state ? s : f)(t.promise, e._value)
            }))) : e._deferreds.push(t)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof u) return e._state = 3, e._value = t, void p(e);
                    if ("function" == typeof n) return void y((o = n, r = t, function() {
                        o.apply(r, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, p(e)
            } catch (t) {
                f(e, t)
            }
            var o, r
        }

        function f(e, t) {
            e._state = 2, e._value = t, p(e)
        }

        function p(e) {
            2 === e._state && 0 === e._deferreds.length && u._immediateFn((function() {
                e._handled || u._unhandledRejectionFn(e._value)
            }));
            for (var t = 0, n = e._deferreds.length; t < n; t++) l(e, e._deferreds[t]);
            e._deferreds = null
        }

        function d(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function y(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0, s(t, e))
                }), (function(e) {
                    n || (n = !0, f(t, e))
                }))
            } catch (e) {
                if (n) return;
                n = !0, f(t, e)
            }
        }
        u.prototype.catch = function(e) {
            return this.then(null, e)
        }, u.prototype.then = function(e, t) {
            var n = new this.constructor(c);
            return l(this, new d(e, t, n)), n
        }, u.prototype.finally = o.a, u.all = function(e) {
            return new u((function(t, n) {
                if (!a(e)) return n(new TypeError("Promise.all accepts an array"));
                var o = Array.prototype.slice.call(e);
                if (0 === o.length) return t([]);
                for (var r = o.length, i = 0; i < o.length; i++) ! function e(i, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var c = a.then;
                            if ("function" == typeof c) return void c.call(a, (function(t) {
                                e(i, t)
                            }), n)
                        }
                        o[i] = a, 0 == --r && t(o)
                    } catch (a) {
                        n(a)
                    }
                }(i, o[i])
            }))
        }, u.allSettled = r.a, u.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === u ? e : new u((function(t) {
                t(e)
            }))
        }, u.reject = function(e) {
            return new u((function(t, n) {
                n(e)
            }))
        }, u.race = function(e) {
            return new u((function(t, n) {
                if (!a(e)) return n(new TypeError("Promise.race accepts an array"));
                for (var o = 0, r = e.length; o < r; o++) u.resolve(e[o]).then(t, n)
            }))
        }, u._immediateFn = "function" == typeof e ? function(t) {
            e(t)
        } : function(e) {
            i(e, 0)
        }, u._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, t.a = u
    }).call(this, n(6).setImmediate)
}, function(e, t, n) {
    (function(e) {
        var o = Object.getOwnPropertyDescriptors || function(e) {
                for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);
                return n
            },
            r = /%[sdj%]/g;
        t.format = function(e) {
            if (!m(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
                return t.join(" ")
            }
            n = 1;
            for (var o = arguments, i = o.length, a = String(e).replace(r, (function(e) {
                    if ("%%" === e) return "%";
                    if (i <= n) return e;
                    switch (e) {
                        case "%s":
                            return String(o[n++]);
                        case "%d":
                            return Number(o[n++]);
                        case "%j":
                            try {
                                return JSON.stringify(o[n++])
                            } catch (e) {
                                return "[Circular]"
                            }
                        default:
                            return e
                    }
                })), u = o[n]; n < i; u = o[++n]) g(u) || !w(u) ? a += " " + u : a += " " + c(u);
            return a
        }, t.deprecate = function(n, o) {
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, o).apply(this, arguments)
            };
            var r = !1;
            return function() {
                if (!r) {
                    if (e.throwDeprecation) throw new Error(o);
                    e.traceDeprecation ? console.trace(o) : console.error(o), r = !0
                }
                return n.apply(this, arguments)
            }
        };
        var i, a = {};

        function c(e, n) {
            var o = {
                seen: [],
                stylize: l
            };
            return 3 <= arguments.length && (o.depth = arguments[2]), 4 <= arguments.length && (o.colors = arguments[3]), y(n) ? o.showHidden = n : n && t._extend(o, n), v(o.showHidden) && (o.showHidden = !1), v(o.depth) && (o.depth = 2), v(o.colors) && (o.colors = !1), v(o.customInspect) && (o.customInspect = !0), o.colors && (o.stylize = u), s(o, e, o.depth)
        }

        function u(e, t) {
            return (t = c.styles[t]) ? "[" + c.colors[t][0] + "m" + e + "[" + c.colors[t][1] + "m" : e
        }

        function l(e, t) {
            return e
        }

        function s(e, n, o) {
            if (e.customInspect && n && O(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) return m(i = n.inspect(o, e)) || (i = s(e, i, o)), i;
            if (u = function(e, t) {
                    if (v(t)) return e.stylize("undefined", "undefined");
                    if (m(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    return h(t) ? e.stylize("" + t, "number") : y(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
                }(e, n)) return u;
            var r, i = Object.keys(n),
                a = (r = {}, i.forEach((function(e, t) {
                    r[e] = !0
                })), r);
            if (e.showHidden && (i = Object.getOwnPropertyNames(n)), S(n) && (0 <= i.indexOf("message") || 0 <= i.indexOf("description"))) return f(n);
            if (0 === i.length) {
                if (O(n)) {
                    var c = n.name ? ": " + n.name : "";
                    return e.stylize("[Function" + c + "]", "special")
                }
                if (b(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (j(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (S(n)) return f(n)
            }
            var u = "",
                l = !1;
            c = ["{", "}"];
            return d(n) && (l = !0, c = ["[", "]"]), O(n) && (u = " [Function" + (n.name ? ": " + n.name : "") + "]"), b(n) && (u = " " + RegExp.prototype.toString.call(n)), j(n) && (u = " " + Date.prototype.toUTCString.call(n)), S(n) && (u = " " + f(n)), 0 !== i.length || l && 0 != n.length ? o < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), i = l ? function(e, t, n, o, r) {
                for (var i = [], a = 0, c = t.length; a < c; ++a) E(t, String(a)) ? i.push(p(e, t, n, o, String(a), !0)) : i.push("");
                return r.forEach((function(r) {
                    r.match(/^\d+$/) || i.push(p(e, t, n, o, r, !0))
                })), i
            }(e, n, o, a, i) : i.map((function(t) {
                return p(e, n, o, a, t, l)
            })), e.seen.pop(), function(e, t, n) {
                return 60 < e.reduce((function(e, t) {
                    return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }), 0) ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }(i, u, c)) : c[0] + u + c[1]
        }

        function f(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function p(e, t, n, o, r, i) {
            var a, c;
            if ((t = Object.getOwnPropertyDescriptor(t, r) || {
                    value: t[r]
                }).get ? c = t.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : t.set && (c = e.stylize("[Setter]", "special")), E(o, r) || (a = "[" + r + "]"), c || (e.seen.indexOf(t.value) < 0 ? -1 < (c = g(n) ? s(e, t.value, null) : s(e, t.value, n - 1)).indexOf("\n") && (c = i ? c.split("\n").map((function(e) {
                    return "  " + e
                })).join("\n").substr(2) : "\n" + c.split("\n").map((function(e) {
                    return "   " + e
                })).join("\n")) : c = e.stylize("[Circular]", "special")), v(a)) {
                if (i && r.match(/^\d+$/)) return c;
                a = (a = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), e.stylize(a, "string"))
            }
            return a + ": " + c
        }

        function d(e) {
            return Array.isArray(e)
        }

        function y(e) {
            return "boolean" == typeof e
        }

        function g(e) {
            return null === e
        }

        function h(e) {
            return "number" == typeof e
        }

        function m(e) {
            return "string" == typeof e
        }

        function v(e) {
            return void 0 === e
        }

        function b(e) {
            return w(e) && "[object RegExp]" === _(e)
        }

        function w(e) {
            return "object" == typeof e && null !== e
        }

        function j(e) {
            return w(e) && "[object Date]" === _(e)
        }

        function S(e) {
            return w(e) && ("[object Error]" === _(e) || e instanceof Error)
        }

        function O(e) {
            return "function" == typeof e
        }

        function _(e) {
            return Object.prototype.toString.call(e)
        }

        function A(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(n) {
            var o;
            return v(i) && (i = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), a[n] || (new RegExp("\\b" + n + "\\b", "i").test(i) ? (o = e.pid, a[n] = function() {
                var e = t.format.apply(t, arguments);
                console.error("%s %d: %s", n, o, e)
            }) : a[n] = function() {}), a[n]
        }, (t.inspect = c).colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, c.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = d, t.isBoolean = y, t.isNull = g, t.isNullOrUndefined = function(e) {
            return null == e
        }, t.isNumber = h, t.isString = m, t.isSymbol = function(e) {
            return "symbol" == typeof e
        }, t.isUndefined = v, t.isRegExp = b, t.isObject = w, t.isDate = j, t.isError = S, t.isFunction = O, t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = n(8);
        var T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function E(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            var e, n;
            console.log("%s - %s", (n = [A((e = new Date).getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":"), [e.getDate(), T[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
        }, t.inherits = n(9), t._extend = function(e, t) {
            if (!t || !w(t)) return e;
            for (var n = Object.keys(t), o = n.length; o--;) e[n[o]] = t[n[o]];
            return e
        };
        var I = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

        function P(e, t) {
            var n;
            return e || ((n = new Error("Promise was rejected with a falsy value")).reason = e, e = n), t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (I && e[I]) {
                var t;
                if ("function" != typeof(t = e[I])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, I, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), t
            }

            function t() {
                for (var t, n, o = new Promise((function(e, o) {
                        t = e, n = o
                    })), r = [], i = 0; i < arguments.length; i++) r.push(arguments[i]);
                r.push((function(e, o) {
                    e ? n(e) : t(o)
                }));
                try {
                    e.apply(this, r)
                } catch (o) {
                    n(o)
                }
                return o
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), I && Object.defineProperty(t, I, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(t, o(e))
        }, t.promisify.custom = I, t.callbackify = function(t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');

            function n() {
                for (var n = [], o = 0; o < arguments.length; o++) n.push(arguments[o]);
                var r = n.pop();
                if ("function" != typeof r) throw new TypeError("The last argument must be of type Function");

                function i() {
                    return r.apply(a, arguments)
                }
                var a = this;
                t.apply(this, n).then((function(t) {
                    e.nextTick(i, null, t)
                }), (function(t) {
                    e.nextTick(P, t, i)
                }))
            }
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, o(t)), n
        }
    }).call(this, n(3))
}, function(e, t) {
    var n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    var n, o;
    e = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            n = r
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            o = i
        }
    }();
    var c, u = [],
        l = !1,
        s = -1;

    function f() {
        l && c && (l = !1, c.length ? u = c.concat(u) : s = -1, u.length && p())
    }

    function p() {
        if (!l) {
            var e = a(f);
            l = !0;
            for (var t = u.length; t;) {
                for (c = u, u = []; ++s < t;) c && c[s].run();
                s = -1, t = u.length
            }
            c = null, l = !1,
                function(e) {
                    if (o === clearTimeout) return clearTimeout(e);
                    if ((o === i || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                    try {
                        o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function y() {}
    e.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new d(e, t)), 1 !== u.length || l || a(p)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = y, e.addListener = y, e.once = y, e.off = y, e.removeListener = y, e.removeAllListeners = y, e.emit = y, e.prependListener = y, e.prependOnceListener = y, e.listeners = function(e) {
        return []
    }, e.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, e.cwd = function() {
        return "/"
    }, e.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, e.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return new this((function(t, n) {
            if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var o = Array.prototype.slice.call(e);
            if (0 === o.length) return t([]);
            for (var r = o.length, i = 0; i < o.length; i++) ! function e(n, i) {
                if (i && ("object" == typeof i || "function" == typeof i)) {
                    var a = i.then;
                    if ("function" == typeof a) return void a.call(i, (function(t) {
                        e(n, t)
                    }), (function(e) {
                        o[n] = {
                            status: "rejected",
                            reason: e
                        }, 0 == --r && t(o)
                    }))
                }
                o[n] = {
                    status: "fulfilled",
                    value: i
                }, 0 == --r && t(o)
            }(i, o[i])
        }))
    }
}, function(e, t, n) {
    (function(e) {
        var o = void 0 !== e && e || "undefined" != typeof self && self || window,
            r = Function.prototype.apply;

        function i(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function() {
            return new i(r.call(setTimeout, o, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new i(r.call(setInterval, o, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
            this._clearFn.call(o, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }), t))
        }, n(7), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(2))
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            var o, r, i, a, c, u, l, s, f;

            function p(e) {
                delete r[e]
            }

            function d(e) {
                if (i) setTimeout(d, 0, e);
                else {
                    var t = r[e];
                    if (t) {
                        i = !0;
                        try {
                            ! function() {
                                var e = t.callback,
                                    n = t.args;
                                switch (n.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(n[0]);
                                        break;
                                    case 2:
                                        e(n[0], n[1]);
                                        break;
                                    case 3:
                                        e(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        e.apply(void 0, n)
                                }
                            }()
                        } finally {
                            p(e), i = !1
                        }
                    }
                }
            }

            function y(t) {
                t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && d(+t.data.slice(s.length))
            }
            e.setImmediate || (o = 1, i = !(r = {}), a = e.document, f = (f = Object.getPrototypeOf && Object.getPrototypeOf(e)) && f.setTimeout ? f : e, c = "[object process]" === {}.toString.call(e.process) ? function(e) {
                t.nextTick((function() {
                    d(e)
                }))
            } : function() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }() ? (s = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", y, !1) : e.attachEvent("onmessage", y), function(t) {
                e.postMessage(s + t, "*")
            }) : e.MessageChannel ? ((l = new MessageChannel).port1.onmessage = function(e) {
                d(e.data)
            }, function(e) {
                l.port2.postMessage(e)
            }) : a && "onreadystatechange" in a.createElement("script") ? (u = a.documentElement, function(e) {
                var t = a.createElement("script");
                t.onreadystatechange = function() {
                    d(e), t.onreadystatechange = null, u.removeChild(t), t = null
                }, u.appendChild(t)
            }) : function(e) {
                setTimeout(d, 0, e)
            }, f.setImmediate = function(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                return e = {
                    callback: e,
                    args: t
                }, r[o] = e, c(o), o++
            }, f.clearImmediate = p)
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(2), n(3))
}, function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        function n() {}
        e.super_ = t, n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0);

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i = function(e, t) {
        try {
            window.localStorage && ("object" == r(t) ? window.localStorage.setItem(e, JSON.stringify(t)) : window.localStorage.setItem(e, t))
        } catch (e) {
            console.log(e)
        }
    };

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var c = function(e, t) {
        function n(e, t) {
            for (var n in t)
                if ("boolean" == typeof t[n]) t[n] !== e && delete t[n];
                else if ("object" === a(t[n])) {
                for (var o in t[n]) t[n][o] !== e && delete t[n][o];
                0 === Object.keys(t[n]).length && delete t[n]
            } else delete t[n]
        }

        function o() {
            i(f, g)
        }

        function r() {
            var t;
            0 != g.length && (t = g, g = [], t.forEach((function(t) {
                return e[t.action] && e[t.action](Object.assign({}, t.obj))
            })), o()), v = !1
        }

        function c(e) {
            m || (b || function() {
                try {
                    var e = function(e) {
                        try {
                            if (window.localStorage && window.localStorage.hasOwnProperty(e)) return window.localStorage.getItem(e)
                        } catch (e) {
                            console.log(e)
                        }
                        return null
                    }(f);
                    !e || (e = JSON.parse(e)) && 0 < e.length && (g = e.concat(g)), b = !0
                } catch (e) {
                    console.warn("AnalyticsService ERROR: Failed to parse EventQueue."), b = !0
                }
            }(), g.push(e), o(), h && (v || (v = !0, setTimeout((function() {
                r()
            }), 1e3))))
        }
        var u, l, s, f = "as_queue_".concat(e.Code || e.Name),
            p = "logEventPolicy",
            d = "override",
            y = Object.assign({}, t),
            g = [],
            h = !1,
            m = !1,
            v = !1,
            b = !1;
        return {
            code: e.Code,
            name: e.Name,
            init: function(t, n, o) {
                return e.Init(t, o).then((function() {
                    return m = !(h = !0), r(), {
                        isInit: !0,
                        index: n,
                        code: e.Code,
                        name: e.Name
                    }
                })).catch((function(t) {
                    return m = !0, g = [],
                        function(e) {
                            try {
                                window.localStorage && window.localStorage.hasOwnProperty(e) && window.localStorage.removeItem(e)
                            } catch (e) {
                                console.log(e)
                            }
                        }(f), {
                            isInit: !1,
                            index: n,
                            code: e.Code,
                            name: e.Name,
                            error: t
                        }
                }))
            },
            isInitialized: function(e) {
                return e && (m = !1), h
            },
            processAction: (s = c, y.shouldProcessAction && (s = function(e) {
                y.shouldProcessAction(e) && c(e)
            }), y[p] && (!0 === y[p].disableLoggingByDefault ? "object" === a(y[p][d]) ? (n(!0, y[p][d]), l = s, s = function(e) {
                var t, n, o;
                "LogEvent" === e.action ? (t = e.obj.Category, n = e.obj.Action, (!0 === (o = y[p][d])[t] || o[t] && !0 === o[t][n]) && l(e)) : l(e)
            }) : y.shouldProcessAction || (s = function() {}) : "object" === a(y[p][d]) ? (n(!1, y[p][d]), u = s, s = function(e) {
                var t, n, o;
                "LogEvent" === e.action ? (t = e.obj.Category, n = e.obj.Action, (void 0 === (o = y[p][d])[t] || !1 !== o[t] && void 0 === o[t][n]) && u(e)) : u(e)
            }) : console.log("in else")), s)
        }
    };

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var l, s, f, p, d, y, g = "connectionString",
        h = "projectid";

    function m() {
        for (var e in f) f[e].forEach((function(e) {
            try {
                Launchpad.addAttribute(e.key, e.value)
            } catch (e) {}
        }))
    }
    var v, b, w, j, S, O, _ = (s = !1, f = {
            profileAttributes: [],
            sessionAttributes: [],
            commonAttributes: {}
        }, p = l = null, d = "https://c.fareportal.com/vd/lp/lp-0.0.9-beta.2.js", y = {
            Code: "lp",
            Name: "LaunchpadProvider",
            Init: function(e, t) {
                var n = this;
                return !e || !e.data || (!e.data[g] || "string" != typeof e.data[g] || e.data[g].length < 1 || e.data[g].trim().length < 1) && (!e.data[h] || "string" != typeof e.data[h] || e.data[h].length < 1 || e.data[h].trim().length < 1) ? (l = null, s = !1, attempts = 0, console.warn("".concat(this.Name, " ERROR: LaunchpadConnectionString cannot be blank.")), o.a.reject("".concat(this.Name, "'s connection string cannot be blank."))) : (t && (f = t), !0 !== e._reinitialize && !0 !== e.data._reinitialize || (p && clearInterval(p), s = !1, attempts = 0, p = l = null, t = {
                    profileAttributes: [],
                    sessionAttributes: []
                }), e.scriptUrl && (d = e.scriptUrl), l = l || new o.a((function(t, o) {
                    window.Launchpad ? Launchpad.isEventInitialized() ? (s = !0, m(), t()) : Launchpad.initEvents(e.data).then((function() {
                        s = !0, m(), t()
                    })) : function(e, t, n, o) {
                        var r = t;
                        document.getElementById(r) || ((t = document.createElement("script")).id = r, t.async = !0, t.src = e, n && (t.onload = n), o && (t.onerror = o), document.getElementsByTagName("head")[0].appendChild(t))
                    }(d, "launchpad", (function() {
                        Launchpad.initEvents(e.data).then((function() {
                            s = !0, m(), t()
                        })).catch((function(e) {
                            console.error(e), o("Failed to initialize ".concat(n.Name, ", Failed to initialize Launchpad."))
                        }))
                    }), (function() {
                        o("Failed to initialize ".concat(n.Name, ", Failed to initialize Launchpad."))
                    }))
                })))
            },
            SetProfileAttribute: function(e, t) {
                var n = e;
                "object" == u(e) && (n = e.key, t = e.value), Launchpad.addAttribute(n, t)
            },
            SetSessionAttribute: function(e, t) {
                var n = e;
                "object" == u(e) && (n = e.key, t = e.value), Launchpad.addAttribute(n, t)
            },
            LogEvent: function(e) {
                var t;
                s && e && ("pageView" == e.Action && (e.Values || (e.Values = {}), e.pageUrl && (e.Values.pageUrl = e.pageUrl), e.pageTitle && (e.Values.pageTitle = e.pageTitle)), t = [], e.Category && t.push(e.Category), e.Action && t.push(e.Action), e.values = {}, Array.isArray(e.Values) ? e.Values.forEach((function(n) {
                    n.key && (n.value ? e.values[n.key] = n.value : t.push(n.key))
                })) : (e.Values && e.Values.key && t.push(e.Values.key), e.values = e.Values), e.name = t.join("_"), delete e.Category, delete e.Action, delete e.Values, Launchpad.logEvent(e))
            }
        }, {
            Instance: function() {
                return y
            },
            IsInitialized: function() {
                return !!l && s
            }
        }),
        A = n(1);

    function T(e) {
        return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function E(e) {
        if (window.GoogleDMSMap && window.GoogleDMSMap.dimensionsMap && window.GoogleDMSMap.metricsMap) {
            var t = GoogleDMSMap.dimensionsMap[e];
            if (t) return "dimension" + t.toString();
            if (t = GoogleDMSMap.metricsMap[e]) return "metric" + t.toString()
        }
        return null
    }
    var I = (b = !1, j = 0, O = {
        Code: "gp",
        Name: "GoogleProvider",
        Init: function(e, t) {
            var n = this;
            return e && !0 === e._reinitialize && (S && clearInterval(S), S = v = null, j = 0), v = v || new o.a((function(e, t) {
                S = setInterval((function() {
                    var o;
                    40 <= j ? (clearInterval(S), v = null, b = !1, j = 0, t("Failed to initialize ".concat(n.Name, ", ga is missing."))) : window.ga && window.ga.getAll ? (clearInterval(S), (o = ga.getAll()) && 0 < o.length ? (w = o[0].get("name") + ".", b = !0, j = 0, e()) : t("Failed to initialize ".concat(n.Name, ", ga trackerList is missing."))) : j++
                }), 250)
            }))
        },
        SetProfileAttribute: function(e, t) {
            var n = e;
            "object" == T(e) && (n = e.key, t = e.value), (n = E(n)) && ga(w + "set", n, t)
        },
        SetSessionAttribute: function(e, t) {
            var n = e;
            "object" == T(e) && (n = e.key, t = e.value), (n = E(n)) && ga(w + "set", n, t)
        },
        getNonInteractionValue: function(e) {
            var t = !1;
            return Object(A.isArray)(e) && 0 < e.length ? t = e[0].nonInteraction || !1 : 0 < Object.keys(e).length && (t = e.nonInteraction || !1), t
        },
        LogEvent: function(e) {
            var t, n, o;
            "pageView" === e.Action || "pageview" === e.Action ? ga(w + "send", {
                hitType: "pageview",
                page: e.pageUrl || e.pageurl || e.url || "",
                title: e.pageTitle || e.pagetitle || e.title || ""
            }) : (t = e.Values ? Object(A.isArray)(e.Values) && 0 < e.Values.length ? e.Values[0].key : 0 < Object.keys(e.Values).length ? e.Values.key : "" : "", n = e.Values ? Object(A.isArray)(e.Values) && 0 < e.Values.length ? e.Values[0].value : 0 < Object.keys(e.Values).length ? e.Values.value : null : null, o = !!e.Values && this.getNonInteractionValue(e.Values), n ? ga(w + "send", "event", e.Category, e.Action, t, n, {
                nonInteraction: o
            }) : ga(w + "send", "event", e.Category, e.Action, t, {
                nonInteraction: o
            }))
        }
    }, {
        Instance: function() {
            return O
        },
        IsInitialized: function() {
            return !!v && b
        }
    });

    function P(e) {
        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function k(e, t) {
        var n, o = Object.keys(e);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), o.push.apply(o, n)), o
    }

    function x(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? k(Object(n), !0).forEach((function(t) {
                var o, r;
                o = e, t = n[r = t], r in o ? Object.defineProperty(o, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[r] = t
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function N(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
        e && (e.queue && 0 < e.queue.length ? o = "queue" : e.events && 0 < e.events.length && (o = "events"));
        var o = o ? e[o] : [];
        return {
            personalAttribute: e && e.personalAttribute || [],
            profileAttributes: e && e.profileAttributes || [],
            sessionAttributes: e && e.sessionAttributes || [],
            commonAttributes: t ? F() : [],
            events: o.concat(n)
        }
    }
    var z, D, L, V, M, F = function() {
        var e = {},
            t = {},
            n = {},
            o = [];
        navigator && (e = {
            appCodeName: navigator.appCodeName || null,
            appName: navigator.appName || null,
            geolocation: navigator.geolocation || null,
            language: navigator.language || null,
            onLine: navigator.onLine || null,
            platform: navigator.platform || null,
            product: navigator.product || null,
            useragent: navigator.userAgent ? navigator.userAgent.replace(":", " ") : null
        }), screen && (t = {
            availHeight: screen.availHeight || null,
            availWidth: screen.availWidth || null,
            colorDepth: screen.colorDepth || null,
            height: screen.height || null,
            pixelDepth: screen.pixelDepth || null,
            width: screen.width || null
        }), window && window.location && (n = {
            url: window.location.href,
            referrer: document.referrer
        }), n.title = document.title || "";
        var r, i = x(x({}, n), {}, {
            browser: e,
            screen: t
        });
        for (r in i) o.push({
            key: r,
            value: i[r]
        });
        return o
    };
    z = 15e3, D = S = w = v = null, L = {}, V = N(), M = {}, n = {
        Init: function(e, t, n) {
            return !e || "object" != P(e) || Array.isArray(e) ? (D = null, L = [], z = 15e3, V = Object.assign({}, N(null, !1, V.events)), o.a.reject("AnalyticsService ERROR: Invalid config was passed.")) : (!0 === e._reinitialize && (D = null, L = {}, z = 15e3, V = Object.assign({}, N(null, !1, V.events))), t && Object.keys(t).forEach((function(e) {
                V[e] && 0 < V[e].length ? V[e] = V[e].concat(t[e]) : V[e] = t[e]
            })), z = null == n || null == n || isNaN(+n) ? 15e3 : n, D || (V = Object.assign({}, N(e.__preinit_data__, !0, V.events)), e.__preinit_hooks__ && e.__preinit_hooks__.addProviders && (M = e.__preinit_hooks__, delete e.__preinit__hooks__), delete e.__preinit_data__, L = {}, D = new o.a((function(t) {
                G(e).then((function() {
                    V.events = [], C(), t()
                })), setTimeout((function() {
                    V.events = [], C(), t()
                }), z)
            }))), D)
        },
        SetProfileAttribute: function(e, t) {
            return t = {
                key: e,
                value: t
            }, V.profileAttributes.push(t), R({
                action: "SetProfileAttribute",
                obj: t
            }), this
        },
        SetSessionAttribute: function(e, t) {
            return t = {
                key: e,
                value: t
            }, V.sessionAttributes.push(t), R({
                action: "SetSessionAttribute",
                obj: t
            }), this
        },
        LogEvent: function(e) {
            e.timestamp = e.timestamp || (new Date).toISOString(), R({
                action: "LogEvent",
                obj: e
            })
        },
        AddProvider: G,
        AddProviders: G,
        RemoveProviders: U,
        GetActiveProviders: function() {
            return Object.keys(L).map((function(e) {
                return e
            }))
        },
        Version: "1.0.0"
    };

    function C() {
        for (var e in M) M[e].resolve && "function" == typeof M[e].resolve && M[e].resolve()
    }

    function R(e) {
        0 === L.length && V.events.push(e), Object.keys(L).forEach((function(t) {
            try {
                L[t].processAction(e)
            } catch (e) {
                console.warn("AnalyticsService ERROR: ".concat(t, " failed to process action with:")), console.warn(e)
            }
        }))
    }

    function U(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        return Array.isArray(e) ? e.map((function(e) {
            return L[e] ? (delete L[e], !0) : (t || console.log("Could not find ".concat(e)), !1)
        })) : [!1]
    }

    function G(e) {
        return new o.a((function(t) {
            var n = {};
            Object.keys(e).forEach((function(t) {
                var o, r;
                e[t]._forceUpdate && U([t], !0), L[t] ? console.log("AnalyticsService INFO: ".concat(t, " already exists.")) : (r = e[t], "lp" == t || "LaunchpadProvider" == t ? o = new c(_.Instance(), r) : "gp" == t || "GoogleProvider" == t ? o = new c(I.Instance(), r) : e[t].instance && ((o = new c(e[t].instance, r)).Name = o.name || t), o && (L[o.name || t] = o, n[o.name || t] = o, V.events.forEach(o.processAction)))
            }));
            for (var o = 0, r = 0, i = Object.keys(n), a = 0; a < i.length; a++) {
                var u = n[i[a]],
                    l = e[u.code] ? u.code : u.name || i[a];
                u.init(e[l], a, V).then((function(a) {
                    var c = e[a.code] ? a.code : a.name || i[a.index];
                    a.isInit ? (e[c] && e[c].success && e[c].success(), e[c] && e[c].resolve && "function" == typeof e[c].resolve && e[c].resolve(), o++) : (e[c] && e[c].failure && e[c].failure(a.error), e[c] && e[c].reject && "function" == typeof e[c].reject && e[c].reject(), delete L[i[a.index]], r++), o + r === i.length && (n = null, t(L))
                }))
            }
        }))
    }
    t.default = n
}]).default;